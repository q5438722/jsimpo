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
}('\'j k\';2 5=6(\'../5.l\');2 4=5.m(9,{n:[h]});2 1=6(\'1\');2 d=e 1.g(`8 b=f.o();8 c=a+b;`);p 9({n}){4.u();7 3;s(7 i=0;i<n;i++){3=1.q({a:\'a\'})}4.r(n);d.t(3)}', 31, 31, ['', 'vm', 'const', 'context', 'bench', 'common', 'require', 'let', 'var', 'main', '', '', '', 'ctxFn', 'new', 'Math', 'Script', '100', '', 'use', 'strict', 'js', 'createBenchmark', '', 'random', 'function', 'createContext', 'end', 'for', 'runInContext', 'start'], 0, {}));