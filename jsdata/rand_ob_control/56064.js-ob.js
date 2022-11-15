'use strict';
const common = require('../common'), assert = require('assert'), events = require('events'), {inspect} = require('util'), e = new events['EventEmitter']();
e['on']('maxListeners', common['mustCall']()), e['setMaxListeners'](0x2a);
const throwsObjs = [
    NaN,
    -0x1,
    'and\x20even\x20this'
];
for (const obj of throwsObjs) {
    assert['throws'](() => e['setMaxListeners'](obj), {
        'code': 'ERR_OUT_OF_RANGE',
        'name': 'RangeError',
        'message': 'The\x20value\x20of\x20\x22n\x22\x20is\x20out\x20of\x20range.\x20' + ('It\x20must\x20be\x20a\x20non-negative\x20number.\x20Received\x20' + inspect(obj))
    }), assert['throws'](() => events['defaultMaxListeners'] = obj, {
        'code': 'ERR_OUT_OF_RANGE',
        'name': 'RangeError',
        'message': 'The\x20value\x20of\x20\x22defaultMaxListeners\x22\x20is\x20out\x20of\x20range.\x20' + ('It\x20must\x20be\x20a\x20non-negative\x20number.\x20Received\x20' + inspect(obj))
    });
}
e['emit']('maxListeners');
{
    const {EventEmitter, defaultMaxListeners} = events;
    for (const obj of throwsObjs) {
        assert['throws'](() => EventEmitter['setMaxListeners'](obj), { 'code': 'ERR_OUT_OF_RANGE' });
    }
    assert['throws'](() => EventEmitter['setMaxListeners'](defaultMaxListeners, 'INVALID_EMITTER'), { 'code': 'ERR_INVALID_ARG_TYPE' });
}
