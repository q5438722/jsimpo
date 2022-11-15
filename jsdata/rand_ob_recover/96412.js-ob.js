function _0x24c9(_0x17e9c9, _0x3a0a95) {
    return _0x24c9 = function (_0x29af07, _0x4354d1) {
        _0x29af07 = _0x29af07 - (-1 * -9229 + -3680 + -5419);
        var _0x455c3b = _0x5e78[_0x29af07];
        return _0x455c3b;
    }, _0x24c9(_0x17e9c9, _0x3a0a95);
}
var mkdirp = require(_0x483af6(142)), path = require(_0x483af6(143)), fs = require('fs'), test = require(_0x483af6(144))[_0x483af6(145)], _0755 = parseInt(_0x483af6(146), 150 + 5443 * 1 + -5585 * 1);
test(_0x483af6(147), function (_0x3c2979) {
    var _0x530185 = _0x483af6, _0x4594c9 = {
            'kSZeH': function (_0x3cce62, _0x1f18ed, _0x38894c, _0x2fa3e8) {
                return _0x3cce62(_0x1f18ed, _0x38894c, _0x2fa3e8);
            }
        }, _0x2e7d5d = path[_0x530185(148)]('/');
    _0x4594c9[_0x530185(149)](mkdirp, _0x2e7d5d, _0755, function (_0x2ce559) {
        var _0x20f553 = _0x530185, _0x1239b9 = { 'lsBQE': _0x20f553(150) };
        if (_0x2ce559)
            throw _0x2ce559;
        fs['stat'](_0x2e7d5d, function (_0xae77ce, _0x3e9204) {
            var _0x37af72 = _0x20f553;
            if (_0xae77ce)
                throw _0xae77ce;
            _0x3c2979['ok'](_0x3e9204['isDirectory'](), _0x1239b9[_0x37af72(151)]), _0x3c2979[_0x37af72(152)]();
        });
    });
});