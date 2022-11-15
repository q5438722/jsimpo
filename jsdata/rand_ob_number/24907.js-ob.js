const assert = require('assert'), _ = require('lodash'), request = require('supertest'), jsonServer = require('../../src/server');
describe('Server', () => {
    let _0x37c431, _0x1edfad, _0x38ce51;
    const _0x490536 = {
        '/api/*': '/$1',
        '/blog/posts/:id/show': '/posts/:id',
        '/comments/special/:userId-:body': '/comments/?userId=:userId&body=:body',
        '/firstpostwithcomments': '/posts/1?_embed=comments',
        '/articles\x5c?_id=:id': '/posts/:id'
    };
    beforeEach(() => {
        _0x38ce51 = {}, _0x38ce51['posts'] = [
            {
                'id': 0x1,
                'body': 'foo'
            },
            {
                'id': 0x2,
                'body': 'bar'
            }
        ], _0x38ce51['tags'] = [
            {
                'id': 0x1,
                'body': 'Technology'
            },
            {
                'id': 0x2,
                'body': 'Photography'
            },
            {
                'id': 0x3,
                'body': 'photo'
            }
        ], _0x38ce51['users'] = [
            {
                'id': 0x1,
                'username': 'Jim',
                'tel': '0123'
            },
            {
                'id': 0x2,
                'username': 'George',
                'tel': '123'
            }
        ], _0x38ce51['comments'] = [
            {
                'id': 0x1,
                'body': 'foo',
                'published': !![],
                'postId': 0x1,
                'userId': 0x1
            },
            {
                'id': 0x2,
                'body': 'bar',
                'published': ![],
                'postId': 0x1,
                'userId': 0x2
            },
            {
                'id': 0x3,
                'body': 'baz',
                'published': ![],
                'postId': 0x2,
                'userId': 0x1
            },
            {
                'id': 0x4,
                'body': 'qux',
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
        ], _0x38ce51['buyers'] = [
            {
                'id': 0x1,
                'name': 'Aileen',
                'country': 'Colombia',
                'total': 0x64
            },
            {
                'id': 0x2,
                'name': 'Barney',
                'country': 'Colombia',
                'total': 0xc8
            },
            {
                'id': 0x3,
                'name': 'Carley',
                'country': 'Colombia',
                'total': 0x12c
            },
            {
                'id': 0x4,
                'name': 'Daniel',
                'country': 'Belize',
                'total': 0x1e
            },
            {
                'id': 0x5,
                'name': 'Ellen',
                'country': 'Belize',
                'total': 0x14
            },
            {
                'id': 0x6,
                'name': 'Frank',
                'country': 'Belize',
                'total': 0xa
            },
            {
                'id': 0x7,
                'name': 'Grace',
                'country': 'Argentina',
                'total': 0x1
            },
            {
                'id': 0x8,
                'name': 'Henry',
                'country': 'Argentina',
                'total': 0x2
            },
            {
                'id': 0x9,
                'name': 'Isabelle',
                'country': 'Argentina',
                'total': 0x3
            }
        ], _0x38ce51['refs'] = [{
                'id': 'abcd-1234',
                'url': 'http://example.com',
                'postId': 0x1,
                'userId': 0x1
            }], _0x38ce51['stringIds'] = [{ 'id': '1234' }], _0x38ce51['deep'] = [
            { 'a': { 'b': 0x1 } },
            { 'a': 0x1 }
        ], _0x38ce51['nested'] = [
            { 'resource': { 'name': 'dewey' } },
            { 'resource': { 'name': 'cheatem' } },
            { 'resource': { 'name': 'howe' } }
        ], _0x38ce51['list'] = [
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
        ], _0x37c431 = jsonServer['create'](), _0x1edfad = jsonServer['router'](_0x38ce51), _0x37c431['use'](jsonServer['defaults']()), _0x37c431['use'](jsonServer['rewriter'](_0x490536)), _0x37c431['use'](_0x1edfad);
    }), describe('GET\x20/db', () => {
        test('should\x20respond\x20with\x20json\x20and\x20full\x20database', () => request(_0x37c431)['get']('/db')['expect']('Content-Type', /json/)['expect'](0x157f * 0x1 + 0xd * -0x67 + 0x2 * -0x7be, _0x38ce51));
    }), describe('GET\x20/:resource', () => {
        test('should\x20respond\x20with\x20json\x20and\x20corresponding\x20resources', () => request(_0x37c431)['get']('/posts')['set']('Origin', 'http://example.com')['expect']('Content-Type', /json/)['expect']('Access-Control-Allow-Credentials', 'true')['expect']('Access-Control-Allow-Origin', 'http://example.com')['expect'](-0x1bd6 + -0x30c + -0x486 * -0x7, _0x38ce51['posts'])), test('should\x20respond\x20with\x20404\x20if\x20resource\x20is\x20not\x20found', () => request(_0x37c431)['get']('/undefined')['expect'](0x1 * 0x1d89 + -0x197b * 0x1 + 0x1 * -0x27a));
    }), describe('GET\x20/:resource?attr=&attr=', () => {
        test('should\x20respond\x20with\x20json\x20and\x20filter\x20resources', () => request(_0x37c431)['get']('/comments?postId=1&published=true')['expect']('Content-Type', /json/)['expect'](-0x2b * 0xac + -0x4 * -0x654 + 0x45c, [_0x38ce51['comments'][0xc7 + 0x7d * 0x1f + 0x2a7 * -0x6]])), test('should\x20be\x20strict', () => request(_0x37c431)['get']('/users?tel=123')['expect']('Content-Type', /json/)['expect'](0x145e + -0x1 * -0x230a + -0x36a0, [_0x38ce51['users'][-0x1 * -0x2702 + -0x22e4 + -0x15f * 0x3]])), test('should\x20support\x20multiple\x20filters', () => request(_0x37c431)['get']('/comments?id=1&id=2')['expect']('Content-Type', /json/)['expect'](-0x72c + 0x2234 + 0x8c * -0x30, [
            _0x38ce51['comments'][0x877 + -0xce * -0x9 + -0xfb5],
            _0x38ce51['comments'][-0x1 * -0x22a4 + 0x1 * -0x1cb8 + -0x1 * 0x5eb]
        ])), test('should\x20support\x20deep\x20filter', () => request(_0x37c431)['get']('/deep?a.b=1')['expect']('Content-Type', /json/)['expect'](0x9e4 + 0x1e47 + -0x2763, [_0x38ce51['deep'][0x13c6 + 0x15a6 + -0x296c * 0x1]])), test('should\x20ignore\x20JSONP\x20query\x20parameters\x20callback\x20and\x20_\x20', () => request(_0x37c431)['get']('/comments?callback=1&_=1')['expect']('Content-Type', /text/)['expect'](new RegExp(_0x38ce51['comments'][-0xeaa * 0x1 + 0xab7 + -0x3 * -0x151]['body']))['expect'](0x1bab * -0x1 + -0x1ae + 0x1e21)), test('should\x20ignore\x20unknown\x20query\x20parameters', () => request(_0x37c431)['get']('/comments?foo=1&bar=2')['expect']('Content-Type', /json/)['expect'](-0x1f82 + -0x2621 + 0x7d3 * 0x9, _0x38ce51['comments'])), test('should\x20not\x20fail\x20with\x20null\x20value', () => {
            return _0x38ce51['posts']['push']({
                'id': 0x63,
                'body': null
            }), request(_0x37c431)['get']('/posts?body=foo')['expect']('Content-Type', /json/)['expect'](-0x2 * 0xb + 0x91 * -0x1a + 0xf98, [_0x38ce51['posts'][0x269c + -0x3b7 * 0x9 + 0x19 * -0x35]]);
        });
    }), describe('GET\x20/:resource?q=', () => {
        test('should\x20respond\x20with\x20json\x20and\x20make\x20a\x20full-text\x20search', () => request(_0x37c431)['get']('/tags?q=pho')['expect']('Content-Type', /json/)['expect'](0x1767 + 0x67 * -0x49 + -0x24 * -0x30, [
            _0x38ce51['tags'][0x660 + 0x8 * -0x37 + -0x4a7],
            _0x38ce51['tags'][0x22af + -0x1 * -0x60 + -0x230d]
        ])), test('should\x20respond\x20with\x20json\x20and\x20make\x20a\x20deep\x20full-text\x20search', () => request(_0x37c431)['get']('/deep?q=1')['expect']('Content-Type', /json/)['expect'](0x1 * 0x1619 + -0x573 + -0xfde, _0x38ce51['deep'])), test('should\x20return\x20an\x20empty\x20array\x20when\x20nothing\x20is\x20matched', () => request(_0x37c431)['get']('/tags?q=nope')['expect']('Content-Type', /json/)['expect'](0x4 * 0x66b + 0x1 * 0xed6 + -0x27ba, [])), test('should\x20support\x20other\x20query\x20parameters', () => request(_0x37c431)['get']('/comments?q=qu&published=true')['expect']('Content-Type', /json/)['expect'](0x21b3 * 0x1 + -0xb57 + -0x1 * 0x1594, [_0x38ce51['comments'][0x1 * -0x151 + 0x3 * -0x6cd + 0x1 * 0x15bb]])), test('should\x20ignore\x20duplicate\x20q\x20query\x20parameters', () => request(_0x37c431)['get']('/comments?q=foo&q=bar')['expect']('Content-Type', /json/)['expect'](-0x11b * -0x1c + 0xb3d + 0x1 * -0x2969, [_0x38ce51['comments'][-0x2006 * 0x1 + 0xba * -0x9 + 0x2690]])), test('should\x20support\x20filtering\x20by\x20boolean\x20value\x20false', () => request(_0x37c431)['get']('/comments?published=false')['expect']('Content-Type', /json/)['expect'](0x4ae * 0x2 + -0x1d0b + 0xa9 * 0x1f, [
            _0x38ce51['comments'][0x1b04 + -0x1bb7 + 0xb4],
            _0x38ce51['comments'][0x81a + 0x26c1 + 0x2ed9 * -0x1],
            _0x38ce51['comments'][-0x14b7 + -0x254b + -0x1d03 * -0x2]
        ]));
    }), describe('GET\x20/:resource?_end=', () => {
        test('should\x20respond\x20with\x20a\x20sliced\x20array', () => request(_0x37c431)['get']('/comments?_end=2')['expect']('Content-Type', /json/)['expect']('x-total-count', _0x38ce51['comments']['length']['toString']())['expect']('Access-Control-Expose-Headers', 'X-Total-Count')['expect'](0xd78 + 0x13ad + -0x205d, _0x38ce51['comments']['slice'](0x3b9 * 0x5 + 0x1925 + 0x3 * -0xe96, -0x992 + -0xbd0 * 0x1 + 0x1564)));
    }), describe('GET\x20/:resource?_sort=', () => {
        test('should\x20respond\x20with\x20json\x20and\x20sort\x20on\x20a\x20field', () => request(_0x37c431)['get']('/tags?_sort=body')['expect']('Content-Type', /json/)['expect'](0x1899 + 0x19 * 0xd9 + 0x2d02 * -0x1, [
            _0x38ce51['tags'][0x76 * 0x10 + 0x71 * -0x3e + 0x13ff],
            _0x38ce51['tags'][0x11 * -0x16e + -0x24c7 + 0x3d15],
            _0x38ce51['tags'][0x1f2a + 0x1379 + -0xd * 0x3e5]
        ])), test('should\x20reverse\x20sorting\x20with\x20_order=DESC', () => request(_0x37c431)['get']('/tags?_sort=body&_order=DESC')['expect']('Content-Type', /json/)['expect'](-0x2 * 0x7a2 + -0x485 * 0x1 + -0x3 * -0x6db, [
            _0x38ce51['tags'][-0xbe * -0x22 + 0x2390 + 0xfb * -0x3e],
            _0x38ce51['tags'][-0x1 * -0x9c7 + -0x49a * 0x4 + 0x8a1],
            _0x38ce51['tags'][-0x1 * -0x2a9 + -0xd32 + 0xa8a]
        ])), test('should\x20reverse\x20sorting\x20with\x20_order=desc\x20(case\x20insensitive)', () => request(_0x37c431)['get']('/tags?_sort=body&_order=desc')['expect']('Content-Type', /json/)['expect'](-0x2380 + -0xed0 + 0x3318, [
            _0x38ce51['tags'][0x267c + 0x21f6 + -0x13 * 0x3d0],
            _0x38ce51['tags'][0x4b6 * -0x2 + -0xf26 + -0x2 * -0xc49],
            _0x38ce51['tags'][-0x14 * -0x141 + -0x104e + -0x8c5]
        ])), test('should\x20sort\x20on\x20numerical\x20field', () => request(_0x37c431)['get']('/posts?_sort=id&_order=DESC')['expect']('Content-Type', /json/)['expect'](-0x24fb + 0x1 * 0x28c + 0x2337, _0x38ce51['posts']['reverse']())), test('should\x20sort\x20on\x20nested\x20field', () => request(_0x37c431)['get']('/nested?_sort=resource.name')['expect']('Content-Type', /json/)['expect'](0x150f + -0x880 * -0x2 + 0x3 * -0xc6d, [
            _0x38ce51['nested'][0x7a0 + -0x10b7 + 0x184 * 0x6],
            _0x38ce51['nested'][-0x29f + 0x665 * 0x5 + -0x1d5a],
            _0x38ce51['nested'][-0x1813 + 0x85c * 0x2 + 0x75d]
        ])), test('should\x20sort\x20on\x20multiple\x20fields', () => request(_0x37c431)['get']('/buyers?_sort=country,total&_order=asc,desc')['expect']('Content-Type', /json/)['expect'](-0x58 * -0x3a + -0xd71 + -0xb * 0x85, [
            _0x38ce51['buyers'][-0x34 + 0x12bc + -0x1280],
            _0x38ce51['buyers'][-0x77 * -0x27 + -0x2ef * -0x2 + -0x17f8],
            _0x38ce51['buyers'][0x2491 + 0xba3 * -0x3 + -0x1a2],
            _0x38ce51['buyers'][-0x70b + -0xb2c + 0x2 * 0x91d],
            _0x38ce51['buyers'][-0xd * -0x16a + -0x1300 + -0xa2 * -0x1],
            _0x38ce51['buyers'][0x26e7 + -0x7 * -0x146 + -0x2fcc],
            _0x38ce51['buyers'][0x1 * 0x502 + -0x3 * -0x19b + -0x9d1],
            _0x38ce51['buyers'][0xd57 + 0x16a5 + -0x23fb],
            _0x38ce51['buyers'][-0x1826 + -0x1c72 + 0x3498]
        ]));
    }), describe('GET\x20/:resource?_start=&_end=', () => {
        test('should\x20respond\x20with\x20a\x20sliced\x20array', () => request(_0x37c431)['get']('/comments?_start=1&_end=2')['expect']('Content-Type', /json/)['expect']('X-Total-Count', _0x38ce51['comments']['length']['toString']())['expect']('Access-Control-Expose-Headers', 'X-Total-Count')['expect'](0x3 * -0xdd + -0xb60 + 0xebf, _0x38ce51['comments']['slice'](0x1 * 0x1945 + 0x1e68 + -0x1c * 0x1fd, -0x1 * -0x4a3 + -0x5 * -0x29 + -0x56e)));
    }), describe('GET\x20/:resource?_start=&_limit=', () => {
        test('should\x20respond\x20with\x20a\x20limited\x20array', () => request(_0x37c431)['get']('/comments?_start=1&_limit=1')['expect']('Content-Type', /json/)['expect']('X-Total-Count', _0x38ce51['comments']['length']['toString']())['expect']('Access-Control-Expose-Headers', 'X-Total-Count')['expect'](0xeb8 + -0xd * 0x71 + -0x833, _0x38ce51['comments']['slice'](-0x7 * 0x18e + -0x823 + -0x1 * -0x1306, -0x1 * -0x1877 + 0x1145 + 0xe * -0x2fb)));
    }), describe('GET\x20/:resource?_page=', () => {
        test('should\x20paginate', () => request(_0x37c431)['get']('/list?_page=2')['expect']('Content-Type', /json/)['expect']('x-total-count', _0x38ce51['list']['length']['toString']())['expect']('Access-Control-Expose-Headers', 'X-Total-Count,\x20Link')['expect'](0x16bf + -0x23bf * 0x1 + 0xdc8, _0x38ce51['list']['slice'](-0x16ca + 0x1 * -0x2360 + -0x1 * -0x3a34, 0xfb5 + -0x11ec * -0x1 + -0x218d)));
    }), describe('GET\x20/:resource?_page=&_limit=', () => {
        test('should\x20paginate\x20with\x20a\x20custom\x20limit', () => {
            const _0x287e15 = [
                '<http://localhost/list?_page=1&_limit=1>;\x20rel=\x22first\x22',
                '<http://localhost/list?_page=1&_limit=1>;\x20rel=\x22prev\x22',
                '<http://localhost/list?_page=3&_limit=1>;\x20rel=\x22next\x22',
                '<http://localhost/list?_page=15&_limit=1>;\x20rel=\x22last\x22'
            ]['join'](',\x20');
            return request(_0x37c431)['get']('/list?_page=2&_limit=1')['set']('host', 'localhost')['expect']('Content-Type', /json/)['expect']('x-total-count', _0x38ce51['list']['length']['toString']())['expect']('link', _0x287e15)['expect']('Access-Control-Expose-Headers', 'X-Total-Count,\x20Link')['expect'](-0x1960 + -0xb0 * 0x11 + -0x12ec * -0x2, _0x38ce51['list']['slice'](-0x95f + -0x645 * 0x6 + 0x966 * 0x5, -0xa4b + -0x1e5 * 0x1 + -0x619 * -0x2));
        });
    }), describe('GET\x20/:resource?attr_gte=&attr_lte=', () => {
        test('should\x20respond\x20with\x20a\x20limited\x20array', () => request(_0x37c431)['get']('/comments?id_gte=2&id_lte=3')['expect']('Content-Type', /json/)['expect'](0x241b + 0x122 + -0x2475, _0x38ce51['comments']['slice'](-0x1020 + 0x206d * 0x1 + -0x104c, -0xe * 0x4c + 0x1de9 + -0x19be)));
    }), describe('GET\x20/:resource?attr_ne=', () => {
        test('should\x20respond\x20with\x20a\x20limited\x20array', () => request(_0x37c431)['get']('/comments?id_ne=1')['expect']('Content-Type', /json/)['expect'](-0x1 * -0x21bf + 0xd66 + -0x2e5d, _0x38ce51['comments']['slice'](-0x9f7 * 0x3 + -0x9fa + 0x27e0))), test('should\x20accept\x20multiple\x20parameters', () => request(_0x37c431)['get']('/comments?id_ne=1&id_ne=2')['expect']('Content-Type', /json/)['expect'](-0x1564 + 0xe * -0x101 + -0x121d * -0x2, _0x38ce51['comments']['slice'](-0x6ea + 0x9 * 0x3d + 0x4c7)));
    }), describe('GET\x20/:resource?attr_like=', () => {
        test('should\x20respond\x20with\x20an\x20array\x20that\x20matches\x20the\x20like\x20operator\x20(case\x20insensitive)', () => request(_0x37c431)['get']('/tags?body_like=photo')['expect']('Content-Type', /json/)['expect'](-0x2234 + 0x809 + -0x1 * -0x1af3, [
            _0x38ce51['tags'][-0x4 * 0x3b8 + 0x1be * -0x2 + 0x125d * 0x1],
            _0x38ce51['tags'][0x2620 + 0x8b8 + -0x2ed6]
        ])), test('should\x20accept\x20multiple\x20parameters', () => request(_0x37c431)['get']('/tags?body_like=photo&body_like=tech')['expect']('Content-Type', /json/)['expect'](-0xd2b * -0x2 + 0x37 * -0x71 + -0x147, _0x38ce51['tags']));
    }), describe('GET\x20/:parent/:parentId/:resource', () => {
        test('should\x20respond\x20with\x20json\x20and\x20corresponding\x20nested\x20resources', () => request(_0x37c431)['get']('/posts/1/comments')['expect']('Content-Type', /json/)['expect'](-0x1a54 + 0x103 * 0x1a + 0x1 * 0xce, [
            _0x38ce51['comments'][-0xa67 + -0x134d + 0x1db4],
            _0x38ce51['comments'][0x2ad + -0x22fe + 0x2052]
        ]));
    }), describe('GET\x20/:resource/:id', () => {
        test('should\x20respond\x20with\x20json\x20and\x20corresponding\x20resource', () => request(_0x37c431)['get']('/posts/1')['expect']('Content-Type', /json/)['expect'](0x3 * -0x7fa + -0x22a1 + -0x565 * -0xb, _0x38ce51['posts'][0x679 + -0x1ec1 + 0x1848])), test('should\x20support\x20string\x20id,\x20respond\x20with\x20json\x20and\x20corresponding\x20resource', () => request(_0x37c431)['get']('/refs/abcd-1234')['expect']('Content-Type', /json/)['expect'](0xbf4 + -0x2011 + 0x14e5, _0x38ce51['refs'][0x13da + -0x1042 + -0x398])), test('should\x20support\x20integer\x20id\x20as\x20string', () => request(_0x37c431)['get']('/stringIds/1234')['expect']('Content-Type', /json/)['expect'](-0x1 * 0x4b9 + 0x1610 + 0x108f * -0x1, _0x38ce51['stringIds'][-0x652 + 0x9ae + 0xa * -0x56])), test('should\x20respond\x20with\x20404\x20if\x20resource\x20is\x20not\x20found', () => request(_0x37c431)['get']('/posts/9001')['expect']('Content-Type', /json/)['expect'](0x8 * -0x1d3 + 0xb63 + 0x4c9, {}));
    }), describe('GET\x20/:resource?_embed=', () => {
        test('should\x20respond\x20with\x20corresponding\x20resources\x20and\x20embedded\x20resources', () => {
            const _0x34360c = _['cloneDeep'](_0x38ce51['posts']);
            return _0x34360c[0x2 * -0x265 + 0x1c2c + -0x1762]['comments'] = [
                _0x38ce51['comments'][-0x24ed + -0x19d + 0x268a],
                _0x38ce51['comments'][0x1191 + -0x22a2 + 0x73 * 0x26]
            ], _0x34360c[0x3b7 * -0x4 + 0x23bf + -0x14e2]['comments'] = [
                _0x38ce51['comments'][0x382 * -0x8 + -0x1b6a + 0x4 * 0xddf],
                _0x38ce51['comments'][-0x1 * -0xe0e + -0x68 + -0xda3],
                _0x38ce51['comments'][-0x14e5 + 0x1f4e + -0xa65]
            ], request(_0x37c431)['get']('/posts?_embed=comments')['expect']('Content-Type', /json/)['expect'](-0x16e7 + -0x249c + 0x3c4b, _0x34360c);
        });
    }), describe('GET\x20/:resource?_embed&_embed=', () => {
        test('should\x20respond\x20with\x20corresponding\x20resources\x20and\x20embedded\x20resources', () => {
            const _0x352259 = _['cloneDeep'](_0x38ce51['posts']);
            return _0x352259[0x42b * 0x4 + -0x146b * 0x1 + 0x3bf]['comments'] = [
                _0x38ce51['comments'][0xdae * 0x2 + -0xb * 0xbe + -0x1332],
                _0x38ce51['comments'][0x81c + 0x105a + -0x1875]
            ], _0x352259[0x11d2 + -0x1923 + 0x751]['refs'] = [_0x38ce51['refs'][-0x11 * 0x8b + 0x7 * -0x91 + 0x1 * 0xd32]], _0x352259[-0x2e1 * 0x7 + -0x479 * -0x1 + 0x16d * 0xb]['comments'] = [
                _0x38ce51['comments'][0x5 * -0x3d3 + 0x151 * 0x19 + -0x188 * 0x9],
                _0x38ce51['comments'][0x6 * -0x66 + -0x26ff + 0x2966],
                _0x38ce51['comments'][0x25ac + 0xad0 + -0x3078]
            ], _0x352259[-0x61 * 0x55 + 0x38a + 0x1cac]['refs'] = [], request(_0x37c431)['get']('/posts?_embed=comments&_embed=refs')['expect']('Content-Type', /json/)['expect'](0x668 * -0x2 + 0x23c0 + -0x1628, _0x352259);
        });
    }), describe('GET\x20/:resource/:id?_embed=', () => {
        test('should\x20respond\x20with\x20corresponding\x20resources\x20and\x20embedded\x20resources', () => {
            const _0x1ea16a = _['cloneDeep'](_0x38ce51['posts'][-0x8c * 0x25 + 0x2488 + -0x104c * 0x1]);
            return _0x1ea16a['comments'] = [
                _0x38ce51['comments'][0x6d7 + 0xf49 + 0x588 * -0x4],
                _0x38ce51['comments'][0xd95 + -0x1368 + 0x5d4]
            ], request(_0x37c431)['get']('/posts/1?_embed=comments')['expect']('Content-Type', /json/)['expect'](-0x2095 + -0x23d3 + 0x4530, _0x1ea16a);
        });
    }), describe('GET\x20/:resource/:id?_embed=&_embed=', () => {
        test('should\x20respond\x20with\x20corresponding\x20resource\x20and\x20embedded\x20resources', () => {
            const _0x3bc158 = _['cloneDeep'](_0x38ce51['posts'][-0x2df * 0x3 + 0x1591 + -0xcf4]);
            return _0x3bc158['comments'] = [
                _0x38ce51['comments'][0x1d3b + 0x23b5 + -0x81e * 0x8],
                _0x38ce51['comments'][-0x66 + 0x162c + -0x15c5]
            ], _0x3bc158['refs'] = [_0x38ce51['refs'][0x5ae * -0x6 + 0xc4e + -0x3a1 * -0x6]], request(_0x37c431)['get']('/posts/1?_embed=comments&_embed=refs')['expect']('Content-Type', /json/)['expect'](-0x23c + -0x1 * -0x2567 + -0x2263 * 0x1, _0x3bc158);
        });
    }), describe('GET\x20/:resource?_expand=', () => {
        test('should\x20respond\x20with\x20corresponding\x20resource\x20and\x20expanded\x20inner\x20resources', () => {
            const _0x3f3c9d = _['cloneDeep'](_0x38ce51['refs']);
            return _0x3f3c9d[-0x631 * 0x2 + -0x110b + 0x1d6d]['post'] = _0x38ce51['posts'][0x14b * 0x17 + -0x3 * -0x38f + -0x286a], request(_0x37c431)['get']('/refs?_expand=post')['expect']('Content-Type', /json/)['expect'](0xe27 + -0x3 * -0x782 + 0x3fd * -0x9, _0x3f3c9d);
        });
    }), describe('GET\x20/:resource/:id?_expand=', () => {
        test('should\x20respond\x20with\x20corresponding\x20resource\x20and\x20expanded\x20inner\x20resources', () => {
            const _0x4c73cd = _['cloneDeep'](_0x38ce51['comments'][0xeb8 + 0x52 * -0x56 + 0xcd4]);
            return _0x4c73cd['post'] = _0x38ce51['posts'][0xa66 + -0x199 * 0xb + 0x72d], request(_0x37c431)['get']('/comments/1?_expand=post')['expect']('Content-Type', /json/)['expect'](-0x5e1 + 0x1 * 0x134f + 0x2 * -0x653, _0x4c73cd);
        });
    }), describe('GET\x20/:resource?_expand=&_expand', () => {
        test('should\x20respond\x20with\x20corresponding\x20resource\x20and\x20expanded\x20inner\x20resources', () => {
            const _0x64c5e0 = _['cloneDeep'](_0x38ce51['refs']);
            return _0x64c5e0[-0x17d + -0xdc4 * 0x1 + 0xf41]['post'] = _0x38ce51['posts'][0x1af7 + 0x638 + -0x212f], _0x64c5e0[-0x2069 + 0x1491 + 0xbd8]['user'] = _0x38ce51['users'][0x46 * 0x5f + -0x23af + 0x7 * 0x163], request(_0x37c431)['get']('/refs?_expand=post&_expand=user')['expect']('Content-Type', /json/)['expect'](-0x1f * 0xb7 + 0x9 * 0x2e7 + 0x16 * -0x25, _0x64c5e0);
        });
    }), describe('GET\x20/:resource/:id?_expand=&_expand=', () => {
        test('should\x20respond\x20with\x20corresponding\x20resource\x20and\x20expanded\x20inner\x20resources', () => {
            const _0x2ce3b3 = _0x38ce51['comments'][0x21f1 + -0x68c * -0x2 + -0x1 * 0x2f09];
            return _0x2ce3b3['post'] = _0x38ce51['posts'][-0x6a + -0x83a * 0x2 + 0x10de], _0x2ce3b3['user'] = _0x38ce51['users'][-0x181c + 0x1 * 0x1bad + 0x391 * -0x1], request(_0x37c431)['get']('/comments/1?_expand=post&_expand=user')['expect']('Content-Type', /json/)['expect'](-0x1 * 0x1d39 + 0x1e6a + -0x69, _0x2ce3b3);
        });
    }), describe('GET\x20/:resource>_delay=', () => {
        test('should\x20delay\x20response', _0x112771 => {
            const _0x3b0a60 = new Date();
            request(_0x37c431)['get']('/posts?_delay=1100')['expect'](-0x150 + 0x1b4a + -0x1932, function (_0x4728cd) {
                const _0x1431d9 = new Date();
                _0x112771(_0x1431d9 - _0x3b0a60 > 0x1714 + 0x1 * 0x2077 + -0x33a3 ? _0x4728cd : new Error('Request\x20wasn\x27t\x20delayed'));
            });
        });
    }), describe('POST\x20/:resource', () => {
        test('should\x20respond\x20with\x20json,\x20create\x20a\x20resource\x20and\x20increment\x20id', async () => {
            await request(_0x37c431)['post']('/posts')['send']({
                'body': 'foo',
                'booleanValue': !![],
                'integerValue': 0x1
            })['expect']('Access-Control-Expose-Headers', 'Location')['expect']('Location', /posts\/3$/)['expect']('Content-Type', /json/)['expect'](0x1 * 0x1075 + 0x1c71 * -0x1 + 0xcc5, {
                'id': 0x3,
                'body': 'foo',
                'booleanValue': !![],
                'integerValue': 0x1
            }), assert['strictEqual'](_0x38ce51['posts']['length'], 0x10d4 + -0x1314 + 0x243);
        }), test('should\x20support\x20x-www-form-urlencoded', async () => {
            await request(_0x37c431)['post']('/posts')['type']('form')['send']({
                'body': 'foo',
                'booleanValue': !![],
                'integerValue': 0x1
            })['expect']('Content-Type', /json/)['expect'](-0x38e + -0x1982 + -0x9 * -0x351, {
                'id': 0x3,
                'body': 'foo',
                'booleanValue': 'true',
                'integerValue': '1'
            }), assert['strictEqual'](_0x38ce51['posts']['length'], 0x2417 + 0x23cd + -0x47e1 * 0x1);
        }), test('should\x20respond\x20with\x20json,\x20create\x20a\x20resource\x20and\x20generate\x20string\x20id', async () => {
            await request(_0x37c431)['post']('/refs')['send']({
                'url': 'http://foo.com',
                'postId': 0x1
            })['expect']('Content-Type', /json/)['expect'](-0xd8d * -0x2 + 0xd24 + -0x2775), assert['strictEqual'](_0x38ce51['refs']['length'], -0x18f9 + -0x554 * -0x2 + 0xe53);
        });
    }), describe('POST\x20/:parent/:parentId/:resource', () => {
        test('should\x20respond\x20with\x20json\x20and\x20set\x20parentId', () => request(_0x37c431)['post']('/posts/1/comments')['send']({ 'body': 'foo' })['expect']('Content-Type', /json/)['expect'](0x2201 * -0x1 + -0x252f + 0xe65 * 0x5, {
            'id': 0x6,
            'postId': '1',
            'body': 'foo'
        }));
    }), describe('POST\x20/:resource?_delay=', () => {
        test('should\x20delay\x20response', _0x59d779 => {
            const _0x41719d = new Date();
            request(_0x37c431)['post']('/posts?_delay=1100')['send']({
                'body': 'foo',
                'booleanValue': !![],
                'integerValue': 0x1
            })['expect'](0xa38 + -0x1 * 0x9b2 + 0x43, function (_0x47a8a2) {
                const _0x7d0bcf = new Date();
                _0x59d779(_0x7d0bcf - _0x41719d > -0x1 * -0x667 + -0x1815 + 0x1596 ? _0x47a8a2 : new Error('Request\x20wasn\x27t\x20delayed'));
            });
        });
    }), describe('PUT\x20/:resource/:id', () => {
        test('should\x20respond\x20with\x20json\x20and\x20replace\x20resource', async () => {
            const _0x3efd73 = {
                    'id': 0x1,
                    'booleanValue': !![],
                    'integerValue': 0x1
                }, _0x372034 = await request(_0x37c431)['put']('/posts/1')['set']('Accept', 'application/json')['send'](_0x3efd73)['expect']('Content-Type', /json/)['expect'](0x131 * 0xc + 0x648 + 0x1 * -0x13cc, _0x3efd73);
            assert['deepStrictEqual'](_0x372034['body'], _0x3efd73), assert['deepStrictEqual'](_0x38ce51['posts'][-0x233 * 0x1 + 0xd2b + -0x36 * 0x34], _0x3efd73);
        }), test('should\x20respond\x20with\x20404\x20if\x20resource\x20is\x20not\x20found', () => request(_0x37c431)['put']('/posts/9001')['send']({
            'id': 0x1,
            'body': 'bar'
        })['expect']('Content-Type', /json/)['expect'](-0x1602 + 0x1069 * 0x1 + 0x72d, {}));
    }), describe('PUT\x20/:resource:id?_delay=', () => {
        test('should\x20delay\x20response', _0x32576f => {
            const _0x415ea3 = new Date();
            request(_0x37c431)['put']('/posts/1?_delay=1100')['set']('Accept', 'application/json')['send']({
                'id': 0x1,
                'booleanValue': !![],
                'integerValue': 0x1
            })['expect'](-0x131e + 0x2586 * 0x1 + -0x11a0, function (_0x9802eb) {
                const _0x5a43a6 = new Date();
                _0x32576f(_0x5a43a6 - _0x415ea3 > -0x20da + 0x8ad + 0xd * 0x229 ? _0x9802eb : new Error('Request\x20wasn\x27t\x20delayed'));
            });
        });
    }), describe('PATCH\x20/:resource/:id', () => {
        test('should\x20respond\x20with\x20json\x20and\x20update\x20resource', async () => {
            const _0x2cbdf2 = { 'body': 'bar' }, _0x8a423e = {
                    'id': 0x1,
                    'body': 'bar'
                }, _0x549909 = await request(_0x37c431)['patch']('/posts/1')['send'](_0x2cbdf2)['expect']('Content-Type', /json/)['expect'](-0x167f + -0x1387 + -0x2ace * -0x1, _0x8a423e);
            assert['deepStrictEqual'](_0x549909['body'], _0x8a423e), assert['deepStrictEqual'](_0x38ce51['posts'][0xd3b + 0x1b60 + -0x289b], _0x8a423e);
        }), test('should\x20respond\x20with\x20404\x20if\x20resource\x20is\x20not\x20found', () => request(_0x37c431)['patch']('/posts/9001')['send']({ 'body': 'bar' })['expect']('Content-Type', /json/)['expect'](-0x10d + 0x638 + -0x397 * 0x1, {}));
    }), describe('PATCH\x20/:resource:id?_delay=', () => {
        test('should\x20delay\x20response', _0xc182fe => {
            const _0x54a1f2 = new Date();
            request(_0x37c431)['patch']('/posts/1?_delay=1100')['send']({ 'body': 'bar' })['send']({
                'id': 0x1,
                'booleanValue': !![],
                'integerValue': 0x1
            })['expect'](-0x2 * 0x471 + 0x2b9 * -0x1 + 0xc63, function (_0x559950) {
                const _0x12816e = new Date();
                _0xc182fe(_0x12816e - _0x54a1f2 > 0x168 * -0x5 + -0x1 * -0x3c7 + -0x3 * -0x263 ? _0x559950 : new Error('Request\x20wasn\x27t\x20delayed'));
            });
        });
    }), describe('DELETE\x20/:resource/:id', () => {
        test('should\x20respond\x20with\x20empty\x20data,\x20destroy\x20resource\x20and\x20dependent\x20resources', async () => {
            await request(_0x37c431)['del']('/posts/1')['expect'](-0x2262 + -0x2305 + -0x1765 * -0x3, {}), assert['strictEqual'](_0x38ce51['posts']['length'], -0x1609 + 0x69f + 0xf6b), assert['strictEqual'](_0x38ce51['comments']['length'], 0xbc2 + 0x24f3 * 0x1 + -0x1859 * 0x2);
        }), test('should\x20respond\x20with\x20404\x20if\x20resource\x20is\x20not\x20found', () => request(_0x37c431)['del']('/posts/9001')['expect']('Content-Type', /json/)['expect'](-0x1 * 0x15ef + -0x5 * -0x54b + -0x2f4, {}));
    }), describe('DELETE\x20/:resource:id?_delay=', () => {
        test('should\x20delay\x20response', _0x4b12ca => {
            const _0x41d22f = new Date();
            request(_0x37c431)['del']('/posts/1?_delay=1100')['send']({
                'id': 0x1,
                'booleanValue': !![],
                'integerValue': 0x1
            })['expect'](0x1db4 + 0x191c + 0x6c1 * -0x8, function (_0x48fea7) {
                const _0x175fd2 = new Date();
                _0x4b12ca(_0x175fd2 - _0x41d22f > -0x61 * 0x2 + -0xbd4 + -0x83f * -0x2 ? _0x48fea7 : new Error('Request\x20wasn\x27t\x20delayed'));
            });
        });
    }), describe('Static\x20routes', () => {
        describe('GET\x20/', () => {
            test('should\x20respond\x20with\x20html', () => request(_0x37c431)['get']('/')['expect'](/You're successfully running JSON Server/)['expect'](-0x1495 + 0xada * -0x1 + 0x2037));
        }), describe('GET\x20/script.js', () => {
            test('should\x20respond\x20with\x20js', () => request(_0x37c431)['get']('/script.js')['expect']('Content-Type', /javascript/)['expect'](0x1 * 0x21fb + -0x1844 + -0x8ef));
        }), describe('GET\x20/style.css', () => {
            test('should\x20respond\x20with\x20css', () => request(_0x37c431)['get']('/style.css')['expect']('Content-Type', /css/)['expect'](0x2339 + 0x1 * -0xfb2 + -0x12bf));
        });
    }), describe('Database\x20state', () => {
        test('should\x20be\x20accessible', () => {
            assert(_0x1edfad['db']['getState']());
        });
    }), describe('Responses', () => {
        test('should\x20have\x20no\x20cache\x20headers\x20(for\x20IE)', () => request(_0x37c431)['get']('/db')['expect']('Cache-Control', 'no-cache')['expect']('Pragma', 'no-cache')['expect']('Expires', '-1'));
    }), describe('Rewriter', () => {
        test('should\x20rewrite\x20using\x20prefix', () => request(_0x37c431)['get']('/api/posts/1')['expect'](_0x38ce51['posts'][-0x1905 + 0x15bb + 0x34a * 0x1])), test('should\x20rewrite\x20using\x20params', () => request(_0x37c431)['get']('/blog/posts/1/show')['expect'](_0x38ce51['posts'][0x9c7 * -0x2 + 0xf8f + 0x3ff])), test('should\x20rewrite\x20using\x20query\x20without\x20params', () => {
            const _0x28b249 = _['cloneDeep'](_0x38ce51['posts'][-0x867 + -0x6fd * 0x4 + 0x245b]);
            return _0x28b249['comments'] = [
                _0x38ce51['comments'][0x1c * 0xd9 + 0x1 * 0xf6 + -0x18b2],
                _0x38ce51['comments'][-0x1ae4 + -0x91 * 0x23 + 0x2eb8]
            ], request(_0x37c431)['get']('/firstpostwithcomments')['expect'](_0x28b249);
        }), test('should\x20rewrite\x20using\x20params\x20and\x20query', () => request(_0x37c431)['get']('/comments/special/1-quux')['expect'](0x1 * 0x23df + -0x1f45 + -0x3d2, [_0x38ce51['comments'][0x2fe + -0xf8b * -0x2 + -0x2210]])), test('should\x20rewrite\x20query\x20params', () => request(_0x37c431)['get']('/articles?_id=1')['expect'](_0x38ce51['posts'][0x11ab * 0x2 + -0x77 * 0x37 + -0x9c5])), test('should\x20expose\x20routes', () => request(_0x37c431)['get']('/__rules')['expect'](_0x490536));
    }), describe('router.render', () => {
        beforeEach(() => {
            _0x1edfad['render'] = (_0x28b552, _0x151577) => {
                _0x151577['jsonp']({ 'data': _0x151577['locals']['data'] });
            };
        }), test('should\x20be\x20possible\x20to\x20wrap\x20response', () => request(_0x37c431)['get']('/posts/1')['expect']('Content-Type', /json/)['expect'](0x1f0d + -0x1 * -0x309 + -0x214e, { 'data': _0x38ce51['posts'][-0x1bca + -0x68 * 0x45 + 0xb2a * 0x5] }));
    }), describe('router.db._.id', () => {
        beforeEach(() => {
            _0x1edfad['db']['setState']({ 'posts': [{ '_id': 0x1 }] }), _0x1edfad['db']['_']['id'] = '_id';
        }), test('should\x20be\x20possible\x20to\x20GET\x20using\x20a\x20different\x20id\x20property', () => request(_0x37c431)['get']('/posts/1')['expect']('Content-Type', /json/)['expect'](0x1711 + -0x978 + 0x1 * -0xcd1, _0x1edfad['db']['getState']()['posts'][-0x9 * -0x359 + 0x282 * 0x4 + -0x45 * 0x95])), test('should\x20be\x20possible\x20to\x20POST\x20using\x20a\x20different\x20id\x20property', () => request(_0x37c431)['post']('/posts')['send']({ 'body': 'hello' })['expect']('Content-Type', /json/)['expect'](0x1 * 0x2239 + -0x2057 + -0x119, {
            '_id': 0x2,
            'body': 'hello'
        }));
    });
});
