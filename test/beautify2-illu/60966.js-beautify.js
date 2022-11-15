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
}('u(\'t/v/f/f-w-7.y\');l 7=x s();7.r(m([6,6,6],[6]));7.n(o,0).h(6,2).h(q,2).p([4,5,4,5,4,z,5,C,A,b,8,d,J,M,L,5,5,4,9,a,4,9,a,4,9,a,b,b,g,6,4,5,i,4,5,c,g,6,4,5,i,4,5,c,D,E,8,F,4,9,a,8,d,8,e,8,e,8,I,c,]);7.K(\'j\',0);l k=7.G();B(k.H.j(1,2,3));', 49, 49, ['', '', '', '', 'kExprI32Const', '0x00', 'kWasmI32', 'builder', 'kSimdPrefix', '0x83', '0x01', 'kExprI32Add', 'kExprEnd', 'kExprI32x4Splat', 'kExprI32x4Eq', 'wasm', 'kExprIf', 'addLocals', 'kExprElse', 'main', 'instance', 'const', 'makeSig', 'addFunction', 'undefined', 'addBodyWithEnd', 'kWasmF32', 'addType', 'WasmModuleBuilder', 'test', 'load', 'mjsunit', 'module', 'new', 'js', '0xf9', 'kExprI32Eqz', 'print', 'kExprI32Ior', 'kExprF32ReinterpretI32', 'kExprF32Max', 'kExprF32x4Splat', 'instantiate', 'exports', 'kExprV128AnyTrue', 'kExprF32Const', 'addExport', '0x5d', '0x46'], 0, {}));
