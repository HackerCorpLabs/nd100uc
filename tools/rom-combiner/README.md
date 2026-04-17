# nd100uc-rom

Pure byte-level combiner/splitter for ND-100/110/120 microcode EPROM images.

The tool interleaves two 32-KiB chip images into a single `.CODE` binary,
or de-interleaves a `.CODE` file into two chip images ready for burning.

**It does not transform the data.** No XOR, no model-aware conversion -
combine is pure interleaving of the two chips' bytes, split is the exact
reverse. Both ND-110 and ND-120 ROMs are stored in the same form as their
matching `.CODE` file, so a single operation works for both.

## Install / build

```bash
# Build the underlying library first (one level up):
(cd ../../lib/ts && npm install && npm run build)

# Then build this CLI:
npm install
npm run build
```

## Usage

```bash
# Combine two EPROM images:
node dist/main.js combine \
    --high ../../microcode/roms/37949L.bin \
    --low  ../../microcode/roms/37948L.bin \
    --out  ../../microcode/ND-110-3095-factory.CODE

# Split a .CODE file into two chip images:
node dist/main.js split \
    --in       ../../microcode/ND-110-RASK.CODE \
    --out-high /tmp/37949L.bin \
    --out-low  /tmp/37948L.bin

# See all options:
node dist/main.js --help
```

## Chip naming convention

The "high" chip contributes the high byte of each 16-bit sub-word; the
"low" chip contributes the low byte:

| Card           | High chip       | Low chip        |
|----------------|-----------------|-----------------|
| ND-110 3095    | `37949L.bin`    | `37948L.bin`    |
| ND-120 AM27256 | `45133L.bin`    | `45132L.bin`    |

## XOR / canonical form

Passing `--xor-flip` applies `XOR 0x0FC00000` during the operation. This
converts between ND-110 token form and canonical form. For normal ROM ↔
`.CODE` work you **do not** need this flag.

For background on what the XOR actually does, see
[`docs/special-bits.md`](../../docs/special-bits.md).
