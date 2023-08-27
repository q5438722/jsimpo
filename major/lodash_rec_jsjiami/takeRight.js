import _0x2b4bc3 from'./slice.js';
;
function takeRight(_0x194ce2, _0x11efa2 = 1) {
    const _0x3308bd = _0x194ce2 == null ? 0 : _0x194ce2['length'];
    if (!_0x3308bd) {
        return [];
    }
    _0x11efa2 = _0x3308bd - _0x11efa2;
    return _0x2b4bc3(_0x194ce2, _0x11efa2 < 0 ? 0 : _0x11efa2, _0x3308bd);
}
export default takeRight;