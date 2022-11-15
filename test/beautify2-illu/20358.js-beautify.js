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
}('1 2(4,3){5(!(4 b 3)){8 7 6("9 h a c i a 1")}}g 0=1 0(){"f d";2(e,0)};', 19, 19, ['Foo', 'function', '_classCallCheck', 'Constructor', 'instance', 'if', 'TypeError', 'new', 'throw', 'Cannot', '', 'instanceof', 'class', 'strict', 'this', 'use', 'let', 'call', 'as'], 0, {}));
