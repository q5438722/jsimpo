'use strict';
require('../common');
const assert = require('assert');
function T(_0xea5b29) {
    const _0x4bcce8 = new Uint8Array(_0xea5b29);
    Object['setPrototypeOf'](_0x4bcce8, T['prototype']);
    return _0x4bcce8;
}
Object['setPrototypeOf'](T['prototype'], Buffer['prototype']);
Object['setPrototypeOf'](T, Buffer);
T['prototype']['sum'] = function sum() {
    let _0x548d80 = 0;
    for (let _0x1b5cab = 0; _0x1b5cab < this['length']; _0x1b5cab++)
        _0x548d80 += this[_0x1b5cab];
    return _0x548d80;
};
const vals = [
    new T(4),
    T(4)
];
vals['forEach'](function (_0x2a864b) {
    assert['strictEqual'](_0x2a864b['constructor'], T);
    assert['strictEqual'](Object['getPrototypeOf'](_0x2a864b), T['prototype']);
    assert['strictEqual'](Object['getPrototypeOf'](Object['getPrototypeOf'](_0x2a864b)), Buffer['prototype']);
    _0x2a864b['fill'](5);
    let _0x6c5ee5 = 0;
    for (let _0x59d6c0 = 0; _0x59d6c0 < _0x2a864b['length']; _0x59d6c0++)
        _0x6c5ee5 += _0x2a864b[_0x59d6c0];
    assert['strictEqual'](_0x6c5ee5, _0x2a864b['length'] * 5);
    _0x2a864b['toString']();
});