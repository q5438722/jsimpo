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
}('6(["8","4"],5(1,2){"7 c";1.b=9;1.3=a 0;1.3=2.4});', 13, 13, ['', '_exports', '_foo', 'default', 'foo', 'function', 'define', 'use', 'exports', 'true', 'void', '__esModule', 'strict'], 0, {}));
