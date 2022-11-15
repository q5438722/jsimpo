const test = require("tape");

const through = require("../");

test("end before close", function (e) {
  const t = through();
  t.autoDestroy = false;var o = false;
  var r = false;
  t.on("end", function () {
    e.ok(!r);o = true;
  });t.on("close", function () {
    e.ok(o);r = true;
  });t.write(1);t.write(2);t.write(3);t.end();e.ok(o);e.notOk(r);t.destroy();e.ok(r);e.end();
});
