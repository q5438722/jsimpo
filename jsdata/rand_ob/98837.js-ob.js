'use strict';
const _0x5c71 = [
    'should\x20set\x20a\x20flag\x20if\x20the\x20remote\x20and\x20local\x20hashes\x20are\x20equal,\x20and\x20the\x20edit\x20times\x20are\x20ordered',
    'should\x20set\x20a\x20flag\x20if\x20the\x20remote\x20and\x20local\x20hashes\x20are\x20duplicated\x20and\x20equal',
    'should\x20not\x20set\x20a\x20flag\x20if\x20the\x20remote\x20and\x20local\x20hashes\x20are\x20different\x20for\x20package.artifact',
    '#checkForChanges()',
    '#getMostRecentObjects()',
    'bbCrh',
    'dev',
    'us-east-1',
    'serviceDir',
    'hRvAL',
    'setProvider',
    'service',
    'VAhOb',
    'serverless',
    'ZkDXO',
    'serverless/',
    'getStage',
    'spy',
    'stub',
    'assign',
    'xIlbQ',
    'FUzLq',
    'wXnDf',
    'aLZLq',
    'lleZu',
    'resolves',
    'getObjectMetadata',
    'gqUOO',
    'split',
    'restore',
    'getMostRecentObjects',
    'cPifB',
    'should\x20resolve\x20if\x20the\x20\x22force\x22\x20option\x20is\x20used',
    'JarlH',
    'force',
    'rGKee',
    'checkForChanges',
    'then',
    'not',
    'have',
    'called',
    'been',
    'pNyaG',
    'provider',
    'shouldNotDeploy',
    'equal',
    'xNKxE',
    'YTEtR',
    'nvRFv',
    'request',
    'Imfzk',
    'bRoqd',
    'calledWithExactly',
    'bucketName',
    'ELANM',
    'should\x20translate\x20error\x20if\x20rejected\x20due\x20to\x20missing\x20bucket',
    'rejects',
    'rejectedWith',
    '\x22\x20does\x20not\x20exist.',
    'QSetb',
    'fzDqC',
    'join',
    'lAEzM',
    'hgCxD',
    'should\x20resolve\x20if\x20result\x20array\x20is\x20empty',
    'LXIhP',
    'eLXRh',
    'aactT',
    'oNlmu',
    '/151224711231-2016-08-18T15:43:00/artifact.zip',
    '/151224711231-2016-08-18T15:43:00/cloudformation.json',
    '/141264711231-2016-08-18T15:42:00/artifact.zip',
    '/141264711231-2016-08-18T15:42:00/cloudformation.json',
    'CXdKH',
    'fulfilled',
    'nFKMl',
    'Ozokw',
    'rpaci',
    'XarlP',
    'FHXoP',
    'deep',
    'should\x20resolve\x20if\x20no\x20objects\x20are\x20provided\x20as\x20input',
    'xXWPG',
    'nFxJB',
    'UDPOu',
    '3|4|0|2|1',
    'DTsHM',
    'KNVkI',
    'headObject',
    'callCount',
    '#checkIfDeploymentIsNecessary()',
    'veHLX',
    'EdhNo',
    'LDJSc',
    'wZQMG',
    'RvsgO',
    'wgKgP',
    'xtkhl',
    'ykGIM',
    '.serverless/func2.zip',
    'kylVu',
    'func1.zip',
    'Gelcq',
    'XJSnN',
    'cTBrJ',
    'LSnka',
    'gFxri',
    'oABWr',
    'Auszg',
    'TkgEq',
    'WYvWn',
    'uVvoX',
    'qhdQp',
    'PavJJ',
    'readFile',
    'yields',
    'cli',
    'log',
    'AkVjX',
    'HbBVP',
    'aVXRX',
    'bAhuB',
    'returns',
    'createHash',
    'update',
    'onCall',
    'OJsSy',
    'zhKvX',
    '3|6|2|4|1|5|0|7',
    'KwmRj',
    'calledWith',
    'resolve',
    'YNXOB',
    'compiledCloudFormationTemplate',
    'calledOnce',
    'YcjCA',
    'xaiOq',
    'digest',
    'LmABL',
    'mspuG',
    'kDRFl',
    'dVWxs',
    'XvBJg',
    'xhECH',
    'AYdlp',
    'BtCiA',
    'gZbYw',
    'tyRhr',
    'WpvRz',
    'qffPz',
    'PQzXx',
    'iebgZ',
    'kAlAL',
    'hRvFx',
    'TDJae',
    'HyPlv',
    'UrDhj',
    'HHKIS',
    'svYGU',
    'vbQBf',
    'ilggd',
    'calledTwice',
    'eFhhg',
    'uYZfa',
    'cWXlD',
    'XEayI',
    'ovtmt',
    'suxrC',
    'getTime',
    'QZyNN',
    'MbjsJ',
    'KauBt',
    'jcOuK',
    'QZbZp',
    'erFUZ',
    'CZAVh',
    'pxdis',
    'UeJdD',
    'HbwgU',
    'BKQSF',
    'vwhSS',
    'ccrfk',
    'PUDKI',
    'FkHYw',
    'XDLRG',
    'QYYbB',
    'aNHXp',
    'cEskq',
    'EhtYV',
    'eunFx',
    'HFmfy',
    'Eermr',
    'BipTQ',
    'KsiyJ',
    'xoQrh',
    'LeQhh',
    'hFqZw',
    'PQkJc',
    'MSPIS',
    'jtEhP',
    'PFjaf',
    'jQNgg',
    'OkRZu',
    'VQZTZ',
    '6|4|0|2|7|5|1|3',
    'jULlc',
    'BwpDw',
    'wmGaF',
    'GckZj',
    'checkForChanges\x20#2',
    'Should\x20recognize\x20package.artifact',
    'ULrlA',
    'ciBGc',
    'packageArtifact',
    'ignore',
    'aws:deploy:deploy:checkForChanges',
    '2020-05-20T15:34:16.494+0000',
    'RRYyTm4Ri8mocpvx44pvas4JKLYtdJS3Z8MOlrZrDXA=',
    'serverless/test-package-artifact/dev/1589988704359-2020-05-20T15:31:44.359Z/artifact.zip',
    '\x225102a4cf710cae6497dba9e61b85d0a4\x22',
    'STANDARD',
    'XXXXXXXXXXXXXXXXXXXXX',
    '999999999999',
    'Resources',
    'Properties',
    'Code',
    'S3Key',
    'true',
    'ffffffff-ffff-ffff-ffff-ffffffffffff',
    'arn:aws:iam::999999999999:user/test',
    'zip',
    'compiled-cloudformation-template.json',
    'OMVUj',
    'push',
    'bIMOJ',
    'map',
    'serverless/test-package-artifact/dev/1589988704359-2020-05-20T15:31:44.359Z/',
    '2020-05-20T15:30:16.494+0000',
    'sha256',
    'close',
    'base64',
    'basename',
    'stringify',
    'joCdl',
    'createReadStream',
    '/.serverless/',
    'test/unit/lib/plugins/aws/deploy/lib/checkForChanges.test.js',
    'deploy',
    'package',
    'artifact.zip',
    'pZOdrt6qijT7ITsLQjPP9QwgMAfKA2RuUUSTW+l8wWs=',
    'serverless/test-package-artifact/dev/1589988704359-2020-05-20T15:31:44.359Z/my-own.zip',
    'test-packageArtifactInServerlessDir',
    'WARNING:\x20Not\x20authorized\x20to\x20perform:\x20lambda:GetFunction\x20for\x20at\x20least\x20one\x20of\x20the\x20lambda\x20functions.',
    '\x20Deployment\x20will\x20not\x20be\x20skipped\x20even\x20if\x20service\x20files\x20did\x20not\x20change.\x20',
    'code',
    'Fn1',
    'someLogGroupName',
    'someLogGroupName1',
    'someLogGroupName2',
    'should\x20not\x20attempt\x20to\x20delete\x20filter\x20by\x202\x20subscription\x20filter\x20per\x20log\x20group',
    'should\x20attempt\x20to\x20delete\x20filter\x20if\x20order\x20of\x20cloudwatch\x20events\x20changed',
    'TODO:\x20should\x20deploy\x20with\x20--force\x20option',
    'TODO:\x20should\x20compare\x20against\x20latest\x20deployment\x20artifacts',
    'TODO:\x20should\x20deploy\x20if\x20new\x20function\x20was\x20introduced\x20and\x20otherwise\x20there\x20were\x20no\x20other\x20changes',
    'TODO:\x20should\x20deploy\x20if\x20count\x20of\x20hashes\x20(not\x20their\x20content)\x20differs',
    'TODO:\x20should\x20deploy\x20if\x20uploaded\x20artifacts\x20are\x20newer\x20than\x20function\x20configuration\x20modification\x20date',
    'should\x20skip\x20a\x20deployment\x20with\x20identical\x20hashes\x20and\x20package.artifact\x20targeting\x20.serverless\x20directory',
    'should\x20print\x20a\x20warning\x20if\x20missing\x20lambda:GetFunction\x20permission',
    'TODO:\x20should\x20crash\x20meaningfully\x20if\x20bucket\x20does\x20not\x20exist',
    'TODO:\x20should\x20handle\x20gently\x20other\x20AWS\x20SDK\x20errors',
    'skip',
    'GgOtP',
    'hSBty',
    'tYboR',
    'hkhyP',
    'YCQAL',
    'IyCwY',
    'zXply',
    'packageFoldern',
    'wEKwL',
    'YgPso',
    'cEAAD',
    'TODO:\x20should\x20deploy\x20if\x20individually\x20packaged\x20function\x20was\x20removed',
    'LOhBV',
    'LDqfb',
    'HUTqX',
    'vfRby',
    'LppMh',
    'CfGQi',
    'CnUkt',
    'KuDLn',
    'packageArtifactInServerlessDir',
    'tcbGF',
    'withArgs',
    'serverless/test-package-artifact/dev/1589988704359-2020-05-20T15:31:44.359Z/compiled-cloudformation-template.json',
    'dmyUA',
    'Zmgur',
    'IVpan',
    'reqXM',
    'TJjfX',
    'UqTji',
    'zLgHS',
    'wSbuA',
    'throws',
    'include',
    'QdVrq',
    'LsCEh',
    'eventually',
    'rejected',
    'FvDon',
    'IrgjW',
    'and',
    'property',
    'Qhuyb',
    'ZRsvr',
    'joiUh',
    'ogWjB',
    'gcUFv',
    'kLpkU',
    'LZRRZ',
    'mLxlj',
    '2021-05-20T15:34:16.494+0000',
    'zLNvu',
    'iyFpF',
    'name',
    'xTRxX',
    'naming',
    'getStackName',
    'getCloudWatchLogLogicalId',
    '-xxxxx',
    'arn:aws:lambda:us-east-1:999999999999:function:',
    'Fn2',
    'swJdE',
    'WslgD',
    'bVSaA',
    'hzkAy',
    'getProvider',
    'xguQq',
    'wYtPt',
    'should\x20attempt\x20to\x20delete\x20filter\x20over\x202\x20subscription\x20filter\x20per\x20log\x20group',
    'fn1',
    'NdZpe',
    'zmGdI',
    'kgKzR',
    'arn:aws:lambda:us-east-1:999999999999:function:test-checkForChanges-cdr3ogg-dev-fn1',
    'DWfCy',
    'getFunction',
    'JuIxF',
    'nLcVL',
    'calledOnceWith',
    'lAyCv',
    'WsfEu',
    'IQJGl',
    'pQMMZ',
    'vlFhX',
    'onFirstCall',
    'callsFake',
    'QJoMR',
    'ePVdC',
    'onSecondCall',
    'zlTXJ',
    'EkPqI',
    'should\x20attempt\x20to\x20delete\x20multiple\x20filters',
    'FxjLr',
    'EiuDA',
    'yeDgL',
    'should\x20recognize\x20custom\x20partition',
    'uREKR',
    'eBici',
    'TtnfM',
    'ttbMK',
    'YBeOo',
    'arn:aws-us-gov:lambda:us-east-1:999999999999:function:',
    '935330MzgFMw',
    '1226871zyrtkS',
    '827ppgcBl',
    '110fdykeL',
    '102146cVJrrx',
    '10VKebCL',
    '36404PwGPFb',
    '1091943irhfdu',
    '1086503vNNBZT',
    '1viCiqy',
    'crypto',
    'globby',
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
    'my-service',
    'aws',
    'deployment-bucket',
    'bar',
    '4|1|3|0|2',
    'checkIfDeploymentIsNecessary',
    'listObjectsV2',
    'serverless/my-service/dev',
    'Create\x20it\x20manually\x20if\x20you\x20want\x20to\x20reuse\x20the\x20CloudFormation\x20stack\x20\x22my-service-dev\x22,',
    'or\x20delete\x20the\x20stack\x20if\x20it\x20is\x20no\x20longer\x20required.',
    'Other\x20reason',
    'should\x20resolve\x20if\x20no\x20result\x20is\x20returned',
    'should\x20resolve\x20with\x20the\x20most\x20recently\x20deployed\x20objects',
    'should\x20resolve\x20if\x20no\x20input\x20is\x20provided',
    'should\x20request\x20the\x20object\x20detailed\x20information',
    'normalizeCloudFormationTemplate',
    'sync',
    'my-service.zip',
    'local-hash-cf-template',
    'remote-hash-cf-template',
    'local-hash-zip-file-1',
    'remote-hash-zip-file-1',
    '.serverless',
    '7|6|0|1|5|3|2|4',
    '.serverless/my-service.zip',
    'hash-cf-template',
    'hash-zip-file-1',
    'foo/bar/my-own.zip',
    '**.zip',
    'local-my-own-hash',
    '0|1|2|7|3|6|5|4',
    '6|4|8|1|3|7|2|5|0',
    'should\x20resolve\x20if\x20objects\x20are\x20given,\x20but\x20no\x20function\x20last\x20modified\x20date',
    'should\x20not\x20set\x20a\x20flag\x20if\x20there\x20are\x20more\x20remote\x20hashes',
    'should\x20not\x20set\x20a\x20flag\x20if\x20remote\x20and\x20local\x20hashes\x20are\x20the\x20same\x20but\x20are\x20duplicated',
    'should\x20not\x20set\x20a\x20flag\x20if\x20the\x20hashes\x20are\x20equal,\x20but\x20the\x20objects\x20were\x20modified\x20after\x20their\x20functions',
    'should\x20set\x20a\x20flag\x20if\x20the\x20remote\x20and\x20local\x20hashes\x20are\x20equal'
];
const _0x6075f0 = _0x1886;
(function (_0x465cee, _0x40011e) {
    const _0x5277d1 = _0x1886;
    while (!![]) {
        try {
            const _0x520eb9 = -parseInt(_0x5277d1(0xcc)) + parseInt(_0x5277d1(0xcd)) + -parseInt(_0x5277d1(0xce)) * parseInt(_0x5277d1(0xcf)) + parseInt(_0x5277d1(0xd0)) + -parseInt(_0x5277d1(0xd1)) * -parseInt(_0x5277d1(0xd2)) + parseInt(_0x5277d1(0xd3)) + -parseInt(_0x5277d1(0xd4)) * parseInt(_0x5277d1(0xd5));
            if (_0x520eb9 === _0x40011e)
                break;
            else
                _0x465cee['push'](_0x465cee['shift']());
        } catch (_0x5f2fa8) {
            _0x465cee['push'](_0x465cee['shift']());
        }
    }
}(_0x5c71, -0x57797 + 0x214ae * 0x2 + 0x4a0 * 0x280));
const crypto = require(_0x6075f0(0xd6)), fs = require('fs'), path = require('path'), globby = require(_0x6075f0(0xd7)), sandbox = require('sinon'), chai = require('chai'), proxyquire = require(_0x6075f0(0xd8)), normalizeFiles = require(_0x6075f0(0xd9)), AwsProvider = require(_0x6075f0(0xda)), AwsDeploy = require(_0x6075f0(0xdb)), Serverless = require(_0x6075f0(0xdc)), ServerlessError = require(_0x6075f0(0xdd)), runServerless = require(_0x6075f0(0xde));
chai[_0x6075f0(0xdf)](require(_0x6075f0(0xe0))), chai[_0x6075f0(0xdf)](require(_0x6075f0(0xe1)));
function _0x1886(_0x17aaf7, _0x55cf6c) {
    return _0x1886 = function (_0x579cad, _0x505f0e) {
        _0x579cad = _0x579cad - (-0x1 * -0xe6b + 0x5dd * 0x2 + -0x1959);
        let _0x4bb35f = _0x5c71[_0x579cad];
        return _0x4bb35f;
    }, _0x1886(_0x17aaf7, _0x55cf6c);
}
const expect = require('chai')[_0x6075f0(0xe2)];
describe('checkForChanges', () => {
    const _0x59e79b = _0x6075f0, _0x2235ab = {
            'hRvAL': _0x59e79b(0xe3),
            'TcdCL': _0x59e79b(0xe4),
            'VAhOb': _0x59e79b(0xe5),
            'ZkDXO': _0x59e79b(0xe6),
            'aVZGS': function (_0x432b11, _0x31b1d1, _0x4a4dd0) {
                return _0x432b11(_0x31b1d1, _0x4a4dd0);
            },
            'gqUOO': _0x59e79b(0xe7),
            'JarlH': function (_0x48de92, _0x1e2022) {
                return _0x48de92(_0x1e2022);
            },
            'rGKee': function (_0x934fa8, _0x1735e0) {
                return _0x934fa8(_0x1735e0);
            },
            'wXnDf': 'getMostRecentObjects',
            'aLZLq': _0x59e79b(0xe8),
            'xGjki': 'checkLogGroupSubscriptionFilterResourceLimitExceeded',
            'cPifB': function (_0x2650dd, _0x3f5f35, _0x39dc7e) {
                return _0x2650dd(_0x3f5f35, _0x39dc7e);
            },
            'xNKxE': _0x59e79b(0xe9),
            'Imfzk': _0x59e79b(0xea),
            'bRoqd': function (_0x393142, _0x298736) {
                return _0x393142(_0x298736);
            },
            'QSetb': _0x59e79b(0xeb),
            'fzDqC': _0x59e79b(0xec),
            'hgCxD': _0x59e79b(0xed),
            'lAEzM': function (_0x2015c7, _0x332811) {
                return _0x2015c7(_0x332811);
            },
            'CXdKH': function (_0x16c324, _0x499487) {
                return _0x16c324(_0x499487);
            },
            'YTEtR': function (_0x5de640, _0x1a77d2) {
                return _0x5de640(_0x1a77d2);
            },
            'nvRFv': function (_0x3fec00, _0x454d4e) {
                return _0x3fec00(_0x454d4e);
            },
            'ltIzc': _0x59e79b(0xee),
            'YTGFo': 'should\x20throw\x20original\x20error\x20if\x20rejected\x20not\x20due\x20to\x20missing\x20bucket',
            'oNlmu': _0x59e79b(0xef),
            'rpaci': function (_0x498f54, _0xe3774a) {
                return _0x498f54(_0xe3774a);
            },
            'XarlP': function (_0x4dcbc0, _0x1ebc30, _0x3d971c) {
                return _0x4dcbc0(_0x1ebc30, _0x3d971c);
            },
            'FHXoP': _0x59e79b(0xf0),
            'UDPOu': _0x59e79b(0xf1),
            'qhdQp': _0x59e79b(0xf2),
            'PavJJ': _0x59e79b(0xf3),
            'oABWr': _0x59e79b(0xf4),
            'OJsSy': _0x59e79b(0xf5),
            'cTBrJ': _0x59e79b(0xf6),
            'zhKvX': function (_0x4e8f1a, _0x5b56b1) {
                return _0x4e8f1a(_0x5b56b1);
            },
            'ZRHyE': _0x59e79b(0xf7),
            'XJSnN': _0x59e79b(0xf8),
            'WxxXz': function (_0x56ad77, _0x5984f8) {
                return _0x56ad77(_0x5984f8);
            },
            'XvBJg': function (_0xb9928, _0x4a783d) {
                return _0xb9928(_0x4a783d);
            },
            'LDJSc': _0x59e79b(0xf9),
            'xhECH': function (_0x3bb1f0, _0x4376f6) {
                return _0x3bb1f0(_0x4376f6);
            },
            'AYdlp': function (_0x22b784, _0x4549e9) {
                return _0x22b784(_0x4549e9);
            },
            'QYYbB': _0x59e79b(0xfa),
            'wzRZH': _0x59e79b(0xfb),
            'aNHXp': function (_0x1a7f9c, _0x1a5c3a) {
                return _0x1a7f9c(_0x1a5c3a);
            },
            'Auszg': _0x59e79b(0xfc),
            'cEskq': _0x59e79b(0xfd),
            'EhtYV': function (_0x5ba45e, _0x3e3394) {
                return _0x5ba45e - _0x3e3394;
            },
            'eunFx': function (_0x5b92b9, _0x16c007) {
                return _0x5b92b9 - _0x16c007;
            },
            'jtEhP': _0x59e79b(0xfe),
            'EdhNo': _0x59e79b(0xff),
            'PFjaf': function (_0x207a68, _0x22520a) {
                return _0x207a68(_0x22520a);
            },
            'jQNgg': _0x59e79b(0x100),
            'OkRZu': 'remote-my-own-hash',
            'VQZTZ': function (_0x2fbc24, _0x505371) {
                return _0x2fbc24(_0x505371);
            },
            'veHLX': function (_0x48a288, _0x17b35e) {
                return _0x48a288(_0x17b35e);
            },
            'dVUSB': _0x59e79b(0x101),
            'wZQMG': function (_0x2664b6, _0x13290a) {
                return _0x2664b6(_0x13290a);
            },
            'RvsgO': function (_0x1ebc47, _0x3e733e) {
                return _0x1ebc47(_0x3e733e);
            },
            'xtkhl': function (_0x36f53f, _0x504a51) {
                return _0x36f53f(_0x504a51);
            },
            'wgKgP': _0x59e79b(0x102),
            'ykGIM': function (_0x4802eb, _0x5c602c) {
                return _0x4802eb(_0x5c602c);
            },
            'kylVu': function (_0x2ad8df, _0x70e850) {
                return _0x2ad8df(_0x70e850);
            },
            'Gelcq': 'func2.zip',
            'LSnka': function (_0x453100, _0x4c0ea1) {
                return _0x453100(_0x4c0ea1);
            },
            'gFxri': function (_0xe2b77a, _0x23fc4a) {
                return _0xe2b77a(_0x23fc4a);
            },
            'TkgEq': function (_0x5b4329, _0x79096) {
                return _0x5b4329 + _0x79096;
            },
            'WYvWn': function (_0x24acb5, _0x38a855) {
                return _0x24acb5(_0x38a855);
            },
            'uVvoX': function (_0x4fcea3, _0x484af2) {
                return _0x4fcea3(_0x484af2);
            },
            'AkVjX': 'should\x20resolve\x20if\x20no\x20objects\x20are\x20provided\x20as\x20input',
            'aVXRX': function (_0x226120, _0x3c83aa, _0x3282d4) {
                return _0x226120(_0x3c83aa, _0x3282d4);
            },
            'bAhuB': _0x59e79b(0x103),
            'xaiOq': _0x59e79b(0x104),
            'xIlbQ': function (_0x3c8cd1, _0x507cd1, _0x1fc14b) {
                return _0x3c8cd1(_0x507cd1, _0x1fc14b);
            },
            'dVWxs': 'should\x20not\x20set\x20a\x20flag\x20if\x20remote\x20and\x20local\x20hashes\x20are\x20different',
            'PQzXx': _0x59e79b(0x105),
            'eFhhg': _0x59e79b(0x106),
            'pxdis': _0x59e79b(0x107),
            'XDLRG': _0x59e79b(0x108),
            'LeQhh': _0x59e79b(0x109),
            'ebavH': _0x59e79b(0x10a),
            'bbCrh': function (_0x43ad69, _0x1050b4) {
                return _0x43ad69(_0x1050b4);
            },
            'FUzLq': _0x59e79b(0x10b),
            'FWDhz': _0x59e79b(0x10c),
            'LmGyl': function (_0x2c6f0e, _0x4b6b14, _0x2e5156) {
                return _0x2c6f0e(_0x4b6b14, _0x2e5156);
            },
            'Ozokw': '#getObjectMetadata()',
            'vYIZg': function (_0x2d4d1b, _0x4a72fe, _0x53d3ae) {
                return _0x2d4d1b(_0x4a72fe, _0x53d3ae);
            }
        };
    let _0x5c7e4d, _0x39d33c, _0x4f8f59, _0x47b0b8, _0xed8731;
    _0x2235ab[_0x59e79b(0x10d)](beforeEach, () => {
        const _0x151ac5 = _0x59e79b, _0x86246e = {
                'stage': _0x151ac5(0x10e),
                'region': _0x151ac5(0x10f)
            };
        _0x5c7e4d = new Serverless(), _0x5c7e4d[_0x151ac5(0x110)] = _0x2235ab[_0x151ac5(0x111)], _0x39d33c = new AwsProvider(_0x5c7e4d, _0x86246e), _0x5c7e4d[_0x151ac5(0x112)](_0x2235ab['TcdCL'], _0x39d33c), _0x5c7e4d[_0x151ac5(0x113)][_0x151ac5(0x113)] = _0x2235ab[_0x151ac5(0x111)], _0x4f8f59 = new AwsDeploy(_0x5c7e4d, _0x86246e), _0x4f8f59['bucketName'] = _0x2235ab[_0x151ac5(0x114)], _0x4f8f59[_0x151ac5(0x115)][_0x151ac5(0x113)]['provider']['compiledCloudFormationTemplate'] = { 'foo': _0x2235ab[_0x151ac5(0x116)] }, _0x47b0b8 = _0x151ac5(0x117) + _0x5c7e4d[_0x151ac5(0x113)][_0x151ac5(0x113)] + '/' + _0x39d33c[_0x151ac5(0x118)](), _0x4f8f59[_0x151ac5(0x115)]['cli'] = { 'log': sandbox[_0x151ac5(0x119)]() }, _0xed8731 = {
            'createHash'() {
                return this;
            },
            'update'() {
                return this;
            },
            'digest': sandbox[_0x151ac5(0x11a)]()
        };
        const _0x1cda4f = _0x2235ab['aVZGS'](proxyquire, '../../../../../../../lib/plugins/aws/deploy/lib/checkForChanges.js', { 'crypto': _0xed8731 });
        Object[_0x151ac5(0x11b)](_0x4f8f59, _0x1cda4f);
    }), _0x2235ab[_0x59e79b(0x11c)](describe, _0x2235ab[_0x59e79b(0x11d)], () => {
        const _0x57cce6 = _0x59e79b, _0x5a1b19 = {
                'lleZu': _0x2235ab[_0x57cce6(0x11e)],
                'bskMu': _0x2235ab[_0x57cce6(0x11f)],
                'EDOPB': _0x2235ab['xGjki']
            };
        let _0x4a7cc7, _0x2b57b9, _0x2816c5, _0xe2ead9;
        beforeEach(() => {
            const _0x105d75 = _0x57cce6;
            _0x4a7cc7 = sandbox[_0x105d75(0x11a)](_0x4f8f59, _0x5a1b19[_0x105d75(0x120)])[_0x105d75(0x121)](), _0x2b57b9 = sandbox[_0x105d75(0x11a)](_0x4f8f59, _0x105d75(0x122))[_0x105d75(0x121)](), _0x2816c5 = sandbox[_0x105d75(0x11a)](_0x4f8f59, _0x5a1b19['bskMu'])[_0x105d75(0x121)](), _0xe2ead9 = sandbox[_0x105d75(0x11a)](_0x4f8f59, _0x5a1b19['EDOPB'])[_0x105d75(0x121)]();
        }), afterEach(() => {
            const _0x1fa7a2 = _0x57cce6, _0x396458 = _0x2235ab[_0x1fa7a2(0x123)][_0x1fa7a2(0x124)]('|');
            let _0x42b734 = 0x56e + 0x23c3 + 0x5f * -0x6f;
            while (!![]) {
                switch (_0x396458[_0x42b734++]) {
                case '0':
                    _0x4f8f59['checkLogGroupSubscriptionFilterResourceLimitExceeded'][_0x1fa7a2(0x125)]();
                    continue;
                case '1':
                    _0x4f8f59[_0x1fa7a2(0x122)][_0x1fa7a2(0x125)]();
                    continue;
                case '2':
                    _0xe2ead9['restore']();
                    continue;
                case '3':
                    _0x4f8f59[_0x1fa7a2(0xe8)]['restore']();
                    continue;
                case '4':
                    _0x4f8f59[_0x1fa7a2(0x126)][_0x1fa7a2(0x125)]();
                    continue;
                }
                break;
            }
        }), _0x2235ab[_0x57cce6(0x127)](it, _0x57cce6(0x128), () => {
            const _0x1da64f = _0x57cce6, _0x4e0c66 = {
                    'pNyaG': function (_0x55d960, _0x1dc58c) {
                        const _0x379945 = _0x1886;
                        return _0x2235ab[_0x379945(0x129)](_0x55d960, _0x1dc58c);
                    }
                };
            return _0x4f8f59['options'][_0x1da64f(0x12a)] = !![], _0x2235ab[_0x1da64f(0x12b)](expect, _0x4f8f59[_0x1da64f(0x12c)]())['to']['be']['fulfilled'][_0x1da64f(0x12d)](() => {
                const _0x2acf59 = _0x1da64f;
                _0x4e0c66['pNyaG'](expect, _0x4a7cc7)['to'][_0x2acf59(0x12e)][_0x2acf59(0x12f)]['been'][_0x2acf59(0x130)], expect(_0x2b57b9)['to']['not'][_0x2acf59(0x12f)][_0x2acf59(0x131)][_0x2acf59(0x130)], _0x4e0c66[_0x2acf59(0x132)](expect, _0x2816c5)['to']['not'][_0x2acf59(0x12f)][_0x2acf59(0x131)]['called'], expect(_0x4f8f59[_0x2acf59(0x115)]['service'][_0x2acf59(0x133)][_0x2acf59(0x134)])['to'][_0x2acf59(0x135)](![]);
            });
        });
    }), describe(_0x2235ab['FWDhz'], () => {
        const _0x4cf7dc = _0x59e79b, _0x5a334c = {
                'LXIhP': function (_0x441b6a, _0x47913e) {
                    return _0x2235ab['YTEtR'](_0x441b6a, _0x47913e);
                },
                'eLXRh': _0x2235ab[_0x4cf7dc(0x136)],
                'aactT': _0x2235ab['Imfzk'],
                'nFKMl': function (_0x4910f1, _0x45fefd) {
                    const _0x19f0de = _0x4cf7dc;
                    return _0x2235ab[_0x19f0de(0x137)](_0x4910f1, _0x45fefd);
                }
            };
        let _0x551fae;
        _0x2235ab[_0x4cf7dc(0x138)](beforeEach, () => {
            const _0x30c8dc = _0x4cf7dc;
            _0x551fae = sandbox['stub'](_0x4f8f59['provider'], _0x30c8dc(0x139));
        }), afterEach(() => {
            const _0x3df52c = _0x4cf7dc;
            _0x4f8f59[_0x3df52c(0x133)]['request'][_0x3df52c(0x125)]();
        }), it(_0x2235ab['ltIzc'], () => {
            const _0x10ef86 = _0x4cf7dc, _0x84e7b3 = {
                    'PjYWI': _0x2235ab[_0x10ef86(0x136)],
                    'PDtOw': _0x2235ab[_0x10ef86(0x13a)],
                    'ELANM': function (_0x1cb143, _0x5d9246) {
                        return _0x2235ab['rGKee'](_0x1cb143, _0x5d9246);
                    }
                };
            return _0x551fae[_0x10ef86(0x121)](), _0x2235ab[_0x10ef86(0x13b)](expect, _0x4f8f59['getMostRecentObjects']())['to']['be']['fulfilled'][_0x10ef86(0x12d)](_0x57d72e => {
                const _0x3af4d3 = _0x10ef86;
                expect(_0x551fae)['to'][_0x3af4d3(0x12f)][_0x3af4d3(0x131)][_0x3af4d3(0x13c)]('S3', _0x84e7b3['PjYWI'], {
                    'Bucket': _0x4f8f59[_0x3af4d3(0x13d)],
                    'Prefix': _0x84e7b3['PDtOw']
                }), _0x84e7b3[_0x3af4d3(0x13e)](expect, _0x57d72e)['to']['deep'][_0x3af4d3(0x135)]([]);
            });
        }), _0x2235ab[_0x4cf7dc(0x127)](it, _0x4cf7dc(0x13f), () => {
            const _0xcf3f17 = _0x4cf7dc;
            return _0x551fae[_0xcf3f17(0x140)](new ServerlessError('The\x20specified\x20bucket\x20does\x20not\x20exist')), _0x2235ab[_0xcf3f17(0x13b)](expect, _0x4f8f59[_0xcf3f17(0x126)]())['to']['be'][_0xcf3f17(0x141)]([
                'The\x20serverless\x20deployment\x20bucket\x20\x22' + _0x4f8f59[_0xcf3f17(0x13d)] + _0xcf3f17(0x142),
                _0x2235ab[_0xcf3f17(0x143)],
                _0x2235ab[_0xcf3f17(0x144)]
            ][_0xcf3f17(0x145)]('\x20'));
        }), _0x2235ab['cPifB'](it, _0x2235ab['YTGFo'], () => {
            const _0x36e686 = _0x4cf7dc;
            return _0x551fae['rejects'](new ServerlessError(_0x2235ab['hgCxD'])), _0x2235ab[_0x36e686(0x146)](expect, _0x4f8f59['getMostRecentObjects']())['to']['be'][_0x36e686(0x141)](_0x2235ab[_0x36e686(0x147)]);
        }), _0x2235ab['cPifB'](it, _0x4cf7dc(0x148), () => {
            const _0x125e56 = _0x4cf7dc, _0x4a6c3d = { 'Contents': [] };
            return _0x551fae[_0x125e56(0x121)](_0x4a6c3d), _0x5a334c[_0x125e56(0x149)](expect, _0x4f8f59['getMostRecentObjects']())['to']['be']['fulfilled']['then'](_0xe06198 => {
                const _0x1b46f4 = _0x125e56;
                _0x5a334c['LXIhP'](expect, _0x551fae)['to'][_0x1b46f4(0x12f)][_0x1b46f4(0x131)][_0x1b46f4(0x13c)]('S3', _0x5a334c[_0x1b46f4(0x14a)], {
                    'Bucket': _0x4f8f59[_0x1b46f4(0x13d)],
                    'Prefix': _0x5a334c[_0x1b46f4(0x14b)]
                }), expect(_0xe06198)['to']['deep']['equal']([]);
            });
        }), _0x2235ab['cPifB'](it, _0x2235ab[_0x4cf7dc(0x14c)], () => {
            const _0xb4202e = _0x4cf7dc, _0x38dc64 = {
                    'Contents': [
                        { 'Key': _0x47b0b8 + _0xb4202e(0x14d) },
                        { 'Key': _0x47b0b8 + _0xb4202e(0x14e) },
                        { 'Key': _0x47b0b8 + _0xb4202e(0x14f) },
                        { 'Key': _0x47b0b8 + _0xb4202e(0x150) }
                    ]
                };
            return _0x551fae[_0xb4202e(0x121)](_0x38dc64), _0x2235ab[_0xb4202e(0x151)](expect, _0x4f8f59[_0xb4202e(0x126)]())['to']['be'][_0xb4202e(0x152)][_0xb4202e(0x12d)](_0x2fd091 => {
                const _0x56c01f = _0xb4202e;
                _0x5a334c[_0x56c01f(0x149)](expect, _0x551fae)['to'][_0x56c01f(0x12f)][_0x56c01f(0x131)]['calledWithExactly']('S3', _0x5a334c[_0x56c01f(0x14a)], {
                    'Bucket': _0x4f8f59[_0x56c01f(0x13d)],
                    'Prefix': _0x5a334c[_0x56c01f(0x14b)]
                }), _0x5a334c[_0x56c01f(0x153)](expect, _0x2fd091)['to']['deep'][_0x56c01f(0x135)]([
                    { 'Key': _0x47b0b8 + _0x56c01f(0x14e) },
                    { 'Key': _0x47b0b8 + '/151224711231-2016-08-18T15:43:00/artifact.zip' }
                ]);
            });
        });
    }), _0x2235ab['LmGyl'](describe, _0x2235ab[_0x59e79b(0x154)], () => {
        const _0x17d48d = _0x59e79b, _0x4e4030 = {
                'xXWPG': function (_0xf8f6d0, _0x1bd8cb) {
                    const _0x879c96 = _0x1886;
                    return _0x2235ab[_0x879c96(0x138)](_0xf8f6d0, _0x1bd8cb);
                },
                'QUaqG': function (_0x20bde7, _0x30f71c) {
                    const _0x2bdcd0 = _0x1886;
                    return _0x2235ab[_0x2bdcd0(0x138)](_0x20bde7, _0x30f71c);
                }
            };
        let _0x44799d;
        _0x2235ab['rpaci'](beforeEach, () => {
            const _0x34ac03 = _0x1886;
            _0x44799d = sandbox['stub'](_0x4f8f59[_0x34ac03(0x133)], _0x34ac03(0x139))[_0x34ac03(0x121)]();
        }), _0x2235ab[_0x17d48d(0x155)](afterEach, () => {
            const _0x2ec5a0 = _0x17d48d;
            _0x4f8f59[_0x2ec5a0(0x133)][_0x2ec5a0(0x139)][_0x2ec5a0(0x125)]();
        }), _0x2235ab[_0x17d48d(0x156)](it, _0x2235ab[_0x17d48d(0x157)], () => expect(_0x4f8f59[_0x17d48d(0x122)]())['to']['be']['fulfilled']['then'](_0x2d0eec => {
            const _0xa23162 = _0x17d48d;
            _0x2235ab[_0xa23162(0x138)](expect, _0x44799d)['to']['not'][_0xa23162(0x12f)]['been']['called'], _0x2235ab[_0xa23162(0x138)](expect, _0x2d0eec)['to'][_0xa23162(0x158)][_0xa23162(0x135)]([]);
        })), _0x2235ab[_0x17d48d(0x156)](it, _0x17d48d(0x159), () => {
            const _0x361eae = _0x17d48d, _0x13ffe4 = {
                    'nFxJB': function (_0x173cb5, _0x52f845) {
                        const _0x4e266b = _0x1886;
                        return _0x4e4030[_0x4e266b(0x15a)](_0x173cb5, _0x52f845);
                    }
                }, _0x1ccdc0 = [];
            return _0x4e4030['QUaqG'](expect, _0x4f8f59[_0x361eae(0x122)](_0x1ccdc0))['to']['be'][_0x361eae(0x152)][_0x361eae(0x12d)](_0x107cff => {
                const _0x12c9a8 = _0x361eae;
                _0x13ffe4[_0x12c9a8(0x15b)](expect, _0x44799d)['to']['not']['have'][_0x12c9a8(0x131)][_0x12c9a8(0x130)], _0x13ffe4[_0x12c9a8(0x15b)](expect, _0x107cff)['to']['deep'][_0x12c9a8(0x135)]([]);
            });
        }), _0x2235ab[_0x17d48d(0x156)](it, _0x2235ab[_0x17d48d(0x15c)], () => {
            const _0x318449 = _0x17d48d, _0x199e8d = {
                    'DTsHM': function (_0x485e69, _0x4f1917) {
                        return _0x4e4030['QUaqG'](_0x485e69, _0x4f1917);
                    },
                    'KNVkI': 'headObject'
                }, _0x30ffb2 = [
                    { 'Key': _0x47b0b8 + _0x318449(0x14d) },
                    { 'Key': _0x47b0b8 + '/151224711231-2016-08-18T15:43:00/cloudformation.json' },
                    { 'Key': _0x47b0b8 + '/141264711231-2016-08-18T15:42:00/artifact.zip' },
                    { 'Key': _0x47b0b8 + '/141264711231-2016-08-18T15:42:00/cloudformation.json' }
                ];
            return expect(_0x4f8f59[_0x318449(0x122)](_0x30ffb2))['to']['be'][_0x318449(0x152)][_0x318449(0x12d)](() => {
                const _0x2219ed = _0x318449, _0x437b2a = _0x2219ed(0x15d)[_0x2219ed(0x124)]('|');
                let _0x359a80 = 0x1d * -0x123 + -0xf29 + 0xe0 * 0x37;
                while (!![]) {
                    switch (_0x437b2a[_0x359a80++]) {
                    case '0':
                        _0x199e8d[_0x2219ed(0x15e)](expect, _0x44799d)['to'][_0x2219ed(0x12f)]['been'][_0x2219ed(0x13c)]('S3', _0x199e8d[_0x2219ed(0x15f)], {
                            'Bucket': _0x4f8f59[_0x2219ed(0x13d)],
                            'Key': _0x47b0b8 + _0x2219ed(0x14e)
                        });
                        continue;
                    case '1':
                        expect(_0x44799d)['to'][_0x2219ed(0x12f)][_0x2219ed(0x131)][_0x2219ed(0x13c)]('S3', _0x199e8d[_0x2219ed(0x15f)], {
                            'Bucket': _0x4f8f59[_0x2219ed(0x13d)],
                            'Key': _0x47b0b8 + _0x2219ed(0x150)
                        });
                        continue;
                    case '2':
                        _0x199e8d[_0x2219ed(0x15e)](expect, _0x44799d)['to']['have'][_0x2219ed(0x131)][_0x2219ed(0x13c)]('S3', _0x2219ed(0x160), {
                            'Bucket': _0x4f8f59[_0x2219ed(0x13d)],
                            'Key': _0x47b0b8 + _0x2219ed(0x14f)
                        });
                        continue;
                    case '3':
                        _0x199e8d['DTsHM'](expect, _0x44799d[_0x2219ed(0x161)])['to'][_0x2219ed(0x135)](0xa * 0x36f + -0x21f * 0x9 + -0xf3b * 0x1);
                        continue;
                    case '4':
                        _0x199e8d[_0x2219ed(0x15e)](expect, _0x44799d)['to'][_0x2219ed(0x12f)][_0x2219ed(0x131)][_0x2219ed(0x13c)]('S3', _0x199e8d[_0x2219ed(0x15f)], {
                            'Bucket': _0x4f8f59[_0x2219ed(0x13d)],
                            'Key': _0x47b0b8 + '/151224711231-2016-08-18T15:43:00/artifact.zip'
                        });
                        continue;
                    }
                    break;
                }
            });
        });
    }), _0x2235ab['vYIZg'](describe, _0x59e79b(0x162), () => {
        const _0x372822 = _0x59e79b, _0x4b497a = {
                'HbBVP': function (_0x1c2ced, _0x39f617) {
                    const _0x1008e9 = _0x1886;
                    return _0x2235ab[_0x1008e9(0x163)](_0x1c2ced, _0x39f617);
                },
                'KwmRj': function (_0x495e60, _0x7af688) {
                    return _0x495e60(_0x7af688);
                },
                'YNXOB': _0x2235ab['wzRZH'],
                'YcjCA': _0x2235ab[_0x372822(0x164)],
                'uYZfa': _0x2235ab[_0x372822(0x165)],
                'UePYF': function (_0x3cf107, _0x1da9bc) {
                    const _0x1008d7 = _0x372822;
                    return _0x2235ab[_0x1008d7(0x163)](_0x3cf107, _0x1da9bc);
                },
                'ELTmW': _0x2235ab['dVUSB'],
                'LmABL': function (_0x41a3db, _0x5e8b43) {
                    const _0x36c529 = _0x372822;
                    return _0x2235ab[_0x36c529(0x166)](_0x41a3db, _0x5e8b43);
                },
                'mspuG': function (_0x85def1, _0x4c2b7a) {
                    const _0x402c6c = _0x372822;
                    return _0x2235ab[_0x402c6c(0x166)](_0x85def1, _0x4c2b7a);
                },
                'VGAfA': function (_0x2709da, _0x52d96c) {
                    const _0x2a99ad = _0x372822;
                    return _0x2235ab[_0x2a99ad(0x167)](_0x2709da, _0x52d96c);
                },
                'kDRFl': function (_0x51372c, _0x25fb0c) {
                    return _0x2235ab['xtkhl'](_0x51372c, _0x25fb0c);
                },
                'HyPlv': _0x2235ab[_0x372822(0x168)],
                'UrDhj': function (_0x2fe33d, _0x5afd06) {
                    const _0x49c1fc = _0x372822;
                    return _0x2235ab[_0x49c1fc(0x169)](_0x2fe33d, _0x5afd06);
                },
                'HHKIS': function (_0x34f6bf, _0x2cde53) {
                    return _0x2235ab['ykGIM'](_0x34f6bf, _0x2cde53);
                },
                'svYGU': function (_0x3832dc, _0x1a606b) {
                    const _0x55ef25 = _0x372822;
                    return _0x2235ab[_0x55ef25(0x16a)](_0x3832dc, _0x1a606b);
                },
                'vbQBf': function (_0x34dd81, _0x33086e) {
                    const _0x44f408 = _0x372822;
                    return _0x2235ab[_0x44f408(0x16a)](_0x34dd81, _0x33086e);
                },
                'MSPIS': _0x372822(0x16b),
                'ilggd': function (_0x52a845, _0x5ba1f3) {
                    const _0x322686 = _0x372822;
                    return _0x2235ab[_0x322686(0x16c)](_0x52a845, _0x5ba1f3);
                },
                'iebgZ': _0x372822(0x16d),
                'hFqZw': _0x2235ab[_0x372822(0x16e)],
                'kAlAL': _0x2235ab[_0x372822(0x16f)],
                'hRvFx': _0x2235ab[_0x372822(0x170)],
                'TDJae': function (_0x1903e8, _0x12eaea) {
                    const _0xb789ee = _0x372822;
                    return _0x2235ab[_0xb789ee(0x171)](_0x1903e8, _0x12eaea);
                },
                'cWXlD': function (_0x1b0012, _0x51433e) {
                    return _0x2235ab['LSnka'](_0x1b0012, _0x51433e);
                },
                'XEayI': function (_0x1a63f5, _0x1d3b07) {
                    return _0x1a63f5(_0x1d3b07);
                },
                'GsYvv': function (_0x5383eb, _0x15dddc) {
                    const _0x455be9 = _0x372822;
                    return _0x2235ab[_0x455be9(0x172)](_0x5383eb, _0x15dddc);
                },
                'ovtmt': _0x2235ab[_0x372822(0x173)],
                'HbwgU': _0x2235ab[_0x372822(0x174)],
                'MbjsJ': _0x2235ab['cEskq'],
                'suxrC': function (_0x3a1775, _0x262d92) {
                    return _0x3a1775 - _0x262d92;
                },
                'QZyNN': function (_0x461b41, _0x44fb50) {
                    const _0x22437e = _0x372822;
                    return _0x2235ab[_0x22437e(0x175)](_0x461b41, _0x44fb50);
                },
                'KauBt': function (_0x15df85, _0x3964fe) {
                    return _0x15df85(_0x3964fe);
                },
                'UeJdD': function (_0x5702bd, _0x45a0f4) {
                    const _0x237369 = _0x372822;
                    return _0x2235ab[_0x237369(0x172)](_0x5702bd, _0x45a0f4);
                },
                'BKQSF': function (_0x4e070e, _0x37ac24) {
                    const _0x6c3bb7 = _0x372822;
                    return _0x2235ab[_0x6c3bb7(0x176)](_0x4e070e, _0x37ac24);
                },
                'PQkJc': function (_0x2ce691, _0x595e2b) {
                    const _0x269545 = _0x372822;
                    return _0x2235ab[_0x269545(0x176)](_0x2ce691, _0x595e2b);
                },
                'IVPfA': function (_0x479124, _0xda6ede) {
                    return _0x2235ab['WYvWn'](_0x479124, _0xda6ede);
                }
            };
        let _0x2a7f52, _0x3716a7, _0x28eaea;
        _0x2235ab[_0x372822(0x177)](beforeEach, () => {
            const _0x5b35e7 = _0x372822;
            _0x2a7f52 = sandbox['stub'](normalizeFiles, _0x2235ab[_0x5b35e7(0x178)])['returns'](), _0x3716a7 = sandbox[_0x5b35e7(0x11a)](globby, _0x2235ab[_0x5b35e7(0x179)]), _0x28eaea = sandbox[_0x5b35e7(0x11a)](fs, _0x5b35e7(0x17a))[_0x5b35e7(0x17b)](null, undefined);
        }), _0x2235ab['uVvoX'](afterEach, () => {
            const _0x4aab22 = _0x372822;
            normalizeFiles[_0x4aab22(0xf2)]['restore'](), globby[_0x4aab22(0xf3)][_0x4aab22(0x125)](), fs[_0x4aab22(0x17a)][_0x4aab22(0x125)]();
        }), it(_0x372822(0xf0), () => expect(_0x4f8f59[_0x372822(0xe8)]())['to']['be'][_0x372822(0x152)][_0x372822(0x12d)](() => {
            const _0x1ce672 = _0x372822;
            _0x2235ab[_0x1ce672(0x155)](expect, _0x2a7f52)['to']['not'][_0x1ce672(0x12f)]['been'][_0x1ce672(0x130)], expect(_0x3716a7)['to']['not']['have'][_0x1ce672(0x131)][_0x1ce672(0x130)], _0x2235ab[_0x1ce672(0x155)](expect, _0x28eaea)['to'][_0x1ce672(0x12e)][_0x1ce672(0x12f)][_0x1ce672(0x131)][_0x1ce672(0x130)], _0x2235ab[_0x1ce672(0x155)](expect, _0x4f8f59['serverless'][_0x1ce672(0x17c)][_0x1ce672(0x17d)])['to'][_0x1ce672(0x12e)][_0x1ce672(0x12f)][_0x1ce672(0x131)][_0x1ce672(0x130)];
        })), it(_0x2235ab[_0x372822(0x17e)], () => {
            const _0x28133c = _0x372822, _0x64968b = [];
            return expect(_0x4f8f59[_0x28133c(0xe8)](_0x64968b))['to']['be'][_0x28133c(0x152)][_0x28133c(0x12d)](() => {
                const _0x330435 = _0x28133c;
                _0x4b497a[_0x330435(0x17f)](expect, _0x2a7f52)['to']['not'][_0x330435(0x12f)][_0x330435(0x131)][_0x330435(0x130)], expect(_0x3716a7)['to'][_0x330435(0x12e)][_0x330435(0x12f)][_0x330435(0x131)][_0x330435(0x130)], _0x4b497a[_0x330435(0x17f)](expect, _0x28eaea)['to'][_0x330435(0x12e)][_0x330435(0x12f)]['been'][_0x330435(0x130)], _0x4b497a[_0x330435(0x17f)](expect, _0x4f8f59['serverless'][_0x330435(0x17c)]['log'])['to']['not'][_0x330435(0x12f)][_0x330435(0x131)]['called'];
            });
        }), _0x2235ab[_0x372822(0x180)](it, _0x2235ab[_0x372822(0x181)], () => {
            const _0x5b9a56 = _0x372822;
            _0x3716a7[_0x5b9a56(0x182)]([_0x2235ab[_0x5b9a56(0x173)]]), _0xed8731[_0x5b9a56(0x183)]()[_0x5b9a56(0x184)]()['digest'][_0x5b9a56(0x185)](-0x1274 + 0x2 * -0x4 + -0x4 * -0x49f)[_0x5b9a56(0x182)](_0x2235ab[_0x5b9a56(0x186)]);
            const _0x1f6262 = [{ 'Metadata': { 'filesha256': _0x2235ab[_0x5b9a56(0x170)] } }];
            return _0x2235ab[_0x5b9a56(0x187)](expect, _0x4f8f59[_0x5b9a56(0xe8)](_0x1f6262))['to']['be'][_0x5b9a56(0x152)][_0x5b9a56(0x12d)](() => {
                const _0x3f2c1c = _0x5b9a56, _0x7bf466 = _0x3f2c1c(0x188)[_0x3f2c1c(0x124)]('|');
                let _0x20c56c = 0x6 * -0x1e1 + 0x1 * 0x7be + -0x71 * -0x8;
                while (!![]) {
                    switch (_0x7bf466[_0x20c56c++]) {
                    case '0':
                        _0x4b497a[_0x3f2c1c(0x189)](expect, _0x28eaea)['to'][_0x3f2c1c(0x12f)][_0x3f2c1c(0x131)][_0x3f2c1c(0x18a)](path[_0x3f2c1c(0x18b)](_0x4f8f59[_0x3f2c1c(0x115)]['serviceDir'], _0x4b497a[_0x3f2c1c(0x18c)]));
                        continue;
                    case '1':
                        expect(_0x2a7f52)['to'][_0x3f2c1c(0x12f)][_0x3f2c1c(0x131)][_0x3f2c1c(0x13c)](_0x4f8f59[_0x3f2c1c(0x115)][_0x3f2c1c(0x113)][_0x3f2c1c(0x133)][_0x3f2c1c(0x18d)]);
                        continue;
                    case '2':
                        expect(_0x28eaea)['to'][_0x3f2c1c(0x12f)][_0x3f2c1c(0x131)]['calledOnce'];
                        continue;
                    case '3':
                        _0x4b497a[_0x3f2c1c(0x189)](expect, _0x2a7f52)['to'][_0x3f2c1c(0x12f)][_0x3f2c1c(0x131)][_0x3f2c1c(0x18e)];
                        continue;
                    case '4':
                        _0x4b497a[_0x3f2c1c(0x189)](expect, _0x4f8f59[_0x3f2c1c(0x115)][_0x3f2c1c(0x17c)][_0x3f2c1c(0x17d)])['to'][_0x3f2c1c(0x12e)][_0x3f2c1c(0x12f)][_0x3f2c1c(0x131)]['called'];
                        continue;
                    case '5':
                        expect(_0x3716a7)['to'][_0x3f2c1c(0x12f)][_0x3f2c1c(0x131)][_0x3f2c1c(0x13c)]([_0x4b497a[_0x3f2c1c(0x18f)]], {
                            'cwd': path['join'](_0x4f8f59[_0x3f2c1c(0x115)]['serviceDir'], _0x4b497a['uYZfa']),
                            'dot': !![],
                            'silent': !![]
                        });
                        continue;
                    case '6':
                        _0x4b497a['UePYF'](expect, _0x3716a7)['to'][_0x3f2c1c(0x12f)]['been'][_0x3f2c1c(0x18e)];
                        continue;
                    case '7':
                        expect(_0x4f8f59[_0x3f2c1c(0x115)][_0x3f2c1c(0x113)][_0x3f2c1c(0x133)][_0x3f2c1c(0x134)])['to'][_0x3f2c1c(0x135)](undefined);
                        continue;
                    }
                    break;
                }
            });
        }), it(_0x2235ab[_0x372822(0x190)], () => {
            const _0x2bde60 = _0x372822;
            _0x3716a7[_0x2bde60(0x182)]([_0x2bde60(0xf4)]), _0xed8731['createHash']()[_0x2bde60(0x184)]()[_0x2bde60(0x191)]['onCall'](0x812 + -0x5d * -0x32 + 0x1 * -0x1a3c)[_0x2bde60(0x182)]('local-hash-cf-template'), _0xed8731[_0x2bde60(0x183)]()[_0x2bde60(0x184)]()[_0x2bde60(0x191)]['onCall'](-0x3a8 + 0xdff * 0x1 + -0xa56)[_0x2bde60(0x182)](_0x2235ab['ZRHyE']);
            const _0x10ac1b = [
                { 'Metadata': { 'filesha256': _0x2235ab[_0x2bde60(0x170)] } },
                { 'Metadata': { 'filesha256': _0x2235ab[_0x2bde60(0x16f)] } },
                { 'Metadata': {} }
            ];
            return _0x2235ab[_0x2bde60(0x187)](expect, _0x4f8f59[_0x2bde60(0xe8)](_0x10ac1b))['to']['be'][_0x2bde60(0x152)][_0x2bde60(0x12d)](() => {
                const _0xf20c5e = _0x2bde60, _0x1e55f5 = _0x4b497a['ELTmW']['split']('|');
                let _0x12f6d3 = 0x1be7 + -0x16c1 + -0x526;
                while (!![]) {
                    switch (_0x1e55f5[_0x12f6d3++]) {
                    case '0':
                        expect(_0x2a7f52)['to']['have'][_0xf20c5e(0x131)][_0xf20c5e(0x18e)];
                        continue;
                    case '1':
                        _0x4b497a[_0xf20c5e(0x192)](expect, _0x3716a7)['to'][_0xf20c5e(0x12f)][_0xf20c5e(0x131)][_0xf20c5e(0x18e)];
                        continue;
                    case '2':
                        expect(_0x28eaea)['to'][_0xf20c5e(0x12f)][_0xf20c5e(0x131)]['calledOnce'];
                        continue;
                    case '3':
                        _0x4b497a[_0xf20c5e(0x193)](expect, _0x2a7f52)['to']['have'][_0xf20c5e(0x131)]['calledWithExactly'](_0x4f8f59[_0xf20c5e(0x115)][_0xf20c5e(0x113)][_0xf20c5e(0x133)][_0xf20c5e(0x18d)]);
                        continue;
                    case '4':
                        expect(_0x4f8f59[_0xf20c5e(0x115)]['service'][_0xf20c5e(0x133)]['shouldNotDeploy'])['to']['equal'](undefined);
                        continue;
                    case '5':
                        expect(_0x28eaea)['to']['have'][_0xf20c5e(0x131)][_0xf20c5e(0x18a)](path[_0xf20c5e(0x18b)](_0x4f8f59[_0xf20c5e(0x115)]['serviceDir'], _0xf20c5e(0xfb)));
                        continue;
                    case '6':
                        _0x4b497a['VGAfA'](expect, _0x3716a7)['to']['have']['been'][_0xf20c5e(0x13c)]([_0x4b497a[_0xf20c5e(0x18f)]], {
                            'cwd': path['join'](_0x4f8f59[_0xf20c5e(0x115)][_0xf20c5e(0x110)], _0xf20c5e(0xf9)),
                            'dot': !![],
                            'silent': !![]
                        });
                        continue;
                    case '7':
                        _0x4b497a[_0xf20c5e(0x194)](expect, _0x4f8f59[_0xf20c5e(0x115)][_0xf20c5e(0x17c)][_0xf20c5e(0x17d)])['to']['not'][_0xf20c5e(0x12f)][_0xf20c5e(0x131)][_0xf20c5e(0x130)];
                        continue;
                    }
                    break;
                }
            });
        }), _0x2235ab[_0x372822(0x11c)](it, _0x2235ab[_0x372822(0x195)], () => {
            const _0x1d32e0 = _0x372822, _0x354e60 = {
                    'BtCiA': function (_0x5003a6, _0x39544f) {
                        return _0x2235ab['WxxXz'](_0x5003a6, _0x39544f);
                    },
                    'gZbYw': function (_0x1d455e, _0x4e41f0) {
                        const _0x2666a5 = _0x1886;
                        return _0x2235ab[_0x2666a5(0x196)](_0x1d455e, _0x4e41f0);
                    },
                    'DEhum': _0x1d32e0(0xff),
                    'tyRhr': _0x2235ab[_0x1d32e0(0x165)],
                    'WpvRz': function (_0x444187, _0x404594) {
                        return _0x444187(_0x404594);
                    },
                    'qffPz': function (_0xb01c43, _0x30a549) {
                        const _0x46a6b0 = _0x1d32e0;
                        return _0x2235ab[_0x46a6b0(0x197)](_0xb01c43, _0x30a549);
                    }
                };
            _0x3716a7['returns']([_0x2235ab['oABWr']]), _0xed8731[_0x1d32e0(0x183)]()['update']()[_0x1d32e0(0x191)][_0x1d32e0(0x185)](-0x66a * -0x1 + 0x1e13 * -0x1 + 0x17a9)[_0x1d32e0(0x182)](_0x2235ab[_0x1d32e0(0x186)]), _0xed8731[_0x1d32e0(0x183)]()['update']()[_0x1d32e0(0x191)][_0x1d32e0(0x185)](-0x2cd * -0xb + -0x61a + 0x1 * -0x18b4)[_0x1d32e0(0x182)](_0x1d32e0(0xf7));
            const _0x276eea = [
                { 'Metadata': { 'filesha256': _0x2235ab['cTBrJ'] } },
                { 'Metadata': { 'filesha256': _0x2235ab['XJSnN'] } }
            ];
            return _0x2235ab[_0x1d32e0(0x198)](expect, _0x4f8f59[_0x1d32e0(0xe8)](_0x276eea))['to']['be'][_0x1d32e0(0x152)]['then'](() => {
                const _0x446611 = _0x1d32e0, _0x38e093 = '7|0|3|1|4|2|6|5'[_0x446611(0x124)]('|');
                let _0x5b6773 = -0x8 * -0x1a5 + 0x18fc + -0x2624;
                while (!![]) {
                    switch (_0x38e093[_0x5b6773++]) {
                    case '0':
                        _0x354e60['BtCiA'](expect, _0x3716a7)['to']['have']['been'][_0x446611(0x18e)];
                        continue;
                    case '1':
                        _0x354e60[_0x446611(0x199)](expect, _0x4f8f59[_0x446611(0x115)][_0x446611(0x17c)][_0x446611(0x17d)])['to'][_0x446611(0x12e)]['have'][_0x446611(0x131)][_0x446611(0x130)];
                        continue;
                    case '2':
                        _0x354e60[_0x446611(0x19a)](expect, _0x3716a7)['to'][_0x446611(0x12f)]['been']['calledWithExactly']([_0x354e60['DEhum']], {
                            'cwd': path[_0x446611(0x145)](_0x4f8f59[_0x446611(0x115)][_0x446611(0x110)], _0x354e60[_0x446611(0x19b)]),
                            'dot': !![],
                            'silent': !![]
                        });
                        continue;
                    case '3':
                        _0x354e60['WpvRz'](expect, _0x28eaea)['to'][_0x446611(0x12f)][_0x446611(0x131)]['calledOnce'];
                        continue;
                    case '4':
                        _0x354e60[_0x446611(0x19c)](expect, _0x2a7f52)['to'][_0x446611(0x12f)][_0x446611(0x131)][_0x446611(0x13c)](_0x4f8f59[_0x446611(0x115)]['service']['provider'][_0x446611(0x18d)]);
                        continue;
                    case '5':
                        _0x354e60[_0x446611(0x19c)](expect, _0x4f8f59[_0x446611(0x115)][_0x446611(0x113)][_0x446611(0x133)][_0x446611(0x134)])['to'][_0x446611(0x135)](undefined);
                        continue;
                    case '6':
                        expect(_0x28eaea)['to'][_0x446611(0x12f)]['been'][_0x446611(0x18a)](path[_0x446611(0x18b)](_0x4f8f59[_0x446611(0x115)]['serviceDir'], '.serverless/my-service.zip'));
                        continue;
                    case '7':
                        _0x354e60[_0x446611(0x19d)](expect, _0x2a7f52)['to'][_0x446611(0x12f)]['been'][_0x446611(0x18e)];
                        continue;
                    }
                    break;
                }
            });
        }), it(_0x2235ab[_0x372822(0x19e)], () => {
            const _0x226bc8 = _0x372822;
            _0x3716a7[_0x226bc8(0x182)]([
                _0x4b497a[_0x226bc8(0x19f)],
                _0x4b497a['hFqZw']
            ]), _0xed8731['createHash']()[_0x226bc8(0x184)]()[_0x226bc8(0x191)][_0x226bc8(0x185)](0xade + 0xca9 + -0x1787)[_0x226bc8(0x182)](_0x226bc8(0xf6)), _0xed8731[_0x226bc8(0x183)]()[_0x226bc8(0x184)]()[_0x226bc8(0x191)][_0x226bc8(0x185)](-0x201a + 0x127 + -0x46c * -0x7)[_0x226bc8(0x182)](_0x4b497a[_0x226bc8(0x1a0)]), _0xed8731[_0x226bc8(0x183)]()[_0x226bc8(0x184)]()[_0x226bc8(0x191)][_0x226bc8(0x185)](0x3 * -0xb45 + 0xbdc + 0xb * 0x1ff)[_0x226bc8(0x182)](_0x4b497a[_0x226bc8(0x1a0)]);
            const _0x5e8960 = [
                { 'Metadata': { 'filesha256': _0x4b497a[_0x226bc8(0x1a1)] } },
                { 'Metadata': { 'filesha256': _0x226bc8(0xf8) } }
            ];
            return _0x4b497a[_0x226bc8(0x1a2)](expect, _0x4f8f59[_0x226bc8(0xe8)](_0x5e8960))['to']['be'][_0x226bc8(0x152)][_0x226bc8(0x12d)](() => {
                const _0x55fdfe = _0x226bc8, _0x4d5d98 = _0x4b497a[_0x55fdfe(0x1a3)][_0x55fdfe(0x124)]('|');
                let _0x747c67 = 0xc7b + 0x709 * 0x5 + -0x2fa8;
                while (!![]) {
                    switch (_0x4d5d98[_0x747c67++]) {
                    case '0':
                        expect(_0x4f8f59[_0x55fdfe(0x115)]['service'][_0x55fdfe(0x133)][_0x55fdfe(0x134)])['to'][_0x55fdfe(0x135)](undefined);
                        continue;
                    case '1':
                        _0x4b497a[_0x55fdfe(0x1a4)](expect, _0x4f8f59['serverless'][_0x55fdfe(0x17c)]['log'])['to'][_0x55fdfe(0x12e)]['have'][_0x55fdfe(0x131)]['called'];
                        continue;
                    case '2':
                        _0x4b497a['HHKIS'](expect, _0x28eaea)['to'][_0x55fdfe(0x12f)][_0x55fdfe(0x131)][_0x55fdfe(0x18a)](path[_0x55fdfe(0x18b)](_0x4f8f59[_0x55fdfe(0x115)]['serviceDir'], '.serverless/func1.zip'));
                        continue;
                    case '3':
                        _0x4b497a[_0x55fdfe(0x1a5)](expect, _0x2a7f52)['to']['have'][_0x55fdfe(0x131)][_0x55fdfe(0x13c)](_0x4f8f59['serverless'][_0x55fdfe(0x113)][_0x55fdfe(0x133)]['compiledCloudFormationTemplate']);
                        continue;
                    case '4':
                        _0x4b497a[_0x55fdfe(0x1a6)](expect, _0x3716a7)['to']['have']['been'][_0x55fdfe(0x18e)];
                        continue;
                    case '5':
                        _0x4b497a[_0x55fdfe(0x1a7)](expect, _0x28eaea)['to'][_0x55fdfe(0x12f)][_0x55fdfe(0x131)][_0x55fdfe(0x18a)](path['resolve'](_0x4f8f59['serverless']['serviceDir'], _0x4b497a['MSPIS']));
                        continue;
                    case '6':
                        _0x4b497a['ilggd'](expect, _0x2a7f52)['to'][_0x55fdfe(0x12f)][_0x55fdfe(0x131)][_0x55fdfe(0x18e)];
                        continue;
                    case '7':
                        _0x4b497a[_0x55fdfe(0x1a8)](expect, _0x3716a7)['to'][_0x55fdfe(0x12f)][_0x55fdfe(0x131)]['calledWithExactly']([_0x4b497a[_0x55fdfe(0x18f)]], {
                            'cwd': path[_0x55fdfe(0x145)](_0x4f8f59[_0x55fdfe(0x115)][_0x55fdfe(0x110)], '.serverless'),
                            'dot': !![],
                            'silent': !![]
                        });
                        continue;
                    case '8':
                        expect(_0x28eaea)['to'][_0x55fdfe(0x12f)][_0x55fdfe(0x131)][_0x55fdfe(0x1a9)];
                        continue;
                    }
                    break;
                }
            });
        }), it(_0x2235ab[_0x372822(0x1aa)], () => {
            const _0x1ba501 = _0x372822, _0x39a98a = {
                    'jcOuK': _0x1ba501(0xff),
                    'QZbZp': _0x4b497a[_0x1ba501(0x1ab)],
                    'erFUZ': function (_0x516e03, _0x33f155) {
                        const _0x244b65 = _0x1ba501;
                        return _0x4b497a[_0x244b65(0x1ac)](_0x516e03, _0x33f155);
                    },
                    'CZAVh': function (_0x5ba4c5, _0x477137) {
                        return _0x4b497a['cWXlD'](_0x5ba4c5, _0x477137);
                    },
                    'ejabL': function (_0x190b00, _0x5b1d4d) {
                        const _0x2ebc89 = _0x1ba501;
                        return _0x4b497a[_0x2ebc89(0x1ad)](_0x190b00, _0x5b1d4d);
                    },
                    'ByTfz': function (_0x48668f, _0x1d987d) {
                        return _0x4b497a['GsYvv'](_0x48668f, _0x1d987d);
                    }
                };
            _0x3716a7['returns']([_0x4b497a[_0x1ba501(0x1ae)]]), _0xed8731[_0x1ba501(0x183)]()[_0x1ba501(0x184)]()[_0x1ba501(0x191)][_0x1ba501(0x185)](0x12f5 * 0x1 + 0xad4 + 0x7d * -0x3d)[_0x1ba501(0x182)](_0x4b497a['HbwgU']), _0xed8731[_0x1ba501(0x183)]()[_0x1ba501(0x184)]()[_0x1ba501(0x191)][_0x1ba501(0x185)](-0x740 + -0x2284 + 0x25 * 0x121)['returns'](_0x4b497a['MbjsJ']);
            const _0x5a1908 = new Date(), _0x1e3321 = new Date(_0x4b497a[_0x1ba501(0x1af)](new Date()[_0x1ba501(0x1b0)](), 0x2cb8c + -0x126fe + 0x1dee * -0x1)), _0x37e559 = new Date(_0x4b497a[_0x1ba501(0x1b1)](new Date()[_0x1ba501(0x1b0)](), 0x2c552 + 0x28c25 * -0x1 + 0x14d73 * 0x1)), _0x28bd47 = [
                    {
                        'Metadata': { 'filesha256': _0x4b497a['HbwgU'] },
                        'LastModified': _0x1e3321
                    },
                    {
                        'Metadata': { 'filesha256': _0x4b497a[_0x1ba501(0x1b2)] },
                        'LastModified': _0x37e559
                    }
                ];
            return _0x4b497a[_0x1ba501(0x1b3)](expect, _0x4f8f59[_0x1ba501(0xe8)](_0x28bd47, _0x5a1908))['to']['be'][_0x1ba501(0x152)]['then'](() => {
                const _0x273e47 = _0x1ba501, _0x36bf98 = '6|3|0|2|5|1|7|4'['split']('|');
                let _0x2bb5c0 = -0x1443 + 0x6 * 0x3 + -0x6bb * -0x3;
                while (!![]) {
                    switch (_0x36bf98[_0x2bb5c0++]) {
                    case '0':
                        expect(_0x28eaea)['to'][_0x273e47(0x12f)][_0x273e47(0x131)][_0x273e47(0x18e)];
                        continue;
                    case '1':
                        expect(_0x3716a7)['to']['have'][_0x273e47(0x131)]['calledWithExactly']([_0x39a98a[_0x273e47(0x1b4)]], {
                            'cwd': path[_0x273e47(0x145)](_0x4f8f59[_0x273e47(0x115)][_0x273e47(0x110)], _0x39a98a[_0x273e47(0x1b5)]),
                            'dot': !![],
                            'silent': !![]
                        });
                        continue;
                    case '2':
                        expect(_0x4f8f59[_0x273e47(0x115)][_0x273e47(0x17c)][_0x273e47(0x17d)])['to']['not'][_0x273e47(0x12f)][_0x273e47(0x131)][_0x273e47(0x130)];
                        continue;
                    case '3':
                        _0x39a98a[_0x273e47(0x1b6)](expect, _0x3716a7)['to'][_0x273e47(0x12f)][_0x273e47(0x131)][_0x273e47(0x18e)];
                        continue;
                    case '4':
                        _0x39a98a['erFUZ'](expect, _0x4f8f59[_0x273e47(0x115)][_0x273e47(0x113)][_0x273e47(0x133)][_0x273e47(0x134)])['to'][_0x273e47(0x135)](undefined);
                        continue;
                    case '5':
                        _0x39a98a[_0x273e47(0x1b7)](expect, _0x2a7f52)['to'][_0x273e47(0x12f)][_0x273e47(0x131)][_0x273e47(0x13c)](_0x4f8f59[_0x273e47(0x115)]['service']['provider']['compiledCloudFormationTemplate']);
                        continue;
                    case '6':
                        _0x39a98a['ejabL'](expect, _0x2a7f52)['to'][_0x273e47(0x12f)][_0x273e47(0x131)][_0x273e47(0x18e)];
                        continue;
                    case '7':
                        _0x39a98a['ByTfz'](expect, _0x28eaea)['to'][_0x273e47(0x12f)][_0x273e47(0x131)][_0x273e47(0x18a)](path[_0x273e47(0x18b)](_0x4f8f59[_0x273e47(0x115)][_0x273e47(0x110)], _0x273e47(0xfb)));
                        continue;
                    }
                    break;
                }
            });
        }), _0x2235ab[_0x372822(0x11c)](it, _0x2235ab[_0x372822(0x1b8)], () => {
            const _0x5e8e6 = _0x372822, _0x709db = {
                    'vwhSS': function (_0x5c0bb2, _0x448944) {
                        return _0x5c0bb2(_0x448944);
                    },
                    'Skcwb': function (_0x54f280, _0x5dd432) {
                        return _0x54f280(_0x5dd432);
                    },
                    'ccrfk': function (_0x496371, _0x50d7c4) {
                        const _0x2be299 = _0x1886;
                        return _0x4b497a[_0x2be299(0x1b9)](_0x496371, _0x50d7c4);
                    },
                    'PUDKI': function (_0x44a83a, _0x3e4a58) {
                        return _0x4b497a['BKQSF'](_0x44a83a, _0x3e4a58);
                    },
                    'FkHYw': _0x4b497a[_0x5e8e6(0x18f)]
                };
            _0x3716a7[_0x5e8e6(0x182)](['my-service.zip']), _0xed8731[_0x5e8e6(0x183)]()[_0x5e8e6(0x184)]()[_0x5e8e6(0x191)]['onCall'](0x130f + -0x1b23 + 0x814)[_0x5e8e6(0x182)](_0x4b497a[_0x5e8e6(0x1ba)]), _0xed8731['createHash']()[_0x5e8e6(0x184)]()[_0x5e8e6(0x191)]['onCall'](-0x1d60 + -0x47 * -0x6f + 0x2d * -0x8)['returns'](_0x5e8e6(0xfd));
            const _0x3f6a72 = [
                { 'Metadata': { 'filesha256': _0x4b497a[_0x5e8e6(0x1ba)] } },
                { 'Metadata': { 'filesha256': _0x4b497a['MbjsJ'] } }
            ];
            return _0x4b497a[_0x5e8e6(0x1bb)](expect, _0x4f8f59['checkIfDeploymentIsNecessary'](_0x3f6a72))['to']['be'][_0x5e8e6(0x152)][_0x5e8e6(0x12d)](() => {
                const _0x4f3e54 = _0x5e8e6;
                _0x709db[_0x4f3e54(0x1bc)](expect, _0x2a7f52)['to'][_0x4f3e54(0x12f)][_0x4f3e54(0x131)][_0x4f3e54(0x18e)], _0x709db['Skcwb'](expect, _0x3716a7)['to'][_0x4f3e54(0x12f)][_0x4f3e54(0x131)]['calledOnce'], expect(_0x28eaea)['to'][_0x4f3e54(0x12f)][_0x4f3e54(0x131)][_0x4f3e54(0x18e)], expect(_0x4f8f59[_0x4f3e54(0x115)][_0x4f3e54(0x17c)]['log'])['to'][_0x4f3e54(0x12f)][_0x4f3e54(0x131)][_0x4f3e54(0x18e)], _0x709db[_0x4f3e54(0x1bd)](expect, _0x2a7f52)['to'][_0x4f3e54(0x12f)][_0x4f3e54(0x131)][_0x4f3e54(0x13c)](_0x4f8f59[_0x4f3e54(0x115)][_0x4f3e54(0x113)]['provider'][_0x4f3e54(0x18d)]), _0x709db[_0x4f3e54(0x1be)](expect, _0x3716a7)['to'][_0x4f3e54(0x12f)][_0x4f3e54(0x131)][_0x4f3e54(0x13c)]([_0x709db[_0x4f3e54(0x1bf)]], {
                    'cwd': path[_0x4f3e54(0x145)](_0x4f8f59[_0x4f3e54(0x115)][_0x4f3e54(0x110)], _0x4f3e54(0xf9)),
                    'dot': !![],
                    'silent': !![]
                }), _0x709db[_0x4f3e54(0x1be)](expect, _0x28eaea)['to']['have'][_0x4f3e54(0x131)][_0x4f3e54(0x18a)](path['resolve'](_0x4f8f59[_0x4f3e54(0x115)]['serviceDir'], _0x4f3e54(0xfb))), _0x709db[_0x4f3e54(0x1be)](expect, _0x4f8f59[_0x4f3e54(0x115)]['service'][_0x4f3e54(0x133)]['shouldNotDeploy'])['to']['equal'](!![]);
            });
        }), _0x2235ab[_0x372822(0x11c)](it, _0x2235ab[_0x372822(0x1c0)], () => {
            const _0x43f996 = _0x372822, _0x5ac66a = {
                    'HFmfy': _0x2235ab[_0x43f996(0x1c1)],
                    'Eermr': function (_0x5a7b68, _0x5e78b4) {
                        const _0x1052f0 = _0x43f996;
                        return _0x2235ab[_0x1052f0(0x198)](_0x5a7b68, _0x5e78b4);
                    },
                    'BipTQ': _0x2235ab['wzRZH'],
                    'KsiyJ': function (_0x5539d0, _0x26937a) {
                        const _0x572bbd = _0x43f996;
                        return _0x2235ab[_0x572bbd(0x1c2)](_0x5539d0, _0x26937a);
                    },
                    'xoQrh': _0x2235ab[_0x43f996(0x165)]
                };
            _0x3716a7[_0x43f996(0x182)]([_0x43f996(0xf4)]), _0xed8731[_0x43f996(0x183)]()[_0x43f996(0x184)]()['digest'][_0x43f996(0x185)](0x1e7 * 0x7 + -0x488 * 0x1 + 0x8c9 * -0x1)[_0x43f996(0x182)](_0x2235ab[_0x43f996(0x174)]), _0xed8731['createHash']()[_0x43f996(0x184)]()[_0x43f996(0x191)][_0x43f996(0x185)](0x1d1a + 0x15ef + -0x3308)[_0x43f996(0x182)](_0x2235ab[_0x43f996(0x1c3)]);
            const _0x301aca = new Date(_0x2235ab[_0x43f996(0x1c4)](new Date()[_0x43f996(0x1b0)](), -0x23015 + -0x2f369 + -0x2 * -0x3550f)), _0x497ebc = new Date(_0x2235ab[_0x43f996(0x1c5)](new Date()['getTime'](), -0x61920 + 0x610eb + -0x913 * -0x57)), _0x10bb0f = [
                    {
                        'Metadata': { 'filesha256': _0x2235ab['Auszg'] },
                        'LastModified': _0x497ebc
                    },
                    {
                        'Metadata': { 'filesha256': _0x2235ab[_0x43f996(0x1c3)] },
                        'LastModified': _0x497ebc
                    }
                ];
            return expect(_0x4f8f59['checkIfDeploymentIsNecessary'](_0x10bb0f, _0x301aca))['to']['be'][_0x43f996(0x152)][_0x43f996(0x12d)](() => {
                const _0x5b27a8 = _0x43f996, _0x28fff4 = _0x5ac66a[_0x5b27a8(0x1c6)][_0x5b27a8(0x124)]('|');
                let _0x416983 = -0x13c9 * -0x1 + -0x2314 + 0xf4b;
                while (!![]) {
                    switch (_0x28fff4[_0x416983++]) {
                    case '0':
                        _0x5ac66a[_0x5b27a8(0x1c7)](expect, _0x28eaea)['to'][_0x5b27a8(0x12f)][_0x5b27a8(0x131)][_0x5b27a8(0x18e)];
                        continue;
                    case '1':
                        expect(_0x4f8f59['serverless'][_0x5b27a8(0x17c)][_0x5b27a8(0x17d)])['to']['have'][_0x5b27a8(0x131)][_0x5b27a8(0x18e)];
                        continue;
                    case '2':
                        _0x5ac66a['Eermr'](expect, _0x28eaea)['to']['have'][_0x5b27a8(0x131)][_0x5b27a8(0x18a)](path[_0x5b27a8(0x18b)](_0x4f8f59[_0x5b27a8(0x115)]['serviceDir'], _0x5ac66a[_0x5b27a8(0x1c8)]));
                        continue;
                    case '3':
                        _0x5ac66a[_0x5b27a8(0x1c9)](expect, _0x3716a7)['to'][_0x5b27a8(0x12f)][_0x5b27a8(0x131)][_0x5b27a8(0x13c)]([_0x5b27a8(0xff)], {
                            'cwd': path[_0x5b27a8(0x145)](_0x4f8f59['serverless'][_0x5b27a8(0x110)], _0x5ac66a[_0x5b27a8(0x1ca)]),
                            'dot': !![],
                            'silent': !![]
                        });
                        continue;
                    case '4':
                        _0x5ac66a[_0x5b27a8(0x1c9)](expect, _0x4f8f59[_0x5b27a8(0x115)][_0x5b27a8(0x113)][_0x5b27a8(0x133)][_0x5b27a8(0x134)])['to'][_0x5b27a8(0x135)](!![]);
                        continue;
                    case '5':
                        expect(_0x2a7f52)['to'][_0x5b27a8(0x12f)][_0x5b27a8(0x131)][_0x5b27a8(0x13c)](_0x4f8f59[_0x5b27a8(0x115)][_0x5b27a8(0x113)][_0x5b27a8(0x133)][_0x5b27a8(0x18d)]);
                        continue;
                    case '6':
                        _0x5ac66a[_0x5b27a8(0x1c9)](expect, _0x3716a7)['to']['have'][_0x5b27a8(0x131)][_0x5b27a8(0x18e)];
                        continue;
                    case '7':
                        _0x5ac66a[_0x5b27a8(0x1c9)](expect, _0x2a7f52)['to']['have']['been']['calledOnce'];
                        continue;
                    }
                    break;
                }
            });
        }), _0x2235ab[_0x372822(0x11c)](it, _0x2235ab[_0x372822(0x1cb)], () => {
            const _0x463c75 = _0x372822;
            _0x3716a7[_0x463c75(0x182)]([
                _0x4b497a[_0x463c75(0x19f)],
                _0x4b497a[_0x463c75(0x1cc)]
            ]), _0xed8731[_0x463c75(0x183)]()[_0x463c75(0x184)]()[_0x463c75(0x191)][_0x463c75(0x185)](-0x1aca + -0x13 * 0x8b + 0x1 * 0x251b)[_0x463c75(0x182)](_0x4b497a[_0x463c75(0x1ba)]), _0xed8731[_0x463c75(0x183)]()[_0x463c75(0x184)]()[_0x463c75(0x191)]['onCall'](0xe9 * -0x8 + -0x947 + 0x1090)[_0x463c75(0x182)](_0x4b497a[_0x463c75(0x1b2)]), _0xed8731[_0x463c75(0x183)]()[_0x463c75(0x184)]()['digest'][_0x463c75(0x185)](-0x1 * 0x2250 + 0xd1 * -0x1d + 0x39ff)[_0x463c75(0x182)](_0x4b497a[_0x463c75(0x1b2)]);
            const _0x3b6b34 = [
                { 'Metadata': { 'filesha256': _0x463c75(0xfc) } },
                { 'Metadata': { 'filesha256': _0x4b497a['MbjsJ'] } },
                { 'Metadata': { 'filesha256': 'hash-zip-file-1' } }
            ];
            return expect(_0x4f8f59['checkIfDeploymentIsNecessary'](_0x3b6b34))['to']['be'][_0x463c75(0x152)][_0x463c75(0x12d)](() => {
                const _0xa0d3df = _0x463c75;
                _0x4b497a[_0xa0d3df(0x1bb)](expect, _0x2a7f52)['to'][_0xa0d3df(0x12f)]['been'][_0xa0d3df(0x18e)], _0x4b497a[_0xa0d3df(0x1bb)](expect, _0x3716a7)['to']['have']['been']['calledOnce'], _0x4b497a[_0xa0d3df(0x1bb)](expect, _0x28eaea)['to'][_0xa0d3df(0x12f)][_0xa0d3df(0x131)]['calledTwice'], _0x4b497a[_0xa0d3df(0x1cd)](expect, _0x4f8f59[_0xa0d3df(0x115)][_0xa0d3df(0x17c)][_0xa0d3df(0x17d)])['to'][_0xa0d3df(0x12f)][_0xa0d3df(0x131)][_0xa0d3df(0x18e)], _0x4b497a['PQkJc'](expect, _0x2a7f52)['to']['have'][_0xa0d3df(0x131)][_0xa0d3df(0x13c)](_0x4f8f59[_0xa0d3df(0x115)]['service'][_0xa0d3df(0x133)][_0xa0d3df(0x18d)]), _0x4b497a[_0xa0d3df(0x1cd)](expect, _0x3716a7)['to'][_0xa0d3df(0x12f)][_0xa0d3df(0x131)][_0xa0d3df(0x13c)]([_0x4b497a[_0xa0d3df(0x18f)]], {
                    'cwd': path[_0xa0d3df(0x145)](_0x4f8f59['serverless'][_0xa0d3df(0x110)], '.serverless'),
                    'dot': !![],
                    'silent': !![]
                }), expect(_0x28eaea)['to'][_0xa0d3df(0x12f)]['been'][_0xa0d3df(0x18a)](path[_0xa0d3df(0x18b)](_0x4f8f59[_0xa0d3df(0x115)][_0xa0d3df(0x110)], '.serverless/func1.zip')), _0x4b497a[_0xa0d3df(0x1cd)](expect, _0x28eaea)['to'][_0xa0d3df(0x12f)][_0xa0d3df(0x131)][_0xa0d3df(0x18a)](path[_0xa0d3df(0x18b)](_0x4f8f59[_0xa0d3df(0x115)][_0xa0d3df(0x110)], _0x4b497a[_0xa0d3df(0x1ce)])), _0x4b497a['IVPfA'](expect, _0x4f8f59[_0xa0d3df(0x115)]['service'][_0xa0d3df(0x133)]['shouldNotDeploy'])['to'][_0xa0d3df(0x135)](!![]);
            });
        }), it(_0x2235ab['ebavH'], () => {
            const _0x3e329c = _0x372822, _0x1bb72e = {
                    'jULlc': function (_0x79847d, _0xab7110) {
                        return _0x79847d(_0xab7110);
                    },
                    'BwpDw': _0x2235ab[_0x3e329c(0x1cf)],
                    'wmGaF': _0x2235ab[_0x3e329c(0x164)],
                    'eKXbG': _0x2235ab[_0x3e329c(0x165)],
                    'GckZj': function (_0x17e953, _0xaa31b6) {
                        const _0x5707ad = _0x3e329c;
                        return _0x2235ab[_0x5707ad(0x1d0)](_0x17e953, _0xaa31b6);
                    }
                };
            _0x4f8f59[_0x3e329c(0x115)][_0x3e329c(0x113)]['package'] = { 'artifact': _0x2235ab[_0x3e329c(0x1cf)] }, _0x3716a7['returns']([]), _0xed8731[_0x3e329c(0x183)]()[_0x3e329c(0x184)]()[_0x3e329c(0x191)][_0x3e329c(0x185)](-0xc97 * 0x1 + 0xd42 + -0xab)['returns'](_0x2235ab[_0x3e329c(0x174)]), _0xed8731[_0x3e329c(0x183)]()[_0x3e329c(0x184)]()[_0x3e329c(0x191)][_0x3e329c(0x185)](-0x479 * 0x4 + -0xd0 * 0x10 + 0x1ee5)[_0x3e329c(0x182)](_0x2235ab[_0x3e329c(0x1d1)]);
            const _0x5a0c26 = [
                { 'Metadata': { 'filesha256': _0x2235ab[_0x3e329c(0x174)] } },
                { 'Metadata': { 'filesha256': _0x2235ab[_0x3e329c(0x1d2)] } }
            ];
            return _0x2235ab[_0x3e329c(0x1d3)](expect, _0x4f8f59[_0x3e329c(0xe8)](_0x5a0c26))['to']['be'][_0x3e329c(0x152)][_0x3e329c(0x12d)](() => {
                const _0x3b80b8 = _0x3e329c, _0x199d50 = _0x3b80b8(0x1d4)[_0x3b80b8(0x124)]('|');
                let _0x442e24 = -0x2 * 0x11fb + -0x33 * -0xa2 + 0x3b0;
                while (!![]) {
                    switch (_0x199d50[_0x442e24++]) {
                    case '0':
                        _0x1bb72e[_0x3b80b8(0x1d5)](expect, _0x28eaea)['to'][_0x3b80b8(0x12f)][_0x3b80b8(0x131)][_0x3b80b8(0x18e)];
                        continue;
                    case '1':
                        _0x1bb72e['jULlc'](expect, _0x28eaea)['to']['have'][_0x3b80b8(0x131)][_0x3b80b8(0x18a)](path[_0x3b80b8(0x18b)](_0x4f8f59[_0x3b80b8(0x115)]['serviceDir'], _0x1bb72e[_0x3b80b8(0x1d6)]));
                        continue;
                    case '2':
                        expect(_0x4f8f59[_0x3b80b8(0x115)]['cli'][_0x3b80b8(0x17d)])[_0x3b80b8(0x12e)]['to']['be'][_0x3b80b8(0x130)];
                        continue;
                    case '3':
                        _0x1bb72e[_0x3b80b8(0x1d5)](expect, _0x4f8f59[_0x3b80b8(0x115)][_0x3b80b8(0x113)][_0x3b80b8(0x133)][_0x3b80b8(0x134)])['to'][_0x3b80b8(0x135)](undefined);
                        continue;
                    case '4':
                        _0x1bb72e[_0x3b80b8(0x1d5)](expect, _0x3716a7)['to'][_0x3b80b8(0x12f)]['been'][_0x3b80b8(0x18e)];
                        continue;
                    case '5':
                        _0x1bb72e[_0x3b80b8(0x1d5)](expect, _0x3716a7)['to'][_0x3b80b8(0x12f)][_0x3b80b8(0x131)][_0x3b80b8(0x13c)]([_0x1bb72e[_0x3b80b8(0x1d7)]], {
                            'cwd': path[_0x3b80b8(0x145)](_0x4f8f59['serverless'][_0x3b80b8(0x110)], _0x1bb72e['eKXbG']),
                            'dot': !![],
                            'silent': !![]
                        });
                        continue;
                    case '6':
                        _0x1bb72e[_0x3b80b8(0x1d8)](expect, _0x2a7f52)['to']['have']['been'][_0x3b80b8(0x18e)];
                        continue;
                    case '7':
                        _0x1bb72e[_0x3b80b8(0x1d8)](expect, _0x2a7f52)['to']['have'][_0x3b80b8(0x131)][_0x3b80b8(0x13c)](_0x4f8f59[_0x3b80b8(0x115)][_0x3b80b8(0x113)][_0x3b80b8(0x133)][_0x3b80b8(0x18d)]);
                        continue;
                    }
                    break;
                }
            });
        });
    });
}), describe(_0x6075f0(0x1d9), () => {
    const _0xc15772 = _0x6075f0, _0x56cc20 = {
            'ULrlA': function (_0x37092a, _0x53af7b, _0x20fffe) {
                return _0x37092a(_0x53af7b, _0x20fffe);
            },
            'ciBGc': _0xc15772(0x1da)
        };
    _0x56cc20[_0xc15772(0x1db)](it, _0x56cc20[_0xc15772(0x1dc)], () => runServerless({
        'fixture': _0xc15772(0x1dd),
        'command': 'deploy',
        'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0xc15772(0x1de) },
        'lastLifecycleHookName': _0xc15772(0x1df),
        'awsRequestStubMap': {
            'CloudFormation': {
                'describeStacks': {},
                'describeStackResource': { 'StackResourceDetail': { 'PhysicalResourceId': 'deployment-bucket' } }
            },
            'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0xc15772(0x1e0) } } },
            'S3': {
                'headObject': { 'Metadata': { 'filesha256': _0xc15772(0x1e1) } },
                'listObjectsV2': {
                    'Contents': [{
                            'Key': _0xc15772(0x1e2),
                            'LastModified': new Date(),
                            'ETag': _0xc15772(0x1e3),
                            'Size': 0x164,
                            'StorageClass': _0xc15772(0x1e4)
                        }]
                }
            },
            'STS': {
                'getCallerIdentity': {
                    'ResponseMetadata': { 'RequestId': 'ffffffff-ffff-ffff-ffff-ffffffffffff' },
                    'UserId': _0xc15772(0x1e5),
                    'Account': _0xc15772(0x1e6),
                    'Arn': 'arn:aws:iam::999999999999:user/test'
                }
            }
        }
    })['then'](({cfTemplate: _0x52fd47}) => {
        const _0x144ab9 = _0xc15772;
        expect(_0x52fd47[_0x144ab9(0x1e7)]['FooLambdaFunction'][_0x144ab9(0x1e8)][_0x144ab9(0x1e9)][_0x144ab9(0x1ea)]['endsWith']('/artifact.zip'))['to']['be'][_0x144ab9(0x1eb)];
    }));
});
const commonAwsSdkMock = {
        'CloudFormation': {
            'describeStacks': {},
            'describeStackResource': { 'StackResourceDetail': { 'PhysicalResourceId': _0x6075f0(0xe5) } }
        },
        'STS': {
            'getCallerIdentity': {
                'ResponseMetadata': { 'RequestId': _0x6075f0(0x1ec) },
                'UserId': 'XXXXXXXXXXXXXXXXXXXXX',
                'Account': _0x6075f0(0x1e6),
                'Arn': _0x6075f0(0x1ed)
            }
        }
    }, generateMatchingListObjectsResponse = async _0x4405a4 => {
        const _0x19e01b = _0x6075f0, _0xa9a2b6 = {
                'OMVUj': function (_0x506131, _0x415f37, _0x425274) {
                    return _0x506131(_0x415f37, _0x425274);
                },
                'GtSDN': _0x19e01b(0x1ee),
                'bIMOJ': _0x19e01b(0x1ef)
            }, _0x46e475 = _0x4405a4[_0x19e01b(0x110)] + '/.serverless', _0xc7cc5b = await _0xa9a2b6[_0x19e01b(0x1f0)](globby, _0x46e475, { 'expandDirectories': { 'extensions': [_0xa9a2b6['GtSDN']] } });
        return _0xc7cc5b[_0x19e01b(0x1f1)](_0xa9a2b6[_0x19e01b(0x1f2)]), {
            'Contents': _0xc7cc5b[_0x19e01b(0x1f3)](_0x5c7077 => ({
                'Key': _0x19e01b(0x1f4) + _0x5c7077,
                'LastModified': new Date(_0x19e01b(0x1f5))
            }))
        };
    }, generateMatchingHeadObjectResponse = async (_0x12f46e, {Key: _0x211795}) => {
        const _0x1a046e = _0x6075f0, _0x56709d = {
                'joCdl': _0x1a046e(0x1f6),
                'LbRor': _0x1a046e(0x1f7),
                'BsQEF': 'compiled-cloudformation-template.json',
                'zprAm': _0x1a046e(0x1f8)
            };
        if (path[_0x1a046e(0x1f9)](_0x211795) === _0x56709d['BsQEF']) {
            const _0x5cb38e = _0x12f46e[_0x1a046e(0x113)][_0x1a046e(0x133)]['compiledCloudFormationTemplate'], _0x55296e = normalizeFiles[_0x1a046e(0xf2)](_0x5cb38e), _0x33551e = crypto['createHash'](_0x1a046e(0x1f6))['update'](JSON[_0x1a046e(0x1fa)](_0x55296e))['digest'](_0x56709d['zprAm']);
            return { 'Metadata': { 'filesha256': _0x33551e } };
        }
        const _0x59d18c = await (async _0x151f12 => {
            return new Promise(_0x3c89b8 => {
                const _0x1e93ef = _0x1886, _0x312143 = crypto[_0x1e93ef(0x183)](_0x56709d[_0x1e93ef(0x1fb)]), _0x46293a = fs[_0x1e93ef(0x1fc)](_0x12f46e[_0x1e93ef(0x110)] + _0x1e93ef(0x1fd) + _0x151f12);
                _0x46293a['on']('data', _0x5c0e88 => _0x312143[_0x1e93ef(0x184)](_0x5c0e88)), _0x46293a['on'](_0x56709d['LbRor'], () => _0x3c89b8(_0x312143[_0x1e93ef(0x191)](_0x1e93ef(0x1f8))));
            });
        })(_0x211795);
        return { 'Metadata': { 'filesha256': _0x59d18c } };
    };
