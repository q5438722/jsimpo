'use strict';
description("This tests that inlining a function that does not use this does not result in this being lost entirely, if we succeed in doing method check optimizations.");
function foo(arg209, arg210) {
  return arg209 + arg210;
}
function bar(valueone, valuetwo) {
  return this["f"] + valueone + valuetwo;
}
function baz(res, next, value) {
  return res["stuff"](next, value);
}
var functionToCall = foo;
var offset = 0;
var i = 0;
for (; i < 1000; ++i) {
  var MINbll = "4|0|2|1|3"["split"]("|");
  var fWgyVw = 0;
  for (; !![];) {
    switch(MINbll[fWgyVw++]) {
      case "0":
        var object = {};
        continue;
      case "1":
        object["f"] = 42;
        continue;
      case "2":
        object["stuff"] = functionToCall;
        continue;
      case "3":
        shouldBe("baz(object, " + i + ", " + i * 2 + ")", "" + (offset + i + i * 2));
        continue;
      case "4":
        if (i == 600) {
          functionToCall = bar;
          offset = 42;
        }
        continue;
    }
    break;
  }
}
;
