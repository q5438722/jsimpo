var _0x1b17 = [
    '--a.b',
    'aa.bb',
    'equal',
    'end',
    'dotted\x20default',
    'dotted\x20default\x20with\x20no\x20alias',
    '622225tfDzcp',
    '360619JdWgUK',
    '1JNgBey',
    '26814zGJfwv',
    '139AOLBSS',
    '3068fKoDLK',
    '6661UcNkwS',
    '56zbFPYD',
    '84720NGUEIz',
    '125DmqMxB',
    '12130qyBewl',
    'dotted\x20alias'
];
var _0x1dd712 = _0x48a4;
(function (_0x4d5470, _0x40e0ff) {
    var _0x50ea20 = _0x48a4;
    while (!![]) {
        try {
            var _0x515cc5 = -parseInt(_0x50ea20(0x1a0)) + -parseInt(_0x50ea20(0x1a1)) * -parseInt(_0x50ea20(0x1a2)) + -parseInt(_0x50ea20(0x1a3)) + -parseInt(_0x50ea20(0x1a4)) * parseInt(_0x50ea20(0x1a5)) + -parseInt(_0x50ea20(0x1a6)) * parseInt(_0x50ea20(0x1a7)) + -parseInt(_0x50ea20(0x1a8)) + parseInt(_0x50ea20(0x1a9)) * parseInt(_0x50ea20(0x1aa));
            if (_0x515cc5 === _0x40e0ff)
                break;
            else
                _0x4d5470['push'](_0x4d5470['shift']());
        } catch (_0x6190fa) {
            _0x4d5470['push'](_0x4d5470['shift']());
        }
    }
}(_0x1b17, 0x53e5a));
var parse = require('../'), test = require('tape');
function _0x48a4(_0x26ebfb, _0x1ae470) {
    return _0x48a4 = function (_0x1b1743, _0x48a45b) {
        _0x1b1743 = _0x1b1743 - 0x1a0;
        var _0x3ffa94 = _0x1b17[_0x1b1743];
        return _0x3ffa94;
    }, _0x48a4(_0x26ebfb, _0x1ae470);
}
test(_0x1dd712(0x1ab), function (_0x4c12f9) {
    var _0xa18e6a = _0x1dd712, _0xab65fc = parse([
            _0xa18e6a(0x1ac),
            '22'
        ], {
            'default': { 'a.b': 0xb },
            'alias': { 'a.b': _0xa18e6a(0x1ad) }
        });
    _0x4c12f9['equal'](_0xab65fc['a']['b'], 0x16), _0x4c12f9[_0xa18e6a(0x1ae)](_0xab65fc['aa']['bb'], 0x16), _0x4c12f9[_0xa18e6a(0x1af)]();
}), test(_0x1dd712(0x1b0), function (_0x497bbf) {
    var _0x3ae437 = _0x1dd712, _0x122cf0 = parse('', {
            'default': { 'a.b': 0xb },
            'alias': { 'a.b': _0x3ae437(0x1ad) }
        });
    _0x497bbf['equal'](_0x122cf0['a']['b'], 0xb), _0x497bbf[_0x3ae437(0x1ae)](_0x122cf0['aa']['bb'], 0xb), _0x497bbf[_0x3ae437(0x1af)]();
}), test(_0x1dd712(0x1b1), function (_0x145525) {
    var _0x1460b8 = _0x1dd712, _0x39f612 = parse('', { 'default': { 'a.b': 0xb } });
    _0x145525['equal'](_0x39f612['a']['b'], 0xb), _0x145525[_0x1460b8(0x1af)]();
});
