'use strict';
require('../common');
const assert = require('assert'), http = require('http');
let serverSocket = null;
const server = http['createServer'](function (_0x3ac029, _0x268656) {
    serverSocket ? assert['strictEqual'](_0x3ac029['socket'], serverSocket) : serverSocket = _0x3ac029['socket'], _0x268656['end'](_0x3ac029['url']);
});
server['listen'](0xce3 + 0x2277 + -0x2f5a, function () {
    makeRequest(expectRequests);
});
const agent = http['Agent']({ 'keepAlive': !![] });
let clientSocket = null;
const expectRequests = -0x1bdf + 0x1e9e + -0x2b5;
let actualRequests = -0x1379 + 0xa3e * -0x1 + 0x1db7;
function makeRequest(_0xc469c9) {
    if (_0xc469c9 === -0x22c4 + 0x255f * -0x1 + 0x4823) {
        server['close'](), agent['destroy']();
        return;
    }
    const _0x2b7e14 = http['request']({
        'port': server['address']()['port'],
        'agent': agent,
        'path': '/' + _0xc469c9
    });
    _0x2b7e14['end'](), _0x2b7e14['on']('socket', function (_0x2000bd) {
        clientSocket ? assert['strictEqual'](_0x2000bd, clientSocket) : clientSocket = _0x2000bd;
    }), _0x2b7e14['on']('response', function (_0x183ac5) {
        let _0x1bd49d = '';
        _0x183ac5['setEncoding']('utf8'), _0x183ac5['on']('data', function (_0x28744a) {
            _0x1bd49d += _0x28744a;
        }), _0x183ac5['on']('end', function () {
            assert['strictEqual'](_0x1bd49d, '/' + _0xc469c9), setTimeout(function () {
                actualRequests++, makeRequest(_0xc469c9 - (-0x6 * 0x1a3 + 0x270b + -0x1d38));
            }, -0x1 * 0x2039 + 0x1 * -0x182b + 0x1 * 0x3865);
        });
    });
}
process['on']('exit', function () {
    assert['strictEqual'](actualRequests, expectRequests), console['log']('ok');
});
