'use strict';
const _0x1065 = [
    '../../../../../../../../../../lib/plugins/aws/provider',
    '../../../../../../../../../utils/run-serverless',
    'us-east-1',
    'first',
    '$connect',
    'auth',
    ':apigateway:',
    ':lambda:path/2015-03-31/functions/',
    'AuthLambdaFunction',
    'Arn',
    '/invocations',
    'route.request.header.Auth',
    'arn:aws:auth',
    'AWS::Partition',
    'route.request.querystring.Auth',
    '$default',
    'Array',
    'should\x20support\x20the\x20simplified\x20string\x20syntax',
    'should\x20support\x20the\x20extended\x20object\x20syntax',
    'should\x20add\x20authorizer\x20config\x20when\x20authorizer\x20is\x20specified\x20as\x20an\x20object',
    'should\x20ignore\x20non-websocket\x20events',
    'Yexmu',
    'setProvider',
    'cJaZa',
    'serverless',
    'service',
    'validate',
    'CifTT',
    'events',
    'deep',
    'equal',
    'bnBXI',
    'vmfGC',
    'XXsUO',
    'functions',
    'oLvAc',
    'efgQt',
    'rfVwJ',
    'arn:',
    'Goaud',
    'PSJPG',
    'xIrCJ',
    'ixyGk',
    'PWyFu',
    'BPgyN',
    'NJXQW',
    'AWS::Region',
    'rsJJx',
    'osimB',
    'hNqNp',
    'TtBVK',
    'yifcK',
    'should\x20add\x20authorizer\x20config\x20when\x20authorizer\x20is\x20specified\x20as\x20an\x20object\x20with\x20arn',
    'UCBwG',
    'taUYY',
    'JJFIf',
    'ZDlWf',
    'djoHa',
    'with',
    '#validate()\x20using\x20runServerless\x20util',
    'function',
    'arn',
    'arnName',
    'should\x20use\x20provided\x20authorizer\x20name\x20when\x20name\x20field\x20is\x20supplied',
    'YPQVH',
    'cetND',
    'index.handler',
    'fZiZZ',
    'Resources',
    'OtVUq',
    'getWebsocketsAuthorizerLogicalId',
    'exist',
    'Properties',
    'Name',
    '120432IQuUKE',
    '5YuRMeY',
    '158993pkuLIu',
    '285159WUZBuW',
    '32345OPFNOM',
    '5WIBQoo',
    '47353KKHlLZ',
    '17IoXUce',
    '41835TsuLOB',
    '4HusUIc',
    '39549rORsgf',
    'chai',
    'expect',
    '../../../../../../../../../../lib/Serverless'
];
const _0x388c49 = _0x19dc;
function _0x19dc(_0x4ab1d0, _0x4e7f1f) {
    return _0x19dc = function (_0x260d33, _0x54de71) {
        _0x260d33 = _0x260d33 - (0xc38 + -0x178b + 0xd46);
        let _0x4aa8ed = _0x1065[_0x260d33];
        return _0x4aa8ed;
    }, _0x19dc(_0x4ab1d0, _0x4e7f1f);
}
(function (_0x3e0780, _0xe3bc17) {
    const _0x44229b = _0x19dc;
    while (!![]) {
        try {
            const _0x5099fa = parseInt(_0x44229b(0x1f3)) * parseInt(_0x44229b(0x1f4)) + parseInt(_0x44229b(0x1f5)) + parseInt(_0x44229b(0x1f6)) + -parseInt(_0x44229b(0x1f7)) * -parseInt(_0x44229b(0x1f8)) + -parseInt(_0x44229b(0x1f9)) * parseInt(_0x44229b(0x1fa)) + -parseInt(_0x44229b(0x1fb)) + -parseInt(_0x44229b(0x1fc)) * -parseInt(_0x44229b(0x1fd));
            if (_0x5099fa === _0xe3bc17)
                break;
            else
                _0x3e0780['push'](_0x3e0780['shift']());
        } catch (_0x35659d) {
            _0x3e0780['push'](_0x3e0780['shift']());
        }
    }
}(_0x1065, 0xd * -0x9fad + -0x5f3a2 + 0x15fc50));
const expect = require(_0x388c49(0x1fe))[_0x388c49(0x1ff)], AwsCompileWebsocketsEvents = require('../../../../../../../../../../lib/plugins/aws/package/compile/events/websockets/index'), Serverless = require(_0x388c49(0x200)), AwsProvider = require(_0x388c49(0x201)), runServerless = require(_0x388c49(0x202));
describe('#validate()', () => {
    const _0x1c1375 = _0x388c49, _0x5ee39c = {
            'Yexmu': _0x1c1375(0x203),
            'CifTT': function (_0x322a1f, _0x585416) {
                return _0x322a1f(_0x585416);
            },
            'bnBXI': _0x1c1375(0x204),
            'oLvAc': _0x1c1375(0x205),
            'rfVwJ': _0x1c1375(0x206),
            'GkSCX': function (_0x334a54, _0x5df9d9) {
                return _0x334a54(_0x5df9d9);
            },
            'Goaud': _0x1c1375(0x207),
            'PSJPG': 'AWS::Region',
            'taUYY': _0x1c1375(0x208),
            'xIrCJ': _0x1c1375(0x209),
            'yifcK': _0x1c1375(0x20a),
            'ixyGk': _0x1c1375(0x20b),
            'rsJJx': _0x1c1375(0x20c),
            'BPgyN': _0x1c1375(0x20d),
            'TtBVK': 'arn:',
            'NJXQW': _0x1c1375(0x20e),
            'hNqNp': _0x1c1375(0x20f),
            'UCBwG': function (_0x55a60c, _0x3aca1c) {
                return _0x55a60c(_0x3aca1c);
            },
            'JJFIf': _0x1c1375(0x210),
            'djoHa': _0x1c1375(0x211),
            'dtYmW': function (_0x434ec1, _0x594e1c, _0x31cd3f) {
                return _0x434ec1(_0x594e1c, _0x31cd3f);
            },
            'cJaZa': _0x1c1375(0x212),
            'vmfGC': function (_0x1a2c24, _0x944390, _0x3d60d0) {
                return _0x1a2c24(_0x944390, _0x3d60d0);
            },
            'XXsUO': _0x1c1375(0x213),
            'efgQt': 'should\x20add\x20authorizer\x20config\x20when\x20authorizer\x20is\x20specified\x20as\x20a\x20string',
            'PWyFu': 'should\x20add\x20authorizer\x20config\x20when\x20authorizer\x20is\x20specified\x20as\x20a\x20string\x20with\x20arn',
            'osimB': _0x1c1375(0x214),
            'WJTmQ': function (_0x370ead, _0x3a0d64, _0x7ebafe) {
                return _0x370ead(_0x3a0d64, _0x7ebafe);
            },
            'tYOgb': function (_0xc79a91, _0x36b809, _0xea89b0) {
                return _0xc79a91(_0x36b809, _0xea89b0);
            },
            'ZDlWf': _0x1c1375(0x215)
        };
    let _0x53005a, _0x440a25;
    _0x5ee39c['UCBwG'](beforeEach, () => {
        const _0x3036f0 = _0x1c1375, _0x4a7518 = {
                'stage': 'dev',
                'region': _0x5ee39c[_0x3036f0(0x216)]
            };
        _0x53005a = new Serverless(), _0x53005a[_0x3036f0(0x217)]('aws', new AwsProvider(_0x53005a, _0x4a7518)), _0x440a25 = new AwsCompileWebsocketsEvents(_0x53005a, _0x4a7518);
    }), _0x5ee39c['dtYmW'](it, _0x5ee39c[_0x1c1375(0x218)], () => {
        const _0x445a21 = _0x1c1375;
        _0x440a25[_0x445a21(0x219)][_0x445a21(0x21a)]['functions'] = { 'first': { 'events': [{ 'websocket': _0x445a21(0x205) }] } };
        const _0x255d87 = _0x440a25[_0x445a21(0x21b)]();
        _0x5ee39c[_0x445a21(0x21c)](expect, _0x255d87[_0x445a21(0x21d)])['to'][_0x445a21(0x21e)][_0x445a21(0x21f)]([{
                'functionName': _0x5ee39c[_0x445a21(0x220)],
                'route': _0x445a21(0x205)
            }]);
    }), _0x5ee39c[_0x1c1375(0x221)](it, _0x5ee39c[_0x1c1375(0x222)], () => {
        const _0x45dd14 = _0x1c1375;
        _0x440a25[_0x45dd14(0x219)]['service'][_0x45dd14(0x223)] = { 'first': { 'events': [{ 'websocket': { 'route': _0x5ee39c[_0x45dd14(0x224)] } }] } };
        const _0x5d099f = _0x440a25[_0x45dd14(0x21b)]();
        _0x5ee39c['CifTT'](expect, _0x5d099f[_0x45dd14(0x21d)])['to'][_0x45dd14(0x21e)][_0x45dd14(0x21f)]([{
                'functionName': _0x5ee39c[_0x45dd14(0x220)],
                'route': _0x5ee39c['oLvAc']
            }]);
    }), it(_0x5ee39c[_0x1c1375(0x225)], () => {
        const _0x2e6519 = _0x1c1375;
        _0x440a25[_0x2e6519(0x219)][_0x2e6519(0x21a)][_0x2e6519(0x223)] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x5ee39c[_0x2e6519(0x224)],
                            'authorizer': _0x5ee39c[_0x2e6519(0x226)]
                        }
                    }]
            }
        };
        const _0x19545f = _0x440a25[_0x2e6519(0x21b)]();
        _0x5ee39c['GkSCX'](expect, _0x19545f[_0x2e6519(0x21d)])['to'][_0x2e6519(0x21e)][_0x2e6519(0x21f)]([{
                'functionName': _0x2e6519(0x204),
                'route': _0x2e6519(0x205),
                'authorizer': {
                    'name': 'auth',
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x2e6519(0x227),
                                { 'Ref': 'AWS::Partition' },
                                _0x5ee39c[_0x2e6519(0x228)],
                                { 'Ref': _0x5ee39c[_0x2e6519(0x229)] },
                                _0x5ee39c['taUYY'],
                                {
                                    'Fn::GetAtt': [
                                        _0x5ee39c[_0x2e6519(0x22a)],
                                        _0x5ee39c['yifcK']
                                    ]
                                },
                                _0x5ee39c[_0x2e6519(0x22b)]
                            ]
                        ]
                    },
                    'identitySource': [_0x5ee39c['rsJJx']],
                    'permission': _0x5ee39c[_0x2e6519(0x22a)]
                }
            }]);
    }), _0x5ee39c['vmfGC'](it, _0x5ee39c[_0x1c1375(0x22c)], () => {
        const _0x2b0123 = _0x1c1375;
        _0x440a25[_0x2b0123(0x219)][_0x2b0123(0x21a)][_0x2b0123(0x223)] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x5ee39c[_0x2b0123(0x224)],
                            'authorizer': _0x5ee39c[_0x2b0123(0x22d)]
                        }
                    }]
            }
        };
        const _0x302dcb = _0x440a25[_0x2b0123(0x21b)]();
        expect(_0x302dcb[_0x2b0123(0x21d)])['to']['deep']['equal']([{
                'functionName': _0x5ee39c['bnBXI'],
                'route': _0x5ee39c[_0x2b0123(0x224)],
                'authorizer': {
                    'name': _0x5ee39c[_0x2b0123(0x226)],
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x5ee39c['TtBVK'],
                                { 'Ref': _0x5ee39c[_0x2b0123(0x22e)] },
                                _0x5ee39c[_0x2b0123(0x228)],
                                { 'Ref': _0x2b0123(0x22f) },
                                _0x5ee39c['taUYY'],
                                'arn:aws:auth',
                                _0x5ee39c[_0x2b0123(0x22b)]
                            ]
                        ]
                    },
                    'identitySource': [_0x5ee39c[_0x2b0123(0x230)]],
                    'permission': _0x5ee39c[_0x2b0123(0x22d)]
                }
            }]);
    }), _0x5ee39c[_0x1c1375(0x221)](it, _0x5ee39c[_0x1c1375(0x231)], () => {
        const _0x2deb20 = _0x1c1375;
        _0x440a25[_0x2deb20(0x219)][_0x2deb20(0x21a)][_0x2deb20(0x223)] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x2deb20(0x205),
                            'authorizer': {
                                'name': _0x5ee39c[_0x2deb20(0x226)],
                                'identitySource': [
                                    _0x5ee39c[_0x2deb20(0x230)],
                                    _0x5ee39c[_0x2deb20(0x232)]
                                ]
                            }
                        }
                    }]
            }
        };
        const _0x4e8cb8 = _0x440a25['validate']();
        expect(_0x4e8cb8[_0x2deb20(0x21d)])['to']['deep'][_0x2deb20(0x21f)]([{
                'functionName': _0x5ee39c[_0x2deb20(0x220)],
                'route': _0x2deb20(0x205),
                'authorizer': {
                    'name': _0x5ee39c[_0x2deb20(0x226)],
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x5ee39c[_0x2deb20(0x233)],
                                { 'Ref': _0x5ee39c[_0x2deb20(0x22e)] },
                                _0x5ee39c['Goaud'],
                                { 'Ref': _0x5ee39c[_0x2deb20(0x229)] },
                                _0x5ee39c['taUYY'],
                                {
                                    'Fn::GetAtt': [
                                        _0x5ee39c['xIrCJ'],
                                        _0x5ee39c[_0x2deb20(0x234)]
                                    ]
                                },
                                _0x5ee39c[_0x2deb20(0x22b)]
                            ]
                        ]
                    },
                    'identitySource': [
                        _0x5ee39c[_0x2deb20(0x230)],
                        _0x5ee39c[_0x2deb20(0x232)]
                    ],
                    'permission': _0x5ee39c[_0x2deb20(0x22a)]
                }
            }]);
    }), _0x5ee39c['WJTmQ'](it, _0x1c1375(0x235), () => {
        const _0x350ab9 = _0x1c1375;
        _0x440a25[_0x350ab9(0x219)][_0x350ab9(0x21a)][_0x350ab9(0x223)] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x5ee39c[_0x350ab9(0x224)],
                            'authorizer': {
                                'arn': _0x5ee39c[_0x350ab9(0x22d)],
                                'identitySource': [
                                    _0x5ee39c[_0x350ab9(0x230)],
                                    _0x5ee39c['hNqNp']
                                ]
                            }
                        }
                    }]
            }
        };
        const _0x8de1c6 = _0x440a25['validate']();
        _0x5ee39c[_0x350ab9(0x236)](expect, _0x8de1c6['events'])['to'][_0x350ab9(0x21e)][_0x350ab9(0x21f)]([{
                'functionName': _0x5ee39c[_0x350ab9(0x220)],
                'route': _0x5ee39c[_0x350ab9(0x224)],
                'authorizer': {
                    'name': _0x5ee39c[_0x350ab9(0x226)],
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x350ab9(0x227),
                                { 'Ref': _0x5ee39c['NJXQW'] },
                                _0x5ee39c['Goaud'],
                                { 'Ref': _0x350ab9(0x22f) },
                                _0x5ee39c[_0x350ab9(0x237)],
                                _0x5ee39c[_0x350ab9(0x22d)],
                                _0x350ab9(0x20b)
                            ]
                        ]
                    },
                    'identitySource': [
                        _0x350ab9(0x20c),
                        _0x5ee39c[_0x350ab9(0x232)]
                    ],
                    'permission': _0x5ee39c['BPgyN']
                }
            }]);
    }), _0x5ee39c['tYOgb'](it, 'should\x20add\x20routeResponse\x20when\x20routeResponseSelectionExpression\x20is\x20configured', () => {
        const _0x324086 = _0x1c1375;
        _0x440a25[_0x324086(0x219)][_0x324086(0x21a)]['functions'] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x5ee39c['oLvAc'],
                            'routeResponseSelectionExpression': _0x5ee39c[_0x324086(0x238)]
                        }
                    }]
            }
        };
        const _0x3fd616 = _0x440a25['validate']();
        expect(_0x3fd616[_0x324086(0x21d)])['to'][_0x324086(0x21e)]['equal']([{
                'functionName': _0x324086(0x204),
                'route': _0x5ee39c['oLvAc'],
                'routeResponseSelectionExpression': _0x324086(0x210)
            }]);
    }), it(_0x5ee39c[_0x1c1375(0x239)], () => {
        const _0x3c0ffb = _0x1c1375;
        _0x440a25[_0x3c0ffb(0x219)]['service']['functions'] = { 'first': { 'events': [{ 'ignored': {} }] } };
        const _0xe0aa8 = _0x440a25['validate']();
        _0x5ee39c[_0x3c0ffb(0x236)](expect, _0xe0aa8[_0x3c0ffb(0x21d)])['to']['be']['an'](_0x5ee39c[_0x3c0ffb(0x23a)])[_0x3c0ffb(0x23b)]['length'](0xaf * -0x2 + -0x3cd + 0x52b);
    });
}), describe(_0x388c49(0x23c), () => {
    const _0x2a8662 = _0x388c49, _0x5619eb = {
            'rNmdr': 'authName',
            'cetND': _0x2a8662(0x23d),
            'fZiZZ': _0x2a8662(0x23e),
            'COtdh': _0x2a8662(0x23f),
            'mzXwH': 'package',
            'OtVUq': function (_0x3c1905, _0x332c08) {
                return _0x3c1905(_0x332c08);
            },
            'YPQVH': _0x2a8662(0x240)
        };
    it(_0x5619eb[_0x2a8662(0x241)], async () => {
        const _0x533c3b = _0x2a8662, _0x461d3d = _0x5619eb['rNmdr'], {
                cfTemplate: _0xccf9f8,
                awsNaming: _0x5b69fe
            } = await runServerless({
                'fixture': _0x5619eb[_0x533c3b(0x242)],
                'configExt': {
                    'functions': {
                        'first': {
                            'handler': _0x533c3b(0x243),
                            'events': [{
                                    'websocket': {
                                        'route': '$connect',
                                        'authorizer': {
                                            'name': _0x461d3d,
                                            'arn': {
                                                'Fn::Join': [
                                                    ':',
                                                    [
                                                        _0x5619eb[_0x533c3b(0x244)],
                                                        _0x5619eb['COtdh']
                                                    ]
                                                ]
                                            }
                                        }
                                    }
                                }]
                        }
                    }
                },
                'command': _0x5619eb['mzXwH']
            }), _0x260509 = _0xccf9f8[_0x533c3b(0x245)], _0x482ab2 = _0x5b69fe;
        _0x5619eb[_0x533c3b(0x246)](expect, _0x260509[_0x482ab2[_0x533c3b(0x247)](_0x461d3d)])['to'][_0x533c3b(0x248)], _0x5619eb[_0x533c3b(0x246)](expect, _0x260509[_0x482ab2[_0x533c3b(0x247)](_0x461d3d)][_0x533c3b(0x249)][_0x533c3b(0x24a)])['to'][_0x533c3b(0x21e)][_0x533c3b(0x21f)](_0x461d3d);
    });
});
