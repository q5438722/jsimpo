'use strict';
const common = require('../common'), assert = require('assert'), http = require('http'), bufferSize = 0x5 * 0x400 * 0x400;
let measuredSize = 0x0;
const buffer = Buffer['allocUnsafe'](bufferSize);
for (let i = 0x0; i < buffer['length']; i++) {
    buffer[i] = i % 0x100;
}
const server = http['Server'](function (_0x5ebdab, _0x5aaf86) {
    const _0x3e1b26 = {
        'cRRZy': function (_0x1cf663, _0x4c899e) {
            return _0x1cf663 < _0x4c899e;
        },
        'JqGef': 'thanks',
        'ySWMC': 'data',
        'hnpyi': 'end'
    };
    server['close']();
    let _0x28f098 = 0x0;
    _0x5ebdab['on'](_0x3e1b26['ySWMC'], _0x362f79 => {
        measuredSize += _0x362f79['length'];
        for (let _0x22298e = 0x0; _0x3e1b26['cRRZy'](_0x22298e, _0x362f79['length']); _0x22298e++) {
            assert['strictEqual'](_0x362f79[_0x22298e], buffer[_0x28f098]), _0x28f098++;
        }
    }), _0x5ebdab['on'](_0x3e1b26['hnpyi'], common['mustCall'](() => {
        assert['strictEqual'](measuredSize, bufferSize), _0x5aaf86['writeHead'](0xc8), _0x5aaf86['write'](_0x3e1b26['JqGef']), _0x5aaf86['end']();
    }));
});
server['listen'](0x0, common['mustCall'](() => {
    const _0x127f14 = {
            'tQDrM': 'thanks',
            'qQOUM': 'utf8',
            'nRmfg': 'data',
            'lwsoo': 'end',
            'MRnmp': 'POST'
        }, _0xc78f88 = http['request']({
            'port': server['address']()['port'],
            'method': _0x127f14['MRnmp'],
            'path': '/',
            'headers': { 'content-length': buffer['length'] }
        }, common['mustCall'](_0x4f8f09 => {
            _0x4f8f09['setEncoding'](_0x127f14['qQOUM']);
            let _0x4927d3 = '';
            _0x4f8f09['on'](_0x127f14['nRmfg'], _0x12ff8b => _0x4927d3 += _0x12ff8b), _0x4f8f09['on'](_0x127f14['lwsoo'], common['mustCall'](() => {
                assert['strictEqual'](_0x4927d3, _0x127f14['tQDrM']);
            }));
        }));
    _0xc78f88['end'](buffer);
}));
