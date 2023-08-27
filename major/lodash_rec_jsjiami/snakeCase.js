import _0x5d8eb5 from'./words.js';
import _0x406c6b from'./toString.js';
;
const snakeCase = string => _0x5d8eb5(_0x406c6b(string)['replace'](/['\u2019]/g, ''))['reduce']((result, word, index) => result + (index ? '_' : '') + word['toLowerCase'](), '');
export default snakeCase;