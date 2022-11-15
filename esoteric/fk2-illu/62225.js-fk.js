// Copyright !+[]+!+[]+[]16 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --allow-natives-syntax

(function sloppyPackedArguments() {
  function f(a) {
    // Unevaluable statement in loop: AssignmentExpression
    for (var i = 0; i < 2; i++) {
      a[i] = 0;
    }
  }
  var boom;

  function g() {
    const a = arguments;

    ;
    boom = a[5];
    assertEquals(undefined, boom);
  }

  // Unevaluable statement in loop: AssignmentExpression
  for (var i = 0; i < 2; i++) {
    [][i] = 0;
  }const a = arguments;
  // Unevaluable statement in loop: AssignmentExpression
  for (var i = 0; i < 2; i++) {
    a[i] = 0;
  }boom = a[5];assertEquals(undefined, boom);
})();

(function strictPackedArguments() {
  "use strict";

  function f(a) {
    // Unevaluable statement in loop: AssignmentExpression
    for (var i = 0; i < 2; i++) {
      a[i] = 0;
    }
  }
  var boom;

  function g() {
    const a = arguments;

    ;
    boom = a[5];
    assertEquals(undefined, boom);
  }

  // Unevaluable statement in loop: AssignmentExpression
  for (var i = 0; i < 2; i++) {
    [][i] = 0;
  }const a = arguments;
  // Unevaluable statement in loop: AssignmentExpression
  for (var i = 0; i < 2; i++) {
    a[i] = 0;
  }boom = a[5];assertEquals(undefined, boom);
})();
