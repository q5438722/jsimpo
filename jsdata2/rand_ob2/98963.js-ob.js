'use strict';
const _0xc7f8 = [
    'customProvider',
    'serviceDir',
    'serverless',
    'warn',
    'foo',
    'bar',
    'global:other',
    'locallyInstalledServerless',
    'get',
    'aws',
    'nodejs12.x',
    '2.0.0-local',
    '4.0.0-local',
    'Should\x20resolve\x20service-agnostic\x20payload',
    'config',
    'Should\x20resolve\x20service-agnostic\x20payload\x20for\x20command\x20with\x20`serviceDependencyMode:\x20\x22optional\x22`',
    'cwd',
    'plugin\x20list',
    'Should\x20resolve\x20payload\x20with\x20predefined\x20local\x20config',
    'homedir',
    '.serverlessrc',
    'some-user-id',
    '123',
    'writeFile',
    'some-key',
    'userId',
    'Should\x20correctly\x20detect\x20Serverless\x20CI/CD',
    'true',
    'Should\x20correctly\x20detect\x20Seed\x20CI/CD',
    'some-app',
    'Should\x20correctly\x20resolve\x20`commandOptionNames`\x20property',
    'json',
    'commandOptionNames',
    'format',
    'path',
    'queue',
    'some.handler',
    'other.handler',
    'serverless-lift',
    'constructs',
    'Should\x20correctly\x20resolve\x20`configValidationMode`\x20property',
    'configValidationMode',
    'off',
    'Should\x20correctly\x20resolve\x20`hasLocalCredentials`\x20property\x20for\x20AWS\x20provider',
    'someaccesskey',
    'secretkey',
    'Should\x20correctly\x20resolve\x20`hasLocalCredentials`\x20property\x20for\x20non-AWS\x20provider',
    'other',
    'hasLocalCredentials',
    'Should\x20correctly\x20resolve\x20`commandUsage`\x20property',
    'firstStep',
    'firstQuestion',
    'otherAnswer',
    'commandUsage',
    'otherQuestion',
    'Should\x20correctly\x20resolve\x20`variableSources`\x20property',
    'opt',
    'variableSources',
    'ssm',
    '154348HKdmbB',
    '5071TCxpuF',
    '23YcEyUK',
    '4937KgGkUO',
    '369LERBxl',
    '426962RbxZTF',
    '1605nTsgHN',
    '943mmQoIJ',
    '1413263aXanXt',
    '627986DhuXIT',
    '4xnqZOu',
    'chai',
    'process-utils/override-cwd',
    'proxyquire',
    '../../../../../lib/cli/resolve-local-serverless-path',
    '../../../../../lib/cli/commands-schema',
    '../../../../utils/run-serverless',
    '../../../../../package',
    'version',
    '../../../../../lib/utils/telemetry/generatePayload',
    'test/unit/lib/utils/telemetry/generatePayload.test.js',
    'hrtime',
    'stdin',
    'isTTY',
    'clear',
    'Should\x20resolve\x20payload\x20for\x20AWS\x20service',
    'setup',
    'httpApi',
    'nodejs14.x',
    '000000000000.dkr.ecr.sa-east-1.amazonaws.com/test-lambda-docker@sha256:6bb600b4d6e1d7cf521097177dd0c4e9ea373edb91984a505333be8ac9455d38',
    'AWS::Logs::LogGroup',
    '/aws/lambda/extra-log',
    '/aws/lambda/extra-log-2',
    'AWS::S3::Bucket',
    'Custom::Matthieu',
    'promises',
    'resolve',
    'stringify',
    'print',
    'configurationInput',
    'property',
    'frameworkLocalUserId',
    'have',
    'firstLocalInstallationTimestamp',
    'timestamp',
    'dashboard',
    'timezone',
    'ciName',
    'commandDurationMs',
    'deep',
    'equal',
    'error',
    'dev',
    'us-east-1',
    'Custom',
    'barDep',
    'fooOpt',
    'otherDev',
    'Should\x20resolve\x20payload\x20for\x20custom\x20provider\x20service'
];
function _0x24d0(_0xbba3a4, _0x44bf08) {
    return _0x24d0 = function (_0xc7f868, _0x24d00b) {
        _0xc7f868 = _0xc7f868 - 0x1a5;
        let _0x588d6d = _0xc7f8[_0xc7f868];
        return _0x588d6d;
    }, _0x24d0(_0xbba3a4, _0x44bf08);
}
const _0x3cfe5c = _0x24d0;
(function (_0xf478fc, _0x3e5083) {
    const _0x427283 = _0x24d0;
    while (!![]) {
        try {
            const _0x706f16 = -parseInt(_0x427283(0x1a5)) + parseInt(_0x427283(0x1a6)) * parseInt(_0x427283(0x1a7)) + -parseInt(_0x427283(0x1a8)) * parseInt(_0x427283(0x1a9)) + parseInt(_0x427283(0x1aa)) + -parseInt(_0x427283(0x1ab)) * parseInt(_0x427283(0x1ac)) + parseInt(_0x427283(0x1ad)) + parseInt(_0x427283(0x1ae)) * parseInt(_0x427283(0x1af));
            if (_0x706f16 === _0x3e5083)
                break;
            else
                _0xf478fc['push'](_0xf478fc['shift']());
        } catch (_0x1cfe95) {
            _0xf478fc['push'](_0xf478fc['shift']());
        }
    }
}(_0xc7f8, 0xef0f2));
const {expect} = require(_0x3cfe5c(0x1b0)), path = require('path'), fs = require('fs'), os = require('os'), overrideEnv = require('process-utils/override-env'), overrideCwd = require(_0x3cfe5c(0x1b1)), proxyquire = require(_0x3cfe5c(0x1b2)), resolveLocalServerless = require(_0x3cfe5c(0x1b3)), commandsSchema = require(_0x3cfe5c(0x1b4)), runServerless = require(_0x3cfe5c(0x1b5)), fixtures = require('../../../../fixtures/programmatic'), versions = {
        'serverless': require(_0x3cfe5c(0x1b6))[_0x3cfe5c(0x1b7)],
        '@serverless/dashboard-plugin': require('@serverless/dashboard-plugin/package')['version']
    }, generatePayload = proxyquire(_0x3cfe5c(0x1b8), { '@serverless/utils/get-notifications-mode': () => 'on' });
