description("This tests that inlining a function that does not use this does not result in this being lost entirely, if we succeed in doing method check optimizations.");function foo(t, i) {
  return t + i;
}function bar(t, i) {
  return this.f + t + i;
}function baz(t, i, o) {
  return t.stuff(i, o);
}var functionToCall = foo;
var offset = 0;
for (var i = 0; i < 1e3; ++i) {
  if (i == 600) {
    functionToCall = bar;offset = 42;
  }const object = {};
  object.stuff = functionToCall;object.f = 42;shouldBe("baz(object, " + i + ", " + i * 2 + ")", "" + (offset + i + i * 2));
}
