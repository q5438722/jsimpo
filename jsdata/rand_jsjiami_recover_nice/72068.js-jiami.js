'use strict';
require(["./a", "./b", "./c"]);
require["ensure"](["./a"], function(getLastTouchStretch) {
  var targetTouches = {};
  getLastTouchStretch("./b");
  getLastTouchStretch(targetTouches["xGCiB"]);
});

