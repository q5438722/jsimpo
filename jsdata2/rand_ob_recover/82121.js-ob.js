const ObjectID = require(_0x20b76a(426)), logging = require(_0x20b76a(427)), {createTransactionalMigration} = require(_0x20b76a(428)), MIGRATION_USER = 97 * -79 + 8551 + -887;
module[_0x20b76a(429)] = createTransactionalMigration(async function up(_0x3f801a) {
    const _0x307ae4 = _0x20b76a, _0x83048d = {
            'phWCw': function (_0x32d8c5, _0x462a5e) {
                return _0x32d8c5(_0x462a5e);
            },
            'dQvlA': _0x307ae4(430),
            'okfiA': _0x307ae4(431),
            'jlDFs': _0x307ae4(432),
            'WTlOI': _0x307ae4(433),
            'pEiYx': _0x307ae4(434),
            'OUjZB': function (_0x36291d) {
                return _0x36291d();
            },
            'cMOXn': 'false',
            'NjHjS': _0x307ae4(435),
            'ycBLP': _0x307ae4(436)
        }, _0x30e29a = await _0x83048d[_0x307ae4(437)](_0x3f801a, _0x83048d[_0x307ae4(438)])['where'](_0x83048d[_0x307ae4(439)], '=', _0x83048d[_0x307ae4(440)])[_0x307ae4(441)]();
    if (!_0x30e29a) {
        logging[_0x307ae4(442)](_0x83048d[_0x307ae4(443)]);
        const _0x1e9c0a = _0x3f801a['raw'](_0x83048d[_0x307ae4(444)]);
        await _0x83048d[_0x307ae4(437)](_0x3f801a, _0x83048d['dQvlA'])[_0x307ae4(445)]({
            'id': _0x83048d[_0x307ae4(446)](ObjectID)[_0x307ae4(447)](),
            'key': _0x83048d[_0x307ae4(440)],
            'value': _0x83048d[_0x307ae4(448)],
            'group': _0x83048d[_0x307ae4(449)],
            'type': _0x307ae4(450),
            'flags': 'RO',
            'created_at': _0x1e9c0a,
            'created_by': MIGRATION_USER,
            'updated_at': _0x1e9c0a,
            'updated_by': MIGRATION_USER
        });
    } else
        logging['warn'](_0x83048d[_0x307ae4(451)]);
}, async function down(_0x17cf10) {
    const _0x45b2d3 = _0x20b76a, _0x5b150d = {
            'oFdwm': _0x45b2d3(452),
            'GcVaz': function (_0x5b03c6, _0x168d4f) {
                return _0x5b03c6(_0x168d4f);
            },
            'CAMxV': _0x45b2d3(430)
        };
    logging[_0x45b2d3(442)](_0x5b150d[_0x45b2d3(453)]), await _0x5b150d['GcVaz'](_0x17cf10, _0x5b150d[_0x45b2d3(454)])['where']('key', '=', _0x45b2d3(432))[_0x45b2d3(455)]();
});