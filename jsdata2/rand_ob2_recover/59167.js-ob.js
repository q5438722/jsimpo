utils['load']('test/inspector/wasm-inspector-test.js');
let {session, contextGroup, Protocol} = InspectorTest['start'](_0x45c218(180));
var builder = new WasmModuleBuilder(), imported_idx = builder[_0x45c218(181)]('mode', _0x45c218(182), kSig_v_v), call_imported_idx = builder[_0x45c218(183)](_0x45c218(184), kSig_v_v)[_0x45c218(185)]([
        kExprCallFunction,
        imported_idx
    ])[_0x45c218(186)];
builder[_0x45c218(183)](_0x45c218(187), kSig_v_v)['addBody']([
    kExprBlock,
    kWasmVoid,
    kExprCallFunction,
    call_imported_idx,
    kExprEnd
])[_0x45c218(188)](_0x45c218(187));
var module_bytes = builder['toArray']();
function testFunction(_0x20685b) {
    var _0x1e1512 = _0x45c218;
    function _0x4092ac() {
        debugger;
    }
    var _0x51cb6e = new ArrayBuffer(_0x20685b[_0x1e1512(189)]), _0x4a658e = new Uint8Array(_0x51cb6e);
    for (var _0x584904 = 0; _0x584904 < _0x20685b[_0x1e1512(189)]; _0x584904++) {
        _0x4a658e[_0x584904] = _0x20685b[_0x584904] | 0;
    }
    var _0x2dc835 = new WebAssembly[(_0x1e1512(190))](_0x51cb6e), _0x2aad61 = new WebAssembly[(_0x1e1512(191))](_0x2dc835, { 'mode': { 'func': _0x4092ac } });
    _0x2aad61[_0x1e1512(192)][_0x1e1512(187)]();
}
contextGroup['addScript'](testFunction['toString']()), Protocol[_0x45c218(193)]['enable'](), Protocol['Debugger'][_0x45c218(194)](handleDebuggerPaused), InspectorTest[_0x45c218(195)](_0x45c218(196)), Protocol['Runtime'][_0x45c218(197)]({ 'expression': _0x45c218(198) + JSON['stringify'](module_bytes) + ')' });
function _0x4753(_0x1eab70, _0x40970f) {
    return _0x4753 = function (_0x3a4aad, _0x4753b8) {
        _0x3a4aad = _0x3a4aad - 170;
        var _0x14b8ed = _0x3a4a[_0x3a4aad];
        return _0x14b8ed;
    }, _0x4753(_0x1eab70, _0x40970f);
}
function locationToString(_0x5a7a66) {
    var _0xa621d3 = _0x45c218, _0xee47dd = { 'functionName': _0x5a7a66[_0xa621d3(199)] };
    for (var _0x5f5265 in _0x5a7a66[_0xa621d3(200)]) {
        if (_0x5f5265 == 'scriptId')
            continue;
        _0xee47dd[_0xa621d3(201) + _0x5f5265] = _0x5a7a66['functionLocation'][_0x5f5265];
    }
    for (var _0x5f5265 in _0x5a7a66['location']) {
        if (_0x5f5265 == _0xa621d3(202))
            continue;
        _0xee47dd[_0x5f5265] = _0x5a7a66[_0xa621d3(203)][_0x5f5265];
    }
    return JSON[_0xa621d3(204)](_0xee47dd);
}
function logStackTrace(_0x5bdb60) {
    var _0x1e4411 = _0x45c218, _0x3b8804 = _0x5bdb60[_0x1e4411(205)][_0x1e4411(206)];
    InspectorTest[_0x1e4411(195)]('Number of frames: ' + _0x3b8804[_0x1e4411(189)]);
    for (var _0x2d29d0 = 0; _0x2d29d0 < _0x3b8804['length']; ++_0x2d29d0) {
        InspectorTest[_0x1e4411(195)]('  - [' + _0x2d29d0 + '] ' + locationToString(_0x3b8804[_0x2d29d0]));
    }
}
function handleDebuggerPaused(_0x3ec781) {
    var _0x1da9af = _0x45c218;
    InspectorTest[_0x1da9af(195)]('Paused on \'debugger;\''), logStackTrace(_0x3ec781), InspectorTest[_0x1da9af(195)](_0x1da9af(207));
    var _0x3ea580 = _0x3ec781[_0x1da9af(205)]['callFrames'][0][_0x1da9af(208)];
    Protocol[_0x1da9af(193)]['evaluateOnCallFrame']({
        'callFrameId': _0x3ea580,
        'expression': '(new Error("this is your stack trace:")).stack'
    })[_0x1da9af(209)](callbackEvaluate);
}
function callbackEvaluate(_0x6f4af2) {
    var _0x409560 = _0x45c218;
    InspectorTest[_0x409560(195)](_0x409560(210) + _0x6f4af2[_0x409560(211)]['result'][_0x409560(212)] + '):');
    var _0x76fe5f = _0x6f4af2['result'][_0x409560(211)][_0x409560(213)][_0x409560(214)]('\n');
    _0x76fe5f[1] = _0x409560(215), InspectorTest[_0x409560(195)](_0x76fe5f[_0x409560(216)]('\n')), InspectorTest[_0x409560(195)](_0x409560(217)), InspectorTest[_0x409560(218)]();
}