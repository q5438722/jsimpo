load("test/mjsunit/wasm/wasm-module-builder.js");const initialMemoryPages = 1;
const maximumMemoryPages = 5;
const other_fn_idx = 0;
function generateBuilder(e, t) {
  const r = new WasmModuleBuilder();
  if (t) {
    const e = r.addImport("import_module", "other_module_fn", t);
    assertEquals(e, other_fn_idx);
  }if (e) {
    r.addMemory(initialMemoryPages, maximumMemoryPages, true);r.addFunction("load", kSig_i_i).addBody([kExprLocalGet, 0, kExprI32LoadMem, 0, 0]).exportFunc();r.addFunction("store", kSig_i_ii).addBody([kExprLocalGet, 0, kExprLocalGet, 1, kExprI32StoreMem, 0, 0, kExprLocalGet, 1]).exportFunc();
  }return r;
}function assertMemoryIndependence(e, t, r, s) {
  assertEquals(0, e(0));assertEquals(0, r(0));assertEquals(0, e(4));assertEquals(0, r(4));t(0, 101);assertEquals(101, e(0));assertEquals(0, r(0));assertEquals(0, e(4));assertEquals(0, r(4));t(4, 102);assertEquals(101, e(0));assertEquals(0, r(0));assertEquals(102, e(4));assertEquals(0, r(4));s(0, 103);assertEquals(101, e(0));assertEquals(103, r(0));assertEquals(102, e(4));assertEquals(0, r(4));s(4, 107);assertEquals(101, e(0));assertEquals(103, r(0));assertEquals(102, e(4));assertEquals(107, r(4));t(0, 0);t(4, 0);s(0, 0);s(4, 0);
}(function e() {
  print("SimpleMemoryIndependenceTest");const t = 1;
  var r = new WasmModuleBuilder();
  r.addMemory(t, t, true);r.addFunction("store", kSig_v_ii).addBody([kExprLocalGet, 0, kExprLocalGet, 1, kExprI32StoreMem, 0, 0]).exportFunc();r.addFunction("load", kSig_i_i).addBody([kExprLocalGet, 0, kExprI32LoadMem, 0, 0]).exportFunc();const s = r.instantiate();
  r = new WasmModuleBuilder();r.addImport("mod", "store", kSig_v_ii);r.addMemory(t, t, true);r.addFunction("store", kSig_v_ii).addBody([kExprLocalGet, 0, kExprLocalGet, 1, kExprCallFunction, 0]).exportFunc();r.addFunction("load", kSig_i_i).addBody([kExprLocalGet, 0, kExprI32LoadMem, 0, 0]).exportFunc();const a = r.instantiate({ mod: { store: s.exports.store } });
  assertEquals(0, s.exports.load(0));assertEquals(0, a.exports.load(0));assertEquals(0, s.exports.load(4));assertEquals(0, a.exports.load(4));s.exports.store(0, 101);assertEquals(101, s.exports.load(0));assertEquals(0, a.exports.load(0));assertEquals(0, s.exports.load(4));assertEquals(0, a.exports.load(4));s.exports.store(4, 102);assertEquals(101, s.exports.load(0));assertEquals(0, a.exports.load(0));assertEquals(102, s.exports.load(4));assertEquals(0, a.exports.load(4));a.exports.store(4, 107);assertEquals(101, s.exports.load(0));assertEquals(0, a.exports.load(0));assertEquals(107, s.exports.load(4));assertEquals(0, a.exports.load(4));
})();(function e() {
  print("TestExternalCallBetweenTwoWasmModulesWithoutAndWithMemory");const t = generateBuilder(add_memory = false, import_sig = kSig_i_i);
  t.addFunction("plus_one", kSig_i_i).addBody([kExprLocalGet, 0, kExprCallFunction, 0, kExprI32Const, 1, kExprI32Add, kExprReturn]).exportFunc();const r = generateBuilder(add_memory = true, import_sig = undefined);
  const s = kPageSize - 4;
  const a = 2222;
  const o = r.instantiate();
  const l = t.instantiate({ import_module: { other_module_fn: o.exports.load } });
  o.exports.store(s, a);assertEquals(a, o.exports.load(s));assertEquals(2223, l.exports.plus_one(s));
})();(function e() {
  print("TestExternalCallBetweenTwoWasmModulesWithMemory");const t = generateBuilder(add_memory = true, import_sig = kSig_i_i);
  t.addFunction("plus_one", kSig_i_i).addBody([kExprLocalGet, 0, kExprCallFunction, 0, kExprI32Const, 1, kExprI32Add, kExprReturn]).exportFunc();const r = generateBuilder(add_memory = true, import_sig = undefined);
  const s = kPageSize - 4;
  const a = 1111;
  const o = 2222;
  const l = r.instantiate();
  const d = t.instantiate({ import_module: { other_module_fn: l.exports.load } });
  d.exports.store(s, a);l.exports.store(s, o);assertEquals(a, d.exports.load(s));assertEquals(o, l.exports.load(s));assertEquals(2223, d.exports.plus_one(s));
})();(function e() {
  print("TestCorrectMemoryAccessedAfterReturningFromExternalCall");const t = generateBuilder(add_memory = true, import_sig = kSig_i_ii);
  t.addFunction("sandwich", kSig_i_iii).addBody([kExprLocalGet, 0, kExprLocalGet, 1, kExprI32StoreMem, 0, 0, kExprLocalGet, 0, kExprLocalGet, 2, kExprCallFunction, 0, kExprDrop, kExprLocalGet, 0, kExprI32LoadMem, 0, 0, kExprReturn]).exportFunc();const r = generateBuilder(add_memory = true, import_sig = undefined);
  const s = kPageSize - 4;
  const a = 1111;
  const o = 2222;
  const l = r.instantiate();
  const d = t.instantiate({ import_module: { other_module_fn: l.exports.store } });
  assertEquals(a, d.exports.sandwich(s, a, o));assertEquals(a, d.exports.load(s));assertEquals(o, l.exports.load(s));
})();(function e() {
  print("CallThroughTableIndependenceTest");const t = 2;
  const r = 1;
  var s = new WasmModuleBuilder();
  s.addMemory(r, r, true);s.addFunction("store", kSig_v_ii).addBody([kExprLocalGet, 0, kExprLocalGet, 1, kExprI32StoreMem, 0, 0]).exportFunc();s.addFunction("load", kSig_i_i).addBody([kExprLocalGet, 0, kExprI32LoadMem, 0, 0]).exportFunc();{
    const e = s.toModule();
    const a = new WebAssembly.Instance(e);
    const o = new WebAssembly.Instance(e);
    assertMemoryIndependence(a.exports.load, a.exports.store, o.exports.load, o.exports.store);
  }const l = new WebAssembly.Table({ element: "anyfunc", initial: t, maximum: t });
  l.set(0, a.exports.store);l.set(1, o.exports.store);assertMemoryIndependence(a.exports.load, l.get(0), o.exports.load, l.get(1));l.set(1, a.exports.store);l.set(0, o.exports.store);assertMemoryIndependence(a.exports.load, l.get(1), o.exports.load, l.get(0));s = new WasmModuleBuilder();s.addImportedTable("m", "table", t, t);const d = s.addType(kSig_v_ii);
  s.addFunction("store", kSig_v_iii).addBody([kExprLocalGet, 1, kExprLocalGet, 2, kExprLocalGet, 0, kExprCallIndirect, s.addType(kSig_v_ii), kTableZero]).exportFunc();const n = s.instantiate({ m: { table: l } });
  var i = 1;
  var p = 0;

  const u = (e, t) => n.exports.store(i, e, t);

  const x = (e, t) => n.exports.store(p, e, t);

  assertMemoryIndependence(a.exports.load, u, o.exports.load, x);l.set(0, a.exports.store);l.set(1, o.exports.store);i = 0;p = 1;assertMemoryIndependence(a.exports.load, u, o.exports.load, x);
})();
