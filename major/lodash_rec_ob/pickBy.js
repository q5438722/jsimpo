import _0xe650d5 from './map.js';
import _0x2e28b7 from './.internal/basePickBy.js';
import _0x2c8afc from './.internal/getAllKeysIn.js';
function pickBy(_0x197019, _0x2b4edc) {
    if (_0x197019 == null)
        return {};
    const _0x3a725d = _0xe650d5(_0x2c8afc(_0x197019), _0x47b3b9 => [_0x47b3b9]);
    return _0x2e28b7(_0x197019, _0x3a725d, (_0x15ed3e, _0x12ff93) => _0x2b4edc(_0x15ed3e, _0x12ff93[0]));
}
export default pickBy;