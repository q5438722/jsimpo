'use strict';

const _0x2f1e = ['restore', 'mnvkF', 'ArySr', 'BcZPp', 'stack/myteststack/466df9e0-0dff-08e3-8e2f-5088487c4896', 'OEyvk', 'NJLOM', 'FsxLP', 'oysXB', 'FrXMK', 'xsaKc', 'xqVnQ', 'yyy', 'cWxiP', 'RumPW', 'EFRyL', 'nkzqd', 'vOOmx', 'rPSsi', 'Hyyvk', 'SYieF', 'KPewR', 'nkLko', 'TCGID', 'resolves', 'Ybvzj', 'VFRxP', 'iZvRB', 'nzwJl', 'JsWGc', 'first', 'kMHyx', 'TestLambdaLayerQualifiedArn', 'getStackInfo', 'then', 'bFbxy', 'calledWithExactly', 'getStackName', 'smoXq', 'gatheredData', 'equal', 'oghFO', 'Ftoxj', 'calledOnce', 'cDMJO', 'wfeYX', 'gnJvY', 'naming', 'JlRWw', 'deep', 'MnDFJ', 'httpApi', 'zuSXb', 'withArgs', 'BKEmm', 'http-api-id', 'httpApi: my-endpoint', 'UpNHK', 'calledTwice', 'UYYJS', 'WGrbU', '424241CWlHrO', '729061TjgYbu', '219155WqjoqC', '349882joJwli', '37ktXDlk', '1373iAJudq', '58763SgHgYo', '3JKNgYy', '1083059HDVqaD', 'chai', 'expect', '../../../../../../lib/plugins/aws/info/index', '../../../../../../lib/plugins/aws/provider', '../../../../../../lib/Serverless', 'dev', 'my-service', 'customized', 'request', 'arn:aws:cloudformation:us-east-1:123456789012:', 'AWS CloudFormation Sample Template S3_Bucket: ', 'Sample template showing how to create a publicly accessible S3 bucket.', 'URL of the service endpoint', 'ServiceEndpoint', 'ab12cd34ef.execute-api.us-east-1.amazonaws.com/dev', 'ApiGatewayApiKey1Value', 'xxx', 'ApiGatewayApiKey2Value', 'Current Lambda layer version', 'arn:aws:lambda:region:NNNNNNNNNNNN:layer:test:1', 'CloudFront Distribution Id', 'CloudFrontDistribution', 'a12bcdef3g45hi', 'CloudFront Distribution Domain Name', 'CloudFrontDistributionDomainName', '2013-08-23T01:02:15.422Z', 'CREATE_COMPLETE', 'hello', 'my-service-dev-hello', 'world', 'us-east-1', 'my-service-dev', 'CloudFormation', 'describeStacks', 'ApiGatewayV2', 'my-endpoint', 'attach info from describeStack call to this.gatheredData if result is available', 'should resolve if result is empty', 'should attach info from api gateway if httpApi is used', 'DVZjo', 'setProvider', 'aws', 'service', 'AtVSL', 'functions', 'SpujN', 'layers', 'stub', 'provider', 'ZkcLZ'];
const _0x400963 = _0x254e;

(function (_0x46fe94, _0x4ae8f8) {
    const _0x373a2e = _0x254e;

    while (true) {
        try {
            const _0x1d165c = -parseInt(_0x373a2e(0x91)) + -parseInt(_0x373a2e(0x92)) + parseInt(_0x373a2e(0x93)) + parseInt(_0x373a2e(0x94)) + parseInt(_0x373a2e(0x95)) * parseInt(_0x373a2e(0x96)) + -parseInt(_0x373a2e(0x97)) * parseInt(_0x373a2e(0x98)) + parseInt(_0x373a2e(0x99));

            if (_0x1d165c === _0x4ae8f8) break;else _0x46fe94.push(_0x46fe94.shift());
        } catch (_0x181ab2) {
            _0x46fe94.push(_0x46fe94.shift());
        }
    }
})(_0x2f1e, 373306);
function _0x254e(_0x589296, _0x248d08) {
    return _0x254e = function (_0x4bded9, _0x162437) {
        _0x4bded9 = _0x4bded9 - 145;
        const _0x450979 = _0x2f1e[_0x4bded9];

        return _0x450979;
    }, _0x254e(_0x589296, _0x248d08);
}

