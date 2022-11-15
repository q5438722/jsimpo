require(_0x3bfd76(122));
const R = require(_0x3bfd76(123)), _ = require('lodash'), path = require(_0x3bfd76(124)), EE = require(_0x3bfd76(125)), http = require(_0x3bfd76(126)), Promise = require(_0x3bfd76(127)), electron = require(_0x3bfd76(128)), commitInfo = require(_0x3bfd76(129)), Fixtures = require('../support/helpers/fixtures'), snapshot = require(_0x3bfd76(130)), stripAnsi = require(_0x3bfd76(131)), debug = require(_0x3bfd76(132))(_0x3bfd76(133)), pkg = require(_0x3bfd76(134)), detect = require(_0x3bfd76(135)), launch = require(_0x3bfd76(136)), extension = require(_0x3bfd76(137)), argsUtil = require(root + _0x3bfd76(138)), {fs} = require(root + _0x3bfd76(139)), ciProvider = require(root + 'lib/util/ci_provider'), settings = require(root + _0x3bfd76(140)), Events = require(root + 'lib/gui/events'), Windows = require(root + _0x3bfd76(141)), interactiveMode = require(root + _0x3bfd76(142)), runMode = require(root + _0x3bfd76(143)), api = require(root + _0x3bfd76(144)), cwd = require(root + _0x3bfd76(145)), user = require(root + _0x3bfd76(146)), config = require(root + 'lib/config'), cache = require(root + 'lib/cache'), errors = require(root + _0x3bfd76(147)), plugins = require(root + 'lib/plugins'), cypress = require(root + _0x3bfd76(148)), ProjectBase = require(root + _0x3bfd76(149))[_0x3bfd76(150)], {getId} = require(root + _0x3bfd76(151)), {ServerE2E} = require(root + 'lib/server-e2e'), Reporter = require(root + 'lib/reporter'), Watchers = require(root + _0x3bfd76(152)), browsers = require(root + 'lib/browsers'), videoCapture = require(root + _0x3bfd76(153)), browserUtils = require(root + _0x3bfd76(154)), chromeBrowser = require(root + _0x3bfd76(155)), openProject = require(root + _0x3bfd76(156)), env = require(root + _0x3bfd76(157)), v = require(root + 'lib/util/validation'), system = require(root + _0x3bfd76(158)), appData = require(root + 'lib/util/app_data'), electronApp = require('../../lib/util/electron-app'), savedState = require(root + _0x3bfd76(159)), TYPICAL_BROWSERS = [
        {
            'name': _0x3bfd76(160),
            'family': _0x3bfd76(161),
            'channel': _0x3bfd76(162),
            'displayName': _0x3bfd76(163),
            'version': _0x3bfd76(164),
            'path': _0x3bfd76(165),
            'majorVersion': '60'
        },
        {
            'name': _0x3bfd76(161),
            'family': _0x3bfd76(161),
            'channel': _0x3bfd76(162),
            'displayName': _0x3bfd76(166),
            'version': _0x3bfd76(167),
            'path': _0x3bfd76(168),
            'majorVersion': '49'
        },
        {
            'name': _0x3bfd76(160),
            'family': 'chromium',
            'channel': _0x3bfd76(169),
            'displayName': 'Canary',
            'version': _0x3bfd76(170),
            'path': '/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary',
            'majorVersion': '62'
        }
    ], ELECTRON_BROWSER = {
        'name': _0x3bfd76(128),
        'family': _0x3bfd76(161),
        'displayName': _0x3bfd76(171),
        'path': '',
        'version': _0x3bfd76(172),
        'majorVersion': 99
    }, previousCwd = process[_0x3bfd76(173)](), snapshotConsoleLogs = function (_0x1c3824) {
        const _0x631b3e = _0x3bfd76, _0x43c14e = _[_0x631b3e(174)](console[_0x631b3e(175)][_0x631b3e(176)])[_0x631b3e(177)](_0xd909f5 => {
                const _0x13c213 = _0x631b3e;
                return _0xd909f5[_0x13c213(178)](' ');
            })[_0x631b3e(178)]('\n')[_0x631b3e(179)]();
        return process[_0x631b3e(180)](previousCwd), snapshot(_0x1c3824, stripAnsi(_0x43c14e));
    };
