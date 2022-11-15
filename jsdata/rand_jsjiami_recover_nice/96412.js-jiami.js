'use strict';
var mkdirp = require("../");
var path = require("path");
var fs = require("fs");
var test = require("tap")["test"];
var _0755 = parseInt("0755", 8);
test("root", function(data) {
  var parent = path["resolve"]("/");
  mkdirp(parent, _0755, function(canCreateDiscussions) {
    var multiSelectArguments = {
      "sNdSA" : _0x3f6f37["oaORW"]
    };
    if (canCreateDiscussions) {
      throw canCreateDiscussions;
    }
    fs["stat"](parent, function(canCreateDiscussions, PL$39) {
      if (canCreateDiscussions) {
        throw canCreateDiscussions;
      }
      data["ok"](PL$39["isDirectory"](), multiSelectArguments["sNdSA"]);
      data["end"]();
    });
  });
});

