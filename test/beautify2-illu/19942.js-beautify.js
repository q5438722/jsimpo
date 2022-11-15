eval(function (p, a, c, k, e, d) {
  e = function (c) {
    return c.toString(36);
  };if (!''.replace(/^/, String)) {
    while (c--) {
      d[c.toString(a)] = k[c] || c.toString(a);
    }k = [function (e) {
      return d[e];
    }];e = function () {
      return '\\w+';
    };c = 1;
  };while (c--) {
    if (k[c]) {
      p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);
    }
  }return p;
}('2 0=4(6){"a c";1.b(0,6);2 5=1.9(0);4 0(){2 3;1.j(7,0);i(h("d"))3=5.e(7);8 1.f(3)}8 0}(g);', 20, 20, ['Foo', 'babelHelpers', 'var', '_this', 'function', '_super', '_Bar', 'this', 'return', 'createSuper', 'use', 'inherits', 'strict', 'false', 'call', 'possibleConstructorReturn', 'Bar', 'eval', 'if', 'classCallCheck'], 0, {}));
