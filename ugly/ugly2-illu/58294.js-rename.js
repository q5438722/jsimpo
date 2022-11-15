description("This tests that a constant folding on a node that has obviously mispredicted type doesn't send the compiler into an infinite loop.");function foo(o) {
  const t = 1;
  const i = 4e3;
  const e = 0.00025 + o;
  var n = 0;
  n = 1000;
  return e + n;
}for (var i = 0; i < 5; ++i) shouldBe("foo(0.5)", "1000.50025");
