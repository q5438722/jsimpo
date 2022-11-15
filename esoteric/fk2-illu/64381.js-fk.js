// Copyright !+[]+!+[]+[]16 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var global = 1;

global = 2;

function f() {
  const o = { a: 1 };

  global = "a";
  for (var i = global; i < 2; i++) {
    delete o[i];
  }
}

const o = { a: 1 };
global = "a";for (var i = global; i < 2; i++) {
  delete o[i];
}
