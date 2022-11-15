'use strict';
const _0x2e9b = [
    '9187XNbaLH',
    '166WsLIbj',
    '619089CMSXON',
    '1157066WDclqU',
    'assert',
    'events',
    'util',
    'EventEmitter',
    'mustCall',
    'setMaxListeners',
    'The\x20value\x20of\x20\x22n\x22\x20is\x20out\x20of\x20range.\x20',
    'It\x20must\x20be\x20a\x20non-negative\x20number.\x20Received\x20',
    'throws',
    'defaultMaxListeners',
    'ERR_OUT_OF_RANGE',
    'The\x20value\x20of\x20\x22defaultMaxListeners\x22\x20is\x20out\x20of\x20range.\x20',
    'emit',
    'maxListeners',
    'INVALID_EMITTER',
    '215738jrwybi',
    '1548244SYDxGC',
    '1YsIilX',
    '1QEGYLN',
    '623789YOWyvA',
    '81630iXMbOm',
    '10sGmmdy'
];
function _0x24b7(_0x534e17, _0x378c4d) {
    return _0x24b7 = function (_0x3df56d, _0x10bf8f) {
        _0x3df56d = _0x3df56d - (-0xd1e + 0x897 + -0x18e * -0x4);
        let _0x3ff1a6 = _0x2e9b[_0x3df56d];
        return _0x3ff1a6;
    }, _0x24b7(_0x534e17, _0x378c4d);
}
const _0x311a66 = _0x24b7;
(function (_0x591c0d, _0x597f3a) {
    const _0xf1192d = _0x24b7;
    while (!![]) {
        try {
            const _0x53e14b = -parseInt(_0xf1192d(0x1b1)) + parseInt(_0xf1192d(0x1b2)) * parseInt(_0xf1192d(0x1b3)) + -parseInt(_0xf1192d(0x1b4)) * -parseInt(_0xf1192d(0x1b5)) + -parseInt(_0xf1192d(0x1b6)) * parseInt(_0xf1192d(0x1b7)) + -parseInt(_0xf1192d(0x1b8)) * -parseInt(_0xf1192d(0x1b9)) + -parseInt(_0xf1192d(0x1ba)) + -parseInt(_0xf1192d(0x1bb));
            if (_0x53e14b === _0x597f3a)
                break;
            else
                _0x591c0d['push'](_0x591c0d['shift']());
        } catch (_0x45619e) {
            _0x591c0d['push'](_0x591c0d['shift']());
        }
    }
}(_0x2e9b, -0x2b49 * -0x52 + -0x1a2207 + 0x19d4d7));
const common = require('../common'), assert = require(_0x311a66(0x1bc)), events = require(_0x311a66(0x1bd)), {inspect} = require(_0x311a66(0x1be)), e = new events[(_0x311a66(0x1bf))]();
e['on']('maxListeners', common[_0x311a66(0x1c0)]()), e[_0x311a66(0x1c1)](-0x60d + -0x15 * 0x117 + -0x1 * -0x1d1a);
const throwsObjs = [
    NaN,
    -(0x7 * 0xf3 + 0x41 * 0x46 + -0x32 * 0x7d),
    'and\x20even\x20this'
];
for (const obj of throwsObjs) {
    assert['throws'](() => e[_0x311a66(0x1c1)](obj), {
        'code': 'ERR_OUT_OF_RANGE',
        'name': 'RangeError',
        'message': _0x311a66(0x1c2) + (_0x311a66(0x1c3) + inspect(obj))
    }), assert[_0x311a66(0x1c4)](() => events[_0x311a66(0x1c5)] = obj, {
        'code': _0x311a66(0x1c6),
        'name': 'RangeError',
        'message': _0x311a66(0x1c7) + (_0x311a66(0x1c3) + inspect(obj))
    });
}
e[_0x311a66(0x1c8)](_0x311a66(0x1c9));
{
    const {EventEmitter, defaultMaxListeners} = events;
    for (const obj of throwsObjs) {
        assert[_0x311a66(0x1c4)](() => EventEmitter[_0x311a66(0x1c1)](obj), { 'code': _0x311a66(0x1c6) });
    }
    assert[_0x311a66(0x1c4)](() => EventEmitter[_0x311a66(0x1c1)](defaultMaxListeners, _0x311a66(0x1ca)), { 'code': 'ERR_INVALID_ARG_TYPE' });
}
