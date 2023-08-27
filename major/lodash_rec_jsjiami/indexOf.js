import _0x116f3b from'./.internal/baseIndexOf.js';
import _0xbcc92c from'./toInteger.js';
;
function indexOf(array, value, fromIndex) {
    const length = array == null ? 0 : array['length'];
    if (!length) {
        return -1;
    }
    let index = fromIndex == null ? 0 : _0xbcc92c(fromIndex);
    if (index < 0) {
        index = Math['max'](length + index, 0);
    }
    return _0x116f3b(array, value, index);
}
export default indexOf;