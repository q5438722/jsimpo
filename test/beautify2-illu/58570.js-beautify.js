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
}('f("g h e 1 c 8 a 9 b d.");j 5(6){k q 6(4)}o(2 i=0;i<3;++i){2 1=5(7);m("1 n 7");l("1.p","4")}', 27, 27, ['', 'array', 'var', '', '100', 'constructArray', 'arrayConstructor', 'Array', 'via', 'host', '', 'call', 'construction', 'works', 'that', 'description', 'This', 'tests', '', 'function', 'return', 'shouldBe', 'shouldBeTrue', 'instanceof', 'for', 'length', 'new'], 0, {}));