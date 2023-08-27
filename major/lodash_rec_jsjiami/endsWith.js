
;
function endsWith(_0x36da61, _0x207004, _0x4f3590) {
    const {length} = _0x36da61;
    _0x4f3590 = _0x4f3590 === undefined ? length : +_0x4f3590;
    if (_0x4f3590 < 0 || _0x4f3590 != _0x4f3590) {
        _0x4f3590 = 0;
    } else if (_0x4f3590 > length) {
        _0x4f3590 = length;
    }
    const _0x2ad96c = _0x4f3590;
    _0x4f3590 -= _0x207004['length'];
    return _0x4f3590 >= 0 && _0x36da61['slice'](_0x4f3590, _0x2ad96c) == _0x207004;
}
export default endsWith;