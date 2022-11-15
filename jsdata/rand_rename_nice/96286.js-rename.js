'use strict';
var parse = require("../");
var test = require("tape");
test("dotted alias", function(t) {
  var dst = parse(["--a.b", "22"], {
    default : {
      "a.b" : 11
    },
    alias : {
      "a.b" : "aa.bb"
    }
  });
  t.equal(dst.a.b, 22);
  t.equal(dst.aa.bb, 22);
  t.end();
});
test("dotted default", function(t) {
  var dst = parse("", {
    default : {
      "a.b" : 11
    },
    alias : {
      "a.b" : "aa.bb"
    }
  });
  t.equal(dst.a.b, 11);
  t.equal(dst.aa.bb, 11);
  t.end();
});
test("dotted default with no alias", function(t) {
  var e = parse("", {
    default : {
      "a.b" : 11
    }
  });
  t.equal(e.a.b, 11);
  t.end();
});

