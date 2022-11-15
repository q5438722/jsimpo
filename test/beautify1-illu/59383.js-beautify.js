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
}('7 5{4(2){3.a=2}}7 8{4(2){3.9=[];3.9[1]=2}}b 0={};0.e=6 5(6 8(0));d.c(0);', 15, 15, ['root', '', 'o', 'this', 'constructor', 'Outer', 'new', 'class', 'ArrayHolder', 'array', 'x', 'const', 'stringify', 'JSON', 'first'], 0, {}));
