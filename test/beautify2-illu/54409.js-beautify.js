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
}('\'9 8\';4(\'../b\');6 1=4(\'1\');6 5=4(\'5\');6 0=a 5.h();0.g=7();1.2(!0.3());0.c(\'f\',7());1.2(!0.3());0.e();1.2(0.3());0.d();1.2(!0.3());', 18, 18, ['readable', 'assert', 'ok', 'isPaused', 'require', 'stream', 'const', 'Function', 'strict', 'use', 'new', 'common', 'on', 'resume', 'pause', 'data', '_read', 'Readable'], 0, {}));
