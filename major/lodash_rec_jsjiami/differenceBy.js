import _0x1615eb from'./.internal/baseDifference.js';
import _0x33b377 from'./.internal/baseFlatten.js';
import _0x250d6e from'./isArrayLikeObject.js';
import _0x5743a8 from'./last.js';
;
function differenceBy(array, ...values) {
    let iteratee = _0x5743a8(values);
    if (_0x250d6e(iteratee)) {
        iteratee = undefined;
    }
    return _0x250d6e(array) ? _0x1615eb(array, _0x33b377(values, 1, _0x250d6e, !![]), iteratee) : [];
}
export default differenceBy;