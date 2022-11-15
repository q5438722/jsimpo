const _0x5aa7 = [
    '3115JsOwsZ',
    '472504vHfGYf',
    '16996iKEJWp',
    '10XzNFEf',
    '2408763emnJaJ',
    'test/mjsunit/wasm/wasm-module-builder.js',
    'prototype',
    'Memory',
    'buffer',
    'TestConstructorWithShared',
    'TestConstructorWithUndefinedShared',
    'TestConstructorWithNumericShared',
    'TestConstructorWithUndefinedMaxShared',
    'TestCompileWithUndefinedShared',
    'addImportedMemory',
    'imported_mem',
    'shared',
    'Module',
    'toBuffer',
    'CompileError',
    'TestCompileAtomicOpUndefinedShared',
    'addFunction',
    'addBody',
    'TestInstantiateWithUndefinedShared',
    'LinkError',
    'TestInstantiateWithImportNotSharedDefined',
    'Instance',
    'TestInstantiateWithSharedDefined',
    'addMemory',
    'exports',
    'TestAtomicOpWithSharedMemoryDefined',
    'main',
    'name',
    'Should\x20not\x20call\x20[[HasProperty]]\x20with\x20',
    '47751shtGOw',
    '1NuTWLQ',
    '700333jWuXLX',
    '856094BkvayW',
    '322pNapQj'
];
const _0x16a8c9 = _0x1cb5;
(function (_0x84cb9f, _0x194c96) {
    const _0xb66abf = _0x1cb5;
    while (!![]) {
        try {
            const _0x29ea12 = -parseInt(_0xb66abf(0xaf)) + -parseInt(_0xb66abf(0xb0)) * -parseInt(_0xb66abf(0xb1)) + -parseInt(_0xb66abf(0xb2)) + -parseInt(_0xb66abf(0xb3)) * parseInt(_0xb66abf(0xb4)) + -parseInt(_0xb66abf(0xb5)) + parseInt(_0xb66abf(0xb6)) * -parseInt(_0xb66abf(0xb7)) + parseInt(_0xb66abf(0xb8));
            if (_0x29ea12 === _0x194c96)
                break;
            else
                _0x84cb9f['push'](_0x84cb9f['shift']());
        } catch (_0x483a2d) {
            _0x84cb9f['push'](_0x84cb9f['shift']());
        }
    }
}(_0x5aa7, 0x88a8d), load(_0x16a8c9(0xb9)));
function _0x1cb5(_0x156a2d, _0x25a15e) {
    return _0x1cb5 = function (_0x5aa72c, _0x1cb5d4) {
        _0x5aa72c = _0x5aa72c - 0xaf;
        let _0x1d783a = _0x5aa7[_0x5aa72c];
        return _0x1d783a;
    }, _0x1cb5(_0x156a2d, _0x25a15e);
}
function assertMemoryIsValid(_0x25c438, _0x4bb8a8) {
    const _0x53fb01 = _0x16a8c9;
    assertSame(WebAssembly['Memory'][_0x53fb01(0xba)], _0x25c438['__proto__']), assertSame(WebAssembly[_0x53fb01(0xbb)], _0x25c438['constructor']), assertTrue(_0x25c438 instanceof Object), assertTrue(_0x25c438 instanceof WebAssembly[_0x53fb01(0xbb)]), _0x4bb8a8 && (assertTrue(_0x25c438['buffer'] instanceof SharedArrayBuffer), assertTrue(Object['isFrozen'](_0x25c438[_0x53fb01(0xbc)])));
}
(function TestConstructorWithShared() {
    const _0x1ab9e8 = _0x16a8c9;
    print(_0x1ab9e8(0xbd));
    let _0x26f250 = new WebAssembly['Memory']({
        'initial': 0x0,
        'maximum': 0xa,
        'shared': !![]
    });
    assertMemoryIsValid(_0x26f250, !![]);
}(), function TestConstructorWithUndefinedShared() {
    const _0x5f584f = _0x16a8c9;
    print(_0x5f584f(0xbe));
    let _0x526ce8 = new WebAssembly[(_0x5f584f(0xbb))]({
        'initial': 0x0,
        'maximum': undefined,
        'shared': undefined
    });
    assertMemoryIsValid(_0x526ce8);
}(), function TestConstructorWithNumericShared() {
    const _0x1902a4 = _0x16a8c9;
    print(_0x1902a4(0xbf));
    let _0x55024c = new WebAssembly[(_0x1902a4(0xbb))]({
        'initial': 0x0,
        'maximum': 0xa,
        'shared': 0x2005e9
    });
    assertMemoryIsValid(_0x55024c, !![]);
}(), function TestConstructorWithEmptyStringShared() {
    const _0x4c563c = _0x16a8c9;
    print('TestConstructorWithEmptyStringShared');
    let _0x2235f4 = new WebAssembly[(_0x4c563c(0xbb))]({
        'initial': 0x0,
        'maximum': undefined,
        'shared': ''
    });
    assertMemoryIsValid(_0x2235f4);
}(), function TestConstructorWithUndefinedMaxShared() {
    const _0xb93623 = _0x16a8c9;
    print(_0xb93623(0xc0)), assertThrows(() => new WebAssembly[(_0xb93623(0xbb))]({
        'initial': 0x0,
        'shared': !![]
    }), TypeError);
}(), function TestCompileWithUndefinedShared() {
    const _0x4bd661 = _0x16a8c9;
    print(_0x4bd661(0xc1));
    let _0x3f55ec = new WebAssembly[(_0x4bd661(0xbb))]({
            'initial': 0x0,
            'maximum': 0xa,
            'shared': !![]
        }), _0x4c5ce2 = new WasmModuleBuilder();
    _0x4c5ce2[_0x4bd661(0xc2)]('m', _0x4bd661(0xc3), 0x0, undefined, _0x4bd661(0xc4)), assertThrows(() => new WebAssembly[(_0x4bd661(0xc5))](_0x4c5ce2[_0x4bd661(0xc6)]()), WebAssembly[_0x4bd661(0xc7)]);
}(), function TestCompileAtomicOpUndefinedShared() {
    const _0x1b638e = _0x16a8c9;
    print(_0x1b638e(0xc8));
    let _0x45f98f = new WebAssembly[(_0x1b638e(0xbb))]({
            'initial': 0x0,
            'maximum': 0xa,
            'shared': !![]
        }), _0x558b18 = new WasmModuleBuilder();
    _0x558b18[_0x1b638e(0xc9)]('main', kSig_i_ii)[_0x1b638e(0xca)]([
        kExprLocalGet,
        0x0,
        kExprLocalGet,
        0x1,
        kAtomicPrefix,
        kExprI32AtomicAdd
    ]), _0x558b18['addImportedMemory']('m', _0x1b638e(0xc3)), assertThrows(() => new WebAssembly[(_0x1b638e(0xc5))](_0x558b18[_0x1b638e(0xc6)]()), WebAssembly[_0x1b638e(0xc7)]);
}(), function TestInstantiateWithUndefinedShared() {
    const _0x31a420 = _0x16a8c9;
    print(_0x31a420(0xcb));
    let _0x4a7136 = new WebAssembly[(_0x31a420(0xbb))]({
            'initial': 0x0,
            'maximum': 0xa,
            'shared': !![]
        }), _0x27e558 = new WasmModuleBuilder();
    _0x27e558[_0x31a420(0xc2)]('m', _0x31a420(0xc3));
    let _0x2514a8 = new WebAssembly[(_0x31a420(0xc5))](_0x27e558['toBuffer']());
    assertThrows(() => new WebAssembly['Instance'](_0x2514a8, { 'm': { 'imported_mem': _0x4a7136 } }), WebAssembly[_0x31a420(0xcc)]);
}(), function TestInstantiateWithImportNotSharedDefined() {
    const _0x12137a = _0x16a8c9;
    print(_0x12137a(0xcd));
    let _0x417d45 = new WebAssembly[(_0x12137a(0xbb))]({
            'initial': 0x0,
            'maximum': 0xa,
            'shared': ![]
        }), _0x53614c = new WasmModuleBuilder();
    _0x53614c[_0x12137a(0xc2)]('m', _0x12137a(0xc3), 0x0, 0xa, _0x12137a(0xc4));
    let _0x4685fe = new WebAssembly[(_0x12137a(0xc5))](_0x53614c['toBuffer']());
    assertThrows(() => new WebAssembly[(_0x12137a(0xce))](_0x4685fe, { 'm': { 'imported_mem': _0x417d45 } }), WebAssembly[_0x12137a(0xcc)]);
}(), function TestInstantiateWithSharedDefined() {
    const _0x5542ea = _0x16a8c9;
    print(_0x5542ea(0xcf));
    let _0x13b959 = new WasmModuleBuilder();
    _0x13b959[_0x5542ea(0xd0)](0x2, 0xa, !![], _0x5542ea(0xc4));
    let _0x2d463d = new WebAssembly[(_0x5542ea(0xc5))](_0x13b959[_0x5542ea(0xc6)]()), _0x28c8af = new WebAssembly[(_0x5542ea(0xce))](_0x2d463d);
    assertMemoryIsValid(_0x28c8af[_0x5542ea(0xd1)]['memory'], !![]);
}(), function TestAtomicOpWithSharedMemoryDefined() {
    const _0x10b8b5 = _0x16a8c9;
    print(_0x10b8b5(0xd2));
    let _0x5ea9fd = new WasmModuleBuilder();
    _0x5ea9fd[_0x10b8b5(0xd0)](0x2, 0xa, ![], 'shared'), _0x5ea9fd['addFunction'](_0x10b8b5(0xd3), kSig_i_ii)[_0x10b8b5(0xca)]([
        kExprLocalGet,
        0x0,
        kExprLocalGet,
        0x1,
        kAtomicPrefix,
        kExprI32AtomicAdd,
        0x2,
        0x0
    ])['exportFunc']();
    let _0x2085da = new WebAssembly['Module'](_0x5ea9fd[_0x10b8b5(0xc6)]()), _0x2ec7fd = new WebAssembly['Instance'](_0x2085da);
    assertEquals(0x0, _0x2ec7fd[_0x10b8b5(0xd1)][_0x10b8b5(0xd3)](0x0, 0x11111111)), assertEquals(0x11111111, _0x2ec7fd[_0x10b8b5(0xd1)]['main'](0x0, 0x11111111));
}(), function TestMemoryConstructorShouldNotCallHasProperty() {
    const _0x55c8b5 = _0x16a8c9;
    print(arguments['callee'][_0x55c8b5(0xd4)]);
    const _0xebf24b = new Proxy({}, {
        'has'(_0x1a141b, _0x15a0d2) {
            const _0x167be5 = _0x55c8b5;
            throw new Error(_0x167be5(0xd5) + _0x15a0d2);
        },
        'get'(_0x19d90b, _0x3692d5) {
            return 0x0;
        }
    });
    new WebAssembly['Memory'](_0xebf24b);
}());
