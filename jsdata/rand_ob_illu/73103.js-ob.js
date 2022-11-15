const _0x342c = ['387LxCjBA', '1QeGNqF', '458977EJPtSi', 'express-rate-limit', 'You have accessed this app\'s pages too quickly.  Please try again in 5 minutes.', 'json', 'rate limit activated', '619759ouBUhE', '13UNIJrG', '23873TLAlpS', '45362yLjrLn', '718EmguEt', '5IhYojS', '202694WdRvQj', '1407bydnwU'];

function _0x83b0(_0x2ab2d5, _0x2887d3) {
    return _0x83b0 = function (_0x47ca9f, _0x8645ed) {
        _0x47ca9f = _0x47ca9f - 461;
        const _0x3d83f9 = _0x342c[_0x47ca9f];

        return _0x3d83f9;
    }, _0x83b0(_0x2ab2d5, _0x2887d3);
}
const _0x4b63dc = _0x83b0;

(function (_0x124395, _0x2413bb) {
    const _0x224bcc = _0x83b0;

    while (true) {
        try {
            const _0x8783b7 = parseInt(_0x224bcc(0x1cd)) + -parseInt(_0x224bcc(0x1ce)) * parseInt(_0x224bcc(0x1cf)) + parseInt(_0x224bcc(0x1d0)) + parseInt(_0x224bcc(0x1d1)) * -parseInt(_0x224bcc(0x1d2)) + parseInt(_0x224bcc(0x1d3)) + parseInt(_0x224bcc(0x1d4)) * -parseInt(_0x224bcc(0x1d5)) + parseInt(_0x224bcc(0x1d6)) * parseInt(_0x224bcc(0x1d7));

            if (_0x8783b7 === _0x2413bb) break;else _0x124395.push(_0x124395.shift());
        } catch (_0x43110b) {
            _0x124395.push(_0x124395.shift());
        }
    }
})(_0x342c, 468344);

const rateLimit = require(_0x4b63dc(0x1d8));

const limitHandler = (_0x323a97, _0x272c7f) => {
    const _0x316686 = _0x4b63dc;
    const _0x27f336 = { 'WywkL': _0x316686(0x1d9) };

    _0x272c7f.status(429)[_0x316686(0x1da)]({
        'ok': false,
        'rateLimitMessage': _0x27f336.WywkL
    });
};

const rateLimitOptions = {
    'windowMs': 300000,
    'max': 0x64,
    'message': _0x4b63dc(0x1db),
    'handler': limitHandler,
    'onLimitReached': limitHandler
};
const reqLimiter = rateLimit(rateLimitOptions);

module['exports'] = { 'reqLimiter': reqLimiter };
