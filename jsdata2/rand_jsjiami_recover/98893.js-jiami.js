'use strict';
const expect = require('chai')['expect'];
const AwsCompileWebsocketsEvents = require('../../../../../../../../../../lib/plugins/aws/package/compile/events/websockets/index');
const Serverless = require('../../../../../../../../../../lib/Serverless');
const AwsProvider = require('../../../../../../../../../../lib/plugins/aws/provider');
describe('#compileIntegrations()', () => {
    let _0x381092;
    beforeEach(() => {
        const _0x4e375a = new Serverless();
        _0x4e375a['setProvider']('aws', new AwsProvider(_0x4e375a));
        _0x4e375a['service']['provider']['compiledCloudFormationTemplate'] = { 'Resources': {} };
        _0x381092 = new AwsCompileWebsocketsEvents(_0x4e375a);
        _0x381092['websocketsApiLogicalId'] = _0x381092['provider']['naming']['getWebsocketsApiLogicalId']();
    });
    it('should create an integration resource for every event', () => {
        _0x381092['validated'] = {
            'events': [
                {
                    'functionName': 'First',
                    'route': '$connect'
                },
                {
                    'functionName': 'Second',
                    'route': '$disconnect'
                }
            ]
        };
        _0x381092['compileIntegrations']();
        const _0x3afcf4 = _0x381092['serverless']['service']['provider']['compiledCloudFormationTemplate']['Resources'];
        expect(_0x3afcf4)['to']['deep']['equal']({
            'FirstWebsocketsIntegration': {
                'Type': 'AWS::ApiGatewayV2::Integration',
                'Properties': {
                    'ApiId': { 'Ref': 'WebsocketsApi' },
                    'IntegrationType': 'AWS_PROXY',
                    'IntegrationUri': {
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
                                        'FirstLambdaFunction',
                                        'Arn'
                                    ]
                                },
                                '/invocations'
                            ]
                        ]
                    }
                }
            },
            'SecondWebsocketsIntegration': {
                'Type': 'AWS::ApiGatewayV2::Integration',
                'Properties': {
                    'ApiId': { 'Ref': 'WebsocketsApi' },
                    'IntegrationType': 'AWS_PROXY',
                    'IntegrationUri': {
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
                                        'SecondLambdaFunction',
                                        'Arn'
                                    ]
                                },
                                '/invocations'
                            ]
                        ]
                    }
                }
            }
        });
    });
});