'use strict';

const _0x3522 = ['hZvng', 'XWpCb', 'DCKeR', '4.0.0-local', 'SosNR', 'xVCCc', 'cwd', 'npCbg', 'EVYyB', 'Ghjks', 'SDfJh', 'vmruy', 'XeLVs', 'Should correctly resolve payload with missing service configuration', 'plugin list', 'EPlrk', 'Jxtib', 'WrYtA', 'XeYYB', 'NyOma', 'ssHZq', 'DIodb', 'homedir', 'uEUVU', 'BwxFG', 'TdseT', 'bvsYj', 'userId', 'sqBPD', 'vAhDl', 'Serverless CI/CD', 'lzzTW', 'iHCsj', 'JvsTX', 'RwWVW', 'CtPft', 'oRcor', 'niRys', 'dvgJM', 'QRQSF', 'Mfdrp', 'VZlZS', 'qwMIY', 'ndkus', 'xytuu', 'queue', 'EpKdn', 'other.handler', 'Should correctly resolve `configValidationMode` property', 'IaAdE', 'vywmt', 'CMPcl', 'hasLocalCredentials', 'UjaCM', 'RNbnW', 'EGKKm', 'eZzPP', 'sXwOH', 'gYDHV', 'Jtxcs', 'RiFAC', 'commandUsage', 'nXQUy', 'rhdbf', 'AyBRu', 'POgHr', 'variableSources', 'seyZj', 'CFPUE', '1lmWeSt', '386333UKMlkG', '1svYACd', '415109sPvZhG', '6HfOAuV', '48228OSTwTC', '20551chwEaU', '7XMSMSA', '95594cCIbRn', '440052smRYAn', '684365gUyWxd', 'chai', 'path', '../../../../../lib/cli/resolve-local-serverless-path', '../../../../utils/run-serverless', '../../../../fixtures/programmatic', '../../../../../package', 'version', '@serverless/dashboard-plugin/package', 'test/unit/lib/utils/telemetry/generatePayload.test.js', '/aws/lambda/extra-log', 'Custom::Matthieu', 'frameworkLocalUserId', 'timestamp', 'dashboard', 'ciName', 'serverless', 'error', 'nodejs14.x', 'dev', 'us-east-1', 'httpApi', '$containerimage', 'AWS::S3::Bucket', 'Custom', 'barDep', 'fooOpt', 'firstLocalInstallationTimestamp', 'warn', 'foo', 'aws', 'local:fallback', '2.0.0-local', 'config', '.serverlessrc', '123', 'some-user-id', 'some-key', 'true', 'some-app', 'provider.name', 'region', 'format', 'some.handler', 'someaccesskey', 'secretkey', 'other', 'firstStep', 'firstQuestion', 'answer', 'otherQuestion', 'otherAnswer', 'ssm', 'opt', 'Should resolve payload for AWS service', 'Should resolve payload for custom provider service', 'Should recognize local fallback', 'Should resolve service-agnostic payload', 'Should resolve service-agnostic payload for command with `serviceDependencyMode: "optional"`', 'Should resolve payload with predefined local config', 'Should correctly detect Serverless CI/CD', 'Should correctly detect Seed CI/CD', 'Should correctly resolve `commandOptionNames` property', 'Should correctly resolve `hasLocalCredentials` property for AWS provider', 'Should correctly resolve `hasLocalCredentials` property for non-AWS provider', 'Should correctly resolve `commandUsage` property', 'puVMZ', '$serverlessCommandStartTime', 'hrtime', 'isTTY', 'stdin', 'HZwRs', 'pQPut', 'setup', '000000000000.dkr.ecr.sa-east-1.amazonaws.com/test-lambda-docker@sha256:6bb600b4d6e1d7cf521097177dd0c4e9ea373edb91984a505333be8ac9455d38', 'AWS::Logs::LogGroup', 'wdjsN', '/aws/lambda/extra-log-2', 'WDcHX', 'promises', 'writeFile', 'resolve', 'stringify', 'print', 'cqWxn', 'tSguD', 'get', 'have', 'property', 'cpdSH', 'KzZsL', 'xQulp', 'timezone', 'YQwVM', 'commandDurationMs', 'deep', 'equal', 'kvSZO', 'yGYGI', 'YkNyq', 'axMdk', 'pvvSK', 'zhqiP', 'fooDep', 'faetI', 'YXXSP', 'someDev', 'SxYKP', 'serviceDir', 'hQpNW', 'customProvider', './customProvider', 'vbRYB', 'Rvqms', 'ixOkF', 'RYfnb', 'configurationInput', 'JKRXK', 'tkZfe', 'jqvtN', 'Moink', 'itMfy', 'LcgVm'];
const _0x2e5f06 = _0x4530;

(function (_0x102521, _0x3a2024) {
    const _0x250948 = _0x4530;

    while (true) {
        try {
            const _0x4030e3 = parseInt(_0x250948(0xe1)) * -parseInt(_0x250948(0xe2)) + parseInt(_0x250948(0xe3)) * parseInt(_0x250948(0xe4)) + -parseInt(_0x250948(0xe5)) * parseInt(_0x250948(0xe6)) + -parseInt(_0x250948(0xe7)) * -parseInt(_0x250948(0xe8)) + parseInt(_0x250948(0xe9)) + -parseInt(_0x250948(0xea)) + parseInt(_0x250948(0xeb));

            if (_0x4030e3 === _0x3a2024) break;else _0x102521.push(_0x102521.shift());
        } catch (_0x219c15) {
            _0x102521.push(_0x102521.shift());
        }
    }
})(_0x3522, 223172);

var { expect } = require(_0x2e5f06(0xec));

const path = require(_0x2e5f06(0xed));

const fs = require('fs');

const os = require('os');

const overrideEnv = require('process-utils/override-env');

const overrideCwd = require('process-utils/override-cwd');

const proxyquire = require('proxyquire');

const resolveLocalServerless = require(_0x2e5f06(0xee));

const commandsSchema = require('../../../../../lib/cli/commands-schema');

