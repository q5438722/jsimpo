utils['load']('test/inspector/wasm-inspector-test.js');let {session,contextGroup,Protocol}=InspectorTest['start']('Tests how wasm scrips report the source');var builder=new WasmModuleBuilder();var imported_idx=builder['addImport']('xxx','func',kSig_v_v);var call_imported_idx=builder['addFunction']('call_func',kSig_v_v)['addBody']([kExprCallFunction,imported_idx])['index'];var sig_index=builder['addType'](kSig_v_v);builder['addFunction']('main',kSig_v_v)['addBody']([kExprBlock,kWasmVoid,kExprI32Const,0x0,kExprCallIndirect,sig_index,kTableZero,kExprEnd])['exportAs']('main');builder['appendToTable']([call_imported_idx]);var module_bytes=builder['toArray']();function testFunction(_0x1271c8){var _0x51c550={'aKstt':function(_0x234345,_0x23024a){return _0x234345<_0x23024a;}};function _0x200e69(){debugger;}var _0x29cf45=new ArrayBuffer(_0x1271c8['length']);var _0x2d30a5=new Uint8Array(_0x29cf45);for(var _0x4d9af5=0x0;_0x51c550['aKstt'](_0x4d9af5,_0x1271c8['length']);_0x4d9af5++){_0x2d30a5[_0x4d9af5]=_0x1271c8[_0x4d9af5]|0x0;}var _0x13d534=new WebAssembly['Module'](_0x29cf45);var _0x3b2f8d=new WebAssembly['Instance'](_0x13d534,{'xxx':{'func':_0x200e69}});_0x3b2f8d['exports']['main']();}contextGroup['addScript'](testFunction['toString']());contextGroup['addScript']('var module_bytes = '+JSON['stringify'](module_bytes));Protocol['Debugger']['enable']();Protocol['Debugger']['onPaused'](handleDebuggerPaused);InspectorTest['log']('Check\x20that\x20inspector\x20gets\x20wasm\x20bytecode');Protocol['Runtime']['evaluate']({'expression':'testFunction(module_bytes)'});async function handleDebuggerPaused(_0x53e883){var _0x4b0c85={'mbuAZ':function(_0x5b1196,_0x16f554){return _0x5b1196+_0x16f554;},'aaUid':function(_0x11d59f,_0x5939a2){return _0x11d59f!==_0x5939a2;},'nTnHt':'hGtcC','VSImY':function(_0x48abd5,_0x5abf43){return _0x48abd5+_0x5abf43;},'JLceb':'Unexpected line number in wasm: ','qbWlk':function(_0x219b38,_0x4ad0c7){return _0x219b38+_0x4ad0c7;},'RGKkt':'] Wasm offset ','alIBx':'Number\x20of\x20frames:\x20','zSXbc':function(_0xd13320,_0x53b2a1){return _0xd13320<_0x53b2a1;},'zYWBZ':'Finished.'};InspectorTest['log']('Paused on debugger!');var _0x5e651a=_0x53e883['params']['callFrames'];InspectorTest['log'](_0x4b0c85['qbWlk'](_0x4b0c85['alIBx'],_0x5e651a['length']));async function _0x2627b4(_0x2c7939,_0x26cbed){if(_0x26cbed['error'])InspectorTest['logObject'](_0x26cbed);var _0x5366b9=_0x26cbed['result']['scriptSource'];var _0x98c8bf=_0x5e651a[_0x2c7939]['location']['lineNumber'];if(_0x5366b9){var _0x36dc14=_0x5366b9['split']('\x0a')[_0x98c8bf];InspectorTest['log'](_0x4b0c85['mbuAZ']('['+_0x2c7939+']\x20',_0x36dc14));}else{if(_0x4b0c85['aaUid'](_0x4b0c85['nTnHt'],_0x4b0c85['nTnHt'])){view[i]=bytes[i]|0x0;}else{if(_0x98c8bf!=0x0){InspectorTest['log'](_0x4b0c85['VSImY'](_0x4b0c85['JLceb'],_0x98c8bf));}let _0x4b8d62=_0x5e651a[_0x2c7939]['location']['columnNumber'];let _0x5b7989=InspectorTest['decodeBase64'](_0x26cbed['result']['bytecode']);InspectorTest['log'](_0x4b0c85['qbWlk'](_0x4b0c85['qbWlk'](_0x4b0c85['qbWlk']('['+_0x2c7939,_0x4b0c85['RGKkt']),_0x4b8d62),': 0x')+_0x5b7989[_0x4b8d62]['toString'](0x10));}}}for(let _0x40d0ac=0x0;_0x4b0c85['zSXbc'](_0x40d0ac,_0x5e651a['length']);_0x40d0ac++){result=await Protocol['Debugger']['getScriptSource']({'scriptId':_0x5e651a[_0x40d0ac]['location']['scriptId']});await _0x2627b4(_0x40d0ac,result);}InspectorTest['log'](_0x4b0c85['zYWBZ']);InspectorTest['completeTest']();}