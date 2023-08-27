
function repeat(_0x48fc02, _0x427bdc) {
    let _0x4b612c = '';
    if (!_0x48fc02 || _0x427bdc < 1 || _0x427bdc > Number['MAX_SAFE_INTEGER'])
        return _0x4b612c;
    do {
        _0x427bdc % 2 && (_0x4b612c += _0x48fc02), _0x427bdc = Math['floor'](_0x427bdc / 2), _0x427bdc && (_0x48fc02 += _0x48fc02);
    } while (_0x427bdc);
    return _0x4b612c;
}
export default repeat;