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
}('h c=0;8.e(\'4\',5(4){c=4});8.d(\'4\',5(){9 c});8.e(\'6\',5(4){});8.d(\'6\',5(){9 7});5 f(a){4=4+a;9 4}5 g(a){6=6+a;9 6}b(1,f(1));b(3,f(2));b(7,g(1));b(7,g(2));', 18, 18, ['', '', '', '', 'x', 'function', 'y', '', 'this', 'return', '', 'assertEquals', 'x_', '__defineGetter__', '__defineSetter__', '', '', 'var'], 0, {}));