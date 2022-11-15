  load("test/mjsunit/wasm/wasm-module-builder.js");
  (function () {
    var raccoon; // a
    var hamster; // d
    
      raccoon = new WasmModuleBuilder;
    raccoon.addMemory(31, 31, false);
    raccoon.addFunction("test", kSig_l_v).addBodyWithEnd([kExprUnreachable, kExprEnd, ]).exportFunc();
    hamster = raccoon.instantiate();
  })();
  