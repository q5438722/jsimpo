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
}('2 0=1;3 4(){2 5=()=>{6 0}}2 7=()=>0;2 8=()=>()=>0;', 9, 9, ['arguments', '', 'var', 'function', 'fn', 'foo', 'return', 'bar', 'baz'], 0, {}));
