'use strict';
const _0x12e3 = [
    'Properties',
    'S3Key',
    'true',
    '999999999999',
    '/.serverless',
    'zip',
    'push',
    'compiled-cloudformation-template.json',
    'map',
    '2020-05-20T15:30:16.494+0000',
    'basename',
    'base64',
    'createReadStream',
    '/.serverless/',
    'data',
    'close',
    'skip',
    'TODO:\x20should\x20not\x20deploy\x20if\x20artifacts\x20in\x20bucket\x20are\x20same\x20as\x20locally\x20and\x20modification\x20dates\x20for\x20all\x20functions\x20are\x20later\x20than\x20uploaded\x20artifacts\x20dates',
    'TODO:\x20should\x20deploy\x20with\x20--force\x20option',
    '2021-05-20T15:34:16.494+0000',
    'TODO:\x20should\x20deploy\x20when\x20deployment\x20bucket\x20is\x20empty\x20(first\x20deployment)',
    'packageFoldern',
    'TODO:\x20should\x20compare\x20against\x20latest\x20deployment\x20artifacts',
    'TODO:\x20should\x20deploy\x20if\x20new\x20function\x20was\x20introduced\x20and\x20otherwise\x20there\x20were\x20no\x20other\x20changes',
    'TODO:\x20should\x20deploy\x20if\x20count\x20of\x20hashes\x20(not\x20their\x20content)\x20differs',
    'TODO:\x20should\x20deploy\x20if\x20uploaded\x20artifacts\x20are\x20newer\x20than\x20function\x20configuration\x20modification\x20date',
    'TODO:\x20should\x20deploy\x20if\x20custom\x20package.artifact\x20have\x20changed',
    'should\x20skip\x20a\x20deployment\x20with\x20identical\x20hashes\x20and\x20package.artifact\x20targeting\x20.serverless\x20directory',
    'packageArtifactInServerlessDir',
    'test-packageArtifactInServerlessDir',
    'serverless/test-package-artifact/dev/1589988704359-2020-05-20T15:31:44.359Z/compiled-cloudformation-template.json',
    'withArgs',
    'serverless/test-package-artifact/dev/1589988704359-2020-05-20T15:31:44.359Z/my-own.zip',
    'T0qEYHOE4Xv2E8Ar03xGogAlElcdf/dQh/lh9ao7Glo=',
    'should\x20print\x20a\x20warning\x20if\x20missing\x20lambda:GetFunction\x20permission',
    'throws',
    'include',
    'WARNING:\x20Not\x20authorized\x20to\x20perform:\x20lambda:GetFunction\x20for\x20at\x20least\x20one\x20of\x20the\x20lambda\x20functions.',
    '\x20Deployment\x20will\x20not\x20be\x20skipped\x20even\x20if\x20service\x20files\x20did\x20not\x20change.\x20',
    'TODO:\x20should\x20crash\x20meaningfully\x20if\x20bucket\x20does\x20not\x20exist',
    'and',
    'property',
    'code',
    'TODO:\x20should\x20handle\x20gently\x20other\x20AWS\x20SDK\x20errors',
    'should\x20not\x20attempt\x20to\x20delete\x20and\x20add\x20filter\x20for\x20same\x20destination',
    'someLogGroupName',
    'getFunction',
    'name',
    'getStackName',
    'Fn1',
    '-xxxxx',
    'arn:aws:lambda:us-east-1:999999999999:function:',
    'Fn2',
    'arn:aws:lambda:us-east-1:999999999999:function:test-checkForChanges-cdr3ogg-dev-fn1',
    'should\x20not\x20attempt\x20to\x20delete\x20filter\x20by\x202\x20subscription\x20filter\x20per\x20log\x20group',
    'getProvider',
    'naming',
    'getCloudWatchLogLogicalId',
    'should\x20attempt\x20to\x20delete\x20filter\x20over\x202\x20subscription\x20filter\x20per\x20log\x20group',
    'fn1',
    'calledOnceWith',
    'someLogGroupName2',
    'callsFake',
    'onSecondCall',
    'should\x20attempt\x20to\x20delete\x20multiple\x20filters',
    'onFirstCall',
    'calledTwice',
    'should\x20recognize\x20custom\x20partition',
    'ffffffff-ffff-ffff-ffff-ffffffffffff',
    'arn:aws-us-gov:lambda:us-east-1:999999999999:function:',
    '1208519zhucgf',
    '1gwSmNi',
    '1320694EQojxU',
    '182794VrxDmk',
    '1210209hkJqzL',
    '136638mOLDjr',
    '8qpBsvb',
    '597406AJKDqd',
    '2232020IyzmPs',
    'crypto',
    'path',
    'globby',
    'chai',
    'proxyquire',
    '../../../../../../../lib/plugins/aws/lib/normalizeFiles',
    '../../../../../../../lib/plugins/aws/provider',
    '../../../../../../../lib/plugins/aws/deploy/index',
    '../../../../../../../lib/Serverless',
    '../../../../../../../lib/serverless-error',
    '../../../../../../utils/run-serverless',
    'use',
    'chai-as-promised',
    'sinon-chai',
    'expect',
    'checkForChanges',
    'dev',
    'us-east-1',
    'serviceDir',
    'my-service',
    'setProvider',
    'aws',
    'service',
    'deployment-bucket',
    'serverless',
    'compiledCloudFormationTemplate',
    'bar',
    'serverless/',
    'getStage',
    'cli',
    'stub',
    '../../../../../../../lib/plugins/aws/deploy/lib/checkForChanges.js',
    'assign',
    '#checkForChanges()',
    'resolves',
    'getObjectMetadata',
    'checkIfDeploymentIsNecessary',
    'checkLogGroupSubscriptionFilterResourceLimitExceeded',
    'getMostRecentObjects',
    'restore',
    'should\x20resolve\x20if\x20the\x20\x22force\x22\x20option\x20is\x20used',
    'options',
    'force',
    'then',
    'not',
    'been',
    'called',
    'have',
    'provider',
    'equal',
    '#getMostRecentObjects()',
    'request',
    'should\x20resolve\x20if\x20no\x20result\x20is\x20returned',
    'calledWithExactly',
    'bucketName',
    'serverless/my-service/dev',
    'deep',
    'rejects',
    'The\x20specified\x20bucket\x20does\x20not\x20exist',
    'The\x20serverless\x20deployment\x20bucket\x20\x22',
    '\x22\x20does\x20not\x20exist.',
    'Create\x20it\x20manually\x20if\x20you\x20want\x20to\x20reuse\x20the\x20CloudFormation\x20stack\x20\x22my-service-dev\x22,',
    'join',
    'should\x20throw\x20original\x20error\x20if\x20rejected\x20not\x20due\x20to\x20missing\x20bucket',
    'Other\x20reason',
    'rejectedWith',
    'should\x20resolve\x20if\x20result\x20array\x20is\x20empty',
    'fulfilled',
    '/151224711231-2016-08-18T15:43:00/cloudformation.json',
    '/141264711231-2016-08-18T15:42:00/artifact.zip',
    '/141264711231-2016-08-18T15:42:00/cloudformation.json',
    'listObjectsV2',
    '/151224711231-2016-08-18T15:43:00/artifact.zip',
    '#getObjectMetadata()',
    'should\x20resolve\x20if\x20no\x20input\x20is\x20provided',
    'callCount',
    'headObject',
    'normalizeCloudFormationTemplate',
    'returns',
    'sync',
    'readFile',
    'yields',
    'should\x20resolve\x20if\x20no\x20objects\x20are\x20provided\x20as\x20input',
    'should\x20resolve\x20if\x20objects\x20are\x20given,\x20but\x20no\x20function\x20last\x20modified\x20date',
    'my-service.zip',
    'onCall',
    'local-hash-cf-template',
    'remote-hash-cf-template',
    'calledOnce',
    'log',
    '**.zip',
    'resolve',
    '.serverless/my-service.zip',
    'shouldNotDeploy',
    'should\x20not\x20set\x20a\x20flag\x20if\x20there\x20are\x20more\x20remote\x20hashes',
    'createHash',
    'update',
    'digest',
    'local-hash-zip-file-1',
    'calledWith',
    'remote-hash-zip-file-1',
    '.serverless',
    'should\x20not\x20set\x20a\x20flag\x20if\x20remote\x20and\x20local\x20hashes\x20are\x20the\x20same\x20but\x20are\x20duplicated',
    'func1.zip',
    '.serverless/func2.zip',
    'should\x20not\x20set\x20a\x20flag\x20if\x20the\x20hashes\x20are\x20equal,\x20but\x20the\x20objects\x20were\x20modified\x20after\x20their\x20functions',
    'hash-cf-template',
    'hash-zip-file-1',
    'getTime',
    'should\x20set\x20a\x20flag\x20if\x20the\x20remote\x20and\x20local\x20hashes\x20are\x20equal',
    'should\x20set\x20a\x20flag\x20if\x20the\x20remote\x20and\x20local\x20hashes\x20are\x20equal,\x20and\x20the\x20edit\x20times\x20are\x20ordered',
    'should\x20set\x20a\x20flag\x20if\x20the\x20remote\x20and\x20local\x20hashes\x20are\x20duplicated\x20and\x20equal',
    'func2.zip',
    '.serverless/func1.zip',
    'should\x20not\x20set\x20a\x20flag\x20if\x20the\x20remote\x20and\x20local\x20hashes\x20are\x20different\x20for\x20package.artifact',
    'package',
    'local-my-own-hash',
    'remote-my-own-hash',
    'foo/bar/my-own.zip',
    'checkForChanges\x20#2',
    'Should\x20recognize\x20package.artifact',
    'packageArtifact',
    'deploy',
    'ignore',
    'aws:deploy:deploy:checkForChanges',
    '2020-05-20T15:34:16.494+0000',
    'serverless/test-package-artifact/dev/1589988704359-2020-05-20T15:31:44.359Z/artifact.zip',
    '\x225102a4cf710cae6497dba9e61b85d0a4\x22',
    'STANDARD',
    'XXXXXXXXXXXXXXXXXXXXX',
    'arn:aws:iam::999999999999:user/test',
    'FooLambdaFunction'
];
const _0x47eb30 = _0x4430;
(function (_0x2d22e1, _0x6c5212) {
    const _0x18db9a = _0x4430;
    while (!![]) {
        try {
            const _0x15cd50 = parseInt(_0x18db9a(0x169)) * -parseInt(_0x18db9a(0x16a)) + parseInt(_0x18db9a(0x16b)) + parseInt(_0x18db9a(0x16c)) + -parseInt(_0x18db9a(0x16d)) + parseInt(_0x18db9a(0x16e)) * -parseInt(_0x18db9a(0x16f)) + parseInt(_0x18db9a(0x170)) + parseInt(_0x18db9a(0x171));
            if (_0x15cd50 === _0x6c5212)
                break;
            else
                _0x2d22e1['push'](_0x2d22e1['shift']());
        } catch (_0x5625f1) {
            _0x2d22e1['push'](_0x2d22e1['shift']());
        }
    }
}(_0x12e3, 0xc875a));
const crypto = require(_0x47eb30(0x172)), fs = require('fs'), path = require(_0x47eb30(0x173)), globby = require(_0x47eb30(0x174)), sandbox = require('sinon'), chai = require(_0x47eb30(0x175)), proxyquire = require(_0x47eb30(0x176)), normalizeFiles = require(_0x47eb30(0x177)), AwsProvider = require(_0x47eb30(0x178)), AwsDeploy = require(_0x47eb30(0x179)), Serverless = require(_0x47eb30(0x17a)), ServerlessError = require(_0x47eb30(0x17b)), runServerless = require(_0x47eb30(0x17c));
chai[_0x47eb30(0x17d)](require(_0x47eb30(0x17e))), chai[_0x47eb30(0x17d)](require(_0x47eb30(0x17f)));
function _0x4430(_0x195240, _0x241a99) {
    return _0x4430 = function (_0x12e360, _0x443054) {
        _0x12e360 = _0x12e360 - 0x169;
        let _0xa97a1f = _0x12e3[_0x12e360];
        return _0xa97a1f;
    }, _0x4430(_0x195240, _0x241a99);
}
const expect = require('chai')[_0x47eb30(0x180)];
describe(_0x47eb30(0x181), () => {
    const _0x4aa9d5 = _0x47eb30;
    let _0x4bd496, _0x83ad3, _0x654e5c, _0x41a74d, _0x33857a;
    beforeEach(() => {
        const _0x1d7fe5 = _0x4430, _0x3bcb48 = {
                'stage': _0x1d7fe5(0x182),
                'region': _0x1d7fe5(0x183)
            };
        _0x4bd496 = new Serverless(), _0x4bd496[_0x1d7fe5(0x184)] = _0x1d7fe5(0x185), _0x83ad3 = new AwsProvider(_0x4bd496, _0x3bcb48), _0x4bd496[_0x1d7fe5(0x186)](_0x1d7fe5(0x187), _0x83ad3), _0x4bd496[_0x1d7fe5(0x188)][_0x1d7fe5(0x188)] = _0x1d7fe5(0x185), _0x654e5c = new AwsDeploy(_0x4bd496, _0x3bcb48), _0x654e5c['bucketName'] = _0x1d7fe5(0x189), _0x654e5c[_0x1d7fe5(0x18a)][_0x1d7fe5(0x188)]['provider'][_0x1d7fe5(0x18b)] = { 'foo': _0x1d7fe5(0x18c) }, _0x41a74d = _0x1d7fe5(0x18d) + _0x4bd496[_0x1d7fe5(0x188)]['service'] + '/' + _0x83ad3[_0x1d7fe5(0x18e)](), _0x654e5c['serverless'][_0x1d7fe5(0x18f)] = { 'log': sandbox['spy']() }, _0x33857a = {
            'createHash'() {
                return this;
            },
            'update'() {
                return this;
            },
            'digest': sandbox[_0x1d7fe5(0x190)]()
        };
        const _0x450386 = proxyquire(_0x1d7fe5(0x191), { 'crypto': _0x33857a });
        Object[_0x1d7fe5(0x192)](_0x654e5c, _0x450386);
    }), describe(_0x4aa9d5(0x193), () => {
        const _0x45df3e = _0x4aa9d5;
        let _0x21f81f, _0xbf31e5, _0x2a63b, _0x520d45;
        beforeEach(() => {
            const _0x4dcb84 = _0x4430;
            _0x21f81f = sandbox[_0x4dcb84(0x190)](_0x654e5c, 'getMostRecentObjects')[_0x4dcb84(0x194)](), _0xbf31e5 = sandbox[_0x4dcb84(0x190)](_0x654e5c, _0x4dcb84(0x195))[_0x4dcb84(0x194)](), _0x2a63b = sandbox[_0x4dcb84(0x190)](_0x654e5c, _0x4dcb84(0x196))['resolves'](), _0x520d45 = sandbox['stub'](_0x654e5c, _0x4dcb84(0x197))[_0x4dcb84(0x194)]();
        }), afterEach(() => {
            const _0x557782 = _0x4430;
            _0x654e5c[_0x557782(0x198)][_0x557782(0x199)](), _0x654e5c[_0x557782(0x195)][_0x557782(0x199)](), _0x654e5c['checkIfDeploymentIsNecessary'][_0x557782(0x199)](), _0x654e5c['checkLogGroupSubscriptionFilterResourceLimitExceeded'][_0x557782(0x199)](), _0x520d45[_0x557782(0x199)]();
        }), it(_0x45df3e(0x19a), () => {
            const _0x4a8862 = _0x45df3e;
            return _0x654e5c[_0x4a8862(0x19b)][_0x4a8862(0x19c)] = !![], expect(_0x654e5c[_0x4a8862(0x181)]())['to']['be']['fulfilled'][_0x4a8862(0x19d)](() => {
                const _0x4c0e36 = _0x4a8862;
                expect(_0x21f81f)['to'][_0x4c0e36(0x19e)]['have'][_0x4c0e36(0x19f)][_0x4c0e36(0x1a0)], expect(_0xbf31e5)['to'][_0x4c0e36(0x19e)][_0x4c0e36(0x1a1)][_0x4c0e36(0x19f)][_0x4c0e36(0x1a0)], expect(_0x2a63b)['to'][_0x4c0e36(0x19e)][_0x4c0e36(0x1a1)][_0x4c0e36(0x19f)][_0x4c0e36(0x1a0)], expect(_0x654e5c[_0x4c0e36(0x18a)]['service'][_0x4c0e36(0x1a2)]['shouldNotDeploy'])['to'][_0x4c0e36(0x1a3)](![]);
            });
        });
    }), describe(_0x4aa9d5(0x1a4), () => {
        const _0x52decb = _0x4aa9d5;
        let _0x469e4a;
        beforeEach(() => {
            const _0x21a7d8 = _0x4430;
            _0x469e4a = sandbox['stub'](_0x654e5c[_0x21a7d8(0x1a2)], _0x21a7d8(0x1a5));
        }), afterEach(() => {
            const _0x534c18 = _0x4430;
            _0x654e5c['provider'][_0x534c18(0x1a5)][_0x534c18(0x199)]();
        }), it(_0x52decb(0x1a6), () => {
            const _0x43dae1 = _0x52decb;
            return _0x469e4a[_0x43dae1(0x194)](), expect(_0x654e5c[_0x43dae1(0x198)]())['to']['be']['fulfilled'][_0x43dae1(0x19d)](_0x4340aa => {
                const _0x2b7d36 = _0x43dae1;
                expect(_0x469e4a)['to']['have'][_0x2b7d36(0x19f)][_0x2b7d36(0x1a7)]('S3', 'listObjectsV2', {
                    'Bucket': _0x654e5c[_0x2b7d36(0x1a8)],
                    'Prefix': _0x2b7d36(0x1a9)
                }), expect(_0x4340aa)['to'][_0x2b7d36(0x1aa)][_0x2b7d36(0x1a3)]([]);
            });
        }), it('should\x20translate\x20error\x20if\x20rejected\x20due\x20to\x20missing\x20bucket', () => {
            const _0xdb5fd6 = _0x52decb;
            return _0x469e4a[_0xdb5fd6(0x1ab)](new ServerlessError(_0xdb5fd6(0x1ac))), expect(_0x654e5c[_0xdb5fd6(0x198)]())['to']['be']['rejectedWith']([
                _0xdb5fd6(0x1ad) + _0x654e5c[_0xdb5fd6(0x1a8)] + _0xdb5fd6(0x1ae),
                _0xdb5fd6(0x1af),
                'or\x20delete\x20the\x20stack\x20if\x20it\x20is\x20no\x20longer\x20required.'
            ][_0xdb5fd6(0x1b0)]('\x20'));
        }), it(_0x52decb(0x1b1), () => {
            const _0x5d54de = _0x52decb;
            return _0x469e4a[_0x5d54de(0x1ab)](new ServerlessError(_0x5d54de(0x1b2))), expect(_0x654e5c[_0x5d54de(0x198)]())['to']['be'][_0x5d54de(0x1b3)](_0x5d54de(0x1b2));
        }), it(_0x52decb(0x1b4), () => {
            const _0x4ee5a4 = _0x52decb, _0x2c791f = { 'Contents': [] };
            return _0x469e4a[_0x4ee5a4(0x194)](_0x2c791f), expect(_0x654e5c[_0x4ee5a4(0x198)]())['to']['be'][_0x4ee5a4(0x1b5)][_0x4ee5a4(0x19d)](_0x325158 => {
                const _0xfe1b43 = _0x4ee5a4;
                expect(_0x469e4a)['to'][_0xfe1b43(0x1a1)][_0xfe1b43(0x19f)][_0xfe1b43(0x1a7)]('S3', 'listObjectsV2', {
                    'Bucket': _0x654e5c[_0xfe1b43(0x1a8)],
                    'Prefix': _0xfe1b43(0x1a9)
                }), expect(_0x325158)['to']['deep']['equal']([]);
            });
        }), it('should\x20resolve\x20with\x20the\x20most\x20recently\x20deployed\x20objects', () => {
            const _0x134773 = _0x52decb, _0x50f673 = {
                    'Contents': [
                        { 'Key': _0x41a74d + '/151224711231-2016-08-18T15:43:00/artifact.zip' },
                        { 'Key': _0x41a74d + _0x134773(0x1b6) },
                        { 'Key': _0x41a74d + _0x134773(0x1b7) },
                        { 'Key': _0x41a74d + _0x134773(0x1b8) }
                    ]
                };
            return _0x469e4a[_0x134773(0x194)](_0x50f673), expect(_0x654e5c['getMostRecentObjects']())['to']['be'][_0x134773(0x1b5)]['then'](_0x15f875 => {
                const _0x2fc005 = _0x134773;
                expect(_0x469e4a)['to'][_0x2fc005(0x1a1)][_0x2fc005(0x19f)][_0x2fc005(0x1a7)]('S3', _0x2fc005(0x1b9), {
                    'Bucket': _0x654e5c[_0x2fc005(0x1a8)],
                    'Prefix': _0x2fc005(0x1a9)
                }), expect(_0x15f875)['to'][_0x2fc005(0x1aa)][_0x2fc005(0x1a3)]([
                    { 'Key': _0x41a74d + _0x2fc005(0x1b6) },
                    { 'Key': _0x41a74d + _0x2fc005(0x1ba) }
                ]);
            });
        });
    }), describe(_0x4aa9d5(0x1bb), () => {
        const _0x14124e = _0x4aa9d5;
        let _0x2097da;
        beforeEach(() => {
            const _0x24894a = _0x4430;
            _0x2097da = sandbox[_0x24894a(0x190)](_0x654e5c[_0x24894a(0x1a2)], _0x24894a(0x1a5))['resolves']();
        }), afterEach(() => {
            const _0xcf4870 = _0x4430;
            _0x654e5c['provider'][_0xcf4870(0x1a5)]['restore']();
        }), it(_0x14124e(0x1bc), () => expect(_0x654e5c['getObjectMetadata']())['to']['be'][_0x14124e(0x1b5)][_0x14124e(0x19d)](_0x5c4968 => {
            const _0x470173 = _0x14124e;
            expect(_0x2097da)['to'][_0x470173(0x19e)][_0x470173(0x1a1)][_0x470173(0x19f)]['called'], expect(_0x5c4968)['to']['deep'][_0x470173(0x1a3)]([]);
        })), it('should\x20resolve\x20if\x20no\x20objects\x20are\x20provided\x20as\x20input', () => {
            const _0x1e37a5 = _0x14124e, _0x85f32 = [];
            return expect(_0x654e5c[_0x1e37a5(0x195)](_0x85f32))['to']['be']['fulfilled'][_0x1e37a5(0x19d)](_0x42a06d => {
                const _0x517ebb = _0x1e37a5;
                expect(_0x2097da)['to'][_0x517ebb(0x19e)][_0x517ebb(0x1a1)][_0x517ebb(0x19f)][_0x517ebb(0x1a0)], expect(_0x42a06d)['to']['deep'][_0x517ebb(0x1a3)]([]);
            });
        }), it('should\x20request\x20the\x20object\x20detailed\x20information', () => {
            const _0x2206bf = _0x14124e, _0x581056 = [
                    { 'Key': _0x41a74d + _0x2206bf(0x1ba) },
                    { 'Key': _0x41a74d + _0x2206bf(0x1b6) },
                    { 'Key': _0x41a74d + _0x2206bf(0x1b7) },
                    { 'Key': _0x41a74d + _0x2206bf(0x1b8) }
                ];
            return expect(_0x654e5c['getObjectMetadata'](_0x581056))['to']['be']['fulfilled'][_0x2206bf(0x19d)](() => {
                const _0x280602 = _0x2206bf;
                expect(_0x2097da[_0x280602(0x1bd)])['to'][_0x280602(0x1a3)](0x4), expect(_0x2097da)['to'][_0x280602(0x1a1)][_0x280602(0x19f)]['calledWithExactly']('S3', _0x280602(0x1be), {
                    'Bucket': _0x654e5c[_0x280602(0x1a8)],
                    'Key': _0x41a74d + _0x280602(0x1ba)
                }), expect(_0x2097da)['to'][_0x280602(0x1a1)][_0x280602(0x19f)][_0x280602(0x1a7)]('S3', 'headObject', {
                    'Bucket': _0x654e5c['bucketName'],
                    'Key': _0x41a74d + '/151224711231-2016-08-18T15:43:00/cloudformation.json'
                }), expect(_0x2097da)['to'][_0x280602(0x1a1)][_0x280602(0x19f)][_0x280602(0x1a7)]('S3', _0x280602(0x1be), {
                    'Bucket': _0x654e5c[_0x280602(0x1a8)],
                    'Key': _0x41a74d + _0x280602(0x1b7)
                }), expect(_0x2097da)['to'][_0x280602(0x1a1)]['been'][_0x280602(0x1a7)]('S3', _0x280602(0x1be), {
                    'Bucket': _0x654e5c[_0x280602(0x1a8)],
                    'Key': _0x41a74d + '/141264711231-2016-08-18T15:42:00/cloudformation.json'
                });
            });
        });
    }), describe('#checkIfDeploymentIsNecessary()', () => {
        const _0x146217 = _0x4aa9d5;
        let _0x3373fc, _0x35f476, _0x34bbd3;
        beforeEach(() => {
            const _0x2de91c = _0x4430;
            _0x3373fc = sandbox[_0x2de91c(0x190)](normalizeFiles, _0x2de91c(0x1bf))[_0x2de91c(0x1c0)](), _0x35f476 = sandbox['stub'](globby, _0x2de91c(0x1c1)), _0x34bbd3 = sandbox[_0x2de91c(0x190)](fs, _0x2de91c(0x1c2))[_0x2de91c(0x1c3)](null, undefined);
        }), afterEach(() => {
            const _0x287006 = _0x4430;
            normalizeFiles[_0x287006(0x1bf)]['restore'](), globby[_0x287006(0x1c1)]['restore'](), fs[_0x287006(0x1c2)]['restore']();
        }), it(_0x146217(0x1bc), () => expect(_0x654e5c[_0x146217(0x196)]())['to']['be'][_0x146217(0x1b5)]['then'](() => {
            const _0x1608b8 = _0x146217;
            expect(_0x3373fc)['to'][_0x1608b8(0x19e)][_0x1608b8(0x1a1)]['been'][_0x1608b8(0x1a0)], expect(_0x35f476)['to'][_0x1608b8(0x19e)][_0x1608b8(0x1a1)][_0x1608b8(0x19f)][_0x1608b8(0x1a0)], expect(_0x34bbd3)['to'][_0x1608b8(0x19e)][_0x1608b8(0x1a1)][_0x1608b8(0x19f)][_0x1608b8(0x1a0)], expect(_0x654e5c[_0x1608b8(0x18a)][_0x1608b8(0x18f)]['log'])['to'][_0x1608b8(0x19e)][_0x1608b8(0x1a1)][_0x1608b8(0x19f)][_0x1608b8(0x1a0)];
        })), it(_0x146217(0x1c4), () => {
            const _0x3aecd4 = _0x146217, _0x3be80e = [];
            return expect(_0x654e5c['checkIfDeploymentIsNecessary'](_0x3be80e))['to']['be'][_0x3aecd4(0x1b5)]['then'](() => {
                const _0x288ada = _0x3aecd4;
                expect(_0x3373fc)['to']['not']['have'][_0x288ada(0x19f)]['called'], expect(_0x35f476)['to'][_0x288ada(0x19e)][_0x288ada(0x1a1)]['been'][_0x288ada(0x1a0)], expect(_0x34bbd3)['to'][_0x288ada(0x19e)][_0x288ada(0x1a1)]['been'][_0x288ada(0x1a0)], expect(_0x654e5c['serverless']['cli']['log'])['to']['not'][_0x288ada(0x1a1)]['been'][_0x288ada(0x1a0)];
            });
        }), it(_0x146217(0x1c5), () => {
            const _0x5a5c5f = _0x146217;
            _0x35f476[_0x5a5c5f(0x1c0)]([_0x5a5c5f(0x1c6)]), _0x33857a['createHash']()['update']()['digest'][_0x5a5c5f(0x1c7)](0x0)[_0x5a5c5f(0x1c0)](_0x5a5c5f(0x1c8));
            const _0x4497f1 = [{ 'Metadata': { 'filesha256': _0x5a5c5f(0x1c9) } }];
            return expect(_0x654e5c['checkIfDeploymentIsNecessary'](_0x4497f1))['to']['be'][_0x5a5c5f(0x1b5)]['then'](() => {
                const _0x254a35 = _0x5a5c5f;
                expect(_0x3373fc)['to'][_0x254a35(0x1a1)]['been']['calledOnce'], expect(_0x35f476)['to'][_0x254a35(0x1a1)][_0x254a35(0x19f)][_0x254a35(0x1ca)], expect(_0x34bbd3)['to']['have'][_0x254a35(0x19f)][_0x254a35(0x1ca)], expect(_0x654e5c[_0x254a35(0x18a)][_0x254a35(0x18f)][_0x254a35(0x1cb)])['to'][_0x254a35(0x19e)][_0x254a35(0x1a1)][_0x254a35(0x19f)][_0x254a35(0x1a0)], expect(_0x3373fc)['to']['have'][_0x254a35(0x19f)][_0x254a35(0x1a7)](_0x654e5c[_0x254a35(0x18a)][_0x254a35(0x188)][_0x254a35(0x1a2)][_0x254a35(0x18b)]), expect(_0x35f476)['to'][_0x254a35(0x1a1)][_0x254a35(0x19f)][_0x254a35(0x1a7)]([_0x254a35(0x1cc)], {
                    'cwd': path['join'](_0x654e5c['serverless']['serviceDir'], '.serverless'),
                    'dot': !![],
                    'silent': !![]
                }), expect(_0x34bbd3)['to'][_0x254a35(0x1a1)][_0x254a35(0x19f)]['calledWith'](path[_0x254a35(0x1cd)](_0x654e5c[_0x254a35(0x18a)][_0x254a35(0x184)], _0x254a35(0x1ce))), expect(_0x654e5c[_0x254a35(0x18a)]['service']['provider'][_0x254a35(0x1cf)])['to'][_0x254a35(0x1a3)](undefined);
            });
        }), it(_0x146217(0x1d0), () => {
            const _0x37130c = _0x146217;
            _0x35f476[_0x37130c(0x1c0)]([_0x37130c(0x1c6)]), _0x33857a[_0x37130c(0x1d1)]()[_0x37130c(0x1d2)]()[_0x37130c(0x1d3)][_0x37130c(0x1c7)](0x0)[_0x37130c(0x1c0)](_0x37130c(0x1c8)), _0x33857a[_0x37130c(0x1d1)]()[_0x37130c(0x1d2)]()[_0x37130c(0x1d3)][_0x37130c(0x1c7)](0x1)[_0x37130c(0x1c0)](_0x37130c(0x1d4));
            const _0x132a15 = [
                { 'Metadata': { 'filesha256': _0x37130c(0x1c9) } },
                { 'Metadata': { 'filesha256': 'remote-hash-zip-file-1' } },
                { 'Metadata': {} }
            ];
            return expect(_0x654e5c[_0x37130c(0x196)](_0x132a15))['to']['be'][_0x37130c(0x1b5)]['then'](() => {
                const _0x58ebee = _0x37130c;
                expect(_0x3373fc)['to'][_0x58ebee(0x1a1)][_0x58ebee(0x19f)]['calledOnce'], expect(_0x35f476)['to'][_0x58ebee(0x1a1)]['been']['calledOnce'], expect(_0x34bbd3)['to'][_0x58ebee(0x1a1)][_0x58ebee(0x19f)][_0x58ebee(0x1ca)], expect(_0x654e5c['serverless'][_0x58ebee(0x18f)]['log'])['to']['not'][_0x58ebee(0x1a1)]['been'][_0x58ebee(0x1a0)], expect(_0x3373fc)['to']['have'][_0x58ebee(0x19f)][_0x58ebee(0x1a7)](_0x654e5c[_0x58ebee(0x18a)]['service'][_0x58ebee(0x1a2)]['compiledCloudFormationTemplate']), expect(_0x35f476)['to'][_0x58ebee(0x1a1)][_0x58ebee(0x19f)][_0x58ebee(0x1a7)](['**.zip'], {
                    'cwd': path[_0x58ebee(0x1b0)](_0x654e5c[_0x58ebee(0x18a)][_0x58ebee(0x184)], '.serverless'),
                    'dot': !![],
                    'silent': !![]
                }), expect(_0x34bbd3)['to'][_0x58ebee(0x1a1)]['been'][_0x58ebee(0x1d5)](path[_0x58ebee(0x1cd)](_0x654e5c['serverless']['serviceDir'], _0x58ebee(0x1ce))), expect(_0x654e5c[_0x58ebee(0x18a)][_0x58ebee(0x188)][_0x58ebee(0x1a2)][_0x58ebee(0x1cf)])['to'][_0x58ebee(0x1a3)](undefined);
            });
        }), it('should\x20not\x20set\x20a\x20flag\x20if\x20remote\x20and\x20local\x20hashes\x20are\x20different', () => {
            const _0x494991 = _0x146217;
            _0x35f476[_0x494991(0x1c0)]([_0x494991(0x1c6)]), _0x33857a[_0x494991(0x1d1)]()[_0x494991(0x1d2)]()['digest']['onCall'](0x0)[_0x494991(0x1c0)](_0x494991(0x1c8)), _0x33857a[_0x494991(0x1d1)]()[_0x494991(0x1d2)]()['digest'][_0x494991(0x1c7)](0x1)[_0x494991(0x1c0)](_0x494991(0x1d4));
            const _0x23697b = [
                { 'Metadata': { 'filesha256': _0x494991(0x1c9) } },
                { 'Metadata': { 'filesha256': _0x494991(0x1d6) } }
            ];
            return expect(_0x654e5c[_0x494991(0x196)](_0x23697b))['to']['be'][_0x494991(0x1b5)][_0x494991(0x19d)](() => {
                const _0x31935f = _0x494991;
                expect(_0x3373fc)['to'][_0x31935f(0x1a1)][_0x31935f(0x19f)][_0x31935f(0x1ca)], expect(_0x35f476)['to'][_0x31935f(0x1a1)][_0x31935f(0x19f)]['calledOnce'], expect(_0x34bbd3)['to'][_0x31935f(0x1a1)][_0x31935f(0x19f)][_0x31935f(0x1ca)], expect(_0x654e5c['serverless']['cli']['log'])['to'][_0x31935f(0x19e)]['have']['been'][_0x31935f(0x1a0)], expect(_0x3373fc)['to'][_0x31935f(0x1a1)][_0x31935f(0x19f)][_0x31935f(0x1a7)](_0x654e5c['serverless']['service'][_0x31935f(0x1a2)][_0x31935f(0x18b)]), expect(_0x35f476)['to'][_0x31935f(0x1a1)][_0x31935f(0x19f)]['calledWithExactly']([_0x31935f(0x1cc)], {
                    'cwd': path[_0x31935f(0x1b0)](_0x654e5c[_0x31935f(0x18a)][_0x31935f(0x184)], _0x31935f(0x1d7)),
                    'dot': !![],
                    'silent': !![]
                }), expect(_0x34bbd3)['to'][_0x31935f(0x1a1)][_0x31935f(0x19f)]['calledWith'](path[_0x31935f(0x1cd)](_0x654e5c[_0x31935f(0x18a)]['serviceDir'], _0x31935f(0x1ce))), expect(_0x654e5c[_0x31935f(0x18a)][_0x31935f(0x188)][_0x31935f(0x1a2)][_0x31935f(0x1cf)])['to'][_0x31935f(0x1a3)](undefined);
            });
        }), it(_0x146217(0x1d8), () => {
            const _0x2edf8f = _0x146217;
            _0x35f476[_0x2edf8f(0x1c0)]([
                _0x2edf8f(0x1d9),
                'func2.zip'
            ]), _0x33857a[_0x2edf8f(0x1d1)]()['update']()[_0x2edf8f(0x1d3)][_0x2edf8f(0x1c7)](0x0)['returns']('remote-hash-cf-template'), _0x33857a[_0x2edf8f(0x1d1)]()['update']()[_0x2edf8f(0x1d3)]['onCall'](0x1)[_0x2edf8f(0x1c0)](_0x2edf8f(0x1d6)), _0x33857a[_0x2edf8f(0x1d1)]()['update']()[_0x2edf8f(0x1d3)][_0x2edf8f(0x1c7)](0x2)[_0x2edf8f(0x1c0)](_0x2edf8f(0x1d6));
            const _0x214514 = [
                { 'Metadata': { 'filesha256': _0x2edf8f(0x1c9) } },
                { 'Metadata': { 'filesha256': _0x2edf8f(0x1d6) } }
            ];
            return expect(_0x654e5c[_0x2edf8f(0x196)](_0x214514))['to']['be']['fulfilled'][_0x2edf8f(0x19d)](() => {
                const _0x406554 = _0x2edf8f;
                expect(_0x3373fc)['to']['have'][_0x406554(0x19f)][_0x406554(0x1ca)], expect(_0x35f476)['to'][_0x406554(0x1a1)][_0x406554(0x19f)]['calledOnce'], expect(_0x34bbd3)['to'][_0x406554(0x1a1)][_0x406554(0x19f)]['calledTwice'], expect(_0x654e5c[_0x406554(0x18a)][_0x406554(0x18f)][_0x406554(0x1cb)])['to'][_0x406554(0x19e)][_0x406554(0x1a1)]['been']['called'], expect(_0x3373fc)['to'][_0x406554(0x1a1)][_0x406554(0x19f)][_0x406554(0x1a7)](_0x654e5c['serverless'][_0x406554(0x188)][_0x406554(0x1a2)][_0x406554(0x18b)]), expect(_0x35f476)['to'][_0x406554(0x1a1)]['been']['calledWithExactly']([_0x406554(0x1cc)], {
                    'cwd': path[_0x406554(0x1b0)](_0x654e5c[_0x406554(0x18a)][_0x406554(0x184)], _0x406554(0x1d7)),
                    'dot': !![],
                    'silent': !![]
                }), expect(_0x34bbd3)['to']['have']['been'][_0x406554(0x1d5)](path[_0x406554(0x1cd)](_0x654e5c[_0x406554(0x18a)][_0x406554(0x184)], '.serverless/func1.zip')), expect(_0x34bbd3)['to'][_0x406554(0x1a1)]['been']['calledWith'](path[_0x406554(0x1cd)](_0x654e5c[_0x406554(0x18a)][_0x406554(0x184)], _0x406554(0x1da))), expect(_0x654e5c[_0x406554(0x18a)][_0x406554(0x188)]['provider'][_0x406554(0x1cf)])['to']['equal'](undefined);
            });
        }), it(_0x146217(0x1db), () => {
            const _0x2c724d = _0x146217;
            _0x35f476[_0x2c724d(0x1c0)](['my-service.zip']), _0x33857a[_0x2c724d(0x1d1)]()['update']()[_0x2c724d(0x1d3)][_0x2c724d(0x1c7)](0x0)['returns'](_0x2c724d(0x1dc)), _0x33857a['createHash']()['update']()['digest'][_0x2c724d(0x1c7)](0x1)[_0x2c724d(0x1c0)](_0x2c724d(0x1dd));
            const _0x31364a = new Date(), _0x55ca39 = new Date(new Date()['getTime']() - 0x186a0), _0x1caa3d = new Date(new Date()[_0x2c724d(0x1de)]() + 0x186a0), _0x453a82 = [
                    {
                        'Metadata': { 'filesha256': _0x2c724d(0x1dc) },
                        'LastModified': _0x55ca39
                    },
                    {
                        'Metadata': { 'filesha256': _0x2c724d(0x1dd) },
                        'LastModified': _0x1caa3d
                    }
                ];
            return expect(_0x654e5c[_0x2c724d(0x196)](_0x453a82, _0x31364a))['to']['be'][_0x2c724d(0x1b5)]['then'](() => {
                const _0x3b0c06 = _0x2c724d;
                expect(_0x3373fc)['to']['have'][_0x3b0c06(0x19f)][_0x3b0c06(0x1ca)], expect(_0x35f476)['to'][_0x3b0c06(0x1a1)][_0x3b0c06(0x19f)][_0x3b0c06(0x1ca)], expect(_0x34bbd3)['to'][_0x3b0c06(0x1a1)]['been'][_0x3b0c06(0x1ca)], expect(_0x654e5c[_0x3b0c06(0x18a)][_0x3b0c06(0x18f)][_0x3b0c06(0x1cb)])['to']['not'][_0x3b0c06(0x1a1)][_0x3b0c06(0x19f)][_0x3b0c06(0x1a0)], expect(_0x3373fc)['to'][_0x3b0c06(0x1a1)][_0x3b0c06(0x19f)][_0x3b0c06(0x1a7)](_0x654e5c['serverless'][_0x3b0c06(0x188)][_0x3b0c06(0x1a2)][_0x3b0c06(0x18b)]), expect(_0x35f476)['to'][_0x3b0c06(0x1a1)][_0x3b0c06(0x19f)][_0x3b0c06(0x1a7)](['**.zip'], {
                    'cwd': path[_0x3b0c06(0x1b0)](_0x654e5c[_0x3b0c06(0x18a)][_0x3b0c06(0x184)], _0x3b0c06(0x1d7)),
                    'dot': !![],
                    'silent': !![]
                }), expect(_0x34bbd3)['to']['have'][_0x3b0c06(0x19f)][_0x3b0c06(0x1d5)](path['resolve'](_0x654e5c[_0x3b0c06(0x18a)]['serviceDir'], _0x3b0c06(0x1ce))), expect(_0x654e5c['serverless'][_0x3b0c06(0x188)][_0x3b0c06(0x1a2)][_0x3b0c06(0x1cf)])['to']['equal'](undefined);
            });
        }), it(_0x146217(0x1df), () => {
            const _0x3c9c6c = _0x146217;
            _0x35f476[_0x3c9c6c(0x1c0)]([_0x3c9c6c(0x1c6)]), _0x33857a[_0x3c9c6c(0x1d1)]()[_0x3c9c6c(0x1d2)]()['digest'][_0x3c9c6c(0x1c7)](0x0)['returns']('hash-cf-template'), _0x33857a[_0x3c9c6c(0x1d1)]()[_0x3c9c6c(0x1d2)]()['digest'][_0x3c9c6c(0x1c7)](0x1)[_0x3c9c6c(0x1c0)](_0x3c9c6c(0x1dd));
            const _0x5e7a26 = [
                { 'Metadata': { 'filesha256': _0x3c9c6c(0x1dc) } },
                { 'Metadata': { 'filesha256': _0x3c9c6c(0x1dd) } }
            ];
            return expect(_0x654e5c[_0x3c9c6c(0x196)](_0x5e7a26))['to']['be'][_0x3c9c6c(0x1b5)]['then'](() => {
                const _0x576b3f = _0x3c9c6c;
                expect(_0x3373fc)['to']['have'][_0x576b3f(0x19f)][_0x576b3f(0x1ca)], expect(_0x35f476)['to'][_0x576b3f(0x1a1)]['been']['calledOnce'], expect(_0x34bbd3)['to'][_0x576b3f(0x1a1)][_0x576b3f(0x19f)][_0x576b3f(0x1ca)], expect(_0x654e5c['serverless'][_0x576b3f(0x18f)][_0x576b3f(0x1cb)])['to'][_0x576b3f(0x1a1)]['been'][_0x576b3f(0x1ca)], expect(_0x3373fc)['to'][_0x576b3f(0x1a1)][_0x576b3f(0x19f)][_0x576b3f(0x1a7)](_0x654e5c[_0x576b3f(0x18a)][_0x576b3f(0x188)]['provider']['compiledCloudFormationTemplate']), expect(_0x35f476)['to'][_0x576b3f(0x1a1)][_0x576b3f(0x19f)][_0x576b3f(0x1a7)]([_0x576b3f(0x1cc)], {
                    'cwd': path[_0x576b3f(0x1b0)](_0x654e5c['serverless'][_0x576b3f(0x184)], _0x576b3f(0x1d7)),
                    'dot': !![],
                    'silent': !![]
                }), expect(_0x34bbd3)['to'][_0x576b3f(0x1a1)][_0x576b3f(0x19f)]['calledWith'](path[_0x576b3f(0x1cd)](_0x654e5c[_0x576b3f(0x18a)][_0x576b3f(0x184)], _0x576b3f(0x1ce))), expect(_0x654e5c[_0x576b3f(0x18a)][_0x576b3f(0x188)]['provider']['shouldNotDeploy'])['to']['equal'](!![]);
            });
        }), it(_0x146217(0x1e0), () => {
            const _0x2811be = _0x146217;
            _0x35f476[_0x2811be(0x1c0)]([_0x2811be(0x1c6)]), _0x33857a['createHash']()['update']()['digest'][_0x2811be(0x1c7)](0x0)[_0x2811be(0x1c0)](_0x2811be(0x1dc)), _0x33857a[_0x2811be(0x1d1)]()['update']()[_0x2811be(0x1d3)][_0x2811be(0x1c7)](0x1)['returns'](_0x2811be(0x1dd));
            const _0x166825 = new Date(new Date()[_0x2811be(0x1de)]() - 0x186a0), _0x267a91 = new Date(new Date()[_0x2811be(0x1de)]() - 0x30d40), _0x50bcb3 = [
                    {
                        'Metadata': { 'filesha256': 'hash-cf-template' },
                        'LastModified': _0x267a91
                    },
                    {
                        'Metadata': { 'filesha256': _0x2811be(0x1dd) },
                        'LastModified': _0x267a91
                    }
                ];
            return expect(_0x654e5c['checkIfDeploymentIsNecessary'](_0x50bcb3, _0x166825))['to']['be']['fulfilled'][_0x2811be(0x19d)](() => {
                const _0x4bf342 = _0x2811be;
                expect(_0x3373fc)['to'][_0x4bf342(0x1a1)][_0x4bf342(0x19f)][_0x4bf342(0x1ca)], expect(_0x35f476)['to']['have']['been'][_0x4bf342(0x1ca)], expect(_0x34bbd3)['to'][_0x4bf342(0x1a1)]['been'][_0x4bf342(0x1ca)], expect(_0x654e5c[_0x4bf342(0x18a)][_0x4bf342(0x18f)][_0x4bf342(0x1cb)])['to'][_0x4bf342(0x1a1)][_0x4bf342(0x19f)]['calledOnce'], expect(_0x3373fc)['to']['have'][_0x4bf342(0x19f)][_0x4bf342(0x1a7)](_0x654e5c[_0x4bf342(0x18a)][_0x4bf342(0x188)][_0x4bf342(0x1a2)][_0x4bf342(0x18b)]), expect(_0x35f476)['to'][_0x4bf342(0x1a1)]['been'][_0x4bf342(0x1a7)](['**.zip'], {
                    'cwd': path[_0x4bf342(0x1b0)](_0x654e5c[_0x4bf342(0x18a)][_0x4bf342(0x184)], _0x4bf342(0x1d7)),
                    'dot': !![],
                    'silent': !![]
                }), expect(_0x34bbd3)['to'][_0x4bf342(0x1a1)][_0x4bf342(0x19f)][_0x4bf342(0x1d5)](path[_0x4bf342(0x1cd)](_0x654e5c['serverless'][_0x4bf342(0x184)], _0x4bf342(0x1ce))), expect(_0x654e5c[_0x4bf342(0x18a)][_0x4bf342(0x188)][_0x4bf342(0x1a2)][_0x4bf342(0x1cf)])['to'][_0x4bf342(0x1a3)](!![]);
            });
        }), it(_0x146217(0x1e1), () => {
            const _0x1d5ef7 = _0x146217;
            _0x35f476['returns']([
                _0x1d5ef7(0x1d9),
                _0x1d5ef7(0x1e2)
            ]), _0x33857a['createHash']()[_0x1d5ef7(0x1d2)]()[_0x1d5ef7(0x1d3)][_0x1d5ef7(0x1c7)](0x0)[_0x1d5ef7(0x1c0)](_0x1d5ef7(0x1dc)), _0x33857a[_0x1d5ef7(0x1d1)]()['update']()['digest']['onCall'](0x1)['returns'](_0x1d5ef7(0x1dd)), _0x33857a[_0x1d5ef7(0x1d1)]()['update']()[_0x1d5ef7(0x1d3)][_0x1d5ef7(0x1c7)](0x2)[_0x1d5ef7(0x1c0)]('hash-zip-file-1');
            const _0x394260 = [
                { 'Metadata': { 'filesha256': 'hash-cf-template' } },
                { 'Metadata': { 'filesha256': _0x1d5ef7(0x1dd) } },
                { 'Metadata': { 'filesha256': _0x1d5ef7(0x1dd) } }
            ];
            return expect(_0x654e5c['checkIfDeploymentIsNecessary'](_0x394260))['to']['be'][_0x1d5ef7(0x1b5)]['then'](() => {
                const _0x327849 = _0x1d5ef7;
                expect(_0x3373fc)['to'][_0x327849(0x1a1)]['been']['calledOnce'], expect(_0x35f476)['to'][_0x327849(0x1a1)][_0x327849(0x19f)][_0x327849(0x1ca)], expect(_0x34bbd3)['to'][_0x327849(0x1a1)]['been']['calledTwice'], expect(_0x654e5c[_0x327849(0x18a)][_0x327849(0x18f)][_0x327849(0x1cb)])['to'][_0x327849(0x1a1)][_0x327849(0x19f)][_0x327849(0x1ca)], expect(_0x3373fc)['to'][_0x327849(0x1a1)]['been']['calledWithExactly'](_0x654e5c[_0x327849(0x18a)][_0x327849(0x188)][_0x327849(0x1a2)]['compiledCloudFormationTemplate']), expect(_0x35f476)['to'][_0x327849(0x1a1)]['been'][_0x327849(0x1a7)]([_0x327849(0x1cc)], {
                    'cwd': path[_0x327849(0x1b0)](_0x654e5c[_0x327849(0x18a)]['serviceDir'], '.serverless'),
                    'dot': !![],
                    'silent': !![]
                }), expect(_0x34bbd3)['to'][_0x327849(0x1a1)][_0x327849(0x19f)][_0x327849(0x1d5)](path['resolve'](_0x654e5c[_0x327849(0x18a)][_0x327849(0x184)], _0x327849(0x1e3))), expect(_0x34bbd3)['to'][_0x327849(0x1a1)][_0x327849(0x19f)]['calledWith'](path['resolve'](_0x654e5c[_0x327849(0x18a)][_0x327849(0x184)], _0x327849(0x1da))), expect(_0x654e5c[_0x327849(0x18a)][_0x327849(0x188)][_0x327849(0x1a2)][_0x327849(0x1cf)])['to'][_0x327849(0x1a3)](!![]);
            });
        }), it(_0x146217(0x1e4), () => {
            const _0x32b2ec = _0x146217;
            _0x654e5c['serverless'][_0x32b2ec(0x188)][_0x32b2ec(0x1e5)] = { 'artifact': 'foo/bar/my-own.zip' }, _0x35f476[_0x32b2ec(0x1c0)]([]), _0x33857a[_0x32b2ec(0x1d1)]()[_0x32b2ec(0x1d2)]()[_0x32b2ec(0x1d3)]['onCall'](0x0)['returns']('hash-cf-template'), _0x33857a['createHash']()[_0x32b2ec(0x1d2)]()['digest'][_0x32b2ec(0x1c7)](0x1)['returns'](_0x32b2ec(0x1e6));
            const _0x3aad28 = [
                { 'Metadata': { 'filesha256': 'hash-cf-template' } },
                { 'Metadata': { 'filesha256': _0x32b2ec(0x1e7) } }
            ];
            return expect(_0x654e5c['checkIfDeploymentIsNecessary'](_0x3aad28))['to']['be'][_0x32b2ec(0x1b5)][_0x32b2ec(0x19d)](() => {
                const _0x42f5d8 = _0x32b2ec;
                expect(_0x3373fc)['to'][_0x42f5d8(0x1a1)]['been'][_0x42f5d8(0x1ca)], expect(_0x35f476)['to'][_0x42f5d8(0x1a1)]['been'][_0x42f5d8(0x1ca)], expect(_0x34bbd3)['to'][_0x42f5d8(0x1a1)][_0x42f5d8(0x19f)][_0x42f5d8(0x1ca)], expect(_0x654e5c[_0x42f5d8(0x18a)][_0x42f5d8(0x18f)]['log'])[_0x42f5d8(0x19e)]['to']['be']['called'], expect(_0x3373fc)['to']['have']['been']['calledWithExactly'](_0x654e5c[_0x42f5d8(0x18a)][_0x42f5d8(0x188)][_0x42f5d8(0x1a2)]['compiledCloudFormationTemplate']), expect(_0x35f476)['to']['have']['been'][_0x42f5d8(0x1a7)]([_0x42f5d8(0x1cc)], {
                    'cwd': path[_0x42f5d8(0x1b0)](_0x654e5c[_0x42f5d8(0x18a)][_0x42f5d8(0x184)], '.serverless'),
                    'dot': !![],
                    'silent': !![]
                }), expect(_0x34bbd3)['to']['have'][_0x42f5d8(0x19f)][_0x42f5d8(0x1d5)](path[_0x42f5d8(0x1cd)](_0x654e5c['serverless']['serviceDir'], _0x42f5d8(0x1e8))), expect(_0x654e5c['serverless'][_0x42f5d8(0x188)][_0x42f5d8(0x1a2)][_0x42f5d8(0x1cf)])['to'][_0x42f5d8(0x1a3)](undefined);
            });
        });
    });
}), describe(_0x47eb30(0x1e9), () => {
    const _0x46ac50 = _0x47eb30;
    it(_0x46ac50(0x1ea), () => runServerless({
        'fixture': _0x46ac50(0x1eb),
        'command': _0x46ac50(0x1ec),
        'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x46ac50(0x1ed) },
        'lastLifecycleHookName': _0x46ac50(0x1ee),
        'awsRequestStubMap': {
            'CloudFormation': {
                'describeStacks': {},
                'describeStackResource': { 'StackResourceDetail': { 'PhysicalResourceId': _0x46ac50(0x189) } }
            },
            'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x46ac50(0x1ef) } } },
            'S3': {
                'headObject': { 'Metadata': { 'filesha256': 'RRYyTm4Ri8mocpvx44pvas4JKLYtdJS3Z8MOlrZrDXA=' } },
                'listObjectsV2': {
                    'Contents': [{
                            'Key': _0x46ac50(0x1f0),
                            'LastModified': new Date(),
                            'ETag': _0x46ac50(0x1f1),
                            'Size': 0x164,
                            'StorageClass': _0x46ac50(0x1f2)
                        }]
                }
            },
            'STS': {
                'getCallerIdentity': {
                    'ResponseMetadata': { 'RequestId': 'ffffffff-ffff-ffff-ffff-ffffffffffff' },
                    'UserId': _0x46ac50(0x1f3),
                    'Account': '999999999999',
                    'Arn': _0x46ac50(0x1f4)
                }
            }
        }
    })[_0x46ac50(0x19d)](({cfTemplate: _0x1eda1b}) => {
        const _0x13ae52 = _0x46ac50;
        expect(_0x1eda1b['Resources'][_0x13ae52(0x1f5)][_0x13ae52(0x1f6)]['Code'][_0x13ae52(0x1f7)]['endsWith']('/artifact.zip'))['to']['be'][_0x13ae52(0x1f8)];
    }));
});
const commonAwsSdkMock = {
        'CloudFormation': {
            'describeStacks': {},
            'describeStackResource': { 'StackResourceDetail': { 'PhysicalResourceId': _0x47eb30(0x189) } }
        },
        'STS': {
            'getCallerIdentity': {
                'ResponseMetadata': { 'RequestId': 'ffffffff-ffff-ffff-ffff-ffffffffffff' },
                'UserId': _0x47eb30(0x1f3),
                'Account': _0x47eb30(0x1f9),
                'Arn': 'arn:aws:iam::999999999999:user/test'
            }
        }
    }, generateMatchingListObjectsResponse = async _0x4fcf72 => {
        const _0xcdf23e = _0x47eb30, _0xe0d5b9 = _0x4fcf72[_0xcdf23e(0x184)] + _0xcdf23e(0x1fa), _0x24c3d4 = await globby(_0xe0d5b9, { 'expandDirectories': { 'extensions': [_0xcdf23e(0x1fb)] } });
        return _0x24c3d4[_0xcdf23e(0x1fc)](_0xcdf23e(0x1fd)), {
            'Contents': _0x24c3d4[_0xcdf23e(0x1fe)](_0x387f81 => ({
                'Key': 'serverless/test-package-artifact/dev/1589988704359-2020-05-20T15:31:44.359Z/' + _0x387f81,
                'LastModified': new Date(_0xcdf23e(0x1ff))
            }))
        };
    }, generateMatchingHeadObjectResponse = async (_0x156fd0, {Key: _0x1a1c62}) => {
        const _0x3c9edd = _0x47eb30;
        if (path[_0x3c9edd(0x200)](_0x1a1c62) === 'compiled-cloudformation-template.json') {
            const _0x458ebb = _0x156fd0[_0x3c9edd(0x188)][_0x3c9edd(0x1a2)][_0x3c9edd(0x18b)], _0x383b22 = normalizeFiles[_0x3c9edd(0x1bf)](_0x458ebb), _0xc2e58c = crypto[_0x3c9edd(0x1d1)]('sha256')[_0x3c9edd(0x1d2)](JSON['stringify'](_0x383b22))[_0x3c9edd(0x1d3)](_0x3c9edd(0x201));
            return { 'Metadata': { 'filesha256': _0xc2e58c } };
        }
        const _0x532830 = await (async _0x13ec6a => {
            return new Promise(_0x7334de => {
                const _0x1ed2c9 = _0x4430, _0x501119 = crypto[_0x1ed2c9(0x1d1)]('sha256'), _0x1308cb = fs[_0x1ed2c9(0x202)](_0x156fd0[_0x1ed2c9(0x184)] + _0x1ed2c9(0x203) + _0x13ec6a);
                _0x1308cb['on'](_0x1ed2c9(0x204), _0x51507a => _0x501119[_0x1ed2c9(0x1d2)](_0x51507a)), _0x1308cb['on'](_0x1ed2c9(0x205), () => _0x7334de(_0x501119[_0x1ed2c9(0x1d3)](_0x1ed2c9(0x201))));
            });
        })(_0x1a1c62);
        return { 'Metadata': { 'filesha256': _0x532830 } };
    };
