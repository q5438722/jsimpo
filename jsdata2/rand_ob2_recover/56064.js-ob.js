function _0x2cf5(_0x501c07, _0x36193e) {
    return _0x2cf5 = function (_0x58ed73, _0x2cf5b9) {
        _0x58ed73 = _0x58ed73 - 411;
        let _0x4be907 = _0x58ed[_0x58ed73];
        return _0x4be907;
    }, _0x2cf5(_0x501c07, _0x36193e);
}
const common = require('../common'), assert = require(_0x375d38(420)), events = require(_0x375d38(421)), {inspect} = require(_0x375d38(422)), e = new events[(_0x375d38(423))]();
e['on'](_0x375d38(424), common['mustCall']()), e[_0x375d38(425)](42);
const throwsObjs = [
    NaN,
    -1,
    _0x375d38(426)
];
for (const obj of throwsObjs) {
    assert[_0x375d38(427)](() => e['setMaxListeners'](obj), {
        'code': 'ERR_OUT_OF_RANGE',
        'name': 'RangeError',
        'message': _0x375d38(428) + (_0x375d38(429) + inspect(obj))
    }), assert[_0x375d38(427)](() => events['defaultMaxListeners'] = obj, {
        'code': _0x375d38(430),
        'name': _0x375d38(431),
        'message': _0x375d38(432) + (_0x375d38(429) + inspect(obj))
    });
}
e[_0x375d38(433)](_0x375d38(424));
{
    const {EventEmitter, defaultMaxListeners} = events;
    for (const obj of throwsObjs) {
        assert['throws'](() => EventEmitter[_0x375d38(425)](obj), { 'code': _0x375d38(430) });
    }
    assert[_0x375d38(427)](() => EventEmitter[_0x375d38(425)](defaultMaxListeners, _0x375d38(434)), { 'code': 'ERR_INVALID_ARG_TYPE' });
}