const common = require('../common'), assert = require(_0x45cb28(124)), http = require('http'), bufferSize = (-1539 + -2 * 1710 + 4964) * (-6295 + 2167 + 5152) * (1 * 7517 + -72 * -119 + -15061);
let measuredSize = -3354 + 1 * 6637 + -469 * 7;
const buffer = Buffer[_0x45cb28(125)](bufferSize);
for (let i = 4802 * -2 + 4726 + -2 * -2439; i < buffer[_0x45cb28(126)]; i++) {
    buffer[i] = i % (-1 * 9242 + 7596 + 1902);
}
const server = http[_0x45cb28(127)](function (_0x455e79, _0x1e7d56) {
    const _0x263534 = _0x45cb28, _0x530c64 = {
            'iUQSs': function (_0x49bcb6, _0x3e8803) {
                return _0x49bcb6 < _0x3e8803;
            },
            'wYIwK': 'end'
        };
    server[_0x263534(128)]();
    let _0x39fde2 = -1 * 9141 + 629 * -6 + 1 * 12915;
    _0x455e79['on'](_0x263534(129), _0x3dcd2b => {
        const _0x3c04fc = _0x263534;
        measuredSize += _0x3dcd2b[_0x3c04fc(126)];
        for (let _0x51ae8c = 6137 + 7228 + -55 * 243; _0x530c64[_0x3c04fc(130)](_0x51ae8c, _0x3dcd2b['length']); _0x51ae8c++) {
            assert[_0x3c04fc(131)](_0x3dcd2b[_0x51ae8c], buffer[_0x39fde2]), _0x39fde2++;
        }
    }), _0x455e79['on'](_0x530c64[_0x263534(132)], common[_0x263534(133)](() => {
        const _0x29c9f7 = _0x263534;
        assert[_0x29c9f7(131)](measuredSize, bufferSize), _0x1e7d56[_0x29c9f7(134)](-7 * 871 + 5306 * -1 + -11603 * -1), _0x1e7d56['write']('thanks'), _0x1e7d56['end']();
    }));
});
function _0x3f10(_0x4a14ba, _0x5f2bd5) {
    return _0x3f10 = function (_0x113265, _0x5234b5) {
        _0x113265 = _0x113265 - (3 * 1931 + -207 * -16 + -8991);
        let _0xe4d57a = _0x33dd[_0x113265];
        return _0xe4d57a;
    }, _0x3f10(_0x4a14ba, _0x5f2bd5);
}
server['listen'](2580 + -2966 * -2 + -8512, common['mustCall'](() => {
    const _0x207800 = _0x45cb28, _0x5efed4 = {
            'ckpvt': _0x207800(135),
            'bMhuZ': 'data',
            'IJokt': 'end',
            'BOOtO': _0x207800(136)
        }, _0x2b4cf4 = http[_0x207800(137)]({
            'port': server['address']()[_0x207800(138)],
            'method': _0x5efed4[_0x207800(139)],
            'path': '/',
            'headers': { 'content-length': buffer[_0x207800(126)] }
        }, common[_0x207800(133)](_0x12c207 => {
            const _0x1cb679 = _0x207800;
            _0x12c207[_0x1cb679(140)](_0x5efed4[_0x1cb679(141)]);
            let _0x854673 = '';
            _0x12c207['on'](_0x5efed4[_0x1cb679(142)], _0x3ee3ba => _0x854673 += _0x3ee3ba), _0x12c207['on'](_0x5efed4[_0x1cb679(143)], common[_0x1cb679(133)](() => {
                const _0x19bdda = _0x1cb679;
                assert[_0x19bdda(131)](_0x854673, 'thanks');
            }));
        }));
    _0x2b4cf4[_0x207800(144)](buffer);
}));