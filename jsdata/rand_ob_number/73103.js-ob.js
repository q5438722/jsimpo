const rateLimit = require('express-rate-limit'), limitHandler = (_0x1bc946, _0x9c227e) => {
        _0x9c227e['status'](-0x105c * -0x2 + -0x166d + 0x1 * -0x89e)['json']({
            'ok': ![],
            'rateLimitMessage': 'You\x20have\x20accessed\x20this\x20app\x27s\x20pages\x20too\x20quickly.\x20\x20Please\x20try\x20again\x20in\x205\x20minutes.'
        });
    }, rateLimitOptions = {
        'windowMs': (0x1 * 0x1c12 + 0xde * 0x2 + -0x1dc9) * (0x72d + 0x2cf * 0x3 + -0xf5e) * (-0x2126 * -0x1 + 0x1 * 0x2269 + -0x3fa7 * 0x1),
        'max': 0x64,
        'message': 'rate\x20limit\x20activated',
        'handler': limitHandler,
        'onLimitReached': limitHandler
    }, reqLimiter = rateLimit(rateLimitOptions);
module['exports'] = { 'reqLimiter': reqLimiter };
