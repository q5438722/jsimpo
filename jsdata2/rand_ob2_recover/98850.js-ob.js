function _0x2508(_0x45e1fb, _0x2d4ef8) {
    return _0x2508 = function (_0x18396f, _0x25086b) {
        _0x18396f = _0x18396f - 345;
        let _0x4cdaf9 = _0x1839[_0x18396f];
        return _0x4cdaf9;
    }, _0x2508(_0x45e1fb, _0x2d4ef8);
}
const expect = require('chai')[_0x2eec74(355)], sinon = require(_0x2eec74(356)), AwsInfo = require(_0x2eec74(357)), AwsProvider = require('../../../../../../lib/plugins/aws/provider'), Serverless = require('../../../../../../lib/Serverless');
describe('#getStackInfo()', () => {
    const _0x2d348d = _0x2eec74;
    let _0x4e218a, _0x145899, _0x3acf8d;
    beforeEach(() => {
        const _0x1823c7 = _0x2508, _0x3b80bd = {
                'stage': 'dev',
                'region': _0x1823c7(358)
            };
        _0x4e218a = new Serverless(), _0x4e218a['setProvider']('aws', new AwsProvider(_0x4e218a, _0x3b80bd)), _0x4e218a['service']['service'] = _0x1823c7(359), _0x4e218a[_0x1823c7(360)][_0x1823c7(361)] = {
            'hello': { 'name': _0x1823c7(362) },
            'world': { 'name': _0x1823c7(363) }
        }, _0x4e218a['service'][_0x1823c7(364)] = { 'test': {} }, _0x145899 = new AwsInfo(_0x4e218a, _0x3b80bd), _0x3acf8d = sinon[_0x1823c7(365)](_0x145899[_0x1823c7(366)], _0x1823c7(367));
    }), afterEach(() => {
        const _0x35e527 = _0x2508;
        _0x145899[_0x35e527(366)][_0x35e527(367)][_0x35e527(368)]();
    }), it(_0x2d348d(369), () => {
        const _0x16d400 = _0x2d348d, _0x1ee117 = {
                'Stacks': [{
                        'StackId': _0x16d400(370) + _0x16d400(371),
                        'Description': _0x16d400(372) + _0x16d400(373),
                        'Tags': [],
                        'Outputs': [
                            {
                                'Description': _0x16d400(374),
                                'OutputKey': _0x16d400(375),
                                'OutputValue': _0x16d400(376)
                            },
                            {
                                'Description': _0x16d400(377),
                                'OutputKey': _0x16d400(378),
                                'OutputValue': 'xxx'
                            },
                            {
                                'Description': _0x16d400(379),
                                'OutputKey': _0x16d400(380),
                                'OutputValue': 'yyy'
                            },
                            {
                                'Description': _0x16d400(381),
                                'OutputKey': _0x16d400(382),
                                'OutputValue': _0x16d400(383)
                            },
                            {
                                'Description': _0x16d400(384),
                                'OutputKey': _0x16d400(385),
                                'OutputValue': 'a12bcdef3g45hi'
                            },
                            {
                                'Description': _0x16d400(386),
                                'OutputKey': 'CloudFrontDistributionDomainName',
                                'OutputValue': 'a12bcdef3g45hi.cloudfront.net'
                            }
                        ],
                        'StackStatusReason': null,
                        'CreationTime': '2013-08-23T01:02:15.422Z',
                        'Capabilities': [],
                        'StackName': _0x16d400(387),
                        'StackStatus': _0x16d400(388),
                        'DisableRollback': ![]
                    }]
            };
        _0x3acf8d['resolves'](_0x1ee117);
        const _0x2b1867 = {
            'info': {
                'functions': [
                    {
                        'name': 'hello',
                        'deployedName': _0x16d400(362)
                    },
                    {
                        'name': _0x16d400(389),
                        'deployedName': _0x16d400(363)
                    }
                ],
                'layers': [{
                        'name': _0x16d400(390),
                        'arn': _0x16d400(383)
                    }],
                'endpoints': ['ab12cd34ef.execute-api.us-east-1.amazonaws.com/dev'],
                'cloudFront': _0x16d400(391),
                'service': _0x16d400(359),
                'stage': _0x16d400(392),
                'region': _0x16d400(358),
                'stack': _0x16d400(393)
            },
            'outputs': [
                {
                    'Description': _0x16d400(374),
                    'OutputKey': _0x16d400(375),
                    'OutputValue': 'ab12cd34ef.execute-api.us-east-1.amazonaws.com/dev'
                },
                {
                    'Description': _0x16d400(377),
                    'OutputKey': _0x16d400(378),
                    'OutputValue': _0x16d400(394)
                },
                {
                    'Description': _0x16d400(379),
                    'OutputKey': 'ApiGatewayApiKey2Value',
                    'OutputValue': 'yyy'
                },
                {
                    'Description': _0x16d400(381),
                    'OutputKey': _0x16d400(382),
                    'OutputValue': 'arn:aws:lambda:region:NNNNNNNNNNNN:layer:test:1'
                },
                {
                    'Description': _0x16d400(384),
                    'OutputKey': _0x16d400(385),
                    'OutputValue': _0x16d400(395)
                },
                {
                    'Description': 'CloudFront Distribution Domain Name',
                    'OutputKey': _0x16d400(396),
                    'OutputValue': _0x16d400(391)
                }
            ]
        };
        return _0x145899[_0x16d400(397)]()['then'](() => {
            const _0x39d66c = _0x16d400;
            expect(_0x3acf8d[_0x39d66c(398)])['to'][_0x39d66c(399)](!![]), expect(_0x3acf8d[_0x39d66c(400)](_0x39d66c(401), _0x39d66c(402), { 'StackName': _0x145899[_0x39d66c(366)][_0x39d66c(403)][_0x39d66c(404)]() }))['to'][_0x39d66c(399)](!![]), expect(_0x145899[_0x39d66c(405)])['to']['deep'][_0x39d66c(399)](_0x2b1867);
        });
    }), it(_0x2d348d(406), () => {
        const _0x533392 = _0x2d348d, _0x2b843a = null;
        _0x3acf8d['resolves'](_0x2b843a);
        const _0x518c6e = {
            'info': {
                'functions': [],
                'layers': [],
                'endpoints': [],
                'service': _0x533392(359),
                'stage': _0x533392(392),
                'region': _0x533392(358),
                'stack': _0x533392(393)
            },
            'outputs': []
        };
        return _0x145899[_0x533392(397)]()['then'](() => {
            const _0x8fe005 = _0x533392;
            expect(_0x3acf8d[_0x8fe005(398)])['to'][_0x8fe005(399)](!![]), expect(_0x3acf8d[_0x8fe005(400)](_0x8fe005(401), _0x8fe005(402), { 'StackName': _0x145899[_0x8fe005(366)][_0x8fe005(403)][_0x8fe005(404)]() }))['to'][_0x8fe005(399)](!![]), expect(_0x145899[_0x8fe005(405)])['to'][_0x8fe005(407)][_0x8fe005(399)](_0x518c6e);
        });
    }), it(_0x2d348d(408), () => {
        const _0x1ac6e6 = _0x2d348d;
        _0x4e218a[_0x1ac6e6(360)][_0x1ac6e6(366)]['httpApi'] = { 'id': _0x1ac6e6(409) }, _0x3acf8d[_0x1ac6e6(410)](_0x1ac6e6(401), _0x1ac6e6(402), { 'StackName': _0x145899[_0x1ac6e6(366)]['naming'][_0x1ac6e6(404)]() })[_0x1ac6e6(411)](null), _0x3acf8d[_0x1ac6e6(410)](_0x1ac6e6(412), _0x1ac6e6(413), { 'ApiId': _0x1ac6e6(409) })[_0x1ac6e6(411)]({ 'ApiEndpoint': _0x1ac6e6(414) });
        const _0xcee430 = {
            'info': {
                'functions': [],
                'layers': [],
                'endpoints': [_0x1ac6e6(415)],
                'service': 'my-service',
                'stage': _0x1ac6e6(392),
                'region': _0x1ac6e6(358),
                'stack': 'my-service-dev'
            },
            'outputs': []
        };
        return _0x145899[_0x1ac6e6(397)]()[_0x1ac6e6(416)](() => {
            const _0x1c1db9 = _0x1ac6e6;
            expect(_0x3acf8d['calledTwice'])['to'][_0x1c1db9(399)](!![]), expect(_0x3acf8d['calledWithExactly'](_0x1c1db9(401), _0x1c1db9(402), { 'StackName': _0x145899[_0x1c1db9(366)][_0x1c1db9(403)]['getStackName']() }))['to'][_0x1c1db9(399)](!![]), expect(_0x3acf8d[_0x1c1db9(400)](_0x1c1db9(412), _0x1c1db9(413), { 'ApiId': _0x1c1db9(409) }))['to'][_0x1c1db9(399)](!![]), expect(_0x145899['gatheredData'])['to'][_0x1c1db9(407)][_0x1c1db9(399)](_0xcee430);
        });
    });
});