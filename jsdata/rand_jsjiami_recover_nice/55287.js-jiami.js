'use strict';
const common = require("../common");
const assert = require("assert");
const {
  inspect : inspect
} = require("util");
const N = 2;
function cb() {
  throw new Error;
}
for (let i = 0; i < N; ++i) {
  process["nextTick"](common["mustCall"](cb));
}
process["on"]("uncaughtException", common["mustCall"](N));
process["on"]("exit", function() {
  var args = {};
  process["removeAllListeners"](args["bAoFQ"]);
});
[null, 1, "test", {}, [], Infinity, !![]]["forEach"]((callback) => {
  assert["throws"](() => {
    return process["nextTick"](callback);
  }, {
    "code" : _0x32d8a0["wwqmX"],
    "name" : "TypeError",
    "message" : "Callback must be a function. Received " + inspect(callback)
  });
});

