const _0x49d8 = [
    '899wKQmgN',
    '286546FMLWIj',
    '107981UKrmED',
    '939863EQcLXR',
    '184906cMPviR',
    '1gttIHC',
    '2429536JjERIZ',
    'reduce',
    'apiList',
    'forEach',
    'add',
    'replace',
    'uni.',
    'filter',
    'has',
    '110574EhwVyC',
    '9ZZTEBc',
    '70ehxHGw'
];
(function (_0x4cf260, _0x1d0bc9) {
    const _0x51a514 = _0x14a4;
    while (!![]) {
        try {
            const _0x162c82 = -parseInt(_0x51a514(0x89)) * parseInt(_0x51a514(0x8a)) + -parseInt(_0x51a514(0x8b)) * parseInt(_0x51a514(0x8c)) + parseInt(_0x51a514(0x8d)) + parseInt(_0x51a514(0x8e)) + -parseInt(_0x51a514(0x8f)) + parseInt(_0x51a514(0x90)) * -parseInt(_0x51a514(0x91)) + parseInt(_0x51a514(0x92));
            if (_0x162c82 === _0x1d0bc9)
                break;
            else
                _0x4cf260['push'](_0x4cf260['shift']());
        } catch (_0x33e42b) {
            _0x4cf260['push'](_0x4cf260['shift']());
        }
    }
}(_0x49d8, 0x9c8ae));
function _0x14a4(_0xa0f636, _0x8ca84e) {
    return _0x14a4 = function (_0x49d894, _0x14a470) {
        _0x49d894 = _0x49d894 - 0x89;
        let _0x9573d4 = _0x49d8[_0x49d894];
        return _0x9573d4;
    }, _0x14a4(_0xa0f636, _0x8ca84e);
}
function parseApis(_0x325775, _0x56c62b) {
    const _0x1cc392 = _0x14a4;
    return _0x325775[_0x1cc392(0x93)](function (_0x2ff28f, _0xef4bb3) {
        const _0x12df74 = _0x1cc392, _0x39339f = _0xef4bb3[_0x12df74(0x94)];
        return _0x39339f && Object['keys'](_0x39339f)[_0x12df74(0x95)](_0x162429 => {
            const _0x408055 = _0x12df74;
            _0x56c62b(_0x162429, _0x39339f[_0x162429]) && _0x2ff28f[_0x408055(0x96)](_0x162429[_0x408055(0x97)](_0x408055(0x98), ''));
        }), _0x2ff28f;
    }, new Set());
}
module['exports'] = {
    'parseUserApis'(_0x1bedea = [], _0xa86579 = []) {
        const _0x5b5fba = _0x14a4, _0x4361e4 = parseApis(_0x1bedea, function (_0x1e0392, _0x4b8c12) {
                return _0x4b8c12 === ![];
            }), _0x1498a1 = parseApis(_0xa86579, function () {
                return !![];
            });
        return [..._0x1498a1][_0x5b5fba(0x99)](_0x28cd62 => !_0x4361e4[_0x5b5fba(0x9a)](_0x28cd62));
    }
};
