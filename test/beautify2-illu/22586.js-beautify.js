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
}('(1(){7 2=a.8(1*(){6.4(5 9.h(\'g\'));b(0,f)});1 0(){3 2.e(c,d)}3 0})()();', 18, 18, ['poll', 'function', '_poll', 'return', 'log', 'yield', 'console', 'var', 'asyncToGenerator', 'Promise', 'babelHelpers', 'setTimeout', 'this', 'arguments', 'apply', '1000', 'Hello', 'resolve'], 0, {}));
