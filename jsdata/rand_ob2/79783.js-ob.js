const _0x3811 = [
    'customBlocks',
    'filter',
    'attrs',
    'type',
    'lang',
    'module',
    'renderjs',
    'assign',
    'keys',
    'length',
    'stringify',
    'forEach',
    'src',
    'template',
    'filter-modules',
    'from',
    'toString',
    'base64',
    '227mUDIzL',
    '433vyamZX',
    '2683lXZKye',
    '154XsxEKE',
    '2serHGP',
    '44101NyTyen',
    '246982DWkJVQ',
    '1OszyqE',
    '1033yurbaa',
    '491MAajCm',
    '460964rcKIwm',
    '247279WzTCMb',
    '@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/preprocess',
    'content',
    'preprocess',
    'trim',
    'exports',
    'UNI_PLATFORM',
    'env',
    'indexOf',
    'mp-',
    'script',
    'export\x20default\x20{}',
    'isAppNVue',
    'create'
];
const _0x5942f8 = _0x2e20;
(function (_0x3cd052, _0x5813b7) {
    const _0x2a60d6 = _0x2e20;
    while (!![]) {
        try {
            const _0x2607a1 = parseInt(_0x2a60d6(0x107)) * -parseInt(_0x2a60d6(0x108)) + -parseInt(_0x2a60d6(0x109)) * -parseInt(_0x2a60d6(0x10a)) + parseInt(_0x2a60d6(0x10b)) * parseInt(_0x2a60d6(0x10c)) + -parseInt(_0x2a60d6(0x10d)) * parseInt(_0x2a60d6(0x10e)) + parseInt(_0x2a60d6(0x10f)) * parseInt(_0x2a60d6(0x110)) + -parseInt(_0x2a60d6(0x111)) + parseInt(_0x2a60d6(0x112));
            if (_0x2607a1 === _0x5813b7)
                break;
            else
                _0x3cd052['push'](_0x3cd052['shift']());
        } catch (_0x5a49fa) {
            _0x3cd052['push'](_0x3cd052['shift']());
        }
    }
}(_0x3811, 0x6dc5d));
const {getPlatformFilterTag, normalizeNodeModules, jsPreprocessOptions} = require('@dcloudio/uni-cli-shared/lib/platform'), preprocessor = require(_0x5942f8(0x113)), FILTER_TAG = getPlatformFilterTag();
function _0x2e20(_0x4eb574, _0xc2f807) {
    return _0x2e20 = function (_0x3811c6, _0x2e200f) {
        _0x3811c6 = _0x3811c6 - 0x107;
        let _0x11f2b7 = _0x3811[_0x3811c6];
        return _0x11f2b7;
    }, _0x2e20(_0x4eb574, _0xc2f807);
}
function preprocessBlock(_0x375a37) {
    const _0x2447b7 = _0x5942f8;
    return _0x375a37[_0x2447b7(0x114)] && (_0x375a37[_0x2447b7(0x114)] = preprocessor[_0x2447b7(0x115)](_0x375a37[_0x2447b7(0x114)], jsPreprocessOptions['context'], { 'type': jsPreprocessOptions['type'] })[_0x2447b7(0x116)]()), _0x375a37;
}
module[_0x5942f8(0x117)] = function parseCustomBlocks(_0x5103d9, _0x1a11a8) {
    const _0x52953f = _0x5942f8;
    process['env'][_0x52953f(0x118)] && process[_0x52953f(0x119)]['UNI_PLATFORM'][_0x52953f(0x11a)](_0x52953f(0x11b)) === 0x0 && !_0x5103d9[_0x52953f(0x11c)] && (_0x5103d9[_0x52953f(0x11c)] = {
        'type': _0x52953f(0x11c),
        'content': _0x52953f(0x11d),
        'start': 0x64,
        'attrs': {},
        'end': 0x7d
    });
    if (!_0x5103d9['template'] || !FILTER_TAG || _0x1a11a8[_0x52953f(0x11e)])
        return _0x5103d9['customBlocks']['length'] = 0x0, _0x5103d9;
    const _0x4b2cc3 = Object[_0x52953f(0x11f)](null);
    _0x5103d9[_0x52953f(0x120)] = _0x5103d9[_0x52953f(0x120)][_0x52953f(0x121)](_0x12b7a0 => {
        const _0x599c42 = _0x52953f;
        if (_0x12b7a0[_0x599c42(0x122)]['module'] && (_0x12b7a0[_0x599c42(0x123)] === FILTER_TAG || _0x12b7a0['attrs'][_0x599c42(0x124)] === FILTER_TAG))
            return _0x4b2cc3[_0x12b7a0[_0x599c42(0x122)][_0x599c42(0x125)]] = preprocessBlock(_0x12b7a0), !![];
        _0x12b7a0[_0x599c42(0x122)][_0x599c42(0x125)] && (_0x12b7a0[_0x599c42(0x123)] === _0x599c42(0x126) || _0x12b7a0[_0x599c42(0x122)][_0x599c42(0x124)] === _0x599c42(0x126)) && (_0x12b7a0[_0x599c42(0x123)] = 'renderjs', _0x12b7a0[_0x599c42(0x122)]['lang'] = 'js', _0x5103d9['renderjs'] = preprocessBlock(_0x12b7a0), _0x4b2cc3[_0x12b7a0[_0x599c42(0x122)][_0x599c42(0x125)]] = Object[_0x599c42(0x127)]({}, _0x12b7a0, { 'content': '' }));
    });
    if (Object[_0x52953f(0x128)](_0x4b2cc3)[_0x52953f(0x129)]) {
        const _0x2507f4 = JSON['parse'](JSON[_0x52953f(0x12a)](_0x4b2cc3));
        Object['keys'](_0x2507f4)[_0x52953f(0x12b)](_0x37569a => {
            const _0x30b061 = _0x52953f, _0x383cfa = _0x2507f4[_0x37569a];
            _0x383cfa[_0x30b061(0x122)]['src'] && (_0x383cfa['attrs']['src'] = normalizeNodeModules(_0x383cfa['attrs'][_0x30b061(0x12c)]));
        }), _0x5103d9[_0x52953f(0x12d)][_0x52953f(0x122)][_0x52953f(0x12e)] = Buffer[_0x52953f(0x12f)](JSON[_0x52953f(0x12a)](_0x2507f4))[_0x52953f(0x130)](_0x52953f(0x131));
    }
    return _0x5103d9;
};
