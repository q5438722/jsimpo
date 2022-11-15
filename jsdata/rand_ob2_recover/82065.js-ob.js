const logging = require('@tryghost/logging');
module[_0x19a8ce(151)] = {
    'config': { 'transaction': !![] },
    async 'up'({transacting: _0x4ff960}) {
        const _0x49f9a4 = _0x19a8ce, _0x6e026b = {
                'provider': 'mailgun',
                'apiKey': null,
                'domain': null,
                'baseUrl': null
            }, _0x753831 = await _0x4ff960(_0x49f9a4(152))[_0x49f9a4(153)]({ 'key': _0x49f9a4(154) })['select']()['first']();
        let _0x2c9437;
        try {
            _0x2c9437 = JSON[_0x49f9a4(155)](_0x753831[_0x49f9a4(156)]) || _0x6e026b;
        } catch (_0x3b8797) {
            logging[_0x49f9a4(157)](_0x49f9a4(158)), _0x2c9437 = _0x6e026b;
        }
        const _0x10538e = [
            {
                'key': _0x49f9a4(159),
                'value': _0x2c9437[_0x49f9a4(160)]
            },
            {
                'key': _0x49f9a4(161),
                'value': _0x2c9437['domain']
            },
            {
                'key': _0x49f9a4(162),
                'value': _0x2c9437[_0x49f9a4(163)]
            }
        ];
        for (const _0x486cd9 of _0x10538e) {
            logging[_0x49f9a4(164)](_0x49f9a4(165) + _0x486cd9[_0x49f9a4(166)] + _0x49f9a4(167)), await _0x4ff960(_0x49f9a4(152))[_0x49f9a4(153)]({ 'key': _0x486cd9[_0x49f9a4(166)] })[_0x49f9a4(168)]({
                'group': 'email',
                'type': 'string',
                'flags': null,
                'value': _0x486cd9['value']
            });
        }
    },
    async 'down'({transacting: _0x3f7101}) {
        const _0x4ae0cd = _0x19a8ce, _0x3359f2 = [
                _0x4ae0cd(159),
                _0x4ae0cd(161),
                _0x4ae0cd(162)
            ];
        logging[_0x4ae0cd(164)](_0x4ae0cd(169) + _0x3359f2['join'](', ')), await _0x3f7101('settings')[_0x4ae0cd(170)](_0x4ae0cd(166), _0x3359f2)['del']();
    }
};