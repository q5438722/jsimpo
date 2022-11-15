const {mustCall} = require('../common'), assert = require('assert'), http = require(_0x14aa5c(159)), net = require(_0x14aa5c(160));
net[_0x14aa5c(161)](mustCall(function (_0x2c07f) {
    const _0x1be827 = _0x14aa5c;
    _0x2c07f['write']('HTTP/1.1 101 Switching Protocols\r\n' + _0x1be827(162) + 'Transfer-Encoding: chunked\r\n' + _0x1be827(163) + '\r\n' + '\x80', 'latin1'), this[_0x1be827(164)]();
}))[_0x14aa5c(165)](0, mustCall(function () {
    const _0x34d263 = _0x14aa5c;
    http[_0x34d263(166)]({
        'host': this['address']()[_0x34d263(167)],
        'port': this['address']()[_0x34d263(168)],
        'headers': {
            'Connection': _0x34d263(169),
            'Upgrade': _0x34d263(170)
        }
    })['on'](_0x34d263(169), mustCall((_0x557156, _0x434436, _0x2aa7f3) => {
        const _0x2b4678 = _0x34d263;
        assert['strictEqual'](_0x2aa7f3[_0x2b4678(171)], 1), assert[_0x2b4678(172)](_0x2aa7f3[0], 128), _0x434436[_0x2b4678(173)]();
    }));
}));