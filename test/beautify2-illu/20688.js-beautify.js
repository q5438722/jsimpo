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
}('c 4=2.e("h");f 0=3(){"g d";3 0(){2.a(b,0)}2.o(0,[{p:"6",9:3 6(5){8 7.i.n.m(5,4)}}]);8 0}();7.j(0,4,{k:l,9:1});', 26, 26, ['Foo', '', 'babelHelpers', 'function', '_foo', 'other', 'test', 'Object', 'return', 'value', 'classCallCheck', 'this', 'var', 'strict', 'classPrivateFieldLooseKey', 'let', 'use', 'foo', 'prototype', 'defineProperty', 'writable', 'true', 'call', 'hasOwnProperty', 'createClass', 'key'], 0, {}));