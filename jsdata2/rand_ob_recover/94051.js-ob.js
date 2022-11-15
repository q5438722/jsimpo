require(_0x15d9a1(478));
const R = require(_0x15d9a1(479)), _ = require(_0x15d9a1(480)), path = require(_0x15d9a1(481)), EE = require('events'), http = require('http'), Promise = require('bluebird'), electron = require(_0x15d9a1(482)), commitInfo = require(_0x15d9a1(483)), Fixtures = require('../support/helpers/fixtures'), snapshot = require(_0x15d9a1(484)), stripAnsi = require(_0x15d9a1(485)), debug = require('debug')('test'), pkg = require(_0x15d9a1(486)), detect = require(_0x15d9a1(487)), launch = require(_0x15d9a1(488)), extension = require('@packages/extension'), argsUtil = require(root + _0x15d9a1(489)), {fs} = require(root + _0x15d9a1(490)), ciProvider = require(root + _0x15d9a1(491)), settings = require(root + _0x15d9a1(492)), Events = require(root + _0x15d9a1(493)), Windows = require(root + _0x15d9a1(494)), interactiveMode = require(root + 'lib/modes/interactive-e2e'), runMode = require(root + 'lib/modes/run'), api = require(root + 'lib/api'), cwd = require(root + _0x15d9a1(495)), user = require(root + _0x15d9a1(496)), config = require(root + _0x15d9a1(497)), cache = require(root + 'lib/cache'), errors = require(root + _0x15d9a1(498)), plugins = require(root + 'lib/plugins'), cypress = require(root + _0x15d9a1(499)), ProjectBase = require(root + _0x15d9a1(500))['ProjectBase'], {getId} = require(root + 'lib/project_static'), {ServerE2E} = require(root + _0x15d9a1(501)), Reporter = require(root + _0x15d9a1(502)), Watchers = require(root + _0x15d9a1(503)), browsers = require(root + 'lib/browsers'), videoCapture = require(root + _0x15d9a1(504)), browserUtils = require(root + _0x15d9a1(505)), chromeBrowser = require(root + 'lib/browsers/chrome'), openProject = require(root + _0x15d9a1(506)), env = require(root + _0x15d9a1(507)), v = require(root + _0x15d9a1(508)), system = require(root + _0x15d9a1(509)), appData = require(root + _0x15d9a1(510)), electronApp = require(_0x15d9a1(511)), savedState = require(root + _0x15d9a1(512)), TYPICAL_BROWSERS = [
        {
            'name': 'chrome',
            'family': _0x15d9a1(513),
            'channel': 'stable',
            'displayName': 'Chrome',
            'version': '60.0.3112.101',
            'path': '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
            'majorVersion': '60'
        },
        {
            'name': 'chromium',
            'family': _0x15d9a1(513),
            'channel': _0x15d9a1(514),
            'displayName': _0x15d9a1(515),
            'version': '49.0.2609.0',
            'path': '/Users/bmann/Downloads/chrome-mac/Chromium.app/Contents/MacOS/Chromium',
            'majorVersion': '49'
        },
        {
            'name': _0x15d9a1(516),
            'family': 'chromium',
            'channel': _0x15d9a1(517),
            'displayName': _0x15d9a1(518),
            'version': _0x15d9a1(519),
            'path': _0x15d9a1(520),
            'majorVersion': '62'
        }
    ], ELECTRON_BROWSER = {
        'name': _0x15d9a1(482),
        'family': _0x15d9a1(513),
        'displayName': _0x15d9a1(521),
        'path': '',
        'version': '99.101.1234',
        'majorVersion': 99
    }, previousCwd = process[_0x15d9a1(522)](), snapshotConsoleLogs = function (_0x23f5b0) {
        const _0x14ae85 = _0x15d9a1, _0x1006e4 = {
                'cLRFQ': function (_0x5a98a1, _0x5c0625, _0x2b5675) {
                    return _0x5a98a1(_0x5c0625, _0x2b5675);
                }
            }, _0x226f5a = _[_0x14ae85(523)](console[_0x14ae85(524)]['args'])[_0x14ae85(525)](_0x38e738 => {
                return _0x38e738['join'](' ');
            })[_0x14ae85(526)]('\n')[_0x14ae85(527)]();
        return process[_0x14ae85(528)](previousCwd), _0x1006e4['cLRFQ'](snapshot, _0x23f5b0, stripAnsi(_0x226f5a));
    };