const runServerless = require(_0x2e5f06(0xef));

const fixtures = require(_0x2e5f06(0xf0));

const versions = {
    'serverless': require(_0x2e5f06(0xf1))[_0x2e5f06(0xf2)],
    '@serverless/dashboard-plugin': require(_0x2e5f06(0xf3))[_0x2e5f06(0xf2)]
};
const generatePayload = proxyquire('../../../../../lib/utils/telemetry/generatePayload', { '@serverless/utils/get-notifications-mode': () => 'on' });

function _0x4530(_0x3e525d, _0x44e373) {
    return _0x4530 = function (_0x4f15db, _0xf3fc8) {
        _0x4f15db = _0x4f15db - 225;
        const _0x165cf2 = _0x3522[_0x4f15db];

        return _0x165cf2;
    }, _0x4530(_0x3e525d, _0x44e373);
}
describe(_0x2e5f06(0xf4), () => {
    const _0x73c000 = _0x2e5f06;
    const _0x2cee23 = {
        'wdjsN': _0x73c000(0xf5),
        'WDcHX': _0x73c000(0xf6),
        'FdATi': 'package.json',
        'cqWxn': function (_0xa761f7, _0x2e242d) {
            return _0xa761f7(_0x2e242d);
        },
        'tSguD': 'print',
        'cpdSH': function (_0x4b5eb7, _0x1a24ae) {
            return _0x4b5eb7(_0x1a24ae);
        },
        'JKRXK': _0x73c000(0xf7),
        'KzZsL': _0x73c000(0xf8),
        'xQulp': _0x73c000(0xf9),
        'YQwVM': _0x73c000(0xfa),
        'itMfy': 'commandDurationMs',
        'kvSZO': _0x73c000(0xfb),
        'hZvng': _0x73c000(0xfc),
        'yGYGI': _0x73c000(0xfd),
        'YkNyq': _0x73c000(0xfe),
        'DCKeR': _0x73c000(0xff),
        'axMdk': _0x73c000(0x100),
        'cwcPb': _0x73c000(0x101),
        'pvvSK': _0x73c000(0x102),
        'zhqiP': _0x73c000(0x103),
        'faetI': _0x73c000(0x104),
        'YXXSP': _0x73c000(0x105),
        'SxYKP': 'customProvider',
        'SWjue': function (_0x1f7b3e, _0xa6f443) {
            return _0x1f7b3e(_0xa6f443);
        },
        'tkZfe': _0x73c000(0x106),
        'hQpNW': function (_0x186493, _0x2f7f76) {
            return _0x186493(_0x2f7f76);
        },
        'vmruy': _0x73c000(0x107),
        'vbRYB': _0x73c000(0x108),
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
        'XeLVs': _0x73c000(0x109),
        'XWpCb': 'nodejs12.x',
        'GBDGe': _0x73c000(0x10a),
        'VUcWG': _0x73c000(0x10b),
        'xVCCc': _0x73c000(0x10c),
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
        'hJXhH': _0x73c000(0x10d),
        'uEUVU': _0x73c000(0x10e),
        'BwxFG': _0x73c000(0x10f),
        'TdseT': function (_0x25d285, _0x2d31bc, _0x28b93c) {
            return _0x25d285(_0x2d31bc, _0x28b93c);
        },
        'bvsYj': _0x73c000(0x110),
        'vAhDl': function (_0x4a435b, _0x3cf42b, _0x2cff91) {
            return _0x4a435b(_0x3cf42b, _0x2cff91);
        },
        'acFEb': _0x73c000(0x111),
        'iHCsj': _0x73c000(0x112),
        'QRQSF': function (_0x4414ec, _0x3d4b5a) {
            return _0x4414ec(_0x3d4b5a);
        },
        'Mfdrp': _0x73c000(0x113),
        'VZlZS': _0x73c000(0x114),
        'qwMIY': _0x73c000(0x115),
        'xytuu': function (_0x357543, _0x4c5a4a) {
            return _0x357543(_0x4c5a4a);
        },
        'nsNBP': _0x73c000(0x116),
        'EpKdn': 'queue',
        'uzrtZ': 'serverless-lift',
        'IaAdE': 'off',
        'pQPut': function (_0x382f7e, _0x372076, _0x386dd0) {
            return _0x382f7e(_0x372076, _0x386dd0);
        },
        'CMPcl': _0x73c000(0x117),
        'EGKKm': _0x73c000(0x118),
        'eZzPP': _0x73c000(0x119),
        'nXQUy': _0x73c000(0x11a),
        'gYDHV': _0x73c000(0x11b),
        'Jtxcs': _0x73c000(0x11c),
        'RiFAC': _0x73c000(0x11d),
        'rhdbf': _0x73c000(0x11e),
        'seyZj': _0x73c000(0x11f),
        'CFPUE': _0x73c000(0x120),
        'puVMZ': function (_0x14fc14, _0x2b5029) {
            return _0x14fc14(_0x2b5029);
        },
        'HZwRs': function (_0x536a16, _0x175d90) {
            return _0x536a16(_0x175d90);
        },
        'rqvmw': _0x73c000(0x121),
        'zwiRU': _0x73c000(0x122),
        'ixOkF': _0x73c000(0x123),
        'SosNR': _0x73c000(0x124),
        'aCDjf': _0x73c000(0x125),
        'ssHZq': _0x73c000(0x126),
        'DIodb': 'Should not include userId from local config if SERVERLESS_ACCESS_KEY used',
        'sqBPD': _0x73c000(0x127),
        'lzzTW': function (_0x20b70e, _0x5f4a90, _0x59cac5) {
            return _0x20b70e(_0x5f4a90, _0x59cac5);
        },
        'TwWIL': _0x73c000(0x128),
        'niRys': function (_0x37318d, _0x5ed793, _0x383b8f) {
            return _0x37318d(_0x5ed793, _0x383b8f);
        },
        'dvgJM': _0x73c000(0x129),
        'ndkus': function (_0x116fa5, _0x117ee3, _0x39652e) {
            return _0x116fa5(_0x117ee3, _0x39652e);
        },
        'vywmt': function (_0x6cbfa3, _0x35649a, _0x2a1ff2) {
            return _0x6cbfa3(_0x35649a, _0x2a1ff2);
        },
        'Hzgvi': _0x73c000(0x12a),
        'UjaCM': function (_0x2e17e9, _0xdfd0d7, _0x67f788) {
            return _0x2e17e9(_0xdfd0d7, _0x67f788);
        },
        'RNbnW': _0x73c000(0x12b),
        'AyBRu': function (_0x34f8a1, _0x33b85a, _0x302c60) {
            return _0x34f8a1(_0x33b85a, _0x302c60);
        },
        'sXwOH': _0x73c000(0x12c),
        'POgHr': 'Should correctly resolve `variableSources` property'
    };

    var _0x3f2e82;

    _0x2cee23[_0x73c000(0x12d)](before, () => {
        const _0x126ae2 = _0x73c000;

        EvalError[_0x126ae2(0x12e)] = process[_0x126ae2(0x12f)](), _0x3f2e82 = process.stdin[_0x126ae2(0x130)], process[_0x126ae2(0x131)]['isTTY'] = true;
    }), _0x2cee23[_0x73c000(0x132)](after, () => {
        const _0x4c0b63 = _0x73c000;

        process[_0x4c0b63(0x131)]['isTTY'] = _0x3f2e82;
    }), beforeEach(() => {
        resolveLocalServerless.clear();
    }), _0x2cee23[_0x73c000(0x133)](it, _0x2cee23.rqvmw, async () => {
        const _0x25382d = _0x73c000;
        var { servicePath: _0x12299a } = await fixtures[_0x25382d(0x134)]('httpApi', {
            'configExt': {
                'provider': { 'runtime': _0x25382d(0xfd) },
                'functions': { 'withContainer': { 'image': _0x25382d(0x135) } },
                'resources': {
                    'Resources': {
                        'ExtraLogGroup': {
                            'Type': _0x25382d(0x136),
                            'Properties': { 'LogGroupName': _0x2cee23[_0x25382d(0x137)] }
                        },
                        'AnotherExtraLogGroup': {
                            'Type': _0x25382d(0x136),
                            'Properties': { 'LogGroupName': _0x25382d(0x138) }
                        },
                        'ExtraBucket': { 'Type': _0x25382d(0x102) },
                        'ExtraCustom': { 'Type': _0x2cee23[_0x25382d(0x139)] }
                    },
                    'extensions': { 'FunctionLambdaFunction': { 'Properties': { 'Runtime': _0x25382d(0xfd) } } }
                }
            }
        });

        await fs[_0x25382d(0x13a)][_0x25382d(0x13b)](path[_0x25382d(0x13c)](_0x12299a, _0x2cee23.FdATi), JSON[_0x25382d(0x13d)]({
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
        var { serverless: _0x317623 } = await runServerless({
            'cwd': _0x12299a,
            'command': _0x25382d(0x13e)
        });

        const _0x1f744b = _0x2cee23[_0x25382d(0x13f)](generatePayload, {
            'command': _0x2cee23[_0x25382d(0x140)],
            'options': {},
            'commandSchema': commandsSchema[_0x25382d(0x141)](_0x2cee23[_0x25382d(0x140)]),
            'serviceDir': _0x12299a,
            'configuration': _0x317623.configurationInput
        });

        _0x2cee23.cpdSH(expect, _0x1f744b).to[_0x25382d(0x142)][_0x25382d(0x143)](_0x2cee23.JKRXK), delete _0x1f744b[_0x25382d(0xf7)], _0x2cee23[_0x25382d(0x144)](expect, _0x1f744b).to[_0x25382d(0x142)].property(_0x25382d(0x106)), delete _0x1f744b[_0x25382d(0x106)], expect(_0x1f744b).to.have[_0x25382d(0x143)](_0x2cee23[_0x25382d(0x145)]), delete _0x1f744b[_0x25382d(0xf8)], _0x2cee23[_0x25382d(0x144)](expect, _0x1f744b).to.have[_0x25382d(0x143)](_0x2cee23[_0x25382d(0x146)]), delete _0x1f744b.dashboard, _0x2cee23[_0x25382d(0x144)](expect, _0x1f744b).to[_0x25382d(0x142)][_0x25382d(0x143)](_0x25382d(0x147)), delete _0x1f744b[_0x25382d(0x147)], _0x2cee23[_0x25382d(0x144)](expect, _0x1f744b).to[_0x25382d(0x142)][_0x25382d(0x143)](_0x2cee23[_0x25382d(0x148)]), delete _0x1f744b[_0x25382d(0xfa)], expect(_0x1f744b).to.have.property(_0x2cee23.itMfy), delete _0x1f744b[_0x25382d(0x149)], _0x2cee23[_0x25382d(0x144)](expect, _0x1f744b).to[_0x25382d(0x14a)][_0x25382d(0x14b)]({
            'cliName': _0x2cee23[_0x25382d(0x14c)],
            'isTtyTerminal': true,
            'command': 'print',
            'commandOptionNames': [],
            'isConfigValid': true,
            'config': {
                'configValidationMode': _0x2cee23.hZvng,
                'provider': {
                    'name': _0x25382d(0x109),
                    'runtime': _0x2cee23[_0x25382d(0x14d)],
                    'stage': _0x2cee23[_0x25382d(0x14e)],
                    'region': _0x2cee23.DCKeR
                },
                'plugins': [],
                'functions': [{
                    'runtime': _0x2cee23[_0x25382d(0x14d)],
                    'events': [{ 'type': _0x2cee23[_0x25382d(0x14f)] }, { 'type': _0x2cee23.axMdk }]
                }, {
                    'runtime': _0x2cee23[_0x25382d(0x14d)],
                    'events': [{ 'type': _0x25382d(0x100) }]
                }, {
                    'runtime': _0x2cee23[_0x25382d(0x14d)],
                    'events': []
                }, {
                    'runtime': _0x2cee23[_0x25382d(0x14d)],
                    'events': []
                }, {
                    'runtime': _0x2cee23.cwcPb,
                    'events': []
                }],
                'resources': {
                    'general': [_0x25382d(0x136), _0x2cee23[_0x25382d(0x150)], _0x2cee23[_0x25382d(0x151)]]
                },
                'variableSources': []
            },
            'isAutoUpdateEnabled': false,
            'isTabAutocompletionInstalled': false,
            'notificationsMode': 'on',
            'npmDependencies': [_0x25382d(0x152), _0x2cee23[_0x25382d(0x153)], _0x2cee23[_0x25382d(0x154)], _0x25382d(0x155), 'otherDev'],
            'triggeredDeprecations': [],
            'installationType': 'global:other',
            'hasLocalCredentials': false,
            'versions': versions
        });
    }), it(_0x2cee23.zwiRU, async () => {
        const _0x82416a = _0x73c000;
        var { serverless: _0x21201d } = await _0x2cee23[_0x82416a(0x144)](runServerless, {
            'fixture': _0x2cee23[_0x82416a(0x156)],
            'command': 'print'
        });

        const _0x1a1d6f = _0x2cee23[_0x82416a(0x144)](generatePayload, {
            'command': _0x2cee23.tSguD,
            'options': {},
            'commandSchema': commandsSchema[_0x82416a(0x141)](_0x2cee23[_0x82416a(0x140)]),
            'serviceDir': _0x21201d[_0x82416a(0x157)],
            'configuration': _0x21201d.configurationInput,
            'serverless': _0x21201d
        });

        _0x2cee23[_0x82416a(0x144)](expect, _0x1a1d6f).to[_0x82416a(0x142)][_0x82416a(0x143)](_0x2cee23.JKRXK), delete _0x1a1d6f.frameworkLocalUserId, _0x2cee23.SWjue(expect, _0x1a1d6f).to[_0x82416a(0x142)][_0x82416a(0x143)](_0x2cee23.tkZfe), delete _0x1a1d6f.firstLocalInstallationTimestamp, _0x2cee23[_0x82416a(0x158)](expect, _0x1a1d6f).to[_0x82416a(0x142)].property(_0x2cee23[_0x82416a(0x145)]), delete _0x1a1d6f[_0x82416a(0xf8)], _0x2cee23[_0x82416a(0x158)](expect, _0x1a1d6f).to[_0x82416a(0x142)][_0x82416a(0x143)](_0x2cee23[_0x82416a(0x146)]), delete _0x1a1d6f[_0x82416a(0xf9)], _0x2cee23[_0x82416a(0x158)](expect, _0x1a1d6f).to[_0x82416a(0x142)][_0x82416a(0x143)](_0x82416a(0x147)), delete _0x1a1d6f[_0x82416a(0x147)], _0x2cee23[_0x82416a(0x158)](expect, _0x1a1d6f).to.have[_0x82416a(0x143)](_0x2cee23[_0x82416a(0x148)]), delete _0x1a1d6f.ciName, _0x2cee23[_0x82416a(0x158)](expect, _0x1a1d6f).to[_0x82416a(0x142)][_0x82416a(0x143)](_0x2cee23.itMfy), delete _0x1a1d6f[_0x82416a(0x149)], expect(_0x1a1d6f).to[_0x82416a(0x14a)].equal({
            'cliName': _0x82416a(0xfb),
            'isTtyTerminal': true,
            'command': _0x2cee23.tSguD,
            'commandOptionNames': [],
            'isConfigValid': false,
            'config': {
                'configValidationMode': _0x2cee23.vmruy,
                'provider': {
                    'name': _0x82416a(0x159),
                    'runtime': _0x2cee23.vbRYB,
                    'stage': _0x2cee23[_0x82416a(0x14e)],
                    'region': undefined
                },
                'plugins': [_0x82416a(0x15a)],
                'functions': [{
                    'runtime': _0x2cee23[_0x82416a(0x15b)],
                    'events': [{ 'type': 'someEvent' }]
                }, {
                    'runtime': _0x2cee23[_0x82416a(0x15c)],
                    'events': []
                }],
                'resources': undefined,
                'variableSources': []
            },
            'isAutoUpdateEnabled': false,
            'isTabAutocompletionInstalled': false,
            'notificationsMode': 'on',
            'npmDependencies': [],
            'triggeredDeprecations': [],
            'hasLocalCredentials': false,
            'installationType': _0x2cee23.npCbg,
            'versions': versions
        });
    }), _0x2cee23[_0x73c000(0x133)](it, _0x2cee23[_0x73c000(0x15d)], async () => {
        const _0x16be19 = _0x73c000;
        var {
            serverless: _0x555b73,
            fixtureData: { servicePath: _0x548f58 }
        } = await _0x2cee23[_0x16be19(0x15e)](runServerless, {
            'fixture': _0x2cee23.lgiSt,
            'command': _0x2cee23[_0x16be19(0x140)],
            'modulesCacheStub': {}
        });

        const _0x2ac284 = overrideCwd(_0x548f58, () => generatePayload({
            'command': _0x16be19(0x13e),
            'options': {},
            'commandSchema': commandsSchema[_0x16be19(0x141)](_0x16be19(0x13e)),
            'serviceDir': _0x555b73[_0x16be19(0x157)],
            'configuration': _0x555b73[_0x16be19(0x15f)],
            'serverless': _0x555b73
        }));

        _0x2cee23[_0x16be19(0x15e)](expect, _0x2ac284).to[_0x16be19(0x142)][_0x16be19(0x143)](_0x2cee23[_0x16be19(0x160)]), delete _0x2ac284.frameworkLocalUserId, expect(_0x2ac284).to[_0x16be19(0x142)][_0x16be19(0x143)](_0x2cee23[_0x16be19(0x161)]), delete _0x2ac284[_0x16be19(0x106)], _0x2cee23[_0x16be19(0x15e)](expect, _0x2ac284).to[_0x16be19(0x142)][_0x16be19(0x143)](_0x2cee23[_0x16be19(0x145)]), delete _0x2ac284[_0x16be19(0xf8)], _0x2cee23[_0x16be19(0x15e)](expect, _0x2ac284).to.have[_0x16be19(0x143)](_0x16be19(0xf9)), delete _0x2ac284.dashboard, _0x2cee23.rHLmp(expect, _0x2ac284).to[_0x16be19(0x142)][_0x16be19(0x143)](_0x2cee23[_0x16be19(0x162)]), delete _0x2ac284[_0x16be19(0x147)], _0x2cee23.sAedQ(expect, _0x2ac284).to[_0x16be19(0x142)][_0x16be19(0x143)](_0x2cee23[_0x16be19(0x148)]), delete _0x2ac284[_0x16be19(0xfa)], _0x2cee23[_0x16be19(0x163)](expect, _0x2ac284).to[_0x16be19(0x142)][_0x16be19(0x143)](_0x2cee23[_0x16be19(0x164)]), delete _0x2ac284[_0x16be19(0x149)], _0x2cee23[_0x16be19(0x165)](expect, _0x2ac284).to[_0x16be19(0x14a)][_0x16be19(0x14b)]({
            'cliName': _0x16be19(0xfb),
            'isTtyTerminal': true,
            'command': _0x2cee23.tSguD,
            'commandOptionNames': [],
            'isConfigValid': null,
            'config': {
                'configValidationMode': _0x2cee23[_0x16be19(0x166)],
                'provider': {
                    'name': _0x2cee23.XeLVs,
                    'runtime': _0x2cee23[_0x16be19(0x167)],
                    'stage': _0x16be19(0xfe),
                    'region': _0x2cee23[_0x16be19(0x168)]
                },
                'plugins': [],
                'functions': [],
                'resources': { 'general': [] },
                'variableSources': []
            },
            'isAutoUpdateEnabled': false,
            'isTabAutocompletionInstalled': false,
            'notificationsMode': 'on',
            'npmDependencies': [],
            'triggeredDeprecations': [],
            'installationType': _0x2cee23.GBDGe,
            'hasLocalCredentials': false,
            'versions': {
                'serverless': _0x2cee23.VUcWG,
                '@serverless/dashboard-plugin': _0x16be19(0x169),
                '@serverless/enterprise-plugin': undefined
            }
        });
    }), it(_0x2cee23[_0x73c000(0x16a)], async () => {
        const _0x4de198 = _0x73c000;

        const _0x823e97 = generatePayload({
            'command': _0x2cee23[_0x4de198(0x16b)],
            'options': {},
            'commandSchema': commandsSchema[_0x4de198(0x141)](_0x2cee23[_0x4de198(0x16b)]),
            'serviceDir': process[_0x4de198(0x16c)](),
            'configuration': {
                'service': _0x2cee23[_0x4de198(0x15b)],
                'provider': _0x4de198(0x109)
            }
        });

        expect(_0x823e97).to[_0x4de198(0x142)][_0x4de198(0x143)](_0x2cee23[_0x4de198(0x160)]), delete _0x823e97.frameworkLocalUserId, _0x2cee23[_0x4de198(0x165)](expect, _0x823e97).to[_0x4de198(0x142)][_0x4de198(0x143)](_0x4de198(0x106)), delete _0x823e97[_0x4de198(0x106)], _0x2cee23[_0x4de198(0x165)](expect, _0x823e97).to[_0x4de198(0x142)][_0x4de198(0x143)](_0x2cee23.KzZsL), delete _0x823e97[_0x4de198(0xf8)], _0x2cee23[_0x4de198(0x165)](expect, _0x823e97).to.have[_0x4de198(0x143)](_0x2cee23[_0x4de198(0x146)]), delete _0x823e97[_0x4de198(0xf9)], _0x2cee23[_0x4de198(0x165)](expect, _0x823e97).to.have[_0x4de198(0x143)](_0x2cee23[_0x4de198(0x162)]), delete _0x823e97[_0x4de198(0x147)], _0x2cee23[_0x4de198(0x165)](expect, _0x823e97).to[_0x4de198(0x142)][_0x4de198(0x143)](_0x4de198(0xfa)), delete _0x823e97[_0x4de198(0xfa)], _0x2cee23.EVYyB(expect, _0x823e97).to.have[_0x4de198(0x143)](_0x2cee23.itMfy), delete _0x823e97.commandDurationMs, expect(_0x823e97).to[_0x4de198(0x14a)].equal({
            'cliName': _0x4de198(0xfb),
            'isTtyTerminal': true,
            'command': _0x4de198(0x10c),
            'commandOptionNames': [],
            'isAutoUpdateEnabled': false,
            'isTabAutocompletionInstalled': false,
            'notificationsMode': 'on',
            'triggeredDeprecations': [],
            'installationType': _0x2cee23[_0x4de198(0x16d)],
            'versions': versions
        });
    }), _0x2cee23[_0x73c000(0x133)](it, _0x2cee23.aCDjf, () => {
        const _0x18cdb7 = _0x73c000;

        const _0x15b004 = _0x2cee23[_0x18cdb7(0x16e)](generatePayload, {
            'command': '',
            'options': {},
            'commandSchema': commandsSchema[_0x18cdb7(0x141)](''),
            'serviceDir': process.cwd(),
            'configuration': {
                'service': _0x2cee23[_0x18cdb7(0x15b)],
                'provider': _0x2cee23.XeLVs
            }
        });

        _0x2cee23.tklxb(expect, _0x15b004).to[_0x18cdb7(0x142)][_0x18cdb7(0x143)](_0x2cee23.JKRXK), delete _0x15b004.frameworkLocalUserId, _0x2cee23[_0x18cdb7(0x16f)](expect, _0x15b004).to[_0x18cdb7(0x142)].property(_0x2cee23[_0x18cdb7(0x161)]), delete _0x15b004.firstLocalInstallationTimestamp, _0x2cee23[_0x18cdb7(0x16f)](expect, _0x15b004).to[_0x18cdb7(0x142)][_0x18cdb7(0x143)](_0x2cee23.KzZsL), delete _0x15b004[_0x18cdb7(0xf8)], _0x2cee23.SDfJh(expect, _0x15b004).to[_0x18cdb7(0x142)][_0x18cdb7(0x143)](_0x2cee23[_0x18cdb7(0x146)]), delete _0x15b004[_0x18cdb7(0xf9)], expect(_0x15b004).to.have[_0x18cdb7(0x143)](_0x2cee23[_0x18cdb7(0x162)]), delete _0x15b004.timezone, _0x2cee23[_0x18cdb7(0x170)](expect, _0x15b004).to[_0x18cdb7(0x142)][_0x18cdb7(0x143)]('ciName'), delete _0x15b004[_0x18cdb7(0xfa)], _0x2cee23.SDfJh(expect, _0x15b004).to[_0x18cdb7(0x142)][_0x18cdb7(0x143)](_0x2cee23.itMfy), delete _0x15b004.commandDurationMs, _0x2cee23[_0x18cdb7(0x170)](expect, _0x15b004).to[_0x18cdb7(0x14a)][_0x18cdb7(0x14b)]({
            'command': '',
            'commandOptionNames': [],
            'cliName': _0x2cee23.kvSZO,
            'isTtyTerminal': true,
            'isConfigValid': null,
            'config': {
                'configValidationMode': _0x2cee23[_0x18cdb7(0x171)],
                'variableSources': [],
                'provider': {
                    'name': _0x2cee23[_0x18cdb7(0x172)],
                    'runtime': _0x2cee23[_0x18cdb7(0x167)],
                    'stage': _0x2cee23[_0x18cdb7(0x14e)],
                    'region': _0x2cee23[_0x18cdb7(0x168)]
                },
                'plugins': [],
                'functions': [],
                'resources': { 'general': [] }
            },
            'isAutoUpdateEnabled': false,
            'isTabAutocompletionInstalled': false,
            'triggeredDeprecations': [],
            'installationType': _0x2cee23[_0x18cdb7(0x16d)],
            'notificationsMode': 'on',
            'npmDependencies': [],
            'hasLocalCredentials': false,
            'versions': versions
        });
    }), _0x2cee23[_0x73c000(0x133)](it, _0x73c000(0x173), () => {
        const _0x492e28 = _0x73c000;

        const _0x42b468 = generatePayload({
            'command': _0x492e28(0x174),
            'options': {},
            'commandSchema': commandsSchema.get(_0x2cee23[_0x492e28(0x175)])
        });

        expect(_0x42b468).to.have[_0x492e28(0x143)](_0x492e28(0xf7)), delete _0x42b468.frameworkLocalUserId, _0x2cee23[_0x492e28(0x176)](expect, _0x42b468).to[_0x492e28(0x142)].property(_0x492e28(0x106)), delete _0x42b468[_0x492e28(0x106)], _0x2cee23[_0x492e28(0x177)](expect, _0x42b468).to.have[_0x492e28(0x143)](_0x492e28(0xf8)), delete _0x42b468[_0x492e28(0xf8)], expect(_0x42b468).to[_0x492e28(0x142)][_0x492e28(0x143)](_0x2cee23.xQulp), delete _0x42b468[_0x492e28(0xf9)], _0x2cee23.XeYYB(expect, _0x42b468).to.have.property(_0x492e28(0x147)), delete _0x42b468.timezone, _0x2cee23[_0x492e28(0x178)](expect, _0x42b468).to.have.property(_0x492e28(0xfa)), delete _0x42b468.ciName, _0x2cee23[_0x492e28(0x179)](expect, _0x42b468).to[_0x492e28(0x142)][_0x492e28(0x143)](_0x492e28(0x149)), delete _0x42b468.commandDurationMs, expect(_0x42b468).to.deep[_0x492e28(0x14b)]({
            'cliName': _0x2cee23[_0x492e28(0x14c)],
            'isTtyTerminal': true,
            'command': _0x2cee23.EPlrk,
            'commandOptionNames': [],
            'isAutoUpdateEnabled': false,
            'isTabAutocompletionInstalled': false,
            'notificationsMode': 'on',
            'triggeredDeprecations': [],
            'installationType': _0x2cee23[_0x492e28(0x16d)],
            'versions': versions
        });
    }), _0x2cee23[_0x73c000(0x133)](it, _0x2cee23[_0x73c000(0x17a)], async () => {
        const _0x49d84d = _0x73c000;

        await fs[_0x49d84d(0x13a)].writeFile(path.resolve(os.homedir(), _0x2cee23.hJXhH), JSON[_0x49d84d(0x13d)]({
            'frameworkId': '123',
            'userId': 'some-user-id',
            'meta': { 'created_at': 0x605485be }
        }));

        const _0x3a46a0 = generatePayload({
            'command': 'config',
            'options': {},
            'commandSchema': commandsSchema[_0x49d84d(0x141)](_0x2cee23.xVCCc),
            'serviceDir': process.cwd(),
            'configuration': {
                'service': _0x2cee23[_0x49d84d(0x15b)],
                'provider': _0x2cee23[_0x49d84d(0x172)]
            }
        });

        _0x2cee23.NyOma(expect, _0x3a46a0[_0x49d84d(0xf9)].userId).to.equal(_0x49d84d(0x10f)), _0x2cee23[_0x49d84d(0x179)](expect, _0x3a46a0.frameworkLocalUserId).to[_0x49d84d(0x14b)](_0x49d84d(0x10e)), expect(_0x3a46a0[_0x49d84d(0x106)]).to[_0x49d84d(0x14b)](1616151998);
    }), _0x2cee23[_0x73c000(0x133)](it, _0x2cee23[_0x73c000(0x17b)], async () => {
        const _0x286d28 = _0x73c000;

        await fs.promises[_0x286d28(0x13b)](path[_0x286d28(0x13c)](os[_0x286d28(0x17c)](), _0x2cee23.hJXhH), JSON[_0x286d28(0x13d)]({
            'frameworkId': _0x2cee23[_0x286d28(0x17d)],
            'userId': _0x2cee23[_0x286d28(0x17e)]
        }));

        var _0x3d524a;

        _0x2cee23[_0x286d28(0x17f)](overrideEnv, { 'variables': { 'SERVERLESS_ACCESS_KEY': _0x2cee23[_0x286d28(0x180)] } }, () => {
            const _0x5990d8 = _0x286d28;

            _0x3d524a = _0x2cee23[_0x5990d8(0x179)](generatePayload, {
                'command': _0x5990d8(0x10c),
                'options': {},
                'commandSchema': commandsSchema.get(_0x2cee23[_0x5990d8(0x16b)]),
                'serviceDir': process[_0x5990d8(0x16c)](),
                'configuration': {
                    'service': _0x2cee23.vbRYB,
                    'provider': _0x2cee23[_0x5990d8(0x172)]
                }
            });
        }), _0x2cee23.NyOma(expect, _0x3d524a[_0x286d28(0xf9)][_0x286d28(0x181)]).to.be.null, expect(_0x3d524a.frameworkLocalUserId).to[_0x286d28(0x14b)](_0x286d28(0x10e));
    }), it(_0x2cee23[_0x73c000(0x182)], () => {
        const _0x52b312 = _0x73c000;

        var _0x38bb89;

        _0x2cee23[_0x52b312(0x183)](overrideEnv, { 'variables': { 'SERVERLESS_CI_CD': _0x2cee23.acFEb } }, () => {
            const _0x117836 = _0x52b312;

            _0x38bb89 = _0x2cee23.NyOma(generatePayload, {
                'command': _0x117836(0x10c),
                'options': {},
                'commandSchema': commandsSchema[_0x117836(0x141)](_0x2cee23[_0x117836(0x16b)]),
                'serviceDir': process[_0x117836(0x16c)](),
                'configuration': {
                    'service': _0x2cee23[_0x117836(0x15b)],
                    'provider': _0x2cee23[_0x117836(0x172)]
                }
            });
        }), expect(_0x38bb89[_0x52b312(0xfa)]).to.equal(_0x52b312(0x184));
    }), _0x2cee23[_0x73c000(0x185)](it, _0x2cee23.TwWIL, () => {
        const _0x251b92 = _0x73c000;
        const _0x39b0bf = {
            'JvsTX': function (_0x456dad, _0x421b7c) {
                const _0x196c93 = _0x4530;

                return _0x2cee23[_0x196c93(0x179)](_0x456dad, _0x421b7c);
            },
            'RwWVW': _0x251b92(0x10c),
            'CtPft': _0x251b92(0x108),
            'oRcor': _0x2cee23[_0x251b92(0x172)]
        };

        var _0x1781ab;

        _0x2cee23[_0x251b92(0x183)](overrideEnv, { 'variables': { 'SEED_APP_NAME': _0x2cee23[_0x251b92(0x186)] } }, () => {
            const _0x195860 = _0x251b92;

            _0x1781ab = _0x39b0bf[_0x195860(0x187)](generatePayload, {
                'command': _0x39b0bf.RwWVW,
                'options': {},
                'commandSchema': commandsSchema.get(_0x39b0bf[_0x195860(0x188)]),
                'serviceDir': process[_0x195860(0x16c)](),
                'configuration': {
                    'service': _0x39b0bf[_0x195860(0x189)],
                    'provider': _0x39b0bf[_0x195860(0x18a)]
                }
            });
        }), expect(_0x1781ab[_0x251b92(0xfa)]).to[_0x251b92(0x14b)]('Seed');
    }), _0x2cee23[_0x73c000(0x18b)](it, _0x2cee23[_0x73c000(0x18c)], () => {
        const _0x82e736 = _0x73c000;

        const _0x1bd240 = _0x2cee23[_0x82e736(0x18d)](generatePayload, {
            'command': _0x2cee23.tSguD,
            'options': {
                'region': 'eu-west-1',
                'format': 'json',
                'path': _0x2cee23[_0x82e736(0x18e)]
            },
            'commandSchema': commandsSchema[_0x82e736(0x141)](_0x2cee23.tSguD),
            'serviceDir': process[_0x82e736(0x16c)](),
            'configuration': {
                'service': _0x82e736(0x108),
                'provider': _0x2cee23[_0x82e736(0x172)]
            }
        });

        _0x2cee23[_0x82e736(0x18d)](expect, new Set(_0x1bd240.commandOptionNames)).to[_0x82e736(0x14a)][_0x82e736(0x14b)](new Set([_0x2cee23[_0x82e736(0x18f)], _0x2cee23[_0x82e736(0x190)], _0x82e736(0xed)]));
    }), _0x2cee23[_0x73c000(0x191)](it, 'Should correctly resolve `constructs` property', () => {
        const _0x2d18b4 = _0x73c000;

        const _0x564493 = _0x2cee23[_0x2d18b4(0x192)](generatePayload, {
            'command': _0x2cee23[_0x2d18b4(0x140)],
            'commandSchema': commandsSchema.get(_0x2d18b4(0x13e)),
            'options': {},
            'serviceDir': process[_0x2d18b4(0x16c)](),
            'configuration': {
                'service': _0x2cee23[_0x2d18b4(0x15b)],
                'provider': _0x2d18b4(0x109),
                'constructs': {
                    'jobs': {
                        'type': _0x2d18b4(0x193),
                        'worker': { 'handler': _0x2cee23.nsNBP }
                    },
                    'another': {
                        'type': _0x2cee23[_0x2d18b4(0x194)],
                        'worker': { 'handler': _0x2d18b4(0x195) }
                    }
                },
                'plugins': [_0x2cee23.uzrtZ]
            }
        });

        expect(_0x564493[_0x2d18b4(0x10c)].constructs).to[_0x2d18b4(0x14a)][_0x2d18b4(0x14b)]([{ 'type': _0x2cee23[_0x2d18b4(0x194)] }, { 'type': _0x2cee23[_0x2d18b4(0x194)] }]);
    }), it(_0x73c000(0x196), () => {
        const _0x2de069 = _0x73c000;

        const _0x443983 = generatePayload({
            'command': _0x2cee23[_0x2de069(0x140)],
            'commandSchema': commandsSchema[_0x2de069(0x141)](_0x2cee23[_0x2de069(0x140)]),
            'options': {},
            'serviceDir': process[_0x2de069(0x16c)](),
            'configuration': {
                'service': _0x2cee23[_0x2de069(0x15b)],
                'provider': _0x2cee23.XeLVs,
                'configValidationMode': _0x2cee23[_0x2de069(0x197)]
            }
        });

        _0x2cee23.xytuu(expect, _0x443983.config.configValidationMode).to[_0x2de069(0x14b)](_0x2cee23[_0x2de069(0x197)]);
    }), _0x2cee23[_0x73c000(0x198)](it, _0x2cee23.Hzgvi, () => {
        const _0x1397c0 = _0x73c000;

        var _0x4085a1;

        _0x2cee23[_0x1397c0(0x133)](overrideEnv, {
            'variables': {
                'AWS_ACCESS_KEY_ID': _0x2cee23[_0x1397c0(0x199)],
                'AWS_SECRET_ACCESS_KEY': _0x2cee23.EGKKm
            }
        }, () => {
            const _0x1c3e2a = _0x1397c0;

            _0x4085a1 = generatePayload({
                'command': _0x2cee23[_0x1c3e2a(0x140)],
                'options': {},
                'commandSchema': commandsSchema.get(_0x2cee23[_0x1c3e2a(0x140)]),
                'serviceDir': process[_0x1c3e2a(0x16c)](),
                'configuration': {
                    'service': _0x2cee23.vbRYB,
                    'provider': _0x2cee23[_0x1c3e2a(0x172)]
                }
            });
        }), _0x2cee23[_0x1397c0(0x192)](expect, _0x4085a1[_0x1397c0(0x19a)]).to.equal(true);
    }), _0x2cee23[_0x73c000(0x19b)](it, _0x2cee23[_0x73c000(0x19c)], () => {
        const _0x3330fd = _0x73c000;

        var _0x212acd;

        overrideEnv({
            'variables': {
                'AWS_ACCESS_KEY_ID': _0x2cee23[_0x3330fd(0x199)],
                'AWS_SECRET_ACCESS_KEY': _0x2cee23[_0x3330fd(0x19d)]
            }
        }, () => {
            const _0xe2c3f7 = _0x3330fd;

            _0x212acd = generatePayload({
                'command': _0x2cee23[_0xe2c3f7(0x140)],
                'options': {},
                'commandSchema': commandsSchema[_0xe2c3f7(0x141)](_0x2cee23[_0xe2c3f7(0x140)]),
                'serviceDir': process[_0xe2c3f7(0x16c)](),
                'configuration': {
                    'service': _0x2cee23[_0xe2c3f7(0x15b)],
                    'provider': _0x2cee23[_0xe2c3f7(0x19e)]
                }
            });
        }), expect(_0x212acd.hasLocalCredentials).to[_0x3330fd(0x14b)](false);
    }), _0x2cee23.AyBRu(it, _0x2cee23[_0x73c000(0x19f)], () => {
        const _0x25a663 = _0x73c000;

        const _0x4d883d = _0x2cee23[_0x25a663(0x192)](generatePayload, {
            'command': _0x2cee23[_0x25a663(0x140)],
            'options': {},
            'commandSchema': commandsSchema[_0x25a663(0x141)](_0x2cee23[_0x25a663(0x140)]),
            'serviceDir': process.cwd(),
            'configuration': {
                'service': _0x2cee23[_0x25a663(0x15b)],
                'provider': _0x2cee23[_0x25a663(0x172)]
            },
            'commandUsage': [{
                'name': _0x2cee23.nXQUy,
                'history': [{
                    'key': _0x2cee23[_0x25a663(0x1a0)],
                    'value': _0x2cee23[_0x25a663(0x1a1)],
                    'timestamp': 0x17aa2502800
                }, {
                    'key': _0x2cee23[_0x25a663(0x1a2)],
                    'value': 'otherAnswer',
                    'timestamp': 0x17aa2502800
                }]
            }]
        });

        _0x2cee23[_0x25a663(0x192)](expect, _0x4d883d[_0x25a663(0x1a3)]).to[_0x25a663(0x14a)][_0x25a663(0x14b)]([{
            'name': _0x2cee23[_0x25a663(0x1a4)],
            'history': [{
                'key': _0x2cee23[_0x25a663(0x1a0)],
                'value': _0x2cee23.Jtxcs,
                'timestamp': 0x17aa2502800
            }, {
                'key': _0x25a663(0x11d),
                'value': _0x2cee23[_0x25a663(0x1a5)],
                'timestamp': 0x17aa2502800
            }]
        }]);
    }), _0x2cee23[_0x73c000(0x1a6)](it, _0x2cee23[_0x73c000(0x1a7)], () => {
        const _0x4c1e1e = _0x73c000;

        const _0xa6b1da = generatePayload({
            'command': _0x2cee23.tSguD,
            'options': {},
            'commandSchema': commandsSchema[_0x4c1e1e(0x141)](_0x4c1e1e(0x13e)),
            'serviceDir': process[_0x4c1e1e(0x16c)](),
            'configuration': {
                'service': 'foo',
                'provider': _0x2cee23[_0x4c1e1e(0x172)]
            },
            'commandUsage': [],
            'variableSources': new Set([_0x2cee23.seyZj, _0x2cee23.CFPUE])
        });

        _0x2cee23[_0x4c1e1e(0x12d)](expect, _0xa6b1da[_0x4c1e1e(0x10c)][_0x4c1e1e(0x1a8)]).to.deep[_0x4c1e1e(0x14b)]([_0x2cee23[_0x4c1e1e(0x1a9)], _0x2cee23[_0x4c1e1e(0x1aa)]]);
    });
});
