const common = require(_0x5dae5e(304));
if (!common[_0x5dae5e(305)])
    common['skip'](_0x5dae5e(306));
const assert = require('assert'), http2 = require(_0x5dae5e(307)), errCheck = common[_0x5dae5e(308)]({
        'name': _0x5dae5e(309),
        'code': _0x5dae5e(310),
        'message': _0x5dae5e(311)
    }, 1), {HTTP2_HEADER_PATH, HTTP2_HEADER_METHOD, HTTP2_HEADER_STATUS, HTTP2_METHOD_HEAD} = http2[_0x5dae5e(312)], server = http2[_0x5dae5e(313)]();
function _0x447f(_0x4e9ec5, _0x36ecc9) {
    return _0x447f = function (_0x540635, _0x447f06) {
        _0x540635 = _0x540635 - 291;
        let _0x13d3cd = _0x5406[_0x540635];
        return _0x13d3cd;
    }, _0x447f(_0x4e9ec5, _0x36ecc9);
}
server['on'](_0x5dae5e(314), (_0x4946ef, _0x2524df) => {
    const _0xbbb5ca = _0x5dae5e;
    assert[_0xbbb5ca(315)](_0x2524df[HTTP2_HEADER_METHOD], HTTP2_METHOD_HEAD), _0x4946ef['respond']({ [HTTP2_HEADER_STATUS]: 200 }), _0x4946ef['on'](_0xbbb5ca(316), errCheck), _0x4946ef[_0xbbb5ca(317)]('data');
}), server[_0x5dae5e(318)](0, () => {
    const _0x180c05 = _0x5dae5e, _0x90e783 = http2[_0x180c05(319)](_0x180c05(320) + server['address']()[_0x180c05(321)]), _0x47e5ac = _0x90e783[_0x180c05(322)]({
            [HTTP2_HEADER_METHOD]: HTTP2_METHOD_HEAD,
            [HTTP2_HEADER_PATH]: '/'
        });
    _0x47e5ac['on']('response', common[_0x180c05(323)]((_0x26c194, _0x6e2c05) => {
        const _0x38b2fd = _0x180c05;
        assert[_0x38b2fd(315)](_0x26c194[HTTP2_HEADER_STATUS], 200), assert[_0x38b2fd(315)](_0x6e2c05, 5);
    })), _0x47e5ac['on'](_0x180c05(324), common[_0x180c05(325)]()), _0x47e5ac['on'](_0x180c05(326), common['mustCall'](() => {
        const _0x134bec = _0x180c05;
        server[_0x134bec(327)](), _0x90e783[_0x134bec(327)]();
    }));
});