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
}('6(7 2=0;2<5;2++){4 3=2;8(a(){b.9(3)},1)}', 12, 12, ['', '', 'i', 'l', 'const', '', 'for', 'let', 'setTimeout', 'log', 'function', 'console'], 0, {}));
