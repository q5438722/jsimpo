'use strict';
const WebSocket = require('ws'), {expect} = require('chai'), awsRequest = require('@serverless/test/aws-request'), log = require('log')['get']('serverless:test'), wait = require('timers-ext/promise/sleep'), fixtures = require('../../fixtures/programmatic'), {confirmCloudWatchLogs} = require('../../utils/misc'), {deployService, removeService} = require('../../utils/integration'), {createApi, deleteApi, getRoutes, createStage, deleteStage} = require('../../utils/websocket');
describe('AWS\x20-\x20API\x20Gateway\x20Websocket\x20Integration\x20Test', function () {
    const _0x3106c5 = {
        'hnkLD': 'websocket',
        'rJeos': function (_0x553324, _0x46132e) {
            return _0x553324(_0x46132e);
        },
        'PGSLs': function (_0x35b57b, _0x1dabca) {
            return _0x35b57b(_0x1dabca);
        },
        'yAtys': function (_0x406bae, _0x2d3e72, _0x4bda7d, _0x13c0ac) {
            return _0x406bae(_0x2d3e72, _0x4bda7d, _0x13c0ac);
        },
        'QFRzi': 'CloudFormation',
        'TkFbW': 'describeStacks',
        'nUNuU': 'Hello,\x20serverless',
        'fdqqu': 'error',
        'ijutC': 'open',
        'fCGrA': 'close',
        'FRYZQ': 'message',
        'MkAXQ': 'Sending\x20message\x20to\x20\x27hello\x27\x20route',
        'vQYLd': 'hello',
        'lvzAy': 'serverless',
        'tfzYf': function (_0x4b8fa3, _0x43a95b, _0x3bf0b1) {
            return _0x4b8fa3(_0x43a95b, _0x3bf0b1);
        },
        'jLePg': function (_0x425f45) {
            return _0x425f45();
        },
        'cfFUH': 'should\x20expose\x20a\x20websocket\x20route\x20that\x20can\x20reply\x20to\x20a\x20message',
        'iHAhn': 'dev',
        'MkCLR': function (_0x1645e2, _0xcf1452) {
            return _0x1645e2(_0xcf1452);
        },
        'oVbbN': '0|2|4|5|3|1',
        'ovkxA': 'Deleting\x20external\x20websocket\x20API...',
        'SojYU': function (_0x52d744, _0x6660ab) {
            return _0x52d744(_0x6660ab);
        },
        'hKgLV': function (_0x802686, _0x59ae46, _0x52513a) {
            return _0x802686(_0x59ae46, _0x52513a);
        },
        'NkwYp': 'should\x20add\x20the\x20routes\x20to\x20the\x20referenced\x20API',
        'ZenDA': 'Unexpected\x20WebSocket\x20message',
        'rXpif': 'Unexpected\x20message',
        'vyNjN': function (_0x371fe3, _0x40163c) {
            return _0x371fe3 > _0x40163c;
        },
        'hJgpJ': 'Stop\x20propagation',
        'fNGpV': 'test\x20message',
        'ZqKJl': function (_0x564d9c, _0x4ab7b7, _0x588edc) {
            return _0x564d9c(_0x4ab7b7, _0x588edc);
        },
        'vCsnE': function (_0x36d7fd) {
            return _0x36d7fd();
        },
        'PKWlv': function (_0x257e76, _0x2231f4, _0x2d46a7) {
            return _0x257e76(_0x2231f4, _0x2d46a7);
        },
        'QtckT': 'should\x20expose\x20an\x20accessible\x20websocket\x20endpoint',
        'MfpuN': function (_0xbfe7f5, _0x3a386c, _0x1a2352) {
            return _0xbfe7f5(_0x3a386c, _0x1a2352);
        },
        'NlyZn': 'when\x20using\x20an\x20existing\x20websocket\x20API',
        'QgLIL': function (_0x347774, _0x2c9e68) {
            return _0x347774 * _0x2c9e68;
        },
        'nMTop': function (_0xa9d518, _0x1afc29) {
            return _0xa9d518(_0x1afc29);
        },
        'ifcRP': function (_0x3ae03a, _0x50f848, _0x130475) {
            return _0x3ae03a(_0x50f848, _0x130475);
        },
        'jIFrD': 'Two-Way\x20Setup',
        'cPfwV': 'Minimal\x20Setup'
    };
    this['timeout'](_0x3106c5['QgLIL'](_0x3106c5['QgLIL'](0x3e8, 0x3c), 0xa));
    let _0x39d90f, _0x24e13e, _0x3238af, _0x558ed6, _0x4ab87b;
    const _0x4afb34 = _0x3106c5['iHAhn'];
    _0x3106c5['nMTop'](before, async () => {
        const _0x4438aa = await fixtures['setup'](_0x3106c5['hnkLD']);
        return {
            servicePath: _0x3238af,
            updateConfig: _0x558ed6
        } = _0x4438aa, _0x24e13e = _0x4438aa['serviceConfig']['service'], _0x39d90f = _0x24e13e + '-' + _0x4afb34, _0x3106c5['rJeos'](deployService, _0x3238af);
    }), _0x3106c5['nMTop'](after, () => {
        if (!_0x4ab87b)
            return null;
        return _0x3106c5['PGSLs'](removeService, _0x3238af);
    });
    async function _0x7ecbb3() {
        const _0x571327 = await _0x3106c5['yAtys'](awsRequest, _0x3106c5['QFRzi'], _0x3106c5['TkFbW'], { 'StackName': _0x39d90f }), _0x5ba64d = _0x571327['Stacks'][0x0]['Outputs']['find'](_0x475b6f => _0x475b6f['OutputKey'] === 'ServiceEndpointWebsocket')['OutputValue'];
        return _0x5ba64d;
    }
    _0x3106c5['ifcRP'](describe, _0x3106c5['jIFrD'], () => {
        const _0x3a90b0 = {
            'PxSRE': function (_0x2282f9, _0x291078) {
                return _0x3106c5['PGSLs'](_0x2282f9, _0x291078);
            },
            'HDtLi': function (_0x39ba01, _0x126a48) {
                return _0x3106c5['PGSLs'](_0x39ba01, _0x126a48);
            },
            'AAfKa': _0x3106c5['nUNuU'],
            'YMrRL': _0x3106c5['fdqqu'],
            'WdegT': _0x3106c5['ijutC'],
            'LKUJu': _0x3106c5['fCGrA'],
            'OpHEn': _0x3106c5['FRYZQ'],
            'zSqxM': _0x3106c5['MkAXQ'],
            'qddFr': _0x3106c5['vQYLd'],
            'pHqzh': _0x3106c5['lvzAy'],
            'FoBIR': function (_0x137cb2, _0x4a4c73, _0x511f58) {
                return _0x3106c5['tfzYf'](_0x137cb2, _0x4a4c73, _0x511f58);
            },
            'MOfcD': function (_0x34b15e) {
                return _0x3106c5['jLePg'](_0x34b15e);
            }
        };
        let _0x5b9b66;
        _0x3106c5['PGSLs'](after, () => clearTimeout(_0x5b9b66)), _0x3106c5['tfzYf'](it, _0x3106c5['cfFUH'], async () => {
            const _0x311d99 = {
                    'KHoaj': function (_0xcee174, _0x368434) {
                        return _0x3a90b0['HDtLi'](_0xcee174, _0x368434);
                    },
                    'BsGQG': _0x3a90b0['zSqxM'],
                    'qagTA': _0x3a90b0['qddFr'],
                    'nbHLo': _0x3a90b0['pHqzh'],
                    'iKDWD': function (_0x3af697, _0x2032a7, _0x1410ab) {
                        return _0x3a90b0['FoBIR'](_0x3af697, _0x2032a7, _0x1410ab);
                    }
                }, _0x5569fb = await _0x3a90b0['MOfcD'](_0x7ecbb3);
            return new Promise((_0x2ab836, _0x77ecfc) => {
                const _0x28b2dd = {
                        'Oeola': function (_0x5734ff, _0x56981d) {
                            return _0x3a90b0['PxSRE'](_0x5734ff, _0x56981d);
                        },
                        'zFIiH': function (_0x134f77, _0x71f7d0) {
                            return _0x3a90b0['HDtLi'](_0x134f77, _0x71f7d0);
                        },
                        'yzRxO': _0x3a90b0['AAfKa']
                    }, _0x29cb17 = new WebSocket(_0x5569fb);
                _0x77ecfc = (_0x5cc975 => _0x6c25be => {
                    _0x311d99['KHoaj'](_0x5cc975, _0x6c25be);
                    try {
                        _0x29cb17['close']();
                    } catch (_0x3aefe0) {
                    }
                })(_0x77ecfc);
                const _0x539697 = () => {
                    log['debug'](_0x311d99['BsGQG']), _0x29cb17['send'](JSON['stringify']({
                        'action': _0x311d99['qagTA'],
                        'name': _0x311d99['nbHLo']
                    })), _0x5b9b66 = _0x311d99['iKDWD'](setTimeout, _0x539697, 0x3e8);
                };
                _0x29cb17['on'](_0x3a90b0['YMrRL'], _0x77ecfc), _0x29cb17['on'](_0x3a90b0['WdegT'], _0x539697), _0x29cb17['on'](_0x3a90b0['LKUJu'], _0x2ab836), _0x29cb17['on'](_0x3a90b0['OpHEn'], _0x166d13 => {
                    _0x4ab87b = !![], _0x28b2dd['Oeola'](clearTimeout, _0x5b9b66);
                    try {
                        log['debug']('Received\x20WebSocket\x20message:\x20' + _0x166d13), _0x28b2dd['zFIiH'](expect, _0x166d13)['to']['equal'](_0x28b2dd['yzRxO']);
                    } finally {
                        _0x29cb17['close']();
                    }
                });
            })['finally'](() => clearTimeout(_0x5b9b66));
        });
    }), _0x3106c5['ifcRP'](describe, _0x3106c5['cPfwV'], () => {
        const _0x2da2ba = {
            'SsoWS': function (_0xbffec9, _0xc007d4) {
                return _0x3106c5['SojYU'](_0xbffec9, _0xc007d4);
            },
            'Jlaee': _0x3106c5['ZenDA'],
            'nOanD': _0x3106c5['rXpif'],
            'Ehglz': function (_0x34121f, _0x19147e) {
                return _0x3106c5['vyNjN'](_0x34121f, _0x19147e);
            },
            'ULJaq': _0x3106c5['hJgpJ'],
            'PLJvv': _0x3106c5['fNGpV'],
            'qlNho': function (_0x38d2e5, _0x4c9fc3, _0x1bcb9c) {
                return _0x3106c5['ZqKJl'](_0x38d2e5, _0x4c9fc3, _0x1bcb9c);
            },
            'uKcfV': _0x3106c5['fdqqu'],
            'PimjX': _0x3106c5['ijutC'],
            'evpZG': _0x3106c5['fCGrA'],
            'UbCeh': _0x3106c5['FRYZQ'],
            'ZscwM': function (_0x58b5a0) {
                return _0x3106c5['vCsnE'](_0x58b5a0);
            }
        };
        _0x3106c5['PKWlv'](it, _0x3106c5['QtckT'], async function () {
            const _0x34d46d = {
                'snkNk': function (_0x216e01, _0x2c7742) {
                    return _0x2da2ba['SsoWS'](_0x216e01, _0x2c7742);
                },
                'ldVfq': _0x2da2ba['Jlaee'],
                'ElVPx': function (_0x5f513a, _0x384b99) {
                    return _0x2da2ba['SsoWS'](_0x5f513a, _0x384b99);
                },
                'ImgmC': _0x2da2ba['nOanD'],
                'jmxKF': function (_0x35dfbf, _0x117c4c) {
                    return _0x2da2ba['SsoWS'](_0x35dfbf, _0x117c4c);
                },
                'fuVwb': function (_0x553556, _0x1daba6) {
                    return _0x2da2ba['Ehglz'](_0x553556, _0x1daba6);
                },
                'Yqjsu': _0x2da2ba['ULJaq'],
                'YKnum': _0x2da2ba['PLJvv'],
                'mfhKg': function (_0x111fbd, _0x3993cd, _0x4b0ea9) {
                    return _0x2da2ba['qlNho'](_0x111fbd, _0x3993cd, _0x4b0ea9);
                },
                'PhRra': _0x2da2ba['uKcfV'],
                'kUODT': _0x2da2ba['PimjX'],
                'BlENF': _0x2da2ba['evpZG'],
                'MPKEG': _0x2da2ba['UbCeh']
            };
            if (!_0x4ab87b)
                this['skip']();
            const _0x1910a6 = await _0x2da2ba['ZscwM'](_0x7ecbb3);
            return log['debug']('WebSocket\x20Server\x20URL\x20' + _0x1910a6), _0x2da2ba['SsoWS'](expect, _0x1910a6)['to']['match'](/wss:\/\/.+\.execute-api\..+\.amazonaws\.com.+/), new Promise((_0x5d6618, _0x7e266d) => {
                const _0x40a0e3 = {
                        'kNscf': function (_0x3fb76c, _0x87a3f2) {
                            return _0x34d46d['jmxKF'](_0x3fb76c, _0x87a3f2);
                        },
                        'AAoli': function (_0x369cca, _0x25d367) {
                            return _0x34d46d['fuVwb'](_0x369cca, _0x25d367);
                        },
                        'GgpIW': _0x34d46d['Yqjsu'],
                        'MAFHE': _0x34d46d['YKnum'],
                        'tqUoA': function (_0x4d63ab, _0x546aea) {
                            return _0x34d46d['jmxKF'](_0x4d63ab, _0x546aea);
                        },
                        'tPoQh': function (_0x518570, _0x4af160, _0x57de1d) {
                            return _0x34d46d['mfhKg'](_0x518570, _0x4af160, _0x57de1d);
                        }
                    }, _0x3883bb = new WebSocket(_0x1910a6);
                let _0x40c9c8 = ![];
                _0x7e266d = (_0xa3f46 => _0x3162e8 => {
                    _0x40c9c8 = !![], _0x34d46d['snkNk'](_0xa3f46, _0x3162e8);
                    try {
                        _0x3883bb['close']();
                    } catch (_0x7460ef) {
                    }
                })(_0x7e266d), _0x3883bb['on'](_0x34d46d['PhRra'], _0x7e266d), _0x3883bb['on'](_0x34d46d['kUODT'], () => {
                    const _0x7539a0 = {
                        'sLerq': _0x40a0e3['GgpIW'],
                        'LslUS': _0x40a0e3['MAFHE'],
                        'LHfqy': function (_0x1ed5c8, _0x4d1310) {
                            return _0x40a0e3['tqUoA'](_0x1ed5c8, _0x4d1310);
                        }
                    };
                    _0x40a0e3['tPoQh'](confirmCloudWatchLogs, '/aws/websocket/' + _0x39d90f, () => {
                        if (_0x40c9c8)
                            throw new Error(_0x7539a0['sLerq']);
                        return _0x3883bb['send'](_0x7539a0['LslUS']), _0x7539a0['LHfqy'](wait, 0x1f4);
                    })['then'](_0x1bfb4c => {
                        _0x40a0e3['kNscf'](expect, _0x40a0e3['AAoli'](_0x1bfb4c['length'], 0x0))['to']['equal'](!![]), _0x3883bb['close']();
                    }, _0x7e266d);
                }), _0x3883bb['on'](_0x34d46d['BlENF'], _0x5d6618), _0x3883bb['on'](_0x34d46d['MPKEG'], _0x21730a => {
                    log['debug'](_0x34d46d['ldVfq'], _0x21730a), _0x34d46d['ElVPx'](_0x7e266d, new Error(_0x34d46d['ImgmC']));
                });
            });
        }), _0x3106c5['MfpuN'](describe, _0x3106c5['NlyZn'], () => {
            const _0x3c5015 = {
                'wVqUr': function (_0x142384, _0x41b494) {
                    return _0x3106c5['PGSLs'](_0x142384, _0x41b494);
                },
                'nQxrF': function (_0x42cd0e, _0x573700, _0x28f4ca) {
                    return _0x3106c5['tfzYf'](_0x42cd0e, _0x573700, _0x28f4ca);
                },
                'MkCHx': _0x3106c5['iHAhn'],
                'cLUqS': function (_0x79c04b, _0x581d5f) {
                    return _0x3106c5['MkCLR'](_0x79c04b, _0x581d5f);
                },
                'hlLyG': _0x3106c5['oVbbN'],
                'DDDfI': function (_0x217774, _0x2485be) {
                    return _0x3106c5['MkCLR'](_0x217774, _0x2485be);
                },
                'FNIZJ': _0x3106c5['ovkxA'],
                'kRgPx': function (_0x22628d, _0x1b60da) {
                    return _0x3106c5['SojYU'](_0x22628d, _0x1b60da);
                }
            };
            let _0x43171e;
            _0x3106c5['SojYU'](before, async function () {
                if (!_0x4ab87b)
                    this['skip']();
                const _0x29ef4c = _0x4afb34 + '-' + _0x24e13e + '-ext-api', _0x468f86 = await _0x3c5015['wVqUr'](createApi, _0x29ef4c);
                return _0x43171e = _0x468f86['ApiId'], await _0x3c5015['nQxrF'](createStage, _0x43171e, _0x3c5015['MkCHx']), await _0x3c5015['cLUqS'](_0x558ed6, { 'provider': { 'apiGateway': { 'websocketApiId': _0x43171e } } }), _0x3c5015['cLUqS'](deployService, _0x3238af);
            }), _0x3106c5['SojYU'](after, async () => {
                const _0x3965fa = _0x3c5015['hlLyG']['split']('|');
                let _0xbffb01 = 0x0;
                while (!![]) {
                    switch (_0x3965fa[_0xbffb01++]) {
                    case '0':
                        if (!_0x4ab87b)
                            return;
                        continue;
                    case '1':
                        await _0x3c5015['DDDfI'](deleteApi, _0x43171e);
                        continue;
                    case '2':
                        await _0x3c5015['DDDfI'](_0x558ed6, { 'provider': { 'apiGateway': { 'websocketApiId': null } } });
                        continue;
                    case '3':
                        log['debug'](_0x3c5015['FNIZJ']);
                        continue;
                    case '4':
                        await _0x3c5015['nQxrF'](deleteStage, _0x43171e, _0x3c5015['MkCHx']);
                        continue;
                    case '5':
                        await _0x3c5015['DDDfI'](deployService, _0x3238af);
                        continue;
                    }
                    break;
                }
            }), _0x3106c5['hKgLV'](it, _0x3106c5['NkwYp'], async () => {
                const _0xa6a6d8 = await _0x3c5015['DDDfI'](getRoutes, _0x43171e);
                _0x3c5015['kRgPx'](expect, _0xa6a6d8['length'])['to']['equal'](0x4);
            });
        });
    });
});
