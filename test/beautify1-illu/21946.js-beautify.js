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
}('7 6={0:"a",2:"c",9:3};7 4=[...6,"d"];5(4).8(["a",e,"c","d"]);5(1 g 4).f(b);', 17, 17, ['', '', '', '', 'arr', 'expect', 'p2', 'var', 'toEqual', 'length', '', 'true', '', '', 'undefined', 'toBe', 'in'], 0, {}));
