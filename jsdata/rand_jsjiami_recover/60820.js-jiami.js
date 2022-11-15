load('test/mjsunit/wasm/wasm-module-builder.js');
(function () {
    var _0x14ff17 = new WasmModuleBuilder();
    _0x14ff17['addMemory'](31, 31, ![]);
    _0x14ff17['addFunction']('test', kSig_l_v)['addBodyWithEnd']([
        kExprUnreachable,
        kExprEnd
    ])['exportFunc']();
    var _0x134ace = _0x14ff17['instantiate']();
}());