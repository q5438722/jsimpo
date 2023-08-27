import _0x4ed885 from'./.internal/baseFindIndex.js';
import _0x29e60c from'./toInteger.js';
;
function findLastIndex(array, predicate, fromIndex) {
    const length = array == null ? 0 : array['length'];
    if (!length) {
        return -1;
    }
    let index = length - 1;
    if (fromIndex !== undefined) {
        index = _0x29e60c(fromIndex);
        index = fromIndex < 0 ? Math['max'](length + index, 0) : Math['min'](index, length - 1);
    }
    return _0x4ed885(array, predicate, index, !![]);
}
export default findLastIndex;