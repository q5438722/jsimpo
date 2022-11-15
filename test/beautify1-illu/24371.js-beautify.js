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
}('"9 6";1.5=7;1.2=1.4=a 0;8 3,2;1.2=2;1.4=3;', 11, 11, ['', 'exports', 'bar', 'foo', 'default', '__esModule', 'strict', 'true', 'var', 'use', 'void'], 0, {}));
