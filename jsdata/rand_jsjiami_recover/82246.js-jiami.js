const errors = require('@tryghost/errors');
const i18n = require('../../../shared/i18n');
const authorize = {
    'authorizeContentApi'(_0x5da113, _0x2ee5c7, _0x4abdd4) {
        const _0x30b475 = _0x5da113['api_key'] && _0x5da113['api_key']['id'];
        const _0x167782 = _0x5da113['member'];
        if (_0x30b475) {
            return _0x4abdd4();
        }
        if (_0x167782) {
            return _0x4abdd4();
        }
        return _0x4abdd4(new errors['NoPermissionError']({
            'message': i18n['t']('errors.middleware.auth.authorizationFailed'),
            'context': i18n['t']('errors.middleware.auth.missingContentMemberOrIntegration')
        }));
    },
    'authorizeAdminApi'(_0x47dcf1, _0x480341, _0x521611) {
        const _0x48d3c2 = _0x47dcf1['user'] && _0x47dcf1['user']['id'];
        const _0x3ae278 = _0x47dcf1['api_key'] && _0x47dcf1['api_key']['id'];
        if (_0x48d3c2 || _0x3ae278) {
            if ('Ilxml' !== 'Ilxml') {
                const _0x250f9f = _0x47dcf1['user'] && _0x47dcf1['user']['id'];
                const _0x2a26cc = _0x47dcf1['api_key'] && _0x47dcf1['api_key']['id'];
                if (_0x250f9f || _0x2a26cc) {
                    return _0x521611();
                } else {
                    return _0x521611(new errors['NoPermissionError']({
                        'message': i18n['t']('errors.middleware.auth.authorizationFailed'),
                        'context': i18n['t']('errors.middleware.auth.missingAdminUserOrIntegration')
                    }));
                }
            } else {
                return _0x521611();
            }
        } else {
            if ('KZEmy' === 'KZEmy') {
                return _0x521611(new errors['NoPermissionError']({
                    'message': i18n['t']('errors.middleware.auth.authorizationFailed'),
                    'context': i18n['t']('errors.middleware.auth.missingAdminUserOrIntegration')
                }));
            } else {
                const _0x434c67 = _0x47dcf1['api_key'] && _0x47dcf1['api_key']['id'];
                const _0x435f1d = _0x47dcf1['member'];
                if (_0x434c67) {
                    return _0x521611();
                }
                if (_0x435f1d) {
                    return _0x521611();
                }
                return _0x521611(new errors['NoPermissionError']({
                    'message': i18n['t']('errors.middleware.auth.authorizationFailed'),
                    'context': i18n['t']('errors.middleware.auth.missingContentMemberOrIntegration')
                }));
            }
        }
    }
};
module['exports'] = authorize;