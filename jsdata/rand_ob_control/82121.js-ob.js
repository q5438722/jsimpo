const ObjectID = require('bson-objectid'), logging = require('@tryghost/logging'), {createTransactionalMigration} = require('../../utils.js'), MIGRATION_USER = 0x1;
module['exports'] = createTransactionalMigration(async function up(_0x482c12) {
    const _0x26bd10 = {
            'IDUig': function (_0x295bad, _0x56fed6) {
                return _0x295bad(_0x56fed6);
            },
            'cIiMr': 'settings',
            'iauOf': 'key',
            'NOPno': 'email_verification_required',
            'zLDSo': 'Adding\x20\x22email_verification_required\x22\x20record\x20to\x20\x22settings\x22\x20table',
            'dpzLh': 'CURRENT_TIMESTAMP',
            'uYOEy': function (_0x143914) {
                return _0x143914();
            },
            'qWkXS': 'false',
            'zjcsu': 'email',
            'CWITs': 'boolean',
            'pcndg': 'Skipped\x20adding\x20\x22email_verification_required\x22\x20record\x20to\x20\x22settings\x22\x20table.\x20Record\x20already\x20exists!'
        }, _0x416b28 = await _0x26bd10['IDUig'](_0x482c12, _0x26bd10['cIiMr'])['where'](_0x26bd10['iauOf'], '=', _0x26bd10['NOPno'])['first']();
    if (!_0x416b28) {
        logging['info'](_0x26bd10['zLDSo']);
        const _0x158b64 = _0x482c12['raw'](_0x26bd10['dpzLh']);
        await _0x26bd10['IDUig'](_0x482c12, _0x26bd10['cIiMr'])['insert']({
            'id': _0x26bd10['uYOEy'](ObjectID)['toHexString'](),
            'key': _0x26bd10['NOPno'],
            'value': _0x26bd10['qWkXS'],
            'group': _0x26bd10['zjcsu'],
            'type': _0x26bd10['CWITs'],
            'flags': 'RO',
            'created_at': _0x158b64,
            'created_by': MIGRATION_USER,
            'updated_at': _0x158b64,
            'updated_by': MIGRATION_USER
        });
    } else
        logging['warn'](_0x26bd10['pcndg']);
}, async function down(_0x2f664) {
    const _0x5847d7 = {
        'AMKxX': 'Removing\x20\x22email_verification_required\x22\x20record\x20from\x20\x22settings\x22\x20table',
        'KaIPr': function (_0x35a0e2, _0x295b78) {
            return _0x35a0e2(_0x295b78);
        },
        'lHrOo': 'settings',
        'XSJDq': 'key',
        'tVrcq': 'email_verification_required'
    };
    logging['info'](_0x5847d7['AMKxX']), await _0x5847d7['KaIPr'](_0x2f664, _0x5847d7['lHrOo'])['where'](_0x5847d7['XSJDq'], '=', _0x5847d7['tVrcq'])['del']();
});
