
;
const MAX_SAFE_INTEGER = 9007199254740991;
function isLength(_0x5e86dd) {
    return typeof _0x5e86dd === 'number' && _0x5e86dd > -1 && _0x5e86dd % 1 == 0 && _0x5e86dd <= MAX_SAFE_INTEGER;
}
export default isLength;