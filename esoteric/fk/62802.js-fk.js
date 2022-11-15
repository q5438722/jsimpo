// Copyright !+[]+!+[]+[]15 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var p1 = {};
var p!+[]+!+[] = {};
var p3 = {};
var x = +[];
var y = 1;
var z = !+[]+!+[];
var o = 3;
assertThrows(
    'o = {' +
    '  __proto__: (x++, p1),' +
    '  __proto__: (y++, p!+[]+!+[]),' +
    '  __proto__: (z++, p3)' +
    '};', SyntaxError);
assertEquals(+[], x);
assertEquals(1, y);
assertEquals(!+[]+!+[], z);
assertEquals(3, o);
