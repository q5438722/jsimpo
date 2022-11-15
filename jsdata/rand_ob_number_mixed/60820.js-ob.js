load('test/mjsunit/wasm/wasm-module-builder.js'), function () {
    var _0x3ba8df = new WasmModuleBuilder();
    _0x3ba8df['addMemory'](-0xd3 * 0x1a + 0x16b + 0x1 * 0x1422, -0x11f8 + -0x1262 + 0x1 * 0x2479, ![]), _0x3ba8df['addFunction']('test', kSig_l_v)['addBodyWithEnd']([
        kExprUnreachable,
        kExprEnd
    ])['exportFunc']();
    var _0x5e1f19 = _0x3ba8df['instantiate']();
}();
