const _0x383e = [
    'info',
    'key',
    'del',
    '4vJmzUB',
    '109149zdhFKf',
    '299nLjPZL',
    '1789HxzMby',
    '409106qgFfdU',
    '150544HpKLHe',
    '309614vbtrhl',
    '39991QvNPkq',
    '1CNNOzx',
    '1025440olCDQf',
    '@tryghost/logging',
    '../../utils.js',
    'exports',
    'where',
    'first',
    'Adding\x20\x22email_verification_required\x22\x20record\x20to\x20\x22settings\x22\x20table',
    'raw',
    'CURRENT_TIMESTAMP',
    'settings',
    'email_verification_required',
    'email',
    'warn',
    'Skipped\x20adding\x20\x22email_verification_required\x22\x20record\x20to\x20\x22settings\x22\x20table.\x20Record\x20already\x20exists!'
];
const _0x3d6e43 = _0x3a4f;
function _0x3a4f(_0xd94948, _0x2695a8) {
    return _0x3a4f = function (_0x383e9d, _0x3a4f59) {
        _0x383e9d = _0x383e9d - 0xf7;
        let _0x3d4cd9 = _0x383e[_0x383e9d];
        return _0x3d4cd9;
    }, _0x3a4f(_0xd94948, _0x2695a8);
}
(function (_0x55bed2, _0xe3d1ee) {
    const _0x4875a3 = _0x3a4f;
    while (!![]) {
        try {
            const _0x36132c = parseInt(_0x4875a3(0xf7)) * -parseInt(_0x4875a3(0xf8)) + parseInt(_0x4875a3(0xf9)) * -parseInt(_0x4875a3(0xfa)) + parseInt(_0x4875a3(0xfb)) + parseInt(_0x4875a3(0xfc)) + -parseInt(_0x4875a3(0xfd)) + -parseInt(_0x4875a3(0xfe)) * -parseInt(_0x4875a3(0xff)) + parseInt(_0x4875a3(0x100));
            if (_0x36132c === _0xe3d1ee)
                break;
            else
                _0x55bed2['push'](_0x55bed2['shift']());
        } catch (_0x26c2fb) {
            _0x55bed2['push'](_0x55bed2['shift']());
        }
    }
}(_0x383e, 0x53f98));
const ObjectID = require('bson-objectid'), logging = require(_0x3d6e43(0x101)), {createTransactionalMigration} = require(_0x3d6e43(0x102)), MIGRATION_USER = 0x1;
module[_0x3d6e43(0x103)] = createTransactionalMigration(async function up(_0x404bc8) {
    const _0x3c1ba0 = _0x3d6e43, _0x4faaa7 = await _0x404bc8('settings')[_0x3c1ba0(0x104)]('key', '=', 'email_verification_required')[_0x3c1ba0(0x105)]();
    if (!_0x4faaa7) {
        logging['info'](_0x3c1ba0(0x106));
        const _0x16ba53 = _0x404bc8[_0x3c1ba0(0x107)](_0x3c1ba0(0x108));
        await _0x404bc8(_0x3c1ba0(0x109))['insert']({
            'id': ObjectID()['toHexString'](),
            'key': _0x3c1ba0(0x10a),
            'value': 'false',
            'group': _0x3c1ba0(0x10b),
            'type': 'boolean',
            'flags': 'RO',
            'created_at': _0x16ba53,
            'created_by': MIGRATION_USER,
            'updated_at': _0x16ba53,
            'updated_by': MIGRATION_USER
        });
    } else
        logging[_0x3c1ba0(0x10c)](_0x3c1ba0(0x10d));
}, async function down(_0x47bf76) {
    const _0x58057c = _0x3d6e43;
    logging[_0x58057c(0x10e)]('Removing\x20\x22email_verification_required\x22\x20record\x20from\x20\x22settings\x22\x20table'), await _0x47bf76(_0x58057c(0x109))[_0x58057c(0x104)](_0x58057c(0x10f), '=', _0x58057c(0x10a))[_0x58057c(0x110)]();
});
