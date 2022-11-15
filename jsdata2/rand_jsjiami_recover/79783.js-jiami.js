const {getPlatformFilterTag, normalizeNodeModules, jsPreprocessOptions} = require('@dcloudio/uni-cli-shared/lib/platform');
const preprocessor = require('@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader/preprocess');
const FILTER_TAG = getPlatformFilterTag();
function preprocessBlock(_0xf0ac8a) {
    if (_0xf0ac8a['content']) {
        _0xf0ac8a['content'] = preprocessor['preprocess'](_0xf0ac8a['content'], jsPreprocessOptions['context'], { 'type': jsPreprocessOptions['type'] })['trim']();
    }
    return _0xf0ac8a;
}
module['exports'] = function parseCustomBlocks(_0x1174df, _0x58c43f) {
    if (process['env']['UNI_PLATFORM'] && process['env']['UNI_PLATFORM']['indexOf']('mp-') === 0 && !_0x1174df['script']) {
        _0x1174df['script'] = {
            'type': 'script',
            'content': 'export default {}',
            'start': 100,
            'attrs': {},
            'end': 125
        };
    }
    if (!_0x1174df['template'] || !FILTER_TAG || _0x58c43f['isAppNVue']) {
        _0x1174df['customBlocks']['length'] = 0;
        return _0x1174df;
    }
    const _0x4cc4be = Object['create'](null);
    _0x1174df['customBlocks'] = _0x1174df['customBlocks']['filter'](_0x1a10d => {
        if (_0x1a10d['attrs']['module'] && (_0x1a10d['type'] === FILTER_TAG || _0x1a10d['attrs']['lang'] === FILTER_TAG)) {
            if ('OBQfN' !== 'teeVA') {
                _0x4cc4be[_0x1a10d['attrs']['module']] = preprocessBlock(_0x1a10d);
                return !![];
            } else {
                _0x1174df['customBlocks']['length'] = 0;
                return _0x1174df;
            }
        }
        if (_0x1a10d['attrs']['module'] && (_0x1a10d['type'] === 'renderjs' || _0x1a10d['attrs']['lang'] === 'renderjs')) {
            if ('LZqYi' === 'vCKIn') {
                if (_0x1a10d['content']) {
                    _0x1a10d['content'] = preprocessor['preprocess'](_0x1a10d['content'], jsPreprocessOptions['context'], { 'type': jsPreprocessOptions['type'] })['trim']();
                }
                return _0x1a10d;
            } else {
                _0x1a10d['type'] = 'renderjs';
                _0x1a10d['attrs']['lang'] = 'js';
                _0x1174df['renderjs'] = preprocessBlock(_0x1a10d);
                _0x4cc4be[_0x1a10d['attrs']['module']] = Object['assign']({}, _0x1a10d, { 'content': '' });
            }
        }
    });
    if (Object['keys'](_0x4cc4be)['length']) {
        if ('epPdh' !== 'epPdh') {
            if (block['attrs']['module'] && (block['type'] === FILTER_TAG || block['attrs']['lang'] === FILTER_TAG)) {
                _0x4cc4be[block['attrs']['module']] = preprocessBlock(block);
                return !![];
            }
            if (block['attrs']['module'] && (block['type'] === 'renderjs' || block['attrs']['lang'] === 'renderjs')) {
                block['type'] = 'renderjs';
                block['attrs']['lang'] = 'js';
                _0x1174df['renderjs'] = preprocessBlock(block);
                _0x4cc4be[block['attrs']['module']] = Object['assign']({}, block, { 'content': '' });
            }
        } else {
            const _0x31a46e = JSON['parse'](JSON['stringify'](_0x4cc4be));
            Object['keys'](_0x31a46e)['forEach'](_0x3f6fbd => {
                const _0x45ee21 = _0x31a46e[_0x3f6fbd];
                if (_0x45ee21['attrs']['src']) {
                    _0x45ee21['attrs']['src'] = normalizeNodeModules(_0x45ee21['attrs']['src']);
                }
            });
            _0x1174df['template']['attrs']['filter-modules'] = Buffer['from'](JSON['stringify'](_0x31a46e))['toString']('base64');
        }
    }
    return _0x1174df;
};