const rateLimit = require('express-rate-limit');
const limitHandler = (_0x1ec125, _0x34eba7) => {
    _0x34eba7['status'](429)['json']({
        'ok': ![],
        'rateLimitMessage': 'You have accessed this app\'s pages too quickly.  Please try again in 5 minutes.'
    });
};
const rateLimitOptions = {
    'windowMs': 5 * 60 * 1000,
    'handler': limitHandler,
    'onLimitReached': limitHandler
};
const reqLimiter = rateLimit(rateLimitOptions);
module['exports'] = { 'reqLimiter': reqLimiter };