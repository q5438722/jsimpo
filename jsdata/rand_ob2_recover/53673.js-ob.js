function _0x20a2(_0x1ec80c, _0x1cbaca) {
    return _0x20a2 = function (_0x83663e, _0x20a214) {
        _0x83663e = _0x83663e - 491;
        let _0x4bc008 = _0x8366[_0x83663e];
        return _0x4bc008;
    }, _0x20a2(_0x1ec80c, _0x1cbaca);
}
const common = require(_0xb10d56(501)), http = require(_0xb10d56(502)), server = http['createServer'](common[_0xb10d56(503)]());
server[_0xb10d56(504)](0, common[_0xb10d56(505)](() => {
    const _0x5946d9 = _0xb10d56, _0x35ec85 = http[_0x5946d9(506)]({
            'method': _0x5946d9(507),
            'host': _0x5946d9(508),
            'port': server['address']()[_0x5946d9(509)]
        });
    _0x35ec85['on']('abort', common[_0x5946d9(505)](() => {
        const _0x2ec38f = _0x5946d9;
        server[_0x2ec38f(510)]();
    })), _0x35ec85['on'](_0x5946d9(511), common[_0x5946d9(503)]()), _0x35ec85[_0x5946d9(512)](), _0x35ec85[_0x5946d9(513)]();
}));