'use strict';
const crypto = require('crypto'), fs = require('fs'), path = require('path'), globby = require('globby'), sandbox = require('sinon'), chai = require('chai'), proxyquire = require('proxyquire'), normalizeFiles = require('../../../../../../../lib/plugins/aws/lib/normalizeFiles'), AwsProvider = require('../../../../../../../lib/plugins/aws/provider'), AwsDeploy = require('../../../../../../../lib/plugins/aws/deploy/index'), Serverless = require('../../../../../../../lib/Serverless'), ServerlessError = require('../../../../../../../lib/serverless-error'), runServerless = require('../../../../../../utils/run-serverless');
chai['use'](require('chai-as-promised')), chai['use'](require('sinon-chai'));
const expect = require('chai')['expect'];
describe('checkForChanges', () => {
    let _0x52fd09, _0x139427, _0x23595d, _0x468466, _0x47ee08;
    beforeEach(() => {
        const _0x1beb96 = {
            'stage': 'dev',
            'region': 'us-east-1'
        };
        _0x52fd09 = new Serverless(), _0x52fd09['serviceDir'] = 'my-service', _0x139427 = new AwsProvider(_0x52fd09, _0x1beb96), _0x52fd09['setProvider']('aws', _0x139427), _0x52fd09['service']['service'] = 'my-service', _0x23595d = new AwsDeploy(_0x52fd09, _0x1beb96), _0x23595d['bucketName'] = 'deployment-bucket', _0x23595d['serverless']['service']['provider']['compiledCloudFormationTemplate'] = { 'foo': 'bar' }, _0x468466 = 'serverless/' + _0x52fd09['service']['service'] + '/' + _0x139427['getStage'](), _0x23595d['serverless']['cli'] = { 'log': sandbox['spy']() }, _0x47ee08 = {
            'createHash'() {
                return this;
            },
            'update'() {
                return this;
            },
            'digest': sandbox['stub']()
        };
        const _0x351b5d = proxyquire('../../../../../../../lib/plugins/aws/deploy/lib/checkForChanges.js', { 'crypto': _0x47ee08 });
        Object['assign'](_0x23595d, _0x351b5d);
    }), describe('#checkForChanges()', () => {
        let _0x2dc1b1, _0x260024, _0x3d37b6, _0x3999cc;
        beforeEach(() => {
            _0x2dc1b1 = sandbox['stub'](_0x23595d, 'getMostRecentObjects')['resolves'](), _0x260024 = sandbox['stub'](_0x23595d, 'getObjectMetadata')['resolves'](), _0x3d37b6 = sandbox['stub'](_0x23595d, 'checkIfDeploymentIsNecessary')['resolves'](), _0x3999cc = sandbox['stub'](_0x23595d, 'checkLogGroupSubscriptionFilterResourceLimitExceeded')['resolves']();
        }), afterEach(() => {
            _0x23595d['getMostRecentObjects']['restore'](), _0x23595d['getObjectMetadata']['restore'](), _0x23595d['checkIfDeploymentIsNecessary']['restore'](), _0x23595d['checkLogGroupSubscriptionFilterResourceLimitExceeded']['restore'](), _0x3999cc['restore']();
        }), it('should\x20resolve\x20if\x20the\x20\x22force\x22\x20option\x20is\x20used', () => {
            return _0x23595d['options']['force'] = !![], expect(_0x23595d['checkForChanges']())['to']['be']['fulfilled']['then'](() => {
                expect(_0x2dc1b1)['to']['not']['have']['been']['called'], expect(_0x260024)['to']['not']['have']['been']['called'], expect(_0x3d37b6)['to']['not']['have']['been']['called'], expect(_0x23595d['serverless']['service']['provider']['shouldNotDeploy'])['to']['equal'](![]);
            });
        });
    }), describe('#getMostRecentObjects()', () => {
        let _0x3d3df7;
        beforeEach(() => {
            _0x3d3df7 = sandbox['stub'](_0x23595d['provider'], 'request');
        }), afterEach(() => {
            _0x23595d['provider']['request']['restore']();
        }), it('should\x20resolve\x20if\x20no\x20result\x20is\x20returned', () => {
            return _0x3d3df7['resolves'](), expect(_0x23595d['getMostRecentObjects']())['to']['be']['fulfilled']['then'](_0x436460 => {
                expect(_0x3d3df7)['to']['have']['been']['calledWithExactly']('S3', 'listObjectsV2', {
                    'Bucket': _0x23595d['bucketName'],
                    'Prefix': 'serverless/my-service/dev'
                }), expect(_0x436460)['to']['deep']['equal']([]);
            });
        }), it('should\x20translate\x20error\x20if\x20rejected\x20due\x20to\x20missing\x20bucket', () => {
            return _0x3d3df7['rejects'](new ServerlessError('The\x20specified\x20bucket\x20does\x20not\x20exist')), expect(_0x23595d['getMostRecentObjects']())['to']['be']['rejectedWith']([
                'The\x20serverless\x20deployment\x20bucket\x20\x22' + _0x23595d['bucketName'] + '\x22\x20does\x20not\x20exist.',
                'Create\x20it\x20manually\x20if\x20you\x20want\x20to\x20reuse\x20the\x20CloudFormation\x20stack\x20\x22my-service-dev\x22,',
                'or\x20delete\x20the\x20stack\x20if\x20it\x20is\x20no\x20longer\x20required.'
            ]['join']('\x20'));
        }), it('should\x20throw\x20original\x20error\x20if\x20rejected\x20not\x20due\x20to\x20missing\x20bucket', () => {
            return _0x3d3df7['rejects'](new ServerlessError('Other\x20reason')), expect(_0x23595d['getMostRecentObjects']())['to']['be']['rejectedWith']('Other\x20reason');
        }), it('should\x20resolve\x20if\x20result\x20array\x20is\x20empty', () => {
            const _0x25f768 = { 'Contents': [] };
            return _0x3d3df7['resolves'](_0x25f768), expect(_0x23595d['getMostRecentObjects']())['to']['be']['fulfilled']['then'](_0x1b4f6d => {
                expect(_0x3d3df7)['to']['have']['been']['calledWithExactly']('S3', 'listObjectsV2', {
                    'Bucket': _0x23595d['bucketName'],
                    'Prefix': 'serverless/my-service/dev'
                }), expect(_0x1b4f6d)['to']['deep']['equal']([]);
            });
        }), it('should\x20resolve\x20with\x20the\x20most\x20recently\x20deployed\x20objects', () => {
            const _0x39c8d5 = {
                'Contents': [
                    { 'Key': _0x468466 + '/151224711231-2016-08-18T15:43:00/artifact.zip' },
                    { 'Key': _0x468466 + '/151224711231-2016-08-18T15:43:00/cloudformation.json' },
                    { 'Key': _0x468466 + '/141264711231-2016-08-18T15:42:00/artifact.zip' },
                    { 'Key': _0x468466 + '/141264711231-2016-08-18T15:42:00/cloudformation.json' }
                ]
            };
            return _0x3d3df7['resolves'](_0x39c8d5), expect(_0x23595d['getMostRecentObjects']())['to']['be']['fulfilled']['then'](_0x53e045 => {
                expect(_0x3d3df7)['to']['have']['been']['calledWithExactly']('S3', 'listObjectsV2', {
                    'Bucket': _0x23595d['bucketName'],
                    'Prefix': 'serverless/my-service/dev'
                }), expect(_0x53e045)['to']['deep']['equal']([
                    { 'Key': _0x468466 + '/151224711231-2016-08-18T15:43:00/cloudformation.json' },
                    { 'Key': _0x468466 + '/151224711231-2016-08-18T15:43:00/artifact.zip' }
                ]);
            });
        });
    }), describe('#getObjectMetadata()', () => {
        let _0xa77561;
        beforeEach(() => {
            _0xa77561 = sandbox['stub'](_0x23595d['provider'], 'request')['resolves']();
        }), afterEach(() => {
            _0x23595d['provider']['request']['restore']();
        }), it('should\x20resolve\x20if\x20no\x20input\x20is\x20provided', () => expect(_0x23595d['getObjectMetadata']())['to']['be']['fulfilled']['then'](_0x506fe5 => {
            expect(_0xa77561)['to']['not']['have']['been']['called'], expect(_0x506fe5)['to']['deep']['equal']([]);
        })), it('should\x20resolve\x20if\x20no\x20objects\x20are\x20provided\x20as\x20input', () => {
            const _0x104ac7 = [];
            return expect(_0x23595d['getObjectMetadata'](_0x104ac7))['to']['be']['fulfilled']['then'](_0x5c6151 => {
                expect(_0xa77561)['to']['not']['have']['been']['called'], expect(_0x5c6151)['to']['deep']['equal']([]);
            });
        }), it('should\x20request\x20the\x20object\x20detailed\x20information', () => {
            const _0x219379 = [
                { 'Key': _0x468466 + '/151224711231-2016-08-18T15:43:00/artifact.zip' },
                { 'Key': _0x468466 + '/151224711231-2016-08-18T15:43:00/cloudformation.json' },
                { 'Key': _0x468466 + '/141264711231-2016-08-18T15:42:00/artifact.zip' },
                { 'Key': _0x468466 + '/141264711231-2016-08-18T15:42:00/cloudformation.json' }
            ];
            return expect(_0x23595d['getObjectMetadata'](_0x219379))['to']['be']['fulfilled']['then'](() => {
                expect(_0xa77561['callCount'])['to']['equal'](-0xa55 + 0x144f + 0x1a9 * -0x6), expect(_0xa77561)['to']['have']['been']['calledWithExactly']('S3', 'headObject', {
                    'Bucket': _0x23595d['bucketName'],
                    'Key': _0x468466 + '/151224711231-2016-08-18T15:43:00/artifact.zip'
                }), expect(_0xa77561)['to']['have']['been']['calledWithExactly']('S3', 'headObject', {
                    'Bucket': _0x23595d['bucketName'],
                    'Key': _0x468466 + '/151224711231-2016-08-18T15:43:00/cloudformation.json'
                }), expect(_0xa77561)['to']['have']['been']['calledWithExactly']('S3', 'headObject', {
                    'Bucket': _0x23595d['bucketName'],
                    'Key': _0x468466 + '/141264711231-2016-08-18T15:42:00/artifact.zip'
                }), expect(_0xa77561)['to']['have']['been']['calledWithExactly']('S3', 'headObject', {
                    'Bucket': _0x23595d['bucketName'],
                    'Key': _0x468466 + '/141264711231-2016-08-18T15:42:00/cloudformation.json'
                });
            });
        });
    }), describe('#checkIfDeploymentIsNecessary()', () => {
        let _0x5247bd, _0x224758, _0x32c2fe;
        beforeEach(() => {
            _0x5247bd = sandbox['stub'](normalizeFiles, 'normalizeCloudFormationTemplate')['returns'](), _0x224758 = sandbox['stub'](globby, 'sync'), _0x32c2fe = sandbox['stub'](fs, 'readFile')['yields'](null, undefined);
        }), afterEach(() => {
            normalizeFiles['normalizeCloudFormationTemplate']['restore'](), globby['sync']['restore'](), fs['readFile']['restore']();
        }), it('should\x20resolve\x20if\x20no\x20input\x20is\x20provided', () => expect(_0x23595d['checkIfDeploymentIsNecessary']())['to']['be']['fulfilled']['then'](() => {
            expect(_0x5247bd)['to']['not']['have']['been']['called'], expect(_0x224758)['to']['not']['have']['been']['called'], expect(_0x32c2fe)['to']['not']['have']['been']['called'], expect(_0x23595d['serverless']['cli']['log'])['to']['not']['have']['been']['called'];
        })), it('should\x20resolve\x20if\x20no\x20objects\x20are\x20provided\x20as\x20input', () => {
            const _0x416c92 = [];
            return expect(_0x23595d['checkIfDeploymentIsNecessary'](_0x416c92))['to']['be']['fulfilled']['then'](() => {
                expect(_0x5247bd)['to']['not']['have']['been']['called'], expect(_0x224758)['to']['not']['have']['been']['called'], expect(_0x32c2fe)['to']['not']['have']['been']['called'], expect(_0x23595d['serverless']['cli']['log'])['to']['not']['have']['been']['called'];
            });
        }), it('should\x20resolve\x20if\x20objects\x20are\x20given,\x20but\x20no\x20function\x20last\x20modified\x20date', () => {
            _0x224758['returns'](['my-service.zip']), _0x47ee08['createHash']()['update']()['digest']['onCall'](0x2301 + 0x608 * -0x2 + -0x7 * 0x347)['returns']('local-hash-cf-template');
            const _0x49dd38 = [{ 'Metadata': { 'filesha256': 'remote-hash-cf-template' } }];
            return expect(_0x23595d['checkIfDeploymentIsNecessary'](_0x49dd38))['to']['be']['fulfilled']['then'](() => {
                expect(_0x5247bd)['to']['have']['been']['calledOnce'], expect(_0x224758)['to']['have']['been']['calledOnce'], expect(_0x32c2fe)['to']['have']['been']['calledOnce'], expect(_0x23595d['serverless']['cli']['log'])['to']['not']['have']['been']['called'], expect(_0x5247bd)['to']['have']['been']['calledWithExactly'](_0x23595d['serverless']['service']['provider']['compiledCloudFormationTemplate']), expect(_0x224758)['to']['have']['been']['calledWithExactly'](['**.zip'], {
                    'cwd': path['join'](_0x23595d['serverless']['serviceDir'], '.serverless'),
                    'dot': !![],
                    'silent': !![]
                }), expect(_0x32c2fe)['to']['have']['been']['calledWith'](path['resolve'](_0x23595d['serverless']['serviceDir'], '.serverless/my-service.zip')), expect(_0x23595d['serverless']['service']['provider']['shouldNotDeploy'])['to']['equal'](undefined);
            });
        }), it('should\x20not\x20set\x20a\x20flag\x20if\x20there\x20are\x20more\x20remote\x20hashes', () => {
            _0x224758['returns'](['my-service.zip']), _0x47ee08['createHash']()['update']()['digest']['onCall'](-0x1 * 0xd13 + 0xbe3 + 0x1 * 0x130)['returns']('local-hash-cf-template'), _0x47ee08['createHash']()['update']()['digest']['onCall'](-0x17 * 0x10 + 0x20b5 + 0x2e * -0xae)['returns']('local-hash-zip-file-1');
            const _0x637b18 = [
                { 'Metadata': { 'filesha256': 'remote-hash-cf-template' } },
                { 'Metadata': { 'filesha256': 'remote-hash-zip-file-1' } },
                { 'Metadata': {} }
            ];
            return expect(_0x23595d['checkIfDeploymentIsNecessary'](_0x637b18))['to']['be']['fulfilled']['then'](() => {
                expect(_0x5247bd)['to']['have']['been']['calledOnce'], expect(_0x224758)['to']['have']['been']['calledOnce'], expect(_0x32c2fe)['to']['have']['been']['calledOnce'], expect(_0x23595d['serverless']['cli']['log'])['to']['not']['have']['been']['called'], expect(_0x5247bd)['to']['have']['been']['calledWithExactly'](_0x23595d['serverless']['service']['provider']['compiledCloudFormationTemplate']), expect(_0x224758)['to']['have']['been']['calledWithExactly'](['**.zip'], {
                    'cwd': path['join'](_0x23595d['serverless']['serviceDir'], '.serverless'),
                    'dot': !![],
                    'silent': !![]
                }), expect(_0x32c2fe)['to']['have']['been']['calledWith'](path['resolve'](_0x23595d['serverless']['serviceDir'], '.serverless/my-service.zip')), expect(_0x23595d['serverless']['service']['provider']['shouldNotDeploy'])['to']['equal'](undefined);
            });
        }), it('should\x20not\x20set\x20a\x20flag\x20if\x20remote\x20and\x20local\x20hashes\x20are\x20different', () => {
            _0x224758['returns'](['my-service.zip']), _0x47ee08['createHash']()['update']()['digest']['onCall'](0x37 * 0x5 + -0xe6f + -0x23a * -0x6)['returns']('local-hash-cf-template'), _0x47ee08['createHash']()['update']()['digest']['onCall'](-0xa5b + -0x10 * -0x189 + -0x3 * 0x4bc)['returns']('local-hash-zip-file-1');
            const _0x17d5c8 = [
                { 'Metadata': { 'filesha256': 'remote-hash-cf-template' } },
                { 'Metadata': { 'filesha256': 'remote-hash-zip-file-1' } }
            ];
            return expect(_0x23595d['checkIfDeploymentIsNecessary'](_0x17d5c8))['to']['be']['fulfilled']['then'](() => {
                expect(_0x5247bd)['to']['have']['been']['calledOnce'], expect(_0x224758)['to']['have']['been']['calledOnce'], expect(_0x32c2fe)['to']['have']['been']['calledOnce'], expect(_0x23595d['serverless']['cli']['log'])['to']['not']['have']['been']['called'], expect(_0x5247bd)['to']['have']['been']['calledWithExactly'](_0x23595d['serverless']['service']['provider']['compiledCloudFormationTemplate']), expect(_0x224758)['to']['have']['been']['calledWithExactly'](['**.zip'], {
                    'cwd': path['join'](_0x23595d['serverless']['serviceDir'], '.serverless'),
                    'dot': !![],
                    'silent': !![]
                }), expect(_0x32c2fe)['to']['have']['been']['calledWith'](path['resolve'](_0x23595d['serverless']['serviceDir'], '.serverless/my-service.zip')), expect(_0x23595d['serverless']['service']['provider']['shouldNotDeploy'])['to']['equal'](undefined);
            });
        }), it('should\x20not\x20set\x20a\x20flag\x20if\x20remote\x20and\x20local\x20hashes\x20are\x20the\x20same\x20but\x20are\x20duplicated', () => {
            _0x224758['returns']([
                'func1.zip',
                'func2.zip'
            ]), _0x47ee08['createHash']()['update']()['digest']['onCall'](0x21b3 * 0x1 + -0x12b9 + -0xefa)['returns']('remote-hash-cf-template'), _0x47ee08['createHash']()['update']()['digest']['onCall'](-0x1c3e + -0x186 + -0x1dc5 * -0x1)['returns']('remote-hash-zip-file-1'), _0x47ee08['createHash']()['update']()['digest']['onCall'](-0x1d8a + -0x1 * 0x6e9 + 0x2475)['returns']('remote-hash-zip-file-1');
            const _0x22e750 = [
                { 'Metadata': { 'filesha256': 'remote-hash-cf-template' } },
                { 'Metadata': { 'filesha256': 'remote-hash-zip-file-1' } }
            ];
            return expect(_0x23595d['checkIfDeploymentIsNecessary'](_0x22e750))['to']['be']['fulfilled']['then'](() => {
                expect(_0x5247bd)['to']['have']['been']['calledOnce'], expect(_0x224758)['to']['have']['been']['calledOnce'], expect(_0x32c2fe)['to']['have']['been']['calledTwice'], expect(_0x23595d['serverless']['cli']['log'])['to']['not']['have']['been']['called'], expect(_0x5247bd)['to']['have']['been']['calledWithExactly'](_0x23595d['serverless']['service']['provider']['compiledCloudFormationTemplate']), expect(_0x224758)['to']['have']['been']['calledWithExactly'](['**.zip'], {
                    'cwd': path['join'](_0x23595d['serverless']['serviceDir'], '.serverless'),
                    'dot': !![],
                    'silent': !![]
                }), expect(_0x32c2fe)['to']['have']['been']['calledWith'](path['resolve'](_0x23595d['serverless']['serviceDir'], '.serverless/func1.zip')), expect(_0x32c2fe)['to']['have']['been']['calledWith'](path['resolve'](_0x23595d['serverless']['serviceDir'], '.serverless/func2.zip')), expect(_0x23595d['serverless']['service']['provider']['shouldNotDeploy'])['to']['equal'](undefined);
            });
        }), it('should\x20not\x20set\x20a\x20flag\x20if\x20the\x20hashes\x20are\x20equal,\x20but\x20the\x20objects\x20were\x20modified\x20after\x20their\x20functions', () => {
            _0x224758['returns'](['my-service.zip']), _0x47ee08['createHash']()['update']()['digest']['onCall'](0x46a * -0x7 + -0xb * -0xfa + 0x1428)['returns']('hash-cf-template'), _0x47ee08['createHash']()['update']()['digest']['onCall'](-0x125e + -0x2625 + 0x3884)['returns']('hash-zip-file-1');
            const _0x572db1 = new Date(), _0x3fbd48 = new Date(new Date()['getTime']() - (-0x14444 * 0x2 + 0x81 * 0x7d + 0x3d02b)), _0x170670 = new Date(new Date()['getTime']() + (0x5 * -0x61 + -0x3 * -0xb056 + -0x2d7f * 0x3)), _0x3a9f6c = [
                    {
                        'Metadata': { 'filesha256': 'hash-cf-template' },
                        'LastModified': _0x3fbd48
                    },
                    {
                        'Metadata': { 'filesha256': 'hash-zip-file-1' },
                        'LastModified': _0x170670
                    }
                ];
            return expect(_0x23595d['checkIfDeploymentIsNecessary'](_0x3a9f6c, _0x572db1))['to']['be']['fulfilled']['then'](() => {
                expect(_0x5247bd)['to']['have']['been']['calledOnce'], expect(_0x224758)['to']['have']['been']['calledOnce'], expect(_0x32c2fe)['to']['have']['been']['calledOnce'], expect(_0x23595d['serverless']['cli']['log'])['to']['not']['have']['been']['called'], expect(_0x5247bd)['to']['have']['been']['calledWithExactly'](_0x23595d['serverless']['service']['provider']['compiledCloudFormationTemplate']), expect(_0x224758)['to']['have']['been']['calledWithExactly'](['**.zip'], {
                    'cwd': path['join'](_0x23595d['serverless']['serviceDir'], '.serverless'),
                    'dot': !![],
                    'silent': !![]
                }), expect(_0x32c2fe)['to']['have']['been']['calledWith'](path['resolve'](_0x23595d['serverless']['serviceDir'], '.serverless/my-service.zip')), expect(_0x23595d['serverless']['service']['provider']['shouldNotDeploy'])['to']['equal'](undefined);
            });
        }), it('should\x20set\x20a\x20flag\x20if\x20the\x20remote\x20and\x20local\x20hashes\x20are\x20equal', () => {
            _0x224758['returns'](['my-service.zip']), _0x47ee08['createHash']()['update']()['digest']['onCall'](-0xbb7 + -0x5c9 * 0x6 + -0x949 * -0x5)['returns']('hash-cf-template'), _0x47ee08['createHash']()['update']()['digest']['onCall'](0x14ba * 0x1 + -0x3 * 0x947 + 0x71c)['returns']('hash-zip-file-1');
            const _0x2c9865 = [
                { 'Metadata': { 'filesha256': 'hash-cf-template' } },
                { 'Metadata': { 'filesha256': 'hash-zip-file-1' } }
            ];
            return expect(_0x23595d['checkIfDeploymentIsNecessary'](_0x2c9865))['to']['be']['fulfilled']['then'](() => {
                expect(_0x5247bd)['to']['have']['been']['calledOnce'], expect(_0x224758)['to']['have']['been']['calledOnce'], expect(_0x32c2fe)['to']['have']['been']['calledOnce'], expect(_0x23595d['serverless']['cli']['log'])['to']['have']['been']['calledOnce'], expect(_0x5247bd)['to']['have']['been']['calledWithExactly'](_0x23595d['serverless']['service']['provider']['compiledCloudFormationTemplate']), expect(_0x224758)['to']['have']['been']['calledWithExactly'](['**.zip'], {
                    'cwd': path['join'](_0x23595d['serverless']['serviceDir'], '.serverless'),
                    'dot': !![],
                    'silent': !![]
                }), expect(_0x32c2fe)['to']['have']['been']['calledWith'](path['resolve'](_0x23595d['serverless']['serviceDir'], '.serverless/my-service.zip')), expect(_0x23595d['serverless']['service']['provider']['shouldNotDeploy'])['to']['equal'](!![]);
            });
        }), it('should\x20set\x20a\x20flag\x20if\x20the\x20remote\x20and\x20local\x20hashes\x20are\x20equal,\x20and\x20the\x20edit\x20times\x20are\x20ordered', () => {
            _0x224758['returns'](['my-service.zip']), _0x47ee08['createHash']()['update']()['digest']['onCall'](0x3 * 0x217 + -0xfaf + 0x96a)['returns']('hash-cf-template'), _0x47ee08['createHash']()['update']()['digest']['onCall'](0x1117 + -0x1c5d + 0x1 * 0xb47)['returns']('hash-zip-file-1');
            const _0x2b5b33 = new Date(new Date()['getTime']() - (-0x23edc + -0x26de * -0x9 + -0x2d3 * -0xda)), _0x1fd0db = new Date(new Date()['getTime']() - (-0x1 * 0x4a1ef + 0x19ac7 + 0x1c * 0x3796)), _0x4bdec2 = [
                    {
                        'Metadata': { 'filesha256': 'hash-cf-template' },
                        'LastModified': _0x1fd0db
                    },
                    {
                        'Metadata': { 'filesha256': 'hash-zip-file-1' },
                        'LastModified': _0x1fd0db
                    }
                ];
            return expect(_0x23595d['checkIfDeploymentIsNecessary'](_0x4bdec2, _0x2b5b33))['to']['be']['fulfilled']['then'](() => {
                expect(_0x5247bd)['to']['have']['been']['calledOnce'], expect(_0x224758)['to']['have']['been']['calledOnce'], expect(_0x32c2fe)['to']['have']['been']['calledOnce'], expect(_0x23595d['serverless']['cli']['log'])['to']['have']['been']['calledOnce'], expect(_0x5247bd)['to']['have']['been']['calledWithExactly'](_0x23595d['serverless']['service']['provider']['compiledCloudFormationTemplate']), expect(_0x224758)['to']['have']['been']['calledWithExactly'](['**.zip'], {
                    'cwd': path['join'](_0x23595d['serverless']['serviceDir'], '.serverless'),
                    'dot': !![],
                    'silent': !![]
                }), expect(_0x32c2fe)['to']['have']['been']['calledWith'](path['resolve'](_0x23595d['serverless']['serviceDir'], '.serverless/my-service.zip')), expect(_0x23595d['serverless']['service']['provider']['shouldNotDeploy'])['to']['equal'](!![]);
            });
        }), it('should\x20set\x20a\x20flag\x20if\x20the\x20remote\x20and\x20local\x20hashes\x20are\x20duplicated\x20and\x20equal', () => {
            _0x224758['returns']([
                'func1.zip',
                'func2.zip'
            ]), _0x47ee08['createHash']()['update']()['digest']['onCall'](0x2267 + -0x1e27 + 0x110 * -0x4)['returns']('hash-cf-template'), _0x47ee08['createHash']()['update']()['digest']['onCall'](0x35 * -0x3d + 0x1e22 + -0x40 * 0x46)['returns']('hash-zip-file-1'), _0x47ee08['createHash']()['update']()['digest']['onCall'](-0x1811 + 0x2264 + -0xa51)['returns']('hash-zip-file-1');
            const _0x7af9b7 = [
                { 'Metadata': { 'filesha256': 'hash-cf-template' } },
                { 'Metadata': { 'filesha256': 'hash-zip-file-1' } },
                { 'Metadata': { 'filesha256': 'hash-zip-file-1' } }
            ];
            return expect(_0x23595d['checkIfDeploymentIsNecessary'](_0x7af9b7))['to']['be']['fulfilled']['then'](() => {
                expect(_0x5247bd)['to']['have']['been']['calledOnce'], expect(_0x224758)['to']['have']['been']['calledOnce'], expect(_0x32c2fe)['to']['have']['been']['calledTwice'], expect(_0x23595d['serverless']['cli']['log'])['to']['have']['been']['calledOnce'], expect(_0x5247bd)['to']['have']['been']['calledWithExactly'](_0x23595d['serverless']['service']['provider']['compiledCloudFormationTemplate']), expect(_0x224758)['to']['have']['been']['calledWithExactly'](['**.zip'], {
                    'cwd': path['join'](_0x23595d['serverless']['serviceDir'], '.serverless'),
                    'dot': !![],
                    'silent': !![]
                }), expect(_0x32c2fe)['to']['have']['been']['calledWith'](path['resolve'](_0x23595d['serverless']['serviceDir'], '.serverless/func1.zip')), expect(_0x32c2fe)['to']['have']['been']['calledWith'](path['resolve'](_0x23595d['serverless']['serviceDir'], '.serverless/func2.zip')), expect(_0x23595d['serverless']['service']['provider']['shouldNotDeploy'])['to']['equal'](!![]);
            });
        }), it('should\x20not\x20set\x20a\x20flag\x20if\x20the\x20remote\x20and\x20local\x20hashes\x20are\x20different\x20for\x20package.artifact', () => {
            _0x23595d['serverless']['service']['package'] = { 'artifact': 'foo/bar/my-own.zip' }, _0x224758['returns']([]), _0x47ee08['createHash']()['update']()['digest']['onCall'](0x1db1 + 0x1f4f + -0x7a0 * 0x8)['returns']('hash-cf-template'), _0x47ee08['createHash']()['update']()['digest']['onCall'](-0xea4 + 0x18bb + -0xa16)['returns']('local-my-own-hash');
            const _0x2868e8 = [
                { 'Metadata': { 'filesha256': 'hash-cf-template' } },
                { 'Metadata': { 'filesha256': 'remote-my-own-hash' } }
            ];
            return expect(_0x23595d['checkIfDeploymentIsNecessary'](_0x2868e8))['to']['be']['fulfilled']['then'](() => {
                expect(_0x5247bd)['to']['have']['been']['calledOnce'], expect(_0x224758)['to']['have']['been']['calledOnce'], expect(_0x32c2fe)['to']['have']['been']['calledOnce'], expect(_0x23595d['serverless']['cli']['log'])['not']['to']['be']['called'], expect(_0x5247bd)['to']['have']['been']['calledWithExactly'](_0x23595d['serverless']['service']['provider']['compiledCloudFormationTemplate']), expect(_0x224758)['to']['have']['been']['calledWithExactly'](['**.zip'], {
                    'cwd': path['join'](_0x23595d['serverless']['serviceDir'], '.serverless'),
                    'dot': !![],
                    'silent': !![]
                }), expect(_0x32c2fe)['to']['have']['been']['calledWith'](path['resolve'](_0x23595d['serverless']['serviceDir'], 'foo/bar/my-own.zip')), expect(_0x23595d['serverless']['service']['provider']['shouldNotDeploy'])['to']['equal'](undefined);
            });
        });
    });
}), describe('checkForChanges\x20#2', () => {
    it('Should\x20recognize\x20package.artifact', () => runServerless({
        'fixture': 'packageArtifact',
        'command': 'deploy',
        'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': 'ignore' },
        'lastLifecycleHookName': 'aws:deploy:deploy:checkForChanges',
        'awsRequestStubMap': {
            'CloudFormation': {
                'describeStacks': {},
                'describeStackResource': { 'StackResourceDetail': { 'PhysicalResourceId': 'deployment-bucket' } }
            },
            'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': '2020-05-20T15:34:16.494+0000' } } },
            'S3': {
                'headObject': { 'Metadata': { 'filesha256': 'RRYyTm4Ri8mocpvx44pvas4JKLYtdJS3Z8MOlrZrDXA=' } },
                'listObjectsV2': {
                    'Contents': [{
                            'Key': 'serverless/test-package-artifact/dev/1589988704359-2020-05-20T15:31:44.359Z/artifact.zip',
                            'LastModified': new Date(),
                            'ETag': '\x225102a4cf710cae6497dba9e61b85d0a4\x22',
                            'Size': 0x164,
                            'StorageClass': 'STANDARD'
                        }]
                }
            },
            'STS': {
                'getCallerIdentity': {
                    'ResponseMetadata': { 'RequestId': 'ffffffff-ffff-ffff-ffff-ffffffffffff' },
                    'UserId': 'XXXXXXXXXXXXXXXXXXXXX',
                    'Account': '999999999999',
                    'Arn': 'arn:aws:iam::999999999999:user/test'
                }
            }
        }
    })['then'](({cfTemplate: _0x5ce08c}) => {
        expect(_0x5ce08c['Resources']['FooLambdaFunction']['Properties']['Code']['S3Key']['endsWith']('/artifact.zip'))['to']['be']['true'];
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
                'UserId': 'XXXXXXXXXXXXXXXXXXXXX',
                'Account': '999999999999',
                'Arn': 'arn:aws:iam::999999999999:user/test'
            }
        }
    }, generateMatchingListObjectsResponse = async _0x1a7be9 => {
        const _0x4f5c08 = _0x1a7be9['serviceDir'] + '/.serverless', _0x55d6c5 = await globby(_0x4f5c08, { 'expandDirectories': { 'extensions': ['zip'] } });
        return _0x55d6c5['push']('compiled-cloudformation-template.json'), {
            'Contents': _0x55d6c5['map'](_0x2134fb => ({
                'Key': 'serverless/test-package-artifact/dev/1589988704359-2020-05-20T15:31:44.359Z/' + _0x2134fb,
                'LastModified': new Date('2020-05-20T15:30:16.494+0000')
            }))
        };
    }, generateMatchingHeadObjectResponse = async (_0x1eed2b, {Key: _0x44fe04}) => {
        if (path['basename'](_0x44fe04) === 'compiled-cloudformation-template.json') {
            const _0x55db39 = _0x1eed2b['service']['provider']['compiledCloudFormationTemplate'], _0x407bd4 = normalizeFiles['normalizeCloudFormationTemplate'](_0x55db39), _0x2977f5 = crypto['createHash']('sha256')['update'](JSON['stringify'](_0x407bd4))['digest']('base64');
            return { 'Metadata': { 'filesha256': _0x2977f5 } };
        }
        const _0x5d045d = await (async _0x41eedc => {
            return new Promise(_0x5096d8 => {
                const _0x2fd6b8 = crypto['createHash']('sha256'), _0x1df798 = fs['createReadStream'](_0x1eed2b['serviceDir'] + '/.serverless/' + _0x41eedc);
                _0x1df798['on']('data', _0xce8447 => _0x2fd6b8['update'](_0xce8447)), _0x1df798['on']('close', () => _0x5096d8(_0x2fd6b8['digest']('base64')));
            });
        })(_0x44fe04);
        return { 'Metadata': { 'filesha256': _0x5d045d } };
    };
