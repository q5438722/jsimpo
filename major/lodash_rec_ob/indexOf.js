import _0x4bb0c1 from './.internal/baseIndexOf.js';
import _0x574e7d from './toInteger.js';
function indexOf(_0x4979bd, _0x20c8c3, _0x4d967a) {
    const _0x5068d6 = _0x4979bd == null ? 0 : _0x4979bd['length'];
    if (!_0x5068d6)
        return -1;
    let _0x5d78f9 = _0x4d967a == null ? 0 : _0x574e7d(_0x4d967a);
    return _0x5d78f9 < 0 && (_0x5d78f9 = Math['max'](_0x5068d6 + _0x5d78f9, 0)), _0x4bb0c1(_0x4979bd, _0x20c8c3, _0x5d78f9);
}
export default indexOf;