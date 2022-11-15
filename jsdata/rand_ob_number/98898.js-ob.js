'use strict';
const expect = require('chai')['expect'], AwsCompileWebsocketsEvents = require('../../../../../../../../../../lib/plugins/aws/package/compile/events/websockets/index'), Serverless = require('../../../../../../../../../../lib/Serverless'), AwsProvider = require('../../../../../../../../../../lib/plugins/aws/provider'), runServerless = require('../../../../../../../../../utils/run-serverless');
describe('#validate()', () => {
    let _0xc2a22a, _0xf7368d;
    beforeEach(() => {
        const _0x146d15 = {
            'stage': 'dev',
            'region': 'us-east-1'
        };
        _0xc2a22a = new Serverless(), _0xc2a22a['setProvider']('aws', new AwsProvider(_0xc2a22a, _0x146d15)), _0xf7368d = new AwsCompileWebsocketsEvents(_0xc2a22a, _0x146d15);
    }), it('should\x20support\x20the\x20simplified\x20string\x20syntax', () => {
        _0xf7368d['serverless']['service']['functions'] = { 'first': { 'events': [{ 'websocket': '$connect' }] } };
        const _0x34e90d = _0xf7368d['validate']();
        expect(_0x34e90d['events'])['to']['deep']['equal']([{
                'functionName': 'first',
                'route': '$connect'
            }]);
    }), it('should\x20support\x20the\x20extended\x20object\x20syntax', () => {
        _0xf7368d['serverless']['service']['functions'] = { 'first': { 'events': [{ 'websocket': { 'route': '$connect' } }] } };
        const _0x1c6c5a = _0xf7368d['validate']();
        expect(_0x1c6c5a['events'])['to']['deep']['equal']([{
                'functionName': 'first',
                'route': '$connect'
            }]);
    }), it('should\x20add\x20authorizer\x20config\x20when\x20authorizer\x20is\x20specified\x20as\x20a\x20string', () => {
        _0xf7368d['serverless']['service']['functions'] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': '$connect',
                            'authorizer': 'auth'
                        }
                    }]
            }
        };
        const _0x52541f = _0xf7368d['validate']();
        expect(_0x52541f['events'])['to']['deep']['equal']([{
                'functionName': 'first',
                'route': '$connect',
                'authorizer': {
                    'name': 'auth',
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                'arn:',
                                { 'Ref': 'AWS::Partition' },
                                ':apigateway:',
                                { 'Ref': 'AWS::Region' },
                                ':lambda:path/2015-03-31/functions/',
                                {
                                    'Fn::GetAtt': [
                                        'AuthLambdaFunction',
                                        'Arn'
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
    }), it('should\x20add\x20authorizer\x20config\x20when\x20authorizer\x20is\x20specified\x20as\x20a\x20string\x20with\x20arn', () => {
        _0xf7368d['serverless']['service']['functions'] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': '$connect',
                            'authorizer': 'arn:aws:auth'
                        }
                    }]
            }
        };
        const _0x36f1ca = _0xf7368d['validate']();
        expect(_0x36f1ca['events'])['to']['deep']['equal']([{
                'functionName': 'first',
                'route': '$connect',
                'authorizer': {
                    'name': 'auth',
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                'arn:',
                                { 'Ref': 'AWS::Partition' },
                                ':apigateway:',
                                { 'Ref': 'AWS::Region' },
                                ':lambda:path/2015-03-31/functions/',
                                'arn:aws:auth',
                                '/invocations'
                            ]
                        ]
                    },
                    'identitySource': ['route.request.header.Auth'],
                    'permission': 'arn:aws:auth'
                }
            }]);
    }), it('should\x20add\x20authorizer\x20config\x20when\x20authorizer\x20is\x20specified\x20as\x20an\x20object', () => {
        _0xf7368d['serverless']['service']['functions'] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': '$connect',
                            'authorizer': {
                                'name': 'auth',
                                'identitySource': [
                                    'route.request.header.Auth',
                                    'route.request.querystring.Auth'
                                ]
                            }
                        }
                    }]
            }
        };
        const _0x35d8f8 = _0xf7368d['validate']();
        expect(_0x35d8f8['events'])['to']['deep']['equal']([{
                'functionName': 'first',
                'route': '$connect',
                'authorizer': {
                    'name': 'auth',
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                'arn:',
                                { 'Ref': 'AWS::Partition' },
                                ':apigateway:',
                                { 'Ref': 'AWS::Region' },
                                ':lambda:path/2015-03-31/functions/',
                                {
                                    'Fn::GetAtt': [
                                        'AuthLambdaFunction',
                                        'Arn'
                                    ]
                                },
                                '/invocations'
                            ]
                        ]
                    },
                    'identitySource': [
                        'route.request.header.Auth',
                        'route.request.querystring.Auth'
                    ],
                    'permission': 'AuthLambdaFunction'
                }
            }]);
    }), it('should\x20add\x20authorizer\x20config\x20when\x20authorizer\x20is\x20specified\x20as\x20an\x20object\x20with\x20arn', () => {
        _0xf7368d['serverless']['service']['functions'] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': '$connect',
                            'authorizer': {
                                'arn': 'arn:aws:auth',
                                'identitySource': [
                                    'route.request.header.Auth',
                                    'route.request.querystring.Auth'
                                ]
                            }
                        }
                    }]
            }
        };
        const _0x5a6535 = _0xf7368d['validate']();
        expect(_0x5a6535['events'])['to']['deep']['equal']([{
                'functionName': 'first',
                'route': '$connect',
                'authorizer': {
                    'name': 'auth',
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                'arn:',
                                { 'Ref': 'AWS::Partition' },
                                ':apigateway:',
                                { 'Ref': 'AWS::Region' },
                                ':lambda:path/2015-03-31/functions/',
                                'arn:aws:auth',
                                '/invocations'
                            ]
                        ]
                    },
                    'identitySource': [
                        'route.request.header.Auth',
                        'route.request.querystring.Auth'
                    ],
                    'permission': 'arn:aws:auth'
                }
            }]);
    }), it('should\x20add\x20routeResponse\x20when\x20routeResponseSelectionExpression\x20is\x20configured', () => {
        _0xf7368d['serverless']['service']['functions'] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': '$connect',
                            'routeResponseSelectionExpression': '$default'
                        }
                    }]
            }
        };
        const _0x1fd5e4 = _0xf7368d['validate']();
        expect(_0x1fd5e4['events'])['to']['deep']['equal']([{
                'functionName': 'first',
                'route': '$connect',
                'routeResponseSelectionExpression': '$default'
            }]);
    }), it('should\x20ignore\x20non-websocket\x20events', () => {
        _0xf7368d['serverless']['service']['functions'] = { 'first': { 'events': [{ 'ignored': {} }] } };
        const _0x5498f0 = _0xf7368d['validate']();
        expect(_0x5498f0['events'])['to']['be']['an']('Array')['with']['length'](-0xcad * -0x2 + 0xa9 * 0x1b + -0x2b2d);
    });
}), describe('#validate()\x20using\x20runServerless\x20util', () => {
    it('should\x20use\x20provided\x20authorizer\x20name\x20when\x20name\x20field\x20is\x20supplied', async () => {
        const _0x51dfe4 = 'authName', {
                cfTemplate: _0x187e17,
                awsNaming: _0x37f8b0
            } = await runServerless({
                'fixture': 'function',
                'configExt': {
                    'functions': {
                        'first': {
                            'handler': 'index.handler',
                            'events': [{
                                    'websocket': {
                                        'route': '$connect',
                                        'authorizer': {
                                            'name': _0x51dfe4,
                                            'arn': {
                                                'Fn::Join': [
                                                    ':',
                                                    [
                                                        'arn',
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
                'command': 'package'
            }), _0x2899c2 = _0x187e17['Resources'], _0x10a000 = _0x37f8b0;
        expect(_0x2899c2[_0x10a000['getWebsocketsAuthorizerLogicalId'](_0x51dfe4)])['to']['exist'], expect(_0x2899c2[_0x10a000['getWebsocketsAuthorizerLogicalId'](_0x51dfe4)]['Properties']['Name'])['to']['deep']['equal'](_0x51dfe4);
    });
});
