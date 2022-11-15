'use strict';
const common = require('../common'), assert = require('assert'), http = require('http'), bufferSize = (-0x1 * -0x1dcf + 0x5c1 * -0x2 + -0x1248) * (-0x175c + -0x22c7 + 0x3e23) * (-0x1745 + -0x1a23 * -0x1 + 0x1d * 0xa);
let measuredSize = 0x1 * -0x16e + -0x14f + -0x2bd * -0x1;
const buffer = Buffer['allocUnsafe'](bufferSize);
for (let i = 0x1 * 0x107 + -0xdbf + 0x128 * 0xb; i < buffer['length']; i++) {
    buffer[i] = i % (0x59 + -0x265 + 0x30c);
}
const server = http['Server'](function (_0x5169db, _0x4d7a39) {
    server['close']();
    let _0xf97ca4 = 0x2 * 0x46c + 0x204f + -0x2927;
    _0x5169db['on']('data', _0x490172 => {
        measuredSize += _0x490172['length'];
        for (let _0x2ea569 = -0x2413 * -0x1 + -0x1315 + -0x10fe; _0x2ea569 < _0x490172['length']; _0x2ea569++) {
            assert['strictEqual'](_0x490172[_0x2ea569], buffer[_0xf97ca4]), _0xf97ca4++;
        }
    }), _0x5169db['on']('end', common['mustCall'](() => {
        assert['strictEqual'](measuredSize, bufferSize), _0x4d7a39['writeHead'](0x16e4 + 0x13 * -0xe9 + 0x4d1 * -0x1), _0x4d7a39['write']('thanks'), _0x4d7a39['end']();
    }));
});
server['listen'](0x12b + 0x14a2 + -0x15cd, common['mustCall'](() => {
    const _0x1ffc67 = http['request']({
        'port': server['address']()['port'],
        'method': 'POST',
        'path': '/',
        'headers': { 'content-length': buffer['length'] }
    }, common['mustCall'](_0x257501 => {
        _0x257501['setEncoding']('utf8');
        let _0x3a04de = '';
        _0x257501['on']('data', _0x4cd942 => _0x3a04de += _0x4cd942), _0x257501['on']('end', common['mustCall'](() => {
            assert['strictEqual'](_0x3a04de, 'thanks');
        }));
    }));
    _0x1ffc67['end'](buffer);
}));
