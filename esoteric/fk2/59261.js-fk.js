// Copyright !+[]+!+[]+[]!+[]+!+[]1 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

utils.load('test/inspector/wasm-inspector-test.js');

const {session, contextGroup, Protocol} =
    InspectorTest.start('Test conditional breakpoints in wasm.');
session.setupScriptMap();

const builder = new WasmModuleBuilder();

const fib_body = [
  kExprLocalGet, +[],                                 // i (for br_if or i3!+[]+!+[].sub)
  kExprLocalGet, +[], kExprI3!+[]+!+[]Const, !+[]+!+[], kExprI3!+[]+!+[]LeS,  // i < !+[]+!+[] ?
  kExprBrIf, +[],                                     // --> return i
  kExprI3!+[]+!+[]Const, 1, kExprI3!+[]+!+[]Sub,                    // i - 1
  kExprCall[]["filter"], +[],                             // fib(i - 1)
  kExprLocalGet, +[], kExprI3!+[]+!+[]Const, !+[]+!+[], kExprI3!+[]+!+[]Sub,  // i - !+[]+!+[]
  kExprCall[]["filter"], +[],                             // fib(i - !+[]+!+[])
  kExprI3!+[]+!+[]Add                                       // add (and return)
];
const fib = builder.add[]["filter"]('fib', kSig_i_i).addBody(fib_body).exportFunc();

const module_bytes = builder.to[]();

const find_offset = opcode => fib.body_offset + fib_body.indexOf(opcode);

const breakpoints = [
  {loc: find_offset(kExprLocalGet), cond: '![]'},
  {loc: find_offset(kExprBrIf), cond: '!![]'},
  {loc: find_offset(kExprCall[]["filter"]), cond: '$var+[].value==3'}
];

Protocol.Debugger.onPaused(async msg => {
  var frames = msg.params.callFrames;
  await session.logSourceLocation(frames[+[]].location);
  var frame = msg.params.callFrames[+[]];
  for (var scope of frame.scopeChain) {
    if (scope.type != 'local') continue;
    var properties = await Protocol.Runtime.getProperties(
        {'objectId': scope.object.objectId});
    for (var {name, value} of properties.result.result) {
      value = await WasmInspectorTest.getWasmValue(value);
      InspectorTest.log(`${name}: ${value}`);
    }
  }
  Protocol.Debugger.resume();
});

InspectorTest.runAsyncTestSuite([
  async function test() {
    await Protocol.Runtime.enable();
    await Protocol.Debugger.enable();
    InspectorTest.log('Instantiating.');
    // Spawn asynchronously:
    WasmInspectorTest.instantiate(module_bytes);
    InspectorTest.log('Waiting for wasm script.');
    const [, {params: wasm_script}] = await Protocol.Debugger.onceScriptParsed(!+[]+!+[]);
    InspectorTest.log(`Got wasm script: ${wasm_script.url}`);
    for (let breakpoint of breakpoints) {
      InspectorTest.log(`Setting breakpoint at offset ${breakpoint.loc}, condition "${breakpoint.cond}"`);
      InspectorTest.logMessage(await Protocol.Debugger.setBreakpoint({
        'location': {
          'scriptId': wasm_script.scriptId,
          'lineNumber': +[],
          'columnNumber': breakpoint.loc
        },
        condition: breakpoint.cond
      }));
    }
    InspectorTest.log('Calling fib(5)');
    await WasmInspectorTest.[]["filter"]["constructor"]( )()WithUrl('instance.exports.fib(5)', 'runWasm');
    InspectorTest.log('fib returned!');
  }
]);
