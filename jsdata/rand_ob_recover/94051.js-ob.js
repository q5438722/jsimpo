require(_0x2d9756(422));
const R = require(_0x2d9756(423)), _ = require('lodash'), path = require(_0x2d9756(424)), EE = require(_0x2d9756(425)), http = require(_0x2d9756(426)), Promise = require('bluebird'), electron = require(_0x2d9756(427)), commitInfo = require(_0x2d9756(428)), Fixtures = require('../support/helpers/fixtures'), snapshot = require(_0x2d9756(429)), stripAnsi = require('strip-ansi'), debug = require(_0x2d9756(430))('test'), pkg = require('@packages/root'), detect = require(_0x2d9756(431)), launch = require('@packages/launcher/lib/browsers'), extension = require('@packages/extension'), argsUtil = require(root + _0x2d9756(432)), {fs} = require(root + _0x2d9756(433)), ciProvider = require(root + _0x2d9756(434)), settings = require(root + 'lib/util/settings'), Events = require(root + _0x2d9756(435)), Windows = require(root + _0x2d9756(436)), interactiveMode = require(root + _0x2d9756(437)), runMode = require(root + _0x2d9756(438)), api = require(root + 'lib/api'), cwd = require(root + _0x2d9756(439)), user = require(root + 'lib/user'), config = require(root + _0x2d9756(440)), cache = require(root + _0x2d9756(441)), errors = require(root + _0x2d9756(442)), plugins = require(root + _0x2d9756(443)), cypress = require(root + _0x2d9756(444)), ProjectBase = require(root + _0x2d9756(445))['ProjectBase'], {getId} = require(root + _0x2d9756(446)), {ServerE2E} = require(root + _0x2d9756(447)), Reporter = require(root + _0x2d9756(448)), Watchers = require(root + _0x2d9756(449)), browsers = require(root + _0x2d9756(450)), videoCapture = require(root + 'lib/video_capture'), browserUtils = require(root + 'lib/browsers/utils'), chromeBrowser = require(root + 'lib/browsers/chrome'), openProject = require(root + _0x2d9756(451)), env = require(root + _0x2d9756(452)), v = require(root + _0x2d9756(453)), system = require(root + _0x2d9756(454)), appData = require(root + _0x2d9756(455)), electronApp = require(_0x2d9756(456)), savedState = require(root + 'lib/saved_state'), TYPICAL_BROWSERS = [
        {
            'name': _0x2d9756(457),
            'family': _0x2d9756(458),
            'channel': 'stable',
            'displayName': _0x2d9756(459),
            'version': _0x2d9756(460),
            'path': _0x2d9756(461),
            'majorVersion': '60'
        },
        {
            'name': _0x2d9756(458),
            'family': _0x2d9756(458),
            'channel': _0x2d9756(462),
            'displayName': _0x2d9756(463),
            'version': '49.0.2609.0',
            'path': _0x2d9756(464),
            'majorVersion': '49'
        },
        {
            'name': _0x2d9756(457),
            'family': _0x2d9756(458),
            'channel': _0x2d9756(465),
            'displayName': _0x2d9756(466),
            'version': _0x2d9756(467),
            'path': _0x2d9756(468),
            'majorVersion': '62'
        }
    ], ELECTRON_BROWSER = {
        'name': _0x2d9756(427),
        'family': 'chromium',
        'displayName': _0x2d9756(469),
        'path': '',
        'version': '99.101.1234',
        'majorVersion': 99
    }, previousCwd = process[_0x2d9756(470)](), snapshotConsoleLogs = function (_0x4e8124) {
        const _0x4e81ec = _0x2d9756, _0xfa5be8 = {
                'pUavq': function (_0x142fc2, _0x4013b5, _0x188c4e) {
                    return _0x142fc2(_0x4013b5, _0x188c4e);
                },
                'iJTzQ': function (_0x4f4396, _0x14c655) {
                    return _0x4f4396(_0x14c655);
                }
            }, _0x21eacd = _[_0x4e81ec(471)](console[_0x4e81ec(472)]['args'])['map'](_0x2c0b11 => {
                const _0x25d085 = _0x4e81ec;
                return _0x2c0b11[_0x25d085(473)](' ');
            })[_0x4e81ec(473)]('\n')['value']();
        return process['chdir'](previousCwd), _0xfa5be8['pUavq'](snapshot, _0x4e8124, _0xfa5be8[_0x4e81ec(474)](stripAnsi, _0x21eacd));
    };
