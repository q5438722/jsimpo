const _0x3cfc = [
    'SitePlugin',
    'packageJson',
    'version',
    'name',
    'gatsby-plugin-page-creator',
    'zOaNw',
    'stringify',
    'pluginOptions',
    'SitePage',
    'description',
    'pluginCreatorId',
    'pluginCreator___NODE',
    'deserialize',
    'readFileSync',
    'map',
    'sort',
    'localeCompare',
    'forEach',
    'set',
    'diskCacheSnapshot',
    'queryResults',
    'loadState',
    '16dVEsKb',
    '37540cNTazG',
    '1523820knTehi',
    '25306ZDzfkX',
    '6cAQbhw',
    '1365414zDhRGT',
    '1285734GhJTDE',
    '1RAhkbe',
    '3XGqarw',
    '390826Xhfoww',
    '651627YjNdxj',
    'fs-extra',
    'gatsby-core-utils',
    'slash',
    'path',
    'HkpEY',
    'internal',
    'contentDigest',
    'SiteBuildMetadata',
    'buildTime',
    'type'
];
const _0x45f639 = _0x2e84;
(function (_0x39f6d7, _0x26ab6f) {
    const _0x2ae6ad = _0x2e84;
    while (!![]) {
        try {
            const _0x4e75f1 = -parseInt(_0x2ae6ad(0xdc)) * -parseInt(_0x2ae6ad(0xdd)) + -parseInt(_0x2ae6ad(0xde)) + -parseInt(_0x2ae6ad(0xdf)) * -parseInt(_0x2ae6ad(0xe0)) + -parseInt(_0x2ae6ad(0xe1)) + -parseInt(_0x2ae6ad(0xe2)) * -parseInt(_0x2ae6ad(0xe3)) + -parseInt(_0x2ae6ad(0xe4)) * -parseInt(_0x2ae6ad(0xe5)) + parseInt(_0x2ae6ad(0xe6));
            if (_0x4e75f1 === _0x26ab6f)
                break;
            else
                _0x39f6d7['push'](_0x39f6d7['shift']());
        } catch (_0xaaf9) {
            _0x39f6d7['push'](_0x39f6d7['shift']());
        }
    }
}(_0x3cfc, 0xd9f4 + -0xb4506 + 0x19442b));
const v8 = require('v8'), fs = require(_0x45f639(0xe7)), {createContentDigest} = require(_0x45f639(0xe8)), path = require('path'), slash = require(_0x45f639(0xe9)), sanitizePageCreatorPluginOptions = _0x32f7ad => {
        const _0x1f1081 = _0x45f639, _0x2fcb56 = {
                'HkpEY': function (_0x1a6b42, _0x57d3de) {
                    return _0x1a6b42(_0x57d3de);
                }
            };
        if (_0x32f7ad && _0x32f7ad[_0x1f1081(0xea)])
            return {
                ..._0x32f7ad,
                'path': _0x2fcb56[_0x1f1081(0xeb)](slash, path['relative'](process['cwd'](), _0x32f7ad[_0x1f1081(0xea)]))
            };
        return _0x32f7ad;
    }, sanitiseNode = _0x5ad344 => {
        const _0x4f4441 = _0x45f639, _0x29fee0 = {
                'NoYGl': function (_0x213a97, _0x1c8035) {
                    return _0x213a97 === _0x1c8035;
                },
                'zOaNw': function (_0x2cb40b, _0x8534c5) {
                    return _0x2cb40b(_0x8534c5);
                }
            };
        return _0x5ad344 && _0x5ad344['internal'] && _0x5ad344[_0x4f4441(0xec)][_0x4f4441(0xed)] && (_0x5ad344[_0x4f4441(0xec)]['type'] === _0x4f4441(0xee) && (delete _0x5ad344[_0x4f4441(0xef)], delete _0x5ad344[_0x4f4441(0xec)]['contentDigest']), _0x29fee0['NoYGl'](_0x5ad344[_0x4f4441(0xec)][_0x4f4441(0xf0)], _0x4f4441(0xf1)) && (delete _0x5ad344[_0x4f4441(0xf2)], delete _0x5ad344['internal'][_0x4f4441(0xed)], delete _0x5ad344[_0x4f4441(0xf3)], _0x5ad344[_0x4f4441(0xf4)] === _0x4f4441(0xf5) && (_0x5ad344['id'] = _0x29fee0[_0x4f4441(0xf6)](createContentDigest, '' + _0x5ad344[_0x4f4441(0xf4)] + JSON[_0x4f4441(0xf7)](_0x29fee0[_0x4f4441(0xf6)](sanitizePageCreatorPluginOptions, _0x5ad344[_0x4f4441(0xf8)]))))), _0x29fee0['NoYGl'](_0x5ad344[_0x4f4441(0xec)][_0x4f4441(0xf0)], _0x4f4441(0xf9)) && (delete _0x5ad344[_0x4f4441(0xec)][_0x4f4441(0xed)], delete _0x5ad344[_0x4f4441(0xec)][_0x4f4441(0xfa)], delete _0x5ad344[_0x4f4441(0xfb)], delete _0x5ad344[_0x4f4441(0xfc)])), delete _0x5ad344[_0x4f4441(0xec)]['counter'], _0x5ad344;
    }, loadState = _0x515443 => {
        const _0x46b617 = _0x45f639, _0x29066e = v8[_0x46b617(0xfd)](fs[_0x46b617(0xfe)](_0x515443)), _0x433d98 = _0x29066e['nodes'][_0x46b617(0xff)](sanitiseNode), _0x2df1ca = new Map();
        return _0x433d98[_0x46b617(0x100)]((_0x4d3ccd, _0x209d4b) => _0x4d3ccd['id'][_0x46b617(0x101)](_0x209d4b['id']))[_0x46b617(0x102)](_0x263b48 => {
            const _0x2ca39a = _0x46b617;
            _0x2df1ca[_0x2ca39a(0x103)](_0x263b48['id'], _0x263b48);
        }), {
            'nodes': _0x2df1ca,
            'diskCacheSnapshot': _0x29066e[_0x46b617(0x104)],
            'queryResults': _0x29066e[_0x46b617(0x105)]
        };
    };
function _0x2e84(_0x1dbf12, _0x1a328c) {
    return _0x2e84 = function (_0xce714b, _0x48fed4) {
        _0xce714b = _0xce714b - (-0x2 * -0x1248 + 0xd * 0x6d + -0x1 * 0x293d);
        let _0x131930 = _0x3cfc[_0xce714b];
        return _0x131930;
    }, _0x2e84(_0x1dbf12, _0x1a328c);
}
exports[_0x45f639(0x106)] = loadState;
