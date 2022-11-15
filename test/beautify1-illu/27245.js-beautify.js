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
}('c{3,1,2}a\'@8-9/b/h\';0 g=3();0 d=1();0 f=3(2({4:{7:{5:\'#6\'}}}));0 e=1(2({4:{7:{5:\'#6\'}}}));', 18, 18, ['const', 'createTheme', 'adaptV4Theme', 'createMuiTheme', 'palette', 'main', 'ff5252', 'primary', 'material', 'ui', 'from', 'core', 'import', 'theme2', 'theme4', 'theme3', 'theme1', 'styles'], 0, {}));
