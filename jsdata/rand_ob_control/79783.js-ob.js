const {getPlatformFilterTag, normalizeNodeModules, jsPreprocessOptions} = require('@dcloudio/uni-cli-shared/lib/platform'), preprocessor = require('@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/preprocess'), FILTER_TAG = getPlatformFilterTag();
function preprocessBlock(_0x200aca) {
    return _0x200aca['content'] && (_0x200aca['content'] = preprocessor['preprocess'](_0x200aca['content'], jsPreprocessOptions['context'], { 'type': jsPreprocessOptions['type'] })['trim']()), _0x200aca;
}
module['exports'] = function parseCustomBlocks(_0xf73f35, _0x1cb926) {
    const _0x3b4004 = {
        'ewtiQ': function (_0x1880d, _0xea86bc) {
            return _0x1880d === _0xea86bc;
        },
        'SfJbR': function (_0x5ee2d8, _0x22d1c0) {
            return _0x5ee2d8 === _0x22d1c0;
        },
        'yZNtJ': function (_0x5f21e8, _0x35ad1f) {
            return _0x5f21e8(_0x35ad1f);
        },
        'rPSVX': 'renderjs',
        'LRaDc': function (_0x37f7fc, _0x4572da) {
            return _0x37f7fc === _0x4572da;
        },
        'hmYew': function (_0x463ecb, _0x30b359) {
            return _0x463ecb(_0x30b359);
        },
        'MZNyc': function (_0x12ea0b, _0x373a5b) {
            return _0x12ea0b(_0x373a5b);
        },
        'IzHfg': 'mp-',
        'OjyJx': 'script',
        'zSiMs': 'export\x20default\x20{}',
        'gUnue': 'filter-modules',
        'OwyLy': 'base64'
    };
    process['env']['UNI_PLATFORM'] && _0x3b4004['LRaDc'](process['env']['UNI_PLATFORM']['indexOf'](_0x3b4004['IzHfg']), 0x0) && !_0xf73f35['script'] && (_0xf73f35['script'] = {
        'type': _0x3b4004['OjyJx'],
        'content': _0x3b4004['zSiMs'],
        'start': 0x64,
        'attrs': {},
        'end': 0x7d
    });
    if (!_0xf73f35['template'] || !FILTER_TAG || _0x1cb926['isAppNVue'])
        return _0xf73f35['customBlocks']['length'] = 0x0, _0xf73f35;
    const _0xcd2576 = Object['create'](null);
    _0xf73f35['customBlocks'] = _0xf73f35['customBlocks']['filter'](_0x386a3d => {
        if (_0x386a3d['attrs']['module'] && (_0x3b4004['ewtiQ'](_0x386a3d['type'], FILTER_TAG) || _0x3b4004['SfJbR'](_0x386a3d['attrs']['lang'], FILTER_TAG)))
            return _0xcd2576[_0x386a3d['attrs']['module']] = _0x3b4004['yZNtJ'](preprocessBlock, _0x386a3d), !![];
        _0x386a3d['attrs']['module'] && (_0x3b4004['SfJbR'](_0x386a3d['type'], _0x3b4004['rPSVX']) || _0x3b4004['LRaDc'](_0x386a3d['attrs']['lang'], _0x3b4004['rPSVX'])) && (_0x386a3d['type'] = _0x3b4004['rPSVX'], _0x386a3d['attrs']['lang'] = 'js', _0xf73f35['renderjs'] = _0x3b4004['hmYew'](preprocessBlock, _0x386a3d), _0xcd2576[_0x386a3d['attrs']['module']] = Object['assign']({}, _0x386a3d, { 'content': '' }));
    });
    if (Object['keys'](_0xcd2576)['length']) {
        const _0x531f68 = JSON['parse'](JSON['stringify'](_0xcd2576));
        Object['keys'](_0x531f68)['forEach'](_0x10e5d9 => {
            const _0x48d36d = _0x531f68[_0x10e5d9];
            _0x48d36d['attrs']['src'] && (_0x48d36d['attrs']['src'] = _0x3b4004['MZNyc'](normalizeNodeModules, _0x48d36d['attrs']['src']));
        }), _0xf73f35['template']['attrs'][_0x3b4004['gUnue']] = Buffer['from'](JSON['stringify'](_0x531f68))['toString'](_0x3b4004['OwyLy']);
    }
    return _0xf73f35;
};
