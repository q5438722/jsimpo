const parser = require("../");

const test = require("tap").test;

const fs = require("fs");

const path = require("path");

const files = { main: path.join(__dirname, "/files/main.js"), foo: path.join(__dirname, "/files/foo.js"), bar: path.join(__dirname, "/files/bar.js") };
const sources = Object.keys(files).reduce(function (e, r) {
  e[r] = fs.readFileSync(files[r], "utf8");return e;
}, {});
test("deps", function (e) {
  e.plan(1);const r = parser();
  r.end({ file: files.main, entry: true });const i = [];
  r.on("data", function (e) {
    i.push(e);
  });r.on("end", function () {
    e.same(i.sort(cmp), [{ id: files.main, file: files.main, source: sources.main, entry: true, deps: { "./foo": files.foo } }, { id: files.foo, file: files.foo, source: sources.foo, deps: { "./bar": files.bar } }, { id: files.bar, file: files.bar, source: sources.bar, deps: {} }].sort(cmp));
  });
});function cmp(e, r) {
  return e.id < r.id ? -1 : 1;
}
