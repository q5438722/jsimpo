load('test/mjsunit/wasm/wasm-module-builder.js');
(function TestInitMultipleTables() {
    print(arguments['callee']['name']);
    const _0x62a829 = 11;
    const _0x1c4831 = 22;
    const _0x290edb = 46;
    const _0x4225e8 = 57;
    const _0x100032 = 13;
    const _0x22969c = 2;
    const _0x33334c = _0x22969c + 1;
    const _0x4ea6ee = 4;
    const _0x32d9fb = 1;
    const _0x5433e8 = function () {
        const _0x229f75 = new WasmModuleBuilder();
        const _0x1fdd55 = _0x229f75['addTable'](kWasmAnyFunc, 15, 15)['exportAs']('table')['index'];
        const _0x2a17f5 = _0x229f75['addFunction']('f1', kSig_i_v)['addBody']([
            kExprI32Const,
            _0x62a829
        ])['index'];
        const _0x144380 = _0x229f75['addFunction']('f2', kSig_i_v)['addBody']([
            kExprI32Const,
            _0x1c4831
        ])['index'];
        _0x229f75['addActiveElementSegment'](_0x1fdd55, WasmInitExpr['I32Const'](_0x22969c), [
            _0x2a17f5,
            _0x144380
        ]);
        const _0x5433e8 = _0x229f75['instantiate']();
        const _0x5e6326 = _0x5433e8['exports']['table'];
        assertEquals(_0x62a829, _0x5e6326['get'](_0x22969c)());
        assertEquals(_0x1c4831, _0x5e6326['get'](_0x22969c + 1)());
        return _0x5433e8;
    }();
    const _0x51e658 = new WasmModuleBuilder();
    const _0x23ff25 = _0x51e658['addImportedTable']('exports', 'table', 15, 15);
    _0x51e658['addExportOfKind']('table2', kExternalTable, _0x23ff25);
    const _0x226fc3 = _0x51e658['addTable'](kWasmAnyFunc, 10)['exportAs']('table3')['index'];
    const _0x1abff2 = _0x51e658['addTable'](kWasmAnyFunc, 12)['exportAs']('table4')['index'];
    const _0x32cf06 = _0x51e658['addFunction']('f3', kSig_i_v)['addBody']([
        kExprI32Const,
        _0x290edb
    ])['index'];
    const _0x782876 = _0x51e658['addFunction']('f4', kSig_i_v)['addBody']([
        kExprI32Const,
        _0x4225e8
    ])['index'];
    const _0x502728 = _0x51e658['addFunction']('f5', kSig_i_v)['addBody']([
        kExprI32Const,
        _0x100032
    ])['index'];
    _0x51e658['addActiveElementSegment'](_0x23ff25, WasmInitExpr['I32Const'](_0x33334c), [
        _0x32cf06,
        _0x782876
    ]);
    _0x51e658['addActiveElementSegment'](_0x226fc3, WasmInitExpr['I32Const'](_0x4ea6ee), [
        _0x502728,
        _0x782876
    ]);
    _0x51e658['addActiveElementSegment'](_0x1abff2, WasmInitExpr['I32Const'](_0x32d9fb), [
        _0x32cf06,
        _0x502728
    ]);
    _0x51e658['addActiveElementSegment'](_0x1abff2, WasmInitExpr['I32Const'](_0x32d9fb + 1), [
        _0x782876,
        _0x32cf06
    ]);
    const _0x17a897 = _0x51e658['instantiate'](_0x5433e8);
    const _0x3a1893 = _0x17a897['exports']['table2'];
    const _0x59ce28 = _0x17a897['exports']['table3'];
    const _0x3388 = _0x17a897['exports']['table4'];
    assertEquals(_0x62a829, _0x3a1893['get'](_0x22969c)());
    assertEquals(_0x290edb, _0x3a1893['get'](_0x33334c)());
    assertEquals(_0x4225e8, _0x3a1893['get'](_0x33334c + 1)());
    assertEquals(_0x100032, _0x59ce28['get'](_0x4ea6ee)());
    assertEquals(_0x4225e8, _0x59ce28['get'](_0x4ea6ee + 1)());
    assertEquals(_0x290edb, _0x3388['get'](_0x32d9fb)());
    assertEquals(_0x4225e8, _0x3388['get'](_0x32d9fb + 1)());
    assertEquals(_0x290edb, _0x3388['get'](_0x32d9fb + 2)());
}());