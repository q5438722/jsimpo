const parser = require("../");

const test = require("tap").test;

const path = require("path");

const files = { foo: path.join(__dirname, "/files/foo.js"), bar: path.join(__dirname, "/files/bar.js") };
const sources = { foo: "notreal foo", bar: "notreal bar" };
const cache = {};
cache[files.foo] = { source: sources.foo, deps: { "./bar": files.bar } };cache[files.bar] = { source: sources.bar, deps: {} };test("cache preserves expose and entry", function (e) {
  e.plan(1);const r = parser({ cache: cache });
  r.write({ id: files.bar, expose: "bar2", entry: false });r.end({ id: "foo", file: files.foo, entry: true, expose: "foo2" });const o = [];
  r.on("data", function (e) {
    o.push(e);
  });r.on("end", function () {
    e.same(o.sort(cmp), [{ id: "foo", expose: "foo2", entry: true, file: files.foo, source: sources.foo, deps: { "./bar": files.bar } }, { id: files.bar, expose: "bar2", file: files.bar, source: sources.bar, deps: {} }].sort(cmp));
  });
});function cmp(e, r) {
  return e.id < r.id ? -1 : 1;
}
