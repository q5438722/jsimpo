const {isString, once} = require('lodash'), debug = require('debug')('gatsby-plugin-mdx:utils/default-options'), optDebug = once(_0x15bc2a => {
        debug('options', _0x15bc2a);
    });
module['exports'] = ({
    mdPlugins: _0x20620c,
    hastPlugins: _0x173dd7,
    ..._0x54dc0d
}) => {
    const _0x2abbe1 = Object['assign']({
        'defaultLayouts': {},
        'extensions': ['.mdx'],
        'mediaTypes': [
            'text/markdown',
            'text/x-markdown'
        ],
        'rehypePlugins': [],
        'remarkPlugins': [],
        'plugins': [],
        'root': process['cwd'](),
        'gatsbyRemarkPlugins': [],
        'shouldBlockNodeFromTransformation': () => ![]
    }, _0x54dc0d);
    return _0x2abbe1['gatsbyRemarkPlugins']['length'] > -0x33 * -0x9f + 0x1 * -0x1a3f + 0x116 * -0x5 && (_0x2abbe1['gatsbyRemarkPlugins'] = _0x2abbe1['gatsbyRemarkPlugins']['map'](_0x5e64bd => typeof _0x5e64bd === 'string' ? { 'resolve': _0x5e64bd } : _0x5e64bd)), _0x54dc0d['hastPlugins'] && _0x2abbe1['rehypePlugins']['length'] === -0x2 * -0xa9e + 0x2575 + -0xbbd * 0x5 && (console['warn']('hastPlugins\x20should\x20be\x20renamed\x20to\x20rehypePlugins\x20in\x20your\x20gatsby-plugin-mdx\x20config'), _0x2abbe1['rehypePlugins'] = _0x173dd7), _0x54dc0d['mdPlugins'] && _0x2abbe1['remarkPlugins']['length'] === 0xf * 0x17a + 0x2 * -0x401 + -0xb5 * 0x14 && (console['warn']('mdPlugins\x20should\x20be\x20renamed\x20to\x20remarkPlugins\x20in\x20your\x20gatsby-plugin-mdx\x20config'), _0x2abbe1['remarkPlugins'] = _0x20620c), _0x2abbe1['defaultLayouts'] && isString(_0x2abbe1['defaultLayouts']) && (_0x2abbe1['defaultLayouts'] = { 'default': _0x2abbe1['defaultLayouts'] }), optDebug(_0x2abbe1), _0x2abbe1;
};