describe(_0x3cfe5c(0x1b9), () => {
    const _0x471346 = _0x3cfe5c;
    let _0x46b7e1;
    before(() => {
        const _0x495d1f = _0x24d0;
        EvalError['$serverlessCommandStartTime'] = process[_0x495d1f(0x1ba)](), _0x46b7e1 = process[_0x495d1f(0x1bb)]['isTTY'], process[_0x495d1f(0x1bb)][_0x495d1f(0x1bc)] = !![];
    }), after(() => {
        const _0x49b425 = _0x24d0;
        process[_0x49b425(0x1bb)]['isTTY'] = _0x46b7e1;
    }), beforeEach(() => {
        const _0x5d5b96 = _0x24d0;
        resolveLocalServerless[_0x5d5b96(0x1bd)]();
    }), it(_0x471346(0x1be), async () => {
        const _0x49bc5a = _0x471346, {servicePath: _0x1a54d7} = await fixtures[_0x49bc5a(0x1bf)](_0x49bc5a(0x1c0), {
                'configExt': {
                    'provider': { 'runtime': _0x49bc5a(0x1c1) },
                    'functions': { 'withContainer': { 'image': _0x49bc5a(0x1c2) } },
                    'resources': {
                        'Resources': {
                            'ExtraLogGroup': {
                                'Type': _0x49bc5a(0x1c3),
                                'Properties': { 'LogGroupName': _0x49bc5a(0x1c4) }
                            },
                            'AnotherExtraLogGroup': {
                                'Type': _0x49bc5a(0x1c3),
                                'Properties': { 'LogGroupName': _0x49bc5a(0x1c5) }
                            },
                            'ExtraBucket': { 'Type': _0x49bc5a(0x1c6) },
                            'ExtraCustom': { 'Type': _0x49bc5a(0x1c7) }
                        },
                        'extensions': { 'FunctionLambdaFunction': { 'Properties': { 'Runtime': _0x49bc5a(0x1c1) } } }
                    }
                }
            });
        await fs[_0x49bc5a(0x1c8)]['writeFile'](path[_0x49bc5a(0x1c9)](_0x1a54d7, 'package.json'), JSON[_0x49bc5a(0x1ca)]({
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
                'command': _0x49bc5a(0x1cb)
            }), _0x268d82 = generatePayload({
                'command': _0x49bc5a(0x1cb),
                'options': {},
                'commandSchema': commandsSchema['get'](_0x49bc5a(0x1cb)),
                'serviceDir': _0x1a54d7,
                'configuration': _0x57a905[_0x49bc5a(0x1cc)]
            });
        expect(_0x268d82)['to']['have'][_0x49bc5a(0x1cd)](_0x49bc5a(0x1ce)), delete _0x268d82['frameworkLocalUserId'], expect(_0x268d82)['to'][_0x49bc5a(0x1cf)][_0x49bc5a(0x1cd)](_0x49bc5a(0x1d0)), delete _0x268d82[_0x49bc5a(0x1d0)], expect(_0x268d82)['to'][_0x49bc5a(0x1cf)]['property']('timestamp'), delete _0x268d82[_0x49bc5a(0x1d1)], expect(_0x268d82)['to'][_0x49bc5a(0x1cf)]['property'](_0x49bc5a(0x1d2)), delete _0x268d82[_0x49bc5a(0x1d2)], expect(_0x268d82)['to'][_0x49bc5a(0x1cf)][_0x49bc5a(0x1cd)](_0x49bc5a(0x1d3)), delete _0x268d82['timezone'], expect(_0x268d82)['to']['have']['property'](_0x49bc5a(0x1d4)), delete _0x268d82[_0x49bc5a(0x1d4)], expect(_0x268d82)['to'][_0x49bc5a(0x1cf)][_0x49bc5a(0x1cd)]('commandDurationMs'), delete _0x268d82[_0x49bc5a(0x1d5)], expect(_0x268d82)['to'][_0x49bc5a(0x1d6)][_0x49bc5a(0x1d7)]({
            'cliName': 'serverless',
            'isTtyTerminal': !![],
            'command': _0x49bc5a(0x1cb),
            'commandOptionNames': [],
            'isConfigValid': !![],
            'config': {
                'configValidationMode': _0x49bc5a(0x1d8),
                'provider': {
                    'name': 'aws',
                    'runtime': _0x49bc5a(0x1c1),
                    'stage': _0x49bc5a(0x1d9),
                    'region': _0x49bc5a(0x1da)
                },
                'plugins': [],
                'functions': [
                    {
                        'runtime': _0x49bc5a(0x1c1),
                        'events': [
                            { 'type': 'httpApi' },
                            { 'type': _0x49bc5a(0x1c0) }
                        ]
                    },
                    {
                        'runtime': _0x49bc5a(0x1c1),
                        'events': [{ 'type': 'httpApi' }]
                    },
                    {
                        'runtime': _0x49bc5a(0x1c1),
                        'events': []
                    },
                    {
                        'runtime': _0x49bc5a(0x1c1),
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
                        _0x49bc5a(0x1c6),
                        _0x49bc5a(0x1db)
                    ]
                },
                'variableSources': []
            },
            'isAutoUpdateEnabled': ![],
            'isTabAutocompletionInstalled': ![],
            'notificationsMode': 'on',
            'npmDependencies': [
                'fooDep',
                _0x49bc5a(0x1dc),
                _0x49bc5a(0x1dd),
                'someDev',
                _0x49bc5a(0x1de)
            ],
            'triggeredDeprecations': [],
            'installationType': 'global:other',
            'hasLocalCredentials': ![],
            'versions': versions
        });
    }), it(_0x471346(0x1df), async () => {
        const _0x9a4313 = _0x471346, {serverless: _0x2e6029} = await runServerless({
                'fixture': _0x9a4313(0x1e0),
                'command': _0x9a4313(0x1cb)
            }), _0x27f606 = generatePayload({
                'command': _0x9a4313(0x1cb),
                'options': {},
                'commandSchema': commandsSchema['get'](_0x9a4313(0x1cb)),
                'serviceDir': _0x2e6029[_0x9a4313(0x1e1)],
                'configuration': _0x2e6029['configurationInput'],
                'serverless': _0x2e6029
            });
        expect(_0x27f606)['to'][_0x9a4313(0x1cf)][_0x9a4313(0x1cd)](_0x9a4313(0x1ce)), delete _0x27f606['frameworkLocalUserId'], expect(_0x27f606)['to'][_0x9a4313(0x1cf)][_0x9a4313(0x1cd)](_0x9a4313(0x1d0)), delete _0x27f606[_0x9a4313(0x1d0)], expect(_0x27f606)['to'][_0x9a4313(0x1cf)][_0x9a4313(0x1cd)](_0x9a4313(0x1d1)), delete _0x27f606['timestamp'], expect(_0x27f606)['to']['have'][_0x9a4313(0x1cd)](_0x9a4313(0x1d2)), delete _0x27f606['dashboard'], expect(_0x27f606)['to'][_0x9a4313(0x1cf)][_0x9a4313(0x1cd)]('timezone'), delete _0x27f606[_0x9a4313(0x1d3)], expect(_0x27f606)['to']['have'][_0x9a4313(0x1cd)](_0x9a4313(0x1d4)), delete _0x27f606['ciName'], expect(_0x27f606)['to'][_0x9a4313(0x1cf)]['property'](_0x9a4313(0x1d5)), delete _0x27f606[_0x9a4313(0x1d5)], expect(_0x27f606)['to']['deep'][_0x9a4313(0x1d7)]({
            'cliName': _0x9a4313(0x1e2),
            'isTtyTerminal': !![],
            'command': _0x9a4313(0x1cb),
            'commandOptionNames': [],
            'isConfigValid': ![],
            'config': {
                'configValidationMode': _0x9a4313(0x1e3),
                'provider': {
                    'name': _0x9a4313(0x1e0),
                    'runtime': _0x9a4313(0x1e4),
                    'stage': _0x9a4313(0x1d9),
                    'region': undefined
                },
                'plugins': ['./customProvider'],
                'functions': [
                    {
                        'runtime': 'foo',
                        'events': [{ 'type': 'someEvent' }]
                    },
                    {
                        'runtime': _0x9a4313(0x1e5),
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
            'installationType': _0x9a4313(0x1e6),
            'versions': versions
        });
    }), it('Should\x20recognize\x20local\x20fallback', async () => {
        const _0x3377d1 = _0x471346, {
                serverless: _0xd14454,
                fixtureData: {servicePath: _0x546d84}
            } = await runServerless({
                'fixture': _0x3377d1(0x1e7),
                'command': 'print',
                'modulesCacheStub': {}
            }), _0x3120f1 = overrideCwd(_0x546d84, () => generatePayload({
                'command': 'print',
                'options': {},
                'commandSchema': commandsSchema[_0x3377d1(0x1e8)](_0x3377d1(0x1cb)),
                'serviceDir': _0xd14454['serviceDir'],
                'configuration': _0xd14454['configurationInput'],
                'serverless': _0xd14454
            }));
        expect(_0x3120f1)['to']['have'][_0x3377d1(0x1cd)](_0x3377d1(0x1ce)), delete _0x3120f1[_0x3377d1(0x1ce)], expect(_0x3120f1)['to']['have'][_0x3377d1(0x1cd)](_0x3377d1(0x1d0)), delete _0x3120f1[_0x3377d1(0x1d0)], expect(_0x3120f1)['to'][_0x3377d1(0x1cf)][_0x3377d1(0x1cd)](_0x3377d1(0x1d1)), delete _0x3120f1['timestamp'], expect(_0x3120f1)['to'][_0x3377d1(0x1cf)]['property']('dashboard'), delete _0x3120f1[_0x3377d1(0x1d2)], expect(_0x3120f1)['to'][_0x3377d1(0x1cf)]['property'](_0x3377d1(0x1d3)), delete _0x3120f1[_0x3377d1(0x1d3)], expect(_0x3120f1)['to'][_0x3377d1(0x1cf)][_0x3377d1(0x1cd)](_0x3377d1(0x1d4)), delete _0x3120f1['ciName'], expect(_0x3120f1)['to']['have'][_0x3377d1(0x1cd)](_0x3377d1(0x1d5)), delete _0x3120f1[_0x3377d1(0x1d5)], expect(_0x3120f1)['to'][_0x3377d1(0x1d6)]['equal']({
            'cliName': _0x3377d1(0x1e2),
            'isTtyTerminal': !![],
            'command': _0x3377d1(0x1cb),
            'commandOptionNames': [],
            'isConfigValid': null,
            'config': {
                'configValidationMode': 'error',
                'provider': {
                    'name': _0x3377d1(0x1e9),
                    'runtime': _0x3377d1(0x1ea),
                    'stage': _0x3377d1(0x1d9),
                    'region': _0x3377d1(0x1da)
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
                'serverless': _0x3377d1(0x1eb),
                '@serverless/dashboard-plugin': _0x3377d1(0x1ec),
                '@serverless/enterprise-plugin': undefined
            }
        });
    }), it(_0x471346(0x1ed), async () => {
        const _0x5cb6c8 = _0x471346, _0x3a2d6e = generatePayload({
                'command': _0x5cb6c8(0x1ee),
                'options': {},
                'commandSchema': commandsSchema[_0x5cb6c8(0x1e8)]('config'),
                'serviceDir': process['cwd'](),
                'configuration': {
                    'service': _0x5cb6c8(0x1e4),
                    'provider': _0x5cb6c8(0x1e9)
                }
            });
        expect(_0x3a2d6e)['to']['have'][_0x5cb6c8(0x1cd)](_0x5cb6c8(0x1ce)), delete _0x3a2d6e[_0x5cb6c8(0x1ce)], expect(_0x3a2d6e)['to'][_0x5cb6c8(0x1cf)][_0x5cb6c8(0x1cd)](_0x5cb6c8(0x1d0)), delete _0x3a2d6e[_0x5cb6c8(0x1d0)], expect(_0x3a2d6e)['to'][_0x5cb6c8(0x1cf)][_0x5cb6c8(0x1cd)](_0x5cb6c8(0x1d1)), delete _0x3a2d6e['timestamp'], expect(_0x3a2d6e)['to']['have'][_0x5cb6c8(0x1cd)](_0x5cb6c8(0x1d2)), delete _0x3a2d6e[_0x5cb6c8(0x1d2)], expect(_0x3a2d6e)['to'][_0x5cb6c8(0x1cf)][_0x5cb6c8(0x1cd)](_0x5cb6c8(0x1d3)), delete _0x3a2d6e['timezone'], expect(_0x3a2d6e)['to'][_0x5cb6c8(0x1cf)][_0x5cb6c8(0x1cd)](_0x5cb6c8(0x1d4)), delete _0x3a2d6e[_0x5cb6c8(0x1d4)], expect(_0x3a2d6e)['to'][_0x5cb6c8(0x1cf)][_0x5cb6c8(0x1cd)](_0x5cb6c8(0x1d5)), delete _0x3a2d6e[_0x5cb6c8(0x1d5)], expect(_0x3a2d6e)['to'][_0x5cb6c8(0x1d6)][_0x5cb6c8(0x1d7)]({
            'cliName': 'serverless',
            'isTtyTerminal': !![],
            'command': _0x5cb6c8(0x1ee),
            'commandOptionNames': [],
            'isAutoUpdateEnabled': ![],
            'isTabAutocompletionInstalled': ![],
            'notificationsMode': 'on',
            'triggeredDeprecations': [],
            'installationType': _0x5cb6c8(0x1e6),
            'versions': versions
        });
    }), it(_0x471346(0x1ef), () => {
        const _0xbfadd5 = _0x471346, _0x814011 = generatePayload({
                'command': '',
                'options': {},
                'commandSchema': commandsSchema[_0xbfadd5(0x1e8)](''),
                'serviceDir': process[_0xbfadd5(0x1f0)](),
                'configuration': {
                    'service': _0xbfadd5(0x1e4),
                    'provider': _0xbfadd5(0x1e9)
                }
            });
        expect(_0x814011)['to'][_0xbfadd5(0x1cf)]['property']('frameworkLocalUserId'), delete _0x814011[_0xbfadd5(0x1ce)], expect(_0x814011)['to'][_0xbfadd5(0x1cf)][_0xbfadd5(0x1cd)](_0xbfadd5(0x1d0)), delete _0x814011[_0xbfadd5(0x1d0)], expect(_0x814011)['to'][_0xbfadd5(0x1cf)][_0xbfadd5(0x1cd)](_0xbfadd5(0x1d1)), delete _0x814011[_0xbfadd5(0x1d1)], expect(_0x814011)['to'][_0xbfadd5(0x1cf)]['property'](_0xbfadd5(0x1d2)), delete _0x814011[_0xbfadd5(0x1d2)], expect(_0x814011)['to'][_0xbfadd5(0x1cf)][_0xbfadd5(0x1cd)](_0xbfadd5(0x1d3)), delete _0x814011[_0xbfadd5(0x1d3)], expect(_0x814011)['to'][_0xbfadd5(0x1cf)]['property'](_0xbfadd5(0x1d4)), delete _0x814011['ciName'], expect(_0x814011)['to'][_0xbfadd5(0x1cf)][_0xbfadd5(0x1cd)]('commandDurationMs'), delete _0x814011[_0xbfadd5(0x1d5)], expect(_0x814011)['to']['deep']['equal']({
            'command': '',
            'commandOptionNames': [],
            'cliName': _0xbfadd5(0x1e2),
            'isTtyTerminal': !![],
            'isConfigValid': null,
            'config': {
                'configValidationMode': _0xbfadd5(0x1e3),
                'variableSources': [],
                'provider': {
                    'name': _0xbfadd5(0x1e9),
                    'runtime': _0xbfadd5(0x1ea),
                    'stage': _0xbfadd5(0x1d9),
                    'region': 'us-east-1'
                },
                'plugins': [],
                'functions': [],
                'resources': { 'general': [] }
            },
            'isAutoUpdateEnabled': ![],
            'isTabAutocompletionInstalled': ![],
            'triggeredDeprecations': [],
            'installationType': _0xbfadd5(0x1e6),
            'notificationsMode': 'on',
            'npmDependencies': [],
            'hasLocalCredentials': ![],
            'versions': versions
        });
    }), it('Should\x20correctly\x20resolve\x20payload\x20with\x20missing\x20service\x20configuration', () => {
        const _0x206875 = _0x471346, _0x3495e1 = generatePayload({
                'command': _0x206875(0x1f1),
                'options': {},
                'commandSchema': commandsSchema['get'](_0x206875(0x1f1))
            });
        expect(_0x3495e1)['to'][_0x206875(0x1cf)]['property'](_0x206875(0x1ce)), delete _0x3495e1[_0x206875(0x1ce)], expect(_0x3495e1)['to']['have']['property']('firstLocalInstallationTimestamp'), delete _0x3495e1['firstLocalInstallationTimestamp'], expect(_0x3495e1)['to'][_0x206875(0x1cf)][_0x206875(0x1cd)](_0x206875(0x1d1)), delete _0x3495e1[_0x206875(0x1d1)], expect(_0x3495e1)['to'][_0x206875(0x1cf)][_0x206875(0x1cd)]('dashboard'), delete _0x3495e1[_0x206875(0x1d2)], expect(_0x3495e1)['to'][_0x206875(0x1cf)][_0x206875(0x1cd)](_0x206875(0x1d3)), delete _0x3495e1[_0x206875(0x1d3)], expect(_0x3495e1)['to'][_0x206875(0x1cf)][_0x206875(0x1cd)](_0x206875(0x1d4)), delete _0x3495e1[_0x206875(0x1d4)], expect(_0x3495e1)['to'][_0x206875(0x1cf)][_0x206875(0x1cd)](_0x206875(0x1d5)), delete _0x3495e1[_0x206875(0x1d5)], expect(_0x3495e1)['to'][_0x206875(0x1d6)][_0x206875(0x1d7)]({
            'cliName': _0x206875(0x1e2),
            'isTtyTerminal': !![],
            'command': _0x206875(0x1f1),
            'commandOptionNames': [],
            'isAutoUpdateEnabled': ![],
            'isTabAutocompletionInstalled': ![],
            'notificationsMode': 'on',
            'triggeredDeprecations': [],
            'installationType': _0x206875(0x1e6),
            'versions': versions
        });
    }), it(_0x471346(0x1f2), async () => {
        const _0x3f90e2 = _0x471346;
        await fs[_0x3f90e2(0x1c8)]['writeFile'](path['resolve'](os[_0x3f90e2(0x1f3)](), _0x3f90e2(0x1f4)), JSON['stringify']({
            'frameworkId': '123',
            'userId': _0x3f90e2(0x1f5),
            'meta': { 'created_at': 0x605485be }
        }));
        const _0x4da864 = generatePayload({
            'command': _0x3f90e2(0x1ee),
            'options': {},
            'commandSchema': commandsSchema[_0x3f90e2(0x1e8)](_0x3f90e2(0x1ee)),
            'serviceDir': process[_0x3f90e2(0x1f0)](),
            'configuration': {
                'service': _0x3f90e2(0x1e4),
                'provider': 'aws'
            }
        });
        expect(_0x4da864[_0x3f90e2(0x1d2)]['userId'])['to'][_0x3f90e2(0x1d7)](_0x3f90e2(0x1f5)), expect(_0x4da864[_0x3f90e2(0x1ce)])['to']['equal'](_0x3f90e2(0x1f6)), expect(_0x4da864[_0x3f90e2(0x1d0)])['to']['equal'](0x605485be);
    }), it('Should\x20not\x20include\x20userId\x20from\x20local\x20config\x20if\x20SERVERLESS_ACCESS_KEY\x20used', async () => {
        const _0x53d435 = _0x471346;
        await fs[_0x53d435(0x1c8)][_0x53d435(0x1f7)](path['resolve'](os[_0x53d435(0x1f3)](), '.serverlessrc'), JSON[_0x53d435(0x1ca)]({
            'frameworkId': '123',
            'userId': 'some-user-id'
        }));
        let _0x2cedd9;
        overrideEnv({ 'variables': { 'SERVERLESS_ACCESS_KEY': _0x53d435(0x1f8) } }, () => {
            const _0x20c505 = _0x53d435;
            _0x2cedd9 = generatePayload({
                'command': 'config',
                'options': {},
                'commandSchema': commandsSchema[_0x20c505(0x1e8)]('config'),
                'serviceDir': process[_0x20c505(0x1f0)](),
                'configuration': {
                    'service': _0x20c505(0x1e4),
                    'provider': _0x20c505(0x1e9)
                }
            });
        }), expect(_0x2cedd9[_0x53d435(0x1d2)][_0x53d435(0x1f9)])['to']['be']['null'], expect(_0x2cedd9['frameworkLocalUserId'])['to']['equal'](_0x53d435(0x1f6));
    }), it(_0x471346(0x1fa), () => {
        const _0x1436bf = _0x471346;
        let _0x122564;
        overrideEnv({ 'variables': { 'SERVERLESS_CI_CD': _0x1436bf(0x1fb) } }, () => {
            const _0x2ffa3b = _0x1436bf;
            _0x122564 = generatePayload({
                'command': _0x2ffa3b(0x1ee),
                'options': {},
                'commandSchema': commandsSchema['get'](_0x2ffa3b(0x1ee)),
                'serviceDir': process[_0x2ffa3b(0x1f0)](),
                'configuration': {
                    'service': _0x2ffa3b(0x1e4),
                    'provider': 'aws'
                }
            });
        }), expect(_0x122564['ciName'])['to']['equal']('Serverless\x20CI/CD');
    }), it(_0x471346(0x1fc), () => {
        const _0x3ee294 = _0x471346;
        let _0xd919a;
        overrideEnv({ 'variables': { 'SEED_APP_NAME': _0x3ee294(0x1fd) } }, () => {
            const _0x42eab6 = _0x3ee294;
            _0xd919a = generatePayload({
                'command': 'config',
                'options': {},
                'commandSchema': commandsSchema[_0x42eab6(0x1e8)](_0x42eab6(0x1ee)),
                'serviceDir': process[_0x42eab6(0x1f0)](),
                'configuration': {
                    'service': 'foo',
                    'provider': _0x42eab6(0x1e9)
                }
            });
        }), expect(_0xd919a[_0x3ee294(0x1d4)])['to'][_0x3ee294(0x1d7)]('Seed');
    }), it(_0x471346(0x1fe), () => {
        const _0x16cdea = _0x471346, _0xa39a74 = generatePayload({
                'command': _0x16cdea(0x1cb),
                'options': {
                    'region': 'eu-west-1',
                    'format': _0x16cdea(0x1ff),
                    'path': 'provider.name'
                },
                'commandSchema': commandsSchema[_0x16cdea(0x1e8)](_0x16cdea(0x1cb)),
                'serviceDir': process[_0x16cdea(0x1f0)](),
                'configuration': {
                    'service': _0x16cdea(0x1e4),
                    'provider': _0x16cdea(0x1e9)
                }
            });
        expect(new Set(_0xa39a74[_0x16cdea(0x200)]))['to'][_0x16cdea(0x1d6)][_0x16cdea(0x1d7)](new Set([
            'region',
            _0x16cdea(0x201),
            _0x16cdea(0x202)
        ]));
    }), it('Should\x20correctly\x20resolve\x20`constructs`\x20property', () => {
        const _0x40a0ee = _0x471346, _0x209a0c = generatePayload({
                'command': _0x40a0ee(0x1cb),
                'commandSchema': commandsSchema['get'](_0x40a0ee(0x1cb)),
                'options': {},
                'serviceDir': process[_0x40a0ee(0x1f0)](),
                'configuration': {
                    'service': _0x40a0ee(0x1e4),
                    'provider': 'aws',
                    'constructs': {
                        'jobs': {
                            'type': _0x40a0ee(0x203),
                            'worker': { 'handler': _0x40a0ee(0x204) }
                        },
                        'another': {
                            'type': _0x40a0ee(0x203),
                            'worker': { 'handler': _0x40a0ee(0x205) }
                        }
                    },
                    'plugins': [_0x40a0ee(0x206)]
                }
            });
        expect(_0x209a0c['config'][_0x40a0ee(0x207)])['to'][_0x40a0ee(0x1d6)][_0x40a0ee(0x1d7)]([
            { 'type': _0x40a0ee(0x203) },
            { 'type': _0x40a0ee(0x203) }
        ]);
    }), it(_0x471346(0x208), () => {
        const _0x3eadb2 = _0x471346, _0x544a8b = generatePayload({
                'command': _0x3eadb2(0x1cb),
                'commandSchema': commandsSchema['get'](_0x3eadb2(0x1cb)),
                'options': {},
                'serviceDir': process[_0x3eadb2(0x1f0)](),
                'configuration': {
                    'service': _0x3eadb2(0x1e4),
                    'provider': 'aws',
                    'configValidationMode': 'off'
                }
            });
        expect(_0x544a8b[_0x3eadb2(0x1ee)][_0x3eadb2(0x209)])['to'][_0x3eadb2(0x1d7)](_0x3eadb2(0x20a));
    }), it(_0x471346(0x20b), () => {
        const _0xb11b0f = _0x471346;
        let _0x5ddf66;
        overrideEnv({
            'variables': {
                'AWS_ACCESS_KEY_ID': _0xb11b0f(0x20c),
                'AWS_SECRET_ACCESS_KEY': _0xb11b0f(0x20d)
            }
        }, () => {
            const _0x294e41 = _0xb11b0f;
            _0x5ddf66 = generatePayload({
                'command': 'print',
                'options': {},
                'commandSchema': commandsSchema[_0x294e41(0x1e8)](_0x294e41(0x1cb)),
                'serviceDir': process[_0x294e41(0x1f0)](),
                'configuration': {
                    'service': 'foo',
                    'provider': _0x294e41(0x1e9)
                }
            });
        }), expect(_0x5ddf66['hasLocalCredentials'])['to']['equal'](!![]);
    }), it(_0x471346(0x20e), () => {
        const _0x3bcd40 = _0x471346;
        let _0x33c747;
        overrideEnv({
            'variables': {
                'AWS_ACCESS_KEY_ID': _0x3bcd40(0x20c),
                'AWS_SECRET_ACCESS_KEY': _0x3bcd40(0x20d)
            }
        }, () => {
            const _0x3b8d8f = _0x3bcd40;
            _0x33c747 = generatePayload({
                'command': _0x3b8d8f(0x1cb),
                'options': {},
                'commandSchema': commandsSchema[_0x3b8d8f(0x1e8)](_0x3b8d8f(0x1cb)),
                'serviceDir': process['cwd'](),
                'configuration': {
                    'service': 'foo',
                    'provider': _0x3b8d8f(0x20f)
                }
            });
        }), expect(_0x33c747[_0x3bcd40(0x210)])['to'][_0x3bcd40(0x1d7)](![]);
    }), it(_0x471346(0x211), () => {
        const _0x5b70aa = _0x471346, _0x5a3da0 = generatePayload({
                'command': _0x5b70aa(0x1cb),
                'options': {},
                'commandSchema': commandsSchema[_0x5b70aa(0x1e8)](_0x5b70aa(0x1cb)),
                'serviceDir': process[_0x5b70aa(0x1f0)](),
                'configuration': {
                    'service': _0x5b70aa(0x1e4),
                    'provider': _0x5b70aa(0x1e9)
                },
                'commandUsage': [{
                        'name': _0x5b70aa(0x212),
                        'history': [
                            {
                                'key': _0x5b70aa(0x213),
                                'value': 'answer',
                                'timestamp': 0x17aa2502800
                            },
                            {
                                'key': 'otherQuestion',
                                'value': _0x5b70aa(0x214),
                                'timestamp': 0x17aa2502800
                            }
                        ]
                    }]
            });
        expect(_0x5a3da0[_0x5b70aa(0x215)])['to'][_0x5b70aa(0x1d6)][_0x5b70aa(0x1d7)]([{
                'name': _0x5b70aa(0x212),
                'history': [
                    {
                        'key': _0x5b70aa(0x213),
                        'value': 'answer',
                        'timestamp': 0x17aa2502800
                    },
                    {
                        'key': _0x5b70aa(0x216),
                        'value': _0x5b70aa(0x214),
                        'timestamp': 0x17aa2502800
                    }
                ]
            }]);
    }), it(_0x471346(0x217), () => {
        const _0x2b8405 = _0x471346, _0x155003 = generatePayload({
                'command': _0x2b8405(0x1cb),
                'options': {},
                'commandSchema': commandsSchema[_0x2b8405(0x1e8)](_0x2b8405(0x1cb)),
                'serviceDir': process['cwd'](),
                'configuration': {
                    'service': _0x2b8405(0x1e4),
                    'provider': _0x2b8405(0x1e9)
                },
                'commandUsage': [],
                'variableSources': new Set([
                    'ssm',
                    _0x2b8405(0x218)
                ])
            });
        expect(_0x155003[_0x2b8405(0x1ee)][_0x2b8405(0x219)])['to']['deep'][_0x2b8405(0x1d7)]([
            _0x2b8405(0x21a),
            _0x2b8405(0x218)
        ]);
    });
});
