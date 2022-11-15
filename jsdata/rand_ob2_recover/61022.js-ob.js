load(_0x4d32b9(236)), function AddTest() {
    const _0x329d06 = _0x4d32b9;
    let _0x51ff29 = new WasmModuleBuilder();
    _0x51ff29[_0x329d06(237)](_0x329d06(238), kSig_i_v)[_0x329d06(239)]([
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
    ])[_0x329d06(240)]();
    let _0x2de0f7 = _0x51ff29[_0x329d06(241)]();
    assertEquals(0, _0x2de0f7['exports'][_0x329d06(238)]());
}(), function SubTest() {
    const _0x714764 = _0x4d32b9;
    let _0x334171 = new WasmModuleBuilder();
    _0x334171[_0x714764(237)](_0x714764(238), kSig_i_v)[_0x714764(239)]([
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
    let _0x1b3049 = _0x334171[_0x714764(241)]();
    assertEquals(0, _0x1b3049[_0x714764(242)][_0x714764(238)]());
}();