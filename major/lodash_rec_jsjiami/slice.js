
;
function slice(_0x404e6b, _0x1f229a, _0x4f80b2) {
    let _0x3ed98b = _0x404e6b == null ? 0 : _0x404e6b['length'];
    if (!_0x3ed98b) {
        return [];
    }
    _0x1f229a = _0x1f229a == null ? 0 : _0x1f229a;
    _0x4f80b2 = _0x4f80b2 === undefined ? _0x3ed98b : _0x4f80b2;
    if (_0x1f229a < 0) {
        _0x1f229a = -_0x1f229a > _0x3ed98b ? 0 : _0x3ed98b + _0x1f229a;
    }
    _0x4f80b2 = _0x4f80b2 > _0x3ed98b ? _0x3ed98b : _0x4f80b2;
    if (_0x4f80b2 < 0) {
        _0x4f80b2 += _0x3ed98b;
    }
    _0x3ed98b = _0x1f229a > _0x4f80b2 ? 0 : _0x4f80b2 - _0x1f229a >>> 0;
    _0x1f229a >>>= 0;
    let _0x5eed73 = -1;
    const _0x107144 = new Array(_0x3ed98b);
    while (++_0x5eed73 < _0x3ed98b) {
        _0x107144[_0x5eed73] = _0x404e6b[_0x5eed73 + _0x1f229a];
    }
    return _0x107144;
}
export default slice;