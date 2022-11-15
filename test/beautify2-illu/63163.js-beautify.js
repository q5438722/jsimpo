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
}('1("0 3() { 4 }",2);1("0 3() { 4 5 }",2);1("0 3() { 6 }",2);1("0 3() { 6 5 }",2);', 7, 7, ['function', 'assertThrows', 'SyntaxError', 'f', 'break', 'a', 'continue'], 0, {}));
