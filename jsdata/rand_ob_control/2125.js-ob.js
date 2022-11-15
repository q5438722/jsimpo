import _0x394cab from './utils';
describe('when\x20assignWithDepth:\x20should\x20merge\x20objects\x20within\x20objects', function () {
    const _0x4381c6 = {
        'vDTma': 'bar',
        'jkyKB': function (_0x27778f, _0x4bc3b1) {
            return _0x27778f(_0x4bc3b1);
        },
        'atTGL': 'foo',
        'XuXay': 'should\x20NOT\x20clobber',
        'SydJT': 'foobar',
        'kvKSW': 'this',
        'fOTLb': 'clobbered',
        'yCMYp': 'clobbered\x20other\x20foo',
        'wXcGh': 'present',
        'ZWmHF': 'shouldNotBePresent',
        'IalOD': function (_0x8309bf, _0x38e53b) {
            return _0x8309bf(_0x38e53b);
        },
        'pkCkT': function (_0x2e7bf0, _0x54d0f7) {
            return _0x2e7bf0(_0x54d0f7);
        },
        'dZwXL': function (_0x4ba00a, _0x4ff051, _0x1d1bd9) {
            return _0x4ba00a(_0x4ff051, _0x1d1bd9);
        },
        'IhNQF': 'should\x20handle\x20simple,\x20depth:1\x20types\x20(identity)',
        'lQcCe': 'should\x20handle\x20simple,\x20depth:1\x20types\x20(dst:\x20undefined)',
        'hNNqW': function (_0x4b62bb, _0x17b1e8, _0x394499) {
            return _0x4b62bb(_0x17b1e8, _0x394499);
        },
        'fZGpW': 'should\x20handle\x20simple,\x20depth:1\x20types\x20(src:\x20undefined)',
        'azPbj': function (_0x410238, _0x393fe7, _0x706a35) {
            return _0x410238(_0x393fe7, _0x706a35);
        },
        'DMvYK': 'should\x20handle\x20simple,\x20depth:1\x20types\x20(merge)',
        'caCyZ': function (_0x37161b, _0xc6d0fc, _0x185ab4) {
            return _0x37161b(_0xc6d0fc, _0x185ab4);
        },
        'EVboX': 'should\x20handle\x20depth:2\x20types\x20(dst:\x20orphan)',
        'KcYRm': function (_0xd1b268, _0x3a4d7d, _0x795f5b) {
            return _0xd1b268(_0x3a4d7d, _0x795f5b);
        },
        'JzeqD': 'should\x20handle\x20depth:2\x20types\x20(dst:\x20object,\x20src:\x20simple\x20type)',
        'ulwYP': 'should\x20handle\x20depth:2\x20types\x20(src:\x20orphan)',
        'mrXsL': 'should\x20handle\x20depth:2\x20types\x20(merge)',
        'hwoyn': function (_0x338ec6, _0x4e33d2, _0x97a100) {
            return _0x338ec6(_0x4e33d2, _0x97a100);
        },
        'fTLmv': 'should\x20handle\x20depth:3\x20types\x20(merge\x20with\x20clobber\x20because\x20assignWithDepth::depth\x20==\x202)',
        'yZXLR': function (_0x47af67, _0x280155, _0x2c7bbc) {
            return _0x47af67(_0x280155, _0x2c7bbc);
        },
        'RKFks': 'should\x20handle\x20depth:3\x20types\x20(merge\x20with\x20clobber\x20because\x20assignWithDepth::depth\x20==\x201)',
        'wVARU': function (_0x5ea511, _0x4a998f, _0x4171d3) {
            return _0x5ea511(_0x4a998f, _0x4171d3);
        },
        'KwzEd': 'should\x20handle\x20depth:3\x20types\x20(merge\x20with\x20no\x20clobber\x20because\x20assignWithDepth::depth\x20==\x203)'
    };
    _0x4381c6['dZwXL'](it, _0x4381c6['IhNQF'], function () {
        let _0x4d0068 = {
                'foo': _0x4381c6['vDTma'],
                'bar': 0x0
            }, _0x3d41b0 = {
                'foo': _0x4381c6['vDTma'],
                'bar': 0x0
            }, _0x294424 = _0x394cab['assignWithDepth'](_0x4d0068, _0x3d41b0);
        _0x4381c6['jkyKB'](expect, _0x294424)['toEqual'](_0x3d41b0);
    }), _0x4381c6['dZwXL'](it, _0x4381c6['lQcCe'], function () {
        let _0x5c9607 = undefined, _0x524e0c = {
                'foo': _0x4381c6['vDTma'],
                'bar': 0x0
            }, _0x1ff249 = _0x394cab['assignWithDepth'](_0x5c9607, _0x524e0c);
        _0x4381c6['jkyKB'](expect, _0x1ff249)['toEqual'](_0x524e0c);
    }), _0x4381c6['hNNqW'](it, _0x4381c6['fZGpW'], function () {
        let _0x17c631 = {
                'foo': _0x4381c6['vDTma'],
                'bar': 0x0
            }, _0x5de827 = undefined, _0x2c0f29 = _0x394cab['assignWithDepth'](_0x17c631, _0x5de827);
        _0x4381c6['jkyKB'](expect, _0x2c0f29)['toEqual'](_0x17c631);
    }), _0x4381c6['azPbj'](it, _0x4381c6['DMvYK'], function () {
        let _0x5eaf7e = {
                'foo': _0x4381c6['vDTma'],
                'bar': 0x0
            }, _0x2821a1 = { 'foo': _0x4381c6['atTGL'] }, _0x52d415 = _0x394cab['assignWithDepth'](_0x5eaf7e, _0x2821a1);
        _0x4381c6['jkyKB'](expect, _0x52d415)['toEqual']({
            'foo': _0x4381c6['atTGL'],
            'bar': 0x0
        });
    }), _0x4381c6['caCyZ'](it, _0x4381c6['EVboX'], function () {
        let _0x52d21d = {
                'foo': _0x4381c6['vDTma'],
                'bar': { 'foo': _0x4381c6['vDTma'] }
            }, _0xe7fb96 = { 'foo': _0x4381c6['vDTma'] }, _0x2ff077 = _0x394cab['assignWithDepth'](_0x52d21d, _0xe7fb96);
        _0x4381c6['jkyKB'](expect, _0x2ff077)['toEqual'](_0x52d21d);
    }), _0x4381c6['KcYRm'](it, _0x4381c6['JzeqD'], function () {
        let _0x2a01db = {
                'foo': _0x4381c6['vDTma'],
                'bar': { 'foo': _0x4381c6['vDTma'] }
            }, _0x305af5 = {
                'foo': _0x4381c6['atTGL'],
                'bar': _0x4381c6['XuXay']
            }, _0x4a68f1 = _0x394cab['assignWithDepth'](_0x2a01db, _0x305af5);
        _0x4381c6['jkyKB'](expect, _0x4a68f1)['toEqual']({
            'foo': _0x4381c6['atTGL'],
            'bar': { 'foo': _0x4381c6['vDTma'] }
        });
    }), _0x4381c6['KcYRm'](it, _0x4381c6['ulwYP'], function () {
        let _0x35f0f0 = { 'foo': _0x4381c6['vDTma'] }, _0x25decc = {
                'foo': _0x4381c6['vDTma'],
                'bar': { 'foo': _0x4381c6['vDTma'] }
            }, _0x26f33e = _0x394cab['assignWithDepth'](_0x35f0f0, _0x25decc);
        _0x4381c6['jkyKB'](expect, _0x26f33e)['toEqual'](_0x25decc);
    }), _0x4381c6['KcYRm'](it, _0x4381c6['mrXsL'], function () {
        let _0x4ccea7 = {
                'foo': _0x4381c6['vDTma'],
                'bar': { 'foo': _0x4381c6['vDTma'] },
                'boofar': 0x1
            }, _0x179b0c = {
                'foo': _0x4381c6['atTGL'],
                'bar': { 'bar': 0x0 },
                'foobar': _0x4381c6['SydJT']
            }, _0x55eeb6 = _0x394cab['assignWithDepth'](_0x4ccea7, _0x179b0c);
        _0x4381c6['jkyKB'](expect, _0x55eeb6)['toEqual']({
            'foo': _0x4381c6['atTGL'],
            'bar': {
                'foo': _0x4381c6['vDTma'],
                'bar': 0x0
            },
            'foobar': _0x4381c6['SydJT'],
            'boofar': 0x1
        });
    }), _0x4381c6['hwoyn'](it, _0x4381c6['fTLmv'], function () {
        let _0x196685 = {
                'foo': _0x4381c6['vDTma'],
                'bar': {
                    'foo': _0x4381c6['vDTma'],
                    'bar': {
                        'foo': {
                            'message': _0x4381c6['kvKSW'],
                            'willbe': _0x4381c6['fOTLb']
                        }
                    }
                },
                'boofar': 0x1
            }, _0x4c8766 = {
                'foo': _0x4381c6['atTGL'],
                'bar': {
                    'foo': _0x4381c6['atTGL'],
                    'bar': { 'foo': { 'message': _0x4381c6['yCMYp'] } }
                },
                'foobar': _0x4381c6['SydJT']
            }, _0x1273b2 = _0x394cab['assignWithDepth'](_0x196685, _0x4c8766);
        _0x4381c6['jkyKB'](expect, _0x1273b2)['toEqual']({
            'foo': _0x4381c6['atTGL'],
            'bar': {
                'foo': _0x4381c6['atTGL'],
                'bar': { 'foo': { 'message': _0x4381c6['yCMYp'] } }
            },
            'foobar': _0x4381c6['SydJT'],
            'boofar': 0x1
        });
    }), _0x4381c6['yZXLR'](it, _0x4381c6['RKFks'], function () {
        let _0x45fd4f = {
                'foo': _0x4381c6['vDTma'],
                'bar': {
                    'foo': _0x4381c6['vDTma'],
                    'bar': {
                        'foo': {
                            'message': '',
                            'willNotbe': _0x4381c6['wXcGh']
                        },
                        'bar': _0x4381c6['ZWmHF']
                    }
                },
                'boofar': 0x1
            }, _0x4fdf95 = {
                'foo': _0x4381c6['atTGL'],
                'bar': {
                    'foo': _0x4381c6['atTGL'],
                    'bar': { 'foo': { 'message': _0x4381c6['kvKSW'] } }
                },
                'foobar': _0x4381c6['SydJT']
            }, _0x3f017 = _0x394cab['assignWithDepth'](_0x45fd4f, _0x4fdf95, { 'depth': 0x1 });
        _0x4381c6['IalOD'](expect, _0x3f017)['toEqual']({
            'foo': _0x4381c6['atTGL'],
            'bar': {
                'foo': _0x4381c6['atTGL'],
                'bar': { 'foo': { 'message': _0x4381c6['kvKSW'] } }
            },
            'foobar': _0x4381c6['SydJT'],
            'boofar': 0x1
        });
    }), _0x4381c6['wVARU'](it, _0x4381c6['KwzEd'], function () {
        let _0x2678c5 = {
                'foo': _0x4381c6['vDTma'],
                'bar': {
                    'foo': _0x4381c6['vDTma'],
                    'bar': {
                        'foo': {
                            'message': '',
                            'willbe': _0x4381c6['wXcGh']
                        }
                    }
                },
                'boofar': 0x1
            }, _0x2424f1 = {
                'foo': _0x4381c6['atTGL'],
                'bar': {
                    'foo': _0x4381c6['atTGL'],
                    'bar': { 'foo': { 'message': _0x4381c6['kvKSW'] } }
                },
                'foobar': _0x4381c6['SydJT']
            }, _0xa6547c = _0x394cab['assignWithDepth'](_0x2678c5, _0x2424f1, { 'depth': 0x3 });
        _0x4381c6['pkCkT'](expect, _0xa6547c)['toEqual']({
            'foo': _0x4381c6['atTGL'],
            'bar': {
                'foo': _0x4381c6['atTGL'],
                'bar': {
                    'foo': {
                        'message': _0x4381c6['kvKSW'],
                        'willbe': _0x4381c6['wXcGh']
                    }
                }
            },
            'foobar': _0x4381c6['SydJT'],
            'boofar': 0x1
        });
    });
}), describe('when\x20memoizing', function () {
    const _0x25710d = {
        'WwyFM': function (_0x173fa3, _0x484e13) {
            return _0x173fa3 < _0x484e13;
        },
        'bcpev': function (_0x1843f2, _0x11a828) {
            return _0x1843f2 + _0x11a828;
        },
        'vLeCg': function (_0x1f800d, _0x2f14b8, _0x2a8d24) {
            return _0x1f800d(_0x2f14b8, _0x2a8d24);
        },
        'OQKEQ': function (_0x3bee73, _0x2d9136) {
            return _0x3bee73 - _0x2d9136;
        },
        'idQza': function (_0x574e88, _0x139bbe) {
            return _0x574e88(_0x139bbe);
        },
        'TAnsP': function (_0x49ca11, _0xe7d5ac, _0x357b49) {
            return _0x49ca11(_0xe7d5ac, _0x357b49);
        },
        'yRQeS': 'should\x20return\x20the\x20same\x20value'
    };
    _0x25710d['TAnsP'](it, _0x25710d['yRQeS'], function () {
        const _0x13aea7 = _0x394cab['memoize'](function (_0x18cce4, _0x2ce452) {
            return _0x2ce452['flag'] = !![], _0x25710d['WwyFM'](_0x18cce4, 0x2) ? 0x1 : _0x25710d['bcpev'](_0x25710d['vLeCg'](_0x13aea7, _0x25710d['OQKEQ'](_0x18cce4, 0x2), _0x2ce452), _0x25710d['vLeCg'](_0x13aea7, _0x25710d['OQKEQ'](_0x18cce4, 0x1), _0x2ce452));
        });
        let _0x30c94a = { 'flag': ![] };
        _0x25710d['vLeCg'](_0x13aea7, 0xa, _0x30c94a), _0x25710d['idQza'](expect, _0x30c94a['flag'])['toBe'](!![]), _0x30c94a = { 'flag': ![] }, _0x25710d['vLeCg'](_0x13aea7, 0xa, _0x30c94a), _0x25710d['idQza'](expect, _0x30c94a['flag'])['toBe'](![]);
    });
}), describe('when\x20detecting\x20chart\x20type\x20', function () {
    const _0x12f0c8 = {
        'hfmtt': 'graph\x20TB\x0abfs1:queue',
        'MLCpF': function (_0x4b50be, _0x11a037) {
            return _0x4b50be(_0x11a037);
        },
        'ojwoe': 'flowchart',
        'AGCLb': 'sequence',
        'aNZmG': function (_0x3dce10, _0x259e8e) {
            return _0x3dce10(_0x259e8e);
        },
        'RHpCk': 'dark',
        'pclmv': function (_0x34e587, _0xdebeb8) {
            return _0x34e587(_0xdebeb8);
        },
        'zzVZg': function (_0xe89aa6, _0x1f910f) {
            return _0xe89aa6(_0x1f910f);
        },
        'tAeps': '\x20\x20\x20\x20graph\x20TB\x0abfs1:queue',
        'pGCOI': function (_0x2344d7, _0x512518) {
            return _0x2344d7(_0x512518);
        },
        'JPJdX': '\x20\x20\x0a\x20\x20graph\x20TB\x0abfs1:queue',
        'zDtXI': '\x20\x20\x0a\x20\x20gitGraph\x20TB:\x0abfs1:queue',
        'YwjjW': function (_0x259ab5, _0x33926a) {
            return _0x259ab5(_0x33926a);
        },
        'GFjwR': 'git',
        'YfPjp': function (_0x3ab1aa, _0x144e0d, _0x598981) {
            return _0x3ab1aa(_0x144e0d, _0x598981);
        },
        'fkNdd': 'should\x20handle\x20a\x20graph\x20definition',
        'UIfyX': 'should\x20handle\x20an\x20initialize\x20definition',
        'EVLfO': 'should\x20handle\x20an\x20init\x20definition',
        'bvlYw': function (_0x22ef60, _0x461687, _0x77e2b9) {
            return _0x22ef60(_0x461687, _0x77e2b9);
        },
        'GSHRs': 'should\x20handle\x20an\x20init\x20definition\x20with\x20config\x20converted\x20to\x20the\x20proper\x20diagram\x20configuration',
        'bGAgs': 'should\x20handle\x20a\x20multiline\x20init\x20definition',
        'MXJno': 'should\x20handle\x20multiple\x20init\x20directives',
        'vfmSQ': function (_0x47b858, _0x216ed1, _0x585a8e) {
            return _0x47b858(_0x216ed1, _0x585a8e);
        },
        'GPyxd': 'should\x20handle\x20a\x20graph\x20definition\x20with\x20leading\x20spaces',
        'NNTVA': function (_0x2e44ee, _0x48377f, _0x26bd9f) {
            return _0x2e44ee(_0x48377f, _0x26bd9f);
        },
        'NSSpC': 'should\x20handle\x20a\x20graph\x20definition\x20with\x20leading\x20spaces\x20and\x20newline',
        'Ndjeu': function (_0x37948e, _0xb2f6ba, _0x315fdc) {
            return _0x37948e(_0xb2f6ba, _0x315fdc);
        },
        'hrBFh': 'should\x20handle\x20a\x20graph\x20definition\x20for\x20gitGraph'
    };
    _0x12f0c8['YfPjp'](it, _0x12f0c8['fkNdd'], function () {
        const _0x4293bf = _0x12f0c8['hfmtt'], _0x187d40 = _0x394cab['detectType'](_0x4293bf);
        _0x12f0c8['MLCpF'](expect, _0x187d40)['toBe'](_0x12f0c8['ojwoe']);
    }), _0x12f0c8['YfPjp'](it, _0x12f0c8['UIfyX'], function () {
        const _0x101777 = '\x0a%%{initialize:\x20{\x20\x27logLevel\x27:\x200,\x20\x27theme\x27:\x20\x27dark\x27\x20}}%%\x0asequenceDiagram\x0aAlice->Bob:\x20hi', _0x2bbb59 = _0x394cab['detectType'](_0x101777), _0x15d2e7 = _0x394cab['detectInit'](_0x101777);
        _0x12f0c8['MLCpF'](expect, _0x2bbb59)['toBe'](_0x12f0c8['AGCLb']), _0x12f0c8['aNZmG'](expect, _0x15d2e7)['toEqual']({
            'logLevel': 0x0,
            'theme': _0x12f0c8['RHpCk']
        });
    }), _0x12f0c8['YfPjp'](it, _0x12f0c8['EVLfO'], function () {
        const _0x207e20 = '\x0a%%{init:\x20{\x20\x27logLevel\x27:\x200,\x20\x27theme\x27:\x20\x27dark\x27\x20}}%%\x0asequenceDiagram\x0aAlice->Bob:\x20hi', _0x5dcfc1 = _0x394cab['detectType'](_0x207e20), _0x131470 = _0x394cab['detectInit'](_0x207e20);
        _0x12f0c8['aNZmG'](expect, _0x5dcfc1)['toBe'](_0x12f0c8['AGCLb']), _0x12f0c8['aNZmG'](expect, _0x131470)['toEqual']({
            'logLevel': 0x0,
            'theme': _0x12f0c8['RHpCk']
        });
    }), _0x12f0c8['bvlYw'](it, _0x12f0c8['GSHRs'], function () {
        const _0x5456ee = '\x0a%%{init:\x20{\x20\x27logLevel\x27:\x200,\x20\x27theme\x27:\x20\x27dark\x27,\x20\x27config\x27:\x20{\x27wrap\x27:\x20true}\x20}\x20}%%\x0asequenceDiagram\x0aAlice->Bob:\x20hi', _0x5ec4a7 = _0x394cab['detectType'](_0x5456ee), _0x5e3e7d = _0x394cab['detectInit'](_0x5456ee);
        _0x12f0c8['pclmv'](expect, _0x5ec4a7)['toBe'](_0x12f0c8['AGCLb']), _0x12f0c8['zzVZg'](expect, _0x5e3e7d)['toEqual']({
            'logLevel': 0x0,
            'theme': _0x12f0c8['RHpCk'],
            'sequence': { 'wrap': !![] }
        });
    }), _0x12f0c8['bvlYw'](it, _0x12f0c8['bGAgs'], function () {
        const _0x5213be = '\x0a%%{\x0a\x20\x20init:\x20{\x0a\x20\x20\x20\x20\x27logLevel\x27:\x200,\x0a\x20\x20\x20\x20\x27theme\x27:\x20\x27dark\x27\x0a\x20\x20}\x0a}%%\x0asequenceDiagram\x0aAlice->Bob:\x20hi', _0x58e9c5 = _0x394cab['detectType'](_0x5213be), _0x120ac3 = _0x394cab['detectInit'](_0x5213be);
        _0x12f0c8['zzVZg'](expect, _0x58e9c5)['toBe'](_0x12f0c8['AGCLb']), _0x12f0c8['zzVZg'](expect, _0x120ac3)['toEqual']({
            'logLevel': 0x0,
            'theme': _0x12f0c8['RHpCk']
        });
    }), _0x12f0c8['bvlYw'](it, _0x12f0c8['MXJno'], function () {
        const _0xd649d7 = '\x0a%%{\x20init:\x20{\x20\x27logLevel\x27:\x200,\x20\x27theme\x27:\x20\x27forest\x27\x20}\x20}%%\x0a%%{\x0a\x20\x20init:\x20{\x0a\x20\x20\x20\x20\x27theme\x27:\x20\x27dark\x27\x0a\x20\x20}\x0a}%%\x0asequenceDiagram\x0aAlice->Bob:\x20hi', _0x59daa3 = _0x394cab['detectType'](_0xd649d7), _0xb55906 = _0x394cab['detectInit'](_0xd649d7);
        _0x12f0c8['zzVZg'](expect, _0x59daa3)['toBe'](_0x12f0c8['AGCLb']), _0x12f0c8['zzVZg'](expect, _0xb55906)['toEqual']({
            'logLevel': 0x0,
            'theme': _0x12f0c8['RHpCk']
        });
    }), _0x12f0c8['vfmSQ'](it, _0x12f0c8['GPyxd'], function () {
        const _0x1a4594 = _0x12f0c8['tAeps'], _0x1c35f3 = _0x394cab['detectType'](_0x1a4594);
        _0x12f0c8['pGCOI'](expect, _0x1c35f3)['toBe'](_0x12f0c8['ojwoe']);
    }), _0x12f0c8['NNTVA'](it, _0x12f0c8['NSSpC'], function () {
        const _0x5def74 = _0x12f0c8['JPJdX'], _0x49aaae = _0x394cab['detectType'](_0x5def74);
        _0x12f0c8['pGCOI'](expect, _0x49aaae)['toBe'](_0x12f0c8['ojwoe']);
    }), _0x12f0c8['Ndjeu'](it, _0x12f0c8['hrBFh'], function () {
        const _0x199d9d = _0x12f0c8['zDtXI'], _0x42cc80 = _0x394cab['detectType'](_0x199d9d);
        _0x12f0c8['YwjjW'](expect, _0x42cc80)['toBe'](_0x12f0c8['GFjwR']);
    });
}), describe('when\x20finding\x20substring\x20in\x20array\x20', function () {
    const _0x2f0b97 = {
        'UONkK': 'stroke:val1',
        'BsOxH': 'fill:val2',
        'TePdj': 'fill',
        'lcJoO': function (_0x57f043, _0x4a4758) {
            return _0x57f043(_0x4a4758);
        },
        'EmKfs': 'stroke-width:val2',
        'UqAmu': function (_0x54d6bb, _0x4b675f) {
            return _0x54d6bb(_0x4b675f);
        },
        'nZBgp': function (_0x14dc0a, _0x2d2040, _0x527889) {
            return _0x14dc0a(_0x2d2040, _0x527889);
        },
        'RjcWU': 'should\x20return\x20the\x20array\x20index\x20that\x20contains\x20the\x20substring',
        'SvmFz': function (_0x555ba1, _0x4f7b31, _0x1e2060) {
            return _0x555ba1(_0x4f7b31, _0x1e2060);
        },
        'LxKZQ': 'should\x20return\x20-1\x20if\x20the\x20substring\x20is\x20not\x20found\x20in\x20the\x20array'
    };
    _0x2f0b97['nZBgp'](it, _0x2f0b97['RjcWU'], function () {
        const _0x2cc6fc = [
                _0x2f0b97['UONkK'],
                _0x2f0b97['BsOxH']
            ], _0x2c4388 = _0x394cab['isSubstringInArray'](_0x2f0b97['TePdj'], _0x2cc6fc);
        _0x2f0b97['lcJoO'](expect, _0x2c4388)['toEqual'](0x1);
    }), _0x2f0b97['SvmFz'](it, _0x2f0b97['LxKZQ'], function () {
        const _0x1d90fa = [
                _0x2f0b97['UONkK'],
                _0x2f0b97['EmKfs']
            ], _0x519675 = _0x394cab['isSubstringInArray'](_0x2f0b97['TePdj'], _0x1d90fa);
        _0x2f0b97['UqAmu'](expect, _0x519675)['toEqual'](-0x1);
    });
}), describe('when\x20formatting\x20urls', function () {
    const _0x2ab2f2 = {
        'xPFmC': 'https://mermaid-js.github.io/mermaid/#/',
        'XKTCu': 'loose',
        'sHJbl': function (_0x18a0db, _0x4d13f8) {
            return _0x18a0db(_0x4d13f8);
        },
        'Jxlyr': 'strict',
        'warYu': function (_0x1d94a1, _0x4bc4cd) {
            return _0x1d94a1(_0x4bc4cd);
        },
        'DusHb': '#interaction',
        'PcbsF': function (_0x262611, _0x3c26b8) {
            return _0x262611(_0x3c26b8);
        },
        'PabWx': 'about:blank',
        'uvQZH': 'mailto:user@user.user',
        'EcgEj': function (_0x1b5786, _0x44e0e9) {
            return _0x1b5786(_0x44e0e9);
        },
        'PCIvB': 'notes://do-your-thing/id',
        'iyhyW': function (_0x115636, _0x33e12d) {
            return _0x115636(_0x33e12d);
        },
        'zvoRH': function (_0x1cfc7c, _0x440841) {
            return _0x1cfc7c(_0x440841);
        },
        'XQMtR': 'javascript:alert(\x22test\x22)',
        'bQtCx': function (_0x302625, _0x3fdf67, _0x5d204e) {
            return _0x302625(_0x3fdf67, _0x5d204e);
        },
        'RRMIT': 'should\x20handle\x20links',
        'MeTfk': function (_0x5d1db5, _0x14c796, _0x4aafed) {
            return _0x5d1db5(_0x14c796, _0x4aafed);
        },
        'MJvIJ': 'should\x20handle\x20anchors',
        'PRbsk': function (_0x1ea0c5, _0x151f3a, _0x110806) {
            return _0x1ea0c5(_0x151f3a, _0x110806);
        },
        'eubOE': 'should\x20handle\x20mailto',
        'toEgO': function (_0x30571a, _0x537fde, _0x78525) {
            return _0x30571a(_0x537fde, _0x78525);
        },
        'sBOux': 'should\x20handle\x20other\x20protocols',
        'QEYml': function (_0x3a9b17, _0x4e5472, _0x3ffa2d) {
            return _0x3a9b17(_0x4e5472, _0x3ffa2d);
        },
        'JosWB': 'should\x20handle\x20scripts'
    };
    _0x2ab2f2['bQtCx'](it, _0x2ab2f2['RRMIT'], function () {
        const _0x17e29e = _0x2ab2f2['xPFmC'];
        let _0x1baaca = { 'securityLevel': _0x2ab2f2['XKTCu'] }, _0x267920 = _0x394cab['formatUrl'](_0x17e29e, _0x1baaca);
        _0x2ab2f2['sHJbl'](expect, _0x267920)['toEqual'](_0x17e29e), _0x1baaca['securityLevel'] = _0x2ab2f2['Jxlyr'], _0x267920 = _0x394cab['formatUrl'](_0x17e29e, _0x1baaca), _0x2ab2f2['warYu'](expect, _0x267920)['toEqual'](_0x17e29e);
    }), _0x2ab2f2['MeTfk'](it, _0x2ab2f2['MJvIJ'], function () {
        const _0x13d28d = _0x2ab2f2['DusHb'];
        let _0xcf962e = { 'securityLevel': _0x2ab2f2['XKTCu'] }, _0x4c42b2 = _0x394cab['formatUrl'](_0x13d28d, _0xcf962e);
        _0x2ab2f2['PcbsF'](expect, _0x4c42b2)['toEqual'](_0x13d28d), _0xcf962e['securityLevel'] = _0x2ab2f2['Jxlyr'], _0x4c42b2 = _0x394cab['formatUrl'](_0x13d28d, _0xcf962e), _0x2ab2f2['PcbsF'](expect, _0x4c42b2)['toEqual'](_0x2ab2f2['PabWx']);
    }), _0x2ab2f2['PRbsk'](it, _0x2ab2f2['eubOE'], function () {
        const _0x106174 = _0x2ab2f2['uvQZH'];
        let _0x481545 = { 'securityLevel': _0x2ab2f2['XKTCu'] }, _0x49b814 = _0x394cab['formatUrl'](_0x106174, _0x481545);
        _0x2ab2f2['PcbsF'](expect, _0x49b814)['toEqual'](_0x106174), _0x481545['securityLevel'] = _0x2ab2f2['Jxlyr'], _0x49b814 = _0x394cab['formatUrl'](_0x106174, _0x481545), _0x2ab2f2['EcgEj'](expect, _0x49b814)['toEqual'](_0x106174);
    }), _0x2ab2f2['toEgO'](it, _0x2ab2f2['sBOux'], function () {
        const _0xab3d50 = _0x2ab2f2['PCIvB'];
        let _0x336669 = { 'securityLevel': _0x2ab2f2['XKTCu'] }, _0x724aa5 = _0x394cab['formatUrl'](_0xab3d50, _0x336669);
        _0x2ab2f2['iyhyW'](expect, _0x724aa5)['toEqual'](_0xab3d50), _0x336669['securityLevel'] = _0x2ab2f2['Jxlyr'], _0x724aa5 = _0x394cab['formatUrl'](_0xab3d50, _0x336669), _0x2ab2f2['zvoRH'](expect, _0x724aa5)['toEqual'](_0xab3d50);
    }), _0x2ab2f2['QEYml'](it, _0x2ab2f2['JosWB'], function () {
        const _0x2b5d2f = _0x2ab2f2['XQMtR'];
        let _0x2cab43 = { 'securityLevel': _0x2ab2f2['XKTCu'] }, _0x353b99 = _0x394cab['formatUrl'](_0x2b5d2f, _0x2cab43);
        _0x2ab2f2['zvoRH'](expect, _0x353b99)['toEqual'](_0x2b5d2f), _0x2cab43['securityLevel'] = _0x2ab2f2['Jxlyr'], _0x353b99 = _0x394cab['formatUrl'](_0x2b5d2f, _0x2cab43), _0x2ab2f2['zvoRH'](expect, _0x353b99)['toEqual'](_0x2ab2f2['PabWx']);
    });
}), describe('when\x20calculating\x20SVG\x20size', function () {
    const _0xe3d421 = {
        'blywb': function (_0x2f9ac8, _0x4825ea) {
            return _0x2f9ac8(_0x4825ea);
        },
        'ZigSg': 'height',
        'LyeYf': 'style',
        'etVls': 'max-width:\x20200px;',
        'pFnfJ': function (_0x2b8748, _0x14b6f6) {
            return _0x2b8748(_0x14b6f6);
        },
        'mFTaN': 'width',
        'tYDXn': '100%',
        'pEhNa': function (_0x480911, _0xddb29) {
            return _0x480911(_0xddb29);
        },
        'FIRUk': function (_0x283869, _0x5d788e, _0x5314f5) {
            return _0x283869(_0x5d788e, _0x5314f5);
        },
        'IIGEK': 'should\x20return\x20width\x20100%\x20when\x20useMaxWidth\x20is\x20true',
        'XJWxU': 'should\x20return\x20absolute\x20width\x20when\x20useMaxWidth\x20is\x20false'
    };
    _0xe3d421['FIRUk'](it, _0xe3d421['IIGEK'], function () {
        const _0x427b53 = _0x394cab['calculateSvgSizeAttrs'](0x64, 0xc8, !![]);
        _0xe3d421['blywb'](expect, _0x427b53['get'](_0xe3d421['ZigSg']))['toEqual'](0x64), _0xe3d421['blywb'](expect, _0x427b53['get'](_0xe3d421['LyeYf']))['toEqual'](_0xe3d421['etVls']), _0xe3d421['pFnfJ'](expect, _0x427b53['get'](_0xe3d421['mFTaN']))['toEqual'](_0xe3d421['tYDXn']);
    }), _0xe3d421['FIRUk'](it, _0xe3d421['XJWxU'], function () {
        const _0x35e3ec = _0x394cab['calculateSvgSizeAttrs'](0x64, 0xc8, ![]);
        _0xe3d421['pEhNa'](expect, _0x35e3ec['get'](_0xe3d421['ZigSg']))['toEqual'](0x64), _0xe3d421['pEhNa'](expect, _0x35e3ec['get'](_0xe3d421['mFTaN']))['toEqual'](0xc8);
    });
}), describe('when\x20initializing\x20the\x20id\x20generator', function () {
    const _0xa8c3be = {
        'rlKeR': function (_0x383ef6, _0x282475) {
            return _0x383ef6(_0x282475);
        },
        'VaNjv': function (_0x18390c, _0x59d707) {
            return _0x18390c > _0x59d707;
        },
        'EmBZI': function (_0x22bd30) {
            return _0x22bd30();
        },
        'PAdyK': function (_0xf70066, _0x54ff40) {
            return _0xf70066(_0x54ff40);
        },
        'DOTpB': 'function',
        'BqFrX': function (_0x33b6f1, _0x57d264, _0x353568) {
            return _0x33b6f1(_0x57d264, _0x353568);
        },
        'AXNlW': function (_0x356456, _0x364deb) {
            return _0x356456(_0x364deb);
        },
        'mFLNV': function (_0x19c39b, _0x4d6d71) {
            return _0x19c39b(_0x4d6d71);
        },
        'igvfD': function (_0x429e1a, _0x4a9da0) {
            return _0x429e1a + _0x4a9da0;
        },
        'Xevpr': 'thisIsASeed',
        'dKXnZ': function (_0x2002c5, _0x204ac6) {
            return _0x2002c5(_0x204ac6);
        },
        'tOGoQ': function (_0xf87daf, _0x12490c) {
            return _0xf87daf(_0x12490c);
        },
        'veZTj': function (_0x47f4df, _0x34467f) {
            return _0x47f4df(_0x34467f);
        },
        'JBbci': function (_0x3e6bba, _0x85a281) {
            return _0x3e6bba + _0x85a281;
        },
        'VVIdh': function (_0x2d5ed8, _0x3d4e17, _0x54276a) {
            return _0x2d5ed8(_0x3d4e17, _0x54276a);
        },
        'cVyKq': 'should\x20return\x20a\x20random\x20number\x20generator\x20based\x20on\x20Date',
        'jAuOy': function (_0x39385e, _0x265bad, _0xa451b9) {
            return _0x39385e(_0x265bad, _0xa451b9);
        },
        'qChEs': 'should\x20return\x20a\x20non\x20random\x20number\x20generator',
        'TIdpi': 'should\x20return\x20a\x20non\x20random\x20number\x20generator\x20based\x20on\x20seed'
    };
    _0xa8c3be['VVIdh'](it, _0xa8c3be['cVyKq'], function (_0x10cab1) {
        const _0x4d0bc8 = {
                'MZgWE': function (_0x2444c6, _0x231512) {
                    return _0xa8c3be['rlKeR'](_0x2444c6, _0x231512);
                },
                'LjDtF': function (_0x3e112b, _0x105f80) {
                    return _0xa8c3be['VaNjv'](_0x3e112b, _0x105f80);
                },
                'UCwTf': function (_0x2e0291) {
                    return _0xa8c3be['EmBZI'](_0x2e0291);
                }
            }, _0x3f1834 = new _0x394cab['initIdGeneratior'](![]);
        _0xa8c3be['PAdyK'](expect, typeof _0x3f1834['next'])['toEqual'](_0xa8c3be['DOTpB']);
        const _0x2cd4d9 = _0x3f1834['next']();
        _0xa8c3be['BqFrX'](setTimeout, () => {
            _0x4d0bc8['MZgWE'](expect, _0x4d0bc8['LjDtF'](_0x3f1834['next'](), _0x2cd4d9))['toBe'](!![]), _0x4d0bc8['UCwTf'](_0x10cab1);
        }, 0x5);
    }), _0xa8c3be['jAuOy'](it, _0xa8c3be['qChEs'], function () {
        const _0x323c1d = new _0x394cab['initIdGeneratior'](!![]);
        _0xa8c3be['PAdyK'](expect, typeof _0x323c1d['next'])['toEqual'](_0xa8c3be['DOTpB']);
        const _0x4dc875 = 0x0, _0xc6ec6b = _0x323c1d['next']();
        _0xa8c3be['AXNlW'](expect, _0x4dc875)['toEqual'](_0xc6ec6b), _0xa8c3be['mFLNV'](expect, _0x323c1d['next']())['toEqual'](_0xa8c3be['igvfD'](_0xc6ec6b, 0x1));
    }), _0xa8c3be['jAuOy'](it, _0xa8c3be['TIdpi'], function () {
        const _0x5c2deb = new _0x394cab['initIdGeneratior'](!![], _0xa8c3be['Xevpr']);
        _0xa8c3be['dKXnZ'](expect, typeof _0x5c2deb['next'])['toEqual'](_0xa8c3be['DOTpB']);
        const _0x4f863d = 0xb, _0x24e27f = _0x5c2deb['next']();
        _0xa8c3be['tOGoQ'](expect, _0x4f863d)['toEqual'](_0x24e27f), _0xa8c3be['veZTj'](expect, _0x5c2deb['next']())['toEqual'](_0xa8c3be['JBbci'](_0x24e27f, 0x1));
    });
});
