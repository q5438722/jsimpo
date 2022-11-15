load("test/mjsunit/wasm/wasm-module-builder.js");function InstanceMaker(a) {
  const n = new WasmModuleBuilder();
  n.addMemory(1, 1, false);const s = n.addType(makeSig([kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));
  const t = n.addType(makeSig([kWasmI64, kWasmI64, kWasmI64, kWasmI64, kWasmI64, kWasmI64, kWasmI64, kWasmI64], []));
  const k = n.addFunction("zero", kSig_i_i);
  const o = n.addFunction("one", s);
  const r = n.addFunction("two", kSig_v_i);
  const e = n.addFunction("three", t).addBody([]);
  k.addBody([kExprLocalGet, 0, kExprI32LoadMem, 0, a]);o.addBody([kExprLocalGet, 7, kExprCallFunction, k.index]);r.addBody([kExprI64Const, 129, 128, 128, 128, 16, kExprI64Const, 129, 128, 128, 128, 16, kExprI64Const, 129, 128, 128, 128, 16, kExprI64Const, 129, 128, 128, 128, 16, kExprI64Const, 129, 128, 128, 128, 16, kExprI64Const, 129, 128, 128, 128, 16, kExprI64Const, 129, 128, 128, 128, 16, kExprI64Const, 129, 128, 128, 128, 16, kExprCallFunction, e.index, kExprI32Const, 0, kExprI32Const, 0, kExprI32Const, 0, kExprI32Const, 0, kExprI32Const, 0, kExprI32Const, 0, kExprI32Const, 0, kExprI32Const, 0, kExprCallFunction, o.index, kExprDrop]).exportFunc();return n.instantiate({});
}const instance = InstanceMaker(0);
instance.exports.two();const instance_with_offset = InstanceMaker(4);
instance_with_offset.exports.two();
