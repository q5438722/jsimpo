'use strict';
const common = require("../common");
const assert = require("assert");
const cp = require("child_process");
const child = cp["spawn"](process["execPath"], ["-i"]);
let output = "";
child["stdout"]["setEncoding"]("utf8");
child["stdout"]["on"]("data", (installRecommendation) => {
  output = output + installRecommendation;
});
child["on"]("exit", common["mustCall"](() => {
  var _0x396c8e = {};
  const expected = output["split"]("\n");
  expected["shift"]();
  assert["deepStrictEqual"](expected, ['Type ".help" for more information.', "> Uncaught ReferenceError: x is not defined", _0x396c8e["LiMpR"], _0x396c8e["aiylW"], _0x396c8e["QoGVC"], "> "]);
}));
child["stdin"]["write"]("x\n");
child["stdin"]["write"]('process.on("uncaughtException", () => console.log("Foobar"));' + 'console.log("short")\n');
child["stdin"]["write"]("x\n");
child["stdin"]["end"]();

