const _0x47f2 = [
    'addBody',
    '329171imuWkA',
    '1030130SVHWTM',
    '884759qtfNxw',
    '321685vEmRza',
    '1789pgUKsI',
    '142UfTfbG',
    '1JsBKQH',
    '321590VsqKvU',
    '2003843jqHLAZ',
    'test/mjsunit/wasm/wasm-module-builder.js',
    'addFunction',
    'main',
    'exportFunc',
    'instantiate',
    'exports'
];
const _0x11cbcc = _0x3e45;
function _0x3e45(_0x1ca0b2, _0x43250b) {
    return _0x3e45 = function (_0x47f256, _0x3e457d) {
        _0x47f256 = _0x47f256 - 0x1ce;
        let _0x23ce9c = _0x47f2[_0x47f256];
        return _0x23ce9c;
    }, _0x3e45(_0x1ca0b2, _0x43250b);
}
(function (_0x31ab57, _0x3b3817) {
    const _0x3393b0 = _0x3e45;
    while (!![]) {
        try {
            const _0xa972fe = -parseInt(_0x3393b0(0x1ce)) + parseInt(_0x3393b0(0x1cf)) + -parseInt(_0x3393b0(0x1d0)) + -parseInt(_0x3393b0(0x1d1)) + parseInt(_0x3393b0(0x1d2)) * -parseInt(_0x3393b0(0x1d3)) + -parseInt(_0x3393b0(0x1d4)) * parseInt(_0x3393b0(0x1d5)) + parseInt(_0x3393b0(0x1d6));
            if (_0xa972fe === _0x3b3817)
                break;
            else
                _0x31ab57['push'](_0x31ab57['shift']());
        } catch (_0x4b806e) {
            _0x31ab57['push'](_0x31ab57['shift']());
        }
    }
}(_0x47f2, 0xe146a), load(_0x11cbcc(0x1d7)), function AddTest() {
    const _0x43b20c = _0x11cbcc;
    let _0x3fbbec = new WasmModuleBuilder();
    _0x3fbbec[_0x43b20c(0x1d8)](_0x43b20c(0x1d9), kSig_i_v)['addBody']([
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
    ])[_0x43b20c(0x1da)]();
    let _0x434b1f = _0x3fbbec[_0x43b20c(0x1db)]();
    assertEquals(0x0, _0x434b1f[_0x43b20c(0x1dc)][_0x43b20c(0x1d9)]());
}(), function SubTest() {
    const _0x4fa717 = _0x11cbcc;
    let _0x3b0340 = new WasmModuleBuilder();
    _0x3b0340[_0x4fa717(0x1d8)]('main', kSig_i_v)[_0x4fa717(0x1dd)]([
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
    ])[_0x4fa717(0x1da)]();
    let _0x1992bb = _0x3b0340[_0x4fa717(0x1db)]();
    assertEquals(0x0, _0x1992bb['exports'][_0x4fa717(0x1d9)]());
}());
