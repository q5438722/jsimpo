load("test/mjsunit/wasm/wasm-module-builder.js");function assertMemoryIsValid(e, r) {
  assertSame(WebAssembly.Memory.prototype, e.__proto__);assertSame(WebAssembly.Memory, e.constructor);assertTrue(e instanceof Object);assertTrue(e instanceof WebAssembly.Memory);if (r) {
    assertTrue(e.buffer instanceof SharedArrayBuffer);assertTrue(Object.isFrozen(e.buffer));
  }
}(function e() {
  print("TestConstructorWithShared");const r = new WebAssembly.Memory({ initial: 0, maximum: 10, shared: true });
  assertMemoryIsValid(r, true);
})();(function e() {
  print("TestConstructorWithUndefinedShared");const r = new WebAssembly.Memory({ initial: 0, maximum: undefined, shared: undefined });
  assertMemoryIsValid(r);
})();(function e() {
  print("TestConstructorWithNumericShared");const r = new WebAssembly.Memory({ initial: 0, maximum: 10, shared: 2098665 });
  assertMemoryIsValid(r, true);
})();(function e() {
  print("TestConstructorWithEmptyStringShared");const r = new WebAssembly.Memory({ initial: 0, maximum: undefined, shared: "" });
  assertMemoryIsValid(r);
})();(function e() {
  print("TestConstructorWithUndefinedMaxShared");assertThrows(() => new WebAssembly.Memory({ initial: 0, shared: true }), TypeError);
})();(function e() {
  print("TestCompileWithUndefinedShared");const r = new WebAssembly.Memory({ initial: 0, maximum: 10, shared: true });
  const t = new WasmModuleBuilder();
  t.addImportedMemory("m", "imported_mem", 0, undefined, "shared");assertThrows(() => new WebAssembly.Module(t.toBuffer()), WebAssembly.CompileError);
})();(function e() {
  print("TestCompileAtomicOpUndefinedShared");const r = new WebAssembly.Memory({ initial: 0, maximum: 10, shared: true });
  const t = new WasmModuleBuilder();
  t.addFunction("main", kSig_i_ii).addBody([kExprLocalGet, 0, kExprLocalGet, 1, kAtomicPrefix, kExprI32AtomicAdd]);t.addImportedMemory("m", "imported_mem");assertThrows(() => new WebAssembly.Module(t.toBuffer()), WebAssembly.CompileError);
})();(function e() {
  print("TestInstantiateWithUndefinedShared");const r = new WebAssembly.Memory({ initial: 0, maximum: 10, shared: true });
  const t = new WasmModuleBuilder();
  t.addImportedMemory("m", "imported_mem");const s = new WebAssembly.Module(t.toBuffer());
  assertThrows(() => new WebAssembly.Instance(s, { m: { imported_mem: r } }), WebAssembly.LinkError);
})();(function e() {
  print("TestInstantiateWithImportNotSharedDefined");const r = new WebAssembly.Memory({ initial: 0, maximum: 10, shared: false });
  const t = new WasmModuleBuilder();
  t.addImportedMemory("m", "imported_mem", 0, 10, "shared");const s = new WebAssembly.Module(t.toBuffer());
  assertThrows(() => new WebAssembly.Instance(s, { m: { imported_mem: r } }), WebAssembly.LinkError);
})();(function e() {
  print("TestInstantiateWithSharedDefined");const r = new WasmModuleBuilder();
  r.addMemory(2, 10, true, "shared");const t = new WebAssembly.Module(r.toBuffer());
  const s = new WebAssembly.Instance(t);
  assertMemoryIsValid(s.exports.memory, true);
})();(function e() {
  print("TestAtomicOpWithSharedMemoryDefined");const r = new WasmModuleBuilder();
  r.addMemory(2, 10, false, "shared");r.addFunction("main", kSig_i_ii).addBody([kExprLocalGet, 0, kExprLocalGet, 1, kAtomicPrefix, kExprI32AtomicAdd, 2, 0]).exportFunc();const t = new WebAssembly.Module(r.toBuffer());
  const s = new WebAssembly.Instance(t);
  assertEquals(0, s.exports.main(0, 286331153));assertEquals(286331153, s.exports.main(0, 286331153));
})();(function e() {
  print(arguments.callee.name);const r = new Proxy({}, { has(e, r) {
      throw new Error(`Should not call [[HasProperty]] with ${r}`);
    }, get(e, r) {
      return 0;
    } });
  new WebAssembly.Memory(r);
})();
