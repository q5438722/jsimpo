var _0x45f9 = [
    'gecJQ',
    'UlAuO',
    'Unexpected\x20line\x20number\x20in\x20wasm:\x20',
    'decodeBase64',
    'bytecode',
    'ylKcL',
    'WhIbb',
    'toString',
    'getScriptSource',
    'scriptId',
    'aImYj',
    'completeTest',
    '715xsXSrn',
    '1759AslwtA',
    '1ETalcX',
    '791053NtksIG',
    '1bAOQBx',
    '612497YSGtgm',
    '2383jdPlGo',
    '618pXeQcL',
    '40466gNFCOh',
    '4QxVrzg',
    '28981xrMfoz',
    '50RZPKhL',
    '134278TneOPO',
    '4GYoyac',
    'test/inspector/wasm-inspector-test.js',
    'start',
    'Tests\x20how\x20wasm\x20scrips\x20report\x20the\x20source',
    'addImport',
    'xxx',
    'func',
    'addFunction',
    'call_func',
    'addBody',
    'index',
    'addType',
    'main',
    'toArray',
    'length',
    'dEnlH',
    'WNfqb',
    'Instance',
    'exports',
    'addScript',
    'var\x20module_bytes\x20=\x20',
    'Debugger',
    'enable',
    'onPaused',
    'log',
    'Check\x20that\x20inspector\x20gets\x20wasm\x20bytecode',
    'Runtime',
    'evaluate',
    'testFunction(module_bytes)',
    ']\x20Wasm\x20offset\x20',
    ':\x200x',
    'Finished.',
    'JrjEi',
    'params',
    'callFrames',
    'FPxSF',
    'JfEsq',
    'error',
    'logObject',
    'result',
    'scriptSource',
    'location',
    'lineNumber',
    'rzGhs'
];
var _0x11bff6 = _0x3751;
(function (_0x456199, _0x295490) {
    var _0x10a777 = _0x3751;
    while (!![]) {
        try {
            var _0x4d77fa = -parseInt(_0x10a777(0x1c9)) * -parseInt(_0x10a777(0x1ca)) + -parseInt(_0x10a777(0x1cb)) * -parseInt(_0x10a777(0x1cc)) + parseInt(_0x10a777(0x1cd)) * -parseInt(_0x10a777(0x1ce)) + -parseInt(_0x10a777(0x1cf)) * -parseInt(_0x10a777(0x1d0)) + -parseInt(_0x10a777(0x1d1)) * parseInt(_0x10a777(0x1d2)) + parseInt(_0x10a777(0x1d3)) * -parseInt(_0x10a777(0x1d4)) + parseInt(_0x10a777(0x1d5)) * -parseInt(_0x10a777(0x1d6));
            if (_0x4d77fa === _0x295490)
                break;
            else
                _0x456199['push'](_0x456199['shift']());
        } catch (_0x14f53d) {
            _0x456199['push'](_0x456199['shift']());
        }
    }
}(_0x45f9, 0x15c48 * -0x1 + -0x43d9 * -0x47 + -0x4407 * 0x16), utils['load'](_0x11bff6(0x1d7)));
let {session, contextGroup, Protocol} = InspectorTest[_0x11bff6(0x1d8)](_0x11bff6(0x1d9));
function _0x3751(_0x35a1d7, _0x4eedad) {
    return _0x3751 = function (_0x5612bf, _0x53221c) {
        _0x5612bf = _0x5612bf - (0x1 * 0x841 + 0x2319 + -0x1 * 0x2991);
        var _0xb1ec8d = _0x45f9[_0x5612bf];
        return _0xb1ec8d;
    }, _0x3751(_0x35a1d7, _0x4eedad);
}
var builder = new WasmModuleBuilder(), imported_idx = builder[_0x11bff6(0x1da)](_0x11bff6(0x1db), _0x11bff6(0x1dc), kSig_v_v), call_imported_idx = builder[_0x11bff6(0x1dd)](_0x11bff6(0x1de), kSig_v_v)[_0x11bff6(0x1df)]([
        kExprCallFunction,
        imported_idx
    ])[_0x11bff6(0x1e0)], sig_index = builder[_0x11bff6(0x1e1)](kSig_v_v);