describe('test/unit/lib/plugins/aws/deploy/lib/checkForChanges.test.js', () => {
    const _0x1c4107 = _0x47eb30;
    it[_0x1c4107(0x206)](_0x1c4107(0x207), async () => {
        const _0x54e797 = _0x1c4107;
        let _0x3bc3a1;
        await runServerless({
            'fixture': 'checkForChanges',
            'command': 'deploy',
            'lastLifecycleHookName': _0x54e797(0x1ee),
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x54e797(0x1ed) },
            'hooks': { 'beforeInstanceInit': _0xefa518 => _0x3bc3a1 = _0xefa518 },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': '2021-05-20T15:34:16.494+0000' } } },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x3bc3a1),
                    'headObject': async _0x57c362 => generateMatchingHeadObjectResponse(_0x3bc3a1, _0x57c362)
                }
            }
        }), expect(_0x3bc3a1[_0x54e797(0x188)][_0x54e797(0x1a2)][_0x54e797(0x1cf)])['to']['equal'](!![]);
    }), it[_0x1c4107(0x206)](_0x1c4107(0x208), async () => {
        const _0x1d944a = _0x1c4107;
        let _0x573cc8;
        await runServerless({
            'fixture': _0x1d944a(0x181),
            'command': _0x1d944a(0x1ec),
            'options': { 'force': !![] },
            'lastLifecycleHookName': _0x1d944a(0x1ee),
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x1d944a(0x1ed) },
            'hooks': { 'beforeInstanceInit': _0x8bcd97 => _0x573cc8 = _0x8bcd97 },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x1d944a(0x209) } } },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x573cc8),
                    'headObject': async _0x3eb8e4 => generateMatchingHeadObjectResponse(_0x573cc8, _0x3eb8e4)
                }
            }
        }), expect(_0x573cc8[_0x1d944a(0x188)][_0x1d944a(0x1a2)]['shouldNotDeploy'])['to'][_0x1d944a(0x1a3)](![]);
    }), it[_0x1c4107(0x206)](_0x1c4107(0x20a), async () => {
        const _0x4b3358 = _0x1c4107, {serverless: _0x2b9402} = await runServerless({
                'fixture': _0x4b3358(0x20b),
                'command': _0x4b3358(0x1ec),
                'lastLifecycleHookName': _0x4b3358(0x1ee),
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x4b3358(0x1ed) },
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
        expect(_0x2b9402[_0x4b3358(0x188)][_0x4b3358(0x1a2)][_0x4b3358(0x1cf)])['to'][_0x4b3358(0x1a3)](![]);
    }), it[_0x1c4107(0x206)](_0x1c4107(0x20c), async () => {
        const _0x25041d = _0x1c4107;
        let _0x2699ca;
        await runServerless({
            'fixture': _0x25041d(0x181),
            'command': _0x25041d(0x1ec),
            'lastLifecycleHookName': 'aws:deploy:deploy:checkForChanges',
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x25041d(0x1ed) },
            'hooks': { 'beforeInstanceInit': _0x4e7355 => _0x2699ca = _0x4e7355 },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x25041d(0x209) } } },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x2699ca),
                    'headObject': async _0x239170 => generateMatchingHeadObjectResponse(_0x2699ca, _0x239170)
                }
            }
        }), expect(_0x2699ca[_0x25041d(0x188)][_0x25041d(0x1a2)][_0x25041d(0x1cf)])['to']['equal'](!![]);
    }), it[_0x1c4107(0x206)](_0x1c4107(0x20d), async () => {
        const _0xbddd67 = _0x1c4107;
        let _0xdb513e;
        await runServerless({
            'fixture': _0xbddd67(0x181),
            'command': _0xbddd67(0x1ec),
            'lastLifecycleHookName': _0xbddd67(0x1ee),
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0xbddd67(0x1ed) },
            'hooks': { 'beforeInstanceInit': _0x691586 => _0xdb513e = _0x691586 },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': {
                    'getFunction': () => {
                    }
                },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0xdb513e),
                    'headObject': async _0x5ed23a => generateMatchingHeadObjectResponse(_0xdb513e, _0x5ed23a)
                }
            }
        }), expect(_0xdb513e['service']['provider']['shouldNotDeploy'])['to'][_0xbddd67(0x1a3)](![]);
    }), it[_0x1c4107(0x206)]('TODO:\x20should\x20deploy\x20if\x20individually\x20packaged\x20function\x20was\x20removed', async () => {
        const _0x1f7988 = _0x1c4107, {
                fixtureData: {
                    updateConfig: _0x30d15a,
                    servicePath: _0x16ad66
                }
            } = await runServerless({
                'fixture': 'checkForChanges',
                'command': _0x1f7988(0x1e5)
            }), _0x49cd9e = await generateMatchingListObjectsResponse(_0x14b785);
        await _0x30d15a({ 'functions': { 'fnIndividually': null } });
        let _0x14b785;
        await runServerless({
            'cwd': _0x16ad66,
            'command': _0x1f7988(0x1e5),
            'lastLifecycleHookName': 'aws:deploy:deploy:checkForChanges',
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x1f7988(0x1ed) },
            'hooks': { 'beforeInstanceInit': _0x1921ee => _0x14b785 = _0x1921ee },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': '2021-05-20T15:34:16.494+0000' } } },
                'S3': {
                    'listObjectsV2': () => _0x49cd9e,
                    'headObject': async _0xb884c0 => generateMatchingHeadObjectResponse(_0x14b785, _0xb884c0)
                }
            }
        }), expect(_0x14b785[_0x1f7988(0x188)][_0x1f7988(0x1a2)][_0x1f7988(0x1cf)])['to'][_0x1f7988(0x1a3)](![]);
    }), it['skip']('TODO:\x20should\x20deploy\x20if\x20remote\x20hashes\x20are\x20different', async () => {
        const _0x3a7812 = _0x1c4107;
        let _0x4ffa79;
        await runServerless({
            'fixture': _0x3a7812(0x181),
            'command': _0x3a7812(0x1ec),
            'lastLifecycleHookName': _0x3a7812(0x1ee),
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x3a7812(0x1ed) },
            'hooks': { 'beforeInstanceInit': _0x4aff8a => _0x4ffa79 = _0x4aff8a },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x3a7812(0x209) } } },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x4ffa79),
                    'headObject': async _0x2d5179 => generateMatchingHeadObjectResponse(_0x4ffa79, _0x2d5179)
                }
            }
        }), expect(_0x4ffa79[_0x3a7812(0x188)][_0x3a7812(0x1a2)]['shouldNotDeploy'])['to']['equal'](![]);
    }), it['skip'](_0x1c4107(0x20e), async () => {
        const _0x46e25a = _0x1c4107;
        let _0x5498dd;
        await runServerless({
            'fixture': _0x46e25a(0x181),
            'command': _0x46e25a(0x1ec),
            'configExt': { 'package': { 'individually': !![] } },
            'lastLifecycleHookName': _0x46e25a(0x1ee),
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': 'ignore' },
            'hooks': { 'beforeInstanceInit': _0x367f42 => _0x5498dd = _0x367f42 },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': '2021-05-20T15:34:16.494+0000' } } },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x5498dd),
                    'headObject': async _0x307e6e => generateMatchingHeadObjectResponse(_0x5498dd, _0x307e6e)
                }
            }
        }), expect(_0x5498dd[_0x46e25a(0x188)][_0x46e25a(0x1a2)]['shouldNotDeploy'])['to'][_0x46e25a(0x1a3)](![]);
    }), it['skip'](_0x1c4107(0x20f), async () => {
        const _0x1ca941 = _0x1c4107;
        let _0x38fe34;
        await runServerless({
            'fixture': 'checkForChanges',
            'command': _0x1ca941(0x1ec),
            'configExt': { 'package': { 'individually': !![] } },
            'lastLifecycleHookName': _0x1ca941(0x1ee),
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': 'ignore' },
            'hooks': { 'beforeInstanceInit': _0x444811 => _0x38fe34 = _0x444811 },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': {
                    'getFunction': () => {
                    }
                },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x38fe34),
                    'headObject': async _0x131d97 => generateMatchingHeadObjectResponse(_0x38fe34, _0x131d97)
                }
            }
        }), expect(_0x38fe34[_0x1ca941(0x188)][_0x1ca941(0x1a2)]['shouldNotDeploy'])['to'][_0x1ca941(0x1a3)](![]);
    }), it[_0x1c4107(0x206)](_0x1c4107(0x210), async () => {
        const _0xb7eaac = _0x1c4107;
        let _0x16c3dc;
        await runServerless({
            'fixture': _0xb7eaac(0x181),
            'command': _0xb7eaac(0x1ec),
            'configExt': { 'package': { 'artifact': 'artifact.zip' } },
            'lastLifecycleHookName': _0xb7eaac(0x1ee),
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': 'ignore' },
            'hooks': { 'beforeInstanceInit': _0x4a94d7 => _0x16c3dc = _0x4a94d7 },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0xb7eaac(0x209) } } },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x16c3dc),
                    'headObject': async _0x4811ec => generateMatchingHeadObjectResponse(_0x16c3dc, _0x4811ec)
                }
            }
        }), expect(_0x16c3dc['service'][_0xb7eaac(0x1a2)][_0xb7eaac(0x1cf)])['to'][_0xb7eaac(0x1a3)](![]);
    }), it(_0x1c4107(0x211), async () => {
        const _0x409856 = _0x1c4107, {serverless: _0x111021} = await runServerless({
                'fixture': _0x409856(0x212),
                'command': _0x409856(0x1ec),
                'configExt': { 'service': _0x409856(0x213) },
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': 'ignore' },
                'lastLifecycleHookName': 'aws:deploy:deploy:checkForChanges',
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x409856(0x1ef) } } },
                    'S3': {
                        'headObject': (() => {
                            const _0x21f212 = _0x409856, _0x7bf913 = sandbox['stub']();
                            return _0x7bf913['withArgs']({
                                'Bucket': _0x21f212(0x189),
                                'Key': _0x21f212(0x214)
                            })['returns']({ 'Metadata': { 'filesha256': 'pZOdrt6qijT7ITsLQjPP9QwgMAfKA2RuUUSTW+l8wWs=' } }), _0x7bf913[_0x21f212(0x215)]({
                                'Bucket': _0x21f212(0x189),
                                'Key': _0x21f212(0x216)
                            })[_0x21f212(0x1c0)]({ 'Metadata': { 'filesha256': _0x21f212(0x217) } }), _0x7bf913;
                        })(),
                        'listObjectsV2': {
                            'Contents': [
                                {
                                    'Key': _0x409856(0x214),
                                    'LastModified': new Date(),
                                    'ETag': _0x409856(0x1f1),
                                    'Size': 0x164,
                                    'StorageClass': _0x409856(0x1f2)
                                },
                                {
                                    'Key': _0x409856(0x216),
                                    'LastModified': new Date(),
                                    'ETag': _0x409856(0x1f1),
                                    'Size': 0x164,
                                    'StorageClass': _0x409856(0x1f2)
                                }
                            ]
                        }
                    }
                }
            });
        expect(_0x111021['service']['provider']['shouldNotDeploy'])['to'][_0x409856(0x1a3)](!![]);
    }), it(_0x1c4107(0x218), async () => {
        const _0x40fec6 = _0x1c4107, {stdoutData: _0x4fc52b} = await runServerless({
                'fixture': _0x40fec6(0x181),
                'command': _0x40fec6(0x1ec),
                'lastLifecycleHookName': _0x40fec6(0x1ee),
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'Lambda': { 'getFunction': sandbox[_0x40fec6(0x190)]()[_0x40fec6(0x219)]({ 'providerError': { 'statusCode': 0x193 } }) },
                    'S3': { 'listObjectsV2': {} }
                }
            });
        expect(_0x4fc52b)['to'][_0x40fec6(0x21a)]([
            _0x40fec6(0x21b),
            _0x40fec6(0x21c)
        ][_0x40fec6(0x1b0)](''));
    }), it[_0x1c4107(0x206)](_0x1c4107(0x21d), () => {
        const _0x12630d = _0x1c4107;
        return expect(runServerless({
            'fixture': 'checkForChanges',
            'command': _0x12630d(0x1ec),
            'lastLifecycleHookName': _0x12630d(0x1ee),
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': 'ignore' },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'S3': {
                    'listObjectsV2': async () => {
                    }
                }
            }
        }))['to']['eventually']['be']['rejected'][_0x12630d(0x21e)][_0x12630d(0x1a1)][_0x12630d(0x21f)](_0x12630d(0x220));
    }), it[_0x1c4107(0x206)](_0x1c4107(0x221), () => {
        const _0x706096 = _0x1c4107;
        return expect(runServerless({
            'fixture': _0x706096(0x181),
            'command': _0x706096(0x1ec),
            'lastLifecycleHookName': _0x706096(0x1ee),
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x706096(0x1ed) },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'S3': {
                    'listObjectsV2': async () => {
                    }
                }
            }
        }))['to']['eventually']['be']['rejected'][_0x706096(0x21e)][_0x706096(0x1a1)][_0x706096(0x21f)](_0x706096(0x220));
    }), describe(_0x1c4107(0x197), () => {
        const _0x36766f = _0x1c4107;
        it(_0x36766f(0x222), async () => {
            const _0x4f558f = _0x36766f, _0x207cb1 = sandbox[_0x4f558f(0x190)]();
            let _0x5020dc;
            await runServerless({
                'fixture': _0x4f558f(0x181),
                'command': _0x4f558f(0x1ec),
                'configExt': { 'functions': { 'fn1': { 'events': [{ 'cloudwatchLog': _0x4f558f(0x223) }] } } },
                'lastLifecycleHookName': _0x4f558f(0x1ee),
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x4f558f(0x1ed) },
                'hooks': { 'beforeInstanceInit': _0xb00b6 => _0x5020dc = _0xb00b6 },
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x4f558f(0x209) } } },
                    'S3': {
                        'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x5020dc),
                        'headObject': async _0x4cb08d => generateMatchingHeadObjectResponse(_0x5020dc, _0x4cb08d)
                    },
                    'CloudWatchLogs': {
                        'deleteSubscriptionFilter': _0x207cb1,
                        'describeSubscriptionFilters': async () => {
                            const _0x30efa4 = _0x4f558f, _0x1e46a2 = _0x5020dc[_0x30efa4(0x188)][_0x30efa4(0x224)]('fn1')[_0x30efa4(0x225)], _0x3fcffe = _0x5020dc['getProvider'](_0x30efa4(0x187))['naming'];
                            return {
                                'subscriptionFilters': [
                                    {
                                        'filterName': _0x3fcffe[_0x30efa4(0x226)]() + '-' + _0x3fcffe['getCloudWatchLogLogicalId'](_0x30efa4(0x227), 0x1) + _0x30efa4(0x228),
                                        'destinationArn': _0x30efa4(0x229) + _0x1e46a2
                                    },
                                    {
                                        'filterName': _0x3fcffe[_0x30efa4(0x226)]() + '-' + _0x3fcffe['getCloudWatchLogLogicalId'](_0x30efa4(0x22a), 0x1) + _0x30efa4(0x228),
                                        'destinationArn': _0x30efa4(0x22b)
                                    }
                                ]
                            };
                        }
                    }
                }
            }), expect(_0x207cb1)['to'][_0x4f558f(0x19e)][_0x4f558f(0x1a1)][_0x4f558f(0x19f)][_0x4f558f(0x1a0)];
        }), it(_0x36766f(0x22c), async () => {
            const _0x131235 = _0x36766f, _0x16900a = sandbox[_0x131235(0x190)]();
            let _0x420c28;
            await runServerless({
                'fixture': 'checkForChanges',
                'command': _0x131235(0x1ec),
                'configExt': { 'functions': { 'fn1': { 'events': [{ 'cloudwatchLog': _0x131235(0x223) }] } } },
                'lastLifecycleHookName': _0x131235(0x1ee),
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x131235(0x1ed) },
                'hooks': { 'beforeInstanceInit': _0x136329 => _0x420c28 = _0x136329 },
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x131235(0x209) } } },
                    'S3': {
                        'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x420c28),
                        'headObject': async _0x5958a2 => generateMatchingHeadObjectResponse(_0x420c28, _0x5958a2)
                    },
                    'CloudWatchLogs': {
                        'deleteSubscriptionFilter': _0x16900a,
                        'describeSubscriptionFilters': async () => {
                            const _0x30b9 = _0x131235, _0x26957b = _0x420c28[_0x30b9(0x22d)](_0x30b9(0x187))[_0x30b9(0x22e)];
                            return {
                                'subscriptionFilters': [{
                                        'filterName': _0x26957b[_0x30b9(0x226)]() + '-' + _0x26957b[_0x30b9(0x22f)](_0x30b9(0x227), 0x1) + _0x30b9(0x228),
                                        'destinationArn': _0x30b9(0x22b)
                                    }]
                            };
                        }
                    }
                }
            }), expect(_0x16900a)['to'][_0x131235(0x19e)]['have'][_0x131235(0x19f)]['called'];
        }), it(_0x36766f(0x230), async () => {
            const _0x369915 = _0x36766f, _0x42f0f8 = sandbox[_0x369915(0x190)]();
            let _0x450fbb;
            const {awsNaming: _0x54125c} = await runServerless({
                'fixture': _0x369915(0x181),
                'command': _0x369915(0x1ec),
                'configExt': { 'functions': { 'fn1': { 'events': [{ 'cloudwatchLog': _0x369915(0x223) }] } } },
                'lastLifecycleHookName': _0x369915(0x1ee),
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': 'ignore' },
                'hooks': { 'beforeInstanceInit': _0x23a2f0 => _0x450fbb = _0x23a2f0 },
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': '2021-05-20T15:34:16.494+0000' } } },
                    'S3': {
                        'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x450fbb),
                        'headObject': async _0x4e5196 => generateMatchingHeadObjectResponse(_0x450fbb, _0x4e5196)
                    },
                    'CloudWatchLogs': {
                        'deleteSubscriptionFilter': _0x42f0f8,
                        'describeSubscriptionFilters': async () => {
                            const _0xc9b845 = _0x369915, _0x4deae5 = _0x450fbb['getProvider'](_0xc9b845(0x187))[_0xc9b845(0x22e)];
                            return {
                                'subscriptionFilters': [
                                    {
                                        'filterName': _0x4deae5[_0xc9b845(0x226)]() + '-' + _0x4deae5['getCloudWatchLogLogicalId']('Fn2', 0x1) + '-xxxxx',
                                        'destinationArn': _0xc9b845(0x22b)
                                    },
                                    {
                                        'filterName': _0x4deae5[_0xc9b845(0x226)]() + '-' + _0x4deae5['getCloudWatchLogLogicalId'](_0xc9b845(0x22a), 0x2) + '-xxxxx',
                                        'destinationArn': 'arn:aws:lambda:us-east-1:999999999999:function:' + _0x450fbb[_0xc9b845(0x188)][_0xc9b845(0x224)](_0xc9b845(0x231))[_0xc9b845(0x225)]
                                    }
                                ]
                            };
                        }
                    }
                }
            });
            expect(_0x42f0f8)['to'][_0x369915(0x1a1)][_0x369915(0x19f)][_0x369915(0x232)]({
                'logGroupName': _0x369915(0x223),
                'filterName': _0x54125c[_0x369915(0x226)]() + '-' + _0x54125c[_0x369915(0x22f)](_0x369915(0x22a), 0x2) + _0x369915(0x228)
            });
        }), it('should\x20attempt\x20to\x20delete\x20filter\x20if\x20order\x20of\x20cloudwatch\x20events\x20changed', async () => {
            const _0x2b79ce = _0x36766f, _0x91a015 = sandbox['stub']();
            let _0x3c2233;
            const {awsNaming: _0x791dc9} = await runServerless({
                'fixture': _0x2b79ce(0x181),
                'command': _0x2b79ce(0x1ec),
                'configExt': {
                    'functions': {
                        'fn1': {
                            'events': [
                                { 'cloudwatchLog': 'someLogGroupName1' },
                                { 'cloudwatchLog': _0x2b79ce(0x233) }
                            ]
                        }
                    }
                },
                'lastLifecycleHookName': _0x2b79ce(0x1ee),
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x2b79ce(0x1ed) },
                'hooks': { 'beforeInstanceInit': _0x5a89a5 => _0x3c2233 = _0x5a89a5 },
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x2b79ce(0x209) } } },
                    'S3': {
                        'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x3c2233),
                        'headObject': async _0x3a758a => generateMatchingHeadObjectResponse(_0x3c2233, _0x3a758a)
                    },
                    'CloudWatchLogs': {
                        'deleteSubscriptionFilter': _0x91a015,
                        'describeSubscriptionFilters': sandbox['stub']()['onFirstCall']()[_0x2b79ce(0x234)](async () => {
                            const _0x184941 = _0x2b79ce, _0x55b22e = _0x3c2233[_0x184941(0x22d)](_0x184941(0x187))[_0x184941(0x22e)];
                            return {
                                'subscriptionFilters': [{
                                        'filterName': _0x55b22e['getStackName']() + '-' + _0x55b22e['getCloudWatchLogLogicalId'](_0x184941(0x227), 0x1) + _0x184941(0x228),
                                        'destinationArn': _0x184941(0x229) + _0x3c2233[_0x184941(0x188)][_0x184941(0x224)](_0x184941(0x231))[_0x184941(0x225)]
                                    }]
                            };
                        })[_0x2b79ce(0x235)]()[_0x2b79ce(0x234)](async () => {
                            const _0x8938b3 = _0x2b79ce, _0x2d69bd = _0x3c2233[_0x8938b3(0x22d)]('aws')['naming'];
                            return {
                                'subscriptionFilters': [{
                                        'filterName': _0x2d69bd[_0x8938b3(0x226)]() + '-' + _0x2d69bd['getCloudWatchLogLogicalId'](_0x8938b3(0x227), 0x1) + _0x8938b3(0x228),
                                        'destinationArn': _0x8938b3(0x229) + _0x3c2233[_0x8938b3(0x188)][_0x8938b3(0x224)](_0x8938b3(0x231))[_0x8938b3(0x225)]
                                    }]
                            };
                        })
                    }
                }
            });
            expect(_0x91a015)['to'][_0x2b79ce(0x1a1)][_0x2b79ce(0x19f)][_0x2b79ce(0x232)]({
                'logGroupName': _0x2b79ce(0x233),
                'filterName': _0x791dc9[_0x2b79ce(0x226)]() + '-' + _0x791dc9[_0x2b79ce(0x22f)](_0x2b79ce(0x227), 0x1) + '-xxxxx'
            });
        }), it(_0x36766f(0x236), async () => {
            const _0x1d397d = _0x36766f, _0x2160bf = sandbox[_0x1d397d(0x190)]();
            let _0xcc924;
            const {awsNaming: _0xa9f28c} = await runServerless({
                'fixture': 'checkForChanges',
                'command': _0x1d397d(0x1ec),
                'configExt': {
                    'functions': {
                        'fn1': {
                            'events': [
                                { 'cloudwatchLog': 'someLogGroupName' },
                                { 'cloudwatchLog': _0x1d397d(0x223) }
                            ]
                        }
                    }
                },
                'lastLifecycleHookName': _0x1d397d(0x1ee),
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x1d397d(0x1ed) },
                'hooks': { 'beforeInstanceInit': _0x45c8e0 => _0xcc924 = _0x45c8e0 },
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x1d397d(0x209) } } },
                    'S3': {
                        'listObjectsV2': async () => generateMatchingListObjectsResponse(_0xcc924),
                        'headObject': async _0x20bf6e => generateMatchingHeadObjectResponse(_0xcc924, _0x20bf6e)
                    },
                    'CloudWatchLogs': {
                        'deleteSubscriptionFilter': _0x2160bf,
                        'describeSubscriptionFilters': sandbox[_0x1d397d(0x190)]()[_0x1d397d(0x237)]()[_0x1d397d(0x234)](async () => {
                            const _0x4e7fb3 = _0x1d397d, _0x2be86f = _0xcc924[_0x4e7fb3(0x22d)](_0x4e7fb3(0x187))[_0x4e7fb3(0x22e)];
                            return {
                                'subscriptionFilters': [
                                    {
                                        'filterName': _0x2be86f[_0x4e7fb3(0x226)]() + '-' + _0x2be86f[_0x4e7fb3(0x22f)]('Fn1', 0x1) + _0x4e7fb3(0x228),
                                        'destinationArn': _0x4e7fb3(0x22b)
                                    },
                                    {
                                        'filterName': _0x2be86f[_0x4e7fb3(0x226)]() + '-' + _0x2be86f[_0x4e7fb3(0x22f)](_0x4e7fb3(0x227), 0x2) + _0x4e7fb3(0x228),
                                        'destinationArn': _0x4e7fb3(0x22b)
                                    }
                                ]
                            };
                        })
                    }
                }
            });
            expect(_0x2160bf)['to'][_0x1d397d(0x1a1)][_0x1d397d(0x19f)][_0x1d397d(0x238)], expect(_0x2160bf)['to']['have']['been'][_0x1d397d(0x1d5)]({
                'logGroupName': _0x1d397d(0x223),
                'filterName': _0xa9f28c[_0x1d397d(0x226)]() + '-' + _0xa9f28c[_0x1d397d(0x22f)](_0x1d397d(0x227), 0x1) + _0x1d397d(0x228)
            }), expect(_0x2160bf)['to'][_0x1d397d(0x1a1)][_0x1d397d(0x19f)]['calledWith']({
                'logGroupName': _0x1d397d(0x223),
                'filterName': _0xa9f28c[_0x1d397d(0x226)]() + '-' + _0xa9f28c[_0x1d397d(0x22f)](_0x1d397d(0x227), 0x2) + _0x1d397d(0x228)
            });
        }), it(_0x36766f(0x239), async () => {
            const _0x305371 = _0x36766f, _0x1098cb = sandbox[_0x305371(0x190)]();
            let _0x522325;
            await runServerless({
                'fixture': _0x305371(0x181),
                'command': _0x305371(0x1ec),
                'configExt': { 'functions': { 'fn1': { 'events': [{ 'cloudwatchLog': 'someLogGroupName' }] } } },
                'lastLifecycleHookName': _0x305371(0x1ee),
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x305371(0x1ed) },
                'hooks': { 'beforeInstanceInit': _0x3d7dfc => _0x522325 = _0x3d7dfc },
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'STS': {
                        'getCallerIdentity': {
                            'ResponseMetadata': { 'RequestId': _0x305371(0x23a) },
                            'UserId': _0x305371(0x1f3),
                            'Account': _0x305371(0x1f9),
                            'Arn': 'arn:aws-us-gov:iam::999999999999:user/test'
                        }
                    },
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': '2021-05-20T15:34:16.494+0000' } } },
                    'S3': {
                        'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x522325),
                        'headObject': async _0x268910 => generateMatchingHeadObjectResponse(_0x522325, _0x268910)
                    },
                    'CloudWatchLogs': {
                        'describeSubscriptionFilters': sandbox[_0x305371(0x190)]()[_0x305371(0x234)](async () => {
                            const _0x517188 = _0x305371, _0x463015 = _0x522325[_0x517188(0x22d)](_0x517188(0x187))[_0x517188(0x22e)];
                            return {
                                'subscriptionFilters': [{
                                        'filterName': _0x463015['getStackName']() + '-' + _0x463015[_0x517188(0x22f)](_0x517188(0x227), 0x1) + _0x517188(0x228),
                                        'destinationArn': _0x517188(0x23b) + _0x522325[_0x517188(0x188)][_0x517188(0x224)]('fn1')['name']
                                    }]
                            };
                        }),
                        'deleteSubscriptionFilter': _0x1098cb
                    }
                }
            }), expect(_0x1098cb)['to'][_0x305371(0x19e)][_0x305371(0x1a1)][_0x305371(0x19f)][_0x305371(0x1a0)];
        });
    });
});