describe(_0x6075f0(0x1fe), () => {
    const _0x19fca3 = _0x6075f0, _0x3848eb = {
            'KNpRW': function (_0x14039b, _0x4cc351) {
                return _0x14039b(_0x4cc351);
            },
            'GgOtP': _0x19fca3(0x1ff),
            'hSBty': _0x19fca3(0x1de),
            'wEKwL': '2021-05-20T15:34:16.494+0000',
            'IyCwY': function (_0x5a8263, _0x62543) {
                return _0x5a8263(_0x62543);
            },
            'hkhyP': _0x19fca3(0x12c),
            'YCQAL': _0x19fca3(0x1df),
            'cEAAD': function (_0x8e78e2, _0x2c1f01) {
                return _0x8e78e2(_0x2c1f01);
            },
            'LDqfb': _0x19fca3(0x200),
            'LOhBV': function (_0x5b8354, _0x5eb631) {
                return _0x5b8354(_0x5eb631);
            },
            'HUTqX': function (_0x208573, _0x16e308) {
                return _0x208573(_0x16e308);
            },
            'ACNWR': function (_0x5bb052, _0x5bc024) {
                return _0x5bb052(_0x5bc024);
            },
            'CfGQi': function (_0x5ef1ae, _0x2a401c) {
                return _0x5ef1ae(_0x2a401c);
            },
            'KuDLn': _0x19fca3(0x201),
            'Zmgur': _0x19fca3(0xe5),
            'dmyUA': _0x19fca3(0x202),
            'IVpan': _0x19fca3(0x203),
            'reqXM': 'T0qEYHOE4Xv2E8Ar03xGogAlElcdf/dQh/lh9ao7Glo=',
            'ILwTg': _0x19fca3(0x204),
            'tcbGF': '2020-05-20T15:34:16.494+0000',
            'TJjfX': 'serverless/test-package-artifact/dev/1589988704359-2020-05-20T15:31:44.359Z/compiled-cloudformation-template.json',
            'UqTji': _0x19fca3(0x1e3),
            'zLgHS': 'STANDARD',
            'YasGT': _0x19fca3(0x205),
            'piDOs': _0x19fca3(0x206),
            'LsCEh': function (_0x559143, _0x3dc2b3) {
                return _0x559143(_0x3dc2b3);
            },
            'Qhuyb': _0x19fca3(0x207),
            'qzVlg': function (_0x31cb00, _0x1a9693) {
                return _0x31cb00(_0x1a9693);
            },
            'IrgjW': function (_0x47a38a, _0x399630) {
                return _0x47a38a(_0x399630);
            },
            'swJdE': function (_0x40a084, _0x5ebef8) {
                return _0x40a084(_0x5ebef8);
            },
            'gcUFv': _0x19fca3(0x208),
            'kLpkU': 'arn:aws:lambda:us-east-1:999999999999:function:test-checkForChanges-cdr3ogg-dev-fn1',
            'hzkAy': function (_0x220417, _0x359fa1) {
                return _0x220417(_0x359fa1);
            },
            'mLxlj': _0x19fca3(0x209),
            'ogWjB': _0x19fca3(0xe4),
            'pQMMZ': _0x19fca3(0x20a),
            'vlFhX': _0x19fca3(0x20b),
            'zlTXJ': function (_0x15415a, _0x5bb246) {
                return _0x15415a(_0x5bb246);
            },
            'FxjLr': function (_0xe2add3, _0x37959f) {
                return _0xe2add3(_0x37959f);
            },
            'joiUh': 'fn1',
            'LZRRZ': 'Fn2',
            'jxBUO': 'ffffffff-ffff-ffff-ffff-ffffffffffff',
            'zzlLL': '999999999999',
            'zLNvu': 'arn:aws-us-gov:iam::999999999999:user/test',
            'TuMlo': function (_0x72bcf9, _0x2530b8, _0x1bd57b) {
                return _0x72bcf9(_0x2530b8, _0x1bd57b);
            },
            'iyFpF': 'should\x20not\x20attempt\x20to\x20delete\x20and\x20add\x20filter\x20for\x20same\x20destination',
            'WslgD': function (_0x397cb2, _0x4d22c7, _0x1e9ea8) {
                return _0x397cb2(_0x4d22c7, _0x1e9ea8);
            },
            'bVSaA': _0x19fca3(0x20c),
            'WsfEu': function (_0x1d3d1f, _0xe12497, _0x4c31e9) {
                return _0x1d3d1f(_0xe12497, _0x4c31e9);
            },
            'IQJGl': _0x19fca3(0x20d),
            'EkPqI': function (_0x28c259, _0x17d028, _0x54805a) {
                return _0x28c259(_0x17d028, _0x54805a);
            },
            'tYboR': _0x19fca3(0x20e),
            'zXply': 'TODO:\x20should\x20deploy\x20when\x20deployment\x20bucket\x20is\x20empty\x20(first\x20deployment)',
            'UKIkn': _0x19fca3(0x20f),
            'YgPso': _0x19fca3(0x210),
            'vfRby': 'TODO:\x20should\x20deploy\x20if\x20remote\x20hashes\x20are\x20different',
            'yNrAw': _0x19fca3(0x211),
            'LppMh': _0x19fca3(0x212),
            'CnUkt': 'TODO:\x20should\x20deploy\x20if\x20custom\x20package.artifact\x20have\x20changed',
            'XVCVp': _0x19fca3(0x213),
            'ZRsvr': function (_0x2f65cb, _0x4edf90, _0x13b601) {
                return _0x2f65cb(_0x4edf90, _0x13b601);
            },
            'wSbuA': _0x19fca3(0x214),
            'QdVrq': _0x19fca3(0x215),
            'FvDon': _0x19fca3(0x216)
        };
    it[_0x19fca3(0x217)]('TODO:\x20should\x20not\x20deploy\x20if\x20artifacts\x20in\x20bucket\x20are\x20same\x20as\x20locally\x20and\x20modification\x20dates\x20for\x20all\x20functions\x20are\x20later\x20than\x20uploaded\x20artifacts\x20dates', async () => {
        const _0xcc3ff6 = _0x19fca3;
        let _0x181316;
        await _0x3848eb['KNpRW'](runServerless, {
            'fixture': _0xcc3ff6(0x12c),
            'command': _0x3848eb[_0xcc3ff6(0x218)],
            'lastLifecycleHookName': _0xcc3ff6(0x1df),
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x3848eb[_0xcc3ff6(0x219)] },
            'hooks': { 'beforeInstanceInit': _0x4331bd => _0x181316 = _0x4331bd },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x3848eb['wEKwL'] } } },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x181316),
                    'headObject': async _0x57d1cd => generateMatchingHeadObjectResponse(_0x181316, _0x57d1cd)
                }
            }
        }), expect(_0x181316[_0xcc3ff6(0x113)][_0xcc3ff6(0x133)][_0xcc3ff6(0x134)])['to']['equal'](!![]);
    }), it['skip'](_0x3848eb[_0x19fca3(0x21a)], async () => {
        const _0x3416f8 = _0x19fca3;
        let _0x177ec4;
        await _0x3848eb['IyCwY'](runServerless, {
            'fixture': _0x3848eb[_0x3416f8(0x21b)],
            'command': _0x3848eb[_0x3416f8(0x218)],
            'options': { 'force': !![] },
            'lastLifecycleHookName': _0x3848eb[_0x3416f8(0x21c)],
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x3848eb['hSBty'] },
            'hooks': { 'beforeInstanceInit': _0x5632a0 => _0x177ec4 = _0x5632a0 },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': '2021-05-20T15:34:16.494+0000' } } },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x177ec4),
                    'headObject': async _0x4e2fb7 => generateMatchingHeadObjectResponse(_0x177ec4, _0x4e2fb7)
                }
            }
        }), _0x3848eb[_0x3416f8(0x21d)](expect, _0x177ec4[_0x3416f8(0x113)][_0x3416f8(0x133)]['shouldNotDeploy'])['to'][_0x3416f8(0x135)](![]);
    }), it[_0x19fca3(0x217)](_0x3848eb[_0x19fca3(0x21e)], async () => {
        const _0x48f0b7 = _0x19fca3, {serverless: _0x37d613} = await _0x3848eb[_0x48f0b7(0x21d)](runServerless, {
                'fixture': _0x48f0b7(0x21f),
                'command': _0x48f0b7(0x1ff),
                'lastLifecycleHookName': _0x3848eb['YCQAL'],
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x48f0b7(0x1de) },
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
        expect(_0x37d613['service']['provider'][_0x48f0b7(0x134)])['to'][_0x48f0b7(0x135)](![]);
    }), it[_0x19fca3(0x217)](_0x3848eb['UKIkn'], async () => {
        const _0x3afd0d = _0x19fca3;
        let _0x372a7b;
        await _0x3848eb[_0x3afd0d(0x21d)](runServerless, {
            'fixture': _0x3848eb[_0x3afd0d(0x21b)],
            'command': _0x3afd0d(0x1ff),
            'lastLifecycleHookName': _0x3848eb[_0x3afd0d(0x21c)],
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x3afd0d(0x1de) },
            'hooks': { 'beforeInstanceInit': _0x1f3956 => _0x372a7b = _0x1f3956 },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x3848eb[_0x3afd0d(0x220)] } } },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x372a7b),
                    'headObject': async _0x5bee02 => generateMatchingHeadObjectResponse(_0x372a7b, _0x5bee02)
                }
            }
        }), expect(_0x372a7b[_0x3afd0d(0x113)][_0x3afd0d(0x133)]['shouldNotDeploy'])['to'][_0x3afd0d(0x135)](!![]);
    }), it['skip'](_0x3848eb[_0x19fca3(0x221)], async () => {
        const _0x3bc7ef = _0x19fca3;
        let _0x2aae81;
        await _0x3848eb[_0x3bc7ef(0x222)](runServerless, {
            'fixture': _0x3848eb[_0x3bc7ef(0x21b)],
            'command': _0x3848eb['GgOtP'],
            'lastLifecycleHookName': _0x3848eb[_0x3bc7ef(0x21c)],
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x3848eb['hSBty'] },
            'hooks': { 'beforeInstanceInit': _0x36d3cf => _0x2aae81 = _0x36d3cf },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': {
                    'getFunction': () => {
                    }
                },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x2aae81),
                    'headObject': async _0x2790a5 => generateMatchingHeadObjectResponse(_0x2aae81, _0x2790a5)
                }
            }
        }), expect(_0x2aae81[_0x3bc7ef(0x113)][_0x3bc7ef(0x133)][_0x3bc7ef(0x134)])['to'][_0x3bc7ef(0x135)](![]);
    }), it['skip'](_0x19fca3(0x223), async () => {
        const _0x278de7 = _0x19fca3, {
                fixtureData: {
                    updateConfig: _0x338cf0,
                    servicePath: _0x42623e
                }
            } = await runServerless({
                'fixture': _0x3848eb['hkhyP'],
                'command': _0x3848eb['LDqfb']
            }), _0x3ff174 = await _0x3848eb[_0x278de7(0x224)](generateMatchingListObjectsResponse, _0x3c3a01);
        await _0x3848eb['HUTqX'](_0x338cf0, { 'functions': { 'fnIndividually': null } });
        let _0x3c3a01;
        await runServerless({
            'cwd': _0x42623e,
            'command': _0x3848eb[_0x278de7(0x225)],
            'lastLifecycleHookName': _0x278de7(0x1df),
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x3848eb[_0x278de7(0x219)] },
            'hooks': { 'beforeInstanceInit': _0x511e66 => _0x3c3a01 = _0x511e66 },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': '2021-05-20T15:34:16.494+0000' } } },
                'S3': {
                    'listObjectsV2': () => _0x3ff174,
                    'headObject': async _0x206aee => generateMatchingHeadObjectResponse(_0x3c3a01, _0x206aee)
                }
            }
        }), _0x3848eb[_0x278de7(0x226)](expect, _0x3c3a01[_0x278de7(0x113)][_0x278de7(0x133)][_0x278de7(0x134)])['to'][_0x278de7(0x135)](![]);
    }), it[_0x19fca3(0x217)](_0x3848eb[_0x19fca3(0x227)], async () => {
        const _0x23c65c = _0x19fca3;
        let _0x9193a7;
        await runServerless({
            'fixture': _0x23c65c(0x12c),
            'command': _0x3848eb[_0x23c65c(0x218)],
            'lastLifecycleHookName': _0x3848eb[_0x23c65c(0x21c)],
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x3848eb[_0x23c65c(0x219)] },
            'hooks': { 'beforeInstanceInit': _0x21052b => _0x9193a7 = _0x21052b },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': '2021-05-20T15:34:16.494+0000' } } },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x9193a7),
                    'headObject': async _0x36b2b4 => generateMatchingHeadObjectResponse(_0x9193a7, _0x36b2b4)
                }
            }
        }), _0x3848eb[_0x23c65c(0x226)](expect, _0x9193a7[_0x23c65c(0x113)]['provider'][_0x23c65c(0x134)])['to'][_0x23c65c(0x135)](![]);
    }), it[_0x19fca3(0x217)](_0x3848eb['yNrAw'], async () => {
        const _0x347fc8 = _0x19fca3;
        let _0xbfd018;
        await runServerless({
            'fixture': _0x3848eb[_0x347fc8(0x21b)],
            'command': _0x3848eb['GgOtP'],
            'configExt': { 'package': { 'individually': !![] } },
            'lastLifecycleHookName': _0x3848eb[_0x347fc8(0x21c)],
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x3848eb[_0x347fc8(0x219)] },
            'hooks': { 'beforeInstanceInit': _0x2ffc16 => _0xbfd018 = _0x2ffc16 },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x3848eb['wEKwL'] } } },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0xbfd018),
                    'headObject': async _0x1bd2f1 => generateMatchingHeadObjectResponse(_0xbfd018, _0x1bd2f1)
                }
            }
        }), _0x3848eb['ACNWR'](expect, _0xbfd018[_0x347fc8(0x113)]['provider'][_0x347fc8(0x134)])['to'][_0x347fc8(0x135)](![]);
    }), it[_0x19fca3(0x217)](_0x3848eb[_0x19fca3(0x228)], async () => {
        const _0x217e87 = _0x19fca3;
        let _0x1bb243;
        await _0x3848eb[_0x217e87(0x229)](runServerless, {
            'fixture': _0x3848eb[_0x217e87(0x21b)],
            'command': _0x3848eb[_0x217e87(0x218)],
            'configExt': { 'package': { 'individually': !![] } },
            'lastLifecycleHookName': 'aws:deploy:deploy:checkForChanges',
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x3848eb['hSBty'] },
            'hooks': { 'beforeInstanceInit': _0x7b8bae => _0x1bb243 = _0x7b8bae },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': {
                    'getFunction': () => {
                    }
                },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x1bb243),
                    'headObject': async _0x14e8c9 => generateMatchingHeadObjectResponse(_0x1bb243, _0x14e8c9)
                }
            }
        }), expect(_0x1bb243[_0x217e87(0x113)]['provider'][_0x217e87(0x134)])['to']['equal'](![]);
    }), it[_0x19fca3(0x217)](_0x3848eb[_0x19fca3(0x22a)], async () => {
        const _0x354ad3 = _0x19fca3;
        let _0x5308d1;
        await _0x3848eb[_0x354ad3(0x229)](runServerless, {
            'fixture': _0x3848eb[_0x354ad3(0x21b)],
            'command': _0x3848eb[_0x354ad3(0x218)],
            'configExt': { 'package': { 'artifact': _0x3848eb[_0x354ad3(0x22b)] } },
            'lastLifecycleHookName': _0x3848eb[_0x354ad3(0x21c)],
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x3848eb[_0x354ad3(0x219)] },
            'hooks': { 'beforeInstanceInit': _0x1497e7 => _0x5308d1 = _0x1497e7 },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x3848eb[_0x354ad3(0x220)] } } },
                'S3': {
                    'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x5308d1),
                    'headObject': async _0xc1e5cd => generateMatchingHeadObjectResponse(_0x5308d1, _0xc1e5cd)
                }
            }
        }), _0x3848eb[_0x354ad3(0x229)](expect, _0x5308d1[_0x354ad3(0x113)][_0x354ad3(0x133)][_0x354ad3(0x134)])['to'][_0x354ad3(0x135)](![]);
    }), it(_0x3848eb['XVCVp'], async () => {
        const _0x42ca5a = _0x19fca3, {serverless: _0x3d14c5} = await runServerless({
                'fixture': _0x42ca5a(0x22c),
                'command': _0x3848eb[_0x42ca5a(0x218)],
                'configExt': { 'service': _0x3848eb['ILwTg'] },
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x3848eb[_0x42ca5a(0x219)] },
                'lastLifecycleHookName': _0x42ca5a(0x1df),
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x3848eb[_0x42ca5a(0x22d)] } } },
                    'S3': {
                        'headObject': (() => {
                            const _0x2e1792 = _0x42ca5a, _0x5ed6ce = sandbox[_0x2e1792(0x11a)]();
                            return _0x5ed6ce[_0x2e1792(0x22e)]({
                                'Bucket': _0x3848eb['Zmgur'],
                                'Key': _0x2e1792(0x22f)
                            })[_0x2e1792(0x182)]({ 'Metadata': { 'filesha256': _0x3848eb[_0x2e1792(0x230)] } }), _0x5ed6ce['withArgs']({
                                'Bucket': _0x3848eb[_0x2e1792(0x231)],
                                'Key': _0x3848eb[_0x2e1792(0x232)]
                            })['returns']({ 'Metadata': { 'filesha256': _0x3848eb[_0x2e1792(0x233)] } }), _0x5ed6ce;
                        })(),
                        'listObjectsV2': {
                            'Contents': [
                                {
                                    'Key': _0x3848eb[_0x42ca5a(0x234)],
                                    'LastModified': new Date(),
                                    'ETag': _0x3848eb[_0x42ca5a(0x235)],
                                    'Size': 0x164,
                                    'StorageClass': _0x3848eb[_0x42ca5a(0x236)]
                                },
                                {
                                    'Key': _0x42ca5a(0x203),
                                    'LastModified': new Date(),
                                    'ETag': _0x3848eb[_0x42ca5a(0x235)],
                                    'Size': 0x164,
                                    'StorageClass': _0x42ca5a(0x1e4)
                                }
                            ]
                        }
                    }
                }
            });
        _0x3848eb[_0x42ca5a(0x229)](expect, _0x3d14c5['service'][_0x42ca5a(0x133)][_0x42ca5a(0x134)])['to']['equal'](!![]);
    }), _0x3848eb['ZRsvr'](it, _0x3848eb[_0x19fca3(0x237)], async () => {
        const _0x3dee6d = _0x19fca3, {stdoutData: _0x314b5f} = await _0x3848eb[_0x3dee6d(0x229)](runServerless, {
                'fixture': _0x3848eb[_0x3dee6d(0x21b)],
                'command': _0x3848eb['GgOtP'],
                'lastLifecycleHookName': _0x3dee6d(0x1df),
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'Lambda': { 'getFunction': sandbox[_0x3dee6d(0x11a)]()[_0x3dee6d(0x238)]({ 'providerError': { 'statusCode': 0x193 } }) },
                    'S3': { 'listObjectsV2': {} }
                }
            });
        _0x3848eb['CfGQi'](expect, _0x314b5f)['to'][_0x3dee6d(0x239)]([
            _0x3848eb['YasGT'],
            _0x3848eb['piDOs']
        ][_0x3dee6d(0x145)](''));
    }), it[_0x19fca3(0x217)](_0x3848eb[_0x19fca3(0x23a)], () => {
        const _0x27dcd4 = _0x19fca3;
        return _0x3848eb[_0x27dcd4(0x23b)](expect, runServerless({
            'fixture': _0x3848eb[_0x27dcd4(0x21b)],
            'command': _0x3848eb['GgOtP'],
            'lastLifecycleHookName': _0x3848eb[_0x27dcd4(0x21c)],
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x3848eb[_0x27dcd4(0x219)] },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'S3': {
                    'listObjectsV2': async () => {
                    }
                }
            }
        }))['to'][_0x27dcd4(0x23c)]['be'][_0x27dcd4(0x23d)]['and'][_0x27dcd4(0x12f)]['property'](_0x3848eb['Qhuyb']);
    }), it[_0x19fca3(0x217)](_0x3848eb[_0x19fca3(0x23e)], () => {
        const _0x358357 = _0x19fca3;
        return _0x3848eb['qzVlg'](expect, _0x3848eb[_0x358357(0x23f)](runServerless, {
            'fixture': _0x3848eb[_0x358357(0x21b)],
            'command': _0x3848eb[_0x358357(0x218)],
            'lastLifecycleHookName': _0x3848eb['YCQAL'],
            'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x3848eb[_0x358357(0x219)] },
            'awsRequestStubMap': {
                ...commonAwsSdkMock,
                'S3': {
                    'listObjectsV2': async () => {
                    }
                }
            }
        }))['to'][_0x358357(0x23c)]['be'][_0x358357(0x23d)][_0x358357(0x240)]['have'][_0x358357(0x241)](_0x3848eb[_0x358357(0x242)]);
    }), _0x3848eb[_0x19fca3(0x243)](describe, 'checkLogGroupSubscriptionFilterResourceLimitExceeded', () => {
        const _0x25af34 = _0x19fca3, _0x163624 = {
                'iwVBa': _0x3848eb[_0x25af34(0x244)],
                'xTRxX': _0x3848eb[_0x25af34(0x245)],
                'yeDgL': _0x3848eb[_0x25af34(0x246)],
                'EiuDA': _0x3848eb[_0x25af34(0x247)],
                'lAyCv': _0x3848eb[_0x25af34(0x248)],
                'NdZpe': 'checkForChanges',
                'zmGdI': _0x3848eb[_0x25af34(0x249)],
                'eBici': _0x3848eb[_0x25af34(0x21c)],
                'kgKzR': _0x25af34(0x24a),
                'nLcVL': function (_0x440504, _0x5da682) {
                    return _0x440504(_0x5da682);
                },
                'uREKR': _0x3848eb[_0x25af34(0x218)],
                'bfdKg': _0x3848eb[_0x25af34(0x219)],
                'TtnfM': _0x3848eb['jxBUO'],
                'ttbMK': _0x25af34(0x1e5),
                'YBeOo': _0x3848eb['zzlLL'],
                'wXPum': _0x3848eb[_0x25af34(0x24b)]
            };
        _0x3848eb['TuMlo'](it, _0x3848eb[_0x25af34(0x24c)], async () => {
            const _0x4f693e = _0x25af34, _0x1cc1e5 = sandbox[_0x4f693e(0x11a)]();
            let _0x117679;
            await _0x3848eb['IrgjW'](runServerless, {
                'fixture': _0x3848eb[_0x4f693e(0x21b)],
                'command': _0x3848eb['GgOtP'],
                'configExt': { 'functions': { 'fn1': { 'events': [{ 'cloudwatchLog': _0x4f693e(0x209) }] } } },
                'lastLifecycleHookName': _0x3848eb['YCQAL'],
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x3848eb[_0x4f693e(0x219)] },
                'hooks': { 'beforeInstanceInit': _0x153dc5 => _0x117679 = _0x153dc5 },
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x3848eb[_0x4f693e(0x220)] } } },
                    'S3': {
                        'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x117679),
                        'headObject': async _0x23c525 => generateMatchingHeadObjectResponse(_0x117679, _0x23c525)
                    },
                    'CloudWatchLogs': {
                        'deleteSubscriptionFilter': _0x1cc1e5,
                        'describeSubscriptionFilters': async () => {
                            const _0x4632af = _0x4f693e, _0x5e9bf3 = _0x117679[_0x4632af(0x113)]['getFunction'](_0x163624['iwVBa'])[_0x4632af(0x24d)], _0x1e4c5b = _0x117679['getProvider'](_0x163624[_0x4632af(0x24e)])[_0x4632af(0x24f)];
                            return {
                                'subscriptionFilters': [
                                    {
                                        'filterName': _0x1e4c5b[_0x4632af(0x250)]() + '-' + _0x1e4c5b[_0x4632af(0x251)](_0x163624['yeDgL'], -0xc0 + -0x1d9d + -0x12b * -0x1a) + _0x4632af(0x252),
                                        'destinationArn': _0x4632af(0x253) + _0x5e9bf3
                                    },
                                    {
                                        'filterName': _0x1e4c5b[_0x4632af(0x250)]() + '-' + _0x1e4c5b[_0x4632af(0x251)](_0x4632af(0x254), 0x553 * -0x4 + 0xb * -0x204 + 0x1f * 0x167) + '-xxxxx',
                                        'destinationArn': _0x163624['EiuDA']
                                    }
                                ]
                            };
                        }
                    }
                }
            }), _0x3848eb[_0x4f693e(0x255)](expect, _0x1cc1e5)['to'][_0x4f693e(0x12e)][_0x4f693e(0x12f)][_0x4f693e(0x131)][_0x4f693e(0x130)];
        }), _0x3848eb[_0x25af34(0x256)](it, _0x3848eb[_0x25af34(0x257)], async () => {
            const _0x182fdb = _0x25af34, _0x4448dd = {
                    'xguQq': _0x3848eb[_0x182fdb(0x246)],
                    'wYtPt': _0x3848eb[_0x182fdb(0x247)]
                }, _0x411fcb = sandbox[_0x182fdb(0x11a)]();
            let _0x4d3572;
            await _0x3848eb[_0x182fdb(0x258)](runServerless, {
                'fixture': _0x3848eb[_0x182fdb(0x21b)],
                'command': _0x3848eb['GgOtP'],
                'configExt': { 'functions': { 'fn1': { 'events': [{ 'cloudwatchLog': _0x3848eb[_0x182fdb(0x249)] }] } } },
                'lastLifecycleHookName': _0x3848eb[_0x182fdb(0x21c)],
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x3848eb['hSBty'] },
                'hooks': { 'beforeInstanceInit': _0x37eb24 => _0x4d3572 = _0x37eb24 },
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x3848eb[_0x182fdb(0x220)] } } },
                    'S3': {
                        'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x4d3572),
                        'headObject': async _0x16208c => generateMatchingHeadObjectResponse(_0x4d3572, _0x16208c)
                    },
                    'CloudWatchLogs': {
                        'deleteSubscriptionFilter': _0x411fcb,
                        'describeSubscriptionFilters': async () => {
                            const _0x34cce0 = _0x182fdb, _0x34c56e = _0x4d3572[_0x34cce0(0x259)](_0x34cce0(0xe4))[_0x34cce0(0x24f)];
                            return {
                                'subscriptionFilters': [{
                                        'filterName': _0x34c56e['getStackName']() + '-' + _0x34c56e['getCloudWatchLogLogicalId'](_0x4448dd[_0x34cce0(0x25a)], 0x8 * -0x175 + -0x1c58 + 0x5b7 * 0x7) + _0x34cce0(0x252),
                                        'destinationArn': _0x4448dd[_0x34cce0(0x25b)]
                                    }]
                            };
                        }
                    }
                }
            }), _0x3848eb[_0x182fdb(0x258)](expect, _0x411fcb)['to'][_0x182fdb(0x12e)][_0x182fdb(0x12f)][_0x182fdb(0x131)][_0x182fdb(0x130)];
        }), it(_0x25af34(0x25c), async () => {
            const _0x16aef0 = _0x25af34, _0xc1d298 = {
                    'DWfCy': _0x163624['lAyCv'],
                    'JuIxF': _0x16aef0(0x25d)
                }, _0x2ec008 = sandbox['stub']();
            let _0x5c99f2;
            const {awsNaming: _0x458878} = await runServerless({
                'fixture': _0x163624[_0x16aef0(0x25e)],
                'command': _0x16aef0(0x1ff),
                'configExt': { 'functions': { 'fn1': { 'events': [{ 'cloudwatchLog': _0x163624[_0x16aef0(0x25f)] }] } } },
                'lastLifecycleHookName': _0x163624['eBici'],
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x16aef0(0x1de) },
                'hooks': { 'beforeInstanceInit': _0x1716a9 => _0x5c99f2 = _0x1716a9 },
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x163624[_0x16aef0(0x260)] } } },
                    'S3': {
                        'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x5c99f2),
                        'headObject': async _0x1fc75e => generateMatchingHeadObjectResponse(_0x5c99f2, _0x1fc75e)
                    },
                    'CloudWatchLogs': {
                        'deleteSubscriptionFilter': _0x2ec008,
                        'describeSubscriptionFilters': async () => {
                            const _0x4b6ac5 = _0x16aef0, _0x569873 = _0x5c99f2[_0x4b6ac5(0x259)]('aws')[_0x4b6ac5(0x24f)];
                            return {
                                'subscriptionFilters': [
                                    {
                                        'filterName': _0x569873[_0x4b6ac5(0x250)]() + '-' + _0x569873[_0x4b6ac5(0x251)](_0x4b6ac5(0x254), 0xd0c * 0x1 + -0x1f51 + 0x923 * 0x2) + _0x4b6ac5(0x252),
                                        'destinationArn': _0x4b6ac5(0x261)
                                    },
                                    {
                                        'filterName': _0x569873[_0x4b6ac5(0x250)]() + '-' + _0x569873['getCloudWatchLogLogicalId'](_0xc1d298[_0x4b6ac5(0x262)], 0x2ea * -0x2 + 0x1 * -0x1b0b + 0x1bb * 0x13) + _0x4b6ac5(0x252),
                                        'destinationArn': _0x4b6ac5(0x253) + _0x5c99f2['service'][_0x4b6ac5(0x263)](_0xc1d298[_0x4b6ac5(0x264)])[_0x4b6ac5(0x24d)]
                                    }
                                ]
                            };
                        }
                    }
                }
            });
            _0x163624[_0x16aef0(0x265)](expect, _0x2ec008)['to'][_0x16aef0(0x12f)][_0x16aef0(0x131)][_0x16aef0(0x266)]({
                'logGroupName': _0x163624[_0x16aef0(0x25f)],
                'filterName': _0x458878[_0x16aef0(0x250)]() + '-' + _0x458878['getCloudWatchLogLogicalId'](_0x163624[_0x16aef0(0x267)], -0xd29 + 0x3 * -0x8bf + -0x1 * -0x2768) + _0x16aef0(0x252)
            });
        }), _0x3848eb[_0x25af34(0x268)](it, _0x3848eb[_0x25af34(0x269)], async () => {
            const _0x4b79a2 = _0x25af34, _0x213cb2 = {
                    'rzKcs': _0x3848eb['ogWjB'],
                    'QJoMR': _0x3848eb[_0x4b79a2(0x246)],
                    'ePVdC': _0x4b79a2(0x25d)
                }, _0x41d253 = sandbox[_0x4b79a2(0x11a)]();
            let _0x27541d;
            const {awsNaming: _0x46858b} = await runServerless({
                'fixture': 'checkForChanges',
                'command': _0x3848eb[_0x4b79a2(0x218)],
                'configExt': {
                    'functions': {
                        'fn1': {
                            'events': [
                                { 'cloudwatchLog': _0x3848eb[_0x4b79a2(0x26a)] },
                                { 'cloudwatchLog': _0x3848eb[_0x4b79a2(0x26b)] }
                            ]
                        }
                    }
                },
                'lastLifecycleHookName': _0x3848eb[_0x4b79a2(0x21c)],
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x3848eb[_0x4b79a2(0x219)] },
                'hooks': { 'beforeInstanceInit': _0x309cba => _0x27541d = _0x309cba },
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x3848eb[_0x4b79a2(0x220)] } } },
                    'S3': {
                        'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x27541d),
                        'headObject': async _0x12addf => generateMatchingHeadObjectResponse(_0x27541d, _0x12addf)
                    },
                    'CloudWatchLogs': {
                        'deleteSubscriptionFilter': _0x41d253,
                        'describeSubscriptionFilters': sandbox['stub']()[_0x4b79a2(0x26c)]()[_0x4b79a2(0x26d)](async () => {
                            const _0x5a28a0 = _0x4b79a2, _0x15ce52 = _0x27541d['getProvider'](_0x213cb2['rzKcs'])['naming'];
                            return {
                                'subscriptionFilters': [{
                                        'filterName': _0x15ce52[_0x5a28a0(0x250)]() + '-' + _0x15ce52[_0x5a28a0(0x251)](_0x213cb2[_0x5a28a0(0x26e)], 0xf4 * -0xf + -0xfc0 + -0x44b * -0x7) + _0x5a28a0(0x252),
                                        'destinationArn': _0x5a28a0(0x253) + _0x27541d[_0x5a28a0(0x113)][_0x5a28a0(0x263)](_0x213cb2[_0x5a28a0(0x26f)])['name']
                                    }]
                            };
                        })[_0x4b79a2(0x270)]()['callsFake'](async () => {
                            const _0x2b145b = _0x4b79a2, _0x535058 = _0x27541d['getProvider'](_0x213cb2['rzKcs'])[_0x2b145b(0x24f)];
                            return {
                                'subscriptionFilters': [{
                                        'filterName': _0x535058['getStackName']() + '-' + _0x535058[_0x2b145b(0x251)](_0x213cb2['QJoMR'], 0x4be * 0x8 + 0x1 * -0x10d3 + -0x151c) + _0x2b145b(0x252),
                                        'destinationArn': _0x2b145b(0x253) + _0x27541d[_0x2b145b(0x113)][_0x2b145b(0x263)](_0x2b145b(0x25d))[_0x2b145b(0x24d)]
                                    }]
                            };
                        })
                    }
                }
            });
            _0x3848eb[_0x4b79a2(0x271)](expect, _0x41d253)['to'][_0x4b79a2(0x12f)][_0x4b79a2(0x131)][_0x4b79a2(0x266)]({
                'logGroupName': _0x3848eb['vlFhX'],
                'filterName': _0x46858b[_0x4b79a2(0x250)]() + '-' + _0x46858b[_0x4b79a2(0x251)](_0x3848eb[_0x4b79a2(0x246)], -0x47 * -0x5a + -0x35f * -0x3 + 0x86 * -0x43) + '-xxxxx'
            });
        }), _0x3848eb[_0x25af34(0x272)](it, _0x25af34(0x273), async () => {
            const _0x4a5c13 = _0x25af34, _0x3cbab3 = sandbox[_0x4a5c13(0x11a)]();
            let _0x425166;
            const {awsNaming: _0x23d21d} = await _0x3848eb[_0x4a5c13(0x274)](runServerless, {
                'fixture': _0x3848eb[_0x4a5c13(0x21b)],
                'command': _0x3848eb[_0x4a5c13(0x218)],
                'configExt': {
                    'functions': {
                        'fn1': {
                            'events': [
                                { 'cloudwatchLog': _0x3848eb[_0x4a5c13(0x249)] },
                                { 'cloudwatchLog': _0x3848eb['mLxlj'] }
                            ]
                        }
                    }
                },
                'lastLifecycleHookName': _0x3848eb[_0x4a5c13(0x21c)],
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x3848eb['hSBty'] },
                'hooks': { 'beforeInstanceInit': _0x46d4e0 => _0x425166 = _0x46d4e0 },
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x4a5c13(0x24a) } } },
                    'S3': {
                        'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x425166),
                        'headObject': async _0x5b6f7a => generateMatchingHeadObjectResponse(_0x425166, _0x5b6f7a)
                    },
                    'CloudWatchLogs': {
                        'deleteSubscriptionFilter': _0x3cbab3,
                        'describeSubscriptionFilters': sandbox['stub']()[_0x4a5c13(0x26c)]()['callsFake'](async () => {
                            const _0x3a142c = _0x4a5c13, _0x5aeee2 = _0x425166[_0x3a142c(0x259)](_0x163624[_0x3a142c(0x24e)])['naming'];
                            return {
                                'subscriptionFilters': [
                                    {
                                        'filterName': _0x5aeee2[_0x3a142c(0x250)]() + '-' + _0x5aeee2[_0x3a142c(0x251)](_0x163624['yeDgL'], 0x631 * -0x2 + -0xeff + 0x1b62) + _0x3a142c(0x252),
                                        'destinationArn': _0x163624[_0x3a142c(0x275)]
                                    },
                                    {
                                        'filterName': _0x5aeee2[_0x3a142c(0x250)]() + '-' + _0x5aeee2[_0x3a142c(0x251)](_0x163624[_0x3a142c(0x276)], -0x421 + 0x5 * -0x41a + -0x18a5 * -0x1) + _0x3a142c(0x252),
                                        'destinationArn': _0x163624[_0x3a142c(0x275)]
                                    }
                                ]
                            };
                        })
                    }
                }
            });
            _0x3848eb[_0x4a5c13(0x274)](expect, _0x3cbab3)['to'][_0x4a5c13(0x12f)][_0x4a5c13(0x131)][_0x4a5c13(0x1a9)], _0x3848eb[_0x4a5c13(0x274)](expect, _0x3cbab3)['to'][_0x4a5c13(0x12f)][_0x4a5c13(0x131)][_0x4a5c13(0x18a)]({
                'logGroupName': _0x3848eb[_0x4a5c13(0x249)],
                'filterName': _0x23d21d[_0x4a5c13(0x250)]() + '-' + _0x23d21d[_0x4a5c13(0x251)](_0x3848eb[_0x4a5c13(0x246)], -0xef2 + 0x1fff + -0x2 * 0x886) + _0x4a5c13(0x252)
            }), _0x3848eb[_0x4a5c13(0x274)](expect, _0x3cbab3)['to'][_0x4a5c13(0x12f)][_0x4a5c13(0x131)][_0x4a5c13(0x18a)]({
                'logGroupName': _0x3848eb[_0x4a5c13(0x249)],
                'filterName': _0x23d21d[_0x4a5c13(0x250)]() + '-' + _0x23d21d[_0x4a5c13(0x251)](_0x3848eb[_0x4a5c13(0x246)], -0x3e * -0x9f + -0x1066 * -0x1 + -0x36e6) + _0x4a5c13(0x252)
            });
        }), _0x3848eb[_0x25af34(0x272)](it, _0x25af34(0x277), async () => {
            const _0x3c1d7a = _0x25af34, _0x110ad8 = sandbox[_0x3c1d7a(0x11a)]();
            let _0x7a574b;
            await _0x163624[_0x3c1d7a(0x265)](runServerless, {
                'fixture': 'checkForChanges',
                'command': _0x163624[_0x3c1d7a(0x278)],
                'configExt': { 'functions': { 'fn1': { 'events': [{ 'cloudwatchLog': _0x163624[_0x3c1d7a(0x25f)] }] } } },
                'lastLifecycleHookName': _0x163624[_0x3c1d7a(0x279)],
                'env': { 'AWS_CONTAINER_CREDENTIALS_FULL_URI': _0x163624['bfdKg'] },
                'hooks': { 'beforeInstanceInit': _0x3209cb => _0x7a574b = _0x3209cb },
                'awsRequestStubMap': {
                    ...commonAwsSdkMock,
                    'STS': {
                        'getCallerIdentity': {
                            'ResponseMetadata': { 'RequestId': _0x163624[_0x3c1d7a(0x27a)] },
                            'UserId': _0x163624[_0x3c1d7a(0x27b)],
                            'Account': _0x163624[_0x3c1d7a(0x27c)],
                            'Arn': _0x163624['wXPum']
                        }
                    },
                    'Lambda': { 'getFunction': { 'Configuration': { 'LastModified': _0x163624[_0x3c1d7a(0x260)] } } },
                    'S3': {
                        'listObjectsV2': async () => generateMatchingListObjectsResponse(_0x7a574b),
                        'headObject': async _0x1afe4f => generateMatchingHeadObjectResponse(_0x7a574b, _0x1afe4f)
                    },
                    'CloudWatchLogs': {
                        'describeSubscriptionFilters': sandbox[_0x3c1d7a(0x11a)]()[_0x3c1d7a(0x26d)](async () => {
                            const _0xa04e27 = _0x3c1d7a, _0x5b6940 = _0x7a574b[_0xa04e27(0x259)](_0xa04e27(0xe4))[_0xa04e27(0x24f)];
                            return {
                                'subscriptionFilters': [{
                                        'filterName': _0x5b6940['getStackName']() + '-' + _0x5b6940[_0xa04e27(0x251)](_0xa04e27(0x208), 0x1d00 + 0xe1b + -0x2b1a) + _0xa04e27(0x252),
                                        'destinationArn': _0xa04e27(0x27d) + _0x7a574b[_0xa04e27(0x113)][_0xa04e27(0x263)](_0xa04e27(0x25d))[_0xa04e27(0x24d)]
                                    }]
                            };
                        }),
                        'deleteSubscriptionFilter': _0x110ad8
                    }
                }
            }), _0x163624[_0x3c1d7a(0x265)](expect, _0x110ad8)['to'][_0x3c1d7a(0x12e)]['have'][_0x3c1d7a(0x131)]['called'];
        });
    });
});
