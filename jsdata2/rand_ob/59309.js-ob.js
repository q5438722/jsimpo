const _0xf484 = [
    'addBody',
    'exportFunc',
    'instantiate',
    'exports',
    'float\x20result:\x20',
    '*exception:*\x20',
    '103944txDYvd',
    '670385PIWEpM',
    '1303461bEENpE',
    '2smVPTk',
    '68791caViXG',
    '77141MUuqFv',
    '5SsRBah',
    '17OZsqmG',
    '14653qxNLyG',
    '733OFIsJj',
    '2645AEwfGY',
    'test/mjsunit/wasm/wasm-module-builder.js',
    'addFunction',
    'mul'
];
const _0x2319e7 = _0x154a;
(function (_0x1158e8, _0xe7abaf) {
    const _0x51180f = _0x154a;
    while (!![]) {
        try {
            const _0x599eb2 = parseInt(_0x51180f(0x144)) + parseInt(_0x51180f(0x145)) + -parseInt(_0x51180f(0x146)) + parseInt(_0x51180f(0x147)) * parseInt(_0x51180f(0x148)) + parseInt(_0x51180f(0x149)) * -parseInt(_0x51180f(0x14a)) + parseInt(_0x51180f(0x14b)) * -parseInt(_0x51180f(0x14c)) + -parseInt(_0x51180f(0x14d)) * -parseInt(_0x51180f(0x14e));
            if (_0x599eb2 === _0xe7abaf)
                break;
            else
                _0x1158e8['push'](_0x1158e8['shift']());
        } catch (_0x1888a3) {
            _0x1158e8['push'](_0x1158e8['shift']());
        }
    }
}(_0xf484, -0x57c71 + 0xc58 * 0xb2 + 0xad36e * 0x1), load(_0x2319e7(0x14f)));
var builder = new WasmModuleBuilder();
function _0x154a(_0x3bb817, _0x3ad5c8) {
    return _0x154a = function (_0x5ebf4a, _0x5edca2) {
        _0x5ebf4a = _0x5ebf4a - (-0x20ee + 0x21da + 0x16 * 0x4);
        let _0x441c23 = _0xf484[_0x5ebf4a];
        return _0x441c23;
    }, _0x154a(_0x3bb817, _0x3ad5c8);
}
builder[_0x2319e7(0x150)](_0x2319e7(0x151), kSig_f_ff)[_0x2319e7(0x152)]([
    kExprLocalGet,
    0x1 * 0x8ff + 0x1ba * 0x10 + 0x177 * -0x19,
    kExprLocalGet,
    -0x513 + 0x696 + -0x182,
    kExprF32Mul
])[_0x2319e7(0x153)]();
const instance = builder[_0x2319e7(0x154)](), wasm_f = instance[_0x2319e7(0x155)][_0x2319e7(0x151)];
function f() {
    const _0x3822ce = {
        'qYdyN': function (_0x81d041, _0x5813a1, _0x13c5ec) {
            return _0x81d041(_0x5813a1, _0x13c5ec);
        }
    };
    var _0x512e7e = _0x3822ce['qYdyN'](wasm_f, -0xce5 + -0x62c + -0x2bb * -0x7, 0x4b6 + 0x2 * -0xd85 + 0x1657 + 0.5);
    return _0x512e7e;
}
try {
    let val = f();
    print(_0x2319e7(0x156) + val);
} catch (_0x33e8df) {
    print(_0x2319e7(0x157) + _0x33e8df);
}
