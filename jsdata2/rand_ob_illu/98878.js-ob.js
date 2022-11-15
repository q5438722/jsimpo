'use strict';

const _0x4426 = ['HXpfq', 'AOBsZ', 'lunkV', 'Iwhft', 'GcKMj', 'throw', 'wZgbN', 'NNSfy', 'lhJEA', 'utAOX', 'RYLtQ', 'chVuy', 'deep', 'JwlZB', 'uWEPo', 'jTfvE', '217NLMXfi', '5293XVtVVA', '1WyThfn', '33087JKBxvD', '60107ISISTY', '2TpiXHL', '3203AHKZOJ', '187LUOmbb', '384816fLVJLl', '2iKTfgG', '294537WpTOnG', '328848rBdOYC', 'expect', '../../../../../../../../lib/plugins/aws/provider', '../../../../../../../../lib/plugins/aws/package/compile/events/cloudWatchLog', '../../../../../../../../lib/Serverless', '"Total amount" -"level=Debug"', '/aws/lambda/hello1', '\\"Total amount\\" -\\"level=Debug\\"', '/aws/lambda/hello2', '/aws/lambda/yada-dev-dummy2', '/aws/lambda/yada-dev-dummy*', '/aws/lambda/hello', '/aws/lightsail/log1', '/aws/l*', '/aws/lambda/h*', '/aws/*', '/aws/lambda', '/aws/lambda*', '3|5|6|7|0|4|2|1|8', 'AWS::Lambda::Permission', '{$.userIden\ntity.type = Root}', 'should create corresponding resources when cloudwatchLog events are given', 'should respect 2 cloudwatchLog events for log group', 'should respect "filter" variable', 'should respect "filter" variable of plain text', 'should respect escaped "filter" variable of plain text', 'should set an empty string for FilterPattern statement when "filter" variable is not given', 'should create corresponding resources when cloudwatchLog events are given as a string', 'should create a longest-common suffix of logGroup to minimize scope', 'should throw an error if "logGroup" is configured more than twice in one CloudFormation stack', 'should not create corresponding resources when cloudwatchLog event is not given', 'should not create corresponding resources when "events" property is not given', 'xkuqu', 'serverless', 'service', 'new-service', 'provider', 'compiledCloudFormationTemplate', 'setProvider', '#constructor()', 'aQvLJ', 'should set the provider variable to an instance of AwsProvider', 'instanceof', '#compileCloudWatchLogEvents()', 'LkETG', 'WZamT', 'zcuWF', 'sEknx', 'iZIlu', '4|7|2|3|5|0|1|6|8', 'BBMTt', 'BopDG', 'MfWfY', 'cyWfg', 'FLRoA', 'split', 'Resources', 'Properties', 'LogGroupName', 'CHuoQ', 'FirstLogsSubscriptionFilterCloudWatchLog2', 'FilterPattern', 'equal', 'amHhx', 'yEbOQ', 'compileCloudWatchLogEvents', 'FirstLogsSubscriptionFilterCloudWatchLog1', 'Type', 'lyYOB', 'FirstLambdaPermissionLogsSubscriptionFilterCloudWatchLog', 'TMkNR', 'functions', 'GWTLx', 'JxvFF', 'SecondLogsSubscriptionFilterCloudWatchLog1', 'AWS::Logs::SubscriptionFilter', 'SecondLambdaPermissionLogsSubscriptionFilterCloudWatchLog', 'TPnaA', 'HSbrK', 'FqYJK', 'GFrZS', 'VfLfu', 'ZIhVW', 'woDWS', 'YAcwy', 'bkNki', 'yqkzc', 'FTmxv', 'KxbEV', 'Usopa', 'ZAeci', 'QVRuD', 'cjLLR', 'rSMgn', 'longestCommonSuffix', 'bTxBY', '/aws/lambda/yada-dev-dummy', 'tSVqZ', 'wDuPu', 'EPuQL', 'XKOzY', '/aws/lambda/*', 'tAuZt', 'ZnCBu', 'RvpuL', '/aws/lambda/tweet', 'tILgd', '/aws/lambda/hot'];
const _0x103b28 = _0x1535;

