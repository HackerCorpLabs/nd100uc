"use strict";
/**
 * Load DefinitionPacks from the embedded snapshot (src/generated/
 * definitions.json) instead of reading YAML at runtime.
 *
 * This is what the extension uses in production - the snapshot is
 * bundled into the .vsix by the build, so the extension doesn't need
 * to know where the parent repo's defs/ directory lives.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadEmbeddedDefinitions = loadEmbeddedDefinitions;
const definitions_json_1 = __importDefault(require("./generated/definitions.json"));
const microcode_1 = require("@nd100uc/microcode");
const snap = definitions_json_1.default;
const VALID_CATEGORIES = [
    "A_REG", "B_REG", "AB_REG", "PIC", "ALUF", "ALUD", "ALUM",
    "STS", "CRY", "MIS", "IDBS", "COMM",
    "T_SEQ", "T_STK", "F_SEQ", "F_STK",
    "COND", "SPECIAL", "UNKNOWN",
];
function toCategory(s) {
    return VALID_CATEGORIES.includes(s)
        ? s
        : "UNKNOWN";
}
function toModels(raw) {
    if (!raw)
        return ["nd100", "nd110", "nd120"];
    return raw.filter((m) => m === "nd100" || m === "nd110" || m === "nd120");
}
function toToken(raw) {
    const displayLine = raw.display_line;
    if (displayLine !== 1 && displayLine !== 2 && displayLine !== 3) {
        throw new Error(`Token ${raw.token} has invalid display_line: ${displayLine}`);
    }
    return {
        name: raw.token,
        category: toCategory(raw.category),
        displayLine,
        description: raw.description ?? "",
        encodingOctal: [
            raw.encoding.w4,
            raw.encoding.w3,
            raw.encoding.w2,
            raw.encoding.w1,
        ],
        encodingValue: (0, microcode_1.encodingToBigInt)(raw.encoding.w4, raw.encoding.w3, raw.encoding.w2, raw.encoding.w1),
        models: toModels(raw.models),
        nd120Only: raw.nd120_only === true,
        provides: raw.provides,
        requires: raw.requires,
    };
}
function toFields(raw) {
    const m = new Map();
    if (!raw?.fields)
        return m;
    for (const [name, f] of Object.entries(raw.fields)) {
        m.set(name, {
            name,
            bits: [f.bits[0], f.bits[1]],
            width: f.width,
            description: f.description,
            default: f.default ?? 0,
        });
    }
    return m;
}
let cachedPacks = {};
function loadEmbeddedDefinitions(model) {
    const cached = cachedPacks[model];
    if (cached)
        return cached;
    const rawTokens = model === "nd120" ? snap.nd120Tokens.tokens : snap.nd110Tokens.tokens;
    const tokens = rawTokens.map(toToken);
    // Fields: start with ND-110 as the base and overlay ND-120 deltas.
    const fields = toFields(snap.nd110Fields);
    if (model === "nd120") {
        for (const [name, def] of toFields(snap.nd120Fields)) {
            fields.set(name, def);
        }
    }
    const tokensByName = new Map();
    const tokensByCategory = new Map();
    for (const t of tokens) {
        tokensByName.set(t.name, t);
        const existing = tokensByCategory.get(t.category);
        if (existing)
            existing.push(t);
        else
            tokensByCategory.set(t.category, [t]);
    }
    const pack = {
        model,
        tokens,
        tokensByName,
        tokensByCategory,
        fields,
    };
    cachedPacks[model] = pack;
    return pack;
}
//# sourceMappingURL=loadDefsEmbedded.js.map