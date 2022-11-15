load("test/mjsunit/wasm/wasm-module-builder.js");(function a() {
  const e = new WasmModuleBuilder();
  e.addGlobal(kWasmI64, false).exportAs("g");e.addGlobal(kWasmI64, false).exportAs("g");assertThrows(() => e.instantiate(), WebAssembly.CompileError, /Duplicate export name 'g' for global 0 and global 1/);
})();(function a() {
  const e = new WasmModuleBuilder();
  e.addGlobal(kWasmI64, false).exportAs("foo");e.addFunction("f", kSig_v_v).addBody([]).exportAs("foo");assertThrows(() => e.instantiate(), WebAssembly.CompileError, /Duplicate export name 'foo' for global 0 and function 0/);
})();(function a() {
  var e = "abc";
  while (e.length < 8192) {
    e = e.concat(e);
  }const o = new WasmModuleBuilder();
  const l = o.addGlobal(kWasmI64, false);
  l.exportAs(e);l.exportAs(e);const s = "Duplicate export name '(abc){10,20}ab?c?...' for global 0 and global 0";
  assertThrows(() => o.instantiate(), WebAssembly.CompileError, new RegExp(s));
})();
