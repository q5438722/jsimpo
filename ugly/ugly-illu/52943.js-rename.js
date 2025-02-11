"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../compile/util");

const def = { keyword: ["maxContains", "minContains"], type: "array", schemaType: "number", code({ keyword: e, parentSchema: t, it: i }) {
    if (t.contains === undefined) {
      util_1.checkStrictMode(i, `"${e}" without "contains" is ignored`);
    }
  } };
exports.default = def;
