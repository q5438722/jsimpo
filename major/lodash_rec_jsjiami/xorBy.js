import _0x1c9de2 from'./.internal/baseXor.js';
import _0xf2a0f1 from'./isArrayLikeObject.js';
import _0x3275c4 from'./last.js';
;
function xorBy(...arrays) {
    let iteratee = _0x3275c4(arrays);
    if (_0xf2a0f1(iteratee)) {
        iteratee = undefined;
    }
    return _0x1c9de2(arrays['filter'](_0xf2a0f1), iteratee);
}
export default xorBy;