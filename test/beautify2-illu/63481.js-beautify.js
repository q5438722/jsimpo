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
}('4 1(0){"3 5";8(()=>6(0))()};7(1("2"),2)', 9, 9, ['s', 'strictFunctionArrowEval', '42', 'use', 'function', 'strict', 'eval', 'assertEquals', 'return'], 0, {}));
