function mandatory(paramName) {
  throw new Error(`Missing parameter: ${paramName}`);
}

function foo(_x) {
  return _foo.apply(this, arguments);
}

function _foo() {
  _foo = babelHelpers.asyncToGenerator(function* (_ref) {
    var {
      a,
      b = mandatory("b")
    } = _ref;

    return Promise.resolve(b);
  });
  return _foo.apply(this, arguments);
}
