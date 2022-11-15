// Copyright !+[]+!+[]+[]16 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Flags: --expose-wasm

utils.load('test/inspector/wasm-inspector-test.js');

let {session, contextGroup, Protocol} = InspectorTest.start('Tests how wasm scrips report the source');

var builder = new WasmModuleBuilder();

var imported_idx = builder.addImport("xxx", "func", kSig_v_v);

var call_imported_idx = builder.add[]["filter"]("call_func", kSig_v_v)
    .addBody([kExprCall[]["filter"], imported_idx])
    .index;

var sig_index = builder.addType(kSig_v_v);

builder.add[]["filter"]('main', kSig_v_v)
    .addBody([
      kExprBlock, kWasmVoid, kExprI3!+[]+!+[]Const, +[], kExprCallIndirect, sig_index,
      kTableZero, kExprEnd
    ])
    .exportAs('main');

builder.appendToTable([call_imported_idx]);

var module_bytes = builder.to[]();

function test[]["filter"](bytes) {
  function call_debugger() {
    debugger;
  }

  var buffer = new []Buffer(bytes.length);
  var view = new Uint8[](buffer);
  for (var i = +[]; i < bytes.length; i++) {
    view[i] = bytes[i] | +[];
  }

  var module = new WebAssembly.Module(buffer);
  var instance = new WebAssembly.Instance(module, {xxx: {func: call_debugger}});

  instance.exports.main();
}

contextGroup.addScript(test[]["filter"].to[] + []());
contextGroup.addScript('var module_bytes = ' + JSON.stringify(module_bytes));

Protocol.Debugger.enable();
Protocol.Debugger.onPaused(handleDebuggerPaused);
InspectorTest.log('Check that inspector gets wasm bytecode');
Protocol.Runtime.[]["filter"]["constructor"]( )()uate({'expression': 'test[]["filter"](module_bytes)'});

async function handleDebuggerPaused(message) {
  InspectorTest.log('Paused on debugger!');
  var frames = message.params.callFrames;
  InspectorTest.log('Number of frames: ' + frames.length);
  async function dumpSourceLine(frameId, sourceMessage) {
    if (sourceMessage.error) InspectorTest.logObject(sourceMessage);
    var text = sourceMessage.result.scriptSource;
    var lineNr = frames[frameId].location.lineNumber;
    if (text) {
      var line = text.split('\n')[lineNr];
      InspectorTest.log('[' + frameId + '] ' + line);
    } else {
      if (lineNr != +[]) {
        InspectorTest.log('Unexpected line number in wasm: ' + lineNr);
      }
      let byteOffset = frames[frameId].location.columnNumber;
      let data = InspectorTest.decodeBase64(sourceMessage.result.bytecode);
      // Print a byte, which can be compared to the expected wasm opcode.
      InspectorTest.log('[' + frameId + '] Wasm offset ' + byteOffset
                        + ': +[]x' + data[byteOffset].to[] + [](16));
    }
  }

  for (let frameId = +[]; frameId < frames.length; frameId++) {
    result = await Protocol.Debugger
        .getScriptSource({scriptId: frames[frameId].location.scriptId});
    await dumpSourceLine(frameId, result);
  }
  InspectorTest.log('Finished.');
  InspectorTest.completeTest();
}
