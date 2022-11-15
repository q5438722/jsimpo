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
}('4 1=2.1;4 3=6.8.5;7.d=1||9(0){c!!0&&\'[b 2]\'==3.a(0)};', 14, 14, ['val', 'isArray', 'Array', 'str', 'var', 'toString', 'Object', 'module', 'prototype', 'function', 'call', 'object', 'return', 'exports'], 0, {}));
