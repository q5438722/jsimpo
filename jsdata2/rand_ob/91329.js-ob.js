const _0x268e = [
    'find',
    'fTbql',
    'resourceName',
    'every',
    'resourceDefinitions',
    'A\x20resource\x20(',
    'stringify',
    ')\x20is\x20missing\x20its\x20dependency\x20on\x20',
    '21647QDPFoe',
    '1onbNGx',
    '110918CwlfJO',
    '1tMyrmk',
    '143914RKCBDA',
    '512502sWrCcC',
    '687705jyhCdm',
    '1VIQCHD',
    '350221ZknSIT',
    '265adnvWo',
    '2399votpXb',
    'dependsOn',
    'map',
    'keys'
];
function _0x432f(_0x1f9d2b, _0x544879) {
    return _0x432f = function (_0x5c9c5d, _0x48c94e) {
        _0x5c9c5d = _0x5c9c5d - (0x154f + -0xc9 * 0x9 + -0x9 * 0x174);
        let _0x944f8b = _0x268e[_0x5c9c5d];
        return _0x944f8b;
    }, _0x432f(_0x1f9d2b, _0x544879);
}
(function (_0x80850f, _0x5517b9) {
    const _0x27e379 = _0x432f;
    while (!![]) {
        try {
            const _0x31c295 = parseInt(_0x27e379(0x12a)) * parseInt(_0x27e379(0x12b)) + parseInt(_0x27e379(0x12c)) * parseInt(_0x27e379(0x12d)) + parseInt(_0x27e379(0x12e)) + parseInt(_0x27e379(0x12f)) + parseInt(_0x27e379(0x130)) * -parseInt(_0x27e379(0x131)) + -parseInt(_0x27e379(0x132)) + parseInt(_0x27e379(0x133)) * parseInt(_0x27e379(0x134));
            if (_0x31c295 === _0x5517b9)
                break;
            else
                _0x80850f['push'](_0x80850f['shift']());
        } catch (_0x1e3d9d) {
            _0x80850f['push'](_0x80850f['shift']());
        }
    }
}(_0x268e, 0xb0517 + 0xacdd0 + -0xfec01));
export default function findDependencyMatch(_0x55f0cd, _0x300218) {
    const _0x1b0279 = _0x432f, _0x84661a = {
            'fTbql': function (_0x514746, _0x5bcde9) {
                return _0x514746 !== _0x5bcde9;
            }
        };
    return !_0x300218[_0x1b0279(0x135)] ? [] : _0x300218[_0x1b0279(0x135)][_0x1b0279(0x136)](_0x1566e1 => {
        const _0x325685 = _0x1b0279, {
                resourceName: _0x29b792,
                ..._0x522e75
            } = _0x1566e1, _0x1172b5 = Object[_0x325685(0x137)](_0x522e75), _0x55fcd6 = _0x55f0cd[_0x325685(0x138)](_0x3dccef => {
                const _0x39caad = _0x325685;
                if (_0x84661a[_0x39caad(0x139)](_0x29b792, _0x3dccef[_0x39caad(0x13a)]))
                    return ![];
                if (!_0x1172b5[_0x39caad(0x13b)](_0x37becc => Object['keys'](_0x3dccef[_0x39caad(0x13c)])['indexOf'](_0x37becc) >= 0x1db4 + 0x158f * -0x1 + -0x825))
                    return ![];
                if (!_0x1172b5['every'](_0xa8316f => _0x3dccef[_0x39caad(0x13c)][_0xa8316f] === _0x1566e1[_0xa8316f]))
                    return ![];
                return _0x3dccef;
            });
        if (_0x55fcd6)
            return _0x55fcd6;
        else {
            const {
                mdxType: _0x77a2ad,
                ..._0x226617
            } = _0x300218[_0x325685(0x13c)];
            return { 'error': _0x325685(0x13d) + _0x300218['resourceName'] + ':\x20' + JSON[_0x325685(0x13e)](_0x226617) + _0x325685(0x13f) + JSON['stringify'](_0x300218['dependsOn'][0x1b0c + 0x593 * 0x3 + 0xf * -0x2eb]) };
        }
    });
}
