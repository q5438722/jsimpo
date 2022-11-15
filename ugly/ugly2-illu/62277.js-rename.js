(function () {
  const n = new String("ab");
  function t(n, t, r) {
    n[t] = r;
  }function r(n, t) {
    return n[t];
  }t(n, 2, 10);r(n, 2);t(n, 0, 100);assertEquals("a", r(n, 0));
})();(function () {
  const n = { __proto__: new String("ab") };
  function t(n, t, r) {
    n[t] = r;
  }function r(n, t) {
    return n[t];
  }t(n, 2, 10);r(n, 2);t(n, 0, 100);assertEquals("a", r(n, 0));
})();(function () {
  "use strict";
  const n = { __proto__: {} };
  function t(n, t, r) {
    n[t] = r;
  }t(n, 0, 100);n.__proto__.__proto__ = new String("bla");assertThrows(function () {
    t(n, 1, 100);
  });
})();
