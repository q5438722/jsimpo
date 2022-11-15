const _0x2dec = [
    '58173GdhmfY',
    '40844eJOwDO',
    '163832xzXoRQ',
    '67675CwhJnL',
    '1UakzCq',
    '327147NKmdVo',
    '545RvZedh',
    '487jRWjdX',
    'path',
    'gatsby-source-filesystem',
    'onCreateNode',
    'internal',
    'MarkdownRemark',
    'nOwFC',
    'slug',
    'gniBi',
    '\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20posts:\x20allMarkdownRemark\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20edges\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20node\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fields\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20slug\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20allFakeData\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20nodes\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fields\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20slug\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a\x20\x20',
    'src/templates/blog-post.js',
    'resolve',
    'src/templates/preview-item.js',
    'edges',
    'forEach',
    'allFakeData',
    'nodes',
    'fields',
    'src/pages/page-2.js',
    'ZZQPy',
    '/foo/@something/bar',
    '/client-only-paths/static',
    'src/templates/static-page.js',
    '/redirect-without-page',
    'tFbrj',
    '/redirect-search-hash',
    'onCreatePage',
    'match',
    'matchPath',
    '/client-only-paths/*',
    'ZRQub',
    '/pt',
    'CgAaM',
    'AhDRG',
    'context',
    'includes',
    'test',
    'Page\x20reporting\x20to\x20have\x20trailing\x20slash,\x20doesn\x27t\x20have\x20it',
    'no-trailing-slash',
    'createResolvers',
    'String',
    '4767FDjNUt',
    '83dLfqxb'
];
const _0x458930 = _0x1b0d;
function _0x1b0d(_0x253ac0, _0x1b658a) {
    return _0x1b0d = function (_0x241a8d, _0x32ebe8) {
        _0x241a8d = _0x241a8d - (0x22b3 + -0x1e08 + -0x30e * 0x1);
        let _0x39e10b = _0x2dec[_0x241a8d];
        return _0x39e10b;
    }, _0x1b0d(_0x253ac0, _0x1b658a);
}
(function (_0x23d2c0, _0x3b1058) {
    const _0x234505 = _0x1b0d;
    while (!![]) {
        try {
            const _0x26e676 = parseInt(_0x234505(0x19d)) * parseInt(_0x234505(0x19e)) + parseInt(_0x234505(0x19f)) + -parseInt(_0x234505(0x1a0)) + -parseInt(_0x234505(0x1a1)) + parseInt(_0x234505(0x1a2)) + parseInt(_0x234505(0x1a3)) * -parseInt(_0x234505(0x1a4)) + parseInt(_0x234505(0x1a5)) * parseInt(_0x234505(0x1a6));
            if (_0x26e676 === _0x3b1058)
                break;
            else
                _0x23d2c0['push'](_0x23d2c0['shift']());
        } catch (_0x55d265) {
            _0x23d2c0['push'](_0x23d2c0['shift']());
        }
    }
}(_0x2dec, -0x1 * -0x357d4 + -0x1 * 0x39457 + -0x42100 * -0x1));
const path = require(_0x458930(0x1a7)), {createFilePath} = require(_0x458930(0x1a8));
exports[_0x458930(0x1a9)] = function onCreateNode({
    actions: {createNodeField: _0x392bc5},
    node: _0xa657dc,
    getNode: _0x1d4ff4
}) {
    const _0x348e0d = _0x458930, _0x2dd65a = {
            'nOwFC': function (_0x3b5448, _0x8511d8) {
                return _0x3b5448(_0x8511d8);
            }
        };
    switch (_0xa657dc[_0x348e0d(0x1aa)]['type']) {
    case _0x348e0d(0x1ab): {
            const _0x16adf9 = createFilePath({
                'node': _0xa657dc,
                'getNode': _0x1d4ff4
            });
            _0x2dd65a[_0x348e0d(0x1ac)](_0x392bc5, {
                'name': _0x348e0d(0x1ad),
                'value': _0x16adf9,
                'node': _0xa657dc
            });
            break;
        }
    default: {
            break;
        }
    }
}, exports['createPages'] = async function createPages({
    actions: {
        createPage: _0x2209b9,
        createRedirect: _0x370767
    },
    graphql: _0xc3a948
}) {
    const _0x685cd4 = _0x458930, _0x413f20 = {
            'gniBi': function (_0x21d843, _0x1daeea) {
                return _0x21d843(_0x1daeea);
            },
            'sRkhB': function (_0x28b4ed, _0x47c23a) {
                return _0x28b4ed(_0x47c23a);
            },
            'ZZQPy': function (_0x3b15fa, _0x5c426e) {
                return _0x3b15fa(_0x5c426e);
            },
            'tFbrj': function (_0x150d06, _0x55ed32) {
                return _0x150d06(_0x55ed32);
            }
        }, {data: _0x3632e3} = await _0x413f20[_0x685cd4(0x1ae)](_0xc3a948, _0x685cd4(0x1af)), _0x450882 = path['resolve'](_0x685cd4(0x1b0)), _0x2d9f1c = path[_0x685cd4(0x1b1)](_0x685cd4(0x1b2));
    _0x3632e3['posts'][_0x685cd4(0x1b3)][_0x685cd4(0x1b4)](({node: _0x4fcc08}) => {
        const {slug: _0x2af2cf} = _0x4fcc08['fields'];
        _0x2209b9({
            'path': _0x2af2cf,
            'component': _0x450882,
            'context': { 'slug': _0x2af2cf }
        });
    }), _0x3632e3[_0x685cd4(0x1b5)][_0x685cd4(0x1b6)][_0x685cd4(0x1b4)](_0x3ec522 => {
        const _0x36ce60 = _0x685cd4, {slug: _0x199863} = _0x3ec522[_0x36ce60(0x1b7)];
        _0x2209b9({
            'path': _0x199863,
            'component': _0x2d9f1c,
            'context': { 'slug': _0x199863 }
        });
    }), _0x413f20['sRkhB'](_0x2209b9, {
        'path': '/안녕',
        'component': path[_0x685cd4(0x1b1)](_0x685cd4(0x1b8))
    }), _0x413f20[_0x685cd4(0x1b9)](_0x2209b9, {
        'path': _0x685cd4(0x1ba),
        'component': path['resolve']('src/pages/page-2.js')
    }), _0x413f20['tFbrj'](_0x2209b9, {
        'path': _0x685cd4(0x1bb),
        'component': path[_0x685cd4(0x1b1)](_0x685cd4(0x1bc))
    }), _0x413f20['tFbrj'](_0x370767, {
        'fromPath': _0x685cd4(0x1bd),
        'toPath': '/',
        'isPermanent': !![],
        'redirectInBrowser': !![]
    }), _0x413f20[_0x685cd4(0x1be)](_0x370767, {
        'fromPath': '/redirect',
        'toPath': '/',
        'isPermanent': !![],
        'redirectInBrowser': !![]
    }), _0x370767({
        'fromPath': '/redirect-two',
        'toPath': _0x685cd4(0x1bf),
        'isPermanent': !![],
        'redirectInBrowser': !![]
    });
}, exports[_0x458930(0x1c0)] = async ({
    page: _0x34e36f,
    actions: _0x2b1c68
}) => {
    const _0x31a564 = _0x458930, _0x1cd22b = {
            'CgAaM': function (_0x2390fd, _0xe0d885) {
                return _0x2390fd(_0xe0d885);
            },
            'ZRQub': function (_0x3960e1, _0x525455) {
                return _0x3960e1 === _0x525455;
            },
            'AhDRG': function (_0x55ac2d, _0x3fc353) {
                return _0x55ac2d(_0x3fc353);
            },
            'NCPWY': function (_0x5f322c, _0x291a71) {
                return _0x5f322c(_0x291a71);
            }
        }, {
            createPage: _0x29b9b2,
            createRedirect: _0x91ee68,
            deletePage: _0x4f0aee
        } = _0x2b1c68;
    _0x34e36f['path'][_0x31a564(0x1c1)](/^\/client-only-paths/) && (_0x34e36f[_0x31a564(0x1c2)] = _0x31a564(0x1c3), _0x1cd22b['CgAaM'](_0x29b9b2, _0x34e36f));
    if (_0x1cd22b[_0x31a564(0x1c4)](_0x34e36f['path'], '/redirect-me/')) {
        const _0x4a23a3 = _0x31a564(0x1c5) + _0x34e36f[_0x31a564(0x1a7)];
        _0x1cd22b[_0x31a564(0x1c6)](_0x4f0aee, _0x34e36f), _0x1cd22b['CgAaM'](_0x91ee68, {
            'fromPath': _0x34e36f[_0x31a564(0x1a7)],
            'toPath': _0x4a23a3,
            'isPermanent': ![],
            'redirectInBrowser': !![],
            'Language': 'pt',
            'statusCode': 0x12d
        }), _0x1cd22b[_0x31a564(0x1c7)](_0x29b9b2, {
            ..._0x34e36f,
            'path': _0x4a23a3,
            'context': {
                ..._0x34e36f[_0x31a564(0x1c8)],
                'lang': 'pt'
            }
        });
    }
    if (_0x34e36f[_0x31a564(0x1a7)][_0x31a564(0x1c9)]('query-data-caches')) {
        if (_0x34e36f[_0x31a564(0x1a7)][_0x31a564(0x1c9)]('with-trailing-slash')) {
            const _0x2f2568 = /\/$/[_0x31a564(0x1ca)](_0x34e36f[_0x31a564(0x1a7)]);
            if (!_0x2f2568)
                throw new Error(_0x31a564(0x1cb));
        }
        _0x34e36f[_0x31a564(0x1a7)][_0x31a564(0x1c9)](_0x31a564(0x1cc)) && (_0x1cd22b['NCPWY'](_0x4f0aee, _0x34e36f), _0x29b9b2({
            ..._0x34e36f,
            'path': _0x34e36f['path']['replace'](/\/$/, '')
        }));
    }
}, exports[_0x458930(0x1cd)] = ({createResolvers: _0x206a02}) => {
    const _0x4c82b6 = _0x458930, _0x1f2be9 = {
            'QueryDataCachesJson': {
                'dummy': {
                    'type': _0x4c82b6(0x1ce),
                    'args': { 'text': { 'type': 'String' } },
                    'resolve'(_0x120f58, _0x2d509b) {
                        return _0x2d509b['text'];
                    }
                }
            }
        };
    _0x206a02(_0x1f2be9);
};
