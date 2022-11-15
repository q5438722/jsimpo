var _0x4cb1 = [
    'xxx',
    'func',
    'addFunction',
    'call_func',
    'addBody',
    'index',
    'addType',
    'exportAs',
    'main',
    'appendToTable',
    'toArray',
    'length',
    'exports',
    'addScript',
    'var\x20module_bytes\x20=\x20',
    'enable',
    'Debugger',
    'onPaused',
    'log',
    'testFunction(module_bytes)',
    'Paused\x20on\x20debugger!',
    'params',
    'callFrames',
    'Number\x20of\x20frames:\x20',
    'error',
    'logObject',
    'scriptSource',
    'location',
    'lineNumber',
    'split',
    'Unexpected\x20line\x20number\x20in\x20wasm:\x20',
    'decodeBase64',
    'bytecode',
    ':\x200x',
    'toString',
    'scriptId',
    'Finished.',
    'completeTest',
    '7qqaBfU',
    '4898coNHJL',
    '154669FJPyXz',
    '1XTdqYI',
    '763qqeDTR',
    '279VcLZDB',
    '18spwRQl',
    '1396pbalLl',
    '67977RtVoeK',
    '305630hMfrFT',
    '713885XbyKkr',
    'load',
    'test/inspector/wasm-inspector-test.js',
    'Tests\x20how\x20wasm\x20scrips\x20report\x20the\x20source'
];
var _0x5e64a7 = _0x18a8;
(function (_0x37d287, _0x36f6d3) {
    var _0x1a9615 = _0x18a8;
    while (!![]) {
        try {
            var _0x2e0682 = -parseInt(_0x1a9615(0xe5)) * -parseInt(_0x1a9615(0xe6)) + -parseInt(_0x1a9615(0xe7)) * parseInt(_0x1a9615(0xe8)) + -parseInt(_0x1a9615(0xe9)) * parseInt(_0x1a9615(0xea)) + -parseInt(_0x1a9615(0xeb)) * -parseInt(_0x1a9615(0xec)) + parseInt(_0x1a9615(0xed)) + -parseInt(_0x1a9615(0xee)) + parseInt(_0x1a9615(0xef));
            if (_0x2e0682 === _0x36f6d3)
                break;
            else
                _0x37d287['push'](_0x37d287['shift']());
        } catch (_0x3f52a2) {
            _0x37d287['push'](_0x37d287['shift']());
        }
    }
}(_0x4cb1, 0x290a4), utils[_0x5e64a7(0xf0)](_0x5e64a7(0xf1)));
let {session, contextGroup, Protocol} = InspectorTest['start'](_0x5e64a7(0xf2));
var builder = new WasmModuleBuilder(), imported_idx = builder['addImport'](_0x5e64a7(0xf3), _0x5e64a7(0xf4), kSig_v_v), call_imported_idx = builder[_0x5e64a7(0xf5)](_0x5e64a7(0xf6), kSig_v_v)[_0x5e64a7(0xf7)]([
        kExprCallFunction,
        imported_idx
    ])[_0x5e64a7(0xf8)], sig_index = builder[_0x5e64a7(0xf9)](kSig_v_v);
