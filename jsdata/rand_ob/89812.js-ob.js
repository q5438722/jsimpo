const _0x47ac = [
    '/client-only-paths/*',
    'AkxQi',
    'BIChV',
    '/redirect-me/',
    '/pt',
    'cxKWr',
    'tdBIc',
    'includes',
    'with-trailing-slash',
    'test',
    'createResolvers',
    'String',
    'IQDdO',
    '418955gJnhGu',
    '1DajRwv',
    '271381giCnty',
    '153590TenpRM',
    '4352oZVlft',
    '269RWwQud',
    '548396esCoiF',
    '2ciDOsl',
    '1232780eXSTDE',
    '11EFVTPm',
    '302857GoSKaZ',
    'path',
    'gatsby-source-filesystem',
    'onCreateNode',
    'internal',
    'NcBYY',
    'slug',
    'createPages',
    'zftfp',
    '\x0a\x20\x20\x20\x20{\x0a\x20\x20\x20\x20\x20\x20posts:\x20allMarkdownRemark\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20edges\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20node\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fields\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20slug\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x0a\x20\x20\x20\x20\x20\x20allFakeData\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20nodes\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20fields\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20slug\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20}\x0a\x20\x20',
    'src/templates/blog-post.js',
    'resolve',
    'src/templates/preview-item.js',
    'posts',
    'edges',
    'fields',
    'allFakeData',
    'nodes',
    'forEach',
    '/안녕',
    '/foo/@something/bar',
    'PxxIa',
    'src/templates/static-page.js',
    '/redirect-without-page',
    'QECZj',
    '/redirect',
    '/redirect-two',
    '/redirect-search-hash',
    'onCreatePage',
    'match',
    'matchPath'
];
const _0x462919 = _0x197f;
(function (_0x459086, _0x260327) {
    const _0x101f51 = _0x197f;
    while (!![]) {
        try {
            const _0x433de8 = -parseInt(_0x101f51(0x1db)) * -parseInt(_0x101f51(0x1dc)) + parseInt(_0x101f51(0x1dd)) + -parseInt(_0x101f51(0x1de)) + -parseInt(_0x101f51(0x1df)) * -parseInt(_0x101f51(0x1e0)) + -parseInt(_0x101f51(0x1e1)) * -parseInt(_0x101f51(0x1e2)) + parseInt(_0x101f51(0x1e3)) + -parseInt(_0x101f51(0x1e4)) * parseInt(_0x101f51(0x1e5));
            if (_0x433de8 === _0x260327)
                break;
            else
                _0x459086['push'](_0x459086['shift']());
        } catch (_0x373cb6) {
            _0x459086['push'](_0x459086['shift']());
        }
    }
}(_0x47ac, -0xac52b + 0x3 * -0x30355 + -0x1e9355 * -0x1));
function _0x197f(_0x575125, _0x12c267) {
    return _0x197f = function (_0x1e0635, _0x1cf16c) {
        _0x1e0635 = _0x1e0635 - (-0x2b * 0x63 + 0x1 * 0xb75 + -0x7 * -0x101);
        let _0x1b9953 = _0x47ac[_0x1e0635];
        return _0x1b9953;
    }, _0x197f(_0x575125, _0x12c267);
}
const path = require(_0x462919(0x1e6)), {createFilePath} = require(_0x462919(0x1e7));
exports[_0x462919(0x1e8)] = function onCreateNode({
    actions: {createNodeField: _0x3c445d},
    node: _0x34fc4b,
    getNode: _0x4a6f75
}) {
    const _0x2fa8ab = _0x462919, _0x305c1c = {
            'Pblcq': function (_0x6eda6, _0x5647ad) {
                return _0x6eda6(_0x5647ad);
            },
            'NcBYY': function (_0x104e5a, _0x50e26c) {
                return _0x104e5a(_0x50e26c);
            }
        };
    switch (_0x34fc4b[_0x2fa8ab(0x1e9)]['type']) {
    case 'MarkdownRemark': {
            const _0x5ae093 = _0x305c1c['Pblcq'](createFilePath, {
                'node': _0x34fc4b,
                'getNode': _0x4a6f75
            });
            _0x305c1c[_0x2fa8ab(0x1ea)](_0x3c445d, {
                'name': _0x2fa8ab(0x1eb),
                'value': _0x5ae093,
                'node': _0x34fc4b
            });
            break;
        }
    default: {
            break;
        }
    }
}, exports[_0x462919(0x1ec)] = async function createPages({
    actions: {
        createPage: _0x59af65,
        createRedirect: _0x458d35
    },
    graphql: _0xf2b862
}) {
    const _0x138a31 = _0x462919, _0x4a0417 = {
            'WkiVf': function (_0x1a840d, _0x5c02d0) {
                return _0x1a840d(_0x5c02d0);
            },
            'zftfp': function (_0x31ef65, _0x4af850) {
                return _0x31ef65(_0x4af850);
            },
            'PxxIa': function (_0x1e3450, _0x1d638d) {
                return _0x1e3450(_0x1d638d);
            },
            'QECZj': function (_0xd7036c, _0x282b61) {
                return _0xd7036c(_0x282b61);
            }
        }, {data: _0x46b91c} = await _0x4a0417[_0x138a31(0x1ed)](_0xf2b862, _0x138a31(0x1ee)), _0x17e07b = path['resolve'](_0x138a31(0x1ef)), _0x1497c3 = path[_0x138a31(0x1f0)](_0x138a31(0x1f1));
    _0x46b91c[_0x138a31(0x1f2)][_0x138a31(0x1f3)]['forEach'](({node: _0x3d6577}) => {
        const _0x208487 = _0x138a31, {slug: _0x16b039} = _0x3d6577[_0x208487(0x1f4)];
        _0x4a0417['WkiVf'](_0x59af65, {
            'path': _0x16b039,
            'component': _0x17e07b,
            'context': { 'slug': _0x16b039 }
        });
    }), _0x46b91c[_0x138a31(0x1f5)][_0x138a31(0x1f6)][_0x138a31(0x1f7)](_0x6935d3 => {
        const _0x35e7e9 = _0x138a31, {slug: _0x468b04} = _0x6935d3[_0x35e7e9(0x1f4)];
        _0x4a0417['WkiVf'](_0x59af65, {
            'path': _0x468b04,
            'component': _0x1497c3,
            'context': { 'slug': _0x468b04 }
        });
    }), _0x4a0417[_0x138a31(0x1ed)](_0x59af65, {
        'path': _0x138a31(0x1f8),
        'component': path[_0x138a31(0x1f0)]('src/pages/page-2.js')
    }), _0x59af65({
        'path': _0x138a31(0x1f9),
        'component': path[_0x138a31(0x1f0)]('src/pages/page-2.js')
    }), _0x4a0417[_0x138a31(0x1fa)](_0x59af65, {
        'path': '/client-only-paths/static',
        'component': path[_0x138a31(0x1f0)](_0x138a31(0x1fb))
    }), _0x458d35({
        'fromPath': _0x138a31(0x1fc),
        'toPath': '/',
        'isPermanent': !![],
        'redirectInBrowser': !![]
    }), _0x4a0417[_0x138a31(0x1fd)](_0x458d35, {
        'fromPath': _0x138a31(0x1fe),
        'toPath': '/',
        'isPermanent': !![],
        'redirectInBrowser': !![]
    }), _0x4a0417[_0x138a31(0x1fd)](_0x458d35, {
        'fromPath': _0x138a31(0x1ff),
        'toPath': _0x138a31(0x200),
        'isPermanent': !![],
        'redirectInBrowser': !![]
    });
}, exports[_0x462919(0x201)] = async ({
    page: _0x33b835,
    actions: _0x5c8d22
}) => {
    const _0x3303ae = _0x462919, _0x67e03a = {
            'AkxQi': function (_0x2764bb, _0x10a96c) {
                return _0x2764bb(_0x10a96c);
            },
            'BIChV': function (_0x2b6906, _0x2fefef) {
                return _0x2b6906 === _0x2fefef;
            },
            'cxKWr': function (_0x22e47d, _0x35cdca) {
                return _0x22e47d(_0x35cdca);
            },
            'tdBIc': function (_0x2e4533, _0xbc8d21) {
                return _0x2e4533(_0xbc8d21);
            }
        }, {
            createPage: _0x2f89e1,
            createRedirect: _0x2b1e21,
            deletePage: _0x4b8ed2
        } = _0x5c8d22;
    _0x33b835['path'][_0x3303ae(0x202)](/^\/client-only-paths/) && (_0x33b835[_0x3303ae(0x203)] = _0x3303ae(0x204), _0x67e03a[_0x3303ae(0x205)](_0x2f89e1, _0x33b835));
    if (_0x67e03a[_0x3303ae(0x206)](_0x33b835[_0x3303ae(0x1e6)], _0x3303ae(0x207))) {
        const _0x52e739 = _0x3303ae(0x208) + _0x33b835['path'];
        _0x67e03a[_0x3303ae(0x209)](_0x4b8ed2, _0x33b835), _0x67e03a['tdBIc'](_0x2b1e21, {
            'fromPath': _0x33b835['path'],
            'toPath': _0x52e739,
            'isPermanent': ![],
            'redirectInBrowser': !![],
            'Language': 'pt',
            'statusCode': 0x12d
        }), _0x67e03a[_0x3303ae(0x20a)](_0x2f89e1, {
            ..._0x33b835,
            'path': _0x52e739,
            'context': {
                ..._0x33b835['context'],
                'lang': 'pt'
            }
        });
    }
    if (_0x33b835[_0x3303ae(0x1e6)][_0x3303ae(0x20b)]('query-data-caches')) {
        if (_0x33b835['path'][_0x3303ae(0x20b)](_0x3303ae(0x20c))) {
            const _0x174c55 = /\/$/[_0x3303ae(0x20d)](_0x33b835[_0x3303ae(0x1e6)]);
            if (!_0x174c55)
                throw new Error('Page\x20reporting\x20to\x20have\x20trailing\x20slash,\x20doesn\x27t\x20have\x20it');
        }
        _0x33b835[_0x3303ae(0x1e6)][_0x3303ae(0x20b)]('no-trailing-slash') && (_0x67e03a['tdBIc'](_0x4b8ed2, _0x33b835), _0x2f89e1({
            ..._0x33b835,
            'path': _0x33b835[_0x3303ae(0x1e6)]['replace'](/\/$/, '')
        }));
    }
}, exports[_0x462919(0x20e)] = ({createResolvers: _0x57daab}) => {
    const _0xb8d6ed = _0x462919, _0x21900f = {
            'IQDdO': function (_0x255c82, _0x3783f1) {
                return _0x255c82(_0x3783f1);
            }
        }, _0x78e744 = {
            'QueryDataCachesJson': {
                'dummy': {
                    'type': _0xb8d6ed(0x20f),
                    'args': { 'text': { 'type': _0xb8d6ed(0x20f) } },
                    'resolve'(_0x400ace, _0x5db17e) {
                        return _0x5db17e['text'];
                    }
                }
            }
        };
    _0x21900f[_0xb8d6ed(0x210)](_0x57daab, _0x78e744);
};
