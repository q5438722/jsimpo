'use strict';
const expect = require('chai')['expect'];
const AwsCompileWebsocketsEvents = require('../../../../../../../../../../lib/plugins/aws/package/compile/events/websockets/index');
const Serverless = require('../../../../../../../../../../lib/Serverless');
const AwsProvider = require('../../../../../../../../../../lib/plugins/aws/provider');
const runServerless = require('../../../../../../../../../utils/run-serverless');
describe('#validate()', () => {
    let _0x3fed4f;
    let _0x2c06a4;
    beforeEach(() => {
        const _0x205059 = { 'region': 'us-east-1' };
        _0x3fed4f = new Serverless();
        _0x3fed4f['setProvider']('aws', new AwsProvider(_0x3fed4f, _0x205059));
        _0x2c06a4 = new AwsCompileWebsocketsEvents(_0x3fed4f, _0x205059);
    });
    it('should support the simplified string syntax', () => {
        _0x2c06a4['serverless']['service']['functions'] = { 'first': { 'events': [{ 'websocket': '$connect' }] } };
        const _0x4cf347 = _0x2c06a4['validate']();
        expect(_0x4cf347['events'])['to']['deep']['equal']([{
                'functionName': 'first',
                'route': '$connect'
            }]);
    });
    it('should support the extended object syntax', () => {
        _0x2c06a4['serverless']['service']['functions'] = { 'first': { 'events': [{ 'websocket': { 'route': '$connect' } }] } };
        const _0x4e904c = _0x2c06a4['validate']();
        expect(_0x4e904c['events'])['to']['deep']['equal']([{
                'functionName': 'first',
                'route': '$connect'
            }]);
    });
    it('should add authorizer config when authorizer is specified as a string', () => {
        _0x2c06a4['serverless']['service']['functions'] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': '$connect',
                            'authorizer': 'auth'
                        }
                    }]
            }
        };
        const _0x389d2a = _0x2c06a4['validate']();
        expect(_0x389d2a['events'])['to']['deep']['equal']([{
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
    });
    it('should add authorizer config when authorizer is specified as a string with arn', () => {
        _0x2c06a4['serverless']['service']['functions'] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': '$connect',
                            'authorizer': 'arn:aws:auth'
                        }
                    }]
            }
        };
        const _0x2cf5b6 = _0x2c06a4['validate']();
        expect(_0x2cf5b6['events'])['to']['deep']['equal']([{
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
    });
    it('should add authorizer config when authorizer is specified as an object', () => {
        _0x2c06a4['serverless']['service']['functions'] = {
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
        const _0xebd33a = _0x2c06a4['validate']();
        expect(_0xebd33a['events'])['to']['deep']['equal']([{
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
    });
    it('should add authorizer config when authorizer is specified as an object with arn', () => {
        _0x2c06a4['serverless']['service']['functions'] = {
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
        const _0x1c1c27 = _0x2c06a4['validate']();
        expect(_0x1c1c27['events'])['to']['deep']['equal']([{
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
    });
    it('should add routeResponse when routeResponseSelectionExpression is configured', () => {
        if ('JzVfr' !== 'JzVfr') {
            _0x2c06a4['serverless']['service']['functions'] = { 'first': { 'events': [{ 'websocket': '$connect' }] } };
            const _0x260ae2 = _0x2c06a4['validate']();
            expect(_0x260ae2['events'])['to']['deep']['equal']([{
                    'functionName': 'first',
                    'route': '$connect'
                }]);
        } else {
            _0x2c06a4['serverless']['service']['functions'] = {
                'first': {
                    'events': [{
                            'websocket': {
                                'route': '$connect',
                                'routeResponseSelectionExpression': '$default'
                            }
                        }]
                }
            };
            const _0x7307e6 = _0x2c06a4['validate']();
            expect(_0x7307e6['events'])['to']['deep']['equal']([{
                    'functionName': 'first',
                    'route': '$connect',
                    'routeResponseSelectionExpression': '$default'
                }]);
        }
    });
    it('should ignore non-websocket events', () => {
        _0x2c06a4['serverless']['service']['functions'] = { 'first': { 'events': [{ 'ignored': {} }] } };
        const _0x3d2de8 = _0x2c06a4['validate']();
        expect(_0x3d2de8['events'])['to']['be']['an']('Array')['with']['length'](0);
    });
});
describe('#validate() using runServerless util', () => {
    it('should use provided authorizer name when name field is supplied', async () => {
        if ('OdbtS' === 'OdbtS') {
            const _0x84fc41 = 'authName';
            const {cfTemplate, awsNaming} = await runServerless({
                'fixture': 'function',
                'configExt': {
                    'functions': {
                        'first': {
                            'handler': 'index.handler',
                            'events': [{
                                    'websocket': {
                                        'route': '$connect',
                                        'authorizer': {
                                            'name': _0x84fc41,
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
            });
            const _0x194519 = cfTemplate['Resources'];
            const _0x4e1d2a = awsNaming;
            expect(_0x194519[_0x4e1d2a['getWebsocketsAuthorizerLogicalId'](_0x84fc41)])['to']['exist'];
            expect(_0x194519[_0x4e1d2a['getWebsocketsAuthorizerLogicalId'](_0x84fc41)]['Properties']['Name'])['to']['deep']['equal'](_0x84fc41);
        } else {
            awsCompileWebsocketsEvents['serverless']['service']['functions'] = { 'first': { 'events': [{ 'ignored': {} }] } };
            const _0x46a3db = awsCompileWebsocketsEvents['validate']();
            expect(_0x46a3db['events'])['to']['be']['an']('Array')['with']['length'](0);
        }
    });
});