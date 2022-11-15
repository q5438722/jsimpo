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
}('1 6(){}3 a=h 6();1 f(7){2 a[7]()}a.9=1(){2 d}a[0]=1(){2 e}3 5={};a[5]=1(){2 c}a.8=0;g a.8;3 b="9";f(b);f(b);4(d,f(b));4(e,f(0));4(c,f(5));', 18, 18, ['', 'function', 'return', 'var', 'assertEquals', 'obj', 'F', 'i', 'foo', 'first', '', '', '33', '11', '22', '', 'delete', 'new'], 0, {}));
