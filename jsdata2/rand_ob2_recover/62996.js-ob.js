load(_0x14d0da(421));
let initialMemoryPages = 1, maximumMemoryPages = 5, other_fn_idx = 0;
function generateBuilder(_0x94a319, _0x12452f) {
    const _0x3a3004 = _0x14d0da;
    let _0xda57e1 = new WasmModuleBuilder();
    if (_0x12452f) {
        let _0x1706e3 = _0xda57e1[_0x3a3004(422)](_0x3a3004(423), 'other_module_fn', _0x12452f);
        assertEquals(_0x1706e3, other_fn_idx);
    }
    return _0x94a319 && (_0xda57e1[_0x3a3004(424)](initialMemoryPages, maximumMemoryPages, !![]), _0xda57e1[_0x3a3004(425)]('load', kSig_i_i)[_0x3a3004(426)]([
        kExprLocalGet,
        0,
        kExprI32LoadMem,
        0,
        0
    ])[_0x3a3004(427)](), _0xda57e1['addFunction'](_0x3a3004(428), kSig_i_ii)[_0x3a3004(426)]([
        kExprLocalGet,
        0,
        kExprLocalGet,
        1,
        kExprI32StoreMem,
        0,
        0,
        kExprLocalGet,
        1
    ])['exportFunc']()), _0xda57e1;
}
function _0x23ee(_0x2be3f2, _0x35cac1) {
    return _0x23ee = function (_0x1a919b, _0x23ee54) {
        _0x1a919b = _0x1a919b - 411;
        let _0x4596e3 = _0x1a91[_0x1a919b];
        return _0x4596e3;
    }, _0x23ee(_0x2be3f2, _0x35cac1);
}
function assertMemoryIndependence(_0x16dfaa, _0x2ff7d2, _0x4af4a4, _0x1c06f9) {
    assertEquals(0, _0x16dfaa(0)), assertEquals(0, _0x4af4a4(0)), assertEquals(0, _0x16dfaa(4)), assertEquals(0, _0x4af4a4(4)), _0x2ff7d2(0, 101), assertEquals(101, _0x16dfaa(0)), assertEquals(0, _0x4af4a4(0)), assertEquals(0, _0x16dfaa(4)), assertEquals(0, _0x4af4a4(4)), _0x2ff7d2(4, 102), assertEquals(101, _0x16dfaa(0)), assertEquals(0, _0x4af4a4(0)), assertEquals(102, _0x16dfaa(4)), assertEquals(0, _0x4af4a4(4)), _0x1c06f9(0, 103), assertEquals(101, _0x16dfaa(0)), assertEquals(103, _0x4af4a4(0)), assertEquals(102, _0x16dfaa(4)), assertEquals(0, _0x4af4a4(4)), _0x1c06f9(4, 107), assertEquals(101, _0x16dfaa(0)), assertEquals(103, _0x4af4a4(0)), assertEquals(102, _0x16dfaa(4)), assertEquals(107, _0x4af4a4(4)), _0x2ff7d2(0, 0), _0x2ff7d2(4, 0), _0x1c06f9(0, 0), _0x1c06f9(4, 0);
}
(function SimpleMemoryIndependenceTest() {
    const _0x36fe95 = _0x14d0da;
    print(_0x36fe95(429));
    let _0x2ea170 = 1, _0x207ee9 = new WasmModuleBuilder();
    _0x207ee9['addMemory'](_0x2ea170, _0x2ea170, !![]), _0x207ee9[_0x36fe95(425)]('store', kSig_v_ii)[_0x36fe95(426)]([
        kExprLocalGet,
        0,
        kExprLocalGet,
        1,
        kExprI32StoreMem,
        0,
        0
    ])[_0x36fe95(427)](), _0x207ee9[_0x36fe95(425)]('load', kSig_i_i)['addBody']([
        kExprLocalGet,
        0,
        kExprI32LoadMem,
        0,
        0
    ])[_0x36fe95(427)]();
    var _0x1b2c86 = _0x207ee9[_0x36fe95(430)]();
    _0x207ee9 = new WasmModuleBuilder(), _0x207ee9[_0x36fe95(422)](_0x36fe95(431), 'store', kSig_v_ii), _0x207ee9['addMemory'](_0x2ea170, _0x2ea170, !![]), _0x207ee9[_0x36fe95(425)](_0x36fe95(428), kSig_v_ii)['addBody']([
        kExprLocalGet,
        0,
        kExprLocalGet,
        1,
        kExprCallFunction,
        0
    ])[_0x36fe95(427)](), _0x207ee9[_0x36fe95(425)](_0x36fe95(432), kSig_i_i)[_0x36fe95(426)]([
        kExprLocalGet,
        0,
        kExprI32LoadMem,
        0,
        0
    ])[_0x36fe95(427)]();
    var _0x4b4d21 = _0x207ee9[_0x36fe95(430)]({ 'mod': { 'store': _0x1b2c86[_0x36fe95(433)][_0x36fe95(428)] } });
    assertEquals(0, _0x1b2c86[_0x36fe95(433)][_0x36fe95(432)](0)), assertEquals(0, _0x4b4d21['exports'][_0x36fe95(432)](0)), assertEquals(0, _0x1b2c86[_0x36fe95(433)][_0x36fe95(432)](4)), assertEquals(0, _0x4b4d21[_0x36fe95(433)][_0x36fe95(432)](4)), _0x1b2c86[_0x36fe95(433)]['store'](0, 101), assertEquals(101, _0x1b2c86[_0x36fe95(433)][_0x36fe95(432)](0)), assertEquals(0, _0x4b4d21[_0x36fe95(433)][_0x36fe95(432)](0)), assertEquals(0, _0x1b2c86[_0x36fe95(433)][_0x36fe95(432)](4)), assertEquals(0, _0x4b4d21[_0x36fe95(433)]['load'](4)), _0x1b2c86[_0x36fe95(433)]['store'](4, 102), assertEquals(101, _0x1b2c86[_0x36fe95(433)]['load'](0)), assertEquals(0, _0x4b4d21[_0x36fe95(433)][_0x36fe95(432)](0)), assertEquals(102, _0x1b2c86[_0x36fe95(433)][_0x36fe95(432)](4)), assertEquals(0, _0x4b4d21[_0x36fe95(433)][_0x36fe95(432)](4)), _0x4b4d21[_0x36fe95(433)][_0x36fe95(428)](4, 107), assertEquals(101, _0x1b2c86[_0x36fe95(433)][_0x36fe95(432)](0)), assertEquals(0, _0x4b4d21[_0x36fe95(433)][_0x36fe95(432)](0)), assertEquals(107, _0x1b2c86[_0x36fe95(433)][_0x36fe95(432)](4)), assertEquals(0, _0x4b4d21['exports'][_0x36fe95(432)](4));
}(), function TestExternalCallBetweenTwoWasmModulesWithoutAndWithMemory() {
    const _0x3ef3be = _0x14d0da;
    print(_0x3ef3be(434));
    let _0x5d9f27 = generateBuilder(add_memory = ![], import_sig = kSig_i_i);
    _0x5d9f27[_0x3ef3be(425)](_0x3ef3be(435), kSig_i_i)['addBody']([
        kExprLocalGet,
        0,
        kExprCallFunction,
        other_fn_idx,
        kExprI32Const,
        1,
        kExprI32Add,
        kExprReturn
    ])[_0x3ef3be(427)]();
    let _0x1dc4b5 = generateBuilder(add_memory = !![], import_sig = undefined), _0x3dbc04 = kPageSize - 4, _0x4c4e25 = 2222, _0x4b9055 = _0x1dc4b5['instantiate'](), _0x57747e = _0x5d9f27[_0x3ef3be(430)]({ 'import_module': { 'other_module_fn': _0x4b9055[_0x3ef3be(433)][_0x3ef3be(432)] } });
    _0x4b9055['exports'][_0x3ef3be(428)](_0x3dbc04, _0x4c4e25), assertEquals(_0x4c4e25, _0x4b9055[_0x3ef3be(433)][_0x3ef3be(432)](_0x3dbc04)), assertEquals(_0x4c4e25 + 1, _0x57747e[_0x3ef3be(433)]['plus_one'](_0x3dbc04));
}(), function TestExternalCallBetweenTwoWasmModulesWithMemory() {
    const _0x22b292 = _0x14d0da;
    print('TestExternalCallBetweenTwoWasmModulesWithMemory');
    let _0x28b8a5 = generateBuilder(add_memory = !![], import_sig = kSig_i_i);
    _0x28b8a5[_0x22b292(425)]('plus_one', kSig_i_i)[_0x22b292(426)]([
        kExprLocalGet,
        0,
        kExprCallFunction,
        other_fn_idx,
        kExprI32Const,
        1,
        kExprI32Add,
        kExprReturn
    ])[_0x22b292(427)]();
    let _0x42cee7 = generateBuilder(add_memory = !![], import_sig = undefined), _0x58b6af = kPageSize - 4, _0xd8ff96 = 1111, _0x112f77 = 2222, _0x5f05a7 = _0x42cee7[_0x22b292(430)](), _0xd536b4 = _0x28b8a5['instantiate']({ 'import_module': { 'other_module_fn': _0x5f05a7[_0x22b292(433)]['load'] } });
    _0xd536b4[_0x22b292(433)][_0x22b292(428)](_0x58b6af, _0xd8ff96), _0x5f05a7[_0x22b292(433)]['store'](_0x58b6af, _0x112f77), assertEquals(_0xd8ff96, _0xd536b4[_0x22b292(433)][_0x22b292(432)](_0x58b6af)), assertEquals(_0x112f77, _0x5f05a7[_0x22b292(433)][_0x22b292(432)](_0x58b6af)), assertEquals(_0x112f77 + 1, _0xd536b4[_0x22b292(433)][_0x22b292(435)](_0x58b6af));
}(), function TestCorrectMemoryAccessedAfterReturningFromExternalCall() {
    const _0x5de9c2 = _0x14d0da;
    print(_0x5de9c2(436));
    let _0x52f45f = generateBuilder(add_memory = !![], import_sig = kSig_i_ii);
    _0x52f45f[_0x5de9c2(425)](_0x5de9c2(437), kSig_i_iii)[_0x5de9c2(426)]([
        kExprLocalGet,
        0,
        kExprLocalGet,
        1,
        kExprI32StoreMem,
        0,
        0,
        kExprLocalGet,
        0,
        kExprLocalGet,
        2,
        kExprCallFunction,
        other_fn_idx,
        kExprDrop,
        kExprLocalGet,
        0,
        kExprI32LoadMem,
        0,
        0,
        kExprReturn
    ])[_0x5de9c2(427)]();
    let _0x4c5ab4 = generateBuilder(add_memory = !![], import_sig = undefined), _0x4cd2a0 = kPageSize - 4, _0x414102 = 1111, _0x54fe7d = 2222, _0x1ec675 = _0x4c5ab4[_0x5de9c2(430)](), _0x3f41c3 = _0x52f45f[_0x5de9c2(430)]({ 'import_module': { 'other_module_fn': _0x1ec675[_0x5de9c2(433)][_0x5de9c2(428)] } });
    assertEquals(_0x414102, _0x3f41c3[_0x5de9c2(433)]['sandwich'](_0x4cd2a0, _0x414102, _0x54fe7d)), assertEquals(_0x414102, _0x3f41c3[_0x5de9c2(433)][_0x5de9c2(432)](_0x4cd2a0)), assertEquals(_0x54fe7d, _0x1ec675[_0x5de9c2(433)][_0x5de9c2(432)](_0x4cd2a0));
}(), function CallThroughTableMemoryIndependenceTest() {
    const _0x2ca336 = _0x14d0da;
    print(_0x2ca336(438));
    let _0x3fb01e = 2, _0x34f30b = 1, _0x204a74 = new WasmModuleBuilder();
    _0x204a74['addMemory'](_0x34f30b, _0x34f30b, !![]), _0x204a74['addFunction'](_0x2ca336(428), kSig_v_ii)['addBody']([
        kExprLocalGet,
        0,
        kExprLocalGet,
        1,
        kExprI32StoreMem,
        0,
        0
    ])[_0x2ca336(427)](), _0x204a74[_0x2ca336(425)](_0x2ca336(432), kSig_i_i)[_0x2ca336(426)]([
        kExprLocalGet,
        0,
        kExprI32LoadMem,
        0,
        0
    ])[_0x2ca336(427)]();
    {
        let _0x5b6201 = _0x204a74[_0x2ca336(439)]();
        var _0x477c80 = new WebAssembly[(_0x2ca336(440))](_0x5b6201), _0x54d9cb = new WebAssembly[(_0x2ca336(440))](_0x5b6201);
        assertMemoryIndependence(_0x477c80[_0x2ca336(433)][_0x2ca336(432)], _0x477c80['exports'][_0x2ca336(428)], _0x54d9cb[_0x2ca336(433)][_0x2ca336(432)], _0x54d9cb['exports']['store']);
    }
    let _0x4b4f4b = new WebAssembly[(_0x2ca336(441))]({
        'element': _0x2ca336(442),
        'initial': _0x3fb01e,
        'maximum': _0x3fb01e
    });
    _0x4b4f4b[_0x2ca336(443)](0, _0x477c80[_0x2ca336(433)][_0x2ca336(428)]), _0x4b4f4b[_0x2ca336(443)](1, _0x54d9cb[_0x2ca336(433)][_0x2ca336(428)]), assertMemoryIndependence(_0x477c80[_0x2ca336(433)][_0x2ca336(432)], _0x4b4f4b[_0x2ca336(444)](0), _0x54d9cb[_0x2ca336(433)][_0x2ca336(432)], _0x4b4f4b[_0x2ca336(444)](1)), _0x4b4f4b['set'](1, _0x477c80[_0x2ca336(433)][_0x2ca336(428)]), _0x4b4f4b[_0x2ca336(443)](0, _0x54d9cb[_0x2ca336(433)]['store']), assertMemoryIndependence(_0x477c80[_0x2ca336(433)][_0x2ca336(432)], _0x4b4f4b[_0x2ca336(444)](1), _0x54d9cb['exports'][_0x2ca336(432)], _0x4b4f4b['get'](0)), _0x204a74 = new WasmModuleBuilder(), _0x204a74[_0x2ca336(445)]('m', _0x2ca336(446), _0x3fb01e, _0x3fb01e);
    var _0x3fcf84 = _0x204a74['addType'](kSig_v_ii);
    _0x204a74[_0x2ca336(425)]('store', kSig_v_iii)['addBody']([
        kExprLocalGet,
        1,
        kExprLocalGet,
        2,
        kExprLocalGet,
        0,
        kExprCallIndirect,
        _0x3fcf84,
        kTableZero
    ])[_0x2ca336(427)]();
    let _0x38f1cf = _0x204a74[_0x2ca336(430)]({ 'm': { 'table': _0x4b4f4b } }), _0x3e959e = 1, _0x391ba4 = 0, _0x47a649 = (_0x507aaf, _0x29b8f5) => _0x38f1cf[_0x2ca336(433)][_0x2ca336(428)](_0x3e959e, _0x507aaf, _0x29b8f5), _0x1f7c03 = (_0x5cd10a, _0x227971) => _0x38f1cf[_0x2ca336(433)][_0x2ca336(428)](_0x391ba4, _0x5cd10a, _0x227971);
    assertMemoryIndependence(_0x477c80[_0x2ca336(433)][_0x2ca336(432)], _0x47a649, _0x54d9cb[_0x2ca336(433)][_0x2ca336(432)], _0x1f7c03), _0x4b4f4b[_0x2ca336(443)](0, _0x477c80['exports']['store']), _0x4b4f4b[_0x2ca336(443)](1, _0x54d9cb['exports'][_0x2ca336(428)]), _0x3e959e = 0, _0x391ba4 = 1, assertMemoryIndependence(_0x477c80[_0x2ca336(433)][_0x2ca336(432)], _0x47a649, _0x54d9cb[_0x2ca336(433)][_0x2ca336(432)], _0x1f7c03);
}());