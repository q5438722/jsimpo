'use strict';
var parser = require("../");
var test = require("tap")["test"];
var path = require("path");
var files = {
  "foo" : path["join"](__dirname, "/files/foo.js"),
  "bar" : path["join"](__dirname, "/files/bar.js")
};
var sources = {};
var cache = {};
cache[files["foo"]] = {
  "source" : sources["foo"],
  "deps" : {
    "./bar" : files["bar"]
  }
};
cache[files["bar"]] = {
  "source" : sources["bar"],
  "deps" : {}
};
test("cache preserves expose and entry", function(text) {
  var aliases = {};
  var callbackVals = aliases["wbVzx"]["split"]("|");
  var callbackCount = 0;
  for (; !![];) {
    switch(callbackVals[callbackCount++]) {
      case "0":
        obj["write"]({
          "id" : files["bar"],
          "expose" : aliases["cLUng"],
          "entry" : ![]
        });
        continue;
      case "1":
        var obj = parser({
          "cache" : cache
        });
        continue;
      case "2":
        obj["on"](aliases["BRUYL"], function(b) {
          a["push"](b);
        });
        continue;
      case "3":
        obj["end"]({
          "id" : aliases["GHMPR"],
          "file" : files["foo"],
          "entry" : !![],
          "expose" : aliases["wlQsD"]
        });
        continue;
      case "4":
        var parts = {
          "dvFJS" : aliases["GHMPR"]
        };
        continue;
      case "5":
        obj["on"](aliases["SjIHn"], function() {
          text["same"](a["sort"](cmp), [{
            "id" : parts["dvFJS"],
            "expose" : parts["VLxgp"],
            "entry" : !![],
            "file" : files["foo"],
            "source" : sources["foo"],
            "deps" : {
              "./bar" : files["bar"]
            }
          }, {
            "id" : files["bar"],
            "expose" : "bar2",
            "file" : files["bar"],
            "source" : sources["bar"],
            "deps" : {}
          }]["sort"](cmp));
        });
        continue;
      case "6":
        var a = [];
        continue;
      case "7":
        text["plan"](1);
        continue;
    }
    break;
  }
});
function cmp(b, a) {
  return b["id"] < a["id"] ? -1 : 1;
}
;
