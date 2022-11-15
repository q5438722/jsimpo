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
}('0.b();5 6=0.8(1,"a");5 f=0.8(1,"9 f() { c g }; f");d.4.f=f;5 3=1;7(6.4,f.h(3).2.2);7(6.4,3.f().2.2);7(0.e(1),f());', 18, 18, ['Realm', '', '__proto__', 'number', 'prototype', 'var', 'object', 'assertEquals', 'eval', 'function', 'Object', 'create', 'return', 'Number', 'global', '', 'this', 'call'], 0, {}));
