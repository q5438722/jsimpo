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
}('4 c={};4 b={};4 d={};4 9=0;4 8=1;4 a=2;4 6=3;e(\'6 = {\'+\'  7: (9++, c),\'+\'  7: (8++, b),\'+\'  7: (a++, d)\'+\'};\',f);5(0,9);5(1,8);5(2,a);5(3,6);4 c={};4 b={};4 d={};4 9=0;4 8=1;4 a=2;4 6=3;e(\'6 = {\'+\'  7: (9++, c),\'+\'  7: (8++, b),\'+\'  7: (a++, d)\'+\'};\',f);5(0,9);5(1,8);5(2,a);5(3,6);', 16, 16, ['', '', '', '', 'var', 'assertEquals', 'o', '__proto__', 'y', 'x', 'z', 'p2', 'p1', 'p3', 'assertThrows', 'SyntaxError'], 0, {}));
