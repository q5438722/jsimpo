'use strict';
const _0x3ca2 = [
    'service',
    'Resources',
    'deep',
    'arn:',
    'AWS::Partition',
    'AWS::Region',
    ':lambda:path/2015-03-31/functions/',
    'FirstLambdaFunction',
    'Arn',
    '/invocations',
    'AWS::ApiGatewayV2::Integration',
    'WebsocketsApi',
    ':apigateway:',
    'SecondLambdaFunction',
    '673054CQvKjw',
    '7320yjeirV',
    '315442vwVEwd',
    '2HRGGqG',
    '486718powYTp',
    '137mkfGPE',
    '5496wIroEQ',
    '554508CXgCim',
    '3495044fgqZdg',
    'chai',
    'expect',
    '../../../../../../../../../../lib/plugins/aws/package/compile/events/websockets/index',
    '../../../../../../../../../../lib/plugins/aws/provider',
    '#compileIntegrations()',
    'aws',
    'provider',
    'compiledCloudFormationTemplate',
    'websocketsApiLogicalId',
    'naming',
    'validated',
    'First',
    '$connect',
    '$disconnect',
    'compileIntegrations',
    'serverless'
];
const _0x31f250 = _0x53d3;
(function (_0x7fd32d, _0x16ad11) {
    const _0x197627 = _0x53d3;
    while (!![]) {
        try {
            const _0x1da931 = -parseInt(_0x197627(0x160)) + -parseInt(_0x197627(0x161)) + parseInt(_0x197627(0x162)) * -parseInt(_0x197627(0x163)) + -parseInt(_0x197627(0x164)) + -parseInt(_0x197627(0x165)) * parseInt(_0x197627(0x166)) + -parseInt(_0x197627(0x167)) + parseInt(_0x197627(0x168));
            if (_0x1da931 === _0x16ad11)
                break;
            else
                _0x7fd32d['push'](_0x7fd32d['shift']());
        } catch (_0x54b5d5) {
            _0x7fd32d['push'](_0x7fd32d['shift']());
        }
    }
}(_0x3ca2, 0x5f1e8));
function _0x53d3(_0x155420, _0xf760b7) {
    return _0x53d3 = function (_0x3ca2db, _0x53d383) {
        _0x3ca2db = _0x3ca2db - 0x160;
        let _0x54efc0 = _0x3ca2[_0x3ca2db];
        return _0x54efc0;
    }, _0x53d3(_0x155420, _0xf760b7);
}
const expect = require(_0x31f250(0x169))[_0x31f250(0x16a)], AwsCompileWebsocketsEvents = require(_0x31f250(0x16b)), Serverless = require('../../../../../../../../../../lib/Serverless'), AwsProvider = require(_0x31f250(0x16c));
describe(_0x31f250(0x16d), () => {
    let _0x186781;
    beforeEach(() => {
        const _0x54316a = _0x53d3, _0x412d3c = new Serverless();
        _0x412d3c['setProvider'](_0x54316a(0x16e), new AwsProvider(_0x412d3c)), _0x412d3c['service'][_0x54316a(0x16f)][_0x54316a(0x170)] = { 'Resources': {} }, _0x186781 = new AwsCompileWebsocketsEvents(_0x412d3c), _0x186781[_0x54316a(0x171)] = _0x186781[_0x54316a(0x16f)][_0x54316a(0x172)]['getWebsocketsApiLogicalId']();
    }), it('should\x20create\x20an\x20integration\x20resource\x20for\x20every\x20event', () => {
        const _0x40e600 = _0x53d3;
        _0x186781[_0x40e600(0x173)] = {
            'events': [
                {
                    'functionName': _0x40e600(0x174),
                    'route': _0x40e600(0x175)
                },
                {
                    'functionName': 'Second',
                    'route': _0x40e600(0x176)
                }
            ]
        }, _0x186781[_0x40e600(0x177)]();
        const _0x101c1c = _0x186781[_0x40e600(0x178)][_0x40e600(0x179)][_0x40e600(0x16f)][_0x40e600(0x170)][_0x40e600(0x17a)];
        expect(_0x101c1c)['to'][_0x40e600(0x17b)]['equal']({
            'FirstWebsocketsIntegration': {
                'Type': 'AWS::ApiGatewayV2::Integration',
                'Properties': {
                    'ApiId': { 'Ref': 'WebsocketsApi' },
                    'IntegrationType': 'AWS_PROXY',
                    'IntegrationUri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x40e600(0x17c),
                                { 'Ref': _0x40e600(0x17d) },
                                ':apigateway:',
                                { 'Ref': _0x40e600(0x17e) },
                                _0x40e600(0x17f),
                                {
                                    'Fn::GetAtt': [
                                        _0x40e600(0x180),
                                        _0x40e600(0x181)
                                    ]
                                },
                                _0x40e600(0x182)
                            ]
                        ]
                    }
                }
            },
            'SecondWebsocketsIntegration': {
                'Type': _0x40e600(0x183),
                'Properties': {
                    'ApiId': { 'Ref': _0x40e600(0x184) },
                    'IntegrationType': 'AWS_PROXY',
                    'IntegrationUri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x40e600(0x17c),
                                { 'Ref': _0x40e600(0x17d) },
                                _0x40e600(0x185),
                                { 'Ref': _0x40e600(0x17e) },
                                ':lambda:path/2015-03-31/functions/',
                                {
                                    'Fn::GetAtt': [
                                        _0x40e600(0x186),
                                        _0x40e600(0x181)
                                    ]
                                },
                                _0x40e600(0x182)
                            ]
                        ]
                    }
                }
            }
        });
    });
});
