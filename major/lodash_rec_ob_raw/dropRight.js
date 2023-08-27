import _0x417eca from './slice.js';
import _0x41a0a7 from './toInteger.js';
function dropRight(_0x30db14, _0x163f79 = 1) {
    const _0x246904 = _0x30db14 == null ? 0 : _0x30db14['length'];
    return _0x163f79 = _0x246904 - _0x41a0a7(_0x163f79), _0x246904 ? _0x417eca(_0x30db14, 0, _0x163f79 < 0 ? 0 : _0x163f79) : [];
}
export default dropRight;