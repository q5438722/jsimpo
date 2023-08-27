import _0x23fe5d from'./filter.js';
import _0x23ba65 from'./filterObject.js';
import _0x504cce from'./negate.js';
;
function reject(collection, predicate) {
    const func = Array['isArray'](collection) ? _0x23fe5d : _0x23ba65;
    return func(collection, _0x504cce(predicate));
}
export default reject;