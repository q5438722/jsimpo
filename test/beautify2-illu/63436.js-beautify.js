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
}('2 5=1;2 7={c:3(){4 3(){}},d(){4 6},g:3(){e(5--==0)9"b a";4{h:3(){},n:6}}};2 8=m i({},7);2 o=j.k(8);l(o){f()}', 25, 25, ['', '', 'var', 'function', 'return', 'fuse', 'true', 'handler', 'p', 'throw', 'die', 'please', 'get', 'has', 'if', '', 'getOwnPropertyDescriptor', 'value', 'Proxy', 'Object', 'create', 'with', 'new', 'configurable', ''], 0, {}));
