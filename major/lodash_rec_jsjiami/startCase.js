import _0x278fa5 from'./upperFirst.js';
import _0x3ea685 from'./words.js';
;
const startCase = string => _0x3ea685(('' + string)['replace'](/['\u2019]/g, ''))['reduce']((result, word, index) => result + (index ? ' ' : '') + _0x278fa5(word), '');
export default startCase;