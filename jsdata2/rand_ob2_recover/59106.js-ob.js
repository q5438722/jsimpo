utils[_0x5e64a7(240)](_0x5e64a7(241));
let {session, contextGroup, Protocol} = InspectorTest['start'](_0x5e64a7(242));
var builder = new WasmModuleBuilder(), imported_idx = builder['addImport'](_0x5e64a7(243), _0x5e64a7(244), kSig_v_v), call_imported_idx = builder[_0x5e64a7(245)](_0x5e64a7(246), kSig_v_v)[_0x5e64a7(247)]([
        kExprCallFunction,
        imported_idx
    ])[_0x5e64a7(248)], sig_index = builder[_0x5e64a7(249)](kSig_v_v);
function _0x18a8(_0x446949, _0x5d14d9) {
    return _0x18a8 = function (_0x4cb126, _0x18a846) {
        _0x4cb126 = _0x4cb126 - 229;
        var _0x407bd4 = _0x4cb1[_0x4cb126];
        return _0x407bd4;
    }, _0x18a8(_0x446949, _0x5d14d9);
}
builder[_0x5e64a7(245)]('main', kSig_v_v)[_0x5e64a7(247)]([
    kExprBlock,
    kWasmVoid,
    kExprI32Const,
    0,
    kExprCallIndirect,
    sig_index,
    kTableZero,
    kExprEnd
])[_0x5e64a7(250)](_0x5e64a7(251)), builder[_0x5e64a7(252)]([call_imported_idx]);
var module_bytes = builder[_0x5e64a7(253)]();
function testFunction(_0x85423f) {
    var _0x508467 = _0x5e64a7;
    function _0x15a0f5() {
        debugger;
    }
    var _0x3c3109 = new ArrayBuffer(_0x85423f[_0x508467(254)]), _0x2b6993 = new Uint8Array(_0x3c3109);
    for (var _0x4de54e = 0; _0x4de54e < _0x85423f[_0x508467(254)]; _0x4de54e++) {
        _0x2b6993[_0x4de54e] = _0x85423f[_0x4de54e] | 0;
    }
    var _0x20dd82 = new WebAssembly['Module'](_0x3c3109), _0x1d65ec = new WebAssembly['Instance'](_0x20dd82, { 'xxx': { 'func': _0x15a0f5 } });
    _0x1d65ec[_0x508467(255)][_0x508467(251)]();
}
contextGroup[_0x5e64a7(256)](testFunction['toString']()), contextGroup[_0x5e64a7(256)](_0x5e64a7(257) + JSON['stringify'](module_bytes)), Protocol['Debugger'][_0x5e64a7(258)](), Protocol[_0x5e64a7(259)][_0x5e64a7(260)](handleDebuggerPaused), InspectorTest[_0x5e64a7(261)]('Check that inspector gets wasm bytecode'), Protocol['Runtime']['evaluate']({ 'expression': _0x5e64a7(262) });
async function handleDebuggerPaused(_0x14e350) {
    var _0x4edd77 = _0x5e64a7;
    InspectorTest['log'](_0x4edd77(263));
    var _0x30b0b0 = _0x14e350[_0x4edd77(264)][_0x4edd77(265)];
    InspectorTest[_0x4edd77(261)](_0x4edd77(266) + _0x30b0b0['length']);
    async function _0xff7826(_0x565814, _0xe54b1e) {
        var _0x30aeab = _0x4edd77;
        if (_0xe54b1e[_0x30aeab(267)])
            InspectorTest[_0x30aeab(268)](_0xe54b1e);
        var _0x316372 = _0xe54b1e['result'][_0x30aeab(269)], _0x19773e = _0x30b0b0[_0x565814][_0x30aeab(270)][_0x30aeab(271)];
        if (_0x316372) {
            var _0x164ab8 = _0x316372[_0x30aeab(272)]('\n')[_0x19773e];
            InspectorTest[_0x30aeab(261)]('[' + _0x565814 + '] ' + _0x164ab8);
        } else {
            _0x19773e != 0 && InspectorTest[_0x30aeab(261)](_0x30aeab(273) + _0x19773e);
            let _0x3b0f71 = _0x30b0b0[_0x565814][_0x30aeab(270)]['columnNumber'], _0x336706 = InspectorTest[_0x30aeab(274)](_0xe54b1e['result'][_0x30aeab(275)]);
            InspectorTest['log']('[' + _0x565814 + '] Wasm offset ' + _0x3b0f71 + _0x30aeab(276) + _0x336706[_0x3b0f71][_0x30aeab(277)](16));
        }
    }
    for (let _0x2c4f39 = 0; _0x2c4f39 < _0x30b0b0[_0x4edd77(254)]; _0x2c4f39++) {
        result = await Protocol[_0x4edd77(259)]['getScriptSource']({ 'scriptId': _0x30b0b0[_0x2c4f39]['location'][_0x4edd77(278)] }), await _0xff7826(_0x2c4f39, result);
    }
    InspectorTest[_0x4edd77(261)](_0x4edd77(279)), InspectorTest[_0x4edd77(280)]();
}