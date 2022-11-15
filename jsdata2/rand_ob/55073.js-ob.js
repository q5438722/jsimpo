'use strict';
const _0xfccc = [
    'setTimeout',
    '15000HqzQJo',
    '2lWBeLV',
    '318546EtmRpc',
    '1xyTbxK',
    '21152xDrnkm',
    '1SUQzKz',
    '213797GxHsXN',
    '179027kCeHnW',
    '170304dNHLuq',
    '322nmYvxc',
    '2361IAUwqT',
    '../common',
    'hasCrypto',
    'skip',
    'http2',
    'close',
    'createServer',
    'mustCall',
    'stream',
    'SaEPq',
    'address',
    'port',
    'connect',
    'oCqHJ',
    'platformTimeout'
];
const _0x4da82f = _0x5ec0;
(function (_0x2ee508, _0x27f237) {
    const _0x581966 = _0x5ec0;
    while (!![]) {
        try {
            const _0x38ba61 = parseInt(_0x581966(0x12b)) * -parseInt(_0x581966(0x12c)) + parseInt(_0x581966(0x12d)) * -parseInt(_0x581966(0x12e)) + parseInt(_0x581966(0x12f)) + -parseInt(_0x581966(0x130)) * parseInt(_0x581966(0x131)) + parseInt(_0x581966(0x132)) + -parseInt(_0x581966(0x133)) + -parseInt(_0x581966(0x134)) * -parseInt(_0x581966(0x135));
            if (_0x38ba61 === _0x27f237)
                break;
            else
                _0x2ee508['push'](_0x2ee508['shift']());
        } catch (_0x1535aa) {
            _0x2ee508['push'](_0x2ee508['shift']());
        }
    }
}(_0xfccc, -0x7 * -0x3819 + -0x4ee84 + 0x6df93));
const common = require(_0x4da82f(0x136));
function _0x5ec0(_0x2b6afa, _0x7e5683) {
    return _0x5ec0 = function (_0x176517, _0x4f98f3) {
        _0x176517 = _0x176517 - (0x1392 + 0x11e * 0xd + -0x20ed);
        let _0x1b1676 = _0xfccc[_0x176517];
        return _0x1b1676;
    }, _0x5ec0(_0x2b6afa, _0x7e5683);
}
if (!common[_0x4da82f(0x137)])
    common[_0x4da82f(0x138)]('missing\x20crypto');
const http2 = require(_0x4da82f(0x139));
function testServerTimeout(_0x5f41ce) {
    const _0x2b45cf = _0x4da82f, _0x3e4379 = {
            'SaEPq': _0x2b45cf(0x13a),
            'qAwwO': 'timeout'
        }, _0x48eca2 = http2[_0x2b45cf(0x13b)]();
    _0x5f41ce(_0x48eca2);
    const _0x3cb50f = common[_0x2b45cf(0x13c)](_0x49bfc8 => {
        const _0x31a014 = _0x2b45cf;
        _0x49bfc8[_0x31a014(0x13a)]();
    });
    _0x48eca2['on'](_0x2b45cf(0x13d), common['mustNotCall']()), _0x48eca2['once'](_0x3e4379['qAwwO'], _0x3cb50f), _0x48eca2['listen'](0x8e * 0x40 + 0x26 * -0x9b + -0xc7e, common[_0x2b45cf(0x13c)](() => {
        const _0x48792e = _0x2b45cf, _0x24bb18 = { 'oCqHJ': _0x3e4379[_0x48792e(0x13e)] }, _0x18a970 = 'http://localhost:' + _0x48eca2[_0x48792e(0x13f)]()[_0x48792e(0x140)], _0x1fa20f = http2['connect'](_0x18a970);
        _0x1fa20f['on'](_0x3e4379[_0x48792e(0x13e)], common[_0x48792e(0x13c)](() => {
            const _0x2215b6 = _0x48792e, _0x25f79c = http2[_0x2215b6(0x141)](_0x18a970);
            _0x25f79c['on'](_0x24bb18[_0x2215b6(0x142)], common[_0x2215b6(0x13c)](() => _0x48eca2['close']()));
        }));
    }));
}
const timeout = common[_0x4da82f(0x143)](0x47 * 0x3e + -0x13c4 + 0x6 * 0x76);
testServerTimeout(_0x21161e => _0x21161e[_0x4da82f(0x144)](timeout)), testServerTimeout(_0xc6e33c => _0xc6e33c['timeout'] = timeout);
