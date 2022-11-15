const _0xb0b9 = [
    'having',
    'length',
    'info',
    'No\x20duplicate\x20subscriptions\x20found',
    '\x20duplicate\x20stripe\x20subscriptions',
    'select',
    'sort',
    'updated_at',
    'Keeping\x20newest\x20subscription\x20',
    '\x20-\x20',
    ',\x20last\x20updated\x20at\x20',
    'Deleting\x20duplicate\x20subscription\x20',
    'where',
    '1581374DWxtTU',
    '3sUspip',
    '397321orRVKo',
    '1134136bbPPSQ',
    '227bNJsnM',
    '4239wVPogo',
    '105186PCHDsi',
    '296697iYqDmY',
    '3jeuEpP',
    '4775fGOElg',
    '935AnZGqy',
    '@tryghost/logging',
    'exports',
    'client',
    'warn',
    'Skipping\x20cleanup\x20of\x20duplicate\x20subscriptions\x20-\x20database\x20is\x20not\x20MySQL',
    'members_stripe_customers_subscriptions',
    'subscription_id',
    'count',
    'subscription_id\x20as\x20count',
    'groupBy'
];
const _0x2b3b7e = _0x6ff2;
(function (_0x12b618, _0x47ecba) {
    const _0x1cf261 = _0x6ff2;
    while (!![]) {
        try {
            const _0xf004c8 = -parseInt(_0x1cf261(0x15f)) + -parseInt(_0x1cf261(0x160)) * parseInt(_0x1cf261(0x161)) + parseInt(_0x1cf261(0x162)) + parseInt(_0x1cf261(0x163)) * -parseInt(_0x1cf261(0x164)) + -parseInt(_0x1cf261(0x165)) + -parseInt(_0x1cf261(0x166)) * parseInt(_0x1cf261(0x167)) + parseInt(_0x1cf261(0x168)) * parseInt(_0x1cf261(0x169));
            if (_0xf004c8 === _0x47ecba)
                break;
            else
                _0x12b618['push'](_0x12b618['shift']());
        } catch (_0x28d725) {
            _0x12b618['push'](_0x12b618['shift']());
        }
    }
}(_0xb0b9, 0xd3e36));
const logging = require(_0x2b3b7e(0x16a));
function _0x6ff2(_0x480030, _0x256c64) {
    return _0x6ff2 = function (_0xb0b98, _0x6ff229) {
        _0xb0b98 = _0xb0b98 - 0x15f;
        let _0x1773b2 = _0xb0b9[_0xb0b98];
        return _0x1773b2;
    }, _0x6ff2(_0x480030, _0x256c64);
}
module[_0x2b3b7e(0x16b)] = {
    'config': { 'transaction': !![] },
    async 'up'({transacting: _0x100535}) {
        const _0x5b496f = _0x2b3b7e;
        if (_0x100535['client']['config'][_0x5b496f(0x16c)] !== 'mysql') {
            logging[_0x5b496f(0x16d)](_0x5b496f(0x16e));
            return;
        }
        const _0x1b9cc7 = await _0x100535(_0x5b496f(0x16f))['select'](_0x5b496f(0x170))[_0x5b496f(0x171)](_0x5b496f(0x172))[_0x5b496f(0x173)](_0x5b496f(0x170))[_0x5b496f(0x174)](_0x5b496f(0x171), '>', 0x1);
        if (!_0x1b9cc7[_0x5b496f(0x175)]) {
            logging[_0x5b496f(0x176)](_0x5b496f(0x177));
            return;
        }
        logging['info']('Found\x20' + _0x1b9cc7['length'] + _0x5b496f(0x178));
        for (const _0x461b79 of _0x1b9cc7) {
            const _0x2b8fd7 = await _0x100535(_0x5b496f(0x16f))[_0x5b496f(0x179)]()['where'](_0x5b496f(0x170), _0x461b79[_0x5b496f(0x170)]), _0x66c5cb = _0x2b8fd7[_0x5b496f(0x17a)]((_0x550690, _0x245948) => {
                    const _0x3e2982 = _0x5b496f;
                    return _0x245948[_0x3e2982(0x17b)] - _0x550690[_0x3e2982(0x17b)];
                }), [_0x4ed7f, ..._0x4642c4] = _0x66c5cb;
            logging[_0x5b496f(0x176)](_0x5b496f(0x17c) + _0x4ed7f['id'] + _0x5b496f(0x17d) + _0x4ed7f[_0x5b496f(0x170)] + _0x5b496f(0x17e) + _0x4ed7f['updated_at']);
            for (const _0x458e5f of _0x4642c4) {
                logging[_0x5b496f(0x176)](_0x5b496f(0x17f) + _0x458e5f['id'] + _0x5b496f(0x17d) + _0x458e5f[_0x5b496f(0x170)] + _0x5b496f(0x17e) + _0x458e5f['updated_at']), await _0x100535(_0x5b496f(0x16f))[_0x5b496f(0x180)]({ 'id': _0x458e5f['id'] })['del']();
            }
        }
    },
    async 'down'() {
    }
};
