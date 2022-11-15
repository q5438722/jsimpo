const _0x27ee = [
    'exports',
    'float\x20result:\x20',
    '2036cxqOfC',
    '2exKoyM',
    '20308ZUYbjX',
    '29glweLT',
    '1092836ytDKKc',
    '364901NxSptc',
    '3FLDYxs',
    '111366eoDtBi',
    '81731QXKlxT',
    '2379656mMeEzZ',
    'test/mjsunit/wasm/wasm-module-builder.js',
    'mul',
    'addBody',
    'exportFunc'
];
const _0x169d6d = _0x5d48;
(function (_0x395e9b, _0x33582c) {
    const _0x5d0f28 = _0x5d48;
    while (!![]) {
        try {
            const _0x20644f = -parseInt(_0x5d0f28(0x1b3)) * -parseInt(_0x5d0f28(0x1b4)) + parseInt(_0x5d0f28(0x1b5)) * -parseInt(_0x5d0f28(0x1b6)) + -parseInt(_0x5d0f28(0x1b7)) + parseInt(_0x5d0f28(0x1b8)) + -parseInt(_0x5d0f28(0x1b9)) * parseInt(_0x5d0f28(0x1ba)) + -parseInt(_0x5d0f28(0x1bb)) + parseInt(_0x5d0f28(0x1bc));
            if (_0x20644f === _0x33582c)
                break;
            else
                _0x395e9b['push'](_0x395e9b['shift']());
        } catch (_0x47c4f1) {
            _0x395e9b['push'](_0x395e9b['shift']());
        }
    }
}(_0x27ee, 0x9ef18), load(_0x169d6d(0x1bd)));
var builder = new WasmModuleBuilder();
builder['addFunction'](_0x169d6d(0x1be), kSig_f_ff)[_0x169d6d(0x1bf)]([
    kExprLocalGet,
    0x0,
    kExprLocalGet,
    0x1,
    kExprF32Mul
])[_0x169d6d(0x1c0)]();
const instance = builder['instantiate'](), wasm_f = instance[_0x169d6d(0x1c1)]['mul'];
function f() {
    var _0x295197 = wasm_f(0xc, 3.5);
    return _0x295197;
}
function _0x5d48(_0x448b69, _0x4bb80c) {
    return _0x5d48 = function (_0x27ee14, _0x5d486c) {
        _0x27ee14 = _0x27ee14 - 0x1b3;
        let _0x441e6f = _0x27ee[_0x27ee14];
        return _0x441e6f;
    }, _0x5d48(_0x448b69, _0x4bb80c);
}
try {
    let val = f();
    print(_0x169d6d(0x1c2) + val);
} catch (_0x56d4e4) {
    print('*exception:*\x20' + _0x56d4e4);
}
