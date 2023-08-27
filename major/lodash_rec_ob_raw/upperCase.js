import _0x5664cb from './words.js';
import _0x63fa3b from './toString.js';
const upperCase = _0x4ea065 => _0x5664cb(_0x63fa3b(_0x4ea065)['replace'](/['\u2019]/g, ''))['reduce']((_0x5ada82, _0xa0ff20, _0x288d28) => _0x5ada82 + (_0x288d28 ? ' ' : '') + _0xa0ff20['toUpperCase'](), '');
export default upperCase;