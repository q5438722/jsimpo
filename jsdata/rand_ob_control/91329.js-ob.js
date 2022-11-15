export default function findDependencyMatch(_0x38ec87, _0x4ae0f6) {
    const _0x491d80 = {
        'ItrHD': function (_0xe000c0, _0x5b9d72) {
            return _0xe000c0 !== _0x5b9d72;
        }
    };
    return !_0x4ae0f6['dependsOn'] ? [] : _0x4ae0f6['dependsOn']['map'](_0x2a1f1c => {
        const _0x1429f9 = {
                'mCGKf': function (_0x37e66e, _0x3dec85) {
                    return _0x491d80['ItrHD'](_0x37e66e, _0x3dec85);
                }
            }, {
                resourceName: _0x4bf7b3,
                ..._0x5b10c2
            } = _0x2a1f1c, _0x14f3c0 = Object['keys'](_0x5b10c2), _0x4fcc63 = _0x38ec87['find'](_0x54a086 => {
                if (_0x1429f9['mCGKf'](_0x4bf7b3, _0x54a086['resourceName']))
                    return ![];
                if (!_0x14f3c0['every'](_0x523fa7 => Object['keys'](_0x54a086['resourceDefinitions'])['indexOf'](_0x523fa7) >= 0x0))
                    return ![];
                if (!_0x14f3c0['every'](_0x1b738b => _0x54a086['resourceDefinitions'][_0x1b738b] === _0x2a1f1c[_0x1b738b]))
                    return ![];
                return _0x54a086;
            });
        if (_0x4fcc63)
            return _0x4fcc63;
        else {
            const {
                mdxType: _0x55dc26,
                ..._0x265853
            } = _0x4ae0f6['resourceDefinitions'];
            return { 'error': 'A\x20resource\x20(' + _0x4ae0f6['resourceName'] + ':\x20' + JSON['stringify'](_0x265853) + ')\x20is\x20missing\x20its\x20dependency\x20on\x20' + JSON['stringify'](_0x4ae0f6['dependsOn'][0x0]) };
        }
    });
}
