const logging = require('@tryghost/logging');
module[_0x159767(504)] = {
    'config': { 'transaction': !![] },
    async 'up'({transacting: _0x39bff4}) {
        const _0x4689fe = _0x159767, _0x49abd3 = {
                'MptCV': function (_0x596c70, _0xb5601b) {
                    return _0x596c70 - _0xb5601b;
                },
                'vzJok': function (_0x4a088d, _0x3eaf35) {
                    return _0x4a088d !== _0x3eaf35;
                },
                'UkDhg': _0x4689fe(505),
                'pwinn': _0x4689fe(506),
                'rrWCP': function (_0x49ac3c, _0x3911f0) {
                    return _0x49ac3c(_0x3911f0);
                },
                'WBCSy': _0x4689fe(507),
                'RuLcR': _0x4689fe(508),
                'tqXJT': _0x4689fe(509),
                'LsgIy': _0x4689fe(510),
                'omwFd': 'members_stripe_customers_subscriptions'
            };
        if (_0x49abd3[_0x4689fe(511)](_0x39bff4[_0x4689fe(512)][_0x4689fe(513)][_0x4689fe(512)], _0x49abd3[_0x4689fe(514)])) {
            logging[_0x4689fe(515)](_0x49abd3['pwinn']);
            return;
        }
        const _0x294ea7 = await _0x49abd3[_0x4689fe(516)](_0x39bff4, _0x4689fe(517))[_0x4689fe(518)](_0x49abd3['WBCSy'])[_0x4689fe(509)](_0x49abd3[_0x4689fe(519)])[_0x4689fe(520)](_0x49abd3['WBCSy'])['having'](_0x49abd3[_0x4689fe(521)], '>', -7068 + 6 * -617 + 10771 * 1);
        if (!_0x294ea7[_0x4689fe(522)]) {
            logging['info'](_0x49abd3[_0x4689fe(523)]);
            return;
        }
        logging[_0x4689fe(524)](_0x4689fe(525) + _0x294ea7[_0x4689fe(522)] + _0x4689fe(526));
        for (const _0x35eebf of _0x294ea7) {
            const _0x1ab3d8 = await _0x39bff4(_0x4689fe(517))[_0x4689fe(518)]()['where'](_0x49abd3[_0x4689fe(527)], _0x35eebf['subscription_id']), _0x16454d = _0x1ab3d8[_0x4689fe(528)]((_0x35175c, _0x50732f) => {
                    const _0x1d7aaf = _0x4689fe;
                    return _0x49abd3[_0x1d7aaf(529)](_0x50732f[_0x1d7aaf(530)], _0x35175c['updated_at']);
                }), [_0x290527, ..._0x5174d6] = _0x16454d;
            logging[_0x4689fe(524)]('Keeping newest subscription ' + _0x290527['id'] + ' - ' + _0x290527[_0x4689fe(507)] + _0x4689fe(531) + _0x290527[_0x4689fe(530)]);
            for (const _0x30a624 of _0x5174d6) {
                logging[_0x4689fe(524)](_0x4689fe(532) + _0x30a624['id'] + ' - ' + _0x30a624[_0x4689fe(507)] + _0x4689fe(531) + _0x30a624['updated_at']), await _0x49abd3['rrWCP'](_0x39bff4, _0x49abd3['omwFd'])[_0x4689fe(533)]({ 'id': _0x30a624['id'] })[_0x4689fe(534)]();
            }
        }
    },
    async 'down'() {
    }
};