import _0x37ace6 from './slice.js';
import _0x43fcc7 from './toInteger.js';
function drop(_0x5ee5a9, _0x5d6ace = 1) {
    const _0x2a5d7c = _0x5ee5a9 == null ? 0 : _0x5ee5a9['length'];
    return _0x2a5d7c ? _0x37ace6(_0x5ee5a9, _0x5d6ace < 0 ? 0 : _0x43fcc7(_0x5d6ace), _0x2a5d7c) : [];
}
export default drop;