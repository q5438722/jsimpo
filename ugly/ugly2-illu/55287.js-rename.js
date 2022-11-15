"use strict";

const common = require("../common");

const assert = require("assert");

var { inspect } = require("util");

const N = 2;
function cb() {
  throw new Error();
}for (let e = 0; e < N; ++e) {
  process.nextTick(common.mustCall(cb));
}process.on("uncaughtException", common.mustCall(N));process.on("exit", function () {
  process.removeAllListeners("uncaughtException");
});[null, 1, "test", {}, [], Infinity, true].forEach(e => {
  assert.throws(() => process.nextTick(e), { code: "ERR_INVALID_CALLBACK", name: "TypeError", message: `Callback must be a function. Received ${inspect(e)}` });
});
