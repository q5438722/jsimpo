const ObjectID = require('bson-objectid');
const logging = require('@tryghost/logging');
const {createTransactionalMigration} = require('../../utils.js');
const MIGRATION_USER = 1;
module['exports'] = createTransactionalMigration(async function up(_0x1d569a) {
    const _0x147639 = await _0x1d569a('settings')['where']('key', '=', 'email_verification_required')['first']();
    if (!_0x147639) {
        logging['info']('Adding "email_verification_required" record to "settings" table');
        const _0x2367df = _0x1d569a['raw']('CURRENT_TIMESTAMP');
        await _0x1d569a('settings')['insert']({
            'id': ObjectID()['toHexString'](),
            'key': 'email_verification_required',
            'value': 'false',
            'group': 'email',
            'type': 'boolean',
            'flags': 'RO',
            'created_at': _0x2367df,
            'created_by': MIGRATION_USER,
            'updated_at': _0x2367df,
            'updated_by': MIGRATION_USER
        });
    } else {
        logging['warn']('Skipped adding "email_verification_required" record to "settings" table. Record already exists!');
    }
}, async function down(_0x55679e) {
    logging['info']('Removing "email_verification_required" record from "settings" table');
    await _0x55679e('settings')['where']('key', '=', 'email_verification_required')['del']();
});