load(_0x53a492(310));
function assertMemoryIsValid(_0x46c61a, _0x58d0e5) {
    const _0x18c069 = _0x53a492;
    assertSame(WebAssembly[_0x18c069(311)][_0x18c069(312)], _0x46c61a[_0x18c069(313)]), assertSame(WebAssembly[_0x18c069(311)], _0x46c61a['constructor']), assertTrue(_0x46c61a instanceof Object), assertTrue(_0x46c61a instanceof WebAssembly['Memory']), _0x58d0e5 && (assertTrue(_0x46c61a[_0x18c069(314)] instanceof SharedArrayBuffer), assertTrue(Object[_0x18c069(315)](_0x46c61a[_0x18c069(314)])));
}
(function TestConstructorWithShared() {
    const _0x406409 = _0x53a492;
    print('TestConstructorWithShared');
    let _0x234ec3 = new WebAssembly[(_0x406409(311))]({
        'initial': 0,
        'maximum': 10,
        'shared': !![]
    });
    assertMemoryIsValid(_0x234ec3, !![]);
}(), function TestConstructorWithUndefinedShared() {
    const _0xc1770d = _0x53a492;
    print(_0xc1770d(316));
    let _0x1fb5df = new WebAssembly['Memory']({
        'initial': 0,
        'maximum': undefined,
        'shared': undefined
    });
    assertMemoryIsValid(_0x1fb5df);
}(), function TestConstructorWithNumericShared() {
    const _0x5f2aae = _0x53a492;
    print(_0x5f2aae(317));
    let _0x41f35d = new WebAssembly[(_0x5f2aae(311))]({
        'initial': 0,
        'maximum': 10,
        'shared': 2098665
    });
    assertMemoryIsValid(_0x41f35d, !![]);
}(), function TestConstructorWithEmptyStringShared() {
    const _0x4a778c = _0x53a492;
    print(_0x4a778c(318));
    let _0x57f1f6 = new WebAssembly['Memory']({
        'initial': 0,
        'maximum': undefined,
        'shared': ''
    });
    assertMemoryIsValid(_0x57f1f6);
}(), function TestConstructorWithUndefinedMaxShared() {
    const _0x45f247 = _0x53a492;
    print('TestConstructorWithUndefinedMaxShared'), assertThrows(() => new WebAssembly[(_0x45f247(311))]({
        'initial': 0,
        'shared': !![]
    }), TypeError);
}(), function TestCompileWithUndefinedShared() {
    const _0x106832 = _0x53a492;
    print(_0x106832(319));
    let _0x5c6595 = new WebAssembly[(_0x106832(311))]({
            'initial': 0,
            'maximum': 10,
            'shared': !![]
        }), _0x27e17d = new WasmModuleBuilder();
    _0x27e17d[_0x106832(320)]('m', _0x106832(321), 0, undefined, 'shared'), assertThrows(() => new WebAssembly[(_0x106832(322))](_0x27e17d[_0x106832(323)]()), WebAssembly[_0x106832(324)]);
}(), function TestCompileAtomicOpUndefinedShared() {
    const _0x4a14d8 = _0x53a492;
    print(_0x4a14d8(325));
    let _0x6f9487 = new WebAssembly[(_0x4a14d8(311))]({
            'initial': 0,
            'maximum': 10,
            'shared': !![]
        }), _0x136ce6 = new WasmModuleBuilder();
    _0x136ce6['addFunction'](_0x4a14d8(326), kSig_i_ii)[_0x4a14d8(327)]([
        kExprLocalGet,
        0,
        kExprLocalGet,
        1,
        kAtomicPrefix,
        kExprI32AtomicAdd
    ]), _0x136ce6[_0x4a14d8(320)]('m', _0x4a14d8(321)), assertThrows(() => new WebAssembly[(_0x4a14d8(322))](_0x136ce6[_0x4a14d8(323)]()), WebAssembly[_0x4a14d8(324)]);
}(), function TestInstantiateWithUndefinedShared() {
    const _0x331eb8 = _0x53a492;
    print(_0x331eb8(328));
    let _0x4e640f = new WebAssembly['Memory']({
            'initial': 0,
            'maximum': 10,
            'shared': !![]
        }), _0x2cdb5c = new WasmModuleBuilder();
    _0x2cdb5c[_0x331eb8(320)]('m', _0x331eb8(321));
    let _0x4a9242 = new WebAssembly[(_0x331eb8(322))](_0x2cdb5c['toBuffer']());
    assertThrows(() => new WebAssembly['Instance'](_0x4a9242, { 'm': { 'imported_mem': _0x4e640f } }), WebAssembly['LinkError']);
}(), function TestInstantiateWithImportNotSharedDefined() {
    const _0x48073d = _0x53a492;
    print(_0x48073d(329));
    let _0x3b2206 = new WebAssembly['Memory']({
            'initial': 0,
            'maximum': 10,
            'shared': ![]
        }), _0x59ab77 = new WasmModuleBuilder();
    _0x59ab77[_0x48073d(320)]('m', 'imported_mem', 0, 10, _0x48073d(330));
    let _0x5702dd = new WebAssembly[(_0x48073d(322))](_0x59ab77['toBuffer']());
    assertThrows(() => new WebAssembly['Instance'](_0x5702dd, { 'm': { 'imported_mem': _0x3b2206 } }), WebAssembly[_0x48073d(331)]);
}(), function TestInstantiateWithSharedDefined() {
    const _0x1e65ac = _0x53a492;
    print(_0x1e65ac(332));
    let _0x37b50a = new WasmModuleBuilder();
    _0x37b50a[_0x1e65ac(333)](2, 10, !![], _0x1e65ac(330));
    let _0x597958 = new WebAssembly[(_0x1e65ac(322))](_0x37b50a[_0x1e65ac(323)]()), _0x3fe552 = new WebAssembly[(_0x1e65ac(334))](_0x597958);
    assertMemoryIsValid(_0x3fe552[_0x1e65ac(335)][_0x1e65ac(336)], !![]);
}(), function TestAtomicOpWithSharedMemoryDefined() {
    const _0x2c4bb0 = _0x53a492;
    print(_0x2c4bb0(337));
    let _0x260409 = new WasmModuleBuilder();
    _0x260409[_0x2c4bb0(333)](2, 10, ![], _0x2c4bb0(330)), _0x260409['addFunction']('main', kSig_i_ii)[_0x2c4bb0(327)]([
        kExprLocalGet,
        0,
        kExprLocalGet,
        1,
        kAtomicPrefix,
        kExprI32AtomicAdd,
        2,
        0
    ])[_0x2c4bb0(338)]();
    let _0x2cce38 = new WebAssembly[(_0x2c4bb0(322))](_0x260409[_0x2c4bb0(323)]()), _0x4b78a6 = new WebAssembly['Instance'](_0x2cce38);
    assertEquals(0, _0x4b78a6['exports'][_0x2c4bb0(326)](0, 286331153)), assertEquals(286331153, _0x4b78a6[_0x2c4bb0(335)][_0x2c4bb0(326)](0, 286331153));
}(), function TestMemoryConstructorShouldNotCallHasProperty() {
    const _0x4309f2 = _0x53a492;
    print(arguments[_0x4309f2(339)]['name']);
    const _0x283454 = new Proxy({}, {
        'has'(_0x3a219f, _0x166d5c) {
            const _0x33e620 = _0x4309f2;
            throw new Error(_0x33e620(340) + _0x166d5c);
        },
        'get'(_0x161031, _0x41a897) {
            return 0;
        }
    });
    new WebAssembly[(_0x4309f2(311))](_0x283454);
}());