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
}('3{0}4"./2.5";1 a 6=0(8);1 7 9(){', 11, 11, ['addNumber', 'export', 'wasm', 'import', 'from', 'wat', 'result', 'function', '22', 'getNumber', 'var'], 0, {}));