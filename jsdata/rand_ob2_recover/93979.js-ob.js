require(_0xbd67e3(204));
const _ = require(_0xbd67e3(205)), http = require(_0xbd67e3(206)), Bluebird = require('bluebird'), Request = require(root + _0xbd67e3(207)), snapshot = require(_0xbd67e3(208)), request = Request({ 'timeout': 100 }), testAttachingCookiesWith = function (_0x99f743) {
        const _0x35ebf7 = _0xbd67e3, _0x2a9d23 = sinon[_0x35ebf7(209)](request, _0x35ebf7(210)), _0x14c676 = sinon[_0x35ebf7(209)](request, _0x35ebf7(211));
        return nock('http://localhost:1234')[_0x35ebf7(212)]('/')[_0x35ebf7(213)](302, '', {
            'set-cookie': 'one=1',
            'location': _0x35ebf7(214)
        })[_0x35ebf7(212)](_0x35ebf7(214))['reply'](302, '', {
            'set-cookie': 'two=2',
            'location': _0x35ebf7(215)
        })[_0x35ebf7(212)]('/third')['reply'](200, '', { 'set-cookie': _0x35ebf7(216) }), _0x99f743()[_0x35ebf7(217)](() => {
            const _0x227a8b = _0x35ebf7;
            return snapshot({
                'setCalls': _0x2a9d23[_0x227a8b(218)]()[_0x227a8b(219)](_0x1779dd => {
                    const _0x37c91b = _0x227a8b;
                    return {
                        'currentUrl': _0x1779dd[_0x37c91b(220)][1],
                        'setCookie': _0x1779dd[_0x37c91b(220)][0][_0x37c91b(221)][_0x37c91b(222)]
                    };
                }),
                'getCalls': _0x14c676[_0x227a8b(218)]()[_0x227a8b(219)](_0x49f892 => {
                    const _0x3973ed = _0x227a8b;
                    return { 'newUrl': _[_0x3973ed(212)](_0x49f892, _0x3973ed(223)) };
                })
            });
        });
    };
