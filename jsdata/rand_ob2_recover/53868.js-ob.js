require(_0x4c1588(186));
const assert = require(_0x4c1588(187)), http = require(_0x4c1588(188));
let serverSocket = null;
const server = http['createServer'](function (_0x33b062, _0x1fbcb1) {
    const _0x41d14d = _0x4c1588;
    serverSocket ? assert[_0x41d14d(189)](_0x33b062[_0x41d14d(190)], serverSocket) : serverSocket = _0x33b062[_0x41d14d(190)], _0x1fbcb1[_0x41d14d(191)](_0x33b062[_0x41d14d(192)]);
});
server[_0x4c1588(193)](0, function () {
    makeRequest(expectRequests);
});
const agent = http[_0x4c1588(194)]({ 'keepAlive': !![] });
let clientSocket = null;
function _0x2c9d(_0x519ade, _0x137482) {
    return _0x2c9d = function (_0x22fbb2, _0x2c9dfe) {
        _0x22fbb2 = _0x22fbb2 - 175;
        let _0x300905 = _0x22fb[_0x22fbb2];
        return _0x300905;
    }, _0x2c9d(_0x519ade, _0x137482);
}
const expectRequests = 10;
let actualRequests = 0;
function makeRequest(_0x420a0b) {
    const _0x32a500 = _0x4c1588;
    if (_0x420a0b === 0) {
        server[_0x32a500(195)](), agent['destroy']();
        return;
    }
    const _0x5a9f6b = http['request']({
        'port': server[_0x32a500(196)]()[_0x32a500(197)],
        'agent': agent,
        'path': '/' + _0x420a0b
    });
    _0x5a9f6b['end'](), _0x5a9f6b['on'](_0x32a500(190), function (_0xbeba10) {
        const _0x557199 = _0x32a500;
        clientSocket ? assert[_0x557199(189)](_0xbeba10, clientSocket) : clientSocket = _0xbeba10;
    }), _0x5a9f6b['on'](_0x32a500(198), function (_0x49ca77) {
        const _0x4a16ca = _0x32a500;
        let _0x54132f = '';
        _0x49ca77[_0x4a16ca(199)](_0x4a16ca(200)), _0x49ca77['on'](_0x4a16ca(201), function (_0x39090c) {
            _0x54132f += _0x39090c;
        }), _0x49ca77['on']('end', function () {
            const _0x5f14e8 = _0x4a16ca;
            assert[_0x5f14e8(189)](_0x54132f, '/' + _0x420a0b), setTimeout(function () {
                actualRequests++, makeRequest(_0x420a0b - 1);
            }, 1);
        });
    });
}
process['on']('exit', function () {
    const _0x5b7820 = _0x4c1588;
    assert['strictEqual'](actualRequests, expectRequests), console[_0x5b7820(202)]('ok');
});