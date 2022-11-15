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
}('5 0 3\'@2/1\';4 b 6 9(){8 0({7:\'a\'})}5 0 3\'@2/1\';4 b 6 9(){8 0({7:\'a\'})}', 12, 12, ['createCache', 'cache', 'emotion', 'from', 'export', 'import', 'function', 'key', 'return', 'createEmotionCache', 'css', 'default'], 0, {}));
