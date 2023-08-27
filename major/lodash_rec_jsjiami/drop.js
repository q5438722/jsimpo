import _0xefd50c from'./slice.js';
import _0x3300d6 from'./toInteger.js';
;
function drop(array, n = 1) {
    const length = array == null ? 0 : array['length'];
    return length ? _0xefd50c(array, n < 0 ? 0 : _0x3300d6(n), length) : [];
}
export default drop;