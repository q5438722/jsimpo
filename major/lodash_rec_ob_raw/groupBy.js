import _0x21b8d5 from './.internal/baseAssignValue.js';
import _0x6961cc from './reduce.js';
const hasOwnProperty = Object['prototype']['hasOwnProperty'];
function groupBy(_0x3233eb, _0x2c1299) {
    return _0x6961cc(_0x3233eb, (_0x1093f6, _0x489045, _0x22b7e1) => {
        return _0x22b7e1 = _0x2c1299(_0x489045), hasOwnProperty['call'](_0x1093f6, _0x22b7e1) ? _0x1093f6[_0x22b7e1]['push'](_0x489045) : _0x21b8d5(_0x1093f6, _0x22b7e1, [_0x489045]), _0x1093f6;
    }, {});
}
export default groupBy;