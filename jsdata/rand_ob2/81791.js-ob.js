const _0x1163 = [
    '404084TLuEQj',
    '15CksruR',
    '18749aCbyZR',
    '813988nbBjWd',
    '71921UbyjFP',
    '13156xTvlPt',
    '2005055ygytvq',
    '@tryghost/debug',
    'exports',
    'backupContent',
    'response',
    'importContent',
    'length',
    'problems',
    '73911qOQyCF',
    '2ZKfJSz'
];
const _0x6ef0c6 = _0x15d9;
function _0x15d9(_0x4956fe, _0x12f06b) {
    return _0x15d9 = function (_0x116339, _0x15d928) {
        _0x116339 = _0x116339 - 0x6a;
        let _0x257212 = _0x1163[_0x116339];
        return _0x257212;
    }, _0x15d9(_0x4956fe, _0x12f06b);
}
(function (_0x392e89, _0x2dbb74) {
    const _0x59f77f = _0x15d9;
    while (!![]) {
        try {
            const _0x7aee0f = parseInt(_0x59f77f(0x6a)) + parseInt(_0x59f77f(0x6b)) * -parseInt(_0x59f77f(0x6c)) + parseInt(_0x59f77f(0x6d)) * parseInt(_0x59f77f(0x6e)) + -parseInt(_0x59f77f(0x6f)) + -parseInt(_0x59f77f(0x70)) + -parseInt(_0x59f77f(0x71)) + parseInt(_0x59f77f(0x72));
            if (_0x7aee0f === _0x2dbb74)
                break;
            else
                _0x392e89['push'](_0x392e89['shift']());
        } catch (_0x5b4753) {
            _0x392e89['push'](_0x392e89['shift']());
        }
    }
}(_0x1163, 0x9f6a8));
const debug = require(_0x6ef0c6(0x73))('api:v2:utils:serializers:output:db');
module[_0x6ef0c6(0x74)] = {
    'backupContent'(_0xfdd6e4, _0x575d82, _0x5f51fa) {
        const _0x3a26ad = _0x6ef0c6;
        debug(_0x3a26ad(0x75)), _0x5f51fa[_0x3a26ad(0x76)] = { 'db': [{ 'filename': _0xfdd6e4 }] };
    },
    'exportContent'(_0xcdbfad, _0x2d344e, _0x4e17ef) {
        const _0x33d9d5 = _0x6ef0c6;
        debug('exportContent'), _0x4e17ef[_0x33d9d5(0x76)] = { 'db': [_0xcdbfad] };
    },
    'importContent'(_0x12de16, _0x342837, _0x10bb80) {
        const _0x4bf2ec = _0x6ef0c6;
        debug(_0x4bf2ec(0x77));
        const _0x342b96 = _0x12de16[_0x4bf2ec(0x78)] === 0x2 ? _0x12de16[0x1][_0x4bf2ec(0x79)] : _0x12de16[0x0]['problems'];
        _0x10bb80[_0x4bf2ec(0x76)] = {
            'db': [],
            'problems': _0x342b96
        };
    },
    'deleteAllContent'(_0x1191f0, _0x584e44, _0x53857e) {
        _0x53857e['response'] = { 'db': [] };
    }
};
