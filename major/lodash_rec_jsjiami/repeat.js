
;
function repeat(_0x504375, _0x1a831a) {
    let _0x1e81e3 = '';
    if (!_0x504375 || _0x1a831a < 1 || _0x1a831a > Number['MAX_SAFE_INTEGER']) {
        return _0x1e81e3;
    }
    do {
        if (_0x1a831a % 2) {
            _0x1e81e3 += _0x504375;
        }
        _0x1a831a = Math['floor'](_0x1a831a / 2);
        if (_0x1a831a) {
            _0x504375 += _0x504375;
        }
    } while (_0x1a831a);
    return _0x1e81e3;
}
export default repeat;