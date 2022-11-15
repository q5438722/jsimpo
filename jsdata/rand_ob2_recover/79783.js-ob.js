const {getPlatformFilterTag, normalizeNodeModules, jsPreprocessOptions} = require('@dcloudio/uni-cli-shared/lib/platform'), preprocessor = require(_0x5942f8(275)), FILTER_TAG = getPlatformFilterTag();
function _0x2e20(_0x4eb574, _0xc2f807) {
    return _0x2e20 = function (_0x3811c6, _0x2e200f) {
        _0x3811c6 = _0x3811c6 - 263;
        let _0x11f2b7 = _0x3811[_0x3811c6];
        return _0x11f2b7;
    }, _0x2e20(_0x4eb574, _0xc2f807);
}
function preprocessBlock(_0x375a37) {
    const _0x2447b7 = _0x5942f8;
    return _0x375a37[_0x2447b7(276)] && (_0x375a37[_0x2447b7(276)] = preprocessor[_0x2447b7(277)](_0x375a37[_0x2447b7(276)], jsPreprocessOptions['context'], { 'type': jsPreprocessOptions['type'] })[_0x2447b7(278)]()), _0x375a37;
}
module[_0x5942f8(279)] = function parseCustomBlocks(_0x5103d9, _0x1a11a8) {
    const _0x52953f = _0x5942f8;
    process['env'][_0x52953f(280)] && process[_0x52953f(281)]['UNI_PLATFORM'][_0x52953f(282)](_0x52953f(283)) === 0 && !_0x5103d9[_0x52953f(284)] && (_0x5103d9[_0x52953f(284)] = {
        'type': _0x52953f(284),
        'content': _0x52953f(285),
        'start': 100,
        'attrs': {},
        'end': 125
    });
    if (!_0x5103d9['template'] || !FILTER_TAG || _0x1a11a8[_0x52953f(286)])
        return _0x5103d9['customBlocks']['length'] = 0, _0x5103d9;
    const _0x4b2cc3 = Object[_0x52953f(287)](null);
    _0x5103d9[_0x52953f(288)] = _0x5103d9[_0x52953f(288)][_0x52953f(289)](_0x12b7a0 => {
        const _0x599c42 = _0x52953f;
        if (_0x12b7a0[_0x599c42(290)]['module'] && (_0x12b7a0[_0x599c42(291)] === FILTER_TAG || _0x12b7a0['attrs'][_0x599c42(292)] === FILTER_TAG))
            return _0x4b2cc3[_0x12b7a0[_0x599c42(290)][_0x599c42(293)]] = preprocessBlock(_0x12b7a0), !![];
        _0x12b7a0[_0x599c42(290)][_0x599c42(293)] && (_0x12b7a0[_0x599c42(291)] === _0x599c42(294) || _0x12b7a0[_0x599c42(290)][_0x599c42(292)] === _0x599c42(294)) && (_0x12b7a0[_0x599c42(291)] = 'renderjs', _0x12b7a0[_0x599c42(290)]['lang'] = 'js', _0x5103d9['renderjs'] = preprocessBlock(_0x12b7a0), _0x4b2cc3[_0x12b7a0[_0x599c42(290)][_0x599c42(293)]] = Object[_0x599c42(295)]({}, _0x12b7a0, { 'content': '' }));
    });
    if (Object[_0x52953f(296)](_0x4b2cc3)[_0x52953f(297)]) {
        const _0x2507f4 = JSON['parse'](JSON[_0x52953f(298)](_0x4b2cc3));
        Object['keys'](_0x2507f4)[_0x52953f(299)](_0x37569a => {
            const _0x30b061 = _0x52953f, _0x383cfa = _0x2507f4[_0x37569a];
            _0x383cfa[_0x30b061(290)]['src'] && (_0x383cfa['attrs']['src'] = normalizeNodeModules(_0x383cfa['attrs'][_0x30b061(300)]));
        }), _0x5103d9[_0x52953f(301)][_0x52953f(290)][_0x52953f(302)] = Buffer[_0x52953f(303)](JSON[_0x52953f(298)](_0x2507f4))[_0x52953f(304)](_0x52953f(305));
    }
    return _0x5103d9;
};