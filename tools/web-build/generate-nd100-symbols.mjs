#!/usr/bin/env node
/**
 * Generate .SYMBOLS.TXT files for ND-100 3033S / 3033E-CX microcode.
 *
 * Labels are derived from the decode-PLA ROM which maps macro-opcode
 * indices to microaddress entry points. Each target microaddress gets
 * a label of the form L<octal-uaddr>, with comment lines listing the
 * macro-opcode PLA indices that dispatch there.
 *
 * Output format:
 *   % L0031 <- 64 PLA entries: 0000-0037
 *   000031=L0031
 */

import { readFileSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

import { parseCodeBytes } from "../../external/meta/lib/ts/dist/index.js";

const here = dirname(fileURLToPath(import.meta.url));
const WEB_MC = resolve(here, "..", "..", "web", "MC");

// ---------------------------------------------------------------------
// Generator
// ---------------------------------------------------------------------

function loadMapper(decodePath) {
  const bytes = new Uint8Array(readFileSync(decodePath));
  return parseCodeBytes(bytes);
}

function oct(n, pad = 4) {
  return n.toString(8).padStart(pad, "0");
}

/**
 * Summarise a list of PLA indices as a compact octal string.
 * Consecutive runs are collapsed to "first-last".
 */
function summariseIndices(indices) {
  const sorted = [...indices].sort((a, b) => a - b);
  const parts = [];
  let i = 0;
  while (i < sorted.length) {
    const start = sorted[i];
    let end = start;
    while (i + 1 < sorted.length && sorted[i + 1] === end + 1) {
      end = sorted[++i];
    }
    if (start === end) {
      parts.push(oct(start));
    } else {
      parts.push(`${oct(start)}-${oct(end)}`);
    }
    i++;
  }
  return parts.join(", ");
}

function generateSymbols(variant, decodePath, symbolsPath, extBankBase) {
  const mapper = loadMapper(decodePath);

  // Gather: uaddr -> list of PLA indices that dispatch there.
  const byUaddr = new Map();
  for (const [plaIdx, u] of mapper) {
    const uaddr = Number(u);
    if (!byUaddr.has(uaddr)) byUaddr.set(uaddr, []);
    byUaddr.get(uaddr).push(plaIdx);
  }

  // Build output.
  const sorted = [...byUaddr.entries()].sort((a, b) => a[0] - b[0]);

  let txt = `% Labels for ND-100 ${variant} microcode\n`;
  txt += `% Generated from decode-PLA (${decodePath.split("/").pop()})\n`;
  txt += `%\n`;
  txt += `% Format: <uaddr-octal>=L<uaddr-octal>\n`;
  txt += `% Comments show which PLA indices (macro-opcode class) dispatch\n`;
  txt += `% to each microaddress.\n`;
  txt += `%\n`;

  let count = 0;
  for (const [uaddr, plaIndices] of sorted) {
    // Filter to the address range of this particular microcode file.
    if (extBankBase !== undefined) {
      if (uaddr < extBankBase || uaddr >= extBankBase + 0o4000) continue;
    } else {
      if (uaddr >= 0o4000) continue;
    }

    const label = `L${oct(uaddr)}`;
    const n = plaIndices.length;
    const summary = summariseIndices(plaIndices);
    txt += `% ${label} <- ${n} PLA entr${n === 1 ? "y" : "ies"}: ${summary}\n`;
    txt += `${oct(uaddr, 6)}=${label}\n`;
    count++;
  }

  writeFileSync(symbolsPath, txt);
  console.log(`  ${symbolsPath.split("/").pop()}: ${count} labels`);
  return count;
}

// ---------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------

console.log("Generating ND-100 SYMBOLS.TXT from decode-PLAs...");

generateSymbols(
  "3033S base",
  `${WEB_MC}/ND-100-3033S-decode.CODE`,
  `${WEB_MC}/ND-100-3033S-microcode.SYMBOLS.TXT`,
);

generateSymbols(
  "3033E-CX base",
  `${WEB_MC}/ND-100-3033E-CX-decode.CODE`,
  `${WEB_MC}/ND-100-3033E-CX-microcode.SYMBOLS.TXT`,
);

generateSymbols(
  "3033E-CX extension",
  `${WEB_MC}/ND-100-3033E-CX-decode.CODE`,
  `${WEB_MC}/ND-100-3033E-CX-microcode_ext.SYMBOLS.TXT`,
  0o4000,
);

console.log("Done.");
