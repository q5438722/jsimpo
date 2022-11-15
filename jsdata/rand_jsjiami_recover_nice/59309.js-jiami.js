'use strict';
load("test/mjsunit/wasm/wasm-module-builder.js");
var builder = new WasmModuleBuilder;
builder["addFunction"]("mul", kSig_f_ff)["addBody"]([kExprLocalGet, 0, kExprLocalGet, 1, kExprF32Mul])["exportFunc"]();
const instance = builder["instantiate"]();
const wasm_f = instance["exports"]["mul"];
function f() {
  var resultToDisplay = wasm_f(12, 3.5);
  return resultToDisplay;
}
try {
  let bytelen = f();
  print("float result: " + bytelen);
} catch (bytelen) {
  print("*exception:* " + bytelen);
}
;
