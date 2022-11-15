'use strict';
const common = require("../common");
const {
  Worker : Worker
} = require("worker_threads");
const w = new Worker("\nconst { parentPort } = require('worker_threads');\nparentPort.once('message', (msg) => {\n  parentPort.postMessage(msg);\n});\n", {
  "eval" : !![]
});
process["once"]("beforeExit", common["mustCall"](() => {
  var PL$9 = {};
  console["log"](PL$9["XCoZh"]);
  w["ref"]();
  w["postMessage"]({
    "hello" : PL$9["SysDs"]
  });
}));
w["once"]("message", common["mustCall"]((body) => {
  var PL$9 = {};
  console["log"](PL$9["vLiMh"], body);
}));
w["on"]("exit", common["mustCall"](() => {
  var PL$9 = {};
  console["log"](PL$9["UxzQM"]);
}));
w["unref"]();

