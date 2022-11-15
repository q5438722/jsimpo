module['exports'] = function validateWebpackConfig(_0x3ed0ee, _0x3b345c, _0x45bc1d, _0x21d022 = _0x25cf03(357)) {
    const _0x4d9c13 = _0x25cf03, _0x3973a8 = Array[_0x4d9c13(358)](_0x3ed0ee) ? _0x3ed0ee[0] : _0x3ed0ee, _0x5c1bb1 = _0x3973a8['output'][_0x4d9c13(359)];
    if (_0x5c1bb1 !== _0x3b345c['resolve'](_0x45bc1d[_0x4d9c13(360)]))
        throw new Error(_0x4d9c13(361) + _0x4d9c13(362) + _0x4d9c13(363));
    if (_0x5c1bb1 === _0x3b345c[_0x4d9c13(364)][_0x4d9c13(365)])
        throw new Error('\n\nConfiguration Error: ' + 'Do not set output directory to project root.\n');
    if (_0x21d022 === _0x4d9c13(357) && _0x3973a8[_0x4d9c13(366)][_0x4d9c13(367)] !== _0x45bc1d[_0x4d9c13(367)])
        throw new Error(_0x4d9c13(361) + _0x4d9c13(368) + 'Use the "publicPath" option instead.\n');
};