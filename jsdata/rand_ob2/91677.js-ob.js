const _0x4371 = [
    'languages',
    'isArray',
    'includes',
    'exports',
    'Prism\x20doesn\x27t\x20support\x20language\x20\x27',
    'option',
    'require',
    '.js',
    'getBaseLanguageName',
    '126nhqBAp',
    '1619NWGImC',
    '1601BNBVaz',
    '273vzOgMW',
    '42ZYcLJl',
    '8680hewfLy',
    '138YnqLmD',
    '3334IovcYV',
    '3150cTtLVD',
    '174eKDaxS',
    '4WdginO',
    '35166wZIrGp',
    '47Vrzngr',
    '26141bpDZlV'
];
const _0xb99583 = _0x80d4;
function _0x80d4(_0x273597, _0x3d129f) {
    return _0x80d4 = function (_0x437198, _0x80d476) {
        _0x437198 = _0x437198 - 0xd4;
        let _0x2661e1 = _0x4371[_0x437198];
        return _0x2661e1;
    }, _0x80d4(_0x273597, _0x3d129f);
}
(function (_0x2b75cd, _0x27069a) {
    const _0x35d99c = _0x80d4;
    while (!![]) {
        try {
            const _0x41aeb8 = -parseInt(_0x35d99c(0xd4)) * parseInt(_0x35d99c(0xd5)) + parseInt(_0x35d99c(0xd6)) * -parseInt(_0x35d99c(0xd7)) + -parseInt(_0x35d99c(0xd8)) * parseInt(_0x35d99c(0xd9)) + parseInt(_0x35d99c(0xda)) * parseInt(_0x35d99c(0xdb)) + -parseInt(_0x35d99c(0xdc)) * parseInt(_0x35d99c(0xdd)) + parseInt(_0x35d99c(0xde)) * parseInt(_0x35d99c(0xdf)) + -parseInt(_0x35d99c(0xe0)) * -parseInt(_0x35d99c(0xe1));
            if (_0x41aeb8 === _0x27069a)
                break;
            else
                _0x2b75cd['push'](_0x2b75cd['shift']());
        } catch (_0x5cf5f5) {
            _0x2b75cd['push'](_0x2b75cd['shift']());
        }
    }
}(_0x4371, 0x434c8));
const Prism = require('prismjs'), prismComponents = require('prismjs/components'), getBaseLanguageName = (_0x41553d, _0x5682b9 = prismComponents) => {
        const _0x31a047 = _0x80d4;
        if (_0x5682b9['languages'][_0x41553d])
            return _0x41553d;
        return Object['keys'](_0x5682b9[_0x31a047(0xe2)])['find'](_0x1a6453 => {
            const _0x12fd91 = _0x31a047, {alias: _0x13c030} = _0x5682b9[_0x12fd91(0xe2)][_0x1a6453];
            if (!_0x13c030)
                return ![];
            return Array[_0x12fd91(0xe3)](_0x13c030) ? _0x13c030[_0x12fd91(0xe4)](_0x41553d) : _0x13c030 === _0x41553d;
        });
    };
module[_0xb99583(0xe5)] = function loadPrismLanguage(_0x392951) {
    const _0x554f15 = _0xb99583, _0x2b85d6 = getBaseLanguageName(_0x392951);
    if (!_0x2b85d6)
        throw new Error(_0x554f15(0xe6) + _0x392951 + '\x27.');
    if (Prism['languages'][_0x2b85d6])
        return;
    const _0x29b846 = prismComponents[_0x554f15(0xe2)][_0x2b85d6];
    if (_0x29b846[_0x554f15(0xe7)] === 'default')
        return;
    _0x29b846[_0x554f15(0xe8)] && (Array[_0x554f15(0xe3)](_0x29b846[_0x554f15(0xe8)]) ? _0x29b846['require']['forEach'](loadPrismLanguage) : loadPrismLanguage(_0x29b846[_0x554f15(0xe8)])), require('prismjs/components/prism-' + _0x2b85d6 + _0x554f15(0xe9));
}, module['exports'][_0xb99583(0xea)] = getBaseLanguageName;
