load('test/mjsunit/wasm/wasm-module-builder.js');
var builder = new WasmModuleBuilder();
builder['addFunction']('mul', kSig_f_ff)['addBody']([
    kExprLocalGet,
    0x367 + 0x22a0 + -0x2607,
    kExprLocalGet,
    0x1ea8 + 0x1c32 + 0x5 * -0xbc5,
    kExprF32Mul
])['exportFunc']();
const instance = builder['instantiate'](), wasm_f = instance['exports']['mul'];
function f() {
    var _0x131236 = wasm_f(-0x1a2f * 0x1 + 0x2368 + -0x92d, -0x139 * 0x4 + -0x254c + -0x27 * -0x115 + 0.5);
    return _0x131236;
}
try {
    let val = f();
    print('float\x20result:\x20' + val);
} catch (_0x47d81c) {
    print('*exception:*\x20' + _0x47d81c);
}
