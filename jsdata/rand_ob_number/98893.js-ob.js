'use strict';
const expect = require('chai')['expect'], AwsCompileWebsocketsEvents = require('../../../../../../../../../../lib/plugins/aws/package/compile/events/websockets/index'), Serverless = require('../../../../../../../../../../lib/Serverless'), AwsProvider = require('../../../../../../../../../../lib/plugins/aws/provider');
describe('#compileIntegrations()', () => {
    let _0x19bf61;
    beforeEach(() => {
        const _0x6bd76a = new Serverless();
        _0x6bd76a['setProvider']('aws', new AwsProvider(_0x6bd76a)), _0x6bd76a['service']['provider']['compiledCloudFormationTemplate'] = { 'Resources': {} }, _0x19bf61 = new AwsCompileWebsocketsEvents(_0x6bd76a), _0x19bf61['websocketsApiLogicalId'] = _0x19bf61['provider']['naming']['getWebsocketsApiLogicalId']();
    }), it('should\x20create\x20an\x20integration\x20resource\x20for\x20every\x20event', () => {
        _0x19bf61['validated'] = {
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
        }, _0x19bf61['compileIntegrations']();
        const _0x467999 = _0x19bf61['serverless']['service']['provider']['compiledCloudFormationTemplate']['Resources'];
        expect(_0x467999)['to']['deep']['equal']({
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
