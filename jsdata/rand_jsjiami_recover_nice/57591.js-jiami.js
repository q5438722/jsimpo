'use strict';
const spawn = require("child_process")["spawn"];
const path = require("path");
const childPath = path["join"](__dirname, "child-process-persistent.js");
var child = spawn(process["execPath"], [childPath], {
  "detached" : !![],
  "stdio" : "ignore"
});
console["log"](child["pid"]);
child["unref"]();

