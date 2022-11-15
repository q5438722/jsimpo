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
}('4 0 3\'0-5\';2 1=0.6`a:9;`;8 7 1;', 11, 11, ['styled', 'Img', 'const', 'from', 'import', 'components', 'img', 'default', 'export', '40px', 'height'], 0, {}));
