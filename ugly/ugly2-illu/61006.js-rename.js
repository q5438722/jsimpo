load("test/mjsunit/wasm/wasm-module-builder.js");(function () {
  const d = new WasmModuleBuilder();
  d.addType(makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));d.addType(makeSig([], []));d.addFunction(undefined, 0).addBodyWithEnd([kExprCallFunction, 1, kExprI32Const, 0, kExprEnd]);d.addFunction(undefined, 1).addLocals(kWasmF32, 1).addLocals(kWasmI32, 13).addBodyWithEnd([kExprEnd]);d.addExport("main", 0);const a = d.instantiate();
  print(a.exports.main(1, 2, 3));
})();