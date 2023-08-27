
const MAX_SAFE_INTEGER = 9007199254740991;
function isLength(_0x44a538) {
    return typeof _0x44a538 === 'number' && _0x44a538 > -1 && _0x44a538 % 1 == 0 && _0x44a538 <= MAX_SAFE_INTEGER;
}
export default isLength;