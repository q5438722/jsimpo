load("test/mjsunit/wasm/wasm-module-builder.js");(function t() {
  print(arguments.callee.name);const d = 11;
  const i = 22;
  const e = 46;
  const n = 57;
  const s = 13;
  const c = 2;
  const a = 3;
  const o = 4;
  const l = 1;

  const r = function () {
    const t = new WasmModuleBuilder();
    const e = t.addTable(kWasmAnyFunc, 15, 15).exportAs("table").index;
    const n = t.addFunction("f1", kSig_i_v).addBody([kExprI32Const, 11]).index;
    const s = t.addFunction("f2", kSig_i_v).addBody([kExprI32Const, 22]).index;
    t.addActiveElementSegment(e, WasmInitExpr.I32Const(c), [t.addFunction("f1", kSig_i_v).addBody([kExprI32Const, 11]).index, t.addFunction("f2", kSig_i_v).addBody([kExprI32Const, 22]).index]);const a = t.instantiate();
    const o = a.exports.table;
    assertEquals(d, o.get(c)());assertEquals(i, o.get(3)());return a;
  }();

  const u = new WasmModuleBuilder();
  const x = u.addImportedTable("exports", "table", 15, 15);
  u.addExportOfKind("table2", kExternalTable, x);const E = u.addTable(kWasmAnyFunc, 10).exportAs("table3").index;
  const m = u.addTable(kWasmAnyFunc, 12).exportAs("table4").index;
  const p = u.addFunction("f3", kSig_i_v).addBody([kExprI32Const, 46]).index;
  const g = u.addFunction("f4", kSig_i_v).addBody([kExprI32Const, 57]).index;
  const I = u.addFunction("f5", kSig_i_v).addBody([kExprI32Const, 13]).index;
  u.addActiveElementSegment(x, WasmInitExpr.I32Const(a), [u.addFunction("f3", kSig_i_v).addBody([kExprI32Const, 46]).index, u.addFunction("f4", kSig_i_v).addBody([kExprI32Const, 57]).index]);u.addActiveElementSegment(E, WasmInitExpr.I32Const(o), [u.addFunction("f5", kSig_i_v).addBody([kExprI32Const, 13]).index, u.addFunction("f4", kSig_i_v).addBody([kExprI32Const, 57]).index]);u.addActiveElementSegment(m, WasmInitExpr.I32Const(l), [u.addFunction("f3", kSig_i_v).addBody([kExprI32Const, 46]).index, u.addFunction("f5", kSig_i_v).addBody([kExprI32Const, 13]).index]);u.addActiveElementSegment(m, WasmInitExpr.I32Const(2), [u.addFunction("f4", kSig_i_v).addBody([kExprI32Const, 57]).index, u.addFunction("f3", kSig_i_v).addBody([kExprI32Const, 46]).index]);const b = u.instantiate(r);
  const k = b.exports.table2;
  const A = b.exports.table3;
  const q = b.exports.table4;
  assertEquals(d, k.get(c)());assertEquals(e, k.get(a)());assertEquals(n, k.get(4)());assertEquals(s, A.get(o)());assertEquals(n, A.get(5)());assertEquals(e, q.get(l)());assertEquals(n, q.get(2)());assertEquals(e, q.get(3)());
})();
