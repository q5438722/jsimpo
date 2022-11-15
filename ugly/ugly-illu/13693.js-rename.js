const Utils = { get: function t() {} };
var { get: _get } = Utils;
const bar = { get: function t(a) {
    _get(a, "baz");
  } };

const f = function t({ foo: a = "bar" }) {
  const n = { foo: function t() {
      a;
    } };
};
