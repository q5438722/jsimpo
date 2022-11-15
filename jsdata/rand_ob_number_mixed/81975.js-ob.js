const logging = require('@tryghost/logging');
module['exports'] = {
    'config': { 'transaction': !![] },
    async 'up'({transacting: _0x5de18d}) {
        if (_0x5de18d['client']['config']['client'] !== 'mysql') {
            logging['warn']('Skipping\x20cleanup\x20of\x20duplicate\x20subscriptions\x20-\x20database\x20is\x20not\x20MySQL');
            return;
        }
        const _0x12a705 = await _0x5de18d('members_stripe_customers_subscriptions')['select']('subscription_id')['count']('subscription_id\x20as\x20count')['groupBy']('subscription_id')['having']('count', '>', -0xebf * 0x2 + -0x1 * -0xb08 + 0x1277);
        if (!_0x12a705['length']) {
            logging['info']('No\x20duplicate\x20subscriptions\x20found');
            return;
        }
        logging['info']('Found\x20' + _0x12a705['length'] + '\x20duplicate\x20stripe\x20subscriptions');
        for (const _0x113409 of _0x12a705) {
            const _0x553539 = await _0x5de18d('members_stripe_customers_subscriptions')['select']()['where']('subscription_id', _0x113409['subscription_id']), _0x347083 = _0x553539['sort']((_0x16d2ec, _0xcc49a7) => {
                    return _0xcc49a7['updated_at'] - _0x16d2ec['updated_at'];
                }), [_0x38b00f, ..._0x58a1d3] = _0x347083;
            logging['info']('Keeping\x20newest\x20subscription\x20' + _0x38b00f['id'] + '\x20-\x20' + _0x38b00f['subscription_id'] + ',\x20last\x20updated\x20at\x20' + _0x38b00f['updated_at']);
            for (const _0x3ea941 of _0x58a1d3) {
                logging['info']('Deleting\x20duplicate\x20subscription\x20' + _0x3ea941['id'] + '\x20-\x20' + _0x3ea941['subscription_id'] + ',\x20last\x20updated\x20at\x20' + _0x3ea941['updated_at']), await _0x5de18d('members_stripe_customers_subscriptions')['where']({ 'id': _0x3ea941['id'] })['del']();
            }
        }
    },
    async 'down'() {
    }
};
