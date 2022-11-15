const _0x27af = [
    '2645hpPgcc',
    '252147WKwDyF',
    '2iPvLBJ',
    '232129XoUsPo',
    '905811vQNeqo',
    'fs-extra',
    'gatsby-core-utils',
    'path',
    'slash',
    'relative',
    'cwd',
    'internal',
    'type',
    'SiteBuildMetadata',
    'buildTime',
    'SitePlugin',
    'contentDigest',
    'version',
    'gatsby-plugin-page-creator',
    'pluginOptions',
    'SitePage',
    'description',
    'pluginCreatorId',
    'pluginCreator___NODE',
    'counter',
    'deserialize',
    'nodes',
    'map',
    'sort',
    'localeCompare',
    'queryResults',
    '82781ugqgvs',
    '2mZaKdl',
    '989vDGpbQ',
    '825fMgeVD',
    '13TAFuiB',
    '24550xwrPzr',
    '5VMdzUS'
];
const _0x1e819b = _0x4ef7;
(function (_0x5af977, _0x13941d) {
    const _0x52f984 = _0x4ef7;
    while (!![]) {
        try {
            const _0x2db212 = parseInt(_0x52f984(0x107)) * -parseInt(_0x52f984(0x108)) + -parseInt(_0x52f984(0x109)) * parseInt(_0x52f984(0x10a)) + parseInt(_0x52f984(0x10b)) * parseInt(_0x52f984(0x10c)) + -parseInt(_0x52f984(0x10d)) * -parseInt(_0x52f984(0x10e)) + -parseInt(_0x52f984(0x10f)) + parseInt(_0x52f984(0x110)) * parseInt(_0x52f984(0x111)) + parseInt(_0x52f984(0x112));
            if (_0x2db212 === _0x13941d)
                break;
            else
                _0x5af977['push'](_0x5af977['shift']());
        } catch (_0x4ae76e) {
            _0x5af977['push'](_0x5af977['shift']());
        }
    }
}(_0x27af, 0x7274a));
function _0x4ef7(_0x3ce8fc, _0x58416e) {
    return _0x4ef7 = function (_0x27afc6, _0x4ef736) {
        _0x27afc6 = _0x27afc6 - 0x107;
        let _0x5e8df5 = _0x27af[_0x27afc6];
        return _0x5e8df5;
    }, _0x4ef7(_0x3ce8fc, _0x58416e);
}
const v8 = require('v8'), fs = require(_0x1e819b(0x113)), {createContentDigest} = require(_0x1e819b(0x114)), path = require(_0x1e819b(0x115)), slash = require(_0x1e819b(0x116)), sanitizePageCreatorPluginOptions = _0x3ce04d => {
        const _0x4e2f3a = _0x1e819b;
        if (_0x3ce04d && _0x3ce04d[_0x4e2f3a(0x115)])
            return {
                ..._0x3ce04d,
                'path': slash(path[_0x4e2f3a(0x117)](process[_0x4e2f3a(0x118)](), _0x3ce04d[_0x4e2f3a(0x115)]))
            };
        return _0x3ce04d;
    }, sanitiseNode = _0x5b4087 => {
        const _0x4f0939 = _0x1e819b;
        return _0x5b4087 && _0x5b4087[_0x4f0939(0x119)] && _0x5b4087[_0x4f0939(0x119)]['contentDigest'] && (_0x5b4087['internal'][_0x4f0939(0x11a)] === _0x4f0939(0x11b) && (delete _0x5b4087[_0x4f0939(0x11c)], delete _0x5b4087[_0x4f0939(0x119)]['contentDigest']), _0x5b4087['internal']['type'] === _0x4f0939(0x11d) && (delete _0x5b4087['packageJson'], delete _0x5b4087[_0x4f0939(0x119)][_0x4f0939(0x11e)], delete _0x5b4087[_0x4f0939(0x11f)], _0x5b4087['name'] === _0x4f0939(0x120) && (_0x5b4087['id'] = createContentDigest('' + _0x5b4087['name'] + JSON['stringify'](sanitizePageCreatorPluginOptions(_0x5b4087[_0x4f0939(0x121)]))))), _0x5b4087['internal'][_0x4f0939(0x11a)] === _0x4f0939(0x122) && (delete _0x5b4087['internal']['contentDigest'], delete _0x5b4087[_0x4f0939(0x119)][_0x4f0939(0x123)], delete _0x5b4087[_0x4f0939(0x124)], delete _0x5b4087[_0x4f0939(0x125)])), delete _0x5b4087[_0x4f0939(0x119)][_0x4f0939(0x126)], _0x5b4087;
    }, loadState = _0x25534d => {
        const _0x2eb241 = _0x1e819b, _0x3f32ef = v8[_0x2eb241(0x127)](fs['readFileSync'](_0x25534d)), _0x437893 = _0x3f32ef[_0x2eb241(0x128)][_0x2eb241(0x129)](sanitiseNode), _0xb28a27 = new Map();
        return _0x437893[_0x2eb241(0x12a)]((_0x443210, _0x1d2594) => _0x443210['id'][_0x2eb241(0x12b)](_0x1d2594['id']))['forEach'](_0x300753 => {
            _0xb28a27['set'](_0x300753['id'], _0x300753);
        }), {
            'nodes': _0xb28a27,
            'diskCacheSnapshot': _0x3f32ef['diskCacheSnapshot'],
            'queryResults': _0x3f32ef[_0x2eb241(0x12c)]
        };
    };
exports['loadState'] = loadState;
