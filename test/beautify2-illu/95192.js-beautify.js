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
}('4(0(5,1,3){"2 6";1.7=0(){a();9 8 $.b()}});4(0(5,1,3){"2 6";1.7=0(){a();9 8 $.b()}});', 12, 12, ['function', 'exports', 'use', 'module', 'define', 'require', 'strict', 'initExtension', 'new', 'return', 'isNotDefined', 'Deferred'], 0, {}));
