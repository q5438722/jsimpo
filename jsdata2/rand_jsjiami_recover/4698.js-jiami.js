'use strict';
if (!process['version'] || process['version']['indexOf']('v0.') === 0 || process['version']['indexOf']('v1.') === 0 && process['version']['indexOf']('v1.8.') !== 0) {
    module['exports'] = { 'nextTick': nextTick };
} else {
    module['exports'] = process;
}
function nextTick(_0x49fcc5, _0x9b0cf8, _0x37ce0e, _0x5715c1) {
    if (typeof _0x49fcc5 !== 'function') {
        throw new TypeError('"callback" argument must be a function');
    }
    var _0x21c39e = arguments['length'];
    var _0x299214, _0x3f547f;
    switch (_0x21c39e) {
    case 0:
    case 1:
        return process['nextTick'](_0x49fcc5);
    case 2:
        return process['nextTick'](function afterTickOne() {
            _0x49fcc5['call'](null, _0x9b0cf8);
        });
    case 3:
        return process['nextTick'](function afterTickTwo() {
            _0x49fcc5['call'](null, _0x9b0cf8, _0x37ce0e);
        });
    case 4:
        return process['nextTick'](function afterTickThree() {
            if ('zWnlK' !== 'zWnlK') {
                _0x49fcc5['apply'](null, _0x299214);
            } else {
                _0x49fcc5['call'](null, _0x9b0cf8, _0x37ce0e, _0x5715c1);
            }
        });
    default:
        _0x299214 = new Array(_0x21c39e - 1);
        _0x3f547f = 0;
        while (_0x3f547f < _0x299214['length']) {
            _0x299214[_0x3f547f++] = arguments[_0x3f547f];
        }
        return process['nextTick'](function afterTick() {
            _0x49fcc5['apply'](null, _0x299214);
        });
    }
}