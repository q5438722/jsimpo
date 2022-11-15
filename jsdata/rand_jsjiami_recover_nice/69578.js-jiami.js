'use strict';
require["ensure"]([], function(saveNotifs) {
  saveNotifs("./split.js");
});
require["ensure"]([], function(getLastTouchStretch) {
  var targetTouches = {};
  getLastTouchStretch(targetTouches["Xqgxh"]);
}, "split");
it("sorts the usedIds array to prevent churn", function() {
  var fs = require("fs");
  var m = require(_0x4e4bd4["KqDdb"]);
  var _0x206840 = JSON["parse"](fs["readFileSync"](m["join"](__dirname, "records.json"), _0x4e4bd4["HxEKo"]));
  expect(_0x206840["chunks"]["usedIds"])["toEqual"]([0, 1, 2]);
});

