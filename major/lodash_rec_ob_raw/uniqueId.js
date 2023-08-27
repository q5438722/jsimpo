
const idCounter = {};
function uniqueId(_0x28ac63 = '$lodash$') {
    !idCounter[_0x28ac63] && (idCounter[_0x28ac63] = 0);
    const _0x3fdea4 = ++idCounter[_0x28ac63];
    if (_0x28ac63 === '$lodash$')
        return '' + _0x3fdea4;
    return '' + _0x28ac63 + _0x3fdea4;
}
export default uniqueId;