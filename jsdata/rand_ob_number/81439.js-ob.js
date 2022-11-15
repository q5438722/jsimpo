const i18n = require('../../../../shared/i18n'), errors = require('@tryghost/errors'), urlUtils = require('../../../../shared/url-utils');
module['exports'] = function handlePageParam(_0x36b548, _0x1cd7bf, _0x47722a, _0x4137b5) {
    const _0x249935 = new RegExp('/page/(.*)?/');
    _0x4137b5 = parseInt(_0x4137b5, 0x1 * -0x1229 + 0x76b + 0xac8);
    if (_0x4137b5 === -0x197c + 0x5 * -0x481 + 0x3002)
        return urlUtils['redirect301'](_0x1cd7bf, _0x36b548['originalUrl']['replace'](_0x249935, '/'));
    else
        return _0x4137b5 < -0x654 + -0x4d5 * 0x5 + 0xf3f * 0x2 || isNaN(_0x4137b5) ? _0x47722a(new errors['NotFoundError']({ 'message': i18n['t']('errors.errors.pageNotFound') })) : (_0x36b548['params']['page'] = _0x4137b5, _0x47722a());
};
