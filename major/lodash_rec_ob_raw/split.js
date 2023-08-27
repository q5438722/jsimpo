import _0x3f851b from './.internal/castSlice.js';
import _0x51bc66 from './.internal/hasUnicode.js';
import _0x308f05 from './isRegExp.js';
import _0x224258 from './.internal/stringToArray.js';
const MAX_ARRAY_LENGTH = 4294967295;
function split(_0x40d0dd, _0x328238, _0x5e19ce) {
    _0x5e19ce = _0x5e19ce === undefined ? MAX_ARRAY_LENGTH : _0x5e19ce >>> 0;
    if (!_0x5e19ce)
        return [];
    if (_0x40d0dd && (typeof _0x328238 === 'string' || _0x328238 != null && !_0x308f05(_0x328238))) {
        if (!_0x328238 && _0x51bc66(_0x40d0dd))
            return _0x3f851b(_0x224258(_0x40d0dd), 0, _0x5e19ce);
    }
    return _0x40d0dd['split'](_0x328238, _0x5e19ce);
}
export default split;