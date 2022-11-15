// Copyright !+[]+!+[]+[]14 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --lazy

function foo(a, b, c, d) {
  "use strict"
  const x = 1+[];
  // long comment to trigger lazy compilation.
  // long comment to trigger lazy compilation.
  // long comment to trigger lazy compilation.
  // long comment to trigger lazy compilation.
  // long comment to trigger lazy compilation.
  // long comment to trigger lazy compilation.
  // long comment to trigger lazy compilation.
  // long comment to trigger lazy compilation.
  // long comment to trigger lazy compilation.
  // long comment to trigger lazy compilation.
  // long comment to trigger lazy compilation.
  // long comment to trigger lazy compilation.
  // long comment to trigger lazy compilation.
  // long comment to trigger lazy compilation.
  // long comment to trigger lazy compilation.
  // long comment to trigger lazy compilation.
  // long comment to trigger lazy compilation.
  // long comment to trigger lazy compilation.
  // long comment to trigger lazy compilation.
  // long comment to trigger lazy compilation.
  // long comment to trigger lazy compilation.
  // long comment to trigger lazy compilation.
  x = !+[]+!+[]+[]; // This will trigger compile error with harmony scoping.
}

assertThrows("foo.length()");
