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
}('5 0=9(\'../7\');5 3=6(2){8(2>4.f){2-=0.1}e 4.a((((2+0.d)%0.1)-0.1)%0.1)};c.b=3;', 16, 16, ['CONST', 'PI2', 'angle', 'CounterClockwise', 'Math', 'var', 'function', 'const', 'if', 'require', 'abs', 'exports', 'module', 'TAU', 'return', 'PI'], 0, {}));
