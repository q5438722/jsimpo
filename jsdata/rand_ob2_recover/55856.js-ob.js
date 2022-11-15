const common = require(_0x3cf46d(145)), assert = require(_0x3cf46d(146)), http = require(_0x3cf46d(147)), bufferSize = 5 * 1024 * 1024;
function _0x3159(_0x2d054a, _0x28f901) {
    return _0x3159 = function (_0x1c2acc, _0x31590a) {
        _0x1c2acc = _0x1c2acc - 136;
        let _0xaabb11 = _0x1c2a[_0x1c2acc];
        return _0xaabb11;
    }, _0x3159(_0x2d054a, _0x28f901);
}
let measuredSize = 0;
const buffer = Buffer[_0x3cf46d(148)](bufferSize);
for (let i = 0; i < buffer[_0x3cf46d(149)]; i++) {
    buffer[i] = i % 256;
}
const server = http[_0x3cf46d(150)](function (_0x268b7b, _0x287aaf) {
    const _0x5f4d1a = _0x3cf46d;
    server[_0x5f4d1a(151)]();
    let _0x4421fe = 0;
    _0x268b7b['on']('data', _0x59aa39 => {
        const _0xe1a532 = _0x5f4d1a;
        measuredSize += _0x59aa39['length'];
        for (let _0x55070a = 0; _0x55070a < _0x59aa39[_0xe1a532(149)]; _0x55070a++) {
            assert[_0xe1a532(152)](_0x59aa39[_0x55070a], buffer[_0x4421fe]), _0x4421fe++;
        }
    }), _0x268b7b['on'](_0x5f4d1a(153), common[_0x5f4d1a(154)](() => {
        const _0x24930c = _0x5f4d1a;
        assert[_0x24930c(152)](measuredSize, bufferSize), _0x287aaf[_0x24930c(155)](200), _0x287aaf[_0x24930c(156)](_0x24930c(157)), _0x287aaf['end']();
    }));
});
server[_0x3cf46d(158)](0, common['mustCall'](() => {
    const _0x1d3d32 = _0x3cf46d, _0x478944 = http['request']({
            'port': server[_0x1d3d32(159)]()['port'],
            'method': _0x1d3d32(160),
            'path': '/',
            'headers': { 'content-length': buffer['length'] }
        }, common[_0x1d3d32(154)](_0x5369ec => {
            const _0x3bb874 = _0x1d3d32;
            _0x5369ec[_0x3bb874(161)](_0x3bb874(162));
            let _0x379b8d = '';
            _0x5369ec['on']('data', _0x13cd47 => _0x379b8d += _0x13cd47), _0x5369ec['on'](_0x3bb874(153), common['mustCall'](() => {
                assert['strictEqual'](_0x379b8d, 'thanks');
            }));
        }));
    _0x478944[_0x1d3d32(153)](buffer);
}));