load('test/mjsunit/wasm/wasm-module-builder.js');
var builder = new WasmModuleBuilder();
builder['addFunction']('mul', kSig_f_ff)['addBody']([
    kExprLocalGet,
    0,
    kExprLocalGet,
    1,
    kExprF32Mul
])['exportFunc']();
const instance = builder['instantiate']();
const wasm_f = instance['exports']['mul'];
function f() {
    var _0x45bfd5 = wasm_f(12, 3.5);
    return _0x45bfd5;
}
try {
    let val = f();
    print('float result: ' + val);
} catch (_0x1a5106) {
    print('*exception:* ' + _0x1a5106);
}