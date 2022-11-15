const errors = require('@tryghost/errors'), i18n = require('../../../shared/i18n'), authorize = {
        'authorizeContentApi'(_0x4feafb, _0x159f78, _0x21c75f) {
            const _0x193e04 = _0xd50e, _0x74614f = {
                    'eSOez': function (_0x5c7c5c) {
                        return _0x5c7c5c();
                    },
                    'ntuRw': function (_0x3828d8, _0x1d9545) {
                        return _0x3828d8(_0x1d9545);
                    },
                    'YZtRu': _0x193e04(370)
                }, _0xd41937 = _0x4feafb['api_key'] && _0x4feafb['api_key']['id'], _0x52e0f9 = _0x4feafb[_0x193e04(371)];
            if (_0xd41937)
                return _0x21c75f();
            if (_0x52e0f9)
                return _0x74614f[_0x193e04(372)](_0x21c75f);
            return _0x74614f[_0x193e04(373)](_0x21c75f, new errors[(_0x193e04(374))]({
                'message': i18n['t']('errors.middleware.auth.authorizationFailed'),
                'context': i18n['t'](_0x74614f['YZtRu'])
            }));
        },
        'authorizeAdminApi'(_0x57b2f2, _0x4718e7, _0x270d7f) {
            const _0x35d7d7 = _0xd50e, _0x375178 = {
                    'JSJkT': function (_0x17b9eb, _0x105fac) {
                        return _0x17b9eb || _0x105fac;
                    },
                    'gIHmI': function (_0x82fe7a, _0x5acc30) {
                        return _0x82fe7a(_0x5acc30);
                    },
                    'lxdvN': _0x35d7d7(375),
                    'ZVHMi': _0x35d7d7(376)
                }, _0x2054c1 = _0x57b2f2[_0x35d7d7(377)] && _0x57b2f2[_0x35d7d7(377)]['id'], _0x38df3f = _0x57b2f2[_0x35d7d7(378)] && _0x57b2f2[_0x35d7d7(378)]['id'];
            return _0x375178[_0x35d7d7(379)](_0x2054c1, _0x38df3f) ? _0x270d7f() : _0x375178[_0x35d7d7(380)](_0x270d7f, new errors[(_0x35d7d7(374))]({
                'message': i18n['t'](_0x375178[_0x35d7d7(381)]),
                'context': i18n['t'](_0x375178[_0x35d7d7(382)])
            }));
        }
    };
module[_0x120108(383)] = authorize;