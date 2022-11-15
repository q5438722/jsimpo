const logging = require('@tryghost/logging');
module['exports'] = {
    'config': { 'transaction': !![] },
    async 'up'({transacting: _0x19a2b9}) {
        if (_0x19a2b9['client']['config']['client'] !== 'mysql') {
            logging['warn']('Skipping cleanup of duplicate subscriptions - database is not MySQL');
            return;
        }
        const _0x4b7a63 = await _0x19a2b9('members_stripe_customers_subscriptions')['select']('subscription_id')['count']('subscription_id as count')['groupBy']('subscription_id')['having']('count', '>', 1);
        if (!_0x4b7a63['length']) {
            logging['info']('No duplicate subscriptions found');
            return;
        }
        logging['info']('Found ' + _0x4b7a63['length'] + ' duplicate stripe subscriptions');
        for (const _0x4d41a9 of _0x4b7a63) {
            const _0x3e4659 = await _0x19a2b9('members_stripe_customers_subscriptions')['select']()['where']('subscription_id', _0x4d41a9['subscription_id']);
            const _0xefcba5 = _0x3e4659['sort']((_0x52fe4b, _0x37652e) => {
                return _0x37652e['updated_at'] - _0x52fe4b['updated_at'];
            });
            const [_0x18c3d9, ..._0x1bc1a3] = _0xefcba5;
            logging['info']('Keeping newest subscription ' + _0x18c3d9['id'] + ' - ' + _0x18c3d9['subscription_id'] + ', last updated at ' + _0x18c3d9['updated_at']);
            for (const _0x1b814f of _0x1bc1a3) {
                logging['info']('Deleting duplicate subscription ' + _0x1b814f['id'] + ' - ' + _0x1b814f['subscription_id'] + ', last updated at ' + _0x1b814f['updated_at']);
                await _0x19a2b9('members_stripe_customers_subscriptions')['where']({ 'id': _0x1b814f['id'] })['del']();
            }
        }
    },
    async 'down'() {
    }
};