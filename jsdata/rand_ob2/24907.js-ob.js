const _0x4b8b = [
    'assert',
    'lodash',
    'supertest',
    '../../src/server',
    'Server',
    '/$1',
    '/posts/:id',
    '/posts/1?_embed=comments',
    'posts',
    'foo',
    'bar',
    'Technology',
    'Photography',
    'users',
    'Jim',
    '0123',
    'George',
    '123',
    'comments',
    'baz',
    'qux',
    'buyers',
    'Barney',
    'Colombia',
    'Carley',
    'Belize',
    'Ellen',
    'Frank',
    'Grace',
    'Argentina',
    'Isabelle',
    'refs',
    '1234',
    'deep',
    'dewey',
    'cheatem',
    'howe',
    'router',
    'use',
    'rewriter',
    'GET\x20/db',
    'should\x20respond\x20with\x20json\x20and\x20full\x20database',
    'get',
    'expect',
    'Content-Type',
    'GET\x20/:resource',
    'should\x20respond\x20with\x20json\x20and\x20corresponding\x20resources',
    '/posts',
    'set',
    'http://example.com',
    'Access-Control-Allow-Credentials',
    'true',
    '/undefined',
    'GET\x20/:resource?attr=&attr=',
    'should\x20respond\x20with\x20json\x20and\x20filter\x20resources',
    '/comments?postId=1&published=true',
    'should\x20be\x20strict',
    '/users?tel=123',
    'should\x20support\x20multiple\x20filters',
    'should\x20support\x20deep\x20filter',
    'should\x20ignore\x20JSONP\x20query\x20parameters\x20callback\x20and\x20_\x20',
    '/comments?callback=1&_=1',
    'body',
    'should\x20not\x20fail\x20with\x20null\x20value',
    'push',
    '/posts?body=foo',
    '/tags?q=pho',
    'tags',
    'should\x20respond\x20with\x20json\x20and\x20make\x20a\x20deep\x20full-text\x20search',
    '/deep?q=1',
    '/tags?q=nope',
    'should\x20support\x20other\x20query\x20parameters',
    '/comments?q=qu&published=true',
    'should\x20ignore\x20duplicate\x20q\x20query\x20parameters',
    '/comments?q=foo&q=bar',
    'should\x20respond\x20with\x20a\x20sliced\x20array',
    'x-total-count',
    'toString',
    'Access-Control-Expose-Headers',
    'X-Total-Count',
    'slice',
    'GET\x20/:resource?_sort=',
    'should\x20respond\x20with\x20json\x20and\x20sort\x20on\x20a\x20field',
    '/tags?_sort=body',
    '/tags?_sort=body&_order=DESC',
    '/tags?_sort=body&_order=desc',
    'should\x20sort\x20on\x20numerical\x20field',
    '/posts?_sort=id&_order=DESC',
    'should\x20sort\x20on\x20nested\x20field',
    '/nested?_sort=resource.name',
    'nested',
    'should\x20sort\x20on\x20multiple\x20fields',
    'GET\x20/:resource?_start=&_end=',
    '/comments?_start=1&_end=2',
    'length',
    'GET\x20/:resource?_start=&_limit=',
    'should\x20respond\x20with\x20a\x20limited\x20array',
    '/comments?_start=1&_limit=1',
    'GET\x20/:resource?_page=',
    'should\x20paginate',
    '/list?_page=2',
    'X-Total-Count,\x20Link',
    'list',
    'GET\x20/:resource?_page=&_limit=',
    'should\x20paginate\x20with\x20a\x20custom\x20limit',
    '<http://localhost/list?_page=1&_limit=1>;\x20rel=\x22first\x22',
    '<http://localhost/list?_page=1&_limit=1>;\x20rel=\x22prev\x22',
    '<http://localhost/list?_page=3&_limit=1>;\x20rel=\x22next\x22',
    '<http://localhost/list?_page=15&_limit=1>;\x20rel=\x22last\x22',
    '/list?_page=2&_limit=1',
    'host',
    'localhost',
    'link',
    'GET\x20/:resource?attr_gte=&attr_lte=',
    '/comments?id_gte=2&id_lte=3',
    'GET\x20/:resource?attr_ne=',
    '/comments?id_ne=1',
    '/comments?id_ne=1&id_ne=2',
    'should\x20respond\x20with\x20an\x20array\x20that\x20matches\x20the\x20like\x20operator\x20(case\x20insensitive)',
    'GET\x20/:parent/:parentId/:resource',
    'should\x20respond\x20with\x20json\x20and\x20corresponding\x20nested\x20resources',
    'GET\x20/:resource/:id',
    'should\x20support\x20string\x20id,\x20respond\x20with\x20json\x20and\x20corresponding\x20resource',
    '/refs/abcd-1234',
    'should\x20support\x20integer\x20id\x20as\x20string',
    '/stringIds/1234',
    'stringIds',
    '/posts/9001',
    'GET\x20/:resource?_embed=',
    'cloneDeep',
    'GET\x20/:resource?_embed&_embed=',
    '/posts?_embed=comments&_embed=refs',
    'should\x20respond\x20with\x20corresponding\x20resources\x20and\x20embedded\x20resources',
    'GET\x20/:resource/:id?_embed=&_embed=',
    'should\x20respond\x20with\x20corresponding\x20resource\x20and\x20embedded\x20resources',
    'GET\x20/:resource?_expand=',
    'should\x20respond\x20with\x20corresponding\x20resource\x20and\x20expanded\x20inner\x20resources',
    'post',
    'GET\x20/:resource/:id?_expand=',
    'GET\x20/:resource?_expand=&_expand',
    '/refs?_expand=post&_expand=user',
    'GET\x20/:resource/:id?_expand=&_expand=',
    'user',
    '/comments/1?_expand=post&_expand=user',
    'GET\x20/:resource>_delay=',
    'should\x20delay\x20response',
    '/posts?_delay=1100',
    'Request\x20wasn\x27t\x20delayed',
    'POST\x20/:resource',
    'send',
    'Location',
    'strictEqual',
    'type',
    'should\x20respond\x20with\x20json,\x20create\x20a\x20resource\x20and\x20generate\x20string\x20id',
    '/refs',
    'http://foo.com',
    'POST\x20/:parent/:parentId/:resource',
    'should\x20respond\x20with\x20json\x20and\x20set\x20parentId',
    '/posts/1/comments',
    'put',
    '/posts/1',
    'Accept',
    'application/json',
    'deepStrictEqual',
    'should\x20respond\x20with\x20404\x20if\x20resource\x20is\x20not\x20found',
    'PUT\x20/:resource:id?_delay=',
    'should\x20respond\x20with\x20json\x20and\x20update\x20resource',
    'patch',
    'PATCH\x20/:resource:id?_delay=',
    '/posts/1?_delay=1100',
    'DELETE\x20/:resource/:id',
    'del',
    'Static\x20routes',
    'GET\x20/',
    'should\x20respond\x20with\x20html',
    'GET\x20/script.js',
    'should\x20be\x20accessible',
    'getState',
    'Responses',
    'should\x20have\x20no\x20cache\x20headers\x20(for\x20IE)',
    '/db',
    'Cache-Control',
    'Pragma',
    'no-cache',
    'Expires',
    'Rewriter',
    'should\x20rewrite\x20using\x20prefix',
    '/api/posts/1',
    'should\x20rewrite\x20using\x20params',
    '/blog/posts/1/show',
    'should\x20rewrite\x20using\x20query\x20without\x20params',
    '/articles?_id=1',
    'should\x20expose\x20routes',
    '/__rules',
    'render',
    'data',
    'should\x20be\x20possible\x20to\x20wrap\x20response',
    'router.db._.id',
    'setState',
    '_id',
    'should\x20be\x20possible\x20to\x20GET\x20using\x20a\x20different\x20id\x20property',
    'hello',
    '264918rRKLGW',
    '690937wUnGRN',
    '1dBipVg',
    '2141letUwT',
    '55WCybKl',
    '1471047FMZCgT',
    '659164sXKGeZ',
    '1IGrKKH',
    '118801kiyEuY',
    '1103415UDwsfC'
];
const _0x16adab = _0x41ef;
function _0x41ef(_0x1737b9, _0x4f0f5e) {
    return _0x41ef = function (_0x4b8bdd, _0x41efb7) {
        _0x4b8bdd = _0x4b8bdd - 0x140;
        let _0x353c9c = _0x4b8b[_0x4b8bdd];
        return _0x353c9c;
    }, _0x41ef(_0x1737b9, _0x4f0f5e);
}
(function (_0x20daac, _0x2fc501) {
    const _0x59e928 = _0x41ef;
    while (!![]) {
        try {
            const _0x348ad5 = parseInt(_0x59e928(0x140)) + parseInt(_0x59e928(0x141)) * parseInt(_0x59e928(0x142)) + parseInt(_0x59e928(0x143)) * parseInt(_0x59e928(0x144)) + parseInt(_0x59e928(0x145)) + -parseInt(_0x59e928(0x146)) + -parseInt(_0x59e928(0x147)) * -parseInt(_0x59e928(0x148)) + -parseInt(_0x59e928(0x149));
            if (_0x348ad5 === _0x2fc501)
                break;
            else
                _0x20daac['push'](_0x20daac['shift']());
        } catch (_0x6ce7a) {
            _0x20daac['push'](_0x20daac['shift']());
        }
    }
}(_0x4b8b, 0xdbf0f));
const assert = require(_0x16adab(0x14a)), _ = require(_0x16adab(0x14b)), request = require(_0x16adab(0x14c)), jsonServer = require(_0x16adab(0x14d));
describe(_0x16adab(0x14e), () => {
    const _0x639934 = _0x16adab;
    let _0x19e203, _0x50c526, _0x5e5fac;
    const _0xc05eb8 = {
        '/api/*': _0x639934(0x14f),
        '/blog/posts/:id/show': _0x639934(0x150),
        '/comments/special/:userId-:body': '/comments/?userId=:userId&body=:body',
        '/firstpostwithcomments': _0x639934(0x151),
        '/articles\x5c?_id=:id': _0x639934(0x150)
    };
    beforeEach(() => {
        const _0x29ef98 = _0x639934;
        _0x5e5fac = {}, _0x5e5fac[_0x29ef98(0x152)] = [
            {
                'id': 0x1,
                'body': _0x29ef98(0x153)
            },
            {
                'id': 0x2,
                'body': _0x29ef98(0x154)
            }
        ], _0x5e5fac['tags'] = [
            {
                'id': 0x1,
                'body': _0x29ef98(0x155)
            },
            {
                'id': 0x2,
                'body': _0x29ef98(0x156)
            },
            {
                'id': 0x3,
                'body': 'photo'
            }
        ], _0x5e5fac[_0x29ef98(0x157)] = [
            {
                'id': 0x1,
                'username': _0x29ef98(0x158),
                'tel': _0x29ef98(0x159)
            },
            {
                'id': 0x2,
                'username': _0x29ef98(0x15a),
                'tel': _0x29ef98(0x15b)
            }
        ], _0x5e5fac[_0x29ef98(0x15c)] = [
            {
                'id': 0x1,
                'body': _0x29ef98(0x153),
                'published': !![],
                'postId': 0x1,
                'userId': 0x1
            },
            {
                'id': 0x2,
                'body': _0x29ef98(0x154),
                'published': ![],
                'postId': 0x1,
                'userId': 0x2
            },
            {
                'id': 0x3,
                'body': _0x29ef98(0x15d),
                'published': ![],
                'postId': 0x2,
                'userId': 0x1
            },
            {
                'id': 0x4,
                'body': _0x29ef98(0x15e),
                'published': !![],
                'postId': 0x2,
                'userId': 0x2
            },
            {
                'id': 0x5,
                'body': 'quux',
                'published': ![],
                'postId': 0x2,
                'userId': 0x1
            }
        ], _0x5e5fac[_0x29ef98(0x15f)] = [
            {
                'id': 0x1,
                'name': 'Aileen',
                'country': 'Colombia',
                'total': 0x64
            },
            {
                'id': 0x2,
                'name': _0x29ef98(0x160),
                'country': _0x29ef98(0x161),
                'total': 0xc8
            },
            {
                'id': 0x3,
                'name': _0x29ef98(0x162),
                'country': _0x29ef98(0x161),
                'total': 0x12c
            },
            {
                'id': 0x4,
                'name': 'Daniel',
                'country': _0x29ef98(0x163),
                'total': 0x1e
            },
            {
                'id': 0x5,
                'name': _0x29ef98(0x164),
                'country': _0x29ef98(0x163),
                'total': 0x14
            },
            {
                'id': 0x6,
                'name': _0x29ef98(0x165),
                'country': _0x29ef98(0x163),
                'total': 0xa
            },
            {
                'id': 0x7,
                'name': _0x29ef98(0x166),
                'country': 'Argentina',
                'total': 0x1
            },
            {
                'id': 0x8,
                'name': 'Henry',
                'country': _0x29ef98(0x167),
                'total': 0x2
            },
            {
                'id': 0x9,
                'name': _0x29ef98(0x168),
                'country': _0x29ef98(0x167),
                'total': 0x3
            }
        ], _0x5e5fac[_0x29ef98(0x169)] = [{
                'id': 'abcd-1234',
                'url': 'http://example.com',
                'postId': 0x1,
                'userId': 0x1
            }], _0x5e5fac['stringIds'] = [{ 'id': _0x29ef98(0x16a) }], _0x5e5fac[_0x29ef98(0x16b)] = [
            { 'a': { 'b': 0x1 } },
            { 'a': 0x1 }
        ], _0x5e5fac['nested'] = [
            { 'resource': { 'name': _0x29ef98(0x16c) } },
            { 'resource': { 'name': _0x29ef98(0x16d) } },
            { 'resource': { 'name': _0x29ef98(0x16e) } }
        ], _0x5e5fac['list'] = [
            { 'id': 0x1 },
            { 'id': 0x2 },
            { 'id': 0x3 },
            { 'id': 0x4 },
            { 'id': 0x5 },
            { 'id': 0x6 },
            { 'id': 0x7 },
            { 'id': 0x8 },
            { 'id': 0x9 },
            { 'id': 0xa },
            { 'id': 0xb },
            { 'id': 0xc },
            { 'id': 0xd },
            { 'id': 0xe },
            { 'id': 0xf }
        ], _0x19e203 = jsonServer['create'](), _0x50c526 = jsonServer[_0x29ef98(0x16f)](_0x5e5fac), _0x19e203[_0x29ef98(0x170)](jsonServer['defaults']()), _0x19e203[_0x29ef98(0x170)](jsonServer[_0x29ef98(0x171)](_0xc05eb8)), _0x19e203['use'](_0x50c526);
    }), describe(_0x639934(0x172), () => {
        const _0x3535ac = _0x639934;
        test(_0x3535ac(0x173), () => request(_0x19e203)[_0x3535ac(0x174)]('/db')[_0x3535ac(0x175)](_0x3535ac(0x176), /json/)[_0x3535ac(0x175)](0xc8, _0x5e5fac));
    }), describe(_0x639934(0x177), () => {
        const _0x319e39 = _0x639934;
        test(_0x319e39(0x178), () => request(_0x19e203)[_0x319e39(0x174)](_0x319e39(0x179))[_0x319e39(0x17a)]('Origin', _0x319e39(0x17b))['expect'](_0x319e39(0x176), /json/)[_0x319e39(0x175)](_0x319e39(0x17c), _0x319e39(0x17d))[_0x319e39(0x175)]('Access-Control-Allow-Origin', _0x319e39(0x17b))['expect'](0xc8, _0x5e5fac[_0x319e39(0x152)])), test('should\x20respond\x20with\x20404\x20if\x20resource\x20is\x20not\x20found', () => request(_0x19e203)['get'](_0x319e39(0x17e))[_0x319e39(0x175)](0x194));
    }), describe(_0x639934(0x17f), () => {
        const _0xec2fde = _0x639934;
        test(_0xec2fde(0x180), () => request(_0x19e203)[_0xec2fde(0x174)](_0xec2fde(0x181))[_0xec2fde(0x175)](_0xec2fde(0x176), /json/)['expect'](0xc8, [_0x5e5fac[_0xec2fde(0x15c)][0x0]])), test(_0xec2fde(0x182), () => request(_0x19e203)[_0xec2fde(0x174)](_0xec2fde(0x183))['expect'](_0xec2fde(0x176), /json/)[_0xec2fde(0x175)](0xc8, [_0x5e5fac[_0xec2fde(0x157)][0x1]])), test(_0xec2fde(0x184), () => request(_0x19e203)[_0xec2fde(0x174)]('/comments?id=1&id=2')[_0xec2fde(0x175)]('Content-Type', /json/)[_0xec2fde(0x175)](0xc8, [
            _0x5e5fac[_0xec2fde(0x15c)][0x0],
            _0x5e5fac[_0xec2fde(0x15c)][0x1]
        ])), test(_0xec2fde(0x185), () => request(_0x19e203)['get']('/deep?a.b=1')[_0xec2fde(0x175)](_0xec2fde(0x176), /json/)[_0xec2fde(0x175)](0xc8, [_0x5e5fac['deep'][0x0]])), test(_0xec2fde(0x186), () => request(_0x19e203)['get'](_0xec2fde(0x187))['expect'](_0xec2fde(0x176), /text/)[_0xec2fde(0x175)](new RegExp(_0x5e5fac[_0xec2fde(0x15c)][0x0][_0xec2fde(0x188)]))['expect'](0xc8)), test('should\x20ignore\x20unknown\x20query\x20parameters', () => request(_0x19e203)[_0xec2fde(0x174)]('/comments?foo=1&bar=2')[_0xec2fde(0x175)]('Content-Type', /json/)[_0xec2fde(0x175)](0xc8, _0x5e5fac[_0xec2fde(0x15c)])), test(_0xec2fde(0x189), () => {
            const _0xa096e6 = _0xec2fde;
            return _0x5e5fac[_0xa096e6(0x152)][_0xa096e6(0x18a)]({
                'id': 0x63,
                'body': null
            }), request(_0x19e203)[_0xa096e6(0x174)](_0xa096e6(0x18b))['expect']('Content-Type', /json/)[_0xa096e6(0x175)](0xc8, [_0x5e5fac[_0xa096e6(0x152)][0x0]]);
        });
    }), describe('GET\x20/:resource?q=', () => {
        const _0x1ff251 = _0x639934;
        test('should\x20respond\x20with\x20json\x20and\x20make\x20a\x20full-text\x20search', () => request(_0x19e203)[_0x1ff251(0x174)](_0x1ff251(0x18c))[_0x1ff251(0x175)](_0x1ff251(0x176), /json/)[_0x1ff251(0x175)](0xc8, [
            _0x5e5fac[_0x1ff251(0x18d)][0x1],
            _0x5e5fac['tags'][0x2]
        ])), test(_0x1ff251(0x18e), () => request(_0x19e203)[_0x1ff251(0x174)](_0x1ff251(0x18f))['expect']('Content-Type', /json/)[_0x1ff251(0x175)](0xc8, _0x5e5fac['deep'])), test('should\x20return\x20an\x20empty\x20array\x20when\x20nothing\x20is\x20matched', () => request(_0x19e203)['get'](_0x1ff251(0x190))[_0x1ff251(0x175)]('Content-Type', /json/)[_0x1ff251(0x175)](0xc8, [])), test(_0x1ff251(0x191), () => request(_0x19e203)[_0x1ff251(0x174)](_0x1ff251(0x192))['expect']('Content-Type', /json/)['expect'](0xc8, [_0x5e5fac[_0x1ff251(0x15c)][0x3]])), test(_0x1ff251(0x193), () => request(_0x19e203)['get'](_0x1ff251(0x194))[_0x1ff251(0x175)](_0x1ff251(0x176), /json/)[_0x1ff251(0x175)](0xc8, [_0x5e5fac[_0x1ff251(0x15c)][0x0]])), test('should\x20support\x20filtering\x20by\x20boolean\x20value\x20false', () => request(_0x19e203)[_0x1ff251(0x174)]('/comments?published=false')[_0x1ff251(0x175)](_0x1ff251(0x176), /json/)[_0x1ff251(0x175)](0xc8, [
            _0x5e5fac[_0x1ff251(0x15c)][0x1],
            _0x5e5fac['comments'][0x2],
            _0x5e5fac['comments'][0x4]
        ]));
    }), describe('GET\x20/:resource?_end=', () => {
        const _0x572905 = _0x639934;
        test(_0x572905(0x195), () => request(_0x19e203)[_0x572905(0x174)]('/comments?_end=2')[_0x572905(0x175)]('Content-Type', /json/)['expect'](_0x572905(0x196), _0x5e5fac['comments']['length'][_0x572905(0x197)]())[_0x572905(0x175)](_0x572905(0x198), _0x572905(0x199))[_0x572905(0x175)](0xc8, _0x5e5fac[_0x572905(0x15c)][_0x572905(0x19a)](0x0, 0x2)));
    }), describe(_0x639934(0x19b), () => {
        const _0x59169a = _0x639934;
        test(_0x59169a(0x19c), () => request(_0x19e203)[_0x59169a(0x174)](_0x59169a(0x19d))['expect']('Content-Type', /json/)[_0x59169a(0x175)](0xc8, [
            _0x5e5fac[_0x59169a(0x18d)][0x1],
            _0x5e5fac[_0x59169a(0x18d)][0x0],
            _0x5e5fac[_0x59169a(0x18d)][0x2]
        ])), test('should\x20reverse\x20sorting\x20with\x20_order=DESC', () => request(_0x19e203)[_0x59169a(0x174)](_0x59169a(0x19e))['expect'](_0x59169a(0x176), /json/)[_0x59169a(0x175)](0xc8, [
            _0x5e5fac[_0x59169a(0x18d)][0x2],
            _0x5e5fac['tags'][0x0],
            _0x5e5fac[_0x59169a(0x18d)][0x1]
        ])), test('should\x20reverse\x20sorting\x20with\x20_order=desc\x20(case\x20insensitive)', () => request(_0x19e203)[_0x59169a(0x174)](_0x59169a(0x19f))[_0x59169a(0x175)](_0x59169a(0x176), /json/)[_0x59169a(0x175)](0xc8, [
            _0x5e5fac[_0x59169a(0x18d)][0x2],
            _0x5e5fac[_0x59169a(0x18d)][0x0],
            _0x5e5fac[_0x59169a(0x18d)][0x1]
        ])), test(_0x59169a(0x1a0), () => request(_0x19e203)['get'](_0x59169a(0x1a1))['expect'](_0x59169a(0x176), /json/)[_0x59169a(0x175)](0xc8, _0x5e5fac[_0x59169a(0x152)]['reverse']())), test(_0x59169a(0x1a2), () => request(_0x19e203)[_0x59169a(0x174)](_0x59169a(0x1a3))[_0x59169a(0x175)](_0x59169a(0x176), /json/)[_0x59169a(0x175)](0xc8, [
            _0x5e5fac[_0x59169a(0x1a4)][0x1],
            _0x5e5fac[_0x59169a(0x1a4)][0x0],
            _0x5e5fac[_0x59169a(0x1a4)][0x2]
        ])), test(_0x59169a(0x1a5), () => request(_0x19e203)[_0x59169a(0x174)]('/buyers?_sort=country,total&_order=asc,desc')[_0x59169a(0x175)](_0x59169a(0x176), /json/)[_0x59169a(0x175)](0xc8, [
            _0x5e5fac['buyers'][0x8],
            _0x5e5fac[_0x59169a(0x15f)][0x7],
            _0x5e5fac[_0x59169a(0x15f)][0x6],
            _0x5e5fac[_0x59169a(0x15f)][0x3],
            _0x5e5fac[_0x59169a(0x15f)][0x4],
            _0x5e5fac[_0x59169a(0x15f)][0x5],
            _0x5e5fac[_0x59169a(0x15f)][0x2],
            _0x5e5fac['buyers'][0x1],
            _0x5e5fac['buyers'][0x0]
        ]));
    }), describe(_0x639934(0x1a6), () => {
        const _0x5c6366 = _0x639934;
        test('should\x20respond\x20with\x20a\x20sliced\x20array', () => request(_0x19e203)['get'](_0x5c6366(0x1a7))[_0x5c6366(0x175)]('Content-Type', /json/)['expect']('X-Total-Count', _0x5e5fac[_0x5c6366(0x15c)][_0x5c6366(0x1a8)]['toString']())[_0x5c6366(0x175)](_0x5c6366(0x198), 'X-Total-Count')[_0x5c6366(0x175)](0xc8, _0x5e5fac[_0x5c6366(0x15c)]['slice'](0x1, 0x2)));
    }), describe(_0x639934(0x1a9), () => {
        const _0x2714c8 = _0x639934;
        test(_0x2714c8(0x1aa), () => request(_0x19e203)[_0x2714c8(0x174)](_0x2714c8(0x1ab))[_0x2714c8(0x175)](_0x2714c8(0x176), /json/)[_0x2714c8(0x175)](_0x2714c8(0x199), _0x5e5fac[_0x2714c8(0x15c)]['length']['toString']())[_0x2714c8(0x175)](_0x2714c8(0x198), _0x2714c8(0x199))[_0x2714c8(0x175)](0xc8, _0x5e5fac[_0x2714c8(0x15c)][_0x2714c8(0x19a)](0x1, 0x2)));
    }), describe(_0x639934(0x1ac), () => {
        const _0x4006b7 = _0x639934;
        test(_0x4006b7(0x1ad), () => request(_0x19e203)[_0x4006b7(0x174)](_0x4006b7(0x1ae))[_0x4006b7(0x175)](_0x4006b7(0x176), /json/)[_0x4006b7(0x175)](_0x4006b7(0x196), _0x5e5fac['list'][_0x4006b7(0x1a8)][_0x4006b7(0x197)]())['expect'](_0x4006b7(0x198), _0x4006b7(0x1af))[_0x4006b7(0x175)](0xc8, _0x5e5fac[_0x4006b7(0x1b0)][_0x4006b7(0x19a)](0xa, 0x14)));
    }), describe(_0x639934(0x1b1), () => {
        const _0x343c69 = _0x639934;
        test(_0x343c69(0x1b2), () => {
            const _0x4f136f = _0x343c69, _0x2c7d94 = [
                    _0x4f136f(0x1b3),
                    _0x4f136f(0x1b4),
                    _0x4f136f(0x1b5),
                    _0x4f136f(0x1b6)
                ]['join'](',\x20');
            return request(_0x19e203)[_0x4f136f(0x174)](_0x4f136f(0x1b7))[_0x4f136f(0x17a)](_0x4f136f(0x1b8), _0x4f136f(0x1b9))[_0x4f136f(0x175)](_0x4f136f(0x176), /json/)['expect']('x-total-count', _0x5e5fac[_0x4f136f(0x1b0)][_0x4f136f(0x1a8)][_0x4f136f(0x197)]())[_0x4f136f(0x175)](_0x4f136f(0x1ba), _0x2c7d94)['expect'](_0x4f136f(0x198), _0x4f136f(0x1af))['expect'](0xc8, _0x5e5fac[_0x4f136f(0x1b0)][_0x4f136f(0x19a)](0x1, 0x2));
        });
    }), describe(_0x639934(0x1bb), () => {
        const _0x548a37 = _0x639934;
        test(_0x548a37(0x1aa), () => request(_0x19e203)[_0x548a37(0x174)](_0x548a37(0x1bc))[_0x548a37(0x175)]('Content-Type', /json/)[_0x548a37(0x175)](0xc8, _0x5e5fac['comments'][_0x548a37(0x19a)](0x1, 0x3)));
    }), describe(_0x639934(0x1bd), () => {
        const _0x20ce0c = _0x639934;
        test(_0x20ce0c(0x1aa), () => request(_0x19e203)['get'](_0x20ce0c(0x1be))[_0x20ce0c(0x175)](_0x20ce0c(0x176), /json/)['expect'](0xc8, _0x5e5fac[_0x20ce0c(0x15c)]['slice'](0x1))), test('should\x20accept\x20multiple\x20parameters', () => request(_0x19e203)['get'](_0x20ce0c(0x1bf))[_0x20ce0c(0x175)]('Content-Type', /json/)[_0x20ce0c(0x175)](0xc8, _0x5e5fac[_0x20ce0c(0x15c)]['slice'](0x2)));
    }), describe('GET\x20/:resource?attr_like=', () => {
        const _0x405588 = _0x639934;
        test(_0x405588(0x1c0), () => request(_0x19e203)[_0x405588(0x174)]('/tags?body_like=photo')[_0x405588(0x175)](_0x405588(0x176), /json/)[_0x405588(0x175)](0xc8, [
            _0x5e5fac[_0x405588(0x18d)][0x1],
            _0x5e5fac[_0x405588(0x18d)][0x2]
        ])), test('should\x20accept\x20multiple\x20parameters', () => request(_0x19e203)[_0x405588(0x174)]('/tags?body_like=photo&body_like=tech')[_0x405588(0x175)](_0x405588(0x176), /json/)[_0x405588(0x175)](0xc8, _0x5e5fac[_0x405588(0x18d)]));
    }), describe(_0x639934(0x1c1), () => {
        const _0x327aa2 = _0x639934;
        test(_0x327aa2(0x1c2), () => request(_0x19e203)['get']('/posts/1/comments')[_0x327aa2(0x175)](_0x327aa2(0x176), /json/)[_0x327aa2(0x175)](0xc8, [
            _0x5e5fac[_0x327aa2(0x15c)][0x0],
            _0x5e5fac[_0x327aa2(0x15c)][0x1]
        ]));
    }), describe(_0x639934(0x1c3), () => {
        const _0x1bdb4f = _0x639934;
        test('should\x20respond\x20with\x20json\x20and\x20corresponding\x20resource', () => request(_0x19e203)[_0x1bdb4f(0x174)]('/posts/1')['expect'](_0x1bdb4f(0x176), /json/)[_0x1bdb4f(0x175)](0xc8, _0x5e5fac[_0x1bdb4f(0x152)][0x0])), test(_0x1bdb4f(0x1c4), () => request(_0x19e203)['get'](_0x1bdb4f(0x1c5))[_0x1bdb4f(0x175)](_0x1bdb4f(0x176), /json/)[_0x1bdb4f(0x175)](0xc8, _0x5e5fac['refs'][0x0])), test(_0x1bdb4f(0x1c6), () => request(_0x19e203)[_0x1bdb4f(0x174)](_0x1bdb4f(0x1c7))[_0x1bdb4f(0x175)](_0x1bdb4f(0x176), /json/)[_0x1bdb4f(0x175)](0xc8, _0x5e5fac[_0x1bdb4f(0x1c8)][0x0])), test('should\x20respond\x20with\x20404\x20if\x20resource\x20is\x20not\x20found', () => request(_0x19e203)[_0x1bdb4f(0x174)](_0x1bdb4f(0x1c9))[_0x1bdb4f(0x175)](_0x1bdb4f(0x176), /json/)[_0x1bdb4f(0x175)](0x194, {}));
    }), describe(_0x639934(0x1ca), () => {
        test('should\x20respond\x20with\x20corresponding\x20resources\x20and\x20embedded\x20resources', () => {
            const _0x172878 = _0x41ef, _0x3a1753 = _[_0x172878(0x1cb)](_0x5e5fac['posts']);
            return _0x3a1753[0x0]['comments'] = [
                _0x5e5fac[_0x172878(0x15c)][0x0],
                _0x5e5fac[_0x172878(0x15c)][0x1]
            ], _0x3a1753[0x1][_0x172878(0x15c)] = [
                _0x5e5fac[_0x172878(0x15c)][0x2],
                _0x5e5fac[_0x172878(0x15c)][0x3],
                _0x5e5fac[_0x172878(0x15c)][0x4]
            ], request(_0x19e203)[_0x172878(0x174)]('/posts?_embed=comments')['expect'](_0x172878(0x176), /json/)[_0x172878(0x175)](0xc8, _0x3a1753);
        });
    }), describe(_0x639934(0x1cc), () => {
        test('should\x20respond\x20with\x20corresponding\x20resources\x20and\x20embedded\x20resources', () => {
            const _0x46c5e1 = _0x41ef, _0x484e60 = _[_0x46c5e1(0x1cb)](_0x5e5fac[_0x46c5e1(0x152)]);
            return _0x484e60[0x0][_0x46c5e1(0x15c)] = [
                _0x5e5fac[_0x46c5e1(0x15c)][0x0],
                _0x5e5fac[_0x46c5e1(0x15c)][0x1]
            ], _0x484e60[0x0]['refs'] = [_0x5e5fac[_0x46c5e1(0x169)][0x0]], _0x484e60[0x1][_0x46c5e1(0x15c)] = [
                _0x5e5fac[_0x46c5e1(0x15c)][0x2],
                _0x5e5fac[_0x46c5e1(0x15c)][0x3],
                _0x5e5fac[_0x46c5e1(0x15c)][0x4]
            ], _0x484e60[0x1][_0x46c5e1(0x169)] = [], request(_0x19e203)[_0x46c5e1(0x174)](_0x46c5e1(0x1cd))[_0x46c5e1(0x175)](_0x46c5e1(0x176), /json/)['expect'](0xc8, _0x484e60);
        });
    }), describe('GET\x20/:resource/:id?_embed=', () => {
        const _0x59664d = _0x639934;
        test(_0x59664d(0x1ce), () => {
            const _0x58a217 = _0x59664d, _0x3fdaf9 = _[_0x58a217(0x1cb)](_0x5e5fac[_0x58a217(0x152)][0x0]);
            return _0x3fdaf9[_0x58a217(0x15c)] = [
                _0x5e5fac['comments'][0x0],
                _0x5e5fac['comments'][0x1]
            ], request(_0x19e203)[_0x58a217(0x174)](_0x58a217(0x151))[_0x58a217(0x175)](_0x58a217(0x176), /json/)[_0x58a217(0x175)](0xc8, _0x3fdaf9);
        });
    }), describe(_0x639934(0x1cf), () => {
        const _0x21ff30 = _0x639934;
        test(_0x21ff30(0x1d0), () => {
            const _0x192c4d = _0x21ff30, _0x1aafd2 = _[_0x192c4d(0x1cb)](_0x5e5fac[_0x192c4d(0x152)][0x0]);
            return _0x1aafd2[_0x192c4d(0x15c)] = [
                _0x5e5fac[_0x192c4d(0x15c)][0x0],
                _0x5e5fac[_0x192c4d(0x15c)][0x1]
            ], _0x1aafd2[_0x192c4d(0x169)] = [_0x5e5fac[_0x192c4d(0x169)][0x0]], request(_0x19e203)[_0x192c4d(0x174)]('/posts/1?_embed=comments&_embed=refs')[_0x192c4d(0x175)](_0x192c4d(0x176), /json/)[_0x192c4d(0x175)](0xc8, _0x1aafd2);
        });
    }), describe(_0x639934(0x1d1), () => {
        const _0x380c10 = _0x639934;
        test(_0x380c10(0x1d2), () => {
            const _0x3e4346 = _0x380c10, _0x4c15e3 = _[_0x3e4346(0x1cb)](_0x5e5fac[_0x3e4346(0x169)]);
            return _0x4c15e3[0x0][_0x3e4346(0x1d3)] = _0x5e5fac[_0x3e4346(0x152)][0x0], request(_0x19e203)['get']('/refs?_expand=post')[_0x3e4346(0x175)](_0x3e4346(0x176), /json/)[_0x3e4346(0x175)](0xc8, _0x4c15e3);
        });
    }), describe(_0x639934(0x1d4), () => {
        const _0x227893 = _0x639934;
        test(_0x227893(0x1d2), () => {
            const _0x1ea04c = _0x227893, _0x4c7b85 = _[_0x1ea04c(0x1cb)](_0x5e5fac[_0x1ea04c(0x15c)][0x0]);
            return _0x4c7b85['post'] = _0x5e5fac[_0x1ea04c(0x152)][0x0], request(_0x19e203)['get']('/comments/1?_expand=post')[_0x1ea04c(0x175)](_0x1ea04c(0x176), /json/)[_0x1ea04c(0x175)](0xc8, _0x4c7b85);
        });
    }), describe(_0x639934(0x1d5), () => {
        const _0x354346 = _0x639934;
        test(_0x354346(0x1d2), () => {
            const _0x3914a7 = _0x354346, _0xa2a755 = _['cloneDeep'](_0x5e5fac['refs']);
            return _0xa2a755[0x0]['post'] = _0x5e5fac[_0x3914a7(0x152)][0x0], _0xa2a755[0x0]['user'] = _0x5e5fac[_0x3914a7(0x157)][0x0], request(_0x19e203)[_0x3914a7(0x174)](_0x3914a7(0x1d6))[_0x3914a7(0x175)](_0x3914a7(0x176), /json/)['expect'](0xc8, _0xa2a755);
        });
    }), describe(_0x639934(0x1d7), () => {
        const _0x33c6a6 = _0x639934;
        test(_0x33c6a6(0x1d2), () => {
            const _0x3f4afe = _0x33c6a6, _0xc523f3 = _0x5e5fac[_0x3f4afe(0x15c)][0x0];
            return _0xc523f3[_0x3f4afe(0x1d3)] = _0x5e5fac[_0x3f4afe(0x152)][0x0], _0xc523f3[_0x3f4afe(0x1d8)] = _0x5e5fac['users'][0x0], request(_0x19e203)['get'](_0x3f4afe(0x1d9))[_0x3f4afe(0x175)]('Content-Type', /json/)['expect'](0xc8, _0xc523f3);
        });
    }), describe(_0x639934(0x1da), () => {
        const _0x315e1c = _0x639934;
        test(_0x315e1c(0x1db), _0x218c4f => {
            const _0x11082b = _0x315e1c, _0x348e64 = new Date();
            request(_0x19e203)[_0x11082b(0x174)](_0x11082b(0x1dc))[_0x11082b(0x175)](0xc8, function (_0x4d45c4) {
                const _0x1a1d11 = _0x11082b, _0x31586f = new Date();
                _0x218c4f(_0x31586f - _0x348e64 > 0x3e8 ? _0x4d45c4 : new Error(_0x1a1d11(0x1dd)));
            });
        });
    }), describe(_0x639934(0x1de), () => {
        const _0x3cb916 = _0x639934;
        test('should\x20respond\x20with\x20json,\x20create\x20a\x20resource\x20and\x20increment\x20id', async () => {
            const _0x1dcd8c = _0x41ef;
            await request(_0x19e203)['post'](_0x1dcd8c(0x179))[_0x1dcd8c(0x1df)]({
                'body': _0x1dcd8c(0x153),
                'booleanValue': !![],
                'integerValue': 0x1
            })[_0x1dcd8c(0x175)](_0x1dcd8c(0x198), 'Location')[_0x1dcd8c(0x175)](_0x1dcd8c(0x1e0), /posts\/3$/)[_0x1dcd8c(0x175)](_0x1dcd8c(0x176), /json/)[_0x1dcd8c(0x175)](0xc9, {
                'id': 0x3,
                'body': _0x1dcd8c(0x153),
                'booleanValue': !![],
                'integerValue': 0x1
            }), assert[_0x1dcd8c(0x1e1)](_0x5e5fac[_0x1dcd8c(0x152)]['length'], 0x3);
        }), test('should\x20support\x20x-www-form-urlencoded', async () => {
            const _0x5c2cb9 = _0x41ef;
            await request(_0x19e203)[_0x5c2cb9(0x1d3)](_0x5c2cb9(0x179))[_0x5c2cb9(0x1e2)]('form')[_0x5c2cb9(0x1df)]({
                'body': _0x5c2cb9(0x153),
                'booleanValue': !![],
                'integerValue': 0x1
            })[_0x5c2cb9(0x175)](_0x5c2cb9(0x176), /json/)[_0x5c2cb9(0x175)](0xc9, {
                'id': 0x3,
                'body': _0x5c2cb9(0x153),
                'booleanValue': _0x5c2cb9(0x17d),
                'integerValue': '1'
            }), assert[_0x5c2cb9(0x1e1)](_0x5e5fac[_0x5c2cb9(0x152)][_0x5c2cb9(0x1a8)], 0x3);
        }), test(_0x3cb916(0x1e3), async () => {
            const _0x74a9a = _0x3cb916;
            await request(_0x19e203)[_0x74a9a(0x1d3)](_0x74a9a(0x1e4))[_0x74a9a(0x1df)]({
                'url': _0x74a9a(0x1e5),
                'postId': 0x1
            })[_0x74a9a(0x175)](_0x74a9a(0x176), /json/)[_0x74a9a(0x175)](0xc9), assert[_0x74a9a(0x1e1)](_0x5e5fac[_0x74a9a(0x169)][_0x74a9a(0x1a8)], 0x2);
        });
    }), describe(_0x639934(0x1e6), () => {
        const _0x231289 = _0x639934;
        test(_0x231289(0x1e7), () => request(_0x19e203)[_0x231289(0x1d3)](_0x231289(0x1e8))[_0x231289(0x1df)]({ 'body': _0x231289(0x153) })[_0x231289(0x175)]('Content-Type', /json/)[_0x231289(0x175)](0xc9, {
            'id': 0x6,
            'postId': '1',
            'body': 'foo'
        }));
    }), describe('POST\x20/:resource?_delay=', () => {
        const _0x21f184 = _0x639934;
        test(_0x21f184(0x1db), _0x115777 => {
            const _0x4e42e7 = _0x21f184, _0x290c6e = new Date();
            request(_0x19e203)[_0x4e42e7(0x1d3)](_0x4e42e7(0x1dc))[_0x4e42e7(0x1df)]({
                'body': _0x4e42e7(0x153),
                'booleanValue': !![],
                'integerValue': 0x1
            })['expect'](0xc9, function (_0x1260f7) {
                const _0x1dfdb3 = _0x4e42e7, _0x1dcf02 = new Date();
                _0x115777(_0x1dcf02 - _0x290c6e > 0x3e8 ? _0x1260f7 : new Error(_0x1dfdb3(0x1dd)));
            });
        });
    }), describe('PUT\x20/:resource/:id', () => {
        const _0x395f5a = _0x639934;
        test('should\x20respond\x20with\x20json\x20and\x20replace\x20resource', async () => {
            const _0x812725 = _0x41ef, _0x2f382c = {
                    'id': 0x1,
                    'booleanValue': !![],
                    'integerValue': 0x1
                }, _0x331e7f = await request(_0x19e203)[_0x812725(0x1e9)](_0x812725(0x1ea))[_0x812725(0x17a)](_0x812725(0x1eb), _0x812725(0x1ec))[_0x812725(0x1df)](_0x2f382c)[_0x812725(0x175)]('Content-Type', /json/)[_0x812725(0x175)](0xc8, _0x2f382c);
            assert['deepStrictEqual'](_0x331e7f[_0x812725(0x188)], _0x2f382c), assert[_0x812725(0x1ed)](_0x5e5fac[_0x812725(0x152)][0x0], _0x2f382c);
        }), test(_0x395f5a(0x1ee), () => request(_0x19e203)[_0x395f5a(0x1e9)](_0x395f5a(0x1c9))[_0x395f5a(0x1df)]({
            'id': 0x1,
            'body': _0x395f5a(0x154)
        })[_0x395f5a(0x175)]('Content-Type', /json/)['expect'](0x194, {}));
    }), describe(_0x639934(0x1ef), () => {
        const _0x4d7feb = _0x639934;
        test(_0x4d7feb(0x1db), _0x50bc53 => {
            const _0x4a2981 = _0x4d7feb, _0x4cdb31 = new Date();
            request(_0x19e203)[_0x4a2981(0x1e9)]('/posts/1?_delay=1100')[_0x4a2981(0x17a)]('Accept', _0x4a2981(0x1ec))[_0x4a2981(0x1df)]({
                'id': 0x1,
                'booleanValue': !![],
                'integerValue': 0x1
            })['expect'](0xc8, function (_0x3fffde) {
                const _0x306cb3 = _0x4a2981, _0x19c294 = new Date();
                _0x50bc53(_0x19c294 - _0x4cdb31 > 0x3e8 ? _0x3fffde : new Error(_0x306cb3(0x1dd)));
            });
        });
    }), describe('PATCH\x20/:resource/:id', () => {
        const _0x2dd097 = _0x639934;
        test(_0x2dd097(0x1f0), async () => {
            const _0x2337cc = _0x2dd097, _0x59a4a0 = { 'body': _0x2337cc(0x154) }, _0x30fd30 = {
                    'id': 0x1,
                    'body': 'bar'
                }, _0x9a2450 = await request(_0x19e203)[_0x2337cc(0x1f1)](_0x2337cc(0x1ea))['send'](_0x59a4a0)['expect'](_0x2337cc(0x176), /json/)[_0x2337cc(0x175)](0xc8, _0x30fd30);
            assert['deepStrictEqual'](_0x9a2450[_0x2337cc(0x188)], _0x30fd30), assert[_0x2337cc(0x1ed)](_0x5e5fac[_0x2337cc(0x152)][0x0], _0x30fd30);
        }), test('should\x20respond\x20with\x20404\x20if\x20resource\x20is\x20not\x20found', () => request(_0x19e203)[_0x2dd097(0x1f1)](_0x2dd097(0x1c9))[_0x2dd097(0x1df)]({ 'body': 'bar' })[_0x2dd097(0x175)](_0x2dd097(0x176), /json/)[_0x2dd097(0x175)](0x194, {}));
    }), describe(_0x639934(0x1f2), () => {
        test('should\x20delay\x20response', _0x220e32 => {
            const _0x1306f2 = _0x41ef, _0xd45489 = new Date();
            request(_0x19e203)[_0x1306f2(0x1f1)](_0x1306f2(0x1f3))[_0x1306f2(0x1df)]({ 'body': _0x1306f2(0x154) })[_0x1306f2(0x1df)]({
                'id': 0x1,
                'booleanValue': !![],
                'integerValue': 0x1
            })[_0x1306f2(0x175)](0xc8, function (_0x139b2f) {
                const _0x48b36b = _0x1306f2, _0x3f6b9c = new Date();
                _0x220e32(_0x3f6b9c - _0xd45489 > 0x3e8 ? _0x139b2f : new Error(_0x48b36b(0x1dd)));
            });
        });
    }), describe(_0x639934(0x1f4), () => {
        const _0x37b1a6 = _0x639934;
        test('should\x20respond\x20with\x20empty\x20data,\x20destroy\x20resource\x20and\x20dependent\x20resources', async () => {
            const _0x2ad151 = _0x41ef;
            await request(_0x19e203)[_0x2ad151(0x1f5)](_0x2ad151(0x1ea))['expect'](0xc8, {}), assert['strictEqual'](_0x5e5fac[_0x2ad151(0x152)][_0x2ad151(0x1a8)], 0x1), assert[_0x2ad151(0x1e1)](_0x5e5fac[_0x2ad151(0x15c)][_0x2ad151(0x1a8)], 0x3);
        }), test(_0x37b1a6(0x1ee), () => request(_0x19e203)['del'](_0x37b1a6(0x1c9))[_0x37b1a6(0x175)](_0x37b1a6(0x176), /json/)[_0x37b1a6(0x175)](0x194, {}));
    }), describe('DELETE\x20/:resource:id?_delay=', () => {
        test('should\x20delay\x20response', _0x418e32 => {
            const _0x5b18a5 = _0x41ef, _0x2bce8a = new Date();
            request(_0x19e203)[_0x5b18a5(0x1f5)](_0x5b18a5(0x1f3))['send']({
                'id': 0x1,
                'booleanValue': !![],
                'integerValue': 0x1
            })[_0x5b18a5(0x175)](0xc8, function (_0x2a6ab2) {
                const _0x317718 = _0x5b18a5, _0x1cea32 = new Date();
                _0x418e32(_0x1cea32 - _0x2bce8a > 0x3e8 ? _0x2a6ab2 : new Error(_0x317718(0x1dd)));
            });
        });
    }), describe(_0x639934(0x1f6), () => {
        const _0x337335 = _0x639934;
        describe(_0x337335(0x1f7), () => {
            const _0x14cf55 = _0x337335;
            test(_0x14cf55(0x1f8), () => request(_0x19e203)[_0x14cf55(0x174)]('/')[_0x14cf55(0x175)](/You're successfully running JSON Server/)[_0x14cf55(0x175)](0xc8));
        }), describe(_0x337335(0x1f9), () => {
            const _0xad05e7 = _0x337335;
            test('should\x20respond\x20with\x20js', () => request(_0x19e203)[_0xad05e7(0x174)]('/script.js')['expect'](_0xad05e7(0x176), /javascript/)['expect'](0xc8));
        }), describe('GET\x20/style.css', () => {
            const _0x1a0a2c = _0x337335;
            test('should\x20respond\x20with\x20css', () => request(_0x19e203)[_0x1a0a2c(0x174)]('/style.css')[_0x1a0a2c(0x175)]('Content-Type', /css/)[_0x1a0a2c(0x175)](0xc8));
        });
    }), describe('Database\x20state', () => {
        const _0x3ab9f8 = _0x639934;
        test(_0x3ab9f8(0x1fa), () => {
            const _0x50f6f5 = _0x3ab9f8;
            assert(_0x50c526['db'][_0x50f6f5(0x1fb)]());
        });
    }), describe(_0x639934(0x1fc), () => {
        const _0x4fca5e = _0x639934;
        test(_0x4fca5e(0x1fd), () => request(_0x19e203)['get'](_0x4fca5e(0x1fe))[_0x4fca5e(0x175)](_0x4fca5e(0x1ff), 'no-cache')['expect'](_0x4fca5e(0x200), _0x4fca5e(0x201))['expect'](_0x4fca5e(0x202), '-1'));
    }), describe(_0x639934(0x203), () => {
        const _0xfaa54e = _0x639934;
        test(_0xfaa54e(0x204), () => request(_0x19e203)[_0xfaa54e(0x174)](_0xfaa54e(0x205))[_0xfaa54e(0x175)](_0x5e5fac['posts'][0x0])), test(_0xfaa54e(0x206), () => request(_0x19e203)[_0xfaa54e(0x174)](_0xfaa54e(0x207))['expect'](_0x5e5fac[_0xfaa54e(0x152)][0x0])), test(_0xfaa54e(0x208), () => {
            const _0x1a75e3 = _0xfaa54e, _0x335504 = _[_0x1a75e3(0x1cb)](_0x5e5fac[_0x1a75e3(0x152)][0x0]);
            return _0x335504[_0x1a75e3(0x15c)] = [
                _0x5e5fac['comments'][0x0],
                _0x5e5fac[_0x1a75e3(0x15c)][0x1]
            ], request(_0x19e203)[_0x1a75e3(0x174)]('/firstpostwithcomments')[_0x1a75e3(0x175)](_0x335504);
        }), test('should\x20rewrite\x20using\x20params\x20and\x20query', () => request(_0x19e203)[_0xfaa54e(0x174)]('/comments/special/1-quux')[_0xfaa54e(0x175)](0xc8, [_0x5e5fac[_0xfaa54e(0x15c)][0x4]])), test('should\x20rewrite\x20query\x20params', () => request(_0x19e203)[_0xfaa54e(0x174)](_0xfaa54e(0x209))[_0xfaa54e(0x175)](_0x5e5fac[_0xfaa54e(0x152)][0x0])), test(_0xfaa54e(0x20a), () => request(_0x19e203)[_0xfaa54e(0x174)](_0xfaa54e(0x20b))['expect'](_0xc05eb8));
    }), describe('router.render', () => {
        const _0x243ffd = _0x639934;
        beforeEach(() => {
            const _0x39f534 = _0x41ef;
            _0x50c526[_0x39f534(0x20c)] = (_0x27d0eb, _0x2aecce) => {
                const _0x416d77 = _0x39f534;
                _0x2aecce['jsonp']({ 'data': _0x2aecce['locals'][_0x416d77(0x20d)] });
            };
        }), test(_0x243ffd(0x20e), () => request(_0x19e203)[_0x243ffd(0x174)](_0x243ffd(0x1ea))[_0x243ffd(0x175)]('Content-Type', /json/)['expect'](0xc8, { 'data': _0x5e5fac[_0x243ffd(0x152)][0x0] }));
    }), describe(_0x639934(0x20f), () => {
        const _0x27b307 = _0x639934;
        beforeEach(() => {
            const _0x7ad0d9 = _0x41ef;
            _0x50c526['db'][_0x7ad0d9(0x210)]({ 'posts': [{ '_id': 0x1 }] }), _0x50c526['db']['_']['id'] = _0x7ad0d9(0x211);
        }), test(_0x27b307(0x212), () => request(_0x19e203)[_0x27b307(0x174)](_0x27b307(0x1ea))[_0x27b307(0x175)]('Content-Type', /json/)['expect'](0xc8, _0x50c526['db']['getState']()[_0x27b307(0x152)][0x0])), test('should\x20be\x20possible\x20to\x20POST\x20using\x20a\x20different\x20id\x20property', () => request(_0x19e203)[_0x27b307(0x1d3)]('/posts')[_0x27b307(0x1df)]({ 'body': _0x27b307(0x213) })[_0x27b307(0x175)](_0x27b307(0x176), /json/)[_0x27b307(0x175)](0xc9, {
            '_id': 0x2,
            'body': _0x27b307(0x213)
        }));
    });
});
