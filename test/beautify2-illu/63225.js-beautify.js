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
}('2 0=4;6{2 5=3(7.d)()}8(1){c(1,b);0=a}9(0);2 0=4;6{2 5=3(7.d)()}8(1){c(1,b);0=a}9(0);', 14, 14, ['threw', 'e', 'var', 'new', 'false', 'obj', 'try', 'Function', 'catch', 'assertTrue', 'true', 'TypeError', 'assertInstanceof', '__proto__'], 0, {}));
