"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/extension.ts
var extension_exports = {};
__export(extension_exports, {
  activate: () => activate,
  deactivate: () => deactivate
});
module.exports = __toCommonJS(extension_exports);

// src/hoverProvider.ts
var vscode = __toESM(require("vscode"));

// src/generated/token-hover.json
var token_hover_default = {
  generatedFrom: "defs/tokens/nd110-tokens.yaml + nd120-tokens.yaml + defs/runtime/data-flow.yaml",
  generatedAt: "2026-04-16T11:00:18.550Z",
  tokenCount: 368,
  tokens: {
    "A,0": {
      name: "A,0",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS 0",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "A,1": {
      name: "A,1",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS 1",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "010000"
      }
    },
    "A,10": {
      name: "A,10",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS 10",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "100000"
      }
    },
    "A,11": {
      name: "A,11",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS 11",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "110000"
      }
    },
    "A,12": {
      name: "A,12",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS 12",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "120000"
      }
    },
    "A,13": {
      name: "A,13",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS 13",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "130000"
      }
    },
    "A,14": {
      name: "A,14",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS 14",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "140000"
      }
    },
    "A,15": {
      name: "A,15",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS 15",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "150000"
      }
    },
    "A,16": {
      name: "A,16",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS 16",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "160000"
      }
    },
    "A,17": {
      name: "A,17",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS 17",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "170000"
      }
    },
    "A,2": {
      name: "A,2",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS 2",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "020000"
      }
    },
    "A,3": {
      name: "A,3",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS 3",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "030000"
      }
    },
    "A,4": {
      name: "A,4",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS 4",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "040000"
      }
    },
    "A,5": {
      name: "A,5",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS 5",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "050000"
      }
    },
    "A,6": {
      name: "A,6",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS 6",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "060000"
      }
    },
    "A,7": {
      name: "A,7",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS 7",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "070000"
      }
    },
    "A,A": {
      name: "A,A",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS 5. USED TO ADDR. THE A-REGISTER",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "050000"
      }
    },
    "A,B": {
      name: "A,B",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS 3. USED TO ADDR. THE B-REGISTER",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "030000"
      }
    },
    "A,D": {
      name: "A,D",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS 1. USED TO ADDR. THE D-REGISTER",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "010000"
      }
    },
    "A,L": {
      name: "A,L",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS 4. USED TO ADDR. THE L-REGISTER",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "040000"
      }
    },
    "A,LC": {
      name: "A,LC",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS VALUE OF 'LOOP COUNTER' TWO MICROINSTRUCTIONS AGO",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000030",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "A,P": {
      name: "A,P",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS 2. USED TO ADDR. THE P-REGISTER",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "020000"
      }
    },
    "A,PIL": {
      name: "A,PIL",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS VALUE IN 'PIL' REGISTER, LOADED BY 'COMM, LDPIL'",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000010",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "A,R1": {
      name: "A,R1",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS 11. USED TO ADDR. REGISTER 11, ADDRESS OR SCRATCH",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "110000"
      }
    },
    "A,R2": {
      name: "A,R2",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS 12. USED TO ADDR. REGISTER 12, SCRATCH",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "120000"
      }
    },
    "A,R3": {
      name: "A,R3",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS 13. USED TO ADDR. REGISTER 13, SCRATCH",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "130000"
      }
    },
    "A,R4": {
      name: "A,R4",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS 14. USED TO ADDR. REGISTER 14, SCRATCH",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "140000"
      }
    },
    "A,R5": {
      name: "A,R5",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS 15. USED TO ADDR. REGISTER 15, SCRATCH",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "150000"
      }
    },
    "A,R6": {
      name: "A,R6",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS 16. USED TO ADDA. REGISTER 16, SCRATCH",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "160000"
      }
    },
    "A,R7": {
      name: "A,R7",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS 17. USED TO ADDR. REGISTER 17, SCRATCH",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "170000"
      }
    },
    "A,REG": {
      name: "A,REG",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS VALUE OF 'INSTR. BITS 3-6' LOADED BY LAST 'T,MAPJ'",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000020",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "A,SRCE": {
      name: "A,SRCE",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS VALUE OF 'INSTR. BITS 3-5' LOADED BY LAST 'T,MAPJ'",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000024",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "A,STS": {
      name: "A,STS",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS 10. USED TO ADDR. REGISTER 10, STATUS OR SCRATCH",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "100000"
      }
    },
    "A,T": {
      name: "A,T",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS 6. USED TO ADDR. THE T-REGISTER",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "060000"
      }
    },
    "A,X": {
      name: "A,X",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS 7. USED TO ADDR. THE X-REGISTER",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "070000"
      }
    },
    "A,Z": {
      name: "A,Z",
      category: "A_REG",
      displayLine: 1,
      description: "A-OP. IS O. USED TO ADDR. ZERO REG., STATUS OR SCRATCH",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "A",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "AB,ACTLV": {
      name: "AB,ACTLV",
      category: "AB_REG",
      displayLine: 1,
      description: "SCRATCH WORD HOLDING 'ACTIVE LEVELS'",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000017",
        w1: "140000"
      }
    },
    "AB,BAUD": {
      name: "AB,BAUD",
      category: "AB_REG",
      displayLine: 1,
      description: "BAUD RATE THUMBWHEEL VALUE",
      models: [
        "nd120"
      ],
      nd120Only: true,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000010",
        w1: "010000"
      }
    },
    "AB,BPFLG": {
      name: "AB,BPFLG",
      category: "AB_REG",
      displayLine: 1,
      description: "SCRATCH WORD INDICATING THAT BREAKPOINT IS ON",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000013",
        w1: "140000"
      }
    },
    "AB,BRKPT": {
      name: "AB,BRKPT",
      category: "AB_REG",
      displayLine: 1,
      description: "SCRATCH WORD HOLDING BREAKPOINT ADDRESS",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000016",
        w1: "140000"
      }
    },
    "AB,CDIGI": {
      name: "AB,CDIGI",
      category: "AB_REG",
      displayLine: 1,
      description: "COUNTER CONTROLLING NUMBER OF DIGITS IN AN OCTAL NUMBER",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000011",
        w1: "170000"
      }
    },
    "AB,CMBNK": {
      name: "AB,CMBNK",
      category: "AB_REG",
      displayLine: 1,
      description: "GLOBAL POINTER TO THE CORE MAP TABLE BANK",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000017",
        w1: "120000"
      }
    },
    "AB,CNT10": {
      name: "AB,CNT10",
      category: "AB_REG",
      displayLine: 1,
      description: "COUNTER CONTROLLING NO. OF OCTAL NOS/LINE IN MOPC DUMP CMND",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000017",
        w1: "170000"
      }
    },
    "AB,CURNR": {
      name: "AB,CURNR",
      category: "AB_REG",
      displayLine: 1,
      description: "SCRATCH WORD KEEPING CURRENT ADDR IN A MOPC DUMP COMMAND",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000013",
        w1: "130000"
      }
    },
    "AB,DEPOS": {
      name: "AB,DEPOS",
      category: "AB_REG",
      displayLine: 1,
      description: "SOME OCTAL DIGIT WAS WRITTEN SINCE LAST COMMAND TERMINATED",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000017",
        w1: "150000"
      }
    },
    "AB,DISPL": {
      name: "AB,DISPL",
      category: "AB_REG",
      displayLine: 1,
      description: "TYPE OF RUNNING DISPLAY",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000015",
        w1: "160000"
      }
    },
    "AB,DUMPF": {
      name: "AB,DUMPF",
      category: "AB_REG",
      displayLine: 1,
      description: "SCRATCH WORD INDICATING THAT A DUMP IS IN PROGRESS",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000016",
        w1: "150000"
      }
    },
    "AB,EXMOD": {
      name: "AB,EXMOD",
      category: "AB_REG",
      displayLine: 1,
      description: "SCRATCH WORD HOLDING THE 'EXM' REGISTER",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000011",
        w1: "130000"
      }
    },
    "AB,IIE": {
      name: "AB,IIE",
      category: "AB_REG",
      displayLine: 1,
      description: "SCR WORD HOLDING 'PIC' REPRESENTATION OF LAST IIE SETTING",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000012",
        w1: "170000"
      }
    },
    "AB,LCIL": {
      name: "AB,LCIL",
      category: "AB_REG",
      displayLine: 1,
      description: "SCRATCH REGISTER HOLDING CACHE INHIBIT LOWER LIMIT",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000013",
        w1: "120000"
      }
    },
    "AB,LMP": {
      name: "AB,LMP",
      category: "AB_REG",
      displayLine: 1,
      description: "SCRATCH WORD HOLDING THE 'LMP' REGISTER VALUE",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000012",
        w1: "140000"
      }
    },
    "AB,MACL": {
      name: "AB,MACL",
      category: "AB_REG",
      displayLine: 1,
      description: "SCRATCH WORD HOLDING RETRY COUNTER FOR LOAD AFTER MACL",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000011",
        w1: "140000"
      }
    },
    "AB,MANIR": {
      name: "AB,MANIR",
      category: "AB_REG",
      displayLine: 1,
      description: "SCRATCH WORD HOLDING FLAG FOR MANUAL IR",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000014",
        w1: "130000"
      }
    },
    "AB,NOISE": {
      name: "AB,NOISE",
      category: "AB_REG",
      displayLine: 1,
      description: "SET ON MACL,RESET ON STOP,INHIBIT LOAD AFTER MACL",
      models: [
        "nd120"
      ],
      nd120Only: true,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000010",
        w1: "020000"
      }
    },
    "AB,NUMBR": {
      name: "AB,NUMBR",
      category: "AB_REG",
      displayLine: 1,
      description: "SCRATCH WORD HOLDING AN OCTAL NUMBER BEING PRINTED BY MOPC",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000012",
        w1: "120000"
      }
    },
    "AB,OCTA2": {
      name: "AB,OCTA2",
      category: "AB_REG",
      displayLine: 1,
      description: "WORD TO EXTEND ADDRESS IN OCTAD TO 24 BITS",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000012",
        w1: "160000"
      }
    },
    "AB,OCTAD": {
      name: "AB,OCTAD",
      category: "AB_REG",
      displayLine: 1,
      description: "ADDRESS OF RUNNING DISPLAY",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000013",
        w1: "150000"
      }
    },
    "AB,OCTN2": {
      name: "AB,OCTN2",
      category: "AB_REG",
      displayLine: 1,
      description: "SCRATCH WORD EXPANDING THE 'AB, OCTNA' TO 24 BITS",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000015",
        w1: "130000"
      }
    },
    "AB,OCTNR": {
      name: "AB,OCTNR",
      category: "AB_REG",
      displayLine: 1,
      description: "SCRATCH WORD : OCTAL NUMBER ASSEMBLED FROM MOPC-INPUT",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000015",
        w1: "150000"
      }
    },
    "AB,OLD303": {
      name: "AB,OLD303",
      category: "AB_REG",
      displayLine: 1,
      description: "SAVED IOX 303 A REG TO SPOT UART DIFFS",
      models: [
        "nd120"
      ],
      nd120Only: true,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000015",
        w1: "050000"
      }
    },
    "AB,OPR": {
      name: "AB,OPR",
      category: "AB_REG",
      displayLine: 1,
      description: "SCRATCH WORD HOLDING THE 'OPR' REGISTER VALUE",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000011",
        w1: "160000"
      }
    },
    "AB,PGS": {
      name: "AB,PGS",
      category: "AB_REG",
      displayLine: 1,
      description: "COPY OF PGS FROM LAST PF/PV",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000015",
        w1: "120000"
      }
    },
    "AB,PID": {
      name: "AB,PID",
      category: "AB_REG",
      displayLine: 1,
      description: "SCR WORD HOLDING MICROPROGRAM-KNOWN BITS OF PID REGISTER",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000014",
        w1: "170000"
      }
    },
    "AB,PIE": {
      name: "AB,PIE",
      category: "AB_REG",
      displayLine: 1,
      description: "SCRATCH WORD HOLDING THE 'PIE' REGISTER",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000013",
        w1: "170000"
      }
    },
    "AB,PRCHR": {
      name: "AB,PRCHR",
      category: "AB_REG",
      displayLine: 1,
      description: "SCRATCH WORD : THE NEXT CHARACTER TO BE WRITTEN BY MOPC",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000016",
        w1: "160000"
      }
    },
    "AB,PVL": {
      name: "AB,PVL",
      category: "AB_REG",
      displayLine: 1,
      description: "SCRATCH WORD HOLDING 'PREVIOUS LEVEL'",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000015",
        w1: "170000"
      }
    },
    "AB,RONLY": {
      name: "AB,RONLY",
      category: "AB_REG",
      displayLine: 1,
      description: "THE EXAMINED REGISTER IS READ-ONLY",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000014",
        w1: "150000"
      }
    },
    "AB,SCRAM": {
      name: "AB,SCRAM",
      category: "AB_REG",
      displayLine: 1,
      description: "SCR WD : SCRAMBLED REPRESENTATION OF LETTERS IN MOPC-INPUT",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000015",
        w1: "140000"
      }
    },
    "AB,SINGL": {
      name: "AB,SINGL",
      category: "AB_REG",
      displayLine: 1,
      description: "SCRATCH WORD COUNTING SINGLE-INSTRUCTION",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000014",
        w1: "140000"
      }
    },
    "AB,SSAVE": {
      name: "AB,SSAVE",
      category: "AB_REG",
      displayLine: 1,
      description: "SCRATCH WORD HOLDING STS DURING DECIMAL INTRUCTIONS",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000016",
        w1: "130000"
      }
    },
    "AB,STATUS": {
      name: "AB,STATUS",
      category: "AB_REG",
      displayLine: 1,
      description: "SCRATCH WORD HOLDING THE LATEST 'COMM, SIOC' INFORMATION",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000017",
        w1: "160000"
      }
    },
    "AB,STBNK": {
      name: "AB,STBNK",
      category: "AB_REG",
      displayLine: 1,
      description: "GLOBAL BANK POINTER TO THE SEGMENT TABLE BANK",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000011",
        w1: "120000"
      }
    },
    "AB,STSRT": {
      name: "AB,STSRT",
      category: "AB_REG",
      displayLine: 1,
      description: "GLOBAL POINTER TO THE SEGMENT TABLE WITHIN THE BANK",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000016",
        w1: "120000"
      }
    },
    "AB,TXT1": {
      name: "AB,TXT1",
      category: "AB_REG",
      displayLine: 1,
      description: "SCRATCH WORD : DISPLAY TEXT",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000014",
        w1: "160000"
      }
    },
    "AB,TXT2": {
      name: "AB,TXT2",
      category: "AB_REG",
      displayLine: 1,
      description: "SCRATCH WORD : DISPLAY TEXT",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000013",
        w1: "160000"
      }
    },
    "AB,UCIL": {
      name: "AB,UCIL",
      category: "AB_REG",
      displayLine: 1,
      description: "SCRATCH WORD HOLDING CACHE INHIBIT UPPER LIMIT",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000014",
        w1: "120000"
      }
    },
    "AB,UPPNR": {
      name: "AB,UPPNR",
      category: "AB_REG",
      displayLine: 1,
      description: "SCRATCH WORD KEEPING UPPER ADDR LIMIT IN MOPC DUMP CMND",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000012",
        w1: "130000"
      }
    },
    "AB,WRADR": {
      name: "AB,WRADR",
      category: "AB_REG",
      displayLine: 1,
      description: "ADDRESS OF VARIABLE IN CASE OF DEPOSIT",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000011",
        w1: "150000"
      }
    },
    "AB,WRTYP": {
      name: "AB,WRTYP",
      category: "AB_REG",
      displayLine: 1,
      description: "TYPE OF VARIABLE IN CASE OF DEPOSIT",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000012",
        w1: "150000"
      }
    },
    "ALUD,B": {
      name: "ALUD,B",
      category: "ALUD",
      displayLine: 1,
      description: "F -> B : F -> Y",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "B",
      encoding: {
        w4: "060000",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUD,B,YA": {
      name: "ALUD,B,YA",
      category: "ALUD",
      displayLine: 1,
      description: "F -> B : A -> Y",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "B",
      encoding: {
        w4: "040000",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUD,NONE": {
      name: "ALUD,NONE",
      category: "ALUD",
      displayLine: 1,
      description: "F -> Y",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "020000",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUD,Q": {
      name: "ALUD,Q",
      category: "ALUD",
      displayLine: 1,
      description: "F -> Q : F -> Y",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUD,SLB": {
      name: "ALUD,SLB",
      category: "ALUD",
      displayLine: 1,
      description: "F -> Y : F*2 -> B",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "B",
      encoding: {
        w4: "160000",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUD,SLD": {
      name: "ALUD,SLD",
      category: "ALUD",
      displayLine: 1,
      description: "F -> Y : (F,Q)*2 -> (B,Q)",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "B",
      encoding: {
        w4: "140000",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUD,SRB": {
      name: "ALUD,SRB",
      category: "ALUD",
      displayLine: 1,
      description: "F -> Y : F/2 -> B",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "B",
      encoding: {
        w4: "120000",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUD,SRD": {
      name: "ALUD,SRD",
      category: "ALUD",
      displayLine: 1,
      description: "F -> Y : (F,Q)/2 -> (B,Q)",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "100000",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,-A": {
      name: "ALUF,-A",
      category: "ALUF",
      displayLine: 1,
      description: "-A -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "A",
      encoding: {
        w4: "005000",
        w3: "040000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,-A-1": {
      name: "ALUF,-A-1",
      category: "ALUF",
      displayLine: 1,
      description: "-A - 1 -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "A",
      encoding: {
        w4: "005000",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,-B": {
      name: "ALUF,-B",
      category: "ALUF",
      displayLine: 1,
      description: "-B -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "B",
      encoding: {
        w4: "004600",
        w3: "040000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,-B-1": {
      name: "ALUF,-B-1",
      category: "ALUF",
      displayLine: 1,
      description: "-B - 1 -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "B",
      encoding: {
        w4: "004600",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,-D": {
      name: "ALUF,-D",
      category: "ALUF",
      displayLine: 1,
      description: "-D -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "003600",
        w3: "040000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,-D-1": {
      name: "ALUF,-D-1",
      category: "ALUF",
      displayLine: 1,
      description: "-D - 1 -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "003600",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,-Q": {
      name: "ALUF,-Q",
      category: "ALUF",
      displayLine: 1,
      description: "-Q -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "004400",
        w3: "040000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,-Q-1": {
      name: "ALUF,-Q-1",
      category: "ALUF",
      displayLine: 1,
      description: "-Q - 1 -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "004400",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,A": {
      name: "ALUF,A",
      category: "ALUF",
      displayLine: 1,
      description: "A -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "A",
      encoding: {
        w4: "001000",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,A-1": {
      name: "ALUF,A-1",
      category: "ALUF",
      displayLine: 1,
      description: "A - 1 -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "A",
      encoding: {
        w4: "003000",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,A-B": {
      name: "ALUF,A-B",
      category: "ALUF",
      displayLine: 1,
      description: "A - B -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "AB",
      encoding: {
        w4: "004200",
        w3: "040000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,A-B-1": {
      name: "ALUF,A-B-1",
      category: "ALUF",
      displayLine: 1,
      description: "A - B - 1 -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "AB",
      encoding: {
        w4: "004200",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,A-D": {
      name: "ALUF,A-D",
      category: "ALUF",
      displayLine: 1,
      description: "A - D -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "A",
      encoding: {
        w4: "003200",
        w3: "040000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,A-D-1": {
      name: "ALUF,A-D-1",
      category: "ALUF",
      displayLine: 1,
      description: "A - D - 1 -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "A",
      encoding: {
        w4: "003200",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,A-Q": {
      name: "ALUF,A-Q",
      category: "ALUF",
      displayLine: 1,
      description: "A - Q -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "A",
      encoding: {
        w4: "004000",
        w3: "040000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,A-Q-1": {
      name: "ALUF,A-Q-1",
      category: "ALUF",
      displayLine: 1,
      description: "A - Q - 1 -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "A",
      encoding: {
        w4: "004000",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,A+1": {
      name: "ALUF,A+1",
      category: "ALUF",
      displayLine: 1,
      description: "A + 1 -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "A",
      encoding: {
        w4: "001000",
        w3: "040000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,A+B": {
      name: "ALUF,A+B",
      category: "ALUF",
      displayLine: 1,
      description: "A + B -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "AB",
      encoding: {
        w4: "000200",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,A+B+1": {
      name: "ALUF,A+B+1",
      category: "ALUF",
      displayLine: 1,
      description: "A + B + 1 - >",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "AB",
      encoding: {
        w4: "000200",
        w3: "040000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,A+Q": {
      name: "ALUF,A+Q",
      category: "ALUF",
      displayLine: 1,
      description: "A + Q -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "A",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,A+Q+1": {
      name: "ALUF,A+Q+1",
      category: "ALUF",
      displayLine: 1,
      description: "A + Q * 1 -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "A",
      encoding: {
        w4: "000000",
        w3: "040000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,ANDAB": {
      name: "ALUF,ANDAB",
      category: "ALUF",
      displayLine: 1,
      description: "A /\\ B -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "AB",
      encoding: {
        w4: "010200",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,ANDAQ": {
      name: "ALUF,ANDAQ",
      category: "ALUF",
      displayLine: 1,
      description: "A /\\ Q -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "A",
      encoding: {
        w4: "010000",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,ANDDA": {
      name: "ALUF,ANDDA",
      category: "ALUF",
      displayLine: 1,
      description: "D /\\ A -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "A",
      encoding: {
        w4: "011200",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,ANDDQ": {
      name: "ALUF,ANDDQ",
      category: "ALUF",
      displayLine: 1,
      description: "D /\\ Q -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "011400",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,B": {
      name: "ALUF,B",
      category: "ALUF",
      displayLine: 1,
      description: "B -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "B",
      encoding: {
        w4: "000600",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,B-1": {
      name: "ALUF,B-1",
      category: "ALUF",
      displayLine: 1,
      description: "B - 1 -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "B",
      encoding: {
        w4: "002600",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,B-A": {
      name: "ALUF,B-A",
      category: "ALUF",
      displayLine: 1,
      description: "B - A -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "AB",
      encoding: {
        w4: "002200",
        w3: "040000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,B-A-1": {
      name: "ALUF,B-A-1",
      category: "ALUF",
      displayLine: 1,
      description: "B - A - 1 -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "AB",
      encoding: {
        w4: "002200",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,B+1": {
      name: "ALUF,B+1",
      category: "ALUF",
      displayLine: 1,
      description: "B + 1 -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "B",
      encoding: {
        w4: "000600",
        w3: "040000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,D": {
      name: "ALUF,D",
      category: "ALUF",
      displayLine: 1,
      description: "D -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "001600",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,D-1": {
      name: "ALUF,D-1",
      category: "ALUF",
      displayLine: 1,
      description: "D - 1 -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "005600",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,D-A": {
      name: "ALUF,D-A",
      category: "ALUF",
      displayLine: 1,
      description: "D - A -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "A",
      encoding: {
        w4: "005200",
        w3: "040000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,D-A-1": {
      name: "ALUF,D-A-1",
      category: "ALUF",
      displayLine: 1,
      description: "D - A - 1 -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "A",
      encoding: {
        w4: "005200",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,D-Q": {
      name: "ALUF,D-Q",
      category: "ALUF",
      displayLine: 1,
      description: "D - Q -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "005400",
        w3: "040000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,D-Q-1": {
      name: "ALUF,D-Q-1",
      category: "ALUF",
      displayLine: 1,
      description: "D - Q - 1 -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "005400",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,D+1": {
      name: "ALUF,D+1",
      category: "ALUF",
      displayLine: 1,
      description: "D + 1 -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "001600",
        w3: "040000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,D+A": {
      name: "ALUF,D+A",
      category: "ALUF",
      displayLine: 1,
      description: "D + A -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "001200",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,D+A+1": {
      name: "ALUF,D+A+1",
      category: "ALUF",
      displayLine: 1,
      description: "D + A + 1 -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "A",
      encoding: {
        w4: "001200",
        w3: "040000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,D+Q": {
      name: "ALUF,D+Q",
      category: "ALUF",
      displayLine: 1,
      description: "D + Q -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "001400",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,D+Q+1": {
      name: "ALUF,D+Q+1",
      category: "ALUF",
      displayLine: 1,
      description: "D + Q + 1 - > F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "001400",
        w3: "040000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,INVA": {
      name: "ALUF,INVA",
      category: "ALUF",
      displayLine: 1,
      description: "NOT(A) -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "A",
      encoding: {
        w4: "017000",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,INVB": {
      name: "ALUF,INVB",
      category: "ALUF",
      displayLine: 1,
      description: "NOT(B) -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "B",
      encoding: {
        w4: "016600",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,INVD": {
      name: "ALUF,INVD",
      category: "ALUF",
      displayLine: 1,
      description: "NOT(D) -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "017600",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,INVQ": {
      name: "ALUF,INVQ",
      category: "ALUF",
      displayLine: 1,
      description: "NOT(Q) -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "016400",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,MASKAB": {
      name: "ALUF,MASKAB",
      category: "ALUF",
      displayLine: 1,
      description: "NOT(A) /\\ B -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "AB",
      encoding: {
        w4: "012200",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,MASKAQ": {
      name: "ALUF,MASKAQ",
      category: "ALUF",
      displayLine: 1,
      description: "NOT(A) /\\ Q -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "012000",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,MASKDA": {
      name: "ALUF,MASKDA",
      category: "ALUF",
      displayLine: 1,
      description: "NOT(D) /\\ A -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "A",
      encoding: {
        w4: "013200",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,MASKDQ": {
      name: "ALUF,MASKDQ",
      category: "ALUF",
      displayLine: 1,
      description: "NOT(D) /\\ Q -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "013400",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,ORAB": {
      name: "ALUF,ORAB",
      category: "ALUF",
      displayLine: 1,
      description: "A \\/ B -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "AB",
      encoding: {
        w4: "006200",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,ORAQ": {
      name: "ALUF,ORAQ",
      category: "ALUF",
      displayLine: 1,
      description: "A \\/ Q -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "A",
      encoding: {
        w4: "006000",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,ORDA": {
      name: "ALUF,ORDA",
      category: "ALUF",
      displayLine: 1,
      description: "D \\/ A -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "A",
      encoding: {
        w4: "007200",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,ORDQ": {
      name: "ALUF,ORDQ",
      category: "ALUF",
      displayLine: 1,
      description: "D \\/ Q -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "007400",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,PASSA": {
      name: "ALUF,PASSA",
      category: "ALUF",
      displayLine: 1,
      description: "A -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "A",
      encoding: {
        w4: "015000",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,PASSB": {
      name: "ALUF,PASSB",
      category: "ALUF",
      displayLine: 1,
      description: "B -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "B",
      encoding: {
        w4: "014600",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,PASSD": {
      name: "ALUF,PASSD",
      category: "ALUF",
      displayLine: 1,
      description: "D -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "015600",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,PASSQ": {
      name: "ALUF,PASSQ",
      category: "ALUF",
      displayLine: 1,
      description: "Q -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "014400",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,Q": {
      name: "ALUF,Q",
      category: "ALUF",
      displayLine: 1,
      description: "Q -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000400",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,Q-1": {
      name: "ALUF,Q-1",
      category: "ALUF",
      displayLine: 1,
      description: "0 - 1 -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "002400",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,Q-A": {
      name: "ALUF,Q-A",
      category: "ALUF",
      displayLine: 1,
      description: "Q - A -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "A",
      encoding: {
        w4: "002000",
        w3: "040000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,Q-A-1": {
      name: "ALUF,Q-A-1",
      category: "ALUF",
      displayLine: 1,
      description: "Q - A - 1 -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "A",
      encoding: {
        w4: "002000",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,Q-D": {
      name: "ALUF,Q-D",
      category: "ALUF",
      displayLine: 1,
      description: "Q - D -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "003400",
        w3: "040000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,Q-D-1": {
      name: "ALUF,Q-D-1",
      category: "ALUF",
      displayLine: 1,
      description: "Q - D- 1 -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "003400",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,Q+1": {
      name: "ALUF,Q+1",
      category: "ALUF",
      displayLine: 1,
      description: "Q + 1 -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000400",
        w3: "040000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,XNORAB": {
      name: "ALUF,XNORAB",
      category: "ALUF",
      displayLine: 1,
      description: "NOT(A XOR B) -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "AB",
      encoding: {
        w4: "016200",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,XNORAQ": {
      name: "ALUF,XNORAQ",
      category: "ALUF",
      displayLine: 1,
      description: "NOT(A XOR Q) -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "AB",
      encoding: {
        w4: "016000",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,XNORDA": {
      name: "ALUF,XNORDA",
      category: "ALUF",
      displayLine: 1,
      description: "NOT(D XOR A) -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "AB",
      encoding: {
        w4: "017200",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,XNORDQ": {
      name: "ALUF,XNORDQ",
      category: "ALUF",
      displayLine: 1,
      description: "NOT(D XOR Q) -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "AB",
      encoding: {
        w4: "017400",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,XORAB": {
      name: "ALUF,XORAB",
      category: "ALUF",
      displayLine: 1,
      description: "A XOR B -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "AB",
      encoding: {
        w4: "014200",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,XORAQ": {
      name: "ALUF,XORAQ",
      category: "ALUF",
      displayLine: 1,
      description: "A XOR Q -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "A",
      encoding: {
        w4: "014000",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,XORDA": {
      name: "ALUF,XORDA",
      category: "ALUF",
      displayLine: 1,
      description: "D XOR A -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "A",
      encoding: {
        w4: "015200",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,XORDQ": {
      name: "ALUF,XORDQ",
      category: "ALUF",
      displayLine: 1,
      description: "D XOR Q -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "015400",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUF,ZERO": {
      name: "ALUF,ZERO",
      category: "ALUF",
      displayLine: 1,
      description: "0 -> F",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "010400",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUM,FDV": {
      name: "ALUM,FDV",
      category: "ALUM",
      displayLine: 1,
      description: "DIVISION ALU MODE. GPR 0 -> ALU-INSTR 3 : LEFT GPR-SHIFT",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "020000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUM,FMU": {
      name: "ALUM,FMU",
      category: "ALUM",
      displayLine: 1,
      description: "MULTIPLY ALU MODE. GPR 0 -> ALU-INSTR 1 ; RIGHT GPR-SHIFT",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "010000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUM,IR": {
      name: "ALUM,IR",
      category: "ALUM",
      displayLine: 1,
      description: "SHIFT INSTR. MODE. SH MODE FROM IR-BITS. M IS SET AUTOM.",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "030000",
        w2: "000000",
        w1: "000000"
      }
    },
    "ALUM,MIC": {
      name: "ALUM,MIC",
      category: "ALUM",
      displayLine: 1,
      description: "MICROPROGRAM CONTR. SHIFT. SHIFT MODE FROM 'MIS-BITS'",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "B,0": {
      name: "B,0",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS 0",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "B,1": {
      name: "B,1",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS 1",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000001",
        w1: "000000"
      }
    },
    "B,10": {
      name: "B,10",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS 10",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000010",
        w1: "000000"
      }
    },
    "B,11": {
      name: "B,11",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS 11",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000011",
        w1: "000000"
      }
    },
    "B,12": {
      name: "B,12",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS 12",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000012",
        w1: "000000"
      }
    },
    "B,13": {
      name: "B,13",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS 13",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000013",
        w1: "000000"
      }
    },
    "B,14": {
      name: "B,14",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS 14",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000014",
        w1: "000000"
      }
    },
    "B,15": {
      name: "B,15",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS 15",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000015",
        w1: "000000"
      }
    },
    "B,16": {
      name: "B,16",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS 16",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000016",
        w1: "000000"
      }
    },
    "B,17": {
      name: "B,17",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS 17",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000017",
        w1: "000000"
      }
    },
    "B,2": {
      name: "B,2",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS 2",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000002",
        w1: "000000"
      }
    },
    "B,3": {
      name: "B,3",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS 3",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000003",
        w1: "000000"
      }
    },
    "B,4": {
      name: "B,4",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS 4",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000004",
        w1: "000000"
      }
    },
    "B,5": {
      name: "B,5",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS 5",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000005",
        w1: "000000"
      }
    },
    "B,6": {
      name: "B,6",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS 6",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000006",
        w1: "000000"
      }
    },
    "B,7": {
      name: "B,7",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS 7",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000007",
        w1: "000000"
      }
    },
    "B,A": {
      name: "B,A",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS 5. USED TO ADDR. THE A-REGISTER",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000005",
        w1: "000000"
      }
    },
    "B,B": {
      name: "B,B",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS 3. USED TO ADDR. THE B-REGISTER",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "004003",
        w1: "000000"
      }
    },
    "B,D": {
      name: "B,D",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS 1. USED TO ADDR. THE D-REGISTER",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000001",
        w1: "000000"
      }
    },
    "B,DEST": {
      name: "B,DEST",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS VALUE OF 'INSTR. BITS 0-2' LOADED BY LAST 'T,MAPJ'",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000001",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "B,L": {
      name: "B,L",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS 4. USED TO ADDR. THE L-REGISTER",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000004",
        w1: "000000"
      }
    },
    "B,LC": {
      name: "B,LC",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS VALUE OF THE 'LOOP COUNTER' TWO INSTRUCTIONS AGO",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000003",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "B,P": {
      name: "B,P",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS 2. USED TO ADDR. THE P-REGISTER",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "004002",
        w1: "000000"
      }
    },
    "B,R1": {
      name: "B,R1",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS 11. USED TO ADDR. REG. 11, ADDR. OR SCRATCH",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000011",
        w1: "000000"
      }
    },
    "B,R2": {
      name: "B,R2",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS 12. USED TO ADDR. REG. 12, SCRATCH",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000012",
        w1: "000000"
      }
    },
    "B,R3": {
      name: "B,R3",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP, IS 13. USED TO ADDR. REG. 13. SCRATCH",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000013",
        w1: "000000"
      }
    },
    "B,R4": {
      name: "B,R4",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS 14. USED TO ADDR. REG. 14. SCRATCH",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000014",
        w1: "000000"
      }
    },
    "B,R5": {
      name: "B,R5",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS 15. USED TO ADDR. REG. 15, SCRATCH",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000015",
        w1: "000000"
      }
    },
    "B,R6": {
      name: "B,R6",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS 16. USED TO ADDR. REG. 16, SCRATCH",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000016",
        w1: "000000"
      }
    },
    "B,R7": {
      name: "B,R7",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS 17. USED TO ADDR. REG. 17, SCRATCH",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000017",
        w1: "000000"
      }
    },
    "B,SRCE": {
      name: "B,SRCE",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS VALUE OF 'INSTR. BITS 3-5' LOADED BY LAST 'T,MAPJ'",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000002",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "B,STS": {
      name: "B,STS",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS 10. USED TO ADDR. REG. 10, STATUS OR SCRATCH",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000010",
        w1: "000000"
      }
    },
    "B,T": {
      name: "B,T",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS 6. USED TO ADDR. THE T-REGISTER",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000006",
        w1: "000000"
      }
    },
    "B,X": {
      name: "B,X",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS 7. USED TO ADDR. THE X-REGISTER",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "004007",
        w1: "000000"
      }
    },
    "B,Z": {
      name: "B,Z",
      category: "B_REG",
      displayLine: 1,
      description: "B-OP. IS O. USED TO ADDR. ZERO REG. , STATUS OR SCRATCH",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "B",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "COMM,ADCS": {
      name: "COMM,ADCS",
      category: "COMM",
      displayLine: 2,
      description: "SET CONTROL STORE ADDRESS",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "000036",
        w2: "004040",
        w1: "000000"
      }
    },
    "COMM,AREAD,*": {
      name: "COMM,AREAD,*",
      category: "COMM",
      displayLine: 2,
      description: "READ P-RELATIVE",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "000030",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,AREAD,B": {
      name: "COMM,AREAD,B",
      category: "COMM",
      displayLine: 2,
      description: "READ ,B",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "002030",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,AREAD,I": {
      name: "COMM,AREAD,I",
      category: "COMM",
      displayLine: 2,
      description: "READ I & I,B",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "004030",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,AREAD,NEXT": {
      name: "COMM,AREAD,NEXT",
      category: "COMM",
      displayLine: 2,
      description: "READ NEXT ADDRESS",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "006031",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,AREAD,X": {
      name: "COMM,AREAD,X",
      category: "COMM",
      displayLine: 2,
      description: "READ ,X",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "006030",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,AREAD,XB": {
      name: "COMM,AREAD,XB",
      category: "COMM",
      displayLine: 2,
      description: "READ , B,X",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "000031",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,AREAD,XI": {
      name: "COMM,AREAD,XI",
      category: "COMM",
      displayLine: 2,
      description: "READ I,X & I,B,X",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "002031",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,AWRITE,*": {
      name: "COMM,AWRITE,*",
      category: "COMM",
      displayLine: 2,
      description: "WRITE P-RELATIVE",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "000032",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,AWRITE,B": {
      name: "COMM,AWRITE,B",
      category: "COMM",
      displayLine: 2,
      description: "WRITE ,B",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "002032",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,AWRITE,HOLD": {
      name: "COMM,AWRITE,HOLD",
      category: "COMM",
      displayLine: 2,
      description: "WRITE IN LAST ADDRESS",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "004033",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,AWRITE,I": {
      name: "COMM,AWRITE,I",
      category: "COMM",
      displayLine: 2,
      description: "WRITE I & I,B",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "004032",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,AWRITE,NEXT": {
      name: "COMM,AWRITE,NEXT",
      category: "COMM",
      displayLine: 2,
      description: "WRITE IN NEXT ADDRESS",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "006033",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,AWRITE,X": {
      name: "COMM,AWRITE,X",
      category: "COMM",
      displayLine: 2,
      description: "WRITE ,X",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "006032",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,AWRITE,XB": {
      name: "COMM,AWRITE,XB",
      category: "COMM",
      displayLine: 2,
      description: "WRITE ,X,B",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "000033",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,AWRITE,XI": {
      name: "COMM,AWRITE,XI",
      category: "COMM",
      displayLine: 2,
      description: "WRITE I,X & I,X,B",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "002033",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,CCLR": {
      name: "COMM,CCLR",
      category: "COMM",
      displayLine: 2,
      description: "CLEAR CACHE (BIT 3 OF CSR MUST BE 0 BEFORE START)",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "004021",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,CJMP,F=0": {
      name: "COMM,CJMP,F=0",
      category: "COMM",
      displayLine: 2,
      description: "JUMP IF F =0",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "004023",
        w2: "004040",
        w1: "000000"
      }
    },
    "COMM,CJMP,F15": {
      name: "COMM,CJMP,F15",
      category: "COMM",
      displayLine: 2,
      description: "JUMP IF F15 =1",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "000023",
        w2: "004040",
        w1: "000000"
      }
    },
    "COMM,CJMP,NF=0": {
      name: "COMM,CJMP,NF=0",
      category: "COMM",
      displayLine: 2,
      description: "JUMP IF F <> 0",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "006023",
        w2: "004040",
        w1: "000000"
      }
    },
    "COMM,CJMP,NF15": {
      name: "COMM,CJMP,NF15",
      category: "COMM",
      displayLine: 2,
      description: "JUMP IF F15 -0",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "002023",
        w2: "004040",
        w1: "000000"
      }
    },
    "COMM,CLFF": {
      name: "COMM,CLFF",
      category: "COMM",
      displayLine: 2,
      description: "CLEAR THE 'OOD' AND THE 'DZD' FLIP-FLOPS",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "000016",
        w2: "000000",
        w1: "000000"
      }
    },
    "COMM,CLIRQ": {
      name: "COMM,CLIRQ",
      category: "COMM",
      displayLine: 2,
      description: "PREVENT JUMP TO INTR VECT. REMOVE 'PANEL'-EFF ON IRQ-TEST",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "000004",
        w2: "000000",
        w1: "000000"
      }
    },
    "COMM,CLRTC": {
      name: "COMM,CLRTC",
      category: "COMM",
      displayLine: 2,
      description: "CLEAR THE 20 MS CLOCK FLIP-FLOP",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "000015",
        w2: "000000",
        w1: "000000"
      }
    },
    "COMM,CNEXT,CRY": {
      name: "COMM,CNEXT,CRY",
      category: "COMM",
      displayLine: 2,
      description: "SKIP MLS",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "004024",
        w2: "004040",
        w1: "000000"
      }
    },
    "COMM,CNEXT,F=0": {
      name: "COMM,CNEXT,F=0",
      category: "COMM",
      displayLine: 2,
      description: "SKIP VEQ",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "004025",
        w2: "004040",
        w1: "000000"
      }
    },
    "COMM,CNEXT,F15": {
      name: "COMM,CNEXT,F15",
      category: "COMM",
      displayLine: 2,
      description: "SKIP GEQ",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "000025",
        w2: "004040",
        w1: "000000"
      }
    },
    "COMM,CNEXT,NCRY": {
      name: "COMM,CNEXT,NCRY",
      category: "COMM",
      displayLine: 2,
      description: "SKIP MGR",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "006024",
        w2: "004040",
        w1: "000000"
      }
    },
    "COMM,CNEXT,NF=0": {
      name: "COMM,CNEXT,NF=0",
      category: "COMM",
      displayLine: 2,
      description: "SKIP EQL",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "006025",
        w2: "004040",
        w1: "000000"
      }
    },
    "COMM,CNEXT,NF15": {
      name: "COMM,CNEXT,NF15",
      category: "COMM",
      displayLine: 2,
      description: "SKIP LSS",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "002025",
        w2: "004040",
        w1: "000000"
      }
    },
    "COMM,CNEXT,NSGR": {
      name: "COMM,CNEXT,NSGR",
      category: "COMM",
      displayLine: 2,
      description: "SKIP GRE",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "002024",
        w2: "004040",
        w1: "000000"
      }
    },
    "COMM,CNEXT,NWP": {
      name: "COMM,CNEXT,NWP",
      category: "COMM",
      displayLine: 2,
      description: "EXECUTE NEXT INSTRUCTION IF P NOT CHANGED IN LAST CYCLE",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "006022",
        w2: "004040",
        w1: "000000"
      }
    },
    "COMM,CNEXT,SGR": {
      name: "COMM,CNEXT,SGR",
      category: "COMM",
      displayLine: 2,
      description: "SKIP LST",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "000024",
        w2: "004040",
        w1: "000000"
      }
    },
    "COMM,CONTINUE": {
      name: "COMM,CONTINUE",
      category: "COMM",
      displayLine: 2,
      description: "FETCH NEW INSTRUCTION RELATIVE TO P",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "006027",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,DERQ": {
      name: "COMM,DERQ",
      category: "COMM",
      displayLine: 2,
      description: "DEPOSIT",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "006035",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,EPIC": {
      name: "COMM,EPIC",
      category: "COMM",
      displayLine: 2,
      description: "A-OPERAND IS AN INSTRUCTION TO 'PIC' (PRIORITY INT CONTA)",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "PIC",
      encoding: {
        w4: "000000",
        w3: "000011",
        w2: "000000",
        w1: "000000"
      }
    },
    "COMM,EWRF": {
      name: "COMM,EWRF",
      category: "COMM",
      displayLine: 2,
      description: "IDB -> REGISTER FILE WORD ADDRESSED BY A-OP AND B-OP",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      requires: "AB",
      encoding: {
        w4: "000000",
        w3: "000003",
        w2: "004000",
        w1: "000000"
      }
    },
    "COMM,EXRQ": {
      name: "COMM,EXRQ",
      category: "COMM",
      displayLine: 2,
      description: "EXAMINE",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "006034",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,IDENT": {
      name: "COMM,IDENT",
      category: "COMM",
      displayLine: 2,
      description: "IDENT BUS REQUEST",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "004037",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,IOX": {
      name: "COMM,IOX",
      category: "COMM",
      displayLine: 2,
      description: "10X BUS REQUEST",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "006037",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,IREAD,APT": {
      name: "COMM,IREAD,APT",
      category: "COMM",
      displayLine: 2,
      description: "INDIRECT ADDRESS READ (APT-RELATIVE)",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "002022",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,IREAD,PT": {
      name: "COMM,IREAD,PT",
      category: "COMM",
      displayLine: 2,
      description: "INDIRECT ADDRESS READ (PT-RELATIVE)",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "000022",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,IREAD2": {
      name: "COMM,IREAD2",
      category: "COMM",
      displayLine: 2,
      description: "READ FIRST PART OF 32-BIT INDIRECT ADDRESS",
      models: [
        "nd110"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "004031",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,JMP,*": {
      name: "COMM,JMP,*",
      category: "COMM",
      displayLine: 2,
      description: "JMP P-RELATIVE",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "000026",
        w2: "002040",
        w1: "000000"
      }
    },
    "COMM,JMP,B": {
      name: "COMM,JMP,B",
      category: "COMM",
      displayLine: 2,
      description: "JMP ,B",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "002026",
        w2: "002040",
        w1: "000000"
      }
    },
    "COMM,JMP,I": {
      name: "COMM,JMP,I",
      category: "COMM",
      displayLine: 2,
      description: "JMP I & I,B",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "004026",
        w2: "002040",
        w1: "000000"
      }
    },
    "COMM,JMP,X": {
      name: "COMM,JMP,X",
      category: "COMM",
      displayLine: 2,
      description: "JMP ,X",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "006026",
        w2: "002040",
        w1: "000000"
      }
    },
    "COMM,JMP,XB": {
      name: "COMM,JMP,XB",
      category: "COMM",
      displayLine: 2,
      description: "JMP ,X,B",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "000027",
        w2: "002040",
        w1: "000000"
      }
    },
    "COMM,JMP,XI": {
      name: "COMM,JMP,XI",
      category: "COMM",
      displayLine: 2,
      description: "JMP I,X & I,B,X",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "002027",
        w2: "002040",
        w1: "000000"
      }
    },
    "COMM,LBCONT": {
      name: "COMM,LBCONT",
      category: "COMM",
      displayLine: 2,
      description: "USED IN PREX-INSTRUCTION ONLY",
      models: [
        "nd110"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "004027",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,LDDOMI": {
      name: "COMM,LDDOMI",
      category: "COMM",
      displayLine: 2,
      description: "LOAD SINTRAN-4 DOMAIN REGISTER",
      models: [
        "nd110"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "002020",
        w2: "004040",
        w1: "000000"
      }
    },
    "COMM,LDEXM": {
      name: "COMM,LDEXM",
      category: "COMM",
      displayLine: 2,
      description: "LOAD EXAMINE MODE",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "006021",
        w2: "004040",
        w1: "000000"
      }
    },
    "COMM,LDGPR": {
      name: "COMM,LDGPR",
      category: "COMM",
      displayLine: 2,
      description: "IDB -> GENERAL-PURPOSE-REGISTER",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "000002",
        w2: "000000",
        w1: "000000"
      }
    },
    "COMM,LDIRV": {
      name: "COMM,LDIRV",
      category: "COMM",
      displayLine: 2,
      description: "LOAD INSTRUCTION REGISTER FOR OR-LOGIC USE",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "006020",
        w2: "004040",
        w1: "000000"
      }
    },
    "COMM,LDLC": {
      name: "COMM,LDLC",
      category: "COMM",
      displayLine: 2,
      description: "LOAD THE 'LOOP COUNTER' WITH THE 6 LOWER IDB-BITS",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "000017",
        w2: "004000",
        w1: "000000"
      }
    },
    "COMM,LDPANC": {
      name: "COMM,LDPANC",
      category: "COMM",
      displayLine: 2,
      description: "SEND ONE BYTE TO IR 0",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "004006",
        w2: "000000",
        w1: "000000"
      }
    },
    "COMM,LDPCR": {
      name: "COMM,LDPCR",
      category: "COMM",
      displayLine: 2,
      description: "LOAD PCR (NUMBER DETERMINED BY PIL)",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "006006",
        w2: "000000",
        w1: "000000"
      }
    },
    "COMM,LDPIL": {
      name: "COMM,LDPIL",
      category: "COMM",
      displayLine: 2,
      description: "IDB BITS 8-15 -> STATUS BITS 8-15",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "000001",
        w2: "000000",
        w1: "000000"
      }
    },
    "COMM,LDPS": {
      name: "COMM,LDPS",
      category: "COMM",
      displayLine: 2,
      description: "LOAD SINTRAN-4 PS REGISTER",
      models: [
        "nd110"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "004020",
        w2: "004040",
        w1: "000000"
      }
    },
    "COMM,LDSEG": {
      name: "COMM,LDSEG",
      category: "COMM",
      displayLine: 2,
      description: "LOAD SEGMENT REGISTER (SELECTS PHYSICAL 64K AREA)",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "000020",
        w2: "004040",
        w1: "000000"
      }
    },
    "COMM,MACL": {
      name: "COMM,MACL",
      category: "COMM",
      displayLine: 2,
      description: "HARD RESET. MASTER CLEAR WITH LOAD CONTROL STORE",
      models: [
        "nd120"
      ],
      nd120Only: true,
      encoding: {
        w4: "000000",
        w3: "004036",
        w2: "000000",
        w1: "000000"
      }
    },
    "COMM,MAP": {
      name: "COMM,MAP",
      category: "COMM",
      displayLine: 2,
      description: "USE IDB AS INSTRUCTION (AS IN EXR)",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "004022",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,RDRQ,APT": {
      name: "COMM,RDRQ,APT",
      category: "COMM",
      displayLine: 2,
      description: "READ ALTERNATIVE-PT-RELATIVE, ADDRESS FROM IDB",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "002034",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,RDRQ,HOLD": {
      name: "COMM,RDRQ,HOLD",
      category: "COMM",
      displayLine: 2,
      description: "READ FROM LAST USED PT. ADDRESS FROM IDB",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "004034",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,RDRQ,PT": {
      name: "COMM,RDRQ,PT",
      category: "COMM",
      displayLine: 2,
      description: "READ PAGE-TABLE-RELATIVE, ADDRESS FROM IDB",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "000034",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,RSDA": {
      name: "COMM,RSDA",
      category: "COMM",
      displayLine: 2,
      description: "RESET DATA AVAILABLE IN 'UART'",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "000005",
        w2: "000000",
        w1: "000000"
      }
    },
    "COMM,RWCS": {
      name: "COMM,RWCS",
      category: "COMM",
      displayLine: 2,
      description: "READ OR WRITE IN CONTROL STORE",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "002036",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,SIOC": {
      name: "COMM,SIOC",
      category: "COMM",
      displayLine: 2,
      description: "LOAD 'I/O-CONTROL' REGISTER (TERMINAL-1, CLK-INTS, ETC. )",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "000007",
        w2: "000000",
        w1: "000000"
      }
    },
    "COMM,SLOW": {
      name: "COMM,SLOW",
      category: "COMM",
      displayLine: 2,
      description: "SLOW CYCLE (200 NS)",
      models: [
        "nd120"
      ],
      nd120Only: true,
      encoding: {
        w4: "000000",
        w3: "000010",
        w2: "000000",
        w1: "000000"
      }
    },
    "COMM,SLOW1": {
      name: "COMM,SLOW1",
      category: "COMM",
      displayLine: 2,
      description: "SLOW CYCLE",
      models: [
        "nd110"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "000010",
        w2: "000000",
        w1: "000000"
      }
    },
    "COMM,SLOW2": {
      name: "COMM,SLOW2",
      category: "COMM",
      displayLine: 2,
      description: "SLOW CYCLE",
      models: [
        "nd110"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "000010",
        w2: "000000",
        w1: "000000"
      }
    },
    "COMM,SMPID": {
      name: "COMM,SMPID",
      category: "COMM",
      displayLine: 2,
      description: "SET MICRO-PID. PID-BITS WHERE IDB IS '1' ARE FORCED TO '1'",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "000012",
        w2: "006000",
        w1: "000000"
      }
    },
    "COMM,SSEMA": {
      name: "COMM,SSEMA",
      category: "COMM",
      displayLine: 2,
      description: "THE NEXT REQUEST IS A SEMAPHOR REQUEST",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "002021",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,SSTOP": {
      name: "COMM,SSTOP",
      category: "COMM",
      displayLine: 2,
      description: "SET THE 'STOP' FLIP-FLOP",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "000014",
        w2: "000000",
        w1: "000000"
      }
    },
    "COMM,START": {
      name: "COMM,START",
      category: "COMM",
      displayLine: 2,
      description: "RESET THE 'STOP' FLIP-FLOP",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "000013",
        w2: "000000",
        w1: "000000"
      }
    },
    "COMM,TBSTR": {
      name: "COMM,TBSTR",
      category: "COMM",
      displayLine: 2,
      description: "'TRANSMIT BUFFER STROBE' TO 'UART' IDB 0-7 -> 'UART'",
      models: [
        "nd110"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "000006",
        w2: "000000",
        w1: "000000"
      }
    },
    "COMM,UART,COM": {
      name: "COMM,UART,COM",
      category: "COMM",
      displayLine: 2,
      description: "CONSOLE COMMAND-REGISTER",
      models: [
        "nd120"
      ],
      nd120Only: true,
      encoding: {
        w4: "000000",
        w3: "006005",
        w2: "000000",
        w1: "000000"
      }
    },
    "COMM,UART,DATA": {
      name: "COMM,UART,DATA",
      category: "COMM",
      displayLine: 2,
      description: "CONSOLE DATA-REGISTERS",
      models: [
        "nd120"
      ],
      nd120Only: true,
      encoding: {
        w4: "000000",
        w3: "000005",
        w2: "000000",
        w1: "000000"
      }
    },
    "COMM,UART,MODE": {
      name: "COMM,UART,MODE",
      category: "COMM",
      displayLine: 2,
      description: "CONSOLE MODE-REGISTERS 1/2",
      models: [
        "nd120"
      ],
      nd120Only: true,
      encoding: {
        w4: "000000",
        w3: "004005",
        w2: "000000",
        w1: "000000"
      }
    },
    "COMM,UART,STATUS": {
      name: "COMM,UART,STATUS",
      category: "COMM",
      displayLine: 2,
      description: "CONSOLE STATUS-REGISTER",
      models: [
        "nd120"
      ],
      nd120Only: true,
      encoding: {
        w4: "000000",
        w3: "002005",
        w2: "000000",
        w1: "000000"
      }
    },
    "COMM,WALBR": {
      name: "COMM,WALBR",
      category: "COMM",
      displayLine: 2,
      description: "WRITE ALTERNATIVE LOGICAL BANK REGISTER",
      models: [
        "nd110"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "006036",
        w2: "004040",
        w1: "000000"
      }
    },
    "COMM,WCIHM": {
      name: "COMM,WCIHM",
      category: "COMM",
      displayLine: 2,
      description: "WRITE CACHE INHIBIT MAP (BIT 15 =1 IS NORMAL, = 0 IS INH)",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "000021",
        w2: "004040",
        w1: "000000"
      }
    },
    "COMM,WLBR": {
      name: "COMM,WLBR",
      category: "COMM",
      displayLine: 2,
      description: "WRITE LOGICAL BANK REGISTER",
      models: [
        "nd110"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "004036",
        w2: "004040",
        w1: "000000"
      }
    },
    "COMM,WRRQ,APT": {
      name: "COMM,WRRQ,APT",
      category: "COMM",
      displayLine: 2,
      description: "WRITE APT-RELATIVE, ADDRESS FROM IDB",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "002035",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,WRRQ,HOLD": {
      name: "COMM,WRRQ,HOLD",
      category: "COMM",
      displayLine: 2,
      description: "WRITE IN LAST USED PT, ADDRESS FROM IDB",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "004035",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,WRRQ,PT": {
      name: "COMM,WRRQ,PT",
      category: "COMM",
      displayLine: 2,
      description: "WRITE PT-RELATIVE, ADDRESS FROM IDB",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "000035",
        w2: "000040",
        w1: "000000"
      }
    },
    "COMM,XSLOW": {
      name: "COMM,XSLOW",
      category: "COMM",
      displayLine: 2,
      description: "MAKE EXTRA SLOW CYCLE (425 NS)",
      models: [
        "nd120"
      ],
      nd120Only: true,
      encoding: {
        w4: "000000",
        w3: "006036",
        w2: "000000",
        w1: "000000"
      }
    },
    "COND,COND": {
      name: "COND,COND",
      category: "COND",
      displayLine: 3,
      description: "COND FOR TEST IS OUTCOME OF LATEST TEST (DELAYS TESTS)",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000400",
        w1: "000160"
      }
    },
    "COND,CRY": {
      name: "COND,CRY",
      category: "COND",
      displayLine: 3,
      description: "CONDITION FOR TESTING IS 'CARRY' FROM ALU",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "COND",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000400",
        w1: "000260"
      }
    },
    "COND,DZD": {
      name: "COND,DZD",
      category: "COND",
      displayLine: 3,
      description: "COND FOR TESTING IS THE 'DOUBLE-ZERO-DETECT' FLIP-FLOP",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "COND",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000400",
        w1: "000000"
      }
    },
    "COND,F=0": {
      name: "COND,F=0",
      category: "COND",
      displayLine: 3,
      description: "CONDITION FOR TESTING IS 'ALL ZEROS' FROM ALU",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "COND",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000400",
        w1: "000340"
      }
    },
    "COND,F11": {
      name: "COND,F11",
      category: "COND",
      displayLine: 3,
      description: "CONDITION FOR TESTING IS BIT 11 FROM ALU",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "COND",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000400",
        w1: "000300"
      }
    },
    "COND,F15": {
      name: "COND,F15",
      category: "COND",
      displayLine: 3,
      description: "CONDITION FOR TESTING IS BIT 15 FROM ALU",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "COND",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000400",
        w1: "000320"
      }
    },
    "COND,FETCH": {
      name: "COND,FETCH",
      category: "COND",
      displayLine: 3,
      description: "CONDITION FOR TESTING IS LAST MEMORY REQUEST WAS FETCH",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "COND",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000400",
        w1: "000100"
      }
    },
    "COND,IRQ": {
      name: "COND,IRQ",
      category: "COND",
      displayLine: 3,
      description: "COND FOR TEST IS 'IRQ'. CHECKS LEV 10-15 IF 'COMM, CLIRQ'",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "COND",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000400",
        w1: "000040"
      }
    },
    "COND,LC=0": {
      name: "COND,LC=0",
      category: "COND",
      displayLine: 3,
      description: "CONDITION FOR TESTING IS 'LOOP-COUNTER' CONTENT =0",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "COND",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000400",
        w1: "000020"
      }
    },
    "COND,OOD": {
      name: "COND,OOD",
      category: "COND",
      displayLine: 3,
      description: "CONDITION FOR TESTING IS THE 'ONE-OUT-DETECT' FLIP-FLOP",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "COND",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000400",
        w1: "000120"
      }
    },
    "COND,OVF": {
      name: "COND,OVF",
      category: "COND",
      displayLine: 3,
      description: "CONDITION FOR TESTING IS 'OVERFLOW' FROM ALU",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "COND",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000400",
        w1: "000240"
      }
    },
    "COND,PXM": {
      name: "COND,PXM",
      category: "COND",
      displayLine: 3,
      description: "CONDITION FOR TESTING IS PREFIX-MODE",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "COND",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000400",
        w1: "000220"
      }
    },
    "COND,RESTR": {
      name: "COND,RESTR",
      category: "COND",
      displayLine: 3,
      description: "COND FOR TESTING IS 'RESTRICTED-MODE'. TRUE IF RING 0-1",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "COND",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000400",
        w1: "000060"
      }
    },
    "COND,STP": {
      name: "COND,STP",
      category: "COND",
      displayLine: 3,
      description: "CONDITION FOR TESTING IS 'STOP'",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "COND",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000400",
        w1: "000360"
      }
    },
    CONDENABL: {
      name: "CONDENABL",
      category: "SPECIAL",
      displayLine: 3,
      description: "ENABLE COND. SEQ. , USE 'FALSE' SPECS IF CONDITION FALSE",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000200",
        w1: "000000"
      }
    },
    "CRY,C": {
      name: "CRY,C",
      category: "CRY",
      displayLine: 1,
      description: "STATUS C -> CARRY IN",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "100000",
        w2: "000000",
        w1: "000000"
      }
    },
    "CRY,GPR": {
      name: "CRY,GPR",
      category: "CRY",
      displayLine: 1,
      description: "GPR BIT 0 -> CARRY IN",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "140000",
        w2: "000000",
        w1: "000000"
      }
    },
    "F,HOLD": {
      name: "F,HOLD",
      category: "F_STK",
      displayLine: 3,
      description: "FALSE STACK OPERATION IS HOLD. USED WITH A COND SETTING",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "F_STK",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "F,JMP": {
      name: "F,JMP",
      category: "F_SEQ",
      displayLine: 3,
      description: "FALSE SEQUENCE IS JUMP. USED WITH A CONDITION SETTING",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "F_SEQ",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "F,LOAD": {
      name: "F,LOAD",
      category: "F_STK",
      displayLine: 3,
      description: "FALSE STACK OPERATION IS LOAD. USED WITH A COND SETTING",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "F_STK",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "000002"
      }
    },
    "F,NEXT": {
      name: "F,NEXT",
      category: "F_SEQ",
      displayLine: 3,
      description: "FALSE SEQUENCE IS NEXT. USED WITH A CONDITION SETTING",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "F_SEQ",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "000010"
      }
    },
    "F,POP": {
      name: "F,POP",
      category: "F_STK",
      displayLine: 3,
      description: "FALSE STACK OPERATION IS POP. USED WITH A COND SETTING",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "F_STK",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "000001"
      }
    },
    "F,PUSH": {
      name: "F,PUSH",
      category: "F_STK",
      displayLine: 3,
      description: "FALSE STACK OPERATION IS PUSH. USED WITH A COND SETTING",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "F_STK",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "000003"
      }
    },
    "F,RETURN": {
      name: "F,RETURN",
      category: "F_SEQ",
      displayLine: 3,
      description: "FALSE SEQUENCE IS RETURN, USED WITH A CONDITION SETTING",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "F_SEQ",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "000004"
      }
    },
    "IDBS,AARG": {
      name: "IDBS,AARG",
      category: "IDBS",
      displayLine: 2,
      description: "A-OPERAND-ARGUMENT'10 (0-170) -> IDB",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "IDBS",
      requires: "A",
      encoding: {
        w4: "000000",
        w3: "000600",
        w2: "000000",
        w1: "000000"
      }
    },
    "IDBS,ALD": {
      name: "IDBS,ALD",
      category: "IDBS",
      displayLine: 2,
      description: "AUTOMATIC LOAD DESCRIPTOR & PRINT STATUS",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "IDBS",
      encoding: {
        w4: "000000",
        w3: "001300",
        w2: "006000",
        w1: "000000"
      }
    },
    "IDBS,ALU": {
      name: "IDBS,ALU",
      category: "IDBS",
      displayLine: 2,
      description: "ARITHMETIC-LOGIC-UNIT -> IDB",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "IDBS",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "IDBS,ARG": {
      name: "IDBS,ARG",
      category: "IDBS",
      displayLine: 2,
      description: "ARGUMENT (MICRO-INSTRUCTION-BITS 0-15) => IDB",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "IDBS",
      encoding: {
        w4: "000000",
        w3: "000200",
        w2: "000000",
        w1: "000000"
      }
    },
    "IDBS,BARG": {
      name: "IDBS,BARG",
      category: "IDBS",
      displayLine: 2,
      description: "B-OPERAND-ARGUMENT (0-17) -> IDB",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "IDBS",
      requires: "B",
      encoding: {
        w4: "000000",
        w3: "000400",
        w2: "000000",
        w1: "000000"
      }
    },
    "IDBS,BMG": {
      name: "IDBS,BMG",
      category: "IDBS",
      displayLine: 2,
      description: "BIT-MASK-GENERATOR -> IDB",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "IDBS",
      requires: "A",
      encoding: {
        w4: "000000",
        w3: "000040",
        w2: "000000",
        w1: "000000"
      }
    },
    "IDBS,CSR": {
      name: "IDBS,CSR",
      category: "IDBS",
      displayLine: 2,
      description: "CACHE STATUS REGISTER",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "IDBS",
      encoding: {
        w4: "000000",
        w3: "001200",
        w2: "006000",
        w1: "000000"
      }
    },
    "IDBS,DBR": {
      name: "IDBS,DBR",
      category: "IDBS",
      displayLine: 2,
      description: "DATA-BUS-REGISTER -> IDB",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "IDBS",
      encoding: {
        w4: "000000",
        w3: "000140",
        w2: "000000",
        w1: "000000"
      }
    },
    "IDBS,DSABL": {
      name: "IDBS,DSABL",
      category: "IDBS",
      displayLine: 2,
      description: "DConstants.IsABLE IDBS (USED TO READ 'PIC'-INFO, EXCEPT PIC-STS)",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "IDBS",
      encoding: {
        w4: "000000",
        w3: "000740",
        w2: "000000",
        w1: "000000"
      }
    },
    "IDBS,GPR": {
      name: "IDBS,GPR",
      category: "IDBS",
      displayLine: 2,
      description: "GENERAL-PURPOSE-REGISTER -> IDB",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "IDBS",
      encoding: {
        w4: "000000",
        w3: "000100",
        w2: "000000",
        w1: "000000"
      }
    },
    "IDBS,GPR,SEXT": {
      name: "IDBS,GPR,SEXT",
      category: "IDBS",
      displayLine: 2,
      description: "GPR BITS 0-7 (WITH BITS 8-15 EQUAL TO BIT 7) -> IDB",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "IDBS",
      encoding: {
        w4: "000000",
        w3: "001100",
        w2: "000000",
        w1: "000000"
      }
    },
    "IDBS,INR": {
      name: "IDBS,INR",
      category: "IDBS",
      displayLine: 2,
      description: "READ INSTALLATION NUMBER",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "IDBS",
      encoding: {
        w4: "000000",
        w3: "001640",
        w2: "006000",
        w1: "000000"
      }
    },
    "IDBS,IOR": {
      name: "IDBS,IOR",
      category: "IDBS",
      displayLine: 2,
      description: "UART DATA AND STATUS -> IDB",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "IDBS",
      encoding: {
        w4: "000000",
        w3: "000700",
        w2: "006000",
        w1: "000000"
      }
    },
    "IDBS,LA": {
      name: "IDBS,LA",
      category: "IDBS",
      displayLine: 2,
      description: "LOGICAL ADDRESS USED BY 'ALU' WHEN JUMP",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "IDBS",
      encoding: {
        w4: "000000",
        w3: "001600",
        w2: "000000",
        w1: "000000"
      }
    },
    "IDBS,LBR": {
      name: "IDBS,LBR",
      category: "IDBS",
      displayLine: 2,
      description: "READ LBR FROM LA BUS (MUST HAVE COMM,PLBR)",
      models: [
        "nd110"
      ],
      nd120Only: false,
      provides: "IDBS",
      encoding: {
        w4: "000000",
        w3: "001500",
        w2: "006000",
        w1: "000000"
      }
    },
    "IDBS,MAPANS": {
      name: "IDBS,MAPANS",
      category: "IDBS",
      displayLine: 2,
      description: "IR 0 USED BY TRA-INSTRUCTION",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "IDBS",
      encoding: {
        w4: "000000",
        w3: "001040",
        w2: "006000",
        w1: "000000"
      }
    },
    "IDBS,MIPANS": {
      name: "IDBS,MIPANS",
      category: "IDBS",
      displayLine: 2,
      description: "IR 0 USED BY MOPC",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "IDBS",
      encoding: {
        w4: "000000",
        w3: "001000",
        w2: "006000",
        w1: "000000"
      }
    },
    "IDBS,PANEL": {
      name: "IDBS,PANEL",
      category: "IDBS",
      displayLine: 2,
      description: "PANEL VECTOR",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "IDBS",
      encoding: {
        w4: "000000",
        w3: "001340",
        w2: "006000",
        w1: "000000"
      }
    },
    "IDBS,PCR": {
      name: "IDBS,PCR",
      category: "IDBS",
      displayLine: 2,
      description: "READ PAGING CONTROL REGISTER (NUMBER SELECTED BY PIL)",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "IDBS",
      encoding: {
        w4: "000000",
        w3: "001240",
        w2: "006000",
        w1: "000000"
      }
    },
    "IDBS,PEA": {
      name: "IDBS,PEA",
      category: "IDBS",
      displayLine: 2,
      description: "PEA-REGISTER -> IDB",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "IDBS",
      encoding: {
        w4: "000000",
        w3: "000500",
        w2: "006000",
        w1: "000000"
      }
    },
    "IDBS,PES": {
      name: "IDBS,PES",
      category: "IDBS",
      displayLine: 2,
      description: "PES-REGISTER -> IDB",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "IDBS",
      encoding: {
        w4: "000000",
        w3: "000540",
        w2: "006000",
        w1: "000000"
      }
    },
    "IDBS,PGS": {
      name: "IDBS,PGS",
      category: "IDBS",
      displayLine: 2,
      description: "PAGING STATUS ACCORDING TO LAST REQUEST (NEVER LOCKED)",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "IDBS",
      encoding: {
        w4: "000000",
        w3: "001140",
        w2: "006000",
        w1: "000000"
      }
    },
    "IDBS,PIC": {
      name: "IDBS,PIC",
      category: "IDBS",
      displayLine: 2,
      description: "PRIORITY-INTERRUPT-CONTROL STATUS REGISTER -> IDB",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "IDBS",
      encoding: {
        w4: "000000",
        w3: "000640",
        w2: "006000",
        w1: "000000"
      }
    },
    "IDBS,PICM": {
      name: "IDBS,PICM",
      category: "IDBS",
      displayLine: 2,
      description: "INTERRUPT MASK REGISTER. CGA.",
      models: [
        "nd120"
      ],
      nd120Only: true,
      provides: "IDBS",
      encoding: {
        w4: "000000",
        w3: "001700",
        w2: "000040",
        w1: "000000"
      }
    },
    "IDBS,PICVC": {
      name: "IDBS,PICVC",
      category: "IDBS",
      displayLine: 2,
      description: "INTERRUPT VECTOR",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "IDBS",
      encoding: {
        w4: "000000",
        w3: "001440",
        w2: "006000",
        w1: "000000"
      }
    },
    "IDBS,RCS": {
      name: "IDBS,RCS",
      category: "IDBS",
      displayLine: 2,
      description: "READ CONTROL STORE",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "IDBS",
      encoding: {
        w4: "000000",
        w3: "001400",
        w2: "000000",
        w1: "000000"
      }
    },
    "IDBS,REG": {
      name: "IDBS,REG",
      category: "IDBS",
      displayLine: 2,
      description: "REGISTER-FILE -> IDB",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "IDBS",
      requires: "AB",
      encoding: {
        w4: "000000",
        w3: "000240",
        w2: "006000",
        w1: "000000"
      }
    },
    "IDBS,STS": {
      name: "IDBS,STS",
      category: "IDBS",
      displayLine: 2,
      description: "STATUS => IDB",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "IDBS",
      encoding: {
        w4: "000000",
        w3: "000300",
        w2: "000000",
        w1: "000000"
      }
    },
    "IDBS,SWAP": {
      name: "IDBS,SWAP",
      category: "IDBS",
      displayLine: 2,
      description: "BYTE-SWAP OF LAST IDB -> IDB",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "IDBS",
      encoding: {
        w4: "000000",
        w3: "000440",
        w2: "000000",
        w1: "000000"
      }
    },
    "IDBS,UART": {
      name: "IDBS,UART",
      category: "IDBS",
      displayLine: 2,
      description: "READ FROM THE REG. ADDRESSED BY COMM,UART",
      models: [
        "nd120"
      ],
      nd120Only: true,
      provides: "IDBS",
      encoding: {
        w4: "000000",
        w3: "001740",
        w2: "000000",
        w1: "000000"
      }
    },
    LCOUNT: {
      name: "LCOUNT",
      category: "SPECIAL",
      displayLine: 2,
      description: "COUNT LOOP-COUNTER : IF FALSE 'RETURN'&'HOLD'",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000100",
        w1: "000000"
      }
    },
    "MIS,LIN": {
      name: "MIS,LIN",
      category: "MIS",
      displayLine: 1,
      description: "SPECIFIES LINK-END-INPUT SHIFT IF 'ALUM. MIC'",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "006000",
        w2: "000000",
        w1: "000000"
      }
    },
    "MIS,ROT": {
      name: "MIS,ROT",
      category: "MIS",
      displayLine: 1,
      description: "SPECIFIES ROTATIONAL SHIFT IF 'ALUM, MIC'",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "002000",
        w2: "000000",
        w1: "000000"
      }
    },
    "MIS,ZIN": {
      name: "MIS,ZIN",
      category: "MIS",
      displayLine: 1,
      description: "SPECIFIES ZERO-END-INPUT SHIFT IF 'ALUM, MIC'",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000000",
        w3: "004000",
        w2: "000000",
        w1: "000000"
      }
    },
    "PIC,IOF": {
      name: "PIC,IOF",
      category: "PIC",
      displayLine: 1,
      description: "A-OP. IS 15. USED TO GIVE 'IOF' CMD. TO INTSYS",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "PIC",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "150000"
      }
    },
    "PIC,ION": {
      name: "PIC,ION",
      category: "PIC",
      displayLine: 1,
      description: "A-OP. IS 17. USED TO GIVE 'ION' CMD. TO INTSYS",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "PIC",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "170000"
      }
    },
    "PIC,LMSK": {
      name: "PIC,LMSK",
      category: "PIC",
      displayLine: 1,
      description: "A-OP. IS 16. USED TO GIVE 'LOAD MASK' CMD. TO INTSYS",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "PIC",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "160000"
      }
    },
    "PIC,LOSTS": {
      name: "PIC,LOSTS",
      category: "PIC",
      displayLine: 1,
      description: "A-OP. IS 11. USED TO GIVE 'LOAD STATUS' CMD. TO INTSYS",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "PIC",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "110000"
      }
    },
    "PIC,MCL": {
      name: "PIC,MCL",
      category: "PIC",
      displayLine: 1,
      description: "A-OP. IS 0. USED TO GIVE 'MASTER CLEAR' CMD. TO INTSYS",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "PIC",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "PIC,MCLMSK": {
      name: "PIC,MCLMSK",
      category: "PIC",
      displayLine: 1,
      description: "A-OP. IS 12. USED TO GIVE 'MASKED CLEAR MASK' CMD TO INTSYS",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "PIC",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "120000"
      }
    },
    "PIC,MCLPID": {
      name: "PIC,MCLPID",
      category: "PIC",
      displayLine: 1,
      description: "A-OP. IS 2. USED TO GIVE 'MASKED CLEAR PID' CMD. TO INTSYS",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "PIC",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "020000"
      }
    },
    "PIC,MSTMSK": {
      name: "PIC,MSTMSK",
      category: "PIC",
      displayLine: 1,
      description: "A-OP. IS 13. USED TO GIVE 'MASKED SET MASK' CMD. TO INTSYS",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "PIC",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "130000"
      }
    },
    "PIC,RMSK": {
      name: "PIC,RMSK",
      category: "PIC",
      displayLine: 1,
      description: "A-OP. IS 7. USED TO GIVE 'READ MASK' CMD. TO INTSYS",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "PIC",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "070000"
      }
    },
    "PIC,RSTS": {
      name: "PIC,RSTS",
      category: "PIC",
      displayLine: 1,
      description: "A-OP. IS 6. USED TO GIVE 'READ STATUS' CMD. TO INTSYS",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "PIC",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "060000"
      }
    },
    "PIC,RVECT": {
      name: "PIC,RVECT",
      category: "PIC",
      displayLine: 1,
      description: "A-OP. IS 5. USED TO GIVE 'READ-VECTOR' COMMAND TO INTSYS",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "PIC",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "050000"
      }
    },
    "STS,EA": {
      name: "STS,EA",
      category: "STS",
      displayLine: 1,
      description: "CRY -> STS C : OVF -> STS Q : OVF \\/ STS O -> STS O",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000040",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "STS,ES": {
      name: "STS,ES",
      category: "STS",
      displayLine: 1,
      description: "ALU SHIFT OUTPUT -> STATUS M",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000100",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "STS,LO": {
      name: "STS,LO",
      category: "STS",
      displayLine: 1,
      description: "IDB-BITS 0-7 -> STATUS-BITS 0-7",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      encoding: {
        w4: "000140",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "T,HOLD": {
      name: "T,HOLD",
      category: "T_STK",
      displayLine: 2,
      description: "TRUE STACK OPERATION IS HOLD",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "T_STK",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "T,JMP": {
      name: "T,JMP",
      category: "T_SEQ",
      displayLine: 2,
      description: "TRUE SEQUENCE IS JUMP",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "T_SEQ",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    },
    "T,JMP0-3": {
      name: "T,JMP0-3",
      category: "T_SEQ",
      displayLine: 2,
      description: "TRUE SEQ IS JUMP. IR0-3 CONTROLS THE 4 LOWER JUMP ADDR BITS",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "T_SEQ",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "001000",
        w1: "000000"
      }
    },
    "T,JMPAOPR": {
      name: "T,JMPAOPR",
      category: "T_SEQ",
      displayLine: 2,
      description: "TRUE SEQ IS JUMP. A-OP CONTROLS THE 4 LOWER JUMP ADDR BITS",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "T_SEQ",
      encoding: {
        w4: "000000",
        w3: "006000",
        w2: "001000",
        w1: "000000"
      }
    },
    "T,LOAD": {
      name: "T,LOAD",
      category: "T_STK",
      displayLine: 2,
      description: "TRUE STACK OPERATION IS LOAD",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "T_STK",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "020000",
        w1: "000000"
      }
    },
    "T,NEXT": {
      name: "T,NEXT",
      category: "T_SEQ",
      displayLine: 2,
      description: "TRUE SEQUENCE IS NEXT",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "T_SEQ",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "100000",
        w1: "000000"
      }
    },
    "T,POP": {
      name: "T,POP",
      category: "T_STK",
      displayLine: 2,
      description: "TRUE STACK OPERATION IS POP",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "T_STK",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "010000",
        w1: "000000"
      }
    },
    "T,PUSH": {
      name: "T,PUSH",
      category: "T_STK",
      displayLine: 2,
      description: "TRUE STACK OPERATION IS PUSH",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "T_STK",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "030000",
        w1: "000000"
      }
    },
    "T,RETURN": {
      name: "T,RETURN",
      category: "T_SEQ",
      displayLine: 2,
      description: "TRUE SEQUENCE IS RETURN",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "T_SEQ",
      encoding: {
        w4: "000000",
        w3: "000000",
        w2: "040000",
        w1: "000000"
      }
    },
    XRF: {
      name: "XRF",
      category: "SPECIAL",
      displayLine: 1,
      description: "SELECT EXTENDED REGISTER FILE",
      models: [
        "nd110",
        "nd120"
      ],
      nd120Only: false,
      provides: "AB",
      encoding: {
        w4: "000004",
        w3: "000000",
        w2: "000000",
        w1: "000000"
      }
    }
  },
  runtime: {
    alufFormulas: {
      "ALUF,PASSD": "F = D",
      "ALUF,PASSA": "F = A",
      "ALUF,PASSB": "F = B",
      "ALUF,PASSQ": "F = Q",
      "ALUF,ZERO": "F = 0",
      "ALUF,INVD": "F = ~D",
      "ALUF,INVA": "F = ~A",
      "ALUF,INVB": "F = ~B",
      "ALUF,INVQ": "F = ~Q",
      "ALUF,D": "F = D",
      "ALUF,A": "F = A",
      "ALUF,B": "F = B",
      "ALUF,Q": "F = Q",
      "ALUF,D+1": "F = D + 1",
      "ALUF,A+1": "F = A + 1",
      "ALUF,B+1": "F = B + 1",
      "ALUF,Q+1": "F = Q + 1",
      "ALUF,D-1": "F = D - 1",
      "ALUF,A-1": "F = A - 1",
      "ALUF,B-1": "F = B - 1",
      "ALUF,Q-1": "F = Q - 1",
      "ALUF,-D": "F = -D",
      "ALUF,-A": "F = -A",
      "ALUF,-B": "F = -B",
      "ALUF,-Q": "F = -Q",
      "ALUF,-D-1": "F = -D - 1",
      "ALUF,-A-1": "F = -A - 1",
      "ALUF,-B-1": "F = -B - 1",
      "ALUF,-Q-1": "F = -Q - 1",
      "ALUF,D+A": "F = D + A",
      "ALUF,D+Q": "F = D + Q",
      "ALUF,A+B": "F = A + B",
      "ALUF,A+Q": "F = A + Q",
      "ALUF,A+B+1": "F = A + B + 1",
      "ALUF,D+A+1": "F = D + A + 1",
      "ALUF,D+Q+1": "F = D + Q + 1",
      "ALUF,A+Q+1": "F = A + Q + 1",
      "ALUF,Q-A": "F = Q - A",
      "ALUF,B-A": "F = B - A",
      "ALUF,A-D": "F = A - D",
      "ALUF,Q-D": "F = Q - D",
      "ALUF,A-Q": "F = A - Q",
      "ALUF,A-B": "F = A - B",
      "ALUF,D-A": "F = D - A",
      "ALUF,D-Q": "F = D - Q",
      "ALUF,Q-A-1": "F = Q - A - 1",
      "ALUF,B-A-1": "F = B - A - 1",
      "ALUF,A-D-1": "F = A - D - 1",
      "ALUF,Q-D-1": "F = Q - D - 1",
      "ALUF,A-Q-1": "F = A - Q - 1",
      "ALUF,A-B-1": "F = A - B - 1",
      "ALUF,D-A-1": "F = D - A - 1",
      "ALUF,D-Q-1": "F = D - Q - 1",
      "ALUF,ANDAQ": "F = A & Q",
      "ALUF,ANDAB": "F = A & B",
      "ALUF,ANDDA": "F = D & A",
      "ALUF,ANDDQ": "F = D & Q",
      "ALUF,ORAQ": "F = A | Q",
      "ALUF,ORAB": "F = A | B",
      "ALUF,ORDA": "F = D | A",
      "ALUF,ORDQ": "F = D | Q",
      "ALUF,XORAQ": "F = A ^ Q",
      "ALUF,XORAB": "F = A ^ B",
      "ALUF,XORDA": "F = D ^ A",
      "ALUF,XORDQ": "F = D ^ Q",
      "ALUF,XNORAQ": "F = ~(A ^ Q)",
      "ALUF,XNORAB": "F = ~(A ^ B)",
      "ALUF,XNORDA": "F = ~(D ^ A)",
      "ALUF,XNORDQ": "F = ~(D ^ Q)",
      "ALUF,MASKAQ": "F = ~A & Q",
      "ALUF,MASKAB": "F = ~A & B",
      "ALUF,MASKDA": "F = ~D & A",
      "ALUF,MASKDQ": "F = ~D & Q"
    },
    idbsSources: {
      "IDBS,ALU": "ALU Y output (feeds F or A-register depending on ALUD)",
      "IDBS,BMG": "Bit-mask generator: 1 << A_Operand (single-bit test/set mask)",
      "IDBS,GPR": "General-Purpose shift register",
      "IDBS,DBR": "Data Bus Register (latched from last memory read)",
      "IDBS,ARG": "Microinstruction bits 15:0 (the literal from source)",
      "IDBS,REG": "Register file[AOP, BOP] (selected by RASEL/RBSEL overrides)",
      "IDBS,STS": "STATUS register (PIL + ALU flags)",
      "IDBS,BARG": "B-operand field (BOP, small 4-5 bit immediate)",
      "IDBS,SWAP": "Byte-swapped copy of previous cycle's IDB",
      "IDBS,PEA": "Parity Error Address",
      "IDBS,PES": "Parity Error Status",
      "IDBS,AARG": "A-operand field * 8 (AOP << 3)",
      "IDBS,PIC": "PIC internal status (requires EPIC command)",
      "IDBS,IOR": "UART data and status",
      "IDBS,DSABL": "Disable - IDB not driven by IDBS (PIC may override)",
      "IDBS,MIPANS": "Panel status (read without clearing)",
      "IDBS,MAPANS": "Panel status (read and clear bit 12)",
      "IDBS,GPR,SEXT": "GPR sign-extended from bit 7",
      "IDBS,PGS": "Paging status (virtual address + fetch indicator)",
      "IDBS,CSR": "Cache Status Register",
      "IDBS,PCR": "Paging Control Register (selected by PIL)",
      "IDBS,ALD": "Auto-Load Descriptor (thumbwheel / boot switches)",
      "IDBS,PANEL": "Panel interrupt vector",
      "IDBS,RCS": "Read Control Store (microcode RAM)",
      "IDBS,PICVC": "PIC vectored interrupt address",
      "IDBS,LBR": "Logical Bank Register",
      "IDBS,LA": "Logical Address (jump target)",
      "IDBS,INR": "Installation Number (unique system ID)",
      "IDBS,PICM": "PIC mask register (ND-120)",
      "IDBS,UART": "UART data (ND-120)"
    },
    commEffects: {
      "COMM,LDPIL": {
        reads: "IDB",
        writes: "STATUS[15:8] <- IDB[15:8]",
        uses_a: false,
        uses_b: false
      },
      "COMM,LDGPR": {
        reads: "IDB",
        writes: "GPR register",
        uses_a: false,
        uses_b: false
      },
      "COMM,EWRF": {
        reads: "IDB",
        writes: "RegisterFile[AOP, BOP] <- IDB",
        uses_a: true,
        uses_b: true,
        notes: "The register file written is selected by RASEL_RegisterFile\n(RF, RF1, RF2, RF3). This is the primary way to update\nregister-file slots with the IDB value.\n"
      },
      "COMM,LDLC": {
        reads: "IDB[5:0]",
        writes: "Loop Counter",
        uses_a: false,
        uses_b: false,
        timing_note: "LC is not available as A-operand source until two microinstructions\nlater (pipelined through the MIC sequencer).\n"
      },
      "COMM,LDPCR": {
        reads: "IDB",
        writes: "PCR (Paging Control Register, indexed by PIL)",
        uses_a: false
      },
      "COMM,LDSEG": {
        reads: "IDB",
        writes: "Segment Register"
      },
      "COMM,LDDOMI": {
        reads: "IDB",
        writes: "SINTRAN-IV Domain Register"
      },
      "COMM,LDPS": {
        reads: "IDB",
        writes: "SINTRAN-IV PS Register"
      },
      "COMM,LDIRV": {
        reads: "IDB",
        writes: "IR (for OR-logic use)"
      },
      "COMM,LDEXM": {
        reads: "IDB",
        writes: "Examine Mode"
      },
      "COMM,LDPANC": {
        reads: "IDB[7:0]",
        writes: "Panel IR0 (one byte)"
      },
      "COMM,SMPID": {
        reads: "IDB",
        writes: "PIC micro-PID (set bits only)"
      },
      "COMM,SIOC": {
        reads: "IDB[7:0]",
        writes: "I/O Control (RTC, ints)"
      },
      "COMM,WCIHM": {
        reads: "IDB",
        writes: "Cache Inhibit Map"
      },
      "COMM,EPIC": {
        uses_a: true,
        notes: "A-operand is the PIC command code. Data direction depends on command."
      },
      "COMM,CLIRQ": {
        writes: "Clear INTRQN flip-flop"
      },
      "COMM,START": {
        writes: "Clear STOP flip-flop"
      },
      "COMM,SSTOP": {
        writes: "Set STOP flip-flop"
      },
      "COMM,CLRTC": {
        writes: "Clear 20ms RTC interrupt"
      },
      "COMM,CLFF": {
        writes: "Clear DZD/OOD flip-flops"
      }
    },
    aludBehavior: {
      "0": {
        name: "QREG",
        y_bus: "F",
        q_update: "Q := F",
        b_register_write: null,
        shift: "none"
      },
      "1": {
        name: "NOP",
        y_bus: "F",
        q_update: null,
        b_register_write: null,
        shift: "none",
        note: "ALU result travels on the Y bus (consumed by IDB source 0) but is not stored."
      },
      "2": {
        name: "RAMA",
        y_bus: "Reg[AOP]",
        q_update: null,
        b_register_write: "Reg[BOP] := F",
        shift: "none"
      },
      "3": {
        name: "RAMF",
        y_bus: "F",
        q_update: null,
        b_register_write: "Reg[BOP] := F",
        shift: "none",
        note: "Standard result write. The B register selected by B,<name> gets F.\nThis is the most common ALU destination.\n"
      },
      "4": {
        name: "RAMQD",
        y_bus: "F",
        q_update: "Q := Q >> 1 (Q[15] <- QLI)",
        b_register_write: "Reg[BOP] := F >> 1 (F[15] <- RRI)",
        shift: "right_double",
        note: "Double right-shift for multiply/divide sequences."
      },
      "5": {
        name: "RAMD",
        y_bus: "F",
        q_update: null,
        b_register_write: "Reg[BOP] := F >> 1 (F[15] <- RRI)",
        shift: "right_single"
      },
      "6": {
        name: "RAMQU",
        y_bus: "F",
        q_update: "Q := Q << 1 (Q[0] <- QLI)",
        b_register_write: "Reg[BOP] := F << 1 (F[0] <- RLI)",
        shift: "left_double"
      },
      "7": {
        name: "RAMU",
        y_bus: "F",
        q_update: null,
        b_register_write: "Reg[BOP] := F << 1 (F[0] <- RLI)",
        shift: "left_single"
      }
    },
    aluSources: {
      "0": {
        name: "A_Q",
        R: "A register",
        S: "Q (internal)",
        am2901: "AQ"
      },
      "1": {
        name: "A_B",
        R: "A register",
        S: "B register",
        am2901: "AB"
      },
      "2": {
        name: "O_Q",
        R: "0 (constant)",
        S: "Q (internal)",
        am2901: "ZQ"
      },
      "3": {
        name: "O_B",
        R: "0 (constant)",
        S: "B register",
        am2901: "ZB"
      },
      "4": {
        name: "O_A",
        R: "0 (constant)",
        S: "A register",
        am2901: "ZA"
      },
      "5": {
        name: "D_A",
        R: "D (IDB latched)",
        S: "A register",
        am2901: "DA"
      },
      "6": {
        name: "D_Q",
        R: "D (IDB latched)",
        S: "Q (internal)",
        am2901: "DQ"
      },
      "7": {
        name: "D_O",
        R: "D (IDB latched)",
        S: "0 (constant)",
        am2901: "DZ"
      }
    }
  }
};

// src/hoverProvider.ts
var data = token_hover_default;
var TOKEN_CHAR_RE = /[A-Z0-9,+\-*=_]/;
var NUMERIC_RE = /^[0-9]+$/;
function wordRangeAtPosition(document, position) {
  const line = document.lineAt(position.line).text;
  let start = position.character;
  let end = position.character;
  while (start > 0 && TOKEN_CHAR_RE.test(line[start - 1])) start--;
  while (end < line.length && TOKEN_CHAR_RE.test(line[end])) end++;
  if (start === end) return void 0;
  return new vscode.Range(
    new vscode.Position(position.line, start),
    new vscode.Position(position.line, end)
  );
}
function extractInstructionTokens(document, cursor) {
  const raw = document.getText();
  const fullText = raw.replace(/%[^\r\n]*/g, (m) => " ".repeat(m.length));
  const cursorOffset = document.offsetAt(cursor);
  let start = 0;
  for (let i = cursorOffset - 1; i >= 0; i--) {
    if (fullText[i] === ";") {
      start = i + 1;
      break;
    }
  }
  let end = fullText.length;
  for (let i = cursorOffset; i < fullText.length; i++) {
    if (fullText[i] === ";") {
      end = i;
      break;
    }
  }
  let instrText = fullText.slice(start, end);
  instrText = instrText.replace(/[A-Z_][A-Z0-9_]*:/gi, " ");
  instrText = instrText.replace(/(^|\r?\n)\s*[0-7]+\//g, "$1");
  instrText = instrText.replace(/ ,/g, ",").replace(/, /g, ",");
  return instrText.split(/\s+/).filter((s) => s.length > 0);
}
function parseNumeric(s) {
  if (!s) return void 0;
  if (s[0] === "d" || s[0] === "D") return Number.parseInt(s.slice(1), 10);
  if (s.startsWith("0x") || s.startsWith("0X")) return Number.parseInt(s.slice(2), 16);
  if (s[0] === "$") return Number.parseInt(s.slice(1), 16);
  if (s[0] === "o" || s[0] === "O") return Number.parseInt(s.slice(1), 8);
  if (/^[0-7]+$/.test(s)) return Number.parseInt(s, 8);
  return void 0;
}
var IDBS_ROLE_FALLBACK = {
  "IDBS,ALU": "ALU output \u2192 IDB",
  "IDBS,ARG": "microinstruction argument (bits 15:0) \u2192 IDB",
  "IDBS,BARG": "B-operand argument (bits 16-19, value 0-17) \u2192 IDB",
  "IDBS,AARG": "A-operand argument \xD78 (value 0-170) \u2192 IDB",
  "IDBS,BMG": "Bit-mask generator \u2192 IDB",
  "IDBS,GPR": "General-purpose register \u2192 IDB",
  "IDBS,DBR": "Data bus register \u2192 IDB",
  "IDBS,REG": "Register file[A-OP, B-OP] \u2192 IDB",
  "IDBS,STS": "STATUS register \u2192 IDB",
  "IDBS,SWAP": "Byte-swap of previous IDB \u2192 IDB",
  "IDBS,PEA": "PEA register \u2192 IDB",
  "IDBS,PES": "PES register \u2192 IDB",
  "IDBS,PIC": "PIC status register \u2192 IDB",
  "IDBS,IOR": "UART data/status \u2192 IDB",
  "IDBS,PGS": "Paging status \u2192 IDB",
  "IDBS,CSR": "Cache status register \u2192 IDB",
  "IDBS,PCR": "Paging control register \u2192 IDB",
  "IDBS,ALD": "Auto-load descriptor \u2192 IDB",
  "IDBS,PANEL": "Panel interrupt vector \u2192 IDB",
  "IDBS,PICVC": "PIC interrupt vector \u2192 IDB",
  "IDBS,LBR": "Logical bank register \u2192 IDB",
  "IDBS,LA": "Logical address (jump) \u2192 IDB",
  "IDBS,INR": "Installation number \u2192 IDB",
  "IDBS,UART": "UART register \u2192 IDB",
  "IDBS,PICM": "PIC mask register \u2192 IDB"
};
var ALUF_DESC_FALLBACK = {
  "ALUF,PASSD": "F = D (pass IDB through)",
  "ALUF,PASSA": "F = A",
  "ALUF,PASSB": "F = B",
  "ALUF,PASSQ": "F = Q",
  "ALUF,ZERO": "F = 0",
  "ALUF,INVD": "F = ~D",
  "ALUF,INVA": "F = ~A",
  "ALUF,INVB": "F = ~B",
  "ALUF,INVQ": "F = ~Q",
  "ALUF,D": "F = D",
  "ALUF,A": "F = A",
  "ALUF,B": "F = B",
  "ALUF,Q": "F = Q",
  "ALUF,D+1": "F = D + 1",
  "ALUF,A+1": "F = A + 1",
  "ALUF,B+1": "F = B + 1",
  "ALUF,Q+1": "F = Q + 1",
  "ALUF,D-1": "F = D - 1",
  "ALUF,A-1": "F = A - 1",
  "ALUF,B-1": "F = B - 1",
  "ALUF,Q-1": "F = Q - 1",
  "ALUF,D+A": "F = D + A",
  "ALUF,D+Q": "F = D + Q",
  "ALUF,A+B": "F = A + B",
  "ALUF,A+Q": "F = A + Q",
  "ALUF,A+B+1": "F = A + B + 1",
  "ALUF,D+A+1": "F = D + A + 1",
  "ALUF,D+Q+1": "F = D + Q + 1",
  "ALUF,A+Q+1": "F = A + Q + 1",
  "ALUF,ANDDA": "F = D & A",
  "ALUF,ANDDQ": "F = D & Q",
  "ALUF,ANDAB": "F = A & B",
  "ALUF,ANDAQ": "F = A & Q",
  "ALUF,ORDA": "F = D | A",
  "ALUF,ORDQ": "F = D | Q",
  "ALUF,ORAB": "F = A | B",
  "ALUF,ORAQ": "F = A | Q",
  "ALUF,XORDA": "F = D ^ A",
  "ALUF,XORDQ": "F = D ^ Q",
  "ALUF,XORAB": "F = A ^ B",
  "ALUF,XORAQ": "F = A ^ Q"
};
var ALUD_DEST_FALLBACK = {
  "ALUD,Q": "F \u2192 Q register (internal) & F \u2192 Y bus",
  "ALUD,NONE": "F \u2192 Y bus only (no register write)",
  "ALUD,B": "F \u2192 B register & F \u2192 Y bus",
  "ALUD,B,YA": "F \u2192 B register, A-register value \u2192 Y bus",
  "ALUD,SRD": "F \u2192 Y bus, (F, Q) shifted right /2 \u2192 (B, Q)",
  "ALUD,SRB": "F \u2192 Y bus, F/2 \u2192 B register",
  "ALUD,SLD": "F \u2192 Y bus, (F, Q) \xD7 2 \u2192 (B, Q)",
  "ALUD,SLB": "F \u2192 Y bus, F \xD7 2 \u2192 B register"
};
var COMM_CONSUMES_IDB_FALLBACK = {
  "COMM,LDPIL": "Load PIL (IDB[8:15] \u2192 STATUS[8:15])",
  "COMM,LDGPR": "Load GPR (IDB \u2192 General Purpose Register)",
  "COMM,LDLC": "Load Loop Counter (IDB[0:5] \u2192 LC)",
  "COMM,LDPCR": "Load Paging Control Register (selected by PIL) \u2190 IDB",
  "COMM,LDSEG": "Load Segment Register \u2190 IDB",
  "COMM,LDDOMI": "Load SINTRAN-IV Domain Register \u2190 IDB",
  "COMM,LDPS": "Load SINTRAN-IV PS Register \u2190 IDB",
  "COMM,LDIRV": "Load Instruction Register (OR-logic) \u2190 IDB",
  "COMM,LDEXM": "Load Examine Mode \u2190 IDB",
  "COMM,LDPANC": "Send one byte to IR0 (panel character)",
  "COMM,EWRF": "Register File[A-OP, B-OP] \u2190 IDB",
  "COMM,SMPID": "Set Micro-PID from IDB (bits where IDB=1 forced to 1)",
  "COMM,SIOC": "I/O Control Register \u2190 IDB",
  "COMM,WCIHM": "Write Cache Inhibit Map \u2190 IDB"
};
function regName(t) {
  const comma = t.indexOf(",");
  return comma >= 0 ? t.slice(comma + 1) : t;
}
var runtime = data.runtime;
function idbsRole(name) {
  return runtime?.idbsSources?.[name] ?? IDBS_ROLE_FALLBACK[name];
}
function alufFormula(name) {
  return runtime?.alufFormulas?.[name] ?? ALUF_DESC_FALLBACK[name];
}
function aludDescText(name) {
  const entry = runtime?.aludBehavior?.[name];
  if (entry) {
    const parts = [];
    if (entry.b_register_write) parts.push(entry.b_register_write);
    else if (entry.q_update) parts.push(entry.q_update);
    else if (entry.y_bus) parts.push(`Y = ${entry.y_bus}`);
    if (entry.note) parts.push(entry.note);
    return parts.join("; ");
  }
  return ALUD_DEST_FALLBACK[name];
}
function commConsumesIdb(name) {
  const entry = runtime?.commEffects?.[name];
  if (entry) {
    if (entry.reads === "IDB" || entry.reads?.startsWith("IDB")) {
      return entry.writes ?? COMM_CONSUMES_IDB_FALLBACK[name];
    }
  }
  return COMM_CONSUMES_IDB_FALLBACK[name];
}
function interpretNumeric(value, siblingTokens) {
  const toks = new Set(siblingTokens);
  const idbsToken = siblingTokens.find((t) => t.startsWith("IDBS,"));
  const alufToken = siblingTokens.find((t) => t.startsWith("ALUF,"));
  const aludToken = siblingTokens.find((t) => t.startsWith("ALUD,"));
  const aRegToken = siblingTokens.find(
    (t) => /^A,/.test(t) && !t.startsWith("ALU")
  );
  const bRegToken = siblingTokens.find(
    (t) => /^B,/.test(t) && !t.startsWith("ALU")
  );
  const abRegToken = siblingTokens.find((t) => t.startsWith("AB,"));
  const commToken = siblingTokens.find((t) => t.startsWith("COMM,"));
  const condToken = siblingTokens.find((t) => t.startsWith("COND,"));
  const hasScond = condToken !== void 0;
  const isJumpContext = toks.has("T,JMP") || toks.has("T,JMP0-3") || toks.has("T,JMPAOPR");
  const oct = "0o" + value.toString(8);
  const dec = value.toString(10);
  const hex = "0x" + value.toString(16).toUpperCase();
  const out = [];
  out.push(`**Value:** \`${oct}\` (${dec} decimal, ${hex})`);
  if (hasScond) {
    const lcc = value >> 8 & 15;
    const tsel = value >> 4 & 15;
    const fSeq = value >> 2 & 3;
    const fStk = value & 3;
    out.push("\n**Used as:** condition fields (SCOND=1 reinterprets bits 11:0)");
    out.push("");
    out.push("| LCC[11:8] | TSEL[7:4] | F_SEQ[3:2] | F_STK[1:0] |");
    out.push("|:--:|:--:|:--:|:--:|");
    out.push(`| ${lcc} | ${tsel} | ${fSeq} | ${fStk} |`);
    return out.join("\n");
  }
  if (isJumpContext && value <= 8191) {
    out.push("\n**Used as:** 13-bit branch target");
    out.push("");
    if (value >= 4096) {
      out.push(`- bit 20 (address extension) = **1**`);
      out.push(`- bits 11:0 = \`0o${(value & 4095).toString(8)}\``);
      out.push(`- effective branch address = \`0o${value.toString(8)}\``);
    } else {
      out.push(`- bit 20 = 0, bits 11:0 = \`0o${value.toString(8)}\``);
      out.push(`- branch target = \`0o${value.toString(8)}\``);
    }
    return out.join("\n");
  }
  const commConsumesText = commToken ? commConsumesIdb(commToken) : void 0;
  if (commToken && commConsumesText) {
    out.push("\n**Data flow:**");
    out.push("");
    out.push(`1. \`${oct}\` \u2192 IDB via \`${idbsToken ?? "IDBS,ARG"}\``);
    out.push(`2. \`${commToken}\` consumes IDB: ${commConsumesText}`);
    return out.join("\n");
  }
  if (idbsToken) {
    const idbsDesc = idbsRole(idbsToken) ?? idbsToken;
    const numericReachesIdb = idbsToken === "IDBS,ARG" || idbsToken === "IDBS,BARG" || idbsToken === "IDBS,AARG";
    out.push("\n**Data flow:**");
    out.push("");
    if (numericReachesIdb) {
      out.push(`1. \`${oct}\` \u2192 IDB via \`${idbsToken}\` *(${idbsDesc})*`);
    } else {
      out.push(`1. \`${idbsToken}\` is active \u2192 IDB source is **${idbsDesc}**`);
      out.push(`   *(this numeric still ORs into bits 15:0 of the word but is not the IDB producer)*`);
    }
    if (alufToken) {
      const formula = alufFormula(alufToken) ?? alufToken;
      const aluUsesD = /\bD\b/.test(formula);
      if (aluUsesD && numericReachesIdb) {
        const resolved = formula.replace(/\bD\b/g, oct);
        out.push(`2. ALU: \`${alufToken}\` computes **${resolved}**`);
      } else {
        out.push(`2. ALU: \`${alufToken}\` (${formula})`);
      }
    }
    if (aludToken) {
      const destDesc = aludDescText(aludToken) ?? aludToken;
      if (aludToken === "ALUD,B" && bRegToken) {
        const reg = regName(bRegToken);
        out.push(`3. \`${aludToken}\` writes F to B register (dual-role: \`${bRegToken}\` selects **${reg}** as both ALU input and write destination)`);
        out.push("");
        if (alufToken === "ALUF,PASSD" && idbsToken === "IDBS,ARG") {
          out.push(`**Result:** \`${reg}\` register = \`${oct}\``);
        } else {
          out.push(`**Result:** \`${reg}\` register = F`);
        }
        return out.join("\n");
      }
      if (aludToken === "ALUD,Q") {
        out.push(`3. \`${aludToken}\` writes F to **Q register** (internal)`);
        out.push("");
        if (alufToken === "ALUF,PASSD" && idbsToken === "IDBS,ARG") {
          out.push(`**Result:** Q register = \`${oct}\``);
        }
        return out.join("\n");
      }
      out.push(`3. Destination: \`${aludToken}\` - ${destDesc}`);
    }
    if (commToken) {
      out.push(`4. Also: \`${commToken}\``);
    }
    return out.join("\n");
  }
  const fallbackCommText = commToken ? commConsumesIdb(commToken) : void 0;
  if (commToken && fallbackCommText) {
    out.push(`
**Used as:** ${fallbackCommText}`);
    return out.join("\n");
  }
  out.push("\n**Used as:** 16-bit literal (OR'd into bits 15:0)");
  out.push("");
  out.push("*No `IDBS,*` in this instruction - the value contributes to the word bits but is not routed onto the IDB this cycle.*");
  void aRegToken;
  void abRegToken;
  return out.join("\n");
}
function formatTokenHover(entry) {
  const config = vscode.workspace.getConfiguration("nd-microcode");
  const showEncoding = config.get("hover.showEncoding", true);
  const showModelWarnings = config.get(
    "hover.showModelWarnings",
    true
  );
  const md = new vscode.MarkdownString();
  md.isTrusted = false;
  md.supportHtml = false;
  let badge = "";
  if (entry.nd120Only && showModelWarnings) {
    badge = " &nbsp; `[ND-120 only]`";
  } else if (entry.models.length > 1) {
    badge = " &nbsp; `[ND-110 + ND-120]`";
  } else {
    badge = ` &nbsp; \`[${entry.models.join(", ").toUpperCase()}]\``;
  }
  md.appendMarkdown(`**\`${entry.name}\`**${badge}

`);
  if (entry.description) {
    md.appendMarkdown(`${entry.description}

`);
  }
  const lineNames = {
    1: "Line 1 (registers / ALU)",
    2: "Line 2 (bus / command / T-seq)",
    3: "Line 3 (branch / condition)"
  };
  md.appendMarkdown(
    `*Category: \`${entry.category}\`* &nbsp;&middot;&nbsp; *${lineNames[entry.displayLine] ?? "Line ?"}*

`
  );
  if (entry.provides || entry.requires) {
    const parts = [];
    if (entry.provides) parts.push(`provides ${entry.provides}`);
    if (entry.requires) parts.push(`requires ${entry.requires}`);
    md.appendMarkdown(`*${parts.join(", ")}*

`);
  }
  if (showEncoding) {
    const { w4, w3, w2, w1 } = entry.encoding;
    md.appendMarkdown(
      `| w4 (63:48) | w3 (47:32) | w2 (31:16) | w1 (15:0) |
|:--:|:--:|:--:|:--:|
| \`${w4}\` | \`${w3}\` | \`${w2}\` | \`${w1}\` |
`
    );
  }
  return md;
}
function formatNumericHover(word, value, siblingTokens) {
  const md = new vscode.MarkdownString();
  md.isTrusted = false;
  md.supportHtml = false;
  md.appendMarkdown(`**\`${word}\`** &nbsp; *numeric literal*

`);
  md.appendMarkdown(interpretNumeric(value, siblingTokens));
  return md;
}
function registerHoverProvider() {
  return vscode.languages.registerHoverProvider(
    { language: "uc" },
    {
      provideHover(document, position) {
        const range = wordRangeAtPosition(document, position);
        if (!range) return void 0;
        const word = document.getText(range);
        const entry = data.tokens[word];
        if (entry) {
          return new vscode.Hover(formatTokenHover(entry), range);
        }
        if (NUMERIC_RE.test(word)) {
          const value = parseNumeric(word);
          if (value === void 0 || !Number.isFinite(value)) return void 0;
          const siblings = extractInstructionTokens(document, position);
          return new vscode.Hover(
            formatNumericHover(word, value, siblings),
            range
          );
        }
        return void 0;
      }
    }
  );
}

// src/commands.ts
var vscode2 = __toESM(require("vscode"));
var import_node_fs = require("node:fs");
var path = __toESM(require("node:path"));

// ../lib/ts/dist/bitfield.js
function extractField(v, hi, lo) {
  const width = BigInt(hi - lo + 1);
  const mask = (1n << width) - 1n;
  return Number(v >> BigInt(lo) & mask);
}
function decodeFields(raw, address) {
  const csbit11_0 = extractField(raw, 11, 0);
  const csbit20 = extractField(raw, 20, 20);
  return {
    raw,
    address,
    aluI: extractField(raw, 63, 55),
    aluSts: extractField(raw, 54, 53),
    rasel: extractField(raw, 52, 51),
    xrf: extractField(raw, 50, 50),
    rbsel: extractField(raw, 49, 48),
    cin: extractField(raw, 47, 46),
    alum: extractField(raw, 45, 44),
    mis: extractField(raw, 43, 42),
    idbs: extractField(raw, 41, 37),
    comm: extractField(raw, 36, 32),
    tSeq: extractField(raw, 31, 30),
    tStk: extractField(raw, 29, 28),
    csdelay27_26: extractField(raw, 27, 26),
    vect: extractField(raw, 25, 25),
    scond: extractField(raw, 24, 24),
    condEnabl: extractField(raw, 23, 23),
    loop: extractField(raw, 22, 22),
    csdelay21: extractField(raw, 21, 21),
    csbit20,
    bop: extractField(raw, 19, 16),
    aop: extractField(raw, 15, 12),
    csbit11_0,
    lcc: extractField(raw, 11, 8),
    tsel: extractField(raw, 7, 4),
    fSeq: extractField(raw, 3, 2),
    fStk: extractField(raw, 1, 0),
    branchAddress: csbit20 << 12 | csbit11_0
  };
}
var ND110_XOR_MASK = 0x0fc00000n;
function parseCodeBytes(bytes, options = {}) {
  const result = /* @__PURE__ */ new Map();
  const flip = options.nd110XorFlip ?? false;
  for (let i = 0; i + 9 < bytes.length; i += 10) {
    const addr = bytes[i] | bytes[i + 1] << 8;
    let value = 0n;
    for (let j = 0; j < 8; j++) {
      value |= BigInt(bytes[i + 2 + j]) << BigInt(j * 8);
    }
    if (flip)
      value ^= ND110_XOR_MASK;
    result.set(addr, value);
  }
  return result;
}
function parseSymbolsText(text) {
  const map2 = /* @__PURE__ */ new Map();
  const lineRegex = /^([0-7]+)\s*=\s*(\S+)\s*$/;
  for (const line of text.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("%") || trimmed.startsWith("#"))
      continue;
    const m = lineRegex.exec(trimmed);
    if (m) {
      const addr = parseInt(m[1], 8);
      map2.set(addr, m[2]);
    }
  }
  return map2;
}
function toOctal(n, width = 0) {
  const s = n.toString(8);
  return width > 0 ? s.padStart(width, "0") : s;
}

// ../lib/ts/node_modules/js-yaml/dist/js-yaml.mjs
function isNothing(subject) {
  return typeof subject === "undefined" || subject === null;
}
function isObject(subject) {
  return typeof subject === "object" && subject !== null;
}
function toArray(sequence) {
  if (Array.isArray(sequence)) return sequence;
  else if (isNothing(sequence)) return [];
  return [sequence];
}
function extend(target, source) {
  var index, length, key, sourceKeys;
  if (source) {
    sourceKeys = Object.keys(source);
    for (index = 0, length = sourceKeys.length; index < length; index += 1) {
      key = sourceKeys[index];
      target[key] = source[key];
    }
  }
  return target;
}
function repeat(string, count) {
  var result = "", cycle;
  for (cycle = 0; cycle < count; cycle += 1) {
    result += string;
  }
  return result;
}
function isNegativeZero(number) {
  return number === 0 && Number.NEGATIVE_INFINITY === 1 / number;
}
var isNothing_1 = isNothing;
var isObject_1 = isObject;
var toArray_1 = toArray;
var repeat_1 = repeat;
var isNegativeZero_1 = isNegativeZero;
var extend_1 = extend;
var common = {
  isNothing: isNothing_1,
  isObject: isObject_1,
  toArray: toArray_1,
  repeat: repeat_1,
  isNegativeZero: isNegativeZero_1,
  extend: extend_1
};
function formatError(exception2, compact) {
  var where = "", message = exception2.reason || "(unknown reason)";
  if (!exception2.mark) return message;
  if (exception2.mark.name) {
    where += 'in "' + exception2.mark.name + '" ';
  }
  where += "(" + (exception2.mark.line + 1) + ":" + (exception2.mark.column + 1) + ")";
  if (!compact && exception2.mark.snippet) {
    where += "\n\n" + exception2.mark.snippet;
  }
  return message + " " + where;
}
function YAMLException$1(reason, mark) {
  Error.call(this);
  this.name = "YAMLException";
  this.reason = reason;
  this.mark = mark;
  this.message = formatError(this, false);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack || "";
  }
}
YAMLException$1.prototype = Object.create(Error.prototype);
YAMLException$1.prototype.constructor = YAMLException$1;
YAMLException$1.prototype.toString = function toString(compact) {
  return this.name + ": " + formatError(this, compact);
};
var exception = YAMLException$1;
function getLine(buffer, lineStart, lineEnd, position, maxLineLength) {
  var head = "";
  var tail = "";
  var maxHalfLength = Math.floor(maxLineLength / 2) - 1;
  if (position - lineStart > maxHalfLength) {
    head = " ... ";
    lineStart = position - maxHalfLength + head.length;
  }
  if (lineEnd - position > maxHalfLength) {
    tail = " ...";
    lineEnd = position + maxHalfLength - tail.length;
  }
  return {
    str: head + buffer.slice(lineStart, lineEnd).replace(/\t/g, "\u2192") + tail,
    pos: position - lineStart + head.length
    // relative position
  };
}
function padStart(string, max) {
  return common.repeat(" ", max - string.length) + string;
}
function makeSnippet(mark, options) {
  options = Object.create(options || null);
  if (!mark.buffer) return null;
  if (!options.maxLength) options.maxLength = 79;
  if (typeof options.indent !== "number") options.indent = 1;
  if (typeof options.linesBefore !== "number") options.linesBefore = 3;
  if (typeof options.linesAfter !== "number") options.linesAfter = 2;
  var re = /\r?\n|\r|\0/g;
  var lineStarts = [0];
  var lineEnds = [];
  var match;
  var foundLineNo = -1;
  while (match = re.exec(mark.buffer)) {
    lineEnds.push(match.index);
    lineStarts.push(match.index + match[0].length);
    if (mark.position <= match.index && foundLineNo < 0) {
      foundLineNo = lineStarts.length - 2;
    }
  }
  if (foundLineNo < 0) foundLineNo = lineStarts.length - 1;
  var result = "", i, line;
  var lineNoLength = Math.min(mark.line + options.linesAfter, lineEnds.length).toString().length;
  var maxLineLength = options.maxLength - (options.indent + lineNoLength + 3);
  for (i = 1; i <= options.linesBefore; i++) {
    if (foundLineNo - i < 0) break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo - i],
      lineEnds[foundLineNo - i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo - i]),
      maxLineLength
    );
    result = common.repeat(" ", options.indent) + padStart((mark.line - i + 1).toString(), lineNoLength) + " | " + line.str + "\n" + result;
  }
  line = getLine(mark.buffer, lineStarts[foundLineNo], lineEnds[foundLineNo], mark.position, maxLineLength);
  result += common.repeat(" ", options.indent) + padStart((mark.line + 1).toString(), lineNoLength) + " | " + line.str + "\n";
  result += common.repeat("-", options.indent + lineNoLength + 3 + line.pos) + "^\n";
  for (i = 1; i <= options.linesAfter; i++) {
    if (foundLineNo + i >= lineEnds.length) break;
    line = getLine(
      mark.buffer,
      lineStarts[foundLineNo + i],
      lineEnds[foundLineNo + i],
      mark.position - (lineStarts[foundLineNo] - lineStarts[foundLineNo + i]),
      maxLineLength
    );
    result += common.repeat(" ", options.indent) + padStart((mark.line + i + 1).toString(), lineNoLength) + " | " + line.str + "\n";
  }
  return result.replace(/\n$/, "");
}
var snippet = makeSnippet;
var TYPE_CONSTRUCTOR_OPTIONS = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
];
var YAML_NODE_KINDS = [
  "scalar",
  "sequence",
  "mapping"
];
function compileStyleAliases(map2) {
  var result = {};
  if (map2 !== null) {
    Object.keys(map2).forEach(function(style) {
      map2[style].forEach(function(alias) {
        result[String(alias)] = style;
      });
    });
  }
  return result;
}
function Type$1(tag, options) {
  options = options || {};
  Object.keys(options).forEach(function(name) {
    if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
      throw new exception('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
    }
  });
  this.options = options;
  this.tag = tag;
  this.kind = options["kind"] || null;
  this.resolve = options["resolve"] || function() {
    return true;
  };
  this.construct = options["construct"] || function(data2) {
    return data2;
  };
  this.instanceOf = options["instanceOf"] || null;
  this.predicate = options["predicate"] || null;
  this.represent = options["represent"] || null;
  this.representName = options["representName"] || null;
  this.defaultStyle = options["defaultStyle"] || null;
  this.multi = options["multi"] || false;
  this.styleAliases = compileStyleAliases(options["styleAliases"] || null);
  if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
    throw new exception('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
  }
}
var type = Type$1;
function compileList(schema2, name) {
  var result = [];
  schema2[name].forEach(function(currentType) {
    var newIndex = result.length;
    result.forEach(function(previousType, previousIndex) {
      if (previousType.tag === currentType.tag && previousType.kind === currentType.kind && previousType.multi === currentType.multi) {
        newIndex = previousIndex;
      }
    });
    result[newIndex] = currentType;
  });
  return result;
}
function compileMap() {
  var result = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, index, length;
  function collectType(type2) {
    if (type2.multi) {
      result.multi[type2.kind].push(type2);
      result.multi["fallback"].push(type2);
    } else {
      result[type2.kind][type2.tag] = result["fallback"][type2.tag] = type2;
    }
  }
  for (index = 0, length = arguments.length; index < length; index += 1) {
    arguments[index].forEach(collectType);
  }
  return result;
}
function Schema$1(definition) {
  return this.extend(definition);
}
Schema$1.prototype.extend = function extend2(definition) {
  var implicit = [];
  var explicit = [];
  if (definition instanceof type) {
    explicit.push(definition);
  } else if (Array.isArray(definition)) {
    explicit = explicit.concat(definition);
  } else if (definition && (Array.isArray(definition.implicit) || Array.isArray(definition.explicit))) {
    if (definition.implicit) implicit = implicit.concat(definition.implicit);
    if (definition.explicit) explicit = explicit.concat(definition.explicit);
  } else {
    throw new exception("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  }
  implicit.forEach(function(type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    }
    if (type$1.loadKind && type$1.loadKind !== "scalar") {
      throw new exception("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    }
    if (type$1.multi) {
      throw new exception("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
    }
  });
  explicit.forEach(function(type$1) {
    if (!(type$1 instanceof type)) {
      throw new exception("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    }
  });
  var result = Object.create(Schema$1.prototype);
  result.implicit = (this.implicit || []).concat(implicit);
  result.explicit = (this.explicit || []).concat(explicit);
  result.compiledImplicit = compileList(result, "implicit");
  result.compiledExplicit = compileList(result, "explicit");
  result.compiledTypeMap = compileMap(result.compiledImplicit, result.compiledExplicit);
  return result;
};
var schema = Schema$1;
var str = new type("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(data2) {
    return data2 !== null ? data2 : "";
  }
});
var seq = new type("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(data2) {
    return data2 !== null ? data2 : [];
  }
});
var map = new type("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(data2) {
    return data2 !== null ? data2 : {};
  }
});
var failsafe = new schema({
  explicit: [
    str,
    seq,
    map
  ]
});
function resolveYamlNull(data2) {
  if (data2 === null) return true;
  var max = data2.length;
  return max === 1 && data2 === "~" || max === 4 && (data2 === "null" || data2 === "Null" || data2 === "NULL");
}
function constructYamlNull() {
  return null;
}
function isNull(object) {
  return object === null;
}
var _null = new type("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: resolveYamlNull,
  construct: constructYamlNull,
  predicate: isNull,
  represent: {
    canonical: function() {
      return "~";
    },
    lowercase: function() {
      return "null";
    },
    uppercase: function() {
      return "NULL";
    },
    camelcase: function() {
      return "Null";
    },
    empty: function() {
      return "";
    }
  },
  defaultStyle: "lowercase"
});
function resolveYamlBoolean(data2) {
  if (data2 === null) return false;
  var max = data2.length;
  return max === 4 && (data2 === "true" || data2 === "True" || data2 === "TRUE") || max === 5 && (data2 === "false" || data2 === "False" || data2 === "FALSE");
}
function constructYamlBoolean(data2) {
  return data2 === "true" || data2 === "True" || data2 === "TRUE";
}
function isBoolean(object) {
  return Object.prototype.toString.call(object) === "[object Boolean]";
}
var bool = new type("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: resolveYamlBoolean,
  construct: constructYamlBoolean,
  predicate: isBoolean,
  represent: {
    lowercase: function(object) {
      return object ? "true" : "false";
    },
    uppercase: function(object) {
      return object ? "TRUE" : "FALSE";
    },
    camelcase: function(object) {
      return object ? "True" : "False";
    }
  },
  defaultStyle: "lowercase"
});
function isHexCode(c) {
  return 48 <= c && c <= 57 || 65 <= c && c <= 70 || 97 <= c && c <= 102;
}
function isOctCode(c) {
  return 48 <= c && c <= 55;
}
function isDecCode(c) {
  return 48 <= c && c <= 57;
}
function resolveYamlInteger(data2) {
  if (data2 === null) return false;
  var max = data2.length, index = 0, hasDigits = false, ch;
  if (!max) return false;
  ch = data2[index];
  if (ch === "-" || ch === "+") {
    ch = data2[++index];
  }
  if (ch === "0") {
    if (index + 1 === max) return true;
    ch = data2[++index];
    if (ch === "b") {
      index++;
      for (; index < max; index++) {
        ch = data2[index];
        if (ch === "_") continue;
        if (ch !== "0" && ch !== "1") return false;
        hasDigits = true;
      }
      return hasDigits && ch !== "_";
    }
    if (ch === "x") {
      index++;
      for (; index < max; index++) {
        ch = data2[index];
        if (ch === "_") continue;
        if (!isHexCode(data2.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== "_";
    }
    if (ch === "o") {
      index++;
      for (; index < max; index++) {
        ch = data2[index];
        if (ch === "_") continue;
        if (!isOctCode(data2.charCodeAt(index))) return false;
        hasDigits = true;
      }
      return hasDigits && ch !== "_";
    }
  }
  if (ch === "_") return false;
  for (; index < max; index++) {
    ch = data2[index];
    if (ch === "_") continue;
    if (!isDecCode(data2.charCodeAt(index))) {
      return false;
    }
    hasDigits = true;
  }
  if (!hasDigits || ch === "_") return false;
  return true;
}
function constructYamlInteger(data2) {
  var value = data2, sign = 1, ch;
  if (value.indexOf("_") !== -1) {
    value = value.replace(/_/g, "");
  }
  ch = value[0];
  if (ch === "-" || ch === "+") {
    if (ch === "-") sign = -1;
    value = value.slice(1);
    ch = value[0];
  }
  if (value === "0") return 0;
  if (ch === "0") {
    if (value[1] === "b") return sign * parseInt(value.slice(2), 2);
    if (value[1] === "x") return sign * parseInt(value.slice(2), 16);
    if (value[1] === "o") return sign * parseInt(value.slice(2), 8);
  }
  return sign * parseInt(value, 10);
}
function isInteger(object) {
  return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 === 0 && !common.isNegativeZero(object));
}
var int = new type("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: resolveYamlInteger,
  construct: constructYamlInteger,
  predicate: isInteger,
  represent: {
    binary: function(obj) {
      return obj >= 0 ? "0b" + obj.toString(2) : "-0b" + obj.toString(2).slice(1);
    },
    octal: function(obj) {
      return obj >= 0 ? "0o" + obj.toString(8) : "-0o" + obj.toString(8).slice(1);
    },
    decimal: function(obj) {
      return obj.toString(10);
    },
    /* eslint-disable max-len */
    hexadecimal: function(obj) {
      return obj >= 0 ? "0x" + obj.toString(16).toUpperCase() : "-0x" + obj.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
});
var YAML_FLOAT_PATTERN = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function resolveYamlFloat(data2) {
  if (data2 === null) return false;
  if (!YAML_FLOAT_PATTERN.test(data2) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  data2[data2.length - 1] === "_") {
    return false;
  }
  return true;
}
function constructYamlFloat(data2) {
  var value, sign;
  value = data2.replace(/_/g, "").toLowerCase();
  sign = value[0] === "-" ? -1 : 1;
  if ("+-".indexOf(value[0]) >= 0) {
    value = value.slice(1);
  }
  if (value === ".inf") {
    return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
  } else if (value === ".nan") {
    return NaN;
  }
  return sign * parseFloat(value, 10);
}
var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
function representYamlFloat(object, style) {
  var res;
  if (isNaN(object)) {
    switch (style) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  } else if (Number.POSITIVE_INFINITY === object) {
    switch (style) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  } else if (Number.NEGATIVE_INFINITY === object) {
    switch (style) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  } else if (common.isNegativeZero(object)) {
    return "-0.0";
  }
  res = object.toString(10);
  return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace("e", ".e") : res;
}
function isFloat(object) {
  return Object.prototype.toString.call(object) === "[object Number]" && (object % 1 !== 0 || common.isNegativeZero(object));
}
var float = new type("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: resolveYamlFloat,
  construct: constructYamlFloat,
  predicate: isFloat,
  represent: representYamlFloat,
  defaultStyle: "lowercase"
});
var json = failsafe.extend({
  implicit: [
    _null,
    bool,
    int,
    float
  ]
});
var core = json;
var YAML_DATE_REGEXP = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
);
var YAML_TIMESTAMP_REGEXP = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function resolveYamlTimestamp(data2) {
  if (data2 === null) return false;
  if (YAML_DATE_REGEXP.exec(data2) !== null) return true;
  if (YAML_TIMESTAMP_REGEXP.exec(data2) !== null) return true;
  return false;
}
function constructYamlTimestamp(data2) {
  var match, year, month, day, hour, minute, second, fraction = 0, delta = null, tz_hour, tz_minute, date;
  match = YAML_DATE_REGEXP.exec(data2);
  if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data2);
  if (match === null) throw new Error("Date resolve error");
  year = +match[1];
  month = +match[2] - 1;
  day = +match[3];
  if (!match[4]) {
    return new Date(Date.UTC(year, month, day));
  }
  hour = +match[4];
  minute = +match[5];
  second = +match[6];
  if (match[7]) {
    fraction = match[7].slice(0, 3);
    while (fraction.length < 3) {
      fraction += "0";
    }
    fraction = +fraction;
  }
  if (match[9]) {
    tz_hour = +match[10];
    tz_minute = +(match[11] || 0);
    delta = (tz_hour * 60 + tz_minute) * 6e4;
    if (match[9] === "-") delta = -delta;
  }
  date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
  if (delta) date.setTime(date.getTime() - delta);
  return date;
}
function representYamlTimestamp(object) {
  return object.toISOString();
}
var timestamp = new type("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: resolveYamlTimestamp,
  construct: constructYamlTimestamp,
  instanceOf: Date,
  represent: representYamlTimestamp
});
function resolveYamlMerge(data2) {
  return data2 === "<<" || data2 === null;
}
var merge = new type("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: resolveYamlMerge
});
var BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
function resolveYamlBinary(data2) {
  if (data2 === null) return false;
  var code, idx, bitlen = 0, max = data2.length, map2 = BASE64_MAP;
  for (idx = 0; idx < max; idx++) {
    code = map2.indexOf(data2.charAt(idx));
    if (code > 64) continue;
    if (code < 0) return false;
    bitlen += 6;
  }
  return bitlen % 8 === 0;
}
function constructYamlBinary(data2) {
  var idx, tailbits, input = data2.replace(/[\r\n=]/g, ""), max = input.length, map2 = BASE64_MAP, bits = 0, result = [];
  for (idx = 0; idx < max; idx++) {
    if (idx % 4 === 0 && idx) {
      result.push(bits >> 16 & 255);
      result.push(bits >> 8 & 255);
      result.push(bits & 255);
    }
    bits = bits << 6 | map2.indexOf(input.charAt(idx));
  }
  tailbits = max % 4 * 6;
  if (tailbits === 0) {
    result.push(bits >> 16 & 255);
    result.push(bits >> 8 & 255);
    result.push(bits & 255);
  } else if (tailbits === 18) {
    result.push(bits >> 10 & 255);
    result.push(bits >> 2 & 255);
  } else if (tailbits === 12) {
    result.push(bits >> 4 & 255);
  }
  return new Uint8Array(result);
}
function representYamlBinary(object) {
  var result = "", bits = 0, idx, tail, max = object.length, map2 = BASE64_MAP;
  for (idx = 0; idx < max; idx++) {
    if (idx % 3 === 0 && idx) {
      result += map2[bits >> 18 & 63];
      result += map2[bits >> 12 & 63];
      result += map2[bits >> 6 & 63];
      result += map2[bits & 63];
    }
    bits = (bits << 8) + object[idx];
  }
  tail = max % 3;
  if (tail === 0) {
    result += map2[bits >> 18 & 63];
    result += map2[bits >> 12 & 63];
    result += map2[bits >> 6 & 63];
    result += map2[bits & 63];
  } else if (tail === 2) {
    result += map2[bits >> 10 & 63];
    result += map2[bits >> 4 & 63];
    result += map2[bits << 2 & 63];
    result += map2[64];
  } else if (tail === 1) {
    result += map2[bits >> 2 & 63];
    result += map2[bits << 4 & 63];
    result += map2[64];
    result += map2[64];
  }
  return result;
}
function isBinary(obj) {
  return Object.prototype.toString.call(obj) === "[object Uint8Array]";
}
var binary = new type("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: resolveYamlBinary,
  construct: constructYamlBinary,
  predicate: isBinary,
  represent: representYamlBinary
});
var _hasOwnProperty$3 = Object.prototype.hasOwnProperty;
var _toString$2 = Object.prototype.toString;
function resolveYamlOmap(data2) {
  if (data2 === null) return true;
  var objectKeys = [], index, length, pair, pairKey, pairHasKey, object = data2;
  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    pairHasKey = false;
    if (_toString$2.call(pair) !== "[object Object]") return false;
    for (pairKey in pair) {
      if (_hasOwnProperty$3.call(pair, pairKey)) {
        if (!pairHasKey) pairHasKey = true;
        else return false;
      }
    }
    if (!pairHasKey) return false;
    if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
    else return false;
  }
  return true;
}
function constructYamlOmap(data2) {
  return data2 !== null ? data2 : [];
}
var omap = new type("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: resolveYamlOmap,
  construct: constructYamlOmap
});
var _toString$1 = Object.prototype.toString;
function resolveYamlPairs(data2) {
  if (data2 === null) return true;
  var index, length, pair, keys, result, object = data2;
  result = new Array(object.length);
  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    if (_toString$1.call(pair) !== "[object Object]") return false;
    keys = Object.keys(pair);
    if (keys.length !== 1) return false;
    result[index] = [keys[0], pair[keys[0]]];
  }
  return true;
}
function constructYamlPairs(data2) {
  if (data2 === null) return [];
  var index, length, pair, keys, result, object = data2;
  result = new Array(object.length);
  for (index = 0, length = object.length; index < length; index += 1) {
    pair = object[index];
    keys = Object.keys(pair);
    result[index] = [keys[0], pair[keys[0]]];
  }
  return result;
}
var pairs = new type("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: resolveYamlPairs,
  construct: constructYamlPairs
});
var _hasOwnProperty$2 = Object.prototype.hasOwnProperty;
function resolveYamlSet(data2) {
  if (data2 === null) return true;
  var key, object = data2;
  for (key in object) {
    if (_hasOwnProperty$2.call(object, key)) {
      if (object[key] !== null) return false;
    }
  }
  return true;
}
function constructYamlSet(data2) {
  return data2 !== null ? data2 : {};
}
var set = new type("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: resolveYamlSet,
  construct: constructYamlSet
});
var _default = core.extend({
  implicit: [
    timestamp,
    merge
  ],
  explicit: [
    binary,
    omap,
    pairs,
    set
  ]
});
var _hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var CONTEXT_FLOW_IN = 1;
var CONTEXT_FLOW_OUT = 2;
var CONTEXT_BLOCK_IN = 3;
var CONTEXT_BLOCK_OUT = 4;
var CHOMPING_CLIP = 1;
var CHOMPING_STRIP = 2;
var CHOMPING_KEEP = 3;
var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function _class(obj) {
  return Object.prototype.toString.call(obj);
}
function is_EOL(c) {
  return c === 10 || c === 13;
}
function is_WHITE_SPACE(c) {
  return c === 9 || c === 32;
}
function is_WS_OR_EOL(c) {
  return c === 9 || c === 32 || c === 10 || c === 13;
}
function is_FLOW_INDICATOR(c) {
  return c === 44 || c === 91 || c === 93 || c === 123 || c === 125;
}
function fromHexCode(c) {
  var lc;
  if (48 <= c && c <= 57) {
    return c - 48;
  }
  lc = c | 32;
  if (97 <= lc && lc <= 102) {
    return lc - 97 + 10;
  }
  return -1;
}
function escapedHexLen(c) {
  if (c === 120) {
    return 2;
  }
  if (c === 117) {
    return 4;
  }
  if (c === 85) {
    return 8;
  }
  return 0;
}
function fromDecimalCode(c) {
  if (48 <= c && c <= 57) {
    return c - 48;
  }
  return -1;
}
function simpleEscapeSequence(c) {
  return c === 48 ? "\0" : c === 97 ? "\x07" : c === 98 ? "\b" : c === 116 ? "	" : c === 9 ? "	" : c === 110 ? "\n" : c === 118 ? "\v" : c === 102 ? "\f" : c === 114 ? "\r" : c === 101 ? "\x1B" : c === 32 ? " " : c === 34 ? '"' : c === 47 ? "/" : c === 92 ? "\\" : c === 78 ? "\x85" : c === 95 ? "\xA0" : c === 76 ? "\u2028" : c === 80 ? "\u2029" : "";
}
function charFromCodepoint(c) {
  if (c <= 65535) {
    return String.fromCharCode(c);
  }
  return String.fromCharCode(
    (c - 65536 >> 10) + 55296,
    (c - 65536 & 1023) + 56320
  );
}
function setProperty(object, key, value) {
  if (key === "__proto__") {
    Object.defineProperty(object, key, {
      configurable: true,
      enumerable: true,
      writable: true,
      value
    });
  } else {
    object[key] = value;
  }
}
var simpleEscapeCheck = new Array(256);
var simpleEscapeMap = new Array(256);
for (i = 0; i < 256; i++) {
  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
  simpleEscapeMap[i] = simpleEscapeSequence(i);
}
var i;
function State$1(input, options) {
  this.input = input;
  this.filename = options["filename"] || null;
  this.schema = options["schema"] || _default;
  this.onWarning = options["onWarning"] || null;
  this.legacy = options["legacy"] || false;
  this.json = options["json"] || false;
  this.listener = options["listener"] || null;
  this.implicitTypes = this.schema.compiledImplicit;
  this.typeMap = this.schema.compiledTypeMap;
  this.length = input.length;
  this.position = 0;
  this.line = 0;
  this.lineStart = 0;
  this.lineIndent = 0;
  this.firstTabInLine = -1;
  this.documents = [];
}
function generateError(state, message) {
  var mark = {
    name: state.filename,
    buffer: state.input.slice(0, -1),
    // omit trailing \0
    position: state.position,
    line: state.line,
    column: state.position - state.lineStart
  };
  mark.snippet = snippet(mark);
  return new exception(message, mark);
}
function throwError(state, message) {
  throw generateError(state, message);
}
function throwWarning(state, message) {
  if (state.onWarning) {
    state.onWarning.call(null, generateError(state, message));
  }
}
var directiveHandlers = {
  YAML: function handleYamlDirective(state, name, args) {
    var match, major, minor;
    if (state.version !== null) {
      throwError(state, "duplication of %YAML directive");
    }
    if (args.length !== 1) {
      throwError(state, "YAML directive accepts exactly one argument");
    }
    match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
    if (match === null) {
      throwError(state, "ill-formed argument of the YAML directive");
    }
    major = parseInt(match[1], 10);
    minor = parseInt(match[2], 10);
    if (major !== 1) {
      throwError(state, "unacceptable YAML version of the document");
    }
    state.version = args[0];
    state.checkLineBreaks = minor < 2;
    if (minor !== 1 && minor !== 2) {
      throwWarning(state, "unsupported YAML version of the document");
    }
  },
  TAG: function handleTagDirective(state, name, args) {
    var handle, prefix;
    if (args.length !== 2) {
      throwError(state, "TAG directive accepts exactly two arguments");
    }
    handle = args[0];
    prefix = args[1];
    if (!PATTERN_TAG_HANDLE.test(handle)) {
      throwError(state, "ill-formed tag handle (first argument) of the TAG directive");
    }
    if (_hasOwnProperty$1.call(state.tagMap, handle)) {
      throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle');
    }
    if (!PATTERN_TAG_URI.test(prefix)) {
      throwError(state, "ill-formed tag prefix (second argument) of the TAG directive");
    }
    try {
      prefix = decodeURIComponent(prefix);
    } catch (err) {
      throwError(state, "tag prefix is malformed: " + prefix);
    }
    state.tagMap[handle] = prefix;
  }
};
function captureSegment(state, start, end, checkJson) {
  var _position, _length, _character, _result;
  if (start < end) {
    _result = state.input.slice(start, end);
    if (checkJson) {
      for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
        _character = _result.charCodeAt(_position);
        if (!(_character === 9 || 32 <= _character && _character <= 1114111)) {
          throwError(state, "expected valid JSON character");
        }
      }
    } else if (PATTERN_NON_PRINTABLE.test(_result)) {
      throwError(state, "the stream contains non-printable characters");
    }
    state.result += _result;
  }
}
function mergeMappings(state, destination, source, overridableKeys) {
  var sourceKeys, key, index, quantity;
  if (!common.isObject(source)) {
    throwError(state, "cannot merge mappings; the provided source object is unacceptable");
  }
  sourceKeys = Object.keys(source);
  for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
    key = sourceKeys[index];
    if (!_hasOwnProperty$1.call(destination, key)) {
      setProperty(destination, key, source[key]);
      overridableKeys[key] = true;
    }
  }
}
function storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startLineStart, startPos) {
  var index, quantity;
  if (Array.isArray(keyNode)) {
    keyNode = Array.prototype.slice.call(keyNode);
    for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
      if (Array.isArray(keyNode[index])) {
        throwError(state, "nested arrays are not supported inside keys");
      }
      if (typeof keyNode === "object" && _class(keyNode[index]) === "[object Object]") {
        keyNode[index] = "[object Object]";
      }
    }
  }
  if (typeof keyNode === "object" && _class(keyNode) === "[object Object]") {
    keyNode = "[object Object]";
  }
  keyNode = String(keyNode);
  if (_result === null) {
    _result = {};
  }
  if (keyTag === "tag:yaml.org,2002:merge") {
    if (Array.isArray(valueNode)) {
      for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
        mergeMappings(state, _result, valueNode[index], overridableKeys);
      }
    } else {
      mergeMappings(state, _result, valueNode, overridableKeys);
    }
  } else {
    if (!state.json && !_hasOwnProperty$1.call(overridableKeys, keyNode) && _hasOwnProperty$1.call(_result, keyNode)) {
      state.line = startLine || state.line;
      state.lineStart = startLineStart || state.lineStart;
      state.position = startPos || state.position;
      throwError(state, "duplicated mapping key");
    }
    setProperty(_result, keyNode, valueNode);
    delete overridableKeys[keyNode];
  }
  return _result;
}
function readLineBreak(state) {
  var ch;
  ch = state.input.charCodeAt(state.position);
  if (ch === 10) {
    state.position++;
  } else if (ch === 13) {
    state.position++;
    if (state.input.charCodeAt(state.position) === 10) {
      state.position++;
    }
  } else {
    throwError(state, "a line break is expected");
  }
  state.line += 1;
  state.lineStart = state.position;
  state.firstTabInLine = -1;
}
function skipSeparationSpace(state, allowComments, checkIndent) {
  var lineBreaks = 0, ch = state.input.charCodeAt(state.position);
  while (ch !== 0) {
    while (is_WHITE_SPACE(ch)) {
      if (ch === 9 && state.firstTabInLine === -1) {
        state.firstTabInLine = state.position;
      }
      ch = state.input.charCodeAt(++state.position);
    }
    if (allowComments && ch === 35) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (ch !== 10 && ch !== 13 && ch !== 0);
    }
    if (is_EOL(ch)) {
      readLineBreak(state);
      ch = state.input.charCodeAt(state.position);
      lineBreaks++;
      state.lineIndent = 0;
      while (ch === 32) {
        state.lineIndent++;
        ch = state.input.charCodeAt(++state.position);
      }
    } else {
      break;
    }
  }
  if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
    throwWarning(state, "deficient indentation");
  }
  return lineBreaks;
}
function testDocumentSeparator(state) {
  var _position = state.position, ch;
  ch = state.input.charCodeAt(_position);
  if ((ch === 45 || ch === 46) && ch === state.input.charCodeAt(_position + 1) && ch === state.input.charCodeAt(_position + 2)) {
    _position += 3;
    ch = state.input.charCodeAt(_position);
    if (ch === 0 || is_WS_OR_EOL(ch)) {
      return true;
    }
  }
  return false;
}
function writeFoldedLines(state, count) {
  if (count === 1) {
    state.result += " ";
  } else if (count > 1) {
    state.result += common.repeat("\n", count - 1);
  }
}
function readPlainScalar(state, nodeIndent, withinFlowCollection) {
  var preceding, following, captureStart, captureEnd, hasPendingContent, _line, _lineStart, _lineIndent, _kind = state.kind, _result = state.result, ch;
  ch = state.input.charCodeAt(state.position);
  if (is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || ch === 35 || ch === 38 || ch === 42 || ch === 33 || ch === 124 || ch === 62 || ch === 39 || ch === 34 || ch === 37 || ch === 64 || ch === 96) {
    return false;
  }
  if (ch === 63 || ch === 45) {
    following = state.input.charCodeAt(state.position + 1);
    if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
      return false;
    }
  }
  state.kind = "scalar";
  state.result = "";
  captureStart = captureEnd = state.position;
  hasPendingContent = false;
  while (ch !== 0) {
    if (ch === 58) {
      following = state.input.charCodeAt(state.position + 1);
      if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
        break;
      }
    } else if (ch === 35) {
      preceding = state.input.charCodeAt(state.position - 1);
      if (is_WS_OR_EOL(preceding)) {
        break;
      }
    } else if (state.position === state.lineStart && testDocumentSeparator(state) || withinFlowCollection && is_FLOW_INDICATOR(ch)) {
      break;
    } else if (is_EOL(ch)) {
      _line = state.line;
      _lineStart = state.lineStart;
      _lineIndent = state.lineIndent;
      skipSeparationSpace(state, false, -1);
      if (state.lineIndent >= nodeIndent) {
        hasPendingContent = true;
        ch = state.input.charCodeAt(state.position);
        continue;
      } else {
        state.position = captureEnd;
        state.line = _line;
        state.lineStart = _lineStart;
        state.lineIndent = _lineIndent;
        break;
      }
    }
    if (hasPendingContent) {
      captureSegment(state, captureStart, captureEnd, false);
      writeFoldedLines(state, state.line - _line);
      captureStart = captureEnd = state.position;
      hasPendingContent = false;
    }
    if (!is_WHITE_SPACE(ch)) {
      captureEnd = state.position + 1;
    }
    ch = state.input.charCodeAt(++state.position);
  }
  captureSegment(state, captureStart, captureEnd, false);
  if (state.result) {
    return true;
  }
  state.kind = _kind;
  state.result = _result;
  return false;
}
function readSingleQuotedScalar(state, nodeIndent) {
  var ch, captureStart, captureEnd;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 39) {
    return false;
  }
  state.kind = "scalar";
  state.result = "";
  state.position++;
  captureStart = captureEnd = state.position;
  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 39) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);
      if (ch === 39) {
        captureStart = state.position;
        state.position++;
        captureEnd = state.position;
      } else {
        return true;
      }
    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;
    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, "unexpected end of the document within a single quoted scalar");
    } else {
      state.position++;
      captureEnd = state.position;
    }
  }
  throwError(state, "unexpected end of the stream within a single quoted scalar");
}
function readDoubleQuotedScalar(state, nodeIndent) {
  var captureStart, captureEnd, hexLength, hexResult, tmp, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 34) {
    return false;
  }
  state.kind = "scalar";
  state.result = "";
  state.position++;
  captureStart = captureEnd = state.position;
  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 34) {
      captureSegment(state, captureStart, state.position, true);
      state.position++;
      return true;
    } else if (ch === 92) {
      captureSegment(state, captureStart, state.position, true);
      ch = state.input.charCodeAt(++state.position);
      if (is_EOL(ch)) {
        skipSeparationSpace(state, false, nodeIndent);
      } else if (ch < 256 && simpleEscapeCheck[ch]) {
        state.result += simpleEscapeMap[ch];
        state.position++;
      } else if ((tmp = escapedHexLen(ch)) > 0) {
        hexLength = tmp;
        hexResult = 0;
        for (; hexLength > 0; hexLength--) {
          ch = state.input.charCodeAt(++state.position);
          if ((tmp = fromHexCode(ch)) >= 0) {
            hexResult = (hexResult << 4) + tmp;
          } else {
            throwError(state, "expected hexadecimal character");
          }
        }
        state.result += charFromCodepoint(hexResult);
        state.position++;
      } else {
        throwError(state, "unknown escape sequence");
      }
      captureStart = captureEnd = state.position;
    } else if (is_EOL(ch)) {
      captureSegment(state, captureStart, captureEnd, true);
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent));
      captureStart = captureEnd = state.position;
    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, "unexpected end of the document within a double quoted scalar");
    } else {
      state.position++;
      captureEnd = state.position;
    }
  }
  throwError(state, "unexpected end of the stream within a double quoted scalar");
}
function readFlowCollection(state, nodeIndent) {
  var readNext = true, _line, _lineStart, _pos, _tag = state.tag, _result, _anchor = state.anchor, following, terminator, isPair, isExplicitPair, isMapping, overridableKeys = /* @__PURE__ */ Object.create(null), keyNode, keyTag, valueNode, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch === 91) {
    terminator = 93;
    isMapping = false;
    _result = [];
  } else if (ch === 123) {
    terminator = 125;
    isMapping = true;
    _result = {};
  } else {
    return false;
  }
  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }
  ch = state.input.charCodeAt(++state.position);
  while (ch !== 0) {
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);
    if (ch === terminator) {
      state.position++;
      state.tag = _tag;
      state.anchor = _anchor;
      state.kind = isMapping ? "mapping" : "sequence";
      state.result = _result;
      return true;
    } else if (!readNext) {
      throwError(state, "missed comma between flow collection entries");
    } else if (ch === 44) {
      throwError(state, "expected the node content, but found ','");
    }
    keyTag = keyNode = valueNode = null;
    isPair = isExplicitPair = false;
    if (ch === 63) {
      following = state.input.charCodeAt(state.position + 1);
      if (is_WS_OR_EOL(following)) {
        isPair = isExplicitPair = true;
        state.position++;
        skipSeparationSpace(state, true, nodeIndent);
      }
    }
    _line = state.line;
    _lineStart = state.lineStart;
    _pos = state.position;
    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
    keyTag = state.tag;
    keyNode = state.result;
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);
    if ((isExplicitPair || state.line === _line) && ch === 58) {
      isPair = true;
      ch = state.input.charCodeAt(++state.position);
      skipSeparationSpace(state, true, nodeIndent);
      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true);
      valueNode = state.result;
    }
    if (isMapping) {
      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos);
    } else if (isPair) {
      _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos));
    } else {
      _result.push(keyNode);
    }
    skipSeparationSpace(state, true, nodeIndent);
    ch = state.input.charCodeAt(state.position);
    if (ch === 44) {
      readNext = true;
      ch = state.input.charCodeAt(++state.position);
    } else {
      readNext = false;
    }
  }
  throwError(state, "unexpected end of the stream within a flow collection");
}
function readBlockScalar(state, nodeIndent) {
  var captureStart, folding, chomping = CHOMPING_CLIP, didReadContent = false, detectedIndent = false, textIndent = nodeIndent, emptyLines = 0, atMoreIndented = false, tmp, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch === 124) {
    folding = false;
  } else if (ch === 62) {
    folding = true;
  } else {
    return false;
  }
  state.kind = "scalar";
  state.result = "";
  while (ch !== 0) {
    ch = state.input.charCodeAt(++state.position);
    if (ch === 43 || ch === 45) {
      if (CHOMPING_CLIP === chomping) {
        chomping = ch === 43 ? CHOMPING_KEEP : CHOMPING_STRIP;
      } else {
        throwError(state, "repeat of a chomping mode identifier");
      }
    } else if ((tmp = fromDecimalCode(ch)) >= 0) {
      if (tmp === 0) {
        throwError(state, "bad explicit indentation width of a block scalar; it cannot be less than one");
      } else if (!detectedIndent) {
        textIndent = nodeIndent + tmp - 1;
        detectedIndent = true;
      } else {
        throwError(state, "repeat of an indentation width identifier");
      }
    } else {
      break;
    }
  }
  if (is_WHITE_SPACE(ch)) {
    do {
      ch = state.input.charCodeAt(++state.position);
    } while (is_WHITE_SPACE(ch));
    if (ch === 35) {
      do {
        ch = state.input.charCodeAt(++state.position);
      } while (!is_EOL(ch) && ch !== 0);
    }
  }
  while (ch !== 0) {
    readLineBreak(state);
    state.lineIndent = 0;
    ch = state.input.charCodeAt(state.position);
    while ((!detectedIndent || state.lineIndent < textIndent) && ch === 32) {
      state.lineIndent++;
      ch = state.input.charCodeAt(++state.position);
    }
    if (!detectedIndent && state.lineIndent > textIndent) {
      textIndent = state.lineIndent;
    }
    if (is_EOL(ch)) {
      emptyLines++;
      continue;
    }
    if (state.lineIndent < textIndent) {
      if (chomping === CHOMPING_KEEP) {
        state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
      } else if (chomping === CHOMPING_CLIP) {
        if (didReadContent) {
          state.result += "\n";
        }
      }
      break;
    }
    if (folding) {
      if (is_WHITE_SPACE(ch)) {
        atMoreIndented = true;
        state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
      } else if (atMoreIndented) {
        atMoreIndented = false;
        state.result += common.repeat("\n", emptyLines + 1);
      } else if (emptyLines === 0) {
        if (didReadContent) {
          state.result += " ";
        }
      } else {
        state.result += common.repeat("\n", emptyLines);
      }
    } else {
      state.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
    }
    didReadContent = true;
    detectedIndent = true;
    emptyLines = 0;
    captureStart = state.position;
    while (!is_EOL(ch) && ch !== 0) {
      ch = state.input.charCodeAt(++state.position);
    }
    captureSegment(state, captureStart, state.position, false);
  }
  return true;
}
function readBlockSequence(state, nodeIndent) {
  var _line, _tag = state.tag, _anchor = state.anchor, _result = [], following, detected = false, ch;
  if (state.firstTabInLine !== -1) return false;
  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }
  ch = state.input.charCodeAt(state.position);
  while (ch !== 0) {
    if (state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, "tab characters must not be used in indentation");
    }
    if (ch !== 45) {
      break;
    }
    following = state.input.charCodeAt(state.position + 1);
    if (!is_WS_OR_EOL(following)) {
      break;
    }
    detected = true;
    state.position++;
    if (skipSeparationSpace(state, true, -1)) {
      if (state.lineIndent <= nodeIndent) {
        _result.push(null);
        ch = state.input.charCodeAt(state.position);
        continue;
      }
    }
    _line = state.line;
    composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true);
    _result.push(state.result);
    skipSeparationSpace(state, true, -1);
    ch = state.input.charCodeAt(state.position);
    if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
      throwError(state, "bad indentation of a sequence entry");
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = "sequence";
    state.result = _result;
    return true;
  }
  return false;
}
function readBlockMapping(state, nodeIndent, flowIndent) {
  var following, allowCompact, _line, _keyLine, _keyLineStart, _keyPos, _tag = state.tag, _anchor = state.anchor, _result = {}, overridableKeys = /* @__PURE__ */ Object.create(null), keyTag = null, keyNode = null, valueNode = null, atExplicitKey = false, detected = false, ch;
  if (state.firstTabInLine !== -1) return false;
  if (state.anchor !== null) {
    state.anchorMap[state.anchor] = _result;
  }
  ch = state.input.charCodeAt(state.position);
  while (ch !== 0) {
    if (!atExplicitKey && state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine;
      throwError(state, "tab characters must not be used in indentation");
    }
    following = state.input.charCodeAt(state.position + 1);
    _line = state.line;
    if ((ch === 63 || ch === 58) && is_WS_OR_EOL(following)) {
      if (ch === 63) {
        if (atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
          keyTag = keyNode = valueNode = null;
        }
        detected = true;
        atExplicitKey = true;
        allowCompact = true;
      } else if (atExplicitKey) {
        atExplicitKey = false;
        allowCompact = true;
      } else {
        throwError(state, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
      }
      state.position += 1;
      ch = following;
    } else {
      _keyLine = state.line;
      _keyLineStart = state.lineStart;
      _keyPos = state.position;
      if (!composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
        break;
      }
      if (state.line === _line) {
        ch = state.input.charCodeAt(state.position);
        while (is_WHITE_SPACE(ch)) {
          ch = state.input.charCodeAt(++state.position);
        }
        if (ch === 58) {
          ch = state.input.charCodeAt(++state.position);
          if (!is_WS_OR_EOL(ch)) {
            throwError(state, "a whitespace character is expected after the key-value separator within a block mapping");
          }
          if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
            keyTag = keyNode = valueNode = null;
          }
          detected = true;
          atExplicitKey = false;
          allowCompact = false;
          keyTag = state.tag;
          keyNode = state.result;
        } else if (detected) {
          throwError(state, "can not read an implicit mapping pair; a colon is missed");
        } else {
          state.tag = _tag;
          state.anchor = _anchor;
          return true;
        }
      } else if (detected) {
        throwError(state, "can not read a block mapping entry; a multiline key may not be an implicit key");
      } else {
        state.tag = _tag;
        state.anchor = _anchor;
        return true;
      }
    }
    if (state.line === _line || state.lineIndent > nodeIndent) {
      if (atExplicitKey) {
        _keyLine = state.line;
        _keyLineStart = state.lineStart;
        _keyPos = state.position;
      }
      if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
        if (atExplicitKey) {
          keyNode = state.result;
        } else {
          valueNode = state.result;
        }
      }
      if (!atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos);
        keyTag = keyNode = valueNode = null;
      }
      skipSeparationSpace(state, true, -1);
      ch = state.input.charCodeAt(state.position);
    }
    if ((state.line === _line || state.lineIndent > nodeIndent) && ch !== 0) {
      throwError(state, "bad indentation of a mapping entry");
    } else if (state.lineIndent < nodeIndent) {
      break;
    }
  }
  if (atExplicitKey) {
    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos);
  }
  if (detected) {
    state.tag = _tag;
    state.anchor = _anchor;
    state.kind = "mapping";
    state.result = _result;
  }
  return detected;
}
function readTagProperty(state) {
  var _position, isVerbatim = false, isNamed = false, tagHandle, tagName, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 33) return false;
  if (state.tag !== null) {
    throwError(state, "duplication of a tag property");
  }
  ch = state.input.charCodeAt(++state.position);
  if (ch === 60) {
    isVerbatim = true;
    ch = state.input.charCodeAt(++state.position);
  } else if (ch === 33) {
    isNamed = true;
    tagHandle = "!!";
    ch = state.input.charCodeAt(++state.position);
  } else {
    tagHandle = "!";
  }
  _position = state.position;
  if (isVerbatim) {
    do {
      ch = state.input.charCodeAt(++state.position);
    } while (ch !== 0 && ch !== 62);
    if (state.position < state.length) {
      tagName = state.input.slice(_position, state.position);
      ch = state.input.charCodeAt(++state.position);
    } else {
      throwError(state, "unexpected end of the stream within a verbatim tag");
    }
  } else {
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      if (ch === 33) {
        if (!isNamed) {
          tagHandle = state.input.slice(_position - 1, state.position + 1);
          if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
            throwError(state, "named tag handle cannot contain such characters");
          }
          isNamed = true;
          _position = state.position + 1;
        } else {
          throwError(state, "tag suffix cannot contain exclamation marks");
        }
      }
      ch = state.input.charCodeAt(++state.position);
    }
    tagName = state.input.slice(_position, state.position);
    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
      throwError(state, "tag suffix cannot contain flow indicator characters");
    }
  }
  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
    throwError(state, "tag name cannot contain such characters: " + tagName);
  }
  try {
    tagName = decodeURIComponent(tagName);
  } catch (err) {
    throwError(state, "tag name is malformed: " + tagName);
  }
  if (isVerbatim) {
    state.tag = tagName;
  } else if (_hasOwnProperty$1.call(state.tagMap, tagHandle)) {
    state.tag = state.tagMap[tagHandle] + tagName;
  } else if (tagHandle === "!") {
    state.tag = "!" + tagName;
  } else if (tagHandle === "!!") {
    state.tag = "tag:yaml.org,2002:" + tagName;
  } else {
    throwError(state, 'undeclared tag handle "' + tagHandle + '"');
  }
  return true;
}
function readAnchorProperty(state) {
  var _position, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 38) return false;
  if (state.anchor !== null) {
    throwError(state, "duplication of an anchor property");
  }
  ch = state.input.charCodeAt(++state.position);
  _position = state.position;
  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }
  if (state.position === _position) {
    throwError(state, "name of an anchor node must contain at least one character");
  }
  state.anchor = state.input.slice(_position, state.position);
  return true;
}
function readAlias(state) {
  var _position, alias, ch;
  ch = state.input.charCodeAt(state.position);
  if (ch !== 42) return false;
  ch = state.input.charCodeAt(++state.position);
  _position = state.position;
  while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
    ch = state.input.charCodeAt(++state.position);
  }
  if (state.position === _position) {
    throwError(state, "name of an alias node must contain at least one character");
  }
  alias = state.input.slice(_position, state.position);
  if (!_hasOwnProperty$1.call(state.anchorMap, alias)) {
    throwError(state, 'unidentified alias "' + alias + '"');
  }
  state.result = state.anchorMap[alias];
  skipSeparationSpace(state, true, -1);
  return true;
}
function composeNode(state, parentIndent, nodeContext, allowToSeek, allowCompact) {
  var allowBlockStyles, allowBlockScalars, allowBlockCollections, indentStatus = 1, atNewLine = false, hasContent = false, typeIndex, typeQuantity, typeList, type2, flowIndent, blockIndent;
  if (state.listener !== null) {
    state.listener("open", state);
  }
  state.tag = null;
  state.anchor = null;
  state.kind = null;
  state.result = null;
  allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;
  if (allowToSeek) {
    if (skipSeparationSpace(state, true, -1)) {
      atNewLine = true;
      if (state.lineIndent > parentIndent) {
        indentStatus = 1;
      } else if (state.lineIndent === parentIndent) {
        indentStatus = 0;
      } else if (state.lineIndent < parentIndent) {
        indentStatus = -1;
      }
    }
  }
  if (indentStatus === 1) {
    while (readTagProperty(state) || readAnchorProperty(state)) {
      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true;
        allowBlockCollections = allowBlockStyles;
        if (state.lineIndent > parentIndent) {
          indentStatus = 1;
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0;
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1;
        }
      } else {
        allowBlockCollections = false;
      }
    }
  }
  if (allowBlockCollections) {
    allowBlockCollections = atNewLine || allowCompact;
  }
  if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
    if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
      flowIndent = parentIndent;
    } else {
      flowIndent = parentIndent + 1;
    }
    blockIndent = state.position - state.lineStart;
    if (indentStatus === 1) {
      if (allowBlockCollections && (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent)) || readFlowCollection(state, flowIndent)) {
        hasContent = true;
      } else {
        if (allowBlockScalars && readBlockScalar(state, flowIndent) || readSingleQuotedScalar(state, flowIndent) || readDoubleQuotedScalar(state, flowIndent)) {
          hasContent = true;
        } else if (readAlias(state)) {
          hasContent = true;
          if (state.tag !== null || state.anchor !== null) {
            throwError(state, "alias node should not have any properties");
          }
        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
          hasContent = true;
          if (state.tag === null) {
            state.tag = "?";
          }
        }
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
      }
    } else if (indentStatus === 0) {
      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent);
    }
  }
  if (state.tag === null) {
    if (state.anchor !== null) {
      state.anchorMap[state.anchor] = state.result;
    }
  } else if (state.tag === "?") {
    if (state.result !== null && state.kind !== "scalar") {
      throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"');
    }
    for (typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
      type2 = state.implicitTypes[typeIndex];
      if (type2.resolve(state.result)) {
        state.result = type2.construct(state.result);
        state.tag = type2.tag;
        if (state.anchor !== null) {
          state.anchorMap[state.anchor] = state.result;
        }
        break;
      }
    }
  } else if (state.tag !== "!") {
    if (_hasOwnProperty$1.call(state.typeMap[state.kind || "fallback"], state.tag)) {
      type2 = state.typeMap[state.kind || "fallback"][state.tag];
    } else {
      type2 = null;
      typeList = state.typeMap.multi[state.kind || "fallback"];
      for (typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1) {
        if (state.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
          type2 = typeList[typeIndex];
          break;
        }
      }
    }
    if (!type2) {
      throwError(state, "unknown tag !<" + state.tag + ">");
    }
    if (state.result !== null && type2.kind !== state.kind) {
      throwError(state, "unacceptable node kind for !<" + state.tag + '> tag; it should be "' + type2.kind + '", not "' + state.kind + '"');
    }
    if (!type2.resolve(state.result, state.tag)) {
      throwError(state, "cannot resolve a node with !<" + state.tag + "> explicit tag");
    } else {
      state.result = type2.construct(state.result, state.tag);
      if (state.anchor !== null) {
        state.anchorMap[state.anchor] = state.result;
      }
    }
  }
  if (state.listener !== null) {
    state.listener("close", state);
  }
  return state.tag !== null || state.anchor !== null || hasContent;
}
function readDocument(state) {
  var documentStart = state.position, _position, directiveName, directiveArgs, hasDirectives = false, ch;
  state.version = null;
  state.checkLineBreaks = state.legacy;
  state.tagMap = /* @__PURE__ */ Object.create(null);
  state.anchorMap = /* @__PURE__ */ Object.create(null);
  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    skipSeparationSpace(state, true, -1);
    ch = state.input.charCodeAt(state.position);
    if (state.lineIndent > 0 || ch !== 37) {
      break;
    }
    hasDirectives = true;
    ch = state.input.charCodeAt(++state.position);
    _position = state.position;
    while (ch !== 0 && !is_WS_OR_EOL(ch)) {
      ch = state.input.charCodeAt(++state.position);
    }
    directiveName = state.input.slice(_position, state.position);
    directiveArgs = [];
    if (directiveName.length < 1) {
      throwError(state, "directive name must not be less than one character in length");
    }
    while (ch !== 0) {
      while (is_WHITE_SPACE(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      if (ch === 35) {
        do {
          ch = state.input.charCodeAt(++state.position);
        } while (ch !== 0 && !is_EOL(ch));
        break;
      }
      if (is_EOL(ch)) break;
      _position = state.position;
      while (ch !== 0 && !is_WS_OR_EOL(ch)) {
        ch = state.input.charCodeAt(++state.position);
      }
      directiveArgs.push(state.input.slice(_position, state.position));
    }
    if (ch !== 0) readLineBreak(state);
    if (_hasOwnProperty$1.call(directiveHandlers, directiveName)) {
      directiveHandlers[directiveName](state, directiveName, directiveArgs);
    } else {
      throwWarning(state, 'unknown document directive "' + directiveName + '"');
    }
  }
  skipSeparationSpace(state, true, -1);
  if (state.lineIndent === 0 && state.input.charCodeAt(state.position) === 45 && state.input.charCodeAt(state.position + 1) === 45 && state.input.charCodeAt(state.position + 2) === 45) {
    state.position += 3;
    skipSeparationSpace(state, true, -1);
  } else if (hasDirectives) {
    throwError(state, "directives end mark is expected");
  }
  composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
  skipSeparationSpace(state, true, -1);
  if (state.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
    throwWarning(state, "non-ASCII line breaks are interpreted as content");
  }
  state.documents.push(state.result);
  if (state.position === state.lineStart && testDocumentSeparator(state)) {
    if (state.input.charCodeAt(state.position) === 46) {
      state.position += 3;
      skipSeparationSpace(state, true, -1);
    }
    return;
  }
  if (state.position < state.length - 1) {
    throwError(state, "end of the stream or a document separator is expected");
  } else {
    return;
  }
}
function loadDocuments(input, options) {
  input = String(input);
  options = options || {};
  if (input.length !== 0) {
    if (input.charCodeAt(input.length - 1) !== 10 && input.charCodeAt(input.length - 1) !== 13) {
      input += "\n";
    }
    if (input.charCodeAt(0) === 65279) {
      input = input.slice(1);
    }
  }
  var state = new State$1(input, options);
  var nullpos = input.indexOf("\0");
  if (nullpos !== -1) {
    state.position = nullpos;
    throwError(state, "null byte is not allowed in input");
  }
  state.input += "\0";
  while (state.input.charCodeAt(state.position) === 32) {
    state.lineIndent += 1;
    state.position += 1;
  }
  while (state.position < state.length - 1) {
    readDocument(state);
  }
  return state.documents;
}
function loadAll$1(input, iterator, options) {
  if (iterator !== null && typeof iterator === "object" && typeof options === "undefined") {
    options = iterator;
    iterator = null;
  }
  var documents = loadDocuments(input, options);
  if (typeof iterator !== "function") {
    return documents;
  }
  for (var index = 0, length = documents.length; index < length; index += 1) {
    iterator(documents[index]);
  }
}
function load$1(input, options) {
  var documents = loadDocuments(input, options);
  if (documents.length === 0) {
    return void 0;
  } else if (documents.length === 1) {
    return documents[0];
  }
  throw new exception("expected a single document in the stream, but found more");
}
var loadAll_1 = loadAll$1;
var load_1 = load$1;
var loader = {
  loadAll: loadAll_1,
  load: load_1
};
var _toString = Object.prototype.toString;
var _hasOwnProperty = Object.prototype.hasOwnProperty;
var CHAR_BOM = 65279;
var CHAR_TAB = 9;
var CHAR_LINE_FEED = 10;
var CHAR_CARRIAGE_RETURN = 13;
var CHAR_SPACE = 32;
var CHAR_EXCLAMATION = 33;
var CHAR_DOUBLE_QUOTE = 34;
var CHAR_SHARP = 35;
var CHAR_PERCENT = 37;
var CHAR_AMPERSAND = 38;
var CHAR_SINGLE_QUOTE = 39;
var CHAR_ASTERISK = 42;
var CHAR_COMMA = 44;
var CHAR_MINUS = 45;
var CHAR_COLON = 58;
var CHAR_EQUALS = 61;
var CHAR_GREATER_THAN = 62;
var CHAR_QUESTION = 63;
var CHAR_COMMERCIAL_AT = 64;
var CHAR_LEFT_SQUARE_BRACKET = 91;
var CHAR_RIGHT_SQUARE_BRACKET = 93;
var CHAR_GRAVE_ACCENT = 96;
var CHAR_LEFT_CURLY_BRACKET = 123;
var CHAR_VERTICAL_LINE = 124;
var CHAR_RIGHT_CURLY_BRACKET = 125;
var ESCAPE_SEQUENCES = {};
ESCAPE_SEQUENCES[0] = "\\0";
ESCAPE_SEQUENCES[7] = "\\a";
ESCAPE_SEQUENCES[8] = "\\b";
ESCAPE_SEQUENCES[9] = "\\t";
ESCAPE_SEQUENCES[10] = "\\n";
ESCAPE_SEQUENCES[11] = "\\v";
ESCAPE_SEQUENCES[12] = "\\f";
ESCAPE_SEQUENCES[13] = "\\r";
ESCAPE_SEQUENCES[27] = "\\e";
ESCAPE_SEQUENCES[34] = '\\"';
ESCAPE_SEQUENCES[92] = "\\\\";
ESCAPE_SEQUENCES[133] = "\\N";
ESCAPE_SEQUENCES[160] = "\\_";
ESCAPE_SEQUENCES[8232] = "\\L";
ESCAPE_SEQUENCES[8233] = "\\P";
var DEPRECATED_BOOLEANS_SYNTAX = [
  "y",
  "Y",
  "yes",
  "Yes",
  "YES",
  "on",
  "On",
  "ON",
  "n",
  "N",
  "no",
  "No",
  "NO",
  "off",
  "Off",
  "OFF"
];
var DEPRECATED_BASE60_SYNTAX = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function compileStyleMap(schema2, map2) {
  var result, keys, index, length, tag, style, type2;
  if (map2 === null) return {};
  result = {};
  keys = Object.keys(map2);
  for (index = 0, length = keys.length; index < length; index += 1) {
    tag = keys[index];
    style = String(map2[tag]);
    if (tag.slice(0, 2) === "!!") {
      tag = "tag:yaml.org,2002:" + tag.slice(2);
    }
    type2 = schema2.compiledTypeMap["fallback"][tag];
    if (type2 && _hasOwnProperty.call(type2.styleAliases, style)) {
      style = type2.styleAliases[style];
    }
    result[tag] = style;
  }
  return result;
}
function encodeHex(character) {
  var string, handle, length;
  string = character.toString(16).toUpperCase();
  if (character <= 255) {
    handle = "x";
    length = 2;
  } else if (character <= 65535) {
    handle = "u";
    length = 4;
  } else if (character <= 4294967295) {
    handle = "U";
    length = 8;
  } else {
    throw new exception("code point within a string may not be greater than 0xFFFFFFFF");
  }
  return "\\" + handle + common.repeat("0", length - string.length) + string;
}
var QUOTING_TYPE_SINGLE = 1;
var QUOTING_TYPE_DOUBLE = 2;
function State(options) {
  this.schema = options["schema"] || _default;
  this.indent = Math.max(1, options["indent"] || 2);
  this.noArrayIndent = options["noArrayIndent"] || false;
  this.skipInvalid = options["skipInvalid"] || false;
  this.flowLevel = common.isNothing(options["flowLevel"]) ? -1 : options["flowLevel"];
  this.styleMap = compileStyleMap(this.schema, options["styles"] || null);
  this.sortKeys = options["sortKeys"] || false;
  this.lineWidth = options["lineWidth"] || 80;
  this.noRefs = options["noRefs"] || false;
  this.noCompatMode = options["noCompatMode"] || false;
  this.condenseFlow = options["condenseFlow"] || false;
  this.quotingType = options["quotingType"] === '"' ? QUOTING_TYPE_DOUBLE : QUOTING_TYPE_SINGLE;
  this.forceQuotes = options["forceQuotes"] || false;
  this.replacer = typeof options["replacer"] === "function" ? options["replacer"] : null;
  this.implicitTypes = this.schema.compiledImplicit;
  this.explicitTypes = this.schema.compiledExplicit;
  this.tag = null;
  this.result = "";
  this.duplicates = [];
  this.usedDuplicates = null;
}
function indentString(string, spaces) {
  var ind = common.repeat(" ", spaces), position = 0, next = -1, result = "", line, length = string.length;
  while (position < length) {
    next = string.indexOf("\n", position);
    if (next === -1) {
      line = string.slice(position);
      position = length;
    } else {
      line = string.slice(position, next + 1);
      position = next + 1;
    }
    if (line.length && line !== "\n") result += ind;
    result += line;
  }
  return result;
}
function generateNextLine(state, level) {
  return "\n" + common.repeat(" ", state.indent * level);
}
function testImplicitResolving(state, str2) {
  var index, length, type2;
  for (index = 0, length = state.implicitTypes.length; index < length; index += 1) {
    type2 = state.implicitTypes[index];
    if (type2.resolve(str2)) {
      return true;
    }
  }
  return false;
}
function isWhitespace(c) {
  return c === CHAR_SPACE || c === CHAR_TAB;
}
function isPrintable(c) {
  return 32 <= c && c <= 126 || 161 <= c && c <= 55295 && c !== 8232 && c !== 8233 || 57344 <= c && c <= 65533 && c !== CHAR_BOM || 65536 <= c && c <= 1114111;
}
function isNsCharOrWhitespace(c) {
  return isPrintable(c) && c !== CHAR_BOM && c !== CHAR_CARRIAGE_RETURN && c !== CHAR_LINE_FEED;
}
function isPlainSafe(c, prev, inblock) {
  var cIsNsCharOrWhitespace = isNsCharOrWhitespace(c);
  var cIsNsChar = cIsNsCharOrWhitespace && !isWhitespace(c);
  return (
    // ns-plain-safe
    (inblock ? (
      // c = flow-in
      cIsNsCharOrWhitespace
    ) : cIsNsCharOrWhitespace && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET) && c !== CHAR_SHARP && !(prev === CHAR_COLON && !cIsNsChar) || isNsCharOrWhitespace(prev) && !isWhitespace(prev) && c === CHAR_SHARP || prev === CHAR_COLON && cIsNsChar
  );
}
function isPlainSafeFirst(c) {
  return isPrintable(c) && c !== CHAR_BOM && !isWhitespace(c) && c !== CHAR_MINUS && c !== CHAR_QUESTION && c !== CHAR_COLON && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_SHARP && c !== CHAR_AMPERSAND && c !== CHAR_ASTERISK && c !== CHAR_EXCLAMATION && c !== CHAR_VERTICAL_LINE && c !== CHAR_EQUALS && c !== CHAR_GREATER_THAN && c !== CHAR_SINGLE_QUOTE && c !== CHAR_DOUBLE_QUOTE && c !== CHAR_PERCENT && c !== CHAR_COMMERCIAL_AT && c !== CHAR_GRAVE_ACCENT;
}
function isPlainSafeLast(c) {
  return !isWhitespace(c) && c !== CHAR_COLON;
}
function codePointAt(string, pos) {
  var first = string.charCodeAt(pos), second;
  if (first >= 55296 && first <= 56319 && pos + 1 < string.length) {
    second = string.charCodeAt(pos + 1);
    if (second >= 56320 && second <= 57343) {
      return (first - 55296) * 1024 + second - 56320 + 65536;
    }
  }
  return first;
}
function needIndentIndicator(string) {
  var leadingSpaceRe = /^\n* /;
  return leadingSpaceRe.test(string);
}
var STYLE_PLAIN = 1;
var STYLE_SINGLE = 2;
var STYLE_LITERAL = 3;
var STYLE_FOLDED = 4;
var STYLE_DOUBLE = 5;
function chooseScalarStyle(string, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType, quotingType, forceQuotes, inblock) {
  var i;
  var char = 0;
  var prevChar = null;
  var hasLineBreak = false;
  var hasFoldableLine = false;
  var shouldTrackWidth = lineWidth !== -1;
  var previousLineBreak = -1;
  var plain = isPlainSafeFirst(codePointAt(string, 0)) && isPlainSafeLast(codePointAt(string, string.length - 1));
  if (singleLineOnly || forceQuotes) {
    for (i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
  } else {
    for (i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
      char = codePointAt(string, i);
      if (char === CHAR_LINE_FEED) {
        hasLineBreak = true;
        if (shouldTrackWidth) {
          hasFoldableLine = hasFoldableLine || // Foldable line = too long, and not more-indented.
          i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ";
          previousLineBreak = i;
        }
      } else if (!isPrintable(char)) {
        return STYLE_DOUBLE;
      }
      plain = plain && isPlainSafe(char, prevChar, inblock);
      prevChar = char;
    }
    hasFoldableLine = hasFoldableLine || shouldTrackWidth && (i - previousLineBreak - 1 > lineWidth && string[previousLineBreak + 1] !== " ");
  }
  if (!hasLineBreak && !hasFoldableLine) {
    if (plain && !forceQuotes && !testAmbiguousType(string)) {
      return STYLE_PLAIN;
    }
    return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
  }
  if (indentPerLevel > 9 && needIndentIndicator(string)) {
    return STYLE_DOUBLE;
  }
  if (!forceQuotes) {
    return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
  }
  return quotingType === QUOTING_TYPE_DOUBLE ? STYLE_DOUBLE : STYLE_SINGLE;
}
function writeScalar(state, string, level, iskey, inblock) {
  state.dump = (function() {
    if (string.length === 0) {
      return state.quotingType === QUOTING_TYPE_DOUBLE ? '""' : "''";
    }
    if (!state.noCompatMode) {
      if (DEPRECATED_BOOLEANS_SYNTAX.indexOf(string) !== -1 || DEPRECATED_BASE60_SYNTAX.test(string)) {
        return state.quotingType === QUOTING_TYPE_DOUBLE ? '"' + string + '"' : "'" + string + "'";
      }
    }
    var indent = state.indent * Math.max(1, level);
    var lineWidth = state.lineWidth === -1 ? -1 : Math.max(Math.min(state.lineWidth, 40), state.lineWidth - indent);
    var singleLineOnly = iskey || state.flowLevel > -1 && level >= state.flowLevel;
    function testAmbiguity(string2) {
      return testImplicitResolving(state, string2);
    }
    switch (chooseScalarStyle(
      string,
      singleLineOnly,
      state.indent,
      lineWidth,
      testAmbiguity,
      state.quotingType,
      state.forceQuotes && !iskey,
      inblock
    )) {
      case STYLE_PLAIN:
        return string;
      case STYLE_SINGLE:
        return "'" + string.replace(/'/g, "''") + "'";
      case STYLE_LITERAL:
        return "|" + blockHeader(string, state.indent) + dropEndingNewline(indentString(string, indent));
      case STYLE_FOLDED:
        return ">" + blockHeader(string, state.indent) + dropEndingNewline(indentString(foldString(string, lineWidth), indent));
      case STYLE_DOUBLE:
        return '"' + escapeString(string) + '"';
      default:
        throw new exception("impossible error: invalid scalar style");
    }
  })();
}
function blockHeader(string, indentPerLevel) {
  var indentIndicator = needIndentIndicator(string) ? String(indentPerLevel) : "";
  var clip = string[string.length - 1] === "\n";
  var keep = clip && (string[string.length - 2] === "\n" || string === "\n");
  var chomp = keep ? "+" : clip ? "" : "-";
  return indentIndicator + chomp + "\n";
}
function dropEndingNewline(string) {
  return string[string.length - 1] === "\n" ? string.slice(0, -1) : string;
}
function foldString(string, width) {
  var lineRe = /(\n+)([^\n]*)/g;
  var result = (function() {
    var nextLF = string.indexOf("\n");
    nextLF = nextLF !== -1 ? nextLF : string.length;
    lineRe.lastIndex = nextLF;
    return foldLine(string.slice(0, nextLF), width);
  })();
  var prevMoreIndented = string[0] === "\n" || string[0] === " ";
  var moreIndented;
  var match;
  while (match = lineRe.exec(string)) {
    var prefix = match[1], line = match[2];
    moreIndented = line[0] === " ";
    result += prefix + (!prevMoreIndented && !moreIndented && line !== "" ? "\n" : "") + foldLine(line, width);
    prevMoreIndented = moreIndented;
  }
  return result;
}
function foldLine(line, width) {
  if (line === "" || line[0] === " ") return line;
  var breakRe = / [^ ]/g;
  var match;
  var start = 0, end, curr = 0, next = 0;
  var result = "";
  while (match = breakRe.exec(line)) {
    next = match.index;
    if (next - start > width) {
      end = curr > start ? curr : next;
      result += "\n" + line.slice(start, end);
      start = end + 1;
    }
    curr = next;
  }
  result += "\n";
  if (line.length - start > width && curr > start) {
    result += line.slice(start, curr) + "\n" + line.slice(curr + 1);
  } else {
    result += line.slice(start);
  }
  return result.slice(1);
}
function escapeString(string) {
  var result = "";
  var char = 0;
  var escapeSeq;
  for (var i = 0; i < string.length; char >= 65536 ? i += 2 : i++) {
    char = codePointAt(string, i);
    escapeSeq = ESCAPE_SEQUENCES[char];
    if (!escapeSeq && isPrintable(char)) {
      result += string[i];
      if (char >= 65536) result += string[i + 1];
    } else {
      result += escapeSeq || encodeHex(char);
    }
  }
  return result;
}
function writeFlowSequence(state, level, object) {
  var _result = "", _tag = state.tag, index, length, value;
  for (index = 0, length = object.length; index < length; index += 1) {
    value = object[index];
    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }
    if (writeNode(state, level, value, false, false) || typeof value === "undefined" && writeNode(state, level, null, false, false)) {
      if (_result !== "") _result += "," + (!state.condenseFlow ? " " : "");
      _result += state.dump;
    }
  }
  state.tag = _tag;
  state.dump = "[" + _result + "]";
}
function writeBlockSequence(state, level, object, compact) {
  var _result = "", _tag = state.tag, index, length, value;
  for (index = 0, length = object.length; index < length; index += 1) {
    value = object[index];
    if (state.replacer) {
      value = state.replacer.call(object, String(index), value);
    }
    if (writeNode(state, level + 1, value, true, true, false, true) || typeof value === "undefined" && writeNode(state, level + 1, null, true, true, false, true)) {
      if (!compact || _result !== "") {
        _result += generateNextLine(state, level);
      }
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        _result += "-";
      } else {
        _result += "- ";
      }
      _result += state.dump;
    }
  }
  state.tag = _tag;
  state.dump = _result || "[]";
}
function writeFlowMapping(state, level, object) {
  var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, pairBuffer;
  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = "";
    if (_result !== "") pairBuffer += ", ";
    if (state.condenseFlow) pairBuffer += '"';
    objectKey = objectKeyList[index];
    objectValue = object[objectKey];
    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }
    if (!writeNode(state, level, objectKey, false, false)) {
      continue;
    }
    if (state.dump.length > 1024) pairBuffer += "? ";
    pairBuffer += state.dump + (state.condenseFlow ? '"' : "") + ":" + (state.condenseFlow ? "" : " ");
    if (!writeNode(state, level, objectValue, false, false)) {
      continue;
    }
    pairBuffer += state.dump;
    _result += pairBuffer;
  }
  state.tag = _tag;
  state.dump = "{" + _result + "}";
}
function writeBlockMapping(state, level, object, compact) {
  var _result = "", _tag = state.tag, objectKeyList = Object.keys(object), index, length, objectKey, objectValue, explicitPair, pairBuffer;
  if (state.sortKeys === true) {
    objectKeyList.sort();
  } else if (typeof state.sortKeys === "function") {
    objectKeyList.sort(state.sortKeys);
  } else if (state.sortKeys) {
    throw new exception("sortKeys must be a boolean or a function");
  }
  for (index = 0, length = objectKeyList.length; index < length; index += 1) {
    pairBuffer = "";
    if (!compact || _result !== "") {
      pairBuffer += generateNextLine(state, level);
    }
    objectKey = objectKeyList[index];
    objectValue = object[objectKey];
    if (state.replacer) {
      objectValue = state.replacer.call(object, objectKey, objectValue);
    }
    if (!writeNode(state, level + 1, objectKey, true, true, true)) {
      continue;
    }
    explicitPair = state.tag !== null && state.tag !== "?" || state.dump && state.dump.length > 1024;
    if (explicitPair) {
      if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
        pairBuffer += "?";
      } else {
        pairBuffer += "? ";
      }
    }
    pairBuffer += state.dump;
    if (explicitPair) {
      pairBuffer += generateNextLine(state, level);
    }
    if (!writeNode(state, level + 1, objectValue, true, explicitPair)) {
      continue;
    }
    if (state.dump && CHAR_LINE_FEED === state.dump.charCodeAt(0)) {
      pairBuffer += ":";
    } else {
      pairBuffer += ": ";
    }
    pairBuffer += state.dump;
    _result += pairBuffer;
  }
  state.tag = _tag;
  state.dump = _result || "{}";
}
function detectType(state, object, explicit) {
  var _result, typeList, index, length, type2, style;
  typeList = explicit ? state.explicitTypes : state.implicitTypes;
  for (index = 0, length = typeList.length; index < length; index += 1) {
    type2 = typeList[index];
    if ((type2.instanceOf || type2.predicate) && (!type2.instanceOf || typeof object === "object" && object instanceof type2.instanceOf) && (!type2.predicate || type2.predicate(object))) {
      if (explicit) {
        if (type2.multi && type2.representName) {
          state.tag = type2.representName(object);
        } else {
          state.tag = type2.tag;
        }
      } else {
        state.tag = "?";
      }
      if (type2.represent) {
        style = state.styleMap[type2.tag] || type2.defaultStyle;
        if (_toString.call(type2.represent) === "[object Function]") {
          _result = type2.represent(object, style);
        } else if (_hasOwnProperty.call(type2.represent, style)) {
          _result = type2.represent[style](object, style);
        } else {
          throw new exception("!<" + type2.tag + '> tag resolver accepts not "' + style + '" style');
        }
        state.dump = _result;
      }
      return true;
    }
  }
  return false;
}
function writeNode(state, level, object, block, compact, iskey, isblockseq) {
  state.tag = null;
  state.dump = object;
  if (!detectType(state, object, false)) {
    detectType(state, object, true);
  }
  var type2 = _toString.call(state.dump);
  var inblock = block;
  var tagStr;
  if (block) {
    block = state.flowLevel < 0 || state.flowLevel > level;
  }
  var objectOrArray = type2 === "[object Object]" || type2 === "[object Array]", duplicateIndex, duplicate;
  if (objectOrArray) {
    duplicateIndex = state.duplicates.indexOf(object);
    duplicate = duplicateIndex !== -1;
  }
  if (state.tag !== null && state.tag !== "?" || duplicate || state.indent !== 2 && level > 0) {
    compact = false;
  }
  if (duplicate && state.usedDuplicates[duplicateIndex]) {
    state.dump = "*ref_" + duplicateIndex;
  } else {
    if (objectOrArray && duplicate && !state.usedDuplicates[duplicateIndex]) {
      state.usedDuplicates[duplicateIndex] = true;
    }
    if (type2 === "[object Object]") {
      if (block && Object.keys(state.dump).length !== 0) {
        writeBlockMapping(state, level, state.dump, compact);
        if (duplicate) {
          state.dump = "&ref_" + duplicateIndex + state.dump;
        }
      } else {
        writeFlowMapping(state, level, state.dump);
        if (duplicate) {
          state.dump = "&ref_" + duplicateIndex + " " + state.dump;
        }
      }
    } else if (type2 === "[object Array]") {
      if (block && state.dump.length !== 0) {
        if (state.noArrayIndent && !isblockseq && level > 0) {
          writeBlockSequence(state, level - 1, state.dump, compact);
        } else {
          writeBlockSequence(state, level, state.dump, compact);
        }
        if (duplicate) {
          state.dump = "&ref_" + duplicateIndex + state.dump;
        }
      } else {
        writeFlowSequence(state, level, state.dump);
        if (duplicate) {
          state.dump = "&ref_" + duplicateIndex + " " + state.dump;
        }
      }
    } else if (type2 === "[object String]") {
      if (state.tag !== "?") {
        writeScalar(state, state.dump, level, iskey, inblock);
      }
    } else if (type2 === "[object Undefined]") {
      return false;
    } else {
      if (state.skipInvalid) return false;
      throw new exception("unacceptable kind of an object to dump " + type2);
    }
    if (state.tag !== null && state.tag !== "?") {
      tagStr = encodeURI(
        state.tag[0] === "!" ? state.tag.slice(1) : state.tag
      ).replace(/!/g, "%21");
      if (state.tag[0] === "!") {
        tagStr = "!" + tagStr;
      } else if (tagStr.slice(0, 18) === "tag:yaml.org,2002:") {
        tagStr = "!!" + tagStr.slice(18);
      } else {
        tagStr = "!<" + tagStr + ">";
      }
      state.dump = tagStr + " " + state.dump;
    }
  }
  return true;
}
function getDuplicateReferences(object, state) {
  var objects = [], duplicatesIndexes = [], index, length;
  inspectNode(object, objects, duplicatesIndexes);
  for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
    state.duplicates.push(objects[duplicatesIndexes[index]]);
  }
  state.usedDuplicates = new Array(length);
}
function inspectNode(object, objects, duplicatesIndexes) {
  var objectKeyList, index, length;
  if (object !== null && typeof object === "object") {
    index = objects.indexOf(object);
    if (index !== -1) {
      if (duplicatesIndexes.indexOf(index) === -1) {
        duplicatesIndexes.push(index);
      }
    } else {
      objects.push(object);
      if (Array.isArray(object)) {
        for (index = 0, length = object.length; index < length; index += 1) {
          inspectNode(object[index], objects, duplicatesIndexes);
        }
      } else {
        objectKeyList = Object.keys(object);
        for (index = 0, length = objectKeyList.length; index < length; index += 1) {
          inspectNode(object[objectKeyList[index]], objects, duplicatesIndexes);
        }
      }
    }
  }
}
function dump$1(input, options) {
  options = options || {};
  var state = new State(options);
  if (!state.noRefs) getDuplicateReferences(input, state);
  var value = input;
  if (state.replacer) {
    value = state.replacer.call({ "": value }, "", value);
  }
  if (writeNode(state, 0, value, true, true)) return state.dump + "\n";
  return "";
}
var dump_1 = dump$1;
var dumper = {
  dump: dump_1
};
function renamed(from, to) {
  return function() {
    throw new Error("Function yaml." + from + " is removed in js-yaml 4. Use yaml." + to + " instead, which is now safe by default.");
  };
}
var load = loader.load;
var loadAll = loader.loadAll;
var dump = dumper.dump;
var safeLoad = renamed("safeLoad", "load");
var safeLoadAll = renamed("safeLoadAll", "loadAll");
var safeDump = renamed("safeDump", "dump");

// ../lib/ts/dist/yaml-loader.js
function parseOctal(s) {
  if (!s)
    return 0;
  const n = parseInt(s, 8);
  if (Number.isNaN(n)) {
    throw new Error(`Invalid octal string: "${s}"`);
  }
  return n;
}
function encodingToBigInt(w4, w3, w2, w1) {
  return BigInt(parseOctal(w4)) << 48n | BigInt(parseOctal(w3)) << 32n | BigInt(parseOctal(w2)) << 16n | BigInt(parseOctal(w1));
}

// ../lib/ts/dist/disassembler.js
var TIMING_MASK = 0x00000000c200000n;
function popcount(v) {
  let count = 0;
  let x = v;
  while (x > 0n) {
    x &= x - 1n;
    count++;
  }
  return count;
}
function compileDisassemblerPack(definitions) {
  const categoryMeta = /* @__PURE__ */ new Map();
  for (const [cat, tokens] of definitions.tokensByCategory) {
    let mask = 0n;
    for (const t of tokens)
      mask |= t.encodingValue;
    const sorted = [...tokens].sort((a, b) => popcount(b.encodingValue) - popcount(a.encodingValue));
    const byValue = /* @__PURE__ */ new Map();
    for (const t of sorted) {
      if (!byValue.has(t.encodingValue)) {
        byValue.set(t.encodingValue, t);
      }
    }
    categoryMeta.set(cat, {
      category: cat,
      mask,
      tokens: sorted,
      byValue
    });
  }
  return { definitions, categoryMeta };
}
var AOP_MASK = 0x000000000000f000n;
var BOP_MASK = 0x00000000000f0000n;
var AOP_BOP_MASK = AOP_MASK | BOP_MASK;
var CATEGORY_FIELD_MASK = {
  COMM: 0x0000001f00000000n,
  // bits 36:32
  IDBS: 0x000003e000000000n,
  // bits 41:37
  T_SEQ: 0x00000000c0000000n,
  // bits 31:30
  T_STK: 0x0000000030000000n,
  // bits 29:28
  F_SEQ: 0x000000000000000cn,
  // bits 3:2
  F_STK: 0x0000000000000003n,
  // bits 1:0
  COND: 0x00000000010000f0n,
  // SCOND (bit 24) + TSEL (bits 7:4)
  ALUD: 0xe000000000000000n
  // bits 63:61
};
function findExactABReg(pack, raw) {
  const meta = pack.categoryMeta.get("AB_REG");
  if (!meta)
    return void 0;
  const rawAopBop = raw & AOP_BOP_MASK;
  for (const t of meta.tokens) {
    if ((t.encodingValue & AOP_BOP_MASK) === rawAopBop && rawAopBop !== 0n) {
      return t;
    }
  }
  return void 0;
}
function findExactRegToken(category, meta, raw, consumed) {
  const fieldMask = category === "A_REG" ? AOP_MASK : BOP_MASK;
  const rawField = raw & fieldMask;
  const available = raw & ~consumed & meta.mask;
  for (const t of meta.tokens) {
    if ((t.encodingValue & fieldMask) !== 0n)
      continue;
    if (t.encodingValue === 0n)
      continue;
    if ((t.encodingValue & available) === t.encodingValue) {
      return t;
    }
  }
  if (rawField === 0n)
    return void 0;
  let best;
  let bestBits = -1;
  for (const t of meta.tokens) {
    if ((t.encodingValue & fieldMask) !== rawField)
      continue;
    const other = t.encodingValue & ~fieldMask;
    if ((other & ~available) !== 0n)
      continue;
    const pop = popcount(t.encodingValue);
    if (pop > bestBits) {
      best = t;
      bestBits = pop;
    }
  }
  return best;
}
function findTokenInCategory(meta, raw, consumed, allowZero = false) {
  const available = raw & ~consumed & meta.mask;
  if (available === 0n && !allowZero)
    return void 0;
  const fieldMask = CATEGORY_FIELD_MASK[meta.category];
  if (fieldMask !== void 0) {
    const rawField = raw & fieldMask;
    for (const t of meta.tokens) {
      if (t.encodingValue === 0n)
        continue;
      if ((t.encodingValue & fieldMask) !== rawField)
        continue;
      const otherBits = t.encodingValue & ~fieldMask;
      if ((otherBits & available) !== otherBits)
        continue;
      return t;
    }
    return void 0;
  }
  const exact = meta.byValue.get(available);
  if (exact) {
    if (exact.encodingValue === 0n && !allowZero)
      return void 0;
    return exact;
  }
  for (const t of meta.tokens) {
    if (t.encodingValue === 0n)
      continue;
    if ((t.encodingValue & available) === t.encodingValue) {
      return t;
    }
  }
  return void 0;
}
function disassembleWord(raw, address, pack, symbols) {
  const fields = decodeFields(raw, address);
  const tokens = [];
  const state = { consumed: 0n };
  const tryEmit = (cat, line) => {
    const meta = pack.categoryMeta.get(cat);
    if (!meta)
      return void 0;
    const tok = findTokenInCategory(meta, raw, state.consumed);
    if (!tok)
      return void 0;
    state.consumed |= tok.encodingValue & ~TIMING_MASK;
    tokens.push({
      text: tok.name,
      field: cat,
      line: line ?? tok.displayLine
    });
    return tok;
  };
  const isEpic = fields.comm === 9;
  const abToken = findExactABReg(pack, raw);
  if (abToken) {
    tokens.push({ text: abToken.name, field: "AB_REG", line: 1 });
    state.consumed |= abToken.encodingValue & ~TIMING_MASK;
  }
  if (!abToken && isEpic) {
    tryEmit("PIC", 1);
  }
  if (!isEpic) {
    const aRegMeta = pack.categoryMeta.get("A_REG");
    if (aRegMeta) {
      const aTok = findExactRegToken("A_REG", aRegMeta, raw, state.consumed);
      if (aTok) {
        tokens.push({ text: aTok.name, field: "A_REG", line: 1 });
        state.consumed |= aTok.encodingValue & ~TIMING_MASK;
      } else if (!abToken && (fields.aop !== 0 || needsAop(fields, pack))) {
        emitRegister(tokens, "A_REG", fields.aop, pack, 1, state);
      }
    }
  }
  const bRegMeta = pack.categoryMeta.get("B_REG");
  if (bRegMeta) {
    const bTok = findExactRegToken("B_REG", bRegMeta, raw, state.consumed);
    if (bTok) {
      tokens.push({ text: bTok.name, field: "B_REG", line: 1 });
      state.consumed |= bTok.encodingValue & ~TIMING_MASK;
    } else if (!abToken && (fields.bop !== 0 || needsBop(fields, pack))) {
      emitRegister(tokens, "B_REG", fields.bop, pack, 1, state);
    }
  }
  tryEmit("ALUF", 1);
  tryEmit("ALUD", 1);
  if (fields.aluSts !== 0)
    tryEmit("STS", 1);
  if (fields.cin !== 0)
    tryEmit("CRY", 1);
  if (fields.xrf !== 0) {
    const xrf = pack.definitions.tokensByName.get("XRF");
    if (xrf) {
      tokens.push({ text: "XRF", field: "SPECIAL", line: 1 });
      state.consumed |= xrf.encodingValue;
    }
  }
  tryEmit("IDBS", 2);
  tryEmit("COMM", 2);
  if (fields.alum !== 0)
    tryEmit("ALUM", 1);
  if (fields.mis !== 0)
    tryEmit("MIS", 1);
  const tSeqTok = tryEmit("T_SEQ", 2);
  if (!tSeqTok && isBranchLikelyPresent(fields)) {
    emitByName(tokens, "T,JMP", 2, pack);
  }
  const vectBit = 1n << 25n;
  if ((raw & vectBit) !== 0n && (state.consumed & vectBit) === 0n) {
    const bit42_43 = 1n << 42n | 1n << 43n;
    if ((raw & bit42_43) === bit42_43) {
      emitByName(tokens, "T,JMPAOPR", 2, pack);
    } else {
      emitByName(tokens, "T,JMP0-3", 2, pack);
    }
    state.consumed |= vectBit;
  }
  if (fields.tStk !== 0) {
    tryEmit("T_STK", 2);
  } else if (tSeqTok !== void 0 || isBranchLikelyPresent(fields)) {
    emitByName(tokens, "T,HOLD", 2, pack);
  }
  if (fields.loop === 1) {
    emitByName(tokens, "LCOUNT", 2, pack);
  }
  if (fields.scond === 1) {
    tryEmit("COND", 3);
    if (fields.fSeq !== 0) {
      tryEmit("F_SEQ", 3);
    } else {
      emitByName(tokens, "F,JMP", 3, pack);
    }
    if (fields.fStk !== 0) {
      tryEmit("F_STK", 3);
    } else {
      emitByName(tokens, "F,HOLD", 3, pack);
    }
    if (fields.lcc !== 0) {
      const lccValue = fields.lcc << 8;
      tokens.push({
        text: toOctal(lccValue),
        field: "COND",
        line: 3
      });
    }
    if (fields.condEnabl === 1) {
      tokens.push({ text: "CONDENABL", field: "SPECIAL", line: 3 });
    }
  } else if (fields.condEnabl === 1) {
    emitBranchTarget(tokens, fields, symbols);
    tokens.push({ text: "CONDENABL", field: "SPECIAL", line: 3 });
  } else if (isBranchLikelyPresent(fields)) {
    emitBranchTarget(tokens, fields, symbols);
  }
  return {
    address,
    raw,
    label: symbols?.get(address),
    tokens,
    fields
  };
}
function emitRegister(out, category, index, pack, line, state) {
  const namedPrefix = category === "A_REG" ? "A," : "B,";
  const names = [
    "Z",
    "D",
    "P",
    "B",
    "L",
    "A",
    "T",
    "X",
    "STS",
    "R1",
    "R2",
    "R3",
    "R4",
    "R5",
    "R6",
    "R7"
  ];
  const name = namedPrefix + names[index];
  const token = pack.definitions.tokensByName.get(name);
  if (token) {
    out.push({ text: token.name, field: category, line });
    state.consumed |= token.encodingValue;
  }
}
function emitByName(out, name, line, pack) {
  const token = pack.definitions.tokensByName.get(name);
  if (!token)
    return;
  out.push({ text: token.name, field: token.category, line });
}
function emitBranchTarget(out, fields, symbols) {
  const addr = fields.branchAddress;
  const label = symbols?.get(addr);
  out.push({
    text: label ?? toOctal(addr),
    field: "BRANCH",
    line: 3
  });
}
function isBranchLikelyPresent(fields) {
  return fields.scond === 0 && (fields.csbit11_0 !== 0 || fields.csbit20 === 1 || fields.tSeq === 0);
}
function needsAop(fields, pack) {
  const idbsNeedsA = [1, 5, 12].includes(fields.idbs);
  const commNeedsA = [3, 9].includes(fields.comm);
  if (idbsNeedsA || commNeedsA)
    return true;
  if (fields.aluI === 0)
    return false;
  const aluTokens = pack.definitions.tokensByCategory.get("ALUF") ?? [];
  for (const t of aluTokens) {
    const tokenAluI = Number(t.encodingValue >> 55n & 0x1ffn);
    if (tokenAluI === fields.aluI && (t.requires === "A" || t.requires === "AB")) {
      return true;
    }
  }
  return false;
}
function needsBop(fields, pack) {
  const idbsNeedsB = [5, 8].includes(fields.idbs);
  const commNeedsB = [3].includes(fields.comm);
  if (idbsNeedsB || commNeedsB)
    return true;
  if (fields.aluI === 0)
    return false;
  const aluTokens = pack.definitions.tokensByCategory.get("ALUF") ?? [];
  for (const t of aluTokens) {
    const tokenAluI = Number(t.encodingValue >> 55n & 0x1ffn);
    if (tokenAluI === fields.aluI && (t.requires === "B" || t.requires === "AB")) {
      return true;
    }
  }
  return false;
}
function disassembleMap(records, pack, symbols) {
  const addrs = [...records.keys()].sort((a, b) => a - b);
  return addrs.map((addr) => disassembleWord(records.get(addr), addr, pack, symbols));
}

// ../lib/ts/dist/formatter.js
var DEFAULTS = {
  continuationIndent: "          ",
  // 10 spaces - matches RASK source
  alignColumns: false,
  includeTerminator: true,
  collapseSingleLine: true
};
function groupByLine(tokens) {
  const groups = /* @__PURE__ */ new Map([
    [1, []],
    [2, []],
    [3, []]
  ]);
  for (const t of tokens) {
    groups.get(t.line).push(t);
  }
  return groups;
}
function renderLine(tokens) {
  return tokens.map((t) => t.text).join(" ");
}
function formatInstruction(instr, options = {}) {
  const opts = { ...DEFAULTS, ...options };
  const groups = groupByLine(instr.tokens);
  const line1 = renderLine(groups.get(1));
  const line2 = renderLine(groups.get(2));
  const line3 = renderLine(groups.get(3));
  const nonEmpty = [line1, line2, line3].filter((l) => l.length > 0);
  if (nonEmpty.length === 0) {
    return {
      address: instr.address,
      lines: [opts.includeTerminator ? ";" : ""],
      label: instr.label
    };
  }
  if (opts.collapseSingleLine && nonEmpty.length === 1) {
    const text = nonEmpty[0] + (opts.includeTerminator ? ";" : "");
    return {
      address: instr.address,
      lines: [text],
      label: instr.label
    };
  }
  const lines = [];
  if (line1)
    lines.push(line1);
  if (line2)
    lines.push((lines.length === 0 ? "" : opts.continuationIndent) + line2);
  if (line3)
    lines.push((lines.length === 0 ? "" : opts.continuationIndent) + line3);
  if (opts.includeTerminator && lines.length > 0) {
    lines[lines.length - 1] = lines[lines.length - 1] + ";";
  }
  return {
    address: instr.address,
    lines,
    label: instr.label
  };
}
function formatProgram(instructions, options = {}) {
  const opts = { ...DEFAULTS, ...options };
  const out = [];
  let expectedAddr = -1;
  const syntheticLabels = /* @__PURE__ */ new Map();
  for (const instr of instructions) {
    const target = instr.fields.branchAddress;
    if (target >= 4096 && instr.fields.scond === 0) {
      if (!syntheticLabels.has(target)) {
        syntheticLabels.set(target, `_L${toOctal(target).padStart(6, "0")}`);
      }
    }
  }
  const workingInstrs = instructions.map((instr) => {
    const synth = syntheticLabels.get(instr.address);
    const workingLabel = instr.label ?? synth;
    let workingTokens = instr.tokens;
    if (instr.fields.scond === 0 && instr.fields.branchAddress >= 4096) {
      const synthTargetName = syntheticLabels.get(instr.fields.branchAddress);
      if (synthTargetName) {
        workingTokens = instr.tokens.map((t) => {
          if (t.field === "BRANCH" && /^[0-7]+$/.test(t.text)) {
            return { ...t, text: synthTargetName };
          }
          return t;
        });
      }
    }
    return { ...instr, label: workingLabel, tokens: workingTokens };
  });
  for (const instr of workingInstrs) {
    if (instr.address !== expectedAddr) {
      out.push("");
      out.push(toOctal(instr.address) + "/");
    }
    if (instr.label) {
      out.push(instr.label + ":");
    }
    const formatted = formatInstruction(instr, opts);
    for (const line of formatted.lines) {
      if (line.startsWith(opts.continuationIndent)) {
        out.push(line);
      } else {
        out.push(opts.continuationIndent + line);
      }
    }
    expectedAddr = instr.address + 1;
  }
  return out.join("\n");
}

// ../lib/ts/dist/assembler.js
function parseNumericLiteral(s) {
  const v = s.trim();
  if (!v)
    return NaN;
  if (v[0] === "d" || v[0] === "D") {
    const n = Number.parseInt(v.slice(1), 10);
    return Number.isNaN(n) ? NaN : n;
  }
  if (v.startsWith("0x") || v.startsWith("0X")) {
    const n = Number.parseInt(v.slice(2), 16);
    return Number.isNaN(n) ? NaN : n;
  }
  if (v[0] === "$") {
    const n = Number.parseInt(v.slice(1), 16);
    return Number.isNaN(n) ? NaN : n;
  }
  if (v[0] === "o" || v[0] === "O") {
    const n = Number.parseInt(v.slice(1), 8);
    return Number.isNaN(n) ? NaN : n;
  }
  if (!/^[0-7]+$/.test(v))
    return NaN;
  return Number.parseInt(v, 8);
}
function preprocess(source) {
  const labels = /* @__PURE__ */ new Map();
  const labelDefs = [];
  const instructions = [];
  let address = 0;
  let pending = "";
  let pendingLine = 0;
  const lines = source.replace(/\r/g, "").split("\n");
  for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
    const lineNo = lineIdx + 1;
    let line = lines[lineIdx];
    line = line.replace(/ ,/g, ",").replace(/, /g, ",");
    const pctIdx = line.indexOf("%");
    if (pctIdx >= 0)
      line = line.slice(0, pctIdx);
    const slashIdx = line.indexOf("/");
    if (slashIdx >= 0) {
      const addrText = line.slice(0, slashIdx).trim();
      const parsed = parseNumericLiteral(addrText);
      if (!Number.isNaN(parsed) && parsed >= 0) {
        address = parsed;
      }
      line = line.slice(slashIdx + 1);
    }
    const colonIdx = line.indexOf(":");
    if (colonIdx >= 0 && colonIdx < 30) {
      const name = line.slice(0, colonIdx).trim();
      if (name) {
        if (!labels.has(name)) {
          labels.set(name, address);
          labelDefs.push({ name, address, line: lineNo });
        }
      }
      line = line.slice(colonIdx + 1);
    }
    if (pending.trim() === "")
      pendingLine = lineNo;
    pending += " " + line;
    const semiIdx = pending.indexOf(";");
    if (semiIdx >= 0) {
      const body = pending.slice(0, semiIdx);
      const args = body.split(/\s+/).map((s) => s.trim()).filter((s) => s.length > 0);
      instructions.push({
        address,
        line: pendingLine || lineNo,
        args
      });
      address = address + 1 & 65535;
      pending = pending.slice(semiIdx + 1);
      pendingLine = lineNo;
    }
  }
  return { instructions, labels, labelDefs };
}
var JUMP_CONTEXT_TOKENS = /* @__PURE__ */ new Set([
  "T,JMP",
  "T,JMP0-3",
  "T,JMPAOPR"
]);
function translateInstruction(instr, pack, labels, diagnostics) {
  let isJumpContext = false;
  let hasCondToken = false;
  for (const arg of instr.args) {
    if (JUMP_CONTEXT_TOKENS.has(arg))
      isJumpContext = true;
    if (arg.startsWith("COND,"))
      hasCondToken = true;
  }
  const splitNumerics = isJumpContext && !hasCondToken;
  let value = 0n;
  for (const arg of instr.args) {
    const token = pack.tokensByName.get(arg);
    if (token) {
      value |= token.encodingValue;
      continue;
    }
    if (labels.has(arg)) {
      const addr = labels.get(arg);
      value |= BigInt(addr & 4095);
      value |= BigInt(addr >> 12 & 1) << 20n;
      continue;
    }
    const numeric = parseNumericLiteral(arg);
    if (!Number.isNaN(numeric)) {
      if (splitNumerics && numeric >= 0 && numeric <= 8191) {
        value |= BigInt(numeric & 4095);
        value |= BigInt(numeric >> 12 & 1) << 20n;
      } else {
        value |= BigInt(numeric & 65535);
      }
      continue;
    }
    diagnostics.push({
      severity: "warning",
      line: instr.line,
      address: instr.address,
      message: `Unknown token: "${arg}" (ignored)`
    });
  }
  return value;
}
function assembleSource(source, pack, options = {}) {
  const model = options.model ?? "nd110";
  const sourceMap = preprocess(source);
  const diagnostics = [];
  const binary2 = /* @__PURE__ */ new Map();
  for (const instr of sourceMap.instructions) {
    let value = translateInstruction(instr, pack, sourceMap.labels, diagnostics);
    if (model === "nd110") {
      value ^= ND110_XOR_MASK;
    }
    if (binary2.has(instr.address)) {
      diagnostics.push({
        severity: "warning",
        line: instr.line,
        address: instr.address,
        message: `Duplicate address 0o${instr.address.toString(8)} - overwriting previous definition`
      });
    }
    binary2.set(instr.address, value);
  }
  return { binary: binary2, sourceMap, diagnostics };
}
function binaryToCodeBytes(binary2) {
  const addrs = [...binary2.keys()].sort((a, b) => a - b);
  const out = new Uint8Array(addrs.length * 10);
  let pos = 0;
  for (const addr of addrs) {
    out[pos++] = addr & 255;
    out[pos++] = addr >> 8 & 255;
    let v = binary2.get(addr);
    for (let j = 0; j < 8; j++) {
      out[pos++] = Number(v & 0xffn);
      v >>= 8n;
    }
  }
  return out;
}

// ../lib/ts/dist/rom-combiner.js
var ROM_WORDS = 8192;
var ROM_SIZE_BYTES = ROM_WORDS * 4;
function splitRoms(microcode, options = {}) {
  const wordCount = options.wordCount ?? ROM_WORDS;
  const byteSize = wordCount * 4;
  const highChip = new Uint8Array(byteSize);
  const lowChip = new Uint8Array(byteSize);
  const xorFlip = options.xorFlip ?? false;
  const fillMode = options.fill ?? "empty";
  const emptyValue = fillMode === "zero" ? 0n : xorFlip ? 0n : ND110_XOR_MASK;
  for (let addr = 0; addr < wordCount; addr++) {
    let value = microcode.get(addr);
    if (value === void 0)
      value = emptyValue;
    if (xorFlip)
      value ^= ND110_XOR_MASK;
    const base = addr * 4;
    for (let b = 0; b < 4; b++) {
      const word16 = Number(value >> BigInt(b * 16) & 0xffffn);
      highChip[base + b] = word16 >> 8 & 255;
      lowChip[base + b] = word16 & 255;
    }
  }
  return { highChip, lowChip };
}
function detectForm(microcode) {
  const canonicalBits22_27ByComm = [
    /* 0o00 */
    0,
    // no COMM issued; canonical 0
    /* 0o01 */
    0,
    // LDPIL       - 0 in 22-27
    /* 0o02 */
    0,
    // LDGPR       - 0
    /* 0o03 */
    32,
    // EWRF      - bit 27
    /* 0o04 */
    0,
    // CLIRQ
    /* 0o05 */
    0,
    // RSDA
    /* 0o06 */
    null,
    // TBSTR/LDPANC/LDPCR - bits 42,43 subselect, 22-27 vary
    /* 0o07 */
    0,
    // SIOC
    /* 0o10 */
    0,
    // SLOW1/SLOW2
    /* 0o11 */
    0,
    // EPIC
    /* 0o12 */
    32,
    // SMPID      - bit 27
    /* 0o13 */
    0,
    // START
    /* 0o14 */
    0,
    // SSTOP
    /* 0o15 */
    0,
    // CLRTC
    /* 0o16 */
    0,
    // CLFF
    /* 0o17 */
    32,
    // LDLC      - bit 27 (from w2="004000")
    /* 0o20 */
    34,
    // LDSEG/LDDOMI/LDPS/LDIRV - bit 21 + 27 (ignoring sub-select)
    /* 0o21 */
    34,
    // WCIHM + sub-selects
    /* 0o22 */
    2,
    // IREAD,PT + sub-selects (no bit 27 for IREAD!)
    /* 0o23 */
    34,
    // CJMP family
    /* 0o24 */
    34,
    // CNEXT family
    /* 0o25 */
    34,
    // CNEXT F15/F=0 family
    /* 0o26 */
    18,
    // JMP,* family - bit 21 + 26
    /* 0o27 */
    null,
    // JMP,XB/XI/LBCONT/CONTINUE - inconsistent
    /* 0o30 */
    2,
    // AREAD,* family - only bit 21
    /* 0o31 */
    2,
    // AREAD cont'd
    /* 0o32 */
    2,
    // AWRITE,* family
    /* 0o33 */
    2,
    // AWRITE cont'd
    /* 0o34 */
    2,
    // RDRQ,*
    /* 0o35 */
    2,
    // WRRQ,*
    /* 0o36 */
    null,
    // ADCS/RWCS/WLBR/WALBR - varies
    /* 0o37 */
    2
    // IDENT/IOX
  ];
  const emptyToken = ND110_XOR_MASK;
  let matchCanonical = 0;
  let matchTokenForm = 0;
  let nonEmpty = 0;
  for (const [, v] of microcode) {
    if (v === 0n || v === emptyToken)
      continue;
    nonEmpty++;
    const commField = Number(v >> 32n & 0x1fn);
    const expected = canonicalBits22_27ByComm[commField];
    if (expected === null || expected === void 0)
      continue;
    const observedBits22_27 = Number(v >> 22n & 0x3fn);
    if (observedBits22_27 === expected) {
      matchCanonical++;
    } else if (observedBits22_27 === (expected ^ 63)) {
      matchTokenForm++;
    }
  }
  const total = matchCanonical + matchTokenForm;
  if (total === 0) {
    return {
      form: "nd110",
      flagBitRatio: 0,
      confidence: 0,
      nonEmptyCount: nonEmpty
    };
  }
  const tokenFormRatio = matchTokenForm / total;
  const form = tokenFormRatio > 0.5 ? "nd110" : "nd120";
  const confidence = Math.abs(tokenFormRatio - 0.5) * 2;
  return {
    form,
    flagBitRatio: tokenFormRatio,
    confidence,
    nonEmptyCount: nonEmpty
  };
}
function readMicrocodeVersion(microcode) {
  const word = microcode.get(16);
  if (word === void 0)
    return void 0;
  const value = Number(word & 0xffn);
  const letter = value >= 1 && value <= 26 ? String.fromCharCode(64 + value) : "?";
  return {
    octalValue: "0o" + value.toString(8),
    decimalValue: value,
    letter
  };
}

// src/generated/definitions.json
var definitions_default = { generatedAt: "2026-04-16T11:00:18.581Z", nd110Tokens: { model: "ND-110", token_count: 356, tokens: [{ token: "A,Z", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000000" }, description: "A-OP. IS O. USED TO ADDR. ZERO REG., STATUS OR SCRATCH", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,D", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "010000" }, description: "A-OP. IS 1. USED TO ADDR. THE D-REGISTER", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,P", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "020000" }, description: "A-OP. IS 2. USED TO ADDR. THE P-REGISTER", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,B", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "030000" }, description: "A-OP. IS 3. USED TO ADDR. THE B-REGISTER", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,L", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "040000" }, description: "A-OP. IS 4. USED TO ADDR. THE L-REGISTER", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,A", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "050000" }, description: "A-OP. IS 5. USED TO ADDR. THE A-REGISTER", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,T", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "060000" }, description: "A-OP. IS 6. USED TO ADDR. THE T-REGISTER", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,X", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "070000" }, description: "A-OP. IS 7. USED TO ADDR. THE X-REGISTER", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,STS", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "100000" }, description: "A-OP. IS 10. USED TO ADDR. REGISTER 10, STATUS OR SCRATCH", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,R1", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "110000" }, description: "A-OP. IS 11. USED TO ADDR. REGISTER 11, ADDRESS OR SCRATCH", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,R2", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "120000" }, description: "A-OP. IS 12. USED TO ADDR. REGISTER 12, SCRATCH", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,R3", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "130000" }, description: "A-OP. IS 13. USED TO ADDR. REGISTER 13, SCRATCH", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,R4", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "140000" }, description: "A-OP. IS 14. USED TO ADDR. REGISTER 14, SCRATCH", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,R5", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "150000" }, description: "A-OP. IS 15. USED TO ADDR. REGISTER 15, SCRATCH", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,R6", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "160000" }, description: "A-OP. IS 16. USED TO ADDA. REGISTER 16, SCRATCH", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,R7", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "170000" }, description: "A-OP. IS 17. USED TO ADDR. REGISTER 17, SCRATCH", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,PIL", category: "A_REG", display_line: 1, encoding: { w4: "000010", w3: "000000", w2: "000000", w1: "000000" }, description: "A-OP. IS VALUE IN 'PIL' REGISTER, LOADED BY 'COMM, LDPIL'", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,REG", category: "A_REG", display_line: 1, encoding: { w4: "000020", w3: "000000", w2: "000000", w1: "000000" }, description: "A-OP. IS VALUE OF 'INSTR. BITS 3-6' LOADED BY LAST 'T,MAPJ'", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,SRCE", category: "A_REG", display_line: 1, encoding: { w4: "000024", w3: "000000", w2: "000000", w1: "000000" }, description: "A-OP. IS VALUE OF 'INSTR. BITS 3-5' LOADED BY LAST 'T,MAPJ'", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,LC", category: "A_REG", display_line: 1, encoding: { w4: "000030", w3: "000000", w2: "000000", w1: "000000" }, description: "A-OP. IS VALUE OF 'LOOP COUNTER' TWO MICROINSTRUCTIONS AGO", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "PIC,RSTS", category: "PIC", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "060000" }, description: "A-OP. IS 6. USED TO GIVE 'READ STATUS' CMD. TO INTSYS", provides: "PIC", models: ["nd100", "nd110", "nd120"] }, { token: "PIC,MCL", category: "PIC", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000000" }, description: "A-OP. IS 0. USED TO GIVE 'MASTER CLEAR' CMD. TO INTSYS", provides: "PIC", models: ["nd100", "nd110", "nd120"] }, { token: "PIC,MCLPID", category: "PIC", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "020000" }, description: "A-OP. IS 2. USED TO GIVE 'MASKED CLEAR PID' CMD. TO INTSYS", provides: "PIC", models: ["nd100", "nd110", "nd120"] }, { token: "PIC,RMSK", category: "PIC", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "070000" }, description: "A-OP. IS 7. USED TO GIVE 'READ MASK' CMD. TO INTSYS", provides: "PIC", models: ["nd100", "nd110", "nd120"] }, { token: "PIC,LOSTS", category: "PIC", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "110000" }, description: "A-OP. IS 11. USED TO GIVE 'LOAD STATUS' CMD. TO INTSYS", provides: "PIC", models: ["nd100", "nd110", "nd120"] }, { token: "PIC,LMSK", category: "PIC", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "160000" }, description: "A-OP. IS 16. USED TO GIVE 'LOAD MASK' CMD. TO INTSYS", provides: "PIC", models: ["nd100", "nd110", "nd120"] }, { token: "PIC,MCLMSK", category: "PIC", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "120000" }, description: "A-OP. IS 12. USED TO GIVE 'MASKED CLEAR MASK' CMD TO INTSYS", provides: "PIC", models: ["nd100", "nd110", "nd120"] }, { token: "PIC,IOF", category: "PIC", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "150000" }, description: "A-OP. IS 15. USED TO GIVE 'IOF' CMD. TO INTSYS", provides: "PIC", models: ["nd100", "nd110", "nd120"] }, { token: "PIC,ION", category: "PIC", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "170000" }, description: "A-OP. IS 17. USED TO GIVE 'ION' CMD. TO INTSYS", provides: "PIC", models: ["nd100", "nd110", "nd120"] }, { token: "PIC,MSTMSK", category: "PIC", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "130000" }, description: "A-OP. IS 13. USED TO GIVE 'MASKED SET MASK' CMD. TO INTSYS", provides: "PIC", models: ["nd100", "nd110", "nd120"] }, { token: "PIC,RVECT", category: "PIC", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "050000" }, description: "A-OP. IS 5. USED TO GIVE 'READ-VECTOR' COMMAND TO INTSYS", provides: "PIC", models: ["nd100", "nd110", "nd120"] }, { token: "A,0", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000000" }, description: "A-OP. IS 0", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,1", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "010000" }, description: "A-OP. IS 1", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,2", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "020000" }, description: "A-OP. IS 2", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,3", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "030000" }, description: "A-OP. IS 3", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,4", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "040000" }, description: "A-OP. IS 4", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,5", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "050000" }, description: "A-OP. IS 5", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,6", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "060000" }, description: "A-OP. IS 6", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,7", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "070000" }, description: "A-OP. IS 7", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,10", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "100000" }, description: "A-OP. IS 10", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,11", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "110000" }, description: "A-OP. IS 11", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,12", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "120000" }, description: "A-OP. IS 12", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,13", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "130000" }, description: "A-OP. IS 13", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,14", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "140000" }, description: "A-OP. IS 14", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,15", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "150000" }, description: "A-OP. IS 15", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,16", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "160000" }, description: "A-OP. IS 16", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,17", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "170000" }, description: "A-OP. IS 17", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "B,Z", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000000" }, description: "B-OP. IS O. USED TO ADDR. ZERO REG. , STATUS OR SCRATCH", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,D", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000001", w1: "000000" }, description: "B-OP. IS 1. USED TO ADDR. THE D-REGISTER", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,P", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "004002", w1: "000000" }, description: "B-OP. IS 2. USED TO ADDR. THE P-REGISTER", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,B", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "004003", w1: "000000" }, description: "B-OP. IS 3. USED TO ADDR. THE B-REGISTER", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,L", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000004", w1: "000000" }, description: "B-OP. IS 4. USED TO ADDR. THE L-REGISTER", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,A", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000005", w1: "000000" }, description: "B-OP. IS 5. USED TO ADDR. THE A-REGISTER", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,T", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000006", w1: "000000" }, description: "B-OP. IS 6. USED TO ADDR. THE T-REGISTER", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,X", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "004007", w1: "000000" }, description: "B-OP. IS 7. USED TO ADDR. THE X-REGISTER", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,STS", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000010", w1: "000000" }, description: "B-OP. IS 10. USED TO ADDR. REG. 10, STATUS OR SCRATCH", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,R1", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000011", w1: "000000" }, description: "B-OP. IS 11. USED TO ADDR. REG. 11, ADDR. OR SCRATCH", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,R2", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000012", w1: "000000" }, description: "B-OP. IS 12. USED TO ADDR. REG. 12, SCRATCH", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,R3", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000013", w1: "000000" }, description: "B-OP, IS 13. USED TO ADDR. REG. 13. SCRATCH", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,R4", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000014", w1: "000000" }, description: "B-OP. IS 14. USED TO ADDR. REG. 14. SCRATCH", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,R5", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000015", w1: "000000" }, description: "B-OP. IS 15. USED TO ADDR. REG. 15, SCRATCH", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,R6", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000016", w1: "000000" }, description: "B-OP. IS 16. USED TO ADDR. REG. 16, SCRATCH", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,R7", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000017", w1: "000000" }, description: "B-OP. IS 17. USED TO ADDR. REG. 17, SCRATCH", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,DEST", category: "B_REG", display_line: 1, encoding: { w4: "000001", w3: "000000", w2: "000000", w1: "000000" }, description: "B-OP. IS VALUE OF 'INSTR. BITS 0-2' LOADED BY LAST 'T,MAPJ'", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,SRCE", category: "B_REG", display_line: 1, encoding: { w4: "000002", w3: "000000", w2: "000000", w1: "000000" }, description: "B-OP. IS VALUE OF 'INSTR. BITS 3-5' LOADED BY LAST 'T,MAPJ'", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,LC", category: "B_REG", display_line: 1, encoding: { w4: "000003", w3: "000000", w2: "000000", w1: "000000" }, description: "B-OP. IS VALUE OF THE 'LOOP COUNTER' TWO INSTRUCTIONS AGO", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,0", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000000" }, description: "B-OP. IS 0", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,1", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000001", w1: "000000" }, description: "B-OP. IS 1", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,2", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000002", w1: "000000" }, description: "B-OP. IS 2", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,3", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000003", w1: "000000" }, description: "B-OP. IS 3", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,4", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000004", w1: "000000" }, description: "B-OP. IS 4", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,5", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000005", w1: "000000" }, description: "B-OP. IS 5", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,6", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000006", w1: "000000" }, description: "B-OP. IS 6", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,7", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000007", w1: "000000" }, description: "B-OP. IS 7", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,10", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000010", w1: "000000" }, description: "B-OP. IS 10", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,11", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000011", w1: "000000" }, description: "B-OP. IS 11", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,12", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000012", w1: "000000" }, description: "B-OP. IS 12", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,13", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000013", w1: "000000" }, description: "B-OP. IS 13", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,14", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000014", w1: "000000" }, description: "B-OP. IS 14", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,15", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000015", w1: "000000" }, description: "B-OP. IS 15", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,16", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000016", w1: "000000" }, description: "B-OP. IS 16", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,17", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000017", w1: "000000" }, description: "B-OP. IS 17", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,ANDAQ", category: "ALUF", display_line: 1, encoding: { w4: "010000", w3: "000000", w2: "000000", w1: "000000" }, description: "A /\\ Q -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,ANDAB", category: "ALUF", display_line: 1, encoding: { w4: "010200", w3: "000000", w2: "000000", w1: "000000" }, description: "A /\\ B -> F", requires: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,ANDDA", category: "ALUF", display_line: 1, encoding: { w4: "011200", w3: "000000", w2: "000000", w1: "000000" }, description: "D /\\ A -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,ANDDQ", category: "ALUF", display_line: 1, encoding: { w4: "011400", w3: "000000", w2: "000000", w1: "000000" }, description: "D /\\ Q -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,ORAQ", category: "ALUF", display_line: 1, encoding: { w4: "006000", w3: "000000", w2: "000000", w1: "000000" }, description: "A \\/ Q -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,ORAB", category: "ALUF", display_line: 1, encoding: { w4: "006200", w3: "000000", w2: "000000", w1: "000000" }, description: "A \\/ B -> F", requires: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,ORDA", category: "ALUF", display_line: 1, encoding: { w4: "007200", w3: "000000", w2: "000000", w1: "000000" }, description: "D \\/ A -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,ORDQ", category: "ALUF", display_line: 1, encoding: { w4: "007400", w3: "000000", w2: "000000", w1: "000000" }, description: "D \\/ Q -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,XORAQ", category: "ALUF", display_line: 1, encoding: { w4: "014000", w3: "000000", w2: "000000", w1: "000000" }, description: "A XOR Q -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,XORAB", category: "ALUF", display_line: 1, encoding: { w4: "014200", w3: "000000", w2: "000000", w1: "000000" }, description: "A XOR B -> F", requires: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,XORDA", category: "ALUF", display_line: 1, encoding: { w4: "015200", w3: "000000", w2: "000000", w1: "000000" }, description: "D XOR A -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,XORDQ", category: "ALUF", display_line: 1, encoding: { w4: "015400", w3: "000000", w2: "000000", w1: "000000" }, description: "D XOR Q -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,XNORAQ", category: "ALUF", display_line: 1, encoding: { w4: "016000", w3: "000000", w2: "000000", w1: "000000" }, description: "NOT(A XOR Q) -> F", requires: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,XNORAB", category: "ALUF", display_line: 1, encoding: { w4: "016200", w3: "000000", w2: "000000", w1: "000000" }, description: "NOT(A XOR B) -> F", requires: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,XNORDA", category: "ALUF", display_line: 1, encoding: { w4: "017200", w3: "000000", w2: "000000", w1: "000000" }, description: "NOT(D XOR A) -> F", requires: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,XNORDQ", category: "ALUF", display_line: 1, encoding: { w4: "017400", w3: "000000", w2: "000000", w1: "000000" }, description: "NOT(D XOR Q) -> F", requires: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,ZERO", category: "ALUF", display_line: 1, encoding: { w4: "010400", w3: "000000", w2: "000000", w1: "000000" }, description: "0 -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,INVQ", category: "ALUF", display_line: 1, encoding: { w4: "016400", w3: "000000", w2: "000000", w1: "000000" }, description: "NOT(Q) -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,INVB", category: "ALUF", display_line: 1, encoding: { w4: "016600", w3: "000000", w2: "000000", w1: "000000" }, description: "NOT(B) -> F", requires: "B", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,INVA", category: "ALUF", display_line: 1, encoding: { w4: "017000", w3: "000000", w2: "000000", w1: "000000" }, description: "NOT(A) -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,INVD", category: "ALUF", display_line: 1, encoding: { w4: "017600", w3: "000000", w2: "000000", w1: "000000" }, description: "NOT(D) -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,PASSQ", category: "ALUF", display_line: 1, encoding: { w4: "014400", w3: "000000", w2: "000000", w1: "000000" }, description: "Q -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,PASSB", category: "ALUF", display_line: 1, encoding: { w4: "014600", w3: "000000", w2: "000000", w1: "000000" }, description: "B -> F", requires: "B", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,PASSA", category: "ALUF", display_line: 1, encoding: { w4: "015000", w3: "000000", w2: "000000", w1: "000000" }, description: "A -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,PASSD", category: "ALUF", display_line: 1, encoding: { w4: "015600", w3: "000000", w2: "000000", w1: "000000" }, description: "D -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,MASKAQ", category: "ALUF", display_line: 1, encoding: { w4: "012000", w3: "000000", w2: "000000", w1: "000000" }, description: "NOT(A) /\\ Q -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,MASKAB", category: "ALUF", display_line: 1, encoding: { w4: "012200", w3: "000000", w2: "000000", w1: "000000" }, description: "NOT(A) /\\ B -> F", requires: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,MASKDA", category: "ALUF", display_line: 1, encoding: { w4: "013200", w3: "000000", w2: "000000", w1: "000000" }, description: "NOT(D) /\\ A -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,MASKDQ", category: "ALUF", display_line: 1, encoding: { w4: "013400", w3: "000000", w2: "000000", w1: "000000" }, description: "NOT(D) /\\ Q -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,A+Q", category: "ALUF", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000000" }, description: "A + Q -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,A+B", category: "ALUF", display_line: 1, encoding: { w4: "000200", w3: "000000", w2: "000000", w1: "000000" }, description: "A + B -> F", requires: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,D+A", category: "ALUF", display_line: 1, encoding: { w4: "001200", w3: "000000", w2: "000000", w1: "000000" }, description: "D + A -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,D+Q", category: "ALUF", display_line: 1, encoding: { w4: "001400", w3: "000000", w2: "000000", w1: "000000" }, description: "D + Q -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,A+Q+1", category: "ALUF", display_line: 1, encoding: { w4: "000000", w3: "040000", w2: "000000", w1: "000000" }, description: "A + Q * 1 -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,A+B+1", category: "ALUF", display_line: 1, encoding: { w4: "000200", w3: "040000", w2: "000000", w1: "000000" }, description: "A + B + 1 - >", requires: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,D+A+1", category: "ALUF", display_line: 1, encoding: { w4: "001200", w3: "040000", w2: "000000", w1: "000000" }, description: "D + A + 1 -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,D+Q+1", category: "ALUF", display_line: 1, encoding: { w4: "001400", w3: "040000", w2: "000000", w1: "000000" }, description: "D + Q + 1 - > F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,-Q-1", category: "ALUF", display_line: 1, encoding: { w4: "004400", w3: "000000", w2: "000000", w1: "000000" }, description: "-Q - 1 -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,-B-1", category: "ALUF", display_line: 1, encoding: { w4: "004600", w3: "000000", w2: "000000", w1: "000000" }, description: "-B - 1 -> F", requires: "B", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,-A-1", category: "ALUF", display_line: 1, encoding: { w4: "005000", w3: "000000", w2: "000000", w1: "000000" }, description: "-A - 1 -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,-D-1", category: "ALUF", display_line: 1, encoding: { w4: "003600", w3: "000000", w2: "000000", w1: "000000" }, description: "-D - 1 -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,Q-A-1", category: "ALUF", display_line: 1, encoding: { w4: "002000", w3: "000000", w2: "000000", w1: "000000" }, description: "Q - A - 1 -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,B-A-1", category: "ALUF", display_line: 1, encoding: { w4: "002200", w3: "000000", w2: "000000", w1: "000000" }, description: "B - A - 1 -> F", requires: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,A-D-1", category: "ALUF", display_line: 1, encoding: { w4: "003200", w3: "000000", w2: "000000", w1: "000000" }, description: "A - D - 1 -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,Q-D-1", category: "ALUF", display_line: 1, encoding: { w4: "003400", w3: "000000", w2: "000000", w1: "000000" }, description: "Q - D- 1 -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,A-Q-1", category: "ALUF", display_line: 1, encoding: { w4: "004000", w3: "000000", w2: "000000", w1: "000000" }, description: "A - Q - 1 -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,A-B-1", category: "ALUF", display_line: 1, encoding: { w4: "004200", w3: "000000", w2: "000000", w1: "000000" }, description: "A - B - 1 -> F", requires: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,D-A-1", category: "ALUF", display_line: 1, encoding: { w4: "005200", w3: "000000", w2: "000000", w1: "000000" }, description: "D - A - 1 -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,D-Q-1", category: "ALUF", display_line: 1, encoding: { w4: "005400", w3: "000000", w2: "000000", w1: "000000" }, description: "D - Q - 1 -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,Q", category: "ALUF", display_line: 1, encoding: { w4: "000400", w3: "000000", w2: "000000", w1: "000000" }, description: "Q -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,B", category: "ALUF", display_line: 1, encoding: { w4: "000600", w3: "000000", w2: "000000", w1: "000000" }, description: "B -> F", requires: "B", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,A", category: "ALUF", display_line: 1, encoding: { w4: "001000", w3: "000000", w2: "000000", w1: "000000" }, description: "A -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,D", category: "ALUF", display_line: 1, encoding: { w4: "001600", w3: "000000", w2: "000000", w1: "000000" }, description: "D -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,Q+1", category: "ALUF", display_line: 1, encoding: { w4: "000400", w3: "040000", w2: "000000", w1: "000000" }, description: "Q + 1 -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,B+1", category: "ALUF", display_line: 1, encoding: { w4: "000600", w3: "040000", w2: "000000", w1: "000000" }, description: "B + 1 -> F", requires: "B", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,A+1", category: "ALUF", display_line: 1, encoding: { w4: "001000", w3: "040000", w2: "000000", w1: "000000" }, description: "A + 1 -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,D+1", category: "ALUF", display_line: 1, encoding: { w4: "001600", w3: "040000", w2: "000000", w1: "000000" }, description: "D + 1 -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,Q-1", category: "ALUF", display_line: 1, encoding: { w4: "002400", w3: "000000", w2: "000000", w1: "000000" }, description: "0 - 1 -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,B-1", category: "ALUF", display_line: 1, encoding: { w4: "002600", w3: "000000", w2: "000000", w1: "000000" }, description: "B - 1 -> F", requires: "B", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,A-1", category: "ALUF", display_line: 1, encoding: { w4: "003000", w3: "000000", w2: "000000", w1: "000000" }, description: "A - 1 -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,D-1", category: "ALUF", display_line: 1, encoding: { w4: "005600", w3: "000000", w2: "000000", w1: "000000" }, description: "D - 1 -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,-Q", category: "ALUF", display_line: 1, encoding: { w4: "004400", w3: "040000", w2: "000000", w1: "000000" }, description: "-Q -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,-B", category: "ALUF", display_line: 1, encoding: { w4: "004600", w3: "040000", w2: "000000", w1: "000000" }, description: "-B -> F", requires: "B", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,-A", category: "ALUF", display_line: 1, encoding: { w4: "005000", w3: "040000", w2: "000000", w1: "000000" }, description: "-A -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,-D", category: "ALUF", display_line: 1, encoding: { w4: "003600", w3: "040000", w2: "000000", w1: "000000" }, description: "-D -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,Q-A", category: "ALUF", display_line: 1, encoding: { w4: "002000", w3: "040000", w2: "000000", w1: "000000" }, description: "Q - A -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,B-A", category: "ALUF", display_line: 1, encoding: { w4: "002200", w3: "040000", w2: "000000", w1: "000000" }, description: "B - A -> F", requires: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,A-D", category: "ALUF", display_line: 1, encoding: { w4: "003200", w3: "040000", w2: "000000", w1: "000000" }, description: "A - D -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,Q-D", category: "ALUF", display_line: 1, encoding: { w4: "003400", w3: "040000", w2: "000000", w1: "000000" }, description: "Q - D -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,A-Q", category: "ALUF", display_line: 1, encoding: { w4: "004000", w3: "040000", w2: "000000", w1: "000000" }, description: "A - Q -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,A-B", category: "ALUF", display_line: 1, encoding: { w4: "004200", w3: "040000", w2: "000000", w1: "000000" }, description: "A - B -> F", requires: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,D-A", category: "ALUF", display_line: 1, encoding: { w4: "005200", w3: "040000", w2: "000000", w1: "000000" }, description: "D - A -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,D-Q", category: "ALUF", display_line: 1, encoding: { w4: "005400", w3: "040000", w2: "000000", w1: "000000" }, description: "D - Q -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUD,Q", category: "ALUD", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000000" }, description: "F -> Q : F -> Y", models: ["nd100", "nd110", "nd120"] }, { token: "ALUD,NONE", category: "ALUD", display_line: 1, encoding: { w4: "020000", w3: "000000", w2: "000000", w1: "000000" }, description: "F -> Y", models: ["nd100", "nd110", "nd120"] }, { token: "ALUD,B,YA", category: "ALUD", display_line: 1, encoding: { w4: "040000", w3: "000000", w2: "000000", w1: "000000" }, description: "F -> B : A -> Y", requires: "B", models: ["nd100", "nd110", "nd120"] }, { token: "ALUD,B", category: "ALUD", display_line: 1, encoding: { w4: "060000", w3: "000000", w2: "000000", w1: "000000" }, description: "F -> B : F -> Y", requires: "B", models: ["nd100", "nd110", "nd120"] }, { token: "ALUD,SRD", category: "ALUD", display_line: 1, encoding: { w4: "100000", w3: "000000", w2: "000000", w1: "000000" }, description: "F -> Y : (F,Q)/2 -> (B,Q)", models: ["nd100", "nd110", "nd120"] }, { token: "ALUD,SRB", category: "ALUD", display_line: 1, encoding: { w4: "120000", w3: "000000", w2: "000000", w1: "000000" }, description: "F -> Y : F/2 -> B", requires: "B", models: ["nd100", "nd110", "nd120"] }, { token: "ALUD,SLD", category: "ALUD", display_line: 1, encoding: { w4: "140000", w3: "000000", w2: "000000", w1: "000000" }, description: "F -> Y : (F,Q)*2 -> (B,Q)", requires: "B", models: ["nd100", "nd110", "nd120"] }, { token: "ALUD,SLB", category: "ALUD", display_line: 1, encoding: { w4: "160000", w3: "000000", w2: "000000", w1: "000000" }, description: "F -> Y : F*2 -> B", requires: "B", models: ["nd100", "nd110", "nd120"] }, { token: "STS,LO", category: "STS", display_line: 1, encoding: { w4: "000140", w3: "000000", w2: "000000", w1: "000000" }, description: "IDB-BITS 0-7 -> STATUS-BITS 0-7", models: ["nd100", "nd110", "nd120"] }, { token: "STS,EA", category: "STS", display_line: 1, encoding: { w4: "000040", w3: "000000", w2: "000000", w1: "000000" }, description: "CRY -> STS C : OVF -> STS Q : OVF \\/ STS O -> STS O", models: ["nd100", "nd110", "nd120"] }, { token: "STS,ES", category: "STS", display_line: 1, encoding: { w4: "000100", w3: "000000", w2: "000000", w1: "000000" }, description: "ALU SHIFT OUTPUT -> STATUS M", models: ["nd100", "nd110", "nd120"] }, { token: "CRY,C", category: "CRY", display_line: 1, encoding: { w4: "000000", w3: "100000", w2: "000000", w1: "000000" }, description: "STATUS C -> CARRY IN", models: ["nd100", "nd110", "nd120"] }, { token: "CRY,GPR", category: "CRY", display_line: 1, encoding: { w4: "000000", w3: "140000", w2: "000000", w1: "000000" }, description: "GPR BIT 0 -> CARRY IN", models: ["nd100", "nd110", "nd120"] }, { token: "ALUM,FMU", category: "ALUM", display_line: 1, encoding: { w4: "000000", w3: "010000", w2: "000000", w1: "000000" }, description: "MULTIPLY ALU MODE. GPR 0 -> ALU-INSTR 1 ; RIGHT GPR-SHIFT", models: ["nd100", "nd110", "nd120"] }, { token: "ALUM,FDV", category: "ALUM", display_line: 1, encoding: { w4: "000000", w3: "020000", w2: "000000", w1: "000000" }, description: "DIVISION ALU MODE. GPR 0 -> ALU-INSTR 3 : LEFT GPR-SHIFT", models: ["nd100", "nd110", "nd120"] }, { token: "ALUM,IR", category: "ALUM", display_line: 1, encoding: { w4: "000000", w3: "030000", w2: "000000", w1: "000000" }, description: "SHIFT INSTR. MODE. SH MODE FROM IR-BITS. M IS SET AUTOM.", models: ["nd100", "nd110", "nd120"] }, { token: "ALUM,MIC", category: "ALUM", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000000" }, description: "MICROPROGRAM CONTR. SHIFT. SHIFT MODE FROM 'MIS-BITS'", models: ["nd100", "nd110", "nd120"] }, { token: "MIS,ROT", category: "MIS", display_line: 1, encoding: { w4: "000000", w3: "002000", w2: "000000", w1: "000000" }, description: "SPECIFIES ROTATIONAL SHIFT IF 'ALUM, MIC'", models: ["nd100", "nd110", "nd120"] }, { token: "MIS,ZIN", category: "MIS", display_line: 1, encoding: { w4: "000000", w3: "004000", w2: "000000", w1: "000000" }, description: "SPECIFIES ZERO-END-INPUT SHIFT IF 'ALUM, MIC'", models: ["nd100", "nd110", "nd120"] }, { token: "MIS,LIN", category: "MIS", display_line: 1, encoding: { w4: "000000", w3: "006000", w2: "000000", w1: "000000" }, description: "SPECIFIES LINK-END-INPUT SHIFT IF 'ALUM. MIC'", models: ["nd100", "nd110", "nd120"] }, { token: "LCOUNT", category: "SPECIAL", display_line: 2, encoding: { w4: "000000", w3: "000000", w2: "000100", w1: "000000" }, description: "COUNT LOOP-COUNTER : IF FALSE 'RETURN'&'HOLD'", models: ["nd100", "nd110", "nd120"] }, { token: "CONDENABL", category: "SPECIAL", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000200", w1: "000000" }, description: "ENABLE COND. SEQ. , USE 'FALSE' SPECS IF CONDITION FALSE", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,ALU", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000000" }, description: "ARITHMETIC-LOGIC-UNIT -> IDB", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,BMG", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "000040", w2: "000000", w1: "000000" }, description: "BIT-MASK-GENERATOR -> IDB", provides: "IDBS", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,GPR", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "000100", w2: "000000", w1: "000000" }, description: "GENERAL-PURPOSE-REGISTER -> IDB", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,DBR", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "000140", w2: "000000", w1: "000000" }, description: "DATA-BUS-REGISTER -> IDB", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,ARG", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "000200", w2: "000000", w1: "000000" }, description: "ARGUMENT (MICRO-INSTRUCTION-BITS 0-15) => IDB", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,REG", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "000240", w2: "006000", w1: "000000" }, description: "REGISTER-FILE -> IDB", provides: "IDBS", requires: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,STS", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "000300", w2: "000000", w1: "000000" }, description: "STATUS => IDB", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,BARG", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "000400", w2: "000000", w1: "000000" }, description: "B-OPERAND-ARGUMENT (0-17) -> IDB", provides: "IDBS", requires: "B", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,SWAP", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "000440", w2: "000000", w1: "000000" }, description: "BYTE-SWAP OF LAST IDB -> IDB", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,PEA", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "000500", w2: "006000", w1: "000000" }, description: "PEA-REGISTER -> IDB", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,PES", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "000540", w2: "006000", w1: "000000" }, description: "PES-REGISTER -> IDB", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,AARG", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "000600", w2: "000000", w1: "000000" }, description: "A-OPERAND-ARGUMENT'10 (0-170) -> IDB", provides: "IDBS", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,PIC", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "000640", w2: "006000", w1: "000000" }, description: "PRIORITY-INTERRUPT-CONTROL STATUS REGISTER -> IDB", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,IOR", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "000700", w2: "006000", w1: "000000" }, description: "UART DATA AND STATUS -> IDB", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,DSABL", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "000740", w2: "000000", w1: "000000" }, description: "DConstants.IsABLE IDBS (USED TO READ 'PIC'-INFO, EXCEPT PIC-STS)", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,MIPANS", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "001000", w2: "006000", w1: "000000" }, description: "IR 0 USED BY MOPC", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,MAPANS", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "001040", w2: "006000", w1: "000000" }, description: "IR 0 USED BY TRA-INSTRUCTION", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,GPR,SEXT", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "001100", w2: "000000", w1: "000000" }, description: "GPR BITS 0-7 (WITH BITS 8-15 EQUAL TO BIT 7) -> IDB", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,PGS", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "001140", w2: "006000", w1: "000000" }, description: "PAGING STATUS ACCORDING TO LAST REQUEST (NEVER LOCKED)", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,CSR", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "001200", w2: "006000", w1: "000000" }, description: "CACHE STATUS REGISTER", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,PCR", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "001240", w2: "006000", w1: "000000" }, description: "READ PAGING CONTROL REGISTER (NUMBER SELECTED BY PIL)", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,ALD", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "001300", w2: "006000", w1: "000000" }, description: "AUTOMATIC LOAD DESCRIPTOR & PRINT STATUS", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,PANEL", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "001340", w2: "006000", w1: "000000" }, description: "PANEL VECTOR", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,RCS", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "001400", w2: "000000", w1: "000000" }, description: "READ CONTROL STORE", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,PICVC", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "001440", w2: "006000", w1: "000000" }, description: "INTERRUPT VECTOR", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,LBR", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "001500", w2: "006000", w1: "000000" }, description: "READ LBR FROM LA BUS (MUST HAVE COMM,PLBR)", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,LDPIL", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000001", w2: "000000", w1: "000000" }, description: "IDB BITS 8-15 -> STATUS BITS 8-15", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,LDGPR", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000002", w2: "000000", w1: "000000" }, description: "IDB -> GENERAL-PURPOSE-REGISTER", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,EWRF", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000003", w2: "004000", w1: "000000" }, description: "IDB -> REGISTER FILE WORD ADDRESSED BY A-OP AND B-OP", requires: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CLIRQ", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000004", w2: "000000", w1: "000000" }, description: "PREVENT JUMP TO INTR VECT. REMOVE 'PANEL'-EFF ON IRQ-TEST", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,RSDA", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000005", w2: "000000", w1: "000000" }, description: "RESET DATA AVAILABLE IN 'UART'", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,TBSTR", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000006", w2: "000000", w1: "000000" }, description: "'TRANSMIT BUFFER STROBE' TO 'UART' IDB 0-7 -> 'UART'", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,LDPANC", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "004006", w2: "000000", w1: "000000" }, description: "SEND ONE BYTE TO IR 0", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,LDPCR", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006006", w2: "000000", w1: "000000" }, description: "LOAD PCR (NUMBER DETERMINED BY PIL)", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,SIOC", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000007", w2: "000000", w1: "000000" }, description: "LOAD 'I/O-CONTROL' REGISTER (TERMINAL-1, CLK-INTS, ETC. )", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,SLOW1", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000010", w2: "000000", w1: "000000" }, description: "SLOW CYCLE", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,SLOW2", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000010", w2: "000000", w1: "000000" }, description: "SLOW CYCLE", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,EPIC", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000011", w2: "000000", w1: "000000" }, description: "A-OPERAND IS AN INSTRUCTION TO 'PIC' (PRIORITY INT CONTA)", requires: "PIC", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,SMPID", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000012", w2: "006000", w1: "000000" }, description: "SET MICRO-PID. PID-BITS WHERE IDB IS '1' ARE FORCED TO '1'", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,START", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000013", w2: "000000", w1: "000000" }, description: "RESET THE 'STOP' FLIP-FLOP", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,SSTOP", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000014", w2: "000000", w1: "000000" }, description: "SET THE 'STOP' FLIP-FLOP", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CLRTC", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000015", w2: "000000", w1: "000000" }, description: "CLEAR THE 20 MS CLOCK FLIP-FLOP", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CLFF", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000016", w2: "000000", w1: "000000" }, description: "CLEAR THE 'OOD' AND THE 'DZD' FLIP-FLOPS", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,LDLC", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000017", w2: "004000", w1: "000000" }, description: "LOAD THE 'LOOP COUNTER' WITH THE 6 LOWER IDB-BITS", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,LDSEG", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000020", w2: "004040", w1: "000000" }, description: "LOAD SEGMENT REGISTER (SELECTS PHYSICAL 64K AREA)", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,LDDOMI", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "002020", w2: "004040", w1: "000000" }, description: "LOAD SINTRAN-4 DOMAIN REGISTER", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,LDPS", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "004020", w2: "004040", w1: "000000" }, description: "LOAD SINTRAN-4 PS REGISTER", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,LDIRV", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006020", w2: "004040", w1: "000000" }, description: "LOAD INSTRUCTION REGISTER FOR OR-LOGIC USE", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,WCIHM", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000021", w2: "004040", w1: "000000" }, description: "WRITE CACHE INHIBIT MAP (BIT 15 =1 IS NORMAL, = 0 IS INH)", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,SSEMA", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "002021", w2: "000040", w1: "000000" }, description: "THE NEXT REQUEST IS A SEMAPHOR REQUEST", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CCLR", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "004021", w2: "000040", w1: "000000" }, description: "CLEAR CACHE (BIT 3 OF CSR MUST BE 0 BEFORE START)", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,LDEXM", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006021", w2: "004040", w1: "000000" }, description: "LOAD EXAMINE MODE", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,IREAD,PT", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000022", w2: "000040", w1: "000000" }, description: "INDIRECT ADDRESS READ (PT-RELATIVE)", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,IREAD,APT", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "002022", w2: "000040", w1: "000000" }, description: "INDIRECT ADDRESS READ (APT-RELATIVE)", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,MAP", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "004022", w2: "000040", w1: "000000" }, description: "USE IDB AS INSTRUCTION (AS IN EXR)", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CNEXT,NWP", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006022", w2: "004040", w1: "000000" }, description: "EXECUTE NEXT INSTRUCTION IF P NOT CHANGED IN LAST CYCLE", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CJMP,F15", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000023", w2: "004040", w1: "000000" }, description: "JUMP IF F15 =1", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CJMP,NF15", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "002023", w2: "004040", w1: "000000" }, description: "JUMP IF F15 -0", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CJMP,F=0", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "004023", w2: "004040", w1: "000000" }, description: "JUMP IF F =0", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CJMP,NF=0", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006023", w2: "004040", w1: "000000" }, description: "JUMP IF F <> 0", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CNEXT,SGR", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000024", w2: "004040", w1: "000000" }, description: "SKIP LST", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CNEXT,NSGR", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "002024", w2: "004040", w1: "000000" }, description: "SKIP GRE", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CNEXT,CRY", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "004024", w2: "004040", w1: "000000" }, description: "SKIP MLS", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CNEXT,NCRY", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006024", w2: "004040", w1: "000000" }, description: "SKIP MGR", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CNEXT,F15", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000025", w2: "004040", w1: "000000" }, description: "SKIP GEQ", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CNEXT,NF15", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "002025", w2: "004040", w1: "000000" }, description: "SKIP LSS", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CNEXT,F=0", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "004025", w2: "004040", w1: "000000" }, description: "SKIP VEQ", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CNEXT,NF=0", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006025", w2: "004040", w1: "000000" }, description: "SKIP EQL", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,JMP,*", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000026", w2: "002040", w1: "000000" }, description: "JMP P-RELATIVE", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,JMP,B", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "002026", w2: "002040", w1: "000000" }, description: "JMP ,B", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,JMP,I", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "004026", w2: "002040", w1: "000000" }, description: "JMP I & I,B", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,JMP,X", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006026", w2: "002040", w1: "000000" }, description: "JMP ,X", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,JMP,XB", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000027", w2: "002040", w1: "000000" }, description: "JMP ,X,B", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,JMP,XI", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "002027", w2: "002040", w1: "000000" }, description: "JMP I,X & I,B,X", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,LBCONT", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "004027", w2: "000040", w1: "000000" }, description: "USED IN PREX-INSTRUCTION ONLY", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CONTINUE", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006027", w2: "000040", w1: "000000" }, description: "FETCH NEW INSTRUCTION RELATIVE TO P", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,AREAD,*", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000030", w2: "000040", w1: "000000" }, description: "READ P-RELATIVE", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,AREAD,B", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "002030", w2: "000040", w1: "000000" }, description: "READ ,B", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,AREAD,I", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "004030", w2: "000040", w1: "000000" }, description: "READ I & I,B", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,AREAD,X", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006030", w2: "000040", w1: "000000" }, description: "READ ,X", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,AREAD,XB", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000031", w2: "000040", w1: "000000" }, description: "READ , B,X", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,AREAD,XI", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "002031", w2: "000040", w1: "000000" }, description: "READ I,X & I,B,X", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,IREAD2", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "004031", w2: "000040", w1: "000000" }, description: "READ FIRST PART OF 32-BIT INDIRECT ADDRESS", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,AREAD,NEXT", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006031", w2: "000040", w1: "000000" }, description: "READ NEXT ADDRESS", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,AWRITE,*", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000032", w2: "000040", w1: "000000" }, description: "WRITE P-RELATIVE", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,AWRITE,B", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "002032", w2: "000040", w1: "000000" }, description: "WRITE ,B", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,AWRITE,I", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "004032", w2: "000040", w1: "000000" }, description: "WRITE I & I,B", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,AWRITE,X", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006032", w2: "000040", w1: "000000" }, description: "WRITE ,X", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,AWRITE,XB", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000033", w2: "000040", w1: "000000" }, description: "WRITE ,X,B", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,AWRITE,XI", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "002033", w2: "000040", w1: "000000" }, description: "WRITE I,X & I,X,B", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,AWRITE,HOLD", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "004033", w2: "000040", w1: "000000" }, description: "WRITE IN LAST ADDRESS", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,AWRITE,NEXT", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006033", w2: "000040", w1: "000000" }, description: "WRITE IN NEXT ADDRESS", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,RDRQ,PT", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000034", w2: "000040", w1: "000000" }, description: "READ PAGE-TABLE-RELATIVE, ADDRESS FROM IDB", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,RDRQ,APT", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "002034", w2: "000040", w1: "000000" }, description: "READ ALTERNATIVE-PT-RELATIVE, ADDRESS FROM IDB", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,RDRQ,HOLD", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "004034", w2: "000040", w1: "000000" }, description: "READ FROM LAST USED PT. ADDRESS FROM IDB", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,EXRQ", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006034", w2: "000040", w1: "000000" }, description: "EXAMINE", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,WRRQ,PT", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000035", w2: "000040", w1: "000000" }, description: "WRITE PT-RELATIVE, ADDRESS FROM IDB", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,WRRQ,APT", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "002035", w2: "000040", w1: "000000" }, description: "WRITE APT-RELATIVE, ADDRESS FROM IDB", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,WRRQ,HOLD", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "004035", w2: "000040", w1: "000000" }, description: "WRITE IN LAST USED PT, ADDRESS FROM IDB", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,DERQ", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006035", w2: "000040", w1: "000000" }, description: "DEPOSIT", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,ADCS", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000036", w2: "004040", w1: "000000" }, description: "SET CONTROL STORE ADDRESS", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,RWCS", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "002036", w2: "000040", w1: "000000" }, description: "READ OR WRITE IN CONTROL STORE", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,WLBR", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "004036", w2: "004040", w1: "000000" }, description: "WRITE LOGICAL BANK REGISTER", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,WALBR", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006036", w2: "004040", w1: "000000" }, description: "WRITE ALTERNATIVE LOGICAL BANK REGISTER", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,IDENT", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "004037", w2: "000040", w1: "000000" }, description: "IDENT BUS REQUEST", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,IOX", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006037", w2: "000040", w1: "000000" }, description: "10X BUS REQUEST", models: ["nd100", "nd110", "nd120"] }, { token: "T,JMP", category: "T_SEQ", display_line: 2, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000000" }, description: "TRUE SEQUENCE IS JUMP", provides: "T_SEQ", models: ["nd100", "nd110", "nd120"] }, { token: "T,JMP0-3", category: "T_SEQ", display_line: 2, encoding: { w4: "000000", w3: "000000", w2: "001000", w1: "000000" }, description: "TRUE SEQ IS JUMP. IR0-3 CONTROLS THE 4 LOWER JUMP ADDR BITS", provides: "T_SEQ", models: ["nd100", "nd110", "nd120"] }, { token: "T,JMPAOPR", category: "T_SEQ", display_line: 2, encoding: { w4: "000000", w3: "006000", w2: "001000", w1: "000000" }, description: "TRUE SEQ IS JUMP. A-OP CONTROLS THE 4 LOWER JUMP ADDR BITS", provides: "T_SEQ", models: ["nd100", "nd110", "nd120"] }, { token: "T,RETURN", category: "T_SEQ", display_line: 2, encoding: { w4: "000000", w3: "000000", w2: "040000", w1: "000000" }, description: "TRUE SEQUENCE IS RETURN", provides: "T_SEQ", models: ["nd100", "nd110", "nd120"] }, { token: "T,NEXT", category: "T_SEQ", display_line: 2, encoding: { w4: "000000", w3: "000000", w2: "100000", w1: "000000" }, description: "TRUE SEQUENCE IS NEXT", provides: "T_SEQ", models: ["nd100", "nd110", "nd120"] }, { token: "T,HOLD", category: "T_STK", display_line: 2, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000000" }, description: "TRUE STACK OPERATION IS HOLD", provides: "T_STK", models: ["nd100", "nd110", "nd120"] }, { token: "T,POP", category: "T_STK", display_line: 2, encoding: { w4: "000000", w3: "000000", w2: "010000", w1: "000000" }, description: "TRUE STACK OPERATION IS POP", provides: "T_STK", models: ["nd100", "nd110", "nd120"] }, { token: "T,LOAD", category: "T_STK", display_line: 2, encoding: { w4: "000000", w3: "000000", w2: "020000", w1: "000000" }, description: "TRUE STACK OPERATION IS LOAD", provides: "T_STK", models: ["nd100", "nd110", "nd120"] }, { token: "T,PUSH", category: "T_STK", display_line: 2, encoding: { w4: "000000", w3: "000000", w2: "030000", w1: "000000" }, description: "TRUE STACK OPERATION IS PUSH", provides: "T_STK", models: ["nd100", "nd110", "nd120"] }, { token: "F,JMP", category: "F_SEQ", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000000" }, description: "FALSE SEQUENCE IS JUMP. USED WITH A CONDITION SETTING", provides: "F_SEQ", models: ["nd100", "nd110", "nd120"] }, { token: "F,RETURN", category: "F_SEQ", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000004" }, description: "FALSE SEQUENCE IS RETURN, USED WITH A CONDITION SETTING", provides: "F_SEQ", models: ["nd100", "nd110", "nd120"] }, { token: "F,NEXT", category: "F_SEQ", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000010" }, description: "FALSE SEQUENCE IS NEXT. USED WITH A CONDITION SETTING", provides: "F_SEQ", models: ["nd100", "nd110", "nd120"] }, { token: "F,HOLD", category: "F_STK", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000000" }, description: "FALSE STACK OPERATION IS HOLD. USED WITH A COND SETTING", provides: "F_STK", models: ["nd100", "nd110", "nd120"] }, { token: "F,POP", category: "F_STK", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000001" }, description: "FALSE STACK OPERATION IS POP. USED WITH A COND SETTING", provides: "F_STK", models: ["nd100", "nd110", "nd120"] }, { token: "F,LOAD", category: "F_STK", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000002" }, description: "FALSE STACK OPERATION IS LOAD. USED WITH A COND SETTING", provides: "F_STK", models: ["nd100", "nd110", "nd120"] }, { token: "F,PUSH", category: "F_STK", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000003" }, description: "FALSE STACK OPERATION IS PUSH. USED WITH A COND SETTING", provides: "F_STK", models: ["nd100", "nd110", "nd120"] }, { token: "COND,STP", category: "COND", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000400", w1: "000360" }, description: "CONDITION FOR TESTING IS 'STOP'", provides: "COND", models: ["nd100", "nd110", "nd120"] }, { token: "COND,PXM", category: "COND", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000400", w1: "000220" }, description: "CONDITION FOR TESTING IS PREFIX-MODE", provides: "COND", models: ["nd100", "nd110", "nd120"] }, { token: "COND,OVF", category: "COND", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000400", w1: "000240" }, description: "CONDITION FOR TESTING IS 'OVERFLOW' FROM ALU", provides: "COND", models: ["nd100", "nd110", "nd120"] }, { token: "COND,CRY", category: "COND", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000400", w1: "000260" }, description: "CONDITION FOR TESTING IS 'CARRY' FROM ALU", provides: "COND", models: ["nd100", "nd110", "nd120"] }, { token: "COND,F11", category: "COND", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000400", w1: "000300" }, description: "CONDITION FOR TESTING IS BIT 11 FROM ALU", provides: "COND", models: ["nd100", "nd110", "nd120"] }, { token: "COND,F15", category: "COND", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000400", w1: "000320" }, description: "CONDITION FOR TESTING IS BIT 15 FROM ALU", provides: "COND", models: ["nd100", "nd110", "nd120"] }, { token: "COND,F=0", category: "COND", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000400", w1: "000340" }, description: "CONDITION FOR TESTING IS 'ALL ZEROS' FROM ALU", provides: "COND", models: ["nd100", "nd110", "nd120"] }, { token: "COND,LC=0", category: "COND", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000400", w1: "000020" }, description: "CONDITION FOR TESTING IS 'LOOP-COUNTER' CONTENT =0", provides: "COND", models: ["nd100", "nd110", "nd120"] }, { token: "COND,FETCH", category: "COND", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000400", w1: "000100" }, description: "CONDITION FOR TESTING IS LAST MEMORY REQUEST WAS FETCH", provides: "COND", models: ["nd100", "nd110", "nd120"] }, { token: "COND,IRQ", category: "COND", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000400", w1: "000040" }, description: "COND FOR TEST IS 'IRQ'. CHECKS LEV 10-15 IF 'COMM, CLIRQ'", provides: "COND", models: ["nd100", "nd110", "nd120"] }, { token: "COND,RESTR", category: "COND", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000400", w1: "000060" }, description: "COND FOR TESTING IS 'RESTRICTED-MODE'. TRUE IF RING 0-1", provides: "COND", models: ["nd100", "nd110", "nd120"] }, { token: "COND,OOD", category: "COND", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000400", w1: "000120" }, description: "CONDITION FOR TESTING IS THE 'ONE-OUT-DETECT' FLIP-FLOP", provides: "COND", models: ["nd100", "nd110", "nd120"] }, { token: "COND,DZD", category: "COND", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000400", w1: "000000" }, description: "COND FOR TESTING IS THE 'DOUBLE-ZERO-DETECT' FLIP-FLOP", provides: "COND", models: ["nd100", "nd110", "nd120"] }, { token: "COND,COND", category: "COND", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000400", w1: "000160" }, description: "COND FOR TEST IS OUTCOME OF LATEST TEST (DELAYS TESTS)", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,CDIGI", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000011", w1: "170000" }, description: "COUNTER CONTROLLING NUMBER OF DIGITS IN AN OCTAL NUMBER", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,UPPNR", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000012", w1: "130000" }, description: "SCRATCH WORD KEEPING UPPER ADDR LIMIT IN MOPC DUMP CMND", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,CURNR", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000013", w1: "130000" }, description: "SCRATCH WORD KEEPING CURRENT ADDR IN A MOPC DUMP COMMAND", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,CNT10", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000017", w1: "170000" }, description: "COUNTER CONTROLLING NO. OF OCTAL NOS/LINE IN MOPC DUMP CMND", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,PRCHR", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000016", w1: "160000" }, description: "SCRATCH WORD : THE NEXT CHARACTER TO BE WRITTEN BY MOPC", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,TXT1", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000014", w1: "160000" }, description: "SCRATCH WORD : DISPLAY TEXT", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,TXT2", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000013", w1: "160000" }, description: "SCRATCH WORD : DISPLAY TEXT", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,SCRAM", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000015", w1: "140000" }, description: "SCR WD : SCRAMBLED REPRESENTATION OF LETTERS IN MOPC-INPUT", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,OCTNR", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000015", w1: "150000" }, description: "SCRATCH WORD : OCTAL NUMBER ASSEMBLED FROM MOPC-INPUT", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,DISPL", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000015", w1: "160000" }, description: "TYPE OF RUNNING DISPLAY", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,OCTAD", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000013", w1: "150000" }, description: "ADDRESS OF RUNNING DISPLAY", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,OCTA2", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000012", w1: "160000" }, description: "WORD TO EXTEND ADDRESS IN OCTAD TO 24 BITS", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,DEPOS", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000017", w1: "150000" }, description: "SOME OCTAL DIGIT WAS WRITTEN SINCE LAST COMMAND TERMINATED", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,DUMPF", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000016", w1: "150000" }, description: "SCRATCH WORD INDICATING THAT A DUMP IS IN PROGRESS", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,RONLY", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000014", w1: "150000" }, description: "THE EXAMINED REGISTER IS READ-ONLY", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,WRTYP", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000012", w1: "150000" }, description: "TYPE OF VARIABLE IN CASE OF DEPOSIT", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,WRADR", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000011", w1: "150000" }, description: "ADDRESS OF VARIABLE IN CASE OF DEPOSIT", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,ACTLV", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000017", w1: "140000" }, description: "SCRATCH WORD HOLDING 'ACTIVE LEVELS'", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,PVL", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000015", w1: "170000" }, description: "SCRATCH WORD HOLDING 'PREVIOUS LEVEL'", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,IIE", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000012", w1: "170000" }, description: "SCR WORD HOLDING 'PIC' REPRESENTATION OF LAST IIE SETTING", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,PID", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000014", w1: "170000" }, description: "SCR WORD HOLDING MICROPROGRAM-KNOWN BITS OF PID REGISTER", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,PIE", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000013", w1: "170000" }, description: "SCRATCH WORD HOLDING THE 'PIE' REGISTER", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,STATUS", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000017", w1: "160000" }, description: "SCRATCH WORD HOLDING THE LATEST 'COMM, SIOC' INFORMATION", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,OCTN2", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000015", w1: "130000" }, description: "SCRATCH WORD EXPANDING THE 'AB, OCTNA' TO 24 BITS", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,NUMBR", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000012", w1: "120000" }, description: "SCRATCH WORD HOLDING AN OCTAL NUMBER BEING PRINTED BY MOPC", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,OPR", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000011", w1: "160000" }, description: "SCRATCH WORD HOLDING THE 'OPR' REGISTER VALUE", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,BRKPT", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000016", w1: "140000" }, description: "SCRATCH WORD HOLDING BREAKPOINT ADDRESS", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,SINGL", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000014", w1: "140000" }, description: "SCRATCH WORD COUNTING SINGLE-INSTRUCTION", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,BPFLG", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000013", w1: "140000" }, description: "SCRATCH WORD INDICATING THAT BREAKPOINT IS ON", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,MACL", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000011", w1: "140000" }, description: "SCRATCH WORD HOLDING RETRY COUNTER FOR LOAD AFTER MACL", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,LMP", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000012", w1: "140000" }, description: "SCRATCH WORD HOLDING THE 'LMP' REGISTER VALUE", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,EXMOD", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000011", w1: "130000" }, description: "SCRATCH WORD HOLDING THE 'EXM' REGISTER", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,MANIR", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000014", w1: "130000" }, description: "SCRATCH WORD HOLDING FLAG FOR MANUAL IR", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,SSAVE", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000016", w1: "130000" }, description: "SCRATCH WORD HOLDING STS DURING DECIMAL INTRUCTIONS", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "XRF", category: "SPECIAL", display_line: 1, encoding: { w4: "000004", w3: "000000", w2: "000000", w1: "000000" }, description: "SELECT EXTENDED REGISTER FILE", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,UCIL", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000014", w1: "120000" }, description: "SCRATCH WORD HOLDING CACHE INHIBIT UPPER LIMIT", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,LCIL", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000013", w1: "120000" }, description: "SCRATCH REGISTER HOLDING CACHE INHIBIT LOWER LIMIT", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,LA", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "001600", w2: "000000", w1: "000000" }, description: "LOGICAL ADDRESS USED BY 'ALU' WHEN JUMP", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "AB,PGS", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000015", w1: "120000" }, description: "COPY OF PGS FROM LAST PF/PV", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,INR", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "001640", w2: "006000", w1: "000000" }, description: "READ INSTALLATION NUMBER", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "AB,STBNK", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000011", w1: "120000" }, description: "GLOBAL BANK POINTER TO THE SEGMENT TABLE BANK", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,STSRT", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000016", w1: "120000" }, description: "GLOBAL POINTER TO THE SEGMENT TABLE WITHIN THE BANK", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,CMBNK", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000017", w1: "120000" }, description: "GLOBAL POINTER TO THE CORE MAP TABLE BANK", provides: "AB", models: ["nd100", "nd110", "nd120"] }] }, nd120Tokens: { model: "ND-120", token_count: 358, tokens: [{ token: "A,Z", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000000" }, description: "A-OP. IS O. USED TO ADDR. ZERO REG., STATUS OR SCRATCH", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,D", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "010000" }, description: "A-OP. IS 1. USED TO ADDR. THE D-REGISTER", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,P", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "020000" }, description: "A-OP. IS 2. USED TO ADDR. THE P-REGISTER", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,B", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "030000" }, description: "A-OP. IS 3. USED TO ADDR. THE B-REGISTER", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,L", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "040000" }, description: "A-OP. IS 4. USED TO ADDR. THE L-REGISTER", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,A", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "050000" }, description: "A-OP. IS 5. USED TO ADDR. THE A-REGISTER", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,T", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "060000" }, description: "A-OP. IS 6. USED TO ADDR. THE T-REGISTER", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,X", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "070000" }, description: "A-OP. IS 7. USED TO ADDR. THE X-REGISTER", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,STS", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "100000" }, description: "A-OP. IS 10. USED TO ADDR. REGISTER 10, STATUS OR SCRATCH", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,R1", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "110000" }, description: "A-OP. IS 11. USED TO ADDR. REGISTER 11, ADDRESS OR SCRATCH", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,R2", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "120000" }, description: "A-OP. IS 12. USED TO ADDR. REGISTER 12, SCRATCH", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,R3", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "130000" }, description: "A-OP. IS 13. USED TO ADDR. REGISTER 13, SCRATCH", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,R4", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "140000" }, description: "A-OP. IS 14. USED TO ADDR. REGISTER 14, SCRATCH", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,R5", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "150000" }, description: "A-OP. IS 15. USED TO ADDR. REGISTER 15, SCRATCH", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,R6", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "160000" }, description: "A-OP. IS 16. USED TO ADDA. REGISTER 16, SCRATCH", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,R7", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "170000" }, description: "A-OP. IS 17. USED TO ADDR. REGISTER 17, SCRATCH", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,PIL", category: "A_REG", display_line: 1, encoding: { w4: "000010", w3: "000000", w2: "000000", w1: "000000" }, description: "A-OP. IS VALUE IN 'PIL' REGISTER, LOADED BY 'COMM, LDPIL'", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,REG", category: "A_REG", display_line: 1, encoding: { w4: "000020", w3: "000000", w2: "000000", w1: "000000" }, description: "A-OP. IS VALUE OF 'INSTR. BITS 3-6' LOADED BY LAST 'T,MAPJ'", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,SRCE", category: "A_REG", display_line: 1, encoding: { w4: "000024", w3: "000000", w2: "000000", w1: "000000" }, description: "A-OP. IS VALUE OF 'INSTR. BITS 3-5' LOADED BY LAST 'T,MAPJ'", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,LC", category: "A_REG", display_line: 1, encoding: { w4: "000030", w3: "000000", w2: "000000", w1: "000000" }, description: "A-OP. IS VALUE OF 'LOOP COUNTER' TWO MICROINSTRUCTIONS AGO", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "PIC,RSTS", category: "PIC", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "060000" }, description: "A-OP. IS 6. USED TO GIVE 'READ STATUS' CMD. TO INTSYS", provides: "PIC", models: ["nd100", "nd110", "nd120"] }, { token: "PIC,MCL", category: "PIC", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000000" }, description: "A-OP. IS 0. USED TO GIVE 'MASTER CLEAR' CMD. TO INTSYS", provides: "PIC", models: ["nd100", "nd110", "nd120"] }, { token: "PIC,MCLPID", category: "PIC", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "020000" }, description: "A-OP. IS 2. USED TO GIVE 'MASKED CLEAR PID' CMD. TO INTSYS", provides: "PIC", models: ["nd100", "nd110", "nd120"] }, { token: "PIC,RMSK", category: "PIC", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "070000" }, description: "A-OP. IS 7. USED TO GIVE 'READ MASK' CMD. TO INTSYS", provides: "PIC", models: ["nd100", "nd110", "nd120"] }, { token: "PIC,LOSTS", category: "PIC", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "110000" }, description: "A-OP. IS 11. USED TO GIVE 'LOAD STATUS' CMD. TO INTSYS", provides: "PIC", models: ["nd100", "nd110", "nd120"] }, { token: "PIC,LMSK", category: "PIC", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "160000" }, description: "A-OP. IS 16. USED TO GIVE 'LOAD MASK' CMD. TO INTSYS", provides: "PIC", models: ["nd100", "nd110", "nd120"] }, { token: "PIC,MCLMSK", category: "PIC", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "120000" }, description: "A-OP. IS 12. USED TO GIVE 'MASKED CLEAR MASK' CMD TO INTSYS", provides: "PIC", models: ["nd100", "nd110", "nd120"] }, { token: "PIC,IOF", category: "PIC", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "150000" }, description: "A-OP. IS 15. USED TO GIVE 'IOF' CMD. TO INTSYS", provides: "PIC", models: ["nd100", "nd110", "nd120"] }, { token: "PIC,ION", category: "PIC", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "170000" }, description: "A-OP. IS 17. USED TO GIVE 'ION' CMD. TO INTSYS", provides: "PIC", models: ["nd100", "nd110", "nd120"] }, { token: "PIC,MSTMSK", category: "PIC", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "130000" }, description: "A-OP. IS 13. USED TO GIVE 'MASKED SET MASK' CMD. TO INTSYS", provides: "PIC", models: ["nd100", "nd110", "nd120"] }, { token: "PIC,RVECT", category: "PIC", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "050000" }, description: "A-OP. IS 5. USED TO GIVE 'READ-VECTOR' COMMAND TO INTSYS", provides: "PIC", models: ["nd100", "nd110", "nd120"] }, { token: "A,0", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000000" }, description: "A-OP. IS 0", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,1", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "010000" }, description: "A-OP. IS 1", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,2", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "020000" }, description: "A-OP. IS 2", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,3", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "030000" }, description: "A-OP. IS 3", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,4", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "040000" }, description: "A-OP. IS 4", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,5", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "050000" }, description: "A-OP. IS 5", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,6", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "060000" }, description: "A-OP. IS 6", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,7", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "070000" }, description: "A-OP. IS 7", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,10", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "100000" }, description: "A-OP. IS 10", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,11", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "110000" }, description: "A-OP. IS 11", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,12", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "120000" }, description: "A-OP. IS 12", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,13", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "130000" }, description: "A-OP. IS 13", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,14", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "140000" }, description: "A-OP. IS 14", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,15", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "150000" }, description: "A-OP. IS 15", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,16", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "160000" }, description: "A-OP. IS 16", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "A,17", category: "A_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "170000" }, description: "A-OP. IS 17", provides: "A", models: ["nd100", "nd110", "nd120"] }, { token: "B,Z", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000000" }, description: "B-OP. IS O. USED TO ADDR. ZERO REG. , STATUS OR SCRATCH", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,D", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000001", w1: "000000" }, description: "B-OP. IS 1. USED TO ADDR. THE D-REGISTER", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,P", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "004002", w1: "000000" }, description: "B-OP. IS 2. USED TO ADDR. THE P-REGISTER", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,B", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "004003", w1: "000000" }, description: "B-OP. IS 3. USED TO ADDR. THE B-REGISTER", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,L", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000004", w1: "000000" }, description: "B-OP. IS 4. USED TO ADDR. THE L-REGISTER", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,A", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000005", w1: "000000" }, description: "B-OP. IS 5. USED TO ADDR. THE A-REGISTER", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,T", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000006", w1: "000000" }, description: "B-OP. IS 6. USED TO ADDR. THE T-REGISTER", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,X", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "004007", w1: "000000" }, description: "B-OP. IS 7. USED TO ADDR. THE X-REGISTER", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,STS", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000010", w1: "000000" }, description: "B-OP. IS 10. USED TO ADDR. REG. 10, STATUS OR SCRATCH", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,R1", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000011", w1: "000000" }, description: "B-OP. IS 11. USED TO ADDR. REG. 11, ADDR. OR SCRATCH", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,R2", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000012", w1: "000000" }, description: "B-OP. IS 12. USED TO ADDR. REG. 12, SCRATCH", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,R3", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000013", w1: "000000" }, description: "B-OP, IS 13. USED TO ADDR. REG. 13. SCRATCH", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,R4", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000014", w1: "000000" }, description: "B-OP. IS 14. USED TO ADDR. REG. 14. SCRATCH", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,R5", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000015", w1: "000000" }, description: "B-OP. IS 15. USED TO ADDR. REG. 15, SCRATCH", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,R6", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000016", w1: "000000" }, description: "B-OP. IS 16. USED TO ADDR. REG. 16, SCRATCH", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,R7", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000017", w1: "000000" }, description: "B-OP. IS 17. USED TO ADDR. REG. 17, SCRATCH", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,DEST", category: "B_REG", display_line: 1, encoding: { w4: "000001", w3: "000000", w2: "000000", w1: "000000" }, description: "B-OP. IS VALUE OF 'INSTR. BITS 0-2' LOADED BY LAST 'T,MAPJ'", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,SRCE", category: "B_REG", display_line: 1, encoding: { w4: "000002", w3: "000000", w2: "000000", w1: "000000" }, description: "B-OP. IS VALUE OF 'INSTR. BITS 3-5' LOADED BY LAST 'T,MAPJ'", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,LC", category: "B_REG", display_line: 1, encoding: { w4: "000003", w3: "000000", w2: "000000", w1: "000000" }, description: "B-OP. IS VALUE OF THE 'LOOP COUNTER' TWO INSTRUCTIONS AGO", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,0", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000000" }, description: "B-OP. IS 0", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,1", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000001", w1: "000000" }, description: "B-OP. IS 1", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,2", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000002", w1: "000000" }, description: "B-OP. IS 2", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,3", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000003", w1: "000000" }, description: "B-OP. IS 3", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,4", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000004", w1: "000000" }, description: "B-OP. IS 4", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,5", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000005", w1: "000000" }, description: "B-OP. IS 5", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,6", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000006", w1: "000000" }, description: "B-OP. IS 6", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,7", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000007", w1: "000000" }, description: "B-OP. IS 7", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,10", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000010", w1: "000000" }, description: "B-OP. IS 10", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,11", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000011", w1: "000000" }, description: "B-OP. IS 11", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,12", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000012", w1: "000000" }, description: "B-OP. IS 12", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,13", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000013", w1: "000000" }, description: "B-OP. IS 13", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,14", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000014", w1: "000000" }, description: "B-OP. IS 14", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,15", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000015", w1: "000000" }, description: "B-OP. IS 15", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,16", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000016", w1: "000000" }, description: "B-OP. IS 16", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "B,17", category: "B_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000017", w1: "000000" }, description: "B-OP. IS 17", provides: "B", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,ANDAQ", category: "ALUF", display_line: 1, encoding: { w4: "010000", w3: "000000", w2: "000000", w1: "000000" }, description: "A /\\ Q -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,ANDAB", category: "ALUF", display_line: 1, encoding: { w4: "010200", w3: "000000", w2: "000000", w1: "000000" }, description: "A /\\ B -> F", requires: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,ANDDA", category: "ALUF", display_line: 1, encoding: { w4: "011200", w3: "000000", w2: "000000", w1: "000000" }, description: "D /\\ A -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,ANDDQ", category: "ALUF", display_line: 1, encoding: { w4: "011400", w3: "000000", w2: "000000", w1: "000000" }, description: "D /\\ Q -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,ORAQ", category: "ALUF", display_line: 1, encoding: { w4: "006000", w3: "000000", w2: "000000", w1: "000000" }, description: "A \\/ Q -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,ORAB", category: "ALUF", display_line: 1, encoding: { w4: "006200", w3: "000000", w2: "000000", w1: "000000" }, description: "A \\/ B -> F", requires: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,ORDA", category: "ALUF", display_line: 1, encoding: { w4: "007200", w3: "000000", w2: "000000", w1: "000000" }, description: "D \\/ A -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,ORDQ", category: "ALUF", display_line: 1, encoding: { w4: "007400", w3: "000000", w2: "000000", w1: "000000" }, description: "D \\/ Q -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,XORAQ", category: "ALUF", display_line: 1, encoding: { w4: "014000", w3: "000000", w2: "000000", w1: "000000" }, description: "A XOR Q -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,XORAB", category: "ALUF", display_line: 1, encoding: { w4: "014200", w3: "000000", w2: "000000", w1: "000000" }, description: "A XOR B -> F", requires: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,XORDA", category: "ALUF", display_line: 1, encoding: { w4: "015200", w3: "000000", w2: "000000", w1: "000000" }, description: "D XOR A -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,XORDQ", category: "ALUF", display_line: 1, encoding: { w4: "015400", w3: "000000", w2: "000000", w1: "000000" }, description: "D XOR Q -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,XNORAQ", category: "ALUF", display_line: 1, encoding: { w4: "016000", w3: "000000", w2: "000000", w1: "000000" }, description: "NOT(A XOR Q) -> F", requires: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,XNORAB", category: "ALUF", display_line: 1, encoding: { w4: "016200", w3: "000000", w2: "000000", w1: "000000" }, description: "NOT(A XOR B) -> F", requires: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,XNORDA", category: "ALUF", display_line: 1, encoding: { w4: "017200", w3: "000000", w2: "000000", w1: "000000" }, description: "NOT(D XOR A) -> F", requires: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,XNORDQ", category: "ALUF", display_line: 1, encoding: { w4: "017400", w3: "000000", w2: "000000", w1: "000000" }, description: "NOT(D XOR Q) -> F", requires: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,ZERO", category: "ALUF", display_line: 1, encoding: { w4: "010400", w3: "000000", w2: "000000", w1: "000000" }, description: "0 -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,INVQ", category: "ALUF", display_line: 1, encoding: { w4: "016400", w3: "000000", w2: "000000", w1: "000000" }, description: "NOT(Q) -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,INVB", category: "ALUF", display_line: 1, encoding: { w4: "016600", w3: "000000", w2: "000000", w1: "000000" }, description: "NOT(B) -> F", requires: "B", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,INVA", category: "ALUF", display_line: 1, encoding: { w4: "017000", w3: "000000", w2: "000000", w1: "000000" }, description: "NOT(A) -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,INVD", category: "ALUF", display_line: 1, encoding: { w4: "017600", w3: "000000", w2: "000000", w1: "000000" }, description: "NOT(D) -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,PASSQ", category: "ALUF", display_line: 1, encoding: { w4: "014400", w3: "000000", w2: "000000", w1: "000000" }, description: "Q -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,PASSB", category: "ALUF", display_line: 1, encoding: { w4: "014600", w3: "000000", w2: "000000", w1: "000000" }, description: "B -> F", requires: "B", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,PASSA", category: "ALUF", display_line: 1, encoding: { w4: "015000", w3: "000000", w2: "000000", w1: "000000" }, description: "A -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,PASSD", category: "ALUF", display_line: 1, encoding: { w4: "015600", w3: "000000", w2: "000000", w1: "000000" }, description: "D -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,MASKAQ", category: "ALUF", display_line: 1, encoding: { w4: "012000", w3: "000000", w2: "000000", w1: "000000" }, description: "NOT(A) /\\ Q -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,MASKAB", category: "ALUF", display_line: 1, encoding: { w4: "012200", w3: "000000", w2: "000000", w1: "000000" }, description: "NOT(A) /\\ B -> F", requires: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,MASKDA", category: "ALUF", display_line: 1, encoding: { w4: "013200", w3: "000000", w2: "000000", w1: "000000" }, description: "NOT(D) /\\ A -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,MASKDQ", category: "ALUF", display_line: 1, encoding: { w4: "013400", w3: "000000", w2: "000000", w1: "000000" }, description: "NOT(D) /\\ Q -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,A+Q", category: "ALUF", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000000" }, description: "A + Q -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,A+B", category: "ALUF", display_line: 1, encoding: { w4: "000200", w3: "000000", w2: "000000", w1: "000000" }, description: "A + B -> F", requires: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,D+A", category: "ALUF", display_line: 1, encoding: { w4: "001200", w3: "000000", w2: "000000", w1: "000000" }, description: "D + A -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,D+Q", category: "ALUF", display_line: 1, encoding: { w4: "001400", w3: "000000", w2: "000000", w1: "000000" }, description: "D + Q -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,A+Q+1", category: "ALUF", display_line: 1, encoding: { w4: "000000", w3: "040000", w2: "000000", w1: "000000" }, description: "A + Q * 1 -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,A+B+1", category: "ALUF", display_line: 1, encoding: { w4: "000200", w3: "040000", w2: "000000", w1: "000000" }, description: "A + B + 1 - >", requires: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,D+A+1", category: "ALUF", display_line: 1, encoding: { w4: "001200", w3: "040000", w2: "000000", w1: "000000" }, description: "D + A + 1 -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,D+Q+1", category: "ALUF", display_line: 1, encoding: { w4: "001400", w3: "040000", w2: "000000", w1: "000000" }, description: "D + Q + 1 - > F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,-Q-1", category: "ALUF", display_line: 1, encoding: { w4: "004400", w3: "000000", w2: "000000", w1: "000000" }, description: "-Q - 1 -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,-B-1", category: "ALUF", display_line: 1, encoding: { w4: "004600", w3: "000000", w2: "000000", w1: "000000" }, description: "-B - 1 -> F", requires: "B", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,-A-1", category: "ALUF", display_line: 1, encoding: { w4: "005000", w3: "000000", w2: "000000", w1: "000000" }, description: "-A - 1 -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,-D-1", category: "ALUF", display_line: 1, encoding: { w4: "003600", w3: "000000", w2: "000000", w1: "000000" }, description: "-D - 1 -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,Q-A-1", category: "ALUF", display_line: 1, encoding: { w4: "002000", w3: "000000", w2: "000000", w1: "000000" }, description: "Q - A - 1 -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,B-A-1", category: "ALUF", display_line: 1, encoding: { w4: "002200", w3: "000000", w2: "000000", w1: "000000" }, description: "B - A - 1 -> F", requires: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,A-D-1", category: "ALUF", display_line: 1, encoding: { w4: "003200", w3: "000000", w2: "000000", w1: "000000" }, description: "A - D - 1 -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,Q-D-1", category: "ALUF", display_line: 1, encoding: { w4: "003400", w3: "000000", w2: "000000", w1: "000000" }, description: "Q - D- 1 -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,A-Q-1", category: "ALUF", display_line: 1, encoding: { w4: "004000", w3: "000000", w2: "000000", w1: "000000" }, description: "A - Q - 1 -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,A-B-1", category: "ALUF", display_line: 1, encoding: { w4: "004200", w3: "000000", w2: "000000", w1: "000000" }, description: "A - B - 1 -> F", requires: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,D-A-1", category: "ALUF", display_line: 1, encoding: { w4: "005200", w3: "000000", w2: "000000", w1: "000000" }, description: "D - A - 1 -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,D-Q-1", category: "ALUF", display_line: 1, encoding: { w4: "005400", w3: "000000", w2: "000000", w1: "000000" }, description: "D - Q - 1 -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,Q", category: "ALUF", display_line: 1, encoding: { w4: "000400", w3: "000000", w2: "000000", w1: "000000" }, description: "Q -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,B", category: "ALUF", display_line: 1, encoding: { w4: "000600", w3: "000000", w2: "000000", w1: "000000" }, description: "B -> F", requires: "B", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,A", category: "ALUF", display_line: 1, encoding: { w4: "001000", w3: "000000", w2: "000000", w1: "000000" }, description: "A -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,D", category: "ALUF", display_line: 1, encoding: { w4: "001600", w3: "000000", w2: "000000", w1: "000000" }, description: "D -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,Q+1", category: "ALUF", display_line: 1, encoding: { w4: "000400", w3: "040000", w2: "000000", w1: "000000" }, description: "Q + 1 -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,B+1", category: "ALUF", display_line: 1, encoding: { w4: "000600", w3: "040000", w2: "000000", w1: "000000" }, description: "B + 1 -> F", requires: "B", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,A+1", category: "ALUF", display_line: 1, encoding: { w4: "001000", w3: "040000", w2: "000000", w1: "000000" }, description: "A + 1 -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,D+1", category: "ALUF", display_line: 1, encoding: { w4: "001600", w3: "040000", w2: "000000", w1: "000000" }, description: "D + 1 -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,Q-1", category: "ALUF", display_line: 1, encoding: { w4: "002400", w3: "000000", w2: "000000", w1: "000000" }, description: "0 - 1 -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,B-1", category: "ALUF", display_line: 1, encoding: { w4: "002600", w3: "000000", w2: "000000", w1: "000000" }, description: "B - 1 -> F", requires: "B", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,A-1", category: "ALUF", display_line: 1, encoding: { w4: "003000", w3: "000000", w2: "000000", w1: "000000" }, description: "A - 1 -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,D-1", category: "ALUF", display_line: 1, encoding: { w4: "005600", w3: "000000", w2: "000000", w1: "000000" }, description: "D - 1 -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,-Q", category: "ALUF", display_line: 1, encoding: { w4: "004400", w3: "040000", w2: "000000", w1: "000000" }, description: "-Q -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,-B", category: "ALUF", display_line: 1, encoding: { w4: "004600", w3: "040000", w2: "000000", w1: "000000" }, description: "-B -> F", requires: "B", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,-A", category: "ALUF", display_line: 1, encoding: { w4: "005000", w3: "040000", w2: "000000", w1: "000000" }, description: "-A -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,-D", category: "ALUF", display_line: 1, encoding: { w4: "003600", w3: "040000", w2: "000000", w1: "000000" }, description: "-D -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,Q-A", category: "ALUF", display_line: 1, encoding: { w4: "002000", w3: "040000", w2: "000000", w1: "000000" }, description: "Q - A -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,B-A", category: "ALUF", display_line: 1, encoding: { w4: "002200", w3: "040000", w2: "000000", w1: "000000" }, description: "B - A -> F", requires: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,A-D", category: "ALUF", display_line: 1, encoding: { w4: "003200", w3: "040000", w2: "000000", w1: "000000" }, description: "A - D -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,Q-D", category: "ALUF", display_line: 1, encoding: { w4: "003400", w3: "040000", w2: "000000", w1: "000000" }, description: "Q - D -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,A-Q", category: "ALUF", display_line: 1, encoding: { w4: "004000", w3: "040000", w2: "000000", w1: "000000" }, description: "A - Q -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,A-B", category: "ALUF", display_line: 1, encoding: { w4: "004200", w3: "040000", w2: "000000", w1: "000000" }, description: "A - B -> F", requires: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,D-A", category: "ALUF", display_line: 1, encoding: { w4: "005200", w3: "040000", w2: "000000", w1: "000000" }, description: "D - A -> F", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "ALUF,D-Q", category: "ALUF", display_line: 1, encoding: { w4: "005400", w3: "040000", w2: "000000", w1: "000000" }, description: "D - Q -> F", models: ["nd100", "nd110", "nd120"] }, { token: "ALUD,Q", category: "ALUD", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000000" }, description: "F -> Q : F -> Y", models: ["nd100", "nd110", "nd120"] }, { token: "ALUD,NONE", category: "ALUD", display_line: 1, encoding: { w4: "020000", w3: "000000", w2: "000000", w1: "000000" }, description: "F -> Y", models: ["nd100", "nd110", "nd120"] }, { token: "ALUD,B,YA", category: "ALUD", display_line: 1, encoding: { w4: "040000", w3: "000000", w2: "000000", w1: "000000" }, description: "F -> B : A -> Y", requires: "B", models: ["nd100", "nd110", "nd120"] }, { token: "ALUD,B", category: "ALUD", display_line: 1, encoding: { w4: "060000", w3: "000000", w2: "000000", w1: "000000" }, description: "F -> B : F -> Y", requires: "B", models: ["nd100", "nd110", "nd120"] }, { token: "ALUD,SRD", category: "ALUD", display_line: 1, encoding: { w4: "100000", w3: "000000", w2: "000000", w1: "000000" }, description: "F -> Y : (F,Q)/2 -> (B,Q)", models: ["nd100", "nd110", "nd120"] }, { token: "ALUD,SRB", category: "ALUD", display_line: 1, encoding: { w4: "120000", w3: "000000", w2: "000000", w1: "000000" }, description: "F -> Y : F/2 -> B", requires: "B", models: ["nd100", "nd110", "nd120"] }, { token: "ALUD,SLD", category: "ALUD", display_line: 1, encoding: { w4: "140000", w3: "000000", w2: "000000", w1: "000000" }, description: "F -> Y : (F,Q)*2 -> (B,Q)", requires: "B", models: ["nd100", "nd110", "nd120"] }, { token: "ALUD,SLB", category: "ALUD", display_line: 1, encoding: { w4: "160000", w3: "000000", w2: "000000", w1: "000000" }, description: "F -> Y : F*2 -> B", requires: "B", models: ["nd100", "nd110", "nd120"] }, { token: "STS,LO", category: "STS", display_line: 1, encoding: { w4: "000140", w3: "000000", w2: "000000", w1: "000000" }, description: "IDB-BITS 0-7 -> STATUS-BITS 0-7", models: ["nd100", "nd110", "nd120"] }, { token: "STS,EA", category: "STS", display_line: 1, encoding: { w4: "000040", w3: "000000", w2: "000000", w1: "000000" }, description: "CRY -> STS C : OVF -> STS Q : OVF \\/ STS O -> STS O", models: ["nd100", "nd110", "nd120"] }, { token: "STS,ES", category: "STS", display_line: 1, encoding: { w4: "000100", w3: "000000", w2: "000000", w1: "000000" }, description: "ALU SHIFT OUTPUT -> STATUS M", models: ["nd100", "nd110", "nd120"] }, { token: "CRY,C", category: "CRY", display_line: 1, encoding: { w4: "000000", w3: "100000", w2: "000000", w1: "000000" }, description: "STATUS C -> CARRY IN", models: ["nd100", "nd110", "nd120"] }, { token: "CRY,GPR", category: "CRY", display_line: 1, encoding: { w4: "000000", w3: "140000", w2: "000000", w1: "000000" }, description: "GPR BIT 0 -> CARRY IN", models: ["nd100", "nd110", "nd120"] }, { token: "ALUM,FMU", category: "ALUM", display_line: 1, encoding: { w4: "000000", w3: "010000", w2: "000000", w1: "000000" }, description: "MULTIPLY ALU MODE. GPR 0 -> ALU-INSTR 1 ; RIGHT GPR-SHIFT", models: ["nd100", "nd110", "nd120"] }, { token: "ALUM,FDV", category: "ALUM", display_line: 1, encoding: { w4: "000000", w3: "020000", w2: "000000", w1: "000000" }, description: "DIVISION ALU MODE. GPR 0 -> ALU-INSTR 3 : LEFT GPR-SHIFT", models: ["nd100", "nd110", "nd120"] }, { token: "ALUM,IR", category: "ALUM", display_line: 1, encoding: { w4: "000000", w3: "030000", w2: "000000", w1: "000000" }, description: "SHIFT INSTR. MODE. SH MODE FROM IR-BITS. M IS SET AUTOM.", models: ["nd100", "nd110", "nd120"] }, { token: "ALUM,MIC", category: "ALUM", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000000" }, description: "MICROPROGRAM CONTR. SHIFT. SHIFT MODE FROM 'MIS-BITS'", models: ["nd100", "nd110", "nd120"] }, { token: "MIS,ROT", category: "MIS", display_line: 1, encoding: { w4: "000000", w3: "002000", w2: "000000", w1: "000000" }, description: "SPECIFIES ROTATIONAL SHIFT IF 'ALUM, MIC'", models: ["nd100", "nd110", "nd120"] }, { token: "MIS,ZIN", category: "MIS", display_line: 1, encoding: { w4: "000000", w3: "004000", w2: "000000", w1: "000000" }, description: "SPECIFIES ZERO-END-INPUT SHIFT IF 'ALUM, MIC'", models: ["nd100", "nd110", "nd120"] }, { token: "MIS,LIN", category: "MIS", display_line: 1, encoding: { w4: "000000", w3: "006000", w2: "000000", w1: "000000" }, description: "SPECIFIES LINK-END-INPUT SHIFT IF 'ALUM. MIC'", models: ["nd100", "nd110", "nd120"] }, { token: "LCOUNT", category: "SPECIAL", display_line: 2, encoding: { w4: "000000", w3: "000000", w2: "002100", w1: "000000" }, description: "COUNT LOOP-COUNTER : IF FALSE 'RETURN'&'HOLD'. ND-120: DLY0 (bit 26) always set by assembler", models: ["nd100", "nd110", "nd120"] }, { token: "CONDENABL", category: "SPECIAL", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "002200", w1: "000000" }, description: "ENABLE COND. SEQ. , USE 'FALSE' SPECS IF CONDITION FALSE. ND-120: DLY0 (bit 26) always set by assembler", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,ALU", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000000" }, description: "ARITHMETIC-LOGIC-UNIT -> IDB", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,BMG", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "000040", w2: "000000", w1: "000000" }, description: "BIT-MASK-GENERATOR -> IDB", provides: "IDBS", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,GPR", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "000100", w2: "000000", w1: "000000" }, description: "GENERAL-PURPOSE-REGISTER -> IDB", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,DBR", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "000140", w2: "000000", w1: "000000" }, description: "DATA-BUS-REGISTER -> IDB", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,ARG", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "000200", w2: "000000", w1: "000000" }, description: "ARGUMENT (MICRO-INSTRUCTION-BITS 0-15) => IDB", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,REG", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "000240", w2: "000040", w1: "000000" }, description: "REGISTER-FILE -> IDB", provides: "IDBS", requires: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,STS", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "000300", w2: "000000", w1: "000000" }, description: "STATUS => IDB", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,BARG", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "000400", w2: "000000", w1: "000000" }, description: "B-OPERAND-ARGUMENT (0-17) -> IDB", provides: "IDBS", requires: "B", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,SWAP", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "000440", w2: "000000", w1: "000000" }, description: "BYTE-SWAP OF LAST IDB -> IDB", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,PEA", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "000500", w2: "000040", w1: "000000" }, description: "PEA-REGISTER -> IDB", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,PES", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "000540", w2: "000040", w1: "000000" }, description: "PES-REGISTER -> IDB", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,AARG", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "000600", w2: "000000", w1: "000000" }, description: "A-OPERAND-ARGUMENT'10 (0-170) -> IDB", provides: "IDBS", requires: "A", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,PIC", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "000640", w2: "000000", w1: "000000" }, description: "PRIORITY-INTERRUPT-CONTROL STATUS REGISTER -> IDB", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,IOR", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "000700", w2: "000040", w1: "000000" }, description: "UART DATA AND STATUS -> IDB", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,DSABL", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "000740", w2: "000040", w1: "000000" }, description: "DConstants.IsABLE IDBS (USED TO READ 'PIC'-INFO, EXCEPT PIC-STS)", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,MIPANS", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "001000", w2: "000040", w1: "000000" }, description: "IR 0 USED BY MOPC", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,MAPANS", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "001040", w2: "000040", w1: "000000" }, description: "IR 0 USED BY TRA-INSTRUCTION", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,GPR,SEXT", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "001100", w2: "000000", w1: "000000" }, description: "GPR BITS 0-7 (WITH BITS 8-15 EQUAL TO BIT 7) -> IDB", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,PGS", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "001140", w2: "000040", w1: "000000" }, description: "PAGING STATUS ACCORDING TO LAST REQUEST (NEVER LOCKED)", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,CSR", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "001200", w2: "000040", w1: "000000" }, description: "CACHE STATUS REGISTER", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,PCR", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "001240", w2: "000040", w1: "000000" }, description: "READ PAGING CONTROL REGISTER (NUMBER SELECTED BY PIL)", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,ALD", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "001300", w2: "000040", w1: "000000" }, description: "AUTOMATIC LOAD DESCRIPTOR & PRINT STATUS", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,PANEL", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "001340", w2: "000040", w1: "000000" }, description: "PANEL VECTOR", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,RCS", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "001400", w2: "000040", w1: "000000" }, description: "READ CONTROL STORE", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,PICVC", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "001440", w2: "000040", w1: "000000" }, description: "INTERRUPT VECTOR. CGA.", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,LA", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "001600", w2: "000000", w1: "000000" }, description: "LOGICAL ADDRESS USED BY 'ALU' WHEN JUMP", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,INR", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "001640", w2: "000040", w1: "000000" }, description: "READ INSTALLATION NUMBER FROM BACKWIRING", provides: "IDBS", models: ["nd100", "nd110", "nd120"] }, { token: "IDBS,PICM", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "001700", w2: "000040", w1: "000000" }, description: "INTERRUPT MASK REGISTER. CGA.", provides: "IDBS", nd120_only: true, models: ["nd120"] }, { token: "IDBS,UART", category: "IDBS", display_line: 2, encoding: { w4: "000000", w3: "001740", w2: "000000", w1: "000000" }, description: "READ FROM THE REG. ADDRESSED BY COMM,UART", provides: "IDBS", nd120_only: true, models: ["nd120"] }, { token: "COMM,LDPIL", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000001", w2: "000040", w1: "000000" }, description: "IDB BITS 8-15 -> STATUS BITS 8-15", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,LDGPR", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000002", w2: "000040", w1: "000000" }, description: "IDB -> GENERAL-PURPOSE-REGISTER", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,EWRF", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000003", w2: "000040", w1: "000000" }, description: "IDB -> REGISTER FILE WORD ADDRESSED BY A-OP AND B-OP", requires: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,UART,DATA", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000005", w2: "000000", w1: "000000" }, description: "CONSOLE DATA-REGISTERS", nd120_only: true, models: ["nd120"] }, { token: "COMM,UART,STATUS", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "002005", w2: "000000", w1: "000000" }, description: "CONSOLE STATUS-REGISTER", nd120_only: true, models: ["nd120"] }, { token: "COMM,UART,MODE", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "004005", w2: "000000", w1: "000000" }, description: "CONSOLE MODE-REGISTERS 1/2", nd120_only: true, models: ["nd120"] }, { token: "COMM,UART,COM", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006005", w2: "000000", w1: "000000" }, description: "CONSOLE COMMAND-REGISTER", nd120_only: true, models: ["nd120"] }, { token: "COMM,CLIRQ", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000004", w2: "000000", w1: "000000" }, description: "PREVENT JUMP TO INTR VECT. REMOVE 'PANEL'-EFF ON IRQ-TEST", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,RSDA", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000005", w2: "000000", w1: "000000" }, description: "RESET DATA AVAILABLE IN 'UART'", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,LDPANC", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "004006", w2: "000000", w1: "000000" }, description: "SEND ONE BYTE TO IR 0", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,LDPCR", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006006", w2: "000040", w1: "000000" }, description: "LOAD PCR (NUMBER DETERMINED BY PIL)", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,SIOC", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000007", w2: "000040", w1: "000000" }, description: "LOAD 'I/O-CONTROL' REGISTER", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,SLOW", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000010", w2: "000000", w1: "000000" }, description: "SLOW CYCLE (200 NS)", nd120_only: true, models: ["nd120"] }, { token: "COMM,EPIC", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000011", w2: "000000", w1: "000000" }, description: "A-OPERAND IS AN INSTRUCTION TO 'PIC' (PRIORITY INT CONTR)", requires: "PIC", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,SMPID", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000012", w2: "000000", w1: "000000" }, description: "SET MICRO-PID. PID-BITS WHERE IDB IS '1' ARE FORCED TO '1'", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,START", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000013", w2: "000000", w1: "000000" }, description: "RESET THE 'STOP' FLIP-FLOP", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,SSTOP", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000014", w2: "000000", w1: "000000" }, description: "SET THE 'STOP' FLIP-FLOP", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CLRTC", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000015", w2: "000000", w1: "000000" }, description: "CLEAR THE 20 MS CLOCK FLIP-FLOP", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CLFF", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000016", w2: "000000", w1: "000000" }, description: "CLEAR THE 'OOD' AND THE 'DZD' FLIP-FLOPS", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,LDLC", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000017", w2: "000040", w1: "000000" }, description: "LOAD THE 'LOOP COUNTER' WITH THE 6 LOWER IDB-BITS", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,LDSEG", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000020", w2: "000040", w1: "000000" }, description: "LOAD SEGMENT REGISTER (SELECTS PHYSICAL 64K AREA)", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,LDIRV", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006020", w2: "000040", w1: "000000" }, description: "LOAD INSTRUCTION REGISTER FOR OR-LOGIC USE", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,WCIHM", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000021", w2: "000040", w1: "000000" }, description: "WRITE CACHE INHIBIT MAP (BIT 15 =1 IS NORMAL, = 0 IS INH)", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,SSEMA", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "002021", w2: "000000", w1: "000000" }, description: "THE NEXT REQUEST IS A SEMAPHOR REQUEST. ND-120: no DLY bits (EPROM verified)", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CCLR", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "004021", w2: "000000", w1: "000000" }, description: "CLEAR CACHE (BIT 3 OF CSR MUST BE 0 BEFORE START)", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,LDEXM", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006021", w2: "000040", w1: "000000" }, description: "LOAD EXAMINE MODE", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,IREAD,PT", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000022", w2: "002040", w1: "000000" }, description: "INDIRECT ADDRESS READ (PT-RELATIVE)", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,IREAD,APT", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "002022", w2: "006040", w1: "000000" }, description: "INDIRECT ADDRESS READ (APT-RELATIVE)", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,MAP", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "004022", w2: "000040", w1: "000000" }, description: "USE IDB AS INSTRUCTION (AS IN EXR)", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CNEXT,NWP", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006022", w2: "000040", w1: "000000" }, description: "EXECUTE NEXT INSTRUCTION IF P NOT CHANGED IN LAST CYCLE", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CJMP,F15", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000023", w2: "002040", w1: "000000" }, description: "JUMP IF F15 =1", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CJMP,NF15", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "002023", w2: "002040", w1: "000000" }, description: "JUMP IF F15 -0", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CJMP,F=0", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "004023", w2: "002040", w1: "000000" }, description: "JUMP IF F =0", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CJMP,NF=0", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006023", w2: "002040", w1: "000000" }, description: "JUMP IF F <> 0", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CNEXT,SGR", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000024", w2: "000040", w1: "000000" }, description: "SKIP LST", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CNEXT,NSGR", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "002024", w2: "000040", w1: "000000" }, description: "SKIP GRE", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CNEXT,CRY", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "004024", w2: "000040", w1: "000000" }, description: "SKIP MLS", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CNEXT,NCRY", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006024", w2: "000040", w1: "000000" }, description: "SKIP MGR", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CNEXT,F15", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000025", w2: "000040", w1: "000000" }, description: "SKIP GEQ", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CNEXT,NF15", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "002025", w2: "000040", w1: "000000" }, description: "SKIP LSS", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CNEXT,F=0", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "004025", w2: "000040", w1: "000000" }, description: "SKIP VEQ", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CNEXT,NF=0", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006025", w2: "000040", w1: "000000" }, description: "SKIP EQL", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,JMP,*", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000026", w2: "002040", w1: "000000" }, description: "JMP P-RELATIVE", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,JMP,B", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "002026", w2: "006040", w1: "000000" }, description: "JMP ,B", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,JMP,I", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "004026", w2: "002040", w1: "000000" }, description: "JMP I & I,B", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,JMP,X", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006026", w2: "006040", w1: "000000" }, description: "JMP ,X", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,JMP,XB", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000027", w2: "006040", w1: "000000" }, description: "JMP ,X,B", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,JMP,XI", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "002027", w2: "006040", w1: "000000" }, description: "JMP I,X & I,B,X", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,CONTINUE", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006027", w2: "000040", w1: "000000" }, description: "FETCH NEW INSTRUCTION RELATIVE TO P", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,AREAD,*", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000030", w2: "002040", w1: "000000" }, description: "READ P-RELATIVE", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,AREAD,B", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "002030", w2: "006040", w1: "000000" }, description: "READ ,B", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,AREAD,I", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "004030", w2: "002040", w1: "000000" }, description: "READ I & I,B", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,AREAD,X", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006030", w2: "006040", w1: "000000" }, description: "READ ,X", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,AREAD,XB", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000031", w2: "006040", w1: "000000" }, description: "READ , B,X", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,AREAD,XI", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "002031", w2: "006040", w1: "000000" }, description: "READ I,X & I,B,X", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,AREAD,NEXT", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006031", w2: "000040", w1: "000000" }, description: "READ NEXT ADDRESS", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,AWRITE,*", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000032", w2: "002000", w1: "000000" }, description: "WRITE P-RELATIVE", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,AWRITE,B", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "002032", w2: "006000", w1: "000000" }, description: "WRITE ,B", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,AWRITE,I", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "004032", w2: "002000", w1: "000000" }, description: "WRITE I & I,B", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,AWRITE,X", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006032", w2: "006000", w1: "000000" }, description: "WRITE ,X", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,AWRITE,XB", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000033", w2: "006000", w1: "000000" }, description: "WRITE ,X,B", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,AWRITE,XI", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "002033", w2: "006000", w1: "000000" }, description: "WRITE I,X & I,X,B", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,AWRITE,HOLD", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "004033", w2: "000000", w1: "000000" }, description: "WRITE IN LAST ADDRESS", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,AWRITE,NEXT", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006033", w2: "000000", w1: "000000" }, description: "WRITE IN NEXT ADDRESS", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,RDRQ,PT", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000034", w2: "002040", w1: "000000" }, description: "READ PAGE-TABLE-RELATIVE, ADDRESS FROM IDE", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,RDRQ,APT", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "002034", w2: "002040", w1: "000000" }, description: "READ ALTERNATIVE-PT-RELATIVE, ADDRESS FROM IDB", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,RDRQ,HOLD", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "004034", w2: "002040", w1: "000000" }, description: "READ FROM LAST USED PT. ADDRESS FROM IDB", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,EXRQ", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006034", w2: "002040", w1: "000000" }, description: "EXAMINE", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,WRRQ,PT", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000035", w2: "002000", w1: "000000" }, description: "WRITE PT-RELATIVE, ADDRESS FROM IDB", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,WRRQ,APT", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "002035", w2: "002000", w1: "000000" }, description: "WRITE APT-RELATIVE, ADDRESS FROM IDB", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,WRRQ,HOLD", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "004035", w2: "002000", w1: "000000" }, description: "WRITE IN LAST USED PT, ADDRESS FROM IDB", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,DERQ", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006035", w2: "002000", w1: "000000" }, description: "DEPOSIT", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,ADCS", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "000036", w2: "000000", w1: "000000" }, description: "SET CONTROL STORE ADDRESS. ND-120: no DLY bits (EPROM verified)", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,RWCS", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "002036", w2: "000000", w1: "000000" }, description: "READ OR WRITE IN CONTROL STORE. ND-120: no DLY bits (EPROM verified)", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,MACL", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "004036", w2: "000000", w1: "000000" }, description: "HARD RESET. MASTER CLEAR WITH LOAD CONTROL STORE", nd120_only: true, models: ["nd120"] }, { token: "COMM,XSLOW", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006036", w2: "000000", w1: "000000" }, description: "MAKE EXTRA SLOW CYCLE (425 NS)", nd120_only: true, models: ["nd120"] }, { token: "COMM,IDENT", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "004037", w2: "002000", w1: "000000" }, description: "IDENT BUS REQUEST", models: ["nd100", "nd110", "nd120"] }, { token: "COMM,IOX", category: "COMM", display_line: 2, encoding: { w4: "000000", w3: "006037", w2: "002000", w1: "000000" }, description: "IOX BUS REQUEST", models: ["nd100", "nd110", "nd120"] }, { token: "T,JMP", category: "T_SEQ", display_line: 2, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000000" }, description: "TRUE SEQUENCE IS JUMP", provides: "T_SEQ", models: ["nd100", "nd110", "nd120"] }, { token: "T,JMP0-3", category: "T_SEQ", display_line: 2, encoding: { w4: "000000", w3: "000000", w2: "001000", w1: "000000" }, description: "TRUE SEQ IS JUMP. IR0-3 CONTROLS THE 4 LOWER JUMP ADDR BITS", provides: "T_SEQ", models: ["nd100", "nd110", "nd120"] }, { token: "T,JMPAOPR", category: "T_SEQ", display_line: 2, encoding: { w4: "000000", w3: "006000", w2: "001000", w1: "000000" }, description: "TRUE SEQ IS JUMP. A-OP CONTROLS THE 4 LOWER JUMP ADDR BITS", provides: "T_SEQ", models: ["nd100", "nd110", "nd120"] }, { token: "T,RETURN", category: "T_SEQ", display_line: 2, encoding: { w4: "000000", w3: "000000", w2: "040000", w1: "000000" }, description: "TRUE SEQUENCE IS RETURN", provides: "T_SEQ", models: ["nd100", "nd110", "nd120"] }, { token: "T,NEXT", category: "T_SEQ", display_line: 2, encoding: { w4: "000000", w3: "000000", w2: "100000", w1: "000000" }, description: "TRUE SEQUENCE IS NEXT", provides: "T_SEQ", models: ["nd100", "nd110", "nd120"] }, { token: "T,HOLD", category: "T_STK", display_line: 2, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000000" }, description: "TRUE STACK OPERATION IS HOLD", provides: "T_STK", models: ["nd100", "nd110", "nd120"] }, { token: "T,POP", category: "T_STK", display_line: 2, encoding: { w4: "000000", w3: "000000", w2: "010000", w1: "000000" }, description: "TRUE STACK OPERATION IS POP", provides: "T_STK", models: ["nd100", "nd110", "nd120"] }, { token: "T,LOAD", category: "T_STK", display_line: 2, encoding: { w4: "000000", w3: "000000", w2: "020000", w1: "000000" }, description: "TRUE STACK OPERATION IS LOAD", provides: "T_STK", models: ["nd100", "nd110", "nd120"] }, { token: "T,PUSH", category: "T_STK", display_line: 2, encoding: { w4: "000000", w3: "000000", w2: "030000", w1: "000000" }, description: "TRUE STACK OPERATION IS PUSH", provides: "T_STK", models: ["nd100", "nd110", "nd120"] }, { token: "F,JMP", category: "F_SEQ", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000000" }, description: "FALSE SEQUENCE IS JUMP. USED WITH A CONDITION SETTING", provides: "F_SEQ", models: ["nd100", "nd110", "nd120"] }, { token: "F,RETURN", category: "F_SEQ", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000004" }, description: "FALSE SEQUENCE IS RETURN, USED WITH A CONDITION SETTING", provides: "F_SEQ", models: ["nd100", "nd110", "nd120"] }, { token: "F,NEXT", category: "F_SEQ", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000010" }, description: "FALSE SEQUENCE IS NEXT. USED WITH A CONDITION SETTING", provides: "F_SEQ", models: ["nd100", "nd110", "nd120"] }, { token: "F,HOLD", category: "F_STK", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000000" }, description: "FALSE STACK OPERATION IS HOLD. USED WITH A COND SETTING", provides: "F_STK", models: ["nd100", "nd110", "nd120"] }, { token: "F,POP", category: "F_STK", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000001" }, description: "FALSE STACK OPERATION IS POP. USED WITH A COND SETTING", provides: "F_STK", models: ["nd100", "nd110", "nd120"] }, { token: "F,LOAD", category: "F_STK", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000002" }, description: "FALSE STACK OPERATION IS LOAD. USED WITH A COND SETTING", provides: "F_STK", models: ["nd100", "nd110", "nd120"] }, { token: "F,PUSH", category: "F_STK", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000000", w1: "000003" }, description: "FALSE STACK OPERATION IS PUSH. USED WITH A COND SETTING", provides: "F_STK", models: ["nd100", "nd110", "nd120"] }, { token: "COND,STP", category: "COND", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000400", w1: "000360" }, description: "CONDITION FOR TESTING IS 'STOP'", provides: "COND", models: ["nd100", "nd110", "nd120"] }, { token: "COND,PXM", category: "COND", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000400", w1: "000220" }, description: "CONDITION FOR TESTING IS PREFIX-MODE", provides: "COND", models: ["nd100", "nd110", "nd120"] }, { token: "COND,OVF", category: "COND", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000400", w1: "000240" }, description: "CONDITION FOR TESTING IS 'OVERFLOW' FROM ALU", provides: "COND", models: ["nd100", "nd110", "nd120"] }, { token: "COND,CRY", category: "COND", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000400", w1: "000260" }, description: "CONDITION FOR TESTING IS 'CARRY' FROM ALU", provides: "COND", models: ["nd100", "nd110", "nd120"] }, { token: "COND,F11", category: "COND", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000400", w1: "000300" }, description: "CONDITION FOR TESTING IS BIT 11 FROM ALU", provides: "COND", models: ["nd100", "nd110", "nd120"] }, { token: "COND,F15", category: "COND", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000400", w1: "000320" }, description: "CONDITION FOR TESTING IS BIT 15 FROM ALU", provides: "COND", models: ["nd100", "nd110", "nd120"] }, { token: "COND,F=0", category: "COND", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000400", w1: "000340" }, description: "CONDITION FOR TESTING IS 'ALL ZEROS' FROM ALU", provides: "COND", models: ["nd100", "nd110", "nd120"] }, { token: "COND,LC=0", category: "COND", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000400", w1: "000020" }, description: "CONDITION FOR TESTING IS 'LOOP-COUNTER' CONTENT =0", provides: "COND", models: ["nd100", "nd110", "nd120"] }, { token: "COND,FETCH", category: "COND", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000400", w1: "000100" }, description: "CONDITION FOR TESTING IS LAST MEMORY REQUEST WAS FETCH", provides: "COND", models: ["nd100", "nd110", "nd120"] }, { token: "COND,IRQ", category: "COND", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000400", w1: "000040" }, description: "COND FOR TEST IS 'IRQ'. CHECKS LEV 10-15 IF 'COMM, CLIRQ'", provides: "COND", models: ["nd100", "nd110", "nd120"] }, { token: "COND,RESTR", category: "COND", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000400", w1: "000060" }, description: "COND FOR TESTING IS 'RESTRICTED-MODE'. TRUE IF RING 0-1", provides: "COND", models: ["nd100", "nd110", "nd120"] }, { token: "COND,OOD", category: "COND", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000400", w1: "000120" }, description: "CONDITION FOR TESTING IS THE 'ONE-OUT-DETECT' FLIP-FLOP", provides: "COND", models: ["nd100", "nd110", "nd120"] }, { token: "COND,DZD", category: "COND", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000400", w1: "000000" }, description: "COND FOR TESTING IS THE 'DOUBLE-ZERO-DETECT' FLIP-FLOP", provides: "COND", models: ["nd100", "nd110", "nd120"] }, { token: "COND,COND", category: "COND", display_line: 3, encoding: { w4: "000000", w3: "000000", w2: "000400", w1: "000160" }, description: "COND FOR TEST IS OUTCOME OF LATEST TEST (DELAYS TESTS)", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,CDIGI", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000011", w1: "170000" }, description: "COUNTER CONTROLLING NUMBER OF DIGITS IN AN OCTAL NUMBER", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,UPPNR", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000012", w1: "130000" }, description: "SCRATCH WORD KEEPING UPPER ADDR LIMIT IN MOPC DUMP CMND", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,CURNR", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000013", w1: "130000" }, description: "SCRATCH WORD KEEPING CURRENT ADDR IN A MOPC DUMP COMMAND", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,CNT10", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000017", w1: "170000" }, description: "COUNTER CONTROLLING NO. OF OCTAL NOS/LINE IN MOPC DUMP CMND", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,PRCHR", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000016", w1: "160000" }, description: "SCRATCH WORD : THE NEXT CHARACTER TO BE WRITTEN BY MOPC", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,TXT1", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000014", w1: "160000" }, description: "SCRATCH WORD : DISPLAY TEXT", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,TXT2", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000013", w1: "160000" }, description: "SCRATCH WORD : DISPLAY TEXT", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,SCRAM", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000015", w1: "140000" }, description: "SCR WD : SCRAMBLED REPRESENTATION OF LETTERS IN MOPC-INPUT", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,OCTNR", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000015", w1: "150000" }, description: "SCRATCH WORD : OCTAL NUMBER ASSEMBLED FROM MOPC-INPUT", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,DISPL", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000015", w1: "160000" }, description: "TYPE OF RUNNING DISPLAY", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,OCTAD", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000013", w1: "150000" }, description: "ADDRESS OF RUNNING DISPLAY", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,OCTA2", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000012", w1: "160000" }, description: "WORD TO EXTEND ADDRESS IN OCTAD TO 24 BITS", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,DEPOS", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000017", w1: "150000" }, description: "SOME OCTAL DIGIT WAS WRITTEN SINCE LAST COMMAND TERMINATED", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,DUMPF", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000016", w1: "150000" }, description: "SCRATCH WORD INDICATING THAT A DUMP IS IN PROGRESS", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,RONLY", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000014", w1: "150000" }, description: "THE EXAMINED REGISTER IS READ-ONLY", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,WRTYP", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000012", w1: "150000" }, description: "TYPE OF VARIABLE IN CASE OF DEPOSIT", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,WRADR", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000011", w1: "150000" }, description: "ADDRESS OF VARIABLE IN CASE OF DEPOSIT", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,ACTLV", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000017", w1: "140000" }, description: "SCRATCH WORD HOLDING 'ACTIVE LEVELS'", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,PVL", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000015", w1: "170000" }, description: "SCRATCH WORD HOLDING 'PREVIOUS LEVEL'", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,IIE", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000012", w1: "170000" }, description: "SCR WORD HOLDING 'PIC' REPRESENTATION OF LAST IIE SETTING", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,PID", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000014", w1: "170000" }, description: "SCR WORD HOLDING MICROPROGRAM-KNOWN BITS OF PID REGISTER", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,PIE", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000013", w1: "170000" }, description: "SCRATCH WORD HOLDING THE 'PIE' REGISTER", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,STATUS", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000017", w1: "160000" }, description: "SCRATCH WORD HOLDING THE LATEST 'COMM, SIOC' INFORMATION", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,OCTN2", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000015", w1: "130000" }, description: "SCRATCH WORD EXPANDING THE 'AB, OCTNA' TO 24 BITS", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,NUMBR", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000012", w1: "120000" }, description: "SCRATCH WORD HOLDING AN OCTAL NUMBER BEING PRINTED BY MOPC", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,OPR", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000011", w1: "160000" }, description: "SCRATCH WORD HOLDING THE 'OPR' REGISTER VALUE", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,BRKPT", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000016", w1: "140000" }, description: "SCRATCH WORD HOLDING BREAKPOINT ADDRESS", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,SINGL", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000014", w1: "140000" }, description: "SCRATCH WORD COUNTING SINGLE-INSTRUCTION", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,BPFLG", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000013", w1: "140000" }, description: "SCRATCH WORD INDICATING THAT BREAKPOINT IS ON", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,MACL", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000011", w1: "140000" }, description: "SCRATCH WORD HOLDING RETRY COUNTER FOR LOAD AFTER MACL", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,LMP", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000012", w1: "140000" }, description: "SCRATCH WORD HOLDING THE 'LMP' REGISTER VALUE", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,EXMOD", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000011", w1: "130000" }, description: "SCRATCH WORD HOLDING THE 'EXM' REGISTER", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,MANIR", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000014", w1: "130000" }, description: "SCRATCH WORD HOLDING FLAG FOR MANUAL IR", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,SSAVE", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000016", w1: "130000" }, description: "SCRATCH WORD HOLDING STS DURING DECIMAL INTRUCTIONS", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "XRF", category: "SPECIAL", display_line: 1, encoding: { w4: "000004", w3: "000000", w2: "000000", w1: "000000" }, description: "SELECT EXTENDED REGISTER FILE", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,UCIL", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000014", w1: "120000" }, description: "SCRATCH WORD HOLDING CACHE INHIBIT UPPER LIMIT", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,LCIL", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000013", w1: "120000" }, description: "SCRATCH REGISTER HOLDING CACHE INHIBIT LOWER LIMIT", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,PGS", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000015", w1: "120000" }, description: "COPY OF PGS FROM LAST PF/PV", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,STBNK", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000011", w1: "120000" }, description: "GLOBAL BANK POINTER TO THE SEGMENT TABLE BANK", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,STSRT", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000016", w1: "120000" }, description: "GLOBAL POINTER TO THE SEGMENT TABLE WITHIN THE BANK", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,CMBNK", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000017", w1: "120000" }, description: "GLOBAL POINTER TO THE CORE MAP TABLE BANK", provides: "AB", models: ["nd100", "nd110", "nd120"] }, { token: "AB,BAUD", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000010", w1: "010000" }, description: "BAUD RATE THUMBWHEEL VALUE", provides: "AB", nd120_only: true, models: ["nd120"] }, { token: "AB,OLD303", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000015", w1: "050000" }, description: "SAVED IOX 303 A REG TO SPOT UART DIFFS", provides: "AB", nd120_only: true, models: ["nd120"] }, { token: "AB,NOISE", category: "AB_REG", display_line: 1, encoding: { w4: "000000", w3: "000000", w2: "000010", w1: "020000" }, description: "SET ON MACL,RESET ON STOP,INHIBIT LOAD AFTER MACL", provides: "AB", nd120_only: true, models: ["nd120"] }] }, nd110Fields: { model: "ND-110", word_size_bits: 48, byte_count: 6, byte_order: "little-endian", fields: { CSBIT_11_0: { bits: [11, 0], width: 12, description: "Branch address (when SCOND=0). The effective 13-bit branch address is (CSBIT20 << 12) | CSBIT_11_0.", default: 0, used_when: "SCOND == 0" }, LCC: { bits: [11, 8], width: 4, description: "Loop Counter Control (only when SCOND=1)", default: 0, used_when: "SCOND == 1" }, TSEL: { bits: [7, 4], width: 4, description: "Test Selector - selects which condition to test (only when SCOND=1)", default: 0, used_when: "SCOND == 1" }, F_SEQ: { bits: [3, 2], width: 2, description: "False-path sequence control (F,JMP / F,NEXT / F,RETURN). Only when SCOND=1.", default: 0, used_when: "SCOND == 1" }, F_STK: { bits: [1, 0], width: 2, description: "False-path stack operation (F,HOLD / F,POP / F,LOAD / F,PUSH). Only when SCOND=1.", default: 0, used_when: "SCOND == 1" }, AOP: { bits: [15, 12], width: 4, description: "A-Operand register selection (0-17 octal)", default: 0 }, BOP: { bits: [19, 16], width: 4, description: "B-Operand register selection (0-17 octal)", default: 0 }, CSBIT20: { bits: [20, 20], width: 1, description: "Address Extension Bit - high bit (bit 12) of the 13-bit branch address", default: 0 }, CSDELAY_BIT21: { bits: [21, 21], width: 1, description: "Delay control bit (timing-related; ignored for logical comparisons)", default: 0, notes: "Part of the delay/timing control, see microcode.h and ND110MicroCode/Program.cs" }, LOOP: { bits: [22, 22], width: 1, description: "LCOUNT - Count loop counter; if result false, return and hold", default: 0, token: "LCOUNT" }, CONDENABL: { bits: [23, 23], width: 1, description: "Enable conditional sequencing. When set, use FALSE-path specs if condition is false.", default: 0, token: "CONDENABL" }, SCOND: { bits: [24, 24], width: 1, description: "Set Condition - when set, the lower 12 bits encode condition tests (LCC/TSEL/F_SEQ/F_STK) instead of a branch address.", default: 0 }, VECT: { bits: [25, 25], width: 1, description: "Vector Jump Selector", default: 0 }, CSDELAY_BITS_27_26: { bits: [27, 26], width: 2, description: "Delay control bits (timing-related; ignored for logical comparisons)", default: 0 }, T_STK: { bits: [29, 28], width: 2, description: "True-path stack operation (T,HOLD / T,POP / T,LOAD / T,PUSH)", default: 0 }, T_SEQ: { bits: [31, 30], width: 2, description: "True-path sequence control (T,JMP / T,RETURN / T,NEXT / T,JMP0-3)", default: 0 }, COMM: { bits: [36, 32], width: 5, description: "Command field - selects a 5-bit command code", default: 0 }, IDBS: { bits: [41, 37], width: 5, description: "Internal Data Bus Source - selects what drives the IDB", default: 0 }, MIS: { bits: [43, 42], width: 2, description: "MISO field - shift mode when ALUM=MIC (ROT/ZIN/LIN)", default: 0 }, ALUM: { bits: [45, 44], width: 2, description: "ALU Mode Modifier (FMU/FDV/IR/MIC)", default: 0 }, CIN: { bits: [47, 46], width: 2, description: "Carry-In Select (CRY,C / CRY,GPR)", default: 0 }, RBSEL: { bits: [49, 48], width: 2, description: "B-Operand Select", default: 0 }, XRF: { bits: [50, 50], width: 1, description: "Extended Register File select", default: 0, token: "XRF" }, RASEL: { bits: [52, 51], width: 2, description: "A-Operand Select", default: 0 }, ALUSRC_STS: { bits: [54, 53], width: 2, description: "ALU Mode Control / Status update (STS,LO / STS,EA / STS,ES)", default: 0 }, ALUI: { bits: [63, 55], width: 9, description: "ALU Function Select. This 9-bit field encodes the composite ALU operation\n(source operand selector + function + carry-in combination). It is decoded\nas a single ALUF,xxx token (see tokens/nd110-tokens.yaml for all ALUF,xxx\nentries and their w4 encodings).\n", default: 0, notes: "For ND-110, only bits 55-63 of the 64-bit canonical form map here.\nIn the 48-bit ND-110 word, this field occupies the upper 9 bits.\n" } }, categories: { line_1: { name: "Registers and ALU", description: "A/B register operands, ALU function and destination", fields: ["AOP", "BOP", "RASEL", "RBSEL", "XRF", "ALUI", "ALUSRC_STS", "CIN", "ALUM", "MIS"] }, line_2: { name: "Bus and Sequencing", description: "Internal data bus, commands, true-path sequencing", fields: ["IDBS", "COMM", "T_SEQ", "T_STK", "LOOP"] }, line_3: { name: "Branch and Condition", description: "Branch target OR condition test and false-path sequencing", fields: ["CSBIT_11_0", "CSBIT20", "SCOND", "CONDENABL", "VECT", "LCC", "TSEL", "F_SEQ", "F_STK"] } }, ignored_for_comparison: ["CSDELAY_BIT21", "CSDELAY_BITS_27_26"] }, nd120Fields: { model: "ND-120", word_size_bits: 64, byte_count: 8, byte_order: "little-endian", inherits_from: "nd110-fields.yaml", fields: { ALUI: { bits: [63, 55], width: 9, description: "ALU Function Select (full 9 bits on ND-120)", default: 0 } }, rom_bit_flip: { applies_to: "ND-120", description: "ND-120 EPROM images have bits 22-27 inverted vs the assembled form", mask: "0x0FC00000", operation: "xor", purpose: "When reading raw EPROM contents (e.g. from 45132L.bin + 45133L.bin),\nXOR with this mask to obtain the canonical assembled form used by the\nassembler and disassembler. When writing ROMs, apply the same XOR in\nreverse.\n" } } };

// src/loadDefsEmbedded.ts
var snap = definitions_default;
var VALID_CATEGORIES = [
  "A_REG",
  "B_REG",
  "AB_REG",
  "PIC",
  "ALUF",
  "ALUD",
  "ALUM",
  "STS",
  "CRY",
  "MIS",
  "IDBS",
  "COMM",
  "T_SEQ",
  "T_STK",
  "F_SEQ",
  "F_STK",
  "COND",
  "SPECIAL",
  "UNKNOWN"
];
function toCategory(s) {
  return VALID_CATEGORIES.includes(s) ? s : "UNKNOWN";
}
function toModels(raw) {
  if (!raw) return ["nd100", "nd110", "nd120"];
  return raw.filter(
    (m) => m === "nd100" || m === "nd110" || m === "nd120"
  );
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
      raw.encoding.w1
    ],
    encodingValue: encodingToBigInt(
      raw.encoding.w4,
      raw.encoding.w3,
      raw.encoding.w2,
      raw.encoding.w1
    ),
    models: toModels(raw.models),
    nd120Only: raw.nd120_only === true,
    provides: raw.provides,
    requires: raw.requires
  };
}
function toFields(raw) {
  const m = /* @__PURE__ */ new Map();
  if (!raw?.fields) return m;
  for (const [name, f] of Object.entries(raw.fields)) {
    m.set(name, {
      name,
      bits: [f.bits[0], f.bits[1]],
      width: f.width,
      description: f.description,
      default: f.default ?? 0
    });
  }
  return m;
}
var cachedPacks = {};
function loadEmbeddedDefinitions(model) {
  const cached = cachedPacks[model];
  if (cached) return cached;
  const rawTokens = model === "nd120" ? snap.nd120Tokens.tokens : snap.nd110Tokens.tokens;
  const tokens = rawTokens.map(toToken);
  const fields = toFields(snap.nd110Fields);
  if (model === "nd120") {
    for (const [name, def] of toFields(snap.nd120Fields)) {
      fields.set(name, def);
    }
  }
  const tokensByName = /* @__PURE__ */ new Map();
  const tokensByCategory = /* @__PURE__ */ new Map();
  for (const t of tokens) {
    tokensByName.set(t.name, t);
    const existing = tokensByCategory.get(t.category);
    if (existing) existing.push(t);
    else tokensByCategory.set(t.category, [t]);
  }
  const pack = {
    model,
    tokens,
    tokensByName,
    tokensByCategory,
    fields
  };
  cachedPacks[model] = pack;
  return pack;
}

// src/commands.ts
function getDefaultModel() {
  const config = vscode2.workspace.getConfiguration("nd-microcode");
  const m = config.get("defaultModel", "nd110");
  return m === "nd120" ? "nd120" : "nd110";
}
function detectModelFromSource(source) {
  const first = source.split(/\r?\n/, 50).join("\n");
  const m = /^%#MODEL\s+(nd110|nd120)\b/im.exec(first);
  if (m) return m[1];
  return getDefaultModel();
}
async function pickDefaultOutputPath(sourceUri, suffix) {
  const base = sourceUri.fsPath.replace(/\.uc$/i, "");
  const suggested = vscode2.Uri.file(base + suffix);
  const chosen = await vscode2.window.showSaveDialog({
    defaultUri: suggested,
    filters: { "ND MicroCode": ["CODE", "bin", "code"] }
  });
  return chosen ?? suggested;
}
async function assembleCurrentFile() {
  const editor = vscode2.window.activeTextEditor;
  if (!editor || editor.document.languageId !== "uc") {
    void vscode2.window.showErrorMessage(
      "Open a .uc microcode file to use this command."
    );
    return;
  }
  const source = editor.document.getText();
  const model = detectModelFromSource(source);
  const pack = loadDefinitionsSafe(model);
  if (!pack) return;
  const result = assembleSource(source, pack, { model });
  const errors = result.diagnostics.filter((d) => d.severity === "error");
  const warnings = result.diagnostics.filter((d) => d.severity === "warning");
  if (errors.length > 0) {
    const choice = await vscode2.window.showWarningMessage(
      `Assembly completed with ${errors.length} error(s). Continue writing output?`,
      "Show errors",
      "Write anyway",
      "Cancel"
    );
    if (choice === "Show errors") {
      const panel = vscode2.window.createOutputChannel("ND MicroCode");
      panel.show();
      for (const e of errors) {
        panel.appendLine(
          `ERROR line ${e.line} addr 0o${e.address?.toString(8) ?? "?"}: ${e.message}`
        );
      }
      return;
    }
    if (choice !== "Write anyway") return;
  }
  const outUri = await pickDefaultOutputPath(editor.document.uri, ".CODE");
  const bytes = binaryToCodeBytes(result.binary);
  await import_node_fs.promises.writeFile(outUri.fsPath, bytes);
  void vscode2.window.showInformationMessage(
    `Assembled ${result.binary.size} records to ${path.basename(outUri.fsPath)}` + (warnings.length > 0 ? ` (${warnings.length} warnings)` : "")
  );
}
async function assembleAndSplit() {
  const editor = vscode2.window.activeTextEditor;
  if (!editor || editor.document.languageId !== "uc") {
    void vscode2.window.showErrorMessage(
      "Open a .uc microcode file to use this command."
    );
    return;
  }
  const source = editor.document.getText();
  const model = detectModelFromSource(source);
  const pack = loadDefinitionsSafe(model);
  if (!pack) return;
  const result = assembleSource(source, pack, { model });
  const errors = result.diagnostics.filter((d) => d.severity === "error");
  if (errors.length > 0) {
    const choice = await vscode2.window.showWarningMessage(
      `Assembly has ${errors.length} error(s). Continue?`,
      "Yes",
      "No"
    );
    if (choice !== "Yes") return;
  }
  const outDirUri = await vscode2.window.showOpenDialog({
    canSelectFiles: false,
    canSelectFolders: true,
    canSelectMany: false,
    openLabel: "Select output folder for ROM chip images"
  });
  if (!outDirUri || outDirUri.length === 0) return;
  const outDir = outDirUri[0].fsPath;
  const base = path.basename(editor.document.uri.fsPath, ".uc");
  const { highChip, lowChip } = splitRoms(result.binary, { fill: "empty" });
  const highPath = path.join(outDir, `${base}_HIGH.bin`);
  const lowPath = path.join(outDir, `${base}_LOW.bin`);
  const codePath = path.join(outDir, `${base}.CODE`);
  await import_node_fs.promises.writeFile(codePath, binaryToCodeBytes(result.binary));
  await import_node_fs.promises.writeFile(highPath, highChip);
  await import_node_fs.promises.writeFile(lowPath, lowChip);
  const version = readMicrocodeVersion(result.binary);
  void vscode2.window.showInformationMessage(
    `Wrote ${base}.CODE + ${base}_HIGH.bin + ${base}_LOW.bin (${highChip.length} bytes each, version ${version?.letter ?? "?"} / ${version?.octalValue ?? "?"}, model ${model})`
  );
}
async function disassembleBinary() {
  const uris = await vscode2.window.showOpenDialog({
    canSelectFiles: true,
    canSelectMany: false,
    openLabel: "Open microcode binary (.CODE)",
    filters: { "ND MicroCode binary": ["CODE", "bin", "code"] }
  });
  if (!uris || uris.length === 0) return;
  const inputUri = uris[0];
  const bytes = await import_node_fs.promises.readFile(inputUri.fsPath);
  let microcode;
  if (bytes.length === ROM_SIZE_BYTES * 2) {
    microcode = parseCodeBytes(new Uint8Array(bytes));
  } else if (bytes.length === ROM_SIZE_BYTES) {
    void vscode2.window.showErrorMessage(
      "This looks like a single 32 KiB EPROM chip. You need both chips - use the ROM combiner CLI (tools/rom-combiner) to merge them first, then open the resulting .CODE file."
    );
    return;
  } else {
    microcode = parseCodeBytes(new Uint8Array(bytes));
  }
  if (microcode.size === 0) {
    void vscode2.window.showErrorMessage("No microcode records found in the file.");
    return;
  }
  const formResult = detectForm(microcode);
  const model = formResult.form;
  const canonical = /* @__PURE__ */ new Map();
  for (const [addr, v] of microcode) {
    canonical.set(addr, model === "nd110" ? v ^ 0x0FC00000n : v);
  }
  const pack = loadDefinitionsSafe(model);
  if (!pack) return;
  const symPath = inputUri.fsPath.replace(/\.(CODE|code|bin)$/i, ".SYMBOLS.TXT");
  let symbols;
  try {
    const symText = await import_node_fs.promises.readFile(symPath, "utf8");
    symbols = new Map(parseSymbolsText(symText));
  } catch {
  }
  const compiled = compileDisassemblerPack(pack);
  const instrs = disassembleMap(canonical, compiled, symbols);
  const source = formatProgram(instrs);
  const version = readMicrocodeVersion(canonical);
  const header = `% Disassembled from ${path.basename(inputUri.fsPath)}
% Model: ${model.toUpperCase()} (detected, confidence ${formResult.confidence.toFixed(2)})
% Version: ${version?.octalValue ?? "?"} (${version?.letter ?? "?"})
% Records: ${microcode.size}
` + (symbols ? `% Symbols loaded: ${symbols.size}
` : "% No symbols loaded\n") + `%

`;
  const doc = await vscode2.workspace.openTextDocument({
    language: "uc",
    content: header + source
  });
  await vscode2.window.showTextDocument(doc);
}
async function assembleCurrentLine() {
  const editor = vscode2.window.activeTextEditor;
  if (!editor || editor.document.languageId !== "uc") {
    void vscode2.window.showErrorMessage(
      "Open a .uc microcode file to use this command."
    );
    return;
  }
  const source = editor.document.getText();
  const model = detectModelFromSource(source);
  const pack = loadDefinitionsSafe(model);
  if (!pack) return;
  const sm = preprocess(source);
  const cursorLine = editor.selection.active.line + 1;
  let target = sm.instructions[0];
  for (const ins of sm.instructions) {
    if (ins.line <= cursorLine) target = ins;
  }
  if (!target) {
    void vscode2.window.showInformationMessage("No instruction at cursor.");
    return;
  }
  const diagnostics = [];
  const canonicalValue = translateInstruction(target, pack, sm.labels, diagnostics);
  const storage = model === "nd110" ? canonicalValue ^ 0x0FC00000n : canonicalValue;
  const fields = decodeFields(canonicalValue, target.address);
  const panel = vscode2.window.createOutputChannel("ND MicroCode");
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
    Number(canonicalValue >> 48n & 0xFFFFn),
    Number(canonicalValue >> 32n & 0xFFFFn),
    Number(canonicalValue >> 16n & 0xFFFFn),
    Number(canonicalValue & 0xFFFFn)
  ];
  panel.appendLine(
    `  w4=${ws[0].toString(8).padStart(6, "0")} w3=${ws[1].toString(8).padStart(6, "0")} w2=${ws[2].toString(8).padStart(6, "0")} w1=${ws[3].toString(8).padStart(6, "0")}`
  );
  panel.appendLine(``);
  panel.appendLine(`Decoded fields (canonical):`);
  panel.appendLine(
    `  ALUI (63:55)=0o${fields.aluI.toString(8)}  STS (54:53)=${fields.aluSts}  RASEL (52:51)=${fields.rasel}  XRF=${fields.xrf}  RBSEL (49:48)=${fields.rbsel}`
  );
  panel.appendLine(
    `  CIN (47:46)=${fields.cin}  ALUM (45:44)=${fields.alum}  MIS (43:42)=${fields.mis}  IDBS (41:37)=0o${fields.idbs.toString(8)}  COMM (36:32)=0o${fields.comm.toString(8)}`
  );
  panel.appendLine(
    `  T_SEQ (31:30)=${fields.tSeq}  T_STK (29:28)=${fields.tStk}  VECT=${fields.vect}  SCOND=${fields.scond}  CONDENABL=${fields.condEnabl}  LOOP=${fields.loop}`
  );
  panel.appendLine(
    `  CSBIT20=${fields.csbit20}  BOP (19:16)=0o${fields.bop.toString(8)}  AOP (15:12)=0o${fields.aop.toString(8)}  ` + (fields.scond === 1 ? `LCC=${fields.lcc} TSEL=${fields.tsel} F_SEQ=${fields.fSeq} F_STK=${fields.fStk}` : `branch=0o${fields.branchAddress.toString(8)}`)
  );
  panel.appendLine(``);
  if (diagnostics.length === 0) {
    panel.appendLine(`[OK] No validation issues.`);
  } else {
    panel.appendLine(`Validation:`);
    for (const d of diagnostics) {
      const prefix = d.severity === "error" ? "[ERROR]" : "[warn]";
      panel.appendLine(`  ${prefix} ${d.message}`);
    }
  }
}
function loadDefinitionsSafe(model) {
  try {
    return loadEmbeddedDefinitions(model);
  } catch (e) {
    void vscode2.window.showErrorMessage(
      `Failed to load ${model} definitions: ${e instanceof Error ? e.message : String(e)}`
    );
    return void 0;
  }
}
function registerCommands(context) {
  context.subscriptions.push(
    vscode2.commands.registerCommand(
      "nd-microcode.assembleCurrent",
      () => void assembleCurrentFile()
    ),
    vscode2.commands.registerCommand(
      "nd-microcode.assembleAndSplit",
      () => void assembleAndSplit()
    ),
    vscode2.commands.registerCommand(
      "nd-microcode.disassembleBinary",
      () => void disassembleBinary()
    ),
    vscode2.commands.registerCommand(
      "nd-microcode.assembleLine",
      () => void assembleCurrentLine()
    )
  );
}

// src/bitView.ts
var vscode3 = __toESM(require("vscode"));
var BIT_VIEW_VIEW_TYPE = "nd-microcode.bitView";
var FIELDS = [
  { name: "ALUI", bitHi: 63, bitLo: 55, color: "alu", description: "ALU function (composite src+func+dest, 9 bits)" },
  { name: "STS", bitHi: 54, bitLo: 53, color: "sts", description: "Status update / ALU shift mode" },
  { name: "RASEL", bitHi: 52, bitLo: 51, color: "reg", description: "A-operand select" },
  { name: "XRF", bitHi: 50, bitLo: 50, color: "special", description: "Extended register file" },
  { name: "RBSEL", bitHi: 49, bitLo: 48, color: "reg", description: "B-operand select" },
  { name: "CIN", bitHi: 47, bitLo: 46, color: "alu", description: "Carry-in select" },
  { name: "ALUM", bitHi: 45, bitLo: 44, color: "alu", description: "ALU mode modifier" },
  { name: "MIS", bitHi: 43, bitLo: 42, color: "alu", description: "Shift mode (when ALUM=MIC)" },
  { name: "IDBS", bitHi: 41, bitLo: 37, color: "idbs", description: "Internal Data Bus source" },
  { name: "COMM", bitHi: 36, bitLo: 32, color: "comm", description: "Command" },
  { name: "T_SEQ", bitHi: 31, bitLo: 30, color: "seq", description: "True-path sequence" },
  { name: "T_STK", bitHi: 29, bitLo: 28, color: "seq", description: "True-path stack op" },
  { name: "csdelay", bitHi: 27, bitLo: 26, color: "timing", description: "Delay / timing bits" },
  { name: "VECT", bitHi: 25, bitLo: 25, color: "seq", description: "Vector-jump selector" },
  { name: "SCOND", bitHi: 24, bitLo: 24, color: "cond", description: "Set condition (low 12 bits carry cond fields)" },
  { name: "ECOND", bitHi: 23, bitLo: 23, color: "cond", description: "CONDENABL - enable conditional sequencing" },
  { name: "LOOP", bitHi: 22, bitLo: 22, color: "special", description: "LCOUNT - count loop counter" },
  { name: "csdelay21", bitHi: 21, bitLo: 21, color: "timing", description: "Delay bit (timing)" },
  { name: "CSBIT20", bitHi: 20, bitLo: 20, color: "branch", description: "Address extension (high bit of 13-bit branch addr)" },
  { name: "BOP", bitHi: 19, bitLo: 16, color: "reg", description: "B-operand register" },
  { name: "AOP", bitHi: 15, bitLo: 12, color: "reg", description: "A-operand register" },
  { name: "BRANCH", bitHi: 11, bitLo: 0, color: "branch", description: "SCOND=0: branch addr bits 11:0. SCOND=1: LCC/TSEL/F_SEQ/F_STK" }
];
function extractField2(v, hi, lo) {
  const width = BigInt(hi - lo + 1);
  const mask = (1n << width) - 1n;
  return Number(v >> BigInt(lo) & mask);
}
function toBinary(v, bits) {
  let out = "";
  for (let i = bits - 1; i >= 0; i--) {
    out += v >> BigInt(i) & 1n ? "1" : "0";
  }
  return out;
}
function escapeHtml(s) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function renderHtml(state) {
  const styles = `
    body {
      font-family: var(--vscode-editor-font-family, monospace);
      font-size: 12px;
      color: var(--vscode-foreground);
      background: var(--vscode-editor-background);
      margin: 0;
      padding: 8px;
    }
    .header { font-weight: bold; margin-bottom: 8px; }
    .header .addr { color: var(--vscode-textLink-foreground); }
    .tokens { margin-bottom: 12px; opacity: 0.8; font-family: monospace; }
    .bit-grid { display: flex; flex-wrap: wrap; margin-bottom: 8px; }
    .bit {
      width: 18px; height: 22px;
      display: inline-flex; align-items: center; justify-content: center;
      border: 1px solid var(--vscode-panel-border);
      font-size: 10px; font-weight: bold;
      margin: 1px;
    }
    .bit.set { background: var(--vscode-editorInfo-foreground); color: var(--vscode-editor-background); }
    .bit.clear { background: var(--vscode-editor-background); opacity: 0.5; }
    .bit-row { display: flex; align-items: center; gap: 4px; margin-bottom: 4px; }
    .bit-range { width: 70px; opacity: 0.7; font-size: 10px; }
    table { border-collapse: collapse; width: 100%; font-size: 11px; }
    th, td {
      text-align: left;
      padding: 4px 6px;
      border-bottom: 1px solid var(--vscode-panel-border);
    }
    th { opacity: 0.8; font-weight: normal; }
    td.value { font-family: monospace; font-weight: bold; }
    td.desc { opacity: 0.7; font-size: 10px; }
    .color-alu     td:first-child { border-left: 3px solid #4fc3f7; padding-left: 4px; }
    .color-reg     td:first-child { border-left: 3px solid #81c784; padding-left: 4px; }
    .color-idbs    td:first-child { border-left: 3px solid #ffb74d; padding-left: 4px; }
    .color-comm    td:first-child { border-left: 3px solid #f06292; padding-left: 4px; }
    .color-seq     td:first-child { border-left: 3px solid #ba68c8; padding-left: 4px; }
    .color-cond    td:first-child { border-left: 3px solid #ff8a65; padding-left: 4px; }
    .color-sts     td:first-child { border-left: 3px solid #90a4ae; padding-left: 4px; }
    .color-timing  td:first-child { border-left: 3px solid #9e9e9e; padding-left: 4px; opacity: 0.6; }
    .color-special td:first-child { border-left: 3px solid #ffd54f; padding-left: 4px; }
    .color-branch  td:first-child { border-left: 3px solid #7986cb; padding-left: 4px; }
    .empty {
      display: flex; align-items: center; justify-content: center;
      min-height: 200px;
      opacity: 0.5;
      text-align: center;
    }
    .error { color: var(--vscode-errorForeground); }
  `;
  if (!state) {
    return `<!DOCTYPE html>
<html><head><style>${styles}</style></head><body>
<div class="empty">
  <div>Place cursor in a .uc microcode file<br>to see the bit breakdown.</div>
</div>
</body></html>`;
  }
  const binary2 = toBinary(state.canonical, 64);
  const bitGrid = [];
  for (let row = 0; row < 8; row++) {
    const hi = 63 - row * 8;
    const lo = hi - 7;
    const rowBits = [];
    for (let i = 0; i < 8; i++) {
      const bitIdx = hi - i;
      const bit = binary2[63 - bitIdx];
      rowBits.push(
        `<div class="bit ${bit === "1" ? "set" : "clear"}" title="bit ${bitIdx}">${bitIdx}</div>`
      );
    }
    bitGrid.push(
      `<div class="bit-row"><span class="bit-range">${hi}..${lo}</span>${rowBits.join("")}</div>`
    );
  }
  const rows = [];
  for (const f of FIELDS) {
    const val = extractField2(state.canonical, f.bitHi, f.bitLo);
    const width = f.bitHi - f.bitLo + 1;
    const binStr = val.toString(2).padStart(width, "0");
    const octStr = "0o" + val.toString(8);
    const bitsLabel = f.bitHi === f.bitLo ? `${f.bitHi}` : `${f.bitHi}:${f.bitLo}`;
    rows.push(
      `<tr class="color-${f.color}"><td>${escapeHtml(f.name)}</td><td><code>${bitsLabel}</code></td><td class="value"><code>${binStr}</code></td><td class="value">${octStr}</td><td class="value">${val}</td><td class="desc">${escapeHtml(f.description)}</td></tr>`
    );
  }
  const errorsBlock = state.errors.length > 0 ? `<div class="error"><strong>Validation:</strong><ul>${state.errors.map((e) => `<li>${escapeHtml(e)}</li>`).join("")}</ul></div>` : "";
  return `<!DOCTYPE html>
<html><head><style>${styles}</style></head><body>
<div class="header">
  <span class="addr">0o${state.address.toString(8).padStart(6, "0")}</span>
  <span>&middot; line ${state.line}</span>
  <span>&middot; model ${state.model}</span>
</div>
<div class="tokens">${escapeHtml(state.tokens.join(" "))}</div>
<div class="bit-grid">${bitGrid.join("")}</div>
<div>
  <strong>Canonical:</strong> <code>0x${state.canonical.toString(16).padStart(16, "0")}</code><br>
  <strong>ROM storage:</strong> <code>0x${state.storage.toString(16).padStart(16, "0")}</code>
</div>
<br>
<table>
  <thead>
    <tr>
      <th>Field</th><th>Bits</th><th>Binary</th><th>Octal</th><th>Decimal</th><th>Meaning</th>
    </tr>
  </thead>
  <tbody>${rows.join("")}</tbody>
</table>
${errorsBlock}
</body></html>`;
}
var BitViewController = class {
  panel;
  disposables = [];
  packs = /* @__PURE__ */ new Map();
  lastInstructionKey = "";
  open(context) {
    if (this.panel) {
      this.panel.reveal(vscode3.ViewColumn.Beside);
      return;
    }
    this.panel = vscode3.window.createWebviewPanel(
      BIT_VIEW_VIEW_TYPE,
      "ND MicroCode Bit View",
      { viewColumn: vscode3.ViewColumn.Beside, preserveFocus: true },
      { enableScripts: false, retainContextWhenHidden: true }
    );
    this.panel.webview.html = renderHtml(void 0);
    this.panel.onDidDispose(() => {
      this.panel = void 0;
      for (const d of this.disposables) d.dispose();
      this.disposables = [];
      this.lastInstructionKey = "";
    }, null, context.subscriptions);
    this.disposables.push(
      vscode3.window.onDidChangeTextEditorSelection((e) => this.refresh(e.textEditor)),
      vscode3.window.onDidChangeActiveTextEditor((e) => this.refresh(e)),
      vscode3.workspace.onDidChangeTextDocument((e) => {
        const active = vscode3.window.activeTextEditor;
        if (active && e.document === active.document) this.refresh(active, true);
      })
    );
    this.refresh(vscode3.window.activeTextEditor);
  }
  refresh(editor, force = false) {
    if (!this.panel) return;
    if (!editor || editor.document.languageId !== "uc") {
      this.panel.webview.html = renderHtml(void 0);
      this.lastInstructionKey = "";
      return;
    }
    const state = this.computeState(editor);
    if (!state) {
      this.panel.webview.html = renderHtml(void 0);
      this.lastInstructionKey = "";
      return;
    }
    const key = `${editor.document.uri.toString()}|${state.address}|${state.line}|${state.canonical.toString(16)}`;
    if (key === this.lastInstructionKey && !force) return;
    this.lastInstructionKey = key;
    this.panel.webview.html = renderHtml(state);
  }
  computeState(editor) {
    const source = editor.document.getText();
    const model = detectModel(source);
    const pack = this.loadPack(model);
    if (!pack) return void 0;
    const sm = preprocess(source);
    if (sm.instructions.length === 0) return void 0;
    const cursorLine = editor.selection.active.line + 1;
    let target = sm.instructions[0];
    for (const ins of sm.instructions) {
      if (ins.line <= cursorLine) target = ins;
    }
    const diagnostics = [];
    const canonical = translateInstruction(target, pack, sm.labels, diagnostics);
    const storage = model === "nd110" ? canonical ^ 0x0FC00000n : canonical;
    const fields = decodeFields(canonical, target.address);
    return {
      address: target.address,
      line: target.line,
      model,
      tokens: target.args,
      canonical,
      storage,
      fields,
      errors: diagnostics.map((d) => `line ${d.line}: ${d.message}`)
    };
  }
  loadPack(model) {
    const cached = this.packs.get(model);
    if (cached) return cached;
    try {
      const pack = loadEmbeddedDefinitions(model);
      this.packs.set(model, pack);
      return pack;
    } catch (e) {
      void vscode3.window.showErrorMessage(
        `Failed to load ${model} definitions: ${e instanceof Error ? e.message : String(e)}`
      );
      return void 0;
    }
  }
};
function detectModel(source) {
  const first = source.split(/\r?\n/, 50).join("\n");
  const m = /^%#MODEL\s+(nd110|nd120)\b/im.exec(first);
  if (m) return m[1];
  const config = vscode3.workspace.getConfiguration("nd-microcode");
  const c = config.get("defaultModel", "nd110");
  return c === "nd120" ? "nd120" : "nd110";
}
var controller = new BitViewController();
function registerBitView(context) {
  return vscode3.commands.registerCommand(
    "nd-microcode.openBitView",
    () => controller.open(context)
  );
}

// src/extension.ts
function activate(context) {
  context.subscriptions.push(registerHoverProvider());
  context.subscriptions.push(registerBitView(context));
  registerCommands(context);
}
function deactivate() {
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate,
  deactivate
});
/*! Bundled license information:

js-yaml/dist/js-yaml.mjs:
  (*! js-yaml 4.1.1 https://github.com/nodeca/js-yaml @license MIT *)
*/
//# sourceMappingURL=extension.js.map
