var _0x3a4a = [
    'completeTest',
    '94558LAlgLd',
    '2lpUMcs',
    '264237VIWGWq',
    '1318XwYUzm',
    '26mZTsxP',
    '259277ZCVTSK',
    '73biUfyK',
    '3859YienmR',
    '13655BCxSNj',
    '221628EqHHRq',
    'Tests\x20call\x20stack\x20in\x20wasm\x20scripts',
    'addImport',
    'func',
    'addFunction',
    'call_func',
    'addBody',
    'index',
    'main',
    'exportAs',
    'length',
    'Module',
    'Instance',
    'exports',
    'Debugger',
    'onPaused',
    'log',
    'Running\x20testFunction\x20with\x20generated\x20wasm\x20bytes...',
    'evaluate',
    'testFunction(',
    'functionName',
    'functionLocation',
    'function_',
    'scriptId',
    'location',
    'stringify',
    'params',
    'callFrames',
    'Getting\x20v8-generated\x20stack\x20trace...',
    'callFrameId',
    'then',
    'Result\x20of\x20evaluate\x20(',
    'result',
    'type',
    'value',
    'split',
    '\x20\x20\x20\x20--\x20skipped\x20--',
    'join',
    'Finished!'
];
var _0x45c218 = _0x4753;
(function (_0x3f568c, _0x3d94c2) {
    var _0x306c0d = _0x4753;
    while (!![]) {
        try {
            var _0x10d107 = -parseInt(_0x306c0d(0xaa)) * -parseInt(_0x306c0d(0xab)) + parseInt(_0x306c0d(0xac)) + -parseInt(_0x306c0d(0xad)) * -parseInt(_0x306c0d(0xae)) + -parseInt(_0x306c0d(0xaf)) + -parseInt(_0x306c0d(0xb0)) * parseInt(_0x306c0d(0xb1)) + -parseInt(_0x306c0d(0xb2)) + parseInt(_0x306c0d(0xb3));
            if (_0x10d107 === _0x3d94c2)
                break;
            else
                _0x3f568c['push'](_0x3f568c['shift']());
        } catch (_0x4736cc) {
            _0x3f568c['push'](_0x3f568c['shift']());
        }
    }
}(_0x3a4a, 0x25bf2), utils['load']('test/inspector/wasm-inspector-test.js'));
let {session, contextGroup, Protocol} = InspectorTest['start'](_0x45c218(0xb4));
var builder = new WasmModuleBuilder(), imported_idx = builder[_0x45c218(0xb5)]('mode', _0x45c218(0xb6), kSig_v_v), call_imported_idx = builder[_0x45c218(0xb7)](_0x45c218(0xb8), kSig_v_v)[_0x45c218(0xb9)]([
        kExprCallFunction,
        imported_idx
    ])[_0x45c218(0xba)];
