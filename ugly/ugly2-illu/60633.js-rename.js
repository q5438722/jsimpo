var functionToCatch;
var lineNumber;
function catchLineNumber() {
  const t = {};
  Error.prepareStackTrace = function (t, o) {
    o.some(function (t) {
      if (t.getFunction() == functionToCatch) {
        lineNumber = t.getLineNumber();return true;
      }return false;
    });return lineNumber;
  };Error.captureStackTrace(t);return t.stack;
}function log() {
  catchLineNumber();
}function foo() {}function test1() {
  catchLineNumber();
}function test2() {
  const t = { foo: function () {} };
  catchLineNumber();
}function test3() {
  const t = { log: log, foo: function () {} };
  t.log(t.foo() == t.foo() ? "a" : "b");
}function test(t, o) {
  functionToCatch = t;t();assertEquals(o, lineNumber);
}functionToCatch = test1;catchLineNumber();assertEquals(58, lineNumber);functionToCatch = test2;const t = { foo: function () {} };
catchLineNumber();assertEquals(65, lineNumber);functionToCatch = test3;const t = { log: log, foo: function () {} };
t.log(t.foo() == t.foo() ? "a" : "b");assertEquals(72, lineNumber);eval(test1.toString() + "//@ sourceUrl=foo");eval(test2.toString() + "//@ sourceUrl=foo");eval(test3.toString() + "//@ sourceUrl=foo");functionToCatch = test1;catchLineNumber();assertEquals(2, lineNumber);functionToCatch = test2;const t = { foo: function () {} };
catchLineNumber();assertEquals(3, lineNumber);functionToCatch = test3;const t = { log: log, foo: function () {} };
t.log(t.foo() == t.foo() ? "a" : "b");assertEquals(3, lineNumber);
