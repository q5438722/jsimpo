'use strict';
const _0x6d84 = [
    '20852UCbCia',
    '801996qTWryD',
    '624888BQJzGV',
    '675224yKlFXw',
    '343326VSxxys',
    '513891FzPVZI',
    '547055EOQqcM',
    '../common',
    'assert',
    'http',
    'net',
    'createServer',
    'write',
    'Connection:\x20upgrade\x0d\x0a',
    'Transfer-Encoding:\x20chunked\x0d\x0a',
    'Upgrade:\x20websocket\x0d\x0a',
    'latin1',
    'close',
    'address',
    'host',
    'port',
    'websocket',
    'length',
    'strictEqual',
    'destroy',
    '37mlAekm'
];
const _0x5cc12d = _0x42da;
(function (_0x551ed2, _0x4b27ec) {
    const _0x3c9909 = _0x42da;
    while (!![]) {
        try {
            const _0x24596c = -parseInt(_0x3c9909(0x19f)) * -parseInt(_0x3c9909(0x1a0)) + -parseInt(_0x3c9909(0x1a1)) + parseInt(_0x3c9909(0x1a2)) + parseInt(_0x3c9909(0x1a3)) + parseInt(_0x3c9909(0x1a4)) + -parseInt(_0x3c9909(0x1a5)) + -parseInt(_0x3c9909(0x1a6));
            if (_0x24596c === _0x4b27ec)
                break;
            else
                _0x551ed2['push'](_0x551ed2['shift']());
        } catch (_0x40a033) {
            _0x551ed2['push'](_0x551ed2['shift']());
        }
    }
}(_0x6d84, 0x86c54));
function _0x42da(_0x70bfba, _0x514b55) {
    return _0x42da = function (_0x6d8478, _0x42da8b) {
        _0x6d8478 = _0x6d8478 - 0x19f;
        let _0x358b3e = _0x6d84[_0x6d8478];
        return _0x358b3e;
    }, _0x42da(_0x70bfba, _0x514b55);
}
const {mustCall} = require(_0x5cc12d(0x1a7)), assert = require(_0x5cc12d(0x1a8)), http = require(_0x5cc12d(0x1a9)), net = require(_0x5cc12d(0x1aa));
net[_0x5cc12d(0x1ab)](mustCall(function (_0x10d23c) {
    const _0x4a252d = _0x5cc12d;
    _0x10d23c[_0x4a252d(0x1ac)]('HTTP/1.1\x20101\x20Switching\x20Protocols\x0d\x0a' + _0x4a252d(0x1ad) + _0x4a252d(0x1ae) + _0x4a252d(0x1af) + '\x0d\x0a' + '\u0080', _0x4a252d(0x1b0)), this[_0x4a252d(0x1b1)]();
}))['listen'](0x0, mustCall(function () {
    const _0x59d642 = _0x5cc12d;
    http['get']({
        'host': this[_0x59d642(0x1b2)]()[_0x59d642(0x1b3)],
        'port': this[_0x59d642(0x1b2)]()[_0x59d642(0x1b4)],
        'headers': {
            'Connection': 'upgrade',
            'Upgrade': _0x59d642(0x1b5)
        }
    })['on']('upgrade', mustCall((_0x45af79, _0x163eab, _0x4c6c14) => {
        const _0x631e5e = _0x59d642;
        assert['strictEqual'](_0x4c6c14[_0x631e5e(0x1b6)], 0x1), assert[_0x631e5e(0x1b7)](_0x4c6c14[0x0], 0x80), _0x163eab[_0x631e5e(0x1b8)]();
    }));
}));
