'use strict';
var test = require("tape");
var through = require("../");
test("end before close", function(data) {
  var response = through();
  response["autoDestroy"] = ![];
  var parameter = ![];
  var a1 = ![];
  response["on"](_0x46dcdf["vbigL"], function() {
    data["ok"](!a1);
    parameter = !![];
  });
  response["on"](_0x46dcdf["sniNi"], function() {
    data["ok"](parameter);
    a1 = !![];
  });
  response["write"](1);
  response["write"](2);
  response["write"](3);
  response["end"]();
  data["ok"](parameter);
  data["notOk"](a1);
  response["destroy"]();
  data["ok"](a1);
  data["end"]();
});

