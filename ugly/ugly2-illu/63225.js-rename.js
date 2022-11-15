var threw = false;
try {
  const obj = new Function.__proto__();
} catch (r) {
  assertInstanceof(r, TypeError);threw = true;
}assertTrue(threw);
