const common = require(_0x476f85(191));
if (!common[_0x476f85(192)])
    common['skip'](_0x476f85(193));
const assert = require(_0x476f85(194)), fs = require('fs'), fixtures = require('../common/fixtures'), tls = require('tls');
function filenamePEM(_0x2f10dd) {
    const _0x115826 = _0x476f85;
    return fixtures[_0x115826(195)](_0x115826(196), _0x2f10dd + _0x115826(197));
}
function loadPEM(_0x52cde9) {
    const _0xb4adb8 = _0x476f85;
    return fs[_0xb4adb8(198)](filenamePEM(_0x52cde9));
}
const caCert = loadPEM(_0x476f85(199)), opts = {
        'host': _0x476f85(200),
        'port': 443,
        'rejectUnauthorized': !![]
    };
tls['connect'](opts, common[_0x476f85(201)](end)), opts['ca'] = caCert, tls['connect'](opts, fail)['on']('error', common['mustCall'](_0x1fc257 => {
    const _0x565ecb = _0x476f85;
    assert['strictEqual'](_0x1fc257[_0x565ecb(202)], _0x565ecb(203));
}));
function _0x6c84(_0x20ab86, _0x162e67) {
    return _0x6c84 = function (_0x564778, _0x6c84f1) {
        _0x564778 = _0x564778 - 180;
        let _0x4894ee = _0x5647[_0x564778];
        return _0x4894ee;
    }, _0x6c84(_0x20ab86, _0x162e67);
}
function fail() {
    const _0x21c62b = _0x476f85;
    assert[_0x21c62b(204)]('should fail to connect');
}
opts[_0x476f85(205)] = tls[_0x476f85(206)](), tls[_0x476f85(207)](opts, common[_0x476f85(201)](end)), opts[_0x476f85(205)][_0x476f85(208)][_0x476f85(209)](caCert), tls['connect'](opts, common[_0x476f85(201)](end));
function end() {
    this['end']();
}