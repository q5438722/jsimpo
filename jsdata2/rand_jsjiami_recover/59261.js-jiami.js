utils['load']('test/inspector/wasm-inspector-test.js');
const {session, contextGroup, Protocol} = InspectorTest['start']('Test conditional breakpoints in wasm.');
session['setupScriptMap']();
const builder = new WasmModuleBuilder();
const fib_body = [
    kExprLocalGet,
    0,
    kExprLocalGet,
    0,
    kExprI32Const,
    2,
    kExprI32LeS,
    kExprBrIf,
    0,
    kExprI32Const,
    1,
    kExprI32Sub,
    kExprCallFunction,
    0,
    kExprLocalGet,
    0,
    kExprI32Const,
    2,
    kExprI32Sub,
    kExprCallFunction,
    0,
    kExprI32Add
];
const fib = builder['addFunction']('fib', kSig_i_i)['addBody'](fib_body)['exportFunc']();
const module_bytes = builder['toArray']();
const find_offset = _0x4e13e3 => fib['body_offset'] + fib_body['indexOf'](_0x4e13e3);
const breakpoints = [
    {
        'loc': find_offset(kExprLocalGet),
        'cond': 'false'
    },
    {
        'loc': find_offset(kExprBrIf),
        'cond': 'true'
    },
    {
        'loc': find_offset(kExprCallFunction),
        'cond': '$var0.value==3'
    }
];
Protocol['Debugger']['onPaused'](async _0x4efa48 => {
    var _0x1b371d = _0x4efa48['params']['callFrames'];
    await session['logSourceLocation'](_0x1b371d[0]['location']);
    var _0x1356d4 = _0x4efa48['params']['callFrames'][0];
    for (var _0x1df778 of _0x1356d4['scopeChain']) {
        if (_0x1df778['type'] != 'local')
            continue;
        var _0xa4521c = await Protocol['Runtime']['getProperties']({ 'objectId': _0x1df778['object']['objectId'] });
        for (var {name, value} of _0xa4521c['result']['result']) {
            value = await WasmInspectorTest['getWasmValue'](value);
            InspectorTest['log'](name + ': ' + value);
        }
    }
    Protocol['Debugger']['resume']();
});
InspectorTest['runAsyncTestSuite']([async function test() {
        await Protocol['Runtime']['enable']();
        await Protocol['Debugger']['enable']();
        InspectorTest['log']('Instantiating.');
        WasmInspectorTest['instantiate'](module_bytes);
        InspectorTest['log']('Waiting for wasm script.');
        const [, {params: wasm_script}] = await Protocol['Debugger']['onceScriptParsed'](2);
        InspectorTest['log']('Got wasm script: ' + wasm_script['url']);
        for (let _0x1e55cc of breakpoints) {
            InspectorTest['log']('Setting breakpoint at offset ' + _0x1e55cc['loc'] + ', condition "' + _0x1e55cc['cond'] + '"');
            InspectorTest['logMessage'](await Protocol['Debugger']['setBreakpoint']({
                'location': {
                    'scriptId': wasm_script['scriptId'],
                    'lineNumber': 0,
                    'columnNumber': _0x1e55cc['loc']
                },
                'condition': _0x1e55cc['cond']
            }));
        }
        InspectorTest['log']('Calling fib(5)');
        await WasmInspectorTest['evalWithUrl']('instance.exports.fib(5)', 'runWasm');
        InspectorTest['log']('fib returned!');
    }]);