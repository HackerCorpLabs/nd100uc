"use strict";
/**
 * VSCode command handlers for the ND-100/110/120 microcode extension.
 *
 * Exposes four commands via the Command Palette:
 *   nd-microcode.assembleCurrent     Assemble the active .uc file to a .CODE binary
 *   nd-microcode.assembleAndSplit    Assemble + split into two ROM chip images (high/low)
 *   nd-microcode.disassembleBinary   Load a .CODE file, produce a new .uc document
 *   nd-microcode.assembleLine        Show the assembled bits for the instruction at cursor
 *
 * All heavy lifting is delegated to `@nd100uc/microcode` (our TS library).
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.assembleCurrentFile = assembleCurrentFile;
exports.assembleAndSplit = assembleAndSplit;
exports.disassembleBinary = disassembleBinary;
exports.assembleCurrentLine = assembleCurrentLine;
exports.registerCommands = registerCommands;
const vscode = __importStar(require("vscode"));
const node_fs_1 = require("node:fs");
const path = __importStar(require("node:path"));
const microcode_1 = require("@nd100uc/microcode");
const loadDefsEmbedded_1 = require("./loadDefsEmbedded");
// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function getDefaultModel() {
    const config = vscode.workspace.getConfiguration("nd-microcode");
    const m = config.get("defaultModel", "nd110");
    return m === "nd120" ? "nd120" : "nd110";
}
/**
 * Extract a `//#MODEL nd110` or `//#MODEL nd120` directive from the source
 * (first 50 lines only). Falls back to the user's default setting.
 */
