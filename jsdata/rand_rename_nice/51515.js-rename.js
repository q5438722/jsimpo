'use strict';
Object.defineProperty(exports, "__esModule", {
  value : true
});
exports.default = _default;
var t = require("@babel/types");
function _default(thing) {
  const visible_indexes = thing.params;
  for (let i = 0; i < visible_indexes.length; i++) {
    const param = visible_indexes[i];
    if (t.isAssignmentPattern(param) || t.isRestElement(param)) {
      return i;
    }
  }
  return visible_indexes.length;
}
;
