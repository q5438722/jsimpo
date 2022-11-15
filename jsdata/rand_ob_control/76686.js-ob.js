import { expect } from 'chai';
import {
    getCredentials,
    api,
    request,
    credentials
} from '../../../data/api-data.js';
import {
    updatePermission,
    updateSetting
} from '../../../data/permissions.helper';
import { createDepartment } from '../../../data/livechat/department.js';
describe('LIVECHAT\x20-\x20departments', function () {
    const _0x47dffc = {
        'oqvIe': function (_0x1e4a83) {
            return _0x1e4a83();
        },
        'YKuCo': function (_0x4c6ec9, _0x592ec4, _0x33d14f) {
            return _0x4c6ec9(_0x592ec4, _0x33d14f);
        },
        'JFMYN': 'Livechat_enabled',
        'qEoQK': 'view-l-room',
        'JmTMF': 'admin',
        'dXyuj': function (_0x460515, _0x44978d) {
            return _0x460515(_0x44978d);
        },
        'GVTxI': 'success',
        'zaKJv': 'error-not-authorized',
        'vjaRV': 'livechat/department',
        'UiaIW': 'Content-Type',
        'JWrCG': 'application/json',
        'RYpvj': '0|3|4|1|2',
        'NdPDf': 'total',
        'MrIaZ': 'count',
        'WBDCe': 'array',
        'UeDqv': function (_0x7a6193, _0x5879ff) {
            return _0x7a6193(_0x5879ff);
        },
        'zwted': 'offset',
        'dShKE': 'should\x20return\x20an\x20\x22unauthorized\x20error\x22\x20when\x20the\x20user\x20does\x20not\x20have\x20the\x20necessary\x20permission\x20[\x22view-livechat-departments\x22,\x20\x22view-l-room\x22]',
        'mAOVz': function (_0x53f0b4, _0x12592f, _0x3e7242) {
            return _0x53f0b4(_0x12592f, _0x3e7242);
        },
        'onPaq': 'should\x20return\x20an\x20array\x20of\x20departments',
        'JTNPE': function (_0x4d44e4, _0x10d163) {
            return _0x4d44e4(_0x10d163);
        },
        'KBvNu': function (_0x3cdae0, _0x5122f7) {
            return _0x3cdae0(_0x5122f7);
        },
        'hLkfl': 'department',
        'PyJfw': 'agents',
        'OXvcA': function (_0x1d9f5e, _0x52cc0f) {
            return _0x1d9f5e(_0x52cc0f);
        },
        'fgAbR': function (_0xbe3e24, _0x40f421) {
            return _0xbe3e24(_0x40f421);
        },
        'SoHvg': 'view-livechat-departments',
        'xFTyF': function (_0x4eafbb, _0x5df51a, _0x223850) {
            return _0x4eafbb(_0x5df51a, _0x223850);
        },
        'urhMN': 'should\x20return\x20the\x20created\x20department\x20without\x20the\x20agents\x20if\x20the\x20user\x20does\x20not\x20have\x20the\x20necessary\x20permission',
        'iTzbS': function (_0x23cfaa, _0x515856, _0x15a5b5) {
            return _0x23cfaa(_0x515856, _0x15a5b5);
        },
        'MyatG': 'should\x20return\x20the\x20created\x20department\x20without\x20the\x20agents\x20if\x20the\x20user\x20does\x20have\x20the\x20permission\x20but\x20request\x20to\x20no\x20include\x20the\x20agents',
        'VJArS': function (_0xf1486f, _0x1aa354, _0x261c54) {
            return _0xf1486f(_0x1aa354, _0x261c54);
        },
        'NKuJe': 'should\x20return\x20the\x20created\x20department',
        'eWOhU': function (_0x52bc4f, _0x58a9b7) {
            return _0x52bc4f(_0x58a9b7);
        },
        'GZpgS': function (_0x570892, _0x29cdd2, _0xc343ca) {
            return _0x570892(_0x29cdd2, _0xc343ca);
        },
        'XUCAa': 'livechat/department/id'
    };
    this['retries'](0x0);
    let _0x2704f2;
    _0x47dffc['eWOhU'](before, _0xcf1994 => getCredentials(_0xcf1994)), _0x47dffc['eWOhU'](before, _0x101f9c => {
        const _0x528b0e = {
            'gXmVQ': function (_0x42dcae) {
                return _0x47dffc['oqvIe'](_0x42dcae);
            }
        };
        _0x47dffc['YKuCo'](updateSetting, _0x47dffc['JFMYN'], !![])['then'](() => createDepartment())['then'](_0x2b4e40 => {
            _0x2704f2 = _0x2b4e40, _0x528b0e['gXmVQ'](_0x101f9c);
        })['catch'](console['log']);
    }), _0x47dffc['GZpgS'](describe, _0x47dffc['vjaRV'], () => {
        const _0xf3db2 = {
            'urBBO': function (_0x201a4d, _0x456c9a) {
                return _0x47dffc['dXyuj'](_0x201a4d, _0x456c9a);
            },
            'WkJuo': _0x47dffc['GVTxI'],
            'ZHooN': _0x47dffc['zaKJv'],
            'deOMz': _0x47dffc['vjaRV'],
            'xMzoP': _0x47dffc['UiaIW'],
            'JPSBw': _0x47dffc['JWrCG'],
            'jlOGd': _0x47dffc['RYpvj'],
            'CJhoQ': _0x47dffc['NdPDf'],
            'wxKaB': _0x47dffc['MrIaZ'],
            'pIgjU': _0x47dffc['WBDCe'],
            'CfkpJ': function (_0x1ffb63, _0x12e2bf) {
                return _0x47dffc['UeDqv'](_0x1ffb63, _0x12e2bf);
            },
            'ccixP': _0x47dffc['zwted'],
            'uYwjv': function (_0x152e33, _0x5d6020) {
                return _0x47dffc['UeDqv'](_0x152e33, _0x5d6020);
            }
        };
        _0x47dffc['YKuCo'](it, _0x47dffc['dShKE'], _0x1b1c51 => {
            _0x47dffc['YKuCo'](updatePermission, _0x47dffc['qEoQK'], [])['then'](() => updatePermission('view-livechat-departments', []))['then'](() => {
                const _0x2a098e = {
                    'TYFnN': function (_0x4bd515, _0x512134) {
                        return _0xf3db2['urBBO'](_0x4bd515, _0x512134);
                    },
                    'WzFYD': _0xf3db2['WkJuo'],
                    'fLcjd': _0xf3db2['ZHooN']
                };
                request['get'](_0xf3db2['urBBO'](api, _0xf3db2['deOMz']))['set'](credentials)['expect'](_0xf3db2['xMzoP'], _0xf3db2['JPSBw'])['expect'](0x190)['expect'](_0x2e9175 => {
                    _0x2a098e['TYFnN'](expect, _0x2e9175['body'])['to']['have']['property'](_0x2a098e['WzFYD'], ![]), _0x2a098e['TYFnN'](expect, _0x2e9175['body']['error'])['to']['be']['equal'](_0x2a098e['fLcjd']);
                })['end'](_0x1b1c51);
            });
        }), _0x47dffc['mAOVz'](it, _0x47dffc['onPaq'], _0x2578ea => {
            _0x47dffc['YKuCo'](updatePermission, _0x47dffc['qEoQK'], [_0x47dffc['JmTMF']])['then'](() => updatePermission('view-livechat-departments', ['admin']))['then'](() => {
                const _0x240cb7 = {
                    'qXpIZ': _0xf3db2['jlOGd'],
                    'orqcz': function (_0x5bcaca, _0x355b0f) {
                        return _0xf3db2['urBBO'](_0x5bcaca, _0x355b0f);
                    },
                    'LYqTR': _0xf3db2['WkJuo'],
                    'jJklv': function (_0x51c86e, _0x1728c8) {
                        return _0xf3db2['urBBO'](_0x51c86e, _0x1728c8);
                    },
                    'HfXZm': _0xf3db2['CJhoQ'],
                    'Otwch': function (_0x151b99, _0x3c27ae) {
                        return _0xf3db2['urBBO'](_0x151b99, _0x3c27ae);
                    },
                    'eQljx': _0xf3db2['wxKaB'],
                    'ybwTc': _0xf3db2['pIgjU'],
                    'dATkG': function (_0x26c73b, _0x499d2a) {
                        return _0xf3db2['CfkpJ'](_0x26c73b, _0x499d2a);
                    },
                    'epkOU': _0xf3db2['ccixP']
                };
                request['get'](_0xf3db2['uYwjv'](api, _0xf3db2['deOMz']))['set'](credentials)['expect'](_0xf3db2['xMzoP'], _0xf3db2['JPSBw'])['expect'](0xc8)['expect'](_0x1b0987 => {
                    const _0x5b5ba7 = _0x240cb7['qXpIZ']['split']('|');
                    let _0x464b07 = 0x0;
                    while (!![]) {
                        switch (_0x5b5ba7[_0x464b07++]) {
                        case '0':
                            _0x240cb7['orqcz'](expect, _0x1b0987['body'])['to']['have']['property'](_0x240cb7['LYqTR'], !![]);
                            continue;
                        case '1':
                            _0x240cb7['jJklv'](expect, _0x1b0987['body'])['to']['have']['property'](_0x240cb7['HfXZm']);
                            continue;
                        case '2':
                            _0x240cb7['Otwch'](expect, _0x1b0987['body'])['to']['have']['property'](_0x240cb7['eQljx']);
                            continue;
                        case '3':
                            _0x240cb7['Otwch'](expect, _0x1b0987['body']['departments'])['to']['be']['an'](_0x240cb7['ybwTc']);
                            continue;
                        case '4':
                            _0x240cb7['dATkG'](expect, _0x1b0987['body'])['to']['have']['property'](_0x240cb7['epkOU']);
                            continue;
                        }
                        break;
                    }
                })['end'](_0x2578ea);
            });
        });
    }), _0x47dffc['GZpgS'](describe, _0x47dffc['XUCAa'], () => {
        const _0x1d33b1 = {
            'EBLOu': function (_0x2f469c, _0x102b57) {
                return _0x47dffc['OXvcA'](_0x2f469c, _0x102b57);
            },
            'IDtaJ': _0x47dffc['UiaIW'],
            'AOSiY': _0x47dffc['JWrCG'],
            'dMcxI': function (_0x40755c, _0x2f1047) {
                return _0x47dffc['OXvcA'](_0x40755c, _0x2f1047);
            },
            'dRNZu': _0x47dffc['GVTxI'],
            'rqhCq': _0x47dffc['hLkfl'],
            'przvE': _0x47dffc['PyJfw'],
            'krIYR': function (_0x2cd1db, _0x104a8f) {
                return _0x47dffc['OXvcA'](_0x2cd1db, _0x104a8f);
            },
            'fsHix': function (_0x487dc3, _0x2d87c1, _0x484479) {
                return _0x47dffc['mAOVz'](_0x487dc3, _0x2d87c1, _0x484479);
            },
            'VIPbs': _0x47dffc['qEoQK'],
            'somCI': _0x47dffc['JmTMF'],
            'zwRfI': function (_0x187034, _0x33f967) {
                return _0x47dffc['fgAbR'](_0x187034, _0x33f967);
            },
            'DWxwU': _0x47dffc['SoHvg']
        };
        _0x47dffc['mAOVz'](it, _0x47dffc['dShKE'], _0x2a9536 => {
            const _0x49fb8d = {
                'njXRZ': function (_0x89aef1, _0x574b39) {
                    return _0x47dffc['JTNPE'](_0x89aef1, _0x574b39);
                },
                'rZwiH': _0x47dffc['GVTxI'],
                'bSyma': _0x47dffc['zaKJv']
            };
            _0x47dffc['mAOVz'](updatePermission, _0x47dffc['qEoQK'], [])['then'](() => updatePermission('view-livechat-departments', []))['then'](() => {
                request['get'](_0x1d33b1['EBLOu'](api, 'livechat/department/' + _0x2704f2['_id']))['set'](credentials)['expect'](_0x1d33b1['IDtaJ'], _0x1d33b1['AOSiY'])['expect'](0x190)['expect'](_0x95adfe => {
                    _0x49fb8d['njXRZ'](expect, _0x95adfe['body'])['to']['have']['property'](_0x49fb8d['rZwiH'], ![]), _0x49fb8d['njXRZ'](expect, _0x95adfe['body']['error'])['to']['be']['equal'](_0x49fb8d['bSyma']);
                })['end'](_0x2a9536);
            });
        }), _0x47dffc['xFTyF'](it, _0x47dffc['urhMN'], _0x120bd1 => {
            _0x1d33b1['fsHix'](updatePermission, _0x1d33b1['VIPbs'], [_0x1d33b1['somCI']])['then'](() => updatePermission('view-livechat-departments', []))['then'](() => {
                const _0x4500f9 = {
                    'JtHSC': function (_0xba6e5a, _0x203fb3) {
                        return _0x1d33b1['dMcxI'](_0xba6e5a, _0x203fb3);
                    },
                    'GHpvS': _0x1d33b1['dRNZu'],
                    'jvZoK': _0x1d33b1['rqhCq'],
                    'DzHZm': function (_0xc81e87, _0x5ebbf0) {
                        return _0x1d33b1['dMcxI'](_0xc81e87, _0x5ebbf0);
                    },
                    'BRFqT': _0x1d33b1['przvE']
                };
                request['get'](_0x1d33b1['krIYR'](api, 'livechat/department/' + _0x2704f2['_id']))['set'](credentials)['expect'](_0x1d33b1['IDtaJ'], _0x1d33b1['AOSiY'])['expect'](0xc8)['expect'](_0x3920ff => {
                    _0x4500f9['JtHSC'](expect, _0x3920ff['body'])['to']['have']['property'](_0x4500f9['GHpvS'], !![]), _0x4500f9['JtHSC'](expect, _0x3920ff['body'])['to']['have']['property'](_0x4500f9['jvZoK']), _0x4500f9['DzHZm'](expect, _0x3920ff['body'])['to']['not']['have']['property'](_0x4500f9['BRFqT']), _0x4500f9['DzHZm'](expect, _0x3920ff['body']['department']['_id'])['to']['be']['equal'](_0x2704f2['_id']);
                })['end'](_0x120bd1);
            });
        }), _0x47dffc['iTzbS'](it, _0x47dffc['MyatG'], _0x2cca61 => {
            const _0x54cea1 = {
                'pXHSo': function (_0x348839, _0x477971) {
                    return _0x1d33b1['krIYR'](_0x348839, _0x477971);
                },
                'nNVKj': _0x1d33b1['dRNZu'],
                'JdXef': function (_0x502c88, _0x5728a9) {
                    return _0x1d33b1['zwRfI'](_0x502c88, _0x5728a9);
                },
                'kCmyF': _0x1d33b1['rqhCq'],
                'IACLZ': function (_0x49a420, _0x2981e4) {
                    return _0x1d33b1['zwRfI'](_0x49a420, _0x2981e4);
                },
                'zizBI': _0x1d33b1['przvE']
            };
            _0x1d33b1['fsHix'](updatePermission, _0x1d33b1['DWxwU'], [_0x1d33b1['somCI']])['then'](() => {
                request['get'](_0x1d33b1['krIYR'](api, 'livechat/department/' + _0x2704f2['_id'] + '?includeAgents=false'))['set'](credentials)['expect'](_0x1d33b1['IDtaJ'], _0x1d33b1['AOSiY'])['expect'](0xc8)['expect'](_0x35a394 => {
                    _0x54cea1['pXHSo'](expect, _0x35a394['body'])['to']['have']['property'](_0x54cea1['nNVKj'], !![]), _0x54cea1['JdXef'](expect, _0x35a394['body'])['to']['have']['property'](_0x54cea1['kCmyF']), _0x54cea1['IACLZ'](expect, _0x35a394['body'])['to']['not']['have']['property'](_0x54cea1['zizBI']), _0x54cea1['IACLZ'](expect, _0x35a394['body']['department']['_id'])['to']['be']['equal'](_0x2704f2['_id']);
                })['end'](_0x2cca61);
            });
        }), _0x47dffc['VJArS'](it, _0x47dffc['NKuJe'], _0x49f3ee => {
            const _0x4a78b4 = {
                'vYdzB': function (_0x3d45c6, _0x48b234) {
                    return _0x47dffc['KBvNu'](_0x3d45c6, _0x48b234);
                },
                'CIarq': _0x47dffc['GVTxI'],
                'DEGSQ': _0x47dffc['hLkfl'],
                'ANWZL': _0x47dffc['PyJfw'],
                'ZzVJz': function (_0xf15738, _0x4d3065) {
                    return _0x47dffc['OXvcA'](_0xf15738, _0x4d3065);
                },
                'sDAzb': _0x47dffc['UiaIW'],
                'MgKhj': _0x47dffc['JWrCG']
            };
            _0x47dffc['mAOVz'](updatePermission, _0x47dffc['qEoQK'], [_0x47dffc['JmTMF']])['then'](() => updatePermission('view-livechat-departments', ['admin']))['then'](() => {
                request['get'](_0x4a78b4['ZzVJz'](api, 'livechat/department/' + _0x2704f2['_id']))['set'](credentials)['expect'](_0x4a78b4['sDAzb'], _0x4a78b4['MgKhj'])['expect'](0xc8)['expect'](_0x15f9c6 => {
                    _0x4a78b4['vYdzB'](expect, _0x15f9c6['body'])['to']['have']['property'](_0x4a78b4['CIarq'], !![]), _0x4a78b4['vYdzB'](expect, _0x15f9c6['body'])['to']['have']['property'](_0x4a78b4['DEGSQ']), _0x4a78b4['vYdzB'](expect, _0x15f9c6['body'])['to']['have']['property'](_0x4a78b4['ANWZL']), _0x4a78b4['ZzVJz'](expect, _0x15f9c6['body']['department']['_id'])['to']['be']['equal'](_0x2704f2['_id']);
                })['end'](_0x49f3ee);
            });
        });
    });
});