const expect = require(_0x400963(0x9a))[_0x400963(0x9b)];

const sinon = require('sinon');

const AwsInfo = require(_0x400963(0x9c));

const AwsProvider = require(_0x400963(0x9d));

const Serverless = require(_0x400963(0x9e));

describe('#getStackInfo()', () => {
    const _0x385e87 = _0x400963;
    const _0x5138b9 = {
        'nzwJl': _0x385e87(0x9f),
        'AtVSL': _0x385e87(0xa0),
        'SpujN': _0x385e87(0xa1),
        'ZkcLZ': _0x385e87(0xa2),
        'bFbxy': function (_0x13177a, _0x2ba12e) {
            return _0x13177a(_0x2ba12e);
        },
        'nQNYA': function (_0x5375b1, _0x1ba5ea) {
            return _0x5375b1(_0x1ba5ea);
        },
        'smoXq': function (_0x5060c8, _0x54182f) {
            return _0x5060c8(_0x54182f);
        },
        'ArySr': function (_0x531111, _0x294dab) {
            return _0x531111 + _0x294dab;
        },
        'BcZPp': _0x385e87(0xa3),
        'ISXTP': function (_0x190efc, _0x4e0b2e) {
            return _0x190efc + _0x4e0b2e;
        },
        'OEyvk': _0x385e87(0xa4),
        'NJLOM': _0x385e87(0xa5),
        'FsxLP': _0x385e87(0xa6),
        'oysXB': _0x385e87(0xa7),
        'iZvRB': _0x385e87(0xa8),
        'EcvvS': 'first',
        'FrXMK': _0x385e87(0xa9),
        'kMHyx': _0x385e87(0xaa),
        'xsaKc': 'second',
        'xqVnQ': _0x385e87(0xab),
        'cWxiP': _0x385e87(0xac),
        'RumPW': 'TestLambdaLayerQualifiedArn',
        'EFRyL': _0x385e87(0xad),
        'nkzqd': _0x385e87(0xae),
        'vOOmx': _0x385e87(0xaf),
        'rPSsi': _0x385e87(0xb0),
        'Hyyvk': _0x385e87(0xb1),
        'SYieF': _0x385e87(0xb2),
        'KPewR': 'a12bcdef3g45hi.cloudfront.net',
        'uoCAz': _0x385e87(0xb3),
        'nkLko': 'myteststack',
        'TCGID': _0x385e87(0xb4),
        'Ybvzj': _0x385e87(0xb5),
        'VFRxP': _0x385e87(0xb6),
        'fKdRw': _0x385e87(0xb7),
        'JsWGc': _0x385e87(0xb8),
        'qFZDX': _0x385e87(0xb9),
        'cDMJO': function (_0xeb4af9, _0xb70bf) {
            return _0xeb4af9(_0xb70bf);
        },
        'wfeYX': _0x385e87(0xba),
        'gnJvY': _0x385e87(0xbb),
        'JlRWw': function (_0xeef7b5, _0x2dec40) {
            return _0xeef7b5(_0x2dec40);
        },
        'UpNHK': function (_0x5bb5f5, _0x43557f) {
            return _0x5bb5f5(_0x43557f);
        },
        'WGrbU': function (_0x2e1d89, _0x4ea81a) {
            return _0x2e1d89(_0x4ea81a);
        },
        'UYYJS': 'getApi',
        'zuSXb': 'http-api-id',
        'BKEmm': _0x385e87(0xbc),
        'KtdYe': _0x385e87(0xbd),
        'DVZjo': function (_0x3b370d, _0x46fc7c) {
            return _0x3b370d(_0x46fc7c);
        },
        'mnvkF': _0x385e87(0xbe),
        'oghFO': function (_0x578fad, _0x52c74c, _0x22c5ee) {
            return _0x578fad(_0x52c74c, _0x22c5ee);
        },
        'Ftoxj': _0x385e87(0xbf),
        'YCYzg': function (_0x2645a9, _0x53ea6d, _0x3e366c) {
            return _0x2645a9(_0x53ea6d, _0x3e366c);
        },
        'MnDFJ': _0x385e87(0xc0)
    };

    var _0xd2ce57;

    var _0x1c8efb;

    var _0x3fa2b4;

    _0x5138b9[_0x385e87(0xc1)](beforeEach, () => {
        const _0x5f4191 = _0x385e87;
        const _0xd904e6 = {
            'stage': _0x5138b9.nzwJl,
            'region': _0x5f4191(0xb8)
        };

        _0xd2ce57 = new Serverless(), _0xd2ce57[_0x5f4191(0xc2)](_0x5f4191(0xc3), new AwsProvider(_0xd2ce57, _0xd904e6)), _0xd2ce57.service[_0x5f4191(0xc4)] = _0x5138b9[_0x5f4191(0xc5)], _0xd2ce57.service[_0x5f4191(0xc6)] = {
            'hello': { 'name': _0x5f4191(0xb6) },
            'world': { 'name': _0x5138b9[_0x5f4191(0xc7)] }
        }, _0xd2ce57[_0x5f4191(0xc4)][_0x5f4191(0xc8)] = { 'test': {} }, _0x1c8efb = new AwsInfo(_0xd2ce57, _0xd904e6), _0x3fa2b4 = sinon[_0x5f4191(0xc9)](_0x1c8efb[_0x5f4191(0xca)], _0x5138b9[_0x5f4191(0xcb)]);
    }), _0x5138b9[_0x385e87(0xc1)](afterEach, () => {
        const _0x27a1f9 = _0x385e87;

        _0x1c8efb[_0x27a1f9(0xca)][_0x27a1f9(0xa2)][_0x27a1f9(0xcc)]();
    }), it(_0x5138b9[_0x385e87(0xcd)], () => {
        const _0x3c784a = _0x385e87;
        const _0x1add1d = {
            'Stacks': [{
                'StackId': _0x5138b9[_0x3c784a(0xce)](_0x5138b9[_0x3c784a(0xcf)], _0x3c784a(0xd0)),
                'Description': _0x5138b9.ISXTP(_0x5138b9[_0x3c784a(0xd1)], _0x5138b9[_0x3c784a(0xd2)]),
                'Tags': [],
                'Outputs': [{
                    'Description': _0x5138b9[_0x3c784a(0xd3)],
                    'OutputKey': _0x5138b9[_0x3c784a(0xd4)],
                    'OutputValue': _0x5138b9.iZvRB
                }, {
                    'Description': _0x5138b9.EcvvS,
                    'OutputKey': _0x5138b9[_0x3c784a(0xd5)],
                    'OutputValue': _0x5138b9.kMHyx
                }, {
                    'Description': _0x5138b9[_0x3c784a(0xd6)],
                    'OutputKey': _0x5138b9[_0x3c784a(0xd7)],
                    'OutputValue': _0x3c784a(0xd8)
                }, {
                    'Description': _0x5138b9[_0x3c784a(0xd9)],
                    'OutputKey': _0x5138b9[_0x3c784a(0xda)],
                    'OutputValue': _0x5138b9[_0x3c784a(0xdb)]
                }, {
                    'Description': _0x5138b9[_0x3c784a(0xdc)],
                    'OutputKey': _0x5138b9[_0x3c784a(0xdd)],
                    'OutputValue': _0x5138b9[_0x3c784a(0xde)]
                }, {
                    'Description': _0x5138b9[_0x3c784a(0xdf)],
                    'OutputKey': _0x5138b9[_0x3c784a(0xe0)],
                    'OutputValue': _0x5138b9[_0x3c784a(0xe1)]
                }],
                'StackStatusReason': null,
                'CreationTime': _0x5138b9.uoCAz,
                'Capabilities': [],
                'StackName': _0x5138b9[_0x3c784a(0xe2)],
                'StackStatus': _0x5138b9[_0x3c784a(0xe3)],
                'DisableRollback': false
            }]
        };

        _0x3fa2b4[_0x3c784a(0xe4)](_0x1add1d);
        const _0x5d7183 = {
            'info': {
                'functions': [{
                    'name': _0x5138b9[_0x3c784a(0xe5)],
                    'deployedName': _0x5138b9[_0x3c784a(0xe6)]
                }, {
                    'name': _0x5138b9.fKdRw,
                    'deployedName': _0x5138b9[_0x3c784a(0xc7)]
                }],
                'layers': [{
                    'name': 'test',
                    'arn': _0x3c784a(0xad)
                }],
                'endpoints': [_0x5138b9[_0x3c784a(0xe7)]],
                'cloudFront': _0x5138b9[_0x3c784a(0xe1)],
                'service': _0x3c784a(0xa0),
                'stage': _0x5138b9[_0x3c784a(0xe8)],
                'region': _0x5138b9[_0x3c784a(0xe9)],
                'stack': _0x5138b9.qFZDX
            },
            'outputs': [{
                'Description': _0x3c784a(0xa6),
                'OutputKey': _0x5138b9[_0x3c784a(0xd4)],
                'OutputValue': _0x5138b9[_0x3c784a(0xe7)]
            }, {
                'Description': _0x3c784a(0xea),
                'OutputKey': _0x5138b9[_0x3c784a(0xd5)],
                'OutputValue': _0x5138b9[_0x3c784a(0xeb)]
            }, {
                'Description': _0x5138b9.xsaKc,
                'OutputKey': _0x5138b9[_0x3c784a(0xd7)],
                'OutputValue': 'yyy'
            }, {
                'Description': _0x5138b9.cWxiP,
                'OutputKey': _0x3c784a(0xec),
                'OutputValue': _0x5138b9.EFRyL
            }, {
                'Description': _0x5138b9[_0x3c784a(0xdc)],
                'OutputKey': 'CloudFrontDistribution',
                'OutputValue': _0x5138b9.rPSsi
            }, {
                'Description': _0x5138b9.Hyyvk,
                'OutputKey': _0x5138b9[_0x3c784a(0xe0)],
                'OutputValue': _0x5138b9[_0x3c784a(0xe1)]
            }]
        };

        return _0x1c8efb[_0x3c784a(0xed)]()[_0x3c784a(0xee)](() => {
            const _0x1acb6f = _0x3c784a;

            _0x5138b9[_0x1acb6f(0xef)](expect, _0x3fa2b4.calledOnce).to.equal(true), _0x5138b9.nQNYA(expect, _0x3fa2b4[_0x1acb6f(0xf0)]('CloudFormation', _0x1acb6f(0xbb), { 'StackName': _0x1c8efb.provider.naming[_0x1acb6f(0xf1)]() })).to.equal(true), _0x5138b9[_0x1acb6f(0xf2)](expect, _0x1c8efb[_0x1acb6f(0xf3)]).to.deep[_0x1acb6f(0xf4)](_0x5d7183);
        });
    }), _0x5138b9[_0x385e87(0xf5)](it, _0x5138b9[_0x385e87(0xf6)], () => {
        const _0x18187e = _0x385e87;
        const _0x1cdc7d = null;

        _0x3fa2b4[_0x18187e(0xe4)](_0x1cdc7d);
        const _0x1130d1 = {
            'info': {
                'functions': [],
                'layers': [],
                'endpoints': [],
                'service': _0x5138b9.AtVSL,
                'stage': _0x18187e(0x9f),
                'region': _0x5138b9.JsWGc,
                'stack': _0x18187e(0xb9)
            },
            'outputs': []
        };

        return _0x1c8efb[_0x18187e(0xed)]()[_0x18187e(0xee)](() => {
            const _0x2f1c86 = _0x18187e;

            _0x5138b9.cDMJO(expect, _0x3fa2b4[_0x2f1c86(0xf7)]).to[_0x2f1c86(0xf4)](true), _0x5138b9[_0x2f1c86(0xf8)](expect, _0x3fa2b4[_0x2f1c86(0xf0)](_0x5138b9[_0x2f1c86(0xf9)], _0x5138b9[_0x2f1c86(0xfa)], { 'StackName': _0x1c8efb[_0x2f1c86(0xca)][_0x2f1c86(0xfb)][_0x2f1c86(0xf1)]() })).to[_0x2f1c86(0xf4)](true), _0x5138b9[_0x2f1c86(0xfc)](expect, _0x1c8efb[_0x2f1c86(0xf3)]).to[_0x2f1c86(0xfd)][_0x2f1c86(0xf4)](_0x1130d1);
        });
    }), _0x5138b9.YCYzg(it, _0x5138b9[_0x385e87(0xfe)], () => {
        const _0x4a22f9 = _0x385e87;

        _0xd2ce57[_0x4a22f9(0xc4)][_0x4a22f9(0xca)][_0x4a22f9(0xff)] = { 'id': _0x5138b9[_0x4a22f9(0x100)] }, _0x3fa2b4.withArgs(_0x4a22f9(0xba), _0x5138b9[_0x4a22f9(0xfa)], { 'StackName': _0x1c8efb.provider[_0x4a22f9(0xfb)][_0x4a22f9(0xf1)]() })[_0x4a22f9(0xe4)](null), _0x3fa2b4[_0x4a22f9(0x101)](_0x5138b9[_0x4a22f9(0x102)], _0x5138b9.UYYJS, { 'ApiId': _0x4a22f9(0x103) })[_0x4a22f9(0xe4)]({ 'ApiEndpoint': _0x5138b9.KtdYe });
        const _0x2f0723 = {
            'info': {
                'functions': [],
                'layers': [],
                'endpoints': [_0x4a22f9(0x104)],
                'service': _0x5138b9.AtVSL,
                'stage': _0x5138b9[_0x4a22f9(0xe8)],
                'region': _0x5138b9[_0x4a22f9(0xe9)],
                'stack': _0x4a22f9(0xb9)
            },
            'outputs': []
        };

        return _0x1c8efb[_0x4a22f9(0xed)]()[_0x4a22f9(0xee)](() => {
            const _0x1f31ee = _0x4a22f9;

            _0x5138b9[_0x1f31ee(0x105)](expect, _0x3fa2b4[_0x1f31ee(0x106)]).to[_0x1f31ee(0xf4)](true), expect(_0x3fa2b4[_0x1f31ee(0xf0)](_0x5138b9[_0x1f31ee(0xf9)], _0x5138b9.gnJvY, { 'StackName': _0x1c8efb[_0x1f31ee(0xca)][_0x1f31ee(0xfb)][_0x1f31ee(0xf1)]() })).to[_0x1f31ee(0xf4)](true), _0x5138b9.WGrbU(expect, _0x3fa2b4[_0x1f31ee(0xf0)](_0x1f31ee(0xbc), _0x5138b9[_0x1f31ee(0x107)], { 'ApiId': _0x1f31ee(0x103) })).to[_0x1f31ee(0xf4)](true), _0x5138b9[_0x1f31ee(0x108)](expect, _0x1c8efb.gatheredData).to[_0x1f31ee(0xfd)].equal(_0x2f0723);
        });
    });
});
