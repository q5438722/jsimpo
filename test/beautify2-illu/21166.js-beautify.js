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
}('3 1,0;3 2=4();3 6=(1={},1[4.5]="7",0={},0[2]=0[2]||{},0[2].c=8(){b 2},a.9(1,0),1);', 13, 13, ['_mutatorMap', '_foo', 'k', 'var', 'Symbol', 'iterator', 'foo', 'foobar', 'function', 'defineEnumerableProperties', 'babelHelpers', 'return', 'get'], 0, {}));
