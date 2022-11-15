// Copyright !+[]+!+[]+[]15 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --use-osr

function id(f) {
  return f;
}

const x = function foo() {
  var sum = 0;
  const r = id(foo);
  sum = 0;

  return foo == r;
}();

assertEquals(true, x);

const x = function bar() {
  var sum = 0;
  sum = 36;

  return bar;
}();

assertEquals("function", typeof x);
