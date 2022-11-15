const _0x3d16 = [
    'warn',
    'rrWCP',
    'members_stripe_customers_subscriptions',
    'select',
    'RuLcR',
    'groupBy',
    'tqXJT',
    'length',
    'LsgIy',
    'info',
    'Found\x20',
    '\x20duplicate\x20stripe\x20subscriptions',
    'WBCSy',
    'sort',
    'MptCV',
    'updated_at',
    ',\x20last\x20updated\x20at\x20',
    'Deleting\x20duplicate\x20subscription\x20',
    'where',
    'del',
    '224398OjQpRU',
    '141363WCFCqn',
    '301884AdNdWN',
    '749378kVTWXp',
    '1hahYLJ',
    '774617hbjOdj',
    '1vKyhCm',
    '649074MkXvGF',
    '2367534nCgUwk',
    'exports',
    'mysql',
    'Skipping\x20cleanup\x20of\x20duplicate\x20subscriptions\x20-\x20database\x20is\x20not\x20MySQL',
    'subscription_id',
    'subscription_id\x20as\x20count',
    'count',
    'No\x20duplicate\x20subscriptions\x20found',
    'vzJok',
    'client',
    'config',
    'UkDhg'
];
function _0x178e(_0x403b6a, _0x77fb6e) {
    return _0x178e = function (_0x187e08, _0x95af4f) {
        _0x187e08 = _0x187e08 - (-0x1f7 * 0xb + 0x3 * -0x119 + -0x1 * -0x1ad7);
        let _0x257b3b = _0x3d16[_0x187e08];
        return _0x257b3b;
    }, _0x178e(_0x403b6a, _0x77fb6e);
}
const _0x159767 = _0x178e;
(function (_0x5f3698, _0x38f0d4) {
    const _0x24d9b9 = _0x178e;
    while (!![]) {
        try {
            const _0x1e2a30 = -parseInt(_0x24d9b9(0x1ef)) + parseInt(_0x24d9b9(0x1f0)) + parseInt(_0x24d9b9(0x1f1)) + -parseInt(_0x24d9b9(0x1f2)) + parseInt(_0x24d9b9(0x1f3)) * -parseInt(_0x24d9b9(0x1f4)) + parseInt(_0x24d9b9(0x1f5)) * -parseInt(_0x24d9b9(0x1f6)) + parseInt(_0x24d9b9(0x1f7));
            if (_0x1e2a30 === _0x38f0d4)
                break;
            else
                _0x5f3698['push'](_0x5f3698['shift']());
        } catch (_0x4e4bb0) {
            _0x5f3698['push'](_0x5f3698['shift']());
        }
    }
}(_0x3d16, 0x1aa64 * 0x2 + 0x2321 * -0x2b + 0x8e045));
const logging = require('@tryghost/logging');
module[_0x159767(0x1f8)] = {
    'config': { 'transaction': !![] },
    async 'up'({transacting: _0x39bff4}) {
        const _0x4689fe = _0x159767, _0x49abd3 = {
                'MptCV': function (_0x596c70, _0xb5601b) {
                    return _0x596c70 - _0xb5601b;
                },
                'vzJok': function (_0x4a088d, _0x3eaf35) {
                    return _0x4a088d !== _0x3eaf35;
                },
                'UkDhg': _0x4689fe(0x1f9),
                'pwinn': _0x4689fe(0x1fa),
                'rrWCP': function (_0x49ac3c, _0x3911f0) {
                    return _0x49ac3c(_0x3911f0);
                },
                'WBCSy': _0x4689fe(0x1fb),
                'RuLcR': _0x4689fe(0x1fc),
                'tqXJT': _0x4689fe(0x1fd),
                'LsgIy': _0x4689fe(0x1fe),
                'omwFd': 'members_stripe_customers_subscriptions'
            };
        if (_0x49abd3[_0x4689fe(0x1ff)](_0x39bff4[_0x4689fe(0x200)][_0x4689fe(0x201)][_0x4689fe(0x200)], _0x49abd3[_0x4689fe(0x202)])) {
            logging[_0x4689fe(0x203)](_0x49abd3['pwinn']);
            return;
        }
        const _0x294ea7 = await _0x49abd3[_0x4689fe(0x204)](_0x39bff4, _0x4689fe(0x205))[_0x4689fe(0x206)](_0x49abd3['WBCSy'])[_0x4689fe(0x1fd)](_0x49abd3[_0x4689fe(0x207)])[_0x4689fe(0x208)](_0x49abd3['WBCSy'])['having'](_0x49abd3[_0x4689fe(0x209)], '>', -0x1b9c + 0x6 * -0x269 + 0x2a13 * 0x1);
        if (!_0x294ea7[_0x4689fe(0x20a)]) {
            logging['info'](_0x49abd3[_0x4689fe(0x20b)]);
            return;
        }
        logging[_0x4689fe(0x20c)](_0x4689fe(0x20d) + _0x294ea7[_0x4689fe(0x20a)] + _0x4689fe(0x20e));
        for (const _0x35eebf of _0x294ea7) {
            const _0x1ab3d8 = await _0x39bff4(_0x4689fe(0x205))[_0x4689fe(0x206)]()['where'](_0x49abd3[_0x4689fe(0x20f)], _0x35eebf['subscription_id']), _0x16454d = _0x1ab3d8[_0x4689fe(0x210)]((_0x35175c, _0x50732f) => {
                    const _0x1d7aaf = _0x4689fe;
                    return _0x49abd3[_0x1d7aaf(0x211)](_0x50732f[_0x1d7aaf(0x212)], _0x35175c['updated_at']);
                }), [_0x290527, ..._0x5174d6] = _0x16454d;
            logging[_0x4689fe(0x20c)]('Keeping\x20newest\x20subscription\x20' + _0x290527['id'] + '\x20-\x20' + _0x290527[_0x4689fe(0x1fb)] + _0x4689fe(0x213) + _0x290527[_0x4689fe(0x212)]);
            for (const _0x30a624 of _0x5174d6) {
                logging[_0x4689fe(0x20c)](_0x4689fe(0x214) + _0x30a624['id'] + '\x20-\x20' + _0x30a624[_0x4689fe(0x1fb)] + _0x4689fe(0x213) + _0x30a624['updated_at']), await _0x49abd3['rrWCP'](_0x39bff4, _0x49abd3['omwFd'])[_0x4689fe(0x215)]({ 'id': _0x30a624['id'] })[_0x4689fe(0x216)]();
            }
        }
    },
    async 'down'() {
    }
};
