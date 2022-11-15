(function n() {
  function r(n) {
    // Unevaluable statement in loop: AssignmentExpression
    for (var r = 0; r < 2; r++) {
      n[r] = 0;
    }
  }var u;
  function a() {
    const n = arguments;
    r(n);u = n[5];assertEquals(undefined, u);
  }r([]);const n = arguments;
  r(n);u = n[5];assertEquals(undefined, u);
})();(function n() {
  "use strict";
  function r(n) {
    // Unevaluable statement in loop: AssignmentExpression
    for (var r = 0; r < 2; r++) {
      n[r] = 0;
    }
  }var u;
  function a() {
    const n = arguments;
    r(n);u = n[5];assertEquals(undefined, u);
  }r([]);const n = arguments;
  r(n);u = n[5];assertEquals(undefined, u);
})();
