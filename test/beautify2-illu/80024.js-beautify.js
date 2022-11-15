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
}('5.7=4(1,2,0){3 6(\'@d/c-8-b/a/9\')(1,2,0)}', 14, 14, ['loader', 'pagesJson', 'manifestJson', 'return', 'function', 'module', 'require', 'exports', 'quickapp', 'manifest', 'lib', 'native', 'uni', 'dcloudio'], 0, {}));
