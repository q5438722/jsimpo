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
}('4 0 3\'0\'2 5(6,1)=>{1.9(\'8 7 a\')}', 11, 11, ['fs', 'res', 'export', 'from', 'import', 'default', 'req', 'should', 'Index', 'send', 'work'], 0, {}));
