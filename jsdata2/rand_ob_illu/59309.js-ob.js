const _0xf484 = ['addBody', 'exportFunc', 'instantiate', 'exports', 'float result: ', '*exception:* ', '103944txDYvd', '670385PIWEpM', '1303461bEENpE', '2smVPTk', '68791caViXG', '77141MUuqFv', '5SsRBah', '17OZsqmG', '14653qxNLyG', '733OFIsJj', '2645AEwfGY', 'test/mjsunit/wasm/wasm-module-builder.js', 'addFunction', 'mul'];
const _0x2319e7 = _0x154a;

(function (_0x1158e8, _0xe7abaf) {
    const _0x51180f = _0x154a;

    while (true) {
        try {
            const _0x599eb2 = parseInt(_0x51180f(0x144)) + parseInt(_0x51180f(0x145)) + -parseInt(_0x51180f(0x146)) + parseInt(_0x51180f(0x147)) * parseInt(_0x51180f(0x148)) + parseInt(_0x51180f(0x149)) * -parseInt(_0x51180f(0x14a)) + parseInt(_0x51180f(0x14b)) * -parseInt(_0x51180f(0x14c)) + -parseInt(_0x51180f(0x14d)) * -parseInt(_0x51180f(0x14e));

            if (_0x599eb2 === _0xe7abaf) break;else _0x1158e8.push(_0x1158e8.shift());
        } catch (_0x1888a3) {
            _0x1158e8.push(_0x1158e8.shift());
        }
    }
})(_0xf484, 912429), load(_0x2319e7(0x14f));
const builder = new WasmModuleBuilder();

function _0x154a(_0x3bb817, _0x3ad5c8) {
    return _0x154a = function (_0x5ebf4a, _0x5edca2) {
        _0x5ebf4a = _0x5ebf4a - 324;
        const _0x441c23 = _0xf484[_0x5ebf4a];

        return _0x441c23;
    }, _0x154a(_0x3bb817, _0x3ad5c8);
}
builder[_0x2319e7(0x150)](_0x2319e7(0x151), kSig_f_ff)[_0x2319e7(0x152)]([kExprLocalGet, 0, kExprLocalGet, 1, kExprF32Mul])[_0x2319e7(0x153)]();

const instance = builder[_0x2319e7(0x154)]();

const wasm_f = instance[_0x2319e7(0x155)][_0x2319e7(0x151)];

function f() {
    const _0x3822ce = {
        'qYdyN': function (_0x81d041, _0x5813a1, _0x13c5ec) {
            return _0x81d041(_0x5813a1, _0x13c5ec);
        }
    };

    const _0x512e7e = _0x3822ce.qYdyN(wasm_f, 12, 3.5);

    return _0x512e7e;
}
try {
    const val = f();

    print(_0x2319e7(0x156) + val);
} catch (_0x33e8df) {
    print(_0x2319e7(0x157) + _0x33e8df);
}
