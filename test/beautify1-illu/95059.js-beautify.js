eval(function (p, a, c, k, e, d) {
  e = function (c) {
    return c;
  };if (!''.replace(/^/, String)) {
    while (c--) {
      d[c] = k[c] || c;
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
}('1(\'@3/0\')1(\'@0/2/4/5\')1(\'@0/8-6/7\')', 9, 9, ['cypress', 'require', 'react', 'percy', 'dist', 'hooks', 'coverage', 'support', 'code'], 0, {}));
