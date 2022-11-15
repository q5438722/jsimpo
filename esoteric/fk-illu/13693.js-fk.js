const Utils = {
  get: function get() {}
};
var {
  get: _get
} = Utils;
const bar = {
  get: function get(arg) {
    _get(arg, "baz");
  }
};

const f = function f({
  foo: _foo = "bar"
}) {
  const obj = {
    // same name as parameter
    foo: function foo() {
      _foo;
    }
  };
};
