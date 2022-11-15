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
    }, previousCwd = process['cwd'](), snapshotConsoleLogs = function (_0x157f92) {
        const _0x462857 = {
                'hZLEs': function (_0x3dd349, _0x3f83c2, _0x573735) {
                    return _0x3dd349(_0x3f83c2, _0x573735);
                },
                'mkPSk': function (_0x24da65, _0x3d2914) {
                    return _0x24da65(_0x3d2914);
                }
            }, _0x52f3c4 = _['chain'](console['log']['args'])['map'](_0xab05e2 => {
                return _0xab05e2['join']('\x20');
            })['join']('\x0a')['value']();
        return process['chdir'](previousCwd), _0x462857['hZLEs'](snapshot, _0x157f92, _0x462857['mkPSk'](stripAnsi, _0x52f3c4));
    };
describe('lib/cypress', () => {
    const _0x53fd84 = {
        'zKhAa': function (_0x42e200, _0x5e6885) {
            return _0x42e200(_0x5e6885);
        },
        'rWEIL': function (_0x1b1bf6, _0x3d4947, _0x382a9d) {
            return _0x1b1bf6(_0x3d4947, _0x382a9d);
        },
        'yRTDk': 'error\x20was\x20logged',
        'AfMkg': 'process.exit\x20was\x20called',
        'ZKXoa': 'error\x20text',
        'mIcEj': function (_0x4180fa, _0x5ba87a, _0x94340b) {
            return _0x4180fa(_0x5ba87a, _0x94340b);
        },
        'gZkdu': 'second\x20error\x20text',
        'EvWxA': 'todos',
        'QhdUz': 'pristine',
        'IEuFE': 'no-scaffolding',
        'goGML': 'record',
        'OUzlt': 'plugin-config',
        'YMrmD': 'plugin-browser',
        'wrgLv': 'ids',
        'dRgzX': 'start',
        'NYwgY': 'init',
        'pcCqV': 'isRunning',
        'FzknE': 'setHostAndPath',
        'qoHRB': 'detect',
        'Pzzdd': 'exit',
        'SFEgY': 'reset',
        'cqwMH': 'warning',
        'UAghh': 'INVOKED_BINARY_OUTSIDE_NPM_MODULE',
        'FQRSN': 'log',
        'amssh': 'logException',
        'fylHM': 'versions',
        'YzcOM': '123.45.6789',
        'qtQuY': function (_0x41def4, _0x4a1fe4) {
            return _0x41def4(_0x4a1fe4);
        },
        'zSUmj': 'browsers',
        'SGvry': 'Edge\x20Beta',
        'zNMsH': 'chromium',
        'kjrZf': '80.0.328.2',
        'wpvti': '/some/path',
        'BJYRf': function (_0x29dc62, _0x3474ec) {
            return _0x29dc62(_0x3474ec);
        },
        'EYdrK': function (_0x422265, _0x1ccd81) {
            return _0x422265(_0x1ccd81);
        },
        'iTmym': 'has\x20valid\x20browsers',
        'pONEf': function (_0x2178a5, _0x1d0c02, _0x1601a9) {
            return _0x2178a5(_0x1d0c02, _0x1601a9);
        },
        'nxVYO': 'has\x20valid\x20electron\x20browser',
        'OdCXd': function (_0x3aae35, _0x26ebf3, _0x34f07e) {
            return _0x3aae35(_0x26ebf3, _0x34f07e);
        },
        'hbIEx': 'allows\x20browser\x20major\x20to\x20be\x20a\x20number',
        'bYTtd': function (_0x48f339, _0x12c133, _0x3ca9c9) {
            return _0x48f339(_0x12c133, _0x3ca9c9);
        },
        'ENlNb': 'validates\x20returned\x20list',
        'HYoDa': 'COULD_NOT_PARSE_ARGUMENTS',
        'LhcBm': 'could\x20not\x20parse\x20config\x20error',
        'ZRyiY': function (_0x1b0ca7, _0x5546aa) {
            return _0x1b0ca7(_0x5546aa);
        },
        'BBNQS': '--config',
        'bnAKs': 'xyz',
        'PsDeN': function (_0x1cbb1d, _0x28ae01, _0x3379fe) {
            return _0x1cbb1d(_0x28ae01, _0x3379fe);
        },
        'sBvYJ': 'could\x20not\x20parse\x20env\x20error',
        'cBnyk': '--env',
        'fBOfC': 'a123',
        'EQWeM': function (_0x2b92ff, _0x2586d4, _0x5c6cae) {
            return _0x2b92ff(_0x2586d4, _0x5c6cae);
        },
        'QZaOA': 'could\x20not\x20parse\x20reporter\x20options\x20error',
        'vBOUy': function (_0x4ed779, _0x38ad94) {
            return _0x4ed779(_0x38ad94);
        },
        'ugJIN': '--reporterOptions',
        'WYjrP': 'nonono',
        'ArGgu': 'exits\x20if\x20config\x20cannot\x20be\x20parsed',
        'ZICcM': 'exits\x20if\x20env\x20cannot\x20be\x20parsed',
        'AzTin': function (_0xf022b3, _0x4c23fe, _0x1db329) {
            return _0xf022b3(_0x4c23fe, _0x1db329);
        },
        'AOSri': 'exits\x20if\x20reporter\x20options\x20cannot\x20be\x20parsed',
        'CIfnP': 'ready',
        'OFAZO': 'open',
        'vMzfd': '--config=test=false',
        'tbHlB': '--cwd=/foo/bar',
        'CkQdn': '--config=test=false,foo=bar',
        'sQgci': 'INVALID_CONFIG_OPTION',
        'MCqmw': '`test`\x20is\x20not\x20a\x20valid\x20configuration\x20option',
        'lEJtZ': 'https://on.cypress.io/configuration',
        'coPQl': '1|2|3|0|4',
        'SBCxU': '`foo`\x20is\x20not\x20a\x20valid\x20configuration\x20option',
        'WXrvK': '--config=trashAssetsBeforeRuns=false',
        'lRCam': function (_0x40a247, _0x217c37) {
            return _0x40a247(_0x217c37);
        },
        'gOCoe': function (_0x55cb87, _0x2eba11, _0x37f0bb) {
            return _0x55cb87(_0x2eba11, _0x37f0bb);
        },
        'QWfUu': 'shows\x20warning\x20if\x20config\x20is\x20not\x20valid',
        'WVpXF': 'shows\x20warning\x20when\x20multiple\x20config\x20are\x20not\x20valid',
        'iHBGT': 'does\x20not\x20show\x20warning\x20if\x20config\x20is\x20valid',
        'NfuZU': '4|2|1|0|3',
        'LOwpz': 'listenForProjectEnd',
        'rJWwg': 'waitForSocketConnection',
        'DOKdj': 'getRemoteOrigin',
        'wrFrs': 'remoteOrigin',
        'PrOTa': function (_0x51202d, _0x1677fa) {
            return _0x51202d(_0x1677fa);
        },
        'tGlFH': 'run',
        'MiOUd': 'startInMode',
        'soDkQ': '--headless',
        'XxARI': 'Impossible\x20options:\x20both\x20headless\x20and\x20headed\x20are\x20true',
        'YoBBP': function (_0x30f9ad, _0x58aef2) {
            return _0x30f9ad(_0x58aef2);
        },
        'PNTTN': function (_0x469546, _0x7bf04d) {
            return _0x469546(_0x7bf04d);
        },
        'xWdnJ': '--browser=electron',
        'ykpMl': function (_0xf9ebfb, _0x1f1dd5) {
            return _0xf9ebfb(_0x1f1dd5);
        },
        'DxHKW': 'strips\x20leading',
        'bhTCZ': 'strips\x20in\x20the\x20middle',
        'REoGQ': 'should\x20have\x20caught\x20error\x20but\x20did\x20not',
        'zzUyI': 'NO_PROJECT_ID',
        'yrcke': function (_0x52691d, _0xb85ddf) {
            return _0x52691d(_0xb85ddf);
        },
        'MtSgf': 'e2e',
        'QYbOr': 'createProject',
        'Yidra': 'auth-token-123',
        'OTXaH': function (_0x2c580f, _0x1e5c5a) {
            return _0x2c580f(_0x1e5c5a);
        },
        'gBMMy': function (_0x2ab0aa, _0x5446c2) {
            return _0x2ab0aa(_0x5446c2);
        },
        'hLRkx': 'http://localhost:8888/__/#/tests/integration/test2.coffee',
        'GVQcK': function (_0x236aaf) {
            return _0x236aaf();
        },
        'HHmNJ': 'port=2020',
        'hBUfI': '--config=testFiles=[\x22**/test2.coffee\x22,\x22**/test1.js\x22]',
        'UCnzj': 'watch',
        'Qqfkl': 'watchTree',
        'vYKuI': '--no-run-mode',
        'BeXgt': 'CONFIG_FILE_NOT_FOUND',
        'nJTGR': 'cypress',
        'GnFuk': 'cypress.json',
        'nmBjW': 'create',
        'swtzI': '--key=asdf',
        'GeZwc': 'PROJECT_ID_AND_KEY_BUT_MISSING_RECORD_OPTION',
        'yoTkl': 'abc123',
        'tYiwe': 'cypress\x20run\x20--key\x20<record_key>',
        'hLUfv': '--record=false',
        'kPemN': 'Browser:\x20\x27foo\x27\x20was\x20not\x20found\x20on\x20your\x20system\x20or\x20is\x20not\x20supported\x20by\x20Cypress.',
        'rFyIK': 'Cypress\x20supports\x20the\x20following\x20browsers:',
        'FoPSR': 'Available\x20browsers\x20found\x20on\x20your\x20system\x20are:\x0a-\x20chrome\x0a-\x20chromium\x0a-\x20chrome:canary\x0a-\x20electron',
        'sshVm': 'BROWSER_NOT_FOUND_BY_NAME',
        'nuyzN': function (_0x20df89, _0x115412, _0x1843c7) {
            return _0x20df89(_0x115412, _0x1843c7);
        },
        'HtdBp': 'foo\x20should\x20not\x20be\x20found',
        'NrtJb': 'supported\x20browsers\x20should\x20be\x20listed',
        'HPogf': function (_0xf00086, _0x36e92f, _0xb8a0) {
            return _0xf00086(_0x36e92f, _0xb8a0);
        },
        'mKVhr': 'browser\x20names\x20should\x20be\x20listed',
        'hufqw': '--browser=foo',
        'PrReO': '{\x27foo\x27:\x20\x27bar}',
        'OQHCa': 'CONFIG_VALIDATION_ERROR',
        'gqCeo': 'localhost:9999',
        'OTLTh': 'We\x20found\x20an\x20invalid\x20configuration\x20value',
        'Avbik': 'RENAMED_CONFIG_OPTION',
        'LXJYI': function (_0x3283bc, _0xa58adf, _0x196431) {
            return _0x3283bc(_0xa58adf, _0x196431);
        },
        'DZYfF': 'closed',
        'dIvuT': 'chrome',
        'aNFnd': 'found\x20and\x20used\x20Chrome',
        'IeLHY': 'first\x204\x20custom\x20launch\x20arguments\x20to\x20Chrome',
        'xgejd': 'foo',
        'SWaLc': 'bar',
        'FjggU': 'baz',
        'EDDoh': function (_0x530f8b, _0x49a51e) {
            return _0x530f8b(_0x49a51e);
        },
        'dVPpI': '_writeExtension',
        'WtElz': '_connectToChromeRemoteInterface',
        'QuuCk': '_navigateUsingCRI',
        'ojSid': '_handleDownloads',
        'GqOFr': '_setAutomation',
        'kbGKd': '--browser=chrome',
        'rBMTL': 'electron',
        'qqrbV': function (_0x386a7a, _0xe66957, _0x4b4927) {
            return _0x386a7a(_0xe66957, _0x4b4927);
        },
        'cymyC': 'before:browser:launch',
        'pqtdH': 'CYPRESS_DEBUG',
        'gJPZd': function (_0x119b84, _0x22cec8) {
            return _0x119b84(_0x22cec8);
        },
        'eSmDf': 'ipsum',
        'JiwLL': '--video=false',
        'xEvVP': '--env=FOO=,BAR=,BAZ=ipsum',
        'zMFoF': function (_0x490765, _0x51249e) {
            return _0x490765(_0x51249e);
        },
        'oKeXc': function (_0x47e56e, _0x48c2a3, _0x50b309) {
            return _0x47e56e(_0x48c2a3, _0x50b309);
        },
        'gUfIk': 'can\x20set\x20specific\x20environment\x20variables',
        'hGjUh': 'parses\x20environment\x20variables\x20with\x20empty\x20values',
        'yQszj': function (_0xf69f6, _0x11b1c4) {
            return _0xf69f6(_0x11b1c4);
        },
        'STjSV': 'toObject',
        'TserU': 'runSpecs',
        'GtnhB': 'http://localhost:2020/__/#/tests/integration/bar.js',
        'GMQCd': 'http://localhost:8888/__/#/tests/integration/test1.js',
        'HpHYD': 'integrationFolder\x20should\x20not\x20exist!',
        'owiOw': '1-getting-started',
        'nAksP': 'todo.spec.js',
        'gxvVI': '2-advanced-examples',
        'QlYde': 'actions.spec.js',
        'aTwyw': 'files.spec.js',
        'zTumO': 'viewport.spec.js',
        'PTFWM': 'code',
        'BIcvh': 'ENOENT',
        'cdMpH': 'integration',
        'dcAzd': 'integration\x20folder\x20should\x20not\x20exist!',
        'RgfCj': 'example.json',
        'xjApi': 'fixturesFolder\x20should\x20not\x20exist!',
        'ARFJN': 'commands.js',
        'CqVoy': 'supportFolder\x20should\x20not\x20exist!',
        'iJSkT': 'index.js',
        'WaSiW': 'cypress/support',
        'lrPRX': 'http://localhost:8888',
        'FuuQJ': '--headed',
        'rrTHr': function (_0x59e8fc, _0x123fa7) {
            return _0x59e8fc(_0x123fa7);
        },
        'bTEWf': 'spec',
        'uMufz': function (_0x356f92, _0x45cd61) {
            return _0x356f92(_0x45cd61);
        },
        'xLiIj': 'nyan',
        'fbrPd': '--reporter=nyan',
        'wOlsV': 'dot',
        'zkSIg': function (_0xe68764, _0x43e19b) {
            return _0xe68764(_0x43e19b);
        },
        'mfhId': 'You\x20also\x20provided\x20your\x20Record\x20Key,\x20but\x20you\x20did\x20not\x20pass\x20the\x20--record\x20flag.',
        'ZPdEH': 'cypress\x20run\x20--record',
        'IQvFq': 'https://on.cypress.io/recording-project-runs',
        'mbvgh': 'CANNOT_REMOVE_OLD_BROWSER_PROFILES',
        'jBaZM': 'Warning:\x20We\x20failed\x20to\x20remove\x20old\x20browser\x20profiles\x20from\x20previous\x20runs.',
        'tQPUr': function (_0x33ff9a, _0x22c586) {
            return _0x33ff9a(_0x22c586);
        },
        'yDawf': 'removeOldProfiles',
        'CnHzy': 'SUPPORT_FILE_NOT_FOUND',
        'AEfbA': 'Your\x20`supportFile`\x20is\x20set\x20to\x20`/does/not/exist`,',
        'PVhxA': '/does/not/exist',
        'AmygF': 'NO_SPECS_FOUND',
        'fGVmp': 'path/to/spec',
        'vDPdg': 'We\x20searched\x20for\x20any\x20files\x20matching\x20this\x20glob\x20pattern:',
        'Pzafm': '--spec=path/to/spec',
        'YGFiL': 'We\x20searched\x20for\x20any\x20files\x20inside\x20of\x20this\x20folder:',
        'RNDdb': 'cypress/specs',
        'VBmPf': '--config=integrationFolder=cypress/specs',
        'JFXNa': 'tests/path/to/spec',
        'piJiW': 'logs\x20error\x20and\x20exits\x20when\x20spec\x20file\x20was\x20specified\x20and\x20does\x20not\x20exist',
        'PAqXZ': 'logs\x20error\x20and\x20exits\x20when\x20spec\x20absolute\x20file\x20was\x20specified\x20and\x20does\x20not\x20exist',
        'NjXWd': 'logs\x20error\x20and\x20exits\x20when\x20no\x20specs\x20were\x20found\x20at\x20all',
        'vDWXI': 'ERROR_READING_FILE',
        'flQAv': 'SETTINGS_VALIDATION_ERROR',
        'suXrU': '--config=baseUrl=localhost:9999',
        'UvYft': '555',
        'EDPIB': '777',
        'HfRqV': function (_0x2e12c5, _0x258b40) {
            return _0x2e12c5 === _0x258b40;
        },
        'xPdSm': './permissions',
        'KVnUJ': 'INVALID_REPORTER_NAME',
        'gvcnh': 'foobarbaz',
        'Myenw': '--reporter',
        'ZMSPe': 'does\x20not\x20save\x20project\x20state',
        'qtXFq': function (_0x29b0af, _0x392fd3) {
            return _0x29b0af(_0x392fd3);
        },
        'hsevp': function (_0x4f7f87, _0x1dce00, _0x197f46) {
            return _0x4f7f87(_0x1dce00, _0x197f46);
        },
        'NKZqD': 'sets\x20morgan\x20to\x20false',
        'idDvs': 'cli',
        'foLKL': '--config=requestTimeout=1234,videoCompression=false',
        'kLSbw': '--env=foo=foo,bar=bar',
        'sCpBK': 'plugin',
        'cFEAc': 'can\x20override\x20default\x20values',
        'MyzlK': 'can\x20override\x20values\x20in\x20plugins',
        'YSXQP': 'launch',
        'EONLQ': 'listen',
        'YTTFQ': '--port=5544',
        'qSOmO': 'PORT_IN_USE_SHORT',
        'yLZsy': '5544',
        'AfKPr': 'getAutomation',
        'Oybhk': '127.0.0.1',
        'SMwzu': function (_0x3ce6f9, _0x3d5dd3) {
            return _0x3ce6f9(_0x3d5dd3);
        },
        'zKcpb': function (_0x1c78cd, _0x2fd5ae) {
            return _0x1c78cd(_0x2fd5ae);
        },
        'CCFYh': function (_0x498641, _0x5d5db5, _0x29e1e1) {
            return _0x498641(_0x5d5db5, _0x29e1e1);
        },
        'oxpPV': 'can\x20change\x20the\x20default\x20port\x20to\x205544',
        'PNqxM': 'logs\x20error\x20and\x20exits\x20when\x20port\x20is\x20in\x20use',
        'EfwAv': function (_0x445b2a, _0x37a010) {
            return _0x445b2a(_0x37a010);
        },
        'PDbgh': '0.12.1',
        'dbTgD': 'quux=dolor',
        'rYOkS': 'version=0.12.1,foo=bar,host=http://localhost:8888,baz=quux=dolor',
        'JNqDK': 'cypress.json\x20should\x20not\x20exist',
        'fAEre': '--config-file',
        'ICMIE': 'false',
        'zQEYF': 'abcdefgh.test.json',
        'VRPdM': 'false\x20does\x20not\x20require\x20cypress.json\x20to\x20run',
        'fmncf': 'with\x20a\x20custom\x20config\x20file\x20fails\x20when\x20it\x20doesn\x27t\x20exist',
        'CBsIx': function (_0x4d4fa2, _0x8fda0f) {
            return _0x4d4fa2(_0x8fda0f);
        },
        'KPVLd': 'runs\x20project\x20headlessly\x20and\x20exits\x20with\x20exit\x20code\x200',
        'AYUUj': function (_0x396fb2, _0x130ea1, _0x1f8aad) {
            return _0x396fb2(_0x130ea1, _0x1f8aad);
        },
        'pazgL': 'sets\x20--headed\x20false\x20if\x20--headless',
        'vEteI': function (_0x7ba03e, _0x5eefbf, _0x52888b) {
            return _0x7ba03e(_0x5eefbf, _0x52888b);
        },
        'AdKFS': 'throws\x20an\x20error\x20if\x20both\x20--headed\x20and\x20--headless\x20are\x20true',
        'KIIJU': 'strips\x20--',
        'vekyN': function (_0xce8bae, _0x15ec2d, _0x549458) {
            return _0xce8bae(_0x15ec2d, _0x549458);
        },
        'GxpBu': 'runs\x20project\x20headlessly\x20and\x20exits\x20with\x20exit\x20code\x2010',
        'shNVl': 'does\x20not\x20generate\x20a\x20project\x20id\x20even\x20if\x20missing\x20one',
        'IYUhw': function (_0x1fba0e, _0x4c7988, _0x9ed9b4) {
            return _0x1fba0e(_0x4c7988, _0x9ed9b4);
        },
        'WUVgO': 'does\x20not\x20add\x20project\x20to\x20the\x20global\x20cache',
        'abnzd': 'runs\x20project\x20by\x20relative\x20spec\x20and\x20exits\x20with\x20status\x200',
        'QRqYS': function (_0x2c5d31, _0x1442d8, _0x33b1d1) {
            return _0x2c5d31(_0x1442d8, _0x33b1d1);
        },
        'OWpXl': 'runs\x20project\x20by\x20specific\x20spec\x20with\x20default\x20configuration',
        'EnBqp': function (_0x2ebc58, _0x4e0e60, _0x527d2b) {
            return _0x2ebc58(_0x4e0e60, _0x527d2b);
        },
        'vuJFL': 'runs\x20project\x20by\x20specific\x20absolute\x20spec\x20and\x20exits\x20with\x20status\x200',
        'PdVXF': 'runs\x20project\x20by\x20limiting\x20spec\x20files\x20via\x20config.testFiles\x20string\x20glob\x20pattern',
        'IXSHl': function (_0x359514, _0x4a0786, _0x37749f) {
            return _0x359514(_0x4a0786, _0x37749f);
        },
        'EHUGs': 'runs\x20project\x20by\x20limiting\x20spec\x20files\x20via\x20config.testFiles\x20as\x20a\x20JSON\x20array\x20of\x20string\x20glob\x20patterns',
        'ECIWB': function (_0x25f3fe, _0x4ae05e, _0x1d81c1) {
            return _0x25f3fe(_0x4ae05e, _0x1d81c1);
        },
        'XwZIT': 'does\x20not\x20watch\x20settings\x20or\x20plugins\x20in\x20run\x20mode',
        'oCdeD': 'scaffolds\x20out\x20integration\x20and\x20example\x20specs\x20if\x20they\x20do\x20not\x20exist\x20when\x20not\x20runMode',
        'jbLRu': function (_0x109e6f, _0xd4e8cd, _0x5ae841) {
            return _0x109e6f(_0xd4e8cd, _0x5ae841);
        },
        'lcRJe': 'does\x20not\x20scaffold\x20when\x20headless\x20and\x20exits\x20with\x20error\x20when\x20no\x20existing\x20project',
        'MuWOc': 'does\x20not\x20scaffold\x20integration\x20or\x20example\x20specs\x20when\x20runMode',
        'qimot': 'scaffolds\x20out\x20fixtures\x20+\x20files\x20if\x20they\x20do\x20not\x20exist',
        'xLlFl': 'scaffolds\x20out\x20support\x20+\x20files\x20if\x20they\x20do\x20not\x20exist',
        'wRSrM': function (_0x322500, _0x283bdf, _0x4dd3ea) {
            return _0x322500(_0x283bdf, _0x4dd3ea);
        },
        'pQaUp': 'removes\x20fixtures\x20when\x20they\x20exist\x20and\x20fixturesFolder\x20is\x20false',
        'YfAOB': 'runs\x20project\x20headlessly\x20and\x20displays\x20gui',
        'qPswK': function (_0x1898ca, _0x16472f, _0x34297e) {
            return _0x1898ca(_0x16472f, _0x34297e);
        },
        'dYVhq': 'turns\x20on\x20reporting',
        'jSkYV': 'can\x20change\x20the\x20reporter\x20to\x20nyan',
        'oNLRz': function (_0x51f138, _0xd0d46, _0x6745cf) {
            return _0x51f138(_0xd0d46, _0x6745cf);
        },
        'biNvc': 'can\x20change\x20the\x20reporter\x20with\x20cypress.json',
        'Pzbnt': 'runs\x20tests\x20even\x20when\x20user\x20isn\x27t\x20logged\x20in',
        'MUHWN': function (_0x46a0b5, _0x23e926, _0x2d324f) {
            return _0x46a0b5(_0x23e926, _0x2d324f);
        },
        'QZHDk': 'logs\x20warning\x20when\x20projectId\x20and\x20key\x20but\x20no\x20record\x20option',
        'JSyYO': function (_0x420dbd, _0xf86e4a, _0x2eacf5) {
            return _0x420dbd(_0xf86e4a, _0x2eacf5);
        },
        'yaVie': 'logs\x20warning\x20when\x20removing\x20old\x20browser\x20profiles\x20fails',
        'fAHpH': 'does\x20not\x20log\x20warning\x20when\x20no\x20projectId',
        'SbQIc': function (_0x36ce3b, _0x27c2d1, _0x561c04) {
            return _0x36ce3b(_0x27c2d1, _0x561c04);
        },
        'Clprs': 'does\x20not\x20log\x20warning\x20when\x20projectId\x20but\x20--record\x20false',
        'juqAW': 'logs\x20error\x20when\x20supportFile\x20doesn\x27t\x20exist',
        'nxUjk': function (_0x2c5e41, _0x486916, _0x543cc4) {
            return _0x2c5e41(_0x486916, _0x543cc4);
        },
        'brNBV': 'logs\x20error\x20when\x20browser\x20cannot\x20be\x20found',
        'dQezI': 'no\x20specs\x20found',
        'dcXaD': function (_0x301de0, _0x4996bd, _0x24a4ef) {
            return _0x301de0(_0x4996bd, _0x24a4ef);
        },
        'AEiEg': 'logs\x20error\x20and\x20exits\x20when\x20project\x20has\x20cypress.json\x20syntax\x20error',
        'VefBI': 'logs\x20error\x20and\x20exits\x20when\x20project\x20has\x20cypress.env.json\x20syntax\x20error',
        'ADgEO': 'logs\x20error\x20and\x20exits\x20when\x20project\x20has\x20invalid\x20cypress.json\x20values',
        'ZpiIT': function (_0x5171ea, _0x431d64, _0x584a41) {
            return _0x5171ea(_0x431d64, _0x584a41);
        },
        'ydQkB': 'logs\x20error\x20and\x20exits\x20when\x20project\x20has\x20invalid\x20config\x20values\x20from\x20the\x20CLI',
        'NaYts': 'logs\x20error\x20and\x20exits\x20when\x20project\x20has\x20invalid\x20config\x20values\x20from\x20env\x20vars',
        'EivrM': 'blacklistHosts',
        'oVZxr': 'blockHosts',
        'huogE': function (_0x57c015, _0x348e85, _0x336980) {
            return _0x57c015(_0x348e85, _0x336980);
        },
        'tooSl': 'logs\x20error\x20and\x20exits\x20when\x20project\x20folder\x20has\x20read\x20permissions\x20only\x20and\x20cannot\x20write\x20cypress.json',
        'aIEXz': function (_0x26e014, _0x3f34b6, _0x3e84e2) {
            return _0x26e014(_0x3f34b6, _0x3e84e2);
        },
        'MItGy': 'logs\x20error\x20and\x20exits\x20when\x20reporter\x20does\x20not\x20exist',
        'UmsOa': function (_0x133fa1, _0xa49e26, _0x7afc58) {
            return _0x133fa1(_0xa49e26, _0x7afc58);
        },
        'nAqDT': 'state',
        'PbvqU': 'morgan',
        'XMgLK': 'config\x20overrides',
        'KyzqJ': function (_0x3361ec, _0x45dcbb, _0x10b4d3) {
            return _0x3361ec(_0x45dcbb, _0x10b4d3);
        },
        'GboQY': 'plugins',
        'XwFAL': function (_0x8836d1, _0x1be51d, _0x47341e) {
            return _0x8836d1(_0x1be51d, _0x47341e);
        },
        'vBpxt': '--port',
        'ExRub': function (_0x23e75f, _0x1cc1c6, _0x249cf7) {
            return _0x23e75f(_0x1cc1c6, _0x249cf7);
        },
        'FaACe': '3|4|5|0|1|2',
        'CYBfJ': 'waitForTestsToFinishRunning',
        'ndlWX': 'path/to/video',
        'DUFCi': function (_0x3f85dd, _0x31f418) {
            return _0x3f85dd(_0x31f418);
        },
        'QPtcU': 'createRun',
        'TyKym': 'get',
        'AiBJB': 'CYPRESS_PROJECT_ID',
        'vflbY': '--record',
        'wVkOI': '--key=token-123',
        'DnryK': function (_0x2c5b54, _0xc51aaf) {
            return _0x2c5b54(_0xc51aaf);
        },
        'MloWL': 'foo-project-123',
        'mpwMz': 'token',
        'htKTM': 'CYPRESS_RECORD_KEY',
        'holPU': 'INDETERMINATE_CI_BUILD_ID',
        'nIPoF': function (_0x2e141e, _0x43138f) {
            return _0x2e141e(_0x43138f);
        },
        'tPIAI': 'INDETERMINATE_CI_BUILD_ID-group\x201',
        'dvllE': 'provider',
        'flMIb': '--group=e2e-tests',
        'PtazG': '--group=e2e-tests-chrome',
        'THNHy': '--parallel',
        'Uavsc': 'INCORRECT_CI_BUILD_ID_USAGE',
        'PUcgd': 'INCORRECT_CI_BUILD_ID_USAGE\x201',
        'BQRRN': '--ci-build-id=ciBuildId123',
        'XADdY': 'RECORD_PARAMS_WITHOUT_RECORDING',
        'nDupz': function (_0x845df8, _0xd67ba2) {
            return _0x845df8(_0xd67ba2);
        },
        'WgmjZ': 'RECORD_PARAMS_WITHOUT_RECORDING-ciBuildId\x201',
        'lEVEl': function (_0x3ff892, _0x48e472) {
            return _0x3ff892(_0x48e472);
        },
        'GTTZV': 'RECORD_PARAMS_WITHOUT_RECORDING-group\x201',
        'eiMdr': function (_0x59db3e, _0x158b40) {
            return _0x59db3e(_0x158b40);
        },
        'cpvXD': 'RECORD_PARAMS_WITHOUT_RECORDING-parallel\x201',
        'keBIs': '--tag=nightly',
        'lBhsK': 'info',
        'bppxO': 'darwin',
        'wzWNj': 'ensureAndGetByNameOrPath',
        'kreAg': '59.1.2.3',
        'xbUGh': 'Electron',
        'IDWJV': 'PARALLEL_GROUP_PARAMS_MISMATCH',
        'GIeLs': 'https://dashboard.cypress.io/runs/12345',
        'AdwPO': '--group=electron-smoke-tests',
        'XQbDW': '--ciBuildId=ciBuildId123',
        'oAafD': 'DASHBOARD_PARALLEL_REQUIRED',
        'weFlj': function (_0x190114, _0x4c9203) {
            return _0x190114(_0x4c9203);
        },
        'eJfGb': 'DASHBOARD_PARALLEL_REQUIRED\x201',
        'yOrnp': 'PARALLEL_REQUIRED',
        'ggqDW': 'DASHBOARD_ALREADY_COMPLETE',
        'laBnH': 'DASHBOARD_ALREADY_COMPLETE\x201',
        'ceuna': 'ALREADY_COMPLETE',
        'dPeiM': 'STALE_RUN',
        'dUeIm': function (_0x461a56, _0x31c35d) {
            return _0x461a56(_0x31c35d);
        },
        'moIDK': function (_0x51e822, _0x472e61) {
            return _0x51e822(_0x472e61);
        },
        'Gswgu': 'INDETERMINATE_CI_BUILD_ID-parallel\x201',
        'KuNMl': 'INDETERMINATE_CI_BUILD_ID-parallel-group\x201',
        'tyDWy': 'RECORD_PARAMS_WITHOUT_RECORDING-tag\x201',
        'PNfSM': 'RECORD_PARAMS_WITHOUT_RECORDING-group-parallel\x201',
        'uyZYP': 'DASHBOARD_RUN_GROUP_NAME_NOT_UNIQUE',
        'qzgUb': 'DASHBOARD_RUN_GROUP_NAME_NOT_UNIQUE\x201',
        'NUIsC': 'RUN_GROUP_NAME_NOT_UNIQUE',
        'acPLk': 'DASHBOARD_PARALLEL_GROUP_PARAMS_MISMATCH',
        'uzOxu': function (_0x1d8249, _0x2934ea) {
            return _0x1d8249(_0x2934ea);
        },
        'guHnW': 'DASHBOARD_PARALLEL_GROUP_PARAMS_MISMATCH\x201',
        'QqtQl': 'DASHBOARD_PARALLEL_DISALLOWED',
        'tsQjh': 'DASHBOARD_PARALLEL_DISALLOWED\x201',
        'vUUQQ': 'PARALLEL_DISALLOWED',
        'xGZpR': 'DASHBOARD_STALE_RUN',
        'inbbA': function (_0x257776, _0x39986a) {
            return _0x257776(_0x39986a);
        },
        'NYoer': 'DASHBOARD_STALE_RUN\x201',
        'mFVrG': function (_0x59d8a2, _0x577997) {
            return _0x59d8a2(_0x577997);
        },
        'yWgcE': function (_0x23457f, _0xccb5f9, _0x26665f) {
            return _0x23457f(_0xccb5f9, _0x26665f);
        },
        'dItAl': 'uses\x20process.env.CYPRESS_PROJECT_ID',
        'vNEnR': function (_0x56f264, _0x17ba4b, _0x163bae) {
            return _0x56f264(_0x17ba4b, _0x163bae);
        },
        'tzyCx': 'uses\x20process.env.CYPRESS_RECORD_KEY',
        'etmeM': 'errors\x20and\x20exits\x20when\x20using\x20--group\x20but\x20ciBuildId\x20could\x20not\x20be\x20generated',
        'nqPly': 'errors\x20and\x20exits\x20when\x20using\x20--parallel\x20but\x20ciBuildId\x20could\x20not\x20be\x20generated',
        'LTRzg': 'errors\x20and\x20exits\x20when\x20using\x20--parallel\x20and\x20--group\x20but\x20ciBuildId\x20could\x20not\x20be\x20generated',
        'qVNtq': 'errors\x20and\x20exits\x20when\x20using\x20--ci-build-id\x20with\x20no\x20group\x20or\x20parallelization',
        'bRXjG': function (_0x58bdd9, _0x1631d7, _0x3233b8) {
            return _0x58bdd9(_0x1631d7, _0x3233b8);
        },
        'LDAhk': 'errors\x20and\x20exits\x20when\x20using\x20--ci-build-id\x20without\x20recording',
        'Ycvrk': 'errors\x20and\x20exits\x20when\x20using\x20--group\x20without\x20recording',
        'YCAJd': function (_0xa46bab, _0x10bb5d, _0x35fd51) {
            return _0xa46bab(_0x10bb5d, _0x35fd51);
        },
        'zWnPH': 'errors\x20and\x20exits\x20when\x20using\x20--parallel\x20without\x20recording',
        'tawHg': function (_0x23b5ec, _0x4408ee, _0x38d9a7) {
            return _0x23b5ec(_0x4408ee, _0x38d9a7);
        },
        'mCMFB': 'errors\x20and\x20exits\x20when\x20using\x20--tag\x20without\x20recording',
        'VCAPj': 'errors\x20and\x20exits\x20when\x20using\x20--group\x20and\x20--parallel\x20without\x20recording',
        'aveKp': function (_0x2e78a0, _0x1e8bd7, _0x3e6b66) {
            return _0x2e78a0(_0x1e8bd7, _0x3e6b66);
        },
        'xtDBI': 'errors\x20and\x20exits\x20when\x20group\x20name\x20is\x20not\x20unique\x20and\x20explicitly\x20passed\x20ciBuildId',
        'LYxHV': 'errors\x20and\x20exits\x20when\x20parallel\x20group\x20params\x20are\x20different',
        'wlQwW': 'errors\x20and\x20exits\x20when\x20parallel\x20is\x20not\x20allowed',
        'HrrZQ': function (_0x5898e3, _0x300dd5, _0x23c373) {
            return _0x5898e3(_0x300dd5, _0x23c373);
        },
        'OYWpM': 'errors\x20and\x20exits\x20when\x20parallel\x20is\x20required',
        'RnBrk': 'errors\x20and\x20exits\x20when\x20run\x20is\x20already\x20complete',
        'tHHkH': 'errors\x20and\x20exits\x20when\x20run\x20is\x20stale',
        'WhDRI': function (_0x55df9a, _0x33cf9d) {
            return _0x55df9a(_0x33cf9d);
        },
        'Wnmea': '{\x22name\x22:\x22cypress\x22',
        'mrpGs': '--return-pkg',
        'luHxe': function (_0x37c1fe, _0x32ecfe) {
            return _0x37c1fe(_0x32ecfe);
        },
        'WpiKU': 'logs\x20package.json\x20and\x20exits',
        'OaXle': '--version',
        'BcKAA': function (_0x4bf4de, _0x434104) {
            return _0x4bf4de(_0x434104);
        },
        'fHkoX': function (_0x3af8f5, _0x54321d, _0x2a2eb6) {
            return _0x3af8f5(_0x54321d, _0x2a2eb6);
        },
        'mNfwa': 'logs\x20version\x20and\x20exits',
        'aPbaI': '--smoke-test',
        'pqQDj': '--ping=abc123',
        'aEnod': 'logs\x20pong\x20value\x20and\x20exits',
        'FPcIB': '4|3|0|1|2|5',
        'VgbWn': 'startWebsockets',
        'eyHlH': '--port=2121',
        'PhoTz': 'pageLoadTimeout=1000',
        'iqssM': '--foo=bar',
        'GXeTw': '--env=baz=baz',
        'LKgfK': 'http://localhost',
        'ivPKn': '2222',
        'GuquT': '5555',
        'BKWZF': 'brian',
        'drhyT': 'on:project:warning',
        'vXTqh': 'open:project',
        'ffckW': function (_0x8f3477, _0x50fad3) {
            return _0x8f3477(_0x50fad3);
        },
        'ZRxCc': 'response',
        'czDWh': 'Blah\x20blah\x20baseUrl\x20blah\x20blah',
        'rktFE': '--updating',
        'aSkzx': '--config=pageLoadTimeout=1000',
        'EWJXV': 'http://localhost:8080',
        'wXIsi': function (_0xf3c1a4, _0x964c5b) {
            return _0xf3c1a4(_0x964c5b);
        },
        'ssiqK': function (_0x403218, _0x22b411) {
            return _0x403218(_0x22b411);
        },
        'mTkMH': function (_0x4b69e2, _0x4c87d1) {
            return _0x4b69e2(_0x4c87d1);
        },
        'yywBz': 'fileServerFolder',
        'esBMO': 'port',
        'BNvnU': function (_0x531107, _0x1b6073) {
            return _0x531107(_0x1b6073);
        },
        'cqhgm': 'BASE_URL',
        'ktXTP': 'watchForFileChanges',
        'uHDPT': function (_0x251bcc, _0x2d826) {
            return _0x251bcc(_0x2d826);
        },
        'qcGPZ': 'responseTimeout',
        'raBbm': 'env',
        'tmrlS': 'foo.bar.baz.asdf.quux.json',
        'oiUua': 'readJsonAsync',
        'lhTrk': 'cypress\x20started\x20with\x20config\x20%s',
        'mNitS': 'first\x20call\x20arguments\x20%o',
        'DLjXO': 'json\x20file\x20is\x20empty',
        'TKauG': 'open\x20was\x20called',
        'bAGCm': function (_0x52e035, _0x302377) {
            return _0x52e035(_0x302377);
        },
        'fFfCm': 'reads\x20config\x20from\x20a\x20custom\x20config\x20file',
        'UEKEH': 'creates\x20custom\x20config\x20file\x20if\x20it\x20does\x20not\x20exist',
        'YEgcd': function (_0x1dc241, _0x4b0d75, _0x432783) {
            return _0x1dc241(_0x4b0d75, _0x432783);
        },
        'rHQLZ': 'passes\x20options\x20to\x20interactiveMode.ready',
        'kkTHl': function (_0x5d4458, _0x18820e, _0x48ba9f) {
            return _0x5d4458(_0x18820e, _0x48ba9f);
        },
        'lvTdk': 'passes\x20options\x20to\x20Events.start',
        'fIIiZ': function (_0x54af1b, _0x645a00, _0x25c6fe) {
            return _0x54af1b(_0x645a00, _0x25c6fe);
        },
        'ByrpN': 'passes\x20filtered\x20options\x20to\x20Project#open\x20and\x20sets\x20cli\x20config',
        'EYzdW': function (_0x386610, _0x294967, _0xf3dc87) {
            return _0x386610(_0x294967, _0xf3dc87);
        },
        'xKKlQ': 'sends\x20warning\x20when\x20baseUrl\x20cannot\x20be\x20verified',
        'iXDhu': function (_0x2039ef, _0x5f6423) {
            return _0x2039ef(_0x5f6423);
        },
        'sRYdJ': function (_0x58b439, _0x3ec60e) {
            return _0x58b439(_0x3ec60e);
        },
        'lIHBl': 'It\x20looks\x20like\x20you\x20are\x20running\x20the\x20Cypress\x20binary\x20directly.',
        'WuEnd': 'https://on.cypress.io/installing-cypress',
        'cJvnZ': function (_0x44727b, _0x290cfb) {
            return _0x44727b(_0x290cfb);
        },
        'qSurC': 'shows\x20warning\x20if\x20Cypress\x20has\x20been\x20started\x20directly',
        'TCZAH': 'does\x20not\x20show\x20warning\x20if\x20finds\x20--cwd',
        'DcaGf': 'runs\x20interactiveMode\x20and\x20does\x20not\x20exit',
        'SHmfK': function (_0x4e5d69, _0x50282e) {
            return _0x4e5d69(_0x50282e);
        },
        'mlBiu': 'mocha-banner',
        'lHFjH': function (_0x8afaed, _0x275e98) {
            return _0x8afaed(_0x275e98);
        },
        'GsghQ': 'test\x20browsers',
        'LHBeN': 'error\x20handling',
        'Qhlua': 'invalid\x20config',
        'DAACQ': function (_0x5983da, _0x1d9bb8, _0x118060) {
            return _0x5983da(_0x1d9bb8, _0x118060);
        },
        'kgsGn': '--run-project',
        'DKMDH': function (_0x515c0c, _0x4fbcd1, _0x531788) {
            return _0x515c0c(_0x4fbcd1, _0x531788);
        },
        'yBHld': function (_0x3798fa, _0x5aac58, _0x561696) {
            return _0x3798fa(_0x5aac58, _0x561696);
        },
        'kKncJ': function (_0x2ff03e, _0x5d61a7, _0x31bc37) {
            return _0x2ff03e(_0x5d61a7, _0x31bc37);
        },
        'jGFPg': 'interactive',
        'MuuVK': '--cwd',
        'gXQtr': 'no\x20args'
    };
    _0x53fd84['SHmfK'](require, _0x53fd84['mlBiu'])['register'](), _0x53fd84['SHmfK'](beforeEach, function () {
        this['timeout'](0x1f40), cache['__removeSync'](), Fixtures['scaffold'](), this['todosPath'] = Fixtures['projectPath'](_0x53fd84['EvWxA']), this['pristinePath'] = Fixtures['projectPath'](_0x53fd84['QhdUz']), this['noScaffolding'] = Fixtures['projectPath'](_0x53fd84['IEuFE']), this['recordPath'] = Fixtures['projectPath'](_0x53fd84['goGML']), this['pluginConfig'] = Fixtures['projectPath'](_0x53fd84['OUzlt']), this['pluginBrowser'] = Fixtures['projectPath'](_0x53fd84['YMrmD']), this['idsPath'] = Fixtures['projectPath'](_0x53fd84['wrgLv']), sinon['stub'](videoCapture, _0x53fd84['dRgzX'])['resolves']({}), sinon['stub'](plugins, _0x53fd84['NYwgY'])['resolves'](undefined), sinon['stub'](electronApp, _0x53fd84['pcCqV'])['returns'](!![]), sinon['stub'](extension, _0x53fd84['FzknE'])['resolves'](), sinon['stub'](detect, _0x53fd84['qoHRB'])['resolves'](TYPICAL_BROWSERS), sinon['stub'](process, _0x53fd84['Pzzdd']), sinon['stub'](ServerE2E['prototype'], _0x53fd84['SFEgY']), sinon['stub'](errors, _0x53fd84['cqwMH'])['callThrough']()['withArgs'](_0x53fd84['UAghh'])['returns'](null), sinon['spy'](errors, _0x53fd84['FQRSN']), sinon['spy'](errors, _0x53fd84['amssh']), sinon['spy'](console, _0x53fd84['FQRSN']), sinon['stub'](process, _0x53fd84['fylHM'])['value']({
            'chrome': ELECTRON_BROWSER['version'],
            'electron': _0x53fd84['YzcOM']
        }), this['expectExitWith'] = _0x506525 => {
            _0x53fd84['zKhAa'](expect, process['exit'])['to']['be']['calledWith'](_0x506525);
        }, this['expectExitWithErr'] = (_0xbbd0e1, _0x2bf2df, _0x153d74) => {
            _0x53fd84['rWEIL'](expect, errors['log'], _0x53fd84['yRTDk'])['to']['be']['calledWithMatch']({ 'type': _0xbbd0e1 }), _0x53fd84['rWEIL'](expect, process['exit'], _0x53fd84['AfMkg'])['to']['be']['calledWith'](0x1);
            const _0xa5bfd5 = errors['log']['getCall'](0x0)['args'][0x0];
            return _0x2bf2df && _0x53fd84['rWEIL'](expect, _0xa5bfd5['message'], _0x53fd84['ZKXoa'])['to']['include'](_0x2bf2df), _0x153d74 && _0x53fd84['mIcEj'](expect, _0xa5bfd5['message'], _0x53fd84['gZkdu'])['to']['include'](_0x153d74), _0xa5bfd5;
        };
    }), _0x53fd84['lHFjH'](afterEach, async () => {
        try {
            await openProject['close']();
        } catch (_0x211d23) {
        }
        Fixtures['remove']();
    }), _0x53fd84['EYzdW'](context, _0x53fd84['GsghQ'], () => {
        const _0x6947d1 = {
            'YCtAV': function (_0xbb23c3, _0x4cc2ef) {
                return _0x53fd84['EYdrK'](_0xbb23c3, _0x4cc2ef);
            },
            'fxvdQ': _0x53fd84['zSUmj']
        };
        _0x53fd84['mIcEj'](it, _0x53fd84['iTmym'], () => {
            _0x53fd84['qtQuY'](expect, v['isValidBrowserList'](_0x53fd84['zSUmj'], TYPICAL_BROWSERS))['to']['be']['true'];
        }), _0x53fd84['pONEf'](it, _0x53fd84['nxVYO'], () => {
            _0x6947d1['YCtAV'](expect, v['isValidBrowserList'](_0x6947d1['fxvdQ'], [ELECTRON_BROWSER]))['to']['be']['true'];
        }), _0x53fd84['OdCXd'](it, _0x53fd84['hbIEx'], () => {
            const _0x595dfb = {
                'name': _0x53fd84['SGvry'],
                'family': _0x53fd84['zNMsH'],
                'displayName': _0x53fd84['SGvry'],
                'version': _0x53fd84['kjrZf'],
                'path': _0x53fd84['wpvti'],
                'majorVersion': 0x50
            };
            _0x53fd84['qtQuY'](expect, v['isValidBrowserList'](_0x53fd84['zSUmj'], [_0x595dfb]))['to']['be']['true'];
        }), _0x53fd84['bYTtd'](it, _0x53fd84['ENlNb'], () => {
            const _0x105b5c = {
                'vvump': function (_0x1b5032, _0x13330d) {
                    return _0x53fd84['BJYRf'](_0x1b5032, _0x13330d);
                },
                'HiSgD': _0x53fd84['zSUmj']
            };
            return browserUtils['getBrowsers']()['then'](_0x37d571 => {
                _0x105b5c['vvump'](expect, v['isValidBrowserList'](_0x105b5c['HiSgD'], _0x37d571))['to']['be']['true'];
            });
        });
    }), _0x53fd84['EYzdW'](context, _0x53fd84['LHBeN'], function () {
        const _0x4eee6d = {
            'TauZT': _0x53fd84['HYoDa'],
            'uYzox': function (_0x3532b2, _0x573629, _0x4427cb) {
                return _0x53fd84['PsDeN'](_0x3532b2, _0x573629, _0x4427cb);
            },
            'nNpBs': _0x53fd84['sBvYJ'],
            'gWJQR': function (_0x4a3830, _0x30feb7) {
                return _0x53fd84['ZRyiY'](_0x4a3830, _0x30feb7);
            },
            'hIqnd': _0x53fd84['cBnyk'],
            'vaofX': _0x53fd84['fBOfC'],
            'sLfIn': function (_0x13335a, _0x22af0e, _0x197130) {
                return _0x53fd84['EQWeM'](_0x13335a, _0x22af0e, _0x197130);
            },
            'clMqg': _0x53fd84['QZaOA'],
            'EGTBe': function (_0xd5a041, _0x33f3d9) {
                return _0x53fd84['vBOUy'](_0xd5a041, _0x33f3d9);
            },
            'tkqyj': _0x53fd84['ugJIN'],
            'cOviB': _0x53fd84['WYjrP']
        };
        _0x53fd84['EQWeM'](it, _0x53fd84['ArGgu'], function () {
            const _0x8f20ff = {
                'VHeFK': _0x53fd84['HYoDa'],
                'ifTUF': function (_0x1da9b1, _0x259d39, _0x324241) {
                    return _0x53fd84['bYTtd'](_0x1da9b1, _0x259d39, _0x324241);
                },
                'diJqH': _0x53fd84['LhcBm'],
                'RrsAZ': function (_0x3c5b12, _0x21036f) {
                    return _0x53fd84['ZRyiY'](_0x3c5b12, _0x21036f);
                }
            };
            return cypress['start']([
                _0x53fd84['BBNQS'],
                _0x53fd84['bnAKs']
            ])['then'](() => {
                const _0x3751b2 = this['expectExitWithErr'](_0x8f20ff['VHeFK']);
                _0x8f20ff['ifTUF'](snapshot, _0x8f20ff['diJqH'], _0x8f20ff['RrsAZ'](stripAnsi, _0x3751b2['message']));
            });
        }), _0x53fd84['EQWeM'](it, _0x53fd84['ZICcM'], function () {
            const _0x210d4e = {
                'aGokE': _0x4eee6d['TauZT'],
                'IjFUp': function (_0x24b826, _0x57aea2, _0x44882d) {
                    return _0x4eee6d['uYzox'](_0x24b826, _0x57aea2, _0x44882d);
                },
                'mGByF': _0x4eee6d['nNpBs'],
                'Lvhbm': function (_0x162dd8, _0x237442) {
                    return _0x4eee6d['gWJQR'](_0x162dd8, _0x237442);
                }
            };
            return cypress['start']([
                _0x4eee6d['hIqnd'],
                _0x4eee6d['vaofX']
            ])['then'](() => {
                const _0xcff850 = this['expectExitWithErr'](_0x210d4e['aGokE']);
                _0x210d4e['IjFUp'](snapshot, _0x210d4e['mGByF'], _0x210d4e['Lvhbm'](stripAnsi, _0xcff850['message']));
            });
        }), _0x53fd84['AzTin'](it, _0x53fd84['AOSri'], function () {
            const _0x18ccb4 = {
                'YVcRC': _0x4eee6d['TauZT'],
                'IkTwj': function (_0x4e2cdc, _0x36aa29, _0x5890e0) {
                    return _0x4eee6d['sLfIn'](_0x4e2cdc, _0x36aa29, _0x5890e0);
                },
                'QFVXl': _0x4eee6d['clMqg'],
                'jPTyM': function (_0x55dd2a, _0x301927) {
                    return _0x4eee6d['EGTBe'](_0x55dd2a, _0x301927);
                }
            };
            return cypress['start']([
                _0x4eee6d['tkqyj'],
                _0x4eee6d['cOviB']
            ])['then'](() => {
                const _0x1ddc11 = this['expectExitWithErr'](_0x18ccb4['YVcRC']);
                _0x18ccb4['IkTwj'](snapshot, _0x18ccb4['QFVXl'], _0x18ccb4['jPTyM'](stripAnsi, _0x1ddc11['message']));
            });
        });
    }), _0x53fd84['EYzdW'](context, _0x53fd84['Qhlua'], function () {
        const _0x47a467 = {
            'SCWjA': function (_0x560547, _0xfd425b) {
                return _0x53fd84['vBOUy'](_0x560547, _0xfd425b);
            },
            'bSQOp': _0x53fd84['sQgci'],
            'RTBRH': function (_0x179f26, _0x201a9e) {
                return _0x53fd84['vBOUy'](_0x179f26, _0x201a9e);
            },
            'VvGmp': _0x53fd84['MCqmw'],
            'MzAxV': _0x53fd84['lEJtZ'],
            'VRrby': _0x53fd84['coPQl'],
            'TgsFw': function (_0x3f876a, _0x103ed2) {
                return _0x53fd84['vBOUy'](_0x3f876a, _0x103ed2);
            },
            'nOEvx': _0x53fd84['SBCxU'],
            'hjJnk': _0x53fd84['WXrvK']
        };
        _0x53fd84['lRCam'](beforeEach, function () {
            this['win'] = {
                'on': sinon['stub'](),
                'webContents': { 'on': sinon['stub']() }
            }, sinon['stub'](electron['app'], 'on')['withArgs'](_0x53fd84['CIfnP'])['yieldsAsync'](), sinon['stub'](Windows, _0x53fd84['OFAZO'])['resolves'](this['win']);
        }), _0x53fd84['gOCoe'](it, _0x53fd84['QWfUu'], function () {
            return cypress['start']([
                _0x53fd84['vMzfd'],
                _0x53fd84['tbHlB']
            ])['then'](() => {
                _0x47a467['SCWjA'](expect, errors['warning'])['to']['be']['calledWith'](_0x47a467['bSQOp']), _0x47a467['RTBRH'](expect, console['log'])['to']['be']['calledWithMatch'](_0x47a467['VvGmp']), _0x47a467['RTBRH'](expect, console['log'])['to']['be']['calledWithMatch'](_0x47a467['MzAxV']);
            });
        }), _0x53fd84['gOCoe'](it, _0x53fd84['WVpXF'], function () {
            return cypress['start']([
                _0x53fd84['CkQdn'],
                _0x53fd84['tbHlB']
            ])['then'](() => {
                const _0x15934f = _0x47a467['VRrby']['split']('|');
                let _0x26d742 = 0x0;
                while (!![]) {
                    switch (_0x15934f[_0x26d742++]) {
                    case '0':
                        _0x47a467['RTBRH'](expect, console['log'])['to']['be']['calledWithMatch'](_0x47a467['MzAxV']);
                        continue;
                    case '1':
                        _0x47a467['RTBRH'](expect, errors['warning'])['to']['be']['calledWith'](_0x47a467['bSQOp']);
                        continue;
                    case '2':
                        _0x47a467['TgsFw'](expect, console['log'])['to']['be']['calledWithMatch'](_0x47a467['VvGmp']);
                        continue;
                    case '3':
                        _0x47a467['TgsFw'](expect, console['log'])['to']['be']['calledWithMatch'](_0x47a467['nOEvx']);
                        continue;
                    case '4':
                        _0x47a467['TgsFw'](snapshotConsoleLogs, _0x47a467['bSQOp']);
                        continue;
                    }
                    break;
                }
            });
        }), _0x53fd84['gOCoe'](it, _0x53fd84['iHBGT'], function () {
            const _0x20ed37 = {
                'lRPlm': function (_0x3fbe6c, _0x1d83f6) {
                    return _0x47a467['TgsFw'](_0x3fbe6c, _0x1d83f6);
                },
                'HDPyX': _0x47a467['bSQOp']
            };
            return cypress['start']([_0x47a467['hjJnk']])['then'](() => {
                _0x20ed37['lRPlm'](expect, errors['warning'])['to']['not']['be']['calledWith'](_0x20ed37['HDPyX']);
            });
        });
    }), _0x53fd84['DAACQ'](context, _0x53fd84['kgsGn'], () => {
        const _0x4fff65 = {
            'qxtFL': function (_0x16380f, _0x2b1d33) {
                return _0x53fd84['yQszj'](_0x16380f, _0x2b1d33);
            },
            'suQwV': _0x53fd84['STjSV'],
            'cwWaB': _0x53fd84['TserU'],
            'CCcHo': _0x53fd84['GtnhB'],
            'poFeg': _0x53fd84['hLRkx'],
            'ltMhc': _0x53fd84['GMQCd'],
            'itddL': _0x53fd84['HpHYD'],
            'emvLa': _0x53fd84['owiOw'],
            'lutLp': _0x53fd84['nAksP'],
            'nfpsr': _0x53fd84['gxvVI'],
            'FXaxI': _0x53fd84['QlYde'],
            'Oordh': _0x53fd84['aTwyw'],
            'VWqrl': _0x53fd84['zTumO'],
            'jgyVU': function (_0x1f0d61, _0x556b2a) {
                return _0x53fd84['yQszj'](_0x1f0d61, _0x556b2a);
            },
            'MMWuK': _0x53fd84['PTFWM'],
            'wahEt': _0x53fd84['BIcvh'],
            'ZXJOT': _0x53fd84['nJTGR'],
            'CUkgr': _0x53fd84['GnFuk'],
            'OAasv': _0x53fd84['cdMpH'],
            'KapKx': _0x53fd84['dcAzd'],
            'ykKau': _0x53fd84['RgfCj'],
            'vGpwu': _0x53fd84['xjApi'],
            'tWONR': _0x53fd84['vYKuI'],
            'dZppe': _0x53fd84['ARFJN'],
            'cRDZQ': _0x53fd84['CqVoy'],
            'NnqGx': _0x53fd84['iJSkT'],
            'MrKGB': _0x53fd84['WaSiW'],
            'IjwFD': function (_0x4a88a1) {
                return _0x53fd84['GVQcK'](_0x4a88a1);
            },
            'ofhbs': _0x53fd84['lrPRX'],
            'UDLqO': _0x53fd84['FuuQJ'],
            'AIjJo': function (_0x24ab61, _0xba3eb6) {
                return _0x53fd84['rrTHr'](_0x24ab61, _0xba3eb6);
            },
            'xfmNk': _0x53fd84['bTEWf'],
            'MRChy': function (_0x279b25, _0x36912f) {
                return _0x53fd84['uMufz'](_0x279b25, _0x36912f);
            },
            'GEKGx': _0x53fd84['xLiIj'],
            'EbhlH': _0x53fd84['nmBjW'],
            'qwOoe': _0x53fd84['fbrPd'],
            'inMSx': _0x53fd84['wOlsV'],
            'WpkdU': function (_0x30e650, _0x562584) {
                return _0x53fd84['uMufz'](_0x30e650, _0x562584);
            },
            'mkDjw': _0x53fd84['GeZwc'],
            'TdqMV': _0x53fd84['yoTkl'],
            'GFeAh': function (_0x52ddab, _0x276285) {
                return _0x53fd84['zkSIg'](_0x52ddab, _0x276285);
            },
            'awpyQ': _0x53fd84['mfhId'],
            'kwtZE': _0x53fd84['ZPdEH'],
            'oJLpr': _0x53fd84['IQvFq'],
            'Djvso': _0x53fd84['mbvgh'],
            'GTmsG': function (_0x1bdd58, _0x515a9d) {
                return _0x53fd84['zkSIg'](_0x1bdd58, _0x515a9d);
            },
            'kvAJH': _0x53fd84['jBaZM'],
            'NUJzO': function (_0xc4dca5, _0xf5572b) {
                return _0x53fd84['tQPUr'](_0xc4dca5, _0xf5572b);
            },
            'CENRj': _0x53fd84['xgejd'],
            'ZXilF': _0x53fd84['yDawf'],
            'tXhLa': _0x53fd84['CnHzy'],
            'snAnG': _0x53fd84['AEfbA'],
            'JZJpt': _0x53fd84['PVhxA'],
            'OXDVj': _0x53fd84['AmygF'],
            'agfHW': _0x53fd84['fGVmp'],
            'sOCrO': _0x53fd84['vDPdg'],
            'SUYdv': _0x53fd84['Pzafm'],
            'KAlhT': _0x53fd84['YGFiL'],
            'wKJkn': _0x53fd84['RNDdb'],
            'KgMhe': _0x53fd84['VBmPf'],
            'SsBtB': _0x53fd84['JFXNa'],
            'sUAPz': function (_0x2e2a70, _0x1a98c5, _0x103857) {
                return _0x53fd84['oKeXc'](_0x2e2a70, _0x1a98c5, _0x103857);
            },
            'nncZE': _0x53fd84['piJiW'],
            'DTopK': function (_0x8f09d0, _0x40b963, _0x3b8050) {
                return _0x53fd84['oKeXc'](_0x8f09d0, _0x40b963, _0x3b8050);
            },
            'qVjwY': _0x53fd84['PAqXZ'],
            'Slnzd': _0x53fd84['NjXWd'],
            'gUYTO': _0x53fd84['vDWXI'],
            'OKLFk': _0x53fd84['flQAv'],
            'iYjPN': _0x53fd84['gqCeo'],
            'VdfQJ': _0x53fd84['OQHCa'],
            'FwoRG': _0x53fd84['OTLTh'],
            'VvsEl': _0x53fd84['suXrU'],
            'iWWhV': _0x53fd84['UvYft'],
            'Lttzz': _0x53fd84['EDPIB'],
            'JlOFl': function (_0x57a6ec, _0x5aeabc) {
                return _0x53fd84['HfRqV'](_0x57a6ec, _0x5aeabc);
            },
            'aVrQI': _0x53fd84['xPdSm'],
            'eGhYr': _0x53fd84['KVnUJ'],
            'KcSnA': _0x53fd84['gvcnh'],
            'KkpCC': _0x53fd84['Myenw'],
            'JHciJ': _0x53fd84['ZMSPe'],
            'lmlUX': function (_0x41125e, _0xd8ca07) {
                return _0x53fd84['qtXFq'](_0x41125e, _0xd8ca07);
            },
            'mhKwj': function (_0x131bef, _0x27e623, _0x5ab135) {
                return _0x53fd84['hsevp'](_0x131bef, _0x27e623, _0x5ab135);
            },
            'recqB': _0x53fd84['NKZqD'],
            'ZoTqT': _0x53fd84['idDvs'],
            'eqdyD': _0x53fd84['foLKL'],
            'TnAtt': _0x53fd84['kLSbw'],
            'sQQjh': _0x53fd84['SWaLc'],
            'LwVmc': function (_0x3ea5b1, _0x54a7be) {
                return _0x53fd84['qtXFq'](_0x3ea5b1, _0x54a7be);
            },
            'tkUbT': _0x53fd84['sCpBK'],
            'hthim': function (_0x28bd21, _0x34c315) {
                return _0x53fd84['qtXFq'](_0x28bd21, _0x34c315);
            },
            'JQAQj': _0x53fd84['cFEAc'],
            'EkTxj': _0x53fd84['MyzlK'],
            'yFweL': _0x53fd84['Pzzdd'],
            'PojBu': _0x53fd84['YSXQP'],
            'JyYzy': _0x53fd84['EONLQ'],
            'nOLcD': _0x53fd84['OFAZO'],
            'bmvOG': _0x53fd84['YTTFQ'],
            'DkQty': _0x53fd84['qSOmO'],
            'FbMoP': _0x53fd84['yLZsy'],
            'cidky': _0x53fd84['AfKPr'],
            'SKFya': _0x53fd84['Oybhk'],
            'ZiVZN': function (_0x305fc3, _0xcf6a0e) {
                return _0x53fd84['qtXFq'](_0x305fc3, _0xcf6a0e);
            },
            'XFMyZ': function (_0x20bc74, _0x49f6d1) {
                return _0x53fd84['SMwzu'](_0x20bc74, _0x49f6d1);
            },
            'mIZNL': function (_0x25a794, _0x1486f1) {
                return _0x53fd84['zKcpb'](_0x25a794, _0x1486f1);
            },
            'ITnKJ': function (_0x4ee64a, _0x5b64ca, _0x58b65e) {
                return _0x53fd84['CCFYh'](_0x4ee64a, _0x5b64ca, _0x58b65e);
            },
            'hvymq': _0x53fd84['oxpPV'],
            'MYgzd': _0x53fd84['PNqxM'],
            'ZANBV': function (_0x13ba15, _0x36d5a8) {
                return _0x53fd84['EfwAv'](_0x13ba15, _0x36d5a8);
            },
            'jdDGq': _0x53fd84['PDbgh'],
            'uIXeG': _0x53fd84['dbTgD'],
            'GXotn': _0x53fd84['JiwLL'],
            'xMXeV': _0x53fd84['cBnyk'],
            'teLpr': _0x53fd84['rYOkS'],
            'sZxAQ': _0x53fd84['JNqDK'],
            'zywVq': _0x53fd84['fAEre'],
            'vrBMz': _0x53fd84['ICMIE'],
            'jRMTu': _0x53fd84['BeXgt'],
            'pUSCT': _0x53fd84['zQEYF'],
            'SHwhk': function (_0x314c57, _0x2f6d6b, _0x4a8ebb) {
                return _0x53fd84['CCFYh'](_0x314c57, _0x2f6d6b, _0x4a8ebb);
            },
            'hqThS': _0x53fd84['VRPdM'],
            'CXUAh': _0x53fd84['fmncf']
        };
        _0x53fd84['CBsIx'](beforeEach, () => {
            const _0x5401cf = _0x53fd84['NfuZU']['split']('|');
            let _0x4c4988 = 0x0;
            while (!![]) {
                switch (_0x5401cf[_0x4c4988++]) {
                case '0':
                    sinon['stub'](browsers, _0x53fd84['OFAZO']);
                    continue;
                case '1':
                    sinon['stub'](runMode, _0x53fd84['LOwpz'])['resolves']({ 'stats': { 'failures': 0x0 } });
                    continue;
                case '2':
                    sinon['stub'](runMode, _0x53fd84['rJWwg'])['resolves']();
                    continue;
                case '3':
                    sinon['stub'](commitInfo, _0x53fd84['DOKdj'])['resolves'](_0x53fd84['wrFrs']);
                    continue;
                case '4':
                    sinon['stub'](electron['app'], 'on')['withArgs'](_0x53fd84['CIfnP'])['yieldsAsync']();
                    continue;
                }
                break;
            }
        }), _0x53fd84['CCFYh'](it, _0x53fd84['KPVLd'], function () {
            const _0x2470b = {
                'mByyT': function (_0x8cb572, _0x944f71) {
                    return _0x4fff65['qxtFL'](_0x8cb572, _0x944f71);
                }
            };
            return cypress['start'](['--run-project=' + this['todosPath']])['then'](() => {
                _0x2470b['mByyT'](expect, browsers['open'])['to']['be']['calledWithMatch'](ELECTRON_BROWSER), this['expectExitWith'](0x0);
            });
        }), _0x53fd84['AYUUj'](it, _0x53fd84['pazgL'], function () {
            const _0x2d2c55 = {
                'qEvWv': function (_0x4f0d3a, _0x5b59d7) {
                    return _0x53fd84['PrOTa'](_0x4f0d3a, _0x5b59d7);
                },
                'JkvVk': _0x53fd84['tGlFH']
            };
            return sinon['spy'](cypress, _0x53fd84['MiOUd']), cypress['start']([
                '--run-project=' + this['todosPath'],
                _0x53fd84['soDkQ']
            ])['then'](() => {
                _0x2d2c55['qEvWv'](expect, browsers['open'])['to']['be']['calledWithMatch'](ELECTRON_BROWSER), this['expectExitWith'](0x0), _0x2d2c55['qEvWv'](expect, cypress['startInMode'])['to']['be']['calledOnce'], _0x2d2c55['qEvWv'](expect, cypress['startInMode'])['to']['be']['calledWith'](_0x2d2c55['JkvVk']);
                const _0x15e9bd = cypress['startInMode']['firstCall']['args'][0x1];
                _0x2d2c55['qEvWv'](expect, _0x15e9bd)['to']['include']({
                    'headless': !![],
                    'headed': ![]
                });
            });
        }), _0x53fd84['vEteI'](it, _0x53fd84['AdKFS'], function () {
            _0x53fd84['PrOTa'](expect, () => cypress['start']([
                '--run-project=' + this['todosPath'],
                '--headless',
                '--headed'
            ]))['to']['throw'](_0x53fd84['XxARI']);
        }), _0x53fd84['vEteI'](describe, _0x53fd84['KIIJU'], () => {
            const _0x14a868 = {
                'yaurj': function (_0x5d46c8, _0x4947a5) {
                    return _0x53fd84['YoBBP'](_0x5d46c8, _0x4947a5);
                },
                'knPIt': function (_0xd27116, _0x3ec789) {
                    return _0x53fd84['PNTTN'](_0xd27116, _0x3ec789);
                },
                'CmhHU': _0x53fd84['xWdnJ'],
                'YwvaB': function (_0x147890, _0x25ed62) {
                    return _0x53fd84['PNTTN'](_0x147890, _0x25ed62);
                }
            };
            _0x53fd84['ykpMl'](beforeEach, () => {
                sinon['spy'](argsUtil, _0x4fff65['suQwV']);
            }), _0x53fd84['gOCoe'](it, _0x53fd84['DxHKW'], function () {
                return cypress['start']([
                    '--',
                    '--run-project=' + this['todosPath']
                ])['then'](() => {
                    _0x14a868['yaurj'](expect, argsUtil['toObject'])['to']['have']['been']['calledWith'](['--run-project=' + this['todosPath']]), _0x14a868['knPIt'](expect, browsers['open'])['to']['be']['calledWithMatch'](ELECTRON_BROWSER), this['expectExitWith'](0x0);
                });
            }), _0x53fd84['gOCoe'](it, _0x53fd84['bhTCZ'], function () {
                return cypress['start']([
                    '--run-project=' + this['todosPath'],
                    '--',
                    _0x14a868['CmhHU']
                ])['then'](() => {
                    _0x14a868['knPIt'](expect, argsUtil['toObject'])['to']['have']['been']['calledWith']([
                        '--run-project=' + this['todosPath'],
                        _0x14a868['CmhHU']
                    ]), _0x14a868['YwvaB'](expect, browsers['open'])['to']['be']['calledWithMatch'](ELECTRON_BROWSER), this['expectExitWith'](0x0);
                });
            });
        }), _0x53fd84['vekyN'](it, _0x53fd84['GxpBu'], function () {
            return sinon['stub'](runMode, _0x4fff65['cwWaB'])['resolves']({ 'totalFailed': 0xa }), cypress['start'](['--run-project=' + this['todosPath']])['then'](() => {
                this['expectExitWith'](0xa);
            });
        }), _0x53fd84['vekyN'](it, _0x53fd84['shNVl'], function () {
            const _0x920547 = {
                'goWaq': _0x53fd84['REoGQ'],
                'nqSKc': function (_0x2511e1, _0x460ce9) {
                    return _0x53fd84['ykpMl'](_0x2511e1, _0x460ce9);
                },
                'QabRh': _0x53fd84['zzUyI'],
                'IEBsi': function (_0x1a71ae, _0x4c3e44) {
                    return _0x53fd84['yrcke'](_0x1a71ae, _0x4c3e44);
                },
                'zTGyG': _0x53fd84['MtSgf']
            };
            return sinon['stub'](api, _0x53fd84['QYbOr']), user['set']({ 'authToken': _0x53fd84['Yidra'] })['then'](() => {
                return cypress['start'](['--run-project=' + this['noScaffolding']]);
            })['then'](() => {
                this['expectExitWith'](0x0);
            })['then'](() => {
                return _0x920547['IEBsi'](expect, api['createProject'])['not']['to']['be']['called'], new ProjectBase({
                    'projectRoot': this['noScaffolding'],
                    'testingType': _0x920547['zTGyG']
                })['getProjectId']()['then'](() => {
                    throw new Error(_0x920547['goWaq']);
                })['catch'](_0x3f15dc => {
                    _0x920547['nqSKc'](expect, _0x3f15dc['type'])['to']['eq'](_0x920547['QabRh']);
                });
            });
        }), _0x53fd84['IYUhw'](it, _0x53fd84['WUVgO'], function () {
            const _0x43cbee = {
                'QiPdH': function (_0x1ff19d, _0x38ebf8) {
                    return _0x53fd84['OTXaH'](_0x1ff19d, _0x38ebf8);
                }
            };
            return cache['getProjectRoots']()['then'](_0x5b9d16 => {
                return _0x43cbee['QiPdH'](expect, _0x5b9d16['length'])['to']['eq'](0x0), cypress['start'](['--run-project=' + this['todosPath']]);
            })['then'](() => {
                return cache['getProjectRoots']();
            })['then'](_0x52d0fa => {
                _0x43cbee['QiPdH'](expect, _0x52d0fa['length'])['to']['eq'](0x0);
            });
        }), _0x53fd84['IYUhw'](it, _0x53fd84['abnzd'], function () {
            const _0x35b697 = {
                    'SqDVu': function (_0x5e81c7, _0x39c356) {
                        return _0x53fd84['gBMMy'](_0x5e81c7, _0x39c356);
                    },
                    'KEtUF': _0x53fd84['hLRkx']
                }, _0xe5d084 = path['relative'](_0x53fd84['GVQcK'](cwd), this['todosPath']);
            return cypress['start']([
                '--run-project=' + this['todosPath'],
                '--spec=' + _0xe5d084 + '/tests/test2.coffee'
            ])['then'](() => {
                _0x35b697['SqDVu'](expect, browsers['open'])['to']['be']['calledWithMatch'](ELECTRON_BROWSER, { 'url': _0x35b697['KEtUF'] }), this['expectExitWith'](0x0);
            });
        }), _0x53fd84['QRqYS'](it, _0x53fd84['OWpXl'], function () {
            return cypress['start']([
                '--run-project=' + this['idsPath'],
                '--spec=' + this['idsPath'] + '/cypress/integration/bar.js',
                _0x53fd84['BBNQS'],
                _0x53fd84['HHmNJ']
            ])['then'](() => {
                _0x4fff65['qxtFL'](expect, browsers['open'])['to']['be']['calledWithMatch'](ELECTRON_BROWSER, { 'url': _0x4fff65['CCcHo'] }), this['expectExitWith'](0x0);
            });
        }), _0x53fd84['EnBqp'](it, _0x53fd84['vuJFL'], function () {
            const _0x4af4d7 = {
                'kqsYA': function (_0x3d1c42, _0x345e7c) {
                    return _0x4fff65['qxtFL'](_0x3d1c42, _0x345e7c);
                },
                'uuUhC': _0x4fff65['poFeg']
            };
            return cypress['start']([
                '--run-project=' + this['todosPath'],
                '--spec=' + this['todosPath'] + '/tests/test2.coffee'
            ])['then'](() => {
                _0x4af4d7['kqsYA'](expect, browsers['open'])['to']['be']['calledWithMatch'](ELECTRON_BROWSER, { 'url': _0x4af4d7['uuUhC'] }), this['expectExitWith'](0x0);
            });
        }), _0x53fd84['EnBqp'](it, _0x53fd84['PdVXF'], function () {
            const _0x10d76f = {
                'dIVfr': function (_0x5f4541, _0x397d9d) {
                    return _0x53fd84['gBMMy'](_0x5f4541, _0x397d9d);
                },
                'Ckrbk': _0x53fd84['hLRkx']
            };
            return cypress['start']([
                '--run-project=' + this['todosPath'],
                '--config=testFiles=' + this['todosPath'] + '/tests/test2.coffee'
            ])['then'](() => {
                _0x10d76f['dIVfr'](expect, browsers['open'])['to']['be']['calledWithMatch'](ELECTRON_BROWSER, { 'url': _0x10d76f['Ckrbk'] }), this['expectExitWith'](0x0);
            });
        }), _0x53fd84['IXSHl'](it, _0x53fd84['EHUGs'], function () {
            const _0x5eb069 = {
                'WrCKn': function (_0x25a7c0, _0x475be1) {
                    return _0x53fd84['gBMMy'](_0x25a7c0, _0x475be1);
                },
                'htkZt': _0x53fd84['hLRkx']
            };
            return cypress['start']([
                '--run-project=' + this['todosPath'],
                _0x53fd84['hBUfI']
            ])['then'](() => {
                _0x5eb069['WrCKn'](expect, browsers['open'])['to']['be']['calledWithMatch'](ELECTRON_BROWSER, { 'url': _0x5eb069['htkZt'] });
            })['then'](() => {
                _0x4fff65['qxtFL'](expect, browsers['open'])['to']['be']['calledWithMatch'](ELECTRON_BROWSER, { 'url': _0x4fff65['ltMhc'] }), this['expectExitWith'](0x0);
            });
        }), _0x53fd84['ECIWB'](it, _0x53fd84['XwZIT'], function () {
            const _0x5297f9 = {
                    'ceuxc': function (_0x582927, _0x53861b) {
                        return _0x53fd84['gBMMy'](_0x582927, _0x53861b);
                    }
                }, _0x2488b0 = sinon['spy'](Watchers['prototype'], _0x53fd84['UCnzj']), _0x4495f6 = sinon['spy'](Watchers['prototype'], _0x53fd84['Qqfkl']);
            return cypress['start'](['--run-project=' + this['pluginConfig']])['then'](() => {
                _0x5297f9['ceuxc'](expect, _0x4495f6)['not']['to']['be']['called'], _0x5297f9['ceuxc'](expect, _0x2488b0)['not']['to']['be']['called'], this['expectExitWith'](0x0);
            });
        }), _0x53fd84['ECIWB'](it, _0x53fd84['oCdeD'], function () {
            const _0x55eef2 = { 'SUPzT': _0x53fd84['vYKuI'] };
            return config['get'](this['pristinePath'])['then'](_0x43d7a5 => {
                const _0x2810bd = {
                    'uNSwM': _0x4fff65['itddL'],
                    'jisIR': _0x4fff65['emvLa'],
                    'QJswL': _0x4fff65['lutLp'],
                    'HkBVO': _0x4fff65['nfpsr'],
                    'jgNtr': _0x4fff65['FXaxI'],
                    'GiWgK': _0x4fff65['Oordh'],
                    'mShzD': _0x4fff65['VWqrl']
                };
                return fs['statAsync'](_0x43d7a5['integrationFolder'])['then'](() => {
                    throw new Error(_0x2810bd['uNSwM']);
                })['catch'](() => {
                    return cypress['start']([
                        '--run-project=' + this['pristinePath'],
                        _0x55eef2['SUPzT']
                    ]);
                })['then'](() => {
                    return fs['statAsync'](_0x43d7a5['integrationFolder']);
                })['then'](() => {
                    return Promise['join'](fs['statAsync'](path['join'](_0x43d7a5['integrationFolder'], _0x2810bd['jisIR'], _0x2810bd['QJswL'])), fs['statAsync'](path['join'](_0x43d7a5['integrationFolder'], _0x2810bd['HkBVO'], _0x2810bd['jgNtr'])), fs['statAsync'](path['join'](_0x43d7a5['integrationFolder'], _0x2810bd['HkBVO'], _0x2810bd['GiWgK'])), fs['statAsync'](path['join'](_0x43d7a5['integrationFolder'], _0x2810bd['HkBVO'], _0x2810bd['mShzD'])));
                });
            });
        }), _0x53fd84['jbLRu'](it, _0x53fd84['lcRJe'], function () {
            const _0x1c5d40 = { 'wEpxS': _0x53fd84['BeXgt'] }, _0x71610e = function (_0x1e568d, _0x1392f9) {
                    if (!_0x1e568d['isRejected']())
                        throw new Error('File\x20or\x20folder\x20was\x20scaffolded\x20at\x20index:\x20' + _0x1392f9);
                    _0x4fff65['jgyVU'](expect, _0x1e568d['reason']())['to']['have']['property'](_0x4fff65['MMWuK'], _0x4fff65['wahEt']);
                };
            return Promise['all']([
                fs['statAsync'](path['join'](this['pristinePath'], _0x53fd84['nJTGR']))['reflect'](),
                fs['statAsync'](path['join'](this['pristinePath'], _0x53fd84['GnFuk']))['reflect']()
            ])['each'](_0x71610e)['then'](() => {
                return cypress['start'](['--run-project=' + this['pristinePath']]);
            })['then'](() => {
                return Promise['all']([
                    fs['statAsync'](path['join'](this['pristinePath'], _0x4fff65['ZXJOT']))['reflect'](),
                    fs['statAsync'](path['join'](this['pristinePath'], _0x4fff65['CUkgr']))['reflect']()
                ]);
            })['each'](_0x71610e)['then'](() => {
                this['expectExitWithErr'](_0x1c5d40['wEpxS'], this['pristinePath']);
            });
        }), _0x53fd84['jbLRu'](it, _0x53fd84['MuWOc'], function () {
            const _0x2eb2a4 = {
                'XbIOD': _0x4fff65['ZXJOT'],
                'TWEvd': _0x4fff65['OAasv'],
                'uPGAl': _0x4fff65['KapKx']
            };
            return settings['write'](this['pristinePath'], {})['then'](() => {
                return cypress['start'](['--run-project=' + this['pristinePath']]);
            })['then'](() => {
                return fs['statAsync'](path['join'](this['pristinePath'], _0x2eb2a4['XbIOD'], _0x2eb2a4['TWEvd']));
            })['then'](() => {
                throw new Error(_0x2eb2a4['uPGAl']);
            })['catch']({ 'code': _0x4fff65['wahEt'] }, () => {
            });
        }), _0x53fd84['jbLRu'](it, _0x53fd84['qimot'], function () {
            const _0x4dcac8 = {
                'SdYGl': _0x4fff65['ykKau'],
                'UMPRE': _0x4fff65['vGpwu'],
                'fVkyT': _0x4fff65['tWONR']
            };
            return config['get'](this['pristinePath'])['then'](_0x474b81 => {
                const _0x11e02 = {
                    'ZGzJj': _0x4dcac8['UMPRE'],
                    'mptRV': _0x4dcac8['fVkyT']
                };
                return fs['statAsync'](_0x474b81['fixturesFolder'])['then'](() => {
                    throw new Error(_0x11e02['ZGzJj']);
                })['catch'](() => {
                    return cypress['start']([
                        '--run-project=' + this['pristinePath'],
                        _0x11e02['mptRV']
                    ]);
                })['then'](() => {
                    return fs['statAsync'](_0x474b81['fixturesFolder']);
                })['then'](() => {
                    return fs['statAsync'](path['join'](_0x474b81['fixturesFolder'], _0x4dcac8['SdYGl']));
                });
            });
        }), _0x53fd84['jbLRu'](it, _0x53fd84['xLlFl'], function () {
            const _0x4fea09 = {
                    'kubOj': _0x4fff65['cRDZQ'],
                    'RmLhE': _0x4fff65['NnqGx']
                }, _0x1a4b55 = path['join'](this['pristinePath'], _0x4fff65['MrKGB']);
            return config['get'](this['pristinePath'])['then'](() => {
                const _0x3693c1 = {
                    'tJNwl': _0x4fff65['tWONR'],
                    'GzNdt': _0x4fff65['dZppe']
                };
                return fs['statAsync'](_0x1a4b55)['then'](() => {
                    throw new Error(_0x4fea09['kubOj']);
                })['catch']({ 'code': _0x4fff65['wahEt'] }, () => {
                    return cypress['start']([
                        '--run-project=' + this['pristinePath'],
                        _0x3693c1['tJNwl']
                    ]);
                })['then'](() => {
                    return fs['statAsync'](_0x1a4b55);
                })['then'](() => {
                    return fs['statAsync'](path['join'](_0x1a4b55, _0x4fea09['RmLhE']));
                })['then'](() => {
                    return fs['statAsync'](path['join'](_0x1a4b55, _0x3693c1['GzNdt']));
                });
            });
        }), _0x53fd84['wRSrM'](it, _0x53fd84['pQaUp'], function (_0x338f07) {
            const _0x4c2706 = {
                'Hyfty': _0x4fff65['vGpwu'],
                'YGiuM': function (_0x425d2b) {
                    return _0x4fff65['IjwFD'](_0x425d2b);
                }
            };
            config['get'](this['idsPath'])['then'](_0x4572f1 => {
                return this['cfg'] = _0x4572f1, fs['statAsync'](this['cfg']['fixturesFolder']);
            })['then'](() => {
                return settings['read'](this['idsPath']);
            })['then'](_0x1e4c6f => {
                return _0x1e4c6f['fixturesFolder'] = ![], settings['write'](this['idsPath'], _0x1e4c6f);
            })['then'](() => {
                return cypress['start'](['--run-project=' + this['idsPath']]);
            })['then'](() => {
                const _0x40074c = {
                    'AhaZK': _0x4c2706['Hyfty'],
                    'CvmeM': function (_0x4dd74a) {
                        return _0x4c2706['YGiuM'](_0x4dd74a);
                    }
                };
                return fs['statAsync'](this['cfg']['fixturesFolder'])['then'](() => {
                    throw new Error(_0x40074c['AhaZK']);
                })['catch'](() => {
                    return _0x40074c['CvmeM'](_0x338f07);
                });
            });
        }), _0x53fd84['wRSrM'](it, _0x53fd84['YfAOB'], function () {
            const _0x5dd303 = {
                'MMFWC': function (_0x466f73, _0x3f27fb) {
                    return _0x4fff65['jgyVU'](_0x466f73, _0x3f27fb);
                },
                'eETkb': _0x4fff65['ofhbs']
            };
            return cypress['start']([
                '--run-project=' + this['todosPath'],
                _0x4fff65['UDLqO']
            ])['then'](() => {
                _0x5dd303['MMFWC'](expect, browsers['open'])['to']['be']['calledWithMatch'](ELECTRON_BROWSER, {
                    'proxyServer': _0x5dd303['eETkb'],
                    'show': !![]
                }), this['expectExitWith'](0x0);
            });
        }), _0x53fd84['qPswK'](it, _0x53fd84['dYVhq'], function () {
            return sinon['spy'](Reporter, _0x53fd84['nmBjW']), cypress['start'](['--run-project=' + this['todosPath']])['then'](() => {
                _0x4fff65['AIjJo'](expect, Reporter['create'])['to']['be']['calledWith'](_0x4fff65['xfmNk']), this['expectExitWith'](0x0);
            });
        }), _0x53fd84['qPswK'](it, _0x53fd84['jSkYV'], function () {
            return sinon['spy'](Reporter, _0x4fff65['EbhlH']), cypress['start']([
                '--run-project=' + this['todosPath'],
                _0x4fff65['qwOoe']
            ])['then'](() => {
                _0x4fff65['MRChy'](expect, Reporter['create'])['to']['be']['calledWith'](_0x4fff65['GEKGx']), this['expectExitWith'](0x0);
            });
        }), _0x53fd84['oNLRz'](it, _0x53fd84['biNvc'], function () {
            const _0x11c0c9 = {
                'ZOlaq': _0x4fff65['inMSx'],
                'qIvvV': function (_0x36ac33, _0x34c591) {
                    return _0x4fff65['MRChy'](_0x36ac33, _0x34c591);
                }
            };
            return sinon['spy'](Reporter, _0x4fff65['EbhlH']), config['get'](this['idsPath'])['then'](_0x33c8d5 => {
                return this['cfg'] = _0x33c8d5, settings['read'](this['idsPath']);
            })['then'](_0x5bec67 => {
                return _0x5bec67['reporter'] = _0x11c0c9['ZOlaq'], settings['write'](this['idsPath'], _0x5bec67);
            })['then'](() => {
                return cypress['start'](['--run-project=' + this['idsPath']]);
            })['then'](() => {
                _0x11c0c9['qIvvV'](expect, Reporter['create'])['to']['be']['calledWith'](_0x11c0c9['ZOlaq']), this['expectExitWith'](0x0);
            });
        }), _0x53fd84['oNLRz'](it, _0x53fd84['Pzbnt'], function () {
            return user['set']({})['then'](() => {
                return cypress['start'](['--run-project=' + this['todosPath']]);
            })['then'](() => {
                this['expectExitWith'](0x0);
            });
        }), _0x53fd84['MUHWN'](it, _0x53fd84['QZHDk'], function () {
            return cypress['start']([
                '--run-project=' + this['todosPath'],
                _0x53fd84['swtzI']
            ])['then'](() => {
                _0x4fff65['WpkdU'](expect, errors['warning'])['to']['be']['calledWith'](_0x4fff65['mkDjw'], _0x4fff65['TdqMV']), _0x4fff65['GFeAh'](expect, console['log'])['to']['be']['calledWithMatch'](_0x4fff65['awpyQ']), _0x4fff65['GFeAh'](expect, console['log'])['to']['be']['calledWithMatch'](_0x4fff65['kwtZE']), _0x4fff65['GFeAh'](expect, console['log'])['to']['be']['calledWithMatch'](_0x4fff65['oJLpr']);
            });
        }), _0x53fd84['JSyYO'](it, _0x53fd84['yaVie'], function () {
            const _0x2826ec = new Error(_0x4fff65['CENRj']);
            return sinon['stub'](browsers, _0x4fff65['ZXilF'])['rejects'](_0x2826ec), cypress['start'](['--run-project=' + this['todosPath']])['then'](() => {
                _0x4fff65['GFeAh'](expect, errors['warning'])['to']['be']['calledWith'](_0x4fff65['Djvso'], _0x2826ec['stack']), _0x4fff65['GTmsG'](expect, console['log'])['to']['be']['calledWithMatch'](_0x4fff65['kvAJH']), _0x4fff65['NUJzO'](expect, console['log'])['to']['be']['calledWithMatch'](_0x2826ec['message']);
            });
        }), _0x53fd84['JSyYO'](it, _0x53fd84['fAHpH'], function () {
            const _0x34e0b6 = {
                'SqoTn': function (_0x4eba8e, _0x279c24) {
                    return _0x53fd84['gBMMy'](_0x4eba8e, _0x279c24);
                },
                'tUuRC': _0x53fd84['GeZwc'],
                'VhCOL': _0x53fd84['yoTkl'],
                'NaAqd': _0x53fd84['tYiwe']
            };
            return cypress['start']([
                '--run-project=' + this['pristinePath'],
                _0x53fd84['swtzI']
            ])['then'](() => {
                _0x34e0b6['SqoTn'](expect, errors['warning'])['not']['to']['be']['calledWith'](_0x34e0b6['tUuRC'], _0x34e0b6['VhCOL']), _0x34e0b6['SqoTn'](expect, console['log'])['not']['to']['be']['calledWithMatch'](_0x34e0b6['NaAqd']);
            });
        }), _0x53fd84['SbQIc'](it, _0x53fd84['Clprs'], function () {
            const _0x5a45af = {
                'NHlWR': function (_0xe112d3, _0x38e079) {
                    return _0x53fd84['gBMMy'](_0xe112d3, _0x38e079);
                },
                'MRcjR': _0x53fd84['GeZwc'],
                'RIrtP': _0x53fd84['yoTkl'],
                'wEIVU': function (_0xe31d53, _0x45fd65) {
                    return _0x53fd84['gBMMy'](_0xe31d53, _0x45fd65);
                },
                'xiZMw': _0x53fd84['tYiwe']
            };
            return cypress['start']([
                '--run-project=' + this['todosPath'],
                _0x53fd84['swtzI'],
                _0x53fd84['hLUfv']
            ])['then'](() => {
                _0x5a45af['NHlWR'](expect, errors['warning'])['not']['to']['be']['calledWith'](_0x5a45af['MRcjR'], _0x5a45af['RIrtP']), _0x5a45af['wEIVU'](expect, console['log'])['not']['to']['be']['calledWithMatch'](_0x5a45af['xiZMw']);
            });
        }), _0x53fd84['SbQIc'](it, _0x53fd84['juqAW'], function () {
            const _0x2c0961 = {
                'kikdi': _0x4fff65['tXhLa'],
                'ojIxd': _0x4fff65['snAnG']
            };
            return settings['write'](this['idsPath'], { 'supportFile': _0x4fff65['JZJpt'] })['then'](() => {
                return cypress['start'](['--run-project=' + this['idsPath']]);
            })['then'](() => {
                this['expectExitWithErr'](_0x2c0961['kikdi'], _0x2c0961['ojIxd']);
            });
        }), _0x53fd84['nxUjk'](it, _0x53fd84['brNBV'], function () {
            const _0x4fb7b8 = {
                'BepZo': _0x53fd84['kPemN'],
                'rBslq': _0x53fd84['rFyIK'],
                'tOHgE': _0x53fd84['FoPSR'],
                'ItGkZ': _0x53fd84['sshVm'],
                'ckUpz': function (_0x4a1060, _0x2c628d, _0x29a45f) {
                    return _0x53fd84['nuyzN'](_0x4a1060, _0x2c628d, _0x29a45f);
                },
                'QEpRO': _0x53fd84['HtdBp'],
                'uhcdR': _0x53fd84['NrtJb'],
                'BbLVZ': function (_0x3f968b, _0x3fc1a2, _0x34f617) {
                    return _0x53fd84['HPogf'](_0x3f968b, _0x3fc1a2, _0x34f617);
                },
                'WRpSO': _0x53fd84['mKVhr']
            };
            return browsers['open']['restore'](), cypress['start']([
                '--run-project=' + this['idsPath'],
                _0x53fd84['hufqw']
            ])['then'](() => {
                this['expectExitWithErr'](_0x4fb7b8['ItGkZ']);
                const _0x25e4ec = errors['log']['args'], _0xe67369 = _['find'](_0x25e4ec, _0xf8eeae => {
                        const _0x4001ad = { 'xOMbX': _0x4fb7b8['BepZo'] };
                        return _['find'](_0xf8eeae, _0x41efa3 => {
                            return _0x41efa3['message'] && _0x41efa3['message']['includes'](_0x4001ad['xOMbX']);
                        });
                    });
                _0x4fb7b8['ckUpz'](expect, _0xe67369, _0x4fb7b8['QEpRO'])['to']['be']['ok'];
                const _0x5d0a8c = _['find'](_0x25e4ec, _0x38848b => {
                    const _0x22bcad = { 'QIbgk': _0x4fb7b8['rBslq'] };
                    return _['find'](_0x38848b, _0x55ebe9 => {
                        return _0x55ebe9['message'] && _0x55ebe9['message']['includes'](_0x22bcad['QIbgk']);
                    });
                });
                _0x4fb7b8['ckUpz'](expect, _0x5d0a8c, _0x4fb7b8['uhcdR'])['to']['be']['ok'];
                const _0x59d479 = _['find'](_0x25e4ec, _0x4d6ad6 => {
                    const _0x4b5db6 = { 'IJeJS': _0x4fb7b8['tOHgE'] };
                    return _['find'](_0x4d6ad6, _0x399e62 => {
                        return _0x399e62['message'] && _0x399e62['message']['includes'](_0x4b5db6['IJeJS']);
                    });
                });
                _0x4fb7b8['BbLVZ'](expect, _0x59d479, _0x4fb7b8['WRpSO'])['to']['be']['ok'];
            });
        }), _0x53fd84['nxUjk'](describe, _0x53fd84['dQezI'], function () {
            const _0x5af2fe = {
                'LqJva': _0x4fff65['OXDVj'],
                'FsPbF': _0x4fff65['SsBtB']
            };
            _0x4fff65['sUAPz'](it, _0x4fff65['nncZE'], function () {
                const _0x321551 = {
                    'CvOCN': _0x4fff65['OXDVj'],
                    'nFnTn': _0x4fff65['agfHW'],
                    'nHviP': _0x4fff65['sOCrO']
                };
                return cypress['start']([
                    '--run-project=' + this['todosPath'],
                    _0x4fff65['SUYdv']
                ])['then'](() => {
                    this['expectExitWithErr'](_0x321551['CvOCN'], _0x321551['nFnTn']), this['expectExitWithErr'](_0x321551['CvOCN'], _0x321551['nHviP']), this['expectExitWithErr'](_0x321551['CvOCN'], this['todosPath']);
                });
            }), _0x4fff65['DTopK'](it, _0x4fff65['qVjwY'], function () {
                const _0x50171a = {
                    'vQtXS': _0x5af2fe['LqJva'],
                    'eIqRz': _0x5af2fe['FsPbF']
                };
                return cypress['start']([
                    '--run-project=' + this['todosPath'],
                    '--spec=' + this['todosPath'] + '/tests/path/to/spec'
                ])['then'](() => {
                    this['expectExitWithErr'](_0x50171a['vQtXS'], _0x50171a['eIqRz']), this['expectExitWithErr'](_0x50171a['vQtXS'], this['todosPath']);
                });
            }), _0x4fff65['DTopK'](it, _0x4fff65['Slnzd'], function () {
                const _0x3fb62c = {
                    'GEvHY': _0x4fff65['OXDVj'],
                    'IwifS': _0x4fff65['KAlhT'],
                    'VIfbz': _0x4fff65['wKJkn']
                };
                return cypress['start']([
                    '--run-project=' + this['todosPath'],
                    _0x4fff65['KgMhe']
                ])['then'](() => {
                    this['expectExitWithErr'](_0x3fb62c['GEvHY'], _0x3fb62c['IwifS']), this['expectExitWithErr'](_0x3fb62c['GEvHY'], _0x3fb62c['VIfbz']);
                });
            });
        }), _0x53fd84['dcXaD'](it, _0x53fd84['AEiEg'], function () {
            return fs['writeFileAsync'](this['todosPath'] + '/cypress.json', _0x53fd84['PrReO'])['then'](() => {
                return cypress['start'](['--run-project=' + this['todosPath']]);
            })['then'](() => {
                this['expectExitWithErr'](_0x4fff65['gUYTO'], this['todosPath']);
            });
        }), _0x53fd84['dcXaD'](it, _0x53fd84['VefBI'], function () {
            return fs['writeFileAsync'](this['todosPath'] + '/cypress.env.json', _0x53fd84['PrReO'])['then'](() => {
                return cypress['start'](['--run-project=' + this['todosPath']]);
            })['then'](() => {
                this['expectExitWithErr'](_0x4fff65['gUYTO'], this['todosPath']);
            });
        }), _0x53fd84['dcXaD'](it, _0x53fd84['ADgEO'], function () {
            return settings['write'](this['todosPath'], { 'baseUrl': _0x4fff65['iYjPN'] })['then'](() => {
                return cypress['start'](['--run-project=' + this['todosPath']]);
            })['then'](() => {
                this['expectExitWithErr'](_0x4fff65['OKLFk'], _0x4fff65['CUkgr']);
            });
        }), _0x53fd84['ZpiIT'](it, _0x53fd84['ydQkB'], function () {
            const _0x2dbfda = {
                'HUhYr': _0x4fff65['VdfQJ'],
                'cIQPk': _0x4fff65['iYjPN'],
                'CStqR': _0x4fff65['FwoRG']
            };
            return cypress['start']([
                '--run-project=' + this['todosPath'],
                _0x4fff65['VvsEl']
            ])['then'](() => {
                this['expectExitWithErr'](_0x2dbfda['HUhYr'], _0x2dbfda['cIQPk']), this['expectExitWithErr'](_0x2dbfda['HUhYr'], _0x2dbfda['CStqR']);
            });
        }), _0x53fd84['ZpiIT'](it, _0x53fd84['NaYts'], function () {
            const _0x2d0dc9 = {
                'SvunK': _0x53fd84['OQHCa'],
                'chElI': _0x53fd84['gqCeo'],
                'TGPdy': _0x53fd84['OTLTh']
            };
            return process['env']['CYPRESS_BASE_URL'] = _0x53fd84['gqCeo'], cypress['start'](['--run-project=' + this['todosPath']])['then'](() => {
                this['expectExitWithErr'](_0x2d0dc9['SvunK'], _0x2d0dc9['chElI']), this['expectExitWithErr'](_0x2d0dc9['SvunK'], _0x2d0dc9['TGPdy']);
            });
        });
        const _0x3834cb = [{
                'old': _0x53fd84['EivrM'],
                'new': _0x53fd84['oVZxr']
            }];
        _0x3834cb['forEach'](function (_0x5a2387) {
            const _0x534976 = { 'QVUed': _0x53fd84['Avbik'] };
            _0x53fd84['LXJYI'](it, 'logs\x20error\x20and\x20exits\x20when\x20using\x20an\x20old\x20configuration\x20option:\x20' + _0x5a2387['old'], function () {
                return cypress['start']([
                    '--run-project=' + this['todosPath'],
                    '--config=' + _0x5a2387['old'] + '=\x27\x27'
                ])['then'](() => {
                    this['expectExitWithErr'](_0x534976['QVUed'], _0x5a2387['old']), this['expectExitWithErr'](_0x534976['QVUed'], _0x5a2387['new']);
                });
            });
        }), _0x53fd84['huogE'](it, _0x53fd84['tooSl'], function () {
            const _0x2343ad = { 'CNbXw': _0x4fff65['Lttzz'] };
            if (_0x4fff65['JlOFl'](process['geteuid'](), 0x0))
                return;
            const _0x4a0341 = path['resolve'](_0x4fff65['aVrQI']), _0x481342 = path['join'](_0x4a0341, _0x4fff65['CUkgr']);
            return fs['outputFileAsync'](_0x481342, '{}')['then'](() => {
                return fs['chmodAsync'](_0x4a0341, _0x4fff65['iWWhV']);
            })['then'](() => {
                return cypress['start'](['--run-project=' + _0x4a0341]);
            })['then'](() => {
                return fs['chmodAsync'](_0x4a0341, _0x2343ad['CNbXw']);
            })['then'](() => {
                return fs['removeAsync'](_0x4a0341);
            })['then'](() => {
                this['expectExitWithErr'](_0x4fff65['gUYTO'], path['join'](_0x4a0341, _0x4fff65['CUkgr']));
            });
        }), _0x53fd84['aIEXz'](it, _0x53fd84['MItGy'], function () {
            return cypress['start']([
                '--run-project=' + this['todosPath'],
                _0x4fff65['KkpCC'],
                _0x4fff65['KcSnA']
            ])['then'](() => {
                this['expectExitWithErr'](_0x4fff65['eGhYr'], _0x4fff65['KcSnA']);
            });
        }), _0x53fd84['UmsOa'](describe, _0x53fd84['nAqDT'], () => {
            const _0x1d0d42 = { 'LqhKR': _0x4fff65['wahEt'] };
            _0x4fff65['NUJzO'](beforeEach, function () {
                return appData['remove']()['then'](() => {
                    return savedState['formStatePath'](this['todosPath']);
                })['then'](_0x62e439 => {
                    this['statePath'] = appData['projectsPath'](_0x62e439);
                });
            }), _0x4fff65['DTopK'](it, _0x4fff65['JHciJ'], function () {
                return cypress['start']([
                    '--run-project=' + this['todosPath'],
                    '--spec=' + this['todosPath'] + '/tests/test2.coffee'
                ])['then'](() => {
                    return this['expectExitWith'](0x0), openProject['getProject']()['saveState']();
                })['then'](() => {
                    return fs['statAsync'](this['statePath'])['then'](() => {
                        throw new Error('saved\x20state\x20should\x20not\x20exist\x20but\x20it\x20did\x20here:\x20' + this['statePath']);
                    })['catch']({ 'code': _0x1d0d42['LqhKR'] }, () => {
                    });
                });
            });
        }), _0x53fd84['UmsOa'](describe, _0x53fd84['PbvqU'], () => {
            _0x4fff65['mhKwj'](it, _0x4fff65['recqB'], function () {
                const _0x466750 = {
                    'VnyxG': function (_0x5720a1, _0x203926) {
                        return _0x4fff65['lmlUX'](_0x5720a1, _0x203926);
                    }
                };
                return cypress['start'](['--run-project=' + this['todosPath']])['then'](() => {
                    _0x466750['VnyxG'](expect, openProject['getProject']()['cfg']['morgan'])['to']['be']['false'], this['expectExitWith'](0x0);
                });
            });
        }), _0x53fd84['UmsOa'](describe, _0x53fd84['XMgLK'], () => {
            const _0x590792 = {
                'eGyiL': function (_0x11ca9d, _0x59ef0d) {
                    return _0x4fff65['lmlUX'](_0x11ca9d, _0x59ef0d);
                },
                'TzpSp': function (_0x15a317, _0x25e42d) {
                    return _0x4fff65['lmlUX'](_0x15a317, _0x25e42d);
                },
                'oyUFz': _0x4fff65['sQQjh'],
                'NhVkt': function (_0x586c15, _0x1e1edd) {
                    return _0x4fff65['LwVmc'](_0x586c15, _0x1e1edd);
                },
                'pdVEf': _0x4fff65['tkUbT'],
                'PkBpl': _0x4fff65['ZoTqT'],
                'hUFem': function (_0x549d46, _0x13d74f) {
                    return _0x4fff65['hthim'](_0x549d46, _0x13d74f);
                },
                'lIqrA': function (_0x172103, _0x39fb6a) {
                    return _0x4fff65['hthim'](_0x172103, _0x39fb6a);
                }
            };
            _0x4fff65['mhKwj'](it, _0x4fff65['JQAQj'], function () {
                const _0x190720 = {
                    'PrkdS': function (_0x4cff85, _0x5a4626) {
                        return _0x4fff65['lmlUX'](_0x4cff85, _0x5a4626);
                    },
                    'iOVng': function (_0x34314a, _0x83216b) {
                        return _0x4fff65['lmlUX'](_0x34314a, _0x83216b);
                    },
                    'mwTnH': _0x4fff65['ZoTqT']
                };
                return cypress['start']([
                    '--run-project=' + this['todosPath'],
                    _0x4fff65['eqdyD']
                ])['then'](() => {
                    const {cfg: _0x101223} = openProject['getProject']();
                    _0x190720['PrkdS'](expect, _0x101223['videoCompression'])['to']['be']['false'], _0x190720['iOVng'](expect, _0x101223['requestTimeout'])['to']['eq'](0x4d2), _0x190720['iOVng'](expect, _0x101223['resolved']['videoCompression'])['to']['deep']['eq']({
                        'value': ![],
                        'from': _0x190720['mwTnH']
                    }), _0x190720['iOVng'](expect, _0x101223['resolved']['requestTimeout'])['to']['deep']['eq']({
                        'value': 0x4d2,
                        'from': _0x190720['mwTnH']
                    }), this['expectExitWith'](0x0);
                });
            }), _0x4fff65['mhKwj'](it, _0x4fff65['EkTxj'], function () {
                return plugins['init']['restore'](), cypress['start']([
                    '--run-project=' + this['pluginConfig'],
                    _0x4fff65['eqdyD'],
                    _0x4fff65['TnAtt']
                ])['then'](() => {
                    const {cfg: _0x4d300e} = openProject['getProject']();
                    _0x590792['eGyiL'](expect, _0x4d300e['videoCompression'])['to']['eq'](0x14), _0x590792['TzpSp'](expect, _0x4d300e['defaultCommandTimeout'])['to']['eq'](0x1f4), _0x590792['TzpSp'](expect, _0x4d300e['env'])['to']['deep']['eq']({
                        'foo': _0x590792['oyUFz'],
                        'bar': _0x590792['oyUFz']
                    }), _0x590792['NhVkt'](expect, _0x4d300e['resolved']['videoCompression'])['to']['deep']['eq']({
                        'value': 0x14,
                        'from': _0x590792['pdVEf']
                    }), _0x590792['NhVkt'](expect, _0x4d300e['resolved']['requestTimeout'])['to']['deep']['eq']({
                        'value': 0x4d2,
                        'from': _0x590792['PkBpl']
                    }), _0x590792['hUFem'](expect, _0x4d300e['resolved']['env']['foo'])['to']['deep']['eq']({
                        'value': _0x590792['oyUFz'],
                        'from': _0x590792['pdVEf']
                    }), _0x590792['lIqrA'](expect, _0x4d300e['resolved']['env']['bar'])['to']['deep']['eq']({
                        'value': _0x590792['oyUFz'],
                        'from': _0x590792['PkBpl']
                    }), this['expectExitWith'](0x0);
                });
            });
        }), _0x53fd84['KyzqJ'](describe, _0x53fd84['GboQY'], () => {
            const _0x4c38ad = {
                'FPULH': _0x53fd84['DZYfF'],
                'ZUNlS': _0x53fd84['dIvuT'],
                'MvZhq': function (_0x2ec0ca, _0x473fc9, _0x49b7e5) {
                    return _0x53fd84['LXJYI'](_0x2ec0ca, _0x473fc9, _0x49b7e5);
                },
                'VBFiJ': _0x53fd84['aNFnd'],
                'jUjpw': function (_0x1230ca, _0x3fa78c, _0x68ab70) {
                    return _0x53fd84['LXJYI'](_0x1230ca, _0x3fa78c, _0x68ab70);
                },
                'VGOds': _0x53fd84['IeLHY'],
                'tDQnw': _0x53fd84['xgejd'],
                'ptrcy': _0x53fd84['SWaLc'],
                'lIKgK': _0x53fd84['FjggU'],
                'CocHz': function (_0x24dfc7, _0x3aa1c9) {
                    return _0x53fd84['EDDoh'](_0x24dfc7, _0x3aa1c9);
                },
                'ymUlH': _0x53fd84['dVPpI'],
                'YCrCS': _0x53fd84['WtElz'],
                'pllbN': _0x53fd84['QuuCk'],
                'hdmFM': _0x53fd84['ojSid'],
                'kALYd': _0x53fd84['GqOFr'],
                'GkySP': _0x53fd84['kbGKd'],
                'AUzNR': _0x53fd84['xWdnJ'],
                'qXCTV': _0x53fd84['rBMTL'],
                'OdiJp': function (_0x563b0f, _0x4e0573, _0x4b9adc) {
                    return _0x53fd84['LXJYI'](_0x563b0f, _0x4e0573, _0x4b9adc);
                },
                'QLpqW': function (_0x1c7173, _0x31f220, _0x454e40) {
                    return _0x53fd84['qqrbV'](_0x1c7173, _0x31f220, _0x454e40);
                }
            };
            _0x53fd84['EDDoh'](beforeEach, () => {
                const _0x353086 = { 'QFzjE': _0x4fff65['yFweL'] };
                plugins['init']['restore'](), browsers['open']['restore']();
                const _0x45ce56 = new EE();
                _0x45ce56['kill'] = () => {
                    return _0x45ce56['emit'](_0x353086['QFzjE']);
                }, _0x45ce56['destroy'] = () => {
                    return _0x45ce56['emit'](_0x4c38ad['FPULH']);
                }, _0x45ce56['isDestroyed'] = () => {
                    return ![];
                }, _0x45ce56['loadURL'] = () => {
                }, _0x45ce56['focusOnWebView'] = () => {
                }, _0x45ce56['webContents'] = {
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
                }, _0x45ce56['maximize'] = sinon['stub'], _0x45ce56['setSize'] = sinon['stub'], sinon['stub'](launch, _0x4fff65['PojBu'])['resolves'](_0x45ce56), sinon['stub'](Windows, _0x4fff65['EbhlH'])['returns'](_0x45ce56);
            }), _0x53fd84['qqrbV'](context, _0x53fd84['cymyC'], () => {
                const _0x22f357 = {
                    'ojLXl': function (_0x8b74a1, _0x49e233) {
                        return _0x4c38ad['CocHz'](_0x8b74a1, _0x49e233);
                    },
                    'APkSa': _0x4c38ad['qXCTV'],
                    'EnXJT': _0x4c38ad['ptrcy']
                };
                _0x4c38ad['OdiJp'](it, _0x4c38ad['ZUNlS'], function () {
                    const _0x7f45b3 = {
                            'mEloO': _0x4c38ad['ZUNlS'],
                            'korez': function (_0x3f6e72, _0x2dd8ba, _0x1ed405) {
                                return _0x4c38ad['MvZhq'](_0x3f6e72, _0x2dd8ba, _0x1ed405);
                            },
                            'ZxIAZ': _0x4c38ad['VBFiJ'],
                            'RwfWH': function (_0x366375, _0x529cb5, _0x5d4c28) {
                                return _0x4c38ad['jUjpw'](_0x366375, _0x529cb5, _0x5d4c28);
                            },
                            'kwJZW': _0x4c38ad['VGOds'],
                            'ndcPL': _0x4c38ad['tDQnw'],
                            'YERxA': _0x4c38ad['ptrcy'],
                            'ZTozA': _0x4c38ad['lIKgK'],
                            'jZciX': function (_0xd4993c, _0x1d4c6d) {
                                return _0x4c38ad['CocHz'](_0xd4993c, _0x1d4c6d);
                            }
                        }, _0xd23604 = {
                            'ensureMinimumProtocolVersion': sinon['stub']()['resolves'](),
                            'close': sinon['stub']()['resolves'](),
                            'on': sinon['stub'](),
                            'send': sinon['stub']()
                        };
                    return sinon['stub'](chromeBrowser, _0x4c38ad['ymUlH'])['resolves'](), sinon['stub'](chromeBrowser, _0x4c38ad['YCrCS'])['resolves'](_0xd23604), sinon['stub'](chromeBrowser, _0x4c38ad['pllbN'])['resolves'](), sinon['stub'](chromeBrowser, _0x4c38ad['hdmFM'])['resolves'](), sinon['stub'](chromeBrowser, _0x4c38ad['kALYd'])['returns'](), cypress['start']([
                        '--run-project=' + this['pluginBrowser'],
                        _0x4c38ad['GkySP']
                    ])['then'](() => {
                        const {args: _0x5249bd} = launch['launch']['firstCall'], _0x2d5c3d = _['find'](TYPICAL_BROWSERS, { 'name': _0x7f45b3['mEloO'] }), _0x1d5714 = R['merge'](_0x2d5c3d, {
                                'isHeadless': !![],
                                'isHeaded': ![]
                            });
                        _0x7f45b3['korez'](expect, _0x5249bd[0x0], _0x7f45b3['ZxIAZ'])['to']['deep']['eq'](_0x1d5714);
                        const _0x4a83bb = _0x5249bd[0x2];
                        _0x7f45b3['RwfWH'](expect, _0x4a83bb['slice'](0x0, 0x4), _0x7f45b3['kwJZW'])['to']['deep']['eq']([
                            _0x7f45b3['mEloO'],
                            _0x7f45b3['ndcPL'],
                            _0x7f45b3['YERxA'],
                            _0x7f45b3['ZTozA']
                        ]), this['expectExitWith'](0x0), _0x7f45b3['jZciX'](expect, chromeBrowser['_navigateUsingCRI'])['to']['have']['been']['calledOnce'], _0x7f45b3['jZciX'](expect, chromeBrowser['_setAutomation'])['to']['have']['been']['calledOnce'], _0x7f45b3['jZciX'](expect, chromeBrowser['_connectToChromeRemoteInterface'])['to']['have']['been']['calledOnce'];
                    });
                }), _0x4c38ad['QLpqW'](it, _0x4c38ad['qXCTV'], function () {
                    const _0x42a886 = sinon['stub']();
                    return videoCapture['start']['returns']({ 'writeVideoFrame': _0x42a886 }), cypress['start']([
                        '--run-project=' + this['pluginBrowser'],
                        _0x4c38ad['AUzNR']
                    ])['then'](() => {
                        _0x22f357['ojLXl'](expect, Windows['create'])['to']['be']['calledWithMatch'](this['pluginBrowser'], {
                            'browser': _0x22f357['APkSa'],
                            'foo': _0x22f357['EnXJT'],
                            'onNewWindow': sinon['match']['func'],
                            'onScreencastFrame': sinon['match']['func']
                        }), this['expectExitWith'](0x0);
                    });
                });
            });
        }), _0x53fd84['XwFAL'](describe, _0x53fd84['vBpxt'], () => {
            const _0x457d71 = {
                'lZkrL': function (_0x8011b8, _0x20c056) {
                    return _0x4fff65['hthim'](_0x8011b8, _0x20c056);
                },
                'tzWvc': function (_0x3f746c, _0x168ad4) {
                    return _0x4fff65['ZiVZN'](_0x3f746c, _0x168ad4);
                },
                'pTQcc': function (_0x4621de, _0x16f301) {
                    return _0x4fff65['XFMyZ'](_0x4621de, _0x16f301);
                }
            };
            _0x4fff65['mIZNL'](beforeEach, () => {
                return runMode['listenForProjectEnd']['resolves']({ 'stats': { 'failures': 0x0 } });
            }), _0x4fff65['ITnKJ'](it, _0x4fff65['hvymq'], function () {
                const _0x2444ad = sinon['spy'](http['Server']['prototype'], _0x4fff65['JyYzy']), _0x23a195 = sinon['spy'](ServerE2E['prototype'], _0x4fff65['nOLcD']);
                return cypress['start']([
                    '--run-project=' + this['todosPath'],
                    _0x4fff65['bmvOG']
                ])['then'](() => {
                    _0x457d71['lZkrL'](expect, openProject['getProject']()['cfg']['port'])['to']['eq'](0x15a8), _0x457d71['tzWvc'](expect, _0x2444ad)['to']['be']['calledWith'](0x15a8), _0x457d71['pTQcc'](expect, _0x23a195)['to']['be']['calledWithMatch']({ 'port': 0x15a8 }), this['expectExitWith'](0x0);
                });
            }), _0x4fff65['ITnKJ'](it, _0x4fff65['MYgzd'], async function () {
                const _0x29b68b = {
                    'ceVbJ': _0x4fff65['bmvOG'],
                    'Ciwdn': _0x4fff65['DkQty'],
                    'qeUKR': _0x4fff65['FbMoP']
                };
                sinon['stub'](ProjectBase['prototype'], _0x4fff65['cidky'])['returns']({
                    'use': () => {
                    }
                });
                let _0x23412f = http['createServer']();
                return _0x23412f = Promise['promisifyAll'](_0x23412f), _0x23412f['listenAsync'](0x15a8, _0x4fff65['SKFya'])['then'](() => {
                    return cypress['start']([
                        '--run-project=' + this['todosPath'],
                        _0x29b68b['ceVbJ']
                    ]);
                })['then'](() => {
                    this['expectExitWithErr'](_0x29b68b['Ciwdn'], _0x29b68b['qeUKR']);
                });
            });
        }), _0x53fd84['XwFAL'](describe, _0x53fd84['cBnyk'], () => {
            const _0x28f5a3 = {
                'cdenL': _0x53fd84['pqtdH'],
                'jmPsD': function (_0x589b7e, _0x18eec3) {
                    return _0x53fd84['gJPZd'](_0x589b7e, _0x18eec3);
                },
                'ZlNYs': _0x53fd84['eSmDf'],
                'rosFE': _0x53fd84['JiwLL'],
                'iPMEF': _0x53fd84['xEvVP']
            };
            _0x53fd84['zMFoF'](beforeEach, () => {
                return process['env'] = _['omit'](process['env'], _0x28f5a3['cdenL']), runMode['listenForProjectEnd']['resolves']({ 'stats': { 'failures': 0x0 } });
            }), _0x53fd84['oKeXc'](it, _0x53fd84['gUfIk'], function () {
                const _0x23028d = {
                    'vPnUt': function (_0x4c67a4, _0x14a392) {
                        return _0x4fff65['ZANBV'](_0x4c67a4, _0x14a392);
                    },
                    'PTDeZ': _0x4fff65['jdDGq'],
                    'qCAPd': _0x4fff65['sQQjh'],
                    'uFtxI': _0x4fff65['ofhbs'],
                    'LDRsk': _0x4fff65['uIXeG']
                };
                return cypress['start']([
                    '--run-project=' + this['todosPath'],
                    _0x4fff65['GXotn'],
                    _0x4fff65['xMXeV'],
                    _0x4fff65['teLpr']
                ])['then'](() => {
                    _0x23028d['vPnUt'](expect, openProject['getProject']()['cfg']['env'])['to']['deep']['eq']({
                        'version': _0x23028d['PTDeZ'],
                        'foo': _0x23028d['qCAPd'],
                        'host': _0x23028d['uFtxI'],
                        'baz': _0x23028d['LDRsk']
                    }), this['expectExitWith'](0x0);
                });
            }), _0x53fd84['oKeXc'](it, _0x53fd84['hGjUh'], function () {
                return cypress['start']([
                    '--run-project=' + this['todosPath'],
                    _0x28f5a3['rosFE'],
                    _0x28f5a3['iPMEF']
                ])['then'](() => {
                    _0x28f5a3['jmPsD'](expect, openProject['getProject']()['cfg']['env'])['to']['deep']['eq']({
                        'FOO': '',
                        'BAR': '',
                        'BAZ': _0x28f5a3['ZlNYs']
                    }), this['expectExitWith'](0x0);
                });
            });
        }), _0x53fd84['ExRub'](describe, _0x53fd84['fAEre'], () => {
            const _0x1ddda9 = {
                'IOIJf': _0x4fff65['sZxAQ'],
                'swjWg': _0x4fff65['tWONR'],
                'PEHEE': _0x4fff65['zywVq'],
                'TwgIv': _0x4fff65['vrBMz'],
                'ANuXd': _0x4fff65['CUkgr'],
                'FFojN': _0x4fff65['wahEt'],
                'CApIJ': _0x4fff65['jRMTu'],
                'TfBFE': _0x4fff65['pUSCT']
            };
            _0x4fff65['SHwhk'](it, _0x4fff65['hqThS'], function () {
                const _0x3e56df = {
                    'oUOnu': _0x1ddda9['IOIJf'],
                    'KhieE': _0x1ddda9['swjWg'],
                    'lbddH': _0x1ddda9['PEHEE'],
                    'gjddi': _0x1ddda9['TwgIv']
                };
                return fs['statAsync'](path['join'](this['pristinePath'], _0x1ddda9['ANuXd']))['then'](() => {
                    throw new Error(_0x3e56df['oUOnu']);
                })['catch']({ 'code': _0x1ddda9['FFojN'] }, () => {
                    return cypress['start']([
                        '--run-project=' + this['pristinePath'],
                        _0x3e56df['KhieE'],
                        _0x3e56df['lbddH'],
                        _0x3e56df['gjddi']
                    ])['then'](() => {
                        this['expectExitWith'](0x0);
                    });
                });
            }), _0x4fff65['SHwhk'](it, _0x4fff65['CXUAh'], function () {
                return this['filename'] = _0x1ddda9['TfBFE'], fs['statAsync'](path['join'](this['todosPath'], this['filename']))['then'](() => {
                    throw new Error(this['filename'] + '\x20should\x20not\x20exist');
                })['catch']({ 'code': _0x1ddda9['FFojN'] }, () => {
                    const _0x1c815c = { 'wKhBA': _0x1ddda9['CApIJ'] };
                    return cypress['start']([
                        '--run-project=' + this['todosPath'],
                        _0x1ddda9['swjWg'],
                        _0x1ddda9['PEHEE'],
                        this['filename']
                    ])['then'](() => {
                        this['expectExitWithErr'](_0x1c815c['wKhBA'], this['filename'], this['todosPath']);
                    });
                });
            });
        });
    }), _0x53fd84['DAACQ'](context, _0x53fd84['vflbY'], () => {
        const _0x53ccf3 = {
            'ZhAjc': function (_0xfbc4f8, _0x3822ae) {
                return _0x53fd84['weFlj'](_0xfbc4f8, _0x3822ae);
            },
            'mVCvY': function (_0x1b045a, _0xfa99e8) {
                return _0x53fd84['dUeIm'](_0x1b045a, _0xfa99e8);
            },
            'NFZYg': _0x53fd84['holPU'],
            'QgwNj': function (_0x53c314, _0x50a561) {
                return _0x53fd84['moIDK'](_0x53c314, _0x50a561);
            },
            'mIxjP': _0x53fd84['Gswgu'],
            'nOCmj': _0x53fd84['dvllE'],
            'JCqRA': _0x53fd84['vflbY'],
            'eCXmJ': _0x53fd84['wVkOI'],
            'TdbzE': _0x53fd84['THNHy'],
            'ZFpCZ': _0x53fd84['KuNMl'],
            'hcptO': _0x53fd84['XADdY'],
            'CIZnR': _0x53fd84['tyDWy'],
            'zIjye': function (_0xb0b893, _0x4a4466) {
                return _0x53fd84['moIDK'](_0xb0b893, _0x4a4466);
            },
            'TyFYj': _0x53fd84['PNfSM'],
            'iCQRi': _0x53fd84['keBIs'],
            'fCtKW': _0x53fd84['AdwPO'],
            'GtOUl': _0x53fd84['uyZYP'],
            'yolPp': _0x53fd84['qzgUb'],
            'UImkE': _0x53fd84['NUIsC'],
            'xSzJd': _0x53fd84['GIeLs'],
            'UjxTG': _0x53fd84['XQbDW'],
            'wyQui': _0x53fd84['acPLk'],
            'BSEzB': function (_0x290773, _0x364ff3) {
                return _0x53fd84['uzOxu'](_0x290773, _0x364ff3);
            },
            'faGUA': _0x53fd84['guHnW'],
            'JPxvz': _0x53fd84['QqtQl'],
            'HLKDr': _0x53fd84['tsQjh'],
            'krgmS': _0x53fd84['vUUQQ'],
            'ulekN': _0x53fd84['xGZpR'],
            'yovXC': function (_0x5e562e, _0x570a5e) {
                return _0x53fd84['inbbA'](_0x5e562e, _0x570a5e);
            },
            'xMjPS': _0x53fd84['NYoer']
        };
        _0x53fd84['mFVrG'](beforeEach, function () {
            const _0xb76786 = _0x53fd84['FaACe']['split']('|');
            let _0x20927f = 0x0;
            while (!![]) {
                switch (_0xb76786[_0x20927f++]) {
                case '0':
                    sinon['stub'](runMode, _0x53fd84['rJWwg'])['resolves']();
                    continue;
                case '1':
                    sinon['stub'](runMode, _0x53fd84['CYBfJ'])['resolves']({
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
                        'video': _0x53fd84['ndlWX'],
                        'shouldUploadVideo': !![],
                        'screenshots': [],
                        'config': {},
                        'spec': {}
                    });
                    continue;
                case '2':
                    return Promise['all']([
                        user['set']({}),
                        _0x53fd84['DUFCi'](getId, this['todosPath'])['then'](_0x23bb4e => {
                            this['projectId'] = _0x23bb4e;
                        })
                    ]);
                case '3':
                    sinon['stub'](api, _0x53fd84['QPtcU'])['resolves']();
                    continue;
                case '4':
                    sinon['stub'](electron['app'], 'on')['withArgs'](_0x53fd84['CIfnP'])['yieldsAsync']();
                    continue;
                case '5':
                    sinon['stub'](browsers, _0x53fd84['OFAZO']);
                    continue;
                }
                break;
            }
        }), _0x53fd84['yWgcE'](it, _0x53fd84['dItAl'], function () {
            return sinon['stub'](env, _0x53fd84['TyKym'])['withArgs'](_0x53fd84['AiBJB'])['returns'](this['projectId']), cypress['start']([
                _0x53fd84['tbHlB'],
                '--run-project=' + this['noScaffolding'],
                _0x53fd84['vflbY'],
                _0x53fd84['wVkOI']
            ])['then'](() => {
                _0x53ccf3['ZhAjc'](expect, api['createRun'])['to']['be']['calledWithMatch']({ 'projectId': this['projectId'] }), _0x53ccf3['mVCvY'](expect, errors['warning'])['not']['to']['be']['called'], this['expectExitWith'](0x3);
            });
        }), _0x53fd84['vNEnR'](it, _0x53fd84['tzyCx'], function () {
            const _0x2df0cf = {
                'mnYHe': function (_0x2cf0d5, _0x4d4bf4) {
                    return _0x53fd84['DnryK'](_0x2cf0d5, _0x4d4bf4);
                },
                'MiNnq': _0x53fd84['MloWL'],
                'HblgO': _0x53fd84['mpwMz']
            };
            return sinon['stub'](env, _0x53fd84['TyKym'])['withArgs'](_0x53fd84['AiBJB'])['returns'](_0x53fd84['MloWL'])['withArgs'](_0x53fd84['htKTM'])['returns'](_0x53fd84['mpwMz']), cypress['start']([
                _0x53fd84['tbHlB'],
                '--run-project=' + this['noScaffolding'],
                _0x53fd84['vflbY']
            ])['then'](() => {
                _0x2df0cf['mnYHe'](expect, api['createRun'])['to']['be']['calledWithMatch']({
                    'projectId': _0x2df0cf['MiNnq'],
                    'recordKey': _0x2df0cf['HblgO']
                }), _0x2df0cf['mnYHe'](expect, errors['warning'])['not']['to']['be']['called'], this['expectExitWith'](0x3);
            });
        }), _0x53fd84['vNEnR'](it, _0x53fd84['etmeM'], function () {
            const _0x836b81 = {
                'GOzla': _0x53fd84['holPU'],
                'OzRjP': function (_0x6fdb71, _0x1fd716) {
                    return _0x53fd84['nIPoF'](_0x6fdb71, _0x1fd716);
                },
                'nemDk': _0x53fd84['tPIAI']
            };
            return sinon['stub'](ciProvider, _0x53fd84['dvllE'])['returns'](null), cypress['start']([
                '--run-project=' + this['recordPath'],
                _0x53fd84['vflbY'],
                _0x53fd84['wVkOI'],
                _0x53fd84['flMIb']
            ])['then'](() => {
                return this['expectExitWithErr'](_0x836b81['GOzla']), _0x836b81['OzRjP'](snapshotConsoleLogs, _0x836b81['nemDk']);
            });
        }), _0x53fd84['vNEnR'](it, _0x53fd84['nqPly'], function () {
            const _0x3050ac = {
                'MEFWt': _0x53ccf3['NFZYg'],
                'xUUJP': function (_0x100eea, _0x140335) {
                    return _0x53ccf3['QgwNj'](_0x100eea, _0x140335);
                },
                'inBBU': _0x53ccf3['mIxjP']
            };
            return sinon['stub'](ciProvider, _0x53ccf3['nOCmj'])['returns'](null), cypress['start']([
                '--run-project=' + this['recordPath'],
                _0x53ccf3['JCqRA'],
                _0x53ccf3['eCXmJ'],
                _0x53ccf3['TdbzE']
            ])['then'](() => {
                return this['expectExitWithErr'](_0x3050ac['MEFWt']), _0x3050ac['xUUJP'](snapshotConsoleLogs, _0x3050ac['inBBU']);
            });
        }), _0x53fd84['vNEnR'](it, _0x53fd84['LTRzg'], function () {
            return sinon['stub'](ciProvider, _0x53fd84['dvllE'])['returns'](null), cypress['start']([
                '--run-project=' + this['recordPath'],
                _0x53fd84['vflbY'],
                _0x53fd84['wVkOI'],
                _0x53fd84['PtazG'],
                _0x53fd84['THNHy']
            ])['then'](() => {
                return this['expectExitWithErr'](_0x53ccf3['NFZYg']), _0x53ccf3['QgwNj'](snapshotConsoleLogs, _0x53ccf3['ZFpCZ']);
            });
        }), _0x53fd84['vNEnR'](it, _0x53fd84['qVNtq'], function () {
            const _0x4e6d80 = {
                'HCajq': _0x53fd84['Uavsc'],
                'DxUSd': function (_0x213742, _0x19694b) {
                    return _0x53fd84['nIPoF'](_0x213742, _0x19694b);
                },
                'JloRh': _0x53fd84['PUcgd']
            };
            return cypress['start']([
                '--run-project=' + this['recordPath'],
                _0x53fd84['vflbY'],
                _0x53fd84['wVkOI'],
                _0x53fd84['BQRRN']
            ])['then'](() => {
                return this['expectExitWithErr'](_0x4e6d80['HCajq']), _0x4e6d80['DxUSd'](snapshotConsoleLogs, _0x4e6d80['JloRh']);
            });
        }), _0x53fd84['bRXjG'](it, _0x53fd84['LDAhk'], function () {
            const _0x38f9e7 = {
                'sCWOI': _0x53fd84['XADdY'],
                'vpRNN': function (_0x42ba1d, _0x5d2c70) {
                    return _0x53fd84['nDupz'](_0x42ba1d, _0x5d2c70);
                },
                'XYybR': _0x53fd84['WgmjZ']
            };
            return cypress['start']([
                '--run-project=' + this['recordPath'],
                _0x53fd84['BQRRN']
            ])['then'](() => {
                return this['expectExitWithErr'](_0x38f9e7['sCWOI']), _0x38f9e7['vpRNN'](snapshotConsoleLogs, _0x38f9e7['XYybR']);
            });
        }), _0x53fd84['bRXjG'](it, _0x53fd84['Ycvrk'], function () {
            const _0x1ec40b = {
                'EoFUL': _0x53fd84['XADdY'],
                'EmWpK': function (_0x784743, _0x2ca877) {
                    return _0x53fd84['lEVEl'](_0x784743, _0x2ca877);
                },
                'uLjkX': _0x53fd84['GTTZV']
            };
            return cypress['start']([
                '--run-project=' + this['recordPath'],
                _0x53fd84['flMIb']
            ])['then'](() => {
                return this['expectExitWithErr'](_0x1ec40b['EoFUL']), _0x1ec40b['EmWpK'](snapshotConsoleLogs, _0x1ec40b['uLjkX']);
            });
        }), _0x53fd84['YCAJd'](it, _0x53fd84['zWnPH'], function () {
            const _0x4e77c5 = {
                'GsQwN': _0x53fd84['XADdY'],
                'mjEYr': function (_0x5acd7b, _0x590506) {
                    return _0x53fd84['eiMdr'](_0x5acd7b, _0x590506);
                },
                'KpjnJ': _0x53fd84['cpvXD']
            };
            return cypress['start']([
                '--run-project=' + this['recordPath'],
                _0x53fd84['THNHy']
            ])['then'](() => {
                return this['expectExitWithErr'](_0x4e77c5['GsQwN']), _0x4e77c5['mjEYr'](snapshotConsoleLogs, _0x4e77c5['KpjnJ']);
            });
        }), _0x53fd84['tawHg'](it, _0x53fd84['mCMFB'], function () {
            return cypress['start']([
                '--run-project=' + this['recordPath'],
                _0x53fd84['keBIs']
            ])['then'](() => {
                return this['expectExitWithErr'](_0x53ccf3['hcptO']), _0x53ccf3['QgwNj'](snapshotConsoleLogs, _0x53ccf3['CIZnR']);
            });
        }), _0x53fd84['tawHg'](it, _0x53fd84['VCAPj'], function () {
            const _0x124d67 = {
                'xvsGp': _0x53ccf3['hcptO'],
                'KKszF': function (_0x42bb9e, _0x25b4d7) {
                    return _0x53ccf3['zIjye'](_0x42bb9e, _0x25b4d7);
                },
                'BFJjJ': _0x53ccf3['TyFYj']
            };
            return cypress['start']([
                '--run-project=' + this['recordPath'],
                _0x53ccf3['iCQRi'],
                _0x53ccf3['fCtKW'],
                _0x53ccf3['TdbzE']
            ])['then'](() => {
                return this['expectExitWithErr'](_0x124d67['xvsGp']), _0x124d67['KKszF'](snapshotConsoleLogs, _0x124d67['BFJjJ']);
            });
        }), _0x53fd84['aveKp'](it, _0x53fd84['xtDBI'], function () {
            const _0x478d83 = new Error();
            return _0x478d83['statusCode'] = 0x1a6, _0x478d83['error'] = {
                'code': _0x53ccf3['UImkE'],
                'payload': { 'runUrl': _0x53ccf3['xSzJd'] }
            }, api['createRun']['rejects'](_0x478d83), cypress['start']([
                '--run-project=' + this['recordPath'],
                _0x53ccf3['JCqRA'],
                _0x53ccf3['eCXmJ'],
                _0x53ccf3['fCtKW'],
                _0x53ccf3['UjxTG']
            ])['then'](() => {
                return this['expectExitWithErr'](_0x53ccf3['GtOUl']), _0x53ccf3['zIjye'](snapshotConsoleLogs, _0x53ccf3['yolPp']);
            });
        }), _0x53fd84['aveKp'](it, _0x53fd84['LYxHV'], function () {
            sinon['stub'](system, _0x53fd84['lBhsK'])['returns']({
                'osName': _0x53fd84['bppxO'],
                'osVersion': 'v1'
            }), sinon['stub'](browsers, _0x53fd84['wzWNj'])['resolves']({
                'version': _0x53fd84['kreAg'],
                'displayName': _0x53fd84['xbUGh']
            });
            const _0xdc654c = new Error();
            return _0xdc654c['statusCode'] = 0x1a6, _0xdc654c['error'] = {
                'code': _0x53fd84['IDWJV'],
                'payload': { 'runUrl': _0x53fd84['GIeLs'] }
            }, api['createRun']['rejects'](_0xdc654c), cypress['start']([
                '--run-project=' + this['recordPath'],
                _0x53fd84['vflbY'],
                _0x53fd84['wVkOI'],
                _0x53fd84['THNHy'],
                _0x53fd84['AdwPO'],
                _0x53fd84['XQbDW']
            ])['then'](() => {
                return this['expectExitWithErr'](_0x53ccf3['wyQui']), _0x53ccf3['BSEzB'](snapshotConsoleLogs, _0x53ccf3['faGUA']);
            });
        }), _0x53fd84['aveKp'](it, _0x53fd84['wlQwW'], function () {
            const _0x1e64a8 = {
                    'evsaK': _0x53ccf3['JPxvz'],
                    'mBQDT': function (_0xbf0fd4, _0x161f62) {
                        return _0x53ccf3['BSEzB'](_0xbf0fd4, _0x161f62);
                    },
                    'lMZwY': _0x53ccf3['HLKDr']
                }, _0x2ebe31 = new Error();
            return _0x2ebe31['statusCode'] = 0x1a6, _0x2ebe31['error'] = {
                'code': _0x53ccf3['krgmS'],
                'payload': { 'runUrl': _0x53ccf3['xSzJd'] }
            }, api['createRun']['rejects'](_0x2ebe31), cypress['start']([
                '--run-project=' + this['recordPath'],
                _0x53ccf3['JCqRA'],
                _0x53ccf3['eCXmJ'],
                _0x53ccf3['TdbzE'],
                _0x53ccf3['fCtKW'],
                _0x53ccf3['UjxTG']
            ])['then'](() => {
                return this['expectExitWithErr'](_0x1e64a8['evsaK']), _0x1e64a8['mBQDT'](snapshotConsoleLogs, _0x1e64a8['lMZwY']);
            });
        }), _0x53fd84['HrrZQ'](it, _0x53fd84['OYWpM'], function () {
            const _0x244ce5 = {
                    'BrxgN': _0x53fd84['oAafD'],
                    'jEDZb': function (_0x3af435, _0x43fda0) {
                        return _0x53fd84['weFlj'](_0x3af435, _0x43fda0);
                    },
                    'igRAt': _0x53fd84['eJfGb']
                }, _0x29a82c = new Error();
            return _0x29a82c['statusCode'] = 0x1a6, _0x29a82c['error'] = {
                'code': _0x53fd84['yOrnp'],
                'payload': { 'runUrl': _0x53fd84['GIeLs'] }
            }, api['createRun']['rejects'](_0x29a82c), cypress['start']([
                '--run-project=' + this['recordPath'],
                _0x53fd84['vflbY'],
                _0x53fd84['wVkOI'],
                _0x53fd84['THNHy'],
                _0x53fd84['keBIs'],
                _0x53fd84['AdwPO'],
                _0x53fd84['XQbDW']
            ])['then'](() => {
                return this['expectExitWithErr'](_0x244ce5['BrxgN']), _0x244ce5['jEDZb'](snapshotConsoleLogs, _0x244ce5['igRAt']);
            });
        }), _0x53fd84['HrrZQ'](it, _0x53fd84['RnBrk'], function () {
            const _0x52dba2 = {
                    'kZLJo': _0x53fd84['ggqDW'],
                    'mbbhF': function (_0x3ab183, _0x1f7da4) {
                        return _0x53fd84['weFlj'](_0x3ab183, _0x1f7da4);
                    },
                    'ExaQh': _0x53fd84['laBnH']
                }, _0x40b38a = new Error();
            return _0x40b38a['statusCode'] = 0x1a6, _0x40b38a['error'] = {
                'code': _0x53fd84['ceuna'],
                'payload': { 'runUrl': _0x53fd84['GIeLs'] }
            }, api['createRun']['rejects'](_0x40b38a), cypress['start']([
                '--run-project=' + this['recordPath'],
                _0x53fd84['vflbY'],
                _0x53fd84['wVkOI'],
                _0x53fd84['keBIs'],
                _0x53fd84['AdwPO'],
                _0x53fd84['XQbDW']
            ])['then'](() => {
                return this['expectExitWithErr'](_0x52dba2['kZLJo']), _0x52dba2['mbbhF'](snapshotConsoleLogs, _0x52dba2['ExaQh']);
            });
        }), _0x53fd84['HrrZQ'](it, _0x53fd84['tHHkH'], function () {
            const _0x249329 = new Error();
            return _0x249329['statusCode'] = 0x1a6, _0x249329['error'] = {
                'code': _0x53fd84['dPeiM'],
                'payload': { 'runUrl': _0x53fd84['GIeLs'] }
            }, api['createRun']['rejects'](_0x249329), cypress['start']([
                '--run-project=' + this['recordPath'],
                _0x53fd84['vflbY'],
                _0x53fd84['wVkOI'],
                _0x53fd84['THNHy'],
                _0x53fd84['keBIs'],
                _0x53fd84['AdwPO'],
                _0x53fd84['XQbDW']
            ])['then'](() => {
                return this['expectExitWithErr'](_0x53ccf3['ulekN']), _0x53ccf3['yovXC'](snapshotConsoleLogs, _0x53ccf3['xMjPS']);
            });
        });
    }), _0x53fd84['DAACQ'](context, _0x53fd84['mrpGs'], () => {
        _0x53fd84['luHxe'](beforeEach, () => {
            console['log']['restore'](), sinon['stub'](console, _0x53fd84['FQRSN']);
        }), _0x53fd84['HrrZQ'](it, _0x53fd84['WpiKU'], function () {
            const _0x1060fc = {
                'vgpXQ': function (_0x46f306, _0x43dcc3) {
                    return _0x53fd84['WhDRI'](_0x46f306, _0x43dcc3);
                },
                'iLwuo': _0x53fd84['Wnmea']
            };
            return cypress['start']([_0x53fd84['mrpGs']])['then'](() => {
                _0x1060fc['vgpXQ'](expect, console['log'])['to']['be']['calledWithMatch'](_0x1060fc['iLwuo']), this['expectExitWith'](0x0);
            });
        });
    }), _0x53fd84['DKMDH'](context, _0x53fd84['OaXle'], () => {
        const _0x4924f9 = {
            'fQotj': _0x53fd84['FQRSN'],
            'mLOYd': function (_0x5f15ba, _0x145377) {
                return _0x53fd84['luHxe'](_0x5f15ba, _0x145377);
            },
            'BVjOr': _0x53fd84['OaXle']
        };
        _0x53fd84['BcKAA'](beforeEach, () => {
            console['log']['restore'](), sinon['stub'](console, _0x4924f9['fQotj']);
        }), _0x53fd84['fHkoX'](it, _0x53fd84['mNfwa'], function () {
            return cypress['start']([_0x4924f9['BVjOr']])['then'](() => {
                _0x4924f9['mLOYd'](expect, console['log'])['to']['be']['calledWith'](pkg['version']), this['expectExitWith'](0x0);
            });
        });
    }), _0x53fd84['yBHld'](context, _0x53fd84['aPbaI'], () => {
        const _0x5af2e9 = { 'YxjSm': _0x53fd84['FQRSN'] };
        _0x53fd84['BcKAA'](beforeEach, () => {
            console['log']['restore'](), sinon['stub'](console, _0x5af2e9['YxjSm']);
        }), _0x53fd84['fHkoX'](it, _0x53fd84['aEnod'], function () {
            const _0x3fc3a1 = {
                'yFlZG': function (_0x3227d3, _0x3a8229) {
                    return _0x53fd84['BcKAA'](_0x3227d3, _0x3a8229);
                },
                'LDAAB': _0x53fd84['yoTkl']
            };
            return cypress['start']([
                _0x53fd84['aPbaI'],
                _0x53fd84['pqQDj']
            ])['then'](() => {
                _0x3fc3a1['yFlZG'](expect, console['log'])['to']['be']['calledWith'](_0x3fc3a1['LDAAB']), this['expectExitWith'](0x0);
            });
        });
    }), _0x53fd84['kKncJ'](context, _0x53fd84['jGFPg'], () => {
        const _0x30d673 = {
            'GwCWt': function (_0x25e85b, _0x228c37) {
                return _0x53fd84['ffckW'](_0x25e85b, _0x228c37);
            },
            'DGqnQ': _0x53fd84['CIfnP'],
            'QufrC': _0x53fd84['rktFE'],
            'tNnKI': _0x53fd84['eyHlH'],
            'xhhTg': _0x53fd84['aSkzx'],
            'TlpuK': _0x53fd84['EWJXV'],
            'jSKzV': _0x53fd84['vXTqh'],
            'tGSXE': function (_0x474586, _0x22bdee) {
                return _0x53fd84['ffckW'](_0x474586, _0x22bdee);
            },
            'PSqgu': function (_0x48d471, _0x3fe0cf) {
                return _0x53fd84['ffckW'](_0x48d471, _0x3fe0cf);
            },
            'htoNl': _0x53fd84['FjggU'],
            'VDDKY': function (_0x49f41c, _0x5a4f25) {
                return _0x53fd84['ffckW'](_0x49f41c, _0x5a4f25);
            },
            'fnsIj': _0x53fd84['xgejd'],
            'VdatJ': function (_0x326d9b, _0x93ae45) {
                return _0x53fd84['wXIsi'](_0x326d9b, _0x93ae45);
            },
            'OdXHo': function (_0xd6de87, _0x3f8dde) {
                return _0x53fd84['wXIsi'](_0xd6de87, _0x3f8dde);
            },
            'yQWXm': _0x53fd84['LKgfK'],
            'YMnZE': function (_0x3fc35d, _0x5599c1) {
                return _0x53fd84['ssiqK'](_0x3fc35d, _0x5599c1);
            },
            'ZkTTg': function (_0x4fbc46, _0x2a43ee) {
                return _0x53fd84['mTkMH'](_0x4fbc46, _0x2a43ee);
            },
            'kxqfA': _0x53fd84['yywBz'],
            'UVjNZ': _0x53fd84['esBMO'],
            'wqvQg': function (_0x29447b, _0x73e841) {
                return _0x53fd84['BNvnU'](_0x29447b, _0x73e841);
            },
            'TZrxC': _0x53fd84['cqhgm'],
            'gLnGs': _0x53fd84['ktXTP'],
            'WGomO': function (_0x359107, _0x21738e) {
                return _0x53fd84['uHDPT'](_0x359107, _0x21738e);
            },
            'iLAUW': _0x53fd84['qcGPZ'],
            'VvKXU': _0x53fd84['raBbm'],
            'mUMod': function (_0x2e2b70, _0x3ffcc7) {
                return _0x53fd84['uHDPT'](_0x2e2b70, _0x3ffcc7);
            },
            'ftvVn': _0x53fd84['idDvs'],
            'nQCxr': function (_0x1d97ed, _0x2801c1) {
                return _0x53fd84['uHDPT'](_0x1d97ed, _0x2801c1);
            },
            'JdzKV': _0x53fd84['tmrlS'],
            'MdHTa': _0x53fd84['OFAZO'],
            'kWJyJ': _0x53fd84['oiUua'],
            'sgSgN': _0x53fd84['SWaLc'],
            'wJbAz': function (_0x58fae6, _0x31c4b3, _0x78bc89) {
                return _0x53fd84['fHkoX'](_0x58fae6, _0x31c4b3, _0x78bc89);
            },
            'ahZMk': _0x53fd84['lhTrk'],
            'izwhV': _0x53fd84['mNitS'],
            'oQVFq': _0x53fd84['DLjXO'],
            'zemZt': _0x53fd84['TKauG'],
            'KaMvN': function (_0x4ed344, _0x403057) {
                return _0x53fd84['bAGCm'](_0x4ed344, _0x403057);
            },
            'rpEtI': _0x53fd84['fFfCm'],
            'wpjXk': _0x53fd84['UEKEH']
        };
        _0x53fd84['bAGCm'](beforeEach, function () {
            const _0x3c8cf5 = _0x53fd84['FPcIB']['split']('|');
            let _0x4fbf79 = 0x0;
            while (!![]) {
                switch (_0x3c8cf5[_0x4fbf79++]) {
                case '0':
                    sinon['stub'](Windows, _0x53fd84['OFAZO'])['resolves'](this['win']);
                    continue;
                case '1':
                    sinon['stub'](ServerE2E['prototype'], _0x53fd84['VgbWn']);
                    continue;
                case '2':
                    sinon['spy'](Events, _0x53fd84['dRgzX']);
                    continue;
                case '3':
                    sinon['stub'](electron['app'], 'on')['withArgs'](_0x53fd84['CIfnP'])['yieldsAsync']();
                    continue;
                case '4':
                    this['win'] = {
                        'on': sinon['stub'](),
                        'webContents': { 'on': sinon['stub']() }
                    };
                    continue;
                case '5':
                    sinon['stub'](electron['ipcMain'], 'on');
                    continue;
                }
                break;
            }
        }), _0x53fd84['YEgcd'](it, _0x53fd84['rHQLZ'], () => {
            return sinon['stub'](interactiveMode, _0x30d673['DGqnQ']), cypress['start']([
                _0x30d673['QufrC'],
                _0x30d673['tNnKI'],
                _0x30d673['xhhTg']
            ])['then'](() => {
                _0x30d673['GwCWt'](expect, interactiveMode['ready'])['to']['be']['calledWithMatch']({
                    'updating': !![],
                    'config': {
                        'port': 0x849,
                        'pageLoadTimeout': 0x3e8
                    }
                });
            });
        }), _0x53fd84['kkTHl'](it, _0x53fd84['lvTdk'], () => {
            const _0x47949d = {
                'JDffa': function (_0x23a9e6, _0x177009) {
                    return _0x30d673['GwCWt'](_0x23a9e6, _0x177009);
                }
            };
            return cypress['start']([
                _0x30d673['tNnKI'],
                _0x30d673['xhhTg']
            ])['then'](() => {
                _0x47949d['JDffa'](expect, Events['start'])['to']['be']['calledWithMatch']({
                    'config': {
                        'pageLoadTimeout': 0x3e8,
                        'port': 0x849
                    }
                });
            });
        }), _0x53fd84['fIIiZ'](it, _0x53fd84['ByrpN'], function () {
            const _0x2d76be = {
                    'RxgSf': _0x53fd84['eyHlH'],
                    'dQIvo': _0x53fd84['BBNQS'],
                    'jKKvC': _0x53fd84['PhoTz'],
                    'MNzDm': _0x53fd84['iqssM'],
                    'usgim': _0x53fd84['GXeTw']
                }, _0x5d9d36 = sinon['stub'](ServerE2E['prototype'], _0x53fd84['OFAZO'])['resolves']([]);
            return process['env']['CYPRESS_FILE_SERVER_FOLDER'] = _0x53fd84['xgejd'], process['env']['CYPRESS_BASE_URL'] = _0x53fd84['LKgfK'], process['env']['CYPRESS_port'] = _0x53fd84['ivPKn'], process['env']['CYPRESS_responseTimeout'] = _0x53fd84['GuquT'], process['env']['CYPRESS_watch_for_file_changes'] = _0x53fd84['ICMIE'], user['set']({
                'name': _0x53fd84['BKWZF'],
                'authToken': _0x53fd84['Yidra']
            })['then'](() => {
                return settings['read'](this['todosPath']);
            })['then'](_0x2053b0 => {
                return _0x2053b0['baseUrl'] = _0x30d673['TlpuK'], settings['write'](this['todosPath'], _0x2053b0);
            })['then'](() => {
                return cypress['start']([
                    _0x2d76be['RxgSf'],
                    _0x2d76be['dQIvo'],
                    _0x2d76be['jKKvC'],
                    _0x2d76be['MNzDm'],
                    _0x2d76be['usgim']
                ]);
            })['then'](() => {
                const _0x2db404 = Events['start']['firstCall']['args'][0x0];
                return Events['handleEvent'](_0x2db404, {}, {}, 0x7b, _0x30d673['jSKzV'], this['todosPath']);
            })['then'](() => {
                const _0x511017 = openProject['getProject']()['options'];
                _0x30d673['GwCWt'](expect, _0x511017['port'])['to']['eq'](0x849), _0x30d673['tGSXE'](expect, _0x511017['pageLoadTimeout'])['to']['eq'](0x3e8), _0x30d673['PSqgu'](expect, _0x511017['report'])['to']['eq'](![]), _0x30d673['PSqgu'](expect, _0x511017['env'])['to']['eql']({ 'baz': _0x30d673['htoNl'] }), _0x30d673['VDDKY'](expect, _0x5d9d36)['to']['be']['called'];
                const _0x36c7da = _0x5d9d36['getCall'](0x0)['args'][0x0];
                _0x30d673['VDDKY'](expect, _0x36c7da['fileServerFolder'])['to']['eq'](path['join'](this['todosPath'], _0x30d673['fnsIj'])), _0x30d673['VdatJ'](expect, _0x36c7da['pageLoadTimeout'])['to']['eq'](0x3e8), _0x30d673['OdXHo'](expect, _0x36c7da['port'])['to']['eq'](0x849), _0x30d673['OdXHo'](expect, _0x36c7da['baseUrl'])['to']['eq'](_0x30d673['yQWXm']), _0x30d673['YMnZE'](expect, _0x36c7da['watchForFileChanges'])['to']['be']['false'], _0x30d673['YMnZE'](expect, _0x36c7da['responseTimeout'])['to']['eq'](0x15b3), _0x30d673['ZkTTg'](expect, _0x36c7da['env']['baz'])['to']['eq'](_0x30d673['htoNl']), _0x30d673['ZkTTg'](expect, _0x36c7da['env'])['not']['to']['have']['property'](_0x30d673['kxqfA']), _0x30d673['ZkTTg'](expect, _0x36c7da['env'])['not']['to']['have']['property'](_0x30d673['UVjNZ']), _0x30d673['wqvQg'](expect, _0x36c7da['env'])['not']['to']['have']['property'](_0x30d673['TZrxC']), _0x30d673['wqvQg'](expect, _0x36c7da['env'])['not']['to']['have']['property'](_0x30d673['gLnGs']), _0x30d673['WGomO'](expect, _0x36c7da['env'])['not']['to']['have']['property'](_0x30d673['iLAUW']), _0x30d673['WGomO'](expect, _0x36c7da['resolved']['fileServerFolder'])['to']['deep']['eq']({
                    'value': _0x30d673['fnsIj'],
                    'from': _0x30d673['VvKXU']
                }), _0x30d673['mUMod'](expect, _0x36c7da['resolved']['pageLoadTimeout'])['to']['deep']['eq']({
                    'value': 0x3e8,
                    'from': _0x30d673['ftvVn']
                }), _0x30d673['nQCxr'](expect, _0x36c7da['resolved']['port'])['to']['deep']['eq']({
                    'value': 0x849,
                    'from': _0x30d673['ftvVn']
                }), _0x30d673['nQCxr'](expect, _0x36c7da['resolved']['baseUrl'])['to']['deep']['eq']({
                    'value': _0x30d673['yQWXm'],
                    'from': _0x30d673['VvKXU']
                }), _0x30d673['nQCxr'](expect, _0x36c7da['resolved']['watchForFileChanges'])['to']['deep']['eq']({
                    'value': ![],
                    'from': _0x30d673['VvKXU']
                }), _0x30d673['nQCxr'](expect, _0x36c7da['resolved']['responseTimeout'])['to']['deep']['eq']({
                    'value': 0x15b3,
                    'from': _0x30d673['VvKXU']
                }), _0x30d673['nQCxr'](expect, _0x36c7da['resolved']['env']['baz'])['to']['deep']['eq']({
                    'value': _0x30d673['htoNl'],
                    'from': _0x30d673['ftvVn']
                });
            });
        }), _0x53fd84['EYzdW'](it, _0x53fd84['xKKlQ'], function () {
            const _0x245490 = {
                    'FJCUC': _0x53fd84['drhyT'],
                    'bFFxl': _0x53fd84['vXTqh'],
                    'CrPNp': function (_0x4edc4c, _0x5506d9) {
                        return _0x53fd84['ffckW'](_0x4edc4c, _0x5506d9);
                    },
                    'lUyww': _0x53fd84['ZRxCc']
                }, _0x4f56bf = new EE(), _0x31af69 = { 'sender': { 'send': sinon['stub']() } }, _0x170457 = { 'message': _0x53fd84['czDWh'] };
            return sinon['stub'](ServerE2E['prototype'], _0x53fd84['OFAZO'])['resolves']([
                0x849,
                _0x170457
            ]), cypress['start']([
                _0x53fd84['eyHlH'],
                _0x53fd84['BBNQS'],
                _0x53fd84['PhoTz'],
                _0x53fd84['iqssM'],
                _0x53fd84['GXeTw']
            ])['then'](() => {
                const _0x561da9 = Events['start']['firstCall']['args'][0x0];
                return Events['handleEvent'](_0x561da9, _0x4f56bf, _0x31af69, 0x7b, _0x245490['FJCUC']), Events['handleEvent'](_0x561da9, _0x4f56bf, _0x31af69, 0x7b, _0x245490['bFFxl'], this['todosPath']);
            })['then'](() => {
                _0x245490['CrPNp'](expect, _0x31af69['sender']['send']['withArgs'](_0x245490['lUyww'])['firstCall']['args'][0x1]['data'])['to']['eql'](_0x170457);
            });
        }), _0x53fd84['EYzdW'](describe, _0x53fd84['fAEre'], () => {
            const _0x1d09e8 = {
                'ByPHK': function (_0x49e09e, _0x4bf575) {
                    return _0x30d673['nQCxr'](_0x49e09e, _0x4bf575);
                },
                'RxePm': _0x30d673['sgSgN'],
                'tMDNo': function (_0x43e456, _0x166ff9) {
                    return _0x30d673['KaMvN'](_0x43e456, _0x166ff9);
                }
            };
            _0x30d673['KaMvN'](beforeEach, function () {
                this['filename'] = _0x30d673['JdzKV'], this['open'] = sinon['stub'](ServerE2E['prototype'], _0x30d673['MdHTa'])['resolves']([]);
            }), _0x30d673['wJbAz'](it, _0x30d673['rpEtI'], function () {
                const _0x5e3fab = { 'DJxWd': _0x30d673['jSKzV'] };
                return sinon['stub'](fs, _0x30d673['kWJyJ']), fs['readJsonAsync']['withArgs'](path['join'](this['pristinePath'], this['filename']))['resolves']({
                    'env': { 'foo': _0x30d673['sgSgN'] },
                    'port': 0x7e4
                }), fs['readJsonAsync']['callThrough'](), cypress['start'](['--config-file=' + this['filename']])['then'](() => {
                    const _0x2ca84b = Events['start']['firstCall']['args'][0x0];
                    return Events['handleEvent'](_0x2ca84b, {}, {}, 0x7b, _0x5e3fab['DJxWd'], this['pristinePath']);
                })['then'](() => {
                    _0x1d09e8['ByPHK'](expect, this['open'])['to']['be']['called'];
                    const _0x32560c = this['open']['getCall'](0x0)['args'][0x0];
                    _0x1d09e8['ByPHK'](expect, _0x32560c['env']['foo'])['to']['equal'](_0x1d09e8['RxePm']), _0x1d09e8['tMDNo'](expect, _0x32560c['port'])['to']['equal'](0x7e4);
                });
            }), _0x30d673['wJbAz'](it, _0x30d673['wpjXk'], function () {
                const _0xd87485 = {
                    'EYWfq': function (_0x4251a1, _0x32d9e6, _0x3cd3cd) {
                        return _0x30d673['wJbAz'](_0x4251a1, _0x32d9e6, _0x3cd3cd);
                    },
                    'ZbqpE': _0x30d673['ahZMk'],
                    'QAoZK': _0x30d673['izwhV'],
                    'eZlgh': _0x30d673['jSKzV'],
                    'dznEt': _0x30d673['oQVFq'],
                    'AzTHz': _0x30d673['zemZt']
                };
                return cypress['start'](['--config-file=' + this['filename']])['then'](() => {
                    _0xd87485['EYWfq'](debug, _0xd87485['ZbqpE'], this['filename']);
                    const _0x2dc3b3 = Events['start']['firstCall']['args'][0x0];
                    return _0xd87485['EYWfq'](debug, _0xd87485['QAoZK'], Events['start']['firstCall']['args']), Events['handleEvent'](_0x2dc3b3, {}, {}, 0x7b, _0xd87485['eZlgh'], this['pristinePath']);
                })['then'](() => {
                    const _0x20644d = {
                        'Jaity': function (_0x190d83, _0xfc2155, _0x5c4751) {
                            return _0xd87485['EYWfq'](_0x190d83, _0xfc2155, _0x5c4751);
                        },
                        'BYMEf': _0xd87485['dznEt']
                    };
                    return _0xd87485['EYWfq'](expect, this['open'], _0xd87485['AzTHz'])['to']['be']['called'], fs['readJsonAsync'](path['join'](this['pristinePath'], this['filename']))['then'](_0x316630 => {
                        _0x20644d['Jaity'](expect, _0x316630, _0x20644d['BYMEf'])['to']['deep']['equal']({});
                    });
                });
            });
        });
    }), _0x53fd84['kKncJ'](context, _0x53fd84['MuuVK'], () => {
        const _0x3a0a7b = {
            'aixEn': function (_0x42215e, _0x4fba2b) {
                return _0x53fd84['iXDhu'](_0x42215e, _0x4fba2b);
            },
            'yXMmc': _0x53fd84['UAghh'],
            'adHjW': function (_0x3c1730, _0x2e4582) {
                return _0x53fd84['sRYdJ'](_0x3c1730, _0x2e4582);
            },
            'mAlIN': _0x53fd84['lIHBl'],
            'Wqujd': _0x53fd84['WuEnd'],
            'xTWPf': function (_0x57c3da, _0x3e52e6) {
                return _0x53fd84['cJvnZ'](_0x57c3da, _0x3e52e6);
            },
            'xOLIA': _0x53fd84['tbHlB']
        };
        _0x53fd84['cJvnZ'](beforeEach, () => {
            errors['warning']['restore'](), sinon['stub'](electron['app'], 'on')['withArgs'](_0x53fd84['CIfnP'])['yieldsAsync'](), sinon['stub'](interactiveMode, _0x53fd84['CIfnP'])['resolves'](), sinon['spy'](errors, _0x53fd84['cqwMH']);
        }), _0x53fd84['EYzdW'](it, _0x53fd84['qSurC'], () => {
            const _0x4e8b75 = {
                'AFWkx': function (_0x446b75, _0x144f3d) {
                    return _0x3a0a7b['aixEn'](_0x446b75, _0x144f3d);
                },
                'UlKZw': _0x3a0a7b['yXMmc'],
                'BEjNg': function (_0x3d2ab4, _0x18775f) {
                    return _0x3a0a7b['adHjW'](_0x3d2ab4, _0x18775f);
                },
                'cnUYJ': _0x3a0a7b['mAlIN'],
                'NvqGW': _0x3a0a7b['Wqujd']
            };
            return cypress['start']()['then'](() => {
                _0x4e8b75['AFWkx'](expect, errors['warning'])['to']['be']['calledWith'](_0x4e8b75['UlKZw']), _0x4e8b75['BEjNg'](expect, console['log'])['to']['be']['calledWithMatch'](_0x4e8b75['cnUYJ']), _0x4e8b75['BEjNg'](expect, console['log'])['to']['be']['calledWithMatch'](_0x4e8b75['NvqGW']);
            });
        }), _0x53fd84['EYzdW'](it, _0x53fd84['TCZAH'], () => {
            return cypress['start']([_0x3a0a7b['xOLIA']])['then'](() => {
                _0x3a0a7b['xTWPf'](expect, errors['warning'])['not']['to']['be']['called'];
            });
        });
    }), _0x53fd84['kKncJ'](context, _0x53fd84['gXQtr'], () => {
        const _0x50441e = {
            'fqXkR': _0x53fd84['CIfnP'],
            'xbUQv': function (_0x2d6ef5, _0x395814) {
                return _0x53fd84['cJvnZ'](_0x2d6ef5, _0x395814);
            }
        };
        _0x53fd84['cJvnZ'](beforeEach, () => {
            sinon['stub'](electron['app'], 'on')['withArgs'](_0x50441e['fqXkR'])['yieldsAsync'](), sinon['stub'](interactiveMode, _0x50441e['fqXkR'])['resolves']();
        }), _0x53fd84['EYzdW'](it, _0x53fd84['DcaGf'], () => {
            return cypress['start']()['then'](() => {
                _0x50441e['xbUQv'](expect, interactiveMode['ready'])['to']['be']['calledOnce'];
            });
        });
    });
});
