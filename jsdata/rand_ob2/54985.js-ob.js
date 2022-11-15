'use strict';
const _0x5406 = [
    'error',
    'write',
    'listen',
    'connect',
    'http://localhost:',
    'port',
    'request',
    'mustCall',
    'data',
    'mustNotCall',
    'end',
    'close',
    '266722GQVKYX',
    '1419nntSBt',
    '11qpbVsP',
    '141wCugJK',
    '3533wkhSJH',
    '1miEJlS',
    '535849WPNrnC',
    '19567EGvxeG',
    '5zYzTJV',
    '1gbqAQG',
    '157089oQUWPf',
    '1NHhPnc',
    '1438826cJuBGI',
    '../common',
    'hasCrypto',
    'missing\x20crypto',
    'http2',
    'expectsError',
    'Error',
    'ERR_STREAM_WRITE_AFTER_END',
    'write\x20after\x20end',
    'constants',
    'createServer',
    'stream',
    'strictEqual'
];
const _0x5dae5e = _0x447f;
(function (_0x3d024a, _0xa4207f) {
    const _0x1d5a50 = _0x447f;
    while (!![]) {
        try {
            const _0x560e5d = -parseInt(_0x1d5a50(0x123)) + parseInt(_0x1d5a50(0x124)) * parseInt(_0x1d5a50(0x125)) + parseInt(_0x1d5a50(0x126)) * -parseInt(_0x1d5a50(0x127)) + -parseInt(_0x1d5a50(0x128)) * parseInt(_0x1d5a50(0x129)) + -parseInt(_0x1d5a50(0x12a)) * -parseInt(_0x1d5a50(0x12b)) + -parseInt(_0x1d5a50(0x12c)) * -parseInt(_0x1d5a50(0x12d)) + parseInt(_0x1d5a50(0x12e)) * parseInt(_0x1d5a50(0x12f));
            if (_0x560e5d === _0xa4207f)
                break;
            else
                _0x3d024a['push'](_0x3d024a['shift']());
        } catch (_0xcd1a3b) {
            _0x3d024a['push'](_0x3d024a['shift']());
        }
    }
}(_0x5406, 0x63c3b));
const common = require(_0x5dae5e(0x130));
if (!common[_0x5dae5e(0x131)])
    common['skip'](_0x5dae5e(0x132));
const assert = require('assert'), http2 = require(_0x5dae5e(0x133)), errCheck = common[_0x5dae5e(0x134)]({
        'name': _0x5dae5e(0x135),
        'code': _0x5dae5e(0x136),
        'message': _0x5dae5e(0x137)
    }, 0x1), {HTTP2_HEADER_PATH, HTTP2_HEADER_METHOD, HTTP2_HEADER_STATUS, HTTP2_METHOD_HEAD} = http2[_0x5dae5e(0x138)], server = http2[_0x5dae5e(0x139)]();
function _0x447f(_0x4e9ec5, _0x36ecc9) {
    return _0x447f = function (_0x540635, _0x447f06) {
        _0x540635 = _0x540635 - 0x123;
        let _0x13d3cd = _0x5406[_0x540635];
        return _0x13d3cd;
    }, _0x447f(_0x4e9ec5, _0x36ecc9);
}
server['on'](_0x5dae5e(0x13a), (_0x4946ef, _0x2524df) => {
    const _0xbbb5ca = _0x5dae5e;
    assert[_0xbbb5ca(0x13b)](_0x2524df[HTTP2_HEADER_METHOD], HTTP2_METHOD_HEAD), _0x4946ef['respond']({ [HTTP2_HEADER_STATUS]: 0xc8 }), _0x4946ef['on'](_0xbbb5ca(0x13c), errCheck), _0x4946ef[_0xbbb5ca(0x13d)]('data');
}), server[_0x5dae5e(0x13e)](0x0, () => {
    const _0x180c05 = _0x5dae5e, _0x90e783 = http2[_0x180c05(0x13f)](_0x180c05(0x140) + server['address']()[_0x180c05(0x141)]), _0x47e5ac = _0x90e783[_0x180c05(0x142)]({
            [HTTP2_HEADER_METHOD]: HTTP2_METHOD_HEAD,
            [HTTP2_HEADER_PATH]: '/'
        });
    _0x47e5ac['on']('response', common[_0x180c05(0x143)]((_0x26c194, _0x6e2c05) => {
        const _0x38b2fd = _0x180c05;
        assert[_0x38b2fd(0x13b)](_0x26c194[HTTP2_HEADER_STATUS], 0xc8), assert[_0x38b2fd(0x13b)](_0x6e2c05, 0x5);
    })), _0x47e5ac['on'](_0x180c05(0x144), common[_0x180c05(0x145)]()), _0x47e5ac['on'](_0x180c05(0x146), common['mustCall'](() => {
        const _0x134bec = _0x180c05;
        server[_0x134bec(0x147)](), _0x90e783[_0x134bec(0x147)]();
    }));
});
