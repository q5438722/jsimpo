const expect = require(_0x52080a(266))[_0x52080a(267)], AwsCompileWebsocketsEvents = require(_0x52080a(268)), Serverless = require(_0x52080a(269)), AwsProvider = require(_0x52080a(270));
function _0x5576(_0x47a2a0, _0x3c9107) {
    return _0x5576 = function (_0x24732a, _0x5129f9) {
        _0x24732a = _0x24732a - (-6612 + -1379 * 1 + 8247 * 1);
        let _0x11b364 = _0x7e5a[_0x24732a];
        return _0x11b364;
    }, _0x5576(_0x47a2a0, _0x3c9107);
}
describe('#compileIntegrations()', () => {
    const _0x2ab0b4 = _0x52080a, _0x20451c = {
            'WwGYp': _0x2ab0b4(271),
            'QFOOZ': _0x2ab0b4(272),
            'JKsuM': _0x2ab0b4(273),
            'zvwmw': _0x2ab0b4(274),
            'zjovx': function (_0x15849b, _0x3c0012) {
                return _0x15849b(_0x3c0012);
            },
            'axJGB': _0x2ab0b4(275),
            'dusxN': 'WebsocketsApi',
            'RghDM': 'arn:',
            'hDsEM': _0x2ab0b4(276),
            'rlLIQ': _0x2ab0b4(277),
            'Mdmwx': _0x2ab0b4(278),
            'xgzxi': _0x2ab0b4(279),
            'LKzeW': _0x2ab0b4(280),
            'gqPaK': _0x2ab0b4(281),
            'EtbAG': _0x2ab0b4(282),
            'rMFPp': '/invocations',
            'DDcFu': function (_0x8f9af, _0x206abe) {
                return _0x8f9af(_0x206abe);
            },
            'wCmJN': function (_0x193057, _0x4cec27, _0x2ea32c) {
                return _0x193057(_0x4cec27, _0x2ea32c);
            }
        };
    let _0x46e458;
    _0x20451c[_0x2ab0b4(283)](beforeEach, () => {
        const _0x3edd9f = _0x2ab0b4, _0x220402 = new Serverless();
        _0x220402['setProvider'](_0x20451c['WwGYp'], new AwsProvider(_0x220402)), _0x220402[_0x3edd9f(284)][_0x3edd9f(285)][_0x3edd9f(286)] = { 'Resources': {} }, _0x46e458 = new AwsCompileWebsocketsEvents(_0x220402), _0x46e458[_0x3edd9f(287)] = _0x46e458['provider'][_0x3edd9f(288)][_0x3edd9f(289)]();
    }), _0x20451c[_0x2ab0b4(290)](it, _0x2ab0b4(291), () => {
        const _0x45a63d = _0x2ab0b4;
        _0x46e458[_0x45a63d(292)] = {
            'events': [
                {
                    'functionName': _0x45a63d(293),
                    'route': _0x20451c['QFOOZ']
                },
                {
                    'functionName': _0x20451c[_0x45a63d(294)],
                    'route': _0x20451c[_0x45a63d(295)]
                }
            ]
        }, _0x46e458[_0x45a63d(296)]();
        const _0x2e413d = _0x46e458[_0x45a63d(297)][_0x45a63d(284)][_0x45a63d(285)][_0x45a63d(286)][_0x45a63d(298)];
        _0x20451c['zjovx'](expect, _0x2e413d)['to'][_0x45a63d(299)][_0x45a63d(300)]({
            'FirstWebsocketsIntegration': {
                'Type': _0x20451c[_0x45a63d(301)],
                'Properties': {
                    'ApiId': { 'Ref': _0x20451c['dusxN'] },
                    'IntegrationType': _0x45a63d(281),
                    'IntegrationUri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x20451c[_0x45a63d(302)],
                                { 'Ref': _0x20451c[_0x45a63d(303)] },
                                _0x20451c[_0x45a63d(304)],
                                { 'Ref': _0x20451c[_0x45a63d(305)] },
                                _0x20451c[_0x45a63d(306)],
                                {
                                    'Fn::GetAtt': [
                                        'FirstLambdaFunction',
                                        _0x20451c[_0x45a63d(307)]
                                    ]
                                },
                                _0x45a63d(308)
                            ]
                        ]
                    }
                }
            },
            'SecondWebsocketsIntegration': {
                'Type': _0x20451c[_0x45a63d(301)],
                'Properties': {
                    'ApiId': { 'Ref': _0x20451c['dusxN'] },
                    'IntegrationType': _0x20451c[_0x45a63d(309)],
                    'IntegrationUri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x20451c[_0x45a63d(302)],
                                { 'Ref': _0x20451c['hDsEM'] },
                                _0x45a63d(277),
                                { 'Ref': _0x20451c[_0x45a63d(305)] },
                                _0x20451c[_0x45a63d(306)],
                                {
                                    'Fn::GetAtt': [
                                        _0x20451c[_0x45a63d(310)],
                                        _0x45a63d(280)
                                    ]
                                },
                                _0x20451c['rMFPp']
                            ]
                        ]
                    }
                }
            }
        });
    });
});