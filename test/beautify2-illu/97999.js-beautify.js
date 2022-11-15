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
}('1{4}=3(\'c\');1{2}=3(\'./2\');7 5(8){1[6]=4(0);2();b 6}a.9={5};', 13, 13, ['', 'const', 'useCustom', 'require', 'useState', 'Component', 'count', 'function', 'props', 'exports', 'module', 'return', 'react'], 0, {}));
