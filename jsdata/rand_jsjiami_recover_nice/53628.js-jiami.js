'use strict';
require("../common");
const {
  Duplex : Duplex
} = require("stream");
const {
  inspect : inspect
} = require("util");
const {
  strictEqual : strictEqual
} = require("assert");
const {
  REPLServer : REPLServer
} = require("repl");
let output = "";
const inout = new Duplex({
  "decodeStrings" : ![]
});
inout["_read"] = function() {
  var PL$13 = {};
  this["push"](PL$13["htrDd"]);
  this["push"](null);
};
inout["_write"] = function(installRecommendation, canCreateDiscussions, saveNotifs) {
  output = output + installRecommendation;
  saveNotifs();
};
const repl = new REPLServer({
  "input" : inout,
  "output" : inout,
  "useColors" : !![]
});
inout["isTTY"] = !![];
const repl2 = new REPLServer({
  "input" : inout,
  "output" : inout
});
process["on"]("exit", function() {
  var callbackVals = _0x207668["hNzhz"]["split"]("|");
  var callbackCount = 0;
  for (; !![];) {
    switch(callbackVals[callbackCount++]) {
      case "0":
        strictEqual(repl["writer"]["options"]["colors"], !![]);
        continue;
      case "1":
        strictEqual(output["includes"]("\"'string'\""), !![]);
        continue;
      case "2":
        strictEqual(inspect["defaultOptions"]["colors"], ![]);
        continue;
      case "3":
        strictEqual(repl2["writer"]["options"]["colors"], !![]);
        continue;
      case "4":
        strictEqual(output["includes"]("'\u001b[32m\\'string\\'\u001b[39m'"), ![]);
        continue;
    }
    break;
  }
});

