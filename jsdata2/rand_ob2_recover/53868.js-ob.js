require(_0x456471(310));
const assert = require(_0x456471(311)), http = require(_0x456471(312));
let serverSocket = null;
const server = http[_0x456471(313)](function (_0x319881, _0x314ca2) {
    const _0x211d36 = _0x456471;
    serverSocket ? assert[_0x211d36(314)](_0x319881['socket'], serverSocket) : serverSocket = _0x319881[_0x211d36(315)], _0x314ca2['end'](_0x319881[_0x211d36(316)]);
});
server[_0x456471(317)](0, function () {
    makeRequest(expectRequests);
});
function _0x3bdf(_0x322deb, _0x170263) {
    return _0x3bdf = function (_0x82b7d0, _0x3bdfb0) {
        _0x82b7d0 = _0x82b7d0 - 299;
        let _0x31dd6f = _0x82b7[_0x82b7d0];
        return _0x31dd6f;
    }, _0x3bdf(_0x322deb, _0x170263);
}
const agent = http['Agent']({ 'keepAlive': !![] });
let clientSocket = null;
const expectRequests = 10;
let actualRequests = 0;
function makeRequest(_0x28954e) {
    const _0x2d1327 = _0x456471;
    if (_0x28954e === 0) {
        server[_0x2d1327(318)](), agent['destroy']();
        return;
    }
    const _0x401439 = http[_0x2d1327(319)]({
        'port': server[_0x2d1327(320)]()[_0x2d1327(321)],
        'agent': agent,
        'path': '/' + _0x28954e
    });
    _0x401439['end'](), _0x401439['on'](_0x2d1327(315), function (_0x56a097) {
        const _0x3586ce = _0x2d1327;
        clientSocket ? assert[_0x3586ce(314)](_0x56a097, clientSocket) : clientSocket = _0x56a097;
    }), _0x401439['on'](_0x2d1327(322), function (_0x46117c) {
        const _0x20a29b = _0x2d1327;
        let _0x3c386b = '';
        _0x46117c[_0x20a29b(323)](_0x20a29b(324)), _0x46117c['on']('data', function (_0x5d7b2c) {
            _0x3c386b += _0x5d7b2c;
        }), _0x46117c['on'](_0x20a29b(325), function () {
            assert['strictEqual'](_0x3c386b, '/' + _0x28954e), setTimeout(function () {
                actualRequests++, makeRequest(_0x28954e - 1);
            }, 1);
        });
    });
}
process['on'](_0x456471(326), function () {
    const _0x5501e3 = _0x456471;
    assert['strictEqual'](actualRequests, expectRequests), console[_0x5501e3(327)]('ok');
});