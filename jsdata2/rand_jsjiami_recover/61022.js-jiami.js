load('test/mjsunit/wasm/wasm-module-builder.js');
(function AddTest() {
    let _0xb931e9 = new WasmModuleBuilder();
    _0xb931e9['addFunction']('main', kSig_i_v)['addBody']([
        kExprBlock,
        kWasmVoid,
        kExprI64Const,
        0,
        kExprI64Const,
        128,
        128,
        128,
        128,
        16,
        kExprI64Add,
        kExprI64Eqz,
        kExprBrIf,
        0,
        kExprI32Const,
        0,
        kExprReturn,
        kExprEnd,
        kExprI32Const,
        0
    ])['exportFunc']();
    let _0x2fabe6 = _0xb931e9['instantiate']();
    assertEquals(0, _0x2fabe6['exports']['main']());
}());
(function SubTest() {
    let _0x8a3a7f = new WasmModuleBuilder();
    _0x8a3a7f['addFunction']('main', kSig_i_v)['addBody']([
        kExprBlock,
        kWasmVoid,
        kExprI64Const,
        0,
        kExprI64Const,
        128,
        128,
        128,
        128,
        16,
        kExprI64Sub,
        kExprI64Eqz,
        kExprBrIf,
        0,
        kExprI32Const,
        0,
        kExprReturn,
        kExprEnd,
        kExprI32Const,
        0
    ])['exportFunc']();
    let _0x580863 = _0x8a3a7f['instantiate']();
    assertEquals(0, _0x580863['exports']['main']());
}());