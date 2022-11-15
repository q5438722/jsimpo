utils.load("test/inspector/wasm-inspector-test.js");var { session, contextGroup, Protocol } = InspectorTest.start("Tests how wasm scrips report the source");
const builder = new WasmModuleBuilder();
const imported_idx = builder.addImport("xxx", "func", kSig_v_v);
const call_imported_idx = builder.addFunction("call_func", kSig_v_v).addBody([kExprCallFunction, builder.addImport("xxx", "func", kSig_v_v)]).index;
const sig_index = builder.addType(kSig_v_v);
builder.addFunction("main", kSig_v_v).addBody([kExprBlock, kWasmVoid, kExprI32Const, 0, kExprCallIndirect, builder.addType(kSig_v_v), kTableZero, kExprEnd]).exportAs("main");builder.appendToTable([builder.addFunction("call_func", kSig_v_v).addBody([kExprCallFunction, builder.addImport("xxx", "func", kSig_v_v)]).index]);const module_bytes = builder.toArray();
function testFunction(e) {
  function t() {
    debugger;
  }const r = new ArrayBuffer(e.length);
  const o = new Uint8Array(r);
  // Unevaluable loop test expression
  for (var s = 0; s < e.length; s++) {
    o[s] = e[s] | 0;
  }const n = new WebAssembly.Module(r);
  const i = new WebAssembly.Instance(n, { xxx: { func: t } });
  i.exports.main();
}contextGroup.addScript(testFunction.toString());contextGroup.addScript("var module_bytes = " + JSON.stringify(module_bytes));Protocol.Debugger.enable();Protocol.Debugger.onPaused(handleDebuggerPaused);InspectorTest.log("Check that inspector gets wasm bytecode");Protocol.Runtime.evaluate({ expression: "testFunction(module_bytes)" });async function handleDebuggerPaused(e) {
  InspectorTest.log("Paused on debugger!");const n = e.params.callFrames;
  InspectorTest.log("Number of frames: " + n.length);async function t(r, o) {
    if (o.error) InspectorTest.logObject(o);const e = o.result.scriptSource;
    const s = n[r].location.lineNumber;
    if (e) {
      const t = e.split("\n")[s];
      InspectorTest.log("[" + r + "] " + t);
    } else {
      if (s != 0) {
        InspectorTest.log("Unexpected line number in wasm: " + s);
      }const e = n[r].location.columnNumber;
      const t = InspectorTest.decodeBase64(o.result.bytecode);
      InspectorTest.log("[" + r + "] Wasm offset " + e + ": 0x" + t[e].toString(16));
    }
  }for (let e = 0; e < n.length; e++) {
    result = await Protocol.Debugger.getScriptSource({ scriptId: n[e].location.scriptId });await t(e, result);
  }InspectorTest.log("Finished.");InspectorTest.completeTest();
}
