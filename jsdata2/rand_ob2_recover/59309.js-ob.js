load(_0x169d6d(445));
var builder = new WasmModuleBuilder();
builder['addFunction'](_0x169d6d(446), kSig_f_ff)[_0x169d6d(447)]([
    kExprLocalGet,
    0,
    kExprLocalGet,
    1,
    kExprF32Mul
])[_0x169d6d(448)]();
const instance = builder['instantiate'](), wasm_f = instance[_0x169d6d(449)]['mul'];
function f() {
    var _0x295197 = wasm_f(12, 3.5);
    return _0x295197;
}
function _0x5d48(_0x448b69, _0x4bb80c) {
    return _0x5d48 = function (_0x27ee14, _0x5d486c) {
        _0x27ee14 = _0x27ee14 - 435;
        let _0x441e6f = _0x27ee[_0x27ee14];
        return _0x441e6f;
    }, _0x5d48(_0x448b69, _0x4bb80c);
}
try {
    let val = f();
    print(_0x169d6d(450) + val);
} catch (_0x56d4e4) {
    print('*exception:* ' + _0x56d4e4);
}