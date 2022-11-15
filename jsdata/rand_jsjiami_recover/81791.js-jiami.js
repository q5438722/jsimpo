const debug = require('@tryghost/debug')('api:v2:utils:serializers:output:db');
module['exports'] = {
    'backupContent'(_0x1fcd2e, _0x439bd8, _0x49322c) {
        debug('backupContent');
        _0x49322c['response'] = { 'db': [{ 'filename': _0x1fcd2e }] };
    },
    'exportContent'(_0x132587, _0x18f11b, _0x18d579) {
        debug('exportContent');
        _0x18d579['response'] = { 'db': [_0x132587] };
    },
    'importContent'(_0xc002ca, _0x2307bd, _0x47bdfb) {
        debug('importContent');
        const _0x52e0cc = _0xc002ca['length'] === 2 ? _0xc002ca[1]['problems'] : _0xc002ca[0]['problems'];
        _0x47bdfb['response'] = {
            'db': [],
            'problems': _0x52e0cc
        };
    },
    'deleteAllContent'(_0x1e01bf, _0x3c9b13, _0x27393a) {
        _0x27393a['response'] = { 'db': [] };
    }
};