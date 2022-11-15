function foo(o, s, t, n) {
  "use strict";
  var c = 10;
  c = 20;
}assertThrows("foo.length()");
