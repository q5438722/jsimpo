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
}('b 8={};b 1={a(){i g.5=3},};9.h(1,\'5\',{j:2,f:e,c:6,d:6,});9.m(1,8);0(1.a()).4(3);0(8.5).l();0(1.5).4(2);n 7=9.k(1,\'5\');0(7.c).4(6);0(7.f).4(e);0(7.d).4(6);', 24, 24, ['expect', 'obj', '', '', 'toBe', 'test', 'true', 'desc', 'Base', 'Object', 'set', 'var', 'configurable', 'enumerable', 'false', 'writable', 'super', 'defineProperty', 'return', 'value', 'getOwnPropertyDescriptor', 'toBeUndefined', 'setPrototypeOf', 'const'], 0, {}));