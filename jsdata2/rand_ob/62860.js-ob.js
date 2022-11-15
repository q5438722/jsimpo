var _0x2fcf = [
    'foo',
    'RITuT',
    'addBody',
    'instantiate',
    'abc',
    '7|6|5|3|2|1|0|4',
    'split',
    'Duplicate\x20export\x20name\x20\x27(abc){10,20}ab?c?...\x27\x20for\x20global\x200\x20and\x20global\x200',
    'IKCwY',
    'length',
    '140838NmUnYo',
    '2MFRQOB',
    '191399dYErfI',
    '23438XMLKgL',
    '183432OiFXru',
    '5crPAhF',
    '6831ZhPmRc',
    '257882iWabbn',
    '78692jPyUDo',
    'test/mjsunit/wasm/wasm-module-builder.js',
    'addGlobal',
    'exportAs',
    'CompileError'
];
function _0x1d14(_0x5657cc, _0x2e421e) {
    return _0x1d14 = function (_0x12bb6b, _0x2989ba) {
        _0x12bb6b = _0x12bb6b - (-0x11 * -0x191 + 0x21 * -0x1 + -0x6d * 0x3a);
        var _0x5a7bd3 = _0x2fcf[_0x12bb6b];
        return _0x5a7bd3;
    }, _0x1d14(_0x5657cc, _0x2e421e);
}
var _0x486bc1 = _0x1d14;
(function (_0x3954e0, _0x11b541) {
    var _0x85a2d9 = _0x1d14;
    while (!![]) {
        try {
            var _0x19ae24 = parseInt(_0x85a2d9(0x1ce)) * parseInt(_0x85a2d9(0x1cf)) + -parseInt(_0x85a2d9(0x1d0)) + -parseInt(_0x85a2d9(0x1d1)) + -parseInt(_0x85a2d9(0x1d2)) + parseInt(_0x85a2d9(0x1d3)) * -parseInt(_0x85a2d9(0x1d4)) + parseInt(_0x85a2d9(0x1d5)) + parseInt(_0x85a2d9(0x1d6));
            if (_0x19ae24 === _0x11b541)
                break;
            else
                _0x3954e0['push'](_0x3954e0['shift']());
        } catch (_0x1c7bac) {
            _0x3954e0['push'](_0x3954e0['shift']());
        }
    }
}(_0x2fcf, -0x35920 + 0x4e2c1 + 0x14c41), load(_0x486bc1(0x1d7)), function duplicateGlobalExportName() {
    var _0x16261b = _0x486bc1, _0x522a44 = {
            'WnwIt': function (_0x531dcd, _0x1f8fa9, _0x5cc410, _0x146de7) {
                return _0x531dcd(_0x1f8fa9, _0x5cc410, _0x146de7);
            }
        }, _0x4a6598 = new WasmModuleBuilder();
    _0x4a6598[_0x16261b(0x1d8)](kWasmI64, ![])[_0x16261b(0x1d9)]('g'), _0x4a6598['addGlobal'](kWasmI64, ![])['exportAs']('g'), _0x522a44['WnwIt'](assertThrows, () => _0x4a6598['instantiate'](), WebAssembly[_0x16261b(0x1da)], /Duplicate export name 'g' for global 0 and global 1/);
}(), function exportNameClashWithFunction() {
    var _0x5664ff = _0x486bc1, _0x29966a = { 'RITuT': _0x5664ff(0x1db) }, _0x752951 = new WasmModuleBuilder();
    _0x752951[_0x5664ff(0x1d8)](kWasmI64, ![])[_0x5664ff(0x1d9)](_0x29966a[_0x5664ff(0x1dc)]), _0x752951['addFunction']('f', kSig_v_v)[_0x5664ff(0x1dd)]([])[_0x5664ff(0x1d9)](_0x5664ff(0x1db)), assertThrows(() => _0x752951[_0x5664ff(0x1de)](), WebAssembly[_0x5664ff(0x1da)], /Duplicate export name 'foo' for global 0 and function 0/);
}(), function veryLongExportName() {
    var _0x4c38c1 = _0x486bc1, _0xbaedd2 = {
            'IKCwY': function (_0x57b04a, _0x22ab22) {
                return _0x57b04a < _0x22ab22;
            },
            'dtvTJ': _0x4c38c1(0x1df)
        }, _0x24bb31 = _0x4c38c1(0x1e0)[_0x4c38c1(0x1e1)]('|'), _0xfd6bf4 = 0x25af + 0x1 * 0x637 + -0x15f3 * 0x2;
    while (!![]) {
        switch (_0x24bb31[_0xfd6bf4++]) {
        case '0':
            var _0x24fd77 = _0x4c38c1(0x1e2);
            continue;
        case '1':
            _0x3fcb93[_0x4c38c1(0x1d9)](_0x418cd5);
            continue;
        case '2':
            _0x3fcb93['exportAs'](_0x418cd5);
            continue;
        case '3':
            var _0x3fcb93 = _0x2efa71[_0x4c38c1(0x1d8)](kWasmI64, ![]);
            continue;
        case '4':
            assertThrows(() => _0x2efa71[_0x4c38c1(0x1de)](), WebAssembly[_0x4c38c1(0x1da)], new RegExp(_0x24fd77));
            continue;
        case '5':
            var _0x2efa71 = new WasmModuleBuilder();
            continue;
        case '6':
            while (_0xbaedd2[_0x4c38c1(0x1e3)](_0x418cd5[_0x4c38c1(0x1e4)], -0x2414 + -0x3d6e + 0x8182)) {
                _0x418cd5 = _0x418cd5['concat'](_0x418cd5);
            }
            continue;
        case '7':
            var _0x418cd5 = _0xbaedd2['dtvTJ'];
            continue;
        }
        break;
    }
}());
