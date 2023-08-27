import _0x1d65b3 from './slice.js';
function takeRight(_0x457e67, _0x34fe95 = 1) {
    const _0x144ce9 = _0x457e67 == null ? 0 : _0x457e67['length'];
    if (!_0x144ce9)
        return [];
    return _0x34fe95 = _0x144ce9 - _0x34fe95, _0x1d65b3(_0x457e67, _0x34fe95 < 0 ? 0 : _0x34fe95, _0x144ce9);
}
export default takeRight;