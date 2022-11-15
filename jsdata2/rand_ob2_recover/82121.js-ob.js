const ObjectID = require(_0x489f4f(159)), logging = require('@tryghost/logging'), {createTransactionalMigration} = require('../../utils.js'), MIGRATION_USER = 1;
module[_0x489f4f(160)] = createTransactionalMigration(async function up(_0x375630) {
    const _0x27096d = _0x489f4f, _0x56c2e2 = await _0x375630('settings')[_0x27096d(161)](_0x27096d(162), '=', _0x27096d(163))[_0x27096d(164)]();
    if (!_0x56c2e2) {
        logging[_0x27096d(165)](_0x27096d(166));
        const _0x1ccab0 = _0x375630[_0x27096d(167)](_0x27096d(168));
        await _0x375630(_0x27096d(169))['insert']({
            'id': ObjectID()['toHexString'](),
            'key': _0x27096d(163),
            'value': _0x27096d(170),
            'group': _0x27096d(171),
            'type': _0x27096d(172),
            'flags': 'RO',
            'created_at': _0x1ccab0,
            'created_by': MIGRATION_USER,
            'updated_at': _0x1ccab0,
            'updated_by': MIGRATION_USER
        });
    } else
        logging[_0x27096d(173)]('Skipped adding "email_verification_required" record to "settings" table. Record already exists!');
}, async function down(_0x37975a) {
    const _0x2a4ba7 = _0x489f4f;
    logging[_0x2a4ba7(165)](_0x2a4ba7(174)), await _0x37975a(_0x2a4ba7(169))[_0x2a4ba7(161)](_0x2a4ba7(162), '=', _0x2a4ba7(163))[_0x2a4ba7(175)]();
});