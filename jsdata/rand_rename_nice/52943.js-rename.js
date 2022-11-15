'use strict';
Object.defineProperty(exports, "__esModule", {
  value : true
});
const util_1 = require("../../compile/util");
const def = {
  keyword : ["maxContains", "minContains"],
  type : "array",
  schemaType : "number",
  code({
    keyword : keyword,
    parentSchema : params,
    it : helper
  }) {
    if (params.contains === undefined) {
      util_1.checkStrictMode(helper, `"${keyword}" without "contains" is ignored`);
    }
  }
};
exports.default = def;

