import _0x41e06c from './.internal/baseSortedIndex.js';
import _0x1c6960 from './eq.js';
function sortedLastIndexOf(_0x3eccbe, _0x101162) {
    const _0x369041 = _0x3eccbe == null ? 0 : _0x3eccbe['length'];
    if (_0x369041) {
        const _0x49f63b = _0x41e06c(_0x3eccbe, _0x101162, !![]) - 1;
        if (_0x1c6960(_0x3eccbe[_0x49f63b], _0x101162))
            return _0x49f63b;
    }
    return -1;
}
export default sortedLastIndexOf;