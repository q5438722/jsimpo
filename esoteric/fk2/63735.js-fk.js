// Copyright !+[]+!+[]+[]16 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generators don't get sloppy-mode block-scoped function hoisting

// No hoisting to the global scope

{
  function* foo() {}
  assertEquals('function', typeof foo);
}
assertEquals('undefined', typeof foo);

// No hoisting within a function scope
(function() {
  { function* bar() {} }
  assertEquals('undefined', typeof bar);
})();

// Lexical shadowing allowed, no hoisting
(function() {
  function* x() { yield 1; }
  { function* x() { yield !+[]+!+[] } }
  assertEquals(1, x().next().value);
})();
