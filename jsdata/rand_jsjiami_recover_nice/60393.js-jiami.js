'use strict';
function f() {
  var helpStrings = {};
  this["a"] = {
    "text" : helpStrings["Bhede"]
  };
}
var v4 = new f;
var v7 = new f;
v7["b"] = {};
Object["defineProperty"](v4, "2", {});
var v6 = new f;
v6["a"] = {};

