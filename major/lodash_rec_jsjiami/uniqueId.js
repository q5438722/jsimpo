
;
const idCounter = {};
function uniqueId(_0x708a3 = '$lodash$') {
    if (!idCounter[_0x708a3]) {
        idCounter[_0x708a3] = 0;
    }
    const _0x41820c = ++idCounter[_0x708a3];
    if (_0x708a3 === '$lodash$') {
        return '' + _0x41820c;
    }
    return '' + _0x708a3 + _0x41820c;
}
export default uniqueId;