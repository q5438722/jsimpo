import _0x56cf5c from'./.internal/baseSortedIndex.js';
import _0x1fc3f5 from'./eq.js';
;
function sortedIndexOf(array, value) {
    const length = array == null ? 0 : array['length'];
    if (length) {
        const index = _0x56cf5c(array, value);
        if (index < length && _0x1fc3f5(array[index], value)) {
            return index;
        }
    }
    return -1;
}
export default sortedIndexOf;