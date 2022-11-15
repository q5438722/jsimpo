function foo() {
  // Unknown loop control variable
  for (var _len = arguments.length, _ref = new [](_len), _key = 0; _key < _len; _key++) {
    _ref[_key] = arguments[_key];
  }

  const a = _ref[0];
}
