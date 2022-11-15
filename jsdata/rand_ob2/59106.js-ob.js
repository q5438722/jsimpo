var _0x3c18 = [
    ']\x20Wasm\x20offset\x20',
    ':\x200x',
    'getScriptSource',
    'scriptId',
    'completeTest',
    '121295eQcagr',
    '4xRgijv',
    '3FMFpdY',
    '87113VPqYoJ',
    '221206WqhccR',
    '353KbZyNj',
    '667zJGyIi',
    '102743VpjxJv',
    '1OrFoIa',
    '460799GdFvmc',
    '29fHeOtI',
    '35449ohOWEe',
    'load',
    'test/inspector/wasm-inspector-test.js',
    'start',
    'Tests\x20how\x20wasm\x20scrips\x20report\x20the\x20source',
    'addImport',
    'xxx',
    'call_func',
    'addBody',
    'index',
    'addType',
    'addFunction',
    'main',
    'exportAs',
    'appendToTable',
    'toArray',
    'length',
    'Module',
    'Instance',
    'addScript',
    'toString',
    'var\x20module_bytes\x20=\x20',
    'stringify',
    'enable',
    'Debugger',
    'onPaused',
    'log',
    'evaluate',
    'testFunction(module_bytes)',
    'Paused\x20on\x20debugger!',
    'params',
    'Number\x20of\x20frames:\x20',
    'error',
    'logObject',
    'scriptSource',
    'location',
    'lineNumber',
    'Unexpected\x20line\x20number\x20in\x20wasm:\x20',
    'columnNumber',
    'decodeBase64',
    'result',
    'bytecode'
];
var _0x28c50c = _0x2680;
function _0x2680(_0x3887ba, _0x335df4) {
    return _0x2680 = function (_0x3c1818, _0x26802e) {
        _0x3c1818 = _0x3c1818 - 0xdb;
        var _0x3d00c1 = _0x3c18[_0x3c1818];
        return _0x3d00c1;
    }, _0x2680(_0x3887ba, _0x335df4);
}
(function (_0x221c97, _0x5755be) {
    var _0x288b5f = _0x2680;
    while (!![]) {
        try {
            var _0x48e4cf = parseInt(_0x288b5f(0xdb)) * parseInt(_0x288b5f(0xdc)) + parseInt(_0x288b5f(0xdd)) * parseInt(_0x288b5f(0xde)) + -parseInt(_0x288b5f(0xdf)) + parseInt(_0x288b5f(0xe0)) * parseInt(_0x288b5f(0xe1)) + parseInt(_0x288b5f(0xe2)) * parseInt(_0x288b5f(0xe3)) + parseInt(_0x288b5f(0xe4)) + parseInt(_0x288b5f(0xe5)) * -parseInt(_0x288b5f(0xe6));
            if (_0x48e4cf === _0x5755be)
                break;
            else
                _0x221c97['push'](_0x221c97['shift']());
        } catch (_0x7bcb58) {
            _0x221c97['push'](_0x221c97['shift']());
        }
    }
}(_0x3c18, 0x4855d), utils[_0x28c50c(0xe7)](_0x28c50c(0xe8)));
let {session, contextGroup, Protocol} = InspectorTest[_0x28c50c(0xe9)](_0x28c50c(0xea));
var builder = new WasmModuleBuilder(), imported_idx = builder[_0x28c50c(0xeb)](_0x28c50c(0xec), 'func', kSig_v_v), call_imported_idx = builder['addFunction'](_0x28c50c(0xed), kSig_v_v)[_0x28c50c(0xee)]([
        kExprCallFunction,
        imported_idx
    ])[_0x28c50c(0xef)], sig_index = builder[_0x28c50c(0xf0)](kSig_v_v);
