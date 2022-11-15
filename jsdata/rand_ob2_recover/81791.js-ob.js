const debug = require(_0x6ef0c6(115))('api:v2:utils:serializers:output:db');
module[_0x6ef0c6(116)] = {
    'backupContent'(_0xfdd6e4, _0x575d82, _0x5f51fa) {
        const _0x3a26ad = _0x6ef0c6;
        debug(_0x3a26ad(117)), _0x5f51fa[_0x3a26ad(118)] = { 'db': [{ 'filename': _0xfdd6e4 }] };
    },
    'exportContent'(_0xcdbfad, _0x2d344e, _0x4e17ef) {
        const _0x33d9d5 = _0x6ef0c6;
        debug('exportContent'), _0x4e17ef[_0x33d9d5(118)] = { 'db': [_0xcdbfad] };
    },
    'importContent'(_0x12de16, _0x342837, _0x10bb80) {
        const _0x4bf2ec = _0x6ef0c6;
        debug(_0x4bf2ec(119));
        const _0x342b96 = _0x12de16[_0x4bf2ec(120)] === 2 ? _0x12de16[1][_0x4bf2ec(121)] : _0x12de16[0]['problems'];
        _0x10bb80[_0x4bf2ec(118)] = {
            'db': [],
            'problems': _0x342b96
        };
    },
    'deleteAllContent'(_0x1191f0, _0x584e44, _0x53857e) {
        _0x53857e['response'] = { 'db': [] };
    }
};