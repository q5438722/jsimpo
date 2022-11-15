module['exports'] = function validateWebpackConfig(_0x555620, _0x1f9503, _0x3fb7e8, _0x343be5 = 'app') {
    const _0x5dd7dc = {
            'qNNQZ': function (_0x48601d, _0x41897c) {
                return _0x48601d !== _0x41897c;
            },
            'SsreN': function (_0x2beff9, _0x21d204) {
                return _0x2beff9 + _0x21d204;
            },
            'TOUiW': function (_0x5b7fb0, _0x409f9b) {
                return _0x5b7fb0 === _0x409f9b;
            },
            'rEdYj': 'app',
            'WlBXs': function (_0x42cb92, _0x9abc36) {
                return _0x42cb92 !== _0x9abc36;
            },
            'ylVLF': function (_0xaeb144, _0x2867a7) {
                return _0xaeb144 + _0x2867a7;
            }
        }, _0x347fbb = Array['isArray'](_0x555620) ? _0x555620[0x0] : _0x555620, _0x2f55d0 = _0x347fbb['output']['path'];
    if (_0x5dd7dc['qNNQZ'](_0x2f55d0, _0x1f9503['resolve'](_0x3fb7e8['outputDir'])))
        throw new Error(_0x5dd7dc['SsreN'](_0x5dd7dc['SsreN']('\x0a\x0aConfiguration\x20Error:\x20', 'Avoid\x20modifying\x20webpack\x20output.path\x20directly.\x20'), 'Use\x20the\x20\x22outputDir\x22\x20option\x20instead.\x0a'));
    if (_0x5dd7dc['TOUiW'](_0x2f55d0, _0x1f9503['service']['context']))
        throw new Error(_0x5dd7dc['SsreN']('\x0a\x0aConfiguration\x20Error:\x20', 'Do\x20not\x20set\x20output\x20directory\x20to\x20project\x20root.\x0a'));
    if (_0x5dd7dc['TOUiW'](_0x343be5, _0x5dd7dc['rEdYj']) && _0x5dd7dc['WlBXs'](_0x347fbb['output']['publicPath'], _0x3fb7e8['publicPath']))
        throw new Error(_0x5dd7dc['ylVLF'](_0x5dd7dc['ylVLF']('\x0a\x0aConfiguration\x20Error:\x20', 'Avoid\x20modifying\x20webpack\x20output.publicPath\x20directly.\x20'), 'Use\x20the\x20\x22publicPath\x22\x20option\x20instead.\x0a'));
};