builder[_0x28c50c(0xf1)](_0x28c50c(0xf2), kSig_v_v)[_0x28c50c(0xee)]([
    kExprBlock,
    kWasmVoid,
    kExprI32Const,
    0x0,
    kExprCallIndirect,
    sig_index,
    kTableZero,
    kExprEnd
])[_0x28c50c(0xf3)](_0x28c50c(0xf2)), builder[_0x28c50c(0xf4)]([call_imported_idx]);
var module_bytes = builder[_0x28c50c(0xf5)]();
function testFunction(_0x3e9ed7) {
    var _0x33a2ca = _0x28c50c;
    function _0x34b63f() {
        debugger;
    }
    var _0x17a3e9 = new ArrayBuffer(_0x3e9ed7[_0x33a2ca(0xf6)]), _0x268645 = new Uint8Array(_0x17a3e9);
    for (var _0x1add7f = 0x0; _0x1add7f < _0x3e9ed7[_0x33a2ca(0xf6)]; _0x1add7f++) {
        _0x268645[_0x1add7f] = _0x3e9ed7[_0x1add7f] | 0x0;
    }
    var _0x219e6f = new WebAssembly[(_0x33a2ca(0xf7))](_0x17a3e9), _0x287e2d = new WebAssembly[(_0x33a2ca(0xf8))](_0x219e6f, { 'xxx': { 'func': _0x34b63f } });
    _0x287e2d['exports'][_0x33a2ca(0xf2)]();
}
contextGroup[_0x28c50c(0xf9)](testFunction[_0x28c50c(0xfa)]()), contextGroup[_0x28c50c(0xf9)](_0x28c50c(0xfb) + JSON[_0x28c50c(0xfc)](module_bytes)), Protocol['Debugger'][_0x28c50c(0xfd)](), Protocol[_0x28c50c(0xfe)][_0x28c50c(0xff)](handleDebuggerPaused), InspectorTest[_0x28c50c(0x100)]('Check\x20that\x20inspector\x20gets\x20wasm\x20bytecode'), Protocol['Runtime'][_0x28c50c(0x101)]({ 'expression': _0x28c50c(0x102) });
async function handleDebuggerPaused(_0x215252) {
    var _0x10c6f5 = _0x28c50c;
    InspectorTest[_0x10c6f5(0x100)](_0x10c6f5(0x103));
    var _0x114c44 = _0x215252[_0x10c6f5(0x104)]['callFrames'];
    InspectorTest[_0x10c6f5(0x100)](_0x10c6f5(0x105) + _0x114c44['length']);
    async function _0x18ec39(_0x32826b, _0x51a20f) {
        var _0x2475a0 = _0x10c6f5;
        if (_0x51a20f[_0x2475a0(0x106)])
            InspectorTest[_0x2475a0(0x107)](_0x51a20f);
        var _0x290946 = _0x51a20f['result'][_0x2475a0(0x108)], _0x9ac60b = _0x114c44[_0x32826b][_0x2475a0(0x109)][_0x2475a0(0x10a)];
        if (_0x290946) {
            var _0x4a9f9e = _0x290946['split']('\x0a')[_0x9ac60b];
            InspectorTest['log']('[' + _0x32826b + ']\x20' + _0x4a9f9e);
        } else {
            _0x9ac60b != 0x0 && InspectorTest['log'](_0x2475a0(0x10b) + _0x9ac60b);
            let _0x36d56b = _0x114c44[_0x32826b][_0x2475a0(0x109)][_0x2475a0(0x10c)], _0x471409 = InspectorTest[_0x2475a0(0x10d)](_0x51a20f[_0x2475a0(0x10e)][_0x2475a0(0x10f)]);
            InspectorTest[_0x2475a0(0x100)]('[' + _0x32826b + _0x2475a0(0x110) + _0x36d56b + _0x2475a0(0x111) + _0x471409[_0x36d56b][_0x2475a0(0xfa)](0x10));
        }
    }
    for (let _0x178127 = 0x0; _0x178127 < _0x114c44[_0x10c6f5(0xf6)]; _0x178127++) {
        result = await Protocol[_0x10c6f5(0xfe)][_0x10c6f5(0x112)]({ 'scriptId': _0x114c44[_0x178127][_0x10c6f5(0x109)][_0x10c6f5(0x113)] }), await _0x18ec39(_0x178127, result);
    }
    InspectorTest[_0x10c6f5(0x100)]('Finished.'), InspectorTest[_0x10c6f5(0x114)]();
}
