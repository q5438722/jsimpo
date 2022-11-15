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
}('4 c(f){7 f}2 3=(4 6(){2 5=0;2 9=c(6);8(2 1=0;1<d;1++){5+=1}7 6==9})();a(h,3);2 3=(4 b(){2 5=0;8(2 1=0;1<e;1++){5+=1}7 b})();a("4",g 3);', 18, 18, ['', 'i', 'var', 'x', 'function', 'sum', 'foo', 'return', 'for', 'r', 'assertEquals', 'bar', 'id', '100000', '90000', '', 'typeof', 'true'], 0, {}));