function _0x1535(_0x3207b9, _0x8de72a) {
    return _0x1535 = function (_0x23d723, _0x4803b3) {
        _0x23d723 = _0x23d723 - 329;
        const _0x3fc637 = _0x4426[_0x23d723];

        return _0x3fc637;
    }, _0x1535(_0x3207b9, _0x8de72a);
}
(function (_0x3cd2fa, _0x234159) {
    const _0x2cf489 = _0x1535;

    while (true) {
        try {
            const _0x211324 = parseInt(_0x2cf489(0x149)) * parseInt(_0x2cf489(0x14a)) + parseInt(_0x2cf489(0x14b)) * parseInt(_0x2cf489(0x14c)) + parseInt(_0x2cf489(0x14d)) * parseInt(_0x2cf489(0x14e)) + -parseInt(_0x2cf489(0x14f)) * parseInt(_0x2cf489(0x150)) + -parseInt(_0x2cf489(0x151)) + parseInt(_0x2cf489(0x152)) * parseInt(_0x2cf489(0x153)) + -parseInt(_0x2cf489(0x154));

            if (_0x211324 === _0x234159) break;else _0x3cd2fa.push(_0x3cd2fa.shift());
        } catch (_0x90592e) {
            _0x3cd2fa.push(_0x3cd2fa.shift());
        }
    }
})(_0x4426, 578331);

const expect = require('chai')[_0x103b28(0x155)];

const AwsProvider = require(_0x103b28(0x156));

const AwsCompileCloudWatchLogEvents = require(_0x103b28(0x157));

const Serverless = require(_0x103b28(0x158));

