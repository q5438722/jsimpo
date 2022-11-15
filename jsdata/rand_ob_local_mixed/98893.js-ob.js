'use strict';
const _0x3d2c = [
    'AWS::ApiGatewayV2::Integration',
    'WebsocketsApi',
    'AWS::Partition',
    'AWS::Region',
    '/invocations',
    ':apigateway:',
    ':lambda:path/2015-03-31/functions/',
    'Arn',
    'should\x20create\x20an\x20integration\x20resource\x20for\x20every\x20event',
    'setProvider',
    'nMAzb',
    'service',
    'provider',
    'compiledCloudFormationTemplate',
    'websocketsApiLogicalId',
    'naming',
    'getWebsocketsApiLogicalId',
    'CzoLT',
    'validated',
    'lDopc',
    '$connect',
    'Second',
    '$disconnect',
    'serverless',
    'Resources',
    'tRfEK',
    'deep',
    'equal',
    'NnEvr',
    'arn:',
    'ChZnD',
    'MdyaS',
    'FirstLambdaFunction',
    'AWS_PROXY',
    'rJluy',
    'ibwZZ',
    'SecondLambdaFunction',
    'DdkGJ',
    '324658PoHmbk',
    '272354MGfTKv',
    '1OTbTuq',
    '171289uJscwn',
    '1xxttCG',
    '209965rlTHmm',
    '1pOoVmO',
    '408458YFKLta',
    '33696zcCtix',
    '1158827gWeBre',
    'expect',
    '../../../../../../../../../../lib/plugins/aws/package/compile/events/websockets/index',
    '../../../../../../../../../../lib/plugins/aws/provider',
    '#compileIntegrations()',
    'aws',
    'First'
];
const _0x348e89 = _0x59a0;
function _0x59a0(_0xab5eb7, _0x425520) {
    return _0x59a0 = function (_0x20d5b0, _0x3d2f6f) {
        _0x20d5b0 = _0x20d5b0 - (0x794 * -0x2 + -0x1 * 0x260f + -0x501 * -0xb);
        let _0x508bd0 = _0x3d2c[_0x20d5b0];
        return _0x508bd0;
    }, _0x59a0(_0xab5eb7, _0x425520);
}
(function (_0x2a2ad9, _0x1b3662) {
    const _0x2aabed = _0x59a0;
    while (!![]) {
        try {
            const _0x5a78e4 = -parseInt(_0x2aabed(0x1d4)) + parseInt(_0x2aabed(0x1d5)) * parseInt(_0x2aabed(0x1d6)) + -parseInt(_0x2aabed(0x1d7)) * parseInt(_0x2aabed(0x1d8)) + parseInt(_0x2aabed(0x1d9)) * -parseInt(_0x2aabed(0x1da)) + -parseInt(_0x2aabed(0x1db)) + -parseInt(_0x2aabed(0x1dc)) + parseInt(_0x2aabed(0x1dd));
            if (_0x5a78e4 === _0x1b3662)
                break;
            else
                _0x2a2ad9['push'](_0x2a2ad9['shift']());
        } catch (_0x31d3d7) {
            _0x2a2ad9['push'](_0x2a2ad9['shift']());
        }
    }
}(_0x3d2c, 0x1 * 0x5b00f + -0x12fa8 + 0xee * -0x32));
const expect = require('chai')[_0x348e89(0x1de)], AwsCompileWebsocketsEvents = require(_0x348e89(0x1df)), Serverless = require('../../../../../../../../../../lib/Serverless'), AwsProvider = require(_0x348e89(0x1e0));
describe(_0x348e89(0x1e1), () => {
    const _0x193750 = _0x348e89, _0x187ef2 = {
            'nMAzb': _0x193750(0x1e2),
            'lDopc': _0x193750(0x1e3),
            'tRfEK': function (_0x573107, _0xb30691) {
                return _0x573107(_0xb30691);
            },
            'zcJPu': _0x193750(0x1e4),
            'KXNXj': _0x193750(0x1e5),
            'NnEvr': 'AWS_PROXY',
            'ChZnD': _0x193750(0x1e6),
            'MdyaS': _0x193750(0x1e7),
            'tfgZi': _0x193750(0x1e8),
            'rJluy': _0x193750(0x1e9),
            'ibwZZ': _0x193750(0x1ea),
            'DdkGJ': _0x193750(0x1eb),
            'DevgC': function (_0x34d77f, _0x45436f) {
                return _0x34d77f(_0x45436f);
            },
            'CzoLT': _0x193750(0x1ec)
        };
    let _0x408331;
    _0x187ef2['DevgC'](beforeEach, () => {
        const _0x31e9eb = _0x193750, _0x5c4164 = new Serverless();
        _0x5c4164[_0x31e9eb(0x1ed)](_0x187ef2[_0x31e9eb(0x1ee)], new AwsProvider(_0x5c4164)), _0x5c4164[_0x31e9eb(0x1ef)][_0x31e9eb(0x1f0)][_0x31e9eb(0x1f1)] = { 'Resources': {} }, _0x408331 = new AwsCompileWebsocketsEvents(_0x5c4164), _0x408331[_0x31e9eb(0x1f2)] = _0x408331[_0x31e9eb(0x1f0)][_0x31e9eb(0x1f3)][_0x31e9eb(0x1f4)]();
    }), it(_0x187ef2[_0x193750(0x1f5)], () => {
        const _0x3d130f = _0x193750;
        _0x408331[_0x3d130f(0x1f6)] = {
            'events': [
                {
                    'functionName': _0x187ef2[_0x3d130f(0x1f7)],
                    'route': _0x3d130f(0x1f8)
                },
                {
                    'functionName': _0x3d130f(0x1f9),
                    'route': _0x3d130f(0x1fa)
                }
            ]
        }, _0x408331['compileIntegrations']();
        const _0x17abe3 = _0x408331[_0x3d130f(0x1fb)]['service']['provider'][_0x3d130f(0x1f1)][_0x3d130f(0x1fc)];
        _0x187ef2[_0x3d130f(0x1fd)](expect, _0x17abe3)['to'][_0x3d130f(0x1fe)][_0x3d130f(0x1ff)]({
            'FirstWebsocketsIntegration': {
                'Type': _0x187ef2['zcJPu'],
                'Properties': {
                    'ApiId': { 'Ref': _0x187ef2['KXNXj'] },
                    'IntegrationType': _0x187ef2[_0x3d130f(0x200)],
                    'IntegrationUri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x3d130f(0x201),
                                { 'Ref': _0x187ef2[_0x3d130f(0x202)] },
                                _0x3d130f(0x1e9),
                                { 'Ref': _0x187ef2[_0x3d130f(0x203)] },
                                _0x3d130f(0x1ea),
                                {
                                    'Fn::GetAtt': [
                                        _0x3d130f(0x204),
                                        _0x3d130f(0x1eb)
                                    ]
                                },
                                _0x187ef2['tfgZi']
                            ]
                        ]
                    }
                }
            },
            'SecondWebsocketsIntegration': {
                'Type': 'AWS::ApiGatewayV2::Integration',
                'Properties': {
                    'ApiId': { 'Ref': _0x187ef2['KXNXj'] },
                    'IntegrationType': _0x3d130f(0x205),
                    'IntegrationUri': {
                        'Fn::Join': [
                            '',
                            [
                                'arn:',
                                { 'Ref': _0x187ef2['ChZnD'] },
                                _0x187ef2[_0x3d130f(0x206)],
                                { 'Ref': _0x187ef2[_0x3d130f(0x203)] },
                                _0x187ef2[_0x3d130f(0x207)],
                                {
                                    'Fn::GetAtt': [
                                        _0x3d130f(0x208),
                                        _0x187ef2[_0x3d130f(0x209)]
                                    ]
                                },
                                _0x187ef2['tfgZi']
                            ]
                        ]
                    }
                }
            }
        });
    });
});
