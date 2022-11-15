utils[_0x37b2ef(194)]('test/inspector/wasm-inspector-test.js');
let {session, contextGroup, Protocol} = InspectorTest[_0x37b2ef(195)](_0x37b2ef(196));
var builder = new WasmModuleBuilder(), imported_idx = builder[_0x37b2ef(197)](_0x37b2ef(198), _0x37b2ef(199), kSig_v_v), call_imported_idx = builder[_0x37b2ef(200)](_0x37b2ef(201), kSig_v_v)[_0x37b2ef(202)]([
        kExprCallFunction,
        imported_idx
    ])[_0x37b2ef(203)];
builder[_0x37b2ef(200)](_0x37b2ef(204), kSig_v_v)[_0x37b2ef(202)]([
    kExprBlock,
    kWasmVoid,
    kExprCallFunction,
    call_imported_idx,
    kExprEnd
])[_0x37b2ef(205)](_0x37b2ef(204));
var module_bytes = builder[_0x37b2ef(206)]();
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
    var _0x59f708 = new ArrayBuffer(_0x500f91[_0x41700e(207)]), _0x4696b3 = new Uint8Array(_0x59f708);
    for (var _0x3db9af = 5209 * -1 + -1 * 9063 + -2 * -7136; _0x241fde[_0x41700e(208)](_0x3db9af, _0x500f91[_0x41700e(207)]); _0x3db9af++) {
        _0x4696b3[_0x3db9af] = _0x241fde['lJziQ'](_0x500f91[_0x3db9af], 1739 + -2 * -2139 + -6017);
    }
    var _0xaf51d1 = new WebAssembly[(_0x41700e(209))](_0x59f708), _0x4fedc8 = new WebAssembly[(_0x41700e(210))](_0xaf51d1, { 'mode': { 'func': _0x270914 } });
    _0x4fedc8[_0x41700e(211)][_0x41700e(204)]();
}
function _0x5c8d(_0x7b839a, _0x3cd73e) {
    return _0x5c8d = function (_0x44ebdb, _0x5db420) {
        _0x44ebdb = _0x44ebdb - (2512 * 1 + -1 * 2759 + -431 * -1);
        var _0x219a7f = _0x4c9f[_0x44ebdb];
        return _0x219a7f;
    }, _0x5c8d(_0x7b839a, _0x3cd73e);
}
contextGroup['addScript'](testFunction['toString']()), Protocol[_0x37b2ef(212)]['enable'](), Protocol[_0x37b2ef(212)][_0x37b2ef(213)](handleDebuggerPaused), InspectorTest['log'](_0x37b2ef(214)), Protocol[_0x37b2ef(215)][_0x37b2ef(216)]({ 'expression': 'testFunction(' + JSON[_0x37b2ef(217)](module_bytes) + ')' });
function locationToString(_0x36674e) {
    var _0x1b1e86 = _0x37b2ef, _0x1675b5 = {
            'zcAyv': function (_0x5e2f7b, _0x3f2a60) {
                return _0x5e2f7b + _0x3f2a60;
            },
            'YmPaz': function (_0x2ea50f, _0xa6bc2a) {
                return _0x2ea50f == _0xa6bc2a;
            }
        }, _0x39bbdf = { 'functionName': _0x36674e[_0x1b1e86(218)] };
    for (var _0x40020f in _0x36674e[_0x1b1e86(219)]) {
        if (_0x40020f == _0x1b1e86(220))
            continue;
        _0x39bbdf[_0x1675b5[_0x1b1e86(221)](_0x1b1e86(222), _0x40020f)] = _0x36674e[_0x1b1e86(219)][_0x40020f];
    }
    for (var _0x40020f in _0x36674e[_0x1b1e86(223)]) {
        if (_0x1675b5['YmPaz'](_0x40020f, _0x1b1e86(220)))
            continue;
        _0x39bbdf[_0x40020f] = _0x36674e['location'][_0x40020f];
    }
    return JSON[_0x1b1e86(217)](_0x39bbdf);
}
function logStackTrace(_0x46bec1) {
    var _0x1a485e = _0x37b2ef, _0x21ee1a = {
            'TpCmO': function (_0x25f1cf, _0x15a037) {
                return _0x25f1cf + _0x15a037;
            },
            'ArYoK': function (_0x3399fe, _0x1f631a) {
                return _0x3399fe < _0x1f631a;
            },
            'dahuX': _0x1a485e(224),
            'eotHa': function (_0x5594fe, _0x2ec2ae) {
                return _0x5594fe(_0x2ec2ae);
            }
        }, _0x5b4235 = _0x46bec1[_0x1a485e(225)]['callFrames'];
    InspectorTest['log'](_0x21ee1a[_0x1a485e(226)]('Number of frames: ', _0x5b4235[_0x1a485e(207)]));
    for (var _0x400169 = -6748 + -6025 + -12773 * -1; _0x21ee1a[_0x1a485e(227)](_0x400169, _0x5b4235['length']); ++_0x400169) {
        InspectorTest[_0x1a485e(228)](_0x21ee1a[_0x1a485e(226)](_0x21ee1a['TpCmO'](_0x21ee1a[_0x1a485e(226)](_0x21ee1a['dahuX'], _0x400169), '] '), _0x21ee1a[_0x1a485e(229)](locationToString, _0x5b4235[_0x400169])));
    }
}
function handleDebuggerPaused(_0x2593c2) {
    var _0x419e3a = _0x37b2ef, _0x6e2574 = {
            'pkMaw': function (_0xfe0bc7, _0x1fb89b) {
                return _0xfe0bc7(_0x1fb89b);
            },
            'QocLR': _0x419e3a(230)
        };
    InspectorTest[_0x419e3a(228)](_0x419e3a(231)), _0x6e2574[_0x419e3a(232)](logStackTrace, _0x2593c2), InspectorTest['log'](_0x419e3a(233));
    var _0x4a541a = _0x2593c2[_0x419e3a(225)][_0x419e3a(234)][-1 * 599 + -1 * 6774 + 7373]['callFrameId'];
    Protocol[_0x419e3a(212)][_0x419e3a(235)]({
        'callFrameId': _0x4a541a,
        'expression': _0x6e2574[_0x419e3a(236)]
    })[_0x419e3a(237)](callbackEvaluate);
}
function callbackEvaluate(_0x157272) {
    var _0x31dcc4 = _0x37b2ef, _0x177c07 = {
            'IEsVT': function (_0x3b4896, _0x72a707) {
                return _0x3b4896 + _0x72a707;
            },
            'bBWDM': 'Result of evaluate ('
        }, _0x17ede2 = _0x31dcc4(238)[_0x31dcc4(239)]('|'), _0x29a940 = -14 * -136 + -3233 + -3 * -443;
    while (!![]) {
        switch (_0x17ede2[_0x29a940++]) {
        case '0':
            _0x3bb963[353 * 14 + 14 * 244 + 61 * -137] = _0x31dcc4(240);
            continue;
        case '1':
            InspectorTest[_0x31dcc4(228)](_0x177c07[_0x31dcc4(241)](_0x177c07['bBWDM'] + _0x157272[_0x31dcc4(242)][_0x31dcc4(242)]['type'], '):'));
            continue;
        case '2':
            InspectorTest['log'](_0x31dcc4(243));
            continue;
        case '3':
            var _0x3bb963 = _0x157272[_0x31dcc4(242)][_0x31dcc4(242)][_0x31dcc4(244)]['split']('\n');
            continue;
        case '4':
            InspectorTest[_0x31dcc4(228)](_0x3bb963[_0x31dcc4(245)]('\n'));
            continue;
        case '5':
            InspectorTest[_0x31dcc4(246)]();
            continue;
        }
        break;
    }
}