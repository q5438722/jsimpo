'use strict';
const _0x1839 = [
    'service',
    'functions',
    'my-service-dev-hello',
    'customized',
    'layers',
    'stub',
    'provider',
    'request',
    'restore',
    'attach\x20info\x20from\x20describeStack\x20call\x20to\x20this.gatheredData\x20if\x20result\x20is\x20available',
    'arn:aws:cloudformation:us-east-1:123456789012:',
    'stack/myteststack/466df9e0-0dff-08e3-8e2f-5088487c4896',
    'AWS\x20CloudFormation\x20Sample\x20Template\x20S3_Bucket:\x20',
    'Sample\x20template\x20showing\x20how\x20to\x20create\x20a\x20publicly\x20accessible\x20S3\x20bucket.',
    'URL\x20of\x20the\x20service\x20endpoint',
    'ServiceEndpoint',
    'ab12cd34ef.execute-api.us-east-1.amazonaws.com/dev',
    'first',
    'ApiGatewayApiKey1Value',
    'second',
    'ApiGatewayApiKey2Value',
    'Current\x20Lambda\x20layer\x20version',
    'TestLambdaLayerQualifiedArn',
    'arn:aws:lambda:region:NNNNNNNNNNNN:layer:test:1',
    'CloudFront\x20Distribution\x20Id',
    'CloudFrontDistribution',
    'CloudFront\x20Distribution\x20Domain\x20Name',
    'myteststack',
    'CREATE_COMPLETE',
    'world',
    'test',
    'a12bcdef3g45hi.cloudfront.net',
    'dev',
    'my-service-dev',
    'xxx',
    'a12bcdef3g45hi',
    'CloudFrontDistributionDomainName',
    'getStackInfo',
    'calledOnce',
    'equal',
    'calledWithExactly',
    'CloudFormation',
    'describeStacks',
    'naming',
    'getStackName',
    'gatheredData',
    'should\x20resolve\x20if\x20result\x20is\x20empty',
    'deep',
    'should\x20attach\x20info\x20from\x20api\x20gateway\x20if\x20httpApi\x20is\x20used',
    'http-api-id',
    'withArgs',
    'resolves',
    'ApiGatewayV2',
    'getApi',
    'my-endpoint',
    'httpApi:\x20my-endpoint',
    'then',
    '277DPwgjK',
    '148NXidxq',
    '99461DKZoHr',
    '2Nccubd',
    '107809sOdbRH',
    '198566Yvpciy',
    '125492yXyudy',
    '3SeuRMa',
    '51457AheCUS',
    '381701pdASJW',
    'expect',
    'sinon',
    '../../../../../../lib/plugins/aws/info/index',
    'us-east-1',
    'my-service'
];
const _0x2eec74 = _0x2508;
(function (_0x4b92a9, _0x3c2274) {
    const _0x375452 = _0x2508;
    while (!![]) {
        try {
            const _0x37fdac = parseInt(_0x375452(0x159)) * -parseInt(_0x375452(0x15a)) + -parseInt(_0x375452(0x15b)) * -parseInt(_0x375452(0x15c)) + parseInt(_0x375452(0x15d)) + parseInt(_0x375452(0x15e)) + -parseInt(_0x375452(0x15f)) + parseInt(_0x375452(0x160)) * parseInt(_0x375452(0x161)) + -parseInt(_0x375452(0x162));
            if (_0x37fdac === _0x3c2274)
                break;
            else
                _0x4b92a9['push'](_0x4b92a9['shift']());
        } catch (_0x335315) {
            _0x4b92a9['push'](_0x4b92a9['shift']());
        }
    }
}(_0x1839, 0x1b377));
function _0x2508(_0x45e1fb, _0x2d4ef8) {
    return _0x2508 = function (_0x18396f, _0x25086b) {
        _0x18396f = _0x18396f - 0x159;
        let _0x4cdaf9 = _0x1839[_0x18396f];
        return _0x4cdaf9;
    }, _0x2508(_0x45e1fb, _0x2d4ef8);
}
const expect = require('chai')[_0x2eec74(0x163)], sinon = require(_0x2eec74(0x164)), AwsInfo = require(_0x2eec74(0x165)), AwsProvider = require('../../../../../../lib/plugins/aws/provider'), Serverless = require('../../../../../../lib/Serverless');
describe('#getStackInfo()', () => {
    const _0x2d348d = _0x2eec74;
    let _0x4e218a, _0x145899, _0x3acf8d;
    beforeEach(() => {
        const _0x1823c7 = _0x2508, _0x3b80bd = {
                'stage': 'dev',
                'region': _0x1823c7(0x166)
            };
        _0x4e218a = new Serverless(), _0x4e218a['setProvider']('aws', new AwsProvider(_0x4e218a, _0x3b80bd)), _0x4e218a['service']['service'] = _0x1823c7(0x167), _0x4e218a[_0x1823c7(0x168)][_0x1823c7(0x169)] = {
            'hello': { 'name': _0x1823c7(0x16a) },
            'world': { 'name': _0x1823c7(0x16b) }
        }, _0x4e218a['service'][_0x1823c7(0x16c)] = { 'test': {} }, _0x145899 = new AwsInfo(_0x4e218a, _0x3b80bd), _0x3acf8d = sinon[_0x1823c7(0x16d)](_0x145899[_0x1823c7(0x16e)], _0x1823c7(0x16f));
    }), afterEach(() => {
        const _0x35e527 = _0x2508;
        _0x145899[_0x35e527(0x16e)][_0x35e527(0x16f)][_0x35e527(0x170)]();
    }), it(_0x2d348d(0x171), () => {
        const _0x16d400 = _0x2d348d, _0x1ee117 = {
                'Stacks': [{
                        'StackId': _0x16d400(0x172) + _0x16d400(0x173),
                        'Description': _0x16d400(0x174) + _0x16d400(0x175),
                        'Tags': [],
                        'Outputs': [
                            {
                                'Description': _0x16d400(0x176),
                                'OutputKey': _0x16d400(0x177),
                                'OutputValue': _0x16d400(0x178)
                            },
                            {
                                'Description': _0x16d400(0x179),
                                'OutputKey': _0x16d400(0x17a),
                                'OutputValue': 'xxx'
                            },
                            {
                                'Description': _0x16d400(0x17b),
                                'OutputKey': _0x16d400(0x17c),
                                'OutputValue': 'yyy'
                            },
                            {
                                'Description': _0x16d400(0x17d),
                                'OutputKey': _0x16d400(0x17e),
                                'OutputValue': _0x16d400(0x17f)
                            },
                            {
                                'Description': _0x16d400(0x180),
                                'OutputKey': _0x16d400(0x181),
                                'OutputValue': 'a12bcdef3g45hi'
                            },
                            {
                                'Description': _0x16d400(0x182),
                                'OutputKey': 'CloudFrontDistributionDomainName',
                                'OutputValue': 'a12bcdef3g45hi.cloudfront.net'
                            }
                        ],
                        'StackStatusReason': null,
                        'CreationTime': '2013-08-23T01:02:15.422Z',
                        'Capabilities': [],
                        'StackName': _0x16d400(0x183),
                        'StackStatus': _0x16d400(0x184),
                        'DisableRollback': ![]
                    }]
            };
        _0x3acf8d['resolves'](_0x1ee117);
        const _0x2b1867 = {
            'info': {
                'functions': [
                    {
                        'name': 'hello',
                        'deployedName': _0x16d400(0x16a)
                    },
                    {
                        'name': _0x16d400(0x185),
                        'deployedName': _0x16d400(0x16b)
                    }
                ],
                'layers': [{
                        'name': _0x16d400(0x186),
                        'arn': _0x16d400(0x17f)
                    }],
                'endpoints': ['ab12cd34ef.execute-api.us-east-1.amazonaws.com/dev'],
                'cloudFront': _0x16d400(0x187),
                'service': _0x16d400(0x167),
                'stage': _0x16d400(0x188),
                'region': _0x16d400(0x166),
                'stack': _0x16d400(0x189)
            },
            'outputs': [
                {
                    'Description': _0x16d400(0x176),
                    'OutputKey': _0x16d400(0x177),
                    'OutputValue': 'ab12cd34ef.execute-api.us-east-1.amazonaws.com/dev'
                },
                {
                    'Description': _0x16d400(0x179),
                    'OutputKey': _0x16d400(0x17a),
                    'OutputValue': _0x16d400(0x18a)
                },
                {
                    'Description': _0x16d400(0x17b),
                    'OutputKey': 'ApiGatewayApiKey2Value',
                    'OutputValue': 'yyy'
                },
                {
                    'Description': _0x16d400(0x17d),
                    'OutputKey': _0x16d400(0x17e),
                    'OutputValue': 'arn:aws:lambda:region:NNNNNNNNNNNN:layer:test:1'
                },
                {
                    'Description': _0x16d400(0x180),
                    'OutputKey': _0x16d400(0x181),
                    'OutputValue': _0x16d400(0x18b)
                },
                {
                    'Description': 'CloudFront\x20Distribution\x20Domain\x20Name',
                    'OutputKey': _0x16d400(0x18c),
                    'OutputValue': _0x16d400(0x187)
                }
            ]
        };
        return _0x145899[_0x16d400(0x18d)]()['then'](() => {
            const _0x39d66c = _0x16d400;
            expect(_0x3acf8d[_0x39d66c(0x18e)])['to'][_0x39d66c(0x18f)](!![]), expect(_0x3acf8d[_0x39d66c(0x190)](_0x39d66c(0x191), _0x39d66c(0x192), { 'StackName': _0x145899[_0x39d66c(0x16e)][_0x39d66c(0x193)][_0x39d66c(0x194)]() }))['to'][_0x39d66c(0x18f)](!![]), expect(_0x145899[_0x39d66c(0x195)])['to']['deep'][_0x39d66c(0x18f)](_0x2b1867);
        });
    }), it(_0x2d348d(0x196), () => {
        const _0x533392 = _0x2d348d, _0x2b843a = null;
        _0x3acf8d['resolves'](_0x2b843a);
        const _0x518c6e = {
            'info': {
                'functions': [],
                'layers': [],
                'endpoints': [],
                'service': _0x533392(0x167),
                'stage': _0x533392(0x188),
                'region': _0x533392(0x166),
                'stack': _0x533392(0x189)
            },
            'outputs': []
        };
        return _0x145899[_0x533392(0x18d)]()['then'](() => {
            const _0x8fe005 = _0x533392;
            expect(_0x3acf8d[_0x8fe005(0x18e)])['to'][_0x8fe005(0x18f)](!![]), expect(_0x3acf8d[_0x8fe005(0x190)](_0x8fe005(0x191), _0x8fe005(0x192), { 'StackName': _0x145899[_0x8fe005(0x16e)][_0x8fe005(0x193)][_0x8fe005(0x194)]() }))['to'][_0x8fe005(0x18f)](!![]), expect(_0x145899[_0x8fe005(0x195)])['to'][_0x8fe005(0x197)][_0x8fe005(0x18f)](_0x518c6e);
        });
    }), it(_0x2d348d(0x198), () => {
        const _0x1ac6e6 = _0x2d348d;
        _0x4e218a[_0x1ac6e6(0x168)][_0x1ac6e6(0x16e)]['httpApi'] = { 'id': _0x1ac6e6(0x199) }, _0x3acf8d[_0x1ac6e6(0x19a)](_0x1ac6e6(0x191), _0x1ac6e6(0x192), { 'StackName': _0x145899[_0x1ac6e6(0x16e)]['naming'][_0x1ac6e6(0x194)]() })[_0x1ac6e6(0x19b)](null), _0x3acf8d[_0x1ac6e6(0x19a)](_0x1ac6e6(0x19c), _0x1ac6e6(0x19d), { 'ApiId': _0x1ac6e6(0x199) })[_0x1ac6e6(0x19b)]({ 'ApiEndpoint': _0x1ac6e6(0x19e) });
        const _0xcee430 = {
            'info': {
                'functions': [],
                'layers': [],
                'endpoints': [_0x1ac6e6(0x19f)],
                'service': 'my-service',
                'stage': _0x1ac6e6(0x188),
                'region': _0x1ac6e6(0x166),
                'stack': 'my-service-dev'
            },
            'outputs': []
        };
        return _0x145899[_0x1ac6e6(0x18d)]()[_0x1ac6e6(0x1a0)](() => {
            const _0x1c1db9 = _0x1ac6e6;
            expect(_0x3acf8d['calledTwice'])['to'][_0x1c1db9(0x18f)](!![]), expect(_0x3acf8d['calledWithExactly'](_0x1c1db9(0x191), _0x1c1db9(0x192), { 'StackName': _0x145899[_0x1c1db9(0x16e)][_0x1c1db9(0x193)]['getStackName']() }))['to'][_0x1c1db9(0x18f)](!![]), expect(_0x3acf8d[_0x1c1db9(0x190)](_0x1c1db9(0x19c), _0x1c1db9(0x19d), { 'ApiId': _0x1c1db9(0x199) }))['to'][_0x1c1db9(0x18f)](!![]), expect(_0x145899['gatheredData'])['to'][_0x1c1db9(0x197)][_0x1c1db9(0x18f)](_0xcee430);
        });
    });
});
