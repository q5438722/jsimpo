const parse = require("../");

const test = require("tape");

test("dotted alias", function (a) {
  const e = parse(["--a.b", "22"], { default: { "a.b": 11 }, alias: { "a.b": "aa.bb" } });
  a.equal(e.a.b, 22);a.equal(e.aa.bb, 22);a.end();
});test("dotted default", function (a) {
  const e = parse("", { default: { "a.b": 11 }, alias: { "a.b": "aa.bb" } });
  a.equal(e.a.b, 11);a.equal(e.aa.bb, 11);a.end();
});test("dotted default with no alias", function (a) {
  const e = parse("", { default: { "a.b": 11 } });
  a.equal(e.a.b, 11);a.end();
});
