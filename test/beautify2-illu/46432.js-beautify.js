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
}('5 0=4(\'0\')3.1=2(){6 0.b(\'a\',9,\'8:\',c 7)}', 13, 13, ['react', 'exports', 'function', 'module', 'require', 'const', 'return', 'window', 'MyComp', 'null', 'p', 'createElement', 'typeof'], 0, {}));
