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
}('6 a={};6 9={};6 3;6 4;(1(){3=b d(a);4=b d(9)})();7();(1(){e(8,3.2());e(8,4.2())})();5(1(){3.2();a=f;7();5(1(){4.2();9=f;7();5(1(){c(8,3.2());7();5(1(){c(8,4.2())},0)},0)},0)},0);', 16, 16, ['', 'function', 'deref', 'wr1', 'wr2', 'setTimeout', 'let', 'gc', 'undefined', 'o2', 'o1', 'new', 'assertEquals', 'WeakRef', 'assertNotEquals', 'null'], 0, {}));