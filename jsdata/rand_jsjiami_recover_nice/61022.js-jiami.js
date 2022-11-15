'use strict';
load("test/mjsunit/wasm/wasm-module-builder.js");
(function InstancesAreIsolatedFromEachother() {
  let obj = new WasmModuleBuilder;
  obj["addFunction"](_0x1135ac["ZyuWT"], kSig_i_v)["addBody"]([kExprBlock, kWasmVoid, kExprI64Const, 0, kExprI64Const, 128, 128, 128, 128, 16, kExprI64Add, kExprI64Eqz, kExprBrIf, 0, kExprI32Const, 0, kExprReturn, kExprEnd, kExprI32Const, 0])["exportFunc"]();
  let rec = obj["instantiate"]();
  assertEquals(0, rec["exports"]["main"]());
})();
(function InstancesAreIsolatedFromEachother() {
  var args = {};
  let obj = new WasmModuleBuilder;
  obj["addFunction"](args["dYHdR"], kSig_i_v)["addBody"]([kExprBlock, kWasmVoid, kExprI64Const, 0, kExprI64Const, 128, 128, 128, 128, 16, kExprI64Sub, kExprI64Eqz, kExprBrIf, 0, kExprI32Const, 0, kExprReturn, kExprEnd, kExprI32Const, 0])["exportFunc"]();
  let rec = obj["instantiate"]();
  assertEquals(0, rec["exports"]["main"]());
})();

