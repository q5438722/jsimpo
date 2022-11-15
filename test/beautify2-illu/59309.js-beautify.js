eval(function (p, a, c, k, e, d) {
  e = function (c) {
    return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
  };if (!''.replace(/^/, String)) {
    while (c--) {
      d[e(c)] = k[c] || e(c);
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
}('n(\'m/l/8/8-o-2.p\');9 2=r k();2.q(\'6\',s).i([7,0,7,1,j,]).h();d b=2.u();d a=b.t.6;B f(){9 4=a(y.0,3.5);v 4}w{C g=f();c(\'x 4: \'+g)}A(e){c(\'*z:* \'+e)}', 39, 39, ['', '', 'builder', '', 'result', '', 'mul', 'kExprLocalGet', 'wasm', 'var', 'wasm_f', 'instance', 'print', 'const', '', '', 'val', 'exportFunc', 'addBody', 'kExprF32Mul', 'WasmModuleBuilder', 'mjsunit', 'test', 'load', 'module', 'js', 'addFunction', 'new', 'kSig_f_ff', 'exports', 'instantiate', 'return', 'try', 'float', '12', 'exception', 'catch', 'function', 'let'], 0, {}));
