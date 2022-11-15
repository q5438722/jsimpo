'use strict';
var test = require("tap").test;
var pack = require("../");
test("pack", function(t) {
  t.plan(4);
  var request = pack();
  var suffix = "";
  request.on("data", function(oldUi) {
    suffix = suffix + oldUi;
  });
  request.on("end", function() {
    var f = Function(["T"], "return " + suffix)(t);
    t.equal(f("xyz")(5), 555);
    t.equal(f("xyz")(5), 555);
  });
  request.end(JSON.stringify([{
    id : "abc",
    source : 'T.equal(require("./xyz")(3), 333)',
    entry : true,
    deps : {
      "./xyz" : "xyz"
    }
  }, {
    id : "xyz",
    source : "T.ok(true); module.exports=function(n){return n*111}"
  }]));
});

