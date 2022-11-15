load('test/mjsunit/wasm/wasm-module-builder.js');
let initialMemoryPages = 1;
let maximumMemoryPages = 5;
let other_fn_idx = 0;
function generateBuilder(_0x2cd289, _0x2d2757) {
    let _0xfcd574 = new WasmModuleBuilder();
    if (_0x2d2757) {
        let _0x2d2b29 = _0xfcd574['addImport']('import_module', 'other_module_fn', _0x2d2757);
        assertEquals(_0x2d2b29, other_fn_idx);
    }
    if (_0x2cd289) {
        _0xfcd574['addMemory'](initialMemoryPages, maximumMemoryPages, !![]);
        _0xfcd574['addFunction']('load', kSig_i_i)['addBody']([
            kExprLocalGet,
            0,
            kExprI32LoadMem,
            0,
            0
        ])['exportFunc']();
        _0xfcd574['addFunction']('store', kSig_i_ii)['addBody']([
            kExprLocalGet,
            0,
            kExprLocalGet,
            1,
            kExprI32StoreMem,
            0,
            0,
            kExprLocalGet,
            1
        ])['exportFunc']();
    }
    return _0xfcd574;
}
function assertMemoryIndependence(_0x22eb0c, _0x33533f, _0x1dc9d7, _0x4c1936) {
    assertEquals(0, _0x22eb0c(0));
    assertEquals(0, _0x1dc9d7(0));
    assertEquals(0, _0x22eb0c(4));
    assertEquals(0, _0x1dc9d7(4));
    _0x33533f(0, 101);
    assertEquals(101, _0x22eb0c(0));
    assertEquals(0, _0x1dc9d7(0));
    assertEquals(0, _0x22eb0c(4));
    assertEquals(0, _0x1dc9d7(4));
    _0x33533f(4, 102);
    assertEquals(101, _0x22eb0c(0));
    assertEquals(0, _0x1dc9d7(0));
    assertEquals(102, _0x22eb0c(4));
    assertEquals(0, _0x1dc9d7(4));
    _0x4c1936(0, 103);
    assertEquals(101, _0x22eb0c(0));
    assertEquals(103, _0x1dc9d7(0));
    assertEquals(102, _0x22eb0c(4));
    assertEquals(0, _0x1dc9d7(4));
    _0x4c1936(4, 107);
    assertEquals(101, _0x22eb0c(0));
    assertEquals(103, _0x1dc9d7(0));
    assertEquals(102, _0x22eb0c(4));
    assertEquals(107, _0x1dc9d7(4));
    _0x33533f(0, 0);
    _0x33533f(4, 0);
    _0x4c1936(0, 0);
    _0x4c1936(4, 0);
}
(function SimpleMemoryIndependenceTest() {
    print('SimpleMemoryIndependenceTest');
    let _0x5a1d8e = 1;
    let _0x55df4f = new WasmModuleBuilder();
    _0x55df4f['addMemory'](_0x5a1d8e, _0x5a1d8e, !![]);
    _0x55df4f['addFunction']('store', kSig_v_ii)['addBody']([
        kExprLocalGet,
        0,
        kExprLocalGet,
        1,
        kExprI32StoreMem,
        0,
        0
    ])['exportFunc']();
    _0x55df4f['addFunction']('load', kSig_i_i)['addBody']([
        kExprLocalGet,
        0,
        kExprI32LoadMem,
        0,
        0
    ])['exportFunc']();
    var _0x5848ff = _0x55df4f['instantiate']();
    _0x55df4f = new WasmModuleBuilder();
    _0x55df4f['addImport']('mod', 'store', kSig_v_ii);
    _0x55df4f['addMemory'](_0x5a1d8e, _0x5a1d8e, !![]);
    _0x55df4f['addFunction']('store', kSig_v_ii)['addBody']([
        kExprLocalGet,
        0,
        kExprLocalGet,
        1,
        kExprCallFunction,
        0
    ])['exportFunc']();
    _0x55df4f['addFunction']('load', kSig_i_i)['addBody']([
        kExprLocalGet,
        0,
        kExprI32LoadMem,
        0,
        0
    ])['exportFunc']();
    var _0x39379c = _0x55df4f['instantiate']({ 'mod': { 'store': _0x5848ff['exports']['store'] } });
    assertEquals(0, _0x5848ff['exports']['load'](0));
    assertEquals(0, _0x39379c['exports']['load'](0));
    assertEquals(0, _0x5848ff['exports']['load'](4));
    assertEquals(0, _0x39379c['exports']['load'](4));
    _0x5848ff['exports']['store'](0, 101);
    assertEquals(101, _0x5848ff['exports']['load'](0));
    assertEquals(0, _0x39379c['exports']['load'](0));
    assertEquals(0, _0x5848ff['exports']['load'](4));
    assertEquals(0, _0x39379c['exports']['load'](4));
    _0x5848ff['exports']['store'](4, 102);
    assertEquals(101, _0x5848ff['exports']['load'](0));
    assertEquals(0, _0x39379c['exports']['load'](0));
    assertEquals(102, _0x5848ff['exports']['load'](4));
    assertEquals(0, _0x39379c['exports']['load'](4));
    _0x39379c['exports']['store'](4, 107);
    assertEquals(101, _0x5848ff['exports']['load'](0));
    assertEquals(0, _0x39379c['exports']['load'](0));
    assertEquals(107, _0x5848ff['exports']['load'](4));
    assertEquals(0, _0x39379c['exports']['load'](4));
}());
(function TestExternalCallBetweenTwoWasmModulesWithoutAndWithMemory() {
    print('TestExternalCallBetweenTwoWasmModulesWithoutAndWithMemory');
    let _0x48b5a6 = generateBuilder(add_memory = ![], import_sig = kSig_i_i);
    _0x48b5a6['addFunction']('plus_one', kSig_i_i)['addBody']([
        kExprLocalGet,
        0,
        kExprCallFunction,
        other_fn_idx,
        kExprI32Const,
        1,
        kExprI32Add,
        kExprReturn
    ])['exportFunc']();
    let _0x53b586 = generateBuilder(add_memory = !![], import_sig = undefined);
    let _0x4c57b9 = kPageSize - 4;
    let _0x2031e5 = 2222;
    let _0x2aa74e = _0x53b586['instantiate']();
    let _0x12cb2a = _0x48b5a6['instantiate']({ 'import_module': { 'other_module_fn': _0x2aa74e['exports']['load'] } });
    _0x2aa74e['exports']['store'](_0x4c57b9, _0x2031e5);
    assertEquals(_0x2031e5, _0x2aa74e['exports']['load'](_0x4c57b9));
    assertEquals(_0x2031e5 + 1, _0x12cb2a['exports']['plus_one'](_0x4c57b9));
}());
(function TestExternalCallBetweenTwoWasmModulesWithMemory() {
    print('TestExternalCallBetweenTwoWasmModulesWithMemory');
    let _0x418f68 = generateBuilder(add_memory = !![], import_sig = kSig_i_i);
    _0x418f68['addFunction']('plus_one', kSig_i_i)['addBody']([
        kExprLocalGet,
        0,
        kExprCallFunction,
        other_fn_idx,
        kExprI32Const,
        1,
        kExprI32Add,
        kExprReturn
    ])['exportFunc']();
    let _0x293096 = generateBuilder(add_memory = !![], import_sig = undefined);
    let _0x3b397e = kPageSize - 4;
    let _0xc49af3 = 1111;
    let _0x3b0b96 = 2222;
    let _0x3782e8 = _0x293096['instantiate']();
    let _0x5d3e14 = _0x418f68['instantiate']({ 'import_module': { 'other_module_fn': _0x3782e8['exports']['load'] } });
    _0x5d3e14['exports']['store'](_0x3b397e, _0xc49af3);
    _0x3782e8['exports']['store'](_0x3b397e, _0x3b0b96);
    assertEquals(_0xc49af3, _0x5d3e14['exports']['load'](_0x3b397e));
    assertEquals(_0x3b0b96, _0x3782e8['exports']['load'](_0x3b397e));
    assertEquals(_0x3b0b96 + 1, _0x5d3e14['exports']['plus_one'](_0x3b397e));
}());
(function TestCorrectMemoryAccessedAfterReturningFromExternalCall() {
    print('TestCorrectMemoryAccessedAfterReturningFromExternalCall');
    let _0x391b63 = generateBuilder(add_memory = !![], import_sig = kSig_i_ii);
    _0x391b63['addFunction']('sandwich', kSig_i_iii)['addBody']([
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
    ])['exportFunc']();
    let _0x12d484 = generateBuilder(add_memory = !![], import_sig = undefined);
    let _0x595a35 = kPageSize - 4;
    let _0x32aec8 = 1111;
    let _0x9d6cad = 2222;
    let _0x177799 = _0x12d484['instantiate']();
    let _0x47b89b = _0x391b63['instantiate']({ 'import_module': { 'other_module_fn': _0x177799['exports']['store'] } });
    assertEquals(_0x32aec8, _0x47b89b['exports']['sandwich'](_0x595a35, _0x32aec8, _0x9d6cad));
    assertEquals(_0x32aec8, _0x47b89b['exports']['load'](_0x595a35));
    assertEquals(_0x9d6cad, _0x177799['exports']['load'](_0x595a35));
}());
(function CallThroughTableMemoryIndependenceTest() {
    print('CallThroughTableIndependenceTest');
    let _0x42bdbe = 2;
    let _0x10c5e0 = 1;
    let _0x2b3922 = new WasmModuleBuilder();
    _0x2b3922['addMemory'](_0x10c5e0, _0x10c5e0, !![]);
    _0x2b3922['addFunction']('store', kSig_v_ii)['addBody']([
        kExprLocalGet,
        0,
        kExprLocalGet,
        1,
        kExprI32StoreMem,
        0,
        0
    ])['exportFunc']();
    _0x2b3922['addFunction']('load', kSig_i_i)['addBody']([
        kExprLocalGet,
        0,
        kExprI32LoadMem,
        0,
        0
    ])['exportFunc']();
    {
        let _0x4d6eb0 = _0x2b3922['toModule']();
        var _0x32bcdf = new WebAssembly['Instance'](_0x4d6eb0);
        var _0x5bafa2 = new WebAssembly['Instance'](_0x4d6eb0);
        assertMemoryIndependence(_0x32bcdf['exports']['load'], _0x32bcdf['exports']['store'], _0x5bafa2['exports']['load'], _0x5bafa2['exports']['store']);
    }
    let _0x1d7638 = new WebAssembly['Table']({
        'element': 'anyfunc',
        'initial': _0x42bdbe,
        'maximum': _0x42bdbe
    });
    _0x1d7638['set'](0, _0x32bcdf['exports']['store']);
    _0x1d7638['set'](1, _0x5bafa2['exports']['store']);
    assertMemoryIndependence(_0x32bcdf['exports']['load'], _0x1d7638['get'](0), _0x5bafa2['exports']['load'], _0x1d7638['get'](1));
    _0x1d7638['set'](1, _0x32bcdf['exports']['store']);
    _0x1d7638['set'](0, _0x5bafa2['exports']['store']);
    assertMemoryIndependence(_0x32bcdf['exports']['load'], _0x1d7638['get'](1), _0x5bafa2['exports']['load'], _0x1d7638['get'](0));
    _0x2b3922 = new WasmModuleBuilder();
    _0x2b3922['addImportedTable']('m', 'table', _0x42bdbe, _0x42bdbe);
    var _0x101d60 = _0x2b3922['addType'](kSig_v_ii);
    _0x2b3922['addFunction']('store', kSig_v_iii)['addBody']([
        kExprLocalGet,
        1,
        kExprLocalGet,
        2,
        kExprLocalGet,
        0,
        kExprCallIndirect,
        _0x101d60,
        kTableZero
    ])['exportFunc']();
    let _0x48c8f2 = _0x2b3922['instantiate']({ 'm': { 'table': _0x1d7638 } });
    let _0x569efc = 1;
    let _0x328fc0 = 0;
    let _0x145e52 = (_0x1d5824, _0x2387f8) => _0x48c8f2['exports']['store'](_0x569efc, _0x1d5824, _0x2387f8);
    let _0x116898 = (_0x32ab09, _0x22e48e) => _0x48c8f2['exports']['store'](_0x328fc0, _0x32ab09, _0x22e48e);
    assertMemoryIndependence(_0x32bcdf['exports']['load'], _0x145e52, _0x5bafa2['exports']['load'], _0x116898);
    _0x1d7638['set'](0, _0x32bcdf['exports']['store']);
    _0x1d7638['set'](1, _0x5bafa2['exports']['store']);
    _0x569efc = 0;
    _0x328fc0 = 1;
    assertMemoryIndependence(_0x32bcdf['exports']['load'], _0x145e52, _0x5bafa2['exports']['load'], _0x116898);
}());