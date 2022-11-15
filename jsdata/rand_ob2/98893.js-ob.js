'use strict';
const _0x5061 = [
    'AWS::ApiGatewayV2::Integration',
    'AWS_PROXY',
    'arn:',
    ':apigateway:',
    'AWS::Region',
    ':lambda:path/2015-03-31/functions/',
    'FirstLambdaFunction',
    'Arn',
    '/invocations',
    'WebsocketsApi',
    'SecondLambdaFunction',
    '130371XCaruv',
    '6UKzRyt',
    '370637TjruAn',
    '1KKNNAm',
    '1092023ecXnfE',
    '305180aVfxjw',
    '423949PUFQWN',
    '1yeMkNS',
    '119581LZrnQC',
    '1ninbPY',
    '1608843DAyDMg',
    'chai',
    'expect',
    '../../../../../../../../../../lib/plugins/aws/package/compile/events/websockets/index',
    '../../../../../../../../../../lib/Serverless',
    '../../../../../../../../../../lib/plugins/aws/provider',
    'setProvider',
    'service',
    'compiledCloudFormationTemplate',
    'websocketsApiLogicalId',
    'provider',
    'naming',
    'getWebsocketsApiLogicalId',
    'should\x20create\x20an\x20integration\x20resource\x20for\x20every\x20event',
    'First',
    '$connect',
    'Second',
    '$disconnect',
    'compileIntegrations',
    'serverless',
    'Resources',
    'equal'
];
function _0x6abf(_0x2f062f, _0x436aa9) {
    return _0x6abf = function (_0x506188, _0x6abfb4) {
        _0x506188 = _0x506188 - 0xba;
        let _0x403996 = _0x5061[_0x506188];
        return _0x403996;
    }, _0x6abf(_0x2f062f, _0x436aa9);
}
const _0x42128c = _0x6abf;
(function (_0x518c47, _0x26d62) {
    const _0x511041 = _0x6abf;
    while (!![]) {
        try {
            const _0x350d78 = parseInt(_0x511041(0xba)) * -parseInt(_0x511041(0xbb)) + -parseInt(_0x511041(0xbc)) + parseInt(_0x511041(0xbd)) * parseInt(_0x511041(0xbe)) + -parseInt(_0x511041(0xbf)) + parseInt(_0x511041(0xc0)) * -parseInt(_0x511041(0xc1)) + -parseInt(_0x511041(0xc2)) + -parseInt(_0x511041(0xc3)) * -parseInt(_0x511041(0xc4));
            if (_0x350d78 === _0x26d62)
                break;
            else
                _0x518c47['push'](_0x518c47['shift']());
        } catch (_0x3801e0) {
            _0x518c47['push'](_0x518c47['shift']());
        }
    }
}(_0x5061, 0xaab9d));
const expect = require(_0x42128c(0xc5))[_0x42128c(0xc6)], AwsCompileWebsocketsEvents = require(_0x42128c(0xc7)), Serverless = require(_0x42128c(0xc8)), AwsProvider = require(_0x42128c(0xc9));
describe('#compileIntegrations()', () => {
    const _0x431575 = _0x42128c;
    let _0x306c92;
    beforeEach(() => {
        const _0x279ff3 = _0x6abf, _0x3e0456 = new Serverless();
        _0x3e0456[_0x279ff3(0xca)]('aws', new AwsProvider(_0x3e0456)), _0x3e0456[_0x279ff3(0xcb)]['provider'][_0x279ff3(0xcc)] = { 'Resources': {} }, _0x306c92 = new AwsCompileWebsocketsEvents(_0x3e0456), _0x306c92[_0x279ff3(0xcd)] = _0x306c92[_0x279ff3(0xce)][_0x279ff3(0xcf)][_0x279ff3(0xd0)]();
    }), it(_0x431575(0xd1), () => {
        const _0x47a48a = _0x431575;
        _0x306c92['validated'] = {
            'events': [
                {
                    'functionName': _0x47a48a(0xd2),
                    'route': _0x47a48a(0xd3)
                },
                {
                    'functionName': _0x47a48a(0xd4),
                    'route': _0x47a48a(0xd5)
                }
            ]
        }, _0x306c92[_0x47a48a(0xd6)]();
        const _0x54b34d = _0x306c92[_0x47a48a(0xd7)]['service']['provider'][_0x47a48a(0xcc)][_0x47a48a(0xd8)];
        expect(_0x54b34d)['to']['deep'][_0x47a48a(0xd9)]({
            'FirstWebsocketsIntegration': {
                'Type': _0x47a48a(0xda),
                'Properties': {
                    'ApiId': { 'Ref': 'WebsocketsApi' },
                    'IntegrationType': _0x47a48a(0xdb),
                    'IntegrationUri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x47a48a(0xdc),
                                { 'Ref': 'AWS::Partition' },
                                _0x47a48a(0xdd),
                                { 'Ref': _0x47a48a(0xde) },
                                _0x47a48a(0xdf),
                                {
                                    'Fn::GetAtt': [
                                        _0x47a48a(0xe0),
                                        _0x47a48a(0xe1)
                                    ]
                                },
                                _0x47a48a(0xe2)
                            ]
                        ]
                    }
                }
            },
            'SecondWebsocketsIntegration': {
                'Type': _0x47a48a(0xda),
                'Properties': {
                    'ApiId': { 'Ref': _0x47a48a(0xe3) },
                    'IntegrationType': _0x47a48a(0xdb),
                    'IntegrationUri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x47a48a(0xdc),
                                { 'Ref': 'AWS::Partition' },
                                _0x47a48a(0xdd),
                                { 'Ref': _0x47a48a(0xde) },
                                ':lambda:path/2015-03-31/functions/',
                                {
                                    'Fn::GetAtt': [
                                        _0x47a48a(0xe4),
                                        _0x47a48a(0xe1)
                                    ]
                                },
                                _0x47a48a(0xe2)
                            ]
                        ]
                    }
                }
            }
        });
    });
});
