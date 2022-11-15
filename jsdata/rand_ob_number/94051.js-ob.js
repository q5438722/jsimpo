require('../spec_helper');
const R = require('ramda'), _ = require('lodash'), path = require('path'), EE = require('events'), http = require('http'), Promise = require('bluebird'), electron = require('electron'), commitInfo = require('@cypress/commit-info'), Fixtures = require('../support/helpers/fixtures'), snapshot = require('snap-shot-it'), stripAnsi = require('strip-ansi'), debug = require('debug')('test'), pkg = require('@packages/root'), detect = require('@packages/launcher/lib/detect'), launch = require('@packages/launcher/lib/browsers'), extension = require('@packages/extension'), argsUtil = require(root + 'lib/util/args'), {fs} = require(root + 'lib/util/fs'), ciProvider = require(root + 'lib/util/ci_provider'), settings = require(root + 'lib/util/settings'), Events = require(root + 'lib/gui/events'), Windows = require(root + 'lib/gui/windows'), interactiveMode = require(root + 'lib/modes/interactive-e2e'), runMode = require(root + 'lib/modes/run'), api = require(root + 'lib/api'), cwd = require(root + 'lib/cwd'), user = require(root + 'lib/user'), config = require(root + 'lib/config'), cache = require(root + 'lib/cache'), errors = require(root + 'lib/errors'), plugins = require(root + 'lib/plugins'), cypress = require(root + 'lib/cypress'), ProjectBase = require(root + 'lib/project-base')['ProjectBase'], {getId} = require(root + 'lib/project_static'), {ServerE2E} = require(root + 'lib/server-e2e'), Reporter = require(root + 'lib/reporter'), Watchers = require(root + 'lib/watchers'), browsers = require(root + 'lib/browsers'), videoCapture = require(root + 'lib/video_capture'), browserUtils = require(root + 'lib/browsers/utils'), chromeBrowser = require(root + 'lib/browsers/chrome'), openProject = require(root + 'lib/open_project'), env = require(root + 'lib/util/env'), v = require(root + 'lib/util/validation'), system = require(root + 'lib/util/system'), appData = require(root + 'lib/util/app_data'), electronApp = require('../../lib/util/electron-app'), savedState = require(root + 'lib/saved_state'), TYPICAL_BROWSERS = [
        {
            'name': 'chrome',
            'family': 'chromium',
            'channel': 'stable',
            'displayName': 'Chrome',
            'version': '60.0.3112.101',
            'path': '/Applications/Google\x20Chrome.app/Contents/MacOS/Google\x20Chrome',
            'majorVersion': '60'
        },
        {
            'name': 'chromium',
            'family': 'chromium',
            'channel': 'stable',
            'displayName': 'Chromium',
            'version': '49.0.2609.0',
            'path': '/Users/bmann/Downloads/chrome-mac/Chromium.app/Contents/MacOS/Chromium',
            'majorVersion': '49'
        },
        {
            'name': 'chrome',
            'family': 'chromium',
            'channel': 'canary',
            'displayName': 'Canary',
            'version': '62.0.3197.0',
            'path': '/Applications/Google\x20Chrome\x20Canary.app/Contents/MacOS/Google\x20Chrome\x20Canary',
            'majorVersion': '62'
        }
    ], ELECTRON_BROWSER = {
        'name': 'electron',
        'family': 'chromium',
        'displayName': 'Electron',
        'path': '',
        'version': '99.101.1234',
        'majorVersion': 0x63
    }, previousCwd = process['cwd'](), snapshotConsoleLogs = function (_0xfeaafb) {
        const _0x5ddaf6 = _['chain'](console['log']['args'])['map'](_0x3b8837 => {
            return _0x3b8837['join']('\x20');
        })['join']('\x0a')['value']();
        return process['chdir'](previousCwd), snapshot(_0xfeaafb, stripAnsi(_0x5ddaf6));
    };
