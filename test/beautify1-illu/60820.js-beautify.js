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
}('c(\'2/9/3/3-5-0.b\');(8(){4 0=6 7();0.a(1,1,k);0.d(\'2\',j).h([g,e,]).f();4 5=0.i()})();', 21, 21, ['builder', '31', 'test', 'wasm', 'var', 'module', 'new', 'WasmModuleBuilder', 'function', 'mjsunit', 'addMemory', 'js', 'load', 'addFunction', 'kExprEnd', 'exportFunc', 'kExprUnreachable', 'addBodyWithEnd', 'instantiate', 'kSig_l_v', 'false'], 0, {}));
