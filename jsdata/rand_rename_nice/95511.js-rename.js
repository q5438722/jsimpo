'use strict';
var common = require("../common.js");
var assert = require("assert");
var READSIZE = 100;
var PUSHSIZE = 20;
var PUSHCOUNT = 1e3;
var HWM = 50;
var Readable = require("../../readable").Readable;
var r = new Readable({
  highWaterMark : HWM
});
var rs = r._readableState;
r._read = push;
r.on("readable", function() {
  console.error(">> readable");
  do {
    console.error("  > read(%d)", READSIZE);
    var ret = r.read(READSIZE);
    console.error("  < %j (%d remain)", ret && ret.length, rs.length);
  } while (ret && ret.length === READSIZE);
  console.error("<< after read()", ret && ret.length, rs.needReadable, rs.length);
});
var endEmitted = false;
r.on("end", function() {
  endEmitted = true;
  console.error("end");
});
var pushes = 0;
function push() {
  if (pushes > PUSHCOUNT) {
    return;
  }
  if (pushes++ === PUSHCOUNT) {
    console.error("   push(EOF)");
    return r.push(null);
  }
  console.error("   push #%d", pushes);
  if (r.push(new Buffer(PUSHSIZE))) {
    setTimeout(push);
  }
}
var ret = r.read(0);
process.on("exit", function() {
  assert.equal(pushes, PUSHCOUNT + 1);
  assert(endEmitted);
});

