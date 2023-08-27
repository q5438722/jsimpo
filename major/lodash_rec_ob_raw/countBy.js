import _0x166724 from './.internal/baseAssignValue.js';
import _0x498afb from './reduce.js';
const hasOwnProperty = Object['prototype']['hasOwnProperty'];
function countBy(_0xa31cbe, _0x2dd267) {
    return _0x498afb(_0xa31cbe, (_0x22ce59, _0x2371ac, _0x144c8f) => {
        return _0x144c8f = _0x2dd267(_0x2371ac), hasOwnProperty['call'](_0x22ce59, _0x144c8f) ? ++_0x22ce59[_0x144c8f] : _0x166724(_0x22ce59, _0x144c8f, 1), _0x22ce59;
    }, {});
}
export default countBy;