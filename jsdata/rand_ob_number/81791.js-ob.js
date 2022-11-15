const debug = require('@tryghost/debug')('api:v2:utils:serializers:output:db');
module['exports'] = {
    'backupContent'(_0x473def, _0x582917, _0x50c97b) {
        debug('backupContent'), _0x50c97b['response'] = { 'db': [{ 'filename': _0x473def }] };
    },
    'exportContent'(_0x555002, _0x5a9d5e, _0x3f4254) {
        debug('exportContent'), _0x3f4254['response'] = { 'db': [_0x555002] };
    },
    'importContent'(_0x54aa39, _0x304f1d, _0x46d040) {
        debug('importContent');
        const _0x49a22f = _0x54aa39['length'] === 0x4 * 0x47e + 0x99f + -0x1b95 ? _0x54aa39[-0xfbf + -0x4a3 * -0x3 + -0x3 * -0x9d]['problems'] : _0x54aa39[0x1 * -0x12bb + 0x9 * 0x109 + 0x96a]['problems'];
        _0x46d040['response'] = {
            'db': [],
            'problems': _0x49a22f
        };
    },
    'deleteAllContent'(_0x26624b, _0x50d448, _0x4adce5) {
        _0x4adce5['response'] = { 'db': [] };
    }
};
