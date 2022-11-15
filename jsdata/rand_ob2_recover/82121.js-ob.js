const ObjectID = require('bson-objectid'), logging = require(_0x3d6e43(257)), {createTransactionalMigration} = require(_0x3d6e43(258)), MIGRATION_USER = 1;
module[_0x3d6e43(259)] = createTransactionalMigration(async function up(_0x404bc8) {
    const _0x3c1ba0 = _0x3d6e43, _0x4faaa7 = await _0x404bc8('settings')[_0x3c1ba0(260)]('key', '=', 'email_verification_required')[_0x3c1ba0(261)]();
    if (!_0x4faaa7) {
        logging['info'](_0x3c1ba0(262));
        const _0x16ba53 = _0x404bc8[_0x3c1ba0(263)](_0x3c1ba0(264));
        await _0x404bc8(_0x3c1ba0(265))['insert']({
            'id': ObjectID()['toHexString'](),
            'key': _0x3c1ba0(266),
            'value': 'false',
            'group': _0x3c1ba0(267),
            'type': 'boolean',
            'flags': 'RO',
            'created_at': _0x16ba53,
            'created_by': MIGRATION_USER,
            'updated_at': _0x16ba53,
            'updated_by': MIGRATION_USER
        });
    } else
        logging[_0x3c1ba0(268)](_0x3c1ba0(269));
}, async function down(_0x47bf76) {
    const _0x58057c = _0x3d6e43;
    logging[_0x58057c(270)]('Removing "email_verification_required" record from "settings" table'), await _0x47bf76(_0x58057c(265))[_0x58057c(260)](_0x58057c(271), '=', _0x58057c(266))[_0x58057c(272)]();
});