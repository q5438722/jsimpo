import _0x305a2d from'./debounce.js';
import _0x34b7b9 from'./isObject.js';
;
function throttle(func, wait, options) {
    let leading = !![];
    let trailing = !![];
    if (typeof func !== 'function') {
        throw new TypeError('Expected a function');
    }
    if (_0x34b7b9(options)) {
        leading = 'leading' in options ? !!options['leading'] : leading;
        trailing = 'trailing' in options ? !!options['trailing'] : trailing;
    }
    return _0x305a2d(func, wait, {
        'leading': leading,
        'trailing': trailing,
        'maxWait': wait
    });
}
export default throttle;