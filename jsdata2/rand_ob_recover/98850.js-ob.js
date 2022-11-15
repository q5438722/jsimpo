function _0x254e(_0x589296, _0x248d08) {
    return _0x254e = function (_0x4bded9, _0x162437) {
        _0x4bded9 = _0x4bded9 - (-6960 + 9149 + -7 * 292);
        let _0x450979 = _0x2f1e[_0x4bded9];
        return _0x450979;
    }, _0x254e(_0x589296, _0x248d08);
}
const expect = require(_0x400963(154))[_0x400963(155)], sinon = require('sinon'), AwsInfo = require(_0x400963(156)), AwsProvider = require(_0x400963(157)), Serverless = require(_0x400963(158));
describe('#getStackInfo()', () => {
    const _0x385e87 = _0x400963, _0x5138b9 = {
            'nzwJl': _0x385e87(159),
            'AtVSL': _0x385e87(160),
            'SpujN': _0x385e87(161),
            'ZkcLZ': _0x385e87(162),
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
            'BcZPp': _0x385e87(163),
            'ISXTP': function (_0x190efc, _0x4e0b2e) {
                return _0x190efc + _0x4e0b2e;
            },
            'OEyvk': _0x385e87(164),
            'NJLOM': _0x385e87(165),
            'FsxLP': _0x385e87(166),
            'oysXB': _0x385e87(167),
            'iZvRB': _0x385e87(168),
            'EcvvS': 'first',
            'FrXMK': _0x385e87(169),
            'kMHyx': _0x385e87(170),
            'xsaKc': 'second',
            'xqVnQ': _0x385e87(171),
            'cWxiP': _0x385e87(172),
            'RumPW': 'TestLambdaLayerQualifiedArn',
            'EFRyL': _0x385e87(173),
            'nkzqd': _0x385e87(174),
            'vOOmx': _0x385e87(175),
            'rPSsi': _0x385e87(176),
            'Hyyvk': _0x385e87(177),
            'SYieF': _0x385e87(178),
            'KPewR': 'a12bcdef3g45hi.cloudfront.net',
            'uoCAz': _0x385e87(179),
            'nkLko': 'myteststack',
            'TCGID': _0x385e87(180),
            'Ybvzj': _0x385e87(181),
            'VFRxP': _0x385e87(182),
            'fKdRw': _0x385e87(183),
            'JsWGc': _0x385e87(184),
            'qFZDX': _0x385e87(185),
            'cDMJO': function (_0xeb4af9, _0xb70bf) {
                return _0xeb4af9(_0xb70bf);
            },
            'wfeYX': _0x385e87(186),
            'gnJvY': _0x385e87(187),
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
            'BKEmm': _0x385e87(188),
            'KtdYe': _0x385e87(189),
            'DVZjo': function (_0x3b370d, _0x46fc7c) {
                return _0x3b370d(_0x46fc7c);
            },
            'mnvkF': _0x385e87(190),
            'oghFO': function (_0x578fad, _0x52c74c, _0x22c5ee) {
                return _0x578fad(_0x52c74c, _0x22c5ee);
            },
            'Ftoxj': _0x385e87(191),
            'YCYzg': function (_0x2645a9, _0x53ea6d, _0x3e366c) {
                return _0x2645a9(_0x53ea6d, _0x3e366c);
            },
            'MnDFJ': _0x385e87(192)
        };
    let _0xd2ce57, _0x1c8efb, _0x3fa2b4;
    _0x5138b9[_0x385e87(193)](beforeEach, () => {
        const _0x5f4191 = _0x385e87, _0xd904e6 = {
                'stage': _0x5138b9['nzwJl'],
                'region': _0x5f4191(184)
            };
        _0xd2ce57 = new Serverless(), _0xd2ce57[_0x5f4191(194)](_0x5f4191(195), new AwsProvider(_0xd2ce57, _0xd904e6)), _0xd2ce57['service'][_0x5f4191(196)] = _0x5138b9[_0x5f4191(197)], _0xd2ce57['service'][_0x5f4191(198)] = {
            'hello': { 'name': _0x5f4191(182) },
            'world': { 'name': _0x5138b9[_0x5f4191(199)] }
        }, _0xd2ce57[_0x5f4191(196)][_0x5f4191(200)] = { 'test': {} }, _0x1c8efb = new AwsInfo(_0xd2ce57, _0xd904e6), _0x3fa2b4 = sinon[_0x5f4191(201)](_0x1c8efb[_0x5f4191(202)], _0x5138b9[_0x5f4191(203)]);
    }), _0x5138b9[_0x385e87(193)](afterEach, () => {
        const _0x27a1f9 = _0x385e87;
        _0x1c8efb[_0x27a1f9(202)][_0x27a1f9(162)][_0x27a1f9(204)]();
    }), it(_0x5138b9[_0x385e87(205)], () => {
        const _0x3c784a = _0x385e87, _0x1add1d = {
                'Stacks': [{
                        'StackId': _0x5138b9[_0x3c784a(206)](_0x5138b9[_0x3c784a(207)], _0x3c784a(208)),
                        'Description': _0x5138b9['ISXTP'](_0x5138b9[_0x3c784a(209)], _0x5138b9[_0x3c784a(210)]),
                        'Tags': [],
                        'Outputs': [
                            {
                                'Description': _0x5138b9[_0x3c784a(211)],
                                'OutputKey': _0x5138b9[_0x3c784a(212)],
                                'OutputValue': _0x5138b9['iZvRB']
                            },
                            {
                                'Description': _0x5138b9['EcvvS'],
                                'OutputKey': _0x5138b9[_0x3c784a(213)],
                                'OutputValue': _0x5138b9['kMHyx']
                            },
                            {
                                'Description': _0x5138b9[_0x3c784a(214)],
                                'OutputKey': _0x5138b9[_0x3c784a(215)],
                                'OutputValue': _0x3c784a(216)
                            },
                            {
                                'Description': _0x5138b9[_0x3c784a(217)],
                                'OutputKey': _0x5138b9[_0x3c784a(218)],
                                'OutputValue': _0x5138b9[_0x3c784a(219)]
                            },
                            {
                                'Description': _0x5138b9[_0x3c784a(220)],
                                'OutputKey': _0x5138b9[_0x3c784a(221)],
                                'OutputValue': _0x5138b9[_0x3c784a(222)]
                            },
                            {
                                'Description': _0x5138b9[_0x3c784a(223)],
                                'OutputKey': _0x5138b9[_0x3c784a(224)],
                                'OutputValue': _0x5138b9[_0x3c784a(225)]
                            }
                        ],
                        'StackStatusReason': null,
                        'CreationTime': _0x5138b9['uoCAz'],
                        'Capabilities': [],
                        'StackName': _0x5138b9[_0x3c784a(226)],
                        'StackStatus': _0x5138b9[_0x3c784a(227)],
                        'DisableRollback': ![]
                    }]
            };
        _0x3fa2b4[_0x3c784a(228)](_0x1add1d);
        const _0x5d7183 = {
            'info': {
                'functions': [
                    {
                        'name': _0x5138b9[_0x3c784a(229)],
                        'deployedName': _0x5138b9[_0x3c784a(230)]
                    },
                    {
                        'name': _0x5138b9['fKdRw'],
                        'deployedName': _0x5138b9[_0x3c784a(199)]
                    }
                ],
                'layers': [{
                        'name': 'test',
                        'arn': _0x3c784a(173)
                    }],
                'endpoints': [_0x5138b9[_0x3c784a(231)]],
                'cloudFront': _0x5138b9[_0x3c784a(225)],
                'service': _0x3c784a(160),
                'stage': _0x5138b9[_0x3c784a(232)],
                'region': _0x5138b9[_0x3c784a(233)],
                'stack': _0x5138b9['qFZDX']
            },
            'outputs': [
                {
                    'Description': _0x3c784a(166),
                    'OutputKey': _0x5138b9[_0x3c784a(212)],
                    'OutputValue': _0x5138b9[_0x3c784a(231)]
                },
                {
                    'Description': _0x3c784a(234),
                    'OutputKey': _0x5138b9[_0x3c784a(213)],
                    'OutputValue': _0x5138b9[_0x3c784a(235)]
                },
                {
                    'Description': _0x5138b9['xsaKc'],
                    'OutputKey': _0x5138b9[_0x3c784a(215)],
                    'OutputValue': 'yyy'
                },
                {
                    'Description': _0x5138b9['cWxiP'],
                    'OutputKey': _0x3c784a(236),
                    'OutputValue': _0x5138b9['EFRyL']
                },
                {
                    'Description': _0x5138b9[_0x3c784a(220)],
                    'OutputKey': 'CloudFrontDistribution',
                    'OutputValue': _0x5138b9['rPSsi']
                },
                {
                    'Description': _0x5138b9['Hyyvk'],
                    'OutputKey': _0x5138b9[_0x3c784a(224)],
                    'OutputValue': _0x5138b9[_0x3c784a(225)]
                }
            ]
        };
        return _0x1c8efb[_0x3c784a(237)]()[_0x3c784a(238)](() => {
            const _0x1acb6f = _0x3c784a;
            _0x5138b9[_0x1acb6f(239)](expect, _0x3fa2b4['calledOnce'])['to']['equal'](!![]), _0x5138b9['nQNYA'](expect, _0x3fa2b4[_0x1acb6f(240)]('CloudFormation', _0x1acb6f(187), { 'StackName': _0x1c8efb['provider']['naming'][_0x1acb6f(241)]() }))['to']['equal'](!![]), _0x5138b9[_0x1acb6f(242)](expect, _0x1c8efb[_0x1acb6f(243)])['to']['deep'][_0x1acb6f(244)](_0x5d7183);
        });
    }), _0x5138b9[_0x385e87(245)](it, _0x5138b9[_0x385e87(246)], () => {
        const _0x18187e = _0x385e87, _0x1cdc7d = null;
        _0x3fa2b4[_0x18187e(228)](_0x1cdc7d);
        const _0x1130d1 = {
            'info': {
                'functions': [],
                'layers': [],
                'endpoints': [],
                'service': _0x5138b9['AtVSL'],
                'stage': _0x18187e(159),
                'region': _0x5138b9['JsWGc'],
                'stack': _0x18187e(185)
            },
            'outputs': []
        };
        return _0x1c8efb[_0x18187e(237)]()[_0x18187e(238)](() => {
            const _0x2f1c86 = _0x18187e;
            _0x5138b9['cDMJO'](expect, _0x3fa2b4[_0x2f1c86(247)])['to'][_0x2f1c86(244)](!![]), _0x5138b9[_0x2f1c86(248)](expect, _0x3fa2b4[_0x2f1c86(240)](_0x5138b9[_0x2f1c86(249)], _0x5138b9[_0x2f1c86(250)], { 'StackName': _0x1c8efb[_0x2f1c86(202)][_0x2f1c86(251)][_0x2f1c86(241)]() }))['to'][_0x2f1c86(244)](!![]), _0x5138b9[_0x2f1c86(252)](expect, _0x1c8efb[_0x2f1c86(243)])['to'][_0x2f1c86(253)][_0x2f1c86(244)](_0x1130d1);
        });
    }), _0x5138b9['YCYzg'](it, _0x5138b9[_0x385e87(254)], () => {
        const _0x4a22f9 = _0x385e87;
        _0xd2ce57[_0x4a22f9(196)][_0x4a22f9(202)][_0x4a22f9(255)] = { 'id': _0x5138b9[_0x4a22f9(256)] }, _0x3fa2b4['withArgs'](_0x4a22f9(186), _0x5138b9[_0x4a22f9(250)], { 'StackName': _0x1c8efb['provider'][_0x4a22f9(251)][_0x4a22f9(241)]() })[_0x4a22f9(228)](null), _0x3fa2b4[_0x4a22f9(257)](_0x5138b9[_0x4a22f9(258)], _0x5138b9['UYYJS'], { 'ApiId': _0x4a22f9(259) })[_0x4a22f9(228)]({ 'ApiEndpoint': _0x5138b9['KtdYe'] });
        const _0x2f0723 = {
            'info': {
                'functions': [],
                'layers': [],
                'endpoints': [_0x4a22f9(260)],
                'service': _0x5138b9['AtVSL'],
                'stage': _0x5138b9[_0x4a22f9(232)],
                'region': _0x5138b9[_0x4a22f9(233)],
                'stack': _0x4a22f9(185)
            },
            'outputs': []
        };
        return _0x1c8efb[_0x4a22f9(237)]()[_0x4a22f9(238)](() => {
            const _0x1f31ee = _0x4a22f9;
            _0x5138b9[_0x1f31ee(261)](expect, _0x3fa2b4[_0x1f31ee(262)])['to'][_0x1f31ee(244)](!![]), expect(_0x3fa2b4[_0x1f31ee(240)](_0x5138b9[_0x1f31ee(249)], _0x5138b9['gnJvY'], { 'StackName': _0x1c8efb[_0x1f31ee(202)][_0x1f31ee(251)][_0x1f31ee(241)]() }))['to'][_0x1f31ee(244)](!![]), _0x5138b9['WGrbU'](expect, _0x3fa2b4[_0x1f31ee(240)](_0x1f31ee(188), _0x5138b9[_0x1f31ee(263)], { 'ApiId': _0x1f31ee(259) }))['to'][_0x1f31ee(244)](!![]), _0x5138b9[_0x1f31ee(264)](expect, _0x1c8efb['gatheredData'])['to'][_0x1f31ee(253)]['equal'](_0x2f0723);
        });
    });
});