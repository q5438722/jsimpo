var assert = require(_0x15de54(134)), util = require(_0x15de54(135));
suite(_0x15de54(136)), test(_0x15de54(137), function () {
    var _0x10131e = _0x15de54, _0x4327a5 = [
            'foo',
            _0x10131e(138),
            _0x10131e(139)
        ];
    assert[_0x10131e(140)](util[_0x10131e(136)](_0x4327a5), _0x10131e(141)), delete _0x4327a5[1], assert['equal'](util[_0x10131e(136)](_0x4327a5), _0x10131e(142)), assert[_0x10131e(140)](util[_0x10131e(136)](_0x4327a5, !![]), _0x10131e(143)), assert[_0x10131e(140)](util[_0x10131e(136)](new Array(5)), _0x10131e(144));
}), test('util.inspect -  exceptions should print the error message, not \'{}\'', function () {
    var _0x5bbb37 = _0x15de54;
    assert[_0x5bbb37(140)](util['inspect'](new Error()), '[Error]'), assert[_0x5bbb37(140)](util[_0x5bbb37(136)](new Error(_0x5bbb37(145))), _0x5bbb37(146)), assert['equal'](util[_0x5bbb37(136)](new TypeError(_0x5bbb37(145))), _0x5bbb37(147)), assert[_0x5bbb37(140)](util[_0x5bbb37(136)](new SyntaxError(_0x5bbb37(145))), _0x5bbb37(148));
});