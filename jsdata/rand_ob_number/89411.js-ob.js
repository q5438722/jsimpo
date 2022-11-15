const v8 = require('v8'), fs = require('fs-extra'), {createContentDigest} = require('gatsby-core-utils'), path = require('path'), slash = require('slash'), sanitizePageCreatorPluginOptions = _0x1f7b71 => {
        if (_0x1f7b71 && _0x1f7b71['path'])
            return {
                ..._0x1f7b71,
                'path': slash(path['relative'](process['cwd'](), _0x1f7b71['path']))
            };
        return _0x1f7b71;
    }, sanitiseNode = _0x445dc5 => {
        return _0x445dc5 && _0x445dc5['internal'] && _0x445dc5['internal']['contentDigest'] && (_0x445dc5['internal']['type'] === 'SiteBuildMetadata' && (delete _0x445dc5['buildTime'], delete _0x445dc5['internal']['contentDigest']), _0x445dc5['internal']['type'] === 'SitePlugin' && (delete _0x445dc5['packageJson'], delete _0x445dc5['internal']['contentDigest'], delete _0x445dc5['version'], _0x445dc5['name'] === 'gatsby-plugin-page-creator' && (_0x445dc5['id'] = createContentDigest('' + _0x445dc5['name'] + JSON['stringify'](sanitizePageCreatorPluginOptions(_0x445dc5['pluginOptions']))))), _0x445dc5['internal']['type'] === 'SitePage' && (delete _0x445dc5['internal']['contentDigest'], delete _0x445dc5['internal']['description'], delete _0x445dc5['pluginCreatorId'], delete _0x445dc5['pluginCreator___NODE'])), delete _0x445dc5['internal']['counter'], _0x445dc5;
    }, loadState = _0x415780 => {
        const _0x48f2f2 = v8['deserialize'](fs['readFileSync'](_0x415780)), _0xfd401b = _0x48f2f2['nodes']['map'](sanitiseNode), _0x437685 = new Map();
        return _0xfd401b['sort']((_0x546b43, _0x5d46a9) => _0x546b43['id']['localeCompare'](_0x5d46a9['id']))['forEach'](_0x4cccae => {
            _0x437685['set'](_0x4cccae['id'], _0x4cccae);
        }), {
            'nodes': _0x437685,
            'diskCacheSnapshot': _0x48f2f2['diskCacheSnapshot'],
            'queryResults': _0x48f2f2['queryResults']
        };
    };
exports['loadState'] = loadState;
