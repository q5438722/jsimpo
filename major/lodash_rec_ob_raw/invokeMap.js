import _0x38800e from './.internal/baseEach.js';
import _0x7f1bc7 from './invoke.js';
import _0xc39201 from './isArrayLike.js';
function invokeMap(_0x3ac261, _0x320083, _0xc60797) {
    let _0x58d829 = -1;
    const _0x3c0d17 = typeof _0x320083 === 'function', _0x94c8af = _0xc39201(_0x3ac261) ? new Array(_0x3ac261['length']) : [];
    return _0x38800e(_0x3ac261, _0x4980b5 => {
        _0x94c8af[++_0x58d829] = _0x3c0d17 ? _0x320083['apply'](_0x4980b5, _0xc60797) : _0x7f1bc7(_0x4980b5, _0x320083, _0xc60797);
    }), _0x94c8af;
}
export default invokeMap;