'use strict';
const _0x7265 = [
    'function',
    'index.handler',
    'arn',
    'arnName',
    'package',
    'getWebsocketsAuthorizerLogicalId',
    'Properties',
    'Name',
    '330706RsRpuv',
    '551157SbVqMV',
    '1046805ZAtQCr',
    '49iyQnIU',
    '5035RetkGS',
    '1PPjIzy',
    '1043305wLELdS',
    '560321EBWXmR',
    '1WQSVxE',
    '2564460XjCixY',
    'chai',
    '../../../../../../../../../../lib/plugins/aws/package/compile/events/websockets/index',
    '../../../../../../../../../../lib/Serverless',
    '../../../../../../../../../../lib/plugins/aws/provider',
    '#validate()',
    'dev',
    'us-east-1',
    'aws',
    'should\x20support\x20the\x20simplified\x20string\x20syntax',
    'serverless',
    'service',
    'functions',
    '$connect',
    'validate',
    'deep',
    'equal',
    'should\x20support\x20the\x20extended\x20object\x20syntax',
    'events',
    'should\x20add\x20authorizer\x20config\x20when\x20authorizer\x20is\x20specified\x20as\x20a\x20string',
    'auth',
    'AWS::Partition',
    ':apigateway:',
    ':lambda:path/2015-03-31/functions/',
    'AuthLambdaFunction',
    'Arn',
    'should\x20add\x20authorizer\x20config\x20when\x20authorizer\x20is\x20specified\x20as\x20a\x20string\x20with\x20arn',
    'arn:aws:auth',
    'first',
    'arn:',
    '/invocations',
    'route.request.header.Auth',
    'route.request.querystring.Auth',
    'AWS::Region',
    'should\x20add\x20authorizer\x20config\x20when\x20authorizer\x20is\x20specified\x20as\x20an\x20object\x20with\x20arn',
    'should\x20add\x20routeResponse\x20when\x20routeResponseSelectionExpression\x20is\x20configured',
    '$default',
    'should\x20ignore\x20non-websocket\x20events',
    'Array',
    'length',
    '#validate()\x20using\x20runServerless\x20util',
    'should\x20use\x20provided\x20authorizer\x20name\x20when\x20name\x20field\x20is\x20supplied'
];
const _0x1519c1 = _0x35f0;
(function (_0x5a157c, _0x35cd63) {
    const _0xd4bf59 = _0x35f0;
    while (!![]) {
        try {
            const _0x1e1801 = parseInt(_0xd4bf59(0xf8)) + -parseInt(_0xd4bf59(0xf9)) + -parseInt(_0xd4bf59(0xfa)) + -parseInt(_0xd4bf59(0xfb)) * parseInt(_0xd4bf59(0xfc)) + -parseInt(_0xd4bf59(0xfd)) * parseInt(_0xd4bf59(0xfe)) + -parseInt(_0xd4bf59(0xff)) * -parseInt(_0xd4bf59(0x100)) + parseInt(_0xd4bf59(0x101));
            if (_0x1e1801 === _0x35cd63)
                break;
            else
                _0x5a157c['push'](_0x5a157c['shift']());
        } catch (_0x2ff0bd) {
            _0x5a157c['push'](_0x5a157c['shift']());
        }
    }
}(_0x7265, 0x8a8d1));
const expect = require(_0x1519c1(0x102))['expect'], AwsCompileWebsocketsEvents = require(_0x1519c1(0x103)), Serverless = require(_0x1519c1(0x104)), AwsProvider = require(_0x1519c1(0x105)), runServerless = require('../../../../../../../../../utils/run-serverless');
function _0x35f0(_0xd036b0, _0x481c26) {
    return _0x35f0 = function (_0x726538, _0x35f04a) {
        _0x726538 = _0x726538 - 0xf8;
        let _0x4305ad = _0x7265[_0x726538];
        return _0x4305ad;
    }, _0x35f0(_0xd036b0, _0x481c26);
}
describe(_0x1519c1(0x106), () => {
    const _0x182765 = _0x1519c1;
    let _0x4d3a83, _0x807578;
    beforeEach(() => {
        const _0x40dc29 = _0x35f0, _0x65ee27 = {
                'stage': _0x40dc29(0x107),
                'region': _0x40dc29(0x108)
            };
        _0x4d3a83 = new Serverless(), _0x4d3a83['setProvider'](_0x40dc29(0x109), new AwsProvider(_0x4d3a83, _0x65ee27)), _0x807578 = new AwsCompileWebsocketsEvents(_0x4d3a83, _0x65ee27);
    }), it(_0x182765(0x10a), () => {
        const _0x3e339e = _0x182765;
        _0x807578[_0x3e339e(0x10b)][_0x3e339e(0x10c)][_0x3e339e(0x10d)] = { 'first': { 'events': [{ 'websocket': _0x3e339e(0x10e) }] } };
        const _0x520315 = _0x807578[_0x3e339e(0x10f)]();
        expect(_0x520315['events'])['to'][_0x3e339e(0x110)][_0x3e339e(0x111)]([{
                'functionName': 'first',
                'route': '$connect'
            }]);
    }), it(_0x182765(0x112), () => {
        const _0x4b7eee = _0x182765;
        _0x807578[_0x4b7eee(0x10b)][_0x4b7eee(0x10c)]['functions'] = { 'first': { 'events': [{ 'websocket': { 'route': '$connect' } }] } };
        const _0x38b0b0 = _0x807578[_0x4b7eee(0x10f)]();
        expect(_0x38b0b0[_0x4b7eee(0x113)])['to']['deep'][_0x4b7eee(0x111)]([{
                'functionName': 'first',
                'route': _0x4b7eee(0x10e)
            }]);
    }), it(_0x182765(0x114), () => {
        const _0x2b6d59 = _0x182765;
        _0x807578[_0x2b6d59(0x10b)][_0x2b6d59(0x10c)]['functions'] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x2b6d59(0x10e),
                            'authorizer': _0x2b6d59(0x115)
                        }
                    }]
            }
        };
        const _0x3b89fa = _0x807578[_0x2b6d59(0x10f)]();
        expect(_0x3b89fa[_0x2b6d59(0x113)])['to'][_0x2b6d59(0x110)][_0x2b6d59(0x111)]([{
                'functionName': 'first',
                'route': _0x2b6d59(0x10e),
                'authorizer': {
                    'name': _0x2b6d59(0x115),
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                'arn:',
                                { 'Ref': _0x2b6d59(0x116) },
                                _0x2b6d59(0x117),
                                { 'Ref': 'AWS::Region' },
                                _0x2b6d59(0x118),
                                {
                                    'Fn::GetAtt': [
                                        _0x2b6d59(0x119),
                                        _0x2b6d59(0x11a)
                                    ]
                                },
                                '/invocations'
                            ]
                        ]
                    },
                    'identitySource': ['route.request.header.Auth'],
                    'permission': 'AuthLambdaFunction'
                }
            }]);
    }), it(_0x182765(0x11b), () => {
        const _0x18af82 = _0x182765;
        _0x807578[_0x18af82(0x10b)][_0x18af82(0x10c)][_0x18af82(0x10d)] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x18af82(0x10e),
                            'authorizer': _0x18af82(0x11c)
                        }
                    }]
            }
        };
        const _0x22cfa5 = _0x807578['validate']();
        expect(_0x22cfa5['events'])['to'][_0x18af82(0x110)]['equal']([{
                'functionName': _0x18af82(0x11d),
                'route': _0x18af82(0x10e),
                'authorizer': {
                    'name': 'auth',
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x18af82(0x11e),
                                { 'Ref': _0x18af82(0x116) },
                                _0x18af82(0x117),
                                { 'Ref': 'AWS::Region' },
                                ':lambda:path/2015-03-31/functions/',
                                _0x18af82(0x11c),
                                _0x18af82(0x11f)
                            ]
                        ]
                    },
                    'identitySource': ['route.request.header.Auth'],
                    'permission': _0x18af82(0x11c)
                }
            }]);
    }), it('should\x20add\x20authorizer\x20config\x20when\x20authorizer\x20is\x20specified\x20as\x20an\x20object', () => {
        const _0x1ab114 = _0x182765;
        _0x807578[_0x1ab114(0x10b)][_0x1ab114(0x10c)]['functions'] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x1ab114(0x10e),
                            'authorizer': {
                                'name': _0x1ab114(0x115),
                                'identitySource': [
                                    _0x1ab114(0x120),
                                    _0x1ab114(0x121)
                                ]
                            }
                        }
                    }]
            }
        };
        const _0x548943 = _0x807578[_0x1ab114(0x10f)]();
        expect(_0x548943[_0x1ab114(0x113)])['to'][_0x1ab114(0x110)][_0x1ab114(0x111)]([{
                'functionName': _0x1ab114(0x11d),
                'route': _0x1ab114(0x10e),
                'authorizer': {
                    'name': 'auth',
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x1ab114(0x11e),
                                { 'Ref': _0x1ab114(0x116) },
                                _0x1ab114(0x117),
                                { 'Ref': _0x1ab114(0x122) },
                                _0x1ab114(0x118),
                                {
                                    'Fn::GetAtt': [
                                        _0x1ab114(0x119),
                                        'Arn'
                                    ]
                                },
                                _0x1ab114(0x11f)
                            ]
                        ]
                    },
                    'identitySource': [
                        _0x1ab114(0x120),
                        _0x1ab114(0x121)
                    ],
                    'permission': _0x1ab114(0x119)
                }
            }]);
    }), it(_0x182765(0x123), () => {
        const _0x31265f = _0x182765;
        _0x807578['serverless'][_0x31265f(0x10c)][_0x31265f(0x10d)] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x31265f(0x10e),
                            'authorizer': {
                                'arn': 'arn:aws:auth',
                                'identitySource': [
                                    _0x31265f(0x120),
                                    _0x31265f(0x121)
                                ]
                            }
                        }
                    }]
            }
        };
        const _0x125cc8 = _0x807578['validate']();
        expect(_0x125cc8['events'])['to'][_0x31265f(0x110)][_0x31265f(0x111)]([{
                'functionName': _0x31265f(0x11d),
                'route': _0x31265f(0x10e),
                'authorizer': {
                    'name': _0x31265f(0x115),
                    'uri': {
                        'Fn::Join': [
                            '',
                            [
                                _0x31265f(0x11e),
                                { 'Ref': _0x31265f(0x116) },
                                _0x31265f(0x117),
                                { 'Ref': 'AWS::Region' },
                                ':lambda:path/2015-03-31/functions/',
                                'arn:aws:auth',
                                '/invocations'
                            ]
                        ]
                    },
                    'identitySource': [
                        'route.request.header.Auth',
                        _0x31265f(0x121)
                    ],
                    'permission': 'arn:aws:auth'
                }
            }]);
    }), it(_0x182765(0x124), () => {
        const _0x24ae45 = _0x182765;
        _0x807578[_0x24ae45(0x10b)]['service'][_0x24ae45(0x10d)] = {
            'first': {
                'events': [{
                        'websocket': {
                            'route': _0x24ae45(0x10e),
                            'routeResponseSelectionExpression': _0x24ae45(0x125)
                        }
                    }]
            }
        };
        const _0xbf46ca = _0x807578[_0x24ae45(0x10f)]();
        expect(_0xbf46ca[_0x24ae45(0x113)])['to']['deep']['equal']([{
                'functionName': _0x24ae45(0x11d),
                'route': _0x24ae45(0x10e),
                'routeResponseSelectionExpression': _0x24ae45(0x125)
            }]);
    }), it(_0x182765(0x126), () => {
        const _0x1e044a = _0x182765;
        _0x807578[_0x1e044a(0x10b)][_0x1e044a(0x10c)]['functions'] = { 'first': { 'events': [{ 'ignored': {} }] } };
        const _0x372ba7 = _0x807578['validate']();
        expect(_0x372ba7[_0x1e044a(0x113)])['to']['be']['an'](_0x1e044a(0x127))['with'][_0x1e044a(0x128)](0x0);
    });
}), describe(_0x1519c1(0x129), () => {
    const _0x2ba49b = _0x1519c1;
    it(_0x2ba49b(0x12a), async () => {
        const _0xef04a3 = _0x2ba49b, _0x240f99 = 'authName', {
                cfTemplate: _0x11fbfa,
                awsNaming: _0x4ad104
            } = await runServerless({
                'fixture': _0xef04a3(0x12b),
                'configExt': {
                    'functions': {
                        'first': {
                            'handler': _0xef04a3(0x12c),
                            'events': [{
                                    'websocket': {
                                        'route': '$connect',
                                        'authorizer': {
                                            'name': _0x240f99,
                                            'arn': {
                                                'Fn::Join': [
                                                    ':',
                                                    [
                                                        _0xef04a3(0x12d),
                                                        _0xef04a3(0x12e)
                                                    ]
                                                ]
                                            }
                                        }
                                    }
                                }]
                        }
                    }
                },
                'command': _0xef04a3(0x12f)
            }), _0x41aa22 = _0x11fbfa['Resources'], _0x5dd7af = _0x4ad104;
        expect(_0x41aa22[_0x5dd7af['getWebsocketsAuthorizerLogicalId'](_0x240f99)])['to']['exist'], expect(_0x41aa22[_0x5dd7af[_0xef04a3(0x130)](_0x240f99)][_0xef04a3(0x131)][_0xef04a3(0x132)])['to'][_0xef04a3(0x110)][_0xef04a3(0x111)](_0x240f99);
    });
});
