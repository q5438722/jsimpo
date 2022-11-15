const _0x26e4 = [
    '1196452xphQPZ',
    '774484UuxneK',
    '188PHtEKp',
    '1479QTVMLw',
    '357754SaIglQ',
    '3wSEXIK',
    '4896605hJUJyS',
    'exec',
    'location',
    '809522esPIoe',
    '124436OdsTWV'
];
function _0x237a(_0x3e10dd, _0x29002f) {
    return _0x237a = function (_0x26e446, _0x237a49) {
        _0x26e446 = _0x26e446 - 0x1ac;
        let _0x52b84c = _0x26e4[_0x26e446];
        return _0x52b84c;
    }, _0x237a(_0x3e10dd, _0x29002f);
}
const _0x5b8294 = _0x237a;
(function (_0x4cdd7d, _0x4bcb11) {
    const _0x5ad01c = _0x237a;
    while (!![]) {
        try {
            const _0x33a5bb = -parseInt(_0x5ad01c(0x1ac)) + parseInt(_0x5ad01c(0x1ad)) + -parseInt(_0x5ad01c(0x1ae)) + -parseInt(_0x5ad01c(0x1af)) + -parseInt(_0x5ad01c(0x1b0)) * parseInt(_0x5ad01c(0x1b1)) + -parseInt(_0x5ad01c(0x1b2)) * parseInt(_0x5ad01c(0x1b3)) + parseInt(_0x5ad01c(0x1b4));
            if (_0x33a5bb === _0x4bcb11)
                break;
            else
                _0x4cdd7d['push'](_0x4cdd7d['shift']());
        } catch (_0x333fd5) {
            _0x4cdd7d['push'](_0x4cdd7d['shift']());
        }
    }
}(_0x26e4, 0xd91b5));
let forcedTheme = null;
{
    const result = /\?theme=(\w+)/[_0x5b8294(0x1b5)](window[_0x5b8294(0x1b6)]['href']);
    if (result)
        forcedTheme = result[0x1];
}
console['log']('forced\x20theme', forcedTheme);
export function getForcedTheme() {
    return forcedTheme;
}
