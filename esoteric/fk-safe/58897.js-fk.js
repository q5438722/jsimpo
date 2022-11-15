  assertFalse(new RegExp("ſ", "i").test('ſ'.toUpperCase()));
  assertFalse(new RegExp("ſ", "i").test('ſ'.toUpperCase()[+ []]));
  assertTrue(new RegExp("ſ", "i").test('ſ'));
  assertTrue(new RegExp("ſ", "i").test('ſ'[+ []]));
  assertFalse(new RegExp("ſ", "i").test('s'.toUpperCase()));
  assertFalse(new RegExp("ſ", "i").test('s'.toUpperCase()[+ []]));
  assertFalse(new RegExp("ſ", "i").test('S'.toUpperCase()));
  assertFalse(new RegExp("ſ", "i").test('S'.toUpperCase()[+ []]));
  assertFalse(new RegExp("ſ", "i").test('S'));
  assertFalse(new RegExp("ſ", "i").test('S'[+ []]));
  