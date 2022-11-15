const _0x35f6 = ['jlDFs', 'first', 'info', 'WTlOI', 'pEiYx', 'insert', 'OUjZB', 'toHexString', 'cMOXn', 'NjHjS', 'boolean', 'ycBLP', 'Removing "email_verification_required" record from "settings" table', 'oFdwm', 'CAMxV', 'del', '131XCHLgi', '6878jvMsSf', '5UvwKdm', '189305qYqzSo', '102ANwdof', '9043ObUXpN', '124428Kpvvne', '6Ichrik', '896585dzDIOY', '882685wLdnwa', '1518080DtPSFx', 'bson-objectid', '@tryghost/logging', '../../utils.js', 'exports', 'settings', 'key', 'email_verification_required', 'Adding "email_verification_required" record to "settings" table', 'CURRENT_TIMESTAMP', 'email', 'Skipped adding "email_verification_required" record to "settings" table. Record already exists!', 'phWCw', 'dQvlA', 'okfiA'];
const _0x20b76a = _0x365e;

function _0x365e(_0xb4ceb1, _0x4cbca1) {
    return _0x365e = function (_0x3856a1, _0xf54233) {
        _0x3856a1 = _0x3856a1 - 415;
        const _0x4c16a6 = _0x35f6[_0x3856a1];

        return _0x4c16a6;
    }, _0x365e(_0xb4ceb1, _0x4cbca1);
}
(function (_0x361d90, _0x125df7) {
    const _0x1fe107 = _0x365e;

    while (true) {
        try {
            const _0x21633b = -parseInt(_0x1fe107(0x19f)) * parseInt(_0x1fe107(0x1a0)) + parseInt(_0x1fe107(0x1a1)) * parseInt(_0x1fe107(0x1a2)) + -parseInt(_0x1fe107(0x1a3)) * -parseInt(_0x1fe107(0x1a4)) + parseInt(_0x1fe107(0x1a5)) * -parseInt(_0x1fe107(0x1a6)) + parseInt(_0x1fe107(0x1a7)) + parseInt(_0x1fe107(0x1a8)) + -parseInt(_0x1fe107(0x1a9));

            if (_0x21633b === _0x125df7) break;else _0x361d90.push(_0x361d90.shift());
        } catch (_0x32c7d4) {
            _0x361d90.push(_0x361d90.shift());
        }
    }
})(_0x35f6, 482515);

const ObjectID = require(_0x20b76a(0x1aa));

const logging = require(_0x20b76a(0x1ab));

var { createTransactionalMigration } = require(_0x20b76a(0x1ac));

const MIGRATION_USER = 1;

module[_0x20b76a(0x1ad)] = createTransactionalMigration(async function up(_0x3f801a) {
    const _0x307ae4 = _0x20b76a;
    const _0x83048d = {
        'phWCw': function (_0x32d8c5, _0x462a5e) {
            return _0x32d8c5(_0x462a5e);
        },
        'dQvlA': _0x307ae4(0x1ae),
        'okfiA': _0x307ae4(0x1af),
        'jlDFs': _0x307ae4(0x1b0),
        'WTlOI': _0x307ae4(0x1b1),
        'pEiYx': _0x307ae4(0x1b2),
        'OUjZB': function (_0x36291d) {
            return _0x36291d();
        },
        'cMOXn': 'false',
        'NjHjS': _0x307ae4(0x1b3),
        'ycBLP': _0x307ae4(0x1b4)
    };

    const _0x30e29a = await _0x83048d[_0x307ae4(0x1b5)](_0x3f801a, _0x83048d[_0x307ae4(0x1b6)]).where(_0x83048d[_0x307ae4(0x1b7)], '=', _0x83048d[_0x307ae4(0x1b8)])[_0x307ae4(0x1b9)]();

    if (!_0x30e29a) {
        logging[_0x307ae4(0x1ba)](_0x83048d[_0x307ae4(0x1bb)]);

        const _0x1e9c0a = _0x3f801a.raw(_0x83048d[_0x307ae4(0x1bc)]);

        await _0x83048d[_0x307ae4(0x1b5)](_0x3f801a, _0x83048d.dQvlA)[_0x307ae4(0x1bd)]({
            'id': _0x83048d[_0x307ae4(0x1be)](ObjectID)[_0x307ae4(0x1bf)](),
            'key': _0x83048d[_0x307ae4(0x1b8)],
            'value': _0x83048d[_0x307ae4(0x1c0)],
            'group': _0x83048d[_0x307ae4(0x1c1)],
            'type': _0x307ae4(0x1c2),
            'flags': 'RO',
            'created_at': _0x1e9c0a,
            'created_by': MIGRATION_USER,
            'updated_at': _0x1e9c0a,
            'updated_by': MIGRATION_USER
        });
    } else logging.warn(_0x83048d[_0x307ae4(0x1c3)]);
}, async function down(_0x17cf10) {
    const _0x45b2d3 = _0x20b76a;
    const _0x5b150d = {
        'oFdwm': _0x45b2d3(0x1c4),
        'GcVaz': function (_0x5b03c6, _0x168d4f) {
            return _0x5b03c6(_0x168d4f);
        },
        'CAMxV': _0x45b2d3(0x1ae)
    };

    logging[_0x45b2d3(0x1ba)](_0x5b150d[_0x45b2d3(0x1c5)]), await _0x5b150d.GcVaz(_0x17cf10, _0x5b150d[_0x45b2d3(0x1c6)]).where('key', '=', _0x45b2d3(0x1b0))[_0x45b2d3(0x1c7)]();
});
