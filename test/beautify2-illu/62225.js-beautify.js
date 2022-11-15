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
}('(3 h(){3 f(a){8(6 i=0;i<2;i++){a[i]=0}}6 4;3 g(){6 a=7;f(a);4=a[5];9(b,4)}f([]);g(1)})();(3 e(){"d c";3 f(a){8(6 i=0;i<2;i++){a[i]=0}}6 4;3 g(){6 a=7;f(a);4=a[5];9(b,4)}f([]);g(1)})();', 19, 19, ['', '', '', 'function', 'boom', '', 'var', 'arguments', 'for', 'assertEquals', '', 'undefined', 'strict', 'use', 'strictPackedArguments', '', '', 'sloppyPackedArguments', ''], 0, {}));
