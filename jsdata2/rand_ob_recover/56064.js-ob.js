const common = require('../common'), assert = require(_0x311a66(444)), events = require(_0x311a66(445)), {inspect} = require(_0x311a66(446)), e = new events[(_0x311a66(447))]();
e['on']('maxListeners', common[_0x311a66(448)]()), e[_0x311a66(449)](-1549 + -21 * 279 + -1 * -7450);
const throwsObjs = [
    NaN,
    -(7 * 243 + 65 * 70 + -50 * 125),
    'and even this'
];
for (const obj of throwsObjs) {
    assert['throws'](() => e[_0x311a66(449)](obj), {
        'code': 'ERR_OUT_OF_RANGE',
        'name': 'RangeError',
        'message': _0x311a66(450) + (_0x311a66(451) + inspect(obj))
    }), assert[_0x311a66(452)](() => events[_0x311a66(453)] = obj, {
        'code': _0x311a66(454),
        'name': 'RangeError',
        'message': _0x311a66(455) + (_0x311a66(451) + inspect(obj))
    });
}
e[_0x311a66(456)](_0x311a66(457));
{
    const {EventEmitter, defaultMaxListeners} = events;
    for (const obj of throwsObjs) {
        assert[_0x311a66(452)](() => EventEmitter[_0x311a66(449)](obj), { 'code': _0x311a66(454) });
    }
    assert[_0x311a66(452)](() => EventEmitter[_0x311a66(449)](defaultMaxListeners, _0x311a66(458)), { 'code': 'ERR_INVALID_ARG_TYPE' });
}