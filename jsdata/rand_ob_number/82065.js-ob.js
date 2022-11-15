const logging = require('@tryghost/logging');
module['exports'] = {
    'config': { 'transaction': !![] },
    async 'up'({transacting: _0x191925}) {
        const _0x402326 = {
                'provider': 'mailgun',
                'apiKey': null,
                'domain': null,
                'baseUrl': null
            }, _0x5b3e6d = await _0x191925('settings')['where']({ 'key': 'bulk_email_settings' })['select']()['first']();
        let _0x2b7b76;
        try {
            _0x2b7b76 = JSON['parse'](_0x5b3e6d['value']) || _0x402326;
        } catch (_0x9b1997) {
            logging['warn']('Error\x20parsing\x20bulk_email_settings\x20JSON.\x20Using\x20defaults'), _0x2b7b76 = _0x402326;
        }
        const _0x7911e4 = [
            {
                'key': 'mailgun_api_key',
                'value': _0x2b7b76['apiKey']
            },
            {
                'key': 'mailgun_domain',
                'value': _0x2b7b76['domain']
            },
            {
                'key': 'mailgun_base_url',
                'value': _0x2b7b76['baseUrl']
            }
        ];
        for (const _0x52eda4 of _0x7911e4) {
            logging['info']('Updating\x20' + _0x52eda4['key'] + '\x20setting\x27s\x20value,\x20group,\x20type\x20&\x20flags.'), await _0x191925('settings')['where']({ 'key': _0x52eda4['key'] })['update']({
                'group': 'email',
                'type': 'string',
                'flags': null,
                'value': _0x52eda4['value']
            });
        }
    },
    async 'down'({transacting: _0x512f8d}) {
        const _0x2097c0 = [
            'mailgun_api_key',
            'mailgun_domain',
            'mailgun_base_url'
        ];
        logging['info']('Deleting\x20settings:\x20' + _0x2097c0['join'](',\x20')), await _0x512f8d('settings')['whereIn']('key', _0x2097c0)['del']();
    }
};
