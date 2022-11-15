var parse = require('../'), test = require('tape');
function _0x48a4(_0x26ebfb, _0x1ae470) {
    return _0x48a4 = function (_0x1b1743, _0x48a45b) {
        _0x1b1743 = _0x1b1743 - 416;
        var _0x3ffa94 = _0x1b17[_0x1b1743];
        return _0x3ffa94;
    }, _0x48a4(_0x26ebfb, _0x1ae470);
}
test(_0x1dd712(427), function (_0x4c12f9) {
    var _0xa18e6a = _0x1dd712, _0xab65fc = parse([
            _0xa18e6a(428),
            '22'
        ], {
            'default': { 'a.b': 11 },
            'alias': { 'a.b': _0xa18e6a(429) }
        });
    _0x4c12f9['equal'](_0xab65fc['a']['b'], 22), _0x4c12f9[_0xa18e6a(430)](_0xab65fc['aa']['bb'], 22), _0x4c12f9[_0xa18e6a(431)]();
}), test(_0x1dd712(432), function (_0x497bbf) {
    var _0x3ae437 = _0x1dd712, _0x122cf0 = parse('', {
            'default': { 'a.b': 11 },
            'alias': { 'a.b': _0x3ae437(429) }
        });
    _0x497bbf['equal'](_0x122cf0['a']['b'], 11), _0x497bbf[_0x3ae437(430)](_0x122cf0['aa']['bb'], 11), _0x497bbf[_0x3ae437(431)]();
}), test(_0x1dd712(433), function (_0x145525) {
    var _0x1460b8 = _0x1dd712, _0x39f612 = parse('', { 'default': { 'a.b': 11 } });
    _0x145525['equal'](_0x39f612['a']['b'], 11), _0x145525[_0x1460b8(431)]();
});