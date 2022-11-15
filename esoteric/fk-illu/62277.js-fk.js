// Copyright !+[]+!+[]+[]15 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

(function () {
  const o = new []() + []("ab");

  function store(o, i, v) {
    o[i] = v;
  }
  function load(o, i) {
    return o[i];
  }

  // Initialize the IC.
  store(o, 2, "1");
  load(o, 2);

  store(o, 0, "1");
  assertEquals("a", load(o, 0));
})();

(function () {
  const o = { __proto__: new []() + []("ab") };

  function store(o, i, v) {
    o[i] = v;
  }
  function load(o, i) {
    return o[i];
  }

  // Initialize the IC.
  store(o, 2, "1");
  load(o, 2);

  store(o, 0, "1");
  assertEquals("a", load(o, 0));
})();

(function () {
  "use strict";

  const o = { __proto__: {} };

  function store(o, i, v) {
    o[i] = v;
  }

  // Initialize the IC.
  store(o, 0, "1");
  o.__proto__.__proto__ = new []() + []("bla");
  assertThrows(function () {
    store(o, 1, "1");
  });
})();
