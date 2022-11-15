var _0x2a03 = [
    '37671FWokdg',
    '6AsdAXp',
    '2rhGYmq',
    '152147hWUqOw',
    '47aNqzFJ',
    '73335NlWWdV',
    'test/mjsunit/wasm/wasm-module-builder.js',
    'addMemory',
    'addType',
    'addFunction',
    'zero',
    'one',
    'two',
    'addBody',
    'index',
    'instantiate',
    'exports',
    '49559yNSNCv',
    '5UpnHWK',
    '1lkRWJO',
    '1144441WTeVwk',
    '1087846zDmzIh',
    '1211289mIAJSJ'
];
var _0x2048b9 = _0x42ac;
(function (_0x4d53cb, _0x5033d6) {
    var _0x401991 = _0x42ac;
    while (!![]) {
        try {
            var _0x112034 = parseInt(_0x401991(0x92)) * parseInt(_0x401991(0x93)) + -parseInt(_0x401991(0x94)) * -parseInt(_0x401991(0x95)) + parseInt(_0x401991(0x96)) + parseInt(_0x401991(0x97)) + -parseInt(_0x401991(0x98)) * -parseInt(_0x401991(0x99)) + parseInt(_0x401991(0x9a)) * parseInt(_0x401991(0x9b)) + -parseInt(_0x401991(0x9c)) * parseInt(_0x401991(0x9d));
            if (_0x112034 === _0x5033d6)
                break;
            else
                _0x4d53cb['push'](_0x4d53cb['shift']());
        } catch (_0x3e4863) {
            _0x4d53cb['push'](_0x4d53cb['shift']());
        }
    }
}(_0x2a03, 0xbd322), load(_0x2048b9(0x9e)));
function InstanceMaker(_0x4f0c77) {
    var _0x39b26 = _0x2048b9, _0x35d0c1 = new WasmModuleBuilder();
    _0x35d0c1[_0x39b26(0x9f)](0x1, 0x1, ![]);
    var _0x4ccbf1 = _0x35d0c1[_0x39b26(0xa0)](makeSig([
            kWasmI32,
            kWasmI32,
            kWasmI32,
            kWasmI32,
            kWasmI32,
            kWasmI32,
            kWasmI32,
            kWasmI32
        ], [kWasmI32])), _0x2a8c0c = _0x35d0c1[_0x39b26(0xa0)](makeSig([
            kWasmI64,
            kWasmI64,
            kWasmI64,
            kWasmI64,
            kWasmI64,
            kWasmI64,
            kWasmI64,
            kWasmI64
        ], [])), _0x37cebf = _0x35d0c1[_0x39b26(0xa1)](_0x39b26(0xa2), kSig_i_i), _0xb42eb = _0x35d0c1[_0x39b26(0xa1)](_0x39b26(0xa3), _0x4ccbf1), _0x1a4e27 = _0x35d0c1[_0x39b26(0xa1)](_0x39b26(0xa4), kSig_v_i), _0x495858 = _0x35d0c1[_0x39b26(0xa1)]('three', _0x2a8c0c)[_0x39b26(0xa5)]([]);
    return _0x37cebf[_0x39b26(0xa5)]([
        kExprLocalGet,
        0x0,
        kExprI32LoadMem,
        0x0,
        _0x4f0c77
    ]), _0xb42eb[_0x39b26(0xa5)]([
        kExprLocalGet,
        0x7,
        kExprCallFunction,
        _0x37cebf[_0x39b26(0xa6)]
    ]), _0x1a4e27[_0x39b26(0xa5)]([
        kExprI64Const,
        0x81,
        0x80,
        0x80,
        0x80,
        0x10,
        kExprI64Const,
        0x81,
        0x80,
        0x80,
        0x80,
        0x10,
        kExprI64Const,
        0x81,
        0x80,
        0x80,
        0x80,
        0x10,
        kExprI64Const,
        0x81,
        0x80,
        0x80,
        0x80,
        0x10,
        kExprI64Const,
        0x81,
        0x80,
        0x80,
        0x80,
        0x10,
        kExprI64Const,
        0x81,
        0x80,
        0x80,
        0x80,
        0x10,
        kExprI64Const,
        0x81,
        0x80,
        0x80,
        0x80,
        0x10,
        kExprI64Const,
        0x81,
        0x80,
        0x80,
        0x80,
        0x10,
        kExprCallFunction,
        _0x495858[_0x39b26(0xa6)],
        kExprI32Const,
        0x0,
        kExprI32Const,
        0x0,
        kExprI32Const,
        0x0,
        kExprI32Const,
        0x0,
        kExprI32Const,
        0x0,
        kExprI32Const,
        0x0,
        kExprI32Const,
        0x0,
        kExprI32Const,
        0x0,
        kExprCallFunction,
        _0xb42eb[_0x39b26(0xa6)],
        kExprDrop
    ])['exportFunc'](), _0x35d0c1[_0x39b26(0xa7)]({});
}
var instance = InstanceMaker(0x0);
function _0x42ac(_0x4daa76, _0x2419b2) {
    return _0x42ac = function (_0x2a03da, _0x42acd2) {
        _0x2a03da = _0x2a03da - 0x92;
        var _0x5c6f03 = _0x2a03[_0x2a03da];
        return _0x5c6f03;
    }, _0x42ac(_0x4daa76, _0x2419b2);
}
instance['exports'][_0x2048b9(0xa4)]();
var instance_with_offset = InstanceMaker(0x4);
instance_with_offset[_0x2048b9(0xa8)][_0x2048b9(0xa4)]();
