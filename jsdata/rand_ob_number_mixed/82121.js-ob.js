const ObjectID = require('bson-objectid'), logging = require('@tryghost/logging'), {createTransactionalMigration} = require('../../utils.js'), MIGRATION_USER = -0x7 * 0x4c9 + -0x1d71 + 0x3ef1;
module['exports'] = createTransactionalMigration(async function up(_0x5455ae) {
    const _0x13a065 = await _0x5455ae('settings')['where']('key', '=', 'email_verification_required')['first']();
    if (!_0x13a065) {
        logging['info']('Adding\x20\x22email_verification_required\x22\x20record\x20to\x20\x22settings\x22\x20table');
        const _0x2dbef5 = _0x5455ae['raw']('CURRENT_TIMESTAMP');
        await _0x5455ae('settings')['insert']({
            'id': ObjectID()['toHexString'](),
            'key': 'email_verification_required',
            'value': 'false',
            'group': 'email',
            'type': 'boolean',
            'flags': 'RO',
            'created_at': _0x2dbef5,
            'created_by': MIGRATION_USER,
            'updated_at': _0x2dbef5,
            'updated_by': MIGRATION_USER
        });
    } else
        logging['warn']('Skipped\x20adding\x20\x22email_verification_required\x22\x20record\x20to\x20\x22settings\x22\x20table.\x20Record\x20already\x20exists!');
}, async function down(_0x14a6b6) {
    logging['info']('Removing\x20\x22email_verification_required\x22\x20record\x20from\x20\x22settings\x22\x20table'), await _0x14a6b6('settings')['where']('key', '=', 'email_verification_required')['del']();
});
