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
}('4 3=1;3=2;7 5(){4 6={a:1};3="a";8(4 0=3;0<2;0++){9 6[0]}}5();', 11, 11, ['i', '', '', 'global', 'var', 'f', 'o', 'function', 'for', 'delete', ''], 0, {}));
