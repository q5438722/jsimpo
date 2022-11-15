const logging = require('@tryghost/logging');
module['exports'] = {
    'config': { 'transaction': !![] },
    async 'up'({transacting: _0x30fc09}) {
        const _0x315df9 = {
            'IDOJr': function (_0x900189, _0x2a99f8) {
                return _0x900189 - _0x2a99f8;
            },
            'OGdRr': function (_0x3357ea, _0x492f0f) {
                return _0x3357ea !== _0x492f0f;
            },
            'hWpOT': 'mysql',
            'gpvJv': 'Skipping\x20cleanup\x20of\x20duplicate\x20subscriptions\x20-\x20database\x20is\x20not\x20MySQL',
            'KgUIN': function (_0x1a624c, _0x1b46be) {
                return _0x1a624c(_0x1b46be);
            },
            'xLLlJ': 'members_stripe_customers_subscriptions',
            'FWNJV': 'subscription_id',
            'iVyvC': 'subscription_id\x20as\x20count',
            'nHtoT': 'count',
            'KXlnH': 'No\x20duplicate\x20subscriptions\x20found',
            'oaMMj': function (_0x1f9d27, _0x2eeee0) {
                return _0x1f9d27(_0x2eeee0);
            }
        };
        if (_0x315df9['OGdRr'](_0x30fc09['client']['config']['client'], _0x315df9['hWpOT'])) {
            logging['warn'](_0x315df9['gpvJv']);
            return;
        }
        const _0x2df555 = await _0x315df9['KgUIN'](_0x30fc09, _0x315df9['xLLlJ'])['select'](_0x315df9['FWNJV'])['count'](_0x315df9['iVyvC'])['groupBy'](_0x315df9['FWNJV'])['having'](_0x315df9['nHtoT'], '>', 0x1);
        if (!_0x2df555['length']) {
            logging['info'](_0x315df9['KXlnH']);
            return;
        }
        logging['info']('Found\x20' + _0x2df555['length'] + '\x20duplicate\x20stripe\x20subscriptions');
        for (const _0x3ff4d0 of _0x2df555) {
            const _0x8f188a = await _0x315df9['oaMMj'](_0x30fc09, _0x315df9['xLLlJ'])['select']()['where'](_0x315df9['FWNJV'], _0x3ff4d0['subscription_id']), _0x4f75f1 = _0x8f188a['sort']((_0x4b0346, _0x76c14d) => {
                    return _0x315df9['IDOJr'](_0x76c14d['updated_at'], _0x4b0346['updated_at']);
                }), [_0x50f3b2, ..._0x321b26] = _0x4f75f1;
            logging['info']('Keeping\x20newest\x20subscription\x20' + _0x50f3b2['id'] + '\x20-\x20' + _0x50f3b2['subscription_id'] + ',\x20last\x20updated\x20at\x20' + _0x50f3b2['updated_at']);
            for (const _0x336ce9 of _0x321b26) {
                logging['info']('Deleting\x20duplicate\x20subscription\x20' + _0x336ce9['id'] + '\x20-\x20' + _0x336ce9['subscription_id'] + ',\x20last\x20updated\x20at\x20' + _0x336ce9['updated_at']), await _0x315df9['oaMMj'](_0x30fc09, _0x315df9['xLLlJ'])['where']({ 'id': _0x336ce9['id'] })['del']();
            }
        }
    },
    async 'down'() {
    }
};
