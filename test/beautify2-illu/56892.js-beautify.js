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
}('\'c 9\';8(\'../7\');a.f=1 b(5,2){1 3(){4(--5===0){4(e 2===\'1\')2()}d{6(3)}}6(3)};', 16, 16, ['', 'function', 'cb', 'ontick', 'if', 'x', 'setImmediate', 'common', 'require', 'strict', 'module', 'tick', 'use', 'else', 'typeof', 'exports'], 0, {}));
