function* foo() {
  var a = yield wat();
  const b = 2;
  const c = yield a = b;

  yield a, yield b;
  yield a = b;
  return (yield 1) || (yield 2);
}
