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
    0x0,
    kExprCallIndirect,
    sig_index,
    kTableZero,
    kExprEnd
])['exportAs']('main'), builder['appendToTable']([call_imported_idx]);
var module_bytes = builder['toArray']();
function testFunction(_0x475ff5) {
    var _0x568793 = {
        'SkaIA': function (_0x59da79, _0x124dfe) {
            return _0x59da79 < _0x124dfe;
        },
        'uiOos': function (_0x56c5ea, _0x22542a) {
            return _0x56c5ea | _0x22542a;
        }
    };
    function _0x299519() {
        debugger;
    }
    var _0x4ed9c9 = new ArrayBuffer(_0x475ff5['length']), _0x501ea7 = new Uint8Array(_0x4ed9c9);
    for (var _0x12f4c6 = 0x0; _0x568793['SkaIA'](_0x12f4c6, _0x475ff5['length']); _0x12f4c6++) {
        _0x501ea7[_0x12f4c6] = _0x568793['uiOos'](_0x475ff5[_0x12f4c6], 0x0);
    }
    var _0x5e3ef5 = new WebAssembly['Module'](_0x4ed9c9), _0x5c23ef = new WebAssembly['Instance'](_0x5e3ef5, { 'xxx': { 'func': _0x299519 } });
    _0x5c23ef['exports']['main']();
}
contextGroup['addScript'](testFunction['toString']()), contextGroup['addScript']('var\x20module_bytes\x20=\x20' + JSON['stringify'](module_bytes)), Protocol['Debugger']['enable'](), Protocol['Debugger']['onPaused'](handleDebuggerPaused), InspectorTest['log']('Check\x20that\x20inspector\x20gets\x20wasm\x20bytecode'), Protocol['Runtime']['evaluate']({ 'expression': 'testFunction(module_bytes)' });
async function handleDebuggerPaused(_0x16e87d) {
    var _0x3fa235 = {
        'JeqpM': function (_0x4a7fd6, _0x301f43) {
            return _0x4a7fd6 + _0x301f43;
        },
        'BYPzQ': function (_0x16e148, _0x551b48) {
            return _0x16e148 != _0x551b48;
        },
        'IpsMw': function (_0x3515f4, _0x490f08) {
            return _0x3515f4 + _0x490f08;
        },
        'jYvSQ': 'Unexpected\x20line\x20number\x20in\x20wasm:\x20',
        'kbZtD': function (_0x38a5c4, _0x3da793) {
            return _0x38a5c4 + _0x3da793;
        },
        'nnOfM': function (_0x49faf9, _0x58954c) {
            return _0x49faf9 + _0x58954c;
        },
        'wemLx': function (_0x14e711, _0x56ff6d) {
            return _0x14e711 + _0x56ff6d;
        },
        'psydV': ']\x20Wasm\x20offset\x20',
        'DXKwi': ':\x200x',
        'yQIED': 'Paused\x20on\x20debugger!',
        'EvuKZ': function (_0x24aa8e, _0x3b976c) {
            return _0x24aa8e + _0x3b976c;
        },
        'UZBau': 'Number\x20of\x20frames:\x20',
        'IZFLb': function (_0xb1c87f, _0x5bd09c) {
            return _0xb1c87f < _0x5bd09c;
        },
        'JVCPX': function (_0x459152, _0x5ba054, _0x1289ca) {
            return _0x459152(_0x5ba054, _0x1289ca);
        },
        'flRGA': 'Finished.'
    };
    InspectorTest['log'](_0x3fa235['yQIED']);
    var _0x36c670 = _0x16e87d['params']['callFrames'];
    InspectorTest['log'](_0x3fa235['EvuKZ'](_0x3fa235['UZBau'], _0x36c670['length']));
    async function _0xc3e4d9(_0x16ac80, _0x31a023) {
        if (_0x31a023['error'])
            InspectorTest['logObject'](_0x31a023);
        var _0x502290 = _0x31a023['result']['scriptSource'], _0x57ea55 = _0x36c670[_0x16ac80]['location']['lineNumber'];
        if (_0x502290) {
            var _0x19505d = _0x502290['split']('\x0a')[_0x57ea55];
            InspectorTest['log'](_0x3fa235['JeqpM'](_0x3fa235['JeqpM'](_0x3fa235['JeqpM']('[', _0x16ac80), ']\x20'), _0x19505d));
        } else {
            _0x3fa235['BYPzQ'](_0x57ea55, 0x0) && InspectorTest['log'](_0x3fa235['IpsMw'](_0x3fa235['jYvSQ'], _0x57ea55));
            let _0x41f38b = _0x36c670[_0x16ac80]['location']['columnNumber'], _0x4ed1dc = InspectorTest['decodeBase64'](_0x31a023['result']['bytecode']);
            InspectorTest['log'](_0x3fa235['kbZtD'](_0x3fa235['nnOfM'](_0x3fa235['nnOfM'](_0x3fa235['wemLx'](_0x3fa235['wemLx']('[', _0x16ac80), _0x3fa235['psydV']), _0x41f38b), _0x3fa235['DXKwi']), _0x4ed1dc[_0x41f38b]['toString'](0x10)));
        }
    }
    for (let _0x2af647 = 0x0; _0x3fa235['IZFLb'](_0x2af647, _0x36c670['length']); _0x2af647++) {
        result = await Protocol['Debugger']['getScriptSource']({ 'scriptId': _0x36c670[_0x2af647]['location']['scriptId'] }), await _0x3fa235['JVCPX'](_0xc3e4d9, _0x2af647, result);
    }
    InspectorTest['log'](_0x3fa235['flRGA']), InspectorTest['completeTest']();
}
