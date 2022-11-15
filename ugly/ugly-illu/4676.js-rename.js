const test = require("tap").test;

const pack = require("../");

test("pack", function (r) {
  r.plan(4);const e = pack();
  var n = "";
  e.on("data", function (e) {
    n += e;
  });e.on("end", function () {
    const e = Function(["T"], "return " + n)(r);
    r.equal(e("xyz")(5), 555);r.equal(e("xyz")(5), 555);
  });e.end(JSON.stringify([{ id: "abc", source: "T.equal(require(\"./xyz\")(3), 333)", entry: true, deps: { "./xyz": "xyz" } }, { id: "xyz", source: "T.ok(true); module.exports=function(n){return n*111}" }]));
});
