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
}('6 4(0,1=0,2=1){7 2}8(4(3)).5(3);6 4(0,1=0,2=1){7 2}8(4(3)).5(3);6 4(0,1=0,2=1){7 2}8(4(3)).5(3);6 4(0,1=0,2=1){7 2}8(4(3)).5(3);6 4(0,1=0,2=1){7 2}8(4(3)).5(3);', 9, 9, ['a', 'b', 'c', '', 'f', 'toBe', 'function', 'return', 'expect'], 0, {}));