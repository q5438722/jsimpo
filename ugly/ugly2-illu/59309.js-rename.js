load("test/mjsunit/wasm/wasm-module-builder.js");const builder = new WasmModuleBuilder();
builder.addFunction("mul", kSig_f_ff).addBody([kExprLocalGet, 0, kExprLocalGet, 1, kExprF32Mul]).exportFunc();const instance = builder.instantiate();
const wasm_f = instance.exports.mul;
function f() {
  const t = wasm_f(12, 3.5);
  return t;
}try {
  const t = f();
  print("float result: " + t);
} catch (t) {
  print("*exception:* " + t);
}
