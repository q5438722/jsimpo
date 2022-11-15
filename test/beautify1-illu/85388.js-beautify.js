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
}('4 2={5:0,3:0,6:1};8.7=2;', 9, 9, ['', '', 'ScaleModes', 'LINEAR', 'var', 'DEFAULT', 'NEAREST', 'exports', 'module'], 0, {}));
