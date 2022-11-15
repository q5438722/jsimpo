module['exports'] = function validateWebpackConfig(_0x292997, _0x5a563a, _0x56fc50, _0x2a92c8 = 'app') {
    const _0x138c8b = Array['isArray'](_0x292997) ? _0x292997[0] : _0x292997;
    const _0x5f1474 = _0x138c8b['output']['path'];
    if (_0x5f1474 !== _0x5a563a['resolve'](_0x56fc50['outputDir'])) {
        throw new Error(_0x5257e7['RohTw']('\n\nConfiguration Error: ', 'Avoid modifying webpack output.path directly. ') + 'Use the "outputDir" option instead.\n');
    }
    if (_0x5f1474 === _0x5a563a['service']['context']) {
        throw new Error('\n\nConfiguration Error: ' + 'Do not set output directory to project root.\n');
    }
    if (_0x2a92c8 === 'app' && _0x138c8b['output']['publicPath'] !== _0x56fc50['publicPath']) {
        throw new Error('\n\nConfiguration Error: ' + 'Avoid modifying webpack output.publicPath directly. ' + 'Use the "publicPath" option instead.\n');
    }
};