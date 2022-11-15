'use strict';
var mkdirp = require("../");
var path = require("path");
var fs = require("fs");
var test = require("tap").test;
var _0755 = parseInt("0755", 8);
test("root", function(e) {
  var lastbooted_filename = path.resolve("/");
  mkdirp(lastbooted_filename, _0755, function(canCreateDiscussions) {
    if (canCreateDiscussions) {
      throw canCreateDiscussions;
    }
    fs.stat(lastbooted_filename, function(canCreateDiscussions, statObj) {
      if (canCreateDiscussions) {
        throw canCreateDiscussions;
      }
      e.ok(statObj.isDirectory(), "target is a directory");
      e.end();
    });
  });
});

