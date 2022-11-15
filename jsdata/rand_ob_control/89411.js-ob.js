const v8 = require('v8'), fs = require('fs-extra'), {createContentDigest} = require('gatsby-core-utils'), path = require('path'), slash = require('slash'), sanitizePageCreatorPluginOptions = _0x10893a => {
        const _0x2f83a4 = {
            'vCUod': function (_0x2511d5, _0xb6cada) {
                return _0x2511d5(_0xb6cada);
            }
        };
        if (_0x10893a && _0x10893a['path'])
            return {
                ..._0x10893a,
                'path': _0x2f83a4['vCUod'](slash, path['relative'](process['cwd'](), _0x10893a['path']))
            };
        return _0x10893a;
    }, sanitiseNode = _0x4bc64f => {
        const _0x52fa48 = {
            'tSjIE': function (_0x1b4de2, _0x1f511d) {
                return _0x1b4de2 === _0x1f511d;
            },
            'ZvQiK': function (_0x4cef9f, _0x2fa233) {
                return _0x4cef9f === _0x2fa233;
            },
            'isutD': function (_0x137580, _0x56e2bb) {
                return _0x137580(_0x56e2bb);
            },
            'azXAu': function (_0x3f1cda, _0x584969) {
                return _0x3f1cda(_0x584969);
            }
        };
        return _0x4bc64f && _0x4bc64f['internal'] && _0x4bc64f['internal']['contentDigest'] && (_0x52fa48['tSjIE'](_0x4bc64f['internal']['type'], 'SiteBuildMetadata') && (delete _0x4bc64f['buildTime'], delete _0x4bc64f['internal']['contentDigest']), _0x52fa48['tSjIE'](_0x4bc64f['internal']['type'], 'SitePlugin') && (delete _0x4bc64f['packageJson'], delete _0x4bc64f['internal']['contentDigest'], delete _0x4bc64f['version'], _0x52fa48['ZvQiK'](_0x4bc64f['name'], 'gatsby-plugin-page-creator') && (_0x4bc64f['id'] = _0x52fa48['isutD'](createContentDigest, '' + _0x4bc64f['name'] + JSON['stringify'](_0x52fa48['azXAu'](sanitizePageCreatorPluginOptions, _0x4bc64f['pluginOptions']))))), _0x52fa48['ZvQiK'](_0x4bc64f['internal']['type'], 'SitePage') && (delete _0x4bc64f['internal']['contentDigest'], delete _0x4bc64f['internal']['description'], delete _0x4bc64f['pluginCreatorId'], delete _0x4bc64f['pluginCreator___NODE'])), delete _0x4bc64f['internal']['counter'], _0x4bc64f;
    }, loadState = _0x199cb9 => {
        const _0x5c1682 = v8['deserialize'](fs['readFileSync'](_0x199cb9)), _0x5c8b63 = _0x5c1682['nodes']['map'](sanitiseNode), _0x3136c4 = new Map();
        return _0x5c8b63['sort']((_0x42b0a4, _0x571ac6) => _0x42b0a4['id']['localeCompare'](_0x571ac6['id']))['forEach'](_0x4a75df => {
            _0x3136c4['set'](_0x4a75df['id'], _0x4a75df);
        }), {
            'nodes': _0x3136c4,
            'diskCacheSnapshot': _0x5c1682['diskCacheSnapshot'],
            'queryResults': _0x5c1682['queryResults']
        };
    };
exports['loadState'] = loadState;