builder[_0x45c218(0xb7)](_0x45c218(0xbb), kSig_v_v)['addBody']([
    kExprBlock,
    kWasmVoid,
    kExprCallFunction,
    call_imported_idx,
    kExprEnd
])[_0x45c218(0xbc)](_0x45c218(0xbb));
var module_bytes = builder['toArray']();
function testFunction(_0x20685b) {
    var _0x1e1512 = _0x45c218;
    function _0x4092ac() {
        debugger;
    }
    var _0x51cb6e = new ArrayBuffer(_0x20685b[_0x1e1512(0xbd)]), _0x4a658e = new Uint8Array(_0x51cb6e);
    for (var _0x584904 = 0x0; _0x584904 < _0x20685b[_0x1e1512(0xbd)]; _0x584904++) {
        _0x4a658e[_0x584904] = _0x20685b[_0x584904] | 0x0;
    }
    var _0x2dc835 = new WebAssembly[(_0x1e1512(0xbe))](_0x51cb6e), _0x2aad61 = new WebAssembly[(_0x1e1512(0xbf))](_0x2dc835, { 'mode': { 'func': _0x4092ac } });
    _0x2aad61[_0x1e1512(0xc0)][_0x1e1512(0xbb)]();
}
contextGroup['addScript'](testFunction['toString']()), Protocol[_0x45c218(0xc1)]['enable'](), Protocol['Debugger'][_0x45c218(0xc2)](handleDebuggerPaused), InspectorTest[_0x45c218(0xc3)](_0x45c218(0xc4)), Protocol['Runtime'][_0x45c218(0xc5)]({ 'expression': _0x45c218(0xc6) + JSON['stringify'](module_bytes) + ')' });
function _0x4753(_0x1eab70, _0x40970f) {
    return _0x4753 = function (_0x3a4aad, _0x4753b8) {
        _0x3a4aad = _0x3a4aad - 0xaa;
        var _0x14b8ed = _0x3a4a[_0x3a4aad];
        return _0x14b8ed;
    }, _0x4753(_0x1eab70, _0x40970f);
}
function locationToString(_0x5a7a66) {
    var _0xa621d3 = _0x45c218, _0xee47dd = { 'functionName': _0x5a7a66[_0xa621d3(0xc7)] };
    for (var _0x5f5265 in _0x5a7a66[_0xa621d3(0xc8)]) {
        if (_0x5f5265 == 'scriptId')
            continue;
        _0xee47dd[_0xa621d3(0xc9) + _0x5f5265] = _0x5a7a66['functionLocation'][_0x5f5265];
    }
    for (var _0x5f5265 in _0x5a7a66['location']) {
        if (_0x5f5265 == _0xa621d3(0xca))
            continue;
        _0xee47dd[_0x5f5265] = _0x5a7a66[_0xa621d3(0xcb)][_0x5f5265];
    }
    return JSON[_0xa621d3(0xcc)](_0xee47dd);
}
function logStackTrace(_0x5bdb60) {
    var _0x1e4411 = _0x45c218, _0x3b8804 = _0x5bdb60[_0x1e4411(0xcd)][_0x1e4411(0xce)];
    InspectorTest[_0x1e4411(0xc3)]('Number\x20of\x20frames:\x20' + _0x3b8804[_0x1e4411(0xbd)]);
    for (var _0x2d29d0 = 0x0; _0x2d29d0 < _0x3b8804['length']; ++_0x2d29d0) {
        InspectorTest[_0x1e4411(0xc3)]('\x20\x20-\x20[' + _0x2d29d0 + ']\x20' + locationToString(_0x3b8804[_0x2d29d0]));
    }
}
function handleDebuggerPaused(_0x3ec781) {
    var _0x1da9af = _0x45c218;
    InspectorTest[_0x1da9af(0xc3)]('Paused\x20on\x20\x27debugger;\x27'), logStackTrace(_0x3ec781), InspectorTest[_0x1da9af(0xc3)](_0x1da9af(0xcf));
    var _0x3ea580 = _0x3ec781[_0x1da9af(0xcd)]['callFrames'][0x0][_0x1da9af(0xd0)];
    Protocol[_0x1da9af(0xc1)]['evaluateOnCallFrame']({
        'callFrameId': _0x3ea580,
        'expression': '(new\x20Error(\x22this\x20is\x20your\x20stack\x20trace:\x22)).stack'
    })[_0x1da9af(0xd1)](callbackEvaluate);
}
function callbackEvaluate(_0x6f4af2) {
    var _0x409560 = _0x45c218;
    InspectorTest[_0x409560(0xc3)](_0x409560(0xd2) + _0x6f4af2[_0x409560(0xd3)]['result'][_0x409560(0xd4)] + '):');
    var _0x76fe5f = _0x6f4af2['result'][_0x409560(0xd3)][_0x409560(0xd5)][_0x409560(0xd6)]('\x0a');
    _0x76fe5f[0x1] = _0x409560(0xd7), InspectorTest[_0x409560(0xc3)](_0x76fe5f[_0x409560(0xd8)]('\x0a')), InspectorTest[_0x409560(0xc3)](_0x409560(0xd9)), InspectorTest[_0x409560(0xda)]();
}
