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
}('5 0 3\'../2/0\'4 9 6(){8 0(\'1\',[[\'7\',[\'1\']]])}', 10, 10, ['createUtilityPlugin', 'transformOrigin', 'util', 'from', 'export', 'import', 'function', 'origin', 'return', 'default'], 0, {}));
