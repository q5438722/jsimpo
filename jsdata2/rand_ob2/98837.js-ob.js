'use strict';
const _0x4cca = [
    'should\x20not\x20set\x20a\x20flag\x20if\x20there\x20are\x20more\x20remote\x20hashes',
    'onCall',
    'local-hash-zip-file-1',
    'remote-hash-zip-file-1',
    '**.zip',
    'resolve',
    '.serverless/my-service.zip',
    'should\x20not\x20set\x20a\x20flag\x20if\x20remote\x20and\x20local\x20hashes\x20are\x20different',
    '.serverless/func1.zip',
    '.serverless/func2.zip',
    'should\x20not\x20set\x20a\x20flag\x20if\x20the\x20hashes\x20are\x20equal,\x20but\x20the\x20objects\x20were\x20modified\x20after\x20their\x20functions',
    'hash-cf-template',
    'getTime',
    'hash-zip-file-1',
    'should\x20set\x20a\x20flag\x20if\x20the\x20remote\x20and\x20local\x20hashes\x20are\x20equal',
    'should\x20set\x20a\x20flag\x20if\x20the\x20remote\x20and\x20local\x20hashes\x20are\x20equal,\x20and\x20the\x20edit\x20times\x20are\x20ordered',
    'should\x20set\x20a\x20flag\x20if\x20the\x20remote\x20and\x20local\x20hashes\x20are\x20duplicated\x20and\x20equal',
    'func1.zip',
    'func2.zip',
    'calledTwice',
    'should\x20not\x20set\x20a\x20flag\x20if\x20the\x20remote\x20and\x20local\x20hashes\x20are\x20different\x20for\x20package.artifact',
    'package',
    'foo/bar/my-own.zip',
    'local-my-own-hash',
    'remote-my-own-hash',
    'checkForChanges\x20#2',
    'Should\x20recognize\x20package.artifact',
    'packageArtifact',
    'deploy',
    'aws:deploy:deploy:checkForChanges',
    '2020-05-20T15:34:16.494+0000',
    'RRYyTm4Ri8mocpvx44pvas4JKLYtdJS3Z8MOlrZrDXA=',
    'serverless/test-package-artifact/dev/1589988704359-2020-05-20T15:31:44.359Z/artifact.zip',
    '\x225102a4cf710cae6497dba9e61b85d0a4\x22',
    'ffffffff-ffff-ffff-ffff-ffffffffffff',
    'Resources',
    'FooLambdaFunction',
    'Properties',
    'Code',
    'S3Key',
    'endsWith',
    'XXXXXXXXXXXXXXXXXXXXX',
    'arn:aws:iam::999999999999:user/test',
    '/.serverless',
    'zip',
    'compiled-cloudformation-template.json',
    'map',
    'serverless/test-package-artifact/dev/1589988704359-2020-05-20T15:31:44.359Z/',
    '2020-05-20T15:30:16.494+0000',
    'basename',
    'sha256',
    '/.serverless/',
    'data',
    'base64',
    'skip',
    'TODO:\x20should\x20not\x20deploy\x20if\x20artifacts\x20in\x20bucket\x20are\x20same\x20as\x20locally\x20and\x20modification\x20dates\x20for\x20all\x20functions\x20are\x20later\x20than\x20uploaded\x20artifacts\x20dates',
    '2021-05-20T15:34:16.494+0000',
    'ignore',
    'TODO:\x20should\x20deploy\x20when\x20deployment\x20bucket\x20is\x20empty\x20(first\x20deployment)',
    'packageFoldern',
    'TODO:\x20should\x20deploy\x20if\x20individually\x20packaged\x20function\x20was\x20removed',
    'TODO:\x20should\x20deploy\x20if\x20remote\x20hashes\x20are\x20different',
    'TODO:\x20should\x20deploy\x20if\x20count\x20of\x20hashes\x20(not\x20their\x20content)\x20differs',
    'artifact.zip',
    'should\x20skip\x20a\x20deployment\x20with\x20identical\x20hashes\x20and\x20package.artifact\x20targeting\x20.serverless\x20directory',
    'test-packageArtifactInServerlessDir',
    'withArgs',
    'serverless/test-package-artifact/dev/1589988704359-2020-05-20T15:31:44.359Z/compiled-cloudformation-template.json',
    'pZOdrt6qijT7ITsLQjPP9QwgMAfKA2RuUUSTW+l8wWs=',
    'serverless/test-package-artifact/dev/1589988704359-2020-05-20T15:31:44.359Z/my-own.zip',
    'T0qEYHOE4Xv2E8Ar03xGogAlElcdf/dQh/lh9ao7Glo=',
    'STANDARD',
    'throws',
    'WARNING:\x20Not\x20authorized\x20to\x20perform:\x20lambda:GetFunction\x20for\x20at\x20least\x20one\x20of\x20the\x20lambda\x20functions.',
    '\x20Deployment\x20will\x20not\x20be\x20skipped\x20even\x20if\x20service\x20files\x20did\x20not\x20change.\x20',
    'TODO:\x20should\x20crash\x20meaningfully\x20if\x20bucket\x20does\x20not\x20exist',
    'eventually',
    'rejected',
    'and',
    'code',
    'TODO:\x20should\x20handle\x20gently\x20other\x20AWS\x20SDK\x20errors',
    'property',
    'someLogGroupName',
    'getFunction',
    'fn1',
    'getProvider',
    'aws',
    'getStackName',
    'getCloudWatchLogLogicalId',
    'Fn1',
    'arn:aws:lambda:us-east-1:999999999999:function:',
    'Fn2',
    '-xxxxx',
    'arn:aws:lambda:us-east-1:999999999999:function:test-checkForChanges-cdr3ogg-dev-fn1',
    'naming',
    'should\x20attempt\x20to\x20delete\x20filter\x20over\x202\x20subscription\x20filter\x20per\x20log\x20group',
    'calledOnceWith',
    'someLogGroupName1',
    'someLogGroupName2',
    'onFirstCall',
    'callsFake',
    'name',
    'should\x20recognize\x20custom\x20partition',
    'arn:aws-us-gov:lambda:us-east-1:999999999999:function:',
    '1664059Wkpuyr',
    '873140lCEwfZ',
    '1iowqEZ',
    '903895oFZZHo',
    '4XMmcOe',
    '351887hhcAgA',
    '337034rPJfDp',
    '661102qKCjVp',
    '1vBZAHR',
    '201248ijhQcS',
    'crypto',
    'globby',
    'sinon',
    'chai',
    'proxyquire',
    '../../../../../../../lib/plugins/aws/lib/normalizeFiles',
    '../../../../../../../lib/plugins/aws/deploy/index',
    '../../../../../../../lib/Serverless',
    '../../../../../../../lib/serverless-error',
    '../../../../../../utils/run-serverless',
    'use',
    'chai-as-promised',
    'sinon-chai',
    'expect',
    'checkForChanges',
    'my-service',
    'setProvider',
    'bucketName',
    'deployment-bucket',
    'serverless',
    'service',
    'provider',
    'compiledCloudFormationTemplate',
    'bar',
    'serverless/',
    'getStage',
    'cli',
    'spy',
    '../../../../../../../lib/plugins/aws/deploy/lib/checkForChanges.js',
    'stub',
    'getMostRecentObjects',
    'resolves',
    'getObjectMetadata',
    'checkIfDeploymentIsNecessary',
    'checkLogGroupSubscriptionFilterResourceLimitExceeded',
    'restore',
    'should\x20resolve\x20if\x20the\x20\x22force\x22\x20option\x20is\x20used',
    'options',
    'force',
    'fulfilled',
    'not',
    'have',
    'called',
    'been',
    'shouldNotDeploy',
    'equal',
    '#getMostRecentObjects()',
    'request',
    'should\x20resolve\x20if\x20no\x20result\x20is\x20returned',
    'calledWithExactly',
    'serverless/my-service/dev',
    'should\x20translate\x20error\x20if\x20rejected\x20due\x20to\x20missing\x20bucket',
    'rejectedWith',
    'The\x20serverless\x20deployment\x20bucket\x20\x22',
    'Create\x20it\x20manually\x20if\x20you\x20want\x20to\x20reuse\x20the\x20CloudFormation\x20stack\x20\x22my-service-dev\x22,',
    'or\x20delete\x20the\x20stack\x20if\x20it\x20is\x20no\x20longer\x20required.',
    'join',
    'should\x20throw\x20original\x20error\x20if\x20rejected\x20not\x20due\x20to\x20missing\x20bucket',
    'Other\x20reason',
    'should\x20resolve\x20if\x20result\x20array\x20is\x20empty',
    'deep',
    'should\x20resolve\x20with\x20the\x20most\x20recently\x20deployed\x20objects',
    '/151224711231-2016-08-18T15:43:00/cloudformation.json',
    '/141264711231-2016-08-18T15:42:00/cloudformation.json',
    'then',
    'listObjectsV2',
    'should\x20resolve\x20if\x20no\x20input\x20is\x20provided',
    'should\x20resolve\x20if\x20no\x20objects\x20are\x20provided\x20as\x20input',
    'should\x20request\x20the\x20object\x20detailed\x20information',
    '/151224711231-2016-08-18T15:43:00/artifact.zip',
    '/141264711231-2016-08-18T15:42:00/artifact.zip',
    'headObject',
    '#checkIfDeploymentIsNecessary()',
    'normalizeCloudFormationTemplate',
    'returns',
    'sync',
    'readFile',
    'yields',
    'log',
    'should\x20resolve\x20if\x20objects\x20are\x20given,\x20but\x20no\x20function\x20last\x20modified\x20date',
    'my-service.zip',
    'createHash',
    'update',
    'digest',
    'local-hash-cf-template',
    'remote-hash-cf-template',
    'calledOnce',
    'serviceDir',
    '.serverless',
    'calledWith'
];
const _0x146a66 = _0x418f;
(function (_0x56d9ae, _0x502ae7) {
    const _0x4b9942 = _0x418f;
    while (!![]) {
        try {
            const _0x23480d = parseInt(_0x4b9942(0x74)) + parseInt(_0x4b9942(0x75)) + -parseInt(_0x4b9942(0x76)) * -parseInt(_0x4b9942(0x77)) + parseInt(_0x4b9942(0x78)) * -parseInt(_0x4b9942(0x79)) + -parseInt(_0x4b9942(0x7a)) + parseInt(_0x4b9942(0x7b)) * -parseInt(_0x4b9942(0x7c)) + -parseInt(_0x4b9942(0x7d));
            if (_0x23480d === _0x502ae7)
                break;
            else
                _0x56d9ae['push'](_0x56d9ae['shift']());
        } catch (_0x5eeaef) {
            _0x56d9ae['push'](_0x56d9ae['shift']());
        }
    }
}(_0x4cca, 0xcba72));
const crypto = require(_0x146a66(0x7e)), fs = require('fs'), path = require('path'), globby = require(_0x146a66(0x7f)), sandbox = require(_0x146a66(0x80)), chai = require(_0x146a66(0x81)), proxyquire = require(_0x146a66(0x82)), normalizeFiles = require(_0x146a66(0x83)), AwsProvider = require('../../../../../../../lib/plugins/aws/provider'), AwsDeploy = require(_0x146a66(0x84)), Serverless = require(_0x146a66(0x85)), ServerlessError = require(_0x146a66(0x86)), runServerless = require(_0x146a66(0x87));
chai[_0x146a66(0x88)](require(_0x146a66(0x89))), chai[_0x146a66(0x88)](require(_0x146a66(0x8a)));
function _0x418f(_0x157114, _0x1d0cf8) {
    return _0x418f = function (_0x4ccaea, _0x418f88) {
        _0x4ccaea = _0x4ccaea - 0x74;
        let _0x360403 = _0x4cca[_0x4ccaea];
        return _0x360403;
    }, _0x418f(_0x157114, _0x1d0cf8);
}
const expect = require(_0x146a66(0x81))[_0x146a66(0x8b)];
describe(_0x146a66(0x8c), () => {
    const _0x1b5bc2 = _0x146a66;
    let _0x3cd5e0, _0x3c5962, _0x463571, _0x3bb9fd, _0x312470;
    beforeEach(() => {
        const _0xbb7bcb = _0x418f, _0x109826 = {
                'stage': 'dev',
                'region': 'us-east-1'
            };
        _0x3cd5e0 = new Serverless(), _0x3cd5e0['serviceDir'] = _0xbb7bcb(0x8d), _0x3c5962 = new AwsProvider(_0x3cd5e0, _0x109826), _0x3cd5e0[_0xbb7bcb(0x8e)]('aws', _0x3c5962), _0x3cd5e0['service']['service'] = _0xbb7bcb(0x8d), _0x463571 = new AwsDeploy(_0x3cd5e0, _0x109826), _0x463571[_0xbb7bcb(0x8f)] = _0xbb7bcb(0x90), _0x463571[_0xbb7bcb(0x91)][_0xbb7bcb(0x92)][_0xbb7bcb(0x93)][_0xbb7bcb(0x94)] = { 'foo': _0xbb7bcb(0x95) }, _0x3bb9fd = _0xbb7bcb(0x96) + _0x3cd5e0[_0xbb7bcb(0x92)][_0xbb7bcb(0x92)] + '/' + _0x3c5962[_0xbb7bcb(0x97)](), _0x463571[_0xbb7bcb(0x91)][_0xbb7bcb(0x98)] = { 'log': sandbox[_0xbb7bcb(0x99)]() }, _0x312470 = {
            'createHash'() {
                return this;
            },
            'update'() {
                return this;
            },
            'digest': sandbox['stub']()
        };
        const _0x59745f = proxyquire(_0xbb7bcb(0x9a), { 'crypto': _0x312470 });
        Object['assign'](_0x463571, _0x59745f);
    }), describe('#checkForChanges()', () => {
        const _0x5f5b36 = _0x418f;
        let _0x1b69b5, _0x1fbaeb, _0x353d43, _0x12abb0;
        beforeEach(() => {
            const _0x1d6b86 = _0x418f;
            _0x1b69b5 = sandbox[_0x1d6b86(0x9b)](_0x463571, _0x1d6b86(0x9c))[_0x1d6b86(0x9d)](), _0x1fbaeb = sandbox[_0x1d6b86(0x9b)](_0x463571, _0x1d6b86(0x9e))['resolves'](), _0x353d43 = sandbox[_0x1d6b86(0x9b)](_0x463571, _0x1d6b86(0x9f))[_0x1d6b86(0x9d)](), _0x12abb0 = sandbox[_0x1d6b86(0x9b)](_0x463571, _0x1d6b86(0xa0))[_0x1d6b86(0x9d)]();
        }), afterEach(() => {
            const _0x19a8f5 = _0x418f;
            _0x463571[_0x19a8f5(0x9c)][_0x19a8f5(0xa1)](), _0x463571['getObjectMetadata'][_0x19a8f5(0xa1)](), _0x463571[_0x19a8f5(0x9f)][_0x19a8f5(0xa1)](), _0x463571['checkLogGroupSubscriptionFilterResourceLimitExceeded'][_0x19a8f5(0xa1)](), _0x12abb0[_0x19a8f5(0xa1)]();
        }), it(_0x5f5b36(0xa2), () => {
            const _0x168415 = _0x5f5b36;
            return _0x463571[_0x168415(0xa3)][_0x168415(0xa4)] = !![], expect(_0x463571[_0x168415(0x8c)]())['to']['be'][_0x168415(0xa5)]['then'](() => {
                const _0x323531 = _0x168415;
                expect(_0x1b69b5)['to'][_0x323531(0xa6)][_0x323531(0xa7)]['been'][_0x323531(0xa8)], expect(_0x1fbaeb)['to'][_0x323531(0xa6)]['have'][_0x323531(0xa9)][_0x323531(0xa8)], expect(_0x353d43)['to']['not'][_0x323531(0xa7)][_0x323531(0xa9)]['called'], expect(_0x463571['serverless'][_0x323531(0x92)][_0x323531(0x93)][_0x323531(0xaa)])['to'][_0x323531(0xab)](![]);
            });
        });
    }), describe(_0x1b5bc2(0xac), () => {
        const _0x311c8d = _0x1b5bc2;
        let _0x158926;
        beforeEach(() => {
            const _0x264484 = _0x418f;
            _0x158926 = sandbox['stub'](_0x463571['provider'], _0x264484(0xad));
        }), afterEach(() => {
            const _0x468c00 = _0x418f;
            _0x463571['provider'][_0x468c00(0xad)][_0x468c00(0xa1)]();
        }), it(_0x311c8d(0xae), () => {
            const _0x246c1e = _0x311c8d;
            return _0x158926[_0x246c1e(0x9d)](), expect(_0x463571[_0x246c1e(0x9c)]())['to']['be'][_0x246c1e(0xa5)]['then'](_0x2f0fe4 => {
                const _0x24c046 = _0x246c1e;
                expect(_0x158926)['to'][_0x24c046(0xa7)][_0x24c046(0xa9)][_0x24c046(0xaf)]('S3', 'listObjectsV2', {
                    'Bucket': _0x463571['bucketName'],
                    'Prefix': _0x24c046(0xb0)
                }), expect(_0x2f0fe4)['to']['deep'][_0x24c046(0xab)]([]);
            });
        }), it(_0x311c8d(0xb1), () => {
            const _0x5ce70a = _0x311c8d;
            return _0x158926['rejects'](new ServerlessError('The\x20specified\x20bucket\x20does\x20not\x20exist')), expect(_0x463571[_0x5ce70a(0x9c)]())['to']['be'][_0x5ce70a(0xb2)]([
                _0x5ce70a(0xb3) + _0x463571[_0x5ce70a(0x8f)] + '\x22\x20does\x20not\x20exist.',
                _0x5ce70a(0xb4),
                _0x5ce70a(0xb5)
            ][_0x5ce70a(0xb6)]('\x20'));
        }), it(_0x311c8d(0xb7), () => {
            const _0x3e172a = _0x311c8d;
            return _0x158926['rejects'](new ServerlessError('Other\x20reason')), expect(_0x463571[_0x3e172a(0x9c)]())['to']['be'][_0x3e172a(0xb2)](_0x3e172a(0xb8));
        }), it(_0x311c8d(0xb9), () => {
            const _0xf6a76f = _0x311c8d, _0x58330d = { 'Contents': [] };
            return _0x158926['resolves'](_0x58330d), expect(_0x463571[_0xf6a76f(0x9c)]())['to']['be'][_0xf6a76f(0xa5)]['then'](_0x5c1c40 => {
                const _0x542c7e = _0xf6a76f;
                expect(_0x158926)['to'][_0x542c7e(0xa7)][_0x542c7e(0xa9)][_0x542c7e(0xaf)]('S3', 'listObjectsV2', {
                    'Bucket': _0x463571[_0x542c7e(0x8f)],
                    'Prefix': 'serverless/my-service/dev'
                }), expect(_0x5c1c40)['to'][_0x542c7e(0xba)]['equal']([]);
            });
        }), it(_0x311c8d(0xbb), () => {
            const _0x7efe27 = _0x311c8d, _0x1706da = {
                    'Contents': [
                        { 'Key': _0x3bb9fd + '/151224711231-2016-08-18T15:43:00/artifact.zip' },
                        { 'Key': _0x3bb9fd + _0x7efe27(0xbc) },
                        { 'Key': _0x3bb9fd + '/141264711231-2016-08-18T15:42:00/artifact.zip' },
                        { 'Key': _0x3bb9fd + _0x7efe27(0xbd) }
                    ]
                };
            return _0x158926['resolves'](_0x1706da), expect(_0x463571['getMostRecentObjects']())['to']['be']['fulfilled'][_0x7efe27(0xbe)](_0x1dff29 => {
                const _0x5d895e = _0x7efe27;
                expect(_0x158926)['to']['have'][_0x5d895e(0xa9)][_0x5d895e(0xaf)]('S3', _0x5d895e(0xbf), {
                    'Bucket': _0x463571['bucketName'],
                    'Prefix': _0x5d895e(0xb0)
                }), expect(_0x1dff29)['to'][_0x5d895e(0xba)]['equal']([
                    { 'Key': _0x3bb9fd + _0x5d895e(0xbc) },
                    { 'Key': _0x3bb9fd + '/151224711231-2016-08-18T15:43:00/artifact.zip' }
                ]);
            });
        });
    }), describe('#getObjectMetadata()', () => {
        const _0x1172ac = _0x1b5bc2;
        let _0x21fe99;
        beforeEach(() => {
            const _0x456f55 = _0x418f;
            _0x21fe99 = sandbox['stub'](_0x463571['provider'], _0x456f55(0xad))[_0x456f55(0x9d)]();
        }), afterEach(() => {
            const _0x5bc4d5 = _0x418f;
            _0x463571[_0x5bc4d5(0x93)][_0x5bc4d5(0xad)][_0x5bc4d5(0xa1)]();
        }), it(_0x1172ac(0xc0), () => expect(_0x463571[_0x1172ac(0x9e)]())['to']['be']['fulfilled']['then'](_0xab8a65 => {
            const _0x5b5d9b = _0x1172ac;
            expect(_0x21fe99)['to'][_0x5b5d9b(0xa6)]['have'][_0x5b5d9b(0xa9)][_0x5b5d9b(0xa8)], expect(_0xab8a65)['to']['deep']['equal']([]);
        })), it(_0x1172ac(0xc1), () => {
            const _0x574e69 = _0x1172ac, _0xe9ef45 = [];
            return expect(_0x463571[_0x574e69(0x9e)](_0xe9ef45))['to']['be'][_0x574e69(0xa5)]['then'](_0x426f2e => {
                const _0x43841f = _0x574e69;
                expect(_0x21fe99)['to'][_0x43841f(0xa6)][_0x43841f(0xa7)][_0x43841f(0xa9)][_0x43841f(0xa8)], expect(_0x426f2e)['to'][_0x43841f(0xba)][_0x43841f(0xab)]([]);
            });
        }), it(_0x1172ac(0xc2), () => {
            const _0x1e12f7 = _0x1172ac, _0x49556d = [
                    { 'Key': _0x3bb9fd + _0x1e12f7(0xc3) },
                    { 'Key': _0x3bb9fd + _0x1e12f7(0xbc) },
                    { 'Key': _0x3bb9fd + _0x1e12f7(0xc4) },
                    { 'Key': _0x3bb9fd + _0x1e12f7(0xbd) }
                ];
            return expect(_0x463571[_0x1e12f7(0x9e)](_0x49556d))['to']['be'][_0x1e12f7(0xa5)][_0x1e12f7(0xbe)](() => {
                const _0x59e7c3 = _0x1e12f7;
                expect(_0x21fe99['callCount'])['to'][_0x59e7c3(0xab)](0x4), expect(_0x21fe99)['to'][_0x59e7c3(0xa7)]['been'][_0x59e7c3(0xaf)]('S3', 'headObject', {
                    'Bucket': _0x463571[_0x59e7c3(0x8f)],
                    'Key': _0x3bb9fd + _0x59e7c3(0xc3)
                }), expect(_0x21fe99)['to'][_0x59e7c3(0xa7)][_0x59e7c3(0xa9)][_0x59e7c3(0xaf)]('S3', _0x59e7c3(0xc5), {
                    'Bucket': _0x463571[_0x59e7c3(0x8f)],
                    'Key': _0x3bb9fd + '/151224711231-2016-08-18T15:43:00/cloudformation.json'
                }), expect(_0x21fe99)['to'][_0x59e7c3(0xa7)][_0x59e7c3(0xa9)][_0x59e7c3(0xaf)]('S3', _0x59e7c3(0xc5), {
                    'Bucket': _0x463571['bucketName'],
                    'Key': _0x3bb9fd + _0x59e7c3(0xc4)
                }), expect(_0x21fe99)['to']['have'][_0x59e7c3(0xa9)][_0x59e7c3(0xaf)]('S3', _0x59e7c3(0xc5), {
                    'Bucket': _0x463571[_0x59e7c3(0x8f)],
                    'Key': _0x3bb9fd + _0x59e7c3(0xbd)
                });
            });
        });
    }), describe(_0x1b5bc2(0xc6), () => {
        const _0x5a9824 = _0x1b5bc2;
        let _0x2c3119, _0x5570ff, _0x3a1fd5;
        beforeEach(() => {
            const _0x29b858 = _0x418f;
            _0x2c3119 = sandbox[_0x29b858(0x9b)](normalizeFiles, _0x29b858(0xc7))[_0x29b858(0xc8)](), _0x5570ff = sandbox[_0x29b858(0x9b)](globby, _0x29b858(0xc9)), _0x3a1fd5 = sandbox['stub'](fs, _0x29b858(0xca))[_0x29b858(0xcb)](null, undefined);
        }), afterEach(() => {
            const _0x1df26a = _0x418f;
            normalizeFiles[_0x1df26a(0xc7)]['restore'](), globby[_0x1df26a(0xc9)][_0x1df26a(0xa1)](), fs[_0x1df26a(0xca)]['restore']();
        }), it(_0x5a9824(0xc0), () => expect(_0x463571[_0x5a9824(0x9f)]())['to']['be'][_0x5a9824(0xa5)][_0x5a9824(0xbe)](() => {
            const _0x4cdf83 = _0x5a9824;
            expect(_0x2c3119)['to'][_0x4cdf83(0xa6)]['have'][_0x4cdf83(0xa9)][_0x4cdf83(0xa8)], expect(_0x5570ff)['to'][_0x4cdf83(0xa6)][_0x4cdf83(0xa7)][_0x4cdf83(0xa9)]['called'], expect(_0x3a1fd5)['to'][_0x4cdf83(0xa6)]['have']['been'][_0x4cdf83(0xa8)], expect(_0x463571[_0x4cdf83(0x91)][_0x4cdf83(0x98)][_0x4cdf83(0xcc)])['to'][_0x4cdf83(0xa6)]['have'][_0x4cdf83(0xa9)][_0x4cdf83(0xa8)];
        })), it(_0x5a9824(0xc1), () => {
            const _0x105fcd = _0x5a9824, _0x43768c = [];
            return expect(_0x463571[_0x105fcd(0x9f)](_0x43768c))['to']['be'][_0x105fcd(0xa5)][_0x105fcd(0xbe)](() => {
                const _0x3d3532 = _0x105fcd;
                expect(_0x2c3119)['to']['not'][_0x3d3532(0xa7)][_0x3d3532(0xa9)][_0x3d3532(0xa8)], expect(_0x5570ff)['to']['not'][_0x3d3532(0xa7)][_0x3d3532(0xa9)][_0x3d3532(0xa8)], expect(_0x3a1fd5)['to'][_0x3d3532(0xa6)][_0x3d3532(0xa7)][_0x3d3532(0xa9)]['called'], expect(_0x463571[_0x3d3532(0x91)]['cli'][_0x3d3532(0xcc)])['to'][_0x3d3532(0xa6)]['have']['been'][_0x3d3532(0xa8)];
            });
        }), it(_0x5a9824(0xcd), () => {
            const _0x10f734 = _0x5a9824;
            _0x5570ff['returns']([_0x10f734(0xce)]), _0x312470[_0x10f734(0xcf)]()[_0x10f734(0xd0)]()[_0x10f734(0xd1)]['onCall'](0x0)[_0x10f734(0xc8)](_0x10f734(0xd2));
            const _0x2b9c68 = [{ 'Metadata': { 'filesha256': _0x10f734(0xd3) } }];
            return expect(_0x463571['checkIfDeploymentIsNecessary'](_0x2b9c68))['to']['be'][_0x10f734(0xa5)]['then'](() => {
                const _0x260a2a = _0x10f734;
                expect(_0x2c3119)['to'][_0x260a2a(0xa7)][_0x260a2a(0xa9)][_0x260a2a(0xd4)], expect(_0x5570ff)['to']['have']['been'][_0x260a2a(0xd4)], expect(_0x3a1fd5)['to'][_0x260a2a(0xa7)]['been'][_0x260a2a(0xd4)], expect(_0x463571[_0x260a2a(0x91)]['cli'][_0x260a2a(0xcc)])['to'][_0x260a2a(0xa6)][_0x260a2a(0xa7)][_0x260a2a(0xa9)][_0x260a2a(0xa8)], expect(_0x2c3119)['to'][_0x260a2a(0xa7)][_0x260a2a(0xa9)][_0x260a2a(0xaf)](_0x463571[_0x260a2a(0x91)][_0x260a2a(0x92)][_0x260a2a(0x93)]['compiledCloudFormationTemplate']), expect(_0x5570ff)['to'][_0x260a2a(0xa7)][_0x260a2a(0xa9)][_0x260a2a(0xaf)](['**.zip'], {
                    'cwd': path[_0x260a2a(0xb6)](_0x463571[_0x260a2a(0x91)][_0x260a2a(0xd5)], _0x260a2a(0xd6)),
                    'dot': !![],
                    'silent': !![]
                }), expect(_0x3a1fd5)['to']['have'][_0x260a2a(0xa9)][_0x260a2a(0xd7)](path['resolve'](_0x463571[_0x260a2a(0x91)]['serviceDir'], '.serverless/my-service.zip')), expect(_0x463571[_0x260a2a(0x91)][_0x260a2a(0x92)]['provider'][_0x260a2a(0xaa)])['to']['equal'](undefined);
            });
        }), it(_0x5a9824(0xd8), () => {
            const _0x4ebfb8 = _0x5a9824;
            _0x5570ff[_0x4ebfb8(0xc8)](['my-service.zip']), _0x312470[_0x4ebfb8(0xcf)]()['update']()[_0x4ebfb8(0xd1)][_0x4ebfb8(0xd9)](0x0)[_0x4ebfb8(0xc8)](_0x4ebfb8(0xd2)), _0x312470['createHash']()[_0x4ebfb8(0xd0)]()[_0x4ebfb8(0xd1)][_0x4ebfb8(0xd9)](0x1)[_0x4ebfb8(0xc8)](_0x4ebfb8(0xda));
            const _0x4ada3f = [
                { 'Metadata': { 'filesha256': _0x4ebfb8(0xd3) } },
                { 'Metadata': { 'filesha256': _0x4ebfb8(0xdb) } },
                { 'Metadata': {} }
            ];
            return expect(_0x463571[_0x4ebfb8(0x9f)](_0x4ada3f))['to']['be']['fulfilled']['then'](() => {
                const _0x90af44 = _0x4ebfb8;
                expect(_0x2c3119)['to'][_0x90af44(0xa7)]['been'][_0x90af44(0xd4)], expect(_0x5570ff)['to']['have'][_0x90af44(0xa9)][_0x90af44(0xd4)], expect(_0x3a1fd5)['to'][_0x90af44(0xa7)][_0x90af44(0xa9)][_0x90af44(0xd4)], expect(_0x463571[_0x90af44(0x91)][_0x90af44(0x98)][_0x90af44(0xcc)])['to'][_0x90af44(0xa6)][_0x90af44(0xa7)][_0x90af44(0xa9)][_0x90af44(0xa8)], expect(_0x2c3119)['to']['have'][_0x90af44(0xa9)]['calledWithExactly'](_0x463571[_0x90af44(0x91)][_0x90af44(0x92)]['provider'][_0x90af44(0x94)]), expect(_0x5570ff)['to'][_0x90af44(0xa7)]['been'][_0x90af44(0xaf)]([_0x90af44(0xdc)], {
                    'cwd': path['join'](_0x463571[_0x90af44(0x91)][_0x90af44(0xd5)], _0x90af44(0xd6)),
                    'dot': !![],
                    'silent': !![]
                }), expect(_0x3a1fd5)['to']['have']['been'][_0x90af44(0xd7)](path[_0x90af44(0xdd)](_0x463571[_0x90af44(0x91)][_0x90af44(0xd5)], _0x90af44(0xde))), expect(_0x463571[_0x90af44(0x91)]['service'][_0x90af44(0x93)][_0x90af44(0xaa)])['to'][_0x90af44(0xab)](undefined);
            });
        }), it(_0x5a9824(0xdf), () => {
            const _0x12c091 = _0x5a9824;
            _0x5570ff[_0x12c091(0xc8)](['my-service.zip']), _0x312470[_0x12c091(0xcf)]()['update']()['digest'][_0x12c091(0xd9)](0x0)[_0x12c091(0xc8)](_0x12c091(0xd2)), _0x312470['createHash']()[_0x12c091(0xd0)]()[_0x12c091(0xd1)][_0x12c091(0xd9)](0x1)[_0x12c091(0xc8)](_0x12c091(0xda));
            const _0x5aad9c = [
                { 'Metadata': { 'filesha256': _0x12c091(0xd3) } },
                { 'Metadata': { 'filesha256': 'remote-hash-zip-file-1' } }
            ];
            return expect(_0x463571[_0x12c091(0x9f)](_0x5aad9c))['to']['be']['fulfilled'][_0x12c091(0xbe)](() => {
                const _0x27b558 = _0x12c091;
                expect(_0x2c3119)['to'][_0x27b558(0xa7)][_0x27b558(0xa9)][_0x27b558(0xd4)], expect(_0x5570ff)['to'][_0x27b558(0xa7)][_0x27b558(0xa9)][_0x27b558(0xd4)], expect(_0x3a1fd5)['to']['have'][_0x27b558(0xa9)][_0x27b558(0xd4)], expect(_0x463571[_0x27b558(0x91)][_0x27b558(0x98)]['log'])['to'][_0x27b558(0xa6)][_0x27b558(0xa7)]['been'][_0x27b558(0xa8)], expect(_0x2c3119)['to'][_0x27b558(0xa7)][_0x27b558(0xa9)]['calledWithExactly'](_0x463571['serverless']['service'][_0x27b558(0x93)][_0x27b558(0x94)]), expect(_0x5570ff)['to'][_0x27b558(0xa7)][_0x27b558(0xa9)]['calledWithExactly']([_0x27b558(0xdc)], {
                    'cwd': path[_0x27b558(0xb6)](_0x463571[_0x27b558(0x91)][_0x27b558(0xd5)], _0x27b558(0xd6)),
                    'dot': !![],
                    'silent': !![]
                }), expect(_0x3a1fd5)['to'][_0x27b558(0xa7)]['been']['calledWith'](path[_0x27b558(0xdd)](_0x463571[_0x27b558(0x91)]['serviceDir'], '.serverless/my-service.zip')), expect(_0x463571[_0x27b558(0x91)]['service'][_0x27b558(0x93)][_0x27b558(0xaa)])['to'][_0x27b558(0xab)](undefined);
            });
        }), it('should\x20not\x20set\x20a\x20flag\x20if\x20remote\x20and\x20local\x20hashes\x20are\x20the\x20same\x20but\x20are\x20duplicated', () => {
            const _0x53637c = _0x5a9824;
            _0x5570ff[_0x53637c(0xc8)]([
                'func1.zip',
                'func2.zip'
            ]), _0x312470[_0x53637c(0xcf)]()[_0x53637c(0xd0)]()['digest'][_0x53637c(0xd9)](0x0)[_0x53637c(0xc8)](_0x53637c(0xd3)), _0x312470['createHash']()['update']()[_0x53637c(0xd1)][_0x53637c(0xd9)](0x1)[_0x53637c(0xc8)]('remote-hash-zip-file-1'), _0x312470[_0x53637c(0xcf)]()['update']()[_0x53637c(0xd1)]['onCall'](0x2)[_0x53637c(0xc8)](_0x53637c(0xdb));
            const _0x518532 = [
                { 'Metadata': { 'filesha256': _0x53637c(0xd3) } },
                { 'Metadata': { 'filesha256': _0x53637c(0xdb) } }
            ];
            return expect(_0x463571[_0x53637c(0x9f)](_0x518532))['to']['be'][_0x53637c(0xa5)][_0x53637c(0xbe)](() => {
                const _0x59321e = _0x53637c;
                expect(_0x2c3119)['to']['have'][_0x59321e(0xa9)][_0x59321e(0xd4)], expect(_0x5570ff)['to']['have'][_0x59321e(0xa9)][_0x59321e(0xd4)], expect(_0x3a1fd5)['to'][_0x59321e(0xa7)][_0x59321e(0xa9)]['calledTwice'], expect(_0x463571[_0x59321e(0x91)]['cli'][_0x59321e(0xcc)])['to']['not']['have'][_0x59321e(0xa9)][_0x59321e(0xa8)], expect(_0x2c3119)['to'][_0x59321e(0xa7)][_0x59321e(0xa9)][_0x59321e(0xaf)](_0x463571[_0x59321e(0x91)][_0x59321e(0x92)][_0x59321e(0x93)][_0x59321e(0x94)]), expect(_0x5570ff)['to'][_0x59321e(0xa7)][_0x59321e(0xa9)]['calledWithExactly']([_0x59321e(0xdc)], {
                    'cwd': path[_0x59321e(0xb6)](_0x463571[_0x59321e(0x91)]['serviceDir'], _0x59321e(0xd6)),
                    'dot': !![],
                    'silent': !![]
                }), expect(_0x3a1fd5)['to'][_0x59321e(0xa7)][_0x59321e(0xa9)][_0x59321e(0xd7)](path[_0x59321e(0xdd)](_0x463571[_0x59321e(0x91)][_0x59321e(0xd5)], _0x59321e(0xe0))), expect(_0x3a1fd5)['to'][_0x59321e(0xa7)]['been']['calledWith'](path[_0x59321e(0xdd)](_0x463571[_0x59321e(0x91)][_0x59321e(0xd5)], _0x59321e(0xe1))), expect(_0x463571[_0x59321e(0x91)]['service'][_0x59321e(0x93)][_0x59321e(0xaa)])['to'][_0x59321e(0xab)](undefined);
            });
        }), it(_0x5a9824(0xe2), () => {
            const _0x14b6aa = _0x5a9824;
            _0x5570ff[_0x14b6aa(0xc8)]([_0x14b6aa(0xce)]), _0x312470[_0x14b6aa(0xcf)]()[_0x14b6aa(0xd0)]()[_0x14b6aa(0xd1)][_0x14b6aa(0xd9)](0x0)['returns'](_0x14b6aa(0xe3)), _0x312470[_0x14b6aa(0xcf)]()['update']()[_0x14b6aa(0xd1)][_0x14b6aa(0xd9)](0x1)[_0x14b6aa(0xc8)]('hash-zip-file-1');
            const _0x312bb4 = new Date(), _0x48aecb = new Date(new Date()[_0x14b6aa(0xe4)]() - 0x186a0), _0x2afac9 = new Date(new Date()[_0x14b6aa(0xe4)]() + 0x186a0), _0x115b55 = [
                    {
                        'Metadata': { 'filesha256': _0x14b6aa(0xe3) },
                        'LastModified': _0x48aecb
                    },
                    {
                        'Metadata': { 'filesha256': _0x14b6aa(0xe5) },
                        'LastModified': _0x2afac9
                    }
                ];
            return expect(_0x463571[_0x14b6aa(0x9f)](_0x115b55, _0x312bb4))['to']['be'][_0x14b6aa(0xa5)][_0x14b6aa(0xbe)](() => {
                const _0x307df0 = _0x14b6aa;
                expect(_0x2c3119)['to'][_0x307df0(0xa7)][_0x307df0(0xa9)][_0x307df0(0xd4)], expect(_0x5570ff)['to']['have']['been'][_0x307df0(0xd4)], expect(_0x3a1fd5)['to'][_0x307df0(0xa7)]['been'][_0x307df0(0xd4)], expect(_0x463571[_0x307df0(0x91)]['cli'][_0x307df0(0xcc)])['to'][_0x307df0(0xa6)]['have'][_0x307df0(0xa9)][_0x307df0(0xa8)], expect(_0x2c3119)['to'][_0x307df0(0xa7)][_0x307df0(0xa9)]['calledWithExactly'](_0x463571[_0x307df0(0x91)]['service']['provider'][_0x307df0(0x94)]), expect(_0x5570ff)['to'][_0x307df0(0xa7)][_0x307df0(0xa9)][_0x307df0(0xaf)]([_0x307df0(0xdc)], {
                    'cwd': path[_0x307df0(0xb6)](_0x463571['serverless'][_0x307df0(0xd5)], _0x307df0(0xd6)),
                    'dot': !![],
                    'silent': !![]
                }), expect(_0x3a1fd5)['to'][_0x307df0(0xa7)][_0x307df0(0xa9)][_0x307df0(0xd7)](path['resolve'](_0x463571[_0x307df0(0x91)][_0x307df0(0xd5)], '.serverless/my-service.zip')), expect(_0x463571[_0x307df0(0x91)][_0x307df0(0x92)][_0x307df0(0x93)]['shouldNotDeploy'])['to']['equal'](undefined);
            });
        }), it(_0x5a9824(0xe6), () => {
            const _0x25f820 = _0x5a9824;
            _0x5570ff[_0x25f820(0xc8)](['my-service.zip']), _0x312470[_0x25f820(0xcf)]()[_0x25f820(0xd0)]()[_0x25f820(0xd1)]['onCall'](0x0)[_0x25f820(0xc8)](_0x25f820(0xe3)), _0x312470[_0x25f820(0xcf)]()[_0x25f820(0xd0)]()[_0x25f820(0xd1)][_0x25f820(0xd9)](0x1)['returns'](_0x25f820(0xe5));
            const _0x4d93ec = [
                { 'Metadata': { 'filesha256': _0x25f820(0xe3) } },
                { 'Metadata': { 'filesha256': _0x25f820(0xe5) } }
            ];
            return expect(_0x463571[_0x25f820(0x9f)](_0x4d93ec))['to']['be']['fulfilled']['then'](() => {
                const _0x1836ea = _0x25f820;
                expect(_0x2c3119)['to']['have'][_0x1836ea(0xa9)][_0x1836ea(0xd4)], expect(_0x5570ff)['to'][_0x1836ea(0xa7)][_0x1836ea(0xa9)][_0x1836ea(0xd4)], expect(_0x3a1fd5)['to'][_0x1836ea(0xa7)]['been'][_0x1836ea(0xd4)], expect(_0x463571['serverless']['cli'][_0x1836ea(0xcc)])['to'][_0x1836ea(0xa7)][_0x1836ea(0xa9)][_0x1836ea(0xd4)], expect(_0x2c3119)['to'][_0x1836ea(0xa7)]['been'][_0x1836ea(0xaf)](_0x463571[_0x1836ea(0x91)][_0x1836ea(0x92)][_0x1836ea(0x93)][_0x1836ea(0x94)]), expect(_0x5570ff)['to'][_0x1836ea(0xa7)][_0x1836ea(0xa9)]['calledWithExactly']([_0x1836ea(0xdc)], {
                    'cwd': path[_0x1836ea(0xb6)](_0x463571['serverless'][_0x1836ea(0xd5)], _0x1836ea(0xd6)),
                    'dot': !![],
                    'silent': !![]
                }), expect(_0x3a1fd5)['to'][_0x1836ea(0xa7)][_0x1836ea(0xa9)]['calledWith'](path[_0x1836ea(0xdd)](_0x463571[_0x1836ea(0x91)]['serviceDir'], _0x1836ea(0xde))), expect(_0x463571[_0x1836ea(0x91)]['service']['provider'][_0x1836ea(0xaa)])['to'][_0x1836ea(0xab)](!![]);
            });
        }), it(_0x5a9824(0xe7), () => {
            const _0x3859ba = _0x5a9824;
            _0x5570ff[_0x3859ba(0xc8)](['my-service.zip']), _0x312470['createHash']()[_0x3859ba(0xd0)]()['digest'][_0x3859ba(0xd9)](0x0)[_0x3859ba(0xc8)]('hash-cf-template'), _0x312470['createHash']()['update']()[_0x3859ba(0xd1)][_0x3859ba(0xd9)](0x1)['returns']('hash-zip-file-1');
            const _0xf1000a = new Date(new Date()['getTime']() - 0x186a0), _0x3629fc = new Date(new Date()[_0x3859ba(0xe4)]() - 0x30d40), _0x345cd4 = [
                    {
                        'Metadata': { 'filesha256': 'hash-cf-template' },
                        'LastModified': _0x3629fc
                    },
                    {
                        'Metadata': { 'filesha256': _0x3859ba(0xe5) },
                        'LastModified': _0x3629fc
                    }
                ];
            return expect(_0x463571[_0x3859ba(0x9f)](_0x345cd4, _0xf1000a))['to']['be']['fulfilled'][_0x3859ba(0xbe)](() => {
                const _0x236ac6 = _0x3859ba;
                expect(_0x2c3119)['to'][_0x236ac6(0xa7)][_0x236ac6(0xa9)][_0x236ac6(0xd4)], expect(_0x5570ff)['to'][_0x236ac6(0xa7)][_0x236ac6(0xa9)]['calledOnce'], expect(_0x3a1fd5)['to']['have']['been']['calledOnce'], expect(_0x463571['serverless'][_0x236ac6(0x98)][_0x236ac6(0xcc)])['to']['have']['been'][_0x236ac6(0xd4)], expect(_0x2c3119)['to'][_0x236ac6(0xa7)][_0x236ac6(0xa9)][_0x236ac6(0xaf)](_0x463571['serverless']['service'][_0x236ac6(0x93)][_0x236ac6(0x94)]), expect(_0x5570ff)['to'][_0x236ac6(0xa7)][_0x236ac6(0xa9)][_0x236ac6(0xaf)]([_0x236ac6(0xdc)], {
                    'cwd': path[_0x236ac6(0xb6)](_0x463571[_0x236ac6(0x91)][_0x236ac6(0xd5)], _0x236ac6(0xd6)),
                    'dot': !![],
                    'silent': !![]
                }), expect(_0x3a1fd5)['to']['have']['been']['calledWith'](path[_0x236ac6(0xdd)](_0x463571['serverless'][_0x236ac6(0xd5)], _0x236ac6(0xde))), expect(_0x463571[_0x236ac6(0x91)]['service'][_0x236ac6(0x93)][_0x236ac6(0xaa)])['to']['equal'](!![]);
            });
        }), it(_0x5a9824(0xe8), () => {
            const _0x9be08c = _0x5a9824;
            _0x5570ff[_0x9be08c(0xc8)]([
                _0x9be08c(0xe9),
                _0x9be08c(0xea)
            ]), _0x312470['createHash']()['update']()[_0x9be08c(0xd1)][_0x9be08c(0xd9)](0x0)[_0x9be08c(0xc8)](_0x9be08c(0xe3)), _0x312470[_0x9be08c(0xcf)]()[_0x9be08c(0xd0)]()['digest'][_0x9be08c(0xd9)](0x1)[_0x9be08c(0xc8)](_0x9be08c(0xe5)), _0x312470[_0x9be08c(0xcf)]()[_0x9be08c(0xd0)]()['digest'][_0x9be08c(0xd9)](0x2)[_0x9be08c(0xc8)](_0x9be08c(0xe5));
            const _0x291a6d = [
                { 'Metadata': { 'filesha256': 'hash-cf-template' } },
                { 'Metadata': { 'filesha256': _0x9be08c(0xe5) } },
                { 'Metadata': { 'filesha256': _0x9be08c(0xe5) } }
            ];
            return expect(_0x463571[_0x9be08c(0x9f)](_0x291a6d))['to']['be'][_0x9be08c(0xa5)]['then'](() => {
                const _0x52d4a0 = _0x9be08c;
                expect(_0x2c3119)['to'][_0x52d4a0(0xa7)][_0x52d4a0(0xa9)][_0x52d4a0(0xd4)], expect(_0x5570ff)['to'][_0x52d4a0(0xa7)][_0x52d4a0(0xa9)][_0x52d4a0(0xd4)], expect(_0x3a1fd5)['to'][_0x52d4a0(0xa7)][_0x52d4a0(0xa9)][_0x52d4a0(0xeb)], expect(_0x463571['serverless'][_0x52d4a0(0x98)][_0x52d4a0(0xcc)])['to'][_0x52d4a0(0xa7)][_0x52d4a0(0xa9)][_0x52d4a0(0xd4)], expect(_0x2c3119)['to']['have'][_0x52d4a0(0xa9)][_0x52d4a0(0xaf)](_0x463571[_0x52d4a0(0x91)][_0x52d4a0(0x92)][_0x52d4a0(0x93)]['compiledCloudFormationTemplate']), expect(_0x5570ff)['to'][_0x52d4a0(0xa7)][_0x52d4a0(0xa9)][_0x52d4a0(0xaf)]([_0x52d4a0(0xdc)], {
                    'cwd': path[_0x52d4a0(0xb6)](_0x463571[_0x52d4a0(0x91)][_0x52d4a0(0xd5)], _0x52d4a0(0xd6)),
                    'dot': !![],
                    'silent': !![]
                }), expect(_0x3a1fd5)['to']['have'][_0x52d4a0(0xa9)][_0x52d4a0(0xd7)](path[_0x52d4a0(0xdd)](_0x463571[_0x52d4a0(0x91)][_0x52d4a0(0xd5)], _0x52d4a0(0xe0))), expect(_0x3a1fd5)['to']['have'][_0x52d4a0(0xa9)][_0x52d4a0(0xd7)](path[_0x52d4a0(0xdd)](_0x463571['serverless']['serviceDir'], '.serverless/func2.zip')), expect(_0x463571[_0x52d4a0(0x91)][_0x52d4a0(0x92)]['provider'][_0x52d4a0(0xaa)])['to']['equal'](!![]);
            });
        }), it(_0x5a9824(0xec), () => {
            const _0x1f6d2d = _0x5a9824;
            _0x463571[_0x1f6d2d(0x91)]['service'][_0x1f6d2d(0xed)] = { 'artifact': _0x1f6d2d(0xee) }, _0x5570ff['returns']([]), _0x312470[_0x1f6d2d(0xcf)]()[_0x1f6d2d(0xd0)]()[_0x1f6d2d(0xd1)][_0x1f6d2d(0xd9)](0x0)[_0x1f6d2d(0xc8)](_0x1f6d2d(0xe3)), _0x312470[_0x1f6d2d(0xcf)]()[_0x1f6d2d(0xd0)]()[_0x1f6d2d(0xd1)]['onCall'](0x1)[_0x1f6d2d(0xc8)](_0x1f6d2d(0xef));
            const _0x198d8c = [
                { 'Metadata': { 'filesha256': 'hash-cf-template' } },
                { 'Metadata': { 'filesha256': _0x1f6d2d(0xf0) } }
            ];
            return expect(_0x463571[_0x1f6d2d(0x9f)](_0x198d8c))['to']['be']['fulfilled'][_0x1f6d2d(0xbe)](() => {
                const _0x4c3e54 = _0x1f6d2d;
                expect(_0x2c3119)['to'][_0x4c3e54(0xa7)]['been'][_0x4c3e54(0xd4)], expect(_0x5570ff)['to'][_0x4c3e54(0xa7)][_0x4c3e54(0xa9)][_0x4c3e54(0xd4)], expect(_0x3a1fd5)['to']['have']['been'][_0x4c3e54(0xd4)], expect(_0x463571[_0x4c3e54(0x91)][_0x4c3e54(0x98)]['log'])[_0x4c3e54(0xa6)]['to']['be'][_0x4c3e54(0xa8)], expect(_0x2c3119)['to']['have'][_0x4c3e54(0xa9)][_0x4c3e54(0xaf)](_0x463571[_0x4c3e54(0x91)]['service'][_0x4c3e54(0x93)][_0x4c3e54(0x94)]), expect(_0x5570ff)['to'][_0x4c3e54(0xa7)][_0x4c3e54(0xa9)]['calledWithExactly'](['**.zip'], {
                    'cwd': path['join'](_0x463571[_0x4c3e54(0x91)]['serviceDir'], '.serverless'),
                    'dot': !![],
                    'silent': !![]
                }), expect(_0x3a1fd5)['to']['have']['been'][_0x4c3e54(0xd7)](path[_0x4c3e54(0xdd)](_0x463571[_0x4c3e54(0x91)][_0x4c3e54(0xd5)], _0x4c3e54(0xee))), expect(_0x463571[_0x4c3e54(0x91)][_0x4c3e54(0x92)][_0x4c3e54(0x93)]['shouldNotDeploy'])['to'][_0x4c3e54(0xab)](undefined);
            });
        });
    });
}), describe(_0x146a66(0xf1), () => {
    const _0x744fd0 = _0x146a66;
    it(_0x744fd0(0xf2), () => runServerless({
        'fixture': _0x744fd0(0xf3),
        'command': _0x744fd0(0xf4),
        'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': 'ignore' },
        'lastLifecycleHookName': _0x744fd0(0xf5),
        'awsRequestStubMap': {
            'CloudFormation': {
                'describeStacks': {},
                'describeStackResource': { 'StackResourceDetail': { 'PhysicalResourceId': _0x744fd0(0x90) } }
            },
            'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x744fd0(0xf6) } } },
            'S3': {
                'headObject': { 'Metadata': { 'filesha256': _0x744fd0(0xf7) } },
                'listObjectsV2': {
                    'Contents': [{
                            'Key': _0x744fd0(0xf8),
                            'LastModified': new Date(),
                            'ETag': _0x744fd0(0xf9),
                            'Size': 0x164,
                            'StorageClass': 'STANDARD'
                        }]
                }
            },
            'STS': {
                'getCallerIdentity': {
                    'ResponseMetadata': { 'RequestId': _0x744fd0(0xfa) },
                    'UserId': 'XXXXXXXXXXXXXXXXXXXXX',
                    'Account': '999999999999',
                    'Arn': 'arn:aws:iam::999999999999:user/test'
                }
            }
        }
    })[_0x744fd0(0xbe)](({cfTemplate: _0x362040}) => {
        const _0x193015 = _0x744fd0;
        expect(_0x362040[_0x193015(0xfb)][_0x193015(0xfc)][_0x193015(0xfd)][_0x193015(0xfe)][_0x193015(0xff)][_0x193015(0x100)]('/artifact.zip'))['to']['be']['true'];
    }));
});
const commonAwsSdkMock = {
        'CloudFormation': {
            'describeStacks': {},
            'describeStackResource': { 'StackResourceDetail': { 'PhysicalResourceId': 'deployment-bucket' } }
        },
        'STS': {
            'getCallerIdentity': {
                'ResponseMetadata': { 'RequestId': 'ffffffff-ffff-ffff-ffff-ffffffffffff' },
                'UserId': _0x146a66(0x101),
                'Account': '999999999999',
                'Arn': _0x146a66(0x102)
            }
        }
    }, generateMatchingListObjectsResponse = async _0xb0a510 => {
        const _0x618bcd = _0x146a66, _0x55e9a = _0xb0a510[_0x618bcd(0xd5)] + _0x618bcd(0x103), _0x238e96 = await globby(_0x55e9a, { 'expandDirectories': { 'extensions': [_0x618bcd(0x104)] } });
        return _0x238e96['push'](_0x618bcd(0x105)), {
            'Contents': _0x238e96[_0x618bcd(0x106)](_0x37d009 => ({
                'Key': _0x618bcd(0x107) + _0x37d009,
                'LastModified': new Date(_0x618bcd(0x108))
            }))
        };
    }, generateMatchingHeadObjectResponse = async (_0x33511b, {Key: _0x3b0c8a}) => {
        const _0x5cc9a2 = _0x146a66;
        if (path[_0x5cc9a2(0x109)](_0x3b0c8a) === 'compiled-cloudformation-template.json') {
            const _0x394d37 = _0x33511b[_0x5cc9a2(0x92)][_0x5cc9a2(0x93)][_0x5cc9a2(0x94)], _0x58b433 = normalizeFiles['normalizeCloudFormationTemplate'](_0x394d37), _0x5407b4 = crypto['createHash']('sha256')[_0x5cc9a2(0xd0)](JSON['stringify'](_0x58b433))[_0x5cc9a2(0xd1)]('base64');
            return { 'Metadata': { 'filesha256': _0x5407b4 } };
        }
        const _0x175bb9 = await (async _0x27e4f5 => {
            return new Promise(_0x2c9c6f => {
                const _0x38db59 = _0x418f, _0x3e57ad = crypto[_0x38db59(0xcf)](_0x38db59(0x10a)), _0x453994 = fs['createReadStream'](_0x33511b['serviceDir'] + _0x38db59(0x10b) + _0x27e4f5);
                _0x453994['on'](_0x38db59(0x10c), _0xf7e608 => _0x3e57ad[_0x38db59(0xd0)](_0xf7e608)), _0x453994['on']('close', () => _0x2c9c6f(_0x3e57ad[_0x38db59(0xd1)](_0x38db59(0x10d))));
            });
        })(_0x3b0c8a);
        return { 'Metadata': { 'filesha256': _0x175bb9 } };
    };
