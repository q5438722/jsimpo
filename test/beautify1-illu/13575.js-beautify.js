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
}('h 5=[];d 7{g(){5.f(e.i)}}d 6 j 7{}d 8{}9.b(7,[]);9.b(7,[],6);9.b(6,[]);9.b(6,[],8);9.b(7,[],8);c(5[0]).a(7);c(5[1]).a(6);c(5[2]).a(6);c(5[3]).a(8);c(5[4]).a(8);', 20, 20, ['', '', '', '', '', 'targets', 'Bar', 'Foo', 'Baz', 'Reflect', 'toBe', 'construct', 'expect', 'class', 'new', 'push', 'constructor', 'const', 'target', 'extends'], 0, {}));