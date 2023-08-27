import _0x32e03c from './.internal/baseSortedIndex.js';
import _0x18e2d9 from './eq.js';
function sortedIndexOf(_0x44a5ff, _0x591a1a) {
    const _0x2057ed = _0x44a5ff == null ? 0 : _0x44a5ff['length'];
    if (_0x2057ed) {
        const _0x4ccb09 = _0x32e03c(_0x44a5ff, _0x591a1a);
        if (_0x4ccb09 < _0x2057ed && _0x18e2d9(_0x44a5ff[_0x4ccb09], _0x591a1a))
            return _0x4ccb09;
    }
    return -1;
}
export default sortedIndexOf;