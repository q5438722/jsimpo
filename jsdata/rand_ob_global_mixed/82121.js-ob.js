const _0x3899 = [
    'insert',
    'mJrPi',
    'toHexString',
    'pJMCQ',
    'PDmOC',
    'XZgvv',
    'warn',
    'settings',
    'hRtkQ',
    'GcXlK',
    'skmGg',
    'del',
    '81963ikcfDx',
    '398213ZPyQvG',
    '518250XdeAAn',
    '192363IauZVk',
    '166076HSNsFA',
    '1003045szNkFl',
    '89846tMaRpl',
    'bson-objectid',
    '@tryghost/logging',
    '../../utils.js',
    'Adding\x20\x22email_verification_required\x22\x20record\x20to\x20\x22settings\x22\x20table',
    'email_verification_required',
    'email',
    'boolean',
    'where',
    'AVSHO',
    'first',
    'info',
    'mkQrU',
    'raw',
    'QyWDo',
    'QJvLx',
    'ROTNI'
];
function _0x2096(_0x4131c4, _0x46a07e) {
    return _0x2096 = function (_0x1e548e, _0x3d1023) {
        _0x1e548e = _0x1e548e - (-0x3 * 0x322 + -0x15f0 + 0x394 * 0x9);
        let _0x39c5d3 = _0x3899[_0x1e548e];
        return _0x39c5d3;
    }, _0x2096(_0x4131c4, _0x46a07e);
}
const _0x1d5307 = _0x2096;
(function (_0xcf313b, _0x3d1b2c) {
    const _0x274b9d = _0x2096;
    while (!![]) {
        try {
            const _0xbf2d08 = parseInt(_0x274b9d(0xde)) + parseInt(_0x274b9d(0xdf)) + -parseInt(_0x274b9d(0xe0)) + -parseInt(_0x274b9d(0xe1)) + -parseInt(_0x274b9d(0xe2)) + parseInt(_0x274b9d(0xe3)) + -parseInt(_0x274b9d(0xe4));
            if (_0xbf2d08 === _0x3d1b2c)
                break;
            else
                _0xcf313b['push'](_0xcf313b['shift']());
        } catch (_0x3a4a76) {
            _0xcf313b['push'](_0xcf313b['shift']());
        }
    }
}(_0x3899, 0x8df * -0x1ac + -0x85fc6 + 0x1f16e8));
const ObjectID = require(_0x1d5307(0xe5)), logging = require(_0x1d5307(0xe6)), {createTransactionalMigration} = require(_0x1d5307(0xe7)), MIGRATION_USER = 0x109 * 0x19 + -0x11 * -0x193 + 0x785 * -0x7;
module['exports'] = createTransactionalMigration(async function up(_0x3c7d54) {
    const _0x7b9ef7 = _0x1d5307, _0x3ae2fd = {
            'TtcvC': function (_0xa28f6c, _0x4ab215) {
                return _0xa28f6c(_0x4ab215);
            },
            'ROTNI': 'settings',
            'AVSHO': 'key',
            'mkQrU': _0x7b9ef7(0xe8),
            'QyWDo': 'CURRENT_TIMESTAMP',
            'QJvLx': function (_0x592de6, _0xf06636) {
                return _0x592de6(_0xf06636);
            },
            'mJrPi': function (_0x551da9) {
                return _0x551da9();
            },
            'pJMCQ': _0x7b9ef7(0xe9),
            'PDmOC': _0x7b9ef7(0xea),
            'XZgvv': _0x7b9ef7(0xeb)
        }, _0x4052ad = await _0x3ae2fd['TtcvC'](_0x3c7d54, _0x3ae2fd['ROTNI'])[_0x7b9ef7(0xec)](_0x3ae2fd[_0x7b9ef7(0xed)], '=', _0x7b9ef7(0xe9))[_0x7b9ef7(0xee)]();
    if (!_0x4052ad) {
        logging[_0x7b9ef7(0xef)](_0x3ae2fd[_0x7b9ef7(0xf0)]);
        const _0x1a6498 = _0x3c7d54[_0x7b9ef7(0xf1)](_0x3ae2fd[_0x7b9ef7(0xf2)]);
        await _0x3ae2fd[_0x7b9ef7(0xf3)](_0x3c7d54, _0x3ae2fd[_0x7b9ef7(0xf4)])[_0x7b9ef7(0xf5)]({
            'id': _0x3ae2fd[_0x7b9ef7(0xf6)](ObjectID)[_0x7b9ef7(0xf7)](),
            'key': _0x3ae2fd[_0x7b9ef7(0xf8)],
            'value': 'false',
            'group': _0x3ae2fd[_0x7b9ef7(0xf9)],
            'type': _0x3ae2fd[_0x7b9ef7(0xfa)],
            'flags': 'RO',
            'created_at': _0x1a6498,
            'created_by': MIGRATION_USER,
            'updated_at': _0x1a6498,
            'updated_by': MIGRATION_USER
        });
    } else
        logging[_0x7b9ef7(0xfb)]('Skipped\x20adding\x20\x22email_verification_required\x22\x20record\x20to\x20\x22settings\x22\x20table.\x20Record\x20already\x20exists!');
}, async function down(_0x1975f2) {
    const _0xa18fe4 = _0x1d5307, _0x54f107 = {
            'hRtkQ': 'Removing\x20\x22email_verification_required\x22\x20record\x20from\x20\x22settings\x22\x20table',
            'GcXlK': function (_0x47c233, _0x58857f) {
                return _0x47c233(_0x58857f);
            },
            'skmGg': _0xa18fe4(0xfc)
        };
    logging['info'](_0x54f107[_0xa18fe4(0xfd)]), await _0x54f107[_0xa18fe4(0xfe)](_0x1975f2, _0x54f107[_0xa18fe4(0xff)])['where']('key', '=', _0xa18fe4(0xe9))[_0xa18fe4(0x100)]();
});
