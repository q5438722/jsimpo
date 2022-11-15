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
}('3 1(a,b,c,d){"5 2"6 0=7;0=9}8("1.4()");', 14, 14, ['x', 'foo', 'strict', 'function', 'length', 'use', 'const', '10', 'assertThrows', '20', '', '', '', ''], 0, {}));
