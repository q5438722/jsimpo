var _0x4a19 = [
    '[TypeError:\x20FAIL]',
    '[SyntaxError:\x20FAIL]',
    '1277506NMWUSy',
    '1ihjJzi',
    '866585uqEQCw',
    '1190758wYwmry',
    '1320620vsnUSN',
    '557JRAVpb',
    '439jClIXv',
    '517705GPwZpq',
    '3115986MxQpaU',
    'assert',
    '../../',
    'inspect',
    'util.inspect\x20-\x20test\x20for\x20sparse\x20array',
    'bar',
    'baz',
    'equal',
    '[\x20\x27foo\x27,\x20\x27bar\x27,\x20\x27baz\x27\x20]',
    '[\x20\x27foo\x27,\x20,\x20\x27baz\x27\x20]',
    '[\x20\x27foo\x27,\x20,\x20\x27baz\x27,\x20[length]:\x203\x20]',
    '[\x20,\x20,\x20,\x20,\x20\x20]',
    'FAIL',
    '[Error:\x20FAIL]'
];
function _0x5c6b(_0xe1003e, _0x584018) {
    return _0x5c6b = function (_0x4a19ba, _0x5c6be4) {
        _0x4a19ba = _0x4a19ba - 0x7d;
        var _0x3dfb32 = _0x4a19[_0x4a19ba];
        return _0x3dfb32;
    }, _0x5c6b(_0xe1003e, _0x584018);
}
var _0x15de54 = _0x5c6b;
(function (_0x3dbb22, _0x6a9045) {
    var _0xc1e07b = _0x5c6b;
    while (!![]) {
        try {
            var _0xadcc88 = -parseInt(_0xc1e07b(0x7d)) * -parseInt(_0xc1e07b(0x7e)) + parseInt(_0xc1e07b(0x7f)) + parseInt(_0xc1e07b(0x80)) + parseInt(_0xc1e07b(0x81)) + parseInt(_0xc1e07b(0x82)) * -parseInt(_0xc1e07b(0x83)) + -parseInt(_0xc1e07b(0x84)) + -parseInt(_0xc1e07b(0x85));
            if (_0xadcc88 === _0x6a9045)
                break;
            else
                _0x3dbb22['push'](_0x3dbb22['shift']());
        } catch (_0x7f68d5) {
            _0x3dbb22['push'](_0x3dbb22['shift']());
        }
    }
}(_0x4a19, 0xbdc27));
var assert = require(_0x15de54(0x86)), util = require(_0x15de54(0x87));
suite(_0x15de54(0x88)), test(_0x15de54(0x89), function () {
    var _0x10131e = _0x15de54, _0x4327a5 = [
            'foo',
            _0x10131e(0x8a),
            _0x10131e(0x8b)
        ];
    assert[_0x10131e(0x8c)](util[_0x10131e(0x88)](_0x4327a5), _0x10131e(0x8d)), delete _0x4327a5[0x1], assert['equal'](util[_0x10131e(0x88)](_0x4327a5), _0x10131e(0x8e)), assert[_0x10131e(0x8c)](util[_0x10131e(0x88)](_0x4327a5, !![]), _0x10131e(0x8f)), assert[_0x10131e(0x8c)](util[_0x10131e(0x88)](new Array(0x5)), _0x10131e(0x90));
}), test('util.inspect\x20-\x20\x20exceptions\x20should\x20print\x20the\x20error\x20message,\x20not\x20\x27{}\x27', function () {
    var _0x5bbb37 = _0x15de54;
    assert[_0x5bbb37(0x8c)](util['inspect'](new Error()), '[Error]'), assert[_0x5bbb37(0x8c)](util[_0x5bbb37(0x88)](new Error(_0x5bbb37(0x91))), _0x5bbb37(0x92)), assert['equal'](util[_0x5bbb37(0x88)](new TypeError(_0x5bbb37(0x91))), _0x5bbb37(0x93)), assert[_0x5bbb37(0x8c)](util[_0x5bbb37(0x88)](new SyntaxError(_0x5bbb37(0x91))), _0x5bbb37(0x94));
});
