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
}('6 3=7(1,0){8(1.2===0.2&&1.4===0.4&&1.5===0.5)};a.9=3;', 11, 11, ['toCompare', 'circle', 'x', 'Equals', 'y', 'radius', 'var', 'function', 'return', 'exports', 'module'], 0, {}));