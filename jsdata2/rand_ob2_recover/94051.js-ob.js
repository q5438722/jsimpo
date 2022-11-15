require(_0x4fd3cc(176));
const R = require(_0x4fd3cc(177)), _ = require('lodash'), path = require(_0x4fd3cc(178)), EE = require(_0x4fd3cc(179)), http = require(_0x4fd3cc(180)), Promise = require(_0x4fd3cc(181)), electron = require(_0x4fd3cc(182)), commitInfo = require('@cypress/commit-info'), Fixtures = require('../support/helpers/fixtures'), snapshot = require(_0x4fd3cc(183)), stripAnsi = require(_0x4fd3cc(184)), debug = require('debug')(_0x4fd3cc(185)), pkg = require(_0x4fd3cc(186)), detect = require(_0x4fd3cc(187)), launch = require('@packages/launcher/lib/browsers'), extension = require(_0x4fd3cc(188)), argsUtil = require(root + 'lib/util/args'), {fs} = require(root + _0x4fd3cc(189)), ciProvider = require(root + _0x4fd3cc(190)), settings = require(root + 'lib/util/settings'), Events = require(root + _0x4fd3cc(191)), Windows = require(root + 'lib/gui/windows'), interactiveMode = require(root + _0x4fd3cc(192)), runMode = require(root + 'lib/modes/run'), api = require(root + _0x4fd3cc(193)), cwd = require(root + 'lib/cwd'), user = require(root + 'lib/user'), config = require(root + _0x4fd3cc(194)), cache = require(root + _0x4fd3cc(195)), errors = require(root + _0x4fd3cc(196)), plugins = require(root + _0x4fd3cc(197)), cypress = require(root + _0x4fd3cc(198)), ProjectBase = require(root + _0x4fd3cc(199))[_0x4fd3cc(200)], {getId} = require(root + _0x4fd3cc(201)), {ServerE2E} = require(root + 'lib/server-e2e'), Reporter = require(root + _0x4fd3cc(202)), Watchers = require(root + _0x4fd3cc(203)), browsers = require(root + _0x4fd3cc(204)), videoCapture = require(root + 'lib/video_capture'), browserUtils = require(root + _0x4fd3cc(205)), chromeBrowser = require(root + _0x4fd3cc(206)), openProject = require(root + 'lib/open_project'), env = require(root + _0x4fd3cc(207)), v = require(root + _0x4fd3cc(208)), system = require(root + _0x4fd3cc(209)), appData = require(root + _0x4fd3cc(210)), electronApp = require('../../lib/util/electron-app'), savedState = require(root + _0x4fd3cc(211)), TYPICAL_BROWSERS = [
        {
            'name': _0x4fd3cc(212),
            'family': 'chromium',
            'channel': 'stable',
            'displayName': _0x4fd3cc(213),
            'version': _0x4fd3cc(214),
            'path': _0x4fd3cc(215),
            'majorVersion': '60'
        },
        {
            'name': _0x4fd3cc(216),
            'family': _0x4fd3cc(216),
            'channel': _0x4fd3cc(217),
            'displayName': _0x4fd3cc(218),
            'version': '49.0.2609.0',
            'path': '/Users/bmann/Downloads/chrome-mac/Chromium.app/Contents/MacOS/Chromium',
            'majorVersion': '49'
        },
        {
            'name': 'chrome',
            'family': _0x4fd3cc(216),
            'channel': _0x4fd3cc(219),
            'displayName': _0x4fd3cc(220),
            'version': _0x4fd3cc(221),
            'path': _0x4fd3cc(222),
            'majorVersion': '62'
        }
    ], ELECTRON_BROWSER = {
        'name': 'electron',
        'family': 'chromium',
        'displayName': _0x4fd3cc(223),
        'path': '',
        'version': _0x4fd3cc(224),
        'majorVersion': 99
    }, previousCwd = process[_0x4fd3cc(225)](), snapshotConsoleLogs = function (_0xdb4289) {
        const _0x4a50fb = _0x4fd3cc, _0x29cc9c = _[_0x4a50fb(226)](console[_0x4a50fb(227)][_0x4a50fb(228)])[_0x4a50fb(229)](_0x500d40 => {
                const _0x4ddd27 = _0x4a50fb;
                return _0x500d40[_0x4ddd27(230)](' ');
            })['join']('\n')[_0x4a50fb(231)]();
        return process[_0x4a50fb(232)](previousCwd), snapshot(_0xdb4289, stripAnsi(_0x29cc9c));
    };
