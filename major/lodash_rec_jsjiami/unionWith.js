import _0x25a1de from'./.internal/baseFlatten.js';
import _0x567d2f from'./.internal/baseUniq.js';
import _0x42e998 from'./isArrayLikeObject.js';
import _0x484abc from'./last.js';
;
function unionWith(...arrays) {
    let comparator = _0x484abc(arrays);
    comparator = typeof comparator === 'function' ? comparator : undefined;
    return _0x567d2f(_0x25a1de(arrays, 1, _0x42e998, !![]), undefined, comparator);
}
export default unionWith;