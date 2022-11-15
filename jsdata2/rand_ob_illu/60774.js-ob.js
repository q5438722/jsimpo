const _0x3514 = ['6ohlQEs', 'test/mjsunit/wasm/wasm-module-builder.js', 'one', 'two', 'three', 'addMemory', 'addType', 'addFunction', 'MhTJu', 'OVJgd', 'addBody', 'index', 'exportFunc', 'instantiate', 'exports', '1033921SCueuc', '229307kMeDnD', '62177hsayMS', '1vIlfPc', '246365ktuPbJ', '862975mVjhxW', '2458cwDXiF', '313ZGlMqn', '198931CRWIIp'];
const _0x20e541 = _0x1d6b;

(function (_0x497ba4, _0x39c13b) {
    const _0x5e9781 = _0x1d6b;

    while (true) {
        try {
            const _0x300b38 = -parseInt(_0x5e9781(0x1c4)) + parseInt(_0x5e9781(0x1c5)) + parseInt(_0x5e9781(0x1c6)) + -parseInt(_0x5e9781(0x1c7)) * -parseInt(_0x5e9781(0x1c8)) + -parseInt(_0x5e9781(0x1c9)) + -parseInt(_0x5e9781(0x1ca)) * -parseInt(_0x5e9781(0x1cb)) + -parseInt(_0x5e9781(0x1cc)) * -parseInt(_0x5e9781(0x1cd));

            if (_0x300b38 === _0x39c13b) break;else _0x497ba4.push(_0x497ba4.shift());
        } catch (_0x1e211b) {
            _0x497ba4.push(_0x497ba4.shift());
        }
    }
})(_0x3514, 603893), load(_0x20e541(0x1ce));
function _0x1d6b(_0x2411c0, _0x470876) {
    return _0x1d6b = function (_0x579268, _0x3dbf81) {
        _0x579268 = _0x579268 - 452;
        const _0x3c37db = _0x3514[_0x579268];

        return _0x3c37db;
    }, _0x1d6b(_0x2411c0, _0x470876);
}
function InstanceMaker(_0x379267) {
    const _0x2c2f2c = _0x20e541;
    const _0x498ba4 = {
        'MhTJu': _0x2c2f2c(0x1cf),
        'OVJgd': _0x2c2f2c(0x1d0),
        'vSdXN': _0x2c2f2c(0x1d1)
    };

    const _0x563e03 = new WasmModuleBuilder();

    _0x563e03[_0x2c2f2c(0x1d2)](1, 1, false);

    const _0x131735 = _0x563e03[_0x2c2f2c(0x1d3)](makeSig([kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32, kWasmI32], [kWasmI32]));

    const _0x480c0a = _0x563e03.addType(makeSig([kWasmI64, kWasmI64, kWasmI64, kWasmI64, kWasmI64, kWasmI64, kWasmI64, kWasmI64], []));

    const _0x5ef654 = _0x563e03[_0x2c2f2c(0x1d4)]('zero', kSig_i_i);

    const _0x587b72 = _0x563e03.addFunction(_0x498ba4[_0x2c2f2c(0x1d5)], _0x131735);

    const _0x4de2a0 = _0x563e03[_0x2c2f2c(0x1d4)](_0x498ba4[_0x2c2f2c(0x1d6)], kSig_v_i);

    const _0x58e4cf = _0x563e03[_0x2c2f2c(0x1d4)](_0x498ba4.vSdXN, _0x480c0a)[_0x2c2f2c(0x1d7)]([]);

    return _0x5ef654[_0x2c2f2c(0x1d7)]([kExprLocalGet, 0, kExprI32LoadMem, 0, _0x379267]), _0x587b72.addBody([kExprLocalGet, 7, kExprCallFunction, _0x5ef654.index]), _0x4de2a0[_0x2c2f2c(0x1d7)]([kExprI64Const, 129, 128, 128, 128, 16, kExprI64Const, 129, 128, 128, 128, 16, kExprI64Const, 129, 128, 128, 128, 16, kExprI64Const, 129, 128, 128, 128, 16, kExprI64Const, 129, 128, 128, 128, 16, kExprI64Const, 129, 128, 128, 128, 16, kExprI64Const, 129, 128, 128, 128, 16, kExprI64Const, 129, 128, 128, 128, 16, kExprCallFunction, _0x58e4cf.index, kExprI32Const, 0, kExprI32Const, 0, kExprI32Const, 0, kExprI32Const, 0, kExprI32Const, 0, kExprI32Const, 0, kExprI32Const, 0, kExprI32Const, 0, kExprCallFunction, _0x587b72[_0x2c2f2c(0x1d8)], kExprDrop])[_0x2c2f2c(0x1d9)](), _0x563e03[_0x2c2f2c(0x1da)]({});
}
const instance = InstanceMaker(0);

instance[_0x20e541(0x1db)].two();
const instance_with_offset = InstanceMaker(4);

instance_with_offset[_0x20e541(0x1db)][_0x20e541(0x1d0)]();
