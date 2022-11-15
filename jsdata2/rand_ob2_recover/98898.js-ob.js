const expect = require(_0x1519c1(258))['expect'], AwsCompileWebsocketsEvents = require(_0x1519c1(259)), Serverless = require(_0x1519c1(260)), AwsProvider = require(_0x1519c1(261)), runServerless = require('../../../../../../../../../utils/run-serverless');
function _0x35f0(_0xd036b0, _0x481c26) {
    return _0x35f0 = function (_0x726538, _0x35f04a) {
        _0x726538 = _0x726538 - 248;
        let _0x4305ad = _0x7265[_0x726538];
        return _0x4305ad;
    }, _0x35f0(_0xd036b0, _0x481c26);
}
describe(_0x1519c1(262), () => {
    const _0x182765 = _0x1519c1;
    let _0x4d3a83, _0x807578;
    beforeEach(() => {
        const _0x40dc29 = _0x35f0, _0x65ee27 = {
                'stage': _0x40dc29(263),
                'region': _0x40dc29(264)
            };
        _0x4d3a83 = new Serverless(), _0x4d3a83['setProvider'](_0x40dc29(265), new AwsProvider(_0x4d3a83, _0x65ee27)), _0x807578 = new AwsCompileWebsocketsEvents(_0x4d3a83, _0x65ee27);
    }), it(_0x182765(266), () => {
        const _0x3e339e = _0x182765;
        _0x807578[_0x3e339e(267)][_0x3e339e(268)][_0x3e339e(269)] = { 'first': { 'events': [{ 'websocket': _0x3e339e(270) }] } };
        const _0x520315 = _0x807578[_0x3e339e(271)]();
        expect(_0x520315['events'])['to'][_0x3e339e(272)][_0x3e339e(273)]([{
                'functionName': 'first',
                'route': '$connect'
            }]);
    }), it(_0x182765(274), () => {
        const _0x4b7eee = _0x182765;
        _0x807578[_0x4b7eee(267)][_0x4b7eee(268)]['functions'] = { 'first': { 'events': [{ 'websocket': { 'route': '$connect' } }] } };
        const _0x38b0b0 = _0x807578[_0x4b7eee(271)]();
        expect(_0x38b0b0[_0x4b7eee(275)])['to']['deep'][_0x4b7eee(273)]([{
                'functionName': 'first',
                'route': _0x4b7eee(270)
            }]);
    }), it(_0x182765(276), () => {
        const _0x2b6d59 = _0x182765;
        _0x807578[_0x2b6d59(267)][_0x2b6d59(268)]['functions'] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x2b6d59(270),
                            'authorizer': _0x2b6d59(277)
                        }
                    }]
            }
        };
        const _0x3b89fa = _0x807578[_0x2b6d59(271)]();
        expect(_0x3b89fa[_0x2b6d59(275)])['to'][_0x2b6d59(272)][_0x2b6d59(273)]([{
                'functionName': 'first',
                'route': _0x2b6d59(270),
                'authorizer': {
                    'name': _0x2b6d59(277),
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                'arn:',
                                { 'Ref': _0x2b6d59(278) },
                                _0x2b6d59(279),
                                { 'Ref': 'AWS::Region' },
                                _0x2b6d59(280),
                                {
                                    'Fn::GetAtt': [
                                        _0x2b6d59(281),
                                        _0x2b6d59(282)
                                    ]
                                },
                                '/invocations'
                            ]
                        ]
                    },
                    'identitySource': ['route.request.header.Auth'],
                    'permission': 'AuthLambdaFunction'
                }
            }]);
    }), it(_0x182765(283), () => {
        const _0x18af82 = _0x182765;
        _0x807578[_0x18af82(267)][_0x18af82(268)][_0x18af82(269)] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x18af82(270),
                            'authorizer': _0x18af82(284)
                        }
                    }]
            }
        };
        const _0x22cfa5 = _0x807578['validate']();
        expect(_0x22cfa5['events'])['to'][_0x18af82(272)]['equal']([{
                'functionName': _0x18af82(285),
                'route': _0x18af82(270),
                'authorizer': {
                    'name': 'auth',
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x18af82(286),
                                { 'Ref': _0x18af82(278) },
                                _0x18af82(279),
                                { 'Ref': 'AWS::Region' },
                                ':lambda:path/2015-03-31/functions/',
                                _0x18af82(284),
                                _0x18af82(287)
                            ]
                        ]
                    },
                    'identitySource': ['route.request.header.Auth'],
                    'permission': _0x18af82(284)
                }
            }]);
    }), it('should add authorizer config when authorizer is specified as an object', () => {
        const _0x1ab114 = _0x182765;
        _0x807578[_0x1ab114(267)][_0x1ab114(268)]['functions'] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x1ab114(270),
                            'authorizer': {
                                'name': _0x1ab114(277),
                                'identitySource': [
                                    _0x1ab114(288),
                                    _0x1ab114(289)
                                ]
                            }
                        }
                    }]
            }
        };
        const _0x548943 = _0x807578[_0x1ab114(271)]();
        expect(_0x548943[_0x1ab114(275)])['to'][_0x1ab114(272)][_0x1ab114(273)]([{
                'functionName': _0x1ab114(285),
                'route': _0x1ab114(270),
                'authorizer': {
                    'name': 'auth',
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x1ab114(286),
                                { 'Ref': _0x1ab114(278) },
                                _0x1ab114(279),
                                { 'Ref': _0x1ab114(290) },
                                _0x1ab114(280),
                                {
                                    'Fn::GetAtt': [
                                        _0x1ab114(281),
                                        'Arn'
                                    ]
                                },
                                _0x1ab114(287)
                            ]
                        ]
                    },
                    'identitySource': [
                        _0x1ab114(288),
                        _0x1ab114(289)
                    ],
                    'permission': _0x1ab114(281)
                }
            }]);
    }), it(_0x182765(291), () => {
        const _0x31265f = _0x182765;
        _0x807578['serverless'][_0x31265f(268)][_0x31265f(269)] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x31265f(270),
                            'authorizer': {
                                'arn': 'arn:aws:auth',
                                'identitySource': [
                                    _0x31265f(288),
                                    _0x31265f(289)
                                ]
                            }
                        }
                    }]
            }
        };
        const _0x125cc8 = _0x807578['validate']();
        expect(_0x125cc8['events'])['to'][_0x31265f(272)][_0x31265f(273)]([{
                'functionName': _0x31265f(285),
                'route': _0x31265f(270),
                'authorizer': {
                    'name': _0x31265f(277),
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x31265f(286),
                                { 'Ref': _0x31265f(278) },
                                _0x31265f(279),
                                { 'Ref': 'AWS::Region' },
                                ':lambda:path/2015-03-31/functions/',
                                'arn:aws:auth',
                                '/invocations'
                            ]
                        ]
                    },
                    'identitySource': [
                        'route.request.header.Auth',
                        _0x31265f(289)
                    ],
                    'permission': 'arn:aws:auth'
                }
            }]);
    }), it(_0x182765(292), () => {
        const _0x24ae45 = _0x182765;
        _0x807578[_0x24ae45(267)]['service'][_0x24ae45(269)] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x24ae45(270),
                            'routeResponseSelectionExpression': _0x24ae45(293)
                        }
                    }]
            }
        };
        const _0xbf46ca = _0x807578[_0x24ae45(271)]();
        expect(_0xbf46ca[_0x24ae45(275)])['to']['deep']['equal']([{
                'functionName': _0x24ae45(285),
                'route': _0x24ae45(270),
                'routeResponseSelectionExpression': _0x24ae45(293)
            }]);
    }), it(_0x182765(294), () => {
        const _0x1e044a = _0x182765;
        _0x807578[_0x1e044a(267)][_0x1e044a(268)]['functions'] = { 'first': { 'events': [{ 'ignored': {} }] } };
        const _0x372ba7 = _0x807578['validate']();
        expect(_0x372ba7[_0x1e044a(275)])['to']['be']['an'](_0x1e044a(295))['with'][_0x1e044a(296)](0);
    });
}), describe(_0x1519c1(297), () => {
    const _0x2ba49b = _0x1519c1;
    it(_0x2ba49b(298), async () => {
        const _0xef04a3 = _0x2ba49b, _0x240f99 = 'authName', {
                cfTemplate: _0x11fbfa,
                awsNaming: _0x4ad104
            } = await runServerless({
                'fixture': _0xef04a3(299),
                'configExt': {
                    'functions': {
                        'first': {
                            'handler': _0xef04a3(300),
                            'events': [{
                                    'websocket': {
                                        'route': '$connect',
                                        'authorizer': {
                                            'name': _0x240f99,
                                            'arn': {
                                                'Fn::Join': [
                                                    ':',
                                                    [
                                                        _0xef04a3(301),
                                                        _0xef04a3(302)
                                                    ]
                                                ]
                                            }
                                        }
                                    }
                                }]
                        }
                    }
                },
                'command': _0xef04a3(303)
            }), _0x41aa22 = _0x11fbfa['Resources'], _0x5dd7af = _0x4ad104;
        expect(_0x41aa22[_0x5dd7af['getWebsocketsAuthorizerLogicalId'](_0x240f99)])['to']['exist'], expect(_0x41aa22[_0x5dd7af[_0xef04a3(304)](_0x240f99)][_0xef04a3(305)][_0xef04a3(306)])['to'][_0xef04a3(272)][_0xef04a3(273)](_0x240f99);
    });
});