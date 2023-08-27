import _0x3f701c from'./.internal/baseProperty.js';
import _0x2bbc9e from'./.internal/basePropertyDeep.js';
import _0x16d437 from'./.internal/isKey.js';
import _0x3885e5 from'./.internal/toKey.js';
;
function property(path) {
    return _0x16d437(path) ? _0x3f701c(_0x3885e5(path)) : _0x2bbc9e(path);
}
export default property;