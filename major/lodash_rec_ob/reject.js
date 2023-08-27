import _0x18d019 from './filter.js';
import _0x4f1d50 from './filterObject.js';
import _0x514d95 from './negate.js';
function reject(_0x3e3feb, _0xc9a4b) {
    const _0x138ec6 = Array['isArray'](_0x3e3feb) ? _0x18d019 : _0x4f1d50;
    return _0x138ec6(_0x3e3feb, _0x514d95(_0xc9a4b));
}
export default reject;