load('test/mjsunit/wasm/wasm-module-builder.js');(function(){var _0x59f55e={'zULHa':function(_0x11abb0,_0x186476,_0x25b1f4){return _0x11abb0(_0x186476,_0x25b1f4);},'mHzrZ':function(_0x2acc14,_0x111571,_0x588374){return _0x2acc14(_0x111571,_0x588374);},'zJtQQ':function(_0x3f29d4,_0x542e3f){return _0x3f29d4(_0x542e3f);}};const _0x351d7a=new WasmModuleBuilder();_0x351d7a['addType'](_0x59f55e['zULHa'](makeSig,[kWasmI32,kWasmI32,kWasmI32],[kWasmI32]));_0x351d7a['addType'](_0x59f55e['mHzrZ'](makeSig,[],[]));_0x351d7a['addFunction'](undefined,0x0)['addBodyWithEnd']([kExprCallFunction,0x1,kExprI32Const,0x0,kExprEnd]);_0x351d7a['addFunction'](undefined,0x1)['addLocals'](kWasmF32,0x1)['addLocals'](kWasmI32,0xd)['addBodyWithEnd']([kExprEnd]);_0x351d7a['addExport']('main',0x0);const _0xea5170=_0x351d7a['instantiate']();_0x59f55e['zJtQQ'](print,_0xea5170['exports']['main'](0x1,0x2,0x3));}());