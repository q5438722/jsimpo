var _0x328b = [
    '115971SMIHju',
    '41AgrcCj',
    '2187jvlKcY',
    '49030KQFhHW',
    '287558UuzsoW',
    '506914vTlaap',
    'mod_',
    'function\x20Module(stdlib,\x20foreign,\x20heap)\x20{\x0a',
    '\x20\x22use\x20asm\x22;\x0a',
    '(dividend)\x20{\x0a',
    '\x20\x20dividend\x20=\x20dividend\x20|\x200;\x0a',
    ')\x20|\x200;\x0a',
    '\x20}\x0a',
    '\x20return\x20{\x20f:\x20',
    '273571KXNsOw',
    '60157BxjSST',
    '3xkszBf'
];
(function (_0x966f40, _0x188ad0) {
    var _0x1ac5e5 = _0x57fd;
    while (!![]) {
        try {
            var _0x9f7346 = parseInt(_0x1ac5e5(0x134)) + parseInt(_0x1ac5e5(0x135)) * parseInt(_0x1ac5e5(0x136)) + -parseInt(_0x1ac5e5(0x137)) + -parseInt(_0x1ac5e5(0x138)) * -parseInt(_0x1ac5e5(0x139)) + -parseInt(_0x1ac5e5(0x13a)) + parseInt(_0x1ac5e5(0x13b)) + -parseInt(_0x1ac5e5(0x13c));
            if (_0x9f7346 === _0x188ad0)
                break;
            else
                _0x966f40['push'](_0x966f40['shift']());
        } catch (_0x1fec4f) {
            _0x966f40['push'](_0x966f40['shift']());
        }
    }
}(_0x328b, 0x26e78));
var stdlib = {}, foreign = {}, heap = new ArrayBuffer(0x40 * 0x400);
function Uint32Mod(_0x15b9ca) {
    var _0x4e1ae9 = _0x57fd, _0x3cd4dc = _0x4e1ae9(0x13d);
    _0x3cd4dc += _0x15b9ca;
    var _0x2a3589 = eval(_0x4e1ae9(0x13e) + _0x4e1ae9(0x13f) + '\x20function\x20' + _0x3cd4dc + _0x4e1ae9(0x140) + _0x4e1ae9(0x141) + '\x20\x20return\x20((dividend\x20>>>\x200)\x20%\x20' + _0x15b9ca + _0x4e1ae9(0x142) + _0x4e1ae9(0x143) + _0x4e1ae9(0x144) + _0x3cd4dc + '}\x0a' + '};\x20Module');
    return _0x2a3589(stdlib, foreign, heap)['f'];
}
var divisors = [
    0x0,
    0x1,
    0x3,
    0x4,
    0xa,
    0x2a,
    0x40,
    0x64,
    0x400,
    0x7fffffff,
    0xffffffff
];
function _0x57fd(_0x537c6f, _0x4b08ed) {
    return _0x57fd = function (_0x328b35, _0x57fd38) {
        _0x328b35 = _0x328b35 - 0x134;
        var _0x83e79b = _0x328b[_0x328b35];
        return _0x83e79b;
    }, _0x57fd(_0x537c6f, _0x4b08ed);
}
for (var i in divisors) {
    var divisor = divisors[i], mod = Uint32Mod(divisor);
    for (var dividend = 0x0; dividend < 0x100000000; dividend += 0x3d081d) {
        assertEquals(dividend % divisor | 0x0, mod(dividend));
    }
}
