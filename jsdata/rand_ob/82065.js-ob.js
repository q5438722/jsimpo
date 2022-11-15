const _0xf991 = [
    'email',
    'mailgun',
    'tnPau',
    'nPKex',
    'first',
    'parse',
    'value',
    'warn',
    'Error\x20parsing\x20bulk_email_settings\x20JSON.\x20Using\x20defaults',
    'apiKey',
    'othTq',
    'domain',
    'ICTrN',
    'baseUrl',
    'info',
    'Updating\x20',
    'key',
    '\x20setting\x27s\x20value,\x20group,\x20type\x20&\x20flags.',
    'WOkLu',
    'where',
    'update',
    'string',
    'ChvsM',
    'nqLbC',
    'Bdmvt',
    'Deleting\x20settings:\x20',
    'join',
    'vRJQu',
    'ymMEP',
    'whereIn',
    'keVWI',
    '61zPcLsM',
    '4414btpsRX',
    '295853fCEwOl',
    '272584lINtBH',
    '90285llJoJu',
    '534585sCtffd',
    '362150UqMoov',
    '600178tUpYFV',
    '1pZTYiS',
    '@tryghost/logging',
    'exports',
    'settings',
    'bulk_email_settings',
    'mailgun_api_key',
    'mailgun_domain',
    'mailgun_base_url'
];
const _0x2a4c98 = _0x2883;
(function (_0x582300, _0x3faa85) {
    const _0x497957 = _0x2883;
    while (!![]) {
        try {
            const _0x43b729 = -parseInt(_0x497957(0x12e)) * parseInt(_0x497957(0x12f)) + parseInt(_0x497957(0x130)) + -parseInt(_0x497957(0x131)) + parseInt(_0x497957(0x132)) + -parseInt(_0x497957(0x133)) + parseInt(_0x497957(0x134)) + parseInt(_0x497957(0x135)) * parseInt(_0x497957(0x136));
            if (_0x43b729 === _0x3faa85)
                break;
            else
                _0x582300['push'](_0x582300['shift']());
        } catch (_0x466480) {
            _0x582300['push'](_0x582300['shift']());
        }
    }
}(_0xf991, 0x2 * -0x15c65 + -0x1cf34 * -0x1 + 0x51041));
const logging = require(_0x2a4c98(0x137));
function _0x2883(_0x52cfe6, _0x22fae0) {
    return _0x2883 = function (_0x3b2fce, _0x129224) {
        _0x3b2fce = _0x3b2fce - (-0x2573 + 0x5c0 + 0x13 * 0x1bb);
        let _0x5d2bfc = _0xf991[_0x3b2fce];
        return _0x5d2bfc;
    }, _0x2883(_0x52cfe6, _0x22fae0);
}
module[_0x2a4c98(0x138)] = {
    'config': { 'transaction': !![] },
    async 'up'({transacting: _0x5a5dd3}) {
        const _0x1be95e = _0x2a4c98, _0x55dd2e = {
                'tnPau': _0x1be95e(0x139),
                'nPKex': _0x1be95e(0x13a),
                'mabBe': _0x1be95e(0x13b),
                'othTq': _0x1be95e(0x13c),
                'ICTrN': _0x1be95e(0x13d),
                'WOkLu': function (_0x2fd387, _0x43b5e4) {
                    return _0x2fd387(_0x43b5e4);
                },
                'unxPj': _0x1be95e(0x13e)
            }, _0xf3faed = {
                'provider': _0x1be95e(0x13f),
                'apiKey': null,
                'domain': null,
                'baseUrl': null
            }, _0x5697f2 = await _0x5a5dd3(_0x55dd2e[_0x1be95e(0x140)])['where']({ 'key': _0x55dd2e[_0x1be95e(0x141)] })['select']()[_0x1be95e(0x142)]();
        let _0x3edb6f;
        try {
            _0x3edb6f = JSON[_0x1be95e(0x143)](_0x5697f2[_0x1be95e(0x144)]) || _0xf3faed;
        } catch (_0x543272) {
            logging[_0x1be95e(0x145)](_0x1be95e(0x146)), _0x3edb6f = _0xf3faed;
        }
        const _0x670b8a = [
            {
                'key': _0x55dd2e['mabBe'],
                'value': _0x3edb6f[_0x1be95e(0x147)]
            },
            {
                'key': _0x55dd2e[_0x1be95e(0x148)],
                'value': _0x3edb6f[_0x1be95e(0x149)]
            },
            {
                'key': _0x55dd2e[_0x1be95e(0x14a)],
                'value': _0x3edb6f[_0x1be95e(0x14b)]
            }
        ];
        for (const _0x553e36 of _0x670b8a) {
            logging[_0x1be95e(0x14c)](_0x1be95e(0x14d) + _0x553e36[_0x1be95e(0x14e)] + _0x1be95e(0x14f)), await _0x55dd2e[_0x1be95e(0x150)](_0x5a5dd3, _0x55dd2e[_0x1be95e(0x140)])[_0x1be95e(0x151)]({ 'key': _0x553e36[_0x1be95e(0x14e)] })[_0x1be95e(0x152)]({
                'group': _0x55dd2e['unxPj'],
                'type': _0x1be95e(0x153),
                'flags': null,
                'value': _0x553e36['value']
            });
        }
    },
    async 'down'({transacting: _0x245f40}) {
        const _0x4ba04b = _0x2a4c98, _0x5aa55f = {
                'ChvsM': _0x4ba04b(0x13b),
                'nqLbC': _0x4ba04b(0x13c),
                'Bdmvt': _0x4ba04b(0x13d),
                'vRJQu': function (_0x47db74, _0x31f594) {
                    return _0x47db74(_0x31f594);
                },
                'ymMEP': _0x4ba04b(0x139),
                'keVWI': _0x4ba04b(0x14e)
            }, _0x3c4043 = [
                _0x5aa55f[_0x4ba04b(0x154)],
                _0x5aa55f[_0x4ba04b(0x155)],
                _0x5aa55f[_0x4ba04b(0x156)]
            ];
        logging[_0x4ba04b(0x14c)](_0x4ba04b(0x157) + _0x3c4043[_0x4ba04b(0x158)](',\x20')), await _0x5aa55f[_0x4ba04b(0x159)](_0x245f40, _0x5aa55f[_0x4ba04b(0x15a)])[_0x4ba04b(0x15b)](_0x5aa55f[_0x4ba04b(0x15c)], _0x3c4043)['del']();
    }
};
