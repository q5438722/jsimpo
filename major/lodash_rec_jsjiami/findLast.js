import _0xc6ce4c from'./findLastIndex.js';
import _0x51927e from'./isArrayLike.js';
;
function findLast(collection, predicate, fromIndex) {
    let iteratee;
    const iterable = Object(collection);
    if (!_0x51927e(collection)) {
        collection = Object['keys'](collection);
        iteratee = predicate;
        predicate = key => iteratee(iterable[key], key, iterable);
    }
    const index = _0xc6ce4c(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
}
export default findLast;