import _0x44981f from'./map.js';
import _0xc1828b from'./.internal/copyArray.js';
import _0x16f0ad from'./isSymbol.js';
import _0x9a2284 from'./.internal/stringToPath.js';
import _0x274b38 from'./.internal/toKey.js';
;
function toPath(value) {
    if (Array['isArray'](value)) {
        return _0x44981f(value, _0x274b38);
    }
    return _0x16f0ad(value) ? [value] : _0xc1828b(_0x9a2284(value));
}
export default toPath;