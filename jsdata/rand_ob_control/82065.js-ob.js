const logging = require('@tryghost/logging');
module['exports'] = {
    'config': { 'transaction': !![] },
    async 'up'({transacting: _0x40c37d}) {
        const _0x155060 = {
                'MzeGm': 'mailgun',
                'YQDmK': function (_0x3d6dfa, _0x396e8b) {
                    return _0x3d6dfa(_0x396e8b);
                },
                'jmaSb': 'settings',
                'oKWZJ': 'bulk_email_settings',
                'GDfBr': 'mailgun_api_key',
                'bFlUA': 'mailgun_domain',
                'iJSoV': 'mailgun_base_url',
                'pTJht': 'email',
                'ABAse': 'string'
            }, _0x2cbee0 = {
                'provider': _0x155060['MzeGm'],
                'apiKey': null,
                'domain': null,
                'baseUrl': null
            }, _0x60c654 = await _0x155060['YQDmK'](_0x40c37d, _0x155060['jmaSb'])['where']({ 'key': _0x155060['oKWZJ'] })['select']()['first']();
        let _0x41cd2d;
        try {
            _0x41cd2d = JSON['parse'](_0x60c654['value']) || _0x2cbee0;
        } catch (_0x1cbcaf) {
            logging['warn']('Error\x20parsing\x20bulk_email_settings\x20JSON.\x20Using\x20defaults'), _0x41cd2d = _0x2cbee0;
        }
        const _0x148252 = [
            {
                'key': _0x155060['GDfBr'],
                'value': _0x41cd2d['apiKey']
            },
            {
                'key': _0x155060['bFlUA'],
                'value': _0x41cd2d['domain']
            },
            {
                'key': _0x155060['iJSoV'],
                'value': _0x41cd2d['baseUrl']
            }
        ];
        for (const _0x23e923 of _0x148252) {
            logging['info']('Updating\x20' + _0x23e923['key'] + '\x20setting\x27s\x20value,\x20group,\x20type\x20&\x20flags.'), await _0x155060['YQDmK'](_0x40c37d, _0x155060['jmaSb'])['where']({ 'key': _0x23e923['key'] })['update']({
                'group': _0x155060['pTJht'],
                'type': _0x155060['ABAse'],
                'flags': null,
                'value': _0x23e923['value']
            });
        }
    },
    async 'down'({transacting: _0x396ffb}) {
        const _0x254b31 = {
                'wWAwS': 'mailgun_api_key',
                'ychfH': 'mailgun_domain',
                'eKrZc': 'mailgun_base_url',
                'wTIFh': function (_0x865eb0, _0x188b6f) {
                    return _0x865eb0(_0x188b6f);
                },
                'SRlmZ': 'settings',
                'RyNnm': 'key'
            }, _0x24b745 = [
                _0x254b31['wWAwS'],
                _0x254b31['ychfH'],
                _0x254b31['eKrZc']
            ];
        logging['info']('Deleting\x20settings:\x20' + _0x24b745['join'](',\x20')), await _0x254b31['wTIFh'](_0x396ffb, _0x254b31['SRlmZ'])['whereIn'](_0x254b31['RyNnm'], _0x24b745)['del']();
    }
};
