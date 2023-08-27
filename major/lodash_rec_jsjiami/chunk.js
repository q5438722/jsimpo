import _0x54221b from'./slice.js';
import _0x5c0811 from'./toInteger.js';
;
function chunk(array, size = 1) {
    size = Math['max'](_0x5c0811(size), 0);
    const length = array == null ? 0 : array['length'];
    if (!length || size < 1) {
        return [];
    }
    let index = 0;
    let resIndex = 0;
    const result = new Array(Math['ceil'](length / size));
    while (index < length) {
        result[resIndex++] = _0x54221b(array, index, index += size);
    }
    return result;
}
export default chunk;