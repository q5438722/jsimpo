const rateLimit = require(_0x4b63dc(472)), limitHandler = (_0x323a97, _0x272c7f) => {
        const _0x316686 = _0x4b63dc, _0x27f336 = { 'WywkL': _0x316686(473) };
        _0x272c7f['status'](-1493 * 1 + -51 * 173 + 10745)[_0x316686(474)]({
            'ok': ![],
            'rateLimitMessage': _0x27f336['WywkL']
        });
    }, rateLimitOptions = {
        'windowMs': (9509 + -67 * -147 + -19353) * (-823 * -1 + -787 + 12 * 2) * (1032 + 9853 + 5 * -1977),
        'max': 100,
        'message': _0x4b63dc(475),
        'handler': limitHandler,
        'onLimitReached': limitHandler
    }, reqLimiter = rateLimit(rateLimitOptions);
module['exports'] = { 'reqLimiter': reqLimiter };