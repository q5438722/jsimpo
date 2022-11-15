var _0x4c9f = [
    'evaluate',
    'stringify',
    'functionName',
    'functionLocation',
    'scriptId',
    'zcAyv',
    'function_',
    'location',
    '\x20\x20-\x20[',
    'params',
    'TpCmO',
    'ArYoK',
    'log',
    'eotHa',
    '(new\x20Error(\x22this\x20is\x20your\x20stack\x20trace:\x22)).stack',
    'Paused\x20on\x20\x27debugger;\x27',
    'pkMaw',
    'Getting\x20v8-generated\x20stack\x20trace...',
    'callFrames',
    'evaluateOnCallFrame',
    'QocLR',
    'then',
    '1|3|0|4|2|5',
    'split',
    '\x20\x20\x20\x20--\x20skipped\x20--',
    'IEsVT',
    'result',
    'Finished!',
    'value',
    'join',
    'completeTest',
    '207179pJPUTR',
    '747419mMAfhe',
    '2XHkezi',
    '887054aKmxLW',
    '1QvvPrU',
    '136468AsUlNT',
    '30974fdTSAG',
    '5RlbIaY',
    '1395705KAasVS',
    '709437ohPAlW',
    'load',
    'start',
    'Tests\x20call\x20stack\x20in\x20wasm\x20scripts',
    'addImport',
    'mode',
    'func',
    'addFunction',
    'call_func',
    'addBody',
    'index',
    'main',
    'exportAs',
    'toArray',
    'length',
    'wLGwU',
    'Module',
    'Instance',
    'exports',
    'Debugger',
    'onPaused',
    'Running\x20testFunction\x20with\x20generated\x20wasm\x20bytes...',
    'Runtime'
];
var _0x37b2ef = _0x5c8d;
(function (_0x1bba34, _0x465f54) {
    var _0x4fe847 = _0x5c8d;
    while (!![]) {
        try {
            var _0x2b6ffb = parseInt(_0x4fe847(0xb8)) + parseInt(_0x4fe847(0xb9)) * parseInt(_0x4fe847(0xba)) + -parseInt(_0x4fe847(0xbb)) * -parseInt(_0x4fe847(0xbc)) + parseInt(_0x4fe847(0xbd)) + -parseInt(_0x4fe847(0xbe)) * -parseInt(_0x4fe847(0xbf)) + -parseInt(_0x4fe847(0xc0)) + -parseInt(_0x4fe847(0xc1));
            if (_0x2b6ffb === _0x465f54)
                break;
            else
                _0x1bba34['push'](_0x1bba34['shift']());
        } catch (_0x1c7e34) {
            _0x1bba34['push'](_0x1bba34['shift']());
        }
    }
}(_0x4c9f, -0x2 * 0x1b697 + 0x51 * -0x36eb + 0x20a1ec), utils[_0x37b2ef(0xc2)]('test/inspector/wasm-inspector-test.js'));
let {session, contextGroup, Protocol} = InspectorTest[_0x37b2ef(0xc3)](_0x37b2ef(0xc4));
var builder = new WasmModuleBuilder(), imported_idx = builder[_0x37b2ef(0xc5)](_0x37b2ef(0xc6), _0x37b2ef(0xc7), kSig_v_v), call_imported_idx = builder[_0x37b2ef(0xc8)](_0x37b2ef(0xc9), kSig_v_v)[_0x37b2ef(0xca)]([
        kExprCallFunction,
        imported_idx
    ])[_0x37b2ef(0xcb)];
