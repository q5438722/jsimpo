import _0x4b3a54 from'./.internal/baseXor.js';
import _0x502c34 from'./isArrayLikeObject.js';
import _0x1055d5 from'./last.js';
;
function xorWith(...arrays) {
    let comparator = _0x1055d5(arrays);
    comparator = typeof comparator === 'function' ? comparator : undefined;
    return _0x4b3a54(arrays['filter'](_0x502c34), undefined, comparator);
}
export default xorWith;