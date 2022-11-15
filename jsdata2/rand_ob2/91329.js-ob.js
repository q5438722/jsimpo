const _0x1756 = [
    ')\x20is\x20missing\x20its\x20dependency\x20on\x20',
    '322210SqleOJ',
    '161469qrAUIl',
    '62240QHQwxL',
    '706776vMoilo',
    '33278tRlSPN',
    '19uRkKhJ',
    '233556nBTvdz',
    '3RYemUG',
    '990753GlVwpr',
    'dependsOn',
    'map',
    'keys',
    'find',
    'resourceName',
    'resourceDefinitions',
    'stringify'
];
(function (_0x4f80ea, _0x2386f4) {
    const _0x920183 = _0x5ed0;
    while (!![]) {
        try {
            const _0x5b5142 = parseInt(_0x920183(0xfb)) + parseInt(_0x920183(0xfc)) + -parseInt(_0x920183(0xfd)) + parseInt(_0x920183(0xfe)) + parseInt(_0x920183(0xff)) * -parseInt(_0x920183(0x100)) + parseInt(_0x920183(0x101)) * -parseInt(_0x920183(0x102)) + parseInt(_0x920183(0x103));
            if (_0x5b5142 === _0x2386f4)
                break;
            else
                _0x4f80ea['push'](_0x4f80ea['shift']());
        } catch (_0x345f7f) {
            _0x4f80ea['push'](_0x4f80ea['shift']());
        }
    }
}(_0x1756, 0xbfe62));
function _0x5ed0(_0x23f003, _0x37bfea) {
    return _0x5ed0 = function (_0x175669, _0x5ed0b1) {
        _0x175669 = _0x175669 - 0xfb;
        let _0x6072cf = _0x1756[_0x175669];
        return _0x6072cf;
    }, _0x5ed0(_0x23f003, _0x37bfea);
}
export default function findDependencyMatch(_0x352926, _0x49a6e0) {
    const _0x256788 = _0x5ed0;
    return !_0x49a6e0['dependsOn'] ? [] : _0x49a6e0[_0x256788(0x104)][_0x256788(0x105)](_0x38e130 => {
        const _0x39d9bd = _0x256788, {
                resourceName: _0x47856a,
                ..._0x160355
            } = _0x38e130, _0x2418ac = Object[_0x39d9bd(0x106)](_0x160355), _0x3e6c2a = _0x352926[_0x39d9bd(0x107)](_0x219039 => {
                const _0x1e2965 = _0x39d9bd;
                if (_0x47856a !== _0x219039[_0x1e2965(0x108)])
                    return ![];
                if (!_0x2418ac['every'](_0x23d338 => Object['keys'](_0x219039['resourceDefinitions'])['indexOf'](_0x23d338) >= 0x0))
                    return ![];
                if (!_0x2418ac['every'](_0x664b12 => _0x219039[_0x1e2965(0x109)][_0x664b12] === _0x38e130[_0x664b12]))
                    return ![];
                return _0x219039;
            });
        if (_0x3e6c2a)
            return _0x3e6c2a;
        else {
            const {
                mdxType: _0x3509ef,
                ..._0x54dac0
            } = _0x49a6e0[_0x39d9bd(0x109)];
            return { 'error': 'A\x20resource\x20(' + _0x49a6e0['resourceName'] + ':\x20' + JSON[_0x39d9bd(0x10a)](_0x54dac0) + _0x39d9bd(0x10b) + JSON[_0x39d9bd(0x10a)](_0x49a6e0[_0x39d9bd(0x104)][0x0]) };
        }
    });
}
