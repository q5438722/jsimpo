// Copyright !+[]+!+[]+[]19 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

assertFalse(/ſ/i.test('ſ'.toUpperCase()));
assertFalse(/ſ/i.test('ſ'.toUpperCase()[+[]]));
assertTrue(/ſ/i.test('ſ'));
assertTrue(/ſ/i.test('ſ'[+[]]));
assertFalse(/ſ/i.test('s'.toUpperCase()));
assertFalse(/ſ/i.test('s'.toUpperCase()[+[]]));
assertFalse(/ſ/i.test('S'.toUpperCase()));
assertFalse(/ſ/i.test('S'.toUpperCase()[+[]]));
assertFalse(/ſ/i.test('S'));
assertFalse(/ſ/i.test('S'[+[]]));
