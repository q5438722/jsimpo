const common = require(_0x1ed4c9(423)), fixtures = require('../common/fixtures');
function _0x5e50(_0x173b8e, _0x428592) {
    return _0x5e50 = function (_0x172137, _0x5e50ab) {
        _0x172137 = _0x172137 - 412;
        let _0x1b5502 = _0x1721[_0x172137];
        return _0x1b5502;
    }, _0x5e50(_0x173b8e, _0x428592);
}
if (!common[_0x1ed4c9(424)])
    common[_0x1ed4c9(425)]('missing crypto');
const h2 = require(_0x1ed4c9(426)), tls = require(_0x1ed4c9(427)), server = h2[_0x1ed4c9(428)]({
        'key': fixtures[_0x1ed4c9(429)](_0x1ed4c9(430)),
        'cert': fixtures[_0x1ed4c9(429)](_0x1ed4c9(431)),
        'unknownProtocolTimeout': 500,
        'allowHalfOpen': !![]
    });
server['on']('connection', _0x1d8d13 => {
    const _0x3a5d7c = _0x1ed4c9;
    _0x1d8d13['on'](_0x3a5d7c(432), common[_0x3a5d7c(433)](() => {
        const _0x2f242c = _0x3a5d7c;
        server[_0x2f242c(432)]();
    }));
}), server['listen'](0, function () {
    const _0x4338cb = _0x1ed4c9;
    tls['connect']({
        'port': server[_0x4338cb(434)]()[_0x4338cb(435)],
        'rejectUnauthorized': ![],
        'ALPNProtocols': [_0x4338cb(436)]
    });
});