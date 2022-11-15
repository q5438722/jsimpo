'use strict';
const _0x58ed = [
    'throws',
    'The\x20value\x20of\x20\x22n\x22\x20is\x20out\x20of\x20range.\x20',
    'It\x20must\x20be\x20a\x20non-negative\x20number.\x20Received\x20',
    'ERR_OUT_OF_RANGE',
    'RangeError',
    'The\x20value\x20of\x20\x22defaultMaxListeners\x22\x20is\x20out\x20of\x20range.\x20',
    'emit',
    'INVALID_EMITTER',
    '550945EDLUOq',
    '545817ZYJPsq',
    '255335KkRspq',
    '243772pQBxDE',
    '3cThvXY',
    '544674LWDnTw',
    '23861WQZJAK',
    '1iupULl',
    '1143896JMqoFr',
    'assert',
    'events',
    'util',
    'EventEmitter',
    'maxListeners',
    'setMaxListeners',
    'and\x20even\x20this'
];
const _0x375d38 = _0x2cf5;
(function (_0x4a7306, _0x26aa47) {
    const _0x231282 = _0x2cf5;
    while (!![]) {
        try {
            const _0x1372e7 = -parseInt(_0x231282(0x19b)) + parseInt(_0x231282(0x19c)) + parseInt(_0x231282(0x19d)) + -parseInt(_0x231282(0x19e)) * -parseInt(_0x231282(0x19f)) + parseInt(_0x231282(0x1a0)) + -parseInt(_0x231282(0x1a1)) * -parseInt(_0x231282(0x1a2)) + -parseInt(_0x231282(0x1a3));
            if (_0x1372e7 === _0x26aa47)
                break;
            else
                _0x4a7306['push'](_0x4a7306['shift']());
        } catch (_0x51fda6) {
            _0x4a7306['push'](_0x4a7306['shift']());
        }
    }
}(_0x58ed, 0x63292));
function _0x2cf5(_0x501c07, _0x36193e) {
    return _0x2cf5 = function (_0x58ed73, _0x2cf5b9) {
        _0x58ed73 = _0x58ed73 - 0x19b;
        let _0x4be907 = _0x58ed[_0x58ed73];
        return _0x4be907;
    }, _0x2cf5(_0x501c07, _0x36193e);
}
const common = require('../common'), assert = require(_0x375d38(0x1a4)), events = require(_0x375d38(0x1a5)), {inspect} = require(_0x375d38(0x1a6)), e = new events[(_0x375d38(0x1a7))]();
e['on'](_0x375d38(0x1a8), common['mustCall']()), e[_0x375d38(0x1a9)](0x2a);
const throwsObjs = [
    NaN,
    -0x1,
    _0x375d38(0x1aa)
];
for (const obj of throwsObjs) {
    assert[_0x375d38(0x1ab)](() => e['setMaxListeners'](obj), {
        'code': 'ERR_OUT_OF_RANGE',
        'name': 'RangeError',
        'message': _0x375d38(0x1ac) + (_0x375d38(0x1ad) + inspect(obj))
    }), assert[_0x375d38(0x1ab)](() => events['defaultMaxListeners'] = obj, {
        'code': _0x375d38(0x1ae),
        'name': _0x375d38(0x1af),
        'message': _0x375d38(0x1b0) + (_0x375d38(0x1ad) + inspect(obj))
    });
}
e[_0x375d38(0x1b1)](_0x375d38(0x1a8));
{
    const {EventEmitter, defaultMaxListeners} = events;
    for (const obj of throwsObjs) {
        assert['throws'](() => EventEmitter[_0x375d38(0x1a9)](obj), { 'code': _0x375d38(0x1ae) });
    }
    assert[_0x375d38(0x1ab)](() => EventEmitter[_0x375d38(0x1a9)](defaultMaxListeners, _0x375d38(0x1b2)), { 'code': 'ERR_INVALID_ARG_TYPE' });
}
