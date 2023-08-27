import _0xd0b59a from'./.internal/baseDifference.js';
import _0x37543d from'./.internal/baseFlatten.js';
import _0x3d29f4 from'./isArrayLikeObject.js';
import _0xa044ea from'./last.js';
;
function differenceWith(array, ...values) {
    let comparator = _0xa044ea(values);
    if (_0x3d29f4(comparator)) {
        comparator = undefined;
    }
    return _0x3d29f4(array) ? _0xd0b59a(array, _0x37543d(values, 1, _0x3d29f4, !![]), undefined, comparator) : [];
}
export default differenceWith;