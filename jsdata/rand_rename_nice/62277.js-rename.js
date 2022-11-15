'use strict';
(function() {
  function t(c, i, t) {
    c[i] = t;
  }
  function f(i, r) {
    return i[r];
  }
  var a = new String("ab");
  t(a, 2, 10);
  f(a, 2);
  t(a, 0, 100);
  assertEquals("a", f(a, 0));
})();
(function() {
  function t(o, s, pos) {
    o[s] = pos;
  }
  function f(i, r) {
    return i[r];
  }
  var o = {
    __proto__ : new String("ab")
  };
  t(o, 2, 10);
  f(o, 2);
  t(o, 0, 100);
  assertEquals("a", f(o, 0));
})();
(function() {
  function t(v, t, c) {
    v[t] = c;
  }
  var d = {
    __proto__ : {}
  };
  t(d, 0, 100);
  d.__proto__.__proto__ = new String("bla");
  assertThrows(function() {
    t(d, 1, 100);
  });
})();

