const _0x2c30 = [
    'eSOez',
    'ntuRw',
    'NoPermissionError',
    'errors.middleware.auth.authorizationFailed',
    'errors.middleware.auth.missingAdminUserOrIntegration',
    'user',
    'api_key',
    'JSJkT',
    'gIHmI',
    'lxdvN',
    'ZVHMi',
    'exports',
    '27GUksAc',
    '1853IkmDec',
    '45023mDlbFr',
    '1rkbhkC',
    '3oLHdcC',
    '138036qZmhKG',
    '552501kEZZZr',
    '302750gdwWzX',
    '377373bpjfGM',
    '33628pDxnLo',
    'errors.middleware.auth.missingContentMemberOrIntegration',
    'member'
];
const _0x120108 = _0xd50e;
function _0xd50e(_0x123aec, _0x29d9e) {
    return _0xd50e = function (_0x10bcce, _0x1eb7c0) {
        _0x10bcce = _0x10bcce - (0x1983 + 0x617 + -0x1e32);
        let _0x1ca6fd = _0x2c30[_0x10bcce];
        return _0x1ca6fd;
    }, _0xd50e(_0x123aec, _0x29d9e);
}
(function (_0x1d3de2, _0x421a3) {
    const _0x27accb = _0xd50e;
    while (!![]) {
        try {
            const _0x38a11b = parseInt(_0x27accb(0x168)) * -parseInt(_0x27accb(0x169)) + parseInt(_0x27accb(0x16a)) * parseInt(_0x27accb(0x16b)) + -parseInt(_0x27accb(0x16c)) * -parseInt(_0x27accb(0x16d)) + parseInt(_0x27accb(0x16e)) + -parseInt(_0x27accb(0x16f)) + -parseInt(_0x27accb(0x170)) + parseInt(_0x27accb(0x171));
            if (_0x38a11b === _0x421a3)
                break;
            else
                _0x1d3de2['push'](_0x1d3de2['shift']());
        } catch (_0x430f46) {
            _0x1d3de2['push'](_0x1d3de2['shift']());
        }
    }
}(_0x2c30, -0x4 * -0x12b6c + 0x84dd9 + -0x11b * 0x765));
const errors = require('@tryghost/errors'), i18n = require('../../../shared/i18n'), authorize = {
        'authorizeContentApi'(_0x4feafb, _0x159f78, _0x21c75f) {
            const _0x193e04 = _0xd50e, _0x74614f = {
                    'eSOez': function (_0x5c7c5c) {
                        return _0x5c7c5c();
                    },
                    'ntuRw': function (_0x3828d8, _0x1d9545) {
                        return _0x3828d8(_0x1d9545);
                    },
                    'YZtRu': _0x193e04(0x172)
                }, _0xd41937 = _0x4feafb['api_key'] && _0x4feafb['api_key']['id'], _0x52e0f9 = _0x4feafb[_0x193e04(0x173)];
            if (_0xd41937)
                return _0x21c75f();
            if (_0x52e0f9)
                return _0x74614f[_0x193e04(0x174)](_0x21c75f);
            return _0x74614f[_0x193e04(0x175)](_0x21c75f, new errors[(_0x193e04(0x176))]({
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
                    'lxdvN': _0x35d7d7(0x177),
                    'ZVHMi': _0x35d7d7(0x178)
                }, _0x2054c1 = _0x57b2f2[_0x35d7d7(0x179)] && _0x57b2f2[_0x35d7d7(0x179)]['id'], _0x38df3f = _0x57b2f2[_0x35d7d7(0x17a)] && _0x57b2f2[_0x35d7d7(0x17a)]['id'];
            return _0x375178[_0x35d7d7(0x17b)](_0x2054c1, _0x38df3f) ? _0x270d7f() : _0x375178[_0x35d7d7(0x17c)](_0x270d7f, new errors[(_0x35d7d7(0x176))]({
                'message': i18n['t'](_0x375178[_0x35d7d7(0x17d)]),
                'context': i18n['t'](_0x375178[_0x35d7d7(0x17e)])
            }));
        }
    };
module[_0x120108(0x17f)] = authorize;
