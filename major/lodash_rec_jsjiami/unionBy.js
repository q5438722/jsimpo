import _0x5b1639 from'./.internal/baseFlatten.js';
import _0x10e272 from'./.internal/baseUniq.js';
import _0x15d74a from'./isArrayLikeObject.js';
import _0x5211e5 from'./last.js';
;
function unionBy(...arrays) {
    let iteratee = _0x5211e5(arrays);
    if (_0x15d74a(iteratee)) {
        iteratee = undefined;
    }
    return _0x10e272(_0x5b1639(arrays, 1, _0x15d74a, !![]), iteratee);
}
export default unionBy;