describe('lib/cypress', () => {
    const _0x36f279 = _0x15d9a1, _0x2c8337 = {
            'kLLmi': function (_0x4a7819, _0x5ebd48) {
                return _0x4a7819(_0x5ebd48);
            },
            'fsqeG': _0x36f279(529),
            'PQlHl': function (_0x394f15, _0xa7ebc9, _0x229397) {
                return _0x394f15(_0xa7ebc9, _0x229397);
            },
            'DKvqp': 'todos',
            'zSVTJ': _0x36f279(530),
            'FYozx': _0x36f279(531),
            'mITBs': 'record',
            'tBSNi': _0x36f279(532),
            'CkuSh': _0x36f279(533),
            'TSlnt': _0x36f279(534),
            'sUyNI': _0x36f279(535),
            'vlVXO': _0x36f279(536),
            'dzNsZ': 'setHostAndPath',
            'rmuQO': 'detect',
            'KIOyn': _0x36f279(537),
            'zMSmf': _0x36f279(538),
            'AXnKp': 'log',
            'aXLmp': 'logException',
            'jayBC': 'versions',
            'zbvWf': _0x36f279(539),
            'pdnRT': _0x36f279(513),
            'IRNXY': _0x36f279(540),
            'BMfcN': _0x36f279(541),
            'FOGAn': 'browsers',
            'VymLB': function (_0x34c8f6, _0x15cc07, _0x2f78f8) {
                return _0x34c8f6(_0x15cc07, _0x2f78f8);
            },
            'QKjWi': _0x36f279(542),
            'gLWQV': function (_0x495e3d, _0x3a1551, _0x5cde26) {
                return _0x495e3d(_0x3a1551, _0x5cde26);
            },
            'UwVsp': _0x36f279(543),
            'SagoP': _0x36f279(544),
            'XVmVp': _0x36f279(545),
            'eecfm': _0x36f279(546),
            'rGAqc': 'could not parse reporter options error',
            'shelv': _0x36f279(547),
            'ikKMo': _0x36f279(548),
            'UuznB': 'exits if config cannot be parsed',
            'uOFcK': function (_0x263d17, _0x57237a, _0xf9f91e) {
                return _0x263d17(_0x57237a, _0xf9f91e);
            },
            'bpbro': _0x36f279(549),
            'gQTsC': _0x36f279(550),
            'YtqaF': 'INVALID_CONFIG_OPTION',
            'CFjRh': _0x36f279(551),
            'jxVgw': _0x36f279(552),
            'rRGuz': _0x36f279(553),
            'JCcnn': function (_0x2e8c32, _0x564757) {
                return _0x2e8c32(_0x564757);
            },
            'yIETD': function (_0x273d8b, _0x587393, _0x580ef8) {
                return _0x273d8b(_0x587393, _0x580ef8);
            },
            'EMGnk': 'shows warning if config is not valid',
            'MZREL': 'shows warning when multiple config are not valid',
            'tdKgq': function (_0xff1ccc, _0x46062d) {
                return _0xff1ccc(_0x46062d);
            },
            'nwdBe': 'Impossible options: both headless and headed are true',
            'gyaXT': 'runSpecs',
            'tPLoE': function (_0x4b4c49, _0x28fba0) {
                return _0x4b4c49(_0x28fba0);
            },
            'rtoqz': _0x36f279(554),
            'tjGkU': _0x36f279(555),
            'aCBxD': _0x36f279(556),
            'AVfyO': _0x36f279(557),
            'ZCgaZ': _0x36f279(558),
            'UOifh': 'create',
            'jRhxU': _0x36f279(559),
            'Lwotb': _0x36f279(560),
            'WJSBv': _0x36f279(561),
            'nwrkk': _0x36f279(562),
            'kBVpg': _0x36f279(563),
            'UaLbq': 'NO_SPECS_FOUND',
            'kjJRa': _0x36f279(564),
            'PfQWa': _0x36f279(565),
            'jpuTu': function (_0x492d25, _0x363cc9, _0x38176f) {
                return _0x492d25(_0x363cc9, _0x38176f);
            },
            'NqBNw': _0x36f279(566),
            'fxawC': _0x36f279(567),
            'TfmNR': 'logs error and exits when no specs were found at all',
            'eixHf': 'CONFIG_VALIDATION_ERROR',
            'midLd': _0x36f279(568),
            'jnQSE': function (_0x2796f4, _0x2f7321, _0x4c2784) {
                return _0x2796f4(_0x2f7321, _0x4c2784);
            },
            'THvpy': _0x36f279(569),
            'Wzulq': _0x36f279(570),
            'EhIov': function (_0x5c123c, _0x3b2395) {
                return _0x5c123c === _0x3b2395;
            },
            'SDKrr': _0x36f279(571),
            'VlWFj': _0x36f279(572),
            'TDkoB': _0x36f279(573),
            'qxebh': '--reporter',
            'fwvhG': function (_0x3b06b3, _0x39f8a0) {
                return _0x3b06b3(_0x39f8a0);
            },
            'qORjd': function (_0x10d438, _0x41b0b1, _0x16909f) {
                return _0x10d438(_0x41b0b1, _0x16909f);
            },
            'hZHKY': _0x36f279(574),
            'Ejfsh': _0x36f279(575),
            'hnSzi': _0x36f279(576),
            'KkajY': '--video=false',
            'pavVq': _0x36f279(577),
            'fYTiO': function (_0x54b5cc, _0x573df9) {
                return _0x54b5cc(_0x573df9);
            },
            'yhnPv': function (_0x4bbc93, _0x62cda2, _0x1a7381) {
                return _0x4bbc93(_0x62cda2, _0x1a7381);
            },
            'MNIfB': _0x36f279(578),
            'ZbPzt': 'getRemoteOrigin',
            'VyOlg': _0x36f279(579),
            'LtKQI': _0x36f279(580),
            'jmgYu': _0x36f279(581),
            'jIMtx': _0x36f279(582),
            'Uogdn': function (_0x5ded43, _0x17194d) {
                return _0x5ded43(_0x17194d);
            },
            'NZLJi': _0x36f279(583),
            'Koitr': _0x36f279(584),
            'HBVyx': 'e2e',
            'IupEj': _0x36f279(585),
            'FXgyd': _0x36f279(586),
            'nxsUN': _0x36f279(587),
            'VoAzg': _0x36f279(588),
            'IShBw': 'actions.spec.js',
            'CqWCd': 'ENOENT',
            'Hcitb': _0x36f279(589),
            'YynvM': function (_0x3ffe8f, _0x308a97) {
                return _0x3ffe8f(_0x308a97);
            },
            'YbvJE': _0x36f279(590),
            'vpjaz': 'CANNOT_REMOVE_OLD_BROWSER_PROFILES',
            'GGATf': _0x36f279(591),
            'QzqNn': _0x36f279(592),
            'KYxzr': _0x36f279(593),
            'BnbGM': 'abc123',
            'BzCsM': function (_0x1d1023, _0x4fb3b0) {
                return _0x1d1023(_0x4fb3b0);
            },
            'rsSYs': '--record=false',
            'RjZam': _0x36f279(594),
            'vIKFM': _0x36f279(595),
            'gxeNo': _0x36f279(596),
            'IUlwp': _0x36f279(597),
            'gYUQn': function (_0x2c2a4e, _0x14b21c, _0x3ccda9) {
                return _0x2c2a4e(_0x14b21c, _0x3ccda9);
            },
            'xNLug': _0x36f279(598),
            'KxxqC': _0x36f279(599),
            'qOfhI': _0x36f279(600),
            'JkVCP': 'ERROR_READING_FILE',
            'jLeYy': _0x36f279(601),
            'XZCDR': _0x36f279(602),
            'iHlxm': _0x36f279(603),
            'djCnt': _0x36f279(604),
            'GRwxe': '--env=foo=foo,bar=bar',
            'yTPgw': function (_0x42598f, _0x284fff) {
                return _0x42598f(_0x284fff);
            },
            'kRgYC': _0x36f279(605),
            'FmmvE': _0x36f279(606),
            'huPXn': _0x36f279(607),
            'ZQbes': '_handleDownloads',
            'oyulL': _0x36f279(608),
            'mlEEb': _0x36f279(609),
            'dWqbh': _0x36f279(482),
            'UbGhe': 'chrome',
            'lhIPn': 'PORT_IN_USE_SHORT',
            'tAdEQ': _0x36f279(610),
            'WrkVh': _0x36f279(611),
            'fLZaD': _0x36f279(612),
            'TaApX': _0x36f279(613),
            'jMZqL': _0x36f279(614),
            'AZiLg': _0x36f279(615),
            'MiTjf': 'abcdefgh.test.json',
            'FYSZc': 'false',
            'FbKmz': function (_0x5b2d15, _0x48ed22, _0x4dd121) {
                return _0x5b2d15(_0x48ed22, _0x4dd121);
            },
            'iJlol': function (_0x4ea56b, _0x53637d) {
                return _0x4ea56b(_0x53637d);
            },
            'WiRey': function (_0x5724a3, _0x2afade, _0x1c383c) {
                return _0x5724a3(_0x2afade, _0x1c383c);
            },
            'EKnWn': _0x36f279(616),
            'AYXLb': _0x36f279(617),
            'sWqiV': _0x36f279(618),
            'jApJX': function (_0x47ccd9, _0x125a8f, _0xbdee70) {
                return _0x47ccd9(_0x125a8f, _0xbdee70);
            },
            'tySeC': _0x36f279(619),
            'omAUU': function (_0x53e368, _0x937122, _0x215358) {
                return _0x53e368(_0x937122, _0x215358);
            },
            'clGQM': _0x36f279(620),
            'jnebh': _0x36f279(621),
            'iZyih': _0x36f279(622),
            'mSXWv': _0x36f279(623),
            'cDPeQ': function (_0x51c8b6, _0x45a6cb, _0x4e80cf) {
                return _0x51c8b6(_0x45a6cb, _0x4e80cf);
            },
            'aondx': _0x36f279(624),
            'ZwDPk': function (_0x594c15, _0x232248, _0x3ed4cd) {
                return _0x594c15(_0x232248, _0x3ed4cd);
            },
            'mRohC': function (_0x331142, _0x11b79c, _0x49aa46) {
                return _0x331142(_0x11b79c, _0x49aa46);
            },
            'fIpEP': _0x36f279(625),
            'XARvy': 'scaffolds out support + files if they do not exist',
            'vOqZw': function (_0x574351, _0x8b365c, _0x56af67) {
                return _0x574351(_0x8b365c, _0x56af67);
            },
            'OYyTk': _0x36f279(626),
            'qvXnJ': function (_0x18589e, _0x29a678, _0x5cb67e) {
                return _0x18589e(_0x29a678, _0x5cb67e);
            },
            'sPtcr': _0x36f279(627),
            'vWxVX': function (_0x3453f5, _0x141f93, _0x100ead) {
                return _0x3453f5(_0x141f93, _0x100ead);
            },
            'HzRQy': _0x36f279(628),
            'ZNgdq': function (_0x2f69d7, _0x5b365f, _0x26c7ec) {
                return _0x2f69d7(_0x5b365f, _0x26c7ec);
            },
            'sEAmq': function (_0x7f8f74, _0x386724, _0x4d2cfb) {
                return _0x7f8f74(_0x386724, _0x4d2cfb);
            },
            'eOtfU': 'logs warning when projectId and key but no record option',
            'RSlCD': 'does not log warning when no projectId',
            'cYzIj': _0x36f279(629),
            'epQIU': function (_0x65378, _0x27b0cd, _0x56f3ac) {
                return _0x65378(_0x27b0cd, _0x56f3ac);
            },
            'zCpsx': _0x36f279(630),
            'YoULU': function (_0x3ca2a6, _0x4c7e89, _0x1d59a5) {
                return _0x3ca2a6(_0x4c7e89, _0x1d59a5);
            },
            'JAmfI': _0x36f279(631),
            'jDthU': _0x36f279(632),
            'miGlk': _0x36f279(633),
            'EDFSH': 'logs error and exits when project has invalid config values from env vars',
            'tuRTb': _0x36f279(634),
            'wVPJl': _0x36f279(635),
            'EJoDf': function (_0x45847c, _0xd09c81, _0x255485) {
                return _0x45847c(_0xd09c81, _0x255485);
            },
            'Xqqtz': _0x36f279(636),
            'GhleR': _0x36f279(637),
            'lekNL': _0x36f279(638),
            'aJxlt': _0x36f279(639),
            'zKjRs': _0x36f279(640),
            'buixq': function (_0xd548ae, _0x35bc4c, _0x5d9f09) {
                return _0xd548ae(_0x35bc4c, _0x5d9f09);
            },
            'KLYfa': _0x36f279(641),
            'sjAPp': _0x36f279(642),
            'nmZoB': _0x36f279(643),
            'evqxI': _0x36f279(644),
            'ESHFI': function (_0x13d428, _0x3fa3a0) {
                return _0x13d428(_0x3fa3a0);
            },
            'zVNkT': _0x36f279(645),
            'Thgqb': 'CYPRESS_PROJECT_ID',
            'TTatZ': _0x36f279(646),
            'DwzRi': _0x36f279(647),
            'LFHNE': _0x36f279(648),
            'brnsx': _0x36f279(649),
            'PWtow': _0x36f279(650),
            'OvJwx': _0x36f279(651),
            'GHIyJ': _0x36f279(652),
            'LmvJC': _0x36f279(653),
            'nfoNZ': _0x36f279(654),
            'SFPpG': _0x36f279(655),
            'hlUrz': _0x36f279(656),
            'HqRoA': 'DASHBOARD_PARALLEL_GROUP_PARAMS_MISMATCH',
            'pcBTV': function (_0x545881, _0x2d23bb) {
                return _0x545881(_0x2d23bb);
            },
            'guOjp': _0x36f279(657),
            'QjGdR': _0x36f279(658),
            'JrLJv': _0x36f279(659),
            'nAAzu': _0x36f279(660),
            'jVrkc': _0x36f279(661),
            'WwIgV': 'Electron',
            'vigki': _0x36f279(662),
            'bpPcf': _0x36f279(663),
            'YyaaI': _0x36f279(664),
            'CEDjy': _0x36f279(665),
            'nojly': _0x36f279(666),
            'FoGRx': _0x36f279(667),
            'pNqhm': '--ci-build-id=ciBuildId123',
            'EjqhP': 'RECORD_PARAMS_WITHOUT_RECORDING-group 1',
            'onNHF': _0x36f279(668),
            'Bibph': _0x36f279(669),
            'AAawN': _0x36f279(670),
            'ooshz': _0x36f279(671),
            'rlrEf': _0x36f279(672),
            'cxQKf': _0x36f279(673),
            'lXSxp': 'PARALLEL_REQUIRED',
            'zKRKB': _0x36f279(674),
            'jtKaI': _0x36f279(675),
            'pPSVK': function (_0x981394, _0x1a173b, _0x4e5db7) {
                return _0x981394(_0x1a173b, _0x4e5db7);
            },
            'osPIX': function (_0x13aff4, _0x6a795c, _0x5035d4) {
                return _0x13aff4(_0x6a795c, _0x5035d4);
            },
            'fMNQU': _0x36f279(676),
            'rPRrv': 'errors and exits when using --group but ciBuildId could not be generated',
            'uJlDy': function (_0x338257, _0x378cb5, _0x2da72e) {
                return _0x338257(_0x378cb5, _0x2da72e);
            },
            'vZKal': _0x36f279(677),
            'CPbxv': function (_0x376c5a, _0x4ac67e, _0xeb5932) {
                return _0x376c5a(_0x4ac67e, _0xeb5932);
            },
            'iYcBZ': _0x36f279(678),
            'XncAz': _0x36f279(679),
            'uhlPN': _0x36f279(680),
            'nuoOa': _0x36f279(681),
            'UJaEi': function (_0x16adbc, _0xae348a, _0x27b28e) {
                return _0x16adbc(_0xae348a, _0x27b28e);
            },
            'zHxRF': 'errors and exits when group name is not unique and explicitly passed ciBuildId',
            'pHoyJ': _0x36f279(682),
            'ljOIp': function (_0x56f4c0, _0x5830d0, _0x14e283) {
                return _0x56f4c0(_0x5830d0, _0x14e283);
            },
            'WSdnb': _0x36f279(683),
            'LYAQz': _0x36f279(684),
            'EiXmz': _0x36f279(685),
            'bhTbB': _0x36f279(686),
            'FKdSn': function (_0x583b52, _0x466ab3) {
                return _0x583b52(_0x466ab3);
            },
            'brgVu': _0x36f279(687),
            'xfddM': function (_0x353140, _0x52ba77) {
                return _0x353140(_0x52ba77);
            },
            'eMWLS': _0x36f279(688),
            'gxigG': function (_0x29eae1, _0x1691b7) {
                return _0x29eae1(_0x1691b7);
            },
            'ibPgP': _0x36f279(689),
            'hOqgz': function (_0x581bf0, _0x639589) {
                return _0x581bf0(_0x639589);
            },
            'iqEry': 'logs pong value and exits',
            'wsAEa': _0x36f279(690),
            'NjIwH': _0x36f279(691),
            'JwRev': '--config=pageLoadTimeout=1000',
            'rqQeo': 'Blah blah baseUrl blah blah',
            'dyDNW': _0x36f279(692),
            'tufYk': _0x36f279(693),
            'oKzHg': _0x36f279(694),
            'TQPGM': function (_0x2cae6f, _0x455530) {
                return _0x2cae6f(_0x455530);
            },
            'nJxdP': _0x36f279(695),
            'NPGAY': function (_0x919156, _0x71c5a4, _0x4388ac) {
                return _0x919156(_0x71c5a4, _0x4388ac);
            },
            'JPqVC': _0x36f279(696),
            'pmILx': function (_0x22e026, _0x698b1) {
                return _0x22e026(_0x698b1);
            },
            'OSQcS': function (_0x53e29e, _0xde730a, _0x202fde) {
                return _0x53e29e(_0xde730a, _0x202fde);
            },
            'MfhZn': 'reads config from a custom config file',
            'tHCGi': function (_0x1b4ac3, _0x50d80f, _0x334cde) {
                return _0x1b4ac3(_0x50d80f, _0x334cde);
            },
            'AYCuD': _0x36f279(697),
            'NrQDN': function (_0xc99463, _0xedd8ec) {
                return _0xc99463(_0xedd8ec);
            },
            'keNil': _0x36f279(698),
            'JzBYD': '--env=baz=baz',
            'EFltT': 'http://localhost',
            'WimBX': function (_0x3712e7, _0x49707b) {
                return _0x3712e7(_0x49707b);
            },
            'OkjZw': function (_0x5057ec, _0x2c3b1b) {
                return _0x5057ec(_0x2c3b1b);
            },
            'PXIdm': _0x36f279(699),
            'QUlZE': 'watchForFileChanges',
            'EokVj': _0x36f279(700),
            'FngUH': _0x36f279(701),
            'eyyZO': _0x36f279(702),
            'TMpCF': _0x36f279(703),
            'IUJDB': _0x36f279(704),
            'BVcPz': 'brian',
            'XPuGK': _0x36f279(705),
            'zjtUm': function (_0xdb58a0, _0x23c92a) {
                return _0xdb58a0(_0x23c92a);
            },
            'XgtxE': _0x36f279(706),
            'QPgid': _0x36f279(707),
            'spOaq': function (_0x1c0071, _0x54454f, _0x3fd800) {
                return _0x1c0071(_0x54454f, _0x3fd800);
            },
            'HniNF': 'passes options to interactiveMode.ready',
            'eJUwv': function (_0x55e742, _0x2e2790, _0x1ee38b) {
                return _0x55e742(_0x2e2790, _0x1ee38b);
            },
            'yAdfG': _0x36f279(708),
            'tEPFk': _0x36f279(709),
            'uaKJC': function (_0x326870, _0x444c47, _0x279bcd) {
                return _0x326870(_0x444c47, _0x279bcd);
            },
            'YonPk': function (_0x3e3b11, _0x3dc41b) {
                return _0x3e3b11(_0x3dc41b);
            },
            'xfRPT': _0x36f279(710),
            'YyEVi': function (_0x87947c, _0x2ddf51) {
                return _0x87947c(_0x2ddf51);
            },
            'JBRnl': _0x36f279(711),
            'Vhvgb': _0x36f279(712),
            'Nmsxn': _0x36f279(713),
            'lBGFz': _0x36f279(714),
            'vJSDQ': function (_0x3a5970, _0x536fd9, _0x2e3333) {
                return _0x3a5970(_0x536fd9, _0x2e3333);
            },
            'xQhJR': _0x36f279(715),
            'hlJCv': function (_0x11c0ec, _0x4f48aa, _0x11cf2b) {
                return _0x11c0ec(_0x4f48aa, _0x11cf2b);
            },
            'tBLpL': function (_0x39b5dc, _0xe6eb16, _0x1828ea) {
                return _0x39b5dc(_0xe6eb16, _0x1828ea);
            },
            'kCJEj': _0x36f279(716),
            'zQkrk': function (_0x196fa4, _0x14f7c8, _0x3ecc74) {
                return _0x196fa4(_0x14f7c8, _0x3ecc74);
            },
            'KlPbQ': _0x36f279(717)
        };
    require(_0x2c8337[_0x36f279(718)])[_0x36f279(719)](), _0x2c8337['YyEVi'](beforeEach, function () {
        const _0x1c3884 = _0x36f279;
        this['timeout'](1 * 10981 + -14487 + -523 * -22), cache[_0x1c3884(720)](), Fixtures['scaffold'](), this[_0x1c3884(721)] = Fixtures[_0x1c3884(722)](_0x2c8337[_0x1c3884(723)]), this['pristinePath'] = Fixtures[_0x1c3884(722)](_0x2c8337[_0x1c3884(724)]), this['noScaffolding'] = Fixtures[_0x1c3884(722)](_0x2c8337['FYozx']), this[_0x1c3884(725)] = Fixtures['projectPath'](_0x2c8337[_0x1c3884(726)]), this[_0x1c3884(727)] = Fixtures[_0x1c3884(722)](_0x2c8337[_0x1c3884(728)]), this[_0x1c3884(729)] = Fixtures[_0x1c3884(722)](_0x2c8337[_0x1c3884(730)]), this['idsPath'] = Fixtures[_0x1c3884(722)](_0x1c3884(731)), sinon[_0x1c3884(732)](videoCapture, _0x2c8337[_0x1c3884(733)])[_0x1c3884(734)]({}), sinon[_0x1c3884(732)](plugins, _0x2c8337['sUyNI'])['resolves'](undefined), sinon['stub'](electronApp, _0x2c8337['vlVXO'])['returns'](!![]), sinon['stub'](extension, _0x2c8337[_0x1c3884(735)])[_0x1c3884(734)](), sinon[_0x1c3884(732)](detect, _0x2c8337[_0x1c3884(736)])['resolves'](TYPICAL_BROWSERS), sinon[_0x1c3884(732)](process, _0x2c8337[_0x1c3884(737)]), sinon['stub'](ServerE2E[_0x1c3884(738)], _0x1c3884(739)), sinon[_0x1c3884(732)](errors, _0x2c8337[_0x1c3884(740)])['callThrough']()[_0x1c3884(741)]('INVOKED_BINARY_OUTSIDE_NPM_MODULE')[_0x1c3884(742)](null), sinon[_0x1c3884(743)](errors, _0x2c8337['AXnKp']), sinon[_0x1c3884(743)](errors, _0x2c8337[_0x1c3884(744)]), sinon['spy'](console, _0x2c8337[_0x1c3884(745)]), sinon[_0x1c3884(732)](process, _0x2c8337['jayBC'])[_0x1c3884(527)]({
            'chrome': ELECTRON_BROWSER[_0x1c3884(746)],
            'electron': '123.45.6789'
        }), this[_0x1c3884(747)] = _0x410931 => {
            const _0x446135 = _0x1c3884;
            _0x2c8337[_0x446135(748)](expect, process[_0x446135(537)])['to']['be']['calledWith'](_0x410931);
        }, this['expectExitWithErr'] = (_0x79f00f, _0x3b65d7, _0x3f52b3) => {
            const _0x3f82c1 = _0x1c3884;
            expect(errors[_0x3f82c1(524)], _0x2c8337[_0x3f82c1(749)])['to']['be'][_0x3f82c1(750)]({ 'type': _0x79f00f }), _0x2c8337[_0x3f82c1(751)](expect, process['exit'], _0x3f82c1(752))['to']['be'][_0x3f82c1(753)](-5 * -1788 + -7769 + -1170);
            const _0x1a39f8 = errors['log'][_0x3f82c1(754)](2653 * -3 + 1 * 8808 + -849)['args'][-271 + -8191 * -1 + 220 * -36];
            return _0x3b65d7 && _0x2c8337[_0x3f82c1(751)](expect, _0x1a39f8[_0x3f82c1(755)], _0x3f82c1(756))['to'][_0x3f82c1(757)](_0x3b65d7), _0x3f52b3 && _0x2c8337[_0x3f82c1(751)](expect, _0x1a39f8[_0x3f82c1(755)], _0x3f82c1(758))['to'][_0x3f82c1(757)](_0x3f52b3), _0x1a39f8;
        };
    }), _0x2c8337['YyEVi'](afterEach, async () => {
        const _0x394596 = _0x36f279;
        try {
            await openProject[_0x394596(759)]();
        } catch (_0x4e705d) {
        }
        Fixtures[_0x394596(760)]();
    }), context(_0x36f279(761), () => {
        const _0x1dd1d7 = _0x36f279, _0xc85c62 = {
                'iJLnC': function (_0x2b7118, _0x316462) {
                    return _0x2b7118(_0x316462);
                },
                'WhhPb': _0x2c8337[_0x1dd1d7(762)]
            };
        _0x2c8337[_0x1dd1d7(763)](it, 'has valid browsers', () => {
            const _0x557dab = _0x1dd1d7;
            _0xc85c62[_0x557dab(764)](expect, v[_0x557dab(765)](_0xc85c62[_0x557dab(766)], TYPICAL_BROWSERS))['to']['be'][_0x557dab(767)];
        }), _0x2c8337[_0x1dd1d7(763)](it, _0x1dd1d7(768), () => {
            const _0x5c7d89 = _0x1dd1d7;
            _0xc85c62[_0x5c7d89(764)](expect, v[_0x5c7d89(765)](_0xc85c62[_0x5c7d89(766)], [ELECTRON_BROWSER]))['to']['be'][_0x5c7d89(767)];
        }), _0x2c8337[_0x1dd1d7(763)](it, _0x2c8337[_0x1dd1d7(769)], () => {
            const _0x3ecd25 = _0x1dd1d7, _0xb628f9 = {
                    'name': _0x2c8337[_0x3ecd25(770)],
                    'family': _0x2c8337[_0x3ecd25(771)],
                    'displayName': _0x2c8337[_0x3ecd25(770)],
                    'version': _0x2c8337[_0x3ecd25(772)],
                    'path': _0x2c8337[_0x3ecd25(773)],
                    'majorVersion': 80
                };
            expect(v['isValidBrowserList'](_0x2c8337[_0x3ecd25(762)], [_0xb628f9]))['to']['be'][_0x3ecd25(767)];
        }), _0x2c8337['gLWQV'](it, _0x2c8337[_0x1dd1d7(774)], () => {
            const _0x30d417 = _0x1dd1d7, _0x4c52f0 = { 'ssqOf': _0xc85c62[_0x30d417(766)] };
            return browserUtils['getBrowsers']()[_0x30d417(775)](_0x22d56f => {
                const _0x2cc3b4 = _0x30d417;
                expect(v[_0x2cc3b4(765)](_0x4c52f0['ssqOf'], _0x22d56f))['to']['be'][_0x2cc3b4(767)];
            });
        });
    }), _0x2c8337[_0x36f279(776)](context, _0x36f279(777), function () {
        const _0x506aaa = _0x36f279, _0x48031c = {
                'Eoriz': _0x506aaa(546),
                'SnCSd': _0x2c8337[_0x506aaa(778)]
            };
        _0x2c8337[_0x506aaa(779)](it, _0x2c8337['UuznB'], function () {
            const _0x1af883 = _0x506aaa;
            return cypress['start']([
                _0x1af883(692),
                _0x2c8337[_0x1af883(780)]
            ])[_0x1af883(775)](() => {
                const _0x5983ca = _0x1af883, _0x34a095 = this[_0x5983ca(781)](_0x48031c[_0x5983ca(782)]);
                snapshot(_0x48031c[_0x5983ca(783)], stripAnsi(_0x34a095[_0x5983ca(755)]));
            });
        }), _0x2c8337[_0x506aaa(784)](it, _0x2c8337[_0x506aaa(785)], function () {
            const _0x10dd2c = _0x506aaa, _0x16dea6 = {
                    'scSGR': _0x10dd2c(546),
                    'EgigL': function (_0x536a79, _0x565901, _0x2a5422) {
                        return _0x2c8337['gLWQV'](_0x536a79, _0x565901, _0x2a5422);
                    },
                    'CcaWG': _0x10dd2c(786)
                };
            return cypress[_0x10dd2c(534)]([
                _0x10dd2c(577),
                _0x2c8337[_0x10dd2c(787)]
            ])['then'](() => {
                const _0x1e98ea = _0x10dd2c, _0x352d91 = this['expectExitWithErr'](_0x16dea6[_0x1e98ea(788)]);
                _0x16dea6[_0x1e98ea(789)](snapshot, _0x16dea6[_0x1e98ea(790)], stripAnsi(_0x352d91[_0x1e98ea(755)]));
            });
        }), _0x2c8337[_0x506aaa(784)](it, _0x2c8337[_0x506aaa(791)], function () {
            const _0x1df75e = _0x506aaa, _0x4007b7 = {
                    'slzXR': _0x2c8337['eecfm'],
                    'wLRbI': function (_0x1d709b, _0x52c202, _0x1b45bc) {
                        return _0x1d709b(_0x52c202, _0x1b45bc);
                    },
                    'qFIfu': _0x2c8337[_0x1df75e(792)],
                    'IdPWr': function (_0x204970, _0x2ecc47) {
                        return _0x204970(_0x2ecc47);
                    }
                };
            return cypress['start']([
                _0x2c8337[_0x1df75e(793)],
                _0x1df75e(794)
            ])[_0x1df75e(775)](() => {
                const _0x402149 = _0x1df75e, _0x3ec25e = this[_0x402149(781)](_0x4007b7[_0x402149(795)]);
                _0x4007b7[_0x402149(796)](snapshot, _0x4007b7[_0x402149(797)], _0x4007b7[_0x402149(798)](stripAnsi, _0x3ec25e[_0x402149(755)]));
            });
        });
    }), _0x2c8337['uaKJC'](context, _0x2c8337[_0x36f279(799)], function () {
        const _0x3cdacf = _0x36f279, _0xc4e632 = {
                'EUpLD': 'ready',
                'JIQMJ': 'open',
                'jcslL': _0x2c8337[_0x3cdacf(800)],
                'yDAWA': _0x2c8337[_0x3cdacf(801)],
                'kbUbv': function (_0x5b770f, _0x276b5f) {
                    return _0x5b770f(_0x276b5f);
                },
                'keVao': _0x2c8337['jxVgw'],
                'XJfbK': function (_0x49bdbd, _0x2eaf80) {
                    const _0x541040 = _0x3cdacf;
                    return _0x2c8337[_0x541040(748)](_0x49bdbd, _0x2eaf80);
                },
                'QqtXK': function (_0x34116f, _0x273c72) {
                    const _0x5d366c = _0x3cdacf;
                    return _0x2c8337[_0x5d366c(748)](_0x34116f, _0x273c72);
                },
                'SsMsU': _0x2c8337[_0x3cdacf(802)],
                'clbEv': _0x3cdacf(803)
            };
        _0x2c8337['JCcnn'](beforeEach, function () {
            const _0x4fd6d7 = _0x3cdacf;
            this['win'] = {
                'on': sinon[_0x4fd6d7(732)](),
                'webContents': { 'on': sinon[_0x4fd6d7(732)]() }
            }, sinon[_0x4fd6d7(732)](electron[_0x4fd6d7(804)], 'on')[_0x4fd6d7(741)](_0xc4e632[_0x4fd6d7(805)])[_0x4fd6d7(806)](), sinon[_0x4fd6d7(732)](Windows, _0xc4e632[_0x4fd6d7(807)])['resolves'](this[_0x4fd6d7(808)]);
        }), _0x2c8337[_0x3cdacf(809)](it, _0x2c8337['EMGnk'], function () {
            const _0x5406f7 = _0x3cdacf;
            return cypress[_0x5406f7(534)]([
                _0x5406f7(810),
                '--cwd=/foo/bar'
            ])[_0x5406f7(775)](() => {
                const _0x297337 = _0x5406f7;
                expect(errors[_0x297337(538)])['to']['be'][_0x297337(753)](_0xc4e632[_0x297337(811)]), expect(console[_0x297337(524)])['to']['be'][_0x297337(750)](_0xc4e632['yDAWA']), _0xc4e632[_0x297337(812)](expect, console['log'])['to']['be'][_0x297337(750)](_0x297337(813));
            });
        }), _0x2c8337[_0x3cdacf(809)](it, _0x2c8337[_0x3cdacf(814)], function () {
            const _0x1079d6 = _0x3cdacf;
            return cypress[_0x1079d6(534)]([
                _0xc4e632['SsMsU'],
                _0x1079d6(815)
            ])[_0x1079d6(775)](() => {
                const _0x29898f = _0x1079d6, _0xfed473 = _0x29898f(816)[_0x29898f(817)]('|');
                let _0xde5de9 = 6040 + 9697 + -15737;
                while (!![]) {
                    switch (_0xfed473[_0xde5de9++]) {
                    case '0':
                        _0xc4e632['kbUbv'](expect, console[_0x29898f(524)])['to']['be'][_0x29898f(750)](_0xc4e632[_0x29898f(818)]);
                        continue;
                    case '1':
                        _0xc4e632[_0x29898f(819)](expect, console[_0x29898f(524)])['to']['be'][_0x29898f(750)]('https://on.cypress.io/configuration');
                        continue;
                    case '2':
                        _0xc4e632[_0x29898f(820)](expect, console[_0x29898f(524)])['to']['be'][_0x29898f(750)](_0xc4e632[_0x29898f(821)]);
                        continue;
                    case '3':
                        _0xc4e632[_0x29898f(820)](snapshotConsoleLogs, _0xc4e632[_0x29898f(811)]);
                        continue;
                    case '4':
                        expect(errors[_0x29898f(538)])['to']['be']['calledWith'](_0xc4e632['jcslL']);
                        continue;
                    }
                    break;
                }
            });
        }), _0x2c8337[_0x3cdacf(809)](it, 'does not show warning if config is valid', function () {
            const _0x46bee0 = _0x3cdacf, _0x4b6777 = {
                    'mfdQG': function (_0x38eb12, _0x40b18f) {
                        return _0x38eb12(_0x40b18f);
                    }
                };
            return cypress['start']([_0xc4e632[_0x46bee0(822)]])[_0x46bee0(775)](() => {
                const _0x235f1f = _0x46bee0;
                _0x4b6777[_0x235f1f(823)](expect, errors[_0x235f1f(538)])['to']['not']['be'][_0x235f1f(753)](_0x235f1f(824));
            });
        });
    }), _0x2c8337[_0x36f279(776)](context, _0x36f279(825), () => {
        const _0x472846 = _0x36f279, _0x2e09ce = {
                'TiirF': _0x2c8337[_0x472846(826)],
                'seAmi': _0x2c8337[_0x472846(827)],
                'XQJMd': _0x472846(828),
                'VkGlQ': _0x2c8337[_0x472846(829)],
                'iqxiu': _0x2c8337[_0x472846(830)],
                'lWWmI': function (_0x4dbab3, _0x696dd5) {
                    return _0x2c8337['fYTiO'](_0x4dbab3, _0x696dd5);
                },
                'WeEcd': function (_0x386190, _0x41dab4) {
                    return _0x2c8337['fYTiO'](_0x386190, _0x41dab4);
                },
                'IIVqT': _0x2c8337[_0x472846(831)],
                'AqEZs': _0x2c8337[_0x472846(832)],
                'LoGDM': _0x472846(833),
                'LjHQW': function (_0x2ac614, _0x2dc4a4) {
                    return _0x2ac614(_0x2dc4a4);
                },
                'ZfJLi': 'toObject',
                'AUhZJ': function (_0x43b134, _0x16e227) {
                    const _0x1cf469 = _0x472846;
                    return _0x2c8337[_0x1cf469(834)](_0x43b134, _0x16e227);
                },
                'JCCOn': function (_0x5012f7, _0x22073c, _0x2461a5) {
                    return _0x2c8337['yhnPv'](_0x5012f7, _0x22073c, _0x2461a5);
                },
                'CpmYU': _0x2c8337[_0x472846(835)],
                'XGlSL': _0x2c8337[_0x472846(836)],
                'biBwQ': _0x472846(837),
                'YnglF': _0x2c8337[_0x472846(838)],
                'zugxX': _0x2c8337[_0x472846(839)],
                'DBuSM': function (_0x4cc136, _0x54a27c) {
                    const _0x479733 = _0x472846;
                    return _0x2c8337[_0x479733(834)](_0x4cc136, _0x54a27c);
                },
                'JPbsy': function (_0x13fbf1, _0x5e9692) {
                    return _0x2c8337['Uogdn'](_0x13fbf1, _0x5e9692);
                },
                'scZxf': _0x2c8337[_0x472846(840)],
                'bMRpr': _0x2c8337[_0x472846(841)],
                'TKnsi': function (_0xeac826, _0x46c8bc) {
                    const _0x115fd0 = _0x472846;
                    return _0x2c8337[_0x115fd0(834)](_0xeac826, _0x46c8bc);
                },
                'cILVb': _0x472846(842),
                'aPcwE': function (_0x2fe0d8, _0x13cfe7) {
                    const _0x51da15 = _0x472846;
                    return _0x2c8337[_0x51da15(834)](_0x2fe0d8, _0x13cfe7);
                },
                'AEjbS': '--no-run-mode',
                'HHxBC': _0x2c8337[_0x472846(843)],
                'EehfC': _0x2c8337['IShBw'],
                'IwYLo': 'files.spec.js',
                'OXvGB': 'cypress',
                'dIHhQ': _0x472846(570),
                'LbVoN': _0x2c8337[_0x472846(844)],
                'DElTt': _0x472846(845),
                'wPASG': _0x2c8337[_0x472846(846)],
                'TqyWT': 'fixturesFolder should not exist!',
                'edkMs': function (_0x344af3, _0x2082fa) {
                    const _0x52e7f6 = _0x472846;
                    return _0x2c8337[_0x52e7f6(847)](_0x344af3, _0x2082fa);
                },
                'VBJBa': _0x2c8337[_0x472846(848)],
                'GVZZQ': _0x2c8337['vpjaz'],
                'FQPAp': _0x2c8337['GGATf'],
                'TLOFm': _0x2c8337[_0x472846(849)],
                'CpouY': _0x472846(850),
                'cHrZz': _0x2c8337[_0x472846(851)],
                'sKJFn': _0x2c8337[_0x472846(852)],
                'NVuTX': function (_0xc5ad4f, _0x24faec) {
                    const _0x58c839 = _0x472846;
                    return _0x2c8337[_0x58c839(853)](_0xc5ad4f, _0x24faec);
                },
                'qbSjl': _0x472846(854),
                'gXHYp': _0x2c8337[_0x472846(855)],
                'whKmq': _0x2c8337['RjZam'],
                'CWPTb': _0x472846(856),
                'xtQKg': _0x2c8337[_0x472846(857)],
                'cKRFd': _0x2c8337['gxeNo'],
                'xtAem': function (_0x236586, _0x32454c, _0x4ee7ef) {
                    return _0x236586(_0x32454c, _0x4ee7ef);
                },
                'HKuoG': _0x2c8337[_0x472846(858)],
                'oJkEy': function (_0x36896b, _0x4de372, _0x4448c4) {
                    const _0x4f5403 = _0x472846;
                    return _0x2c8337[_0x4f5403(859)](_0x36896b, _0x4de372, _0x4448c4);
                },
                'JqpwG': _0x2c8337[_0x472846(860)],
                'lFKku': _0x472846(861),
                'pLoLn': _0x2c8337[_0x472846(862)],
                'NjcrK': _0x2c8337[_0x472846(863)],
                'JZAZt': _0x2c8337['JkVCP'],
                'KtfXs': 'SETTINGS_VALIDATION_ERROR',
                'UHdCl': 'localhost:9999',
                'EQpna': _0x2c8337[_0x472846(864)],
                'xEmDp': _0x2c8337[_0x472846(865)],
                'obbbW': _0x472846(866),
                'DvNyk': _0x2c8337[_0x472846(867)],
                'mqEuL': _0x472846(868),
                'FrDuK': _0x2c8337[_0x472846(869)],
                'LEfwL': _0x2c8337['djCnt'],
                'jMEOS': _0x2c8337[_0x472846(870)],
                'jEujT': function (_0xd48b49, _0x224f4c) {
                    const _0x18a0ae = _0x472846;
                    return _0x2c8337[_0x18a0ae(871)](_0xd48b49, _0x224f4c);
                },
                'ITlsY': _0x2c8337[_0x472846(872)],
                'cmYIs': _0x472846(873),
                'wTecf': _0x2c8337[_0x472846(737)],
                'FjYQt': _0x2c8337[_0x472846(874)],
                'qcHcy': _0x2c8337[_0x472846(875)],
                'pUwof': _0x2c8337['ZQbes'],
                'WDBDA': _0x472846(876),
                'yuuBg': _0x2c8337[_0x472846(877)],
                'UCKrC': _0x472846(878),
                'CpGcM': _0x2c8337[_0x472846(879)],
                'uYKhL': _0x2c8337[_0x472846(880)],
                'RjoVb': _0x2c8337['UbGhe'],
                'BtmnE': function (_0x1c90df, _0x48a19a, _0x45d584) {
                    return _0x1c90df(_0x48a19a, _0x45d584);
                },
                'escPE': _0x472846(881),
                'jgdkn': _0x2c8337[_0x472846(882)],
                'XJRAD': _0x2c8337['tAdEQ'],
                'nftxP': 'getAutomation',
                'urLGS': _0x2c8337[_0x472846(883)],
                'YvykY': _0x2c8337[_0x472846(884)],
                'Teccf': function (_0xbf0d0e, _0x540aee, _0x5b17e7) {
                    return _0xbf0d0e(_0x540aee, _0x5b17e7);
                },
                'YAhpZ': _0x2c8337[_0x472846(885)],
                'SjvdI': function (_0x1dd8d5, _0x188f77) {
                    return _0x2c8337['yTPgw'](_0x1dd8d5, _0x188f77);
                },
                'yvppz': _0x2c8337[_0x472846(886)],
                'rNXIi': _0x2c8337[_0x472846(887)],
                'ayawe': _0x2c8337[_0x472846(888)],
                'AAATb': _0x2c8337['FYSZc'],
                'lVpDU': function (_0xa7ab6c, _0x37c11f, _0x47c4e2) {
                    const _0x5ccde2 = _0x472846;
                    return _0x2c8337[_0x5ccde2(889)](_0xa7ab6c, _0x37c11f, _0x47c4e2);
                },
                'rBTFN': 'false does not require cypress.json to run',
                'RwXNe': function (_0x46e872, _0x39cd3d, _0x46a71f) {
                    const _0x5c7977 = _0x472846;
                    return _0x2c8337[_0x5c7977(889)](_0x46e872, _0x39cd3d, _0x46a71f);
                },
                'BpjAd': _0x472846(890)
            };
        _0x2c8337[_0x472846(891)](beforeEach, () => {
            const _0x35d011 = _0x472846, _0x35ab09 = _0x2e09ce[_0x35d011(892)][_0x35d011(817)]('|');
            let _0x5af3c2 = -4429 + 5110 + -681;
            while (!![]) {
                switch (_0x35ab09[_0x5af3c2++]) {
                case '0':
                    sinon['stub'](runMode, _0x35d011(893))[_0x35d011(734)]();
                    continue;
                case '1':
                    sinon[_0x35d011(732)](commitInfo, _0x2e09ce[_0x35d011(894)])[_0x35d011(734)](_0x2e09ce[_0x35d011(895)]);
                    continue;
                case '2':
                    sinon[_0x35d011(732)](runMode, _0x2e09ce[_0x35d011(896)])[_0x35d011(734)]({ 'stats': { 'failures': 0 } });
                    continue;
                case '3':
                    sinon[_0x35d011(732)](browsers, _0x35d011(644));
                    continue;
                case '4':
                    sinon[_0x35d011(732)](electron['app'], 'on')[_0x35d011(741)](_0x2e09ce[_0x35d011(897)])[_0x35d011(806)]();
                    continue;
                }
                break;
            }
        }), _0x2c8337[_0x472846(898)](it, _0x2c8337['EKnWn'], function () {
            const _0x4345a9 = _0x472846;
            return cypress[_0x4345a9(534)](['--run-project=' + this[_0x4345a9(721)]])[_0x4345a9(775)](() => {
                const _0x257b90 = _0x4345a9;
                _0x2e09ce[_0x257b90(899)](expect, browsers['open'])['to']['be'][_0x257b90(750)](ELECTRON_BROWSER), this[_0x257b90(747)](-3369 + 132 * 36 + -461 * 3);
            });
        }), _0x2c8337[_0x472846(898)](it, _0x2c8337[_0x472846(900)], function () {
            const _0x56b1a1 = _0x472846;
            return sinon[_0x56b1a1(743)](cypress, _0x2e09ce[_0x56b1a1(901)]), cypress[_0x56b1a1(534)]([
                '--run-project=' + this['todosPath'],
                _0x2e09ce[_0x56b1a1(902)]
            ])[_0x56b1a1(775)](() => {
                const _0x2ec9ea = _0x56b1a1;
                expect(browsers['open'])['to']['be']['calledWithMatch'](ELECTRON_BROWSER), this[_0x2ec9ea(747)](11 * -157 + -4 * -899 + 1 * -1869), _0x2e09ce[_0x2ec9ea(903)](expect, cypress[_0x2ec9ea(582)])['to']['be'][_0x2ec9ea(904)], _0x2e09ce[_0x2ec9ea(903)](expect, cypress[_0x2ec9ea(582)])['to']['be']['calledWith'](_0x2e09ce[_0x2ec9ea(905)]);
                const _0x374954 = cypress[_0x2ec9ea(582)][_0x2ec9ea(906)][_0x2ec9ea(907)][-5342 + -3476 + -8819 * -1];
                _0x2e09ce[_0x2ec9ea(903)](expect, _0x374954)['to'][_0x2ec9ea(757)]({
                    'headless': !![],
                    'headed': ![]
                });
            });
        }), it(_0x2c8337[_0x472846(908)], function () {
            const _0x4af9cf = _0x472846;
            _0x2c8337[_0x4af9cf(909)](expect, () => cypress[_0x4af9cf(534)]([
                '--run-project=' + this['todosPath'],
                _0x4af9cf(833),
                _0x4af9cf(910)
            ]))['to']['throw'](_0x2c8337[_0x4af9cf(911)]);
        }), _0x2c8337['jApJX'](describe, _0x2c8337[_0x472846(912)], () => {
            const _0x44b1ca = _0x472846, _0xe7002e = {
                    'OKdKa': _0x2e09ce[_0x44b1ca(913)],
                    'AjcyF': function (_0x1d85e0, _0x451426) {
                        const _0xb800eb = _0x44b1ca;
                        return _0x2e09ce[_0xb800eb(914)](_0x1d85e0, _0x451426);
                    },
                    'aCwVi': function (_0x22e4d1, _0x1293cb) {
                        return _0x2e09ce['AUhZJ'](_0x22e4d1, _0x1293cb);
                    }
                };
            _0x2e09ce['AUhZJ'](beforeEach, () => {
                const _0x11fb0b = _0x44b1ca;
                sinon[_0x11fb0b(743)](argsUtil, _0xe7002e[_0x11fb0b(915)]);
            }), _0x2e09ce[_0x44b1ca(916)](it, _0x2e09ce[_0x44b1ca(917)], function () {
                const _0x50478f = _0x44b1ca;
                return cypress[_0x50478f(534)]([
                    '--',
                    _0x50478f(918) + this['todosPath']
                ])[_0x50478f(775)](() => {
                    const _0xcf7d70 = _0x50478f;
                    _0xe7002e['AjcyF'](expect, argsUtil[_0xcf7d70(919)])['to'][_0xcf7d70(920)]['been'][_0xcf7d70(753)]([_0xcf7d70(918) + this[_0xcf7d70(721)]]), _0xe7002e[_0xcf7d70(921)](expect, browsers[_0xcf7d70(644)])['to']['be'][_0xcf7d70(750)](ELECTRON_BROWSER), this[_0xcf7d70(747)](2840 * -1 + 40 * 181 + -4400);
                });
            }), _0x2e09ce[_0x44b1ca(916)](it, _0x2e09ce[_0x44b1ca(922)], function () {
                const _0x2da200 = _0x44b1ca, _0x3fec24 = {
                        'LoGoL': function (_0x5c2b47, _0x2d9840) {
                            return _0x2e09ce['LjHQW'](_0x5c2b47, _0x2d9840);
                        },
                        'stWKg': function (_0x46e6da, _0x88c833) {
                            return _0x46e6da(_0x88c833);
                        }
                    };
                return cypress[_0x2da200(534)]([
                    _0x2da200(918) + this['todosPath'],
                    '--',
                    _0x2da200(608)
                ])[_0x2da200(775)](() => {
                    const _0x821f3c = _0x2da200;
                    _0x3fec24[_0x821f3c(923)](expect, argsUtil[_0x821f3c(919)])['to']['have'][_0x821f3c(924)][_0x821f3c(753)]([
                        '--run-project=' + this['todosPath'],
                        _0x821f3c(608)
                    ]), _0x3fec24[_0x821f3c(925)](expect, browsers['open'])['to']['be'][_0x821f3c(750)](ELECTRON_BROWSER), this[_0x821f3c(747)](6485 * 1 + -6147 + -1 * 338);
                });
            });
        }), _0x2c8337['omAUU'](it, _0x2c8337[_0x472846(926)], function () {
            const _0x5b4e3a = _0x472846;
            return sinon[_0x5b4e3a(732)](runMode, _0x2c8337[_0x5b4e3a(927)])[_0x5b4e3a(734)]({ 'totalFailed': 10 }), cypress[_0x5b4e3a(534)]([_0x5b4e3a(918) + this[_0x5b4e3a(721)]])['then'](() => {
                const _0x5e8e6b = _0x5b4e3a;
                this[_0x5e8e6b(747)](8 * 23 + 76 * -93 + 6894);
            });
        }), it(_0x2c8337[_0x472846(928)], function () {
            const _0x153496 = _0x472846, _0x543f78 = {
                    'dnukv': _0x2e09ce[_0x153496(929)],
                    'RzbFP': function (_0x3d401e, _0x4b4c9b) {
                        return _0x3d401e(_0x4b4c9b);
                    },
                    'xRUuz': function (_0x1a60dd, _0x4c481d) {
                        return _0x1a60dd(_0x4c481d);
                    },
                    'CEbRV': _0x2e09ce[_0x153496(930)]
                };
            return sinon[_0x153496(732)](api, _0x153496(931)), user[_0x153496(932)]({ 'authToken': _0x2e09ce[_0x153496(933)] })[_0x153496(775)](() => {
                const _0x1e3473 = _0x153496;
                return cypress[_0x1e3473(534)](['--run-project=' + this[_0x1e3473(934)]]);
            })[_0x153496(775)](() => {
                const _0x57e373 = _0x153496;
                this[_0x57e373(747)](2387 + 6723 + -9110);
            })[_0x153496(775)](() => {
                const _0x4900e2 = _0x153496, _0x5b5ed5 = {
                        'INPYQ': _0x543f78[_0x4900e2(935)],
                        'KzeVz': function (_0xb80d92, _0x1e62dd) {
                            const _0x491d5a = _0x4900e2;
                            return _0x543f78[_0x491d5a(936)](_0xb80d92, _0x1e62dd);
                        }
                    };
                return _0x543f78['xRUuz'](expect, api[_0x4900e2(931)])[_0x4900e2(937)]['to']['be'][_0x4900e2(938)], new ProjectBase({
                    'projectRoot': this[_0x4900e2(934)],
                    'testingType': _0x543f78[_0x4900e2(939)]
                })[_0x4900e2(940)]()[_0x4900e2(775)](() => {
                    throw new Error(_0x5b5ed5['INPYQ']);
                })['catch'](_0x3b8419 => {
                    const _0x4adbe9 = _0x4900e2;
                    _0x5b5ed5[_0x4adbe9(941)](expect, _0x3b8419[_0x4adbe9(942)])['to']['eq']('NO_PROJECT_ID');
                });
            });
        }), _0x2c8337[_0x472846(943)](it, _0x472846(944), function () {
            const _0x5c025e = _0x472846, _0xfd2ead = {
                    'FVpAw': function (_0x2b45d9, _0x304961) {
                        const _0x1a9401 = _0x2686;
                        return _0x2e09ce[_0x1a9401(945)](_0x2b45d9, _0x304961);
                    }
                };
            return cache[_0x5c025e(946)]()[_0x5c025e(775)](_0x58e669 => {
                const _0x55b65f = _0x5c025e;
                return _0x2e09ce['AUhZJ'](expect, _0x58e669[_0x55b65f(947)])['to']['eq'](1997 * -2 + 292 * -32 + 26 * 513), cypress['start']([_0x55b65f(918) + this[_0x55b65f(721)]]);
            })['then'](() => {
                return cache['getProjectRoots']();
            })[_0x5c025e(775)](_0x5b80e4 => {
                const _0x22ceb5 = _0x5c025e;
                _0xfd2ead[_0x22ceb5(948)](expect, _0x5b80e4[_0x22ceb5(947)])['to']['eq'](3656 * -1 + 3728 + 9 * -8);
            });
        }), it(_0x472846(949), function () {
            const _0x10168d = _0x472846, _0x367bda = {
                    'VgFsV': function (_0x3fa105, _0x2aba5c) {
                        return _0x2c8337['tdKgq'](_0x3fa105, _0x2aba5c);
                    },
                    'rOEiF': _0x10168d(842)
                }, _0x4419f4 = path[_0x10168d(950)](cwd(), this[_0x10168d(721)]);
            return cypress[_0x10168d(534)]([
                '--run-project=' + this[_0x10168d(721)],
                _0x10168d(951) + _0x4419f4 + _0x10168d(952)
            ])[_0x10168d(775)](() => {
                const _0x32c076 = _0x10168d;
                _0x367bda[_0x32c076(953)](expect, browsers[_0x32c076(644)])['to']['be'][_0x32c076(750)](ELECTRON_BROWSER, { 'url': _0x367bda[_0x32c076(954)] }), this[_0x32c076(747)](-1171 + -6949 * 1 + 8120);
            });
        }), _0x2c8337[_0x472846(943)](it, _0x472846(955), function () {
            const _0x235faf = _0x472846;
            return cypress[_0x235faf(534)]([
                _0x235faf(918) + this[_0x235faf(956)],
                _0x235faf(951) + this[_0x235faf(956)] + '/cypress/integration/bar.js',
                _0x235faf(692),
                _0x2e09ce['bMRpr']
            ])[_0x235faf(775)](() => {
                const _0x47239f = _0x235faf;
                _0x2e09ce[_0x47239f(957)](expect, browsers[_0x47239f(644)])['to']['be'][_0x47239f(750)](ELECTRON_BROWSER, { 'url': _0x2e09ce['scZxf'] }), this[_0x47239f(747)](563 * 12 + -97 * -76 + 3532 * -4);
            });
        }), it(_0x472846(958), function () {
            const _0x1cea0d = _0x472846;
            return cypress['start']([
                _0x1cea0d(918) + this['todosPath'],
                _0x1cea0d(951) + this['todosPath'] + _0x1cea0d(952)
            ])[_0x1cea0d(775)](() => {
                const _0xf38893 = _0x1cea0d;
                _0x2e09ce[_0xf38893(959)](expect, browsers[_0xf38893(644)])['to']['be'][_0xf38893(750)](ELECTRON_BROWSER, { 'url': _0x2e09ce['cILVb'] }), this['expectExitWith'](4231 + 9635 + -13866);
            });
        }), _0x2c8337[_0x472846(943)](it, _0x2c8337[_0x472846(960)], function () {
            const _0x30a6be = _0x472846;
            return cypress[_0x30a6be(534)]([
                _0x30a6be(918) + this[_0x30a6be(721)],
                _0x30a6be(961) + this[_0x30a6be(721)] + _0x30a6be(952)
            ])[_0x30a6be(775)](() => {
                const _0x2e4f56 = _0x30a6be;
                _0x2e09ce[_0x2e4f56(959)](expect, browsers['open'])['to']['be'][_0x2e4f56(750)](ELECTRON_BROWSER, { 'url': _0x2e09ce['cILVb'] }), this[_0x2e4f56(747)](7964 + 1 * 1947 + 17 * -583);
            });
        }), _0x2c8337[_0x472846(943)](it, _0x2c8337[_0x472846(962)], function () {
            const _0x330f7b = _0x472846, _0x1d7d6a = {
                    'vEWII': function (_0x10ee3d, _0x20815c) {
                        const _0x5f0301 = _0x2686;
                        return _0x2c8337[_0x5f0301(963)](_0x10ee3d, _0x20815c);
                    }
                };
            return cypress[_0x330f7b(534)]([
                '--run-project=' + this[_0x330f7b(721)],
                '--config=testFiles=["**/test2.coffee","**/test1.js"]'
            ])[_0x330f7b(775)](() => {
                const _0x570eeb = _0x330f7b;
                _0x1d7d6a[_0x570eeb(964)](expect, browsers[_0x570eeb(644)])['to']['be'][_0x570eeb(750)](ELECTRON_BROWSER, { 'url': _0x570eeb(842) });
            })[_0x330f7b(775)](() => {
                const _0x120650 = _0x330f7b;
                _0x2e09ce[_0x120650(959)](expect, browsers['open'])['to']['be'][_0x120650(750)](ELECTRON_BROWSER, { 'url': 'http://localhost:8888/__/#/tests/integration/test1.js' }), this[_0x120650(747)](8523 + 8 * -961 + -167 * 5);
            });
        }), it(_0x472846(965), function () {
            const _0x1f377d = _0x472846, _0x10f922 = sinon[_0x1f377d(743)](Watchers[_0x1f377d(738)], _0x2c8337['rtoqz']), _0x5f5079 = sinon[_0x1f377d(743)](Watchers[_0x1f377d(738)], _0x2c8337[_0x1f377d(966)]);
            return cypress[_0x1f377d(534)](['--run-project=' + this[_0x1f377d(727)]])[_0x1f377d(775)](() => {
                const _0x5e2d36 = _0x1f377d;
                expect(_0x5f5079)[_0x5e2d36(937)]['to']['be']['called'], _0x2e09ce[_0x5e2d36(967)](expect, _0x10f922)[_0x5e2d36(937)]['to']['be'][_0x5e2d36(938)], this[_0x5e2d36(747)](-1722 + 6218 + -4496);
            });
        }), _0x2c8337[_0x472846(968)](it, _0x2c8337[_0x472846(969)], function () {
            const _0x5272bb = _0x472846, _0x134cc8 = {
                    'GEhlK': _0x2e09ce[_0x5272bb(970)],
                    'UavmT': _0x2e09ce[_0x5272bb(971)],
                    'VpAIS': _0x2e09ce[_0x5272bb(972)]
                };
            return config[_0x5272bb(645)](this[_0x5272bb(973)])[_0x5272bb(775)](_0x4cae6b => {
                const _0x36b4bf = _0x5272bb, _0x17d810 = { 'sjTld': _0x2e09ce[_0x36b4bf(974)] };
                return fs[_0x36b4bf(975)](_0x4cae6b[_0x36b4bf(976)])['then'](() => {
                    const _0x2f2c0d = _0x36b4bf;
                    throw new Error(_0x2f2c0d(977));
                })[_0x36b4bf(978)](() => {
                    const _0x11dcf3 = _0x36b4bf;
                    return cypress[_0x11dcf3(534)]([
                        _0x11dcf3(918) + this[_0x11dcf3(973)],
                        _0x17d810[_0x11dcf3(979)]
                    ]);
                })[_0x36b4bf(775)](() => {
                    const _0x4e289c = _0x36b4bf;
                    return fs[_0x4e289c(975)](_0x4cae6b[_0x4e289c(976)]);
                })[_0x36b4bf(775)](() => {
                    const _0x44ae21 = _0x36b4bf;
                    return Promise[_0x44ae21(526)](fs[_0x44ae21(975)](path['join'](_0x4cae6b[_0x44ae21(976)], _0x44ae21(980), _0x44ae21(981))), fs[_0x44ae21(975)](path[_0x44ae21(526)](_0x4cae6b[_0x44ae21(976)], _0x134cc8['GEhlK'], _0x134cc8[_0x44ae21(982)])), fs[_0x44ae21(975)](path[_0x44ae21(526)](_0x4cae6b[_0x44ae21(976)], _0x44ae21(588), _0x134cc8['VpAIS'])), fs[_0x44ae21(975)](path[_0x44ae21(526)](_0x4cae6b[_0x44ae21(976)], _0x134cc8[_0x44ae21(983)], _0x44ae21(984))));
                });
            });
        }), _0x2c8337[_0x472846(985)](it, 'does not scaffold when headless and exits with error when no existing project', function () {
            const _0x591443 = _0x472846, _0x47104e = {
                    'CCEPG': function (_0x59dca1, _0x1e5a1d) {
                        return _0x59dca1(_0x1e5a1d);
                    },
                    'UuqBH': _0x2e09ce[_0x591443(986)]
                }, _0xd4f558 = function (_0x48e591, _0x31dc4e) {
                    const _0x51fae5 = _0x591443;
                    if (!_0x48e591['isRejected']())
                        throw new Error('File or folder was scaffolded at index: ' + _0x31dc4e);
                    _0x47104e['CCEPG'](expect, _0x48e591[_0x51fae5(987)]())['to'][_0x51fae5(920)][_0x51fae5(988)](_0x51fae5(989), _0x47104e[_0x51fae5(990)]);
                };
            return Promise[_0x591443(991)]([
                fs[_0x591443(975)](path[_0x591443(526)](this['pristinePath'], _0x2e09ce[_0x591443(992)]))[_0x591443(993)](),
                fs[_0x591443(975)](path[_0x591443(526)](this[_0x591443(973)], _0x2e09ce[_0x591443(994)]))[_0x591443(993)]()
            ])[_0x591443(995)](_0xd4f558)[_0x591443(775)](() => {
                const _0x8a9a91 = _0x591443;
                return cypress[_0x8a9a91(534)]([_0x8a9a91(918) + this['pristinePath']]);
            })[_0x591443(775)](() => {
                const _0xc614f6 = _0x591443;
                return Promise['all']([
                    fs[_0xc614f6(975)](path['join'](this[_0xc614f6(973)], _0x2e09ce['OXvGB']))[_0xc614f6(993)](),
                    fs['statAsync'](path['join'](this[_0xc614f6(973)], _0x2e09ce['dIHhQ']))[_0xc614f6(993)]()
                ]);
            })[_0x591443(995)](_0xd4f558)[_0x591443(775)](() => {
                const _0x1fb3d8 = _0x591443;
                this[_0x1fb3d8(781)](_0x1fb3d8(996), this[_0x1fb3d8(973)]);
            });
        }), _0x2c8337['mRohC'](it, _0x2c8337['fIpEP'], function () {
            const _0x9cdf7c = _0x472846, _0x229c51 = { 'tVjol': _0x2e09ce[_0x9cdf7c(992)] };
            return settings[_0x9cdf7c(997)](this[_0x9cdf7c(973)], {})[_0x9cdf7c(775)](() => {
                const _0x58bee9 = _0x9cdf7c;
                return cypress[_0x58bee9(534)]([_0x58bee9(918) + this['pristinePath']]);
            })[_0x9cdf7c(775)](() => {
                const _0x1dfa5d = _0x9cdf7c;
                return fs[_0x1dfa5d(975)](path[_0x1dfa5d(526)](this[_0x1dfa5d(973)], _0x229c51[_0x1dfa5d(998)], _0x1dfa5d(999)));
            })['then'](() => {
                throw new Error(_0x2e09ce['DElTt']);
            })[_0x9cdf7c(978)]({ 'code': _0x2e09ce['LbVoN'] }, () => {
            });
        }), it(_0x472846(1000), function () {
            const _0x1ac728 = _0x472846, _0x49b7fc = {
                    'HozuG': _0x1ac728(1001),
                    'FUSjP': _0x1ac728(1002)
                };
            return config[_0x1ac728(645)](this[_0x1ac728(973)])[_0x1ac728(775)](_0x2b9645 => {
                const _0x16d89a = _0x1ac728, _0x2f6837 = { 'JMlqv': _0x2e09ce[_0x16d89a(974)] };
                return fs['statAsync'](_0x2b9645[_0x16d89a(1003)])[_0x16d89a(775)](() => {
                    const _0x202489 = _0x16d89a;
                    throw new Error(_0x49b7fc[_0x202489(1004)]);
                })[_0x16d89a(978)](() => {
                    const _0x483945 = _0x16d89a;
                    return cypress[_0x483945(534)]([
                        '--run-project=' + this[_0x483945(973)],
                        _0x2f6837['JMlqv']
                    ]);
                })[_0x16d89a(775)](() => {
                    const _0x2930dd = _0x16d89a;
                    return fs['statAsync'](_0x2b9645[_0x2930dd(1003)]);
                })['then'](() => {
                    const _0x534c56 = _0x16d89a;
                    return fs[_0x534c56(975)](path[_0x534c56(526)](_0x2b9645['fixturesFolder'], _0x49b7fc[_0x534c56(1005)]));
                });
            });
        }), _0x2c8337[_0x472846(1006)](it, _0x2c8337[_0x472846(1007)], function () {
            const _0x4a76fd = _0x472846, _0xfeb8aa = {
                    'UaLHQ': _0x2c8337[_0x4a76fd(1008)],
                    'UyFTD': _0x2c8337[_0x4a76fd(1009)]
                }, _0xacef4e = path[_0x4a76fd(526)](this[_0x4a76fd(973)], _0x2c8337['ZCgaZ']);
            return config['get'](this['pristinePath'])[_0x4a76fd(775)](() => {
                const _0x39f4a4 = _0x4a76fd, _0x4a5787 = { 'ltZCI': _0x2e09ce['wPASG'] };
                return fs[_0x39f4a4(975)](_0xacef4e)[_0x39f4a4(775)](() => {
                    const _0xcea725 = _0x39f4a4;
                    throw new Error(_0xfeb8aa[_0xcea725(1010)]);
                })[_0x39f4a4(978)]({ 'code': _0x2e09ce[_0x39f4a4(986)] }, () => {
                    const _0x9d249f = _0x39f4a4;
                    return cypress[_0x9d249f(534)]([
                        _0x9d249f(918) + this[_0x9d249f(973)],
                        _0xfeb8aa[_0x9d249f(1011)]
                    ]);
                })[_0x39f4a4(775)](() => {
                    return fs['statAsync'](_0xacef4e);
                })[_0x39f4a4(775)](() => {
                    const _0x4262a0 = _0x39f4a4;
                    return fs[_0x4262a0(975)](path['join'](_0xacef4e, _0x4a5787[_0x4262a0(1012)]));
                })[_0x39f4a4(775)](() => {
                    const _0x4dc3be = _0x39f4a4;
                    return fs['statAsync'](path[_0x4dc3be(526)](_0xacef4e, _0x4dc3be(1013)));
                });
            });
        }), _0x2c8337[_0x472846(1014)](it, _0x2c8337[_0x472846(1015)], function (_0xfe9674) {
            const _0x114b7d = _0x472846, _0x34d9f5 = { 'fEXBr': _0x2e09ce['TqyWT'] };
            config['get'](this[_0x114b7d(956)])[_0x114b7d(775)](_0x4b5536 => {
                const _0x3e6e59 = _0x114b7d;
                return this[_0x3e6e59(1016)] = _0x4b5536, fs[_0x3e6e59(975)](this[_0x3e6e59(1016)][_0x3e6e59(1003)]);
            })['then'](() => {
                const _0x54aac0 = _0x114b7d;
                return settings[_0x54aac0(1017)](this[_0x54aac0(956)]);
            })[_0x114b7d(775)](_0x238a2d => {
                const _0x20367c = _0x114b7d;
                return _0x238a2d[_0x20367c(1003)] = ![], settings[_0x20367c(997)](this['idsPath'], _0x238a2d);
            })['then'](() => {
                const _0x2d19a3 = _0x114b7d;
                return cypress[_0x2d19a3(534)]([_0x2d19a3(918) + this[_0x2d19a3(956)]]);
            })['then'](() => {
                const _0x1f0dbc = _0x114b7d;
                return fs[_0x1f0dbc(975)](this[_0x1f0dbc(1016)][_0x1f0dbc(1003)])[_0x1f0dbc(775)](() => {
                    const _0x5c8b04 = _0x1f0dbc;
                    throw new Error(_0x34d9f5[_0x5c8b04(1018)]);
                })['catch'](() => {
                    return _0xfe9674();
                });
            });
        }), it(_0x472846(1019), function () {
            const _0x157e7b = _0x472846, _0x30dae7 = {
                    'PBxEl': function (_0xeb2ad9, _0x3b077e) {
                        const _0xa5d08e = _0x2686;
                        return _0x2e09ce[_0xa5d08e(1020)](_0xeb2ad9, _0x3b077e);
                    }
                };
            return cypress[_0x157e7b(534)]([
                '--run-project=' + this[_0x157e7b(721)],
                _0x157e7b(910)
            ])[_0x157e7b(775)](() => {
                const _0x2c9d3a = _0x157e7b;
                _0x30dae7[_0x2c9d3a(1021)](expect, browsers[_0x2c9d3a(644)])['to']['be'][_0x2c9d3a(750)](ELECTRON_BROWSER, {
                    'proxyServer': _0x2c9d3a(1022),
                    'show': !![]
                }), this[_0x2c9d3a(747)](487 * -2 + -9785 * -1 + -8811);
            });
        }), _0x2c8337['qvXnJ'](it, _0x2c8337['sPtcr'], function () {
            const _0x3d1b26 = _0x472846;
            return sinon[_0x3d1b26(743)](Reporter, _0x2c8337['UOifh']), cypress['start']([_0x3d1b26(918) + this['todosPath']])[_0x3d1b26(775)](() => {
                const _0x3f4ba0 = _0x3d1b26;
                _0x2e09ce[_0x3f4ba0(1020)](expect, Reporter[_0x3f4ba0(1023)])['to']['be']['calledWith'](_0x2e09ce[_0x3f4ba0(1024)]), this[_0x3f4ba0(747)](-1 * 4049 + -3881 + 7930);
            });
        }), _0x2c8337[_0x472846(1025)](it, _0x2c8337[_0x472846(1026)], function () {
            const _0x199876 = _0x472846;
            return sinon['spy'](Reporter, _0x2c8337['UOifh']), cypress[_0x199876(534)]([
                _0x199876(918) + this[_0x199876(721)],
                _0x2c8337[_0x199876(1027)]
            ])['then'](() => {
                const _0x57de77 = _0x199876;
                expect(Reporter[_0x57de77(1023)])['to']['be'][_0x57de77(753)](_0x57de77(1028)), this['expectExitWith'](7023 + 5791 + -149 * 86);
            });
        }), _0x2c8337[_0x472846(1025)](it, _0x472846(1029), function () {
            const _0x5d68f8 = _0x472846, _0x27d4be = {
                    'jRcxC': _0x5d68f8(1030),
                    'BgMbS': function (_0x135453, _0x5c7f16) {
                        return _0x2c8337['tPLoE'](_0x135453, _0x5c7f16);
                    }
                };
            return sinon['spy'](Reporter, _0x2c8337[_0x5d68f8(1031)]), config[_0x5d68f8(645)](this[_0x5d68f8(956)])[_0x5d68f8(775)](_0xdf006 => {
                const _0x18eccf = _0x5d68f8;
                return this[_0x18eccf(1016)] = _0xdf006, settings[_0x18eccf(1017)](this[_0x18eccf(956)]);
            })['then'](_0x19366e => {
                const _0x2a6384 = _0x5d68f8;
                return _0x19366e[_0x2a6384(1032)] = _0x27d4be[_0x2a6384(1033)], settings[_0x2a6384(997)](this['idsPath'], _0x19366e);
            })[_0x5d68f8(775)](() => {
                const _0x38cfbe = _0x5d68f8;
                return cypress[_0x38cfbe(534)](['--run-project=' + this['idsPath']]);
            })[_0x5d68f8(775)](() => {
                const _0xd2b7 = _0x5d68f8;
                _0x27d4be[_0xd2b7(1034)](expect, Reporter[_0xd2b7(1023)])['to']['be'][_0xd2b7(753)](_0x27d4be[_0xd2b7(1033)]), this['expectExitWith'](7967 + 7900 + 123 * -129);
            });
        }), _0x2c8337['ZNgdq'](it, 'runs tests even when user isn\'t logged in', function () {
            const _0x46c036 = _0x472846;
            return user[_0x46c036(932)]({})['then'](() => {
                const _0x24a4b0 = _0x46c036;
                return cypress[_0x24a4b0(534)]([_0x24a4b0(918) + this['todosPath']]);
            })[_0x46c036(775)](() => {
                const _0x2b5878 = _0x46c036;
                this[_0x2b5878(747)](-9337 + -6339 + 3919 * 4);
            });
        }), _0x2c8337[_0x472846(1035)](it, _0x2c8337[_0x472846(1036)], function () {
            const _0x3ce430 = _0x472846, _0x10bca6 = {
                    'GAzRB': 'abc123',
                    'TCFQs': function (_0x2a0c81, _0x2ecce8) {
                        return _0x2c8337['tPLoE'](_0x2a0c81, _0x2ecce8);
                    },
                    'qQMru': _0x2c8337[_0x3ce430(1037)],
                    'ouWND': _0x3ce430(1038)
                };
            return cypress[_0x3ce430(534)]([
                _0x3ce430(918) + this[_0x3ce430(721)],
                _0x3ce430(561)
            ])[_0x3ce430(775)](() => {
                const _0x3542bf = _0x3ce430;
                expect(errors['warning'])['to']['be'][_0x3542bf(753)]('PROJECT_ID_AND_KEY_BUT_MISSING_RECORD_OPTION', _0x10bca6['GAzRB']), _0x10bca6[_0x3542bf(1039)](expect, console[_0x3542bf(524)])['to']['be'][_0x3542bf(750)](_0x10bca6['qQMru']), _0x10bca6[_0x3542bf(1039)](expect, console[_0x3542bf(524)])['to']['be'][_0x3542bf(750)]('cypress run --record'), expect(console[_0x3542bf(524)])['to']['be']['calledWithMatch'](_0x10bca6[_0x3542bf(1040)]);
            });
        }), it(_0x472846(1041), function () {
            const _0x118b73 = _0x472846, _0x5ee392 = {
                    'jNFSY': function (_0x529980, _0x2d9633) {
                        return _0x529980(_0x2d9633);
                    },
                    'MDJwE': _0x2e09ce[_0x118b73(1042)],
                    'MXfWD': _0x2e09ce[_0x118b73(1043)]
                }, _0x2991e2 = new Error(_0x2e09ce[_0x118b73(1044)]);
            return sinon[_0x118b73(732)](browsers, _0x2e09ce[_0x118b73(1045)])['rejects'](_0x2991e2), cypress['start']([_0x118b73(918) + this['todosPath']])['then'](() => {
                const _0x37a8cb = _0x118b73;
                _0x5ee392['jNFSY'](expect, errors[_0x37a8cb(538)])['to']['be'][_0x37a8cb(753)](_0x5ee392[_0x37a8cb(1046)], _0x2991e2[_0x37a8cb(1047)]), expect(console['log'])['to']['be'][_0x37a8cb(750)](_0x5ee392[_0x37a8cb(1048)]), _0x5ee392[_0x37a8cb(1049)](expect, console[_0x37a8cb(524)])['to']['be'][_0x37a8cb(750)](_0x2991e2[_0x37a8cb(755)]);
            });
        }), _0x2c8337['sEAmq'](it, _0x2c8337[_0x472846(1050)], function () {
            const _0x5f3971 = _0x472846, _0x1f5fcf = {
                    'vhrUj': 'PROJECT_ID_AND_KEY_BUT_MISSING_RECORD_OPTION',
                    'TYjbu': function (_0x51e8b0, _0x30cda0) {
                        return _0x51e8b0(_0x30cda0);
                    },
                    'uUnLG': _0x5f3971(854)
                };
            return cypress['start']([
                _0x5f3971(918) + this[_0x5f3971(973)],
                _0x2c8337[_0x5f3971(1051)]
            ])[_0x5f3971(775)](() => {
                const _0x265f0c = _0x5f3971;
                expect(errors[_0x265f0c(538)])['not']['to']['be']['calledWith'](_0x1f5fcf['vhrUj'], _0x265f0c(1052)), _0x1f5fcf[_0x265f0c(1053)](expect, console[_0x265f0c(524)])[_0x265f0c(937)]['to']['be'][_0x265f0c(750)](_0x1f5fcf[_0x265f0c(1054)]);
            });
        }), _0x2c8337[_0x472846(1035)](it, _0x2c8337['cYzIj'], function () {
            const _0xc7fb77 = _0x472846;
            return cypress[_0xc7fb77(534)]([
                _0xc7fb77(918) + this[_0xc7fb77(721)],
                '--key=asdf',
                _0x2e09ce['gXHYp']
            ])[_0xc7fb77(775)](() => {
                const _0x32a205 = _0xc7fb77;
                _0x2e09ce[_0x32a205(1020)](expect, errors[_0x32a205(538)])[_0x32a205(937)]['to']['be'][_0x32a205(753)](_0x2e09ce[_0x32a205(1055)], _0x2e09ce[_0x32a205(1056)]), _0x2e09ce['NVuTX'](expect, console['log'])[_0x32a205(937)]['to']['be'][_0x32a205(750)](_0x2e09ce[_0x32a205(1057)]);
            });
        }), _0x2c8337[_0x472846(1058)](it, _0x472846(1059), function () {
            const _0x45fa80 = _0x472846, _0x259a62 = {
                    'LYXqN': _0x2e09ce[_0x45fa80(1060)],
                    'DtTii': _0x2e09ce['CWPTb']
                };
            return settings[_0x45fa80(997)](this[_0x45fa80(956)], { 'supportFile': _0x45fa80(1061) })[_0x45fa80(775)](() => {
                const _0x362590 = _0x45fa80;
                return cypress[_0x362590(534)]([_0x362590(918) + this[_0x362590(956)]]);
            })[_0x45fa80(775)](() => {
                const _0x3db826 = _0x45fa80;
                this['expectExitWithErr'](_0x259a62[_0x3db826(1062)], _0x259a62['DtTii']);
            });
        }), it(_0x472846(1063), function () {
            const _0x5e388e = _0x472846;
            return browsers['open'][_0x5e388e(1064)](), cypress[_0x5e388e(534)]([
                _0x5e388e(918) + this['idsPath'],
                _0x2c8337[_0x5e388e(1065)]
            ])[_0x5e388e(775)](() => {
                const _0x2eaac4 = _0x5e388e, _0x289728 = { 'uDjEa': _0x2e09ce[_0x2eaac4(1066)] };
                this['expectExitWithErr'](_0x2e09ce[_0x2eaac4(1067)]);
                const _0x13e32d = errors[_0x2eaac4(524)]['args'], _0x414fff = _[_0x2eaac4(1068)](_0x13e32d, _0x4e8c34 => {
                        const _0x5694a2 = _0x2eaac4;
                        return _[_0x5694a2(1068)](_0x4e8c34, _0x48b544 => {
                            const _0x24e7cf = _0x5694a2;
                            return _0x48b544['message'] && _0x48b544[_0x24e7cf(755)][_0x24e7cf(1069)](_0x24e7cf(1070));
                        });
                    });
                _0x2e09ce[_0x2eaac4(1071)](expect, _0x414fff, _0x2e09ce['HKuoG'])['to']['be']['ok'];
                const _0x3e8b40 = _[_0x2eaac4(1068)](_0x13e32d, _0x2d0a72 => {
                    const _0x5b2997 = _0x2eaac4;
                    return _[_0x5b2997(1068)](_0x2d0a72, _0x39530f => {
                        const _0x1cfafc = _0x5b2997;
                        return _0x39530f[_0x1cfafc(755)] && _0x39530f[_0x1cfafc(755)][_0x1cfafc(1069)](_0x289728[_0x1cfafc(1072)]);
                    });
                });
                expect(_0x3e8b40, 'supported browsers should be listed')['to']['be']['ok'];
                const _0xa6df0 = _[_0x2eaac4(1068)](_0x13e32d, _0x3ab91 => {
                    const _0x24873e = _0x2eaac4;
                    return _[_0x24873e(1068)](_0x3ab91, _0x4471fd => {
                        const _0x28787f = _0x24873e;
                        return _0x4471fd[_0x28787f(755)] && _0x4471fd[_0x28787f(755)]['includes'](_0x28787f(1073));
                    });
                });
                _0x2e09ce[_0x2eaac4(1074)](expect, _0xa6df0, _0x2e09ce[_0x2eaac4(1075)])['to']['be']['ok'];
            });
        }), _0x2c8337['epQIU'](describe, _0x2c8337[_0x472846(1076)], function () {
            const _0xc272eb = _0x472846, _0x10c9a5 = {
                    'kpsBm': _0x2c8337[_0xc272eb(1077)],
                    'sSXue': _0x2c8337[_0xc272eb(1078)],
                    'ZOoOj': _0x2c8337[_0xc272eb(1079)],
                    'cCtXH': _0x2c8337[_0xc272eb(1080)]
                };
            _0x2c8337[_0xc272eb(1081)](it, _0x2c8337['NqBNw'], function () {
                const _0x4a9ca2 = _0xc272eb, _0x4c0db2 = {
                        'jdGiW': _0x2e09ce[_0x4a9ca2(1082)],
                        'Ebhuk': _0x4a9ca2(1083),
                        'QQmSz': _0x2e09ce[_0x4a9ca2(1084)]
                    };
                return cypress[_0x4a9ca2(534)]([
                    _0x4a9ca2(918) + this[_0x4a9ca2(721)],
                    _0x2e09ce[_0x4a9ca2(1085)]
                ])[_0x4a9ca2(775)](() => {
                    const _0x1135c6 = _0x4a9ca2;
                    this[_0x1135c6(781)](_0x4c0db2[_0x1135c6(1086)], _0x4c0db2['Ebhuk']), this[_0x1135c6(781)](_0x4c0db2[_0x1135c6(1086)], _0x4c0db2['QQmSz']), this[_0x1135c6(781)](_0x4c0db2[_0x1135c6(1086)], this['todosPath']);
                });
            }), _0x2c8337['jpuTu'](it, _0x2c8337[_0xc272eb(1087)], function () {
                const _0x3daa05 = _0xc272eb;
                return cypress[_0x3daa05(534)]([
                    _0x3daa05(918) + this[_0x3daa05(721)],
                    '--spec=' + this[_0x3daa05(721)] + _0x3daa05(1088)
                ])[_0x3daa05(775)](() => {
                    const _0x3596d1 = _0x3daa05;
                    this[_0x3596d1(781)]('NO_SPECS_FOUND', _0x10c9a5[_0x3596d1(1089)]), this[_0x3596d1(781)](_0x10c9a5[_0x3596d1(1090)], this['todosPath']);
                });
            }), it(_0x2c8337[_0xc272eb(1091)], function () {
                const _0x5a5960 = _0xc272eb;
                return cypress['start']([
                    _0x5a5960(918) + this[_0x5a5960(721)],
                    _0x5a5960(1092)
                ])['then'](() => {
                    const _0x291cde = _0x5a5960;
                    this[_0x291cde(781)](_0x10c9a5[_0x291cde(1090)], _0x10c9a5[_0x291cde(1093)]), this[_0x291cde(781)](_0x10c9a5[_0x291cde(1090)], _0x10c9a5[_0x291cde(1094)]);
                });
            });
        }), _0x2c8337[_0x472846(1095)](it, _0x2c8337[_0x472846(1096)], function () {
            const _0x38f5cc = _0x472846, _0x46ec19 = { 'EUdZP': _0x2e09ce[_0x38f5cc(1097)] };
            return fs[_0x38f5cc(1098)](this[_0x38f5cc(721)] + '/cypress.json', _0x38f5cc(1099))[_0x38f5cc(775)](() => {
                const _0x5b7d7c = _0x38f5cc;
                return cypress['start']([_0x5b7d7c(918) + this[_0x5b7d7c(721)]]);
            })[_0x38f5cc(775)](() => {
                const _0x52ba53 = _0x38f5cc;
                this['expectExitWithErr'](_0x46ec19[_0x52ba53(1100)], this['todosPath']);
            });
        }), _0x2c8337[_0x472846(1095)](it, _0x472846(1101), function () {
            const _0x2e3fea = _0x472846;
            return fs[_0x2e3fea(1098)](this[_0x2e3fea(721)] + _0x2e3fea(1102), '{\'foo\': \'bar}')[_0x2e3fea(775)](() => {
                const _0x287975 = _0x2e3fea;
                return cypress[_0x287975(534)]([_0x287975(918) + this[_0x287975(721)]]);
            })[_0x2e3fea(775)](() => {
                const _0x585a8a = _0x2e3fea;
                this['expectExitWithErr']('ERROR_READING_FILE', this[_0x585a8a(721)]);
            });
        }), _0x2c8337[_0x472846(1095)](it, _0x2c8337[_0x472846(1103)], function () {
            const _0x2e838c = _0x472846;
            return settings[_0x2e838c(997)](this[_0x2e838c(721)], { 'baseUrl': _0x2e09ce[_0x2e838c(1104)] })[_0x2e838c(775)](() => {
                const _0x5cf689 = _0x2e838c;
                return cypress[_0x5cf689(534)](['--run-project=' + this[_0x5cf689(721)]]);
            })[_0x2e838c(775)](() => {
                const _0x2c5542 = _0x2e838c;
                this[_0x2c5542(781)](_0x2e09ce[_0x2c5542(1105)], _0x2e09ce[_0x2c5542(994)]);
            });
        }), _0x2c8337['YoULU'](it, _0x2c8337[_0x472846(1106)], function () {
            const _0x9ce0e4 = _0x472846, _0x15267d = { 'TLATN': _0x2c8337[_0x9ce0e4(864)] };
            return cypress[_0x9ce0e4(534)]([
                '--run-project=' + this[_0x9ce0e4(721)],
                _0x2c8337[_0x9ce0e4(1107)]
            ])['then'](() => {
                const _0x2f8d2a = _0x9ce0e4;
                this[_0x2f8d2a(781)](_0x15267d[_0x2f8d2a(1108)], 'localhost:9999'), this[_0x2f8d2a(781)](_0x15267d[_0x2f8d2a(1108)], _0x2f8d2a(601));
            });
        }), it(_0x2c8337[_0x472846(1109)], function () {
            const _0xf9a349 = _0x472846;
            return process[_0xf9a349(700)][_0xf9a349(1110)] = _0xf9a349(1111), cypress[_0xf9a349(534)](['--run-project=' + this[_0xf9a349(721)]])[_0xf9a349(775)](() => {
                const _0x57b747 = _0xf9a349;
                this[_0x57b747(781)](_0x2e09ce['EQpna'], _0x2e09ce[_0x57b747(1104)]), this[_0x57b747(781)](_0x2e09ce[_0x57b747(1112)], _0x2e09ce['xEmDp']);
            });
        });
        const _0x24d9e9 = [{
                'old': _0x2c8337[_0x472846(1113)],
                'new': _0x2c8337[_0x472846(1114)]
            }];
        _0x24d9e9[_0x472846(1115)](function (_0x4cdfd9) {
            const _0x3bd387 = _0x472846;
            _0x2c8337[_0x3bd387(1116)](it, _0x3bd387(1117) + _0x4cdfd9[_0x3bd387(1118)], function () {
                const _0x476db3 = _0x3bd387, _0x11adf0 = { 'DCaku': _0x476db3(1119) };
                return cypress[_0x476db3(534)]([
                    _0x476db3(918) + this[_0x476db3(721)],
                    _0x476db3(1120) + _0x4cdfd9[_0x476db3(1118)] + _0x476db3(1121)
                ])['then'](() => {
                    const _0x1a8092 = _0x476db3;
                    this['expectExitWithErr'](_0x11adf0[_0x1a8092(1122)], _0x4cdfd9['old']), this[_0x1a8092(781)](_0x11adf0['DCaku'], _0x4cdfd9['new']);
                });
            });
        }), _0x2c8337[_0x472846(1123)](it, _0x2c8337[_0x472846(1124)], function () {
            const _0x746e63 = _0x472846, _0x37f3af = {
                    'netvE': _0x2c8337[_0x746e63(1125)],
                    'wZwFz': _0x2c8337['Wzulq']
                };
            if (_0x2c8337['EhIov'](process[_0x746e63(1126)](), 1 * -9925 + -65 * 117 + 17530))
                return;
            const _0x211544 = path[_0x746e63(1127)](_0x2c8337[_0x746e63(1128)]), _0x1fe930 = path[_0x746e63(526)](_0x211544, _0x2c8337[_0x746e63(1129)]);
            return fs[_0x746e63(1130)](_0x1fe930, '{}')['then'](() => {
                const _0x35bd57 = _0x746e63;
                return fs[_0x35bd57(1131)](_0x211544, _0x37f3af[_0x35bd57(1132)]);
            })['then'](() => {
                const _0x112fed = _0x746e63;
                return cypress[_0x112fed(534)](['--run-project=' + _0x211544]);
            })[_0x746e63(775)](() => {
                const _0x16518e = _0x746e63;
                return fs[_0x16518e(1131)](_0x211544, _0x2e09ce[_0x16518e(1133)]);
            })[_0x746e63(775)](() => {
                const _0x694d18 = _0x746e63;
                return fs[_0x694d18(1134)](_0x211544);
            })[_0x746e63(775)](() => {
                const _0x5a1a28 = _0x746e63;
                this[_0x5a1a28(781)](_0x5a1a28(1135), path[_0x5a1a28(526)](_0x211544, _0x37f3af[_0x5a1a28(1136)]));
            });
        }), _0x2c8337[_0x472846(1123)](it, _0x2c8337[_0x472846(1137)], function () {
            const _0x1c0212 = _0x472846, _0x43f33b = {
                    'LFQDz': _0x2c8337[_0x1c0212(1138)],
                    'ZPxuK': _0x2c8337[_0x1c0212(1139)]
                };
            return cypress[_0x1c0212(534)]([
                _0x1c0212(918) + this[_0x1c0212(721)],
                _0x2c8337['qxebh'],
                _0x2c8337[_0x1c0212(1139)]
            ])[_0x1c0212(775)](() => {
                const _0x3f1bbc = _0x1c0212;
                this[_0x3f1bbc(781)](_0x43f33b[_0x3f1bbc(1140)], _0x43f33b['ZPxuK']);
            });
        }), describe(_0x2c8337['lekNL'], () => {
            const _0x119fd8 = _0x472846;
            _0x2c8337[_0x119fd8(1141)](beforeEach, function () {
                const _0x5c6054 = _0x119fd8;
                return appData[_0x5c6054(760)]()[_0x5c6054(775)](() => {
                    const _0x2727b5 = _0x5c6054;
                    return savedState[_0x2727b5(1142)](this[_0x2727b5(721)]);
                })[_0x5c6054(775)](_0xccc559 => {
                    const _0x1597a6 = _0x5c6054;
                    this[_0x1597a6(1143)] = appData[_0x1597a6(1144)](_0xccc559);
                });
            }), _0x2c8337[_0x119fd8(1145)](it, _0x2c8337[_0x119fd8(1146)], function () {
                const _0x363651 = _0x119fd8;
                return cypress[_0x363651(534)]([
                    _0x363651(918) + this[_0x363651(721)],
                    '--spec=' + this[_0x363651(721)] + '/tests/test2.coffee'
                ])[_0x363651(775)](() => {
                    const _0x2264bb = _0x363651;
                    return this[_0x2264bb(747)](6906 + -6395 + 7 * -73), openProject[_0x2264bb(1147)]()[_0x2264bb(1148)]();
                })[_0x363651(775)](() => {
                    const _0x2007d4 = _0x363651;
                    return fs['statAsync'](this['statePath'])[_0x2007d4(775)](() => {
                        const _0x4aa2b4 = _0x2007d4;
                        throw new Error('saved state should not exist but it did here: ' + this[_0x4aa2b4(1143)]);
                    })['catch']({ 'code': _0x2007d4(1149) }, () => {
                    });
                });
            });
        }), describe('morgan', () => {
            const _0x11e759 = _0x472846;
            _0x2e09ce[_0x11e759(1074)](it, _0x2e09ce[_0x11e759(1150)], function () {
                const _0x1ed7b7 = _0x11e759, _0x149fb5 = {
                        'HXHYN': function (_0x5ba6e5, _0x158735) {
                            return _0x5ba6e5(_0x158735);
                        }
                    };
                return cypress[_0x1ed7b7(534)]([_0x1ed7b7(918) + this['todosPath']])[_0x1ed7b7(775)](() => {
                    const _0x3d60f4 = _0x1ed7b7;
                    _0x149fb5[_0x3d60f4(1151)](expect, openProject[_0x3d60f4(1147)]()[_0x3d60f4(1016)][_0x3d60f4(1152)])['to']['be']['false'], this[_0x3d60f4(747)](8 * -619 + 3 * 3200 + -4648);
                });
            });
        }), _0x2c8337[_0x472846(1123)](describe, _0x2c8337[_0x472846(1153)], () => {
            const _0x4ed62a = _0x472846, _0x4e2d71 = {
                    'eQyDq': function (_0x1ccc9c, _0x114345) {
                        const _0x14e88a = _0x2686;
                        return _0x2e09ce[_0x14e88a(1154)](_0x1ccc9c, _0x114345);
                    },
                    'hmtov': _0x4ed62a(701),
                    'DHEvW': _0x2e09ce['LEfwL']
                };
            _0x2e09ce[_0x4ed62a(1074)](it, _0x2e09ce[_0x4ed62a(1155)], function () {
                const _0x2a09f2 = _0x4ed62a, _0x46060f = {
                        'RABEx': function (_0x3356e3, _0x55635b) {
                            const _0x3c69be = _0x2686;
                            return _0x4e2d71[_0x3c69be(1156)](_0x3356e3, _0x55635b);
                        },
                        'Nbrxn': _0x4e2d71[_0x2a09f2(1157)]
                    };
                return cypress[_0x2a09f2(534)]([
                    '--run-project=' + this[_0x2a09f2(721)],
                    _0x4e2d71[_0x2a09f2(1158)]
                ])[_0x2a09f2(775)](() => {
                    const _0x2cdca9 = _0x2a09f2, {cfg: _0xd0734b} = openProject[_0x2cdca9(1147)]();
                    expect(_0xd0734b[_0x2cdca9(1159)])['to']['be'][_0x2cdca9(1160)], _0x46060f[_0x2cdca9(1161)](expect, _0xd0734b[_0x2cdca9(1162)])['to']['eq'](-6503 + 8227 + -490), expect(_0xd0734b['resolved'][_0x2cdca9(1159)])['to'][_0x2cdca9(1163)]['eq']({
                        'value': ![],
                        'from': _0x46060f[_0x2cdca9(1164)]
                    }), expect(_0xd0734b[_0x2cdca9(1165)][_0x2cdca9(1162)])['to'][_0x2cdca9(1163)]['eq']({
                        'value': 1234,
                        'from': _0x46060f[_0x2cdca9(1164)]
                    }), this[_0x2cdca9(747)](-557 * 1 + 423 + 134);
                });
            }), _0x2e09ce['oJkEy'](it, _0x2e09ce[_0x4ed62a(1166)], function () {
                const _0x229831 = _0x4ed62a, _0x22429 = {
                        'jfIsL': function (_0x3c2618, _0x564cb3) {
                            const _0xfc8ad7 = _0x2686;
                            return _0x2e09ce[_0xfc8ad7(1167)](_0x3c2618, _0x564cb3);
                        },
                        'YpsQm': _0x2e09ce[_0x229831(1168)],
                        'zvkcc': _0x2e09ce[_0x229831(1169)],
                        'LZaeJ': _0x229831(701)
                    };
                return plugins[_0x229831(535)][_0x229831(1064)](), cypress[_0x229831(534)]([
                    _0x229831(918) + this['pluginConfig'],
                    _0x2e09ce[_0x229831(1170)],
                    _0x2e09ce['jMEOS']
                ])[_0x229831(775)](() => {
                    const _0x70fe4a = _0x229831, {cfg: _0x419dba} = openProject[_0x70fe4a(1147)]();
                    _0x22429['jfIsL'](expect, _0x419dba[_0x70fe4a(1159)])['to']['eq'](-3184 + 367 * 15 + -2301), expect(_0x419dba[_0x70fe4a(1171)])['to']['eq'](3305 * -1 + -1171 * 5 + 483 * 20), _0x22429[_0x70fe4a(1172)](expect, _0x419dba[_0x70fe4a(700)])['to'][_0x70fe4a(1163)]['eq']({
                        'foo': 'bar',
                        'bar': _0x22429[_0x70fe4a(1173)]
                    }), expect(_0x419dba['resolved'][_0x70fe4a(1159)])['to'][_0x70fe4a(1163)]['eq']({
                        'value': 20,
                        'from': _0x22429['zvkcc']
                    }), expect(_0x419dba[_0x70fe4a(1165)]['requestTimeout'])['to'][_0x70fe4a(1163)]['eq']({
                        'value': 1234,
                        'from': _0x22429['LZaeJ']
                    }), expect(_0x419dba['resolved']['env'][_0x70fe4a(592)])['to'][_0x70fe4a(1163)]['eq']({
                        'value': _0x22429[_0x70fe4a(1173)],
                        'from': _0x22429[_0x70fe4a(1174)]
                    }), _0x22429[_0x70fe4a(1172)](expect, _0x419dba[_0x70fe4a(1165)]['env'][_0x70fe4a(868)])['to']['deep']['eq']({
                        'value': _0x22429[_0x70fe4a(1173)],
                        'from': _0x70fe4a(701)
                    }), this[_0x70fe4a(747)](-5086 + -18 * 15 + 26 * 206);
                });
            });
        }), describe(_0x2c8337[_0x472846(1175)], () => {
            const _0x20ddf0 = _0x472846, _0x51aec5 = {
                    'RQgnM': _0x2e09ce[_0x20ddf0(1176)],
                    'CKsJf': _0x2e09ce[_0x20ddf0(1177)],
                    'gFIYM': _0x20ddf0(1178),
                    'yXEhJ': _0x2e09ce[_0x20ddf0(1179)],
                    'MyPId': _0x2e09ce['pUwof'],
                    'RcwVC': _0x20ddf0(1180),
                    'rOAmA': _0x2e09ce[_0x20ddf0(1181)],
                    'tXFRa': _0x2e09ce['yuuBg'],
                    'BIMnt': _0x20ddf0(1182),
                    'deMCj': _0x2e09ce['UCKrC'],
                    'FHizp': _0x2e09ce['TLOFm'],
                    'AFOyW': _0x2e09ce[_0x20ddf0(1183)],
                    'sfoiO': function (_0x2d60d3, _0x2f5782) {
                        return _0x2d60d3(_0x2f5782);
                    },
                    'NpveK': _0x2e09ce['uYKhL'],
                    'ppfde': function (_0x773358, _0x48f71e, _0x3471e5) {
                        return _0x773358(_0x48f71e, _0x3471e5);
                    },
                    'RPRoo': _0x2e09ce[_0x20ddf0(1184)]
                };
            _0x2e09ce[_0x20ddf0(1154)](beforeEach, () => {
                const _0xb62016 = _0x20ddf0, _0xeb10cb = {
                        'lzMyZ': _0x51aec5[_0xb62016(1185)],
                        'omImA': _0x51aec5['CKsJf']
                    };
                plugins[_0xb62016(535)]['restore'](), browsers[_0xb62016(644)][_0xb62016(1064)]();
                const _0x53398e = new EE();
                _0x53398e['kill'] = () => {
                    const _0x188f93 = _0xb62016;
                    return _0x53398e[_0x188f93(1186)](_0xeb10cb['lzMyZ']);
                }, _0x53398e['destroy'] = () => {
                    const _0x6a5ac9 = _0xb62016;
                    return _0x53398e[_0x6a5ac9(1186)](_0xeb10cb[_0x6a5ac9(1187)]);
                }, _0x53398e['isDestroyed'] = () => {
                    return ![];
                }, _0x53398e[_0xb62016(1188)] = () => {
                }, _0x53398e[_0xb62016(1189)] = () => {
                }, _0x53398e[_0xb62016(1190)] = {
                    'debugger': {
                        'on': sinon['stub'](),
                        'attach': sinon['stub'](),
                        'sendCommand': sinon[_0xb62016(732)]()[_0xb62016(734)]()
                    },
                    'getOSProcessId': sinon['stub'](),
                    'setUserAgent': sinon[_0xb62016(732)](),
                    'session': {
                        'clearCache': sinon[_0xb62016(732)]()[_0xb62016(734)](),
                        'setProxy': sinon['stub']()[_0xb62016(734)](),
                        'setUserAgent': sinon[_0xb62016(732)](),
                        'on': sinon[_0xb62016(732)](),
                        'removeListener': sinon[_0xb62016(732)]()
                    }
                }, _0x53398e[_0xb62016(1191)] = sinon[_0xb62016(732)], _0x53398e[_0xb62016(1192)] = sinon[_0xb62016(732)], sinon[_0xb62016(732)](launch, _0x51aec5[_0xb62016(1193)])[_0xb62016(734)](_0x53398e), sinon[_0xb62016(732)](Windows, _0xb62016(1023))[_0xb62016(742)](_0x53398e);
            }), _0x2e09ce[_0x20ddf0(1194)](context, _0x2e09ce[_0x20ddf0(1195)], () => {
                const _0x3356e6 = _0x20ddf0, _0x3103bc = {
                        'gnrKV': _0x3356e6(516),
                        'WvKlW': function (_0x3d5d77, _0x1d980f, _0x4be03f) {
                            return _0x3d5d77(_0x1d980f, _0x4be03f);
                        },
                        'Pxguw': _0x51aec5[_0x3356e6(1196)],
                        'HNWYv': _0x51aec5['deMCj'],
                        'vsqRG': _0x51aec5[_0x3356e6(1197)],
                        'ZehzC': _0x51aec5[_0x3356e6(1198)],
                        'cFaoc': function (_0x4f9df5, _0x4a27cb) {
                            return _0x4f9df5(_0x4a27cb);
                        },
                        'rPNPg': function (_0x1820e8, _0x9ccb67) {
                            return _0x1820e8(_0x9ccb67);
                        },
                        'DpsQR': function (_0x454cf3, _0xe2724) {
                            const _0x433774 = _0x3356e6;
                            return _0x51aec5[_0x433774(1199)](_0x454cf3, _0xe2724);
                        },
                        'RgTiL': _0x51aec5[_0x3356e6(1200)],
                        'QLnEn': _0x3356e6(868)
                    };
                _0x51aec5[_0x3356e6(1201)](it, _0x51aec5[_0x3356e6(1202)], function () {
                    const _0x4cfff7 = _0x3356e6, _0x2eb2fb = {
                            'ensureMinimumProtocolVersion': sinon[_0x4cfff7(732)]()[_0x4cfff7(734)](),
                            'close': sinon[_0x4cfff7(732)]()['resolves'](),
                            'on': sinon[_0x4cfff7(732)](),
                            'send': sinon[_0x4cfff7(732)]()
                        };
                    return sinon['stub'](chromeBrowser, _0x4cfff7(1203))['resolves'](), sinon[_0x4cfff7(732)](chromeBrowser, _0x4cfff7(1204))[_0x4cfff7(734)](_0x2eb2fb), sinon[_0x4cfff7(732)](chromeBrowser, _0x51aec5['yXEhJ'])[_0x4cfff7(734)](), sinon[_0x4cfff7(732)](chromeBrowser, _0x51aec5[_0x4cfff7(1205)])[_0x4cfff7(734)](), sinon[_0x4cfff7(732)](chromeBrowser, _0x51aec5[_0x4cfff7(1206)])[_0x4cfff7(742)](), cypress[_0x4cfff7(534)]([
                        _0x4cfff7(918) + this['pluginBrowser'],
                        _0x51aec5['rOAmA']
                    ])[_0x4cfff7(775)](() => {
                        const _0x1fddee = _0x4cfff7, {args: _0x2db0ae} = launch['launch']['firstCall'], _0x464548 = _[_0x1fddee(1068)](TYPICAL_BROWSERS, { 'name': _0x3103bc[_0x1fddee(1207)] }), _0x4f9e1f = R['merge'](_0x464548, {
                                'isHeadless': !![],
                                'isHeaded': ![]
                            });
                        _0x3103bc[_0x1fddee(1208)](expect, _0x2db0ae[7850 * 1 + 25 * -359 + 375 * 3], _0x3103bc['Pxguw'])['to'][_0x1fddee(1163)]['eq'](_0x4f9e1f);
                        const _0xa1c1f9 = _0x2db0ae[399 * -7 + 1706 * -1 + 4501];
                        _0x3103bc[_0x1fddee(1208)](expect, _0xa1c1f9[_0x1fddee(1209)](4018 + -1 * 6826 + -234 * -12, 7041 * 1 + 1226 + 8263 * -1), _0x3103bc[_0x1fddee(1210)])['to'][_0x1fddee(1163)]['eq']([
                            _0x3103bc[_0x1fddee(1207)],
                            _0x3103bc[_0x1fddee(1211)],
                            _0x1fddee(868),
                            _0x3103bc[_0x1fddee(1212)]
                        ]), this[_0x1fddee(747)](-2209 + 5602 + -3393), _0x3103bc[_0x1fddee(1213)](expect, chromeBrowser[_0x1fddee(607)])['to'][_0x1fddee(920)][_0x1fddee(924)][_0x1fddee(904)], _0x3103bc[_0x1fddee(1214)](expect, chromeBrowser[_0x1fddee(1180)])['to']['have'][_0x1fddee(924)][_0x1fddee(904)], _0x3103bc[_0x1fddee(1215)](expect, chromeBrowser['_connectToChromeRemoteInterface'])['to'][_0x1fddee(920)]['been'][_0x1fddee(904)];
                    });
                }), it(_0x51aec5[_0x3356e6(1200)], function () {
                    const _0x43cd04 = _0x3356e6, _0x1ca559 = sinon[_0x43cd04(732)]();
                    return videoCapture[_0x43cd04(534)][_0x43cd04(742)]({ 'writeVideoFrame': _0x1ca559 }), cypress[_0x43cd04(534)]([
                        _0x43cd04(918) + this['pluginBrowser'],
                        _0x51aec5[_0x43cd04(1216)]
                    ])['then'](() => {
                        const _0x3f14c0 = _0x43cd04;
                        _0x3103bc[_0x3f14c0(1215)](expect, Windows[_0x3f14c0(1023)])['to']['be']['calledWithMatch'](this[_0x3f14c0(729)], {
                            'browser': _0x3103bc[_0x3f14c0(1217)],
                            'foo': _0x3103bc[_0x3f14c0(1218)],
                            'onNewWindow': sinon[_0x3f14c0(1219)][_0x3f14c0(1220)],
                            'onScreencastFrame': sinon[_0x3f14c0(1219)][_0x3f14c0(1220)]
                        }), this[_0x3f14c0(747)](-7 * 1321 + -6354 + 15601);
                    });
                });
            });
        }), describe(_0x472846(1221), () => {
            const _0x34fca4 = _0x472846, _0x2546a5 = {
                    'xvLXB': function (_0x5afa71, _0x525e48) {
                        return _0x5afa71(_0x525e48);
                    },
                    'npCHb': _0x2e09ce[_0x34fca4(1222)],
                    'JilzZ': _0x34fca4(1223)
                };
            _0x2e09ce['jEujT'](beforeEach, () => {
                const _0x41a68f = _0x34fca4;
                return runMode[_0x41a68f(579)][_0x41a68f(734)]({ 'stats': { 'failures': 0 } });
            }), _0x2e09ce[_0x34fca4(1194)](it, _0x34fca4(1224), function () {
                const _0x4442f3 = _0x34fca4, _0x45ab06 = {
                        'yApYr': function (_0x5b2175, _0x4857f9) {
                            const _0x201eb8 = _0x2686;
                            return _0x2546a5[_0x201eb8(1225)](_0x5b2175, _0x4857f9);
                        }
                    }, _0x187d54 = sinon[_0x4442f3(743)](http[_0x4442f3(1226)][_0x4442f3(738)], _0x2546a5[_0x4442f3(1227)]), _0x1244ea = sinon[_0x4442f3(743)](ServerE2E[_0x4442f3(738)], _0x4442f3(644));
                return cypress[_0x4442f3(534)]([
                    _0x4442f3(918) + this['todosPath'],
                    _0x2546a5[_0x4442f3(1228)]
                ])['then'](() => {
                    const _0x3dbdf3 = _0x4442f3;
                    expect(openProject[_0x3dbdf3(1147)]()[_0x3dbdf3(1016)]['port'])['to']['eq'](10 * -586 + 69 * 5 + 11059), _0x45ab06[_0x3dbdf3(1229)](expect, _0x187d54)['to']['be'][_0x3dbdf3(753)](-9600 + 4012 + 506 * 22), expect(_0x1244ea)['to']['be'][_0x3dbdf3(750)]({ 'port': 5544 }), this[_0x3dbdf3(747)](-7093 * -1 + -925 + -1 * 6168);
                });
            }), _0x2e09ce[_0x34fca4(1230)](it, _0x2e09ce['YAhpZ'], async function () {
                const _0x48956e = _0x34fca4, _0x3d9531 = {
                        'SpPbU': _0x2e09ce['jgdkn'],
                        'dMNmP': _0x2e09ce[_0x48956e(1231)]
                    };
                sinon[_0x48956e(732)](ProjectBase[_0x48956e(738)], _0x2e09ce[_0x48956e(1232)])[_0x48956e(742)]({
                    'use': () => {
                    }
                });
                let _0x162f4f = http['createServer']();
                return _0x162f4f = Promise[_0x48956e(1233)](_0x162f4f), _0x162f4f[_0x48956e(1234)](22 * 150 + -184 * 23 + 6476 * 1, _0x2e09ce['urLGS'])[_0x48956e(775)](() => {
                    const _0xa0e5a1 = _0x48956e;
                    return cypress[_0xa0e5a1(534)]([
                        _0xa0e5a1(918) + this[_0xa0e5a1(721)],
                        _0x2546a5[_0xa0e5a1(1228)]
                    ]);
                })[_0x48956e(775)](() => {
                    const _0x1df88d = _0x48956e;
                    this[_0x1df88d(781)](_0x3d9531[_0x1df88d(1235)], _0x3d9531[_0x1df88d(1236)]);
                });
            });
        }), _0x2c8337[_0x472846(1123)](describe, _0x2c8337['pavVq'], () => {
            const _0x540880 = _0x472846, _0x1d5074 = {
                    'AzEvU': _0x2c8337[_0x540880(1237)],
                    'hCojT': function (_0x325c9b, _0x345f64) {
                        const _0x5ec48f = _0x540880;
                        return _0x2c8337[_0x5ec48f(1141)](_0x325c9b, _0x345f64);
                    },
                    'SZguO': _0x2c8337['hnSzi'],
                    'QwzDD': _0x2c8337[_0x540880(1238)],
                    'zjKWo': _0x2c8337['pavVq'],
                    'fBnoS': _0x540880(1239)
                };
            _0x2c8337[_0x540880(1240)](beforeEach, () => {
                const _0x385da3 = _0x540880;
                return process[_0x385da3(700)] = _[_0x385da3(1241)](process[_0x385da3(700)], _0x1d5074[_0x385da3(1242)]), runMode['listenForProjectEnd']['resolves']({ 'stats': { 'failures': 0 } });
            }), _0x2c8337[_0x540880(1145)](it, _0x540880(1243), function () {
                const _0x34b1a9 = _0x540880, _0x234775 = {
                        'gkUaZ': function (_0x54a689, _0x334eff) {
                            return _0x1d5074['hCojT'](_0x54a689, _0x334eff);
                        },
                        'xfgQO': _0x34b1a9(868),
                        'VArmj': _0x34b1a9(1022),
                        'hehoh': _0x1d5074[_0x34b1a9(1244)]
                    };
                return cypress[_0x34b1a9(534)]([
                    _0x34b1a9(918) + this[_0x34b1a9(721)],
                    _0x1d5074[_0x34b1a9(1245)],
                    _0x1d5074[_0x34b1a9(1246)],
                    _0x1d5074[_0x34b1a9(1247)]
                ])[_0x34b1a9(775)](() => {
                    const _0x3d42e7 = _0x34b1a9;
                    _0x234775[_0x3d42e7(1248)](expect, openProject['getProject']()[_0x3d42e7(1016)][_0x3d42e7(700)])['to'][_0x3d42e7(1163)]['eq']({
                        'version': _0x3d42e7(1249),
                        'foo': _0x234775[_0x3d42e7(1250)],
                        'host': _0x234775[_0x3d42e7(1251)],
                        'baz': _0x234775[_0x3d42e7(1252)]
                    }), this['expectExitWith'](-3674 + 1851 * -4 + 11078);
                });
            }), _0x2c8337[_0x540880(1253)](it, _0x540880(1254), function () {
                const _0x106f8b = _0x540880, _0xe3f24f = {
                        'aBgvE': function (_0x52c898, _0x48efa) {
                            return _0x2e09ce['SjvdI'](_0x52c898, _0x48efa);
                        },
                        'CYndK': _0x2e09ce[_0x106f8b(1255)]
                    };
                return cypress['start']([
                    '--run-project=' + this[_0x106f8b(721)],
                    _0x106f8b(1256),
                    _0x2e09ce[_0x106f8b(1257)]
                ])[_0x106f8b(775)](() => {
                    const _0x107d99 = _0x106f8b;
                    _0xe3f24f[_0x107d99(1258)](expect, openProject[_0x107d99(1147)]()['cfg'][_0x107d99(700)])['to'][_0x107d99(1163)]['eq']({
                        'FOO': '',
                        'BAR': '',
                        'BAZ': _0xe3f24f['CYndK']
                    }), this[_0x107d99(747)](-3650 + 3986 + 1 * -336);
                });
            });
        }), _0x2c8337[_0x472846(1259)](describe, _0x2c8337[_0x472846(1260)], () => {
            const _0x8335c1 = _0x472846, _0x3dc1e0 = {
                    'dbqLH': _0x8335c1(557),
                    'IMHVQ': _0x2e09ce[_0x8335c1(1261)],
                    'ShXIA': _0x2e09ce[_0x8335c1(994)],
                    'yGETE': _0x2e09ce[_0x8335c1(986)],
                    'Fgenh': _0x8335c1(641)
                };
            _0x2e09ce['lVpDU'](it, _0x2e09ce[_0x8335c1(1262)], function () {
                const _0x2462f0 = _0x8335c1, _0x36843e = {
                        'hIHLl': _0x2462f0(1263),
                        'IwjMf': _0x3dc1e0[_0x2462f0(1264)],
                        'HpMjA': _0x3dc1e0[_0x2462f0(1265)]
                    };
                return fs[_0x2462f0(975)](path[_0x2462f0(526)](this[_0x2462f0(973)], _0x3dc1e0[_0x2462f0(1266)]))[_0x2462f0(775)](() => {
                    throw new Error(_0x36843e['hIHLl']);
                })[_0x2462f0(978)]({ 'code': _0x3dc1e0['yGETE'] }, () => {
                    const _0x5ce221 = _0x2462f0;
                    return cypress[_0x5ce221(534)]([
                        _0x5ce221(918) + this['pristinePath'],
                        _0x36843e[_0x5ce221(1267)],
                        _0x5ce221(641),
                        _0x36843e[_0x5ce221(1268)]
                    ])[_0x5ce221(775)](() => {
                        const _0x48ae04 = _0x5ce221;
                        this[_0x48ae04(747)](1 * 7269 + 4907 + 1522 * -8);
                    });
                });
            }), _0x2e09ce['RwXNe'](it, _0x2e09ce[_0x8335c1(1269)], function () {
                const _0x56a50f = _0x8335c1;
                return this[_0x56a50f(1270)] = _0x2e09ce[_0x56a50f(1271)], fs[_0x56a50f(975)](path[_0x56a50f(526)](this[_0x56a50f(721)], this['filename']))[_0x56a50f(775)](() => {
                    const _0x309d7d = _0x56a50f;
                    throw new Error(this[_0x309d7d(1270)] + _0x309d7d(1272));
                })[_0x56a50f(978)]({ 'code': _0x2e09ce[_0x56a50f(986)] }, () => {
                    const _0x1b5cb6 = _0x56a50f;
                    return cypress['start']([
                        _0x1b5cb6(918) + this[_0x1b5cb6(721)],
                        _0x1b5cb6(557),
                        _0x3dc1e0[_0x1b5cb6(1273)],
                        this[_0x1b5cb6(1270)]
                    ])[_0x1b5cb6(775)](() => {
                        const _0x390b08 = _0x1b5cb6;
                        this[_0x390b08(781)]('CONFIG_FILE_NOT_FOUND', this[_0x390b08(1270)], this['todosPath']);
                    });
                });
            });
        });
    }), _0x2c8337[_0x36f279(1274)](context, _0x2c8337[_0x36f279(1275)], () => {
        const _0x583981 = _0x36f279, _0x99fdbd = {
                'PLPtv': function (_0x47614d, _0x7cebb5) {
                    return _0x2c8337['pcBTV'](_0x47614d, _0x7cebb5);
                },
                'pARaU': _0x2c8337[_0x583981(1276)],
                'qRvDw': _0x2c8337[_0x583981(1277)],
                'FMyvC': 'INDETERMINATE_CI_BUILD_ID',
                'VfLdj': _0x2c8337[_0x583981(1278)],
                'gqloP': _0x583981(651),
                'vNxMq': '--key=token-123',
                'FlCYm': '--parallel',
                'eoyBV': _0x2c8337[_0x583981(1279)],
                'RCluT': 'RECORD_PARAMS_WITHOUT_RECORDING-ciBuildId 1',
                'kbScZ': _0x2c8337[_0x583981(1280)],
                'JwUPJ': _0x2c8337[_0x583981(1281)],
                'VdXQg': _0x2c8337[_0x583981(1282)],
                'khkNR': _0x2c8337['onNHF'],
                'wDJyf': function (_0x3751ae, _0x10b5b2) {
                    return _0x3751ae(_0x10b5b2);
                },
                'eflzD': 'RECORD_PARAMS_WITHOUT_RECORDING-group-parallel 1',
                'rJVnV': _0x2c8337[_0x583981(1283)],
                'ibUcv': _0x2c8337[_0x583981(1284)],
                'DLGYY': _0x2c8337[_0x583981(1285)],
                'ahZAk': _0x2c8337[_0x583981(1275)],
                'lnORL': _0x2c8337['YyaaI'],
                'uKyxa': _0x2c8337[_0x583981(1286)],
                'xBwPZ': _0x2c8337['rlrEf'],
                'KDGnB': _0x583981(1287),
                'XiXpD': _0x2c8337[_0x583981(1288)],
                'rThbL': _0x2c8337['cxQKf'],
                'OAXrJ': _0x2c8337['lXSxp'],
                'RUzTc': _0x583981(1289),
                'DrxPi': _0x2c8337[_0x583981(1290)],
                'mZRBA': _0x2c8337['jtKaI']
            };
        _0x2c8337[_0x583981(1291)](beforeEach, function () {
            const _0x510e6b = _0x583981, _0x95a933 = _0x510e6b(1292)['split']('|');
            let _0x3ac5ad = 4822 + -827 + -3995;
            while (!![]) {
                switch (_0x95a933[_0x3ac5ad++]) {
                case '0':
                    sinon[_0x510e6b(732)](runMode, _0x2c8337['sjAPp'])[_0x510e6b(734)]({
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
                        'video': _0x2c8337[_0x510e6b(1293)],
                        'shouldUploadVideo': !![],
                        'screenshots': [],
                        'config': {},
                        'spec': {}
                    });
                    continue;
                case '1':
                    sinon['stub'](runMode, _0x510e6b(893))[_0x510e6b(734)]();
                    continue;
                case '2':
                    sinon[_0x510e6b(732)](browsers, _0x2c8337[_0x510e6b(1294)]);
                    continue;
                case '3':
                    sinon[_0x510e6b(732)](api, _0x510e6b(1295))['resolves']();
                    continue;
                case '4':
                    return Promise[_0x510e6b(991)]([
                        user[_0x510e6b(932)]({}),
                        _0x2c8337[_0x510e6b(1296)](getId, this['todosPath'])[_0x510e6b(775)](_0x598727 => {
                            const _0x305ba1 = _0x510e6b;
                            this[_0x305ba1(1297)] = _0x598727;
                        })
                    ]);
                case '5':
                    sinon[_0x510e6b(732)](electron[_0x510e6b(804)], 'on')[_0x510e6b(741)](_0x2c8337[_0x510e6b(830)])['yieldsAsync']();
                    continue;
                }
                break;
            }
        }), _0x2c8337[_0x583981(1298)](it, _0x583981(1299), function () {
            const _0x482b8c = _0x583981, _0x2806d6 = {
                    'YjTwC': function (_0x46a756, _0x406b5e) {
                        return _0x2c8337['ESHFI'](_0x46a756, _0x406b5e);
                    },
                    'nyojI': function (_0x3788b6, _0x2baa81) {
                        return _0x3788b6(_0x2baa81);
                    }
                };
            return sinon[_0x482b8c(732)](env, _0x2c8337[_0x482b8c(1300)])[_0x482b8c(741)](_0x2c8337[_0x482b8c(1301)])[_0x482b8c(742)](this[_0x482b8c(1297)]), cypress[_0x482b8c(534)]([
                _0x482b8c(815),
                '--run-project=' + this[_0x482b8c(934)],
                _0x2c8337[_0x482b8c(1275)],
                _0x2c8337[_0x482b8c(1302)]
            ])['then'](() => {
                const _0x49b16e = _0x482b8c;
                _0x2806d6[_0x49b16e(1303)](expect, api['createRun'])['to']['be']['calledWithMatch']({ 'projectId': this[_0x49b16e(1297)] }), _0x2806d6['nyojI'](expect, errors[_0x49b16e(538)])[_0x49b16e(937)]['to']['be'][_0x49b16e(938)], this[_0x49b16e(747)](421 * 14 + 8251 + 4714 * -3);
            });
        }), _0x2c8337[_0x583981(1304)](it, _0x2c8337['fMNQU'], function () {
            const _0x3d76b5 = _0x583981;
            return sinon[_0x3d76b5(732)](env, _0x2c8337[_0x3d76b5(1300)])[_0x3d76b5(741)](_0x2c8337[_0x3d76b5(1301)])[_0x3d76b5(742)](_0x3d76b5(665))[_0x3d76b5(741)](_0x2c8337[_0x3d76b5(1305)])[_0x3d76b5(742)](_0x2c8337['brnsx']), cypress['start']([
                _0x3d76b5(815),
                _0x3d76b5(918) + this[_0x3d76b5(934)],
                _0x2c8337['TTatZ']
            ])[_0x3d76b5(775)](() => {
                const _0x1a9788 = _0x3d76b5;
                _0x99fdbd[_0x1a9788(1306)](expect, api[_0x1a9788(1295)])['to']['be'][_0x1a9788(750)]({
                    'projectId': _0x99fdbd[_0x1a9788(1307)],
                    'recordKey': _0x99fdbd[_0x1a9788(1308)]
                }), _0x99fdbd[_0x1a9788(1306)](expect, errors[_0x1a9788(538)])[_0x1a9788(937)]['to']['be'][_0x1a9788(938)], this[_0x1a9788(747)](13 * 271 + -966 * 1 + -2554);
            });
        }), it(_0x2c8337['rPRrv'], function () {
            const _0x517533 = _0x583981, _0x3b1f74 = {
                    'ioPRi': _0x2c8337[_0x517533(1309)],
                    'lfqas': function (_0x71451d, _0x131c33) {
                        const _0x15ac04 = _0x517533;
                        return _0x2c8337[_0x15ac04(1296)](_0x71451d, _0x131c33);
                    }
                };
            return sinon[_0x517533(732)](ciProvider, _0x2c8337['OvJwx'])['returns'](null), cypress[_0x517533(534)]([
                _0x517533(918) + this[_0x517533(725)],
                _0x517533(646),
                _0x2c8337['DwzRi'],
                _0x2c8337['GHIyJ']
            ])['then'](() => {
                const _0x1698b2 = _0x517533;
                return this[_0x1698b2(781)](_0x3b1f74[_0x1698b2(1310)]), _0x3b1f74[_0x1698b2(1311)](snapshotConsoleLogs, 'INDETERMINATE_CI_BUILD_ID-group 1');
            });
        }), _0x2c8337[_0x583981(1312)](it, _0x2c8337[_0x583981(1313)], function () {
            const _0x5125f1 = _0x583981, _0x579fe5 = {
                    'HheBa': _0x99fdbd[_0x5125f1(1314)],
                    'JxZcE': _0x99fdbd['VfLdj']
                };
            return sinon[_0x5125f1(732)](ciProvider, _0x99fdbd[_0x5125f1(1315)])[_0x5125f1(742)](null), cypress[_0x5125f1(534)]([
                _0x5125f1(918) + this[_0x5125f1(725)],
                _0x5125f1(646),
                _0x99fdbd[_0x5125f1(1316)],
                _0x99fdbd[_0x5125f1(1317)]
            ])[_0x5125f1(775)](() => {
                const _0x28e19d = _0x5125f1;
                return this['expectExitWithErr'](_0x579fe5['HheBa']), snapshotConsoleLogs(_0x579fe5[_0x28e19d(1318)]);
            });
        }), _0x2c8337['CPbxv'](it, _0x2c8337['iYcBZ'], function () {
            const _0x59ecb5 = _0x583981, _0x7a86bc = { 'ZCszH': _0x2c8337[_0x59ecb5(1319)] };
            return sinon[_0x59ecb5(732)](ciProvider, _0x2c8337[_0x59ecb5(1320)])[_0x59ecb5(742)](null), cypress[_0x59ecb5(534)]([
                _0x59ecb5(918) + this[_0x59ecb5(725)],
                _0x2c8337[_0x59ecb5(1275)],
                _0x2c8337['DwzRi'],
                _0x2c8337[_0x59ecb5(1321)],
                _0x2c8337['SFPpG']
            ])[_0x59ecb5(775)](() => {
                const _0x2a71ae = _0x59ecb5;
                return this[_0x2a71ae(781)](_0x2a71ae(650)), snapshotConsoleLogs(_0x7a86bc[_0x2a71ae(1322)]);
            });
        }), _0x2c8337['CPbxv'](it, _0x583981(1323), function () {
            const _0x4033ae = _0x583981, _0x1d7157 = {
                    'LpoBv': _0x99fdbd[_0x4033ae(1324)],
                    'prvfj': function (_0x5b3144, _0x171918) {
                        const _0x36f026 = _0x4033ae;
                        return _0x99fdbd[_0x36f026(1306)](_0x5b3144, _0x171918);
                    }
                };
            return cypress[_0x4033ae(534)]([
                '--run-project=' + this[_0x4033ae(725)],
                _0x4033ae(646),
                _0x4033ae(647),
                _0x4033ae(1325)
            ])['then'](() => {
                const _0x23a9ec = _0x4033ae;
                return this[_0x23a9ec(781)](_0x1d7157[_0x23a9ec(1326)]), _0x1d7157[_0x23a9ec(1327)](snapshotConsoleLogs, _0x23a9ec(1328));
            });
        }), _0x2c8337[_0x583981(1329)](it, _0x2c8337[_0x583981(1330)], function () {
            const _0x433e12 = _0x583981, _0x34150a = { 'zBzCF': _0x99fdbd[_0x433e12(1331)] };
            return cypress[_0x433e12(534)]([
                '--run-project=' + this['recordPath'],
                _0x99fdbd['kbScZ']
            ])[_0x433e12(775)](() => {
                const _0x5a041a = _0x433e12;
                return this[_0x5a041a(781)]('RECORD_PARAMS_WITHOUT_RECORDING'), snapshotConsoleLogs(_0x34150a[_0x5a041a(1332)]);
            });
        }), _0x2c8337[_0x583981(1329)](it, _0x2c8337[_0x583981(1333)], function () {
            const _0x4b828e = _0x583981;
            return cypress[_0x4b828e(534)]([
                '--run-project=' + this['recordPath'],
                _0x2c8337[_0x4b828e(1334)]
            ])[_0x4b828e(775)](() => {
                const _0x142184 = _0x4b828e;
                return this[_0x142184(781)](_0x99fdbd['JwUPJ']), _0x99fdbd[_0x142184(1306)](snapshotConsoleLogs, _0x99fdbd[_0x142184(1335)]);
            });
        }), it(_0x583981(1336), function () {
            const _0x2a611c = _0x583981, _0x301a66 = {
                    'aVWok': _0x2c8337[_0x2a611c(1281)],
                    'WkTqd': function (_0xf0d261, _0x3377ea) {
                        return _0xf0d261(_0x3377ea);
                    },
                    'YcuuL': _0x2a611c(1337)
                };
            return cypress[_0x2a611c(534)]([
                _0x2a611c(918) + this[_0x2a611c(725)],
                _0x2c8337[_0x2a611c(1338)]
            ])[_0x2a611c(775)](() => {
                const _0x461e66 = _0x2a611c;
                return this[_0x461e66(781)](_0x301a66[_0x461e66(1339)]), _0x301a66[_0x461e66(1340)](snapshotConsoleLogs, _0x301a66[_0x461e66(1341)]);
            });
        }), _0x2c8337[_0x583981(1329)](it, _0x2c8337[_0x583981(1342)], function () {
            const _0xc52a09 = _0x583981;
            return cypress['start']([
                _0xc52a09(918) + this[_0xc52a09(725)],
                _0xc52a09(669)
            ])[_0xc52a09(775)](() => {
                const _0x547b38 = _0xc52a09;
                return this[_0x547b38(781)](_0x99fdbd[_0x547b38(1343)]), _0x99fdbd['PLPtv'](snapshotConsoleLogs, _0x99fdbd['khkNR']);
            });
        }), _0x2c8337['CPbxv'](it, _0x583981(1344), function () {
            const _0x19495e = _0x583981;
            return cypress['start']([
                _0x19495e(918) + this[_0x19495e(725)],
                _0x99fdbd['rJVnV'],
                _0x19495e(663),
                _0x99fdbd[_0x19495e(1317)]
            ])[_0x19495e(775)](() => {
                const _0x3b993b = _0x19495e;
                return this['expectExitWithErr'](_0x99fdbd[_0x3b993b(1343)]), _0x99fdbd[_0x3b993b(1345)](snapshotConsoleLogs, _0x99fdbd['eflzD']);
            });
        }), _0x2c8337[_0x583981(1346)](it, _0x2c8337[_0x583981(1347)], function () {
            const _0x213c17 = _0x583981, _0x1913df = new Error();
            return _0x1913df[_0x213c17(1348)] = -6612 + 3 * -843 + 9563, _0x1913df[_0x213c17(1349)] = {
                'code': _0x99fdbd[_0x213c17(1350)],
                'payload': { 'runUrl': _0x99fdbd[_0x213c17(1351)] }
            }, api[_0x213c17(1295)]['rejects'](_0x1913df), cypress[_0x213c17(534)]([
                '--run-project=' + this[_0x213c17(725)],
                _0x99fdbd['ahZAk'],
                _0x99fdbd['vNxMq'],
                _0x213c17(663),
                _0x99fdbd[_0x213c17(1352)]
            ])['then'](() => {
                const _0xa97d61 = _0x213c17;
                return this[_0xa97d61(781)](_0xa97d61(1353)), snapshotConsoleLogs(_0xa97d61(1354));
            });
        }), it(_0x2c8337[_0x583981(1355)], function () {
            const _0x3900ec = _0x583981, _0xd034ff = {
                    'qwZCM': _0x2c8337['HqRoA'],
                    'AxBoM': function (_0xf22054, _0xd362b0) {
                        const _0x500fc3 = _0x2686;
                        return _0x2c8337[_0x500fc3(1291)](_0xf22054, _0xd362b0);
                    },
                    'LmciL': _0x2c8337['guOjp']
                };
            sinon['stub'](system, _0x2c8337['QjGdR'])[_0x3900ec(742)]({
                'osName': _0x2c8337[_0x3900ec(1356)],
                'osVersion': 'v1'
            }), sinon[_0x3900ec(732)](browsers, _0x2c8337['nAAzu'])[_0x3900ec(734)]({
                'version': _0x2c8337[_0x3900ec(1357)],
                'displayName': _0x2c8337[_0x3900ec(1358)]
            });
            const _0x4e22aa = new Error();
            return _0x4e22aa[_0x3900ec(1348)] = 9993 * 1 + -1 * 4643 + -4928, _0x4e22aa[_0x3900ec(1349)] = {
                'code': _0x3900ec(1359),
                'payload': { 'runUrl': _0x2c8337[_0x3900ec(1285)] }
            }, api['createRun'][_0x3900ec(1360)](_0x4e22aa), cypress[_0x3900ec(534)]([
                _0x3900ec(918) + this[_0x3900ec(725)],
                _0x2c8337[_0x3900ec(1275)],
                _0x2c8337[_0x3900ec(1302)],
                _0x2c8337[_0x3900ec(1338)],
                _0x2c8337['bpPcf'],
                _0x2c8337[_0x3900ec(1361)]
            ])[_0x3900ec(775)](() => {
                const _0x49b402 = _0x3900ec;
                return this[_0x49b402(781)](_0xd034ff[_0x49b402(1362)]), _0xd034ff[_0x49b402(1363)](snapshotConsoleLogs, _0xd034ff[_0x49b402(1364)]);
            });
        }), it(_0x583981(1365), function () {
            const _0x293266 = _0x583981, _0x34a5b3 = new Error();
            return _0x34a5b3['statusCode'] = -57 * -15 + -1 * -4547 + -415 * 12, _0x34a5b3[_0x293266(1349)] = {
                'code': _0x99fdbd[_0x293266(1366)],
                'payload': { 'runUrl': 'https://dashboard.cypress.io/runs/12345' }
            }, api['createRun'][_0x293266(1360)](_0x34a5b3), cypress[_0x293266(534)]([
                _0x293266(918) + this[_0x293266(725)],
                _0x99fdbd[_0x293266(1367)],
                _0x293266(647),
                _0x99fdbd[_0x293266(1317)],
                _0x99fdbd[_0x293266(1368)],
                _0x99fdbd[_0x293266(1352)]
            ])['then'](() => {
                const _0x291ef6 = _0x293266;
                return this[_0x291ef6(781)](_0x99fdbd[_0x291ef6(1369)]), snapshotConsoleLogs(_0x99fdbd[_0x291ef6(1370)]);
            });
        }), _0x2c8337['ljOIp'](it, _0x2c8337[_0x583981(1371)], function () {
            const _0x34ee6e = _0x583981, _0x3c80f1 = new Error();
            return _0x3c80f1[_0x34ee6e(1348)] = -5836 + 7 * 686 + 1456, _0x3c80f1['error'] = {
                'code': _0x99fdbd[_0x34ee6e(1372)],
                'payload': { 'runUrl': _0x99fdbd[_0x34ee6e(1351)] }
            }, api['createRun'][_0x34ee6e(1360)](_0x3c80f1), cypress[_0x34ee6e(534)]([
                _0x34ee6e(918) + this[_0x34ee6e(725)],
                _0x99fdbd[_0x34ee6e(1367)],
                _0x99fdbd[_0x34ee6e(1316)],
                _0x34ee6e(655),
                _0x99fdbd[_0x34ee6e(1373)],
                _0x99fdbd[_0x34ee6e(1368)],
                _0x99fdbd['lnORL']
            ])['then'](() => {
                const _0x3e1721 = _0x34ee6e;
                return this[_0x3e1721(781)](_0x3e1721(1374)), _0x99fdbd[_0x3e1721(1345)](snapshotConsoleLogs, _0x99fdbd[_0x3e1721(1375)]);
            });
        }), it(_0x2c8337['LYAQz'], function () {
            const _0x51579b = _0x583981, _0x2efd97 = new Error();
            return _0x2efd97[_0x51579b(1348)] = 7694 + -2819 * 2 + -1634, _0x2efd97['error'] = {
                'code': _0x99fdbd[_0x51579b(1376)],
                'payload': { 'runUrl': _0x99fdbd[_0x51579b(1351)] }
            }, api[_0x51579b(1295)][_0x51579b(1360)](_0x2efd97), cypress[_0x51579b(534)]([
                _0x51579b(918) + this[_0x51579b(725)],
                _0x99fdbd['ahZAk'],
                _0x99fdbd[_0x51579b(1316)],
                _0x51579b(669),
                _0x99fdbd['XiXpD'],
                _0x51579b(664)
            ])['then'](() => {
                const _0x45bbdf = _0x51579b;
                return this[_0x45bbdf(781)]('DASHBOARD_ALREADY_COMPLETE'), snapshotConsoleLogs(_0x99fdbd['RUzTc']);
            });
        }), it(_0x2c8337[_0x583981(1377)], function () {
            const _0x1ee7b6 = _0x583981, _0x330685 = new Error();
            return _0x330685[_0x1ee7b6(1348)] = -2785 + 1 * -2606 + 5813, _0x330685[_0x1ee7b6(1349)] = {
                'code': _0x1ee7b6(1378),
                'payload': { 'runUrl': _0x99fdbd[_0x1ee7b6(1351)] }
            }, api['createRun']['rejects'](_0x330685), cypress['start']([
                _0x1ee7b6(918) + this[_0x1ee7b6(725)],
                '--record',
                _0x99fdbd['vNxMq'],
                _0x99fdbd[_0x1ee7b6(1317)],
                _0x99fdbd[_0x1ee7b6(1373)],
                _0x99fdbd[_0x1ee7b6(1368)],
                _0x99fdbd['lnORL']
            ])[_0x1ee7b6(775)](() => {
                const _0x47c22c = _0x1ee7b6;
                return this[_0x47c22c(781)](_0x47c22c(1379)), _0x99fdbd[_0x47c22c(1345)](snapshotConsoleLogs, _0x99fdbd[_0x47c22c(1380)]);
            });
        });
    }), context(_0x2c8337[_0x36f279(1381)], () => {
        const _0x151c80 = _0x36f279, _0x27099a = {
                'btpIp': _0x2c8337['AXnKp'],
                'foTCl': _0x2c8337[_0x151c80(1382)],
                'qnaHX': _0x151c80(715)
            };
        _0x2c8337['FKdSn'](beforeEach, () => {
            const _0x169681 = _0x151c80;
            console['log'][_0x169681(1064)](), sinon[_0x169681(732)](console, _0x27099a[_0x169681(1383)]);
        }), _0x2c8337[_0x151c80(1384)](it, _0x151c80(1385), function () {
            const _0x214ef1 = _0x151c80, _0x231d1b = {
                    'FTgKK': function (_0x326303, _0xb51ef8) {
                        return _0x326303(_0xb51ef8);
                    },
                    'QCYPK': _0x27099a[_0x214ef1(1386)]
                };
            return cypress[_0x214ef1(534)]([_0x27099a['qnaHX']])[_0x214ef1(775)](() => {
                const _0x4f9b12 = _0x214ef1;
                _0x231d1b[_0x4f9b12(1387)](expect, console[_0x4f9b12(524)])['to']['be']['calledWithMatch'](_0x231d1b['QCYPK']), this[_0x4f9b12(747)](-5360 + -110 + 5470);
            });
        });
    }), context(_0x2c8337['brgVu'], () => {
        const _0x397297 = _0x36f279;
        _0x2c8337['xfddM'](beforeEach, () => {
            const _0x2f179b = _0x2686;
            console['log'][_0x2f179b(1064)](), sinon[_0x2f179b(732)](console, _0x2c8337[_0x2f179b(745)]);
        }), _0x2c8337[_0x397297(1384)](it, _0x2c8337[_0x397297(1388)], function () {
            const _0x51ce8e = _0x397297, _0x58ce32 = {
                    'mIUDx': function (_0x471d9e, _0x2c003a) {
                        const _0x7d3678 = _0x2686;
                        return _0x2c8337[_0x7d3678(1389)](_0x471d9e, _0x2c003a);
                    }
                };
            return cypress['start']([_0x2c8337[_0x51ce8e(1390)]])[_0x51ce8e(775)](() => {
                const _0x8f9e6a = _0x51ce8e;
                _0x58ce32[_0x8f9e6a(1391)](expect, console['log'])['to']['be'][_0x8f9e6a(753)](pkg[_0x8f9e6a(746)]), this['expectExitWith'](-2530 + 1832 + 2 * 349);
            });
        });
    }), _0x2c8337['hlJCv'](context, _0x36f279(689), () => {
        const _0x34eca0 = _0x36f279, _0x2eeb0b = { 'zcApx': _0x34eca0(524) };
        _0x2c8337[_0x34eca0(1392)](beforeEach, () => {
            const _0x46f137 = _0x34eca0;
            console[_0x46f137(524)]['restore'](), sinon['stub'](console, _0x2eeb0b[_0x46f137(1393)]);
        }), it(_0x2c8337[_0x34eca0(1394)], function () {
            const _0x1952a4 = _0x34eca0, _0x4505cc = {
                    'bQqoL': function (_0x46616b, _0xe8c0bd) {
                        const _0xebbaa5 = _0x2686;
                        return _0x2c8337[_0xebbaa5(1395)](_0x46616b, _0xe8c0bd);
                    }
                };
            return cypress['start']([
                _0x2c8337[_0x1952a4(1396)],
                _0x1952a4(1397)
            ])[_0x1952a4(775)](() => {
                const _0x440dd2 = _0x1952a4;
                _0x4505cc['bQqoL'](expect, console[_0x440dd2(524)])['to']['be'][_0x440dd2(753)](_0x440dd2(1052)), this['expectExitWith'](1871 * -1 + -111 * -64 + 1 * -5233);
            });
        });
    }), _0x2c8337[_0x36f279(1398)](context, _0x2c8337[_0x36f279(1399)], () => {
        const _0x2df724 = _0x36f279, _0x57453a = {
                'vrGiA': function (_0x29a05d, _0x51937c) {
                    return _0x2c8337['NrQDN'](_0x29a05d, _0x51937c);
                },
                'vmxcx': _0x2c8337[_0x2df724(1400)],
                'dWVZH': _0x2df724(1401),
                'vPnUq': _0x2c8337[_0x2df724(1402)],
                'GCfxl': _0x2c8337[_0x2df724(1403)],
                'VLAsi': _0x2c8337[_0x2df724(1404)],
                'vcooK': _0x2c8337[_0x2df724(1405)],
                'sNNIr': _0x2df724(694),
                'MCVKz': function (_0x217cda, _0x58d581) {
                    return _0x217cda(_0x58d581);
                },
                'ggyML': _0x2c8337['mlEEb'],
                'juMGa': _0x2df724(592),
                'KQTnR': function (_0x159591, _0x1ad99f) {
                    return _0x2c8337['NrQDN'](_0x159591, _0x1ad99f);
                },
                'BEBBm': _0x2c8337[_0x2df724(1406)],
                'eRnRC': function (_0x17ef50, _0x108006) {
                    const _0x14df26 = _0x2df724;
                    return _0x2c8337[_0x14df26(1407)](_0x17ef50, _0x108006);
                },
                'MwFkl': function (_0x2b5bdd, _0x37e356) {
                    return _0x2b5bdd(_0x37e356);
                },
                'zZkuD': function (_0x2ebf13, _0x4131ed) {
                    return _0x2c8337['WimBX'](_0x2ebf13, _0x4131ed);
                },
                'ywYvR': _0x2df724(1408),
                'xrBHm': _0x2df724(1409),
                'XguGf': function (_0x173b2e, _0xd978c3) {
                    return _0x2c8337['OkjZw'](_0x173b2e, _0xd978c3);
                },
                'IESGj': _0x2c8337['PXIdm'],
                'DUoul': _0x2c8337[_0x2df724(1410)],
                'NoreM': _0x2df724(1411),
                'UubwP': _0x2c8337[_0x2df724(1412)],
                'cogAx': _0x2c8337[_0x2df724(1413)],
                'wuYHa': function (_0x1f287a, _0xa9872b) {
                    const _0x205fc1 = _0x2df724;
                    return _0x2c8337[_0x205fc1(1414)](_0x1f287a, _0xa9872b);
                },
                'JMlnJ': function (_0x211d05, _0x5e5144) {
                    return _0x211d05(_0x5e5144);
                },
                'JkSNo': function (_0x1c2c2e, _0x2eb1c9) {
                    return _0x2c8337['OkjZw'](_0x1c2c2e, _0x2eb1c9);
                },
                'whKGI': _0x2c8337[_0x2df724(1415)],
                'HpnGQ': _0x2c8337['TMpCF'],
                'PwLxF': _0x2c8337['IUJDB'],
                'uIJeS': _0x2c8337['FYSZc'],
                'RYfOF': _0x2c8337[_0x2df724(1416)],
                'fbhlW': _0x2c8337[_0x2df724(839)],
                'CXlRa': _0x2c8337[_0x2df724(1417)],
                'GwNqU': function (_0x34bbe1, _0x5d7e68) {
                    const _0x20f353 = _0x2df724;
                    return _0x2c8337[_0x20f353(1418)](_0x34bbe1, _0x5d7e68);
                },
                'svHVK': _0x2c8337[_0x2df724(1419)],
                'nFKVW': _0x2c8337[_0x2df724(1420)],
                'EIEqH': _0x2c8337[_0x2df724(1294)]
            };
        _0x2c8337[_0x2df724(1418)](beforeEach, function () {
            const _0xb4d343 = _0x2df724;
            this[_0xb4d343(808)] = {
                'on': sinon[_0xb4d343(732)](),
                'webContents': { 'on': sinon['stub']() }
            }, sinon[_0xb4d343(732)](electron['app'], 'on')[_0xb4d343(741)](_0xb4d343(580))[_0xb4d343(806)](), sinon[_0xb4d343(732)](Windows, _0x2c8337['evqxI'])[_0xb4d343(734)](this[_0xb4d343(808)]), sinon[_0xb4d343(732)](ServerE2E['prototype'], _0x2c8337['wsAEa']), sinon[_0xb4d343(743)](Events, _0x2c8337[_0xb4d343(733)]), sinon['stub'](electron[_0xb4d343(1421)], 'on');
        }), _0x2c8337[_0x2df724(1422)](it, _0x2c8337[_0x2df724(1423)], () => {
            const _0x3744ea = _0x2df724;
            return sinon[_0x3744ea(732)](interactiveMode, _0x2c8337[_0x3744ea(830)]), cypress[_0x3744ea(534)]([
                _0x3744ea(1424),
                _0x2c8337['NjIwH'],
                _0x2c8337[_0x3744ea(1425)]
            ])[_0x3744ea(775)](() => {
                const _0x183a11 = _0x3744ea;
                _0x57453a[_0x183a11(1426)](expect, interactiveMode[_0x183a11(580)])['to']['be']['calledWithMatch']({
                    'updating': !![],
                    'config': {
                        'port': 2121,
                        'pageLoadTimeout': 1000
                    }
                });
            });
        }), _0x2c8337['eJUwv'](it, _0x2df724(1427), () => {
            const _0x26abc1 = _0x2df724;
            return cypress[_0x26abc1(534)]([
                _0x57453a[_0x26abc1(1428)],
                _0x57453a['dWVZH']
            ])[_0x26abc1(775)](() => {
                const _0x56cc1f = _0x26abc1;
                _0x57453a[_0x56cc1f(1426)](expect, Events[_0x56cc1f(534)])['to']['be'][_0x56cc1f(750)]({
                    'config': {
                        'pageLoadTimeout': 1000,
                        'port': 2121
                    }
                });
            });
        }), it(_0x2c8337[_0x2df724(1429)], function () {
            const _0x405fcb = _0x2df724, _0x144b96 = { 'Vieul': _0x57453a['whKGI'] }, _0x3f734f = sinon['stub'](ServerE2E[_0x405fcb(738)], _0x405fcb(644))['resolves']([]);
            return process[_0x405fcb(700)]['CYPRESS_FILE_SERVER_FOLDER'] = _0x57453a[_0x405fcb(1430)], process[_0x405fcb(700)][_0x405fcb(1110)] = _0x405fcb(1431), process[_0x405fcb(700)]['CYPRESS_port'] = _0x57453a[_0x405fcb(1432)], process['env']['CYPRESS_responseTimeout'] = _0x57453a[_0x405fcb(1433)], process[_0x405fcb(700)][_0x405fcb(1434)] = _0x57453a[_0x405fcb(1435)], user['set']({
                'name': _0x57453a[_0x405fcb(1436)],
                'authToken': _0x57453a['fbhlW']
            })[_0x405fcb(775)](() => {
                const _0x4321f7 = _0x405fcb;
                return settings[_0x4321f7(1017)](this[_0x4321f7(721)]);
            })[_0x405fcb(775)](_0xb8b693 => {
                const _0x54f9cd = _0x405fcb;
                return _0xb8b693[_0x54f9cd(1437)] = _0x144b96[_0x54f9cd(1438)], settings[_0x54f9cd(997)](this[_0x54f9cd(721)], _0xb8b693);
            })['then'](() => {
                const _0x45c395 = _0x405fcb;
                return cypress[_0x45c395(534)]([
                    _0x45c395(691),
                    _0x57453a[_0x45c395(1439)],
                    _0x57453a[_0x45c395(1440)],
                    _0x57453a[_0x45c395(1441)],
                    _0x57453a['vcooK']
                ]);
            })[_0x405fcb(775)](() => {
                const _0x5a81f4 = _0x405fcb, _0x5be16 = Events[_0x5a81f4(534)][_0x5a81f4(906)][_0x5a81f4(907)][5867 + -1 * 6987 + 1120 * 1];
                return Events[_0x5a81f4(1442)](_0x5be16, {}, {}, -9635 + 12 * 490 + -7 * -554, _0x57453a[_0x5a81f4(1443)], this[_0x5a81f4(721)]);
            })[_0x405fcb(775)](() => {
                const _0x24bcfb = _0x405fcb, _0x252ae9 = openProject[_0x24bcfb(1147)]()[_0x24bcfb(1444)];
                expect(_0x252ae9['port'])['to']['eq'](1 * 5386 + 322 * -11 + 277), _0x57453a[_0x24bcfb(1426)](expect, _0x252ae9['pageLoadTimeout'])['to']['eq'](-2655 * -2 + 21 * 346 + -11576), _0x57453a[_0x24bcfb(1445)](expect, _0x252ae9[_0x24bcfb(1446)])['to']['eq'](![]), _0x57453a[_0x24bcfb(1445)](expect, _0x252ae9[_0x24bcfb(700)])['to'][_0x24bcfb(1447)]({ 'baz': _0x57453a['ggyML'] }), _0x57453a[_0x24bcfb(1445)](expect, _0x3f734f)['to']['be'][_0x24bcfb(938)];
                const _0x48daec = _0x3f734f[_0x24bcfb(754)](1 * 8102 + -9646 + 4 * 386)[_0x24bcfb(907)][4937 * 1 + -1 * 499 + -4438];
                expect(_0x48daec[_0x24bcfb(1408)])['to']['eq'](path[_0x24bcfb(526)](this[_0x24bcfb(721)], _0x57453a['juMGa'])), _0x57453a[_0x24bcfb(1445)](expect, _0x48daec[_0x24bcfb(1448)])['to']['eq'](15 * 317 + -25 * 39 + -2780), _0x57453a[_0x24bcfb(1445)](expect, _0x48daec[_0x24bcfb(1409)])['to']['eq'](541 * 9 + -855 + -1893), _0x57453a[_0x24bcfb(1449)](expect, _0x48daec['baseUrl'])['to']['eq'](_0x57453a[_0x24bcfb(1450)]), _0x57453a[_0x24bcfb(1451)](expect, _0x48daec[_0x24bcfb(1452)])['to']['be'][_0x24bcfb(1160)], expect(_0x48daec[_0x24bcfb(1411)])['to']['eq'](-2308 + -1728 + 9591), _0x57453a['MwFkl'](expect, _0x48daec[_0x24bcfb(700)][_0x24bcfb(609)])['to']['eq'](_0x57453a[_0x24bcfb(1453)]), _0x57453a[_0x24bcfb(1454)](expect, _0x48daec[_0x24bcfb(700)])[_0x24bcfb(937)]['to']['have']['property'](_0x57453a['ywYvR']), expect(_0x48daec['env'])[_0x24bcfb(937)]['to'][_0x24bcfb(920)]['property'](_0x57453a['xrBHm']), _0x57453a['XguGf'](expect, _0x48daec[_0x24bcfb(700)])[_0x24bcfb(937)]['to'][_0x24bcfb(920)][_0x24bcfb(988)](_0x57453a[_0x24bcfb(1455)]), _0x57453a[_0x24bcfb(1456)](expect, _0x48daec[_0x24bcfb(700)])[_0x24bcfb(937)]['to'][_0x24bcfb(920)][_0x24bcfb(988)](_0x57453a[_0x24bcfb(1457)]), expect(_0x48daec[_0x24bcfb(700)])['not']['to'][_0x24bcfb(920)]['property'](_0x57453a[_0x24bcfb(1458)]), _0x57453a[_0x24bcfb(1456)](expect, _0x48daec[_0x24bcfb(1165)][_0x24bcfb(1408)])['to']['deep']['eq']({
                    'value': _0x57453a[_0x24bcfb(1430)],
                    'from': _0x57453a[_0x24bcfb(1459)]
                }), expect(_0x48daec['resolved']['pageLoadTimeout'])['to'][_0x24bcfb(1163)]['eq']({
                    'value': 1000,
                    'from': _0x57453a[_0x24bcfb(1460)]
                }), _0x57453a[_0x24bcfb(1461)](expect, _0x48daec[_0x24bcfb(1165)][_0x24bcfb(1409)])['to'][_0x24bcfb(1163)]['eq']({
                    'value': 2121,
                    'from': _0x57453a[_0x24bcfb(1460)]
                }), _0x57453a[_0x24bcfb(1461)](expect, _0x48daec[_0x24bcfb(1165)][_0x24bcfb(1437)])['to'][_0x24bcfb(1163)]['eq']({
                    'value': _0x57453a[_0x24bcfb(1450)],
                    'from': _0x57453a[_0x24bcfb(1459)]
                }), expect(_0x48daec[_0x24bcfb(1165)]['watchForFileChanges'])['to'][_0x24bcfb(1163)]['eq']({
                    'value': ![],
                    'from': _0x57453a['UubwP']
                }), _0x57453a['JMlnJ'](expect, _0x48daec['resolved'][_0x24bcfb(1411)])['to'][_0x24bcfb(1163)]['eq']({
                    'value': 5555,
                    'from': _0x57453a[_0x24bcfb(1459)]
                }), _0x57453a[_0x24bcfb(1462)](expect, _0x48daec[_0x24bcfb(1165)][_0x24bcfb(700)][_0x24bcfb(609)])['to']['deep']['eq']({
                    'value': _0x57453a[_0x24bcfb(1453)],
                    'from': 'cli'
                });
            });
        }), it(_0x2c8337[_0x2df724(1463)], function () {
            const _0x3413f = _0x2df724, _0x121f41 = new EE(), _0x212537 = { 'sender': { 'send': sinon['stub']() } }, _0x26bb75 = { 'message': _0x2c8337['rqQeo'] };
            return sinon[_0x3413f(732)](ServerE2E[_0x3413f(738)], _0x3413f(644))[_0x3413f(734)]([
                -1407 + 317 * 2 + 2894,
                _0x26bb75
            ]), cypress['start']([
                _0x2c8337['NjIwH'],
                _0x2c8337['dyDNW'],
                _0x3413f(698),
                _0x2c8337[_0x3413f(1404)],
                '--env=baz=baz'
            ])[_0x3413f(775)](() => {
                const _0x1d7855 = _0x3413f, _0x4c54e9 = Events[_0x1d7855(534)]['firstCall'][_0x1d7855(907)][-1229 * 6 + -4223 * -2 + -1072];
                return Events[_0x1d7855(1442)](_0x4c54e9, _0x121f41, _0x212537, -7326 + 2 * -1234 + 47 * 211, _0x57453a[_0x1d7855(1464)]), Events[_0x1d7855(1442)](_0x4c54e9, _0x121f41, _0x212537, 2405 + 3595 + -5877, _0x57453a[_0x1d7855(1443)], this[_0x1d7855(721)]);
            })[_0x3413f(775)](() => {
                const _0x275580 = _0x3413f;
                _0x57453a['GwNqU'](expect, _0x212537[_0x275580(1465)][_0x275580(1466)][_0x275580(741)](_0x57453a['svHVK'])[_0x275580(906)][_0x275580(907)][-2962 * -1 + -58 * -4 + 31 * -103][_0x275580(1467)])['to'][_0x275580(1447)](_0x26bb75);
            });
        }), _0x2c8337[_0x2df724(776)](describe, '--config-file', () => {
            const _0x35dd7b = _0x2df724, _0x5d11bc = {
                    'QjCaH': _0x2c8337[_0x35dd7b(1468)],
                    'NZhSb': function (_0x5b712c, _0x321522) {
                        const _0x386d76 = _0x35dd7b;
                        return _0x2c8337[_0x386d76(1469)](_0x5b712c, _0x321522);
                    },
                    'jTaTd': 'readJsonAsync',
                    'GFcww': _0x35dd7b(868),
                    'SXyVK': function (_0x1214d5, _0x414209, _0x5b91b6) {
                        const _0x3564ac = _0x35dd7b;
                        return _0x2c8337[_0x3564ac(1384)](_0x1214d5, _0x414209, _0x5b91b6);
                    },
                    'ZznrF': _0x2c8337[_0x35dd7b(1470)],
                    'znIyw': function (_0x27b895, _0x45380c, _0x6d3eac) {
                        const _0x281959 = _0x35dd7b;
                        return _0x2c8337[_0x281959(1471)](_0x27b895, _0x45380c, _0x6d3eac);
                    },
                    'DGkRD': function (_0x4accd7, _0x1bba00, _0x23ac5a) {
                        const _0x416c03 = _0x35dd7b;
                        return _0x2c8337[_0x416c03(1471)](_0x4accd7, _0x1bba00, _0x23ac5a);
                    },
                    'PjqUp': function (_0x2b4366, _0x5b5a9f, _0x4538da) {
                        return _0x2b4366(_0x5b5a9f, _0x4538da);
                    },
                    'ClQuz': _0x2c8337[_0x35dd7b(1472)]
                };
            _0x2c8337[_0x35dd7b(1473)](beforeEach, function () {
                const _0x17bed0 = _0x35dd7b;
                this['filename'] = _0x57453a[_0x17bed0(1474)], this[_0x17bed0(644)] = sinon[_0x17bed0(732)](ServerE2E['prototype'], _0x57453a[_0x17bed0(1475)])['resolves']([]);
            }), _0x2c8337['OSQcS'](it, _0x2c8337[_0x35dd7b(1476)], function () {
                const _0x3da4d9 = _0x35dd7b, _0x350cb3 = {
                        'fSaFH': function (_0x4ba6af, _0x4b79ea) {
                            return _0x5d11bc['NZhSb'](_0x4ba6af, _0x4b79ea);
                        },
                        'MOPtZ': _0x3da4d9(868)
                    };
                return sinon[_0x3da4d9(732)](fs, _0x5d11bc['jTaTd']), fs[_0x3da4d9(1477)]['withArgs'](path[_0x3da4d9(526)](this[_0x3da4d9(973)], this[_0x3da4d9(1270)]))[_0x3da4d9(734)]({
                    'env': { 'foo': _0x5d11bc[_0x3da4d9(1478)] },
                    'port': 2020
                }), fs[_0x3da4d9(1477)][_0x3da4d9(1479)](), cypress[_0x3da4d9(534)]([_0x3da4d9(1480) + this['filename']])['then'](() => {
                    const _0x18d35c = _0x3da4d9, _0x139aca = Events[_0x18d35c(534)][_0x18d35c(906)][_0x18d35c(907)][16 * 237 + -1083 * 3 + -543];
                    return Events[_0x18d35c(1442)](_0x139aca, {}, {}, -183 * -2 + 1368 + -3 * 537, _0x5d11bc['QjCaH'], this['pristinePath']);
                })[_0x3da4d9(775)](() => {
                    const _0x142c03 = _0x3da4d9;
                    _0x350cb3[_0x142c03(1481)](expect, this[_0x142c03(644)])['to']['be']['called'];
                    const _0x298eb1 = this[_0x142c03(644)][_0x142c03(754)](-1 * 8528 + 3 * -2953 + 1 * 17387)['args'][-4790 + 1195 + 3595];
                    _0x350cb3[_0x142c03(1481)](expect, _0x298eb1[_0x142c03(700)][_0x142c03(592)])['to'][_0x142c03(1482)](_0x350cb3[_0x142c03(1483)]), _0x350cb3[_0x142c03(1481)](expect, _0x298eb1['port'])['to'][_0x142c03(1482)](283 * -29 + 2104 * -2 + 14435);
                });
            }), _0x2c8337[_0x35dd7b(1484)](it, _0x2c8337['AYCuD'], function () {
                const _0x1ad96a = _0x35dd7b;
                return cypress[_0x1ad96a(534)]([_0x1ad96a(1480) + this[_0x1ad96a(1270)]])['then'](() => {
                    const _0x1367ef = _0x1ad96a;
                    _0x5d11bc[_0x1367ef(1485)](debug, _0x5d11bc[_0x1367ef(1486)], this['filename']);
                    const _0xa5d007 = Events[_0x1367ef(534)][_0x1367ef(906)][_0x1367ef(907)][3764 + 3463 * -2 + 3162];
                    return _0x5d11bc['znIyw'](debug, _0x1367ef(1487), Events[_0x1367ef(534)][_0x1367ef(906)]['args']), Events[_0x1367ef(1442)](_0xa5d007, {}, {}, -1033 * -1 + 1 * -3563 + -1 * -2653, _0x5d11bc[_0x1367ef(1488)], this[_0x1367ef(973)]);
                })[_0x1ad96a(775)](() => {
                    const _0x418841 = _0x1ad96a, _0x58f3fa = {
                            'EYoSw': function (_0x35537d, _0x41d4c4, _0x14b7e7) {
                                const _0x359957 = _0x2686;
                                return _0x5d11bc[_0x359957(1489)](_0x35537d, _0x41d4c4, _0x14b7e7);
                            }
                        };
                    return _0x5d11bc[_0x418841(1490)](expect, this[_0x418841(644)], _0x5d11bc['ClQuz'])['to']['be'][_0x418841(938)], fs[_0x418841(1477)](path[_0x418841(526)](this[_0x418841(973)], this[_0x418841(1270)]))[_0x418841(775)](_0x2a8968 => {
                        const _0x2abfd5 = _0x418841;
                        _0x58f3fa[_0x2abfd5(1491)](expect, _0x2a8968, _0x2abfd5(1492))['to'][_0x2abfd5(1163)][_0x2abfd5(1482)]({});
                    });
                });
            });
        });
    }), _0x2c8337['tBLpL'](context, _0x36f279(1493), () => {
        const _0x4ff8a3 = _0x36f279, _0x92ca5 = {
                'AAQjM': _0x4ff8a3(580),
                'eMrhv': _0x2c8337[_0x4ff8a3(740)],
                'JKPpo': function (_0x1c493d, _0x399598) {
                    const _0x573819 = _0x4ff8a3;
                    return _0x2c8337[_0x573819(1494)](_0x1c493d, _0x399598);
                },
                'gSaYc': _0x2c8337['xfRPT'],
                'TaGkG': _0x4ff8a3(1495)
            };
        _0x2c8337['YyEVi'](beforeEach, () => {
            const _0x2b5180 = _0x4ff8a3;
            errors[_0x2b5180(538)]['restore'](), sinon[_0x2b5180(732)](electron[_0x2b5180(804)], 'on')[_0x2b5180(741)](_0x92ca5[_0x2b5180(1496)])[_0x2b5180(806)](), sinon[_0x2b5180(732)](interactiveMode, _0x92ca5[_0x2b5180(1496)])['resolves'](), sinon[_0x2b5180(743)](errors, _0x92ca5[_0x2b5180(1497)]);
        }), it(_0x4ff8a3(1498), () => {
            return cypress['start']()['then'](() => {
                const _0x5f56b6 = _0x2686;
                _0x92ca5['JKPpo'](expect, errors[_0x5f56b6(538)])['to']['be'][_0x5f56b6(753)](_0x5f56b6(1499)), _0x92ca5[_0x5f56b6(1500)](expect, console[_0x5f56b6(524)])['to']['be']['calledWithMatch'](_0x92ca5[_0x5f56b6(1501)]), _0x92ca5[_0x5f56b6(1500)](expect, console[_0x5f56b6(524)])['to']['be'][_0x5f56b6(750)](_0x92ca5['TaGkG']);
            });
        }), _0x2c8337[_0x4ff8a3(776)](it, _0x2c8337[_0x4ff8a3(1502)], () => {
            const _0x181635 = _0x4ff8a3;
            return cypress['start'](['--cwd=/foo/bar'])[_0x181635(775)](() => {
                const _0x43040a = _0x181635;
                _0x92ca5[_0x43040a(1500)](expect, errors['warning'])['not']['to']['be'][_0x43040a(938)];
            });
        });
    }), _0x2c8337[_0x36f279(1503)](context, _0x2c8337['KlPbQ'], () => {
        const _0x24519b = _0x36f279, _0x3d4d45 = { 'fUOnd': _0x2c8337['LtKQI'] };
        _0x2c8337['YyEVi'](beforeEach, () => {
            const _0x22f8e8 = _0x2686;
            sinon[_0x22f8e8(732)](electron[_0x22f8e8(804)], 'on')[_0x22f8e8(741)](_0x3d4d45[_0x22f8e8(1504)])[_0x22f8e8(806)](), sinon['stub'](interactiveMode, _0x3d4d45['fUOnd'])[_0x22f8e8(734)]();
        }), _0x2c8337[_0x24519b(776)](it, _0x2c8337[_0x24519b(1505)], () => {
            const _0x2b196b = _0x24519b, _0x1e81b2 = {
                    'TlWvh': function (_0xe03fb, _0x19d3f2) {
                        return _0xe03fb(_0x19d3f2);
                    }
                };
            return cypress[_0x2b196b(534)]()[_0x2b196b(775)](() => {
                const _0x5db2f9 = _0x2b196b;
                _0x1e81b2[_0x5db2f9(1506)](expect, interactiveMode[_0x5db2f9(580)])['to']['be'][_0x5db2f9(904)];
            });
        });
    });
});