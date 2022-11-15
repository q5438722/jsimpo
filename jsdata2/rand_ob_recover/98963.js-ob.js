const {expect} = require(_0x2e5f06(236)), path = require(_0x2e5f06(237)), fs = require('fs'), os = require('os'), overrideEnv = require('process-utils/override-env'), overrideCwd = require('process-utils/override-cwd'), proxyquire = require('proxyquire'), resolveLocalServerless = require(_0x2e5f06(238)), commandsSchema = require('../../../../../lib/cli/commands-schema'), runServerless = require(_0x2e5f06(239)), fixtures = require(_0x2e5f06(240)), versions = {
        'serverless': require(_0x2e5f06(241))[_0x2e5f06(242)],
        '@serverless/dashboard-plugin': require(_0x2e5f06(243))[_0x2e5f06(242)]
    }, generatePayload = proxyquire('../../../../../lib/utils/telemetry/generatePayload', { '@serverless/utils/get-notifications-mode': () => 'on' });
function _0x4530(_0x3e525d, _0x44e373) {
    return _0x4530 = function (_0x4f15db, _0xf3fc8) {
        _0x4f15db = _0x4f15db - (24 * 383 + -1793 + -7174);
        let _0x165cf2 = _0x3522[_0x4f15db];
        return _0x165cf2;
    }, _0x4530(_0x3e525d, _0x44e373);
}
describe(_0x2e5f06(244), () => {
    const _0x73c000 = _0x2e5f06, _0x2cee23 = {
            'wdjsN': _0x73c000(245),
            'WDcHX': _0x73c000(246),
            'FdATi': 'package.json',
            'cqWxn': function (_0xa761f7, _0x2e242d) {
                return _0xa761f7(_0x2e242d);
            },
            'tSguD': 'print',
            'cpdSH': function (_0x4b5eb7, _0x1a24ae) {
                return _0x4b5eb7(_0x1a24ae);
            },
            'JKRXK': _0x73c000(247),
            'KzZsL': _0x73c000(248),
            'xQulp': _0x73c000(249),
            'YQwVM': _0x73c000(250),
            'itMfy': 'commandDurationMs',
            'kvSZO': _0x73c000(251),
            'hZvng': _0x73c000(252),
            'yGYGI': _0x73c000(253),
            'YkNyq': _0x73c000(254),
            'DCKeR': _0x73c000(255),
            'axMdk': _0x73c000(256),
            'cwcPb': _0x73c000(257),
            'pvvSK': _0x73c000(258),
            'zhqiP': _0x73c000(259),
            'faetI': _0x73c000(260),
            'YXXSP': _0x73c000(261),
            'SxYKP': 'customProvider',
            'SWjue': function (_0x1f7b3e, _0xa6f443) {
                return _0x1f7b3e(_0xa6f443);
            },
            'tkZfe': _0x73c000(262),
            'hQpNW': function (_0x186493, _0x2f7f76) {
                return _0x186493(_0x2f7f76);
            },
            'vmruy': _0x73c000(263),
            'vbRYB': _0x73c000(264),
            'Rvqms': 'bar',
            'npCbg': 'global:other',
            'RYfnb': function (_0x195ac7, _0x2ab7b5) {
                return _0x195ac7(_0x2ab7b5);
            },
            'lgiSt': 'locallyInstalledServerless',
            'rHLmp': function (_0x3a5524, _0x44cd8a) {
                return _0x3a5524(_0x44cd8a);
            },
            'jqvtN': 'timezone',
            'sAedQ': function (_0x46fca4, _0xc7a00f) {
                return _0x46fca4(_0xc7a00f);
            },
            'Moink': function (_0x286018, _0x457541) {
                return _0x286018(_0x457541);
            },
            'LcgVm': function (_0x3c4ef2, _0x4b775b) {
                return _0x3c4ef2(_0x4b775b);
            },
            'XeLVs': _0x73c000(265),
            'XWpCb': 'nodejs12.x',
            'GBDGe': _0x73c000(266),
            'VUcWG': _0x73c000(267),
            'xVCCc': _0x73c000(268),
            'EVYyB': function (_0x29f1b2, _0x5a80ae) {
                return _0x29f1b2(_0x5a80ae);
            },
            'tklxb': function (_0x23baa0, _0x5eca2b) {
                return _0x23baa0(_0x5eca2b);
            },
            'Ghjks': function (_0x13674f, _0x542c19) {
                return _0x13674f(_0x542c19);
            },
            'SDfJh': function (_0x43dd71, _0x47c142) {
                return _0x43dd71(_0x47c142);
            },
            'EPlrk': 'plugin list',
            'Jxtib': function (_0x113568, _0x362527) {
                return _0x113568(_0x362527);
            },
            'WrYtA': function (_0x12c57e, _0x3e9d2d) {
                return _0x12c57e(_0x3e9d2d);
            },
            'XeYYB': function (_0x27819e, _0x22a909) {
                return _0x27819e(_0x22a909);
            },
            'NyOma': function (_0x28815d, _0x420939) {
                return _0x28815d(_0x420939);
            },
            'hJXhH': _0x73c000(269),
            'uEUVU': _0x73c000(270),
            'BwxFG': _0x73c000(271),
            'TdseT': function (_0x25d285, _0x2d31bc, _0x28b93c) {
                return _0x25d285(_0x2d31bc, _0x28b93c);
            },
            'bvsYj': _0x73c000(272),
            'vAhDl': function (_0x4a435b, _0x3cf42b, _0x2cff91) {
                return _0x4a435b(_0x3cf42b, _0x2cff91);
            },
            'acFEb': _0x73c000(273),
            'iHCsj': _0x73c000(274),
            'QRQSF': function (_0x4414ec, _0x3d4b5a) {
                return _0x4414ec(_0x3d4b5a);
            },
            'Mfdrp': _0x73c000(275),
            'VZlZS': _0x73c000(276),
            'qwMIY': _0x73c000(277),
            'xytuu': function (_0x357543, _0x4c5a4a) {
                return _0x357543(_0x4c5a4a);
            },
            'nsNBP': _0x73c000(278),
            'EpKdn': 'queue',
            'uzrtZ': 'serverless-lift',
            'IaAdE': 'off',
            'pQPut': function (_0x382f7e, _0x372076, _0x386dd0) {
                return _0x382f7e(_0x372076, _0x386dd0);
            },
            'CMPcl': _0x73c000(279),
            'EGKKm': _0x73c000(280),
            'eZzPP': _0x73c000(281),
            'nXQUy': _0x73c000(282),
            'gYDHV': _0x73c000(283),
            'Jtxcs': _0x73c000(284),
            'RiFAC': _0x73c000(285),
            'rhdbf': _0x73c000(286),
            'seyZj': _0x73c000(287),
            'CFPUE': _0x73c000(288),
            'puVMZ': function (_0x14fc14, _0x2b5029) {
                return _0x14fc14(_0x2b5029);
            },
            'HZwRs': function (_0x536a16, _0x175d90) {
                return _0x536a16(_0x175d90);
            },
            'rqvmw': _0x73c000(289),
            'zwiRU': _0x73c000(290),
            'ixOkF': _0x73c000(291),
            'SosNR': _0x73c000(292),
            'aCDjf': _0x73c000(293),
            'ssHZq': _0x73c000(294),
            'DIodb': 'Should not include userId from local config if SERVERLESS_ACCESS_KEY used',
            'sqBPD': _0x73c000(295),
            'lzzTW': function (_0x20b70e, _0x5f4a90, _0x59cac5) {
                return _0x20b70e(_0x5f4a90, _0x59cac5);
            },
            'TwWIL': _0x73c000(296),
            'niRys': function (_0x37318d, _0x5ed793, _0x383b8f) {
                return _0x37318d(_0x5ed793, _0x383b8f);
            },
            'dvgJM': _0x73c000(297),
            'ndkus': function (_0x116fa5, _0x117ee3, _0x39652e) {
                return _0x116fa5(_0x117ee3, _0x39652e);
            },
            'vywmt': function (_0x6cbfa3, _0x35649a, _0x2a1ff2) {
                return _0x6cbfa3(_0x35649a, _0x2a1ff2);
            },
            'Hzgvi': _0x73c000(298),
            'UjaCM': function (_0x2e17e9, _0xdfd0d7, _0x67f788) {
                return _0x2e17e9(_0xdfd0d7, _0x67f788);
            },
            'RNbnW': _0x73c000(299),
            'AyBRu': function (_0x34f8a1, _0x33b85a, _0x302c60) {
                return _0x34f8a1(_0x33b85a, _0x302c60);
            },
            'sXwOH': _0x73c000(300),
            'POgHr': 'Should correctly resolve `variableSources` property'
        };
    let _0x3f2e82;
    _0x2cee23[_0x73c000(301)](before, () => {
        const _0x126ae2 = _0x73c000;
        EvalError[_0x126ae2(302)] = process[_0x126ae2(303)](), _0x3f2e82 = process['stdin'][_0x126ae2(304)], process[_0x126ae2(305)]['isTTY'] = !![];
    }), _0x2cee23[_0x73c000(306)](after, () => {
        const _0x4c0b63 = _0x73c000;
        process[_0x4c0b63(305)]['isTTY'] = _0x3f2e82;
    }), beforeEach(() => {
        resolveLocalServerless['clear']();
    }), _0x2cee23[_0x73c000(307)](it, _0x2cee23['rqvmw'], async () => {
        const _0x25382d = _0x73c000, {servicePath: _0x12299a} = await fixtures[_0x25382d(308)]('httpApi', {
                'configExt': {
                    'provider': { 'runtime': _0x25382d(253) },
                    'functions': { 'withContainer': { 'image': _0x25382d(309) } },
                    'resources': {
                        'Resources': {
                            'ExtraLogGroup': {
                                'Type': _0x25382d(310),
                                'Properties': { 'LogGroupName': _0x2cee23[_0x25382d(311)] }
                            },
                            'AnotherExtraLogGroup': {
                                'Type': _0x25382d(310),
                                'Properties': { 'LogGroupName': _0x25382d(312) }
                            },
                            'ExtraBucket': { 'Type': _0x25382d(258) },
                            'ExtraCustom': { 'Type': _0x2cee23[_0x25382d(313)] }
                        },
                        'extensions': { 'FunctionLambdaFunction': { 'Properties': { 'Runtime': _0x25382d(253) } } }
                    }
                }
            });
        await fs[_0x25382d(314)][_0x25382d(315)](path[_0x25382d(316)](_0x12299a, _0x2cee23['FdATi']), JSON[_0x25382d(317)]({
            'dependencies': {
                'fooDep': '1',
                'barDep': '2'
            },
            'optionalDependencies': {
                'fooOpt': '1',
                'fooDep': '1'
            },
            'devDependencies': {
                'someDev': '1',
                'otherDev': '1'
            }
        }));
        const {serverless: _0x317623} = await runServerless({
                'cwd': _0x12299a,
                'command': _0x25382d(318)
            }), _0x1f744b = _0x2cee23[_0x25382d(319)](generatePayload, {
                'command': _0x2cee23[_0x25382d(320)],
                'options': {},
                'commandSchema': commandsSchema[_0x25382d(321)](_0x2cee23[_0x25382d(320)]),
                'serviceDir': _0x12299a,
                'configuration': _0x317623['configurationInput']
            });
        _0x2cee23['cpdSH'](expect, _0x1f744b)['to'][_0x25382d(322)][_0x25382d(323)](_0x2cee23['JKRXK']), delete _0x1f744b[_0x25382d(247)], _0x2cee23[_0x25382d(324)](expect, _0x1f744b)['to'][_0x25382d(322)]['property'](_0x25382d(262)), delete _0x1f744b[_0x25382d(262)], expect(_0x1f744b)['to']['have'][_0x25382d(323)](_0x2cee23[_0x25382d(325)]), delete _0x1f744b[_0x25382d(248)], _0x2cee23[_0x25382d(324)](expect, _0x1f744b)['to']['have'][_0x25382d(323)](_0x2cee23[_0x25382d(326)]), delete _0x1f744b['dashboard'], _0x2cee23[_0x25382d(324)](expect, _0x1f744b)['to'][_0x25382d(322)][_0x25382d(323)](_0x25382d(327)), delete _0x1f744b[_0x25382d(327)], _0x2cee23[_0x25382d(324)](expect, _0x1f744b)['to'][_0x25382d(322)][_0x25382d(323)](_0x2cee23[_0x25382d(328)]), delete _0x1f744b[_0x25382d(250)], expect(_0x1f744b)['to']['have']['property'](_0x2cee23['itMfy']), delete _0x1f744b[_0x25382d(329)], _0x2cee23[_0x25382d(324)](expect, _0x1f744b)['to'][_0x25382d(330)][_0x25382d(331)]({
            'cliName': _0x2cee23[_0x25382d(332)],
            'isTtyTerminal': !![],
            'command': 'print',
            'commandOptionNames': [],
            'isConfigValid': !![],
            'config': {
                'configValidationMode': _0x2cee23['hZvng'],
                'provider': {
                    'name': _0x25382d(265),
                    'runtime': _0x2cee23[_0x25382d(333)],
                    'stage': _0x2cee23[_0x25382d(334)],
                    'region': _0x2cee23['DCKeR']
                },
                'plugins': [],
                'functions': [
                    {
                        'runtime': _0x2cee23[_0x25382d(333)],
                        'events': [
                            { 'type': _0x2cee23[_0x25382d(335)] },
                            { 'type': _0x2cee23['axMdk'] }
                        ]
                    },
                    {
                        'runtime': _0x2cee23[_0x25382d(333)],
                        'events': [{ 'type': _0x25382d(256) }]
                    },
                    {
                        'runtime': _0x2cee23[_0x25382d(333)],
                        'events': []
                    },
                    {
                        'runtime': _0x2cee23[_0x25382d(333)],
                        'events': []
                    },
                    {
                        'runtime': _0x2cee23['cwcPb'],
                        'events': []
                    }
                ],
                'resources': {
                    'general': [
                        _0x25382d(310),
                        _0x2cee23[_0x25382d(336)],
                        _0x2cee23[_0x25382d(337)]
                    ]
                },
                'variableSources': []
            },
            'isAutoUpdateEnabled': ![],
            'isTabAutocompletionInstalled': ![],
            'notificationsMode': 'on',
            'npmDependencies': [
                _0x25382d(338),
                _0x2cee23[_0x25382d(339)],
                _0x2cee23[_0x25382d(340)],
                _0x25382d(341),
                'otherDev'
            ],
            'triggeredDeprecations': [],
            'installationType': 'global:other',
            'hasLocalCredentials': ![],
            'versions': versions
        });
    }), it(_0x2cee23['zwiRU'], async () => {
        const _0x82416a = _0x73c000, {serverless: _0x21201d} = await _0x2cee23[_0x82416a(324)](runServerless, {
                'fixture': _0x2cee23[_0x82416a(342)],
                'command': 'print'
            }), _0x1a1d6f = _0x2cee23[_0x82416a(324)](generatePayload, {
                'command': _0x2cee23['tSguD'],
                'options': {},
                'commandSchema': commandsSchema[_0x82416a(321)](_0x2cee23[_0x82416a(320)]),
                'serviceDir': _0x21201d[_0x82416a(343)],
                'configuration': _0x21201d['configurationInput'],
                'serverless': _0x21201d
            });
        _0x2cee23[_0x82416a(324)](expect, _0x1a1d6f)['to'][_0x82416a(322)][_0x82416a(323)](_0x2cee23['JKRXK']), delete _0x1a1d6f['frameworkLocalUserId'], _0x2cee23['SWjue'](expect, _0x1a1d6f)['to'][_0x82416a(322)][_0x82416a(323)](_0x2cee23['tkZfe']), delete _0x1a1d6f['firstLocalInstallationTimestamp'], _0x2cee23[_0x82416a(344)](expect, _0x1a1d6f)['to'][_0x82416a(322)]['property'](_0x2cee23[_0x82416a(325)]), delete _0x1a1d6f[_0x82416a(248)], _0x2cee23[_0x82416a(344)](expect, _0x1a1d6f)['to'][_0x82416a(322)][_0x82416a(323)](_0x2cee23[_0x82416a(326)]), delete _0x1a1d6f[_0x82416a(249)], _0x2cee23[_0x82416a(344)](expect, _0x1a1d6f)['to'][_0x82416a(322)][_0x82416a(323)](_0x82416a(327)), delete _0x1a1d6f[_0x82416a(327)], _0x2cee23[_0x82416a(344)](expect, _0x1a1d6f)['to']['have'][_0x82416a(323)](_0x2cee23[_0x82416a(328)]), delete _0x1a1d6f['ciName'], _0x2cee23[_0x82416a(344)](expect, _0x1a1d6f)['to'][_0x82416a(322)][_0x82416a(323)](_0x2cee23['itMfy']), delete _0x1a1d6f[_0x82416a(329)], expect(_0x1a1d6f)['to'][_0x82416a(330)]['equal']({
            'cliName': _0x82416a(251),
            'isTtyTerminal': !![],
            'command': _0x2cee23['tSguD'],
            'commandOptionNames': [],
            'isConfigValid': ![],
            'config': {
                'configValidationMode': _0x2cee23['vmruy'],
                'provider': {
                    'name': _0x82416a(345),
                    'runtime': _0x2cee23['vbRYB'],
                    'stage': _0x2cee23[_0x82416a(334)],
                    'region': undefined
                },
                'plugins': [_0x82416a(346)],
                'functions': [
                    {
                        'runtime': _0x2cee23[_0x82416a(347)],
                        'events': [{ 'type': 'someEvent' }]
                    },
                    {
                        'runtime': _0x2cee23[_0x82416a(348)],
                        'events': []
                    }
                ],
                'resources': undefined,
                'variableSources': []
            },
            'isAutoUpdateEnabled': ![],
            'isTabAutocompletionInstalled': ![],
            'notificationsMode': 'on',
            'npmDependencies': [],
            'triggeredDeprecations': [],
            'hasLocalCredentials': ![],
            'installationType': _0x2cee23['npCbg'],
            'versions': versions
        });
    }), _0x2cee23[_0x73c000(307)](it, _0x2cee23[_0x73c000(349)], async () => {
        const _0x16be19 = _0x73c000, {
                serverless: _0x555b73,
                fixtureData: {servicePath: _0x548f58}
            } = await _0x2cee23[_0x16be19(350)](runServerless, {
                'fixture': _0x2cee23['lgiSt'],
                'command': _0x2cee23[_0x16be19(320)],
                'modulesCacheStub': {}
            }), _0x2ac284 = overrideCwd(_0x548f58, () => generatePayload({
                'command': _0x16be19(318),
                'options': {},
                'commandSchema': commandsSchema[_0x16be19(321)](_0x16be19(318)),
                'serviceDir': _0x555b73[_0x16be19(343)],
                'configuration': _0x555b73[_0x16be19(351)],
                'serverless': _0x555b73
            }));
        _0x2cee23[_0x16be19(350)](expect, _0x2ac284)['to'][_0x16be19(322)][_0x16be19(323)](_0x2cee23[_0x16be19(352)]), delete _0x2ac284['frameworkLocalUserId'], expect(_0x2ac284)['to'][_0x16be19(322)][_0x16be19(323)](_0x2cee23[_0x16be19(353)]), delete _0x2ac284[_0x16be19(262)], _0x2cee23[_0x16be19(350)](expect, _0x2ac284)['to'][_0x16be19(322)][_0x16be19(323)](_0x2cee23[_0x16be19(325)]), delete _0x2ac284[_0x16be19(248)], _0x2cee23[_0x16be19(350)](expect, _0x2ac284)['to']['have'][_0x16be19(323)](_0x16be19(249)), delete _0x2ac284['dashboard'], _0x2cee23['rHLmp'](expect, _0x2ac284)['to'][_0x16be19(322)][_0x16be19(323)](_0x2cee23[_0x16be19(354)]), delete _0x2ac284[_0x16be19(327)], _0x2cee23['sAedQ'](expect, _0x2ac284)['to'][_0x16be19(322)][_0x16be19(323)](_0x2cee23[_0x16be19(328)]), delete _0x2ac284[_0x16be19(250)], _0x2cee23[_0x16be19(355)](expect, _0x2ac284)['to'][_0x16be19(322)][_0x16be19(323)](_0x2cee23[_0x16be19(356)]), delete _0x2ac284[_0x16be19(329)], _0x2cee23[_0x16be19(357)](expect, _0x2ac284)['to'][_0x16be19(330)][_0x16be19(331)]({
            'cliName': _0x16be19(251),
            'isTtyTerminal': !![],
            'command': _0x2cee23['tSguD'],
            'commandOptionNames': [],
            'isConfigValid': null,
            'config': {
                'configValidationMode': _0x2cee23[_0x16be19(358)],
                'provider': {
                    'name': _0x2cee23['XeLVs'],
                    'runtime': _0x2cee23[_0x16be19(359)],
                    'stage': _0x16be19(254),
                    'region': _0x2cee23[_0x16be19(360)]
                },
                'plugins': [],
                'functions': [],
                'resources': { 'general': [] },
                'variableSources': []
            },
            'isAutoUpdateEnabled': ![],
            'isTabAutocompletionInstalled': ![],
            'notificationsMode': 'on',
            'npmDependencies': [],
            'triggeredDeprecations': [],
            'installationType': _0x2cee23['GBDGe'],
            'hasLocalCredentials': ![],
            'versions': {
                'serverless': _0x2cee23['VUcWG'],
                '@serverless/dashboard-plugin': _0x16be19(361),
                '@serverless/enterprise-plugin': undefined
            }
        });
    }), it(_0x2cee23[_0x73c000(362)], async () => {
        const _0x4de198 = _0x73c000, _0x823e97 = generatePayload({
                'command': _0x2cee23[_0x4de198(363)],
                'options': {},
                'commandSchema': commandsSchema[_0x4de198(321)](_0x2cee23[_0x4de198(363)]),
                'serviceDir': process[_0x4de198(364)](),
                'configuration': {
                    'service': _0x2cee23[_0x4de198(347)],
                    'provider': _0x4de198(265)
                }
            });
        expect(_0x823e97)['to'][_0x4de198(322)][_0x4de198(323)](_0x2cee23[_0x4de198(352)]), delete _0x823e97['frameworkLocalUserId'], _0x2cee23[_0x4de198(357)](expect, _0x823e97)['to'][_0x4de198(322)][_0x4de198(323)](_0x4de198(262)), delete _0x823e97[_0x4de198(262)], _0x2cee23[_0x4de198(357)](expect, _0x823e97)['to'][_0x4de198(322)][_0x4de198(323)](_0x2cee23['KzZsL']), delete _0x823e97[_0x4de198(248)], _0x2cee23[_0x4de198(357)](expect, _0x823e97)['to']['have'][_0x4de198(323)](_0x2cee23[_0x4de198(326)]), delete _0x823e97[_0x4de198(249)], _0x2cee23[_0x4de198(357)](expect, _0x823e97)['to']['have'][_0x4de198(323)](_0x2cee23[_0x4de198(354)]), delete _0x823e97[_0x4de198(327)], _0x2cee23[_0x4de198(357)](expect, _0x823e97)['to'][_0x4de198(322)][_0x4de198(323)](_0x4de198(250)), delete _0x823e97[_0x4de198(250)], _0x2cee23['EVYyB'](expect, _0x823e97)['to']['have'][_0x4de198(323)](_0x2cee23['itMfy']), delete _0x823e97['commandDurationMs'], expect(_0x823e97)['to'][_0x4de198(330)]['equal']({
            'cliName': _0x4de198(251),
            'isTtyTerminal': !![],
            'command': _0x4de198(268),
            'commandOptionNames': [],
            'isAutoUpdateEnabled': ![],
            'isTabAutocompletionInstalled': ![],
            'notificationsMode': 'on',
            'triggeredDeprecations': [],
            'installationType': _0x2cee23[_0x4de198(365)],
            'versions': versions
        });
    }), _0x2cee23[_0x73c000(307)](it, _0x2cee23['aCDjf'], () => {
        const _0x18cdb7 = _0x73c000, _0x15b004 = _0x2cee23[_0x18cdb7(366)](generatePayload, {
                'command': '',
                'options': {},
                'commandSchema': commandsSchema[_0x18cdb7(321)](''),
                'serviceDir': process['cwd'](),
                'configuration': {
                    'service': _0x2cee23[_0x18cdb7(347)],
                    'provider': _0x2cee23['XeLVs']
                }
            });
        _0x2cee23['tklxb'](expect, _0x15b004)['to'][_0x18cdb7(322)][_0x18cdb7(323)](_0x2cee23['JKRXK']), delete _0x15b004['frameworkLocalUserId'], _0x2cee23[_0x18cdb7(367)](expect, _0x15b004)['to'][_0x18cdb7(322)]['property'](_0x2cee23[_0x18cdb7(353)]), delete _0x15b004['firstLocalInstallationTimestamp'], _0x2cee23[_0x18cdb7(367)](expect, _0x15b004)['to'][_0x18cdb7(322)][_0x18cdb7(323)](_0x2cee23['KzZsL']), delete _0x15b004[_0x18cdb7(248)], _0x2cee23['SDfJh'](expect, _0x15b004)['to'][_0x18cdb7(322)][_0x18cdb7(323)](_0x2cee23[_0x18cdb7(326)]), delete _0x15b004[_0x18cdb7(249)], expect(_0x15b004)['to']['have'][_0x18cdb7(323)](_0x2cee23[_0x18cdb7(354)]), delete _0x15b004['timezone'], _0x2cee23[_0x18cdb7(368)](expect, _0x15b004)['to'][_0x18cdb7(322)][_0x18cdb7(323)]('ciName'), delete _0x15b004[_0x18cdb7(250)], _0x2cee23['SDfJh'](expect, _0x15b004)['to'][_0x18cdb7(322)][_0x18cdb7(323)](_0x2cee23['itMfy']), delete _0x15b004['commandDurationMs'], _0x2cee23[_0x18cdb7(368)](expect, _0x15b004)['to'][_0x18cdb7(330)][_0x18cdb7(331)]({
            'command': '',
            'commandOptionNames': [],
            'cliName': _0x2cee23['kvSZO'],
            'isTtyTerminal': !![],
            'isConfigValid': null,
            'config': {
                'configValidationMode': _0x2cee23[_0x18cdb7(369)],
                'variableSources': [],
                'provider': {
                    'name': _0x2cee23[_0x18cdb7(370)],
                    'runtime': _0x2cee23[_0x18cdb7(359)],
                    'stage': _0x2cee23[_0x18cdb7(334)],
                    'region': _0x2cee23[_0x18cdb7(360)]
                },
                'plugins': [],
                'functions': [],
                'resources': { 'general': [] }
            },
            'isAutoUpdateEnabled': ![],
            'isTabAutocompletionInstalled': ![],
            'triggeredDeprecations': [],
            'installationType': _0x2cee23[_0x18cdb7(365)],
            'notificationsMode': 'on',
            'npmDependencies': [],
            'hasLocalCredentials': ![],
            'versions': versions
        });
    }), _0x2cee23[_0x73c000(307)](it, _0x73c000(371), () => {
        const _0x492e28 = _0x73c000, _0x42b468 = generatePayload({
                'command': _0x492e28(372),
                'options': {},
                'commandSchema': commandsSchema['get'](_0x2cee23[_0x492e28(373)])
            });
        expect(_0x42b468)['to']['have'][_0x492e28(323)](_0x492e28(247)), delete _0x42b468['frameworkLocalUserId'], _0x2cee23[_0x492e28(374)](expect, _0x42b468)['to'][_0x492e28(322)]['property'](_0x492e28(262)), delete _0x42b468[_0x492e28(262)], _0x2cee23[_0x492e28(375)](expect, _0x42b468)['to']['have'][_0x492e28(323)](_0x492e28(248)), delete _0x42b468[_0x492e28(248)], expect(_0x42b468)['to'][_0x492e28(322)][_0x492e28(323)](_0x2cee23['xQulp']), delete _0x42b468[_0x492e28(249)], _0x2cee23['XeYYB'](expect, _0x42b468)['to']['have']['property'](_0x492e28(327)), delete _0x42b468['timezone'], _0x2cee23[_0x492e28(376)](expect, _0x42b468)['to']['have']['property'](_0x492e28(250)), delete _0x42b468['ciName'], _0x2cee23[_0x492e28(377)](expect, _0x42b468)['to'][_0x492e28(322)][_0x492e28(323)](_0x492e28(329)), delete _0x42b468['commandDurationMs'], expect(_0x42b468)['to']['deep'][_0x492e28(331)]({
            'cliName': _0x2cee23[_0x492e28(332)],
            'isTtyTerminal': !![],
            'command': _0x2cee23['EPlrk'],
            'commandOptionNames': [],
            'isAutoUpdateEnabled': ![],
            'isTabAutocompletionInstalled': ![],
            'notificationsMode': 'on',
            'triggeredDeprecations': [],
            'installationType': _0x2cee23[_0x492e28(365)],
            'versions': versions
        });
    }), _0x2cee23[_0x73c000(307)](it, _0x2cee23[_0x73c000(378)], async () => {
        const _0x49d84d = _0x73c000;
        await fs[_0x49d84d(314)]['writeFile'](path['resolve'](os['homedir'](), _0x2cee23['hJXhH']), JSON[_0x49d84d(317)]({
            'frameworkId': '123',
            'userId': 'some-user-id',
            'meta': { 'created_at': 1616151998 }
        }));
        const _0x3a46a0 = generatePayload({
            'command': 'config',
            'options': {},
            'commandSchema': commandsSchema[_0x49d84d(321)](_0x2cee23['xVCCc']),
            'serviceDir': process['cwd'](),
            'configuration': {
                'service': _0x2cee23[_0x49d84d(347)],
                'provider': _0x2cee23[_0x49d84d(370)]
            }
        });
        _0x2cee23['NyOma'](expect, _0x3a46a0[_0x49d84d(249)]['userId'])['to']['equal'](_0x49d84d(271)), _0x2cee23[_0x49d84d(377)](expect, _0x3a46a0['frameworkLocalUserId'])['to'][_0x49d84d(331)](_0x49d84d(270)), expect(_0x3a46a0[_0x49d84d(262)])['to'][_0x49d84d(331)](-3060734813 * 1 + -2426384402 + -296823 * -23931);
    }), _0x2cee23[_0x73c000(307)](it, _0x2cee23[_0x73c000(379)], async () => {
        const _0x286d28 = _0x73c000;
        await fs['promises'][_0x286d28(315)](path[_0x286d28(316)](os[_0x286d28(380)](), _0x2cee23['hJXhH']), JSON[_0x286d28(317)]({
            'frameworkId': _0x2cee23[_0x286d28(381)],
            'userId': _0x2cee23[_0x286d28(382)]
        }));
        let _0x3d524a;
        _0x2cee23[_0x286d28(383)](overrideEnv, { 'variables': { 'SERVERLESS_ACCESS_KEY': _0x2cee23[_0x286d28(384)] } }, () => {
            const _0x5990d8 = _0x286d28;
            _0x3d524a = _0x2cee23[_0x5990d8(377)](generatePayload, {
                'command': _0x5990d8(268),
                'options': {},
                'commandSchema': commandsSchema['get'](_0x2cee23[_0x5990d8(363)]),
                'serviceDir': process[_0x5990d8(364)](),
                'configuration': {
                    'service': _0x2cee23['vbRYB'],
                    'provider': _0x2cee23[_0x5990d8(370)]
                }
            });
        }), _0x2cee23['NyOma'](expect, _0x3d524a[_0x286d28(249)][_0x286d28(385)])['to']['be']['null'], expect(_0x3d524a['frameworkLocalUserId'])['to'][_0x286d28(331)](_0x286d28(270));
    }), it(_0x2cee23[_0x73c000(386)], () => {
        const _0x52b312 = _0x73c000;
        let _0x38bb89;
        _0x2cee23[_0x52b312(387)](overrideEnv, { 'variables': { 'SERVERLESS_CI_CD': _0x2cee23['acFEb'] } }, () => {
            const _0x117836 = _0x52b312;
            _0x38bb89 = _0x2cee23['NyOma'](generatePayload, {
                'command': _0x117836(268),
                'options': {},
                'commandSchema': commandsSchema[_0x117836(321)](_0x2cee23[_0x117836(363)]),
                'serviceDir': process[_0x117836(364)](),
                'configuration': {
                    'service': _0x2cee23[_0x117836(347)],
                    'provider': _0x2cee23[_0x117836(370)]
                }
            });
        }), expect(_0x38bb89[_0x52b312(250)])['to']['equal'](_0x52b312(388));
    }), _0x2cee23[_0x73c000(389)](it, _0x2cee23['TwWIL'], () => {
        const _0x251b92 = _0x73c000, _0x39b0bf = {
                'JvsTX': function (_0x456dad, _0x421b7c) {
                    const _0x196c93 = _0x4530;
                    return _0x2cee23[_0x196c93(377)](_0x456dad, _0x421b7c);
                },
                'RwWVW': _0x251b92(268),
                'CtPft': _0x251b92(264),
                'oRcor': _0x2cee23[_0x251b92(370)]
            };
        let _0x1781ab;
        _0x2cee23[_0x251b92(387)](overrideEnv, { 'variables': { 'SEED_APP_NAME': _0x2cee23[_0x251b92(390)] } }, () => {
            const _0x195860 = _0x251b92;
            _0x1781ab = _0x39b0bf[_0x195860(391)](generatePayload, {
                'command': _0x39b0bf['RwWVW'],
                'options': {},
                'commandSchema': commandsSchema['get'](_0x39b0bf[_0x195860(392)]),
                'serviceDir': process[_0x195860(364)](),
                'configuration': {
                    'service': _0x39b0bf[_0x195860(393)],
                    'provider': _0x39b0bf[_0x195860(394)]
                }
            });
        }), expect(_0x1781ab[_0x251b92(250)])['to'][_0x251b92(331)]('Seed');
    }), _0x2cee23[_0x73c000(395)](it, _0x2cee23[_0x73c000(396)], () => {
        const _0x82e736 = _0x73c000, _0x1bd240 = _0x2cee23[_0x82e736(397)](generatePayload, {
                'command': _0x2cee23['tSguD'],
                'options': {
                    'region': 'eu-west-1',
                    'format': 'json',
                    'path': _0x2cee23[_0x82e736(398)]
                },
                'commandSchema': commandsSchema[_0x82e736(321)](_0x2cee23['tSguD']),
                'serviceDir': process[_0x82e736(364)](),
                'configuration': {
                    'service': _0x82e736(264),
                    'provider': _0x2cee23[_0x82e736(370)]
                }
            });
        _0x2cee23[_0x82e736(397)](expect, new Set(_0x1bd240['commandOptionNames']))['to'][_0x82e736(330)][_0x82e736(331)](new Set([
            _0x2cee23[_0x82e736(399)],
            _0x2cee23[_0x82e736(400)],
            _0x82e736(237)
        ]));
    }), _0x2cee23[_0x73c000(401)](it, 'Should correctly resolve `constructs` property', () => {
        const _0x2d18b4 = _0x73c000, _0x564493 = _0x2cee23[_0x2d18b4(402)](generatePayload, {
                'command': _0x2cee23[_0x2d18b4(320)],
                'commandSchema': commandsSchema['get'](_0x2d18b4(318)),
                'options': {},
                'serviceDir': process[_0x2d18b4(364)](),
                'configuration': {
                    'service': _0x2cee23[_0x2d18b4(347)],
                    'provider': _0x2d18b4(265),
                    'constructs': {
                        'jobs': {
                            'type': _0x2d18b4(403),
                            'worker': { 'handler': _0x2cee23['nsNBP'] }
                        },
                        'another': {
                            'type': _0x2cee23[_0x2d18b4(404)],
                            'worker': { 'handler': _0x2d18b4(405) }
                        }
                    },
                    'plugins': [_0x2cee23['uzrtZ']]
                }
            });
        expect(_0x564493[_0x2d18b4(268)]['constructs'])['to'][_0x2d18b4(330)][_0x2d18b4(331)]([
            { 'type': _0x2cee23[_0x2d18b4(404)] },
            { 'type': _0x2cee23[_0x2d18b4(404)] }
        ]);
    }), it(_0x73c000(406), () => {
        const _0x2de069 = _0x73c000, _0x443983 = generatePayload({
                'command': _0x2cee23[_0x2de069(320)],
                'commandSchema': commandsSchema[_0x2de069(321)](_0x2cee23[_0x2de069(320)]),
                'options': {},
                'serviceDir': process[_0x2de069(364)](),
                'configuration': {
                    'service': _0x2cee23[_0x2de069(347)],
                    'provider': _0x2cee23['XeLVs'],
                    'configValidationMode': _0x2cee23[_0x2de069(407)]
                }
            });
        _0x2cee23['xytuu'](expect, _0x443983['config']['configValidationMode'])['to'][_0x2de069(331)](_0x2cee23[_0x2de069(407)]);
    }), _0x2cee23[_0x73c000(408)](it, _0x2cee23['Hzgvi'], () => {
        const _0x1397c0 = _0x73c000;
        let _0x4085a1;
        _0x2cee23[_0x1397c0(307)](overrideEnv, {
            'variables': {
                'AWS_ACCESS_KEY_ID': _0x2cee23[_0x1397c0(409)],
                'AWS_SECRET_ACCESS_KEY': _0x2cee23['EGKKm']
            }
        }, () => {
            const _0x1c3e2a = _0x1397c0;
            _0x4085a1 = generatePayload({
                'command': _0x2cee23[_0x1c3e2a(320)],
                'options': {},
                'commandSchema': commandsSchema['get'](_0x2cee23[_0x1c3e2a(320)]),
                'serviceDir': process[_0x1c3e2a(364)](),
                'configuration': {
                    'service': _0x2cee23['vbRYB'],
                    'provider': _0x2cee23[_0x1c3e2a(370)]
                }
            });
        }), _0x2cee23[_0x1397c0(402)](expect, _0x4085a1[_0x1397c0(410)])['to']['equal'](!![]);
    }), _0x2cee23[_0x73c000(411)](it, _0x2cee23[_0x73c000(412)], () => {
        const _0x3330fd = _0x73c000;
        let _0x212acd;
        overrideEnv({
            'variables': {
                'AWS_ACCESS_KEY_ID': _0x2cee23[_0x3330fd(409)],
                'AWS_SECRET_ACCESS_KEY': _0x2cee23[_0x3330fd(413)]
            }
        }, () => {
            const _0xe2c3f7 = _0x3330fd;
            _0x212acd = generatePayload({
                'command': _0x2cee23[_0xe2c3f7(320)],
                'options': {},
                'commandSchema': commandsSchema[_0xe2c3f7(321)](_0x2cee23[_0xe2c3f7(320)]),
                'serviceDir': process[_0xe2c3f7(364)](),
                'configuration': {
                    'service': _0x2cee23[_0xe2c3f7(347)],
                    'provider': _0x2cee23[_0xe2c3f7(414)]
                }
            });
        }), expect(_0x212acd['hasLocalCredentials'])['to'][_0x3330fd(331)](![]);
    }), _0x2cee23['AyBRu'](it, _0x2cee23[_0x73c000(415)], () => {
        const _0x25a663 = _0x73c000, _0x4d883d = _0x2cee23[_0x25a663(402)](generatePayload, {
                'command': _0x2cee23[_0x25a663(320)],
                'options': {},
                'commandSchema': commandsSchema[_0x25a663(321)](_0x2cee23[_0x25a663(320)]),
                'serviceDir': process['cwd'](),
                'configuration': {
                    'service': _0x2cee23[_0x25a663(347)],
                    'provider': _0x2cee23[_0x25a663(370)]
                },
                'commandUsage': [{
                        'name': _0x2cee23['nXQUy'],
                        'history': [
                            {
                                'key': _0x2cee23[_0x25a663(416)],
                                'value': _0x2cee23[_0x25a663(417)],
                                'timestamp': 1626220800000
                            },
                            {
                                'key': _0x2cee23[_0x25a663(418)],
                                'value': 'otherAnswer',
                                'timestamp': 1626220800000
                            }
                        ]
                    }]
            });
        _0x2cee23[_0x25a663(402)](expect, _0x4d883d[_0x25a663(419)])['to'][_0x25a663(330)][_0x25a663(331)]([{
                'name': _0x2cee23[_0x25a663(420)],
                'history': [
                    {
                        'key': _0x2cee23[_0x25a663(416)],
                        'value': _0x2cee23['Jtxcs'],
                        'timestamp': 1626220800000
                    },
                    {
                        'key': _0x25a663(285),
                        'value': _0x2cee23[_0x25a663(421)],
                        'timestamp': 1626220800000
                    }
                ]
            }]);
    }), _0x2cee23[_0x73c000(422)](it, _0x2cee23[_0x73c000(423)], () => {
        const _0x4c1e1e = _0x73c000, _0xa6b1da = generatePayload({
                'command': _0x2cee23['tSguD'],
                'options': {},
                'commandSchema': commandsSchema[_0x4c1e1e(321)](_0x4c1e1e(318)),
                'serviceDir': process[_0x4c1e1e(364)](),
                'configuration': {
                    'service': 'foo',
                    'provider': _0x2cee23[_0x4c1e1e(370)]
                },
                'commandUsage': [],
                'variableSources': new Set([
                    _0x2cee23['seyZj'],
                    _0x2cee23['CFPUE']
                ])
            });
        _0x2cee23[_0x4c1e1e(301)](expect, _0xa6b1da[_0x4c1e1e(268)][_0x4c1e1e(424)])['to']['deep'][_0x4c1e1e(331)]([
            _0x2cee23[_0x4c1e1e(425)],
            _0x2cee23[_0x4c1e1e(426)]
        ]);
    });
});