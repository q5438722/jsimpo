'use strict';
var common = require("../common.js");
var assert = require("assert");
var READSIZE = 100;
var PUSHSIZE = 20;
var PUSHCOUNT = 1000;
var HWM = 50;
var Readable = require("../../readable")["Readable"];
var r = new Readable({
  "highWaterMark" : HWM
});
var rs = r["_readableState"];
r["_read"] = push;
r["on"]("readable", function() {
  var PL$74 = {};
  console["error"](">> readable");
  do {
    console["error"](PL$74["mzAwb"], READSIZE);
    var PL$23 = r["read"](READSIZE);
    console["error"]("  < %j (%d remain)", PL$23 && PL$23["length"], rs["length"]);
  } while (PL$23 && PL$23["length"] === READSIZE);
  console["error"](PL$74["rZspx"], PL$23 && PL$23["length"], rs["needReadable"], rs["length"]);
});
var endEmitted = ![];
r["on"]("end", function() {
  var PL$74 = {};
  endEmitted = !![];
  console["error"](PL$74["KWimw"]);
});
var pushes = 0;
function push() {
  if (pushes > PUSHCOUNT) {
    return;
  }
  if (pushes++ === PUSHCOUNT) {
    console["error"]("   push(EOF)");
    return r["push"](null);
  }
  console["error"](_0x2968b3["GHjJB"], pushes);
  if (r["push"](new Buffer(PUSHSIZE))) {
    setTimeout(push);
  }
}
var ret = r["read"](0);
process["on"]("exit", function() {
  assert["equal"](pushes, PUSHCOUNT + 1);
  assert(endEmitted);
});

