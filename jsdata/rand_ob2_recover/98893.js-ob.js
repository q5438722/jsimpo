const expect = require(_0x42128c(197))[_0x42128c(198)], AwsCompileWebsocketsEvents = require(_0x42128c(199)), Serverless = require(_0x42128c(200)), AwsProvider = require(_0x42128c(201));
describe('#compileIntegrations()', () => {
    const _0x431575 = _0x42128c;
    let _0x306c92;
    beforeEach(() => {
        const _0x279ff3 = _0x6abf, _0x3e0456 = new Serverless();
        _0x3e0456[_0x279ff3(202)]('aws', new AwsProvider(_0x3e0456)), _0x3e0456[_0x279ff3(203)]['provider'][_0x279ff3(204)] = { 'Resources': {} }, _0x306c92 = new AwsCompileWebsocketsEvents(_0x3e0456), _0x306c92[_0x279ff3(205)] = _0x306c92[_0x279ff3(206)][_0x279ff3(207)][_0x279ff3(208)]();
    }), it(_0x431575(209), () => {
        const _0x47a48a = _0x431575;
        _0x306c92['validated'] = {
            'events': [
                {
                    'functionName': _0x47a48a(210),
                    'route': _0x47a48a(211)
                },
                {
                    'functionName': _0x47a48a(212),
                    'route': _0x47a48a(213)
                }
            ]
        }, _0x306c92[_0x47a48a(214)]();
        const _0x54b34d = _0x306c92[_0x47a48a(215)]['service']['provider'][_0x47a48a(204)][_0x47a48a(216)];
        expect(_0x54b34d)['to']['deep'][_0x47a48a(217)]({
            'FirstWebsocketsIntegration': {
                'Type': _0x47a48a(218),
                'Properties': {
                    'ApiId': { 'Ref': 'WebsocketsApi' },
                    'IntegrationType': _0x47a48a(219),
                    'IntegrationUri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x47a48a(220),
                                { 'Ref': 'AWS::Partition' },
                                _0x47a48a(221),
                                { 'Ref': _0x47a48a(222) },
                                _0x47a48a(223),
                                {
                                    'Fn::GetAtt': [
                                        _0x47a48a(224),
                                        _0x47a48a(225)
                                    ]
                                },
                                _0x47a48a(226)
                            ]
                        ]
                    }
                }
            },
            'SecondWebsocketsIntegration': {
                'Type': _0x47a48a(218),
                'Properties': {
                    'ApiId': { 'Ref': _0x47a48a(227) },
                    'IntegrationType': _0x47a48a(219),
                    'IntegrationUri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x47a48a(220),
                                { 'Ref': 'AWS::Partition' },
                                _0x47a48a(221),
                                { 'Ref': _0x47a48a(222) },
                                ':lambda:path/2015-03-31/functions/',
                                {
                                    'Fn::GetAtt': [
                                        _0x47a48a(228),
                                        _0x47a48a(225)
                                    ]
                                },
                                _0x47a48a(226)
                            ]
                        ]
                    }
                }
            }
        });
    });
});