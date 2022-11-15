'use strict';
utils.load("test/inspector/wasm-inspector-test.js");
let {
  session : session,
  contextGroup : contextGroup,
  Protocol : Protocol
} = InspectorTest.start("Tests how wasm scrips report the source");
var builder = new WasmModuleBuilder;
var imported_idx = builder.addImport("xxx", "func", kSig_v_v);
var call_imported_idx = builder.addFunction("call_func", kSig_v_v).addBody([kExprCallFunction, imported_idx]).index;
var sig_index = builder.addType(kSig_v_v);
builder.addFunction("main", kSig_v_v).addBody([kExprBlock, kWasmVoid, kExprI32Const, 0, kExprCallIndirect, sig_index, kTableZero, kExprEnd]).exportAs("main");
builder.appendToTable([call_imported_idx]);
var module_bytes = builder.toArray();
function testFunction(bytes) {
  function call_debugger() {
    debugger;
  }
  var buffer = new ArrayBuffer(bytes.length);
  var config_data = new Uint8Array(buffer);
  var i = 0;
  for (; i < bytes.length; i++) {
    config_data[i] = bytes[i] | 0;
  }
  var module = new WebAssembly.Module(buffer);
  var context = new WebAssembly.Instance(module, {
    xxx : {
      func : call_debugger
    }
  });
  context.exports.main();
}
contextGroup.addScript(testFunction.toString());
contextGroup.addScript("var module_bytes = " + JSON.stringify(module_bytes));
Protocol.Debugger.enable();
Protocol.Debugger.onPaused(handleDebuggerPaused);
InspectorTest.log("Check that inspector gets wasm bytecode");
Protocol.Runtime.evaluate({
  expression : "testFunction(module_bytes)"
});
async function handleDebuggerPaused(messageObject) {
  async function next(i, msg) {
    if (msg.error) {
      InspectorTest.logObject(msg);
    }
    var text = msg.result.scriptSource;
    var name = callFrames[i].location.lineNumber;
    if (text) {
      var line = text.split("\n")[name];
      InspectorTest.log("[" + i + "] " + line);
    } else {
      if (name != 0) {
        InspectorTest.log("Unexpected line number in wasm: " + name);
      }
      let j = callFrames[i].location.columnNumber;
      let givenAnswers = InspectorTest.decodeBase64(msg.result.bytecode);
      InspectorTest.log("[" + i + "] Wasm offset " + j + ": 0x" + givenAnswers[j].toString(16));
    }
  }
  InspectorTest.log("Paused on debugger!");
  var callFrames = messageObject.params.callFrames;
  InspectorTest.log("Number of frames: " + callFrames.length);
  for (let i = 0; i < callFrames.length; i++) {
    result = await Protocol.Debugger.getScriptSource({
      scriptId : callFrames[i].location.scriptId
    });
    await next(i, result);
  }
  InspectorTest.log("Finished.");
  InspectorTest.completeTest();
}
;
