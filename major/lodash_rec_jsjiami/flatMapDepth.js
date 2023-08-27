import _0x48c645 from'./.internal/baseFlatten.js';
import _0x13d8e5 from'./map.js';
;
function flatMapDepth(collection, iteratee, depth) {
    depth = depth === undefined ? 1 : +depth;
    return _0x48c645(_0x13d8e5(collection, iteratee), depth);
}
export default flatMapDepth;