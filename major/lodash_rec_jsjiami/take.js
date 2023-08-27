import _0x2679c8 from'./slice.js';
;
function take(_0x4990f4, _0x5b9389 = 1) {
    if (!(_0x4990f4 != null && _0x4990f4['length'])) {
        return [];
    }
    return _0x2679c8(_0x4990f4, 0, _0x5b9389 < 0 ? 0 : _0x5b9389);
}
export default take;