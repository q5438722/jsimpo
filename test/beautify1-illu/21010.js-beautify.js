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
}('4{[1.2("0")]:0,...3}={};({[1.2("0")]:0,...3}={});5({[1.2("0")]:0,...3}={}){}', 6, 6, ['foo', 'Symbol', 'for', 'rest', 'let', 'if'], 0, {}));
