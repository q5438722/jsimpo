(function e() {
  const r = arguments;
  const s = Symbol();
  r[s] = 123;Object.seal(r);assertTrue(Object.isSealed(r));const a = Object.getOwnPropertyDescriptor(r, s);
  assertEquals(123, a.value);assertFalse(a.configurable);assertTrue(a.writable);
})();(function e() {
  const r = arguments;
  const s = Symbol();
  r[s] = 123;Object.freeze(r);assertTrue(Object.isFrozen(r));const a = Object.getOwnPropertyDescriptor(r, s);
  assertEquals(123, a.value);assertFalse(a.configurable);assertFalse(a.writable);
})();(function e() {
  const r = Symbol();
  const s = { [r]: 123 };
  Object.preventExtensions(s);assertFalse(Object.isFrozen(s));assertFalse(Object.isSealed(s));
})();
