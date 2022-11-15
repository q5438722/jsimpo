const _0x1d5f = [
    'TestConstructorWithUndefinedShared',
    'TestConstructorWithNumericShared',
    'TestConstructorWithEmptyStringShared',
    'TestCompileWithUndefinedShared',
    'addImportedMemory',
    'imported_mem',
    'Module',
    'toBuffer',
    'CompileError',
    'TestCompileAtomicOpUndefinedShared',
    'main',
    'addBody',
    'TestInstantiateWithUndefinedShared',
    'TestInstantiateWithImportNotSharedDefined',
    'shared',
    'LinkError',
    'TestInstantiateWithSharedDefined',
    'addMemory',
    'Instance',
    'exports',
    'memory',
    'TestAtomicOpWithSharedMemoryDefined',
    'exportFunc',
    'callee',
    'Should\x20not\x20call\x20[[HasProperty]]\x20with\x20',
    '37ogUJZs',
    '18098BwrJwE',
    '410899tQToya',
    '611243CizUIO',
    '1tGLkJj',
    '817509fdjrmt',
    '36031KtAOAh',
    '104359IpyRAA',
    '5fmOWJB',
    '942926NTpyiU',
    'test/mjsunit/wasm/wasm-module-builder.js',
    'Memory',
    'prototype',
    '__proto__',
    'buffer',
    'isFrozen'
];
function _0x39e4(_0x2208e8, _0x3759c2) {
    return _0x39e4 = function (_0x1d5f27, _0x39e4aa) {
        _0x1d5f27 = _0x1d5f27 - 0x12c;
        let _0x3a1680 = _0x1d5f[_0x1d5f27];
        return _0x3a1680;
    }, _0x39e4(_0x2208e8, _0x3759c2);
}
const _0x53a492 = _0x39e4;
(function (_0x18b447, _0x472edf) {
    const _0x45e164 = _0x39e4;
    while (!![]) {
        try {
            const _0x276d7d = -parseInt(_0x45e164(0x12c)) * parseInt(_0x45e164(0x12d)) + -parseInt(_0x45e164(0x12e)) + -parseInt(_0x45e164(0x12f)) * parseInt(_0x45e164(0x130)) + parseInt(_0x45e164(0x131)) + -parseInt(_0x45e164(0x132)) + parseInt(_0x45e164(0x133)) * parseInt(_0x45e164(0x134)) + parseInt(_0x45e164(0x135));
            if (_0x276d7d === _0x472edf)
                break;
            else
                _0x18b447['push'](_0x18b447['shift']());
        } catch (_0x11918e) {
            _0x18b447['push'](_0x18b447['shift']());
        }
    }
}(_0x1d5f, 0x875bf), load(_0x53a492(0x136)));
function assertMemoryIsValid(_0x46c61a, _0x58d0e5) {
    const _0x18c069 = _0x53a492;
    assertSame(WebAssembly[_0x18c069(0x137)][_0x18c069(0x138)], _0x46c61a[_0x18c069(0x139)]), assertSame(WebAssembly[_0x18c069(0x137)], _0x46c61a['constructor']), assertTrue(_0x46c61a instanceof Object), assertTrue(_0x46c61a instanceof WebAssembly['Memory']), _0x58d0e5 && (assertTrue(_0x46c61a[_0x18c069(0x13a)] instanceof SharedArrayBuffer), assertTrue(Object[_0x18c069(0x13b)](_0x46c61a[_0x18c069(0x13a)])));
}
(function TestConstructorWithShared() {
    const _0x406409 = _0x53a492;
    print('TestConstructorWithShared');
    let _0x234ec3 = new WebAssembly[(_0x406409(0x137))]({
        'initial': 0x0,
        'maximum': 0xa,
        'shared': !![]
    });
    assertMemoryIsValid(_0x234ec3, !![]);
}(), function TestConstructorWithUndefinedShared() {
    const _0xc1770d = _0x53a492;
    print(_0xc1770d(0x13c));
    let _0x1fb5df = new WebAssembly['Memory']({
        'initial': 0x0,
        'maximum': undefined,
        'shared': undefined
    });
    assertMemoryIsValid(_0x1fb5df);
}(), function TestConstructorWithNumericShared() {
    const _0x5f2aae = _0x53a492;
    print(_0x5f2aae(0x13d));
    let _0x41f35d = new WebAssembly[(_0x5f2aae(0x137))]({
        'initial': 0x0,
        'maximum': 0xa,
        'shared': 0x2005e9
    });
    assertMemoryIsValid(_0x41f35d, !![]);
}(), function TestConstructorWithEmptyStringShared() {
    const _0x4a778c = _0x53a492;
    print(_0x4a778c(0x13e));
    let _0x57f1f6 = new WebAssembly['Memory']({
        'initial': 0x0,
        'maximum': undefined,
        'shared': ''
    });
    assertMemoryIsValid(_0x57f1f6);
}(), function TestConstructorWithUndefinedMaxShared() {
    const _0x45f247 = _0x53a492;
    print('TestConstructorWithUndefinedMaxShared'), assertThrows(() => new WebAssembly[(_0x45f247(0x137))]({
        'initial': 0x0,
        'shared': !![]
    }), TypeError);
}(), function TestCompileWithUndefinedShared() {
    const _0x106832 = _0x53a492;
    print(_0x106832(0x13f));
    let _0x5c6595 = new WebAssembly[(_0x106832(0x137))]({
            'initial': 0x0,
            'maximum': 0xa,
            'shared': !![]
        }), _0x27e17d = new WasmModuleBuilder();
    _0x27e17d[_0x106832(0x140)]('m', _0x106832(0x141), 0x0, undefined, 'shared'), assertThrows(() => new WebAssembly[(_0x106832(0x142))](_0x27e17d[_0x106832(0x143)]()), WebAssembly[_0x106832(0x144)]);
}(), function TestCompileAtomicOpUndefinedShared() {
    const _0x4a14d8 = _0x53a492;
    print(_0x4a14d8(0x145));
    let _0x6f9487 = new WebAssembly[(_0x4a14d8(0x137))]({
            'initial': 0x0,
            'maximum': 0xa,
            'shared': !![]
        }), _0x136ce6 = new WasmModuleBuilder();
    _0x136ce6['addFunction'](_0x4a14d8(0x146), kSig_i_ii)[_0x4a14d8(0x147)]([
        kExprLocalGet,
        0x0,
        kExprLocalGet,
        0x1,
        kAtomicPrefix,
        kExprI32AtomicAdd
    ]), _0x136ce6[_0x4a14d8(0x140)]('m', _0x4a14d8(0x141)), assertThrows(() => new WebAssembly[(_0x4a14d8(0x142))](_0x136ce6[_0x4a14d8(0x143)]()), WebAssembly[_0x4a14d8(0x144)]);
}(), function TestInstantiateWithUndefinedShared() {
    const _0x331eb8 = _0x53a492;
    print(_0x331eb8(0x148));
    let _0x4e640f = new WebAssembly['Memory']({
            'initial': 0x0,
            'maximum': 0xa,
            'shared': !![]
        }), _0x2cdb5c = new WasmModuleBuilder();
    _0x2cdb5c[_0x331eb8(0x140)]('m', _0x331eb8(0x141));
    let _0x4a9242 = new WebAssembly[(_0x331eb8(0x142))](_0x2cdb5c['toBuffer']());
    assertThrows(() => new WebAssembly['Instance'](_0x4a9242, { 'm': { 'imported_mem': _0x4e640f } }), WebAssembly['LinkError']);
}(), function TestInstantiateWithImportNotSharedDefined() {
    const _0x48073d = _0x53a492;
    print(_0x48073d(0x149));
    let _0x3b2206 = new WebAssembly['Memory']({
            'initial': 0x0,
            'maximum': 0xa,
            'shared': ![]
        }), _0x59ab77 = new WasmModuleBuilder();
    _0x59ab77[_0x48073d(0x140)]('m', 'imported_mem', 0x0, 0xa, _0x48073d(0x14a));
    let _0x5702dd = new WebAssembly[(_0x48073d(0x142))](_0x59ab77['toBuffer']());
    assertThrows(() => new WebAssembly['Instance'](_0x5702dd, { 'm': { 'imported_mem': _0x3b2206 } }), WebAssembly[_0x48073d(0x14b)]);
}(), function TestInstantiateWithSharedDefined() {
    const _0x1e65ac = _0x53a492;
    print(_0x1e65ac(0x14c));
    let _0x37b50a = new WasmModuleBuilder();
    _0x37b50a[_0x1e65ac(0x14d)](0x2, 0xa, !![], _0x1e65ac(0x14a));
    let _0x597958 = new WebAssembly[(_0x1e65ac(0x142))](_0x37b50a[_0x1e65ac(0x143)]()), _0x3fe552 = new WebAssembly[(_0x1e65ac(0x14e))](_0x597958);
    assertMemoryIsValid(_0x3fe552[_0x1e65ac(0x14f)][_0x1e65ac(0x150)], !![]);
}(), function TestAtomicOpWithSharedMemoryDefined() {
    const _0x2c4bb0 = _0x53a492;
    print(_0x2c4bb0(0x151));
    let _0x260409 = new WasmModuleBuilder();
    _0x260409[_0x2c4bb0(0x14d)](0x2, 0xa, ![], _0x2c4bb0(0x14a)), _0x260409['addFunction']('main', kSig_i_ii)[_0x2c4bb0(0x147)]([
        kExprLocalGet,
        0x0,
        kExprLocalGet,
        0x1,
        kAtomicPrefix,
        kExprI32AtomicAdd,
        0x2,
        0x0
    ])[_0x2c4bb0(0x152)]();
    let _0x2cce38 = new WebAssembly[(_0x2c4bb0(0x142))](_0x260409[_0x2c4bb0(0x143)]()), _0x4b78a6 = new WebAssembly['Instance'](_0x2cce38);
    assertEquals(0x0, _0x4b78a6['exports'][_0x2c4bb0(0x146)](0x0, 0x11111111)), assertEquals(0x11111111, _0x4b78a6[_0x2c4bb0(0x14f)][_0x2c4bb0(0x146)](0x0, 0x11111111));
}(), function TestMemoryConstructorShouldNotCallHasProperty() {
    const _0x4309f2 = _0x53a492;
    print(arguments[_0x4309f2(0x153)]['name']);
    const _0x283454 = new Proxy({}, {
        'has'(_0x3a219f, _0x166d5c) {
            const _0x33e620 = _0x4309f2;
            throw new Error(_0x33e620(0x154) + _0x166d5c);
        },
        'get'(_0x161031, _0x41a897) {
            return 0x0;
        }
    });
    new WebAssembly[(_0x4309f2(0x137))](_0x283454);
}());
