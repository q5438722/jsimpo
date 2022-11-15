var mkdirp = require(_0x5a8f86(327)), path = require(_0x5a8f86(328)), fs = require('fs'), exists = fs[_0x5a8f86(329)] || path[_0x5a8f86(329)], test = require(_0x5a8f86(330))[_0x5a8f86(331)], _0777 = parseInt(_0x5a8f86(332), 8), _0755 = parseInt('0755', 8);
test('rel', function (_0x1136b5) {
    var _0x4edea9 = _0x5a8f86;
    _0x1136b5[_0x4edea9(333)](5);
    var _0x421761 = Math['floor'](Math[_0x4edea9(334)]() * Math[_0x4edea9(335)](16, 4))[_0x4edea9(336)](16), _0x33f68c = Math['floor'](Math[_0x4edea9(334)]() * Math[_0x4edea9(335)](16, 4))[_0x4edea9(336)](16), _0x2c2f75 = Math[_0x4edea9(337)](Math[_0x4edea9(334)]() * Math[_0x4edea9(335)](16, 4))[_0x4edea9(336)](16), _0x5b6d30 = process[_0x4edea9(338)]();
    process[_0x4edea9(339)](_0x4edea9(340));
    var _0x153ee2 = [
        _0x421761,
        _0x33f68c,
        _0x2c2f75
    ]['join']('/');
    mkdirp(_0x153ee2, _0755, function (_0x4ba60b) {
        var _0x255ee3 = _0x4edea9;
        _0x1136b5[_0x255ee3(341)](_0x4ba60b), exists(_0x153ee2, function (_0x249fbf) {
            var _0xe6739f = _0x255ee3;
            _0x1136b5['ok'](_0x249fbf, _0xe6739f(342)), fs['stat'](_0x153ee2, function (_0x411bc9, _0x4b4b88) {
                var _0x36bfbd = _0xe6739f;
                _0x1136b5[_0x36bfbd(341)](_0x411bc9), process[_0x36bfbd(339)](_0x5b6d30), _0x1136b5[_0x36bfbd(343)](_0x4b4b88['mode'] & _0777, _0755), _0x1136b5['ok'](_0x4b4b88['isDirectory'](), _0x36bfbd(344));
            });
        });
    });
});