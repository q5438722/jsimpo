const rateLimit = require(_0x36ed49(375)), limitHandler = (_0x5045d8, _0x9d97fa) => {
        const _0x3ae424 = _0x36ed49;
        _0x9d97fa['status'](429)[_0x3ae424(376)]({
            'ok': ![],
            'rateLimitMessage': _0x3ae424(377)
        });
    }, rateLimitOptions = {
        'windowMs': 5 * 60 * 1000,
        'max': 100,
        'message': _0x36ed49(378),
        'handler': limitHandler,
        'onLimitReached': limitHandler
    }, reqLimiter = rateLimit(rateLimitOptions);
module[_0x36ed49(379)] = { 'reqLimiter': reqLimiter };