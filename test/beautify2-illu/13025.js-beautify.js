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
}('c b=a(){9(d 4=7.6,2=5 e(4),3=0;3<4;3++){2[3]=7[3]}f(2.6===1){8 2[0]}8 5 g(2)};', 17, 17, ['', '', 'nodes', '_key', '_len', 'new', 'length', 'arguments', 'return', 'for', 'function', 'oneOf', 'let', 'var', 'Array', 'if', 'OneOfNode'], 0, {}));