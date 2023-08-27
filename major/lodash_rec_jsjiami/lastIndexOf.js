import _0x106dca from'./.internal/baseFindIndex.js';
import _0x5ba7e4 from'./.internal/baseIsNaN.js';
import _0x258497 from'./.internal/strictLastIndexOf.js';
import _0x59000d from'./toInteger.js';
;
function lastIndexOf(array, value, fromIndex) {
    const length = array == null ? 0 : array['length'];
    if (!length) {
        return -1;
    }
    let index = length;
    if (fromIndex !== undefined) {
        index = _0x59000d(fromIndex);
        index = index < 0 ? Math['max'](length + index, 0) : Math['min'](index, length - 1);
    }
    return value === value ? _0x258497(array, value, index) : _0x106dca(array, _0x5ba7e4, index, !![]);
}
export default lastIndexOf;