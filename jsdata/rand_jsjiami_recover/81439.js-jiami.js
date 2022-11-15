const i18n = require('../../../../shared/i18n');
const errors = require('@tryghost/errors');
const urlUtils = require('../../../../shared/url-utils');
module['exports'] = function handlePageParam(_0xf2ea3d, _0x5c052c, _0xb0d659, _0x4faa1a) {
    const _0x450395 = new RegExp('/page/(.*)?/');
    _0x4faa1a = parseInt(_0x4faa1a, 10);
    if (_0x4faa1a === 1) {
        return urlUtils['redirect301'](_0x5c052c, _0xf2ea3d['originalUrl']['replace'](_0x450395, '/'));
    } else if (_0x4faa1a < 1 || isNaN(_0x4faa1a)) {
        return _0xb0d659(new errors['NotFoundError']({ 'message': i18n['t']('errors.errors.pageNotFound') }));
    } else {
        _0xf2ea3d['params']['page'] = _0x4faa1a;
        return _0xb0d659();
    }
};