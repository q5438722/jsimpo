import _0x268fac from './upperFirst.js';
import _0x16ef79 from './words.js';
import _0x4e7e82 from './toString.js';
const camelCase = _0x4493f4 => _0x16ef79(_0x4e7e82(_0x4493f4)['replace'](/['\u2019]/g, ''))['reduce']((_0x10b3b6, _0x2354c2, _0x5867b5) => {
    return _0x2354c2 = _0x2354c2['toLowerCase'](), _0x10b3b6 + (_0x5867b5 ? _0x268fac(_0x2354c2) : _0x2354c2);
}, '');
export default camelCase;