const _0x20f8 = [
    '1760551hEKLAH',
    'dependsOn',
    'keys',
    'find',
    'resourceName',
    'every',
    'indexOf',
    'resourceDefinitions',
    'A\x20resource\x20(',
    'stringify',
    ')\x20is\x20missing\x20its\x20dependency\x20on\x20',
    '29OJFyFu',
    '14821UJqRaP',
    '978320mAUyNy',
    '492eCdwZp',
    '1830YBXWBW',
    '1099606aSsZeR',
    '1172422DcDjRZ',
    '15JaviAP',
    '40558WYPGuy'
];
(function (_0x57ea30, _0x36ea7c) {
    const _0x2e4e00 = _0x4f52;
    while (!![]) {
        try {
            const _0x51e91d = -parseInt(_0x2e4e00(0xba)) * parseInt(_0x2e4e00(0xbb)) + -parseInt(_0x2e4e00(0xbc)) + -parseInt(_0x2e4e00(0xbd)) * -parseInt(_0x2e4e00(0xbe)) + parseInt(_0x2e4e00(0xbf)) + parseInt(_0x2e4e00(0xc0)) + parseInt(_0x2e4e00(0xc1)) * parseInt(_0x2e4e00(0xc2)) + -parseInt(_0x2e4e00(0xc3));
            if (_0x51e91d === _0x36ea7c)
                break;
            else
                _0x57ea30['push'](_0x57ea30['shift']());
        } catch (_0x3dc978) {
            _0x57ea30['push'](_0x57ea30['shift']());
        }
    }
}(_0x20f8, 0x956ee));
function _0x4f52(_0x4be67e, _0xea7114) {
    return _0x4f52 = function (_0x20f8d4, _0x4f5281) {
        _0x20f8d4 = _0x20f8d4 - 0xba;
        let _0x35bee7 = _0x20f8[_0x20f8d4];
        return _0x35bee7;
    }, _0x4f52(_0x4be67e, _0xea7114);
}
export default function findDependencyMatch(_0x3e2252, _0x307963) {
    const _0x44c7c5 = _0x4f52;
    return !_0x307963['dependsOn'] ? [] : _0x307963[_0x44c7c5(0xc4)]['map'](_0x79be01 => {
        const _0x4de5d9 = _0x44c7c5, {
                resourceName: _0x1a6f02,
                ..._0x402cde
            } = _0x79be01, _0x51ebf9 = Object[_0x4de5d9(0xc5)](_0x402cde), _0x8a8a7e = _0x3e2252[_0x4de5d9(0xc6)](_0x20c1b0 => {
                const _0x183f5f = _0x4de5d9;
                if (_0x1a6f02 !== _0x20c1b0[_0x183f5f(0xc7)])
                    return ![];
                if (!_0x51ebf9[_0x183f5f(0xc8)](_0x43747f => Object[_0x183f5f(0xc5)](_0x20c1b0['resourceDefinitions'])[_0x183f5f(0xc9)](_0x43747f) >= 0x0))
                    return ![];
                if (!_0x51ebf9['every'](_0x4f9c5e => _0x20c1b0[_0x183f5f(0xca)][_0x4f9c5e] === _0x79be01[_0x4f9c5e]))
                    return ![];
                return _0x20c1b0;
            });
        if (_0x8a8a7e)
            return _0x8a8a7e;
        else {
            const {
                mdxType: _0x19d0ef,
                ..._0xf7d1cc
            } = _0x307963['resourceDefinitions'];
            return { 'error': _0x4de5d9(0xcb) + _0x307963['resourceName'] + ':\x20' + JSON[_0x4de5d9(0xcc)](_0xf7d1cc) + _0x4de5d9(0xcd) + JSON[_0x4de5d9(0xcc)](_0x307963[_0x4de5d9(0xc4)][0x0]) };
        }
    });
}
