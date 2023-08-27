import _0x3bddf2 from './debounce.js';
import _0x122582 from './isObject.js';
function throttle(_0x562a96, _0x40f781, _0x3ae3c9) {
    let _0xac2f9b = !![], _0x461b92 = !![];
    if (typeof _0x562a96 !== 'function')
        throw new TypeError('Expected a function');
    return _0x122582(_0x3ae3c9) && (_0xac2f9b = 'leading' in _0x3ae3c9 ? !!_0x3ae3c9['leading'] : _0xac2f9b, _0x461b92 = 'trailing' in _0x3ae3c9 ? !!_0x3ae3c9['trailing'] : _0x461b92), _0x3bddf2(_0x562a96, _0x40f781, {
        'leading': _0xac2f9b,
        'trailing': _0x461b92,
        'maxWait': _0x40f781
    });
}
export default throttle;