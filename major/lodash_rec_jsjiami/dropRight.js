import _0x37c28e from'./slice.js';
import _0x3e942b from'./toInteger.js';
;
function dropRight(array, n = 1) {
    const length = array == null ? 0 : array['length'];
    n = length - _0x3e942b(n);
    return length ? _0x37c28e(array, 0, n < 0 ? 0 : n) : [];
}
export default dropRight;