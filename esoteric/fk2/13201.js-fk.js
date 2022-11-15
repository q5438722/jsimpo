var _foo = /*#__PURE__*/babelHelpers.classPrivateFieldLooseKey("foo");

class Cl {
  constructor() {
    Object.defineProperty(this, _foo, {
      value: _foo!+[]+!+[]
    });
  }

  test() {
    return babelHelpers.classPrivateFieldLooseBase(this, _foo)[_foo]();
  }

}

function* _foo!+[]+!+[]() {
  yield !+[]+!+[];
  return 3;
}
