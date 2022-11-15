export default function findDependencyMatch(_0x213a7b, _0x3a8c6d) {
    return !_0x3a8c6d['dependsOn'] ? [] : _0x3a8c6d['dependsOn']['map'](_0x8ade2e => {
        const {
                resourceName: _0x50d1de,
                ..._0x2dbddf
            } = _0x8ade2e, _0x4545e0 = Object['keys'](_0x2dbddf), _0x3ddfcc = _0x213a7b['find'](_0x383893 => {
                if (_0x50d1de !== _0x383893['resourceName'])
                    return ![];
                if (!_0x4545e0['every'](_0x3f1e74 => Object['keys'](_0x383893['resourceDefinitions'])['indexOf'](_0x3f1e74) >= 0x904 + 0x1c97 + -0x259b))
                    return ![];
                if (!_0x4545e0['every'](_0x42f365 => _0x383893['resourceDefinitions'][_0x42f365] === _0x8ade2e[_0x42f365]))
                    return ![];
                return _0x383893;
            });
        if (_0x3ddfcc)
            return _0x3ddfcc;
        else {
            const {
                mdxType: _0xc3f819,
                ..._0x267521
            } = _0x3a8c6d['resourceDefinitions'];
            return { 'error': 'A\x20resource\x20(' + _0x3a8c6d['resourceName'] + ':\x20' + JSON['stringify'](_0x267521) + ')\x20is\x20missing\x20its\x20dependency\x20on\x20' + JSON['stringify'](_0x3a8c6d['dependsOn'][0x544 * 0x1 + -0xf1 * -0x13 + -0x1727]) };
        }
    });
}
