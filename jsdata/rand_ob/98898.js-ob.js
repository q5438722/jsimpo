'use strict';
const _0x5683 = [
    'YVHxy',
    'ReagL',
    'IiofS',
    'route.request.header.Auth',
    'MremV',
    'arn:aws:auth',
    'bdfGo',
    'XCMlR',
    'CUOOh',
    'TcwwP',
    'YteqM',
    'Array',
    'with',
    'length',
    '#validate()\x20using\x20runServerless\x20util',
    'authName',
    'function',
    'qEstB',
    'SOtIB',
    'ROHNr',
    'SplLU',
    'sskMl',
    'Resources',
    'PakZX',
    'getWebsocketsAuthorizerLogicalId',
    'exist',
    'RCPbC',
    'Properties',
    '399371bQbpLi',
    '223359krnfpv',
    '25641LpKYxj',
    '751519UoJaqF',
    '295820tufWLS',
    '674895QIbmpI',
    '1810667RggdPj',
    '../../../../../../../../../../lib/plugins/aws/package/compile/events/websockets/index',
    '../../../../../../../../../../lib/Serverless',
    '../../../../../../../../../../lib/plugins/aws/provider',
    '../../../../../../../../../utils/run-serverless',
    '#validate()',
    'aws',
    'first',
    '$connect',
    'auth',
    'AWS::Partition',
    'AWS::Region',
    'AuthLambdaFunction',
    'arn:',
    '/invocations',
    'route.request.querystring.Auth',
    'Arn',
    '$default',
    'should\x20add\x20authorizer\x20config\x20when\x20authorizer\x20is\x20specified\x20as\x20a\x20string\x20with\x20arn',
    'should\x20add\x20authorizer\x20config\x20when\x20authorizer\x20is\x20specified\x20as\x20an\x20object',
    'should\x20add\x20routeResponse\x20when\x20routeResponseSelectionExpression\x20is\x20configured',
    'should\x20ignore\x20non-websocket\x20events',
    'wVnQa',
    'gxZmU',
    'EfoYF',
    'MMkKn',
    'should\x20support\x20the\x20simplified\x20string\x20syntax',
    'serverless',
    'validate',
    'MzmJB',
    'events',
    'deep',
    'equal',
    'BKkMB',
    'XiMOo',
    'should\x20support\x20the\x20extended\x20object\x20syntax',
    'service',
    'functions',
    'wmEiS',
    'gyizm',
    'OBFSd',
    'LrvBn',
    'MXkDl',
    'cEogJ',
    'wnnQY',
    'DIwGG',
    'SHrQM',
    'fEbbn',
    'tXPBc',
    'pqoaj',
    'JfQWR',
    'Ydgxj',
    'zaNOD'
];
function _0x2a97(_0x5f21cd, _0x5593b4) {
    return _0x2a97 = function (_0x3f53bd, _0xf633db) {
        _0x3f53bd = _0x3f53bd - (-0x1 * 0x788 + 0x24f * -0x1 + -0x2 * -0x575);
        let _0x44c043 = _0x5683[_0x3f53bd];
        return _0x44c043;
    }, _0x2a97(_0x5f21cd, _0x5593b4);
}
const _0x51d245 = _0x2a97;
(function (_0xb4afde, _0x56c83d) {
    const _0x1663aa = _0x2a97;
    while (!![]) {
        try {
            const _0x141bc3 = parseInt(_0x1663aa(0x113)) + parseInt(_0x1663aa(0x114)) + parseInt(_0x1663aa(0x115)) + parseInt(_0x1663aa(0x116)) + parseInt(_0x1663aa(0x117)) + parseInt(_0x1663aa(0x118)) + -parseInt(_0x1663aa(0x119));
            if (_0x141bc3 === _0x56c83d)
                break;
            else
                _0xb4afde['push'](_0xb4afde['shift']());
        } catch (_0x5a6073) {
            _0xb4afde['push'](_0xb4afde['shift']());
        }
    }
}(_0x5683, 0x313 * 0x2ef + -0x902bf + -0x16c36 * -0x6));
const expect = require('chai')['expect'], AwsCompileWebsocketsEvents = require(_0x51d245(0x11a)), Serverless = require(_0x51d245(0x11b)), AwsProvider = require(_0x51d245(0x11c)), runServerless = require(_0x51d245(0x11d));
describe(_0x51d245(0x11e), () => {
    const _0x359391 = _0x51d245, _0x3db5e1 = {
            'gxZmU': 'dev',
            'EfoYF': 'us-east-1',
            'XWKsu': _0x359391(0x11f),
            'MzmJB': function (_0xb232da, _0x536f96) {
                return _0xb232da(_0x536f96);
            },
            'BKkMB': _0x359391(0x120),
            'gyizm': _0x359391(0x121),
            'wmEiS': function (_0x55f5ef, _0x27b386) {
                return _0x55f5ef(_0x27b386);
            },
            'ReagL': _0x359391(0x122),
            'MXkDl': _0x359391(0x123),
            'cEogJ': ':apigateway:',
            'wnnQY': _0x359391(0x124),
            'DIwGG': ':lambda:path/2015-03-31/functions/',
            'SHrQM': _0x359391(0x125),
            'fEbbn': 'route.request.header.Auth',
            'zaNOD': 'arn:aws:auth',
            'JfQWR': function (_0x208243, _0xff9e3d) {
                return _0x208243(_0xff9e3d);
            },
            'Ydgxj': _0x359391(0x126),
            'bdfGo': _0x359391(0x127),
            'MremV': _0x359391(0x128),
            'HFVFt': function (_0xe2dee3, _0x1aed10) {
                return _0xe2dee3(_0x1aed10);
            },
            'IiofS': _0x359391(0x129),
            'CUOOh': _0x359391(0x12a),
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
            'LrvBn': 'should\x20add\x20authorizer\x20config\x20when\x20authorizer\x20is\x20specified\x20as\x20a\x20string',
            'tXPBc': function (_0x4eaee8, _0x4c88e9, _0x3537ba) {
                return _0x4eaee8(_0x4c88e9, _0x3537ba);
            },
            'pqoaj': _0x359391(0x12b),
            'YVHxy': _0x359391(0x12c),
            'uZCXX': 'should\x20add\x20authorizer\x20config\x20when\x20authorizer\x20is\x20specified\x20as\x20an\x20object\x20with\x20arn',
            'XCMlR': function (_0x226a1e, _0x4d9874, _0x28f29f) {
                return _0x226a1e(_0x4d9874, _0x28f29f);
            },
            'pYhex': _0x359391(0x12d),
            'TcwwP': function (_0x4a583a, _0x4c0185, _0x1c4793) {
                return _0x4a583a(_0x4c0185, _0x1c4793);
            },
            'YteqM': _0x359391(0x12e)
        };
    let _0x989367, _0x5a8d58;
    _0x3db5e1[_0x359391(0x12f)](beforeEach, () => {
        const _0x5e69f8 = _0x359391, _0x29ee8d = {
                'stage': _0x3db5e1[_0x5e69f8(0x130)],
                'region': _0x3db5e1[_0x5e69f8(0x131)]
            };
        _0x989367 = new Serverless(), _0x989367['setProvider'](_0x3db5e1['XWKsu'], new AwsProvider(_0x989367, _0x29ee8d)), _0x5a8d58 = new AwsCompileWebsocketsEvents(_0x989367, _0x29ee8d);
    }), _0x3db5e1[_0x359391(0x132)](it, _0x359391(0x133), () => {
        const _0x281cc5 = _0x359391;
        _0x5a8d58[_0x281cc5(0x134)]['service']['functions'] = { 'first': { 'events': [{ 'websocket': '$connect' }] } };
        const _0x476239 = _0x5a8d58[_0x281cc5(0x135)]();
        _0x3db5e1[_0x281cc5(0x136)](expect, _0x476239[_0x281cc5(0x137)])['to'][_0x281cc5(0x138)][_0x281cc5(0x139)]([{
                'functionName': _0x3db5e1[_0x281cc5(0x13a)],
                'route': _0x3db5e1['gyizm']
            }]);
    }), _0x3db5e1[_0x359391(0x13b)](it, _0x359391(0x13c), () => {
        const _0x5c4254 = _0x359391;
        _0x5a8d58[_0x5c4254(0x134)][_0x5c4254(0x13d)][_0x5c4254(0x13e)] = { 'first': { 'events': [{ 'websocket': { 'route': _0x5c4254(0x121) } }] } };
        const _0x206c2e = _0x5a8d58[_0x5c4254(0x135)]();
        _0x3db5e1[_0x5c4254(0x13f)](expect, _0x206c2e[_0x5c4254(0x137)])['to'][_0x5c4254(0x138)][_0x5c4254(0x139)]([{
                'functionName': _0x5c4254(0x120),
                'route': _0x3db5e1[_0x5c4254(0x140)]
            }]);
    }), _0x3db5e1[_0x359391(0x141)](it, _0x3db5e1[_0x359391(0x142)], () => {
        const _0x4f8a6a = _0x359391;
        _0x5a8d58[_0x4f8a6a(0x134)]['service'][_0x4f8a6a(0x13e)] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x4f8a6a(0x121),
                            'authorizer': _0x3db5e1['ReagL']
                        }
                    }]
            }
        };
        const _0x3de08d = _0x5a8d58[_0x4f8a6a(0x135)]();
        _0x3db5e1['wmEiS'](expect, _0x3de08d[_0x4f8a6a(0x137)])['to'][_0x4f8a6a(0x138)]['equal']([{
                'functionName': _0x3db5e1['BKkMB'],
                'route': _0x3db5e1[_0x4f8a6a(0x140)],
                'authorizer': {
                    'name': _0x4f8a6a(0x122),
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x4f8a6a(0x126),
                                { 'Ref': _0x3db5e1[_0x4f8a6a(0x143)] },
                                _0x3db5e1[_0x4f8a6a(0x144)],
                                { 'Ref': _0x3db5e1[_0x4f8a6a(0x145)] },
                                _0x3db5e1[_0x4f8a6a(0x146)],
                                {
                                    'Fn::GetAtt': [
                                        _0x3db5e1[_0x4f8a6a(0x147)],
                                        _0x4f8a6a(0x129)
                                    ]
                                },
                                _0x4f8a6a(0x127)
                            ]
                        ]
                    },
                    'identitySource': [_0x3db5e1[_0x4f8a6a(0x148)]],
                    'permission': _0x3db5e1[_0x4f8a6a(0x147)]
                }
            }]);
    }), _0x3db5e1[_0x359391(0x149)](it, _0x3db5e1[_0x359391(0x14a)], () => {
        const _0x5c7b22 = _0x359391;
        _0x5a8d58[_0x5c7b22(0x134)][_0x5c7b22(0x13d)]['functions'] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x3db5e1[_0x5c7b22(0x140)],
                            'authorizer': _0x3db5e1['zaNOD']
                        }
                    }]
            }
        };
        const _0x11265d = _0x5a8d58[_0x5c7b22(0x135)]();
        _0x3db5e1[_0x5c7b22(0x14b)](expect, _0x11265d[_0x5c7b22(0x137)])['to'][_0x5c7b22(0x138)][_0x5c7b22(0x139)]([{
                'functionName': _0x5c7b22(0x120),
                'route': _0x3db5e1[_0x5c7b22(0x140)],
                'authorizer': {
                    'name': _0x5c7b22(0x122),
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x3db5e1[_0x5c7b22(0x14c)],
                                { 'Ref': _0x3db5e1['MXkDl'] },
                                _0x3db5e1['cEogJ'],
                                { 'Ref': _0x3db5e1[_0x5c7b22(0x145)] },
                                _0x3db5e1[_0x5c7b22(0x146)],
                                _0x3db5e1[_0x5c7b22(0x14d)],
                                _0x3db5e1['bdfGo']
                            ]
                        ]
                    },
                    'identitySource': [_0x3db5e1[_0x5c7b22(0x148)]],
                    'permission': _0x3db5e1['zaNOD']
                }
            }]);
    }), it(_0x3db5e1[_0x359391(0x14e)], () => {
        const _0x5e86ae = _0x359391;
        _0x5a8d58[_0x5e86ae(0x134)][_0x5e86ae(0x13d)]['functions'] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x5e86ae(0x121),
                            'authorizer': {
                                'name': _0x3db5e1['ReagL'],
                                'identitySource': [
                                    _0x3db5e1[_0x5e86ae(0x148)],
                                    _0x3db5e1['MremV']
                                ]
                            }
                        }
                    }]
            }
        };
        const _0x39efff = _0x5a8d58[_0x5e86ae(0x135)]();
        _0x3db5e1['HFVFt'](expect, _0x39efff[_0x5e86ae(0x137)])['to'][_0x5e86ae(0x138)][_0x5e86ae(0x139)]([{
                'functionName': _0x5e86ae(0x120),
                'route': _0x3db5e1[_0x5e86ae(0x140)],
                'authorizer': {
                    'name': _0x3db5e1[_0x5e86ae(0x14f)],
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x3db5e1[_0x5e86ae(0x14c)],
                                { 'Ref': _0x5e86ae(0x123) },
                                _0x3db5e1[_0x5e86ae(0x144)],
                                { 'Ref': _0x3db5e1[_0x5e86ae(0x145)] },
                                _0x3db5e1[_0x5e86ae(0x146)],
                                {
                                    'Fn::GetAtt': [
                                        _0x3db5e1['SHrQM'],
                                        _0x3db5e1[_0x5e86ae(0x150)]
                                    ]
                                },
                                _0x3db5e1['bdfGo']
                            ]
                        ]
                    },
                    'identitySource': [
                        _0x5e86ae(0x151),
                        _0x3db5e1[_0x5e86ae(0x152)]
                    ],
                    'permission': _0x3db5e1[_0x5e86ae(0x147)]
                }
            }]);
    }), _0x3db5e1[_0x359391(0x149)](it, _0x3db5e1['uZCXX'], () => {
        const _0x529910 = _0x359391;
        _0x5a8d58[_0x529910(0x134)][_0x529910(0x13d)][_0x529910(0x13e)] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x529910(0x121),
                            'authorizer': {
                                'arn': _0x3db5e1['zaNOD'],
                                'identitySource': [
                                    _0x3db5e1['fEbbn'],
                                    _0x529910(0x128)
                                ]
                            }
                        }
                    }]
            }
        };
        const _0x3e58c8 = _0x5a8d58['validate']();
        _0x3db5e1['HFVFt'](expect, _0x3e58c8[_0x529910(0x137)])['to'][_0x529910(0x138)]['equal']([{
                'functionName': _0x529910(0x120),
                'route': _0x3db5e1[_0x529910(0x140)],
                'authorizer': {
                    'name': _0x3db5e1[_0x529910(0x14f)],
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x529910(0x126),
                                { 'Ref': _0x3db5e1[_0x529910(0x143)] },
                                _0x3db5e1['cEogJ'],
                                { 'Ref': _0x3db5e1[_0x529910(0x145)] },
                                _0x3db5e1[_0x529910(0x146)],
                                _0x529910(0x153),
                                _0x3db5e1[_0x529910(0x154)]
                            ]
                        ]
                    },
                    'identitySource': [
                        _0x3db5e1['fEbbn'],
                        _0x3db5e1[_0x529910(0x152)]
                    ],
                    'permission': _0x3db5e1['zaNOD']
                }
            }]);
    }), _0x3db5e1[_0x359391(0x155)](it, _0x3db5e1['pYhex'], () => {
        const _0xc5227b = _0x359391;
        _0x5a8d58[_0xc5227b(0x134)][_0xc5227b(0x13d)][_0xc5227b(0x13e)] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0xc5227b(0x121),
                            'routeResponseSelectionExpression': _0x3db5e1[_0xc5227b(0x156)]
                        }
                    }]
            }
        };
        const _0x342e60 = _0x5a8d58[_0xc5227b(0x135)]();
        _0x3db5e1[_0xc5227b(0x12f)](expect, _0x342e60[_0xc5227b(0x137)])['to']['deep']['equal']([{
                'functionName': _0x3db5e1[_0xc5227b(0x13a)],
                'route': _0x3db5e1['gyizm'],
                'routeResponseSelectionExpression': _0x3db5e1[_0xc5227b(0x156)]
            }]);
    }), _0x3db5e1[_0x359391(0x157)](it, _0x3db5e1[_0x359391(0x158)], () => {
        const _0x260418 = _0x359391;
        _0x5a8d58[_0x260418(0x134)]['service'][_0x260418(0x13e)] = { 'first': { 'events': [{ 'ignored': {} }] } };
        const _0x1b38d6 = _0x5a8d58['validate']();
        expect(_0x1b38d6[_0x260418(0x137)])['to']['be']['an'](_0x260418(0x159))[_0x260418(0x15a)][_0x260418(0x15b)](0x1d0 * 0x10 + -0xd40 + -0x1c0 * 0x9);
    });
}), describe(_0x51d245(0x15c), () => {
    const _0x37b0ba = _0x51d245, _0x3595e6 = {
            'SOtIB': _0x37b0ba(0x15d),
            'PakZX': function (_0x4b71bc, _0x39f315) {
                return _0x4b71bc(_0x39f315);
            },
            'ROHNr': _0x37b0ba(0x15e),
            'SplLU': 'index.handler',
            'VWEfL': 'arn',
            'sskMl': 'package',
            'RCPbC': function (_0x30af26, _0x45ee1e) {
                return _0x30af26(_0x45ee1e);
            },
            'qEstB': function (_0x5aa44c, _0x2d4a1e, _0x1b4534) {
                return _0x5aa44c(_0x2d4a1e, _0x1b4534);
            },
            'HMIcp': 'should\x20use\x20provided\x20authorizer\x20name\x20when\x20name\x20field\x20is\x20supplied'
        };
    _0x3595e6[_0x37b0ba(0x15f)](it, _0x3595e6['HMIcp'], async () => {
        const _0x1ca9d0 = _0x37b0ba, _0x2df432 = _0x3595e6[_0x1ca9d0(0x160)], {
                cfTemplate: _0x45c94f,
                awsNaming: _0x3cc315
            } = await _0x3595e6['PakZX'](runServerless, {
                'fixture': _0x3595e6[_0x1ca9d0(0x161)],
                'configExt': {
                    'functions': {
                        'first': {
                            'handler': _0x3595e6[_0x1ca9d0(0x162)],
                            'events': [{
                                    'websocket': {
                                        'route': _0x1ca9d0(0x121),
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
                'command': _0x3595e6[_0x1ca9d0(0x163)]
            }), _0x23c13f = _0x45c94f[_0x1ca9d0(0x164)], _0x514e88 = _0x3cc315;
        _0x3595e6[_0x1ca9d0(0x165)](expect, _0x23c13f[_0x514e88[_0x1ca9d0(0x166)](_0x2df432)])['to'][_0x1ca9d0(0x167)], _0x3595e6[_0x1ca9d0(0x168)](expect, _0x23c13f[_0x514e88[_0x1ca9d0(0x166)](_0x2df432)][_0x1ca9d0(0x169)]['Name'])['to'][_0x1ca9d0(0x138)][_0x1ca9d0(0x139)](_0x2df432);
    });
});
