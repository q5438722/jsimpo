require(_0x1db0cb(223));
const os = require('os'), path = require(_0x1db0cb(224)), Promise = require('bluebird'), lockFile = Promise[_0x1db0cb(225)](require(_0x1db0cb(226))), {fs} = require(root + _0x1db0cb(227)), env = require(root + _0x1db0cb(228)), exit = require(root + _0x1db0cb(229)), FileUtil = require(root + _0x1db0cb(230));
function _0x355f(_0x1ede09, _0x32ce83) {
    return _0x355f = function (_0x43b241, _0x355f22) {
        _0x43b241 = _0x43b241 - 212;
        let _0x430027 = _0x43b2[_0x43b241];
        return _0x430027;
    }, _0x355f(_0x1ede09, _0x32ce83);
}
describe(_0x1db0cb(230), () => {
    const _0x377245 = _0x1db0cb;
    beforeEach(function () {
        const _0x26e09c = _0x355f;
        return this[_0x26e09c(231)] = path['join'](os[_0x26e09c(232)](), 'cypress', _0x26e09c(233)), this['path'] = path[_0x26e09c(234)](this[_0x26e09c(231)], 'file.json'), fs[_0x26e09c(235)](this[_0x26e09c(231)])[_0x26e09c(236)](() => {
        });
    }), it(_0x377245(237), () => {
        const _0x2e6ca2 = _0x377245;
        expect(() => {
            return new FileUtil();
        })['to'][_0x2e6ca2(238)]('Must specify path to file when creating new FileUtil()');
    }), it(_0x377245(239), function () {
        const _0x4a1a58 = _0x377245;
        sinon[_0x4a1a58(240)](lockFile, _0x4a1a58(241)), sinon[_0x4a1a58(242)](exit, _0x4a1a58(243)), new FileUtil({ 'path': this[_0x4a1a58(224)] }), exit[_0x4a1a58(243)]['yield'](), expect(lockFile[_0x4a1a58(241)])['to']['be']['called'];
    }), context(_0x377245(244), () => {
        const _0x5f5365 = _0x377245;
        beforeEach(function () {
            const _0x49274e = _0x355f;
            this[_0x49274e(245)] = new FileUtil({ 'path': this[_0x49274e(224)] });
        }), it(_0x5f5365(246), function () {
            const _0x1e6fdc = _0x5f5365;
            return Promise['all']([
                this['fileUtil'][_0x1e6fdc(247)](_0xad6ec6 => {
                    const _0x116914 = _0x1e6fdc;
                    return _0xad6ec6['get'](_0x116914(248), [])['then'](_0x2968dd => {
                        const _0x4d7557 = _0x116914;
                        return _0xad6ec6['set'](_0x4d7557(248), _0x2968dd[_0x4d7557(249)](_0x4d7557(250)));
                    });
                }),
                this['fileUtil'][_0x1e6fdc(247)](_0x5d724c => {
                    const _0x8ae4e5 = _0x1e6fdc;
                    return _0x5d724c[_0x8ae4e5(251)](_0x8ae4e5(248), [])[_0x8ae4e5(252)](_0x732398 => {
                        const _0x2dcf20 = _0x8ae4e5;
                        return _0x5d724c[_0x2dcf20(253)](_0x2dcf20(248), _0x732398[_0x2dcf20(249)]('bar'));
                    });
                }),
                this[_0x1e6fdc(245)][_0x1e6fdc(247)](_0x437834 => {
                    const _0x3c34c4 = _0x1e6fdc;
                    return _0x437834[_0x3c34c4(251)](_0x3c34c4(248), [])[_0x3c34c4(252)](_0x56bbdd => {
                        const _0x442c3f = _0x3c34c4;
                        return _0x437834['set'](_0x442c3f(248), _0x56bbdd[_0x442c3f(249)](_0x442c3f(254)));
                    });
                })
            ])[_0x1e6fdc(252)](() => {
                const _0x485cff = _0x1e6fdc;
                return this[_0x485cff(245)][_0x485cff(247)](_0xb9ffba => {
                    const _0xe4fd17 = _0x485cff;
                    return _0xb9ffba[_0xe4fd17(251)]('items')[_0xe4fd17(252)](_0x21644e => {
                        const _0x13e885 = _0xe4fd17;
                        expect(_0x21644e)['to']['eql']([
                            _0x13e885(250),
                            _0x13e885(255),
                            _0x13e885(254)
                        ]);
                    });
                });
            });
        });
    }), context(_0x377245(256), () => {
        const _0x563fab = _0x377245;
        beforeEach(function () {
            const _0x16efa9 = _0x355f;
            this[_0x16efa9(245)] = new FileUtil({ 'path': this[_0x16efa9(224)] });
        }), it(_0x563fab(257), function () {
            const _0x42ee98 = _0x563fab;
            return this[_0x42ee98(245)][_0x42ee98(251)]()[_0x42ee98(252)](_0x5bfc02 => {
                expect(_0x5bfc02)['to']['eql']({});
            });
        }), it('resolves value for key when one is set', function () {
            const _0x2544e4 = _0x563fab;
            return this[_0x2544e4(245)]['set']('foo', 'bar')[_0x2544e4(252)](() => {
                const _0x5bcae5 = _0x2544e4;
                return this[_0x5bcae5(245)][_0x5bcae5(251)]('foo');
            })[_0x2544e4(252)](_0x57c8a3 => {
                const _0x3f3171 = _0x2544e4;
                expect(_0x57c8a3)['to'][_0x3f3171(258)](_0x3f3171(255));
            });
        }), it(_0x563fab(259), function () {
            const _0x14d5b0 = _0x563fab;
            return this['fileUtil'][_0x14d5b0(253)]('foo.baz', _0x14d5b0(255))[_0x14d5b0(252)](() => {
                const _0x4f4888 = _0x14d5b0;
                return this['fileUtil'][_0x4f4888(251)](_0x4f4888(260));
            })['then'](_0x57b479 => {
                const _0xe21468 = _0x14d5b0;
                expect(_0x57b479)['to'][_0xe21468(258)](_0xe21468(255));
            });
        }), it('resolves default value if given key is undefined', function () {
            const _0x52fcba = _0x563fab;
            return this[_0x52fcba(245)]['get'](_0x52fcba(250), _0x52fcba(261))['then'](_0x2583cc => {
                const _0x33167f = _0x52fcba;
                expect(_0x2583cc)['to'][_0x33167f(258)](_0x33167f(261));
            });
        }), it(_0x563fab(262), function () {
            const _0x45727c = _0x563fab;
            return this[_0x45727c(245)][_0x45727c(251)](_0x45727c(250))[_0x45727c(252)](_0x2c5c77 => {
                const _0x87f79 = _0x45727c;
                expect(_0x2c5c77)['to']['be'][_0x87f79(263)];
            });
        }), it(_0x563fab(264), function () {
            const _0x267017 = _0x563fab;
            return this[_0x267017(245)][_0x267017(253)]('foo', null)[_0x267017(252)](() => {
                const _0x30594e = _0x267017;
                return this[_0x30594e(245)][_0x30594e(251)](_0x30594e(250));
            })['then'](_0x5d176d => {
                const _0xb068dc = _0x267017;
                expect(_0x5d176d)['to']['be'][_0xb068dc(265)];
            });
        }), it(_0x563fab(266), function () {
            const _0xbc9fdc = _0x563fab;
            return fs[_0xbc9fdc(235)](this['dir'])[_0xbc9fdc(252)](() => {
                const _0x59c8a5 = _0xbc9fdc;
                return this[_0x59c8a5(245)][_0x59c8a5(251)]();
            })[_0xbc9fdc(252)](_0x47a9a4 => {
                const _0x4688ed = _0xbc9fdc;
                expect(_0x47a9a4)['to'][_0x4688ed(267)]({});
            });
        }), it(_0x563fab(268), function () {
            const _0x25f55d = _0x563fab;
            return fs[_0x25f55d(269)](this[_0x25f55d(231)])['then'](() => {
                const _0x4fec1d = _0x25f55d;
                return fs[_0x4fec1d(270)](path[_0x4fec1d(234)](this[_0x4fec1d(231)], _0x4fec1d(271)), '');
            })['then'](() => {
                const _0x5aed94 = _0x25f55d;
                return this[_0x5aed94(245)][_0x5aed94(251)]();
            })[_0x25f55d(252)](_0x58f87c => {
                const _0x5f29a9 = _0x25f55d;
                expect(_0x58f87c)['to'][_0x5f29a9(267)]({});
            });
        }), it('resolves empty object when it can\'t get lock on file on initial read', function () {
            const _0x3b3c46 = _0x563fab;
            return fs[_0x3b3c46(269)](this['dir'])[_0x3b3c46(252)](() => {
                const _0x158ff5 = _0x3b3c46;
                return fs[_0x158ff5(272)](this[_0x158ff5(224)], { 'foo': _0x158ff5(255) });
            })[_0x3b3c46(252)](() => {
                const _0x31eff9 = _0x3b3c46;
                return sinon[_0x31eff9(242)](lockFile, _0x31eff9(273))['rejects']({
                    'name': '',
                    'message': '',
                    'code': _0x31eff9(274)
                }), this['fileUtil'][_0x31eff9(251)]();
            })[_0x3b3c46(252)](_0x37c1ae => {
                const _0x27fdd7 = _0x3b3c46;
                expect(_0x37c1ae)['to'][_0x27fdd7(267)]({});
            });
        }), it('resolves cached contents when it can\'t get lock on file after an initial read', function () {
            const _0x3f8adb = _0x563fab;
            return this[_0x3f8adb(245)][_0x3f8adb(253)]('foo', _0x3f8adb(255))['then'](() => {
                const _0x58d129 = _0x3f8adb;
                return sinon[_0x58d129(242)](lockFile, 'lockAsync')[_0x58d129(275)]({
                    'name': '',
                    'message': '',
                    'code': 'EEXIST'
                }), this[_0x58d129(245)][_0x58d129(251)]();
            })[_0x3f8adb(252)](_0x5c84f3 => {
                const _0xd15477 = _0x3f8adb;
                expect(_0x5c84f3)['to'][_0xd15477(267)]({ 'foo': _0xd15477(255) });
            });
        }), it(_0x563fab(276), function () {
            const _0x2433d6 = _0x563fab;
            return fs[_0x2433d6(269)](this[_0x2433d6(231)])[_0x2433d6(252)](() => {
                const _0x4e5fc0 = _0x2433d6;
                return fs[_0x4e5fc0(270)](path[_0x4e5fc0(234)](this[_0x4e5fc0(231)], _0x4e5fc0(271)), '{');
            })[_0x2433d6(252)](() => {
                const _0x5ca2a6 = _0x2433d6;
                return this['fileUtil'][_0x5ca2a6(251)]();
            })[_0x2433d6(252)](_0x2cbfb0 => {
                const _0x211f08 = _0x2433d6;
                expect(_0x2cbfb0)['to'][_0x211f08(267)]({});
            });
        }), it(_0x563fab(277), function () {
            const _0x84c9f = _0x563fab;
            return sinon[_0x84c9f(242)](fs, _0x84c9f(278))['resolves']({}), Promise['all']([
                this[_0x84c9f(245)]['get'](),
                this['fileUtil'][_0x84c9f(251)](),
                this['fileUtil'][_0x84c9f(251)]()
            ])[_0x84c9f(252)](() => {
                const _0x5de4d9 = _0x84c9f;
                expect(fs[_0x5de4d9(278)])['to']['be'][_0x5de4d9(279)];
            });
        }), it(_0x563fab(280), function () {
            const _0x5a829e = _0x563fab;
            return sinon[_0x5a829e(240)](lockFile, _0x5a829e(273)), this[_0x5a829e(245)][_0x5a829e(251)]()['then'](() => {
                expect(lockFile['lockAsync'])['to']['be']['called'];
            });
        }), it(_0x563fab(281), function () {
            const _0x4f2e38 = _0x563fab;
            return sinon[_0x4f2e38(240)](lockFile, _0x4f2e38(282)), this[_0x4f2e38(245)][_0x4f2e38(251)]()[_0x4f2e38(252)](() => {
                const _0x1feda6 = _0x4f2e38;
                expect(lockFile[_0x1feda6(282)])['to']['be'][_0x1feda6(283)];
            });
        }), it(_0x563fab(284), function () {
            const _0x73ad5f = _0x563fab;
            return sinon[_0x73ad5f(240)](lockFile, _0x73ad5f(282)), sinon[_0x73ad5f(242)](fs, _0x73ad5f(278))[_0x73ad5f(275)](new Error('fail!')), this[_0x73ad5f(245)][_0x73ad5f(251)]()[_0x73ad5f(236)](() => {
                const _0x5b99b9 = _0x73ad5f;
                expect(lockFile['unlockAsync'])['to']['be'][_0x5b99b9(283)];
            });
        }), it(_0x563fab(285), function () {
            const _0x332311 = _0x563fab;
            return sinon[_0x332311(242)](lockFile, _0x332311(273))['resolves'](), sinon[_0x332311(242)](lockFile, _0x332311(282))['callsFake'](() => {
                const _0x2eeb94 = _0x332311;
                return Promise[_0x2eeb94(286)](1000000000);
            }), sinon[_0x332311(242)](fs, _0x332311(278))[_0x332311(287)]({}), sinon['stub'](env, _0x332311(251))[_0x332311(288)](_0x332311(289))[_0x332311(290)](100), this[_0x332311(245)][_0x332311(251)]();
        });
    }), context(_0x377245(291), () => {
        const _0x7155d9 = _0x377245;
        beforeEach(function () {
            const _0xb67c73 = _0x355f;
            this[_0xb67c73(245)] = new FileUtil({ 'path': this[_0xb67c73(224)] });
        }), it(_0x7155d9(292), function () {
            const _0x375d4c = _0x7155d9;
            expect(() => {
                const _0x352f9e = _0x355f;
                return this[_0x352f9e(245)]['set'](1);
            })['to'][_0x375d4c(238)](_0x375d4c(293)), expect(() => {
                const _0xb462ba = _0x375d4c;
                return this[_0xb462ba(245)]['set']([]);
            })['to']['throw'](_0x375d4c(294));
        }), it('sets value for given key', function () {
            const _0x1f26b4 = _0x7155d9;
            return this[_0x1f26b4(245)][_0x1f26b4(253)](_0x1f26b4(250), _0x1f26b4(255))['then'](() => {
                const _0x3b31d4 = _0x1f26b4;
                return this[_0x3b31d4(245)][_0x3b31d4(251)](_0x3b31d4(250));
            })[_0x1f26b4(252)](_0x21f9bc => {
                const _0x2560dc = _0x1f26b4;
                expect(_0x21f9bc)['to'][_0x2560dc(258)](_0x2560dc(255));
            });
        }), it('sets value for given path', function () {
            const _0x3dbf3d = _0x7155d9;
            return this['fileUtil']['set'](_0x3dbf3d(260), _0x3dbf3d(255))[_0x3dbf3d(252)](() => {
                const _0x432ca6 = _0x3dbf3d;
                return this[_0x432ca6(245)]['get']();
            })[_0x3dbf3d(252)](_0x43155a => {
                const _0x181a14 = _0x3dbf3d;
                expect(_0x43155a)['to'][_0x181a14(267)]({ 'foo': { 'baz': _0x181a14(255) } });
            });
        }), it(_0x7155d9(295), function () {
            const _0x32fcf7 = _0x7155d9;
            return this[_0x32fcf7(245)]['set']({
                'foo': _0x32fcf7(255),
                'baz': { 'qux': _0x32fcf7(296) }
            })[_0x32fcf7(252)](() => {
                const _0x383a18 = _0x32fcf7;
                return this[_0x383a18(245)][_0x383a18(251)]();
            })[_0x32fcf7(252)](_0x5e7fb8 => {
                const _0x240a94 = _0x32fcf7;
                expect(_0x5e7fb8)['to'][_0x240a94(267)]({
                    'foo': 'bar',
                    'baz': { 'qux': _0x240a94(296) }
                });
            });
        }), it(_0x7155d9(297), function () {
            const _0x71f061 = _0x7155d9;
            return this[_0x71f061(245)][_0x71f061(253)](_0x71f061(250), 'bar')['then'](() => {
                const _0x54ec91 = _0x71f061;
                return this[_0x54ec91(245)][_0x54ec91(253)](_0x54ec91(254), 'qux');
            })[_0x71f061(252)](() => {
                const _0x405cb5 = _0x71f061;
                return this[_0x405cb5(245)][_0x405cb5(251)]();
            })[_0x71f061(252)](_0x1f83c5 => {
                const _0xd40b3e = _0x71f061;
                expect(_0x1f83c5)['to'][_0xd40b3e(267)]({
                    'foo': 'bar',
                    'baz': _0xd40b3e(298)
                });
            });
        }), it('updates file on disk', function () {
            const _0x3052f9 = _0x7155d9;
            return this[_0x3052f9(245)]['set'](_0x3052f9(250), _0x3052f9(255))['then'](() => {
                const _0x205be1 = _0x3052f9;
                return fs[_0x205be1(299)](path[_0x205be1(234)](this[_0x205be1(231)], _0x205be1(271)), 'utf8');
            })[_0x3052f9(252)](_0x42617a => {
                const _0xcf3a9a = _0x3052f9;
                expect(JSON[_0xcf3a9a(300)](_0x42617a))['to'][_0xcf3a9a(267)]({ 'foo': 'bar' });
            });
        }), it('locks file while writing', function () {
            const _0x2da074 = _0x7155d9;
            return sinon[_0x2da074(240)](lockFile, _0x2da074(273)), this[_0x2da074(245)]['set'](_0x2da074(250), _0x2da074(255))['then'](() => {
                const _0x36786d = _0x2da074;
                expect(lockFile[_0x36786d(273)])['to']['be']['called'];
            });
        }), it(_0x7155d9(301), function () {
            const _0x5c9019 = _0x7155d9;
            return sinon[_0x5c9019(240)](lockFile, _0x5c9019(282)), this[_0x5c9019(245)]['set'](_0x5c9019(250), _0x5c9019(255))[_0x5c9019(252)](() => {
                const _0x7620f1 = _0x5c9019;
                expect(lockFile[_0x7620f1(282)])['to']['be']['called'];
            });
        }), it('unlocks file even if writing fails', function () {
            const _0xbcaaa5 = _0x7155d9;
            return sinon[_0xbcaaa5(240)](lockFile, _0xbcaaa5(282)), sinon['stub'](fs, _0xbcaaa5(302))[_0xbcaaa5(275)](new Error(_0xbcaaa5(303))), this[_0xbcaaa5(245)][_0xbcaaa5(253)](_0xbcaaa5(250), _0xbcaaa5(255))['catch'](() => {
                const _0x4c2bba = _0xbcaaa5;
                expect(lockFile[_0x4c2bba(282)])['to']['be'][_0x4c2bba(283)];
            });
        });
    }), context(_0x377245(304), () => {
        const _0x2c0c75 = _0x377245;
        beforeEach(function () {
            const _0x45229a = _0x355f;
            this[_0x45229a(245)] = new FileUtil({ 'path': this[_0x45229a(224)] });
        }), it(_0x2c0c75(305), function () {
            const _0x641a9e = _0x2c0c75;
            return this[_0x641a9e(245)][_0x641a9e(306)]()['then'](() => {
                const _0x40937b = _0x641a9e;
                return fs[_0x40937b(307)](this[_0x40937b(224)]);
            })[_0x641a9e(236)](() => {
            });
        }), it(_0x2c0c75(308), function () {
            const _0x111113 = _0x2c0c75;
            return sinon[_0x111113(240)](lockFile, _0x111113(273)), this[_0x111113(245)][_0x111113(306)]()[_0x111113(252)](() => {
                const _0x493a16 = _0x111113;
                expect(lockFile[_0x493a16(273)])['to']['be'][_0x493a16(283)];
            });
        }), it(_0x2c0c75(309), function () {
            const _0x18796f = _0x2c0c75;
            return sinon[_0x18796f(240)](lockFile, _0x18796f(282)), this[_0x18796f(245)][_0x18796f(306)]()[_0x18796f(252)](() => {
                const _0x3cfa09 = _0x18796f;
                expect(lockFile[_0x3cfa09(282)])['to']['be'][_0x3cfa09(283)];
            });
        }), it(_0x2c0c75(310), function () {
            const _0x259f6b = _0x2c0c75;
            return sinon[_0x259f6b(240)](lockFile, _0x259f6b(282)), sinon[_0x259f6b(242)](fs, _0x259f6b(235))[_0x259f6b(275)](new Error('fail!')), this['fileUtil'][_0x259f6b(306)]()['then'](() => {
                throw new Error('should have caught!');
            })[_0x259f6b(236)](_0x33b52c => {
                const _0x408bda = _0x259f6b;
                expect(_0x33b52c[_0x408bda(311)])['to']['eq'](_0x408bda(303)), expect(lockFile[_0x408bda(282)])['to']['be'][_0x408bda(283)];
            });
        });
    });
});