builder[_0x11bff6(0x1dd)]('main', kSig_v_v)[_0x11bff6(0x1df)]([
    kExprBlock,
    kWasmVoid,
    kExprI32Const,
    0x15 * -0x2d + -0x25e8 + 0x2999,
    kExprCallIndirect,
    sig_index,
    kTableZero,
    kExprEnd
])['exportAs'](_0x11bff6(0x1e2)), builder['appendToTable']([call_imported_idx]);
var module_bytes = builder[_0x11bff6(0x1e3)]();
function testFunction(_0x4a6ad0) {
    var _0x4d139a = _0x11bff6, _0x8b5ef4 = {
            'dEnlH': function (_0xf26c9a, _0x36b04e) {
                return _0xf26c9a < _0x36b04e;
            },
            'WNfqb': function (_0x4601aa, _0x10e94c) {
                return _0x4601aa | _0x10e94c;
            }
        };
    function _0x29f499() {
        debugger;
    }
    var _0x41e7d6 = new ArrayBuffer(_0x4a6ad0[_0x4d139a(0x1e4)]), _0x28d33d = new Uint8Array(_0x41e7d6);
    for (var _0x56aa41 = 0x3 * 0xc90 + 0x25a2 + -0x4b52; _0x8b5ef4[_0x4d139a(0x1e5)](_0x56aa41, _0x4a6ad0[_0x4d139a(0x1e4)]); _0x56aa41++) {
        _0x28d33d[_0x56aa41] = _0x8b5ef4[_0x4d139a(0x1e6)](_0x4a6ad0[_0x56aa41], -0x1fc * -0x10 + -0x262 * -0x1 + -0x1 * 0x2222);
    }
    var _0xc3a4f2 = new WebAssembly['Module'](_0x41e7d6), _0x2d4abd = new WebAssembly[(_0x4d139a(0x1e7))](_0xc3a4f2, { 'xxx': { 'func': _0x29f499 } });
    _0x2d4abd[_0x4d139a(0x1e8)][_0x4d139a(0x1e2)]();
}
contextGroup[_0x11bff6(0x1e9)](testFunction['toString']()), contextGroup['addScript'](_0x11bff6(0x1ea) + JSON['stringify'](module_bytes)), Protocol[_0x11bff6(0x1eb)][_0x11bff6(0x1ec)](), Protocol[_0x11bff6(0x1eb)][_0x11bff6(0x1ed)](handleDebuggerPaused), InspectorTest[_0x11bff6(0x1ee)](_0x11bff6(0x1ef)), Protocol[_0x11bff6(0x1f0)][_0x11bff6(0x1f1)]({ 'expression': _0x11bff6(0x1f2) });
async function handleDebuggerPaused(_0x1c854e) {
    var _0x84eadc = _0x11bff6, _0x2e4234 = {
            'rzGhs': function (_0x205cb5, _0x3c8149) {
                return _0x205cb5 + _0x3c8149;
            },
            'gecJQ': function (_0x2fdbfc, _0x3ed933) {
                return _0x2fdbfc != _0x3ed933;
            },
            'UlAuO': function (_0x5015ac, _0x161502) {
                return _0x5015ac + _0x161502;
            },
            'FPxSF': function (_0x97225e, _0x13fe25) {
                return _0x97225e + _0x13fe25;
            },
            'ylKcL': _0x84eadc(0x1f3),
            'WhIbb': _0x84eadc(0x1f4),
            'JrjEi': 'Paused\x20on\x20debugger!',
            'JfEsq': 'Number\x20of\x20frames:\x20',
            'ufHRI': function (_0x4e1f37, _0x291a4e) {
                return _0x4e1f37 < _0x291a4e;
            },
            'aImYj': function (_0x285805, _0x59cc7a, _0x50505d) {
                return _0x285805(_0x59cc7a, _0x50505d);
            },
            'QbJlc': _0x84eadc(0x1f5)
        };
    InspectorTest[_0x84eadc(0x1ee)](_0x2e4234[_0x84eadc(0x1f6)]);
    var _0x1a6067 = _0x1c854e[_0x84eadc(0x1f7)][_0x84eadc(0x1f8)];
    InspectorTest['log'](_0x2e4234[_0x84eadc(0x1f9)](_0x2e4234[_0x84eadc(0x1fa)], _0x1a6067['length']));
    async function _0x19f7f8(_0x5aba3e, _0x22bcdf) {
        var _0x48fb73 = _0x84eadc;
        if (_0x22bcdf[_0x48fb73(0x1fb)])
            InspectorTest[_0x48fb73(0x1fc)](_0x22bcdf);
        var _0x4fc30d = _0x22bcdf[_0x48fb73(0x1fd)][_0x48fb73(0x1fe)], _0x22d07f = _0x1a6067[_0x5aba3e][_0x48fb73(0x1ff)][_0x48fb73(0x200)];
        if (_0x4fc30d) {
            var _0x19c40a = _0x4fc30d['split']('\x0a')[_0x22d07f];
            InspectorTest[_0x48fb73(0x1ee)](_0x2e4234[_0x48fb73(0x201)](_0x2e4234[_0x48fb73(0x201)](_0x2e4234[_0x48fb73(0x201)]('[', _0x5aba3e), ']\x20'), _0x19c40a));
        } else {
            _0x2e4234[_0x48fb73(0x202)](_0x22d07f, -0x13c * -0x7 + 0x5 * 0x52a + -0x2276) && InspectorTest['log'](_0x2e4234[_0x48fb73(0x203)](_0x48fb73(0x204), _0x22d07f));
            let _0x47bb3a = _0x1a6067[_0x5aba3e][_0x48fb73(0x1ff)]['columnNumber'], _0x55c57f = InspectorTest[_0x48fb73(0x205)](_0x22bcdf[_0x48fb73(0x1fd)][_0x48fb73(0x206)]);
            InspectorTest[_0x48fb73(0x1ee)](_0x2e4234['UlAuO'](_0x2e4234[_0x48fb73(0x1f9)]('[' + _0x5aba3e + _0x2e4234[_0x48fb73(0x207)], _0x47bb3a), _0x2e4234[_0x48fb73(0x208)]) + _0x55c57f[_0x47bb3a][_0x48fb73(0x209)](0x1ac0 + -0x434 + -0xb3e * 0x2));
        }
    }
    for (let _0x48ad9e = 0x3 * -0x6bb + -0x1558 + 0x2989 * 0x1; _0x2e4234['ufHRI'](_0x48ad9e, _0x1a6067[_0x84eadc(0x1e4)]); _0x48ad9e++) {
        result = await Protocol['Debugger'][_0x84eadc(0x20a)]({ 'scriptId': _0x1a6067[_0x48ad9e][_0x84eadc(0x1ff)][_0x84eadc(0x20b)] }), await _0x2e4234[_0x84eadc(0x20c)](_0x19f7f8, _0x48ad9e, result);
    }
    InspectorTest[_0x84eadc(0x1ee)](_0x2e4234['QbJlc']), InspectorTest[_0x84eadc(0x20d)]();
}
