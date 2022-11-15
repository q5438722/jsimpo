'use strict';
const _0x22fb = [
    'response',
    'setEncoding',
    'utf8',
    'data',
    'log',
    '1608847YxeloD',
    '1clcfNh',
    '1340103nSYmFq',
    '900346WRfuxD',
    '1cLbJlV',
    '811590iyxziL',
    '1okDgyU',
    '164722HmBtdn',
    '1008733eSovmu',
    '1149JgTnMQ',
    '2033aYastS',
    '../common',
    'assert',
    'http',
    'strictEqual',
    'socket',
    'end',
    'url',
    'listen',
    'Agent',
    'close',
    'address',
    'port'
];
const _0x4c1588 = _0x2c9d;
(function (_0x5a05fc, _0xe188a9) {
    const _0x4f9b73 = _0x2c9d;
    while (!![]) {
        try {
            const _0xf87062 = parseInt(_0x4f9b73(0xaf)) * parseInt(_0x4f9b73(0xb0)) + -parseInt(_0x4f9b73(0xb1)) + parseInt(_0x4f9b73(0xb2)) * parseInt(_0x4f9b73(0xb3)) + parseInt(_0x4f9b73(0xb4)) + parseInt(_0x4f9b73(0xb5)) * parseInt(_0x4f9b73(0xb6)) + parseInt(_0x4f9b73(0xb7)) + parseInt(_0x4f9b73(0xb8)) * -parseInt(_0x4f9b73(0xb9));
            if (_0xf87062 === _0xe188a9)
                break;
            else
                _0x5a05fc['push'](_0x5a05fc['shift']());
        } catch (_0x37b934) {
            _0x5a05fc['push'](_0x5a05fc['shift']());
        }
    }
}(_0x22fb, 0xc7c2a));
require(_0x4c1588(0xba));
const assert = require(_0x4c1588(0xbb)), http = require(_0x4c1588(0xbc));
let serverSocket = null;
const server = http['createServer'](function (_0x33b062, _0x1fbcb1) {
    const _0x41d14d = _0x4c1588;
    serverSocket ? assert[_0x41d14d(0xbd)](_0x33b062[_0x41d14d(0xbe)], serverSocket) : serverSocket = _0x33b062[_0x41d14d(0xbe)], _0x1fbcb1[_0x41d14d(0xbf)](_0x33b062[_0x41d14d(0xc0)]);
});
server[_0x4c1588(0xc1)](0x0, function () {
    makeRequest(expectRequests);
});
const agent = http[_0x4c1588(0xc2)]({ 'keepAlive': !![] });
let clientSocket = null;
function _0x2c9d(_0x519ade, _0x137482) {
    return _0x2c9d = function (_0x22fbb2, _0x2c9dfe) {
        _0x22fbb2 = _0x22fbb2 - 0xaf;
        let _0x300905 = _0x22fb[_0x22fbb2];
        return _0x300905;
    }, _0x2c9d(_0x519ade, _0x137482);
}
const expectRequests = 0xa;
let actualRequests = 0x0;
function makeRequest(_0x420a0b) {
    const _0x32a500 = _0x4c1588;
    if (_0x420a0b === 0x0) {
        server[_0x32a500(0xc3)](), agent['destroy']();
        return;
    }
    const _0x5a9f6b = http['request']({
        'port': server[_0x32a500(0xc4)]()[_0x32a500(0xc5)],
        'agent': agent,
        'path': '/' + _0x420a0b
    });
    _0x5a9f6b['end'](), _0x5a9f6b['on'](_0x32a500(0xbe), function (_0xbeba10) {
        const _0x557199 = _0x32a500;
        clientSocket ? assert[_0x557199(0xbd)](_0xbeba10, clientSocket) : clientSocket = _0xbeba10;
    }), _0x5a9f6b['on'](_0x32a500(0xc6), function (_0x49ca77) {
        const _0x4a16ca = _0x32a500;
        let _0x54132f = '';
        _0x49ca77[_0x4a16ca(0xc7)](_0x4a16ca(0xc8)), _0x49ca77['on'](_0x4a16ca(0xc9), function (_0x39090c) {
            _0x54132f += _0x39090c;
        }), _0x49ca77['on']('end', function () {
            const _0x5f14e8 = _0x4a16ca;
            assert[_0x5f14e8(0xbd)](_0x54132f, '/' + _0x420a0b), setTimeout(function () {
                actualRequests++, makeRequest(_0x420a0b - 0x1);
            }, 0x1);
        });
    });
}
process['on']('exit', function () {
    const _0x5b7820 = _0x4c1588;
    assert['strictEqual'](actualRequests, expectRequests), console[_0x5b7820(0xca)]('ok');
});
