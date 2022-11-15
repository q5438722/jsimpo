'use strict';
const common = require("../common");
if (process["config"]["variables"]["arm_version"] === "7") {
  common["skip"]("Too slow for armv7 bots");
}
let complete = 0;
(function callback() {
  if (++complete < 100000000) {
    process["nextTick"](callback);
  }
})();
setImmediate(function() {
  console["log"]("ok");
});

