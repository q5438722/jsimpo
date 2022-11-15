load('test/mjsunit/wasm/wasm-module-builder.js');
function InstanceMaker(_0x47d990) {
    var _0x535338 = new WasmModuleBuilder();
    _0x535338['addMemory'](1, 1, ![]);
    var _0x6d1339 = _0x535338['addType'](makeSig([
        kWasmI32,
        kWasmI32,
        kWasmI32,
        kWasmI32,
        kWasmI32,
        kWasmI32,
        kWasmI32,
        kWasmI32
    ], [kWasmI32]));
    var _0x348ba9 = _0x535338['addType'](makeSig([
        kWasmI64,
        kWasmI64,
        kWasmI64,
        kWasmI64,
        kWasmI64,
        kWasmI64,
        kWasmI64,
        kWasmI64
    ], []));
    var _0x335193 = _0x535338['addFunction']('zero', kSig_i_i);
    var _0x3b0e98 = _0x535338['addFunction']('one', _0x6d1339);
    var _0x371daf = _0x535338['addFunction']('two', kSig_v_i);
    var _0x1a0e0f = _0x535338['addFunction']('three', _0x348ba9)['addBody']([]);
    _0x335193['addBody']([
        kExprLocalGet,
        0,
        kExprI32LoadMem,
        0,
        _0x47d990
    ]);
    _0x3b0e98['addBody']([
        kExprLocalGet,
        7,
        kExprCallFunction,
        _0x335193['index']
    ]);
    _0x371daf['addBody']([
        kExprI64Const,
        129,
        128,
        128,
        128,
        16,
        kExprI64Const,
        129,
        128,
        128,
        128,
        16,
        kExprI64Const,
        129,
        128,
        128,
        128,
        16,
        kExprI64Const,
        129,
        128,
        128,
        128,
        16,
        kExprI64Const,
        129,
        128,
        128,
        128,
        16,
        kExprI64Const,
        129,
        128,
        128,
        128,
        16,
        kExprI64Const,
        129,
        128,
        128,
        128,
        16,
        kExprI64Const,
        129,
        128,
        128,
        128,
        16,
        kExprCallFunction,
        _0x1a0e0f['index'],
        kExprI32Const,
        0,
        kExprI32Const,
        0,
        kExprI32Const,
        0,
        kExprI32Const,
        0,
        kExprI32Const,
        0,
        kExprI32Const,
        0,
        kExprI32Const,
        0,
        kExprI32Const,
        0,
        kExprCallFunction,
        _0x3b0e98['index'],
        kExprDrop
    ])['exportFunc']();
    return _0x535338['instantiate']({});
}
var instance = InstanceMaker(0);
instance['exports']['two']();
var instance_with_offset = InstanceMaker(4);
instance_with_offset['exports']['two']();