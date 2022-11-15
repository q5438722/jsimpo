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
}('a("9 c d 8 5 7 6 b n k l\'e m j.");i 0;3.f(4,g(2){0=2});3[4]="1";h("0","\\"1\\"");', 24, 24, ['thingy', 'foo', 'value', 'this', '42', 'indexed', 'on', 'setter', 'an', 'Tests', 'description', 'the', 'that', 'creating', 't', '__defineSetter__', 'function', 'shouldBe', 'var', 'things', 'object', 'doesn', 'break', 'global'], 0, {}));
