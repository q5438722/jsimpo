load(_0x35731d(290)), function TestInitMultipleTables() {
    const _0x216574 = _0x35731d;
    print(arguments[_0x216574(291)][_0x216574(292)]);
    const _0x4fc079 = 11, _0x3cc6b4 = 22, _0x1cc5e0 = 46, _0x125925 = 57, _0x2c9489 = 13, _0x55c860 = 2, _0x428b0b = _0x55c860 + 1, _0x325558 = 4, _0x18a6e6 = 1, _0x4350c8 = function () {
            const _0x41defe = _0x216574, _0x3ff94e = new WasmModuleBuilder(), _0x86e24a = _0x3ff94e[_0x41defe(293)](kWasmAnyFunc, 15, 15)[_0x41defe(294)](_0x41defe(295))[_0x41defe(296)], _0x1d1f25 = _0x3ff94e[_0x41defe(297)]('f1', kSig_i_v)['addBody']([
                    kExprI32Const,
                    _0x4fc079
                ])['index'], _0x214bee = _0x3ff94e[_0x41defe(297)]('f2', kSig_i_v)['addBody']([
                    kExprI32Const,
                    _0x3cc6b4
                ])['index'];
            _0x3ff94e[_0x41defe(298)](_0x86e24a, WasmInitExpr[_0x41defe(299)](_0x55c860), [
                _0x1d1f25,
                _0x214bee
            ]);
            const _0x5c5208 = _0x3ff94e['instantiate'](), _0x564ab0 = _0x5c5208[_0x41defe(300)][_0x41defe(295)];
            return assertEquals(_0x4fc079, _0x564ab0[_0x41defe(301)](_0x55c860)()), assertEquals(_0x3cc6b4, _0x564ab0[_0x41defe(301)](_0x55c860 + 1)()), _0x5c5208;
        }(), _0x103c66 = new WasmModuleBuilder(), _0x1a1076 = _0x103c66[_0x216574(302)](_0x216574(300), 'table', 15, 15);
    _0x103c66[_0x216574(303)](_0x216574(304), kExternalTable, _0x1a1076);
    const _0x6f713d = _0x103c66[_0x216574(293)](kWasmAnyFunc, 10)[_0x216574(294)]('table3')[_0x216574(296)], _0x1523b5 = _0x103c66[_0x216574(293)](kWasmAnyFunc, 12)['exportAs'](_0x216574(305))[_0x216574(296)], _0x1c376e = _0x103c66['addFunction']('f3', kSig_i_v)[_0x216574(306)]([
            kExprI32Const,
            _0x1cc5e0
        ])[_0x216574(296)], _0x612dae = _0x103c66[_0x216574(297)]('f4', kSig_i_v)[_0x216574(306)]([
            kExprI32Const,
            _0x125925
        ])[_0x216574(296)], _0x1c8e70 = _0x103c66[_0x216574(297)]('f5', kSig_i_v)[_0x216574(306)]([
            kExprI32Const,
            _0x2c9489
        ])['index'];
    _0x103c66[_0x216574(298)](_0x1a1076, WasmInitExpr['I32Const'](_0x428b0b), [
        _0x1c376e,
        _0x612dae
    ]), _0x103c66[_0x216574(298)](_0x6f713d, WasmInitExpr['I32Const'](_0x325558), [
        _0x1c8e70,
        _0x612dae
    ]), _0x103c66[_0x216574(298)](_0x1523b5, WasmInitExpr['I32Const'](_0x18a6e6), [
        _0x1c376e,
        _0x1c8e70
    ]), _0x103c66[_0x216574(298)](_0x1523b5, WasmInitExpr[_0x216574(299)](_0x18a6e6 + 1), [
        _0x612dae,
        _0x1c376e
    ]);
    const _0x1fcbff = _0x103c66[_0x216574(307)](_0x4350c8), _0x4365ad = _0x1fcbff[_0x216574(300)][_0x216574(304)], _0x37a19e = _0x1fcbff[_0x216574(300)][_0x216574(308)], _0x4d4f7a = _0x1fcbff[_0x216574(300)][_0x216574(305)];
    assertEquals(_0x4fc079, _0x4365ad['get'](_0x55c860)()), assertEquals(_0x1cc5e0, _0x4365ad[_0x216574(301)](_0x428b0b)()), assertEquals(_0x125925, _0x4365ad['get'](_0x428b0b + 1)()), assertEquals(_0x2c9489, _0x37a19e['get'](_0x325558)()), assertEquals(_0x125925, _0x37a19e[_0x216574(301)](_0x325558 + 1)()), assertEquals(_0x1cc5e0, _0x4d4f7a[_0x216574(301)](_0x18a6e6)()), assertEquals(_0x125925, _0x4d4f7a[_0x216574(301)](_0x18a6e6 + 1)()), assertEquals(_0x1cc5e0, _0x4d4f7a['get'](_0x18a6e6 + 2)());
}();