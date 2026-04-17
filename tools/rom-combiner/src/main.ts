#!/usr/bin/env node
/**
 * ND-100/110/120 microcode EPROM tool.
 *
 *   combine [--high <f> --low <f> | --auto <f1> <f2>] --out <file.CODE>
 *   split   --in <file.CODE> --out-high <f> --out-low <f>
 *
 * The combine/split operations are pure byte interleaving - no XOR
 * transformation. The --auto mode figures out which of two chip images
 * is "high" and which is "low" by combining both orderings and picking
 * the one whose address-0 word looks like a valid ND microinstruction.
 *
 * After combining/splitting, the tool prints the detected microcode
 * version (read from the low 8 bits of address 0o20) and the detected
 * storage form (ND-110 token form vs ND-120 canonical form).
 */

import { readFileSync, writeFileSync } from "node:fs";
import {
  combineRoms,
  splitRoms,
  binaryToCodeBytes,
  parseCodeBytes,
  detectChipOrder,
  detectForm,
  readMicrocodeVersion,
  ROM_SIZE_BYTES,
} from "@nd100uc/microcode";

interface Args {
  command: "combine" | "split" | "help";
  high?: string;
  low?: string;
  auto?: [string, string];
  in?: string;
  out?: string;
  outHigh?: string;
  outLow?: string;
  xorFlip?: boolean;
  fill?: "empty" | "zero";
}

function parseArgs(argv: string[]): Args {
  const args: Args = { command: "help" };
  const cmd = argv[0];
  if (cmd === "combine" || cmd === "split") args.command = cmd;
  for (let i = 1; i < argv.length; i++) {
    const flag = argv[i];
    const val = argv[i + 1];
    switch (flag) {
      case "--high":      args.high = val; i++; break;
      case "--low":       args.low = val; i++; break;
      case "--auto":
        if (!val || !argv[i + 2]) die("--auto requires two file paths");
        args.auto = [val, argv[i + 2]!];
        i += 2;
        break;
      case "--in":        args.in = val; i++; break;
      case "--out":       args.out = val; i++; break;
      case "--out-high":  args.outHigh = val; i++; break;
      case "--out-low":   args.outLow = val; i++; break;
      case "--xor-flip":  args.xorFlip = true; break;
      case "--fill":
        if (val !== "empty" && val !== "zero") {
          die(`--fill must be "empty" or "zero", got "${val}"`);
        }
        args.fill = val; i++; break;
      case "-h":
      case "--help":
        args.command = "help"; break;
      default:
        die(`Unknown argument: ${flag}`);
    }
  }
  return args;
}

function die(msg: string): never {
  process.stderr.write(`error: ${msg}\n`);
  process.exit(1);
}

function printHelp(): void {
  process.stdout.write(`\
nd100uc-rom - Combine and split ND-100/110/120 microcode EPROM images

USAGE

  nd100uc-rom combine --high <chip> --low <chip> --out <file.CODE> [--xor-flip]
  nd100uc-rom combine --auto <chip1> <chip2>     --out <file.CODE> [--xor-flip]
      Interleave two 32-KiB EPROM images into one .CODE binary.
      With --auto, the tool detects which file is the HIGH chip.

  nd100uc-rom split   --in <file.CODE> --out-high <chip> --out-low <chip>
                      [--xor-flip] [--fill empty|zero]
      Split a .CODE binary into two 32-KiB EPROM images ready for burning.

OPTIONS

  --high <path>       HIGH chip path. For ND-110 3095: 37949L.bin.
                      For ND-120 AM27256: 45133L.bin.
  --low <path>        LOW chip path.  ND-110: 37948L.bin. ND-120: 45132L.bin.
  --auto <f1> <f2>    Pass two chip paths; the tool picks HIGH and LOW.
  --xor-flip          Apply XOR 0x0FC00000 during the operation. Rarely
                      needed - the tool does NOT apply any flip by default.
  --fill empty|zero   How to fill unused slots when splitting (default: empty).

POST-OPERATION REPORT

  After combining (or loading a .CODE file for splitting) the tool prints:
    - storage form     nd110 token form vs nd120 canonical form, detected
                       by comparing bits 22-27 of COMM-carrying instructions
                       against their canonical token encodings.
    - ROM version      The letter burned into low 8 bits of address 0o20.
                       J=0o12, K=0o13, L=0o14, M=0o15, ...

EXAMPLES

  # Auto-detect chip order and combine:
  nd100uc-rom combine --auto microcode/roms/37948L.bin microcode/roms/37949L.bin \\
      --out microcode/ND-110-3095-L.CODE

  # Explicit order:
  nd100uc-rom combine \\
      --high microcode/roms/AM27256_45133L.bin \\
      --low  microcode/roms/AM27256_45132L.bin \\
      --out  microcode/ND-120-AM27256-L.CODE

  # Split a .CODE file back to two chip images:
  nd100uc-rom split \\
      --in       microcode/ND-110-RASK.CODE \\
      --out-high out/37949L.bin \\
      --out-low  out/37948L.bin
`);
}

