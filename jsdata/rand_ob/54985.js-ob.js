'use strict';
const _0x5d7f = [
    '../common',
    'hasCrypto',
    'skip',
    'missing\x20crypto',
    'assert',
    'http2',
    'expectsError',
    'write\x20after\x20end',
    'createServer',
    'stream',
    'error',
    'strictEqual',
    'respond',
    'jpsch',
    'write',
    'listen',
    'response',
    'end',
    'connect',
    'http://localhost:',
    'port',
    'request',
    'ryJQN',
    'yHgwY',
    'mustNotCall',
    'CvRDB',
    'mustCall',
    'close',
    '32743POIuvo',
    '2kmefDf',
    '415923kGYiSj',
    '276944RJdMNu',
    '1JfegLW',
    '1CNaJCQ',
    '289348hohDek',
    '192883fwcnSF',
    '1iTUltd',
    '644508JBITfm',
    '683850xImsCJ'
];
const _0x43d617 = _0x51a3;
(function (_0x5effbc, _0x1d31b9) {
    const _0x3a5372 = _0x51a3;
    while (!![]) {
        try {
            const _0x3976dc = -parseInt(_0x3a5372(0x148)) * parseInt(_0x3a5372(0x149)) + -parseInt(_0x3a5372(0x14a)) + -parseInt(_0x3a5372(0x14b)) * parseInt(_0x3a5372(0x14c)) + parseInt(_0x3a5372(0x14d)) * -parseInt(_0x3a5372(0x14e)) + parseInt(_0x3a5372(0x14f)) + -parseInt(_0x3a5372(0x150)) * -parseInt(_0x3a5372(0x151)) + parseInt(_0x3a5372(0x152));
            if (_0x3976dc === _0x1d31b9)
                break;
            else
                _0x5effbc['push'](_0x5effbc['shift']());
        } catch (_0x406d92) {
            _0x5effbc['push'](_0x5effbc['shift']());
        }
    }
}(_0x5d7f, -0x3 * 0x11593 + -0xdb80 + 0xb55fd));
const common = require(_0x43d617(0x153));
if (!common[_0x43d617(0x154)])
    common[_0x43d617(0x155)](_0x43d617(0x156));
function _0x51a3(_0x5c16ef, _0x24c51a) {
    return _0x51a3 = function (_0x24cdc7, _0x2a5956) {
        _0x24cdc7 = _0x24cdc7 - (0x52f * -0x1 + -0x1 * -0x175d + -0x10e6);
        let _0x480b4a = _0x5d7f[_0x24cdc7];
        return _0x480b4a;
    }, _0x51a3(_0x5c16ef, _0x24c51a);
}
const assert = require(_0x43d617(0x157)), http2 = require(_0x43d617(0x158)), errCheck = common[_0x43d617(0x159)]({
        'name': 'Error',
        'code': 'ERR_STREAM_WRITE_AFTER_END',
        'message': _0x43d617(0x15a)
    }, -0x1f4b + 0x2 * -0x1b1 + 0x22ae), {HTTP2_HEADER_PATH, HTTP2_HEADER_METHOD, HTTP2_HEADER_STATUS, HTTP2_METHOD_HEAD} = http2['constants'], server = http2[_0x43d617(0x15b)]();
server['on'](_0x43d617(0x15c), (_0x572938, _0x2a8c98) => {
    const _0x22a011 = _0x43d617, _0x1c7175 = { 'jpsch': _0x22a011(0x15d) };
    assert[_0x22a011(0x15e)](_0x2a8c98[HTTP2_HEADER_METHOD], HTTP2_METHOD_HEAD), _0x572938[_0x22a011(0x15f)]({ [HTTP2_HEADER_STATUS]: 0x358 * 0xa + -0xa13 + -0x1695 }), _0x572938['on'](_0x1c7175[_0x22a011(0x160)], errCheck), _0x572938[_0x22a011(0x161)]('data');
}), server[_0x43d617(0x162)](0x1b52 + 0x1 * 0x147f + 0x1 * -0x2fd1, () => {
    const _0xc91d4d = _0x43d617, _0x28edae = {
            'ryJQN': _0xc91d4d(0x163),
            'yHgwY': 'data',
            'CvRDB': _0xc91d4d(0x164)
        }, _0x5488da = http2[_0xc91d4d(0x165)](_0xc91d4d(0x166) + server['address']()[_0xc91d4d(0x167)]), _0x42dbfd = _0x5488da[_0xc91d4d(0x168)]({
            [HTTP2_HEADER_METHOD]: HTTP2_METHOD_HEAD,
            [HTTP2_HEADER_PATH]: '/'
        });
    _0x42dbfd['on'](_0x28edae[_0xc91d4d(0x169)], common['mustCall']((_0x238b76, _0x36d2d5) => {
        const _0x36ed52 = _0xc91d4d;
        assert[_0x36ed52(0x15e)](_0x238b76[HTTP2_HEADER_STATUS], 0xb * 0x175 + -0x1164 + 0x225), assert[_0x36ed52(0x15e)](_0x36d2d5, -0x7fd + -0x17 * -0xb3 + 0x813 * -0x1);
    })), _0x42dbfd['on'](_0x28edae[_0xc91d4d(0x16a)], common[_0xc91d4d(0x16b)]()), _0x42dbfd['on'](_0x28edae[_0xc91d4d(0x16c)], common[_0xc91d4d(0x16d)](() => {
        const _0x1d79d6 = _0xc91d4d;
        server[_0x1d79d6(0x16e)](), _0x5488da[_0x1d79d6(0x16e)]();
    }));
});
