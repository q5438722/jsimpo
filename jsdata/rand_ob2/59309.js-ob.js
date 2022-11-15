const _0x5d93 = [
    '1267579TitVdb',
    '39839DaLcLW',
    '23LFQxzU',
    'test/mjsunit/wasm/wasm-module-builder.js',
    'addFunction',
    'addBody',
    'exportFunc',
    'instantiate',
    'mul',
    'float\x20result:\x20',
    '*exception:*\x20',
    '557384YaBhxq',
    '455278wvxNgl',
    '322875vCDTrE',
    '591913tyZkor',
    '1FbpnVD',
    '5cegONJ',
    '271775IdZgun'
];
function _0x2ac6(_0xaa1dc4, _0x24ef2b) {
    return _0x2ac6 = function (_0x5d9367, _0x2ac618) {
        _0x5d9367 = _0x5d9367 - 0x1a8;
        let _0xcd3681 = _0x5d93[_0x5d9367];
        return _0xcd3681;
    }, _0x2ac6(_0xaa1dc4, _0x24ef2b);
}
const _0x449268 = _0x2ac6;
(function (_0x42fbdf, _0x1c7ba1) {
    const _0x252e04 = _0x2ac6;
    while (!![]) {
        try {
            const _0x352d86 = parseInt(_0x252e04(0x1a8)) + -parseInt(_0x252e04(0x1a9)) + -parseInt(_0x252e04(0x1aa)) + parseInt(_0x252e04(0x1ab)) * -parseInt(_0x252e04(0x1ac)) + parseInt(_0x252e04(0x1ad)) * parseInt(_0x252e04(0x1ae)) + parseInt(_0x252e04(0x1af)) + -parseInt(_0x252e04(0x1b0)) * parseInt(_0x252e04(0x1b1));
            if (_0x352d86 === _0x1c7ba1)
                break;
            else
                _0x42fbdf['push'](_0x42fbdf['shift']());
        } catch (_0x52f95d) {
            _0x42fbdf['push'](_0x42fbdf['shift']());
        }
    }
}(_0x5d93, 0xdb1c3), load(_0x449268(0x1b2)));
var builder = new WasmModuleBuilder();
builder[_0x449268(0x1b3)]('mul', kSig_f_ff)[_0x449268(0x1b4)]([
    kExprLocalGet,
    0x0,
    kExprLocalGet,
    0x1,
    kExprF32Mul
])[_0x449268(0x1b5)]();
const instance = builder[_0x449268(0x1b6)](), wasm_f = instance['exports'][_0x449268(0x1b7)];
function f() {
    var _0x409654 = wasm_f(0xc, 3.5);
    return _0x409654;
}
try {
    let val = f();
    print(_0x449268(0x1b8) + val);
} catch (_0x27b01b) {
    print(_0x449268(0x1b9) + _0x27b01b);
}
