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
}('8.9({6:"(5 2 3) 4 a b g f e d",c:\'1.0.7\'});', 17, 17, ['', '', 'prototyping', 'only', 'Allow', 'For', 'summary', '', 'Package', 'describe', 'all', 'database', 'version', 'client', 'the', 'from', 'writes'], 0, {}));
