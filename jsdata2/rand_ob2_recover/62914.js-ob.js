load(_0x16a8c9(185));
function _0x1cb5(_0x156a2d, _0x25a15e) {
    return _0x1cb5 = function (_0x5aa72c, _0x1cb5d4) {
        _0x5aa72c = _0x5aa72c - 175;
        let _0x1d783a = _0x5aa7[_0x5aa72c];
        return _0x1d783a;
    }, _0x1cb5(_0x156a2d, _0x25a15e);
}
function assertMemoryIsValid(_0x25c438, _0x4bb8a8) {
    const _0x53fb01 = _0x16a8c9;
    assertSame(WebAssembly['Memory'][_0x53fb01(186)], _0x25c438['__proto__']), assertSame(WebAssembly[_0x53fb01(187)], _0x25c438['constructor']), assertTrue(_0x25c438 instanceof Object), assertTrue(_0x25c438 instanceof WebAssembly[_0x53fb01(187)]), _0x4bb8a8 && (assertTrue(_0x25c438['buffer'] instanceof SharedArrayBuffer), assertTrue(Object['isFrozen'](_0x25c438[_0x53fb01(188)])));
}
(function TestConstructorWithShared() {
    const _0x1ab9e8 = _0x16a8c9;
    print(_0x1ab9e8(189));
    let _0x26f250 = new WebAssembly['Memory']({
        'initial': 0,
        'maximum': 10,
        'shared': !![]
    });
    assertMemoryIsValid(_0x26f250, !![]);
}(), function TestConstructorWithUndefinedShared() {
    const _0x5f584f = _0x16a8c9;
    print(_0x5f584f(190));
    let _0x526ce8 = new WebAssembly[(_0x5f584f(187))]({
        'initial': 0,
        'maximum': undefined,
        'shared': undefined
    });
    assertMemoryIsValid(_0x526ce8);
}(), function TestConstructorWithNumericShared() {
    const _0x1902a4 = _0x16a8c9;
    print(_0x1902a4(191));
    let _0x55024c = new WebAssembly[(_0x1902a4(187))]({
        'initial': 0,
        'maximum': 10,
        'shared': 2098665
    });
    assertMemoryIsValid(_0x55024c, !![]);
}(), function TestConstructorWithEmptyStringShared() {
    const _0x4c563c = _0x16a8c9;
    print('TestConstructorWithEmptyStringShared');
    let _0x2235f4 = new WebAssembly[(_0x4c563c(187))]({
        'initial': 0,
        'maximum': undefined,
        'shared': ''
    });
    assertMemoryIsValid(_0x2235f4);
}(), function TestConstructorWithUndefinedMaxShared() {
    const _0xb93623 = _0x16a8c9;
    print(_0xb93623(192)), assertThrows(() => new WebAssembly[(_0xb93623(187))]({
        'initial': 0,
        'shared': !![]
    }), TypeError);
}(), function TestCompileWithUndefinedShared() {
    const _0x4bd661 = _0x16a8c9;
    print(_0x4bd661(193));
    let _0x3f55ec = new WebAssembly[(_0x4bd661(187))]({
            'initial': 0,
            'maximum': 10,
            'shared': !![]
        }), _0x4c5ce2 = new WasmModuleBuilder();
    _0x4c5ce2[_0x4bd661(194)]('m', _0x4bd661(195), 0, undefined, _0x4bd661(196)), assertThrows(() => new WebAssembly[(_0x4bd661(197))](_0x4c5ce2[_0x4bd661(198)]()), WebAssembly[_0x4bd661(199)]);
}(), function TestCompileAtomicOpUndefinedShared() {
    const _0x1b638e = _0x16a8c9;
    print(_0x1b638e(200));
    let _0x45f98f = new WebAssembly[(_0x1b638e(187))]({
            'initial': 0,
            'maximum': 10,
            'shared': !![]
        }), _0x558b18 = new WasmModuleBuilder();
    _0x558b18[_0x1b638e(201)]('main', kSig_i_ii)[_0x1b638e(202)]([
        kExprLocalGet,
        0,
        kExprLocalGet,
        1,
        kAtomicPrefix,
        kExprI32AtomicAdd
    ]), _0x558b18['addImportedMemory']('m', _0x1b638e(195)), assertThrows(() => new WebAssembly[(_0x1b638e(197))](_0x558b18[_0x1b638e(198)]()), WebAssembly[_0x1b638e(199)]);
}(), function TestInstantiateWithUndefinedShared() {
    const _0x31a420 = _0x16a8c9;
    print(_0x31a420(203));
    let _0x4a7136 = new WebAssembly[(_0x31a420(187))]({
            'initial': 0,
            'maximum': 10,
            'shared': !![]
        }), _0x27e558 = new WasmModuleBuilder();
    _0x27e558[_0x31a420(194)]('m', _0x31a420(195));
    let _0x2514a8 = new WebAssembly[(_0x31a420(197))](_0x27e558['toBuffer']());
    assertThrows(() => new WebAssembly['Instance'](_0x2514a8, { 'm': { 'imported_mem': _0x4a7136 } }), WebAssembly[_0x31a420(204)]);
}(), function TestInstantiateWithImportNotSharedDefined() {
    const _0x12137a = _0x16a8c9;
    print(_0x12137a(205));
    let _0x417d45 = new WebAssembly[(_0x12137a(187))]({
            'initial': 0,
            'maximum': 10,
            'shared': ![]
        }), _0x53614c = new WasmModuleBuilder();
    _0x53614c[_0x12137a(194)]('m', _0x12137a(195), 0, 10, _0x12137a(196));
    let _0x4685fe = new WebAssembly[(_0x12137a(197))](_0x53614c['toBuffer']());
    assertThrows(() => new WebAssembly[(_0x12137a(206))](_0x4685fe, { 'm': { 'imported_mem': _0x417d45 } }), WebAssembly[_0x12137a(204)]);
}(), function TestInstantiateWithSharedDefined() {
    const _0x5542ea = _0x16a8c9;
    print(_0x5542ea(207));
    let _0x13b959 = new WasmModuleBuilder();
    _0x13b959[_0x5542ea(208)](2, 10, !![], _0x5542ea(196));
    let _0x2d463d = new WebAssembly[(_0x5542ea(197))](_0x13b959[_0x5542ea(198)]()), _0x28c8af = new WebAssembly[(_0x5542ea(206))](_0x2d463d);
    assertMemoryIsValid(_0x28c8af[_0x5542ea(209)]['memory'], !![]);
}(), function TestAtomicOpWithSharedMemoryDefined() {
    const _0x10b8b5 = _0x16a8c9;
    print(_0x10b8b5(210));
    let _0x5ea9fd = new WasmModuleBuilder();
    _0x5ea9fd[_0x10b8b5(208)](2, 10, ![], 'shared'), _0x5ea9fd['addFunction'](_0x10b8b5(211), kSig_i_ii)[_0x10b8b5(202)]([
        kExprLocalGet,
        0,
        kExprLocalGet,
        1,
        kAtomicPrefix,
        kExprI32AtomicAdd,
        2,
        0
    ])['exportFunc']();
    let _0x2085da = new WebAssembly['Module'](_0x5ea9fd[_0x10b8b5(198)]()), _0x2ec7fd = new WebAssembly['Instance'](_0x2085da);
    assertEquals(0, _0x2ec7fd[_0x10b8b5(209)][_0x10b8b5(211)](0, 286331153)), assertEquals(286331153, _0x2ec7fd[_0x10b8b5(209)]['main'](0, 286331153));
}(), function TestMemoryConstructorShouldNotCallHasProperty() {
    const _0x55c8b5 = _0x16a8c9;
    print(arguments['callee'][_0x55c8b5(212)]);
    const _0xebf24b = new Proxy({}, {
        'has'(_0x1a141b, _0x15a0d2) {
            const _0x167be5 = _0x55c8b5;
            throw new Error(_0x167be5(213) + _0x15a0d2);
        },
        'get'(_0x19d90b, _0x3692d5) {
            return 0;
        }
    });
    new WebAssembly['Memory'](_0xebf24b);
}());