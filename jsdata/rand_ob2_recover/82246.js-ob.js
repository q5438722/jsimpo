function _0x4a0a(_0x3fa5ca, _0x26e5d5) {
    return _0x4a0a = function (_0x5b3458, _0x4a0a8a) {
        _0x5b3458 = _0x5b3458 - 148;
        let _0x17a315 = _0x5b34[_0x5b3458];
        return _0x17a315;
    }, _0x4a0a(_0x3fa5ca, _0x26e5d5);
}
const errors = require('@tryghost/errors'), i18n = require(_0x130d77(157)), authorize = {
        'authorizeContentApi'(_0x196094, _0x34738a, _0x90d010) {
            const _0x593e1e = _0x130d77, _0x3f8cff = _0x196094['api_key'] && _0x196094[_0x593e1e(158)]['id'], _0x4e883e = _0x196094[_0x593e1e(159)];
            if (_0x3f8cff)
                return _0x90d010();
            if (_0x4e883e)
                return _0x90d010();
            return _0x90d010(new errors['NoPermissionError']({
                'message': i18n['t'](_0x593e1e(160)),
                'context': i18n['t'](_0x593e1e(161))
            }));
        },
        'authorizeAdminApi'(_0x3952b1, _0x19b006, _0x2571a0) {
            const _0x477fc1 = _0x130d77, _0x3eefa5 = _0x3952b1[_0x477fc1(162)] && _0x3952b1[_0x477fc1(162)]['id'], _0x1a6a86 = _0x3952b1[_0x477fc1(158)] && _0x3952b1[_0x477fc1(158)]['id'];
            return _0x3eefa5 || _0x1a6a86 ? _0x2571a0() : _0x2571a0(new errors['NoPermissionError']({
                'message': i18n['t'](_0x477fc1(160)),
                'context': i18n['t']('errors.middleware.auth.missingAdminUserOrIntegration')
            }));
        }
    };
module[_0x130d77(163)] = authorize;