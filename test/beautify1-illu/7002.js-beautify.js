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
}('4*5 0 3\'./2.6\';c(7 1<\'b\')1.a=0;9 8.0=0;', 13, 13, ['preact', 'module', 'index', 'from', 'import', 'as', 'js', 'typeof', 'self', 'else', 'exports', 'u', 'if'], 0, {}));
