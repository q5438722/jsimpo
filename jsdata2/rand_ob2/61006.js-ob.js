const _0x3ea7 = [
    'exports',
    '3235tkZhIr',
    '1HfWJfz',
    '294386JKvAts',
    '169201FBmtMJ',
    '4NpmPlr',
    '346347KvYQbh',
    '328405WBegWo',
    '1037sxSgPE',
    '1157MXEUtr',
    '2MAhTOs',
    'test/mjsunit/wasm/wasm-module-builder.js',
    'addType',
    'addFunction',
    'addBodyWithEnd',
    'addLocals',
    'addExport',
    'main',
    'instantiate'
];
function _0x35dc(_0x46206c, _0x2f50f0) {
    return _0x35dc = function (_0x3ea7e5, _0x35dc82) {
        _0x3ea7e5 = _0x3ea7e5 - 0x9a;
        let _0x5d8bc2 = _0x3ea7[_0x3ea7e5];
        return _0x5d8bc2;
    }, _0x35dc(_0x46206c, _0x2f50f0);
}
const _0x430cfa = _0x35dc;
(function (_0x3acb46, _0x1449d3) {
    const _0x27c87c = _0x35dc;
    while (!![]) {
        try {
            const _0x3a46cc = parseInt(_0x27c87c(0x9a)) * -parseInt(_0x27c87c(0x9b)) + -parseInt(_0x27c87c(0x9c)) + -parseInt(_0x27c87c(0x9d)) * -parseInt(_0x27c87c(0x9e)) + -parseInt(_0x27c87c(0x9f)) + parseInt(_0x27c87c(0xa0)) + parseInt(_0x27c87c(0xa1)) + parseInt(_0x27c87c(0xa2)) * parseInt(_0x27c87c(0xa3));
            if (_0x3a46cc === _0x1449d3)
                break;
            else
                _0x3acb46['push'](_0x3acb46['shift']());
        } catch (_0x5d5ae4) {
            _0x3acb46['push'](_0x3acb46['shift']());
        }
    }
}(_0x3ea7, 0x59030), load(_0x430cfa(0xa4)), function () {
    const _0x233b03 = _0x430cfa, _0x3a3b77 = new WasmModuleBuilder();
    _0x3a3b77['addType'](makeSig([
        kWasmI32,
        kWasmI32,
        kWasmI32
    ], [kWasmI32])), _0x3a3b77[_0x233b03(0xa5)](makeSig([], [])), _0x3a3b77[_0x233b03(0xa6)](undefined, 0x0)[_0x233b03(0xa7)]([
        kExprCallFunction,
        0x1,
        kExprI32Const,
        0x0,
        kExprEnd
    ]), _0x3a3b77['addFunction'](undefined, 0x1)[_0x233b03(0xa8)](kWasmF32, 0x1)[_0x233b03(0xa8)](kWasmI32, 0xd)[_0x233b03(0xa7)]([kExprEnd]), _0x3a3b77[_0x233b03(0xa9)](_0x233b03(0xaa), 0x0);
    const _0x1afb24 = _0x3a3b77[_0x233b03(0xab)]();
    print(_0x1afb24[_0x233b03(0xac)][_0x233b03(0xaa)](0x1, 0x2, 0x3));
}());
