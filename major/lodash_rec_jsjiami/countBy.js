import _0x1cf48b from'./.internal/baseAssignValue.js';
import _0x5c3302 from'./reduce.js';
;
const hasOwnProperty = Object['prototype']['hasOwnProperty'];
function countBy(collection, iteratee) {
    return _0x5c3302(collection, (result, value, key) => {
        key = iteratee(value);
        if (hasOwnProperty['call'](result, key)) {
            ++result[key];
        } else {
            _0x1cf48b(result, key, 1);
        }
        return result;
    }, {});
}
export default countBy;