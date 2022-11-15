const ObjectID = require(_0x1d5307(229)), logging = require(_0x1d5307(230)), {createTransactionalMigration} = require(_0x1d5307(231)), MIGRATION_USER = 265 * 25 + -17 * -403 + 1925 * -7;
module['exports'] = createTransactionalMigration(async function up(_0x3c7d54) {
    const _0x7b9ef7 = _0x1d5307, _0x3ae2fd = {
            'TtcvC': function (_0xa28f6c, _0x4ab215) {
                return _0xa28f6c(_0x4ab215);
            },
            'ROTNI': 'settings',
            'AVSHO': 'key',
            'mkQrU': _0x7b9ef7(232),
            'QyWDo': 'CURRENT_TIMESTAMP',
            'QJvLx': function (_0x592de6, _0xf06636) {
                return _0x592de6(_0xf06636);
            },
            'mJrPi': function (_0x551da9) {
                return _0x551da9();
            },
            'pJMCQ': _0x7b9ef7(233),
            'PDmOC': _0x7b9ef7(234),
            'XZgvv': _0x7b9ef7(235)
        }, _0x4052ad = await _0x3ae2fd['TtcvC'](_0x3c7d54, _0x3ae2fd['ROTNI'])[_0x7b9ef7(236)](_0x3ae2fd[_0x7b9ef7(237)], '=', _0x7b9ef7(233))[_0x7b9ef7(238)]();
    if (!_0x4052ad) {
        logging[_0x7b9ef7(239)](_0x3ae2fd[_0x7b9ef7(240)]);
        const _0x1a6498 = _0x3c7d54[_0x7b9ef7(241)](_0x3ae2fd[_0x7b9ef7(242)]);
        await _0x3ae2fd[_0x7b9ef7(243)](_0x3c7d54, _0x3ae2fd[_0x7b9ef7(244)])[_0x7b9ef7(245)]({
            'id': _0x3ae2fd[_0x7b9ef7(246)](ObjectID)[_0x7b9ef7(247)](),
            'key': _0x3ae2fd[_0x7b9ef7(248)],
            'value': 'false',
            'group': _0x3ae2fd[_0x7b9ef7(249)],
            'type': _0x3ae2fd[_0x7b9ef7(250)],
            'flags': 'RO',
            'created_at': _0x1a6498,
            'created_by': MIGRATION_USER,
            'updated_at': _0x1a6498,
            'updated_by': MIGRATION_USER
        });
    } else
        logging[_0x7b9ef7(251)]('Skipped adding "email_verification_required" record to "settings" table. Record already exists!');
}, async function down(_0x1975f2) {
    const _0xa18fe4 = _0x1d5307, _0x54f107 = {
            'hRtkQ': 'Removing "email_verification_required" record from "settings" table',
            'GcXlK': function (_0x47c233, _0x58857f) {
                return _0x47c233(_0x58857f);
            },
            'skmGg': _0xa18fe4(252)
        };
    logging['info'](_0x54f107[_0xa18fe4(253)]), await _0x54f107[_0xa18fe4(254)](_0x1975f2, _0x54f107[_0xa18fe4(255)])['where']('key', '=', _0xa18fe4(233))[_0xa18fe4(256)]();
});