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
}('"7 8";4.2(0,"6",{9:1});4.2(0,"g 0",{a:1,f:e(){d 3.5}});b 3=c("5");', 17, 17, ['exports', 'true', 'defineProperty', '_foo', 'Object', 'foo', '__esModule', 'use', 'strict', 'value', 'enumerable', 'var', 'require', 'return', 'function', 'get', 'some'], 0, {}));