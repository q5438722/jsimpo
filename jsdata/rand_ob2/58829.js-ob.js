const _0x31b6 = [
    'en-US',
    '16417mApTzy',
    '42fZUpGP',
    '1eEtGHI',
    '138763pMbOqO',
    '9dLtvYp',
    '13807cxaHjB',
    '495681MFwhlb',
    '37884RnOwwD',
    '35yOGACp',
    '19232oxJHSC',
    '49799YAKzKs',
    'ListFormat'
];
function _0x3a8b(_0x3e7206, _0x229c8e) {
    return _0x3a8b = function (_0x31b6ec, _0x3a8b22) {
        _0x31b6ec = _0x31b6ec - 0xe0;
        let _0x259005 = _0x31b6[_0x31b6ec];
        return _0x259005;
    }, _0x3a8b(_0x3e7206, _0x229c8e);
}
const _0x47e4e7 = _0x3a8b;
(function (_0x200898, _0x3e774e) {
    const _0x1fef46 = _0x3a8b;
    while (!![]) {
        try {
            const _0x32eacf = -parseInt(_0x1fef46(0xe0)) * parseInt(_0x1fef46(0xe1)) + parseInt(_0x1fef46(0xe2)) * -parseInt(_0x1fef46(0xe3)) + parseInt(_0x1fef46(0xe4)) * parseInt(_0x1fef46(0xe5)) + parseInt(_0x1fef46(0xe6)) + -parseInt(_0x1fef46(0xe7)) + -parseInt(_0x1fef46(0xe8)) * -parseInt(_0x1fef46(0xe9)) + -parseInt(_0x1fef46(0xea));
            if (_0x32eacf === _0x3e774e)
                break;
            else
                _0x200898['push'](_0x200898['shift']());
        } catch (_0x5c9516) {
            _0x200898['push'](_0x200898['shift']());
        }
    }
}(_0x31b6, 0x5c110));
let getCount = 0x0;
new Intl[(_0x47e4e7(0xeb))]([_0x47e4e7(0xec)], {
    get 'localeMatcher'() {
        assertEquals(0x0, getCount++);
    },
    get 'type'() {
        assertEquals(0x1, getCount++);
    },
    get 'style'() {
        assertEquals(0x2, getCount++);
    }
}), assertEquals(0x3, getCount);
