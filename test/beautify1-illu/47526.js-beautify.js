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
}('4 3()=>{2\'0, 1 5 6 b 9 a 7 8\'}', 12, 12, ['oops', 'I', 'return', 'default', 'export', 'happen', 'to', 'React', 'component', 'like', '', 'look'], 0, {}));
