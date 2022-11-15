const assert = require('assert'), _ = require(_0x435029(412)), request = require(_0x435029(413)), jsonServer = require('../../src/server');
describe('Server', () => {
    const _0x42e397 = _0x435029;
    let _0xb05eb, _0x386f4c, _0x185a62;
    const _0x272761 = {
        '/api/*': _0x42e397(414),
        '/blog/posts/:id/show': _0x42e397(415),
        '/comments/special/:userId-:body': _0x42e397(416),
        '/firstpostwithcomments': _0x42e397(417),
        '/articles\\?_id=:id': _0x42e397(415)
    };
    beforeEach(() => {
        const _0x5cc59a = _0x42e397;
        _0x185a62 = {}, _0x185a62[_0x5cc59a(418)] = [
            {
                'id': 1,
                'body': _0x5cc59a(419)
            },
            {
                'id': 2,
                'body': _0x5cc59a(420)
            }
        ], _0x185a62[_0x5cc59a(421)] = [
            {
                'id': 1,
                'body': _0x5cc59a(422)
            },
            {
                'id': 2,
                'body': _0x5cc59a(423)
            },
            {
                'id': 3,
                'body': 'photo'
            }
        ], _0x185a62[_0x5cc59a(424)] = [
            {
                'id': 1,
                'username': _0x5cc59a(425),
                'tel': _0x5cc59a(426)
            },
            {
                'id': 2,
                'username': _0x5cc59a(427),
                'tel': _0x5cc59a(428)
            }
        ], _0x185a62[_0x5cc59a(429)] = [
            {
                'id': 1,
                'body': _0x5cc59a(419),
                'published': !![],
                'postId': 1,
                'userId': 1
            },
            {
                'id': 2,
                'body': _0x5cc59a(420),
                'published': ![],
                'postId': 1,
                'userId': 2
            },
            {
                'id': 3,
                'body': _0x5cc59a(430),
                'published': ![],
                'postId': 2,
                'userId': 1
            },
            {
                'id': 4,
                'body': _0x5cc59a(431),
                'published': !![],
                'postId': 2,
                'userId': 2
            },
            {
                'id': 5,
                'body': _0x5cc59a(432),
                'published': ![],
                'postId': 2,
                'userId': 1
            }
        ], _0x185a62[_0x5cc59a(433)] = [
            {
                'id': 1,
                'name': _0x5cc59a(434),
                'country': _0x5cc59a(435),
                'total': 100
            },
            {
                'id': 2,
                'name': _0x5cc59a(436),
                'country': _0x5cc59a(435),
                'total': 200
            },
            {
                'id': 3,
                'name': 'Carley',
                'country': _0x5cc59a(435),
                'total': 300
            },
            {
                'id': 4,
                'name': _0x5cc59a(437),
                'country': _0x5cc59a(438),
                'total': 30
            },
            {
                'id': 5,
                'name': _0x5cc59a(439),
                'country': 'Belize',
                'total': 20
            },
            {
                'id': 6,
                'name': _0x5cc59a(440),
                'country': 'Belize',
                'total': 10
            },
            {
                'id': 7,
                'name': _0x5cc59a(441),
                'country': _0x5cc59a(442),
                'total': 1
            },
            {
                'id': 8,
                'name': _0x5cc59a(443),
                'country': 'Argentina',
                'total': 2
            },
            {
                'id': 9,
                'name': 'Isabelle',
                'country': _0x5cc59a(442),
                'total': 3
            }
        ], _0x185a62[_0x5cc59a(444)] = [{
                'id': _0x5cc59a(445),
                'url': _0x5cc59a(446),
                'postId': 1,
                'userId': 1
            }], _0x185a62[_0x5cc59a(447)] = [{ 'id': '1234' }], _0x185a62[_0x5cc59a(448)] = [
            { 'a': { 'b': 1 } },
            { 'a': 1 }
        ], _0x185a62[_0x5cc59a(449)] = [
            { 'resource': { 'name': _0x5cc59a(450) } },
            { 'resource': { 'name': _0x5cc59a(451) } },
            { 'resource': { 'name': _0x5cc59a(452) } }
        ], _0x185a62[_0x5cc59a(453)] = [
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
        ], _0xb05eb = jsonServer['create'](), _0x386f4c = jsonServer[_0x5cc59a(454)](_0x185a62), _0xb05eb[_0x5cc59a(455)](jsonServer['defaults']()), _0xb05eb[_0x5cc59a(455)](jsonServer[_0x5cc59a(456)](_0x272761)), _0xb05eb[_0x5cc59a(455)](_0x386f4c);
    }), describe(_0x42e397(457), () => {
        const _0x82b802 = _0x42e397;
        test(_0x82b802(458), () => request(_0xb05eb)[_0x82b802(459)](_0x82b802(460))[_0x82b802(461)](_0x82b802(462), /json/)['expect'](200, _0x185a62));
    }), describe('GET /:resource', () => {
        const _0x4ee2ba = _0x42e397;
        test(_0x4ee2ba(463), () => request(_0xb05eb)[_0x4ee2ba(459)](_0x4ee2ba(464))['set'](_0x4ee2ba(465), 'http://example.com')[_0x4ee2ba(461)](_0x4ee2ba(462), /json/)[_0x4ee2ba(461)](_0x4ee2ba(466), _0x4ee2ba(467))[_0x4ee2ba(461)](_0x4ee2ba(468), _0x4ee2ba(446))[_0x4ee2ba(461)](200, _0x185a62[_0x4ee2ba(418)])), test('should respond with 404 if resource is not found', () => request(_0xb05eb)[_0x4ee2ba(459)](_0x4ee2ba(469))['expect'](404));
    }), describe(_0x42e397(470), () => {
        const _0x2440de = _0x42e397;
        test(_0x2440de(471), () => request(_0xb05eb)[_0x2440de(459)](_0x2440de(472))[_0x2440de(461)](_0x2440de(462), /json/)[_0x2440de(461)](200, [_0x185a62['comments'][0]])), test(_0x2440de(473), () => request(_0xb05eb)[_0x2440de(459)]('/users?tel=123')[_0x2440de(461)](_0x2440de(462), /json/)[_0x2440de(461)](200, [_0x185a62['users'][1]])), test(_0x2440de(474), () => request(_0xb05eb)[_0x2440de(459)](_0x2440de(475))[_0x2440de(461)](_0x2440de(462), /json/)[_0x2440de(461)](200, [
            _0x185a62['comments'][0],
            _0x185a62[_0x2440de(429)][1]
        ])), test(_0x2440de(476), () => request(_0xb05eb)['get']('/deep?a.b=1')['expect'](_0x2440de(462), /json/)[_0x2440de(461)](200, [_0x185a62[_0x2440de(448)][0]])), test(_0x2440de(477), () => request(_0xb05eb)[_0x2440de(459)]('/comments?callback=1&_=1')[_0x2440de(461)](_0x2440de(462), /text/)[_0x2440de(461)](new RegExp(_0x185a62['comments'][0][_0x2440de(478)]))[_0x2440de(461)](200)), test('should ignore unknown query parameters', () => request(_0xb05eb)['get']('/comments?foo=1&bar=2')[_0x2440de(461)]('Content-Type', /json/)[_0x2440de(461)](200, _0x185a62[_0x2440de(429)])), test(_0x2440de(479), () => {
            const _0x47a09f = _0x2440de;
            return _0x185a62[_0x47a09f(418)][_0x47a09f(480)]({
                'id': 99,
                'body': null
            }), request(_0xb05eb)['get']('/posts?body=foo')[_0x47a09f(461)](_0x47a09f(462), /json/)['expect'](200, [_0x185a62[_0x47a09f(418)][0]]);
        });
    }), describe(_0x42e397(481), () => {
        const _0x3c1d5a = _0x42e397;
        test(_0x3c1d5a(482), () => request(_0xb05eb)[_0x3c1d5a(459)]('/tags?q=pho')['expect'](_0x3c1d5a(462), /json/)[_0x3c1d5a(461)](200, [
            _0x185a62['tags'][1],
            _0x185a62[_0x3c1d5a(421)][2]
        ])), test(_0x3c1d5a(483), () => request(_0xb05eb)[_0x3c1d5a(459)](_0x3c1d5a(484))[_0x3c1d5a(461)](_0x3c1d5a(462), /json/)[_0x3c1d5a(461)](200, _0x185a62['deep'])), test(_0x3c1d5a(485), () => request(_0xb05eb)[_0x3c1d5a(459)]('/tags?q=nope')[_0x3c1d5a(461)](_0x3c1d5a(462), /json/)[_0x3c1d5a(461)](200, [])), test(_0x3c1d5a(486), () => request(_0xb05eb)[_0x3c1d5a(459)](_0x3c1d5a(487))[_0x3c1d5a(461)]('Content-Type', /json/)[_0x3c1d5a(461)](200, [_0x185a62[_0x3c1d5a(429)][3]])), test(_0x3c1d5a(488), () => request(_0xb05eb)['get'](_0x3c1d5a(489))[_0x3c1d5a(461)]('Content-Type', /json/)[_0x3c1d5a(461)](200, [_0x185a62[_0x3c1d5a(429)][0]])), test('should support filtering by boolean value false', () => request(_0xb05eb)[_0x3c1d5a(459)](_0x3c1d5a(490))[_0x3c1d5a(461)](_0x3c1d5a(462), /json/)['expect'](200, [
            _0x185a62[_0x3c1d5a(429)][1],
            _0x185a62[_0x3c1d5a(429)][2],
            _0x185a62[_0x3c1d5a(429)][4]
        ]));
    }), describe('GET /:resource?_end=', () => {
        const _0x1ef65f = _0x42e397;
        test(_0x1ef65f(491), () => request(_0xb05eb)[_0x1ef65f(459)]('/comments?_end=2')[_0x1ef65f(461)](_0x1ef65f(462), /json/)['expect'](_0x1ef65f(492), _0x185a62[_0x1ef65f(429)][_0x1ef65f(493)]['toString']())[_0x1ef65f(461)](_0x1ef65f(494), 'X-Total-Count')[_0x1ef65f(461)](200, _0x185a62[_0x1ef65f(429)][_0x1ef65f(495)](0, 2)));
    }), describe(_0x42e397(496), () => {
        const _0xef37c1 = _0x42e397;
        test(_0xef37c1(497), () => request(_0xb05eb)[_0xef37c1(459)]('/tags?_sort=body')[_0xef37c1(461)](_0xef37c1(462), /json/)['expect'](200, [
            _0x185a62[_0xef37c1(421)][1],
            _0x185a62[_0xef37c1(421)][0],
            _0x185a62[_0xef37c1(421)][2]
        ])), test(_0xef37c1(498), () => request(_0xb05eb)[_0xef37c1(459)](_0xef37c1(499))[_0xef37c1(461)](_0xef37c1(462), /json/)[_0xef37c1(461)](200, [
            _0x185a62[_0xef37c1(421)][2],
            _0x185a62[_0xef37c1(421)][0],
            _0x185a62[_0xef37c1(421)][1]
        ])), test('should reverse sorting with _order=desc (case insensitive)', () => request(_0xb05eb)[_0xef37c1(459)](_0xef37c1(500))[_0xef37c1(461)](_0xef37c1(462), /json/)['expect'](200, [
            _0x185a62['tags'][2],
            _0x185a62[_0xef37c1(421)][0],
            _0x185a62[_0xef37c1(421)][1]
        ])), test('should sort on numerical field', () => request(_0xb05eb)[_0xef37c1(459)]('/posts?_sort=id&_order=DESC')[_0xef37c1(461)](_0xef37c1(462), /json/)[_0xef37c1(461)](200, _0x185a62[_0xef37c1(418)]['reverse']())), test('should sort on nested field', () => request(_0xb05eb)['get']('/nested?_sort=resource.name')[_0xef37c1(461)](_0xef37c1(462), /json/)[_0xef37c1(461)](200, [
            _0x185a62[_0xef37c1(449)][1],
            _0x185a62['nested'][0],
            _0x185a62[_0xef37c1(449)][2]
        ])), test(_0xef37c1(501), () => request(_0xb05eb)[_0xef37c1(459)](_0xef37c1(502))['expect'](_0xef37c1(462), /json/)[_0xef37c1(461)](200, [
            _0x185a62[_0xef37c1(433)][8],
            _0x185a62['buyers'][7],
            _0x185a62['buyers'][6],
            _0x185a62['buyers'][3],
            _0x185a62[_0xef37c1(433)][4],
            _0x185a62[_0xef37c1(433)][5],
            _0x185a62[_0xef37c1(433)][2],
            _0x185a62['buyers'][1],
            _0x185a62[_0xef37c1(433)][0]
        ]));
    }), describe(_0x42e397(503), () => {
        const _0x402460 = _0x42e397;
        test(_0x402460(491), () => request(_0xb05eb)['get'](_0x402460(504))[_0x402460(461)](_0x402460(462), /json/)[_0x402460(461)](_0x402460(505), _0x185a62[_0x402460(429)][_0x402460(493)]['toString']())['expect'](_0x402460(494), 'X-Total-Count')[_0x402460(461)](200, _0x185a62[_0x402460(429)]['slice'](1, 2)));
    }), describe('GET /:resource?_start=&_limit=', () => {
        const _0x13cf9e = _0x42e397;
        test(_0x13cf9e(506), () => request(_0xb05eb)[_0x13cf9e(459)]('/comments?_start=1&_limit=1')['expect'](_0x13cf9e(462), /json/)[_0x13cf9e(461)](_0x13cf9e(505), _0x185a62[_0x13cf9e(429)]['length'][_0x13cf9e(507)]())[_0x13cf9e(461)](_0x13cf9e(494), _0x13cf9e(505))[_0x13cf9e(461)](200, _0x185a62[_0x13cf9e(429)][_0x13cf9e(495)](1, 2)));
    }), describe('GET /:resource?_page=', () => {
        const _0x686c6d = _0x42e397;
        test(_0x686c6d(508), () => request(_0xb05eb)[_0x686c6d(459)](_0x686c6d(509))[_0x686c6d(461)](_0x686c6d(462), /json/)[_0x686c6d(461)]('x-total-count', _0x185a62[_0x686c6d(453)][_0x686c6d(493)][_0x686c6d(507)]())[_0x686c6d(461)]('Access-Control-Expose-Headers', _0x686c6d(510))[_0x686c6d(461)](200, _0x185a62[_0x686c6d(453)][_0x686c6d(495)](10, 20)));
    }), describe('GET /:resource?_page=&_limit=', () => {
        const _0x2053ba = _0x42e397;
        test(_0x2053ba(511), () => {
            const _0x270add = _0x2053ba, _0x5ae0ea = [
                    _0x270add(512),
                    '<http://localhost/list?_page=1&_limit=1>; rel="prev"',
                    _0x270add(513),
                    _0x270add(514)
                ][_0x270add(515)](', ');
            return request(_0xb05eb)[_0x270add(459)](_0x270add(516))[_0x270add(517)](_0x270add(518), _0x270add(519))[_0x270add(461)](_0x270add(462), /json/)[_0x270add(461)]('x-total-count', _0x185a62['list'][_0x270add(493)][_0x270add(507)]())[_0x270add(461)](_0x270add(520), _0x5ae0ea)[_0x270add(461)](_0x270add(494), _0x270add(510))['expect'](200, _0x185a62[_0x270add(453)][_0x270add(495)](1, 2));
        });
    }), describe('GET /:resource?attr_gte=&attr_lte=', () => {
        const _0x5c5363 = _0x42e397;
        test(_0x5c5363(506), () => request(_0xb05eb)[_0x5c5363(459)]('/comments?id_gte=2&id_lte=3')[_0x5c5363(461)](_0x5c5363(462), /json/)[_0x5c5363(461)](200, _0x185a62[_0x5c5363(429)][_0x5c5363(495)](1, 3)));
    }), describe('GET /:resource?attr_ne=', () => {
        const _0x517b4e = _0x42e397;
        test(_0x517b4e(506), () => request(_0xb05eb)[_0x517b4e(459)]('/comments?id_ne=1')[_0x517b4e(461)](_0x517b4e(462), /json/)[_0x517b4e(461)](200, _0x185a62['comments'][_0x517b4e(495)](1))), test(_0x517b4e(521), () => request(_0xb05eb)[_0x517b4e(459)](_0x517b4e(522))[_0x517b4e(461)](_0x517b4e(462), /json/)[_0x517b4e(461)](200, _0x185a62[_0x517b4e(429)][_0x517b4e(495)](2)));
    }), describe(_0x42e397(523), () => {
        const _0x2a6361 = _0x42e397;
        test(_0x2a6361(524), () => request(_0xb05eb)[_0x2a6361(459)](_0x2a6361(525))['expect']('Content-Type', /json/)[_0x2a6361(461)](200, [
            _0x185a62[_0x2a6361(421)][1],
            _0x185a62['tags'][2]
        ])), test('should accept multiple parameters', () => request(_0xb05eb)[_0x2a6361(459)](_0x2a6361(526))[_0x2a6361(461)](_0x2a6361(462), /json/)[_0x2a6361(461)](200, _0x185a62[_0x2a6361(421)]));
    }), describe(_0x42e397(527), () => {
        const _0x34ad36 = _0x42e397;
        test(_0x34ad36(528), () => request(_0xb05eb)[_0x34ad36(459)](_0x34ad36(529))[_0x34ad36(461)](_0x34ad36(462), /json/)[_0x34ad36(461)](200, [
            _0x185a62[_0x34ad36(429)][0],
            _0x185a62[_0x34ad36(429)][1]
        ]));
    }), describe(_0x42e397(530), () => {
        const _0x19d831 = _0x42e397;
        test(_0x19d831(531), () => request(_0xb05eb)[_0x19d831(459)](_0x19d831(532))[_0x19d831(461)](_0x19d831(462), /json/)[_0x19d831(461)](200, _0x185a62[_0x19d831(418)][0])), test(_0x19d831(533), () => request(_0xb05eb)[_0x19d831(459)](_0x19d831(534))[_0x19d831(461)](_0x19d831(462), /json/)['expect'](200, _0x185a62[_0x19d831(444)][0])), test('should support integer id as string', () => request(_0xb05eb)[_0x19d831(459)](_0x19d831(535))[_0x19d831(461)](_0x19d831(462), /json/)[_0x19d831(461)](200, _0x185a62['stringIds'][0])), test(_0x19d831(536), () => request(_0xb05eb)[_0x19d831(459)](_0x19d831(537))[_0x19d831(461)](_0x19d831(462), /json/)[_0x19d831(461)](404, {}));
    }), describe(_0x42e397(538), () => {
        test('should respond with corresponding resources and embedded resources', () => {
            const _0x26e139 = _0x39d5, _0x34d4b3 = _['cloneDeep'](_0x185a62['posts']);
            return _0x34d4b3[0][_0x26e139(429)] = [
                _0x185a62[_0x26e139(429)][0],
                _0x185a62[_0x26e139(429)][1]
            ], _0x34d4b3[1]['comments'] = [
                _0x185a62[_0x26e139(429)][2],
                _0x185a62['comments'][3],
                _0x185a62['comments'][4]
            ], request(_0xb05eb)[_0x26e139(459)](_0x26e139(539))['expect']('Content-Type', /json/)['expect'](200, _0x34d4b3);
        });
    }), describe('GET /:resource?_embed&_embed=', () => {
        const _0x2b6d54 = _0x42e397;
        test(_0x2b6d54(540), () => {
            const _0x2695e7 = _0x2b6d54, _0x5b25a1 = _[_0x2695e7(541)](_0x185a62[_0x2695e7(418)]);
            return _0x5b25a1[0][_0x2695e7(429)] = [
                _0x185a62['comments'][0],
                _0x185a62[_0x2695e7(429)][1]
            ], _0x5b25a1[0]['refs'] = [_0x185a62['refs'][0]], _0x5b25a1[1][_0x2695e7(429)] = [
                _0x185a62[_0x2695e7(429)][2],
                _0x185a62['comments'][3],
                _0x185a62['comments'][4]
            ], _0x5b25a1[1][_0x2695e7(444)] = [], request(_0xb05eb)[_0x2695e7(459)]('/posts?_embed=comments&_embed=refs')[_0x2695e7(461)](_0x2695e7(462), /json/)['expect'](200, _0x5b25a1);
        });
    }), describe(_0x42e397(542), () => {
        const _0x212e4a = _0x42e397;
        test(_0x212e4a(540), () => {
            const _0x24c922 = _0x212e4a, _0x5d14e9 = _[_0x24c922(541)](_0x185a62[_0x24c922(418)][0]);
            return _0x5d14e9[_0x24c922(429)] = [
                _0x185a62[_0x24c922(429)][0],
                _0x185a62[_0x24c922(429)][1]
            ], request(_0xb05eb)[_0x24c922(459)](_0x24c922(417))[_0x24c922(461)](_0x24c922(462), /json/)['expect'](200, _0x5d14e9);
        });
    }), describe(_0x42e397(543), () => {
        test('should respond with corresponding resource and embedded resources', () => {
            const _0x47a760 = _0x39d5, _0x3b8226 = _[_0x47a760(541)](_0x185a62['posts'][0]);
            return _0x3b8226[_0x47a760(429)] = [
                _0x185a62[_0x47a760(429)][0],
                _0x185a62['comments'][1]
            ], _0x3b8226[_0x47a760(444)] = [_0x185a62['refs'][0]], request(_0xb05eb)[_0x47a760(459)]('/posts/1?_embed=comments&_embed=refs')[_0x47a760(461)](_0x47a760(462), /json/)[_0x47a760(461)](200, _0x3b8226);
        });
    }), describe('GET /:resource?_expand=', () => {
        const _0x37e1ff = _0x42e397;
        test(_0x37e1ff(544), () => {
            const _0x43816a = _0x37e1ff, _0x28fe3a = _['cloneDeep'](_0x185a62[_0x43816a(444)]);
            return _0x28fe3a[0][_0x43816a(545)] = _0x185a62[_0x43816a(418)][0], request(_0xb05eb)[_0x43816a(459)]('/refs?_expand=post')[_0x43816a(461)]('Content-Type', /json/)[_0x43816a(461)](200, _0x28fe3a);
        });
    }), describe(_0x42e397(546), () => {
        const _0x4e70cd = _0x42e397;
        test(_0x4e70cd(544), () => {
            const _0x3728d0 = _0x4e70cd, _0x36dcf9 = _['cloneDeep'](_0x185a62[_0x3728d0(429)][0]);
            return _0x36dcf9[_0x3728d0(545)] = _0x185a62['posts'][0], request(_0xb05eb)[_0x3728d0(459)](_0x3728d0(547))[_0x3728d0(461)](_0x3728d0(462), /json/)['expect'](200, _0x36dcf9);
        });
    }), describe(_0x42e397(548), () => {
        const _0x446277 = _0x42e397;
        test(_0x446277(544), () => {
            const _0x38c2ff = _0x446277, _0x5dec5e = _[_0x38c2ff(541)](_0x185a62[_0x38c2ff(444)]);
            return _0x5dec5e[0]['post'] = _0x185a62[_0x38c2ff(418)][0], _0x5dec5e[0][_0x38c2ff(549)] = _0x185a62[_0x38c2ff(424)][0], request(_0xb05eb)[_0x38c2ff(459)](_0x38c2ff(550))[_0x38c2ff(461)]('Content-Type', /json/)[_0x38c2ff(461)](200, _0x5dec5e);
        });
    }), describe(_0x42e397(551), () => {
        const _0x3331a9 = _0x42e397;
        test(_0x3331a9(544), () => {
            const _0x22d947 = _0x3331a9, _0x1ea66f = _0x185a62[_0x22d947(429)][0];
            return _0x1ea66f[_0x22d947(545)] = _0x185a62[_0x22d947(418)][0], _0x1ea66f[_0x22d947(549)] = _0x185a62[_0x22d947(424)][0], request(_0xb05eb)['get'](_0x22d947(552))[_0x22d947(461)](_0x22d947(462), /json/)[_0x22d947(461)](200, _0x1ea66f);
        });
    }), describe(_0x42e397(553), () => {
        test('should delay response', _0x4eeb3c => {
            const _0x563074 = _0x39d5, _0x40fc68 = new Date();
            request(_0xb05eb)[_0x563074(459)](_0x563074(554))[_0x563074(461)](200, function (_0x39cb71) {
                const _0xea9a36 = _0x563074, _0x40eb89 = new Date();
                _0x4eeb3c(_0x40eb89 - _0x40fc68 > 1000 ? _0x39cb71 : new Error(_0xea9a36(555)));
            });
        });
    }), describe(_0x42e397(556), () => {
        const _0x368e1f = _0x42e397;
        test('should respond with json, create a resource and increment id', async () => {
            const _0x310038 = _0x39d5;
            await request(_0xb05eb)['post'](_0x310038(464))[_0x310038(557)]({
                'body': _0x310038(419),
                'booleanValue': !![],
                'integerValue': 1
            })[_0x310038(461)]('Access-Control-Expose-Headers', 'Location')[_0x310038(461)]('Location', /posts\/3$/)['expect']('Content-Type', /json/)['expect'](201, {
                'id': 3,
                'body': 'foo',
                'booleanValue': !![],
                'integerValue': 1
            }), assert[_0x310038(558)](_0x185a62[_0x310038(418)][_0x310038(493)], 3);
        }), test('should support x-www-form-urlencoded', async () => {
            const _0x23c2d8 = _0x39d5;
            await request(_0xb05eb)[_0x23c2d8(545)](_0x23c2d8(464))['type'](_0x23c2d8(559))[_0x23c2d8(557)]({
                'body': _0x23c2d8(419),
                'booleanValue': !![],
                'integerValue': 1
            })[_0x23c2d8(461)](_0x23c2d8(462), /json/)[_0x23c2d8(461)](201, {
                'id': 3,
                'body': _0x23c2d8(419),
                'booleanValue': _0x23c2d8(467),
                'integerValue': '1'
            }), assert[_0x23c2d8(558)](_0x185a62[_0x23c2d8(418)][_0x23c2d8(493)], 3);
        }), test(_0x368e1f(560), async () => {
            const _0x2681d9 = _0x368e1f;
            await request(_0xb05eb)['post'](_0x2681d9(561))[_0x2681d9(557)]({
                'url': 'http://foo.com',
                'postId': 1
            })[_0x2681d9(461)]('Content-Type', /json/)[_0x2681d9(461)](201), assert[_0x2681d9(558)](_0x185a62[_0x2681d9(444)]['length'], 2);
        });
    }), describe(_0x42e397(562), () => {
        const _0x408135 = _0x42e397;
        test(_0x408135(563), () => request(_0xb05eb)['post'](_0x408135(529))[_0x408135(557)]({ 'body': _0x408135(419) })[_0x408135(461)](_0x408135(462), /json/)[_0x408135(461)](201, {
            'id': 6,
            'postId': '1',
            'body': _0x408135(419)
        }));
    }), describe(_0x42e397(564), () => {
        const _0x53990e = _0x42e397;
        test(_0x53990e(565), _0x247710 => {
            const _0x8ed131 = _0x53990e, _0x27c587 = new Date();
            request(_0xb05eb)['post'](_0x8ed131(554))[_0x8ed131(557)]({
                'body': _0x8ed131(419),
                'booleanValue': !![],
                'integerValue': 1
            })['expect'](201, function (_0xe096e9) {
                const _0x20e758 = _0x8ed131, _0x5a3a6f = new Date();
                _0x247710(_0x5a3a6f - _0x27c587 > 1000 ? _0xe096e9 : new Error(_0x20e758(555)));
            });
        });
    }), describe('PUT /:resource/:id', () => {
        const _0xf20189 = _0x42e397;
        test(_0xf20189(566), async () => {
            const _0x2c3765 = _0xf20189, _0x4b135e = {
                    'id': 1,
                    'booleanValue': !![],
                    'integerValue': 1
                }, _0x3a104b = await request(_0xb05eb)[_0x2c3765(567)](_0x2c3765(532))[_0x2c3765(517)](_0x2c3765(568), _0x2c3765(569))[_0x2c3765(557)](_0x4b135e)[_0x2c3765(461)](_0x2c3765(462), /json/)[_0x2c3765(461)](200, _0x4b135e);
            assert[_0x2c3765(570)](_0x3a104b[_0x2c3765(478)], _0x4b135e), assert['deepStrictEqual'](_0x185a62[_0x2c3765(418)][0], _0x4b135e);
        }), test('should respond with 404 if resource is not found', () => request(_0xb05eb)[_0xf20189(567)](_0xf20189(537))['send']({
            'id': 1,
            'body': 'bar'
        })[_0xf20189(461)](_0xf20189(462), /json/)[_0xf20189(461)](404, {}));
    }), describe('PUT /:resource:id?_delay=', () => {
        test('should delay response', _0x376acb => {
            const _0x186777 = _0x39d5, _0x196ed8 = new Date();
            request(_0xb05eb)[_0x186777(567)]('/posts/1?_delay=1100')[_0x186777(517)](_0x186777(568), _0x186777(569))['send']({
                'id': 1,
                'booleanValue': !![],
                'integerValue': 1
            })[_0x186777(461)](200, function (_0x45f629) {
                const _0x1e6a81 = _0x186777, _0x4cb4d5 = new Date();
                _0x376acb(_0x4cb4d5 - _0x196ed8 > 1000 ? _0x45f629 : new Error(_0x1e6a81(555)));
            });
        });
    }), describe(_0x42e397(571), () => {
        const _0x3ba73b = _0x42e397;
        test(_0x3ba73b(572), async () => {
            const _0x39f30b = _0x3ba73b, _0x43c771 = { 'body': 'bar' }, _0x1bfe3b = {
                    'id': 1,
                    'body': _0x39f30b(420)
                }, _0x595b85 = await request(_0xb05eb)['patch'](_0x39f30b(532))['send'](_0x43c771)['expect'](_0x39f30b(462), /json/)[_0x39f30b(461)](200, _0x1bfe3b);
            assert['deepStrictEqual'](_0x595b85[_0x39f30b(478)], _0x1bfe3b), assert[_0x39f30b(570)](_0x185a62[_0x39f30b(418)][0], _0x1bfe3b);
        }), test(_0x3ba73b(536), () => request(_0xb05eb)[_0x3ba73b(573)](_0x3ba73b(537))[_0x3ba73b(557)]({ 'body': _0x3ba73b(420) })[_0x3ba73b(461)](_0x3ba73b(462), /json/)[_0x3ba73b(461)](404, {}));
    }), describe(_0x42e397(574), () => {
        test('should delay response', _0x2337af => {
            const _0xdf71f2 = _0x39d5, _0x57265a = new Date();
            request(_0xb05eb)[_0xdf71f2(573)](_0xdf71f2(575))[_0xdf71f2(557)]({ 'body': _0xdf71f2(420) })[_0xdf71f2(557)]({
                'id': 1,
                'booleanValue': !![],
                'integerValue': 1
            })[_0xdf71f2(461)](200, function (_0x34171b) {
                const _0x1c8aa8 = _0xdf71f2, _0x3459f3 = new Date();
                _0x2337af(_0x3459f3 - _0x57265a > 1000 ? _0x34171b : new Error(_0x1c8aa8(555)));
            });
        });
    }), describe(_0x42e397(576), () => {
        const _0x5af65f = _0x42e397;
        test(_0x5af65f(577), async () => {
            const _0xaaca5 = _0x5af65f;
            await request(_0xb05eb)[_0xaaca5(578)](_0xaaca5(532))[_0xaaca5(461)](200, {}), assert[_0xaaca5(558)](_0x185a62[_0xaaca5(418)][_0xaaca5(493)], 1), assert[_0xaaca5(558)](_0x185a62[_0xaaca5(429)][_0xaaca5(493)], 3);
        }), test('should respond with 404 if resource is not found', () => request(_0xb05eb)[_0x5af65f(578)](_0x5af65f(537))[_0x5af65f(461)]('Content-Type', /json/)[_0x5af65f(461)](404, {}));
    }), describe(_0x42e397(579), () => {
        const _0x5b1571 = _0x42e397;
        test(_0x5b1571(565), _0x5623bd => {
            const _0x5c0c5a = _0x5b1571, _0x3ffb02 = new Date();
            request(_0xb05eb)['del'](_0x5c0c5a(575))[_0x5c0c5a(557)]({
                'id': 1,
                'booleanValue': !![],
                'integerValue': 1
            })['expect'](200, function (_0x485fab) {
                const _0x561ff9 = _0x5c0c5a, _0x32ef0e = new Date();
                _0x5623bd(_0x32ef0e - _0x3ffb02 > 1000 ? _0x485fab : new Error(_0x561ff9(555)));
            });
        });
    }), describe(_0x42e397(580), () => {
        const _0x4d9607 = _0x42e397;
        describe(_0x4d9607(581), () => {
            const _0x3c1336 = _0x4d9607;
            test(_0x3c1336(582), () => request(_0xb05eb)[_0x3c1336(459)]('/')['expect'](/You're successfully running JSON Server/)[_0x3c1336(461)](200));
        }), describe(_0x4d9607(583), () => {
            const _0x3a8026 = _0x4d9607;
            test(_0x3a8026(584), () => request(_0xb05eb)['get'](_0x3a8026(585))[_0x3a8026(461)](_0x3a8026(462), /javascript/)['expect'](200));
        }), describe(_0x4d9607(586), () => {
            const _0x5c28b3 = _0x4d9607;
            test(_0x5c28b3(587), () => request(_0xb05eb)[_0x5c28b3(459)]('/style.css')[_0x5c28b3(461)](_0x5c28b3(462), /css/)[_0x5c28b3(461)](200));
        });
    }), describe(_0x42e397(588), () => {
        test('should be accessible', () => {
            const _0x3e3e07 = _0x39d5;
            assert(_0x386f4c['db'][_0x3e3e07(589)]());
        });
    }), describe(_0x42e397(590), () => {
        const _0x182c37 = _0x42e397;
        test(_0x182c37(591), () => request(_0xb05eb)[_0x182c37(459)](_0x182c37(460))['expect']('Cache-Control', _0x182c37(592))[_0x182c37(461)]('Pragma', _0x182c37(592))['expect'](_0x182c37(593), '-1'));
    }), describe('Rewriter', () => {
        const _0x136ba7 = _0x42e397;
        test(_0x136ba7(594), () => request(_0xb05eb)['get'](_0x136ba7(595))['expect'](_0x185a62[_0x136ba7(418)][0])), test(_0x136ba7(596), () => request(_0xb05eb)['get'](_0x136ba7(597))[_0x136ba7(461)](_0x185a62['posts'][0])), test(_0x136ba7(598), () => {
            const _0x251b37 = _0x136ba7, _0x410910 = _[_0x251b37(541)](_0x185a62[_0x251b37(418)][0]);
            return _0x410910[_0x251b37(429)] = [
                _0x185a62[_0x251b37(429)][0],
                _0x185a62['comments'][1]
            ], request(_0xb05eb)[_0x251b37(459)](_0x251b37(599))[_0x251b37(461)](_0x410910);
        }), test(_0x136ba7(600), () => request(_0xb05eb)[_0x136ba7(459)](_0x136ba7(601))[_0x136ba7(461)](200, [_0x185a62[_0x136ba7(429)][4]])), test('should rewrite query params', () => request(_0xb05eb)['get']('/articles?_id=1')['expect'](_0x185a62[_0x136ba7(418)][0])), test(_0x136ba7(602), () => request(_0xb05eb)[_0x136ba7(459)](_0x136ba7(603))['expect'](_0x272761));
    }), describe(_0x42e397(604), () => {
        const _0x6da211 = _0x42e397;
        beforeEach(() => {
            const _0x2ebc31 = _0x39d5;
            _0x386f4c[_0x2ebc31(605)] = (_0x24b3c7, _0x4ab868) => {
                const _0x57cd55 = _0x2ebc31;
                _0x4ab868[_0x57cd55(606)]({ 'data': _0x4ab868[_0x57cd55(607)][_0x57cd55(608)] });
            };
        }), test('should be possible to wrap response', () => request(_0xb05eb)[_0x6da211(459)](_0x6da211(532))['expect'](_0x6da211(462), /json/)[_0x6da211(461)](200, { 'data': _0x185a62['posts'][0] }));
    }), describe('router.db._.id', () => {
        const _0x383dfe = _0x42e397;
        beforeEach(() => {
            const _0x1d9c3b = _0x39d5;
            _0x386f4c['db']['setState']({ 'posts': [{ '_id': 1 }] }), _0x386f4c['db']['_']['id'] = _0x1d9c3b(609);
        }), test(_0x383dfe(610), () => request(_0xb05eb)[_0x383dfe(459)](_0x383dfe(532))['expect']('Content-Type', /json/)[_0x383dfe(461)](200, _0x386f4c['db']['getState']()[_0x383dfe(418)][0])), test(_0x383dfe(611), () => request(_0xb05eb)[_0x383dfe(545)](_0x383dfe(464))[_0x383dfe(557)]({ 'body': _0x383dfe(612) })[_0x383dfe(461)]('Content-Type', /json/)[_0x383dfe(461)](201, {
            '_id': 2,
            'body': _0x383dfe(612)
        }));
    });
});