describe('lib/cypress', () => {
    require('mocha-banner')['register'](), beforeEach(function () {
        this['timeout'](0x142c + 0x19c * -0x20 + -0x5 * -0xc84), cache['__removeSync'](), Fixtures['scaffold'](), this['todosPath'] = Fixtures['projectPath']('todos'), this['pristinePath'] = Fixtures['projectPath']('pristine'), this['noScaffolding'] = Fixtures['projectPath']('no-scaffolding'), this['recordPath'] = Fixtures['projectPath']('record'), this['pluginConfig'] = Fixtures['projectPath']('plugin-config'), this['pluginBrowser'] = Fixtures['projectPath']('plugin-browser'), this['idsPath'] = Fixtures['projectPath']('ids'), sinon['stub'](videoCapture, 'start')['resolves']({}), sinon['stub'](plugins, 'init')['resolves'](undefined), sinon['stub'](electronApp, 'isRunning')['returns'](!![]), sinon['stub'](extension, 'setHostAndPath')['resolves'](), sinon['stub'](detect, 'detect')['resolves'](TYPICAL_BROWSERS), sinon['stub'](process, 'exit'), sinon['stub'](ServerE2E['prototype'], 'reset'), sinon['stub'](errors, 'warning')['callThrough']()['withArgs']('INVOKED_BINARY_OUTSIDE_NPM_MODULE')['returns'](null), sinon['spy'](errors, 'log'), sinon['spy'](errors, 'logException'), sinon['spy'](console, 'log'), sinon['stub'](process, 'versions')['value']({
            'chrome': ELECTRON_BROWSER['version'],
            'electron': '123.45.6789'
        }), this['expectExitWith'] = _0xc48c4d => {
            expect(process['exit'])['to']['be']['calledWith'](_0xc48c4d);
        }, this['expectExitWithErr'] = (_0x5acee7, _0x3e8594, _0x3ad7dd) => {
            expect(errors['log'], 'error\x20was\x20logged')['to']['be']['calledWithMatch']({ 'type': _0x5acee7 }), expect(process['exit'], 'process.exit\x20was\x20called')['to']['be']['calledWith'](-0x20d1 * 0x1 + -0x211f + 0x41f1);
            const _0x3d45f9 = errors['log']['getCall'](-0x1f65 * -0x1 + -0x37 * -0xaa + 0x43eb * -0x1)['args'][-0x3 * 0x25d + -0x31 * -0x47 + -0x680];
            return _0x3e8594 && expect(_0x3d45f9['message'], 'error\x20text')['to']['include'](_0x3e8594), _0x3ad7dd && expect(_0x3d45f9['message'], 'second\x20error\x20text')['to']['include'](_0x3ad7dd), _0x3d45f9;
        };
    }), afterEach(async () => {
        try {
            await openProject['close']();
        } catch (_0x4fdd8f) {
        }
        Fixtures['remove']();
    }), context('test\x20browsers', () => {
        it('has\x20valid\x20browsers', () => {
            expect(v['isValidBrowserList']('browsers', TYPICAL_BROWSERS))['to']['be']['true'];
        }), it('has\x20valid\x20electron\x20browser', () => {
            expect(v['isValidBrowserList']('browsers', [ELECTRON_BROWSER]))['to']['be']['true'];
        }), it('allows\x20browser\x20major\x20to\x20be\x20a\x20number', () => {
            const _0x2f777c = {
                'name': 'Edge\x20Beta',
                'family': 'chromium',
                'displayName': 'Edge\x20Beta',
                'version': '80.0.328.2',
                'path': '/some/path',
                'majorVersion': 0x50
            };
            expect(v['isValidBrowserList']('browsers', [_0x2f777c]))['to']['be']['true'];
        }), it('validates\x20returned\x20list', () => {
            return browserUtils['getBrowsers']()['then'](_0x3b6f9c => {
                expect(v['isValidBrowserList']('browsers', _0x3b6f9c))['to']['be']['true'];
            });
        });
    }), context('error\x20handling', function () {
        it('exits\x20if\x20config\x20cannot\x20be\x20parsed', function () {
            return cypress['start']([
                '--config',
                'xyz'
            ])['then'](() => {
                const _0x4426cc = this['expectExitWithErr']('COULD_NOT_PARSE_ARGUMENTS');
                snapshot('could\x20not\x20parse\x20config\x20error', stripAnsi(_0x4426cc['message']));
            });
        }), it('exits\x20if\x20env\x20cannot\x20be\x20parsed', function () {
            return cypress['start']([
                '--env',
                'a123'
            ])['then'](() => {
                const _0x577fe4 = this['expectExitWithErr']('COULD_NOT_PARSE_ARGUMENTS');
                snapshot('could\x20not\x20parse\x20env\x20error', stripAnsi(_0x577fe4['message']));
            });
        }), it('exits\x20if\x20reporter\x20options\x20cannot\x20be\x20parsed', function () {
            return cypress['start']([
                '--reporterOptions',
                'nonono'
            ])['then'](() => {
                const _0x4fc397 = this['expectExitWithErr']('COULD_NOT_PARSE_ARGUMENTS');
                snapshot('could\x20not\x20parse\x20reporter\x20options\x20error', stripAnsi(_0x4fc397['message']));
            });
        });
    }), context('invalid\x20config', function () {
        beforeEach(function () {
            this['win'] = {
                'on': sinon['stub'](),
                'webContents': { 'on': sinon['stub']() }
            }, sinon['stub'](electron['app'], 'on')['withArgs']('ready')['yieldsAsync'](), sinon['stub'](Windows, 'open')['resolves'](this['win']);
        }), it('shows\x20warning\x20if\x20config\x20is\x20not\x20valid', function () {
            return cypress['start']([
                '--config=test=false',
                '--cwd=/foo/bar'
            ])['then'](() => {
                expect(errors['warning'])['to']['be']['calledWith']('INVALID_CONFIG_OPTION'), expect(console['log'])['to']['be']['calledWithMatch']('`test`\x20is\x20not\x20a\x20valid\x20configuration\x20option'), expect(console['log'])['to']['be']['calledWithMatch']('https://on.cypress.io/configuration');
            });
        }), it('shows\x20warning\x20when\x20multiple\x20config\x20are\x20not\x20valid', function () {
            return cypress['start']([
                '--config=test=false,foo=bar',
                '--cwd=/foo/bar'
            ])['then'](() => {
                expect(errors['warning'])['to']['be']['calledWith']('INVALID_CONFIG_OPTION'), expect(console['log'])['to']['be']['calledWithMatch']('`test`\x20is\x20not\x20a\x20valid\x20configuration\x20option'), expect(console['log'])['to']['be']['calledWithMatch']('`foo`\x20is\x20not\x20a\x20valid\x20configuration\x20option'), expect(console['log'])['to']['be']['calledWithMatch']('https://on.cypress.io/configuration'), snapshotConsoleLogs('INVALID_CONFIG_OPTION');
            });
        }), it('does\x20not\x20show\x20warning\x20if\x20config\x20is\x20valid', function () {
            return cypress['start'](['--config=trashAssetsBeforeRuns=false'])['then'](() => {
                expect(errors['warning'])['to']['not']['be']['calledWith']('INVALID_CONFIG_OPTION');
            });
        });
    }), context('--run-project', () => {
        beforeEach(() => {
            sinon['stub'](electron['app'], 'on')['withArgs']('ready')['yieldsAsync'](), sinon['stub'](runMode, 'waitForSocketConnection')['resolves'](), sinon['stub'](runMode, 'listenForProjectEnd')['resolves']({ 'stats': { 'failures': 0x0 } }), sinon['stub'](browsers, 'open'), sinon['stub'](commitInfo, 'getRemoteOrigin')['resolves']('remoteOrigin');
        }), it('runs\x20project\x20headlessly\x20and\x20exits\x20with\x20exit\x20code\x200', function () {
            return cypress['start'](['--run-project=' + this['todosPath']])['then'](() => {
                expect(browsers['open'])['to']['be']['calledWithMatch'](ELECTRON_BROWSER), this['expectExitWith'](-0x2 * 0x462 + 0x25f * -0x2 + 0x7 * 0x1ee);
            });
        }), it('sets\x20--headed\x20false\x20if\x20--headless', function () {
            return sinon['spy'](cypress, 'startInMode'), cypress['start']([
                '--run-project=' + this['todosPath'],
                '--headless'
            ])['then'](() => {
                expect(browsers['open'])['to']['be']['calledWithMatch'](ELECTRON_BROWSER), this['expectExitWith'](-0xa48 + -0x14fd + 0x1f45), expect(cypress['startInMode'])['to']['be']['calledOnce'], expect(cypress['startInMode'])['to']['be']['calledWith']('run');
                const _0x5c916c = cypress['startInMode']['firstCall']['args'][0x5 * 0x69c + -0x2329 + 0x21e];
                expect(_0x5c916c)['to']['include']({
                    'headless': !![],
                    'headed': ![]
                });
            });
        }), it('throws\x20an\x20error\x20if\x20both\x20--headed\x20and\x20--headless\x20are\x20true', function () {
            expect(() => cypress['start']([
                '--run-project=' + this['todosPath'],
                '--headless',
                '--headed'
            ]))['to']['throw']('Impossible\x20options:\x20both\x20headless\x20and\x20headed\x20are\x20true');
        }), describe('strips\x20--', () => {
            beforeEach(() => {
                sinon['spy'](argsUtil, 'toObject');
            }), it('strips\x20leading', function () {
                return cypress['start']([
                    '--',
                    '--run-project=' + this['todosPath']
                ])['then'](() => {
                    expect(argsUtil['toObject'])['to']['have']['been']['calledWith'](['--run-project=' + this['todosPath']]), expect(browsers['open'])['to']['be']['calledWithMatch'](ELECTRON_BROWSER), this['expectExitWith'](0xa3 * -0x8 + 0xfd1 + -0xab9);
                });
            }), it('strips\x20in\x20the\x20middle', function () {
                return cypress['start']([
                    '--run-project=' + this['todosPath'],
                    '--',
                    '--browser=electron'
                ])['then'](() => {
                    expect(argsUtil['toObject'])['to']['have']['been']['calledWith']([
                        '--run-project=' + this['todosPath'],
                        '--browser=electron'
                    ]), expect(browsers['open'])['to']['be']['calledWithMatch'](ELECTRON_BROWSER), this['expectExitWith'](0x355 * 0x1 + 0x43f * -0x8 + 0x1ea3);
                });
            });
        }), it('runs\x20project\x20headlessly\x20and\x20exits\x20with\x20exit\x20code\x2010', function () {
            return sinon['stub'](runMode, 'runSpecs')['resolves']({ 'totalFailed': 0xa }), cypress['start'](['--run-project=' + this['todosPath']])['then'](() => {
                this['expectExitWith'](0xdd7 * -0x1 + -0x2425 + 0x3206);
            });
        }), it('does\x20not\x20generate\x20a\x20project\x20id\x20even\x20if\x20missing\x20one', function () {
            return sinon['stub'](api, 'createProject'), user['set']({ 'authToken': 'auth-token-123' })['then'](() => {
                return cypress['start'](['--run-project=' + this['noScaffolding']]);
            })['then'](() => {
                this['expectExitWith'](0xc11 * 0x2 + 0x193b + -0x315d);
            })['then'](() => {
                return expect(api['createProject'])['not']['to']['be']['called'], new ProjectBase({
                    'projectRoot': this['noScaffolding'],
                    'testingType': 'e2e'
                })['getProjectId']()['then'](() => {
                    throw new Error('should\x20have\x20caught\x20error\x20but\x20did\x20not');
                })['catch'](_0x3c5ff8 => {
                    expect(_0x3c5ff8['type'])['to']['eq']('NO_PROJECT_ID');
                });
            });
        }), it('does\x20not\x20add\x20project\x20to\x20the\x20global\x20cache', function () {
            return cache['getProjectRoots']()['then'](_0x4d7179 => {
                return expect(_0x4d7179['length'])['to']['eq'](-0x815 + 0x2709 * -0x1 + 0x2f1e), cypress['start'](['--run-project=' + this['todosPath']]);
            })['then'](() => {
                return cache['getProjectRoots']();
            })['then'](_0x30ce91 => {
                expect(_0x30ce91['length'])['to']['eq'](0x1a6 * 0x10 + 0x5f4 + -0x815 * 0x4);
            });
        }), it('runs\x20project\x20by\x20relative\x20spec\x20and\x20exits\x20with\x20status\x200', function () {
            const _0x192052 = path['relative'](cwd(), this['todosPath']);
            return cypress['start']([
                '--run-project=' + this['todosPath'],
                '--spec=' + _0x192052 + '/tests/test2.coffee'
            ])['then'](() => {
                expect(browsers['open'])['to']['be']['calledWithMatch'](ELECTRON_BROWSER, { 'url': 'http://localhost:8888/__/#/tests/integration/test2.coffee' }), this['expectExitWith'](0x2482 + -0xacc + -0xcdb * 0x2);
            });
        }), it('runs\x20project\x20by\x20specific\x20spec\x20with\x20default\x20configuration', function () {
            return cypress['start']([
                '--run-project=' + this['idsPath'],
                '--spec=' + this['idsPath'] + '/cypress/integration/bar.js',
                '--config',
                'port=2020'
            ])['then'](() => {
                expect(browsers['open'])['to']['be']['calledWithMatch'](ELECTRON_BROWSER, { 'url': 'http://localhost:2020/__/#/tests/integration/bar.js' }), this['expectExitWith'](-0x2 * -0x119a + 0x1eab * -0x1 + -0x489);
            });
        }), it('runs\x20project\x20by\x20specific\x20absolute\x20spec\x20and\x20exits\x20with\x20status\x200', function () {
            return cypress['start']([
                '--run-project=' + this['todosPath'],
                '--spec=' + this['todosPath'] + '/tests/test2.coffee'
            ])['then'](() => {
                expect(browsers['open'])['to']['be']['calledWithMatch'](ELECTRON_BROWSER, { 'url': 'http://localhost:8888/__/#/tests/integration/test2.coffee' }), this['expectExitWith'](-0x3 * 0x9ac + -0x1c15 + -0x1 * -0x3919);
            });
        }), it('runs\x20project\x20by\x20limiting\x20spec\x20files\x20via\x20config.testFiles\x20string\x20glob\x20pattern', function () {
            return cypress['start']([
                '--run-project=' + this['todosPath'],
                '--config=testFiles=' + this['todosPath'] + '/tests/test2.coffee'
            ])['then'](() => {
                expect(browsers['open'])['to']['be']['calledWithMatch'](ELECTRON_BROWSER, { 'url': 'http://localhost:8888/__/#/tests/integration/test2.coffee' }), this['expectExitWith'](0x1804 + -0x2 * 0xf75 + 0x6e6);
            });
        }), it('runs\x20project\x20by\x20limiting\x20spec\x20files\x20via\x20config.testFiles\x20as\x20a\x20JSON\x20array\x20of\x20string\x20glob\x20patterns', function () {
            return cypress['start']([
                '--run-project=' + this['todosPath'],
                '--config=testFiles=[\x22**/test2.coffee\x22,\x22**/test1.js\x22]'
            ])['then'](() => {
                expect(browsers['open'])['to']['be']['calledWithMatch'](ELECTRON_BROWSER, { 'url': 'http://localhost:8888/__/#/tests/integration/test2.coffee' });
            })['then'](() => {
                expect(browsers['open'])['to']['be']['calledWithMatch'](ELECTRON_BROWSER, { 'url': 'http://localhost:8888/__/#/tests/integration/test1.js' }), this['expectExitWith'](0x907 * 0x2 + -0x15d * 0x1 + -0x10b1);
            });
        }), it('does\x20not\x20watch\x20settings\x20or\x20plugins\x20in\x20run\x20mode', function () {
            const _0x27d375 = sinon['spy'](Watchers['prototype'], 'watch'), _0x5883af = sinon['spy'](Watchers['prototype'], 'watchTree');
            return cypress['start'](['--run-project=' + this['pluginConfig']])['then'](() => {
                expect(_0x5883af)['not']['to']['be']['called'], expect(_0x27d375)['not']['to']['be']['called'], this['expectExitWith'](0x12a8 + 0x14 * 0x183 + 0x254 * -0x15);
            });
        }), it('scaffolds\x20out\x20integration\x20and\x20example\x20specs\x20if\x20they\x20do\x20not\x20exist\x20when\x20not\x20runMode', function () {
            return config['get'](this['pristinePath'])['then'](_0x29ae99 => {
                return fs['statAsync'](_0x29ae99['integrationFolder'])['then'](() => {
                    throw new Error('integrationFolder\x20should\x20not\x20exist!');
                })['catch'](() => {
                    return cypress['start']([
                        '--run-project=' + this['pristinePath'],
                        '--no-run-mode'
                    ]);
                })['then'](() => {
                    return fs['statAsync'](_0x29ae99['integrationFolder']);
                })['then'](() => {
                    return Promise['join'](fs['statAsync'](path['join'](_0x29ae99['integrationFolder'], '1-getting-started', 'todo.spec.js')), fs['statAsync'](path['join'](_0x29ae99['integrationFolder'], '2-advanced-examples', 'actions.spec.js')), fs['statAsync'](path['join'](_0x29ae99['integrationFolder'], '2-advanced-examples', 'files.spec.js')), fs['statAsync'](path['join'](_0x29ae99['integrationFolder'], '2-advanced-examples', 'viewport.spec.js')));
                });
            });
        }), it('does\x20not\x20scaffold\x20when\x20headless\x20and\x20exits\x20with\x20error\x20when\x20no\x20existing\x20project', function () {
            const _0x3dea7d = function (_0x2833aa, _0x5f8423) {
                if (!_0x2833aa['isRejected']())
                    throw new Error('File\x20or\x20folder\x20was\x20scaffolded\x20at\x20index:\x20' + _0x5f8423);
                expect(_0x2833aa['reason']())['to']['have']['property']('code', 'ENOENT');
            };
            return Promise['all']([
                fs['statAsync'](path['join'](this['pristinePath'], 'cypress'))['reflect'](),
                fs['statAsync'](path['join'](this['pristinePath'], 'cypress.json'))['reflect']()
            ])['each'](_0x3dea7d)['then'](() => {
                return cypress['start'](['--run-project=' + this['pristinePath']]);
            })['then'](() => {
                return Promise['all']([
                    fs['statAsync'](path['join'](this['pristinePath'], 'cypress'))['reflect'](),
                    fs['statAsync'](path['join'](this['pristinePath'], 'cypress.json'))['reflect']()
                ]);
            })['each'](_0x3dea7d)['then'](() => {
                this['expectExitWithErr']('CONFIG_FILE_NOT_FOUND', this['pristinePath']);
            });
        }), it('does\x20not\x20scaffold\x20integration\x20or\x20example\x20specs\x20when\x20runMode', function () {
            return settings['write'](this['pristinePath'], {})['then'](() => {
                return cypress['start'](['--run-project=' + this['pristinePath']]);
            })['then'](() => {
                return fs['statAsync'](path['join'](this['pristinePath'], 'cypress', 'integration'));
            })['then'](() => {
                throw new Error('integration\x20folder\x20should\x20not\x20exist!');
            })['catch']({ 'code': 'ENOENT' }, () => {
            });
        }), it('scaffolds\x20out\x20fixtures\x20+\x20files\x20if\x20they\x20do\x20not\x20exist', function () {
            return config['get'](this['pristinePath'])['then'](_0x1435f1 => {
                return fs['statAsync'](_0x1435f1['fixturesFolder'])['then'](() => {
                    throw new Error('fixturesFolder\x20should\x20not\x20exist!');
                })['catch'](() => {
                    return cypress['start']([
                        '--run-project=' + this['pristinePath'],
                        '--no-run-mode'
                    ]);
                })['then'](() => {
                    return fs['statAsync'](_0x1435f1['fixturesFolder']);
                })['then'](() => {
                    return fs['statAsync'](path['join'](_0x1435f1['fixturesFolder'], 'example.json'));
                });
            });
        }), it('scaffolds\x20out\x20support\x20+\x20files\x20if\x20they\x20do\x20not\x20exist', function () {
            const _0x1368e4 = path['join'](this['pristinePath'], 'cypress/support');
            return config['get'](this['pristinePath'])['then'](() => {
                return fs['statAsync'](_0x1368e4)['then'](() => {
                    throw new Error('supportFolder\x20should\x20not\x20exist!');
                })['catch']({ 'code': 'ENOENT' }, () => {
                    return cypress['start']([
                        '--run-project=' + this['pristinePath'],
                        '--no-run-mode'
                    ]);
                })['then'](() => {
                    return fs['statAsync'](_0x1368e4);
                })['then'](() => {
                    return fs['statAsync'](path['join'](_0x1368e4, 'index.js'));
                })['then'](() => {
                    return fs['statAsync'](path['join'](_0x1368e4, 'commands.js'));
                });
            });
        }), it('removes\x20fixtures\x20when\x20they\x20exist\x20and\x20fixturesFolder\x20is\x20false', function (_0x484a93) {
            config['get'](this['idsPath'])['then'](_0x47d50e => {
                return this['cfg'] = _0x47d50e, fs['statAsync'](this['cfg']['fixturesFolder']);
            })['then'](() => {
                return settings['read'](this['idsPath']);
            })['then'](_0x22b7f1 => {
                return _0x22b7f1['fixturesFolder'] = ![], settings['write'](this['idsPath'], _0x22b7f1);
            })['then'](() => {
                return cypress['start'](['--run-project=' + this['idsPath']]);
            })['then'](() => {
                return fs['statAsync'](this['cfg']['fixturesFolder'])['then'](() => {
                    throw new Error('fixturesFolder\x20should\x20not\x20exist!');
                })['catch'](() => {
                    return _0x484a93();
                });
            });
        }), it('runs\x20project\x20headlessly\x20and\x20displays\x20gui', function () {
            return cypress['start']([
                '--run-project=' + this['todosPath'],
                '--headed'
            ])['then'](() => {
                expect(browsers['open'])['to']['be']['calledWithMatch'](ELECTRON_BROWSER, {
                    'proxyServer': 'http://localhost:8888',
                    'show': !![]
                }), this['expectExitWith'](-0x2008 + 0x86d + 0x179b);
            });
        }), it('turns\x20on\x20reporting', function () {
            return sinon['spy'](Reporter, 'create'), cypress['start'](['--run-project=' + this['todosPath']])['then'](() => {
                expect(Reporter['create'])['to']['be']['calledWith']('spec'), this['expectExitWith'](0x2245 + -0x1a6b + -0x1e * 0x43);
            });
        }), it('can\x20change\x20the\x20reporter\x20to\x20nyan', function () {
            return sinon['spy'](Reporter, 'create'), cypress['start']([
                '--run-project=' + this['todosPath'],
                '--reporter=nyan'
            ])['then'](() => {
                expect(Reporter['create'])['to']['be']['calledWith']('nyan'), this['expectExitWith'](0x36c + -0x2 * -0x71 + -0x44e);
            });
        }), it('can\x20change\x20the\x20reporter\x20with\x20cypress.json', function () {
            return sinon['spy'](Reporter, 'create'), config['get'](this['idsPath'])['then'](_0x3f828a => {
                return this['cfg'] = _0x3f828a, settings['read'](this['idsPath']);
            })['then'](_0x37c54c => {
                return _0x37c54c['reporter'] = 'dot', settings['write'](this['idsPath'], _0x37c54c);
            })['then'](() => {
                return cypress['start'](['--run-project=' + this['idsPath']]);
            })['then'](() => {
                expect(Reporter['create'])['to']['be']['calledWith']('dot'), this['expectExitWith'](-0x4 * -0x4e6 + -0x10eb + 0x5 * -0x89);
            });
        }), it('runs\x20tests\x20even\x20when\x20user\x20isn\x27t\x20logged\x20in', function () {
            return user['set']({})['then'](() => {
                return cypress['start'](['--run-project=' + this['todosPath']]);
            })['then'](() => {
                this['expectExitWith'](0x1 * -0xb83 + -0x25e8 + 0x1 * 0x316b);
            });
        }), it('logs\x20warning\x20when\x20projectId\x20and\x20key\x20but\x20no\x20record\x20option', function () {
            return cypress['start']([
                '--run-project=' + this['todosPath'],
                '--key=asdf'
            ])['then'](() => {
                expect(errors['warning'])['to']['be']['calledWith']('PROJECT_ID_AND_KEY_BUT_MISSING_RECORD_OPTION', 'abc123'), expect(console['log'])['to']['be']['calledWithMatch']('You\x20also\x20provided\x20your\x20Record\x20Key,\x20but\x20you\x20did\x20not\x20pass\x20the\x20--record\x20flag.'), expect(console['log'])['to']['be']['calledWithMatch']('cypress\x20run\x20--record'), expect(console['log'])['to']['be']['calledWithMatch']('https://on.cypress.io/recording-project-runs');
            });
        }), it('logs\x20warning\x20when\x20removing\x20old\x20browser\x20profiles\x20fails', function () {
            const _0x24ea5a = new Error('foo');
            return sinon['stub'](browsers, 'removeOldProfiles')['rejects'](_0x24ea5a), cypress['start'](['--run-project=' + this['todosPath']])['then'](() => {
                expect(errors['warning'])['to']['be']['calledWith']('CANNOT_REMOVE_OLD_BROWSER_PROFILES', _0x24ea5a['stack']), expect(console['log'])['to']['be']['calledWithMatch']('Warning:\x20We\x20failed\x20to\x20remove\x20old\x20browser\x20profiles\x20from\x20previous\x20runs.'), expect(console['log'])['to']['be']['calledWithMatch'](_0x24ea5a['message']);
            });
        }), it('does\x20not\x20log\x20warning\x20when\x20no\x20projectId', function () {
            return cypress['start']([
                '--run-project=' + this['pristinePath'],
                '--key=asdf'
            ])['then'](() => {
                expect(errors['warning'])['not']['to']['be']['calledWith']('PROJECT_ID_AND_KEY_BUT_MISSING_RECORD_OPTION', 'abc123'), expect(console['log'])['not']['to']['be']['calledWithMatch']('cypress\x20run\x20--key\x20<record_key>');
            });
        }), it('does\x20not\x20log\x20warning\x20when\x20projectId\x20but\x20--record\x20false', function () {
            return cypress['start']([
                '--run-project=' + this['todosPath'],
                '--key=asdf',
                '--record=false'
            ])['then'](() => {
                expect(errors['warning'])['not']['to']['be']['calledWith']('PROJECT_ID_AND_KEY_BUT_MISSING_RECORD_OPTION', 'abc123'), expect(console['log'])['not']['to']['be']['calledWithMatch']('cypress\x20run\x20--key\x20<record_key>');
            });
        }), it('logs\x20error\x20when\x20supportFile\x20doesn\x27t\x20exist', function () {
            return settings['write'](this['idsPath'], { 'supportFile': '/does/not/exist' })['then'](() => {
                return cypress['start'](['--run-project=' + this['idsPath']]);
            })['then'](() => {
                this['expectExitWithErr']('SUPPORT_FILE_NOT_FOUND', 'Your\x20`supportFile`\x20is\x20set\x20to\x20`/does/not/exist`,');
            });
        }), it('logs\x20error\x20when\x20browser\x20cannot\x20be\x20found', function () {
            return browsers['open']['restore'](), cypress['start']([
                '--run-project=' + this['idsPath'],
                '--browser=foo'
            ])['then'](() => {
                this['expectExitWithErr']('BROWSER_NOT_FOUND_BY_NAME');
                const _0x252078 = errors['log']['args'], _0x3581aa = _['find'](_0x252078, _0x20ffb9 => {
                        return _['find'](_0x20ffb9, _0x2b3bdc => {
                            return _0x2b3bdc['message'] && _0x2b3bdc['message']['includes']('Browser:\x20\x27foo\x27\x20was\x20not\x20found\x20on\x20your\x20system\x20or\x20is\x20not\x20supported\x20by\x20Cypress.');
                        });
                    });
                expect(_0x3581aa, 'foo\x20should\x20not\x20be\x20found')['to']['be']['ok'];
                const _0x2eef11 = _['find'](_0x252078, _0x153e51 => {
                    return _['find'](_0x153e51, _0x417d42 => {
                        return _0x417d42['message'] && _0x417d42['message']['includes']('Cypress\x20supports\x20the\x20following\x20browsers:');
                    });
                });
                expect(_0x2eef11, 'supported\x20browsers\x20should\x20be\x20listed')['to']['be']['ok'];
                const _0x12324c = _['find'](_0x252078, _0x23b6da => {
                    return _['find'](_0x23b6da, _0x21237c => {
                        return _0x21237c['message'] && _0x21237c['message']['includes']('Available\x20browsers\x20found\x20on\x20your\x20system\x20are:\x0a-\x20chrome\x0a-\x20chromium\x0a-\x20chrome:canary\x0a-\x20electron');
                    });
                });
                expect(_0x12324c, 'browser\x20names\x20should\x20be\x20listed')['to']['be']['ok'];
            });
        }), describe('no\x20specs\x20found', function () {
            it('logs\x20error\x20and\x20exits\x20when\x20spec\x20file\x20was\x20specified\x20and\x20does\x20not\x20exist', function () {
                return cypress['start']([
                    '--run-project=' + this['todosPath'],
                    '--spec=path/to/spec'
                ])['then'](() => {
                    this['expectExitWithErr']('NO_SPECS_FOUND', 'path/to/spec'), this['expectExitWithErr']('NO_SPECS_FOUND', 'We\x20searched\x20for\x20any\x20files\x20matching\x20this\x20glob\x20pattern:'), this['expectExitWithErr']('NO_SPECS_FOUND', this['todosPath']);
                });
            }), it('logs\x20error\x20and\x20exits\x20when\x20spec\x20absolute\x20file\x20was\x20specified\x20and\x20does\x20not\x20exist', function () {
                return cypress['start']([
                    '--run-project=' + this['todosPath'],
                    '--spec=' + this['todosPath'] + '/tests/path/to/spec'
                ])['then'](() => {
                    this['expectExitWithErr']('NO_SPECS_FOUND', 'tests/path/to/spec'), this['expectExitWithErr']('NO_SPECS_FOUND', this['todosPath']);
                });
            }), it('logs\x20error\x20and\x20exits\x20when\x20no\x20specs\x20were\x20found\x20at\x20all', function () {
                return cypress['start']([
                    '--run-project=' + this['todosPath'],
                    '--config=integrationFolder=cypress/specs'
                ])['then'](() => {
                    this['expectExitWithErr']('NO_SPECS_FOUND', 'We\x20searched\x20for\x20any\x20files\x20inside\x20of\x20this\x20folder:'), this['expectExitWithErr']('NO_SPECS_FOUND', 'cypress/specs');
                });
            });
        }), it('logs\x20error\x20and\x20exits\x20when\x20project\x20has\x20cypress.json\x20syntax\x20error', function () {
            return fs['writeFileAsync'](this['todosPath'] + '/cypress.json', '{\x27foo\x27:\x20\x27bar}')['then'](() => {
                return cypress['start'](['--run-project=' + this['todosPath']]);
            })['then'](() => {
                this['expectExitWithErr']('ERROR_READING_FILE', this['todosPath']);
            });
        }), it('logs\x20error\x20and\x20exits\x20when\x20project\x20has\x20cypress.env.json\x20syntax\x20error', function () {
            return fs['writeFileAsync'](this['todosPath'] + '/cypress.env.json', '{\x27foo\x27:\x20\x27bar}')['then'](() => {
                return cypress['start'](['--run-project=' + this['todosPath']]);
            })['then'](() => {
                this['expectExitWithErr']('ERROR_READING_FILE', this['todosPath']);
            });
        }), it('logs\x20error\x20and\x20exits\x20when\x20project\x20has\x20invalid\x20cypress.json\x20values', function () {
            return settings['write'](this['todosPath'], { 'baseUrl': 'localhost:9999' })['then'](() => {
                return cypress['start'](['--run-project=' + this['todosPath']]);
            })['then'](() => {
                this['expectExitWithErr']('SETTINGS_VALIDATION_ERROR', 'cypress.json');
            });
        }), it('logs\x20error\x20and\x20exits\x20when\x20project\x20has\x20invalid\x20config\x20values\x20from\x20the\x20CLI', function () {
            return cypress['start']([
                '--run-project=' + this['todosPath'],
                '--config=baseUrl=localhost:9999'
            ])['then'](() => {
                this['expectExitWithErr']('CONFIG_VALIDATION_ERROR', 'localhost:9999'), this['expectExitWithErr']('CONFIG_VALIDATION_ERROR', 'We\x20found\x20an\x20invalid\x20configuration\x20value');
            });
        }), it('logs\x20error\x20and\x20exits\x20when\x20project\x20has\x20invalid\x20config\x20values\x20from\x20env\x20vars', function () {
            return process['env']['CYPRESS_BASE_URL'] = 'localhost:9999', cypress['start'](['--run-project=' + this['todosPath']])['then'](() => {
                this['expectExitWithErr']('CONFIG_VALIDATION_ERROR', 'localhost:9999'), this['expectExitWithErr']('CONFIG_VALIDATION_ERROR', 'We\x20found\x20an\x20invalid\x20configuration\x20value');
            });
        });
        const _0x355026 = [{
                'old': 'blacklistHosts',
                'new': 'blockHosts'
            }];
        _0x355026['forEach'](function (_0x48a32d) {
            it('logs\x20error\x20and\x20exits\x20when\x20using\x20an\x20old\x20configuration\x20option:\x20' + _0x48a32d['old'], function () {
                return cypress['start']([
                    '--run-project=' + this['todosPath'],
                    '--config=' + _0x48a32d['old'] + '=\x27\x27'
                ])['then'](() => {
                    this['expectExitWithErr']('RENAMED_CONFIG_OPTION', _0x48a32d['old']), this['expectExitWithErr']('RENAMED_CONFIG_OPTION', _0x48a32d['new']);
                });
            });
        }), it('logs\x20error\x20and\x20exits\x20when\x20project\x20folder\x20has\x20read\x20permissions\x20only\x20and\x20cannot\x20write\x20cypress.json', function () {
            if (process['geteuid']() === 0xc1 * 0x1f + -0x3 * 0xb68 + 0xad9)
                return;
            const _0x3600fb = path['resolve']('./permissions'), _0x9ae476 = path['join'](_0x3600fb, 'cypress.json');
            return fs['outputFileAsync'](_0x9ae476, '{}')['then'](() => {
                return fs['chmodAsync'](_0x3600fb, '555');
            })['then'](() => {
                return cypress['start'](['--run-project=' + _0x3600fb]);
            })['then'](() => {
                return fs['chmodAsync'](_0x3600fb, '777');
            })['then'](() => {
                return fs['removeAsync'](_0x3600fb);
            })['then'](() => {
                this['expectExitWithErr']('ERROR_READING_FILE', path['join'](_0x3600fb, 'cypress.json'));
            });
        }), it('logs\x20error\x20and\x20exits\x20when\x20reporter\x20does\x20not\x20exist', function () {
            return cypress['start']([
                '--run-project=' + this['todosPath'],
                '--reporter',
                'foobarbaz'
            ])['then'](() => {
                this['expectExitWithErr']('INVALID_REPORTER_NAME', 'foobarbaz');
            });
        }), describe('state', () => {
            beforeEach(function () {
                return appData['remove']()['then'](() => {
                    return savedState['formStatePath'](this['todosPath']);
                })['then'](_0x52fb7f => {
                    this['statePath'] = appData['projectsPath'](_0x52fb7f);
                });
            }), it('does\x20not\x20save\x20project\x20state', function () {
                return cypress['start']([
                    '--run-project=' + this['todosPath'],
                    '--spec=' + this['todosPath'] + '/tests/test2.coffee'
                ])['then'](() => {
                    return this['expectExitWith'](0x6 * 0x515 + 0x30a + -0x431 * 0x8), openProject['getProject']()['saveState']();
                })['then'](() => {
                    return fs['statAsync'](this['statePath'])['then'](() => {
                        throw new Error('saved\x20state\x20should\x20not\x20exist\x20but\x20it\x20did\x20here:\x20' + this['statePath']);
                    })['catch']({ 'code': 'ENOENT' }, () => {
                    });
                });
            });
        }), describe('morgan', () => {
            it('sets\x20morgan\x20to\x20false', function () {
                return cypress['start'](['--run-project=' + this['todosPath']])['then'](() => {
                    expect(openProject['getProject']()['cfg']['morgan'])['to']['be']['false'], this['expectExitWith'](-0xa26 * -0x2 + -0x2573 + -0x1127 * -0x1);
                });
            });
        }), describe('config\x20overrides', () => {
            it('can\x20override\x20default\x20values', function () {
                return cypress['start']([
                    '--run-project=' + this['todosPath'],
                    '--config=requestTimeout=1234,videoCompression=false'
                ])['then'](() => {
                    const {cfg: _0xb79428} = openProject['getProject']();
                    expect(_0xb79428['videoCompression'])['to']['be']['false'], expect(_0xb79428['requestTimeout'])['to']['eq'](-0x1da1 * 0x1 + -0x490 * 0x1 + 0x2703), expect(_0xb79428['resolved']['videoCompression'])['to']['deep']['eq']({
                        'value': ![],
                        'from': 'cli'
                    }), expect(_0xb79428['resolved']['requestTimeout'])['to']['deep']['eq']({
                        'value': 0x4d2,
                        'from': 'cli'
                    }), this['expectExitWith'](0xd4f * -0x1 + 0x563 * 0x4 + -0x83d);
                });
            }), it('can\x20override\x20values\x20in\x20plugins', function () {
                return plugins['init']['restore'](), cypress['start']([
                    '--run-project=' + this['pluginConfig'],
                    '--config=requestTimeout=1234,videoCompression=false',
                    '--env=foo=foo,bar=bar'
                ])['then'](() => {
                    const {cfg: _0x54d5a} = openProject['getProject']();
                    expect(_0x54d5a['videoCompression'])['to']['eq'](0x57 * -0x3d + 0x3fd + -0x2 * -0x869), expect(_0x54d5a['defaultCommandTimeout'])['to']['eq'](-0x22b6 + -0x4f7 * 0x1 + 0x29a1), expect(_0x54d5a['env'])['to']['deep']['eq']({
                        'foo': 'bar',
                        'bar': 'bar'
                    }), expect(_0x54d5a['resolved']['videoCompression'])['to']['deep']['eq']({
                        'value': 0x14,
                        'from': 'plugin'
                    }), expect(_0x54d5a['resolved']['requestTimeout'])['to']['deep']['eq']({
                        'value': 0x4d2,
                        'from': 'cli'
                    }), expect(_0x54d5a['resolved']['env']['foo'])['to']['deep']['eq']({
                        'value': 'bar',
                        'from': 'plugin'
                    }), expect(_0x54d5a['resolved']['env']['bar'])['to']['deep']['eq']({
                        'value': 'bar',
                        'from': 'cli'
                    }), this['expectExitWith'](-0x16e3 + 0xa1f * -0x1 + 0x2102);
                });
            });
        }), describe('plugins', () => {
            beforeEach(() => {
                plugins['init']['restore'](), browsers['open']['restore']();
                const _0x480d6d = new EE();
                _0x480d6d['kill'] = () => {
                    return _0x480d6d['emit']('exit');
                }, _0x480d6d['destroy'] = () => {
                    return _0x480d6d['emit']('closed');
                }, _0x480d6d['isDestroyed'] = () => {
                    return ![];
                }, _0x480d6d['loadURL'] = () => {
                }, _0x480d6d['focusOnWebView'] = () => {
                }, _0x480d6d['webContents'] = {
                    'debugger': {
                        'on': sinon['stub'](),
                        'attach': sinon['stub'](),
                        'sendCommand': sinon['stub']()['resolves']()
                    },
                    'getOSProcessId': sinon['stub'](),
                    'setUserAgent': sinon['stub'](),
                    'session': {
                        'clearCache': sinon['stub']()['resolves'](),
                        'setProxy': sinon['stub']()['resolves'](),
                        'setUserAgent': sinon['stub'](),
                        'on': sinon['stub'](),
                        'removeListener': sinon['stub']()
                    }
                }, _0x480d6d['maximize'] = sinon['stub'], _0x480d6d['setSize'] = sinon['stub'], sinon['stub'](launch, 'launch')['resolves'](_0x480d6d), sinon['stub'](Windows, 'create')['returns'](_0x480d6d);
            }), context('before:browser:launch', () => {
                it('chrome', function () {
                    const _0x2941fe = {
                        'ensureMinimumProtocolVersion': sinon['stub']()['resolves'](),
                        'close': sinon['stub']()['resolves'](),
                        'on': sinon['stub'](),
                        'send': sinon['stub']()
                    };
                    return sinon['stub'](chromeBrowser, '_writeExtension')['resolves'](), sinon['stub'](chromeBrowser, '_connectToChromeRemoteInterface')['resolves'](_0x2941fe), sinon['stub'](chromeBrowser, '_navigateUsingCRI')['resolves'](), sinon['stub'](chromeBrowser, '_handleDownloads')['resolves'](), sinon['stub'](chromeBrowser, '_setAutomation')['returns'](), cypress['start']([
                        '--run-project=' + this['pluginBrowser'],
                        '--browser=chrome'
                    ])['then'](() => {
                        const {args: _0x483779} = launch['launch']['firstCall'], _0x1f6480 = _['find'](TYPICAL_BROWSERS, { 'name': 'chrome' }), _0x2032b4 = R['merge'](_0x1f6480, {
                                'isHeadless': !![],
                                'isHeaded': ![]
                            });
                        expect(_0x483779[0x6 * 0x2e6 + -0x1cf6 * 0x1 + 0x2 * 0x5c9], 'found\x20and\x20used\x20Chrome')['to']['deep']['eq'](_0x2032b4);
                        const _0x299f73 = _0x483779[-0x10c2 + -0x26de + 0x37a2];
                        expect(_0x299f73['slice'](0xbe1 + 0x33c * -0x7 + -0x91 * -0x13, -0x203 + -0x1771 + -0x5 * -0x518), 'first\x204\x20custom\x20launch\x20arguments\x20to\x20Chrome')['to']['deep']['eq']([
                            'chrome',
                            'foo',
                            'bar',
                            'baz'
                        ]), this['expectExitWith'](-0x21 * 0x87 + -0x824 * -0x2 + 0x11f), expect(chromeBrowser['_navigateUsingCRI'])['to']['have']['been']['calledOnce'], expect(chromeBrowser['_setAutomation'])['to']['have']['been']['calledOnce'], expect(chromeBrowser['_connectToChromeRemoteInterface'])['to']['have']['been']['calledOnce'];
                    });
                }), it('electron', function () {
                    const _0x2c4b8e = sinon['stub']();
                    return videoCapture['start']['returns']({ 'writeVideoFrame': _0x2c4b8e }), cypress['start']([
                        '--run-project=' + this['pluginBrowser'],
                        '--browser=electron'
                    ])['then'](() => {
                        expect(Windows['create'])['to']['be']['calledWithMatch'](this['pluginBrowser'], {
                            'browser': 'electron',
                            'foo': 'bar',
                            'onNewWindow': sinon['match']['func'],
                            'onScreencastFrame': sinon['match']['func']
                        }), this['expectExitWith'](0xb5 * -0xd + 0x493 * -0x1 + -0x6e2 * -0x2);
                    });
                });
            });
        }), describe('--port', () => {
            beforeEach(() => {
                return runMode['listenForProjectEnd']['resolves']({ 'stats': { 'failures': 0x0 } });
            }), it('can\x20change\x20the\x20default\x20port\x20to\x205544', function () {
                const _0x36c2f0 = sinon['spy'](http['Server']['prototype'], 'listen'), _0x14c737 = sinon['spy'](ServerE2E['prototype'], 'open');
                return cypress['start']([
                    '--run-project=' + this['todosPath'],
                    '--port=5544'
                ])['then'](() => {
                    expect(openProject['getProject']()['cfg']['port'])['to']['eq'](0x12fc + -0x89 * -0x26 + -0x11aa), expect(_0x36c2f0)['to']['be']['calledWith'](0x6 * -0x455 + -0xf89 + 0x3f2f), expect(_0x14c737)['to']['be']['calledWithMatch']({ 'port': 0x15a8 }), this['expectExitWith'](-0x1b37 + -0x1c79 * 0x1 + 0x37b0);
                });
            }), it('logs\x20error\x20and\x20exits\x20when\x20port\x20is\x20in\x20use', async function () {
                sinon['stub'](ProjectBase['prototype'], 'getAutomation')['returns']({
                    'use': () => {
                    }
                });
                let _0x24549d = http['createServer']();
                return _0x24549d = Promise['promisifyAll'](_0x24549d), _0x24549d['listenAsync'](-0x565 * 0x5 + -0x53 * -0x4f + 0xb82 * 0x2, '127.0.0.1')['then'](() => {
                    return cypress['start']([
                        '--run-project=' + this['todosPath'],
                        '--port=5544'
                    ]);
                })['then'](() => {
                    this['expectExitWithErr']('PORT_IN_USE_SHORT', '5544');
                });
            });
        }), describe('--env', () => {
            beforeEach(() => {
                return process['env'] = _['omit'](process['env'], 'CYPRESS_DEBUG'), runMode['listenForProjectEnd']['resolves']({ 'stats': { 'failures': 0x0 } });
            }), it('can\x20set\x20specific\x20environment\x20variables', function () {
                return cypress['start']([
                    '--run-project=' + this['todosPath'],
                    '--video=false',
                    '--env',
                    'version=0.12.1,foo=bar,host=http://localhost:8888,baz=quux=dolor'
                ])['then'](() => {
                    expect(openProject['getProject']()['cfg']['env'])['to']['deep']['eq']({
                        'version': '0.12.1',
                        'foo': 'bar',
                        'host': 'http://localhost:8888',
                        'baz': 'quux=dolor'
                    }), this['expectExitWith'](-0x754 + 0x1 * -0x10b + -0x85f * -0x1);
                });
            }), it('parses\x20environment\x20variables\x20with\x20empty\x20values', function () {
                return cypress['start']([
                    '--run-project=' + this['todosPath'],
                    '--video=false',
                    '--env=FOO=,BAR=,BAZ=ipsum'
                ])['then'](() => {
                    expect(openProject['getProject']()['cfg']['env'])['to']['deep']['eq']({
                        'FOO': '',
                        'BAR': '',
                        'BAZ': 'ipsum'
                    }), this['expectExitWith'](0x1 * 0x1189 + -0x769 * -0x2 + -0x205b);
                });
            });
        }), describe('--config-file', () => {
            it('false\x20does\x20not\x20require\x20cypress.json\x20to\x20run', function () {
                return fs['statAsync'](path['join'](this['pristinePath'], 'cypress.json'))['then'](() => {
                    throw new Error('cypress.json\x20should\x20not\x20exist');
                })['catch']({ 'code': 'ENOENT' }, () => {
                    return cypress['start']([
                        '--run-project=' + this['pristinePath'],
                        '--no-run-mode',
                        '--config-file',
                        'false'
                    ])['then'](() => {
                        this['expectExitWith'](-0x100f + -0x2e7 + 0x6 * 0x329);
                    });
                });
            }), it('with\x20a\x20custom\x20config\x20file\x20fails\x20when\x20it\x20doesn\x27t\x20exist', function () {
                return this['filename'] = 'abcdefgh.test.json', fs['statAsync'](path['join'](this['todosPath'], this['filename']))['then'](() => {
                    throw new Error(this['filename'] + '\x20should\x20not\x20exist');
                })['catch']({ 'code': 'ENOENT' }, () => {
                    return cypress['start']([
                        '--run-project=' + this['todosPath'],
                        '--no-run-mode',
                        '--config-file',
                        this['filename']
                    ])['then'](() => {
                        this['expectExitWithErr']('CONFIG_FILE_NOT_FOUND', this['filename'], this['todosPath']);
                    });
                });
            });
        });
    }), context('--record', () => {
        beforeEach(function () {
            return sinon['stub'](api, 'createRun')['resolves'](), sinon['stub'](electron['app'], 'on')['withArgs']('ready')['yieldsAsync'](), sinon['stub'](browsers, 'open'), sinon['stub'](runMode, 'waitForSocketConnection')['resolves'](), sinon['stub'](runMode, 'waitForTestsToFinishRunning')['resolves']({
                'stats': {
                    'tests': 0x1,
                    'passes': 0x2,
                    'failures': 0x3,
                    'pending': 0x4,
                    'skipped': 0x5,
                    'wallClockDuration': 0x6
                },
                'tests': [],
                'hooks': [],
                'video': 'path/to/video',
                'shouldUploadVideo': !![],
                'screenshots': [],
                'config': {},
                'spec': {}
            }), Promise['all']([
                user['set']({}),
                getId(this['todosPath'])['then'](_0x5ac7ff => {
                    this['projectId'] = _0x5ac7ff;
                })
            ]);
        }), it('uses\x20process.env.CYPRESS_PROJECT_ID', function () {
            return sinon['stub'](env, 'get')['withArgs']('CYPRESS_PROJECT_ID')['returns'](this['projectId']), cypress['start']([
                '--cwd=/foo/bar',
                '--run-project=' + this['noScaffolding'],
                '--record',
                '--key=token-123'
            ])['then'](() => {
                expect(api['createRun'])['to']['be']['calledWithMatch']({ 'projectId': this['projectId'] }), expect(errors['warning'])['not']['to']['be']['called'], this['expectExitWith'](0x2e7 + 0x1 * -0x313 + 0x2f);
            });
        }), it('uses\x20process.env.CYPRESS_RECORD_KEY', function () {
            return sinon['stub'](env, 'get')['withArgs']('CYPRESS_PROJECT_ID')['returns']('foo-project-123')['withArgs']('CYPRESS_RECORD_KEY')['returns']('token'), cypress['start']([
                '--cwd=/foo/bar',
                '--run-project=' + this['noScaffolding'],
                '--record'
            ])['then'](() => {
                expect(api['createRun'])['to']['be']['calledWithMatch']({
                    'projectId': 'foo-project-123',
                    'recordKey': 'token'
                }), expect(errors['warning'])['not']['to']['be']['called'], this['expectExitWith'](-0x1 * 0xc86 + -0x1f8e + 0x2c17);
            });
        }), it('errors\x20and\x20exits\x20when\x20using\x20--group\x20but\x20ciBuildId\x20could\x20not\x20be\x20generated', function () {
            return sinon['stub'](ciProvider, 'provider')['returns'](null), cypress['start']([
                '--run-project=' + this['recordPath'],
                '--record',
                '--key=token-123',
                '--group=e2e-tests'
            ])['then'](() => {
                return this['expectExitWithErr']('INDETERMINATE_CI_BUILD_ID'), snapshotConsoleLogs('INDETERMINATE_CI_BUILD_ID-group\x201');
            });
        }), it('errors\x20and\x20exits\x20when\x20using\x20--parallel\x20but\x20ciBuildId\x20could\x20not\x20be\x20generated', function () {
            return sinon['stub'](ciProvider, 'provider')['returns'](null), cypress['start']([
                '--run-project=' + this['recordPath'],
                '--record',
                '--key=token-123',
                '--parallel'
            ])['then'](() => {
                return this['expectExitWithErr']('INDETERMINATE_CI_BUILD_ID'), snapshotConsoleLogs('INDETERMINATE_CI_BUILD_ID-parallel\x201');
            });
        }), it('errors\x20and\x20exits\x20when\x20using\x20--parallel\x20and\x20--group\x20but\x20ciBuildId\x20could\x20not\x20be\x20generated', function () {
            return sinon['stub'](ciProvider, 'provider')['returns'](null), cypress['start']([
                '--run-project=' + this['recordPath'],
                '--record',
                '--key=token-123',
                '--group=e2e-tests-chrome',
                '--parallel'
            ])['then'](() => {
                return this['expectExitWithErr']('INDETERMINATE_CI_BUILD_ID'), snapshotConsoleLogs('INDETERMINATE_CI_BUILD_ID-parallel-group\x201');
            });
        }), it('errors\x20and\x20exits\x20when\x20using\x20--ci-build-id\x20with\x20no\x20group\x20or\x20parallelization', function () {
            return cypress['start']([
                '--run-project=' + this['recordPath'],
                '--record',
                '--key=token-123',
                '--ci-build-id=ciBuildId123'
            ])['then'](() => {
                return this['expectExitWithErr']('INCORRECT_CI_BUILD_ID_USAGE'), snapshotConsoleLogs('INCORRECT_CI_BUILD_ID_USAGE\x201');
            });
        }), it('errors\x20and\x20exits\x20when\x20using\x20--ci-build-id\x20without\x20recording', function () {
            return cypress['start']([
                '--run-project=' + this['recordPath'],
                '--ci-build-id=ciBuildId123'
            ])['then'](() => {
                return this['expectExitWithErr']('RECORD_PARAMS_WITHOUT_RECORDING'), snapshotConsoleLogs('RECORD_PARAMS_WITHOUT_RECORDING-ciBuildId\x201');
            });
        }), it('errors\x20and\x20exits\x20when\x20using\x20--group\x20without\x20recording', function () {
            return cypress['start']([
                '--run-project=' + this['recordPath'],
                '--group=e2e-tests'
            ])['then'](() => {
                return this['expectExitWithErr']('RECORD_PARAMS_WITHOUT_RECORDING'), snapshotConsoleLogs('RECORD_PARAMS_WITHOUT_RECORDING-group\x201');
            });
        }), it('errors\x20and\x20exits\x20when\x20using\x20--parallel\x20without\x20recording', function () {
            return cypress['start']([
                '--run-project=' + this['recordPath'],
                '--parallel'
            ])['then'](() => {
                return this['expectExitWithErr']('RECORD_PARAMS_WITHOUT_RECORDING'), snapshotConsoleLogs('RECORD_PARAMS_WITHOUT_RECORDING-parallel\x201');
            });
        }), it('errors\x20and\x20exits\x20when\x20using\x20--tag\x20without\x20recording', function () {
            return cypress['start']([
                '--run-project=' + this['recordPath'],
                '--tag=nightly'
            ])['then'](() => {
                return this['expectExitWithErr']('RECORD_PARAMS_WITHOUT_RECORDING'), snapshotConsoleLogs('RECORD_PARAMS_WITHOUT_RECORDING-tag\x201');
            });
        }), it('errors\x20and\x20exits\x20when\x20using\x20--group\x20and\x20--parallel\x20without\x20recording', function () {
            return cypress['start']([
                '--run-project=' + this['recordPath'],
                '--tag=nightly',
                '--group=electron-smoke-tests',
                '--parallel'
            ])['then'](() => {
                return this['expectExitWithErr']('RECORD_PARAMS_WITHOUT_RECORDING'), snapshotConsoleLogs('RECORD_PARAMS_WITHOUT_RECORDING-group-parallel\x201');
            });
        }), it('errors\x20and\x20exits\x20when\x20group\x20name\x20is\x20not\x20unique\x20and\x20explicitly\x20passed\x20ciBuildId', function () {
            const _0x1b6971 = new Error();
            return _0x1b6971['statusCode'] = -0x89f * -0x1 + -0x17f * 0x14 + 0x16f3, _0x1b6971['error'] = {
                'code': 'RUN_GROUP_NAME_NOT_UNIQUE',
                'payload': { 'runUrl': 'https://dashboard.cypress.io/runs/12345' }
            }, api['createRun']['rejects'](_0x1b6971), cypress['start']([
                '--run-project=' + this['recordPath'],
                '--record',
                '--key=token-123',
                '--group=electron-smoke-tests',
                '--ciBuildId=ciBuildId123'
            ])['then'](() => {
                return this['expectExitWithErr']('DASHBOARD_RUN_GROUP_NAME_NOT_UNIQUE'), snapshotConsoleLogs('DASHBOARD_RUN_GROUP_NAME_NOT_UNIQUE\x201');
            });
        }), it('errors\x20and\x20exits\x20when\x20parallel\x20group\x20params\x20are\x20different', function () {
            sinon['stub'](system, 'info')['returns']({
                'osName': 'darwin',
                'osVersion': 'v1'
            }), sinon['stub'](browsers, 'ensureAndGetByNameOrPath')['resolves']({
                'version': '59.1.2.3',
                'displayName': 'Electron'
            });
            const _0x241327 = new Error();
            return _0x241327['statusCode'] = 0x1f2d + -0x23b + -0x1b4c, _0x241327['error'] = {
                'code': 'PARALLEL_GROUP_PARAMS_MISMATCH',
                'payload': { 'runUrl': 'https://dashboard.cypress.io/runs/12345' }
            }, api['createRun']['rejects'](_0x241327), cypress['start']([
                '--run-project=' + this['recordPath'],
                '--record',
                '--key=token-123',
                '--parallel',
                '--group=electron-smoke-tests',
                '--ciBuildId=ciBuildId123'
            ])['then'](() => {
                return this['expectExitWithErr']('DASHBOARD_PARALLEL_GROUP_PARAMS_MISMATCH'), snapshotConsoleLogs('DASHBOARD_PARALLEL_GROUP_PARAMS_MISMATCH\x201');
            });
        }), it('errors\x20and\x20exits\x20when\x20parallel\x20is\x20not\x20allowed', function () {
            const _0x11808f = new Error();
            return _0x11808f['statusCode'] = 0x19fe + -0x19f1 * -0x1 + -0x3249, _0x11808f['error'] = {
                'code': 'PARALLEL_DISALLOWED',
                'payload': { 'runUrl': 'https://dashboard.cypress.io/runs/12345' }
            }, api['createRun']['rejects'](_0x11808f), cypress['start']([
                '--run-project=' + this['recordPath'],
                '--record',
                '--key=token-123',
                '--parallel',
                '--group=electron-smoke-tests',
                '--ciBuildId=ciBuildId123'
            ])['then'](() => {
                return this['expectExitWithErr']('DASHBOARD_PARALLEL_DISALLOWED'), snapshotConsoleLogs('DASHBOARD_PARALLEL_DISALLOWED\x201');
            });
        }), it('errors\x20and\x20exits\x20when\x20parallel\x20is\x20required', function () {
            const _0x57aae3 = new Error();
            return _0x57aae3['statusCode'] = 0x3b6 + -0x4f9 + 0x2e9, _0x57aae3['error'] = {
                'code': 'PARALLEL_REQUIRED',
                'payload': { 'runUrl': 'https://dashboard.cypress.io/runs/12345' }
            }, api['createRun']['rejects'](_0x57aae3), cypress['start']([
                '--run-project=' + this['recordPath'],
                '--record',
                '--key=token-123',
                '--parallel',
                '--tag=nightly',
                '--group=electron-smoke-tests',
                '--ciBuildId=ciBuildId123'
            ])['then'](() => {
                return this['expectExitWithErr']('DASHBOARD_PARALLEL_REQUIRED'), snapshotConsoleLogs('DASHBOARD_PARALLEL_REQUIRED\x201');
            });
        }), it('errors\x20and\x20exits\x20when\x20run\x20is\x20already\x20complete', function () {
            const _0x325771 = new Error();
            return _0x325771['statusCode'] = 0xd9 * -0x7 + -0x7 * 0x32d + 0x1dd0, _0x325771['error'] = {
                'code': 'ALREADY_COMPLETE',
                'payload': { 'runUrl': 'https://dashboard.cypress.io/runs/12345' }
            }, api['createRun']['rejects'](_0x325771), cypress['start']([
                '--run-project=' + this['recordPath'],
                '--record',
                '--key=token-123',
                '--tag=nightly',
                '--group=electron-smoke-tests',
                '--ciBuildId=ciBuildId123'
            ])['then'](() => {
                return this['expectExitWithErr']('DASHBOARD_ALREADY_COMPLETE'), snapshotConsoleLogs('DASHBOARD_ALREADY_COMPLETE\x201');
            });
        }), it('errors\x20and\x20exits\x20when\x20run\x20is\x20stale', function () {
            const _0x17dffc = new Error();
            return _0x17dffc['statusCode'] = 0x2ac * -0x9 + 0xd0a + -0x168 * -0x9, _0x17dffc['error'] = {
                'code': 'STALE_RUN',
                'payload': { 'runUrl': 'https://dashboard.cypress.io/runs/12345' }
            }, api['createRun']['rejects'](_0x17dffc), cypress['start']([
                '--run-project=' + this['recordPath'],
                '--record',
                '--key=token-123',
                '--parallel',
                '--tag=nightly',
                '--group=electron-smoke-tests',
                '--ciBuildId=ciBuildId123'
            ])['then'](() => {
                return this['expectExitWithErr']('DASHBOARD_STALE_RUN'), snapshotConsoleLogs('DASHBOARD_STALE_RUN\x201');
            });
        });
    }), context('--return-pkg', () => {
        beforeEach(() => {
            console['log']['restore'](), sinon['stub'](console, 'log');
        }), it('logs\x20package.json\x20and\x20exits', function () {
            return cypress['start'](['--return-pkg'])['then'](() => {
                expect(console['log'])['to']['be']['calledWithMatch']('{\x22name\x22:\x22cypress\x22'), this['expectExitWith'](0x37 * -0x4c + -0x2044 + -0x26e * -0x14);
            });
        });
    }), context('--version', () => {
        beforeEach(() => {
            console['log']['restore'](), sinon['stub'](console, 'log');
        }), it('logs\x20version\x20and\x20exits', function () {
            return cypress['start'](['--version'])['then'](() => {
                expect(console['log'])['to']['be']['calledWith'](pkg['version']), this['expectExitWith'](0x42a + -0x180a + -0x13e0 * -0x1);
            });
        });
    }), context('--smoke-test', () => {
        beforeEach(() => {
            console['log']['restore'](), sinon['stub'](console, 'log');
        }), it('logs\x20pong\x20value\x20and\x20exits', function () {
            return cypress['start']([
                '--smoke-test',
                '--ping=abc123'
            ])['then'](() => {
                expect(console['log'])['to']['be']['calledWith']('abc123'), this['expectExitWith'](-0x2302 + 0x141 + 0x21c1);
            });
        });
    }), context('interactive', () => {
        beforeEach(function () {
            this['win'] = {
                'on': sinon['stub'](),
                'webContents': { 'on': sinon['stub']() }
            }, sinon['stub'](electron['app'], 'on')['withArgs']('ready')['yieldsAsync'](), sinon['stub'](Windows, 'open')['resolves'](this['win']), sinon['stub'](ServerE2E['prototype'], 'startWebsockets'), sinon['spy'](Events, 'start'), sinon['stub'](electron['ipcMain'], 'on');
        }), it('passes\x20options\x20to\x20interactiveMode.ready', () => {
            return sinon['stub'](interactiveMode, 'ready'), cypress['start']([
                '--updating',
                '--port=2121',
                '--config=pageLoadTimeout=1000'
            ])['then'](() => {
                expect(interactiveMode['ready'])['to']['be']['calledWithMatch']({
                    'updating': !![],
                    'config': {
                        'port': 0x849,
                        'pageLoadTimeout': 0x3e8
                    }
                });
            });
        }), it('passes\x20options\x20to\x20Events.start', () => {
            return cypress['start']([
                '--port=2121',
                '--config=pageLoadTimeout=1000'
            ])['then'](() => {
                expect(Events['start'])['to']['be']['calledWithMatch']({
                    'config': {
                        'pageLoadTimeout': 0x3e8,
                        'port': 0x849
                    }
                });
            });
        }), it('passes\x20filtered\x20options\x20to\x20Project#open\x20and\x20sets\x20cli\x20config', function () {
            const _0x46a392 = sinon['stub'](ServerE2E['prototype'], 'open')['resolves']([]);
            return process['env']['CYPRESS_FILE_SERVER_FOLDER'] = 'foo', process['env']['CYPRESS_BASE_URL'] = 'http://localhost', process['env']['CYPRESS_port'] = '2222', process['env']['CYPRESS_responseTimeout'] = '5555', process['env']['CYPRESS_watch_for_file_changes'] = 'false', user['set']({
                'name': 'brian',
                'authToken': 'auth-token-123'
            })['then'](() => {
                return settings['read'](this['todosPath']);
            })['then'](_0x3caced => {
                return _0x3caced['baseUrl'] = 'http://localhost:8080', settings['write'](this['todosPath'], _0x3caced);
            })['then'](() => {
                return cypress['start']([
                    '--port=2121',
                    '--config',
                    'pageLoadTimeout=1000',
                    '--foo=bar',
                    '--env=baz=baz'
                ]);
            })['then'](() => {
                const _0x14b705 = Events['start']['firstCall']['args'][0x26db + -0x13d3 + -0xe8 * 0x15];
                return Events['handleEvent'](_0x14b705, {}, {}, -0x3 * 0x49b + -0x607 + 0x79 * 0x2b, 'open:project', this['todosPath']);
            })['then'](() => {
                const _0x1958e5 = openProject['getProject']()['options'];
                expect(_0x1958e5['port'])['to']['eq'](0x1 * -0x172d + -0xf92 + -0xa * -0x4b4), expect(_0x1958e5['pageLoadTimeout'])['to']['eq'](0xb24 + 0x1 * -0xb11 + 0x3d5), expect(_0x1958e5['report'])['to']['eq'](![]), expect(_0x1958e5['env'])['to']['eql']({ 'baz': 'baz' }), expect(_0x46a392)['to']['be']['called'];
                const _0x34546e = _0x46a392['getCall'](-0x665 * -0x5 + -0x11dc + -0xe1d)['args'][-0x1226 + 0x1107 + 0x7 * 0x29];
                expect(_0x34546e['fileServerFolder'])['to']['eq'](path['join'](this['todosPath'], 'foo')), expect(_0x34546e['pageLoadTimeout'])['to']['eq'](-0x731 + -0x35c + 0xe75), expect(_0x34546e['port'])['to']['eq'](0x2 * 0xd0d + -0x928 + -0x2e3 * 0x3), expect(_0x34546e['baseUrl'])['to']['eq']('http://localhost'), expect(_0x34546e['watchForFileChanges'])['to']['be']['false'], expect(_0x34546e['responseTimeout'])['to']['eq'](-0x8f6 + -0x29d0 + -0x4879 * -0x1), expect(_0x34546e['env']['baz'])['to']['eq']('baz'), expect(_0x34546e['env'])['not']['to']['have']['property']('fileServerFolder'), expect(_0x34546e['env'])['not']['to']['have']['property']('port'), expect(_0x34546e['env'])['not']['to']['have']['property']('BASE_URL'), expect(_0x34546e['env'])['not']['to']['have']['property']('watchForFileChanges'), expect(_0x34546e['env'])['not']['to']['have']['property']('responseTimeout'), expect(_0x34546e['resolved']['fileServerFolder'])['to']['deep']['eq']({
                    'value': 'foo',
                    'from': 'env'
                }), expect(_0x34546e['resolved']['pageLoadTimeout'])['to']['deep']['eq']({
                    'value': 0x3e8,
                    'from': 'cli'
                }), expect(_0x34546e['resolved']['port'])['to']['deep']['eq']({
                    'value': 0x849,
                    'from': 'cli'
                }), expect(_0x34546e['resolved']['baseUrl'])['to']['deep']['eq']({
                    'value': 'http://localhost',
                    'from': 'env'
                }), expect(_0x34546e['resolved']['watchForFileChanges'])['to']['deep']['eq']({
                    'value': ![],
                    'from': 'env'
                }), expect(_0x34546e['resolved']['responseTimeout'])['to']['deep']['eq']({
                    'value': 0x15b3,
                    'from': 'env'
                }), expect(_0x34546e['resolved']['env']['baz'])['to']['deep']['eq']({
                    'value': 'baz',
                    'from': 'cli'
                });
            });
        }), it('sends\x20warning\x20when\x20baseUrl\x20cannot\x20be\x20verified', function () {
            const _0x42ff9c = new EE(), _0x554e43 = { 'sender': { 'send': sinon['stub']() } }, _0x4a8213 = { 'message': 'Blah\x20blah\x20baseUrl\x20blah\x20blah' };
            return sinon['stub'](ServerE2E['prototype'], 'open')['resolves']([
                0x2 * 0x359 + 0x780 + -0x5e9,
                _0x4a8213
            ]), cypress['start']([
                '--port=2121',
                '--config',
                'pageLoadTimeout=1000',
                '--foo=bar',
                '--env=baz=baz'
            ])['then'](() => {
                const _0x2c2134 = Events['start']['firstCall']['args'][-0x17cd + 0x1ddb * -0x1 + 0x35a8];
                return Events['handleEvent'](_0x2c2134, _0x42ff9c, _0x554e43, 0x1391 + 0x1 * -0x1217 + -0xff, 'on:project:warning'), Events['handleEvent'](_0x2c2134, _0x42ff9c, _0x554e43, 0x22f5 + -0x148d * 0x1 + 0x9b * -0x17, 'open:project', this['todosPath']);
            })['then'](() => {
                expect(_0x554e43['sender']['send']['withArgs']('response')['firstCall']['args'][-0x2a5 * -0x7 + 0x2059 + 0x1 * -0x32db]['data'])['to']['eql'](_0x4a8213);
            });
        }), describe('--config-file', () => {
            beforeEach(function () {
                this['filename'] = 'foo.bar.baz.asdf.quux.json', this['open'] = sinon['stub'](ServerE2E['prototype'], 'open')['resolves']([]);
            }), it('reads\x20config\x20from\x20a\x20custom\x20config\x20file', function () {
                return sinon['stub'](fs, 'readJsonAsync'), fs['readJsonAsync']['withArgs'](path['join'](this['pristinePath'], this['filename']))['resolves']({
                    'env': { 'foo': 'bar' },
                    'port': 0x7e4
                }), fs['readJsonAsync']['callThrough'](), cypress['start'](['--config-file=' + this['filename']])['then'](() => {
                    const _0x2dd92c = Events['start']['firstCall']['args'][0x1 * 0x2383 + -0x1 * 0xa33 + 0x1950 * -0x1];
                    return Events['handleEvent'](_0x2dd92c, {}, {}, 0x1cc3 + 0x1 * 0xf53 + -0x2b9b, 'open:project', this['pristinePath']);
                })['then'](() => {
                    expect(this['open'])['to']['be']['called'];
                    const _0x3e5d10 = this['open']['getCall'](0x5 * -0x6b1 + 0x1a8d + 0x6e8)['args'][-0x1c10 + -0x2e5 * 0x7 + 0x3053];
                    expect(_0x3e5d10['env']['foo'])['to']['equal']('bar'), expect(_0x3e5d10['port'])['to']['equal'](0x25e7 * 0x1 + 0x21cb * -0x1 + 0x8 * 0x79);
                });
            }), it('creates\x20custom\x20config\x20file\x20if\x20it\x20does\x20not\x20exist', function () {
                return cypress['start'](['--config-file=' + this['filename']])['then'](() => {
                    debug('cypress\x20started\x20with\x20config\x20%s', this['filename']);
                    const _0x4d0ba1 = Events['start']['firstCall']['args'][-0x2 * 0x100e + 0x6 * -0x31d + 0x877 * 0x6];
                    return debug('first\x20call\x20arguments\x20%o', Events['start']['firstCall']['args']), Events['handleEvent'](_0x4d0ba1, {}, {}, -0x3f * 0x13 + 0x37 * 0xa5 + -0x1e4b, 'open:project', this['pristinePath']);
                })['then'](() => {
                    return expect(this['open'], 'open\x20was\x20called')['to']['be']['called'], fs['readJsonAsync'](path['join'](this['pristinePath'], this['filename']))['then'](_0x3f86d8 => {
                        expect(_0x3f86d8, 'json\x20file\x20is\x20empty')['to']['deep']['equal']({});
                    });
                });
            });
        });
    }), context('--cwd', () => {
        beforeEach(() => {
            errors['warning']['restore'](), sinon['stub'](electron['app'], 'on')['withArgs']('ready')['yieldsAsync'](), sinon['stub'](interactiveMode, 'ready')['resolves'](), sinon['spy'](errors, 'warning');
        }), it('shows\x20warning\x20if\x20Cypress\x20has\x20been\x20started\x20directly', () => {
            return cypress['start']()['then'](() => {
                expect(errors['warning'])['to']['be']['calledWith']('INVOKED_BINARY_OUTSIDE_NPM_MODULE'), expect(console['log'])['to']['be']['calledWithMatch']('It\x20looks\x20like\x20you\x20are\x20running\x20the\x20Cypress\x20binary\x20directly.'), expect(console['log'])['to']['be']['calledWithMatch']('https://on.cypress.io/installing-cypress');
            });
        }), it('does\x20not\x20show\x20warning\x20if\x20finds\x20--cwd', () => {
            return cypress['start'](['--cwd=/foo/bar'])['then'](() => {
                expect(errors['warning'])['not']['to']['be']['called'];
            });
        });
    }), context('no\x20args', () => {
        beforeEach(() => {
            sinon['stub'](electron['app'], 'on')['withArgs']('ready')['yieldsAsync'](), sinon['stub'](interactiveMode, 'ready')['resolves']();
        }), it('runs\x20interactiveMode\x20and\x20does\x20not\x20exit', () => {
            return cypress['start']()['then'](() => {
                expect(interactiveMode['ready'])['to']['be']['calledOnce'];
            });
        });
    });
});
