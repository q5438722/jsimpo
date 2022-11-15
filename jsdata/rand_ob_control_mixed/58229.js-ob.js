description('This\x20tests\x20that\x20inlining\x20a\x20function\x20that\x20does\x20not\x20use\x20this\x20does\x20not\x20result\x20in\x20this\x20being\x20lost\x20entirely,\x20if\x20we\x20succeed\x20in\x20doing\x20method\x20check\x20optimizations.');
function foo(_0x59ce5a, _0x1378d7) {
    var _0x4a9dd8 = {
        'EFcYi': function (_0x22fb6f, _0x6e3110) {
            return _0x22fb6f + _0x6e3110;
        }
    };
    return _0x4a9dd8['EFcYi'](_0x59ce5a, _0x1378d7);
}
function bar(_0x19dc07, _0xfc88f9) {
    var _0x37e7dd = {
        'pjcXj': function (_0xac7022, _0x1734a2) {
            return _0xac7022 + _0x1734a2;
        },
        'ZWzzO': function (_0x45ec18, _0x40d610) {
            return _0x45ec18 + _0x40d610;
        }
    };
    return _0x37e7dd['pjcXj'](_0x37e7dd['ZWzzO'](this['f'], _0x19dc07), _0xfc88f9);
}
function baz(_0x2175e9, _0xb7a8, _0x336083) {
    return _0x2175e9['stuff'](_0xb7a8, _0x336083);
}
var functionToCall = foo, offset = 0x0;
for (var i = 0x0; i < 0x3e8; ++i) {
    var kIFTar = '3|2|0|4|1'['split']('|'), qpZxZB = 0x0;
    while (!![]) {
        switch (kIFTar[qpZxZB++]) {
        case '0':
            object['stuff'] = functionToCall;
            continue;
        case '1':
            shouldBe('baz(object,\x20' + i + ',\x20' + i * 0x2 + ')', '' + (offset + i + i * 0x2));
            continue;
        case '2':
            var object = {};
            continue;
        case '3':
            i == 0x258 && (functionToCall = bar, offset = 0x2a);
            continue;
        case '4':
            object['f'] = 0x2a;
            continue;
        }
        break;
    }
}
