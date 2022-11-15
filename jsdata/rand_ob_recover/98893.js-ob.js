const expect = require('chai')[_0x348e89(478)], AwsCompileWebsocketsEvents = require(_0x348e89(479)), Serverless = require('../../../../../../../../../../lib/Serverless'), AwsProvider = require(_0x348e89(480));
describe(_0x348e89(481), () => {
    const _0x193750 = _0x348e89, _0x187ef2 = {
            'nMAzb': _0x193750(482),
            'lDopc': _0x193750(483),
            'tRfEK': function (_0x573107, _0xb30691) {
                return _0x573107(_0xb30691);
            },
            'zcJPu': _0x193750(484),
            'KXNXj': _0x193750(485),
            'NnEvr': 'AWS_PROXY',
            'ChZnD': _0x193750(486),
            'MdyaS': _0x193750(487),
            'tfgZi': _0x193750(488),
            'rJluy': _0x193750(489),
            'ibwZZ': _0x193750(490),
            'DdkGJ': _0x193750(491),
            'DevgC': function (_0x34d77f, _0x45436f) {
                return _0x34d77f(_0x45436f);
            },
            'CzoLT': _0x193750(492)
        };
    let _0x408331;
    _0x187ef2['DevgC'](beforeEach, () => {
        const _0x31e9eb = _0x193750, _0x5c4164 = new Serverless();
        _0x5c4164[_0x31e9eb(493)](_0x187ef2[_0x31e9eb(494)], new AwsProvider(_0x5c4164)), _0x5c4164[_0x31e9eb(495)][_0x31e9eb(496)][_0x31e9eb(497)] = { 'Resources': {} }, _0x408331 = new AwsCompileWebsocketsEvents(_0x5c4164), _0x408331[_0x31e9eb(498)] = _0x408331[_0x31e9eb(496)][_0x31e9eb(499)][_0x31e9eb(500)]();
    }), it(_0x187ef2[_0x193750(501)], () => {
        const _0x3d130f = _0x193750;
        _0x408331[_0x3d130f(502)] = {
            'events': [
                {
                    'functionName': _0x187ef2[_0x3d130f(503)],
                    'route': _0x3d130f(504)
                },
                {
                    'functionName': _0x3d130f(505),
                    'route': _0x3d130f(506)
                }
            ]
        }, _0x408331['compileIntegrations']();
        const _0x17abe3 = _0x408331[_0x3d130f(507)]['service']['provider'][_0x3d130f(497)][_0x3d130f(508)];
        _0x187ef2[_0x3d130f(509)](expect, _0x17abe3)['to'][_0x3d130f(510)][_0x3d130f(511)]({
            'FirstWebsocketsIntegration': {
                'Type': _0x187ef2['zcJPu'],
                'Properties': {
                    'ApiId': { 'Ref': _0x187ef2['KXNXj'] },
                    'IntegrationType': _0x187ef2[_0x3d130f(512)],
                    'IntegrationUri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x3d130f(513),
                                { 'Ref': _0x187ef2[_0x3d130f(514)] },
                                _0x3d130f(489),
                                { 'Ref': _0x187ef2[_0x3d130f(515)] },
                                _0x3d130f(490),
                                {
                                    'Fn::GetAtt': [
                                        _0x3d130f(516),
                                        _0x3d130f(491)
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
                    'IntegrationType': _0x3d130f(517),
                    'IntegrationUri': {
                        'Fn::Join': [
                            '',
                            [
                                'arn:',
                                { 'Ref': _0x187ef2['ChZnD'] },
                                _0x187ef2[_0x3d130f(518)],
                                { 'Ref': _0x187ef2[_0x3d130f(515)] },
                                _0x187ef2[_0x3d130f(519)],
                                {
                                    'Fn::GetAtt': [
                                        _0x3d130f(520),
                                        _0x187ef2[_0x3d130f(521)]
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