import _0x9d41f6 from'./map.js';
import _0x7773aa from'./unzip.js';
;
function unzipWith(array, iteratee) {
    if (!(array != null && array['length'])) {
        return [];
    }
    const result = _0x7773aa(array);
    return _0x9d41f6(result, group => iteratee['apply'](undefined, group));
}
export default unzipWith;