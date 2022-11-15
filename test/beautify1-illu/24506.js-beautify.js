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
}('4*3(2){5 0,1;9 1=(0=2,6 0),8.7(1)}', 10, 10, ['_ref', '_ref2', 'n', 'myGenerator', 'function', 'var', 'yield', 'abs', 'Math', 'return'], 0, {}));
