const _0x26ed = [
    '18131jSoAnB',
    '21568MAnGdp',
    '3256750bSdLkP',
    'path',
    'gatsby-source-filesystem',
    'onCreateNode',
    'internal',
    'type',
    'MarkdownRemark',
    'createPages',
    '\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20posts:\x20allMarkdownRemark\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20edges\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20node\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fields\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20slug\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20allFakeData\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20nodes\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fields\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20slug\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a\x20\x20',
    'resolve',
    'src/templates/blog-post.js',
    'src/templates/preview-item.js',
    'posts',
    'forEach',
    'fields',
    'allFakeData',
    'nodes',
    '/안녕',
    'src/pages/page-2.js',
    '/foo/@something/bar',
    '/client-only-paths/static',
    'src/templates/static-page.js',
    '/redirect-without-page',
    '/redirect',
    '/redirect-two',
    '/redirect-search-hash',
    'onCreatePage',
    'matchPath',
    '/client-only-paths/*',
    '/redirect-me/',
    '/pt',
    'context',
    'includes',
    'query-data-caches',
    'with-trailing-slash',
    'test',
    'Page\x20reporting\x20to\x20have\x20trailing\x20slash,\x20doesn\x27t\x20have\x20it',
    'no-trailing-slash',
    'createResolvers',
    'String',
    '355864bTfxrf',
    '749420uhvxYk',
    '543469uiubun',
    '981875tmPTHU',
    '3mMDOtH'
];
const _0x4a29b8 = _0x16b5;
(function (_0x24400c, _0x57657f) {
    const _0x1482e2 = _0x16b5;
    while (!![]) {
        try {
            const _0x3d39dd = -parseInt(_0x1482e2(0xb1)) + -parseInt(_0x1482e2(0xb2)) + -parseInt(_0x1482e2(0xb3)) + -parseInt(_0x1482e2(0xb4)) + parseInt(_0x1482e2(0xb5)) * -parseInt(_0x1482e2(0xb6)) + parseInt(_0x1482e2(0xb7)) + parseInt(_0x1482e2(0xb8));
            if (_0x3d39dd === _0x57657f)
                break;
            else
                _0x24400c['push'](_0x24400c['shift']());
        } catch (_0x5c764f) {
            _0x24400c['push'](_0x24400c['shift']());
        }
    }
}(_0x26ed, 0x90d91));
const path = require(_0x4a29b8(0xb9)), {createFilePath} = require(_0x4a29b8(0xba));
function _0x16b5(_0xcb0f57, _0x1a7e62) {
    return _0x16b5 = function (_0x26ed02, _0x16b5a2) {
        _0x26ed02 = _0x26ed02 - 0xb1;
        let _0x49db24 = _0x26ed[_0x26ed02];
        return _0x49db24;
    }, _0x16b5(_0xcb0f57, _0x1a7e62);
}
exports[_0x4a29b8(0xbb)] = function onCreateNode({
    actions: {createNodeField: _0x42181f},
    node: _0x561a04,
    getNode: _0x114196
}) {
    const _0x415fb6 = _0x4a29b8;
    switch (_0x561a04[_0x415fb6(0xbc)][_0x415fb6(0xbd)]) {
    case _0x415fb6(0xbe): {
            const _0x180a17 = createFilePath({
                'node': _0x561a04,
                'getNode': _0x114196
            });
            _0x42181f({
                'name': 'slug',
                'value': _0x180a17,
                'node': _0x561a04
            });
            break;
        }
    default: {
            break;
        }
    }
}, exports[_0x4a29b8(0xbf)] = async function createPages({
    actions: {
        createPage: _0x290969,
        createRedirect: _0x555ebc
    },
    graphql: _0x35fcb
}) {
    const _0x296a8f = _0x4a29b8, {data: _0x46f865} = await _0x35fcb(_0x296a8f(0xc0)), _0x3c59c7 = path[_0x296a8f(0xc1)](_0x296a8f(0xc2)), _0xa14fa8 = path[_0x296a8f(0xc1)](_0x296a8f(0xc3));
    _0x46f865[_0x296a8f(0xc4)]['edges'][_0x296a8f(0xc5)](({node: _0x226042}) => {
        const _0x41b573 = _0x296a8f, {slug: _0x43ff1f} = _0x226042[_0x41b573(0xc6)];
        _0x290969({
            'path': _0x43ff1f,
            'component': _0x3c59c7,
            'context': { 'slug': _0x43ff1f }
        });
    }), _0x46f865[_0x296a8f(0xc7)][_0x296a8f(0xc8)][_0x296a8f(0xc5)](_0x5b64c6 => {
        const _0x51c19a = _0x296a8f, {slug: _0x74455c} = _0x5b64c6[_0x51c19a(0xc6)];
        _0x290969({
            'path': _0x74455c,
            'component': _0xa14fa8,
            'context': { 'slug': _0x74455c }
        });
    }), _0x290969({
        'path': _0x296a8f(0xc9),
        'component': path[_0x296a8f(0xc1)](_0x296a8f(0xca))
    }), _0x290969({
        'path': _0x296a8f(0xcb),
        'component': path[_0x296a8f(0xc1)]('src/pages/page-2.js')
    }), _0x290969({
        'path': _0x296a8f(0xcc),
        'component': path['resolve'](_0x296a8f(0xcd))
    }), _0x555ebc({
        'fromPath': _0x296a8f(0xce),
        'toPath': '/',
        'isPermanent': !![],
        'redirectInBrowser': !![]
    }), _0x555ebc({
        'fromPath': _0x296a8f(0xcf),
        'toPath': '/',
        'isPermanent': !![],
        'redirectInBrowser': !![]
    }), _0x555ebc({
        'fromPath': _0x296a8f(0xd0),
        'toPath': _0x296a8f(0xd1),
        'isPermanent': !![],
        'redirectInBrowser': !![]
    });
}, exports[_0x4a29b8(0xd2)] = async ({
    page: _0x31bdaa,
    actions: _0x272e7b
}) => {
    const _0x270f51 = _0x4a29b8, {
            createPage: _0x44e6ce,
            createRedirect: _0x19cbdb,
            deletePage: _0x1dec80
        } = _0x272e7b;
    _0x31bdaa[_0x270f51(0xb9)]['match'](/^\/client-only-paths/) && (_0x31bdaa[_0x270f51(0xd3)] = _0x270f51(0xd4), _0x44e6ce(_0x31bdaa));
    if (_0x31bdaa[_0x270f51(0xb9)] === _0x270f51(0xd5)) {
        const _0x2f79ae = _0x270f51(0xd6) + _0x31bdaa['path'];
        _0x1dec80(_0x31bdaa), _0x19cbdb({
            'fromPath': _0x31bdaa[_0x270f51(0xb9)],
            'toPath': _0x2f79ae,
            'isPermanent': ![],
            'redirectInBrowser': !![],
            'Language': 'pt',
            'statusCode': 0x12d
        }), _0x44e6ce({
            ..._0x31bdaa,
            'path': _0x2f79ae,
            'context': {
                ..._0x31bdaa[_0x270f51(0xd7)],
                'lang': 'pt'
            }
        });
    }
    if (_0x31bdaa['path'][_0x270f51(0xd8)](_0x270f51(0xd9))) {
        if (_0x31bdaa[_0x270f51(0xb9)][_0x270f51(0xd8)](_0x270f51(0xda))) {
            const _0x99640a = /\/$/[_0x270f51(0xdb)](_0x31bdaa[_0x270f51(0xb9)]);
            if (!_0x99640a)
                throw new Error(_0x270f51(0xdc));
        }
        _0x31bdaa[_0x270f51(0xb9)][_0x270f51(0xd8)](_0x270f51(0xdd)) && (_0x1dec80(_0x31bdaa), _0x44e6ce({
            ..._0x31bdaa,
            'path': _0x31bdaa[_0x270f51(0xb9)]['replace'](/\/$/, '')
        }));
    }
}, exports[_0x4a29b8(0xde)] = ({createResolvers: _0x4c74e5}) => {
    const _0xa3088d = _0x4a29b8, _0x39b85d = {
            'QueryDataCachesJson': {
                'dummy': {
                    'type': _0xa3088d(0xdf),
                    'args': { 'text': { 'type': _0xa3088d(0xdf) } },
                    'resolve'(_0x426ec9, _0x1726b0) {
                        return _0x1726b0['text'];
                    }
                }
            }
        };
    _0x4c74e5(_0x39b85d);
};
