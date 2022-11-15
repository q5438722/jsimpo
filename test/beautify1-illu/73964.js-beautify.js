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
}('7 0 8\'./.6/0.5\'9 2=4 d 1(3){a 0(3,2)}c b 1', 14, 14, ['baseClone', 'clone', 'CLONE_SYMBOLS_FLAG', 'value', '', 'js', 'internal', 'import', 'from', 'const', 'return', 'default', 'export', 'function'], 0, {}));
