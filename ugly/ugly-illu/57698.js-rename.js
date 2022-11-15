"use strict";

const common = require("../common");

if (process.config.variables.arm_version === "7") {
  common.skip("Too slow for armv7 bots");
}var complete = 0;
(function o() {
  if (++complete < 1e8) process.nextTick(o);
})();setImmediate(function () {
  console.log("ok");
});
