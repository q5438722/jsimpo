const {getPlatformFilterTag, normalizeNodeModules, jsPreprocessOptions} = require('@dcloudio/uni-cli-shared/lib/platform'), preprocessor = require('@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/preprocess'), FILTER_TAG = getPlatformFilterTag();
function preprocessBlock(_0x55c6da) {
    return _0x55c6da['content'] && (_0x55c6da['content'] = preprocessor['preprocess'](_0x55c6da['content'], jsPreprocessOptions['context'], { 'type': jsPreprocessOptions['type'] })['trim']()), _0x55c6da;
}
module['exports'] = function parseCustomBlocks(_0x1c5247, _0xf473d5) {
    process['env']['UNI_PLATFORM'] && process['env']['UNI_PLATFORM']['indexOf']('mp-') === 0x1603 + 0xfc3 + -0x5 * 0x78e && !_0x1c5247['script'] && (_0x1c5247['script'] = {
        'type': 'script',
        'content': 'export\x20default\x20{}',
        'start': 0x64,
        'attrs': {},
        'end': 0x7d
    });
    if (!_0x1c5247['template'] || !FILTER_TAG || _0xf473d5['isAppNVue'])
        return _0x1c5247['customBlocks']['length'] = 0x13e6 + 0x122b + 0x1 * -0x2611, _0x1c5247;
    const _0x1cd40c = Object['create'](null);
    _0x1c5247['customBlocks'] = _0x1c5247['customBlocks']['filter'](_0x363696 => {
        if (_0x363696['attrs']['module'] && (_0x363696['type'] === FILTER_TAG || _0x363696['attrs']['lang'] === FILTER_TAG))
            return _0x1cd40c[_0x363696['attrs']['module']] = preprocessBlock(_0x363696), !![];
        _0x363696['attrs']['module'] && (_0x363696['type'] === 'renderjs' || _0x363696['attrs']['lang'] === 'renderjs') && (_0x363696['type'] = 'renderjs', _0x363696['attrs']['lang'] = 'js', _0x1c5247['renderjs'] = preprocessBlock(_0x363696), _0x1cd40c[_0x363696['attrs']['module']] = Object['assign']({}, _0x363696, { 'content': '' }));
    });
    if (Object['keys'](_0x1cd40c)['length']) {
        const _0x58b627 = JSON['parse'](JSON['stringify'](_0x1cd40c));
        Object['keys'](_0x58b627)['forEach'](_0x26697c => {
            const _0x34b7ad = _0x58b627[_0x26697c];
            _0x34b7ad['attrs']['src'] && (_0x34b7ad['attrs']['src'] = normalizeNodeModules(_0x34b7ad['attrs']['src']));
        }), _0x1c5247['template']['attrs']['filter-modules'] = Buffer['from'](JSON['stringify'](_0x58b627))['toString']('base64');
    }
    return _0x1c5247;
};
