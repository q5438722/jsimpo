const assert = require(_0x16adab(330)), _ = require(_0x16adab(331)), request = require(_0x16adab(332)), jsonServer = require(_0x16adab(333));
describe(_0x16adab(334), () => {
    const _0x639934 = _0x16adab;
    let _0x19e203, _0x50c526, _0x5e5fac;
    const _0xc05eb8 = {
        '/api/*': _0x639934(335),
        '/blog/posts/:id/show': _0x639934(336),
        '/comments/special/:userId-:body': '/comments/?userId=:userId&body=:body',
        '/firstpostwithcomments': _0x639934(337),
        '/articles\\?_id=:id': _0x639934(336)
    };
    beforeEach(() => {
        const _0x29ef98 = _0x639934;
        _0x5e5fac = {}, _0x5e5fac[_0x29ef98(338)] = [
            {
                'id': 1,
                'body': _0x29ef98(339)
            },
            {
                'id': 2,
                'body': _0x29ef98(340)
            }
        ], _0x5e5fac['tags'] = [
            {
                'id': 1,
                'body': _0x29ef98(341)
            },
            {
                'id': 2,
                'body': _0x29ef98(342)
            },
            {
                'id': 3,
                'body': 'photo'
            }
        ], _0x5e5fac[_0x29ef98(343)] = [
            {
                'id': 1,
                'username': _0x29ef98(344),
                'tel': _0x29ef98(345)
            },
            {
                'id': 2,
                'username': _0x29ef98(346),
                'tel': _0x29ef98(347)
            }
        ], _0x5e5fac[_0x29ef98(348)] = [
            {
                'id': 1,
                'body': _0x29ef98(339),
                'published': !![],
                'postId': 1,
                'userId': 1
            },
            {
                'id': 2,
                'body': _0x29ef98(340),
                'published': ![],
                'postId': 1,
                'userId': 2
            },
            {
                'id': 3,
                'body': _0x29ef98(349),
                'published': ![],
                'postId': 2,
                'userId': 1
            },
            {
                'id': 4,
                'body': _0x29ef98(350),
                'published': !![],
                'postId': 2,
                'userId': 2
            },
            {
                'id': 5,
                'body': 'quux',
                'published': ![],
                'postId': 2,
                'userId': 1
            }
        ], _0x5e5fac[_0x29ef98(351)] = [
            {
                'id': 1,
                'name': 'Aileen',
                'country': 'Colombia',
                'total': 100
            },
            {
                'id': 2,
                'name': _0x29ef98(352),
                'country': _0x29ef98(353),
                'total': 200
            },
            {
                'id': 3,
                'name': _0x29ef98(354),
                'country': _0x29ef98(353),
                'total': 300
            },
            {
                'id': 4,
                'name': 'Daniel',
                'country': _0x29ef98(355),
                'total': 30
            },
            {
                'id': 5,
                'name': _0x29ef98(356),
                'country': _0x29ef98(355),
                'total': 20
            },
            {
                'id': 6,
                'name': _0x29ef98(357),
                'country': _0x29ef98(355),
                'total': 10
            },
            {
                'id': 7,
                'name': _0x29ef98(358),
                'country': 'Argentina',
                'total': 1
            },
            {
                'id': 8,
                'name': 'Henry',
                'country': _0x29ef98(359),
                'total': 2
            },
            {
                'id': 9,
                'name': _0x29ef98(360),
                'country': _0x29ef98(359),
                'total': 3
            }
        ], _0x5e5fac[_0x29ef98(361)] = [{
                'id': 'abcd-1234',
                'url': 'http://example.com',
                'postId': 1,
                'userId': 1
            }], _0x5e5fac['stringIds'] = [{ 'id': _0x29ef98(362) }], _0x5e5fac[_0x29ef98(363)] = [
            { 'a': { 'b': 1 } },
            { 'a': 1 }
        ], _0x5e5fac['nested'] = [
            { 'resource': { 'name': _0x29ef98(364) } },
            { 'resource': { 'name': _0x29ef98(365) } },
            { 'resource': { 'name': _0x29ef98(366) } }
        ], _0x5e5fac['list'] = [
            { 'id': 1 },
            { 'id': 2 },
            { 'id': 3 },
            { 'id': 4 },
            { 'id': 5 },
            { 'id': 6 },
            { 'id': 7 },
            { 'id': 8 },
            { 'id': 9 },
            { 'id': 10 },
            { 'id': 11 },
            { 'id': 12 },
            { 'id': 13 },
            { 'id': 14 },
            { 'id': 15 }
        ], _0x19e203 = jsonServer['create'](), _0x50c526 = jsonServer[_0x29ef98(367)](_0x5e5fac), _0x19e203[_0x29ef98(368)](jsonServer['defaults']()), _0x19e203[_0x29ef98(368)](jsonServer[_0x29ef98(369)](_0xc05eb8)), _0x19e203['use'](_0x50c526);
    }), describe(_0x639934(370), () => {
        const _0x3535ac = _0x639934;
        test(_0x3535ac(371), () => request(_0x19e203)[_0x3535ac(372)]('/db')[_0x3535ac(373)](_0x3535ac(374), /json/)[_0x3535ac(373)](200, _0x5e5fac));
    }), describe(_0x639934(375), () => {
        const _0x319e39 = _0x639934;
        test(_0x319e39(376), () => request(_0x19e203)[_0x319e39(372)](_0x319e39(377))[_0x319e39(378)]('Origin', _0x319e39(379))['expect'](_0x319e39(374), /json/)[_0x319e39(373)](_0x319e39(380), _0x319e39(381))[_0x319e39(373)]('Access-Control-Allow-Origin', _0x319e39(379))['expect'](200, _0x5e5fac[_0x319e39(338)])), test('should respond with 404 if resource is not found', () => request(_0x19e203)['get'](_0x319e39(382))[_0x319e39(373)](404));
    }), describe(_0x639934(383), () => {
        const _0xec2fde = _0x639934;
        test(_0xec2fde(384), () => request(_0x19e203)[_0xec2fde(372)](_0xec2fde(385))[_0xec2fde(373)](_0xec2fde(374), /json/)['expect'](200, [_0x5e5fac[_0xec2fde(348)][0]])), test(_0xec2fde(386), () => request(_0x19e203)[_0xec2fde(372)](_0xec2fde(387))['expect'](_0xec2fde(374), /json/)[_0xec2fde(373)](200, [_0x5e5fac[_0xec2fde(343)][1]])), test(_0xec2fde(388), () => request(_0x19e203)[_0xec2fde(372)]('/comments?id=1&id=2')[_0xec2fde(373)]('Content-Type', /json/)[_0xec2fde(373)](200, [
            _0x5e5fac[_0xec2fde(348)][0],
            _0x5e5fac[_0xec2fde(348)][1]
        ])), test(_0xec2fde(389), () => request(_0x19e203)['get']('/deep?a.b=1')[_0xec2fde(373)](_0xec2fde(374), /json/)[_0xec2fde(373)](200, [_0x5e5fac['deep'][0]])), test(_0xec2fde(390), () => request(_0x19e203)['get'](_0xec2fde(391))['expect'](_0xec2fde(374), /text/)[_0xec2fde(373)](new RegExp(_0x5e5fac[_0xec2fde(348)][0][_0xec2fde(392)]))['expect'](200)), test('should ignore unknown query parameters', () => request(_0x19e203)[_0xec2fde(372)]('/comments?foo=1&bar=2')[_0xec2fde(373)]('Content-Type', /json/)[_0xec2fde(373)](200, _0x5e5fac[_0xec2fde(348)])), test(_0xec2fde(393), () => {
            const _0xa096e6 = _0xec2fde;
            return _0x5e5fac[_0xa096e6(338)][_0xa096e6(394)]({
                'id': 99,
                'body': null
            }), request(_0x19e203)[_0xa096e6(372)](_0xa096e6(395))['expect']('Content-Type', /json/)[_0xa096e6(373)](200, [_0x5e5fac[_0xa096e6(338)][0]]);
        });
    }), describe('GET /:resource?q=', () => {
        const _0x1ff251 = _0x639934;
        test('should respond with json and make a full-text search', () => request(_0x19e203)[_0x1ff251(372)](_0x1ff251(396))[_0x1ff251(373)](_0x1ff251(374), /json/)[_0x1ff251(373)](200, [
            _0x5e5fac[_0x1ff251(397)][1],
            _0x5e5fac['tags'][2]
        ])), test(_0x1ff251(398), () => request(_0x19e203)[_0x1ff251(372)](_0x1ff251(399))['expect']('Content-Type', /json/)[_0x1ff251(373)](200, _0x5e5fac['deep'])), test('should return an empty array when nothing is matched', () => request(_0x19e203)['get'](_0x1ff251(400))[_0x1ff251(373)]('Content-Type', /json/)[_0x1ff251(373)](200, [])), test(_0x1ff251(401), () => request(_0x19e203)[_0x1ff251(372)](_0x1ff251(402))['expect']('Content-Type', /json/)['expect'](200, [_0x5e5fac[_0x1ff251(348)][3]])), test(_0x1ff251(403), () => request(_0x19e203)['get'](_0x1ff251(404))[_0x1ff251(373)](_0x1ff251(374), /json/)[_0x1ff251(373)](200, [_0x5e5fac[_0x1ff251(348)][0]])), test('should support filtering by boolean value false', () => request(_0x19e203)[_0x1ff251(372)]('/comments?published=false')[_0x1ff251(373)](_0x1ff251(374), /json/)[_0x1ff251(373)](200, [
            _0x5e5fac[_0x1ff251(348)][1],
            _0x5e5fac['comments'][2],
            _0x5e5fac['comments'][4]
        ]));
    }), describe('GET /:resource?_end=', () => {
        const _0x572905 = _0x639934;
        test(_0x572905(405), () => request(_0x19e203)[_0x572905(372)]('/comments?_end=2')[_0x572905(373)]('Content-Type', /json/)['expect'](_0x572905(406), _0x5e5fac['comments']['length'][_0x572905(407)]())[_0x572905(373)](_0x572905(408), _0x572905(409))[_0x572905(373)](200, _0x5e5fac[_0x572905(348)][_0x572905(410)](0, 2)));
    }), describe(_0x639934(411), () => {
        const _0x59169a = _0x639934;
        test(_0x59169a(412), () => request(_0x19e203)[_0x59169a(372)](_0x59169a(413))['expect']('Content-Type', /json/)[_0x59169a(373)](200, [
            _0x5e5fac[_0x59169a(397)][1],
            _0x5e5fac[_0x59169a(397)][0],
            _0x5e5fac[_0x59169a(397)][2]
        ])), test('should reverse sorting with _order=DESC', () => request(_0x19e203)[_0x59169a(372)](_0x59169a(414))['expect'](_0x59169a(374), /json/)[_0x59169a(373)](200, [
            _0x5e5fac[_0x59169a(397)][2],
            _0x5e5fac['tags'][0],
            _0x5e5fac[_0x59169a(397)][1]
        ])), test('should reverse sorting with _order=desc (case insensitive)', () => request(_0x19e203)[_0x59169a(372)](_0x59169a(415))[_0x59169a(373)](_0x59169a(374), /json/)[_0x59169a(373)](200, [
            _0x5e5fac[_0x59169a(397)][2],
            _0x5e5fac[_0x59169a(397)][0],
            _0x5e5fac[_0x59169a(397)][1]
        ])), test(_0x59169a(416), () => request(_0x19e203)['get'](_0x59169a(417))['expect'](_0x59169a(374), /json/)[_0x59169a(373)](200, _0x5e5fac[_0x59169a(338)]['reverse']())), test(_0x59169a(418), () => request(_0x19e203)[_0x59169a(372)](_0x59169a(419))[_0x59169a(373)](_0x59169a(374), /json/)[_0x59169a(373)](200, [
            _0x5e5fac[_0x59169a(420)][1],
            _0x5e5fac[_0x59169a(420)][0],
            _0x5e5fac[_0x59169a(420)][2]
        ])), test(_0x59169a(421), () => request(_0x19e203)[_0x59169a(372)]('/buyers?_sort=country,total&_order=asc,desc')[_0x59169a(373)](_0x59169a(374), /json/)[_0x59169a(373)](200, [
            _0x5e5fac['buyers'][8],
            _0x5e5fac[_0x59169a(351)][7],
            _0x5e5fac[_0x59169a(351)][6],
            _0x5e5fac[_0x59169a(351)][3],
            _0x5e5fac[_0x59169a(351)][4],
            _0x5e5fac[_0x59169a(351)][5],
            _0x5e5fac[_0x59169a(351)][2],
            _0x5e5fac['buyers'][1],
            _0x5e5fac['buyers'][0]
        ]));
    }), describe(_0x639934(422), () => {
        const _0x5c6366 = _0x639934;
        test('should respond with a sliced array', () => request(_0x19e203)['get'](_0x5c6366(423))[_0x5c6366(373)]('Content-Type', /json/)['expect']('X-Total-Count', _0x5e5fac[_0x5c6366(348)][_0x5c6366(424)]['toString']())[_0x5c6366(373)](_0x5c6366(408), 'X-Total-Count')[_0x5c6366(373)](200, _0x5e5fac[_0x5c6366(348)]['slice'](1, 2)));
    }), describe(_0x639934(425), () => {
        const _0x2714c8 = _0x639934;
        test(_0x2714c8(426), () => request(_0x19e203)[_0x2714c8(372)](_0x2714c8(427))[_0x2714c8(373)](_0x2714c8(374), /json/)[_0x2714c8(373)](_0x2714c8(409), _0x5e5fac[_0x2714c8(348)]['length']['toString']())[_0x2714c8(373)](_0x2714c8(408), _0x2714c8(409))[_0x2714c8(373)](200, _0x5e5fac[_0x2714c8(348)][_0x2714c8(410)](1, 2)));
    }), describe(_0x639934(428), () => {
        const _0x4006b7 = _0x639934;
        test(_0x4006b7(429), () => request(_0x19e203)[_0x4006b7(372)](_0x4006b7(430))[_0x4006b7(373)](_0x4006b7(374), /json/)[_0x4006b7(373)](_0x4006b7(406), _0x5e5fac['list'][_0x4006b7(424)][_0x4006b7(407)]())['expect'](_0x4006b7(408), _0x4006b7(431))[_0x4006b7(373)](200, _0x5e5fac[_0x4006b7(432)][_0x4006b7(410)](10, 20)));
    }), describe(_0x639934(433), () => {
        const _0x343c69 = _0x639934;
        test(_0x343c69(434), () => {
            const _0x4f136f = _0x343c69, _0x2c7d94 = [
                    _0x4f136f(435),
                    _0x4f136f(436),
                    _0x4f136f(437),
                    _0x4f136f(438)
                ]['join'](', ');
            return request(_0x19e203)[_0x4f136f(372)](_0x4f136f(439))[_0x4f136f(378)](_0x4f136f(440), _0x4f136f(441))[_0x4f136f(373)](_0x4f136f(374), /json/)['expect']('x-total-count', _0x5e5fac[_0x4f136f(432)][_0x4f136f(424)][_0x4f136f(407)]())[_0x4f136f(373)](_0x4f136f(442), _0x2c7d94)['expect'](_0x4f136f(408), _0x4f136f(431))['expect'](200, _0x5e5fac[_0x4f136f(432)][_0x4f136f(410)](1, 2));
        });
    }), describe(_0x639934(443), () => {
        const _0x548a37 = _0x639934;
        test(_0x548a37(426), () => request(_0x19e203)[_0x548a37(372)](_0x548a37(444))[_0x548a37(373)]('Content-Type', /json/)[_0x548a37(373)](200, _0x5e5fac['comments'][_0x548a37(410)](1, 3)));
    }), describe(_0x639934(445), () => {
        const _0x20ce0c = _0x639934;
        test(_0x20ce0c(426), () => request(_0x19e203)['get'](_0x20ce0c(446))[_0x20ce0c(373)](_0x20ce0c(374), /json/)['expect'](200, _0x5e5fac[_0x20ce0c(348)]['slice'](1))), test('should accept multiple parameters', () => request(_0x19e203)['get'](_0x20ce0c(447))[_0x20ce0c(373)]('Content-Type', /json/)[_0x20ce0c(373)](200, _0x5e5fac[_0x20ce0c(348)]['slice'](2)));
    }), describe('GET /:resource?attr_like=', () => {
        const _0x405588 = _0x639934;
        test(_0x405588(448), () => request(_0x19e203)[_0x405588(372)]('/tags?body_like=photo')[_0x405588(373)](_0x405588(374), /json/)[_0x405588(373)](200, [
            _0x5e5fac[_0x405588(397)][1],
            _0x5e5fac[_0x405588(397)][2]
        ])), test('should accept multiple parameters', () => request(_0x19e203)[_0x405588(372)]('/tags?body_like=photo&body_like=tech')[_0x405588(373)](_0x405588(374), /json/)[_0x405588(373)](200, _0x5e5fac[_0x405588(397)]));
    }), describe(_0x639934(449), () => {
        const _0x327aa2 = _0x639934;
        test(_0x327aa2(450), () => request(_0x19e203)['get']('/posts/1/comments')[_0x327aa2(373)](_0x327aa2(374), /json/)[_0x327aa2(373)](200, [
            _0x5e5fac[_0x327aa2(348)][0],
            _0x5e5fac[_0x327aa2(348)][1]
        ]));
    }), describe(_0x639934(451), () => {
        const _0x1bdb4f = _0x639934;
        test('should respond with json and corresponding resource', () => request(_0x19e203)[_0x1bdb4f(372)]('/posts/1')['expect'](_0x1bdb4f(374), /json/)[_0x1bdb4f(373)](200, _0x5e5fac[_0x1bdb4f(338)][0])), test(_0x1bdb4f(452), () => request(_0x19e203)['get'](_0x1bdb4f(453))[_0x1bdb4f(373)](_0x1bdb4f(374), /json/)[_0x1bdb4f(373)](200, _0x5e5fac['refs'][0])), test(_0x1bdb4f(454), () => request(_0x19e203)[_0x1bdb4f(372)](_0x1bdb4f(455))[_0x1bdb4f(373)](_0x1bdb4f(374), /json/)[_0x1bdb4f(373)](200, _0x5e5fac[_0x1bdb4f(456)][0])), test('should respond with 404 if resource is not found', () => request(_0x19e203)[_0x1bdb4f(372)](_0x1bdb4f(457))[_0x1bdb4f(373)](_0x1bdb4f(374), /json/)[_0x1bdb4f(373)](404, {}));
    }), describe(_0x639934(458), () => {
        test('should respond with corresponding resources and embedded resources', () => {
            const _0x172878 = _0x41ef, _0x3a1753 = _[_0x172878(459)](_0x5e5fac['posts']);
            return _0x3a1753[0]['comments'] = [
                _0x5e5fac[_0x172878(348)][0],
                _0x5e5fac[_0x172878(348)][1]
            ], _0x3a1753[1][_0x172878(348)] = [
                _0x5e5fac[_0x172878(348)][2],
                _0x5e5fac[_0x172878(348)][3],
                _0x5e5fac[_0x172878(348)][4]
            ], request(_0x19e203)[_0x172878(372)]('/posts?_embed=comments')['expect'](_0x172878(374), /json/)[_0x172878(373)](200, _0x3a1753);
        });
    }), describe(_0x639934(460), () => {
        test('should respond with corresponding resources and embedded resources', () => {
            const _0x46c5e1 = _0x41ef, _0x484e60 = _[_0x46c5e1(459)](_0x5e5fac[_0x46c5e1(338)]);
            return _0x484e60[0][_0x46c5e1(348)] = [
                _0x5e5fac[_0x46c5e1(348)][0],
                _0x5e5fac[_0x46c5e1(348)][1]
            ], _0x484e60[0]['refs'] = [_0x5e5fac[_0x46c5e1(361)][0]], _0x484e60[1][_0x46c5e1(348)] = [
                _0x5e5fac[_0x46c5e1(348)][2],
                _0x5e5fac[_0x46c5e1(348)][3],
                _0x5e5fac[_0x46c5e1(348)][4]
            ], _0x484e60[1][_0x46c5e1(361)] = [], request(_0x19e203)[_0x46c5e1(372)](_0x46c5e1(461))[_0x46c5e1(373)](_0x46c5e1(374), /json/)['expect'](200, _0x484e60);
        });
    }), describe('GET /:resource/:id?_embed=', () => {
        const _0x59664d = _0x639934;
        test(_0x59664d(462), () => {
            const _0x58a217 = _0x59664d, _0x3fdaf9 = _[_0x58a217(459)](_0x5e5fac[_0x58a217(338)][0]);
            return _0x3fdaf9[_0x58a217(348)] = [
                _0x5e5fac['comments'][0],
                _0x5e5fac['comments'][1]
            ], request(_0x19e203)[_0x58a217(372)](_0x58a217(337))[_0x58a217(373)](_0x58a217(374), /json/)[_0x58a217(373)](200, _0x3fdaf9);
        });
    }), describe(_0x639934(463), () => {
        const _0x21ff30 = _0x639934;
        test(_0x21ff30(464), () => {
            const _0x192c4d = _0x21ff30, _0x1aafd2 = _[_0x192c4d(459)](_0x5e5fac[_0x192c4d(338)][0]);
            return _0x1aafd2[_0x192c4d(348)] = [
                _0x5e5fac[_0x192c4d(348)][0],
                _0x5e5fac[_0x192c4d(348)][1]
            ], _0x1aafd2[_0x192c4d(361)] = [_0x5e5fac[_0x192c4d(361)][0]], request(_0x19e203)[_0x192c4d(372)]('/posts/1?_embed=comments&_embed=refs')[_0x192c4d(373)](_0x192c4d(374), /json/)[_0x192c4d(373)](200, _0x1aafd2);
        });
    }), describe(_0x639934(465), () => {
        const _0x380c10 = _0x639934;
        test(_0x380c10(466), () => {
            const _0x3e4346 = _0x380c10, _0x4c15e3 = _[_0x3e4346(459)](_0x5e5fac[_0x3e4346(361)]);
            return _0x4c15e3[0][_0x3e4346(467)] = _0x5e5fac[_0x3e4346(338)][0], request(_0x19e203)['get']('/refs?_expand=post')[_0x3e4346(373)](_0x3e4346(374), /json/)[_0x3e4346(373)](200, _0x4c15e3);
        });
    }), describe(_0x639934(468), () => {
        const _0x227893 = _0x639934;
        test(_0x227893(466), () => {
            const _0x1ea04c = _0x227893, _0x4c7b85 = _[_0x1ea04c(459)](_0x5e5fac[_0x1ea04c(348)][0]);
            return _0x4c7b85['post'] = _0x5e5fac[_0x1ea04c(338)][0], request(_0x19e203)['get']('/comments/1?_expand=post')[_0x1ea04c(373)](_0x1ea04c(374), /json/)[_0x1ea04c(373)](200, _0x4c7b85);
        });
    }), describe(_0x639934(469), () => {
        const _0x354346 = _0x639934;
        test(_0x354346(466), () => {
            const _0x3914a7 = _0x354346, _0xa2a755 = _['cloneDeep'](_0x5e5fac['refs']);
            return _0xa2a755[0]['post'] = _0x5e5fac[_0x3914a7(338)][0], _0xa2a755[0]['user'] = _0x5e5fac[_0x3914a7(343)][0], request(_0x19e203)[_0x3914a7(372)](_0x3914a7(470))[_0x3914a7(373)](_0x3914a7(374), /json/)['expect'](200, _0xa2a755);
        });
    }), describe(_0x639934(471), () => {
        const _0x33c6a6 = _0x639934;
        test(_0x33c6a6(466), () => {
            const _0x3f4afe = _0x33c6a6, _0xc523f3 = _0x5e5fac[_0x3f4afe(348)][0];
            return _0xc523f3[_0x3f4afe(467)] = _0x5e5fac[_0x3f4afe(338)][0], _0xc523f3[_0x3f4afe(472)] = _0x5e5fac['users'][0], request(_0x19e203)['get'](_0x3f4afe(473))[_0x3f4afe(373)]('Content-Type', /json/)['expect'](200, _0xc523f3);
        });
    }), describe(_0x639934(474), () => {
        const _0x315e1c = _0x639934;
        test(_0x315e1c(475), _0x218c4f => {
            const _0x11082b = _0x315e1c, _0x348e64 = new Date();
            request(_0x19e203)[_0x11082b(372)](_0x11082b(476))[_0x11082b(373)](200, function (_0x4d45c4) {
                const _0x1a1d11 = _0x11082b, _0x31586f = new Date();
                _0x218c4f(_0x31586f - _0x348e64 > 1000 ? _0x4d45c4 : new Error(_0x1a1d11(477)));
            });
        });
    }), describe(_0x639934(478), () => {
        const _0x3cb916 = _0x639934;
        test('should respond with json, create a resource and increment id', async () => {
            const _0x1dcd8c = _0x41ef;
            await request(_0x19e203)['post'](_0x1dcd8c(377))[_0x1dcd8c(479)]({
                'body': _0x1dcd8c(339),
                'booleanValue': !![],
                'integerValue': 1
            })[_0x1dcd8c(373)](_0x1dcd8c(408), 'Location')[_0x1dcd8c(373)](_0x1dcd8c(480), /posts\/3$/)[_0x1dcd8c(373)](_0x1dcd8c(374), /json/)[_0x1dcd8c(373)](201, {
                'id': 3,
                'body': _0x1dcd8c(339),
                'booleanValue': !![],
                'integerValue': 1
            }), assert[_0x1dcd8c(481)](_0x5e5fac[_0x1dcd8c(338)]['length'], 3);
        }), test('should support x-www-form-urlencoded', async () => {
            const _0x5c2cb9 = _0x41ef;
            await request(_0x19e203)[_0x5c2cb9(467)](_0x5c2cb9(377))[_0x5c2cb9(482)]('form')[_0x5c2cb9(479)]({
                'body': _0x5c2cb9(339),
                'booleanValue': !![],
                'integerValue': 1
            })[_0x5c2cb9(373)](_0x5c2cb9(374), /json/)[_0x5c2cb9(373)](201, {
                'id': 3,
                'body': _0x5c2cb9(339),
                'booleanValue': _0x5c2cb9(381),
                'integerValue': '1'
            }), assert[_0x5c2cb9(481)](_0x5e5fac[_0x5c2cb9(338)][_0x5c2cb9(424)], 3);
        }), test(_0x3cb916(483), async () => {
            const _0x74a9a = _0x3cb916;
            await request(_0x19e203)[_0x74a9a(467)](_0x74a9a(484))[_0x74a9a(479)]({
                'url': _0x74a9a(485),
                'postId': 1
            })[_0x74a9a(373)](_0x74a9a(374), /json/)[_0x74a9a(373)](201), assert[_0x74a9a(481)](_0x5e5fac[_0x74a9a(361)][_0x74a9a(424)], 2);
        });
    }), describe(_0x639934(486), () => {
        const _0x231289 = _0x639934;
        test(_0x231289(487), () => request(_0x19e203)[_0x231289(467)](_0x231289(488))[_0x231289(479)]({ 'body': _0x231289(339) })[_0x231289(373)]('Content-Type', /json/)[_0x231289(373)](201, {
            'id': 6,
            'postId': '1',
            'body': 'foo'
        }));
    }), describe('POST /:resource?_delay=', () => {
        const _0x21f184 = _0x639934;
        test(_0x21f184(475), _0x115777 => {
            const _0x4e42e7 = _0x21f184, _0x290c6e = new Date();
            request(_0x19e203)[_0x4e42e7(467)](_0x4e42e7(476))[_0x4e42e7(479)]({
                'body': _0x4e42e7(339),
                'booleanValue': !![],
                'integerValue': 1
            })['expect'](201, function (_0x1260f7) {
                const _0x1dfdb3 = _0x4e42e7, _0x1dcf02 = new Date();
                _0x115777(_0x1dcf02 - _0x290c6e > 1000 ? _0x1260f7 : new Error(_0x1dfdb3(477)));
            });
        });
    }), describe('PUT /:resource/:id', () => {
        const _0x395f5a = _0x639934;
        test('should respond with json and replace resource', async () => {
            const _0x812725 = _0x41ef, _0x2f382c = {
                    'id': 1,
                    'booleanValue': !![],
                    'integerValue': 1
                }, _0x331e7f = await request(_0x19e203)[_0x812725(489)](_0x812725(490))[_0x812725(378)](_0x812725(491), _0x812725(492))[_0x812725(479)](_0x2f382c)[_0x812725(373)]('Content-Type', /json/)[_0x812725(373)](200, _0x2f382c);
            assert['deepStrictEqual'](_0x331e7f[_0x812725(392)], _0x2f382c), assert[_0x812725(493)](_0x5e5fac[_0x812725(338)][0], _0x2f382c);
        }), test(_0x395f5a(494), () => request(_0x19e203)[_0x395f5a(489)](_0x395f5a(457))[_0x395f5a(479)]({
            'id': 1,
            'body': _0x395f5a(340)
        })[_0x395f5a(373)]('Content-Type', /json/)['expect'](404, {}));
    }), describe(_0x639934(495), () => {
        const _0x4d7feb = _0x639934;
        test(_0x4d7feb(475), _0x50bc53 => {
            const _0x4a2981 = _0x4d7feb, _0x4cdb31 = new Date();
            request(_0x19e203)[_0x4a2981(489)]('/posts/1?_delay=1100')[_0x4a2981(378)]('Accept', _0x4a2981(492))[_0x4a2981(479)]({
                'id': 1,
                'booleanValue': !![],
                'integerValue': 1
            })['expect'](200, function (_0x3fffde) {
                const _0x306cb3 = _0x4a2981, _0x19c294 = new Date();
                _0x50bc53(_0x19c294 - _0x4cdb31 > 1000 ? _0x3fffde : new Error(_0x306cb3(477)));
            });
        });
    }), describe('PATCH /:resource/:id', () => {
        const _0x2dd097 = _0x639934;
        test(_0x2dd097(496), async () => {
            const _0x2337cc = _0x2dd097, _0x59a4a0 = { 'body': _0x2337cc(340) }, _0x30fd30 = {
                    'id': 1,
                    'body': 'bar'
                }, _0x9a2450 = await request(_0x19e203)[_0x2337cc(497)](_0x2337cc(490))['send'](_0x59a4a0)['expect'](_0x2337cc(374), /json/)[_0x2337cc(373)](200, _0x30fd30);
            assert['deepStrictEqual'](_0x9a2450[_0x2337cc(392)], _0x30fd30), assert[_0x2337cc(493)](_0x5e5fac[_0x2337cc(338)][0], _0x30fd30);
        }), test('should respond with 404 if resource is not found', () => request(_0x19e203)[_0x2dd097(497)](_0x2dd097(457))[_0x2dd097(479)]({ 'body': 'bar' })[_0x2dd097(373)](_0x2dd097(374), /json/)[_0x2dd097(373)](404, {}));
    }), describe(_0x639934(498), () => {
        test('should delay response', _0x220e32 => {
            const _0x1306f2 = _0x41ef, _0xd45489 = new Date();
            request(_0x19e203)[_0x1306f2(497)](_0x1306f2(499))[_0x1306f2(479)]({ 'body': _0x1306f2(340) })[_0x1306f2(479)]({
                'id': 1,
                'booleanValue': !![],
                'integerValue': 1
            })[_0x1306f2(373)](200, function (_0x139b2f) {
                const _0x48b36b = _0x1306f2, _0x3f6b9c = new Date();
                _0x220e32(_0x3f6b9c - _0xd45489 > 1000 ? _0x139b2f : new Error(_0x48b36b(477)));
            });
        });
    }), describe(_0x639934(500), () => {
        const _0x37b1a6 = _0x639934;
        test('should respond with empty data, destroy resource and dependent resources', async () => {
            const _0x2ad151 = _0x41ef;
            await request(_0x19e203)[_0x2ad151(501)](_0x2ad151(490))['expect'](200, {}), assert['strictEqual'](_0x5e5fac[_0x2ad151(338)][_0x2ad151(424)], 1), assert[_0x2ad151(481)](_0x5e5fac[_0x2ad151(348)][_0x2ad151(424)], 3);
        }), test(_0x37b1a6(494), () => request(_0x19e203)['del'](_0x37b1a6(457))[_0x37b1a6(373)](_0x37b1a6(374), /json/)[_0x37b1a6(373)](404, {}));
    }), describe('DELETE /:resource:id?_delay=', () => {
        test('should delay response', _0x418e32 => {
            const _0x5b18a5 = _0x41ef, _0x2bce8a = new Date();
            request(_0x19e203)[_0x5b18a5(501)](_0x5b18a5(499))['send']({
                'id': 1,
                'booleanValue': !![],
                'integerValue': 1
            })[_0x5b18a5(373)](200, function (_0x2a6ab2) {
                const _0x317718 = _0x5b18a5, _0x1cea32 = new Date();
                _0x418e32(_0x1cea32 - _0x2bce8a > 1000 ? _0x2a6ab2 : new Error(_0x317718(477)));
            });
        });
    }), describe(_0x639934(502), () => {
        const _0x337335 = _0x639934;
        describe(_0x337335(503), () => {
            const _0x14cf55 = _0x337335;
            test(_0x14cf55(504), () => request(_0x19e203)[_0x14cf55(372)]('/')[_0x14cf55(373)](/You're successfully running JSON Server/)[_0x14cf55(373)](200));
        }), describe(_0x337335(505), () => {
            const _0xad05e7 = _0x337335;
            test('should respond with js', () => request(_0x19e203)[_0xad05e7(372)]('/script.js')['expect'](_0xad05e7(374), /javascript/)['expect'](200));
        }), describe('GET /style.css', () => {
            const _0x1a0a2c = _0x337335;
            test('should respond with css', () => request(_0x19e203)[_0x1a0a2c(372)]('/style.css')[_0x1a0a2c(373)]('Content-Type', /css/)[_0x1a0a2c(373)](200));
        });
    }), describe('Database state', () => {
        const _0x3ab9f8 = _0x639934;
        test(_0x3ab9f8(506), () => {
            const _0x50f6f5 = _0x3ab9f8;
            assert(_0x50c526['db'][_0x50f6f5(507)]());
        });
    }), describe(_0x639934(508), () => {
        const _0x4fca5e = _0x639934;
        test(_0x4fca5e(509), () => request(_0x19e203)['get'](_0x4fca5e(510))[_0x4fca5e(373)](_0x4fca5e(511), 'no-cache')['expect'](_0x4fca5e(512), _0x4fca5e(513))['expect'](_0x4fca5e(514), '-1'));
    }), describe(_0x639934(515), () => {
        const _0xfaa54e = _0x639934;
        test(_0xfaa54e(516), () => request(_0x19e203)[_0xfaa54e(372)](_0xfaa54e(517))[_0xfaa54e(373)](_0x5e5fac['posts'][0])), test(_0xfaa54e(518), () => request(_0x19e203)[_0xfaa54e(372)](_0xfaa54e(519))['expect'](_0x5e5fac[_0xfaa54e(338)][0])), test(_0xfaa54e(520), () => {
            const _0x1a75e3 = _0xfaa54e, _0x335504 = _[_0x1a75e3(459)](_0x5e5fac[_0x1a75e3(338)][0]);
            return _0x335504[_0x1a75e3(348)] = [
                _0x5e5fac['comments'][0],
                _0x5e5fac[_0x1a75e3(348)][1]
            ], request(_0x19e203)[_0x1a75e3(372)]('/firstpostwithcomments')[_0x1a75e3(373)](_0x335504);
        }), test('should rewrite using params and query', () => request(_0x19e203)[_0xfaa54e(372)]('/comments/special/1-quux')[_0xfaa54e(373)](200, [_0x5e5fac[_0xfaa54e(348)][4]])), test('should rewrite query params', () => request(_0x19e203)[_0xfaa54e(372)](_0xfaa54e(521))[_0xfaa54e(373)](_0x5e5fac[_0xfaa54e(338)][0])), test(_0xfaa54e(522), () => request(_0x19e203)[_0xfaa54e(372)](_0xfaa54e(523))['expect'](_0xc05eb8));
    }), describe('router.render', () => {
        const _0x243ffd = _0x639934;
        beforeEach(() => {
            const _0x39f534 = _0x41ef;
            _0x50c526[_0x39f534(524)] = (_0x27d0eb, _0x2aecce) => {
                const _0x416d77 = _0x39f534;
                _0x2aecce['jsonp']({ 'data': _0x2aecce['locals'][_0x416d77(525)] });
            };
        }), test(_0x243ffd(526), () => request(_0x19e203)[_0x243ffd(372)](_0x243ffd(490))[_0x243ffd(373)]('Content-Type', /json/)['expect'](200, { 'data': _0x5e5fac[_0x243ffd(338)][0] }));
    }), describe(_0x639934(527), () => {
        const _0x27b307 = _0x639934;
        beforeEach(() => {
            const _0x7ad0d9 = _0x41ef;
            _0x50c526['db'][_0x7ad0d9(528)]({ 'posts': [{ '_id': 1 }] }), _0x50c526['db']['_']['id'] = _0x7ad0d9(529);
        }), test(_0x27b307(530), () => request(_0x19e203)[_0x27b307(372)](_0x27b307(490))[_0x27b307(373)]('Content-Type', /json/)['expect'](200, _0x50c526['db']['getState']()[_0x27b307(338)][0])), test('should be possible to POST using a different id property', () => request(_0x19e203)[_0x27b307(467)]('/posts')[_0x27b307(479)]({ 'body': _0x27b307(531) })[_0x27b307(373)](_0x27b307(374), /json/)[_0x27b307(373)](201, {
            '_id': 2,
            'body': _0x27b307(531)
        }));
    });
});