describe('test/unit/lib/plugins/aws/deploy/lib/checkForChanges.test.js', () => {
    it['skip']('TODO:\x20should\x20not\x20deploy\x20if\x20artifacts\x20in\x20bucket\x20are\x20same\x20as\x20locally\x20and\x20modification\x20dates\x20for\x20all\x20functions\x20are\x20later\x20than\x20uploaded\x20artifacts\x20dates', async () => {
        let _0x81f5f2;
        await runServerless({
            'fixture': 'checkForChanges',
            'command': 'deploy',
            'lastLifecycleHookName': 'aws:deploy:deploy:checkForChanges',
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': 'ignore' },
            'hooks': { 'beforeInstanceInit': _0x42b319 => _0x81f5f2 = _0x42b319 },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': '2021-05-20T15:34:16.494+0000' } } },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x81f5f2),
                    'headObject': async _0xe8cd73 => generateMatchingHeadObjectResponse(_0x81f5f2, _0xe8cd73)
                }
            }
        }), expect(_0x81f5f2['service']['provider']['shouldNotDeploy'])['to']['equal'](!![]);
    }), it['skip']('TODO:\x20should\x20deploy\x20with\x20--force\x20option', async () => {
        let _0x392abe;
        await runServerless({
            'fixture': 'checkForChanges',
            'command': 'deploy',
            'options': { 'force': !![] },
            'lastLifecycleHookName': 'aws:deploy:deploy:checkForChanges',
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': 'ignore' },
            'hooks': { 'beforeInstanceInit': _0x229389 => _0x392abe = _0x229389 },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': '2021-05-20T15:34:16.494+0000' } } },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x392abe),
                    'headObject': async _0x378293 => generateMatchingHeadObjectResponse(_0x392abe, _0x378293)
                }
            }
        }), expect(_0x392abe['service']['provider']['shouldNotDeploy'])['to']['equal'](![]);
    }), it['skip']('TODO:\x20should\x20deploy\x20when\x20deployment\x20bucket\x20is\x20empty\x20(first\x20deployment)', async () => {
        const {serverless: _0x1710d0} = await runServerless({
            'fixture': 'packageFoldern',
            'command': 'deploy',
            'lastLifecycleHookName': 'aws:deploy:deploy:checkForChanges',
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': 'ignore' },
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
        expect(_0x1710d0['service']['provider']['shouldNotDeploy'])['to']['equal'](![]);
    }), it['skip']('TODO:\x20should\x20compare\x20against\x20latest\x20deployment\x20artifacts', async () => {
        let _0x57fd64;
        await runServerless({
            'fixture': 'checkForChanges',
            'command': 'deploy',
            'lastLifecycleHookName': 'aws:deploy:deploy:checkForChanges',
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': 'ignore' },
            'hooks': { 'beforeInstanceInit': _0x222184 => _0x57fd64 = _0x222184 },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': '2021-05-20T15:34:16.494+0000' } } },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x57fd64),
                    'headObject': async _0x11828a => generateMatchingHeadObjectResponse(_0x57fd64, _0x11828a)
                }
            }
        }), expect(_0x57fd64['service']['provider']['shouldNotDeploy'])['to']['equal'](!![]);
    }), it['skip']('TODO:\x20should\x20deploy\x20if\x20new\x20function\x20was\x20introduced\x20and\x20otherwise\x20there\x20were\x20no\x20other\x20changes', async () => {
        let _0x9ceb33;
        await runServerless({
            'fixture': 'checkForChanges',
            'command': 'deploy',
            'lastLifecycleHookName': 'aws:deploy:deploy:checkForChanges',
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': 'ignore' },
            'hooks': { 'beforeInstanceInit': _0x47f93e => _0x9ceb33 = _0x47f93e },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': {
                    'getFunction': () => {
                    }
                },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x9ceb33),
                    'headObject': async _0x527818 => generateMatchingHeadObjectResponse(_0x9ceb33, _0x527818)
                }
            }
        }), expect(_0x9ceb33['service']['provider']['shouldNotDeploy'])['to']['equal'](![]);
    }), it['skip']('TODO:\x20should\x20deploy\x20if\x20individually\x20packaged\x20function\x20was\x20removed', async () => {
        const {
                fixtureData: {
                    updateConfig: _0x471f17,
                    servicePath: _0x13be4a
                }
            } = await runServerless({
                'fixture': 'checkForChanges',
                'command': 'package'
            }), _0x400176 = await generateMatchingListObjectsResponse(_0x5dd62a);
        await _0x471f17({ 'functions': { 'fnIndividually': null } });
        let _0x5dd62a;
        await runServerless({
            'cwd': _0x13be4a,
            'command': 'package',
            'lastLifecycleHookName': 'aws:deploy:deploy:checkForChanges',
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': 'ignore' },
            'hooks': { 'beforeInstanceInit': _0x3b0905 => _0x5dd62a = _0x3b0905 },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': '2021-05-20T15:34:16.494+0000' } } },
                'S3': {
                    'listObjectsV2': () => _0x400176,
                    'headObject': async _0xdae385 => generateMatchingHeadObjectResponse(_0x5dd62a, _0xdae385)
                }
            }
        }), expect(_0x5dd62a['service']['provider']['shouldNotDeploy'])['to']['equal'](![]);
    }), it['skip']('TODO:\x20should\x20deploy\x20if\x20remote\x20hashes\x20are\x20different', async () => {
        let _0x528214;
        await runServerless({
            'fixture': 'checkForChanges',
            'command': 'deploy',
            'lastLifecycleHookName': 'aws:deploy:deploy:checkForChanges',
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': 'ignore' },
            'hooks': { 'beforeInstanceInit': _0x3f0065 => _0x528214 = _0x3f0065 },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': '2021-05-20T15:34:16.494+0000' } } },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x528214),
                    'headObject': async _0x18332c => generateMatchingHeadObjectResponse(_0x528214, _0x18332c)
                }
            }
        }), expect(_0x528214['service']['provider']['shouldNotDeploy'])['to']['equal'](![]);
    }), it['skip']('TODO:\x20should\x20deploy\x20if\x20count\x20of\x20hashes\x20(not\x20their\x20content)\x20differs', async () => {
        let _0xc46a82;
        await runServerless({
            'fixture': 'checkForChanges',
            'command': 'deploy',
            'configExt': { 'package': { 'individually': !![] } },
            'lastLifecycleHookName': 'aws:deploy:deploy:checkForChanges',
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': 'ignore' },
            'hooks': { 'beforeInstanceInit': _0x1d928a => _0xc46a82 = _0x1d928a },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': '2021-05-20T15:34:16.494+0000' } } },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0xc46a82),
                    'headObject': async _0x1900d6 => generateMatchingHeadObjectResponse(_0xc46a82, _0x1900d6)
                }
            }
        }), expect(_0xc46a82['service']['provider']['shouldNotDeploy'])['to']['equal'](![]);
    }), it['skip']('TODO:\x20should\x20deploy\x20if\x20uploaded\x20artifacts\x20are\x20newer\x20than\x20function\x20configuration\x20modification\x20date', async () => {
        let _0x23b78e;
        await runServerless({
            'fixture': 'checkForChanges',
            'command': 'deploy',
            'configExt': { 'package': { 'individually': !![] } },
            'lastLifecycleHookName': 'aws:deploy:deploy:checkForChanges',
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': 'ignore' },
            'hooks': { 'beforeInstanceInit': _0x102f18 => _0x23b78e = _0x102f18 },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': {
                    'getFunction': () => {
                    }
                },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x23b78e),
                    'headObject': async _0x177fdd => generateMatchingHeadObjectResponse(_0x23b78e, _0x177fdd)
                }
            }
        }), expect(_0x23b78e['service']['provider']['shouldNotDeploy'])['to']['equal'](![]);
    }), it['skip']('TODO:\x20should\x20deploy\x20if\x20custom\x20package.artifact\x20have\x20changed', async () => {
        let _0x45f83a;
        await runServerless({
            'fixture': 'checkForChanges',
            'command': 'deploy',
            'configExt': { 'package': { 'artifact': 'artifact.zip' } },
            'lastLifecycleHookName': 'aws:deploy:deploy:checkForChanges',
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': 'ignore' },
            'hooks': { 'beforeInstanceInit': _0x219815 => _0x45f83a = _0x219815 },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': '2021-05-20T15:34:16.494+0000' } } },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x45f83a),
                    'headObject': async _0x49a06e => generateMatchingHeadObjectResponse(_0x45f83a, _0x49a06e)
                }
            }
        }), expect(_0x45f83a['service']['provider']['shouldNotDeploy'])['to']['equal'](![]);
    }), it('should\x20skip\x20a\x20deployment\x20with\x20identical\x20hashes\x20and\x20package.artifact\x20targeting\x20.serverless\x20directory', async () => {
        const {serverless: _0x317758} = await runServerless({
            'fixture': 'packageArtifactInServerlessDir',
            'command': 'deploy',
            'configExt': { 'service': 'test-packageArtifactInServerlessDir' },
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': 'ignore' },
            'lastLifecycleHookName': 'aws:deploy:deploy:checkForChanges',
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': '2020-05-20T15:34:16.494+0000' } } },
                'S3': {
                    'headObject': (() => {
                        const _0x927d = sandbox['stub']();
                        return _0x927d['withArgs']({
                            'Bucket': 'deployment-bucket',
                            'Key': 'serverless/test-package-artifact/dev/1589988704359-2020-05-20T15:31:44.359Z/compiled-cloudformation-template.json'
                        })['returns']({ 'Metadata': { 'filesha256': 'pZOdrt6qijT7ITsLQjPP9QwgMAfKA2RuUUSTW+l8wWs=' } }), _0x927d['withArgs']({
                            'Bucket': 'deployment-bucket',
                            'Key': 'serverless/test-package-artifact/dev/1589988704359-2020-05-20T15:31:44.359Z/my-own.zip'
                        })['returns']({ 'Metadata': { 'filesha256': 'T0qEYHOE4Xv2E8Ar03xGogAlElcdf/dQh/lh9ao7Glo=' } }), _0x927d;
                    })(),
                    'listObjectsV2': {
                        'Contents': [
                            {
                                'Key': 'serverless/test-package-artifact/dev/1589988704359-2020-05-20T15:31:44.359Z/compiled-cloudformation-template.json',
                                'LastModified': new Date(),
                                'ETag': '\x225102a4cf710cae6497dba9e61b85d0a4\x22',
                                'Size': 0x164,
                                'StorageClass': 'STANDARD'
                            },
                            {
                                'Key': 'serverless/test-package-artifact/dev/1589988704359-2020-05-20T15:31:44.359Z/my-own.zip',
                                'LastModified': new Date(),
                                'ETag': '\x225102a4cf710cae6497dba9e61b85d0a4\x22',
                                'Size': 0x164,
                                'StorageClass': 'STANDARD'
                            }
                        ]
                    }
                }
            }
        });
        expect(_0x317758['service']['provider']['shouldNotDeploy'])['to']['equal'](!![]);
    }), it('should\x20print\x20a\x20warning\x20if\x20missing\x20lambda:GetFunction\x20permission', async () => {
        const {stdoutData: _0x24c0ad} = await runServerless({
            'fixture': 'checkForChanges',
            'command': 'deploy',
            'lastLifecycleHookName': 'aws:deploy:deploy:checkForChanges',
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': sandbox['stub']()['throws']({ 'providerError': { 'statusCode': 0x193 } }) },
                'S3': { 'listObjectsV2': {} }
            }
        });
        expect(_0x24c0ad)['to']['include']([
            'WARNING:\x20Not\x20authorized\x20to\x20perform:\x20lambda:GetFunction\x20for\x20at\x20least\x20one\x20of\x20the\x20lambda\x20functions.',
            '\x20Deployment\x20will\x20not\x20be\x20skipped\x20even\x20if\x20service\x20files\x20did\x20not\x20change.\x20'
        ]['join'](''));
    }), it['skip']('TODO:\x20should\x20crash\x20meaningfully\x20if\x20bucket\x20does\x20not\x20exist', () => {
        return expect(runServerless({
            'fixture': 'checkForChanges',
            'command': 'deploy',
            'lastLifecycleHookName': 'aws:deploy:deploy:checkForChanges',
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': 'ignore' },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'S3': {
                    'listObjectsV2': async () => {
                    }
                }
            }
        }))['to']['eventually']['be']['rejected']['and']['have']['property']('code');
    }), it['skip']('TODO:\x20should\x20handle\x20gently\x20other\x20AWS\x20SDK\x20errors', () => {
        return expect(runServerless({
            'fixture': 'checkForChanges',
            'command': 'deploy',
            'lastLifecycleHookName': 'aws:deploy:deploy:checkForChanges',
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': 'ignore' },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'S3': {
                    'listObjectsV2': async () => {
                    }
                }
            }
        }))['to']['eventually']['be']['rejected']['and']['have']['property']('code');
    }), describe('checkLogGroupSubscriptionFilterResourceLimitExceeded', () => {
        it('should\x20not\x20attempt\x20to\x20delete\x20and\x20add\x20filter\x20for\x20same\x20destination', async () => {
            const _0x4aaf69 = sandbox['stub']();
            let _0x211cbf;
            await runServerless({
                'fixture': 'checkForChanges',
                'command': 'deploy',
                'configExt': { 'functions': { 'fn1': { 'events': [{ 'cloudwatchLog': 'someLogGroupName' }] } } },
                'lastLifecycleHookName': 'aws:deploy:deploy:checkForChanges',
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': 'ignore' },
                'hooks': { 'beforeInstanceInit': _0x4298bb => _0x211cbf = _0x4298bb },
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': '2021-05-20T15:34:16.494+0000' } } },
                    'S3': {
                        'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x211cbf),
                        'headObject': async _0x2994a7 => generateMatchingHeadObjectResponse(_0x211cbf, _0x2994a7)
                    },
                    'CloudWatchLogs': {
                        'deleteSubscriptionFilter': _0x4aaf69,
                        'describeSubscriptionFilters': async () => {
                            const _0x3c128f = _0x211cbf['service']['getFunction']('fn1')['name'], _0x11ffa6 = _0x211cbf['getProvider']('aws')['naming'];
                            return {
                                'subscriptionFilters': [
                                    {
                                        'filterName': _0x11ffa6['getStackName']() + '-' + _0x11ffa6['getCloudWatchLogLogicalId']('Fn1', -0x8c7 * 0x3 + -0x2060 + 0x3ab6) + '-xxxxx',
                                        'destinationArn': 'arn:aws:lambda:us-east-1:999999999999:function:' + _0x3c128f
                                    },
                                    {
                                        'filterName': _0x11ffa6['getStackName']() + '-' + _0x11ffa6['getCloudWatchLogLogicalId']('Fn2', -0x215c + -0x231c + -0x16d3 * -0x3) + '-xxxxx',
                                        'destinationArn': 'arn:aws:lambda:us-east-1:999999999999:function:test-checkForChanges-cdr3ogg-dev-fn1'
                                    }
                                ]
                            };
                        }
                    }
                }
            }), expect(_0x4aaf69)['to']['not']['have']['been']['called'];
        }), it('should\x20not\x20attempt\x20to\x20delete\x20filter\x20by\x202\x20subscription\x20filter\x20per\x20log\x20group', async () => {
            const _0x31326f = sandbox['stub']();
            let _0xaea028;
            await runServerless({
                'fixture': 'checkForChanges',
                'command': 'deploy',
                'configExt': { 'functions': { 'fn1': { 'events': [{ 'cloudwatchLog': 'someLogGroupName' }] } } },
                'lastLifecycleHookName': 'aws:deploy:deploy:checkForChanges',
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': 'ignore' },
                'hooks': { 'beforeInstanceInit': _0x57c313 => _0xaea028 = _0x57c313 },
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': '2021-05-20T15:34:16.494+0000' } } },
                    'S3': {
                        'listObjectsV2': async () => generateMatchingListObjectsResponse(_0xaea028),
                        'headObject': async _0x5856a0 => generateMatchingHeadObjectResponse(_0xaea028, _0x5856a0)
                    },
                    'CloudWatchLogs': {
                        'deleteSubscriptionFilter': _0x31326f,
                        'describeSubscriptionFilters': async () => {
                            const _0x390241 = _0xaea028['getProvider']('aws')['naming'];
                            return {
                                'subscriptionFilters': [{
                                        'filterName': _0x390241['getStackName']() + '-' + _0x390241['getCloudWatchLogLogicalId']('Fn1', 0xa00 * 0x2 + -0x7 * -0x50d + -0x375a) + '-xxxxx',
                                        'destinationArn': 'arn:aws:lambda:us-east-1:999999999999:function:test-checkForChanges-cdr3ogg-dev-fn1'
                                    }]
                            };
                        }
                    }
                }
            }), expect(_0x31326f)['to']['not']['have']['been']['called'];
        }), it('should\x20attempt\x20to\x20delete\x20filter\x20over\x202\x20subscription\x20filter\x20per\x20log\x20group', async () => {
            const _0x1006bb = sandbox['stub']();
            let _0xc8977d;
            const {awsNaming: _0x3e33a6} = await runServerless({
                'fixture': 'checkForChanges',
                'command': 'deploy',
                'configExt': { 'functions': { 'fn1': { 'events': [{ 'cloudwatchLog': 'someLogGroupName' }] } } },
                'lastLifecycleHookName': 'aws:deploy:deploy:checkForChanges',
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': 'ignore' },
                'hooks': { 'beforeInstanceInit': _0x5e5da1 => _0xc8977d = _0x5e5da1 },
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': '2021-05-20T15:34:16.494+0000' } } },
                    'S3': {
                        'listObjectsV2': async () => generateMatchingListObjectsResponse(_0xc8977d),
                        'headObject': async _0x20844d => generateMatchingHeadObjectResponse(_0xc8977d, _0x20844d)
                    },
                    'CloudWatchLogs': {
                        'deleteSubscriptionFilter': _0x1006bb,
                        'describeSubscriptionFilters': async () => {
                            const _0x15190f = _0xc8977d['getProvider']('aws')['naming'];
                            return {
                                'subscriptionFilters': [
                                    {
                                        'filterName': _0x15190f['getStackName']() + '-' + _0x15190f['getCloudWatchLogLogicalId']('Fn2', -0xfc9 + -0x2472 + -0x4 * -0xd0f) + '-xxxxx',
                                        'destinationArn': 'arn:aws:lambda:us-east-1:999999999999:function:test-checkForChanges-cdr3ogg-dev-fn1'
                                    },
                                    {
                                        'filterName': _0x15190f['getStackName']() + '-' + _0x15190f['getCloudWatchLogLogicalId']('Fn2', 0x202d + 0x1 * 0x7e9 + -0x9 * 0x474) + '-xxxxx',
                                        'destinationArn': 'arn:aws:lambda:us-east-1:999999999999:function:' + _0xc8977d['service']['getFunction']('fn1')['name']
                                    }
                                ]
                            };
                        }
                    }
                }
            });
            expect(_0x1006bb)['to']['have']['been']['calledOnceWith']({
                'logGroupName': 'someLogGroupName',
                'filterName': _0x3e33a6['getStackName']() + '-' + _0x3e33a6['getCloudWatchLogLogicalId']('Fn2', 0x73 * 0x8 + -0x8b7 + 0xd * 0x65) + '-xxxxx'
            });
        }), it('should\x20attempt\x20to\x20delete\x20filter\x20if\x20order\x20of\x20cloudwatch\x20events\x20changed', async () => {
            const _0x34b791 = sandbox['stub']();
            let _0x452d53;
            const {awsNaming: _0x5ebaf7} = await runServerless({
                'fixture': 'checkForChanges',
                'command': 'deploy',
                'configExt': {
                    'functions': {
                        'fn1': {
                            'events': [
                                { 'cloudwatchLog': 'someLogGroupName1' },
                                { 'cloudwatchLog': 'someLogGroupName2' }
                            ]
                        }
                    }
                },
                'lastLifecycleHookName': 'aws:deploy:deploy:checkForChanges',
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': 'ignore' },
                'hooks': { 'beforeInstanceInit': _0xd406c7 => _0x452d53 = _0xd406c7 },
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': '2021-05-20T15:34:16.494+0000' } } },
                    'S3': {
                        'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x452d53),
                        'headObject': async _0x4ffad3 => generateMatchingHeadObjectResponse(_0x452d53, _0x4ffad3)
                    },
                    'CloudWatchLogs': {
                        'deleteSubscriptionFilter': _0x34b791,
                        'describeSubscriptionFilters': sandbox['stub']()['onFirstCall']()['callsFake'](async () => {
                            const _0x1ce3b2 = _0x452d53['getProvider']('aws')['naming'];
                            return {
                                'subscriptionFilters': [{
                                        'filterName': _0x1ce3b2['getStackName']() + '-' + _0x1ce3b2['getCloudWatchLogLogicalId']('Fn1', -0x1 * 0x14b + -0xf * -0x155 + -0x12af * 0x1) + '-xxxxx',
                                        'destinationArn': 'arn:aws:lambda:us-east-1:999999999999:function:' + _0x452d53['service']['getFunction']('fn1')['name']
                                    }]
                            };
                        })['onSecondCall']()['callsFake'](async () => {
                            const _0x144ff8 = _0x452d53['getProvider']('aws')['naming'];
                            return {
                                'subscriptionFilters': [{
                                        'filterName': _0x144ff8['getStackName']() + '-' + _0x144ff8['getCloudWatchLogLogicalId']('Fn1', 0x3 * 0x5fc + 0x169c + -0x288f) + '-xxxxx',
                                        'destinationArn': 'arn:aws:lambda:us-east-1:999999999999:function:' + _0x452d53['service']['getFunction']('fn1')['name']
                                    }]
                            };
                        })
                    }
                }
            });
            expect(_0x34b791)['to']['have']['been']['calledOnceWith']({
                'logGroupName': 'someLogGroupName2',
                'filterName': _0x5ebaf7['getStackName']() + '-' + _0x5ebaf7['getCloudWatchLogLogicalId']('Fn1', -0x692 * 0x2 + 0x161f + -0x8fa * 0x1) + '-xxxxx'
            });
        }), it('should\x20attempt\x20to\x20delete\x20multiple\x20filters', async () => {
            const _0xf1b5be = sandbox['stub']();
            let _0x2e5085;
            const {awsNaming: _0x3f1985} = await runServerless({
                'fixture': 'checkForChanges',
                'command': 'deploy',
                'configExt': {
                    'functions': {
                        'fn1': {
                            'events': [
                                { 'cloudwatchLog': 'someLogGroupName' },
                                { 'cloudwatchLog': 'someLogGroupName' }
                            ]
                        }
                    }
                },
                'lastLifecycleHookName': 'aws:deploy:deploy:checkForChanges',
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': 'ignore' },
                'hooks': { 'beforeInstanceInit': _0x57b18b => _0x2e5085 = _0x57b18b },
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': '2021-05-20T15:34:16.494+0000' } } },
                    'S3': {
                        'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x2e5085),
                        'headObject': async _0x441a5c => generateMatchingHeadObjectResponse(_0x2e5085, _0x441a5c)
                    },
                    'CloudWatchLogs': {
                        'deleteSubscriptionFilter': _0xf1b5be,
                        'describeSubscriptionFilters': sandbox['stub']()['onFirstCall']()['callsFake'](async () => {
                            const _0x1494b2 = _0x2e5085['getProvider']('aws')['naming'];
                            return {
                                'subscriptionFilters': [
                                    {
                                        'filterName': _0x1494b2['getStackName']() + '-' + _0x1494b2['getCloudWatchLogLogicalId']('Fn1', 0x1 * -0xe2 + -0x98 * -0x3e + 0x21d * -0x11) + '-xxxxx',
                                        'destinationArn': 'arn:aws:lambda:us-east-1:999999999999:function:test-checkForChanges-cdr3ogg-dev-fn1'
                                    },
                                    {
                                        'filterName': _0x1494b2['getStackName']() + '-' + _0x1494b2['getCloudWatchLogLogicalId']('Fn1', -0xc2 * 0x21 + -0x2 * 0x3fb + -0x4b6 * -0x7) + '-xxxxx',
                                        'destinationArn': 'arn:aws:lambda:us-east-1:999999999999:function:test-checkForChanges-cdr3ogg-dev-fn1'
                                    }
                                ]
                            };
                        })
                    }
                }
            });
            expect(_0xf1b5be)['to']['have']['been']['calledTwice'], expect(_0xf1b5be)['to']['have']['been']['calledWith']({
                'logGroupName': 'someLogGroupName',
                'filterName': _0x3f1985['getStackName']() + '-' + _0x3f1985['getCloudWatchLogLogicalId']('Fn1', -0x6a7 * 0x1 + 0x17b1 + -0x1109) + '-xxxxx'
            }), expect(_0xf1b5be)['to']['have']['been']['calledWith']({
                'logGroupName': 'someLogGroupName',
                'filterName': _0x3f1985['getStackName']() + '-' + _0x3f1985['getCloudWatchLogLogicalId']('Fn1', 0x2 * -0x937 + 0xdab + -0xb * -0x6f) + '-xxxxx'
            });
        }), it('should\x20recognize\x20custom\x20partition', async () => {
            const _0x3c818a = sandbox['stub']();
            let _0x339fea;
            await runServerless({
                'fixture': 'checkForChanges',
                'command': 'deploy',
                'configExt': { 'functions': { 'fn1': { 'events': [{ 'cloudwatchLog': 'someLogGroupName' }] } } },
                'lastLifecycleHookName': 'aws:deploy:deploy:checkForChanges',
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': 'ignore' },
                'hooks': { 'beforeInstanceInit': _0x5d84e4 => _0x339fea = _0x5d84e4 },
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'STS': {
                        'getCallerIdentity': {
                            'ResponseMetadata': { 'RequestId': 'ffffffff-ffff-ffff-ffff-ffffffffffff' },
                            'UserId': 'XXXXXXXXXXXXXXXXXXXXX',
                            'Account': '999999999999',
                            'Arn': 'arn:aws-us-gov:iam::999999999999:user/test'
                        }
                    },
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': '2021-05-20T15:34:16.494+0000' } } },
                    'S3': {
                        'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x339fea),
                        'headObject': async _0x24cfdb => generateMatchingHeadObjectResponse(_0x339fea, _0x24cfdb)
                    },
                    'CloudWatchLogs': {
                        'describeSubscriptionFilters': sandbox['stub']()['callsFake'](async () => {
                            const _0x4e1c65 = _0x339fea['getProvider']('aws')['naming'];
                            return {
                                'subscriptionFilters': [{
                                        'filterName': _0x4e1c65['getStackName']() + '-' + _0x4e1c65['getCloudWatchLogLogicalId']('Fn1', 0x1b * -0xef + 0x13d9 + 0x55d) + '-xxxxx',
                                        'destinationArn': 'arn:aws-us-gov:lambda:us-east-1:999999999999:function:' + _0x339fea['service']['getFunction']('fn1')['name']
                                    }]
                            };
                        }),
                        'deleteSubscriptionFilter': _0x3c818a
                    }
                }
            }), expect(_0x3c818a)['to']['not']['have']['been']['called'];
        });
    });
});
