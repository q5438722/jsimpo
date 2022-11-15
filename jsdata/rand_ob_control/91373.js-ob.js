const {isString, once} = require('lodash'), debug = require('debug')('gatsby-plugin-mdx:utils/default-options'), optDebug = once(_0x2b83c3 => {
        const _0x29acec = {
            'pubJZ': function (_0x11061b, _0x1f162b, _0x3c3041) {
                return _0x11061b(_0x1f162b, _0x3c3041);
            }
        };
        _0x29acec['pubJZ'](debug, 'options', _0x2b83c3);
    });
module['exports'] = ({
    mdPlugins: _0x564964,
    hastPlugins: _0x51db13,
    ..._0x2ca928
}) => {
    const _0x13062b = {
            'BVHUV': function (_0x53bedb, _0x502cfe) {
                return _0x53bedb > _0x502cfe;
            },
            'enyXH': function (_0x5d6cf3, _0x1a1d62) {
                return _0x5d6cf3 === _0x1a1d62;
            },
            'ZHmMK': function (_0x3882c0, _0x49710e) {
                return _0x3882c0 === _0x49710e;
            },
            'rLBkV': function (_0x151f12, _0x28b42e) {
                return _0x151f12(_0x28b42e);
            }
        }, _0x1493cf = Object['assign']({
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
        }, _0x2ca928);
    return _0x13062b['BVHUV'](_0x1493cf['gatsbyRemarkPlugins']['length'], 0x0) && (_0x1493cf['gatsbyRemarkPlugins'] = _0x1493cf['gatsbyRemarkPlugins']['map'](_0x47d3b8 => typeof _0x47d3b8 === 'string' ? { 'resolve': _0x47d3b8 } : _0x47d3b8)), _0x2ca928['hastPlugins'] && _0x13062b['enyXH'](_0x1493cf['rehypePlugins']['length'], 0x0) && (console['warn']('hastPlugins\x20should\x20be\x20renamed\x20to\x20rehypePlugins\x20in\x20your\x20gatsby-plugin-mdx\x20config'), _0x1493cf['rehypePlugins'] = _0x51db13), _0x2ca928['mdPlugins'] && _0x13062b['ZHmMK'](_0x1493cf['remarkPlugins']['length'], 0x0) && (console['warn']('mdPlugins\x20should\x20be\x20renamed\x20to\x20remarkPlugins\x20in\x20your\x20gatsby-plugin-mdx\x20config'), _0x1493cf['remarkPlugins'] = _0x564964), _0x1493cf['defaultLayouts'] && _0x13062b['rLBkV'](isString, _0x1493cf['defaultLayouts']) && (_0x1493cf['defaultLayouts'] = { 'default': _0x1493cf['defaultLayouts'] }), _0x13062b['rLBkV'](optDebug, _0x1493cf), _0x1493cf;
};
