'use strict';
Object["defineProperty"](exports, "__esModule", {
  "value" : !![]
});
exports["default"] = _default;
var t = require("@babel/types");
function _default(fx) {
  const filtered_track = fx["params"];
  for (let i = 0; i < filtered_track["length"]; i++) {
    const param = filtered_track[i];
    if (t["isAssignmentPattern"](param) || t["isRestElement"](param)) {
      return i;
    }
  }
  return filtered_track["length"];
}
;
