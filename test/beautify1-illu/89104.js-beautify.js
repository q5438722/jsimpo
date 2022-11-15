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
}('0 3 1\'./3\'0 2 1\'./2\'0 5 1\'./5\'0 7 1\'./7\'0 9 1\'./9\'0 8 1\'./8\'0 a 1\'./a\'0 6 1\'./6\'0 4 1\'./4\'c b{3,2,5,7,9,8,a,6,4}', 13, 13, ['import', 'from', 'app', 'about', 'window', 'edit', 'task', 'help', 'preferences', 'menu', 'subnav', 'default', 'export'], 0, {}));
