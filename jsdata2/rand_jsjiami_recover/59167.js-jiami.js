utils['load']('test/inspector/wasm-inspector-test.js');
let {session, contextGroup, Protocol} = InspectorTest['start']('Tests call stack in wasm scripts');
var builder = new WasmModuleBuilder();
var imported_idx = builder['addImport']('mode', 'func', kSig_v_v);
var call_imported_idx = builder['addFunction']('call_func', kSig_v_v)['addBody']([
    kExprCallFunction,
    imported_idx
])['index'];
builder['addFunction']('main', kSig_v_v)['addBody']([
    kExprBlock,
    kWasmVoid,
    kExprCallFunction,
    call_imported_idx,
    kExprEnd
])['exportAs']('main');
var module_bytes = builder['toArray']();
function testFunction(_0x248106) {
    function _0xe84320() {
        if ('dyGte' !== 'dyGte') {
            var _0x2ec092 = messageObject['params']['callFrames'];
            InspectorTest['log']('Number of frames: ' + _0x2ec092['length']);
            for (var _0x3b752a = 0; _0x3b752a < _0x2ec092['length']; ++_0x3b752a) {
                InspectorTest['log'](_0x9c307d['bnxWi']('  - [', _0x3b752a) + '] ' + locationToString(_0x2ec092[_0x3b752a]));
            }
        } else {
            debugger;
        }
    }
    var _0x1f89e4 = new ArrayBuffer(_0x248106['length']);
    var _0x26b69e = new Uint8Array(_0x1f89e4);
    for (var _0x31c271 = 0; _0x31c271 < _0x248106['length']; _0x31c271++) {
        if ('lArLq' === 'noXUw') {
            function _0x345628() {
                debugger;
            }
            var _0x58fb29 = new ArrayBuffer(_0x248106['length']);
            var _0x54ac09 = new Uint8Array(_0x58fb29);
            for (var _0x1e14cd = 0; _0x1e14cd < _0x248106['length']; _0x1e14cd++) {
                _0x54ac09[_0x1e14cd] = _0x248106[_0x1e14cd] | 0;
            }
            var _0x5be806 = new WebAssembly['Module'](_0x58fb29);
            var _0x3b1f08 = new WebAssembly['Instance'](_0x5be806, { 'mode': { 'func': _0x345628 } });
            _0x3b1f08['exports']['main']();
        } else {
            _0x26b69e[_0x31c271] = _0x248106[_0x31c271] | 0;
        }
    }
    var _0x262b48 = new WebAssembly['Module'](_0x1f89e4);
    var _0x33b280 = new WebAssembly['Instance'](_0x262b48, { 'mode': { 'func': _0xe84320 } });
    _0x33b280['exports']['main']();
}
contextGroup['addScript'](testFunction['toString']());
Protocol['Debugger']['enable']();
Protocol['Debugger']['onPaused'](handleDebuggerPaused);
InspectorTest['log']('Running testFunction with generated wasm bytes...');
Protocol['Runtime']['evaluate']({ 'expression': 'testFunction(' + JSON['stringify'](module_bytes) + ')' });
function locationToString(_0x5495ac) {
    var _0x19f9b3 = { 'functionName': _0x5495ac['functionName'] };
    for (var _0x3d0a95 in _0x5495ac['functionLocation']) {
        if (_0x3d0a95 == 'scriptId')
            continue;
        _0x19f9b3['function_' + _0x3d0a95] = _0x5495ac['functionLocation'][_0x3d0a95];
    }
    for (var _0x3d0a95 in _0x5495ac['location']) {
        if (_0x3d0a95 == 'scriptId')
            continue;
        _0x19f9b3[_0x3d0a95] = _0x5495ac['location'][_0x3d0a95];
    }
    return JSON['stringify'](_0x19f9b3);
}
function logStackTrace(_0x5e21a1) {
    var _0x3b9ece = _0x5e21a1['params']['callFrames'];
    InspectorTest['log']('Number of frames: ' + _0x3b9ece['length']);
    for (var _0x50cc7f = 0; _0x50cc7f < _0x3b9ece['length']; ++_0x50cc7f) {
        if ('jrmYc' === 'jrmYc') {
            InspectorTest['log'](_0x1e0214['hpXBu']('  - [', _0x50cc7f) + '] ' + locationToString(_0x3b9ece[_0x50cc7f]));
        } else {
            var _0x2e8e23 = '3|0|4|2|1'['split']('|'), _0x5b063a = 0;
            while (!![]) {
                switch (_0x2e8e23[_0x5b063a++]) {
                case '0':
                    logStackTrace(_0x5e21a1);
                    continue;
                case '1':
                    Protocol['Debugger']['evaluateOnCallFrame']({
                        'callFrameId': _0x3a90e1,
                        'expression': '(new Error("this is your stack trace:")).stack'
                    })['then'](callbackEvaluate);
                    continue;
                case '2':
                    var _0x3a90e1 = _0x5e21a1['params']['callFrames'][0]['callFrameId'];
                    continue;
                case '3':
                    InspectorTest['log']('Paused on \'debugger;\'');
                    continue;
                case '4':
                    InspectorTest['log']('Getting v8-generated stack trace...');
                    continue;
                }
                break;
            }
        }
    }
}
function handleDebuggerPaused(_0x308e5b) {
    var _0xed3749 = '0|4|3|2|1'['split']('|'), _0x1cf10b = 0;
    while (!![]) {
        switch (_0xed3749[_0x1cf10b++]) {
        case '0':
            InspectorTest['log']('Paused on \'debugger;\'');
            continue;
        case '1':
            Protocol['Debugger']['evaluateOnCallFrame']({
                'callFrameId': _0x56f641,
                'expression': '(new Error("this is your stack trace:")).stack'
            })['then'](callbackEvaluate);
            continue;
        case '2':
            var _0x56f641 = _0x308e5b['params']['callFrames'][0]['callFrameId'];
            continue;
        case '3':
            InspectorTest['log']('Getting v8-generated stack trace...');
            continue;
        case '4':
            logStackTrace(_0x308e5b);
            continue;
        }
        break;
    }
}
function callbackEvaluate(_0x33d4b1) {
    var _0x57c5da = '1|0|3|5|4|2'['split']('|'), _0x4256cc = 0;
    while (!![]) {
        switch (_0x57c5da[_0x4256cc++]) {
        case '0':
            var _0x5ba301 = _0x33d4b1['result']['result']['value']['split']('\n');
            continue;
        case '1':
            InspectorTest['log']('Result of evaluate (' + _0x33d4b1['result']['result']['type'] + '):');
            continue;
        case '2':
            InspectorTest['completeTest']();
            continue;
        case '3':
            _0x5ba301[1] = '    -- skipped --';
            continue;
        case '4':
            InspectorTest['log']('Finished!');
            continue;
        case '5':
            InspectorTest['log'](_0x5ba301['join']('\n'));
            continue;
        }
        break;
    }
}