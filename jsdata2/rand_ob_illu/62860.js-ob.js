const _0x2fcf = ['foo', 'RITuT', 'addBody', 'instantiate', 'abc', '7|6|5|3|2|1|0|4', 'split', 'Duplicate export name \'(abc){10,20}ab?c?...\' for global 0 and global 0', 'IKCwY', 'length', '140838NmUnYo', '2MFRQOB', '191399dYErfI', '23438XMLKgL', '183432OiFXru', '5crPAhF', '6831ZhPmRc', '257882iWabbn', '78692jPyUDo', 'test/mjsunit/wasm/wasm-module-builder.js', 'addGlobal', 'exportAs', 'CompileError'];

function _0x1d14(_0x5657cc, _0x2e421e) {
    return _0x1d14 = function (_0x12bb6b, _0x2989ba) {
        _0x12bb6b = _0x12bb6b - 462;
        const _0x5a7bd3 = _0x2fcf[_0x12bb6b];

        return _0x5a7bd3;
    }, _0x1d14(_0x5657cc, _0x2e421e);
}
const _0x486bc1 = _0x1d14;

(function (_0x3954e0, _0x11b541) {
    const _0x85a2d9 = _0x1d14;

    while (true) {
        try {
            const _0x19ae24 = parseInt(_0x85a2d9(0x1ce)) * parseInt(_0x85a2d9(0x1cf)) + -parseInt(_0x85a2d9(0x1d0)) + -parseInt(_0x85a2d9(0x1d1)) + -parseInt(_0x85a2d9(0x1d2)) + parseInt(_0x85a2d9(0x1d3)) * -parseInt(_0x85a2d9(0x1d4)) + parseInt(_0x85a2d9(0x1d5)) + parseInt(_0x85a2d9(0x1d6));

            if (_0x19ae24 === _0x11b541) break;else _0x3954e0.push(_0x3954e0.shift());
        } catch (_0x1c7bac) {
            _0x3954e0.push(_0x3954e0.shift());
        }
    }
})(_0x2fcf, 185826), load(_0x486bc1(0x1d7)), function duplicateGlobalExportName() {
    const _0x16261b = _0x486bc1;
    const _0x522a44 = {
        'WnwIt': function (_0x531dcd, _0x1f8fa9, _0x5cc410, _0x146de7) {
            return _0x531dcd(_0x1f8fa9, _0x5cc410, _0x146de7);
        }
    };

    const _0x4a6598 = new WasmModuleBuilder();

    _0x4a6598[_0x16261b(0x1d8)](kWasmI64, false)[_0x16261b(0x1d9)]('g'), _0x4a6598.addGlobal(kWasmI64, false).exportAs('g'), _0x522a44.WnwIt(assertThrows, () => _0x4a6598.instantiate(), WebAssembly[_0x16261b(0x1da)], /Duplicate export name 'g' for global 0 and global 1/);
}(), function exportNameClashWithFunction() {
    const _0x5664ff = _0x486bc1;
    const _0x29966a = { 'RITuT': _0x5664ff(0x1db) };

    const _0x752951 = new WasmModuleBuilder();

    _0x752951[_0x5664ff(0x1d8)](kWasmI64, false)[_0x5664ff(0x1d9)](_0x29966a[_0x5664ff(0x1dc)]), _0x752951.addFunction('f', kSig_v_v)[_0x5664ff(0x1dd)]([])[_0x5664ff(0x1d9)](_0x5664ff(0x1db)), assertThrows(() => _0x752951[_0x5664ff(0x1de)](), WebAssembly[_0x5664ff(0x1da)], /Duplicate export name 'foo' for global 0 and function 0/);
}(), function veryLongExportName() {
    const _0x4c38c1 = _0x486bc1;
    const _0xbaedd2 = {
        'IKCwY': function (_0x57b04a, _0x22ab22) {
            return _0x57b04a < _0x22ab22;
        },
        'dtvTJ': _0x4c38c1(0x1df)
    };

    const _0x24bb31 = _0x4c38c1(0x1e0)[_0x4c38c1(0x1e1)]('|');

    var _0xfd6bf4 = 0;

    while (true) {
        switch (_0x24bb31[_0xfd6bf4++]) {
            case '0':
                const _0x24fd77 = _0x4c38c1(0x1e2);

                continue;
            case '1':
                _0x3fcb93[_0x4c38c1(0x1d9)](_0x418cd5);
                continue;
            case '2':
                _0x3fcb93.exportAs(_0x418cd5);
                continue;
            case '3':
                const _0x3fcb93 = _0x2efa71[_0x4c38c1(0x1d8)](kWasmI64, false);

                continue;
            case '4':
                assertThrows(() => _0x2efa71[_0x4c38c1(0x1de)](), WebAssembly[_0x4c38c1(0x1da)], new RegExp(_0x24fd77));
                continue;
            case '5':
                const _0x2efa71 = new WasmModuleBuilder();

                continue;
            case '6':
                while (_0xbaedd2[_0x4c38c1(0x1e3)](_0x418cd5[_0x4c38c1(0x1e4)], 8192)) {
                    _0x418cd5 = _0x418cd5.concat(_0x418cd5);
                }
                continue;
            case '7':
                var _0x418cd5 = _0xbaedd2.dtvTJ;

                continue;
        }
        break;
    }
}();
