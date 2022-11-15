function _0x42da(_0x70bfba, _0x514b55) {
    return _0x42da = function (_0x6d8478, _0x42da8b) {
        _0x6d8478 = _0x6d8478 - 415;
        let _0x358b3e = _0x6d84[_0x6d8478];
        return _0x358b3e;
    }, _0x42da(_0x70bfba, _0x514b55);
}
const {mustCall} = require(_0x5cc12d(423)), assert = require(_0x5cc12d(424)), http = require(_0x5cc12d(425)), net = require(_0x5cc12d(426));
net[_0x5cc12d(427)](mustCall(function (_0x10d23c) {
    const _0x4a252d = _0x5cc12d;
    _0x10d23c[_0x4a252d(428)]('HTTP/1.1 101 Switching Protocols\r\n' + _0x4a252d(429) + _0x4a252d(430) + _0x4a252d(431) + '\r\n' + '\x80', _0x4a252d(432)), this[_0x4a252d(433)]();
}))['listen'](0, mustCall(function () {
    const _0x59d642 = _0x5cc12d;
    http['get']({
        'host': this[_0x59d642(434)]()[_0x59d642(435)],
        'port': this[_0x59d642(434)]()[_0x59d642(436)],
        'headers': {
            'Connection': 'upgrade',
            'Upgrade': _0x59d642(437)
        }
    })['on']('upgrade', mustCall((_0x45af79, _0x163eab, _0x4c6c14) => {
        const _0x631e5e = _0x59d642;
        assert['strictEqual'](_0x4c6c14[_0x631e5e(438)], 1), assert[_0x631e5e(439)](_0x4c6c14[0], 128), _0x163eab[_0x631e5e(440)]();
    }));
}));