require(_0xc12299(341));
const _ = require(_0xc12299(342)), http = require(_0xc12299(343)), Bluebird = require(_0xc12299(344)), Request = require(root + _0xc12299(345)), snapshot = require(_0xc12299(346)), request = Request({ 'timeout': 100 }), testAttachingCookiesWith = function (_0x36b0c7) {
        const _0x2cd315 = _0xc12299, _0xde8711 = sinon['spy'](request, _0x2cd315(347)), _0x462a3b = sinon['spy'](request, _0x2cd315(348));
        return nock(_0x2cd315(349))[_0x2cd315(350)]('/')['reply'](302, '', {
            'set-cookie': _0x2cd315(351),
            'location': _0x2cd315(352)
        })['get'](_0x2cd315(352))[_0x2cd315(353)](302, '', {
            'set-cookie': _0x2cd315(354),
            'location': '/third'
        })['get'](_0x2cd315(355))[_0x2cd315(353)](200, '', { 'set-cookie': _0x2cd315(356) }), _0x36b0c7()['then'](() => {
            const _0x18d0d8 = _0x2cd315;
            return snapshot({
                'setCalls': _0xde8711['getCalls']()[_0x18d0d8(357)](_0x285948 => {
                    const _0xac779c = _0x18d0d8;
                    return {
                        'currentUrl': _0x285948['args'][1],
                        'setCookie': _0x285948[_0xac779c(358)][0][_0xac779c(359)]['set-cookie']
                    };
                }),
                'getCalls': _0x462a3b[_0x18d0d8(360)]()[_0x18d0d8(357)](_0x2bc5cd => {
                    return { 'newUrl': _['get'](_0x2bc5cd, 'args.1') };
                })
            });
        });
    };
