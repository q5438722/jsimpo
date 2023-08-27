import _0x14c0b7 from './.internal/copyArray.js';
function shuffle(_0x3844d5) {
    const _0xbd0b21 = _0x3844d5 == null ? 0 : _0x3844d5['length'];
    if (!_0xbd0b21)
        return [];
    let _0x10105c = -1;
    const _0x130794 = _0xbd0b21 - 1, _0x566247 = _0x14c0b7(_0x3844d5);
    while (++_0x10105c < _0xbd0b21) {
        const _0x329fc8 = _0x10105c + Math['floor'](Math['random']() * (_0x130794 - _0x10105c + 1)), _0x3fa4fd = _0x566247[_0x329fc8];
        _0x566247[_0x329fc8] = _0x566247[_0x10105c], _0x566247[_0x10105c] = _0x3fa4fd;
    }
    return _0x566247;
}
export default shuffle;