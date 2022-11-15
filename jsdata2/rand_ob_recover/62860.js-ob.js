load(_0x486bc1(471)), function duplicateGlobalExportName() {
    var _0x16261b = _0x486bc1, _0x522a44 = {
            'WnwIt': function (_0x531dcd, _0x1f8fa9, _0x5cc410, _0x146de7) {
                return _0x531dcd(_0x1f8fa9, _0x5cc410, _0x146de7);
            }
        }, _0x4a6598 = new WasmModuleBuilder();
    _0x4a6598[_0x16261b(472)](kWasmI64, ![])[_0x16261b(473)]('g'), _0x4a6598['addGlobal'](kWasmI64, ![])['exportAs']('g'), _0x522a44['WnwIt'](assertThrows, () => _0x4a6598['instantiate'](), WebAssembly[_0x16261b(474)], /Duplicate export name 'g' for global 0 and global 1/);
}(), function exportNameClashWithFunction() {
    var _0x5664ff = _0x486bc1, _0x29966a = { 'RITuT': _0x5664ff(475) }, _0x752951 = new WasmModuleBuilder();
    _0x752951[_0x5664ff(472)](kWasmI64, ![])[_0x5664ff(473)](_0x29966a[_0x5664ff(476)]), _0x752951['addFunction']('f', kSig_v_v)[_0x5664ff(477)]([])[_0x5664ff(473)](_0x5664ff(475)), assertThrows(() => _0x752951[_0x5664ff(478)](), WebAssembly[_0x5664ff(474)], /Duplicate export name 'foo' for global 0 and function 0/);
}(), function veryLongExportName() {
    var _0x4c38c1 = _0x486bc1, _0xbaedd2 = {
            'IKCwY': function (_0x57b04a, _0x22ab22) {
                return _0x57b04a < _0x22ab22;
            },
            'dtvTJ': _0x4c38c1(479)
        }, _0x24bb31 = _0x4c38c1(480)[_0x4c38c1(481)]('|'), _0xfd6bf4 = 9647 + 1 * 1591 + -5619 * 2;
    while (!![]) {
        switch (_0x24bb31[_0xfd6bf4++]) {
        case '0':
            var _0x24fd77 = _0x4c38c1(482);
            continue;
        case '1':
            _0x3fcb93[_0x4c38c1(473)](_0x418cd5);
            continue;
        case '2':
            _0x3fcb93['exportAs'](_0x418cd5);
            continue;
        case '3':
            var _0x3fcb93 = _0x2efa71[_0x4c38c1(472)](kWasmI64, ![]);
            continue;
        case '4':
            assertThrows(() => _0x2efa71[_0x4c38c1(478)](), WebAssembly[_0x4c38c1(474)], new RegExp(_0x24fd77));
            continue;
        case '5':
            var _0x2efa71 = new WasmModuleBuilder();
            continue;
        case '6':
            while (_0xbaedd2[_0x4c38c1(483)](_0x418cd5[_0x4c38c1(484)], -9236 + -15726 + 33154)) {
                _0x418cd5 = _0x418cd5['concat'](_0x418cd5);
            }
            continue;
        case '7':
            var _0x418cd5 = _0xbaedd2['dtvTJ'];
            continue;
        }
        break;
    }
}();