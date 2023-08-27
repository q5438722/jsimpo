import _0x199c84 from'./filter.js';
import _0x55af6c from'./map.js';
import _0x55ff2e from'./.internal/baseProperty.js';
import _0x486180 from'./isArrayLikeObject.js';
;
function unzip(array) {
    if (!(array != null && array['length'])) {
        return [];
    }
    let length = 0;
    array = _0x199c84(array, group => {
        if (_0x486180(group)) {
            length = Math['max'](group['length'], length);
            return !![];
        }
    });
    let index = -1;
    const result = new Array(length);
    while (++index < length) {
        result[index] = _0x55af6c(array, _0x55ff2e(index));
    }
    return result;
}
export default unzip;