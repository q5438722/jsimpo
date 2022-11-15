  assertFalse(new RegExp("ſ", "i").test("ſ".toUpperCase()));
  assertFalse(new RegExp("ſ", "i").test("ſ".toUpperCase()[0]));
  assertTrue(new RegExp("ſ", "i").test("ſ"));
  assertTrue(new RegExp("ſ", "i").test("ſ"[0]));
  assertFalse(new RegExp("ſ", "i").test("s".toUpperCase()));
  assertFalse(new RegExp("ſ", "i").test("s".toUpperCase()[0]));
  assertFalse(new RegExp("ſ", "i").test("S".toUpperCase()));
  assertFalse(new RegExp("ſ", "i").test("S".toUpperCase()[0]));
  assertFalse(new RegExp("ſ", "i").test("S"));
  assertFalse(new RegExp("ſ", "i").test("S"[0]));
  