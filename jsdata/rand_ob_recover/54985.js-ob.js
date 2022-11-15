const common = require(_0x43d617(339));
if (!common[_0x43d617(340)])
    common[_0x43d617(341)](_0x43d617(342));
function _0x51a3(_0x5c16ef, _0x24c51a) {
    return _0x51a3 = function (_0x24cdc7, _0x2a5956) {
        _0x24cdc7 = _0x24cdc7 - (1327 * -1 + -1 * -5981 + -4326);
        let _0x480b4a = _0x5d7f[_0x24cdc7];
        return _0x480b4a;
    }, _0x51a3(_0x5c16ef, _0x24c51a);
}
const assert = require(_0x43d617(343)), http2 = require(_0x43d617(344)), errCheck = common[_0x43d617(345)]({
        'name': 'Error',
        'code': 'ERR_STREAM_WRITE_AFTER_END',
        'message': _0x43d617(346)
    }, -8011 + 2 * -433 + 8878), {HTTP2_HEADER_PATH, HTTP2_HEADER_METHOD, HTTP2_HEADER_STATUS, HTTP2_METHOD_HEAD} = http2['constants'], server = http2[_0x43d617(347)]();
server['on'](_0x43d617(348), (_0x572938, _0x2a8c98) => {
    const _0x22a011 = _0x43d617, _0x1c7175 = { 'jpsch': _0x22a011(349) };
    assert[_0x22a011(350)](_0x2a8c98[HTTP2_HEADER_METHOD], HTTP2_METHOD_HEAD), _0x572938[_0x22a011(351)]({ [HTTP2_HEADER_STATUS]: 856 * 10 + -2579 + -5781 }), _0x572938['on'](_0x1c7175[_0x22a011(352)], errCheck), _0x572938[_0x22a011(353)]('data');
}), server[_0x43d617(354)](6994 + 1 * 5247 + 1 * -12241, () => {
    const _0xc91d4d = _0x43d617, _0x28edae = {
            'ryJQN': _0xc91d4d(355),
            'yHgwY': 'data',
            'CvRDB': _0xc91d4d(356)
        }, _0x5488da = http2[_0xc91d4d(357)](_0xc91d4d(358) + server['address']()[_0xc91d4d(359)]), _0x42dbfd = _0x5488da[_0xc91d4d(360)]({
            [HTTP2_HEADER_METHOD]: HTTP2_METHOD_HEAD,
            [HTTP2_HEADER_PATH]: '/'
        });
    _0x42dbfd['on'](_0x28edae[_0xc91d4d(361)], common['mustCall']((_0x238b76, _0x36d2d5) => {
        const _0x36ed52 = _0xc91d4d;
        assert[_0x36ed52(350)](_0x238b76[HTTP2_HEADER_STATUS], 11 * 373 + -4452 + 549), assert[_0x36ed52(350)](_0x36d2d5, -2045 + -23 * -179 + 2067 * -1);
    })), _0x42dbfd['on'](_0x28edae[_0xc91d4d(362)], common[_0xc91d4d(363)]()), _0x42dbfd['on'](_0x28edae[_0xc91d4d(364)], common[_0xc91d4d(365)](() => {
        const _0x1d79d6 = _0xc91d4d;
        server[_0x1d79d6(366)](), _0x5488da[_0x1d79d6(366)]();
    }));
});