describe(_0x2d9756(444), () => {
    const _0x254dfb = _0x2d9756, _0x47f830 = {
            'sfbDy': function (_0x2fff62, _0x16d827, _0xfc7736) {
                return _0x2fff62(_0x16d827, _0xfc7736);
            },
            'LRllJ': _0x254dfb(475),
            'MSHgM': function (_0x34282e, _0x524504, _0x1dcc85) {
                return _0x34282e(_0x524504, _0x1dcc85);
            },
            'vzKij': _0x254dfb(476),
            'fPHOy': 'error text',
            'qbAwy': _0x254dfb(477),
            'yRBUA': _0x254dfb(478),
            'INLkF': _0x254dfb(479),
            'xWssL': 'plugin-browser',
            'ryFyG': _0x254dfb(480),
            'fGncg': _0x254dfb(481),
            'VSNUw': _0x254dfb(482),
            'lmyMb': _0x254dfb(483),
            'Yjtfv': _0x254dfb(484),
            'BqFbm': _0x254dfb(485),
            'CRoTE': _0x254dfb(486),
            'cjQJA': 'log',
            'zINpQ': _0x254dfb(487),
            'vGrCX': _0x254dfb(488),
            'HDxJf': '123.45.6789',
            'TaXaA': function (_0x20b18f, _0x102216) {
                return _0x20b18f(_0x102216);
            },
            'nYjQX': 'browsers',
            'ePEWu': _0x254dfb(489),
            'wBOQe': _0x254dfb(458),
            'UprTw': _0x254dfb(490),
            'IzBKZ': '/some/path',
            'diyvO': function (_0x2cf8f3, _0x5652c6) {
                return _0x2cf8f3(_0x5652c6);
            },
            'fueFB': function (_0x3350ad, _0x4cccc6) {
                return _0x3350ad(_0x4cccc6);
            },
            'sJWPz': function (_0x150404, _0x3eb91e, _0x37717e) {
                return _0x150404(_0x3eb91e, _0x37717e);
            },
            'oldFy': 'allows browser major to be a number',
            'JRkxf': function (_0x2abfa6, _0x3db6ef, _0x479a10) {
                return _0x2abfa6(_0x3db6ef, _0x479a10);
            },
            'nVhBh': _0x254dfb(491),
            'ckGvT': _0x254dfb(492),
            'HvvCM': _0x254dfb(493),
            'yaJtr': _0x254dfb(494),
            'UDPMV': _0x254dfb(495),
            'qqNGa': _0x254dfb(496),
            'IwSOi': _0x254dfb(497),
            'oLXeJ': function (_0x527a96, _0x26e4c9, _0x5ab081) {
                return _0x527a96(_0x26e4c9, _0x5ab081);
            },
            'JvsFD': _0x254dfb(498),
            'WdZIT': _0x254dfb(499),
            'mgSos': function (_0x212f8d, _0x5551f3, _0x62396d) {
                return _0x212f8d(_0x5551f3, _0x62396d);
            },
            'bnjLh': 'exits if reporter options cannot be parsed',
            'GEiMQ': _0x254dfb(500),
            'RkbSS': '--config=test=false',
            'VHzeO': _0x254dfb(501),
            'VyXwM': function (_0x286b28, _0x572b17) {
                return _0x286b28(_0x572b17);
            },
            'KtBiT': _0x254dfb(502),
            'NhqEO': _0x254dfb(503),
            'eigWf': function (_0x345b41, _0x4c6efb) {
                return _0x345b41(_0x4c6efb);
            },
            'sfuJx': _0x254dfb(504),
            'LnniM': _0x254dfb(505),
            'mRwkf': function (_0x23abc1, _0x41e3dc) {
                return _0x23abc1(_0x41e3dc);
            },
            'VQhUU': function (_0x4bcb26, _0x3b4ab8, _0x42b9a9) {
                return _0x4bcb26(_0x3b4ab8, _0x42b9a9);
            },
            'XsUxT': function (_0x382d98, _0x473ffc, _0x5b7fca) {
                return _0x382d98(_0x473ffc, _0x5b7fca);
            },
            'gQQCL': _0x254dfb(506),
            'fJnMn': _0x254dfb(507),
            'xAshx': _0x254dfb(508),
            'ZlsJJ': _0x254dfb(509),
            'BMCZa': _0x254dfb(510),
            'rYOjH': 'open',
            'nvgHW': _0x254dfb(511),
            'HNFJn': _0x254dfb(512),
            'BYGxL': _0x254dfb(513),
            'ZaAxN': function (_0x54fbcf, _0x431607) {
                return _0x54fbcf(_0x431607);
            },
            'DSNYn': function (_0x1cb2f4, _0x94b673, _0x4c6015) {
                return _0x1cb2f4(_0x94b673, _0x4c6015);
            },
            'iArGk': _0x254dfb(514),
            'LqUnX': function (_0xe389c1, _0x4f6b6b, _0x30ee76) {
                return _0xe389c1(_0x4f6b6b, _0x30ee76);
            },
            'wDyDR': _0x254dfb(515),
            'SIAXP': 'runSpecs',
            'KHLAk': _0x254dfb(516),
            'PHSKK': function (_0x57ac75, _0x3a9ec8) {
                return _0x57ac75(_0x3a9ec8);
            },
            'bqgYr': _0x254dfb(517),
            'pWZZe': 'createProject',
            'utKYd': function (_0x44712d, _0x5bd642) {
                return _0x44712d(_0x5bd642);
            },
            'aclyq': 'port=2020',
            'qMtAm': _0x254dfb(518),
            'opzZH': _0x254dfb(519),
            'LzzGg': _0x254dfb(520),
            'RUcdI': '--reporter=nyan',
            'suwAV': '--key=asdf',
            'lhgyX': function (_0xeda267, _0x27341e, _0x47756b) {
                return _0xeda267(_0x27341e, _0x47756b);
            },
            'pxXre': _0x254dfb(521),
            'ulAne': function (_0x2557c4, _0x3864bb, _0x3c8f5c) {
                return _0x2557c4(_0x3864bb, _0x3c8f5c);
            },
            'DTjqD': function (_0x5c73bd, _0x555a0c, _0x150df7) {
                return _0x5c73bd(_0x555a0c, _0x150df7);
            },
            'foNKF': '--browser=foo',
            'ymicl': '{\'foo\': \'bar}',
            'nwSHD': 'localhost:9999',
            'oBdBL': 'CONFIG_VALIDATION_ERROR',
            'cQfik': _0x254dfb(522),
            'HdXCU': '--config=baseUrl=localhost:9999',
            'hsBuB': function (_0x1d4734, _0x20bb85) {
                return _0x1d4734 === _0x20bb85;
            },
            'qAEbP': 'cypress.json',
            'LGREj': function (_0x513052, _0x1430db, _0x63e415) {
                return _0x513052(_0x1430db, _0x63e415);
            },
            'OUoHd': _0x254dfb(523),
            'nLrNe': _0x254dfb(524),
            'zxhvw': _0x254dfb(457),
            'RrGsr': 'foo',
            'YPdgW': '_connectToChromeRemoteInterface',
            'ujlQV': '_navigateUsingCRI',
            'boFay': _0x254dfb(525),
            'HmUwc': _0x254dfb(427),
            'gnmIy': function (_0x2819f7, _0x12281c, _0x1174cb) {
                return _0x2819f7(_0x12281c, _0x1174cb);
            },
            'drHhv': _0x254dfb(526),
            'pqcMC': '--port=5544',
            'YAUao': _0x254dfb(527),
            'QhTDM': _0x254dfb(528),
            'iWHrC': _0x254dfb(529),
            'cEBbv': _0x254dfb(530),
            'zzfDN': function (_0x5519e9, _0x37c331) {
                return _0x5519e9(_0x37c331);
            },
            'bFhGK': function (_0x2bd0a0, _0x4c6100, _0x30b245) {
                return _0x2bd0a0(_0x4c6100, _0x30b245);
            },
            'aSBCx': _0x254dfb(531),
            'GhQdn': _0x254dfb(532),
            'GyoVg': _0x254dfb(533),
            'tpZAQ': _0x254dfb(534),
            'kgqRw': _0x254dfb(535),
            'sDYOn': _0x254dfb(536),
            'VtBsf': function (_0x1f86c1, _0x253d4f) {
                return _0x1f86c1(_0x253d4f);
            },
            'jZZmf': 'e2e',
            'XEpNb': _0x254dfb(537),
            'ebPrP': function (_0x4b34ab, _0x5bd7fe) {
                return _0x4b34ab(_0x5bd7fe);
            },
            'BUmtZ': _0x254dfb(538),
            'DCwPj': function (_0x47380c, _0x554c46) {
                return _0x47380c(_0x554c46);
            },
            'DkAYr': _0x254dfb(539),
            'hPhrk': _0x254dfb(540),
            'EYhqL': '1-getting-started',
            'VNUqS': _0x254dfb(541),
            'xdgAo': _0x254dfb(542),
            'EGrvc': _0x254dfb(543),
            'dvpor': _0x254dfb(544),
            'LSsBK': _0x254dfb(545),
            'IsFWG': _0x254dfb(546),
            'oQsXR': _0x254dfb(547),
            'WJMtG': 'integration folder should not exist!',
            'HVjwY': _0x254dfb(548),
            'Lskwq': _0x254dfb(549),
            'QgFiQ': function (_0x4a9aaf) {
                return _0x4a9aaf();
            },
            'yhegQ': 'http://localhost:8888',
            'rjMDY': _0x254dfb(550),
            'VOlpL': _0x254dfb(551),
            'jDaCx': 'You also provided your Record Key, but you did not pass the --record flag.',
            'WzxdD': _0x254dfb(552),
            'nthRV': _0x254dfb(553),
            'PwnIi': _0x254dfb(554),
            'fyxZC': function (_0x463d1f, _0x5f0333) {
                return _0x463d1f(_0x5f0333);
            },
            'asiMD': 'Your `supportFile` is set to `/does/not/exist`,',
            'lojKg': _0x254dfb(555),
            'GuKjy': 'We searched for any files matching this glob pattern:',
            'fTYQd': _0x254dfb(556),
            'QANKi': '--config=integrationFolder=cypress/specs',
            'OaqVO': function (_0x5b720f, _0x57c3d1, _0x25e950) {
                return _0x5b720f(_0x57c3d1, _0x25e950);
            },
            'QqyDR': _0x254dfb(557),
            'NAfcF': _0x254dfb(558),
            'pSjfJ': 'RENAMED_CONFIG_OPTION',
            'IBPyA': _0x254dfb(559),
            'UAiag': _0x254dfb(560),
            'YGmIW': function (_0x5b1cc3, _0x44e35f) {
                return _0x5b1cc3(_0x44e35f);
            },
            'ZofCU': _0x254dfb(561),
            'zXpku': '--env=foo=foo,bar=bar',
            'sUJuE': _0x254dfb(562),
            'rTalX': _0x254dfb(563),
            'dJzca': _0x254dfb(564),
            'dqiuu': function (_0x29e450, _0x127050) {
                return _0x29e450(_0x127050);
            },
            'TDogX': 'listen',
            'OhHAI': '5544',
            'SZzVV': _0x254dfb(565),
            'TaeSP': _0x254dfb(566),
            'YjESt': 'abcdefgh.test.json',
            'yTjxM': function (_0x457f6b, _0x45d4e0) {
                return _0x457f6b(_0x45d4e0);
            },
            'YlWXr': function (_0x414df4, _0x203986, _0x27f21d) {
                return _0x414df4(_0x203986, _0x27f21d);
            },
            'pjmlq': 'runs project headlessly and exits with exit code 0',
            'RUkES': function (_0x5de834, _0x35a249, _0x5a5952) {
                return _0x5de834(_0x35a249, _0x5a5952);
            },
            'DtEoS': 'sets --headed false if --headless',
            'xWhUd': _0x254dfb(567),
            'trLxE': function (_0x2fd623, _0x36d422, _0x3c3649) {
                return _0x2fd623(_0x36d422, _0x3c3649);
            },
            'rLxaK': _0x254dfb(568),
            'CXEEf': 'runs project headlessly and exits with exit code 10',
            'hpbjO': function (_0x6d74af, _0x4c8933, _0x27fa74) {
                return _0x6d74af(_0x4c8933, _0x27fa74);
            },
            'uqvFS': _0x254dfb(569),
            'hZRqE': function (_0x36a320, _0x56a517, _0x3044d8) {
                return _0x36a320(_0x56a517, _0x3044d8);
            },
            'RoCnX': _0x254dfb(570),
            'PNbQf': _0x254dfb(571),
            'jTraA': _0x254dfb(572),
            'DBpYB': _0x254dfb(573),
            'sOkCM': function (_0x513396, _0x9b0d6e, _0x1257d4) {
                return _0x513396(_0x9b0d6e, _0x1257d4);
            },
            'dCoZR': _0x254dfb(574),
            'IlPJb': function (_0x45f71e, _0x41411b, _0x90e02f) {
                return _0x45f71e(_0x41411b, _0x90e02f);
            },
            'OzgAR': function (_0x2e7d0f, _0x2cd87b, _0x283334) {
                return _0x2e7d0f(_0x2cd87b, _0x283334);
            },
            'fHeUN': 'does not scaffold when headless and exits with error when no existing project',
            'InfrD': _0x254dfb(575),
            'TDEQK': _0x254dfb(576),
            'uXDtH': function (_0x39755a, _0x17ba78, _0x2e1785) {
                return _0x39755a(_0x17ba78, _0x2e1785);
            },
            'HeIkB': _0x254dfb(577),
            'GjGls': _0x254dfb(578),
            'XUWAb': function (_0x7164f8, _0x313b99, _0x452109) {
                return _0x7164f8(_0x313b99, _0x452109);
            },
            'vsdoS': _0x254dfb(579),
            'RvYiG': _0x254dfb(580),
            'FkzpQ': _0x254dfb(581),
            'sDDgU': function (_0xc13e02, _0x2f3df6, _0x3e313b) {
                return _0xc13e02(_0x2f3df6, _0x3e313b);
            },
            'SLhYc': _0x254dfb(582),
            'SnTxg': function (_0x482003, _0x1a1f42, _0x16d8ec) {
                return _0x482003(_0x1a1f42, _0x16d8ec);
            },
            'XCnwM': _0x254dfb(583),
            'SLaIi': _0x254dfb(584),
            'zuAkm': function (_0x196e73, _0x5bc605, _0x468b6e) {
                return _0x196e73(_0x5bc605, _0x468b6e);
            },
            'kmmEB': 'does not log warning when no projectId',
            'sSpGp': function (_0x13c2fc, _0x19179e, _0x4b9a67) {
                return _0x13c2fc(_0x19179e, _0x4b9a67);
            },
            'qAJPn': _0x254dfb(585),
            'pdBBf': _0x254dfb(586),
            'JiDwX': function (_0x3238a7, _0x5e087a, _0x388b25) {
                return _0x3238a7(_0x5e087a, _0x388b25);
            },
            'LMUeu': 'logs error and exits when project has invalid cypress.json values',
            'igtMC': 'logs error and exits when project has invalid config values from the CLI',
            'qtXBu': function (_0x2747b9, _0x526419, _0x43f125) {
                return _0x2747b9(_0x526419, _0x43f125);
            },
            'pjkPh': 'blacklistHosts',
            'WxGNw': _0x254dfb(587),
            'WvpUD': function (_0x31af34, _0x34bfa5, _0x559769) {
                return _0x31af34(_0x34bfa5, _0x559769);
            },
            'uKdLN': _0x254dfb(588),
            'DzVss': function (_0xbeab78, _0x2fa218, _0x3145b5) {
                return _0xbeab78(_0x2fa218, _0x3145b5);
            },
            'mEmFN': _0x254dfb(589),
            'kwubs': function (_0x9deae9, _0x5267af, _0x6808da) {
                return _0x9deae9(_0x5267af, _0x6808da);
            },
            'dkgXx': _0x254dfb(590),
            'jhMzi': _0x254dfb(591),
            'JMBLD': function (_0x32b8c4, _0x391cd6, _0x184b33) {
                return _0x32b8c4(_0x391cd6, _0x184b33);
            },
            'dQYRx': _0x254dfb(592),
            'EjyRW': '--record',
            'KzVYK': _0x254dfb(593),
            'yONPw': _0x254dfb(594),
            'DVGts': _0x254dfb(595),
            'DobpN': _0x254dfb(596),
            'RfKCZ': function (_0x50be5f, _0x409918) {
                return _0x50be5f(_0x409918);
            },
            'nnOEi': 'provider',
            'gDFpL': _0x254dfb(597),
            'JjgGA': _0x254dfb(598),
            'JrFvY': _0x254dfb(599),
            'Oenpx': _0x254dfb(600),
            'tgNIh': 'darwin',
            'xGUDM': _0x254dfb(469),
            'FylEE': 'PARALLEL_GROUP_PARAMS_MISMATCH',
            'OHeoX': _0x254dfb(601),
            'yLKkK': _0x254dfb(602),
            'ItGsQ': _0x254dfb(603),
            'Uhqfh': _0x254dfb(604),
            'WhzZM': _0x254dfb(605),
            'XxuMF': '--tag=nightly',
            'McfTi': _0x254dfb(606),
            'hUrxn': _0x254dfb(607),
            'WhmPD': 'path/to/video',
            'jHcjX': function (_0x2467d6, _0x40b760) {
                return _0x2467d6(_0x40b760);
            },
            'FlAUP': _0x254dfb(608),
            'HULXy': 'INDETERMINATE_CI_BUILD_ID-group 1',
            'VcEKm': _0x254dfb(609),
            'bHbyK': function (_0x4f1340, _0x2cbac1) {
                return _0x4f1340(_0x2cbac1);
            },
            'ToNNz': _0x254dfb(610),
            'hkLic': _0x254dfb(611),
            'VXfVL': function (_0x31e18c, _0xff6168) {
                return _0x31e18c(_0xff6168);
            },
            'OktMa': _0x254dfb(612),
            'SrEJF': _0x254dfb(613),
            'OvziN': _0x254dfb(614),
            'VUTFR': _0x254dfb(615),
            'CReSn': _0x254dfb(616),
            'kVstY': function (_0x952726, _0x1795f0) {
                return _0x952726(_0x1795f0);
            },
            'KenLj': _0x254dfb(617),
            'yWBqp': 'DASHBOARD_PARALLEL_GROUP_PARAMS_MISMATCH',
            'stVhQ': function (_0x1c404b, _0x4e5226) {
                return _0x1c404b(_0x4e5226);
            },
            'iqZQP': _0x254dfb(618),
            'eXQCR': _0x254dfb(619),
            'Zapia': _0x254dfb(620),
            'qyCMb': _0x254dfb(621),
            'OIFNa': _0x254dfb(622),
            'mZKGd': 'DASHBOARD_STALE_RUN 1',
            'dMYze': _0x254dfb(623),
            'sGsGa': function (_0xda2091, _0x21b8cf) {
                return _0xda2091(_0x21b8cf);
            },
            'ZkJWD': 'uses process.env.CYPRESS_PROJECT_ID',
            'Vcxib': function (_0x406f95, _0x3b69a7, _0x8d2abd) {
                return _0x406f95(_0x3b69a7, _0x8d2abd);
            },
            'CiylW': _0x254dfb(624),
            'FTAlF': _0x254dfb(625),
            'yaIje': 'errors and exits when using --parallel but ciBuildId could not be generated',
            'GTdOk': 'errors and exits when using --parallel and --group but ciBuildId could not be generated',
            'sOZrF': function (_0x536254, _0x17cf43, _0x5907ea) {
                return _0x536254(_0x17cf43, _0x5907ea);
            },
            'rWsMq': _0x254dfb(626),
            'MpiAa': _0x254dfb(627),
            'WfMCF': _0x254dfb(628),
            'vmjmb': function (_0x48ce74, _0x2d0a20, _0x12bd49) {
                return _0x48ce74(_0x2d0a20, _0x12bd49);
            },
            'cCYfI': function (_0x5987af, _0x12ff8f, _0x10f832) {
                return _0x5987af(_0x12ff8f, _0x10f832);
            },
            'eRReB': _0x254dfb(629),
            'IXxVp': _0x254dfb(630),
            'rBOTD': function (_0x58dfb8, _0x9d6bfe, _0x41f66a) {
                return _0x58dfb8(_0x9d6bfe, _0x41f66a);
            },
            'Xnqqh': _0x254dfb(631),
            'KiHgn': function (_0x534134, _0x123cfc, _0x15b7c0) {
                return _0x534134(_0x123cfc, _0x15b7c0);
            },
            'dgdDd': 'errors and exits when parallel is required',
            'mloPM': _0x254dfb(632),
            'GoaxL': _0x254dfb(633),
            'lJHea': _0x254dfb(634),
            'dzISJ': 'logs package.json and exits',
            'FpgBy': _0x254dfb(635),
            'BsujA': function (_0x4a2be6, _0x56bad0) {
                return _0x4a2be6(_0x56bad0);
            },
            'vpvAj': _0x254dfb(636),
            'EltDJ': _0x254dfb(637),
            'khWCf': 'abc123',
            'fJsQn': function (_0x84285a, _0x2f645d) {
                return _0x84285a(_0x2f645d);
            },
            'Xglmh': function (_0x1ac2fe, _0x41630d, _0x5e0a1e) {
                return _0x1ac2fe(_0x41630d, _0x5e0a1e);
            },
            'rRwmR': 'logs pong value and exits',
            'ViLJX': '--updating',
            'KflhX': _0x254dfb(638),
            'jAwoW': _0x254dfb(639),
            'xyyXp': _0x254dfb(640),
            'ijBoi': _0x254dfb(641),
            'TUqhl': _0x254dfb(642),
            'RNGFf': function (_0x37cba3, _0x1e8e4e) {
                return _0x37cba3(_0x1e8e4e);
            },
            'Fgjhl': function (_0x4d9bee, _0x459128) {
                return _0x4d9bee(_0x459128);
            },
            'PSaMj': _0x254dfb(643),
            'dioKE': _0x254dfb(644),
            'sgkqP': _0x254dfb(645),
            'gbsHO': function (_0x35275a, _0x1a8f55) {
                return _0x35275a(_0x1a8f55);
            },
            'Ijeyo': 'responseTimeout',
            'aWHPR': function (_0x1d8471, _0x5d0e41) {
                return _0x1d8471(_0x5d0e41);
            },
            'AQIHC': _0x254dfb(646),
            'UqoIe': _0x254dfb(647),
            'kVbPm': _0x254dfb(648),
            'nMLvh': _0x254dfb(649),
            'mjgSE': 'auth-token-123',
            'fFViN': _0x254dfb(650),
            'ukJdX': _0x254dfb(651),
            'uKRbR': _0x254dfb(652),
            'RVLTk': _0x254dfb(653),
            'CFPrS': '5|2|1|0|4|3',
            'WYcll': _0x254dfb(654),
            'jQbFN': function (_0x597fd3, _0x5098db) {
                return _0x597fd3(_0x5098db);
            },
            'KLzWh': _0x254dfb(655),
            'uIxqt': _0x254dfb(656),
            'SvMSW': _0x254dfb(657),
            'yrcAJ': _0x254dfb(658),
            'bAadi': function (_0x28ab56, _0x4872fe, _0x849636) {
                return _0x28ab56(_0x4872fe, _0x849636);
            },
            'JSuhB': 'passes options to interactiveMode.ready',
            'imdwV': function (_0x15fc65, _0x5b87b5, _0x37f50c) {
                return _0x15fc65(_0x5b87b5, _0x37f50c);
            },
            'aeKsb': _0x254dfb(659),
            'SnCLI': function (_0x5a92fe, _0xb27ddc, _0x221977) {
                return _0x5a92fe(_0xb27ddc, _0x221977);
            },
            'EQkfY': _0x254dfb(660),
            'tqJrh': function (_0x40c31d, _0x4b98bb) {
                return _0x40c31d(_0x4b98bb);
            },
            'weJkP': _0x254dfb(661),
            'ujMpn': _0x254dfb(662),
            'puWXk': _0x254dfb(663),
            'CwJGR': function (_0x5e980b, _0x46fd2d) {
                return _0x5e980b(_0x46fd2d);
            },
            'ZXVnJ': 'mocha-banner',
            'QRjYf': _0x254dfb(664),
            'ardwM': function (_0x148409, _0x143b87, _0x2bb121) {
                return _0x148409(_0x143b87, _0x2bb121);
            },
            'XdleM': 'invalid config',
            'AVilY': _0x254dfb(665),
            'sLHdF': function (_0x2dab5b, _0x3294a7, _0x3632d1) {
                return _0x2dab5b(_0x3294a7, _0x3632d1);
            },
            'VXCSm': function (_0x2e4a01, _0x431167, _0x3b99dd) {
                return _0x2e4a01(_0x431167, _0x3b99dd);
            },
            'gcjtd': _0x254dfb(666),
            'MkJhS': function (_0x258214, _0x3f032a, _0x598f56) {
                return _0x258214(_0x3f032a, _0x598f56);
            },
            'RSood': _0x254dfb(667),
            'qrahy': function (_0x42a166, _0x5df05a, _0x51c39f) {
                return _0x42a166(_0x5df05a, _0x51c39f);
            },
            'FiyoN': 'no args'
        };
    _0x47f830[_0x254dfb(668)](require, _0x47f830[_0x254dfb(669)])['register'](), beforeEach(function () {
        const _0x13c8d4 = _0x254dfb;
        this['timeout'](82 * -65 + -2918 + 16248), cache[_0x13c8d4(670)](), Fixtures[_0x13c8d4(671)](), this[_0x13c8d4(672)] = Fixtures[_0x13c8d4(673)](_0x13c8d4(674)), this[_0x13c8d4(675)] = Fixtures[_0x13c8d4(673)](_0x47f830[_0x13c8d4(676)]), this[_0x13c8d4(677)] = Fixtures[_0x13c8d4(673)](_0x47f830[_0x13c8d4(678)]), this[_0x13c8d4(679)] = Fixtures[_0x13c8d4(673)](_0x13c8d4(680)), this[_0x13c8d4(681)] = Fixtures[_0x13c8d4(673)](_0x47f830['INLkF']), this[_0x13c8d4(682)] = Fixtures[_0x13c8d4(673)](_0x47f830[_0x13c8d4(683)]), this[_0x13c8d4(684)] = Fixtures[_0x13c8d4(673)](_0x13c8d4(685)), sinon['stub'](videoCapture, _0x13c8d4(654))[_0x13c8d4(686)]({}), sinon[_0x13c8d4(687)](plugins, _0x47f830[_0x13c8d4(688)])['resolves'](undefined), sinon[_0x13c8d4(687)](electronApp, _0x47f830[_0x13c8d4(689)])[_0x13c8d4(690)](!![]), sinon[_0x13c8d4(687)](extension, _0x47f830[_0x13c8d4(691)])[_0x13c8d4(686)](), sinon[_0x13c8d4(687)](detect, _0x47f830[_0x13c8d4(692)])[_0x13c8d4(686)](TYPICAL_BROWSERS), sinon[_0x13c8d4(687)](process, _0x47f830['Yjtfv']), sinon['stub'](ServerE2E[_0x13c8d4(693)], _0x13c8d4(694)), sinon[_0x13c8d4(687)](errors, _0x47f830[_0x13c8d4(695)])[_0x13c8d4(696)]()[_0x13c8d4(697)](_0x47f830['CRoTE'])[_0x13c8d4(690)](null), sinon[_0x13c8d4(698)](errors, _0x47f830['cjQJA']), sinon[_0x13c8d4(698)](errors, _0x47f830['zINpQ']), sinon[_0x13c8d4(698)](console, _0x47f830[_0x13c8d4(699)]), sinon[_0x13c8d4(687)](process, _0x47f830[_0x13c8d4(700)])['value']({
            'chrome': ELECTRON_BROWSER[_0x13c8d4(701)],
            'electron': _0x47f830[_0x13c8d4(702)]
        }), this[_0x13c8d4(703)] = _0x14967e => {
            const _0x1eae47 = _0x13c8d4;
            expect(process[_0x1eae47(484)])['to']['be'][_0x1eae47(704)](_0x14967e);
        }, this[_0x13c8d4(705)] = (_0x1254a9, _0x648273, _0x460d84) => {
            const _0x70a373 = _0x13c8d4;
            _0x47f830[_0x70a373(706)](expect, errors[_0x70a373(472)], _0x47f830[_0x70a373(707)])['to']['be'][_0x70a373(708)]({ 'type': _0x1254a9 }), _0x47f830['MSHgM'](expect, process['exit'], _0x47f830[_0x70a373(709)])['to']['be'][_0x70a373(704)](-7356 + -3507 * 2 + 14371);
            const _0x3a1ec3 = errors[_0x70a373(472)]['getCall'](22 * -181 + 71 * 42 + 1000)['args'][-1047 + -4348 + 5 * 1079];
            return _0x648273 && expect(_0x3a1ec3['message'], _0x47f830[_0x70a373(710)])['to'][_0x70a373(711)](_0x648273), _0x460d84 && _0x47f830[_0x70a373(712)](expect, _0x3a1ec3[_0x70a373(713)], _0x70a373(714))['to']['include'](_0x460d84), _0x3a1ec3;
        };
    }), afterEach(async () => {
        try {
            await openProject['close']();
        } catch (_0x12b14c) {
        }
        Fixtures['remove']();
    }), context(_0x254dfb(715), () => {
        const _0x393b92 = _0x254dfb, _0x2f2b35 = {
                'PrhIA': function (_0x127961, _0x476981) {
                    return _0x127961(_0x476981);
                },
                'xsedW': _0x47f830[_0x393b92(716)],
                'YdPEh': function (_0xcb477d, _0xba57ab) {
                    const _0x171b7a = _0x393b92;
                    return _0x47f830[_0x171b7a(717)](_0xcb477d, _0xba57ab);
                }
            };
        _0x47f830['sJWPz'](it, _0x393b92(718), () => {
            const _0x2727c9 = _0x393b92;
            _0x2f2b35['PrhIA'](expect, v[_0x2727c9(719)](_0x2f2b35['xsedW'], TYPICAL_BROWSERS))['to']['be'][_0x2727c9(720)];
        }), _0x47f830[_0x393b92(721)](it, _0x393b92(722), () => {
            const _0x2c2506 = _0x393b92;
            _0x47f830[_0x2c2506(723)](expect, v[_0x2c2506(719)](_0x47f830['nYjQX'], [ELECTRON_BROWSER]))['to']['be'][_0x2c2506(720)];
        }), it(_0x47f830[_0x393b92(724)], () => {
            const _0x53f039 = _0x393b92, _0x44861b = {
                    'name': _0x47f830[_0x53f039(725)],
                    'family': _0x47f830['wBOQe'],
                    'displayName': 'Edge Beta',
                    'version': _0x47f830[_0x53f039(726)],
                    'path': _0x47f830[_0x53f039(727)],
                    'majorVersion': 80
                };
            _0x47f830[_0x53f039(728)](expect, v[_0x53f039(719)](_0x47f830['nYjQX'], [_0x44861b]))['to']['be'][_0x53f039(720)];
        }), _0x47f830['JRkxf'](it, _0x47f830[_0x393b92(729)], () => {
            const _0x59c0cd = _0x393b92;
            return browserUtils[_0x59c0cd(730)]()[_0x59c0cd(731)](_0x26c21d => {
                const _0x11bcf4 = _0x59c0cd;
                _0x2f2b35[_0x11bcf4(732)](expect, v[_0x11bcf4(719)](_0x11bcf4(733), _0x26c21d))['to']['be'][_0x11bcf4(720)];
            });
        });
    }), context(_0x47f830[_0x254dfb(734)], function () {
        const _0x1743ac = _0x254dfb, _0x444d06 = {
                'xxWjK': _0x47f830[_0x1743ac(735)],
                'myxXx': _0x47f830[_0x1743ac(736)],
                'JosZJ': _0x47f830['IwSOi'],
                'Rgmuw': function (_0x52f30c, _0x56ffcb, _0x4d3938) {
                    const _0x975469 = _0x1743ac;
                    return _0x47f830[_0x975469(737)](_0x52f30c, _0x56ffcb, _0x4d3938);
                },
                'CTFeb': _0x47f830[_0x1743ac(738)],
                'IXuOB': function (_0x2ba01d, _0x5d96cd) {
                    const _0x3bf00a = _0x1743ac;
                    return _0x47f830[_0x3bf00a(717)](_0x2ba01d, _0x5d96cd);
                }
            };
        _0x47f830[_0x1743ac(737)](it, _0x1743ac(739), function () {
            const _0x36cc1c = _0x1743ac, _0x1f2af9 = { 'JfYkx': _0x444d06[_0x36cc1c(740)] };
            return cypress['start']([
                _0x444d06[_0x36cc1c(741)],
                _0x444d06[_0x36cc1c(742)]
            ])[_0x36cc1c(731)](() => {
                const _0x83af61 = _0x36cc1c, _0x484beb = this[_0x83af61(705)](_0x1f2af9[_0x83af61(743)]);
                snapshot(_0x83af61(744), stripAnsi(_0x484beb[_0x83af61(713)]));
            });
        }), _0x47f830[_0x1743ac(737)](it, _0x47f830[_0x1743ac(745)], function () {
            const _0x53442c = _0x1743ac;
            return cypress[_0x53442c(654)]([
                _0x53442c(530),
                _0x47f830[_0x53442c(746)]
            ])[_0x53442c(731)](() => {
                const _0x403544 = _0x53442c, _0x1208b7 = this[_0x403544(705)](_0x444d06[_0x403544(740)]);
                _0x444d06[_0x403544(747)](snapshot, _0x444d06[_0x403544(748)], _0x444d06[_0x403544(749)](stripAnsi, _0x1208b7[_0x403544(713)]));
            });
        }), _0x47f830['mgSos'](it, _0x47f830[_0x1743ac(750)], function () {
            const _0x5aaced = _0x1743ac, _0xcc6ed6 = {
                    'AdzFv': _0x47f830[_0x5aaced(735)],
                    'MdRoY': function (_0x33261b, _0x3b0e79, _0x20ee95) {
                        const _0x3b8cfb = _0x5aaced;
                        return _0x47f830[_0x3b8cfb(751)](_0x33261b, _0x3b0e79, _0x20ee95);
                    },
                    'ReEPp': _0x47f830[_0x5aaced(752)],
                    'sVwyS': function (_0xfa1a2c, _0x13626f) {
                        return _0xfa1a2c(_0x13626f);
                    }
                };
            return cypress[_0x5aaced(654)]([
                _0x47f830[_0x5aaced(753)],
                _0x5aaced(754)
            ])['then'](() => {
                const _0x275321 = _0x5aaced, _0x121919 = this['expectExitWithErr'](_0xcc6ed6[_0x275321(755)]);
                _0xcc6ed6[_0x275321(756)](snapshot, _0xcc6ed6[_0x275321(757)], _0xcc6ed6[_0x275321(758)](stripAnsi, _0x121919[_0x275321(713)]));
            });
        });
    }), _0x47f830[_0x254dfb(759)](context, _0x47f830[_0x254dfb(760)], function () {
        const _0x5f28d2 = _0x254dfb, _0x4d6309 = {
                'uujjo': _0x47f830[_0x5f28d2(761)],
                'GTQfO': _0x47f830['KtBiT'],
                'oEVEo': _0x47f830[_0x5f28d2(762)]
            };
        _0x47f830[_0x5f28d2(763)](beforeEach, function () {
            const _0x4f7796 = _0x5f28d2;
            this[_0x4f7796(764)] = {
                'on': sinon[_0x4f7796(687)](),
                'webContents': { 'on': sinon[_0x4f7796(687)]() }
            }, sinon[_0x4f7796(687)](electron[_0x4f7796(765)], 'on')['withArgs'](_0x47f830[_0x4f7796(766)])[_0x4f7796(767)](), sinon['stub'](Windows, _0x4f7796(768))[_0x4f7796(686)](this[_0x4f7796(764)]);
        }), it(_0x5f28d2(769), function () {
            const _0x516db6 = _0x5f28d2;
            return cypress['start']([
                _0x47f830[_0x516db6(770)],
                _0x47f830['VHzeO']
            ])[_0x516db6(731)](() => {
                const _0x240570 = _0x516db6;
                expect(errors[_0x240570(485)])['to']['be'][_0x240570(704)](_0x4d6309[_0x240570(771)]), expect(console[_0x240570(472)])['to']['be'][_0x240570(708)](_0x4d6309['GTQfO']), expect(console[_0x240570(472)])['to']['be']['calledWithMatch'](_0x4d6309[_0x240570(772)]);
            });
        }), _0x47f830['VQhUU'](it, _0x5f28d2(773), function () {
            const _0x541bcb = _0x5f28d2, _0x558ee6 = {
                    'Xfkvr': '`foo` is not a valid configuration option',
                    'spUEQ': function (_0x5d8cea, _0x415dd1) {
                        const _0xac284 = _0x501e;
                        return _0x47f830[_0xac284(774)](_0x5d8cea, _0x415dd1);
                    },
                    'gWCCg': _0x47f830[_0x541bcb(775)],
                    'gYJnm': function (_0x89943d, _0x4f8c44) {
                        return _0x89943d(_0x4f8c44);
                    },
                    'engOS': _0x47f830[_0x541bcb(761)],
                    'LTJnF': function (_0x5f0537, _0x35457b) {
                        const _0x53fe8f = _0x541bcb;
                        return _0x47f830[_0x53fe8f(776)](_0x5f0537, _0x35457b);
                    },
                    'DuVHH': _0x47f830['sfuJx']
                };
            return cypress[_0x541bcb(654)]([
                _0x47f830[_0x541bcb(777)],
                _0x47f830['VHzeO']
            ])['then'](() => {
                const _0x4902f4 = _0x541bcb, _0x48d974 = _0x4902f4(778)[_0x4902f4(779)]('|');
                let _0x40d935 = 8 * 331 + -112 * 52 + 3176;
                while (!![]) {
                    switch (_0x48d974[_0x40d935++]) {
                    case '0':
                        expect(console['log'])['to']['be'][_0x4902f4(708)](_0x558ee6[_0x4902f4(780)]);
                        continue;
                    case '1':
                        _0x558ee6[_0x4902f4(781)](expect, console[_0x4902f4(472)])['to']['be']['calledWithMatch'](_0x558ee6[_0x4902f4(782)]);
                        continue;
                    case '2':
                        snapshotConsoleLogs('INVALID_CONFIG_OPTION');
                        continue;
                    case '3':
                        _0x558ee6[_0x4902f4(783)](expect, errors[_0x4902f4(485)])['to']['be'][_0x4902f4(704)](_0x558ee6[_0x4902f4(784)]);
                        continue;
                    case '4':
                        _0x558ee6['LTJnF'](expect, console['log'])['to']['be'][_0x4902f4(708)](_0x558ee6[_0x4902f4(785)]);
                        continue;
                    }
                    break;
                }
            });
        }), _0x47f830[_0x5f28d2(786)](it, _0x47f830[_0x5f28d2(787)], function () {
            const _0x5b09f6 = _0x5f28d2;
            return cypress['start']([_0x5b09f6(788)])[_0x5b09f6(731)](() => {
                const _0x2f39d3 = _0x5b09f6;
                expect(errors[_0x2f39d3(485)])['to'][_0x2f39d3(789)]['be'][_0x2f39d3(704)](_0x4d6309[_0x2f39d3(771)]);
            });
        });
    }), _0x47f830[_0x254dfb(759)](context, _0x47f830[_0x254dfb(790)], () => {
        const _0x1fb90b = _0x254dfb, _0x42ed7b = {
                'hfJoZ': function (_0x39ce57, _0x455b1f) {
                    const _0x1d6141 = _0x501e;
                    return _0x47f830[_0x1d6141(791)](_0x39ce57, _0x455b1f);
                },
                'CsCyX': function (_0x3aaba8, _0x3fb09d) {
                    return _0x3aaba8(_0x3fb09d);
                },
                'POFDN': _0x47f830[_0x1fb90b(792)],
                'HKTOU': function (_0x3451b3, _0x58a50e) {
                    return _0x47f830['VtBsf'](_0x3451b3, _0x58a50e);
                },
                'JUIra': _0x47f830[_0x1fb90b(793)],
                'pNdND': _0x47f830[_0x1fb90b(794)],
                'Jhvjk': _0x47f830[_0x1fb90b(795)],
                'utpzi': function (_0x55f565, _0x2ef2db) {
                    const _0x2b2fde = _0x1fb90b;
                    return _0x47f830[_0x2b2fde(796)](_0x55f565, _0x2ef2db);
                },
                'FkplV': _0x47f830[_0x1fb90b(797)],
                'yCtDO': function (_0x34d5cd, _0x1b068e) {
                    return _0x34d5cd(_0x1b068e);
                },
                'dYGvF': function (_0x459b62, _0x42ad34) {
                    const _0x5df5b6 = _0x1fb90b;
                    return _0x47f830[_0x5df5b6(798)](_0x459b62, _0x42ad34);
                },
                'XROPG': _0x47f830[_0x1fb90b(799)],
                'jNKgk': _0x47f830[_0x1fb90b(800)],
                'DjAfP': _0x47f830[_0x1fb90b(801)],
                'QJlXq': _0x47f830['EYhqL'],
                'vyigF': _0x47f830[_0x1fb90b(802)],
                'dVpcx': _0x47f830[_0x1fb90b(803)],
                'RQtkC': _0x47f830[_0x1fb90b(804)],
                'ZIoct': _0x47f830[_0x1fb90b(805)],
                'mOisU': _0x47f830[_0x1fb90b(806)],
                'prcdR': _0x47f830[_0x1fb90b(807)],
                'UXYry': _0x47f830[_0x1fb90b(808)],
                'YQaUr': _0x1fb90b(809),
                'yGqht': _0x47f830[_0x1fb90b(810)],
                'LkmnK': _0x47f830[_0x1fb90b(811)],
                'kLMwb': _0x1fb90b(812),
                'vOnKB': _0x47f830[_0x1fb90b(813)],
                'uUlNX': function (_0x452e1b) {
                    return _0x47f830['QgFiQ'](_0x452e1b);
                },
                'YgOAv': _0x47f830['yhegQ'],
                'atpmv': _0x47f830[_0x1fb90b(814)],
                'DBBKI': _0x47f830[_0x1fb90b(815)],
                'tighP': 'nyan',
                'YVKfE': _0x47f830[_0x1fb90b(816)],
                'TWjur': 'PROJECT_ID_AND_KEY_BUT_MISSING_RECORD_OPTION',
                'iWHsL': 'abc123',
                'YdOPH': _0x47f830['jDaCx'],
                'ZjAbS': _0x1fb90b(817),
                'LfDuz': _0x47f830[_0x1fb90b(818)],
                'fobte': function (_0x4b01c9, _0x254a03) {
                    return _0x47f830['DCwPj'](_0x4b01c9, _0x254a03);
                },
                'PniRr': _0x47f830[_0x1fb90b(819)],
                'GdgHR': _0x47f830[_0x1fb90b(820)],
                'UVyKJ': function (_0x227872, _0x1a80c2) {
                    const _0x34120 = _0x1fb90b;
                    return _0x47f830[_0x34120(821)](_0x227872, _0x1a80c2);
                },
                'QIdyJ': function (_0xc54258, _0x2b459a) {
                    const _0x101f31 = _0x1fb90b;
                    return _0x47f830[_0x101f31(821)](_0xc54258, _0x2b459a);
                },
                'rjELY': _0x47f830[_0x1fb90b(822)],
                'pSUHP': _0x1fb90b(823),
                'QNIGc': _0x47f830[_0x1fb90b(824)],
                'XSHBE': _0x47f830[_0x1fb90b(825)],
                'UMJDc': _0x47f830[_0x1fb90b(826)],
                'eMhgb': _0x1fb90b(827),
                'vnASA': _0x47f830[_0x1fb90b(828)],
                'nASRp': 'NO_SPECS_FOUND',
                'QNbep': 'We searched for any files inside of this folder:',
                'dRQyE': _0x47f830[_0x1fb90b(829)],
                'uToQj': function (_0x229a1d, _0x32a5b7, _0x2da597) {
                    const _0x1deb5e = _0x1fb90b;
                    return _0x47f830[_0x1deb5e(830)](_0x229a1d, _0x32a5b7, _0x2da597);
                },
                'OOMvo': _0x47f830[_0x1fb90b(831)],
                'UZwsK': function (_0x3bcec6, _0x408049, _0x470984) {
                    const _0x5b7d69 = _0x1fb90b;
                    return _0x47f830[_0x5b7d69(830)](_0x3bcec6, _0x408049, _0x470984);
                },
                'mUZmO': _0x47f830[_0x1fb90b(832)],
                'YhQeU': _0x1fb90b(833),
                'SUnHb': _0x1fb90b(834),
                'Okjpk': _0x1fb90b(522),
                'wpjzF': _0x47f830[_0x1fb90b(835)],
                'cEMZy': 'INVALID_REPORTER_NAME',
                'xKfcC': _0x1fb90b(836),
                'TdOvt': function (_0x447950, _0x3299e7) {
                    return _0x447950(_0x3299e7);
                },
                'ZWsvF': _0x47f830[_0x1fb90b(837)],
                'prQlV': _0x47f830[_0x1fb90b(838)],
                'zqOlv': function (_0x4ffdc8, _0x23719e) {
                    return _0x47f830['YGmIW'](_0x4ffdc8, _0x23719e);
                },
                'Acmyv': _0x47f830[_0x1fb90b(839)],
                'YldsH': _0x47f830[_0x1fb90b(840)],
                'cyZdb': function (_0x24fca5, _0x91e79c) {
                    return _0x24fca5(_0x91e79c);
                },
                'EfEyF': _0x47f830[_0x1fb90b(841)],
                'KLzJe': _0x47f830[_0x1fb90b(842)],
                'CPuYW': _0x47f830['dJzca'],
                'mJBBN': 'launch',
                'rcqoR': function (_0x3ac795, _0x2f7132) {
                    const _0x27f012 = _0x1fb90b;
                    return _0x47f830[_0x27f012(843)](_0x3ac795, _0x2f7132);
                },
                'BkdBv': _0x47f830[_0x1fb90b(844)],
                'ZGqUH': 'open',
                'sAYAR': _0x47f830['pqcMC'],
                'IRvFG': _0x47f830['OhHAI'],
                'wurgy': _0x47f830[_0x1fb90b(845)],
                'SwLsT': _0x47f830['TaeSP'],
                'nbiId': _0x47f830[_0x1fb90b(846)]
            };
        _0x47f830[_0x1fb90b(847)](beforeEach, () => {
            const _0x4f0fcc = _0x1fb90b, _0x28a696 = _0x47f830['fJnMn'][_0x4f0fcc(779)]('|');
            let _0x3fa121 = 5266 + 7425 + -12691;
            while (!![]) {
                switch (_0x28a696[_0x3fa121++]) {
                case '0':
                    sinon[_0x4f0fcc(687)](commitInfo, 'getRemoteOrigin')[_0x4f0fcc(686)](_0x47f830[_0x4f0fcc(848)]);
                    continue;
                case '1':
                    sinon[_0x4f0fcc(687)](electron[_0x4f0fcc(765)], 'on')[_0x4f0fcc(697)](_0x47f830['GEiMQ'])[_0x4f0fcc(767)]();
                    continue;
                case '2':
                    sinon['stub'](runMode, _0x47f830['ZlsJJ'])[_0x4f0fcc(686)]();
                    continue;
                case '3':
                    sinon[_0x4f0fcc(687)](runMode, _0x47f830[_0x4f0fcc(849)])[_0x4f0fcc(686)]({ 'stats': { 'failures': 0 } });
                    continue;
                case '4':
                    sinon['stub'](browsers, _0x47f830['rYOjH']);
                    continue;
                }
                break;
            }
        }), _0x47f830[_0x1fb90b(850)](it, _0x47f830['pjmlq'], function () {
            const _0x31185c = _0x1fb90b;
            return cypress[_0x31185c(654)]([_0x31185c(851) + this['todosPath']])[_0x31185c(731)](() => {
                const _0x41da5f = _0x31185c;
                expect(browsers[_0x41da5f(768)])['to']['be'][_0x41da5f(708)](ELECTRON_BROWSER), this[_0x41da5f(703)](114 * 66 + -5907 + -1617);
            });
        }), _0x47f830[_0x1fb90b(852)](it, _0x47f830[_0x1fb90b(853)], function () {
            const _0x4351f6 = _0x1fb90b;
            return sinon[_0x4351f6(698)](cypress, _0x47f830[_0x4351f6(854)]), cypress[_0x4351f6(654)]([
                _0x4351f6(851) + this['todosPath'],
                _0x47f830['HNFJn']
            ])[_0x4351f6(731)](() => {
                const _0x519f98 = _0x4351f6;
                _0x42ed7b[_0x519f98(855)](expect, browsers['open'])['to']['be'][_0x519f98(708)](ELECTRON_BROWSER), this[_0x519f98(703)](-12 * -463 + 2848 + -191 * 44), _0x42ed7b[_0x519f98(856)](expect, cypress[_0x519f98(511)])['to']['be'][_0x519f98(857)], _0x42ed7b[_0x519f98(856)](expect, cypress[_0x519f98(511)])['to']['be'][_0x519f98(704)](_0x42ed7b['POFDN']);
                const _0x43d289 = cypress['startInMode'][_0x519f98(858)][_0x519f98(859)][8316 + -6831 + -1484];
                _0x42ed7b['CsCyX'](expect, _0x43d289)['to'][_0x519f98(711)]({
                    'headless': !![],
                    'headed': ![]
                });
            });
        }), it(_0x47f830[_0x1fb90b(860)], function () {
            const _0x534039 = _0x1fb90b;
            expect(() => cypress[_0x534039(654)]([
                '--run-project=' + this['todosPath'],
                '--headless',
                _0x534039(861)
            ]))['to']['throw'](_0x47f830[_0x534039(862)]);
        }), _0x47f830[_0x1fb90b(863)](describe, _0x47f830[_0x1fb90b(864)], () => {
            const _0x12dda9 = _0x1fb90b, _0x3f20e3 = {
                    'ADnnl': function (_0x4c9550, _0x4e0038) {
                        return _0x4c9550(_0x4e0038);
                    },
                    'utVpB': function (_0x5964d0, _0x4f2b97) {
                        return _0x5964d0(_0x4f2b97);
                    },
                    'yjxcr': _0x12dda9(524)
                };
            _0x47f830[_0x12dda9(865)](beforeEach, () => {
                const _0x22d76d = _0x12dda9;
                sinon[_0x22d76d(698)](argsUtil, 'toObject');
            }), _0x47f830[_0x12dda9(866)](it, _0x47f830[_0x12dda9(867)], function () {
                const _0x5b5415 = _0x12dda9;
                return cypress[_0x5b5415(654)]([
                    '--',
                    _0x5b5415(851) + this['todosPath']
                ])['then'](() => {
                    const _0x10ff67 = _0x5b5415;
                    _0x3f20e3[_0x10ff67(868)](expect, argsUtil[_0x10ff67(869)])['to'][_0x10ff67(870)][_0x10ff67(871)]['calledWith']([_0x10ff67(851) + this[_0x10ff67(672)]]), expect(browsers[_0x10ff67(768)])['to']['be'][_0x10ff67(708)](ELECTRON_BROWSER), this[_0x10ff67(703)](17 * 183 + -7571 + 4460);
                });
            }), _0x47f830[_0x12dda9(872)](it, _0x47f830[_0x12dda9(873)], function () {
                const _0x3c13a7 = _0x12dda9;
                return cypress[_0x3c13a7(654)]([
                    '--run-project=' + this[_0x3c13a7(672)],
                    '--',
                    _0x3c13a7(524)
                ])['then'](() => {
                    const _0x2f6552 = _0x3c13a7;
                    _0x3f20e3[_0x2f6552(874)](expect, argsUtil[_0x2f6552(869)])['to']['have'][_0x2f6552(871)][_0x2f6552(704)]([
                        _0x2f6552(851) + this[_0x2f6552(672)],
                        _0x3f20e3[_0x2f6552(875)]
                    ]), _0x3f20e3[_0x2f6552(874)](expect, browsers['open'])['to']['be'][_0x2f6552(708)](ELECTRON_BROWSER), this[_0x2f6552(703)](6596 + 4 * 51 + -6800);
                });
            });
        }), _0x47f830[_0x1fb90b(863)](it, _0x47f830['CXEEf'], function () {
            const _0x1028dd = _0x1fb90b;
            return sinon[_0x1028dd(687)](runMode, _0x47f830[_0x1028dd(876)])[_0x1028dd(686)]({ 'totalFailed': 10 }), cypress[_0x1028dd(654)]([_0x1028dd(851) + this[_0x1028dd(672)]])[_0x1028dd(731)](() => {
                const _0x3d5a8d = _0x1028dd;
                this[_0x3d5a8d(703)](2363 + 94 * 29 + -1 * 5079);
            });
        }), _0x47f830['trLxE'](it, 'does not generate a project id even if missing one', function () {
            const _0x4e4ee0 = _0x1fb90b, _0x5cdd5e = {
                    'RhSKe': _0x47f830['KHLAk'],
                    'jfmnp': function (_0x15c2f2, _0x73dbe2) {
                        const _0x59fa1d = _0x501e;
                        return _0x47f830[_0x59fa1d(877)](_0x15c2f2, _0x73dbe2);
                    },
                    'MMfob': _0x47f830[_0x4e4ee0(878)]
                };
            return sinon[_0x4e4ee0(687)](api, _0x47f830[_0x4e4ee0(879)]), user[_0x4e4ee0(880)]({ 'authToken': _0x4e4ee0(881) })['then'](() => {
                const _0x4bab63 = _0x4e4ee0;
                return cypress[_0x4bab63(654)](['--run-project=' + this[_0x4bab63(677)]]);
            })[_0x4e4ee0(731)](() => {
                this['expectExitWith'](-5 * -372 + -3878 * 2 + -1474 * -4);
            })['then'](() => {
                const _0x27c24e = _0x4e4ee0;
                return _0x42ed7b[_0x27c24e(882)](expect, api[_0x27c24e(883)])['not']['to']['be'][_0x27c24e(884)], new ProjectBase({
                    'projectRoot': this[_0x27c24e(677)],
                    'testingType': _0x42ed7b[_0x27c24e(885)]
                })[_0x27c24e(886)]()[_0x27c24e(731)](() => {
                    const _0x104f3c = _0x27c24e;
                    throw new Error(_0x5cdd5e[_0x104f3c(887)]);
                })[_0x27c24e(888)](_0x498869 => {
                    const _0x5411ad = _0x27c24e;
                    _0x5cdd5e[_0x5411ad(889)](expect, _0x498869[_0x5411ad(890)])['to']['eq'](_0x5cdd5e['MMfob']);
                });
            });
        }), _0x47f830[_0x1fb90b(891)](it, _0x47f830[_0x1fb90b(892)], function () {
            const _0x28bb0d = _0x1fb90b;
            return cache['getProjectRoots']()[_0x28bb0d(731)](_0x51ea8d => {
                const _0x5d0905 = _0x28bb0d;
                return expect(_0x51ea8d[_0x5d0905(893)])['to']['eq'](-1 * -2269 + 751 * -7 + -18 * -166), cypress['start']([_0x5d0905(851) + this[_0x5d0905(672)]]);
            })[_0x28bb0d(731)](() => {
                const _0x5e6382 = _0x28bb0d;
                return cache[_0x5e6382(894)]();
            })[_0x28bb0d(731)](_0x3cb09b => {
                const _0x208e70 = _0x28bb0d;
                expect(_0x3cb09b[_0x208e70(893)])['to']['eq'](377 * 26 + 1 * -4283 + -5519);
            });
        }), _0x47f830[_0x1fb90b(895)](it, _0x47f830['RoCnX'], function () {
            const _0x40e10c = _0x1fb90b, _0x332a5d = {
                    'jKXxL': function (_0x14f4e2, _0x2d9c2e) {
                        return _0x47f830['utKYd'](_0x14f4e2, _0x2d9c2e);
                    },
                    'BgOFW': _0x40e10c(518)
                }, _0x7aa5c0 = path[_0x40e10c(896)](cwd(), this[_0x40e10c(672)]);
            return cypress['start']([
                _0x40e10c(851) + this[_0x40e10c(672)],
                _0x40e10c(897) + _0x7aa5c0 + _0x40e10c(898)
            ])[_0x40e10c(731)](() => {
                const _0x11960d = _0x40e10c;
                _0x332a5d[_0x11960d(899)](expect, browsers[_0x11960d(768)])['to']['be'][_0x11960d(708)](ELECTRON_BROWSER, { 'url': _0x332a5d[_0x11960d(900)] }), this[_0x11960d(703)](-1 * 5924 + -84 + -4 * -1502);
            });
        }), _0x47f830[_0x1fb90b(895)](it, _0x47f830['PNbQf'], function () {
            const _0x4b3a54 = _0x1fb90b;
            return cypress[_0x4b3a54(654)]([
                _0x4b3a54(851) + this['idsPath'],
                '--spec=' + this['idsPath'] + _0x4b3a54(901),
                _0x47f830[_0x4b3a54(736)],
                _0x47f830[_0x4b3a54(902)]
            ])['then'](() => {
                const _0x17be3e = _0x4b3a54;
                _0x42ed7b[_0x17be3e(882)](expect, browsers['open'])['to']['be'][_0x17be3e(708)](ELECTRON_BROWSER, { 'url': _0x42ed7b['pNdND'] }), this[_0x17be3e(703)](-2356 + -8808 + 11164);
            });
        }), _0x47f830[_0x1fb90b(895)](it, _0x47f830[_0x1fb90b(903)], function () {
            const _0xaec687 = _0x1fb90b, _0x5982a0 = {
                    'ejpgZ': function (_0x16ac72, _0x4ced0b) {
                        return _0x42ed7b['HKTOU'](_0x16ac72, _0x4ced0b);
                    },
                    'QhaUC': _0xaec687(518)
                };
            return cypress[_0xaec687(654)]([
                _0xaec687(851) + this[_0xaec687(672)],
                _0xaec687(897) + this[_0xaec687(672)] + _0xaec687(898)
            ])[_0xaec687(731)](() => {
                const _0x110b7a = _0xaec687;
                _0x5982a0[_0x110b7a(904)](expect, browsers[_0x110b7a(768)])['to']['be'][_0x110b7a(708)](ELECTRON_BROWSER, { 'url': _0x5982a0[_0x110b7a(905)] }), this[_0x110b7a(703)](-6 * 394 + -1 * -8490 + -6126);
            });
        }), it(_0x47f830[_0x1fb90b(906)], function () {
            const _0xfc339c = _0x1fb90b, _0x257731 = {
                    'xREKe': function (_0x112630, _0x1e9076) {
                        const _0x21ce0b = _0x501e;
                        return _0x47f830[_0x21ce0b(907)](_0x112630, _0x1e9076);
                    },
                    'qOGxj': _0x47f830[_0xfc339c(795)]
                };
            return cypress['start']([
                _0xfc339c(851) + this[_0xfc339c(672)],
                '--config=testFiles=' + this[_0xfc339c(672)] + _0xfc339c(898)
            ])['then'](() => {
                const _0x7ee22a = _0xfc339c;
                _0x257731['xREKe'](expect, browsers[_0x7ee22a(768)])['to']['be']['calledWithMatch'](ELECTRON_BROWSER, { 'url': _0x257731['qOGxj'] }), this[_0x7ee22a(703)](3 * 419 + 7270 + -8527);
            });
        }), _0x47f830[_0x1fb90b(908)](it, _0x47f830[_0x1fb90b(909)], function () {
            const _0x2de402 = _0x1fb90b, _0x12820e = {
                    'SHLpL': function (_0x33a874, _0x2444e9) {
                        const _0x273891 = _0x501e;
                        return _0x42ed7b[_0x273891(910)](_0x33a874, _0x2444e9);
                    },
                    'osTZu': _0x2de402(911)
                };
            return cypress[_0x2de402(654)]([
                '--run-project=' + this[_0x2de402(672)],
                _0x42ed7b[_0x2de402(912)]
            ])[_0x2de402(731)](() => {
                const _0x4f1903 = _0x2de402;
                _0x42ed7b[_0x4f1903(882)](expect, browsers[_0x4f1903(768)])['to']['be'][_0x4f1903(708)](ELECTRON_BROWSER, { 'url': _0x42ed7b['Jhvjk'] });
            })[_0x2de402(731)](() => {
                const _0x6abd9a = _0x2de402;
                _0x12820e[_0x6abd9a(913)](expect, browsers[_0x6abd9a(768)])['to']['be']['calledWithMatch'](ELECTRON_BROWSER, { 'url': _0x12820e[_0x6abd9a(914)] }), this[_0x6abd9a(703)](8135 + -1401 * -6 + -119 * 139);
            });
        }), _0x47f830[_0x1fb90b(915)](it, _0x1fb90b(916), function () {
            const _0x5ecc5e = _0x1fb90b, _0x406a08 = {
                    'mGdSI': function (_0xe0c7b9, _0xdfc497) {
                        const _0x26e059 = _0x501e;
                        return _0x42ed7b[_0x26e059(917)](_0xe0c7b9, _0xdfc497);
                    },
                    'HLCvj': function (_0x334a92, _0x18c078) {
                        const _0x4c861b = _0x501e;
                        return _0x42ed7b[_0x4c861b(918)](_0x334a92, _0x18c078);
                    }
                }, _0x5bd7d9 = sinon[_0x5ecc5e(698)](Watchers['prototype'], 'watch'), _0x10e984 = sinon[_0x5ecc5e(698)](Watchers['prototype'], _0x42ed7b[_0x5ecc5e(919)]);
            return cypress[_0x5ecc5e(654)]([_0x5ecc5e(851) + this['pluginConfig']])[_0x5ecc5e(731)](() => {
                const _0x52a996 = _0x5ecc5e;
                _0x406a08[_0x52a996(920)](expect, _0x10e984)['not']['to']['be'][_0x52a996(884)], _0x406a08['HLCvj'](expect, _0x5bd7d9)['not']['to']['be']['called'], this[_0x52a996(703)](-4965 + -307 * 6 + 6807 * 1);
            });
        }), _0x47f830[_0x1fb90b(915)](it, 'scaffolds out integration and example specs if they do not exist when not runMode', function () {
            const _0x46d63a = _0x1fb90b, _0x2b5bcc = {
                    'BjBuA': _0x42ed7b[_0x46d63a(921)],
                    'mYRoY': _0x42ed7b[_0x46d63a(922)],
                    'Ugtge': _0x42ed7b[_0x46d63a(923)],
                    'ZdYbp': _0x46d63a(924),
                    'VNvGj': _0x46d63a(925),
                    'PaxKR': _0x42ed7b[_0x46d63a(926)],
                    'oeQtS': _0x42ed7b[_0x46d63a(927)],
                    'FCfFT': _0x42ed7b[_0x46d63a(928)]
                };
            return config['get'](this[_0x46d63a(675)])[_0x46d63a(731)](_0x3521c5 => {
                const _0x264946 = _0x46d63a;
                return fs[_0x264946(929)](_0x3521c5[_0x264946(930)])[_0x264946(731)](() => {
                    const _0xa86764 = _0x264946;
                    throw new Error(_0x2b5bcc[_0xa86764(931)]);
                })['catch'](() => {
                    const _0x45a3cc = _0x264946;
                    return cypress[_0x45a3cc(654)]([
                        _0x45a3cc(851) + this[_0x45a3cc(675)],
                        _0x2b5bcc['mYRoY']
                    ]);
                })[_0x264946(731)](() => {
                    const _0x4f9d6f = _0x264946;
                    return fs[_0x4f9d6f(929)](_0x3521c5[_0x4f9d6f(930)]);
                })[_0x264946(731)](() => {
                    const _0x34613b = _0x264946;
                    return Promise[_0x34613b(473)](fs[_0x34613b(929)](path[_0x34613b(473)](_0x3521c5['integrationFolder'], _0x2b5bcc[_0x34613b(932)], _0x2b5bcc['ZdYbp'])), fs[_0x34613b(929)](path['join'](_0x3521c5[_0x34613b(930)], _0x2b5bcc[_0x34613b(933)], _0x2b5bcc['PaxKR'])), fs['statAsync'](path[_0x34613b(473)](_0x3521c5['integrationFolder'], _0x34613b(925), _0x2b5bcc[_0x34613b(934)])), fs[_0x34613b(929)](path[_0x34613b(473)](_0x3521c5[_0x34613b(930)], _0x34613b(925), _0x2b5bcc[_0x34613b(935)])));
                });
            });
        }), _0x47f830[_0x1fb90b(936)](it, _0x47f830['fHeUN'], function () {
            const _0x4632cc = _0x1fb90b, _0x22e424 = function (_0x2a5ba8, _0x3e8091) {
                    const _0x570b6d = _0x501e;
                    if (!_0x2a5ba8[_0x570b6d(937)]())
                        throw new Error(_0x570b6d(938) + _0x3e8091);
                    _0x42ed7b[_0x570b6d(918)](expect, _0x2a5ba8[_0x570b6d(939)]())['to'][_0x570b6d(870)][_0x570b6d(940)](_0x42ed7b[_0x570b6d(941)], _0x42ed7b[_0x570b6d(942)]);
                };
            return Promise[_0x4632cc(943)]([
                fs[_0x4632cc(929)](path['join'](this[_0x4632cc(675)], _0x42ed7b[_0x4632cc(944)]))['reflect'](),
                fs[_0x4632cc(929)](path[_0x4632cc(473)](this[_0x4632cc(675)], _0x42ed7b[_0x4632cc(945)]))['reflect']()
            ])['each'](_0x22e424)[_0x4632cc(731)](() => {
                const _0x4c334a = _0x4632cc;
                return cypress[_0x4c334a(654)](['--run-project=' + this[_0x4c334a(675)]]);
            })[_0x4632cc(731)](() => {
                const _0x1c7c17 = _0x4632cc;
                return Promise['all']([
                    fs[_0x1c7c17(929)](path[_0x1c7c17(473)](this[_0x1c7c17(675)], _0x1c7c17(547)))[_0x1c7c17(946)](),
                    fs[_0x1c7c17(929)](path['join'](this[_0x1c7c17(675)], _0x1c7c17(809)))[_0x1c7c17(946)]()
                ]);
            })[_0x4632cc(947)](_0x22e424)['then'](() => {
                const _0x8457cf = _0x4632cc;
                this['expectExitWithErr'](_0x42ed7b[_0x8457cf(948)], this[_0x8457cf(675)]);
            });
        }), it(_0x47f830[_0x1fb90b(949)], function () {
            const _0x3b9c0a = _0x1fb90b, _0x152707 = { 'kYfkx': _0x42ed7b[_0x3b9c0a(950)] };
            return settings[_0x3b9c0a(951)](this[_0x3b9c0a(675)], {})[_0x3b9c0a(731)](() => {
                const _0x220607 = _0x3b9c0a;
                return cypress[_0x220607(654)]([_0x220607(851) + this[_0x220607(675)]]);
            })[_0x3b9c0a(731)](() => {
                const _0x225513 = _0x3b9c0a;
                return fs[_0x225513(929)](path[_0x225513(473)](this['pristinePath'], 'cypress', _0x152707[_0x225513(952)]));
            })['then'](() => {
                const _0x1e1f65 = _0x3b9c0a;
                throw new Error(_0x42ed7b[_0x1e1f65(953)]);
            })[_0x3b9c0a(888)]({ 'code': _0x42ed7b[_0x3b9c0a(942)] }, () => {
            });
        }), _0x47f830[_0x1fb90b(936)](it, _0x47f830[_0x1fb90b(954)], function () {
            const _0x45d9c7 = _0x1fb90b, _0x2756be = { 'sUtwN': _0x42ed7b['vOnKB'] };
            return config[_0x45d9c7(593)](this['pristinePath'])[_0x45d9c7(731)](_0x19fe3b => {
                const _0x1d6491 = _0x45d9c7, _0x4f098c = {
                        'CWaFL': _0x42ed7b[_0x1d6491(955)],
                        'RtUWQ': _0x42ed7b[_0x1d6491(922)]
                    };
                return fs[_0x1d6491(929)](_0x19fe3b['fixturesFolder'])[_0x1d6491(731)](() => {
                    const _0x48ee62 = _0x1d6491;
                    throw new Error(_0x4f098c[_0x48ee62(956)]);
                })[_0x1d6491(888)](() => {
                    const _0x9eb2fc = _0x1d6491;
                    return cypress[_0x9eb2fc(654)]([
                        '--run-project=' + this[_0x9eb2fc(675)],
                        _0x4f098c[_0x9eb2fc(957)]
                    ]);
                })[_0x1d6491(731)](() => {
                    const _0x107d52 = _0x1d6491;
                    return fs['statAsync'](_0x19fe3b[_0x107d52(958)]);
                })['then'](() => {
                    const _0x5c5600 = _0x1d6491;
                    return fs['statAsync'](path[_0x5c5600(473)](_0x19fe3b[_0x5c5600(958)], _0x2756be[_0x5c5600(959)]));
                });
            });
        }), _0x47f830[_0x1fb90b(960)](it, _0x47f830[_0x1fb90b(961)], function () {
            const _0x25e71b = _0x1fb90b, _0xf8da20 = {
                    'EzsRT': _0x25e71b(533),
                    'CIlah': _0x47f830['opzZH'],
                    'TZgKw': _0x25e71b(545)
                }, _0x2c7903 = path[_0x25e71b(473)](this[_0x25e71b(675)], 'cypress/support');
            return config[_0x25e71b(593)](this[_0x25e71b(675)])[_0x25e71b(731)](() => {
                const _0x4d5db0 = _0x25e71b, _0x402373 = { 'VuOqC': _0x4d5db0(962) };
                return fs['statAsync'](_0x2c7903)[_0x4d5db0(731)](() => {
                    const _0x3adf3b = _0x4d5db0;
                    throw new Error(_0x3adf3b(963));
                })['catch']({ 'code': _0xf8da20[_0x4d5db0(964)] }, () => {
                    const _0x461b8f = _0x4d5db0;
                    return cypress[_0x461b8f(654)]([
                        _0x461b8f(851) + this[_0x461b8f(675)],
                        _0xf8da20[_0x461b8f(965)]
                    ]);
                })['then'](() => {
                    return fs['statAsync'](_0x2c7903);
                })[_0x4d5db0(731)](() => {
                    const _0x5d453c = _0x4d5db0;
                    return fs[_0x5d453c(929)](path[_0x5d453c(473)](_0x2c7903, _0x402373[_0x5d453c(966)]));
                })[_0x4d5db0(731)](() => {
                    return fs['statAsync'](path['join'](_0x2c7903, _0xf8da20['CIlah']));
                });
            });
        }), _0x47f830[_0x1fb90b(960)](it, _0x47f830['GjGls'], function (_0x1bc1d4) {
            const _0x4cf00b = _0x1fb90b, _0x288a11 = {
                    'KUnNV': function (_0x3f333b) {
                        const _0x4c18a8 = _0x501e;
                        return _0x42ed7b[_0x4c18a8(967)](_0x3f333b);
                    },
                    'OvinR': _0x42ed7b[_0x4cf00b(955)]
                };
            config[_0x4cf00b(593)](this[_0x4cf00b(684)])[_0x4cf00b(731)](_0x183ae3 => {
                const _0x216e54 = _0x4cf00b;
                return this[_0x216e54(968)] = _0x183ae3, fs[_0x216e54(929)](this[_0x216e54(968)][_0x216e54(958)]);
            })[_0x4cf00b(731)](() => {
                const _0x247d13 = _0x4cf00b;
                return settings[_0x247d13(969)](this['idsPath']);
            })['then'](_0x4cc953 => {
                const _0x14e888 = _0x4cf00b;
                return _0x4cc953[_0x14e888(958)] = ![], settings[_0x14e888(951)](this[_0x14e888(684)], _0x4cc953);
            })[_0x4cf00b(731)](() => {
                const _0xb222cb = _0x4cf00b;
                return cypress[_0xb222cb(654)]([_0xb222cb(851) + this[_0xb222cb(684)]]);
            })[_0x4cf00b(731)](() => {
                const _0x233434 = _0x4cf00b, _0xab838b = { 'Tlafy': _0x288a11[_0x233434(970)] };
                return fs[_0x233434(929)](this[_0x233434(968)][_0x233434(958)])[_0x233434(731)](() => {
                    const _0x482136 = _0x233434;
                    throw new Error(_0xab838b[_0x482136(971)]);
                })[_0x233434(888)](() => {
                    return _0x288a11['KUnNV'](_0x1bc1d4);
                });
            });
        }), _0x47f830['XUWAb'](it, _0x47f830[_0x1fb90b(972)], function () {
            const _0x4f4fad = _0x1fb90b;
            return cypress[_0x4f4fad(654)]([
                _0x4f4fad(851) + this[_0x4f4fad(672)],
                _0x4f4fad(861)
            ])[_0x4f4fad(731)](() => {
                const _0x5d0e10 = _0x4f4fad;
                expect(browsers[_0x5d0e10(768)])['to']['be'][_0x5d0e10(708)](ELECTRON_BROWSER, {
                    'proxyServer': _0x42ed7b[_0x5d0e10(973)],
                    'show': !![]
                }), this['expectExitWith'](-3 * 756 + -1 * 4870 + -83 * -86);
            });
        }), _0x47f830[_0x1fb90b(974)](it, _0x47f830[_0x1fb90b(975)], function () {
            const _0x408491 = _0x1fb90b, _0x21c88d = {
                    'Lxmuz': function (_0x46ff9f, _0x5a6e33) {
                        return _0x46ff9f(_0x5a6e33);
                    },
                    'hRQCK': _0x42ed7b[_0x408491(976)]
                };
            return sinon['spy'](Reporter, _0x42ed7b[_0x408491(977)]), cypress[_0x408491(654)]([_0x408491(851) + this[_0x408491(672)]])[_0x408491(731)](() => {
                const _0x4ee459 = _0x408491;
                _0x21c88d[_0x4ee459(978)](expect, Reporter[_0x4ee459(520)])['to']['be'][_0x4ee459(704)](_0x21c88d['hRQCK']), this[_0x4ee459(703)](-9910 + 7266 + -2644 * -1);
            });
        }), _0x47f830[_0x1fb90b(974)](it, _0x47f830[_0x1fb90b(979)], function () {
            const _0x1acd78 = _0x1fb90b;
            return sinon[_0x1acd78(698)](Reporter, _0x47f830[_0x1acd78(815)]), cypress['start']([
                '--run-project=' + this['todosPath'],
                _0x47f830[_0x1acd78(980)]
            ])['then'](() => {
                const _0x4f3839 = _0x1acd78;
                _0x42ed7b['dYGvF'](expect, Reporter['create'])['to']['be'][_0x4f3839(704)](_0x42ed7b[_0x4f3839(981)]), this['expectExitWith'](3318 + 1 * -7034 + -3716 * -1);
            });
        }), _0x47f830['sDDgU'](it, _0x47f830[_0x1fb90b(982)], function () {
            const _0x2d7208 = _0x1fb90b, _0x4c0f4a = {
                    'PIhFl': _0x42ed7b[_0x2d7208(983)],
                    'afZiA': function (_0x31b25d, _0x5dc89f) {
                        return _0x31b25d(_0x5dc89f);
                    }
                };
            return sinon[_0x2d7208(698)](Reporter, _0x42ed7b[_0x2d7208(977)]), config['get'](this[_0x2d7208(684)])[_0x2d7208(731)](_0x1511fd => {
                const _0x54c123 = _0x2d7208;
                return this[_0x54c123(968)] = _0x1511fd, settings[_0x54c123(969)](this[_0x54c123(684)]);
            })[_0x2d7208(731)](_0x49aa48 => {
                const _0x3b107e = _0x2d7208;
                return _0x49aa48[_0x3b107e(984)] = _0x4c0f4a[_0x3b107e(985)], settings[_0x3b107e(951)](this[_0x3b107e(684)], _0x49aa48);
            })[_0x2d7208(731)](() => {
                const _0x5cc393 = _0x2d7208;
                return cypress[_0x5cc393(654)]([_0x5cc393(851) + this[_0x5cc393(684)]]);
            })[_0x2d7208(731)](() => {
                const _0x7dccae = _0x2d7208;
                _0x4c0f4a['afZiA'](expect, Reporter[_0x7dccae(520)])['to']['be'][_0x7dccae(704)](_0x7dccae(551)), this['expectExitWith'](1 * 8741 + 23 * 27 + -9362);
            });
        }), _0x47f830[_0x1fb90b(986)](it, _0x1fb90b(987), function () {
            const _0x1c8581 = _0x1fb90b;
            return user[_0x1c8581(880)]({})[_0x1c8581(731)](() => {
                const _0xceacc2 = _0x1c8581;
                return cypress[_0xceacc2(654)]([_0xceacc2(851) + this[_0xceacc2(672)]]);
            })[_0x1c8581(731)](() => {
                this['expectExitWith'](-2209 * 1 + -7527 + 9736);
            });
        }), _0x47f830['SnTxg'](it, _0x47f830[_0x1fb90b(988)], function () {
            const _0x378353 = _0x1fb90b;
            return cypress[_0x378353(654)]([
                _0x378353(851) + this[_0x378353(672)],
                _0x47f830['suwAV']
            ])['then'](() => {
                const _0x327933 = _0x378353;
                expect(errors['warning'])['to']['be'][_0x327933(704)](_0x42ed7b[_0x327933(989)], _0x42ed7b['iWHsL']), _0x42ed7b['dYGvF'](expect, console[_0x327933(472)])['to']['be'][_0x327933(708)](_0x42ed7b[_0x327933(990)]), _0x42ed7b['dYGvF'](expect, console[_0x327933(472)])['to']['be'][_0x327933(708)](_0x42ed7b[_0x327933(991)]), _0x42ed7b[_0x327933(918)](expect, console['log'])['to']['be'][_0x327933(708)](_0x42ed7b[_0x327933(992)]);
            });
        }), _0x47f830[_0x1fb90b(993)](it, _0x47f830[_0x1fb90b(994)], function () {
            const _0x447c56 = _0x1fb90b, _0x14c69a = new Error(_0x447c56(995));
            return sinon[_0x447c56(687)](browsers, _0x447c56(996))[_0x447c56(997)](_0x14c69a), cypress[_0x447c56(654)]([_0x447c56(851) + this[_0x447c56(672)]])['then'](() => {
                const _0x50e324 = _0x447c56;
                _0x42ed7b[_0x50e324(998)](expect, errors[_0x50e324(485)])['to']['be'][_0x50e324(704)](_0x42ed7b[_0x50e324(999)], _0x14c69a[_0x50e324(1000)]), _0x42ed7b[_0x50e324(998)](expect, console['log'])['to']['be'][_0x50e324(708)](_0x42ed7b[_0x50e324(1001)]), _0x42ed7b['fobte'](expect, console['log'])['to']['be'][_0x50e324(708)](_0x14c69a[_0x50e324(713)]);
            });
        }), _0x47f830[_0x1fb90b(1002)](it, _0x47f830[_0x1fb90b(1003)], function () {
            const _0x15217f = _0x1fb90b, _0x590b91 = {
                    'xOkNS': function (_0x2ff519, _0x7bc738) {
                        const _0x32f665 = _0x501e;
                        return _0x42ed7b[_0x32f665(1004)](_0x2ff519, _0x7bc738);
                    },
                    'nInHP': _0x42ed7b[_0x15217f(989)],
                    'OZawK': _0x42ed7b[_0x15217f(1005)],
                    'VmDgF': function (_0x104db0, _0x25ef92) {
                        const _0x55e4ff = _0x15217f;
                        return _0x42ed7b[_0x55e4ff(1006)](_0x104db0, _0x25ef92);
                    },
                    'iCfaU': _0x15217f(1007)
                };
            return cypress[_0x15217f(654)]([
                _0x15217f(851) + this[_0x15217f(675)],
                _0x15217f(1008)
            ])[_0x15217f(731)](() => {
                const _0x3944c9 = _0x15217f;
                _0x590b91[_0x3944c9(1009)](expect, errors['warning'])[_0x3944c9(789)]['to']['be'][_0x3944c9(704)](_0x590b91[_0x3944c9(1010)], _0x590b91[_0x3944c9(1011)]), _0x590b91[_0x3944c9(1012)](expect, console['log'])['not']['to']['be'][_0x3944c9(708)](_0x590b91['iCfaU']);
            });
        }), _0x47f830[_0x1fb90b(1013)](it, _0x1fb90b(1014), function () {
            const _0x465b91 = _0x1fb90b;
            return cypress[_0x465b91(654)]([
                _0x465b91(851) + this[_0x465b91(672)],
                _0x42ed7b[_0x465b91(1015)],
                _0x42ed7b['pSUHP']
            ])[_0x465b91(731)](() => {
                const _0x5f4ed6 = _0x465b91;
                expect(errors[_0x5f4ed6(485)])[_0x5f4ed6(789)]['to']['be'][_0x5f4ed6(704)](_0x42ed7b[_0x5f4ed6(989)], _0x42ed7b[_0x5f4ed6(1005)]), _0x42ed7b['QIdyJ'](expect, console[_0x5f4ed6(472)])['not']['to']['be'][_0x5f4ed6(708)](_0x5f4ed6(1007));
            });
        }), _0x47f830[_0x1fb90b(1013)](it, _0x1fb90b(1016), function () {
            const _0x54ceac = _0x1fb90b, _0x4bd7fd = {
                    'JUfeJ': _0x54ceac(1017),
                    'QiDGy': _0x42ed7b['QNIGc']
                };
            return settings[_0x54ceac(951)](this['idsPath'], { 'supportFile': _0x54ceac(1018) })[_0x54ceac(731)](() => {
                return cypress['start'](['--run-project=' + this['idsPath']]);
            })[_0x54ceac(731)](() => {
                const _0x42b112 = _0x54ceac;
                this[_0x42b112(705)](_0x4bd7fd[_0x42b112(1019)], _0x4bd7fd[_0x42b112(1020)]);
            });
        }), _0x47f830[_0x1fb90b(1013)](it, _0x47f830['qAJPn'], function () {
            const _0x32ddad = _0x1fb90b, _0x452372 = {
                    'gWiUn': _0x32ddad(1021),
                    'ipaPs': function (_0x491f7c, _0x58908a, _0x57cdb9) {
                        const _0x10dc0a = _0x32ddad;
                        return _0x47f830[_0x10dc0a(1022)](_0x491f7c, _0x58908a, _0x57cdb9);
                    },
                    'VhxzY': _0x47f830['pxXre'],
                    'ubIbH': function (_0x460e31, _0x115975, _0x4f05b2) {
                        const _0x4a2f14 = _0x32ddad;
                        return _0x47f830[_0x4a2f14(1023)](_0x460e31, _0x115975, _0x4f05b2);
                    },
                    'rObxw': function (_0x294605, _0xaae7f8, _0x4e3b40) {
                        const _0x5ef7a9 = _0x32ddad;
                        return _0x47f830[_0x5ef7a9(1024)](_0x294605, _0xaae7f8, _0x4e3b40);
                    },
                    'ojCuF': 'browser names should be listed'
                };
            return browsers[_0x32ddad(768)]['restore'](), cypress[_0x32ddad(654)]([
                _0x32ddad(851) + this['idsPath'],
                _0x47f830[_0x32ddad(1025)]
            ])[_0x32ddad(731)](() => {
                const _0x534c99 = _0x32ddad, _0xf59d2e = {
                        'ttMrz': _0x534c99(1026),
                        'kEata': _0x534c99(1027)
                    };
                this[_0x534c99(705)](_0x452372[_0x534c99(1028)]);
                const _0x20cc81 = errors['log'][_0x534c99(859)], _0x1d3c5f = _[_0x534c99(1029)](_0x20cc81, _0x3c3901 => {
                        const _0x5a1472 = _0x534c99;
                        return _[_0x5a1472(1029)](_0x3c3901, _0xaa353f => {
                            const _0x3487ae = _0x5a1472;
                            return _0xaa353f['message'] && _0xaa353f['message'][_0x3487ae(1030)](_0xf59d2e[_0x3487ae(1031)]);
                        });
                    });
                _0x452372[_0x534c99(1032)](expect, _0x1d3c5f, _0x452372['VhxzY'])['to']['be']['ok'];
                const _0x11f654 = _[_0x534c99(1029)](_0x20cc81, _0x4e867d => {
                    const _0x476d8f = _0x534c99, _0x567916 = { 'KOkHt': _0xf59d2e[_0x476d8f(1033)] };
                    return _['find'](_0x4e867d, _0xf090f2 => {
                        const _0x3db55d = _0x476d8f;
                        return _0xf090f2[_0x3db55d(713)] && _0xf090f2[_0x3db55d(713)]['includes'](_0x567916[_0x3db55d(1034)]);
                    });
                });
                _0x452372['ubIbH'](expect, _0x11f654, 'supported browsers should be listed')['to']['be']['ok'];
                const _0x2370d3 = _[_0x534c99(1029)](_0x20cc81, _0x8dd91 => {
                    const _0x3a12e7 = _0x534c99;
                    return _[_0x3a12e7(1029)](_0x8dd91, _0x47fa00 => {
                        const _0x209103 = _0x3a12e7;
                        return _0x47fa00['message'] && _0x47fa00['message'][_0x209103(1030)]('Available browsers found on your system are:\n- chrome\n- chromium\n- chrome:canary\n- electron');
                    });
                });
                _0x452372['rObxw'](expect, _0x2370d3, _0x452372[_0x534c99(1035)])['to']['be']['ok'];
            });
        }), describe(_0x1fb90b(1036), function () {
            const _0x3b45bf = _0x1fb90b, _0x3b6305 = {
                    'mCaBs': _0x42ed7b[_0x3b45bf(1037)],
                    'CZUnl': _0x42ed7b[_0x3b45bf(1038)],
                    'QLWid': _0x3b45bf(1039),
                    'xxiZw': _0x42ed7b[_0x3b45bf(1040)]
                };
            _0x42ed7b[_0x3b45bf(1041)](it, _0x42ed7b['OOMvo'], function () {
                const _0x55e3ff = _0x3b45bf, _0x1a81c1 = {
                        'PGpnR': _0x42ed7b[_0x55e3ff(1042)],
                        'zcpXE': _0x42ed7b[_0x55e3ff(1043)]
                    };
                return cypress[_0x55e3ff(654)]([
                    '--run-project=' + this[_0x55e3ff(672)],
                    _0x42ed7b[_0x55e3ff(1044)]
                ])['then'](() => {
                    const _0x3abb01 = _0x55e3ff;
                    this['expectExitWithErr']('NO_SPECS_FOUND', _0x1a81c1[_0x3abb01(1045)]), this[_0x3abb01(705)](_0x3abb01(1046), _0x1a81c1['zcpXE']), this[_0x3abb01(705)](_0x3abb01(1046), this[_0x3abb01(672)]);
                });
            }), _0x42ed7b[_0x3b45bf(1047)](it, _0x42ed7b[_0x3b45bf(1048)], function () {
                const _0x505b81 = _0x3b45bf, _0xecd18 = {
                        'AIiKF': _0x42ed7b['vnASA'],
                        'MSeTE': _0x505b81(1046)
                    };
                return cypress[_0x505b81(654)]([
                    '--run-project=' + this[_0x505b81(672)],
                    _0x505b81(897) + this[_0x505b81(672)] + '/tests/path/to/spec'
                ])[_0x505b81(731)](() => {
                    const _0x49ecd0 = _0x505b81;
                    this['expectExitWithErr'](_0x49ecd0(1046), _0xecd18[_0x49ecd0(1049)]), this[_0x49ecd0(705)](_0xecd18['MSeTE'], this[_0x49ecd0(672)]);
                });
            }), it(_0x3b45bf(1050), function () {
                const _0x201ce5 = _0x3b45bf;
                return cypress[_0x201ce5(654)]([
                    _0x201ce5(851) + this['todosPath'],
                    _0x3b6305[_0x201ce5(1051)]
                ])['then'](() => {
                    const _0x358939 = _0x201ce5;
                    this[_0x358939(705)](_0x3b6305[_0x358939(1052)], _0x3b6305['CZUnl']), this[_0x358939(705)](_0x3b6305['mCaBs'], _0x3b6305[_0x358939(1053)]);
                });
            });
        }), _0x47f830['sSpGp'](it, _0x47f830[_0x1fb90b(1054)], function () {
            const _0x25e8a8 = _0x1fb90b;
            return fs['writeFileAsync'](this[_0x25e8a8(672)] + _0x25e8a8(1055), _0x47f830['ymicl'])[_0x25e8a8(731)](() => {
                const _0x4c148c = _0x25e8a8;
                return cypress[_0x4c148c(654)](['--run-project=' + this[_0x4c148c(672)]]);
            })[_0x25e8a8(731)](() => {
                const _0x1ea718 = _0x25e8a8;
                this['expectExitWithErr'](_0x1ea718(1056), this[_0x1ea718(672)]);
            });
        }), it(_0x1fb90b(1057), function () {
            const _0x2de035 = _0x1fb90b, _0x483180 = { 'vAnAb': 'ERROR_READING_FILE' };
            return fs[_0x2de035(1058)](this[_0x2de035(672)] + _0x2de035(1059), _0x2de035(1060))['then'](() => {
                const _0x2f041f = _0x2de035;
                return cypress[_0x2f041f(654)]([_0x2f041f(851) + this['todosPath']]);
            })[_0x2de035(731)](() => {
                const _0x4796e9 = _0x2de035;
                this[_0x4796e9(705)](_0x483180[_0x4796e9(1061)], this[_0x4796e9(672)]);
            });
        }), _0x47f830['JiDwX'](it, _0x47f830[_0x1fb90b(1062)], function () {
            const _0x505d36 = _0x1fb90b;
            return settings[_0x505d36(951)](this['todosPath'], { 'baseUrl': _0x42ed7b[_0x505d36(1063)] })[_0x505d36(731)](() => {
                const _0x6a606 = _0x505d36;
                return cypress[_0x6a606(654)]([_0x6a606(851) + this[_0x6a606(672)]]);
            })[_0x505d36(731)](() => {
                const _0x2bfdaa = _0x505d36;
                this[_0x2bfdaa(705)](_0x2bfdaa(1064), _0x2bfdaa(809));
            });
        }), _0x47f830['JiDwX'](it, _0x47f830['igtMC'], function () {
            const _0xd83d85 = _0x1fb90b, _0x3c283e = {
                    'UkZvR': _0x47f830[_0xd83d85(1065)],
                    'bpwfK': _0x47f830['oBdBL'],
                    'akNrc': _0x47f830[_0xd83d85(1066)]
                };
            return cypress['start']([
                _0xd83d85(851) + this['todosPath'],
                _0x47f830[_0xd83d85(1067)]
            ])[_0xd83d85(731)](() => {
                const _0x31f71a = _0xd83d85;
                this[_0x31f71a(705)](_0x31f71a(834), _0x3c283e['UkZvR']), this[_0x31f71a(705)](_0x3c283e['bpwfK'], _0x3c283e['akNrc']);
            });
        }), _0x47f830[_0x1fb90b(1068)](it, _0x1fb90b(1069), function () {
            const _0x1cc736 = _0x1fb90b, _0x1f91ad = {
                    'WTnDB': _0x42ed7b[_0x1cc736(1070)],
                    'ENlFm': _0x42ed7b[_0x1cc736(1063)],
                    'slevF': _0x42ed7b[_0x1cc736(1071)]
                };
            return process[_0x1cc736(1072)]['CYPRESS_BASE_URL'] = _0x42ed7b[_0x1cc736(1063)], cypress[_0x1cc736(654)]([_0x1cc736(851) + this[_0x1cc736(672)]])[_0x1cc736(731)](() => {
                const _0x616ad5 = _0x1cc736;
                this['expectExitWithErr'](_0x1f91ad['WTnDB'], _0x1f91ad['ENlFm']), this[_0x616ad5(705)](_0x1f91ad[_0x616ad5(1073)], _0x1f91ad[_0x616ad5(1074)]);
            });
        });
        const _0x43d89f = [{
                'old': _0x47f830[_0x1fb90b(1075)],
                'new': _0x47f830[_0x1fb90b(1076)]
            }];
        _0x43d89f[_0x1fb90b(1077)](function (_0x1149ac) {
            const _0x30e37b = { 'FfEEI': _0x42ed7b['wpjzF'] };
            it('logs error and exits when using an old configuration option: ' + _0x1149ac['old'], function () {
                const _0x1bb52f = _0x501e;
                return cypress[_0x1bb52f(654)]([
                    _0x1bb52f(851) + this[_0x1bb52f(672)],
                    _0x1bb52f(1078) + _0x1149ac['old'] + '=\'\''
                ])[_0x1bb52f(731)](() => {
                    const _0x9b3e8d = _0x1bb52f;
                    this['expectExitWithErr'](_0x30e37b[_0x9b3e8d(1079)], _0x1149ac['old']), this[_0x9b3e8d(705)](_0x30e37b[_0x9b3e8d(1079)], _0x1149ac[_0x9b3e8d(1080)]);
                });
            });
        }), _0x47f830[_0x1fb90b(1081)](it, _0x1fb90b(1082), function () {
            const _0x4ea38f = _0x1fb90b, _0x356a63 = {
                    'hwDBf': '777',
                    'xIEMF': _0x4ea38f(809)
                };
            if (_0x47f830[_0x4ea38f(1083)](process['geteuid'](), -1587 + -9125 + -8 * -1339))
                return;
            const _0x4a427b = path[_0x4ea38f(1084)](_0x4ea38f(1085)), _0x304ddd = path[_0x4ea38f(473)](_0x4a427b, _0x47f830[_0x4ea38f(1086)]);
            return fs[_0x4ea38f(1087)](_0x304ddd, '{}')['then'](() => {
                const _0x99f860 = _0x4ea38f;
                return fs[_0x99f860(1088)](_0x4a427b, _0x99f860(1089));
            })[_0x4ea38f(731)](() => {
                return cypress['start'](['--run-project=' + _0x4a427b]);
            })[_0x4ea38f(731)](() => {
                const _0x4a22e1 = _0x4ea38f;
                return fs[_0x4a22e1(1088)](_0x4a427b, _0x356a63[_0x4a22e1(1090)]);
            })[_0x4ea38f(731)](() => {
                const _0x1f1402 = _0x4ea38f;
                return fs[_0x1f1402(1091)](_0x4a427b);
            })[_0x4ea38f(731)](() => {
                const _0x585e35 = _0x4ea38f;
                this[_0x585e35(705)]('ERROR_READING_FILE', path[_0x585e35(473)](_0x4a427b, _0x356a63[_0x585e35(1092)]));
            });
        }), it(_0x47f830[_0x1fb90b(1093)], function () {
            const _0x537b33 = _0x1fb90b, _0x509e14 = { 'tOsNE': _0x42ed7b[_0x537b33(1094)] };
            return cypress[_0x537b33(654)]([
                '--run-project=' + this[_0x537b33(672)],
                '--reporter',
                _0x42ed7b[_0x537b33(1095)]
            ])[_0x537b33(731)](() => {
                const _0x2788eb = _0x537b33;
                this[_0x2788eb(705)](_0x509e14[_0x2788eb(1096)], _0x2788eb(836));
            });
        }), _0x47f830[_0x1fb90b(1097)](describe, _0x47f830[_0x1fb90b(1098)], () => {
            const _0x2804c7 = _0x1fb90b, _0x70d198 = { 'jWtff': _0x42ed7b['mOisU'] };
            _0x42ed7b[_0x2804c7(1099)](beforeEach, function () {
                const _0x56395c = _0x2804c7;
                return appData[_0x56395c(1100)]()['then'](() => {
                    const _0x4e18d4 = _0x56395c;
                    return savedState[_0x4e18d4(1101)](this[_0x4e18d4(672)]);
                })['then'](_0x58d083 => {
                    const _0x40a3e0 = _0x56395c;
                    this[_0x40a3e0(1102)] = appData[_0x40a3e0(1103)](_0x58d083);
                });
            }), _0x42ed7b[_0x2804c7(1047)](it, _0x42ed7b[_0x2804c7(1104)], function () {
                const _0x3816e0 = _0x2804c7;
                return cypress[_0x3816e0(654)]([
                    _0x3816e0(851) + this[_0x3816e0(672)],
                    '--spec=' + this[_0x3816e0(672)] + _0x3816e0(898)
                ])['then'](() => {
                    const _0x53a69c = _0x3816e0;
                    return this[_0x53a69c(703)](-5242 + -1286 + 6528), openProject[_0x53a69c(1105)]()[_0x53a69c(1106)]();
                })[_0x3816e0(731)](() => {
                    const _0x5853e9 = _0x3816e0;
                    return fs[_0x5853e9(929)](this[_0x5853e9(1102)])[_0x5853e9(731)](() => {
                        const _0x2bd33d = _0x5853e9;
                        throw new Error(_0x2bd33d(1107) + this[_0x2bd33d(1102)]);
                    })[_0x5853e9(888)]({ 'code': _0x70d198[_0x5853e9(1108)] }, () => {
                    });
                });
            });
        }), describe(_0x1fb90b(1109), () => {
            const _0x2ddd24 = _0x1fb90b;
            _0x47f830['LGREj'](it, _0x47f830[_0x2ddd24(1110)], function () {
                const _0x5dc492 = _0x2ddd24;
                return cypress['start']([_0x5dc492(851) + this[_0x5dc492(672)]])[_0x5dc492(731)](() => {
                    const _0xf6afa1 = _0x5dc492;
                    expect(openProject[_0xf6afa1(1105)]()['cfg'][_0xf6afa1(1109)])['to']['be']['false'], this[_0xf6afa1(703)](-2974 + -121 + 1 * 3095);
                });
            });
        }), _0x47f830[_0x1fb90b(1111)](describe, _0x47f830[_0x1fb90b(1112)], () => {
            const _0x3b873f = _0x1fb90b, _0x4647f2 = {
                    'kqMvZ': function (_0x5d94f7, _0x30cf09) {
                        const _0x28b8fc = _0x501e;
                        return _0x42ed7b[_0x28b8fc(1113)](_0x5d94f7, _0x30cf09);
                    },
                    'ttraJ': function (_0x507e7d, _0x5663cc) {
                        return _0x42ed7b['cyZdb'](_0x507e7d, _0x5663cc);
                    },
                    'UFfLT': _0x42ed7b[_0x3b873f(1114)]
                };
            _0x42ed7b[_0x3b873f(1047)](it, _0x42ed7b['KLzJe'], function () {
                const _0x2ac6af = _0x3b873f;
                return cypress['start']([
                    _0x2ac6af(851) + this[_0x2ac6af(672)],
                    _0x42ed7b['prQlV']
                ])[_0x2ac6af(731)](() => {
                    const _0x408cb7 = _0x2ac6af, {cfg: _0x312aa7} = openProject[_0x408cb7(1105)]();
                    _0x4647f2[_0x408cb7(1115)](expect, _0x312aa7[_0x408cb7(1116)])['to']['be']['false'], _0x4647f2[_0x408cb7(1115)](expect, _0x312aa7[_0x408cb7(1117)])['to']['eq'](-27 * 55 + -7967 + -137 * -78), _0x4647f2[_0x408cb7(1118)](expect, _0x312aa7[_0x408cb7(1119)][_0x408cb7(1116)])['to'][_0x408cb7(1120)]['eq']({
                        'value': ![],
                        'from': _0x408cb7(562)
                    }), _0x4647f2[_0x408cb7(1118)](expect, _0x312aa7[_0x408cb7(1119)]['requestTimeout'])['to'][_0x408cb7(1120)]['eq']({
                        'value': 1234,
                        'from': _0x4647f2[_0x408cb7(1121)]
                    }), this['expectExitWith'](3001 + 7460 + -10461);
                });
            }), it(_0x42ed7b[_0x3b873f(1122)], function () {
                const _0x59fc0e = _0x3b873f, _0x24159e = {
                        'Rtafm': function (_0x517be6, _0x53edae) {
                            const _0x127c1a = _0x501e;
                            return _0x42ed7b[_0x127c1a(1099)](_0x517be6, _0x53edae);
                        },
                        'mJPWr': function (_0x2ee430, _0x12b3fe) {
                            const _0x18c1c1 = _0x501e;
                            return _0x42ed7b[_0x18c1c1(1123)](_0x2ee430, _0x12b3fe);
                        },
                        'WJLKI': _0x59fc0e(528),
                        'sYHfN': function (_0x141ed8, _0xc18d6) {
                            const _0x34ffa4 = _0x59fc0e;
                            return _0x42ed7b[_0x34ffa4(1123)](_0x141ed8, _0xc18d6);
                        },
                        'omxGl': _0x42ed7b['Acmyv'],
                        'gDxPr': function (_0x23bbb3, _0x14e823) {
                            const _0x12a82f = _0x59fc0e;
                            return _0x42ed7b[_0x12a82f(1123)](_0x23bbb3, _0x14e823);
                        },
                        'KTjwD': _0x59fc0e(562)
                    };
                return plugins[_0x59fc0e(480)][_0x59fc0e(1124)](), cypress[_0x59fc0e(654)]([
                    _0x59fc0e(851) + this[_0x59fc0e(681)],
                    _0x59fc0e(560),
                    _0x42ed7b[_0x59fc0e(1125)]
                ])['then'](() => {
                    const _0x59fa9f = _0x59fc0e, {cfg: _0x23879f} = openProject[_0x59fa9f(1105)]();
                    _0x24159e[_0x59fa9f(1126)](expect, _0x23879f[_0x59fa9f(1116)])['to']['eq'](3 * 2785 + 4219 + 6277 * -2), _0x24159e[_0x59fa9f(1127)](expect, _0x23879f[_0x59fa9f(1128)])['to']['eq'](-6826 + -32 * 4 + -2 * -3727), _0x24159e[_0x59fa9f(1127)](expect, _0x23879f[_0x59fa9f(1072)])['to'][_0x59fa9f(1120)]['eq']({
                        'foo': _0x59fa9f(528),
                        'bar': _0x24159e['WJLKI']
                    }), _0x24159e['sYHfN'](expect, _0x23879f[_0x59fa9f(1119)]['videoCompression'])['to'][_0x59fa9f(1120)]['eq']({
                        'value': 20,
                        'from': _0x24159e[_0x59fa9f(1129)]
                    }), _0x24159e[_0x59fa9f(1130)](expect, _0x23879f[_0x59fa9f(1119)][_0x59fa9f(1117)])['to'][_0x59fa9f(1120)]['eq']({
                        'value': 1234,
                        'from': _0x24159e[_0x59fa9f(1131)]
                    }), expect(_0x23879f[_0x59fa9f(1119)]['env']['foo'])['to'][_0x59fa9f(1120)]['eq']({
                        'value': _0x24159e[_0x59fa9f(1132)],
                        'from': _0x24159e[_0x59fa9f(1129)]
                    }), _0x24159e[_0x59fa9f(1130)](expect, _0x23879f[_0x59fa9f(1119)][_0x59fa9f(1072)][_0x59fa9f(528)])['to']['deep']['eq']({
                        'value': _0x24159e['WJLKI'],
                        'from': _0x24159e[_0x59fa9f(1131)]
                    }), this[_0x59fa9f(703)](2 * 3653 + 6240 + 13546 * -1);
                });
            });
        }), _0x47f830['kwubs'](describe, _0x1fb90b(1133), () => {
            const _0xb8edbc = _0x1fb90b, _0x448f90 = {
                    'GnPKS': _0x47f830[_0xb8edbc(1134)],
                    'SSCOF': _0x47f830[_0xb8edbc(1135)],
                    'VRchJ': function (_0x179564, _0x422a6e, _0x465b4f) {
                        const _0x107efd = _0xb8edbc;
                        return _0x47f830[_0x107efd(1136)](_0x179564, _0x422a6e, _0x465b4f);
                    },
                    'qsKNz': _0x47f830[_0xb8edbc(1137)],
                    'uvwHb': _0xb8edbc(528),
                    'PbGUr': function (_0x1747be, _0x52fd73) {
                        return _0x47f830['utKYd'](_0x1747be, _0x52fd73);
                    },
                    'OigQf': _0x47f830['YPdgW'],
                    'QBWqY': _0x47f830['ujlQV'],
                    'XoHPB': _0x47f830[_0xb8edbc(1138)],
                    'OyPGg': _0xb8edbc(1139),
                    'FFoyM': _0x47f830[_0xb8edbc(1140)]
                };
            _0x47f830[_0xb8edbc(907)](beforeEach, () => {
                const _0x2e69fd = _0xb8edbc;
                plugins[_0x2e69fd(480)][_0x2e69fd(1124)](), browsers[_0x2e69fd(768)]['restore']();
                const _0x558277 = new EE();
                _0x558277[_0x2e69fd(1141)] = () => {
                    const _0x595852 = _0x2e69fd;
                    return _0x558277[_0x595852(1142)](_0x595852(484));
                }, _0x558277[_0x2e69fd(1143)] = () => {
                    const _0x53be78 = _0x2e69fd;
                    return _0x558277[_0x53be78(1142)](_0x53be78(1144));
                }, _0x558277[_0x2e69fd(1145)] = () => {
                    return ![];
                }, _0x558277[_0x2e69fd(1146)] = () => {
                }, _0x558277[_0x2e69fd(1147)] = () => {
                }, _0x558277[_0x2e69fd(1148)] = {
                    'debugger': {
                        'on': sinon[_0x2e69fd(687)](),
                        'attach': sinon['stub'](),
                        'sendCommand': sinon[_0x2e69fd(687)]()[_0x2e69fd(686)]()
                    },
                    'getOSProcessId': sinon[_0x2e69fd(687)](),
                    'setUserAgent': sinon[_0x2e69fd(687)](),
                    'session': {
                        'clearCache': sinon[_0x2e69fd(687)]()[_0x2e69fd(686)](),
                        'setProxy': sinon[_0x2e69fd(687)]()[_0x2e69fd(686)](),
                        'setUserAgent': sinon[_0x2e69fd(687)](),
                        'on': sinon[_0x2e69fd(687)](),
                        'removeListener': sinon[_0x2e69fd(687)]()
                    }
                }, _0x558277[_0x2e69fd(1149)] = sinon[_0x2e69fd(687)], _0x558277['setSize'] = sinon[_0x2e69fd(687)], sinon[_0x2e69fd(687)](launch, _0x42ed7b[_0x2e69fd(1150)])[_0x2e69fd(686)](_0x558277), sinon[_0x2e69fd(687)](Windows, _0x2e69fd(520))[_0x2e69fd(690)](_0x558277);
            }), _0x47f830['gnmIy'](context, _0x47f830[_0xb8edbc(1151)], () => {
                const _0x4d9c0e = _0xb8edbc, _0x5372b5 = {
                        'LFyyc': _0x448f90[_0x4d9c0e(1152)],
                        'fhVMD': _0x4d9c0e(1153),
                        'iVnfZ': function (_0x22ab24, _0x53c88d, _0x368122) {
                            return _0x448f90['VRchJ'](_0x22ab24, _0x53c88d, _0x368122);
                        },
                        'sYpwm': _0x4d9c0e(1154),
                        'PECNo': _0x448f90[_0x4d9c0e(1155)],
                        'GufxX': _0x448f90[_0x4d9c0e(1156)],
                        'ecnqs': _0x4d9c0e(642),
                        'HOjWp': function (_0x52368b, _0x2dd8c9) {
                            const _0x43ee59 = _0x4d9c0e;
                            return _0x448f90[_0x43ee59(1157)](_0x52368b, _0x2dd8c9);
                        },
                        'XPYJP': _0x4d9c0e(1158),
                        'kJsLb': _0x448f90['OigQf'],
                        'BRgGL': _0x448f90[_0x4d9c0e(1159)],
                        'khOtg': _0x448f90['XoHPB'],
                        'HvUob': _0x448f90[_0x4d9c0e(1160)],
                        'DSSIZ': _0x448f90[_0x4d9c0e(1161)]
                    };
                it(_0x448f90[_0x4d9c0e(1152)], function () {
                    const _0x5d2f7d = _0x4d9c0e, _0x564029 = {
                            'ensureMinimumProtocolVersion': sinon[_0x5d2f7d(687)]()['resolves'](),
                            'close': sinon[_0x5d2f7d(687)]()[_0x5d2f7d(686)](),
                            'on': sinon[_0x5d2f7d(687)](),
                            'send': sinon[_0x5d2f7d(687)]()
                        };
                    return sinon[_0x5d2f7d(687)](chromeBrowser, _0x5372b5[_0x5d2f7d(1162)])[_0x5d2f7d(686)](), sinon[_0x5d2f7d(687)](chromeBrowser, _0x5372b5[_0x5d2f7d(1163)])[_0x5d2f7d(686)](_0x564029), sinon['stub'](chromeBrowser, _0x5372b5['BRgGL'])[_0x5d2f7d(686)](), sinon[_0x5d2f7d(687)](chromeBrowser, _0x5d2f7d(1164))[_0x5d2f7d(686)](), sinon[_0x5d2f7d(687)](chromeBrowser, _0x5372b5[_0x5d2f7d(1165)])['returns'](), cypress[_0x5d2f7d(654)]([
                        '--run-project=' + this[_0x5d2f7d(682)],
                        _0x5372b5[_0x5d2f7d(1166)]
                    ])[_0x5d2f7d(731)](() => {
                        const _0x467773 = _0x5d2f7d, {args: _0x3321c9} = launch[_0x467773(1167)]['firstCall'], _0x274933 = _[_0x467773(1029)](TYPICAL_BROWSERS, { 'name': _0x5372b5[_0x467773(1168)] }), _0x535730 = R[_0x467773(1169)](_0x274933, {
                                'isHeadless': !![],
                                'isHeaded': ![]
                            });
                        expect(_0x3321c9[-4845 + 392 * 20 + 2995 * -1], _0x5372b5[_0x467773(1170)])['to']['deep']['eq'](_0x535730);
                        const _0x50a97f = _0x3321c9[-5620 + 9419 * -1 + -1 * -15041];
                        _0x5372b5[_0x467773(1171)](expect, _0x50a97f['slice'](4200 + 1279 + -5479, -8 * 540 + 6101 * 1 + -1 * 1777), _0x5372b5[_0x467773(1172)])['to']['deep']['eq']([
                            _0x5372b5[_0x467773(1168)],
                            _0x5372b5[_0x467773(1173)],
                            _0x5372b5[_0x467773(1174)],
                            _0x5372b5['ecnqs']
                        ]), this['expectExitWith'](-3 * 1163 + 3830 + -341), _0x5372b5['HOjWp'](expect, chromeBrowser[_0x467773(1175)])['to'][_0x467773(870)][_0x467773(871)][_0x467773(857)], _0x5372b5[_0x467773(1176)](expect, chromeBrowser[_0x467773(525)])['to'][_0x467773(870)][_0x467773(871)][_0x467773(857)], expect(chromeBrowser[_0x467773(1177)])['to']['have'][_0x467773(871)]['calledOnce'];
                    });
                }), _0x448f90[_0x4d9c0e(1178)](it, _0x4d9c0e(427), function () {
                    const _0x1fbb74 = _0x4d9c0e, _0x58e271 = sinon[_0x1fbb74(687)]();
                    return videoCapture[_0x1fbb74(654)][_0x1fbb74(690)]({ 'writeVideoFrame': _0x58e271 }), cypress[_0x1fbb74(654)]([
                        _0x1fbb74(851) + this[_0x1fbb74(682)],
                        _0x448f90[_0x1fbb74(1179)]
                    ])[_0x1fbb74(731)](() => {
                        const _0x2e84af = _0x1fbb74;
                        _0x5372b5[_0x2e84af(1176)](expect, Windows[_0x2e84af(520)])['to']['be'][_0x2e84af(708)](this[_0x2e84af(682)], {
                            'browser': _0x5372b5[_0x2e84af(1180)],
                            'foo': _0x5372b5[_0x2e84af(1174)],
                            'onNewWindow': sinon[_0x2e84af(1181)][_0x2e84af(1182)],
                            'onScreencastFrame': sinon[_0x2e84af(1181)][_0x2e84af(1182)]
                        }), this[_0x2e84af(703)](7505 + 237 * 14 + -10823);
                    });
                });
            });
        }), _0x47f830[_0x1fb90b(1111)](describe, _0x47f830[_0x1fb90b(1183)], () => {
            const _0x5c1dae = _0x1fb90b, _0x55e6c3 = { 'txmYO': _0x47f830[_0x5c1dae(1184)] };
            beforeEach(() => {
                const _0x4d62de = _0x5c1dae;
                return runMode[_0x4d62de(510)][_0x4d62de(686)]({ 'stats': { 'failures': 0 } });
            }), it(_0x47f830[_0x5c1dae(1185)], function () {
                const _0x185d1d = _0x5c1dae, _0x23b16f = {
                        'fuYmf': function (_0x3d6301, _0x2cfcb8) {
                            const _0xfa0ea8 = _0x501e;
                            return _0x42ed7b[_0xfa0ea8(1186)](_0x3d6301, _0x2cfcb8);
                        },
                        'jpzzx': function (_0x2848b0, _0x70bd06) {
                            const _0x531b59 = _0x501e;
                            return _0x42ed7b[_0x531b59(1186)](_0x2848b0, _0x70bd06);
                        }
                    }, _0x4857bb = sinon[_0x185d1d(698)](http[_0x185d1d(1187)]['prototype'], _0x42ed7b[_0x185d1d(1188)]), _0x228acb = sinon[_0x185d1d(698)](ServerE2E[_0x185d1d(693)], _0x42ed7b[_0x185d1d(1189)]);
                return cypress[_0x185d1d(654)]([
                    '--run-project=' + this[_0x185d1d(672)],
                    _0x42ed7b[_0x185d1d(1190)]
                ])[_0x185d1d(731)](() => {
                    const _0x142a87 = _0x185d1d;
                    expect(openProject[_0x142a87(1105)]()[_0x142a87(968)][_0x142a87(645)])['to']['eq'](-4022 * 2 + -1 * 9210 + 22798), _0x23b16f[_0x142a87(1191)](expect, _0x4857bb)['to']['be'][_0x142a87(704)](2 * 855 + 9336 + -5502), _0x23b16f[_0x142a87(1192)](expect, _0x228acb)['to']['be'][_0x142a87(708)]({ 'port': 5544 }), this[_0x142a87(703)](-6361 + -13 * -526 + -3 * 159);
                });
            }), _0x47f830[_0x5c1dae(1193)](it, _0x5c1dae(1194), async function () {
                const _0x22d3e9 = _0x5c1dae, _0x414093 = { 'IfehS': _0x42ed7b[_0x22d3e9(1195)] };
                sinon[_0x22d3e9(687)](ProjectBase['prototype'], _0x22d3e9(1196))[_0x22d3e9(690)]({
                    'use': () => {
                    }
                });
                let _0x141a00 = http[_0x22d3e9(1197)]();
                return _0x141a00 = Promise['promisifyAll'](_0x141a00), _0x141a00[_0x22d3e9(1198)](7465 + 3049 + -14 * 355, _0x42ed7b['wurgy'])[_0x22d3e9(731)](() => {
                    const _0x481fb8 = _0x22d3e9;
                    return cypress[_0x481fb8(654)]([
                        _0x481fb8(851) + this[_0x481fb8(672)],
                        _0x55e6c3[_0x481fb8(1199)]
                    ]);
                })[_0x22d3e9(731)](() => {
                    const _0x50438b = _0x22d3e9;
                    this[_0x50438b(705)]('PORT_IN_USE_SHORT', _0x414093['IfehS']);
                });
            });
        }), _0x47f830[_0x1fb90b(1200)](describe, _0x47f830['cEBbv'], () => {
            const _0x2abfd3 = _0x1fb90b, _0x63a1fa = {
                    'Ownpw': function (_0x14f518, _0x4bbb12) {
                        const _0x23cd03 = _0x501e;
                        return _0x47f830[_0x23cd03(907)](_0x14f518, _0x4bbb12);
                    },
                    'UmSOn': _0x47f830[_0x2abfd3(1201)],
                    'goosw': _0x47f830[_0x2abfd3(1202)],
                    'ONtCv': _0x47f830[_0x2abfd3(1203)],
                    'vcsQP': _0x2abfd3(1204)
                };
            _0x47f830[_0x2abfd3(791)](beforeEach, () => {
                const _0x716f30 = _0x2abfd3;
                return process[_0x716f30(1072)] = _['omit'](process[_0x716f30(1072)], _0x42ed7b[_0x716f30(1205)]), runMode[_0x716f30(510)][_0x716f30(686)]({ 'stats': { 'failures': 0 } });
            }), _0x47f830[_0x2abfd3(1206)](it, _0x47f830[_0x2abfd3(1207)], function () {
                const _0x51af62 = _0x2abfd3, _0x11bfb5 = {
                        'WrQJW': function (_0x3093f6, _0x3f5e24) {
                            const _0x3ce2b3 = _0x501e;
                            return _0x63a1fa[_0x3ce2b3(1208)](_0x3093f6, _0x3f5e24);
                        },
                        'ndKtm': _0x51af62(1209),
                        'zZByg': _0x63a1fa[_0x51af62(1210)],
                        'buhZY': _0x51af62(1211)
                    };
                return cypress[_0x51af62(654)]([
                    _0x51af62(851) + this[_0x51af62(672)],
                    _0x63a1fa['goosw'],
                    _0x63a1fa['ONtCv'],
                    _0x63a1fa[_0x51af62(1212)]
                ])[_0x51af62(731)](() => {
                    const _0x1e2468 = _0x51af62;
                    _0x11bfb5[_0x1e2468(1213)](expect, openProject[_0x1e2468(1105)]()['cfg'][_0x1e2468(1072)])['to']['deep']['eq']({
                        'version': _0x11bfb5[_0x1e2468(1214)],
                        'foo': _0x11bfb5[_0x1e2468(1215)],
                        'host': _0x11bfb5[_0x1e2468(1216)],
                        'baz': _0x1e2468(1217)
                    }), this['expectExitWith'](5021 + -2092 + -29 * 101);
                });
            }), _0x47f830[_0x2abfd3(1206)](it, _0x2abfd3(1218), function () {
                const _0x140dcb = _0x2abfd3, _0x55e58c = { 'UOAWF': _0x140dcb(1219) };
                return cypress[_0x140dcb(654)]([
                    _0x140dcb(851) + this[_0x140dcb(672)],
                    _0x140dcb(529),
                    '--env=FOO=,BAR=,BAZ=ipsum'
                ])[_0x140dcb(731)](() => {
                    const _0x6ce037 = _0x140dcb;
                    expect(openProject[_0x6ce037(1105)]()[_0x6ce037(968)][_0x6ce037(1072)])['to'][_0x6ce037(1120)]['eq']({
                        'FOO': '',
                        'BAR': '',
                        'BAZ': _0x55e58c[_0x6ce037(1220)]
                    }), this[_0x6ce037(703)](11 * -299 + 3012 + 1 * 277);
                });
            });
        }), describe(_0x47f830[_0x1fb90b(1221)], () => {
            const _0x3602b2 = _0x1fb90b, _0x175d3a = {
                    'GSmQg': _0x47f830[_0x3602b2(1222)],
                    'aIVfC': _0x47f830['GyoVg'],
                    'aIRUs': _0x47f830[_0x3602b2(1221)]
                };
            _0x47f830['bFhGK'](it, _0x47f830[_0x3602b2(1223)], function () {
                const _0x4c4749 = _0x3602b2;
                return fs['statAsync'](path[_0x4c4749(473)](this['pristinePath'], _0x42ed7b[_0x4c4749(945)]))[_0x4c4749(731)](() => {
                    const _0x4c0eac = _0x4c4749;
                    throw new Error(_0x175d3a[_0x4c0eac(1224)]);
                })[_0x4c4749(888)]({ 'code': _0x42ed7b[_0x4c4749(942)] }, () => {
                    const _0x5c3978 = _0x4c4749;
                    return cypress[_0x5c3978(654)]([
                        _0x5c3978(851) + this['pristinePath'],
                        _0x175d3a[_0x5c3978(1225)],
                        _0x175d3a['aIRUs'],
                        'false'
                    ])[_0x5c3978(731)](() => {
                        const _0x4bb290 = _0x5c3978;
                        this[_0x4bb290(703)](15 * -101 + 1217 + 298);
                    });
                });
            }), _0x47f830['bFhGK'](it, _0x3602b2(1226), function () {
                const _0x435904 = _0x3602b2, _0x15a051 = { 'zDnlG': _0x42ed7b[_0x435904(948)] };
                return this['filename'] = _0x42ed7b['nbiId'], fs[_0x435904(929)](path[_0x435904(473)](this[_0x435904(672)], this[_0x435904(1227)]))[_0x435904(731)](() => {
                    const _0x1f3e97 = _0x435904;
                    throw new Error(this[_0x1f3e97(1227)] + ' should not exist');
                })['catch']({ 'code': _0x42ed7b[_0x435904(942)] }, () => {
                    const _0x5e95e8 = _0x435904;
                    return cypress[_0x5e95e8(654)]([
                        _0x5e95e8(851) + this[_0x5e95e8(672)],
                        _0x5e95e8(533),
                        _0x175d3a['aIRUs'],
                        this['filename']
                    ])[_0x5e95e8(731)](() => {
                        const _0x1b16e0 = _0x5e95e8;
                        this[_0x1b16e0(705)](_0x15a051[_0x1b16e0(1228)], this[_0x1b16e0(1227)], this['todosPath']);
                    });
                });
            });
        });
    }), context(_0x47f830[_0x254dfb(1229)], () => {
        const _0x51de80 = _0x254dfb, _0x3224a3 = {
                'hKqfd': _0x47f830['GEiMQ'],
                'qclZg': _0x47f830['rYOjH'],
                'Umgym': _0x47f830[_0x51de80(1230)],
                'BSTzu': _0x47f830[_0x51de80(1231)],
                'pEbYq': _0x47f830[_0x51de80(1232)],
                'tNAOG': function (_0x3a1f49, _0x4b91c4) {
                    return _0x47f830['jHcjX'](_0x3a1f49, _0x4b91c4);
                },
                'jjUsx': _0x47f830[_0x51de80(1233)],
                'dQTYt': _0x47f830[_0x51de80(1234)],
                'Wvxhq': _0x47f830[_0x51de80(1235)],
                'XqWgN': function (_0x35aea3, _0x5a56c4) {
                    const _0x3765f2 = _0x51de80;
                    return _0x47f830[_0x3765f2(1236)](_0x35aea3, _0x5a56c4);
                },
                'nkzom': _0x47f830['HULXy'],
                'OqmCD': _0x47f830['nnOEi'],
                'GpLfU': _0x47f830[_0x51de80(1229)],
                'llhHD': _0x47f830[_0x51de80(1237)],
                'acbCi': function (_0x103695, _0x13193d) {
                    const _0x32e94d = _0x51de80;
                    return _0x47f830[_0x32e94d(1238)](_0x103695, _0x13193d);
                },
                'AuiGC': 'INDETERMINATE_CI_BUILD_ID-parallel-group 1',
                'ppuwO': _0x51de80(1239),
                'JsVGC': _0x47f830[_0x51de80(1240)],
                'QBloT': _0x47f830[_0x51de80(1241)],
                'vskYt': function (_0x27be4a, _0x28ee71) {
                    const _0x4a21ed = _0x51de80;
                    return _0x47f830[_0x4a21ed(1242)](_0x27be4a, _0x28ee71);
                },
                'xoCPx': 'RECORD_PARAMS_WITHOUT_RECORDING-ciBuildId 1',
                'XjKwh': _0x47f830[_0x51de80(1243)],
                'LcJlM': _0x47f830[_0x51de80(1244)],
                'WkUgg': function (_0x32655, _0x223933) {
                    return _0x32655(_0x223933);
                },
                'mzzQu': _0x47f830[_0x51de80(1245)],
                'LlsOg': _0x47f830[_0x51de80(1246)],
                'HEOot': _0x47f830[_0x51de80(1247)],
                'seJVa': _0x47f830[_0x51de80(1248)],
                'WJRhf': function (_0x335b0e, _0x299f28) {
                    const _0x4f16a3 = _0x51de80;
                    return _0x47f830[_0x4f16a3(1249)](_0x335b0e, _0x299f28);
                },
                'PwwRD': _0x47f830[_0x51de80(1250)],
                'GGKGq': 'RUN_GROUP_NAME_NOT_UNIQUE',
                'TmYiM': _0x47f830[_0x51de80(1251)],
                'qDNDM': _0x47f830[_0x51de80(1252)],
                'Jvvoz': _0x47f830['yLKkK'],
                'jKQhy': _0x47f830['yWBqp'],
                'XPrAc': function (_0x3d4075, _0x2439c8) {
                    const _0x45635d = _0x51de80;
                    return _0x47f830[_0x45635d(1253)](_0x3d4075, _0x2439c8);
                },
                'ghjmQ': _0x47f830['iqZQP'],
                'wQJqX': _0x47f830[_0x51de80(1254)],
                'uNdAf': _0x47f830[_0x51de80(1255)],
                'DLlxH': _0x47f830[_0x51de80(1256)],
                'Sgfqp': _0x47f830[_0x51de80(1257)],
                'lcDaT': _0x47f830[_0x51de80(1258)],
                'xZnvO': function (_0x44199f, _0x149fa8) {
                    const _0x2b23b4 = _0x51de80;
                    return _0x47f830[_0x2b23b4(1253)](_0x44199f, _0x149fa8);
                },
                'PKzVr': _0x47f830[_0x51de80(1259)],
                'ciVcU': _0x47f830[_0x51de80(1260)],
                'NFZHi': _0x47f830[_0x51de80(1261)]
            };
        _0x47f830['sGsGa'](beforeEach, function () {
            const _0x47d92d = _0x51de80;
            return sinon[_0x47d92d(687)](api, 'createRun')[_0x47d92d(686)](), sinon['stub'](electron[_0x47d92d(765)], 'on')['withArgs'](_0x3224a3[_0x47d92d(1262)])['yieldsAsync'](), sinon[_0x47d92d(687)](browsers, _0x3224a3[_0x47d92d(1263)]), sinon[_0x47d92d(687)](runMode, _0x3224a3['Umgym'])[_0x47d92d(686)](), sinon['stub'](runMode, _0x3224a3[_0x47d92d(1264)])[_0x47d92d(686)]({
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
                'video': _0x3224a3[_0x47d92d(1265)],
                'shouldUploadVideo': !![],
                'screenshots': [],
                'config': {},
                'spec': {}
            }), Promise['all']([
                user['set']({}),
                _0x3224a3['tNAOG'](getId, this[_0x47d92d(672)])[_0x47d92d(731)](_0x26c98f => {
                    this['projectId'] = _0x26c98f;
                })
            ]);
        }), _0x47f830[_0x51de80(1200)](it, _0x47f830[_0x51de80(1266)], function () {
            const _0x43a82d = _0x51de80, _0xfaa16d = {
                    'JxKcs': function (_0x5007b4, _0x116a45) {
                        return _0x5007b4(_0x116a45);
                    }
                };
            return sinon[_0x43a82d(687)](env, _0x43a82d(593))[_0x43a82d(697)](_0x47f830[_0x43a82d(1267)])[_0x43a82d(690)](this['projectId']), cypress['start']([
                _0x47f830[_0x43a82d(1268)],
                '--run-project=' + this[_0x43a82d(677)],
                _0x47f830[_0x43a82d(1229)],
                _0x43a82d(598)
            ])[_0x43a82d(731)](() => {
                const _0x2f1ba9 = _0x43a82d;
                _0xfaa16d['JxKcs'](expect, api[_0x2f1ba9(1269)])['to']['be'][_0x2f1ba9(708)]({ 'projectId': this[_0x2f1ba9(1270)] }), _0xfaa16d[_0x2f1ba9(1271)](expect, errors['warning'])[_0x2f1ba9(789)]['to']['be'][_0x2f1ba9(884)], this[_0x2f1ba9(703)](-481 + -1453 + 149 * 13);
            });
        }), _0x47f830[_0x51de80(1272)](it, _0x47f830[_0x51de80(1273)], function () {
            const _0x543da8 = _0x51de80;
            return sinon['stub'](env, _0x47f830[_0x543da8(1274)])['withArgs'](_0x47f830[_0x543da8(1267)])['returns'](_0x47f830['yONPw'])[_0x543da8(697)](_0x47f830[_0x543da8(1275)])[_0x543da8(690)](_0x47f830[_0x543da8(1234)]), cypress[_0x543da8(654)]([
                _0x47f830[_0x543da8(1268)],
                '--run-project=' + this[_0x543da8(677)],
                _0x543da8(1276)
            ])[_0x543da8(731)](() => {
                const _0x5be254 = _0x543da8;
                expect(api[_0x5be254(1269)])['to']['be'][_0x5be254(708)]({
                    'projectId': _0x3224a3[_0x5be254(1277)],
                    'recordKey': _0x3224a3[_0x5be254(1278)]
                }), expect(errors[_0x5be254(485)])[_0x5be254(789)]['to']['be'][_0x5be254(884)], this[_0x5be254(703)](7418 + -3847 + 3568 * -1);
            });
        }), it(_0x47f830[_0x51de80(1279)], function () {
            const _0x3760ac = _0x51de80;
            return sinon[_0x3760ac(687)](ciProvider, _0x3224a3[_0x3760ac(1280)])['returns'](null), cypress[_0x3760ac(654)]([
                _0x3760ac(851) + this['recordPath'],
                _0x3224a3['GpLfU'],
                _0x3760ac(598),
                _0x3224a3[_0x3760ac(1281)]
            ])[_0x3760ac(731)](() => {
                const _0x2a92c5 = _0x3760ac;
                return this[_0x2a92c5(705)](_0x3224a3['Wvxhq']), _0x3224a3[_0x2a92c5(1282)](snapshotConsoleLogs, _0x3224a3[_0x2a92c5(1283)]);
            });
        }), _0x47f830[_0x51de80(1272)](it, _0x47f830[_0x51de80(1284)], function () {
            const _0x52184 = _0x51de80, _0x10a08a = {
                    'rDgZv': function (_0x49e1da, _0x239e3f) {
                        const _0xa4601d = _0x501e;
                        return _0x47f830[_0xa4601d(1285)](_0x49e1da, _0x239e3f);
                    },
                    'WCCBT': 'INDETERMINATE_CI_BUILD_ID-parallel 1'
                };
            return sinon[_0x52184(687)](ciProvider, _0x47f830[_0x52184(1286)])[_0x52184(690)](null), cypress['start']([
                _0x52184(851) + this['recordPath'],
                _0x47f830[_0x52184(1229)],
                _0x52184(598),
                _0x47f830['gDFpL']
            ])['then'](() => {
                const _0x580404 = _0x52184;
                return this[_0x580404(705)](_0x580404(608)), _0x10a08a['rDgZv'](snapshotConsoleLogs, _0x10a08a['WCCBT']);
            });
        }), it(_0x47f830['GTdOk'], function () {
            const _0x10d790 = _0x51de80;
            return sinon['stub'](ciProvider, _0x47f830[_0x10d790(1286)])[_0x10d790(690)](null), cypress[_0x10d790(654)]([
                _0x10d790(851) + this[_0x10d790(679)],
                '--record',
                _0x47f830[_0x10d790(1252)],
                _0x47f830['JrFvY'],
                _0x47f830[_0x10d790(1248)]
            ])[_0x10d790(731)](() => {
                const _0x17c5a9 = _0x10d790;
                return this[_0x17c5a9(705)](_0x3224a3[_0x17c5a9(1287)]), _0x3224a3[_0x17c5a9(1288)](snapshotConsoleLogs, _0x3224a3[_0x17c5a9(1289)]);
            });
        }), _0x47f830[_0x51de80(1290)](it, _0x47f830[_0x51de80(1291)], function () {
            const _0x1ae85b = _0x51de80;
            return cypress[_0x1ae85b(654)]([
                _0x1ae85b(851) + this[_0x1ae85b(679)],
                _0x1ae85b(1276),
                _0x47f830[_0x1ae85b(1252)],
                _0x1ae85b(612)
            ])['then'](() => {
                const _0x2039d2 = _0x1ae85b;
                return this[_0x2039d2(705)](_0x3224a3[_0x2039d2(1292)]), _0x3224a3[_0x2039d2(1288)](snapshotConsoleLogs, _0x3224a3[_0x2039d2(1293)]);
            });
        }), _0x47f830[_0x51de80(1290)](it, _0x47f830[_0x51de80(1294)], function () {
            const _0x22dae0 = _0x51de80;
            return cypress['start']([
                _0x22dae0(851) + this[_0x22dae0(679)],
                _0x3224a3[_0x22dae0(1295)]
            ])[_0x22dae0(731)](() => {
                const _0x45ebd5 = _0x22dae0;
                return this[_0x45ebd5(705)](_0x3224a3[_0x45ebd5(1296)]), _0x3224a3[_0x45ebd5(1297)](snapshotConsoleLogs, _0x3224a3[_0x45ebd5(1298)]);
            });
        }), _0x47f830[_0x51de80(1290)](it, _0x47f830[_0x51de80(1299)], function () {
            const _0x1c9199 = _0x51de80;
            return cypress[_0x1c9199(654)]([
                _0x1c9199(851) + this[_0x1c9199(679)],
                _0x3224a3[_0x1c9199(1281)]
            ])['then'](() => {
                const _0x26c31b = _0x1c9199;
                return this[_0x26c31b(705)](_0x26c31b(611)), _0x3224a3[_0x26c31b(1297)](snapshotConsoleLogs, _0x3224a3[_0x26c31b(1300)]);
            });
        }), _0x47f830[_0x51de80(1301)](it, _0x51de80(1302), function () {
            const _0x19f44f = _0x51de80;
            return cypress[_0x19f44f(654)]([
                _0x19f44f(851) + this['recordPath'],
                '--parallel'
            ])['then'](() => {
                const _0x328d5c = _0x19f44f;
                return this['expectExitWithErr'](_0x3224a3[_0x328d5c(1296)]), _0x3224a3[_0x328d5c(1303)](snapshotConsoleLogs, _0x3224a3[_0x328d5c(1304)]);
            });
        }), _0x47f830[_0x51de80(1305)](it, _0x47f830[_0x51de80(1306)], function () {
            const _0x1e18be = _0x51de80;
            return cypress['start']([
                _0x1e18be(851) + this[_0x1e18be(679)],
                _0x1e18be(1307)
            ])[_0x1e18be(731)](() => {
                const _0x429b40 = _0x1e18be;
                return this[_0x429b40(705)](_0x3224a3[_0x429b40(1296)]), _0x3224a3[_0x429b40(1303)](snapshotConsoleLogs, _0x3224a3[_0x429b40(1308)]);
            });
        }), it(_0x47f830['IXxVp'], function () {
            const _0x31aad = _0x51de80, _0x7ab84e = {
                    'VDTJj': _0x3224a3[_0x31aad(1296)],
                    'XNUkp': function (_0x2d0174, _0x1de0b4) {
                        const _0xa6fc56 = _0x31aad;
                        return _0x3224a3[_0xa6fc56(1303)](_0x2d0174, _0x1de0b4);
                    },
                    'DttVQ': _0x3224a3['HEOot']
                };
            return cypress['start']([
                _0x31aad(851) + this['recordPath'],
                _0x31aad(1307),
                _0x31aad(602),
                _0x3224a3[_0x31aad(1309)]
            ])[_0x31aad(731)](() => {
                const _0x38f83c = _0x31aad;
                return this[_0x38f83c(705)](_0x7ab84e['VDTJj']), _0x7ab84e[_0x38f83c(1310)](snapshotConsoleLogs, _0x7ab84e[_0x38f83c(1311)]);
            });
        }), _0x47f830[_0x51de80(1305)](it, _0x51de80(1312), function () {
            const _0x43ba8a = _0x51de80, _0x441dc9 = {
                    'MiCUh': 'DASHBOARD_RUN_GROUP_NAME_NOT_UNIQUE',
                    'SpuCo': function (_0x198180, _0x25be5d) {
                        return _0x3224a3['WJRhf'](_0x198180, _0x25be5d);
                    },
                    'QoMQI': _0x3224a3['PwwRD']
                }, _0x319828 = new Error();
            return _0x319828[_0x43ba8a(1313)] = 626 * 6 + 7164 + 1 * -10498, _0x319828[_0x43ba8a(1314)] = {
                'code': _0x3224a3[_0x43ba8a(1315)],
                'payload': { 'runUrl': _0x3224a3[_0x43ba8a(1316)] }
            }, api[_0x43ba8a(1269)][_0x43ba8a(997)](_0x319828), cypress[_0x43ba8a(654)]([
                _0x43ba8a(851) + this[_0x43ba8a(679)],
                _0x43ba8a(1276),
                _0x3224a3[_0x43ba8a(1317)],
                _0x3224a3[_0x43ba8a(1318)],
                _0x43ba8a(603)
            ])['then'](() => {
                const _0x24d5db = _0x43ba8a;
                return this[_0x24d5db(705)](_0x441dc9[_0x24d5db(1319)]), _0x441dc9[_0x24d5db(1320)](snapshotConsoleLogs, _0x441dc9['QoMQI']);
            });
        }), _0x47f830[_0x51de80(1321)](it, _0x47f830[_0x51de80(1322)], function () {
            const _0x26515c = _0x51de80;
            sinon[_0x26515c(687)](system, _0x47f830[_0x26515c(1323)])[_0x26515c(690)]({
                'osName': _0x47f830[_0x26515c(1324)],
                'osVersion': 'v1'
            }), sinon[_0x26515c(687)](browsers, _0x26515c(1325))[_0x26515c(686)]({
                'version': _0x26515c(1326),
                'displayName': _0x47f830['xGUDM']
            });
            const _0x318463 = new Error();
            return _0x318463[_0x26515c(1313)] = 747 + 8422 + -8747 * 1, _0x318463[_0x26515c(1314)] = {
                'code': _0x47f830[_0x26515c(1327)],
                'payload': { 'runUrl': _0x47f830[_0x26515c(1251)] }
            }, api[_0x26515c(1269)][_0x26515c(997)](_0x318463), cypress[_0x26515c(654)]([
                '--run-project=' + this[_0x26515c(679)],
                _0x47f830[_0x26515c(1229)],
                _0x47f830[_0x26515c(1252)],
                '--parallel',
                _0x47f830[_0x26515c(1328)],
                _0x47f830['ItGsQ']
            ])['then'](() => {
                const _0xe25fd3 = _0x26515c;
                return this[_0xe25fd3(705)](_0x3224a3[_0xe25fd3(1329)]), _0x3224a3[_0xe25fd3(1330)](snapshotConsoleLogs, _0x3224a3[_0xe25fd3(1331)]);
            });
        }), _0x47f830['KiHgn'](it, _0x51de80(1332), function () {
            const _0x4f52ab = _0x51de80, _0x556d03 = {
                    'srQbU': _0x3224a3[_0x4f52ab(1333)],
                    'CekAa': _0x3224a3[_0x4f52ab(1334)]
                }, _0xd829bb = new Error();
            return _0xd829bb[_0x4f52ab(1313)] = -5 * 897 + -1 * -332 + -183 * -25, _0xd829bb['error'] = {
                'code': _0x4f52ab(1335),
                'payload': { 'runUrl': 'https://dashboard.cypress.io/runs/12345' }
            }, api['createRun'][_0x4f52ab(997)](_0xd829bb), cypress['start']([
                '--run-project=' + this[_0x4f52ab(679)],
                _0x3224a3[_0x4f52ab(1336)],
                _0x4f52ab(598),
                _0x4f52ab(597),
                _0x4f52ab(602),
                _0x3224a3[_0x4f52ab(1337)]
            ])[_0x4f52ab(731)](() => {
                const _0xca9efa = _0x4f52ab;
                return this[_0xca9efa(705)](_0x556d03['srQbU']), snapshotConsoleLogs(_0x556d03[_0xca9efa(1338)]);
            });
        }), it(_0x47f830['dgdDd'], function () {
            const _0x34c7e1 = _0x51de80, _0x17ada7 = {
                    'jssTB': _0x47f830[_0x34c7e1(1339)],
                    'BBNCP': function (_0x17a797, _0x4614ab) {
                        return _0x47f830['RfKCZ'](_0x17a797, _0x4614ab);
                    }
                }, _0x104921 = new Error();
            return _0x104921[_0x34c7e1(1313)] = 4 * -1354 + -5152 + -1099 * -10, _0x104921[_0x34c7e1(1314)] = {
                'code': _0x47f830[_0x34c7e1(1340)],
                'payload': { 'runUrl': _0x47f830[_0x34c7e1(1251)] }
            }, api['createRun'][_0x34c7e1(997)](_0x104921), cypress['start']([
                _0x34c7e1(851) + this[_0x34c7e1(679)],
                _0x47f830[_0x34c7e1(1229)],
                _0x34c7e1(598),
                _0x34c7e1(597),
                _0x47f830[_0x34c7e1(1261)],
                _0x47f830[_0x34c7e1(1328)],
                _0x47f830[_0x34c7e1(1256)]
            ])[_0x34c7e1(731)](() => {
                const _0x219e12 = _0x34c7e1;
                return this[_0x219e12(705)](_0x17ada7[_0x219e12(1341)]), _0x17ada7[_0x219e12(1342)](snapshotConsoleLogs, _0x219e12(1343));
            });
        }), it(_0x47f830[_0x51de80(1344)], function () {
            const _0x55bc67 = _0x51de80, _0x5091b0 = new Error();
            return _0x5091b0['statusCode'] = -8535 + -3325 + -46 * -267, _0x5091b0[_0x55bc67(1314)] = {
                'code': _0x47f830[_0x55bc67(1345)],
                'payload': { 'runUrl': _0x47f830['OHeoX'] }
            }, api[_0x55bc67(1269)][_0x55bc67(997)](_0x5091b0), cypress[_0x55bc67(654)]([
                '--run-project=' + this['recordPath'],
                _0x47f830['EjyRW'],
                _0x47f830[_0x55bc67(1252)],
                _0x55bc67(1307),
                _0x47f830[_0x55bc67(1328)],
                _0x47f830[_0x55bc67(1256)]
            ])[_0x55bc67(731)](() => {
                const _0x506dfa = _0x55bc67;
                return this[_0x506dfa(705)](_0x506dfa(1346)), snapshotConsoleLogs(_0x3224a3[_0x506dfa(1347)]);
            });
        }), _0x47f830[_0x51de80(1348)](it, _0x47f830[_0x51de80(1349)], function () {
            const _0x28dda5 = _0x51de80, _0x546f50 = {
                    'qzxbN': _0x3224a3[_0x28dda5(1350)],
                    'YGLfz': function (_0x197c70, _0x157b07) {
                        const _0x48d6c7 = _0x28dda5;
                        return _0x3224a3[_0x48d6c7(1351)](_0x197c70, _0x157b07);
                    },
                    'fCwwM': _0x3224a3[_0x28dda5(1352)]
                }, _0x1bb7a6 = new Error();
            return _0x1bb7a6[_0x28dda5(1313)] = 69 * -59 + -4959 + 17 * 556, _0x1bb7a6['error'] = {
                'code': _0x3224a3[_0x28dda5(1353)],
                'payload': { 'runUrl': _0x3224a3[_0x28dda5(1316)] }
            }, api[_0x28dda5(1269)][_0x28dda5(997)](_0x1bb7a6), cypress[_0x28dda5(654)]([
                _0x28dda5(851) + this[_0x28dda5(679)],
                _0x3224a3['GpLfU'],
                _0x3224a3[_0x28dda5(1317)],
                _0x3224a3['seJVa'],
                _0x3224a3[_0x28dda5(1354)],
                _0x3224a3[_0x28dda5(1318)],
                _0x3224a3['DLlxH']
            ])[_0x28dda5(731)](() => {
                const _0x39b596 = _0x28dda5;
                return this[_0x39b596(705)](_0x546f50[_0x39b596(1355)]), _0x546f50[_0x39b596(1356)](snapshotConsoleLogs, _0x546f50['fCwwM']);
            });
        });
    }), _0x47f830['ardwM'](context, _0x47f830[_0x254dfb(1357)], () => {
        const _0x119510 = _0x254dfb, _0x1b6d03 = {
                'mzcMh': function (_0x35c4cd, _0x2c0618) {
                    return _0x35c4cd(_0x2c0618);
                }
            };
        _0x47f830[_0x119510(1358)](beforeEach, () => {
            const _0x394251 = _0x119510;
            console[_0x394251(472)][_0x394251(1124)](), sinon[_0x394251(687)](console, _0x394251(472));
        }), _0x47f830['KiHgn'](it, _0x47f830[_0x119510(1359)], function () {
            const _0x17e734 = _0x119510;
            return cypress[_0x17e734(654)]([_0x47f830[_0x17e734(1357)]])[_0x17e734(731)](() => {
                const _0x37a338 = _0x17e734;
                _0x1b6d03[_0x37a338(1360)](expect, console[_0x37a338(472)])['to']['be'][_0x37a338(708)](_0x37a338(1361)), this[_0x37a338(703)](-1547 * -5 + 4953 + -4 * 3172);
            });
        });
    }), _0x47f830[_0x254dfb(1362)](context, _0x47f830[_0x254dfb(1363)], () => {
        const _0x3e714a = _0x254dfb, _0x25f788 = { 'uYnxi': _0x47f830[_0x3e714a(1363)] };
        _0x47f830[_0x3e714a(1364)](beforeEach, () => {
            const _0x3b0fc3 = _0x3e714a;
            console[_0x3b0fc3(472)]['restore'](), sinon[_0x3b0fc3(687)](console, _0x47f830[_0x3b0fc3(699)]);
        }), it(_0x47f830[_0x3e714a(1365)], function () {
            const _0x336969 = _0x3e714a, _0x989fee = {
                    'LbOvh': function (_0x1ea5e1, _0x3b2c19) {
                        return _0x1ea5e1(_0x3b2c19);
                    }
                };
            return cypress[_0x336969(654)]([_0x25f788['uYnxi']])[_0x336969(731)](() => {
                const _0x2e13b5 = _0x336969;
                _0x989fee[_0x2e13b5(1366)](expect, console[_0x2e13b5(472)])['to']['be'][_0x2e13b5(704)](pkg[_0x2e13b5(701)]), this[_0x2e13b5(703)](13 * -126 + -6119 + 7757 * 1);
            });
        });
    }), _0x47f830[_0x254dfb(1362)](context, _0x254dfb(1367), () => {
        const _0x53bd49 = _0x254dfb, _0x57cd8 = { 'aKLKQ': _0x47f830[_0x53bd49(1368)] };
        _0x47f830[_0x53bd49(1369)](beforeEach, () => {
            const _0x1c6690 = _0x53bd49;
            console['log'][_0x1c6690(1124)](), sinon[_0x1c6690(687)](console, _0x47f830[_0x1c6690(699)]);
        }), _0x47f830[_0x53bd49(1370)](it, _0x47f830[_0x53bd49(1371)], function () {
            const _0x4acf66 = _0x53bd49;
            return cypress[_0x4acf66(654)]([
                _0x4acf66(1367),
                _0x47f830[_0x4acf66(1372)]
            ])[_0x4acf66(731)](() => {
                const _0x5c0226 = _0x4acf66;
                expect(console[_0x5c0226(472)])['to']['be'][_0x5c0226(704)](_0x57cd8[_0x5c0226(1373)]), this['expectExitWith'](-6 * -827 + 9 * 923 + -13269);
            });
        });
    }), _0x47f830[_0x254dfb(1374)](context, _0x47f830[_0x254dfb(1375)], () => {
        const _0x64c24c = _0x254dfb, _0x208a37 = {
                'CMudN': _0x47f830[_0x64c24c(1376)],
                'zmtVH': _0x47f830[_0x64c24c(1377)],
                'iooja': _0x47f830['GEiMQ'],
                'XMKwL': _0x47f830[_0x64c24c(1378)],
                'bJVGS': function (_0x3f94d0, _0x5a6aa1) {
                    return _0x47f830['jQbFN'](_0x3f94d0, _0x5a6aa1);
                },
                'Mcyew': _0x64c24c(1379),
                'KaSQl': _0x64c24c(651),
                'WSEtW': function (_0xf47629, _0x3fdd99) {
                    return _0xf47629(_0x3fdd99);
                },
                'vZhvz': _0x47f830['KLzWh'],
                'OHAgZ': _0x47f830[_0x64c24c(1201)],
                'YpeWr': _0x64c24c(1380),
                'XrlTf': function (_0x253a37, _0x45d602, _0x2e3583) {
                    return _0x253a37(_0x45d602, _0x2e3583);
                },
                'Lryhr': _0x47f830[_0x64c24c(1381)],
                'JviZj': _0x47f830[_0x64c24c(1382)],
                'qcaDM': _0x47f830[_0x64c24c(1383)],
                'sSDpA': function (_0x984304, _0x4b2fce, _0x2f32c0) {
                    const _0x1f10c5 = _0x64c24c;
                    return _0x47f830[_0x1f10c5(1384)](_0x984304, _0x4b2fce, _0x2f32c0);
                }
            };
        beforeEach(function () {
            const _0x4434c9 = _0x64c24c, _0xb2b30f = _0x208a37[_0x4434c9(1385)]['split']('|');
            let _0x15b4ff = 9358 + -1 * 2014 + 459 * -16;
            while (!![]) {
                switch (_0xb2b30f[_0x15b4ff++]) {
                case '0':
                    sinon['stub'](ServerE2E[_0x4434c9(693)], 'startWebsockets');
                    continue;
                case '1':
                    sinon[_0x4434c9(687)](Windows, _0x208a37[_0x4434c9(1386)])['resolves'](this[_0x4434c9(764)]);
                    continue;
                case '2':
                    sinon[_0x4434c9(687)](electron[_0x4434c9(765)], 'on')[_0x4434c9(697)](_0x208a37[_0x4434c9(1387)])[_0x4434c9(767)]();
                    continue;
                case '3':
                    sinon['stub'](electron[_0x4434c9(1388)], 'on');
                    continue;
                case '4':
                    sinon[_0x4434c9(698)](Events, _0x208a37[_0x4434c9(1389)]);
                    continue;
                case '5':
                    this[_0x4434c9(764)] = {
                        'on': sinon['stub'](),
                        'webContents': { 'on': sinon[_0x4434c9(687)]() }
                    };
                    continue;
                }
                break;
            }
        }), it(_0x47f830[_0x64c24c(1390)], () => {
            const _0x224595 = _0x64c24c, _0x244fea = {
                    'oqqpc': function (_0x57db7a, _0x46f20d) {
                        return _0x57db7a(_0x46f20d);
                    }
                };
            return sinon[_0x224595(687)](interactiveMode, _0x224595(500)), cypress[_0x224595(654)]([
                _0x47f830[_0x224595(1391)],
                _0x47f830[_0x224595(1392)],
                _0x47f830[_0x224595(1393)]
            ])['then'](() => {
                const _0x1065eb = _0x224595;
                _0x244fea['oqqpc'](expect, interactiveMode[_0x1065eb(500)])['to']['be'][_0x1065eb(708)]({
                    'updating': !![],
                    'config': {
                        'port': 2121,
                        'pageLoadTimeout': 1000
                    }
                });
            });
        }), _0x47f830[_0x64c24c(1394)](it, _0x64c24c(1395), () => {
            const _0x3f47a0 = _0x64c24c;
            return cypress[_0x3f47a0(654)]([
                '--port=2121',
                _0x47f830[_0x3f47a0(1393)]
            ])[_0x3f47a0(731)](() => {
                const _0x2d72fb = _0x3f47a0;
                _0x208a37[_0x2d72fb(1396)](expect, Events['start'])['to']['be'][_0x2d72fb(708)]({
                    'config': {
                        'pageLoadTimeout': 1000,
                        'port': 2121
                    }
                });
            });
        }), _0x47f830[_0x64c24c(1394)](it, 'passes filtered options to Project#open and sets cli config', function () {
            const _0x14dde5 = _0x64c24c, _0x10526a = {
                    'zoEvh': _0x14dde5(638),
                    'MWCLI': _0x47f830[_0x14dde5(736)],
                    'wQHAw': _0x47f830[_0x14dde5(1397)],
                    'obYvS': _0x47f830['ijBoi'],
                    'zBXty': function (_0x396798, _0x3b4686) {
                        const _0x3ecaf9 = _0x14dde5;
                        return _0x47f830[_0x3ecaf9(1369)](_0x396798, _0x3b4686);
                    },
                    'gAhqX': _0x47f830['TUqhl'],
                    'QjoqR': function (_0xc842e3, _0x165e16) {
                        const _0x486f29 = _0x14dde5;
                        return _0x47f830[_0x486f29(1398)](_0xc842e3, _0x165e16);
                    },
                    'Eblqq': _0x47f830['RrGsr'],
                    'iyCnC': function (_0x3c95fe, _0x496303) {
                        return _0x3c95fe(_0x496303);
                    },
                    'PBayU': function (_0x16cc7f, _0x39dd4a) {
                        const _0x24b85e = _0x14dde5;
                        return _0x47f830[_0x24b85e(1399)](_0x16cc7f, _0x39dd4a);
                    },
                    'yTYas': _0x47f830[_0x14dde5(1400)],
                    'Apebq': function (_0x582186, _0x363a9e) {
                        return _0x582186(_0x363a9e);
                    },
                    'SZrUa': function (_0x5b65c1, _0x5e3a66) {
                        const _0x574e1f = _0x14dde5;
                        return _0x47f830[_0x574e1f(1399)](_0x5b65c1, _0x5e3a66);
                    },
                    'GxoRZ': _0x47f830[_0x14dde5(1401)],
                    'uaNsa': _0x47f830[_0x14dde5(1402)],
                    'oqpUi': function (_0x819e2d, _0x233767) {
                        const _0x27d5d7 = _0x14dde5;
                        return _0x47f830[_0x27d5d7(1403)](_0x819e2d, _0x233767);
                    },
                    'PyeWg': _0x47f830[_0x14dde5(1404)],
                    'pUvSX': function (_0x5d125e, _0x246227) {
                        return _0x47f830['gbsHO'](_0x5d125e, _0x246227);
                    },
                    'YAfsV': function (_0x51a402, _0xf4c17) {
                        const _0x54f859 = _0x14dde5;
                        return _0x47f830[_0x54f859(1405)](_0x51a402, _0xf4c17);
                    },
                    'OnrNh': 'cli',
                    'GOqMV': _0x14dde5(1072),
                    'vpBwb': function (_0x4bf6d9, _0x47b6b2) {
                        return _0x4bf6d9(_0x47b6b2);
                    },
                    'jfRmT': function (_0xef67c0, _0x5bfda6) {
                        return _0xef67c0(_0x5bfda6);
                    }
                }, _0x3101c9 = sinon[_0x14dde5(687)](ServerE2E[_0x14dde5(693)], _0x14dde5(768))[_0x14dde5(686)]([]);
            return process[_0x14dde5(1072)][_0x14dde5(1406)] = _0x47f830[_0x14dde5(1137)], process['env'][_0x14dde5(1407)] = _0x14dde5(643), process[_0x14dde5(1072)]['CYPRESS_port'] = _0x47f830['AQIHC'], process['env'][_0x14dde5(1408)] = _0x47f830['UqoIe'], process[_0x14dde5(1072)][_0x14dde5(1409)] = _0x47f830['kVbPm'], user['set']({
                'name': _0x47f830['nMLvh'],
                'authToken': _0x47f830[_0x14dde5(1410)]
            })[_0x14dde5(731)](() => {
                const _0x5f0ce1 = _0x14dde5;
                return settings['read'](this[_0x5f0ce1(672)]);
            })[_0x14dde5(731)](_0x4726ce => {
                const _0x21a08d = _0x14dde5;
                return _0x4726ce['baseUrl'] = _0x208a37[_0x21a08d(1411)], settings[_0x21a08d(951)](this['todosPath'], _0x4726ce);
            })[_0x14dde5(731)](() => {
                const _0xdca0e0 = _0x14dde5;
                return cypress[_0xdca0e0(654)]([
                    _0x10526a[_0xdca0e0(1412)],
                    _0x10526a[_0xdca0e0(1413)],
                    _0x10526a[_0xdca0e0(1414)],
                    _0xdca0e0(653),
                    _0x10526a[_0xdca0e0(1415)]
                ]);
            })[_0x14dde5(731)](() => {
                const _0x55a1ad = _0x14dde5, _0x2f9b20 = Events[_0x55a1ad(654)]['firstCall'][_0x55a1ad(859)][-3 * -3079 + -9811 + 7 * 82];
                return Events[_0x55a1ad(1416)](_0x2f9b20, {}, {}, -6106 + -22 * 157 + 9683 * 1, _0x208a37['KaSQl'], this['todosPath']);
            })[_0x14dde5(731)](() => {
                const _0x2138ff = _0x14dde5, _0x2c59f2 = openProject[_0x2138ff(1105)]()[_0x2138ff(1417)];
                expect(_0x2c59f2[_0x2138ff(645)])['to']['eq'](1098 * -4 + 7635 + -1122), _0x10526a[_0x2138ff(1418)](expect, _0x2c59f2[_0x2138ff(1419)])['to']['eq'](-74 * 103 + 31 * 88 + 5894), _0x10526a[_0x2138ff(1418)](expect, _0x2c59f2['report'])['to']['eq'](![]), _0x10526a[_0x2138ff(1418)](expect, _0x2c59f2[_0x2138ff(1072)])['to'][_0x2138ff(1420)]({ 'baz': _0x10526a[_0x2138ff(1421)] }), _0x10526a[_0x2138ff(1422)](expect, _0x3101c9)['to']['be'][_0x2138ff(884)];
                const _0x4fb4a0 = _0x3101c9[_0x2138ff(1423)](-2477 * 1 + 826 + 1651)['args'][-2158 + 3336 + 31 * -38];
                _0x10526a[_0x2138ff(1422)](expect, _0x4fb4a0['fileServerFolder'])['to']['eq'](path[_0x2138ff(473)](this['todosPath'], _0x10526a['Eblqq'])), _0x10526a[_0x2138ff(1424)](expect, _0x4fb4a0[_0x2138ff(1419)])['to']['eq'](-237 * 23 + -8561 + 834 * 18), _0x10526a[_0x2138ff(1424)](expect, _0x4fb4a0['port'])['to']['eq'](57 * 155 + 4619 + -11333 * 1), _0x10526a[_0x2138ff(1425)](expect, _0x4fb4a0[_0x2138ff(1426)])['to']['eq'](_0x10526a[_0x2138ff(1427)]), _0x10526a[_0x2138ff(1425)](expect, _0x4fb4a0[_0x2138ff(1428)])['to']['be'][_0x2138ff(648)], _0x10526a['Apebq'](expect, _0x4fb4a0[_0x2138ff(1429)])['to']['eq'](-1 * -817 + -5772 + 10510), _0x10526a['Apebq'](expect, _0x4fb4a0[_0x2138ff(1072)][_0x2138ff(642)])['to']['eq'](_0x10526a['gAhqX']), _0x10526a[_0x2138ff(1430)](expect, _0x4fb4a0[_0x2138ff(1072)])[_0x2138ff(789)]['to'][_0x2138ff(870)][_0x2138ff(940)](_0x10526a['GxoRZ']), _0x10526a['SZrUa'](expect, _0x4fb4a0['env'])[_0x2138ff(789)]['to'][_0x2138ff(870)]['property'](_0x10526a[_0x2138ff(1431)]), expect(_0x4fb4a0[_0x2138ff(1072)])[_0x2138ff(789)]['to'][_0x2138ff(870)]['property']('BASE_URL'), _0x10526a[_0x2138ff(1430)](expect, _0x4fb4a0[_0x2138ff(1072)])[_0x2138ff(789)]['to'][_0x2138ff(870)]['property'](_0x2138ff(1428)), _0x10526a[_0x2138ff(1432)](expect, _0x4fb4a0[_0x2138ff(1072)])['not']['to']['have']['property'](_0x10526a['PyeWg']), _0x10526a[_0x2138ff(1433)](expect, _0x4fb4a0['resolved'][_0x2138ff(644)])['to']['deep']['eq']({
                    'value': _0x2138ff(995),
                    'from': _0x2138ff(1072)
                }), _0x10526a[_0x2138ff(1434)](expect, _0x4fb4a0[_0x2138ff(1119)]['pageLoadTimeout'])['to'][_0x2138ff(1120)]['eq']({
                    'value': 1000,
                    'from': _0x2138ff(562)
                }), expect(_0x4fb4a0[_0x2138ff(1119)][_0x2138ff(645)])['to'][_0x2138ff(1120)]['eq']({
                    'value': 2121,
                    'from': _0x10526a[_0x2138ff(1435)]
                }), expect(_0x4fb4a0['resolved'][_0x2138ff(1426)])['to']['deep']['eq']({
                    'value': _0x10526a[_0x2138ff(1427)],
                    'from': _0x10526a[_0x2138ff(1436)]
                }), _0x10526a[_0x2138ff(1434)](expect, _0x4fb4a0[_0x2138ff(1119)][_0x2138ff(1428)])['to'][_0x2138ff(1120)]['eq']({
                    'value': ![],
                    'from': _0x10526a[_0x2138ff(1436)]
                }), _0x10526a['vpBwb'](expect, _0x4fb4a0[_0x2138ff(1119)][_0x2138ff(1429)])['to'][_0x2138ff(1120)]['eq']({
                    'value': 5555,
                    'from': _0x10526a[_0x2138ff(1436)]
                }), _0x10526a['jfRmT'](expect, _0x4fb4a0['resolved'][_0x2138ff(1072)][_0x2138ff(642)])['to']['deep']['eq']({
                    'value': _0x10526a[_0x2138ff(1421)],
                    'from': _0x10526a[_0x2138ff(1435)]
                });
            });
        }), _0x47f830[_0x64c24c(1394)](it, _0x47f830[_0x64c24c(1437)], function () {
            const _0x8d68a3 = _0x64c24c, _0x1fce8d = {
                    'WMiQs': _0x47f830[_0x8d68a3(1438)],
                    'imijz': _0x47f830[_0x8d68a3(1439)]
                }, _0x4b8b1d = new EE(), _0x86b516 = { 'sender': { 'send': sinon[_0x8d68a3(687)]() } }, _0x506eed = { 'message': _0x47f830[_0x8d68a3(1440)] };
            return sinon['stub'](ServerE2E[_0x8d68a3(693)], 'open')[_0x8d68a3(686)]([
                -7144 + -91 * 88 + -23 * -751,
                _0x506eed
            ]), cypress[_0x8d68a3(654)]([
                _0x8d68a3(638),
                _0x47f830['qqNGa'],
                _0x8d68a3(640),
                _0x47f830[_0x8d68a3(1441)],
                _0x47f830[_0x8d68a3(1442)]
            ])[_0x8d68a3(731)](() => {
                const _0x2239c1 = _0x8d68a3, _0x34eaef = Events[_0x2239c1(654)]['firstCall'][_0x2239c1(859)][6316 * 1 + -3258 + 3058 * -1];
                return Events[_0x2239c1(1416)](_0x34eaef, _0x4b8b1d, _0x86b516, 5207 * 1 + -7651 + 2567, _0x1fce8d['WMiQs']), Events[_0x2239c1(1416)](_0x34eaef, _0x4b8b1d, _0x86b516, -893 + 2 * 211 + -6 * -99, _0x1fce8d[_0x2239c1(1443)], this['todosPath']);
            })[_0x8d68a3(731)](() => {
                const _0x562115 = _0x8d68a3;
                _0x208a37[_0x562115(1444)](expect, _0x86b516[_0x562115(1445)][_0x562115(1446)][_0x562115(697)](_0x208a37[_0x562115(1447)])[_0x562115(858)]['args'][-353 * -13 + -1714 * 4 + 36 * 63]['data'])['to'][_0x562115(1420)](_0x506eed);
            });
        }), _0x47f830[_0x64c24c(1448)](describe, _0x47f830[_0x64c24c(1221)], () => {
            const _0x22dd24 = _0x64c24c, _0x1e80b7 = {
                    'jJOQd': function (_0x165db9, _0x36c5ab, _0x450994) {
                        return _0x208a37['XrlTf'](_0x165db9, _0x36c5ab, _0x450994);
                    },
                    'lXIYO': _0x208a37[_0x22dd24(1449)],
                    'QlNxe': _0x208a37['JviZj'],
                    'jNNBD': _0x22dd24(651),
                    'KVdKA': _0x22dd24(1450)
                };
            beforeEach(function () {
                const _0x1d5e7d = _0x22dd24;
                this[_0x1d5e7d(1227)] = _0x1d5e7d(1451), this['open'] = sinon[_0x1d5e7d(687)](ServerE2E[_0x1d5e7d(693)], _0x208a37[_0x1d5e7d(1386)])[_0x1d5e7d(686)]([]);
            }), _0x208a37['XrlTf'](it, _0x208a37[_0x22dd24(1452)], function () {
                const _0x844d13 = _0x22dd24, _0x27afbb = {
                        'vwHEJ': _0x844d13(651),
                        'uVuDK': function (_0x1cb162, _0x2fbe97) {
                            const _0x5e5272 = _0x844d13;
                            return _0x208a37[_0x5e5272(1444)](_0x1cb162, _0x2fbe97);
                        },
                        'jvsFG': _0x208a37['OHAgZ']
                    };
                return sinon[_0x844d13(687)](fs, _0x208a37['YpeWr']), fs[_0x844d13(1380)]['withArgs'](path['join'](this[_0x844d13(675)], this['filename']))[_0x844d13(686)]({
                    'env': { 'foo': _0x208a37[_0x844d13(1453)] },
                    'port': 2020
                }), fs[_0x844d13(1380)][_0x844d13(696)](), cypress['start'](['--config-file=' + this[_0x844d13(1227)]])['then'](() => {
                    const _0x436817 = _0x844d13, _0x48e27a = Events[_0x436817(654)][_0x436817(858)][_0x436817(859)][1 * -875 + -121 * -8 + 1 * -93];
                    return Events['handleEvent'](_0x48e27a, {}, {}, 9043 + -433 * -1 + 9353 * -1, _0x27afbb[_0x436817(1454)], this['pristinePath']);
                })[_0x844d13(731)](() => {
                    const _0x5c862a = _0x844d13;
                    expect(this[_0x5c862a(768)])['to']['be'][_0x5c862a(884)];
                    const _0x256035 = this[_0x5c862a(768)][_0x5c862a(1423)](4426 * -2 + -5 * -22 + 94 * 93)[_0x5c862a(859)][-131 * 19 + 1 * -3653 + 6142];
                    _0x27afbb['uVuDK'](expect, _0x256035[_0x5c862a(1072)][_0x5c862a(995)])['to']['equal'](_0x27afbb[_0x5c862a(1455)]), _0x27afbb[_0x5c862a(1456)](expect, _0x256035[_0x5c862a(645)])['to']['equal'](211 + -2 * -1657 + 301 * -5);
                });
            }), _0x208a37[_0x22dd24(1457)](it, _0x22dd24(1458), function () {
                const _0x4b355c = _0x22dd24;
                return cypress[_0x4b355c(654)]([_0x4b355c(1459) + this[_0x4b355c(1227)]])[_0x4b355c(731)](() => {
                    const _0x414077 = _0x4b355c;
                    _0x1e80b7[_0x414077(1460)](debug, _0x1e80b7[_0x414077(1461)], this[_0x414077(1227)]);
                    const _0x4ae0f5 = Events[_0x414077(654)][_0x414077(858)][_0x414077(859)][1741 * 2 + 9770 + -13252];
                    return debug(_0x1e80b7['QlNxe'], Events[_0x414077(654)][_0x414077(858)][_0x414077(859)]), Events[_0x414077(1416)](_0x4ae0f5, {}, {}, 8679 + 7779 + -45 * 363, _0x1e80b7[_0x414077(1462)], this[_0x414077(675)]);
                })[_0x4b355c(731)](() => {
                    const _0x9ff783 = _0x4b355c;
                    return _0x1e80b7[_0x9ff783(1460)](expect, this[_0x9ff783(768)], _0x1e80b7[_0x9ff783(1463)])['to']['be']['called'], fs[_0x9ff783(1380)](path[_0x9ff783(473)](this['pristinePath'], this[_0x9ff783(1227)]))[_0x9ff783(731)](_0x187d7d => {
                        const _0x1be49e = _0x9ff783;
                        expect(_0x187d7d, 'json file is empty')['to'][_0x1be49e(1120)][_0x1be49e(1464)]({});
                    });
                });
            });
        });
    }), _0x47f830['MkJhS'](context, _0x47f830[_0x254dfb(1465)], () => {
        const _0x150915 = _0x254dfb, _0x1ee5bf = {
                'shyDY': _0x47f830[_0x150915(766)],
                'UmuaK': _0x47f830[_0x150915(695)]
            };
        _0x47f830[_0x150915(1466)](beforeEach, () => {
            const _0x21a565 = _0x150915;
            errors['warning'][_0x21a565(1124)](), sinon[_0x21a565(687)](electron[_0x21a565(765)], 'on')[_0x21a565(697)](_0x1ee5bf[_0x21a565(1467)])['yieldsAsync'](), sinon[_0x21a565(687)](interactiveMode, 'ready')[_0x21a565(686)](), sinon[_0x21a565(698)](errors, _0x1ee5bf[_0x21a565(1468)]);
        }), it(_0x150915(1469), () => {
            const _0x2d01f3 = _0x150915, _0x42a1bd = {
                    'sQHIL': _0x47f830[_0x2d01f3(1470)],
                    'Gusrm': function (_0x35250f, _0x251163) {
                        return _0x35250f(_0x251163);
                    },
                    'QZogR': _0x47f830[_0x2d01f3(1471)],
                    'BaOiX': function (_0x437c44, _0x1b55d4) {
                        const _0x11787d = _0x2d01f3;
                        return _0x47f830[_0x11787d(1466)](_0x437c44, _0x1b55d4);
                    },
                    'XbZeU': _0x47f830[_0x2d01f3(1472)]
                };
            return cypress[_0x2d01f3(654)]()['then'](() => {
                const _0x3b3ee1 = _0x2d01f3;
                expect(errors[_0x3b3ee1(485)])['to']['be']['calledWith'](_0x42a1bd['sQHIL']), _0x42a1bd['Gusrm'](expect, console['log'])['to']['be'][_0x3b3ee1(708)](_0x42a1bd['QZogR']), _0x42a1bd[_0x3b3ee1(1473)](expect, console['log'])['to']['be'][_0x3b3ee1(708)](_0x42a1bd['XbZeU']);
            });
        }), it(_0x47f830['ujMpn'], () => {
            const _0x1c78ad = _0x150915;
            return cypress[_0x1c78ad(654)]([_0x47f830[_0x1c78ad(1268)]])['then'](() => {
                const _0x5c6f12 = _0x1c78ad;
                expect(errors['warning'])[_0x5c6f12(789)]['to']['be']['called'];
            });
        });
    }), _0x47f830[_0x254dfb(1474)](context, _0x47f830[_0x254dfb(1475)], () => {
        const _0x25f894 = _0x254dfb, _0xa7318d = { 'GIflB': _0x47f830[_0x25f894(766)] };
        _0x47f830[_0x25f894(1466)](beforeEach, () => {
            const _0x13d854 = _0x25f894;
            sinon[_0x13d854(687)](electron[_0x13d854(765)], 'on')[_0x13d854(697)](_0xa7318d[_0x13d854(1476)])[_0x13d854(767)](), sinon[_0x13d854(687)](interactiveMode, _0xa7318d[_0x13d854(1476)])[_0x13d854(686)]();
        }), _0x47f830[_0x25f894(1448)](it, _0x47f830[_0x25f894(1477)], () => {
            const _0x591b2d = {
                'vKnqX': function (_0x24e38e, _0x1cc0af) {
                    return _0x24e38e(_0x1cc0af);
                }
            };
            return cypress['start']()['then'](() => {
                const _0x5beabe = _0x501e;
                _0x591b2d[_0x5beabe(1478)](expect, interactiveMode['ready'])['to']['be']['calledOnce'];
            });
        });
    });
});