utils['load'](_0x11bff6(471));
let {session, contextGroup, Protocol} = InspectorTest[_0x11bff6(472)](_0x11bff6(473));
function _0x3751(_0x35a1d7, _0x4eedad) {
    return _0x3751 = function (_0x5612bf, _0x53221c) {
        _0x5612bf = _0x5612bf - (1 * 2113 + 8985 + -1 * 10641);
        var _0xb1ec8d = _0x45f9[_0x5612bf];
        return _0xb1ec8d;
    }, _0x3751(_0x35a1d7, _0x4eedad);
}
var builder = new WasmModuleBuilder(), imported_idx = builder[_0x11bff6(474)](_0x11bff6(475), _0x11bff6(476), kSig_v_v), call_imported_idx = builder[_0x11bff6(477)](_0x11bff6(478), kSig_v_v)[_0x11bff6(479)]([
        kExprCallFunction,
        imported_idx
    ])[_0x11bff6(480)], sig_index = builder[_0x11bff6(481)](kSig_v_v);
builder[_0x11bff6(477)]('main', kSig_v_v)[_0x11bff6(479)]([
    kExprBlock,
    kWasmVoid,
    kExprI32Const,
    21 * -45 + -9704 + 10649,
    kExprCallIndirect,
    sig_index,
    kTableZero,
    kExprEnd
])['exportAs'](_0x11bff6(482)), builder['appendToTable']([call_imported_idx]);
var module_bytes = builder[_0x11bff6(483)]();
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
    var _0x41e7d6 = new ArrayBuffer(_0x4a6ad0[_0x4d139a(484)]), _0x28d33d = new Uint8Array(_0x41e7d6);
    for (var _0x56aa41 = 3 * 3216 + 9634 + -19282; _0x8b5ef4[_0x4d139a(485)](_0x56aa41, _0x4a6ad0[_0x4d139a(484)]); _0x56aa41++) {
        _0x28d33d[_0x56aa41] = _0x8b5ef4[_0x4d139a(486)](_0x4a6ad0[_0x56aa41], -508 * -16 + -610 * -1 + -1 * 8738);
    }
    var _0xc3a4f2 = new WebAssembly['Module'](_0x41e7d6), _0x2d4abd = new WebAssembly[(_0x4d139a(487))](_0xc3a4f2, { 'xxx': { 'func': _0x29f499 } });
    _0x2d4abd[_0x4d139a(488)][_0x4d139a(482)]();
}
contextGroup[_0x11bff6(489)](testFunction['toString']()), contextGroup['addScript'](_0x11bff6(490) + JSON['stringify'](module_bytes)), Protocol[_0x11bff6(491)][_0x11bff6(492)](), Protocol[_0x11bff6(491)][_0x11bff6(493)](handleDebuggerPaused), InspectorTest[_0x11bff6(494)](_0x11bff6(495)), Protocol[_0x11bff6(496)][_0x11bff6(497)]({ 'expression': _0x11bff6(498) });
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
            'ylKcL': _0x84eadc(499),
            'WhIbb': _0x84eadc(500),
            'JrjEi': 'Paused on debugger!',
            'JfEsq': 'Number of frames: ',
            'ufHRI': function (_0x4e1f37, _0x291a4e) {
                return _0x4e1f37 < _0x291a4e;
            },
            'aImYj': function (_0x285805, _0x59cc7a, _0x50505d) {
                return _0x285805(_0x59cc7a, _0x50505d);
            },
            'QbJlc': _0x84eadc(501)
        };
    InspectorTest[_0x84eadc(494)](_0x2e4234[_0x84eadc(502)]);
    var _0x1a6067 = _0x1c854e[_0x84eadc(503)][_0x84eadc(504)];
    InspectorTest['log'](_0x2e4234[_0x84eadc(505)](_0x2e4234[_0x84eadc(506)], _0x1a6067['length']));
    async function _0x19f7f8(_0x5aba3e, _0x22bcdf) {
        var _0x48fb73 = _0x84eadc;
        if (_0x22bcdf[_0x48fb73(507)])
            InspectorTest[_0x48fb73(508)](_0x22bcdf);
        var _0x4fc30d = _0x22bcdf[_0x48fb73(509)][_0x48fb73(510)], _0x22d07f = _0x1a6067[_0x5aba3e][_0x48fb73(511)][_0x48fb73(512)];
        if (_0x4fc30d) {
            var _0x19c40a = _0x4fc30d['split']('\n')[_0x22d07f];
            InspectorTest[_0x48fb73(494)](_0x2e4234[_0x48fb73(513)](_0x2e4234[_0x48fb73(513)](_0x2e4234[_0x48fb73(513)]('[', _0x5aba3e), '] '), _0x19c40a));
        } else {
            _0x2e4234[_0x48fb73(514)](_0x22d07f, -316 * -7 + 5 * 1322 + -8822) && InspectorTest['log'](_0x2e4234[_0x48fb73(515)](_0x48fb73(516), _0x22d07f));
            let _0x47bb3a = _0x1a6067[_0x5aba3e][_0x48fb73(511)]['columnNumber'], _0x55c57f = InspectorTest[_0x48fb73(517)](_0x22bcdf[_0x48fb73(509)][_0x48fb73(518)]);
            InspectorTest[_0x48fb73(494)](_0x2e4234['UlAuO'](_0x2e4234[_0x48fb73(505)]('[' + _0x5aba3e + _0x2e4234[_0x48fb73(519)], _0x47bb3a), _0x2e4234[_0x48fb73(520)]) + _0x55c57f[_0x47bb3a][_0x48fb73(521)](6848 + -1076 + -2878 * 2));
        }
    }
    for (let _0x48ad9e = 3 * -1723 + -5464 + 10633 * 1; _0x2e4234['ufHRI'](_0x48ad9e, _0x1a6067[_0x84eadc(484)]); _0x48ad9e++) {
        result = await Protocol['Debugger'][_0x84eadc(522)]({ 'scriptId': _0x1a6067[_0x48ad9e][_0x84eadc(511)][_0x84eadc(523)] }), await _0x2e4234[_0x84eadc(524)](_0x19f7f8, _0x48ad9e, result);
    }
    InspectorTest[_0x84eadc(494)](_0x2e4234['QbJlc']), InspectorTest[_0x84eadc(525)]();
}