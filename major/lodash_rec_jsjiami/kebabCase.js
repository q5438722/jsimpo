import _0x5b0f0c from'./words.js';
import _0x39d26e from'./toString.js';
;
const kebabCase = string => _0x5b0f0c(_0x39d26e(string)['replace'](/['\u2019]/g, ''))['reduce']((result, word, index) => result + (index ? '-' : '') + word['toLowerCase'](), '');
export default kebabCase;