describe(_0xbd67e3(207), () => {
    const _0x4fae09 = _0xbd67e3;
    beforeEach(function () {
        const _0x3e9c4d = _0x9f75;
        this['fn'] = sinon[_0x3e9c4d(224)](), this['fn']['withArgs']('set:cookie')[_0x3e9c4d(225)]({}), this['fn'][_0x3e9c4d(226)](_0x3e9c4d(227))[_0x3e9c4d(225)]([]);
    }), it('is defined', () => {
        const _0xf0cfab = _0x9f75;
        expect(request)['to']['be']['an'](_0xf0cfab(228));
    }), context('#getDelayForRetry', () => {
        const _0x54c81a = _0x9f75;
        it(_0x54c81a(229), () => {
            const _0x23a299 = _0x54c81a, _0x2a56b1 = [
                    1,
                    2,
                    3,
                    4
                ], _0x1dc161 = [
                    0,
                    999,
                    1000,
                    2000
                ], _0x85afb5 = { 'code': _0x23a299(230) }, _0x5570a5 = sinon[_0x23a299(224)]();
            _0x2a56b1[_0x23a299(231)](() => {
                return request['getDelayForRetry']({
                    'err': _0x85afb5,
                    'onNext': _0x5570a5,
                    'retryIntervals': _0x2a56b1,
                    'delaysRemaining': _0x1dc161
                });
            }), expect(_0x1dc161)['to']['be'][_0x23a299(232)], expect(_0x5570a5[_0x23a299(220)])['to']['deep']['eq']([
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
        }), it(_0x54c81a(233), () => {
            const _0x2e6bdd = _0x54c81a, _0xcc50ba = [
                    1,
                    2,
                    3,
                    4
                ], _0x45db04 = [
                    2000,
                    2000,
                    2000,
                    2000
                ], _0x12bfbb = { 'code': 'ECONNRESET' }, _0x1bf4a5 = sinon[_0x2e6bdd(224)]();
            request[_0x2e6bdd(234)]({
                'err': _0x12bfbb,
                'onNext': _0x1bf4a5,
                'retryIntervals': _0xcc50ba,
                'delaysRemaining': _0x45db04
            }), expect(_0x45db04)['to'][_0x2e6bdd(235)]['length'](3), expect(_0x1bf4a5)['to']['be'][_0x2e6bdd(236)](2000, 1);
        }), it(_0x54c81a(237), () => {
            const _0x158407 = _0x54c81a, _0x3c539e = [
                    1,
                    2,
                    3,
                    4
                ], _0x2e6511 = [], _0x12cee9 = sinon[_0x158407(224)](), _0x4cfdf2 = sinon[_0x158407(224)]();
            request['getDelayForRetry']({
                'onElse': _0x4cfdf2,
                'onNext': _0x12cee9,
                'retryIntervals': _0x3c539e,
                'delaysRemaining': _0x2e6511
            }), expect(_0x4cfdf2)['to']['be'][_0x158407(238)](), expect(_0x12cee9)['not']['to']['be'][_0x158407(239)];
        });
    }), context('#setDefaults', () => {
        const _0x535c22 = _0x9f75;
        it(_0x535c22(240), () => {
            const _0x56863b = _0x535c22, _0xee537 = [
                    1,
                    2,
                    3,
                    4
                ], _0x3db80f = request['setDefaults']({ 'retryIntervals': _0xee537 });
            expect(_0x3db80f[_0x56863b(241)])['to']['eq'](_0xee537), expect(_0x3db80f['delaysRemaining'])[_0x56863b(242)]['to']['eq'](_0xee537), expect(_0x3db80f[_0x56863b(243)])['to'][_0x56863b(244)]['eq'](_0xee537);
        }), it(_0x535c22(245), () => {
            const _0xf8146e = _0x535c22, _0xbc638b = request[_0xf8146e(246)]({});
            expect(_0xbc638b['retryIntervals'])['to']['deep']['eq']([
                0,
                1000,
                2000,
                2000
            ]);
        }), it(_0x535c22(247), () => {
            const _0x4c978a = _0x535c22, _0x549b6a = [1], _0x36116c = request[_0x4c978a(246)]({ 'delaysRemaining': _0x549b6a });
            expect(_0x36116c[_0x4c978a(243)])['to']['eq'](_0x549b6a);
        });
    }), context(_0x4fae09(248), () => {
        const _0x222558 = _0x4fae09;
        beforeEach(function () {
            const _0x1e4e4b = _0x9f75;
            this[_0x1e4e4b(249)] = sinon[_0x1e4e4b(224)]();
        }), it(_0x222558(250), function () {
            const _0x1c087f = _0x222558;
            expect(request[_0x1c087f(251)](this[_0x1c087f(249)], {
                'statusCode': 404,
                'request': {
                    'headers': { 'foo': _0x1c087f(252) },
                    'body': _0x1c087f(253)
                }
            }))['to'][_0x1c087f(244)]['eq']({
                'status': 404,
                'statusText': _0x1c087f(254),
                'isOkStatusCode': ![],
                'requestHeaders': { 'foo': _0x1c087f(252) },
                'requestBody': _0x1c087f(253)
            }), expect(this['push'])['to']['be'][_0x1c087f(255)];
        }), it(_0x222558(256), function () {
            const _0x4e5a1a = _0x222558;
            expect(request[_0x4e5a1a(251)](this[_0x4e5a1a(249)], {
                'foo': _0x4e5a1a(252),
                'req': {},
                'originalHeaders': {},
                'headers': { 'Content-Length': 50 },
                'body': '<html>foo</html>',
                'statusCode': 200,
                'request': {
                    'headers': { 'foo': _0x4e5a1a(252) },
                    'body': _0x4e5a1a(253)
                }
            }))['to'][_0x4e5a1a(244)]['eq']({
                'body': _0x4e5a1a(257),
                'headers': { 'Content-Length': 50 },
                'status': 200,
                'statusText': 'OK',
                'isOkStatusCode': !![],
                'requestHeaders': { 'foo': _0x4e5a1a(252) },
                'requestBody': _0x4e5a1a(253)
            }), expect(this[_0x4e5a1a(249)])['to']['be']['calledOnce'];
        });
    }), context(_0x4fae09(258), () => {
        const _0x196b44 = _0x4fae09;
        beforeEach(function (_0x59959d) {
            const _0x3fb0a6 = _0x9f75;
            this[_0x3fb0a6(259)] = 0, this['srv'] = http[_0x3fb0a6(260)]((_0x549c4f, _0x1952b2) => {
                const _0x584779 = _0x3fb0a6;
                this['hits']++;
                switch (_0x549c4f['url']) {
                case _0x584779(261):
                    _0x1952b2[_0x584779(262)](200);
                    return _0x1952b2[_0x584779(263)](_0x584779(264));
                case _0x584779(265):
                    return _0x549c4f['socket'][_0x584779(266)]();
                default:
                    break;
                }
            }), this[_0x3fb0a6(267)][_0x3fb0a6(268)](9988, _0x59959d);
        }), afterEach(function () {
            const _0xd61c = _0x9f75;
            return this['srv'][_0xd61c(269)]();
        }), context(_0x196b44(270), () => {
            const _0x3942cf = _0x196b44;
            it(_0x3942cf(271), () => {
                const _0x216606 = _0x3942cf, _0x4fa356 = request[_0x216606(246)]({
                        'url': _0x216606(272),
                        'timeout': 1000
                    }), _0x45760e = request[_0x216606(273)](_0x4fa356);
                let _0x7c3cb1 = 0;
                _0x45760e['on'](_0x216606(274), () => {
                    _0x7c3cb1++;
                });
                const _0x298e60 = Bluebird[_0x216606(275)](_0x567a07 => {
                    const _0x34e7b5 = _0x216606;
                    _0x45760e['on'](_0x34e7b5(276), _0x567a07);
                });
                return expect(_0x298e60)['to']['be'][_0x216606(277)][_0x216606(217)](_0x3732d7 => {
                    const _0x32d5f3 = _0x216606;
                    expect(_0x3732d7[_0x32d5f3(278)])['to']['eq'](_0x32d5f3(279)), expect(_0x7c3cb1)['to']['eq'](0);
                });
            }), it(_0x3942cf(280), () => {
                const _0x26ac66 = _0x3942cf, _0x29510d = {
                        'url': _0x26ac66(281),
                        'retryIntervals': [
                            0,
                            1,
                            2,
                            3
                        ],
                        'timeout': 1000
                    }, _0x188500 = request[_0x26ac66(273)](_0x29510d);
                let _0x1977d9 = 0;
                _0x188500['on'](_0x26ac66(274), () => {
                    _0x1977d9++;
                });
                const _0x44c5bf = Bluebird['fromCallback'](_0x1f4803 => {
                    _0x188500['on']('error', _0x1f4803);
                });
                return expect(_0x44c5bf)['to']['be'][_0x26ac66(277)][_0x26ac66(217)](_0x8161d8 => {
                    const _0x5346ac = _0x26ac66;
                    expect(_0x8161d8[_0x5346ac(278)])['to']['eq'](_0x5346ac(282)), expect(_0x1977d9)['to']['eq'](4);
                });
            }), it(_0x3942cf(283), () => {
                const _0x52a684 = _0x3942cf;
                nock[_0x52a684(284)]();
                const _0x7c70b2 = {
                        'url': 'http://will-never-exist.invalid.example.com',
                        'retryIntervals': [
                            0,
                            1,
                            2,
                            3
                        ],
                        'timeout': 1000
                    }, _0x7287e3 = request[_0x52a684(273)](_0x7c70b2);
                let _0x49e603 = 0;
                _0x7287e3['on'](_0x52a684(274), () => {
                    _0x49e603++;
                });
                const _0x41a93e = Bluebird[_0x52a684(275)](_0x55b2ae => {
                    _0x7287e3['on']('error', _0x55b2ae);
                });
                return expect(_0x41a93e)['to']['be']['rejected']['then'](_0x2d9fe1 => {
                    const _0x1a6ad8 = _0x52a684;
                    expect(_0x2d9fe1[_0x1a6ad8(278)])['to']['eq']('ENOTFOUND'), expect(_0x49e603)['to']['eq'](4);
                });
            });
        }), context(_0x196b44(285), () => {
            const _0xa16237 = _0x196b44;
            it('does not retry on a timeout', function () {
                const _0x487b25 = {
                    'url': 'http://localhost:9988/never-ends',
                    'timeout': 100
                };
                return request['create'](_0x487b25, !![])['then'](() => {
                    const _0x579555 = _0x9f75;
                    throw new Error(_0x579555(286));
                })['catch'](_0x2cfbe5 => {
                    const _0xf2afdc = _0x9f75;
                    expect(_0x2cfbe5[_0xf2afdc(276)][_0xf2afdc(278)])['to']['eq'](_0xf2afdc(279)), expect(this[_0xf2afdc(259)])['to']['eq'](1);
                });
            }), it(_0xa16237(280), function () {
                const _0x5512c5 = _0xa16237, _0x20b07b = {
                        'url': _0x5512c5(281),
                        'retryIntervals': [
                            0,
                            1,
                            2,
                            3
                        ],
                        'timeout': 250
                    };
                return request['create'](_0x20b07b, !![])[_0x5512c5(217)](() => {
                    const _0x51cece = _0x5512c5;
                    throw new Error(_0x51cece(286));
                })[_0x5512c5(287)](_0x495df8 => {
                    const _0x448319 = _0x5512c5;
                    expect(_0x495df8[_0x448319(276)][_0x448319(278)])['to']['eq']('ECONNRESET'), expect(this['hits'])['to']['eq'](5);
                });
            });
        });
    }), context(_0x4fae09(288), () => {
        const _0x1175d5 = _0x4fae09;
        it('sets strictSSL=false', function () {
            const _0x4c1822 = _0x9f75, _0x373d44 = sinon[_0x4c1822(209)](request['rp'][_0x4c1822(289)][_0x4c1822(290)], _0x4c1822(291));
            return nock('http://www.github.com')[_0x4c1822(212)](_0x4c1822(292))[_0x4c1822(213)](200, 'hello', { 'Content-Type': _0x4c1822(293) }), request[_0x4c1822(294)]({}, this['fn'], {
                'url': _0x4c1822(295),
                'cookies': ![]
            })[_0x4c1822(217)](() => {
                const _0x1577c8 = _0x4c1822;
                expect(_0x373d44)['to']['be'][_0x1577c8(296)]({ 'strictSSL': ![] });
            });
        }), it('sets simple=false', function () {
            const _0x1b75c2 = _0x9f75;
            return nock(_0x1b75c2(297))[_0x1b75c2(212)](_0x1b75c2(292))[_0x1b75c2(213)](500, ''), request[_0x1b75c2(294)]({}, this['fn'], {
                'url': _0x1b75c2(295),
                'cookies': ![]
            });
        }), it(_0x1175d5(298), function () {
            const _0x38ab12 = _0x1175d5;
            return nock(_0x38ab12(297))[_0x38ab12(212)](_0x38ab12(292))['reply'](200, _0x38ab12(299), { 'Content-Type': 'text/html' }), request[_0x38ab12(294)]({}, this['fn'], {
                'url': 'http://www.github.com/foo',
                'cookies': ![],
                'body': _0x38ab12(300)
            })['then'](_0x2ae6d5 => {
                const _0x3cfc76 = _0x38ab12;
                expect(_0x2ae6d5)['to'][_0x3cfc76(235)]['keys']('status', _0x3cfc76(253), _0x3cfc76(221), _0x3cfc76(301), _0x3cfc76(302), 'statusText', _0x3cfc76(303), 'requestBody', _0x3cfc76(304)), expect(_0x2ae6d5[_0x3cfc76(305)])['to']['eq'](200), expect(_0x2ae6d5[_0x3cfc76(306)])['to']['eq']('OK'), expect(_0x2ae6d5['body'])['to']['eq'](_0x3cfc76(299)), expect(_0x2ae6d5['headers'])['to'][_0x3cfc76(244)]['eq']({ 'content-type': _0x3cfc76(293) }), expect(_0x2ae6d5[_0x3cfc76(302)])['to']['be'][_0x3cfc76(307)], expect(_0x2ae6d5['requestBody'])['to']['eq'](_0x3cfc76(300)), expect(_0x2ae6d5['requestHeaders'])['to'][_0x3cfc76(244)]['eq']({
                    'accept': _0x3cfc76(308),
                    'accept-encoding': 'gzip, deflate',
                    'connection': _0x3cfc76(309),
                    'content-length': 9,
                    'host': _0x3cfc76(310)
                }), expect(_0x2ae6d5['allRequestResponses'])['to'][_0x3cfc76(244)]['eq']([{
                        'Request Body': _0x3cfc76(300),
                        'Request Headers': {
                            'accept': _0x3cfc76(308),
                            'accept-encoding': _0x3cfc76(311),
                            'connection': _0x3cfc76(309),
                            'content-length': 9,
                            'host': _0x3cfc76(310)
                        },
                        'Request URL': 'http://www.github.com/foo',
                        'Response Body': _0x3cfc76(299),
                        'Response Headers': { 'content-type': 'text/html' },
                        'Response Status': 200
                    }]);
            });
        }), it(_0x1175d5(312), function () {
            const _0x46e0a8 = _0x1175d5;
            return this['fn'][_0x46e0a8(225)](), nock(_0x46e0a8(297))['get'](_0x46e0a8(313))[_0x46e0a8(213)](301, null, { 'location': _0x46e0a8(314) })[_0x46e0a8(212)](_0x46e0a8(314))[_0x46e0a8(213)](302, null, { 'location': _0x46e0a8(315) })['get'](_0x46e0a8(315))['reply'](200, _0x46e0a8(316), { 'Content-Type': _0x46e0a8(293) }), request[_0x46e0a8(294)]({}, this['fn'], {
                'url': _0x46e0a8(317),
                'cookies': ![]
            })[_0x46e0a8(217)](_0x41b329 => {
                const _0x32756c = _0x46e0a8;
                expect(_0x41b329)['to'][_0x32756c(235)][_0x32756c(318)]('status', _0x32756c(253), _0x32756c(221), _0x32756c(301), 'isOkStatusCode', _0x32756c(306), _0x32756c(303), _0x32756c(319), 'requestBody', 'requestHeaders'), expect(_0x41b329[_0x32756c(305)])['to']['eq'](200), expect(_0x41b329[_0x32756c(306)])['to']['eq']('OK'), expect(_0x41b329[_0x32756c(253)])['to']['eq'](_0x32756c(316)), expect(_0x41b329[_0x32756c(221)])['to'][_0x32756c(244)]['eq']({ 'content-type': 'text/html' }), expect(_0x41b329[_0x32756c(302)])['to']['be']['true'], expect(_0x41b329['requestBody'])['to']['be'][_0x32756c(320)], expect(_0x41b329[_0x32756c(319)])['to'][_0x32756c(244)]['eq']([
                    _0x32756c(321),
                    _0x32756c(322)
                ]), expect(_0x41b329[_0x32756c(304)])['to']['deep']['eq']({
                    'accept': '*/*',
                    'accept-encoding': _0x32756c(311),
                    'connection': 'keep-alive',
                    'referer': 'http://www.github.com/auth',
                    'host': _0x32756c(310)
                }), expect(_0x41b329[_0x32756c(303)])['to'][_0x32756c(244)]['eq']([
                    {
                        'Request Body': null,
                        'Request Headers': {
                            'accept': _0x32756c(308),
                            'accept-encoding': _0x32756c(311),
                            'connection': 'keep-alive',
                            'host': _0x32756c(310)
                        },
                        'Request URL': _0x32756c(317),
                        'Response Body': null,
                        'Response Headers': {
                            'content-type': 'application/json',
                            'location': _0x32756c(314)
                        },
                        'Response Status': 301
                    },
                    {
                        'Request Body': null,
                        'Request Headers': {
                            'accept': '*/*',
                            'accept-encoding': _0x32756c(311),
                            'connection': _0x32756c(309),
                            'host': _0x32756c(310),
                            'referer': _0x32756c(317)
                        },
                        'Request URL': _0x32756c(323),
                        'Response Body': null,
                        'Response Headers': {
                            'content-type': _0x32756c(324),
                            'location': '/login'
                        },
                        'Response Status': 302
                    },
                    {
                        'Request Body': null,
                        'Request Headers': {
                            'accept': _0x32756c(308),
                            'accept-encoding': _0x32756c(311),
                            'connection': _0x32756c(309),
                            'host': _0x32756c(310),
                            'referer': _0x32756c(323)
                        },
                        'Request URL': _0x32756c(325),
                        'Response Body': _0x32756c(316),
                        'Response Headers': { 'content-type': _0x32756c(293) },
                        'Response Status': 200
                    }
                ]);
            });
        }), it(_0x1175d5(326), function () {
            const _0x580d43 = _0x1175d5;
            nock[_0x580d43(284)]();
            const _0x380630 = Request({ 'timeout': 2000 });
            return _0x380630[_0x580d43(294)]({}, this['fn'], {
                'url': _0x580d43(327),
                'cookies': ![]
            })[_0x580d43(217)](() => {
                const _0x586b9e = _0x580d43;
                throw new Error(_0x586b9e(328));
            })[_0x580d43(287)](_0x192e88 => {
                const _0x512fcf = _0x580d43;
                expect(_0x192e88[_0x512fcf(329)])['to']['eq'](_0x512fcf(330));
            });
        }), it(_0x1175d5(331), function () {
            const _0x4575ef = _0x1175d5;
            return nock(_0x4575ef(332))['get'](_0x4575ef(333))[_0x4575ef(213)](200, JSON['stringify']({ 'status': 'ok' }), { 'Content-Type': _0x4575ef(324) }), request[_0x4575ef(294)]({}, this['fn'], {
                'url': _0x4575ef(334),
                'cookies': ![]
            })[_0x4575ef(217)](_0x1a4ec9 => {
                const _0x54b95a = _0x4575ef;
                expect(_0x1a4ec9[_0x54b95a(253)])['to']['deep']['eq']({ 'status': 'ok' });
            });
        }), it(_0x1175d5(335), function () {
            const _0x545ac4 = _0x1175d5;
            return nock(_0x545ac4(332))[_0x545ac4(212)](_0x545ac4(333))[_0x545ac4(213)](200, JSON[_0x545ac4(336)]({ 'status': 'ok' }), { 'Content-Type': _0x545ac4(337) }), request[_0x545ac4(294)]({}, this['fn'], {
                'url': 'http://localhost:8080/status.json',
                'cookies': ![]
            })[_0x545ac4(217)](_0x286ff5 => {
                const _0x15a794 = _0x545ac4;
                expect(_0x286ff5[_0x15a794(253)])['to'][_0x15a794(244)]['eq']({ 'status': 'ok' });
            });
        }), it(_0x1175d5(338), function () {
            const _0x38da5c = _0x1175d5;
            return nock(_0x38da5c(332))[_0x38da5c(212)]('/status.json')[_0x38da5c(213)](200, _0x38da5c(339), { 'Content-Type': _0x38da5c(324) }), request[_0x38da5c(294)]({}, this['fn'], {
                'url': _0x38da5c(334),
                'cookies': ![]
            })['then'](_0x127feb => {
                const _0x4b58f9 = _0x38da5c;
                expect(_0x127feb[_0x4b58f9(253)])['to']['eq'](_0x4b58f9(339));
            });
        }), it(_0x1175d5(340), function () {
            const _0x43369a = _0x1175d5;
            return nock(_0x43369a(332))[_0x43369a(212)]('/foo')[_0x43369a(341)](10)[_0x43369a(213)](200, _0x43369a(342), { 'Content-Type': _0x43369a(343) }), request[_0x43369a(294)]({}, this['fn'], {
                'url': 'http://localhost:8080/foo',
                'cookies': ![]
            })['then'](_0x503aef => {
                const _0x1d34d7 = _0x43369a;
                expect(_0x503aef[_0x1d34d7(301)])['to']['be']['a'](_0x1d34d7(344)), expect(_0x503aef[_0x1d34d7(301)])['to']['be']['gt'](0);
            });
        }), it(_0x1175d5(345), function () {
            const _0x7cfdd = _0x1175d5;
            nock(_0x7cfdd(332))[_0x7cfdd(346)](_0x7cfdd(347), 'foobarbaz')['get']('/foo')[_0x7cfdd(213)](200, 'derp');
            const _0x5207cc = {};
            return _0x5207cc[_0x7cfdd(347)] = _0x7cfdd(300), request[_0x7cfdd(294)](_0x5207cc, this['fn'], {
                'url': 'http://localhost:8080/foo',
                'cookies': ![]
            })[_0x7cfdd(217)](_0x5ad480 => {
                const _0x32735c = _0x7cfdd;
                expect(_0x5ad480[_0x32735c(253)])['to']['eq'](_0x32735c(348));
            });
        }), it('sends connection: keep-alive by default', function () {
            const _0x3df28e = _0x1175d5;
            return nock(_0x3df28e(332))[_0x3df28e(346)](_0x3df28e(349), _0x3df28e(309))[_0x3df28e(212)](_0x3df28e(292))[_0x3df28e(213)](200, _0x3df28e(350)), request[_0x3df28e(294)]({}, this['fn'], {
                'url': _0x3df28e(351),
                'cookies': ![]
            })['then'](_0x196ac1 => {
                const _0xe9a8a9 = _0x3df28e;
                expect(_0x196ac1[_0xe9a8a9(253)])['to']['eq']('it worked');
            });
        }), it(_0x1175d5(352), function () {
            const _0x2a7525 = _0x1175d5;
            nock('http://localhost:8080')['matchHeader'](_0x2a7525(353), 'true')[_0x2a7525(212)]('/foo')[_0x2a7525(213)](200, 'derp');
            const _0x257bf3 = {};
            return _0x257bf3[_0x2a7525(347)] = _0x2a7525(300), request['sendPromise'](_0x257bf3, this['fn'], {
                'url': _0x2a7525(351),
                'cookies': ![],
                'headers': { 'TEST': !![] }
            })[_0x2a7525(217)](_0x361add => {
                const _0x492bbf = _0x2a7525;
                expect(_0x361add[_0x492bbf(253)])['to']['eq'](_0x492bbf(348));
            });
        }), it(_0x1175d5(354), function () {
            const _0x2fffd8 = _0x1175d5;
            nock(_0x2fffd8(332))[_0x2fffd8(346)](_0x2fffd8(347), _0x2fffd8(355))[_0x2fffd8(212)](_0x2fffd8(292))[_0x2fffd8(213)](200, _0x2fffd8(348));
            const _0x4854e0 = { 'user-agent': _0x2fffd8(353) };
            return request[_0x2fffd8(294)](_0x4854e0, this['fn'], {
                'url': _0x2fffd8(351),
                'cookies': ![],
                'headers': { 'User-Agent': _0x2fffd8(355) }
            })[_0x2fffd8(217)](_0xdc6cbf => {
                const _0x151b3c = _0x2fffd8;
                expect(_0xdc6cbf[_0x151b3c(253)])['to']['eq'](_0x151b3c(348));
            });
        }), context('accept header', () => {
            const _0x3f169f = _0x1175d5;
            it('sets to */* by default', function () {
                const _0x8490a5 = _0x9f75;
                return nock(_0x8490a5(332))[_0x8490a5(346)]('accept', _0x8490a5(308))[_0x8490a5(212)](_0x8490a5(356))['reply'](200), request[_0x8490a5(294)]({}, this['fn'], {
                    'url': 'http://localhost:8080/headers',
                    'cookies': ![]
                })[_0x8490a5(217)](_0x36371b => {
                    const _0x1e7603 = _0x8490a5;
                    expect(_0x36371b[_0x1e7603(305)])['to']['eq'](200);
                });
            }), it(_0x3f169f(357), function () {
                const _0x44c907 = _0x3f169f;
                return nock(_0x44c907(332))[_0x44c907(346)]('accept', _0x44c907(293))[_0x44c907(212)](_0x44c907(356))[_0x44c907(213)](200), request[_0x44c907(294)]({}, this['fn'], {
                    'url': _0x44c907(358),
                    'cookies': ![],
                    'headers': { 'accept': _0x44c907(293) }
                })[_0x44c907(217)](_0x2fd47b => {
                    const _0x5021f3 = _0x44c907;
                    expect(_0x2fd47b[_0x5021f3(305)])['to']['eq'](200);
                });
            }), it('can override Accept header', function () {
                const _0x13ccb0 = _0x3f169f;
                return nock('http://localhost:8080')[_0x13ccb0(346)](_0x13ccb0(359), _0x13ccb0(343))[_0x13ccb0(212)]('/headers')[_0x13ccb0(213)](200), request['sendPromise']({}, this['fn'], {
                    'url': 'http://localhost:8080/headers',
                    'cookies': ![],
                    'headers': { 'Accept': _0x13ccb0(343) }
                })['then'](_0x50bad6 => {
                    const _0x20dc36 = _0x13ccb0;
                    expect(_0x50bad6[_0x20dc36(305)])['to']['eq'](200);
                });
            });
        }), context('qs', () => {
            it('can accept qs', function () {
                const _0x10fd14 = _0x9f75;
                return nock(_0x10fd14(332))['get']('/foo?bar=baz&q=1')[_0x10fd14(213)](200), request['sendPromise']({}, this['fn'], {
                    'url': _0x10fd14(351),
                    'cookies': ![],
                    'qs': {
                        'bar': 'baz',
                        'q': 1
                    }
                })[_0x10fd14(217)](_0x231209 => {
                    const _0x3c2b26 = _0x10fd14;
                    expect(_0x231209[_0x3c2b26(305)])['to']['eq'](200);
                });
            });
        }), context(_0x1175d5(360), () => {
            const _0x1f8326 = _0x1175d5;
            beforeEach(function () {
                const _0x36748b = _0x9f75;
                this['fn'][_0x36748b(225)]();
            }), it(_0x1f8326(361), function () {
                const _0x3afdfa = _0x1f8326;
                return nock(_0x3afdfa(332))[_0x3afdfa(212)]('/dashboard')[_0x3afdfa(213)](302, '', { 'location': _0x3afdfa(362) })[_0x3afdfa(212)](_0x3afdfa(315))[_0x3afdfa(213)](200, _0x3afdfa(363)), request[_0x3afdfa(294)]({}, this['fn'], {
                    'url': _0x3afdfa(364),
                    'cookies': ![],
                    'followRedirect': !![]
                })[_0x3afdfa(217)](_0x568583 => {
                    const _0x7f174a = _0x3afdfa;
                    expect(_0x568583['status'])['to']['eq'](200), expect(_0x568583[_0x7f174a(253)])['to']['eq'](_0x7f174a(363)), expect(_0x568583)[_0x7f174a(242)]['to'][_0x7f174a(235)][_0x7f174a(365)](_0x7f174a(366));
                });
            }), it(_0x1f8326(367), function () {
                const _0x446098 = _0x1f8326;
                return nock(_0x446098(332))[_0x446098(368)]('/login')[_0x446098(213)](302, '', { 'location': 'http://localhost:8080/dashboard' })[_0x446098(212)]('/dashboard')['reply'](200, _0x446098(369)), request[_0x446098(294)]({}, this['fn'], {
                    'method': 'POST',
                    'url': _0x446098(362),
                    'cookies': ![]
                })[_0x446098(217)](_0x1a6f6b => {
                    const _0x58294e = _0x446098;
                    expect(_0x1a6f6b[_0x58294e(305)])['to']['eq'](200), expect(_0x1a6f6b[_0x58294e(253)])['to']['eq']('dashboard'), expect(_0x1a6f6b)[_0x58294e(242)]['to'][_0x58294e(235)]['property'](_0x58294e(366));
                });
            }), it(_0x1f8326(370), function () {
                const _0x52f184 = _0x1f8326;
                return nock(_0x52f184(332))[_0x52f184(212)]('/dashboard')['reply'](302, '', { 'location': _0x52f184(362) })['get'](_0x52f184(315))[_0x52f184(213)](200, _0x52f184(363)), request['sendPromise']({}, this['fn'], {
                    'url': _0x52f184(364),
                    'cookies': ![],
                    'followRedirect': ![]
                })[_0x52f184(217)](_0x3c37fb => {
                    const _0x24b550 = _0x52f184;
                    expect(_0x3c37fb['status'])['to']['eq'](302), expect(_0x3c37fb[_0x24b550(253)])['to']['eq'](''), expect(_0x3c37fb[_0x24b550(366)])['to']['eq']('http://localhost:8080/login');
                });
            }), it(_0x1f8326(371), function () {
                const _0x52a57a = _0x1f8326;
                return nock(_0x52a57a(332))['get'](_0x52a57a(313))[_0x52a57a(213)](302, '', { 'location': _0x52a57a(315) })[_0x52a57a(212)](_0x52a57a(315))[_0x52a57a(213)](200, _0x52a57a(363)), request[_0x52a57a(294)]({}, this['fn'], {
                    'url': _0x52a57a(364),
                    'cookies': ![],
                    'followRedirect': ![]
                })[_0x52a57a(217)](_0x873a9f => {
                    const _0xa96456 = _0x52a57a;
                    expect(_0x873a9f[_0xa96456(305)])['to']['eq'](302), expect(_0x873a9f['redirectedToUrl'])['to']['eq'](_0xa96456(362));
                });
            }), it('resolves redirectedToUrl to another domain', function () {
                const _0x4e96e2 = _0x1f8326;
                return nock(_0x4e96e2(332))[_0x4e96e2(212)]('/dashboard')['reply'](301, '', { 'location': _0x4e96e2(372) })[_0x4e96e2(212)](_0x4e96e2(315))[_0x4e96e2(213)](200, 'login'), request[_0x4e96e2(294)]({}, this['fn'], {
                    'url': _0x4e96e2(364),
                    'cookies': ![],
                    'followRedirect': ![]
                })[_0x4e96e2(217)](_0x54208a => {
                    const _0x319d96 = _0x4e96e2;
                    expect(_0x54208a[_0x319d96(305)])['to']['eq'](301), expect(_0x54208a[_0x319d96(366)])['to']['eq'](_0x319d96(372));
                });
            }), it(_0x1f8326(373), function () {
                const _0xed65eb = _0x1f8326;
                return nock('http://localhost:8080')['get'](_0xed65eb(313))['reply'](302, '', { 'location': 'http://localhost:8080/login' })['get'](_0xed65eb(315))[_0xed65eb(213)](200, 'login'), request['sendPromise']({}, this['fn'], {
                    'url': 'http://localhost:8080/dashboard',
                    'cookies': ![]
                })['then'](_0x221920 => {
                    const _0x519990 = _0xed65eb;
                    expect(_0x221920[_0x519990(305)])['to']['eq'](200), expect(_0x221920)[_0x519990(242)]['to'][_0x519990(235)][_0x519990(365)](_0x519990(366));
                });
            }), it('gets + attaches the cookies at each redirect', function () {
                return testAttachingCookiesWith(() => {
                    const _0x244a16 = _0x9f75;
                    return request[_0x244a16(294)]({}, this['fn'], { 'url': _0x244a16(374) });
                });
            });
        }), context(_0x1175d5(375), () => {
            const _0x2031fc = _0x1175d5;
            beforeEach(() => {
                const _0x219208 = _0x9f75;
                nock(_0x219208(332))['matchHeader'](_0x219208(376), _0x219208(377))[_0x219208(368)](_0x219208(315), _0x219208(378))[_0x219208(213)](200, _0x219208(379));
            }), it(_0x2031fc(380), function () {
                const _0x227568 = _0x2031fc;
                return request[_0x227568(294)]({}, this['fn'], {
                    'url': 'http://localhost:8080/login',
                    'method': _0x227568(381),
                    'cookies': ![],
                    'form': !![],
                    'body': {
                        'foo': 'bar',
                        'baz': _0x227568(382)
                    }
                })['then'](_0x35d25f => {
                    const _0x5ac555 = _0x227568;
                    expect(_0x35d25f['status'])['to']['eq'](200), expect(_0x35d25f[_0x5ac555(253)])['to']['eq'](_0x5ac555(379));
                });
            }), it(_0x2031fc(383), function () {
                const _0xc89cb4 = _0x2031fc, _0x4d2aa0 = sinon['spy'](request['rp'][_0xc89cb4(289)][_0xc89cb4(290)], _0xc89cb4(291)), _0x5d105a = {
                        'foo': _0xc89cb4(252),
                        'baz': 'quux'
                    };
                return request[_0xc89cb4(294)]({}, this['fn'], {
                    'url': _0xc89cb4(362),
                    'method': _0xc89cb4(381),
                    'cookies': ![],
                    'form': !![],
                    'json': !![],
                    'body': _0x5d105a
                })[_0xc89cb4(217)](_0x302a01 => {
                    const _0x5bc3dc = _0xc89cb4;
                    expect(_0x302a01[_0x5bc3dc(305)])['to']['eq'](200), expect(_0x302a01['body'])['to']['eq']('<html></html>'), expect(_0x4d2aa0)[_0x5bc3dc(242)]['to']['be'][_0x5bc3dc(296)]({ 'body': _0x5d105a });
                });
            }), it(_0x2031fc(384), function () {
                const _0x1994e1 = _0x2031fc, _0x3c2b9b = sinon[_0x1994e1(209)](request['rp'][_0x1994e1(289)][_0x1994e1(290)], _0x1994e1(291));
                return request[_0x1994e1(294)]({}, this['fn'], {
                    'url': _0x1994e1(362),
                    'method': 'POST',
                    'cookies': ![],
                    'form': !![],
                    'json': !![],
                    'body': {
                        'foo': 'bar',
                        'baz': _0x1994e1(382)
                    }
                })[_0x1994e1(217)](_0x371a59 => {
                    const _0x265bf0 = _0x1994e1;
                    expect(_0x371a59[_0x265bf0(305)])['to']['eq'](200), expect(_0x371a59['body'])['to']['eq']('<html></html>'), expect(_0x3c2b9b)[_0x265bf0(242)]['to']['be'][_0x265bf0(296)]({ 'json': !![] });
                });
            });
        }), context('bad headers', () => {
            const _0x6415ca = _0x1175d5;
            beforeEach(function (_0x23fd69) {
                const _0x50737e = _0x9f75;
                this[_0x50737e(267)] = http['createServer']((_0x48edb2, _0x32b933) => {
                    const _0x33eece = _0x50737e;
                    _0x32b933[_0x33eece(262)](200), _0x32b933[_0x33eece(385)]();
                }), this[_0x50737e(267)]['listen'](9988, _0x23fd69);
            }), afterEach(function () {
                const _0x5158f4 = _0x9f75;
                return this[_0x5158f4(267)][_0x5158f4(269)]();
            }), it('recovers from bad headers', function () {
                const _0x1682b9 = _0x9f75;
                return request[_0x1682b9(294)]({}, this['fn'], {
                    'url': 'http://localhost:9988/foo',
                    'cookies': ![],
                    'headers': { 'x-text': _0x1682b9(386) }
                })[_0x1682b9(217)](() => {
                    const _0x5c890b = _0x1682b9;
                    throw new Error(_0x5c890b(387));
                })[_0x1682b9(287)](_0x210e9f => {
                    const _0x14d588 = _0x1682b9;
                    expect(_0x210e9f[_0x14d588(329)])['to']['eq'](_0x14d588(388));
                });
            }), it(_0x6415ca(389), function () {
                const _0x2f0dbb = _0x6415ca;
                return request[_0x2f0dbb(294)]({}, this['fn'], {
                    'url': _0x2f0dbb(390),
                    'cookies': ![],
                    'json': !![],
                    'body': { 'x-text': 'אבגד' }
                });
            });
        });
    }), context('#sendStream', () => {
        const _0x81861a = _0x4fae09;
        it('allows overriding user-agent in headers', function () {
            const _0x1a95a9 = _0x9f75;
            nock(_0x1a95a9(332))[_0x1a95a9(346)](_0x1a95a9(347), 'custom-agent')[_0x1a95a9(212)](_0x1a95a9(292))['reply'](200, _0x1a95a9(348)), sinon[_0x1a95a9(209)](request, _0x1a95a9(273)), this['fn']['resolves']({});
            const _0x604666 = { 'user-agent': 'test' }, _0x1f8db5 = {
                    'url': 'http://localhost:8080/foo',
                    'cookies': ![],
                    'headers': { 'user-agent': _0x1a95a9(355) }
                };
            return request[_0x1a95a9(391)](_0x604666, this['fn'], _0x1f8db5)[_0x1a95a9(217)](_0x4cfd1a => {
                const _0x13761e = _0x1a95a9;
                _0x4cfd1a(), expect(request['create'])['to']['be'][_0x13761e(255)], expect(request[_0x13761e(273)])['to']['be'][_0x13761e(236)](_0x1f8db5);
            });
        }), it(_0x81861a(392), function () {
            return testAttachingCookiesWith(() => {
                const _0x14c3da = _0x9f75;
                return request[_0x14c3da(391)]({}, this['fn'], {
                    'url': _0x14c3da(374),
                    'followRedirect': _[_0x14c3da(393)]
                })[_0x14c3da(217)](_0x2a6643 => {
                    const _0x5134fa = _0x2a6643();
                    return new Promise((_0x144fbd, _0x3d1f28) => {
                        const _0x34bec6 = _0x9f75;
                        _0x5134fa['on'](_0x34bec6(394), _0x144fbd), _0x5134fa['on'](_0x34bec6(276), _0x3d1f28);
                    });
                });
            });
        });
    });
});