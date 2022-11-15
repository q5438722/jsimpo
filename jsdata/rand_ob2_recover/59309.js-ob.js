load(_0x449268(434));
var builder = new WasmModuleBuilder();
builder[_0x449268(435)]('mul', kSig_f_ff)[_0x449268(436)]([
    kExprLocalGet,
    0,
    kExprLocalGet,
    1,
    kExprF32Mul
])[_0x449268(437)]();
const instance = builder[_0x449268(438)](), wasm_f = instance['exports'][_0x449268(439)];
function f() {
    var _0x409654 = wasm_f(12, 3.5);
    return _0x409654;
}
try {
    let val = f();
    print(_0x449268(440) + val);
} catch (_0x27b01b) {
    print(_0x449268(441) + _0x27b01b);
}