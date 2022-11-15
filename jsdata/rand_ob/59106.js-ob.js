var _0x257d = [
    '131983FpWGvW',
    '919303QmpjgR',
    'load',
    'test/inspector/wasm-inspector-test.js',
    'start',
    'Tests\x20how\x20wasm\x20scrips\x20report\x20the\x20source',
    'addImport',
    'func',
    'addFunction',
    'addBody',
    'addType',
    'main',
    'exportAs',
    'appendToTable',
    'toArray',
    'length',
    'ehtWQ',
    'Module',
    'Instance',
    'exports',
    'toString',
    'addScript',
    'stringify',
    'Debugger',
    'enable',
    'log',
    'Check\x20that\x20inspector\x20gets\x20wasm\x20bytecode',
    'Runtime',
    'evaluate',
    ']\x20Wasm\x20offset\x20',
    ':\x200x',
    'Paused\x20on\x20debugger!',
    'Number\x20of\x20frames:\x20',
    'callFrames',
    'aSzID',
    'lhVtu',
    'error',
    'logObject',
    'result',
    'scriptSource',
    'location',
    'XdGsR',
    'ybEJa',
    'TKuXk',
    'scZWx',
    'decodeBase64',
    'bytecode',
    'gTKiD',
    'uHnoo',
    'satLB',
    'scriptId',
    'CWlKP',
    'completeTest',
    '598352xbpSSQ',
    '3YsMGpb',
    '39161nEbmZf',
    '431800KKRENu',
    '89514OJjQRO',
    '185682tMFMpk',
    '2yYptDG'
];
var _0x4f35e5 = _0x2a60;
(function (_0x3a095b, _0x2bf60b) {
    var _0x4ce805 = _0x2a60;
    while (!![]) {
        try {
            var _0x44178c = -parseInt(_0x4ce805(0xda)) + parseInt(_0x4ce805(0xdb)) * parseInt(_0x4ce805(0xdc)) + parseInt(_0x4ce805(0xdd)) + -parseInt(_0x4ce805(0xde)) + parseInt(_0x4ce805(0xdf)) + -parseInt(_0x4ce805(0xe0)) * parseInt(_0x4ce805(0xe1)) + parseInt(_0x4ce805(0xe2));
            if (_0x44178c === _0x2bf60b)
                break;
            else
                _0x3a095b['push'](_0x3a095b['shift']());
        } catch (_0x378ea6) {
            _0x3a095b['push'](_0x3a095b['shift']());
        }
    }
}(_0x257d, 0xd5f6d + -0x3a807 + 0x803f * 0x2), utils[_0x4f35e5(0xe3)](_0x4f35e5(0xe4)));
function _0x2a60(_0x3fa936, _0x37334f) {
    return _0x2a60 = function (_0x15a2d7, _0x2ce097) {
        _0x15a2d7 = _0x15a2d7 - (-0x152e + 0x8d + 0x157b);
        var _0x244ee8 = _0x257d[_0x15a2d7];
        return _0x244ee8;
    }, _0x2a60(_0x3fa936, _0x37334f);
}
let {session, contextGroup, Protocol} = InspectorTest[_0x4f35e5(0xe5)](_0x4f35e5(0xe6));
var builder = new WasmModuleBuilder(), imported_idx = builder[_0x4f35e5(0xe7)]('xxx', _0x4f35e5(0xe8), kSig_v_v), call_imported_idx = builder[_0x4f35e5(0xe9)]('call_func', kSig_v_v)[_0x4f35e5(0xea)]([
        kExprCallFunction,
        imported_idx
    ])['index'], sig_index = builder[_0x4f35e5(0xeb)](kSig_v_v);
