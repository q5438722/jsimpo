'use strict';
const _0x82b7 = [
    'close',
    'request',
    'address',
    'port',
    'response',
    'setEncoding',
    'utf8',
    'end',
    'exit',
    'log',
    '2ecfYBh',
    '104969zJactq',
    '3UhJaOp',
    '28695qvEQTi',
    '23uYRWPF',
    '27473KcYjAW',
    '664882yHEVsP',
    '1GbgdhZ',
    '284150SaSSDN',
    '581981wXzeSM',
    '617564MGQoxV',
    '../common',
    'assert',
    'http',
    'createServer',
    'strictEqual',
    'socket',
    'url',
    'listen'
];
const _0x456471 = _0x3bdf;
(function (_0x1074a8, _0xf9ea56) {
    const _0x1bbc26 = _0x3bdf;
    while (!![]) {
        try {
            const _0x574a37 = parseInt(_0x1bbc26(0x12b)) * parseInt(_0x1bbc26(0x12c)) + -parseInt(_0x1bbc26(0x12d)) * parseInt(_0x1bbc26(0x12e)) + parseInt(_0x1bbc26(0x12f)) * parseInt(_0x1bbc26(0x130)) + parseInt(_0x1bbc26(0x131)) * -parseInt(_0x1bbc26(0x132)) + parseInt(_0x1bbc26(0x133)) + -parseInt(_0x1bbc26(0x134)) + parseInt(_0x1bbc26(0x135));
            if (_0x574a37 === _0xf9ea56)
                break;
            else
                _0x1074a8['push'](_0x1074a8['shift']());
        } catch (_0x234f7e) {
            _0x1074a8['push'](_0x1074a8['shift']());
        }
    }
}(_0x82b7, 0x643d7));
require(_0x456471(0x136));
const assert = require(_0x456471(0x137)), http = require(_0x456471(0x138));
let serverSocket = null;
const server = http[_0x456471(0x139)](function (_0x319881, _0x314ca2) {
    const _0x211d36 = _0x456471;
    serverSocket ? assert[_0x211d36(0x13a)](_0x319881['socket'], serverSocket) : serverSocket = _0x319881[_0x211d36(0x13b)], _0x314ca2['end'](_0x319881[_0x211d36(0x13c)]);
});
server[_0x456471(0x13d)](0x0, function () {
    makeRequest(expectRequests);
});
function _0x3bdf(_0x322deb, _0x170263) {
    return _0x3bdf = function (_0x82b7d0, _0x3bdfb0) {
        _0x82b7d0 = _0x82b7d0 - 0x12b;
        let _0x31dd6f = _0x82b7[_0x82b7d0];
        return _0x31dd6f;
    }, _0x3bdf(_0x322deb, _0x170263);
}
const agent = http['Agent']({ 'keepAlive': !![] });
let clientSocket = null;
const expectRequests = 0xa;
let actualRequests = 0x0;
function makeRequest(_0x28954e) {
    const _0x2d1327 = _0x456471;
    if (_0x28954e === 0x0) {
        server[_0x2d1327(0x13e)](), agent['destroy']();
        return;
    }
    const _0x401439 = http[_0x2d1327(0x13f)]({
        'port': server[_0x2d1327(0x140)]()[_0x2d1327(0x141)],
        'agent': agent,
        'path': '/' + _0x28954e
    });
    _0x401439['end'](), _0x401439['on'](_0x2d1327(0x13b), function (_0x56a097) {
        const _0x3586ce = _0x2d1327;
        clientSocket ? assert[_0x3586ce(0x13a)](_0x56a097, clientSocket) : clientSocket = _0x56a097;
    }), _0x401439['on'](_0x2d1327(0x142), function (_0x46117c) {
        const _0x20a29b = _0x2d1327;
        let _0x3c386b = '';
        _0x46117c[_0x20a29b(0x143)](_0x20a29b(0x144)), _0x46117c['on']('data', function (_0x5d7b2c) {
            _0x3c386b += _0x5d7b2c;
        }), _0x46117c['on'](_0x20a29b(0x145), function () {
            assert['strictEqual'](_0x3c386b, '/' + _0x28954e), setTimeout(function () {
                actualRequests++, makeRequest(_0x28954e - 0x1);
            }, 0x1);
        });
    });
}
process['on'](_0x456471(0x146), function () {
    const _0x5501e3 = _0x456471;
    assert['strictEqual'](actualRequests, expectRequests), console[_0x5501e3(0x147)]('ok');
});
