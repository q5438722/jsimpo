var stdlib = {}, foreign = {}, heap = new ArrayBuffer((-52 * -6 + -19 * 469 + -1 * -8663) * (2 * 904 + 6401 + 479 * -15));
function Uint32Mod(_0x3d8bf7) {
    var _0x5f5491 = _0x43b9, _0x4c6535 = {
            'yoDKh': _0x5f5491(339),
            'RPIXh': function (_0x4b7e02, _0x30d535) {
                return _0x4b7e02 + _0x30d535;
            },
            'wiUwb': function (_0x5d1c0c, _0x148f3f) {
                return _0x5d1c0c + _0x148f3f;
            },
            'ABLUK': function (_0x1b054e, _0x16a498) {
                return _0x1b054e + _0x16a498;
            },
            'JtNqs': function (_0x5ada42, _0x193800) {
                return _0x5ada42 + _0x193800;
            },
            'kySnC': function (_0xf17e71, _0x9f1e4e) {
                return _0xf17e71 + _0x9f1e4e;
            },
            'vICTo': ' "use asm";\n',
            'xRWcc': _0x5f5491(340),
            'OVNnb': _0x5f5491(341),
            'UcSbt': _0x5f5491(342),
            'pSUwa': _0x5f5491(343),
            'fhfUb': _0x5f5491(344),
            'uXFvD': ' return { f: '
        }, _0x5d85f5 = _0x4c6535[_0x5f5491(345)];
    _0x5d85f5 += _0x3d8bf7;
    var _0x19783b = eval(_0x4c6535['RPIXh'](_0x4c6535['RPIXh'](_0x4c6535['wiUwb'](_0x4c6535[_0x5f5491(346)](_0x4c6535[_0x5f5491(346)](_0x4c6535[_0x5f5491(347)](_0x4c6535['JtNqs'](_0x4c6535[_0x5f5491(348)](_0x4c6535['kySnC'](_0x4c6535['kySnC']('function Module(stdlib, foreign, heap) {\n', _0x4c6535[_0x5f5491(349)]), _0x4c6535[_0x5f5491(350)]), _0x5d85f5), _0x4c6535[_0x5f5491(351)]) + _0x4c6535[_0x5f5491(352)], '  return ((dividend >>> 0) % '), _0x3d8bf7), _0x4c6535[_0x5f5491(353)]) + _0x4c6535[_0x5f5491(354)] + _0x4c6535[_0x5f5491(355)], _0x5d85f5), '}\n'), _0x5f5491(356)));
    return _0x19783b(stdlib, foreign, heap)['f'];
}
var divisors = [
    5708 + -5805 + 97,
    36 * -267 + -7195 + -11 * -1528,
    -7277 + 8071 + 113 * -7,
    733 + 8367 + -9096,
    214 * -2 + -1 * 8713 + -9151 * -1,
    -2082 * 4 + -8487 + 16857,
    -2401 + -3371 + -2918 * -2,
    6155 + -29 * 192 + -487 * 1,
    11 * -478 + -1 * -7241 + -137 * 7,
    -1615755529 + 2657721273 + 1105517903,
    7 * -49076044 + 3528977243 + -110952236 * -10
];
for (var i in divisors) {
    var divisor = divisors[i], mod = Uint32Mod(divisor);
    for (var dividend = -1843 * -3 + -9227 * 1 + -3698 * -1; dividend < 4 * -1466465875 + 7 * 316977364 + 7941989248; dividend += -1 * -6966964 + -1 * 356715 + -2610476) {
        assertEquals(dividend % divisor | -5611 * -1 + 1191 * -2 + -3229, mod(dividend));
    }
}