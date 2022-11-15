'use strict';
const _0x295a = [
    'websocket',
    'length',
    'strictEqual',
    'destroy',
    '292671eNroMl',
    '522273OqNjcQ',
    '49477SmeVkT',
    '7HDHXZf',
    '1uhWrdF',
    '479969WZirGH',
    '2IbrysT',
    '108497zVerkm',
    '334654XVOjyg',
    '785953CIIzrQ',
    'http',
    'net',
    'createServer',
    'Connection:\x20upgrade\x0d\x0a',
    'Upgrade:\x20websocket\x0d\x0a',
    'close',
    'listen',
    'get',
    'host',
    'port',
    'upgrade'
];
function _0x3de0(_0x2d0a60, _0x573cd4) {
    return _0x3de0 = function (_0x295a06, _0x3de03e) {
        _0x295a06 = _0x295a06 - 0x95;
        let _0x24ca2c = _0x295a[_0x295a06];
        return _0x24ca2c;
    }, _0x3de0(_0x2d0a60, _0x573cd4);
}
const _0x14aa5c = _0x3de0;
(function (_0x508f77, _0x302b42) {
    const _0x2899c5 = _0x3de0;
    while (!![]) {
        try {
            const _0x200185 = parseInt(_0x2899c5(0x95)) + -parseInt(_0x2899c5(0x96)) + -parseInt(_0x2899c5(0x97)) * parseInt(_0x2899c5(0x98)) + parseInt(_0x2899c5(0x99)) * -parseInt(_0x2899c5(0x9a)) + -parseInt(_0x2899c5(0x9b)) * -parseInt(_0x2899c5(0x9c)) + parseInt(_0x2899c5(0x9d)) + parseInt(_0x2899c5(0x9e));
            if (_0x200185 === _0x302b42)
                break;
            else
                _0x508f77['push'](_0x508f77['shift']());
        } catch (_0x6dee55) {
            _0x508f77['push'](_0x508f77['shift']());
        }
    }
}(_0x295a, 0x44c5b));
const {mustCall} = require('../common'), assert = require('assert'), http = require(_0x14aa5c(0x9f)), net = require(_0x14aa5c(0xa0));
net[_0x14aa5c(0xa1)](mustCall(function (_0x2c07f) {
    const _0x1be827 = _0x14aa5c;
    _0x2c07f['write']('HTTP/1.1\x20101\x20Switching\x20Protocols\x0d\x0a' + _0x1be827(0xa2) + 'Transfer-Encoding:\x20chunked\x0d\x0a' + _0x1be827(0xa3) + '\x0d\x0a' + '\u0080', 'latin1'), this[_0x1be827(0xa4)]();
}))[_0x14aa5c(0xa5)](0x0, mustCall(function () {
    const _0x34d263 = _0x14aa5c;
    http[_0x34d263(0xa6)]({
        'host': this['address']()[_0x34d263(0xa7)],
        'port': this['address']()[_0x34d263(0xa8)],
        'headers': {
            'Connection': _0x34d263(0xa9),
            'Upgrade': _0x34d263(0xaa)
        }
    })['on'](_0x34d263(0xa9), mustCall((_0x557156, _0x434436, _0x2aa7f3) => {
        const _0x2b4678 = _0x34d263;
        assert['strictEqual'](_0x2aa7f3[_0x2b4678(0xab)], 0x1), assert[_0x2b4678(0xac)](_0x2aa7f3[0x0], 0x80), _0x434436[_0x2b4678(0xad)]();
    }));
}));
