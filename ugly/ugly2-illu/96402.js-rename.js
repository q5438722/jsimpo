const mkdirp = require("../");

const path = require("path");

const fs = require("fs");

const exists = fs.exists || path.exists;

const test = require("tap").test;

const _0777 = 511;
const _0755 = 493;
test("sync perm", function (e) {
  e.plan(4);const r = "/tmp/" + (Math.random() * 1073741824).toString(16) + ".json";
  mkdirp.sync(r, _0755);exists(r, function (t) {
    e.ok(t, "file created");fs.stat(r, function (t, r) {
      e.ifError(t);e.equal(r.mode & _0777, _0755);e.ok(r.isDirectory(), "target not a directory");
    });
  });
});test("sync root perm", function (e) {
  e.plan(3);const r = "/tmp";
  mkdirp.sync(r, _0755);exists(r, function (t) {
    e.ok(t, "file created");fs.stat(r, function (t, r) {
      e.ifError(t);e.ok(r.isDirectory(), "target not a directory");
    });
  });
});
