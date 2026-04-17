# Contributing to nd100uc

Thank you for your interest in contributing!

## Repository Layout

See [README.md](README.md) for an overview of the repository structure.

## Principles

1. **YAML is the source of truth** - All microcode field/token definitions live in `defs/`. Never hardcode tables in the libraries or tools. If something needs to change, change the YAML first.

2. **Validate against real hardware** - When adding or correcting tokens, always validate against the known microcode binaries (`microcode/ND-110-RASK.CODE` for ND-110, `microcode/ND-120-DELILAH.CODE` for ND-120). The `tools/yaml-validator/` tool can help.

3. **Octal everywhere** - Addresses and numeric values are displayed in octal, matching Norsk Data conventions. Don't convert to hex or decimal without good reason.

4. **No unicode in C/assembler** - The C compiler (PCC) and ND assembler are from the 1980s and do not understand unicode. Keep source code and comments in ASCII only.

## Making Changes

1. Fork the repository and create a feature branch
2. Make your changes
3. Run validation (`tools/yaml-validator/`) if you touched any YAML
4. Run tests in any library you modified
5. Submit a pull request

## Reporting Bugs

Please include:
- Which model (ND-100, ND-110, ND-120)
- Which microcode file you were working with
- Expected vs actual output
- Reference documentation backing the expected behaviour (if available)
