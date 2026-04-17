# Tools

CLI tools that consume the YAML definitions in [`../defs/`](../defs/).

| Directory                | Purpose                                                          |
|--------------------------|------------------------------------------------------------------|
| `yaml-validator/`        | Validates YAML token/field definitions against known microcode   |
| `rom-combiner/`          | (planned) Combines EPROM images into a single `.CODE` file        |
| `generate-c-tables/`     | (planned) Generates C tables from YAML for the C library         |

## yaml-validator

### validate.py

Validates the YAML definitions by:

1. Loading `defs/tokens/nd110-tokens.yaml` and `defs/tokens/nd120-tokens.yaml`
2. Cross-checking that shared tokens have consistent encodings (ignoring the
   known timing/delay bit differences between ND-110 and ND-120)
3. Verifying the expected ND-110/ND-120 token-set delta
4. Loading a `.CODE` binary file and `.SYMBOLS.TXT` symbol file
5. Reporting errors and warnings

Usage:

```bash
python3 tools/yaml-validator/validate.py              # validates ND-110 RASK
python3 tools/yaml-validator/validate.py --verbose    # show all warnings
python3 tools/yaml-validator/validate.py --binary microcode/ND-120-DELILAH.CODE --model nd120
```

### generate_tokens_yaml.py

Regenerates `defs/tokens/nd110-tokens.yaml` and `defs/tokens/nd120-tokens.yaml`
from the reference C# source files in the ND110Compile C# assembler repo.

Pass explicit paths to the two token files:

```bash
python3 tools/yaml-validator/generate_tokens_yaml.py \
    --nd110-cs /path/to/ND110Compile/ND110Compile/ND110Tokens.cs \
    --nd120-cs /path/to/ND110Compile/ND110Compile/ND120Tokens.cs
```

This is the authoritative source for the token encodings, so regenerating
is the safest way to pick up upstream fixes. Do not edit the generated YAML
files by hand - edit the C# source or this script instead.

## Dependencies

```bash
pip install pyyaml
```
