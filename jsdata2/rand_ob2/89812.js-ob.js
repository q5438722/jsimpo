const _0x4fa1 = [
    'no-trailing-slash',
    'replace',
    'createResolvers',
    'String',
    'text',
    '39373RPefIH',
    '622584RXxFrT',
    '406553bvGzXQ',
    '265960oYEfDc',
    '7369CuoRxX',
    '40wekewd',
    '572707iYGQdr',
    '995rncjEk',
    '100wqjEsR',
    'path',
    'gatsby-source-filesystem',
    'onCreateNode',
    'internal',
    'createPages',
    '\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20posts:\x20allMarkdownRemark\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20edges\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20node\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fields\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20slug\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20allFakeData\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20nodes\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fields\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20slug\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a\x20\x20',
    'resolve',
    'src/templates/preview-item.js',
    'posts',
    'edges',
    'forEach',
    'allFakeData',
    '/foo/@something/bar',
    'src/pages/page-2.js',
    '/client-only-paths/static',
    'src/templates/static-page.js',
    '/redirect-without-page',
    '/redirect-search-hash',
    'match',
    '/client-only-paths/*',
    '/redirect-me/',
    '/pt',
    'context',
    'includes',
    'query-data-caches',
    'with-trailing-slash',
    'test',
    'Page\x20reporting\x20to\x20have\x20trailing\x20slash,\x20doesn\x27t\x20have\x20it'
];
const _0x4ca8f4 = _0x1b39;
function _0x1b39(_0x34ac18, _0x33e1d2) {
    return _0x1b39 = function (_0x4fa1a5, _0x1b39bb) {
        _0x4fa1a5 = _0x4fa1a5 - 0x139;
        let _0x585dd9 = _0x4fa1[_0x4fa1a5];
        return _0x585dd9;
    }, _0x1b39(_0x34ac18, _0x33e1d2);
}
(function (_0x537a9e, _0x321e1f) {
    const _0x4b4042 = _0x1b39;
    while (!![]) {
        try {
            const _0x5a29d3 = parseInt(_0x4b4042(0x139)) + parseInt(_0x4b4042(0x13a)) + -parseInt(_0x4b4042(0x13b)) + parseInt(_0x4b4042(0x13c)) + -parseInt(_0x4b4042(0x13d)) * -parseInt(_0x4b4042(0x13e)) + -parseInt(_0x4b4042(0x13f)) + parseInt(_0x4b4042(0x140)) * parseInt(_0x4b4042(0x141));
            if (_0x5a29d3 === _0x321e1f)
                break;
            else
                _0x537a9e['push'](_0x537a9e['shift']());
        } catch (_0x197b8e) {
            _0x537a9e['push'](_0x537a9e['shift']());
        }
    }
}(_0x4fa1, 0x53b85));
const path = require(_0x4ca8f4(0x142)), {createFilePath} = require(_0x4ca8f4(0x143));
exports[_0x4ca8f4(0x144)] = function onCreateNode({
    actions: {createNodeField: _0x1ef370},
    node: _0x44938d,
    getNode: _0x1ee4a6
}) {
    const _0xf2204d = _0x4ca8f4;
    switch (_0x44938d[_0xf2204d(0x145)]['type']) {
    case 'MarkdownRemark': {
            const _0x3c51e3 = createFilePath({
                'node': _0x44938d,
                'getNode': _0x1ee4a6
            });
            _0x1ef370({
                'name': 'slug',
                'value': _0x3c51e3,
                'node': _0x44938d
            });
            break;
        }
    default: {
            break;
        }
    }
}, exports[_0x4ca8f4(0x146)] = async function createPages({
    actions: {
        createPage: _0x3b1cbe,
        createRedirect: _0x31b2ae
    },
    graphql: _0x2114e0
}) {
    const _0x8ae722 = _0x4ca8f4, {data: _0x545ad2} = await _0x2114e0(_0x8ae722(0x147)), _0x1d34c7 = path[_0x8ae722(0x148)]('src/templates/blog-post.js'), _0x28244e = path['resolve'](_0x8ae722(0x149));
    _0x545ad2[_0x8ae722(0x14a)][_0x8ae722(0x14b)][_0x8ae722(0x14c)](({node: _0x1b87c4}) => {
        const {slug: _0x3ba633} = _0x1b87c4['fields'];
        _0x3b1cbe({
            'path': _0x3ba633,
            'component': _0x1d34c7,
            'context': { 'slug': _0x3ba633 }
        });
    }), _0x545ad2[_0x8ae722(0x14d)]['nodes']['forEach'](_0x301e4c => {
        const {slug: _0x2394d3} = _0x301e4c['fields'];
        _0x3b1cbe({
            'path': _0x2394d3,
            'component': _0x28244e,
            'context': { 'slug': _0x2394d3 }
        });
    }), _0x3b1cbe({
        'path': '/안녕',
        'component': path[_0x8ae722(0x148)]('src/pages/page-2.js')
    }), _0x3b1cbe({
        'path': _0x8ae722(0x14e),
        'component': path[_0x8ae722(0x148)](_0x8ae722(0x14f))
    }), _0x3b1cbe({
        'path': _0x8ae722(0x150),
        'component': path[_0x8ae722(0x148)](_0x8ae722(0x151))
    }), _0x31b2ae({
        'fromPath': _0x8ae722(0x152),
        'toPath': '/',
        'isPermanent': !![],
        'redirectInBrowser': !![]
    }), _0x31b2ae({
        'fromPath': '/redirect',
        'toPath': '/',
        'isPermanent': !![],
        'redirectInBrowser': !![]
    }), _0x31b2ae({
        'fromPath': '/redirect-two',
        'toPath': _0x8ae722(0x153),
        'isPermanent': !![],
        'redirectInBrowser': !![]
    });
}, exports['onCreatePage'] = async ({
    page: _0x2f7c61,
    actions: _0x11c55f
}) => {
    const _0x4faf77 = _0x4ca8f4, {
            createPage: _0x50eb53,
            createRedirect: _0x13b4cc,
            deletePage: _0x159e6f
        } = _0x11c55f;
    _0x2f7c61[_0x4faf77(0x142)][_0x4faf77(0x154)](/^\/client-only-paths/) && (_0x2f7c61['matchPath'] = _0x4faf77(0x155), _0x50eb53(_0x2f7c61));
    if (_0x2f7c61[_0x4faf77(0x142)] === _0x4faf77(0x156)) {
        const _0x34f62d = _0x4faf77(0x157) + _0x2f7c61[_0x4faf77(0x142)];
        _0x159e6f(_0x2f7c61), _0x13b4cc({
            'fromPath': _0x2f7c61[_0x4faf77(0x142)],
            'toPath': _0x34f62d,
            'isPermanent': ![],
            'redirectInBrowser': !![],
            'Language': 'pt',
            'statusCode': 0x12d
        }), _0x50eb53({
            ..._0x2f7c61,
            'path': _0x34f62d,
            'context': {
                ..._0x2f7c61[_0x4faf77(0x158)],
                'lang': 'pt'
            }
        });
    }
    if (_0x2f7c61[_0x4faf77(0x142)][_0x4faf77(0x159)](_0x4faf77(0x15a))) {
        if (_0x2f7c61[_0x4faf77(0x142)][_0x4faf77(0x159)](_0x4faf77(0x15b))) {
            const _0x4a08d5 = /\/$/[_0x4faf77(0x15c)](_0x2f7c61[_0x4faf77(0x142)]);
            if (!_0x4a08d5)
                throw new Error(_0x4faf77(0x15d));
        }
        _0x2f7c61[_0x4faf77(0x142)][_0x4faf77(0x159)](_0x4faf77(0x15e)) && (_0x159e6f(_0x2f7c61), _0x50eb53({
            ..._0x2f7c61,
            'path': _0x2f7c61[_0x4faf77(0x142)][_0x4faf77(0x15f)](/\/$/, '')
        }));
    }
}, exports[_0x4ca8f4(0x160)] = ({createResolvers: _0xdb19e1}) => {
    const _0x1625f3 = _0x4ca8f4, _0x3e7c1d = {
            'QueryDataCachesJson': {
                'dummy': {
                    'type': _0x1625f3(0x161),
                    'args': { 'text': { 'type': _0x1625f3(0x161) } },
                    'resolve'(_0x4ab043, _0x1b77e0) {
                        const _0x547945 = _0x1625f3;
                        return _0x1b77e0[_0x547945(0x162)];
                    }
                }
            }
        };
    _0xdb19e1(_0x3e7c1d);
};
