'use strict';
const _0x30e6 = [
    'arn:aws:sts::123456789012:assumed-role/ROLE-NAME/VWXYZ',
    'getAccountInfo',
    'accountId',
    'partition',
    'should\x20return\x20the\x20AWS\x20account\x20id',
    '12345678',
    'getAccountId',
    'should\x20return\x20false\x20by\x20default',
    'aws-s3-accelerate',
    'isS3TransferAccelerationEnabled',
    'should\x20return\x20true\x20when\x20CLI\x20option\x20is\x20provided',
    'options',
    '#disableTransferAccelerationForCurrentDeploy()',
    'should\x20remove\x20the\x20corresponding\x20option\x20for\x20the\x20current\x20deploy',
    'disableTransferAccelerationForCurrentDeploy',
    'test/unit/lib/plugins/aws/provider.test.js',
    '#getProviderName\x20and\x20#sessionCache',
    '123',
    'credentials',
    'describeStacks',
    'accessKeyId',
    'keyId',
    'secret',
    'print',
    '`AwsProvider.getProviderName()`\x20should\x20resolve\x20provider\x20name',
    'getCredentials',
    'getProvider',
    'ensureDir',
    'resolve',
    'homedir',
    './.aws',
    'outputFile',
    '\x0a[default]\x0aaws_access_key_id\x20=\x20DEFAULTKEYID\x0aaws_secret_access_key\x20=\x20DEFAULTSECRET\x0a\x0a[notDefault]\x0aaws_access_key_id\x20=\x20NOTDEFAULTKEYID\x0aaws_secret_access_key\x20=\x20NOTDEFAULTSECRET\x0a\x0a[notDefaultWithRole]\x0asource_profile\x20=\x20notDefault\x0arole_arn\x20=\x20NOTDEFAULTWITHROLEROLE\x0a',
    'should\x20get\x20credentials\x20from\x20default\x20AWS\x20profile',
    'DEFAULTKEYID',
    'should\x20get\x20credentials\x20from\x20custom\x20default\x20AWS\x20profile,\x20set\x20by\x20AWS_DEFAULT_PROFILE',
    'AWS_DEFAULT_PROFILE',
    'notDefault',
    'NOTDEFAULTKEYID',
    'assume\x20role\x20with\x20provider.profile',
    'notDefaultWithRole',
    'profile',
    'should\x20accept\x20a\x20role\x20to\x20assume\x20on\x20credentials',
    'roleArn',
    'NOTDEFAULTWITHROLEROLE',
    'should\x20get\x20credentials\x20from\x20environment\x20variables',
    'ENVKEYID',
    'AWS_SECRET_ACCESS_KEY',
    'profile\x20with\x20non\x20default\x20credentials\x20file',
    './custom_credentials',
    '\x0a[default]\x0aaws_access_key_id\x20=\x20DEFAULTKEYID\x0aaws_secret_access_key\x20=\x20DEFAULTSECRET\x0a\x0a[customProfile]\x0aaws_access_key_id\x20=\x20CUSTOMKEYID\x0aaws_secret_access_key\x20=\x20CUSTOMSECRET\x0a',
    'AWS_PROFILE',
    'customProfile',
    'AWS_SHARED_CREDENTIALS_FILE',
    'remove',
    'should\x20get\x20credentials\x20from\x20AWS_SHARED_CREDENTIALS_FILE\x20environment\x20variable',
    'CUSTOMKEYID',
    'should\x20get\x20credentials\x20from\x20stage\x20specific\x20environment\x20variables',
    'TESTSTAGEACCESSKEYID',
    'should\x20get\x20credentials\x20from\x20AWS_{stage}_PROFILE\x20environment\x20variable',
    'testStage',
    'aws:kms',
    'signatureVersion',
    'should\x20throw\x20an\x20error\x20if\x20a\x20non-existent\x20profile\x20is\x20set',
    '#getRegion()',
    'getRegion',
    'should\x20allow\x20to\x20override\x20via\x20`provider.region`',
    'eu-central-1',
    'us-west-1',
    'should\x20allow\x20to\x20set\x20via\x20`provider.profile`',
    'getProfile',
    'test-profile',
    'cli-override',
    'should\x20allow\x20to\x20set\x20via\x20CLI\x20`--aws-profile`\x20param',
    'aws-override',
    'should\x20put\x20all\x20artifacts\x20in\x20namespaced\x20folder',
    'function',
    'package',
    'filter',
    'Type',
    'length',
    'greaterThanOrEqual',
    'Code',
    'S3Key',
    'string',
    'startsWith',
    'should\x20support\x20custom\x20namespaced\x20folder',
    'test-prefix',
    'AWS::Lambda::Function',
    'Properties',
    'test-prefix/',
    '#getAlbTargetGroupPrefix()',
    'should\x20support\x20`provider.alb.targetGroupPrefix`',
    '50dc6c495c0c9188',
    '/f2f7dc8efc522ab2',
    'AWS::ElasticLoadBalancingV2::TargetGroup',
    'and',
    'satisfy',
    'a-prefix',
    '#getStage()',
    'getStage',
    'should\x20allow\x20to\x20override\x20via\x20`provider.stage`',
    'staging',
    'production',
    'when\x20resolving\x20images',
    'should\x20fail\x20if\x20`functions[].image`\x20references\x20image\x20with\x20both\x20path\x20and\x20uri',
    '000000000000.dkr.ecr.sa-east-1.amazonaws.com/test-lambda-docker@sha256:6bb600b4d6e1d7cf521097177dd0c4e9ea373edb91984a505333be8ac9455d38',
    'invalidimage',
    'eventually',
    'property',
    'code',
    'should\x20fail\x20if\x20`functions[].image`\x20references\x20image\x20without\x20path\x20and\x20uri',
    'ECR_IMAGE_NEITHER_URI_NOR_PATH_DEFINED_ERROR',
    'should\x20fail\x20if\x20`functions[].image`\x20references\x20image\x20from\x20`provider.ecr.images`\x20that\x20has\x20invalid\x20path',
    'ecr',
    './invalid',
    'rejected',
    'should\x20fail\x20if\x20`functions[].image`\x20references\x20image\x20not\x20defined\x20in\x20`provider.ecr.images`',
    'undefinedimage',
    'REFERENCED_FUNCTION_IMAGE_NOT_DEFINED_IN_PROVIDER',
    'should\x20fail\x20if\x20both\x20uri\x20and\x20name\x20is\x20provided\x20for\x20an\x20image',
    'baseimage',
    'find',
    'Ref',
    'with\x20`functions[].image`\x20referencing\x20existing\x20images',
    '000000000000.dkr.ecr.sa-east-1.amazonaws.com/test-lambda-docker@sha256:',
    '000000000000.dkr.ecr.sa-east-1.amazonaws.com/test-lambda/repo-docker:stable',
    'imagewithexplicituri',
    'imagewithimplicituri',
    'Resources',
    'should\x20support\x20`functions[].image`\x20with\x20implicit\x20uri\x20with\x20sha',
    'functions',
    'fnImage',
    'getLambdaLogicalId',
    'Handler',
    'image',
    'lastIndexOf',
    'slice',
    'sha256:',
    'CodeSha256',
    'should\x20support\x20`functions[].image`\x20with\x20explicit\x20uri\x20with\x20sha',
    'fnImageWithExplicitUri',
    'deep',
    'uri',
    'Runtime',
    'fnImageWithTag',
    'calledWith',
    'stable',
    '000000000000',
    'test-lambda-docker',
    'should\x20support\x20`functions[].image`\x20with\x20tag\x20and\x20repository\x20name\x20with\x20slash',
    'fnImageWithTagAndRepoWithSlashes',
    'test-lambda/repo-docker',
    'should\x20support\x20`functions[].image`\x20that\x20references\x20provider.ecr.images\x20defined\x20with\x20explicit\x20uri',
    'should\x20support\x20`functions[].image`\x20that\x20references\x20provider.ecr.images\x20defined\x20with\x20implicit\x20uri',
    '6bb600b4d6e1d7cf521097177dd0c4e9ea373edb91984a505333be8ac9455d38',
    'YXdzOmRvY2tlcmF1dGh0b2tlbg==',
    'https://',
    'ffffffff-ffff-ffff-ffff-ffffffffffff',
    'XXXXXXXXXXXXXXXXXXXXX',
    '999999999999',
    'returns',
    'digest:\x20sha256:',
    '\x20size:\x201787',
    'reset',
    'should\x20work\x20correctly\x20when\x20repository\x20exists\x20beforehand',
    'ECR',
    '@sha256:',
    'docker',
    '--version',
    'login',
    'AWS',
    '--password',
    'dockerauthtoken',
    'build',
    'getEcrRepositoryName',
    'tag',
    ':baseimage',
    'push',
    'should\x20work\x20correctly\x20when\x20repository\x20does\x20not\x20exist\x20beforehand\x20and\x20scanOnPush\x20is\x20set',
    'throws',
    'RepositoryNotFoundException',
    'Dockerfile.dev',
    'ImageUri',
    'imageScanningConfiguration',
    'onCall',
    'no\x20basic\x20auth\x20credentials',
    'notCalled',
    'Dockerfile',
    '--username',
    'should\x20login\x20and\x20retry\x20when\x20docker\x20push\x20fails\x20with\x20token\x20has\x20expired\x20error',
    'authorization\x20token\x20has\x20expired',
    'should\x20emit\x20warning\x20if\x20docker\x20login\x20stores\x20unencrypted\x20credentials',
    'your\x20password\x20will\x20be\x20stored\x20unencrypted',
    'WARNING:\x20Docker\x20authentication\x20token\x20will\x20be\x20stored\x20unencrypted\x20in\x20docker\x20config.',
    'should\x20work\x20correctly\x20when\x20image\x20is\x20defined\x20with\x20implicit\x20path\x20in\x20provider',
    'AWS::Lambda::Version',
    'FunctionName',
    'true',
    'my-image:latest',
    'join',
    'should\x20work\x20correctly\x20when\x20image\x20is\x20defined\x20with\x20`buildArgs`\x20set',
    'TESTVAL',
    'TESTKEY=TESTVAL',
    'should\x20fail\x20when\x20docker\x20command\x20is\x20not\x20available',
    'DOCKER_COMMAND_NOT_AVAILABLE',
    'should\x20fail\x20when\x20docker\x20build\x20fails',
    'DOCKER_BUILD_ERROR',
    'DOCKER_TAG_ERROR',
    'should\x20fail\x20when\x20docker\x20push\x20fails',
    'DOCKER_PUSH_ERROR',
    'should\x20fail\x20when\x20docker\x20login\x20fails',
    'DOCKER_LOGIN_ERROR',
    '134427FRLRIj',
    '11gxqxIb',
    '1619yJdMBB',
    '743TlEYVS',
    '116531gxbjJB',
    '235112yZbwXt',
    '1188863whZImf',
    '1584469IHNizh',
    '6268218yhWGkn',
    'path',
    'fs-extra',
    'proxyquire',
    'sinon',
    '../../../../../lib/plugins/aws/provider',
    '../../../../utils/run-serverless',
    'use',
    'expect',
    'AwsProvider',
    'dev',
    'us-east-1',
    'cli',
    'classes',
    'CLI',
    '#constructor()',
    'should\x20set\x20Serverless\x20instance',
    'undefined',
    'provider',
    'stage\x20name\x20validation',
    'my_stage',
    '${opt:stage,\x20\x27prod\x27}',
    'forEach',
    'should\x20not\x20throw\x20an\x20error\x20before\x20variable\x20population\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20even\x20if\x20http\x20event\x20is\x20present\x20and\x20stage\x20is\x20',
    'new-service',
    'aws',
    'foo',
    'GET',
    'service',
    'Service',
    'not',
    'throw',
    'deploymentBucket\x20configuration',
    'should\x20do\x20nothing\x20if\x20not\x20defined',
    'deploymentBucket',
    'serverless',
    'equal',
    'should\x20do\x20nothing\x20if\x20the\x20value\x20is\x20a\x20string',
    'my.deployment.bucket',
    'values',
    '#getValues',
    'should\x20return\x20an\x20array\x20of\x20values\x20given\x20paths\x20to\x20them',
    'eql',
    '#firstValue',
    'value',
    'firstValue',
    'should\x20ignore\x20entries\x20with\x20an\x20undefined\x20\x27value\x27\x20attribute',
    'cloneDeep',
    'should\x20return\x20the\x20last\x20value',
    'should\x20return\x20the\x20last\x20object\x20if\x20none\x20have\x20valid\x20values',
    '#request()',
    'stub',
    'resolves',
    'memoized',
    'noCallThru',
    '../../../../../lib/plugins/aws/provider.js',
    'should\x20pass\x20resolved\x20credentials\x20as\x20expected',
    'cachedCredentials',
    'secretAccessKey',
    'sessionToken',
    'request',
    'getObject',
    'args',
    'then',
    'have',
    'been',
    'called',
    'should\x20detect\x20incompatible\x20legacy\x20use\x20of\x20aws\x20request\x20and\x20print\x20a\x20debug\x20warning',
    'env',
    'SLS_DEBUG',
    'incompatible\x20string\x20option',
    'WARNING:\x20Inappropriate\x20call\x20of\x20provider.request()',
    '#getServerlessDeploymentBucketName()',
    'should\x20return\x20the\x20name\x20of\x20the\x20serverless\x20deployment\x20bucket',
    'serverlessDeploymentBucketName',
    'calledOnce',
    'calledWithExactly',
    'CloudFormation',
    'describeStackResource',
    'naming',
    'restore',
    'should\x20return\x20the\x20name\x20of\x20the\x20custom\x20deployment\x20bucket',
    'custom-bucket',
    '#getAccountInfo()',
    '12345678-1234-1234-1234-123456789012',
    'ABCDEFGHIJKLMNOPQRSTU:VWXYZ'
];
const _0x5a39c2 = _0x4bc1;
(function (_0x175477, _0x2d8e60) {
    const _0x5ac59c = _0x4bc1;
    while (!![]) {
        try {
            const _0x4ce230 = parseInt(_0x5ac59c(0xb0)) * -parseInt(_0x5ac59c(0xb1)) + -parseInt(_0x5ac59c(0xb2)) * parseInt(_0x5ac59c(0xb3)) + -parseInt(_0x5ac59c(0xb4)) + parseInt(_0x5ac59c(0xb5)) + -parseInt(_0x5ac59c(0xb6)) + -parseInt(_0x5ac59c(0xb7)) + parseInt(_0x5ac59c(0xb8));
            if (_0x4ce230 === _0x2d8e60)
                break;
            else
                _0x175477['push'](_0x175477['shift']());
        } catch (_0x1f5d70) {
            _0x175477['push'](_0x175477['shift']());
        }
    }
}(_0x30e6, 0xe380d));
function _0x4bc1(_0x3cd0c1, _0x591ca9) {
    return _0x4bc1 = function (_0x30e617, _0x4bc138) {
        _0x30e617 = _0x30e617 - 0xb0;
        let _0x46b2d2 = _0x30e6[_0x30e617];
        return _0x46b2d2;
    }, _0x4bc1(_0x3cd0c1, _0x591ca9);
}
const _ = require('lodash'), chai = require('chai'), path = require(_0x5a39c2(0xb9)), fs = require(_0x5a39c2(0xba)), os = require('os'), proxyquire = require(_0x5a39c2(0xbb)), sinon = require(_0x5a39c2(0xbc)), overrideEnv = require('process-utils/override-env'), AwsProvider = require(_0x5a39c2(0xbd)), Serverless = require('../../../../../lib/Serverless'), runServerless = require(_0x5a39c2(0xbe));
chai[_0x5a39c2(0xbf)](require('chai-as-promised')), chai['use'](require('sinon-chai'));
const expect = chai[_0x5a39c2(0xc0)];
describe(_0x5a39c2(0xc1), () => {
    const _0xc97849 = _0x5a39c2;
    let _0x9d2f57, _0x2cca2f, _0x418e4e;
    const _0x1fbec2 = {
        'stage': _0xc97849(0xc2),
        'region': _0xc97849(0xc3)
    };
    beforeEach(() => {
        const _0x12a16e = _0xc97849;
        ({restoreEnv: _0x418e4e} = overrideEnv(), _0x2cca2f = new Serverless(_0x1fbec2), _0x2cca2f[_0x12a16e(0xc4)] = new _0x2cca2f[(_0x12a16e(0xc5))][(_0x12a16e(0xc6))](), _0x9d2f57 = new AwsProvider(_0x2cca2f, _0x1fbec2));
    }), afterEach(() => _0x418e4e()), describe(_0xc97849(0xc7), () => {
        const _0x22435f = _0xc97849;
        it(_0x22435f(0xc8), () => {
            const _0x4048c3 = _0x22435f;
            expect(typeof _0x9d2f57['serverless'])['to']['not']['equal'](_0x4048c3(0xc9));
        }), it('should\x20set\x20the\x20provider\x20property', () => {
            const _0x507a93 = _0x22435f;
            expect(_0x9d2f57[_0x507a93(0xca)])['to']['equal'](_0x9d2f57);
        }), describe(_0x22435f(0xcb), () => {
            const _0x1f3c7d = _0x22435f, _0x9bcd8d = [
                    'myStage',
                    'my-stage',
                    _0x1f3c7d(0xcc),
                    _0x1f3c7d(0xcd)
                ];
            _0x9bcd8d[_0x1f3c7d(0xce)](_0xf30744 => {
                const _0x30976e = _0x1f3c7d;
                it(_0x30976e(0xcf) + _0xf30744, () => {
                    const _0x1607d2 = _0x30976e, _0x584462 = { 'stage': _0xf30744 };
                    _0x2cca2f = new Serverless(_0x584462);
                    const _0x3e435d = {
                        'service': _0x1607d2(0xd0),
                        'provider': {
                            'name': _0x1607d2(0xd1),
                            'stage': _0xf30744
                        },
                        'functions': {
                            'first': {
                                'events': [{
                                        'http': {
                                            'path': _0x1607d2(0xd2),
                                            'method': _0x1607d2(0xd3)
                                        }
                                    }]
                            }
                        }
                    };
                    _0x2cca2f[_0x1607d2(0xd4)] = new _0x2cca2f['classes'][(_0x1607d2(0xd5))](_0x2cca2f, _0x3e435d), expect(() => new AwsProvider(_0x2cca2f, _0x584462))['to'][_0x1607d2(0xd6)][_0x1607d2(0xd7)](Error);
                });
            });
        }), describe(_0x22435f(0xd8), () => {
            const _0x330d43 = _0x22435f;
            it(_0x330d43(0xd9), () => {
                const _0x5683c8 = _0x330d43;
                _0x2cca2f[_0x5683c8(0xd4)]['provider'][_0x5683c8(0xda)] = undefined;
                const _0xd1c867 = new AwsProvider(_0x2cca2f, _0x1fbec2);
                expect(_0xd1c867[_0x5683c8(0xdb)][_0x5683c8(0xd4)][_0x5683c8(0xca)]['deploymentBucket'])['to'][_0x5683c8(0xdc)](undefined);
            }), it(_0x330d43(0xdd), () => {
                const _0x3bc281 = _0x330d43;
                _0x2cca2f[_0x3bc281(0xd4)][_0x3bc281(0xca)][_0x3bc281(0xda)] = 'my.deployment.bucket';
                const _0xd88ac8 = new AwsProvider(_0x2cca2f, _0x1fbec2);
                expect(_0xd88ac8[_0x3bc281(0xdb)][_0x3bc281(0xd4)][_0x3bc281(0xca)][_0x3bc281(0xda)])['to'][_0x3bc281(0xdc)](_0x3bc281(0xde));
            });
        });
    }), describe(_0xc97849(0xdf), () => {
        const _0x4d5f99 = _0xc97849, _0x76c1fc = {
                'a': 'b',
                'c': {
                    'd': 'e',
                    'f': { 'g': 'h' }
                }
            }, _0xa48ee0 = [
                ['a'],
                [
                    'c',
                    'd'
                ],
                [
                    'c',
                    'f',
                    'g'
                ]
            ], _0x51c190 = [
                {
                    'path': _0xa48ee0[0x0],
                    'value': _0x76c1fc['a']
                },
                {
                    'path': _0xa48ee0[0x1],
                    'value': _0x76c1fc['c']['d']
                },
                {
                    'path': _0xa48ee0[0x2],
                    'value': _0x76c1fc['c']['f']['g']
                }
            ];
        describe(_0x4d5f99(0xe0), () => {
            const _0xb42794 = _0x4d5f99;
            it(_0xb42794(0xe1), () => {
                const _0x1a3ebb = _0xb42794;
                expect(_0x9d2f57['getValues'](_0x76c1fc, _0xa48ee0))['to'][_0x1a3ebb(0xe2)](_0x51c190);
            });
        }), describe(_0x4d5f99(0xe3), () => {
            const _0x55e652 = _0x4d5f99;
            it('should\x20ignore\x20entries\x20without\x20a\x20\x27value\x27\x20attribute', () => {
                const _0x5808ea = _0x4bc1, _0x223df6 = _['cloneDeep'](_0x51c190);
                delete _0x223df6[0x0][_0x5808ea(0xe4)], delete _0x223df6[0x2][_0x5808ea(0xe4)], expect(_0x9d2f57[_0x5808ea(0xe5)](_0x223df6))['to'][_0x5808ea(0xe2)](_0x51c190[0x1]);
            }), it(_0x55e652(0xe6), () => {
                const _0x366e75 = _0x55e652, _0x3678c4 = _[_0x366e75(0xe7)](_0x51c190);
                _0x3678c4[0x0][_0x366e75(0xe4)] = undefined, _0x3678c4[0x2][_0x366e75(0xe4)] = undefined, expect(_0x9d2f57['firstValue'](_0x3678c4))['to'][_0x366e75(0xe2)](_0x51c190[0x1]);
            }), it('should\x20return\x20the\x20first\x20value', () => {
                const _0x37c12f = _0x55e652;
                expect(_0x9d2f57['firstValue'](_0x51c190))['to'][_0x37c12f(0xdc)](_0x51c190[0x0]);
            }), it('should\x20return\x20the\x20middle\x20value', () => {
                const _0x103706 = _0x55e652, _0x520800 = _['cloneDeep'](_0x51c190);
                delete _0x520800[0x0]['value'], delete _0x520800[0x2][_0x103706(0xe4)], expect(_0x9d2f57[_0x103706(0xe5)](_0x520800))['to'][_0x103706(0xdc)](_0x520800[0x1]);
            }), it(_0x55e652(0xe8), () => {
                const _0xb217ed = _0x55e652, _0x1f5d51 = _[_0xb217ed(0xe7)](_0x51c190);
                delete _0x1f5d51[0x0][_0xb217ed(0xe4)], delete _0x1f5d51[0x1][_0xb217ed(0xe4)], expect(_0x9d2f57[_0xb217ed(0xe5)](_0x1f5d51))['to'][_0xb217ed(0xdc)](_0x1f5d51[0x2]);
            }), it(_0x55e652(0xe9), () => {
                const _0x199511 = _0x55e652, _0x5ce5ac = _[_0x199511(0xe7)](_0x51c190);
                delete _0x5ce5ac[0x0][_0x199511(0xe4)], delete _0x5ce5ac[0x1][_0x199511(0xe4)], delete _0x5ce5ac[0x2]['value'], expect(_0x9d2f57[_0x199511(0xe5)](_0x5ce5ac))['to'][_0x199511(0xdc)](_0x5ce5ac[0x2]);
            });
        });
    }), describe(_0xc97849(0xea), () => {
        const _0xc91f89 = _0xc97849;
        let _0x6b57d1, _0x50149b, _0x1200b9;
        beforeEach(() => {
            const _0x68980b = _0x4bc1;
            _0x1200b9 = sinon[_0x68980b(0xeb)](), _0x6b57d1 = sinon[_0x68980b(0xeb)]()[_0x68980b(0xec)](), _0x6b57d1[_0x68980b(0xed)] = sinon[_0x68980b(0xeb)]()['resolves']();
            const _0x201124 = proxyquire[_0x68980b(0xee)]()['load'](_0x68980b(0xef), {
                '../../aws/request': _0x6b57d1,
                '@serverless/utils/log': _0x1200b9
            });
            _0x50149b = new _0x201124(_0x2cca2f, _0x1fbec2);
        }), afterEach(() => {
        }), it(_0xc91f89(0xf0), async () => {
            const _0x2039ea = _0xc91f89;
            _0x50149b[_0x2039ea(0xf1)] = {
                'accessKeyId': 'accessKeyId',
                'secretAccessKey': _0x2039ea(0xf2),
                'sessionToken': _0x2039ea(0xf3)
            }, await _0x50149b[_0x2039ea(0xf4)]('S3', _0x2039ea(0xf5), {}), expect(_0x6b57d1[_0x2039ea(0xf6)][0x0][0x0])['to']['deep']['equal']({
                'name': 'S3',
                'params': {
                    ..._0x50149b[_0x2039ea(0xf1)],
                    'region': _0x2039ea(0xc3),
                    'isS3TransferAccelerationEnabled': ![]
                }
            });
        }), it('should\x20trigger\x20the\x20expected\x20AWS\x20SDK\x20invokation', () => {
            const _0x3ed231 = _0xc91f89;
            return _0x50149b[_0x3ed231(0xf4)]('S3', 'getObject', {})[_0x3ed231(0xf7)](() => {
                const _0x1b1ee6 = _0x3ed231;
                expect(_0x6b57d1)['to'][_0x1b1ee6(0xf8)]['been']['calledOnce'];
            });
        }), it('should\x20use\x20local\x20cache\x20when\x20using\x20{useCache:\x20true}', () => {
            const _0x5cdefa = _0xc91f89;
            return _0x50149b[_0x5cdefa(0xf4)]('S3', _0x5cdefa(0xf5), {}, { 'useCache': !![] })[_0x5cdefa(0xf7)](() => _0x50149b[_0x5cdefa(0xf4)]('S3', _0x5cdefa(0xf5), {}, { 'useCache': !![] }))['then'](() => {
                const _0x165c3c = _0x5cdefa;
                expect(_0x6b57d1)['to'][_0x165c3c(0xd6)][_0x165c3c(0xf8)][_0x165c3c(0xf9)][_0x165c3c(0xfa)], expect(_0x6b57d1['memoized'])['to']['have']['been']['calledTwice'];
            });
        }), it(_0xc91f89(0xfb), () => {
            const _0x56e50e = _0xc91f89;
            return process[_0x56e50e(0xfc)][_0x56e50e(0xfd)] = !![], _0x50149b[_0x56e50e(0xf4)]('S3', _0x56e50e(0xf5), {}, _0x56e50e(0xfe))[_0x56e50e(0xf7)](() => {
                const _0x2483c1 = _0x56e50e;
                expect(_0x1200b9)['to'][_0x2483c1(0xf8)][_0x2483c1(0xf9)]['calledWith'](_0x2483c1(0xff));
            })['finally'](() => {
                const _0x4bdc86 = _0x56e50e;
                process[_0x4bdc86(0xfc)][_0x4bdc86(0xfd)] = ![];
            });
        });
    }), describe(_0xc97849(0x100), () => {
        const _0x32f06e = _0xc97849;
        it(_0x32f06e(0x101), () => {
            const _0x176d1a = _0x32f06e, _0x38f951 = sinon['stub'](_0x9d2f57, _0x176d1a(0xf4))[_0x176d1a(0xec)]({ 'StackResourceDetail': { 'PhysicalResourceId': _0x176d1a(0x102) } });
            return _0x9d2f57['getServerlessDeploymentBucketName']()[_0x176d1a(0xf7)](_0x116c85 => {
                const _0x19d81a = _0x176d1a;
                expect(_0x116c85)['to'][_0x19d81a(0xdc)](_0x19d81a(0x102)), expect(_0x38f951[_0x19d81a(0x103)])['to']['be']['equal'](!![]), expect(_0x38f951[_0x19d81a(0x104)](_0x19d81a(0x105), _0x19d81a(0x106), {
                    'StackName': _0x9d2f57['naming']['getStackName'](),
                    'LogicalResourceId': _0x9d2f57[_0x19d81a(0x107)]['getDeploymentBucketLogicalId']()
                }))['to']['be'][_0x19d81a(0xdc)](!![]), _0x9d2f57[_0x19d81a(0xf4)][_0x19d81a(0x108)]();
            });
        }), it(_0x32f06e(0x109), () => {
            const _0x50ad5b = _0x32f06e;
            _0x9d2f57[_0x50ad5b(0xdb)][_0x50ad5b(0xd4)][_0x50ad5b(0xca)][_0x50ad5b(0xda)] = _0x50ad5b(0x10a);
            const _0x19ca87 = sinon[_0x50ad5b(0xeb)](_0x9d2f57, 'request')[_0x50ad5b(0xec)]({ 'StackResourceDetail': { 'PhysicalResourceId': _0x50ad5b(0x102) } });
            return _0x9d2f57['getServerlessDeploymentBucketName']()[_0x50ad5b(0xf7)](_0x274a96 => {
                const _0x2b5450 = _0x50ad5b;
                expect(_0x19ca87[_0x2b5450(0xfa)])['to']['be'][_0x2b5450(0xdc)](![]), expect(_0x274a96)['to'][_0x2b5450(0xdc)](_0x2b5450(0x10a)), _0x9d2f57[_0x2b5450(0xf4)]['restore']();
            });
        });
    }), describe(_0xc97849(0x10b), () => {
        it('should\x20return\x20the\x20AWS\x20account\x20id\x20and\x20partition', () => {
            const _0x2231fd = _0x4bc1, _0x5c3a70 = '12345678', _0x432634 = _0x2231fd(0xd1), _0x55e991 = sinon[_0x2231fd(0xeb)](_0x9d2f57, 'request')['resolves']({
                    'ResponseMetadata': { 'RequestId': _0x2231fd(0x10c) },
                    'UserId': _0x2231fd(0x10d),
                    'Account': _0x5c3a70,
                    'Arn': _0x2231fd(0x10e)
                });
            return _0x9d2f57[_0x2231fd(0x10f)]()[_0x2231fd(0xf7)](_0x785dc2 => {
                const _0x58584e = _0x2231fd;
                expect(_0x55e991[_0x58584e(0x103)])['to']['equal'](!![]), expect(_0x785dc2[_0x58584e(0x110)])['to'][_0x58584e(0xdc)](_0x5c3a70), expect(_0x785dc2[_0x58584e(0x111)])['to'][_0x58584e(0xdc)](_0x432634), _0x9d2f57[_0x58584e(0xf4)][_0x58584e(0x108)]();
            });
        });
    }), describe('#getAccountId()', () => {
        const _0x4e3b3b = _0xc97849;
        it(_0x4e3b3b(0x112), () => {
            const _0x217a75 = _0x4e3b3b, _0x22c005 = _0x217a75(0x113), _0x5b75e6 = sinon[_0x217a75(0xeb)](_0x9d2f57, _0x217a75(0xf4))[_0x217a75(0xec)]({
                    'ResponseMetadata': { 'RequestId': _0x217a75(0x10c) },
                    'UserId': _0x217a75(0x10d),
                    'Account': _0x22c005,
                    'Arn': _0x217a75(0x10e)
                });
            return _0x9d2f57[_0x217a75(0x114)]()[_0x217a75(0xf7)](_0x491381 => {
                const _0x3df81c = _0x217a75;
                expect(_0x5b75e6[_0x3df81c(0x103)])['to'][_0x3df81c(0xdc)](!![]), expect(_0x491381)['to'][_0x3df81c(0xdc)](_0x22c005), _0x9d2f57[_0x3df81c(0xf4)][_0x3df81c(0x108)]();
            });
        });
    }), describe('#isS3TransferAccelerationEnabled()', () => {
        const _0x3e08ca = _0xc97849;
        it(_0x3e08ca(0x115), () => {
            const _0x46847b = _0x3e08ca;
            return _0x9d2f57['options'][_0x46847b(0x116)] = undefined, expect(_0x9d2f57[_0x46847b(0x117)]())['to']['equal'](![]);
        }), it(_0x3e08ca(0x118), () => {
            const _0x4b4569 = _0x3e08ca;
            return _0x9d2f57[_0x4b4569(0x119)][_0x4b4569(0x116)] = !![], expect(_0x9d2f57[_0x4b4569(0x117)]())['to'][_0x4b4569(0xdc)](!![]);
        });
    }), describe(_0xc97849(0x11a), () => {
        const _0x48a184 = _0xc97849;
        it(_0x48a184(0x11b), () => {
            const _0x4fdabe = _0x48a184;
            return _0x9d2f57['options'][_0x4fdabe(0x116)] = !![], _0x9d2f57[_0x4fdabe(0x11c)](), expect(_0x9d2f57[_0x4fdabe(0x119)][_0x4fdabe(0x116)])['to']['be']['undefined'];
        });
    });
}), describe(_0x5a39c2(0x11d), () => {
    const _0xc736fd = _0x5a39c2;
    describe(_0xc736fd(0x11e), () => {
        const _0x15d744 = _0xc736fd;
        let _0x4a1b48;
        const _0x14a6fe = _0x15d744(0x11f);
        before(async () => {
            const _0x1da6fa = _0x15d744;
            class _0x58a471 {
                constructor(_0x4b370e) {
                    const _0x4c7e1b = _0x4bc1;
                    this[_0x4c7e1b(0x120)] = _0x4b370e, this[_0x4c7e1b(0x120)][_0x4c7e1b(0x120)][_0x4c7e1b(0xf3)] = _0x14a6fe;
                }
                [_0x1da6fa(0x121)]() {
                    return {
                        'promise': async () => {
                        }
                    };
                }
            }
            class _0x328557 {
                constructor() {
                    const _0x1e12b1 = _0x1da6fa;
                    this[_0x1e12b1(0xf3)] = 'abc', this[_0x1e12b1(0x122)] = _0x1e12b1(0x123), this[_0x1e12b1(0xf2)] = _0x1e12b1(0x124);
                }
            }
            class _0x1f38ab {
                constructor() {
                    const _0xeeb681 = _0x1da6fa;
                    this[_0xeeb681(0xf3)] = _0xeeb681(0xfc), this[_0xeeb681(0x122)] = _0xeeb681(0x123), this[_0xeeb681(0xf2)] = 'secret';
                }
            }
            class _0x2a7e35 {
            }
            const _0x42a2bf = {
                    'aws-sdk': {
                        'SharedIniFileCredentials': _0x328557,
                        'EnvironmentCredentials': _0x1f38ab,
                        'CloudFormation': _0x58a471
                    },
                    'aws-sdk/lib/metadata_service': _0x2a7e35
                }, {serverless: _0x51b911} = await runServerless({
                    'fixture': _0x1da6fa(0xd1),
                    'command': _0x1da6fa(0x125),
                    'modulesCacheStub': _0x42a2bf
                });
            _0x4a1b48 = _0x51b911;
        }), it(_0x15d744(0x126), () => {
            const _0x189a82 = _0x15d744;
            expect(AwsProvider['getProviderName']())['to'][_0x189a82(0xdc)](_0x189a82(0xd1));
        }), it('should\x20retain\x20sessionToken\x20eventually\x20updated\x20internally\x20by\x20SDK', async () => {
            const _0x36d9b4 = _0x15d744;
            expect(_0x4a1b48['getProvider'](_0x36d9b4(0xd1))[_0x36d9b4(0x127)]()[_0x36d9b4(0x120)][_0x36d9b4(0xf3)])[_0x36d9b4(0xd6)]['to'][_0x36d9b4(0xdc)](_0x14a6fe), await _0x4a1b48[_0x36d9b4(0x128)](_0x36d9b4(0xd1))['request']('CloudFormation', 'describeStacks'), expect(_0x4a1b48[_0x36d9b4(0x128)]('aws')[_0x36d9b4(0x127)]()[_0x36d9b4(0x120)]['sessionToken'])['to'][_0x36d9b4(0xdc)](_0x14a6fe);
        });
    }), describe('#getCredentials()', () => {
        const _0x158cd4 = _0xc736fd;
        before(async () => {
            const _0x3318be = _0x4bc1;
            await fs[_0x3318be(0x129)](path[_0x3318be(0x12a)](os[_0x3318be(0x12b)](), _0x3318be(0x12c))), await fs[_0x3318be(0x12d)](path['resolve'](os[_0x3318be(0x12b)](), './.aws/credentials'), _0x3318be(0x12e), { 'flag': 'w+' });
        }), it(_0x158cd4(0x12f), async () => {
            const _0x58352c = _0x158cd4, {serverless: _0x24915a} = await runServerless({
                    'fixture': 'aws',
                    'command': 'print'
                }), _0x2e465d = _0x24915a[_0x58352c(0x128)](_0x58352c(0xd1))['getCredentials']();
            expect(_0x2e465d[_0x58352c(0x120)][_0x58352c(0x122)])['to'][_0x58352c(0xdc)](_0x58352c(0x130));
        }), it(_0x158cd4(0x131), async () => {
            const _0xaff01e = _0x158cd4, {serverless: _0x209dd5} = await runServerless({
                    'fixture': _0xaff01e(0xd1),
                    'command': _0xaff01e(0x125)
                });
            let _0x48832f;
            overrideEnv(() => {
                const _0x408c2f = _0xaff01e;
                process['env'][_0x408c2f(0x132)] = _0x408c2f(0x133), _0x48832f = _0x209dd5[_0x408c2f(0x128)]('aws')['getCredentials']();
            }), expect(_0x48832f[_0xaff01e(0x120)][_0xaff01e(0x122)])['to']['equal'](_0xaff01e(0x134));
        }), describe(_0x158cd4(0x135), () => {
            const _0x37eaf0 = _0x158cd4;
            let _0x22c794;
            before(async () => {
                const _0x2768fa = _0x4bc1, {serverless: _0x2bc5f6} = await runServerless({
                        'fixture': 'aws',
                        'command': _0x2768fa(0x125),
                        'configExt': { 'provider': { 'profile': _0x2768fa(0x136) } }
                    });
                _0x22c794 = _0x2bc5f6[_0x2768fa(0x128)](_0x2768fa(0xd1))['getCredentials']();
            }), it('should\x20get\x20credentials\x20from\x20`provider.profile`', () => {
                const _0x2bafad = _0x4bc1;
                expect(_0x22c794[_0x2bafad(0x120)][_0x2bafad(0x137)])['to'][_0x2bafad(0xdc)](_0x2bafad(0x136));
            }), it(_0x37eaf0(0x138), () => {
                const _0xeb78f = _0x37eaf0;
                expect(_0x22c794[_0xeb78f(0x120)][_0xeb78f(0x139)])['to'][_0xeb78f(0xdc)](_0xeb78f(0x13a));
            });
        }), it(_0x158cd4(0x13b), async () => {
            const _0x552db0 = _0x158cd4, {serverless: _0x49e58a} = await runServerless({
                    'fixture': _0x552db0(0xd1),
                    'command': _0x552db0(0x125)
                });
            let _0x1b1d97;
            overrideEnv(() => {
                const _0x519d9a = _0x552db0;
                process[_0x519d9a(0xfc)]['AWS_ACCESS_KEY_ID'] = _0x519d9a(0x13c), process[_0x519d9a(0xfc)][_0x519d9a(0x13d)] = 'ENVSECRET', _0x1b1d97 = _0x49e58a[_0x519d9a(0x128)](_0x519d9a(0xd1))[_0x519d9a(0x127)]();
            }), expect(_0x1b1d97['credentials']['accessKeyId'])['to'][_0x552db0(0xdc)](_0x552db0(0x13c));
        }), describe(_0x158cd4(0x13e), () => {
            const _0x377665 = _0x158cd4;
            let _0x4a1a1e;
            before(async () => {
                const _0x4e8afe = _0x4bc1;
                await fs['outputFile'](path[_0x4e8afe(0x12a)](os[_0x4e8afe(0x12b)](), _0x4e8afe(0x13f)), _0x4e8afe(0x140), { 'flag': 'w+' });
                const {serverless: _0x5074ff} = await runServerless({
                    'fixture': _0x4e8afe(0xd1),
                    'command': _0x4e8afe(0x125)
                });
                overrideEnv(() => {
                    const _0x540ff4 = _0x4e8afe;
                    process[_0x540ff4(0xfc)][_0x540ff4(0x141)] = _0x540ff4(0x142), process[_0x540ff4(0xfc)][_0x540ff4(0x143)] = path[_0x540ff4(0x12a)](os[_0x540ff4(0x12b)](), _0x540ff4(0x13f))['toString'](), _0x4a1a1e = _0x5074ff['getProvider']('aws')['getCredentials']();
                });
            }), after(async () => {
                const _0x595bfb = _0x4bc1;
                await fs[_0x595bfb(0x144)](path[_0x595bfb(0x12a)](os[_0x595bfb(0x12b)](), _0x595bfb(0x13f)));
            }), it('should\x20get\x20credentials\x20from\x20AWS_PROFILE\x20environment\x20variable', () => {
                const _0x537df2 = _0x4bc1;
                expect(_0x4a1a1e[_0x537df2(0x120)]['profile'])['to'][_0x537df2(0xdc)](_0x537df2(0x142));
            }), it(_0x377665(0x145), () => {
                const _0x39c701 = _0x377665;
                expect(_0x4a1a1e['credentials'][_0x39c701(0x122)])['to']['equal'](_0x39c701(0x146));
            });
        }), it(_0x158cd4(0x147), async () => {
            const _0x50812b = _0x158cd4, {serverless: _0x51d0b1} = await runServerless({
                    'fixture': _0x50812b(0xd1),
                    'command': _0x50812b(0x125),
                    'configExt': { 'provider': { 'stage': 'testStage' } }
                });
            let _0x313c84;
            overrideEnv(() => {
                const _0x212656 = _0x50812b;
                process[_0x212656(0xfc)]['AWS_TESTSTAGE_ACCESS_KEY_ID'] = _0x212656(0x148), process[_0x212656(0xfc)]['AWS_TESTSTAGE_SECRET_ACCESS_KEY'] = 'TESTSTAGESECRET', _0x313c84 = _0x51d0b1['getProvider']('aws')['getCredentials']();
            }), expect(_0x313c84[_0x50812b(0x120)][_0x50812b(0x122)])['to'][_0x50812b(0xdc)]('TESTSTAGEACCESSKEYID');
        }), it(_0x158cd4(0x149), async () => {
            const _0x1c78f = _0x158cd4, {serverless: _0x5aa665} = await runServerless({
                    'fixture': 'aws',
                    'command': _0x1c78f(0x125),
                    'configExt': { 'provider': { 'stage': _0x1c78f(0x14a) } }
                });
            let _0x3dbf5f;
            overrideEnv(() => {
                const _0x50bb49 = _0x1c78f;
                process[_0x50bb49(0xfc)]['AWS_TESTSTAGE_PROFILE'] = _0x50bb49(0x133), _0x3dbf5f = _0x5aa665['getProvider'](_0x50bb49(0xd1))['getCredentials']();
            }), expect(_0x3dbf5f[_0x1c78f(0x120)][_0x1c78f(0x122)])['to'][_0x1c78f(0xdc)](_0x1c78f(0x134));
        }), describe('profile\x20with\x20cli\x20and\x20encryption', () => {
            let _0x1aab1d;
            before(async () => {
                const _0x12a555 = _0x4bc1, {serverless: _0x1ad219} = await runServerless({
                        'fixture': 'aws',
                        'command': 'print',
                        'options': { 'aws-profile': _0x12a555(0x133) },
                        'configExt': { 'provider': { 'deploymentBucket': { 'serverSideEncryption': _0x12a555(0x14b) } } }
                    });
                _0x1aab1d = _0x1ad219[_0x12a555(0x128)](_0x12a555(0xd1))[_0x12a555(0x127)]();
            }), it('should\x20get\x20credentials\x20\x22--aws-profile\x22\x20CLI\x20option', () => {
                const _0x3d12c4 = _0x4bc1;
                expect(_0x1aab1d['credentials']['accessKeyId'])['to'][_0x3d12c4(0xdc)](_0x3d12c4(0x134));
            }), it('should\x20set\x20the\x20signatureVersion\x20to\x20v4\x20if\x20the\x20serverSideEncryption\x20is\x20aws:kms', () => {
                const _0x30fa4a = _0x4bc1;
                expect(_0x1aab1d[_0x30fa4a(0x14c)])['to'][_0x30fa4a(0xdc)]('v4');
            });
        }), it(_0x158cd4(0x14d), async () => {
            const _0xda1971 = _0x158cd4, {serverless: _0x22d3a5} = await runServerless({
                    'fixture': _0xda1971(0xd1),
                    'command': _0xda1971(0x125),
                    'options': { 'aws-profile': 'nonExistent' }
                });
            expect(() => _0x22d3a5['getProvider']('aws')[_0xda1971(0x127)]())['to'][_0xda1971(0xd7)](Error);
        });
    }), describe(_0xc736fd(0x14e), () => {
        const _0x2d6033 = _0xc736fd;
        it('should\x20default\x20to\x20\x22us-east-1\x22', async () => {
            const _0x2108fc = _0x4bc1, {serverless: _0x30b545} = await runServerless({
                    'fixture': _0x2108fc(0xd1),
                    'command': 'print'
                });
            expect(_0x30b545[_0x2108fc(0x128)]('aws')[_0x2108fc(0x14f)]())['to']['equal'](_0x2108fc(0xc3));
        }), it(_0x2d6033(0x150), async () => {
            const _0x11ce4f = _0x2d6033, {serverless: _0x5c3ed3} = await runServerless({
                    'fixture': _0x11ce4f(0xd1),
                    'command': _0x11ce4f(0x125),
                    'configExt': { 'provider': { 'region': _0x11ce4f(0x151) } }
                });
            expect(_0x5c3ed3[_0x11ce4f(0x128)](_0x11ce4f(0xd1))[_0x11ce4f(0x14f)]())['to'][_0x11ce4f(0xdc)]('eu-central-1');
        }), it('should\x20allow\x20to\x20override\x20via\x20CLI\x20`--region`\x20param', async () => {
            const _0x50b18a = _0x2d6033, {serverless: _0x307fa3} = await runServerless({
                    'fixture': 'aws',
                    'command': _0x50b18a(0x125),
                    'options': { 'region': _0x50b18a(0x152) },
                    'configExt': { 'provider': { 'region': 'eu-central-1' } }
                });
            expect(_0x307fa3['getProvider']('aws')['getRegion']())['to'][_0x50b18a(0xdc)](_0x50b18a(0x152));
        });
    }), describe('#getProfile()', () => {
        const _0x2a08b7 = _0xc736fd;
        it(_0x2a08b7(0x153), async () => {
            const _0x2ed415 = _0x2a08b7, {serverless: _0x2b9ad5} = await runServerless({
                    'fixture': _0x2ed415(0xd1),
                    'command': 'print',
                    'configExt': { 'provider': { 'profile': 'test-profile' } }
                });
            expect(_0x2b9ad5['getProvider'](_0x2ed415(0xd1))[_0x2ed415(0x154)]())['to'][_0x2ed415(0xdc)](_0x2ed415(0x155));
        }), it('should\x20allow\x20to\x20set\x20via\x20CLI\x20`--profile`\x20param', async () => {
            const _0x350814 = _0x2a08b7, {serverless: _0x827a1b} = await runServerless({
                    'fixture': _0x350814(0xd1),
                    'command': 'print',
                    'options': { 'profile': _0x350814(0x156) },
                    'configExt': { 'provider': { 'profile': _0x350814(0x155) } }
                });
            expect(_0x827a1b[_0x350814(0x128)](_0x350814(0xd1))[_0x350814(0x154)]())['to'][_0x350814(0xdc)](_0x350814(0x156));
        }), it(_0x2a08b7(0x157), async () => {
            const _0x2aecdc = _0x2a08b7, {serverless: _0x4d6fd2} = await runServerless({
                    'fixture': _0x2aecdc(0xd1),
                    'command': 'print',
                    'options': {
                        'profile': _0x2aecdc(0x156),
                        'aws-profile': _0x2aecdc(0x158)
                    },
                    'configExt': { 'provider': { 'profile': _0x2aecdc(0x155) } }
                });
            expect(_0x4d6fd2[_0x2aecdc(0x128)](_0x2aecdc(0xd1))['getProfile']())['to'][_0x2aecdc(0xdc)](_0x2aecdc(0x158));
        });
    }), describe('#getDeploymentPrefix()', () => {
        const _0x539a84 = _0xc736fd;
        it(_0x539a84(0x159), async () => {
            const _0x4477ed = _0x539a84, {cfTemplate: _0x534b50} = await runServerless({
                    'fixture': _0x4477ed(0x15a),
                    'command': _0x4477ed(0x15b)
                }), _0x488870 = Object[_0x4477ed(0xdf)](_0x534b50['Resources'])[_0x4477ed(0x15c)](_0x40489b => _0x40489b[_0x4477ed(0x15d)] === 'AWS::Lambda::Function');
            expect(_0x488870[_0x4477ed(0x15e)])['to']['be'][_0x4477ed(0x15f)](0x1);
            for (const _0x525423 of _0x488870) {
                expect(_0x525423['Properties'][_0x4477ed(0x160)][_0x4477ed(0x161)])['to']['be']['a'](_0x4477ed(0x162))['and']['satisfy'](_0x5521fc => _0x5521fc[_0x4477ed(0x163)]('serverless/'));
            }
        }), it(_0x539a84(0x164), async () => {
            const _0x54c952 = _0x539a84, {cfTemplate: _0x7a215a} = await runServerless({
                    'fixture': _0x54c952(0x15a),
                    'command': _0x54c952(0x15b),
                    'configExt': { 'provider': { 'deploymentPrefix': _0x54c952(0x165) } }
                }), _0x3eda30 = Object[_0x54c952(0xdf)](_0x7a215a['Resources'])['filter'](_0x5e296c => _0x5e296c[_0x54c952(0x15d)] === _0x54c952(0x166));
            expect(_0x3eda30[_0x54c952(0x15e)])['to']['be'][_0x54c952(0x15f)](0x1);
            for (const _0x21ba3e of _0x3eda30) {
                expect(_0x21ba3e[_0x54c952(0x167)]['Code'][_0x54c952(0x161)])['to']['be']['a'](_0x54c952(0x162))['and']['satisfy'](_0xd9a049 => _0xd9a049[_0x54c952(0x163)](_0x54c952(0x168)));
            }
        });
    }), describe(_0xc736fd(0x169), () => {
        const _0xbae923 = _0xc736fd;
        it(_0xbae923(0x16a), async () => {
            const _0x23baed = _0xbae923, _0xf8d1dd = _0x23baed(0x16b), _0x3cb81c = {
                    'listenerArn': 'arn:aws:elasticloadbalancing:us-east-1:123456789012:listener/app/my-load-balancer/' + _0xf8d1dd + _0x23baed(0x16c),
                    'conditions': { 'path': '/' }
                }, {cfTemplate: _0x38d39b} = await runServerless({
                    'fixture': _0x23baed(0x15a),
                    'command': _0x23baed(0x15b),
                    'configExt': {
                        'provider': { 'alb': { 'targetGroupPrefix': 'a-prefix' } },
                        'functions': {
                            'fnTargetGroupName': {
                                'handler': 'index.handler',
                                'events': [{
                                        'alb': {
                                            ..._0x3cb81c,
                                            'priority': 0x1
                                        }
                                    }]
                            }
                        }
                    }
                }), _0x2f4f1b = Object[_0x23baed(0xdf)](_0x38d39b['Resources'])[_0x23baed(0x15c)](_0x43109f => _0x43109f[_0x23baed(0x15d)] === _0x23baed(0x16d));
            expect(_0x2f4f1b[_0x23baed(0x15e)])['to']['be']['greaterThanOrEqual'](0x1);
            for (const _0x986303 of _0x2f4f1b) {
                expect(_0x986303['Properties']['Name'])['to']['be']['a'](_0x23baed(0x162))[_0x23baed(0x16e)][_0x23baed(0x16f)](_0x2d710d => _0x2d710d['startsWith'](_0x23baed(0x170)));
            }
        });
    }), describe(_0xc736fd(0x171), () => {
        const _0xb827e0 = _0xc736fd;
        it('should\x20default\x20to\x20\x22dev\x22', async () => {
            const _0x6336df = _0x4bc1, {serverless: _0x74a0f7} = await runServerless({
                    'fixture': _0x6336df(0xd1),
                    'command': _0x6336df(0x125)
                });
            expect(_0x74a0f7[_0x6336df(0x128)](_0x6336df(0xd1))[_0x6336df(0x172)]())['to'][_0x6336df(0xdc)](_0x6336df(0xc2));
        }), it(_0xb827e0(0x173), async () => {
            const _0x3f9dd2 = _0xb827e0, {serverless: _0x47abee} = await runServerless({
                    'fixture': _0x3f9dd2(0xd1),
                    'command': _0x3f9dd2(0x125),
                    'configExt': { 'provider': { 'stage': 'staging' } }
                });
            expect(_0x47abee[_0x3f9dd2(0x128)](_0x3f9dd2(0xd1))[_0x3f9dd2(0x172)]())['to']['equal'](_0x3f9dd2(0x174));
        }), it('should\x20allow\x20to\x20override\x20via\x20CLI\x20`--stage`\x20param', async () => {
            const _0x90d1 = _0xb827e0, {serverless: _0x5a2f97} = await runServerless({
                    'fixture': _0x90d1(0xd1),
                    'command': 'print',
                    'options': { 'stage': _0x90d1(0x175) },
                    'configExt': { 'provider': { 'stage': _0x90d1(0x174) } }
                });
            expect(_0x5a2f97[_0x90d1(0x128)]('aws')[_0x90d1(0x172)]())['to'][_0x90d1(0xdc)](_0x90d1(0x175));
        });
    }), describe(_0xc736fd(0x176), () => {
        const _0x30dd35 = _0xc736fd;
        it(_0x30dd35(0x177), async () => {
            const _0x272c79 = _0x30dd35;
            await expect(runServerless({
                'fixture': _0x272c79(0x15a),
                'command': _0x272c79(0x15b),
                'configExt': {
                    'provider': {
                        'ecr': {
                            'images': {
                                'invalidimage': {
                                    'path': './',
                                    'uri': _0x272c79(0x178)
                                }
                            }
                        }
                    },
                    'functions': { 'fnProviderInvalidImage': { 'image': _0x272c79(0x179) } }
                }
            }))['to']['be'][_0x272c79(0x17a)]['rejected']['and']['have'][_0x272c79(0x17b)](_0x272c79(0x17c), 'ECR_IMAGE_BOTH_URI_AND_PATH_DEFINED_ERROR');
        }), it(_0x30dd35(0x17d), async () => {
            const _0x58f15a = _0x30dd35;
            await expect(runServerless({
                'fixture': _0x58f15a(0x15a),
                'command': _0x58f15a(0x15b),
                'configExt': {
                    'provider': { 'ecr': { 'images': { 'invalidimage': {} } } },
                    'functions': { 'fnProviderInvalidImage': { 'image': _0x58f15a(0x179) } }
                }
            }))['to']['be'][_0x58f15a(0x17a)]['rejected'][_0x58f15a(0x16e)][_0x58f15a(0xf8)][_0x58f15a(0x17b)]('code', _0x58f15a(0x17e));
        }), it(_0x30dd35(0x17f), async () => {
            const _0x56527d = _0x30dd35;
            await expect(runServerless({
                'fixture': _0x56527d(0x180),
                'command': 'package',
                'shouldStubSpawn': !![],
                'configExt': { 'provider': { 'ecr': { 'images': { 'baseimage': { 'path': _0x56527d(0x181) } } } } }
            }))['to']['be'][_0x56527d(0x17a)][_0x56527d(0x182)]['and']['have']['property'](_0x56527d(0x17c), 'DOCKERFILE_NOT_AVAILABLE_ERROR');
        }), it(_0x30dd35(0x183), async () => {
            const _0x22cc65 = _0x30dd35;
            await expect(runServerless({
                'fixture': _0x22cc65(0x15a),
                'command': _0x22cc65(0x15b),
                'configExt': { 'functions': { 'fnInvalid': { 'image': _0x22cc65(0x184) } } }
            }))['to']['be']['eventually'][_0x22cc65(0x182)][_0x22cc65(0x16e)][_0x22cc65(0xf8)]['property'](_0x22cc65(0x17c), _0x22cc65(0x185));
        }), it(_0x30dd35(0x186), async () => {
            const _0x336498 = _0x30dd35;
            await expect(runServerless({
                'fixture': _0x336498(0x180),
                'command': _0x336498(0x15b),
                'shouldStubSpawn': !![],
                'configExt': {
                    'functions': {
                        'foo': {
                            'image': {
                                'name': _0x336498(0x187),
                                'uri': _0x336498(0x178)
                            }
                        }
                    }
                }
            }))['to']['be'][_0x336498(0x17a)][_0x336498(0x182)][_0x336498(0x16e)][_0x336498(0xf8)][_0x336498(0x17b)]('code', 'FUNCTION_IMAGE_BOTH_URI_AND_NAME_DEFINED_ERROR');
        }), it('should\x20fail\x20if\x20neither\x20uri\x20nor\x20name\x20is\x20provided\x20for\x20an\x20image', async () => {
            const _0x46ea91 = _0x30dd35;
            await expect(runServerless({
                'fixture': _0x46ea91(0x180),
                'command': _0x46ea91(0x15b),
                'shouldStubSpawn': !![],
                'configExt': { 'functions': { 'foo': { 'image': {} } } }
            }))['to']['be'][_0x46ea91(0x17a)]['rejected'][_0x46ea91(0x16e)]['have']['property']('code', 'FUNCTION_IMAGE_NEITHER_URI_NOR_NAME_DEFINED_ERROR');
        });
        const _0x4d7900 = (_0x5cadfb, _0x21b1ab) => Object[_0x30dd35(0xdf)](_0x5cadfb)[_0x30dd35(0x188)](_0x46c2c7 => _0x46c2c7[_0x30dd35(0x15d)] === 'AWS::Lambda::Version' && _0x46c2c7[_0x30dd35(0x167)]['FunctionName'][_0x30dd35(0x189)] === _0x21b1ab)[_0x30dd35(0x167)];
        describe(_0x30dd35(0x18a), () => {
            const _0x338f88 = _0x30dd35;
            let _0x464014, _0x5807b2, _0xdc2939;
            const _0x66cde7 = '6bb600b4d6e1d7cf521097177dd0c4e9ea373edb91984a505333be8ac9455d38', _0x51e84b = _0x338f88(0x18b) + _0x66cde7, _0x116cf6 = 'sha256:2e6b10a4b1ca0f6d3563a8a1f034dde7c4d7c93b50aa91f24311765d0822186b', _0x5a444d = sinon[_0x338f88(0xeb)]()[_0x338f88(0xec)]({ 'imageDetails': [{ 'imageDigest': _0x116cf6 }] }), _0x14adf9 = { 'ECR': { 'describeImages': _0x5a444d } };
            before(async () => {
                const _0x3ef248 = _0x338f88, {
                        awsNaming: _0x1ce6c5,
                        cfTemplate: _0x1407cf,
                        fixtureData: _0x3b6c88
                    } = await runServerless({
                        'fixture': _0x3ef248(0x15a),
                        'command': _0x3ef248(0x15b),
                        'configExt': {
                            'provider': {
                                'ecr': {
                                    'images': {
                                        'imagewithexplicituri': { 'uri': _0x51e84b },
                                        'imagewithimplicituri': _0x51e84b
                                    }
                                }
                            },
                            'functions': {
                                'fnImage': { 'image': _0x51e84b },
                                'fnImageWithTag': { 'image': '000000000000.dkr.ecr.sa-east-1.amazonaws.com/test-lambda-docker:stable' },
                                'fnImageWithTagAndRepoWithSlashes': { 'image': _0x3ef248(0x18c) },
                                'fnImageWithExplicitUri': { 'image': { 'uri': _0x51e84b } },
                                'fnProviderImageWithExplicitUri': { 'image': _0x3ef248(0x18d) },
                                'fnProviderImageWithImplicitUri': { 'image': _0x3ef248(0x18e) }
                            }
                        },
                        'awsRequestStubMap': _0x14adf9
                    });
                _0x464014 = _0x1407cf[_0x3ef248(0x18f)], _0x5807b2 = _0x1ce6c5, _0xdc2939 = _0x3b6c88['serviceConfig'];
            }), it(_0x338f88(0x190), () => {
                const _0x1b01ed = _0x338f88, _0x41782d = _0xdc2939[_0x1b01ed(0x191)][_0x1b01ed(0x192)], _0x2ce88b = _0x5807b2[_0x1b01ed(0x193)](_0x1b01ed(0x192)), _0x3cebae = _0x464014[_0x2ce88b]['Properties'];
                expect(_0x3cebae[_0x1b01ed(0x160)])['to']['deep']['equal']({ 'ImageUri': _0x41782d['image'] }), expect(_0x3cebae)['to'][_0x1b01ed(0xd6)][_0x1b01ed(0xf8)][_0x1b01ed(0x17b)](_0x1b01ed(0x194)), expect(_0x3cebae)['to'][_0x1b01ed(0xd6)][_0x1b01ed(0xf8)][_0x1b01ed(0x17b)]('Runtime');
                const _0x558d60 = _0x41782d[_0x1b01ed(0x195)]['slice'](_0x41782d['image'][_0x1b01ed(0x196)]('@') + 0x1);
                expect(_0x558d60)['to']['match'](/^sha256:[a-f0-9]{64}$/);
                const _0x38bda3 = _0x558d60[_0x1b01ed(0x197)](_0x1b01ed(0x198)[_0x1b01ed(0x15e)]), _0x124481 = _0x4d7900(_0x464014, _0x2ce88b);
                expect(_0x124481[_0x1b01ed(0x199)])['to']['equal'](_0x38bda3);
            }), it(_0x338f88(0x19a), () => {
                const _0x5416c1 = _0x338f88, _0x33bff4 = _0xdc2939[_0x5416c1(0x191)][_0x5416c1(0x19b)], _0x444758 = _0x5807b2['getLambdaLogicalId']('fnImageWithExplicitUri'), _0x411ab7 = _0x464014[_0x444758][_0x5416c1(0x167)];
                expect(_0x411ab7[_0x5416c1(0x160)])['to'][_0x5416c1(0x19c)][_0x5416c1(0xdc)]({ 'ImageUri': _0x33bff4[_0x5416c1(0x195)][_0x5416c1(0x19d)] }), expect(_0x411ab7)['to'][_0x5416c1(0xd6)][_0x5416c1(0xf8)]['property'](_0x5416c1(0x194)), expect(_0x411ab7)['to']['not']['have'][_0x5416c1(0x17b)](_0x5416c1(0x19e));
                const _0x68c2a7 = _0x33bff4[_0x5416c1(0x195)][_0x5416c1(0x19d)][_0x5416c1(0x197)](_0x33bff4['image']['uri']['lastIndexOf']('@') + 0x1);
                expect(_0x68c2a7)['to']['match'](/^sha256:[a-f0-9]{64}$/);
                const _0xc7aeff = _0x68c2a7[_0x5416c1(0x197)](_0x5416c1(0x198)[_0x5416c1(0x15e)]), _0x14974d = _0x4d7900(_0x464014, _0x444758);
                expect(_0x14974d[_0x5416c1(0x199)])['to'][_0x5416c1(0xdc)](_0xc7aeff);
            }), it('should\x20support\x20`functions[].image`\x20with\x20tag', () => {
                const _0x451a9d = _0x338f88, _0x2abf3d = _0xdc2939[_0x451a9d(0x191)][_0x451a9d(0x19f)], _0x2af0f4 = _0x5807b2['getLambdaLogicalId'](_0x451a9d(0x19f)), _0x122c0f = _0x464014[_0x2af0f4][_0x451a9d(0x167)];
                expect(_0x122c0f[_0x451a9d(0x160)])['to'][_0x451a9d(0x19c)][_0x451a9d(0xdc)]({ 'ImageUri': _0x2abf3d[_0x451a9d(0x195)]['split'](':')[0x0] + '@' + _0x116cf6 }), expect(_0x122c0f)['to'][_0x451a9d(0xd6)][_0x451a9d(0xf8)]['property']('Handler'), expect(_0x122c0f)['to']['not'][_0x451a9d(0xf8)]['property'](_0x451a9d(0x19e));
                const _0x5de0d8 = _0x4d7900(_0x464014, _0x2af0f4);
                expect(_0x5de0d8[_0x451a9d(0x199)])['to'][_0x451a9d(0xdc)](_0x116cf6[_0x451a9d(0x197)](_0x451a9d(0x198)[_0x451a9d(0x15e)])), expect(_0x5a444d)['to']['be'][_0x451a9d(0x1a0)]({
                    'imageIds': [{ 'imageTag': _0x451a9d(0x1a1) }],
                    'registryId': _0x451a9d(0x1a2),
                    'repositoryName': _0x451a9d(0x1a3)
                });
            }), it(_0x338f88(0x1a4), () => {
                const _0x57f702 = _0x338f88, _0x37b473 = _0xdc2939[_0x57f702(0x191)][_0x57f702(0x1a5)], _0x467d25 = _0x5807b2[_0x57f702(0x193)]('fnImageWithTagAndRepoWithSlashes'), _0xa26189 = _0x464014[_0x467d25][_0x57f702(0x167)];
                expect(_0xa26189['Code'])['to'][_0x57f702(0x19c)][_0x57f702(0xdc)]({ 'ImageUri': _0x37b473[_0x57f702(0x195)]['split'](':')[0x0] + '@' + _0x116cf6 }), expect(_0xa26189)['to'][_0x57f702(0xd6)][_0x57f702(0xf8)]['property'](_0x57f702(0x194)), expect(_0xa26189)['to'][_0x57f702(0xd6)]['have'][_0x57f702(0x17b)](_0x57f702(0x19e));
                const _0x30797a = _0x4d7900(_0x464014, _0x467d25);
                expect(_0x30797a[_0x57f702(0x199)])['to']['equal'](_0x116cf6[_0x57f702(0x197)](_0x57f702(0x198)['length'])), expect(_0x5a444d)['to']['be'][_0x57f702(0x1a0)]({
                    'imageIds': [{ 'imageTag': _0x57f702(0x1a1) }],
                    'registryId': _0x57f702(0x1a2),
                    'repositoryName': _0x57f702(0x1a6)
                });
            }), it(_0x338f88(0x1a7), () => {
                const _0x30fecb = _0x338f88, _0x146499 = _0x5807b2[_0x30fecb(0x193)]('fnProviderImageWithExplicitUri'), _0x42abc2 = _0x464014[_0x146499][_0x30fecb(0x167)];
                expect(_0x42abc2[_0x30fecb(0x160)])['to'][_0x30fecb(0x19c)]['equal']({ 'ImageUri': _0x51e84b }), expect(_0x42abc2)['to'][_0x30fecb(0xd6)][_0x30fecb(0xf8)][_0x30fecb(0x17b)](_0x30fecb(0x194)), expect(_0x42abc2)['to']['not'][_0x30fecb(0xf8)][_0x30fecb(0x17b)](_0x30fecb(0x19e));
                const _0x593709 = _0x4d7900(_0x464014, _0x146499);
                expect(_0x593709[_0x30fecb(0x199)])['to']['equal'](_0x66cde7);
            }), it(_0x338f88(0x1a8), () => {
                const _0x2e2d70 = _0x338f88, _0x29897d = _0x5807b2[_0x2e2d70(0x193)]('fnProviderImageWithImplicitUri'), _0x58e072 = _0x464014[_0x29897d]['Properties'];
                expect(_0x58e072[_0x2e2d70(0x160)])['to'][_0x2e2d70(0x19c)][_0x2e2d70(0xdc)]({ 'ImageUri': _0x51e84b }), expect(_0x58e072)['to'][_0x2e2d70(0xd6)]['have'][_0x2e2d70(0x17b)](_0x2e2d70(0x194)), expect(_0x58e072)['to'][_0x2e2d70(0xd6)]['have'][_0x2e2d70(0x17b)](_0x2e2d70(0x19e));
                const _0x1be0ba = _0x4d7900(_0x464014, _0x29897d);
                expect(_0x1be0ba[_0x2e2d70(0x199)])['to']['equal'](_0x66cde7);
            });
        }), describe('with\x20`functions[].image`\x20referencing\x20images\x20that\x20require\x20building', () => {
            const _0x1ad93e = _0x30dd35, _0x46a3d6 = _0x1ad93e(0x1a9), _0x29b6b3 = '999999999999.dkr.ecr.sa-east-1.amazonaws.com/test-lambda-docker', _0x5d1434 = _0x1ad93e(0x1aa), _0x3f746a = _0x1ad93e(0x1ab) + _0x29b6b3, _0x69cb99 = sinon['stub'](), _0x316dd6 = sinon[_0x1ad93e(0xeb)](), _0x1076bd = sinon[_0x1ad93e(0xeb)](), _0x3eb0d7 = {
                    'STS': {
                        'getCallerIdentity': {
                            'ResponseMetadata': { 'RequestId': _0x1ad93e(0x1ac) },
                            'UserId': _0x1ad93e(0x1ad),
                            'Account': _0x1ad93e(0x1ae),
                            'Arn': 'arn:aws:iam::999999999999:user/test'
                        }
                    },
                    'ECR': {
                        'describeRepositories': { 'repositories': [{ 'repositoryUri': _0x29b6b3 }] },
                        'getAuthorizationToken': {
                            'authorizationData': [{
                                    'proxyEndpoint': _0x3f746a,
                                    'authorizationToken': _0x5d1434
                                }]
                        }
                    }
                }, _0x4888a0 = sinon[_0x1ad93e(0xeb)]()[_0x1ad93e(0x1af)]({ 'stdBuffer': _0x1ad93e(0x1b0) + _0x46a3d6 + _0x1ad93e(0x1b1) }), _0x3e6653 = {
                    'child-process-ext/spawn': _0x4888a0,
                    './lib/utils/telemetry/generatePayload.js': () => ({})
                };
            beforeEach(() => {
                const _0x433afc = _0x1ad93e;
                _0x69cb99[_0x433afc(0x1b2)](), _0x316dd6['reset'](), _0x4888a0['resetHistory']();
            }), it(_0x1ad93e(0x1b3), async () => {
                const _0x30c29d = _0x1ad93e, _0x5b7653 = {
                        ..._0x3eb0d7,
                        'ECR': {
                            ..._0x3eb0d7[_0x30c29d(0x1b4)],
                            'describeRepositories': _0x69cb99[_0x30c29d(0xec)]({ 'repositories': [{ 'repositoryUri': _0x29b6b3 }] }),
                            'createRepository': _0x316dd6
                        }
                    }, {
                        awsNaming: _0x27306b,
                        cfTemplate: _0x1776b8,
                        fixtureData: {servicePath: _0x2d3031}
                    } = await runServerless({
                        'fixture': _0x30c29d(0x180),
                        'command': _0x30c29d(0x15b),
                        'awsRequestStubMap': _0x5b7653,
                        'modulesCacheStub': _0x3e6653
                    }), _0x46b88d = _0x27306b['getLambdaLogicalId'](_0x30c29d(0xd2)), _0x3a5dc6 = _0x1776b8['Resources'][_0x46b88d]['Properties'], _0xd0686 = _0x4d7900(_0x1776b8[_0x30c29d(0x18f)], _0x46b88d);
                expect(_0x3a5dc6[_0x30c29d(0x160)]['ImageUri'])['to'][_0x30c29d(0x19c)]['equal'](_0x29b6b3 + _0x30c29d(0x1b5) + _0x46a3d6), expect(_0xd0686[_0x30c29d(0x199)])['to'][_0x30c29d(0xdc)](_0x46a3d6), expect(_0x69cb99)['to']['be'][_0x30c29d(0x103)], expect(_0x316dd6['notCalled'])['to']['be']['true'], expect(_0x4888a0)['to']['be'][_0x30c29d(0x1a0)](_0x30c29d(0x1b6), [_0x30c29d(0x1b7)]), expect(_0x4888a0)[_0x30c29d(0xd6)]['to']['be']['calledWith'](_0x30c29d(0x1b6), [
                    _0x30c29d(0x1b8),
                    '--username',
                    _0x30c29d(0x1b9),
                    _0x30c29d(0x1ba),
                    _0x30c29d(0x1bb),
                    _0x3f746a
                ]), expect(_0x4888a0)['to']['be'][_0x30c29d(0x1a0)]('docker', [
                    _0x30c29d(0x1bc),
                    '-t',
                    _0x27306b[_0x30c29d(0x1bd)]() + ':baseimage',
                    '-f',
                    path['join'](_0x2d3031, 'Dockerfile'),
                    './'
                ]), expect(_0x4888a0)['to']['be'][_0x30c29d(0x1a0)](_0x30c29d(0x1b6), [
                    _0x30c29d(0x1be),
                    _0x27306b['getEcrRepositoryName']() + _0x30c29d(0x1bf),
                    _0x29b6b3 + ':baseimage'
                ]), expect(_0x4888a0)['to']['be']['calledWith']('docker', [
                    _0x30c29d(0x1c0),
                    _0x29b6b3 + _0x30c29d(0x1bf)
                ]);
            }), it(_0x1ad93e(0x1c1), async () => {
                const _0x57a9d4 = _0x1ad93e, _0x16a75c = {
                        ..._0x3eb0d7,
                        'ECR': {
                            ..._0x3eb0d7['ECR'],
                            'describeRepositories': _0x69cb99[_0x57a9d4(0x1c2)]({ 'providerError': { 'code': _0x57a9d4(0x1c3) } }),
                            'createRepository': _0x1076bd[_0x57a9d4(0xec)]({ 'repository': { 'repositoryUri': _0x29b6b3 } })
                        }
                    }, {
                        awsNaming: _0x2818ac,
                        cfTemplate: _0x4516b3
                    } = await runServerless({
                        'fixture': _0x57a9d4(0x180),
                        'command': _0x57a9d4(0x15b),
                        'awsRequestStubMap': _0x16a75c,
                        'modulesCacheStub': _0x3e6653,
                        'configExt': {
                            'provider': {
                                'ecr': {
                                    'scanOnPush': !![],
                                    'images': {
                                        'baseimage': {
                                            'path': './',
                                            'file': _0x57a9d4(0x1c4)
                                        }
                                    }
                                }
                            }
                        }
                    }), _0x255f41 = _0x2818ac[_0x57a9d4(0x193)](_0x57a9d4(0xd2)), _0xfe038e = _0x4516b3[_0x57a9d4(0x18f)][_0x255f41][_0x57a9d4(0x167)], _0x52c3d4 = _0x4d7900(_0x4516b3['Resources'], _0x255f41);
                expect(_0xfe038e['Code'][_0x57a9d4(0x1c5)])['to'][_0x57a9d4(0x19c)]['equal'](_0x29b6b3 + _0x57a9d4(0x1b5) + _0x46a3d6), expect(_0x52c3d4[_0x57a9d4(0x199)])['to']['equal'](_0x46a3d6), expect(_0x69cb99)['to']['be'][_0x57a9d4(0x103)], expect(_0x1076bd)['to']['be']['calledOnce'], expect(_0x1076bd['args'][0x0][0x0][_0x57a9d4(0x1c6)])['to'][_0x57a9d4(0x19c)][_0x57a9d4(0xdc)]({ 'scanOnPush': !![] });
            }), it('should\x20work\x20correctly\x20when\x20repository\x20does\x20not\x20exist\x20beforehand', async () => {
                const _0x52bf61 = _0x1ad93e, _0x6b520 = {
                        ..._0x3eb0d7,
                        'ECR': {
                            ..._0x3eb0d7[_0x52bf61(0x1b4)],
                            'describeRepositories': _0x69cb99['throws']({ 'providerError': { 'code': _0x52bf61(0x1c3) } }),
                            'createRepository': _0x316dd6['resolves']({ 'repository': { 'repositoryUri': _0x29b6b3 } })
                        }
                    }, {
                        awsNaming: _0x3c0082,
                        cfTemplate: _0x395b3d
                    } = await runServerless({
                        'fixture': _0x52bf61(0x180),
                        'command': _0x52bf61(0x15b),
                        'awsRequestStubMap': _0x6b520,
                        'modulesCacheStub': _0x3e6653
                    }), _0x35a665 = _0x3c0082['getLambdaLogicalId'](_0x52bf61(0xd2)), _0x426355 = _0x395b3d['Resources'][_0x35a665]['Properties'], _0x1b876a = _0x4d7900(_0x395b3d[_0x52bf61(0x18f)], _0x35a665);
                expect(_0x426355[_0x52bf61(0x160)][_0x52bf61(0x1c5)])['to'][_0x52bf61(0x19c)][_0x52bf61(0xdc)](_0x29b6b3 + _0x52bf61(0x1b5) + _0x46a3d6), expect(_0x1b876a[_0x52bf61(0x199)])['to']['equal'](_0x46a3d6), expect(_0x69cb99)['to']['be'][_0x52bf61(0x103)], expect(_0x316dd6)['to']['be'][_0x52bf61(0x103)];
            }), it('should\x20login\x20and\x20retry\x20when\x20docker\x20push\x20fails\x20with\x20no\x20basic\x20auth\x20credentials\x20error', async () => {
                const _0x4a05e3 = _0x1ad93e, _0x573049 = {
                        ..._0x3eb0d7,
                        'ECR': {
                            ..._0x3eb0d7[_0x4a05e3(0x1b4)],
                            'describeRepositories': _0x69cb99[_0x4a05e3(0xec)]({ 'repositories': [{ 'repositoryUri': _0x29b6b3 }] }),
                            'createRepository': _0x316dd6
                        }
                    }, _0x430eab = sinon[_0x4a05e3(0xeb)]()['returns']({ 'stdBuffer': 'digest:\x20sha256:' + _0x46a3d6 + _0x4a05e3(0x1b1) })[_0x4a05e3(0x1c7)](0x3)[_0x4a05e3(0x1c2)]({ 'stdBuffer': _0x4a05e3(0x1c8) }), {
                        awsNaming: _0x2739b5,
                        cfTemplate: _0x545526,
                        fixtureData: {servicePath: _0x28fa37}
                    } = await runServerless({
                        'fixture': _0x4a05e3(0x180),
                        'command': 'package',
                        'awsRequestStubMap': _0x573049,
                        'modulesCacheStub': {
                            ..._0x3e6653,
                            'child-process-ext/spawn': _0x430eab
                        }
                    }), _0x83d220 = _0x2739b5[_0x4a05e3(0x193)](_0x4a05e3(0xd2)), _0x3ed67b = _0x545526['Resources'][_0x83d220]['Properties'], _0x701747 = _0x4d7900(_0x545526[_0x4a05e3(0x18f)], _0x83d220);
                expect(_0x3ed67b['Code'][_0x4a05e3(0x1c5)])['to'][_0x4a05e3(0x19c)][_0x4a05e3(0xdc)](_0x29b6b3 + _0x4a05e3(0x1b5) + _0x46a3d6), expect(_0x701747[_0x4a05e3(0x199)])['to'][_0x4a05e3(0xdc)](_0x46a3d6), expect(_0x69cb99)['to']['be']['calledOnce'], expect(_0x316dd6[_0x4a05e3(0x1c9)])['to']['be']['true'], expect(_0x430eab)['to']['be'][_0x4a05e3(0x1a0)](_0x4a05e3(0x1b6), [_0x4a05e3(0x1b7)]), expect(_0x430eab)['to']['be'][_0x4a05e3(0x1a0)]('docker', [
                    _0x4a05e3(0x1bc),
                    '-t',
                    _0x2739b5['getEcrRepositoryName']() + ':baseimage',
                    '-f',
                    path['join'](_0x28fa37, _0x4a05e3(0x1ca)),
                    './'
                ]), expect(_0x430eab)['to']['be']['calledWith']('docker', [
                    _0x4a05e3(0x1be),
                    _0x2739b5[_0x4a05e3(0x1bd)]() + _0x4a05e3(0x1bf),
                    _0x29b6b3 + _0x4a05e3(0x1bf)
                ]), expect(_0x430eab)['to']['be'][_0x4a05e3(0x1a0)](_0x4a05e3(0x1b6), [
                    _0x4a05e3(0x1c0),
                    _0x29b6b3 + ':baseimage'
                ]), expect(_0x430eab)['to']['be']['calledWith'](_0x4a05e3(0x1b6), [
                    _0x4a05e3(0x1b8),
                    _0x4a05e3(0x1cb),
                    _0x4a05e3(0x1b9),
                    '--password',
                    _0x4a05e3(0x1bb),
                    _0x3f746a
                ]);
            }), it(_0x1ad93e(0x1cc), async () => {
                const _0x15dd91 = _0x1ad93e, _0x1d3822 = {
                        ..._0x3eb0d7,
                        'ECR': {
                            ..._0x3eb0d7[_0x15dd91(0x1b4)],
                            'describeRepositories': _0x69cb99['resolves']({ 'repositories': [{ 'repositoryUri': _0x29b6b3 }] }),
                            'createRepository': _0x316dd6
                        }
                    }, _0x31d034 = sinon[_0x15dd91(0xeb)]()['returns']({ 'stdBuffer': _0x15dd91(0x1b0) + _0x46a3d6 + _0x15dd91(0x1b1) })[_0x15dd91(0x1c7)](0x3)[_0x15dd91(0x1c2)]({ 'stdBuffer': _0x15dd91(0x1cd) });
                await runServerless({
                    'fixture': _0x15dd91(0x180),
                    'command': _0x15dd91(0x15b),
                    'awsRequestStubMap': _0x1d3822,
                    'modulesCacheStub': {
                        ..._0x3e6653,
                        'child-process-ext/spawn': _0x31d034
                    }
                }), expect(_0x31d034)['to']['be']['calledWith']('docker', [
                    _0x15dd91(0x1c0),
                    _0x29b6b3 + _0x15dd91(0x1bf)
                ]), expect(_0x31d034)['to']['be'][_0x15dd91(0x1a0)](_0x15dd91(0x1b6), [
                    _0x15dd91(0x1b8),
                    _0x15dd91(0x1cb),
                    _0x15dd91(0x1b9),
                    '--password',
                    'dockerauthtoken',
                    _0x3f746a
                ]);
            }), it(_0x1ad93e(0x1ce), async () => {
                const _0xd91da3 = _0x1ad93e, _0x265277 = {
                        ..._0x3eb0d7,
                        'ECR': {
                            ..._0x3eb0d7[_0xd91da3(0x1b4)],
                            'describeRepositories': _0x69cb99[_0xd91da3(0xec)]({ 'repositories': [{ 'repositoryUri': _0x29b6b3 }] }),
                            'createRepository': _0x316dd6
                        }
                    }, {stdoutData: _0x531883} = await runServerless({
                        'fixture': _0xd91da3(0x180),
                        'command': 'package',
                        'awsRequestStubMap': _0x265277,
                        'modulesCacheStub': {
                            ..._0x3e6653,
                            'child-process-ext/spawn': sinon[_0xd91da3(0xeb)]()[_0xd91da3(0x1af)]({ 'stdBuffer': _0xd91da3(0x1b0) + _0x46a3d6 + _0xd91da3(0x1b1) })[_0xd91da3(0x1c7)](0x3)[_0xd91da3(0x1c2)]({ 'stdBuffer': _0xd91da3(0x1c8) })['onCall'](0x4)[_0xd91da3(0x1af)]({ 'stdBuffer': _0xd91da3(0x1cf) })
                        }
                    });
                expect(_0x531883)['to']['include'](_0xd91da3(0x1d0));
            }), it(_0x1ad93e(0x1d1), async () => {
                const _0xb6eae4 = _0x1ad93e, _0xe6317 = {
                        ..._0x3eb0d7,
                        'ECR': {
                            ..._0x3eb0d7[_0xb6eae4(0x1b4)],
                            'describeRepositories': _0x69cb99[_0xb6eae4(0xec)]({ 'repositories': [{ 'repositoryUri': _0x29b6b3 }] }),
                            'createRepository': _0x316dd6
                        }
                    }, {
                        awsNaming: _0x3bba9f,
                        cfTemplate: _0x4429c6
                    } = await runServerless({
                        'fixture': _0xb6eae4(0x180),
                        'command': _0xb6eae4(0x15b),
                        'awsRequestStubMap': _0xe6317,
                        'modulesCacheStub': _0x3e6653,
                        'configExt': { 'provider': { 'ecr': { 'images': { 'baseimage': './' } } } }
                    }), _0xfab241 = _0x3bba9f['getLambdaLogicalId'](_0xb6eae4(0xd2)), _0x3e5d04 = _0x4429c6[_0xb6eae4(0x18f)][_0xfab241]['Properties'], _0x411a91 = Object['values'](_0x4429c6[_0xb6eae4(0x18f)])[_0xb6eae4(0x188)](_0x29c1e0 => _0x29c1e0[_0xb6eae4(0x15d)] === _0xb6eae4(0x1d2) && _0x29c1e0[_0xb6eae4(0x167)][_0xb6eae4(0x1d3)][_0xb6eae4(0x189)] === _0xfab241)[_0xb6eae4(0x167)];
                expect(_0x3e5d04[_0xb6eae4(0x160)][_0xb6eae4(0x1c5)])['to'][_0xb6eae4(0x19c)]['equal'](_0x29b6b3 + '@sha256:' + _0x46a3d6), expect(_0x411a91[_0xb6eae4(0x199)])['to'][_0xb6eae4(0xdc)](_0x46a3d6), expect(_0x69cb99)['to']['be'][_0xb6eae4(0x103)], expect(_0x316dd6[_0xb6eae4(0x1c9)])['to']['be'][_0xb6eae4(0x1d4)];
            }), it('should\x20work\x20correctly\x20when\x20image\x20is\x20defined\x20with\x20`file`\x20set', async () => {
                const _0x3b0f3b = _0x1ad93e, _0x3ccf6a = {
                        ..._0x3eb0d7,
                        'ECR': {
                            ..._0x3eb0d7['ECR'],
                            'describeRepositories': _0x69cb99[_0x3b0f3b(0xec)]({ 'repositories': [{ 'repositoryUri': _0x29b6b3 }] }),
                            'createRepository': _0x316dd6
                        }
                    }, {
                        awsNaming: _0x4f11da,
                        cfTemplate: _0x4521fc,
                        fixtureData: {servicePath: _0x506fc9}
                    } = await runServerless({
                        'fixture': _0x3b0f3b(0x180),
                        'command': _0x3b0f3b(0x15b),
                        'awsRequestStubMap': _0x3ccf6a,
                        'modulesCacheStub': _0x3e6653,
                        'configExt': {
                            'provider': {
                                'ecr': {
                                    'images': {
                                        'baseimage': {
                                            'path': './',
                                            'file': 'Dockerfile.dev'
                                        }
                                    }
                                }
                            }
                        }
                    }), _0x59c5de = _0x4f11da[_0x3b0f3b(0x193)](_0x3b0f3b(0xd2)), _0x30a53e = _0x4521fc[_0x3b0f3b(0x18f)][_0x59c5de][_0x3b0f3b(0x167)], _0x511211 = Object[_0x3b0f3b(0xdf)](_0x4521fc[_0x3b0f3b(0x18f)])[_0x3b0f3b(0x188)](_0x314ccb => _0x314ccb[_0x3b0f3b(0x15d)] === 'AWS::Lambda::Version' && _0x314ccb['Properties']['FunctionName'][_0x3b0f3b(0x189)] === _0x59c5de)[_0x3b0f3b(0x167)];
                expect(_0x30a53e[_0x3b0f3b(0x160)][_0x3b0f3b(0x1c5)])['to'][_0x3b0f3b(0x19c)][_0x3b0f3b(0xdc)](_0x29b6b3 + _0x3b0f3b(0x1b5) + _0x46a3d6), expect(_0x511211[_0x3b0f3b(0x199)])['to'][_0x3b0f3b(0xdc)](_0x46a3d6), expect(_0x69cb99)['to']['be'][_0x3b0f3b(0x103)], expect(_0x316dd6[_0x3b0f3b(0x1c9)])['to']['be'][_0x3b0f3b(0x1d4)], expect(_0x4888a0)['to']['be'][_0x3b0f3b(0x1a0)](_0x3b0f3b(0x1b6), [
                    _0x3b0f3b(0x1bc),
                    '-t',
                    _0x4f11da[_0x3b0f3b(0x1bd)]() + _0x3b0f3b(0x1bf),
                    '-f',
                    path['join'](_0x506fc9, 'Dockerfile.dev'),
                    './'
                ]);
            }), it('should\x20work\x20correctly\x20when\x20image\x20is\x20defined\x20with\x20`cacheFrom`\x20set', async () => {
                const _0x434090 = _0x1ad93e, _0x755132 = {
                        ..._0x3eb0d7,
                        'ECR': {
                            ..._0x3eb0d7[_0x434090(0x1b4)],
                            'describeRepositories': _0x69cb99['resolves']({ 'repositories': [{ 'repositoryUri': _0x29b6b3 }] }),
                            'createRepository': _0x316dd6
                        }
                    }, {
                        awsNaming: _0x4d5303,
                        cfTemplate: _0x23cacd,
                        fixtureData: {servicePath: _0x32106f}
                    } = await runServerless({
                        'fixture': 'ecr',
                        'command': _0x434090(0x15b),
                        'awsRequestStubMap': _0x755132,
                        'modulesCacheStub': _0x3e6653,
                        'configExt': {
                            'provider': {
                                'ecr': {
                                    'images': {
                                        'baseimage': {
                                            'path': './',
                                            'file': _0x434090(0x1c4),
                                            'cacheFrom': [_0x434090(0x1d5)]
                                        }
                                    }
                                }
                            }
                        }
                    }), _0x5a6da8 = _0x4d5303[_0x434090(0x193)](_0x434090(0xd2)), _0x1be7f8 = _0x23cacd[_0x434090(0x18f)][_0x5a6da8]['Properties'], _0x2b2a26 = Object[_0x434090(0xdf)](_0x23cacd['Resources'])['find'](_0x422779 => _0x422779[_0x434090(0x15d)] === _0x434090(0x1d2) && _0x422779[_0x434090(0x167)]['FunctionName'][_0x434090(0x189)] === _0x5a6da8)['Properties'];
                expect(_0x1be7f8[_0x434090(0x160)][_0x434090(0x1c5)])['to'][_0x434090(0x19c)][_0x434090(0xdc)](_0x29b6b3 + _0x434090(0x1b5) + _0x46a3d6), expect(_0x2b2a26['CodeSha256'])['to'][_0x434090(0xdc)](_0x46a3d6), expect(_0x69cb99)['to']['be'][_0x434090(0x103)], expect(_0x316dd6[_0x434090(0x1c9)])['to']['be']['true'], expect(_0x4888a0)['to']['be']['calledWith'](_0x434090(0x1b6), [
                    _0x434090(0x1bc),
                    '-t',
                    _0x4d5303['getEcrRepositoryName']() + _0x434090(0x1bf),
                    '-f',
                    path[_0x434090(0x1d6)](_0x32106f, _0x434090(0x1c4)),
                    '--cache-from',
                    _0x434090(0x1d5),
                    './'
                ]);
            }), it(_0x1ad93e(0x1d7), async () => {
                const _0x57453b = _0x1ad93e, _0x265576 = {
                        ..._0x3eb0d7,
                        'ECR': {
                            ..._0x3eb0d7['ECR'],
                            'describeRepositories': _0x69cb99[_0x57453b(0xec)]({ 'repositories': [{ 'repositoryUri': _0x29b6b3 }] }),
                            'createRepository': _0x316dd6
                        }
                    }, {
                        awsNaming: _0x494272,
                        cfTemplate: _0x6c50cf,
                        fixtureData: {servicePath: _0x35e2f9}
                    } = await runServerless({
                        'fixture': 'ecr',
                        'command': _0x57453b(0x15b),
                        'awsRequestStubMap': _0x265576,
                        'modulesCacheStub': _0x3e6653,
                        'configExt': {
                            'provider': {
                                'ecr': {
                                    'images': {
                                        'baseimage': {
                                            'path': './',
                                            'file': 'Dockerfile.dev',
                                            'buildArgs': { 'TESTKEY': _0x57453b(0x1d8) }
                                        }
                                    }
                                }
                            }
                        }
                    }), _0x3f9efd = _0x494272['getLambdaLogicalId'](_0x57453b(0xd2)), _0x23618e = _0x6c50cf[_0x57453b(0x18f)][_0x3f9efd][_0x57453b(0x167)], _0x54775f = Object[_0x57453b(0xdf)](_0x6c50cf['Resources'])[_0x57453b(0x188)](_0x459f0f => _0x459f0f[_0x57453b(0x15d)] === _0x57453b(0x1d2) && _0x459f0f[_0x57453b(0x167)][_0x57453b(0x1d3)][_0x57453b(0x189)] === _0x3f9efd)[_0x57453b(0x167)];
                expect(_0x23618e[_0x57453b(0x160)][_0x57453b(0x1c5)])['to'][_0x57453b(0x19c)]['equal'](_0x29b6b3 + _0x57453b(0x1b5) + _0x46a3d6), expect(_0x54775f[_0x57453b(0x199)])['to'][_0x57453b(0xdc)](_0x46a3d6), expect(_0x69cb99)['to']['be'][_0x57453b(0x103)], expect(_0x316dd6[_0x57453b(0x1c9)])['to']['be']['true'], expect(_0x4888a0)['to']['be'][_0x57453b(0x1a0)](_0x57453b(0x1b6), [
                    'build',
                    '-t',
                    _0x494272[_0x57453b(0x1bd)]() + _0x57453b(0x1bf),
                    '-f',
                    path[_0x57453b(0x1d6)](_0x35e2f9, 'Dockerfile.dev'),
                    '--build-arg',
                    _0x57453b(0x1d9),
                    './'
                ]);
            }), it('should\x20work\x20correctly\x20when\x20`functions[].image`\x20is\x20defined\x20with\x20explicit\x20name', async () => {
                const _0x48fce1 = _0x1ad93e, _0x5eb789 = {
                        ..._0x3eb0d7,
                        'ECR': {
                            ..._0x3eb0d7[_0x48fce1(0x1b4)],
                            'describeRepositories': _0x69cb99[_0x48fce1(0xec)]({ 'repositories': [{ 'repositoryUri': _0x29b6b3 }] }),
                            'createRepository': _0x316dd6
                        }
                    }, {
                        awsNaming: _0x2711d9,
                        cfTemplate: _0x23a8b8
                    } = await runServerless({
                        'fixture': _0x48fce1(0x180),
                        'command': 'package',
                        'awsRequestStubMap': _0x5eb789,
                        'modulesCacheStub': _0x3e6653,
                        'configExt': {
                            'provider': { 'ecr': { 'images': { 'baseimage': './' } } },
                            'functions': { 'foo': { 'image': { 'name': 'baseimage' } } }
                        }
                    }), _0x5de8d5 = _0x2711d9[_0x48fce1(0x193)](_0x48fce1(0xd2)), _0x3ff964 = _0x23a8b8['Resources'][_0x5de8d5][_0x48fce1(0x167)], _0x34658f = _0x4d7900(_0x23a8b8[_0x48fce1(0x18f)], _0x5de8d5);
                expect(_0x3ff964[_0x48fce1(0x160)][_0x48fce1(0x1c5)])['to'][_0x48fce1(0x19c)][_0x48fce1(0xdc)](_0x29b6b3 + _0x48fce1(0x1b5) + _0x46a3d6), expect(_0x34658f[_0x48fce1(0x199)])['to']['equal'](_0x46a3d6);
            }), it(_0x1ad93e(0x1da), async () => {
                const _0x455289 = _0x1ad93e;
                await expect(runServerless({
                    'fixture': _0x455289(0x180),
                    'command': _0x455289(0x15b),
                    'awsRequestStubMap': _0x3eb0d7,
                    'modulesCacheStub': { 'child-process-ext/spawn': sinon[_0x455289(0xeb)]()['throws']() }
                }))['to']['be'][_0x455289(0x17a)][_0x455289(0x182)][_0x455289(0x16e)][_0x455289(0xf8)][_0x455289(0x17b)]('code', _0x455289(0x1db));
            }), it(_0x1ad93e(0x1dc), async () => {
                const _0x43fb7b = _0x1ad93e;
                await expect(runServerless({
                    'fixture': _0x43fb7b(0x180),
                    'command': _0x43fb7b(0x15b),
                    'awsRequestStubMap': _0x3eb0d7,
                    'modulesCacheStub': {
                        ..._0x3e6653,
                        'child-process-ext/spawn': sinon[_0x43fb7b(0xeb)]()[_0x43fb7b(0x1af)]({})['onSecondCall']()[_0x43fb7b(0x1c2)]()
                    }
                }))['to']['be'][_0x43fb7b(0x17a)]['rejected'][_0x43fb7b(0x16e)]['have'][_0x43fb7b(0x17b)](_0x43fb7b(0x17c), _0x43fb7b(0x1dd));
            }), it('should\x20fail\x20when\x20docker\x20tag\x20fails', async () => {
                const _0x33e2a7 = _0x1ad93e;
                await expect(runServerless({
                    'fixture': _0x33e2a7(0x180),
                    'command': _0x33e2a7(0x15b),
                    'awsRequestStubMap': _0x3eb0d7,
                    'modulesCacheStub': {
                        ..._0x3e6653,
                        'child-process-ext/spawn': sinon['stub']()[_0x33e2a7(0x1af)]({})[_0x33e2a7(0x1c7)](0x2)[_0x33e2a7(0x1c2)]()
                    }
                }))['to']['be'][_0x33e2a7(0x17a)][_0x33e2a7(0x182)]['and'][_0x33e2a7(0xf8)]['property'](_0x33e2a7(0x17c), _0x33e2a7(0x1de));
            }), it(_0x1ad93e(0x1df), async () => {
                const _0x3b8a68 = _0x1ad93e;
                await expect(runServerless({
                    'fixture': _0x3b8a68(0x180),
                    'command': _0x3b8a68(0x15b),
                    'awsRequestStubMap': _0x3eb0d7,
                    'modulesCacheStub': {
                        ..._0x3e6653,
                        'child-process-ext/spawn': sinon[_0x3b8a68(0xeb)]()[_0x3b8a68(0x1af)]({})['onCall'](0x3)[_0x3b8a68(0x1c2)]()
                    }
                }))['to']['be'][_0x3b8a68(0x17a)][_0x3b8a68(0x182)][_0x3b8a68(0x16e)]['have']['property'](_0x3b8a68(0x17c), _0x3b8a68(0x1e0));
            }), it(_0x1ad93e(0x1e1), async () => {
                const _0xa55500 = _0x1ad93e;
                await expect(runServerless({
                    'fixture': _0xa55500(0x180),
                    'command': _0xa55500(0x15b),
                    'awsRequestStubMap': _0x3eb0d7,
                    'modulesCacheStub': {
                        ..._0x3e6653,
                        'child-process-ext/spawn': sinon[_0xa55500(0xeb)]()[_0xa55500(0x1af)]({})['onCall'](0x3)[_0xa55500(0x1c2)]({ 'stdBuffer': _0xa55500(0x1c8) })[_0xa55500(0x1c7)](0x4)[_0xa55500(0x1c2)]()
                    }
                }))['to']['be']['eventually'][_0xa55500(0x182)][_0xa55500(0x16e)][_0xa55500(0xf8)][_0xa55500(0x17b)](_0xa55500(0x17c), _0xa55500(0x1e2));
            });
        });
    });
});