describe(_0xc12299(345), () => {
    const _0x581bde = _0xc12299;
    beforeEach(function () {
        const _0x352b32 = _0x487d;
        this['fn'] = sinon[_0x352b32(361)](), this['fn']['withArgs'](_0x352b32(362))[_0x352b32(363)]({}), this['fn']['withArgs']('get:cookies')['resolves']([]);
    }), it(_0x581bde(364), () => {
        const _0x1aec4f = _0x581bde;
        expect(request)['to']['be']['an'](_0x1aec4f(365));
    }), context('#getDelayForRetry', () => {
        const _0x1b363b = _0x581bde;
        it('divides by 10 when delay >= 1000 and err.code = ECONNREFUSED', () => {
            const _0x26764a = _0x487d, _0xb51468 = [
                    1,
                    2,
                    3,
                    4
                ], _0x50e145 = [
                    0,
                    999,
                    1000,
                    2000
                ], _0x3573a2 = { 'code': _0x26764a(366) }, _0x466630 = sinon[_0x26764a(361)]();
            _0xb51468[_0x26764a(367)](() => {
                const _0x4ab5ce = _0x26764a;
                return request[_0x4ab5ce(368)]({
                    'err': _0x3573a2,
                    'onNext': _0x466630,
                    'retryIntervals': _0xb51468,
                    'delaysRemaining': _0x50e145
                });
            }), expect(_0x50e145)['to']['be']['empty'], expect(_0x466630[_0x26764a(358)])['to'][_0x26764a(369)]['eq']([
                [
                    0,
                    1
                ],
                [
                    999,
                    2
                ],
                [
                    100,
                    3
                ],
                [
                    200,
                    4
                ]
            ]);
        }), it(_0x1b363b(370), () => {
            const _0x2abac7 = _0x1b363b, _0x2053c3 = [
                    1,
                    2,
                    3,
                    4
                ], _0xb65df9 = [
                    2000,
                    2000,
                    2000,
                    2000
                ], _0x58a65e = { 'code': _0x2abac7(371) }, _0x353fa8 = sinon[_0x2abac7(361)]();
            request[_0x2abac7(368)]({
                'err': _0x58a65e,
                'onNext': _0x353fa8,
                'retryIntervals': _0x2053c3,
                'delaysRemaining': _0xb65df9
            }), expect(_0xb65df9)['to'][_0x2abac7(372)]['length'](3), expect(_0x353fa8)['to']['be'][_0x2abac7(373)](2000, 1);
        }), it(_0x1b363b(374), () => {
            const _0x23c053 = _0x1b363b, _0x4604d1 = [
                    1,
                    2,
                    3,
                    4
                ], _0x227612 = [], _0x325596 = sinon[_0x23c053(361)](), _0x23c3a8 = sinon[_0x23c053(361)]();
            request[_0x23c053(368)]({
                'onElse': _0x23c3a8,
                'onNext': _0x325596,
                'retryIntervals': _0x4604d1,
                'delaysRemaining': _0x227612
            }), expect(_0x23c3a8)['to']['be'][_0x23c053(375)](), expect(_0x325596)[_0x23c053(376)]['to']['be'][_0x23c053(377)];
        });
    }), context(_0x581bde(378), () => {
        const _0x132318 = _0x581bde;
        it(_0x132318(379), () => {
            const _0x5bc2fe = _0x132318, _0x179fdd = [
                    1,
                    2,
                    3,
                    4
                ], _0x4a8dbe = request[_0x5bc2fe(380)]({ 'retryIntervals': _0x179fdd });
            expect(_0x4a8dbe[_0x5bc2fe(381)])['to']['eq'](_0x179fdd), expect(_0x4a8dbe[_0x5bc2fe(382)])[_0x5bc2fe(376)]['to']['eq'](_0x179fdd), expect(_0x4a8dbe[_0x5bc2fe(382)])['to'][_0x5bc2fe(369)]['eq'](_0x179fdd);
        }), it('retryIntervals to [0, 1000, 2000, 2000] by default', () => {
            const _0x15c6f7 = request['setDefaults']({});
            expect(_0x15c6f7['retryIntervals'])['to']['deep']['eq']([
                0,
                1000,
                2000,
                2000
            ]);
        }), it(_0x132318(383), () => {
            const _0x5cbfe5 = _0x132318, _0x4a0fff = [1], _0x29281b = request[_0x5cbfe5(380)]({ 'delaysRemaining': _0x4a0fff });
            expect(_0x29281b[_0x5cbfe5(382)])['to']['eq'](_0x4a0fff);
        });
    }), context(_0x581bde(384), () => {
        const _0x31a291 = _0x581bde;
        beforeEach(function () {
            const _0x42af9b = _0x487d;
            this[_0x42af9b(385)] = sinon['stub']();
        }), it(_0x31a291(386), function () {
            const _0x4808dd = _0x31a291;
            expect(request[_0x4808dd(387)](this[_0x4808dd(385)], {
                'statusCode': 404,
                'request': {
                    'headers': { 'foo': 'bar' },
                    'body': _0x4808dd(388)
                }
            }))['to'][_0x4808dd(369)]['eq']({
                'status': 404,
                'statusText': _0x4808dd(389),
                'isOkStatusCode': ![],
                'requestHeaders': { 'foo': _0x4808dd(390) },
                'requestBody': _0x4808dd(388)
            }), expect(this[_0x4808dd(385)])['to']['be'][_0x4808dd(391)];
        }), it(_0x31a291(392), function () {
            const _0x491520 = _0x31a291;
            expect(request[_0x491520(387)](this[_0x491520(385)], {
                'foo': _0x491520(390),
                'req': {},
                'originalHeaders': {},
                'headers': { 'Content-Length': 50 },
                'body': '<html>foo</html>',
                'statusCode': 200,
                'request': {
                    'headers': { 'foo': _0x491520(390) },
                    'body': 'body'
                }
            }))['to'][_0x491520(369)]['eq']({
                'body': '<html>foo</html>',
                'headers': { 'Content-Length': 50 },
                'status': 200,
                'statusText': 'OK',
                'isOkStatusCode': !![],
                'requestHeaders': { 'foo': _0x491520(390) },
                'requestBody': _0x491520(388)
            }), expect(this['push'])['to']['be']['calledOnce'];
        });
    }), context(_0x581bde(393), () => {
        const _0x3b9506 = _0x581bde;
        beforeEach(function (_0x22c814) {
            const _0x5615da = _0x487d;
            this[_0x5615da(394)] = 0, this[_0x5615da(395)] = http[_0x5615da(396)]((_0x538515, _0x5cf785) => {
                const _0xeebf42 = _0x5615da;
                this[_0xeebf42(394)]++;
                switch (_0x538515[_0xeebf42(397)]) {
                case _0xeebf42(398):
                    _0x5cf785[_0xeebf42(399)](200);
                    return _0x5cf785[_0xeebf42(400)]('foo\n');
                case '/econnreset':
                    return _0x538515[_0xeebf42(401)][_0xeebf42(402)]();
                default:
                    break;
                }
            }), this[_0x5615da(395)][_0x5615da(403)](9988, _0x22c814);
        }), afterEach(function () {
            const _0xd702c9 = _0x487d;
            return this[_0xd702c9(395)]['close']();
        }), context(_0x3b9506(404), () => {
            const _0x1a70d8 = _0x3b9506;
            it(_0x1a70d8(405), () => {
                const _0x1f01e2 = _0x1a70d8, _0x6499dd = request[_0x1f01e2(380)]({
                        'url': 'http://localhost:9988/never-ends',
                        'timeout': 1000
                    }), _0x2f87a3 = request[_0x1f01e2(406)](_0x6499dd);
                let _0x183bc9 = 0;
                _0x2f87a3['on']('retry', () => {
                    _0x183bc9++;
                });
                const _0x334f2c = Bluebird[_0x1f01e2(407)](_0x30faf4 => {
                    _0x2f87a3['on']('error', _0x30faf4);
                });
                return expect(_0x334f2c)['to']['be']['rejected'][_0x1f01e2(408)](_0x20379d => {
                    const _0x56326d = _0x1f01e2;
                    expect(_0x20379d[_0x56326d(409)])['to']['eq']('ESOCKETTIMEDOUT'), expect(_0x183bc9)['to']['eq'](0);
                });
            }), it(_0x1a70d8(410), () => {
                const _0x291c25 = _0x1a70d8, _0x31aedb = {
                        'url': _0x291c25(411),
                        'retryIntervals': [
                            0,
                            1,
                            2,
                            3
                        ],
                        'timeout': 1000
                    }, _0x2bdd34 = request[_0x291c25(406)](_0x31aedb);
                let _0x5c4a46 = 0;
                _0x2bdd34['on'](_0x291c25(412), () => {
                    _0x5c4a46++;
                });
                const _0x97efae = Bluebird[_0x291c25(407)](_0x2e9256 => {
                    const _0x3955f9 = _0x291c25;
                    _0x2bdd34['on'](_0x3955f9(413), _0x2e9256);
                });
                return expect(_0x97efae)['to']['be'][_0x291c25(414)][_0x291c25(408)](_0x3f5657 => {
                    const _0x30aa49 = _0x291c25;
                    expect(_0x3f5657['code'])['to']['eq'](_0x30aa49(371)), expect(_0x5c4a46)['to']['eq'](4);
                });
            }), it(_0x1a70d8(415), () => {
                const _0x127a64 = _0x1a70d8;
                nock[_0x127a64(416)]();
                const _0x47fd30 = {
                        'url': _0x127a64(417),
                        'retryIntervals': [
                            0,
                            1,
                            2,
                            3
                        ],
                        'timeout': 1000
                    }, _0x4a0610 = request[_0x127a64(406)](_0x47fd30);
                let _0x27e6e9 = 0;
                _0x4a0610['on'](_0x127a64(412), () => {
                    _0x27e6e9++;
                });
                const _0x46beb0 = Bluebird[_0x127a64(407)](_0x12f079 => {
                    _0x4a0610['on']('error', _0x12f079);
                });
                return expect(_0x46beb0)['to']['be'][_0x127a64(414)][_0x127a64(408)](_0x342be0 => {
                    const _0x715e1d = _0x127a64;
                    expect(_0x342be0[_0x715e1d(409)])['to']['eq']('ENOTFOUND'), expect(_0x27e6e9)['to']['eq'](4);
                });
            });
        }), context('retries for promises', () => {
            it('does not retry on a timeout', function () {
                const _0x49a0b1 = _0x487d, _0x1e918f = {
                        'url': _0x49a0b1(418),
                        'timeout': 100
                    };
                return request['create'](_0x1e918f, !![])[_0x49a0b1(408)](() => {
                    const _0x3472a7 = _0x49a0b1;
                    throw new Error(_0x3472a7(419));
                })[_0x49a0b1(420)](_0xe20f8a => {
                    const _0x3811c0 = _0x49a0b1;
                    expect(_0xe20f8a[_0x3811c0(413)]['code'])['to']['eq'](_0x3811c0(421)), expect(this[_0x3811c0(394)])['to']['eq'](1);
                });
            }), it('retries 4x on a connection reset', function () {
                const _0x1799db = _0x487d, _0x2f2a31 = {
                        'url': 'http://localhost:9988/econnreset',
                        'retryIntervals': [
                            0,
                            1,
                            2,
                            3
                        ],
                        'timeout': 250
                    };
                return request[_0x1799db(406)](_0x2f2a31, !![])[_0x1799db(408)](() => {
                    const _0x1f81a8 = _0x1799db;
                    throw new Error(_0x1f81a8(419));
                })[_0x1799db(420)](_0x30b124 => {
                    const _0x390b90 = _0x1799db;
                    expect(_0x30b124[_0x390b90(413)][_0x390b90(409)])['to']['eq'](_0x390b90(371)), expect(this['hits'])['to']['eq'](5);
                });
            });
        });
    }), context(_0x581bde(422), () => {
        const _0x1785d0 = _0x581bde;
        it(_0x1785d0(423), function () {
            const _0x310951 = _0x1785d0, _0x12eaf1 = sinon[_0x310951(424)](request['rp'][_0x310951(425)][_0x310951(426)], _0x310951(427));
            return nock(_0x310951(428))[_0x310951(350)](_0x310951(429))[_0x310951(353)](200, 'hello', { 'Content-Type': _0x310951(430) }), request['sendPromise']({}, this['fn'], {
                'url': _0x310951(431),
                'cookies': ![]
            })[_0x310951(408)](() => {
                const _0x3f06ab = _0x310951;
                expect(_0x12eaf1)['to']['be'][_0x3f06ab(432)]({ 'strictSSL': ![] });
            });
        }), it(_0x1785d0(433), function () {
            const _0x326626 = _0x1785d0;
            return nock(_0x326626(428))[_0x326626(350)]('/foo')[_0x326626(353)](500, ''), request['sendPromise']({}, this['fn'], {
                'url': _0x326626(431),
                'cookies': ![]
            });
        }), it(_0x1785d0(434), function () {
            const _0x4e4d65 = _0x1785d0;
            return nock(_0x4e4d65(428))[_0x4e4d65(350)]('/foo')['reply'](200, 'hello', { 'Content-Type': _0x4e4d65(430) }), request[_0x4e4d65(435)]({}, this['fn'], {
                'url': _0x4e4d65(431),
                'cookies': ![],
                'body': 'foobarbaz'
            })[_0x4e4d65(408)](_0x1b478f => {
                const _0x681f97 = _0x4e4d65;
                expect(_0x1b478f)['to']['have'][_0x681f97(436)](_0x681f97(437), _0x681f97(388), 'headers', 'duration', _0x681f97(438), _0x681f97(439), _0x681f97(440), _0x681f97(441), _0x681f97(442)), expect(_0x1b478f[_0x681f97(437)])['to']['eq'](200), expect(_0x1b478f[_0x681f97(439)])['to']['eq']('OK'), expect(_0x1b478f[_0x681f97(388)])['to']['eq'](_0x681f97(443)), expect(_0x1b478f[_0x681f97(359)])['to'][_0x681f97(369)]['eq']({ 'content-type': _0x681f97(430) }), expect(_0x1b478f[_0x681f97(438)])['to']['be'][_0x681f97(444)], expect(_0x1b478f[_0x681f97(441)])['to']['eq']('foobarbaz'), expect(_0x1b478f['requestHeaders'])['to'][_0x681f97(369)]['eq']({
                    'accept': _0x681f97(445),
                    'accept-encoding': _0x681f97(446),
                    'connection': _0x681f97(447),
                    'content-length': 9,
                    'host': _0x681f97(448)
                }), expect(_0x1b478f[_0x681f97(440)])['to'][_0x681f97(369)]['eq']([{
                        'Request Body': _0x681f97(449),
                        'Request Headers': {
                            'accept': _0x681f97(445),
                            'accept-encoding': _0x681f97(446),
                            'connection': _0x681f97(447),
                            'content-length': 9,
                            'host': 'www.github.com'
                        },
                        'Request URL': _0x681f97(431),
                        'Response Body': _0x681f97(443),
                        'Response Headers': { 'content-type': _0x681f97(430) },
                        'Response Status': 200
                    }]);
            });
        }), it('includes redirects', function () {
            const _0x21909b = _0x1785d0;
            return this['fn'][_0x21909b(363)](), nock('http://www.github.com')['get'](_0x21909b(450))['reply'](301, null, { 'location': _0x21909b(451) })[_0x21909b(350)](_0x21909b(451))[_0x21909b(353)](302, null, { 'location': _0x21909b(452) })[_0x21909b(350)](_0x21909b(452))[_0x21909b(353)](200, _0x21909b(453), { 'Content-Type': _0x21909b(430) }), request[_0x21909b(435)]({}, this['fn'], {
                'url': _0x21909b(454),
                'cookies': ![]
            })['then'](_0x166ecd => {
                const _0x562e56 = _0x21909b;
                expect(_0x166ecd)['to'][_0x562e56(372)][_0x562e56(436)]('status', _0x562e56(388), _0x562e56(359), _0x562e56(455), 'isOkStatusCode', _0x562e56(439), _0x562e56(440), _0x562e56(456), _0x562e56(441), 'requestHeaders'), expect(_0x166ecd[_0x562e56(437)])['to']['eq'](200), expect(_0x166ecd['statusText'])['to']['eq']('OK'), expect(_0x166ecd['body'])['to']['eq'](_0x562e56(453)), expect(_0x166ecd['headers'])['to']['deep']['eq']({ 'content-type': _0x562e56(430) }), expect(_0x166ecd['isOkStatusCode'])['to']['be']['true'], expect(_0x166ecd[_0x562e56(441)])['to']['be'][_0x562e56(457)], expect(_0x166ecd[_0x562e56(456)])['to'][_0x562e56(369)]['eq']([
                    '301: http://www.github.com/auth',
                    _0x562e56(458)
                ]), expect(_0x166ecd[_0x562e56(442)])['to']['deep']['eq']({
                    'accept': '*/*',
                    'accept-encoding': _0x562e56(446),
                    'connection': 'keep-alive',
                    'referer': _0x562e56(459),
                    'host': _0x562e56(448)
                }), expect(_0x166ecd['allRequestResponses'])['to'][_0x562e56(369)]['eq']([
                    {
                        'Request Body': null,
                        'Request Headers': {
                            'accept': _0x562e56(445),
                            'accept-encoding': _0x562e56(446),
                            'connection': 'keep-alive',
                            'host': _0x562e56(448)
                        },
                        'Request URL': _0x562e56(454),
                        'Response Body': null,
                        'Response Headers': {
                            'content-type': _0x562e56(460),
                            'location': _0x562e56(451)
                        },
                        'Response Status': 301
                    },
                    {
                        'Request Body': null,
                        'Request Headers': {
                            'accept': _0x562e56(445),
                            'accept-encoding': 'gzip, deflate',
                            'connection': _0x562e56(447),
                            'host': _0x562e56(448),
                            'referer': _0x562e56(454)
                        },
                        'Request URL': 'http://www.github.com/auth',
                        'Response Body': null,
                        'Response Headers': {
                            'content-type': _0x562e56(460),
                            'location': _0x562e56(452)
                        },
                        'Response Status': 302
                    },
                    {
                        'Request Body': null,
                        'Request Headers': {
                            'accept': _0x562e56(445),
                            'accept-encoding': _0x562e56(446),
                            'connection': 'keep-alive',
                            'host': 'www.github.com',
                            'referer': _0x562e56(459)
                        },
                        'Request URL': _0x562e56(461),
                        'Response Body': 'log in',
                        'Response Headers': { 'content-type': _0x562e56(430) },
                        'Response Status': 200
                    }
                ]);
            });
        }), it('catches errors', function () {
            const _0x4138f7 = _0x1785d0;
            nock[_0x4138f7(416)]();
            const _0x3009dc = Request({ 'timeout': 2000 });
            return _0x3009dc[_0x4138f7(435)]({}, this['fn'], {
                'url': _0x4138f7(462),
                'cookies': ![]
            })[_0x4138f7(408)](() => {
                const _0x324d40 = _0x4138f7;
                throw new Error(_0x324d40(463));
            })['catch'](_0x1044ea => {
                const _0x2485fe = _0x4138f7;
                expect(_0x1044ea[_0x2485fe(464)])['to']['eq']('Error: connect ECONNREFUSED 127.0.0.1:1111');
            });
        }), it(_0x1785d0(465), function () {
            const _0x10f5a3 = _0x1785d0;
            return nock(_0x10f5a3(466))[_0x10f5a3(350)](_0x10f5a3(467))[_0x10f5a3(353)](200, JSON[_0x10f5a3(468)]({ 'status': 'ok' }), { 'Content-Type': _0x10f5a3(460) }), request[_0x10f5a3(435)]({}, this['fn'], {
                'url': _0x10f5a3(469),
                'cookies': ![]
            })[_0x10f5a3(408)](_0x587a91 => {
                const _0x2cd885 = _0x10f5a3;
                expect(_0x587a91['body'])['to'][_0x2cd885(369)]['eq']({ 'status': 'ok' });
            });
        }), it(_0x1785d0(470), function () {
            const _0x33c726 = _0x1785d0;
            return nock(_0x33c726(466))[_0x33c726(350)](_0x33c726(467))[_0x33c726(353)](200, JSON[_0x33c726(468)]({ 'status': 'ok' }), { 'Content-Type': _0x33c726(471) }), request[_0x33c726(435)]({}, this['fn'], {
                'url': 'http://localhost:8080/status.json',
                'cookies': ![]
            })['then'](_0x930f57 => {
                expect(_0x930f57['body'])['to']['deep']['eq']({ 'status': 'ok' });
            });
        }), it(_0x1785d0(472), function () {
            const _0x51a93c = _0x1785d0;
            return nock(_0x51a93c(466))[_0x51a93c(350)](_0x51a93c(467))[_0x51a93c(353)](200, _0x51a93c(473), { 'Content-Type': _0x51a93c(460) }), request['sendPromise']({}, this['fn'], {
                'url': _0x51a93c(469),
                'cookies': ![]
            })[_0x51a93c(408)](_0x2161d3 => {
                const _0x3545ed = _0x51a93c;
                expect(_0x2161d3[_0x3545ed(388)])['to']['eq']('{bad: \'json\'}');
            });
        }), it(_0x1785d0(474), function () {
            const _0xe885a0 = _0x1785d0;
            return nock('http://localhost:8080')[_0xe885a0(350)]('/foo')['delay'](10)[_0xe885a0(353)](200, _0xe885a0(475), { 'Content-Type': _0xe885a0(476) }), request[_0xe885a0(435)]({}, this['fn'], {
                'url': _0xe885a0(477),
                'cookies': ![]
            })[_0xe885a0(408)](_0x35692a => {
                const _0x28286e = _0xe885a0;
                expect(_0x35692a[_0x28286e(455)])['to']['be']['a']('Number'), expect(_0x35692a[_0x28286e(455)])['to']['be']['gt'](0);
            });
        }), it(_0x1785d0(478), function () {
            const _0x531b1b = _0x1785d0;
            nock(_0x531b1b(466))[_0x531b1b(479)](_0x531b1b(480), _0x531b1b(449))[_0x531b1b(350)](_0x531b1b(429))['reply'](200, _0x531b1b(481));
            const _0x482ff7 = {};
            return _0x482ff7['user-agent'] = _0x531b1b(449), request[_0x531b1b(435)](_0x482ff7, this['fn'], {
                'url': 'http://localhost:8080/foo',
                'cookies': ![]
            })[_0x531b1b(408)](_0x5f0e73 => {
                const _0x22cbac = _0x531b1b;
                expect(_0x5f0e73[_0x22cbac(388)])['to']['eq'](_0x22cbac(481));
            });
        }), it('sends connection: keep-alive by default', function () {
            const _0x265af5 = _0x1785d0;
            return nock('http://localhost:8080')[_0x265af5(479)](_0x265af5(482), _0x265af5(447))['get']('/foo')[_0x265af5(353)](200, _0x265af5(483)), request[_0x265af5(435)]({}, this['fn'], {
                'url': _0x265af5(477),
                'cookies': ![]
            })['then'](_0x61cdc5 => {
                const _0x1c21df = _0x265af5;
                expect(_0x61cdc5[_0x1c21df(388)])['to']['eq'](_0x1c21df(483));
            });
        }), it('lower cases headers', function () {
            const _0x8b3bc3 = _0x1785d0;
            nock(_0x8b3bc3(466))[_0x8b3bc3(479)]('test', _0x8b3bc3(444))[_0x8b3bc3(350)]('/foo')[_0x8b3bc3(353)](200, _0x8b3bc3(481));
            const _0x394ee8 = {};
            return _0x394ee8['user-agent'] = _0x8b3bc3(449), request['sendPromise'](_0x394ee8, this['fn'], {
                'url': _0x8b3bc3(477),
                'cookies': ![],
                'headers': { 'TEST': !![] }
            })[_0x8b3bc3(408)](_0x34e62d => {
                const _0x370c81 = _0x8b3bc3;
                expect(_0x34e62d[_0x370c81(388)])['to']['eq'](_0x370c81(481));
            });
        }), it(_0x1785d0(484), function () {
            const _0x408514 = _0x1785d0;
            nock(_0x408514(466))[_0x408514(479)](_0x408514(480), _0x408514(485))[_0x408514(350)](_0x408514(429))[_0x408514(353)](200, _0x408514(481));
            const _0x4e0d8f = { 'user-agent': _0x408514(486) };
            return request[_0x408514(435)](_0x4e0d8f, this['fn'], {
                'url': 'http://localhost:8080/foo',
                'cookies': ![],
                'headers': { 'User-Agent': _0x408514(485) }
            })[_0x408514(408)](_0x4c8063 => {
                const _0x4f8b1a = _0x408514;
                expect(_0x4c8063[_0x4f8b1a(388)])['to']['eq']('derp');
            });
        }), context(_0x1785d0(487), () => {
            const _0x1f3413 = _0x1785d0;
            it(_0x1f3413(488), function () {
                const _0xd56866 = _0x1f3413;
                return nock(_0xd56866(466))[_0xd56866(479)](_0xd56866(489), '*/*')['get'](_0xd56866(490))[_0xd56866(353)](200), request['sendPromise']({}, this['fn'], {
                    'url': _0xd56866(491),
                    'cookies': ![]
                })[_0xd56866(408)](_0x19ab13 => {
                    expect(_0x19ab13['status'])['to']['eq'](200);
                });
            }), it(_0x1f3413(492), function () {
                const _0x1c5672 = _0x1f3413;
                return nock(_0x1c5672(466))[_0x1c5672(479)]('accept', _0x1c5672(430))[_0x1c5672(350)]('/headers')[_0x1c5672(353)](200), request[_0x1c5672(435)]({}, this['fn'], {
                    'url': _0x1c5672(491),
                    'cookies': ![],
                    'headers': { 'accept': _0x1c5672(430) }
                })['then'](_0xc68dc9 => {
                    const _0x1c9e9b = _0x1c5672;
                    expect(_0xc68dc9[_0x1c9e9b(437)])['to']['eq'](200);
                });
            }), it(_0x1f3413(493), function () {
                const _0x2dc37a = _0x1f3413;
                return nock(_0x2dc37a(466))[_0x2dc37a(479)](_0x2dc37a(489), _0x2dc37a(476))[_0x2dc37a(350)]('/headers')[_0x2dc37a(353)](200), request[_0x2dc37a(435)]({}, this['fn'], {
                    'url': _0x2dc37a(491),
                    'cookies': ![],
                    'headers': { 'Accept': 'text/plain' }
                })[_0x2dc37a(408)](_0xde06a0 => {
                    const _0x10de80 = _0x2dc37a;
                    expect(_0xde06a0[_0x10de80(437)])['to']['eq'](200);
                });
            });
        }), context('qs', () => {
            it('can accept qs', function () {
                const _0x186a5c = _0x487d;
                return nock(_0x186a5c(466))['get'](_0x186a5c(494))[_0x186a5c(353)](200), request[_0x186a5c(435)]({}, this['fn'], {
                    'url': _0x186a5c(477),
                    'cookies': ![],
                    'qs': {
                        'bar': 'baz',
                        'q': 1
                    }
                })[_0x186a5c(408)](_0x29ac57 => {
                    const _0x134cf8 = _0x186a5c;
                    expect(_0x29ac57[_0x134cf8(437)])['to']['eq'](200);
                });
            });
        }), context('followRedirect', () => {
            const _0x42f49b = _0x1785d0;
            beforeEach(function () {
                const _0x1072f7 = _0x487d;
                this['fn'][_0x1072f7(363)]();
            }), it(_0x42f49b(495), function () {
                const _0x1f37a5 = _0x42f49b;
                return nock(_0x1f37a5(466))[_0x1f37a5(350)](_0x1f37a5(450))[_0x1f37a5(353)](302, '', { 'location': 'http://localhost:8080/login' })['get'](_0x1f37a5(452))['reply'](200, _0x1f37a5(496)), request[_0x1f37a5(435)]({}, this['fn'], {
                    'url': _0x1f37a5(497),
                    'cookies': ![],
                    'followRedirect': !![]
                })[_0x1f37a5(408)](_0x491bb2 => {
                    const _0x1c131e = _0x1f37a5;
                    expect(_0x491bb2[_0x1c131e(437)])['to']['eq'](200), expect(_0x491bb2[_0x1c131e(388)])['to']['eq'](_0x1c131e(496)), expect(_0x491bb2)[_0x1c131e(376)]['to'][_0x1c131e(372)][_0x1c131e(498)](_0x1c131e(499));
                });
            }), it('follows non-GET redirects by default', function () {
                const _0x5a3cec = _0x42f49b;
                return nock('http://localhost:8080')[_0x5a3cec(500)]('/login')[_0x5a3cec(353)](302, '', { 'location': _0x5a3cec(497) })[_0x5a3cec(350)]('/dashboard')[_0x5a3cec(353)](200, _0x5a3cec(501)), request[_0x5a3cec(435)]({}, this['fn'], {
                    'method': _0x5a3cec(502),
                    'url': 'http://localhost:8080/login',
                    'cookies': ![]
                })[_0x5a3cec(408)](_0x588426 => {
                    const _0x240fd1 = _0x5a3cec;
                    expect(_0x588426['status'])['to']['eq'](200), expect(_0x588426[_0x240fd1(388)])['to']['eq'](_0x240fd1(501)), expect(_0x588426)[_0x240fd1(376)]['to'][_0x240fd1(372)][_0x240fd1(498)]('redirectedToUrl');
                });
            }), it(_0x42f49b(503), function () {
                const _0x53daac = _0x42f49b;
                return nock(_0x53daac(466))[_0x53daac(350)](_0x53daac(450))[_0x53daac(353)](302, '', { 'location': _0x53daac(504) })[_0x53daac(350)](_0x53daac(452))[_0x53daac(353)](200, _0x53daac(496)), request[_0x53daac(435)]({}, this['fn'], {
                    'url': 'http://localhost:8080/dashboard',
                    'cookies': ![],
                    'followRedirect': ![]
                })[_0x53daac(408)](_0x4e945c => {
                    const _0x16d400 = _0x53daac;
                    expect(_0x4e945c[_0x16d400(437)])['to']['eq'](302), expect(_0x4e945c['body'])['to']['eq'](''), expect(_0x4e945c[_0x16d400(499)])['to']['eq'](_0x16d400(504));
                });
            }), it(_0x42f49b(505), function () {
                const _0x4f2b00 = _0x42f49b;
                return nock(_0x4f2b00(466))[_0x4f2b00(350)](_0x4f2b00(450))[_0x4f2b00(353)](302, '', { 'location': _0x4f2b00(452) })[_0x4f2b00(350)](_0x4f2b00(452))[_0x4f2b00(353)](200, _0x4f2b00(496)), request[_0x4f2b00(435)]({}, this['fn'], {
                    'url': _0x4f2b00(497),
                    'cookies': ![],
                    'followRedirect': ![]
                })[_0x4f2b00(408)](_0x3978a1 => {
                    const _0x3371aa = _0x4f2b00;
                    expect(_0x3978a1['status'])['to']['eq'](302), expect(_0x3978a1[_0x3371aa(499)])['to']['eq']('http://localhost:8080/login');
                });
            }), it(_0x42f49b(506), function () {
                const _0x26b473 = _0x42f49b;
                return nock('http://localhost:8080')[_0x26b473(350)](_0x26b473(450))[_0x26b473(353)](301, '', { 'location': _0x26b473(507) })['get'](_0x26b473(452))['reply'](200, _0x26b473(496)), request[_0x26b473(435)]({}, this['fn'], {
                    'url': _0x26b473(497),
                    'cookies': ![],
                    'followRedirect': ![]
                })[_0x26b473(408)](_0x3f309a => {
                    const _0xeed37 = _0x26b473;
                    expect(_0x3f309a[_0xeed37(437)])['to']['eq'](301), expect(_0x3f309a[_0xeed37(499)])['to']['eq']('https://www.google.com/login');
                });
            }), it(_0x42f49b(508), function () {
                const _0x1a7d7e = _0x42f49b;
                return nock(_0x1a7d7e(466))[_0x1a7d7e(350)]('/dashboard')['reply'](302, '', { 'location': _0x1a7d7e(504) })['get'](_0x1a7d7e(452))[_0x1a7d7e(353)](200, _0x1a7d7e(496)), request[_0x1a7d7e(435)]({}, this['fn'], {
                    'url': _0x1a7d7e(497),
                    'cookies': ![]
                })['then'](_0x732964 => {
                    const _0x1157e8 = _0x1a7d7e;
                    expect(_0x732964[_0x1157e8(437)])['to']['eq'](200), expect(_0x732964)[_0x1157e8(376)]['to']['have'][_0x1157e8(498)](_0x1157e8(499));
                });
            }), it(_0x42f49b(509), function () {
                return testAttachingCookiesWith(() => {
                    const _0x2606f2 = _0x487d;
                    return request['sendPromise']({}, this['fn'], { 'url': _0x2606f2(510) });
                });
            });
        }), context('form=true', () => {
            const _0x2c5fd1 = _0x1785d0;
            beforeEach(() => {
                const _0x15cf2a = _0x487d;
                nock(_0x15cf2a(466))['matchHeader'](_0x15cf2a(511), _0x15cf2a(512))[_0x15cf2a(500)](_0x15cf2a(452), _0x15cf2a(513))[_0x15cf2a(353)](200, _0x15cf2a(514));
            }), it(_0x2c5fd1(515), function () {
                const _0x409efa = _0x2c5fd1;
                return request[_0x409efa(435)]({}, this['fn'], {
                    'url': _0x409efa(504),
                    'method': 'POST',
                    'cookies': ![],
                    'form': !![],
                    'body': {
                        'foo': _0x409efa(390),
                        'baz': _0x409efa(516)
                    }
                })[_0x409efa(408)](_0x273792 => {
                    const _0x611c8c = _0x409efa;
                    expect(_0x273792[_0x611c8c(437)])['to']['eq'](200), expect(_0x273792['body'])['to']['eq'](_0x611c8c(514));
                });
            }), it(_0x2c5fd1(517), function () {
                const _0x3337a3 = _0x2c5fd1, _0x192ac0 = sinon[_0x3337a3(424)](request['rp'][_0x3337a3(425)][_0x3337a3(426)], _0x3337a3(427)), _0x31c81b = {
                        'foo': _0x3337a3(390),
                        'baz': 'quux'
                    };
                return request[_0x3337a3(435)]({}, this['fn'], {
                    'url': _0x3337a3(504),
                    'method': _0x3337a3(502),
                    'cookies': ![],
                    'form': !![],
                    'json': !![],
                    'body': _0x31c81b
                })['then'](_0x467cf5 => {
                    const _0x30e3d8 = _0x3337a3;
                    expect(_0x467cf5[_0x30e3d8(437)])['to']['eq'](200), expect(_0x467cf5[_0x30e3d8(388)])['to']['eq']('<html></html>'), expect(_0x192ac0)['not']['to']['be'][_0x30e3d8(432)]({ 'body': _0x31c81b });
                });
            }), it(_0x2c5fd1(518), function () {
                const _0x4f83f3 = _0x2c5fd1, _0x3c651a = sinon['spy'](request['rp'][_0x4f83f3(425)]['prototype'], _0x4f83f3(427));
                return request[_0x4f83f3(435)]({}, this['fn'], {
                    'url': 'http://localhost:8080/login',
                    'method': _0x4f83f3(502),
                    'cookies': ![],
                    'form': !![],
                    'json': !![],
                    'body': {
                        'foo': 'bar',
                        'baz': _0x4f83f3(516)
                    }
                })[_0x4f83f3(408)](_0x56ee94 => {
                    const _0xfdbbb6 = _0x4f83f3;
                    expect(_0x56ee94['status'])['to']['eq'](200), expect(_0x56ee94[_0xfdbbb6(388)])['to']['eq']('<html></html>'), expect(_0x3c651a)['not']['to']['be'][_0xfdbbb6(432)]({ 'json': !![] });
                });
            });
        }), context('bad headers', () => {
            const _0x2f95f5 = _0x1785d0;
            beforeEach(function (_0x39a5f3) {
                const _0xbdfd44 = _0x487d;
                this[_0xbdfd44(395)] = http[_0xbdfd44(396)]((_0x4348ab, _0x8503b7) => {
                    const _0x35120b = _0xbdfd44;
                    _0x8503b7['writeHead'](200), _0x8503b7[_0x35120b(519)]();
                }), this[_0xbdfd44(395)]['listen'](9988, _0x39a5f3);
            }), afterEach(function () {
                const _0x2b6b4c = _0x487d;
                return this[_0x2b6b4c(395)]['close']();
            }), it(_0x2f95f5(520), function () {
                const _0x4dc6ec = _0x2f95f5;
                return request['sendPromise']({}, this['fn'], {
                    'url': 'http://localhost:9988/foo',
                    'cookies': ![],
                    'headers': { 'x-text': _0x4dc6ec(521) }
                })['then'](() => {
                    const _0x575054 = _0x4dc6ec;
                    throw new Error(_0x575054(522));
                })['catch'](_0x54fe08 => {
                    const _0x5efbb1 = _0x4dc6ec;
                    expect(_0x54fe08[_0x5efbb1(464)])['to']['eq'](_0x5efbb1(523));
                });
            }), it(_0x2f95f5(524), function () {
                const _0x240adb = _0x2f95f5;
                return request[_0x240adb(435)]({}, this['fn'], {
                    'url': _0x240adb(525),
                    'cookies': ![],
                    'json': !![],
                    'body': { 'x-text': 'אבגד' }
                });
            });
        });
    }), context(_0x581bde(526), () => {
        const _0x9006f7 = _0x581bde;
        it(_0x9006f7(484), function () {
            const _0x2a0397 = _0x9006f7;
            nock('http://localhost:8080')[_0x2a0397(479)](_0x2a0397(480), _0x2a0397(485))[_0x2a0397(350)](_0x2a0397(429))[_0x2a0397(353)](200, _0x2a0397(481)), sinon['spy'](request, 'create'), this['fn'][_0x2a0397(363)]({});
            const _0x3f4c2b = { 'user-agent': _0x2a0397(486) }, _0x20e51c = {
                    'url': _0x2a0397(477),
                    'cookies': ![],
                    'headers': { 'user-agent': 'custom-agent' }
                };
            return request['sendStream'](_0x3f4c2b, this['fn'], _0x20e51c)[_0x2a0397(408)](_0x454600 => {
                const _0x1a0849 = _0x2a0397;
                _0x454600(), expect(request[_0x1a0849(406)])['to']['be'][_0x1a0849(391)], expect(request[_0x1a0849(406)])['to']['be'][_0x1a0849(373)](_0x20e51c);
            });
        }), it('gets + attaches the cookies at each redirect', function () {
            return testAttachingCookiesWith(() => {
                const _0x1774ea = _0x487d;
                return request['sendStream']({}, this['fn'], {
                    'url': _0x1774ea(510),
                    'followRedirect': _[_0x1774ea(527)]
                })['then'](_0x2b6657 => {
                    const _0x20eacf = _0x2b6657();
                    return new Promise((_0xa07fdc, _0x41b8cf) => {
                        const _0x42df59 = _0x487d;
                        _0x20eacf['on']('response', _0xa07fdc), _0x20eacf['on'](_0x42df59(413), _0x41b8cf);
                    });
                });
            });
        });
    });
});