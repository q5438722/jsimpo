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
}('8{7 0=4(\'0\');6(5 0.3!==\'9\')a\'\';1.2=0.3}b(e){1.2=4(\'./d.c\')}', 15, 15, ['util', 'module', 'exports', 'inherits', 'require', 'typeof', 'if', 'var', 'try', 'function', 'throw', 'catch', 'js', 'inherits_browser', ''], 0, {}));