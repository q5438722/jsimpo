const path = require('path'), {createFilePath} = require('gatsby-source-filesystem');
exports['onCreateNode'] = function onCreateNode({
    actions: {createNodeField: _0x4dfedd},
    node: _0x4b2cac,
    getNode: _0x44f581
}) {
    switch (_0x4b2cac['internal']['type']) {
    case 'MarkdownRemark': {
            const _0x3fb965 = createFilePath({
                'node': _0x4b2cac,
                'getNode': _0x44f581
            });
            _0x4dfedd({
                'name': 'slug',
                'value': _0x3fb965,
                'node': _0x4b2cac
            });
            break;
        }
    default: {
            break;
        }
    }
}, exports['createPages'] = async function createPages({
    actions: {
        createPage: _0xd604f8,
        createRedirect: _0x556d3d
    },
    graphql: _0x284c6f
}) {
    const {data: _0x2e9dd1} = await _0x284c6f('\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20posts:\x20allMarkdownRemark\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20edges\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20node\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fields\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20slug\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20allFakeData\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20nodes\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fields\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20slug\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a\x20\x20'), _0x42dc94 = path['resolve']('src/templates/blog-post.js'), _0x18a6e7 = path['resolve']('src/templates/preview-item.js');
    _0x2e9dd1['posts']['edges']['forEach'](({node: _0x4f1e76}) => {
        const {slug: _0x24aaea} = _0x4f1e76['fields'];
        _0xd604f8({
            'path': _0x24aaea,
            'component': _0x42dc94,
            'context': { 'slug': _0x24aaea }
        });
    }), _0x2e9dd1['allFakeData']['nodes']['forEach'](_0x5716bf => {
        const {slug: _0x2547e0} = _0x5716bf['fields'];
        _0xd604f8({
            'path': _0x2547e0,
            'component': _0x18a6e7,
            'context': { 'slug': _0x2547e0 }
        });
    }), _0xd604f8({
        'path': '/안녕',
        'component': path['resolve']('src/pages/page-2.js')
    }), _0xd604f8({
        'path': '/foo/@something/bar',
        'component': path['resolve']('src/pages/page-2.js')
    }), _0xd604f8({
        'path': '/client-only-paths/static',
        'component': path['resolve']('src/templates/static-page.js')
    }), _0x556d3d({
        'fromPath': '/redirect-without-page',
        'toPath': '/',
        'isPermanent': !![],
        'redirectInBrowser': !![]
    }), _0x556d3d({
        'fromPath': '/redirect',
        'toPath': '/',
        'isPermanent': !![],
        'redirectInBrowser': !![]
    }), _0x556d3d({
        'fromPath': '/redirect-two',
        'toPath': '/redirect-search-hash',
        'isPermanent': !![],
        'redirectInBrowser': !![]
    });
}, exports['onCreatePage'] = async ({
    page: _0x1e461e,
    actions: _0x1ae261
}) => {
    const {
        createPage: _0x42fa68,
        createRedirect: _0x467f4e,
        deletePage: _0x3338a2
    } = _0x1ae261;
    _0x1e461e['path']['match'](/^\/client-only-paths/) && (_0x1e461e['matchPath'] = '/client-only-paths/*', _0x42fa68(_0x1e461e));
    if (_0x1e461e['path'] === '/redirect-me/') {
        const _0x228a71 = '/pt' + _0x1e461e['path'];
        _0x3338a2(_0x1e461e), _0x467f4e({
            'fromPath': _0x1e461e['path'],
            'toPath': _0x228a71,
            'isPermanent': ![],
            'redirectInBrowser': !![],
            'Language': 'pt',
            'statusCode': 0x12d
        }), _0x42fa68({
            ..._0x1e461e,
            'path': _0x228a71,
            'context': {
                ..._0x1e461e['context'],
                'lang': 'pt'
            }
        });
    }
    if (_0x1e461e['path']['includes']('query-data-caches')) {
        if (_0x1e461e['path']['includes']('with-trailing-slash')) {
            const _0x23e367 = /\/$/['test'](_0x1e461e['path']);
            if (!_0x23e367)
                throw new Error('Page\x20reporting\x20to\x20have\x20trailing\x20slash,\x20doesn\x27t\x20have\x20it');
        }
        _0x1e461e['path']['includes']('no-trailing-slash') && (_0x3338a2(_0x1e461e), _0x42fa68({
            ..._0x1e461e,
            'path': _0x1e461e['path']['replace'](/\/$/, '')
        }));
    }
}, exports['createResolvers'] = ({createResolvers: _0x140fa6}) => {
    const _0x5e015e = {
        'QueryDataCachesJson': {
            'dummy': {
                'type': 'String',
                'args': { 'text': { 'type': 'String' } },
                'resolve'(_0x43ddf0, _0xed26b) {
                    return _0xed26b['text'];
                }
            }
        }
    };
    _0x140fa6(_0x5e015e);
};
