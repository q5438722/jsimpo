import _0x55ff61 from './upperFirst.js';
import _0x7dc4e8 from './words.js';
const startCase = _0x2ff6b7 => _0x7dc4e8(('' + _0x2ff6b7)['replace'](/['\u2019]/g, ''))['reduce']((_0x3191a7, _0x1bc64b, _0x37ded9) => _0x3191a7 + (_0x37ded9 ? ' ' : '') + _0x55ff61(_0x1bc64b), '');
export default startCase;