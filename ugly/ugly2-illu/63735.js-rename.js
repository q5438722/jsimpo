{
  function* foo() {}assertEquals("function", typeof foo);
}assertEquals("undefined", typeof foo);(function () {
  {
    function* n() {}
  }assertEquals("undefined", typeof n);
})();(function () {
  function* n() {
    yield 1;
  }{
    function* n() {
      yield 2;
    }
  }assertEquals(1, n().next().value);
})();