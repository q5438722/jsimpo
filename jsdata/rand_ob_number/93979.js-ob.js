require('../spec_helper');
const _ = require('lodash'), http = require('http'), Bluebird = require('bluebird'), Request = require(root + 'lib/request'), snapshot = require('snap-shot-it'), request = Request({ 'timeout': 0x64 }), testAttachingCookiesWith = function (_0x26d950) {
        const _0x3c42a5 = sinon['spy'](request, 'setCookiesOnBrowser'), _0x356408 = sinon['spy'](request, 'setRequestCookieHeader');
        return nock('http://localhost:1234')['get']('/')['reply'](-0x2 * -0x4be + 0xbd8 + -0xa13 * 0x2, '', {
            'set-cookie': 'one=1',
            'location': '/second'
        })['get']('/second')['reply'](-0x50 * -0x2b + 0x17f6 + 0x487 * -0x8, '', {
            'set-cookie': 'two=2',
            'location': '/third'
        })['get']('/third')['reply'](-0x11e * -0xd + -0x1 * 0x1c2b + 0xe6d, '', { 'set-cookie': 'three=3' }), _0x26d950()['then'](() => {
            return snapshot({
                'setCalls': _0x3c42a5['getCalls']()['map'](_0x5cddc1 => {
                    return {
                        'currentUrl': _0x5cddc1['args'][-0x18d9 * -0x1 + -0xe26 * -0x1 + -0x26fe],
                        'setCookie': _0x5cddc1['args'][0x19fd * 0x1 + 0xd1 * 0x5 + -0x1 * 0x1e12]['headers']['set-cookie']
                    };
                }),
                'getCalls': _0x356408['getCalls']()['map'](_0x26ed2b => {
                    return { 'newUrl': _['get'](_0x26ed2b, 'args.1') };
                })
            });
        });
    };
