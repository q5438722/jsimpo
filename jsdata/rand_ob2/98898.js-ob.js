'use strict';
const _0x285c = [
    'setProvider',
    'aws',
    '$connect',
    'validate',
    'events',
    'deep',
    'equal',
    'first',
    'should\x20support\x20the\x20extended\x20object\x20syntax',
    'serverless',
    'service',
    'should\x20add\x20authorizer\x20config\x20when\x20authorizer\x20is\x20specified\x20as\x20a\x20string',
    'functions',
    'auth',
    'AWS::Partition',
    ':apigateway:',
    'AWS::Region',
    ':lambda:path/2015-03-31/functions/',
    'Arn',
    '/invocations',
    'route.request.header.Auth',
    'arn:',
    'arn:aws:auth',
    'should\x20add\x20authorizer\x20config\x20when\x20authorizer\x20is\x20specified\x20as\x20an\x20object',
    'AuthLambdaFunction',
    'route.request.querystring.Auth',
    'should\x20add\x20authorizer\x20config\x20when\x20authorizer\x20is\x20specified\x20as\x20an\x20object\x20with\x20arn',
    'should\x20add\x20routeResponse\x20when\x20routeResponseSelectionExpression\x20is\x20configured',
    '$default',
    'Array',
    'with',
    'length',
    'should\x20use\x20provided\x20authorizer\x20name\x20when\x20name\x20field\x20is\x20supplied',
    'authName',
    'function',
    'arn',
    'arnName',
    'package',
    'Resources',
    'getWebsocketsAuthorizerLogicalId',
    'exist',
    'Properties',
    'Name',
    '213UnHaNo',
    '213uCiYfz',
    '1016796bCVbPH',
    '25249vDYdhk',
    '14GufAad',
    '9AKBhhm',
    '138137wZqEFB',
    '280927HCbwwC',
    '2wBYLOF',
    '2UNiBua',
    '10993kzjvUe',
    '258pOtHGm',
    '9346kUKPUX',
    'chai',
    '../../../../../../../../../../lib/plugins/aws/package/compile/events/websockets/index',
    '../../../../../../../../../../lib/plugins/aws/provider',
    '#validate()',
    'dev',
    'us-east-1'
];
const _0xe614d1 = _0x2e79;
(function (_0x4025c8, _0x1d1466) {
    const _0x1e782a = _0x2e79;
    while (!![]) {
        try {
            const _0x3296b5 = parseInt(_0x1e782a(0x9b)) * -parseInt(_0x1e782a(0x9c)) + parseInt(_0x1e782a(0x9d)) + -parseInt(_0x1e782a(0x9e)) * -parseInt(_0x1e782a(0x9f)) + -parseInt(_0x1e782a(0xa0)) * -parseInt(_0x1e782a(0xa1)) + -parseInt(_0x1e782a(0xa2)) * -parseInt(_0x1e782a(0xa3)) + parseInt(_0x1e782a(0xa4)) * -parseInt(_0x1e782a(0xa5)) + -parseInt(_0x1e782a(0xa6)) * parseInt(_0x1e782a(0xa7));
            if (_0x3296b5 === _0x1d1466)
                break;
            else
                _0x4025c8['push'](_0x4025c8['shift']());
        } catch (_0x2a77ff) {
            _0x4025c8['push'](_0x4025c8['shift']());
        }
    }
}(_0x285c, 0xaa1aa));
function _0x2e79(_0x435064, _0x28e2db) {
    return _0x2e79 = function (_0x285c52, _0x2e79ba) {
        _0x285c52 = _0x285c52 - 0x9b;
        let _0x2b897a = _0x285c[_0x285c52];
        return _0x2b897a;
    }, _0x2e79(_0x435064, _0x28e2db);
}
const expect = require(_0xe614d1(0xa8))['expect'], AwsCompileWebsocketsEvents = require(_0xe614d1(0xa9)), Serverless = require('../../../../../../../../../../lib/Serverless'), AwsProvider = require(_0xe614d1(0xaa)), runServerless = require('../../../../../../../../../utils/run-serverless');
describe(_0xe614d1(0xab), () => {
    const _0x51adfd = _0xe614d1;
    let _0x527188, _0x2c9560;
    beforeEach(() => {
        const _0x424a0e = _0x2e79, _0x54fac0 = {
                'stage': _0x424a0e(0xac),
                'region': _0x424a0e(0xad)
            };
        _0x527188 = new Serverless(), _0x527188[_0x424a0e(0xae)](_0x424a0e(0xaf), new AwsProvider(_0x527188, _0x54fac0)), _0x2c9560 = new AwsCompileWebsocketsEvents(_0x527188, _0x54fac0);
    }), it('should\x20support\x20the\x20simplified\x20string\x20syntax', () => {
        const _0x18b386 = _0x2e79;
        _0x2c9560['serverless']['service']['functions'] = { 'first': { 'events': [{ 'websocket': _0x18b386(0xb0) }] } };
        const _0x587f6b = _0x2c9560[_0x18b386(0xb1)]();
        expect(_0x587f6b[_0x18b386(0xb2)])['to'][_0x18b386(0xb3)][_0x18b386(0xb4)]([{
                'functionName': _0x18b386(0xb5),
                'route': '$connect'
            }]);
    }), it(_0x51adfd(0xb6), () => {
        const _0xf6cc6b = _0x51adfd;
        _0x2c9560[_0xf6cc6b(0xb7)][_0xf6cc6b(0xb8)]['functions'] = { 'first': { 'events': [{ 'websocket': { 'route': _0xf6cc6b(0xb0) } }] } };
        const _0x38c791 = _0x2c9560[_0xf6cc6b(0xb1)]();
        expect(_0x38c791['events'])['to'][_0xf6cc6b(0xb3)][_0xf6cc6b(0xb4)]([{
                'functionName': _0xf6cc6b(0xb5),
                'route': '$connect'
            }]);
    }), it(_0x51adfd(0xb9), () => {
        const _0x2bbb67 = _0x51adfd;
        _0x2c9560['serverless']['service'][_0x2bbb67(0xba)] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x2bbb67(0xb0),
                            'authorizer': _0x2bbb67(0xbb)
                        }
                    }]
            }
        };
        const _0x3edb9d = _0x2c9560[_0x2bbb67(0xb1)]();
        expect(_0x3edb9d[_0x2bbb67(0xb2)])['to'][_0x2bbb67(0xb3)]['equal']([{
                'functionName': 'first',
                'route': _0x2bbb67(0xb0),
                'authorizer': {
                    'name': 'auth',
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                'arn:',
                                { 'Ref': _0x2bbb67(0xbc) },
                                _0x2bbb67(0xbd),
                                { 'Ref': _0x2bbb67(0xbe) },
                                _0x2bbb67(0xbf),
                                {
                                    'Fn::GetAtt': [
                                        'AuthLambdaFunction',
                                        _0x2bbb67(0xc0)
                                    ]
                                },
                                _0x2bbb67(0xc1)
                            ]
                        ]
                    },
                    'identitySource': [_0x2bbb67(0xc2)],
                    'permission': 'AuthLambdaFunction'
                }
            }]);
    }), it('should\x20add\x20authorizer\x20config\x20when\x20authorizer\x20is\x20specified\x20as\x20a\x20string\x20with\x20arn', () => {
        const _0x1daf15 = _0x51adfd;
        _0x2c9560['serverless']['service'][_0x1daf15(0xba)] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': '$connect',
                            'authorizer': 'arn:aws:auth'
                        }
                    }]
            }
        };
        const _0x44035e = _0x2c9560[_0x1daf15(0xb1)]();
        expect(_0x44035e[_0x1daf15(0xb2)])['to'][_0x1daf15(0xb3)][_0x1daf15(0xb4)]([{
                'functionName': _0x1daf15(0xb5),
                'route': '$connect',
                'authorizer': {
                    'name': 'auth',
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x1daf15(0xc3),
                                { 'Ref': _0x1daf15(0xbc) },
                                _0x1daf15(0xbd),
                                { 'Ref': _0x1daf15(0xbe) },
                                _0x1daf15(0xbf),
                                _0x1daf15(0xc4),
                                _0x1daf15(0xc1)
                            ]
                        ]
                    },
                    'identitySource': [_0x1daf15(0xc2)],
                    'permission': 'arn:aws:auth'
                }
            }]);
    }), it(_0x51adfd(0xc5), () => {
        const _0x612830 = _0x51adfd;
        _0x2c9560[_0x612830(0xb7)][_0x612830(0xb8)][_0x612830(0xba)] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x612830(0xb0),
                            'authorizer': {
                                'name': _0x612830(0xbb),
                                'identitySource': [
                                    _0x612830(0xc2),
                                    'route.request.querystring.Auth'
                                ]
                            }
                        }
                    }]
            }
        };
        const _0x31c51f = _0x2c9560['validate']();
        expect(_0x31c51f[_0x612830(0xb2)])['to'][_0x612830(0xb3)]['equal']([{
                'functionName': 'first',
                'route': _0x612830(0xb0),
                'authorizer': {
                    'name': _0x612830(0xbb),
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x612830(0xc3),
                                { 'Ref': 'AWS::Partition' },
                                _0x612830(0xbd),
                                { 'Ref': _0x612830(0xbe) },
                                ':lambda:path/2015-03-31/functions/',
                                {
                                    'Fn::GetAtt': [
                                        _0x612830(0xc6),
                                        'Arn'
                                    ]
                                },
                                '/invocations'
                            ]
                        ]
                    },
                    'identitySource': [
                        _0x612830(0xc2),
                        _0x612830(0xc7)
                    ],
                    'permission': _0x612830(0xc6)
                }
            }]);
    }), it(_0x51adfd(0xc8), () => {
        const _0x5294e5 = _0x51adfd;
        _0x2c9560[_0x5294e5(0xb7)][_0x5294e5(0xb8)][_0x5294e5(0xba)] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': '$connect',
                            'authorizer': {
                                'arn': _0x5294e5(0xc4),
                                'identitySource': [
                                    _0x5294e5(0xc2),
                                    _0x5294e5(0xc7)
                                ]
                            }
                        }
                    }]
            }
        };
        const _0x4c5ef4 = _0x2c9560[_0x5294e5(0xb1)]();
        expect(_0x4c5ef4['events'])['to'][_0x5294e5(0xb3)]['equal']([{
                'functionName': _0x5294e5(0xb5),
                'route': '$connect',
                'authorizer': {
                    'name': _0x5294e5(0xbb),
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x5294e5(0xc3),
                                { 'Ref': _0x5294e5(0xbc) },
                                ':apigateway:',
                                { 'Ref': _0x5294e5(0xbe) },
                                _0x5294e5(0xbf),
                                'arn:aws:auth',
                                '/invocations'
                            ]
                        ]
                    },
                    'identitySource': [
                        _0x5294e5(0xc2),
                        _0x5294e5(0xc7)
                    ],
                    'permission': _0x5294e5(0xc4)
                }
            }]);
    }), it(_0x51adfd(0xc9), () => {
        const _0x5156c3 = _0x51adfd;
        _0x2c9560[_0x5156c3(0xb7)][_0x5156c3(0xb8)][_0x5156c3(0xba)] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': '$connect',
                            'routeResponseSelectionExpression': _0x5156c3(0xca)
                        }
                    }]
            }
        };
        const _0xbb214d = _0x2c9560[_0x5156c3(0xb1)]();
        expect(_0xbb214d['events'])['to']['deep'][_0x5156c3(0xb4)]([{
                'functionName': _0x5156c3(0xb5),
                'route': '$connect',
                'routeResponseSelectionExpression': _0x5156c3(0xca)
            }]);
    }), it('should\x20ignore\x20non-websocket\x20events', () => {
        const _0x261517 = _0x51adfd;
        _0x2c9560[_0x261517(0xb7)][_0x261517(0xb8)][_0x261517(0xba)] = { 'first': { 'events': [{ 'ignored': {} }] } };
        const _0x3805a7 = _0x2c9560['validate']();
        expect(_0x3805a7[_0x261517(0xb2)])['to']['be']['an'](_0x261517(0xcb))[_0x261517(0xcc)][_0x261517(0xcd)](0x0);
    });
}), describe('#validate()\x20using\x20runServerless\x20util', () => {
    const _0x16407d = _0xe614d1;
    it(_0x16407d(0xce), async () => {
        const _0x2ab1e9 = _0x16407d, _0x1f1b6b = _0x2ab1e9(0xcf), {
                cfTemplate: _0x5f2687,
                awsNaming: _0x2efa5f
            } = await runServerless({
                'fixture': _0x2ab1e9(0xd0),
                'configExt': {
                    'functions': {
                        'first': {
                            'handler': 'index.handler',
                            'events': [{
                                    'websocket': {
                                        'route': _0x2ab1e9(0xb0),
                                        'authorizer': {
                                            'name': _0x1f1b6b,
                                            'arn': {
                                                'Fn::Join': [
                                                    ':',
                                                    [
                                                        _0x2ab1e9(0xd1),
                                                        _0x2ab1e9(0xd2)
                                                    ]
                                                ]
                                            }
                                        }
                                    }
                                }]
                        }
                    }
                },
                'command': _0x2ab1e9(0xd3)
            }), _0x138ac8 = _0x5f2687[_0x2ab1e9(0xd4)], _0x37c22b = _0x2efa5f;
        expect(_0x138ac8[_0x37c22b[_0x2ab1e9(0xd5)](_0x1f1b6b)])['to'][_0x2ab1e9(0xd6)], expect(_0x138ac8[_0x37c22b[_0x2ab1e9(0xd5)](_0x1f1b6b)][_0x2ab1e9(0xd7)][_0x2ab1e9(0xd8)])['to']['deep'][_0x2ab1e9(0xb4)](_0x1f1b6b);
    });
});
