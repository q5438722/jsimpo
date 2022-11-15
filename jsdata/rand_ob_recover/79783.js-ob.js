const {getPlatformFilterTag, normalizeNodeModules, jsPreprocessOptions} = require(_0x47649c(177)), preprocessor = require(_0x47649c(178)), FILTER_TAG = getPlatformFilterTag();
function preprocessBlock(_0x494fb6) {
    const _0x3cfc87 = _0x47649c;
    return _0x494fb6['content'] && (_0x494fb6[_0x3cfc87(179)] = preprocessor[_0x3cfc87(180)](_0x494fb6[_0x3cfc87(179)], jsPreprocessOptions['context'], { 'type': jsPreprocessOptions[_0x3cfc87(181)] })[_0x3cfc87(182)]()), _0x494fb6;
}
module['exports'] = function parseCustomBlocks(_0xb8ba0c, _0x245b50) {
    const _0x4814b4 = _0x47649c, _0x3a523c = {
            'vOVBm': function (_0x22afb9, _0x1ce33a) {
                return _0x22afb9 === _0x1ce33a;
            },
            'mWYUn': _0x4814b4(183),
            'cEeZc': function (_0x2a0fc1, _0x28652d) {
                return _0x2a0fc1(_0x28652d);
            },
            'fxBwb': _0x4814b4(184),
            'JiEOB': _0x4814b4(185),
            'tjtHa': _0x4814b4(186),
            'MNqQh': _0x4814b4(187)
        };
    process[_0x4814b4(188)][_0x4814b4(189)] && process[_0x4814b4(188)]['UNI_PLATFORM']['indexOf'](_0x3a523c[_0x4814b4(190)]) === -1 * 4042 + 990 * 1 + 7 * 436 && !_0xb8ba0c[_0x4814b4(191)] && (_0xb8ba0c[_0x4814b4(191)] = {
        'type': _0x4814b4(191),
        'content': _0x3a523c[_0x4814b4(192)],
        'start': 100,
        'attrs': {},
        'end': 125
    });
    if (!_0xb8ba0c[_0x4814b4(193)] || !FILTER_TAG || _0x245b50[_0x4814b4(194)])
        return _0xb8ba0c[_0x4814b4(195)][_0x4814b4(196)] = -75 * 120 + -4982 + 2 * 6991, _0xb8ba0c;
    const _0x5b0aa2 = Object[_0x4814b4(197)](null);
    _0xb8ba0c['customBlocks'] = _0xb8ba0c[_0x4814b4(195)]['filter'](_0x2c38e9 => {
        const _0x23a54a = _0x4814b4;
        if (_0x2c38e9[_0x23a54a(198)][_0x23a54a(199)] && (_0x3a523c['vOVBm'](_0x2c38e9['type'], FILTER_TAG) || _0x3a523c[_0x23a54a(200)](_0x2c38e9[_0x23a54a(198)][_0x23a54a(201)], FILTER_TAG)))
            return _0x5b0aa2[_0x2c38e9['attrs']['module']] = preprocessBlock(_0x2c38e9), !![];
        _0x2c38e9[_0x23a54a(198)]['module'] && (_0x3a523c[_0x23a54a(200)](_0x2c38e9[_0x23a54a(181)], _0x3a523c[_0x23a54a(202)]) || _0x2c38e9[_0x23a54a(198)]['lang'] === _0x3a523c[_0x23a54a(202)]) && (_0x2c38e9[_0x23a54a(181)] = _0x3a523c[_0x23a54a(202)], _0x2c38e9[_0x23a54a(198)][_0x23a54a(201)] = 'js', _0xb8ba0c[_0x23a54a(183)] = _0x3a523c[_0x23a54a(203)](preprocessBlock, _0x2c38e9), _0x5b0aa2[_0x2c38e9[_0x23a54a(198)][_0x23a54a(199)]] = Object[_0x23a54a(204)]({}, _0x2c38e9, { 'content': '' }));
    });
    if (Object[_0x4814b4(205)](_0x5b0aa2)[_0x4814b4(196)]) {
        const _0x498930 = JSON[_0x4814b4(206)](JSON[_0x4814b4(207)](_0x5b0aa2));
        Object[_0x4814b4(205)](_0x498930)[_0x4814b4(208)](_0xdf678d => {
            const _0x8dea7c = _0x4814b4, _0x710396 = _0x498930[_0xdf678d];
            _0x710396[_0x8dea7c(198)][_0x8dea7c(209)] && (_0x710396[_0x8dea7c(198)][_0x8dea7c(209)] = _0x3a523c['cEeZc'](normalizeNodeModules, _0x710396[_0x8dea7c(198)][_0x8dea7c(209)]));
        }), _0xb8ba0c[_0x4814b4(193)][_0x4814b4(198)][_0x3a523c['tjtHa']] = Buffer[_0x4814b4(210)](JSON['stringify'](_0x498930))['toString'](_0x3a523c[_0x4814b4(211)]);
    }
    return _0xb8ba0c;
};