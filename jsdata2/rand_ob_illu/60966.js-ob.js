const _0x57d0 = ['41XZYDEN', '22063xaqaVE', '625137KlCOSq', '2OOONRI', 'test/mjsunit/wasm/wasm-module-builder.js', 'addLocals', 'addExport', 'instantiate', 'exports', 'main', '1029600WSKKNJ', '1aGBMuR', '209282VjMVMr', '890613YgdTHb', '1fPFmAl', '244570ZbWFMR', '755637DIFrUK'];
const _0x3044c1 = _0x2410;

(function (_0x2f089d, _0x4cb1b2) {
    const _0x19ce03 = _0x2410;

    while (true) {
        try {
            const _0xc6974d = parseInt(_0x19ce03(0x73)) + -parseInt(_0x19ce03(0x74)) * -parseInt(_0x19ce03(0x75)) + parseInt(_0x19ce03(0x76)) + parseInt(_0x19ce03(0x77)) * parseInt(_0x19ce03(0x78)) + parseInt(_0x19ce03(0x79)) + parseInt(_0x19ce03(0x7a)) * -parseInt(_0x19ce03(0x7b)) + -parseInt(_0x19ce03(0x7c)) * parseInt(_0x19ce03(0x7d));

            if (_0xc6974d === _0x4cb1b2) break;else _0x2f089d.push(_0x2f089d.shift());
        } catch (_0x2dc6a5) {
            _0x2f089d.push(_0x2f089d.shift());
        }
    }
})(_0x57d0, 974845), load(_0x3044c1(0x7e));
const builder = new WasmModuleBuilder();

function _0x2410(_0x5ed06a, _0x403bbe) {
    return _0x2410 = function (_0x354801, _0x39cc9b) {
        _0x354801 = _0x354801 - 115;
        const _0x22554b = _0x57d0[_0x354801];

        return _0x22554b;
    }, _0x2410(_0x5ed06a, _0x403bbe);
}
builder.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32])), builder.addFunction(undefined, 0)[_0x3044c1(0x7f)](kWasmI32, 2)[_0x3044c1(0x7f)](kWasmF32, 2).addBodyWithEnd([kExprI32Const, 0, kExprI32Const, 0, kExprI32Const, 249, 0, kExprI32Ior, kExprI32Eqz, kExprI32Add, kSimdPrefix, kExprI32x4Splat, kExprF32Const, 70, 93, 0, 0, kExprI32Const, 131, 1, kExprI32Const, 131, 1, kExprI32Const, 131, 1, kExprI32Add, kExprI32Add, kExprIf, kWasmI32, kExprI32Const, 0, kExprElse, kExprI32Const, 0, kExprEnd, kExprIf, kWasmI32, kExprI32Const, 0, kExprElse, kExprI32Const, 0, kExprEnd, kExprF32ReinterpretI32, kExprF32Max, kSimdPrefix, kExprF32x4Splat, kExprI32Const, 131, 1, kSimdPrefix, kExprI32x4Splat, kSimdPrefix, kExprI32x4Eq, kSimdPrefix, kExprI32x4Eq, kSimdPrefix, kExprV128AnyTrue, kExprEnd]), builder[_0x3044c1(0x80)]('main', 0);

const instance = builder[_0x3044c1(0x81)]();

print(instance[_0x3044c1(0x82)][_0x3044c1(0x83)](1, 2, 3));
