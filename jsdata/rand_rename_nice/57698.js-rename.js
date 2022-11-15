'use strict';
const common = require("../common");
if (process.config.variables.arm_version === "7") {
  common.skip("Too slow for armv7 bots");
}
let complete = 0;
(function sendOutgoing() {
  if (++complete < 1e8) {
    process.nextTick(sendOutgoing);
  }
})();
setImmediate(function() {
  console.log("ok");
});

