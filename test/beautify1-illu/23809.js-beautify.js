eval(function (p, a, c, k, e, d) {
  e = function (c) {
    return c;
  };if (!''.replace(/^/, String)) {
    while (c--) {
      d[c] = k[c] || c;
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
}('6 1,3;(1=4)===5||1===2 0?2 0:1();(3=4)===5||3===2 0?2 0:3(...[],0);', 7, 7, ['', '_fn', 'void', '_fn2', 'fn', 'null', 'var'], 0, {}));
