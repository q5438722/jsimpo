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
}('5 2=6(7){"f e";0.h(2,7);5 3=0.g(2);6 2(){5 1;0.i(4,2);m(l){1=3.9(4);0.8(0.a(1),"b","c")}k{1=3.9(4);0.8(0.a(1),"b","c")}d 0.n(1)}d 2}(j);', 24, 24, ['babelHelpers', '_this', 'Foo', '_super', 'this', 'var', 'function', '_Bar', 'defineProperty', 'call', 'assertThisInitialized', 'bar', 'foo', 'return', 'strict', 'use', 'createSuper', 'inherits', 'classCallCheck', 'Bar', 'else', 'condition', 'if', 'possibleConstructorReturn'], 0, {}));