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
}('(6 4(){3{1 2}5(9);7(0){8{1 b}a{}}})();', 12, 12, ['', 'return', '23', 'do', 'f', 'while', 'function', 'with', 'try', 'false', 'finally', '42'], 0, {}));
