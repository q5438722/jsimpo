const _0x263d = [
    '195579kUicph',
    '51054ocNfeA',
    '6AoocKQ',
    '14813kSoYTy',
    '14ufVegj',
    '32179SZOLnN',
    '13vuxqBH',
    'test/mjsunit/wasm/wasm-module-builder.js',
    'addFunction',
    'instantiate',
    'exports',
    'mul',
    'float\x20result:\x20',
    '*exception:*\x20',
    '2GrLkFe',
    '85759NAOfxm',
    '110872JZrnAD',
    '321969PnWewg',
    '1rfkOgI'
];
const _0x7b1181 = _0x490c;
(function (_0x277a34, _0x436e70) {
    const _0xeb6c4c = _0x490c;
    while (!![]) {
        try {
            const _0x2db637 = -parseInt(_0xeb6c4c(0xe6)) * parseInt(_0xeb6c4c(0xe7)) + parseInt(_0xeb6c4c(0xe8)) + parseInt(_0xeb6c4c(0xe9)) * parseInt(_0xeb6c4c(0xea)) + -parseInt(_0xeb6c4c(0xeb)) + -parseInt(_0xeb6c4c(0xec)) * -parseInt(_0xeb6c4c(0xed)) + parseInt(_0xeb6c4c(0xee)) * parseInt(_0xeb6c4c(0xef)) + -parseInt(_0xeb6c4c(0xf0)) * parseInt(_0xeb6c4c(0xf1));
            if (_0x2db637 === _0x436e70)
                break;
            else
                _0x277a34['push'](_0x277a34['shift']());
        } catch (_0x2bc5fc) {
            _0x277a34['push'](_0x277a34['shift']());
        }
    }
}(_0x263d, 0x2b4cd + 0xbbc0 * -0x2 + -0x2 * -0x9c0b), load(_0x7b1181(0xf2)));
var builder = new WasmModuleBuilder();
builder[_0x7b1181(0xf3)]('mul', kSig_f_ff)['addBody']([
    kExprLocalGet,
    -0x558 * 0x1 + -0x1ffd + 0x13 * 0x1f7,
    kExprLocalGet,
    -0x186f + 0x1040 + 0x830,
    kExprF32Mul
])['exportFunc']();
function _0x490c(_0x19b9c0, _0x358f1b) {
    return _0x490c = function (_0x150a96, _0x447c63) {
        _0x150a96 = _0x150a96 - (0x2183 + 0x754 * 0x3 + 0x9 * -0x611);
        let _0x299b1d = _0x263d[_0x150a96];
        return _0x299b1d;
    }, _0x490c(_0x19b9c0, _0x358f1b);
}
const instance = builder[_0x7b1181(0xf4)](), wasm_f = instance[_0x7b1181(0xf5)][_0x7b1181(0xf6)];
function f() {
    var _0x3bc9ea = wasm_f(0x26b9 + -0x181d + 0xe9 * -0x10, -0x16 * -0xf1 + 0x1748 + 0x1a1 * -0x1b + 0.5);
    return _0x3bc9ea;
}
try {
    let val = f();
    print(_0x7b1181(0xf7) + val);
} catch (_0x4bbee9) {
    print(_0x7b1181(0xf8) + _0x4bbee9);
}
