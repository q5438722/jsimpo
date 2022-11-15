load('test/mjsunit/wasm/wasm-module-builder.js'), function AddTest() {
    const _0x4eb787 = {
        'qLjrx': 'main',
        'LgPUv': function (_0x3f6425, _0x1b7abb, _0x3d3fbc) {
            return _0x3f6425(_0x1b7abb, _0x3d3fbc);
        }
    };
    let _0x2e61eb = new WasmModuleBuilder();
    _0x2e61eb['addFunction'](_0x4eb787['qLjrx'], kSig_i_v)['addBody']([
        kExprBlock,
        kWasmVoid,
        kExprI64Const,
        0x0,
        kExprI64Const,
        0x80,
        0x80,
        0x80,
        0x80,
        0x10,
        kExprI64Add,
        kExprI64Eqz,
        kExprBrIf,
        0x0,
        kExprI32Const,
        0x0,
        kExprReturn,
        kExprEnd,
        kExprI32Const,
        0x0
    ])['exportFunc']();
    let _0x1dc56e = _0x2e61eb['instantiate']();
    _0x4eb787['LgPUv'](assertEquals, 0x0, _0x1dc56e['exports']['main']());
}(), function SubTest() {
    const _0x121cc5 = {
        'UkEma': 'main',
        'MamxX': function (_0x424039, _0x44d87d, _0x1d4699) {
            return _0x424039(_0x44d87d, _0x1d4699);
        }
    };
    let _0x4b57e9 = new WasmModuleBuilder();
    _0x4b57e9['addFunction'](_0x121cc5['UkEma'], kSig_i_v)['addBody']([
        kExprBlock,
        kWasmVoid,
        kExprI64Const,
        0x0,
        kExprI64Const,
        0x80,
        0x80,
        0x80,
        0x80,
        0x10,
        kExprI64Sub,
        kExprI64Eqz,
        kExprBrIf,
        0x0,
        kExprI32Const,
        0x0,
        kExprReturn,
        kExprEnd,
        kExprI32Const,
        0x0
    ])['exportFunc']();
    let _0x165019 = _0x4b57e9['instantiate']();
    _0x121cc5['MamxX'](assertEquals, 0x0, _0x165019['exports']['main']());
}();
