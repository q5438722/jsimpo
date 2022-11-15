utils['load']('test/inspector/wasm-inspector-test.js');
let {session, contextGroup, Protocol} = InspectorTest['start']('Tests\x20how\x20wasm\x20scrips\x20report\x20the\x20source');
var builder = new WasmModuleBuilder(), imported_idx = builder['addImport']('xxx', 'func', kSig_v_v), call_imported_idx = builder['addFunction']('call_func', kSig_v_v)['addBody']([
        kExprCallFunction,
        imported_idx
    ])['index'], sig_index = builder['addType'](kSig_v_v);
builder['addFunction']('main', kSig_v_v)['addBody']([
    kExprBlock,
    kWasmVoid,
    kExprI32Const,
    0x1e48 + -0x1c98 + -0x2 * 0xd8,
    kExprCallIndirect,
    sig_index,
    kTableZero,
    kExprEnd
])['exportAs']('main'), builder['appendToTable']([call_imported_idx]);
var module_bytes = builder['toArray']();
function testFunction(_0x14fc0a) {
    function _0xcc39f3() {
        debugger;
    }
    var _0x54e3c9 = new ArrayBuffer(_0x14fc0a['length']), _0x2f5869 = new Uint8Array(_0x54e3c9);
    for (var _0x5b5c23 = -0x1a3a + 0x1 * 0x8a4 + 0x2 * 0x8cb; _0x5b5c23 < _0x14fc0a['length']; _0x5b5c23++) {
        _0x2f5869[_0x5b5c23] = _0x14fc0a[_0x5b5c23] | 0x1c68 + 0x1193 * -0x1 + -0x3b * 0x2f;
    }
    var _0x2ca8d7 = new WebAssembly['Module'](_0x54e3c9), _0x36faa2 = new WebAssembly['Instance'](_0x2ca8d7, { 'xxx': { 'func': _0xcc39f3 } });
    _0x36faa2['exports']['main']();
}
contextGroup['addScript'](testFunction['toString']()), contextGroup['addScript']('var\x20module_bytes\x20=\x20' + JSON['stringify'](module_bytes)), Protocol['Debugger']['enable'](), Protocol['Debugger']['onPaused'](handleDebuggerPaused), InspectorTest['log']('Check\x20that\x20inspector\x20gets\x20wasm\x20bytecode'), Protocol['Runtime']['evaluate']({ 'expression': 'testFunction(module_bytes)' });
async function handleDebuggerPaused(_0xcaf13c) {
    InspectorTest['log']('Paused\x20on\x20debugger!');
    var _0x5853c8 = _0xcaf13c['params']['callFrames'];
    InspectorTest['log']('Number\x20of\x20frames:\x20' + _0x5853c8['length']);
    async function _0x22fc60(_0x4debe7, _0xe145fd) {
        if (_0xe145fd['error'])
            InspectorTest['logObject'](_0xe145fd);
        var _0x64ea46 = _0xe145fd['result']['scriptSource'], _0x44ddee = _0x5853c8[_0x4debe7]['location']['lineNumber'];
        if (_0x64ea46) {
            var _0xc44c8a = _0x64ea46['split']('\x0a')[_0x44ddee];
            InspectorTest['log']('[' + _0x4debe7 + ']\x20' + _0xc44c8a);
        } else {
            _0x44ddee != 0x1ea0 + 0x2118 + -0x3fb8 && InspectorTest['log']('Unexpected\x20line\x20number\x20in\x20wasm:\x20' + _0x44ddee);
            let _0x32575d = _0x5853c8[_0x4debe7]['location']['columnNumber'], _0x4d9adb = InspectorTest['decodeBase64'](_0xe145fd['result']['bytecode']);
            InspectorTest['log']('[' + _0x4debe7 + ']\x20Wasm\x20offset\x20' + _0x32575d + ':\x200x' + _0x4d9adb[_0x32575d]['toString'](-0xe28 + -0x20 * -0x24 + -0x4 * -0x26e));
        }
    }
    for (let _0x1fbdd1 = -0x5bc + -0x1 * 0x1d89 + 0x2345; _0x1fbdd1 < _0x5853c8['length']; _0x1fbdd1++) {
        result = await Protocol['Debugger']['getScriptSource']({ 'scriptId': _0x5853c8[_0x1fbdd1]['location']['scriptId'] }), await _0x22fc60(_0x1fbdd1, result);
    }
    InspectorTest['log']('Finished.'), InspectorTest['completeTest']();
}
