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
}('5 3=4(0,1,2){0.1+=1;0.2+=2;6 0};8.7=3;', 9, 9, ['circle', 'x', 'y', 'Offset', 'function', 'var', 'return', 'exports', 'module'], 0, {}));
