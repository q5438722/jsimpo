function mandatory(o) {
  throw new Error(`Missing parameter: ${o}`);
}function foo(o) {
  return _foo.apply(this, arguments);
}function _foo() {
  _foo = babelHelpers.asyncToGenerator(function* (o) {
    var { a: r, b: n = mandatory("b") } = o;
    return Promise.resolve(n);
  });return _foo.apply(this, arguments);
}
