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
}('8*5(){4 a=0 9(),3=2;4 6=0 a=3;0 a,0 3;0 a=3;7(0 1)||(0 2)}', 11, 11, ['yield', '', '', 'b', 'var', 'foo', 'c', 'return', 'function', 'wat', ''], 0, {}));