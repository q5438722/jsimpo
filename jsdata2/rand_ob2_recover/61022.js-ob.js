load(_0x11cbcc(471)), function AddTest() {
    const _0x43b20c = _0x11cbcc;
    let _0x3fbbec = new WasmModuleBuilder();
    _0x3fbbec[_0x43b20c(472)](_0x43b20c(473), kSig_i_v)['addBody']([
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
    ])[_0x43b20c(474)]();
    let _0x434b1f = _0x3fbbec[_0x43b20c(475)]();
    assertEquals(0, _0x434b1f[_0x43b20c(476)][_0x43b20c(473)]());
}(), function SubTest() {
    const _0x4fa717 = _0x11cbcc;
    let _0x3b0340 = new WasmModuleBuilder();
    _0x3b0340[_0x4fa717(472)]('main', kSig_i_v)[_0x4fa717(477)]([
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
    ])[_0x4fa717(474)]();
    let _0x1992bb = _0x3b0340[_0x4fa717(475)]();
    assertEquals(0, _0x1992bb['exports'][_0x4fa717(473)]());
}();