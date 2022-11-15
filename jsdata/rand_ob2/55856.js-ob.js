'use strict';
const _0x1c2a = [
    'end',
    'mustCall',
    'writeHead',
    'write',
    'thanks',
    'listen',
    'address',
    'POST',
    'setEncoding',
    'utf8',
    '1340563KLqyIU',
    '573646GNXdsB',
    '2TPOUII',
    '14543FOcaTI',
    '10EtmSMZ',
    '781955LZpCoB',
    '262198PGXVDn',
    '937669iUqmSb',
    '1144821HPKdpR',
    '../common',
    'assert',
    'http',
    'allocUnsafe',
    'length',
    'Server',
    'close',
    'strictEqual'
];
const _0x3cf46d = _0x3159;
(function (_0x2a3a2d, _0x1876e1) {
    const _0x1d8579 = _0x3159;
    while (!![]) {
        try {
            const _0xc2cbcc = -parseInt(_0x1d8579(0x88)) + -parseInt(_0x1d8579(0x89)) * -parseInt(_0x1d8579(0x8a)) + -parseInt(_0x1d8579(0x8b)) * -parseInt(_0x1d8579(0x8c)) + parseInt(_0x1d8579(0x8d)) + -parseInt(_0x1d8579(0x8e)) + -parseInt(_0x1d8579(0x8f)) + parseInt(_0x1d8579(0x90));
            if (_0xc2cbcc === _0x1876e1)
                break;
            else
                _0x2a3a2d['push'](_0x2a3a2d['shift']());
        } catch (_0x3369d6) {
            _0x2a3a2d['push'](_0x2a3a2d['shift']());
        }
    }
}(_0x1c2a, 0xa5c9c));
const common = require(_0x3cf46d(0x91)), assert = require(_0x3cf46d(0x92)), http = require(_0x3cf46d(0x93)), bufferSize = 0x5 * 0x400 * 0x400;
function _0x3159(_0x2d054a, _0x28f901) {
    return _0x3159 = function (_0x1c2acc, _0x31590a) {
        _0x1c2acc = _0x1c2acc - 0x88;
        let _0xaabb11 = _0x1c2a[_0x1c2acc];
        return _0xaabb11;
    }, _0x3159(_0x2d054a, _0x28f901);
}
let measuredSize = 0x0;
const buffer = Buffer[_0x3cf46d(0x94)](bufferSize);
for (let i = 0x0; i < buffer[_0x3cf46d(0x95)]; i++) {
    buffer[i] = i % 0x100;
}
const server = http[_0x3cf46d(0x96)](function (_0x268b7b, _0x287aaf) {
    const _0x5f4d1a = _0x3cf46d;
    server[_0x5f4d1a(0x97)]();
    let _0x4421fe = 0x0;
    _0x268b7b['on']('data', _0x59aa39 => {
        const _0xe1a532 = _0x5f4d1a;
        measuredSize += _0x59aa39['length'];
        for (let _0x55070a = 0x0; _0x55070a < _0x59aa39[_0xe1a532(0x95)]; _0x55070a++) {
            assert[_0xe1a532(0x98)](_0x59aa39[_0x55070a], buffer[_0x4421fe]), _0x4421fe++;
        }
    }), _0x268b7b['on'](_0x5f4d1a(0x99), common[_0x5f4d1a(0x9a)](() => {
        const _0x24930c = _0x5f4d1a;
        assert[_0x24930c(0x98)](measuredSize, bufferSize), _0x287aaf[_0x24930c(0x9b)](0xc8), _0x287aaf[_0x24930c(0x9c)](_0x24930c(0x9d)), _0x287aaf['end']();
    }));
});
server[_0x3cf46d(0x9e)](0x0, common['mustCall'](() => {
    const _0x1d3d32 = _0x3cf46d, _0x478944 = http['request']({
            'port': server[_0x1d3d32(0x9f)]()['port'],
            'method': _0x1d3d32(0xa0),
            'path': '/',
            'headers': { 'content-length': buffer['length'] }
        }, common[_0x1d3d32(0x9a)](_0x5369ec => {
            const _0x3bb874 = _0x1d3d32;
            _0x5369ec[_0x3bb874(0xa1)](_0x3bb874(0xa2));
            let _0x379b8d = '';
            _0x5369ec['on']('data', _0x13cd47 => _0x379b8d += _0x13cd47), _0x5369ec['on'](_0x3bb874(0x99), common['mustCall'](() => {
                assert['strictEqual'](_0x379b8d, 'thanks');
            }));
        }));
    _0x478944[_0x1d3d32(0x99)](buffer);
}));
