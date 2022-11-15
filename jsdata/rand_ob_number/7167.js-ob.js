module['exports'] = function validateWebpackConfig(_0xaaa9ac, _0x334246, _0x49d92d, _0x1ff998 = 'app') {
    const _0x3cca59 = Array['isArray'](_0xaaa9ac) ? _0xaaa9ac[0x210b + 0x2 * 0x15 + -0x1 * 0x2135] : _0xaaa9ac, _0x55fd30 = _0x3cca59['output']['path'];
    if (_0x55fd30 !== _0x334246['resolve'](_0x49d92d['outputDir']))
        throw new Error('\x0a\x0aConfiguration\x20Error:\x20' + 'Avoid\x20modifying\x20webpack\x20output.path\x20directly.\x20' + 'Use\x20the\x20\x22outputDir\x22\x20option\x20instead.\x0a');
    if (_0x55fd30 === _0x334246['service']['context'])
        throw new Error('\x0a\x0aConfiguration\x20Error:\x20' + 'Do\x20not\x20set\x20output\x20directory\x20to\x20project\x20root.\x0a');
    if (_0x1ff998 === 'app' && _0x3cca59['output']['publicPath'] !== _0x49d92d['publicPath'])
        throw new Error('\x0a\x0aConfiguration\x20Error:\x20' + 'Avoid\x20modifying\x20webpack\x20output.publicPath\x20directly.\x20' + 'Use\x20the\x20\x22publicPath\x22\x20option\x20instead.\x0a');
};
