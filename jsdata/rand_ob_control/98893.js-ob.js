'use strict';
const expect = require('chai')['expect'], AwsCompileWebsocketsEvents = require('../../../../../../../../../../lib/plugins/aws/package/compile/events/websockets/index'), Serverless = require('../../../../../../../../../../lib/Serverless'), AwsProvider = require('../../../../../../../../../../lib/plugins/aws/provider');
describe('#compileIntegrations()', () => {
    const _0x5e0c94 = {
        'kTZoO': 'aws',
        'AFEGT': 'First',
        'qdQNN': '$connect',
        'YTmNB': 'Second',
        'FQvVr': '$disconnect',
        'SKBBS': function (_0x3a71d8, _0x3b8c3e) {
            return _0x3a71d8(_0x3b8c3e);
        },
        'ntWwI': 'AWS::ApiGatewayV2::Integration',
        'vNVSU': 'WebsocketsApi',
        'GkWSQ': 'AWS_PROXY',
        'mPnTx': 'arn:',
        'vtLwD': 'AWS::Partition',
        'RqFaw': ':apigateway:',
        'hpDGL': 'AWS::Region',
        'tpTZN': ':lambda:path/2015-03-31/functions/',
        'pmgQI': 'FirstLambdaFunction',
        'mUWBg': 'Arn',
        'QsYqm': '/invocations',
        'FKvDk': 'SecondLambdaFunction',
        'FpDhS': function (_0x3ea167, _0x5c8f5e) {
            return _0x3ea167(_0x5c8f5e);
        },
        'JkmfK': function (_0x2dcbe8, _0x9cd311, _0x1cad9b) {
            return _0x2dcbe8(_0x9cd311, _0x1cad9b);
        },
        'DYGuZ': 'should\x20create\x20an\x20integration\x20resource\x20for\x20every\x20event'
    };
    let _0x582d96;
    _0x5e0c94['FpDhS'](beforeEach, () => {
        const _0x247485 = new Serverless();
        _0x247485['setProvider'](_0x5e0c94['kTZoO'], new AwsProvider(_0x247485)), _0x247485['service']['provider']['compiledCloudFormationTemplate'] = { 'Resources': {} }, _0x582d96 = new AwsCompileWebsocketsEvents(_0x247485), _0x582d96['websocketsApiLogicalId'] = _0x582d96['provider']['naming']['getWebsocketsApiLogicalId']();
    }), _0x5e0c94['JkmfK'](it, _0x5e0c94['DYGuZ'], () => {
        _0x582d96['validated'] = {
            'events': [
                {
                    'functionName': _0x5e0c94['AFEGT'],
                    'route': _0x5e0c94['qdQNN']
                },
                {
                    'functionName': _0x5e0c94['YTmNB'],
                    'route': _0x5e0c94['FQvVr']
                }
            ]
        }, _0x582d96['compileIntegrations']();
        const _0x1d4b8a = _0x582d96['serverless']['service']['provider']['compiledCloudFormationTemplate']['Resources'];
        _0x5e0c94['SKBBS'](expect, _0x1d4b8a)['to']['deep']['equal']({
            'FirstWebsocketsIntegration': {
                'Type': _0x5e0c94['ntWwI'],
                'Properties': {
                    'ApiId': { 'Ref': _0x5e0c94['vNVSU'] },
                    'IntegrationType': _0x5e0c94['GkWSQ'],
                    'IntegrationUri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x5e0c94['mPnTx'],
                                { 'Ref': _0x5e0c94['vtLwD'] },
                                _0x5e0c94['RqFaw'],
                                { 'Ref': _0x5e0c94['hpDGL'] },
                                _0x5e0c94['tpTZN'],
                                {
                                    'Fn::GetAtt': [
                                        _0x5e0c94['pmgQI'],
                                        _0x5e0c94['mUWBg']
                                    ]
                                },
                                _0x5e0c94['QsYqm']
                            ]
                        ]
                    }
                }
            },
            'SecondWebsocketsIntegration': {
                'Type': _0x5e0c94['ntWwI'],
                'Properties': {
                    'ApiId': { 'Ref': _0x5e0c94['vNVSU'] },
                    'IntegrationType': _0x5e0c94['GkWSQ'],
                    'IntegrationUri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x5e0c94['mPnTx'],
                                { 'Ref': _0x5e0c94['vtLwD'] },
                                _0x5e0c94['RqFaw'],
                                { 'Ref': _0x5e0c94['hpDGL'] },
                                _0x5e0c94['tpTZN'],
                                {
                                    'Fn::GetAtt': [
                                        _0x5e0c94['FKvDk'],
                                        _0x5e0c94['mUWBg']
                                    ]
                                },
                                _0x5e0c94['QsYqm']
                            ]
                        ]
                    }
                }
            }
        });
    });
});
