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
}('7.a=8 5(3){6 0=9 d(f 2 b 3){e(2.4+1>0){0=2.4+1}}c 0}', 16, 16, ['longest', '', 'name', 'obj', 'length', 'getPadLength', 'let', 'module', 'function', '10', 'exports', 'in', 'return', 'for', 'if', 'const'], 0, {}));
