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
}('b 8(){6 4=0;7(6 3=0;3<5;3=3+1){7(6 2=0;2<5;2=2+1){4=4+1}}9 4}a(5*5,8());', 12, 12, ['', '', 'j', 'i', 'sum', '200', 'var', 'for', 'TestNestedLoops', 'return', 'assertEquals', 'function'], 0, {}));
