const _0x22bc = [
    '75884IyXINo',
    '1hmvXER',
    'app',
    'isArray',
    'path',
    'outputDir',
    '\x0a\x0aConfiguration\x20Error:\x20',
    'Avoid\x20modifying\x20webpack\x20output.path\x20directly.\x20',
    'Use\x20the\x20\x22outputDir\x22\x20option\x20instead.\x0a',
    'service',
    'context',
    'output',
    'publicPath',
    'Avoid\x20modifying\x20webpack\x20output.publicPath\x20directly.\x20',
    '662189junBuO',
    '521126EWLspy',
    '228096RqGSkl',
    '691732LxzNIZ',
    '76912BXMeui',
    '3043GGJsNi',
    '1jyOOdz'
];
function _0x252e(_0x380e15, _0x101eef) {
    return _0x252e = function (_0x22bcd9, _0x252e4f) {
        _0x22bcd9 = _0x22bcd9 - 0x15c;
        let _0x333831 = _0x22bc[_0x22bcd9];
        return _0x333831;
    }, _0x252e(_0x380e15, _0x101eef);
}
const _0x25cf03 = _0x252e;
(function (_0x2a3cc5, _0x8d3d7a) {
    const _0x3b9298 = _0x252e;
    while (!![]) {
        try {
            const _0x4bdc12 = parseInt(_0x3b9298(0x15c)) + -parseInt(_0x3b9298(0x15d)) + -parseInt(_0x3b9298(0x15e)) + parseInt(_0x3b9298(0x15f)) + parseInt(_0x3b9298(0x160)) + -parseInt(_0x3b9298(0x161)) * parseInt(_0x3b9298(0x162)) + parseInt(_0x3b9298(0x163)) * -parseInt(_0x3b9298(0x164));
            if (_0x4bdc12 === _0x8d3d7a)
                break;
            else
                _0x2a3cc5['push'](_0x2a3cc5['shift']());
        } catch (_0x372665) {
            _0x2a3cc5['push'](_0x2a3cc5['shift']());
        }
    }
}(_0x22bc, 0x9323c), module['exports'] = function validateWebpackConfig(_0x3ed0ee, _0x3b345c, _0x45bc1d, _0x21d022 = _0x25cf03(0x165)) {
    const _0x4d9c13 = _0x25cf03, _0x3973a8 = Array[_0x4d9c13(0x166)](_0x3ed0ee) ? _0x3ed0ee[0x0] : _0x3ed0ee, _0x5c1bb1 = _0x3973a8['output'][_0x4d9c13(0x167)];
    if (_0x5c1bb1 !== _0x3b345c['resolve'](_0x45bc1d[_0x4d9c13(0x168)]))
        throw new Error(_0x4d9c13(0x169) + _0x4d9c13(0x16a) + _0x4d9c13(0x16b));
    if (_0x5c1bb1 === _0x3b345c[_0x4d9c13(0x16c)][_0x4d9c13(0x16d)])
        throw new Error('\x0a\x0aConfiguration\x20Error:\x20' + 'Do\x20not\x20set\x20output\x20directory\x20to\x20project\x20root.\x0a');
    if (_0x21d022 === _0x4d9c13(0x165) && _0x3973a8[_0x4d9c13(0x16e)][_0x4d9c13(0x16f)] !== _0x45bc1d[_0x4d9c13(0x16f)])
        throw new Error(_0x4d9c13(0x169) + _0x4d9c13(0x170) + 'Use\x20the\x20\x22publicPath\x22\x20option\x20instead.\x0a');
});
