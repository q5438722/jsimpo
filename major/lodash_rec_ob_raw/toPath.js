import _0x12eda7 from './map.js';
import _0x3f925b from './.internal/copyArray.js';
import _0x4ba820 from './isSymbol.js';
import _0x643185 from './.internal/stringToPath.js';
import _0x1df5a7 from './.internal/toKey.js';
function toPath(_0x82d1e6) {
    if (Array['isArray'](_0x82d1e6))
        return _0x12eda7(_0x82d1e6, _0x1df5a7);
    return _0x4ba820(_0x82d1e6) ? [_0x82d1e6] : _0x3f925b(_0x643185(_0x82d1e6));
}
export default toPath;