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
}('3 0=4;1=0.1;2=0.2;7=6.5(0,["1","2"]);0;', 8, 8, ['_obj', 'a', 'b', 'var', 'obj', 'objectWithoutPropertiesLoose', 'babelHelpers', 'c'], 0, {}));
