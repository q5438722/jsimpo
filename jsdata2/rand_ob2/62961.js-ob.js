const _0x763b = [
    '2305ESXhLX',
    '50623MmoIFT',
    '10926woVIra',
    '291SwmjhB',
    'test/mjsunit/wasm/wasm-module-builder.js',
    'callee',
    'name',
    'addTable',
    'exportAs',
    'table',
    'index',
    'addFunction',
    'addActiveElementSegment',
    'I32Const',
    'exports',
    'get',
    'addImportedTable',
    'addExportOfKind',
    'table2',
    'table4',
    'addBody',
    'instantiate',
    'table3',
    '53169XtUVLI',
    '21VJpoaW',
    '855092NKZEHB',
    '650428XBLrHw',
    '1603741oPoOWS',
    '139THmlBB'
];
const _0x35731d = _0x300c;
function _0x300c(_0x9a957b, _0x2d07da) {
    return _0x300c = function (_0x763b57, _0x300c45) {
        _0x763b57 = _0x763b57 - 0x118;
        let _0x10531b = _0x763b[_0x763b57];
        return _0x10531b;
    }, _0x300c(_0x9a957b, _0x2d07da);
}
(function (_0x4421e2, _0x559a1d) {
    const _0xab9b5a = _0x300c;
    while (!![]) {
        try {
            const _0x1416d7 = -parseInt(_0xab9b5a(0x118)) * -parseInt(_0xab9b5a(0x119)) + -parseInt(_0xab9b5a(0x11a)) + -parseInt(_0xab9b5a(0x11b)) + -parseInt(_0xab9b5a(0x11c)) + -parseInt(_0xab9b5a(0x11d)) * parseInt(_0xab9b5a(0x11e)) + -parseInt(_0xab9b5a(0x11f)) + parseInt(_0xab9b5a(0x120)) * parseInt(_0xab9b5a(0x121));
            if (_0x1416d7 === _0x559a1d)
                break;
            else
                _0x4421e2['push'](_0x4421e2['shift']());
        } catch (_0x3c62c0) {
            _0x4421e2['push'](_0x4421e2['shift']());
        }
    }
}(_0x763b, 0xc7278), load(_0x35731d(0x122)), function TestInitMultipleTables() {
    const _0x216574 = _0x35731d;
    print(arguments[_0x216574(0x123)][_0x216574(0x124)]);
    const _0x4fc079 = 0xb, _0x3cc6b4 = 0x16, _0x1cc5e0 = 0x2e, _0x125925 = 0x39, _0x2c9489 = 0xd, _0x55c860 = 0x2, _0x428b0b = _0x55c860 + 0x1, _0x325558 = 0x4, _0x18a6e6 = 0x1, _0x4350c8 = function () {
            const _0x41defe = _0x216574, _0x3ff94e = new WasmModuleBuilder(), _0x86e24a = _0x3ff94e[_0x41defe(0x125)](kWasmAnyFunc, 0xf, 0xf)[_0x41defe(0x126)](_0x41defe(0x127))[_0x41defe(0x128)], _0x1d1f25 = _0x3ff94e[_0x41defe(0x129)]('f1', kSig_i_v)['addBody']([
                    kExprI32Const,
                    _0x4fc079
                ])['index'], _0x214bee = _0x3ff94e[_0x41defe(0x129)]('f2', kSig_i_v)['addBody']([
                    kExprI32Const,
                    _0x3cc6b4
                ])['index'];
            _0x3ff94e[_0x41defe(0x12a)](_0x86e24a, WasmInitExpr[_0x41defe(0x12b)](_0x55c860), [
                _0x1d1f25,
                _0x214bee
            ]);
            const _0x5c5208 = _0x3ff94e['instantiate'](), _0x564ab0 = _0x5c5208[_0x41defe(0x12c)][_0x41defe(0x127)];
            return assertEquals(_0x4fc079, _0x564ab0[_0x41defe(0x12d)](_0x55c860)()), assertEquals(_0x3cc6b4, _0x564ab0[_0x41defe(0x12d)](_0x55c860 + 0x1)()), _0x5c5208;
        }(), _0x103c66 = new WasmModuleBuilder(), _0x1a1076 = _0x103c66[_0x216574(0x12e)](_0x216574(0x12c), 'table', 0xf, 0xf);
    _0x103c66[_0x216574(0x12f)](_0x216574(0x130), kExternalTable, _0x1a1076);
    const _0x6f713d = _0x103c66[_0x216574(0x125)](kWasmAnyFunc, 0xa)[_0x216574(0x126)]('table3')[_0x216574(0x128)], _0x1523b5 = _0x103c66[_0x216574(0x125)](kWasmAnyFunc, 0xc)['exportAs'](_0x216574(0x131))[_0x216574(0x128)], _0x1c376e = _0x103c66['addFunction']('f3', kSig_i_v)[_0x216574(0x132)]([
            kExprI32Const,
            _0x1cc5e0
        ])[_0x216574(0x128)], _0x612dae = _0x103c66[_0x216574(0x129)]('f4', kSig_i_v)[_0x216574(0x132)]([
            kExprI32Const,
            _0x125925
        ])[_0x216574(0x128)], _0x1c8e70 = _0x103c66[_0x216574(0x129)]('f5', kSig_i_v)[_0x216574(0x132)]([
            kExprI32Const,
            _0x2c9489
        ])['index'];
    _0x103c66[_0x216574(0x12a)](_0x1a1076, WasmInitExpr['I32Const'](_0x428b0b), [
        _0x1c376e,
        _0x612dae
    ]), _0x103c66[_0x216574(0x12a)](_0x6f713d, WasmInitExpr['I32Const'](_0x325558), [
        _0x1c8e70,
        _0x612dae
    ]), _0x103c66[_0x216574(0x12a)](_0x1523b5, WasmInitExpr['I32Const'](_0x18a6e6), [
        _0x1c376e,
        _0x1c8e70
    ]), _0x103c66[_0x216574(0x12a)](_0x1523b5, WasmInitExpr[_0x216574(0x12b)](_0x18a6e6 + 0x1), [
        _0x612dae,
        _0x1c376e
    ]);
    const _0x1fcbff = _0x103c66[_0x216574(0x133)](_0x4350c8), _0x4365ad = _0x1fcbff[_0x216574(0x12c)][_0x216574(0x130)], _0x37a19e = _0x1fcbff[_0x216574(0x12c)][_0x216574(0x134)], _0x4d4f7a = _0x1fcbff[_0x216574(0x12c)][_0x216574(0x131)];
    assertEquals(_0x4fc079, _0x4365ad['get'](_0x55c860)()), assertEquals(_0x1cc5e0, _0x4365ad[_0x216574(0x12d)](_0x428b0b)()), assertEquals(_0x125925, _0x4365ad['get'](_0x428b0b + 0x1)()), assertEquals(_0x2c9489, _0x37a19e['get'](_0x325558)()), assertEquals(_0x125925, _0x37a19e[_0x216574(0x12d)](_0x325558 + 0x1)()), assertEquals(_0x1cc5e0, _0x4d4f7a[_0x216574(0x12d)](_0x18a6e6)()), assertEquals(_0x125925, _0x4d4f7a[_0x216574(0x12d)](_0x18a6e6 + 0x1)()), assertEquals(_0x1cc5e0, _0x4d4f7a['get'](_0x18a6e6 + 0x2)());
}());