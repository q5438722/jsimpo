'use strict';
var parse = require("../");
var test = require("tape");
test("dotted alias", function(range) {
  var items = parse([_0x328d22["WfvoS"], "22"], {
    "default" : {
      "a.b" : 11
    },
    "alias" : {
      "a.b" : "aa.bb"
    }
  });
  range["equal"](items["a"]["b"], 22);
  range["equal"](items["aa"]["bb"], 22);
  range["end"]();
});
test("dotted default", function(range) {
  var items = parse("", {
    "default" : {
      "a.b" : 11
    },
    "alias" : {
      "a.b" : _0x32e332["cnGrW"]
    }
  });
  range["equal"](items["a"]["b"], 11);
  range["equal"](items["aa"]["bb"], 11);
  range["end"]();
});
test("dotted default with no alias", function(range) {
  var cols = parse("", {
    "default" : {
      "a.b" : 11
    }
  });
  range["equal"](cols["a"]["b"], 11);
  range["end"]();
});

