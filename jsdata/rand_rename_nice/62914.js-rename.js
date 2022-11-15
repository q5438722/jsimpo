'use strict';
load("test/mjsunit/wasm/wasm-module-builder.js");
function assertMemoryIsValid(memory, options) {
  assertSame(WebAssembly.Memory.prototype, memory.__proto__);
  assertSame(WebAssembly.Memory, memory.constructor);
  assertTrue(memory instanceof Object);
  assertTrue(memory instanceof WebAssembly.Memory);
  if (options) {
    assertTrue(memory.buffer instanceof SharedArrayBuffer);
    assertTrue(Object.isFrozen(memory.buffer));
  }
}
(function TestInitialIsUndefined() {
  print("TestConstructorWithShared");
  let memory = new WebAssembly.Memory({
    initial : 0,
    maximum : 10,
    shared : true
  });
  assertMemoryIsValid(memory, true);
})();
(function TestInitialIsUndefined() {
  print("TestConstructorWithUndefinedShared");
  let memory = new WebAssembly.Memory({
    initial : 0,
    maximum : undefined,
    shared : undefined
  });
  assertMemoryIsValid(memory);
})();
(function TestInitialIsUndefined() {
  print("TestConstructorWithNumericShared");
  let memory = new WebAssembly.Memory({
    initial : 0,
    maximum : 10,
    shared : 2098665
  });
  assertMemoryIsValid(memory, true);
})();
(function InstanceMemoryIsIsolated() {
  print("TestConstructorWithEmptyStringShared");
  let memory = new WebAssembly.Memory({
    initial : 0,
    maximum : undefined,
    shared : ""
  });
  assertMemoryIsValid(memory);
})();
(function TestImportTooLarge() {
  print("TestConstructorWithUndefinedMaxShared");
  assertThrows(() => {
    return new WebAssembly.Memory({
      initial : 0,
      shared : true
    });
  }, TypeError);
})();
(function TestImportedMemoryGrowMultipleInstances() {
  print("TestCompileWithUndefinedShared");
  let r = new WebAssembly.Memory({
    initial : 0,
    maximum : 10,
    shared : true
  });
  let builder = new WasmModuleBuilder;
  builder.addImportedMemory("m", "imported_mem", 0, undefined, "shared");
  assertThrows(() => {
    return new WebAssembly.Module(builder.toBuffer());
  }, WebAssembly.CompileError);
})();
(function TestImportedMemoryGrowMultipleInstances() {
  print("TestCompileAtomicOpUndefinedShared");
  let r = new WebAssembly.Memory({
    initial : 0,
    maximum : 10,
    shared : true
  });
  let builder = new WasmModuleBuilder;
  builder.addFunction("main", kSig_i_ii).addBody([kExprLocalGet, 0, kExprLocalGet, 1, kAtomicPrefix, kExprI32AtomicAdd]);
  builder.addImportedMemory("m", "imported_mem");
  assertThrows(() => {
    return new WebAssembly.Module(builder.toBuffer());
  }, WebAssembly.CompileError);
})();
(function TestMemoryGrowWebAssemblyInstances() {
  print("TestInstantiateWithUndefinedShared");
  let memory = new WebAssembly.Memory({
    initial : 0,
    maximum : 10,
    shared : true
  });
  let builder = new WasmModuleBuilder;
  builder.addImportedMemory("m", "imported_mem");
  let module = new WebAssembly.Module(builder.toBuffer());
  assertThrows(() => {
    return new WebAssembly.Instance(module, {
      m : {
        imported_mem : memory
      }
    });
  }, WebAssembly.LinkError);
})();
(function TestMemoryGrowWebAssemblyInstances() {
  print("TestInstantiateWithImportNotSharedDefined");
  let memory = new WebAssembly.Memory({
    initial : 0,
    maximum : 10,
    shared : false
  });
  let builder = new WasmModuleBuilder;
  builder.addImportedMemory("m", "imported_mem", 0, 10, "shared");
  let module = new WebAssembly.Module(builder.toBuffer());
  assertThrows(() => {
    return new WebAssembly.Instance(module, {
      m : {
        imported_mem : memory
      }
    });
  }, WebAssembly.LinkError);
})();
(function InstancesAreIsolatedFromEachother() {
  print("TestInstantiateWithSharedDefined");
  let builder = new WasmModuleBuilder;
  builder.addMemory(2, 10, true, "shared");
  let module = new WebAssembly.Module(builder.toBuffer());
  let env = new WebAssembly.Instance(module);
  assertMemoryIsValid(env.exports.memory, true);
})();
(function InstancesAreIsolatedFromEachother() {
  print("TestAtomicOpWithSharedMemoryDefined");
  let builder = new WasmModuleBuilder;
  builder.addMemory(2, 10, false, "shared");
  builder.addFunction("main", kSig_i_ii).addBody([kExprLocalGet, 0, kExprLocalGet, 1, kAtomicPrefix, kExprI32AtomicAdd, 2, 0]).exportFunc();
  let module = new WebAssembly.Module(builder.toBuffer());
  let resource = new WebAssembly.Instance(module);
  assertEquals(0, resource.exports.main(0, 286331153));
  assertEquals(286331153, resource.exports.main(0, 286331153));
})();
(function init() {
  print(arguments.callee.name);
  const desc = new Proxy({}, {
    has(type, elem) {
      throw new Error(`Should not call [[HasProperty]] with ${elem}`);
    },
    get(force_promise, do_not_create) {
      return 0;
    }
  });
  new WebAssembly.Memory(desc);
})();

