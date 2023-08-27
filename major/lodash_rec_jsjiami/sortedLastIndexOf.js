import _0x292a03 from'./.internal/baseSortedIndex.js';
import _0xd6e978 from'./eq.js';
;
function sortedLastIndexOf(array, value) {
    const length = array == null ? 0 : array['length'];
    if (length) {
        const index = _0x292a03(array, value, !![]) - 1;
        if (_0xd6e978(array[index], value)) {
            return index;
        }
    }
    return -1;
}
export default sortedLastIndexOf;