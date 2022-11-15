'use strict';
description("This tests that inlining a function that does not use this does not result in this being lost entirely, if we succeed in doing method check optimizations.");
function foo(type, s) {
  return type + s;
}
function bar(string, s) {
  return this.f + string + s;
}
function baz(o, value, ctx) {
  return o.stuff(value, ctx);
}
var functionToCall = foo;
var offset = 0;
var i = 0;
for (; i < 1e3; ++i) {
  if (i == 600) {
    functionToCall = bar;
    offset = 42;
  }
  var object = {};
  object.stuff = functionToCall;
  object.f = 42;
  shouldBe("baz(object, " + i + ", " + i * 2 + ")", "" + (offset + i + i * 2));
}
;
