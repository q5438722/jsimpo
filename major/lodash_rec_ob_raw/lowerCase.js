import _0x3c8e68 from './words.js';
import _0x33ffba from './toString.js';
const reQuotes = /['\u2019]/g, lowerCase = _0x43352d => _0x3c8e68(_0x33ffba(_0x43352d)['replace'](reQuotes, ''))['reduce']((_0xde0df1, _0x2934d3, _0x47eed2) => _0xde0df1 + (_0x47eed2 ? ' ' : '') + _0x2934d3['toLowerCase'](), '');
export default lowerCase;