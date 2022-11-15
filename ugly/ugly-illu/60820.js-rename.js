load("test/mjsunit/wasm/wasm-module-builder.js");(function () {
  const a = new WasmModuleBuilder();
  a.addMemory(31, 31, false);a.addFunction("test", kSig_l_v).addBodyWithEnd([kExprUnreachable, kExprEnd]).exportFunc();const d = a.instantiate();
})();
