'use strict';
const _ = require('lodash'), chai = require('chai'), path = require('path'), fs = require('fs-extra'), os = require('os'), proxyquire = require('proxyquire'), sinon = require('sinon'), overrideEnv = require('process-utils/override-env'), AwsProvider = require('../../../../../lib/plugins/aws/provider'), Serverless = require('../../../../../lib/Serverless'), runServerless = require('../../../../utils/run-serverless');
chai['use'](require('chai-as-promised')), chai['use'](require('sinon-chai'));
const expect = chai['expect'];
describe('AwsProvider', () => {
    const _0x448eda = {
        'NelMX': function (_0x462347) {
            return _0x462347();
        },
        'Ozwhe': function (_0x283c8e, _0x82d643) {
            return _0x283c8e(_0x82d643);
        },
        'UcHEE': 'undefined',
        'pAGfj': 'new-service',
        'wMJmb': 'aws',
        'AcTBR': 'foo',
        'Ftkgm': 'GET',
        'MAHil': function (_0x32ade5, _0x16081e, _0x424aaa) {
            return _0x32ade5(_0x16081e, _0x424aaa);
        },
        'yfoyp': 'myStage',
        'tIUfR': 'my-stage',
        'jQMfd': 'my_stage',
        'occZc': '${opt:stage,\x20\x27prod\x27}',
        'HPYFX': 'my.deployment.bucket',
        'REXyf': function (_0x3938f5, _0x294644) {
            return _0x3938f5(_0x294644);
        },
        'dZFGf': 'should\x20do\x20nothing\x20if\x20not\x20defined',
        'VzHlY': 'should\x20do\x20nothing\x20if\x20the\x20value\x20is\x20a\x20string',
        'foBqq': 'should\x20set\x20Serverless\x20instance',
        'CNatI': 'should\x20set\x20the\x20provider\x20property',
        'unAEX': 'stage\x20name\x20validation',
        'TpJDZ': function (_0x464135, _0x121638, _0x4f9342) {
            return _0x464135(_0x121638, _0x4f9342);
        },
        'LpJpO': 'deploymentBucket\x20configuration',
        'VCCII': function (_0x56784e, _0x47f3c4, _0x3666b9) {
            return _0x56784e(_0x47f3c4, _0x3666b9);
        },
        'IchjQ': 'should\x20ignore\x20entries\x20without\x20a\x20\x27value\x27\x20attribute',
        'MKakn': function (_0x584560, _0x17e7da, _0xdfa2d5) {
            return _0x584560(_0x17e7da, _0xdfa2d5);
        },
        'lgTXp': 'should\x20ignore\x20entries\x20with\x20an\x20undefined\x20\x27value\x27\x20attribute',
        'SBtwT': 'should\x20return\x20the\x20first\x20value',
        'ozZyb': 'should\x20return\x20the\x20middle\x20value',
        'rlZfE': 'should\x20return\x20the\x20last\x20value',
        'VnHRK': function (_0x358a81, _0x269e44, _0x507fe9) {
            return _0x358a81(_0x269e44, _0x507fe9);
        },
        'TSyso': 'should\x20return\x20the\x20last\x20object\x20if\x20none\x20have\x20valid\x20values',
        'KZgaE': 'should\x20return\x20an\x20array\x20of\x20values\x20given\x20paths\x20to\x20them',
        'kBgCu': function (_0x3420b0, _0xb82029) {
            return _0x3420b0(_0xb82029);
        },
        'bDwMz': function (_0x56d551, _0x569584, _0x4bc46c) {
            return _0x56d551(_0x569584, _0x4bc46c);
        },
        'FmWBz': '#getValues',
        'WjUCo': '#firstValue',
        'YRMAk': 'accessKeyId',
        'pQpNK': 'secretAccessKey',
        'ExRUd': 'sessionToken',
        'JfErB': 'getObject',
        'NaodG': 'us-east-1',
        'rFcQG': function (_0x428d4b, _0x4fc3a1) {
            return _0x428d4b(_0x4fc3a1);
        },
        'zxhqb': 'incompatible\x20string\x20option',
        'HzYZH': '../../../../../lib/plugins/aws/provider.js',
        'uOETJ': function (_0x39f2ba, _0x5217de) {
            return _0x39f2ba(_0x5217de);
        },
        'mlaIG': 'WARNING:\x20Inappropriate\x20call\x20of\x20provider.request()',
        'rDkvM': function (_0x3610d8, _0x7c959d) {
            return _0x3610d8(_0x7c959d);
        },
        'RNsVa': 'should\x20pass\x20resolved\x20credentials\x20as\x20expected',
        'DhrPV': 'should\x20trigger\x20the\x20expected\x20AWS\x20SDK\x20invokation',
        'DFWWL': function (_0x171394, _0x3dd2e2, _0x1aacfb) {
            return _0x171394(_0x3dd2e2, _0x1aacfb);
        },
        'IhKXd': 'should\x20use\x20local\x20cache\x20when\x20using\x20{useCache:\x20true}',
        'DBoeA': 'should\x20detect\x20incompatible\x20legacy\x20use\x20of\x20aws\x20request\x20and\x20print\x20a\x20debug\x20warning',
        'QwDHp': 'serverlessDeploymentBucketName',
        'RvowA': function (_0x183974, _0x295816) {
            return _0x183974(_0x295816);
        },
        'VVGyM': function (_0x428b84, _0x1db55e) {
            return _0x428b84(_0x1db55e);
        },
        'nzRoB': 'CloudFormation',
        'IVnzd': 'describeStackResource',
        'xThFB': 'request',
        'hinIs': 'custom-bucket',
        'zHPzx': function (_0x571de7, _0x190d7c, _0x464670) {
            return _0x571de7(_0x190d7c, _0x464670);
        },
        'mcYCa': 'should\x20return\x20the\x20name\x20of\x20the\x20serverless\x20deployment\x20bucket',
        'FLork': 'should\x20return\x20the\x20name\x20of\x20the\x20custom\x20deployment\x20bucket',
        'iByzi': '12345678',
        'RIPya': '12345678-1234-1234-1234-123456789012',
        'paMhW': 'ABCDEFGHIJKLMNOPQRSTU:VWXYZ',
        'MPvlk': 'arn:aws:sts::123456789012:assumed-role/ROLE-NAME/VWXYZ',
        'eZyHb': function (_0x4da283, _0x3f6734) {
            return _0x4da283(_0x3f6734);
        },
        'VMOFe': 'should\x20return\x20the\x20AWS\x20account\x20id\x20and\x20partition',
        'YsxXm': 'should\x20return\x20the\x20AWS\x20account\x20id',
        'jHNBa': 'aws-s3-accelerate',
        'SPAEB': function (_0x1c923d, _0x23137c) {
            return _0x1c923d(_0x23137c);
        },
        'Nxogc': 'should\x20return\x20false\x20by\x20default',
        'MFnHb': function (_0x585515, _0x1e3915, _0x7a8dca) {
            return _0x585515(_0x1e3915, _0x7a8dca);
        },
        'CIYYO': 'should\x20return\x20true\x20when\x20CLI\x20option\x20is\x20provided',
        'lJsNN': 'should\x20remove\x20the\x20corresponding\x20option\x20for\x20the\x20current\x20deploy',
        'qePbW': 'dev',
        'RkYYb': function (_0x214ff3, _0x33b36c) {
            return _0x214ff3(_0x33b36c);
        },
        'ULCIh': function (_0x47c160, _0x2def18) {
            return _0x47c160(_0x2def18);
        },
        'FaxQO': '#constructor()',
        'jrOMD': 'values',
        'zJnuT': function (_0x3e51b8, _0x335381, _0x3be405) {
            return _0x3e51b8(_0x335381, _0x3be405);
        },
        'aFeiB': '#request()',
        'PyfBL': '#getServerlessDeploymentBucketName()',
        'YfsKk': '#getAccountInfo()',
        'YoFwf': '#getAccountId()',
        'YolFK': '#isS3TransferAccelerationEnabled()',
        'jUUmy': function (_0x8ed590, _0x4d05cc, _0x26e982) {
            return _0x8ed590(_0x4d05cc, _0x26e982);
        },
        'wObez': '#disableTransferAccelerationForCurrentDeploy()'
    };
    let _0x3574da, _0xc2166e, _0x3bd657;
    const _0x20a11a = {
        'stage': _0x448eda['qePbW'],
        'region': _0x448eda['NaodG']
    };
    _0x448eda['RkYYb'](beforeEach, () => {
        ({restoreEnv: _0x3bd657} = _0x448eda['NelMX'](overrideEnv), _0xc2166e = new Serverless(_0x20a11a), _0xc2166e['cli'] = new _0xc2166e['classes']['CLI'](), _0x3574da = new AwsProvider(_0xc2166e, _0x20a11a));
    }), _0x448eda['ULCIh'](afterEach, () => _0x3bd657()), _0x448eda['MFnHb'](describe, _0x448eda['FaxQO'], () => {
        const _0x47e02f = {
            'OPjMd': function (_0x54f200, _0x266880) {
                return _0x448eda['Ozwhe'](_0x54f200, _0x266880);
            },
            'DVFeI': _0x448eda['UcHEE'],
            'EoXtM': function (_0x2d74f7, _0x4b62de) {
                return _0x448eda['Ozwhe'](_0x2d74f7, _0x4b62de);
            },
            'fCHNm': _0x448eda['pAGfj'],
            'kNlmq': _0x448eda['wMJmb'],
            'cRpMi': _0x448eda['AcTBR'],
            'oLOdL': _0x448eda['Ftkgm'],
            'mxGAl': function (_0x5a4908, _0x3fe962, _0x27897e) {
                return _0x448eda['MAHil'](_0x5a4908, _0x3fe962, _0x27897e);
            },
            'XxLHh': _0x448eda['yfoyp'],
            'FNqpW': _0x448eda['tIUfR'],
            'quroi': _0x448eda['jQMfd'],
            'VpQuV': _0x448eda['occZc'],
            'REsAg': _0x448eda['HPYFX'],
            'JDSpQ': function (_0x3ca4eb, _0x40d8e2) {
                return _0x448eda['REXyf'](_0x3ca4eb, _0x40d8e2);
            },
            'hACza': _0x448eda['dZFGf'],
            'ecqDG': _0x448eda['VzHlY']
        };
        _0x448eda['MAHil'](it, _0x448eda['foBqq'], () => {
            _0x47e02f['OPjMd'](expect, typeof _0x3574da['serverless'])['to']['not']['equal'](_0x47e02f['DVFeI']);
        }), _0x448eda['MAHil'](it, _0x448eda['CNatI'], () => {
            _0x47e02f['EoXtM'](expect, _0x3574da['provider'])['to']['equal'](_0x3574da);
        }), _0x448eda['MAHil'](describe, _0x448eda['unAEX'], () => {
            const _0x450879 = [
                _0x47e02f['XxLHh'],
                _0x47e02f['FNqpW'],
                _0x47e02f['quroi'],
                _0x47e02f['VpQuV']
            ];
            _0x450879['forEach'](_0x195d0d => {
                const _0x4b7027 = {
                    'sIuxq': _0x47e02f['fCHNm'],
                    'qVRaO': _0x47e02f['kNlmq'],
                    'TqJHC': _0x47e02f['cRpMi'],
                    'aMbZc': _0x47e02f['oLOdL'],
                    'SXAwn': function (_0x12964e, _0x355180) {
                        return _0x47e02f['EoXtM'](_0x12964e, _0x355180);
                    }
                };
                _0x47e02f['mxGAl'](it, 'should\x20not\x20throw\x20an\x20error\x20before\x20variable\x20population\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20even\x20if\x20http\x20event\x20is\x20present\x20and\x20stage\x20is\x20' + _0x195d0d, () => {
                    const _0x53554a = { 'stage': _0x195d0d };
                    _0xc2166e = new Serverless(_0x53554a);
                    const _0x575204 = {
                        'service': _0x4b7027['sIuxq'],
                        'provider': {
                            'name': _0x4b7027['qVRaO'],
                            'stage': _0x195d0d
                        },
                        'functions': {
                            'first': {
                                'events': [{
                                        'http': {
                                            'path': _0x4b7027['TqJHC'],
                                            'method': _0x4b7027['aMbZc']
                                        }
                                    }]
                            }
                        }
                    };
                    _0xc2166e['service'] = new _0xc2166e['classes']['Service'](_0xc2166e, _0x575204), _0x4b7027['SXAwn'](expect, () => new AwsProvider(_0xc2166e, _0x53554a))['to']['not']['throw'](Error);
                });
            });
        }), _0x448eda['TpJDZ'](describe, _0x448eda['LpJpO'], () => {
            const _0x452ef2 = {
                'xlvmL': function (_0x280c1b, _0x563d61) {
                    return _0x47e02f['JDSpQ'](_0x280c1b, _0x563d61);
                }
            };
            _0x47e02f['mxGAl'](it, _0x47e02f['hACza'], () => {
                _0xc2166e['service']['provider']['deploymentBucket'] = undefined;
                const _0x4f1e7b = new AwsProvider(_0xc2166e, _0x20a11a);
                _0x452ef2['xlvmL'](expect, _0x4f1e7b['serverless']['service']['provider']['deploymentBucket'])['to']['equal'](undefined);
            }), _0x47e02f['mxGAl'](it, _0x47e02f['ecqDG'], () => {
                _0xc2166e['service']['provider']['deploymentBucket'] = _0x47e02f['REsAg'];
                const _0x53b9f3 = new AwsProvider(_0xc2166e, _0x20a11a);
                _0x47e02f['JDSpQ'](expect, _0x53b9f3['serverless']['service']['provider']['deploymentBucket'])['to']['equal'](_0x47e02f['REsAg']);
            });
        });
    }), _0x448eda['MFnHb'](describe, _0x448eda['jrOMD'], () => {
        const _0x556c49 = {
                'ltehp': function (_0x4d0b41, _0x2e230e) {
                    return _0x448eda['REXyf'](_0x4d0b41, _0x2e230e);
                },
                'znSag': function (_0xf3270d, _0x2e24ca, _0x43d552) {
                    return _0x448eda['VnHRK'](_0xf3270d, _0x2e24ca, _0x43d552);
                },
                'ueCZY': _0x448eda['KZgaE'],
                'hspBE': function (_0x49aa06, _0xb35067) {
                    return _0x448eda['REXyf'](_0x49aa06, _0xb35067);
                },
                'mICei': function (_0x41d9e0, _0x580a4c) {
                    return _0x448eda['kBgCu'](_0x41d9e0, _0x580a4c);
                }
            }, _0x2e812f = {
                'a': 'b',
                'c': {
                    'd': 'e',
                    'f': { 'g': 'h' }
                }
            }, _0x3aee56 = [
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
            ], _0x3b3cbc = [
                {
                    'path': _0x3aee56[0x0],
                    'value': _0x2e812f['a']
                },
                {
                    'path': _0x3aee56[0x1],
                    'value': _0x2e812f['c']['d']
                },
                {
                    'path': _0x3aee56[0x2],
                    'value': _0x2e812f['c']['f']['g']
                }
            ];
        _0x448eda['bDwMz'](describe, _0x448eda['FmWBz'], () => {
            _0x556c49['znSag'](it, _0x556c49['ueCZY'], () => {
                _0x556c49['ltehp'](expect, _0x3574da['getValues'](_0x2e812f, _0x3aee56))['to']['eql'](_0x3b3cbc);
            });
        }), _0x448eda['bDwMz'](describe, _0x448eda['WjUCo'], () => {
            const _0x1045b8 = {
                'DOYmM': function (_0x2f96aa, _0x20da36) {
                    return _0x448eda['REXyf'](_0x2f96aa, _0x20da36);
                }
            };
            _0x448eda['VCCII'](it, _0x448eda['IchjQ'], () => {
                const _0x458fa8 = _['cloneDeep'](_0x3b3cbc);
                delete _0x458fa8[0x0]['value'], delete _0x458fa8[0x2]['value'], _0x556c49['hspBE'](expect, _0x3574da['firstValue'](_0x458fa8))['to']['eql'](_0x3b3cbc[0x1]);
            }), _0x448eda['MKakn'](it, _0x448eda['lgTXp'], () => {
                const _0x58a639 = _['cloneDeep'](_0x3b3cbc);
                _0x58a639[0x0]['value'] = undefined, _0x58a639[0x2]['value'] = undefined, _0x556c49['hspBE'](expect, _0x3574da['firstValue'](_0x58a639))['to']['eql'](_0x3b3cbc[0x1]);
            }), _0x448eda['MKakn'](it, _0x448eda['SBtwT'], () => {
                _0x556c49['mICei'](expect, _0x3574da['firstValue'](_0x3b3cbc))['to']['equal'](_0x3b3cbc[0x0]);
            }), _0x448eda['MKakn'](it, _0x448eda['ozZyb'], () => {
                const _0x33f802 = _['cloneDeep'](_0x3b3cbc);
                delete _0x33f802[0x0]['value'], delete _0x33f802[0x2]['value'], _0x1045b8['DOYmM'](expect, _0x3574da['firstValue'](_0x33f802))['to']['equal'](_0x33f802[0x1]);
            }), _0x448eda['MKakn'](it, _0x448eda['rlZfE'], () => {
                const _0x5106c5 = _['cloneDeep'](_0x3b3cbc);
                delete _0x5106c5[0x0]['value'], delete _0x5106c5[0x1]['value'], _0x1045b8['DOYmM'](expect, _0x3574da['firstValue'](_0x5106c5))['to']['equal'](_0x5106c5[0x2]);
            }), _0x448eda['VnHRK'](it, _0x448eda['TSyso'], () => {
                const _0x136a33 = _['cloneDeep'](_0x3b3cbc);
                delete _0x136a33[0x0]['value'], delete _0x136a33[0x1]['value'], delete _0x136a33[0x2]['value'], _0x556c49['mICei'](expect, _0x3574da['firstValue'](_0x136a33))['to']['equal'](_0x136a33[0x2]);
            });
        });
    }), _0x448eda['zJnuT'](describe, _0x448eda['aFeiB'], () => {
        const _0x130f4a = {
            'qNwWT': _0x448eda['HzYZH'],
            'GlLEj': function (_0x5d4a23, _0x4c7e89) {
                return _0x448eda['uOETJ'](_0x5d4a23, _0x4c7e89);
            },
            'tzmyl': function (_0x3d601c, _0x233bad) {
                return _0x448eda['uOETJ'](_0x3d601c, _0x233bad);
            },
            'fQbay': _0x448eda['mlaIG']
        };
        let _0x3210a3, _0x472d07, _0x37d0a2;
        _0x448eda['rDkvM'](beforeEach, () => {
            _0x37d0a2 = sinon['stub'](), _0x3210a3 = sinon['stub']()['resolves'](), _0x3210a3['memoized'] = sinon['stub']()['resolves']();
            const _0x2c0b8b = proxyquire['noCallThru']()['load'](_0x130f4a['qNwWT'], {
                '../../aws/request': _0x3210a3,
                '@serverless/utils/log': _0x37d0a2
            });
            _0x472d07 = new _0x2c0b8b(_0xc2166e, _0x20a11a);
        }), _0x448eda['rDkvM'](afterEach, () => {
        }), _0x448eda['bDwMz'](it, _0x448eda['RNsVa'], async () => {
            _0x472d07['cachedCredentials'] = {
                'accessKeyId': _0x448eda['YRMAk'],
                'secretAccessKey': _0x448eda['pQpNK'],
                'sessionToken': _0x448eda['ExRUd']
            }, await _0x472d07['request']('S3', _0x448eda['JfErB'], {}), _0x448eda['kBgCu'](expect, _0x3210a3['args'][0x0][0x0])['to']['deep']['equal']({
                'name': 'S3',
                'params': {
                    ..._0x472d07['cachedCredentials'],
                    'region': _0x448eda['NaodG'],
                    'isS3TransferAccelerationEnabled': ![]
                }
            });
        }), _0x448eda['bDwMz'](it, _0x448eda['DhrPV'], () => {
            return _0x472d07['request']('S3', _0x448eda['JfErB'], {})['then'](() => {
                _0x130f4a['GlLEj'](expect, _0x3210a3)['to']['have']['been']['calledOnce'];
            });
        }), _0x448eda['DFWWL'](it, _0x448eda['IhKXd'], () => {
            const _0x5d37e5 = {
                'hKVDv': function (_0x32fce8, _0x2c912e) {
                    return _0x448eda['rFcQG'](_0x32fce8, _0x2c912e);
                },
                'HQbRT': function (_0x213d7d, _0x5b4262) {
                    return _0x448eda['rFcQG'](_0x213d7d, _0x5b4262);
                }
            };
            return _0x472d07['request']('S3', _0x448eda['JfErB'], {}, { 'useCache': !![] })['then'](() => _0x472d07['request']('S3', 'getObject', {}, { 'useCache': !![] }))['then'](() => {
                _0x5d37e5['hKVDv'](expect, _0x3210a3)['to']['not']['have']['been']['called'], _0x5d37e5['HQbRT'](expect, _0x3210a3['memoized'])['to']['have']['been']['calledTwice'];
            });
        }), _0x448eda['DFWWL'](it, _0x448eda['DBoeA'], () => {
            return process['env']['SLS_DEBUG'] = !![], _0x472d07['request']('S3', _0x448eda['JfErB'], {}, _0x448eda['zxhqb'])['then'](() => {
                _0x130f4a['tzmyl'](expect, _0x37d0a2)['to']['have']['been']['calledWith'](_0x130f4a['fQbay']);
            })['finally'](() => {
                process['env']['SLS_DEBUG'] = ![];
            });
        });
    }), _0x448eda['zJnuT'](describe, _0x448eda['PyfBL'], () => {
        const _0x47cf2b = {
            'GOXGj': function (_0x191319, _0x2c9487) {
                return _0x448eda['rDkvM'](_0x191319, _0x2c9487);
            },
            'tbKNd': _0x448eda['QwDHp'],
            'xHDjH': function (_0x3bb6f6, _0x3f2ebe) {
                return _0x448eda['RvowA'](_0x3bb6f6, _0x3f2ebe);
            },
            'yRwTo': function (_0x66cd21, _0x44d4d2) {
                return _0x448eda['VVGyM'](_0x66cd21, _0x44d4d2);
            },
            'isVAQ': _0x448eda['nzRoB'],
            'llvNw': _0x448eda['IVnzd'],
            'BPPUr': _0x448eda['xThFB'],
            'KYiIw': _0x448eda['hinIs']
        };
        _0x448eda['zHPzx'](it, _0x448eda['mcYCa'], () => {
            const _0x7aa802 = {
                    'aqJHo': function (_0x3af8ad, _0x1af00a) {
                        return _0x47cf2b['GOXGj'](_0x3af8ad, _0x1af00a);
                    },
                    'MEtrO': _0x47cf2b['tbKNd'],
                    'AeeJw': function (_0x336dc2, _0x4d11d0) {
                        return _0x47cf2b['xHDjH'](_0x336dc2, _0x4d11d0);
                    },
                    'dLwsO': function (_0x494da0, _0x13f82e) {
                        return _0x47cf2b['yRwTo'](_0x494da0, _0x13f82e);
                    },
                    'QveDT': _0x47cf2b['isVAQ'],
                    'qbBgi': _0x47cf2b['llvNw']
                }, _0x5dadda = sinon['stub'](_0x3574da, _0x47cf2b['BPPUr'])['resolves']({ 'StackResourceDetail': { 'PhysicalResourceId': _0x47cf2b['tbKNd'] } });
            return _0x3574da['getServerlessDeploymentBucketName']()['then'](_0x3eb4d4 => {
                _0x7aa802['aqJHo'](expect, _0x3eb4d4)['to']['equal'](_0x7aa802['MEtrO']), _0x7aa802['AeeJw'](expect, _0x5dadda['calledOnce'])['to']['be']['equal'](!![]), _0x7aa802['dLwsO'](expect, _0x5dadda['calledWithExactly'](_0x7aa802['QveDT'], _0x7aa802['qbBgi'], {
                    'StackName': _0x3574da['naming']['getStackName'](),
                    'LogicalResourceId': _0x3574da['naming']['getDeploymentBucketLogicalId']()
                }))['to']['be']['equal'](!![]), _0x3574da['request']['restore']();
            });
        }), _0x448eda['zHPzx'](it, _0x448eda['FLork'], () => {
            _0x3574da['serverless']['service']['provider']['deploymentBucket'] = _0x47cf2b['KYiIw'];
            const _0x295620 = sinon['stub'](_0x3574da, _0x47cf2b['BPPUr'])['resolves']({ 'StackResourceDetail': { 'PhysicalResourceId': _0x47cf2b['tbKNd'] } });
            return _0x3574da['getServerlessDeploymentBucketName']()['then'](_0x50ceb1 => {
                _0x47cf2b['yRwTo'](expect, _0x295620['called'])['to']['be']['equal'](![]), _0x47cf2b['yRwTo'](expect, _0x50ceb1)['to']['equal'](_0x47cf2b['KYiIw']), _0x3574da['request']['restore']();
            });
        });
    }), _0x448eda['zJnuT'](describe, _0x448eda['YfsKk'], () => {
        const _0x29bc9d = {
            'kmnoR': function (_0x216c67, _0x47f54e) {
                return _0x448eda['eZyHb'](_0x216c67, _0x47f54e);
            }
        };
        _0x448eda['zHPzx'](it, _0x448eda['VMOFe'], () => {
            const _0x3ed021 = _0x448eda['iByzi'], _0x5d85c0 = _0x448eda['wMJmb'], _0x352a9e = sinon['stub'](_0x3574da, _0x448eda['xThFB'])['resolves']({
                    'ResponseMetadata': { 'RequestId': _0x448eda['RIPya'] },
                    'UserId': _0x448eda['paMhW'],
                    'Account': _0x3ed021,
                    'Arn': _0x448eda['MPvlk']
                });
            return _0x3574da['getAccountInfo']()['then'](_0x28f210 => {
                _0x29bc9d['kmnoR'](expect, _0x352a9e['calledOnce'])['to']['equal'](!![]), _0x29bc9d['kmnoR'](expect, _0x28f210['accountId'])['to']['equal'](_0x3ed021), _0x29bc9d['kmnoR'](expect, _0x28f210['partition'])['to']['equal'](_0x5d85c0), _0x3574da['request']['restore']();
            });
        });
    }), _0x448eda['zJnuT'](describe, _0x448eda['YoFwf'], () => {
        const _0x3a04af = {
            'rhdSB': function (_0x9af95a, _0x40d920) {
                return _0x448eda['eZyHb'](_0x9af95a, _0x40d920);
            },
            'VtSjf': function (_0x21d957, _0x86c916) {
                return _0x448eda['eZyHb'](_0x21d957, _0x86c916);
            }
        };
        _0x448eda['zHPzx'](it, _0x448eda['YsxXm'], () => {
            const _0x35fdc5 = _0x448eda['iByzi'], _0x4e9975 = sinon['stub'](_0x3574da, _0x448eda['xThFB'])['resolves']({
                    'ResponseMetadata': { 'RequestId': _0x448eda['RIPya'] },
                    'UserId': _0x448eda['paMhW'],
                    'Account': _0x35fdc5,
                    'Arn': _0x448eda['MPvlk']
                });
            return _0x3574da['getAccountId']()['then'](_0xe4ad03 => {
                _0x3a04af['rhdSB'](expect, _0x4e9975['calledOnce'])['to']['equal'](!![]), _0x3a04af['VtSjf'](expect, _0xe4ad03)['to']['equal'](_0x35fdc5), _0x3574da['request']['restore']();
            });
        });
    }), _0x448eda['zJnuT'](describe, _0x448eda['YolFK'], () => {
        _0x448eda['zHPzx'](it, _0x448eda['Nxogc'], () => {
            return _0x3574da['options'][_0x448eda['jHNBa']] = undefined, _0x448eda['SPAEB'](expect, _0x3574da['isS3TransferAccelerationEnabled']())['to']['equal'](![]);
        }), _0x448eda['MFnHb'](it, _0x448eda['CIYYO'], () => {
            return _0x3574da['options'][_0x448eda['jHNBa']] = !![], _0x448eda['SPAEB'](expect, _0x3574da['isS3TransferAccelerationEnabled']())['to']['equal'](!![]);
        });
    }), _0x448eda['jUUmy'](describe, _0x448eda['wObez'], () => {
        _0x448eda['MFnHb'](it, _0x448eda['lJsNN'], () => {
            return _0x3574da['options'][_0x448eda['jHNBa']] = !![], _0x3574da['disableTransferAccelerationForCurrentDeploy'](), _0x448eda['SPAEB'](expect, _0x3574da['options'][_0x448eda['jHNBa']])['to']['be']['undefined'];
        });
    });
}), describe('test/unit/lib/plugins/aws/provider.test.js', () => {
    const _0x5416c4 = {
        'RILMY': 'abc',
        'blffn': 'keyId',
        'YWwPn': 'secret',
        'qGQPn': 'env',
        'DOhWj': function (_0x2f4218, _0x54bd60) {
            return _0x2f4218(_0x54bd60);
        },
        'ZAdSI': 'aws',
        'lHbkV': 'print',
        'VvAVN': function (_0x31fdd2, _0x129df1) {
            return _0x31fdd2(_0x129df1);
        },
        'wMRUC': 'CloudFormation',
        'WqoGi': 'describeStacks',
        'RBDhF': function (_0x2eef03, _0x23b21f) {
            return _0x2eef03(_0x23b21f);
        },
        'pZUwZ': '123',
        'UKRJL': function (_0x4f8372, _0x4a9071) {
            return _0x4f8372(_0x4a9071);
        },
        'IEQHK': function (_0x5690b7, _0x5f1bf8, _0xf2bacb) {
            return _0x5690b7(_0x5f1bf8, _0xf2bacb);
        },
        'cHMSU': '`AwsProvider.getProviderName()`\x20should\x20resolve\x20provider\x20name',
        'epPsv': function (_0x1f9156, _0x50559f, _0x20fda5) {
            return _0x1f9156(_0x50559f, _0x20fda5);
        },
        'AjiwM': 'should\x20retain\x20sessionToken\x20eventually\x20updated\x20internally\x20by\x20SDK',
        'SGQiM': './.aws',
        'sRORU': './.aws/credentials',
        'FmEHQ': function (_0x41f7fe, _0x57c66d) {
            return _0x41f7fe(_0x57c66d);
        },
        'EoIUv': 'DEFAULTKEYID',
        'DPtWT': 'notDefault',
        'KaMnu': function (_0x27e525, _0x12d1c4) {
            return _0x27e525(_0x12d1c4);
        },
        'cLqNz': function (_0x536669, _0x230481) {
            return _0x536669(_0x230481);
        },
        'wCNBu': 'NOTDEFAULTKEYID',
        'NqPDu': 'notDefaultWithRole',
        'awHlk': 'should\x20get\x20credentials\x20from\x20`provider.profile`',
        'RUUim': function (_0x54b234, _0x30e0b5, _0x3206e3) {
            return _0x54b234(_0x30e0b5, _0x3206e3);
        },
        'AWwHK': 'should\x20accept\x20a\x20role\x20to\x20assume\x20on\x20credentials',
        'bhStD': 'customProfile',
        'txBuU': './custom_credentials',
        'pDOfU': function (_0x41aa5e, _0x23d6e7) {
            return _0x41aa5e(_0x23d6e7);
        },
        'jUUUR': function (_0x12ae50, _0x1fe305, _0x4b0adc) {
            return _0x12ae50(_0x1fe305, _0x4b0adc);
        },
        'heGlV': 'should\x20get\x20credentials\x20from\x20AWS_PROFILE\x20environment\x20variable',
        'eSgZB': 'should\x20get\x20credentials\x20from\x20AWS_SHARED_CREDENTIALS_FILE\x20environment\x20variable',
        'KRRjx': 'TESTSTAGEACCESSKEYID',
        'GRYJw': 'TESTSTAGESECRET',
        'sufsq': function (_0x574349, _0x5dd392) {
            return _0x574349(_0x5dd392);
        },
        'vcRpL': 'testStage',
        'laSpT': function (_0x2d8f2c, _0x2b6992, _0x503d37) {
            return _0x2d8f2c(_0x2b6992, _0x503d37);
        },
        'kpuYD': 'should\x20get\x20credentials\x20\x22--aws-profile\x22\x20CLI\x20option',
        'Zrnvi': function (_0x153d3b, _0x14b656, _0x1e6f4b) {
            return _0x153d3b(_0x14b656, _0x1e6f4b);
        },
        'xqNCT': 'should\x20set\x20the\x20signatureVersion\x20to\x20v4\x20if\x20the\x20serverSideEncryption\x20is\x20aws:kms',
        'DgDUV': function (_0x14a315, _0x5dc9cb) {
            return _0x14a315(_0x5dc9cb);
        },
        'JVomC': 'NOTDEFAULTWITHROLEROLE',
        'ihPQw': 'ENVKEYID',
        'krwdN': 'ENVSECRET',
        'lEoUO': function (_0x160d26, _0x383c96) {
            return _0x160d26(_0x383c96);
        },
        'BoAav': function (_0x164937, _0x5dbc36) {
            return _0x164937(_0x5dbc36);
        },
        'nKkGd': 'CUSTOMKEYID',
        'epdqE': 'aws:kms',
        'yrYua': function (_0x235a2f, _0x38efe7) {
            return _0x235a2f(_0x38efe7);
        },
        'oCjTm': 'nonExistent',
        'LLPRJ': function (_0x2a2c8d, _0x57b8a1) {
            return _0x2a2c8d(_0x57b8a1);
        },
        'KNjlq': function (_0x5e452d, _0x57096a, _0x219174) {
            return _0x5e452d(_0x57096a, _0x219174);
        },
        'FJHpY': 'should\x20get\x20credentials\x20from\x20default\x20AWS\x20profile',
        'aIuln': function (_0x3df395, _0x597b90, _0x596637) {
            return _0x3df395(_0x597b90, _0x596637);
        },
        'rbWwt': 'should\x20get\x20credentials\x20from\x20custom\x20default\x20AWS\x20profile,\x20set\x20by\x20AWS_DEFAULT_PROFILE',
        'TsIXd': function (_0x2e04ce, _0x26e878, _0x290035) {
            return _0x2e04ce(_0x26e878, _0x290035);
        },
        'AInMj': 'assume\x20role\x20with\x20provider.profile',
        'QDhac': function (_0x32c43f, _0x43c6a7, _0x42d0eb) {
            return _0x32c43f(_0x43c6a7, _0x42d0eb);
        },
        'xVBBX': 'should\x20get\x20credentials\x20from\x20environment\x20variables',
        'umwYp': function (_0x32ecbc, _0xfe2b22, _0x555ff6) {
            return _0x32ecbc(_0xfe2b22, _0x555ff6);
        },
        'VwXrj': 'profile\x20with\x20non\x20default\x20credentials\x20file',
        'BdzVw': function (_0x42abc4, _0x4c6b50, _0x371b91) {
            return _0x42abc4(_0x4c6b50, _0x371b91);
        },
        'CQdWU': 'should\x20get\x20credentials\x20from\x20stage\x20specific\x20environment\x20variables',
        'ohBBD': function (_0x255cc5, _0x49cc4b, _0x170468) {
            return _0x255cc5(_0x49cc4b, _0x170468);
        },
        'rnDTM': 'should\x20get\x20credentials\x20from\x20AWS_{stage}_PROFILE\x20environment\x20variable',
        'HpvSb': function (_0x3a6855, _0x15fc9c, _0x23490f) {
            return _0x3a6855(_0x15fc9c, _0x23490f);
        },
        'AuFRu': 'profile\x20with\x20cli\x20and\x20encryption',
        'nrraj': function (_0x4ad971, _0xe20cfb, _0x3f99b0) {
            return _0x4ad971(_0xe20cfb, _0x3f99b0);
        },
        'voPdB': 'should\x20throw\x20an\x20error\x20if\x20a\x20non-existent\x20profile\x20is\x20set',
        'BaTwX': function (_0x76a46d, _0x16d49b) {
            return _0x76a46d(_0x16d49b);
        },
        'UaiMo': 'us-east-1',
        'EuilM': function (_0x576bef, _0x1bce68) {
            return _0x576bef(_0x1bce68);
        },
        'trhHD': 'eu-central-1',
        'ECBHx': function (_0x586890, _0x2319e2) {
            return _0x586890(_0x2319e2);
        },
        'lUHVW': function (_0x5a3913, _0x3cfd58) {
            return _0x5a3913(_0x3cfd58);
        },
        'UDdVW': 'us-west-1',
        'yKvwT': function (_0x20f1ee, _0x2a4f87, _0x596391) {
            return _0x20f1ee(_0x2a4f87, _0x596391);
        },
        'GCTMG': 'should\x20default\x20to\x20\x22us-east-1\x22',
        'LVmeu': 'should\x20allow\x20to\x20override\x20via\x20`provider.region`',
        'bebQb': function (_0x8eb009, _0x3d37a8, _0x1feb43) {
            return _0x8eb009(_0x3d37a8, _0x1feb43);
        },
        'abiSK': 'should\x20allow\x20to\x20override\x20via\x20CLI\x20`--region`\x20param',
        'WkGOb': function (_0x492d4e, _0x27ad75) {
            return _0x492d4e(_0x27ad75);
        },
        'SMJEg': 'test-profile',
        'qrNIn': function (_0x1f9c7a, _0x776c7b) {
            return _0x1f9c7a(_0x776c7b);
        },
        'oiHAA': function (_0x465ace, _0x2d536e) {
            return _0x465ace(_0x2d536e);
        },
        'zYiuV': 'cli-override',
        'aKtLh': function (_0x1aac5c, _0x1809d8) {
            return _0x1aac5c(_0x1809d8);
        },
        'QmqXl': function (_0x424440, _0x3407c2) {
            return _0x424440(_0x3407c2);
        },
        'bBsUX': 'aws-override',
        'JnLoZ': 'should\x20allow\x20to\x20set\x20via\x20`provider.profile`',
        'iNrUC': 'should\x20allow\x20to\x20set\x20via\x20CLI\x20`--profile`\x20param',
        'rFwDo': function (_0x3c89f1, _0x32bc14, _0x7dcd6b) {
            return _0x3c89f1(_0x32bc14, _0x7dcd6b);
        },
        'wcmEV': 'should\x20allow\x20to\x20set\x20via\x20CLI\x20`--aws-profile`\x20param',
        'MPLLW': 'function',
        'yCKED': 'package',
        'HmkOS': function (_0x30519a, _0x5815ff) {
            return _0x30519a(_0x5815ff);
        },
        'YFmxL': 'string',
        'FvFPu': function (_0x93aa61, _0x527c30) {
            return _0x93aa61(_0x527c30);
        },
        'OQoko': 'test-prefix',
        'riONv': function (_0x350f95, _0x454a71, _0x3db7e1) {
            return _0x350f95(_0x454a71, _0x3db7e1);
        },
        'aLLmr': 'should\x20put\x20all\x20artifacts\x20in\x20namespaced\x20folder',
        'nPYwH': 'should\x20support\x20custom\x20namespaced\x20folder',
        'IBAMf': '50dc6c495c0c9188',
        'HBLyv': 'a-prefix',
        'kLZmH': 'index.handler',
        'fUNvR': function (_0x566397, _0xfbee96, _0x14c45a) {
            return _0x566397(_0xfbee96, _0x14c45a);
        },
        'Xdyia': 'should\x20support\x20`provider.alb.targetGroupPrefix`',
        'vDCtg': function (_0x478294, _0x1e2b50) {
            return _0x478294(_0x1e2b50);
        },
        'xlqGv': 'staging',
        'DJgjO': function (_0x404cec, _0x10b5c7) {
            return _0x404cec(_0x10b5c7);
        },
        'guemR': 'dev',
        'DscJZ': 'production',
        'ZxQMt': function (_0x54aaf3, _0x193cc3, _0x5c8ca6) {
            return _0x54aaf3(_0x193cc3, _0x5c8ca6);
        },
        'bOUNR': 'should\x20default\x20to\x20\x22dev\x22',
        'EWLKV': function (_0x17da29, _0x97ff5a, _0x59c497) {
            return _0x17da29(_0x97ff5a, _0x59c497);
        },
        'EjsZP': 'should\x20allow\x20to\x20override\x20via\x20`provider.stage`',
        'tTjwH': 'should\x20allow\x20to\x20override\x20via\x20CLI\x20`--stage`\x20param',
        'ACnHB': function (_0x507578, _0x39d33e) {
            return _0x507578(_0x39d33e);
        },
        'LnNxy': function (_0x3df7f7, _0x4d5ded) {
            return _0x3df7f7(_0x4d5ded);
        },
        'KHDZB': '000000000000.dkr.ecr.sa-east-1.amazonaws.com/test-lambda-docker@sha256:6bb600b4d6e1d7cf521097177dd0c4e9ea373edb91984a505333be8ac9455d38',
        'mLBAT': 'invalidimage',
        'uzdqx': 'code',
        'fDAhK': 'ECR_IMAGE_BOTH_URI_AND_PATH_DEFINED_ERROR',
        'IYipV': function (_0x5e88cd, _0x320289) {
            return _0x5e88cd(_0x320289);
        },
        'GTuGQ': 'ecr',
        'wKxkV': './invalid',
        'OJvYZ': 'DOCKERFILE_NOT_AVAILABLE_ERROR',
        'uhQWo': '000000000000.dkr.ecr.sa-east-1.amazonaws.com/test-lambda-docker:stable',
        'XUybt': '000000000000.dkr.ecr.sa-east-1.amazonaws.com/test-lambda/repo-docker:stable',
        'cpyjX': 'imagewithexplicituri',
        'ioFws': 'imagewithimplicituri',
        'lZPeH': 'fnImage',
        'tgZnw': 'Handler',
        'asMWi': 'Runtime',
        'OaqmS': function (_0x533e35, _0x59c857) {
            return _0x533e35 + _0x59c857;
        },
        'kGMeh': 'sha256:',
        'bIfhW': function (_0x92c191, _0x3f0869, _0x5a6e9a) {
            return _0x92c191(_0x3f0869, _0x5a6e9a);
        },
        'goCeW': 'fnImageWithTag',
        'uXxtg': function (_0x1a55ef, _0x12753a) {
            return _0x1a55ef(_0x12753a);
        },
        'WBWrw': function (_0xeacbb5, _0x2bbfeb) {
            return _0xeacbb5(_0x2bbfeb);
        },
        'kySEG': 'stable',
        'tHXzs': '000000000000',
        'qvFBp': 'test-lambda-docker',
        'oQmPW': '6bb600b4d6e1d7cf521097177dd0c4e9ea373edb91984a505333be8ac9455d38',
        'tipEG': 'sha256:2e6b10a4b1ca0f6d3563a8a1f034dde7c4d7c93b50aa91f24311765d0822186b',
        'TdDIF': function (_0x680a06, _0x473e40, _0x5effa8) {
            return _0x680a06(_0x473e40, _0x5effa8);
        },
        'IsofT': 'should\x20support\x20`functions[].image`\x20with\x20implicit\x20uri\x20with\x20sha',
        'MJRFG': 'should\x20support\x20`functions[].image`\x20with\x20explicit\x20uri\x20with\x20sha',
        'PFPzW': 'should\x20support\x20`functions[].image`\x20with\x20tag',
        'oYKHg': function (_0x23546f, _0xb036e0, _0x33c2c1) {
            return _0x23546f(_0xb036e0, _0x33c2c1);
        },
        'EGSiI': 'should\x20support\x20`functions[].image`\x20with\x20tag\x20and\x20repository\x20name\x20with\x20slash',
        'rVzUc': 'should\x20support\x20`functions[].image`\x20that\x20references\x20provider.ecr.images\x20defined\x20with\x20explicit\x20uri',
        'JnArh': 'should\x20support\x20`functions[].image`\x20that\x20references\x20provider.ecr.images\x20defined\x20with\x20implicit\x20uri',
        'hGBFX': function (_0x9ecdb, _0x56342f) {
            return _0x9ecdb(_0x56342f);
        },
        'FSVJD': 'ECR_IMAGE_NEITHER_URI_NOR_PATH_DEFINED_ERROR',
        'vHmLn': function (_0x2bb9c9, _0x20c645) {
            return _0x2bb9c9(_0x20c645);
        },
        'NisSi': 'undefinedimage',
        'KwHyZ': 'REFERENCED_FUNCTION_IMAGE_NOT_DEFINED_IN_PROVIDER',
        'QAMmG': function (_0x1f02c0, _0x40df69) {
            return _0x1f02c0(_0x40df69);
        },
        'LSfKg': 'baseimage',
        'OrnRQ': 'FUNCTION_IMAGE_BOTH_URI_AND_NAME_DEFINED_ERROR',
        'ImwQj': 'FUNCTION_IMAGE_NEITHER_URI_NOR_NAME_DEFINED_ERROR',
        'wDwBp': 'fnImageWithExplicitUri',
        'WZULk': function (_0x5d6655, _0x3a30df) {
            return _0x5d6655 + _0x3a30df;
        },
        'ygGYf': 'fnImageWithTagAndRepoWithSlashes',
        'aZRgG': 'test-lambda/repo-docker',
        'gMkQG': 'fnProviderImageWithExplicitUri',
        'Fzruq': function (_0xea3af, _0xeb9cb6) {
            return _0xea3af(_0xeb9cb6);
        },
        'XbFkn': function (_0x4397b4, _0x198fd4) {
            return _0x4397b4(_0x198fd4);
        },
        'cEBAl': 'fnProviderImageWithImplicitUri',
        'ixfZH': function (_0x173cc8, _0x8d51) {
            return _0x173cc8(_0x8d51);
        },
        'NciTq': 'foo',
        'KAEiB': function (_0x2631c6, _0x5bcaa7) {
            return _0x2631c6(_0x5bcaa7);
        },
        'TMKUU': function (_0x2797ac, _0x36bdaf) {
            return _0x2797ac(_0x36bdaf);
        },
        'HSqxP': 'docker',
        'zXoRj': '--version',
        'YETuw': 'login',
        'sxKsI': '--username',
        'XzqAi': 'AWS',
        'fKcom': '--password',
        'WuPGd': 'dockerauthtoken',
        'cTwkH': 'build',
        'FcbhL': 'Dockerfile',
        'IvoYY': 'tag',
        'EEHEk': function (_0xbbfb96, _0x567dca) {
            return _0xbbfb96(_0x567dca);
        },
        'zlifw': 'push',
        'HqEdP': 'RepositoryNotFoundException',
        'fXHva': function (_0x56f3bd, _0x4bf3be) {
            return _0x56f3bd(_0x4bf3be);
        },
        'YmQas': 'Dockerfile.dev',
        'ItvXF': function (_0x2f7c35, _0x1a450b) {
            return _0x2f7c35(_0x1a450b);
        },
        'ngNUD': function (_0x4f503f, _0x259324) {
            return _0x4f503f(_0x259324);
        },
        'vLBty': function (_0x6172f8, _0x1be68c) {
            return _0x6172f8(_0x1be68c);
        },
        'bDoPq': 'no\x20basic\x20auth\x20credentials',
        'lnObB': function (_0x57a761, _0xfbbadd, _0x4b2a47) {
            return _0x57a761(_0xfbbadd, _0x4b2a47);
        },
        'xjxMk': function (_0x1f192d, _0x1a834d) {
            return _0x1f192d(_0x1a834d);
        },
        'vTYkq': function (_0x485f24, _0x363e7e) {
            return _0x485f24(_0x363e7e);
        },
        'bybuj': function (_0x3bd42c, _0x1c8c4f) {
            return _0x3bd42c(_0x1c8c4f);
        },
        'yDVGQ': 'DOCKER_COMMAND_NOT_AVAILABLE',
        'tkqKJ': 'DOCKER_BUILD_ERROR',
        'wkFkd': 'DOCKER_PUSH_ERROR',
        'rxUGB': 'authorization\x20token\x20has\x20expired',
        'nVsEx': 'your\x20password\x20will\x20be\x20stored\x20unencrypted',
        'mJddj': 'WARNING:\x20Docker\x20authentication\x20token\x20will\x20be\x20stored\x20unencrypted\x20in\x20docker\x20config.',
        'TYazz': function (_0x1426be, _0x3b4dae) {
            return _0x1426be(_0x3b4dae);
        },
        'Awfry': function (_0x3909af, _0x1d14be) {
            return _0x3909af(_0x1d14be);
        },
        'AQYGJ': 'my-image:latest',
        'HTUiP': '--cache-from',
        'wfosC': 'TESTVAL',
        'wNtnT': '--build-arg',
        'MAbGi': 'TESTKEY=TESTVAL',
        'Apabn': 'DOCKER_TAG_ERROR',
        'mQaDG': 'DOCKER_LOGIN_ERROR',
        'nDWCp': '999999999999.dkr.ecr.sa-east-1.amazonaws.com/test-lambda-docker',
        'EGMtE': 'YXdzOmRvY2tlcmF1dGh0b2tlbg==',
        'BmnDu': 'ffffffff-ffff-ffff-ffff-ffffffffffff',
        'Oghfx': 'XXXXXXXXXXXXXXXXXXXXX',
        'PCimA': '999999999999',
        'dXvct': 'arn:aws:iam::999999999999:user/test',
        'FuDSC': 'should\x20work\x20correctly\x20when\x20repository\x20exists\x20beforehand',
        'BXPPp': 'should\x20work\x20correctly\x20when\x20repository\x20does\x20not\x20exist\x20beforehand\x20and\x20scanOnPush\x20is\x20set',
        'jOyQH': 'should\x20work\x20correctly\x20when\x20repository\x20does\x20not\x20exist\x20beforehand',
        'ixSWR': function (_0x205d7b, _0x2a27fc, _0x56c812) {
            return _0x205d7b(_0x2a27fc, _0x56c812);
        },
        'NpacS': 'should\x20login\x20and\x20retry\x20when\x20docker\x20push\x20fails\x20with\x20no\x20basic\x20auth\x20credentials\x20error',
        'ZkBpl': 'should\x20login\x20and\x20retry\x20when\x20docker\x20push\x20fails\x20with\x20token\x20has\x20expired\x20error',
        'jWTzv': function (_0x3f7808, _0x21a8d5, _0x20fdaf) {
            return _0x3f7808(_0x21a8d5, _0x20fdaf);
        },
        'zPqee': 'should\x20emit\x20warning\x20if\x20docker\x20login\x20stores\x20unencrypted\x20credentials',
        'Xvfzd': function (_0x23468d, _0x48fff9, _0x26c2e4) {
            return _0x23468d(_0x48fff9, _0x26c2e4);
        },
        'MgenX': 'should\x20work\x20correctly\x20when\x20image\x20is\x20defined\x20with\x20implicit\x20path\x20in\x20provider',
        'aFBGN': 'should\x20work\x20correctly\x20when\x20image\x20is\x20defined\x20with\x20`file`\x20set',
        'DTmHJ': 'should\x20work\x20correctly\x20when\x20image\x20is\x20defined\x20with\x20`cacheFrom`\x20set',
        'JBWwD': 'should\x20work\x20correctly\x20when\x20image\x20is\x20defined\x20with\x20`buildArgs`\x20set',
        'AYPoo': 'should\x20work\x20correctly\x20when\x20`functions[].image`\x20is\x20defined\x20with\x20explicit\x20name',
        'XrMkM': 'should\x20fail\x20when\x20docker\x20command\x20is\x20not\x20available',
        'BqSwg': 'should\x20fail\x20when\x20docker\x20build\x20fails',
        'Dzxez': 'should\x20fail\x20when\x20docker\x20tag\x20fails',
        'jfNrf': 'should\x20fail\x20when\x20docker\x20push\x20fails',
        'AuwKp': 'should\x20fail\x20when\x20docker\x20login\x20fails',
        'uSGsw': 'should\x20fail\x20if\x20`functions[].image`\x20references\x20image\x20with\x20both\x20path\x20and\x20uri',
        'tFtop': function (_0x401103, _0x35af52, _0x4bc2bc) {
            return _0x401103(_0x35af52, _0x4bc2bc);
        },
        'kPkGN': 'should\x20fail\x20if\x20`functions[].image`\x20references\x20image\x20without\x20path\x20and\x20uri',
        'IdObp': 'should\x20fail\x20if\x20`functions[].image`\x20references\x20image\x20from\x20`provider.ecr.images`\x20that\x20has\x20invalid\x20path',
        'tctcx': function (_0x2fc16b, _0x30fce6, _0x54626e) {
            return _0x2fc16b(_0x30fce6, _0x54626e);
        },
        'KXjys': 'should\x20fail\x20if\x20`functions[].image`\x20references\x20image\x20not\x20defined\x20in\x20`provider.ecr.images`',
        'JKfqp': function (_0x4ce9db, _0xa9150d, _0x12a0b4) {
            return _0x4ce9db(_0xa9150d, _0x12a0b4);
        },
        'OzSmJ': 'should\x20fail\x20if\x20both\x20uri\x20and\x20name\x20is\x20provided\x20for\x20an\x20image',
        'MVlkW': function (_0x3b2624, _0x1a7108, _0x241d13) {
            return _0x3b2624(_0x1a7108, _0x241d13);
        },
        'hjGGv': 'should\x20fail\x20if\x20neither\x20uri\x20nor\x20name\x20is\x20provided\x20for\x20an\x20image',
        'aGaCS': 'with\x20`functions[].image`\x20referencing\x20existing\x20images',
        'deWpp': function (_0xfd2034, _0x15275e, _0xb788ad) {
            return _0xfd2034(_0x15275e, _0xb788ad);
        },
        'UNlby': 'with\x20`functions[].image`\x20referencing\x20images\x20that\x20require\x20building',
        'GuRry': '#getProviderName\x20and\x20#sessionCache',
        'TDUNT': '#getCredentials()',
        'tXXam': '#getRegion()',
        'pHEzF': '#getProfile()',
        'UddNw': '#getDeploymentPrefix()',
        'VlGub': '#getAlbTargetGroupPrefix()',
        'kYzlA': '#getStage()',
        'uOocw': function (_0xcc614d, _0x1fb1d7, _0x18fa5b) {
            return _0xcc614d(_0x1fb1d7, _0x18fa5b);
        },
        'gQQyZ': 'when\x20resolving\x20images'
    };
    _0x5416c4['deWpp'](describe, _0x5416c4['GuRry'], () => {
        const _0x5e3159 = {
            'TMGFB': _0x5416c4['RILMY'],
            'drmPF': _0x5416c4['blffn'],
            'wPgDY': _0x5416c4['YWwPn'],
            'gKQgo': _0x5416c4['qGQPn'],
            'OqVeG': function (_0x250587, _0x40f56b) {
                return _0x5416c4['DOhWj'](_0x250587, _0x40f56b);
            },
            'EsmaP': _0x5416c4['ZAdSI'],
            'jDQhy': _0x5416c4['lHbkV'],
            'DUzCF': function (_0x5dfcce, _0x5d5fc4) {
                return _0x5416c4['VvAVN'](_0x5dfcce, _0x5d5fc4);
            },
            'WpOjB': function (_0x16e23a, _0x3e94c7) {
                return _0x5416c4['VvAVN'](_0x16e23a, _0x3e94c7);
            },
            'CKMvy': _0x5416c4['wMRUC'],
            'IHJse': _0x5416c4['WqoGi'],
            'UeRuz': function (_0x444389, _0x10dbf0) {
                return _0x5416c4['RBDhF'](_0x444389, _0x10dbf0);
            }
        };
        let _0x38310b;
        const _0xcca70f = _0x5416c4['pZUwZ'];
        _0x5416c4['UKRJL'](before, async () => {
            class _0x160b2d {
                constructor(_0x109f76) {
                    this['credentials'] = _0x109f76, this['credentials']['credentials']['sessionToken'] = _0xcca70f;
                }
                ['describeStacks']() {
                    return {
                        'promise': async () => {
                        }
                    };
                }
            }
            class _0x2f7da8 {
                constructor() {
                    this['sessionToken'] = _0x5e3159['TMGFB'], this['accessKeyId'] = _0x5e3159['drmPF'], this['secretAccessKey'] = _0x5e3159['wPgDY'];
                }
            }
            class _0x53d63a {
                constructor() {
                    this['sessionToken'] = _0x5e3159['gKQgo'], this['accessKeyId'] = _0x5e3159['drmPF'], this['secretAccessKey'] = _0x5e3159['wPgDY'];
                }
            }
            class _0x2ff7e4 {
            }
            const _0x285846 = {
                    'aws-sdk': {
                        'SharedIniFileCredentials': _0x2f7da8,
                        'EnvironmentCredentials': _0x53d63a,
                        'CloudFormation': _0x160b2d
                    },
                    'aws-sdk/lib/metadata_service': _0x2ff7e4
                }, {serverless: _0xae792} = await _0x5e3159['OqVeG'](runServerless, {
                    'fixture': _0x5e3159['EsmaP'],
                    'command': _0x5e3159['jDQhy'],
                    'modulesCacheStub': _0x285846
                });
            _0x38310b = _0xae792;
        }), _0x5416c4['IEQHK'](it, _0x5416c4['cHMSU'], () => {
            _0x5e3159['DUzCF'](expect, AwsProvider['getProviderName']())['to']['equal'](_0x5e3159['EsmaP']);
        }), _0x5416c4['epPsv'](it, _0x5416c4['AjiwM'], async () => {
            _0x5e3159['WpOjB'](expect, _0x38310b['getProvider'](_0x5e3159['EsmaP'])['getCredentials']()['credentials']['sessionToken'])['not']['to']['equal'](_0xcca70f), await _0x38310b['getProvider'](_0x5e3159['EsmaP'])['request'](_0x5e3159['CKMvy'], _0x5e3159['IHJse']), _0x5e3159['UeRuz'](expect, _0x38310b['getProvider'](_0x5e3159['EsmaP'])['getCredentials']()['credentials']['sessionToken'])['to']['equal'](_0xcca70f);
        });
    }), _0x5416c4['deWpp'](describe, _0x5416c4['TDUNT'], () => {
        const _0x5ad698 = {
            'npTOA': function (_0x304d58, _0x3fed17) {
                return _0x5416c4['DgDUV'](_0x304d58, _0x3fed17);
            },
            'kTtEQ': _0x5416c4['NqPDu'],
            'ajUAr': _0x5416c4['JVomC'],
            'uoutZ': _0x5416c4['ihPQw'],
            'TUTmx': _0x5416c4['krwdN'],
            'csHfd': _0x5416c4['ZAdSI'],
            'mntXD': _0x5416c4['lHbkV'],
            'vTfgX': function (_0x15ce5c, _0x25fc94) {
                return _0x5416c4['DgDUV'](_0x15ce5c, _0x25fc94);
            },
            'UyPMs': function (_0x276d3b, _0x498a5a) {
                return _0x5416c4['DgDUV'](_0x276d3b, _0x498a5a);
            },
            'sRgYp': _0x5416c4['txBuU'],
            'PEQds': function (_0x94c7db, _0x4d938e) {
                return _0x5416c4['lEoUO'](_0x94c7db, _0x4d938e);
            },
            'nIEiF': _0x5416c4['bhStD'],
            'nrPQE': function (_0x4cee89, _0x3e0fdc) {
                return _0x5416c4['BoAav'](_0x4cee89, _0x3e0fdc);
            },
            'ryJmK': _0x5416c4['nKkGd'],
            'XxilQ': function (_0x4c104d, _0x5b9364) {
                return _0x5416c4['BoAav'](_0x4c104d, _0x5b9364);
            },
            'VVthO': _0x5416c4['DPtWT'],
            'RpXgV': _0x5416c4['epdqE'],
            'ZKMRQ': function (_0x2bbbc2, _0x3cf645) {
                return _0x5416c4['yrYua'](_0x2bbbc2, _0x3cf645);
            },
            'BFRST': _0x5416c4['wCNBu'],
            'AeCOv': function (_0x15bd22, _0x4e241b) {
                return _0x5416c4['yrYua'](_0x15bd22, _0x4e241b);
            },
            'SLrUp': _0x5416c4['oCjTm'],
            'YJwkx': function (_0x4edef7, _0x1223ff) {
                return _0x5416c4['LLPRJ'](_0x4edef7, _0x1223ff);
            }
        };
        _0x5416c4['LLPRJ'](before, async () => {
            await fs['ensureDir'](path['resolve'](os['homedir'](), _0x5416c4['SGQiM'])), await fs['outputFile'](path['resolve'](os['homedir'](), _0x5416c4['sRORU']), '\x0a[default]\x0aaws_access_key_id\x20=\x20DEFAULTKEYID\x0aaws_secret_access_key\x20=\x20DEFAULTSECRET\x0a\x0a[notDefault]\x0aaws_access_key_id\x20=\x20NOTDEFAULTKEYID\x0aaws_secret_access_key\x20=\x20NOTDEFAULTSECRET\x0a\x0a[notDefaultWithRole]\x0asource_profile\x20=\x20notDefault\x0arole_arn\x20=\x20NOTDEFAULTWITHROLEROLE\x0a', { 'flag': 'w+' });
        }), _0x5416c4['KNjlq'](it, _0x5416c4['FJHpY'], async () => {
            const {serverless: _0x16d05c} = await _0x5416c4['UKRJL'](runServerless, {
                    'fixture': _0x5416c4['ZAdSI'],
                    'command': _0x5416c4['lHbkV']
                }), _0x17336a = _0x16d05c['getProvider'](_0x5416c4['ZAdSI'])['getCredentials']();
            _0x5416c4['FmEHQ'](expect, _0x17336a['credentials']['accessKeyId'])['to']['equal'](_0x5416c4['EoIUv']);
        }), _0x5416c4['aIuln'](it, _0x5416c4['rbWwt'], async () => {
            const _0x12c5b1 = {
                    'aHItD': _0x5416c4['DPtWT'],
                    'uXOkH': _0x5416c4['ZAdSI']
                }, {serverless: _0x19f010} = await _0x5416c4['KaMnu'](runServerless, {
                    'fixture': _0x5416c4['ZAdSI'],
                    'command': _0x5416c4['lHbkV']
                });
            let _0x12e2b8;
            _0x5416c4['KaMnu'](overrideEnv, () => {
                process['env']['AWS_DEFAULT_PROFILE'] = _0x12c5b1['aHItD'], _0x12e2b8 = _0x19f010['getProvider'](_0x12c5b1['uXOkH'])['getCredentials']();
            }), _0x5416c4['cLqNz'](expect, _0x12e2b8['credentials']['accessKeyId'])['to']['equal'](_0x5416c4['wCNBu']);
        }), _0x5416c4['TsIXd'](describe, _0x5416c4['AInMj'], () => {
            const _0xa6b2d = {
                'QmzlM': function (_0x530775, _0x10d9a3) {
                    return _0x5416c4['cLqNz'](_0x530775, _0x10d9a3);
                },
                'tjVID': _0x5416c4['ZAdSI'],
                'oVlxJ': _0x5416c4['lHbkV'],
                'LMOhw': _0x5416c4['NqPDu']
            };
            let _0x127ef6;
            _0x5416c4['cLqNz'](before, async () => {
                const {serverless: _0x35a659} = await _0xa6b2d['QmzlM'](runServerless, {
                    'fixture': _0xa6b2d['tjVID'],
                    'command': _0xa6b2d['oVlxJ'],
                    'configExt': { 'provider': { 'profile': _0xa6b2d['LMOhw'] } }
                });
                _0x127ef6 = _0x35a659['getProvider'](_0xa6b2d['tjVID'])['getCredentials']();
            }), _0x5416c4['epPsv'](it, _0x5416c4['awHlk'], () => {
                _0x5ad698['npTOA'](expect, _0x127ef6['credentials']['profile'])['to']['equal'](_0x5ad698['kTtEQ']);
            }), _0x5416c4['RUUim'](it, _0x5416c4['AWwHK'], () => {
                _0x5ad698['npTOA'](expect, _0x127ef6['credentials']['roleArn'])['to']['equal'](_0x5ad698['ajUAr']);
            });
        }), _0x5416c4['QDhac'](it, _0x5416c4['xVBBX'], async () => {
            const _0x566dd6 = {
                    'TNvfS': _0x5ad698['uoutZ'],
                    'oZomj': _0x5ad698['TUTmx'],
                    'oegVe': _0x5ad698['csHfd']
                }, {serverless: _0x2592ed} = await _0x5ad698['npTOA'](runServerless, {
                    'fixture': _0x5ad698['csHfd'],
                    'command': _0x5ad698['mntXD']
                });
            let _0x232969;
            _0x5ad698['vTfgX'](overrideEnv, () => {
                process['env']['AWS_ACCESS_KEY_ID'] = _0x566dd6['TNvfS'], process['env']['AWS_SECRET_ACCESS_KEY'] = _0x566dd6['oZomj'], _0x232969 = _0x2592ed['getProvider'](_0x566dd6['oegVe'])['getCredentials']();
            }), _0x5ad698['UyPMs'](expect, _0x232969['credentials']['accessKeyId'])['to']['equal'](_0x5ad698['uoutZ']);
        }), _0x5416c4['umwYp'](describe, _0x5416c4['VwXrj'], () => {
            const _0x2bb017 = {
                'MVDuD': _0x5416c4['bhStD'],
                'BfKrS': _0x5416c4['txBuU'],
                'adjaP': _0x5416c4['ZAdSI'],
                'Zmrkk': function (_0x52ec78, _0x116dba) {
                    return _0x5416c4['cLqNz'](_0x52ec78, _0x116dba);
                },
                'bdwKR': _0x5416c4['lHbkV']
            };
            let _0x498242;
            _0x5416c4['cLqNz'](before, async () => {
                await fs['outputFile'](path['resolve'](os['homedir'](), _0x2bb017['BfKrS']), '\x0a[default]\x0aaws_access_key_id\x20=\x20DEFAULTKEYID\x0aaws_secret_access_key\x20=\x20DEFAULTSECRET\x0a\x0a[customProfile]\x0aaws_access_key_id\x20=\x20CUSTOMKEYID\x0aaws_secret_access_key\x20=\x20CUSTOMSECRET\x0a', { 'flag': 'w+' });
                const {serverless: _0x54af1f} = await _0x2bb017['Zmrkk'](runServerless, {
                    'fixture': _0x2bb017['adjaP'],
                    'command': _0x2bb017['bdwKR']
                });
                _0x2bb017['Zmrkk'](overrideEnv, () => {
                    process['env']['AWS_PROFILE'] = _0x2bb017['MVDuD'], process['env']['AWS_SHARED_CREDENTIALS_FILE'] = path['resolve'](os['homedir'](), _0x2bb017['BfKrS'])['toString'](), _0x498242 = _0x54af1f['getProvider'](_0x2bb017['adjaP'])['getCredentials']();
                });
            }), _0x5416c4['pDOfU'](after, async () => {
                await fs['remove'](path['resolve'](os['homedir'](), _0x5ad698['sRgYp']));
            }), _0x5416c4['jUUUR'](it, _0x5416c4['heGlV'], () => {
                _0x5ad698['PEQds'](expect, _0x498242['credentials']['profile'])['to']['equal'](_0x5ad698['nIEiF']);
            }), _0x5416c4['jUUUR'](it, _0x5416c4['eSgZB'], () => {
                _0x5ad698['nrPQE'](expect, _0x498242['credentials']['accessKeyId'])['to']['equal'](_0x5ad698['ryJmK']);
            });
        }), _0x5416c4['BdzVw'](it, _0x5416c4['CQdWU'], async () => {
            const _0x3798cb = {
                    'iSviU': _0x5416c4['KRRjx'],
                    'oBbai': _0x5416c4['GRYJw'],
                    'QobwP': _0x5416c4['ZAdSI']
                }, {serverless: _0x8b69f3} = await _0x5416c4['sufsq'](runServerless, {
                    'fixture': _0x5416c4['ZAdSI'],
                    'command': _0x5416c4['lHbkV'],
                    'configExt': { 'provider': { 'stage': _0x5416c4['vcRpL'] } }
                });
            let _0xad3286;
            _0x5416c4['sufsq'](overrideEnv, () => {
                process['env']['AWS_TESTSTAGE_ACCESS_KEY_ID'] = _0x3798cb['iSviU'], process['env']['AWS_TESTSTAGE_SECRET_ACCESS_KEY'] = _0x3798cb['oBbai'], _0xad3286 = _0x8b69f3['getProvider'](_0x3798cb['QobwP'])['getCredentials']();
            }), _0x5416c4['sufsq'](expect, _0xad3286['credentials']['accessKeyId'])['to']['equal'](_0x5416c4['KRRjx']);
        }), _0x5416c4['ohBBD'](it, _0x5416c4['rnDTM'], async () => {
            const _0x479207 = {
                    'jTSwS': _0x5416c4['DPtWT'],
                    'stSue': _0x5416c4['ZAdSI']
                }, {serverless: _0x18dcb6} = await _0x5416c4['sufsq'](runServerless, {
                    'fixture': _0x5416c4['ZAdSI'],
                    'command': _0x5416c4['lHbkV'],
                    'configExt': { 'provider': { 'stage': _0x5416c4['vcRpL'] } }
                });
            let _0x28ffdc;
            _0x5416c4['sufsq'](overrideEnv, () => {
                process['env']['AWS_TESTSTAGE_PROFILE'] = _0x479207['jTSwS'], _0x28ffdc = _0x18dcb6['getProvider'](_0x479207['stSue'])['getCredentials']();
            }), _0x5416c4['sufsq'](expect, _0x28ffdc['credentials']['accessKeyId'])['to']['equal'](_0x5416c4['wCNBu']);
        }), _0x5416c4['HpvSb'](describe, _0x5416c4['AuFRu'], () => {
            let _0x36bdf1;
            _0x5416c4['sufsq'](before, async () => {
                const {serverless: _0x51de30} = await _0x5ad698['XxilQ'](runServerless, {
                    'fixture': _0x5ad698['csHfd'],
                    'command': _0x5ad698['mntXD'],
                    'options': { 'aws-profile': _0x5ad698['VVthO'] },
                    'configExt': { 'provider': { 'deploymentBucket': { 'serverSideEncryption': _0x5ad698['RpXgV'] } } }
                });
                _0x36bdf1 = _0x51de30['getProvider'](_0x5ad698['csHfd'])['getCredentials']();
            }), _0x5416c4['laSpT'](it, _0x5416c4['kpuYD'], () => {
                _0x5ad698['ZKMRQ'](expect, _0x36bdf1['credentials']['accessKeyId'])['to']['equal'](_0x5ad698['BFRST']);
            }), _0x5416c4['Zrnvi'](it, _0x5416c4['xqNCT'], () => {
                _0x5ad698['AeCOv'](expect, _0x36bdf1['signatureVersion'])['to']['equal']('v4');
            });
        }), _0x5416c4['nrraj'](it, _0x5416c4['voPdB'], async () => {
            const {serverless: _0x453670} = await _0x5ad698['AeCOv'](runServerless, {
                'fixture': _0x5ad698['csHfd'],
                'command': _0x5ad698['mntXD'],
                'options': { 'aws-profile': _0x5ad698['SLrUp'] }
            });
            _0x5ad698['YJwkx'](expect, () => _0x453670['getProvider']('aws')['getCredentials']())['to']['throw'](Error);
        });
    }), _0x5416c4['deWpp'](describe, _0x5416c4['tXXam'], () => {
        const _0x350f91 = {
            'ehdkY': function (_0x28e1ed, _0x179856) {
                return _0x5416c4['lUHVW'](_0x28e1ed, _0x179856);
            },
            'QyHPi': _0x5416c4['ZAdSI'],
            'QndZn': _0x5416c4['lHbkV'],
            'BvTGK': _0x5416c4['UDdVW'],
            'qViUY': _0x5416c4['trhHD']
        };
        _0x5416c4['yKvwT'](it, _0x5416c4['GCTMG'], async () => {
            const {serverless: _0x4a106f} = await _0x5416c4['BaTwX'](runServerless, {
                'fixture': _0x5416c4['ZAdSI'],
                'command': _0x5416c4['lHbkV']
            });
            _0x5416c4['BaTwX'](expect, _0x4a106f['getProvider'](_0x5416c4['ZAdSI'])['getRegion']())['to']['equal'](_0x5416c4['UaiMo']);
        }), _0x5416c4['yKvwT'](it, _0x5416c4['LVmeu'], async () => {
            const {serverless: _0x5e65f4} = await _0x5416c4['EuilM'](runServerless, {
                'fixture': _0x5416c4['ZAdSI'],
                'command': _0x5416c4['lHbkV'],
                'configExt': { 'provider': { 'region': _0x5416c4['trhHD'] } }
            });
            _0x5416c4['ECBHx'](expect, _0x5e65f4['getProvider'](_0x5416c4['ZAdSI'])['getRegion']())['to']['equal'](_0x5416c4['trhHD']);
        }), _0x5416c4['bebQb'](it, _0x5416c4['abiSK'], async () => {
            const {serverless: _0x2e04be} = await _0x350f91['ehdkY'](runServerless, {
                'fixture': _0x350f91['QyHPi'],
                'command': _0x350f91['QndZn'],
                'options': { 'region': _0x350f91['BvTGK'] },
                'configExt': { 'provider': { 'region': _0x350f91['qViUY'] } }
            });
            _0x350f91['ehdkY'](expect, _0x2e04be['getProvider'](_0x350f91['QyHPi'])['getRegion']())['to']['equal'](_0x350f91['BvTGK']);
        });
    }), _0x5416c4['deWpp'](describe, _0x5416c4['pHEzF'], () => {
        const _0x524774 = {
            'lKRsc': function (_0x9c96f1, _0x158ecd) {
                return _0x5416c4['QmqXl'](_0x9c96f1, _0x158ecd);
            },
            'lIXSh': _0x5416c4['ZAdSI'],
            'AyVIZ': _0x5416c4['lHbkV'],
            'olvZo': _0x5416c4['zYiuV'],
            'dtctT': _0x5416c4['bBsUX'],
            'stgyL': _0x5416c4['SMJEg'],
            'CHvom': function (_0x1b3ccc, _0x9b70ad) {
                return _0x5416c4['QmqXl'](_0x1b3ccc, _0x9b70ad);
            }
        };
        _0x5416c4['bebQb'](it, _0x5416c4['JnLoZ'], async () => {
            const {serverless: _0x7282f4} = await _0x5416c4['WkGOb'](runServerless, {
                'fixture': _0x5416c4['ZAdSI'],
                'command': _0x5416c4['lHbkV'],
                'configExt': { 'provider': { 'profile': _0x5416c4['SMJEg'] } }
            });
            _0x5416c4['qrNIn'](expect, _0x7282f4['getProvider'](_0x5416c4['ZAdSI'])['getProfile']())['to']['equal'](_0x5416c4['SMJEg']);
        }), _0x5416c4['bebQb'](it, _0x5416c4['iNrUC'], async () => {
            const {serverless: _0x4d914f} = await _0x5416c4['oiHAA'](runServerless, {
                'fixture': _0x5416c4['ZAdSI'],
                'command': _0x5416c4['lHbkV'],
                'options': { 'profile': _0x5416c4['zYiuV'] },
                'configExt': { 'provider': { 'profile': _0x5416c4['SMJEg'] } }
            });
            _0x5416c4['aKtLh'](expect, _0x4d914f['getProvider'](_0x5416c4['ZAdSI'])['getProfile']())['to']['equal'](_0x5416c4['zYiuV']);
        }), _0x5416c4['rFwDo'](it, _0x5416c4['wcmEV'], async () => {
            const {serverless: _0x12867c} = await _0x524774['lKRsc'](runServerless, {
                'fixture': _0x524774['lIXSh'],
                'command': _0x524774['AyVIZ'],
                'options': {
                    'profile': _0x524774['olvZo'],
                    'aws-profile': _0x524774['dtctT']
                },
                'configExt': { 'provider': { 'profile': _0x524774['stgyL'] } }
            });
            _0x524774['CHvom'](expect, _0x12867c['getProvider'](_0x524774['lIXSh'])['getProfile']())['to']['equal'](_0x524774['dtctT']);
        });
    }), _0x5416c4['deWpp'](describe, _0x5416c4['UddNw'], () => {
        const _0x144732 = {
            'kxLhY': function (_0x5de88b, _0x293f9c) {
                return _0x5416c4['FvFPu'](_0x5de88b, _0x293f9c);
            },
            'TsHrs': _0x5416c4['MPLLW'],
            'ZtCcA': _0x5416c4['yCKED'],
            'IXkPB': _0x5416c4['OQoko'],
            'fuhZW': _0x5416c4['YFmxL']
        };
        _0x5416c4['riONv'](it, _0x5416c4['aLLmr'], async () => {
            const {cfTemplate: _0xe70fb7} = await _0x5416c4['QmqXl'](runServerless, {
                    'fixture': _0x5416c4['MPLLW'],
                    'command': _0x5416c4['yCKED']
                }), _0x58290a = Object['values'](_0xe70fb7['Resources'])['filter'](_0x34d2a6 => _0x34d2a6['Type'] === 'AWS::Lambda::Function');
            _0x5416c4['QmqXl'](expect, _0x58290a['length'])['to']['be']['greaterThanOrEqual'](0x1);
            for (const _0x4b89a8 of _0x58290a) {
                _0x5416c4['HmkOS'](expect, _0x4b89a8['Properties']['Code']['S3Key'])['to']['be']['a'](_0x5416c4['YFmxL'])['and']['satisfy'](_0x238910 => _0x238910['startsWith']('serverless/'));
            }
        }), _0x5416c4['riONv'](it, _0x5416c4['nPYwH'], async () => {
            const {cfTemplate: _0x51502e} = await _0x144732['kxLhY'](runServerless, {
                    'fixture': _0x144732['TsHrs'],
                    'command': _0x144732['ZtCcA'],
                    'configExt': { 'provider': { 'deploymentPrefix': _0x144732['IXkPB'] } }
                }), _0xdb2a9f = Object['values'](_0x51502e['Resources'])['filter'](_0x1877f6 => _0x1877f6['Type'] === 'AWS::Lambda::Function');
            _0x144732['kxLhY'](expect, _0xdb2a9f['length'])['to']['be']['greaterThanOrEqual'](0x1);
            for (const _0x3f8b28 of _0xdb2a9f) {
                _0x144732['kxLhY'](expect, _0x3f8b28['Properties']['Code']['S3Key'])['to']['be']['a'](_0x144732['fuhZW'])['and']['satisfy'](_0x4a6749 => _0x4a6749['startsWith']('test-prefix/'));
            }
        });
    }), _0x5416c4['deWpp'](describe, _0x5416c4['VlGub'], () => {
        const _0x48f263 = {
            'kbqLm': _0x5416c4['IBAMf'],
            'Avvee': function (_0x55bdaa, _0x38ca8d) {
                return _0x5416c4['FvFPu'](_0x55bdaa, _0x38ca8d);
            },
            'zqtOk': _0x5416c4['MPLLW'],
            'CvdIH': _0x5416c4['yCKED'],
            'FcVIj': _0x5416c4['HBLyv'],
            'KZhQU': _0x5416c4['kLZmH'],
            'aLSUI': _0x5416c4['YFmxL']
        };
        _0x5416c4['fUNvR'](it, _0x5416c4['Xdyia'], async () => {
            const _0x174f9f = _0x48f263['kbqLm'], _0x46082f = {
                    'listenerArn': 'arn:aws:elasticloadbalancing:us-east-1:123456789012:listener/app/my-load-balancer/' + _0x174f9f + '/f2f7dc8efc522ab2',
                    'conditions': { 'path': '/' }
                }, {cfTemplate: _0x3edd5a} = await _0x48f263['Avvee'](runServerless, {
                    'fixture': _0x48f263['zqtOk'],
                    'command': _0x48f263['CvdIH'],
                    'configExt': {
                        'provider': { 'alb': { 'targetGroupPrefix': _0x48f263['FcVIj'] } },
                        'functions': {
                            'fnTargetGroupName': {
                                'handler': _0x48f263['KZhQU'],
                                'events': [{
                                        'alb': {
                                            ..._0x46082f,
                                            'priority': 0x1
                                        }
                                    }]
                            }
                        }
                    }
                }), _0x9de1f4 = Object['values'](_0x3edd5a['Resources'])['filter'](_0x10ba4e => _0x10ba4e['Type'] === 'AWS::ElasticLoadBalancingV2::TargetGroup');
            _0x48f263['Avvee'](expect, _0x9de1f4['length'])['to']['be']['greaterThanOrEqual'](0x1);
            for (const _0x5a015a of _0x9de1f4) {
                _0x48f263['Avvee'](expect, _0x5a015a['Properties']['Name'])['to']['be']['a'](_0x48f263['aLSUI'])['and']['satisfy'](_0x48c79b => _0x48c79b['startsWith']('a-prefix'));
            }
        });
    }), _0x5416c4['deWpp'](describe, _0x5416c4['kYzlA'], () => {
        const _0x41a594 = {
            'SwZjs': function (_0x5f4a42, _0x14f90f) {
                return _0x5416c4['DJgjO'](_0x5f4a42, _0x14f90f);
            },
            'ejODW': _0x5416c4['ZAdSI'],
            'DcZNw': _0x5416c4['lHbkV'],
            'iCKrw': _0x5416c4['guemR'],
            'YOgNA': _0x5416c4['DscJZ'],
            'xLsHd': _0x5416c4['xlqGv']
        };
        _0x5416c4['ZxQMt'](it, _0x5416c4['bOUNR'], async () => {
            const {serverless: _0x131d0c} = await _0x41a594['SwZjs'](runServerless, {
                'fixture': _0x41a594['ejODW'],
                'command': _0x41a594['DcZNw']
            });
            _0x41a594['SwZjs'](expect, _0x131d0c['getProvider'](_0x41a594['ejODW'])['getStage']())['to']['equal'](_0x41a594['iCKrw']);
        }), _0x5416c4['EWLKV'](it, _0x5416c4['EjsZP'], async () => {
            const {serverless: _0x1a9119} = await _0x5416c4['vDCtg'](runServerless, {
                'fixture': _0x5416c4['ZAdSI'],
                'command': _0x5416c4['lHbkV'],
                'configExt': { 'provider': { 'stage': _0x5416c4['xlqGv'] } }
            });
            _0x5416c4['DJgjO'](expect, _0x1a9119['getProvider'](_0x5416c4['ZAdSI'])['getStage']())['to']['equal'](_0x5416c4['xlqGv']);
        }), _0x5416c4['EWLKV'](it, _0x5416c4['tTjwH'], async () => {
            const {serverless: _0x4e8271} = await _0x41a594['SwZjs'](runServerless, {
                'fixture': _0x41a594['ejODW'],
                'command': _0x41a594['DcZNw'],
                'options': { 'stage': _0x41a594['YOgNA'] },
                'configExt': { 'provider': { 'stage': _0x41a594['xLsHd'] } }
            });
            _0x41a594['SwZjs'](expect, _0x4e8271['getProvider'](_0x41a594['ejODW'])['getStage']())['to']['equal'](_0x41a594['YOgNA']);
        });
    }), _0x5416c4['uOocw'](describe, _0x5416c4['gQQyZ'], () => {
        const _0xcb1428 = {
            'GKMeM': function (_0x43aef2, _0x26cddb) {
                return _0x5416c4['hGBFX'](_0x43aef2, _0x26cddb);
            },
            'aqtWI': function (_0x18dd52, _0x1a4f0b) {
                return _0x5416c4['hGBFX'](_0x18dd52, _0x1a4f0b);
            },
            'BAglP': _0x5416c4['MPLLW'],
            'MNRUN': _0x5416c4['yCKED'],
            'PsSHv': _0x5416c4['mLBAT'],
            'QIJkn': _0x5416c4['uzdqx'],
            'fJvnt': _0x5416c4['FSVJD'],
            'MNlzV': function (_0x1e8a31, _0x4b8519) {
                return _0x5416c4['vHmLn'](_0x1e8a31, _0x4b8519);
            },
            'XDiQD': function (_0x1a03fb, _0x5557f5) {
                return _0x5416c4['vHmLn'](_0x1a03fb, _0x5557f5);
            },
            'sTuLQ': _0x5416c4['NisSi'],
            'dndKs': _0x5416c4['KwHyZ'],
            'YEznI': function (_0x2fc907, _0x1737c5) {
                return _0x5416c4['QAMmG'](_0x2fc907, _0x1737c5);
            },
            'bUsVN': function (_0x4d6fac, _0x34fe27) {
                return _0x5416c4['QAMmG'](_0x4d6fac, _0x34fe27);
            },
            'IujfG': _0x5416c4['GTuGQ'],
            'LRyyK': _0x5416c4['LSfKg'],
            'BOnTK': _0x5416c4['KHDZB'],
            'SwvXD': _0x5416c4['OrnRQ'],
            'ENjrd': function (_0x25b479, _0x4dcd11) {
                return _0x5416c4['QAMmG'](_0x25b479, _0x4dcd11);
            },
            'JHyur': _0x5416c4['ImwQj'],
            'xRDiG': _0x5416c4['wDwBp'],
            'svChf': function (_0x2d2b92, _0x3fc98d) {
                return _0x5416c4['QAMmG'](_0x2d2b92, _0x3fc98d);
            },
            'Sxflb': _0x5416c4['tgZnw'],
            'kiUoA': _0x5416c4['asMWi'],
            'kWvET': function (_0x726210, _0xb5d75) {
                return _0x5416c4['WZULk'](_0x726210, _0xb5d75);
            },
            'qgQrm': _0x5416c4['kGMeh'],
            'yVTts': function (_0x49002c, _0x3cdb01, _0x331f48) {
                return _0x5416c4['oYKHg'](_0x49002c, _0x3cdb01, _0x331f48);
            },
            'mpjxT': _0x5416c4['ygGYf'],
            'ljdCB': function (_0xb8d091, _0x356b9e) {
                return _0x5416c4['QAMmG'](_0xb8d091, _0x356b9e);
            },
            'UHjSJ': function (_0x97cd12, _0x5e2eb9, _0x47524c) {
                return _0x5416c4['oYKHg'](_0x97cd12, _0x5e2eb9, _0x47524c);
            },
            'RVtSC': _0x5416c4['kySEG'],
            'yFEto': _0x5416c4['tHXzs'],
            'cORag': _0x5416c4['aZRgG'],
            'DieLb': _0x5416c4['gMkQG'],
            'KHkzM': function (_0x2ca935, _0x2273a4) {
                return _0x5416c4['Fzruq'](_0x2ca935, _0x2273a4);
            },
            'AbRso': function (_0x56413f, _0x5c0bd2) {
                return _0x5416c4['XbFkn'](_0x56413f, _0x5c0bd2);
            },
            'nQYUB': function (_0xa009dd, _0x3d5ea6) {
                return _0x5416c4['XbFkn'](_0xa009dd, _0x3d5ea6);
            },
            'LQJtc': _0x5416c4['cEBAl'],
            'FpgYr': function (_0x2dbf09, _0x51e95c, _0x196537) {
                return _0x5416c4['oYKHg'](_0x2dbf09, _0x51e95c, _0x196537);
            },
            'rrcLm': function (_0x155709, _0x3a8332) {
                return _0x5416c4['ixfZH'](_0x155709, _0x3a8332);
            },
            'ofZGo': _0x5416c4['NciTq'],
            'hVFkB': function (_0x127ba9, _0x4a5f4b, _0x2e7064) {
                return _0x5416c4['oYKHg'](_0x127ba9, _0x4a5f4b, _0x2e7064);
            },
            'fofLf': function (_0x15b5a6, _0x47ad79) {
                return _0x5416c4['KAEiB'](_0x15b5a6, _0x47ad79);
            },
            'qnVoC': function (_0x2591dc, _0xdc52e7) {
                return _0x5416c4['KAEiB'](_0x2591dc, _0xdc52e7);
            },
            'tlKQa': function (_0x212c28, _0x4b2ab9) {
                return _0x5416c4['KAEiB'](_0x212c28, _0x4b2ab9);
            },
            'aeoCh': function (_0x2f2a82, _0x37ef56) {
                return _0x5416c4['TMKUU'](_0x2f2a82, _0x37ef56);
            },
            'iMLYv': _0x5416c4['HSqxP'],
            'StPax': _0x5416c4['zXoRj'],
            'EexOY': _0x5416c4['YETuw'],
            'ONULd': _0x5416c4['sxKsI'],
            'gznJn': _0x5416c4['XzqAi'],
            'dkrJa': _0x5416c4['fKcom'],
            'wROfk': _0x5416c4['WuPGd'],
            'qdxmb': function (_0x8959a3, _0x12011f) {
                return _0x5416c4['TMKUU'](_0x8959a3, _0x12011f);
            },
            'naCzB': _0x5416c4['cTwkH'],
            'JucYV': _0x5416c4['FcbhL'],
            'AHvyw': _0x5416c4['IvoYY'],
            'SQZJP': function (_0x2e2960, _0x546b9d) {
                return _0x5416c4['EEHEk'](_0x2e2960, _0x546b9d);
            },
            'oRwrD': _0x5416c4['zlifw'],
            'rncSh': _0x5416c4['HqEdP'],
            'yuNLd': function (_0x562975, _0x279190) {
                return _0x5416c4['fXHva'](_0x562975, _0x279190);
            },
            'kqGjh': _0x5416c4['YmQas'],
            'hXqnT': function (_0x5ea269, _0x2faf0c) {
                return _0x5416c4['ItvXF'](_0x5ea269, _0x2faf0c);
            },
            'FQpSk': function (_0x3340c4, _0x16a301) {
                return _0x5416c4['ngNUD'](_0x3340c4, _0x16a301);
            },
            'QMACJ': function (_0x586cc3, _0xc3dd33) {
                return _0x5416c4['vLBty'](_0x586cc3, _0xc3dd33);
            },
            'rNQLC': _0x5416c4['bDoPq'],
            'AQSvz': function (_0xd5962d, _0x104117, _0x2e80dc) {
                return _0x5416c4['lnObB'](_0xd5962d, _0x104117, _0x2e80dc);
            },
            'weQMo': function (_0x430474, _0x43e56c) {
                return _0x5416c4['vLBty'](_0x430474, _0x43e56c);
            },
            'NYrbt': function (_0x284404, _0x582687) {
                return _0x5416c4['vLBty'](_0x284404, _0x582687);
            },
            'mgjeq': function (_0x4d6767, _0x324e30) {
                return _0x5416c4['xjxMk'](_0x4d6767, _0x324e30);
            },
            'QIfdl': function (_0x3a3043, _0x2bc08e) {
                return _0x5416c4['vTYkq'](_0x3a3043, _0x2bc08e);
            },
            'ntQHn': function (_0x6e97b8, _0x426aab) {
                return _0x5416c4['vTYkq'](_0x6e97b8, _0x426aab);
            },
            'ZnHMG': function (_0x47fe80, _0x3b0d3e) {
                return _0x5416c4['bybuj'](_0x47fe80, _0x3b0d3e);
            },
            'upoaE': _0x5416c4['yDVGQ'],
            'EVYYA': _0x5416c4['tkqKJ'],
            'wWFzO': _0x5416c4['wkFkd'],
            'XbDva': function (_0x11c664, _0x53ed67) {
                return _0x5416c4['bybuj'](_0x11c664, _0x53ed67);
            },
            'pbnFb': function (_0x36df07, _0x3e8a58, _0x5e7f67) {
                return _0x5416c4['lnObB'](_0x36df07, _0x3e8a58, _0x5e7f67);
            },
            'mwqQR': function (_0x3bbf80, _0x35bae6) {
                return _0x5416c4['bybuj'](_0x3bbf80, _0x35bae6);
            },
            'GWtlq': _0x5416c4['rxUGB'],
            'Uswiw': _0x5416c4['nVsEx'],
            'IyXCb': _0x5416c4['mJddj'],
            'rlpkD': function (_0x3114d1, _0x47e8d5) {
                return _0x5416c4['TYazz'](_0x3114d1, _0x47e8d5);
            },
            'ZTGUa': function (_0x428a7b, _0x9ad03a) {
                return _0x5416c4['TYazz'](_0x428a7b, _0x9ad03a);
            },
            'IUdDd': function (_0x5735f2, _0x55a21d) {
                return _0x5416c4['Awfry'](_0x5735f2, _0x55a21d);
            },
            'YVZxD': _0x5416c4['AQYGJ'],
            'echCs': function (_0x3d5eba, _0xad5504) {
                return _0x5416c4['Awfry'](_0x3d5eba, _0xad5504);
            },
            'xwivr': _0x5416c4['HTUiP'],
            'AukkM': _0x5416c4['wfosC'],
            'NFgQL': _0x5416c4['wNtnT'],
            'ihldQ': _0x5416c4['MAbGi'],
            'HFZao': function (_0x62471b, _0x111276) {
                return _0x5416c4['Awfry'](_0x62471b, _0x111276);
            },
            'PAuCP': _0x5416c4['Apabn'],
            'kJRmD': function (_0x25a1d6, _0x23b542) {
                return _0x5416c4['Awfry'](_0x25a1d6, _0x23b542);
            },
            'bCgSS': _0x5416c4['mQaDG'],
            'veAzI': _0x5416c4['oQmPW'],
            'yUfWJ': _0x5416c4['nDWCp'],
            'XzfDJ': _0x5416c4['EGMtE'],
            'Qtxtb': _0x5416c4['BmnDu'],
            'erOZS': _0x5416c4['Oghfx'],
            'UVpYm': _0x5416c4['PCimA'],
            'GBYBo': _0x5416c4['dXvct'],
            'obhek': function (_0x51ac0a, _0x4693f5) {
                return _0x5416c4['Awfry'](_0x51ac0a, _0x4693f5);
            },
            'ERqso': function (_0x1d1d93, _0x354490, _0x54482b) {
                return _0x5416c4['lnObB'](_0x1d1d93, _0x354490, _0x54482b);
            },
            'BusSS': _0x5416c4['FuDSC'],
            'DQBMo': function (_0x235b1c, _0x45a597, _0xe6949a) {
                return _0x5416c4['lnObB'](_0x235b1c, _0x45a597, _0xe6949a);
            },
            'Dvhwj': _0x5416c4['BXPPp'],
            'bxdTn': function (_0x3b239e, _0x263853, _0x1f639a) {
                return _0x5416c4['lnObB'](_0x3b239e, _0x263853, _0x1f639a);
            },
            'UbTfa': _0x5416c4['jOyQH'],
            'sDWUv': function (_0x161bf3, _0x252815, _0x418e40) {
                return _0x5416c4['ixSWR'](_0x161bf3, _0x252815, _0x418e40);
            },
            'DgPrr': _0x5416c4['NpacS'],
            'qTFpX': _0x5416c4['ZkBpl'],
            'NzEdd': function (_0x9ee838, _0x4dc282, _0x1ba0f0) {
                return _0x5416c4['jWTzv'](_0x9ee838, _0x4dc282, _0x1ba0f0);
            },
            'OHKse': _0x5416c4['zPqee'],
            'DuGCZ': function (_0x2bd96d, _0x497682, _0x552867) {
                return _0x5416c4['Xvfzd'](_0x2bd96d, _0x497682, _0x552867);
            },
            'FOwxe': _0x5416c4['MgenX'],
            'iSChM': _0x5416c4['aFBGN'],
            'jsQSt': function (_0x1a5f1c, _0x12fc43, _0x824dde) {
                return _0x5416c4['Xvfzd'](_0x1a5f1c, _0x12fc43, _0x824dde);
            },
            'FLlFk': _0x5416c4['DTmHJ'],
            'hCtbw': function (_0x5a25a1, _0x530748, _0x2f2de8) {
                return _0x5416c4['Xvfzd'](_0x5a25a1, _0x530748, _0x2f2de8);
            },
            'bLRWM': _0x5416c4['JBWwD'],
            'YOmpA': function (_0x4ccfc4, _0x36ad91, _0x4100f8) {
                return _0x5416c4['Xvfzd'](_0x4ccfc4, _0x36ad91, _0x4100f8);
            },
            'PtDgD': _0x5416c4['AYPoo'],
            'yXqbK': _0x5416c4['XrMkM'],
            'AMASu': function (_0x22183a, _0x227473, _0x486f34) {
                return _0x5416c4['Xvfzd'](_0x22183a, _0x227473, _0x486f34);
            },
            'iMkml': _0x5416c4['BqSwg'],
            'fecdk': _0x5416c4['Dzxez'],
            'jrzis': _0x5416c4['jfNrf'],
            'wmQTI': function (_0x158a7d, _0x510395, _0x2c861b) {
                return _0x5416c4['Xvfzd'](_0x158a7d, _0x510395, _0x2c861b);
            },
            'krLrd': _0x5416c4['AuwKp']
        };
        _0x5416c4['Xvfzd'](it, _0x5416c4['uSGsw'], async () => {
            await _0x5416c4['ACnHB'](expect, _0x5416c4['LnNxy'](runServerless, {
                'fixture': _0x5416c4['MPLLW'],
                'command': _0x5416c4['yCKED'],
                'configExt': {
                    'provider': {
                        'ecr': {
                            'images': {
                                'invalidimage': {
                                    'path': './',
                                    'uri': _0x5416c4['KHDZB']
                                }
                            }
                        }
                    },
                    'functions': { 'fnProviderInvalidImage': { 'image': _0x5416c4['mLBAT'] } }
                }
            }))['to']['be']['eventually']['rejected']['and']['have']['property'](_0x5416c4['uzdqx'], _0x5416c4['fDAhK']);
        }), _0x5416c4['tFtop'](it, _0x5416c4['kPkGN'], async () => {
            await _0xcb1428['GKMeM'](expect, _0xcb1428['aqtWI'](runServerless, {
                'fixture': _0xcb1428['BAglP'],
                'command': _0xcb1428['MNRUN'],
                'configExt': {
                    'provider': { 'ecr': { 'images': { 'invalidimage': {} } } },
                    'functions': { 'fnProviderInvalidImage': { 'image': _0xcb1428['PsSHv'] } }
                }
            }))['to']['be']['eventually']['rejected']['and']['have']['property'](_0xcb1428['QIJkn'], _0xcb1428['fJvnt']);
        }), _0x5416c4['tFtop'](it, _0x5416c4['IdObp'], async () => {
            await _0x5416c4['IYipV'](expect, _0x5416c4['IYipV'](runServerless, {
                'fixture': _0x5416c4['GTuGQ'],
                'command': _0x5416c4['yCKED'],
                'shouldStubSpawn': !![],
                'configExt': { 'provider': { 'ecr': { 'images': { 'baseimage': { 'path': _0x5416c4['wKxkV'] } } } } }
            }))['to']['be']['eventually']['rejected']['and']['have']['property'](_0x5416c4['uzdqx'], _0x5416c4['OJvYZ']);
        }), _0x5416c4['tctcx'](it, _0x5416c4['KXjys'], async () => {
            await _0xcb1428['MNlzV'](expect, _0xcb1428['XDiQD'](runServerless, {
                'fixture': _0xcb1428['BAglP'],
                'command': _0xcb1428['MNRUN'],
                'configExt': { 'functions': { 'fnInvalid': { 'image': _0xcb1428['sTuLQ'] } } }
            }))['to']['be']['eventually']['rejected']['and']['have']['property'](_0xcb1428['QIJkn'], _0xcb1428['dndKs']);
        }), _0x5416c4['JKfqp'](it, _0x5416c4['OzSmJ'], async () => {
            await _0xcb1428['YEznI'](expect, _0xcb1428['bUsVN'](runServerless, {
                'fixture': _0xcb1428['IujfG'],
                'command': _0xcb1428['MNRUN'],
                'shouldStubSpawn': !![],
                'configExt': {
                    'functions': {
                        'foo': {
                            'image': {
                                'name': _0xcb1428['LRyyK'],
                                'uri': _0xcb1428['BOnTK']
                            }
                        }
                    }
                }
            }))['to']['be']['eventually']['rejected']['and']['have']['property'](_0xcb1428['QIJkn'], _0xcb1428['SwvXD']);
        }), _0x5416c4['MVlkW'](it, _0x5416c4['hjGGv'], async () => {
            await _0xcb1428['ENjrd'](expect, _0xcb1428['ENjrd'](runServerless, {
                'fixture': _0xcb1428['IujfG'],
                'command': _0xcb1428['MNRUN'],
                'shouldStubSpawn': !![],
                'configExt': { 'functions': { 'foo': { 'image': {} } } }
            }))['to']['be']['eventually']['rejected']['and']['have']['property'](_0xcb1428['QIJkn'], _0xcb1428['JHyur']);
        });
        const _0x45689e = (_0xbfb10f, _0x1faa53) => Object['values'](_0xbfb10f)['find'](_0x18dc99 => _0x18dc99['Type'] === 'AWS::Lambda::Version' && _0x18dc99['Properties']['FunctionName']['Ref'] === _0x1faa53)['Properties'];
        _0x5416c4['MVlkW'](describe, _0x5416c4['aGaCS'], () => {
            const _0x18c7bd = {
                'OXVef': function (_0x50d6d8, _0x2b95ab) {
                    return _0x5416c4['IYipV'](_0x50d6d8, _0x2b95ab);
                },
                'mCqUM': _0x5416c4['MPLLW'],
                'tJyAC': _0x5416c4['yCKED'],
                'uTxGA': _0x5416c4['uhQWo'],
                'gbIQX': _0x5416c4['XUybt'],
                'tWstI': _0x5416c4['cpyjX'],
                'lOegy': _0x5416c4['ioFws'],
                'MKrKx': _0x5416c4['lZPeH'],
                'tBHbm': function (_0x478209, _0x375de4) {
                    return _0x5416c4['IYipV'](_0x478209, _0x375de4);
                },
                'QyieB': _0x5416c4['tgZnw'],
                'TmBLO': _0x5416c4['asMWi'],
                'ZjcXF': function (_0x43f85c, _0x3c1cfd) {
                    return _0x5416c4['OaqmS'](_0x43f85c, _0x3c1cfd);
                },
                'XvDiO': _0x5416c4['kGMeh'],
                'tWRRu': function (_0x2ea437, _0x268406, _0x56aab2) {
                    return _0x5416c4['bIfhW'](_0x2ea437, _0x268406, _0x56aab2);
                },
                'hmQVv': _0x5416c4['goCeW'],
                'ELqCc': function (_0xb5c58f, _0x5e9f76) {
                    return _0x5416c4['uXxtg'](_0xb5c58f, _0x5e9f76);
                },
                'FdrsW': function (_0x24d3aa, _0x46df7c) {
                    return _0x5416c4['uXxtg'](_0x24d3aa, _0x46df7c);
                },
                'BFkkj': function (_0x3b4763, _0x2b51a0) {
                    return _0x5416c4['WBWrw'](_0x3b4763, _0x2b51a0);
                },
                'JzhQQ': _0x5416c4['kySEG'],
                'KFvSY': _0x5416c4['tHXzs'],
                'Anciy': _0x5416c4['qvFBp']
            };
            let _0x3369ec, _0x7458cf, _0x2db96f;
            const _0x66f4ba = _0x5416c4['oQmPW'], _0x43e6a1 = '000000000000.dkr.ecr.sa-east-1.amazonaws.com/test-lambda-docker@sha256:' + _0x66f4ba, _0x290ee1 = _0x5416c4['tipEG'], _0x12f969 = sinon['stub']()['resolves']({ 'imageDetails': [{ 'imageDigest': _0x290ee1 }] }), _0x522e66 = { 'ECR': { 'describeImages': _0x12f969 } };
            _0x5416c4['WBWrw'](before, async () => {
                const {
                    awsNaming: _0x44aedf,
                    cfTemplate: _0x47d8c3,
                    fixtureData: _0xc9dfde
                } = await _0x18c7bd['OXVef'](runServerless, {
                    'fixture': _0x18c7bd['mCqUM'],
                    'command': _0x18c7bd['tJyAC'],
                    'configExt': {
                        'provider': {
                            'ecr': {
                                'images': {
                                    'imagewithexplicituri': { 'uri': _0x43e6a1 },
                                    'imagewithimplicituri': _0x43e6a1
                                }
                            }
                        },
                        'functions': {
                            'fnImage': { 'image': _0x43e6a1 },
                            'fnImageWithTag': { 'image': _0x18c7bd['uTxGA'] },
                            'fnImageWithTagAndRepoWithSlashes': { 'image': _0x18c7bd['gbIQX'] },
                            'fnImageWithExplicitUri': { 'image': { 'uri': _0x43e6a1 } },
                            'fnProviderImageWithExplicitUri': { 'image': _0x18c7bd['tWstI'] },
                            'fnProviderImageWithImplicitUri': { 'image': _0x18c7bd['lOegy'] }
                        }
                    },
                    'awsRequestStubMap': _0x522e66
                });
                _0x3369ec = _0x47d8c3['Resources'], _0x7458cf = _0x44aedf, _0x2db96f = _0xc9dfde['serviceConfig'];
            }), _0x5416c4['TdDIF'](it, _0x5416c4['IsofT'], () => {
                const _0x372e09 = _0x2db96f['functions']['fnImage'], _0x58ad5c = _0x7458cf['getLambdaLogicalId'](_0x18c7bd['MKrKx']), _0x2aec2c = _0x3369ec[_0x58ad5c]['Properties'];
                _0x18c7bd['tBHbm'](expect, _0x2aec2c['Code'])['to']['deep']['equal']({ 'ImageUri': _0x372e09['image'] }), _0x18c7bd['tBHbm'](expect, _0x2aec2c)['to']['not']['have']['property'](_0x18c7bd['QyieB']), _0x18c7bd['tBHbm'](expect, _0x2aec2c)['to']['not']['have']['property'](_0x18c7bd['TmBLO']);
                const _0x3f9b8f = _0x372e09['image']['slice'](_0x18c7bd['ZjcXF'](_0x372e09['image']['lastIndexOf']('@'), 0x1));
                _0x18c7bd['tBHbm'](expect, _0x3f9b8f)['to']['match'](/^sha256:[a-f0-9]{64}$/);
                const _0x5b468e = _0x3f9b8f['slice'](_0x18c7bd['XvDiO']['length']), _0x368c0d = _0x18c7bd['tWRRu'](_0x45689e, _0x3369ec, _0x58ad5c);
                _0x18c7bd['tBHbm'](expect, _0x368c0d['CodeSha256'])['to']['equal'](_0x5b468e);
            }), _0x5416c4['TdDIF'](it, _0x5416c4['MJRFG'], () => {
                const _0x15e99a = _0x2db96f['functions']['fnImageWithExplicitUri'], _0x1d703e = _0x7458cf['getLambdaLogicalId'](_0xcb1428['xRDiG']), _0x40ece5 = _0x3369ec[_0x1d703e]['Properties'];
                _0xcb1428['svChf'](expect, _0x40ece5['Code'])['to']['deep']['equal']({ 'ImageUri': _0x15e99a['image']['uri'] }), _0xcb1428['svChf'](expect, _0x40ece5)['to']['not']['have']['property'](_0xcb1428['Sxflb']), _0xcb1428['svChf'](expect, _0x40ece5)['to']['not']['have']['property'](_0xcb1428['kiUoA']);
                const _0x139b70 = _0x15e99a['image']['uri']['slice'](_0xcb1428['kWvET'](_0x15e99a['image']['uri']['lastIndexOf']('@'), 0x1));
                _0xcb1428['svChf'](expect, _0x139b70)['to']['match'](/^sha256:[a-f0-9]{64}$/);
                const _0x43c62c = _0x139b70['slice'](_0xcb1428['qgQrm']['length']), _0x23ce00 = _0xcb1428['yVTts'](_0x45689e, _0x3369ec, _0x1d703e);
                _0xcb1428['svChf'](expect, _0x23ce00['CodeSha256'])['to']['equal'](_0x43c62c);
            }), _0x5416c4['TdDIF'](it, _0x5416c4['PFPzW'], () => {
                const _0x20c36d = _0x2db96f['functions']['fnImageWithTag'], _0x246556 = _0x7458cf['getLambdaLogicalId'](_0x18c7bd['hmQVv']), _0x55962b = _0x3369ec[_0x246556]['Properties'];
                _0x18c7bd['tBHbm'](expect, _0x55962b['Code'])['to']['deep']['equal']({ 'ImageUri': _0x20c36d['image']['split'](':')[0x0] + '@' + _0x290ee1 }), _0x18c7bd['ELqCc'](expect, _0x55962b)['to']['not']['have']['property'](_0x18c7bd['QyieB']), _0x18c7bd['FdrsW'](expect, _0x55962b)['to']['not']['have']['property'](_0x18c7bd['TmBLO']);
                const _0x305d8b = _0x18c7bd['tWRRu'](_0x45689e, _0x3369ec, _0x246556);
                _0x18c7bd['BFkkj'](expect, _0x305d8b['CodeSha256'])['to']['equal'](_0x290ee1['slice'](_0x18c7bd['XvDiO']['length'])), _0x18c7bd['BFkkj'](expect, _0x12f969)['to']['be']['calledWith']({
                    'imageIds': [{ 'imageTag': _0x18c7bd['JzhQQ'] }],
                    'registryId': _0x18c7bd['KFvSY'],
                    'repositoryName': _0x18c7bd['Anciy']
                });
            }), _0x5416c4['oYKHg'](it, _0x5416c4['EGSiI'], () => {
                const _0x46a8a8 = _0x2db96f['functions']['fnImageWithTagAndRepoWithSlashes'], _0x3a3107 = _0x7458cf['getLambdaLogicalId'](_0xcb1428['mpjxT']), _0x3f965b = _0x3369ec[_0x3a3107]['Properties'];
                _0xcb1428['svChf'](expect, _0x3f965b['Code'])['to']['deep']['equal']({ 'ImageUri': _0x46a8a8['image']['split'](':')[0x0] + '@' + _0x290ee1 }), _0xcb1428['ljdCB'](expect, _0x3f965b)['to']['not']['have']['property'](_0xcb1428['Sxflb']), _0xcb1428['ljdCB'](expect, _0x3f965b)['to']['not']['have']['property'](_0xcb1428['kiUoA']);
                const _0x52fb0a = _0xcb1428['UHjSJ'](_0x45689e, _0x3369ec, _0x3a3107);
                _0xcb1428['ljdCB'](expect, _0x52fb0a['CodeSha256'])['to']['equal'](_0x290ee1['slice'](_0xcb1428['qgQrm']['length'])), _0xcb1428['ljdCB'](expect, _0x12f969)['to']['be']['calledWith']({
                    'imageIds': [{ 'imageTag': _0xcb1428['RVtSC'] }],
                    'registryId': _0xcb1428['yFEto'],
                    'repositoryName': _0xcb1428['cORag']
                });
            }), _0x5416c4['oYKHg'](it, _0x5416c4['rVzUc'], () => {
                const _0x4d6371 = _0x7458cf['getLambdaLogicalId'](_0xcb1428['DieLb']), _0x3b4ee7 = _0x3369ec[_0x4d6371]['Properties'];
                _0xcb1428['KHkzM'](expect, _0x3b4ee7['Code'])['to']['deep']['equal']({ 'ImageUri': _0x43e6a1 }), _0xcb1428['AbRso'](expect, _0x3b4ee7)['to']['not']['have']['property'](_0xcb1428['Sxflb']), _0xcb1428['nQYUB'](expect, _0x3b4ee7)['to']['not']['have']['property'](_0xcb1428['kiUoA']);
                const _0x2a77bc = _0xcb1428['UHjSJ'](_0x45689e, _0x3369ec, _0x4d6371);
                _0xcb1428['nQYUB'](expect, _0x2a77bc['CodeSha256'])['to']['equal'](_0x66f4ba);
            }), _0x5416c4['oYKHg'](it, _0x5416c4['JnArh'], () => {
                const _0x4ce1af = _0x7458cf['getLambdaLogicalId'](_0xcb1428['LQJtc']), _0x3c5065 = _0x3369ec[_0x4ce1af]['Properties'];
                _0xcb1428['nQYUB'](expect, _0x3c5065['Code'])['to']['deep']['equal']({ 'ImageUri': _0x43e6a1 }), _0xcb1428['nQYUB'](expect, _0x3c5065)['to']['not']['have']['property'](_0xcb1428['Sxflb']), _0xcb1428['nQYUB'](expect, _0x3c5065)['to']['not']['have']['property'](_0xcb1428['kiUoA']);
                const _0x479485 = _0xcb1428['FpgYr'](_0x45689e, _0x3369ec, _0x4ce1af);
                _0xcb1428['nQYUB'](expect, _0x479485['CodeSha256'])['to']['equal'](_0x66f4ba);
            });
        }), _0x5416c4['deWpp'](describe, _0x5416c4['UNlby'], () => {
            const _0x5920ac = {
                    'MFkxt': _0xcb1428['rncSh'],
                    'ngqej': function (_0x59b013, _0x738005) {
                        return _0xcb1428['XbDva'](_0x59b013, _0x738005);
                    },
                    'Ecmjk': _0xcb1428['IujfG'],
                    'yTIuu': _0xcb1428['MNRUN'],
                    'aVHaW': _0xcb1428['ofZGo'],
                    'wlEpc': function (_0x356b0f, _0x210b7e, _0x93a03e) {
                        return _0xcb1428['pbnFb'](_0x356b0f, _0x210b7e, _0x93a03e);
                    },
                    'ymeJC': function (_0x3d2ab7, _0x1da8e1) {
                        return _0xcb1428['mwqQR'](_0x3d2ab7, _0x1da8e1);
                    },
                    'vadWS': function (_0x74bdee, _0x3f8b73) {
                        return _0xcb1428['mwqQR'](_0x74bdee, _0x3f8b73);
                    },
                    'aFfVa': _0xcb1428['GWtlq'],
                    'LHGwl': _0xcb1428['iMLYv'],
                    'dcHQs': _0xcb1428['oRwrD'],
                    'kEryH': function (_0x4a494a, _0x105029) {
                        return _0xcb1428['mwqQR'](_0x4a494a, _0x105029);
                    },
                    'ZGLhe': _0xcb1428['EexOY'],
                    'NFobb': _0xcb1428['ONULd'],
                    'tzPmK': _0xcb1428['gznJn'],
                    'walJI': _0xcb1428['dkrJa'],
                    'eiRUD': _0xcb1428['wROfk'],
                    'IDXEs': _0xcb1428['rNQLC'],
                    'OplRH': _0xcb1428['Uswiw'],
                    'XMECT': _0xcb1428['IyXCb'],
                    'oFzvp': function (_0x93ace6, _0x3dfd9d) {
                        return _0xcb1428['rlpkD'](_0x93ace6, _0x3dfd9d);
                    },
                    'RQsTR': function (_0x5e0dd4, _0x3590d8) {
                        return _0xcb1428['rlpkD'](_0x5e0dd4, _0x3590d8);
                    },
                    'SKaSN': function (_0xd9976d, _0x5aeb64) {
                        return _0xcb1428['ZTGUa'](_0xd9976d, _0x5aeb64);
                    },
                    'TMFMw': function (_0x27350e, _0x3558bc) {
                        return _0xcb1428['IUdDd'](_0x27350e, _0x3558bc);
                    },
                    'bzaGZ': _0xcb1428['kqGjh'],
                    'qPXvE': _0xcb1428['naCzB'],
                    'wnBlg': _0xcb1428['YVZxD'],
                    'jfLjs': function (_0x506a7f, _0x559ef4) {
                        return _0xcb1428['IUdDd'](_0x506a7f, _0x559ef4);
                    },
                    'XGist': function (_0x103d9c, _0x4b97e1) {
                        return _0xcb1428['echCs'](_0x103d9c, _0x4b97e1);
                    },
                    'MzzoT': _0xcb1428['xwivr'],
                    'ksRlf': _0xcb1428['AukkM'],
                    'LcLEU': function (_0x3e687f, _0x17bda8) {
                        return _0xcb1428['echCs'](_0x3e687f, _0x17bda8);
                    },
                    'rIGnG': _0xcb1428['NFgQL'],
                    'exFfG': _0xcb1428['ihldQ'],
                    'tSora': function (_0x17a22a, _0x35ee20) {
                        return _0xcb1428['HFZao'](_0x17a22a, _0x35ee20);
                    },
                    'YgNNF': _0xcb1428['LRyyK'],
                    'owvdk': function (_0x319761, _0x31e0ed, _0x2b7205) {
                        return _0xcb1428['pbnFb'](_0x319761, _0x31e0ed, _0x2b7205);
                    },
                    'Ruhyp': _0xcb1428['QIJkn'],
                    'wVrMi': _0xcb1428['PAuCP'],
                    'BMuIG': function (_0x48b32d, _0x32bdad) {
                        return _0xcb1428['kJRmD'](_0x48b32d, _0x32bdad);
                    },
                    'uwiMW': function (_0x168bcc, _0x93f990) {
                        return _0xcb1428['kJRmD'](_0x168bcc, _0x93f990);
                    },
                    'bGDfs': _0xcb1428['bCgSS']
                }, _0x5558f7 = _0xcb1428['veAzI'], _0x33c579 = _0xcb1428['yUfWJ'], _0x1c20a9 = _0xcb1428['XzfDJ'], _0x256775 = 'https://' + _0x33c579, _0x1235f3 = sinon['stub'](), _0xe7bab5 = sinon['stub'](), _0x414d69 = sinon['stub'](), _0x5749b6 = {
                    'STS': {
                        'getCallerIdentity': {
                            'ResponseMetadata': { 'RequestId': _0xcb1428['Qtxtb'] },
                            'UserId': _0xcb1428['erOZS'],
                            'Account': _0xcb1428['UVpYm'],
                            'Arn': _0xcb1428['GBYBo']
                        }
                    },
                    'ECR': {
                        'describeRepositories': { 'repositories': [{ 'repositoryUri': _0x33c579 }] },
                        'getAuthorizationToken': {
                            'authorizationData': [{
                                    'proxyEndpoint': _0x256775,
                                    'authorizationToken': _0x1c20a9
                                }]
                        }
                    }
                }, _0x41846f = sinon['stub']()['returns']({ 'stdBuffer': 'digest:\x20sha256:' + _0x5558f7 + '\x20size:\x201787' }), _0x161ddc = {
                    'child-process-ext/spawn': _0x41846f,
                    './lib/utils/telemetry/generatePayload.js': () => ({})
                };
            _0xcb1428['obhek'](beforeEach, () => {
                _0x1235f3['reset'](), _0xe7bab5['reset'](), _0x41846f['resetHistory']();
            }), _0xcb1428['ERqso'](it, _0xcb1428['BusSS'], async () => {
                const _0x49fdce = {
                        ..._0x5749b6,
                        'ECR': {
                            ..._0x5749b6['ECR'],
                            'describeRepositories': _0x1235f3['resolves']({ 'repositories': [{ 'repositoryUri': _0x33c579 }] }),
                            'createRepository': _0xe7bab5
                        }
                    }, {
                        awsNaming: _0x1d719b,
                        cfTemplate: _0x3097da,
                        fixtureData: {servicePath: _0x27659c}
                    } = await _0xcb1428['rrcLm'](runServerless, {
                        'fixture': _0xcb1428['IujfG'],
                        'command': _0xcb1428['MNRUN'],
                        'awsRequestStubMap': _0x49fdce,
                        'modulesCacheStub': _0x161ddc
                    }), _0xcc7745 = _0x1d719b['getLambdaLogicalId'](_0xcb1428['ofZGo']), _0xf70b20 = _0x3097da['Resources'][_0xcc7745]['Properties'], _0x58cca3 = _0xcb1428['hVFkB'](_0x45689e, _0x3097da['Resources'], _0xcc7745);
                _0xcb1428['fofLf'](expect, _0xf70b20['Code']['ImageUri'])['to']['deep']['equal'](_0x33c579 + '@sha256:' + _0x5558f7), _0xcb1428['fofLf'](expect, _0x58cca3['CodeSha256'])['to']['equal'](_0x5558f7), _0xcb1428['qnVoC'](expect, _0x1235f3)['to']['be']['calledOnce'], _0xcb1428['tlKQa'](expect, _0xe7bab5['notCalled'])['to']['be']['true'], _0xcb1428['aeoCh'](expect, _0x41846f)['to']['be']['calledWith'](_0xcb1428['iMLYv'], [_0xcb1428['StPax']]), _0xcb1428['aeoCh'](expect, _0x41846f)['not']['to']['be']['calledWith'](_0xcb1428['iMLYv'], [
                    _0xcb1428['EexOY'],
                    _0xcb1428['ONULd'],
                    _0xcb1428['gznJn'],
                    _0xcb1428['dkrJa'],
                    _0xcb1428['wROfk'],
                    _0x256775
                ]), _0xcb1428['qdxmb'](expect, _0x41846f)['to']['be']['calledWith'](_0xcb1428['iMLYv'], [
                    _0xcb1428['naCzB'],
                    '-t',
                    _0x1d719b['getEcrRepositoryName']() + ':baseimage',
                    '-f',
                    path['join'](_0x27659c, _0xcb1428['JucYV']),
                    './'
                ]), _0xcb1428['qdxmb'](expect, _0x41846f)['to']['be']['calledWith'](_0xcb1428['iMLYv'], [
                    _0xcb1428['AHvyw'],
                    _0x1d719b['getEcrRepositoryName']() + ':baseimage',
                    _0x33c579 + ':baseimage'
                ]), _0xcb1428['SQZJP'](expect, _0x41846f)['to']['be']['calledWith'](_0xcb1428['iMLYv'], [
                    _0xcb1428['oRwrD'],
                    _0x33c579 + ':baseimage'
                ]);
            }), _0xcb1428['DQBMo'](it, _0xcb1428['Dvhwj'], async () => {
                const _0x3b24fe = {
                        ..._0x5749b6,
                        'ECR': {
                            ..._0x5749b6['ECR'],
                            'describeRepositories': _0x1235f3['throws']({ 'providerError': { 'code': _0xcb1428['rncSh'] } }),
                            'createRepository': _0x414d69['resolves']({ 'repository': { 'repositoryUri': _0x33c579 } })
                        }
                    }, {
                        awsNaming: _0x3353a3,
                        cfTemplate: _0x43dd6f
                    } = await _0xcb1428['yuNLd'](runServerless, {
                        'fixture': _0xcb1428['IujfG'],
                        'command': _0xcb1428['MNRUN'],
                        'awsRequestStubMap': _0x3b24fe,
                        'modulesCacheStub': _0x161ddc,
                        'configExt': {
                            'provider': {
                                'ecr': {
                                    'scanOnPush': !![],
                                    'images': {
                                        'baseimage': {
                                            'path': './',
                                            'file': _0xcb1428['kqGjh']
                                        }
                                    }
                                }
                            }
                        }
                    }), _0x456d4c = _0x3353a3['getLambdaLogicalId'](_0xcb1428['ofZGo']), _0x47967b = _0x43dd6f['Resources'][_0x456d4c]['Properties'], _0x310ac1 = _0xcb1428['hVFkB'](_0x45689e, _0x43dd6f['Resources'], _0x456d4c);
                _0xcb1428['yuNLd'](expect, _0x47967b['Code']['ImageUri'])['to']['deep']['equal'](_0x33c579 + '@sha256:' + _0x5558f7), _0xcb1428['hXqnT'](expect, _0x310ac1['CodeSha256'])['to']['equal'](_0x5558f7), _0xcb1428['hXqnT'](expect, _0x1235f3)['to']['be']['calledOnce'], _0xcb1428['FQpSk'](expect, _0x414d69)['to']['be']['calledOnce'], _0xcb1428['QMACJ'](expect, _0x414d69['args'][0x0][0x0]['imageScanningConfiguration'])['to']['deep']['equal']({ 'scanOnPush': !![] });
            }), _0xcb1428['bxdTn'](it, _0xcb1428['UbTfa'], async () => {
                const _0x5c15f9 = {
                        ..._0x5749b6,
                        'ECR': {
                            ..._0x5749b6['ECR'],
                            'describeRepositories': _0x1235f3['throws']({ 'providerError': { 'code': _0x5920ac['MFkxt'] } }),
                            'createRepository': _0xe7bab5['resolves']({ 'repository': { 'repositoryUri': _0x33c579 } })
                        }
                    }, {
                        awsNaming: _0x349cf0,
                        cfTemplate: _0x237687
                    } = await _0x5920ac['ngqej'](runServerless, {
                        'fixture': _0x5920ac['Ecmjk'],
                        'command': _0x5920ac['yTIuu'],
                        'awsRequestStubMap': _0x5c15f9,
                        'modulesCacheStub': _0x161ddc
                    }), _0x267fc4 = _0x349cf0['getLambdaLogicalId'](_0x5920ac['aVHaW']), _0x3e56f5 = _0x237687['Resources'][_0x267fc4]['Properties'], _0x95575c = _0x5920ac['wlEpc'](_0x45689e, _0x237687['Resources'], _0x267fc4);
                _0x5920ac['ymeJC'](expect, _0x3e56f5['Code']['ImageUri'])['to']['deep']['equal'](_0x33c579 + '@sha256:' + _0x5558f7), _0x5920ac['vadWS'](expect, _0x95575c['CodeSha256'])['to']['equal'](_0x5558f7), _0x5920ac['vadWS'](expect, _0x1235f3)['to']['be']['calledOnce'], _0x5920ac['vadWS'](expect, _0xe7bab5)['to']['be']['calledOnce'];
            }), _0xcb1428['sDWUv'](it, _0xcb1428['DgPrr'], async () => {
                const _0x3f6d1a = {
                        ..._0x5749b6,
                        'ECR': {
                            ..._0x5749b6['ECR'],
                            'describeRepositories': _0x1235f3['resolves']({ 'repositories': [{ 'repositoryUri': _0x33c579 }] }),
                            'createRepository': _0xe7bab5
                        }
                    }, _0x10bd48 = sinon['stub']()['returns']({ 'stdBuffer': 'digest:\x20sha256:' + _0x5558f7 + '\x20size:\x201787' })['onCall'](0x3)['throws']({ 'stdBuffer': _0xcb1428['rNQLC'] }), {
                        awsNaming: _0x5dff36,
                        cfTemplate: _0xcf04b0,
                        fixtureData: {servicePath: _0x146713}
                    } = await _0xcb1428['QMACJ'](runServerless, {
                        'fixture': _0xcb1428['IujfG'],
                        'command': _0xcb1428['MNRUN'],
                        'awsRequestStubMap': _0x3f6d1a,
                        'modulesCacheStub': {
                            ..._0x161ddc,
                            'child-process-ext/spawn': _0x10bd48
                        }
                    }), _0xd0b08b = _0x5dff36['getLambdaLogicalId'](_0xcb1428['ofZGo']), _0x5eff8b = _0xcf04b0['Resources'][_0xd0b08b]['Properties'], _0x1f689f = _0xcb1428['AQSvz'](_0x45689e, _0xcf04b0['Resources'], _0xd0b08b);
                _0xcb1428['QMACJ'](expect, _0x5eff8b['Code']['ImageUri'])['to']['deep']['equal'](_0x33c579 + '@sha256:' + _0x5558f7), _0xcb1428['weQMo'](expect, _0x1f689f['CodeSha256'])['to']['equal'](_0x5558f7), _0xcb1428['NYrbt'](expect, _0x1235f3)['to']['be']['calledOnce'], _0xcb1428['NYrbt'](expect, _0xe7bab5['notCalled'])['to']['be']['true'], _0xcb1428['mgjeq'](expect, _0x10bd48)['to']['be']['calledWith'](_0xcb1428['iMLYv'], [_0xcb1428['StPax']]), _0xcb1428['QIfdl'](expect, _0x10bd48)['to']['be']['calledWith'](_0xcb1428['iMLYv'], [
                    _0xcb1428['naCzB'],
                    '-t',
                    _0x5dff36['getEcrRepositoryName']() + ':baseimage',
                    '-f',
                    path['join'](_0x146713, _0xcb1428['JucYV']),
                    './'
                ]), _0xcb1428['QIfdl'](expect, _0x10bd48)['to']['be']['calledWith'](_0xcb1428['iMLYv'], [
                    _0xcb1428['AHvyw'],
                    _0x5dff36['getEcrRepositoryName']() + ':baseimage',
                    _0x33c579 + ':baseimage'
                ]), _0xcb1428['ntQHn'](expect, _0x10bd48)['to']['be']['calledWith'](_0xcb1428['iMLYv'], [
                    _0xcb1428['oRwrD'],
                    _0x33c579 + ':baseimage'
                ]), _0xcb1428['ZnHMG'](expect, _0x10bd48)['to']['be']['calledWith'](_0xcb1428['iMLYv'], [
                    _0xcb1428['EexOY'],
                    _0xcb1428['ONULd'],
                    _0xcb1428['gznJn'],
                    _0xcb1428['dkrJa'],
                    _0xcb1428['wROfk'],
                    _0x256775
                ]);
            }), _0xcb1428['sDWUv'](it, _0xcb1428['qTFpX'], async () => {
                const _0x5251ac = {
                        ..._0x5749b6,
                        'ECR': {
                            ..._0x5749b6['ECR'],
                            'describeRepositories': _0x1235f3['resolves']({ 'repositories': [{ 'repositoryUri': _0x33c579 }] }),
                            'createRepository': _0xe7bab5
                        }
                    }, _0x479d6d = sinon['stub']()['returns']({ 'stdBuffer': 'digest:\x20sha256:' + _0x5558f7 + '\x20size:\x201787' })['onCall'](0x3)['throws']({ 'stdBuffer': _0x5920ac['aFfVa'] });
                await _0x5920ac['vadWS'](runServerless, {
                    'fixture': _0x5920ac['Ecmjk'],
                    'command': _0x5920ac['yTIuu'],
                    'awsRequestStubMap': _0x5251ac,
                    'modulesCacheStub': {
                        ..._0x161ddc,
                        'child-process-ext/spawn': _0x479d6d
                    }
                }), _0x5920ac['vadWS'](expect, _0x479d6d)['to']['be']['calledWith'](_0x5920ac['LHGwl'], [
                    _0x5920ac['dcHQs'],
                    _0x33c579 + ':baseimage'
                ]), _0x5920ac['kEryH'](expect, _0x479d6d)['to']['be']['calledWith'](_0x5920ac['LHGwl'], [
                    _0x5920ac['ZGLhe'],
                    _0x5920ac['NFobb'],
                    _0x5920ac['tzPmK'],
                    _0x5920ac['walJI'],
                    _0x5920ac['eiRUD'],
                    _0x256775
                ]);
            }), _0xcb1428['NzEdd'](it, _0xcb1428['OHKse'], async () => {
                const _0x379df1 = {
                        ..._0x5749b6,
                        'ECR': {
                            ..._0x5749b6['ECR'],
                            'describeRepositories': _0x1235f3['resolves']({ 'repositories': [{ 'repositoryUri': _0x33c579 }] }),
                            'createRepository': _0xe7bab5
                        }
                    }, {stdoutData: _0xd5f70d} = await _0x5920ac['kEryH'](runServerless, {
                        'fixture': _0x5920ac['Ecmjk'],
                        'command': _0x5920ac['yTIuu'],
                        'awsRequestStubMap': _0x379df1,
                        'modulesCacheStub': {
                            ..._0x161ddc,
                            'child-process-ext/spawn': sinon['stub']()['returns']({ 'stdBuffer': 'digest:\x20sha256:' + _0x5558f7 + '\x20size:\x201787' })['onCall'](0x3)['throws']({ 'stdBuffer': _0x5920ac['IDXEs'] })['onCall'](0x4)['returns']({ 'stdBuffer': _0x5920ac['OplRH'] })
                        }
                    });
                _0x5920ac['kEryH'](expect, _0xd5f70d)['to']['include'](_0x5920ac['XMECT']);
            }), _0xcb1428['DuGCZ'](it, _0xcb1428['FOwxe'], async () => {
                const _0x507491 = {
                        ..._0x5749b6,
                        'ECR': {
                            ..._0x5749b6['ECR'],
                            'describeRepositories': _0x1235f3['resolves']({ 'repositories': [{ 'repositoryUri': _0x33c579 }] }),
                            'createRepository': _0xe7bab5
                        }
                    }, {
                        awsNaming: _0x98757c,
                        cfTemplate: _0x4cb9f1
                    } = await _0x5920ac['oFzvp'](runServerless, {
                        'fixture': _0x5920ac['Ecmjk'],
                        'command': _0x5920ac['yTIuu'],
                        'awsRequestStubMap': _0x507491,
                        'modulesCacheStub': _0x161ddc,
                        'configExt': { 'provider': { 'ecr': { 'images': { 'baseimage': './' } } } }
                    }), _0x3a5bd5 = _0x98757c['getLambdaLogicalId'](_0x5920ac['aVHaW']), _0x1322f2 = _0x4cb9f1['Resources'][_0x3a5bd5]['Properties'], _0x40225b = Object['values'](_0x4cb9f1['Resources'])['find'](_0x24bdba => _0x24bdba['Type'] === 'AWS::Lambda::Version' && _0x24bdba['Properties']['FunctionName']['Ref'] === _0x3a5bd5)['Properties'];
                _0x5920ac['oFzvp'](expect, _0x1322f2['Code']['ImageUri'])['to']['deep']['equal'](_0x33c579 + '@sha256:' + _0x5558f7), _0x5920ac['oFzvp'](expect, _0x40225b['CodeSha256'])['to']['equal'](_0x5558f7), _0x5920ac['RQsTR'](expect, _0x1235f3)['to']['be']['calledOnce'], _0x5920ac['SKaSN'](expect, _0xe7bab5['notCalled'])['to']['be']['true'];
            }), _0xcb1428['DuGCZ'](it, _0xcb1428['iSChM'], async () => {
                const _0x5b8000 = {
                        ..._0x5749b6,
                        'ECR': {
                            ..._0x5749b6['ECR'],
                            'describeRepositories': _0x1235f3['resolves']({ 'repositories': [{ 'repositoryUri': _0x33c579 }] }),
                            'createRepository': _0xe7bab5
                        }
                    }, {
                        awsNaming: _0x45f8da,
                        cfTemplate: _0x439711,
                        fixtureData: {servicePath: _0x174c5c}
                    } = await _0x5920ac['TMFMw'](runServerless, {
                        'fixture': _0x5920ac['Ecmjk'],
                        'command': _0x5920ac['yTIuu'],
                        'awsRequestStubMap': _0x5b8000,
                        'modulesCacheStub': _0x161ddc,
                        'configExt': {
                            'provider': {
                                'ecr': {
                                    'images': {
                                        'baseimage': {
                                            'path': './',
                                            'file': _0x5920ac['bzaGZ']
                                        }
                                    }
                                }
                            }
                        }
                    }), _0x3b09c3 = _0x45f8da['getLambdaLogicalId'](_0x5920ac['aVHaW']), _0x48ce51 = _0x439711['Resources'][_0x3b09c3]['Properties'], _0x18c4b9 = Object['values'](_0x439711['Resources'])['find'](_0x521e7a => _0x521e7a['Type'] === 'AWS::Lambda::Version' && _0x521e7a['Properties']['FunctionName']['Ref'] === _0x3b09c3)['Properties'];
                _0x5920ac['TMFMw'](expect, _0x48ce51['Code']['ImageUri'])['to']['deep']['equal'](_0x33c579 + '@sha256:' + _0x5558f7), _0x5920ac['TMFMw'](expect, _0x18c4b9['CodeSha256'])['to']['equal'](_0x5558f7), _0x5920ac['TMFMw'](expect, _0x1235f3)['to']['be']['calledOnce'], _0x5920ac['TMFMw'](expect, _0xe7bab5['notCalled'])['to']['be']['true'], _0x5920ac['TMFMw'](expect, _0x41846f)['to']['be']['calledWith'](_0x5920ac['LHGwl'], [
                    _0x5920ac['qPXvE'],
                    '-t',
                    _0x45f8da['getEcrRepositoryName']() + ':baseimage',
                    '-f',
                    path['join'](_0x174c5c, _0x5920ac['bzaGZ']),
                    './'
                ]);
            }), _0xcb1428['jsQSt'](it, _0xcb1428['FLlFk'], async () => {
                const _0x3b7139 = {
                        ..._0x5749b6,
                        'ECR': {
                            ..._0x5749b6['ECR'],
                            'describeRepositories': _0x1235f3['resolves']({ 'repositories': [{ 'repositoryUri': _0x33c579 }] }),
                            'createRepository': _0xe7bab5
                        }
                    }, {
                        awsNaming: _0x1d4fb4,
                        cfTemplate: _0x64946c,
                        fixtureData: {servicePath: _0xe8f51b}
                    } = await _0x5920ac['TMFMw'](runServerless, {
                        'fixture': _0x5920ac['Ecmjk'],
                        'command': _0x5920ac['yTIuu'],
                        'awsRequestStubMap': _0x3b7139,
                        'modulesCacheStub': _0x161ddc,
                        'configExt': {
                            'provider': {
                                'ecr': {
                                    'images': {
                                        'baseimage': {
                                            'path': './',
                                            'file': _0x5920ac['bzaGZ'],
                                            'cacheFrom': [_0x5920ac['wnBlg']]
                                        }
                                    }
                                }
                            }
                        }
                    }), _0x4a98cb = _0x1d4fb4['getLambdaLogicalId'](_0x5920ac['aVHaW']), _0xf5f694 = _0x64946c['Resources'][_0x4a98cb]['Properties'], _0x336941 = Object['values'](_0x64946c['Resources'])['find'](_0x1a9089 => _0x1a9089['Type'] === 'AWS::Lambda::Version' && _0x1a9089['Properties']['FunctionName']['Ref'] === _0x4a98cb)['Properties'];
                _0x5920ac['TMFMw'](expect, _0xf5f694['Code']['ImageUri'])['to']['deep']['equal'](_0x33c579 + '@sha256:' + _0x5558f7), _0x5920ac['jfLjs'](expect, _0x336941['CodeSha256'])['to']['equal'](_0x5558f7), _0x5920ac['jfLjs'](expect, _0x1235f3)['to']['be']['calledOnce'], _0x5920ac['jfLjs'](expect, _0xe7bab5['notCalled'])['to']['be']['true'], _0x5920ac['XGist'](expect, _0x41846f)['to']['be']['calledWith'](_0x5920ac['LHGwl'], [
                    _0x5920ac['qPXvE'],
                    '-t',
                    _0x1d4fb4['getEcrRepositoryName']() + ':baseimage',
                    '-f',
                    path['join'](_0xe8f51b, _0x5920ac['bzaGZ']),
                    _0x5920ac['MzzoT'],
                    _0x5920ac['wnBlg'],
                    './'
                ]);
            }), _0xcb1428['hCtbw'](it, _0xcb1428['bLRWM'], async () => {
                const _0x18c00c = {
                        ..._0x5749b6,
                        'ECR': {
                            ..._0x5749b6['ECR'],
                            'describeRepositories': _0x1235f3['resolves']({ 'repositories': [{ 'repositoryUri': _0x33c579 }] }),
                            'createRepository': _0xe7bab5
                        }
                    }, {
                        awsNaming: _0x3ce72c,
                        cfTemplate: _0x28b959,
                        fixtureData: {servicePath: _0x1f119e}
                    } = await _0x5920ac['XGist'](runServerless, {
                        'fixture': _0x5920ac['Ecmjk'],
                        'command': _0x5920ac['yTIuu'],
                        'awsRequestStubMap': _0x18c00c,
                        'modulesCacheStub': _0x161ddc,
                        'configExt': {
                            'provider': {
                                'ecr': {
                                    'images': {
                                        'baseimage': {
                                            'path': './',
                                            'file': _0x5920ac['bzaGZ'],
                                            'buildArgs': { 'TESTKEY': _0x5920ac['ksRlf'] }
                                        }
                                    }
                                }
                            }
                        }
                    }), _0x2e0a6c = _0x3ce72c['getLambdaLogicalId'](_0x5920ac['aVHaW']), _0x33d14d = _0x28b959['Resources'][_0x2e0a6c]['Properties'], _0x24fdc9 = Object['values'](_0x28b959['Resources'])['find'](_0x158e56 => _0x158e56['Type'] === 'AWS::Lambda::Version' && _0x158e56['Properties']['FunctionName']['Ref'] === _0x2e0a6c)['Properties'];
                _0x5920ac['XGist'](expect, _0x33d14d['Code']['ImageUri'])['to']['deep']['equal'](_0x33c579 + '@sha256:' + _0x5558f7), _0x5920ac['XGist'](expect, _0x24fdc9['CodeSha256'])['to']['equal'](_0x5558f7), _0x5920ac['XGist'](expect, _0x1235f3)['to']['be']['calledOnce'], _0x5920ac['LcLEU'](expect, _0xe7bab5['notCalled'])['to']['be']['true'], _0x5920ac['LcLEU'](expect, _0x41846f)['to']['be']['calledWith'](_0x5920ac['LHGwl'], [
                    _0x5920ac['qPXvE'],
                    '-t',
                    _0x3ce72c['getEcrRepositoryName']() + ':baseimage',
                    '-f',
                    path['join'](_0x1f119e, _0x5920ac['bzaGZ']),
                    _0x5920ac['rIGnG'],
                    _0x5920ac['exFfG'],
                    './'
                ]);
            }), _0xcb1428['YOmpA'](it, _0xcb1428['PtDgD'], async () => {
                const _0x3d83b = {
                        ..._0x5749b6,
                        'ECR': {
                            ..._0x5749b6['ECR'],
                            'describeRepositories': _0x1235f3['resolves']({ 'repositories': [{ 'repositoryUri': _0x33c579 }] }),
                            'createRepository': _0xe7bab5
                        }
                    }, {
                        awsNaming: _0x764b50,
                        cfTemplate: _0x3be7e0
                    } = await _0x5920ac['tSora'](runServerless, {
                        'fixture': _0x5920ac['Ecmjk'],
                        'command': _0x5920ac['yTIuu'],
                        'awsRequestStubMap': _0x3d83b,
                        'modulesCacheStub': _0x161ddc,
                        'configExt': {
                            'provider': { 'ecr': { 'images': { 'baseimage': './' } } },
                            'functions': { 'foo': { 'image': { 'name': _0x5920ac['YgNNF'] } } }
                        }
                    }), _0x844f4e = _0x764b50['getLambdaLogicalId'](_0x5920ac['aVHaW']), _0xef5b08 = _0x3be7e0['Resources'][_0x844f4e]['Properties'], _0x4090a8 = _0x5920ac['owvdk'](_0x45689e, _0x3be7e0['Resources'], _0x844f4e);
                _0x5920ac['tSora'](expect, _0xef5b08['Code']['ImageUri'])['to']['deep']['equal'](_0x33c579 + '@sha256:' + _0x5558f7), _0x5920ac['tSora'](expect, _0x4090a8['CodeSha256'])['to']['equal'](_0x5558f7);
            }), _0xcb1428['YOmpA'](it, _0xcb1428['yXqbK'], async () => {
                await _0xcb1428['ZnHMG'](expect, _0xcb1428['ZnHMG'](runServerless, {
                    'fixture': _0xcb1428['IujfG'],
                    'command': _0xcb1428['MNRUN'],
                    'awsRequestStubMap': _0x5749b6,
                    'modulesCacheStub': { 'child-process-ext/spawn': sinon['stub']()['throws']() }
                }))['to']['be']['eventually']['rejected']['and']['have']['property'](_0xcb1428['QIJkn'], _0xcb1428['upoaE']);
            }), _0xcb1428['AMASu'](it, _0xcb1428['iMkml'], async () => {
                await _0xcb1428['ZnHMG'](expect, _0xcb1428['ZnHMG'](runServerless, {
                    'fixture': _0xcb1428['IujfG'],
                    'command': _0xcb1428['MNRUN'],
                    'awsRequestStubMap': _0x5749b6,
                    'modulesCacheStub': {
                        ..._0x161ddc,
                        'child-process-ext/spawn': sinon['stub']()['returns']({})['onSecondCall']()['throws']()
                    }
                }))['to']['be']['eventually']['rejected']['and']['have']['property'](_0xcb1428['QIJkn'], _0xcb1428['EVYYA']);
            }), _0xcb1428['AMASu'](it, _0xcb1428['fecdk'], async () => {
                await _0x5920ac['tSora'](expect, _0x5920ac['tSora'](runServerless, {
                    'fixture': _0x5920ac['Ecmjk'],
                    'command': _0x5920ac['yTIuu'],
                    'awsRequestStubMap': _0x5749b6,
                    'modulesCacheStub': {
                        ..._0x161ddc,
                        'child-process-ext/spawn': sinon['stub']()['returns']({})['onCall'](0x2)['throws']()
                    }
                }))['to']['be']['eventually']['rejected']['and']['have']['property'](_0x5920ac['Ruhyp'], _0x5920ac['wVrMi']);
            }), _0xcb1428['AMASu'](it, _0xcb1428['jrzis'], async () => {
                await _0xcb1428['ZnHMG'](expect, _0xcb1428['ZnHMG'](runServerless, {
                    'fixture': _0xcb1428['IujfG'],
                    'command': _0xcb1428['MNRUN'],
                    'awsRequestStubMap': _0x5749b6,
                    'modulesCacheStub': {
                        ..._0x161ddc,
                        'child-process-ext/spawn': sinon['stub']()['returns']({})['onCall'](0x3)['throws']()
                    }
                }))['to']['be']['eventually']['rejected']['and']['have']['property'](_0xcb1428['QIJkn'], _0xcb1428['wWFzO']);
            }), _0xcb1428['wmQTI'](it, _0xcb1428['krLrd'], async () => {
                await _0x5920ac['BMuIG'](expect, _0x5920ac['uwiMW'](runServerless, {
                    'fixture': _0x5920ac['Ecmjk'],
                    'command': _0x5920ac['yTIuu'],
                    'awsRequestStubMap': _0x5749b6,
                    'modulesCacheStub': {
                        ..._0x161ddc,
                        'child-process-ext/spawn': sinon['stub']()['returns']({})['onCall'](0x3)['throws']({ 'stdBuffer': _0x5920ac['IDXEs'] })['onCall'](0x4)['throws']()
                    }
                }))['to']['be']['eventually']['rejected']['and']['have']['property'](_0x5920ac['Ruhyp'], _0x5920ac['bGDfs']);
            });
        });
    });
});
