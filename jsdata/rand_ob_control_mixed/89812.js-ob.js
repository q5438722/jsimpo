const path = require('path'), {createFilePath} = require('gatsby-source-filesystem');
exports['onCreateNode'] = function onCreateNode({
    actions: {createNodeField: _0x109007},
    node: _0x18f98c,
    getNode: _0x206901
}) {
    const _0x3ab182 = {
        'OnAKq': function (_0x30736e, _0x1248fe) {
            return _0x30736e(_0x1248fe);
        },
        'LlFso': function (_0x5f363a, _0x3bfa66) {
            return _0x5f363a(_0x3bfa66);
        }
    };
    switch (_0x18f98c['internal']['type']) {
    case 'MarkdownRemark': {
            const _0x52113b = _0x3ab182['OnAKq'](createFilePath, {
                'node': _0x18f98c,
                'getNode': _0x206901
            });
            _0x3ab182['LlFso'](_0x109007, {
                'name': 'slug',
                'value': _0x52113b,
                'node': _0x18f98c
            });
            break;
        }
    default: {
            break;
        }
    }
}, exports['createPages'] = async function createPages({
    actions: {
        createPage: _0x43d948,
        createRedirect: _0x10737e
    },
    graphql: _0x3d12c9
}) {
    const _0x3e2fd3 = {
            'XYKWl': function (_0x2e83bf, _0xf08ca) {
                return _0x2e83bf(_0xf08ca);
            },
            'BFLRI': function (_0x217fde, _0x422308) {
                return _0x217fde(_0x422308);
            },
            'AsjkV': function (_0x4fc6af, _0x222119) {
                return _0x4fc6af(_0x222119);
            },
            'mflqU': function (_0x4b11b2, _0x30b6b7) {
                return _0x4b11b2(_0x30b6b7);
            }
        }, {data: _0x272477} = await _0x3e2fd3['BFLRI'](_0x3d12c9, '\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20posts:\x20allMarkdownRemark\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20edges\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20node\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fields\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20slug\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20allFakeData\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20nodes\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fields\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20slug\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a\x20\x20'), _0x24ec17 = path['resolve']('src/templates/blog-post.js'), _0x24c6fd = path['resolve']('src/templates/preview-item.js');
    _0x272477['posts']['edges']['forEach'](({node: _0x3b4e08}) => {
        const {slug: _0x3bf50e} = _0x3b4e08['fields'];
        _0x3e2fd3['XYKWl'](_0x43d948, {
            'path': _0x3bf50e,
            'component': _0x24ec17,
            'context': { 'slug': _0x3bf50e }
        });
    }), _0x272477['allFakeData']['nodes']['forEach'](_0x4e6727 => {
        const {slug: _0x5079db} = _0x4e6727['fields'];
        _0x3e2fd3['XYKWl'](_0x43d948, {
            'path': _0x5079db,
            'component': _0x24c6fd,
            'context': { 'slug': _0x5079db }
        });
    }), _0x3e2fd3['AsjkV'](_0x43d948, {
        'path': '/안녕',
        'component': path['resolve']('src/pages/page-2.js')
    }), _0x3e2fd3['AsjkV'](_0x43d948, {
        'path': '/foo/@something/bar',
        'component': path['resolve']('src/pages/page-2.js')
    }), _0x3e2fd3['mflqU'](_0x43d948, {
        'path': '/client-only-paths/static',
        'component': path['resolve']('src/templates/static-page.js')
    }), _0x3e2fd3['mflqU'](_0x10737e, {
        'fromPath': '/redirect-without-page',
        'toPath': '/',
        'isPermanent': !![],
        'redirectInBrowser': !![]
    }), _0x3e2fd3['mflqU'](_0x10737e, {
        'fromPath': '/redirect',
        'toPath': '/',
        'isPermanent': !![],
        'redirectInBrowser': !![]
    }), _0x3e2fd3['mflqU'](_0x10737e, {
        'fromPath': '/redirect-two',
        'toPath': '/redirect-search-hash',
        'isPermanent': !![],
        'redirectInBrowser': !![]
    });
}, exports['onCreatePage'] = async ({
    page: _0x40f5b5,
    actions: _0x24d552
}) => {
    const _0x14a328 = {
            'CHabN': function (_0x3981a8, _0x1e3304) {
                return _0x3981a8(_0x1e3304);
            },
            'pxhdw': function (_0x54162a, _0x1bf1ec) {
                return _0x54162a === _0x1bf1ec;
            },
            'qeWGd': function (_0x11be02, _0x743b3b) {
                return _0x11be02(_0x743b3b);
            },
            'fMbfn': function (_0x2e8bdc, _0x3479e6) {
                return _0x2e8bdc(_0x3479e6);
            }
        }, {
            createPage: _0x3eec4c,
            createRedirect: _0x208bd8,
            deletePage: _0x10a414
        } = _0x24d552;
    _0x40f5b5['path']['match'](/^\/client-only-paths/) && (_0x40f5b5['matchPath'] = '/client-only-paths/*', _0x14a328['CHabN'](_0x3eec4c, _0x40f5b5));
    if (_0x14a328['pxhdw'](_0x40f5b5['path'], '/redirect-me/')) {
        const _0x3655bf = '/pt' + _0x40f5b5['path'];
        _0x14a328['qeWGd'](_0x10a414, _0x40f5b5), _0x14a328['qeWGd'](_0x208bd8, {
            'fromPath': _0x40f5b5['path'],
            'toPath': _0x3655bf,
            'isPermanent': ![],
            'redirectInBrowser': !![],
            'Language': 'pt',
            'statusCode': 0x12d
        }), _0x14a328['qeWGd'](_0x3eec4c, {
            ..._0x40f5b5,
            'path': _0x3655bf,
            'context': {
                ..._0x40f5b5['context'],
                'lang': 'pt'
            }
        });
    }
    if (_0x40f5b5['path']['includes']('query-data-caches')) {
        if (_0x40f5b5['path']['includes']('with-trailing-slash')) {
            const _0x58c8fb = /\/$/['test'](_0x40f5b5['path']);
            if (!_0x58c8fb)
                throw new Error('Page\x20reporting\x20to\x20have\x20trailing\x20slash,\x20doesn\x27t\x20have\x20it');
        }
        _0x40f5b5['path']['includes']('no-trailing-slash') && (_0x14a328['qeWGd'](_0x10a414, _0x40f5b5), _0x14a328['fMbfn'](_0x3eec4c, {
            ..._0x40f5b5,
            'path': _0x40f5b5['path']['replace'](/\/$/, '')
        }));
    }
}, exports['createResolvers'] = ({createResolvers: _0x2bafc2}) => {
    const _0x3a3a96 = {
            'vmotE': function (_0x928ecd, _0x58cfbf) {
                return _0x928ecd(_0x58cfbf);
            }
        }, _0x9ab76a = {
            'QueryDataCachesJson': {
                'dummy': {
                    'type': 'String',
                    'args': { 'text': { 'type': 'String' } },
                    'resolve'(_0x2750d4, _0x32473a) {
                        return _0x32473a['text'];
                    }
                }
            }
        };
    _0x3a3a96['vmotE'](_0x2bafc2, _0x9ab76a);
};
