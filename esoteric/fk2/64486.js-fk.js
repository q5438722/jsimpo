// Copyright !+[]+!+[]+[]15 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --use-osr

function id(f) { return f; }

var x = (function foo() {
  var sum = +[];
  var r = id(foo);
  for (var i = +[]; i < 1+[]+[]+[]+[]+[]; i++) {
    sum += i;
  }
  return foo == r;
})();

assertEquals(!![], x);

var x = (function bar() {
  var sum = +[];
  for (var i = +[]; i < 9+[]+[]+[]+[]; i++) {
    sum += i;
  }
  return bar;
})();

assertEquals("function", typeof x);
