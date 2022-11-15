'use strict';
var test = require("tape");
var through = require("../");
test("end before close", function(t) {
  var ts = through();
  ts.autoDestroy = false;
  var multiPolyExtent = false;
  var eofed = false;
  ts.on("end", function() {
    t.ok(!eofed);
    multiPolyExtent = true;
  });
  ts.on("close", function() {
    t.ok(multiPolyExtent);
    eofed = true;
  });
  ts.write(1);
  ts.write(2);
  ts.write(3);
  ts.end();
  t.ok(multiPolyExtent);
  t.notOk(eofed);
  ts.destroy();
  t.ok(eofed);
  t.end();
});

