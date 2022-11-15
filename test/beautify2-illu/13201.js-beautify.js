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
}('d 0=5.b("a");9 7{8(){c.g(1,0,{e:4})}h(){6 5.f(1,0)[0]()}}j*4(){i 2;6 3}', 20, 20, ['_foo', 'this', '', '', '_foo2', 'babelHelpers', 'return', 'Cl', 'constructor', 'class', 'foo', 'classPrivateFieldLooseKey', 'Object', 'var', 'value', 'classPrivateFieldLooseBase', 'defineProperty', 'test', 'yield', 'function'], 0, {}));
