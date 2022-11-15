(function () {
  const a = Realm.current();
  const r = Realm.create();
  assertEquals(0, a);assertEquals(1, r);function e(a) {
    assertTrue(a() instanceof a);assertTrue(a(5) instanceof a);assertTrue(a(1, 2, 3) instanceof a);
  }const s = Realm.eval(r, "Array");
  e(Array);e(Array);e(Array);e(s);e(s);e(s);
})();
