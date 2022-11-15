const _0x3fd3 = [
    '253101jLOBev',
    '37sUXUBX',
    '12712ewPZiU',
    'test/mjsunit/wasm/wasm-module-builder.js',
    'addType',
    'addFunction',
    'addLocals',
    'addBodyWithEnd',
    'addExport',
    'main',
    'instantiate',
    'exports',
    '282895LbiBwN',
    '819239cugIHn',
    '1XqQFwP',
    '440655pOCVly',
    '94087CDRhYl',
    '9xHKagQ',
    '71206KqKjnD'
];
function _0x3913(_0x22e1ed, _0x2242d1) {
    return _0x3913 = function (_0x3fd3c0, _0x3913c8) {
        _0x3fd3c0 = _0x3fd3c0 - 0x14b;
        let _0x4b93ec = _0x3fd3[_0x3fd3c0];
        return _0x4b93ec;
    }, _0x3913(_0x22e1ed, _0x2242d1);
}
const _0x5c0243 = _0x3913;
(function (_0x9e3ca1, _0x4404ba) {
    const _0x20d46a = _0x3913;
    while (!![]) {
        try {
            const _0x420dbb = parseInt(_0x20d46a(0x14b)) + -parseInt(_0x20d46a(0x14c)) * -parseInt(_0x20d46a(0x14d)) + -parseInt(_0x20d46a(0x14e)) + -parseInt(_0x20d46a(0x14f)) + parseInt(_0x20d46a(0x150)) * parseInt(_0x20d46a(0x151)) + -parseInt(_0x20d46a(0x152)) + -parseInt(_0x20d46a(0x153)) * parseInt(_0x20d46a(0x154));
            if (_0x420dbb === _0x4404ba)
                break;
            else
                _0x9e3ca1['push'](_0x9e3ca1['shift']());
        } catch (_0x47b887) {
            _0x9e3ca1['push'](_0x9e3ca1['shift']());
        }
    }
}(_0x3fd3, 0x765c1), load(_0x5c0243(0x155)));
const builder = new WasmModuleBuilder();
builder[_0x5c0243(0x156)](makeSig([
    kWasmI32,
    kWasmI32,
    kWasmI32
], [kWasmI32])), builder[_0x5c0243(0x157)](undefined, 0x0)[_0x5c0243(0x158)](kWasmI32, 0x2)[_0x5c0243(0x158)](kWasmF32, 0x2)[_0x5c0243(0x159)]([
    kExprI32Const,
    0x0,
    kExprI32Const,
    0x0,
    kExprI32Const,
    0xf9,
    0x0,
    kExprI32Ior,
    kExprI32Eqz,
    kExprI32Add,
    kSimdPrefix,
    kExprI32x4Splat,
    kExprF32Const,
    0x46,
    0x5d,
    0x0,
    0x0,
    kExprI32Const,
    0x83,
    0x1,
    kExprI32Const,
    0x83,
    0x1,
    kExprI32Const,
    0x83,
    0x1,
    kExprI32Add,
    kExprI32Add,
    kExprIf,
    kWasmI32,
    kExprI32Const,
    0x0,
    kExprElse,
    kExprI32Const,
    0x0,
    kExprEnd,
    kExprIf,
    kWasmI32,
    kExprI32Const,
    0x0,
    kExprElse,
    kExprI32Const,
    0x0,
    kExprEnd,
    kExprF32ReinterpretI32,
    kExprF32Max,
    kSimdPrefix,
    kExprF32x4Splat,
    kExprI32Const,
    0x83,
    0x1,
    kSimdPrefix,
    kExprI32x4Splat,
    kSimdPrefix,
    kExprI32x4Eq,
    kSimdPrefix,
    kExprI32x4Eq,
    kSimdPrefix,
    kExprV128AnyTrue,
    kExprEnd
]), builder[_0x5c0243(0x15a)](_0x5c0243(0x15b), 0x0);
const instance = builder[_0x5c0243(0x15c)]();
print(instance[_0x5c0243(0x15d)][_0x5c0243(0x15b)](0x1, 0x2, 0x3));
