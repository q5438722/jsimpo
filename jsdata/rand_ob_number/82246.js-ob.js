const errors = require('@tryghost/errors'), i18n = require('../../../shared/i18n'), authorize = {
        'authorizeContentApi'(_0x4d21e3, _0x2e6a5e, _0x22591a) {
            const _0x24dfb9 = _0x4d21e3['api_key'] && _0x4d21e3['api_key']['id'], _0x3a199f = _0x4d21e3['member'];
            if (_0x24dfb9)
                return _0x22591a();
            if (_0x3a199f)
                return _0x22591a();
            return _0x22591a(new errors['NoPermissionError']({
                'message': i18n['t']('errors.middleware.auth.authorizationFailed'),
                'context': i18n['t']('errors.middleware.auth.missingContentMemberOrIntegration')
            }));
        },
        'authorizeAdminApi'(_0x46c019, _0xedbd25, _0xcbf44e) {
            const _0x13101f = _0x46c019['user'] && _0x46c019['user']['id'], _0x206e64 = _0x46c019['api_key'] && _0x46c019['api_key']['id'];
            return _0x13101f || _0x206e64 ? _0xcbf44e() : _0xcbf44e(new errors['NoPermissionError']({
                'message': i18n['t']('errors.middleware.auth.authorizationFailed'),
                'context': i18n['t']('errors.middleware.auth.missingAdminUserOrIntegration')
            }));
        }
    };
module['exports'] = authorize;
