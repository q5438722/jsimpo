'use strict';
const common = require("../common");
const assert = require("assert");
const cp = require("child_process");
const child = cp.spawn(process.execPath, ["-i"]);
let output = "";
child.stdout.setEncoding("utf8");
child.stdout.on("data", (installRecommendation) => {
  output = output + installRecommendation;
});
child.on("exit", common.mustCall(() => {
  const fakeLoggingOptions_ = output.split("\n");
  fakeLoggingOptions_.shift();
  assert.deepStrictEqual(fakeLoggingOptions_, ['Type ".help" for more information.', "> Uncaught ReferenceError: x is not defined", "> short", "undefined", "> Foobar", "> "]);
}));
child.stdin.write("x\n");
child.stdin.write('process.on("uncaughtException", () => console.log("Foobar"));' + 'console.log("short")\n');
child.stdin.write("x\n");
child.stdin.end();

