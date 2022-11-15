function _0x53d3(_0x155420, _0xf760b7) {
    return _0x53d3 = function (_0x3ca2db, _0x53d383) {
        _0x3ca2db = _0x3ca2db - 352;
        let _0x54efc0 = _0x3ca2[_0x3ca2db];
        return _0x54efc0;
    }, _0x53d3(_0x155420, _0xf760b7);
}
const expect = require(_0x31f250(361))[_0x31f250(362)], AwsCompileWebsocketsEvents = require(_0x31f250(363)), Serverless = require('../../../../../../../../../../lib/Serverless'), AwsProvider = require(_0x31f250(364));
describe(_0x31f250(365), () => {
    let _0x186781;
    beforeEach(() => {
        const _0x54316a = _0x53d3, _0x412d3c = new Serverless();
        _0x412d3c['setProvider'](_0x54316a(366), new AwsProvider(_0x412d3c)), _0x412d3c['service'][_0x54316a(367)][_0x54316a(368)] = { 'Resources': {} }, _0x186781 = new AwsCompileWebsocketsEvents(_0x412d3c), _0x186781[_0x54316a(369)] = _0x186781[_0x54316a(367)][_0x54316a(370)]['getWebsocketsApiLogicalId']();
    }), it('should create an integration resource for every event', () => {
        const _0x40e600 = _0x53d3;
        _0x186781[_0x40e600(371)] = {
            'events': [
                {
                    'functionName': _0x40e600(372),
                    'route': _0x40e600(373)
                },
                {
                    'functionName': 'Second',
                    'route': _0x40e600(374)
                }
            ]
        }, _0x186781[_0x40e600(375)]();
        const _0x101c1c = _0x186781[_0x40e600(376)][_0x40e600(377)][_0x40e600(367)][_0x40e600(368)][_0x40e600(378)];
        expect(_0x101c1c)['to'][_0x40e600(379)]['equal']({
            'FirstWebsocketsIntegration': {
                'Type': 'AWS::ApiGatewayV2::Integration',
                'Properties': {
                    'ApiId': { 'Ref': 'WebsocketsApi' },
                    'IntegrationType': 'AWS_PROXY',
                    'IntegrationUri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x40e600(380),
                                { 'Ref': _0x40e600(381) },
                                ':apigateway:',
                                { 'Ref': _0x40e600(382) },
                                _0x40e600(383),
                                {
                                    'Fn::GetAtt': [
                                        _0x40e600(384),
                                        _0x40e600(385)
                                    ]
                                },
                                _0x40e600(386)
                            ]
                        ]
                    }
                }
            },
            'SecondWebsocketsIntegration': {
                'Type': _0x40e600(387),
                'Properties': {
                    'ApiId': { 'Ref': _0x40e600(388) },
                    'IntegrationType': 'AWS_PROXY',
                    'IntegrationUri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x40e600(380),
                                { 'Ref': _0x40e600(381) },
                                _0x40e600(389),
                                { 'Ref': _0x40e600(382) },
                                ':lambda:path/2015-03-31/functions/',
                                {
                                    'Fn::GetAtt': [
                                        _0x40e600(390),
                                        _0x40e600(385)
                                    ]
                                },
                                _0x40e600(386)
                            ]
                        ]
                    }
                }
            }
        });
    });
});