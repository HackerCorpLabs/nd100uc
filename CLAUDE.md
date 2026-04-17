# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **ND-100/ND-110/ND-120 Microcode Disassembler** -- a single-page web application that loads, disassembles, and displays Norsk Data ND-110 and ND-120 microcode binaries. It decodes 48-bit (ND-110) and 64-bit (ND-120) microinstruction words into human-readable assembly-like mnemonics with syntax-highlighted field tokens.

## Architecture

The entire application lives in a single file: `src/index.html` (~2200 lines). It is a self-contained HTML/CSS/JavaScript application with no build system, no bundler, and no npm dependencies. The only external dependency is jspdf (loaded via CDN) for PDF export.

### Key sections within `src/index.html`:
- **CSS** (lines 1-500): Light/dark theme with CSS variables
- **HTML** (lines 500-890): Two-panel layout -- listing pane (left) and detail panel (right), plus settings/reference modals
- **Disassembler core** (`disassemble()`, ~line 898): Extracts bitfields from raw microinstruction words and produces token arrays with field classifications (ALU, dest, src, seq, cmd, cond, idbs, addr)
- **ALU decoder** (`decodeALUFull()`, ~line 1115): Decodes the composite ALU operation from source, function, and carry-in fields
- **Field decode tables** (~line 1200-1540): Lookup tables for all microcode fields (IDBS, COMM, RASEL, RBSEL, STS, MIS, TSEL, SEQ, STK, LCC, etc.) covering both ND-110 and ND-120 instruction sets
- **Microcode loader** (`loadMicrocodeData()`, ~line 1544): Fetches binary `.CODE` files and parses them as 48-bit or 64-bit words (6 or 8 bytes per instruction). Also loads `.SYMBOLS.TXT` label files
- **Rendering** (`renderListing()`, ~line 1641): Paginated virtual list with search/filter, keyboard navigation, and detail panel updates

### Supporting files:
- `src/microcode.h`: C union/bitfield definition of the ND-120 64-bit microinstruction word (reference, not used at runtime)
- `microcode/`: Binary microcode dumps and symbol files for ND-110 RASK, ND-120 DELILAH, and ND-120 DELILAH-L (loader)
- `microcode/manifest.json`: Registry of available microcode files with metadata (model, hasLabels, isND110 flag)
- `docs/`: Reference PDF (ND-110/ND-120 Microprogrammer's Guide)
- `images/`: Photos of ND-100, ND-110, and ND-120 hardware

## Development

No build step required. To run locally:
```bash
# Any static file server works, e.g.:
python3 -m http.server 8000 --directory src
# Then open http://localhost:8000 in a browser
```

The app fetches microcode files via relative paths (`MC/ND-120-DELILAH.CODE` etc.), so the microcode directory must be accessible as `MC/` relative to `index.html`. When serving from `src/`, symlink or copy the `microcode/` directory there as `MC/`.

## Key Concepts

- **Microinstruction word**: 48 bits for ND-110, 64 bits for ND-120. Each word encodes ALU operation, bus source/destination, sequencing, condition testing, and branch address in parallel bitfields.
- **SCOND bit** (bit 24): When set, the lower 12 bits encode condition test fields (LCC, TSEL, F.SEQ, F.STK). When clear, the lower 12 bits encode a branch address.
- **ND-110 vs ND-120**: The ND-110 uses 6-byte (48-bit) instructions; the ND-120 uses 8-byte (64-bit) instructions. The `isND110` flag in manifest.json controls the word size during loading.
- All addresses and numeric values are displayed in **octal** (base 8), consistent with Norsk Data conventions.
