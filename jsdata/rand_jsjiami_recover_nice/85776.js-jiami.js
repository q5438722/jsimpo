'use strict';
var SafeRange = require("./SafeRange");
var CountAllMatching = function(query, i, compare, fn, value) {
  if (fn === undefined) {
    fn = 0;
  }
  if (value === undefined) {
    value = query["length"];
  }
  var _0x4455ff = 0;
  if (SafeRange(query, fn, value)) {
    var key = fn;
    for (; key < value; key++) {
      if ("ogrpu" === _0x13e5aa["EyGMq"]) {
        var criterion = query[key];
        if (criterion[i] === compare) {
          if (_0x13e5aa["exfFR"] === _0x13e5aa["HqWYb"]) {
            var criterion = query[key];
            if (criterion[i] === compare) {
              _0x4455ff++;
            }
          } else {
            _0x4455ff++;
          }
        }
      } else {
        value = query["length"];
      }
    }
  }
  return _0x4455ff;
};
module["exports"] = CountAllMatching;

