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
}('6 4={};e(6 2=0;2<d;2++){}3={3:1};c=8 7({},{});9 f(){6 5=8 7({},3);4.g=5;3.m=9(){i 4};b.j.k.h(2,5)};a(f,l);', 23, 23, ['', '', '__v_0', '__v_2', '__v_9', '__v_10', 'var', 'Proxy', 'new', 'function', 'assertThrows', 'Object', '__v_12', '1000', 'for', '', '__proto__', 'call', 'return', 'prototype', 'isPrototypeOf', 'RangeError', 'getPrototypeOf'], 0, {}));