function _0x18a8(_0x446949, _0x5d14d9) {
    return _0x18a8 = function (_0x4cb126, _0x18a846) {
        _0x4cb126 = _0x4cb126 - 0xe5;
        var _0x407bd4 = _0x4cb1[_0x4cb126];
        return _0x407bd4;
    }, _0x18a8(_0x446949, _0x5d14d9);
}
builder[_0x5e64a7(0xf5)]('main', kSig_v_v)[_0x5e64a7(0xf7)]([
    kExprBlock,
    kWasmVoid,
    kExprI32Const,
    0x0,
    kExprCallIndirect,
    sig_index,
    kTableZero,
    kExprEnd
])[_0x5e64a7(0xfa)](_0x5e64a7(0xfb)), builder[_0x5e64a7(0xfc)]([call_imported_idx]);
var module_bytes = builder[_0x5e64a7(0xfd)]();
function testFunction(_0x85423f) {
    var _0x508467 = _0x5e64a7;
    function _0x15a0f5() {
        debugger;
    }
    var _0x3c3109 = new ArrayBuffer(_0x85423f[_0x508467(0xfe)]), _0x2b6993 = new Uint8Array(_0x3c3109);
    for (var _0x4de54e = 0x0; _0x4de54e < _0x85423f[_0x508467(0xfe)]; _0x4de54e++) {
        _0x2b6993[_0x4de54e] = _0x85423f[_0x4de54e] | 0x0;
    }
    var _0x20dd82 = new WebAssembly['Module'](_0x3c3109), _0x1d65ec = new WebAssembly['Instance'](_0x20dd82, { 'xxx': { 'func': _0x15a0f5 } });
    _0x1d65ec[_0x508467(0xff)][_0x508467(0xfb)]();
}
contextGroup[_0x5e64a7(0x100)](testFunction['toString']()), contextGroup[_0x5e64a7(0x100)](_0x5e64a7(0x101) + JSON['stringify'](module_bytes)), Protocol['Debugger'][_0x5e64a7(0x102)](), Protocol[_0x5e64a7(0x103)][_0x5e64a7(0x104)](handleDebuggerPaused), InspectorTest[_0x5e64a7(0x105)]('Check\x20that\x20inspector\x20gets\x20wasm\x20bytecode'), Protocol['Runtime']['evaluate']({ 'expression': _0x5e64a7(0x106) });
async function handleDebuggerPaused(_0x14e350) {
    var _0x4edd77 = _0x5e64a7;
    InspectorTest['log'](_0x4edd77(0x107));
    var _0x30b0b0 = _0x14e350[_0x4edd77(0x108)][_0x4edd77(0x109)];
    InspectorTest[_0x4edd77(0x105)](_0x4edd77(0x10a) + _0x30b0b0['length']);
    async function _0xff7826(_0x565814, _0xe54b1e) {
        var _0x30aeab = _0x4edd77;
        if (_0xe54b1e[_0x30aeab(0x10b)])
            InspectorTest[_0x30aeab(0x10c)](_0xe54b1e);
        var _0x316372 = _0xe54b1e['result'][_0x30aeab(0x10d)], _0x19773e = _0x30b0b0[_0x565814][_0x30aeab(0x10e)][_0x30aeab(0x10f)];
        if (_0x316372) {
            var _0x164ab8 = _0x316372[_0x30aeab(0x110)]('\x0a')[_0x19773e];
            InspectorTest[_0x30aeab(0x105)]('[' + _0x565814 + ']\x20' + _0x164ab8);
        } else {
            _0x19773e != 0x0 && InspectorTest[_0x30aeab(0x105)](_0x30aeab(0x111) + _0x19773e);
            let _0x3b0f71 = _0x30b0b0[_0x565814][_0x30aeab(0x10e)]['columnNumber'], _0x336706 = InspectorTest[_0x30aeab(0x112)](_0xe54b1e['result'][_0x30aeab(0x113)]);
            InspectorTest['log']('[' + _0x565814 + ']\x20Wasm\x20offset\x20' + _0x3b0f71 + _0x30aeab(0x114) + _0x336706[_0x3b0f71][_0x30aeab(0x115)](0x10));
        }
    }
    for (let _0x2c4f39 = 0x0; _0x2c4f39 < _0x30b0b0[_0x4edd77(0xfe)]; _0x2c4f39++) {
        result = await Protocol[_0x4edd77(0x103)]['getScriptSource']({ 'scriptId': _0x30b0b0[_0x2c4f39]['location'][_0x4edd77(0x116)] }), await _0xff7826(_0x2c4f39, result);
    }
    InspectorTest[_0x4edd77(0x105)](_0x4edd77(0x117)), InspectorTest[_0x4edd77(0x118)]();
}
