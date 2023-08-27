import _0x4a35bf from './map.js';
import _0x2d1b61 from './.internal/baseAt.js';
import _0x46dcc1 from './.internal/basePullAt.js';
import _0x442351 from './.internal/compareAscending.js';
import _0x818623 from './.internal/isIndex.js';
function pullAt(_0x3ab4c5, ..._0xad03d9) {
    const _0x26bbc3 = _0x3ab4c5 == null ? 0 : _0x3ab4c5['length'], _0x508adb = _0x2d1b61(_0x3ab4c5, _0xad03d9);
    return _0x46dcc1(_0x3ab4c5, _0x4a35bf(_0xad03d9, _0x5d9b05 => _0x818623(_0x5d9b05, _0x26bbc3) ? +_0x5d9b05 : _0x5d9b05)['sort'](_0x442351)), _0x508adb;
}
export default pullAt;