describe('test/unit/lib/plugins/aws/deploy/lib/checkForChanges.test.js', () => {
    const _0x8067f2 = _0x146a66;
    it[_0x8067f2(0x10e)](_0x8067f2(0x10f), async () => {
        const _0x428756 = _0x8067f2;
        let _0x10c545;
        await runServerless({
            'fixture': 'checkForChanges',
            'command': _0x428756(0xf4),
            'lastLifecycleHookName': _0x428756(0xf5),
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': 'ignore' },
            'hooks': { 'beforeInstanceInit': _0x3f8309 => _0x10c545 = _0x3f8309 },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x428756(0x110) } } },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x10c545),
                    'headObject': async _0x1d1686 => generateMatchingHeadObjectResponse(_0x10c545, _0x1d1686)
                }
            }
        }), expect(_0x10c545[_0x428756(0x92)][_0x428756(0x93)][_0x428756(0xaa)])['to']['equal'](!![]);
    }), it[_0x8067f2(0x10e)]('TODO:\x20should\x20deploy\x20with\x20--force\x20option', async () => {
        const _0x46f40c = _0x8067f2;
        let _0x1cc61a;
        await runServerless({
            'fixture': _0x46f40c(0x8c),
            'command': _0x46f40c(0xf4),
            'options': { 'force': !![] },
            'lastLifecycleHookName': 'aws:deploy:deploy:checkForChanges',
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x46f40c(0x111) },
            'hooks': { 'beforeInstanceInit': _0x4af811 => _0x1cc61a = _0x4af811 },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x46f40c(0x110) } } },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x1cc61a),
                    'headObject': async _0x307aa7 => generateMatchingHeadObjectResponse(_0x1cc61a, _0x307aa7)
                }
            }
        }), expect(_0x1cc61a[_0x46f40c(0x92)][_0x46f40c(0x93)]['shouldNotDeploy'])['to']['equal'](![]);
    }), it['skip'](_0x8067f2(0x112), async () => {
        const _0x3b37ac = _0x8067f2, {serverless: _0x2a6131} = await runServerless({
                'fixture': _0x3b37ac(0x113),
                'command': _0x3b37ac(0xf4),
                'lastLifecycleHookName': _0x3b37ac(0xf5),
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x3b37ac(0x111) },
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'Lambda': {
                        'getFunction': async () => {
                        }
                    },
                    'S3': {
                        'listObjectsV2': async () => {
                        }
                    }
                }
            });
        expect(_0x2a6131[_0x3b37ac(0x92)]['provider']['shouldNotDeploy'])['to'][_0x3b37ac(0xab)](![]);
    }), it['skip']('TODO:\x20should\x20compare\x20against\x20latest\x20deployment\x20artifacts', async () => {
        const _0x4cefb2 = _0x8067f2;
        let _0x46dff4;
        await runServerless({
            'fixture': 'checkForChanges',
            'command': 'deploy',
            'lastLifecycleHookName': 'aws:deploy:deploy:checkForChanges',
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x4cefb2(0x111) },
            'hooks': { 'beforeInstanceInit': _0x5c76de => _0x46dff4 = _0x5c76de },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x4cefb2(0x110) } } },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x46dff4),
                    'headObject': async _0x2a3b98 => generateMatchingHeadObjectResponse(_0x46dff4, _0x2a3b98)
                }
            }
        }), expect(_0x46dff4[_0x4cefb2(0x92)][_0x4cefb2(0x93)][_0x4cefb2(0xaa)])['to'][_0x4cefb2(0xab)](!![]);
    }), it[_0x8067f2(0x10e)]('TODO:\x20should\x20deploy\x20if\x20new\x20function\x20was\x20introduced\x20and\x20otherwise\x20there\x20were\x20no\x20other\x20changes', async () => {
        const _0x500224 = _0x8067f2;
        let _0x99032b;
        await runServerless({
            'fixture': _0x500224(0x8c),
            'command': _0x500224(0xf4),
            'lastLifecycleHookName': _0x500224(0xf5),
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': 'ignore' },
            'hooks': { 'beforeInstanceInit': _0x35327a => _0x99032b = _0x35327a },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': {
                    'getFunction': () => {
                    }
                },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x99032b),
                    'headObject': async _0x384ef6 => generateMatchingHeadObjectResponse(_0x99032b, _0x384ef6)
                }
            }
        }), expect(_0x99032b[_0x500224(0x92)]['provider'][_0x500224(0xaa)])['to'][_0x500224(0xab)](![]);
    }), it[_0x8067f2(0x10e)](_0x8067f2(0x114), async () => {
        const _0x26816c = _0x8067f2, {
                fixtureData: {
                    updateConfig: _0x125bdf,
                    servicePath: _0x3ee174
                }
            } = await runServerless({
                'fixture': _0x26816c(0x8c),
                'command': 'package'
            }), _0x2ed723 = await generateMatchingListObjectsResponse(_0xefe2a4);
        await _0x125bdf({ 'functions': { 'fnIndividually': null } });
        let _0xefe2a4;
        await runServerless({
            'cwd': _0x3ee174,
            'command': 'package',
            'lastLifecycleHookName': _0x26816c(0xf5),
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x26816c(0x111) },
            'hooks': { 'beforeInstanceInit': _0x497e98 => _0xefe2a4 = _0x497e98 },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': '2021-05-20T15:34:16.494+0000' } } },
                'S3': {
                    'listObjectsV2': () => _0x2ed723,
                    'headObject': async _0xc9ade7 => generateMatchingHeadObjectResponse(_0xefe2a4, _0xc9ade7)
                }
            }
        }), expect(_0xefe2a4[_0x26816c(0x92)][_0x26816c(0x93)]['shouldNotDeploy'])['to']['equal'](![]);
    }), it['skip'](_0x8067f2(0x115), async () => {
        const _0x152b81 = _0x8067f2;
        let _0x4a8aed;
        await runServerless({
            'fixture': _0x152b81(0x8c),
            'command': _0x152b81(0xf4),
            'lastLifecycleHookName': _0x152b81(0xf5),
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x152b81(0x111) },
            'hooks': { 'beforeInstanceInit': _0xa50ee => _0x4a8aed = _0xa50ee },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': '2021-05-20T15:34:16.494+0000' } } },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x4a8aed),
                    'headObject': async _0x6d0296 => generateMatchingHeadObjectResponse(_0x4a8aed, _0x6d0296)
                }
            }
        }), expect(_0x4a8aed[_0x152b81(0x92)]['provider'][_0x152b81(0xaa)])['to'][_0x152b81(0xab)](![]);
    }), it[_0x8067f2(0x10e)](_0x8067f2(0x116), async () => {
        const _0x49235a = _0x8067f2;
        let _0x2050a6;
        await runServerless({
            'fixture': _0x49235a(0x8c),
            'command': 'deploy',
            'configExt': { 'package': { 'individually': !![] } },
            'lastLifecycleHookName': _0x49235a(0xf5),
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': 'ignore' },
            'hooks': { 'beforeInstanceInit': _0x14241d => _0x2050a6 = _0x14241d },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x49235a(0x110) } } },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x2050a6),
                    'headObject': async _0x58041c => generateMatchingHeadObjectResponse(_0x2050a6, _0x58041c)
                }
            }
        }), expect(_0x2050a6['service'][_0x49235a(0x93)][_0x49235a(0xaa)])['to']['equal'](![]);
    }), it['skip']('TODO:\x20should\x20deploy\x20if\x20uploaded\x20artifacts\x20are\x20newer\x20than\x20function\x20configuration\x20modification\x20date', async () => {
        const _0x3a1429 = _0x8067f2;
        let _0x3519ea;
        await runServerless({
            'fixture': _0x3a1429(0x8c),
            'command': 'deploy',
            'configExt': { 'package': { 'individually': !![] } },
            'lastLifecycleHookName': _0x3a1429(0xf5),
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x3a1429(0x111) },
            'hooks': { 'beforeInstanceInit': _0x2f730f => _0x3519ea = _0x2f730f },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': {
                    'getFunction': () => {
                    }
                },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x3519ea),
                    'headObject': async _0xc33088 => generateMatchingHeadObjectResponse(_0x3519ea, _0xc33088)
                }
            }
        }), expect(_0x3519ea[_0x3a1429(0x92)][_0x3a1429(0x93)]['shouldNotDeploy'])['to'][_0x3a1429(0xab)](![]);
    }), it['skip']('TODO:\x20should\x20deploy\x20if\x20custom\x20package.artifact\x20have\x20changed', async () => {
        const _0x5c9a5b = _0x8067f2;
        let _0x1c3453;
        await runServerless({
            'fixture': _0x5c9a5b(0x8c),
            'command': 'deploy',
            'configExt': { 'package': { 'artifact': _0x5c9a5b(0x117) } },
            'lastLifecycleHookName': 'aws:deploy:deploy:checkForChanges',
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x5c9a5b(0x111) },
            'hooks': { 'beforeInstanceInit': _0x32236c => _0x1c3453 = _0x32236c },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x5c9a5b(0x110) } } },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x1c3453),
                    'headObject': async _0x24ec04 => generateMatchingHeadObjectResponse(_0x1c3453, _0x24ec04)
                }
            }
        }), expect(_0x1c3453[_0x5c9a5b(0x92)][_0x5c9a5b(0x93)][_0x5c9a5b(0xaa)])['to']['equal'](![]);
    }), it(_0x8067f2(0x118), async () => {
        const _0x297900 = _0x8067f2, {serverless: _0x1ff5ae} = await runServerless({
                'fixture': 'packageArtifactInServerlessDir',
                'command': _0x297900(0xf4),
                'configExt': { 'service': _0x297900(0x119) },
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x297900(0x111) },
                'lastLifecycleHookName': _0x297900(0xf5),
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x297900(0xf6) } } },
                    'S3': {
                        'headObject': (() => {
                            const _0x476ec7 = _0x297900, _0x198e4a = sandbox['stub']();
                            return _0x198e4a[_0x476ec7(0x11a)]({
                                'Bucket': _0x476ec7(0x90),
                                'Key': _0x476ec7(0x11b)
                            })['returns']({ 'Metadata': { 'filesha256': _0x476ec7(0x11c) } }), _0x198e4a[_0x476ec7(0x11a)]({
                                'Bucket': 'deployment-bucket',
                                'Key': _0x476ec7(0x11d)
                            })[_0x476ec7(0xc8)]({ 'Metadata': { 'filesha256': _0x476ec7(0x11e) } }), _0x198e4a;
                        })(),
                        'listObjectsV2': {
                            'Contents': [
                                {
                                    'Key': 'serverless/test-package-artifact/dev/1589988704359-2020-05-20T15:31:44.359Z/compiled-cloudformation-template.json',
                                    'LastModified': new Date(),
                                    'ETag': _0x297900(0xf9),
                                    'Size': 0x164,
                                    'StorageClass': _0x297900(0x11f)
                                },
                                {
                                    'Key': _0x297900(0x11d),
                                    'LastModified': new Date(),
                                    'ETag': _0x297900(0xf9),
                                    'Size': 0x164,
                                    'StorageClass': _0x297900(0x11f)
                                }
                            ]
                        }
                    }
                }
            });
        expect(_0x1ff5ae['service'][_0x297900(0x93)][_0x297900(0xaa)])['to'][_0x297900(0xab)](!![]);
    }), it('should\x20print\x20a\x20warning\x20if\x20missing\x20lambda:GetFunction\x20permission', async () => {
        const _0x5884f5 = _0x8067f2, {stdoutData: _0x2842ea} = await runServerless({
                'fixture': _0x5884f5(0x8c),
                'command': 'deploy',
                'lastLifecycleHookName': _0x5884f5(0xf5),
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'Lambda': { 'getFunction': sandbox[_0x5884f5(0x9b)]()[_0x5884f5(0x120)]({ 'providerError': { 'statusCode': 0x193 } }) },
                    'S3': { 'listObjectsV2': {} }
                }
            });
        expect(_0x2842ea)['to']['include']([
            _0x5884f5(0x121),
            _0x5884f5(0x122)
        ][_0x5884f5(0xb6)](''));
    }), it[_0x8067f2(0x10e)](_0x8067f2(0x123), () => {
        const _0x40b9e1 = _0x8067f2;
        return expect(runServerless({
            'fixture': _0x40b9e1(0x8c),
            'command': _0x40b9e1(0xf4),
            'lastLifecycleHookName': _0x40b9e1(0xf5),
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x40b9e1(0x111) },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'S3': {
                    'listObjectsV2': async () => {
                    }
                }
            }
        }))['to'][_0x40b9e1(0x124)]['be'][_0x40b9e1(0x125)][_0x40b9e1(0x126)][_0x40b9e1(0xa7)]['property'](_0x40b9e1(0x127));
    }), it[_0x8067f2(0x10e)](_0x8067f2(0x128), () => {
        const _0x658dbb = _0x8067f2;
        return expect(runServerless({
            'fixture': 'checkForChanges',
            'command': _0x658dbb(0xf4),
            'lastLifecycleHookName': _0x658dbb(0xf5),
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x658dbb(0x111) },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'S3': {
                    'listObjectsV2': async () => {
                    }
                }
            }
        }))['to'][_0x658dbb(0x124)]['be'][_0x658dbb(0x125)]['and'][_0x658dbb(0xa7)][_0x658dbb(0x129)](_0x658dbb(0x127));
    }), describe(_0x8067f2(0xa0), () => {
        const _0x4ce5ee = _0x8067f2;
        it('should\x20not\x20attempt\x20to\x20delete\x20and\x20add\x20filter\x20for\x20same\x20destination', async () => {
            const _0x746d10 = _0x418f, _0x31bc66 = sandbox[_0x746d10(0x9b)]();
            let _0x5305ad;
            await runServerless({
                'fixture': 'checkForChanges',
                'command': _0x746d10(0xf4),
                'configExt': { 'functions': { 'fn1': { 'events': [{ 'cloudwatchLog': _0x746d10(0x12a) }] } } },
                'lastLifecycleHookName': _0x746d10(0xf5),
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x746d10(0x111) },
                'hooks': { 'beforeInstanceInit': _0x22a35d => _0x5305ad = _0x22a35d },
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': '2021-05-20T15:34:16.494+0000' } } },
                    'S3': {
                        'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x5305ad),
                        'headObject': async _0x288776 => generateMatchingHeadObjectResponse(_0x5305ad, _0x288776)
                    },
                    'CloudWatchLogs': {
                        'deleteSubscriptionFilter': _0x31bc66,
                        'describeSubscriptionFilters': async () => {
                            const _0x480f75 = _0x746d10, _0x4859f5 = _0x5305ad['service'][_0x480f75(0x12b)](_0x480f75(0x12c))['name'], _0x145c4c = _0x5305ad[_0x480f75(0x12d)](_0x480f75(0x12e))['naming'];
                            return {
                                'subscriptionFilters': [
                                    {
                                        'filterName': _0x145c4c[_0x480f75(0x12f)]() + '-' + _0x145c4c[_0x480f75(0x130)](_0x480f75(0x131), 0x1) + '-xxxxx',
                                        'destinationArn': _0x480f75(0x132) + _0x4859f5
                                    },
                                    {
                                        'filterName': _0x145c4c[_0x480f75(0x12f)]() + '-' + _0x145c4c[_0x480f75(0x130)](_0x480f75(0x133), 0x1) + _0x480f75(0x134),
                                        'destinationArn': _0x480f75(0x135)
                                    }
                                ]
                            };
                        }
                    }
                }
            }), expect(_0x31bc66)['to'][_0x746d10(0xa6)]['have'][_0x746d10(0xa9)]['called'];
        }), it('should\x20not\x20attempt\x20to\x20delete\x20filter\x20by\x202\x20subscription\x20filter\x20per\x20log\x20group', async () => {
            const _0x5cd679 = _0x418f, _0x2f899b = sandbox[_0x5cd679(0x9b)]();
            let _0x4e58f8;
            await runServerless({
                'fixture': _0x5cd679(0x8c),
                'command': _0x5cd679(0xf4),
                'configExt': { 'functions': { 'fn1': { 'events': [{ 'cloudwatchLog': _0x5cd679(0x12a) }] } } },
                'lastLifecycleHookName': _0x5cd679(0xf5),
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x5cd679(0x111) },
                'hooks': { 'beforeInstanceInit': _0x9ae3b9 => _0x4e58f8 = _0x9ae3b9 },
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': '2021-05-20T15:34:16.494+0000' } } },
                    'S3': {
                        'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x4e58f8),
                        'headObject': async _0x361b7c => generateMatchingHeadObjectResponse(_0x4e58f8, _0x361b7c)
                    },
                    'CloudWatchLogs': {
                        'deleteSubscriptionFilter': _0x2f899b,
                        'describeSubscriptionFilters': async () => {
                            const _0x1aae1f = _0x5cd679, _0x1cb469 = _0x4e58f8[_0x1aae1f(0x12d)](_0x1aae1f(0x12e))[_0x1aae1f(0x136)];
                            return {
                                'subscriptionFilters': [{
                                        'filterName': _0x1cb469[_0x1aae1f(0x12f)]() + '-' + _0x1cb469[_0x1aae1f(0x130)](_0x1aae1f(0x131), 0x1) + _0x1aae1f(0x134),
                                        'destinationArn': _0x1aae1f(0x135)
                                    }]
                            };
                        }
                    }
                }
            }), expect(_0x2f899b)['to']['not'][_0x5cd679(0xa7)]['been'][_0x5cd679(0xa8)];
        }), it(_0x4ce5ee(0x137), async () => {
            const _0x430e8d = _0x4ce5ee, _0x214dc8 = sandbox[_0x430e8d(0x9b)]();
            let _0x159198;
            const {awsNaming: _0x2a5cef} = await runServerless({
                'fixture': _0x430e8d(0x8c),
                'command': _0x430e8d(0xf4),
                'configExt': { 'functions': { 'fn1': { 'events': [{ 'cloudwatchLog': _0x430e8d(0x12a) }] } } },
                'lastLifecycleHookName': _0x430e8d(0xf5),
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x430e8d(0x111) },
                'hooks': { 'beforeInstanceInit': _0x5356cb => _0x159198 = _0x5356cb },
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x430e8d(0x110) } } },
                    'S3': {
                        'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x159198),
                        'headObject': async _0x46112d => generateMatchingHeadObjectResponse(_0x159198, _0x46112d)
                    },
                    'CloudWatchLogs': {
                        'deleteSubscriptionFilter': _0x214dc8,
                        'describeSubscriptionFilters': async () => {
                            const _0x40d5ce = _0x430e8d, _0x5c8903 = _0x159198[_0x40d5ce(0x12d)](_0x40d5ce(0x12e))[_0x40d5ce(0x136)];
                            return {
                                'subscriptionFilters': [
                                    {
                                        'filterName': _0x5c8903[_0x40d5ce(0x12f)]() + '-' + _0x5c8903[_0x40d5ce(0x130)](_0x40d5ce(0x133), 0x1) + _0x40d5ce(0x134),
                                        'destinationArn': _0x40d5ce(0x135)
                                    },
                                    {
                                        'filterName': _0x5c8903[_0x40d5ce(0x12f)]() + '-' + _0x5c8903[_0x40d5ce(0x130)]('Fn2', 0x2) + _0x40d5ce(0x134),
                                        'destinationArn': _0x40d5ce(0x132) + _0x159198['service'][_0x40d5ce(0x12b)](_0x40d5ce(0x12c))['name']
                                    }
                                ]
                            };
                        }
                    }
                }
            });
            expect(_0x214dc8)['to']['have'][_0x430e8d(0xa9)][_0x430e8d(0x138)]({
                'logGroupName': _0x430e8d(0x12a),
                'filterName': _0x2a5cef[_0x430e8d(0x12f)]() + '-' + _0x2a5cef[_0x430e8d(0x130)](_0x430e8d(0x133), 0x2) + _0x430e8d(0x134)
            });
        }), it('should\x20attempt\x20to\x20delete\x20filter\x20if\x20order\x20of\x20cloudwatch\x20events\x20changed', async () => {
            const _0x4beb8a = _0x4ce5ee, _0x3e1e44 = sandbox['stub']();
            let _0x10b797;
            const {awsNaming: _0x1defc7} = await runServerless({
                'fixture': _0x4beb8a(0x8c),
                'command': _0x4beb8a(0xf4),
                'configExt': {
                    'functions': {
                        'fn1': {
                            'events': [
                                { 'cloudwatchLog': _0x4beb8a(0x139) },
                                { 'cloudwatchLog': _0x4beb8a(0x13a) }
                            ]
                        }
                    }
                },
                'lastLifecycleHookName': _0x4beb8a(0xf5),
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x4beb8a(0x111) },
                'hooks': { 'beforeInstanceInit': _0x25a6ca => _0x10b797 = _0x25a6ca },
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': '2021-05-20T15:34:16.494+0000' } } },
                    'S3': {
                        'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x10b797),
                        'headObject': async _0x538a7e => generateMatchingHeadObjectResponse(_0x10b797, _0x538a7e)
                    },
                    'CloudWatchLogs': {
                        'deleteSubscriptionFilter': _0x3e1e44,
                        'describeSubscriptionFilters': sandbox[_0x4beb8a(0x9b)]()[_0x4beb8a(0x13b)]()[_0x4beb8a(0x13c)](async () => {
                            const _0x3f13df = _0x4beb8a, _0x48eb6a = _0x10b797[_0x3f13df(0x12d)](_0x3f13df(0x12e))[_0x3f13df(0x136)];
                            return {
                                'subscriptionFilters': [{
                                        'filterName': _0x48eb6a[_0x3f13df(0x12f)]() + '-' + _0x48eb6a[_0x3f13df(0x130)](_0x3f13df(0x131), 0x1) + _0x3f13df(0x134),
                                        'destinationArn': _0x3f13df(0x132) + _0x10b797['service'][_0x3f13df(0x12b)](_0x3f13df(0x12c))[_0x3f13df(0x13d)]
                                    }]
                            };
                        })['onSecondCall']()['callsFake'](async () => {
                            const _0x3d2b4d = _0x4beb8a, _0x2c6150 = _0x10b797['getProvider']('aws')[_0x3d2b4d(0x136)];
                            return {
                                'subscriptionFilters': [{
                                        'filterName': _0x2c6150[_0x3d2b4d(0x12f)]() + '-' + _0x2c6150[_0x3d2b4d(0x130)](_0x3d2b4d(0x131), 0x1) + _0x3d2b4d(0x134),
                                        'destinationArn': _0x3d2b4d(0x132) + _0x10b797[_0x3d2b4d(0x92)][_0x3d2b4d(0x12b)](_0x3d2b4d(0x12c))[_0x3d2b4d(0x13d)]
                                    }]
                            };
                        })
                    }
                }
            });
            expect(_0x3e1e44)['to'][_0x4beb8a(0xa7)]['been'][_0x4beb8a(0x138)]({
                'logGroupName': _0x4beb8a(0x13a),
                'filterName': _0x1defc7['getStackName']() + '-' + _0x1defc7[_0x4beb8a(0x130)](_0x4beb8a(0x131), 0x1) + _0x4beb8a(0x134)
            });
        }), it('should\x20attempt\x20to\x20delete\x20multiple\x20filters', async () => {
            const _0x416969 = _0x4ce5ee, _0x4533a2 = sandbox[_0x416969(0x9b)]();
            let _0xc60a81;
            const {awsNaming: _0x50cb14} = await runServerless({
                'fixture': _0x416969(0x8c),
                'command': _0x416969(0xf4),
                'configExt': {
                    'functions': {
                        'fn1': {
                            'events': [
                                { 'cloudwatchLog': _0x416969(0x12a) },
                                { 'cloudwatchLog': _0x416969(0x12a) }
                            ]
                        }
                    }
                },
                'lastLifecycleHookName': 'aws:deploy:deploy:checkForChanges',
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x416969(0x111) },
                'hooks': { 'beforeInstanceInit': _0x44b9f6 => _0xc60a81 = _0x44b9f6 },
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': '2021-05-20T15:34:16.494+0000' } } },
                    'S3': {
                        'listObjectsV2': async () => generateMatchingListObjectsResponse(_0xc60a81),
                        'headObject': async _0x1d07de => generateMatchingHeadObjectResponse(_0xc60a81, _0x1d07de)
                    },
                    'CloudWatchLogs': {
                        'deleteSubscriptionFilter': _0x4533a2,
                        'describeSubscriptionFilters': sandbox[_0x416969(0x9b)]()[_0x416969(0x13b)]()[_0x416969(0x13c)](async () => {
                            const _0x13c06a = _0x416969, _0x58c802 = _0xc60a81[_0x13c06a(0x12d)](_0x13c06a(0x12e))['naming'];
                            return {
                                'subscriptionFilters': [
                                    {
                                        'filterName': _0x58c802[_0x13c06a(0x12f)]() + '-' + _0x58c802[_0x13c06a(0x130)](_0x13c06a(0x131), 0x1) + '-xxxxx',
                                        'destinationArn': _0x13c06a(0x135)
                                    },
                                    {
                                        'filterName': _0x58c802[_0x13c06a(0x12f)]() + '-' + _0x58c802[_0x13c06a(0x130)](_0x13c06a(0x131), 0x2) + _0x13c06a(0x134),
                                        'destinationArn': _0x13c06a(0x135)
                                    }
                                ]
                            };
                        })
                    }
                }
            });
            expect(_0x4533a2)['to'][_0x416969(0xa7)][_0x416969(0xa9)]['calledTwice'], expect(_0x4533a2)['to'][_0x416969(0xa7)]['been']['calledWith']({
                'logGroupName': _0x416969(0x12a),
                'filterName': _0x50cb14[_0x416969(0x12f)]() + '-' + _0x50cb14[_0x416969(0x130)](_0x416969(0x131), 0x1) + _0x416969(0x134)
            }), expect(_0x4533a2)['to'][_0x416969(0xa7)][_0x416969(0xa9)]['calledWith']({
                'logGroupName': 'someLogGroupName',
                'filterName': _0x50cb14[_0x416969(0x12f)]() + '-' + _0x50cb14[_0x416969(0x130)]('Fn1', 0x2) + _0x416969(0x134)
            });
        }), it(_0x4ce5ee(0x13e), async () => {
            const _0x582720 = _0x4ce5ee, _0x4c3df5 = sandbox[_0x582720(0x9b)]();
            let _0x5f5456;
            await runServerless({
                'fixture': _0x582720(0x8c),
                'command': _0x582720(0xf4),
                'configExt': { 'functions': { 'fn1': { 'events': [{ 'cloudwatchLog': _0x582720(0x12a) }] } } },
                'lastLifecycleHookName': _0x582720(0xf5),
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x582720(0x111) },
                'hooks': { 'beforeInstanceInit': _0x3842d5 => _0x5f5456 = _0x3842d5 },
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'STS': {
                        'getCallerIdentity': {
                            'ResponseMetadata': { 'RequestId': _0x582720(0xfa) },
                            'UserId': 'XXXXXXXXXXXXXXXXXXXXX',
                            'Account': '999999999999',
                            'Arn': 'arn:aws-us-gov:iam::999999999999:user/test'
                        }
                    },
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x582720(0x110) } } },
                    'S3': {
                        'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x5f5456),
                        'headObject': async _0x36e984 => generateMatchingHeadObjectResponse(_0x5f5456, _0x36e984)
                    },
                    'CloudWatchLogs': {
                        'describeSubscriptionFilters': sandbox[_0x582720(0x9b)]()[_0x582720(0x13c)](async () => {
                            const _0x5bd03b = _0x582720, _0x40fc34 = _0x5f5456[_0x5bd03b(0x12d)](_0x5bd03b(0x12e))[_0x5bd03b(0x136)];
                            return {
                                'subscriptionFilters': [{
                                        'filterName': _0x40fc34[_0x5bd03b(0x12f)]() + '-' + _0x40fc34[_0x5bd03b(0x130)](_0x5bd03b(0x131), 0x1) + _0x5bd03b(0x134),
                                        'destinationArn': _0x5bd03b(0x13f) + _0x5f5456[_0x5bd03b(0x92)]['getFunction'](_0x5bd03b(0x12c))[_0x5bd03b(0x13d)]
                                    }]
                            };
                        }),
                        'deleteSubscriptionFilter': _0x4c3df5
                    }
                }
            }), expect(_0x4c3df5)['to'][_0x582720(0xa6)][_0x582720(0xa7)][_0x582720(0xa9)]['called'];
        });
    });
});
