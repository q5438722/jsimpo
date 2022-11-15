'use strict';
const crypto = require('crypto'), fs = require('fs'), path = require('path'), globby = require('globby'), sandbox = require('sinon'), chai = require('chai'), proxyquire = require('proxyquire'), normalizeFiles = require('../../../../../../../lib/plugins/aws/lib/normalizeFiles'), AwsProvider = require('../../../../../../../lib/plugins/aws/provider'), AwsDeploy = require('../../../../../../../lib/plugins/aws/deploy/index'), Serverless = require('../../../../../../../lib/Serverless'), ServerlessError = require('../../../../../../../lib/serverless-error'), runServerless = require('../../../../../../utils/run-serverless');
chai['use'](require('chai-as-promised')), chai['use'](require('sinon-chai'));
const expect = require('chai')['expect'];
describe('checkForChanges', () => {
    const _0x3453b8 = {
        'XySBh': 'dev',
        'tMsgq': 'us-east-1',
        'tSNPa': 'my-service',
        'IJDBc': 'aws',
        'WvbSU': 'deployment-bucket',
        'ULksO': 'bar',
        'abjCE': function (_0x2d0c13, _0x4a0ff2, _0xa1a4eb) {
            return _0x2d0c13(_0x4a0ff2, _0xa1a4eb);
        },
        'RrqPY': '../../../../../../../lib/plugins/aws/deploy/lib/checkForChanges.js',
        'nsAqf': 'getMostRecentObjects',
        'CXNhd': 'getObjectMetadata',
        'mCiHr': 'checkIfDeploymentIsNecessary',
        'eMgTu': 'checkLogGroupSubscriptionFilterResourceLimitExceeded',
        'OWbcO': '4|2|3|0|1',
        'Dhesr': function (_0x132a64, _0x5c6831) {
            return _0x132a64(_0x5c6831);
        },
        'AyxQH': function (_0x266b7f, _0x4c52dc) {
            return _0x266b7f(_0x4c52dc);
        },
        'RhcnN': 'should\x20resolve\x20if\x20the\x20\x22force\x22\x20option\x20is\x20used',
        'XBbVe': 'The\x20specified\x20bucket\x20does\x20not\x20exist',
        'KcNFx': function (_0x4e8440, _0x29c63f) {
            return _0x4e8440(_0x29c63f);
        },
        'WgReC': 'Create\x20it\x20manually\x20if\x20you\x20want\x20to\x20reuse\x20the\x20CloudFormation\x20stack\x20\x22my-service-dev\x22,',
        'zNAeQ': 'or\x20delete\x20the\x20stack\x20if\x20it\x20is\x20no\x20longer\x20required.',
        'LEoWO': 'Other\x20reason',
        'mIKlC': function (_0x18b29f, _0x342fea) {
            return _0x18b29f(_0x342fea);
        },
        'lOQPL': function (_0x176b57, _0x12e1a4) {
            return _0x176b57(_0x12e1a4);
        },
        'PVAJw': 'listObjectsV2',
        'VesRg': 'serverless/my-service/dev',
        'Aawuo': 'request',
        'ZGFyp': function (_0x2d4d7e, _0x473ae5) {
            return _0x2d4d7e(_0x473ae5);
        },
        'nriif': function (_0x22c938, _0x386e7a) {
            return _0x22c938(_0x386e7a);
        },
        'PpisQ': function (_0xecdd12, _0x1bdc27, _0x2b50e2) {
            return _0xecdd12(_0x1bdc27, _0x2b50e2);
        },
        'XroJS': 'should\x20resolve\x20if\x20no\x20result\x20is\x20returned',
        'TUYVm': 'should\x20translate\x20error\x20if\x20rejected\x20due\x20to\x20missing\x20bucket',
        'pluKo': function (_0x415e3c, _0x4c9c5f, _0x15b774) {
            return _0x415e3c(_0x4c9c5f, _0x15b774);
        },
        'QvWbp': 'should\x20throw\x20original\x20error\x20if\x20rejected\x20not\x20due\x20to\x20missing\x20bucket',
        'aDYUk': 'should\x20resolve\x20if\x20result\x20array\x20is\x20empty',
        'ZFgEU': function (_0x43df97, _0x4a00f0, _0x33765d) {
            return _0x43df97(_0x4a00f0, _0x33765d);
        },
        'AMNJx': 'should\x20resolve\x20with\x20the\x20most\x20recently\x20deployed\x20objects',
        'ThRud': function (_0x2b9981, _0x2539ba) {
            return _0x2b9981(_0x2539ba);
        },
        'jaLoL': function (_0x757c7a, _0x14f16b) {
            return _0x757c7a(_0x14f16b);
        },
        'CoyqR': '1|2|4|0|3',
        'BPort': 'headObject',
        'ppKvy': function (_0x5ec590, _0x37dbd4) {
            return _0x5ec590(_0x37dbd4);
        },
        'yMiHs': function (_0x5cbbed, _0xc3d79c) {
            return _0x5cbbed(_0xc3d79c);
        },
        'DfAIf': 'should\x20resolve\x20if\x20no\x20input\x20is\x20provided',
        'SwLTz': function (_0x31b84a, _0x272845, _0x2b896c) {
            return _0x31b84a(_0x272845, _0x2b896c);
        },
        'FepTa': 'should\x20resolve\x20if\x20no\x20objects\x20are\x20provided\x20as\x20input',
        'eVqwP': function (_0x1bf948, _0x31b388, _0x2cb4ee) {
            return _0x1bf948(_0x31b388, _0x2cb4ee);
        },
        'YvJMd': 'should\x20request\x20the\x20object\x20detailed\x20information',
        'yZpXU': function (_0x306b6c, _0x3392a1) {
            return _0x306b6c(_0x3392a1);
        },
        'bpztX': '1|3|4|6|0|5|2|7',
        'bxSsT': function (_0x2e2f6b, _0x45f7b1) {
            return _0x2e2f6b(_0x45f7b1);
        },
        'lORWJ': '.serverless/my-service.zip',
        'ZsASX': function (_0x2d0705, _0x2dbb29) {
            return _0x2d0705(_0x2dbb29);
        },
        'XkdWz': '**.zip',
        'oSjcf': '.serverless',
        'WWIHh': 'my-service.zip',
        'caQdV': 'local-hash-cf-template',
        'Gfelr': 'local-hash-zip-file-1',
        'CBMZf': 'remote-hash-cf-template',
        'WiuRJ': 'remote-hash-zip-file-1',
        'LACYk': '2|6|0|1|4|5|7|3',
        'itdLT': function (_0x448b3b, _0x2fcc2b) {
            return _0x448b3b(_0x2fcc2b);
        },
        'Haebx': function (_0x3ecd0f, _0x1b8c21) {
            return _0x3ecd0f(_0x1b8c21);
        },
        'QyepS': 'hash-cf-template',
        'cKYYC': 'hash-zip-file-1',
        'jmUip': function (_0x436aa6, _0x53280d) {
            return _0x436aa6 - _0x53280d;
        },
        'zPiKp': function (_0x13ab46, _0x2aea28) {
            return _0x13ab46 + _0x2aea28;
        },
        'OrfgN': function (_0xdbae01, _0x55957a) {
            return _0xdbae01(_0x55957a);
        },
        'TnUZx': '5|7|0|6|2|3|1|4',
        'mwMis': function (_0x5359de, _0x448bdb) {
            return _0x5359de(_0x448bdb);
        },
        'QEkuS': '7|4|1|3|5|2|6|0',
        'xqcst': function (_0x5729cb, _0x51a56d) {
            return _0x5729cb(_0x51a56d);
        },
        'bTLsR': function (_0x1a46dc, _0x24f02f) {
            return _0x1a46dc(_0x24f02f);
        },
        'MZrDj': function (_0x2d16c7, _0x1d6508) {
            return _0x2d16c7(_0x1d6508);
        },
        'NYRfI': function (_0x533082, _0x18a5b0) {
            return _0x533082(_0x18a5b0);
        },
        'KtdwY': '7|0|4|6|5|2|8|1|3',
        'hkwJS': '.serverless/func2.zip',
        'EEFfJ': function (_0x520415, _0x4b38aa) {
            return _0x520415(_0x4b38aa);
        },
        'kyoHo': '.serverless/func1.zip',
        'rpWRl': 'func1.zip',
        'bVuWM': 'func2.zip',
        'qtfYY': 'normalizeCloudFormationTemplate',
        'EaTnY': 'sync',
        'bwBSf': 'readFile',
        'FGEjm': function (_0x1b6451, _0x3b47bd) {
            return _0x1b6451(_0x3b47bd);
        },
        'fjfQw': function (_0x467c07, _0x35b556) {
            return _0x467c07(_0x35b556);
        },
        'BqxNi': '6|5|2|1|3|7|4|0',
        'cLAKY': function (_0x353844, _0x351c06) {
            return _0x353844(_0x351c06);
        },
        'lcxmd': function (_0x50945b, _0x385b5f) {
            return _0x50945b(_0x385b5f);
        },
        'dzbOf': '4|2|6|1|5|0|3|7',
        'NauIt': function (_0x38f763, _0x1d0d3b) {
            return _0x38f763(_0x1d0d3b);
        },
        'SVqGJ': function (_0x41002a, _0x79cdc2) {
            return _0x41002a(_0x79cdc2);
        },
        'MLqOT': function (_0x4f7e78, _0x465374) {
            return _0x4f7e78(_0x465374);
        },
        'ZSFQZ': function (_0x4d67f4, _0x3651d8) {
            return _0x4d67f4(_0x3651d8);
        },
        'mVuYm': function (_0x47ec76, _0x5f4412) {
            return _0x47ec76(_0x5f4412);
        },
        'bHcCr': '0|6|2|3|1|5|4|7|8',
        'mIMqs': function (_0x3d43ec, _0x335ead) {
            return _0x3d43ec(_0x335ead);
        },
        'uYEZh': function (_0x53f0dc, _0x272db2) {
            return _0x53f0dc(_0x272db2);
        },
        'HmjRE': function (_0x161afe, _0x218265) {
            return _0x161afe(_0x218265);
        },
        'uQRXP': '7|5|6|4|1|0|3|2',
        'dneDr': function (_0x1f3901, _0x351940) {
            return _0x1f3901(_0x351940);
        },
        'hymrL': 'foo/bar/my-own.zip',
        'NxqBV': function (_0x1a30f1, _0x53f55a) {
            return _0x1a30f1(_0x53f55a);
        },
        'MzSLg': function (_0x5d94bd, _0x5924cc) {
            return _0x5d94bd(_0x5924cc);
        },
        'IybHF': 'local-my-own-hash',
        'lPwAl': 'remote-my-own-hash',
        'dPUiX': function (_0x1924b5, _0x432131, _0x537f0a) {
            return _0x1924b5(_0x432131, _0x537f0a);
        },
        'VaByK': function (_0x5c7235, _0x2daf1d, _0x58458b) {
            return _0x5c7235(_0x2daf1d, _0x58458b);
        },
        'rMbGU': 'should\x20resolve\x20if\x20objects\x20are\x20given,\x20but\x20no\x20function\x20last\x20modified\x20date',
        'AmWin': 'should\x20not\x20set\x20a\x20flag\x20if\x20there\x20are\x20more\x20remote\x20hashes',
        'gqceq': 'should\x20not\x20set\x20a\x20flag\x20if\x20remote\x20and\x20local\x20hashes\x20are\x20different',
        'ybumO': function (_0x51f86c, _0x354213, _0x176d0d) {
            return _0x51f86c(_0x354213, _0x176d0d);
        },
        'znkwQ': 'should\x20not\x20set\x20a\x20flag\x20if\x20remote\x20and\x20local\x20hashes\x20are\x20the\x20same\x20but\x20are\x20duplicated',
        'WywYB': 'should\x20not\x20set\x20a\x20flag\x20if\x20the\x20hashes\x20are\x20equal,\x20but\x20the\x20objects\x20were\x20modified\x20after\x20their\x20functions',
        'Dmhwx': function (_0x237ad7, _0x604961, _0x1d61bb) {
            return _0x237ad7(_0x604961, _0x1d61bb);
        },
        'VmddC': 'should\x20set\x20a\x20flag\x20if\x20the\x20remote\x20and\x20local\x20hashes\x20are\x20equal',
        'nUvhZ': function (_0x27190f, _0x26026d, _0x5e209d) {
            return _0x27190f(_0x26026d, _0x5e209d);
        },
        'MXLMZ': 'should\x20set\x20a\x20flag\x20if\x20the\x20remote\x20and\x20local\x20hashes\x20are\x20equal,\x20and\x20the\x20edit\x20times\x20are\x20ordered',
        'MWjQW': function (_0x4281fb, _0x77fc52, _0x2a0957) {
            return _0x4281fb(_0x77fc52, _0x2a0957);
        },
        'lRzQV': 'should\x20set\x20a\x20flag\x20if\x20the\x20remote\x20and\x20local\x20hashes\x20are\x20duplicated\x20and\x20equal',
        'gTwLZ': function (_0x436fdc, _0x1ab88c, _0x2a6778) {
            return _0x436fdc(_0x1ab88c, _0x2a6778);
        },
        'meJpn': 'should\x20not\x20set\x20a\x20flag\x20if\x20the\x20remote\x20and\x20local\x20hashes\x20are\x20different\x20for\x20package.artifact',
        'gQQqL': function (_0x31f6aa, _0x5e8ff7) {
            return _0x31f6aa(_0x5e8ff7);
        },
        'WOfcK': function (_0x171fa0, _0x215b0d, _0x5ea977) {
            return _0x171fa0(_0x215b0d, _0x5ea977);
        },
        'LOLGm': '#checkForChanges()',
        'vyxyL': '#getMostRecentObjects()',
        'jkRxf': function (_0x30352d, _0x1642df, _0x941a5f) {
            return _0x30352d(_0x1642df, _0x941a5f);
        },
        'iLgqT': '#getObjectMetadata()',
        'fTDXC': function (_0x554c3e, _0x13b4ac, _0x4ff2ae) {
            return _0x554c3e(_0x13b4ac, _0x4ff2ae);
        },
        'sZrSY': '#checkIfDeploymentIsNecessary()'
    };
    let _0x579a12, _0xa1ccae, _0x4e28cf, _0x2f5058, _0x283226;
    _0x3453b8['gQQqL'](beforeEach, () => {
        const _0xe3944f = {
            'stage': _0x3453b8['XySBh'],
            'region': _0x3453b8['tMsgq']
        };
        _0x579a12 = new Serverless(), _0x579a12['serviceDir'] = _0x3453b8['tSNPa'], _0xa1ccae = new AwsProvider(_0x579a12, _0xe3944f), _0x579a12['setProvider'](_0x3453b8['IJDBc'], _0xa1ccae), _0x579a12['service']['service'] = _0x3453b8['tSNPa'], _0x4e28cf = new AwsDeploy(_0x579a12, _0xe3944f), _0x4e28cf['bucketName'] = _0x3453b8['WvbSU'], _0x4e28cf['serverless']['service']['provider']['compiledCloudFormationTemplate'] = { 'foo': _0x3453b8['ULksO'] }, _0x2f5058 = 'serverless/' + _0x579a12['service']['service'] + '/' + _0xa1ccae['getStage'](), _0x4e28cf['serverless']['cli'] = { 'log': sandbox['spy']() }, _0x283226 = {
            'createHash'() {
                return this;
            },
            'update'() {
                return this;
            },
            'digest': sandbox['stub']()
        };
        const _0x7a8831 = _0x3453b8['abjCE'](proxyquire, _0x3453b8['RrqPY'], { 'crypto': _0x283226 });
        Object['assign'](_0x4e28cf, _0x7a8831);
    }), _0x3453b8['WOfcK'](describe, _0x3453b8['LOLGm'], () => {
        const _0x12becf = {
            'YcqHb': function (_0x60d912, _0x36fa3d) {
                return _0x3453b8['Dhesr'](_0x60d912, _0x36fa3d);
            },
            'EpQIU': function (_0x1b2440, _0x247510) {
                return _0x3453b8['Dhesr'](_0x1b2440, _0x247510);
            }
        };
        let _0x5ca031, _0x3f8d5e, _0x46999f, _0x9c434f;
        _0x3453b8['AyxQH'](beforeEach, () => {
            _0x5ca031 = sandbox['stub'](_0x4e28cf, _0x3453b8['nsAqf'])['resolves'](), _0x3f8d5e = sandbox['stub'](_0x4e28cf, _0x3453b8['CXNhd'])['resolves'](), _0x46999f = sandbox['stub'](_0x4e28cf, _0x3453b8['mCiHr'])['resolves'](), _0x9c434f = sandbox['stub'](_0x4e28cf, _0x3453b8['eMgTu'])['resolves']();
        }), _0x3453b8['AyxQH'](afterEach, () => {
            const _0xe43e2d = _0x3453b8['OWbcO']['split']('|');
            let _0x90f55f = 0x0;
            while (!![]) {
                switch (_0xe43e2d[_0x90f55f++]) {
                case '0':
                    _0x4e28cf['checkLogGroupSubscriptionFilterResourceLimitExceeded']['restore']();
                    continue;
                case '1':
                    _0x9c434f['restore']();
                    continue;
                case '2':
                    _0x4e28cf['getObjectMetadata']['restore']();
                    continue;
                case '3':
                    _0x4e28cf['checkIfDeploymentIsNecessary']['restore']();
                    continue;
                case '4':
                    _0x4e28cf['getMostRecentObjects']['restore']();
                    continue;
                }
                break;
            }
        }), _0x3453b8['abjCE'](it, _0x3453b8['RhcnN'], () => {
            const _0x150f3a = {
                'ZiOGJ': function (_0x495c2c, _0x1880e3) {
                    return _0x12becf['YcqHb'](_0x495c2c, _0x1880e3);
                },
                'uEzOh': function (_0x6112a5, _0x5d9f11) {
                    return _0x12becf['EpQIU'](_0x6112a5, _0x5d9f11);
                }
            };
            return _0x4e28cf['options']['force'] = !![], _0x12becf['EpQIU'](expect, _0x4e28cf['checkForChanges']())['to']['be']['fulfilled']['then'](() => {
                _0x150f3a['ZiOGJ'](expect, _0x5ca031)['to']['not']['have']['been']['called'], _0x150f3a['uEzOh'](expect, _0x3f8d5e)['to']['not']['have']['been']['called'], _0x150f3a['uEzOh'](expect, _0x46999f)['to']['not']['have']['been']['called'], _0x150f3a['uEzOh'](expect, _0x4e28cf['serverless']['service']['provider']['shouldNotDeploy'])['to']['equal'](![]);
            });
        });
    }), _0x3453b8['WOfcK'](describe, _0x3453b8['vyxyL'], () => {
        const _0x2ae461 = {
            'vbooI': _0x3453b8['Aawuo'],
            'uDXMF': function (_0x20c735, _0xd891d6) {
                return _0x3453b8['ZGFyp'](_0x20c735, _0xd891d6);
            },
            'ynIhS': _0x3453b8['PVAJw'],
            'ZEmcW': _0x3453b8['VesRg']
        };
        let _0x23d7a5;
        _0x3453b8['nriif'](beforeEach, () => {
            _0x23d7a5 = sandbox['stub'](_0x4e28cf['provider'], _0x2ae461['vbooI']);
        }), _0x3453b8['nriif'](afterEach, () => {
            _0x4e28cf['provider']['request']['restore']();
        }), _0x3453b8['PpisQ'](it, _0x3453b8['XroJS'], () => {
            return _0x23d7a5['resolves'](), _0x2ae461['uDXMF'](expect, _0x4e28cf['getMostRecentObjects']())['to']['be']['fulfilled']['then'](_0x512c19 => {
                _0x2ae461['uDXMF'](expect, _0x23d7a5)['to']['have']['been']['calledWithExactly']('S3', _0x2ae461['ynIhS'], {
                    'Bucket': _0x4e28cf['bucketName'],
                    'Prefix': _0x2ae461['ZEmcW']
                }), _0x2ae461['uDXMF'](expect, _0x512c19)['to']['deep']['equal']([]);
            });
        }), _0x3453b8['PpisQ'](it, _0x3453b8['TUYVm'], () => {
            return _0x23d7a5['rejects'](new ServerlessError(_0x3453b8['XBbVe'])), _0x3453b8['KcNFx'](expect, _0x4e28cf['getMostRecentObjects']())['to']['be']['rejectedWith']([
                'The\x20serverless\x20deployment\x20bucket\x20\x22' + _0x4e28cf['bucketName'] + '\x22\x20does\x20not\x20exist.',
                _0x3453b8['WgReC'],
                _0x3453b8['zNAeQ']
            ]['join']('\x20'));
        }), _0x3453b8['pluKo'](it, _0x3453b8['QvWbp'], () => {
            return _0x23d7a5['rejects'](new ServerlessError(_0x3453b8['LEoWO'])), _0x3453b8['KcNFx'](expect, _0x4e28cf['getMostRecentObjects']())['to']['be']['rejectedWith'](_0x3453b8['LEoWO']);
        }), _0x3453b8['pluKo'](it, _0x3453b8['aDYUk'], () => {
            const _0x3175e8 = { 'Contents': [] };
            return _0x23d7a5['resolves'](_0x3175e8), _0x3453b8['mIKlC'](expect, _0x4e28cf['getMostRecentObjects']())['to']['be']['fulfilled']['then'](_0x473755 => {
                _0x2ae461['uDXMF'](expect, _0x23d7a5)['to']['have']['been']['calledWithExactly']('S3', _0x2ae461['ynIhS'], {
                    'Bucket': _0x4e28cf['bucketName'],
                    'Prefix': _0x2ae461['ZEmcW']
                }), _0x2ae461['uDXMF'](expect, _0x473755)['to']['deep']['equal']([]);
            });
        }), _0x3453b8['ZFgEU'](it, _0x3453b8['AMNJx'], () => {
            const _0x12d227 = {
                    'sQRKW': function (_0x3e96f2, _0x5ae753) {
                        return _0x3453b8['lOQPL'](_0x3e96f2, _0x5ae753);
                    },
                    'FykUa': _0x3453b8['PVAJw'],
                    'AfIcc': _0x3453b8['VesRg']
                }, _0x20d658 = {
                    'Contents': [
                        { 'Key': _0x2f5058 + '/151224711231-2016-08-18T15:43:00/artifact.zip' },
                        { 'Key': _0x2f5058 + '/151224711231-2016-08-18T15:43:00/cloudformation.json' },
                        { 'Key': _0x2f5058 + '/141264711231-2016-08-18T15:42:00/artifact.zip' },
                        { 'Key': _0x2f5058 + '/141264711231-2016-08-18T15:42:00/cloudformation.json' }
                    ]
                };
            return _0x23d7a5['resolves'](_0x20d658), _0x3453b8['lOQPL'](expect, _0x4e28cf['getMostRecentObjects']())['to']['be']['fulfilled']['then'](_0x2bbf23 => {
                _0x12d227['sQRKW'](expect, _0x23d7a5)['to']['have']['been']['calledWithExactly']('S3', _0x12d227['FykUa'], {
                    'Bucket': _0x4e28cf['bucketName'],
                    'Prefix': _0x12d227['AfIcc']
                }), _0x12d227['sQRKW'](expect, _0x2bbf23)['to']['deep']['equal']([
                    { 'Key': _0x2f5058 + '/151224711231-2016-08-18T15:43:00/cloudformation.json' },
                    { 'Key': _0x2f5058 + '/151224711231-2016-08-18T15:43:00/artifact.zip' }
                ]);
            });
        });
    }), _0x3453b8['jkRxf'](describe, _0x3453b8['iLgqT'], () => {
        const _0x386f24 = {
            'QIybf': _0x3453b8['Aawuo'],
            'WdbFP': function (_0x58f410, _0x355bee) {
                return _0x3453b8['ThRud'](_0x58f410, _0x355bee);
            },
            'XDoia': function (_0x48f0fa, _0x1acd8a) {
                return _0x3453b8['jaLoL'](_0x48f0fa, _0x1acd8a);
            },
            'EwDGi': function (_0x542296, _0x27eb49) {
                return _0x3453b8['jaLoL'](_0x542296, _0x27eb49);
            },
            'fPruO': _0x3453b8['CoyqR'],
            'ZJEIs': function (_0x1a74eb, _0x2150ee) {
                return _0x3453b8['jaLoL'](_0x1a74eb, _0x2150ee);
            },
            'VqGUJ': _0x3453b8['BPort'],
            'ReJUt': function (_0x1094d7, _0x368ee5) {
                return _0x3453b8['jaLoL'](_0x1094d7, _0x368ee5);
            }
        };
        let _0x3974c9;
        _0x3453b8['ppKvy'](beforeEach, () => {
            _0x3974c9 = sandbox['stub'](_0x4e28cf['provider'], _0x386f24['QIybf'])['resolves']();
        }), _0x3453b8['yMiHs'](afterEach, () => {
            _0x4e28cf['provider']['request']['restore']();
        }), _0x3453b8['ZFgEU'](it, _0x3453b8['DfAIf'], () => expect(_0x4e28cf['getObjectMetadata']())['to']['be']['fulfilled']['then'](_0x6ce58c => {
            _0x386f24['WdbFP'](expect, _0x3974c9)['to']['not']['have']['been']['called'], _0x386f24['XDoia'](expect, _0x6ce58c)['to']['deep']['equal']([]);
        })), _0x3453b8['SwLTz'](it, _0x3453b8['FepTa'], () => {
            const _0x5d0837 = [];
            return _0x3453b8['ThRud'](expect, _0x4e28cf['getObjectMetadata'](_0x5d0837))['to']['be']['fulfilled']['then'](_0x596429 => {
                _0x386f24['EwDGi'](expect, _0x3974c9)['to']['not']['have']['been']['called'], _0x386f24['EwDGi'](expect, _0x596429)['to']['deep']['equal']([]);
            });
        }), _0x3453b8['eVqwP'](it, _0x3453b8['YvJMd'], () => {
            const _0x3886cb = {
                    'TvaYW': _0x386f24['fPruO'],
                    'QYjKx': function (_0x4155e6, _0x164288) {
                        return _0x386f24['ZJEIs'](_0x4155e6, _0x164288);
                    },
                    'KGeGT': _0x386f24['VqGUJ'],
                    'wyAGW': function (_0x4a772b, _0x28fddf) {
                        return _0x386f24['ZJEIs'](_0x4a772b, _0x28fddf);
                    },
                    'qpzRV': function (_0x252a6f, _0x394cfc) {
                        return _0x386f24['ReJUt'](_0x252a6f, _0x394cfc);
                    }
                }, _0x5cfd01 = [
                    { 'Key': _0x2f5058 + '/151224711231-2016-08-18T15:43:00/artifact.zip' },
                    { 'Key': _0x2f5058 + '/151224711231-2016-08-18T15:43:00/cloudformation.json' },
                    { 'Key': _0x2f5058 + '/141264711231-2016-08-18T15:42:00/artifact.zip' },
                    { 'Key': _0x2f5058 + '/141264711231-2016-08-18T15:42:00/cloudformation.json' }
                ];
            return _0x386f24['ReJUt'](expect, _0x4e28cf['getObjectMetadata'](_0x5cfd01))['to']['be']['fulfilled']['then'](() => {
                const _0x323d89 = _0x3886cb['TvaYW']['split']('|');
                let _0x57f4d7 = 0x0;
                while (!![]) {
                    switch (_0x323d89[_0x57f4d7++]) {
                    case '0':
                        _0x3886cb['QYjKx'](expect, _0x3974c9)['to']['have']['been']['calledWithExactly']('S3', _0x3886cb['KGeGT'], {
                            'Bucket': _0x4e28cf['bucketName'],
                            'Key': _0x2f5058 + '/141264711231-2016-08-18T15:42:00/artifact.zip'
                        });
                        continue;
                    case '1':
                        _0x3886cb['QYjKx'](expect, _0x3974c9['callCount'])['to']['equal'](0x4);
                        continue;
                    case '2':
                        _0x3886cb['wyAGW'](expect, _0x3974c9)['to']['have']['been']['calledWithExactly']('S3', _0x3886cb['KGeGT'], {
                            'Bucket': _0x4e28cf['bucketName'],
                            'Key': _0x2f5058 + '/151224711231-2016-08-18T15:43:00/artifact.zip'
                        });
                        continue;
                    case '3':
                        _0x3886cb['wyAGW'](expect, _0x3974c9)['to']['have']['been']['calledWithExactly']('S3', _0x3886cb['KGeGT'], {
                            'Bucket': _0x4e28cf['bucketName'],
                            'Key': _0x2f5058 + '/141264711231-2016-08-18T15:42:00/cloudformation.json'
                        });
                        continue;
                    case '4':
                        _0x3886cb['qpzRV'](expect, _0x3974c9)['to']['have']['been']['calledWithExactly']('S3', _0x3886cb['KGeGT'], {
                            'Bucket': _0x4e28cf['bucketName'],
                            'Key': _0x2f5058 + '/151224711231-2016-08-18T15:43:00/cloudformation.json'
                        });
                        continue;
                    }
                    break;
                }
            });
        });
    }), _0x3453b8['fTDXC'](describe, _0x3453b8['sZrSY'], () => {
        const _0x3de7a5 = {
            'IyklC': _0x3453b8['qtfYY'],
            'BgStT': _0x3453b8['EaTnY'],
            'aMzxh': _0x3453b8['bwBSf'],
            'mLnHm': function (_0xab3a36, _0x313e94) {
                return _0x3453b8['EEFfJ'](_0xab3a36, _0x313e94);
            },
            'eaXEH': function (_0x18559e, _0x3ae7e4) {
                return _0x3453b8['FGEjm'](_0x18559e, _0x3ae7e4);
            },
            'dYsjZ': function (_0x4121a0, _0x24483f) {
                return _0x3453b8['fjfQw'](_0x4121a0, _0x24483f);
            },
            'WkvrD': _0x3453b8['BqxNi'],
            'pNRAQ': function (_0x2d09fd, _0x3ded2e) {
                return _0x3453b8['cLAKY'](_0x2d09fd, _0x3ded2e);
            },
            'TjIBI': function (_0x5875d5, _0x50e551) {
                return _0x3453b8['lcxmd'](_0x5875d5, _0x50e551);
            },
            'RFyHb': _0x3453b8['lORWJ'],
            'PXqeh': function (_0x8cb17f, _0x7b1b3d) {
                return _0x3453b8['lcxmd'](_0x8cb17f, _0x7b1b3d);
            },
            'nnWcC': _0x3453b8['XkdWz'],
            'uHfxF': _0x3453b8['oSjcf'],
            'QDrvW': _0x3453b8['WWIHh'],
            'iBFBL': _0x3453b8['caQdV'],
            'YrXYL': _0x3453b8['CBMZf'],
            'nlimi': _0x3453b8['dzbOf'],
            'MBlAX': function (_0xb10117, _0x2171ed) {
                return _0x3453b8['lcxmd'](_0xb10117, _0x2171ed);
            },
            'wtYVU': function (_0x2200fa, _0x3254c4) {
                return _0x3453b8['NauIt'](_0x2200fa, _0x3254c4);
            },
            'lXIkw': function (_0xcca765, _0x5ea0f6) {
                return _0x3453b8['SVqGJ'](_0xcca765, _0x5ea0f6);
            },
            'bsktj': function (_0xf78c4d, _0x3c69af) {
                return _0x3453b8['SVqGJ'](_0xf78c4d, _0x3c69af);
            },
            'TIlRj': function (_0x49d89e, _0x361224) {
                return _0x3453b8['MLqOT'](_0x49d89e, _0x361224);
            },
            'HrEWB': function (_0x2dc9e9, _0x187eb8) {
                return _0x3453b8['ZSFQZ'](_0x2dc9e9, _0x187eb8);
            },
            'IjUJj': _0x3453b8['Gfelr'],
            'QstBa': _0x3453b8['WiuRJ'],
            'giVOn': function (_0x17a759, _0x3645d0) {
                return _0x3453b8['mVuYm'](_0x17a759, _0x3645d0);
            },
            'qppVF': _0x3453b8['bHcCr'],
            'gvDvL': function (_0x3c02da, _0x555582) {
                return _0x3453b8['mIMqs'](_0x3c02da, _0x555582);
            },
            'UXrzB': function (_0x4ae673, _0x1ca014) {
                return _0x3453b8['uYEZh'](_0x4ae673, _0x1ca014);
            },
            'ZLXJV': _0x3453b8['kyoHo'],
            'MQKyH': function (_0x503406, _0x46347f) {
                return _0x3453b8['HmjRE'](_0x503406, _0x46347f);
            },
            'PrXPO': _0x3453b8['hkwJS'],
            'wzrna': function (_0x4a30b1, _0xcb5b60) {
                return _0x3453b8['HmjRE'](_0x4a30b1, _0xcb5b60);
            },
            'ZjORg': _0x3453b8['rpWRl'],
            'NhmiS': _0x3453b8['bVuWM'],
            'eUMnc': _0x3453b8['uQRXP'],
            'CkKEX': function (_0x318a9d, _0x33bcad) {
                return _0x3453b8['HmjRE'](_0x318a9d, _0x33bcad);
            },
            'nzLLS': function (_0x3f0bf8, _0x5cc219) {
                return _0x3453b8['dneDr'](_0x3f0bf8, _0x5cc219);
            },
            'JulwK': _0x3453b8['hymrL'],
            'wsnWh': function (_0x1c0899, _0x4c269e) {
                return _0x3453b8['NxqBV'](_0x1c0899, _0x4c269e);
            },
            'zijHK': function (_0x54665d, _0x69f8a4) {
                return _0x3453b8['MzSLg'](_0x54665d, _0x69f8a4);
            },
            'MBwac': function (_0x453383, _0x1b6fbc) {
                return _0x3453b8['MzSLg'](_0x453383, _0x1b6fbc);
            },
            'oFzMZ': _0x3453b8['QyepS'],
            'MKadT': _0x3453b8['IybHF'],
            'vPnVa': _0x3453b8['lPwAl']
        };
        let _0x2eb75f, _0x13765b, _0x33a6e0;
        _0x3453b8['MzSLg'](beforeEach, () => {
            _0x2eb75f = sandbox['stub'](normalizeFiles, _0x3de7a5['IyklC'])['returns'](), _0x13765b = sandbox['stub'](globby, _0x3de7a5['BgStT']), _0x33a6e0 = sandbox['stub'](fs, _0x3de7a5['aMzxh'])['yields'](null, undefined);
        }), _0x3453b8['MzSLg'](afterEach, () => {
            normalizeFiles['normalizeCloudFormationTemplate']['restore'](), globby['sync']['restore'](), fs['readFile']['restore']();
        }), _0x3453b8['dPUiX'](it, _0x3453b8['DfAIf'], () => expect(_0x4e28cf['checkIfDeploymentIsNecessary']())['to']['be']['fulfilled']['then'](() => {
            _0x3de7a5['mLnHm'](expect, _0x2eb75f)['to']['not']['have']['been']['called'], _0x3de7a5['mLnHm'](expect, _0x13765b)['to']['not']['have']['been']['called'], _0x3de7a5['eaXEH'](expect, _0x33a6e0)['to']['not']['have']['been']['called'], _0x3de7a5['dYsjZ'](expect, _0x4e28cf['serverless']['cli']['log'])['to']['not']['have']['been']['called'];
        })), _0x3453b8['VaByK'](it, _0x3453b8['FepTa'], () => {
            const _0x52322e = {
                    'EhBFc': function (_0x9be207, _0x4f95fb) {
                        return _0x3453b8['yMiHs'](_0x9be207, _0x4f95fb);
                    },
                    'dRlae': function (_0x795c0a, _0x54c0cb) {
                        return _0x3453b8['yZpXU'](_0x795c0a, _0x54c0cb);
                    }
                }, _0x76a56 = [];
            return _0x3453b8['yZpXU'](expect, _0x4e28cf['checkIfDeploymentIsNecessary'](_0x76a56))['to']['be']['fulfilled']['then'](() => {
                _0x52322e['EhBFc'](expect, _0x2eb75f)['to']['not']['have']['been']['called'], _0x52322e['EhBFc'](expect, _0x13765b)['to']['not']['have']['been']['called'], _0x52322e['dRlae'](expect, _0x33a6e0)['to']['not']['have']['been']['called'], _0x52322e['dRlae'](expect, _0x4e28cf['serverless']['cli']['log'])['to']['not']['have']['been']['called'];
            });
        }), _0x3453b8['VaByK'](it, _0x3453b8['rMbGU'], () => {
            _0x13765b['returns']([_0x3de7a5['QDrvW']]), _0x283226['createHash']()['update']()['digest']['onCall'](0x0)['returns'](_0x3de7a5['iBFBL']);
            const _0x5076bf = [{ 'Metadata': { 'filesha256': _0x3de7a5['YrXYL'] } }];
            return _0x3de7a5['PXqeh'](expect, _0x4e28cf['checkIfDeploymentIsNecessary'](_0x5076bf))['to']['be']['fulfilled']['then'](() => {
                const _0x4b37c8 = _0x3de7a5['WkvrD']['split']('|');
                let _0x58b9f9 = 0x0;
                while (!![]) {
                    switch (_0x4b37c8[_0x58b9f9++]) {
                    case '0':
                        _0x3de7a5['dYsjZ'](expect, _0x4e28cf['serverless']['service']['provider']['shouldNotDeploy'])['to']['equal'](undefined);
                        continue;
                    case '1':
                        _0x3de7a5['dYsjZ'](expect, _0x4e28cf['serverless']['cli']['log'])['to']['not']['have']['been']['called'];
                        continue;
                    case '2':
                        _0x3de7a5['pNRAQ'](expect, _0x33a6e0)['to']['have']['been']['calledOnce'];
                        continue;
                    case '3':
                        _0x3de7a5['TjIBI'](expect, _0x2eb75f)['to']['have']['been']['calledWithExactly'](_0x4e28cf['serverless']['service']['provider']['compiledCloudFormationTemplate']);
                        continue;
                    case '4':
                        _0x3de7a5['TjIBI'](expect, _0x33a6e0)['to']['have']['been']['calledWith'](path['resolve'](_0x4e28cf['serverless']['serviceDir'], _0x3de7a5['RFyHb']));
                        continue;
                    case '5':
                        _0x3de7a5['PXqeh'](expect, _0x13765b)['to']['have']['been']['calledOnce'];
                        continue;
                    case '6':
                        _0x3de7a5['PXqeh'](expect, _0x2eb75f)['to']['have']['been']['calledOnce'];
                        continue;
                    case '7':
                        _0x3de7a5['PXqeh'](expect, _0x13765b)['to']['have']['been']['calledWithExactly']([_0x3de7a5['nnWcC']], {
                            'cwd': path['join'](_0x4e28cf['serverless']['serviceDir'], _0x3de7a5['uHfxF']),
                            'dot': !![],
                            'silent': !![]
                        });
                        continue;
                    }
                    break;
                }
            });
        }), _0x3453b8['VaByK'](it, _0x3453b8['AmWin'], () => {
            _0x13765b['returns']([_0x3de7a5['QDrvW']]), _0x283226['createHash']()['update']()['digest']['onCall'](0x0)['returns'](_0x3de7a5['iBFBL']), _0x283226['createHash']()['update']()['digest']['onCall'](0x1)['returns'](_0x3de7a5['IjUJj']);
            const _0x997772 = [
                { 'Metadata': { 'filesha256': _0x3de7a5['YrXYL'] } },
                { 'Metadata': { 'filesha256': _0x3de7a5['QstBa'] } },
                { 'Metadata': {} }
            ];
            return _0x3de7a5['giVOn'](expect, _0x4e28cf['checkIfDeploymentIsNecessary'](_0x997772))['to']['be']['fulfilled']['then'](() => {
                const _0x2aab15 = _0x3de7a5['nlimi']['split']('|');
                let _0x43422e = 0x0;
                while (!![]) {
                    switch (_0x2aab15[_0x43422e++]) {
                    case '0':
                        _0x3de7a5['PXqeh'](expect, _0x13765b)['to']['have']['been']['calledWithExactly']([_0x3de7a5['nnWcC']], {
                            'cwd': path['join'](_0x4e28cf['serverless']['serviceDir'], _0x3de7a5['uHfxF']),
                            'dot': !![],
                            'silent': !![]
                        });
                        continue;
                    case '1':
                        _0x3de7a5['MBlAX'](expect, _0x4e28cf['serverless']['cli']['log'])['to']['not']['have']['been']['called'];
                        continue;
                    case '2':
                        _0x3de7a5['wtYVU'](expect, _0x13765b)['to']['have']['been']['calledOnce'];
                        continue;
                    case '3':
                        _0x3de7a5['lXIkw'](expect, _0x33a6e0)['to']['have']['been']['calledWith'](path['resolve'](_0x4e28cf['serverless']['serviceDir'], _0x3de7a5['RFyHb']));
                        continue;
                    case '4':
                        _0x3de7a5['bsktj'](expect, _0x2eb75f)['to']['have']['been']['calledOnce'];
                        continue;
                    case '5':
                        _0x3de7a5['TIlRj'](expect, _0x2eb75f)['to']['have']['been']['calledWithExactly'](_0x4e28cf['serverless']['service']['provider']['compiledCloudFormationTemplate']);
                        continue;
                    case '6':
                        _0x3de7a5['TIlRj'](expect, _0x33a6e0)['to']['have']['been']['calledOnce'];
                        continue;
                    case '7':
                        _0x3de7a5['HrEWB'](expect, _0x4e28cf['serverless']['service']['provider']['shouldNotDeploy'])['to']['equal'](undefined);
                        continue;
                    }
                    break;
                }
            });
        }), _0x3453b8['VaByK'](it, _0x3453b8['gqceq'], () => {
            const _0x591e56 = {
                'nxrCp': _0x3453b8['bpztX'],
                'qvQAb': function (_0x29fe1d, _0x9681ce) {
                    return _0x3453b8['bxSsT'](_0x29fe1d, _0x9681ce);
                },
                'QAAIJ': function (_0x47e5c5, _0x25906c) {
                    return _0x3453b8['bxSsT'](_0x47e5c5, _0x25906c);
                },
                'PEqkJ': _0x3453b8['lORWJ'],
                'gCANS': function (_0x3c670d, _0x1b1b2d) {
                    return _0x3453b8['ZsASX'](_0x3c670d, _0x1b1b2d);
                },
                'KKtKX': function (_0x1d4f81, _0x3acf0b) {
                    return _0x3453b8['ZsASX'](_0x1d4f81, _0x3acf0b);
                },
                'ZLFon': function (_0x155bc8, _0x13fb6c) {
                    return _0x3453b8['ZsASX'](_0x155bc8, _0x13fb6c);
                },
                'gKLhU': _0x3453b8['XkdWz'],
                'QqCYY': _0x3453b8['oSjcf'],
                'rwagx': function (_0x57c67e, _0x389e0c) {
                    return _0x3453b8['ZsASX'](_0x57c67e, _0x389e0c);
                }
            };
            _0x13765b['returns']([_0x3453b8['WWIHh']]), _0x283226['createHash']()['update']()['digest']['onCall'](0x0)['returns'](_0x3453b8['caQdV']), _0x283226['createHash']()['update']()['digest']['onCall'](0x1)['returns'](_0x3453b8['Gfelr']);
            const _0x11a1db = [
                { 'Metadata': { 'filesha256': _0x3453b8['CBMZf'] } },
                { 'Metadata': { 'filesha256': _0x3453b8['WiuRJ'] } }
            ];
            return _0x3453b8['ZsASX'](expect, _0x4e28cf['checkIfDeploymentIsNecessary'](_0x11a1db))['to']['be']['fulfilled']['then'](() => {
                const _0x958735 = _0x591e56['nxrCp']['split']('|');
                let _0x533195 = 0x0;
                while (!![]) {
                    switch (_0x958735[_0x533195++]) {
                    case '0':
                        _0x591e56['qvQAb'](expect, _0x2eb75f)['to']['have']['been']['calledWithExactly'](_0x4e28cf['serverless']['service']['provider']['compiledCloudFormationTemplate']);
                        continue;
                    case '1':
                        _0x591e56['QAAIJ'](expect, _0x2eb75f)['to']['have']['been']['calledOnce'];
                        continue;
                    case '2':
                        _0x591e56['QAAIJ'](expect, _0x33a6e0)['to']['have']['been']['calledWith'](path['resolve'](_0x4e28cf['serverless']['serviceDir'], _0x591e56['PEqkJ']));
                        continue;
                    case '3':
                        _0x591e56['gCANS'](expect, _0x13765b)['to']['have']['been']['calledOnce'];
                        continue;
                    case '4':
                        _0x591e56['KKtKX'](expect, _0x33a6e0)['to']['have']['been']['calledOnce'];
                        continue;
                    case '5':
                        _0x591e56['ZLFon'](expect, _0x13765b)['to']['have']['been']['calledWithExactly']([_0x591e56['gKLhU']], {
                            'cwd': path['join'](_0x4e28cf['serverless']['serviceDir'], _0x591e56['QqCYY']),
                            'dot': !![],
                            'silent': !![]
                        });
                        continue;
                    case '6':
                        _0x591e56['ZLFon'](expect, _0x4e28cf['serverless']['cli']['log'])['to']['not']['have']['been']['called'];
                        continue;
                    case '7':
                        _0x591e56['rwagx'](expect, _0x4e28cf['serverless']['service']['provider']['shouldNotDeploy'])['to']['equal'](undefined);
                        continue;
                    }
                    break;
                }
            });
        }), _0x3453b8['ybumO'](it, _0x3453b8['znkwQ'], () => {
            const _0xa55b7c = {
                'MbcfE': _0x3de7a5['qppVF'],
                'XvCfU': function (_0x27ec91, _0x40cbeb) {
                    return _0x3de7a5['gvDvL'](_0x27ec91, _0x40cbeb);
                },
                'qeRWw': function (_0x23a44a, _0x35457b) {
                    return _0x3de7a5['UXrzB'](_0x23a44a, _0x35457b);
                },
                'YYKEy': function (_0x3cb5d, _0x34e8c3) {
                    return _0x3de7a5['UXrzB'](_0x3cb5d, _0x34e8c3);
                },
                'hFdSm': _0x3de7a5['ZLXJV'],
                'cLPAW': _0x3de7a5['nnWcC'],
                'fHClY': _0x3de7a5['uHfxF'],
                'BzUaK': function (_0x192321, _0x461fb1) {
                    return _0x3de7a5['MQKyH'](_0x192321, _0x461fb1);
                },
                'ChFPY': _0x3de7a5['PrXPO'],
                'jzMBU': function (_0x48d065, _0x538644) {
                    return _0x3de7a5['wzrna'](_0x48d065, _0x538644);
                }
            };
            _0x13765b['returns']([
                _0x3de7a5['ZjORg'],
                _0x3de7a5['NhmiS']
            ]), _0x283226['createHash']()['update']()['digest']['onCall'](0x0)['returns'](_0x3de7a5['YrXYL']), _0x283226['createHash']()['update']()['digest']['onCall'](0x1)['returns'](_0x3de7a5['QstBa']), _0x283226['createHash']()['update']()['digest']['onCall'](0x2)['returns'](_0x3de7a5['QstBa']);
            const _0x912539 = [
                { 'Metadata': { 'filesha256': _0x3de7a5['YrXYL'] } },
                { 'Metadata': { 'filesha256': _0x3de7a5['QstBa'] } }
            ];
            return _0x3de7a5['wzrna'](expect, _0x4e28cf['checkIfDeploymentIsNecessary'](_0x912539))['to']['be']['fulfilled']['then'](() => {
                const _0x4b173f = _0xa55b7c['MbcfE']['split']('|');
                let _0x128478 = 0x0;
                while (!![]) {
                    switch (_0x4b173f[_0x128478++]) {
                    case '0':
                        _0xa55b7c['XvCfU'](expect, _0x2eb75f)['to']['have']['been']['calledOnce'];
                        continue;
                    case '1':
                        _0xa55b7c['qeRWw'](expect, _0x2eb75f)['to']['have']['been']['calledWithExactly'](_0x4e28cf['serverless']['service']['provider']['compiledCloudFormationTemplate']);
                        continue;
                    case '2':
                        _0xa55b7c['qeRWw'](expect, _0x33a6e0)['to']['have']['been']['calledTwice'];
                        continue;
                    case '3':
                        _0xa55b7c['qeRWw'](expect, _0x4e28cf['serverless']['cli']['log'])['to']['not']['have']['been']['called'];
                        continue;
                    case '4':
                        _0xa55b7c['YYKEy'](expect, _0x33a6e0)['to']['have']['been']['calledWith'](path['resolve'](_0x4e28cf['serverless']['serviceDir'], _0xa55b7c['hFdSm']));
                        continue;
                    case '5':
                        _0xa55b7c['YYKEy'](expect, _0x13765b)['to']['have']['been']['calledWithExactly']([_0xa55b7c['cLPAW']], {
                            'cwd': path['join'](_0x4e28cf['serverless']['serviceDir'], _0xa55b7c['fHClY']),
                            'dot': !![],
                            'silent': !![]
                        });
                        continue;
                    case '6':
                        _0xa55b7c['BzUaK'](expect, _0x13765b)['to']['have']['been']['calledOnce'];
                        continue;
                    case '7':
                        _0xa55b7c['BzUaK'](expect, _0x33a6e0)['to']['have']['been']['calledWith'](path['resolve'](_0x4e28cf['serverless']['serviceDir'], _0xa55b7c['ChFPY']));
                        continue;
                    case '8':
                        _0xa55b7c['jzMBU'](expect, _0x4e28cf['serverless']['service']['provider']['shouldNotDeploy'])['to']['equal'](undefined);
                        continue;
                    }
                    break;
                }
            });
        }), _0x3453b8['ybumO'](it, _0x3453b8['WywYB'], () => {
            const _0x1ceb5f = {
                'LPKSR': _0x3453b8['LACYk'],
                'ncrBH': function (_0x48c467, _0x2e88f1) {
                    return _0x3453b8['itdLT'](_0x48c467, _0x2e88f1);
                },
                'kHYJS': function (_0x3f3bbd, _0x1ed978) {
                    return _0x3453b8['Haebx'](_0x3f3bbd, _0x1ed978);
                },
                'uFKVD': _0x3453b8['XkdWz'],
                'vAZnE': _0x3453b8['oSjcf'],
                'xLwsV': function (_0x2fb49d, _0x411336) {
                    return _0x3453b8['Haebx'](_0x2fb49d, _0x411336);
                },
                'HfPgS': _0x3453b8['lORWJ']
            };
            _0x13765b['returns']([_0x3453b8['WWIHh']]), _0x283226['createHash']()['update']()['digest']['onCall'](0x0)['returns'](_0x3453b8['QyepS']), _0x283226['createHash']()['update']()['digest']['onCall'](0x1)['returns'](_0x3453b8['cKYYC']);
            const _0xe89b7b = new Date(), _0x9bed31 = new Date(_0x3453b8['jmUip'](new Date()['getTime'](), 0x186a0)), _0x3470cb = new Date(_0x3453b8['zPiKp'](new Date()['getTime'](), 0x186a0)), _0x319e90 = [
                    {
                        'Metadata': { 'filesha256': _0x3453b8['QyepS'] },
                        'LastModified': _0x9bed31
                    },
                    {
                        'Metadata': { 'filesha256': _0x3453b8['cKYYC'] },
                        'LastModified': _0x3470cb
                    }
                ];
            return _0x3453b8['OrfgN'](expect, _0x4e28cf['checkIfDeploymentIsNecessary'](_0x319e90, _0xe89b7b))['to']['be']['fulfilled']['then'](() => {
                const _0x24fb6d = _0x1ceb5f['LPKSR']['split']('|');
                let _0x4bfb72 = 0x0;
                while (!![]) {
                    switch (_0x24fb6d[_0x4bfb72++]) {
                    case '0':
                        _0x1ceb5f['ncrBH'](expect, _0x33a6e0)['to']['have']['been']['calledOnce'];
                        continue;
                    case '1':
                        _0x1ceb5f['ncrBH'](expect, _0x4e28cf['serverless']['cli']['log'])['to']['not']['have']['been']['called'];
                        continue;
                    case '2':
                        _0x1ceb5f['ncrBH'](expect, _0x2eb75f)['to']['have']['been']['calledOnce'];
                        continue;
                    case '3':
                        _0x1ceb5f['kHYJS'](expect, _0x4e28cf['serverless']['service']['provider']['shouldNotDeploy'])['to']['equal'](undefined);
                        continue;
                    case '4':
                        _0x1ceb5f['kHYJS'](expect, _0x2eb75f)['to']['have']['been']['calledWithExactly'](_0x4e28cf['serverless']['service']['provider']['compiledCloudFormationTemplate']);
                        continue;
                    case '5':
                        _0x1ceb5f['kHYJS'](expect, _0x13765b)['to']['have']['been']['calledWithExactly']([_0x1ceb5f['uFKVD']], {
                            'cwd': path['join'](_0x4e28cf['serverless']['serviceDir'], _0x1ceb5f['vAZnE']),
                            'dot': !![],
                            'silent': !![]
                        });
                        continue;
                    case '6':
                        _0x1ceb5f['kHYJS'](expect, _0x13765b)['to']['have']['been']['calledOnce'];
                        continue;
                    case '7':
                        _0x1ceb5f['xLwsV'](expect, _0x33a6e0)['to']['have']['been']['calledWith'](path['resolve'](_0x4e28cf['serverless']['serviceDir'], _0x1ceb5f['HfPgS']));
                        continue;
                    }
                    break;
                }
            });
        }), _0x3453b8['Dmhwx'](it, _0x3453b8['VmddC'], () => {
            const _0x517d4a = {
                'damcC': _0x3453b8['TnUZx'],
                'PZVLq': function (_0x312183, _0x30dda3) {
                    return _0x3453b8['mwMis'](_0x312183, _0x30dda3);
                },
                'SDvUJ': _0x3453b8['lORWJ'],
                'lFHTZ': function (_0x57e0e2, _0x46e48c) {
                    return _0x3453b8['mwMis'](_0x57e0e2, _0x46e48c);
                },
                'JbmSU': _0x3453b8['XkdWz'],
                'HFIjg': _0x3453b8['oSjcf'],
                'fiTSW': function (_0x50063a, _0x3b8c5e) {
                    return _0x3453b8['mwMis'](_0x50063a, _0x3b8c5e);
                },
                'mMJam': function (_0x5ad20c, _0x14ece8) {
                    return _0x3453b8['mwMis'](_0x5ad20c, _0x14ece8);
                }
            };
            _0x13765b['returns']([_0x3453b8['WWIHh']]), _0x283226['createHash']()['update']()['digest']['onCall'](0x0)['returns'](_0x3453b8['QyepS']), _0x283226['createHash']()['update']()['digest']['onCall'](0x1)['returns'](_0x3453b8['cKYYC']);
            const _0x40c5c1 = [
                { 'Metadata': { 'filesha256': _0x3453b8['QyepS'] } },
                { 'Metadata': { 'filesha256': _0x3453b8['cKYYC'] } }
            ];
            return _0x3453b8['mwMis'](expect, _0x4e28cf['checkIfDeploymentIsNecessary'](_0x40c5c1))['to']['be']['fulfilled']['then'](() => {
                const _0x26f1ec = _0x517d4a['damcC']['split']('|');
                let _0x27d912 = 0x0;
                while (!![]) {
                    switch (_0x26f1ec[_0x27d912++]) {
                    case '0':
                        _0x517d4a['PZVLq'](expect, _0x33a6e0)['to']['have']['been']['calledOnce'];
                        continue;
                    case '1':
                        _0x517d4a['PZVLq'](expect, _0x33a6e0)['to']['have']['been']['calledWith'](path['resolve'](_0x4e28cf['serverless']['serviceDir'], _0x517d4a['SDvUJ']));
                        continue;
                    case '2':
                        _0x517d4a['lFHTZ'](expect, _0x2eb75f)['to']['have']['been']['calledWithExactly'](_0x4e28cf['serverless']['service']['provider']['compiledCloudFormationTemplate']);
                        continue;
                    case '3':
                        _0x517d4a['lFHTZ'](expect, _0x13765b)['to']['have']['been']['calledWithExactly']([_0x517d4a['JbmSU']], {
                            'cwd': path['join'](_0x4e28cf['serverless']['serviceDir'], _0x517d4a['HFIjg']),
                            'dot': !![],
                            'silent': !![]
                        });
                        continue;
                    case '4':
                        _0x517d4a['lFHTZ'](expect, _0x4e28cf['serverless']['service']['provider']['shouldNotDeploy'])['to']['equal'](!![]);
                        continue;
                    case '5':
                        _0x517d4a['fiTSW'](expect, _0x2eb75f)['to']['have']['been']['calledOnce'];
                        continue;
                    case '6':
                        _0x517d4a['mMJam'](expect, _0x4e28cf['serverless']['cli']['log'])['to']['have']['been']['calledOnce'];
                        continue;
                    case '7':
                        _0x517d4a['mMJam'](expect, _0x13765b)['to']['have']['been']['calledOnce'];
                        continue;
                    }
                    break;
                }
            });
        }), _0x3453b8['nUvhZ'](it, _0x3453b8['MXLMZ'], () => {
            const _0x4e3c66 = {
                'Esaiu': _0x3453b8['QEkuS'],
                'ScMsj': function (_0x4188d0, _0x2629d0) {
                    return _0x3453b8['xqcst'](_0x4188d0, _0x2629d0);
                },
                'MefmP': function (_0x68312, _0x3a440b) {
                    return _0x3453b8['bTLsR'](_0x68312, _0x3a440b);
                },
                'nsdoK': _0x3453b8['XkdWz'],
                'BHepB': _0x3453b8['oSjcf'],
                'zKIAp': function (_0x511838, _0x328b7b) {
                    return _0x3453b8['bTLsR'](_0x511838, _0x328b7b);
                },
                'TBLQB': function (_0x3a6437, _0x43775f) {
                    return _0x3453b8['MZrDj'](_0x3a6437, _0x43775f);
                },
                'xSfUD': function (_0x491751, _0x511503) {
                    return _0x3453b8['MZrDj'](_0x491751, _0x511503);
                },
                'PTltD': function (_0x278e33, _0x4134da) {
                    return _0x3453b8['MZrDj'](_0x278e33, _0x4134da);
                },
                'AkDPm': _0x3453b8['lORWJ']
            };
            _0x13765b['returns']([_0x3453b8['WWIHh']]), _0x283226['createHash']()['update']()['digest']['onCall'](0x0)['returns'](_0x3453b8['QyepS']), _0x283226['createHash']()['update']()['digest']['onCall'](0x1)['returns'](_0x3453b8['cKYYC']);
            const _0x454f80 = new Date(_0x3453b8['jmUip'](new Date()['getTime'](), 0x186a0)), _0x291c98 = new Date(_0x3453b8['jmUip'](new Date()['getTime'](), 0x30d40)), _0x4f1442 = [
                    {
                        'Metadata': { 'filesha256': _0x3453b8['QyepS'] },
                        'LastModified': _0x291c98
                    },
                    {
                        'Metadata': { 'filesha256': _0x3453b8['cKYYC'] },
                        'LastModified': _0x291c98
                    }
                ];
            return _0x3453b8['NYRfI'](expect, _0x4e28cf['checkIfDeploymentIsNecessary'](_0x4f1442, _0x454f80))['to']['be']['fulfilled']['then'](() => {
                const _0x299510 = _0x4e3c66['Esaiu']['split']('|');
                let _0x547008 = 0x0;
                while (!![]) {
                    switch (_0x299510[_0x547008++]) {
                    case '0':
                        _0x4e3c66['ScMsj'](expect, _0x4e28cf['serverless']['service']['provider']['shouldNotDeploy'])['to']['equal'](!![]);
                        continue;
                    case '1':
                        _0x4e3c66['MefmP'](expect, _0x33a6e0)['to']['have']['been']['calledOnce'];
                        continue;
                    case '2':
                        _0x4e3c66['MefmP'](expect, _0x13765b)['to']['have']['been']['calledWithExactly']([_0x4e3c66['nsdoK']], {
                            'cwd': path['join'](_0x4e28cf['serverless']['serviceDir'], _0x4e3c66['BHepB']),
                            'dot': !![],
                            'silent': !![]
                        });
                        continue;
                    case '3':
                        _0x4e3c66['zKIAp'](expect, _0x4e28cf['serverless']['cli']['log'])['to']['have']['been']['calledOnce'];
                        continue;
                    case '4':
                        _0x4e3c66['TBLQB'](expect, _0x13765b)['to']['have']['been']['calledOnce'];
                        continue;
                    case '5':
                        _0x4e3c66['xSfUD'](expect, _0x2eb75f)['to']['have']['been']['calledWithExactly'](_0x4e28cf['serverless']['service']['provider']['compiledCloudFormationTemplate']);
                        continue;
                    case '6':
                        _0x4e3c66['PTltD'](expect, _0x33a6e0)['to']['have']['been']['calledWith'](path['resolve'](_0x4e28cf['serverless']['serviceDir'], _0x4e3c66['AkDPm']));
                        continue;
                    case '7':
                        _0x4e3c66['PTltD'](expect, _0x2eb75f)['to']['have']['been']['calledOnce'];
                        continue;
                    }
                    break;
                }
            });
        }), _0x3453b8['MWjQW'](it, _0x3453b8['lRzQV'], () => {
            const _0x379cae = {
                'tydAU': _0x3453b8['KtdwY'],
                'UPIxw': function (_0x6a6451, _0x4543ee) {
                    return _0x3453b8['NYRfI'](_0x6a6451, _0x4543ee);
                },
                'Dnvit': function (_0x44aa63, _0x45d53c) {
                    return _0x3453b8['NYRfI'](_0x44aa63, _0x45d53c);
                },
                'ZlHuZ': _0x3453b8['hkwJS'],
                'wDzjN': function (_0x299b44, _0xaf4d8c) {
                    return _0x3453b8['EEFfJ'](_0x299b44, _0xaf4d8c);
                },
                'ulpAs': _0x3453b8['XkdWz'],
                'UXWvj': _0x3453b8['oSjcf'],
                'QRgPq': function (_0x1c8d5c, _0x4d7272) {
                    return _0x3453b8['EEFfJ'](_0x1c8d5c, _0x4d7272);
                },
                'TBMdT': function (_0x752f2f, _0xaad9fb) {
                    return _0x3453b8['EEFfJ'](_0x752f2f, _0xaad9fb);
                },
                'WitWF': _0x3453b8['kyoHo']
            };
            _0x13765b['returns']([
                _0x3453b8['rpWRl'],
                _0x3453b8['bVuWM']
            ]), _0x283226['createHash']()['update']()['digest']['onCall'](0x0)['returns'](_0x3453b8['QyepS']), _0x283226['createHash']()['update']()['digest']['onCall'](0x1)['returns'](_0x3453b8['cKYYC']), _0x283226['createHash']()['update']()['digest']['onCall'](0x2)['returns'](_0x3453b8['cKYYC']);
            const _0x11b3a3 = [
                { 'Metadata': { 'filesha256': _0x3453b8['QyepS'] } },
                { 'Metadata': { 'filesha256': _0x3453b8['cKYYC'] } },
                { 'Metadata': { 'filesha256': _0x3453b8['cKYYC'] } }
            ];
            return _0x3453b8['EEFfJ'](expect, _0x4e28cf['checkIfDeploymentIsNecessary'](_0x11b3a3))['to']['be']['fulfilled']['then'](() => {
                const _0x3d90f1 = _0x379cae['tydAU']['split']('|');
                let _0x373fcb = 0x0;
                while (!![]) {
                    switch (_0x3d90f1[_0x373fcb++]) {
                    case '0':
                        _0x379cae['UPIxw'](expect, _0x13765b)['to']['have']['been']['calledOnce'];
                        continue;
                    case '1':
                        _0x379cae['Dnvit'](expect, _0x33a6e0)['to']['have']['been']['calledWith'](path['resolve'](_0x4e28cf['serverless']['serviceDir'], _0x379cae['ZlHuZ']));
                        continue;
                    case '2':
                        _0x379cae['wDzjN'](expect, _0x13765b)['to']['have']['been']['calledWithExactly']([_0x379cae['ulpAs']], {
                            'cwd': path['join'](_0x4e28cf['serverless']['serviceDir'], _0x379cae['UXWvj']),
                            'dot': !![],
                            'silent': !![]
                        });
                        continue;
                    case '3':
                        _0x379cae['QRgPq'](expect, _0x4e28cf['serverless']['service']['provider']['shouldNotDeploy'])['to']['equal'](!![]);
                        continue;
                    case '4':
                        _0x379cae['QRgPq'](expect, _0x33a6e0)['to']['have']['been']['calledTwice'];
                        continue;
                    case '5':
                        _0x379cae['QRgPq'](expect, _0x2eb75f)['to']['have']['been']['calledWithExactly'](_0x4e28cf['serverless']['service']['provider']['compiledCloudFormationTemplate']);
                        continue;
                    case '6':
                        _0x379cae['TBMdT'](expect, _0x4e28cf['serverless']['cli']['log'])['to']['have']['been']['calledOnce'];
                        continue;
                    case '7':
                        _0x379cae['TBMdT'](expect, _0x2eb75f)['to']['have']['been']['calledOnce'];
                        continue;
                    case '8':
                        _0x379cae['TBMdT'](expect, _0x33a6e0)['to']['have']['been']['calledWith'](path['resolve'](_0x4e28cf['serverless']['serviceDir'], _0x379cae['WitWF']));
                        continue;
                    }
                    break;
                }
            });
        }), _0x3453b8['gTwLZ'](it, _0x3453b8['meJpn'], () => {
            const _0x5b82d0 = {
                'APPVL': _0x3de7a5['eUMnc'],
                'caBfi': function (_0x37adf0, _0x5b0c0e) {
                    return _0x3de7a5['CkKEX'](_0x37adf0, _0x5b0c0e);
                },
                'EHkCH': _0x3de7a5['nnWcC'],
                'EUHcl': _0x3de7a5['uHfxF'],
                'EzRrE': function (_0x3cb14b, _0x204947) {
                    return _0x3de7a5['nzLLS'](_0x3cb14b, _0x204947);
                },
                'PkcIG': _0x3de7a5['JulwK'],
                'JefQC': function (_0x1098b7, _0x3b0111) {
                    return _0x3de7a5['wsnWh'](_0x1098b7, _0x3b0111);
                },
                'NWKqv': function (_0x3cb648, _0x497626) {
                    return _0x3de7a5['zijHK'](_0x3cb648, _0x497626);
                },
                'PTWJx': function (_0x586820, _0x405007) {
                    return _0x3de7a5['MBwac'](_0x586820, _0x405007);
                }
            };
            _0x4e28cf['serverless']['service']['package'] = { 'artifact': _0x3de7a5['JulwK'] }, _0x13765b['returns']([]), _0x283226['createHash']()['update']()['digest']['onCall'](0x0)['returns'](_0x3de7a5['oFzMZ']), _0x283226['createHash']()['update']()['digest']['onCall'](0x1)['returns'](_0x3de7a5['MKadT']);
            const _0x56265c = [
                { 'Metadata': { 'filesha256': _0x3de7a5['oFzMZ'] } },
                { 'Metadata': { 'filesha256': _0x3de7a5['vPnVa'] } }
            ];
            return _0x3de7a5['MBwac'](expect, _0x4e28cf['checkIfDeploymentIsNecessary'](_0x56265c))['to']['be']['fulfilled']['then'](() => {
                const _0x975170 = _0x5b82d0['APPVL']['split']('|');
                let _0x11bab0 = 0x0;
                while (!![]) {
                    switch (_0x975170[_0x11bab0++]) {
                    case '0':
                        _0x5b82d0['caBfi'](expect, _0x13765b)['to']['have']['been']['calledWithExactly']([_0x5b82d0['EHkCH']], {
                            'cwd': path['join'](_0x4e28cf['serverless']['serviceDir'], _0x5b82d0['EUHcl']),
                            'dot': !![],
                            'silent': !![]
                        });
                        continue;
                    case '1':
                        _0x5b82d0['caBfi'](expect, _0x2eb75f)['to']['have']['been']['calledWithExactly'](_0x4e28cf['serverless']['service']['provider']['compiledCloudFormationTemplate']);
                        continue;
                    case '2':
                        _0x5b82d0['caBfi'](expect, _0x4e28cf['serverless']['service']['provider']['shouldNotDeploy'])['to']['equal'](undefined);
                        continue;
                    case '3':
                        _0x5b82d0['EzRrE'](expect, _0x33a6e0)['to']['have']['been']['calledWith'](path['resolve'](_0x4e28cf['serverless']['serviceDir'], _0x5b82d0['PkcIG']));
                        continue;
                    case '4':
                        _0x5b82d0['JefQC'](expect, _0x4e28cf['serverless']['cli']['log'])['not']['to']['be']['called'];
                        continue;
                    case '5':
                        _0x5b82d0['NWKqv'](expect, _0x13765b)['to']['have']['been']['calledOnce'];
                        continue;
                    case '6':
                        _0x5b82d0['PTWJx'](expect, _0x33a6e0)['to']['have']['been']['calledOnce'];
                        continue;
                    case '7':
                        _0x5b82d0['PTWJx'](expect, _0x2eb75f)['to']['have']['been']['calledOnce'];
                        continue;
                    }
                    break;
                }
            });
        });
    });
}), describe('checkForChanges\x20#2', () => {
    const _0x10bc10 = {
        'iztJw': function (_0x3cfd97, _0x2ee624) {
            return _0x3cfd97(_0x2ee624);
        },
        'WpLZO': '/artifact.zip',
        'MZMkP': function (_0x31569d, _0x18b8d8, _0x17d117) {
            return _0x31569d(_0x18b8d8, _0x17d117);
        },
        'wqWVM': 'Should\x20recognize\x20package.artifact'
    };
    _0x10bc10['MZMkP'](it, _0x10bc10['wqWVM'], () => runServerless({
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
    })['then'](({cfTemplate: _0x12a1a5}) => {
        _0x10bc10['iztJw'](expect, _0x12a1a5['Resources']['FooLambdaFunction']['Properties']['Code']['S3Key']['endsWith'](_0x10bc10['WpLZO']))['to']['be']['true'];
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
    }, generateMatchingListObjectsResponse = async _0x16e5f6 => {
        const _0x2116d8 = {
                'GZtWu': function (_0xcf457c, _0x46e598, _0x1b4242) {
                    return _0xcf457c(_0x46e598, _0x1b4242);
                },
                'mfMHw': 'zip',
                'JFhjc': 'compiled-cloudformation-template.json'
            }, _0x38be5a = _0x16e5f6['serviceDir'] + '/.serverless', _0x20b9ee = await _0x2116d8['GZtWu'](globby, _0x38be5a, { 'expandDirectories': { 'extensions': [_0x2116d8['mfMHw']] } });
        return _0x20b9ee['push'](_0x2116d8['JFhjc']), {
            'Contents': _0x20b9ee['map'](_0x2ea716 => ({
                'Key': 'serverless/test-package-artifact/dev/1589988704359-2020-05-20T15:31:44.359Z/' + _0x2ea716,
                'LastModified': new Date('2020-05-20T15:30:16.494+0000')
            }))
        };
    }, generateMatchingHeadObjectResponse = async (_0x2a1557, {Key: _0x1c2412}) => {
        const _0x3567ab = {
            'ihZKA': 'sha256',
            'YmaAE': 'data',
            'Pezct': 'close',
            'vjUdV': function (_0x1f0259, _0x52acc5) {
                return _0x1f0259 === _0x52acc5;
            },
            'FLzTq': 'compiled-cloudformation-template.json',
            'xUWJc': 'base64'
        };
        if (_0x3567ab['vjUdV'](path['basename'](_0x1c2412), _0x3567ab['FLzTq'])) {
            const _0x3c9975 = _0x2a1557['service']['provider']['compiledCloudFormationTemplate'], _0x49ab8f = normalizeFiles['normalizeCloudFormationTemplate'](_0x3c9975), _0x307155 = crypto['createHash'](_0x3567ab['ihZKA'])['update'](JSON['stringify'](_0x49ab8f))['digest'](_0x3567ab['xUWJc']);
            return { 'Metadata': { 'filesha256': _0x307155 } };
        }
        const _0x39ed78 = await (async _0x54d623 => {
            const _0x5e42f4 = {
                'fGlQZ': _0x3567ab['ihZKA'],
                'zqdUC': _0x3567ab['YmaAE'],
                'bCZfY': _0x3567ab['Pezct']
            };
            return new Promise(_0x4d0771 => {
                const _0xa35d4c = crypto['createHash'](_0x5e42f4['fGlQZ']), _0x1b2f7f = fs['createReadStream'](_0x2a1557['serviceDir'] + '/.serverless/' + _0x54d623);
                _0x1b2f7f['on'](_0x5e42f4['zqdUC'], _0x52511c => _0xa35d4c['update'](_0x52511c)), _0x1b2f7f['on'](_0x5e42f4['bCZfY'], () => _0x4d0771(_0xa35d4c['digest']('base64')));
            });
        })(_0x1c2412);
        return { 'Metadata': { 'filesha256': _0x39ed78 } };
    };
describe('test/unit/lib/plugins/aws/deploy/lib/checkForChanges.test.js', () => {
    const _0x48dc24 = {
        'lHYpa': function (_0x277321, _0x2650f8) {
            return _0x277321(_0x2650f8);
        },
        'bVtvk': 'checkForChanges',
        'VqgxS': 'deploy',
        'VTFfe': 'aws:deploy:deploy:checkForChanges',
        'RVhjV': 'ignore',
        'rzrzB': '2021-05-20T15:34:16.494+0000',
        'xcxal': function (_0x2c1fef, _0x570664) {
            return _0x2c1fef(_0x570664);
        },
        'oatyy': function (_0x3c1283, _0x2740ec) {
            return _0x3c1283(_0x2740ec);
        },
        'lDHNX': 'packageFoldern',
        'UWHEb': function (_0x467213, _0x81dd31) {
            return _0x467213(_0x81dd31);
        },
        'PyYqp': function (_0x5c663c, _0x5c3f31) {
            return _0x5c663c(_0x5c3f31);
        },
        'EzSxX': 'package',
        'wVGAZ': function (_0x203cbc, _0x1dbe88) {
            return _0x203cbc(_0x1dbe88);
        },
        'FbisF': function (_0x209862, _0x22abd2) {
            return _0x209862(_0x22abd2);
        },
        'iquhf': function (_0x10c7e9, _0x28349a) {
            return _0x10c7e9(_0x28349a);
        },
        'BhPjX': function (_0x2d556f, _0xa234a8) {
            return _0x2d556f(_0xa234a8);
        },
        'OMDtH': function (_0x4a179b, _0x53cf24) {
            return _0x4a179b(_0x53cf24);
        },
        'mHRmq': 'artifact.zip',
        'jCyDL': 'deployment-bucket',
        'PyJXu': 'serverless/test-package-artifact/dev/1589988704359-2020-05-20T15:31:44.359Z/compiled-cloudformation-template.json',
        'DPmkT': 'pZOdrt6qijT7ITsLQjPP9QwgMAfKA2RuUUSTW+l8wWs=',
        'vxJJb': 'serverless/test-package-artifact/dev/1589988704359-2020-05-20T15:31:44.359Z/my-own.zip',
        'Ewdll': 'T0qEYHOE4Xv2E8Ar03xGogAlElcdf/dQh/lh9ao7Glo=',
        'GDunn': function (_0x22afbc, _0x4bda70) {
            return _0x22afbc(_0x4bda70);
        },
        'nIeXb': 'packageArtifactInServerlessDir',
        'akopP': 'test-packageArtifactInServerlessDir',
        'DFNtB': '2020-05-20T15:34:16.494+0000',
        'xAjDo': '\x225102a4cf710cae6497dba9e61b85d0a4\x22',
        'GeTbq': 'STANDARD',
        'dhNYa': 'WARNING:\x20Not\x20authorized\x20to\x20perform:\x20lambda:GetFunction\x20for\x20at\x20least\x20one\x20of\x20the\x20lambda\x20functions.',
        'pDIcV': '\x20Deployment\x20will\x20not\x20be\x20skipped\x20even\x20if\x20service\x20files\x20did\x20not\x20change.\x20',
        'hTsre': function (_0x49c90b, _0x33c190) {
            return _0x49c90b(_0x33c190);
        },
        'kDysL': 'code',
        'ylmGR': function (_0x536d86, _0x1a8eb7) {
            return _0x536d86(_0x1a8eb7);
        },
        'aTYRi': 'aws',
        'mJBQj': 'Fn2',
        'pEzvI': 'arn:aws:lambda:us-east-1:999999999999:function:test-checkForChanges-cdr3ogg-dev-fn1',
        'ckagA': 'fn1',
        'KuACr': function (_0x33581e, _0x55fad9) {
            return _0x33581e(_0x55fad9);
        },
        'PYmli': 'someLogGroupName',
        'HMAEc': 'someLogGroupName1',
        'txanf': 'someLogGroupName2',
        'aLASK': function (_0x4f4663, _0x2d990d) {
            return _0x4f4663(_0x2d990d);
        },
        'ickbl': 'Fn1',
        'icGhz': function (_0x71734f, _0x5e7ffb) {
            return _0x71734f(_0x5e7ffb);
        },
        'XrRct': function (_0x14e2e9, _0xf7a2b3) {
            return _0x14e2e9(_0xf7a2b3);
        },
        'dFbzR': function (_0x3d7ce4, _0x1da3b9) {
            return _0x3d7ce4(_0x1da3b9);
        },
        'xuuKl': function (_0x6f498d, _0x135d66) {
            return _0x6f498d(_0x135d66);
        },
        'NHMOF': function (_0x48c933, _0x5c0202) {
            return _0x48c933(_0x5c0202);
        },
        'yKpKX': 'ffffffff-ffff-ffff-ffff-ffffffffffff',
        'rlUfx': 'XXXXXXXXXXXXXXXXXXXXX',
        'YZVlk': '999999999999',
        'JrxMw': 'arn:aws-us-gov:iam::999999999999:user/test',
        'SLeUc': function (_0x34a4a2, _0x292634, _0x298eb7) {
            return _0x34a4a2(_0x292634, _0x298eb7);
        },
        'kAQJJ': 'should\x20not\x20attempt\x20to\x20delete\x20and\x20add\x20filter\x20for\x20same\x20destination',
        'kWdpY': function (_0x6a8319, _0x4cacc9, _0x35d491) {
            return _0x6a8319(_0x4cacc9, _0x35d491);
        },
        'EgDLB': 'should\x20not\x20attempt\x20to\x20delete\x20filter\x20by\x202\x20subscription\x20filter\x20per\x20log\x20group',
        'riBQx': 'should\x20attempt\x20to\x20delete\x20filter\x20over\x202\x20subscription\x20filter\x20per\x20log\x20group',
        'BMLKd': function (_0x53a3f5, _0x4e54d4, _0x397c11) {
            return _0x53a3f5(_0x4e54d4, _0x397c11);
        },
        'XXanv': 'should\x20attempt\x20to\x20delete\x20filter\x20if\x20order\x20of\x20cloudwatch\x20events\x20changed',
        'MimJI': 'should\x20attempt\x20to\x20delete\x20multiple\x20filters',
        'FHiVd': 'should\x20recognize\x20custom\x20partition',
        'KBfwl': 'TODO:\x20should\x20not\x20deploy\x20if\x20artifacts\x20in\x20bucket\x20are\x20same\x20as\x20locally\x20and\x20modification\x20dates\x20for\x20all\x20functions\x20are\x20later\x20than\x20uploaded\x20artifacts\x20dates',
        'JvNQN': 'TODO:\x20should\x20deploy\x20with\x20--force\x20option',
        'zwJqE': 'TODO:\x20should\x20deploy\x20when\x20deployment\x20bucket\x20is\x20empty\x20(first\x20deployment)',
        'gtggY': 'TODO:\x20should\x20compare\x20against\x20latest\x20deployment\x20artifacts',
        'lDtJI': 'TODO:\x20should\x20deploy\x20if\x20new\x20function\x20was\x20introduced\x20and\x20otherwise\x20there\x20were\x20no\x20other\x20changes',
        'ffHJa': 'TODO:\x20should\x20deploy\x20if\x20individually\x20packaged\x20function\x20was\x20removed',
        'oxDyt': 'TODO:\x20should\x20deploy\x20if\x20remote\x20hashes\x20are\x20different',
        'pyJWe': 'TODO:\x20should\x20deploy\x20if\x20count\x20of\x20hashes\x20(not\x20their\x20content)\x20differs',
        'hHyXF': 'TODO:\x20should\x20deploy\x20if\x20uploaded\x20artifacts\x20are\x20newer\x20than\x20function\x20configuration\x20modification\x20date',
        'uTYQB': 'TODO:\x20should\x20deploy\x20if\x20custom\x20package.artifact\x20have\x20changed',
        'bxUww': function (_0x42dc38, _0x16276, _0x5b8b88) {
            return _0x42dc38(_0x16276, _0x5b8b88);
        },
        'kCchf': 'should\x20skip\x20a\x20deployment\x20with\x20identical\x20hashes\x20and\x20package.artifact\x20targeting\x20.serverless\x20directory',
        'KqAOz': function (_0x409b02, _0x3a0405, _0x2baa6d) {
            return _0x409b02(_0x3a0405, _0x2baa6d);
        },
        'CDCMr': 'should\x20print\x20a\x20warning\x20if\x20missing\x20lambda:GetFunction\x20permission',
        'RArNI': 'TODO:\x20should\x20crash\x20meaningfully\x20if\x20bucket\x20does\x20not\x20exist',
        'fzpGQ': 'TODO:\x20should\x20handle\x20gently\x20other\x20AWS\x20SDK\x20errors',
        'WXIlS': 'checkLogGroupSubscriptionFilterResourceLimitExceeded'
    };
    it['skip'](_0x48dc24['KBfwl'], async () => {
        let _0x22d239;
        await _0x48dc24['lHYpa'](runServerless, {
            'fixture': _0x48dc24['bVtvk'],
            'command': _0x48dc24['VqgxS'],
            'lastLifecycleHookName': _0x48dc24['VTFfe'],
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x48dc24['RVhjV'] },
            'hooks': { 'beforeInstanceInit': _0x50bb2d => _0x22d239 = _0x50bb2d },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x48dc24['rzrzB'] } } },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x22d239),
                    'headObject': async _0x28a144 => generateMatchingHeadObjectResponse(_0x22d239, _0x28a144)
                }
            }
        }), _0x48dc24['lHYpa'](expect, _0x22d239['service']['provider']['shouldNotDeploy'])['to']['equal'](!![]);
    }), it['skip'](_0x48dc24['JvNQN'], async () => {
        let _0x29d3e5;
        await _0x48dc24['lHYpa'](runServerless, {
            'fixture': _0x48dc24['bVtvk'],
            'command': _0x48dc24['VqgxS'],
            'options': { 'force': !![] },
            'lastLifecycleHookName': _0x48dc24['VTFfe'],
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x48dc24['RVhjV'] },
            'hooks': { 'beforeInstanceInit': _0x464c47 => _0x29d3e5 = _0x464c47 },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x48dc24['rzrzB'] } } },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x29d3e5),
                    'headObject': async _0x5c17ad => generateMatchingHeadObjectResponse(_0x29d3e5, _0x5c17ad)
                }
            }
        }), _0x48dc24['xcxal'](expect, _0x29d3e5['service']['provider']['shouldNotDeploy'])['to']['equal'](![]);
    }), it['skip'](_0x48dc24['zwJqE'], async () => {
        const {serverless: _0x12b3cb} = await _0x48dc24['oatyy'](runServerless, {
            'fixture': _0x48dc24['lDHNX'],
            'command': _0x48dc24['VqgxS'],
            'lastLifecycleHookName': _0x48dc24['VTFfe'],
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x48dc24['RVhjV'] },
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
        _0x48dc24['UWHEb'](expect, _0x12b3cb['service']['provider']['shouldNotDeploy'])['to']['equal'](![]);
    }), it['skip'](_0x48dc24['gtggY'], async () => {
        let _0x4bd089;
        await _0x48dc24['UWHEb'](runServerless, {
            'fixture': _0x48dc24['bVtvk'],
            'command': _0x48dc24['VqgxS'],
            'lastLifecycleHookName': _0x48dc24['VTFfe'],
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x48dc24['RVhjV'] },
            'hooks': { 'beforeInstanceInit': _0x3690a7 => _0x4bd089 = _0x3690a7 },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x48dc24['rzrzB'] } } },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x4bd089),
                    'headObject': async _0x32e92e => generateMatchingHeadObjectResponse(_0x4bd089, _0x32e92e)
                }
            }
        }), _0x48dc24['UWHEb'](expect, _0x4bd089['service']['provider']['shouldNotDeploy'])['to']['equal'](!![]);
    }), it['skip'](_0x48dc24['lDtJI'], async () => {
        let _0x5f24e9;
        await _0x48dc24['UWHEb'](runServerless, {
            'fixture': _0x48dc24['bVtvk'],
            'command': _0x48dc24['VqgxS'],
            'lastLifecycleHookName': _0x48dc24['VTFfe'],
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x48dc24['RVhjV'] },
            'hooks': { 'beforeInstanceInit': _0x2e76a4 => _0x5f24e9 = _0x2e76a4 },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': {
                    'getFunction': () => {
                    }
                },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x5f24e9),
                    'headObject': async _0x2ae58e => generateMatchingHeadObjectResponse(_0x5f24e9, _0x2ae58e)
                }
            }
        }), _0x48dc24['UWHEb'](expect, _0x5f24e9['service']['provider']['shouldNotDeploy'])['to']['equal'](![]);
    }), it['skip'](_0x48dc24['ffHJa'], async () => {
        const {
                fixtureData: {
                    updateConfig: _0x206253,
                    servicePath: _0x106fe3
                }
            } = await _0x48dc24['PyYqp'](runServerless, {
                'fixture': _0x48dc24['bVtvk'],
                'command': _0x48dc24['EzSxX']
            }), _0x310cd9 = await _0x48dc24['PyYqp'](generateMatchingListObjectsResponse, _0x4f819d);
        await _0x48dc24['wVGAZ'](_0x206253, { 'functions': { 'fnIndividually': null } });
        let _0x4f819d;
        await _0x48dc24['FbisF'](runServerless, {
            'cwd': _0x106fe3,
            'command': _0x48dc24['EzSxX'],
            'lastLifecycleHookName': _0x48dc24['VTFfe'],
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x48dc24['RVhjV'] },
            'hooks': { 'beforeInstanceInit': _0x152d8b => _0x4f819d = _0x152d8b },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x48dc24['rzrzB'] } } },
                'S3': {
                    'listObjectsV2': () => _0x310cd9,
                    'headObject': async _0x7fad2c => generateMatchingHeadObjectResponse(_0x4f819d, _0x7fad2c)
                }
            }
        }), _0x48dc24['FbisF'](expect, _0x4f819d['service']['provider']['shouldNotDeploy'])['to']['equal'](![]);
    }), it['skip'](_0x48dc24['oxDyt'], async () => {
        let _0x4343f3;
        await _0x48dc24['iquhf'](runServerless, {
            'fixture': _0x48dc24['bVtvk'],
            'command': _0x48dc24['VqgxS'],
            'lastLifecycleHookName': _0x48dc24['VTFfe'],
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x48dc24['RVhjV'] },
            'hooks': { 'beforeInstanceInit': _0x36f916 => _0x4343f3 = _0x36f916 },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x48dc24['rzrzB'] } } },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x4343f3),
                    'headObject': async _0x8de2d5 => generateMatchingHeadObjectResponse(_0x4343f3, _0x8de2d5)
                }
            }
        }), _0x48dc24['iquhf'](expect, _0x4343f3['service']['provider']['shouldNotDeploy'])['to']['equal'](![]);
    }), it['skip'](_0x48dc24['pyJWe'], async () => {
        let _0x4cd946;
        await _0x48dc24['iquhf'](runServerless, {
            'fixture': _0x48dc24['bVtvk'],
            'command': _0x48dc24['VqgxS'],
            'configExt': { 'package': { 'individually': !![] } },
            'lastLifecycleHookName': _0x48dc24['VTFfe'],
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x48dc24['RVhjV'] },
            'hooks': { 'beforeInstanceInit': _0x295768 => _0x4cd946 = _0x295768 },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x48dc24['rzrzB'] } } },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x4cd946),
                    'headObject': async _0x232235 => generateMatchingHeadObjectResponse(_0x4cd946, _0x232235)
                }
            }
        }), _0x48dc24['BhPjX'](expect, _0x4cd946['service']['provider']['shouldNotDeploy'])['to']['equal'](![]);
    }), it['skip'](_0x48dc24['hHyXF'], async () => {
        let _0x1e9a19;
        await _0x48dc24['OMDtH'](runServerless, {
            'fixture': _0x48dc24['bVtvk'],
            'command': _0x48dc24['VqgxS'],
            'configExt': { 'package': { 'individually': !![] } },
            'lastLifecycleHookName': _0x48dc24['VTFfe'],
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x48dc24['RVhjV'] },
            'hooks': { 'beforeInstanceInit': _0x578636 => _0x1e9a19 = _0x578636 },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': {
                    'getFunction': () => {
                    }
                },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x1e9a19),
                    'headObject': async _0x287470 => generateMatchingHeadObjectResponse(_0x1e9a19, _0x287470)
                }
            }
        }), _0x48dc24['OMDtH'](expect, _0x1e9a19['service']['provider']['shouldNotDeploy'])['to']['equal'](![]);
    }), it['skip'](_0x48dc24['uTYQB'], async () => {
        let _0x33a01f;
        await _0x48dc24['OMDtH'](runServerless, {
            'fixture': _0x48dc24['bVtvk'],
            'command': _0x48dc24['VqgxS'],
            'configExt': { 'package': { 'artifact': _0x48dc24['mHRmq'] } },
            'lastLifecycleHookName': _0x48dc24['VTFfe'],
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x48dc24['RVhjV'] },
            'hooks': { 'beforeInstanceInit': _0x1c8d3e => _0x33a01f = _0x1c8d3e },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x48dc24['rzrzB'] } } },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x33a01f),
                    'headObject': async _0x973fc8 => generateMatchingHeadObjectResponse(_0x33a01f, _0x973fc8)
                }
            }
        }), _0x48dc24['OMDtH'](expect, _0x33a01f['service']['provider']['shouldNotDeploy'])['to']['equal'](![]);
    }), _0x48dc24['bxUww'](it, _0x48dc24['kCchf'], async () => {
        const _0xe67b9a = {
                'ubNGD': _0x48dc24['jCyDL'],
                'Kulao': _0x48dc24['PyJXu'],
                'yalxt': _0x48dc24['DPmkT'],
                'bkgJY': _0x48dc24['vxJJb'],
                'yYCAk': _0x48dc24['Ewdll']
            }, {serverless: _0x2ffbe1} = await _0x48dc24['GDunn'](runServerless, {
                'fixture': _0x48dc24['nIeXb'],
                'command': _0x48dc24['VqgxS'],
                'configExt': { 'service': _0x48dc24['akopP'] },
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x48dc24['RVhjV'] },
                'lastLifecycleHookName': _0x48dc24['VTFfe'],
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x48dc24['DFNtB'] } } },
                    'S3': {
                        'headObject': (() => {
                            const _0x4c7925 = sandbox['stub']();
                            return _0x4c7925['withArgs']({
                                'Bucket': _0xe67b9a['ubNGD'],
                                'Key': _0xe67b9a['Kulao']
                            })['returns']({ 'Metadata': { 'filesha256': _0xe67b9a['yalxt'] } }), _0x4c7925['withArgs']({
                                'Bucket': _0xe67b9a['ubNGD'],
                                'Key': _0xe67b9a['bkgJY']
                            })['returns']({ 'Metadata': { 'filesha256': _0xe67b9a['yYCAk'] } }), _0x4c7925;
                        })(),
                        'listObjectsV2': {
                            'Contents': [
                                {
                                    'Key': _0x48dc24['PyJXu'],
                                    'LastModified': new Date(),
                                    'ETag': _0x48dc24['xAjDo'],
                                    'Size': 0x164,
                                    'StorageClass': _0x48dc24['GeTbq']
                                },
                                {
                                    'Key': _0x48dc24['vxJJb'],
                                    'LastModified': new Date(),
                                    'ETag': _0x48dc24['xAjDo'],
                                    'Size': 0x164,
                                    'StorageClass': _0x48dc24['GeTbq']
                                }
                            ]
                        }
                    }
                }
            });
        _0x48dc24['GDunn'](expect, _0x2ffbe1['service']['provider']['shouldNotDeploy'])['to']['equal'](!![]);
    }), _0x48dc24['KqAOz'](it, _0x48dc24['CDCMr'], async () => {
        const {stdoutData: _0x358088} = await _0x48dc24['GDunn'](runServerless, {
            'fixture': _0x48dc24['bVtvk'],
            'command': _0x48dc24['VqgxS'],
            'lastLifecycleHookName': _0x48dc24['VTFfe'],
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': sandbox['stub']()['throws']({ 'providerError': { 'statusCode': 0x193 } }) },
                'S3': { 'listObjectsV2': {} }
            }
        });
        _0x48dc24['GDunn'](expect, _0x358088)['to']['include']([
            _0x48dc24['dhNYa'],
            _0x48dc24['pDIcV']
        ]['join'](''));
    }), it['skip'](_0x48dc24['RArNI'], () => {
        return _0x48dc24['hTsre'](expect, _0x48dc24['hTsre'](runServerless, {
            'fixture': _0x48dc24['bVtvk'],
            'command': _0x48dc24['VqgxS'],
            'lastLifecycleHookName': _0x48dc24['VTFfe'],
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x48dc24['RVhjV'] },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'S3': {
                    'listObjectsV2': async () => {
                    }
                }
            }
        }))['to']['eventually']['be']['rejected']['and']['have']['property'](_0x48dc24['kDysL']);
    }), it['skip'](_0x48dc24['fzpGQ'], () => {
        return _0x48dc24['hTsre'](expect, _0x48dc24['ylmGR'](runServerless, {
            'fixture': _0x48dc24['bVtvk'],
            'command': _0x48dc24['VqgxS'],
            'lastLifecycleHookName': _0x48dc24['VTFfe'],
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x48dc24['RVhjV'] },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'S3': {
                    'listObjectsV2': async () => {
                    }
                }
            }
        }))['to']['eventually']['be']['rejected']['and']['have']['property'](_0x48dc24['kDysL']);
    }), _0x48dc24['KqAOz'](describe, _0x48dc24['WXIlS'], () => {
        const _0x10197d = {
            'uPnRd': _0x48dc24['ckagA'],
            'JbbgF': _0x48dc24['aTYRi'],
            'iLgHO': _0x48dc24['ickbl'],
            'zPGuZ': _0x48dc24['mJBQj'],
            'SqahY': _0x48dc24['pEzvI'],
            'NwjHe': function (_0x3584da, _0x42f8c6) {
                return _0x48dc24['XrRct'](_0x3584da, _0x42f8c6);
            },
            'PBdOc': _0x48dc24['bVtvk'],
            'heXxx': _0x48dc24['VqgxS'],
            'wpRno': _0x48dc24['PYmli'],
            'ZzTqe': _0x48dc24['VTFfe'],
            'DTafY': _0x48dc24['RVhjV'],
            'gScec': _0x48dc24['rzrzB'],
            'gKmcI': function (_0x4ef913, _0x36622a) {
                return _0x48dc24['dFbzR'](_0x4ef913, _0x36622a);
            },
            'KugKI': function (_0x201b1e, _0x262535) {
                return _0x48dc24['xuuKl'](_0x201b1e, _0x262535);
            },
            'FDDsV': function (_0x59d033, _0x1d88f1) {
                return _0x48dc24['NHMOF'](_0x59d033, _0x1d88f1);
            },
            'KAudJ': _0x48dc24['yKpKX'],
            'lLnGC': _0x48dc24['rlUfx'],
            'pUxoM': _0x48dc24['YZVlk'],
            'YKfbD': _0x48dc24['JrxMw']
        };
        _0x48dc24['SLeUc'](it, _0x48dc24['kAQJJ'], async () => {
            const _0x56aefb = {
                    'hbeJr': _0x10197d['uPnRd'],
                    'nFpFQ': _0x10197d['JbbgF'],
                    'FwgFk': _0x10197d['iLgHO'],
                    'nBmtq': _0x10197d['zPGuZ'],
                    'UbFts': _0x10197d['SqahY']
                }, _0x53c9e9 = sandbox['stub']();
            let _0x5af195;
            await _0x10197d['NwjHe'](runServerless, {
                'fixture': _0x10197d['PBdOc'],
                'command': _0x10197d['heXxx'],
                'configExt': { 'functions': { 'fn1': { 'events': [{ 'cloudwatchLog': _0x10197d['wpRno'] }] } } },
                'lastLifecycleHookName': _0x10197d['ZzTqe'],
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x10197d['DTafY'] },
                'hooks': { 'beforeInstanceInit': _0x39bfa6 => _0x5af195 = _0x39bfa6 },
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x10197d['gScec'] } } },
                    'S3': {
                        'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x5af195),
                        'headObject': async _0x46c2f7 => generateMatchingHeadObjectResponse(_0x5af195, _0x46c2f7)
                    },
                    'CloudWatchLogs': {
                        'deleteSubscriptionFilter': _0x53c9e9,
                        'describeSubscriptionFilters': async () => {
                            const _0x20b587 = _0x5af195['service']['getFunction'](_0x56aefb['hbeJr'])['name'], _0x434e43 = _0x5af195['getProvider'](_0x56aefb['nFpFQ'])['naming'];
                            return {
                                'subscriptionFilters': [
                                    {
                                        'filterName': _0x434e43['getStackName']() + '-' + _0x434e43['getCloudWatchLogLogicalId'](_0x56aefb['FwgFk'], 0x1) + '-xxxxx',
                                        'destinationArn': 'arn:aws:lambda:us-east-1:999999999999:function:' + _0x20b587
                                    },
                                    {
                                        'filterName': _0x434e43['getStackName']() + '-' + _0x434e43['getCloudWatchLogLogicalId'](_0x56aefb['nBmtq'], 0x1) + '-xxxxx',
                                        'destinationArn': _0x56aefb['UbFts']
                                    }
                                ]
                            };
                        }
                    }
                }
            }), _0x10197d['gKmcI'](expect, _0x53c9e9)['to']['not']['have']['been']['called'];
        }), _0x48dc24['kWdpY'](it, _0x48dc24['EgDLB'], async () => {
            const _0x58f069 = {
                    'rUGvV': _0x10197d['JbbgF'],
                    'bwpwH': _0x10197d['iLgHO'],
                    'yBzNN': _0x10197d['SqahY']
                }, _0x1529e4 = sandbox['stub']();
            let _0x219279;
            await _0x10197d['KugKI'](runServerless, {
                'fixture': _0x10197d['PBdOc'],
                'command': _0x10197d['heXxx'],
                'configExt': { 'functions': { 'fn1': { 'events': [{ 'cloudwatchLog': _0x10197d['wpRno'] }] } } },
                'lastLifecycleHookName': _0x10197d['ZzTqe'],
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x10197d['DTafY'] },
                'hooks': { 'beforeInstanceInit': _0x56d21b => _0x219279 = _0x56d21b },
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x10197d['gScec'] } } },
                    'S3': {
                        'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x219279),
                        'headObject': async _0x1c801f => generateMatchingHeadObjectResponse(_0x219279, _0x1c801f)
                    },
                    'CloudWatchLogs': {
                        'deleteSubscriptionFilter': _0x1529e4,
                        'describeSubscriptionFilters': async () => {
                            const _0x4641fb = _0x219279['getProvider'](_0x58f069['rUGvV'])['naming'];
                            return {
                                'subscriptionFilters': [{
                                        'filterName': _0x4641fb['getStackName']() + '-' + _0x4641fb['getCloudWatchLogLogicalId'](_0x58f069['bwpwH'], 0x1) + '-xxxxx',
                                        'destinationArn': _0x58f069['yBzNN']
                                    }]
                            };
                        }
                    }
                }
            }), _0x10197d['FDDsV'](expect, _0x1529e4)['to']['not']['have']['been']['called'];
        }), _0x48dc24['kWdpY'](it, _0x48dc24['riBQx'], async () => {
            const _0x13096a = {
                    'FJPed': _0x48dc24['aTYRi'],
                    'DwbWs': _0x48dc24['mJBQj'],
                    'HxnKr': _0x48dc24['pEzvI'],
                    'dabZa': _0x48dc24['ckagA']
                }, _0x545b65 = sandbox['stub']();
            let _0xd6a522;
            const {awsNaming: _0x350bfa} = await _0x48dc24['KuACr'](runServerless, {
                'fixture': _0x48dc24['bVtvk'],
                'command': _0x48dc24['VqgxS'],
                'configExt': { 'functions': { 'fn1': { 'events': [{ 'cloudwatchLog': _0x48dc24['PYmli'] }] } } },
                'lastLifecycleHookName': _0x48dc24['VTFfe'],
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x48dc24['RVhjV'] },
                'hooks': { 'beforeInstanceInit': _0x390fdd => _0xd6a522 = _0x390fdd },
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x48dc24['rzrzB'] } } },
                    'S3': {
                        'listObjectsV2': async () => generateMatchingListObjectsResponse(_0xd6a522),
                        'headObject': async _0xa1d61d => generateMatchingHeadObjectResponse(_0xd6a522, _0xa1d61d)
                    },
                    'CloudWatchLogs': {
                        'deleteSubscriptionFilter': _0x545b65,
                        'describeSubscriptionFilters': async () => {
                            const _0x4e51ec = _0xd6a522['getProvider'](_0x13096a['FJPed'])['naming'];
                            return {
                                'subscriptionFilters': [
                                    {
                                        'filterName': _0x4e51ec['getStackName']() + '-' + _0x4e51ec['getCloudWatchLogLogicalId'](_0x13096a['DwbWs'], 0x1) + '-xxxxx',
                                        'destinationArn': _0x13096a['HxnKr']
                                    },
                                    {
                                        'filterName': _0x4e51ec['getStackName']() + '-' + _0x4e51ec['getCloudWatchLogLogicalId'](_0x13096a['DwbWs'], 0x2) + '-xxxxx',
                                        'destinationArn': 'arn:aws:lambda:us-east-1:999999999999:function:' + _0xd6a522['service']['getFunction'](_0x13096a['dabZa'])['name']
                                    }
                                ]
                            };
                        }
                    }
                }
            });
            _0x48dc24['KuACr'](expect, _0x545b65)['to']['have']['been']['calledOnceWith']({
                'logGroupName': _0x48dc24['PYmli'],
                'filterName': _0x350bfa['getStackName']() + '-' + _0x350bfa['getCloudWatchLogLogicalId'](_0x48dc24['mJBQj'], 0x2) + '-xxxxx'
            });
        }), _0x48dc24['BMLKd'](it, _0x48dc24['XXanv'], async () => {
            const _0x3621d6 = sandbox['stub']();
            let _0x1da82e;
            const {awsNaming: _0x3d5e7d} = await _0x48dc24['KuACr'](runServerless, {
                'fixture': _0x48dc24['bVtvk'],
                'command': _0x48dc24['VqgxS'],
                'configExt': {
                    'functions': {
                        'fn1': {
                            'events': [
                                { 'cloudwatchLog': _0x48dc24['HMAEc'] },
                                { 'cloudwatchLog': _0x48dc24['txanf'] }
                            ]
                        }
                    }
                },
                'lastLifecycleHookName': _0x48dc24['VTFfe'],
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x48dc24['RVhjV'] },
                'hooks': { 'beforeInstanceInit': _0x18be09 => _0x1da82e = _0x18be09 },
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x48dc24['rzrzB'] } } },
                    'S3': {
                        'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x1da82e),
                        'headObject': async _0x2348ff => generateMatchingHeadObjectResponse(_0x1da82e, _0x2348ff)
                    },
                    'CloudWatchLogs': {
                        'deleteSubscriptionFilter': _0x3621d6,
                        'describeSubscriptionFilters': sandbox['stub']()['onFirstCall']()['callsFake'](async () => {
                            const _0x3ff6c1 = _0x1da82e['getProvider'](_0x10197d['JbbgF'])['naming'];
                            return {
                                'subscriptionFilters': [{
                                        'filterName': _0x3ff6c1['getStackName']() + '-' + _0x3ff6c1['getCloudWatchLogLogicalId'](_0x10197d['iLgHO'], 0x1) + '-xxxxx',
                                        'destinationArn': 'arn:aws:lambda:us-east-1:999999999999:function:' + _0x1da82e['service']['getFunction'](_0x10197d['uPnRd'])['name']
                                    }]
                            };
                        })['onSecondCall']()['callsFake'](async () => {
                            const _0x4ac805 = _0x1da82e['getProvider'](_0x10197d['JbbgF'])['naming'];
                            return {
                                'subscriptionFilters': [{
                                        'filterName': _0x4ac805['getStackName']() + '-' + _0x4ac805['getCloudWatchLogLogicalId'](_0x10197d['iLgHO'], 0x1) + '-xxxxx',
                                        'destinationArn': 'arn:aws:lambda:us-east-1:999999999999:function:' + _0x1da82e['service']['getFunction'](_0x10197d['uPnRd'])['name']
                                    }]
                            };
                        })
                    }
                }
            });
            _0x48dc24['aLASK'](expect, _0x3621d6)['to']['have']['been']['calledOnceWith']({
                'logGroupName': _0x48dc24['txanf'],
                'filterName': _0x3d5e7d['getStackName']() + '-' + _0x3d5e7d['getCloudWatchLogLogicalId'](_0x48dc24['ickbl'], 0x1) + '-xxxxx'
            });
        }), _0x48dc24['BMLKd'](it, _0x48dc24['MimJI'], async () => {
            const _0x3c4284 = sandbox['stub']();
            let _0x128f66;
            const {awsNaming: _0x249879} = await _0x48dc24['aLASK'](runServerless, {
                'fixture': _0x48dc24['bVtvk'],
                'command': _0x48dc24['VqgxS'],
                'configExt': {
                    'functions': {
                        'fn1': {
                            'events': [
                                { 'cloudwatchLog': _0x48dc24['PYmli'] },
                                { 'cloudwatchLog': _0x48dc24['PYmli'] }
                            ]
                        }
                    }
                },
                'lastLifecycleHookName': _0x48dc24['VTFfe'],
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x48dc24['RVhjV'] },
                'hooks': { 'beforeInstanceInit': _0x1b9ba1 => _0x128f66 = _0x1b9ba1 },
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x48dc24['rzrzB'] } } },
                    'S3': {
                        'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x128f66),
                        'headObject': async _0x5e52ab => generateMatchingHeadObjectResponse(_0x128f66, _0x5e52ab)
                    },
                    'CloudWatchLogs': {
                        'deleteSubscriptionFilter': _0x3c4284,
                        'describeSubscriptionFilters': sandbox['stub']()['onFirstCall']()['callsFake'](async () => {
                            const _0x1b4380 = _0x128f66['getProvider'](_0x10197d['JbbgF'])['naming'];
                            return {
                                'subscriptionFilters': [
                                    {
                                        'filterName': _0x1b4380['getStackName']() + '-' + _0x1b4380['getCloudWatchLogLogicalId'](_0x10197d['iLgHO'], 0x1) + '-xxxxx',
                                        'destinationArn': _0x10197d['SqahY']
                                    },
                                    {
                                        'filterName': _0x1b4380['getStackName']() + '-' + _0x1b4380['getCloudWatchLogLogicalId'](_0x10197d['iLgHO'], 0x2) + '-xxxxx',
                                        'destinationArn': _0x10197d['SqahY']
                                    }
                                ]
                            };
                        })
                    }
                }
            });
            _0x48dc24['icGhz'](expect, _0x3c4284)['to']['have']['been']['calledTwice'], _0x48dc24['icGhz'](expect, _0x3c4284)['to']['have']['been']['calledWith']({
                'logGroupName': _0x48dc24['PYmli'],
                'filterName': _0x249879['getStackName']() + '-' + _0x249879['getCloudWatchLogLogicalId'](_0x48dc24['ickbl'], 0x1) + '-xxxxx'
            }), _0x48dc24['icGhz'](expect, _0x3c4284)['to']['have']['been']['calledWith']({
                'logGroupName': _0x48dc24['PYmli'],
                'filterName': _0x249879['getStackName']() + '-' + _0x249879['getCloudWatchLogLogicalId'](_0x48dc24['ickbl'], 0x2) + '-xxxxx'
            });
        }), _0x48dc24['BMLKd'](it, _0x48dc24['FHiVd'], async () => {
            const _0x53761d = {
                    'JnfeI': _0x10197d['JbbgF'],
                    'imFJE': _0x10197d['iLgHO'],
                    'DYeNo': _0x10197d['uPnRd']
                }, _0x207a93 = sandbox['stub']();
            let _0x1c2663;
            await _0x10197d['FDDsV'](runServerless, {
                'fixture': _0x10197d['PBdOc'],
                'command': _0x10197d['heXxx'],
                'configExt': { 'functions': { 'fn1': { 'events': [{ 'cloudwatchLog': _0x10197d['wpRno'] }] } } },
                'lastLifecycleHookName': _0x10197d['ZzTqe'],
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x10197d['DTafY'] },
                'hooks': { 'beforeInstanceInit': _0x1a1997 => _0x1c2663 = _0x1a1997 },
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'STS': {
                        'getCallerIdentity': {
                            'ResponseMetadata': { 'RequestId': _0x10197d['KAudJ'] },
                            'UserId': _0x10197d['lLnGC'],
                            'Account': _0x10197d['pUxoM'],
                            'Arn': _0x10197d['YKfbD']
                        }
                    },
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x10197d['gScec'] } } },
                    'S3': {
                        'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x1c2663),
                        'headObject': async _0x4a3750 => generateMatchingHeadObjectResponse(_0x1c2663, _0x4a3750)
                    },
                    'CloudWatchLogs': {
                        'describeSubscriptionFilters': sandbox['stub']()['callsFake'](async () => {
                            const _0x4bf316 = _0x1c2663['getProvider'](_0x53761d['JnfeI'])['naming'];
                            return {
                                'subscriptionFilters': [{
                                        'filterName': _0x4bf316['getStackName']() + '-' + _0x4bf316['getCloudWatchLogLogicalId'](_0x53761d['imFJE'], 0x1) + '-xxxxx',
                                        'destinationArn': 'arn:aws-us-gov:lambda:us-east-1:999999999999:function:' + _0x1c2663['service']['getFunction'](_0x53761d['DYeNo'])['name']
                                    }]
                            };
                        }),
                        'deleteSubscriptionFilter': _0x207a93
                    }
                }
            }), _0x10197d['FDDsV'](expect, _0x207a93)['to']['not']['have']['been']['called'];
        });
    });
});
