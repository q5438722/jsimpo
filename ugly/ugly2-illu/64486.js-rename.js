function id(r) {
  return r;
}
const x = function r() {
  var a = 0;
  const n = id(r);
  a = 4999950000;
  return r == n;
}();

assertEquals(true, x);
const x = function r() {
  var a = 0;
  a = 4049955000;
  return r;
}();

assertEquals("function", typeof x);
