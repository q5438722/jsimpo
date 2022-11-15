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
}('5 4=c;9 8(a=4,...b){5 4=d;7(b[0]).6(2);7(b[1]).6(3)}8(1,2,3);', 14, 14, ['', '', '', '', 'bar', 'const', 'toBe', 'expect', 'foo', 'function', '', '', 'true', 'false'], 0, {}));
