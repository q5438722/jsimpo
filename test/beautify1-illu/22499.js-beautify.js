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
}('5 3=4.9("a");5 2=b 2(){"8 d";4.7(1,2);1.6=4.c(1,3)[3];i.e(1,3,{k:l,j:f 0})};g(()=>{h 2()}).m();', 23, 23, ['', 'this', 'C', '_x', 'babelHelpers', 'var', 'y', 'classCallCheck', 'use', 'classPrivateFieldLooseKey', 'x', 'function', 'classPrivateFieldLooseBase', 'strict', 'defineProperty', 'void', 'expect', 'new', 'Object', 'value', 'writable', 'true', 'toThrow'], 0, {}));
