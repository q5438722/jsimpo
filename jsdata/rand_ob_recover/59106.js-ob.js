utils[_0x4f35e5(227)](_0x4f35e5(228));
function _0x2a60(_0x3fa936, _0x37334f) {
    return _0x2a60 = function (_0x15a2d7, _0x2ce097) {
        _0x15a2d7 = _0x15a2d7 - (-5422 + 141 + 5499);
        var _0x244ee8 = _0x257d[_0x15a2d7];
        return _0x244ee8;
    }, _0x2a60(_0x3fa936, _0x37334f);
}
let {session, contextGroup, Protocol} = InspectorTest[_0x4f35e5(229)](_0x4f35e5(230));
var builder = new WasmModuleBuilder(), imported_idx = builder[_0x4f35e5(231)]('xxx', _0x4f35e5(232), kSig_v_v), call_imported_idx = builder[_0x4f35e5(233)]('call_func', kSig_v_v)[_0x4f35e5(234)]([
        kExprCallFunction,
        imported_idx
    ])['index'], sig_index = builder[_0x4f35e5(235)](kSig_v_v);
builder[_0x4f35e5(233)](_0x4f35e5(236), kSig_v_v)[_0x4f35e5(234)]([
    kExprBlock,
    kWasmVoid,
    kExprI32Const,
    -1 * -2165 + 4108 + -6273,
    kExprCallIndirect,
    sig_index,
    kTableZero,
    kExprEnd
])[_0x4f35e5(237)](_0x4f35e5(236)), builder[_0x4f35e5(238)]([call_imported_idx]);
var module_bytes = builder[_0x4f35e5(239)]();
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
    var _0x457be7 = new ArrayBuffer(_0x382930[_0x1ba6bf(240)]), _0x380b57 = new Uint8Array(_0x457be7);
    for (var _0x3291a5 = 7128 + -8712 + -72 * -22; _0x53daff['kWsaD'](_0x3291a5, _0x382930['length']); _0x3291a5++) {
        _0x380b57[_0x3291a5] = _0x53daff[_0x1ba6bf(241)](_0x382930[_0x3291a5], -6505 + 1 * 983 + -2761 * -2);
    }
    var _0x57ed14 = new WebAssembly[(_0x1ba6bf(242))](_0x457be7), _0x3de676 = new WebAssembly[(_0x1ba6bf(243))](_0x57ed14, { 'xxx': { 'func': _0x32a18e } });
    _0x3de676[_0x1ba6bf(244)][_0x1ba6bf(236)]();
}
contextGroup['addScript'](testFunction[_0x4f35e5(245)]()), contextGroup[_0x4f35e5(246)]('var module_bytes = ' + JSON[_0x4f35e5(247)](module_bytes)), Protocol[_0x4f35e5(248)][_0x4f35e5(249)](), Protocol['Debugger']['onPaused'](handleDebuggerPaused), InspectorTest[_0x4f35e5(250)](_0x4f35e5(251)), Protocol[_0x4f35e5(252)][_0x4f35e5(253)]({ 'expression': 'testFunction(module_bytes)' });
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
            'scZWx': 'Unexpected line number in wasm: ',
            'gTKiD': function (_0x3b98ee, _0x4b7ffc) {
                return _0x3b98ee + _0x4b7ffc;
            },
            'aSzID': function (_0x4a8bea, _0x4c6d33) {
                return _0x4a8bea + _0x4c6d33;
            },
            'osPUq': _0x39f948(254),
            'uHnoo': _0x39f948(255),
            'TItjg': _0x39f948(256),
            'lhVtu': _0x39f948(257),
            'satLB': function (_0xa12006, _0x1870bc) {
                return _0xa12006 < _0x1870bc;
            },
            'CWlKP': function (_0x25b7d8, _0x423f5d, _0x33e514) {
                return _0x25b7d8(_0x423f5d, _0x33e514);
            }
        };
    InspectorTest[_0x39f948(250)](_0x31540c['TItjg']);
    var _0x12f877 = _0x528ee4['params'][_0x39f948(258)];
    InspectorTest[_0x39f948(250)](_0x31540c[_0x39f948(259)](_0x31540c[_0x39f948(260)], _0x12f877[_0x39f948(240)]));
    async function _0x1e7410(_0x14bf24, _0x5a9d85) {
        var _0x34070f = _0x39f948;
        if (_0x5a9d85[_0x34070f(261)])
            InspectorTest[_0x34070f(262)](_0x5a9d85);
        var _0xd10857 = _0x5a9d85[_0x34070f(263)][_0x34070f(264)], _0x375b58 = _0x12f877[_0x14bf24][_0x34070f(265)]['lineNumber'];
        if (_0xd10857) {
            var _0x3fc0d5 = _0xd10857['split']('\n')[_0x375b58];
            InspectorTest[_0x34070f(250)](_0x31540c[_0x34070f(266)](_0x31540c['XdGsR'](_0x31540c[_0x34070f(267)]('[', _0x14bf24), '] '), _0x3fc0d5));
        } else {
            _0x31540c[_0x34070f(268)](_0x375b58, -4818 + 8728 + -85 * 46) && InspectorTest[_0x34070f(250)](_0x31540c[_0x34070f(269)] + _0x375b58);
            let _0x12b317 = _0x12f877[_0x14bf24][_0x34070f(265)]['columnNumber'], _0x199826 = InspectorTest[_0x34070f(270)](_0x5a9d85[_0x34070f(263)][_0x34070f(271)]);
            InspectorTest[_0x34070f(250)](_0x31540c[_0x34070f(267)](_0x31540c[_0x34070f(272)](_0x31540c[_0x34070f(259)](_0x31540c[_0x34070f(259)](_0x31540c[_0x34070f(259)]('[', _0x14bf24), _0x31540c['osPUq']), _0x12b317), _0x31540c[_0x34070f(273)]), _0x199826[_0x12b317][_0x34070f(245)](5085 + -2 * 4145 + 3221)));
        }
    }
    for (let _0x34d771 = -826 * -6 + 9907 + -14863; _0x31540c[_0x39f948(274)](_0x34d771, _0x12f877[_0x39f948(240)]); _0x34d771++) {
        result = await Protocol['Debugger']['getScriptSource']({ 'scriptId': _0x12f877[_0x34d771]['location'][_0x39f948(275)] }), await _0x31540c[_0x39f948(276)](_0x1e7410, _0x34d771, result);
    }
    InspectorTest['log']('Finished.'), InspectorTest[_0x39f948(277)]();
}