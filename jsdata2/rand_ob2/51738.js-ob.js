const _0x5e3e = [
    '1214rpHvCu',
    '600eFjwBV',
    '790091kPhnKm',
    '46DqUBSo',
    '18119xJyWAL',
    '3781141fhotVn',
    './browsers',
    'keys',
    'reduce',
    'split',
    'exports',
    'default',
    '840332aJWgTH',
    '876350IMRRUB',
    '736594kKZIcN'
];
function _0x3a4f(_0x48021d, _0x366470) {
    return _0x3a4f = function (_0x5e3ea2, _0x3a4f8d) {
        _0x5e3ea2 = _0x5e3ea2 - 0x188;
        let _0x5085e4 = _0x5e3e[_0x5e3ea2];
        return _0x5085e4;
    }, _0x3a4f(_0x48021d, _0x366470);
}
const _0x222e7e = _0x3a4f;
(function (_0x432529, _0x5003eb) {
    const _0x26af44 = _0x3a4f;
    while (!![]) {
        try {
            const _0x402e19 = -parseInt(_0x26af44(0x188)) + -parseInt(_0x26af44(0x189)) + parseInt(_0x26af44(0x18a)) + -parseInt(_0x26af44(0x18b)) * parseInt(_0x26af44(0x18c)) + -parseInt(_0x26af44(0x18d)) + -parseInt(_0x26af44(0x18e)) * parseInt(_0x26af44(0x18f)) + parseInt(_0x26af44(0x190));
            if (_0x402e19 === _0x5003eb)
                break;
            else
                _0x432529['push'](_0x432529['shift']());
        } catch (_0xfc67d1) {
            _0x432529['push'](_0x432529['shift']());
        }
    }
}(_0x5e3e, 0x6da40));
const {browsers} = require(_0x222e7e(0x191));
function unpackRegion(_0x1969b2) {
    const _0x438f42 = _0x222e7e;
    return Object[_0x438f42(0x192)](_0x1969b2)['reduce']((_0x19d0fa, _0x3173c7) => {
        const _0x3ac819 = _0x438f42;
        let _0x13dd4e = _0x1969b2[_0x3173c7];
        return _0x19d0fa[browsers[_0x3173c7]] = Object['keys'](_0x13dd4e)[_0x3ac819(0x193)]((_0x125c0c, _0x48f3d0) => {
            const _0x428d5b = _0x3ac819;
            let _0x36de03 = _0x13dd4e[_0x48f3d0];
            return _0x48f3d0 === '_' ? _0x36de03[_0x428d5b(0x194)]('\x20')['forEach'](_0x2daafb => _0x125c0c[_0x2daafb] = null) : _0x125c0c[_0x48f3d0] = _0x36de03, _0x125c0c;
        }, {}), _0x19d0fa;
    }, {});
}
module[_0x222e7e(0x195)] = unpackRegion, module[_0x222e7e(0x195)][_0x222e7e(0x196)] = unpackRegion;
