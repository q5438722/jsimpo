const _0x342c = [
    '387LxCjBA',
    '1QeGNqF',
    '458977EJPtSi',
    'express-rate-limit',
    'You\x20have\x20accessed\x20this\x20app\x27s\x20pages\x20too\x20quickly.\x20\x20Please\x20try\x20again\x20in\x205\x20minutes.',
    'json',
    'rate\x20limit\x20activated',
    '619759ouBUhE',
    '13UNIJrG',
    '23873TLAlpS',
    '45362yLjrLn',
    '718EmguEt',
    '5IhYojS',
    '202694WdRvQj',
    '1407bydnwU'
];
function _0x83b0(_0x2ab2d5, _0x2887d3) {
    return _0x83b0 = function (_0x47ca9f, _0x8645ed) {
        _0x47ca9f = _0x47ca9f - (-0xb27 * 0x2 + -0x5e7 * -0x6 + 0x5 * -0x243);
        let _0x3d83f9 = _0x342c[_0x47ca9f];
        return _0x3d83f9;
    }, _0x83b0(_0x2ab2d5, _0x2887d3);
}
const _0x4b63dc = _0x83b0;
(function (_0x124395, _0x2413bb) {
    const _0x224bcc = _0x83b0;
    while (!![]) {
        try {
            const _0x8783b7 = parseInt(_0x224bcc(0x1cd)) + -parseInt(_0x224bcc(0x1ce)) * parseInt(_0x224bcc(0x1cf)) + parseInt(_0x224bcc(0x1d0)) + parseInt(_0x224bcc(0x1d1)) * -parseInt(_0x224bcc(0x1d2)) + parseInt(_0x224bcc(0x1d3)) + parseInt(_0x224bcc(0x1d4)) * -parseInt(_0x224bcc(0x1d5)) + parseInt(_0x224bcc(0x1d6)) * parseInt(_0x224bcc(0x1d7));
            if (_0x8783b7 === _0x2413bb)
                break;
            else
                _0x124395['push'](_0x124395['shift']());
        } catch (_0x43110b) {
            _0x124395['push'](_0x124395['shift']());
        }
    }
}(_0x342c, -0x18abb + 0x4905c + 0x41fd7));
const rateLimit = require(_0x4b63dc(0x1d8)), limitHandler = (_0x323a97, _0x272c7f) => {
        const _0x316686 = _0x4b63dc, _0x27f336 = { 'WywkL': _0x316686(0x1d9) };
        _0x272c7f['status'](-0x5d5 * 0x1 + -0x33 * 0xad + 0x29f9)[_0x316686(0x1da)]({
            'ok': ![],
            'rateLimitMessage': _0x27f336['WywkL']
        });
    }, rateLimitOptions = {
        'windowMs': (0x2525 + -0x43 * -0x93 + -0x4b99) * (-0x337 * -0x1 + -0x313 + 0xc * 0x2) * (0x408 + 0x267d + 0x5 * -0x7b9),
        'max': 0x64,
        'message': _0x4b63dc(0x1db),
        'handler': limitHandler,
        'onLimitReached': limitHandler
    }, reqLimiter = rateLimit(rateLimitOptions);
module['exports'] = { 'reqLimiter': reqLimiter };
