function* foo() {
  var e = yield wat();
  const i = 2;
  const d = yield e = i;
  yield e, yield i;yield e = i;return (yield 1) || (yield 2);
}