function printReport(microcode: Map<number, bigint>): void {
  const form = detectForm(microcode);
  const version = readMicrocodeVersion(microcode);
  process.stdout.write(
    `  storage form: ${form.form} ` +
    `(${(form.flagBitRatio * 100).toFixed(1)}% match token-form, ` +
    `confidence ${form.confidence.toFixed(2)}, ${form.nonEmptyCount} samples)\n`,
  );
  if (version) {
    process.stdout.write(
      `  ROM version:  ${version.octalValue} = letter '${version.letter}' ` +
      `(decimal ${version.decimalValue})\n`,
    );
  } else {
    process.stdout.write(`  ROM version:  (no data at address 0o20)\n`);
  }
}

function cmdCombine(args: Args): void {
  let highPath: string;
  let lowPath: string;

  if (args.auto) {
    const [a, b] = args.auto;
    const aBytes = new Uint8Array(readFileSync(a));
    const bBytes = new Uint8Array(readFileSync(b));
    const detection = detectChipOrder(aBytes, bBytes);
    if (detection.high === "a") {
      highPath = a;
      lowPath = b;
    } else {
      highPath = b;
      lowPath = a;
    }
    process.stdout.write(
      `auto-detect: HIGH = ${highPath}\n` +
      `             LOW  = ${lowPath}\n` +
      `             (${detection.reason})\n`,
    );
  } else {
    if (!args.high || !args.low) {
      die("combine requires either --auto or both --high and --low");
    }
    highPath = args.high;
    lowPath = args.low;
  }
  if (!args.out) die("combine requires --out");

  const high = new Uint8Array(readFileSync(highPath));
  const low = new Uint8Array(readFileSync(lowPath));
  if (high.length !== ROM_SIZE_BYTES) {
    process.stderr.write(
      `warning: ${highPath} is ${high.length} bytes (expected ${ROM_SIZE_BYTES})\n`,
    );
  }
  if (low.length !== ROM_SIZE_BYTES) {
    process.stderr.write(
      `warning: ${lowPath} is ${low.length} bytes (expected ${ROM_SIZE_BYTES})\n`,
    );
  }
  const microcode = combineRoms(high, low, { xorFlip: args.xorFlip });
  const bytes = binaryToCodeBytes(microcode);
  writeFileSync(args.out, bytes);
  process.stdout.write(
    `Wrote ${bytes.length} bytes (${microcode.size} records) to ${args.out}\n`,
  );
  printReport(microcode);
}

function cmdSplit(args: Args): void {
  if (!args.in || !args.outHigh || !args.outLow) {
    die("split requires --in, --out-high, and --out-low");
  }
  const codeBytes = new Uint8Array(readFileSync(args.in));
  const microcode = parseCodeBytes(codeBytes);
  process.stdout.write(`Loaded ${microcode.size} records from ${args.in}\n`);
  printReport(microcode);
  const { highChip, lowChip } = splitRoms(microcode, {
    xorFlip: args.xorFlip,
    fill: args.fill ?? "empty",
  });
  writeFileSync(args.outHigh, highChip);
  writeFileSync(args.outLow, lowChip);
  process.stdout.write(
    `Wrote ${highChip.length}-byte high chip to ${args.outHigh}\n` +
    `Wrote ${lowChip.length}-byte low chip to ${args.outLow}\n`,
  );
}

function main(): void {
  const args = parseArgs(process.argv.slice(2));
  switch (args.command) {
    case "combine": cmdCombine(args); break;
    case "split":   cmdSplit(args);   break;
    case "help":
    default:        printHelp();       break;
  }
}

main();
