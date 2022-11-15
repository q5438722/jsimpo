const _0x84ae = [
    '82wupKFM',
    '11830QkcIjs',
    '4boHSIm',
    '301943jRDUJN',
    '36blwFJo',
    '63895VTWaPM',
    'test/mjsunit/wasm/wasm-module-builder.js',
    'addFunction',
    'main',
    'addBody',
    'exportFunc',
    'instantiate',
    'exports',
    '8AUBfPv',
    '71932EaLoAn',
    '978710IabknK',
    '851453yRfGsI',
    '1noEIAr',
    '931169dkeMVY'
];
function _0x6998(_0x22a883, _0x3b44de) {
    return _0x6998 = function (_0x84ae75, _0x69982a) {
        _0x84ae75 = _0x84ae75 - 0xe0;
        let _0x52b1b6 = _0x84ae[_0x84ae75];
        return _0x52b1b6;
    }, _0x6998(_0x22a883, _0x3b44de);
}
const _0x4d32b9 = _0x6998;
(function (_0x2c9195, _0x522be5) {
    const _0x3f55fa = _0x6998;
    while (!![]) {
        try {
            const _0x12e604 = -parseInt(_0x3f55fa(0xe0)) * parseInt(_0x3f55fa(0xe1)) + parseInt(_0x3f55fa(0xe2)) + -parseInt(_0x3f55fa(0xe3)) + -parseInt(_0x3f55fa(0xe4)) * -parseInt(_0x3f55fa(0xe5)) + -parseInt(_0x3f55fa(0xe6)) * parseInt(_0x3f55fa(0xe7)) + -parseInt(_0x3f55fa(0xe8)) * parseInt(_0x3f55fa(0xe9)) + parseInt(_0x3f55fa(0xea)) * parseInt(_0x3f55fa(0xeb));
            if (_0x12e604 === _0x522be5)
                break;
            else
                _0x2c9195['push'](_0x2c9195['shift']());
        } catch (_0x5873d1) {
            _0x2c9195['push'](_0x2c9195['shift']());
        }
    }
}(_0x84ae, 0x93cae), load(_0x4d32b9(0xec)), function AddTest() {
    const _0x329d06 = _0x4d32b9;
    let _0x51ff29 = new WasmModuleBuilder();
    _0x51ff29[_0x329d06(0xed)](_0x329d06(0xee), kSig_i_v)[_0x329d06(0xef)]([
        kExprBlock,
        kWasmVoid,
        kExprI64Const,
        0x0,
        kExprI64Const,
        0x80,
        0x80,
        0x80,
        0x80,
        0x10,
        kExprI64Add,
        kExprI64Eqz,
        kExprBrIf,
        0x0,
        kExprI32Const,
        0x0,
        kExprReturn,
        kExprEnd,
        kExprI32Const,
        0x0
    ])[_0x329d06(0xf0)]();
    let _0x2de0f7 = _0x51ff29[_0x329d06(0xf1)]();
    assertEquals(0x0, _0x2de0f7['exports'][_0x329d06(0xee)]());
}(), function SubTest() {
    const _0x714764 = _0x4d32b9;
    let _0x334171 = new WasmModuleBuilder();
    _0x334171[_0x714764(0xed)](_0x714764(0xee), kSig_i_v)[_0x714764(0xef)]([
        kExprBlock,
        kWasmVoid,
        kExprI64Const,
        0x0,
        kExprI64Const,
        0x80,
        0x80,
        0x80,
        0x80,
        0x10,
        kExprI64Sub,
        kExprI64Eqz,
        kExprBrIf,
        0x0,
        kExprI32Const,
        0x0,
        kExprReturn,
        kExprEnd,
        kExprI32Const,
        0x0
    ])['exportFunc']();
    let _0x1b3049 = _0x334171[_0x714764(0xf1)]();
    assertEquals(0x0, _0x1b3049[_0x714764(0xf2)][_0x714764(0xee)]());
}());