function detectModelFromSource(source) {
    const first = source.split(/\r?\n/, 50).join("\n");
    const m = /^%#MODEL\s+(nd110|nd120)\b/im.exec(first);
    if (m)
        return m[1];
    return getDefaultModel();
}
async function pickDefaultOutputPath(sourceUri, suffix) {
    const base = sourceUri.fsPath.replace(/\.uc$/i, "");
    const suggested = vscode.Uri.file(base + suffix);
    const chosen = await vscode.window.showSaveDialog({
        defaultUri: suggested,
        filters: { "ND MicroCode": ["CODE", "bin", "code"] },
    });
    return chosen ?? suggested;
}
// ---------------------------------------------------------------------------
// assembleCurrent
// ---------------------------------------------------------------------------
async function assembleCurrentFile() {
    const editor = vscode.window.activeTextEditor;
    if (!editor || editor.document.languageId !== "uc") {
        void vscode.window.showErrorMessage("Open a .uc microcode file to use this command.");
        return;
    }
    const source = editor.document.getText();
    const model = detectModelFromSource(source);
    const pack = loadDefinitionsSafe(model);
    if (!pack)
        return;
    const result = (0, microcode_1.assembleSource)(source, pack, { model });
    const errors = result.diagnostics.filter((d) => d.severity === "error");
    const warnings = result.diagnostics.filter((d) => d.severity === "warning");
    if (errors.length > 0) {
        const choice = await vscode.window.showWarningMessage(`Assembly completed with ${errors.length} error(s). Continue writing output?`, "Show errors", "Write anyway", "Cancel");
        if (choice === "Show errors") {
            const panel = vscode.window.createOutputChannel("ND MicroCode");
            panel.show();
            for (const e of errors) {
                panel.appendLine(`ERROR line ${e.line} addr 0o${e.address?.toString(8) ?? "?"}: ${e.message}`);
            }
            return;
        }
        if (choice !== "Write anyway")
            return;
    }
    const outUri = await pickDefaultOutputPath(editor.document.uri, ".CODE");
    const bytes = (0, microcode_1.binaryToCodeBytes)(result.binary);
    await node_fs_1.promises.writeFile(outUri.fsPath, bytes);
    void vscode.window.showInformationMessage(`Assembled ${result.binary.size} records to ${path.basename(outUri.fsPath)}` +
        (warnings.length > 0 ? ` (${warnings.length} warnings)` : ""));
}
// ---------------------------------------------------------------------------
// assembleAndSplit
// ---------------------------------------------------------------------------
async function assembleAndSplit() {
    const editor = vscode.window.activeTextEditor;
    if (!editor || editor.document.languageId !== "uc") {
        void vscode.window.showErrorMessage("Open a .uc microcode file to use this command.");
        return;
    }
    const source = editor.document.getText();
    const model = detectModelFromSource(source);
    const pack = loadDefinitionsSafe(model);
    if (!pack)
        return;
    const result = (0, microcode_1.assembleSource)(source, pack, { model });
    const errors = result.diagnostics.filter((d) => d.severity === "error");
    if (errors.length > 0) {
        const choice = await vscode.window.showWarningMessage(`Assembly has ${errors.length} error(s). Continue?`, "Yes", "No");
        if (choice !== "Yes")
            return;
    }
    const outDirUri = await vscode.window.showOpenDialog({
        canSelectFiles: false,
        canSelectFolders: true,
        canSelectMany: false,
        openLabel: "Select output folder for ROM chip images",
    });
    if (!outDirUri || outDirUri.length === 0)
        return;
    const outDir = outDirUri[0].fsPath;
    const base = path.basename(editor.document.uri.fsPath, ".uc");
    const { highChip, lowChip } = (0, microcode_1.splitRoms)(result.binary, { fill: "empty" });
    const highPath = path.join(outDir, `${base}_HIGH.bin`);
    const lowPath = path.join(outDir, `${base}_LOW.bin`);
    const codePath = path.join(outDir, `${base}.CODE`);
    await node_fs_1.promises.writeFile(codePath, (0, microcode_1.binaryToCodeBytes)(result.binary));
    await node_fs_1.promises.writeFile(highPath, highChip);
    await node_fs_1.promises.writeFile(lowPath, lowChip);
    const version = (0, microcode_1.readMicrocodeVersion)(result.binary);
    void vscode.window.showInformationMessage(`Wrote ${base}.CODE + ${base}_HIGH.bin + ${base}_LOW.bin ` +
        `(${highChip.length} bytes each, version ` +
        `${version?.letter ?? "?"} / ${version?.octalValue ?? "?"}, model ${model})`);
}
// ---------------------------------------------------------------------------
// disassembleBinary
// ---------------------------------------------------------------------------
async function disassembleBinary() {
    const uris = await vscode.window.showOpenDialog({
        canSelectFiles: true,
        canSelectMany: false,
        openLabel: "Open microcode binary (.CODE)",
        filters: { "ND MicroCode binary": ["CODE", "bin", "code"] },
    });
    if (!uris || uris.length === 0)
        return;
    const inputUri = uris[0];
    const bytes = await node_fs_1.promises.readFile(inputUri.fsPath);
    // Decide which loader to use. Two formats are accepted:
    //   - .CODE: 10-byte records (2-byte addr + 8-byte value, little-endian)
    //   - .bin:  contiguous 8-byte microwords starting at address 0, OR
    //            two chip images of 32 KiB each if we detect that size.
    let microcode;
    if (bytes.length === microcode_1.ROM_SIZE_BYTES * 2) {
        // Could be two concatenated 32 KiB chip images? Unusual but handle
        // gracefully. For now assume .CODE format.
        microcode = (0, microcode_1.parseCodeBytes)(new Uint8Array(bytes));
    }
    else if (bytes.length === microcode_1.ROM_SIZE_BYTES) {
        // Single chip image - cannot disassemble without the other half.
        void vscode.window.showErrorMessage("This looks like a single 32 KiB EPROM chip. You need both chips - " +
            "use the ROM combiner CLI (tools/rom-combiner) to merge them first, " +
            "then open the resulting .CODE file.");
        return;
    }
    else {
        microcode = (0, microcode_1.parseCodeBytes)(new Uint8Array(bytes));
    }
    if (microcode.size === 0) {
        void vscode.window.showErrorMessage("No microcode records found in the file.");
        return;
    }
    // Auto-detect storage form + pick model.
    const formResult = (0, microcode_1.detectForm)(microcode);
    const model = formResult.form;
    // If the file is in ND-110 token form, the disassembler expects
    // canonical, so XOR-flip each word.
    const canonical = new Map();
    for (const [addr, v] of microcode) {
        canonical.set(addr, model === "nd110" ? v ^ 0x0fc00000n : v);
    }
    const pack = loadDefinitionsSafe(model);
    if (!pack)
        return;
    // Optionally load a .SYMBOLS.TXT next to the binary.
    const symPath = inputUri.fsPath.replace(/\.(CODE|code|bin)$/i, ".SYMBOLS.TXT");
    let symbols;
    try {
        const symText = await node_fs_1.promises.readFile(symPath, "utf8");
        symbols = new Map((0, microcode_1.parseSymbolsText)(symText));
    }
    catch {
        // No symbols available - that's fine.
    }
    const compiled = (0, microcode_1.compileDisassemblerPack)(pack);
    const instrs = (0, microcode_1.disassembleMap)(canonical, compiled, symbols);
    const source = (0, microcode_1.formatProgram)(instrs);
    const version = (0, microcode_1.readMicrocodeVersion)(canonical);
    const header = `% Disassembled from ${path.basename(inputUri.fsPath)}\n` +
        `% Model: ${model.toUpperCase()} (detected, confidence ${formResult.confidence.toFixed(2)})\n` +
        `% Version: ${version?.octalValue ?? "?"} (${version?.letter ?? "?"})\n` +
        `% Records: ${microcode.size}\n` +
        (symbols ? `% Symbols loaded: ${symbols.size}\n` : "% No symbols loaded\n") +
        `%\n\n`;
    const doc = await vscode.workspace.openTextDocument({
        language: "uc",
        content: header + source,
    });
    await vscode.window.showTextDocument(doc);
}
// ---------------------------------------------------------------------------
// assembleLine - dev tool showing the bits for the instruction at cursor
// ---------------------------------------------------------------------------
async function assembleCurrentLine() {
    const editor = vscode.window.activeTextEditor;
    if (!editor || editor.document.languageId !== "uc") {
        void vscode.window.showErrorMessage("Open a .uc microcode file to use this command.");
        return;
    }
    const source = editor.document.getText();
    const model = detectModelFromSource(source);
    const pack = loadDefinitionsSafe(model);
    if (!pack)
        return;
    // Preprocess the entire file (needed for label resolution), then find
    // the instruction that spans the cursor's source line.
    const sm = (0, microcode_1.preprocess)(source);
    const cursorLine = editor.selection.active.line + 1; // 1-based
    let target = sm.instructions[0];
    for (const ins of sm.instructions) {
        if (ins.line <= cursorLine)
            target = ins;
    }
    if (!target) {
        void vscode.window.showInformationMessage("No instruction at cursor.");
        return;
    }
    const diagnostics = [];
    const canonicalValue = (0, microcode_1.translateInstruction)(target, pack, sm.labels, diagnostics);
    const storage = model === "nd110" ? canonicalValue ^ 0x0fc00000n : canonicalValue;
    // Decode the canonical word's fields for validation display.
    const fields = (0, microcode_1.decodeFields)(canonicalValue, target.address);
    const panel = vscode.window.createOutputChannel("ND MicroCode");
    panel.show();
    panel.appendLine(`============= Assemble current instruction =============`);
    panel.appendLine(`Model:        ${model}`);
    panel.appendLine(`Source line:  ${target.line}`);
    panel.appendLine(`Address:      0o${target.address.toString(8).padStart(6, "0")}`);
    panel.appendLine(`Tokens:       ${target.args.join(" ")}`);
    panel.appendLine(``);
    panel.appendLine(`Canonical:    0x${canonicalValue.toString(16).padStart(16, "0")}`);
    panel.appendLine(`Storage form: 0x${storage.toString(16).padStart(16, "0")}`);
    const ws = [
        Number((canonicalValue >> 48n) & 0xffffn),
        Number((canonicalValue >> 32n) & 0xffffn),
        Number((canonicalValue >> 16n) & 0xffffn),
        Number(canonicalValue & 0xffffn),
    ];
    panel.appendLine(`  w4=${ws[0].toString(8).padStart(6, "0")} ` +
        `w3=${ws[1].toString(8).padStart(6, "0")} ` +
        `w2=${ws[2].toString(8).padStart(6, "0")} ` +
        `w1=${ws[3].toString(8).padStart(6, "0")}`);
    panel.appendLine(``);
    panel.appendLine(`Decoded fields (canonical):`);
    panel.appendLine(`  ALUI (63:55)=0o${fields.aluI.toString(8)}  ` +
        `STS (54:53)=${fields.aluSts}  ` +
        `RASEL (52:51)=${fields.rasel}  ` +
        `XRF=${fields.xrf}  ` +
        `RBSEL (49:48)=${fields.rbsel}`);
    panel.appendLine(`  CIN (47:46)=${fields.cin}  ` +
        `ALUM (45:44)=${fields.alum}  ` +
        `MIS (43:42)=${fields.mis}  ` +
        `IDBS (41:37)=0o${fields.idbs.toString(8)}  ` +
        `COMM (36:32)=0o${fields.comm.toString(8)}`);
    panel.appendLine(`  T_SEQ (31:30)=${fields.tSeq}  ` +
        `T_STK (29:28)=${fields.tStk}  ` +
        `VECT=${fields.vect}  ` +
        `SCOND=${fields.scond}  ` +
        `CONDENABL=${fields.condEnabl}  ` +
        `LOOP=${fields.loop}`);
    panel.appendLine(`  CSBIT20=${fields.csbit20}  ` +
        `BOP (19:16)=0o${fields.bop.toString(8)}  ` +
        `AOP (15:12)=0o${fields.aop.toString(8)}  ` +
        (fields.scond === 1
            ? `LCC=${fields.lcc} TSEL=${fields.tsel} F_SEQ=${fields.fSeq} F_STK=${fields.fStk}`
            : `branch=0o${fields.branchAddress.toString(8)}`));
    // Validation report
    panel.appendLine(``);
    if (diagnostics.length === 0) {
        panel.appendLine(`[OK] No validation issues.`);
    }
    else {
        panel.appendLine(`Validation:`);
        for (const d of diagnostics) {
            const prefix = d.severity === "error" ? "[ERROR]" : "[warn]";
            panel.appendLine(`  ${prefix} ${d.message}`);
        }
    }
}
// ---------------------------------------------------------------------------
// Definition loading - cached, with graceful error reporting
// ---------------------------------------------------------------------------
function loadDefinitionsSafe(model) {
    try {
        return (0, loadDefsEmbedded_1.loadEmbeddedDefinitions)(model);
    }
    catch (e) {
        void vscode.window.showErrorMessage(`Failed to load ${model} definitions: ${e instanceof Error ? e.message : String(e)}`);
        return undefined;
    }
}
// ---------------------------------------------------------------------------
// Registration
// ---------------------------------------------------------------------------
function registerCommands(context) {
    context.subscriptions.push(vscode.commands.registerCommand("nd-microcode.assembleCurrent", () => void assembleCurrentFile()), vscode.commands.registerCommand("nd-microcode.assembleAndSplit", () => void assembleAndSplit()), vscode.commands.registerCommand("nd-microcode.disassembleBinary", () => void disassembleBinary()), vscode.commands.registerCommand("nd-microcode.assembleLine", () => void assembleCurrentLine()));
}
//# sourceMappingURL=commands.js.map