import _0x17fb37 from './.internal/createPadding.js';
import _0x22ff20 from './.internal/stringSize.js';
function padStart(_0xdaaf1e, _0x512050, _0x481218) {
    const _0x170fcb = _0x512050 ? _0x22ff20(_0xdaaf1e) : 0;
    return _0x512050 && _0x170fcb < _0x512050 ? _0x17fb37(_0x512050 - _0x170fcb, _0x481218) + _0xdaaf1e : _0xdaaf1e || '';
}
export default padStart;