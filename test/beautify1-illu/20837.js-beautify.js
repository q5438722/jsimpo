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
}('a(9 2=0,3=b;2<3.c;2++){8[4,...5]=3[2];{8 4=1;7.6(5);7.6(4)}}', 13, 13, ['', '', '_i', '_array', 'type', 'rest', 'log', 'console', 'const', 'let', 'for', 'array', 'length'], 0, {}));
