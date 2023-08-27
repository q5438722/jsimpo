import _0x556c80 from './words.js';
import _0x4e7ef2 from './toString.js';
const kebabCase = _0x4c6536 => _0x556c80(_0x4e7ef2(_0x4c6536)['replace'](/['\u2019]/g, ''))['reduce']((_0xe33954, _0x41a4f9, _0xf2cc59) => _0xe33954 + (_0xf2cc59 ? '-' : '') + _0x41a4f9['toLowerCase'](), '');
export default kebabCase;