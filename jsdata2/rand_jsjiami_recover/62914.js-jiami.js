load('test/mjsunit/wasm/wasm-module-builder.js');
function assertMemoryIsValid(_0x1ab438, _0x30260d) {
    var _0x10a230 = '4|2|1|3|0'['split']('|'), _0x42be86 = 0;
    while (!![]) {
        switch (_0x10a230[_0x42be86++]) {
        case '0':
            if (_0x30260d) {
                assertTrue(_0x1ab438['buffer'] instanceof SharedArrayBuffer);
                assertTrue(Object['isFrozen'](_0x1ab438['buffer']));
            }
            continue;
        case '1':
            assertTrue(_0x1ab438 instanceof Object);
            continue;
        case '2':
            assertSame(WebAssembly['Memory'], _0x1ab438['constructor']);
            continue;
        case '3':
            assertTrue(_0x1ab438 instanceof WebAssembly['Memory']);
            continue;
        case '4':
            assertSame(WebAssembly['Memory']['prototype'], _0x1ab438['__proto__']);
            continue;
        }
        break;
    }
}
(function TestConstructorWithShared() {
    print('TestConstructorWithShared');
    let _0x4def31 = new WebAssembly['Memory']({
        'initial': 0,
        'maximum': 10,
        'shared': !![]
    });
    assertMemoryIsValid(_0x4def31, !![]);
}());
(function TestConstructorWithUndefinedShared() {
    print('TestConstructorWithUndefinedShared');
    let _0x559e2e = new WebAssembly['Memory']({
        'initial': 0,
        'maximum': undefined,
        'shared': undefined
    });
    assertMemoryIsValid(_0x559e2e);
}());
(function TestConstructorWithNumericShared() {
    print('TestConstructorWithNumericShared');
    let _0xc8965 = new WebAssembly['Memory']({
        'initial': 0,
        'maximum': 10,
        'shared': 2098665
    });
    assertMemoryIsValid(_0xc8965, !![]);
}());
(function TestConstructorWithEmptyStringShared() {
    print('TestConstructorWithEmptyStringShared');
    let _0x2a2e85 = new WebAssembly['Memory']({
        'initial': 0,
        'maximum': undefined,
        'shared': ''
    });
    assertMemoryIsValid(_0x2a2e85);
}());
(function TestConstructorWithUndefinedMaxShared() {
    print('TestConstructorWithUndefinedMaxShared');
    assertThrows(() => new WebAssembly['Memory']({
        'initial': 0,
        'shared': !![]
    }), TypeError);
}());
(function TestCompileWithUndefinedShared() {
    print('TestCompileWithUndefinedShared');
    let _0x446929 = new WebAssembly['Memory']({
        'initial': 0,
        'maximum': 10,
        'shared': !![]
    });
    let _0x4a7293 = new WasmModuleBuilder();
    _0x4a7293['addImportedMemory']('m', 'imported_mem', 0, undefined, 'shared');
    assertThrows(() => new WebAssembly['Module'](_0x4a7293['toBuffer']()), WebAssembly['CompileError']);
}());
(function TestCompileAtomicOpUndefinedShared() {
    print('TestCompileAtomicOpUndefinedShared');
    let _0x421673 = new WebAssembly['Memory']({
        'initial': 0,
        'maximum': 10,
        'shared': !![]
    });
    let _0x3bce4a = new WasmModuleBuilder();
    _0x3bce4a['addFunction']('main', kSig_i_ii)['addBody']([
        kExprLocalGet,
        0,
        kExprLocalGet,
        1,
        kAtomicPrefix,
        kExprI32AtomicAdd
    ]);
    _0x3bce4a['addImportedMemory']('m', 'imported_mem');
    assertThrows(() => new WebAssembly['Module'](_0x3bce4a['toBuffer']()), WebAssembly['CompileError']);
}());
(function TestInstantiateWithUndefinedShared() {
    print('TestInstantiateWithUndefinedShared');
    let _0x58f91e = new WebAssembly['Memory']({
        'initial': 0,
        'maximum': 10,
        'shared': !![]
    });
    let _0x52e924 = new WasmModuleBuilder();
    _0x52e924['addImportedMemory']('m', 'imported_mem');
    let _0x2c0e48 = new WebAssembly['Module'](_0x52e924['toBuffer']());
    assertThrows(() => new WebAssembly['Instance'](_0x2c0e48, { 'm': { 'imported_mem': _0x58f91e } }), WebAssembly['LinkError']);
}());
(function TestInstantiateWithImportNotSharedDefined() {
    print('TestInstantiateWithImportNotSharedDefined');
    let _0xcb5c7f = new WebAssembly['Memory']({
        'initial': 0,
        'maximum': 10,
        'shared': ![]
    });
    let _0x550795 = new WasmModuleBuilder();
    _0x550795['addImportedMemory']('m', 'imported_mem', 0, 10, 'shared');
    let _0x206812 = new WebAssembly['Module'](_0x550795['toBuffer']());
    assertThrows(() => new WebAssembly['Instance'](_0x206812, { 'm': { 'imported_mem': _0xcb5c7f } }), WebAssembly['LinkError']);
}());
(function TestInstantiateWithSharedDefined() {
    print('TestInstantiateWithSharedDefined');
    let _0x49b24f = new WasmModuleBuilder();
    _0x49b24f['addMemory'](2, 10, !![], 'shared');
    let _0x28f47a = new WebAssembly['Module'](_0x49b24f['toBuffer']());
    let _0x47425d = new WebAssembly['Instance'](_0x28f47a);
    assertMemoryIsValid(_0x47425d['exports']['memory'], !![]);
}());
(function TestAtomicOpWithSharedMemoryDefined() {
    print('TestAtomicOpWithSharedMemoryDefined');
    let _0x1b515d = new WasmModuleBuilder();
    _0x1b515d['addMemory'](2, 10, ![], 'shared');
    _0x1b515d['addFunction']('main', kSig_i_ii)['addBody']([
        kExprLocalGet,
        0,
        kExprLocalGet,
        1,
        kAtomicPrefix,
        kExprI32AtomicAdd,
        2,
        0
    ])['exportFunc']();
    let _0x16e996 = new WebAssembly['Module'](_0x1b515d['toBuffer']());
    let _0x382bf4 = new WebAssembly['Instance'](_0x16e996);
    assertEquals(0, _0x382bf4['exports']['main'](0, 286331153));
    assertEquals(286331153, _0x382bf4['exports']['main'](0, 286331153));
}());
(function TestMemoryConstructorShouldNotCallHasProperty() {
    print(arguments['callee']['name']);
    const _0x5ed633 = new Proxy({}, {
        'has'(_0x59a3e2, _0x3f2fdb) {
            if ('aZXev' === 'SaFGM') {
                print(arguments['callee']['name']);
                const _0x3a8773 = new Proxy({}, {
                    'has'(_0x4a35d3, _0x3430df) {
                        throw new Error('Should not call [[HasProperty]] with ' + _0x3430df);
                    },
                    'get'(_0xc30488, _0xad5bb9) {
                        return 0;
                    }
                });
                new WebAssembly['Memory'](_0x3a8773);
            } else {
                throw new Error('Should not call [[HasProperty]] with ' + _0x3f2fdb);
            }
        },
        'get'(_0x4962e6, _0x2a10fa) {
            return 0;
        }
    });
    new WebAssembly['Memory'](_0x5ed633);
}());