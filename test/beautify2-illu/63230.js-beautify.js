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
}('4 2;4 3="";a(2=0;2<6;2++){3=3+(2+(2+1));3=3.5(1)}7(9,3.8(0));', 11, 11, ['', '', 'i', 's', 'var', 'substring', '1024', 'assertEquals', 'charCodeAt', '57', 'for'], 0, {}));
