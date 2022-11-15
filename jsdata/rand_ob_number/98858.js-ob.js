'use strict';
const _ = require('lodash'), chai = require('chai'), path = require('path'), fs = require('fs-extra'), os = require('os'), proxyquire = require('proxyquire'), sinon = require('sinon'), overrideEnv = require('process-utils/override-env'), AwsProvider = require('../../../../../lib/plugins/aws/provider'), Serverless = require('../../../../../lib/Serverless'), runServerless = require('../../../../utils/run-serverless');
chai['use'](require('chai-as-promised')), chai['use'](require('sinon-chai'));
const expect = chai['expect'];
describe('AwsProvider', () => {
    let _0xfc7ea9, _0x49a52b, _0x191a88;
    const _0x285cd3 = {
        'stage': 'dev',
        'region': 'us-east-1'
    };
    beforeEach(() => {
        ({restoreEnv: _0x191a88} = overrideEnv(), _0x49a52b = new Serverless(_0x285cd3), _0x49a52b['cli'] = new _0x49a52b['classes']['CLI'](), _0xfc7ea9 = new AwsProvider(_0x49a52b, _0x285cd3));
    }), afterEach(() => _0x191a88()), describe('#constructor()', () => {
        it('should\x20set\x20Serverless\x20instance', () => {
            expect(typeof _0xfc7ea9['serverless'])['to']['not']['equal']('undefined');
        }), it('should\x20set\x20the\x20provider\x20property', () => {
            expect(_0xfc7ea9['provider'])['to']['equal'](_0xfc7ea9);
        }), describe('stage\x20name\x20validation', () => {
            const _0xc31e04 = [
                'myStage',
                'my-stage',
                'my_stage',
                '${opt:stage,\x20\x27prod\x27}'
            ];
            _0xc31e04['forEach'](_0x2c0fec => {
                it('should\x20not\x20throw\x20an\x20error\x20before\x20variable\x20population\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20even\x20if\x20http\x20event\x20is\x20present\x20and\x20stage\x20is\x20' + _0x2c0fec, () => {
                    const _0x5850f1 = { 'stage': _0x2c0fec };
                    _0x49a52b = new Serverless(_0x5850f1);
                    const _0x429e1c = {
                        'service': 'new-service',
                        'provider': {
                            'name': 'aws',
                            'stage': _0x2c0fec
                        },
                        'functions': {
                            'first': {
                                'events': [{
                                        'http': {
                                            'path': 'foo',
                                            'method': 'GET'
                                        }
                                    }]
                            }
                        }
                    };
                    _0x49a52b['service'] = new _0x49a52b['classes']['Service'](_0x49a52b, _0x429e1c), expect(() => new AwsProvider(_0x49a52b, _0x5850f1))['to']['not']['throw'](Error);
                });
            });
        }), describe('deploymentBucket\x20configuration', () => {
            it('should\x20do\x20nothing\x20if\x20not\x20defined', () => {
                _0x49a52b['service']['provider']['deploymentBucket'] = undefined;
                const _0x2303ec = new AwsProvider(_0x49a52b, _0x285cd3);
                expect(_0x2303ec['serverless']['service']['provider']['deploymentBucket'])['to']['equal'](undefined);
            }), it('should\x20do\x20nothing\x20if\x20the\x20value\x20is\x20a\x20string', () => {
                _0x49a52b['service']['provider']['deploymentBucket'] = 'my.deployment.bucket';
                const _0x22fc51 = new AwsProvider(_0x49a52b, _0x285cd3);
                expect(_0x22fc51['serverless']['service']['provider']['deploymentBucket'])['to']['equal']('my.deployment.bucket');
            });
        });
    }), describe('values', () => {
        const _0x5aa509 = {
                'a': 'b',
                'c': {
                    'd': 'e',
                    'f': { 'g': 'h' }
                }
            }, _0x51483a = [
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
            ], _0x361c64 = [
                {
                    'path': _0x51483a[-0x9d * -0x35 + -0x2696 + 0x3 * 0x207],
                    'value': _0x5aa509['a']
                },
                {
                    'path': _0x51483a[-0x40 * 0x74 + -0xa14 + 0x2715],
                    'value': _0x5aa509['c']['d']
                },
                {
                    'path': _0x51483a[0x751 * 0x1 + -0x9b1 * -0x1 + -0x1100],
                    'value': _0x5aa509['c']['f']['g']
                }
            ];
        describe('#getValues', () => {
            it('should\x20return\x20an\x20array\x20of\x20values\x20given\x20paths\x20to\x20them', () => {
                expect(_0xfc7ea9['getValues'](_0x5aa509, _0x51483a))['to']['eql'](_0x361c64);
            });
        }), describe('#firstValue', () => {
            it('should\x20ignore\x20entries\x20without\x20a\x20\x27value\x27\x20attribute', () => {
                const _0x540bad = _['cloneDeep'](_0x361c64);
                delete _0x540bad[-0x2c * 0xdd + -0x308 + 0x2904]['value'], delete _0x540bad[-0x2 * -0x4b1 + -0x1 * -0x1b37 + -0x2497 * 0x1]['value'], expect(_0xfc7ea9['firstValue'](_0x540bad))['to']['eql'](_0x361c64[-0x200e + 0x1022 + 0xfed]);
            }), it('should\x20ignore\x20entries\x20with\x20an\x20undefined\x20\x27value\x27\x20attribute', () => {
                const _0x375aa9 = _['cloneDeep'](_0x361c64);
                _0x375aa9[0x1c51 + -0x67a + -0x15d7]['value'] = undefined, _0x375aa9[-0x11d1 * -0x1 + 0x18cf + -0x2a9e]['value'] = undefined, expect(_0xfc7ea9['firstValue'](_0x375aa9))['to']['eql'](_0x361c64[0x703 * 0x5 + 0x1ac + -0x125d * 0x2]);
            }), it('should\x20return\x20the\x20first\x20value', () => {
                expect(_0xfc7ea9['firstValue'](_0x361c64))['to']['equal'](_0x361c64[0x3 * -0x970 + -0xcd5 + 0xdb7 * 0x3]);
            }), it('should\x20return\x20the\x20middle\x20value', () => {
                const _0x13d6c9 = _['cloneDeep'](_0x361c64);
                delete _0x13d6c9[-0x21b8 + -0xab * -0x4 + -0x7c3 * -0x4]['value'], delete _0x13d6c9[-0x1 * -0x183b + -0x3a0 + 0x1 * -0x1499]['value'], expect(_0xfc7ea9['firstValue'](_0x13d6c9))['to']['equal'](_0x13d6c9[0xc92 + -0x13 * 0xdb + -0xec * -0x4]);
            }), it('should\x20return\x20the\x20last\x20value', () => {
                const _0x3ce232 = _['cloneDeep'](_0x361c64);
                delete _0x3ce232[-0x15a4 + -0x16c5 + 0x2c69 * 0x1]['value'], delete _0x3ce232[-0x13 * 0x1b7 + -0x20a * -0x2 + -0xe41 * -0x2]['value'], expect(_0xfc7ea9['firstValue'](_0x3ce232))['to']['equal'](_0x3ce232[0x7d5 + -0xed * -0xe + 0x139 * -0x11]);
            }), it('should\x20return\x20the\x20last\x20object\x20if\x20none\x20have\x20valid\x20values', () => {
                const _0x412737 = _['cloneDeep'](_0x361c64);
                delete _0x412737[0x3bc + -0x829 + 0x46d]['value'], delete _0x412737[0xe8a + 0xe * -0x220 + -0x1 * -0xf37]['value'], delete _0x412737[0x2 * 0x9a6 + -0x15fd + -0x1 * -0x2b3]['value'], expect(_0xfc7ea9['firstValue'](_0x412737))['to']['equal'](_0x412737[0x16f8 + 0x4 * 0x6d6 + 0x5e * -0x89]);
            });
        });
    }), describe('#request()', () => {
        let _0x5bcf3b, _0x101ee1, _0x13c403;
        beforeEach(() => {
            _0x13c403 = sinon['stub'](), _0x5bcf3b = sinon['stub']()['resolves'](), _0x5bcf3b['memoized'] = sinon['stub']()['resolves']();
            const _0x6ae53d = proxyquire['noCallThru']()['load']('../../../../../lib/plugins/aws/provider.js', {
                '../../aws/request': _0x5bcf3b,
                '@serverless/utils/log': _0x13c403
            });
            _0x101ee1 = new _0x6ae53d(_0x49a52b, _0x285cd3);
        }), afterEach(() => {
        }), it('should\x20pass\x20resolved\x20credentials\x20as\x20expected', async () => {
            _0x101ee1['cachedCredentials'] = {
                'accessKeyId': 'accessKeyId',
                'secretAccessKey': 'secretAccessKey',
                'sessionToken': 'sessionToken'
            }, await _0x101ee1['request']('S3', 'getObject', {}), expect(_0x5bcf3b['args'][-0x1 * 0x24d0 + -0xaa * -0x1d + 0x1 * 0x118e][-0x1 * -0x1081 + 0x2f0 * -0x4 + -0x4c1])['to']['deep']['equal']({
                'name': 'S3',
                'params': {
                    ..._0x101ee1['cachedCredentials'],
                    'region': 'us-east-1',
                    'isS3TransferAccelerationEnabled': ![]
                }
            });
        }), it('should\x20trigger\x20the\x20expected\x20AWS\x20SDK\x20invokation', () => {
            return _0x101ee1['request']('S3', 'getObject', {})['then'](() => {
                expect(_0x5bcf3b)['to']['have']['been']['calledOnce'];
            });
        }), it('should\x20use\x20local\x20cache\x20when\x20using\x20{useCache:\x20true}', () => {
            return _0x101ee1['request']('S3', 'getObject', {}, { 'useCache': !![] })['then'](() => _0x101ee1['request']('S3', 'getObject', {}, { 'useCache': !![] }))['then'](() => {
                expect(_0x5bcf3b)['to']['not']['have']['been']['called'], expect(_0x5bcf3b['memoized'])['to']['have']['been']['calledTwice'];
            });
        }), it('should\x20detect\x20incompatible\x20legacy\x20use\x20of\x20aws\x20request\x20and\x20print\x20a\x20debug\x20warning', () => {
            return process['env']['SLS_DEBUG'] = !![], _0x101ee1['request']('S3', 'getObject', {}, 'incompatible\x20string\x20option')['then'](() => {
                expect(_0x13c403)['to']['have']['been']['calledWith']('WARNING:\x20Inappropriate\x20call\x20of\x20provider.request()');
            })['finally'](() => {
                process['env']['SLS_DEBUG'] = ![];
            });
        });
    }), describe('#getServerlessDeploymentBucketName()', () => {
        it('should\x20return\x20the\x20name\x20of\x20the\x20serverless\x20deployment\x20bucket', () => {
            const _0x34a1c0 = sinon['stub'](_0xfc7ea9, 'request')['resolves']({ 'StackResourceDetail': { 'PhysicalResourceId': 'serverlessDeploymentBucketName' } });
            return _0xfc7ea9['getServerlessDeploymentBucketName']()['then'](_0x372ea4 => {
                expect(_0x372ea4)['to']['equal']('serverlessDeploymentBucketName'), expect(_0x34a1c0['calledOnce'])['to']['be']['equal'](!![]), expect(_0x34a1c0['calledWithExactly']('CloudFormation', 'describeStackResource', {
                    'StackName': _0xfc7ea9['naming']['getStackName'](),
                    'LogicalResourceId': _0xfc7ea9['naming']['getDeploymentBucketLogicalId']()
                }))['to']['be']['equal'](!![]), _0xfc7ea9['request']['restore']();
            });
        }), it('should\x20return\x20the\x20name\x20of\x20the\x20custom\x20deployment\x20bucket', () => {
            _0xfc7ea9['serverless']['service']['provider']['deploymentBucket'] = 'custom-bucket';
            const _0x3d85e9 = sinon['stub'](_0xfc7ea9, 'request')['resolves']({ 'StackResourceDetail': { 'PhysicalResourceId': 'serverlessDeploymentBucketName' } });
            return _0xfc7ea9['getServerlessDeploymentBucketName']()['then'](_0xb25b4b => {
                expect(_0x3d85e9['called'])['to']['be']['equal'](![]), expect(_0xb25b4b)['to']['equal']('custom-bucket'), _0xfc7ea9['request']['restore']();
            });
        });
    }), describe('#getAccountInfo()', () => {
        it('should\x20return\x20the\x20AWS\x20account\x20id\x20and\x20partition', () => {
            const _0x3081fb = '12345678', _0x5e168a = 'aws', _0x2fac17 = sinon['stub'](_0xfc7ea9, 'request')['resolves']({
                    'ResponseMetadata': { 'RequestId': '12345678-1234-1234-1234-123456789012' },
                    'UserId': 'ABCDEFGHIJKLMNOPQRSTU:VWXYZ',
                    'Account': _0x3081fb,
                    'Arn': 'arn:aws:sts::123456789012:assumed-role/ROLE-NAME/VWXYZ'
                });
            return _0xfc7ea9['getAccountInfo']()['then'](_0x144a36 => {
                expect(_0x2fac17['calledOnce'])['to']['equal'](!![]), expect(_0x144a36['accountId'])['to']['equal'](_0x3081fb), expect(_0x144a36['partition'])['to']['equal'](_0x5e168a), _0xfc7ea9['request']['restore']();
            });
        });
    }), describe('#getAccountId()', () => {
        it('should\x20return\x20the\x20AWS\x20account\x20id', () => {
            const _0xd4291c = '12345678', _0x5c0147 = sinon['stub'](_0xfc7ea9, 'request')['resolves']({
                    'ResponseMetadata': { 'RequestId': '12345678-1234-1234-1234-123456789012' },
                    'UserId': 'ABCDEFGHIJKLMNOPQRSTU:VWXYZ',
                    'Account': _0xd4291c,
                    'Arn': 'arn:aws:sts::123456789012:assumed-role/ROLE-NAME/VWXYZ'
                });
            return _0xfc7ea9['getAccountId']()['then'](_0x2642a4 => {
                expect(_0x5c0147['calledOnce'])['to']['equal'](!![]), expect(_0x2642a4)['to']['equal'](_0xd4291c), _0xfc7ea9['request']['restore']();
            });
        });
    }), describe('#isS3TransferAccelerationEnabled()', () => {
        it('should\x20return\x20false\x20by\x20default', () => {
            return _0xfc7ea9['options']['aws-s3-accelerate'] = undefined, expect(_0xfc7ea9['isS3TransferAccelerationEnabled']())['to']['equal'](![]);
        }), it('should\x20return\x20true\x20when\x20CLI\x20option\x20is\x20provided', () => {
            return _0xfc7ea9['options']['aws-s3-accelerate'] = !![], expect(_0xfc7ea9['isS3TransferAccelerationEnabled']())['to']['equal'](!![]);
        });
    }), describe('#disableTransferAccelerationForCurrentDeploy()', () => {
        it('should\x20remove\x20the\x20corresponding\x20option\x20for\x20the\x20current\x20deploy', () => {
            return _0xfc7ea9['options']['aws-s3-accelerate'] = !![], _0xfc7ea9['disableTransferAccelerationForCurrentDeploy'](), expect(_0xfc7ea9['options']['aws-s3-accelerate'])['to']['be']['undefined'];
        });
    });
}), describe('test/unit/lib/plugins/aws/provider.test.js', () => {
    describe('#getProviderName\x20and\x20#sessionCache', () => {
        let _0x1fbf4b;
        const _0x43a851 = '123';
        before(async () => {
            class _0x2f3041 {
                constructor(_0x1cceb6) {
                    this['credentials'] = _0x1cceb6, this['credentials']['credentials']['sessionToken'] = _0x43a851;
                }
                ['describeStacks']() {
                    return {
                        'promise': async () => {
                        }
                    };
                }
            }
            class _0x42c287 {
                constructor() {
                    this['sessionToken'] = 'abc', this['accessKeyId'] = 'keyId', this['secretAccessKey'] = 'secret';
                }
            }
            class _0x3d090b {
                constructor() {
                    this['sessionToken'] = 'env', this['accessKeyId'] = 'keyId', this['secretAccessKey'] = 'secret';
                }
            }
            class _0x487518 {
            }
            const _0x55ebd9 = {
                    'aws-sdk': {
                        'SharedIniFileCredentials': _0x42c287,
                        'EnvironmentCredentials': _0x3d090b,
                        'CloudFormation': _0x2f3041
                    },
                    'aws-sdk/lib/metadata_service': _0x487518
                }, {serverless: _0x17853b} = await runServerless({
                    'fixture': 'aws',
                    'command': 'print',
                    'modulesCacheStub': _0x55ebd9
                });
            _0x1fbf4b = _0x17853b;
        }), it('`AwsProvider.getProviderName()`\x20should\x20resolve\x20provider\x20name', () => {
            expect(AwsProvider['getProviderName']())['to']['equal']('aws');
        }), it('should\x20retain\x20sessionToken\x20eventually\x20updated\x20internally\x20by\x20SDK', async () => {
            expect(_0x1fbf4b['getProvider']('aws')['getCredentials']()['credentials']['sessionToken'])['not']['to']['equal'](_0x43a851), await _0x1fbf4b['getProvider']('aws')['request']('CloudFormation', 'describeStacks'), expect(_0x1fbf4b['getProvider']('aws')['getCredentials']()['credentials']['sessionToken'])['to']['equal'](_0x43a851);
        });
    }), describe('#getCredentials()', () => {
        before(async () => {
            await fs['ensureDir'](path['resolve'](os['homedir'](), './.aws')), await fs['outputFile'](path['resolve'](os['homedir'](), './.aws/credentials'), '\x0a[default]\x0aaws_access_key_id\x20=\x20DEFAULTKEYID\x0aaws_secret_access_key\x20=\x20DEFAULTSECRET\x0a\x0a[notDefault]\x0aaws_access_key_id\x20=\x20NOTDEFAULTKEYID\x0aaws_secret_access_key\x20=\x20NOTDEFAULTSECRET\x0a\x0a[notDefaultWithRole]\x0asource_profile\x20=\x20notDefault\x0arole_arn\x20=\x20NOTDEFAULTWITHROLEROLE\x0a', { 'flag': 'w+' });
        }), it('should\x20get\x20credentials\x20from\x20default\x20AWS\x20profile', async () => {
            const {serverless: _0x188646} = await runServerless({
                    'fixture': 'aws',
                    'command': 'print'
                }), _0x41d05b = _0x188646['getProvider']('aws')['getCredentials']();
            expect(_0x41d05b['credentials']['accessKeyId'])['to']['equal']('DEFAULTKEYID');
        }), it('should\x20get\x20credentials\x20from\x20custom\x20default\x20AWS\x20profile,\x20set\x20by\x20AWS_DEFAULT_PROFILE', async () => {
            const {serverless: _0x23c38e} = await runServerless({
                'fixture': 'aws',
                'command': 'print'
            });
            let _0x4155ca;
            overrideEnv(() => {
                process['env']['AWS_DEFAULT_PROFILE'] = 'notDefault', _0x4155ca = _0x23c38e['getProvider']('aws')['getCredentials']();
            }), expect(_0x4155ca['credentials']['accessKeyId'])['to']['equal']('NOTDEFAULTKEYID');
        }), describe('assume\x20role\x20with\x20provider.profile', () => {
            let _0x4faea3;
            before(async () => {
                const {serverless: _0x2368e9} = await runServerless({
                    'fixture': 'aws',
                    'command': 'print',
                    'configExt': { 'provider': { 'profile': 'notDefaultWithRole' } }
                });
                _0x4faea3 = _0x2368e9['getProvider']('aws')['getCredentials']();
            }), it('should\x20get\x20credentials\x20from\x20`provider.profile`', () => {
                expect(_0x4faea3['credentials']['profile'])['to']['equal']('notDefaultWithRole');
            }), it('should\x20accept\x20a\x20role\x20to\x20assume\x20on\x20credentials', () => {
                expect(_0x4faea3['credentials']['roleArn'])['to']['equal']('NOTDEFAULTWITHROLEROLE');
            });
        }), it('should\x20get\x20credentials\x20from\x20environment\x20variables', async () => {
            const {serverless: _0x47c01a} = await runServerless({
                'fixture': 'aws',
                'command': 'print'
            });
            let _0x48b20a;
            overrideEnv(() => {
                process['env']['AWS_ACCESS_KEY_ID'] = 'ENVKEYID', process['env']['AWS_SECRET_ACCESS_KEY'] = 'ENVSECRET', _0x48b20a = _0x47c01a['getProvider']('aws')['getCredentials']();
            }), expect(_0x48b20a['credentials']['accessKeyId'])['to']['equal']('ENVKEYID');
        }), describe('profile\x20with\x20non\x20default\x20credentials\x20file', () => {
            let _0x956a12;
            before(async () => {
                await fs['outputFile'](path['resolve'](os['homedir'](), './custom_credentials'), '\x0a[default]\x0aaws_access_key_id\x20=\x20DEFAULTKEYID\x0aaws_secret_access_key\x20=\x20DEFAULTSECRET\x0a\x0a[customProfile]\x0aaws_access_key_id\x20=\x20CUSTOMKEYID\x0aaws_secret_access_key\x20=\x20CUSTOMSECRET\x0a', { 'flag': 'w+' });
                const {serverless: _0x2a40fb} = await runServerless({
                    'fixture': 'aws',
                    'command': 'print'
                });
                overrideEnv(() => {
                    process['env']['AWS_PROFILE'] = 'customProfile', process['env']['AWS_SHARED_CREDENTIALS_FILE'] = path['resolve'](os['homedir'](), './custom_credentials')['toString'](), _0x956a12 = _0x2a40fb['getProvider']('aws')['getCredentials']();
                });
            }), after(async () => {
                await fs['remove'](path['resolve'](os['homedir'](), './custom_credentials'));
            }), it('should\x20get\x20credentials\x20from\x20AWS_PROFILE\x20environment\x20variable', () => {
                expect(_0x956a12['credentials']['profile'])['to']['equal']('customProfile');
            }), it('should\x20get\x20credentials\x20from\x20AWS_SHARED_CREDENTIALS_FILE\x20environment\x20variable', () => {
                expect(_0x956a12['credentials']['accessKeyId'])['to']['equal']('CUSTOMKEYID');
            });
        }), it('should\x20get\x20credentials\x20from\x20stage\x20specific\x20environment\x20variables', async () => {
            const {serverless: _0x166319} = await runServerless({
                'fixture': 'aws',
                'command': 'print',
                'configExt': { 'provider': { 'stage': 'testStage' } }
            });
            let _0x1c34a9;
            overrideEnv(() => {
                process['env']['AWS_TESTSTAGE_ACCESS_KEY_ID'] = 'TESTSTAGEACCESSKEYID', process['env']['AWS_TESTSTAGE_SECRET_ACCESS_KEY'] = 'TESTSTAGESECRET', _0x1c34a9 = _0x166319['getProvider']('aws')['getCredentials']();
            }), expect(_0x1c34a9['credentials']['accessKeyId'])['to']['equal']('TESTSTAGEACCESSKEYID');
        }), it('should\x20get\x20credentials\x20from\x20AWS_{stage}_PROFILE\x20environment\x20variable', async () => {
            const {serverless: _0x469b62} = await runServerless({
                'fixture': 'aws',
                'command': 'print',
                'configExt': { 'provider': { 'stage': 'testStage' } }
            });
            let _0x4fdc2a;
            overrideEnv(() => {
                process['env']['AWS_TESTSTAGE_PROFILE'] = 'notDefault', _0x4fdc2a = _0x469b62['getProvider']('aws')['getCredentials']();
            }), expect(_0x4fdc2a['credentials']['accessKeyId'])['to']['equal']('NOTDEFAULTKEYID');
        }), describe('profile\x20with\x20cli\x20and\x20encryption', () => {
            let _0x544da4;
            before(async () => {
                const {serverless: _0x312472} = await runServerless({
                    'fixture': 'aws',
                    'command': 'print',
                    'options': { 'aws-profile': 'notDefault' },
                    'configExt': { 'provider': { 'deploymentBucket': { 'serverSideEncryption': 'aws:kms' } } }
                });
                _0x544da4 = _0x312472['getProvider']('aws')['getCredentials']();
            }), it('should\x20get\x20credentials\x20\x22--aws-profile\x22\x20CLI\x20option', () => {
                expect(_0x544da4['credentials']['accessKeyId'])['to']['equal']('NOTDEFAULTKEYID');
            }), it('should\x20set\x20the\x20signatureVersion\x20to\x20v4\x20if\x20the\x20serverSideEncryption\x20is\x20aws:kms', () => {
                expect(_0x544da4['signatureVersion'])['to']['equal']('v4');
            });
        }), it('should\x20throw\x20an\x20error\x20if\x20a\x20non-existent\x20profile\x20is\x20set', async () => {
            const {serverless: _0x5e9143} = await runServerless({
                'fixture': 'aws',
                'command': 'print',
                'options': { 'aws-profile': 'nonExistent' }
            });
            expect(() => _0x5e9143['getProvider']('aws')['getCredentials']())['to']['throw'](Error);
        });
    }), describe('#getRegion()', () => {
        it('should\x20default\x20to\x20\x22us-east-1\x22', async () => {
            const {serverless: _0x497a44} = await runServerless({
                'fixture': 'aws',
                'command': 'print'
            });
            expect(_0x497a44['getProvider']('aws')['getRegion']())['to']['equal']('us-east-1');
        }), it('should\x20allow\x20to\x20override\x20via\x20`provider.region`', async () => {
            const {serverless: _0x310b6e} = await runServerless({
                'fixture': 'aws',
                'command': 'print',
                'configExt': { 'provider': { 'region': 'eu-central-1' } }
            });
            expect(_0x310b6e['getProvider']('aws')['getRegion']())['to']['equal']('eu-central-1');
        }), it('should\x20allow\x20to\x20override\x20via\x20CLI\x20`--region`\x20param', async () => {
            const {serverless: _0x2aca7b} = await runServerless({
                'fixture': 'aws',
                'command': 'print',
                'options': { 'region': 'us-west-1' },
                'configExt': { 'provider': { 'region': 'eu-central-1' } }
            });
            expect(_0x2aca7b['getProvider']('aws')['getRegion']())['to']['equal']('us-west-1');
        });
    }), describe('#getProfile()', () => {
        it('should\x20allow\x20to\x20set\x20via\x20`provider.profile`', async () => {
            const {serverless: _0x5041b5} = await runServerless({
                'fixture': 'aws',
                'command': 'print',
                'configExt': { 'provider': { 'profile': 'test-profile' } }
            });
            expect(_0x5041b5['getProvider']('aws')['getProfile']())['to']['equal']('test-profile');
        }), it('should\x20allow\x20to\x20set\x20via\x20CLI\x20`--profile`\x20param', async () => {
            const {serverless: _0x91041e} = await runServerless({
                'fixture': 'aws',
                'command': 'print',
                'options': { 'profile': 'cli-override' },
                'configExt': { 'provider': { 'profile': 'test-profile' } }
            });
            expect(_0x91041e['getProvider']('aws')['getProfile']())['to']['equal']('cli-override');
        }), it('should\x20allow\x20to\x20set\x20via\x20CLI\x20`--aws-profile`\x20param', async () => {
            const {serverless: _0x15aa22} = await runServerless({
                'fixture': 'aws',
                'command': 'print',
                'options': {
                    'profile': 'cli-override',
                    'aws-profile': 'aws-override'
                },
                'configExt': { 'provider': { 'profile': 'test-profile' } }
            });
            expect(_0x15aa22['getProvider']('aws')['getProfile']())['to']['equal']('aws-override');
        });
    }), describe('#getDeploymentPrefix()', () => {
        it('should\x20put\x20all\x20artifacts\x20in\x20namespaced\x20folder', async () => {
            const {cfTemplate: _0x52da10} = await runServerless({
                    'fixture': 'function',
                    'command': 'package'
                }), _0x779273 = Object['values'](_0x52da10['Resources'])['filter'](_0x3335e7 => _0x3335e7['Type'] === 'AWS::Lambda::Function');
            expect(_0x779273['length'])['to']['be']['greaterThanOrEqual'](-0x27f * -0x3 + 0xb7e + -0x12fa);
            for (const _0x53df1d of _0x779273) {
                expect(_0x53df1d['Properties']['Code']['S3Key'])['to']['be']['a']('string')['and']['satisfy'](_0x20e674 => _0x20e674['startsWith']('serverless/'));
            }
        }), it('should\x20support\x20custom\x20namespaced\x20folder', async () => {
            const {cfTemplate: _0x56171f} = await runServerless({
                    'fixture': 'function',
                    'command': 'package',
                    'configExt': { 'provider': { 'deploymentPrefix': 'test-prefix' } }
                }), _0x142252 = Object['values'](_0x56171f['Resources'])['filter'](_0x464d91 => _0x464d91['Type'] === 'AWS::Lambda::Function');
            expect(_0x142252['length'])['to']['be']['greaterThanOrEqual'](-0x1c57 + -0xa97 * -0x3 + -0x36d * 0x1);
            for (const _0x525317 of _0x142252) {
                expect(_0x525317['Properties']['Code']['S3Key'])['to']['be']['a']('string')['and']['satisfy'](_0xde1786 => _0xde1786['startsWith']('test-prefix/'));
            }
        });
    }), describe('#getAlbTargetGroupPrefix()', () => {
        it('should\x20support\x20`provider.alb.targetGroupPrefix`', async () => {
            const _0x2d81db = '50dc6c495c0c9188', _0x30fa73 = {
                    'listenerArn': 'arn:aws:elasticloadbalancing:us-east-1:123456789012:listener/app/my-load-balancer/' + _0x2d81db + '/f2f7dc8efc522ab2',
                    'conditions': { 'path': '/' }
                }, {cfTemplate: _0x330692} = await runServerless({
                    'fixture': 'function',
                    'command': 'package',
                    'configExt': {
                        'provider': { 'alb': { 'targetGroupPrefix': 'a-prefix' } },
                        'functions': {
                            'fnTargetGroupName': {
                                'handler': 'index.handler',
                                'events': [{
                                        'alb': {
                                            ..._0x30fa73,
                                            'priority': 0x1
                                        }
                                    }]
                            }
                        }
                    }
                }), _0x1eaefe = Object['values'](_0x330692['Resources'])['filter'](_0x404ad3 => _0x404ad3['Type'] === 'AWS::ElasticLoadBalancingV2::TargetGroup');
            expect(_0x1eaefe['length'])['to']['be']['greaterThanOrEqual'](0x129b + 0x18b4 + -0x1 * 0x2b4e);
            for (const _0x561135 of _0x1eaefe) {
                expect(_0x561135['Properties']['Name'])['to']['be']['a']('string')['and']['satisfy'](_0x5a6add => _0x5a6add['startsWith']('a-prefix'));
            }
        });
    }), describe('#getStage()', () => {
        it('should\x20default\x20to\x20\x22dev\x22', async () => {
            const {serverless: _0x4fa1da} = await runServerless({
                'fixture': 'aws',
                'command': 'print'
            });
            expect(_0x4fa1da['getProvider']('aws')['getStage']())['to']['equal']('dev');
        }), it('should\x20allow\x20to\x20override\x20via\x20`provider.stage`', async () => {
            const {serverless: _0x2d922b} = await runServerless({
                'fixture': 'aws',
                'command': 'print',
                'configExt': { 'provider': { 'stage': 'staging' } }
            });
            expect(_0x2d922b['getProvider']('aws')['getStage']())['to']['equal']('staging');
        }), it('should\x20allow\x20to\x20override\x20via\x20CLI\x20`--stage`\x20param', async () => {
            const {serverless: _0x349a99} = await runServerless({
                'fixture': 'aws',
                'command': 'print',
                'options': { 'stage': 'production' },
                'configExt': { 'provider': { 'stage': 'staging' } }
            });
            expect(_0x349a99['getProvider']('aws')['getStage']())['to']['equal']('production');
        });
    }), describe('when\x20resolving\x20images', () => {
        it('should\x20fail\x20if\x20`functions[].image`\x20references\x20image\x20with\x20both\x20path\x20and\x20uri', async () => {
            await expect(runServerless({
                'fixture': 'function',
                'command': 'package',
                'configExt': {
                    'provider': {
                        'ecr': {
                            'images': {
                                'invalidimage': {
                                    'path': './',
                                    'uri': '000000000000.dkr.ecr.sa-east-1.amazonaws.com/test-lambda-docker@sha256:6bb600b4d6e1d7cf521097177dd0c4e9ea373edb91984a505333be8ac9455d38'
                                }
                            }
                        }
                    },
                    'functions': { 'fnProviderInvalidImage': { 'image': 'invalidimage' } }
                }
            }))['to']['be']['eventually']['rejected']['and']['have']['property']('code', 'ECR_IMAGE_BOTH_URI_AND_PATH_DEFINED_ERROR');
        }), it('should\x20fail\x20if\x20`functions[].image`\x20references\x20image\x20without\x20path\x20and\x20uri', async () => {
            await expect(runServerless({
                'fixture': 'function',
                'command': 'package',
                'configExt': {
                    'provider': { 'ecr': { 'images': { 'invalidimage': {} } } },
                    'functions': { 'fnProviderInvalidImage': { 'image': 'invalidimage' } }
                }
            }))['to']['be']['eventually']['rejected']['and']['have']['property']('code', 'ECR_IMAGE_NEITHER_URI_NOR_PATH_DEFINED_ERROR');
        }), it('should\x20fail\x20if\x20`functions[].image`\x20references\x20image\x20from\x20`provider.ecr.images`\x20that\x20has\x20invalid\x20path', async () => {
            await expect(runServerless({
                'fixture': 'ecr',
                'command': 'package',
                'shouldStubSpawn': !![],
                'configExt': { 'provider': { 'ecr': { 'images': { 'baseimage': { 'path': './invalid' } } } } }
            }))['to']['be']['eventually']['rejected']['and']['have']['property']('code', 'DOCKERFILE_NOT_AVAILABLE_ERROR');
        }), it('should\x20fail\x20if\x20`functions[].image`\x20references\x20image\x20not\x20defined\x20in\x20`provider.ecr.images`', async () => {
            await expect(runServerless({
                'fixture': 'function',
                'command': 'package',
                'configExt': { 'functions': { 'fnInvalid': { 'image': 'undefinedimage' } } }
            }))['to']['be']['eventually']['rejected']['and']['have']['property']('code', 'REFERENCED_FUNCTION_IMAGE_NOT_DEFINED_IN_PROVIDER');
        }), it('should\x20fail\x20if\x20both\x20uri\x20and\x20name\x20is\x20provided\x20for\x20an\x20image', async () => {
            await expect(runServerless({
                'fixture': 'ecr',
                'command': 'package',
                'shouldStubSpawn': !![],
                'configExt': {
                    'functions': {
                        'foo': {
                            'image': {
                                'name': 'baseimage',
                                'uri': '000000000000.dkr.ecr.sa-east-1.amazonaws.com/test-lambda-docker@sha256:6bb600b4d6e1d7cf521097177dd0c4e9ea373edb91984a505333be8ac9455d38'
                            }
                        }
                    }
                }
            }))['to']['be']['eventually']['rejected']['and']['have']['property']('code', 'FUNCTION_IMAGE_BOTH_URI_AND_NAME_DEFINED_ERROR');
        }), it('should\x20fail\x20if\x20neither\x20uri\x20nor\x20name\x20is\x20provided\x20for\x20an\x20image', async () => {
            await expect(runServerless({
                'fixture': 'ecr',
                'command': 'package',
                'shouldStubSpawn': !![],
                'configExt': { 'functions': { 'foo': { 'image': {} } } }
            }))['to']['be']['eventually']['rejected']['and']['have']['property']('code', 'FUNCTION_IMAGE_NEITHER_URI_NOR_NAME_DEFINED_ERROR');
        });
        const _0xa22abb = (_0x5548dd, _0x3b577f) => Object['values'](_0x5548dd)['find'](_0x318146 => _0x318146['Type'] === 'AWS::Lambda::Version' && _0x318146['Properties']['FunctionName']['Ref'] === _0x3b577f)['Properties'];
        describe('with\x20`functions[].image`\x20referencing\x20existing\x20images', () => {
            let _0x276b1b, _0x437b0c, _0x3fc4d7;
            const _0x4548ae = '6bb600b4d6e1d7cf521097177dd0c4e9ea373edb91984a505333be8ac9455d38', _0x47b37f = '000000000000.dkr.ecr.sa-east-1.amazonaws.com/test-lambda-docker@sha256:' + _0x4548ae, _0x55da23 = 'sha256:2e6b10a4b1ca0f6d3563a8a1f034dde7c4d7c93b50aa91f24311765d0822186b', _0x5ee19 = sinon['stub']()['resolves']({ 'imageDetails': [{ 'imageDigest': _0x55da23 }] }), _0x134c32 = { 'ECR': { 'describeImages': _0x5ee19 } };
            before(async () => {
                const {
                    awsNaming: _0x5c4575,
                    cfTemplate: _0x1598e6,
                    fixtureData: _0x4bca6f
                } = await runServerless({
                    'fixture': 'function',
                    'command': 'package',
                    'configExt': {
                        'provider': {
                            'ecr': {
                                'images': {
                                    'imagewithexplicituri': { 'uri': _0x47b37f },
                                    'imagewithimplicituri': _0x47b37f
                                }
                            }
                        },
                        'functions': {
                            'fnImage': { 'image': _0x47b37f },
                            'fnImageWithTag': { 'image': '000000000000.dkr.ecr.sa-east-1.amazonaws.com/test-lambda-docker:stable' },
                            'fnImageWithTagAndRepoWithSlashes': { 'image': '000000000000.dkr.ecr.sa-east-1.amazonaws.com/test-lambda/repo-docker:stable' },
                            'fnImageWithExplicitUri': { 'image': { 'uri': _0x47b37f } },
                            'fnProviderImageWithExplicitUri': { 'image': 'imagewithexplicituri' },
                            'fnProviderImageWithImplicitUri': { 'image': 'imagewithimplicituri' }
                        }
                    },
                    'awsRequestStubMap': _0x134c32
                });
                _0x276b1b = _0x1598e6['Resources'], _0x437b0c = _0x5c4575, _0x3fc4d7 = _0x4bca6f['serviceConfig'];
            }), it('should\x20support\x20`functions[].image`\x20with\x20implicit\x20uri\x20with\x20sha', () => {
                const _0x326c72 = _0x3fc4d7['functions']['fnImage'], _0x35226b = _0x437b0c['getLambdaLogicalId']('fnImage'), _0x38db45 = _0x276b1b[_0x35226b]['Properties'];
                expect(_0x38db45['Code'])['to']['deep']['equal']({ 'ImageUri': _0x326c72['image'] }), expect(_0x38db45)['to']['not']['have']['property']('Handler'), expect(_0x38db45)['to']['not']['have']['property']('Runtime');
                const _0x3e8ce8 = _0x326c72['image']['slice'](_0x326c72['image']['lastIndexOf']('@') + (0x1 * 0x1ac9 + 0x441 + -0x1f09));
                expect(_0x3e8ce8)['to']['match'](/^sha256:[a-f0-9]{64}$/);
                const _0x5aafbd = _0x3e8ce8['slice']('sha256:'['length']), _0x54bf78 = _0xa22abb(_0x276b1b, _0x35226b);
                expect(_0x54bf78['CodeSha256'])['to']['equal'](_0x5aafbd);
            }), it('should\x20support\x20`functions[].image`\x20with\x20explicit\x20uri\x20with\x20sha', () => {
                const _0x1700cd = _0x3fc4d7['functions']['fnImageWithExplicitUri'], _0x3681a7 = _0x437b0c['getLambdaLogicalId']('fnImageWithExplicitUri'), _0xa14b49 = _0x276b1b[_0x3681a7]['Properties'];
                expect(_0xa14b49['Code'])['to']['deep']['equal']({ 'ImageUri': _0x1700cd['image']['uri'] }), expect(_0xa14b49)['to']['not']['have']['property']('Handler'), expect(_0xa14b49)['to']['not']['have']['property']('Runtime');
                const _0x25758e = _0x1700cd['image']['uri']['slice'](_0x1700cd['image']['uri']['lastIndexOf']('@') + (0x2560 + 0x119 * -0x1a + -0x8d5));
                expect(_0x25758e)['to']['match'](/^sha256:[a-f0-9]{64}$/);
                const _0x2d4c28 = _0x25758e['slice']('sha256:'['length']), _0x217838 = _0xa22abb(_0x276b1b, _0x3681a7);
                expect(_0x217838['CodeSha256'])['to']['equal'](_0x2d4c28);
            }), it('should\x20support\x20`functions[].image`\x20with\x20tag', () => {
                const _0x382802 = _0x3fc4d7['functions']['fnImageWithTag'], _0xdd2f15 = _0x437b0c['getLambdaLogicalId']('fnImageWithTag'), _0x584713 = _0x276b1b[_0xdd2f15]['Properties'];
                expect(_0x584713['Code'])['to']['deep']['equal']({ 'ImageUri': _0x382802['image']['split'](':')[-0x3f5 + -0x1158 + 0x154d] + '@' + _0x55da23 }), expect(_0x584713)['to']['not']['have']['property']('Handler'), expect(_0x584713)['to']['not']['have']['property']('Runtime');
                const _0xb45c7d = _0xa22abb(_0x276b1b, _0xdd2f15);
                expect(_0xb45c7d['CodeSha256'])['to']['equal'](_0x55da23['slice']('sha256:'['length'])), expect(_0x5ee19)['to']['be']['calledWith']({
                    'imageIds': [{ 'imageTag': 'stable' }],
                    'registryId': '000000000000',
                    'repositoryName': 'test-lambda-docker'
                });
            }), it('should\x20support\x20`functions[].image`\x20with\x20tag\x20and\x20repository\x20name\x20with\x20slash', () => {
                const _0x234dd1 = _0x3fc4d7['functions']['fnImageWithTagAndRepoWithSlashes'], _0x5bffe6 = _0x437b0c['getLambdaLogicalId']('fnImageWithTagAndRepoWithSlashes'), _0x2746b2 = _0x276b1b[_0x5bffe6]['Properties'];
                expect(_0x2746b2['Code'])['to']['deep']['equal']({ 'ImageUri': _0x234dd1['image']['split'](':')[-0x1a99 * -0x1 + -0x10d4 + 0x9c5 * -0x1] + '@' + _0x55da23 }), expect(_0x2746b2)['to']['not']['have']['property']('Handler'), expect(_0x2746b2)['to']['not']['have']['property']('Runtime');
                const _0x5b7aeb = _0xa22abb(_0x276b1b, _0x5bffe6);
                expect(_0x5b7aeb['CodeSha256'])['to']['equal'](_0x55da23['slice']('sha256:'['length'])), expect(_0x5ee19)['to']['be']['calledWith']({
                    'imageIds': [{ 'imageTag': 'stable' }],
                    'registryId': '000000000000',
                    'repositoryName': 'test-lambda/repo-docker'
                });
            }), it('should\x20support\x20`functions[].image`\x20that\x20references\x20provider.ecr.images\x20defined\x20with\x20explicit\x20uri', () => {
                const _0x19569d = _0x437b0c['getLambdaLogicalId']('fnProviderImageWithExplicitUri'), _0x54a55f = _0x276b1b[_0x19569d]['Properties'];
                expect(_0x54a55f['Code'])['to']['deep']['equal']({ 'ImageUri': _0x47b37f }), expect(_0x54a55f)['to']['not']['have']['property']('Handler'), expect(_0x54a55f)['to']['not']['have']['property']('Runtime');
                const _0x118c4f = _0xa22abb(_0x276b1b, _0x19569d);
                expect(_0x118c4f['CodeSha256'])['to']['equal'](_0x4548ae);
            }), it('should\x20support\x20`functions[].image`\x20that\x20references\x20provider.ecr.images\x20defined\x20with\x20implicit\x20uri', () => {
                const _0x840944 = _0x437b0c['getLambdaLogicalId']('fnProviderImageWithImplicitUri'), _0x788e4a = _0x276b1b[_0x840944]['Properties'];
                expect(_0x788e4a['Code'])['to']['deep']['equal']({ 'ImageUri': _0x47b37f }), expect(_0x788e4a)['to']['not']['have']['property']('Handler'), expect(_0x788e4a)['to']['not']['have']['property']('Runtime');
                const _0x26f34 = _0xa22abb(_0x276b1b, _0x840944);
                expect(_0x26f34['CodeSha256'])['to']['equal'](_0x4548ae);
            });
        }), describe('with\x20`functions[].image`\x20referencing\x20images\x20that\x20require\x20building', () => {
            const _0x23d7b8 = '6bb600b4d6e1d7cf521097177dd0c4e9ea373edb91984a505333be8ac9455d38', _0xb44e56 = '999999999999.dkr.ecr.sa-east-1.amazonaws.com/test-lambda-docker', _0x34a8f2 = 'YXdzOmRvY2tlcmF1dGh0b2tlbg==', _0x23a566 = 'https://' + _0xb44e56, _0xa18ec1 = sinon['stub'](), _0x435ab4 = sinon['stub'](), _0x809bed = sinon['stub'](), _0x3bcdf3 = {
                    'STS': {
                        'getCallerIdentity': {
                            'ResponseMetadata': { 'RequestId': 'ffffffff-ffff-ffff-ffff-ffffffffffff' },
                            'UserId': 'XXXXXXXXXXXXXXXXXXXXX',
                            'Account': '999999999999',
                            'Arn': 'arn:aws:iam::999999999999:user/test'
                        }
                    },
                    'ECR': {
                        'describeRepositories': { 'repositories': [{ 'repositoryUri': _0xb44e56 }] },
                        'getAuthorizationToken': {
                            'authorizationData': [{
                                    'proxyEndpoint': _0x23a566,
                                    'authorizationToken': _0x34a8f2
                                }]
                        }
                    }
                }, _0x2bd4d5 = sinon['stub']()['returns']({ 'stdBuffer': 'digest:\x20sha256:' + _0x23d7b8 + '\x20size:\x201787' }), _0x156c84 = {
                    'child-process-ext/spawn': _0x2bd4d5,
                    './lib/utils/telemetry/generatePayload.js': () => ({})
                };
            beforeEach(() => {
                _0xa18ec1['reset'](), _0x435ab4['reset'](), _0x2bd4d5['resetHistory']();
            }), it('should\x20work\x20correctly\x20when\x20repository\x20exists\x20beforehand', async () => {
                const _0x5e20f6 = {
                        ..._0x3bcdf3,
                        'ECR': {
                            ..._0x3bcdf3['ECR'],
                            'describeRepositories': _0xa18ec1['resolves']({ 'repositories': [{ 'repositoryUri': _0xb44e56 }] }),
                            'createRepository': _0x435ab4
                        }
                    }, {
                        awsNaming: _0x511b06,
                        cfTemplate: _0x55f85d,
                        fixtureData: {servicePath: _0x1e1c39}
                    } = await runServerless({
                        'fixture': 'ecr',
                        'command': 'package',
                        'awsRequestStubMap': _0x5e20f6,
                        'modulesCacheStub': _0x156c84
                    }), _0xe70c67 = _0x511b06['getLambdaLogicalId']('foo'), _0x607968 = _0x55f85d['Resources'][_0xe70c67]['Properties'], _0x24498c = _0xa22abb(_0x55f85d['Resources'], _0xe70c67);
                expect(_0x607968['Code']['ImageUri'])['to']['deep']['equal'](_0xb44e56 + '@sha256:' + _0x23d7b8), expect(_0x24498c['CodeSha256'])['to']['equal'](_0x23d7b8), expect(_0xa18ec1)['to']['be']['calledOnce'], expect(_0x435ab4['notCalled'])['to']['be']['true'], expect(_0x2bd4d5)['to']['be']['calledWith']('docker', ['--version']), expect(_0x2bd4d5)['not']['to']['be']['calledWith']('docker', [
                    'login',
                    '--username',
                    'AWS',
                    '--password',
                    'dockerauthtoken',
                    _0x23a566
                ]), expect(_0x2bd4d5)['to']['be']['calledWith']('docker', [
                    'build',
                    '-t',
                    _0x511b06['getEcrRepositoryName']() + ':baseimage',
                    '-f',
                    path['join'](_0x1e1c39, 'Dockerfile'),
                    './'
                ]), expect(_0x2bd4d5)['to']['be']['calledWith']('docker', [
                    'tag',
                    _0x511b06['getEcrRepositoryName']() + ':baseimage',
                    _0xb44e56 + ':baseimage'
                ]), expect(_0x2bd4d5)['to']['be']['calledWith']('docker', [
                    'push',
                    _0xb44e56 + ':baseimage'
                ]);
            }), it('should\x20work\x20correctly\x20when\x20repository\x20does\x20not\x20exist\x20beforehand\x20and\x20scanOnPush\x20is\x20set', async () => {
                const _0x59228d = {
                        ..._0x3bcdf3,
                        'ECR': {
                            ..._0x3bcdf3['ECR'],
                            'describeRepositories': _0xa18ec1['throws']({ 'providerError': { 'code': 'RepositoryNotFoundException' } }),
                            'createRepository': _0x809bed['resolves']({ 'repository': { 'repositoryUri': _0xb44e56 } })
                        }
                    }, {
                        awsNaming: _0x1b7fdb,
                        cfTemplate: _0x39f08c
                    } = await runServerless({
                        'fixture': 'ecr',
                        'command': 'package',
                        'awsRequestStubMap': _0x59228d,
                        'modulesCacheStub': _0x156c84,
                        'configExt': {
                            'provider': {
                                'ecr': {
                                    'scanOnPush': !![],
                                    'images': {
                                        'baseimage': {
                                            'path': './',
                                            'file': 'Dockerfile.dev'
                                        }
                                    }
                                }
                            }
                        }
                    }), _0x464980 = _0x1b7fdb['getLambdaLogicalId']('foo'), _0x20226e = _0x39f08c['Resources'][_0x464980]['Properties'], _0x1d3512 = _0xa22abb(_0x39f08c['Resources'], _0x464980);
                expect(_0x20226e['Code']['ImageUri'])['to']['deep']['equal'](_0xb44e56 + '@sha256:' + _0x23d7b8), expect(_0x1d3512['CodeSha256'])['to']['equal'](_0x23d7b8), expect(_0xa18ec1)['to']['be']['calledOnce'], expect(_0x809bed)['to']['be']['calledOnce'], expect(_0x809bed['args'][-0x650 + -0x3 * 0x9e1 + 0x23f3][0x25d7 * 0x1 + 0xf44 + -0xa9f * 0x5]['imageScanningConfiguration'])['to']['deep']['equal']({ 'scanOnPush': !![] });
            }), it('should\x20work\x20correctly\x20when\x20repository\x20does\x20not\x20exist\x20beforehand', async () => {
                const _0x11120c = {
                        ..._0x3bcdf3,
                        'ECR': {
                            ..._0x3bcdf3['ECR'],
                            'describeRepositories': _0xa18ec1['throws']({ 'providerError': { 'code': 'RepositoryNotFoundException' } }),
                            'createRepository': _0x435ab4['resolves']({ 'repository': { 'repositoryUri': _0xb44e56 } })
                        }
                    }, {
                        awsNaming: _0x420f6e,
                        cfTemplate: _0x58d3f2
                    } = await runServerless({
                        'fixture': 'ecr',
                        'command': 'package',
                        'awsRequestStubMap': _0x11120c,
                        'modulesCacheStub': _0x156c84
                    }), _0x4dcd2a = _0x420f6e['getLambdaLogicalId']('foo'), _0x418b64 = _0x58d3f2['Resources'][_0x4dcd2a]['Properties'], _0x336dad = _0xa22abb(_0x58d3f2['Resources'], _0x4dcd2a);
                expect(_0x418b64['Code']['ImageUri'])['to']['deep']['equal'](_0xb44e56 + '@sha256:' + _0x23d7b8), expect(_0x336dad['CodeSha256'])['to']['equal'](_0x23d7b8), expect(_0xa18ec1)['to']['be']['calledOnce'], expect(_0x435ab4)['to']['be']['calledOnce'];
            }), it('should\x20login\x20and\x20retry\x20when\x20docker\x20push\x20fails\x20with\x20no\x20basic\x20auth\x20credentials\x20error', async () => {
                const _0x2ae0cc = {
                        ..._0x3bcdf3,
                        'ECR': {
                            ..._0x3bcdf3['ECR'],
                            'describeRepositories': _0xa18ec1['resolves']({ 'repositories': [{ 'repositoryUri': _0xb44e56 }] }),
                            'createRepository': _0x435ab4
                        }
                    }, _0x49969f = sinon['stub']()['returns']({ 'stdBuffer': 'digest:\x20sha256:' + _0x23d7b8 + '\x20size:\x201787' })['onCall'](-0x37 * 0xa1 + 0x1cba * 0x1 + 0x10 * 0x5e)['throws']({ 'stdBuffer': 'no\x20basic\x20auth\x20credentials' }), {
                        awsNaming: _0x1a9887,
                        cfTemplate: _0x3ebd51,
                        fixtureData: {servicePath: _0x2a79c4}
                    } = await runServerless({
                        'fixture': 'ecr',
                        'command': 'package',
                        'awsRequestStubMap': _0x2ae0cc,
                        'modulesCacheStub': {
                            ..._0x156c84,
                            'child-process-ext/spawn': _0x49969f
                        }
                    }), _0x3ead58 = _0x1a9887['getLambdaLogicalId']('foo'), _0x12c2d9 = _0x3ebd51['Resources'][_0x3ead58]['Properties'], _0x79d9ad = _0xa22abb(_0x3ebd51['Resources'], _0x3ead58);
                expect(_0x12c2d9['Code']['ImageUri'])['to']['deep']['equal'](_0xb44e56 + '@sha256:' + _0x23d7b8), expect(_0x79d9ad['CodeSha256'])['to']['equal'](_0x23d7b8), expect(_0xa18ec1)['to']['be']['calledOnce'], expect(_0x435ab4['notCalled'])['to']['be']['true'], expect(_0x49969f)['to']['be']['calledWith']('docker', ['--version']), expect(_0x49969f)['to']['be']['calledWith']('docker', [
                    'build',
                    '-t',
                    _0x1a9887['getEcrRepositoryName']() + ':baseimage',
                    '-f',
                    path['join'](_0x2a79c4, 'Dockerfile'),
                    './'
                ]), expect(_0x49969f)['to']['be']['calledWith']('docker', [
                    'tag',
                    _0x1a9887['getEcrRepositoryName']() + ':baseimage',
                    _0xb44e56 + ':baseimage'
                ]), expect(_0x49969f)['to']['be']['calledWith']('docker', [
                    'push',
                    _0xb44e56 + ':baseimage'
                ]), expect(_0x49969f)['to']['be']['calledWith']('docker', [
                    'login',
                    '--username',
                    'AWS',
                    '--password',
                    'dockerauthtoken',
                    _0x23a566
                ]);
            }), it('should\x20login\x20and\x20retry\x20when\x20docker\x20push\x20fails\x20with\x20token\x20has\x20expired\x20error', async () => {
                const _0x4ecb64 = {
                        ..._0x3bcdf3,
                        'ECR': {
                            ..._0x3bcdf3['ECR'],
                            'describeRepositories': _0xa18ec1['resolves']({ 'repositories': [{ 'repositoryUri': _0xb44e56 }] }),
                            'createRepository': _0x435ab4
                        }
                    }, _0xec0396 = sinon['stub']()['returns']({ 'stdBuffer': 'digest:\x20sha256:' + _0x23d7b8 + '\x20size:\x201787' })['onCall'](0x1 * -0x149f + 0x1335 * -0x1 + 0x149 * 0x1f)['throws']({ 'stdBuffer': 'authorization\x20token\x20has\x20expired' });
                await runServerless({
                    'fixture': 'ecr',
                    'command': 'package',
                    'awsRequestStubMap': _0x4ecb64,
                    'modulesCacheStub': {
                        ..._0x156c84,
                        'child-process-ext/spawn': _0xec0396
                    }
                }), expect(_0xec0396)['to']['be']['calledWith']('docker', [
                    'push',
                    _0xb44e56 + ':baseimage'
                ]), expect(_0xec0396)['to']['be']['calledWith']('docker', [
                    'login',
                    '--username',
                    'AWS',
                    '--password',
                    'dockerauthtoken',
                    _0x23a566
                ]);
            }), it('should\x20emit\x20warning\x20if\x20docker\x20login\x20stores\x20unencrypted\x20credentials', async () => {
                const _0x38ebae = {
                        ..._0x3bcdf3,
                        'ECR': {
                            ..._0x3bcdf3['ECR'],
                            'describeRepositories': _0xa18ec1['resolves']({ 'repositories': [{ 'repositoryUri': _0xb44e56 }] }),
                            'createRepository': _0x435ab4
                        }
                    }, {stdoutData: _0xabf6e2} = await runServerless({
                        'fixture': 'ecr',
                        'command': 'package',
                        'awsRequestStubMap': _0x38ebae,
                        'modulesCacheStub': {
                            ..._0x156c84,
                            'child-process-ext/spawn': sinon['stub']()['returns']({ 'stdBuffer': 'digest:\x20sha256:' + _0x23d7b8 + '\x20size:\x201787' })['onCall'](-0x1a42 + -0x5 * 0x43b + -0x1 * -0x2f6c)['throws']({ 'stdBuffer': 'no\x20basic\x20auth\x20credentials' })['onCall'](-0x270 * -0x4 + -0x2ed * 0x1 + 0xf9 * -0x7)['returns']({ 'stdBuffer': 'your\x20password\x20will\x20be\x20stored\x20unencrypted' })
                        }
                    });
                expect(_0xabf6e2)['to']['include']('WARNING:\x20Docker\x20authentication\x20token\x20will\x20be\x20stored\x20unencrypted\x20in\x20docker\x20config.');
            }), it('should\x20work\x20correctly\x20when\x20image\x20is\x20defined\x20with\x20implicit\x20path\x20in\x20provider', async () => {
                const _0x1b18a2 = {
                        ..._0x3bcdf3,
                        'ECR': {
                            ..._0x3bcdf3['ECR'],
                            'describeRepositories': _0xa18ec1['resolves']({ 'repositories': [{ 'repositoryUri': _0xb44e56 }] }),
                            'createRepository': _0x435ab4
                        }
                    }, {
                        awsNaming: _0xa0c095,
                        cfTemplate: _0x454dc6
                    } = await runServerless({
                        'fixture': 'ecr',
                        'command': 'package',
                        'awsRequestStubMap': _0x1b18a2,
                        'modulesCacheStub': _0x156c84,
                        'configExt': { 'provider': { 'ecr': { 'images': { 'baseimage': './' } } } }
                    }), _0x46832e = _0xa0c095['getLambdaLogicalId']('foo'), _0x208b1b = _0x454dc6['Resources'][_0x46832e]['Properties'], _0x496898 = Object['values'](_0x454dc6['Resources'])['find'](_0x210d68 => _0x210d68['Type'] === 'AWS::Lambda::Version' && _0x210d68['Properties']['FunctionName']['Ref'] === _0x46832e)['Properties'];
                expect(_0x208b1b['Code']['ImageUri'])['to']['deep']['equal'](_0xb44e56 + '@sha256:' + _0x23d7b8), expect(_0x496898['CodeSha256'])['to']['equal'](_0x23d7b8), expect(_0xa18ec1)['to']['be']['calledOnce'], expect(_0x435ab4['notCalled'])['to']['be']['true'];
            }), it('should\x20work\x20correctly\x20when\x20image\x20is\x20defined\x20with\x20`file`\x20set', async () => {
                const _0x167c18 = {
                        ..._0x3bcdf3,
                        'ECR': {
                            ..._0x3bcdf3['ECR'],
                            'describeRepositories': _0xa18ec1['resolves']({ 'repositories': [{ 'repositoryUri': _0xb44e56 }] }),
                            'createRepository': _0x435ab4
                        }
                    }, {
                        awsNaming: _0x1dbc8f,
                        cfTemplate: _0x153ea8,
                        fixtureData: {servicePath: _0x38dd93}
                    } = await runServerless({
                        'fixture': 'ecr',
                        'command': 'package',
                        'awsRequestStubMap': _0x167c18,
                        'modulesCacheStub': _0x156c84,
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
                    }), _0x3f1701 = _0x1dbc8f['getLambdaLogicalId']('foo'), _0x4749c1 = _0x153ea8['Resources'][_0x3f1701]['Properties'], _0x41fe6d = Object['values'](_0x153ea8['Resources'])['find'](_0x43d077 => _0x43d077['Type'] === 'AWS::Lambda::Version' && _0x43d077['Properties']['FunctionName']['Ref'] === _0x3f1701)['Properties'];
                expect(_0x4749c1['Code']['ImageUri'])['to']['deep']['equal'](_0xb44e56 + '@sha256:' + _0x23d7b8), expect(_0x41fe6d['CodeSha256'])['to']['equal'](_0x23d7b8), expect(_0xa18ec1)['to']['be']['calledOnce'], expect(_0x435ab4['notCalled'])['to']['be']['true'], expect(_0x2bd4d5)['to']['be']['calledWith']('docker', [
                    'build',
                    '-t',
                    _0x1dbc8f['getEcrRepositoryName']() + ':baseimage',
                    '-f',
                    path['join'](_0x38dd93, 'Dockerfile.dev'),
                    './'
                ]);
            }), it('should\x20work\x20correctly\x20when\x20image\x20is\x20defined\x20with\x20`cacheFrom`\x20set', async () => {
                const _0x452432 = {
                        ..._0x3bcdf3,
                        'ECR': {
                            ..._0x3bcdf3['ECR'],
                            'describeRepositories': _0xa18ec1['resolves']({ 'repositories': [{ 'repositoryUri': _0xb44e56 }] }),
                            'createRepository': _0x435ab4
                        }
                    }, {
                        awsNaming: _0x1573a8,
                        cfTemplate: _0x1b1712,
                        fixtureData: {servicePath: _0x3ba932}
                    } = await runServerless({
                        'fixture': 'ecr',
                        'command': 'package',
                        'awsRequestStubMap': _0x452432,
                        'modulesCacheStub': _0x156c84,
                        'configExt': {
                            'provider': {
                                'ecr': {
                                    'images': {
                                        'baseimage': {
                                            'path': './',
                                            'file': 'Dockerfile.dev',
                                            'cacheFrom': ['my-image:latest']
                                        }
                                    }
                                }
                            }
                        }
                    }), _0x56feea = _0x1573a8['getLambdaLogicalId']('foo'), _0xf7a4b1 = _0x1b1712['Resources'][_0x56feea]['Properties'], _0x5d8eb8 = Object['values'](_0x1b1712['Resources'])['find'](_0x32b33c => _0x32b33c['Type'] === 'AWS::Lambda::Version' && _0x32b33c['Properties']['FunctionName']['Ref'] === _0x56feea)['Properties'];
                expect(_0xf7a4b1['Code']['ImageUri'])['to']['deep']['equal'](_0xb44e56 + '@sha256:' + _0x23d7b8), expect(_0x5d8eb8['CodeSha256'])['to']['equal'](_0x23d7b8), expect(_0xa18ec1)['to']['be']['calledOnce'], expect(_0x435ab4['notCalled'])['to']['be']['true'], expect(_0x2bd4d5)['to']['be']['calledWith']('docker', [
                    'build',
                    '-t',
                    _0x1573a8['getEcrRepositoryName']() + ':baseimage',
                    '-f',
                    path['join'](_0x3ba932, 'Dockerfile.dev'),
                    '--cache-from',
                    'my-image:latest',
                    './'
                ]);
            }), it('should\x20work\x20correctly\x20when\x20image\x20is\x20defined\x20with\x20`buildArgs`\x20set', async () => {
                const _0x70dd20 = {
                        ..._0x3bcdf3,
                        'ECR': {
                            ..._0x3bcdf3['ECR'],
                            'describeRepositories': _0xa18ec1['resolves']({ 'repositories': [{ 'repositoryUri': _0xb44e56 }] }),
                            'createRepository': _0x435ab4
                        }
                    }, {
                        awsNaming: _0x291130,
                        cfTemplate: _0x566ebb,
                        fixtureData: {servicePath: _0x1c1e8c}
                    } = await runServerless({
                        'fixture': 'ecr',
                        'command': 'package',
                        'awsRequestStubMap': _0x70dd20,
                        'modulesCacheStub': _0x156c84,
                        'configExt': {
                            'provider': {
                                'ecr': {
                                    'images': {
                                        'baseimage': {
                                            'path': './',
                                            'file': 'Dockerfile.dev',
                                            'buildArgs': { 'TESTKEY': 'TESTVAL' }
                                        }
                                    }
                                }
                            }
                        }
                    }), _0x5d35af = _0x291130['getLambdaLogicalId']('foo'), _0x2730b3 = _0x566ebb['Resources'][_0x5d35af]['Properties'], _0x181bb2 = Object['values'](_0x566ebb['Resources'])['find'](_0x5a5370 => _0x5a5370['Type'] === 'AWS::Lambda::Version' && _0x5a5370['Properties']['FunctionName']['Ref'] === _0x5d35af)['Properties'];
                expect(_0x2730b3['Code']['ImageUri'])['to']['deep']['equal'](_0xb44e56 + '@sha256:' + _0x23d7b8), expect(_0x181bb2['CodeSha256'])['to']['equal'](_0x23d7b8), expect(_0xa18ec1)['to']['be']['calledOnce'], expect(_0x435ab4['notCalled'])['to']['be']['true'], expect(_0x2bd4d5)['to']['be']['calledWith']('docker', [
                    'build',
                    '-t',
                    _0x291130['getEcrRepositoryName']() + ':baseimage',
                    '-f',
                    path['join'](_0x1c1e8c, 'Dockerfile.dev'),
                    '--build-arg',
                    'TESTKEY=TESTVAL',
                    './'
                ]);
            }), it('should\x20work\x20correctly\x20when\x20`functions[].image`\x20is\x20defined\x20with\x20explicit\x20name', async () => {
                const _0x2c5ede = {
                        ..._0x3bcdf3,
                        'ECR': {
                            ..._0x3bcdf3['ECR'],
                            'describeRepositories': _0xa18ec1['resolves']({ 'repositories': [{ 'repositoryUri': _0xb44e56 }] }),
                            'createRepository': _0x435ab4
                        }
                    }, {
                        awsNaming: _0x366890,
                        cfTemplate: _0x4f3fd5
                    } = await runServerless({
                        'fixture': 'ecr',
                        'command': 'package',
                        'awsRequestStubMap': _0x2c5ede,
                        'modulesCacheStub': _0x156c84,
                        'configExt': {
                            'provider': { 'ecr': { 'images': { 'baseimage': './' } } },
                            'functions': { 'foo': { 'image': { 'name': 'baseimage' } } }
                        }
                    }), _0x43f028 = _0x366890['getLambdaLogicalId']('foo'), _0x2b312a = _0x4f3fd5['Resources'][_0x43f028]['Properties'], _0x5209a6 = _0xa22abb(_0x4f3fd5['Resources'], _0x43f028);
                expect(_0x2b312a['Code']['ImageUri'])['to']['deep']['equal'](_0xb44e56 + '@sha256:' + _0x23d7b8), expect(_0x5209a6['CodeSha256'])['to']['equal'](_0x23d7b8);
            }), it('should\x20fail\x20when\x20docker\x20command\x20is\x20not\x20available', async () => {
                await expect(runServerless({
                    'fixture': 'ecr',
                    'command': 'package',
                    'awsRequestStubMap': _0x3bcdf3,
                    'modulesCacheStub': { 'child-process-ext/spawn': sinon['stub']()['throws']() }
                }))['to']['be']['eventually']['rejected']['and']['have']['property']('code', 'DOCKER_COMMAND_NOT_AVAILABLE');
            }), it('should\x20fail\x20when\x20docker\x20build\x20fails', async () => {
                await expect(runServerless({
                    'fixture': 'ecr',
                    'command': 'package',
                    'awsRequestStubMap': _0x3bcdf3,
                    'modulesCacheStub': {
                        ..._0x156c84,
                        'child-process-ext/spawn': sinon['stub']()['returns']({})['onSecondCall']()['throws']()
                    }
                }))['to']['be']['eventually']['rejected']['and']['have']['property']('code', 'DOCKER_BUILD_ERROR');
            }), it('should\x20fail\x20when\x20docker\x20tag\x20fails', async () => {
                await expect(runServerless({
                    'fixture': 'ecr',
                    'command': 'package',
                    'awsRequestStubMap': _0x3bcdf3,
                    'modulesCacheStub': {
                        ..._0x156c84,
                        'child-process-ext/spawn': sinon['stub']()['returns']({})['onCall'](0x1 * -0x1caa + 0x2e * -0xbd + 0x3ea2)['throws']()
                    }
                }))['to']['be']['eventually']['rejected']['and']['have']['property']('code', 'DOCKER_TAG_ERROR');
            }), it('should\x20fail\x20when\x20docker\x20push\x20fails', async () => {
                await expect(runServerless({
                    'fixture': 'ecr',
                    'command': 'package',
                    'awsRequestStubMap': _0x3bcdf3,
                    'modulesCacheStub': {
                        ..._0x156c84,
                        'child-process-ext/spawn': sinon['stub']()['returns']({})['onCall'](0x7c + 0x1 * 0xd23 + 0x2 * -0x6ce)['throws']()
                    }
                }))['to']['be']['eventually']['rejected']['and']['have']['property']('code', 'DOCKER_PUSH_ERROR');
            }), it('should\x20fail\x20when\x20docker\x20login\x20fails', async () => {
                await expect(runServerless({
                    'fixture': 'ecr',
                    'command': 'package',
                    'awsRequestStubMap': _0x3bcdf3,
                    'modulesCacheStub': {
                        ..._0x156c84,
                        'child-process-ext/spawn': sinon['stub']()['returns']({})['onCall'](0x1e * 0x119 + 0x1b74 + 0x119 * -0x37)['throws']({ 'stdBuffer': 'no\x20basic\x20auth\x20credentials' })['onCall'](0x101 * -0x3 + 0x3bd + -0xb6)['throws']()
                    }
                }))['to']['be']['eventually']['rejected']['and']['have']['property']('code', 'DOCKER_LOGIN_ERROR');
            });
        });
    });
});
