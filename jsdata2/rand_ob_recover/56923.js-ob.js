const common = require(_0x81911c(492));
if (!common[_0x81911c(493)])
    common[_0x81911c(494)](_0x81911c(495));
const assert = require(_0x81911c(496)), fs = require('fs'), fixtures = require(_0x81911c(497)), tls = require(_0x81911c(498));
function filenamePEM(_0xf95b38) {
    const _0x33607a = _0x81911c, _0x2a7c70 = { 'oxCYr': _0x33607a(499) };
    return fixtures[_0x33607a(500)](_0x2a7c70[_0x33607a(501)], _0xf95b38 + _0x33607a(502));
}
function loadPEM(_0x47bee4) {
    const _0x190d3b = _0x81911c, _0x156d4e = {
            'TwddT': function (_0x2c145d, _0x50969d) {
                return _0x2c145d(_0x50969d);
            }
        };
    return fs[_0x190d3b(503)](_0x156d4e[_0x190d3b(504)](filenamePEM, _0x47bee4));
}
const caCert = loadPEM(_0x81911c(505)), opts = {
        'host': _0x81911c(506),
        'port': 443,
        'rejectUnauthorized': !![]
    };
function _0x10b2(_0x5a2275, _0xc2ffa4) {
    return _0x10b2 = function (_0x3f0ab5, _0x3576f1) {
        _0x3f0ab5 = _0x3f0ab5 - (-3891 + -3408 + 7779);
        let _0x1b3029 = _0x1f67[_0x3f0ab5];
        return _0x1b3029;
    }, _0x10b2(_0x5a2275, _0xc2ffa4);
}
tls['connect'](opts, common[_0x81911c(507)](end)), opts['ca'] = caCert, tls[_0x81911c(508)](opts, fail)['on'](_0x81911c(509), common[_0x81911c(507)](_0x2c3aa1 => {
    const _0x172e1d = _0x81911c, _0x4850e9 = { 'CTMtF': _0x172e1d(510) };
    assert['strictEqual'](_0x2c3aa1['message'], _0x4850e9[_0x172e1d(511)]);
}));
function fail() {
    const _0x35ea02 = _0x81911c, _0x75d0f = { 'kLbzk': _0x35ea02(512) };
    assert['fail'](_0x75d0f[_0x35ea02(513)]);
}
opts[_0x81911c(514)] = tls['createSecureContext'](), tls[_0x81911c(508)](opts, common[_0x81911c(507)](end)), opts[_0x81911c(514)][_0x81911c(515)][_0x81911c(516)](caCert), tls[_0x81911c(508)](opts, common[_0x81911c(507)](end));
function end() {
    const _0x16d5d1 = _0x81911c;
    this[_0x16d5d1(517)]();
}