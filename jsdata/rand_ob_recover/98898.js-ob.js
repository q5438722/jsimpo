const expect = require('chai')['expect'], AwsCompileWebsocketsEvents = require(_0x51d245(282)), Serverless = require(_0x51d245(283)), AwsProvider = require(_0x51d245(284)), runServerless = require(_0x51d245(285));
describe(_0x51d245(286), () => {
    const _0x359391 = _0x51d245, _0x3db5e1 = {
            'gxZmU': 'dev',
            'EfoYF': 'us-east-1',
            'XWKsu': _0x359391(287),
            'MzmJB': function (_0xb232da, _0x536f96) {
                return _0xb232da(_0x536f96);
            },
            'BKkMB': _0x359391(288),
            'gyizm': _0x359391(289),
            'wmEiS': function (_0x55f5ef, _0x27b386) {
                return _0x55f5ef(_0x27b386);
            },
            'ReagL': _0x359391(290),
            'MXkDl': _0x359391(291),
            'cEogJ': ':apigateway:',
            'wnnQY': _0x359391(292),
            'DIwGG': ':lambda:path/2015-03-31/functions/',
            'SHrQM': _0x359391(293),
            'fEbbn': 'route.request.header.Auth',
            'zaNOD': 'arn:aws:auth',
            'JfQWR': function (_0x208243, _0xff9e3d) {
                return _0x208243(_0xff9e3d);
            },
            'Ydgxj': _0x359391(294),
            'bdfGo': _0x359391(295),
            'MremV': _0x359391(296),
            'HFVFt': function (_0xe2dee3, _0x1aed10) {
                return _0xe2dee3(_0x1aed10);
            },
            'IiofS': _0x359391(297),
            'CUOOh': _0x359391(298),
            'wVnQa': function (_0x3a7e49, _0x1e7679) {
                return _0x3a7e49(_0x1e7679);
            },
            'MMkKn': function (_0xb2ec74, _0x5776a9, _0x40ad84) {
                return _0xb2ec74(_0x5776a9, _0x40ad84);
            },
            'XiMOo': function (_0x2ef432, _0x3ec4f0, _0x384406) {
                return _0x2ef432(_0x3ec4f0, _0x384406);
            },
            'OBFSd': function (_0x4654e9, _0x217ed8, _0x557ac1) {
                return _0x4654e9(_0x217ed8, _0x557ac1);
            },
            'LrvBn': 'should add authorizer config when authorizer is specified as a string',
            'tXPBc': function (_0x4eaee8, _0x4c88e9, _0x3537ba) {
                return _0x4eaee8(_0x4c88e9, _0x3537ba);
            },
            'pqoaj': _0x359391(299),
            'YVHxy': _0x359391(300),
            'uZCXX': 'should add authorizer config when authorizer is specified as an object with arn',
            'XCMlR': function (_0x226a1e, _0x4d9874, _0x28f29f) {
                return _0x226a1e(_0x4d9874, _0x28f29f);
            },
            'pYhex': _0x359391(301),
            'TcwwP': function (_0x4a583a, _0x4c0185, _0x1c4793) {
                return _0x4a583a(_0x4c0185, _0x1c4793);
            },
            'YteqM': _0x359391(302)
        };
    let _0x989367, _0x5a8d58;
    _0x3db5e1[_0x359391(303)](beforeEach, () => {
        const _0x5e69f8 = _0x359391, _0x29ee8d = {
                'stage': _0x3db5e1[_0x5e69f8(304)],
                'region': _0x3db5e1[_0x5e69f8(305)]
            };
        _0x989367 = new Serverless(), _0x989367['setProvider'](_0x3db5e1['XWKsu'], new AwsProvider(_0x989367, _0x29ee8d)), _0x5a8d58 = new AwsCompileWebsocketsEvents(_0x989367, _0x29ee8d);
    }), _0x3db5e1[_0x359391(306)](it, _0x359391(307), () => {
        const _0x281cc5 = _0x359391;
        _0x5a8d58[_0x281cc5(308)]['service']['functions'] = { 'first': { 'events': [{ 'websocket': '$connect' }] } };
        const _0x476239 = _0x5a8d58[_0x281cc5(309)]();
        _0x3db5e1[_0x281cc5(310)](expect, _0x476239[_0x281cc5(311)])['to'][_0x281cc5(312)][_0x281cc5(313)]([{
                'functionName': _0x3db5e1[_0x281cc5(314)],
                'route': _0x3db5e1['gyizm']
            }]);
    }), _0x3db5e1[_0x359391(315)](it, _0x359391(316), () => {
        const _0x5c4254 = _0x359391;
        _0x5a8d58[_0x5c4254(308)][_0x5c4254(317)][_0x5c4254(318)] = { 'first': { 'events': [{ 'websocket': { 'route': _0x5c4254(289) } }] } };
        const _0x206c2e = _0x5a8d58[_0x5c4254(309)]();
        _0x3db5e1[_0x5c4254(319)](expect, _0x206c2e[_0x5c4254(311)])['to'][_0x5c4254(312)][_0x5c4254(313)]([{
                'functionName': _0x5c4254(288),
                'route': _0x3db5e1[_0x5c4254(320)]
            }]);
    }), _0x3db5e1[_0x359391(321)](it, _0x3db5e1[_0x359391(322)], () => {
        const _0x4f8a6a = _0x359391;
        _0x5a8d58[_0x4f8a6a(308)]['service'][_0x4f8a6a(318)] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x4f8a6a(289),
                            'authorizer': _0x3db5e1['ReagL']
                        }
                    }]
            }
        };
        const _0x3de08d = _0x5a8d58[_0x4f8a6a(309)]();
        _0x3db5e1['wmEiS'](expect, _0x3de08d[_0x4f8a6a(311)])['to'][_0x4f8a6a(312)]['equal']([{
                'functionName': _0x3db5e1['BKkMB'],
                'route': _0x3db5e1[_0x4f8a6a(320)],
                'authorizer': {
                    'name': _0x4f8a6a(290),
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x4f8a6a(294),
                                { 'Ref': _0x3db5e1[_0x4f8a6a(323)] },
                                _0x3db5e1[_0x4f8a6a(324)],
                                { 'Ref': _0x3db5e1[_0x4f8a6a(325)] },
                                _0x3db5e1[_0x4f8a6a(326)],
                                {
                                    'Fn::GetAtt': [
                                        _0x3db5e1[_0x4f8a6a(327)],
                                        _0x4f8a6a(297)
                                    ]
                                },
                                _0x4f8a6a(295)
                            ]
                        ]
                    },
                    'identitySource': [_0x3db5e1[_0x4f8a6a(328)]],
                    'permission': _0x3db5e1[_0x4f8a6a(327)]
                }
            }]);
    }), _0x3db5e1[_0x359391(329)](it, _0x3db5e1[_0x359391(330)], () => {
        const _0x5c7b22 = _0x359391;
        _0x5a8d58[_0x5c7b22(308)][_0x5c7b22(317)]['functions'] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x3db5e1[_0x5c7b22(320)],
                            'authorizer': _0x3db5e1['zaNOD']
                        }
                    }]
            }
        };
        const _0x11265d = _0x5a8d58[_0x5c7b22(309)]();
        _0x3db5e1[_0x5c7b22(331)](expect, _0x11265d[_0x5c7b22(311)])['to'][_0x5c7b22(312)][_0x5c7b22(313)]([{
                'functionName': _0x5c7b22(288),
                'route': _0x3db5e1[_0x5c7b22(320)],
                'authorizer': {
                    'name': _0x5c7b22(290),
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x3db5e1[_0x5c7b22(332)],
                                { 'Ref': _0x3db5e1['MXkDl'] },
                                _0x3db5e1['cEogJ'],
                                { 'Ref': _0x3db5e1[_0x5c7b22(325)] },
                                _0x3db5e1[_0x5c7b22(326)],
                                _0x3db5e1[_0x5c7b22(333)],
                                _0x3db5e1['bdfGo']
                            ]
                        ]
                    },
                    'identitySource': [_0x3db5e1[_0x5c7b22(328)]],
                    'permission': _0x3db5e1['zaNOD']
                }
            }]);
    }), it(_0x3db5e1[_0x359391(334)], () => {
        const _0x5e86ae = _0x359391;
        _0x5a8d58[_0x5e86ae(308)][_0x5e86ae(317)]['functions'] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x5e86ae(289),
                            'authorizer': {
                                'name': _0x3db5e1['ReagL'],
                                'identitySource': [
                                    _0x3db5e1[_0x5e86ae(328)],
                                    _0x3db5e1['MremV']
                                ]
                            }
                        }
                    }]
            }
        };
        const _0x39efff = _0x5a8d58[_0x5e86ae(309)]();
        _0x3db5e1['HFVFt'](expect, _0x39efff[_0x5e86ae(311)])['to'][_0x5e86ae(312)][_0x5e86ae(313)]([{
                'functionName': _0x5e86ae(288),
                'route': _0x3db5e1[_0x5e86ae(320)],
                'authorizer': {
                    'name': _0x3db5e1[_0x5e86ae(335)],
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x3db5e1[_0x5e86ae(332)],
                                { 'Ref': _0x5e86ae(291) },
                                _0x3db5e1[_0x5e86ae(324)],
                                { 'Ref': _0x3db5e1[_0x5e86ae(325)] },
                                _0x3db5e1[_0x5e86ae(326)],
                                {
                                    'Fn::GetAtt': [
                                        _0x3db5e1['SHrQM'],
                                        _0x3db5e1[_0x5e86ae(336)]
                                    ]
                                },
                                _0x3db5e1['bdfGo']
                            ]
                        ]
                    },
                    'identitySource': [
                        _0x5e86ae(337),
                        _0x3db5e1[_0x5e86ae(338)]
                    ],
                    'permission': _0x3db5e1[_0x5e86ae(327)]
                }
            }]);
    }), _0x3db5e1[_0x359391(329)](it, _0x3db5e1['uZCXX'], () => {
        const _0x529910 = _0x359391;
        _0x5a8d58[_0x529910(308)][_0x529910(317)][_0x529910(318)] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x529910(289),
                            'authorizer': {
                                'arn': _0x3db5e1['zaNOD'],
                                'identitySource': [
                                    _0x3db5e1['fEbbn'],
                                    _0x529910(296)
                                ]
                            }
                        }
                    }]
            }
        };
        const _0x3e58c8 = _0x5a8d58['validate']();
        _0x3db5e1['HFVFt'](expect, _0x3e58c8[_0x529910(311)])['to'][_0x529910(312)]['equal']([{
                'functionName': _0x529910(288),
                'route': _0x3db5e1[_0x529910(320)],
                'authorizer': {
                    'name': _0x3db5e1[_0x529910(335)],
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x529910(294),
                                { 'Ref': _0x3db5e1[_0x529910(323)] },
                                _0x3db5e1['cEogJ'],
                                { 'Ref': _0x3db5e1[_0x529910(325)] },
                                _0x3db5e1[_0x529910(326)],
                                _0x529910(339),
                                _0x3db5e1[_0x529910(340)]
                            ]
                        ]
                    },
                    'identitySource': [
                        _0x3db5e1['fEbbn'],
                        _0x3db5e1[_0x529910(338)]
                    ],
                    'permission': _0x3db5e1['zaNOD']
                }
            }]);
    }), _0x3db5e1[_0x359391(341)](it, _0x3db5e1['pYhex'], () => {
        const _0xc5227b = _0x359391;
        _0x5a8d58[_0xc5227b(308)][_0xc5227b(317)][_0xc5227b(318)] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0xc5227b(289),
                            'routeResponseSelectionExpression': _0x3db5e1[_0xc5227b(342)]
                        }
                    }]
            }
        };
        const _0x342e60 = _0x5a8d58[_0xc5227b(309)]();
        _0x3db5e1[_0xc5227b(303)](expect, _0x342e60[_0xc5227b(311)])['to']['deep']['equal']([{
                'functionName': _0x3db5e1[_0xc5227b(314)],
                'route': _0x3db5e1['gyizm'],
                'routeResponseSelectionExpression': _0x3db5e1[_0xc5227b(342)]
            }]);
    }), _0x3db5e1[_0x359391(343)](it, _0x3db5e1[_0x359391(344)], () => {
        const _0x260418 = _0x359391;
        _0x5a8d58[_0x260418(308)]['service'][_0x260418(318)] = { 'first': { 'events': [{ 'ignored': {} }] } };
        const _0x1b38d6 = _0x5a8d58['validate']();
        expect(_0x1b38d6[_0x260418(311)])['to']['be']['an'](_0x260418(345))[_0x260418(346)][_0x260418(347)](464 * 16 + -3392 + -448 * 9);
    });
}), describe(_0x51d245(348), () => {
    const _0x37b0ba = _0x51d245, _0x3595e6 = {
            'SOtIB': _0x37b0ba(349),
            'PakZX': function (_0x4b71bc, _0x39f315) {
                return _0x4b71bc(_0x39f315);
            },
            'ROHNr': _0x37b0ba(350),
            'SplLU': 'index.handler',
            'VWEfL': 'arn',
            'sskMl': 'package',
            'RCPbC': function (_0x30af26, _0x45ee1e) {
                return _0x30af26(_0x45ee1e);
            },
            'qEstB': function (_0x5aa44c, _0x2d4a1e, _0x1b4534) {
                return _0x5aa44c(_0x2d4a1e, _0x1b4534);
            },
            'HMIcp': 'should use provided authorizer name when name field is supplied'
        };
    _0x3595e6[_0x37b0ba(351)](it, _0x3595e6['HMIcp'], async () => {
        const _0x1ca9d0 = _0x37b0ba, _0x2df432 = _0x3595e6[_0x1ca9d0(352)], {
                cfTemplate: _0x45c94f,
                awsNaming: _0x3cc315
            } = await _0x3595e6['PakZX'](runServerless, {
                'fixture': _0x3595e6[_0x1ca9d0(353)],
                'configExt': {
                    'functions': {
                        'first': {
                            'handler': _0x3595e6[_0x1ca9d0(354)],
                            'events': [{
                                    'websocket': {
                                        'route': _0x1ca9d0(289),
                                        'authorizer': {
                                            'name': _0x2df432,
                                            'arn': {
                                                'Fn::Join': [
                                                    ':',
                                                    [
                                                        _0x3595e6['VWEfL'],
                                                        'arnName'
                                                    ]
                                                ]
                                            }
                                        }
                                    }
                                }]
                        }
                    }
                },
                'command': _0x3595e6[_0x1ca9d0(355)]
            }), _0x23c13f = _0x45c94f[_0x1ca9d0(356)], _0x514e88 = _0x3cc315;
        _0x3595e6[_0x1ca9d0(357)](expect, _0x23c13f[_0x514e88[_0x1ca9d0(358)](_0x2df432)])['to'][_0x1ca9d0(359)], _0x3595e6[_0x1ca9d0(360)](expect, _0x23c13f[_0x514e88[_0x1ca9d0(358)](_0x2df432)][_0x1ca9d0(361)]['Name'])['to'][_0x1ca9d0(312)][_0x1ca9d0(313)](_0x2df432);
    });
});