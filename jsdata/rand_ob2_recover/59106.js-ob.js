utils[_0x28c50c(231)](_0x28c50c(232));
let {session, contextGroup, Protocol} = InspectorTest[_0x28c50c(233)](_0x28c50c(234));
var builder = new WasmModuleBuilder(), imported_idx = builder[_0x28c50c(235)](_0x28c50c(236), 'func', kSig_v_v), call_imported_idx = builder['addFunction'](_0x28c50c(237), kSig_v_v)[_0x28c50c(238)]([
        kExprCallFunction,
        imported_idx
    ])[_0x28c50c(239)], sig_index = builder[_0x28c50c(240)](kSig_v_v);
builder[_0x28c50c(241)](_0x28c50c(242), kSig_v_v)[_0x28c50c(238)]([
    kExprBlock,
    kWasmVoid,
    kExprI32Const,
    0,
    kExprCallIndirect,
    sig_index,
    kTableZero,
    kExprEnd
])[_0x28c50c(243)](_0x28c50c(242)), builder[_0x28c50c(244)]([call_imported_idx]);
var module_bytes = builder[_0x28c50c(245)]();
function testFunction(_0x3e9ed7) {
    var _0x33a2ca = _0x28c50c;
    function _0x34b63f() {
        debugger;
    }
    var _0x17a3e9 = new ArrayBuffer(_0x3e9ed7[_0x33a2ca(246)]), _0x268645 = new Uint8Array(_0x17a3e9);
    for (var _0x1add7f = 0; _0x1add7f < _0x3e9ed7[_0x33a2ca(246)]; _0x1add7f++) {
        _0x268645[_0x1add7f] = _0x3e9ed7[_0x1add7f] | 0;
    }
    var _0x219e6f = new WebAssembly[(_0x33a2ca(247))](_0x17a3e9), _0x287e2d = new WebAssembly[(_0x33a2ca(248))](_0x219e6f, { 'xxx': { 'func': _0x34b63f } });
    _0x287e2d['exports'][_0x33a2ca(242)]();
}
contextGroup[_0x28c50c(249)](testFunction[_0x28c50c(250)]()), contextGroup[_0x28c50c(249)](_0x28c50c(251) + JSON[_0x28c50c(252)](module_bytes)), Protocol['Debugger'][_0x28c50c(253)](), Protocol[_0x28c50c(254)][_0x28c50c(255)](handleDebuggerPaused), InspectorTest[_0x28c50c(256)]('Check that inspector gets wasm bytecode'), Protocol['Runtime'][_0x28c50c(257)]({ 'expression': _0x28c50c(258) });
async function handleDebuggerPaused(_0x215252) {
    var _0x10c6f5 = _0x28c50c;
    InspectorTest[_0x10c6f5(256)](_0x10c6f5(259));
    var _0x114c44 = _0x215252[_0x10c6f5(260)]['callFrames'];
    InspectorTest[_0x10c6f5(256)](_0x10c6f5(261) + _0x114c44['length']);
    async function _0x18ec39(_0x32826b, _0x51a20f) {
        var _0x2475a0 = _0x10c6f5;
        if (_0x51a20f[_0x2475a0(262)])
            InspectorTest[_0x2475a0(263)](_0x51a20f);
        var _0x290946 = _0x51a20f['result'][_0x2475a0(264)], _0x9ac60b = _0x114c44[_0x32826b][_0x2475a0(265)][_0x2475a0(266)];
        if (_0x290946) {
            var _0x4a9f9e = _0x290946['split']('\n')[_0x9ac60b];
            InspectorTest['log']('[' + _0x32826b + '] ' + _0x4a9f9e);
        } else {
            _0x9ac60b != 0 && InspectorTest['log'](_0x2475a0(267) + _0x9ac60b);
            let _0x36d56b = _0x114c44[_0x32826b][_0x2475a0(265)][_0x2475a0(268)], _0x471409 = InspectorTest[_0x2475a0(269)](_0x51a20f[_0x2475a0(270)][_0x2475a0(271)]);
            InspectorTest[_0x2475a0(256)]('[' + _0x32826b + _0x2475a0(272) + _0x36d56b + _0x2475a0(273) + _0x471409[_0x36d56b][_0x2475a0(250)](16));
        }
    }
    for (let _0x178127 = 0; _0x178127 < _0x114c44[_0x10c6f5(246)]; _0x178127++) {
        result = await Protocol[_0x10c6f5(254)][_0x10c6f5(274)]({ 'scriptId': _0x114c44[_0x178127][_0x10c6f5(265)][_0x10c6f5(275)] }), await _0x18ec39(_0x178127, result);
    }
    InspectorTest[_0x10c6f5(256)]('Finished.'), InspectorTest[_0x10c6f5(276)]();
}