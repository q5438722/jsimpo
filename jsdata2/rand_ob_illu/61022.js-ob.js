const _0x4200 = ['1klgaWf', '213882QFOCug', '732990MXFLQx', '619781MvKrpC', '1JMEGKH', '68321UWnmcT', '1296198rAzXCu', 'addFunction', 'iQvNR', 'addBody', 'instantiate', 'main', 'tZCuY', 'kFQaF', '17695xUnWtx', '21piAWLo', '656709WLBzsl'];

function _0x20ce(_0xee7a52, _0x3ec0e1) {
    return _0x20ce = function (_0x3653f1, _0x9c5a7b) {
        _0x3653f1 = _0x3653f1 - 264;
        const _0x50932f = _0x4200[_0x3653f1];

        return _0x50932f;
    }, _0x20ce(_0xee7a52, _0x3ec0e1);
}
(function (_0x5f1d55, _0x39f765) {
    const _0x567a64 = _0x20ce;

    while (true) {
        try {
            const _0xe9ac9e = -parseInt(_0x567a64(0x108)) * parseInt(_0x567a64(0x109)) + -parseInt(_0x567a64(0x10a)) * -parseInt(_0x567a64(0x10b)) + parseInt(_0x567a64(0x10c)) + -parseInt(_0x567a64(0x10d)) + -parseInt(_0x567a64(0x10e)) * parseInt(_0x567a64(0x10f)) + -parseInt(_0x567a64(0x110)) + parseInt(_0x567a64(0x111));

            if (_0xe9ac9e === _0x39f765) break;else _0x5f1d55.push(_0x5f1d55.shift());
        } catch (_0x9049ba) {
            _0x5f1d55.push(_0x5f1d55.shift());
        }
    }
})(_0x4200, 374102), load('test/mjsunit/wasm/wasm-module-builder.js'), function AddTest() {
    const _0x21ecc5 = _0x20ce;
    const _0x408f2e = {
        'iQvNR': 'main',
        'wELjm': function (_0x4f7cde, _0x1ee76a, _0x5b3f21) {
            return _0x4f7cde(_0x1ee76a, _0x5b3f21);
        }
    };

    const _0x29037a = new WasmModuleBuilder();

    _0x29037a[_0x21ecc5(0x112)](_0x408f2e[_0x21ecc5(0x113)], kSig_i_v)[_0x21ecc5(0x114)]([kExprBlock, kWasmVoid, kExprI64Const, 0, kExprI64Const, 128, 128, 128, 128, 16, kExprI64Add, kExprI64Eqz, kExprBrIf, 0, kExprI32Const, 0, kExprReturn, kExprEnd, kExprI32Const, 0]).exportFunc();

    const _0x51b871 = _0x29037a[_0x21ecc5(0x115)]();

    _0x408f2e.wELjm(assertEquals, 0, _0x51b871.exports[_0x21ecc5(0x116)]());
}(), function SubTest() {
    const _0x584ca5 = _0x20ce;
    const _0x2ff80e = {
        'tZCuY': _0x584ca5(0x116),
        'kFQaF': function (_0x9f6aff, _0x3916b3, _0x5581d7) {
            return _0x9f6aff(_0x3916b3, _0x5581d7);
        }
    };

    const _0x56de52 = new WasmModuleBuilder();

    _0x56de52[_0x584ca5(0x112)](_0x2ff80e[_0x584ca5(0x117)], kSig_i_v).addBody([kExprBlock, kWasmVoid, kExprI64Const, 0, kExprI64Const, 128, 128, 128, 128, 16, kExprI64Sub, kExprI64Eqz, kExprBrIf, 0, kExprI32Const, 0, kExprReturn, kExprEnd, kExprI32Const, 0]).exportFunc();

    const _0x59dd6d = _0x56de52[_0x584ca5(0x115)]();

    _0x2ff80e[_0x584ca5(0x118)](assertEquals, 0, _0x59dd6d.exports[_0x584ca5(0x116)]());
}();
