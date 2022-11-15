const common = require('../common'), assert = require(_0x3c7d2a(411)), http = require('http'), bufferSize = 5 * 1024 * 1024;
let measuredSize = 0;
const buffer = Buffer[_0x3c7d2a(412)](bufferSize);
function _0x5734(_0x4d1126, _0x222907) {
    return _0x5734 = function (_0x170642, _0x5734c0) {
        _0x170642 = _0x170642 - 400;
        let _0xf65bb7 = _0x1706[_0x170642];
        return _0xf65bb7;
    }, _0x5734(_0x4d1126, _0x222907);
}
for (let i = 0; i < buffer[_0x3c7d2a(413)]; i++) {
    buffer[i] = i % 256;
}
const server = http['Server'](function (_0x5740c4, _0x473e5d) {
    const _0x2ea1c0 = _0x3c7d2a;
    server[_0x2ea1c0(414)]();
    let _0x35dfa9 = 0;
    _0x5740c4['on'](_0x2ea1c0(415), _0x1824c0 => {
        const _0x21720f = _0x2ea1c0;
        measuredSize += _0x1824c0[_0x21720f(413)];
        for (let _0x1cfb2a = 0; _0x1cfb2a < _0x1824c0['length']; _0x1cfb2a++) {
            assert[_0x21720f(416)](_0x1824c0[_0x1cfb2a], buffer[_0x35dfa9]), _0x35dfa9++;
        }
    }), _0x5740c4['on']('end', common[_0x2ea1c0(417)](() => {
        const _0x26ff29 = _0x2ea1c0;
        assert['strictEqual'](measuredSize, bufferSize), _0x473e5d[_0x26ff29(418)](200), _0x473e5d[_0x26ff29(419)](_0x26ff29(420)), _0x473e5d[_0x26ff29(421)]();
    }));
});
server[_0x3c7d2a(422)](0, common['mustCall'](() => {
    const _0x280b73 = _0x3c7d2a, _0x220d8b = http[_0x280b73(423)]({
            'port': server[_0x280b73(424)]()['port'],
            'method': _0x280b73(425),
            'path': '/',
            'headers': { 'content-length': buffer['length'] }
        }, common[_0x280b73(417)](_0x1a45dd => {
            const _0x313940 = _0x280b73;
            _0x1a45dd[_0x313940(426)](_0x313940(427));
            let _0x4d1944 = '';
            _0x1a45dd['on']('data', _0x535d6b => _0x4d1944 += _0x535d6b), _0x1a45dd['on']('end', common['mustCall'](() => {
                const _0x3b94e2 = _0x313940;
                assert[_0x3b94e2(416)](_0x4d1944, 'thanks');
            }));
        }));
    _0x220d8b[_0x280b73(421)](buffer);
}));