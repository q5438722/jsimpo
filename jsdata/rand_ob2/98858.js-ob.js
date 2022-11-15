'use strict';
const _0x2773 = [
    'should\x20throw\x20an\x20error\x20if\x20a\x20non-existent\x20profile\x20is\x20set',
    'nonExistent',
    '#getRegion()',
    'should\x20default\x20to\x20\x22us-east-1\x22',
    'getRegion',
    'eu-central-1',
    'should\x20allow\x20to\x20override\x20via\x20CLI\x20`--region`\x20param',
    'us-west-1',
    '#getProfile()',
    'should\x20allow\x20to\x20set\x20via\x20`provider.profile`',
    'test-profile',
    'getProfile',
    'cli-override',
    'should\x20allow\x20to\x20set\x20via\x20CLI\x20`--aws-profile`\x20param',
    'aws-override',
    'should\x20put\x20all\x20artifacts\x20in\x20namespaced\x20folder',
    'function',
    'Resources',
    'Type',
    'AWS::Lambda::Function',
    'length',
    'greaterThanOrEqual',
    'Properties',
    'S3Key',
    'string',
    'and',
    'satisfy',
    'should\x20support\x20custom\x20namespaced\x20folder',
    'package',
    'test-prefix',
    'Code',
    'should\x20support\x20`provider.alb.targetGroupPrefix`',
    '50dc6c495c0c9188',
    'arn:aws:elasticloadbalancing:us-east-1:123456789012:listener/app/my-load-balancer/',
    'a-prefix',
    'index.handler',
    'AWS::ElasticLoadBalancingV2::TargetGroup',
    'Name',
    'startsWith',
    '#getStage()',
    'getStage',
    'should\x20allow\x20to\x20override\x20via\x20`provider.stage`',
    'staging',
    'should\x20allow\x20to\x20override\x20via\x20CLI\x20`--stage`\x20param',
    'production',
    'when\x20resolving\x20images',
    '000000000000.dkr.ecr.sa-east-1.amazonaws.com/test-lambda-docker@sha256:6bb600b4d6e1d7cf521097177dd0c4e9ea373edb91984a505333be8ac9455d38',
    'invalidimage',
    'eventually',
    'property',
    'code',
    'should\x20fail\x20if\x20`functions[].image`\x20references\x20image\x20without\x20path\x20and\x20uri',
    'rejected',
    'should\x20fail\x20if\x20`functions[].image`\x20references\x20image\x20from\x20`provider.ecr.images`\x20that\x20has\x20invalid\x20path',
    'ecr',
    'DOCKERFILE_NOT_AVAILABLE_ERROR',
    'should\x20fail\x20if\x20`functions[].image`\x20references\x20image\x20not\x20defined\x20in\x20`provider.ecr.images`',
    'REFERENCED_FUNCTION_IMAGE_NOT_DEFINED_IN_PROVIDER',
    'FUNCTION_IMAGE_BOTH_URI_AND_NAME_DEFINED_ERROR',
    'should\x20fail\x20if\x20neither\x20uri\x20nor\x20name\x20is\x20provided\x20for\x20an\x20image',
    'find',
    'AWS::Lambda::Version',
    'FunctionName',
    'Ref',
    'with\x20`functions[].image`\x20referencing\x20existing\x20images',
    '6bb600b4d6e1d7cf521097177dd0c4e9ea373edb91984a505333be8ac9455d38',
    '000000000000.dkr.ecr.sa-east-1.amazonaws.com/test-lambda-docker@sha256:',
    'sha256:2e6b10a4b1ca0f6d3563a8a1f034dde7c4d7c93b50aa91f24311765d0822186b',
    'imagewithexplicituri',
    'imagewithimplicituri',
    'serviceConfig',
    'should\x20support\x20`functions[].image`\x20with\x20implicit\x20uri\x20with\x20sha',
    'getLambdaLogicalId',
    'fnImage',
    'image',
    'Runtime',
    'lastIndexOf',
    'slice',
    'functions',
    'fnImageWithExplicitUri',
    'uri',
    'CodeSha256',
    'fnImageWithTag',
    'split',
    'Handler',
    'calledWith',
    'test-lambda-docker',
    'should\x20support\x20`functions[].image`\x20with\x20tag\x20and\x20repository\x20name\x20with\x20slash',
    'fnImageWithTagAndRepoWithSlashes',
    'stable',
    '000000000000',
    'test-lambda/repo-docker',
    'should\x20support\x20`functions[].image`\x20that\x20references\x20provider.ecr.images\x20defined\x20with\x20explicit\x20uri',
    'fnProviderImageWithImplicitUri',
    'with\x20`functions[].image`\x20referencing\x20images\x20that\x20require\x20building',
    'ffffffff-ffff-ffff-ffff-ffffffffffff',
    'XXXXXXXXXXXXXXXXXXXXX',
    '999999999999',
    'arn:aws:iam::999999999999:user/test',
    'returns',
    'digest:\x20sha256:',
    '\x20size:\x201787',
    'reset',
    'resetHistory',
    'should\x20work\x20correctly\x20when\x20repository\x20exists\x20beforehand',
    'ECR',
    'ImageUri',
    '@sha256:',
    'notCalled',
    'true',
    '--version',
    'login',
    'AWS',
    '--password',
    'dockerauthtoken',
    'docker',
    'build',
    ':baseimage',
    'join',
    'Dockerfile',
    'tag',
    'push',
    'should\x20work\x20correctly\x20when\x20repository\x20does\x20not\x20exist\x20beforehand\x20and\x20scanOnPush\x20is\x20set',
    'throws',
    'RepositoryNotFoundException',
    'Dockerfile.dev',
    'imageScanningConfiguration',
    'should\x20login\x20and\x20retry\x20when\x20docker\x20push\x20fails\x20with\x20no\x20basic\x20auth\x20credentials\x20error',
    'onCall',
    'no\x20basic\x20auth\x20credentials',
    'getEcrRepositoryName',
    '--username',
    'should\x20login\x20and\x20retry\x20when\x20docker\x20push\x20fails\x20with\x20token\x20has\x20expired\x20error',
    'authorization\x20token\x20has\x20expired',
    'should\x20emit\x20warning\x20if\x20docker\x20login\x20stores\x20unencrypted\x20credentials',
    'your\x20password\x20will\x20be\x20stored\x20unencrypted',
    'include',
    'WARNING:\x20Docker\x20authentication\x20token\x20will\x20be\x20stored\x20unencrypted\x20in\x20docker\x20config.',
    'should\x20work\x20correctly\x20when\x20image\x20is\x20defined\x20with\x20implicit\x20path\x20in\x20provider',
    'should\x20work\x20correctly\x20when\x20image\x20is\x20defined\x20with\x20`file`\x20set',
    'should\x20work\x20correctly\x20when\x20image\x20is\x20defined\x20with\x20`cacheFrom`\x20set',
    'my-image:latest',
    '--cache-from',
    'TESTVAL',
    '--build-arg',
    'TESTKEY=TESTVAL',
    'should\x20work\x20correctly\x20when\x20`functions[].image`\x20is\x20defined\x20with\x20explicit\x20name',
    'baseimage',
    'should\x20fail\x20when\x20docker\x20command\x20is\x20not\x20available',
    'DOCKER_COMMAND_NOT_AVAILABLE',
    'should\x20fail\x20when\x20docker\x20build\x20fails',
    'should\x20fail\x20when\x20docker\x20tag\x20fails',
    'DOCKER_TAG_ERROR',
    'DOCKER_PUSH_ERROR',
    'should\x20fail\x20when\x20docker\x20login\x20fails',
    'DOCKER_LOGIN_ERROR',
    '95281ONGdnc',
    '74767RdzIwx',
    '717476WXsXEx',
    '53cWgFon',
    '22923rIxIox',
    '90622WtnRYt',
    '3ofAdUD',
    '357724HcjCLW',
    '1417871NLzGCH',
    'lodash',
    'chai',
    'path',
    'fs-extra',
    'proxyquire',
    'sinon',
    'process-utils/override-env',
    'use',
    'chai-as-promised',
    'sinon-chai',
    'AwsProvider',
    'dev',
    'us-east-1',
    'cli',
    'classes',
    'CLI',
    '#constructor()',
    'should\x20set\x20Serverless\x20instance',
    'serverless',
    'equal',
    'undefined',
    'should\x20set\x20the\x20provider\x20property',
    'provider',
    'myStage',
    'my-stage',
    'my_stage',
    '${opt:stage,\x20\x27prod\x27}',
    'forEach',
    'new-service',
    'aws',
    'foo',
    'GET',
    'Service',
    'not',
    'throw',
    'deploymentBucket\x20configuration',
    'service',
    'deploymentBucket',
    'should\x20do\x20nothing\x20if\x20the\x20value\x20is\x20a\x20string',
    'my.deployment.bucket',
    'values',
    '#getValues',
    'should\x20return\x20an\x20array\x20of\x20values\x20given\x20paths\x20to\x20them',
    'getValues',
    'eql',
    'should\x20ignore\x20entries\x20without\x20a\x20\x27value\x27\x20attribute',
    'cloneDeep',
    'value',
    'should\x20ignore\x20entries\x20with\x20an\x20undefined\x20\x27value\x27\x20attribute',
    'firstValue',
    'should\x20return\x20the\x20first\x20value',
    'should\x20return\x20the\x20middle\x20value',
    'should\x20return\x20the\x20last\x20object\x20if\x20none\x20have\x20valid\x20values',
    '#request()',
    'stub',
    'resolves',
    'memoized',
    'noCallThru',
    'load',
    'cachedCredentials',
    'accessKeyId',
    'sessionToken',
    'request',
    'getObject',
    'args',
    'deep',
    'have',
    'been',
    'then',
    'should\x20detect\x20incompatible\x20legacy\x20use\x20of\x20aws\x20request\x20and\x20print\x20a\x20debug\x20warning',
    'env',
    'SLS_DEBUG',
    'incompatible\x20string\x20option',
    'WARNING:\x20Inappropriate\x20call\x20of\x20provider.request()',
    '#getServerlessDeploymentBucketName()',
    'should\x20return\x20the\x20name\x20of\x20the\x20serverless\x20deployment\x20bucket',
    'getServerlessDeploymentBucketName',
    'calledOnce',
    'calledWithExactly',
    'CloudFormation',
    'describeStackResource',
    'naming',
    'getStackName',
    'getDeploymentBucketLogicalId',
    'restore',
    'serverlessDeploymentBucketName',
    'custom-bucket',
    '#getAccountInfo()',
    '12345678',
    'ABCDEFGHIJKLMNOPQRSTU:VWXYZ',
    'arn:aws:sts::123456789012:assumed-role/ROLE-NAME/VWXYZ',
    'getAccountInfo',
    'accountId',
    'should\x20return\x20the\x20AWS\x20account\x20id',
    '12345678-1234-1234-1234-123456789012',
    '#isS3TransferAccelerationEnabled()',
    'should\x20return\x20false\x20by\x20default',
    'options',
    'aws-s3-accelerate',
    'isS3TransferAccelerationEnabled',
    '#disableTransferAccelerationForCurrentDeploy()',
    'should\x20remove\x20the\x20corresponding\x20option\x20for\x20the\x20current\x20deploy',
    'test/unit/lib/plugins/aws/provider.test.js',
    '#getProviderName\x20and\x20#sessionCache',
    '123',
    'credentials',
    'abc',
    'keyId',
    'secretAccessKey',
    'secret',
    '`AwsProvider.getProviderName()`\x20should\x20resolve\x20provider\x20name',
    'getProviderName',
    'should\x20retain\x20sessionToken\x20eventually\x20updated\x20internally\x20by\x20SDK',
    'getProvider',
    'getCredentials',
    'describeStacks',
    '#getCredentials()',
    'ensureDir',
    'resolve',
    'homedir',
    './.aws',
    'should\x20get\x20credentials\x20from\x20default\x20AWS\x20profile',
    'print',
    'DEFAULTKEYID',
    'should\x20get\x20credentials\x20from\x20custom\x20default\x20AWS\x20profile,\x20set\x20by\x20AWS_DEFAULT_PROFILE',
    'AWS_DEFAULT_PROFILE',
    'NOTDEFAULTKEYID',
    'notDefaultWithRole',
    'should\x20get\x20credentials\x20from\x20`provider.profile`',
    'profile',
    'should\x20accept\x20a\x20role\x20to\x20assume\x20on\x20credentials',
    'roleArn',
    'NOTDEFAULTWITHROLEROLE',
    'should\x20get\x20credentials\x20from\x20environment\x20variables',
    'AWS_ACCESS_KEY_ID',
    'ENVKEYID',
    'AWS_SECRET_ACCESS_KEY',
    './custom_credentials',
    '\x0a[default]\x0aaws_access_key_id\x20=\x20DEFAULTKEYID\x0aaws_secret_access_key\x20=\x20DEFAULTSECRET\x0a\x0a[customProfile]\x0aaws_access_key_id\x20=\x20CUSTOMKEYID\x0aaws_secret_access_key\x20=\x20CUSTOMSECRET\x0a',
    'AWS_PROFILE',
    'customProfile',
    'AWS_SHARED_CREDENTIALS_FILE',
    'toString',
    'should\x20get\x20credentials\x20from\x20AWS_PROFILE\x20environment\x20variable',
    'should\x20get\x20credentials\x20from\x20stage\x20specific\x20environment\x20variables',
    'testStage',
    'AWS_TESTSTAGE_ACCESS_KEY_ID',
    'AWS_TESTSTAGE_SECRET_ACCESS_KEY',
    'TESTSTAGESECRET',
    'TESTSTAGEACCESSKEYID',
    'should\x20get\x20credentials\x20from\x20AWS_{stage}_PROFILE\x20environment\x20variable',
    'notDefault',
    'profile\x20with\x20cli\x20and\x20encryption',
    'should\x20get\x20credentials\x20\x22--aws-profile\x22\x20CLI\x20option',
    'should\x20set\x20the\x20signatureVersion\x20to\x20v4\x20if\x20the\x20serverSideEncryption\x20is\x20aws:kms',
    'signatureVersion'
];
const _0x1e0e04 = _0x4ba0;
function _0x4ba0(_0xe7d099, _0x17674a) {
    return _0x4ba0 = function (_0x277371, _0x4ba049) {
        _0x277371 = _0x277371 - 0x15a;
        let _0x5670b5 = _0x2773[_0x277371];
        return _0x5670b5;
    }, _0x4ba0(_0xe7d099, _0x17674a);
}
(function (_0xd9ab16, _0x146791) {
    const _0x2ff46d = _0x4ba0;
    while (!![]) {
        try {
            const _0x3cd567 = -parseInt(_0x2ff46d(0x15a)) + -parseInt(_0x2ff46d(0x15b)) + parseInt(_0x2ff46d(0x15c)) + -parseInt(_0x2ff46d(0x15d)) * -parseInt(_0x2ff46d(0x15e)) + parseInt(_0x2ff46d(0x15f)) * parseInt(_0x2ff46d(0x160)) + parseInt(_0x2ff46d(0x161)) + -parseInt(_0x2ff46d(0x162));
            if (_0x3cd567 === _0x146791)
                break;
            else
                _0xd9ab16['push'](_0xd9ab16['shift']());
        } catch (_0x9de10f) {
            _0xd9ab16['push'](_0xd9ab16['shift']());
        }
    }
}(_0x2773, 0xedcf2));
const _ = require(_0x1e0e04(0x163)), chai = require(_0x1e0e04(0x164)), path = require(_0x1e0e04(0x165)), fs = require(_0x1e0e04(0x166)), os = require('os'), proxyquire = require(_0x1e0e04(0x167)), sinon = require(_0x1e0e04(0x168)), overrideEnv = require(_0x1e0e04(0x169)), AwsProvider = require('../../../../../lib/plugins/aws/provider'), Serverless = require('../../../../../lib/Serverless'), runServerless = require('../../../../utils/run-serverless');
chai[_0x1e0e04(0x16a)](require(_0x1e0e04(0x16b))), chai['use'](require(_0x1e0e04(0x16c)));
const expect = chai['expect'];
describe(_0x1e0e04(0x16d), () => {
    const _0x29f76a = _0x1e0e04;
    let _0x3a2be9, _0x58b033, _0x1a4d2f;
    const _0x55dfd3 = {
        'stage': _0x29f76a(0x16e),
        'region': _0x29f76a(0x16f)
    };
    beforeEach(() => {
        const _0x1bbf33 = _0x29f76a;
        ({restoreEnv: _0x1a4d2f} = overrideEnv(), _0x58b033 = new Serverless(_0x55dfd3), _0x58b033[_0x1bbf33(0x170)] = new _0x58b033[(_0x1bbf33(0x171))][(_0x1bbf33(0x172))](), _0x3a2be9 = new AwsProvider(_0x58b033, _0x55dfd3));
    }), afterEach(() => _0x1a4d2f()), describe(_0x29f76a(0x173), () => {
        const _0x3bb64c = _0x29f76a;
        it(_0x3bb64c(0x174), () => {
            const _0x361233 = _0x3bb64c;
            expect(typeof _0x3a2be9[_0x361233(0x175)])['to']['not'][_0x361233(0x176)](_0x361233(0x177));
        }), it(_0x3bb64c(0x178), () => {
            const _0x3e9f01 = _0x3bb64c;
            expect(_0x3a2be9[_0x3e9f01(0x179)])['to']['equal'](_0x3a2be9);
        }), describe('stage\x20name\x20validation', () => {
            const _0x4332ab = _0x3bb64c, _0x31129e = [
                    _0x4332ab(0x17a),
                    _0x4332ab(0x17b),
                    _0x4332ab(0x17c),
                    _0x4332ab(0x17d)
                ];
            _0x31129e[_0x4332ab(0x17e)](_0x3c52e4 => {
                it('should\x20not\x20throw\x20an\x20error\x20before\x20variable\x20population\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20even\x20if\x20http\x20event\x20is\x20present\x20and\x20stage\x20is\x20' + _0x3c52e4, () => {
                    const _0x560474 = _0x4ba0, _0x4c3250 = { 'stage': _0x3c52e4 };
                    _0x58b033 = new Serverless(_0x4c3250);
                    const _0x5b6444 = {
                        'service': _0x560474(0x17f),
                        'provider': {
                            'name': _0x560474(0x180),
                            'stage': _0x3c52e4
                        },
                        'functions': {
                            'first': {
                                'events': [{
                                        'http': {
                                            'path': _0x560474(0x181),
                                            'method': _0x560474(0x182)
                                        }
                                    }]
                            }
                        }
                    };
                    _0x58b033['service'] = new _0x58b033[(_0x560474(0x171))][(_0x560474(0x183))](_0x58b033, _0x5b6444), expect(() => new AwsProvider(_0x58b033, _0x4c3250))['to'][_0x560474(0x184)][_0x560474(0x185)](Error);
                });
            });
        }), describe(_0x3bb64c(0x186), () => {
            const _0x47e865 = _0x3bb64c;
            it('should\x20do\x20nothing\x20if\x20not\x20defined', () => {
                const _0x5096e5 = _0x4ba0;
                _0x58b033[_0x5096e5(0x187)][_0x5096e5(0x179)][_0x5096e5(0x188)] = undefined;
                const _0x463b13 = new AwsProvider(_0x58b033, _0x55dfd3);
                expect(_0x463b13[_0x5096e5(0x175)][_0x5096e5(0x187)]['provider'][_0x5096e5(0x188)])['to'][_0x5096e5(0x176)](undefined);
            }), it(_0x47e865(0x189), () => {
                const _0xa9eefe = _0x47e865;
                _0x58b033['service']['provider'][_0xa9eefe(0x188)] = _0xa9eefe(0x18a);
                const _0x256a7e = new AwsProvider(_0x58b033, _0x55dfd3);
                expect(_0x256a7e[_0xa9eefe(0x175)][_0xa9eefe(0x187)][_0xa9eefe(0x179)]['deploymentBucket'])['to'][_0xa9eefe(0x176)](_0xa9eefe(0x18a));
            });
        });
    }), describe(_0x29f76a(0x18b), () => {
        const _0x48c681 = _0x29f76a, _0x4e5c46 = {
                'a': 'b',
                'c': {
                    'd': 'e',
                    'f': { 'g': 'h' }
                }
            }, _0x117a83 = [
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
            ], _0x55f40e = [
                {
                    'path': _0x117a83[0x0],
                    'value': _0x4e5c46['a']
                },
                {
                    'path': _0x117a83[0x1],
                    'value': _0x4e5c46['c']['d']
                },
                {
                    'path': _0x117a83[0x2],
                    'value': _0x4e5c46['c']['f']['g']
                }
            ];
        describe(_0x48c681(0x18c), () => {
            const _0x39fe8e = _0x48c681;
            it(_0x39fe8e(0x18d), () => {
                const _0x34a5ab = _0x39fe8e;
                expect(_0x3a2be9[_0x34a5ab(0x18e)](_0x4e5c46, _0x117a83))['to'][_0x34a5ab(0x18f)](_0x55f40e);
            });
        }), describe('#firstValue', () => {
            const _0x117f5f = _0x48c681;
            it(_0x117f5f(0x190), () => {
                const _0x145b06 = _0x117f5f, _0x590dcd = _[_0x145b06(0x191)](_0x55f40e);
                delete _0x590dcd[0x0][_0x145b06(0x192)], delete _0x590dcd[0x2][_0x145b06(0x192)], expect(_0x3a2be9['firstValue'](_0x590dcd))['to'][_0x145b06(0x18f)](_0x55f40e[0x1]);
            }), it(_0x117f5f(0x193), () => {
                const _0x467428 = _0x117f5f, _0x203a23 = _[_0x467428(0x191)](_0x55f40e);
                _0x203a23[0x0][_0x467428(0x192)] = undefined, _0x203a23[0x2][_0x467428(0x192)] = undefined, expect(_0x3a2be9[_0x467428(0x194)](_0x203a23))['to']['eql'](_0x55f40e[0x1]);
            }), it(_0x117f5f(0x195), () => {
                const _0x21c7d9 = _0x117f5f;
                expect(_0x3a2be9[_0x21c7d9(0x194)](_0x55f40e))['to'][_0x21c7d9(0x176)](_0x55f40e[0x0]);
            }), it(_0x117f5f(0x196), () => {
                const _0x453ea7 = _0x117f5f, _0x1bdbb5 = _[_0x453ea7(0x191)](_0x55f40e);
                delete _0x1bdbb5[0x0][_0x453ea7(0x192)], delete _0x1bdbb5[0x2]['value'], expect(_0x3a2be9[_0x453ea7(0x194)](_0x1bdbb5))['to']['equal'](_0x1bdbb5[0x1]);
            }), it('should\x20return\x20the\x20last\x20value', () => {
                const _0x38e321 = _0x117f5f, _0x4858db = _[_0x38e321(0x191)](_0x55f40e);
                delete _0x4858db[0x0][_0x38e321(0x192)], delete _0x4858db[0x1][_0x38e321(0x192)], expect(_0x3a2be9[_0x38e321(0x194)](_0x4858db))['to'][_0x38e321(0x176)](_0x4858db[0x2]);
            }), it(_0x117f5f(0x197), () => {
                const _0x32c725 = _0x117f5f, _0x3273fb = _[_0x32c725(0x191)](_0x55f40e);
                delete _0x3273fb[0x0][_0x32c725(0x192)], delete _0x3273fb[0x1]['value'], delete _0x3273fb[0x2]['value'], expect(_0x3a2be9['firstValue'](_0x3273fb))['to'][_0x32c725(0x176)](_0x3273fb[0x2]);
            });
        });
    }), describe(_0x29f76a(0x198), () => {
        const _0x506cc0 = _0x29f76a;
        let _0x42a1fa, _0x5566e7, _0x342a6c;
        beforeEach(() => {
            const _0x1b5187 = _0x4ba0;
            _0x342a6c = sinon[_0x1b5187(0x199)](), _0x42a1fa = sinon[_0x1b5187(0x199)]()[_0x1b5187(0x19a)](), _0x42a1fa[_0x1b5187(0x19b)] = sinon[_0x1b5187(0x199)]()[_0x1b5187(0x19a)]();
            const _0x279ead = proxyquire[_0x1b5187(0x19c)]()[_0x1b5187(0x19d)]('../../../../../lib/plugins/aws/provider.js', {
                '../../aws/request': _0x42a1fa,
                '@serverless/utils/log': _0x342a6c
            });
            _0x5566e7 = new _0x279ead(_0x58b033, _0x55dfd3);
        }), afterEach(() => {
        }), it('should\x20pass\x20resolved\x20credentials\x20as\x20expected', async () => {
            const _0x5e6dae = _0x4ba0;
            _0x5566e7[_0x5e6dae(0x19e)] = {
                'accessKeyId': _0x5e6dae(0x19f),
                'secretAccessKey': 'secretAccessKey',
                'sessionToken': _0x5e6dae(0x1a0)
            }, await _0x5566e7[_0x5e6dae(0x1a1)]('S3', _0x5e6dae(0x1a2), {}), expect(_0x42a1fa[_0x5e6dae(0x1a3)][0x0][0x0])['to'][_0x5e6dae(0x1a4)][_0x5e6dae(0x176)]({
                'name': 'S3',
                'params': {
                    ..._0x5566e7[_0x5e6dae(0x19e)],
                    'region': 'us-east-1',
                    'isS3TransferAccelerationEnabled': ![]
                }
            });
        }), it('should\x20trigger\x20the\x20expected\x20AWS\x20SDK\x20invokation', () => {
            const _0x17b75a = _0x4ba0;
            return _0x5566e7[_0x17b75a(0x1a1)]('S3', _0x17b75a(0x1a2), {})['then'](() => {
                const _0x51803c = _0x17b75a;
                expect(_0x42a1fa)['to'][_0x51803c(0x1a5)][_0x51803c(0x1a6)]['calledOnce'];
            });
        }), it('should\x20use\x20local\x20cache\x20when\x20using\x20{useCache:\x20true}', () => {
            const _0x518f74 = _0x4ba0;
            return _0x5566e7['request']('S3', _0x518f74(0x1a2), {}, { 'useCache': !![] })[_0x518f74(0x1a7)](() => _0x5566e7['request']('S3', _0x518f74(0x1a2), {}, { 'useCache': !![] }))[_0x518f74(0x1a7)](() => {
                const _0x4a33e1 = _0x518f74;
                expect(_0x42a1fa)['to'][_0x4a33e1(0x184)][_0x4a33e1(0x1a5)][_0x4a33e1(0x1a6)]['called'], expect(_0x42a1fa[_0x4a33e1(0x19b)])['to'][_0x4a33e1(0x1a5)][_0x4a33e1(0x1a6)]['calledTwice'];
            });
        }), it(_0x506cc0(0x1a8), () => {
            const _0x1943b3 = _0x506cc0;
            return process[_0x1943b3(0x1a9)][_0x1943b3(0x1aa)] = !![], _0x5566e7['request']('S3', _0x1943b3(0x1a2), {}, _0x1943b3(0x1ab))[_0x1943b3(0x1a7)](() => {
                const _0x1c22fa = _0x1943b3;
                expect(_0x342a6c)['to'][_0x1c22fa(0x1a5)][_0x1c22fa(0x1a6)]['calledWith'](_0x1c22fa(0x1ac));
            })['finally'](() => {
                const _0x333be3 = _0x1943b3;
                process['env'][_0x333be3(0x1aa)] = ![];
            });
        });
    }), describe(_0x29f76a(0x1ad), () => {
        const _0x4d4966 = _0x29f76a;
        it(_0x4d4966(0x1ae), () => {
            const _0x1f4c25 = _0x4d4966, _0x6ef044 = sinon[_0x1f4c25(0x199)](_0x3a2be9, _0x1f4c25(0x1a1))[_0x1f4c25(0x19a)]({ 'StackResourceDetail': { 'PhysicalResourceId': 'serverlessDeploymentBucketName' } });
            return _0x3a2be9[_0x1f4c25(0x1af)]()[_0x1f4c25(0x1a7)](_0x24bee5 => {
                const _0x2d3589 = _0x1f4c25;
                expect(_0x24bee5)['to'][_0x2d3589(0x176)]('serverlessDeploymentBucketName'), expect(_0x6ef044[_0x2d3589(0x1b0)])['to']['be'][_0x2d3589(0x176)](!![]), expect(_0x6ef044[_0x2d3589(0x1b1)](_0x2d3589(0x1b2), _0x2d3589(0x1b3), {
                    'StackName': _0x3a2be9[_0x2d3589(0x1b4)][_0x2d3589(0x1b5)](),
                    'LogicalResourceId': _0x3a2be9[_0x2d3589(0x1b4)][_0x2d3589(0x1b6)]()
                }))['to']['be']['equal'](!![]), _0x3a2be9[_0x2d3589(0x1a1)][_0x2d3589(0x1b7)]();
            });
        }), it('should\x20return\x20the\x20name\x20of\x20the\x20custom\x20deployment\x20bucket', () => {
            const _0xf20b93 = _0x4d4966;
            _0x3a2be9[_0xf20b93(0x175)][_0xf20b93(0x187)][_0xf20b93(0x179)][_0xf20b93(0x188)] = 'custom-bucket';
            const _0x131413 = sinon[_0xf20b93(0x199)](_0x3a2be9, 'request')['resolves']({ 'StackResourceDetail': { 'PhysicalResourceId': _0xf20b93(0x1b8) } });
            return _0x3a2be9[_0xf20b93(0x1af)]()[_0xf20b93(0x1a7)](_0x306857 => {
                const _0x560bad = _0xf20b93;
                expect(_0x131413['called'])['to']['be'][_0x560bad(0x176)](![]), expect(_0x306857)['to'][_0x560bad(0x176)](_0x560bad(0x1b9)), _0x3a2be9[_0x560bad(0x1a1)]['restore']();
            });
        });
    }), describe(_0x29f76a(0x1ba), () => {
        it('should\x20return\x20the\x20AWS\x20account\x20id\x20and\x20partition', () => {
            const _0x3be5e2 = _0x4ba0, _0x268aab = _0x3be5e2(0x1bb), _0x10b57d = _0x3be5e2(0x180), _0x49f62a = sinon['stub'](_0x3a2be9, _0x3be5e2(0x1a1))['resolves']({
                    'ResponseMetadata': { 'RequestId': '12345678-1234-1234-1234-123456789012' },
                    'UserId': _0x3be5e2(0x1bc),
                    'Account': _0x268aab,
                    'Arn': _0x3be5e2(0x1bd)
                });
            return _0x3a2be9[_0x3be5e2(0x1be)]()[_0x3be5e2(0x1a7)](_0x556f68 => {
                const _0x2b64c0 = _0x3be5e2;
                expect(_0x49f62a['calledOnce'])['to']['equal'](!![]), expect(_0x556f68[_0x2b64c0(0x1bf)])['to'][_0x2b64c0(0x176)](_0x268aab), expect(_0x556f68['partition'])['to'][_0x2b64c0(0x176)](_0x10b57d), _0x3a2be9[_0x2b64c0(0x1a1)][_0x2b64c0(0x1b7)]();
            });
        });
    }), describe('#getAccountId()', () => {
        const _0x3b4761 = _0x29f76a;
        it(_0x3b4761(0x1c0), () => {
            const _0x54a990 = _0x3b4761, _0x57561f = '12345678', _0x2de3c7 = sinon[_0x54a990(0x199)](_0x3a2be9, _0x54a990(0x1a1))[_0x54a990(0x19a)]({
                    'ResponseMetadata': { 'RequestId': _0x54a990(0x1c1) },
                    'UserId': _0x54a990(0x1bc),
                    'Account': _0x57561f,
                    'Arn': _0x54a990(0x1bd)
                });
            return _0x3a2be9['getAccountId']()['then'](_0x496e7e => {
                const _0x1834ec = _0x54a990;
                expect(_0x2de3c7['calledOnce'])['to']['equal'](!![]), expect(_0x496e7e)['to'][_0x1834ec(0x176)](_0x57561f), _0x3a2be9['request'][_0x1834ec(0x1b7)]();
            });
        });
    }), describe(_0x29f76a(0x1c2), () => {
        const _0xe83048 = _0x29f76a;
        it(_0xe83048(0x1c3), () => {
            const _0x3ce070 = _0xe83048;
            return _0x3a2be9[_0x3ce070(0x1c4)][_0x3ce070(0x1c5)] = undefined, expect(_0x3a2be9[_0x3ce070(0x1c6)]())['to']['equal'](![]);
        }), it('should\x20return\x20true\x20when\x20CLI\x20option\x20is\x20provided', () => {
            const _0x5ec0c6 = _0xe83048;
            return _0x3a2be9[_0x5ec0c6(0x1c4)][_0x5ec0c6(0x1c5)] = !![], expect(_0x3a2be9[_0x5ec0c6(0x1c6)]())['to'][_0x5ec0c6(0x176)](!![]);
        });
    }), describe(_0x29f76a(0x1c7), () => {
        const _0x32e57b = _0x29f76a;
        it(_0x32e57b(0x1c8), () => {
            const _0x31c967 = _0x32e57b;
            return _0x3a2be9[_0x31c967(0x1c4)]['aws-s3-accelerate'] = !![], _0x3a2be9['disableTransferAccelerationForCurrentDeploy'](), expect(_0x3a2be9[_0x31c967(0x1c4)][_0x31c967(0x1c5)])['to']['be'][_0x31c967(0x177)];
        });
    });
}), describe(_0x1e0e04(0x1c9), () => {
    const _0x34212b = _0x1e0e04;
    describe(_0x34212b(0x1ca), () => {
        const _0xd4fb36 = _0x34212b;
        let _0x172990;
        const _0x307f8a = _0xd4fb36(0x1cb);
        before(async () => {
            const _0x5e3b4b = _0xd4fb36;
            class _0x3f048a {
                constructor(_0x374ac3) {
                    const _0x32068e = _0x4ba0;
                    this[_0x32068e(0x1cc)] = _0x374ac3, this[_0x32068e(0x1cc)][_0x32068e(0x1cc)]['sessionToken'] = _0x307f8a;
                }
                ['describeStacks']() {
                    return {
                        'promise': async () => {
                        }
                    };
                }
            }
            class _0x4be579 {
                constructor() {
                    const _0x4f805a = _0x4ba0;
                    this[_0x4f805a(0x1a0)] = _0x4f805a(0x1cd), this[_0x4f805a(0x19f)] = _0x4f805a(0x1ce), this[_0x4f805a(0x1cf)] = _0x4f805a(0x1d0);
                }
            }
            class _0x2fdd88 {
                constructor() {
                    const _0x3c0753 = _0x4ba0;
                    this[_0x3c0753(0x1a0)] = _0x3c0753(0x1a9), this[_0x3c0753(0x19f)] = _0x3c0753(0x1ce), this[_0x3c0753(0x1cf)] = 'secret';
                }
            }
            class _0x153681 {
            }
            const _0x3049f2 = {
                    'aws-sdk': {
                        'SharedIniFileCredentials': _0x4be579,
                        'EnvironmentCredentials': _0x2fdd88,
                        'CloudFormation': _0x3f048a
                    },
                    'aws-sdk/lib/metadata_service': _0x153681
                }, {serverless: _0x586f29} = await runServerless({
                    'fixture': _0x5e3b4b(0x180),
                    'command': 'print',
                    'modulesCacheStub': _0x3049f2
                });
            _0x172990 = _0x586f29;
        }), it(_0xd4fb36(0x1d1), () => {
            const _0x87960a = _0xd4fb36;
            expect(AwsProvider[_0x87960a(0x1d2)]())['to'][_0x87960a(0x176)](_0x87960a(0x180));
        }), it(_0xd4fb36(0x1d3), async () => {
            const _0x5ad91c = _0xd4fb36;
            expect(_0x172990[_0x5ad91c(0x1d4)]('aws')[_0x5ad91c(0x1d5)]()[_0x5ad91c(0x1cc)][_0x5ad91c(0x1a0)])[_0x5ad91c(0x184)]['to']['equal'](_0x307f8a), await _0x172990[_0x5ad91c(0x1d4)](_0x5ad91c(0x180))[_0x5ad91c(0x1a1)](_0x5ad91c(0x1b2), _0x5ad91c(0x1d6)), expect(_0x172990['getProvider'](_0x5ad91c(0x180))['getCredentials']()[_0x5ad91c(0x1cc)]['sessionToken'])['to'][_0x5ad91c(0x176)](_0x307f8a);
        });
    }), describe(_0x34212b(0x1d7), () => {
        const _0x160527 = _0x34212b;
        before(async () => {
            const _0x5ee016 = _0x4ba0;
            await fs[_0x5ee016(0x1d8)](path[_0x5ee016(0x1d9)](os[_0x5ee016(0x1da)](), _0x5ee016(0x1db))), await fs['outputFile'](path[_0x5ee016(0x1d9)](os['homedir'](), './.aws/credentials'), '\x0a[default]\x0aaws_access_key_id\x20=\x20DEFAULTKEYID\x0aaws_secret_access_key\x20=\x20DEFAULTSECRET\x0a\x0a[notDefault]\x0aaws_access_key_id\x20=\x20NOTDEFAULTKEYID\x0aaws_secret_access_key\x20=\x20NOTDEFAULTSECRET\x0a\x0a[notDefaultWithRole]\x0asource_profile\x20=\x20notDefault\x0arole_arn\x20=\x20NOTDEFAULTWITHROLEROLE\x0a', { 'flag': 'w+' });
        }), it(_0x160527(0x1dc), async () => {
            const _0x30565f = _0x160527, {serverless: _0x558dd5} = await runServerless({
                    'fixture': _0x30565f(0x180),
                    'command': _0x30565f(0x1dd)
                }), _0x5cf87b = _0x558dd5['getProvider'](_0x30565f(0x180))[_0x30565f(0x1d5)]();
            expect(_0x5cf87b['credentials'][_0x30565f(0x19f)])['to'][_0x30565f(0x176)](_0x30565f(0x1de));
        }), it(_0x160527(0x1df), async () => {
            const _0x2750d4 = _0x160527, {serverless: _0x203c9d} = await runServerless({
                    'fixture': _0x2750d4(0x180),
                    'command': _0x2750d4(0x1dd)
                });
            let _0x26f020;
            overrideEnv(() => {
                const _0x447e4e = _0x2750d4;
                process['env'][_0x447e4e(0x1e0)] = 'notDefault', _0x26f020 = _0x203c9d[_0x447e4e(0x1d4)](_0x447e4e(0x180))[_0x447e4e(0x1d5)]();
            }), expect(_0x26f020[_0x2750d4(0x1cc)][_0x2750d4(0x19f)])['to'][_0x2750d4(0x176)](_0x2750d4(0x1e1));
        }), describe('assume\x20role\x20with\x20provider.profile', () => {
            const _0x3314b5 = _0x160527;
            let _0x2134fb;
            before(async () => {
                const _0x12d5db = _0x4ba0, {serverless: _0x323c7c} = await runServerless({
                        'fixture': _0x12d5db(0x180),
                        'command': _0x12d5db(0x1dd),
                        'configExt': { 'provider': { 'profile': _0x12d5db(0x1e2) } }
                    });
                _0x2134fb = _0x323c7c[_0x12d5db(0x1d4)](_0x12d5db(0x180))[_0x12d5db(0x1d5)]();
            }), it(_0x3314b5(0x1e3), () => {
                const _0xc65fa = _0x3314b5;
                expect(_0x2134fb[_0xc65fa(0x1cc)][_0xc65fa(0x1e4)])['to']['equal']('notDefaultWithRole');
            }), it(_0x3314b5(0x1e5), () => {
                const _0x59048f = _0x3314b5;
                expect(_0x2134fb[_0x59048f(0x1cc)][_0x59048f(0x1e6)])['to'][_0x59048f(0x176)](_0x59048f(0x1e7));
            });
        }), it(_0x160527(0x1e8), async () => {
            const _0x266a04 = _0x160527, {serverless: _0x34c63} = await runServerless({
                    'fixture': _0x266a04(0x180),
                    'command': _0x266a04(0x1dd)
                });
            let _0x2672ca;
            overrideEnv(() => {
                const _0x142243 = _0x266a04;
                process[_0x142243(0x1a9)][_0x142243(0x1e9)] = _0x142243(0x1ea), process[_0x142243(0x1a9)][_0x142243(0x1eb)] = 'ENVSECRET', _0x2672ca = _0x34c63[_0x142243(0x1d4)](_0x142243(0x180))[_0x142243(0x1d5)]();
            }), expect(_0x2672ca[_0x266a04(0x1cc)][_0x266a04(0x19f)])['to']['equal'](_0x266a04(0x1ea));
        }), describe('profile\x20with\x20non\x20default\x20credentials\x20file', () => {
            const _0x3106be = _0x160527;
            let _0x354136;
            before(async () => {
                const _0x56faa9 = _0x4ba0;
                await fs['outputFile'](path['resolve'](os[_0x56faa9(0x1da)](), _0x56faa9(0x1ec)), _0x56faa9(0x1ed), { 'flag': 'w+' });
                const {serverless: _0x181b4d} = await runServerless({
                    'fixture': _0x56faa9(0x180),
                    'command': _0x56faa9(0x1dd)
                });
                overrideEnv(() => {
                    const _0x5fbc0d = _0x56faa9;
                    process[_0x5fbc0d(0x1a9)][_0x5fbc0d(0x1ee)] = _0x5fbc0d(0x1ef), process[_0x5fbc0d(0x1a9)][_0x5fbc0d(0x1f0)] = path[_0x5fbc0d(0x1d9)](os[_0x5fbc0d(0x1da)](), './custom_credentials')[_0x5fbc0d(0x1f1)](), _0x354136 = _0x181b4d['getProvider'](_0x5fbc0d(0x180))[_0x5fbc0d(0x1d5)]();
                });
            }), after(async () => {
                const _0x1445df = _0x4ba0;
                await fs['remove'](path[_0x1445df(0x1d9)](os[_0x1445df(0x1da)](), './custom_credentials'));
            }), it(_0x3106be(0x1f2), () => {
                const _0x5775bc = _0x3106be;
                expect(_0x354136[_0x5775bc(0x1cc)][_0x5775bc(0x1e4)])['to'][_0x5775bc(0x176)](_0x5775bc(0x1ef));
            }), it('should\x20get\x20credentials\x20from\x20AWS_SHARED_CREDENTIALS_FILE\x20environment\x20variable', () => {
                const _0x3b106c = _0x3106be;
                expect(_0x354136[_0x3b106c(0x1cc)]['accessKeyId'])['to']['equal']('CUSTOMKEYID');
            });
        }), it(_0x160527(0x1f3), async () => {
            const _0x531bdc = _0x160527, {serverless: _0x32a7ea} = await runServerless({
                    'fixture': 'aws',
                    'command': 'print',
                    'configExt': { 'provider': { 'stage': _0x531bdc(0x1f4) } }
                });
            let _0x5ea921;
            overrideEnv(() => {
                const _0x2cfff1 = _0x531bdc;
                process[_0x2cfff1(0x1a9)][_0x2cfff1(0x1f5)] = 'TESTSTAGEACCESSKEYID', process[_0x2cfff1(0x1a9)][_0x2cfff1(0x1f6)] = _0x2cfff1(0x1f7), _0x5ea921 = _0x32a7ea[_0x2cfff1(0x1d4)](_0x2cfff1(0x180))[_0x2cfff1(0x1d5)]();
            }), expect(_0x5ea921[_0x531bdc(0x1cc)][_0x531bdc(0x19f)])['to'][_0x531bdc(0x176)](_0x531bdc(0x1f8));
        }), it(_0x160527(0x1f9), async () => {
            const _0x4ee13c = _0x160527, {serverless: _0x51675c} = await runServerless({
                    'fixture': _0x4ee13c(0x180),
                    'command': _0x4ee13c(0x1dd),
                    'configExt': { 'provider': { 'stage': _0x4ee13c(0x1f4) } }
                });
            let _0xb67b3b;
            overrideEnv(() => {
                const _0x4008fd = _0x4ee13c;
                process[_0x4008fd(0x1a9)]['AWS_TESTSTAGE_PROFILE'] = _0x4008fd(0x1fa), _0xb67b3b = _0x51675c[_0x4008fd(0x1d4)]('aws')[_0x4008fd(0x1d5)]();
            }), expect(_0xb67b3b[_0x4ee13c(0x1cc)][_0x4ee13c(0x19f)])['to'][_0x4ee13c(0x176)](_0x4ee13c(0x1e1));
        }), describe(_0x160527(0x1fb), () => {
            const _0x263668 = _0x160527;
            let _0x2a15e5;
            before(async () => {
                const _0x376a77 = _0x4ba0, {serverless: _0x1e91cb} = await runServerless({
                        'fixture': 'aws',
                        'command': _0x376a77(0x1dd),
                        'options': { 'aws-profile': _0x376a77(0x1fa) },
                        'configExt': { 'provider': { 'deploymentBucket': { 'serverSideEncryption': 'aws:kms' } } }
                    });
                _0x2a15e5 = _0x1e91cb['getProvider']('aws')[_0x376a77(0x1d5)]();
            }), it(_0x263668(0x1fc), () => {
                const _0x14372f = _0x263668;
                expect(_0x2a15e5[_0x14372f(0x1cc)][_0x14372f(0x19f)])['to'][_0x14372f(0x176)]('NOTDEFAULTKEYID');
            }), it(_0x263668(0x1fd), () => {
                const _0x4aa081 = _0x263668;
                expect(_0x2a15e5[_0x4aa081(0x1fe)])['to'][_0x4aa081(0x176)]('v4');
            });
        }), it(_0x160527(0x1ff), async () => {
            const _0x21558e = _0x160527, {serverless: _0x5a22b9} = await runServerless({
                    'fixture': _0x21558e(0x180),
                    'command': _0x21558e(0x1dd),
                    'options': { 'aws-profile': _0x21558e(0x200) }
                });
            expect(() => _0x5a22b9[_0x21558e(0x1d4)]('aws')[_0x21558e(0x1d5)]())['to']['throw'](Error);
        });
    }), describe(_0x34212b(0x201), () => {
        const _0x262d5d = _0x34212b;
        it(_0x262d5d(0x202), async () => {
            const _0x50aeb1 = _0x262d5d, {serverless: _0x449bf9} = await runServerless({
                    'fixture': 'aws',
                    'command': 'print'
                });
            expect(_0x449bf9[_0x50aeb1(0x1d4)]('aws')[_0x50aeb1(0x203)]())['to']['equal'](_0x50aeb1(0x16f));
        }), it('should\x20allow\x20to\x20override\x20via\x20`provider.region`', async () => {
            const _0x5287c9 = _0x262d5d, {serverless: _0x48da6c} = await runServerless({
                    'fixture': 'aws',
                    'command': _0x5287c9(0x1dd),
                    'configExt': { 'provider': { 'region': 'eu-central-1' } }
                });
            expect(_0x48da6c[_0x5287c9(0x1d4)](_0x5287c9(0x180))[_0x5287c9(0x203)]())['to'][_0x5287c9(0x176)](_0x5287c9(0x204));
        }), it(_0x262d5d(0x205), async () => {
            const _0x80b817 = _0x262d5d, {serverless: _0x3321a4} = await runServerless({
                    'fixture': 'aws',
                    'command': 'print',
                    'options': { 'region': _0x80b817(0x206) },
                    'configExt': { 'provider': { 'region': 'eu-central-1' } }
                });
            expect(_0x3321a4[_0x80b817(0x1d4)](_0x80b817(0x180))[_0x80b817(0x203)]())['to']['equal'](_0x80b817(0x206));
        });
    }), describe(_0x34212b(0x207), () => {
        const _0x327ee8 = _0x34212b;
        it(_0x327ee8(0x208), async () => {
            const _0x56ba1a = _0x327ee8, {serverless: _0x461a2b} = await runServerless({
                    'fixture': _0x56ba1a(0x180),
                    'command': _0x56ba1a(0x1dd),
                    'configExt': { 'provider': { 'profile': _0x56ba1a(0x209) } }
                });
            expect(_0x461a2b['getProvider'](_0x56ba1a(0x180))[_0x56ba1a(0x20a)]())['to']['equal']('test-profile');
        }), it('should\x20allow\x20to\x20set\x20via\x20CLI\x20`--profile`\x20param', async () => {
            const _0x380043 = _0x327ee8, {serverless: _0x515d7c} = await runServerless({
                    'fixture': _0x380043(0x180),
                    'command': _0x380043(0x1dd),
                    'options': { 'profile': _0x380043(0x20b) },
                    'configExt': { 'provider': { 'profile': _0x380043(0x209) } }
                });
            expect(_0x515d7c[_0x380043(0x1d4)](_0x380043(0x180))[_0x380043(0x20a)]())['to']['equal'](_0x380043(0x20b));
        }), it(_0x327ee8(0x20c), async () => {
            const _0x17716d = _0x327ee8, {serverless: _0x31f846} = await runServerless({
                    'fixture': _0x17716d(0x180),
                    'command': _0x17716d(0x1dd),
                    'options': {
                        'profile': 'cli-override',
                        'aws-profile': 'aws-override'
                    },
                    'configExt': { 'provider': { 'profile': _0x17716d(0x209) } }
                });
            expect(_0x31f846[_0x17716d(0x1d4)](_0x17716d(0x180))[_0x17716d(0x20a)]())['to'][_0x17716d(0x176)](_0x17716d(0x20d));
        });
    }), describe('#getDeploymentPrefix()', () => {
        const _0x897596 = _0x34212b;
        it(_0x897596(0x20e), async () => {
            const _0x29b416 = _0x897596, {cfTemplate: _0x1371ee} = await runServerless({
                    'fixture': _0x29b416(0x20f),
                    'command': 'package'
                }), _0x2e9d6f = Object[_0x29b416(0x18b)](_0x1371ee[_0x29b416(0x210)])['filter'](_0x1e70e7 => _0x1e70e7[_0x29b416(0x211)] === _0x29b416(0x212));
            expect(_0x2e9d6f[_0x29b416(0x213)])['to']['be'][_0x29b416(0x214)](0x1);
            for (const _0x3e93a5 of _0x2e9d6f) {
                expect(_0x3e93a5[_0x29b416(0x215)]['Code'][_0x29b416(0x216)])['to']['be']['a'](_0x29b416(0x217))[_0x29b416(0x218)][_0x29b416(0x219)](_0x47cbef => _0x47cbef['startsWith']('serverless/'));
            }
        }), it(_0x897596(0x21a), async () => {
            const _0x5589a5 = _0x897596, {cfTemplate: _0x3dc960} = await runServerless({
                    'fixture': 'function',
                    'command': _0x5589a5(0x21b),
                    'configExt': { 'provider': { 'deploymentPrefix': _0x5589a5(0x21c) } }
                }), _0x2f8047 = Object[_0x5589a5(0x18b)](_0x3dc960['Resources'])['filter'](_0x1c4c3b => _0x1c4c3b['Type'] === 'AWS::Lambda::Function');
            expect(_0x2f8047[_0x5589a5(0x213)])['to']['be']['greaterThanOrEqual'](0x1);
            for (const _0xba3183 of _0x2f8047) {
                expect(_0xba3183['Properties'][_0x5589a5(0x21d)][_0x5589a5(0x216)])['to']['be']['a'](_0x5589a5(0x217))['and'][_0x5589a5(0x219)](_0x5658a2 => _0x5658a2['startsWith']('test-prefix/'));
            }
        });
    }), describe('#getAlbTargetGroupPrefix()', () => {
        const _0x3e1c1a = _0x34212b;
        it(_0x3e1c1a(0x21e), async () => {
            const _0x3b34d5 = _0x3e1c1a, _0x2b5877 = _0x3b34d5(0x21f), _0x26ee09 = {
                    'listenerArn': _0x3b34d5(0x220) + _0x2b5877 + '/f2f7dc8efc522ab2',
                    'conditions': { 'path': '/' }
                }, {cfTemplate: _0x5e296d} = await runServerless({
                    'fixture': _0x3b34d5(0x20f),
                    'command': _0x3b34d5(0x21b),
                    'configExt': {
                        'provider': { 'alb': { 'targetGroupPrefix': _0x3b34d5(0x221) } },
                        'functions': {
                            'fnTargetGroupName': {
                                'handler': _0x3b34d5(0x222),
                                'events': [{
                                        'alb': {
                                            ..._0x26ee09,
                                            'priority': 0x1
                                        }
                                    }]
                            }
                        }
                    }
                }), _0x4125f1 = Object[_0x3b34d5(0x18b)](_0x5e296d[_0x3b34d5(0x210)])['filter'](_0x46f490 => _0x46f490[_0x3b34d5(0x211)] === _0x3b34d5(0x223));
            expect(_0x4125f1[_0x3b34d5(0x213)])['to']['be']['greaterThanOrEqual'](0x1);
            for (const _0x3429a9 of _0x4125f1) {
                expect(_0x3429a9['Properties'][_0x3b34d5(0x224)])['to']['be']['a'](_0x3b34d5(0x217))['and'][_0x3b34d5(0x219)](_0x450e92 => _0x450e92[_0x3b34d5(0x225)]('a-prefix'));
            }
        });
    }), describe(_0x34212b(0x226), () => {
        const _0x1ce95b = _0x34212b;
        it('should\x20default\x20to\x20\x22dev\x22', async () => {
            const _0x561b23 = _0x4ba0, {serverless: _0x3c1045} = await runServerless({
                    'fixture': _0x561b23(0x180),
                    'command': _0x561b23(0x1dd)
                });
            expect(_0x3c1045['getProvider'](_0x561b23(0x180))[_0x561b23(0x227)]())['to'][_0x561b23(0x176)](_0x561b23(0x16e));
        }), it(_0x1ce95b(0x228), async () => {
            const _0x1b78ac = _0x1ce95b, {serverless: _0x2bc883} = await runServerless({
                    'fixture': 'aws',
                    'command': _0x1b78ac(0x1dd),
                    'configExt': { 'provider': { 'stage': _0x1b78ac(0x229) } }
                });
            expect(_0x2bc883[_0x1b78ac(0x1d4)](_0x1b78ac(0x180))[_0x1b78ac(0x227)]())['to'][_0x1b78ac(0x176)](_0x1b78ac(0x229));
        }), it(_0x1ce95b(0x22a), async () => {
            const _0x29902f = _0x1ce95b, {serverless: _0x34051a} = await runServerless({
                    'fixture': _0x29902f(0x180),
                    'command': 'print',
                    'options': { 'stage': 'production' },
                    'configExt': { 'provider': { 'stage': _0x29902f(0x229) } }
                });
            expect(_0x34051a[_0x29902f(0x1d4)](_0x29902f(0x180))[_0x29902f(0x227)]())['to'][_0x29902f(0x176)](_0x29902f(0x22b));
        });
    }), describe(_0x34212b(0x22c), () => {
        const _0x3fb90b = _0x34212b;
        it('should\x20fail\x20if\x20`functions[].image`\x20references\x20image\x20with\x20both\x20path\x20and\x20uri', async () => {
            const _0x11e7fc = _0x4ba0;
            await expect(runServerless({
                'fixture': _0x11e7fc(0x20f),
                'command': 'package',
                'configExt': {
                    'provider': {
                        'ecr': {
                            'images': {
                                'invalidimage': {
                                    'path': './',
                                    'uri': _0x11e7fc(0x22d)
                                }
                            }
                        }
                    },
                    'functions': { 'fnProviderInvalidImage': { 'image': _0x11e7fc(0x22e) } }
                }
            }))['to']['be'][_0x11e7fc(0x22f)]['rejected'][_0x11e7fc(0x218)][_0x11e7fc(0x1a5)][_0x11e7fc(0x230)](_0x11e7fc(0x231), 'ECR_IMAGE_BOTH_URI_AND_PATH_DEFINED_ERROR');
        }), it(_0x3fb90b(0x232), async () => {
            const _0x390db8 = _0x3fb90b;
            await expect(runServerless({
                'fixture': 'function',
                'command': _0x390db8(0x21b),
                'configExt': {
                    'provider': { 'ecr': { 'images': { 'invalidimage': {} } } },
                    'functions': { 'fnProviderInvalidImage': { 'image': 'invalidimage' } }
                }
            }))['to']['be'][_0x390db8(0x22f)][_0x390db8(0x233)][_0x390db8(0x218)]['have']['property'](_0x390db8(0x231), 'ECR_IMAGE_NEITHER_URI_NOR_PATH_DEFINED_ERROR');
        }), it(_0x3fb90b(0x234), async () => {
            const _0x40d118 = _0x3fb90b;
            await expect(runServerless({
                'fixture': _0x40d118(0x235),
                'command': _0x40d118(0x21b),
                'shouldStubSpawn': !![],
                'configExt': { 'provider': { 'ecr': { 'images': { 'baseimage': { 'path': './invalid' } } } } }
            }))['to']['be']['eventually'][_0x40d118(0x233)]['and'][_0x40d118(0x1a5)][_0x40d118(0x230)]('code', _0x40d118(0x236));
        }), it(_0x3fb90b(0x237), async () => {
            const _0x1415ca = _0x3fb90b;
            await expect(runServerless({
                'fixture': 'function',
                'command': _0x1415ca(0x21b),
                'configExt': { 'functions': { 'fnInvalid': { 'image': 'undefinedimage' } } }
            }))['to']['be'][_0x1415ca(0x22f)][_0x1415ca(0x233)]['and']['have'][_0x1415ca(0x230)](_0x1415ca(0x231), _0x1415ca(0x238));
        }), it('should\x20fail\x20if\x20both\x20uri\x20and\x20name\x20is\x20provided\x20for\x20an\x20image', async () => {
            const _0x55fb35 = _0x3fb90b;
            await expect(runServerless({
                'fixture': _0x55fb35(0x235),
                'command': 'package',
                'shouldStubSpawn': !![],
                'configExt': {
                    'functions': {
                        'foo': {
                            'image': {
                                'name': 'baseimage',
                                'uri': _0x55fb35(0x22d)
                            }
                        }
                    }
                }
            }))['to']['be'][_0x55fb35(0x22f)][_0x55fb35(0x233)][_0x55fb35(0x218)][_0x55fb35(0x1a5)][_0x55fb35(0x230)]('code', _0x55fb35(0x239));
        }), it(_0x3fb90b(0x23a), async () => {
            const _0x47fafa = _0x3fb90b;
            await expect(runServerless({
                'fixture': _0x47fafa(0x235),
                'command': _0x47fafa(0x21b),
                'shouldStubSpawn': !![],
                'configExt': { 'functions': { 'foo': { 'image': {} } } }
            }))['to']['be'][_0x47fafa(0x22f)][_0x47fafa(0x233)][_0x47fafa(0x218)][_0x47fafa(0x1a5)][_0x47fafa(0x230)](_0x47fafa(0x231), 'FUNCTION_IMAGE_NEITHER_URI_NOR_NAME_DEFINED_ERROR');
        });
        const _0x44d1c1 = (_0x5e365c, _0x20f983) => Object[_0x3fb90b(0x18b)](_0x5e365c)[_0x3fb90b(0x23b)](_0xcefef3 => _0xcefef3[_0x3fb90b(0x211)] === _0x3fb90b(0x23c) && _0xcefef3[_0x3fb90b(0x215)][_0x3fb90b(0x23d)][_0x3fb90b(0x23e)] === _0x20f983)[_0x3fb90b(0x215)];
        describe(_0x3fb90b(0x23f), () => {
            const _0x8a9c19 = _0x3fb90b;
            let _0xaaed1a, _0x39e7ea, _0x68e366;
            const _0x3e8a8b = _0x8a9c19(0x240), _0x570248 = _0x8a9c19(0x241) + _0x3e8a8b, _0x27aa2c = _0x8a9c19(0x242), _0x4ce721 = sinon[_0x8a9c19(0x199)]()['resolves']({ 'imageDetails': [{ 'imageDigest': _0x27aa2c }] }), _0x2fdbb9 = { 'ECR': { 'describeImages': _0x4ce721 } };
            before(async () => {
                const _0x44ccf9 = _0x8a9c19, {
                        awsNaming: _0x4dcb27,
                        cfTemplate: _0xbb2f36,
                        fixtureData: _0x47ce4e
                    } = await runServerless({
                        'fixture': _0x44ccf9(0x20f),
                        'command': _0x44ccf9(0x21b),
                        'configExt': {
                            'provider': {
                                'ecr': {
                                    'images': {
                                        'imagewithexplicituri': { 'uri': _0x570248 },
                                        'imagewithimplicituri': _0x570248
                                    }
                                }
                            },
                            'functions': {
                                'fnImage': { 'image': _0x570248 },
                                'fnImageWithTag': { 'image': '000000000000.dkr.ecr.sa-east-1.amazonaws.com/test-lambda-docker:stable' },
                                'fnImageWithTagAndRepoWithSlashes': { 'image': '000000000000.dkr.ecr.sa-east-1.amazonaws.com/test-lambda/repo-docker:stable' },
                                'fnImageWithExplicitUri': { 'image': { 'uri': _0x570248 } },
                                'fnProviderImageWithExplicitUri': { 'image': _0x44ccf9(0x243) },
                                'fnProviderImageWithImplicitUri': { 'image': _0x44ccf9(0x244) }
                            }
                        },
                        'awsRequestStubMap': _0x2fdbb9
                    });
                _0xaaed1a = _0xbb2f36[_0x44ccf9(0x210)], _0x39e7ea = _0x4dcb27, _0x68e366 = _0x47ce4e[_0x44ccf9(0x245)];
            }), it(_0x8a9c19(0x246), () => {
                const _0x508601 = _0x8a9c19, _0x111416 = _0x68e366['functions']['fnImage'], _0x1c7a07 = _0x39e7ea[_0x508601(0x247)](_0x508601(0x248)), _0x5278a1 = _0xaaed1a[_0x1c7a07][_0x508601(0x215)];
                expect(_0x5278a1[_0x508601(0x21d)])['to'][_0x508601(0x1a4)]['equal']({ 'ImageUri': _0x111416[_0x508601(0x249)] }), expect(_0x5278a1)['to'][_0x508601(0x184)][_0x508601(0x1a5)][_0x508601(0x230)]('Handler'), expect(_0x5278a1)['to'][_0x508601(0x184)]['have'][_0x508601(0x230)](_0x508601(0x24a));
                const _0x8c053a = _0x111416['image']['slice'](_0x111416[_0x508601(0x249)][_0x508601(0x24b)]('@') + 0x1);
                expect(_0x8c053a)['to']['match'](/^sha256:[a-f0-9]{64}$/);
                const _0x571720 = _0x8c053a[_0x508601(0x24c)]('sha256:'['length']), _0x332e0d = _0x44d1c1(_0xaaed1a, _0x1c7a07);
                expect(_0x332e0d['CodeSha256'])['to']['equal'](_0x571720);
            }), it('should\x20support\x20`functions[].image`\x20with\x20explicit\x20uri\x20with\x20sha', () => {
                const _0x1deb81 = _0x8a9c19, _0x2d66da = _0x68e366[_0x1deb81(0x24d)]['fnImageWithExplicitUri'], _0x149de4 = _0x39e7ea['getLambdaLogicalId'](_0x1deb81(0x24e)), _0x147613 = _0xaaed1a[_0x149de4]['Properties'];
                expect(_0x147613[_0x1deb81(0x21d)])['to'][_0x1deb81(0x1a4)]['equal']({ 'ImageUri': _0x2d66da[_0x1deb81(0x249)]['uri'] }), expect(_0x147613)['to'][_0x1deb81(0x184)][_0x1deb81(0x1a5)][_0x1deb81(0x230)]('Handler'), expect(_0x147613)['to'][_0x1deb81(0x184)][_0x1deb81(0x1a5)][_0x1deb81(0x230)](_0x1deb81(0x24a));
                const _0x446d11 = _0x2d66da[_0x1deb81(0x249)][_0x1deb81(0x24f)]['slice'](_0x2d66da['image'][_0x1deb81(0x24f)]['lastIndexOf']('@') + 0x1);
                expect(_0x446d11)['to']['match'](/^sha256:[a-f0-9]{64}$/);
                const _0x18165f = _0x446d11[_0x1deb81(0x24c)]('sha256:'[_0x1deb81(0x213)]), _0x31cea4 = _0x44d1c1(_0xaaed1a, _0x149de4);
                expect(_0x31cea4[_0x1deb81(0x250)])['to'][_0x1deb81(0x176)](_0x18165f);
            }), it('should\x20support\x20`functions[].image`\x20with\x20tag', () => {
                const _0x460d5d = _0x8a9c19, _0x24470d = _0x68e366[_0x460d5d(0x24d)][_0x460d5d(0x251)], _0x116799 = _0x39e7ea[_0x460d5d(0x247)](_0x460d5d(0x251)), _0x497441 = _0xaaed1a[_0x116799][_0x460d5d(0x215)];
                expect(_0x497441['Code'])['to']['deep'][_0x460d5d(0x176)]({ 'ImageUri': _0x24470d['image'][_0x460d5d(0x252)](':')[0x0] + '@' + _0x27aa2c }), expect(_0x497441)['to'][_0x460d5d(0x184)][_0x460d5d(0x1a5)][_0x460d5d(0x230)](_0x460d5d(0x253)), expect(_0x497441)['to'][_0x460d5d(0x184)]['have'][_0x460d5d(0x230)](_0x460d5d(0x24a));
                const _0x30303a = _0x44d1c1(_0xaaed1a, _0x116799);
                expect(_0x30303a[_0x460d5d(0x250)])['to'][_0x460d5d(0x176)](_0x27aa2c[_0x460d5d(0x24c)]('sha256:'['length'])), expect(_0x4ce721)['to']['be'][_0x460d5d(0x254)]({
                    'imageIds': [{ 'imageTag': 'stable' }],
                    'registryId': '000000000000',
                    'repositoryName': _0x460d5d(0x255)
                });
            }), it(_0x8a9c19(0x256), () => {
                const _0x320a32 = _0x8a9c19, _0x21ce72 = _0x68e366['functions']['fnImageWithTagAndRepoWithSlashes'], _0x589a88 = _0x39e7ea['getLambdaLogicalId'](_0x320a32(0x257)), _0x12b88a = _0xaaed1a[_0x589a88]['Properties'];
                expect(_0x12b88a[_0x320a32(0x21d)])['to'][_0x320a32(0x1a4)][_0x320a32(0x176)]({ 'ImageUri': _0x21ce72[_0x320a32(0x249)][_0x320a32(0x252)](':')[0x0] + '@' + _0x27aa2c }), expect(_0x12b88a)['to'][_0x320a32(0x184)][_0x320a32(0x1a5)][_0x320a32(0x230)](_0x320a32(0x253)), expect(_0x12b88a)['to'][_0x320a32(0x184)][_0x320a32(0x1a5)][_0x320a32(0x230)]('Runtime');
                const _0x5cb135 = _0x44d1c1(_0xaaed1a, _0x589a88);
                expect(_0x5cb135['CodeSha256'])['to'][_0x320a32(0x176)](_0x27aa2c[_0x320a32(0x24c)]('sha256:'[_0x320a32(0x213)])), expect(_0x4ce721)['to']['be'][_0x320a32(0x254)]({
                    'imageIds': [{ 'imageTag': _0x320a32(0x258) }],
                    'registryId': _0x320a32(0x259),
                    'repositoryName': _0x320a32(0x25a)
                });
            }), it(_0x8a9c19(0x25b), () => {
                const _0x31d356 = _0x8a9c19, _0x55a83b = _0x39e7ea[_0x31d356(0x247)]('fnProviderImageWithExplicitUri'), _0xc6106e = _0xaaed1a[_0x55a83b]['Properties'];
                expect(_0xc6106e[_0x31d356(0x21d)])['to'][_0x31d356(0x1a4)]['equal']({ 'ImageUri': _0x570248 }), expect(_0xc6106e)['to'][_0x31d356(0x184)][_0x31d356(0x1a5)][_0x31d356(0x230)](_0x31d356(0x253)), expect(_0xc6106e)['to'][_0x31d356(0x184)]['have'][_0x31d356(0x230)](_0x31d356(0x24a));
                const _0x4ecb7c = _0x44d1c1(_0xaaed1a, _0x55a83b);
                expect(_0x4ecb7c[_0x31d356(0x250)])['to'][_0x31d356(0x176)](_0x3e8a8b);
            }), it('should\x20support\x20`functions[].image`\x20that\x20references\x20provider.ecr.images\x20defined\x20with\x20implicit\x20uri', () => {
                const _0x10bd92 = _0x8a9c19, _0x193110 = _0x39e7ea[_0x10bd92(0x247)](_0x10bd92(0x25c)), _0x4276ed = _0xaaed1a[_0x193110][_0x10bd92(0x215)];
                expect(_0x4276ed[_0x10bd92(0x21d)])['to']['deep'][_0x10bd92(0x176)]({ 'ImageUri': _0x570248 }), expect(_0x4276ed)['to'][_0x10bd92(0x184)][_0x10bd92(0x1a5)][_0x10bd92(0x230)](_0x10bd92(0x253)), expect(_0x4276ed)['to'][_0x10bd92(0x184)]['have'][_0x10bd92(0x230)]('Runtime');
                const _0x50d023 = _0x44d1c1(_0xaaed1a, _0x193110);
                expect(_0x50d023[_0x10bd92(0x250)])['to'][_0x10bd92(0x176)](_0x3e8a8b);
            });
        }), describe(_0x3fb90b(0x25d), () => {
            const _0x27af03 = _0x3fb90b, _0x213bbb = _0x27af03(0x240), _0x5b9534 = '999999999999.dkr.ecr.sa-east-1.amazonaws.com/test-lambda-docker', _0x3868c1 = 'YXdzOmRvY2tlcmF1dGh0b2tlbg==', _0x3b5107 = 'https://' + _0x5b9534, _0x10c141 = sinon[_0x27af03(0x199)](), _0xaf54aa = sinon[_0x27af03(0x199)](), _0x21a21c = sinon[_0x27af03(0x199)](), _0x234e7f = {
                    'STS': {
                        'getCallerIdentity': {
                            'ResponseMetadata': { 'RequestId': _0x27af03(0x25e) },
                            'UserId': _0x27af03(0x25f),
                            'Account': _0x27af03(0x260),
                            'Arn': _0x27af03(0x261)
                        }
                    },
                    'ECR': {
                        'describeRepositories': { 'repositories': [{ 'repositoryUri': _0x5b9534 }] },
                        'getAuthorizationToken': {
                            'authorizationData': [{
                                    'proxyEndpoint': _0x3b5107,
                                    'authorizationToken': _0x3868c1
                                }]
                        }
                    }
                }, _0x3dd16a = sinon[_0x27af03(0x199)]()[_0x27af03(0x262)]({ 'stdBuffer': _0x27af03(0x263) + _0x213bbb + _0x27af03(0x264) }), _0x25af66 = {
                    'child-process-ext/spawn': _0x3dd16a,
                    './lib/utils/telemetry/generatePayload.js': () => ({})
                };
            beforeEach(() => {
                const _0x4179cb = _0x27af03;
                _0x10c141['reset'](), _0xaf54aa[_0x4179cb(0x265)](), _0x3dd16a[_0x4179cb(0x266)]();
            }), it(_0x27af03(0x267), async () => {
                const _0x35403f = _0x27af03, _0x22b183 = {
                        ..._0x234e7f,
                        'ECR': {
                            ..._0x234e7f[_0x35403f(0x268)],
                            'describeRepositories': _0x10c141[_0x35403f(0x19a)]({ 'repositories': [{ 'repositoryUri': _0x5b9534 }] }),
                            'createRepository': _0xaf54aa
                        }
                    }, {
                        awsNaming: _0x56ac53,
                        cfTemplate: _0x3732e0,
                        fixtureData: {servicePath: _0x94562}
                    } = await runServerless({
                        'fixture': _0x35403f(0x235),
                        'command': _0x35403f(0x21b),
                        'awsRequestStubMap': _0x22b183,
                        'modulesCacheStub': _0x25af66
                    }), _0x7891fe = _0x56ac53['getLambdaLogicalId'](_0x35403f(0x181)), _0x397a00 = _0x3732e0[_0x35403f(0x210)][_0x7891fe][_0x35403f(0x215)], _0x2bfcf9 = _0x44d1c1(_0x3732e0[_0x35403f(0x210)], _0x7891fe);
                expect(_0x397a00[_0x35403f(0x21d)][_0x35403f(0x269)])['to'][_0x35403f(0x1a4)]['equal'](_0x5b9534 + _0x35403f(0x26a) + _0x213bbb), expect(_0x2bfcf9['CodeSha256'])['to'][_0x35403f(0x176)](_0x213bbb), expect(_0x10c141)['to']['be'][_0x35403f(0x1b0)], expect(_0xaf54aa[_0x35403f(0x26b)])['to']['be'][_0x35403f(0x26c)], expect(_0x3dd16a)['to']['be'][_0x35403f(0x254)]('docker', [_0x35403f(0x26d)]), expect(_0x3dd16a)[_0x35403f(0x184)]['to']['be'][_0x35403f(0x254)]('docker', [
                    _0x35403f(0x26e),
                    '--username',
                    _0x35403f(0x26f),
                    _0x35403f(0x270),
                    _0x35403f(0x271),
                    _0x3b5107
                ]), expect(_0x3dd16a)['to']['be']['calledWith'](_0x35403f(0x272), [
                    _0x35403f(0x273),
                    '-t',
                    _0x56ac53['getEcrRepositoryName']() + _0x35403f(0x274),
                    '-f',
                    path[_0x35403f(0x275)](_0x94562, _0x35403f(0x276)),
                    './'
                ]), expect(_0x3dd16a)['to']['be']['calledWith'](_0x35403f(0x272), [
                    _0x35403f(0x277),
                    _0x56ac53['getEcrRepositoryName']() + _0x35403f(0x274),
                    _0x5b9534 + _0x35403f(0x274)
                ]), expect(_0x3dd16a)['to']['be'][_0x35403f(0x254)](_0x35403f(0x272), [
                    _0x35403f(0x278),
                    _0x5b9534 + _0x35403f(0x274)
                ]);
            }), it(_0x27af03(0x279), async () => {
                const _0x483970 = _0x27af03, _0x2332d0 = {
                        ..._0x234e7f,
                        'ECR': {
                            ..._0x234e7f[_0x483970(0x268)],
                            'describeRepositories': _0x10c141[_0x483970(0x27a)]({ 'providerError': { 'code': _0x483970(0x27b) } }),
                            'createRepository': _0x21a21c[_0x483970(0x19a)]({ 'repository': { 'repositoryUri': _0x5b9534 } })
                        }
                    }, {
                        awsNaming: _0x17ed53,
                        cfTemplate: _0x9a1ada
                    } = await runServerless({
                        'fixture': _0x483970(0x235),
                        'command': 'package',
                        'awsRequestStubMap': _0x2332d0,
                        'modulesCacheStub': _0x25af66,
                        'configExt': {
                            'provider': {
                                'ecr': {
                                    'scanOnPush': !![],
                                    'images': {
                                        'baseimage': {
                                            'path': './',
                                            'file': _0x483970(0x27c)
                                        }
                                    }
                                }
                            }
                        }
                    }), _0x18fca7 = _0x17ed53[_0x483970(0x247)](_0x483970(0x181)), _0x4260a8 = _0x9a1ada[_0x483970(0x210)][_0x18fca7]['Properties'], _0x4b7d67 = _0x44d1c1(_0x9a1ada[_0x483970(0x210)], _0x18fca7);
                expect(_0x4260a8[_0x483970(0x21d)]['ImageUri'])['to'][_0x483970(0x1a4)][_0x483970(0x176)](_0x5b9534 + _0x483970(0x26a) + _0x213bbb), expect(_0x4b7d67[_0x483970(0x250)])['to']['equal'](_0x213bbb), expect(_0x10c141)['to']['be'][_0x483970(0x1b0)], expect(_0x21a21c)['to']['be'][_0x483970(0x1b0)], expect(_0x21a21c[_0x483970(0x1a3)][0x0][0x0][_0x483970(0x27d)])['to'][_0x483970(0x1a4)]['equal']({ 'scanOnPush': !![] });
            }), it('should\x20work\x20correctly\x20when\x20repository\x20does\x20not\x20exist\x20beforehand', async () => {
                const _0x3da636 = _0x27af03, _0x2851ea = {
                        ..._0x234e7f,
                        'ECR': {
                            ..._0x234e7f['ECR'],
                            'describeRepositories': _0x10c141['throws']({ 'providerError': { 'code': _0x3da636(0x27b) } }),
                            'createRepository': _0xaf54aa[_0x3da636(0x19a)]({ 'repository': { 'repositoryUri': _0x5b9534 } })
                        }
                    }, {
                        awsNaming: _0xcc469e,
                        cfTemplate: _0x3631f
                    } = await runServerless({
                        'fixture': 'ecr',
                        'command': 'package',
                        'awsRequestStubMap': _0x2851ea,
                        'modulesCacheStub': _0x25af66
                    }), _0x1a98d7 = _0xcc469e[_0x3da636(0x247)](_0x3da636(0x181)), _0x8b2453 = _0x3631f[_0x3da636(0x210)][_0x1a98d7][_0x3da636(0x215)], _0x594c5c = _0x44d1c1(_0x3631f[_0x3da636(0x210)], _0x1a98d7);
                expect(_0x8b2453[_0x3da636(0x21d)][_0x3da636(0x269)])['to'][_0x3da636(0x1a4)]['equal'](_0x5b9534 + _0x3da636(0x26a) + _0x213bbb), expect(_0x594c5c[_0x3da636(0x250)])['to']['equal'](_0x213bbb), expect(_0x10c141)['to']['be'][_0x3da636(0x1b0)], expect(_0xaf54aa)['to']['be'][_0x3da636(0x1b0)];
            }), it(_0x27af03(0x27e), async () => {
                const _0x51d3b2 = _0x27af03, _0x512ee9 = {
                        ..._0x234e7f,
                        'ECR': {
                            ..._0x234e7f[_0x51d3b2(0x268)],
                            'describeRepositories': _0x10c141[_0x51d3b2(0x19a)]({ 'repositories': [{ 'repositoryUri': _0x5b9534 }] }),
                            'createRepository': _0xaf54aa
                        }
                    }, _0x56d370 = sinon[_0x51d3b2(0x199)]()[_0x51d3b2(0x262)]({ 'stdBuffer': _0x51d3b2(0x263) + _0x213bbb + _0x51d3b2(0x264) })[_0x51d3b2(0x27f)](0x3)[_0x51d3b2(0x27a)]({ 'stdBuffer': _0x51d3b2(0x280) }), {
                        awsNaming: _0x55dbd7,
                        cfTemplate: _0x19433e,
                        fixtureData: {servicePath: _0x117093}
                    } = await runServerless({
                        'fixture': 'ecr',
                        'command': 'package',
                        'awsRequestStubMap': _0x512ee9,
                        'modulesCacheStub': {
                            ..._0x25af66,
                            'child-process-ext/spawn': _0x56d370
                        }
                    }), _0x198769 = _0x55dbd7['getLambdaLogicalId'](_0x51d3b2(0x181)), _0x4b072a = _0x19433e[_0x51d3b2(0x210)][_0x198769][_0x51d3b2(0x215)], _0x30d3fb = _0x44d1c1(_0x19433e[_0x51d3b2(0x210)], _0x198769);
                expect(_0x4b072a[_0x51d3b2(0x21d)]['ImageUri'])['to'][_0x51d3b2(0x1a4)][_0x51d3b2(0x176)](_0x5b9534 + _0x51d3b2(0x26a) + _0x213bbb), expect(_0x30d3fb[_0x51d3b2(0x250)])['to'][_0x51d3b2(0x176)](_0x213bbb), expect(_0x10c141)['to']['be']['calledOnce'], expect(_0xaf54aa[_0x51d3b2(0x26b)])['to']['be']['true'], expect(_0x56d370)['to']['be']['calledWith'](_0x51d3b2(0x272), [_0x51d3b2(0x26d)]), expect(_0x56d370)['to']['be'][_0x51d3b2(0x254)]('docker', [
                    _0x51d3b2(0x273),
                    '-t',
                    _0x55dbd7[_0x51d3b2(0x281)]() + _0x51d3b2(0x274),
                    '-f',
                    path[_0x51d3b2(0x275)](_0x117093, 'Dockerfile'),
                    './'
                ]), expect(_0x56d370)['to']['be'][_0x51d3b2(0x254)]('docker', [
                    _0x51d3b2(0x277),
                    _0x55dbd7[_0x51d3b2(0x281)]() + _0x51d3b2(0x274),
                    _0x5b9534 + _0x51d3b2(0x274)
                ]), expect(_0x56d370)['to']['be'][_0x51d3b2(0x254)](_0x51d3b2(0x272), [
                    'push',
                    _0x5b9534 + _0x51d3b2(0x274)
                ]), expect(_0x56d370)['to']['be'][_0x51d3b2(0x254)]('docker', [
                    _0x51d3b2(0x26e),
                    _0x51d3b2(0x282),
                    _0x51d3b2(0x26f),
                    _0x51d3b2(0x270),
                    'dockerauthtoken',
                    _0x3b5107
                ]);
            }), it(_0x27af03(0x283), async () => {
                const _0x5c815b = _0x27af03, _0x47e3e7 = {
                        ..._0x234e7f,
                        'ECR': {
                            ..._0x234e7f[_0x5c815b(0x268)],
                            'describeRepositories': _0x10c141['resolves']({ 'repositories': [{ 'repositoryUri': _0x5b9534 }] }),
                            'createRepository': _0xaf54aa
                        }
                    }, _0x57372e = sinon['stub']()['returns']({ 'stdBuffer': 'digest:\x20sha256:' + _0x213bbb + _0x5c815b(0x264) })[_0x5c815b(0x27f)](0x3)['throws']({ 'stdBuffer': _0x5c815b(0x284) });
                await runServerless({
                    'fixture': _0x5c815b(0x235),
                    'command': _0x5c815b(0x21b),
                    'awsRequestStubMap': _0x47e3e7,
                    'modulesCacheStub': {
                        ..._0x25af66,
                        'child-process-ext/spawn': _0x57372e
                    }
                }), expect(_0x57372e)['to']['be'][_0x5c815b(0x254)]('docker', [
                    'push',
                    _0x5b9534 + _0x5c815b(0x274)
                ]), expect(_0x57372e)['to']['be'][_0x5c815b(0x254)](_0x5c815b(0x272), [
                    _0x5c815b(0x26e),
                    '--username',
                    _0x5c815b(0x26f),
                    '--password',
                    _0x5c815b(0x271),
                    _0x3b5107
                ]);
            }), it(_0x27af03(0x285), async () => {
                const _0x54040f = _0x27af03, _0x1ea3c8 = {
                        ..._0x234e7f,
                        'ECR': {
                            ..._0x234e7f[_0x54040f(0x268)],
                            'describeRepositories': _0x10c141[_0x54040f(0x19a)]({ 'repositories': [{ 'repositoryUri': _0x5b9534 }] }),
                            'createRepository': _0xaf54aa
                        }
                    }, {stdoutData: _0x336ed8} = await runServerless({
                        'fixture': 'ecr',
                        'command': _0x54040f(0x21b),
                        'awsRequestStubMap': _0x1ea3c8,
                        'modulesCacheStub': {
                            ..._0x25af66,
                            'child-process-ext/spawn': sinon[_0x54040f(0x199)]()[_0x54040f(0x262)]({ 'stdBuffer': _0x54040f(0x263) + _0x213bbb + '\x20size:\x201787' })['onCall'](0x3)[_0x54040f(0x27a)]({ 'stdBuffer': _0x54040f(0x280) })[_0x54040f(0x27f)](0x4)[_0x54040f(0x262)]({ 'stdBuffer': _0x54040f(0x286) })
                        }
                    });
                expect(_0x336ed8)['to'][_0x54040f(0x287)](_0x54040f(0x288));
            }), it(_0x27af03(0x289), async () => {
                const _0x490215 = _0x27af03, _0x3e6777 = {
                        ..._0x234e7f,
                        'ECR': {
                            ..._0x234e7f[_0x490215(0x268)],
                            'describeRepositories': _0x10c141['resolves']({ 'repositories': [{ 'repositoryUri': _0x5b9534 }] }),
                            'createRepository': _0xaf54aa
                        }
                    }, {
                        awsNaming: _0x112f5a,
                        cfTemplate: _0xa154f
                    } = await runServerless({
                        'fixture': _0x490215(0x235),
                        'command': _0x490215(0x21b),
                        'awsRequestStubMap': _0x3e6777,
                        'modulesCacheStub': _0x25af66,
                        'configExt': { 'provider': { 'ecr': { 'images': { 'baseimage': './' } } } }
                    }), _0x2cf2c7 = _0x112f5a['getLambdaLogicalId'](_0x490215(0x181)), _0x56e513 = _0xa154f[_0x490215(0x210)][_0x2cf2c7][_0x490215(0x215)], _0x296cde = Object['values'](_0xa154f[_0x490215(0x210)])[_0x490215(0x23b)](_0x3531e1 => _0x3531e1[_0x490215(0x211)] === _0x490215(0x23c) && _0x3531e1[_0x490215(0x215)][_0x490215(0x23d)][_0x490215(0x23e)] === _0x2cf2c7)[_0x490215(0x215)];
                expect(_0x56e513[_0x490215(0x21d)]['ImageUri'])['to'][_0x490215(0x1a4)][_0x490215(0x176)](_0x5b9534 + _0x490215(0x26a) + _0x213bbb), expect(_0x296cde[_0x490215(0x250)])['to']['equal'](_0x213bbb), expect(_0x10c141)['to']['be'][_0x490215(0x1b0)], expect(_0xaf54aa[_0x490215(0x26b)])['to']['be'][_0x490215(0x26c)];
            }), it(_0x27af03(0x28a), async () => {
                const _0x20e0b7 = _0x27af03, _0xdceeb6 = {
                        ..._0x234e7f,
                        'ECR': {
                            ..._0x234e7f[_0x20e0b7(0x268)],
                            'describeRepositories': _0x10c141['resolves']({ 'repositories': [{ 'repositoryUri': _0x5b9534 }] }),
                            'createRepository': _0xaf54aa
                        }
                    }, {
                        awsNaming: _0x1c4c32,
                        cfTemplate: _0x5506ed,
                        fixtureData: {servicePath: _0x4b1480}
                    } = await runServerless({
                        'fixture': _0x20e0b7(0x235),
                        'command': 'package',
                        'awsRequestStubMap': _0xdceeb6,
                        'modulesCacheStub': _0x25af66,
                        'configExt': {
                            'provider': {
                                'ecr': {
                                    'images': {
                                        'baseimage': {
                                            'path': './',
                                            'file': _0x20e0b7(0x27c)
                                        }
                                    }
                                }
                            }
                        }
                    }), _0x52c1f3 = _0x1c4c32[_0x20e0b7(0x247)](_0x20e0b7(0x181)), _0x55a324 = _0x5506ed[_0x20e0b7(0x210)][_0x52c1f3][_0x20e0b7(0x215)], _0x178a14 = Object[_0x20e0b7(0x18b)](_0x5506ed['Resources'])['find'](_0x2cc704 => _0x2cc704[_0x20e0b7(0x211)] === _0x20e0b7(0x23c) && _0x2cc704[_0x20e0b7(0x215)][_0x20e0b7(0x23d)][_0x20e0b7(0x23e)] === _0x52c1f3)[_0x20e0b7(0x215)];
                expect(_0x55a324['Code'][_0x20e0b7(0x269)])['to'][_0x20e0b7(0x1a4)][_0x20e0b7(0x176)](_0x5b9534 + _0x20e0b7(0x26a) + _0x213bbb), expect(_0x178a14[_0x20e0b7(0x250)])['to'][_0x20e0b7(0x176)](_0x213bbb), expect(_0x10c141)['to']['be'][_0x20e0b7(0x1b0)], expect(_0xaf54aa[_0x20e0b7(0x26b)])['to']['be'][_0x20e0b7(0x26c)], expect(_0x3dd16a)['to']['be'][_0x20e0b7(0x254)](_0x20e0b7(0x272), [
                    _0x20e0b7(0x273),
                    '-t',
                    _0x1c4c32['getEcrRepositoryName']() + _0x20e0b7(0x274),
                    '-f',
                    path['join'](_0x4b1480, 'Dockerfile.dev'),
                    './'
                ]);
            }), it(_0x27af03(0x28b), async () => {
                const _0x17afe6 = _0x27af03, _0xddaac5 = {
                        ..._0x234e7f,
                        'ECR': {
                            ..._0x234e7f[_0x17afe6(0x268)],
                            'describeRepositories': _0x10c141[_0x17afe6(0x19a)]({ 'repositories': [{ 'repositoryUri': _0x5b9534 }] }),
                            'createRepository': _0xaf54aa
                        }
                    }, {
                        awsNaming: _0x1464fc,
                        cfTemplate: _0x594ae5,
                        fixtureData: {servicePath: _0x59c959}
                    } = await runServerless({
                        'fixture': _0x17afe6(0x235),
                        'command': _0x17afe6(0x21b),
                        'awsRequestStubMap': _0xddaac5,
                        'modulesCacheStub': _0x25af66,
                        'configExt': {
                            'provider': {
                                'ecr': {
                                    'images': {
                                        'baseimage': {
                                            'path': './',
                                            'file': 'Dockerfile.dev',
                                            'cacheFrom': [_0x17afe6(0x28c)]
                                        }
                                    }
                                }
                            }
                        }
                    }), _0x467f4c = _0x1464fc[_0x17afe6(0x247)](_0x17afe6(0x181)), _0x37444a = _0x594ae5[_0x17afe6(0x210)][_0x467f4c][_0x17afe6(0x215)], _0x3c598f = Object['values'](_0x594ae5[_0x17afe6(0x210)])[_0x17afe6(0x23b)](_0x484c3d => _0x484c3d[_0x17afe6(0x211)] === _0x17afe6(0x23c) && _0x484c3d['Properties']['FunctionName'][_0x17afe6(0x23e)] === _0x467f4c)[_0x17afe6(0x215)];
                expect(_0x37444a[_0x17afe6(0x21d)][_0x17afe6(0x269)])['to'][_0x17afe6(0x1a4)][_0x17afe6(0x176)](_0x5b9534 + _0x17afe6(0x26a) + _0x213bbb), expect(_0x3c598f[_0x17afe6(0x250)])['to'][_0x17afe6(0x176)](_0x213bbb), expect(_0x10c141)['to']['be'][_0x17afe6(0x1b0)], expect(_0xaf54aa['notCalled'])['to']['be'][_0x17afe6(0x26c)], expect(_0x3dd16a)['to']['be']['calledWith'](_0x17afe6(0x272), [
                    _0x17afe6(0x273),
                    '-t',
                    _0x1464fc['getEcrRepositoryName']() + ':baseimage',
                    '-f',
                    path['join'](_0x59c959, 'Dockerfile.dev'),
                    _0x17afe6(0x28d),
                    _0x17afe6(0x28c),
                    './'
                ]);
            }), it('should\x20work\x20correctly\x20when\x20image\x20is\x20defined\x20with\x20`buildArgs`\x20set', async () => {
                const _0x2e614e = _0x27af03, _0x419114 = {
                        ..._0x234e7f,
                        'ECR': {
                            ..._0x234e7f[_0x2e614e(0x268)],
                            'describeRepositories': _0x10c141[_0x2e614e(0x19a)]({ 'repositories': [{ 'repositoryUri': _0x5b9534 }] }),
                            'createRepository': _0xaf54aa
                        }
                    }, {
                        awsNaming: _0x34a61a,
                        cfTemplate: _0x3d0f9f,
                        fixtureData: {servicePath: _0x15c43d}
                    } = await runServerless({
                        'fixture': _0x2e614e(0x235),
                        'command': _0x2e614e(0x21b),
                        'awsRequestStubMap': _0x419114,
                        'modulesCacheStub': _0x25af66,
                        'configExt': {
                            'provider': {
                                'ecr': {
                                    'images': {
                                        'baseimage': {
                                            'path': './',
                                            'file': _0x2e614e(0x27c),
                                            'buildArgs': { 'TESTKEY': _0x2e614e(0x28e) }
                                        }
                                    }
                                }
                            }
                        }
                    }), _0x545d24 = _0x34a61a[_0x2e614e(0x247)]('foo'), _0x348e7d = _0x3d0f9f[_0x2e614e(0x210)][_0x545d24][_0x2e614e(0x215)], _0x341362 = Object[_0x2e614e(0x18b)](_0x3d0f9f[_0x2e614e(0x210)])[_0x2e614e(0x23b)](_0xedf0bd => _0xedf0bd['Type'] === _0x2e614e(0x23c) && _0xedf0bd[_0x2e614e(0x215)]['FunctionName'][_0x2e614e(0x23e)] === _0x545d24)[_0x2e614e(0x215)];
                expect(_0x348e7d[_0x2e614e(0x21d)]['ImageUri'])['to'][_0x2e614e(0x1a4)][_0x2e614e(0x176)](_0x5b9534 + _0x2e614e(0x26a) + _0x213bbb), expect(_0x341362[_0x2e614e(0x250)])['to'][_0x2e614e(0x176)](_0x213bbb), expect(_0x10c141)['to']['be'][_0x2e614e(0x1b0)], expect(_0xaf54aa['notCalled'])['to']['be'][_0x2e614e(0x26c)], expect(_0x3dd16a)['to']['be'][_0x2e614e(0x254)]('docker', [
                    'build',
                    '-t',
                    _0x34a61a[_0x2e614e(0x281)]() + _0x2e614e(0x274),
                    '-f',
                    path['join'](_0x15c43d, _0x2e614e(0x27c)),
                    _0x2e614e(0x28f),
                    _0x2e614e(0x290),
                    './'
                ]);
            }), it(_0x27af03(0x291), async () => {
                const _0x15f7b6 = _0x27af03, _0x58f736 = {
                        ..._0x234e7f,
                        'ECR': {
                            ..._0x234e7f['ECR'],
                            'describeRepositories': _0x10c141[_0x15f7b6(0x19a)]({ 'repositories': [{ 'repositoryUri': _0x5b9534 }] }),
                            'createRepository': _0xaf54aa
                        }
                    }, {
                        awsNaming: _0x3e0353,
                        cfTemplate: _0x1662a5
                    } = await runServerless({
                        'fixture': _0x15f7b6(0x235),
                        'command': _0x15f7b6(0x21b),
                        'awsRequestStubMap': _0x58f736,
                        'modulesCacheStub': _0x25af66,
                        'configExt': {
                            'provider': { 'ecr': { 'images': { 'baseimage': './' } } },
                            'functions': { 'foo': { 'image': { 'name': _0x15f7b6(0x292) } } }
                        }
                    }), _0x407136 = _0x3e0353['getLambdaLogicalId'](_0x15f7b6(0x181)), _0x1d4bd7 = _0x1662a5['Resources'][_0x407136][_0x15f7b6(0x215)], _0x10d708 = _0x44d1c1(_0x1662a5['Resources'], _0x407136);
                expect(_0x1d4bd7[_0x15f7b6(0x21d)][_0x15f7b6(0x269)])['to'][_0x15f7b6(0x1a4)][_0x15f7b6(0x176)](_0x5b9534 + _0x15f7b6(0x26a) + _0x213bbb), expect(_0x10d708[_0x15f7b6(0x250)])['to'][_0x15f7b6(0x176)](_0x213bbb);
            }), it(_0x27af03(0x293), async () => {
                const _0x4cf3bb = _0x27af03;
                await expect(runServerless({
                    'fixture': _0x4cf3bb(0x235),
                    'command': 'package',
                    'awsRequestStubMap': _0x234e7f,
                    'modulesCacheStub': { 'child-process-ext/spawn': sinon[_0x4cf3bb(0x199)]()['throws']() }
                }))['to']['be']['eventually'][_0x4cf3bb(0x233)]['and']['have'][_0x4cf3bb(0x230)]('code', _0x4cf3bb(0x294));
            }), it(_0x27af03(0x295), async () => {
                const _0x334bf3 = _0x27af03;
                await expect(runServerless({
                    'fixture': _0x334bf3(0x235),
                    'command': 'package',
                    'awsRequestStubMap': _0x234e7f,
                    'modulesCacheStub': {
                        ..._0x25af66,
                        'child-process-ext/spawn': sinon['stub']()['returns']({})['onSecondCall']()[_0x334bf3(0x27a)]()
                    }
                }))['to']['be'][_0x334bf3(0x22f)]['rejected']['and']['have']['property'](_0x334bf3(0x231), 'DOCKER_BUILD_ERROR');
            }), it(_0x27af03(0x296), async () => {
                const _0x2b5dd9 = _0x27af03;
                await expect(runServerless({
                    'fixture': _0x2b5dd9(0x235),
                    'command': 'package',
                    'awsRequestStubMap': _0x234e7f,
                    'modulesCacheStub': {
                        ..._0x25af66,
                        'child-process-ext/spawn': sinon[_0x2b5dd9(0x199)]()['returns']({})['onCall'](0x2)[_0x2b5dd9(0x27a)]()
                    }
                }))['to']['be'][_0x2b5dd9(0x22f)]['rejected']['and']['have']['property']('code', _0x2b5dd9(0x297));
            }), it('should\x20fail\x20when\x20docker\x20push\x20fails', async () => {
                const _0x59fa38 = _0x27af03;
                await expect(runServerless({
                    'fixture': _0x59fa38(0x235),
                    'command': _0x59fa38(0x21b),
                    'awsRequestStubMap': _0x234e7f,
                    'modulesCacheStub': {
                        ..._0x25af66,
                        'child-process-ext/spawn': sinon[_0x59fa38(0x199)]()[_0x59fa38(0x262)]({})['onCall'](0x3)['throws']()
                    }
                }))['to']['be']['eventually']['rejected']['and'][_0x59fa38(0x1a5)][_0x59fa38(0x230)](_0x59fa38(0x231), _0x59fa38(0x298));
            }), it(_0x27af03(0x299), async () => {
                const _0x55c291 = _0x27af03;
                await expect(runServerless({
                    'fixture': _0x55c291(0x235),
                    'command': 'package',
                    'awsRequestStubMap': _0x234e7f,
                    'modulesCacheStub': {
                        ..._0x25af66,
                        'child-process-ext/spawn': sinon[_0x55c291(0x199)]()[_0x55c291(0x262)]({})[_0x55c291(0x27f)](0x3)[_0x55c291(0x27a)]({ 'stdBuffer': _0x55c291(0x280) })[_0x55c291(0x27f)](0x4)['throws']()
                    }
                }))['to']['be'][_0x55c291(0x22f)][_0x55c291(0x233)][_0x55c291(0x218)][_0x55c291(0x1a5)][_0x55c291(0x230)](_0x55c291(0x231), _0x55c291(0x29a));
            });
        });
    });
});