builder[_0x4f35e5(0xe9)](_0x4f35e5(0xec), kSig_v_v)[_0x4f35e5(0xea)]([
    kExprBlock,
    kWasmVoid,
    kExprI32Const,
    -0x1 * -0x875 + 0x100c + -0x1881,
    kExprCallIndirect,
    sig_index,
    kTableZero,
    kExprEnd
])[_0x4f35e5(0xed)](_0x4f35e5(0xec)), builder[_0x4f35e5(0xee)]([call_imported_idx]);
var module_bytes = builder[_0x4f35e5(0xef)]();
function testFunction(_0x382930) {
    var _0x1ba6bf = _0x4f35e5, _0x53daff = {
            'kWsaD': function (_0x51476d, _0x6747e) {
                return _0x51476d < _0x6747e;
            },
            'ehtWQ': function (_0x2612dd, _0x27a862) {
                return _0x2612dd | _0x27a862;
            }
        };
    function _0x32a18e() {
        debugger;
    }
    var _0x457be7 = new ArrayBuffer(_0x382930[_0x1ba6bf(0xf0)]), _0x380b57 = new Uint8Array(_0x457be7);
    for (var _0x3291a5 = 0x1bd8 + -0x2208 + -0x48 * -0x16; _0x53daff['kWsaD'](_0x3291a5, _0x382930['length']); _0x3291a5++) {
        _0x380b57[_0x3291a5] = _0x53daff[_0x1ba6bf(0xf1)](_0x382930[_0x3291a5], -0x1969 + 0x1 * 0x3d7 + -0xac9 * -0x2);
    }
    var _0x57ed14 = new WebAssembly[(_0x1ba6bf(0xf2))](_0x457be7), _0x3de676 = new WebAssembly[(_0x1ba6bf(0xf3))](_0x57ed14, { 'xxx': { 'func': _0x32a18e } });
    _0x3de676[_0x1ba6bf(0xf4)][_0x1ba6bf(0xec)]();
}
contextGroup['addScript'](testFunction[_0x4f35e5(0xf5)]()), contextGroup[_0x4f35e5(0xf6)]('var\x20module_bytes\x20=\x20' + JSON[_0x4f35e5(0xf7)](module_bytes)), Protocol[_0x4f35e5(0xf8)][_0x4f35e5(0xf9)](), Protocol['Debugger']['onPaused'](handleDebuggerPaused), InspectorTest[_0x4f35e5(0xfa)](_0x4f35e5(0xfb)), Protocol[_0x4f35e5(0xfc)][_0x4f35e5(0xfd)]({ 'expression': 'testFunction(module_bytes)' });
async function handleDebuggerPaused(_0x528ee4) {
    var _0x39f948 = _0x4f35e5, _0x31540c = {
            'XdGsR': function (_0x241aa2, _0xdbc275) {
                return _0x241aa2 + _0xdbc275;
            },
            'ybEJa': function (_0x4885ad, _0x562683) {
                return _0x4885ad + _0x562683;
            },
            'TKuXk': function (_0x691e43, _0x26dd87) {
                return _0x691e43 != _0x26dd87;
            },
            'scZWx': 'Unexpected\x20line\x20number\x20in\x20wasm:\x20',
            'gTKiD': function (_0x3b98ee, _0x4b7ffc) {
                return _0x3b98ee + _0x4b7ffc;
            },
            'aSzID': function (_0x4a8bea, _0x4c6d33) {
                return _0x4a8bea + _0x4c6d33;
            },
            'osPUq': _0x39f948(0xfe),
            'uHnoo': _0x39f948(0xff),
            'TItjg': _0x39f948(0x100),
            'lhVtu': _0x39f948(0x101),
            'satLB': function (_0xa12006, _0x1870bc) {
                return _0xa12006 < _0x1870bc;
            },
            'CWlKP': function (_0x25b7d8, _0x423f5d, _0x33e514) {
                return _0x25b7d8(_0x423f5d, _0x33e514);
            }
        };
    InspectorTest[_0x39f948(0xfa)](_0x31540c['TItjg']);
    var _0x12f877 = _0x528ee4['params'][_0x39f948(0x102)];
    InspectorTest[_0x39f948(0xfa)](_0x31540c[_0x39f948(0x103)](_0x31540c[_0x39f948(0x104)], _0x12f877[_0x39f948(0xf0)]));
    async function _0x1e7410(_0x14bf24, _0x5a9d85) {
        var _0x34070f = _0x39f948;
        if (_0x5a9d85[_0x34070f(0x105)])
            InspectorTest[_0x34070f(0x106)](_0x5a9d85);
        var _0xd10857 = _0x5a9d85[_0x34070f(0x107)][_0x34070f(0x108)], _0x375b58 = _0x12f877[_0x14bf24][_0x34070f(0x109)]['lineNumber'];
        if (_0xd10857) {
            var _0x3fc0d5 = _0xd10857['split']('\x0a')[_0x375b58];
            InspectorTest[_0x34070f(0xfa)](_0x31540c[_0x34070f(0x10a)](_0x31540c['XdGsR'](_0x31540c[_0x34070f(0x10b)]('[', _0x14bf24), ']\x20'), _0x3fc0d5));
        } else {
            _0x31540c[_0x34070f(0x10c)](_0x375b58, -0x12d2 + 0x2218 + -0x55 * 0x2e) && InspectorTest[_0x34070f(0xfa)](_0x31540c[_0x34070f(0x10d)] + _0x375b58);
            let _0x12b317 = _0x12f877[_0x14bf24][_0x34070f(0x109)]['columnNumber'], _0x199826 = InspectorTest[_0x34070f(0x10e)](_0x5a9d85[_0x34070f(0x107)][_0x34070f(0x10f)]);
            InspectorTest[_0x34070f(0xfa)](_0x31540c[_0x34070f(0x10b)](_0x31540c[_0x34070f(0x110)](_0x31540c[_0x34070f(0x103)](_0x31540c[_0x34070f(0x103)](_0x31540c[_0x34070f(0x103)]('[', _0x14bf24), _0x31540c['osPUq']), _0x12b317), _0x31540c[_0x34070f(0x111)]), _0x199826[_0x12b317][_0x34070f(0xf5)](0x13dd + -0x2 * 0x1031 + 0xc95)));
        }
    }
    for (let _0x34d771 = -0x33a * -0x6 + 0x26b3 + -0x3a0f; _0x31540c[_0x39f948(0x112)](_0x34d771, _0x12f877[_0x39f948(0xf0)]); _0x34d771++) {
        result = await Protocol['Debugger']['getScriptSource']({ 'scriptId': _0x12f877[_0x34d771]['location'][_0x39f948(0x113)] }), await _0x31540c[_0x39f948(0x114)](_0x1e7410, _0x34d771, result);
    }
    InspectorTest['log']('Finished.'), InspectorTest[_0x39f948(0x115)]();
}
