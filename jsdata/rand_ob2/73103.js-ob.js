const _0x2d01 = [
    'rate\x20limit\x20activated',
    'exports',
    '1463086wupJgE',
    '1300121RJbHJf',
    '595663WELNMn',
    '461934OsMIKi',
    '8243MAwguo',
    '164VQiMeG',
    '1638725Nbxref',
    '55seZkiA',
    '44229hWynCx',
    'express-rate-limit',
    'json',
    'You\x20have\x20accessed\x20this\x20app\x27s\x20pages\x20too\x20quickly.\x20\x20Please\x20try\x20again\x20in\x205\x20minutes.'
];
const _0x36ed49 = _0x3c29;
function _0x3c29(_0x3f7cf9, _0xd7ad8f) {
    return _0x3c29 = function (_0x2d0134, _0x3c2986) {
        _0x2d0134 = _0x2d0134 - 0x16e;
        let _0x1450d4 = _0x2d01[_0x2d0134];
        return _0x1450d4;
    }, _0x3c29(_0x3f7cf9, _0xd7ad8f);
}
(function (_0x1c480b, _0x5cc1be) {
    const _0x59775c = _0x3c29;
    while (!![]) {
        try {
            const _0x62997f = parseInt(_0x59775c(0x16e)) + -parseInt(_0x59775c(0x16f)) + parseInt(_0x59775c(0x170)) + -parseInt(_0x59775c(0x171)) + parseInt(_0x59775c(0x172)) * parseInt(_0x59775c(0x173)) + parseInt(_0x59775c(0x174)) + parseInt(_0x59775c(0x175)) * -parseInt(_0x59775c(0x176));
            if (_0x62997f === _0x5cc1be)
                break;
            else
                _0x1c480b['push'](_0x1c480b['shift']());
        } catch (_0x300718) {
            _0x1c480b['push'](_0x1c480b['shift']());
        }
    }
}(_0x2d01, 0xd0a94));
const rateLimit = require(_0x36ed49(0x177)), limitHandler = (_0x5045d8, _0x9d97fa) => {
        const _0x3ae424 = _0x36ed49;
        _0x9d97fa['status'](0x1ad)[_0x3ae424(0x178)]({
            'ok': ![],
            'rateLimitMessage': _0x3ae424(0x179)
        });
    }, rateLimitOptions = {
        'windowMs': 0x5 * 0x3c * 0x3e8,
        'max': 0x64,
        'message': _0x36ed49(0x17a),
        'handler': limitHandler,
        'onLimitReached': limitHandler
    }, reqLimiter = rateLimit(rateLimitOptions);
module[_0x36ed49(0x17b)] = { 'reqLimiter': reqLimiter };
