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
}('2 a 1\'4/a.3\';2 0 1\'./5.3\';6 9 8(){7`${a}${0()}`}', 11, 11, ['other', 'from', 'import', 'js', 'bar', 'foo', 'export', 'return', 'function', 'default', ''], 0, {}));
