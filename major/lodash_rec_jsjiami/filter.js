
;
function filter(_0x1348cc, _0x16cdd6) {
    let _0x55f251 = -1;
    let _0x545ed9 = 0;
    const _0x5f40c2 = _0x1348cc == null ? 0 : _0x1348cc['length'];
    const _0x224fd1 = [];
    while (++_0x55f251 < _0x5f40c2) {
        const _0x2ee82d = _0x1348cc[_0x55f251];
        if (_0x16cdd6(_0x2ee82d, _0x55f251, _0x1348cc)) {
            _0x224fd1[_0x545ed9++] = _0x2ee82d;
        }
    }
    return _0x224fd1;
}
export default filter;