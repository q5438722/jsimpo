load('test/mjsunit/wasm/wasm-module-builder.js');
(function duplicateGlobalExportName() {
    var _0x3247f4 = new WasmModuleBuilder();
    _0x3247f4['addGlobal'](kWasmI64, ![])['exportAs']('g');
    _0x3247f4['addGlobal'](kWasmI64, ![])['exportAs']('g');
    assertThrows(() => _0x3247f4['instantiate'](), WebAssembly['CompileError'], /Duplicate export name 'g' for global 0 and global 1/);
}());
(function exportNameClashWithFunction() {
    var _0x2e4c8c = new WasmModuleBuilder();
    _0x2e4c8c['addGlobal'](kWasmI64, ![])['exportAs']('foo');
    _0x2e4c8c['addFunction']('f', kSig_v_v)['addBody']([])['exportAs']('foo');
    assertThrows(() => _0x2e4c8c['instantiate'](), WebAssembly['CompileError'], /Duplicate export name 'foo' for global 0 and function 0/);
}());
(function veryLongExportName() {
    var _0x35b719 = '0|1|2|5|6|3|7|4'['split']('|'), _0x7e171 = 0;
    while (!![]) {
        switch (_0x35b719[_0x7e171++]) {
        case '0':
            var _0x5bcbc8 = 'abc';
            continue;
        case '1':
            while (_0x5bcbc8['length'] < 8192) {
                _0x5bcbc8 = _0x5bcbc8['concat'](_0x5bcbc8);
            }
            continue;
        case '2':
            var _0x3e2bda = new WasmModuleBuilder();
            continue;
        case '3':
            _0xd3780d['exportAs'](_0x5bcbc8);
            continue;
        case '4':
            assertThrows(() => _0x3e2bda['instantiate'](), WebAssembly['CompileError'], new RegExp(_0x484cb6));
            continue;
        case '5':
            var _0xd3780d = _0x3e2bda['addGlobal'](kWasmI64, ![]);
            continue;
        case '6':
            _0xd3780d['exportAs'](_0x5bcbc8);
            continue;
        case '7':
            var _0x484cb6 = 'Duplicate export name \'(abc){10,20}ab?c?...\' for global 0 and global 0';
            continue;
        }
        break;
    }
}());