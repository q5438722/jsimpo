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
}('5 0={};7[\'6\']=0;0.2=1("./2");0.3=1("./3");0.4=1("./4");', 8, 8, ['commerce', 'require', 'color', 'department', 'product_name', 'var', 'exports', 'module'], 0, {}));
