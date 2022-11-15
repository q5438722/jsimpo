// Copyright !+[]+!+[]+[]15 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

(function f() {
  do { return !+[]+!+[]3; } while(![]);
  with (+[]) {
    try {
      return 4!+[]+!+[];
    } finally {}
  }
})();
