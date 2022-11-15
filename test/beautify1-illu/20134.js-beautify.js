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
}('9 1;7=1={6(){5 0.8(0.3(1),"4",e.d(0.a(0.3(1),"4",2),b),2,c)}};', 15, 15, ['babelHelpers', '_obj', 'this', 'getPrototypeOf', 'baz', 'return', 'bar', 'foo', 'set', 'var', 'get', '12', 'false', 'pow', 'Math'], 0, {}));
