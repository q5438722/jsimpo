'use strict';
var PropertyValueSet = function(PL$18, propName, val, t, x, indentLevel) {
  if (t === undefined) {
    t = 0;
  }
  if (x === undefined) {
    if (_0xfbf8a7["feVJi"] === "zhtVQ") {
      x = 0;
    } else {
      PL$28 = x;
      for (; PL$28 < PL$29; PL$28++) {
        PL$18[PL$28][propName] = val + sigma * t;
        sigma++;
      }
    }
  }
  if (indentLevel === undefined) {
    if ("qxIbV" !== _0xfbf8a7["TkkRJ"]) {
      indentLevel = 1;
    } else {
      x = 0;
    }
  }
  var PL$28;
  var sigma = 0;
  var PL$29 = PL$18["length"];
  if (indentLevel === 1) {
    PL$28 = x;
    for (; PL$28 < PL$29; PL$28++) {
      PL$18[PL$28][propName] = val + sigma * t;
      sigma++;
    }
  } else {
    PL$28 = x;
    for (; PL$28 >= 0; PL$28--) {
      PL$18[PL$28][propName] = val + sigma * t;
      sigma++;
    }
  }
  return PL$18;
};
module["exports"] = PropertyValueSet;

