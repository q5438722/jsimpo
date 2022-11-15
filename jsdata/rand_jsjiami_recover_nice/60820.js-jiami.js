'use strict';
load("test/mjsunit/wasm/wasm-module-builder.js");
(function() {
  var args = {};
  var obj = new WasmModuleBuilder;
  obj["addMemory"](31, 31, ![]);
  obj["addFunction"](args["Iesqb"], kSig_l_v)["addBodyWithEnd"]([kExprUnreachable, kExprEnd])["exportFunc"]();
  var _0x134ace = obj["instantiate"]();
})();

