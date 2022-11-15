'use strict';
const common = require("../common");
const {
  Worker : Worker
} = require("worker_threads");
const w = new Worker(`\nconst { parentPort } = require('worker_threads');\nparentPort.once('message', (msg) => {\n  parentPort.postMessage(msg);\n});\n`, {
  eval : true
});
process.once("beforeExit", common.mustCall(() => {
  console.log("beforeExit");
  w.ref();
  w.postMessage({
    hello : "world"
  });
}));
w.once("message", common.mustCall((contextReference) => {
  console.log("message", contextReference);
}));
w.on("exit", common.mustCall(() => {
  console.log("exit");
}));
w.unref();

