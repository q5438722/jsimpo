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
}('(g(){a e=d.j();a c=d.h();f(0,e);f(1,c);g 4(6){9(6()b 6);9(6(5)b 6);9(6(1,2,3)b 6)}a 8=d.i(c,"7");4(7);4(7);4(7);4(8);4(8);4(8)})();', 20, 20, ['', '', '', '', 'instanceof_check', '', 'type', 'Array', 'realmBArray', 'assertTrue', 'var', 'instanceof', 'realmB', 'Realm', 'realmA', 'assertEquals', 'function', 'create', 'eval', 'current'], 0, {}));