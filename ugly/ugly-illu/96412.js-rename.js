const mkdirp = require("../");

const path = require("path");

const fs = require("fs");

const test = require("tap").test;

const _0755 = 493;
test("root", function (e) {
  const t = path.resolve("/");
  mkdirp(t, _0755, function (r) {
    if (r) throw r;fs.stat(t, function (r, t) {
      if (r) throw r;e.ok(t.isDirectory(), "target is a directory");e.end();
    });
  });
});
