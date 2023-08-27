
;
function startsWith(_0x1fc9bc, _0x184016, _0x645826) {
    const {length} = _0x1fc9bc;
    _0x645826 = _0x645826 == null ? 0 : _0x645826;
    if (_0x645826 < 0) {
        _0x645826 = 0;
    } else if (_0x645826 > length) {
        _0x645826 = length;
    }
    _0x184016 = '' + _0x184016;
    return _0x1fc9bc['slice'](_0x645826, _0x645826 + _0x184016['length']) == _0x184016;
}
export default startsWith;