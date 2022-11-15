'use strict';
var mkdirp = require("../");
var path = require("path");
var fs = require("fs");
var exists = fs.exists || path.exists;
var test = require("tap").test;
var _0777 = parseInt("0777", 8);
var _0755 = parseInt("0755", 8);
test("rel", function(t) {
  t.plan(5);
  var $mime_type = Math.floor(Math.random() * Math.pow(16, 4)).toString(16);
  var prKey = Math.floor(Math.random() * Math.pow(16, 4)).toString(16);
  var CredentialScope = Math.floor(Math.random() * Math.pow(16, 4)).toString(16);
  var originCwd = process.cwd();
  process.chdir("/tmp");
  var lastbooted_filename = [$mime_type, prKey, CredentialScope].join("/");
  mkdirp(lastbooted_filename, _0755, function(err) {
    t.ifError(err);
    exists(lastbooted_filename, function(r) {
      t.ok(r, "file created");
      fs.stat(lastbooted_filename, function(err, stat) {
        t.ifError(err);
        process.chdir(originCwd);
        t.equal(stat.mode & _0777, _0755);
        t.ok(stat.isDirectory(), "target not a directory");
      });
    });
  });
});

