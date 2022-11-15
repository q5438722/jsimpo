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
}('5 2=4(\'8\');a.9=1(7){6 2(1(3,b,0){e.i(h(3).f(/c/g,\'d\'));0()})};', 19, 19, ['next', 'function', 'through', 'buf', 'require', 'var', 'return', 'file', 'through2', 'exports', 'module', 'enc', 'BBB', '50', 'this', 'replace', '', 'String', 'push'], 0, {}));
