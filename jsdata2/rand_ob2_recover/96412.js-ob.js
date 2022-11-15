function _0x1e39(_0x18bdf1, _0x49d453) {
    return _0x1e39 = function (_0x1552e5, _0x1e3931) {
        _0x1552e5 = _0x1552e5 - 288;
        var _0x552794 = _0x1552[_0x1552e5];
        return _0x552794;
    }, _0x1e39(_0x18bdf1, _0x49d453);
}
var mkdirp = require('../'), path = require(_0x14a4f2(298)), fs = require('fs'), test = require(_0x14a4f2(299))[_0x14a4f2(300)], _0755 = parseInt(_0x14a4f2(301), 8);
test(_0x14a4f2(302), function (_0x315c9b) {
    var _0x173370 = _0x14a4f2, _0x320f0c = path[_0x173370(303)]('/');
    mkdirp(_0x320f0c, _0755, function (_0x1d264d) {
        var _0x3c2d25 = _0x173370;
        if (_0x1d264d)
            throw _0x1d264d;
        fs[_0x3c2d25(304)](_0x320f0c, function (_0x33f658, _0x418ce7) {
            var _0x3dc9ff = _0x3c2d25;
            if (_0x33f658)
                throw _0x33f658;
            _0x315c9b['ok'](_0x418ce7['isDirectory'](), _0x3dc9ff(305)), _0x315c9b[_0x3dc9ff(306)]();
        });
    });
});