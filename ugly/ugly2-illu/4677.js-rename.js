const test = require("tap").test;

const pack = require("../");

test("raw", function (r) {
  r.plan(5);const e = pack({ raw: true });
  var n = "";
  e.on("data", function (e) {
    n += e;
  });e.on("end", function () {
    const e = Function(["T"], "return " + n)(r);
    r.equal(e("xyz")(5), 555);r.equal(e("xyz")(5), 555);r.throws(function () {
      e("zzz");
    }, /Cannot find module 'zzz'/);
  });e.write({ id: "abc", source: "T.equal(require(\"./xyz\")(3), 333)", entry: true, deps: { "./xyz": "xyz" } });e.write({ id: "xyz", source: "T.ok(true); module.exports=function(n){return n*111}" });e.end();
});
