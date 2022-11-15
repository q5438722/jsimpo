const logging = require('@tryghost/logging');
module['exports'] = {
    'config': { 'transaction': !![] },
    async 'up'({transacting: _0x12ee8f}) {
        const _0x1be4e2 = { 'provider': 'mailgun' };
        const _0x57bc0c = await _0x12ee8f('settings')['where']({ 'key': 'bulk_email_settings' })['select']()['first']();
        let _0xaa9e97;
        try {
            _0xaa9e97 = JSON['parse'](_0x57bc0c['value']) || _0x1be4e2;
        } catch (_0x2c8c4d) {
            logging['warn']('Error parsing bulk_email_settings JSON. Using defaults');
            _0xaa9e97 = _0x1be4e2;
        }
        const _0x77bec8 = [
            {
                'key': 'mailgun_api_key',
                'value': _0xaa9e97['apiKey']
            },
            {
                'key': 'mailgun_domain',
                'value': _0xaa9e97['domain']
            },
            {
                'key': 'mailgun_base_url',
                'value': _0xaa9e97['baseUrl']
            }
        ];
        for (const _0x5065a0 of _0x77bec8) {
            logging['info']('Updating ' + _0x5065a0['key'] + ' setting\'s value, group, type & flags.');
            await _0x12ee8f('settings')['where']({ 'key': _0x5065a0['key'] })['update']({
                'group': 'email',
                'type': 'string',
                'flags': null,
                'value': _0x5065a0['value']
            });
        }
    },
    async 'down'({transacting: _0x1e6654}) {
        const _0x2b1383 = [
            'mailgun_api_key',
            'mailgun_domain',
            'mailgun_base_url'
        ];
        logging['info']('Deleting settings: ' + _0x2b1383['join'](', '));
        await _0x1e6654('settings')['whereIn']('key', _0x2b1383)['del']();
    }
};