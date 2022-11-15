const _0x3a9f = [
    'resourceName',
    'every',
    'resourceDefinitions',
    'indexOf',
    'stringify',
    ')\x20is\x20missing\x20its\x20dependency\x20on\x20',
    '1288fYPDVr',
    '102cSwTcN',
    '702040bKvPQz',
    '423oaHGts',
    '1739sxZmnu',
    '34932QYlpFu',
    '91FJbGCG',
    '2617vLsZrs',
    '706702UEVyRY',
    '1129775SyzJPC',
    'dependsOn',
    'map',
    'keys',
    'hSUXb'
];
(function (_0x3e1030, _0x3434c3) {
    const _0x46e4c4 = _0xeca6;
    while (!![]) {
        try {
            const _0x311bde = parseInt(_0x46e4c4(0xfa)) * parseInt(_0x46e4c4(0xfb)) + -parseInt(_0x46e4c4(0xfc)) + parseInt(_0x46e4c4(0xfd)) * parseInt(_0x46e4c4(0xfe)) + parseInt(_0x46e4c4(0xff)) + -parseInt(_0x46e4c4(0x100)) * parseInt(_0x46e4c4(0x101)) + -parseInt(_0x46e4c4(0x102)) + parseInt(_0x46e4c4(0x103));
            if (_0x311bde === _0x3434c3)
                break;
            else
                _0x3e1030['push'](_0x3e1030['shift']());
        } catch (_0x5bb9e2) {
            _0x3e1030['push'](_0x3e1030['shift']());
        }
    }
}(_0x3a9f, -0x67837 * 0x1 + -0x17f * 0x4cd + 0x138601));
function _0xeca6(_0xf48356, _0x1bc45a) {
    return _0xeca6 = function (_0x26f5a2, _0x1440d7) {
        _0x26f5a2 = _0x26f5a2 - (-0x1f51 * -0x1 + -0x106 * 0x17 + -0x6cd);
        let _0x17049c = _0x3a9f[_0x26f5a2];
        return _0x17049c;
    }, _0xeca6(_0xf48356, _0x1bc45a);
}
export default function findDependencyMatch(_0x199902, _0x517654) {
    const _0x43225d = _0xeca6, _0x1aa60b = {
            'hSUXb': function (_0x2530c9, _0x2dd21d) {
                return _0x2530c9 !== _0x2dd21d;
            }
        };
    return !_0x517654['dependsOn'] ? [] : _0x517654[_0x43225d(0x104)][_0x43225d(0x105)](_0x212c1e => {
        const _0x4502ac = _0x43225d, {
                resourceName: _0x3040da,
                ..._0x2d3314
            } = _0x212c1e, _0x42fdb8 = Object[_0x4502ac(0x106)](_0x2d3314), _0xa29d09 = _0x199902['find'](_0x296c52 => {
                const _0x47f6df = _0x4502ac;
                if (_0x1aa60b[_0x47f6df(0x107)](_0x3040da, _0x296c52[_0x47f6df(0x108)]))
                    return ![];
                if (!_0x42fdb8[_0x47f6df(0x109)](_0xf9df61 => Object[_0x47f6df(0x106)](_0x296c52[_0x47f6df(0x10a)])[_0x47f6df(0x10b)](_0xf9df61) >= -0x15 * -0x16f + 0x5 * 0x6ff + -0x4116))
                    return ![];
                if (!_0x42fdb8['every'](_0x1435ed => _0x296c52['resourceDefinitions'][_0x1435ed] === _0x212c1e[_0x1435ed]))
                    return ![];
                return _0x296c52;
            });
        if (_0xa29d09)
            return _0xa29d09;
        else {
            const {
                mdxType: _0x45076c,
                ..._0x3a23f8
            } = _0x517654['resourceDefinitions'];
            return { 'error': 'A\x20resource\x20(' + _0x517654[_0x4502ac(0x108)] + ':\x20' + JSON[_0x4502ac(0x10c)](_0x3a23f8) + _0x4502ac(0x10d) + JSON[_0x4502ac(0x10c)](_0x517654[_0x4502ac(0x104)][-0x18fb * -0x1 + -0x211b + 0x820]) };
        }
    });
}
