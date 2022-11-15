'use strict';
const common = require('../common');
const assert = require('assert');
const http = require('http');
const bufferSize = 5 * 1024 * 1024;
let measuredSize = 0;
const buffer = Buffer['allocUnsafe'](bufferSize);
for (let i = 0; i < buffer['length']; i++) {
    buffer[i] = i % 256;
}
const server = http['Server'](function (_0x1b7d10, _0x502c12) {
    server['close']();
    let _0x909bd3 = 0;
    _0x1b7d10['on']('data', _0x46e85a => {
        var _0x372043 = {
            'laqOw': 'thanks',
            'TqixG': 'utf8'
        };
        measuredSize += _0x46e85a['length'];
        for (let _0x5c4849 = 0; _0x5c4849 < _0x46e85a['length']; _0x5c4849++) {
            if ('SNVzb' === 'SNVzb') {
                assert['strictEqual'](_0x46e85a[_0x5c4849], buffer[_0x909bd3]);
                _0x909bd3++;
            } else {
                const _0xd8f8dd = http['request']({
                    'port': server['address']()['port'],
                    'method': 'POST',
                    'path': '/',
                    'headers': { 'content-length': buffer['length'] }
                }, common['mustCall'](_0xf5c79e => {
                    var _0x288ca2 = { 'kRysr': _0x372043['laqOw'] };
                    _0xf5c79e['setEncoding'](_0x372043['TqixG']);
                    let _0x1e89c2 = '';
                    _0xf5c79e['on']('data', _0x34ac36 => _0x1e89c2 += _0x34ac36);
                    _0xf5c79e['on']('end', common['mustCall'](() => {
                        assert['strictEqual'](_0x1e89c2, _0x288ca2['kRysr']);
                    }));
                }));
                _0xd8f8dd['end'](buffer);
            }
        }
    });
    _0x1b7d10['on']('end', common['mustCall'](() => {
        assert['strictEqual'](measuredSize, bufferSize);
        _0x502c12['writeHead'](200);
        _0x502c12['write']('thanks');
        _0x502c12['end']();
    }));
});
server['listen'](0, common['mustCall'](() => {
    const _0xa7d10c = http['request']({
        'port': server['address']()['port'],
        'method': 'POST',
        'path': '/',
        'headers': { 'content-length': buffer['length'] }
    }, common['mustCall'](_0x384d5b => {
        _0x384d5b['setEncoding']('utf8');
        let _0x46af0a = '';
        _0x384d5b['on']('data', _0x1a8bb7 => _0x46af0a += _0x1a8bb7);
        _0x384d5b['on']('end', common['mustCall'](() => {
            assert['strictEqual'](_0x46af0a, 'thanks');
        }));
    }));
    _0xa7d10c['end'](buffer);
}));