const _0x57c1 = [
    '12100VMNMfQ',
    '@dcloudio/uni-cli-shared/lib/platform',
    '@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/preprocess',
    'content',
    'preprocess',
    'type',
    'exports',
    'env',
    'UNI_PLATFORM',
    'script',
    'template',
    'isAppNVue',
    'customBlocks',
    'length',
    'create',
    'attrs',
    'module',
    'lang',
    'renderjs',
    'assign',
    'keys',
    'parse',
    'stringify',
    'forEach',
    'src',
    'filter-modules',
    'toString',
    'base64',
    '271069obMDLW',
    '1lTPKiS',
    '170003RgGsZs',
    '155QdqUgr',
    '1519VSxpJQ',
    '297BaAAJc',
    '463kYDjxc',
    '100657GBNjna',
    '162787rYADeQ'
];
const _0x555879 = _0x5095;
(function (_0xd5e553, _0xa572c0) {
    const _0x516f37 = _0x5095;
    while (!![]) {
        try {
            const _0x69742c = -parseInt(_0x516f37(0x1d2)) * parseInt(_0x516f37(0x1d3)) + parseInt(_0x516f37(0x1d4)) + parseInt(_0x516f37(0x1d5)) * parseInt(_0x516f37(0x1d6)) + -parseInt(_0x516f37(0x1d7)) * -parseInt(_0x516f37(0x1d8)) + parseInt(_0x516f37(0x1d9)) + -parseInt(_0x516f37(0x1da)) + -parseInt(_0x516f37(0x1db));
            if (_0x69742c === _0xa572c0)
                break;
            else
                _0xd5e553['push'](_0xd5e553['shift']());
        } catch (_0x11fe2c) {
            _0xd5e553['push'](_0xd5e553['shift']());
        }
    }
}(_0x57c1, 0x3041c));
const {getPlatformFilterTag, normalizeNodeModules, jsPreprocessOptions} = require(_0x555879(0x1dc)), preprocessor = require(_0x555879(0x1dd)), FILTER_TAG = getPlatformFilterTag();
function preprocessBlock(_0x40a815) {
    const _0x40adc3 = _0x555879;
    return _0x40a815[_0x40adc3(0x1de)] && (_0x40a815[_0x40adc3(0x1de)] = preprocessor[_0x40adc3(0x1df)](_0x40a815[_0x40adc3(0x1de)], jsPreprocessOptions['context'], { 'type': jsPreprocessOptions[_0x40adc3(0x1e0)] })['trim']()), _0x40a815;
}
function _0x5095(_0x840b94, _0x353035) {
    return _0x5095 = function (_0x57c116, _0x5095a9) {
        _0x57c116 = _0x57c116 - 0x1d2;
        let _0x12249f = _0x57c1[_0x57c116];
        return _0x12249f;
    }, _0x5095(_0x840b94, _0x353035);
}
module[_0x555879(0x1e1)] = function parseCustomBlocks(_0x324172, _0x4df65a) {
    const _0x5a98e7 = _0x555879;
    process[_0x5a98e7(0x1e2)][_0x5a98e7(0x1e3)] && process[_0x5a98e7(0x1e2)][_0x5a98e7(0x1e3)]['indexOf']('mp-') === 0x0 && !_0x324172[_0x5a98e7(0x1e4)] && (_0x324172[_0x5a98e7(0x1e4)] = {
        'type': _0x5a98e7(0x1e4),
        'content': 'export\x20default\x20{}',
        'start': 0x64,
        'attrs': {},
        'end': 0x7d
    });
    if (!_0x324172[_0x5a98e7(0x1e5)] || !FILTER_TAG || _0x4df65a[_0x5a98e7(0x1e6)])
        return _0x324172[_0x5a98e7(0x1e7)][_0x5a98e7(0x1e8)] = 0x0, _0x324172;
    const _0x450c2c = Object[_0x5a98e7(0x1e9)](null);
    _0x324172[_0x5a98e7(0x1e7)] = _0x324172[_0x5a98e7(0x1e7)]['filter'](_0x1cebfd => {
        const _0x488c90 = _0x5a98e7;
        if (_0x1cebfd[_0x488c90(0x1ea)][_0x488c90(0x1eb)] && (_0x1cebfd['type'] === FILTER_TAG || _0x1cebfd[_0x488c90(0x1ea)]['lang'] === FILTER_TAG))
            return _0x450c2c[_0x1cebfd[_0x488c90(0x1ea)][_0x488c90(0x1eb)]] = preprocessBlock(_0x1cebfd), !![];
        _0x1cebfd[_0x488c90(0x1ea)][_0x488c90(0x1eb)] && (_0x1cebfd[_0x488c90(0x1e0)] === 'renderjs' || _0x1cebfd[_0x488c90(0x1ea)][_0x488c90(0x1ec)] === _0x488c90(0x1ed)) && (_0x1cebfd[_0x488c90(0x1e0)] = _0x488c90(0x1ed), _0x1cebfd['attrs'][_0x488c90(0x1ec)] = 'js', _0x324172[_0x488c90(0x1ed)] = preprocessBlock(_0x1cebfd), _0x450c2c[_0x1cebfd[_0x488c90(0x1ea)][_0x488c90(0x1eb)]] = Object[_0x488c90(0x1ee)]({}, _0x1cebfd, { 'content': '' }));
    });
    if (Object[_0x5a98e7(0x1ef)](_0x450c2c)[_0x5a98e7(0x1e8)]) {
        const _0x4b1a76 = JSON[_0x5a98e7(0x1f0)](JSON[_0x5a98e7(0x1f1)](_0x450c2c));
        Object[_0x5a98e7(0x1ef)](_0x4b1a76)[_0x5a98e7(0x1f2)](_0x274e44 => {
            const _0x10709f = _0x5a98e7, _0x4ecdea = _0x4b1a76[_0x274e44];
            _0x4ecdea[_0x10709f(0x1ea)][_0x10709f(0x1f3)] && (_0x4ecdea[_0x10709f(0x1ea)][_0x10709f(0x1f3)] = normalizeNodeModules(_0x4ecdea['attrs']['src']));
        }), _0x324172['template'][_0x5a98e7(0x1ea)][_0x5a98e7(0x1f4)] = Buffer['from'](JSON[_0x5a98e7(0x1f1)](_0x4b1a76))[_0x5a98e7(0x1f5)](_0x5a98e7(0x1f6));
    }
    return _0x324172;
};
