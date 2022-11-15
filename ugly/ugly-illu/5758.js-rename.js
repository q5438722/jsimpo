const mkdirp = require("../");

const path = require("path");

const fs = require("fs");

const exists = fs.exists || path.exists;

const test = require("tap").test;

const _0777 = 511;
const _0755 = 493;
test("rel", function (a) {
  a.plan(5);const r = Math.floor(Math.random() * Math.pow(16, 4)).toString(16);
  const t = Math.floor(Math.random() * Math.pow(16, 4)).toString(16);
  const o = Math.floor(Math.random() * Math.pow(16, 4)).toString(16);
  const e = process.cwd();
  process.chdir("/tmp");const i = [Math.floor(Math.random() * Math.pow(16, 4)).toString(16), Math.floor(Math.random() * Math.pow(16, 4)).toString(16), Math.floor(Math.random() * Math.pow(16, 4)).toString(16)].join("/");
  mkdirp(i, _0755, function (r) {
    a.ifError(r);exists(i, function (r) {
      a.ok(r, "file created");fs.stat(i, function (r, t) {
        a.ifError(r);process.chdir(e);a.equal(t.mode & _0777, _0755);a.ok(t.isDirectory(), "target not a directory");
      });
    });
  });
});
