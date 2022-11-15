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
}('2 0=6(1){"b e";4.c(0,1);2 5=4.d(0);6 0(){2 3;4.i(8,0);3=5.f(8);1.9.a;1.9.a.g;7 3}7 0}(h);', 19, 19, ['Test', '_Foo', 'var', '_this', 'babelHelpers', '_super', 'function', 'return', 'this', 'prototype', 'test', 'use', 'inherits', 'createSuper', 'strict', 'call', 'whatever', 'Foo', 'classCallCheck'], 0, {}));
