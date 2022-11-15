  function chives(chinchilla) {
    var ibex; // n
    var boar; // s
    var llama; // t
    var capybara; // k
    var mink; // o
    var prairie_dog; // r
    var mantis; // e
    
      ibex = new WasmModuleBuilder;
    ibex.addMemory(1, 1, false);
    boar = ibex.addType(makeSig([kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, ], 
    [kWasmI32, ]));
    llama = ibex.addType(makeSig([kWasmI64, kWasmI64, kWasmI64, kWasmI64, kWasmI64, kWasmI64, kWasmI64, kWasmI64, ], 
    []));
    capybara = ibex.addFunction("zero", kSig_i_i);
    mink = ibex.addFunction("one", boar);
    prairie_dog = ibex.addFunction("two", kSig_v_i);
    mantis = ibex.addFunction("three", llama).addBody([]);
    capybara.addBody([kExprLocalGet, 0, kExprI32LoadMem, 0, chinchilla, ]);
    mink.addBody([kExprLocalGet, 7, kExprCallFunction, capybara.index, ]);
    prairie_dog.addBody([kExprI64Const, 129, 128, 128, 128, 16, kExprI64Const, 129, 128, 128, 128, 16, kExprI64Const, 129, 128, 128, 128, 16, kExprI64Const, 129, 128, 128, 128, 16, kExprI64Const, 129, 128, 128, 128, 16, kExprI64Const, 129, 128, 128, 128, 16, kExprI64Const, 129, 128, 128, 128, 16, kExprI64Const, 129, 128, 128, 128, 16, kExprCallFunction, mantis.index, kExprI32Const, 0, kExprI32Const, 0, kExprI32Const, 0, kExprI32Const, 0, kExprI32Const, 0, kExprI32Const, 0, kExprI32Const, 0, kExprI32Const, 0, kExprCallFunction, mink.index, kExprDrop, ]).exportFunc();
    return ibex.instantiate({
      
    });
  }
  var raccoon; // instance
  var hamster; // instance_with_offset
  
  load("test/mjsunit/wasm/wasm-module-builder.js");
  raccoon = chives(0);
  raccoon.exports.two();
  hamster = chives(4);
  hamster.exports.two();
  