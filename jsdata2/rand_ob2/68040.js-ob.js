var _0x1a39 = [
    '1175516YVeDpi',
    '16783GmXzUo',
    '51NwIlcF',
    '1830159ZxKxIU',
    'context',
    'weak',
    'toThrowError',
    'should\x20find\x20module\x20with\x20asyncMode\x20===\x20\x27weak\x27\x20when\x20required\x20elsewhere',
    'toBe',
    './three',
    'should\x20find\x20module\x20with\x20asyncMode\x20===\x20\x27weak\x27\x20when\x20required\x20elsewhere\x20(recursive)',
    './dir/four',
    '707627hudCtq',
    '1gNVMna',
    '949693TxxReu',
    '547105HEzUii',
    '398787PaMrbx'
];
var _0x46f55b = _0x16c2;
function _0x16c2(_0x3029ae, _0x24ce6e) {
    return _0x16c2 = function (_0x1a3923, _0x16c299) {
        _0x1a3923 = _0x1a3923 - 0x183;
        var _0x2981d5 = _0x1a39[_0x1a3923];
        return _0x2981d5;
    }, _0x16c2(_0x3029ae, _0x24ce6e);
}
(function (_0x31784d, _0x8461f6) {
    var _0x47ccc8 = _0x16c2;
    while (!![]) {
        try {
            var _0x393681 = -parseInt(_0x47ccc8(0x183)) * parseInt(_0x47ccc8(0x184)) + -parseInt(_0x47ccc8(0x185)) + parseInt(_0x47ccc8(0x186)) + -parseInt(_0x47ccc8(0x187)) + parseInt(_0x47ccc8(0x188)) + -parseInt(_0x47ccc8(0x189)) * parseInt(_0x47ccc8(0x18a)) + parseInt(_0x47ccc8(0x18b));
            if (_0x393681 === _0x8461f6)
                break;
            else
                _0x31784d['push'](_0x31784d['shift']());
        } catch (_0x3af551) {
            _0x31784d['push'](_0x31784d['shift']());
        }
    }
}(_0x1a39, 0x9c6e4), it('should\x20not\x20bundle\x20context\x20requires\x20with\x20asyncMode\x20===\x20\x27weak\x27', function () {
    var _0x2dbef6 = _0x16c2, _0x8b72cf = require[_0x2dbef6(0x18c)]('.', ![], /two/, _0x2dbef6(0x18d));
    expect(function () {
        _0x8b72cf('./two');
    })[_0x2dbef6(0x18e)](/not available/);
}), it(_0x46f55b(0x18f), function () {
    var _0x1d7576 = _0x46f55b, _0x322ce0 = require[_0x1d7576(0x18c)]('.', ![], /.+/, _0x1d7576(0x18d));
    expect(_0x322ce0('./three'))[_0x1d7576(0x190)](0x3), require(_0x1d7576(0x191));
}), it(_0x46f55b(0x192), function () {
    var _0xf8cd5f = _0x46f55b, _0x5039c1 = require[_0xf8cd5f(0x18c)]('.', !![], /.+/, _0xf8cd5f(0x18d));
    expect(_0x5039c1('./dir/four'))[_0xf8cd5f(0x190)](0x4), require(_0xf8cd5f(0x193));
}));
