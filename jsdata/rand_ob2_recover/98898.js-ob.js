function _0x2e79(_0x435064, _0x28e2db) {
    return _0x2e79 = function (_0x285c52, _0x2e79ba) {
        _0x285c52 = _0x285c52 - 155;
        let _0x2b897a = _0x285c[_0x285c52];
        return _0x2b897a;
    }, _0x2e79(_0x435064, _0x28e2db);
}
const expect = require(_0xe614d1(168))['expect'], AwsCompileWebsocketsEvents = require(_0xe614d1(169)), Serverless = require('../../../../../../../../../../lib/Serverless'), AwsProvider = require(_0xe614d1(170)), runServerless = require('../../../../../../../../../utils/run-serverless');
describe(_0xe614d1(171), () => {
    const _0x51adfd = _0xe614d1;
    let _0x527188, _0x2c9560;
    beforeEach(() => {
        const _0x424a0e = _0x2e79, _0x54fac0 = {
                'stage': _0x424a0e(172),
                'region': _0x424a0e(173)
            };
        _0x527188 = new Serverless(), _0x527188[_0x424a0e(174)](_0x424a0e(175), new AwsProvider(_0x527188, _0x54fac0)), _0x2c9560 = new AwsCompileWebsocketsEvents(_0x527188, _0x54fac0);
    }), it('should support the simplified string syntax', () => {
        const _0x18b386 = _0x2e79;
        _0x2c9560['serverless']['service']['functions'] = { 'first': { 'events': [{ 'websocket': _0x18b386(176) }] } };
        const _0x587f6b = _0x2c9560[_0x18b386(177)]();
        expect(_0x587f6b[_0x18b386(178)])['to'][_0x18b386(179)][_0x18b386(180)]([{
                'functionName': _0x18b386(181),
                'route': '$connect'
            }]);
    }), it(_0x51adfd(182), () => {
        const _0xf6cc6b = _0x51adfd;
        _0x2c9560[_0xf6cc6b(183)][_0xf6cc6b(184)]['functions'] = { 'first': { 'events': [{ 'websocket': { 'route': _0xf6cc6b(176) } }] } };
        const _0x38c791 = _0x2c9560[_0xf6cc6b(177)]();
        expect(_0x38c791['events'])['to'][_0xf6cc6b(179)][_0xf6cc6b(180)]([{
                'functionName': _0xf6cc6b(181),
                'route': '$connect'
            }]);
    }), it(_0x51adfd(185), () => {
        const _0x2bbb67 = _0x51adfd;
        _0x2c9560['serverless']['service'][_0x2bbb67(186)] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x2bbb67(176),
                            'authorizer': _0x2bbb67(187)
                        }
                    }]
            }
        };
        const _0x3edb9d = _0x2c9560[_0x2bbb67(177)]();
        expect(_0x3edb9d[_0x2bbb67(178)])['to'][_0x2bbb67(179)]['equal']([{
                'functionName': 'first',
                'route': _0x2bbb67(176),
                'authorizer': {
                    'name': 'auth',
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                'arn:',
                                { 'Ref': _0x2bbb67(188) },
                                _0x2bbb67(189),
                                { 'Ref': _0x2bbb67(190) },
                                _0x2bbb67(191),
                                {
                                    'Fn::GetAtt': [
                                        'AuthLambdaFunction',
                                        _0x2bbb67(192)
                                    ]
                                },
                                _0x2bbb67(193)
                            ]
                        ]
                    },
                    'identitySource': [_0x2bbb67(194)],
                    'permission': 'AuthLambdaFunction'
                }
            }]);
    }), it('should add authorizer config when authorizer is specified as a string with arn', () => {
        const _0x1daf15 = _0x51adfd;
        _0x2c9560['serverless']['service'][_0x1daf15(186)] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': '$connect',
                            'authorizer': 'arn:aws:auth'
                        }
                    }]
            }
        };
        const _0x44035e = _0x2c9560[_0x1daf15(177)]();
        expect(_0x44035e[_0x1daf15(178)])['to'][_0x1daf15(179)][_0x1daf15(180)]([{
                'functionName': _0x1daf15(181),
                'route': '$connect',
                'authorizer': {
                    'name': 'auth',
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x1daf15(195),
                                { 'Ref': _0x1daf15(188) },
                                _0x1daf15(189),
                                { 'Ref': _0x1daf15(190) },
                                _0x1daf15(191),
                                _0x1daf15(196),
                                _0x1daf15(193)
                            ]
                        ]
                    },
                    'identitySource': [_0x1daf15(194)],
                    'permission': 'arn:aws:auth'
                }
            }]);
    }), it(_0x51adfd(197), () => {
        const _0x612830 = _0x51adfd;
        _0x2c9560[_0x612830(183)][_0x612830(184)][_0x612830(186)] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x612830(176),
                            'authorizer': {
                                'name': _0x612830(187),
                                'identitySource': [
                                    _0x612830(194),
                                    'route.request.querystring.Auth'
                                ]
                            }
                        }
                    }]
            }
        };
        const _0x31c51f = _0x2c9560['validate']();
        expect(_0x31c51f[_0x612830(178)])['to'][_0x612830(179)]['equal']([{
                'functionName': 'first',
                'route': _0x612830(176),
                'authorizer': {
                    'name': _0x612830(187),
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x612830(195),
                                { 'Ref': 'AWS::Partition' },
                                _0x612830(189),
                                { 'Ref': _0x612830(190) },
                                ':lambda:path/2015-03-31/functions/',
                                {
                                    'Fn::GetAtt': [
                                        _0x612830(198),
                                        'Arn'
                                    ]
                                },
                                '/invocations'
                            ]
                        ]
                    },
                    'identitySource': [
                        _0x612830(194),
                        _0x612830(199)
                    ],
                    'permission': _0x612830(198)
                }
            }]);
    }), it(_0x51adfd(200), () => {
        const _0x5294e5 = _0x51adfd;
        _0x2c9560[_0x5294e5(183)][_0x5294e5(184)][_0x5294e5(186)] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': '$connect',
                            'authorizer': {
                                'arn': _0x5294e5(196),
                                'identitySource': [
                                    _0x5294e5(194),
                                    _0x5294e5(199)
                                ]
                            }
                        }
                    }]
            }
        };
        const _0x4c5ef4 = _0x2c9560[_0x5294e5(177)]();
        expect(_0x4c5ef4['events'])['to'][_0x5294e5(179)]['equal']([{
                'functionName': _0x5294e5(181),
                'route': '$connect',
                'authorizer': {
                    'name': _0x5294e5(187),
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x5294e5(195),
                                { 'Ref': _0x5294e5(188) },
                                ':apigateway:',
                                { 'Ref': _0x5294e5(190) },
                                _0x5294e5(191),
                                'arn:aws:auth',
                                '/invocations'
                            ]
                        ]
                    },
                    'identitySource': [
                        _0x5294e5(194),
                        _0x5294e5(199)
                    ],
                    'permission': _0x5294e5(196)
                }
            }]);
    }), it(_0x51adfd(201), () => {
        const _0x5156c3 = _0x51adfd;
        _0x2c9560[_0x5156c3(183)][_0x5156c3(184)][_0x5156c3(186)] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': '$connect',
                            'routeResponseSelectionExpression': _0x5156c3(202)
                        }
                    }]
            }
        };
        const _0xbb214d = _0x2c9560[_0x5156c3(177)]();
        expect(_0xbb214d['events'])['to']['deep'][_0x5156c3(180)]([{
                'functionName': _0x5156c3(181),
                'route': '$connect',
                'routeResponseSelectionExpression': _0x5156c3(202)
            }]);
    }), it('should ignore non-websocket events', () => {
        const _0x261517 = _0x51adfd;
        _0x2c9560[_0x261517(183)][_0x261517(184)][_0x261517(186)] = { 'first': { 'events': [{ 'ignored': {} }] } };
        const _0x3805a7 = _0x2c9560['validate']();
        expect(_0x3805a7[_0x261517(178)])['to']['be']['an'](_0x261517(203))[_0x261517(204)][_0x261517(205)](0);
    });
}), describe('#validate() using runServerless util', () => {
    const _0x16407d = _0xe614d1;
    it(_0x16407d(206), async () => {
        const _0x2ab1e9 = _0x16407d, _0x1f1b6b = _0x2ab1e9(207), {
                cfTemplate: _0x5f2687,
                awsNaming: _0x2efa5f
            } = await runServerless({
                'fixture': _0x2ab1e9(208),
                'configExt': {
                    'functions': {
                        'first': {
                            'handler': 'index.handler',
                            'events': [{
                                    'websocket': {
                                        'route': _0x2ab1e9(176),
                                        'authorizer': {
                                            'name': _0x1f1b6b,
                                            'arn': {
                                                'Fn::Join': [
                                                    ':',
                                                    [
                                                        _0x2ab1e9(209),
                                                        _0x2ab1e9(210)
                                                    ]
                                                ]
                                            }
                                        }
                                    }
                                }]
                        }
                    }
                },
                'command': _0x2ab1e9(211)
            }), _0x138ac8 = _0x5f2687[_0x2ab1e9(212)], _0x37c22b = _0x2efa5f;
        expect(_0x138ac8[_0x37c22b[_0x2ab1e9(213)](_0x1f1b6b)])['to'][_0x2ab1e9(214)], expect(_0x138ac8[_0x37c22b[_0x2ab1e9(213)](_0x1f1b6b)][_0x2ab1e9(215)][_0x2ab1e9(216)])['to']['deep'][_0x2ab1e9(180)](_0x1f1b6b);
    });
});