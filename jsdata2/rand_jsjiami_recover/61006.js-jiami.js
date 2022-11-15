load('test/mjsunit/wasm/wasm-module-builder.js');
(function () {
    const _0x351d7a = new WasmModuleBuilder();
    _0x351d7a['addType'](makeSig([
        kWasmI32,
        kWasmI32,
        kWasmI32
    ], [kWasmI32]));
    _0x351d7a['addType'](makeSig([], []));
    _0x351d7a['addFunction'](undefined, 0)['addBodyWithEnd']([
        kExprCallFunction,
        1,
        kExprI32Const,
        0,
        kExprEnd
    ]);
    _0x351d7a['addFunction'](undefined, 1)['addLocals'](kWasmF32, 1)['addLocals'](kWasmI32, 13)['addBodyWithEnd']([kExprEnd]);
    _0x351d7a['addExport']('main', 0);
    const _0xea5170 = _0x351d7a['instantiate']();
    print(_0xea5170['exports']['main'](1, 2, 3));
}());