const _0x1cef = [
    'first',
    'info',
    'Adding\x20\x22email_verification_required\x22\x20record\x20to\x20\x22settings\x22\x20table',
    'raw',
    'CURRENT_TIMESTAMP',
    'settings',
    'false',
    'email',
    'boolean',
    'warn',
    'Removing\x20\x22email_verification_required\x22\x20record\x20from\x20\x22settings\x22\x20table',
    'del',
    '319257rPrnEI',
    '1560255meDThq',
    '582191uvmwDd',
    '1dqmsZy',
    '3414GiiSyd',
    '241zNPZSk',
    '1597058UFmKik',
    '1278491VDCpCO',
    '1238299VtCDwL',
    'bson-objectid',
    'exports',
    'where',
    'key',
    'email_verification_required'
];
function _0x1088(_0x17fc4e, _0x47fb1b) {
    return _0x1088 = function (_0x1cefbe, _0x108875) {
        _0x1cefbe = _0x1cefbe - 0x96;
        let _0x5aaa23 = _0x1cef[_0x1cefbe];
        return _0x5aaa23;
    }, _0x1088(_0x17fc4e, _0x47fb1b);
}
const _0x489f4f = _0x1088;
(function (_0x36b92f, _0x2481ce) {
    const _0x154a22 = _0x1088;
    while (!![]) {
        try {
            const _0x26b25a = -parseInt(_0x154a22(0x96)) + -parseInt(_0x154a22(0x97)) + -parseInt(_0x154a22(0x98)) * parseInt(_0x154a22(0x99)) + parseInt(_0x154a22(0x9a)) * -parseInt(_0x154a22(0x9b)) + parseInt(_0x154a22(0x9c)) + parseInt(_0x154a22(0x9d)) + parseInt(_0x154a22(0x9e));
            if (_0x26b25a === _0x2481ce)
                break;
            else
                _0x36b92f['push'](_0x36b92f['shift']());
        } catch (_0x197974) {
            _0x36b92f['push'](_0x36b92f['shift']());
        }
    }
}(_0x1cef, 0xca7bb));
const ObjectID = require(_0x489f4f(0x9f)), logging = require('@tryghost/logging'), {createTransactionalMigration} = require('../../utils.js'), MIGRATION_USER = 0x1;
module[_0x489f4f(0xa0)] = createTransactionalMigration(async function up(_0x375630) {
    const _0x27096d = _0x489f4f, _0x56c2e2 = await _0x375630('settings')[_0x27096d(0xa1)](_0x27096d(0xa2), '=', _0x27096d(0xa3))[_0x27096d(0xa4)]();
    if (!_0x56c2e2) {
        logging[_0x27096d(0xa5)](_0x27096d(0xa6));
        const _0x1ccab0 = _0x375630[_0x27096d(0xa7)](_0x27096d(0xa8));
        await _0x375630(_0x27096d(0xa9))['insert']({
            'id': ObjectID()['toHexString'](),
            'key': _0x27096d(0xa3),
            'value': _0x27096d(0xaa),
            'group': _0x27096d(0xab),
            'type': _0x27096d(0xac),
            'flags': 'RO',
            'created_at': _0x1ccab0,
            'created_by': MIGRATION_USER,
            'updated_at': _0x1ccab0,
            'updated_by': MIGRATION_USER
        });
    } else
        logging[_0x27096d(0xad)]('Skipped\x20adding\x20\x22email_verification_required\x22\x20record\x20to\x20\x22settings\x22\x20table.\x20Record\x20already\x20exists!');
}, async function down(_0x37975a) {
    const _0x2a4ba7 = _0x489f4f;
    logging[_0x2a4ba7(0xa5)](_0x2a4ba7(0xae)), await _0x37975a(_0x2a4ba7(0xa9))[_0x2a4ba7(0xa1)](_0x2a4ba7(0xa2), '=', _0x2a4ba7(0xa3))[_0x2a4ba7(0xaf)]();
});
