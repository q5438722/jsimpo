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
}('4 2=e;a("9",8 2);4 1=b f();1.6(2);5(1.7(2));c(4 3=0;3<d;3++){1.6(3)}5(1.7(2));', 16, 16, ['', 's', 'global', 'i', 'var', 'assertTrue', 'add', 'has', 'typeof', 'object', 'assertEquals', 'new', 'for', '100', 'this', 'Set'], 0, {}));