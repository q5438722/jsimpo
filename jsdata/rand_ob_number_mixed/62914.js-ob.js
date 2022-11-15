load('test/mjsunit/wasm/wasm-module-builder.js');
function assertMemoryIsValid(_0x1a5c51, _0x5218c7) {
    assertSame(WebAssembly['Memory']['prototype'], _0x1a5c51['__proto__']), assertSame(WebAssembly['Memory'], _0x1a5c51['constructor']), assertTrue(_0x1a5c51 instanceof Object), assertTrue(_0x1a5c51 instanceof WebAssembly['Memory']), _0x5218c7 && (assertTrue(_0x1a5c51['buffer'] instanceof SharedArrayBuffer), assertTrue(Object['isFrozen'](_0x1a5c51['buffer'])));
}
(function TestConstructorWithShared() {
    print('TestConstructorWithShared');
    let _0xb1b86b = new WebAssembly['Memory']({
        'initial': 0x0,
        'maximum': 0xa,
        'shared': !![]
    });
    assertMemoryIsValid(_0xb1b86b, !![]);
}(), function TestConstructorWithUndefinedShared() {
    print('TestConstructorWithUndefinedShared');
    let _0x2809b1 = new WebAssembly['Memory']({
        'initial': 0x0,
        'maximum': undefined,
        'shared': undefined
    });
    assertMemoryIsValid(_0x2809b1);
}(), function TestConstructorWithNumericShared() {
    print('TestConstructorWithNumericShared');
    let _0x43317a = new WebAssembly['Memory']({
        'initial': 0x0,
        'maximum': 0xa,
        'shared': 0x2005e9
    });
    assertMemoryIsValid(_0x43317a, !![]);
}(), function TestConstructorWithEmptyStringShared() {
    print('TestConstructorWithEmptyStringShared');
    let _0x44a3bc = new WebAssembly['Memory']({
        'initial': 0x0,
        'maximum': undefined,
        'shared': ''
    });
    assertMemoryIsValid(_0x44a3bc);
}(), function TestConstructorWithUndefinedMaxShared() {
    print('TestConstructorWithUndefinedMaxShared'), assertThrows(() => new WebAssembly['Memory']({
        'initial': 0x0,
        'shared': !![]
    }), TypeError);
}(), function TestCompileWithUndefinedShared() {
    print('TestCompileWithUndefinedShared');
    let _0x2fa310 = new WebAssembly['Memory']({
            'initial': 0x0,
            'maximum': 0xa,
            'shared': !![]
        }), _0x2c037e = new WasmModuleBuilder();
    _0x2c037e['addImportedMemory']('m', 'imported_mem', 0x121 * 0xd + 0x17b0 + -0x1ab * 0x17, undefined, 'shared'), assertThrows(() => new WebAssembly['Module'](_0x2c037e['toBuffer']()), WebAssembly['CompileError']);
}(), function TestCompileAtomicOpUndefinedShared() {
    print('TestCompileAtomicOpUndefinedShared');
    let _0x49b964 = new WebAssembly['Memory']({
            'initial': 0x0,
            'maximum': 0xa,
            'shared': !![]
        }), _0x39025b = new WasmModuleBuilder();
    _0x39025b['addFunction']('main', kSig_i_ii)['addBody']([
        kExprLocalGet,
        -0x111f + 0xfda + 0x19 * 0xd,
        kExprLocalGet,
        0x6d * 0x29 + -0x1136 + -0x3e,
        kAtomicPrefix,
        kExprI32AtomicAdd
    ]), _0x39025b['addImportedMemory']('m', 'imported_mem'), assertThrows(() => new WebAssembly['Module'](_0x39025b['toBuffer']()), WebAssembly['CompileError']);
}(), function TestInstantiateWithUndefinedShared() {
    print('TestInstantiateWithUndefinedShared');
    let _0x7c3cfa = new WebAssembly['Memory']({
            'initial': 0x0,
            'maximum': 0xa,
            'shared': !![]
        }), _0x262dd8 = new WasmModuleBuilder();
    _0x262dd8['addImportedMemory']('m', 'imported_mem');
    let _0x1aa876 = new WebAssembly['Module'](_0x262dd8['toBuffer']());
    assertThrows(() => new WebAssembly['Instance'](_0x1aa876, { 'm': { 'imported_mem': _0x7c3cfa } }), WebAssembly['LinkError']);
}(), function TestInstantiateWithImportNotSharedDefined() {
    print('TestInstantiateWithImportNotSharedDefined');
    let _0x469d00 = new WebAssembly['Memory']({
            'initial': 0x0,
            'maximum': 0xa,
            'shared': ![]
        }), _0x4b7743 = new WasmModuleBuilder();
    _0x4b7743['addImportedMemory']('m', 'imported_mem', 0x1 * 0x4e1 + -0x48 * 0x51 + -0x11e7 * -0x1, -0x422 + 0x26bf + -0x2293 * 0x1, 'shared');
    let _0x2bdad4 = new WebAssembly['Module'](_0x4b7743['toBuffer']());
    assertThrows(() => new WebAssembly['Instance'](_0x2bdad4, { 'm': { 'imported_mem': _0x469d00 } }), WebAssembly['LinkError']);
}(), function TestInstantiateWithSharedDefined() {
    print('TestInstantiateWithSharedDefined');
    let _0xb0173e = new WasmModuleBuilder();
    _0xb0173e['addMemory'](0x9c0 + 0x1f8f + -0x61 * 0x6d, -0x109 + -0x1 * 0xa10 + -0xb23 * -0x1, !![], 'shared');
    let _0x51c972 = new WebAssembly['Module'](_0xb0173e['toBuffer']()), _0x534594 = new WebAssembly['Instance'](_0x51c972);
    assertMemoryIsValid(_0x534594['exports']['memory'], !![]);
}(), function TestAtomicOpWithSharedMemoryDefined() {
    print('TestAtomicOpWithSharedMemoryDefined');
    let _0x28ff0b = new WasmModuleBuilder();
    _0x28ff0b['addMemory'](-0xbc3 * 0x1 + 0xf8 * 0x22 + 0x152b * -0x1, -0x224d * 0x1 + -0xda1 + -0x5ff * -0x8, ![], 'shared'), _0x28ff0b['addFunction']('main', kSig_i_ii)['addBody']([
        kExprLocalGet,
        -0x23fb + 0x3 * 0xaff + -0x2 * -0x17f,
        kExprLocalGet,
        -0x1a09 + -0x13ab * 0x1 + -0x1 * -0x2db5,
        kAtomicPrefix,
        kExprI32AtomicAdd,
        -0x586 + 0x5 * 0x670 + -0x1aa8,
        -0x7c * -0x12 + 0x1 * 0x17eb + 0x22d * -0xf
    ])['exportFunc']();
    let _0x4b31ca = new WebAssembly['Module'](_0x28ff0b['toBuffer']()), _0x1f90a5 = new WebAssembly['Instance'](_0x4b31ca);
    assertEquals(-0x112 * 0x1 + -0x23b * 0x9 + 0x1525, _0x1f90a5['exports']['main'](-0x215e + 0x4c * -0x13 + -0x2 * -0x1381, 0xe42e7c9 + -0x1eb93fcb + 0x5a35 * 0x5f27)), assertEquals(-0x51ba5 * 0x665 + -0x8eaf045 + -0x860d359 * -0x7, _0x1f90a5['exports']['main'](0x2496 + -0x18df * -0x1 + -0x3d75, -0x5 * -0x3fe6802 + 0x17 * -0xdf2817 + 0x1125a318));
}(), function TestMemoryConstructorShouldNotCallHasProperty() {
    print(arguments['callee']['name']);
    const _0x30a71c = new Proxy({}, {
        'has'(_0x45a681, _0xc832ce) {
            throw new Error('Should\x20not\x20call\x20[[HasProperty]]\x20with\x20' + _0xc832ce);
        },
        'get'(_0x371602, _0x2384c7) {
            return -0x1468 + 0x2318 * -0x1 + 0x4a * 0xc0;
        }
    });
    new WebAssembly['Memory'](_0x30a71c);
}());