builder[_0x37b2ef(0xc8)](_0x37b2ef(0xcc), kSig_v_v)[_0x37b2ef(0xca)]([
    kExprBlock,
    kWasmVoid,
    kExprCallFunction,
    call_imported_idx,
    kExprEnd
])[_0x37b2ef(0xcd)](_0x37b2ef(0xcc));
var module_bytes = builder[_0x37b2ef(0xce)]();
function testFunction(_0x500f91) {
    var _0x41700e = _0x37b2ef, _0x241fde = {
            'wLGwU': function (_0x4bb09f, _0xfa3c1b) {
                return _0x4bb09f < _0xfa3c1b;
            },
            'lJziQ': function (_0x142790, _0x4faac0) {
                return _0x142790 | _0x4faac0;
            }
        };
    function _0x270914() {
        debugger;
    }
    var _0x59f708 = new ArrayBuffer(_0x500f91[_0x41700e(0xcf)]), _0x4696b3 = new Uint8Array(_0x59f708);
    for (var _0x3db9af = 0x1459 * -0x1 + -0x1 * 0x2367 + -0x2 * -0x1be0; _0x241fde[_0x41700e(0xd0)](_0x3db9af, _0x500f91[_0x41700e(0xcf)]); _0x3db9af++) {
        _0x4696b3[_0x3db9af] = _0x241fde['lJziQ'](_0x500f91[_0x3db9af], 0x6cb + -0x2 * -0x85b + -0x1781);
    }
    var _0xaf51d1 = new WebAssembly[(_0x41700e(0xd1))](_0x59f708), _0x4fedc8 = new WebAssembly[(_0x41700e(0xd2))](_0xaf51d1, { 'mode': { 'func': _0x270914 } });
    _0x4fedc8[_0x41700e(0xd3)][_0x41700e(0xcc)]();
}
function _0x5c8d(_0x7b839a, _0x3cd73e) {
    return _0x5c8d = function (_0x44ebdb, _0x5db420) {
        _0x44ebdb = _0x44ebdb - (0x9d0 * 0x1 + -0x1 * 0xac7 + -0x1af * -0x1);
        var _0x219a7f = _0x4c9f[_0x44ebdb];
        return _0x219a7f;
    }, _0x5c8d(_0x7b839a, _0x3cd73e);
}
contextGroup['addScript'](testFunction['toString']()), Protocol[_0x37b2ef(0xd4)]['enable'](), Protocol[_0x37b2ef(0xd4)][_0x37b2ef(0xd5)](handleDebuggerPaused), InspectorTest['log'](_0x37b2ef(0xd6)), Protocol[_0x37b2ef(0xd7)][_0x37b2ef(0xd8)]({ 'expression': 'testFunction(' + JSON[_0x37b2ef(0xd9)](module_bytes) + ')' });
function locationToString(_0x36674e) {
    var _0x1b1e86 = _0x37b2ef, _0x1675b5 = {
            'zcAyv': function (_0x5e2f7b, _0x3f2a60) {
                return _0x5e2f7b + _0x3f2a60;
            },
            'YmPaz': function (_0x2ea50f, _0xa6bc2a) {
                return _0x2ea50f == _0xa6bc2a;
            }
        }, _0x39bbdf = { 'functionName': _0x36674e[_0x1b1e86(0xda)] };
    for (var _0x40020f in _0x36674e[_0x1b1e86(0xdb)]) {
        if (_0x40020f == _0x1b1e86(0xdc))
            continue;
        _0x39bbdf[_0x1675b5[_0x1b1e86(0xdd)](_0x1b1e86(0xde), _0x40020f)] = _0x36674e[_0x1b1e86(0xdb)][_0x40020f];
    }
    for (var _0x40020f in _0x36674e[_0x1b1e86(0xdf)]) {
        if (_0x1675b5['YmPaz'](_0x40020f, _0x1b1e86(0xdc)))
            continue;
        _0x39bbdf[_0x40020f] = _0x36674e['location'][_0x40020f];
    }
    return JSON[_0x1b1e86(0xd9)](_0x39bbdf);
}
function logStackTrace(_0x46bec1) {
    var _0x1a485e = _0x37b2ef, _0x21ee1a = {
            'TpCmO': function (_0x25f1cf, _0x15a037) {
                return _0x25f1cf + _0x15a037;
            },
            'ArYoK': function (_0x3399fe, _0x1f631a) {
                return _0x3399fe < _0x1f631a;
            },
            'dahuX': _0x1a485e(0xe0),
            'eotHa': function (_0x5594fe, _0x2ec2ae) {
                return _0x5594fe(_0x2ec2ae);
            }
        }, _0x5b4235 = _0x46bec1[_0x1a485e(0xe1)]['callFrames'];
    InspectorTest['log'](_0x21ee1a[_0x1a485e(0xe2)]('Number\x20of\x20frames:\x20', _0x5b4235[_0x1a485e(0xcf)]));
    for (var _0x400169 = -0x1a5c + -0x1789 + -0x31e5 * -0x1; _0x21ee1a[_0x1a485e(0xe3)](_0x400169, _0x5b4235['length']); ++_0x400169) {
        InspectorTest[_0x1a485e(0xe4)](_0x21ee1a[_0x1a485e(0xe2)](_0x21ee1a['TpCmO'](_0x21ee1a[_0x1a485e(0xe2)](_0x21ee1a['dahuX'], _0x400169), ']\x20'), _0x21ee1a[_0x1a485e(0xe5)](locationToString, _0x5b4235[_0x400169])));
    }
}
function handleDebuggerPaused(_0x2593c2) {
    var _0x419e3a = _0x37b2ef, _0x6e2574 = {
            'pkMaw': function (_0xfe0bc7, _0x1fb89b) {
                return _0xfe0bc7(_0x1fb89b);
            },
            'QocLR': _0x419e3a(0xe6)
        };
    InspectorTest[_0x419e3a(0xe4)](_0x419e3a(0xe7)), _0x6e2574[_0x419e3a(0xe8)](logStackTrace, _0x2593c2), InspectorTest['log'](_0x419e3a(0xe9));
    var _0x4a541a = _0x2593c2[_0x419e3a(0xe1)][_0x419e3a(0xea)][-0x1 * 0x257 + -0x1 * 0x1a76 + 0x1ccd]['callFrameId'];
    Protocol[_0x419e3a(0xd4)][_0x419e3a(0xeb)]({
        'callFrameId': _0x4a541a,
        'expression': _0x6e2574[_0x419e3a(0xec)]
    })[_0x419e3a(0xed)](callbackEvaluate);
}
function callbackEvaluate(_0x157272) {
    var _0x31dcc4 = _0x37b2ef, _0x177c07 = {
            'IEsVT': function (_0x3b4896, _0x72a707) {
                return _0x3b4896 + _0x72a707;
            },
            'bBWDM': 'Result\x20of\x20evaluate\x20('
        }, _0x17ede2 = _0x31dcc4(0xee)[_0x31dcc4(0xef)]('|'), _0x29a940 = -0xe * -0x88 + -0xca1 + -0x3 * -0x1bb;
    while (!![]) {
        switch (_0x17ede2[_0x29a940++]) {
        case '0':
            _0x3bb963[0x161 * 0xe + 0xe * 0xf4 + 0x3d * -0x89] = _0x31dcc4(0xf0);
            continue;
        case '1':
            InspectorTest[_0x31dcc4(0xe4)](_0x177c07[_0x31dcc4(0xf1)](_0x177c07['bBWDM'] + _0x157272[_0x31dcc4(0xf2)][_0x31dcc4(0xf2)]['type'], '):'));
            continue;
        case '2':
            InspectorTest['log'](_0x31dcc4(0xf3));
            continue;
        case '3':
            var _0x3bb963 = _0x157272[_0x31dcc4(0xf2)][_0x31dcc4(0xf2)][_0x31dcc4(0xf4)]['split']('\x0a');
            continue;
        case '4':
            InspectorTest[_0x31dcc4(0xe4)](_0x3bb963[_0x31dcc4(0xf5)]('\x0a'));
            continue;
        case '5':
            InspectorTest[_0x31dcc4(0xf6)]();
            continue;
        }
        break;
    }
}
