const _0x1d53 = [
    '30315ViYgnx',
    '900273drmIow',
    '35801moPUJL',
    '1arpUBv',
    '217518sqqqLv',
    '1573660HFshTY',
    '1uszpYz',
    '1562257wCytFA',
    '906558JITmle',
    'exports',
    'settings',
    'where',
    'bulk_email_settings',
    'parse',
    'value',
    'warn',
    'Error\x20parsing\x20bulk_email_settings\x20JSON.\x20Using\x20defaults',
    'mailgun_api_key',
    'apiKey',
    'mailgun_domain',
    'mailgun_base_url',
    'baseUrl',
    'info',
    'Updating\x20',
    'key',
    '\x20setting\x27s\x20value,\x20group,\x20type\x20&\x20flags.',
    'update',
    'Deleting\x20settings:\x20',
    'whereIn',
    '23HzmeMe'
];
function _0xda1e(_0x1a7654, _0x8fec30) {
    return _0xda1e = function (_0x1d53d0, _0xda1ea3) {
        _0x1d53d0 = _0x1d53d0 - 0x8d;
        let _0xb55252 = _0x1d53[_0x1d53d0];
        return _0xb55252;
    }, _0xda1e(_0x1a7654, _0x8fec30);
}
const _0x19a8ce = _0xda1e;
(function (_0x5e9162, _0x319498) {
    const _0x5e470c = _0xda1e;
    while (!![]) {
        try {
            const _0x3b0ac1 = parseInt(_0x5e470c(0x8d)) * parseInt(_0x5e470c(0x8e)) + parseInt(_0x5e470c(0x8f)) + -parseInt(_0x5e470c(0x90)) * -parseInt(_0x5e470c(0x91)) + parseInt(_0x5e470c(0x92)) + parseInt(_0x5e470c(0x93)) * -parseInt(_0x5e470c(0x94)) + parseInt(_0x5e470c(0x95)) + -parseInt(_0x5e470c(0x96));
            if (_0x3b0ac1 === _0x319498)
                break;
            else
                _0x5e9162['push'](_0x5e9162['shift']());
        } catch (_0x404902) {
            _0x5e9162['push'](_0x5e9162['shift']());
        }
    }
}(_0x1d53, 0xe3c0c));
const logging = require('@tryghost/logging');
module[_0x19a8ce(0x97)] = {
    'config': { 'transaction': !![] },
    async 'up'({transacting: _0x4ff960}) {
        const _0x49f9a4 = _0x19a8ce, _0x6e026b = {
                'provider': 'mailgun',
                'apiKey': null,
                'domain': null,
                'baseUrl': null
            }, _0x753831 = await _0x4ff960(_0x49f9a4(0x98))[_0x49f9a4(0x99)]({ 'key': _0x49f9a4(0x9a) })['select']()['first']();
        let _0x2c9437;
        try {
            _0x2c9437 = JSON[_0x49f9a4(0x9b)](_0x753831[_0x49f9a4(0x9c)]) || _0x6e026b;
        } catch (_0x3b8797) {
            logging[_0x49f9a4(0x9d)](_0x49f9a4(0x9e)), _0x2c9437 = _0x6e026b;
        }
        const _0x10538e = [
            {
                'key': _0x49f9a4(0x9f),
                'value': _0x2c9437[_0x49f9a4(0xa0)]
            },
            {
                'key': _0x49f9a4(0xa1),
                'value': _0x2c9437['domain']
            },
            {
                'key': _0x49f9a4(0xa2),
                'value': _0x2c9437[_0x49f9a4(0xa3)]
            }
        ];
        for (const _0x486cd9 of _0x10538e) {
            logging[_0x49f9a4(0xa4)](_0x49f9a4(0xa5) + _0x486cd9[_0x49f9a4(0xa6)] + _0x49f9a4(0xa7)), await _0x4ff960(_0x49f9a4(0x98))[_0x49f9a4(0x99)]({ 'key': _0x486cd9[_0x49f9a4(0xa6)] })[_0x49f9a4(0xa8)]({
                'group': 'email',
                'type': 'string',
                'flags': null,
                'value': _0x486cd9['value']
            });
        }
    },
    async 'down'({transacting: _0x3f7101}) {
        const _0x4ae0cd = _0x19a8ce, _0x3359f2 = [
                _0x4ae0cd(0x9f),
                _0x4ae0cd(0xa1),
                _0x4ae0cd(0xa2)
            ];
        logging[_0x4ae0cd(0xa4)](_0x4ae0cd(0xa9) + _0x3359f2['join'](',\x20')), await _0x3f7101('settings')[_0x4ae0cd(0xaa)](_0x4ae0cd(0xa6), _0x3359f2)['del']();
    }
};