describe('AwsCompileCloudWatchLogEvents', () => {
    const _0x38b642 = _0x103b28;
    const _0x5474d0 = {
        'xkuqu': '1|2|3|4|0',
        'aQvLJ': function (_0x43c282, _0x4ca9ad, _0x24628d) {
            return _0x43c282(_0x4ca9ad, _0x24628d);
        },
        'BopDG': '{$.userIdentity.type = Root}',
        'GFrZS': function (_0x20c341, _0x20927a) {
            return _0x20c341(_0x20927a);
        },
        'ZIhVW': _0x38b642(0x159),
        'woDWS': _0x38b642(0x15a),
        'EvCoj': _0x38b642(0x15b),
        'YAcwy': function (_0x220617, _0x45448d) {
            return _0x220617(_0x45448d);
        },
        'rSMgn': '2|0|6|5|4|8|7|3|9|1',
        'cwhmF': _0x38b642(0x15c),
        'bTxBY': '/aws/lambda/hello*',
        'tSVqZ': _0x38b642(0x15d),
        'wDuPu': _0x38b642(0x15e),
        'EPuQL': '/aws/lambda/*',
        'XKOzY': _0x38b642(0x15f),
        'tAuZt': '/aws/lex/log1',
        'ZnCBu': _0x38b642(0x160),
        'RvpuL': _0x38b642(0x161),
        'tILgd': function (_0x2c68f8, _0x4591c4) {
            return _0x2c68f8(_0x4591c4);
        },
        'HXpfq': _0x38b642(0x162),
        'AOBsZ': _0x38b642(0x163),
        'lunkV': _0x38b642(0x164),
        'fxoPP': _0x38b642(0x165),
        'LkETG': _0x38b642(0x166),
        'WZamT': function (_0x2b180c, _0x364fe6) {
            return _0x2b180c(_0x364fe6);
        },
        'zcuWF': _0x38b642(0x167),
        'sEknx': function (_0x20cb2d, _0x23d6fe) {
            return _0x20cb2d(_0x23d6fe);
        },
        'iZIlu': function (_0x1b6d31, _0x145822) {
            return _0x1b6d31(_0x145822);
        },
        'BBMTt': '6|4|5|0|1|3|2',
        'MfWfY': '/aws/lambda/hello3',
        'cyWfg': _0x38b642(0x168),
        'FLRoA': _0x38b642(0x169),
        'TMkNR': _0x38b642(0x16a),
        'HSbrK': function (_0x15142f, _0x32aad0, _0xd6ae90) {
            return _0x15142f(_0x32aad0, _0xd6ae90);
        },
        'FqYJK': _0x38b642(0x16b),
        'VfLfu': _0x38b642(0x16c),
        'gIFUF': _0x38b642(0x16d),
        'DGGnA': function (_0x2d95b4, _0x5c159d, _0x45cf36) {
            return _0x2d95b4(_0x5c159d, _0x45cf36);
        },
        'bkNki': _0x38b642(0x16e),
        'QVRuD': function (_0x21ed4e, _0x5ef0b4, _0x2fdcad) {
            return _0x21ed4e(_0x5ef0b4, _0x2fdcad);
        },
        'FTmxv': _0x38b642(0x16f),
        'cjLLR': _0x38b642(0x170),
        'Iwhft': function (_0x12f7da, _0x138839, _0x145743) {
            return _0x12f7da(_0x138839, _0x145743);
        },
        'GcKMj': _0x38b642(0x171),
        'wZgbN': function (_0x517a1a, _0x3055e4, _0x1e63b0) {
            return _0x517a1a(_0x3055e4, _0x1e63b0);
        },
        'NNSfy': 'should respect variables if multi-line variables are given',
        'chVuy': _0x38b642(0x172),
        'JwlZB': function (_0x888b47, _0x1e60c8, _0x3b7d74) {
            return _0x888b47(_0x1e60c8, _0x3b7d74);
        },
        'uWEPo': _0x38b642(0x173)
    };

    var _0x34dab5;

    var _0x3719f1;

    beforeEach(() => {
        const _0x2ae091 = _0x38b642;

        const _0x1293cb = _0x5474d0[_0x2ae091(0x174)].split('|');

        var _0x5685d0 = 0;

        while (true) {
            switch (_0x1293cb[_0x5685d0++]) {
                case '0':
                    _0x3719f1[_0x2ae091(0x175)][_0x2ae091(0x176)][_0x2ae091(0x176)] = _0x2ae091(0x177);
                    continue;
                case '1':
                    _0x34dab5 = new Serverless();
                    continue;
                case '2':
                    _0x34dab5[_0x2ae091(0x176)][_0x2ae091(0x178)][_0x2ae091(0x179)] = { 'Resources': {} };
                    continue;
                case '3':
                    _0x34dab5[_0x2ae091(0x17a)]('aws', new AwsProvider(_0x34dab5));
                    continue;
                case '4':
                    _0x3719f1 = new AwsCompileCloudWatchLogEvents(_0x34dab5);
                    continue;
            }
            break;
        }
    }), _0x5474d0.JwlZB(describe, _0x38b642(0x17b), () => {
        const _0x13a3ff = _0x38b642;

        _0x5474d0[_0x13a3ff(0x17c)](it, _0x13a3ff(0x17d), () => expect(_0x3719f1[_0x13a3ff(0x178)]).to.be[_0x13a3ff(0x17e)](AwsProvider));
    }), describe(_0x38b642(0x17f), () => {
        const _0x590238 = _0x38b642;
        const _0x4522d2 = {
            'vLOkQ': _0x5474d0[_0x590238(0x180)],
            'amHhx': function (_0x31e39c, _0x44f49e) {
                const _0x135544 = _0x590238;

                return _0x5474d0[_0x135544(0x181)](_0x31e39c, _0x44f49e);
            },
            'CHuoQ': _0x590238(0x15a),
            'yEbOQ': _0x5474d0.cwhmF,
            'lyYOB': 'AWS::Logs::SubscriptionFilter',
            'GWTLx': function (_0x1c51ab, _0x66ae34) {
                const _0x181e1d = _0x590238;

                return _0x5474d0[_0x181e1d(0x181)](_0x1c51ab, _0x66ae34);
            },
            'TPnaA': _0x5474d0[_0x590238(0x182)],
            'JxvFF': function (_0x31e87e, _0x543282) {
                return _0x5474d0.WZamT(_0x31e87e, _0x543282);
            },
            'BfppH': function (_0x30ec83, _0x4c4455) {
                const _0x1e4090 = _0x590238;

                return _0x5474d0[_0x1e4090(0x183)](_0x30ec83, _0x4c4455);
            },
            'cnarA': function (_0x5162b2, _0xbf2cb7) {
                const _0x597332 = _0x590238;

                return _0x5474d0[_0x597332(0x183)](_0x5162b2, _0xbf2cb7);
            },
            'csmjx': function (_0x3c3851, _0x19a0f8) {
                const _0x366645 = _0x590238;

                return _0x5474d0[_0x366645(0x183)](_0x3c3851, _0x19a0f8);
            },
            'yqkzc': function (_0x2952e4, _0x5ca34a) {
                const _0x4437c7 = _0x590238;

                return _0x5474d0[_0x4437c7(0x184)](_0x2952e4, _0x5ca34a);
            },
            'KxbEV': _0x590238(0x185),
            'Usopa': function (_0x58d8c7, _0x5c49ae) {
                return _0x58d8c7(_0x5c49ae);
            },
            'ZAeci': function (_0x4cecfb, _0x3b9b73) {
                return _0x4cecfb(_0x3b9b73);
            },
            'lhJEA': _0x5474d0[_0x590238(0x186)],
            'skxiI': _0x5474d0[_0x590238(0x187)],
            'ziLbA': '/aws/lam\nbda/hello3',
            'utAOX': _0x5474d0[_0x590238(0x188)],
            'IXrhx': '/aws/lam\nbda/hello1',
            'RYLtQ': _0x5474d0[_0x590238(0x189)],
            'jTfvE': function (_0x1ee43c, _0x5642bc) {
                const _0x5d78a9 = _0x590238;

                return _0x5474d0[_0x5d78a9(0x184)](_0x1ee43c, _0x5642bc);
            }
        };

        it(_0x5474d0[_0x590238(0x18a)], () => {
            const _0xd41baa = _0x590238;

            const _0x34f83b = _0x4522d2.vLOkQ[_0xd41baa(0x18b)]('|');

            var _0x8deb2b = 0;

            while (true) {
                switch (_0x34f83b[_0x8deb2b++]) {
                    case '0':
                        _0x4522d2.amHhx(expect, _0x3719f1[_0xd41baa(0x175)][_0xd41baa(0x176)][_0xd41baa(0x178)][_0xd41baa(0x179)][_0xd41baa(0x18c)].FirstLogsSubscriptionFilterCloudWatchLog1[_0xd41baa(0x18d)][_0xd41baa(0x18e)]).to.equal(_0x4522d2[_0xd41baa(0x18f)]);
                        continue;
                    case '1':
                        expect(_0x3719f1[_0xd41baa(0x175)][_0xd41baa(0x176)][_0xd41baa(0x178)][_0xd41baa(0x179)].Resources[_0xd41baa(0x190)].Properties[_0xd41baa(0x191)]).to[_0xd41baa(0x192)]('');
                        continue;
                    case '2':
                        _0x4522d2[_0xd41baa(0x193)](expect, _0x3719f1[_0xd41baa(0x175)][_0xd41baa(0x176)][_0xd41baa(0x178)][_0xd41baa(0x179)][_0xd41baa(0x18c)].FirstLogsSubscriptionFilterCloudWatchLog1[_0xd41baa(0x18d)][_0xd41baa(0x191)]).to[_0xd41baa(0x192)]('');
                        continue;
                    case '3':
                        _0x3719f1[_0xd41baa(0x175)][_0xd41baa(0x176)]['functions'] = {
                            'first': {
                                'events': [{ 'cloudwatchLog': { 'logGroup': _0xd41baa(0x15a) } }, { 'cloudwatchLog': { 'logGroup': _0x4522d2[_0xd41baa(0x194)] } }]
                            }
                        };
                        continue;
                    case '4':
                        _0x4522d2[_0xd41baa(0x193)](expect, _0x3719f1[_0xd41baa(0x175)].service.provider.compiledCloudFormationTemplate.Resources[_0xd41baa(0x190)][_0xd41baa(0x18d)][_0xd41baa(0x18e)]).to[_0xd41baa(0x192)](_0x4522d2[_0xd41baa(0x194)]);
                        continue;
                    case '5':
                        _0x3719f1[_0xd41baa(0x195)]();
                        continue;
                    case '6':
                        _0x4522d2.amHhx(expect, _0x3719f1.serverless[_0xd41baa(0x176)][_0xd41baa(0x178)].compiledCloudFormationTemplate[_0xd41baa(0x18c)][_0xd41baa(0x196)][_0xd41baa(0x197)]).to[_0xd41baa(0x192)](_0x4522d2[_0xd41baa(0x198)]);
                        continue;
                    case '7':
                        _0x4522d2.GWTLx(expect, _0x3719f1.serverless[_0xd41baa(0x176)].provider[_0xd41baa(0x179)][_0xd41baa(0x18c)][_0xd41baa(0x190)][_0xd41baa(0x197)]).to[_0xd41baa(0x192)]('AWS::Logs::SubscriptionFilter');
                        continue;
                    case '8':
                        _0x4522d2.GWTLx(expect, _0x3719f1[_0xd41baa(0x175)][_0xd41baa(0x176)].provider[_0xd41baa(0x179)].Resources[_0xd41baa(0x199)][_0xd41baa(0x197)]).to.equal(_0x4522d2.TPnaA);
                        continue;
                }
                break;
            }
        }), _0x5474d0[_0x590238(0x17c)](it, _0x5474d0[_0x590238(0x19a)], () => {
            const _0x4e9457 = _0x590238;

            _0x3719f1[_0x4e9457(0x175)][_0x4e9457(0x176)][_0x4e9457(0x19b)] = {
                'first': { 'events': [{ 'cloudwatchLog': { 'logGroup': _0x4522d2[_0x4e9457(0x18f)] } }] },
                'second': { 'events': [{ 'cloudwatchLog': { 'logGroup': _0x4522d2[_0x4e9457(0x18f)] } }] }
            }, _0x3719f1.compileCloudWatchLogEvents(), _0x4522d2[_0x4e9457(0x19c)](expect, _0x3719f1[_0x4e9457(0x175)][_0x4e9457(0x176)][_0x4e9457(0x178)][_0x4e9457(0x179)][_0x4e9457(0x18c)].FirstLogsSubscriptionFilterCloudWatchLog1[_0x4e9457(0x197)]).to[_0x4e9457(0x192)](_0x4522d2[_0x4e9457(0x198)]), _0x4522d2[_0x4e9457(0x19c)](expect, _0x3719f1[_0x4e9457(0x175)][_0x4e9457(0x176)][_0x4e9457(0x178)].compiledCloudFormationTemplate[_0x4e9457(0x18c)][_0x4e9457(0x196)].Properties[_0x4e9457(0x18e)]).to[_0x4e9457(0x192)](_0x4e9457(0x15a)), _0x4522d2[_0x4e9457(0x19d)](expect, _0x3719f1[_0x4e9457(0x175)].service.provider[_0x4e9457(0x179)][_0x4e9457(0x18c)].FirstLogsSubscriptionFilterCloudWatchLog1[_0x4e9457(0x18d)][_0x4e9457(0x191)]).to[_0x4e9457(0x192)](''), _0x4522d2.BfppH(expect, _0x3719f1[_0x4e9457(0x175)][_0x4e9457(0x176)][_0x4e9457(0x178)][_0x4e9457(0x179)][_0x4e9457(0x18c)][_0x4e9457(0x199)][_0x4e9457(0x197)]).to[_0x4e9457(0x192)]('AWS::Lambda::Permission'), _0x4522d2.BfppH(expect, _0x3719f1[_0x4e9457(0x175)][_0x4e9457(0x176)][_0x4e9457(0x178)][_0x4e9457(0x179)].Resources[_0x4e9457(0x19e)][_0x4e9457(0x197)]).to[_0x4e9457(0x192)](_0x4e9457(0x19f)), _0x4522d2.cnarA(expect, _0x3719f1[_0x4e9457(0x175)][_0x4e9457(0x176)].provider[_0x4e9457(0x179)].Resources.SecondLogsSubscriptionFilterCloudWatchLog1.Properties[_0x4e9457(0x18e)]).to[_0x4e9457(0x192)](_0x4522d2[_0x4e9457(0x18f)]), _0x4522d2.csmjx(expect, _0x3719f1.serverless[_0x4e9457(0x176)][_0x4e9457(0x178)][_0x4e9457(0x179)][_0x4e9457(0x18c)][_0x4e9457(0x19e)].Properties.FilterPattern).to[_0x4e9457(0x192)](''), _0x4522d2.yqkzc(expect, _0x3719f1[_0x4e9457(0x175)][_0x4e9457(0x176)].provider[_0x4e9457(0x179)].Resources[_0x4e9457(0x1a0)][_0x4e9457(0x197)]).to[_0x4e9457(0x192)](_0x4522d2[_0x4e9457(0x1a1)]);
        }), _0x5474d0[_0x590238(0x1a2)](it, _0x5474d0[_0x590238(0x1a3)], () => {
            const _0x40f849 = _0x590238;

            _0x3719f1[_0x40f849(0x175)][_0x40f849(0x176)]['functions'] = {
                'first': {
                    'events': [{
                        'cloudwatchLog': {
                            'logGroup': '/aws/lambda/hello1',
                            'filter': _0x5474d0[_0x40f849(0x187)]
                        }
                    }]
                }
            }, _0x3719f1[_0x40f849(0x195)](), _0x5474d0[_0x40f849(0x1a4)](expect, _0x3719f1[_0x40f849(0x175)][_0x40f849(0x176)][_0x40f849(0x178)][_0x40f849(0x179)][_0x40f849(0x18c)].FirstLogsSubscriptionFilterCloudWatchLog1.Properties[_0x40f849(0x191)]).to[_0x40f849(0x192)]('{$.userIdentity.type = Root}');
        }), _0x5474d0[_0x590238(0x1a2)](it, _0x5474d0[_0x590238(0x1a5)], () => {
            const _0x16cccf = _0x590238;

            _0x3719f1[_0x16cccf(0x175)][_0x16cccf(0x176)][_0x16cccf(0x19b)] = {
                'first': {
                    'events': [{
                        'cloudwatchLog': {
                            'logGroup': _0x16cccf(0x15a),
                            'filter': _0x5474d0.ZIhVW
                        }
                    }]
                }
            }, _0x3719f1[_0x16cccf(0x195)](), expect(_0x3719f1[_0x16cccf(0x175)][_0x16cccf(0x176)].provider[_0x16cccf(0x179)][_0x16cccf(0x18c)][_0x16cccf(0x196)][_0x16cccf(0x18d)][_0x16cccf(0x191)]).to[_0x16cccf(0x192)](_0x5474d0[_0x16cccf(0x1a6)]);
        }), it(_0x5474d0.gIFUF, () => {
            const _0x18042b = _0x590238;

            _0x3719f1[_0x18042b(0x175)][_0x18042b(0x176)][_0x18042b(0x19b)] = {
                'first': {
                    'events': [{
                        'cloudwatchLog': {
                            'logGroup': _0x5474d0[_0x18042b(0x1a7)],
                            'filter': _0x5474d0.EvCoj
                        }
                    }]
                }
            }, _0x3719f1[_0x18042b(0x195)](), _0x5474d0[_0x18042b(0x1a8)](expect, _0x3719f1[_0x18042b(0x175)][_0x18042b(0x176)][_0x18042b(0x178)][_0x18042b(0x179)][_0x18042b(0x18c)][_0x18042b(0x196)].Properties[_0x18042b(0x191)]).to[_0x18042b(0x192)](_0x5474d0[_0x18042b(0x1a6)]);
        }), _0x5474d0.DGGnA(it, _0x5474d0[_0x590238(0x1a9)], () => {
            const _0x496d2a = _0x590238;

            _0x3719f1[_0x496d2a(0x175)].service[_0x496d2a(0x19b)] = { 'first': { 'events': [{ 'cloudwatchLog': { 'logGroup': _0x496d2a(0x15a) } }] } }, _0x3719f1[_0x496d2a(0x195)](), _0x4522d2[_0x496d2a(0x1aa)](expect, _0x3719f1[_0x496d2a(0x175)].service.provider.compiledCloudFormationTemplate[_0x496d2a(0x18c)].FirstLogsSubscriptionFilterCloudWatchLog1[_0x496d2a(0x18d)][_0x496d2a(0x191)]).to[_0x496d2a(0x192)]('');
        }), _0x5474d0.QVRuD(it, _0x5474d0[_0x590238(0x1ab)], () => {
            const _0x4dc4ea = _0x590238;

            const _0x2e6ff8 = _0x4522d2[_0x4dc4ea(0x1ac)][_0x4dc4ea(0x18b)]('|');

            var _0x91168a = 0;

            while (true) {
                switch (_0x2e6ff8[_0x91168a++]) {
                    case '0':
                        expect(_0x3719f1[_0x4dc4ea(0x175)][_0x4dc4ea(0x176)][_0x4dc4ea(0x178)][_0x4dc4ea(0x179)][_0x4dc4ea(0x18c)][_0x4dc4ea(0x190)][_0x4dc4ea(0x18d)][_0x4dc4ea(0x18e)]).to[_0x4dc4ea(0x192)](_0x4522d2.yEbOQ);
                        continue;
                    case '1':
                        _0x4522d2[_0x4dc4ea(0x1ad)](expect, _0x3719f1.serverless[_0x4dc4ea(0x176)].provider[_0x4dc4ea(0x179)].Resources[_0x4dc4ea(0x196)][_0x4dc4ea(0x18d)].FilterPattern).to[_0x4dc4ea(0x192)]('');
                        continue;
                    case '2':
                        _0x4522d2.ZAeci(expect, _0x3719f1[_0x4dc4ea(0x175)][_0x4dc4ea(0x176)].provider[_0x4dc4ea(0x179)][_0x4dc4ea(0x18c)][_0x4dc4ea(0x196)][_0x4dc4ea(0x197)]).to[_0x4dc4ea(0x192)]('AWS::Logs::SubscriptionFilter');
                        continue;
                    case '3':
                        _0x4522d2[_0x4dc4ea(0x1ae)](expect, _0x3719f1[_0x4dc4ea(0x175)].service.provider[_0x4dc4ea(0x179)][_0x4dc4ea(0x18c)][_0x4dc4ea(0x190)][_0x4dc4ea(0x197)]).to[_0x4dc4ea(0x192)](_0x4522d2[_0x4dc4ea(0x198)]);
                        continue;
                    case '4':
                        _0x3719f1[_0x4dc4ea(0x175)][_0x4dc4ea(0x176)]['functions'] = {
                            'first': {
                                'events': [{ 'cloudwatchLog': _0x4522d2[_0x4dc4ea(0x18f)] }, { 'cloudwatchLog': '/aws/lambda/hello2' }]
                            }
                        };
                        continue;
                    case '5':
                        expect(_0x3719f1[_0x4dc4ea(0x175)].service[_0x4dc4ea(0x178)].compiledCloudFormationTemplate[_0x4dc4ea(0x18c)][_0x4dc4ea(0x196)][_0x4dc4ea(0x18d)][_0x4dc4ea(0x18e)]).to[_0x4dc4ea(0x192)](_0x4522d2[_0x4dc4ea(0x18f)]);
                        continue;
                    case '6':
                        expect(_0x3719f1.serverless[_0x4dc4ea(0x176)][_0x4dc4ea(0x178)][_0x4dc4ea(0x179)][_0x4dc4ea(0x18c)][_0x4dc4ea(0x190)][_0x4dc4ea(0x18d)][_0x4dc4ea(0x191)]).to.equal('');
                        continue;
                    case '7':
                        _0x3719f1[_0x4dc4ea(0x195)]();
                        continue;
                    case '8':
                        _0x4522d2.ZAeci(expect, _0x3719f1.serverless[_0x4dc4ea(0x176)][_0x4dc4ea(0x178)][_0x4dc4ea(0x179)][_0x4dc4ea(0x18c)][_0x4dc4ea(0x199)][_0x4dc4ea(0x197)]).to[_0x4dc4ea(0x192)](_0x4522d2[_0x4dc4ea(0x1a1)]);
                        continue;
                }
                break;
            }
        }), _0x5474d0[_0x590238(0x1af)](it, _0x5474d0[_0x590238(0x1b0)], () => {
            const _0x3c1385 = _0x590238;

            const _0x44638a = _0x5474d0[_0x3c1385(0x1b1)][_0x3c1385(0x18b)]('|');

            var _0x42aca3 = 0;

            while (true) {
                switch (_0x44638a[_0x42aca3++]) {
                    case '0':
                        _0x5474d0[_0x3c1385(0x1a8)](expect, _0x3719f1[_0x3c1385(0x1b2)]([_0x3c1385(0x15a), _0x5474d0.cwhmF])).to[_0x3c1385(0x192)](_0x5474d0[_0x3c1385(0x1b3)]);
                        continue;
                    case '1':
                        expect(_0x3719f1[_0x3c1385(0x1b2)]([_0x3c1385(0x1b4), _0x5474d0[_0x3c1385(0x1b5)]])).to[_0x3c1385(0x192)](_0x5474d0[_0x3c1385(0x1b6)]);
                        continue;
                    case '2':
                        expect(_0x3719f1.longestCommonSuffix([_0x3c1385(0x15a)])).to.equal(_0x5474d0[_0x3c1385(0x1a7)]);
                        continue;
                    case '3':
                        _0x5474d0[_0x3c1385(0x1a8)](expect, _0x3719f1[_0x3c1385(0x1b2)]([_0x5474d0[_0x3c1385(0x1b7)], _0x5474d0[_0x3c1385(0x1b8)]])).to[_0x3c1385(0x192)](_0x3c1385(0x1b9));
                        continue;
                    case '4':
                        expect(_0x3719f1[_0x3c1385(0x1b2)]([_0x3c1385(0x15a), _0x5474d0[_0x3c1385(0x1ba)], _0x5474d0[_0x3c1385(0x1bb)]])).to[_0x3c1385(0x192)](_0x5474d0[_0x3c1385(0x1bc)]);
                        continue;
                    case '5':
                        _0x5474d0[_0x3c1385(0x1a8)](expect, _0x3719f1[_0x3c1385(0x1b2)]([_0x5474d0.woDWS, _0x3c1385(0x1bd)])).to[_0x3c1385(0x192)](_0x5474d0[_0x3c1385(0x1b7)]);
                        continue;
                    case '6':
                        _0x5474d0[_0x3c1385(0x1be)](expect, _0x3719f1[_0x3c1385(0x1b2)]([_0x5474d0[_0x3c1385(0x1a7)], _0x3c1385(0x1bf)])).to[_0x3c1385(0x192)](_0x5474d0[_0x3c1385(0x1c0)]);
                        continue;
                    case '7':
                        _0x5474d0[_0x3c1385(0x1be)](expect, _0x3719f1[_0x3c1385(0x1b2)]([_0x5474d0[_0x3c1385(0x1c1)], _0x5474d0.XKOzY])).to.equal(_0x5474d0[_0x3c1385(0x1c1)]);
                        continue;
                    case '8':
                        expect(_0x3719f1[_0x3c1385(0x1b2)]([_0x5474d0.woDWS, '/aws/batch/log1'])).to.equal(_0x5474d0.AOBsZ);
                        continue;
                    case '9':
                        _0x5474d0[_0x3c1385(0x1be)](expect, _0x3719f1[_0x3c1385(0x1b2)]([_0x5474d0[_0x3c1385(0x1c2)], _0x3c1385(0x15f)])).to[_0x3c1385(0x192)](_0x5474d0.fxoPP);
                        continue;
                }
                break;
            }
        }), _0x5474d0[_0x590238(0x1c3)](it, _0x5474d0[_0x590238(0x1c4)], () => {
            const _0x53b1a4 = _0x590238;

            _0x3719f1[_0x53b1a4(0x175)][_0x53b1a4(0x176)]['functions'] = {
                'first': {
                    'events': [{ 'cloudwatchLog': _0x4522d2.CHuoQ }, { 'cloudwatchLog': _0x4522d2.yEbOQ }, { 'cloudwatchLog': _0x4522d2[_0x53b1a4(0x18f)] }, { 'cloudwatchLog': _0x53b1a4(0x15a) }]
                }
            }, _0x4522d2[_0x53b1a4(0x1ae)](expect, () => _0x3719f1[_0x53b1a4(0x195)]()).to[_0x53b1a4(0x1c5)](Error), _0x3719f1[_0x53b1a4(0x175)][_0x53b1a4(0x176)][_0x53b1a4(0x19b)] = {
                'first': {
                    'events': [{ 'cloudwatchLog': _0x4522d2[_0x53b1a4(0x18f)] }, { 'cloudwatchLog': _0x53b1a4(0x15c) }, { 'cloudwatchLog': _0x53b1a4(0x15a) }]
                },
                'second': { 'events': [{ 'cloudwatchLog': _0x4522d2[_0x53b1a4(0x18f)] }] }
            }, _0x4522d2[_0x53b1a4(0x1ae)](expect, () => _0x3719f1[_0x53b1a4(0x195)]()).to[_0x53b1a4(0x1c5)](Error);
        }), _0x5474d0[_0x590238(0x1c6)](it, _0x5474d0[_0x590238(0x1c7)], () => {
            const _0x299067 = _0x590238;

            const _0x482f7a = _0x4522d2[_0x299067(0x1c8)][_0x299067(0x18b)]('|');

            var _0x4f31d5 = 0;

            while (true) {
                switch (_0x482f7a[_0x4f31d5++]) {
                    case '0':
                        expect(_0x3719f1[_0x299067(0x175)].service.provider[_0x299067(0x179)][_0x299067(0x18c)][_0x299067(0x196)][_0x299067(0x18d)].FilterPattern).to[_0x299067(0x192)](_0x4522d2.skxiI);
                        continue;
                    case '1':
                        _0x3719f1[_0x299067(0x175)][_0x299067(0x176)][_0x299067(0x19b)] = { 'first': { 'events': [{ 'cloudwatchLog': _0x4522d2.ziLbA }] } };
                        continue;
                    case '2':
                        _0x4522d2[_0x299067(0x1ae)](expect, _0x3719f1[_0x299067(0x175)][_0x299067(0x176)][_0x299067(0x178)][_0x299067(0x179)].Resources[_0x299067(0x196)].Properties[_0x299067(0x18e)]).to.equal(_0x4522d2[_0x299067(0x1c9)]);
                        continue;
                    case '3':
                        _0x3719f1[_0x299067(0x195)]();
                        continue;
                    case '4':
                        _0x3719f1[_0x299067(0x195)]();
                        continue;
                    case '5':
                        _0x4522d2[_0x299067(0x1ae)](expect, _0x3719f1[_0x299067(0x175)][_0x299067(0x176)][_0x299067(0x178)][_0x299067(0x179)][_0x299067(0x18c)][_0x299067(0x196)][_0x299067(0x18d)][_0x299067(0x18e)]).to[_0x299067(0x192)](_0x299067(0x15a));
                        continue;
                    case '6':
                        _0x3719f1[_0x299067(0x175)][_0x299067(0x176)][_0x299067(0x19b)] = {
                            'first': {
                                'events': [{
                                    'cloudwatchLog': {
                                        'logGroup': _0x4522d2.IXrhx,
                                        'filter': _0x4522d2[_0x299067(0x1ca)]
                                    }
                                }]
                            }
                        };
                        continue;
                }
                break;
            }
        }), it(_0x5474d0[_0x590238(0x1cb)], () => {
            const _0x637a20 = _0x590238;

            _0x3719f1[_0x637a20(0x175)].service['functions'] = { 'first': { 'events': [{}] } }, _0x3719f1[_0x637a20(0x195)](), _0x5474d0[_0x637a20(0x1be)](expect, _0x3719f1[_0x637a20(0x175)].service.provider[_0x637a20(0x179)][_0x637a20(0x18c)]).to[_0x637a20(0x1cc)][_0x637a20(0x192)]({});
        }), _0x5474d0[_0x590238(0x1cd)](it, _0x5474d0[_0x590238(0x1ce)], () => {
            const _0x57a82a = _0x590238;

            _0x3719f1.serverless[_0x57a82a(0x176)][_0x57a82a(0x19b)] = { 'first': {} }, _0x3719f1[_0x57a82a(0x195)](), _0x4522d2[_0x57a82a(0x1cf)](expect, _0x3719f1[_0x57a82a(0x175)][_0x57a82a(0x176)].provider[_0x57a82a(0x179)][_0x57a82a(0x18c)]).to[_0x57a82a(0x1cc)].equal({});
        });
    });
});
