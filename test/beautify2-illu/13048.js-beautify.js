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
}('8 7(){6(5 2=4.9,3=c b(2),1=0;1<2;1++){3[1]=4[1]}5 a=3[0]}', 13, 13, ['', '_key', '_len', '_ref', 'arguments', 'var', 'for', 'foo', 'function', 'length', '', 'Array', 'new'], 0, {}));
