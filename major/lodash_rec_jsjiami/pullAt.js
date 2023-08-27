import _0x2ad80b from'./map.js';
import _0x37e3b7 from'./.internal/baseAt.js';
import _0x3a5c3e from'./.internal/basePullAt.js';
import _0x3932a0 from'./.internal/compareAscending.js';
import _0xd1d640 from'./.internal/isIndex.js';
;
function pullAt(array, ...indexes) {
    const length = array == null ? 0 : array['length'];
    const result = _0x37e3b7(array, indexes);
    _0x3a5c3e(array, bRmrsf['SOUWv'](_0x2ad80b, indexes, index => _0xd1d640(index, length) ? +index : index)['sort'](_0x3932a0));
    return result;
}
export default pullAt;