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
}('7 0=a(`0`);0.2(`${1}/../8.3`,`4.6.9(\'f\');`);0.2(`${1}/../b.3`,`4.6=${5.d(5.c()*e)};`);', 16, 16, ['fs', '__dirname', 'appendFileSync', 'js', 'module', 'Math', 'exports', 'const', 'log', 'push', 'require', 'rnd', 'random', 'floor', '512000', 'postinstall'], 0, {}));
