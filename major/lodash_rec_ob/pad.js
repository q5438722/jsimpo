import _0x368eee from './.internal/createPadding.js';
import _0x541f59 from './.internal/stringSize.js';
function pad(_0x2688e3, _0x3e4647, _0x48fe90) {
    const _0x14a28c = _0x3e4647 ? _0x541f59(_0x2688e3) : 0;
    if (!_0x3e4647 || _0x14a28c >= _0x3e4647)
        return _0x2688e3 || '';
    const _0x7a878d = (_0x3e4647 - _0x14a28c) / 2;
    return _0x368eee(Math['floor'](_0x7a878d), _0x48fe90) + _0x2688e3 + _0x368eee(Math['ceil'](_0x7a878d), _0x48fe90);
}
export default pad;