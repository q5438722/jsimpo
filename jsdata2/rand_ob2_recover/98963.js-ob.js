const {expect} = require(_0x3cfe5c(432)), path = require('path'), fs = require('fs'), os = require('os'), overrideEnv = require('process-utils/override-env'), overrideCwd = require(_0x3cfe5c(433)), proxyquire = require(_0x3cfe5c(434)), resolveLocalServerless = require(_0x3cfe5c(435)), commandsSchema = require(_0x3cfe5c(436)), runServerless = require(_0x3cfe5c(437)), fixtures = require('../../../../fixtures/programmatic'), versions = {
        'serverless': require(_0x3cfe5c(438))[_0x3cfe5c(439)],
        '@serverless/dashboard-plugin': require('@serverless/dashboard-plugin/package')['version']
    }, generatePayload = proxyquire(_0x3cfe5c(440), { '@serverless/utils/get-notifications-mode': () => 'on' });
describe(_0x3cfe5c(441), () => {
    const _0x471346 = _0x3cfe5c;
    let _0x46b7e1;
    before(() => {
        const _0x495d1f = _0x24d0;
        EvalError['$serverlessCommandStartTime'] = process[_0x495d1f(442)](), _0x46b7e1 = process[_0x495d1f(443)]['isTTY'], process[_0x495d1f(443)][_0x495d1f(444)] = !![];
    }), after(() => {
        const _0x49b425 = _0x24d0;
        process[_0x49b425(443)]['isTTY'] = _0x46b7e1;
    }), beforeEach(() => {
        const _0x5d5b96 = _0x24d0;
        resolveLocalServerless[_0x5d5b96(445)]();
    }), it(_0x471346(446), async () => {
        const _0x49bc5a = _0x471346, {servicePath: _0x1a54d7} = await fixtures[_0x49bc5a(447)](_0x49bc5a(448), {
                'configExt': {
                    'provider': { 'runtime': _0x49bc5a(449) },
                    'functions': { 'withContainer': { 'image': _0x49bc5a(450) } },
                    'resources': {
                        'Resources': {
                            'ExtraLogGroup': {
                                'Type': _0x49bc5a(451),
                                'Properties': { 'LogGroupName': _0x49bc5a(452) }
                            },
                            'AnotherExtraLogGroup': {
                                'Type': _0x49bc5a(451),
                                'Properties': { 'LogGroupName': _0x49bc5a(453) }
                            },
                            'ExtraBucket': { 'Type': _0x49bc5a(454) },
                            'ExtraCustom': { 'Type': _0x49bc5a(455) }
                        },
                        'extensions': { 'FunctionLambdaFunction': { 'Properties': { 'Runtime': _0x49bc5a(449) } } }
                    }
                }
            });
        await fs[_0x49bc5a(456)]['writeFile'](path[_0x49bc5a(457)](_0x1a54d7, 'package.json'), JSON[_0x49bc5a(458)]({
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
        const {serverless: _0x57a905} = await runServerless({
                'cwd': _0x1a54d7,
                'command': _0x49bc5a(459)
            }), _0x268d82 = generatePayload({
                'command': _0x49bc5a(459),
                'options': {},
                'commandSchema': commandsSchema['get'](_0x49bc5a(459)),
                'serviceDir': _0x1a54d7,
                'configuration': _0x57a905[_0x49bc5a(460)]
            });
        expect(_0x268d82)['to']['have'][_0x49bc5a(461)](_0x49bc5a(462)), delete _0x268d82['frameworkLocalUserId'], expect(_0x268d82)['to'][_0x49bc5a(463)][_0x49bc5a(461)](_0x49bc5a(464)), delete _0x268d82[_0x49bc5a(464)], expect(_0x268d82)['to'][_0x49bc5a(463)]['property']('timestamp'), delete _0x268d82[_0x49bc5a(465)], expect(_0x268d82)['to'][_0x49bc5a(463)]['property'](_0x49bc5a(466)), delete _0x268d82[_0x49bc5a(466)], expect(_0x268d82)['to'][_0x49bc5a(463)][_0x49bc5a(461)](_0x49bc5a(467)), delete _0x268d82['timezone'], expect(_0x268d82)['to']['have']['property'](_0x49bc5a(468)), delete _0x268d82[_0x49bc5a(468)], expect(_0x268d82)['to'][_0x49bc5a(463)][_0x49bc5a(461)]('commandDurationMs'), delete _0x268d82[_0x49bc5a(469)], expect(_0x268d82)['to'][_0x49bc5a(470)][_0x49bc5a(471)]({
            'cliName': 'serverless',
            'isTtyTerminal': !![],
            'command': _0x49bc5a(459),
            'commandOptionNames': [],
            'isConfigValid': !![],
            'config': {
                'configValidationMode': _0x49bc5a(472),
                'provider': {
                    'name': 'aws',
                    'runtime': _0x49bc5a(449),
                    'stage': _0x49bc5a(473),
                    'region': _0x49bc5a(474)
                },
                'plugins': [],
                'functions': [
                    {
                        'runtime': _0x49bc5a(449),
                        'events': [
                            { 'type': 'httpApi' },
                            { 'type': _0x49bc5a(448) }
                        ]
                    },
                    {
                        'runtime': _0x49bc5a(449),
                        'events': [{ 'type': 'httpApi' }]
                    },
                    {
                        'runtime': _0x49bc5a(449),
                        'events': []
                    },
                    {
                        'runtime': _0x49bc5a(449),
                        'events': []
                    },
                    {
                        'runtime': '$containerimage',
                        'events': []
                    }
                ],
                'resources': {
                    'general': [
                        'AWS::Logs::LogGroup',
                        _0x49bc5a(454),
                        _0x49bc5a(475)
                    ]
                },
                'variableSources': []
            },
            'isAutoUpdateEnabled': ![],
            'isTabAutocompletionInstalled': ![],
            'notificationsMode': 'on',
            'npmDependencies': [
                'fooDep',
                _0x49bc5a(476),
                _0x49bc5a(477),
                'someDev',
                _0x49bc5a(478)
            ],
            'triggeredDeprecations': [],
            'installationType': 'global:other',
            'hasLocalCredentials': ![],
            'versions': versions
        });
    }), it(_0x471346(479), async () => {
        const _0x9a4313 = _0x471346, {serverless: _0x2e6029} = await runServerless({
                'fixture': _0x9a4313(480),
                'command': _0x9a4313(459)
            }), _0x27f606 = generatePayload({
                'command': _0x9a4313(459),
                'options': {},
                'commandSchema': commandsSchema['get'](_0x9a4313(459)),
                'serviceDir': _0x2e6029[_0x9a4313(481)],
                'configuration': _0x2e6029['configurationInput'],
                'serverless': _0x2e6029
            });
        expect(_0x27f606)['to'][_0x9a4313(463)][_0x9a4313(461)](_0x9a4313(462)), delete _0x27f606['frameworkLocalUserId'], expect(_0x27f606)['to'][_0x9a4313(463)][_0x9a4313(461)](_0x9a4313(464)), delete _0x27f606[_0x9a4313(464)], expect(_0x27f606)['to'][_0x9a4313(463)][_0x9a4313(461)](_0x9a4313(465)), delete _0x27f606['timestamp'], expect(_0x27f606)['to']['have'][_0x9a4313(461)](_0x9a4313(466)), delete _0x27f606['dashboard'], expect(_0x27f606)['to'][_0x9a4313(463)][_0x9a4313(461)]('timezone'), delete _0x27f606[_0x9a4313(467)], expect(_0x27f606)['to']['have'][_0x9a4313(461)](_0x9a4313(468)), delete _0x27f606['ciName'], expect(_0x27f606)['to'][_0x9a4313(463)]['property'](_0x9a4313(469)), delete _0x27f606[_0x9a4313(469)], expect(_0x27f606)['to']['deep'][_0x9a4313(471)]({
            'cliName': _0x9a4313(482),
            'isTtyTerminal': !![],
            'command': _0x9a4313(459),
            'commandOptionNames': [],
            'isConfigValid': ![],
            'config': {
                'configValidationMode': _0x9a4313(483),
                'provider': {
                    'name': _0x9a4313(480),
                    'runtime': _0x9a4313(484),
                    'stage': _0x9a4313(473),
                    'region': undefined
                },
                'plugins': ['./customProvider'],
                'functions': [
                    {
                        'runtime': 'foo',
                        'events': [{ 'type': 'someEvent' }]
                    },
                    {
                        'runtime': _0x9a4313(485),
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
            'installationType': _0x9a4313(486),
            'versions': versions
        });
    }), it('Should recognize local fallback', async () => {
        const _0x3377d1 = _0x471346, {
                serverless: _0xd14454,
                fixtureData: {servicePath: _0x546d84}
            } = await runServerless({
                'fixture': _0x3377d1(487),
                'command': 'print',
                'modulesCacheStub': {}
            }), _0x3120f1 = overrideCwd(_0x546d84, () => generatePayload({
                'command': 'print',
                'options': {},
                'commandSchema': commandsSchema[_0x3377d1(488)](_0x3377d1(459)),
                'serviceDir': _0xd14454['serviceDir'],
                'configuration': _0xd14454['configurationInput'],
                'serverless': _0xd14454
            }));
        expect(_0x3120f1)['to']['have'][_0x3377d1(461)](_0x3377d1(462)), delete _0x3120f1[_0x3377d1(462)], expect(_0x3120f1)['to']['have'][_0x3377d1(461)](_0x3377d1(464)), delete _0x3120f1[_0x3377d1(464)], expect(_0x3120f1)['to'][_0x3377d1(463)][_0x3377d1(461)](_0x3377d1(465)), delete _0x3120f1['timestamp'], expect(_0x3120f1)['to'][_0x3377d1(463)]['property']('dashboard'), delete _0x3120f1[_0x3377d1(466)], expect(_0x3120f1)['to'][_0x3377d1(463)]['property'](_0x3377d1(467)), delete _0x3120f1[_0x3377d1(467)], expect(_0x3120f1)['to'][_0x3377d1(463)][_0x3377d1(461)](_0x3377d1(468)), delete _0x3120f1['ciName'], expect(_0x3120f1)['to']['have'][_0x3377d1(461)](_0x3377d1(469)), delete _0x3120f1[_0x3377d1(469)], expect(_0x3120f1)['to'][_0x3377d1(470)]['equal']({
            'cliName': _0x3377d1(482),
            'isTtyTerminal': !![],
            'command': _0x3377d1(459),
            'commandOptionNames': [],
            'isConfigValid': null,
            'config': {
                'configValidationMode': 'error',
                'provider': {
                    'name': _0x3377d1(489),
                    'runtime': _0x3377d1(490),
                    'stage': _0x3377d1(473),
                    'region': _0x3377d1(474)
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
            'installationType': 'local:fallback',
            'hasLocalCredentials': ![],
            'versions': {
                'serverless': _0x3377d1(491),
                '@serverless/dashboard-plugin': _0x3377d1(492),
                '@serverless/enterprise-plugin': undefined
            }
        });
    }), it(_0x471346(493), async () => {
        const _0x5cb6c8 = _0x471346, _0x3a2d6e = generatePayload({
                'command': _0x5cb6c8(494),
                'options': {},
                'commandSchema': commandsSchema[_0x5cb6c8(488)]('config'),
                'serviceDir': process['cwd'](),
                'configuration': {
                    'service': _0x5cb6c8(484),
                    'provider': _0x5cb6c8(489)
                }
            });
        expect(_0x3a2d6e)['to']['have'][_0x5cb6c8(461)](_0x5cb6c8(462)), delete _0x3a2d6e[_0x5cb6c8(462)], expect(_0x3a2d6e)['to'][_0x5cb6c8(463)][_0x5cb6c8(461)](_0x5cb6c8(464)), delete _0x3a2d6e[_0x5cb6c8(464)], expect(_0x3a2d6e)['to'][_0x5cb6c8(463)][_0x5cb6c8(461)](_0x5cb6c8(465)), delete _0x3a2d6e['timestamp'], expect(_0x3a2d6e)['to']['have'][_0x5cb6c8(461)](_0x5cb6c8(466)), delete _0x3a2d6e[_0x5cb6c8(466)], expect(_0x3a2d6e)['to'][_0x5cb6c8(463)][_0x5cb6c8(461)](_0x5cb6c8(467)), delete _0x3a2d6e['timezone'], expect(_0x3a2d6e)['to'][_0x5cb6c8(463)][_0x5cb6c8(461)](_0x5cb6c8(468)), delete _0x3a2d6e[_0x5cb6c8(468)], expect(_0x3a2d6e)['to'][_0x5cb6c8(463)][_0x5cb6c8(461)](_0x5cb6c8(469)), delete _0x3a2d6e[_0x5cb6c8(469)], expect(_0x3a2d6e)['to'][_0x5cb6c8(470)][_0x5cb6c8(471)]({
            'cliName': 'serverless',
            'isTtyTerminal': !![],
            'command': _0x5cb6c8(494),
            'commandOptionNames': [],
            'isAutoUpdateEnabled': ![],
            'isTabAutocompletionInstalled': ![],
            'notificationsMode': 'on',
            'triggeredDeprecations': [],
            'installationType': _0x5cb6c8(486),
            'versions': versions
        });
    }), it(_0x471346(495), () => {
        const _0xbfadd5 = _0x471346, _0x814011 = generatePayload({
                'command': '',
                'options': {},
                'commandSchema': commandsSchema[_0xbfadd5(488)](''),
                'serviceDir': process[_0xbfadd5(496)](),
                'configuration': {
                    'service': _0xbfadd5(484),
                    'provider': _0xbfadd5(489)
                }
            });
        expect(_0x814011)['to'][_0xbfadd5(463)]['property']('frameworkLocalUserId'), delete _0x814011[_0xbfadd5(462)], expect(_0x814011)['to'][_0xbfadd5(463)][_0xbfadd5(461)](_0xbfadd5(464)), delete _0x814011[_0xbfadd5(464)], expect(_0x814011)['to'][_0xbfadd5(463)][_0xbfadd5(461)](_0xbfadd5(465)), delete _0x814011[_0xbfadd5(465)], expect(_0x814011)['to'][_0xbfadd5(463)]['property'](_0xbfadd5(466)), delete _0x814011[_0xbfadd5(466)], expect(_0x814011)['to'][_0xbfadd5(463)][_0xbfadd5(461)](_0xbfadd5(467)), delete _0x814011[_0xbfadd5(467)], expect(_0x814011)['to'][_0xbfadd5(463)]['property'](_0xbfadd5(468)), delete _0x814011['ciName'], expect(_0x814011)['to'][_0xbfadd5(463)][_0xbfadd5(461)]('commandDurationMs'), delete _0x814011[_0xbfadd5(469)], expect(_0x814011)['to']['deep']['equal']({
            'command': '',
            'commandOptionNames': [],
            'cliName': _0xbfadd5(482),
            'isTtyTerminal': !![],
            'isConfigValid': null,
            'config': {
                'configValidationMode': _0xbfadd5(483),
                'variableSources': [],
                'provider': {
                    'name': _0xbfadd5(489),
                    'runtime': _0xbfadd5(490),
                    'stage': _0xbfadd5(473),
                    'region': 'us-east-1'
                },
                'plugins': [],
                'functions': [],
                'resources': { 'general': [] }
            },
            'isAutoUpdateEnabled': ![],
            'isTabAutocompletionInstalled': ![],
            'triggeredDeprecations': [],
            'installationType': _0xbfadd5(486),
            'notificationsMode': 'on',
            'npmDependencies': [],
            'hasLocalCredentials': ![],
            'versions': versions
        });
    }), it('Should correctly resolve payload with missing service configuration', () => {
        const _0x206875 = _0x471346, _0x3495e1 = generatePayload({
                'command': _0x206875(497),
                'options': {},
                'commandSchema': commandsSchema['get'](_0x206875(497))
            });
        expect(_0x3495e1)['to'][_0x206875(463)]['property'](_0x206875(462)), delete _0x3495e1[_0x206875(462)], expect(_0x3495e1)['to']['have']['property']('firstLocalInstallationTimestamp'), delete _0x3495e1['firstLocalInstallationTimestamp'], expect(_0x3495e1)['to'][_0x206875(463)][_0x206875(461)](_0x206875(465)), delete _0x3495e1[_0x206875(465)], expect(_0x3495e1)['to'][_0x206875(463)][_0x206875(461)]('dashboard'), delete _0x3495e1[_0x206875(466)], expect(_0x3495e1)['to'][_0x206875(463)][_0x206875(461)](_0x206875(467)), delete _0x3495e1[_0x206875(467)], expect(_0x3495e1)['to'][_0x206875(463)][_0x206875(461)](_0x206875(468)), delete _0x3495e1[_0x206875(468)], expect(_0x3495e1)['to'][_0x206875(463)][_0x206875(461)](_0x206875(469)), delete _0x3495e1[_0x206875(469)], expect(_0x3495e1)['to'][_0x206875(470)][_0x206875(471)]({
            'cliName': _0x206875(482),
            'isTtyTerminal': !![],
            'command': _0x206875(497),
            'commandOptionNames': [],
            'isAutoUpdateEnabled': ![],
            'isTabAutocompletionInstalled': ![],
            'notificationsMode': 'on',
            'triggeredDeprecations': [],
            'installationType': _0x206875(486),
            'versions': versions
        });
    }), it(_0x471346(498), async () => {
        const _0x3f90e2 = _0x471346;
        await fs[_0x3f90e2(456)]['writeFile'](path['resolve'](os[_0x3f90e2(499)](), _0x3f90e2(500)), JSON['stringify']({
            'frameworkId': '123',
            'userId': _0x3f90e2(501),
            'meta': { 'created_at': 1616151998 }
        }));
        const _0x4da864 = generatePayload({
            'command': _0x3f90e2(494),
            'options': {},
            'commandSchema': commandsSchema[_0x3f90e2(488)](_0x3f90e2(494)),
            'serviceDir': process[_0x3f90e2(496)](),
            'configuration': {
                'service': _0x3f90e2(484),
                'provider': 'aws'
            }
        });
        expect(_0x4da864[_0x3f90e2(466)]['userId'])['to'][_0x3f90e2(471)](_0x3f90e2(501)), expect(_0x4da864[_0x3f90e2(462)])['to']['equal'](_0x3f90e2(502)), expect(_0x4da864[_0x3f90e2(464)])['to']['equal'](1616151998);
    }), it('Should not include userId from local config if SERVERLESS_ACCESS_KEY used', async () => {
        const _0x53d435 = _0x471346;
        await fs[_0x53d435(456)][_0x53d435(503)](path['resolve'](os[_0x53d435(499)](), '.serverlessrc'), JSON[_0x53d435(458)]({
            'frameworkId': '123',
            'userId': 'some-user-id'
        }));
        let _0x2cedd9;
        overrideEnv({ 'variables': { 'SERVERLESS_ACCESS_KEY': _0x53d435(504) } }, () => {
            const _0x20c505 = _0x53d435;
            _0x2cedd9 = generatePayload({
                'command': 'config',
                'options': {},
                'commandSchema': commandsSchema[_0x20c505(488)]('config'),
                'serviceDir': process[_0x20c505(496)](),
                'configuration': {
                    'service': _0x20c505(484),
                    'provider': _0x20c505(489)
                }
            });
        }), expect(_0x2cedd9[_0x53d435(466)][_0x53d435(505)])['to']['be']['null'], expect(_0x2cedd9['frameworkLocalUserId'])['to']['equal'](_0x53d435(502));
    }), it(_0x471346(506), () => {
        const _0x1436bf = _0x471346;
        let _0x122564;
        overrideEnv({ 'variables': { 'SERVERLESS_CI_CD': _0x1436bf(507) } }, () => {
            const _0x2ffa3b = _0x1436bf;
            _0x122564 = generatePayload({
                'command': _0x2ffa3b(494),
                'options': {},
                'commandSchema': commandsSchema['get'](_0x2ffa3b(494)),
                'serviceDir': process[_0x2ffa3b(496)](),
                'configuration': {
                    'service': _0x2ffa3b(484),
                    'provider': 'aws'
                }
            });
        }), expect(_0x122564['ciName'])['to']['equal']('Serverless CI/CD');
    }), it(_0x471346(508), () => {
        const _0x3ee294 = _0x471346;
        let _0xd919a;
        overrideEnv({ 'variables': { 'SEED_APP_NAME': _0x3ee294(509) } }, () => {
            const _0x42eab6 = _0x3ee294;
            _0xd919a = generatePayload({
                'command': 'config',
                'options': {},
                'commandSchema': commandsSchema[_0x42eab6(488)](_0x42eab6(494)),
                'serviceDir': process[_0x42eab6(496)](),
                'configuration': {
                    'service': 'foo',
                    'provider': _0x42eab6(489)
                }
            });
        }), expect(_0xd919a[_0x3ee294(468)])['to'][_0x3ee294(471)]('Seed');
    }), it(_0x471346(510), () => {
        const _0x16cdea = _0x471346, _0xa39a74 = generatePayload({
                'command': _0x16cdea(459),
                'options': {
                    'region': 'eu-west-1',
                    'format': _0x16cdea(511),
                    'path': 'provider.name'
                },
                'commandSchema': commandsSchema[_0x16cdea(488)](_0x16cdea(459)),
                'serviceDir': process[_0x16cdea(496)](),
                'configuration': {
                    'service': _0x16cdea(484),
                    'provider': _0x16cdea(489)
                }
            });
        expect(new Set(_0xa39a74[_0x16cdea(512)]))['to'][_0x16cdea(470)][_0x16cdea(471)](new Set([
            'region',
            _0x16cdea(513),
            _0x16cdea(514)
        ]));
    }), it('Should correctly resolve `constructs` property', () => {
        const _0x40a0ee = _0x471346, _0x209a0c = generatePayload({
                'command': _0x40a0ee(459),
                'commandSchema': commandsSchema['get'](_0x40a0ee(459)),
                'options': {},
                'serviceDir': process[_0x40a0ee(496)](),
                'configuration': {
                    'service': _0x40a0ee(484),
                    'provider': 'aws',
                    'constructs': {
                        'jobs': {
                            'type': _0x40a0ee(515),
                            'worker': { 'handler': _0x40a0ee(516) }
                        },
                        'another': {
                            'type': _0x40a0ee(515),
                            'worker': { 'handler': _0x40a0ee(517) }
                        }
                    },
                    'plugins': [_0x40a0ee(518)]
                }
            });
        expect(_0x209a0c['config'][_0x40a0ee(519)])['to'][_0x40a0ee(470)][_0x40a0ee(471)]([
            { 'type': _0x40a0ee(515) },
            { 'type': _0x40a0ee(515) }
        ]);
    }), it(_0x471346(520), () => {
        const _0x3eadb2 = _0x471346, _0x544a8b = generatePayload({
                'command': _0x3eadb2(459),
                'commandSchema': commandsSchema['get'](_0x3eadb2(459)),
                'options': {},
                'serviceDir': process[_0x3eadb2(496)](),
                'configuration': {
                    'service': _0x3eadb2(484),
                    'provider': 'aws',
                    'configValidationMode': 'off'
                }
            });
        expect(_0x544a8b[_0x3eadb2(494)][_0x3eadb2(521)])['to'][_0x3eadb2(471)](_0x3eadb2(522));
    }), it(_0x471346(523), () => {
        const _0xb11b0f = _0x471346;
        let _0x5ddf66;
        overrideEnv({
            'variables': {
                'AWS_ACCESS_KEY_ID': _0xb11b0f(524),
                'AWS_SECRET_ACCESS_KEY': _0xb11b0f(525)
            }
        }, () => {
            const _0x294e41 = _0xb11b0f;
            _0x5ddf66 = generatePayload({
                'command': 'print',
                'options': {},
                'commandSchema': commandsSchema[_0x294e41(488)](_0x294e41(459)),
                'serviceDir': process[_0x294e41(496)](),
                'configuration': {
                    'service': 'foo',
                    'provider': _0x294e41(489)
                }
            });
        }), expect(_0x5ddf66['hasLocalCredentials'])['to']['equal'](!![]);
    }), it(_0x471346(526), () => {
        const _0x3bcd40 = _0x471346;
        let _0x33c747;
        overrideEnv({
            'variables': {
                'AWS_ACCESS_KEY_ID': _0x3bcd40(524),
                'AWS_SECRET_ACCESS_KEY': _0x3bcd40(525)
            }
        }, () => {
            const _0x3b8d8f = _0x3bcd40;
            _0x33c747 = generatePayload({
                'command': _0x3b8d8f(459),
                'options': {},
                'commandSchema': commandsSchema[_0x3b8d8f(488)](_0x3b8d8f(459)),
                'serviceDir': process['cwd'](),
                'configuration': {
                    'service': 'foo',
                    'provider': _0x3b8d8f(527)
                }
            });
        }), expect(_0x33c747[_0x3bcd40(528)])['to'][_0x3bcd40(471)](![]);
    }), it(_0x471346(529), () => {
        const _0x5b70aa = _0x471346, _0x5a3da0 = generatePayload({
                'command': _0x5b70aa(459),
                'options': {},
                'commandSchema': commandsSchema[_0x5b70aa(488)](_0x5b70aa(459)),
                'serviceDir': process[_0x5b70aa(496)](),
                'configuration': {
                    'service': _0x5b70aa(484),
                    'provider': _0x5b70aa(489)
                },
                'commandUsage': [{
                        'name': _0x5b70aa(530),
                        'history': [
                            {
                                'key': _0x5b70aa(531),
                                'value': 'answer',
                                'timestamp': 1626220800000
                            },
                            {
                                'key': 'otherQuestion',
                                'value': _0x5b70aa(532),
                                'timestamp': 1626220800000
                            }
                        ]
                    }]
            });
        expect(_0x5a3da0[_0x5b70aa(533)])['to'][_0x5b70aa(470)][_0x5b70aa(471)]([{
                'name': _0x5b70aa(530),
                'history': [
                    {
                        'key': _0x5b70aa(531),
                        'value': 'answer',
                        'timestamp': 1626220800000
                    },
                    {
                        'key': _0x5b70aa(534),
                        'value': _0x5b70aa(532),
                        'timestamp': 1626220800000
                    }
                ]
            }]);
    }), it(_0x471346(535), () => {
        const _0x2b8405 = _0x471346, _0x155003 = generatePayload({
                'command': _0x2b8405(459),
                'options': {},
                'commandSchema': commandsSchema[_0x2b8405(488)](_0x2b8405(459)),
                'serviceDir': process['cwd'](),
                'configuration': {
                    'service': _0x2b8405(484),
                    'provider': _0x2b8405(489)
                },
                'commandUsage': [],
                'variableSources': new Set([
                    'ssm',
                    _0x2b8405(536)
                ])
            });
        expect(_0x155003[_0x2b8405(494)][_0x2b8405(537)])['to']['deep'][_0x2b8405(471)]([
            _0x2b8405(538),
            _0x2b8405(536)
        ]);
    });
});