describe('lib/request', () => {
    beforeEach(function () {
        this['fn'] = sinon['stub'](), this['fn']['withArgs']('set:cookie')['resolves']({}), this['fn']['withArgs']('get:cookies')['resolves']([]);
    }), it('is\x20defined', () => {
        expect(request)['to']['be']['an']('object');
    }), context('#getDelayForRetry', () => {
        it('divides\x20by\x2010\x20when\x20delay\x20>=\x201000\x20and\x20err.code\x20=\x20ECONNREFUSED', () => {
            const _0x315b33 = [
                    0x1f83 * 0x1 + -0x1e8e * 0x1 + 0x1 * -0xf4,
                    0x206a + -0x455 * -0x7 + -0x3ebb,
                    0x31c * -0xb + -0x7 * -0x495 + -0x2 * -0x112,
                    0x47 * 0x47 + 0x627 * -0x3 + -0x138
                ], _0x32bb19 = [
                    0x1a41 + -0x452 + -0x15ef,
                    -0x23ea + -0x1785 * -0x1 + 0x104c,
                    0xfad * -0x1 + 0x26 * 0x27 + 0xdcb,
                    0x8 * 0x4b7 + 0x1 * -0x205e + -0x1 * -0x276
                ], _0x5389c7 = { 'code': 'ECONNREFUSED' }, _0x461b3e = sinon['stub']();
            _0x315b33['forEach'](() => {
                return request['getDelayForRetry']({
                    'err': _0x5389c7,
                    'onNext': _0x461b3e,
                    'retryIntervals': _0x315b33,
                    'delaysRemaining': _0x32bb19
                });
            }), expect(_0x32bb19)['to']['be']['empty'], expect(_0x461b3e['args'])['to']['deep']['eq']([
                [
                    0x599 * 0x5 + -0x3e9 + 0x1 * -0x1814,
                    0x406 * -0x2 + -0x18e4 + 0x20f1
                ],
                [
                    0x5 * -0x2e7 + -0x71b * -0x3 + -0x2e7,
                    0x24c0 + -0x1 * -0x1fb5 + 0x289 * -0x1b
                ],
                [
                    -0x1e18 + -0x43 * -0x2f + 0x122f,
                    0x33f * -0x1 + 0x20df + -0x1d9d
                ],
                [
                    0x1281 + -0x15dd + 0x424,
                    -0xd66 + -0x1c77 + 0x29e1
                ]
            ]);
        }), it('does\x20not\x20divide\x20by\x2010\x20when\x20err.code\x20!=\x20ECONNREFUSED', () => {
            const _0x14f9a8 = [
                    0x3 * -0x8eb + -0x413 * 0x5 + 0x2f21,
                    -0x223 * 0x10 + 0x1 * -0x4e1 + -0x1 * -0x2713,
                    0x45c + 0x590 * 0x5 + -0x2029 * 0x1,
                    -0xde9 + -0x6 * 0x45d + 0x1 * 0x281b
                ], _0x29479c = [
                    -0xc55 + -0x5e * 0x3c + 0x3 * 0xe0f,
                    -0x2634 + 0x1f43 * -0x1 + -0x10f * -0x49,
                    -0x1991 + 0x203 * 0x9 + -0x30e * -0x5,
                    -0xfd4 + -0x1523 * -0x1 + 0x281
                ], _0x40851f = { 'code': 'ECONNRESET' }, _0x5a4c92 = sinon['stub']();
            request['getDelayForRetry']({
                'err': _0x40851f,
                'onNext': _0x5a4c92,
                'retryIntervals': _0x14f9a8,
                'delaysRemaining': _0x29479c
            }), expect(_0x29479c)['to']['have']['length'](0x3 * 0x4de + 0x1a5c + -0x3b9 * 0xb), expect(_0x5a4c92)['to']['be']['calledWith'](-0x868 * -0x2 + 0x220f * -0x1 + 0x190f, 0x11db + 0x140f + -0x795 * 0x5);
        }), it('calls\x20onElse\x20when\x20delaysRemaining\x20is\x20exhausted', () => {
            const _0x2b6bc1 = [
                    0x25cb + -0x2 * -0xeca + -0x435e,
                    0x8 * -0x20f + -0x33 * -0xb6 + -0x13c8,
                    -0x1562 + 0x49 * 0x4f + -0x122,
                    -0x1d58 + 0x2 * 0xaa4 + 0x814
                ], _0x1f3103 = [], _0x3ad288 = sinon['stub'](), _0x315a8b = sinon['stub']();
            request['getDelayForRetry']({
                'onElse': _0x315a8b,
                'onNext': _0x3ad288,
                'retryIntervals': _0x2b6bc1,
                'delaysRemaining': _0x1f3103
            }), expect(_0x315a8b)['to']['be']['calledWithExactly'](), expect(_0x3ad288)['not']['to']['be']['called'];
        });
    }), context('#setDefaults', () => {
        it('delaysRemaining\x20to\x20retryIntervals\x20clone', () => {
            const _0x557ba1 = [
                    -0x1e65 + -0x47f * -0x1 + 0x19e7,
                    -0x261a + -0x1aca + -0x27f * -0x1a,
                    0x1 * 0x1bce + -0x229 + 0xcd1 * -0x2,
                    0x2446 + 0x11 * 0x233 + -0x49a5
                ], _0xbc03c3 = request['setDefaults']({ 'retryIntervals': _0x557ba1 });
            expect(_0xbc03c3['retryIntervals'])['to']['eq'](_0x557ba1), expect(_0xbc03c3['delaysRemaining'])['not']['to']['eq'](_0x557ba1), expect(_0xbc03c3['delaysRemaining'])['to']['deep']['eq'](_0x557ba1);
        }), it('retryIntervals\x20to\x20[0,\x201000,\x202000,\x202000]\x20by\x20default', () => {
            const _0x400965 = request['setDefaults']({});
            expect(_0x400965['retryIntervals'])['to']['deep']['eq']([
                0x1 * -0x1f2b + 0x32b * -0x8 + -0x25 * -0x187,
                -0x1fd * 0x9 + -0x22e4 + 0x38b1,
                0x1e0f + 0x11cb + -0x52 * 0x7d,
                0x17f1 + -0x151d + 0x4fc
            ]);
        }), it('delaysRemaining\x20can\x20be\x20overridden', () => {
            const _0x51e6b3 = [-0x13fe + 0x1e3 + 0x121c * 0x1], _0x395c8c = request['setDefaults']({ 'delaysRemaining': _0x51e6b3 });
            expect(_0x395c8c['delaysRemaining'])['to']['eq'](_0x51e6b3);
        });
    }), context('#normalizeResponse', () => {
        beforeEach(function () {
            this['push'] = sinon['stub']();
        }), it('sets\x20status\x20to\x20statusCode\x20and\x20deletes\x20statusCode', function () {
            expect(request['normalizeResponse'](this['push'], {
                'statusCode': 0x194,
                'request': {
                    'headers': { 'foo': 'bar' },
                    'body': 'body'
                }
            }))['to']['deep']['eq']({
                'status': 0x194,
                'statusText': 'Not\x20Found',
                'isOkStatusCode': ![],
                'requestHeaders': { 'foo': 'bar' },
                'requestBody': 'body'
            }), expect(this['push'])['to']['be']['calledOnce'];
        }), it('picks\x20out\x20status\x20body\x20and\x20headers', function () {
            expect(request['normalizeResponse'](this['push'], {
                'foo': 'bar',
                'req': {},
                'originalHeaders': {},
                'headers': { 'Content-Length': 0x32 },
                'body': '<html>foo</html>',
                'statusCode': 0xc8,
                'request': {
                    'headers': { 'foo': 'bar' },
                    'body': 'body'
                }
            }))['to']['deep']['eq']({
                'body': '<html>foo</html>',
                'headers': { 'Content-Length': 0x32 },
                'status': 0xc8,
                'statusText': 'OK',
                'isOkStatusCode': !![],
                'requestHeaders': { 'foo': 'bar' },
                'requestBody': 'body'
            }), expect(this['push'])['to']['be']['calledOnce'];
        });
    }), context('#create', () => {
        beforeEach(function (_0x207f1b) {
            this['hits'] = -0x249a + 0x1 * 0x2573 + -0xd9, this['srv'] = http['createServer']((_0x1a98a1, _0x38bffb) => {
                this['hits']++;
                switch (_0x1a98a1['url']) {
                case '/never-ends':
                    _0x38bffb['writeHead'](0x13 * 0x9d + -0x1 * 0x1d3a + 0x125b);
                    return _0x38bffb['write']('foo\x0a');
                case '/econnreset':
                    return _0x1a98a1['socket']['destroy']();
                default:
                    break;
                }
            }), this['srv']['listen'](0xd23 + 0x56 * 0x5b + -0x4b1, _0x207f1b);
        }), afterEach(function () {
            return this['srv']['close']();
        }), context('retries\x20for\x20streams', () => {
            it('does\x20not\x20retry\x20on\x20a\x20timeout', () => {
                const _0xf87dc9 = request['setDefaults']({
                        'url': 'http://localhost:9988/never-ends',
                        'timeout': 0x3e8
                    }), _0x2235ca = request['create'](_0xf87dc9);
                let _0x2b8570 = -0x37 * -0xa5 + -0x2310 + -0x3 * 0x21;
                _0x2235ca['on']('retry', () => {
                    _0x2b8570++;
                });
                const _0x41b958 = Bluebird['fromCallback'](_0x48e38a => {
                    _0x2235ca['on']('error', _0x48e38a);
                });
                return expect(_0x41b958)['to']['be']['rejected']['then'](_0x1f8a32 => {
                    expect(_0x1f8a32['code'])['to']['eq']('ESOCKETTIMEDOUT'), expect(_0x2b8570)['to']['eq'](-0x2089 + -0x1 * 0x1173 + 0x2 * 0x18fe);
                });
            }), it('retries\x204x\x20on\x20a\x20connection\x20reset', () => {
                const _0x4b8183 = {
                        'url': 'http://localhost:9988/econnreset',
                        'retryIntervals': [
                            -0x2562 + -0x23a7 * 0x1 + 0x4909,
                            -0x485 + -0x1 * 0x1ba1 + 0x1 * 0x2027,
                            -0xe3b * -0x1 + 0x1148 + -0x1f81,
                            -0x39 * 0x5f + 0x267 * 0xa + -0x2dc * 0x1
                        ],
                        'timeout': 0x3e8
                    }, _0x3edc88 = request['create'](_0x4b8183);
                let _0x192436 = -0x15b9 + -0x3c5 * -0x2 + 0xe2f;
                _0x3edc88['on']('retry', () => {
                    _0x192436++;
                });
                const _0x75ea87 = Bluebird['fromCallback'](_0x561019 => {
                    _0x3edc88['on']('error', _0x561019);
                });
                return expect(_0x75ea87)['to']['be']['rejected']['then'](_0x46be64 => {
                    expect(_0x46be64['code'])['to']['eq']('ECONNRESET'), expect(_0x192436)['to']['eq'](0xd72 * 0x1 + 0x218e + 0x3e * -0xc2);
                });
            }), it('retries\x204x\x20on\x20a\x20NXDOMAIN\x20(ENOTFOUND)', () => {
                nock['enableNetConnect']();
                const _0x442d28 = {
                        'url': 'http://will-never-exist.invalid.example.com',
                        'retryIntervals': [
                            -0x2ac * 0xe + -0x1652 + 0x116 * 0x37,
                            0xc74 + -0x6 * -0x496 + 0x1 * -0x27f7,
                            -0x2 * 0x108d + 0x78b + 0x1991,
                            -0x1144 + 0x232c + -0x1fd * 0x9
                        ],
                        'timeout': 0x3e8
                    }, _0x5c561a = request['create'](_0x442d28);
                let _0x43db53 = -0x1cd * 0x7 + 0x45 * -0x82 + -0x1 * -0x2fa5;
                _0x5c561a['on']('retry', () => {
                    _0x43db53++;
                });
                const _0x104643 = Bluebird['fromCallback'](_0x227279 => {
                    _0x5c561a['on']('error', _0x227279);
                });
                return expect(_0x104643)['to']['be']['rejected']['then'](_0x25678a => {
                    expect(_0x25678a['code'])['to']['eq']('ENOTFOUND'), expect(_0x43db53)['to']['eq'](0x1d8f + -0x1d4f * -0x1 + -0x3ada);
                });
            });
        }), context('retries\x20for\x20promises', () => {
            it('does\x20not\x20retry\x20on\x20a\x20timeout', function () {
                const _0x2ad445 = {
                    'url': 'http://localhost:9988/never-ends',
                    'timeout': 0x64
                };
                return request['create'](_0x2ad445, !![])['then'](() => {
                    throw new Error('should\x20not\x20reach');
                })['catch'](_0x112812 => {
                    expect(_0x112812['error']['code'])['to']['eq']('ESOCKETTIMEDOUT'), expect(this['hits'])['to']['eq'](0x368 + -0x167 + 0x4 * -0x80);
                });
            }), it('retries\x204x\x20on\x20a\x20connection\x20reset', function () {
                const _0x541029 = {
                    'url': 'http://localhost:9988/econnreset',
                    'retryIntervals': [
                        0x991 * 0x1 + 0x1ee * 0x2 + -0x1eb * 0x7,
                        -0x1 * 0x703 + -0x1b7 + 0x8bb,
                        -0x1 * 0xb5e + 0x24ad + -0x194d,
                        -0x20b * 0xb + -0x1ab * 0xc + 0x2a80
                    ],
                    'timeout': 0xfa
                };
                return request['create'](_0x541029, !![])['then'](() => {
                    throw new Error('should\x20not\x20reach');
                })['catch'](_0x543c82 => {
                    expect(_0x543c82['error']['code'])['to']['eq']('ECONNRESET'), expect(this['hits'])['to']['eq'](0x1 * 0x1879 + 0x247b + 0x13 * -0x335);
                });
            });
        });
    }), context('#sendPromise', () => {
        it('sets\x20strictSSL=false', function () {
            const _0x57b7b1 = sinon['spy'](request['rp']['Request']['prototype'], 'init');
            return nock('http://www.github.com')['get']('/foo')['reply'](0xd4f + 0x1b5 * 0xb + 0x2 * -0xfa7, 'hello', { 'Content-Type': 'text/html' }), request['sendPromise']({}, this['fn'], {
                'url': 'http://www.github.com/foo',
                'cookies': ![]
            })['then'](() => {
                expect(_0x57b7b1)['to']['be']['calledWithMatch']({ 'strictSSL': ![] });
            });
        }), it('sets\x20simple=false', function () {
            return nock('http://www.github.com')['get']('/foo')['reply'](0x1da5 * 0x1 + -0x72f + 0x6d6 * -0x3, ''), request['sendPromise']({}, this['fn'], {
                'url': 'http://www.github.com/foo',
                'cookies': ![]
            });
        }), it('sets\x20resolveWithFullResponse=true', function () {
            return nock('http://www.github.com')['get']('/foo')['reply'](0x2 * 0xa9a + -0x6 * 0xda + -0x31 * 0x50, 'hello', { 'Content-Type': 'text/html' }), request['sendPromise']({}, this['fn'], {
                'url': 'http://www.github.com/foo',
                'cookies': ![],
                'body': 'foobarbaz'
            })['then'](_0x32c47c => {
                expect(_0x32c47c)['to']['have']['keys']('status', 'body', 'headers', 'duration', 'isOkStatusCode', 'statusText', 'allRequestResponses', 'requestBody', 'requestHeaders'), expect(_0x32c47c['status'])['to']['eq'](0x13b5 + 0xb28 + -0x1c5 * 0x11), expect(_0x32c47c['statusText'])['to']['eq']('OK'), expect(_0x32c47c['body'])['to']['eq']('hello'), expect(_0x32c47c['headers'])['to']['deep']['eq']({ 'content-type': 'text/html' }), expect(_0x32c47c['isOkStatusCode'])['to']['be']['true'], expect(_0x32c47c['requestBody'])['to']['eq']('foobarbaz'), expect(_0x32c47c['requestHeaders'])['to']['deep']['eq']({
                    'accept': '*/*',
                    'accept-encoding': 'gzip,\x20deflate',
                    'connection': 'keep-alive',
                    'content-length': 0x9,
                    'host': 'www.github.com'
                }), expect(_0x32c47c['allRequestResponses'])['to']['deep']['eq']([{
                        'Request\x20Body': 'foobarbaz',
                        'Request\x20Headers': {
                            'accept': '*/*',
                            'accept-encoding': 'gzip,\x20deflate',
                            'connection': 'keep-alive',
                            'content-length': 0x9,
                            'host': 'www.github.com'
                        },
                        'Request\x20URL': 'http://www.github.com/foo',
                        'Response\x20Body': 'hello',
                        'Response\x20Headers': { 'content-type': 'text/html' },
                        'Response\x20Status': 0xc8
                    }]);
            });
        }), it('includes\x20redirects', function () {
            return this['fn']['resolves'](), nock('http://www.github.com')['get']('/dashboard')['reply'](0x2017 + 0xf * -0xb4 + -0x145e, null, { 'location': '/auth' })['get']('/auth')['reply'](0x1eb6 + -0x2ce + 0x1 * -0x1aba, null, { 'location': '/login' })['get']('/login')['reply'](-0x6da + -0x1af7 + 0x2299, 'log\x20in', { 'Content-Type': 'text/html' }), request['sendPromise']({}, this['fn'], {
                'url': 'http://www.github.com/dashboard',
                'cookies': ![]
            })['then'](_0x1993bd => {
                expect(_0x1993bd)['to']['have']['keys']('status', 'body', 'headers', 'duration', 'isOkStatusCode', 'statusText', 'allRequestResponses', 'redirects', 'requestBody', 'requestHeaders'), expect(_0x1993bd['status'])['to']['eq'](-0xe * -0x25 + -0x205e + 0x14c * 0x18), expect(_0x1993bd['statusText'])['to']['eq']('OK'), expect(_0x1993bd['body'])['to']['eq']('log\x20in'), expect(_0x1993bd['headers'])['to']['deep']['eq']({ 'content-type': 'text/html' }), expect(_0x1993bd['isOkStatusCode'])['to']['be']['true'], expect(_0x1993bd['requestBody'])['to']['be']['undefined'], expect(_0x1993bd['redirects'])['to']['deep']['eq']([
                    '301:\x20http://www.github.com/auth',
                    '302:\x20http://www.github.com/login'
                ]), expect(_0x1993bd['requestHeaders'])['to']['deep']['eq']({
                    'accept': '*/*',
                    'accept-encoding': 'gzip,\x20deflate',
                    'connection': 'keep-alive',
                    'referer': 'http://www.github.com/auth',
                    'host': 'www.github.com'
                }), expect(_0x1993bd['allRequestResponses'])['to']['deep']['eq']([
                    {
                        'Request\x20Body': null,
                        'Request\x20Headers': {
                            'accept': '*/*',
                            'accept-encoding': 'gzip,\x20deflate',
                            'connection': 'keep-alive',
                            'host': 'www.github.com'
                        },
                        'Request\x20URL': 'http://www.github.com/dashboard',
                        'Response\x20Body': null,
                        'Response\x20Headers': {
                            'content-type': 'application/json',
                            'location': '/auth'
                        },
                        'Response\x20Status': 0x12d
                    },
                    {
                        'Request\x20Body': null,
                        'Request\x20Headers': {
                            'accept': '*/*',
                            'accept-encoding': 'gzip,\x20deflate',
                            'connection': 'keep-alive',
                            'host': 'www.github.com',
                            'referer': 'http://www.github.com/dashboard'
                        },
                        'Request\x20URL': 'http://www.github.com/auth',
                        'Response\x20Body': null,
                        'Response\x20Headers': {
                            'content-type': 'application/json',
                            'location': '/login'
                        },
                        'Response\x20Status': 0x12e
                    },
                    {
                        'Request\x20Body': null,
                        'Request\x20Headers': {
                            'accept': '*/*',
                            'accept-encoding': 'gzip,\x20deflate',
                            'connection': 'keep-alive',
                            'host': 'www.github.com',
                            'referer': 'http://www.github.com/auth'
                        },
                        'Request\x20URL': 'http://www.github.com/login',
                        'Response\x20Body': 'log\x20in',
                        'Response\x20Headers': { 'content-type': 'text/html' },
                        'Response\x20Status': 0xc8
                    }
                ]);
            });
        }), it('catches\x20errors', function () {
            nock['enableNetConnect']();
            const _0x2b060c = Request({ 'timeout': 0x7d0 });
            return _0x2b060c['sendPromise']({}, this['fn'], {
                'url': 'http://localhost:1111/foo',
                'cookies': ![]
            })['then'](() => {
                throw new Error('should\x20have\x20failed\x20but\x20didnt');
            })['catch'](_0xc8358f => {
                expect(_0xc8358f['message'])['to']['eq']('Error:\x20connect\x20ECONNREFUSED\x20127.0.0.1:1111');
            });
        }), it('parses\x20response\x20body\x20as\x20json\x20if\x20content-type\x20application/json\x20response\x20headers', function () {
            return nock('http://localhost:8080')['get']('/status.json')['reply'](-0x160e + 0x1 * 0x1813 + -0x13d, JSON['stringify']({ 'status': 'ok' }), { 'Content-Type': 'application/json' }), request['sendPromise']({}, this['fn'], {
                'url': 'http://localhost:8080/status.json',
                'cookies': ![]
            })['then'](_0x594e0e => {
                expect(_0x594e0e['body'])['to']['deep']['eq']({ 'status': 'ok' });
            });
        }), it('parses\x20response\x20body\x20as\x20json\x20if\x20content-type\x20application/vnd.api+json\x20response\x20headers', function () {
            return nock('http://localhost:8080')['get']('/status.json')['reply'](0xf + -0x1818 + -0x1 * -0x18d1, JSON['stringify']({ 'status': 'ok' }), { 'Content-Type': 'application/vnd.api+json' }), request['sendPromise']({}, this['fn'], {
                'url': 'http://localhost:8080/status.json',
                'cookies': ![]
            })['then'](_0x372a58 => {
                expect(_0x372a58['body'])['to']['deep']['eq']({ 'status': 'ok' });
            });
        }), it('revives\x20from\x20parsing\x20bad\x20json', function () {
            return nock('http://localhost:8080')['get']('/status.json')['reply'](0x13 * 0x1a2 + 0x12df + -0x311d, '{bad:\x20\x27json\x27}', { 'Content-Type': 'application/json' }), request['sendPromise']({}, this['fn'], {
                'url': 'http://localhost:8080/status.json',
                'cookies': ![]
            })['then'](_0x595731 => {
                expect(_0x595731['body'])['to']['eq']('{bad:\x20\x27json\x27}');
            });
        }), it('sets\x20duration\x20on\x20response', function () {
            return nock('http://localhost:8080')['get']('/foo')['delay'](-0x1 * -0x26a7 + 0x1d3d + -0x169e * 0x3)['reply'](0x657 + 0x164 * 0x18 + -0x1 * 0x26ef, '123', { 'Content-Type': 'text/plain' }), request['sendPromise']({}, this['fn'], {
                'url': 'http://localhost:8080/foo',
                'cookies': ![]
            })['then'](_0x165ae9 => {
                expect(_0x165ae9['duration'])['to']['be']['a']('Number'), expect(_0x165ae9['duration'])['to']['be']['gt'](-0x262a + -0x2259 + -0x4883 * -0x1);
            });
        }), it('sends\x20up\x20user-agent\x20headers', function () {
            nock('http://localhost:8080')['matchHeader']('user-agent', 'foobarbaz')['get']('/foo')['reply'](0x13b9 + -0x1c3 + -0x112e, 'derp');
            const _0x25bde5 = {};
            return _0x25bde5['user-agent'] = 'foobarbaz', request['sendPromise'](_0x25bde5, this['fn'], {
                'url': 'http://localhost:8080/foo',
                'cookies': ![]
            })['then'](_0x5dc8a8 => {
                expect(_0x5dc8a8['body'])['to']['eq']('derp');
            });
        }), it('sends\x20connection:\x20keep-alive\x20by\x20default', function () {
            return nock('http://localhost:8080')['matchHeader']('connection', 'keep-alive')['get']('/foo')['reply'](-0x99c + -0x3 * 0x71 + 0xbb7 * 0x1, 'it\x20worked'), request['sendPromise']({}, this['fn'], {
                'url': 'http://localhost:8080/foo',
                'cookies': ![]
            })['then'](_0x4ebd4e => {
                expect(_0x4ebd4e['body'])['to']['eq']('it\x20worked');
            });
        }), it('lower\x20cases\x20headers', function () {
            nock('http://localhost:8080')['matchHeader']('test', 'true')['get']('/foo')['reply'](0x6b * 0x25 + 0x113 * 0x11 + -0x20f2 * 0x1, 'derp');
            const _0xc3d77f = {};
            return _0xc3d77f['user-agent'] = 'foobarbaz', request['sendPromise'](_0xc3d77f, this['fn'], {
                'url': 'http://localhost:8080/foo',
                'cookies': ![],
                'headers': { 'TEST': !![] }
            })['then'](_0x39b756 => {
                expect(_0x39b756['body'])['to']['eq']('derp');
            });
        }), it('allows\x20overriding\x20user-agent\x20in\x20headers', function () {
            nock('http://localhost:8080')['matchHeader']('user-agent', 'custom-agent')['get']('/foo')['reply'](0x176 * -0x7 + -0x9 * 0x2f1 + -0x65 * -0x5f, 'derp');
            const _0x231636 = { 'user-agent': 'test' };
            return request['sendPromise'](_0x231636, this['fn'], {
                'url': 'http://localhost:8080/foo',
                'cookies': ![],
                'headers': { 'User-Agent': 'custom-agent' }
            })['then'](_0x50f92d => {
                expect(_0x50f92d['body'])['to']['eq']('derp');
            });
        }), context('accept\x20header', () => {
            it('sets\x20to\x20*/*\x20by\x20default', function () {
                return nock('http://localhost:8080')['matchHeader']('accept', '*/*')['get']('/headers')['reply'](-0x24e2 + 0xc9 * -0x10 + -0x85f * -0x6), request['sendPromise']({}, this['fn'], {
                    'url': 'http://localhost:8080/headers',
                    'cookies': ![]
                })['then'](_0x2bfad6 => {
                    expect(_0x2bfad6['status'])['to']['eq'](0xf2 * -0x3 + 0x13a2 + -0x401 * 0x4);
                });
            }), it('can\x20override\x20accept\x20header', function () {
                return nock('http://localhost:8080')['matchHeader']('accept', 'text/html')['get']('/headers')['reply'](-0x157d * 0x1 + -0x165c + 0x2ca1), request['sendPromise']({}, this['fn'], {
                    'url': 'http://localhost:8080/headers',
                    'cookies': ![],
                    'headers': { 'accept': 'text/html' }
                })['then'](_0x2cefea => {
                    expect(_0x2cefea['status'])['to']['eq'](-0xb5b + 0x11f1 + -0x5ce);
                });
            }), it('can\x20override\x20Accept\x20header', function () {
                return nock('http://localhost:8080')['matchHeader']('accept', 'text/plain')['get']('/headers')['reply'](0x201 * -0x11 + 0x56c + 0x1b * 0x117), request['sendPromise']({}, this['fn'], {
                    'url': 'http://localhost:8080/headers',
                    'cookies': ![],
                    'headers': { 'Accept': 'text/plain' }
                })['then'](_0x5a2651 => {
                    expect(_0x5a2651['status'])['to']['eq'](-0x10ab + -0xe33 * 0x1 + 0x1fa6);
                });
            });
        }), context('qs', () => {
            it('can\x20accept\x20qs', function () {
                return nock('http://localhost:8080')['get']('/foo?bar=baz&q=1')['reply'](-0x116a + 0x164d + -0x41b), request['sendPromise']({}, this['fn'], {
                    'url': 'http://localhost:8080/foo',
                    'cookies': ![],
                    'qs': {
                        'bar': 'baz',
                        'q': 0x1
                    }
                })['then'](_0x49995e => {
                    expect(_0x49995e['status'])['to']['eq'](0x222a + -0x64 + -0x20fe);
                });
            });
        }), context('followRedirect', () => {
            beforeEach(function () {
                this['fn']['resolves']();
            }), it('by\x20default\x20follow\x20redirects', function () {
                return nock('http://localhost:8080')['get']('/dashboard')['reply'](-0x23c9 + -0x270d + 0x4c04, '', { 'location': 'http://localhost:8080/login' })['get']('/login')['reply'](0x2468 + 0x77 * -0x24 + -0x12e4, 'login'), request['sendPromise']({}, this['fn'], {
                    'url': 'http://localhost:8080/dashboard',
                    'cookies': ![],
                    'followRedirect': !![]
                })['then'](_0x94e911 => {
                    expect(_0x94e911['status'])['to']['eq'](-0x18e6 * 0x1 + 0xefe + -0x390 * -0x3), expect(_0x94e911['body'])['to']['eq']('login'), expect(_0x94e911)['not']['to']['have']['property']('redirectedToUrl');
                });
            }), it('follows\x20non-GET\x20redirects\x20by\x20default', function () {
                return nock('http://localhost:8080')['post']('/login')['reply'](-0x11db * -0x2 + -0x58d * -0x1 + -0x2815, '', { 'location': 'http://localhost:8080/dashboard' })['get']('/dashboard')['reply'](-0x2 * -0xf4d + -0x57 * -0x17 + -0x25a3, 'dashboard'), request['sendPromise']({}, this['fn'], {
                    'method': 'POST',
                    'url': 'http://localhost:8080/login',
                    'cookies': ![]
                })['then'](_0x17108c => {
                    expect(_0x17108c['status'])['to']['eq'](-0x7c8 + -0xaa * 0x1b + 0x1a7e * 0x1), expect(_0x17108c['body'])['to']['eq']('dashboard'), expect(_0x17108c)['not']['to']['have']['property']('redirectedToUrl');
                });
            }), it('can\x20turn\x20off\x20following\x20redirects', function () {
                return nock('http://localhost:8080')['get']('/dashboard')['reply'](-0x2627 + -0xaf * 0x1d + -0xc * -0x4ee, '', { 'location': 'http://localhost:8080/login' })['get']('/login')['reply'](-0x1 * 0x125a + -0x225e + 0x4 * 0xd60, 'login'), request['sendPromise']({}, this['fn'], {
                    'url': 'http://localhost:8080/dashboard',
                    'cookies': ![],
                    'followRedirect': ![]
                })['then'](_0x5b4ac4 => {
                    expect(_0x5b4ac4['status'])['to']['eq'](-0x1a6 + 0x1b7a + 0xa * -0x277), expect(_0x5b4ac4['body'])['to']['eq'](''), expect(_0x5b4ac4['redirectedToUrl'])['to']['eq']('http://localhost:8080/login');
                });
            }), it('resolves\x20redirectedToUrl\x20on\x20relative\x20redirects', function () {
                return nock('http://localhost:8080')['get']('/dashboard')['reply'](-0x2b * 0x2 + 0xdfc + 0x1c8 * -0x7, '', { 'location': '/login' })['get']('/login')['reply'](-0x1cf4 + 0x15b4 + 0x808, 'login'), request['sendPromise']({}, this['fn'], {
                    'url': 'http://localhost:8080/dashboard',
                    'cookies': ![],
                    'followRedirect': ![]
                })['then'](_0x426895 => {
                    expect(_0x426895['status'])['to']['eq'](-0x295 + 0x1dc5 * 0x1 + 0x1a02 * -0x1), expect(_0x426895['redirectedToUrl'])['to']['eq']('http://localhost:8080/login');
                });
            }), it('resolves\x20redirectedToUrl\x20to\x20another\x20domain', function () {
                return nock('http://localhost:8080')['get']('/dashboard')['reply'](0x1798 + -0x1214 + -0x457, '', { 'location': 'https://www.google.com/login' })['get']('/login')['reply'](-0xd26 + -0x20c1 * -0x1 + -0x12d3, 'login'), request['sendPromise']({}, this['fn'], {
                    'url': 'http://localhost:8080/dashboard',
                    'cookies': ![],
                    'followRedirect': ![]
                })['then'](_0x92d31f => {
                    expect(_0x92d31f['status'])['to']['eq'](0xfa * -0x6 + -0x2d5 + 0x9de), expect(_0x92d31f['redirectedToUrl'])['to']['eq']('https://www.google.com/login');
                });
            }), it('does\x20not\x20included\x20redirectedToUrl\x20when\x20following\x20redirects', function () {
                return nock('http://localhost:8080')['get']('/dashboard')['reply'](-0xb8 * -0x1a + 0x481 * -0x7 + -0xe05 * -0x1, '', { 'location': 'http://localhost:8080/login' })['get']('/login')['reply'](0x67d + 0x1ea9 + 0x299 * -0xe, 'login'), request['sendPromise']({}, this['fn'], {
                    'url': 'http://localhost:8080/dashboard',
                    'cookies': ![]
                })['then'](_0x482e77 => {
                    expect(_0x482e77['status'])['to']['eq'](-0xfb * 0x1a + 0xe5 * 0xd + 0xea5), expect(_0x482e77)['not']['to']['have']['property']('redirectedToUrl');
                });
            }), it('gets\x20+\x20attaches\x20the\x20cookies\x20at\x20each\x20redirect', function () {
                return testAttachingCookiesWith(() => {
                    return request['sendPromise']({}, this['fn'], { 'url': 'http://localhost:1234/' });
                });
            });
        }), context('form=true', () => {
            beforeEach(() => {
                nock('http://localhost:8080')['matchHeader']('Content-Type', 'application/x-www-form-urlencoded')['post']('/login', 'foo=bar&baz=quux')['reply'](-0x3d7 * 0x1 + -0xd42 + 0x11e1, '<html></html>');
            }), it('takes\x20converts\x20body\x20to\x20x-www-form-urlencoded\x20and\x20sets\x20header', function () {
                return request['sendPromise']({}, this['fn'], {
                    'url': 'http://localhost:8080/login',
                    'method': 'POST',
                    'cookies': ![],
                    'form': !![],
                    'body': {
                        'foo': 'bar',
                        'baz': 'quux'
                    }
                })['then'](_0x43c339 => {
                    expect(_0x43c339['status'])['to']['eq'](-0x5 * 0x472 + -0x12 * -0x88 + 0xd72), expect(_0x43c339['body'])['to']['eq']('<html></html>');
                });
            }), it('does\x20not\x20send\x20body', function () {
                const _0x2a1648 = sinon['spy'](request['rp']['Request']['prototype'], 'init'), _0x3013f3 = {
                        'foo': 'bar',
                        'baz': 'quux'
                    };
                return request['sendPromise']({}, this['fn'], {
                    'url': 'http://localhost:8080/login',
                    'method': 'POST',
                    'cookies': ![],
                    'form': !![],
                    'json': !![],
                    'body': _0x3013f3
                })['then'](_0x39d446 => {
                    expect(_0x39d446['status'])['to']['eq'](0x234e + -0x655 + -0x1c31), expect(_0x39d446['body'])['to']['eq']('<html></html>'), expect(_0x2a1648)['not']['to']['be']['calledWithMatch']({ 'body': _0x3013f3 });
                });
            }), it('does\x20not\x20set\x20json=true', function () {
                const _0x284434 = sinon['spy'](request['rp']['Request']['prototype'], 'init');
                return request['sendPromise']({}, this['fn'], {
                    'url': 'http://localhost:8080/login',
                    'method': 'POST',
                    'cookies': ![],
                    'form': !![],
                    'json': !![],
                    'body': {
                        'foo': 'bar',
                        'baz': 'quux'
                    }
                })['then'](_0x507ffa => {
                    expect(_0x507ffa['status'])['to']['eq'](-0xdd0 + 0x2537 * -0x1 + 0x1145 * 0x3), expect(_0x507ffa['body'])['to']['eq']('<html></html>'), expect(_0x284434)['not']['to']['be']['calledWithMatch']({ 'json': !![] });
                });
            });
        }), context('bad\x20headers', () => {
            beforeEach(function (_0x5aba79) {
                this['srv'] = http['createServer']((_0x522b17, _0x1eb75c) => {
                    _0x1eb75c['writeHead'](-0x4 * -0x53d + -0x13 * 0xf7 + -0x3 * 0x9d), _0x1eb75c['end']();
                }), this['srv']['listen'](0x3a02 + -0x1ecd + 0xbcf * 0x1, _0x5aba79);
            }), afterEach(function () {
                return this['srv']['close']();
            }), it('recovers\x20from\x20bad\x20headers', function () {
                return request['sendPromise']({}, this['fn'], {
                    'url': 'http://localhost:9988/foo',
                    'cookies': ![],
                    'headers': { 'x-text': 'אבגד' }
                })['then'](() => {
                    throw new Error('should\x20have\x20failed');
                })['catch'](_0x45c743 => {
                    expect(_0x45c743['message'])['to']['eq']('TypeError\x20[ERR_INVALID_CHAR]:\x20Invalid\x20character\x20in\x20header\x20content\x20[\x22x-text\x22]');
                });
            }), it('handles\x20weird\x20content\x20in\x20the\x20body\x20just\x20fine', function () {
                return request['sendPromise']({}, this['fn'], {
                    'url': 'http://localhost:9988/foo',
                    'cookies': ![],
                    'json': !![],
                    'body': { 'x-text': 'אבגד' }
                });
            });
        });
    }), context('#sendStream', () => {
        it('allows\x20overriding\x20user-agent\x20in\x20headers', function () {
            nock('http://localhost:8080')['matchHeader']('user-agent', 'custom-agent')['get']('/foo')['reply'](-0x16f + 0x20c3 * -0x1 + -0xf2 * -0x25, 'derp'), sinon['spy'](request, 'create'), this['fn']['resolves']({});
            const _0x5a3251 = { 'user-agent': 'test' }, _0x5a1b21 = {
                    'url': 'http://localhost:8080/foo',
                    'cookies': ![],
                    'headers': { 'user-agent': 'custom-agent' }
                };
            return request['sendStream'](_0x5a3251, this['fn'], _0x5a1b21)['then'](_0x193228 => {
                _0x193228(), expect(request['create'])['to']['be']['calledOnce'], expect(request['create'])['to']['be']['calledWith'](_0x5a1b21);
            });
        }), it('gets\x20+\x20attaches\x20the\x20cookies\x20at\x20each\x20redirect', function () {
            return testAttachingCookiesWith(() => {
                return request['sendStream']({}, this['fn'], {
                    'url': 'http://localhost:1234/',
                    'followRedirect': _['stubTrue']
                })['then'](_0x59148a => {
                    const _0x19fd92 = _0x59148a();
                    return new Promise((_0x30ee9a, _0xde54ef) => {
                        _0x19fd92['on']('response', _0x30ee9a), _0x19fd92['on']('error', _0xde54ef);
                    });
                });
            });
        });
    });
});