function _0x4ba2(_0x19a283, _0x3dbc27) {
    return _0x4ba2 = function (_0x168c7f, _0x4ba27f) {
        _0x168c7f = _0x168c7f - 165;
        let _0x3a149f = _0x168c[_0x168c7f];
        return _0x3a149f;
    }, _0x4ba2(_0x19a283, _0x3dbc27);
}
describe(_0x4fd3cc(198), () => {
    const _0x1c5f20 = _0x4fd3cc;
    require(_0x1c5f20(233))[_0x1c5f20(234)](), beforeEach(function () {
        const _0x2454df = _0x1c5f20;
        this[_0x2454df(235)](8000), cache['__removeSync'](), Fixtures[_0x2454df(236)](), this[_0x2454df(237)] = Fixtures[_0x2454df(238)]('todos'), this['pristinePath'] = Fixtures[_0x2454df(238)](_0x2454df(239)), this[_0x2454df(240)] = Fixtures[_0x2454df(238)](_0x2454df(241)), this['recordPath'] = Fixtures[_0x2454df(238)](_0x2454df(242)), this['pluginConfig'] = Fixtures['projectPath']('plugin-config'), this[_0x2454df(243)] = Fixtures[_0x2454df(238)]('plugin-browser'), this[_0x2454df(244)] = Fixtures[_0x2454df(238)]('ids'), sinon['stub'](videoCapture, _0x2454df(245))[_0x2454df(246)]({}), sinon[_0x2454df(247)](plugins, 'init')[_0x2454df(246)](undefined), sinon[_0x2454df(247)](electronApp, _0x2454df(248))[_0x2454df(249)](!![]), sinon[_0x2454df(247)](extension, _0x2454df(250))[_0x2454df(246)](), sinon[_0x2454df(247)](detect, _0x2454df(251))[_0x2454df(246)](TYPICAL_BROWSERS), sinon[_0x2454df(247)](process, 'exit'), sinon[_0x2454df(247)](ServerE2E[_0x2454df(252)], _0x2454df(253)), sinon[_0x2454df(247)](errors, _0x2454df(254))[_0x2454df(255)]()[_0x2454df(256)]('INVOKED_BINARY_OUTSIDE_NPM_MODULE')['returns'](null), sinon[_0x2454df(257)](errors, _0x2454df(227)), sinon[_0x2454df(257)](errors, 'logException'), sinon[_0x2454df(257)](console, _0x2454df(227)), sinon[_0x2454df(247)](process, _0x2454df(258))[_0x2454df(231)]({
            'chrome': ELECTRON_BROWSER[_0x2454df(259)],
            'electron': _0x2454df(260)
        }), this[_0x2454df(261)] = _0x1b52b5 => {
            const _0x40c517 = _0x2454df;
            expect(process[_0x40c517(262)])['to']['be'][_0x40c517(263)](_0x1b52b5);
        }, this['expectExitWithErr'] = (_0x158225, _0x54701c, _0x248eef) => {
            const _0xe3c0ab = _0x2454df;
            expect(errors[_0xe3c0ab(227)], 'error was logged')['to']['be'][_0xe3c0ab(264)]({ 'type': _0x158225 }), expect(process[_0xe3c0ab(262)], _0xe3c0ab(265))['to']['be'][_0xe3c0ab(263)](1);
            const _0x5c02d7 = errors[_0xe3c0ab(227)][_0xe3c0ab(266)](0)['args'][0];
            return _0x54701c && expect(_0x5c02d7[_0xe3c0ab(267)], _0xe3c0ab(268))['to'][_0xe3c0ab(269)](_0x54701c), _0x248eef && expect(_0x5c02d7[_0xe3c0ab(267)], _0xe3c0ab(270))['to'][_0xe3c0ab(269)](_0x248eef), _0x5c02d7;
        };
    }), afterEach(async () => {
        const _0x57baf2 = _0x1c5f20;
        try {
            await openProject['close']();
        } catch (_0x1a49c5) {
        }
        Fixtures[_0x57baf2(271)]();
    }), context(_0x1c5f20(272), () => {
        const _0x409d28 = _0x1c5f20;
        it(_0x409d28(273), () => {
            const _0x18b252 = _0x409d28;
            expect(v['isValidBrowserList'](_0x18b252(274), TYPICAL_BROWSERS))['to']['be'][_0x18b252(275)];
        }), it(_0x409d28(276), () => {
            const _0x11eb77 = _0x409d28;
            expect(v[_0x11eb77(277)](_0x11eb77(274), [ELECTRON_BROWSER]))['to']['be']['true'];
        }), it(_0x409d28(278), () => {
            const _0x155eb5 = _0x409d28, _0x29cf1c = {
                    'name': _0x155eb5(279),
                    'family': _0x155eb5(216),
                    'displayName': 'Edge Beta',
                    'version': _0x155eb5(280),
                    'path': _0x155eb5(281),
                    'majorVersion': 80
                };
            expect(v[_0x155eb5(277)]('browsers', [_0x29cf1c]))['to']['be'][_0x155eb5(275)];
        }), it(_0x409d28(282), () => {
            const _0x560a6e = _0x409d28;
            return browserUtils['getBrowsers']()[_0x560a6e(283)](_0x4d137d => {
                const _0x30b47d = _0x560a6e;
                expect(v[_0x30b47d(277)](_0x30b47d(274), _0x4d137d))['to']['be']['true'];
            });
        });
    }), context(_0x1c5f20(284), function () {
        const _0x4ef22d = _0x1c5f20;
        it(_0x4ef22d(285), function () {
            const _0x394d47 = _0x4ef22d;
            return cypress[_0x394d47(245)]([
                _0x394d47(286),
                _0x394d47(287)
            ])[_0x394d47(283)](() => {
                const _0xe40e1d = _0x394d47, _0x4ec920 = this[_0xe40e1d(288)](_0xe40e1d(289));
                snapshot(_0xe40e1d(290), stripAnsi(_0x4ec920[_0xe40e1d(267)]));
            });
        }), it(_0x4ef22d(291), function () {
            const _0x274f72 = _0x4ef22d;
            return cypress[_0x274f72(245)]([
                _0x274f72(292),
                _0x274f72(293)
            ])[_0x274f72(283)](() => {
                const _0x26c306 = _0x274f72, _0x3fb6a6 = this[_0x26c306(288)](_0x26c306(289));
                snapshot(_0x26c306(294), stripAnsi(_0x3fb6a6[_0x26c306(267)]));
            });
        }), it('exits if reporter options cannot be parsed', function () {
            const _0x556ccd = _0x4ef22d;
            return cypress[_0x556ccd(245)]([
                _0x556ccd(295),
                'nonono'
            ])[_0x556ccd(283)](() => {
                const _0x18d4c4 = _0x556ccd, _0x1b1e9a = this[_0x18d4c4(288)](_0x18d4c4(289));
                snapshot(_0x18d4c4(296), stripAnsi(_0x1b1e9a[_0x18d4c4(267)]));
            });
        });
    }), context(_0x1c5f20(297), function () {
        const _0x5f445e = _0x1c5f20;
        beforeEach(function () {
            const _0x5275db = _0x4ba2;
            this[_0x5275db(298)] = {
                'on': sinon[_0x5275db(247)](),
                'webContents': { 'on': sinon[_0x5275db(247)]() }
            }, sinon[_0x5275db(247)](electron[_0x5275db(299)], 'on')[_0x5275db(256)](_0x5275db(300))['yieldsAsync'](), sinon[_0x5275db(247)](Windows, _0x5275db(301))[_0x5275db(246)](this[_0x5275db(298)]);
        }), it(_0x5f445e(302), function () {
            const _0x3cc961 = _0x5f445e;
            return cypress[_0x3cc961(245)]([
                _0x3cc961(303),
                '--cwd=/foo/bar'
            ])['then'](() => {
                const _0x3a8f99 = _0x3cc961;
                expect(errors['warning'])['to']['be'][_0x3a8f99(263)](_0x3a8f99(304)), expect(console[_0x3a8f99(227)])['to']['be'][_0x3a8f99(264)](_0x3a8f99(305)), expect(console[_0x3a8f99(227)])['to']['be'][_0x3a8f99(264)](_0x3a8f99(306));
            });
        }), it('shows warning when multiple config are not valid', function () {
            const _0x1daaa3 = _0x5f445e;
            return cypress['start']([
                _0x1daaa3(307),
                _0x1daaa3(308)
            ])[_0x1daaa3(283)](() => {
                const _0x36cd0e = _0x1daaa3;
                expect(errors[_0x36cd0e(254)])['to']['be'][_0x36cd0e(263)](_0x36cd0e(304)), expect(console[_0x36cd0e(227)])['to']['be'][_0x36cd0e(264)](_0x36cd0e(305)), expect(console['log'])['to']['be'][_0x36cd0e(264)](_0x36cd0e(309)), expect(console['log'])['to']['be']['calledWithMatch'](_0x36cd0e(306)), snapshotConsoleLogs(_0x36cd0e(304));
            });
        }), it(_0x5f445e(310), function () {
            const _0x4ea2be = _0x5f445e;
            return cypress[_0x4ea2be(245)]([_0x4ea2be(311)])['then'](() => {
                const _0x2d2484 = _0x4ea2be;
                expect(errors['warning'])['to'][_0x2d2484(312)]['be'][_0x2d2484(263)](_0x2d2484(304));
            });
        });
    }), context(_0x1c5f20(313), () => {
        const _0xbf942c = _0x1c5f20;
        beforeEach(() => {
            const _0x2fed1f = _0x4ba2;
            sinon[_0x2fed1f(247)](electron[_0x2fed1f(299)], 'on')['withArgs']('ready')[_0x2fed1f(314)](), sinon[_0x2fed1f(247)](runMode, _0x2fed1f(315))[_0x2fed1f(246)](), sinon[_0x2fed1f(247)](runMode, _0x2fed1f(316))[_0x2fed1f(246)]({ 'stats': { 'failures': 0 } }), sinon[_0x2fed1f(247)](browsers, _0x2fed1f(301)), sinon['stub'](commitInfo, _0x2fed1f(317))['resolves']('remoteOrigin');
        }), it(_0xbf942c(318), function () {
            const _0x24b179 = _0xbf942c;
            return cypress[_0x24b179(245)]([_0x24b179(319) + this[_0x24b179(237)]])['then'](() => {
                const _0x185037 = _0x24b179;
                expect(browsers[_0x185037(301)])['to']['be'][_0x185037(264)](ELECTRON_BROWSER), this['expectExitWith'](0);
            });
        }), it(_0xbf942c(320), function () {
            const _0x40d12c = _0xbf942c;
            return sinon[_0x40d12c(257)](cypress, 'startInMode'), cypress[_0x40d12c(245)]([
                '--run-project=' + this[_0x40d12c(237)],
                _0x40d12c(321)
            ])[_0x40d12c(283)](() => {
                const _0x2b7f5c = _0x40d12c;
                expect(browsers[_0x2b7f5c(301)])['to']['be']['calledWithMatch'](ELECTRON_BROWSER), this['expectExitWith'](0), expect(cypress[_0x2b7f5c(322)])['to']['be'][_0x2b7f5c(323)], expect(cypress[_0x2b7f5c(322)])['to']['be'][_0x2b7f5c(263)](_0x2b7f5c(324));
                const _0x58eaba = cypress['startInMode'][_0x2b7f5c(325)]['args'][1];
                expect(_0x58eaba)['to'][_0x2b7f5c(269)]({
                    'headless': !![],
                    'headed': ![]
                });
            });
        }), it(_0xbf942c(326), function () {
            const _0x2ba4eb = _0xbf942c;
            expect(() => cypress[_0x2ba4eb(245)]([
                _0x2ba4eb(319) + this[_0x2ba4eb(237)],
                _0x2ba4eb(321),
                _0x2ba4eb(327)
            ]))['to'][_0x2ba4eb(328)]('Impossible options: both headless and headed are true');
        }), describe(_0xbf942c(329), () => {
            const _0x39073e = _0xbf942c;
            beforeEach(() => {
                const _0x410a49 = _0x4ba2;
                sinon[_0x410a49(257)](argsUtil, _0x410a49(330));
            }), it('strips leading', function () {
                return cypress['start']([
                    '--',
                    '--run-project=' + this['todosPath']
                ])['then'](() => {
                    const _0x5282ee = _0x4ba2;
                    expect(argsUtil['toObject'])['to'][_0x5282ee(331)][_0x5282ee(332)][_0x5282ee(263)]([_0x5282ee(319) + this[_0x5282ee(237)]]), expect(browsers[_0x5282ee(301)])['to']['be']['calledWithMatch'](ELECTRON_BROWSER), this[_0x5282ee(261)](0);
                });
            }), it(_0x39073e(333), function () {
                const _0x23eb97 = _0x39073e;
                return cypress[_0x23eb97(245)]([
                    _0x23eb97(319) + this[_0x23eb97(237)],
                    '--',
                    '--browser=electron'
                ])[_0x23eb97(283)](() => {
                    const _0x3e5cde = _0x23eb97;
                    expect(argsUtil[_0x3e5cde(330)])['to']['have'][_0x3e5cde(332)][_0x3e5cde(263)]([
                        '--run-project=' + this['todosPath'],
                        _0x3e5cde(334)
                    ]), expect(browsers['open'])['to']['be']['calledWithMatch'](ELECTRON_BROWSER), this[_0x3e5cde(261)](0);
                });
            });
        }), it(_0xbf942c(335), function () {
            const _0x5d4fd8 = _0xbf942c;
            return sinon[_0x5d4fd8(247)](runMode, _0x5d4fd8(336))['resolves']({ 'totalFailed': 10 }), cypress[_0x5d4fd8(245)]([_0x5d4fd8(319) + this[_0x5d4fd8(237)]])[_0x5d4fd8(283)](() => {
                const _0x1c11d6 = _0x5d4fd8;
                this[_0x1c11d6(261)](10);
            });
        }), it(_0xbf942c(337), function () {
            const _0x5e9f29 = _0xbf942c;
            return sinon[_0x5e9f29(247)](api, 'createProject'), user['set']({ 'authToken': 'auth-token-123' })[_0x5e9f29(283)](() => {
                const _0x187451 = _0x5e9f29;
                return cypress[_0x187451(245)](['--run-project=' + this[_0x187451(240)]]);
            })[_0x5e9f29(283)](() => {
                const _0x10f366 = _0x5e9f29;
                this[_0x10f366(261)](0);
            })[_0x5e9f29(283)](() => {
                const _0x592e4e = _0x5e9f29;
                return expect(api[_0x592e4e(338)])['not']['to']['be'][_0x592e4e(339)], new ProjectBase({
                    'projectRoot': this['noScaffolding'],
                    'testingType': _0x592e4e(340)
                })[_0x592e4e(341)]()[_0x592e4e(283)](() => {
                    throw new Error('should have caught error but did not');
                })[_0x592e4e(342)](_0x2c404f => {
                    const _0x53c139 = _0x592e4e;
                    expect(_0x2c404f[_0x53c139(343)])['to']['eq'](_0x53c139(344));
                });
            });
        }), it('does not add project to the global cache', function () {
            const _0x110b33 = _0xbf942c;
            return cache['getProjectRoots']()[_0x110b33(283)](_0x544c8f => {
                const _0x401a4e = _0x110b33;
                return expect(_0x544c8f[_0x401a4e(345)])['to']['eq'](0), cypress[_0x401a4e(245)](['--run-project=' + this['todosPath']]);
            })[_0x110b33(283)](() => {
                const _0x1c9f53 = _0x110b33;
                return cache[_0x1c9f53(346)]();
            })[_0x110b33(283)](_0x5c5abb => {
                expect(_0x5c5abb['length'])['to']['eq'](0);
            });
        }), it('runs project by relative spec and exits with status 0', function () {
            const _0x55f0d9 = _0xbf942c, _0x573aa2 = path[_0x55f0d9(347)](cwd(), this[_0x55f0d9(237)]);
            return cypress[_0x55f0d9(245)]([
                _0x55f0d9(319) + this[_0x55f0d9(237)],
                '--spec=' + _0x573aa2 + _0x55f0d9(348)
            ])[_0x55f0d9(283)](() => {
                const _0xbd1f14 = _0x55f0d9;
                expect(browsers[_0xbd1f14(301)])['to']['be'][_0xbd1f14(264)](ELECTRON_BROWSER, { 'url': _0xbd1f14(349) }), this[_0xbd1f14(261)](0);
            });
        }), it(_0xbf942c(350), function () {
            const _0x56b544 = _0xbf942c;
            return cypress[_0x56b544(245)]([
                _0x56b544(319) + this[_0x56b544(244)],
                '--spec=' + this['idsPath'] + _0x56b544(351),
                '--config',
                'port=2020'
            ])[_0x56b544(283)](() => {
                const _0x415556 = _0x56b544;
                expect(browsers[_0x415556(301)])['to']['be']['calledWithMatch'](ELECTRON_BROWSER, { 'url': 'http://localhost:2020/__/#/tests/integration/bar.js' }), this[_0x415556(261)](0);
            });
        }), it(_0xbf942c(352), function () {
            const _0x2dce7f = _0xbf942c;
            return cypress['start']([
                _0x2dce7f(319) + this[_0x2dce7f(237)],
                _0x2dce7f(353) + this[_0x2dce7f(237)] + _0x2dce7f(348)
            ])[_0x2dce7f(283)](() => {
                const _0xcd680a = _0x2dce7f;
                expect(browsers[_0xcd680a(301)])['to']['be'][_0xcd680a(264)](ELECTRON_BROWSER, { 'url': _0xcd680a(349) }), this['expectExitWith'](0);
            });
        }), it(_0xbf942c(354), function () {
            const _0x49914b = _0xbf942c;
            return cypress[_0x49914b(245)]([
                _0x49914b(319) + this[_0x49914b(237)],
                _0x49914b(355) + this[_0x49914b(237)] + _0x49914b(348)
            ])[_0x49914b(283)](() => {
                const _0x4d807e = _0x49914b;
                expect(browsers['open'])['to']['be'][_0x4d807e(264)](ELECTRON_BROWSER, { 'url': _0x4d807e(349) }), this[_0x4d807e(261)](0);
            });
        }), it(_0xbf942c(356), function () {
            const _0x44f07c = _0xbf942c;
            return cypress[_0x44f07c(245)]([
                _0x44f07c(319) + this[_0x44f07c(237)],
                _0x44f07c(357)
            ])[_0x44f07c(283)](() => {
                const _0x1740f4 = _0x44f07c;
                expect(browsers['open'])['to']['be'][_0x1740f4(264)](ELECTRON_BROWSER, { 'url': _0x1740f4(349) });
            })[_0x44f07c(283)](() => {
                const _0x39d875 = _0x44f07c;
                expect(browsers[_0x39d875(301)])['to']['be'][_0x39d875(264)](ELECTRON_BROWSER, { 'url': _0x39d875(358) }), this[_0x39d875(261)](0);
            });
        }), it('does not watch settings or plugins in run mode', function () {
            const _0x13cb4f = _0xbf942c, _0x3f2ce7 = sinon[_0x13cb4f(257)](Watchers[_0x13cb4f(252)], _0x13cb4f(359)), _0x141b64 = sinon[_0x13cb4f(257)](Watchers[_0x13cb4f(252)], _0x13cb4f(360));
            return cypress[_0x13cb4f(245)]([_0x13cb4f(319) + this[_0x13cb4f(361)]])[_0x13cb4f(283)](() => {
                const _0x14c9bf = _0x13cb4f;
                expect(_0x141b64)[_0x14c9bf(312)]['to']['be']['called'], expect(_0x3f2ce7)[_0x14c9bf(312)]['to']['be'][_0x14c9bf(339)], this[_0x14c9bf(261)](0);
            });
        }), it(_0xbf942c(362), function () {
            const _0x341db9 = _0xbf942c;
            return config['get'](this['pristinePath'])[_0x341db9(283)](_0x57bdc3 => {
                const _0x1a47a1 = _0x341db9;
                return fs['statAsync'](_0x57bdc3[_0x1a47a1(363)])[_0x1a47a1(283)](() => {
                    throw new Error('integrationFolder should not exist!');
                })[_0x1a47a1(342)](() => {
                    const _0x51453c = _0x1a47a1;
                    return cypress['start']([
                        _0x51453c(319) + this[_0x51453c(364)],
                        _0x51453c(365)
                    ]);
                })[_0x1a47a1(283)](() => {
                    return fs['statAsync'](_0x57bdc3['integrationFolder']);
                })[_0x1a47a1(283)](() => {
                    const _0x10f6db = _0x1a47a1;
                    return Promise[_0x10f6db(230)](fs[_0x10f6db(366)](path['join'](_0x57bdc3[_0x10f6db(363)], _0x10f6db(367), 'todo.spec.js')), fs['statAsync'](path[_0x10f6db(230)](_0x57bdc3[_0x10f6db(363)], _0x10f6db(368), 'actions.spec.js')), fs[_0x10f6db(366)](path[_0x10f6db(230)](_0x57bdc3['integrationFolder'], _0x10f6db(368), _0x10f6db(369))), fs[_0x10f6db(366)](path[_0x10f6db(230)](_0x57bdc3['integrationFolder'], _0x10f6db(368), _0x10f6db(370))));
                });
            });
        }), it('does not scaffold when headless and exits with error when no existing project', function () {
            const _0x5ac430 = _0xbf942c, _0x41313f = function (_0x433522, _0x6a413d) {
                    const _0x217d15 = _0x4ba2;
                    if (!_0x433522['isRejected']())
                        throw new Error('File or folder was scaffolded at index: ' + _0x6a413d);
                    expect(_0x433522['reason']())['to'][_0x217d15(331)][_0x217d15(371)](_0x217d15(372), _0x217d15(373));
                };
            return Promise[_0x5ac430(374)]([
                fs[_0x5ac430(366)](path[_0x5ac430(230)](this['pristinePath'], 'cypress'))[_0x5ac430(375)](),
                fs['statAsync'](path[_0x5ac430(230)](this[_0x5ac430(364)], _0x5ac430(376)))[_0x5ac430(375)]()
            ])[_0x5ac430(377)](_0x41313f)[_0x5ac430(283)](() => {
                const _0x3fb5a1 = _0x5ac430;
                return cypress[_0x3fb5a1(245)](['--run-project=' + this[_0x3fb5a1(364)]]);
            })[_0x5ac430(283)](() => {
                const _0x215bb5 = _0x5ac430;
                return Promise[_0x215bb5(374)]([
                    fs[_0x215bb5(366)](path[_0x215bb5(230)](this['pristinePath'], _0x215bb5(378)))[_0x215bb5(375)](),
                    fs[_0x215bb5(366)](path[_0x215bb5(230)](this['pristinePath'], _0x215bb5(376)))[_0x215bb5(375)]()
                ]);
            })[_0x5ac430(377)](_0x41313f)[_0x5ac430(283)](() => {
                const _0xbb538c = _0x5ac430;
                this[_0xbb538c(288)]('CONFIG_FILE_NOT_FOUND', this[_0xbb538c(364)]);
            });
        }), it(_0xbf942c(379), function () {
            const _0x195612 = _0xbf942c;
            return settings['write'](this[_0x195612(364)], {})[_0x195612(283)](() => {
                const _0x1cf4c7 = _0x195612;
                return cypress[_0x1cf4c7(245)](['--run-project=' + this[_0x1cf4c7(364)]]);
            })[_0x195612(283)](() => {
                const _0x1429e0 = _0x195612;
                return fs[_0x1429e0(366)](path[_0x1429e0(230)](this[_0x1429e0(364)], 'cypress', _0x1429e0(380)));
            })[_0x195612(283)](() => {
                throw new Error('integration folder should not exist!');
            })['catch']({ 'code': 'ENOENT' }, () => {
            });
        }), it(_0xbf942c(381), function () {
            const _0x52fdfe = _0xbf942c;
            return config['get'](this[_0x52fdfe(364)])['then'](_0x4ef624 => {
                const _0x16a71d = _0x52fdfe;
                return fs[_0x16a71d(366)](_0x4ef624[_0x16a71d(382)])[_0x16a71d(283)](() => {
                    const _0x44bdee = _0x16a71d;
                    throw new Error(_0x44bdee(383));
                })[_0x16a71d(342)](() => {
                    const _0x45ee44 = _0x16a71d;
                    return cypress[_0x45ee44(245)]([
                        _0x45ee44(319) + this['pristinePath'],
                        _0x45ee44(365)
                    ]);
                })[_0x16a71d(283)](() => {
                    const _0x38becf = _0x16a71d;
                    return fs[_0x38becf(366)](_0x4ef624['fixturesFolder']);
                })[_0x16a71d(283)](() => {
                    const _0x5735c3 = _0x16a71d;
                    return fs[_0x5735c3(366)](path['join'](_0x4ef624[_0x5735c3(382)], _0x5735c3(384)));
                });
            });
        }), it('scaffolds out support + files if they do not exist', function () {
            const _0x496880 = _0xbf942c, _0x5f29ba = path['join'](this[_0x496880(364)], _0x496880(385));
            return config['get'](this[_0x496880(364)])[_0x496880(283)](() => {
                const _0x3ef4b0 = _0x496880;
                return fs[_0x3ef4b0(366)](_0x5f29ba)[_0x3ef4b0(283)](() => {
                    const _0x25371f = _0x3ef4b0;
                    throw new Error(_0x25371f(386));
                })[_0x3ef4b0(342)]({ 'code': 'ENOENT' }, () => {
                    const _0xde1b1 = _0x3ef4b0;
                    return cypress[_0xde1b1(245)]([
                        _0xde1b1(319) + this[_0xde1b1(364)],
                        _0xde1b1(365)
                    ]);
                })[_0x3ef4b0(283)](() => {
                    const _0x5c6c3e = _0x3ef4b0;
                    return fs[_0x5c6c3e(366)](_0x5f29ba);
                })[_0x3ef4b0(283)](() => {
                    const _0xe23eb0 = _0x3ef4b0;
                    return fs[_0xe23eb0(366)](path[_0xe23eb0(230)](_0x5f29ba, _0xe23eb0(387)));
                })['then'](() => {
                    const _0x3f8477 = _0x3ef4b0;
                    return fs[_0x3f8477(366)](path[_0x3f8477(230)](_0x5f29ba, _0x3f8477(388)));
                });
            });
        }), it(_0xbf942c(389), function (_0x253f66) {
            const _0x57076a = _0xbf942c;
            config['get'](this['idsPath'])[_0x57076a(283)](_0x384b6b => {
                const _0x3ed5d6 = _0x57076a;
                return this[_0x3ed5d6(390)] = _0x384b6b, fs[_0x3ed5d6(366)](this[_0x3ed5d6(390)][_0x3ed5d6(382)]);
            })['then'](() => {
                const _0x278f96 = _0x57076a;
                return settings[_0x278f96(391)](this[_0x278f96(244)]);
            })[_0x57076a(283)](_0x10bcb3 => {
                const _0x5107d2 = _0x57076a;
                return _0x10bcb3[_0x5107d2(382)] = ![], settings['write'](this[_0x5107d2(244)], _0x10bcb3);
            })[_0x57076a(283)](() => {
                const _0x18dd99 = _0x57076a;
                return cypress[_0x18dd99(245)]([_0x18dd99(319) + this[_0x18dd99(244)]]);
            })['then'](() => {
                const _0x279258 = _0x57076a;
                return fs[_0x279258(366)](this[_0x279258(390)][_0x279258(382)])[_0x279258(283)](() => {
                    const _0xf01799 = _0x279258;
                    throw new Error(_0xf01799(383));
                })[_0x279258(342)](() => {
                    return _0x253f66();
                });
            });
        }), it(_0xbf942c(392), function () {
            const _0x5799b3 = _0xbf942c;
            return cypress['start']([
                '--run-project=' + this[_0x5799b3(237)],
                _0x5799b3(327)
            ])[_0x5799b3(283)](() => {
                const _0x3a214c = _0x5799b3;
                expect(browsers['open'])['to']['be'][_0x3a214c(264)](ELECTRON_BROWSER, {
                    'proxyServer': 'http://localhost:8888',
                    'show': !![]
                }), this[_0x3a214c(261)](0);
            });
        }), it('turns on reporting', function () {
            const _0x2af77f = _0xbf942c;
            return sinon['spy'](Reporter, _0x2af77f(393)), cypress[_0x2af77f(245)](['--run-project=' + this[_0x2af77f(237)]])[_0x2af77f(283)](() => {
                const _0x6dbb55 = _0x2af77f;
                expect(Reporter[_0x6dbb55(393)])['to']['be'][_0x6dbb55(263)](_0x6dbb55(394)), this[_0x6dbb55(261)](0);
            });
        }), it(_0xbf942c(395), function () {
            const _0x1d5bc4 = _0xbf942c;
            return sinon['spy'](Reporter, _0x1d5bc4(393)), cypress[_0x1d5bc4(245)]([
                _0x1d5bc4(319) + this['todosPath'],
                '--reporter=nyan'
            ])[_0x1d5bc4(283)](() => {
                const _0x4951d0 = _0x1d5bc4;
                expect(Reporter['create'])['to']['be'][_0x4951d0(263)]('nyan'), this[_0x4951d0(261)](0);
            });
        }), it(_0xbf942c(396), function () {
            const _0x25849a = _0xbf942c;
            return sinon['spy'](Reporter, _0x25849a(393)), config[_0x25849a(397)](this['idsPath'])[_0x25849a(283)](_0xc0c3d => {
                const _0x577a78 = _0x25849a;
                return this[_0x577a78(390)] = _0xc0c3d, settings[_0x577a78(391)](this[_0x577a78(244)]);
            })[_0x25849a(283)](_0x1a5d51 => {
                const _0x1caddd = _0x25849a;
                return _0x1a5d51[_0x1caddd(398)] = _0x1caddd(399), settings[_0x1caddd(400)](this['idsPath'], _0x1a5d51);
            })[_0x25849a(283)](() => {
                const _0x37af54 = _0x25849a;
                return cypress[_0x37af54(245)]([_0x37af54(319) + this['idsPath']]);
            })[_0x25849a(283)](() => {
                const _0x4ff0c0 = _0x25849a;
                expect(Reporter[_0x4ff0c0(393)])['to']['be']['calledWith'](_0x4ff0c0(399)), this[_0x4ff0c0(261)](0);
            });
        }), it('runs tests even when user isn\'t logged in', function () {
            const _0x1fbbe1 = _0xbf942c;
            return user[_0x1fbbe1(401)]({})[_0x1fbbe1(283)](() => {
                const _0x105deb = _0x1fbbe1;
                return cypress[_0x105deb(245)]([_0x105deb(319) + this[_0x105deb(237)]]);
            })[_0x1fbbe1(283)](() => {
                const _0x18176f = _0x1fbbe1;
                this[_0x18176f(261)](0);
            });
        }), it('logs warning when projectId and key but no record option', function () {
            const _0x214ecc = _0xbf942c;
            return cypress[_0x214ecc(245)]([
                _0x214ecc(319) + this[_0x214ecc(237)],
                '--key=asdf'
            ])[_0x214ecc(283)](() => {
                const _0x535503 = _0x214ecc;
                expect(errors['warning'])['to']['be']['calledWith'](_0x535503(402), _0x535503(403)), expect(console[_0x535503(227)])['to']['be'][_0x535503(264)]('You also provided your Record Key, but you did not pass the --record flag.'), expect(console['log'])['to']['be'][_0x535503(264)](_0x535503(404)), expect(console['log'])['to']['be'][_0x535503(264)](_0x535503(405));
            });
        }), it('logs warning when removing old browser profiles fails', function () {
            const _0x1a5261 = _0xbf942c, _0x4a881d = new Error(_0x1a5261(406));
            return sinon[_0x1a5261(247)](browsers, _0x1a5261(407))[_0x1a5261(408)](_0x4a881d), cypress[_0x1a5261(245)]([_0x1a5261(319) + this[_0x1a5261(237)]])[_0x1a5261(283)](() => {
                const _0xfe4e89 = _0x1a5261;
                expect(errors['warning'])['to']['be'][_0xfe4e89(263)](_0xfe4e89(409), _0x4a881d[_0xfe4e89(410)]), expect(console[_0xfe4e89(227)])['to']['be'][_0xfe4e89(264)](_0xfe4e89(411)), expect(console[_0xfe4e89(227)])['to']['be'][_0xfe4e89(264)](_0x4a881d[_0xfe4e89(267)]);
            });
        }), it(_0xbf942c(412), function () {
            const _0x4a0b34 = _0xbf942c;
            return cypress[_0x4a0b34(245)]([
                _0x4a0b34(319) + this[_0x4a0b34(364)],
                _0x4a0b34(413)
            ])['then'](() => {
                const _0xe68ff2 = _0x4a0b34;
                expect(errors[_0xe68ff2(254)])[_0xe68ff2(312)]['to']['be'][_0xe68ff2(263)](_0xe68ff2(402), 'abc123'), expect(console[_0xe68ff2(227)])['not']['to']['be'][_0xe68ff2(264)]('cypress run --key <record_key>');
            });
        }), it(_0xbf942c(414), function () {
            const _0x5a24e3 = _0xbf942c;
            return cypress['start']([
                _0x5a24e3(319) + this[_0x5a24e3(237)],
                _0x5a24e3(413),
                _0x5a24e3(415)
            ])['then'](() => {
                const _0x255d47 = _0x5a24e3;
                expect(errors[_0x255d47(254)])[_0x255d47(312)]['to']['be']['calledWith'](_0x255d47(402), _0x255d47(403)), expect(console[_0x255d47(227)])[_0x255d47(312)]['to']['be']['calledWithMatch'](_0x255d47(416));
            });
        }), it(_0xbf942c(417), function () {
            const _0x247fb5 = _0xbf942c;
            return settings[_0x247fb5(400)](this[_0x247fb5(244)], { 'supportFile': _0x247fb5(418) })[_0x247fb5(283)](() => {
                const _0x3f57d2 = _0x247fb5;
                return cypress[_0x3f57d2(245)]([_0x3f57d2(319) + this[_0x3f57d2(244)]]);
            })[_0x247fb5(283)](() => {
                const _0x73c996 = _0x247fb5;
                this[_0x73c996(288)](_0x73c996(419), _0x73c996(420));
            });
        }), it(_0xbf942c(421), function () {
            const _0xb122f4 = _0xbf942c;
            return browsers[_0xb122f4(301)][_0xb122f4(422)](), cypress[_0xb122f4(245)]([
                _0xb122f4(319) + this[_0xb122f4(244)],
                _0xb122f4(423)
            ])['then'](() => {
                const _0x30920f = _0xb122f4;
                this[_0x30920f(288)](_0x30920f(424));
                const _0x9d47f0 = errors[_0x30920f(227)][_0x30920f(228)], _0xf997c6 = _['find'](_0x9d47f0, _0x441df2 => {
                        const _0x43be9a = _0x30920f;
                        return _[_0x43be9a(425)](_0x441df2, _0x2d957b => {
                            const _0x1baff1 = _0x43be9a;
                            return _0x2d957b[_0x1baff1(267)] && _0x2d957b[_0x1baff1(267)][_0x1baff1(426)](_0x1baff1(427));
                        });
                    });
                expect(_0xf997c6, _0x30920f(428))['to']['be']['ok'];
                const _0x44e6f1 = _[_0x30920f(425)](_0x9d47f0, _0x49d263 => {
                    const _0x5a2293 = _0x30920f;
                    return _[_0x5a2293(425)](_0x49d263, _0x41201b => {
                        const _0x3476f0 = _0x5a2293;
                        return _0x41201b[_0x3476f0(267)] && _0x41201b[_0x3476f0(267)][_0x3476f0(426)](_0x3476f0(429));
                    });
                });
                expect(_0x44e6f1, 'supported browsers should be listed')['to']['be']['ok'];
                const _0x579ed1 = _[_0x30920f(425)](_0x9d47f0, _0x5be8d4 => {
                    const _0x1a1ec0 = _0x30920f;
                    return _[_0x1a1ec0(425)](_0x5be8d4, _0x3d56d7 => {
                        const _0x48d94b = _0x1a1ec0;
                        return _0x3d56d7[_0x48d94b(267)] && _0x3d56d7['message'][_0x48d94b(426)](_0x48d94b(430));
                    });
                });
                expect(_0x579ed1, _0x30920f(431))['to']['be']['ok'];
            });
        }), describe(_0xbf942c(432), function () {
            const _0x184864 = _0xbf942c;
            it(_0x184864(433), function () {
                const _0x2b8ae4 = _0x184864;
                return cypress['start']([
                    _0x2b8ae4(319) + this[_0x2b8ae4(237)],
                    _0x2b8ae4(434)
                ])[_0x2b8ae4(283)](() => {
                    const _0x7eb027 = _0x2b8ae4;
                    this[_0x7eb027(288)](_0x7eb027(435), _0x7eb027(436)), this[_0x7eb027(288)](_0x7eb027(435), 'We searched for any files matching this glob pattern:'), this[_0x7eb027(288)](_0x7eb027(435), this[_0x7eb027(237)]);
                });
            }), it(_0x184864(437), function () {
                const _0x4efbe5 = _0x184864;
                return cypress[_0x4efbe5(245)]([
                    '--run-project=' + this['todosPath'],
                    _0x4efbe5(353) + this[_0x4efbe5(237)] + '/tests/path/to/spec'
                ])[_0x4efbe5(283)](() => {
                    const _0x168d2d = _0x4efbe5;
                    this[_0x168d2d(288)](_0x168d2d(435), _0x168d2d(438)), this[_0x168d2d(288)](_0x168d2d(435), this[_0x168d2d(237)]);
                });
            }), it('logs error and exits when no specs were found at all', function () {
                const _0x40f77a = _0x184864;
                return cypress['start']([
                    _0x40f77a(319) + this[_0x40f77a(237)],
                    '--config=integrationFolder=cypress/specs'
                ])['then'](() => {
                    const _0xa1f426 = _0x40f77a;
                    this[_0xa1f426(288)](_0xa1f426(435), _0xa1f426(439)), this[_0xa1f426(288)]('NO_SPECS_FOUND', _0xa1f426(440));
                });
            });
        }), it(_0xbf942c(441), function () {
            const _0x554303 = _0xbf942c;
            return fs[_0x554303(442)](this[_0x554303(237)] + '/cypress.json', '{\'foo\': \'bar}')[_0x554303(283)](() => {
                const _0x324ff7 = _0x554303;
                return cypress['start']([_0x324ff7(319) + this['todosPath']]);
            })[_0x554303(283)](() => {
                const _0x14345f = _0x554303;
                this[_0x14345f(288)](_0x14345f(443), this[_0x14345f(237)]);
            });
        }), it('logs error and exits when project has cypress.env.json syntax error', function () {
            const _0x435c3a = _0xbf942c;
            return fs['writeFileAsync'](this[_0x435c3a(237)] + '/cypress.env.json', '{\'foo\': \'bar}')[_0x435c3a(283)](() => {
                const _0x10bb7f = _0x435c3a;
                return cypress[_0x10bb7f(245)]([_0x10bb7f(319) + this[_0x10bb7f(237)]]);
            })[_0x435c3a(283)](() => {
                const _0x2a281c = _0x435c3a;
                this[_0x2a281c(288)](_0x2a281c(443), this[_0x2a281c(237)]);
            });
        }), it(_0xbf942c(444), function () {
            const _0xbd0b55 = _0xbf942c;
            return settings[_0xbd0b55(400)](this[_0xbd0b55(237)], { 'baseUrl': _0xbd0b55(445) })[_0xbd0b55(283)](() => {
                const _0x1beec9 = _0xbd0b55;
                return cypress['start']([_0x1beec9(319) + this['todosPath']]);
            })[_0xbd0b55(283)](() => {
                const _0x355ab6 = _0xbd0b55;
                this['expectExitWithErr'](_0x355ab6(446), 'cypress.json');
            });
        }), it('logs error and exits when project has invalid config values from the CLI', function () {
            const _0x43a336 = _0xbf942c;
            return cypress[_0x43a336(245)]([
                '--run-project=' + this[_0x43a336(237)],
                _0x43a336(447)
            ])[_0x43a336(283)](() => {
                const _0xbe3946 = _0x43a336;
                this[_0xbe3946(288)](_0xbe3946(448), _0xbe3946(445)), this[_0xbe3946(288)](_0xbe3946(448), 'We found an invalid configuration value');
            });
        }), it(_0xbf942c(449), function () {
            const _0x374bae = _0xbf942c;
            return process['env'][_0x374bae(450)] = _0x374bae(445), cypress['start'](['--run-project=' + this[_0x374bae(237)]])['then'](() => {
                const _0x51a24f = _0x374bae;
                this[_0x51a24f(288)](_0x51a24f(448), 'localhost:9999'), this['expectExitWithErr'](_0x51a24f(448), _0x51a24f(451));
            });
        });
        const _0x541d0e = [{
                'old': _0xbf942c(452),
                'new': _0xbf942c(453)
            }];
        _0x541d0e[_0xbf942c(454)](function (_0xd8ad3d) {
            const _0x4f29ff = _0xbf942c;
            it(_0x4f29ff(455) + _0xd8ad3d[_0x4f29ff(456)], function () {
                const _0x507081 = _0x4f29ff;
                return cypress[_0x507081(245)]([
                    _0x507081(319) + this[_0x507081(237)],
                    _0x507081(457) + _0xd8ad3d[_0x507081(456)] + _0x507081(458)
                ])[_0x507081(283)](() => {
                    const _0x5c6d47 = _0x507081;
                    this[_0x5c6d47(288)](_0x5c6d47(459), _0xd8ad3d['old']), this[_0x5c6d47(288)]('RENAMED_CONFIG_OPTION', _0xd8ad3d['new']);
                });
            });
        }), it(_0xbf942c(460), function () {
            const _0xb41ebf = _0xbf942c;
            if (process[_0xb41ebf(461)]() === 0)
                return;
            const _0x59b1ab = path[_0xb41ebf(462)](_0xb41ebf(463)), _0x259be2 = path[_0xb41ebf(230)](_0x59b1ab, _0xb41ebf(376));
            return fs[_0xb41ebf(464)](_0x259be2, '{}')['then'](() => {
                const _0x2baa4b = _0xb41ebf;
                return fs[_0x2baa4b(465)](_0x59b1ab, _0x2baa4b(466));
            })[_0xb41ebf(283)](() => {
                const _0x52be6b = _0xb41ebf;
                return cypress['start']([_0x52be6b(319) + _0x59b1ab]);
            })[_0xb41ebf(283)](() => {
                const _0x398910 = _0xb41ebf;
                return fs['chmodAsync'](_0x59b1ab, _0x398910(467));
            })['then'](() => {
                const _0x139d50 = _0xb41ebf;
                return fs[_0x139d50(468)](_0x59b1ab);
            })[_0xb41ebf(283)](() => {
                const _0x1d54af = _0xb41ebf;
                this['expectExitWithErr'](_0x1d54af(443), path[_0x1d54af(230)](_0x59b1ab, _0x1d54af(376)));
            });
        }), it(_0xbf942c(469), function () {
            const _0xa72d0b = _0xbf942c;
            return cypress[_0xa72d0b(245)]([
                _0xa72d0b(319) + this[_0xa72d0b(237)],
                _0xa72d0b(470),
                _0xa72d0b(471)
            ])[_0xa72d0b(283)](() => {
                const _0x4fe39f = _0xa72d0b;
                this[_0x4fe39f(288)]('INVALID_REPORTER_NAME', _0x4fe39f(471));
            });
        }), describe(_0xbf942c(472), () => {
            const _0x33dcfb = _0xbf942c;
            beforeEach(function () {
                const _0x2dde5a = _0x4ba2;
                return appData[_0x2dde5a(271)]()['then'](() => {
                    const _0x317fd3 = _0x2dde5a;
                    return savedState[_0x317fd3(473)](this[_0x317fd3(237)]);
                })[_0x2dde5a(283)](_0x14577d => {
                    const _0x571656 = _0x2dde5a;
                    this[_0x571656(474)] = appData[_0x571656(475)](_0x14577d);
                });
            }), it(_0x33dcfb(476), function () {
                const _0x4b3276 = _0x33dcfb;
                return cypress[_0x4b3276(245)]([
                    _0x4b3276(319) + this[_0x4b3276(237)],
                    _0x4b3276(353) + this[_0x4b3276(237)] + _0x4b3276(348)
                ])[_0x4b3276(283)](() => {
                    const _0x4397eb = _0x4b3276;
                    return this['expectExitWith'](0), openProject[_0x4397eb(477)]()['saveState']();
                })[_0x4b3276(283)](() => {
                    const _0x1a6ada = _0x4b3276;
                    return fs[_0x1a6ada(366)](this[_0x1a6ada(474)])[_0x1a6ada(283)](() => {
                        const _0x4828fd = _0x1a6ada;
                        throw new Error(_0x4828fd(478) + this[_0x4828fd(474)]);
                    })['catch']({ 'code': _0x1a6ada(373) }, () => {
                    });
                });
            });
        }), describe(_0xbf942c(479), () => {
            const _0x33e4e7 = _0xbf942c;
            it(_0x33e4e7(480), function () {
                const _0x5d3ffc = _0x33e4e7;
                return cypress['start'](['--run-project=' + this['todosPath']])[_0x5d3ffc(283)](() => {
                    const _0x297bbb = _0x5d3ffc;
                    expect(openProject[_0x297bbb(477)]()[_0x297bbb(390)][_0x297bbb(479)])['to']['be'][_0x297bbb(481)], this[_0x297bbb(261)](0);
                });
            });
        }), describe(_0xbf942c(482), () => {
            const _0x9d5592 = _0xbf942c;
            it(_0x9d5592(483), function () {
                const _0x3bc3e9 = _0x9d5592;
                return cypress[_0x3bc3e9(245)]([
                    '--run-project=' + this[_0x3bc3e9(237)],
                    '--config=requestTimeout=1234,videoCompression=false'
                ])['then'](() => {
                    const _0x436950 = _0x3bc3e9, {cfg: _0x412645} = openProject['getProject']();
                    expect(_0x412645[_0x436950(484)])['to']['be'][_0x436950(481)], expect(_0x412645[_0x436950(485)])['to']['eq'](1234), expect(_0x412645[_0x436950(486)][_0x436950(484)])['to'][_0x436950(487)]['eq']({
                        'value': ![],
                        'from': _0x436950(488)
                    }), expect(_0x412645['resolved']['requestTimeout'])['to'][_0x436950(487)]['eq']({
                        'value': 1234,
                        'from': _0x436950(488)
                    }), this[_0x436950(261)](0);
                });
            }), it(_0x9d5592(489), function () {
                const _0x5b37f6 = _0x9d5592;
                return plugins[_0x5b37f6(490)][_0x5b37f6(422)](), cypress[_0x5b37f6(245)]([
                    _0x5b37f6(319) + this[_0x5b37f6(361)],
                    _0x5b37f6(491),
                    '--env=foo=foo,bar=bar'
                ])[_0x5b37f6(283)](() => {
                    const _0x106c93 = _0x5b37f6, {cfg: _0x2cbfeb} = openProject['getProject']();
                    expect(_0x2cbfeb[_0x106c93(484)])['to']['eq'](20), expect(_0x2cbfeb[_0x106c93(492)])['to']['eq'](500), expect(_0x2cbfeb[_0x106c93(493)])['to'][_0x106c93(487)]['eq']({
                        'foo': _0x106c93(494),
                        'bar': _0x106c93(494)
                    }), expect(_0x2cbfeb['resolved']['videoCompression'])['to'][_0x106c93(487)]['eq']({
                        'value': 20,
                        'from': _0x106c93(495)
                    }), expect(_0x2cbfeb[_0x106c93(486)][_0x106c93(485)])['to']['deep']['eq']({
                        'value': 1234,
                        'from': _0x106c93(488)
                    }), expect(_0x2cbfeb[_0x106c93(486)][_0x106c93(493)][_0x106c93(406)])['to'][_0x106c93(487)]['eq']({
                        'value': _0x106c93(494),
                        'from': _0x106c93(495)
                    }), expect(_0x2cbfeb['resolved'][_0x106c93(493)][_0x106c93(494)])['to'][_0x106c93(487)]['eq']({
                        'value': 'bar',
                        'from': _0x106c93(488)
                    }), this['expectExitWith'](0);
                });
            });
        }), describe(_0xbf942c(496), () => {
            const _0x1b033f = _0xbf942c;
            beforeEach(() => {
                const _0x3d2c65 = _0x4ba2;
                plugins['init']['restore'](), browsers['open'][_0x3d2c65(422)]();
                const _0x3d60d7 = new EE();
                _0x3d60d7[_0x3d2c65(497)] = () => {
                    const _0x13d4bb = _0x3d2c65;
                    return _0x3d60d7[_0x13d4bb(498)](_0x13d4bb(262));
                }, _0x3d60d7[_0x3d2c65(499)] = () => {
                    const _0x40259d = _0x3d2c65;
                    return _0x3d60d7[_0x40259d(498)](_0x40259d(500));
                }, _0x3d60d7['isDestroyed'] = () => {
                    return ![];
                }, _0x3d60d7['loadURL'] = () => {
                }, _0x3d60d7[_0x3d2c65(501)] = () => {
                }, _0x3d60d7['webContents'] = {
                    'debugger': {
                        'on': sinon[_0x3d2c65(247)](),
                        'attach': sinon[_0x3d2c65(247)](),
                        'sendCommand': sinon[_0x3d2c65(247)]()[_0x3d2c65(246)]()
                    },
                    'getOSProcessId': sinon[_0x3d2c65(247)](),
                    'setUserAgent': sinon[_0x3d2c65(247)](),
                    'session': {
                        'clearCache': sinon[_0x3d2c65(247)]()[_0x3d2c65(246)](),
                        'setProxy': sinon[_0x3d2c65(247)]()[_0x3d2c65(246)](),
                        'setUserAgent': sinon[_0x3d2c65(247)](),
                        'on': sinon[_0x3d2c65(247)](),
                        'removeListener': sinon[_0x3d2c65(247)]()
                    }
                }, _0x3d60d7[_0x3d2c65(502)] = sinon[_0x3d2c65(247)], _0x3d60d7[_0x3d2c65(503)] = sinon[_0x3d2c65(247)], sinon['stub'](launch, 'launch')[_0x3d2c65(246)](_0x3d60d7), sinon[_0x3d2c65(247)](Windows, _0x3d2c65(393))[_0x3d2c65(249)](_0x3d60d7);
            }), context(_0x1b033f(504), () => {
                const _0x3a4d14 = _0x1b033f;
                it(_0x3a4d14(212), function () {
                    const _0x370d53 = _0x3a4d14, _0x4d7018 = {
                            'ensureMinimumProtocolVersion': sinon[_0x370d53(247)]()[_0x370d53(246)](),
                            'close': sinon[_0x370d53(247)]()[_0x370d53(246)](),
                            'on': sinon[_0x370d53(247)](),
                            'send': sinon[_0x370d53(247)]()
                        };
                    return sinon[_0x370d53(247)](chromeBrowser, _0x370d53(505))[_0x370d53(246)](), sinon[_0x370d53(247)](chromeBrowser, _0x370d53(506))[_0x370d53(246)](_0x4d7018), sinon['stub'](chromeBrowser, _0x370d53(507))[_0x370d53(246)](), sinon[_0x370d53(247)](chromeBrowser, _0x370d53(508))[_0x370d53(246)](), sinon[_0x370d53(247)](chromeBrowser, _0x370d53(509))[_0x370d53(249)](), cypress[_0x370d53(245)]([
                        _0x370d53(319) + this['pluginBrowser'],
                        _0x370d53(510)
                    ])[_0x370d53(283)](() => {
                        const _0x59ce27 = _0x370d53, {args: _0x173a3d} = launch['launch'][_0x59ce27(325)], _0x19bdc7 = _['find'](TYPICAL_BROWSERS, { 'name': _0x59ce27(212) }), _0x453f12 = R[_0x59ce27(511)](_0x19bdc7, {
                                'isHeadless': !![],
                                'isHeaded': ![]
                            });
                        expect(_0x173a3d[0], 'found and used Chrome')['to'][_0x59ce27(487)]['eq'](_0x453f12);
                        const _0x525255 = _0x173a3d[2];
                        expect(_0x525255[_0x59ce27(512)](0, 4), _0x59ce27(513))['to']['deep']['eq']([
                            _0x59ce27(212),
                            _0x59ce27(406),
                            _0x59ce27(494),
                            'baz'
                        ]), this[_0x59ce27(261)](0), expect(chromeBrowser['_navigateUsingCRI'])['to'][_0x59ce27(331)][_0x59ce27(332)][_0x59ce27(323)], expect(chromeBrowser[_0x59ce27(509)])['to'][_0x59ce27(331)][_0x59ce27(332)][_0x59ce27(323)], expect(chromeBrowser[_0x59ce27(506)])['to'][_0x59ce27(331)][_0x59ce27(332)][_0x59ce27(323)];
                    });
                }), it(_0x3a4d14(182), function () {
                    const _0x219be5 = _0x3a4d14, _0x3a4d59 = sinon[_0x219be5(247)]();
                    return videoCapture[_0x219be5(245)][_0x219be5(249)]({ 'writeVideoFrame': _0x3a4d59 }), cypress[_0x219be5(245)]([
                        _0x219be5(319) + this[_0x219be5(243)],
                        _0x219be5(334)
                    ])['then'](() => {
                        const _0x302ecd = _0x219be5;
                        expect(Windows[_0x302ecd(393)])['to']['be'][_0x302ecd(264)](this[_0x302ecd(243)], {
                            'browser': _0x302ecd(182),
                            'foo': _0x302ecd(494),
                            'onNewWindow': sinon['match']['func'],
                            'onScreencastFrame': sinon[_0x302ecd(514)][_0x302ecd(515)]
                        }), this[_0x302ecd(261)](0);
                    });
                });
            });
        }), describe(_0xbf942c(516), () => {
            const _0x3582d0 = _0xbf942c;
            beforeEach(() => {
                const _0xb21416 = _0x4ba2;
                return runMode[_0xb21416(316)]['resolves']({ 'stats': { 'failures': 0 } });
            }), it(_0x3582d0(517), function () {
                const _0x22d018 = _0x3582d0, _0x2dbc74 = sinon[_0x22d018(257)](http[_0x22d018(518)][_0x22d018(252)], _0x22d018(519)), _0x1466ba = sinon[_0x22d018(257)](ServerE2E[_0x22d018(252)], _0x22d018(301));
                return cypress[_0x22d018(245)]([
                    '--run-project=' + this[_0x22d018(237)],
                    _0x22d018(520)
                ])[_0x22d018(283)](() => {
                    const _0x3952f0 = _0x22d018;
                    expect(openProject[_0x3952f0(477)]()['cfg'][_0x3952f0(521)])['to']['eq'](5544), expect(_0x2dbc74)['to']['be'][_0x3952f0(263)](5544), expect(_0x1466ba)['to']['be'][_0x3952f0(264)]({ 'port': 5544 }), this[_0x3952f0(261)](0);
                });
            }), it(_0x3582d0(522), async function () {
                const _0x234c83 = _0x3582d0;
                sinon['stub'](ProjectBase[_0x234c83(252)], _0x234c83(523))[_0x234c83(249)]({
                    'use': () => {
                    }
                });
                let _0x579bd9 = http[_0x234c83(524)]();
                return _0x579bd9 = Promise[_0x234c83(525)](_0x579bd9), _0x579bd9['listenAsync'](5544, '127.0.0.1')[_0x234c83(283)](() => {
                    const _0x34e811 = _0x234c83;
                    return cypress[_0x34e811(245)]([
                        _0x34e811(319) + this[_0x34e811(237)],
                        _0x34e811(520)
                    ]);
                })[_0x234c83(283)](() => {
                    const _0x3395c7 = _0x234c83;
                    this[_0x3395c7(288)](_0x3395c7(526), '5544');
                });
            });
        }), describe(_0xbf942c(292), () => {
            beforeEach(() => {
                const _0x44d5e4 = _0x4ba2;
                return process[_0x44d5e4(493)] = _[_0x44d5e4(527)](process['env'], _0x44d5e4(528)), runMode[_0x44d5e4(316)][_0x44d5e4(246)]({ 'stats': { 'failures': 0 } });
            }), it('can set specific environment variables', function () {
                const _0xbd5ec8 = _0x4ba2;
                return cypress[_0xbd5ec8(245)]([
                    _0xbd5ec8(319) + this[_0xbd5ec8(237)],
                    _0xbd5ec8(529),
                    _0xbd5ec8(292),
                    _0xbd5ec8(530)
                ])['then'](() => {
                    const _0x193988 = _0xbd5ec8;
                    expect(openProject['getProject']()[_0x193988(390)][_0x193988(493)])['to'][_0x193988(487)]['eq']({
                        'version': '0.12.1',
                        'foo': _0x193988(494),
                        'host': _0x193988(531),
                        'baz': _0x193988(532)
                    }), this[_0x193988(261)](0);
                });
            }), it('parses environment variables with empty values', function () {
                const _0x19ea67 = _0x4ba2;
                return cypress[_0x19ea67(245)]([
                    _0x19ea67(319) + this[_0x19ea67(237)],
                    _0x19ea67(529),
                    _0x19ea67(533)
                ])[_0x19ea67(283)](() => {
                    const _0x59642f = _0x19ea67;
                    expect(openProject[_0x59642f(477)]()[_0x59642f(390)][_0x59642f(493)])['to'][_0x59642f(487)]['eq']({
                        'FOO': '',
                        'BAR': '',
                        'BAZ': _0x59642f(534)
                    }), this[_0x59642f(261)](0);
                });
            });
        }), describe(_0xbf942c(535), () => {
            const _0x26b114 = _0xbf942c;
            it('false does not require cypress.json to run', function () {
                const _0x1b742a = _0x4ba2;
                return fs[_0x1b742a(366)](path['join'](this['pristinePath'], _0x1b742a(376)))[_0x1b742a(283)](() => {
                    throw new Error('cypress.json should not exist');
                })['catch']({ 'code': _0x1b742a(373) }, () => {
                    const _0x3c7afa = _0x1b742a;
                    return cypress[_0x3c7afa(245)]([
                        _0x3c7afa(319) + this[_0x3c7afa(364)],
                        '--no-run-mode',
                        _0x3c7afa(535),
                        _0x3c7afa(481)
                    ])[_0x3c7afa(283)](() => {
                        const _0x549a85 = _0x3c7afa;
                        this[_0x549a85(261)](0);
                    });
                });
            }), it(_0x26b114(536), function () {
                const _0x37ec2c = _0x26b114;
                return this[_0x37ec2c(537)] = _0x37ec2c(538), fs[_0x37ec2c(366)](path[_0x37ec2c(230)](this[_0x37ec2c(237)], this['filename']))['then'](() => {
                    const _0x149a52 = _0x37ec2c;
                    throw new Error(this['filename'] + _0x149a52(539));
                })[_0x37ec2c(342)]({ 'code': _0x37ec2c(373) }, () => {
                    const _0x355d24 = _0x37ec2c;
                    return cypress['start']([
                        _0x355d24(319) + this[_0x355d24(237)],
                        '--no-run-mode',
                        _0x355d24(535),
                        this[_0x355d24(537)]
                    ])[_0x355d24(283)](() => {
                        const _0x500ddb = _0x355d24;
                        this[_0x500ddb(288)](_0x500ddb(540), this[_0x500ddb(537)], this[_0x500ddb(237)]);
                    });
                });
            });
        });
    }), context(_0x1c5f20(541), () => {
        const _0x4298a5 = _0x1c5f20;
        beforeEach(function () {
            const _0xdaa5cc = _0x4ba2;
            return sinon[_0xdaa5cc(247)](api, _0xdaa5cc(542))[_0xdaa5cc(246)](), sinon[_0xdaa5cc(247)](electron['app'], 'on')[_0xdaa5cc(256)](_0xdaa5cc(300))[_0xdaa5cc(314)](), sinon['stub'](browsers, _0xdaa5cc(301)), sinon[_0xdaa5cc(247)](runMode, _0xdaa5cc(315))[_0xdaa5cc(246)](), sinon['stub'](runMode, _0xdaa5cc(543))[_0xdaa5cc(246)]({
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
                'video': _0xdaa5cc(544),
                'shouldUploadVideo': !![],
                'screenshots': [],
                'config': {},
                'spec': {}
            }), Promise[_0xdaa5cc(374)]([
                user[_0xdaa5cc(401)]({}),
                getId(this[_0xdaa5cc(237)])[_0xdaa5cc(283)](_0x30c582 => {
                    const _0xd7d01b = _0xdaa5cc;
                    this[_0xd7d01b(545)] = _0x30c582;
                })
            ]);
        }), it(_0x4298a5(546), function () {
            const _0xb524f = _0x4298a5;
            return sinon[_0xb524f(247)](env, _0xb524f(397))[_0xb524f(256)](_0xb524f(547))[_0xb524f(249)](this[_0xb524f(545)]), cypress[_0xb524f(245)]([
                _0xb524f(308),
                _0xb524f(319) + this['noScaffolding'],
                _0xb524f(541),
                _0xb524f(548)
            ])['then'](() => {
                const _0x49c32e = _0xb524f;
                expect(api[_0x49c32e(542)])['to']['be']['calledWithMatch']({ 'projectId': this['projectId'] }), expect(errors['warning'])[_0x49c32e(312)]['to']['be'][_0x49c32e(339)], this[_0x49c32e(261)](3);
            });
        }), it(_0x4298a5(549), function () {
            const _0x4b8a47 = _0x4298a5;
            return sinon[_0x4b8a47(247)](env, _0x4b8a47(397))[_0x4b8a47(256)](_0x4b8a47(547))['returns'](_0x4b8a47(550))['withArgs'](_0x4b8a47(551))[_0x4b8a47(249)]('token'), cypress[_0x4b8a47(245)]([
                _0x4b8a47(308),
                _0x4b8a47(319) + this[_0x4b8a47(240)],
                _0x4b8a47(541)
            ])[_0x4b8a47(283)](() => {
                const _0x5c8562 = _0x4b8a47;
                expect(api['createRun'])['to']['be'][_0x5c8562(264)]({
                    'projectId': 'foo-project-123',
                    'recordKey': _0x5c8562(552)
                }), expect(errors[_0x5c8562(254)])[_0x5c8562(312)]['to']['be'][_0x5c8562(339)], this[_0x5c8562(261)](3);
            });
        }), it(_0x4298a5(553), function () {
            const _0x321e46 = _0x4298a5;
            return sinon[_0x321e46(247)](ciProvider, _0x321e46(554))[_0x321e46(249)](null), cypress[_0x321e46(245)]([
                _0x321e46(319) + this[_0x321e46(555)],
                _0x321e46(541),
                _0x321e46(548),
                '--group=e2e-tests'
            ])[_0x321e46(283)](() => {
                const _0x2bd850 = _0x321e46;
                return this[_0x2bd850(288)](_0x2bd850(556)), snapshotConsoleLogs('INDETERMINATE_CI_BUILD_ID-group 1');
            });
        }), it(_0x4298a5(557), function () {
            const _0x1bf4f3 = _0x4298a5;
            return sinon['stub'](ciProvider, _0x1bf4f3(554))[_0x1bf4f3(249)](null), cypress['start']([
                _0x1bf4f3(319) + this[_0x1bf4f3(555)],
                _0x1bf4f3(541),
                '--key=token-123',
                _0x1bf4f3(558)
            ])[_0x1bf4f3(283)](() => {
                const _0x440093 = _0x1bf4f3;
                return this[_0x440093(288)](_0x440093(556)), snapshotConsoleLogs(_0x440093(559));
            });
        }), it(_0x4298a5(560), function () {
            const _0x14b739 = _0x4298a5;
            return sinon[_0x14b739(247)](ciProvider, _0x14b739(554))[_0x14b739(249)](null), cypress[_0x14b739(245)]([
                _0x14b739(319) + this[_0x14b739(555)],
                _0x14b739(541),
                '--key=token-123',
                _0x14b739(561),
                _0x14b739(558)
            ])['then'](() => {
                const _0x3438c6 = _0x14b739;
                return this[_0x3438c6(288)]('INDETERMINATE_CI_BUILD_ID'), snapshotConsoleLogs(_0x3438c6(562));
            });
        }), it(_0x4298a5(563), function () {
            const _0x2a7ca5 = _0x4298a5;
            return cypress[_0x2a7ca5(245)]([
                '--run-project=' + this['recordPath'],
                _0x2a7ca5(541),
                _0x2a7ca5(548),
                _0x2a7ca5(564)
            ])['then'](() => {
                const _0x231fad = _0x2a7ca5;
                return this[_0x231fad(288)](_0x231fad(565)), snapshotConsoleLogs('INCORRECT_CI_BUILD_ID_USAGE 1');
            });
        }), it(_0x4298a5(566), function () {
            const _0x2afbca = _0x4298a5;
            return cypress[_0x2afbca(245)]([
                '--run-project=' + this[_0x2afbca(555)],
                _0x2afbca(564)
            ])['then'](() => {
                const _0x4d46a9 = _0x2afbca;
                return this['expectExitWithErr'](_0x4d46a9(567)), snapshotConsoleLogs(_0x4d46a9(568));
            });
        }), it('errors and exits when using --group without recording', function () {
            const _0x96daf8 = _0x4298a5;
            return cypress[_0x96daf8(245)]([
                _0x96daf8(319) + this[_0x96daf8(555)],
                '--group=e2e-tests'
            ])['then'](() => {
                const _0x5d4639 = _0x96daf8;
                return this[_0x5d4639(288)]('RECORD_PARAMS_WITHOUT_RECORDING'), snapshotConsoleLogs(_0x5d4639(569));
            });
        }), it('errors and exits when using --parallel without recording', function () {
            const _0x33c350 = _0x4298a5;
            return cypress['start']([
                _0x33c350(319) + this[_0x33c350(555)],
                '--parallel'
            ])[_0x33c350(283)](() => {
                const _0x5eda97 = _0x33c350;
                return this['expectExitWithErr'](_0x5eda97(567)), snapshotConsoleLogs(_0x5eda97(570));
            });
        }), it(_0x4298a5(571), function () {
            const _0x5c62d0 = _0x4298a5;
            return cypress[_0x5c62d0(245)]([
                _0x5c62d0(319) + this[_0x5c62d0(555)],
                _0x5c62d0(572)
            ])[_0x5c62d0(283)](() => {
                const _0x599bbf = _0x5c62d0;
                return this['expectExitWithErr'](_0x599bbf(567)), snapshotConsoleLogs(_0x599bbf(573));
            });
        }), it(_0x4298a5(574), function () {
            const _0x16c546 = _0x4298a5;
            return cypress[_0x16c546(245)]([
                _0x16c546(319) + this[_0x16c546(555)],
                _0x16c546(572),
                _0x16c546(575),
                _0x16c546(558)
            ])[_0x16c546(283)](() => {
                const _0x542ed3 = _0x16c546;
                return this['expectExitWithErr']('RECORD_PARAMS_WITHOUT_RECORDING'), snapshotConsoleLogs(_0x542ed3(576));
            });
        }), it(_0x4298a5(577), function () {
            const _0x3706c4 = _0x4298a5, _0x2df7bf = new Error();
            return _0x2df7bf[_0x3706c4(578)] = 422, _0x2df7bf[_0x3706c4(579)] = {
                'code': _0x3706c4(580),
                'payload': { 'runUrl': 'https://dashboard.cypress.io/runs/12345' }
            }, api['createRun']['rejects'](_0x2df7bf), cypress[_0x3706c4(245)]([
                '--run-project=' + this[_0x3706c4(555)],
                _0x3706c4(541),
                _0x3706c4(548),
                _0x3706c4(575),
                _0x3706c4(581)
            ])[_0x3706c4(283)](() => {
                const _0x24512c = _0x3706c4;
                return this[_0x24512c(288)](_0x24512c(582)), snapshotConsoleLogs(_0x24512c(583));
            });
        }), it(_0x4298a5(584), function () {
            const _0x44d6c2 = _0x4298a5;
            sinon[_0x44d6c2(247)](system, 'info')['returns']({
                'osName': _0x44d6c2(585),
                'osVersion': 'v1'
            }), sinon[_0x44d6c2(247)](browsers, 'ensureAndGetByNameOrPath')[_0x44d6c2(246)]({
                'version': _0x44d6c2(586),
                'displayName': _0x44d6c2(223)
            });
            const _0x5cc3fb = new Error();
            return _0x5cc3fb[_0x44d6c2(578)] = 422, _0x5cc3fb['error'] = {
                'code': 'PARALLEL_GROUP_PARAMS_MISMATCH',
                'payload': { 'runUrl': 'https://dashboard.cypress.io/runs/12345' }
            }, api[_0x44d6c2(542)]['rejects'](_0x5cc3fb), cypress[_0x44d6c2(245)]([
                _0x44d6c2(319) + this[_0x44d6c2(555)],
                _0x44d6c2(541),
                _0x44d6c2(548),
                '--parallel',
                _0x44d6c2(575),
                _0x44d6c2(581)
            ])[_0x44d6c2(283)](() => {
                const _0x5f027e = _0x44d6c2;
                return this[_0x5f027e(288)](_0x5f027e(587)), snapshotConsoleLogs(_0x5f027e(588));
            });
        }), it(_0x4298a5(589), function () {
            const _0x2fdb82 = _0x4298a5, _0x4852c6 = new Error();
            return _0x4852c6[_0x2fdb82(578)] = 422, _0x4852c6[_0x2fdb82(579)] = {
                'code': _0x2fdb82(590),
                'payload': { 'runUrl': _0x2fdb82(591) }
            }, api[_0x2fdb82(542)]['rejects'](_0x4852c6), cypress[_0x2fdb82(245)]([
                '--run-project=' + this[_0x2fdb82(555)],
                '--record',
                '--key=token-123',
                _0x2fdb82(558),
                _0x2fdb82(575),
                _0x2fdb82(581)
            ])['then'](() => {
                const _0x1486ed = _0x2fdb82;
                return this[_0x1486ed(288)]('DASHBOARD_PARALLEL_DISALLOWED'), snapshotConsoleLogs(_0x1486ed(592));
            });
        }), it(_0x4298a5(593), function () {
            const _0x1390a3 = _0x4298a5, _0x306a4e = new Error();
            return _0x306a4e[_0x1390a3(578)] = 422, _0x306a4e[_0x1390a3(579)] = {
                'code': _0x1390a3(594),
                'payload': { 'runUrl': 'https://dashboard.cypress.io/runs/12345' }
            }, api[_0x1390a3(542)]['rejects'](_0x306a4e), cypress['start']([
                _0x1390a3(319) + this[_0x1390a3(555)],
                _0x1390a3(541),
                _0x1390a3(548),
                _0x1390a3(558),
                _0x1390a3(572),
                '--group=electron-smoke-tests',
                _0x1390a3(581)
            ])[_0x1390a3(283)](() => {
                const _0xd8fc83 = _0x1390a3;
                return this[_0xd8fc83(288)](_0xd8fc83(595)), snapshotConsoleLogs('DASHBOARD_PARALLEL_REQUIRED 1');
            });
        }), it('errors and exits when run is already complete', function () {
            const _0x17eae5 = _0x4298a5, _0x28b27b = new Error();
            return _0x28b27b['statusCode'] = 422, _0x28b27b[_0x17eae5(579)] = {
                'code': _0x17eae5(596),
                'payload': { 'runUrl': _0x17eae5(591) }
            }, api[_0x17eae5(542)]['rejects'](_0x28b27b), cypress[_0x17eae5(245)]([
                _0x17eae5(319) + this[_0x17eae5(555)],
                _0x17eae5(541),
                _0x17eae5(548),
                _0x17eae5(572),
                _0x17eae5(575),
                _0x17eae5(581)
            ])[_0x17eae5(283)](() => {
                const _0xb13f78 = _0x17eae5;
                return this[_0xb13f78(288)](_0xb13f78(597)), snapshotConsoleLogs(_0xb13f78(598));
            });
        }), it(_0x4298a5(599), function () {
            const _0x47f0ce = _0x4298a5, _0x4a7d2c = new Error();
            return _0x4a7d2c[_0x47f0ce(578)] = 422, _0x4a7d2c['error'] = {
                'code': _0x47f0ce(600),
                'payload': { 'runUrl': _0x47f0ce(591) }
            }, api[_0x47f0ce(542)][_0x47f0ce(408)](_0x4a7d2c), cypress[_0x47f0ce(245)]([
                _0x47f0ce(319) + this[_0x47f0ce(555)],
                _0x47f0ce(541),
                _0x47f0ce(548),
                '--parallel',
                _0x47f0ce(572),
                _0x47f0ce(575),
                _0x47f0ce(581)
            ])[_0x47f0ce(283)](() => {
                const _0x3b1f93 = _0x47f0ce;
                return this[_0x3b1f93(288)](_0x3b1f93(601)), snapshotConsoleLogs(_0x3b1f93(602));
            });
        });
    }), context('--return-pkg', () => {
        const _0x268b9d = _0x1c5f20;
        beforeEach(() => {
            const _0x237c73 = _0x4ba2;
            console[_0x237c73(227)][_0x237c73(422)](), sinon['stub'](console, _0x237c73(227));
        }), it(_0x268b9d(603), function () {
            const _0x3a99e0 = _0x268b9d;
            return cypress[_0x3a99e0(245)](['--return-pkg'])['then'](() => {
                const _0x1ac5c8 = _0x3a99e0;
                expect(console[_0x1ac5c8(227)])['to']['be'][_0x1ac5c8(264)](_0x1ac5c8(604)), this[_0x1ac5c8(261)](0);
            });
        });
    }), context(_0x1c5f20(605), () => {
        beforeEach(() => {
            const _0xe21dd2 = _0x4ba2;
            console['log'][_0xe21dd2(422)](), sinon[_0xe21dd2(247)](console, 'log');
        }), it('logs version and exits', function () {
            const _0x3820b3 = _0x4ba2;
            return cypress[_0x3820b3(245)]([_0x3820b3(605)])[_0x3820b3(283)](() => {
                const _0x260099 = _0x3820b3;
                expect(console[_0x260099(227)])['to']['be']['calledWith'](pkg[_0x260099(259)]), this[_0x260099(261)](0);
            });
        });
    }), context(_0x1c5f20(606), () => {
        const _0x36c5f3 = _0x1c5f20;
        beforeEach(() => {
            const _0x2e1f50 = _0x4ba2;
            console[_0x2e1f50(227)][_0x2e1f50(422)](), sinon['stub'](console, 'log');
        }), it(_0x36c5f3(607), function () {
            const _0x3a5449 = _0x36c5f3;
            return cypress['start']([
                _0x3a5449(606),
                _0x3a5449(608)
            ])['then'](() => {
                const _0x3bb4ac = _0x3a5449;
                expect(console[_0x3bb4ac(227)])['to']['be']['calledWith'](_0x3bb4ac(403)), this[_0x3bb4ac(261)](0);
            });
        });
    }), context(_0x1c5f20(609), () => {
        const _0x19c0a1 = _0x1c5f20;
        beforeEach(function () {
            const _0x4dfe0f = _0x4ba2;
            this[_0x4dfe0f(298)] = {
                'on': sinon[_0x4dfe0f(247)](),
                'webContents': { 'on': sinon[_0x4dfe0f(247)]() }
            }, sinon[_0x4dfe0f(247)](electron[_0x4dfe0f(299)], 'on')[_0x4dfe0f(256)](_0x4dfe0f(300))[_0x4dfe0f(314)](), sinon[_0x4dfe0f(247)](Windows, _0x4dfe0f(301))['resolves'](this[_0x4dfe0f(298)]), sinon[_0x4dfe0f(247)](ServerE2E[_0x4dfe0f(252)], _0x4dfe0f(610)), sinon[_0x4dfe0f(257)](Events, 'start'), sinon['stub'](electron[_0x4dfe0f(611)], 'on');
        }), it(_0x19c0a1(612), () => {
            const _0x3ce806 = _0x19c0a1;
            return sinon[_0x3ce806(247)](interactiveMode, _0x3ce806(300)), cypress[_0x3ce806(245)]([
                _0x3ce806(613),
                _0x3ce806(614),
                _0x3ce806(615)
            ])[_0x3ce806(283)](() => {
                const _0x120441 = _0x3ce806;
                expect(interactiveMode[_0x120441(300)])['to']['be'][_0x120441(264)]({
                    'updating': !![],
                    'config': {
                        'port': 2121,
                        'pageLoadTimeout': 1000
                    }
                });
            });
        }), it('passes options to Events.start', () => {
            const _0x40823c = _0x19c0a1;
            return cypress[_0x40823c(245)]([
                _0x40823c(614),
                _0x40823c(615)
            ])[_0x40823c(283)](() => {
                expect(Events['start'])['to']['be']['calledWithMatch']({
                    'config': {
                        'pageLoadTimeout': 1000,
                        'port': 2121
                    }
                });
            });
        }), it(_0x19c0a1(616), function () {
            const _0x27a2c6 = _0x19c0a1, _0x510e2a = sinon['stub'](ServerE2E['prototype'], _0x27a2c6(301))[_0x27a2c6(246)]([]);
            return process[_0x27a2c6(493)][_0x27a2c6(617)] = 'foo', process[_0x27a2c6(493)][_0x27a2c6(450)] = _0x27a2c6(618), process[_0x27a2c6(493)]['CYPRESS_port'] = _0x27a2c6(619), process['env'][_0x27a2c6(620)] = _0x27a2c6(621), process[_0x27a2c6(493)][_0x27a2c6(622)] = 'false', user['set']({
                'name': _0x27a2c6(623),
                'authToken': _0x27a2c6(624)
            })[_0x27a2c6(283)](() => {
                const _0xad6120 = _0x27a2c6;
                return settings[_0xad6120(391)](this[_0xad6120(237)]);
            })[_0x27a2c6(283)](_0x51d21a => {
                const _0x2b1a0e = _0x27a2c6;
                return _0x51d21a[_0x2b1a0e(625)] = _0x2b1a0e(626), settings[_0x2b1a0e(400)](this[_0x2b1a0e(237)], _0x51d21a);
            })[_0x27a2c6(283)](() => {
                const _0x41073c = _0x27a2c6;
                return cypress[_0x41073c(245)]([
                    _0x41073c(614),
                    _0x41073c(286),
                    _0x41073c(627),
                    _0x41073c(628),
                    '--env=baz=baz'
                ]);
            })['then'](() => {
                const _0x33f6d6 = _0x27a2c6, _0x428209 = Events[_0x33f6d6(245)][_0x33f6d6(325)]['args'][0];
                return Events[_0x33f6d6(629)](_0x428209, {}, {}, 123, _0x33f6d6(630), this[_0x33f6d6(237)]);
            })[_0x27a2c6(283)](() => {
                const _0x539f01 = _0x27a2c6, _0x5dc2f2 = openProject[_0x539f01(477)]()['options'];
                expect(_0x5dc2f2[_0x539f01(521)])['to']['eq'](2121), expect(_0x5dc2f2[_0x539f01(631)])['to']['eq'](1000), expect(_0x5dc2f2[_0x539f01(632)])['to']['eq'](![]), expect(_0x5dc2f2[_0x539f01(493)])['to'][_0x539f01(633)]({ 'baz': _0x539f01(634) }), expect(_0x510e2a)['to']['be'][_0x539f01(339)];
                const _0x9a582b = _0x510e2a[_0x539f01(266)](0)['args'][0];
                expect(_0x9a582b['fileServerFolder'])['to']['eq'](path[_0x539f01(230)](this[_0x539f01(237)], _0x539f01(406))), expect(_0x9a582b[_0x539f01(631)])['to']['eq'](1000), expect(_0x9a582b['port'])['to']['eq'](2121), expect(_0x9a582b['baseUrl'])['to']['eq'](_0x539f01(618)), expect(_0x9a582b[_0x539f01(635)])['to']['be']['false'], expect(_0x9a582b[_0x539f01(636)])['to']['eq'](5555), expect(_0x9a582b[_0x539f01(493)][_0x539f01(634)])['to']['eq'](_0x539f01(634)), expect(_0x9a582b[_0x539f01(493)])[_0x539f01(312)]['to'][_0x539f01(331)][_0x539f01(371)](_0x539f01(637)), expect(_0x9a582b[_0x539f01(493)])[_0x539f01(312)]['to']['have'][_0x539f01(371)](_0x539f01(521)), expect(_0x9a582b[_0x539f01(493)])[_0x539f01(312)]['to'][_0x539f01(331)][_0x539f01(371)](_0x539f01(638)), expect(_0x9a582b[_0x539f01(493)])['not']['to'][_0x539f01(331)][_0x539f01(371)](_0x539f01(635)), expect(_0x9a582b[_0x539f01(493)])[_0x539f01(312)]['to'][_0x539f01(331)]['property']('responseTimeout'), expect(_0x9a582b['resolved'][_0x539f01(637)])['to']['deep']['eq']({
                    'value': _0x539f01(406),
                    'from': _0x539f01(493)
                }), expect(_0x9a582b[_0x539f01(486)]['pageLoadTimeout'])['to']['deep']['eq']({
                    'value': 1000,
                    'from': _0x539f01(488)
                }), expect(_0x9a582b[_0x539f01(486)][_0x539f01(521)])['to']['deep']['eq']({
                    'value': 2121,
                    'from': _0x539f01(488)
                }), expect(_0x9a582b[_0x539f01(486)]['baseUrl'])['to'][_0x539f01(487)]['eq']({
                    'value': 'http://localhost',
                    'from': 'env'
                }), expect(_0x9a582b[_0x539f01(486)]['watchForFileChanges'])['to']['deep']['eq']({
                    'value': ![],
                    'from': _0x539f01(493)
                }), expect(_0x9a582b[_0x539f01(486)][_0x539f01(636)])['to']['deep']['eq']({
                    'value': 5555,
                    'from': 'env'
                }), expect(_0x9a582b['resolved'][_0x539f01(493)][_0x539f01(634)])['to'][_0x539f01(487)]['eq']({
                    'value': _0x539f01(634),
                    'from': 'cli'
                });
            });
        }), it('sends warning when baseUrl cannot be verified', function () {
            const _0x17cc6b = _0x19c0a1, _0x2ed319 = new EE(), _0x892fff = { 'sender': { 'send': sinon['stub']() } }, _0x3282c6 = { 'message': _0x17cc6b(639) };
            return sinon[_0x17cc6b(247)](ServerE2E[_0x17cc6b(252)], _0x17cc6b(301))[_0x17cc6b(246)]([
                2121,
                _0x3282c6
            ]), cypress[_0x17cc6b(245)]([
                _0x17cc6b(614),
                _0x17cc6b(286),
                'pageLoadTimeout=1000',
                '--foo=bar',
                _0x17cc6b(640)
            ])['then'](() => {
                const _0x5bbd00 = _0x17cc6b, _0x40cb2a = Events[_0x5bbd00(245)]['firstCall'][_0x5bbd00(228)][0];
                return Events[_0x5bbd00(629)](_0x40cb2a, _0x2ed319, _0x892fff, 123, _0x5bbd00(641)), Events['handleEvent'](_0x40cb2a, _0x2ed319, _0x892fff, 123, _0x5bbd00(630), this['todosPath']);
            })[_0x17cc6b(283)](() => {
                const _0xbdf615 = _0x17cc6b;
                expect(_0x892fff[_0xbdf615(642)]['send'][_0xbdf615(256)](_0xbdf615(643))[_0xbdf615(325)][_0xbdf615(228)][1][_0xbdf615(644)])['to'][_0xbdf615(633)](_0x3282c6);
            });
        }), describe(_0x19c0a1(535), () => {
            const _0x200811 = _0x19c0a1;
            beforeEach(function () {
                const _0x11a180 = _0x4ba2;
                this[_0x11a180(537)] = 'foo.bar.baz.asdf.quux.json', this['open'] = sinon[_0x11a180(247)](ServerE2E[_0x11a180(252)], 'open')[_0x11a180(246)]([]);
            }), it(_0x200811(645), function () {
                const _0x5474bf = _0x200811;
                return sinon[_0x5474bf(247)](fs, _0x5474bf(646)), fs[_0x5474bf(646)][_0x5474bf(256)](path[_0x5474bf(230)](this[_0x5474bf(364)], this[_0x5474bf(537)]))[_0x5474bf(246)]({
                    'env': { 'foo': _0x5474bf(494) },
                    'port': 2020
                }), fs[_0x5474bf(646)]['callThrough'](), cypress['start']([_0x5474bf(647) + this[_0x5474bf(537)]])['then'](() => {
                    const _0x3153ba = _0x5474bf, _0x4c3e5f = Events['start'][_0x3153ba(325)][_0x3153ba(228)][0];
                    return Events['handleEvent'](_0x4c3e5f, {}, {}, 123, _0x3153ba(630), this[_0x3153ba(364)]);
                })['then'](() => {
                    const _0x149f27 = _0x5474bf;
                    expect(this[_0x149f27(301)])['to']['be'][_0x149f27(339)];
                    const _0x45bbce = this['open'][_0x149f27(266)](0)[_0x149f27(228)][0];
                    expect(_0x45bbce[_0x149f27(493)]['foo'])['to'][_0x149f27(648)](_0x149f27(494)), expect(_0x45bbce['port'])['to'][_0x149f27(648)](2020);
                });
            }), it(_0x200811(649), function () {
                const _0x47e4d0 = _0x200811;
                return cypress[_0x47e4d0(245)]([_0x47e4d0(647) + this[_0x47e4d0(537)]])[_0x47e4d0(283)](() => {
                    const _0x344acf = _0x47e4d0;
                    debug(_0x344acf(650), this[_0x344acf(537)]);
                    const _0x50edd0 = Events[_0x344acf(245)]['firstCall'][_0x344acf(228)][0];
                    return debug('first call arguments %o', Events['start'][_0x344acf(325)][_0x344acf(228)]), Events['handleEvent'](_0x50edd0, {}, {}, 123, 'open:project', this['pristinePath']);
                })[_0x47e4d0(283)](() => {
                    const _0x58ae0e = _0x47e4d0;
                    return expect(this[_0x58ae0e(301)], _0x58ae0e(651))['to']['be'][_0x58ae0e(339)], fs['readJsonAsync'](path[_0x58ae0e(230)](this[_0x58ae0e(364)], this['filename']))[_0x58ae0e(283)](_0x5d796e => {
                        const _0x272202 = _0x58ae0e;
                        expect(_0x5d796e, _0x272202(652))['to'][_0x272202(487)][_0x272202(648)]({});
                    });
                });
            });
        });
    }), context(_0x1c5f20(653), () => {
        const _0x2a6e92 = _0x1c5f20;
        beforeEach(() => {
            const _0x4caa37 = _0x4ba2;
            errors[_0x4caa37(254)][_0x4caa37(422)](), sinon[_0x4caa37(247)](electron[_0x4caa37(299)], 'on')[_0x4caa37(256)](_0x4caa37(300))[_0x4caa37(314)](), sinon[_0x4caa37(247)](interactiveMode, _0x4caa37(300))[_0x4caa37(246)](), sinon[_0x4caa37(257)](errors, 'warning');
        }), it(_0x2a6e92(654), () => {
            const _0x1ae4ec = _0x2a6e92;
            return cypress['start']()[_0x1ae4ec(283)](() => {
                const _0x23fcc6 = _0x1ae4ec;
                expect(errors[_0x23fcc6(254)])['to']['be']['calledWith'](_0x23fcc6(655)), expect(console[_0x23fcc6(227)])['to']['be'][_0x23fcc6(264)](_0x23fcc6(656)), expect(console[_0x23fcc6(227)])['to']['be'][_0x23fcc6(264)]('https://on.cypress.io/installing-cypress');
            });
        }), it(_0x2a6e92(657), () => {
            const _0x1b6229 = _0x2a6e92;
            return cypress[_0x1b6229(245)]([_0x1b6229(308)])[_0x1b6229(283)](() => {
                const _0xf5cf2d = _0x1b6229;
                expect(errors[_0xf5cf2d(254)])['not']['to']['be'][_0xf5cf2d(339)];
            });
        });
    }), context(_0x1c5f20(658), () => {
        const _0xb5799a = _0x1c5f20;
        beforeEach(() => {
            const _0x9519a7 = _0x4ba2;
            sinon[_0x9519a7(247)](electron[_0x9519a7(299)], 'on')['withArgs']('ready')['yieldsAsync'](), sinon['stub'](interactiveMode, _0x9519a7(300))[_0x9519a7(246)]();
        }), it(_0xb5799a(659), () => {
            const _0x1164d3 = _0xb5799a;
            return cypress['start']()[_0x1164d3(283)](() => {
                const _0x14a153 = _0x1164d3;
                expect(interactiveMode['ready'])['to']['be'][_0x14a153(323)];
            });
        });
    });
});