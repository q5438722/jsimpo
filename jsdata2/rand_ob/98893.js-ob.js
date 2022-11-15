'use strict';
const _0x7e5a = [
    'Arn',
    'AWS_PROXY',
    'SecondLambdaFunction',
    'DDcFu',
    'service',
    'provider',
    'compiledCloudFormationTemplate',
    'websocketsApiLogicalId',
    'naming',
    'getWebsocketsApiLogicalId',
    'wCmJN',
    'should\x20create\x20an\x20integration\x20resource\x20for\x20every\x20event',
    'validated',
    'First',
    'JKsuM',
    'zvwmw',
    'compileIntegrations',
    'serverless',
    'Resources',
    'deep',
    'equal',
    'axJGB',
    'RghDM',
    'hDsEM',
    'rlLIQ',
    'Mdmwx',
    'xgzxi',
    'LKzeW',
    '/invocations',
    'gqPaK',
    'EtbAG',
    '904138sEIqtG',
    '1ElPoVq',
    '1437937uNhUDA',
    '5667rhVRcA',
    '19vPJDDV',
    '1547501ErZaUu',
    '197063Ihhjav',
    '3dszNdr',
    '1781537fBFXWk',
    '1122874bKzLrd',
    'chai',
    'expect',
    '../../../../../../../../../../lib/plugins/aws/package/compile/events/websockets/index',
    '../../../../../../../../../../lib/Serverless',
    '../../../../../../../../../../lib/plugins/aws/provider',
    'aws',
    '$connect',
    'Second',
    '$disconnect',
    'AWS::ApiGatewayV2::Integration',
    'AWS::Partition',
    ':apigateway:',
    'AWS::Region',
    ':lambda:path/2015-03-31/functions/'
];
const _0x52080a = _0x5576;
(function (_0x54c0d1, _0x258141) {
    const _0x32f54c = _0x5576;
    while (!![]) {
        try {
            const _0x31e681 = -parseInt(_0x32f54c(0x100)) * -parseInt(_0x32f54c(0x101)) + -parseInt(_0x32f54c(0x102)) + -parseInt(_0x32f54c(0x103)) * parseInt(_0x32f54c(0x104)) + parseInt(_0x32f54c(0x105)) + -parseInt(_0x32f54c(0x106)) * parseInt(_0x32f54c(0x107)) + parseInt(_0x32f54c(0x108)) + -parseInt(_0x32f54c(0x109));
            if (_0x31e681 === _0x258141)
                break;
            else
                _0x54c0d1['push'](_0x54c0d1['shift']());
        } catch (_0x350109) {
            _0x54c0d1['push'](_0x54c0d1['shift']());
        }
    }
}(_0x7e5a, -0x74782 * -0x1 + 0x31403 * -0x5 + -0x4394 * -0x57));
const expect = require(_0x52080a(0x10a))[_0x52080a(0x10b)], AwsCompileWebsocketsEvents = require(_0x52080a(0x10c)), Serverless = require(_0x52080a(0x10d)), AwsProvider = require(_0x52080a(0x10e));
function _0x5576(_0x47a2a0, _0x3c9107) {
    return _0x5576 = function (_0x24732a, _0x5129f9) {
        _0x24732a = _0x24732a - (-0x19d4 + -0x563 * 0x1 + 0x2037 * 0x1);
        let _0x11b364 = _0x7e5a[_0x24732a];
        return _0x11b364;
    }, _0x5576(_0x47a2a0, _0x3c9107);
}
describe('#compileIntegrations()', () => {
    const _0x2ab0b4 = _0x52080a, _0x20451c = {
            'WwGYp': _0x2ab0b4(0x10f),
            'QFOOZ': _0x2ab0b4(0x110),
            'JKsuM': _0x2ab0b4(0x111),
            'zvwmw': _0x2ab0b4(0x112),
            'zjovx': function (_0x15849b, _0x3c0012) {
                return _0x15849b(_0x3c0012);
            },
            'axJGB': _0x2ab0b4(0x113),
            'dusxN': 'WebsocketsApi',
            'RghDM': 'arn:',
            'hDsEM': _0x2ab0b4(0x114),
            'rlLIQ': _0x2ab0b4(0x115),
            'Mdmwx': _0x2ab0b4(0x116),
            'xgzxi': _0x2ab0b4(0x117),
            'LKzeW': _0x2ab0b4(0x118),
            'gqPaK': _0x2ab0b4(0x119),
            'EtbAG': _0x2ab0b4(0x11a),
            'rMFPp': '/invocations',
            'DDcFu': function (_0x8f9af, _0x206abe) {
                return _0x8f9af(_0x206abe);
            },
            'wCmJN': function (_0x193057, _0x4cec27, _0x2ea32c) {
                return _0x193057(_0x4cec27, _0x2ea32c);
            }
        };
    let _0x46e458;
    _0x20451c[_0x2ab0b4(0x11b)](beforeEach, () => {
        const _0x3edd9f = _0x2ab0b4, _0x220402 = new Serverless();
        _0x220402['setProvider'](_0x20451c['WwGYp'], new AwsProvider(_0x220402)), _0x220402[_0x3edd9f(0x11c)][_0x3edd9f(0x11d)][_0x3edd9f(0x11e)] = { 'Resources': {} }, _0x46e458 = new AwsCompileWebsocketsEvents(_0x220402), _0x46e458[_0x3edd9f(0x11f)] = _0x46e458['provider'][_0x3edd9f(0x120)][_0x3edd9f(0x121)]();
    }), _0x20451c[_0x2ab0b4(0x122)](it, _0x2ab0b4(0x123), () => {
        const _0x45a63d = _0x2ab0b4;
        _0x46e458[_0x45a63d(0x124)] = {
            'events': [
                {
                    'functionName': _0x45a63d(0x125),
                    'route': _0x20451c['QFOOZ']
                },
                {
                    'functionName': _0x20451c[_0x45a63d(0x126)],
                    'route': _0x20451c[_0x45a63d(0x127)]
                }
            ]
        }, _0x46e458[_0x45a63d(0x128)]();
        const _0x2e413d = _0x46e458[_0x45a63d(0x129)][_0x45a63d(0x11c)][_0x45a63d(0x11d)][_0x45a63d(0x11e)][_0x45a63d(0x12a)];
        _0x20451c['zjovx'](expect, _0x2e413d)['to'][_0x45a63d(0x12b)][_0x45a63d(0x12c)]({
            'FirstWebsocketsIntegration': {
                'Type': _0x20451c[_0x45a63d(0x12d)],
                'Properties': {
                    'ApiId': { 'Ref': _0x20451c['dusxN'] },
                    'IntegrationType': _0x45a63d(0x119),
                    'IntegrationUri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x20451c[_0x45a63d(0x12e)],
                                { 'Ref': _0x20451c[_0x45a63d(0x12f)] },
                                _0x20451c[_0x45a63d(0x130)],
                                { 'Ref': _0x20451c[_0x45a63d(0x131)] },
                                _0x20451c[_0x45a63d(0x132)],
                                {
                                    'Fn::GetAtt': [
                                        'FirstLambdaFunction',
                                        _0x20451c[_0x45a63d(0x133)]
                                    ]
                                },
                                _0x45a63d(0x134)
                            ]
                        ]
                    }
                }
            },
            'SecondWebsocketsIntegration': {
                'Type': _0x20451c[_0x45a63d(0x12d)],
                'Properties': {
                    'ApiId': { 'Ref': _0x20451c['dusxN'] },
                    'IntegrationType': _0x20451c[_0x45a63d(0x135)],
                    'IntegrationUri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x20451c[_0x45a63d(0x12e)],
                                { 'Ref': _0x20451c['hDsEM'] },
                                _0x45a63d(0x115),
                                { 'Ref': _0x20451c[_0x45a63d(0x131)] },
                                _0x20451c[_0x45a63d(0x132)],
                                {
                                    'Fn::GetAtt': [
                                        _0x20451c[_0x45a63d(0x136)],
                                        _0x45a63d(0x118)
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
