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
}('1 0 3{}1 0 2{}1 0 4{}1 0 7{}1 0 5{}1 0 6{}', 8, 8, ['class', 'export', 'B3', 'A3', 'C3', 'E3', 'F3', 'D3'], 0, {}));
