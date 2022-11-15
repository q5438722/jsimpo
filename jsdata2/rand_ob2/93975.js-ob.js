const _0x43b2 = [
    'message',
    '181XFOiVR',
    '467tYQDPj',
    '950570YHSVUf',
    '3WobKwM',
    '3518pExlnk',
    '1sugSzL',
    '1076898ZYQEOo',
    '811264dhgHpS',
    '1jwgiRT',
    '747421dvBzxA',
    '621727MLclQC',
    '../spec_helper',
    'path',
    'promisifyAll',
    'lockfile',
    'lib/util/fs',
    'lib/util/env',
    'lib/util/exit',
    'lib/util/file',
    'dir',
    'tmpdir',
    'file_spec',
    'join',
    'removeAsync',
    'catch',
    'throws\x20if\x20path\x20is\x20not\x20specified',
    'throw',
    'unlocks\x20file\x20on\x20exit',
    'spy',
    'unlockSync',
    'stub',
    'ensure',
    '#transaction',
    'fileUtil',
    'ensures\x20returned\x20promise\x20completely\x20resolves\x20before\x20moving\x20on\x20with\x20queue',
    'transaction',
    'items',
    'concat',
    'foo',
    'get',
    'then',
    'set',
    'baz',
    'bar',
    '#get',
    'resolves\x20entire\x20object\x20if\x20given\x20no\x20key',
    'equal',
    'resolves\x20value\x20for\x20path\x20when\x20one\x20is\x20set',
    'foo.baz',
    'default',
    'resolves\x20undefined\x20if\x20value\x20is\x20undefined',
    'undefined',
    'resolves\x20null\x20if\x20value\x20is\x20null',
    'null',
    'resolves\x20empty\x20object\x20when\x20contents\x20file\x20does\x20not\x20exist',
    'eql',
    'resolves\x20empty\x20object\x20when\x20contents\x20file\x20is\x20empty',
    'ensureDirAsync',
    'writeFileAsync',
    'file.json',
    'writeJsonAsync',
    'lockAsync',
    'EEXIST',
    'rejects',
    'resolves\x20empty\x20object\x20when\x20contents\x20file\x20has\x20invalid\x20json',
    'debounces\x20reading\x20from\x20disk',
    'readJsonAsync',
    'calledOnce',
    'locks\x20file\x20while\x20reading',
    'unlocks\x20file\x20when\x20finished\x20reading',
    'unlockAsync',
    'called',
    'unlocks\x20file\x20even\x20if\x20reading\x20fails',
    'times\x20out\x20and\x20carries\x20on\x20if\x20unlocking\x20times\x20out',
    'delay',
    'resolves',
    'withArgs',
    'FILE_UNLOCK_TIMEOUT',
    'returns',
    '#set',
    'throws\x20if\x201st\x20argument\x20is\x20not\x20a\x20string\x20or\x20plain\x20object',
    'Expected\x20`key`\x20to\x20be\x20of\x20type\x20`string`\x20or\x20`object`,\x20got\x20`number`',
    'Expected\x20`key`\x20to\x20be\x20of\x20type\x20`string`\x20or\x20`object`,\x20got\x20`array`',
    'sets\x20values\x20for\x20object',
    'lolz',
    'leaves\x20existing\x20values\x20alone',
    'qux',
    'readFileAsync',
    'parse',
    'unlocks\x20file\x20when\x20finished\x20writing',
    'outputJsonAsync',
    'fail!',
    '#remove',
    'removes\x20the\x20file',
    'remove',
    'statAsync',
    'locks\x20file\x20while\x20removing',
    'unlocks\x20file\x20when\x20finished\x20removing',
    'unlocks\x20file\x20even\x20if\x20removing\x20fails'
];
const _0x1db0cb = _0x355f;
(function (_0xbce951, _0x18cde8) {
    const _0x55e9e3 = _0x355f;
    while (!![]) {
        try {
            const _0x1c5ea4 = -parseInt(_0x55e9e3(0xd4)) * -parseInt(_0x55e9e3(0xd5)) + parseInt(_0x55e9e3(0xd6)) + parseInt(_0x55e9e3(0xd7)) * -parseInt(_0x55e9e3(0xd8)) + -parseInt(_0x55e9e3(0xd9)) * parseInt(_0x55e9e3(0xda)) + parseInt(_0x55e9e3(0xdb)) + parseInt(_0x55e9e3(0xdc)) * -parseInt(_0x55e9e3(0xdd)) + parseInt(_0x55e9e3(0xde));
            if (_0x1c5ea4 === _0x18cde8)
                break;
            else
                _0xbce951['push'](_0xbce951['shift']());
        } catch (_0x23bee1) {
            _0xbce951['push'](_0xbce951['shift']());
        }
    }
}(_0x43b2, 0x9a97f), require(_0x1db0cb(0xdf)));
const os = require('os'), path = require(_0x1db0cb(0xe0)), Promise = require('bluebird'), lockFile = Promise[_0x1db0cb(0xe1)](require(_0x1db0cb(0xe2))), {fs} = require(root + _0x1db0cb(0xe3)), env = require(root + _0x1db0cb(0xe4)), exit = require(root + _0x1db0cb(0xe5)), FileUtil = require(root + _0x1db0cb(0xe6));
function _0x355f(_0x1ede09, _0x32ce83) {
    return _0x355f = function (_0x43b241, _0x355f22) {
        _0x43b241 = _0x43b241 - 0xd4;
        let _0x430027 = _0x43b2[_0x43b241];
        return _0x430027;
    }, _0x355f(_0x1ede09, _0x32ce83);
}
describe(_0x1db0cb(0xe6), () => {
    const _0x377245 = _0x1db0cb;
    beforeEach(function () {
        const _0x26e09c = _0x355f;
        return this[_0x26e09c(0xe7)] = path['join'](os[_0x26e09c(0xe8)](), 'cypress', _0x26e09c(0xe9)), this['path'] = path[_0x26e09c(0xea)](this[_0x26e09c(0xe7)], 'file.json'), fs[_0x26e09c(0xeb)](this[_0x26e09c(0xe7)])[_0x26e09c(0xec)](() => {
        });
    }), it(_0x377245(0xed), () => {
        const _0x2e6ca2 = _0x377245;
        expect(() => {
            return new FileUtil();
        })['to'][_0x2e6ca2(0xee)]('Must\x20specify\x20path\x20to\x20file\x20when\x20creating\x20new\x20FileUtil()');
    }), it(_0x377245(0xef), function () {
        const _0x4a1a58 = _0x377245;
        sinon[_0x4a1a58(0xf0)](lockFile, _0x4a1a58(0xf1)), sinon[_0x4a1a58(0xf2)](exit, _0x4a1a58(0xf3)), new FileUtil({ 'path': this[_0x4a1a58(0xe0)] }), exit[_0x4a1a58(0xf3)]['yield'](), expect(lockFile[_0x4a1a58(0xf1)])['to']['be']['called'];
    }), context(_0x377245(0xf4), () => {
        const _0x5f5365 = _0x377245;
        beforeEach(function () {
            const _0x49274e = _0x355f;
            this[_0x49274e(0xf5)] = new FileUtil({ 'path': this[_0x49274e(0xe0)] });
        }), it(_0x5f5365(0xf6), function () {
            const _0x1e6fdc = _0x5f5365;
            return Promise['all']([
                this['fileUtil'][_0x1e6fdc(0xf7)](_0xad6ec6 => {
                    const _0x116914 = _0x1e6fdc;
                    return _0xad6ec6['get'](_0x116914(0xf8), [])['then'](_0x2968dd => {
                        const _0x4d7557 = _0x116914;
                        return _0xad6ec6['set'](_0x4d7557(0xf8), _0x2968dd[_0x4d7557(0xf9)](_0x4d7557(0xfa)));
                    });
                }),
                this['fileUtil'][_0x1e6fdc(0xf7)](_0x5d724c => {
                    const _0x8ae4e5 = _0x1e6fdc;
                    return _0x5d724c[_0x8ae4e5(0xfb)](_0x8ae4e5(0xf8), [])[_0x8ae4e5(0xfc)](_0x732398 => {
                        const _0x2dcf20 = _0x8ae4e5;
                        return _0x5d724c[_0x2dcf20(0xfd)](_0x2dcf20(0xf8), _0x732398[_0x2dcf20(0xf9)]('bar'));
                    });
                }),
                this[_0x1e6fdc(0xf5)][_0x1e6fdc(0xf7)](_0x437834 => {
                    const _0x3c34c4 = _0x1e6fdc;
                    return _0x437834[_0x3c34c4(0xfb)](_0x3c34c4(0xf8), [])[_0x3c34c4(0xfc)](_0x56bbdd => {
                        const _0x442c3f = _0x3c34c4;
                        return _0x437834['set'](_0x442c3f(0xf8), _0x56bbdd[_0x442c3f(0xf9)](_0x442c3f(0xfe)));
                    });
                })
            ])[_0x1e6fdc(0xfc)](() => {
                const _0x485cff = _0x1e6fdc;
                return this[_0x485cff(0xf5)][_0x485cff(0xf7)](_0xb9ffba => {
                    const _0xe4fd17 = _0x485cff;
                    return _0xb9ffba[_0xe4fd17(0xfb)]('items')[_0xe4fd17(0xfc)](_0x21644e => {
                        const _0x13e885 = _0xe4fd17;
                        expect(_0x21644e)['to']['eql']([
                            _0x13e885(0xfa),
                            _0x13e885(0xff),
                            _0x13e885(0xfe)
                        ]);
                    });
                });
            });
        });
    }), context(_0x377245(0x100), () => {
        const _0x563fab = _0x377245;
        beforeEach(function () {
            const _0x16efa9 = _0x355f;
            this[_0x16efa9(0xf5)] = new FileUtil({ 'path': this[_0x16efa9(0xe0)] });
        }), it(_0x563fab(0x101), function () {
            const _0x42ee98 = _0x563fab;
            return this[_0x42ee98(0xf5)][_0x42ee98(0xfb)]()[_0x42ee98(0xfc)](_0x5bfc02 => {
                expect(_0x5bfc02)['to']['eql']({});
            });
        }), it('resolves\x20value\x20for\x20key\x20when\x20one\x20is\x20set', function () {
            const _0x2544e4 = _0x563fab;
            return this[_0x2544e4(0xf5)]['set']('foo', 'bar')[_0x2544e4(0xfc)](() => {
                const _0x5bcae5 = _0x2544e4;
                return this[_0x5bcae5(0xf5)][_0x5bcae5(0xfb)]('foo');
            })[_0x2544e4(0xfc)](_0x57c8a3 => {
                const _0x3f3171 = _0x2544e4;
                expect(_0x57c8a3)['to'][_0x3f3171(0x102)](_0x3f3171(0xff));
            });
        }), it(_0x563fab(0x103), function () {
            const _0x14d5b0 = _0x563fab;
            return this['fileUtil'][_0x14d5b0(0xfd)]('foo.baz', _0x14d5b0(0xff))[_0x14d5b0(0xfc)](() => {
                const _0x4f4888 = _0x14d5b0;
                return this['fileUtil'][_0x4f4888(0xfb)](_0x4f4888(0x104));
            })['then'](_0x57b479 => {
                const _0xe21468 = _0x14d5b0;
                expect(_0x57b479)['to'][_0xe21468(0x102)](_0xe21468(0xff));
            });
        }), it('resolves\x20default\x20value\x20if\x20given\x20key\x20is\x20undefined', function () {
            const _0x52fcba = _0x563fab;
            return this[_0x52fcba(0xf5)]['get'](_0x52fcba(0xfa), _0x52fcba(0x105))['then'](_0x2583cc => {
                const _0x33167f = _0x52fcba;
                expect(_0x2583cc)['to'][_0x33167f(0x102)](_0x33167f(0x105));
            });
        }), it(_0x563fab(0x106), function () {
            const _0x45727c = _0x563fab;
            return this[_0x45727c(0xf5)][_0x45727c(0xfb)](_0x45727c(0xfa))[_0x45727c(0xfc)](_0x2c5c77 => {
                const _0x87f79 = _0x45727c;
                expect(_0x2c5c77)['to']['be'][_0x87f79(0x107)];
            });
        }), it(_0x563fab(0x108), function () {
            const _0x267017 = _0x563fab;
            return this[_0x267017(0xf5)][_0x267017(0xfd)]('foo', null)[_0x267017(0xfc)](() => {
                const _0x30594e = _0x267017;
                return this[_0x30594e(0xf5)][_0x30594e(0xfb)](_0x30594e(0xfa));
            })['then'](_0x5d176d => {
                const _0xb068dc = _0x267017;
                expect(_0x5d176d)['to']['be'][_0xb068dc(0x109)];
            });
        }), it(_0x563fab(0x10a), function () {
            const _0xbc9fdc = _0x563fab;
            return fs[_0xbc9fdc(0xeb)](this['dir'])[_0xbc9fdc(0xfc)](() => {
                const _0x59c8a5 = _0xbc9fdc;
                return this[_0x59c8a5(0xf5)][_0x59c8a5(0xfb)]();
            })[_0xbc9fdc(0xfc)](_0x47a9a4 => {
                const _0x4688ed = _0xbc9fdc;
                expect(_0x47a9a4)['to'][_0x4688ed(0x10b)]({});
            });
        }), it(_0x563fab(0x10c), function () {
            const _0x25f55d = _0x563fab;
            return fs[_0x25f55d(0x10d)](this[_0x25f55d(0xe7)])['then'](() => {
                const _0x4fec1d = _0x25f55d;
                return fs[_0x4fec1d(0x10e)](path[_0x4fec1d(0xea)](this[_0x4fec1d(0xe7)], _0x4fec1d(0x10f)), '');
            })['then'](() => {
                const _0x5aed94 = _0x25f55d;
                return this[_0x5aed94(0xf5)][_0x5aed94(0xfb)]();
            })[_0x25f55d(0xfc)](_0x58f87c => {
                const _0x5f29a9 = _0x25f55d;
                expect(_0x58f87c)['to'][_0x5f29a9(0x10b)]({});
            });
        }), it('resolves\x20empty\x20object\x20when\x20it\x20can\x27t\x20get\x20lock\x20on\x20file\x20on\x20initial\x20read', function () {
            const _0x3b3c46 = _0x563fab;
            return fs[_0x3b3c46(0x10d)](this['dir'])[_0x3b3c46(0xfc)](() => {
                const _0x158ff5 = _0x3b3c46;
                return fs[_0x158ff5(0x110)](this[_0x158ff5(0xe0)], { 'foo': _0x158ff5(0xff) });
            })[_0x3b3c46(0xfc)](() => {
                const _0x31eff9 = _0x3b3c46;
                return sinon[_0x31eff9(0xf2)](lockFile, _0x31eff9(0x111))['rejects']({
                    'name': '',
                    'message': '',
                    'code': _0x31eff9(0x112)
                }), this['fileUtil'][_0x31eff9(0xfb)]();
            })[_0x3b3c46(0xfc)](_0x37c1ae => {
                const _0x27fdd7 = _0x3b3c46;
                expect(_0x37c1ae)['to'][_0x27fdd7(0x10b)]({});
            });
        }), it('resolves\x20cached\x20contents\x20when\x20it\x20can\x27t\x20get\x20lock\x20on\x20file\x20after\x20an\x20initial\x20read', function () {
            const _0x3f8adb = _0x563fab;
            return this[_0x3f8adb(0xf5)][_0x3f8adb(0xfd)]('foo', _0x3f8adb(0xff))['then'](() => {
                const _0x58d129 = _0x3f8adb;
                return sinon[_0x58d129(0xf2)](lockFile, 'lockAsync')[_0x58d129(0x113)]({
                    'name': '',
                    'message': '',
                    'code': 'EEXIST'
                }), this[_0x58d129(0xf5)][_0x58d129(0xfb)]();
            })[_0x3f8adb(0xfc)](_0x5c84f3 => {
                const _0xd15477 = _0x3f8adb;
                expect(_0x5c84f3)['to'][_0xd15477(0x10b)]({ 'foo': _0xd15477(0xff) });
            });
        }), it(_0x563fab(0x114), function () {
            const _0x2433d6 = _0x563fab;
            return fs[_0x2433d6(0x10d)](this[_0x2433d6(0xe7)])[_0x2433d6(0xfc)](() => {
                const _0x4e5fc0 = _0x2433d6;
                return fs[_0x4e5fc0(0x10e)](path[_0x4e5fc0(0xea)](this[_0x4e5fc0(0xe7)], _0x4e5fc0(0x10f)), '{');
            })[_0x2433d6(0xfc)](() => {
                const _0x5ca2a6 = _0x2433d6;
                return this['fileUtil'][_0x5ca2a6(0xfb)]();
            })[_0x2433d6(0xfc)](_0x2cbfb0 => {
                const _0x211f08 = _0x2433d6;
                expect(_0x2cbfb0)['to'][_0x211f08(0x10b)]({});
            });
        }), it(_0x563fab(0x115), function () {
            const _0x84c9f = _0x563fab;
            return sinon[_0x84c9f(0xf2)](fs, _0x84c9f(0x116))['resolves']({}), Promise['all']([
                this[_0x84c9f(0xf5)]['get'](),
                this['fileUtil'][_0x84c9f(0xfb)](),
                this['fileUtil'][_0x84c9f(0xfb)]()
            ])[_0x84c9f(0xfc)](() => {
                const _0x5de4d9 = _0x84c9f;
                expect(fs[_0x5de4d9(0x116)])['to']['be'][_0x5de4d9(0x117)];
            });
        }), it(_0x563fab(0x118), function () {
            const _0x5a829e = _0x563fab;
            return sinon[_0x5a829e(0xf0)](lockFile, _0x5a829e(0x111)), this[_0x5a829e(0xf5)][_0x5a829e(0xfb)]()['then'](() => {
                expect(lockFile['lockAsync'])['to']['be']['called'];
            });
        }), it(_0x563fab(0x119), function () {
            const _0x4f2e38 = _0x563fab;
            return sinon[_0x4f2e38(0xf0)](lockFile, _0x4f2e38(0x11a)), this[_0x4f2e38(0xf5)][_0x4f2e38(0xfb)]()[_0x4f2e38(0xfc)](() => {
                const _0x1feda6 = _0x4f2e38;
                expect(lockFile[_0x1feda6(0x11a)])['to']['be'][_0x1feda6(0x11b)];
            });
        }), it(_0x563fab(0x11c), function () {
            const _0x73ad5f = _0x563fab;
            return sinon[_0x73ad5f(0xf0)](lockFile, _0x73ad5f(0x11a)), sinon[_0x73ad5f(0xf2)](fs, _0x73ad5f(0x116))[_0x73ad5f(0x113)](new Error('fail!')), this[_0x73ad5f(0xf5)][_0x73ad5f(0xfb)]()[_0x73ad5f(0xec)](() => {
                const _0x5b99b9 = _0x73ad5f;
                expect(lockFile['unlockAsync'])['to']['be'][_0x5b99b9(0x11b)];
            });
        }), it(_0x563fab(0x11d), function () {
            const _0x332311 = _0x563fab;
            return sinon[_0x332311(0xf2)](lockFile, _0x332311(0x111))['resolves'](), sinon[_0x332311(0xf2)](lockFile, _0x332311(0x11a))['callsFake'](() => {
                const _0x2eeb94 = _0x332311;
                return Promise[_0x2eeb94(0x11e)](0x3b9aca00);
            }), sinon[_0x332311(0xf2)](fs, _0x332311(0x116))[_0x332311(0x11f)]({}), sinon['stub'](env, _0x332311(0xfb))[_0x332311(0x120)](_0x332311(0x121))[_0x332311(0x122)](0x64), this[_0x332311(0xf5)][_0x332311(0xfb)]();
        });
    }), context(_0x377245(0x123), () => {
        const _0x7155d9 = _0x377245;
        beforeEach(function () {
            const _0xb67c73 = _0x355f;
            this[_0xb67c73(0xf5)] = new FileUtil({ 'path': this[_0xb67c73(0xe0)] });
        }), it(_0x7155d9(0x124), function () {
            const _0x375d4c = _0x7155d9;
            expect(() => {
                const _0x352f9e = _0x355f;
                return this[_0x352f9e(0xf5)]['set'](0x1);
            })['to'][_0x375d4c(0xee)](_0x375d4c(0x125)), expect(() => {
                const _0xb462ba = _0x375d4c;
                return this[_0xb462ba(0xf5)]['set']([]);
            })['to']['throw'](_0x375d4c(0x126));
        }), it('sets\x20value\x20for\x20given\x20key', function () {
            const _0x1f26b4 = _0x7155d9;
            return this[_0x1f26b4(0xf5)][_0x1f26b4(0xfd)](_0x1f26b4(0xfa), _0x1f26b4(0xff))['then'](() => {
                const _0x3b31d4 = _0x1f26b4;
                return this[_0x3b31d4(0xf5)][_0x3b31d4(0xfb)](_0x3b31d4(0xfa));
            })[_0x1f26b4(0xfc)](_0x21f9bc => {
                const _0x2560dc = _0x1f26b4;
                expect(_0x21f9bc)['to'][_0x2560dc(0x102)](_0x2560dc(0xff));
            });
        }), it('sets\x20value\x20for\x20given\x20path', function () {
            const _0x3dbf3d = _0x7155d9;
            return this['fileUtil']['set'](_0x3dbf3d(0x104), _0x3dbf3d(0xff))[_0x3dbf3d(0xfc)](() => {
                const _0x432ca6 = _0x3dbf3d;
                return this[_0x432ca6(0xf5)]['get']();
            })[_0x3dbf3d(0xfc)](_0x43155a => {
                const _0x181a14 = _0x3dbf3d;
                expect(_0x43155a)['to'][_0x181a14(0x10b)]({ 'foo': { 'baz': _0x181a14(0xff) } });
            });
        }), it(_0x7155d9(0x127), function () {
            const _0x32fcf7 = _0x7155d9;
            return this[_0x32fcf7(0xf5)]['set']({
                'foo': _0x32fcf7(0xff),
                'baz': { 'qux': _0x32fcf7(0x128) }
            })[_0x32fcf7(0xfc)](() => {
                const _0x383a18 = _0x32fcf7;
                return this[_0x383a18(0xf5)][_0x383a18(0xfb)]();
            })[_0x32fcf7(0xfc)](_0x5e7fb8 => {
                const _0x240a94 = _0x32fcf7;
                expect(_0x5e7fb8)['to'][_0x240a94(0x10b)]({
                    'foo': 'bar',
                    'baz': { 'qux': _0x240a94(0x128) }
                });
            });
        }), it(_0x7155d9(0x129), function () {
            const _0x71f061 = _0x7155d9;
            return this[_0x71f061(0xf5)][_0x71f061(0xfd)](_0x71f061(0xfa), 'bar')['then'](() => {
                const _0x54ec91 = _0x71f061;
                return this[_0x54ec91(0xf5)][_0x54ec91(0xfd)](_0x54ec91(0xfe), 'qux');
            })[_0x71f061(0xfc)](() => {
                const _0x405cb5 = _0x71f061;
                return this[_0x405cb5(0xf5)][_0x405cb5(0xfb)]();
            })[_0x71f061(0xfc)](_0x1f83c5 => {
                const _0xd40b3e = _0x71f061;
                expect(_0x1f83c5)['to'][_0xd40b3e(0x10b)]({
                    'foo': 'bar',
                    'baz': _0xd40b3e(0x12a)
                });
            });
        }), it('updates\x20file\x20on\x20disk', function () {
            const _0x3052f9 = _0x7155d9;
            return this[_0x3052f9(0xf5)]['set'](_0x3052f9(0xfa), _0x3052f9(0xff))['then'](() => {
                const _0x205be1 = _0x3052f9;
                return fs[_0x205be1(0x12b)](path[_0x205be1(0xea)](this[_0x205be1(0xe7)], _0x205be1(0x10f)), 'utf8');
            })[_0x3052f9(0xfc)](_0x42617a => {
                const _0xcf3a9a = _0x3052f9;
                expect(JSON[_0xcf3a9a(0x12c)](_0x42617a))['to'][_0xcf3a9a(0x10b)]({ 'foo': 'bar' });
            });
        }), it('locks\x20file\x20while\x20writing', function () {
            const _0x2da074 = _0x7155d9;
            return sinon[_0x2da074(0xf0)](lockFile, _0x2da074(0x111)), this[_0x2da074(0xf5)]['set'](_0x2da074(0xfa), _0x2da074(0xff))['then'](() => {
                const _0x36786d = _0x2da074;
                expect(lockFile[_0x36786d(0x111)])['to']['be']['called'];
            });
        }), it(_0x7155d9(0x12d), function () {
            const _0x5c9019 = _0x7155d9;
            return sinon[_0x5c9019(0xf0)](lockFile, _0x5c9019(0x11a)), this[_0x5c9019(0xf5)]['set'](_0x5c9019(0xfa), _0x5c9019(0xff))[_0x5c9019(0xfc)](() => {
                const _0x7620f1 = _0x5c9019;
                expect(lockFile[_0x7620f1(0x11a)])['to']['be']['called'];
            });
        }), it('unlocks\x20file\x20even\x20if\x20writing\x20fails', function () {
            const _0xbcaaa5 = _0x7155d9;
            return sinon[_0xbcaaa5(0xf0)](lockFile, _0xbcaaa5(0x11a)), sinon['stub'](fs, _0xbcaaa5(0x12e))[_0xbcaaa5(0x113)](new Error(_0xbcaaa5(0x12f))), this[_0xbcaaa5(0xf5)][_0xbcaaa5(0xfd)](_0xbcaaa5(0xfa), _0xbcaaa5(0xff))['catch'](() => {
                const _0x4c2bba = _0xbcaaa5;
                expect(lockFile[_0x4c2bba(0x11a)])['to']['be'][_0x4c2bba(0x11b)];
            });
        });
    }), context(_0x377245(0x130), () => {
        const _0x2c0c75 = _0x377245;
        beforeEach(function () {
            const _0x45229a = _0x355f;
            this[_0x45229a(0xf5)] = new FileUtil({ 'path': this[_0x45229a(0xe0)] });
        }), it(_0x2c0c75(0x131), function () {
            const _0x641a9e = _0x2c0c75;
            return this[_0x641a9e(0xf5)][_0x641a9e(0x132)]()['then'](() => {
                const _0x40937b = _0x641a9e;
                return fs[_0x40937b(0x133)](this[_0x40937b(0xe0)]);
            })[_0x641a9e(0xec)](() => {
            });
        }), it(_0x2c0c75(0x134), function () {
            const _0x111113 = _0x2c0c75;
            return sinon[_0x111113(0xf0)](lockFile, _0x111113(0x111)), this[_0x111113(0xf5)][_0x111113(0x132)]()[_0x111113(0xfc)](() => {
                const _0x493a16 = _0x111113;
                expect(lockFile[_0x493a16(0x111)])['to']['be'][_0x493a16(0x11b)];
            });
        }), it(_0x2c0c75(0x135), function () {
            const _0x18796f = _0x2c0c75;
            return sinon[_0x18796f(0xf0)](lockFile, _0x18796f(0x11a)), this[_0x18796f(0xf5)][_0x18796f(0x132)]()[_0x18796f(0xfc)](() => {
                const _0x3cfa09 = _0x18796f;
                expect(lockFile[_0x3cfa09(0x11a)])['to']['be'][_0x3cfa09(0x11b)];
            });
        }), it(_0x2c0c75(0x136), function () {
            const _0x259f6b = _0x2c0c75;
            return sinon[_0x259f6b(0xf0)](lockFile, _0x259f6b(0x11a)), sinon[_0x259f6b(0xf2)](fs, _0x259f6b(0xeb))[_0x259f6b(0x113)](new Error('fail!')), this['fileUtil'][_0x259f6b(0x132)]()['then'](() => {
                throw new Error('should\x20have\x20caught!');
            })[_0x259f6b(0xec)](_0x33b52c => {
                const _0x408bda = _0x259f6b;
                expect(_0x33b52c[_0x408bda(0x137)])['to']['eq'](_0x408bda(0x12f)), expect(lockFile[_0x408bda(0x11a)])['to']['be'][_0x408bda(0x11b)];
            });
        });
    });
});
