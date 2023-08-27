import _0x38cf9e from './words.js';
import _0x182c2f from './toString.js';
const snakeCase = _0x3408df => _0x38cf9e(_0x182c2f(_0x3408df)['replace'](/['\u2019]/g, ''))['reduce']((_0x8c3f8d, _0x307cd8, _0x17d030) => _0x8c3f8d + (_0x17d030 ? '_' : '') + _0x307cd8['toLowerCase'](), '');
export default snakeCase;