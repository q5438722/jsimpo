const common = require(_0x4da82f(310));
function _0x5ec0(_0x2b6afa, _0x7e5683) {
    return _0x5ec0 = function (_0x176517, _0x4f98f3) {
        _0x176517 = _0x176517 - (5010 + 286 * 13 + -8429);
        let _0x1b1676 = _0xfccc[_0x176517];
        return _0x1b1676;
    }, _0x5ec0(_0x2b6afa, _0x7e5683);
}
if (!common[_0x4da82f(311)])
    common[_0x4da82f(312)]('missing crypto');
const http2 = require(_0x4da82f(313));
function testServerTimeout(_0x5f41ce) {
    const _0x2b45cf = _0x4da82f, _0x3e4379 = {
            'SaEPq': _0x2b45cf(314),
            'qAwwO': 'timeout'
        }, _0x48eca2 = http2[_0x2b45cf(315)]();
    _0x5f41ce(_0x48eca2);
    const _0x3cb50f = common[_0x2b45cf(316)](_0x49bfc8 => {
        const _0x31a014 = _0x2b45cf;
        _0x49bfc8[_0x31a014(314)]();
    });
    _0x48eca2['on'](_0x2b45cf(317), common['mustNotCall']()), _0x48eca2['once'](_0x3e4379['qAwwO'], _0x3cb50f), _0x48eca2['listen'](142 * 64 + 38 * -155 + -3198, common[_0x2b45cf(316)](() => {
        const _0x48792e = _0x2b45cf, _0x24bb18 = { 'oCqHJ': _0x3e4379[_0x48792e(318)] }, _0x18a970 = 'http://localhost:' + _0x48eca2[_0x48792e(319)]()[_0x48792e(320)], _0x1fa20f = http2['connect'](_0x18a970);
        _0x1fa20f['on'](_0x3e4379[_0x48792e(318)], common[_0x48792e(316)](() => {
            const _0x2215b6 = _0x48792e, _0x25f79c = http2[_0x2215b6(321)](_0x18a970);
            _0x25f79c['on'](_0x24bb18[_0x2215b6(322)], common[_0x2215b6(316)](() => _0x48eca2['close']()));
        }));
    }));
}
const timeout = common[_0x4da82f(323)](71 * 62 + -5060 + 6 * 118);
testServerTimeout(_0x21161e => _0x21161e[_0x4da82f(324)](timeout)), testServerTimeout(_0xc6e33c => _0xc6e33c['timeout'] = timeout);