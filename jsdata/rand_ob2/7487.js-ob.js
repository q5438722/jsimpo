const _0x2e0e = [
    '138QvdeWt',
    '17Bglrsk',
    '307559GQagGC',
    '9FYhJTf',
    '39147debBnQ',
    '175801LQcONn',
    '163159VAWEsw',
    '69809OsSyPv',
    '6wRxNBw',
    'forced\x20theme',
    '264018gzPYME'
];
const _0xefbe1e = _0x4271;
(function (_0x4d8aa6, _0x40be0f) {
    const _0x5b9bf9 = _0x4271;
    while (!![]) {
        try {
            const _0x23d46c = parseInt(_0x5b9bf9(0xef)) + parseInt(_0x5b9bf9(0xf0)) * -parseInt(_0x5b9bf9(0xf1)) + -parseInt(_0x5b9bf9(0xf2)) + -parseInt(_0x5b9bf9(0xf3)) * -parseInt(_0x5b9bf9(0xf4)) + parseInt(_0x5b9bf9(0xf5)) + parseInt(_0x5b9bf9(0xf6)) + -parseInt(_0x5b9bf9(0xf7)) * parseInt(_0x5b9bf9(0xf8));
            if (_0x23d46c === _0x40be0f)
                break;
            else
                _0x4d8aa6['push'](_0x4d8aa6['shift']());
        } catch (_0x44f83a) {
            _0x4d8aa6['push'](_0x4d8aa6['shift']());
        }
    }
}(_0x2e0e, 0x374ee));
let forcedTheme = null;
{
    const result = /\?theme=(\w+)/['exec'](window['location']['href']);
    if (result)
        forcedTheme = result[0x1];
}
console['log'](_0xefbe1e(0xf9), forcedTheme);
function _0x4271(_0x762bfd, _0x169e91) {
    return _0x4271 = function (_0x2e0e3b, _0x427195) {
        _0x2e0e3b = _0x2e0e3b - 0xef;
        let _0x3e8619 = _0x2e0e[_0x2e0e3b];
        return _0x3e8619;
    }, _0x4271(_0x762bfd, _0x169e91);
}
export function getForcedTheme() {
    return forcedTheme;
}
