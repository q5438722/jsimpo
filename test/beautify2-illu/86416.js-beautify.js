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
}('3 1=7(\'./1\');3 2=6(0){8 4 1(0.5,0.f,0.9,0.e,0.d,0.c)};a.b=2;', 16, 16, ['source', 'Triangle', 'Clone', 'var', 'new', 'x1', 'function', 'require', 'return', 'x2', 'module', 'exports', 'y3', 'x3', 'y2', 'y1'], 0, {}));