describe('lib/cypress', () => {
    const _0x3ba59b = _0x3bfd76;
    require(_0x3ba59b(181))[_0x3ba59b(182)](), beforeEach(function () {
        const _0x5c7e40 = _0x3ba59b;
        this[_0x5c7e40(183)](8000), cache['__removeSync'](), Fixtures[_0x5c7e40(184)](), this[_0x5c7e40(185)] = Fixtures['projectPath'](_0x5c7e40(186)), this[_0x5c7e40(187)] = Fixtures[_0x5c7e40(188)](_0x5c7e40(189)), this['noScaffolding'] = Fixtures[_0x5c7e40(188)]('no-scaffolding'), this['recordPath'] = Fixtures[_0x5c7e40(188)](_0x5c7e40(190)), this[_0x5c7e40(191)] = Fixtures[_0x5c7e40(188)](_0x5c7e40(192)), this[_0x5c7e40(193)] = Fixtures['projectPath']('plugin-browser'), this[_0x5c7e40(194)] = Fixtures[_0x5c7e40(188)](_0x5c7e40(195)), sinon[_0x5c7e40(196)](videoCapture, _0x5c7e40(197))[_0x5c7e40(198)]({}), sinon[_0x5c7e40(196)](plugins, _0x5c7e40(199))[_0x5c7e40(198)](undefined), sinon[_0x5c7e40(196)](electronApp, 'isRunning')[_0x5c7e40(200)](!![]), sinon['stub'](extension, _0x5c7e40(201))[_0x5c7e40(198)](), sinon['stub'](detect, _0x5c7e40(202))[_0x5c7e40(198)](TYPICAL_BROWSERS), sinon['stub'](process, 'exit'), sinon['stub'](ServerE2E[_0x5c7e40(203)], 'reset'), sinon[_0x5c7e40(196)](errors, 'warning')['callThrough']()['withArgs']('INVOKED_BINARY_OUTSIDE_NPM_MODULE')[_0x5c7e40(200)](null), sinon['spy'](errors, 'log'), sinon['spy'](errors, _0x5c7e40(204)), sinon['spy'](console, _0x5c7e40(175)), sinon[_0x5c7e40(196)](process, _0x5c7e40(205))[_0x5c7e40(179)]({
            'chrome': ELECTRON_BROWSER[_0x5c7e40(206)],
            'electron': _0x5c7e40(207)
        }), this[_0x5c7e40(208)] = _0x266109 => {
            const _0x2b7458 = _0x5c7e40;
            expect(process[_0x2b7458(209)])['to']['be'][_0x2b7458(210)](_0x266109);
        }, this[_0x5c7e40(211)] = (_0xa0ccc4, _0x55c463, _0x34eca5) => {
            const _0x31b438 = _0x5c7e40;
            expect(errors['log'], 'error was logged')['to']['be'][_0x31b438(212)]({ 'type': _0xa0ccc4 }), expect(process['exit'], _0x31b438(213))['to']['be'][_0x31b438(210)](1);
            const _0x2e2c65 = errors['log']['getCall'](0)[_0x31b438(176)][0];
            return _0x55c463 && expect(_0x2e2c65['message'], _0x31b438(214))['to'][_0x31b438(215)](_0x55c463), _0x34eca5 && expect(_0x2e2c65['message'], _0x31b438(216))['to'][_0x31b438(215)](_0x34eca5), _0x2e2c65;
        };
    }), afterEach(async () => {
        try {
            await openProject['close']();
        } catch (_0x3330d6) {
        }
        Fixtures['remove']();
    }), context(_0x3ba59b(217), () => {
        const _0xe38d8f = _0x3ba59b;
        it(_0xe38d8f(218), () => {
            const _0x1b04c5 = _0xe38d8f;
            expect(v['isValidBrowserList'](_0x1b04c5(219), TYPICAL_BROWSERS))['to']['be'][_0x1b04c5(220)];
        }), it(_0xe38d8f(221), () => {
            const _0xc50625 = _0xe38d8f;
            expect(v[_0xc50625(222)](_0xc50625(219), [ELECTRON_BROWSER]))['to']['be'][_0xc50625(220)];
        }), it(_0xe38d8f(223), () => {
            const _0x56428d = _0xe38d8f, _0x3dc81c = {
                    'name': 'Edge Beta',
                    'family': 'chromium',
                    'displayName': _0x56428d(224),
                    'version': _0x56428d(225),
                    'path': _0x56428d(226),
                    'majorVersion': 80
                };
            expect(v[_0x56428d(222)]('browsers', [_0x3dc81c]))['to']['be'][_0x56428d(220)];
        }), it(_0xe38d8f(227), () => {
            const _0x5ce03b = _0xe38d8f;
            return browserUtils[_0x5ce03b(228)]()[_0x5ce03b(229)](_0x34ef24 => {
                const _0x2a15bb = _0x5ce03b;
                expect(v[_0x2a15bb(222)]('browsers', _0x34ef24))['to']['be'][_0x2a15bb(220)];
            });
        });
    }), context(_0x3ba59b(230), function () {
        const _0x1c8bb1 = _0x3ba59b;
        it(_0x1c8bb1(231), function () {
            const _0x19f65a = _0x1c8bb1;
            return cypress[_0x19f65a(197)]([
                _0x19f65a(232),
                _0x19f65a(233)
            ])['then'](() => {
                const _0x177630 = _0x19f65a, _0x854e49 = this['expectExitWithErr'](_0x177630(234));
                snapshot('could not parse config error', stripAnsi(_0x854e49[_0x177630(235)]));
            });
        }), it(_0x1c8bb1(236), function () {
            const _0x4b17f8 = _0x1c8bb1;
            return cypress[_0x4b17f8(197)]([
                _0x4b17f8(237),
                'a123'
            ])[_0x4b17f8(229)](() => {
                const _0xddc4e9 = _0x4b17f8, _0x10d36e = this[_0xddc4e9(211)](_0xddc4e9(234));
                snapshot(_0xddc4e9(238), stripAnsi(_0x10d36e[_0xddc4e9(235)]));
            });
        }), it(_0x1c8bb1(239), function () {
            const _0x423d49 = _0x1c8bb1;
            return cypress[_0x423d49(197)]([
                _0x423d49(240),
                _0x423d49(241)
            ])[_0x423d49(229)](() => {
                const _0x4ff01d = _0x423d49, _0x23d8ba = this[_0x4ff01d(211)](_0x4ff01d(234));
                snapshot(_0x4ff01d(242), stripAnsi(_0x23d8ba[_0x4ff01d(235)]));
            });
        });
    }), context(_0x3ba59b(243), function () {
        const _0x32e9cc = _0x3ba59b;
        beforeEach(function () {
            const _0x33a521 = _0x25a1;
            this[_0x33a521(244)] = {
                'on': sinon[_0x33a521(196)](),
                'webContents': { 'on': sinon[_0x33a521(196)]() }
            }, sinon['stub'](electron[_0x33a521(245)], 'on')['withArgs'](_0x33a521(246))[_0x33a521(247)](), sinon[_0x33a521(196)](Windows, 'open')[_0x33a521(198)](this[_0x33a521(244)]);
        }), it(_0x32e9cc(248), function () {
            const _0x55c726 = _0x32e9cc;
            return cypress[_0x55c726(197)]([
                _0x55c726(249),
                _0x55c726(250)
            ])['then'](() => {
                const _0x20d2b5 = _0x55c726;
                expect(errors['warning'])['to']['be'][_0x20d2b5(210)]('INVALID_CONFIG_OPTION'), expect(console[_0x20d2b5(175)])['to']['be']['calledWithMatch'](_0x20d2b5(251)), expect(console['log'])['to']['be'][_0x20d2b5(212)](_0x20d2b5(252));
            });
        }), it(_0x32e9cc(253), function () {
            const _0x312a45 = _0x32e9cc;
            return cypress['start']([
                _0x312a45(254),
                '--cwd=/foo/bar'
            ])[_0x312a45(229)](() => {
                const _0x1046fd = _0x312a45;
                expect(errors[_0x1046fd(255)])['to']['be']['calledWith']('INVALID_CONFIG_OPTION'), expect(console[_0x1046fd(175)])['to']['be'][_0x1046fd(212)]('`test` is not a valid configuration option'), expect(console['log'])['to']['be'][_0x1046fd(212)](_0x1046fd(256)), expect(console[_0x1046fd(175)])['to']['be'][_0x1046fd(212)](_0x1046fd(252)), snapshotConsoleLogs(_0x1046fd(257));
            });
        }), it(_0x32e9cc(258), function () {
            const _0x5180b8 = _0x32e9cc;
            return cypress['start'](['--config=trashAssetsBeforeRuns=false'])[_0x5180b8(229)](() => {
                const _0x5bf939 = _0x5180b8;
                expect(errors[_0x5bf939(255)])['to'][_0x5bf939(259)]['be'][_0x5bf939(210)](_0x5bf939(257));
            });
        });
    }), context(_0x3ba59b(260), () => {
        const _0x3d5835 = _0x3ba59b;
        beforeEach(() => {
            const _0x7ea41b = _0x25a1;
            sinon[_0x7ea41b(196)](electron[_0x7ea41b(245)], 'on')[_0x7ea41b(261)](_0x7ea41b(246))[_0x7ea41b(247)](), sinon[_0x7ea41b(196)](runMode, _0x7ea41b(262))[_0x7ea41b(198)](), sinon['stub'](runMode, _0x7ea41b(263))['resolves']({ 'stats': { 'failures': 0 } }), sinon[_0x7ea41b(196)](browsers, _0x7ea41b(264)), sinon['stub'](commitInfo, _0x7ea41b(265))[_0x7ea41b(198)]('remoteOrigin');
        }), it(_0x3d5835(266), function () {
            const _0x3dc991 = _0x3d5835;
            return cypress[_0x3dc991(197)](['--run-project=' + this[_0x3dc991(185)]])[_0x3dc991(229)](() => {
                const _0x2a74c4 = _0x3dc991;
                expect(browsers[_0x2a74c4(264)])['to']['be'][_0x2a74c4(212)](ELECTRON_BROWSER), this['expectExitWith'](0);
            });
        }), it(_0x3d5835(267), function () {
            const _0x17269a = _0x3d5835;
            return sinon[_0x17269a(268)](cypress, _0x17269a(269)), cypress['start']([
                _0x17269a(270) + this[_0x17269a(185)],
                _0x17269a(271)
            ])[_0x17269a(229)](() => {
                const _0xc9e17f = _0x17269a;
                expect(browsers[_0xc9e17f(264)])['to']['be'][_0xc9e17f(212)](ELECTRON_BROWSER), this['expectExitWith'](0), expect(cypress[_0xc9e17f(269)])['to']['be'][_0xc9e17f(272)], expect(cypress[_0xc9e17f(269)])['to']['be'][_0xc9e17f(210)](_0xc9e17f(273));
                const _0x48bd35 = cypress[_0xc9e17f(269)][_0xc9e17f(274)]['args'][1];
                expect(_0x48bd35)['to'][_0xc9e17f(215)]({
                    'headless': !![],
                    'headed': ![]
                });
            });
        }), it(_0x3d5835(275), function () {
            const _0xab1a69 = _0x3d5835;
            expect(() => cypress[_0xab1a69(197)]([
                _0xab1a69(270) + this[_0xab1a69(185)],
                '--headless',
                _0xab1a69(276)
            ]))['to'][_0xab1a69(277)](_0xab1a69(278));
        }), describe('strips --', () => {
            const _0x3d261c = _0x3d5835;
            beforeEach(() => {
                const _0x5b2f3f = _0x25a1;
                sinon[_0x5b2f3f(268)](argsUtil, _0x5b2f3f(279));
            }), it(_0x3d261c(280), function () {
                const _0x2e4ab5 = _0x3d261c;
                return cypress[_0x2e4ab5(197)]([
                    '--',
                    _0x2e4ab5(270) + this[_0x2e4ab5(185)]
                ])['then'](() => {
                    const _0x45254b = _0x2e4ab5;
                    expect(argsUtil[_0x45254b(279)])['to'][_0x45254b(281)][_0x45254b(282)][_0x45254b(210)]([_0x45254b(270) + this['todosPath']]), expect(browsers[_0x45254b(264)])['to']['be']['calledWithMatch'](ELECTRON_BROWSER), this[_0x45254b(208)](0);
                });
            }), it(_0x3d261c(283), function () {
                const _0x5480a8 = _0x3d261c;
                return cypress[_0x5480a8(197)]([
                    _0x5480a8(270) + this['todosPath'],
                    '--',
                    _0x5480a8(284)
                ])[_0x5480a8(229)](() => {
                    const _0xee98ab = _0x5480a8;
                    expect(argsUtil['toObject'])['to'][_0xee98ab(281)][_0xee98ab(282)]['calledWith']([
                        _0xee98ab(270) + this[_0xee98ab(185)],
                        _0xee98ab(284)
                    ]), expect(browsers[_0xee98ab(264)])['to']['be'][_0xee98ab(212)](ELECTRON_BROWSER), this['expectExitWith'](0);
                });
            });
        }), it(_0x3d5835(285), function () {
            const _0xfdde62 = _0x3d5835;
            return sinon[_0xfdde62(196)](runMode, _0xfdde62(286))[_0xfdde62(198)]({ 'totalFailed': 10 }), cypress['start']([_0xfdde62(270) + this[_0xfdde62(185)]])[_0xfdde62(229)](() => {
                const _0x549908 = _0xfdde62;
                this[_0x549908(208)](10);
            });
        }), it(_0x3d5835(287), function () {
            const _0xa5847e = _0x3d5835;
            return sinon[_0xa5847e(196)](api, _0xa5847e(288)), user['set']({ 'authToken': 'auth-token-123' })[_0xa5847e(229)](() => {
                const _0x3c75fa = _0xa5847e;
                return cypress[_0x3c75fa(197)]([_0x3c75fa(270) + this[_0x3c75fa(289)]]);
            })[_0xa5847e(229)](() => {
                const _0x539121 = _0xa5847e;
                this[_0x539121(208)](0);
            })[_0xa5847e(229)](() => {
                const _0x546d19 = _0xa5847e;
                return expect(api['createProject'])['not']['to']['be'][_0x546d19(290)], new ProjectBase({
                    'projectRoot': this['noScaffolding'],
                    'testingType': 'e2e'
                })['getProjectId']()[_0x546d19(229)](() => {
                    throw new Error('should have caught error but did not');
                })[_0x546d19(291)](_0x30f978 => {
                    const _0x2963ac = _0x546d19;
                    expect(_0x30f978['type'])['to']['eq'](_0x2963ac(292));
                });
            });
        }), it(_0x3d5835(293), function () {
            const _0x53ae1f = _0x3d5835;
            return cache[_0x53ae1f(294)]()[_0x53ae1f(229)](_0x687bd8 => {
                const _0x13c0be = _0x53ae1f;
                return expect(_0x687bd8[_0x13c0be(295)])['to']['eq'](0), cypress[_0x13c0be(197)]([_0x13c0be(270) + this['todosPath']]);
            })['then'](() => {
                return cache['getProjectRoots']();
            })[_0x53ae1f(229)](_0x26b88f => {
                const _0x1d1f34 = _0x53ae1f;
                expect(_0x26b88f[_0x1d1f34(295)])['to']['eq'](0);
            });
        }), it(_0x3d5835(296), function () {
            const _0x46e3af = _0x3d5835, _0x13cff3 = path['relative'](cwd(), this[_0x46e3af(185)]);
            return cypress[_0x46e3af(197)]([
                '--run-project=' + this['todosPath'],
                _0x46e3af(297) + _0x13cff3 + _0x46e3af(298)
            ])['then'](() => {
                const _0x7be46f = _0x46e3af;
                expect(browsers['open'])['to']['be'][_0x7be46f(212)](ELECTRON_BROWSER, { 'url': 'http://localhost:8888/__/#/tests/integration/test2.coffee' }), this[_0x7be46f(208)](0);
            });
        }), it(_0x3d5835(299), function () {
            const _0x3d1b56 = _0x3d5835;
            return cypress[_0x3d1b56(197)]([
                _0x3d1b56(270) + this[_0x3d1b56(194)],
                '--spec=' + this[_0x3d1b56(194)] + '/cypress/integration/bar.js',
                _0x3d1b56(232),
                'port=2020'
            ])[_0x3d1b56(229)](() => {
                const _0x171183 = _0x3d1b56;
                expect(browsers[_0x171183(264)])['to']['be'][_0x171183(212)](ELECTRON_BROWSER, { 'url': 'http://localhost:2020/__/#/tests/integration/bar.js' }), this[_0x171183(208)](0);
            });
        }), it(_0x3d5835(300), function () {
            const _0x521e72 = _0x3d5835;
            return cypress[_0x521e72(197)]([
                '--run-project=' + this[_0x521e72(185)],
                '--spec=' + this['todosPath'] + _0x521e72(298)
            ])[_0x521e72(229)](() => {
                const _0x9fefc9 = _0x521e72;
                expect(browsers[_0x9fefc9(264)])['to']['be'][_0x9fefc9(212)](ELECTRON_BROWSER, { 'url': _0x9fefc9(301) }), this[_0x9fefc9(208)](0);
            });
        }), it('runs project by limiting spec files via config.testFiles string glob pattern', function () {
            const _0x55b451 = _0x3d5835;
            return cypress[_0x55b451(197)]([
                '--run-project=' + this[_0x55b451(185)],
                _0x55b451(302) + this[_0x55b451(185)] + _0x55b451(298)
            ])[_0x55b451(229)](() => {
                const _0x481e2d = _0x55b451;
                expect(browsers[_0x481e2d(264)])['to']['be'][_0x481e2d(212)](ELECTRON_BROWSER, { 'url': _0x481e2d(301) }), this[_0x481e2d(208)](0);
            });
        }), it(_0x3d5835(303), function () {
            const _0x3cc9d2 = _0x3d5835;
            return cypress['start']([
                '--run-project=' + this[_0x3cc9d2(185)],
                _0x3cc9d2(304)
            ])[_0x3cc9d2(229)](() => {
                const _0x1462b0 = _0x3cc9d2;
                expect(browsers[_0x1462b0(264)])['to']['be']['calledWithMatch'](ELECTRON_BROWSER, { 'url': _0x1462b0(301) });
            })[_0x3cc9d2(229)](() => {
                const _0x120820 = _0x3cc9d2;
                expect(browsers['open'])['to']['be'][_0x120820(212)](ELECTRON_BROWSER, { 'url': _0x120820(305) }), this[_0x120820(208)](0);
            });
        }), it(_0x3d5835(306), function () {
            const _0x528b04 = _0x3d5835, _0x34683f = sinon[_0x528b04(268)](Watchers[_0x528b04(203)], _0x528b04(307)), _0x5847ad = sinon[_0x528b04(268)](Watchers['prototype'], _0x528b04(308));
            return cypress['start']([_0x528b04(270) + this[_0x528b04(191)]])[_0x528b04(229)](() => {
                const _0x576f6a = _0x528b04;
                expect(_0x5847ad)[_0x576f6a(259)]['to']['be'][_0x576f6a(290)], expect(_0x34683f)[_0x576f6a(259)]['to']['be'][_0x576f6a(290)], this[_0x576f6a(208)](0);
            });
        }), it(_0x3d5835(309), function () {
            const _0x5cfd54 = _0x3d5835;
            return config[_0x5cfd54(310)](this[_0x5cfd54(187)])[_0x5cfd54(229)](_0x2f286e => {
                const _0x34e4a9 = _0x5cfd54;
                return fs[_0x34e4a9(311)](_0x2f286e['integrationFolder'])[_0x34e4a9(229)](() => {
                    throw new Error('integrationFolder should not exist!');
                })[_0x34e4a9(291)](() => {
                    const _0x50ff00 = _0x34e4a9;
                    return cypress['start']([
                        _0x50ff00(270) + this[_0x50ff00(187)],
                        _0x50ff00(312)
                    ]);
                })[_0x34e4a9(229)](() => {
                    const _0x27e917 = _0x34e4a9;
                    return fs['statAsync'](_0x2f286e[_0x27e917(313)]);
                })[_0x34e4a9(229)](() => {
                    const _0x57b619 = _0x34e4a9;
                    return Promise['join'](fs[_0x57b619(311)](path[_0x57b619(178)](_0x2f286e[_0x57b619(313)], _0x57b619(314), _0x57b619(315))), fs['statAsync'](path[_0x57b619(178)](_0x2f286e[_0x57b619(313)], _0x57b619(316), _0x57b619(317))), fs['statAsync'](path['join'](_0x2f286e[_0x57b619(313)], _0x57b619(316), 'files.spec.js')), fs[_0x57b619(311)](path[_0x57b619(178)](_0x2f286e['integrationFolder'], '2-advanced-examples', _0x57b619(318))));
                });
            });
        }), it(_0x3d5835(319), function () {
            const _0x44e030 = _0x3d5835, _0x12ec77 = function (_0x2f1222, _0x5b5a49) {
                    const _0x2a7b7b = _0x25a1;
                    if (!_0x2f1222[_0x2a7b7b(320)]())
                        throw new Error(_0x2a7b7b(321) + _0x5b5a49);
                    expect(_0x2f1222[_0x2a7b7b(322)]())['to'][_0x2a7b7b(281)][_0x2a7b7b(323)](_0x2a7b7b(324), _0x2a7b7b(325));
                };
            return Promise[_0x44e030(326)]([
                fs['statAsync'](path[_0x44e030(178)](this['pristinePath'], _0x44e030(327)))['reflect'](),
                fs[_0x44e030(311)](path[_0x44e030(178)](this[_0x44e030(187)], _0x44e030(328)))[_0x44e030(329)]()
            ])[_0x44e030(330)](_0x12ec77)[_0x44e030(229)](() => {
                const _0x47516c = _0x44e030;
                return cypress['start']([_0x47516c(270) + this[_0x47516c(187)]]);
            })[_0x44e030(229)](() => {
                const _0x1cb30e = _0x44e030;
                return Promise[_0x1cb30e(326)]([
                    fs[_0x1cb30e(311)](path[_0x1cb30e(178)](this[_0x1cb30e(187)], _0x1cb30e(327)))['reflect'](),
                    fs[_0x1cb30e(311)](path[_0x1cb30e(178)](this[_0x1cb30e(187)], _0x1cb30e(328)))[_0x1cb30e(329)]()
                ]);
            })['each'](_0x12ec77)[_0x44e030(229)](() => {
                const _0x50616f = _0x44e030;
                this['expectExitWithErr'](_0x50616f(331), this[_0x50616f(187)]);
            });
        }), it(_0x3d5835(332), function () {
            const _0x6b4430 = _0x3d5835;
            return settings['write'](this[_0x6b4430(187)], {})[_0x6b4430(229)](() => {
                const _0x509d9a = _0x6b4430;
                return cypress[_0x509d9a(197)]([_0x509d9a(270) + this[_0x509d9a(187)]]);
            })[_0x6b4430(229)](() => {
                const _0x2e8717 = _0x6b4430;
                return fs[_0x2e8717(311)](path['join'](this[_0x2e8717(187)], _0x2e8717(327), 'integration'));
            })[_0x6b4430(229)](() => {
                const _0x2e0d4f = _0x6b4430;
                throw new Error(_0x2e0d4f(333));
            })[_0x6b4430(291)]({ 'code': _0x6b4430(325) }, () => {
            });
        }), it(_0x3d5835(334), function () {
            const _0x3b3ef4 = _0x3d5835;
            return config[_0x3b3ef4(310)](this[_0x3b3ef4(187)])[_0x3b3ef4(229)](_0x33531b => {
                const _0x2f13c0 = _0x3b3ef4;
                return fs['statAsync'](_0x33531b[_0x2f13c0(335)])[_0x2f13c0(229)](() => {
                    const _0x378e6a = _0x2f13c0;
                    throw new Error(_0x378e6a(336));
                })[_0x2f13c0(291)](() => {
                    const _0x2428cb = _0x2f13c0;
                    return cypress['start']([
                        _0x2428cb(270) + this[_0x2428cb(187)],
                        '--no-run-mode'
                    ]);
                })[_0x2f13c0(229)](() => {
                    const _0x2292f8 = _0x2f13c0;
                    return fs[_0x2292f8(311)](_0x33531b[_0x2292f8(335)]);
                })[_0x2f13c0(229)](() => {
                    const _0x2ac742 = _0x2f13c0;
                    return fs['statAsync'](path[_0x2ac742(178)](_0x33531b[_0x2ac742(335)], _0x2ac742(337)));
                });
            });
        }), it(_0x3d5835(338), function () {
            const _0x39a1c1 = _0x3d5835, _0x429fa3 = path[_0x39a1c1(178)](this['pristinePath'], _0x39a1c1(339));
            return config[_0x39a1c1(310)](this['pristinePath'])[_0x39a1c1(229)](() => {
                const _0x594849 = _0x39a1c1;
                return fs[_0x594849(311)](_0x429fa3)[_0x594849(229)](() => {
                    const _0x185e0d = _0x594849;
                    throw new Error(_0x185e0d(340));
                })[_0x594849(291)]({ 'code': 'ENOENT' }, () => {
                    const _0x3fa252 = _0x594849;
                    return cypress['start']([
                        _0x3fa252(270) + this[_0x3fa252(187)],
                        _0x3fa252(312)
                    ]);
                })[_0x594849(229)](() => {
                    const _0x5e9d13 = _0x594849;
                    return fs[_0x5e9d13(311)](_0x429fa3);
                })[_0x594849(229)](() => {
                    const _0xb3f663 = _0x594849;
                    return fs[_0xb3f663(311)](path[_0xb3f663(178)](_0x429fa3, _0xb3f663(341)));
                })[_0x594849(229)](() => {
                    const _0x4c47e1 = _0x594849;
                    return fs[_0x4c47e1(311)](path['join'](_0x429fa3, _0x4c47e1(342)));
                });
            });
        }), it(_0x3d5835(343), function (_0x1f4f25) {
            const _0x4116c1 = _0x3d5835;
            config[_0x4116c1(310)](this[_0x4116c1(194)])['then'](_0x2f82ee => {
                const _0x29f0dc = _0x4116c1;
                return this[_0x29f0dc(344)] = _0x2f82ee, fs['statAsync'](this['cfg'][_0x29f0dc(335)]);
            })[_0x4116c1(229)](() => {
                const _0x5a9e86 = _0x4116c1;
                return settings[_0x5a9e86(345)](this[_0x5a9e86(194)]);
            })[_0x4116c1(229)](_0x2c4f4a => {
                const _0x339916 = _0x4116c1;
                return _0x2c4f4a['fixturesFolder'] = ![], settings['write'](this[_0x339916(194)], _0x2c4f4a);
            })['then'](() => {
                const _0x204f75 = _0x4116c1;
                return cypress[_0x204f75(197)]([_0x204f75(270) + this['idsPath']]);
            })[_0x4116c1(229)](() => {
                const _0x344715 = _0x4116c1;
                return fs[_0x344715(311)](this[_0x344715(344)]['fixturesFolder'])['then'](() => {
                    const _0x4146c1 = _0x344715;
                    throw new Error(_0x4146c1(336));
                })[_0x344715(291)](() => {
                    return _0x1f4f25();
                });
            });
        }), it(_0x3d5835(346), function () {
            const _0x34247f = _0x3d5835;
            return cypress[_0x34247f(197)]([
                '--run-project=' + this[_0x34247f(185)],
                '--headed'
            ])[_0x34247f(229)](() => {
                const _0x1373f8 = _0x34247f;
                expect(browsers[_0x1373f8(264)])['to']['be']['calledWithMatch'](ELECTRON_BROWSER, {
                    'proxyServer': 'http://localhost:8888',
                    'show': !![]
                }), this[_0x1373f8(208)](0);
            });
        }), it('turns on reporting', function () {
            const _0x4e0f49 = _0x3d5835;
            return sinon[_0x4e0f49(268)](Reporter, _0x4e0f49(347)), cypress['start']([_0x4e0f49(270) + this['todosPath']])['then'](() => {
                const _0x3c6340 = _0x4e0f49;
                expect(Reporter['create'])['to']['be']['calledWith'](_0x3c6340(348)), this[_0x3c6340(208)](0);
            });
        }), it('can change the reporter to nyan', function () {
            const _0x5cb21c = _0x3d5835;
            return sinon[_0x5cb21c(268)](Reporter, 'create'), cypress[_0x5cb21c(197)]([
                _0x5cb21c(270) + this[_0x5cb21c(185)],
                '--reporter=nyan'
            ])[_0x5cb21c(229)](() => {
                const _0xf5dfa6 = _0x5cb21c;
                expect(Reporter['create'])['to']['be'][_0xf5dfa6(210)](_0xf5dfa6(349)), this[_0xf5dfa6(208)](0);
            });
        }), it(_0x3d5835(350), function () {
            const _0x5dc155 = _0x3d5835;
            return sinon[_0x5dc155(268)](Reporter, 'create'), config[_0x5dc155(310)](this['idsPath'])[_0x5dc155(229)](_0x46d5a5 => {
                const _0x59cc4f = _0x5dc155;
                return this[_0x59cc4f(344)] = _0x46d5a5, settings[_0x59cc4f(345)](this[_0x59cc4f(194)]);
            })['then'](_0x4d9f18 => {
                const _0x26f5d4 = _0x5dc155;
                return _0x4d9f18[_0x26f5d4(351)] = 'dot', settings[_0x26f5d4(352)](this[_0x26f5d4(194)], _0x4d9f18);
            })[_0x5dc155(229)](() => {
                const _0x30be0f = _0x5dc155;
                return cypress['start']([_0x30be0f(270) + this['idsPath']]);
            })['then'](() => {
                const _0xec2703 = _0x5dc155;
                expect(Reporter['create'])['to']['be'][_0xec2703(210)]('dot'), this[_0xec2703(208)](0);
            });
        }), it(_0x3d5835(353), function () {
            const _0x28c6ad = _0x3d5835;
            return user[_0x28c6ad(354)]({})[_0x28c6ad(229)](() => {
                const _0x4e6a89 = _0x28c6ad;
                return cypress['start']([_0x4e6a89(270) + this['todosPath']]);
            })['then'](() => {
                const _0x233b8f = _0x28c6ad;
                this[_0x233b8f(208)](0);
            });
        }), it(_0x3d5835(355), function () {
            const _0x22b4b2 = _0x3d5835;
            return cypress['start']([
                _0x22b4b2(270) + this['todosPath'],
                _0x22b4b2(356)
            ])[_0x22b4b2(229)](() => {
                const _0x173f22 = _0x22b4b2;
                expect(errors[_0x173f22(255)])['to']['be'][_0x173f22(210)](_0x173f22(357), _0x173f22(358)), expect(console[_0x173f22(175)])['to']['be'][_0x173f22(212)](_0x173f22(359)), expect(console[_0x173f22(175)])['to']['be'][_0x173f22(212)]('cypress run --record'), expect(console['log'])['to']['be']['calledWithMatch'](_0x173f22(360));
            });
        }), it('logs warning when removing old browser profiles fails', function () {
            const _0x5b2831 = _0x3d5835, _0xf083ee = new Error(_0x5b2831(361));
            return sinon[_0x5b2831(196)](browsers, _0x5b2831(362))[_0x5b2831(363)](_0xf083ee), cypress['start']([_0x5b2831(270) + this[_0x5b2831(185)]])[_0x5b2831(229)](() => {
                const _0x4938ef = _0x5b2831;
                expect(errors[_0x4938ef(255)])['to']['be'][_0x4938ef(210)]('CANNOT_REMOVE_OLD_BROWSER_PROFILES', _0xf083ee[_0x4938ef(364)]), expect(console['log'])['to']['be'][_0x4938ef(212)]('Warning: We failed to remove old browser profiles from previous runs.'), expect(console[_0x4938ef(175)])['to']['be'][_0x4938ef(212)](_0xf083ee['message']);
            });
        }), it(_0x3d5835(365), function () {
            const _0x55f9d2 = _0x3d5835;
            return cypress[_0x55f9d2(197)]([
                _0x55f9d2(270) + this[_0x55f9d2(187)],
                _0x55f9d2(356)
            ])[_0x55f9d2(229)](() => {
                const _0x590f9e = _0x55f9d2;
                expect(errors['warning'])['not']['to']['be'][_0x590f9e(210)](_0x590f9e(357), 'abc123'), expect(console[_0x590f9e(175)])[_0x590f9e(259)]['to']['be']['calledWithMatch'](_0x590f9e(366));
            });
        }), it(_0x3d5835(367), function () {
            const _0x1718e0 = _0x3d5835;
            return cypress[_0x1718e0(197)]([
                '--run-project=' + this[_0x1718e0(185)],
                _0x1718e0(356),
                '--record=false'
            ])[_0x1718e0(229)](() => {
                const _0x23f0a5 = _0x1718e0;
                expect(errors[_0x23f0a5(255)])[_0x23f0a5(259)]['to']['be'][_0x23f0a5(210)](_0x23f0a5(357), _0x23f0a5(358)), expect(console['log'])[_0x23f0a5(259)]['to']['be'][_0x23f0a5(212)](_0x23f0a5(366));
            });
        }), it(_0x3d5835(368), function () {
            const _0x1637e0 = _0x3d5835;
            return settings[_0x1637e0(352)](this['idsPath'], { 'supportFile': _0x1637e0(369) })[_0x1637e0(229)](() => {
                const _0x88dd1e = _0x1637e0;
                return cypress[_0x88dd1e(197)]([_0x88dd1e(270) + this[_0x88dd1e(194)]]);
            })['then'](() => {
                const _0x3ceba6 = _0x1637e0;
                this[_0x3ceba6(211)](_0x3ceba6(370), 'Your `supportFile` is set to `/does/not/exist`,');
            });
        }), it('logs error when browser cannot be found', function () {
            const _0x242dfb = _0x3d5835;
            return browsers['open']['restore'](), cypress['start']([
                _0x242dfb(270) + this[_0x242dfb(194)],
                _0x242dfb(371)
            ])[_0x242dfb(229)](() => {
                const _0x38e5eb = _0x242dfb;
                this[_0x38e5eb(211)](_0x38e5eb(372));
                const _0x50ebfc = errors[_0x38e5eb(175)][_0x38e5eb(176)], _0x273ccd = _[_0x38e5eb(373)](_0x50ebfc, _0xb0b2b0 => {
                        return _['find'](_0xb0b2b0, _0x38f261 => {
                            const _0x267d14 = _0x25a1;
                            return _0x38f261[_0x267d14(235)] && _0x38f261[_0x267d14(235)]['includes'](_0x267d14(374));
                        });
                    });
                expect(_0x273ccd, _0x38e5eb(375))['to']['be']['ok'];
                const _0x29f457 = _[_0x38e5eb(373)](_0x50ebfc, _0x5f09ee => {
                    const _0x2b234b = _0x38e5eb;
                    return _[_0x2b234b(373)](_0x5f09ee, _0x37acc5 => {
                        const _0x31c48a = _0x2b234b;
                        return _0x37acc5[_0x31c48a(235)] && _0x37acc5[_0x31c48a(235)][_0x31c48a(376)](_0x31c48a(377));
                    });
                });
                expect(_0x29f457, 'supported browsers should be listed')['to']['be']['ok'];
                const _0x42606f = _['find'](_0x50ebfc, _0x1d1e5c => {
                    const _0x5222b6 = _0x38e5eb;
                    return _[_0x5222b6(373)](_0x1d1e5c, _0x201664 => {
                        const _0x4c0cfc = _0x5222b6;
                        return _0x201664[_0x4c0cfc(235)] && _0x201664[_0x4c0cfc(235)]['includes'](_0x4c0cfc(378));
                    });
                });
                expect(_0x42606f, _0x38e5eb(379))['to']['be']['ok'];
            });
        }), describe(_0x3d5835(380), function () {
            const _0xf7e086 = _0x3d5835;
            it('logs error and exits when spec file was specified and does not exist', function () {
                const _0x577bea = _0x25a1;
                return cypress[_0x577bea(197)]([
                    _0x577bea(270) + this[_0x577bea(185)],
                    _0x577bea(381)
                ])['then'](() => {
                    const _0x2c1438 = _0x577bea;
                    this[_0x2c1438(211)](_0x2c1438(382), 'path/to/spec'), this[_0x2c1438(211)]('NO_SPECS_FOUND', _0x2c1438(383)), this[_0x2c1438(211)](_0x2c1438(382), this['todosPath']);
                });
            }), it(_0xf7e086(384), function () {
                const _0x38cc4e = _0xf7e086;
                return cypress[_0x38cc4e(197)]([
                    _0x38cc4e(270) + this[_0x38cc4e(185)],
                    _0x38cc4e(297) + this[_0x38cc4e(185)] + _0x38cc4e(385)
                ])[_0x38cc4e(229)](() => {
                    const _0x49f7d3 = _0x38cc4e;
                    this[_0x49f7d3(211)](_0x49f7d3(382), 'tests/path/to/spec'), this['expectExitWithErr'](_0x49f7d3(382), this[_0x49f7d3(185)]);
                });
            }), it(_0xf7e086(386), function () {
                const _0x39872f = _0xf7e086;
                return cypress[_0x39872f(197)]([
                    _0x39872f(270) + this['todosPath'],
                    _0x39872f(387)
                ])['then'](() => {
                    const _0x45e802 = _0x39872f;
                    this['expectExitWithErr'](_0x45e802(382), _0x45e802(388)), this['expectExitWithErr'](_0x45e802(382), _0x45e802(389));
                });
            });
        }), it(_0x3d5835(390), function () {
            const _0x479bfb = _0x3d5835;
            return fs[_0x479bfb(391)](this['todosPath'] + _0x479bfb(392), _0x479bfb(393))[_0x479bfb(229)](() => {
                const _0x1d17ce = _0x479bfb;
                return cypress['start']([_0x1d17ce(270) + this['todosPath']]);
            })['then'](() => {
                this['expectExitWithErr']('ERROR_READING_FILE', this['todosPath']);
            });
        }), it(_0x3d5835(394), function () {
            const _0x1cd6ba = _0x3d5835;
            return fs[_0x1cd6ba(391)](this['todosPath'] + _0x1cd6ba(395), _0x1cd6ba(393))['then'](() => {
                const _0x39a153 = _0x1cd6ba;
                return cypress[_0x39a153(197)]([_0x39a153(270) + this[_0x39a153(185)]]);
            })[_0x1cd6ba(229)](() => {
                const _0x458acd = _0x1cd6ba;
                this[_0x458acd(211)]('ERROR_READING_FILE', this[_0x458acd(185)]);
            });
        }), it(_0x3d5835(396), function () {
            const _0xc95c89 = _0x3d5835;
            return settings[_0xc95c89(352)](this[_0xc95c89(185)], { 'baseUrl': _0xc95c89(397) })[_0xc95c89(229)](() => {
                const _0x37dded = _0xc95c89;
                return cypress[_0x37dded(197)]([_0x37dded(270) + this[_0x37dded(185)]]);
            })[_0xc95c89(229)](() => {
                const _0x38368d = _0xc95c89;
                this[_0x38368d(211)](_0x38368d(398), _0x38368d(328));
            });
        }), it(_0x3d5835(399), function () {
            const _0x46e55 = _0x3d5835;
            return cypress[_0x46e55(197)]([
                _0x46e55(270) + this[_0x46e55(185)],
                _0x46e55(400)
            ])[_0x46e55(229)](() => {
                const _0x1a0036 = _0x46e55;
                this['expectExitWithErr'](_0x1a0036(401), 'localhost:9999'), this[_0x1a0036(211)](_0x1a0036(401), _0x1a0036(402));
            });
        }), it(_0x3d5835(403), function () {
            const _0x44c611 = _0x3d5835;
            return process[_0x44c611(404)][_0x44c611(405)] = _0x44c611(397), cypress[_0x44c611(197)]([_0x44c611(270) + this[_0x44c611(185)]])[_0x44c611(229)](() => {
                const _0x214854 = _0x44c611;
                this[_0x214854(211)](_0x214854(401), _0x214854(397)), this[_0x214854(211)](_0x214854(401), 'We found an invalid configuration value');
            });
        });
        const _0x23389a = [{
                'old': _0x3d5835(406),
                'new': _0x3d5835(407)
            }];
        _0x23389a['forEach'](function (_0x5c2072) {
            const _0x58052b = _0x3d5835;
            it(_0x58052b(408) + _0x5c2072[_0x58052b(409)], function () {
                const _0x389693 = _0x58052b;
                return cypress[_0x389693(197)]([
                    _0x389693(270) + this['todosPath'],
                    _0x389693(410) + _0x5c2072['old'] + '=\'\''
                ])['then'](() => {
                    const _0x1e99dc = _0x389693;
                    this[_0x1e99dc(211)](_0x1e99dc(411), _0x5c2072[_0x1e99dc(409)]), this[_0x1e99dc(211)]('RENAMED_CONFIG_OPTION', _0x5c2072['new']);
                });
            });
        }), it(_0x3d5835(412), function () {
            const _0x273cd3 = _0x3d5835;
            if (process[_0x273cd3(413)]() === 0)
                return;
            const _0x1945c3 = path['resolve']('./permissions'), _0x23e946 = path[_0x273cd3(178)](_0x1945c3, _0x273cd3(328));
            return fs[_0x273cd3(414)](_0x23e946, '{}')[_0x273cd3(229)](() => {
                const _0x4eb763 = _0x273cd3;
                return fs[_0x4eb763(415)](_0x1945c3, _0x4eb763(416));
            })[_0x273cd3(229)](() => {
                const _0x39aa8d = _0x273cd3;
                return cypress[_0x39aa8d(197)]([_0x39aa8d(270) + _0x1945c3]);
            })[_0x273cd3(229)](() => {
                const _0x5719cb = _0x273cd3;
                return fs[_0x5719cb(415)](_0x1945c3, _0x5719cb(417));
            })[_0x273cd3(229)](() => {
                const _0x32405f = _0x273cd3;
                return fs[_0x32405f(418)](_0x1945c3);
            })['then'](() => {
                const _0x2d5ce1 = _0x273cd3;
                this['expectExitWithErr'](_0x2d5ce1(419), path[_0x2d5ce1(178)](_0x1945c3, _0x2d5ce1(328)));
            });
        }), it(_0x3d5835(420), function () {
            const _0x47316d = _0x3d5835;
            return cypress[_0x47316d(197)]([
                _0x47316d(270) + this[_0x47316d(185)],
                _0x47316d(421),
                'foobarbaz'
            ])['then'](() => {
                const _0x4f4c01 = _0x47316d;
                this[_0x4f4c01(211)](_0x4f4c01(422), _0x4f4c01(423));
            });
        }), describe(_0x3d5835(424), () => {
            const _0x56af53 = _0x3d5835;
            beforeEach(function () {
                const _0x2a0c66 = _0x25a1;
                return appData[_0x2a0c66(425)]()[_0x2a0c66(229)](() => {
                    const _0x5c8a52 = _0x2a0c66;
                    return savedState['formStatePath'](this[_0x5c8a52(185)]);
                })[_0x2a0c66(229)](_0xe3c22d => {
                    this['statePath'] = appData['projectsPath'](_0xe3c22d);
                });
            }), it(_0x56af53(426), function () {
                const _0x51b6cb = _0x56af53;
                return cypress[_0x51b6cb(197)]([
                    _0x51b6cb(270) + this['todosPath'],
                    _0x51b6cb(297) + this[_0x51b6cb(185)] + _0x51b6cb(298)
                ])[_0x51b6cb(229)](() => {
                    const _0x54e507 = _0x51b6cb;
                    return this[_0x54e507(208)](0), openProject[_0x54e507(427)]()[_0x54e507(428)]();
                })[_0x51b6cb(229)](() => {
                    const _0x41e608 = _0x51b6cb;
                    return fs[_0x41e608(311)](this[_0x41e608(429)])[_0x41e608(229)](() => {
                        const _0x4e6e60 = _0x41e608;
                        throw new Error(_0x4e6e60(430) + this[_0x4e6e60(429)]);
                    })['catch']({ 'code': _0x41e608(325) }, () => {
                    });
                });
            });
        }), describe(_0x3d5835(431), () => {
            const _0x47aef4 = _0x3d5835;
            it(_0x47aef4(432), function () {
                const _0x326777 = _0x47aef4;
                return cypress[_0x326777(197)](['--run-project=' + this[_0x326777(185)]])[_0x326777(229)](() => {
                    const _0x30d2ce = _0x326777;
                    expect(openProject[_0x30d2ce(427)]()[_0x30d2ce(344)][_0x30d2ce(431)])['to']['be']['false'], this[_0x30d2ce(208)](0);
                });
            });
        }), describe(_0x3d5835(433), () => {
            const _0x1e2c78 = _0x3d5835;
            it(_0x1e2c78(434), function () {
                const _0x1c4431 = _0x1e2c78;
                return cypress[_0x1c4431(197)]([
                    _0x1c4431(270) + this[_0x1c4431(185)],
                    _0x1c4431(435)
                ])[_0x1c4431(229)](() => {
                    const _0x2effe8 = _0x1c4431, {cfg: _0x88bf7f} = openProject['getProject']();
                    expect(_0x88bf7f[_0x2effe8(436)])['to']['be'][_0x2effe8(437)], expect(_0x88bf7f['requestTimeout'])['to']['eq'](1234), expect(_0x88bf7f[_0x2effe8(438)][_0x2effe8(436)])['to'][_0x2effe8(439)]['eq']({
                        'value': ![],
                        'from': _0x2effe8(440)
                    }), expect(_0x88bf7f['resolved'][_0x2effe8(441)])['to']['deep']['eq']({
                        'value': 1234,
                        'from': _0x2effe8(440)
                    }), this[_0x2effe8(208)](0);
                });
            }), it(_0x1e2c78(442), function () {
                const _0x370cc3 = _0x1e2c78;
                return plugins[_0x370cc3(199)]['restore'](), cypress['start']([
                    _0x370cc3(270) + this['pluginConfig'],
                    '--config=requestTimeout=1234,videoCompression=false',
                    '--env=foo=foo,bar=bar'
                ])[_0x370cc3(229)](() => {
                    const _0x22fb30 = _0x370cc3, {cfg: _0x58f4b6} = openProject['getProject']();
                    expect(_0x58f4b6[_0x22fb30(436)])['to']['eq'](20), expect(_0x58f4b6[_0x22fb30(443)])['to']['eq'](500), expect(_0x58f4b6[_0x22fb30(404)])['to'][_0x22fb30(439)]['eq']({
                        'foo': 'bar',
                        'bar': _0x22fb30(444)
                    }), expect(_0x58f4b6[_0x22fb30(438)][_0x22fb30(436)])['to'][_0x22fb30(439)]['eq']({
                        'value': 20,
                        'from': _0x22fb30(445)
                    }), expect(_0x58f4b6[_0x22fb30(438)][_0x22fb30(441)])['to'][_0x22fb30(439)]['eq']({
                        'value': 1234,
                        'from': _0x22fb30(440)
                    }), expect(_0x58f4b6[_0x22fb30(438)][_0x22fb30(404)][_0x22fb30(361)])['to'][_0x22fb30(439)]['eq']({
                        'value': _0x22fb30(444),
                        'from': _0x22fb30(445)
                    }), expect(_0x58f4b6['resolved']['env'][_0x22fb30(444)])['to'][_0x22fb30(439)]['eq']({
                        'value': _0x22fb30(444),
                        'from': _0x22fb30(440)
                    }), this[_0x22fb30(208)](0);
                });
            });
        }), describe(_0x3d5835(446), () => {
            beforeEach(() => {
                const _0x57a169 = _0x25a1;
                plugins[_0x57a169(199)]['restore'](), browsers[_0x57a169(264)]['restore']();
                const _0x2cf71a = new EE();
                _0x2cf71a[_0x57a169(447)] = () => {
                    const _0x1d6d92 = _0x57a169;
                    return _0x2cf71a[_0x1d6d92(448)](_0x1d6d92(209));
                }, _0x2cf71a[_0x57a169(449)] = () => {
                    const _0x560ef7 = _0x57a169;
                    return _0x2cf71a['emit'](_0x560ef7(450));
                }, _0x2cf71a[_0x57a169(451)] = () => {
                    return ![];
                }, _0x2cf71a[_0x57a169(452)] = () => {
                }, _0x2cf71a['focusOnWebView'] = () => {
                }, _0x2cf71a[_0x57a169(453)] = {
                    'debugger': {
                        'on': sinon[_0x57a169(196)](),
                        'attach': sinon[_0x57a169(196)](),
                        'sendCommand': sinon[_0x57a169(196)]()[_0x57a169(198)]()
                    },
                    'getOSProcessId': sinon[_0x57a169(196)](),
                    'setUserAgent': sinon[_0x57a169(196)](),
                    'session': {
                        'clearCache': sinon[_0x57a169(196)]()['resolves'](),
                        'setProxy': sinon[_0x57a169(196)]()[_0x57a169(198)](),
                        'setUserAgent': sinon[_0x57a169(196)](),
                        'on': sinon['stub'](),
                        'removeListener': sinon[_0x57a169(196)]()
                    }
                }, _0x2cf71a[_0x57a169(454)] = sinon[_0x57a169(196)], _0x2cf71a[_0x57a169(455)] = sinon[_0x57a169(196)], sinon[_0x57a169(196)](launch, _0x57a169(456))[_0x57a169(198)](_0x2cf71a), sinon[_0x57a169(196)](Windows, 'create')[_0x57a169(200)](_0x2cf71a);
            }), context('before:browser:launch', () => {
                const _0x415e85 = _0x25a1;
                it('chrome', function () {
                    const _0xd39a48 = _0x25a1, _0x1bc3d2 = {
                            'ensureMinimumProtocolVersion': sinon[_0xd39a48(196)]()[_0xd39a48(198)](),
                            'close': sinon[_0xd39a48(196)]()['resolves'](),
                            'on': sinon[_0xd39a48(196)](),
                            'send': sinon[_0xd39a48(196)]()
                        };
                    return sinon['stub'](chromeBrowser, _0xd39a48(457))['resolves'](), sinon[_0xd39a48(196)](chromeBrowser, _0xd39a48(458))[_0xd39a48(198)](_0x1bc3d2), sinon[_0xd39a48(196)](chromeBrowser, _0xd39a48(459))[_0xd39a48(198)](), sinon[_0xd39a48(196)](chromeBrowser, '_handleDownloads')[_0xd39a48(198)](), sinon[_0xd39a48(196)](chromeBrowser, _0xd39a48(460))[_0xd39a48(200)](), cypress['start']([
                        _0xd39a48(270) + this['pluginBrowser'],
                        _0xd39a48(461)
                    ])[_0xd39a48(229)](() => {
                        const _0x377f46 = _0xd39a48, {args: _0x40360c} = launch['launch'][_0x377f46(274)], _0x3da856 = _[_0x377f46(373)](TYPICAL_BROWSERS, { 'name': _0x377f46(160) }), _0x2a0b7a = R[_0x377f46(462)](_0x3da856, {
                                'isHeadless': !![],
                                'isHeaded': ![]
                            });
                        expect(_0x40360c[0], _0x377f46(463))['to'][_0x377f46(439)]['eq'](_0x2a0b7a);
                        const _0x194631 = _0x40360c[2];
                        expect(_0x194631[_0x377f46(464)](0, 4), _0x377f46(465))['to']['deep']['eq']([
                            _0x377f46(160),
                            _0x377f46(361),
                            _0x377f46(444),
                            _0x377f46(466)
                        ]), this[_0x377f46(208)](0), expect(chromeBrowser[_0x377f46(459)])['to']['have'][_0x377f46(282)][_0x377f46(272)], expect(chromeBrowser[_0x377f46(460)])['to'][_0x377f46(281)][_0x377f46(282)][_0x377f46(272)], expect(chromeBrowser['_connectToChromeRemoteInterface'])['to'][_0x377f46(281)][_0x377f46(282)][_0x377f46(272)];
                    });
                }), it(_0x415e85(128), function () {
                    const _0x219643 = _0x415e85, _0x1f0f2a = sinon[_0x219643(196)]();
                    return videoCapture[_0x219643(197)][_0x219643(200)]({ 'writeVideoFrame': _0x1f0f2a }), cypress[_0x219643(197)]([
                        _0x219643(270) + this[_0x219643(193)],
                        _0x219643(284)
                    ])[_0x219643(229)](() => {
                        const _0x29cb2a = _0x219643;
                        expect(Windows['create'])['to']['be']['calledWithMatch'](this[_0x29cb2a(193)], {
                            'browser': _0x29cb2a(128),
                            'foo': _0x29cb2a(444),
                            'onNewWindow': sinon[_0x29cb2a(467)][_0x29cb2a(468)],
                            'onScreencastFrame': sinon['match']['func']
                        }), this['expectExitWith'](0);
                    });
                });
            });
        }), describe(_0x3d5835(469), () => {
            const _0x4ae106 = _0x3d5835;
            beforeEach(() => {
                const _0x495fb2 = _0x25a1;
                return runMode[_0x495fb2(263)][_0x495fb2(198)]({ 'stats': { 'failures': 0 } });
            }), it(_0x4ae106(470), function () {
                const _0x209789 = _0x4ae106, _0x13dfec = sinon[_0x209789(268)](http['Server'][_0x209789(203)], 'listen'), _0xa51aa7 = sinon['spy'](ServerE2E[_0x209789(203)], 'open');
                return cypress['start']([
                    _0x209789(270) + this[_0x209789(185)],
                    '--port=5544'
                ])['then'](() => {
                    const _0x3678fe = _0x209789;
                    expect(openProject[_0x3678fe(427)]()[_0x3678fe(344)][_0x3678fe(471)])['to']['eq'](5544), expect(_0x13dfec)['to']['be'][_0x3678fe(210)](5544), expect(_0xa51aa7)['to']['be'][_0x3678fe(212)]({ 'port': 5544 }), this['expectExitWith'](0);
                });
            }), it(_0x4ae106(472), async function () {
                const _0x1a533e = _0x4ae106;
                sinon[_0x1a533e(196)](ProjectBase[_0x1a533e(203)], _0x1a533e(473))[_0x1a533e(200)]({
                    'use': () => {
                    }
                });
                let _0x4eee4a = http['createServer']();
                return _0x4eee4a = Promise[_0x1a533e(474)](_0x4eee4a), _0x4eee4a[_0x1a533e(475)](5544, _0x1a533e(476))[_0x1a533e(229)](() => {
                    const _0x339527 = _0x1a533e;
                    return cypress[_0x339527(197)]([
                        _0x339527(270) + this[_0x339527(185)],
                        '--port=5544'
                    ]);
                })[_0x1a533e(229)](() => {
                    const _0x186218 = _0x1a533e;
                    this['expectExitWithErr'](_0x186218(477), _0x186218(478));
                });
            });
        }), describe(_0x3d5835(237), () => {
            beforeEach(() => {
                const _0x4fa72c = _0x25a1;
                return process[_0x4fa72c(404)] = _[_0x4fa72c(479)](process[_0x4fa72c(404)], _0x4fa72c(480)), runMode['listenForProjectEnd'][_0x4fa72c(198)]({ 'stats': { 'failures': 0 } });
            }), it('can set specific environment variables', function () {
                const _0xab43bc = _0x25a1;
                return cypress[_0xab43bc(197)]([
                    _0xab43bc(270) + this[_0xab43bc(185)],
                    _0xab43bc(481),
                    '--env',
                    _0xab43bc(482)
                ])['then'](() => {
                    const _0x9bde1e = _0xab43bc;
                    expect(openProject['getProject']()[_0x9bde1e(344)][_0x9bde1e(404)])['to']['deep']['eq']({
                        'version': '0.12.1',
                        'foo': _0x9bde1e(444),
                        'host': _0x9bde1e(483),
                        'baz': 'quux=dolor'
                    }), this[_0x9bde1e(208)](0);
                });
            }), it('parses environment variables with empty values', function () {
                const _0xbb3e5c = _0x25a1;
                return cypress[_0xbb3e5c(197)]([
                    _0xbb3e5c(270) + this[_0xbb3e5c(185)],
                    _0xbb3e5c(481),
                    _0xbb3e5c(484)
                ])[_0xbb3e5c(229)](() => {
                    const _0x22d317 = _0xbb3e5c;
                    expect(openProject[_0x22d317(427)]()['cfg'][_0x22d317(404)])['to'][_0x22d317(439)]['eq']({
                        'FOO': '',
                        'BAR': '',
                        'BAZ': 'ipsum'
                    }), this[_0x22d317(208)](0);
                });
            });
        }), describe(_0x3d5835(485), () => {
            const _0x3f6a65 = _0x3d5835;
            it(_0x3f6a65(486), function () {
                const _0x2c7ceb = _0x3f6a65;
                return fs[_0x2c7ceb(311)](path['join'](this[_0x2c7ceb(187)], _0x2c7ceb(328)))[_0x2c7ceb(229)](() => {
                    const _0x3f893b = _0x2c7ceb;
                    throw new Error(_0x3f893b(487));
                })[_0x2c7ceb(291)]({ 'code': _0x2c7ceb(325) }, () => {
                    const _0x3ef9b4 = _0x2c7ceb;
                    return cypress[_0x3ef9b4(197)]([
                        _0x3ef9b4(270) + this['pristinePath'],
                        '--no-run-mode',
                        '--config-file',
                        'false'
                    ])[_0x3ef9b4(229)](() => {
                        this['expectExitWith'](0);
                    });
                });
            }), it('with a custom config file fails when it doesn\'t exist', function () {
                const _0xe9d9d3 = _0x3f6a65;
                return this['filename'] = _0xe9d9d3(488), fs['statAsync'](path[_0xe9d9d3(178)](this[_0xe9d9d3(185)], this[_0xe9d9d3(489)]))['then'](() => {
                    const _0x4ce1f6 = _0xe9d9d3;
                    throw new Error(this[_0x4ce1f6(489)] + _0x4ce1f6(490));
                })[_0xe9d9d3(291)]({ 'code': 'ENOENT' }, () => {
                    const _0x45b541 = _0xe9d9d3;
                    return cypress[_0x45b541(197)]([
                        _0x45b541(270) + this[_0x45b541(185)],
                        _0x45b541(312),
                        _0x45b541(485),
                        this[_0x45b541(489)]
                    ])['then'](() => {
                        const _0xfea737 = _0x45b541;
                        this[_0xfea737(211)](_0xfea737(331), this[_0xfea737(489)], this['todosPath']);
                    });
                });
            });
        });
    }), context(_0x3ba59b(491), () => {
        const _0x1d9a13 = _0x3ba59b;
        beforeEach(function () {
            const _0x26034e = _0x25a1;
            return sinon[_0x26034e(196)](api, _0x26034e(492))[_0x26034e(198)](), sinon[_0x26034e(196)](electron[_0x26034e(245)], 'on')[_0x26034e(261)](_0x26034e(246))[_0x26034e(247)](), sinon[_0x26034e(196)](browsers, _0x26034e(264)), sinon[_0x26034e(196)](runMode, _0x26034e(262))[_0x26034e(198)](), sinon[_0x26034e(196)](runMode, 'waitForTestsToFinishRunning')[_0x26034e(198)]({
                'stats': {
                    'tests': 1,
                    'passes': 2,
                    'failures': 3,
                    'pending': 4,
                    'skipped': 5,
                    'wallClockDuration': 6
                },
                'tests': [],
                'hooks': [],
                'video': _0x26034e(493),
                'shouldUploadVideo': !![],
                'screenshots': [],
                'config': {},
                'spec': {}
            }), Promise[_0x26034e(326)]([
                user[_0x26034e(354)]({}),
                getId(this[_0x26034e(185)])[_0x26034e(229)](_0x56aab8 => {
                    const _0xb0e0f7 = _0x26034e;
                    this[_0xb0e0f7(494)] = _0x56aab8;
                })
            ]);
        }), it(_0x1d9a13(495), function () {
            const _0x506b5a = _0x1d9a13;
            return sinon[_0x506b5a(196)](env, _0x506b5a(310))['withArgs'](_0x506b5a(496))['returns'](this['projectId']), cypress[_0x506b5a(197)]([
                _0x506b5a(250),
                _0x506b5a(270) + this[_0x506b5a(289)],
                _0x506b5a(491),
                _0x506b5a(497)
            ])[_0x506b5a(229)](() => {
                const _0x4f8198 = _0x506b5a;
                expect(api[_0x4f8198(492)])['to']['be'][_0x4f8198(212)]({ 'projectId': this[_0x4f8198(494)] }), expect(errors[_0x4f8198(255)])[_0x4f8198(259)]['to']['be'][_0x4f8198(290)], this[_0x4f8198(208)](3);
            });
        }), it('uses process.env.CYPRESS_RECORD_KEY', function () {
            const _0x4fce00 = _0x1d9a13;
            return sinon[_0x4fce00(196)](env, _0x4fce00(310))[_0x4fce00(261)](_0x4fce00(496))[_0x4fce00(200)]('foo-project-123')[_0x4fce00(261)](_0x4fce00(498))[_0x4fce00(200)]('token'), cypress[_0x4fce00(197)]([
                '--cwd=/foo/bar',
                _0x4fce00(270) + this[_0x4fce00(289)],
                _0x4fce00(491)
            ])[_0x4fce00(229)](() => {
                const _0x91d708 = _0x4fce00;
                expect(api[_0x91d708(492)])['to']['be'][_0x91d708(212)]({
                    'projectId': 'foo-project-123',
                    'recordKey': 'token'
                }), expect(errors[_0x91d708(255)])[_0x91d708(259)]['to']['be'][_0x91d708(290)], this[_0x91d708(208)](3);
            });
        }), it(_0x1d9a13(499), function () {
            const _0x459a5f = _0x1d9a13;
            return sinon[_0x459a5f(196)](ciProvider, _0x459a5f(500))[_0x459a5f(200)](null), cypress['start']([
                _0x459a5f(270) + this[_0x459a5f(501)],
                _0x459a5f(491),
                _0x459a5f(497),
                _0x459a5f(502)
            ])[_0x459a5f(229)](() => {
                const _0x4b8bb1 = _0x459a5f;
                return this[_0x4b8bb1(211)](_0x4b8bb1(503)), snapshotConsoleLogs(_0x4b8bb1(504));
            });
        }), it(_0x1d9a13(505), function () {
            const _0x11b0e5 = _0x1d9a13;
            return sinon[_0x11b0e5(196)](ciProvider, _0x11b0e5(500))[_0x11b0e5(200)](null), cypress[_0x11b0e5(197)]([
                _0x11b0e5(270) + this[_0x11b0e5(501)],
                '--record',
                '--key=token-123',
                '--parallel'
            ])[_0x11b0e5(229)](() => {
                const _0x50dd4d = _0x11b0e5;
                return this['expectExitWithErr'](_0x50dd4d(503)), snapshotConsoleLogs(_0x50dd4d(506));
            });
        }), it('errors and exits when using --parallel and --group but ciBuildId could not be generated', function () {
            const _0x51554f = _0x1d9a13;
            return sinon[_0x51554f(196)](ciProvider, 'provider')[_0x51554f(200)](null), cypress[_0x51554f(197)]([
                _0x51554f(270) + this[_0x51554f(501)],
                _0x51554f(491),
                '--key=token-123',
                '--group=e2e-tests-chrome',
                '--parallel'
            ])[_0x51554f(229)](() => {
                const _0x3de400 = _0x51554f;
                return this[_0x3de400(211)](_0x3de400(503)), snapshotConsoleLogs(_0x3de400(507));
            });
        }), it('errors and exits when using --ci-build-id with no group or parallelization', function () {
            const _0xd6436 = _0x1d9a13;
            return cypress[_0xd6436(197)]([
                _0xd6436(270) + this['recordPath'],
                '--record',
                _0xd6436(497),
                _0xd6436(508)
            ])[_0xd6436(229)](() => {
                const _0x5ea679 = _0xd6436;
                return this[_0x5ea679(211)](_0x5ea679(509)), snapshotConsoleLogs('INCORRECT_CI_BUILD_ID_USAGE 1');
            });
        }), it(_0x1d9a13(510), function () {
            const _0x2a4c2d = _0x1d9a13;
            return cypress[_0x2a4c2d(197)]([
                _0x2a4c2d(270) + this['recordPath'],
                _0x2a4c2d(508)
            ])['then'](() => {
                const _0x209def = _0x2a4c2d;
                return this[_0x209def(211)](_0x209def(511)), snapshotConsoleLogs('RECORD_PARAMS_WITHOUT_RECORDING-ciBuildId 1');
            });
        }), it(_0x1d9a13(512), function () {
            const _0x130232 = _0x1d9a13;
            return cypress['start']([
                _0x130232(270) + this[_0x130232(501)],
                '--group=e2e-tests'
            ])['then'](() => {
                const _0x2ba299 = _0x130232;
                return this[_0x2ba299(211)](_0x2ba299(511)), snapshotConsoleLogs('RECORD_PARAMS_WITHOUT_RECORDING-group 1');
            });
        }), it('errors and exits when using --parallel without recording', function () {
            const _0x44fb99 = _0x1d9a13;
            return cypress[_0x44fb99(197)]([
                _0x44fb99(270) + this[_0x44fb99(501)],
                _0x44fb99(513)
            ])[_0x44fb99(229)](() => {
                const _0x5c771a = _0x44fb99;
                return this['expectExitWithErr'](_0x5c771a(511)), snapshotConsoleLogs(_0x5c771a(514));
            });
        }), it(_0x1d9a13(515), function () {
            const _0x541c68 = _0x1d9a13;
            return cypress[_0x541c68(197)]([
                '--run-project=' + this[_0x541c68(501)],
                _0x541c68(516)
            ])[_0x541c68(229)](() => {
                const _0x4a2d7b = _0x541c68;
                return this[_0x4a2d7b(211)](_0x4a2d7b(511)), snapshotConsoleLogs(_0x4a2d7b(517));
            });
        }), it('errors and exits when using --group and --parallel without recording', function () {
            const _0x26271f = _0x1d9a13;
            return cypress[_0x26271f(197)]([
                '--run-project=' + this[_0x26271f(501)],
                _0x26271f(516),
                '--group=electron-smoke-tests',
                _0x26271f(513)
            ])[_0x26271f(229)](() => {
                const _0x5c3c62 = _0x26271f;
                return this['expectExitWithErr'](_0x5c3c62(511)), snapshotConsoleLogs('RECORD_PARAMS_WITHOUT_RECORDING-group-parallel 1');
            });
        }), it(_0x1d9a13(518), function () {
            const _0x503c2d = _0x1d9a13, _0x17f5aa = new Error();
            return _0x17f5aa[_0x503c2d(519)] = 422, _0x17f5aa[_0x503c2d(520)] = {
                'code': _0x503c2d(521),
                'payload': { 'runUrl': _0x503c2d(522) }
            }, api[_0x503c2d(492)][_0x503c2d(363)](_0x17f5aa), cypress[_0x503c2d(197)]([
                _0x503c2d(270) + this['recordPath'],
                _0x503c2d(491),
                _0x503c2d(497),
                _0x503c2d(523),
                _0x503c2d(524)
            ])[_0x503c2d(229)](() => {
                const _0x23897f = _0x503c2d;
                return this[_0x23897f(211)](_0x23897f(525)), snapshotConsoleLogs(_0x23897f(526));
            });
        }), it(_0x1d9a13(527), function () {
            const _0x2b8a6a = _0x1d9a13;
            sinon[_0x2b8a6a(196)](system, _0x2b8a6a(528))['returns']({
                'osName': _0x2b8a6a(529),
                'osVersion': 'v1'
            }), sinon[_0x2b8a6a(196)](browsers, _0x2b8a6a(530))[_0x2b8a6a(198)]({
                'version': _0x2b8a6a(531),
                'displayName': _0x2b8a6a(171)
            });
            const _0x34c79b = new Error();
            return _0x34c79b[_0x2b8a6a(519)] = 422, _0x34c79b['error'] = {
                'code': 'PARALLEL_GROUP_PARAMS_MISMATCH',
                'payload': { 'runUrl': 'https://dashboard.cypress.io/runs/12345' }
            }, api['createRun']['rejects'](_0x34c79b), cypress[_0x2b8a6a(197)]([
                _0x2b8a6a(270) + this[_0x2b8a6a(501)],
                _0x2b8a6a(491),
                '--key=token-123',
                _0x2b8a6a(513),
                _0x2b8a6a(523),
                _0x2b8a6a(524)
            ])[_0x2b8a6a(229)](() => {
                const _0x57aed6 = _0x2b8a6a;
                return this[_0x57aed6(211)](_0x57aed6(532)), snapshotConsoleLogs(_0x57aed6(533));
            });
        }), it('errors and exits when parallel is not allowed', function () {
            const _0xd32e35 = _0x1d9a13, _0x2b8524 = new Error();
            return _0x2b8524[_0xd32e35(519)] = 422, _0x2b8524[_0xd32e35(520)] = {
                'code': _0xd32e35(534),
                'payload': { 'runUrl': _0xd32e35(522) }
            }, api['createRun']['rejects'](_0x2b8524), cypress['start']([
                _0xd32e35(270) + this[_0xd32e35(501)],
                _0xd32e35(491),
                _0xd32e35(497),
                '--parallel',
                _0xd32e35(523),
                _0xd32e35(524)
            ])[_0xd32e35(229)](() => {
                const _0x458d47 = _0xd32e35;
                return this['expectExitWithErr'](_0x458d47(535)), snapshotConsoleLogs(_0x458d47(536));
            });
        }), it(_0x1d9a13(537), function () {
            const _0x1da925 = _0x1d9a13, _0x5d4c9b = new Error();
            return _0x5d4c9b[_0x1da925(519)] = 422, _0x5d4c9b[_0x1da925(520)] = {
                'code': _0x1da925(538),
                'payload': { 'runUrl': _0x1da925(522) }
            }, api[_0x1da925(492)][_0x1da925(363)](_0x5d4c9b), cypress[_0x1da925(197)]([
                _0x1da925(270) + this['recordPath'],
                _0x1da925(491),
                '--key=token-123',
                _0x1da925(513),
                '--tag=nightly',
                _0x1da925(523),
                _0x1da925(524)
            ])[_0x1da925(229)](() => {
                const _0x36d353 = _0x1da925;
                return this[_0x36d353(211)](_0x36d353(539)), snapshotConsoleLogs(_0x36d353(540));
            });
        }), it(_0x1d9a13(541), function () {
            const _0x1b8b2a = _0x1d9a13, _0x5d8c24 = new Error();
            return _0x5d8c24['statusCode'] = 422, _0x5d8c24[_0x1b8b2a(520)] = {
                'code': _0x1b8b2a(542),
                'payload': { 'runUrl': _0x1b8b2a(522) }
            }, api[_0x1b8b2a(492)]['rejects'](_0x5d8c24), cypress['start']([
                _0x1b8b2a(270) + this['recordPath'],
                _0x1b8b2a(491),
                _0x1b8b2a(497),
                _0x1b8b2a(516),
                _0x1b8b2a(523),
                '--ciBuildId=ciBuildId123'
            ])[_0x1b8b2a(229)](() => {
                const _0x10438f = _0x1b8b2a;
                return this[_0x10438f(211)]('DASHBOARD_ALREADY_COMPLETE'), snapshotConsoleLogs(_0x10438f(543));
            });
        }), it(_0x1d9a13(544), function () {
            const _0x1278ff = _0x1d9a13, _0x370577 = new Error();
            return _0x370577[_0x1278ff(519)] = 422, _0x370577[_0x1278ff(520)] = {
                'code': _0x1278ff(545),
                'payload': { 'runUrl': _0x1278ff(522) }
            }, api[_0x1278ff(492)][_0x1278ff(363)](_0x370577), cypress[_0x1278ff(197)]([
                _0x1278ff(270) + this[_0x1278ff(501)],
                _0x1278ff(491),
                '--key=token-123',
                '--parallel',
                _0x1278ff(516),
                _0x1278ff(523),
                _0x1278ff(524)
            ])['then'](() => {
                const _0x3604d2 = _0x1278ff;
                return this['expectExitWithErr']('DASHBOARD_STALE_RUN'), snapshotConsoleLogs(_0x3604d2(546));
            });
        });
    }), context(_0x3ba59b(547), () => {
        const _0x3b64c3 = _0x3ba59b;
        beforeEach(() => {
            const _0x18884d = _0x25a1;
            console[_0x18884d(175)][_0x18884d(548)](), sinon[_0x18884d(196)](console, _0x18884d(175));
        }), it(_0x3b64c3(549), function () {
            const _0x3429ef = _0x3b64c3;
            return cypress[_0x3429ef(197)]([_0x3429ef(547)])[_0x3429ef(229)](() => {
                const _0x3e4b70 = _0x3429ef;
                expect(console[_0x3e4b70(175)])['to']['be']['calledWithMatch'](_0x3e4b70(550)), this['expectExitWith'](0);
            });
        });
    }), context(_0x3ba59b(551), () => {
        const _0x5c63f3 = _0x3ba59b;
        beforeEach(() => {
            const _0x4bccea = _0x25a1;
            console[_0x4bccea(175)]['restore'](), sinon[_0x4bccea(196)](console, _0x4bccea(175));
        }), it(_0x5c63f3(552), function () {
            const _0x3bfdb3 = _0x5c63f3;
            return cypress[_0x3bfdb3(197)]([_0x3bfdb3(551)])['then'](() => {
                const _0x45f6b6 = _0x3bfdb3;
                expect(console[_0x45f6b6(175)])['to']['be'][_0x45f6b6(210)](pkg[_0x45f6b6(206)]), this[_0x45f6b6(208)](0);
            });
        });
    }), context(_0x3ba59b(553), () => {
        const _0x53173b = _0x3ba59b;
        beforeEach(() => {
            const _0x4d9fca = _0x25a1;
            console[_0x4d9fca(175)]['restore'](), sinon['stub'](console, _0x4d9fca(175));
        }), it(_0x53173b(554), function () {
            const _0x29383a = _0x53173b;
            return cypress[_0x29383a(197)]([
                _0x29383a(553),
                _0x29383a(555)
            ])['then'](() => {
                const _0x31468c = _0x29383a;
                expect(console[_0x31468c(175)])['to']['be'][_0x31468c(210)](_0x31468c(358)), this[_0x31468c(208)](0);
            });
        });
    }), context(_0x3ba59b(556), () => {
        const _0x1d861f = _0x3ba59b;
        beforeEach(function () {
            const _0x25e231 = _0x25a1;
            this[_0x25e231(244)] = {
                'on': sinon['stub'](),
                'webContents': { 'on': sinon[_0x25e231(196)]() }
            }, sinon[_0x25e231(196)](electron['app'], 'on')[_0x25e231(261)](_0x25e231(246))[_0x25e231(247)](), sinon[_0x25e231(196)](Windows, _0x25e231(264))[_0x25e231(198)](this['win']), sinon[_0x25e231(196)](ServerE2E[_0x25e231(203)], _0x25e231(557)), sinon['spy'](Events, _0x25e231(197)), sinon[_0x25e231(196)](electron[_0x25e231(558)], 'on');
        }), it('passes options to interactiveMode.ready', () => {
            const _0x246029 = _0x25a1;
            return sinon[_0x246029(196)](interactiveMode, _0x246029(246)), cypress[_0x246029(197)]([
                _0x246029(559),
                '--port=2121',
                _0x246029(560)
            ])[_0x246029(229)](() => {
                expect(interactiveMode['ready'])['to']['be']['calledWithMatch']({
                    'updating': !![],
                    'config': {
                        'port': 2121,
                        'pageLoadTimeout': 1000
                    }
                });
            });
        }), it(_0x1d861f(561), () => {
            const _0x3e5516 = _0x1d861f;
            return cypress['start']([
                _0x3e5516(562),
                _0x3e5516(560)
            ])['then'](() => {
                const _0x1d0525 = _0x3e5516;
                expect(Events['start'])['to']['be'][_0x1d0525(212)]({
                    'config': {
                        'pageLoadTimeout': 1000,
                        'port': 2121
                    }
                });
            });
        }), it(_0x1d861f(563), function () {
            const _0x46b648 = _0x1d861f, _0x30e540 = sinon['stub'](ServerE2E['prototype'], 'open')[_0x46b648(198)]([]);
            return process[_0x46b648(404)][_0x46b648(564)] = 'foo', process[_0x46b648(404)][_0x46b648(405)] = 'http://localhost', process['env'][_0x46b648(565)] = _0x46b648(566), process['env']['CYPRESS_responseTimeout'] = _0x46b648(567), process['env']['CYPRESS_watch_for_file_changes'] = _0x46b648(437), user[_0x46b648(354)]({
                'name': _0x46b648(568),
                'authToken': 'auth-token-123'
            })[_0x46b648(229)](() => {
                const _0x3b4793 = _0x46b648;
                return settings['read'](this[_0x3b4793(185)]);
            })[_0x46b648(229)](_0x24aefb => {
                const _0xee8239 = _0x46b648;
                return _0x24aefb[_0xee8239(569)] = _0xee8239(570), settings[_0xee8239(352)](this[_0xee8239(185)], _0x24aefb);
            })[_0x46b648(229)](() => {
                const _0x183ec6 = _0x46b648;
                return cypress['start']([
                    _0x183ec6(562),
                    _0x183ec6(232),
                    _0x183ec6(571),
                    _0x183ec6(572),
                    _0x183ec6(573)
                ]);
            })[_0x46b648(229)](() => {
                const _0x3b6c15 = _0x46b648, _0x722b14 = Events['start'][_0x3b6c15(274)][_0x3b6c15(176)][0];
                return Events[_0x3b6c15(574)](_0x722b14, {}, {}, 123, 'open:project', this[_0x3b6c15(185)]);
            })[_0x46b648(229)](() => {
                const _0x1b9c2c = _0x46b648, _0x3723bb = openProject['getProject']()[_0x1b9c2c(575)];
                expect(_0x3723bb[_0x1b9c2c(471)])['to']['eq'](2121), expect(_0x3723bb[_0x1b9c2c(576)])['to']['eq'](1000), expect(_0x3723bb[_0x1b9c2c(577)])['to']['eq'](![]), expect(_0x3723bb['env'])['to'][_0x1b9c2c(578)]({ 'baz': _0x1b9c2c(466) }), expect(_0x30e540)['to']['be'][_0x1b9c2c(290)];
                const _0x5705a4 = _0x30e540[_0x1b9c2c(579)](0)[_0x1b9c2c(176)][0];
                expect(_0x5705a4[_0x1b9c2c(580)])['to']['eq'](path['join'](this[_0x1b9c2c(185)], _0x1b9c2c(361))), expect(_0x5705a4[_0x1b9c2c(576)])['to']['eq'](1000), expect(_0x5705a4[_0x1b9c2c(471)])['to']['eq'](2121), expect(_0x5705a4['baseUrl'])['to']['eq'](_0x1b9c2c(581)), expect(_0x5705a4[_0x1b9c2c(582)])['to']['be']['false'], expect(_0x5705a4['responseTimeout'])['to']['eq'](5555), expect(_0x5705a4[_0x1b9c2c(404)][_0x1b9c2c(466)])['to']['eq'](_0x1b9c2c(466)), expect(_0x5705a4[_0x1b9c2c(404)])[_0x1b9c2c(259)]['to'][_0x1b9c2c(281)][_0x1b9c2c(323)](_0x1b9c2c(580)), expect(_0x5705a4['env'])[_0x1b9c2c(259)]['to'][_0x1b9c2c(281)]['property'](_0x1b9c2c(471)), expect(_0x5705a4[_0x1b9c2c(404)])[_0x1b9c2c(259)]['to'][_0x1b9c2c(281)][_0x1b9c2c(323)]('BASE_URL'), expect(_0x5705a4[_0x1b9c2c(404)])[_0x1b9c2c(259)]['to']['have'][_0x1b9c2c(323)](_0x1b9c2c(582)), expect(_0x5705a4['env'])['not']['to'][_0x1b9c2c(281)]['property'](_0x1b9c2c(583)), expect(_0x5705a4[_0x1b9c2c(438)][_0x1b9c2c(580)])['to'][_0x1b9c2c(439)]['eq']({
                    'value': _0x1b9c2c(361),
                    'from': 'env'
                }), expect(_0x5705a4[_0x1b9c2c(438)][_0x1b9c2c(576)])['to'][_0x1b9c2c(439)]['eq']({
                    'value': 1000,
                    'from': _0x1b9c2c(440)
                }), expect(_0x5705a4[_0x1b9c2c(438)][_0x1b9c2c(471)])['to'][_0x1b9c2c(439)]['eq']({
                    'value': 2121,
                    'from': _0x1b9c2c(440)
                }), expect(_0x5705a4[_0x1b9c2c(438)]['baseUrl'])['to'][_0x1b9c2c(439)]['eq']({
                    'value': _0x1b9c2c(581),
                    'from': 'env'
                }), expect(_0x5705a4[_0x1b9c2c(438)][_0x1b9c2c(582)])['to'][_0x1b9c2c(439)]['eq']({
                    'value': ![],
                    'from': _0x1b9c2c(404)
                }), expect(_0x5705a4[_0x1b9c2c(438)]['responseTimeout'])['to'][_0x1b9c2c(439)]['eq']({
                    'value': 5555,
                    'from': _0x1b9c2c(404)
                }), expect(_0x5705a4[_0x1b9c2c(438)][_0x1b9c2c(404)][_0x1b9c2c(466)])['to'][_0x1b9c2c(439)]['eq']({
                    'value': _0x1b9c2c(466),
                    'from': _0x1b9c2c(440)
                });
            });
        }), it('sends warning when baseUrl cannot be verified', function () {
            const _0x54e2c0 = _0x1d861f, _0x4d3848 = new EE(), _0x337423 = { 'sender': { 'send': sinon[_0x54e2c0(196)]() } }, _0x4e1d59 = { 'message': _0x54e2c0(584) };
            return sinon[_0x54e2c0(196)](ServerE2E['prototype'], _0x54e2c0(264))[_0x54e2c0(198)]([
                2121,
                _0x4e1d59
            ]), cypress[_0x54e2c0(197)]([
                _0x54e2c0(562),
                _0x54e2c0(232),
                'pageLoadTimeout=1000',
                _0x54e2c0(572),
                _0x54e2c0(573)
            ])[_0x54e2c0(229)](() => {
                const _0x3ca8cf = _0x54e2c0, _0x119a6b = Events[_0x3ca8cf(197)][_0x3ca8cf(274)][_0x3ca8cf(176)][0];
                return Events['handleEvent'](_0x119a6b, _0x4d3848, _0x337423, 123, _0x3ca8cf(585)), Events[_0x3ca8cf(574)](_0x119a6b, _0x4d3848, _0x337423, 123, _0x3ca8cf(586), this[_0x3ca8cf(185)]);
            })[_0x54e2c0(229)](() => {
                const _0x2f3ba5 = _0x54e2c0;
                expect(_0x337423['sender']['send']['withArgs']('response')[_0x2f3ba5(274)][_0x2f3ba5(176)][1]['data'])['to'][_0x2f3ba5(578)](_0x4e1d59);
            });
        }), describe(_0x1d861f(485), () => {
            const _0x5af9f5 = _0x1d861f;
            beforeEach(function () {
                const _0x57c831 = _0x25a1;
                this[_0x57c831(489)] = _0x57c831(587), this[_0x57c831(264)] = sinon[_0x57c831(196)](ServerE2E[_0x57c831(203)], 'open')[_0x57c831(198)]([]);
            }), it(_0x5af9f5(588), function () {
                const _0x14b73c = _0x5af9f5;
                return sinon[_0x14b73c(196)](fs, _0x14b73c(589)), fs['readJsonAsync']['withArgs'](path[_0x14b73c(178)](this[_0x14b73c(187)], this[_0x14b73c(489)]))[_0x14b73c(198)]({
                    'env': { 'foo': _0x14b73c(444) },
                    'port': 2020
                }), fs[_0x14b73c(589)][_0x14b73c(590)](), cypress[_0x14b73c(197)]([_0x14b73c(591) + this[_0x14b73c(489)]])['then'](() => {
                    const _0x4712cc = _0x14b73c, _0x31c391 = Events[_0x4712cc(197)][_0x4712cc(274)][_0x4712cc(176)][0];
                    return Events[_0x4712cc(574)](_0x31c391, {}, {}, 123, _0x4712cc(586), this[_0x4712cc(187)]);
                })[_0x14b73c(229)](() => {
                    const _0x20c0d9 = _0x14b73c;
                    expect(this[_0x20c0d9(264)])['to']['be'][_0x20c0d9(290)];
                    const _0x5e99a7 = this['open'][_0x20c0d9(579)](0)[_0x20c0d9(176)][0];
                    expect(_0x5e99a7[_0x20c0d9(404)][_0x20c0d9(361)])['to'][_0x20c0d9(592)](_0x20c0d9(444)), expect(_0x5e99a7[_0x20c0d9(471)])['to'][_0x20c0d9(592)](2020);
                });
            }), it(_0x5af9f5(593), function () {
                const _0x599753 = _0x5af9f5;
                return cypress[_0x599753(197)]([_0x599753(591) + this[_0x599753(489)]])[_0x599753(229)](() => {
                    const _0x8abc8e = _0x599753;
                    debug(_0x8abc8e(594), this['filename']);
                    const _0x16593d = Events[_0x8abc8e(197)]['firstCall'][_0x8abc8e(176)][0];
                    return debug('first call arguments %o', Events[_0x8abc8e(197)][_0x8abc8e(274)][_0x8abc8e(176)]), Events[_0x8abc8e(574)](_0x16593d, {}, {}, 123, _0x8abc8e(586), this[_0x8abc8e(187)]);
                })['then'](() => {
                    const _0x4d6946 = _0x599753;
                    return expect(this[_0x4d6946(264)], _0x4d6946(595))['to']['be'][_0x4d6946(290)], fs[_0x4d6946(589)](path[_0x4d6946(178)](this[_0x4d6946(187)], this[_0x4d6946(489)]))[_0x4d6946(229)](_0x54a998 => {
                        const _0x4bc93b = _0x4d6946;
                        expect(_0x54a998, _0x4bc93b(596))['to'][_0x4bc93b(439)][_0x4bc93b(592)]({});
                    });
                });
            });
        });
    }), context(_0x3ba59b(597), () => {
        const _0x1cc9e0 = _0x3ba59b;
        beforeEach(() => {
            const _0x30ef52 = _0x25a1;
            errors[_0x30ef52(255)][_0x30ef52(548)](), sinon[_0x30ef52(196)](electron[_0x30ef52(245)], 'on')[_0x30ef52(261)](_0x30ef52(246))[_0x30ef52(247)](), sinon[_0x30ef52(196)](interactiveMode, _0x30ef52(246))['resolves'](), sinon[_0x30ef52(268)](errors, _0x30ef52(255));
        }), it(_0x1cc9e0(598), () => {
            const _0x2a7f79 = _0x1cc9e0;
            return cypress[_0x2a7f79(197)]()[_0x2a7f79(229)](() => {
                const _0x14fa2e = _0x2a7f79;
                expect(errors[_0x14fa2e(255)])['to']['be'][_0x14fa2e(210)](_0x14fa2e(599)), expect(console['log'])['to']['be'][_0x14fa2e(212)](_0x14fa2e(600)), expect(console[_0x14fa2e(175)])['to']['be'][_0x14fa2e(212)](_0x14fa2e(601));
            });
        }), it(_0x1cc9e0(602), () => {
            const _0x2b4981 = _0x1cc9e0;
            return cypress[_0x2b4981(197)]([_0x2b4981(250)])[_0x2b4981(229)](() => {
                const _0x33c7ad = _0x2b4981;
                expect(errors[_0x33c7ad(255)])[_0x33c7ad(259)]['to']['be'][_0x33c7ad(290)];
            });
        });
    }), context(_0x3ba59b(603), () => {
        const _0x54594e = _0x3ba59b;
        beforeEach(() => {
            const _0x3f35e1 = _0x25a1;
            sinon[_0x3f35e1(196)](electron[_0x3f35e1(245)], 'on')['withArgs'](_0x3f35e1(246))[_0x3f35e1(247)](), sinon[_0x3f35e1(196)](interactiveMode, 'ready')[_0x3f35e1(198)]();
        }), it(_0x54594e(604), () => {
            const _0x1831cf = _0x54594e;
            return cypress['start']()[_0x1831cf(229)](() => {
                expect(interactiveMode['ready'])['to']['be']['calledOnce'];
            });
        });
    });
});