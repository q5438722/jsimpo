const _0x3f83 = [
    'forEach',
    'push',
    'pop',
    '815135oJywEl',
    '568503lSlAaL',
    '261BhInlQ',
    '2809MJMUtH',
    '22376gxefmc',
    '9pdMzwf',
    '446695iYsUGP',
    '77894ZDNrOA',
    '1635973jWsGzI',
    'length'
];
(function (_0x4d439d, _0x18ea5f) {
    const _0xd4b1f8 = _0x459c;
    while (!![]) {
        try {
            const _0x15c3a3 = parseInt(_0xd4b1f8(0x16c)) + parseInt(_0xd4b1f8(0x16d)) + parseInt(_0xd4b1f8(0x16e)) * parseInt(_0xd4b1f8(0x16f)) + -parseInt(_0xd4b1f8(0x170)) * parseInt(_0xd4b1f8(0x171)) + parseInt(_0xd4b1f8(0x172)) + -parseInt(_0xd4b1f8(0x173)) + -parseInt(_0xd4b1f8(0x174));
            if (_0x15c3a3 === _0x18ea5f)
                break;
            else
                _0x4d439d['push'](_0x4d439d['shift']());
        } catch (_0x3cab02) {
            _0x4d439d['push'](_0x4d439d['shift']());
        }
    }
}(_0x3f83, 0x9e427));
function _0x459c(_0x105395, _0x28485f) {
    return _0x459c = function (_0x3f83f4, _0x459c56) {
        _0x3f83f4 = _0x3f83f4 - 0x16c;
        let _0x26ed64 = _0x3f83[_0x3f83f4];
        return _0x26ed64;
    }, _0x459c(_0x105395, _0x28485f);
}
export default function dpTopDownJumpGame(_0xc5bf2a, _0x58c0a2 = 0x0, _0x41039c = [], _0x3ffcb0 = []) {
    const _0x23567e = _0x459c;
    if (_0x58c0a2 === _0xc5bf2a[_0x23567e(0x175)] - 0x1)
        return !![];
    const _0xc501f0 = [..._0x3ffcb0];
    !_0xc501f0[_0x23567e(0x175)] && (_0xc5bf2a[_0x23567e(0x176)](() => _0xc501f0[_0x23567e(0x177)](undefined)), _0xc501f0[_0x3ffcb0['length'] - 0x1] = !![]);
    const _0x2e943e = Math['min'](_0xc5bf2a[_0x58c0a2], _0xc5bf2a[_0x23567e(0x175)] - 0x1 - _0x58c0a2);
    for (let _0x360d4b = _0x2e943e; _0x360d4b > 0x0; _0x360d4b -= 0x1) {
        const _0x5d6c36 = _0x58c0a2 + _0x360d4b;
        if (_0xc501f0[_0x5d6c36] !== ![]) {
            _0x41039c[_0x23567e(0x177)](_0x5d6c36);
            const _0x368d94 = dpTopDownJumpGame(_0xc5bf2a, _0x5d6c36, _0x41039c, _0xc501f0);
            if (_0x368d94)
                return !![];
            _0x41039c[_0x23567e(0x178)](), _0xc501f0[_0x5d6c36] = ![];
        }
    }
    return ![];
}
