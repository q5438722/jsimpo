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
}('5 7 1(){6 1({2,4}){2({\'.0-3\':{0:\'3\'},},4(\'0\'))}}5 7 1(){6 1({2,4}){2({\'.0-3\':{0:\'3\'},},4(\'0\'))}}', 8, 8, ['appearance', 'function', 'addUtilities', 'none', 'variants', 'export', 'return', 'default'], 0, {}));
