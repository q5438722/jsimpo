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
}('8.9=7 6(1){4 0=1.a("b 3 g \'./3\';");e{c:{d(2){2.h.f.5(0())}}}}', 18, 18, ['importFoo', 'babel', 'path', 'foo', 'const', 'unshift', 'insertEnv', 'function', 'module', 'exports', 'template', 'import', 'visitor', 'Program', 'return', 'body', 'from', 'node'], 0, {}));
