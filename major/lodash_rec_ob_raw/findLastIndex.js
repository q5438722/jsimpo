import _0x283e08 from './.internal/baseFindIndex.js';
import _0x46162e from './toInteger.js';
function findLastIndex(_0x46d35c, _0x11ecd3, _0x370c17) {
    const _0x5983fe = _0x46d35c == null ? 0 : _0x46d35c['length'];
    if (!_0x5983fe)
        return -1;
    let _0xfd5d9d = _0x5983fe - 1;
    return _0x370c17 !== undefined && (_0xfd5d9d = _0x46162e(_0x370c17), _0xfd5d9d = _0x370c17 < 0 ? Math['max'](_0x5983fe + _0xfd5d9d, 0) : Math['min'](_0xfd5d9d, _0x5983fe - 1)), _0x283e08(_0x46d35c, _0x11ecd3, _0xfd5d9d, !![]);
}
export default findLastIndex;