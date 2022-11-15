'use strict';
const _0x465d = [
    'new-service',
    'should\x20set\x20the\x20provider\x20variable\x20to\x20an\x20instance\x20of\x20AwsProvider',
    'instanceof',
    'should\x20create\x20corresponding\x20resources\x20when\x20cloudwatchLog\x20events\x20are\x20given',
    'functions',
    '/aws/lambda/hello2',
    'compileCloudWatchLogEvents',
    'Resources',
    'FirstLogsSubscriptionFilterCloudWatchLog1',
    'Type',
    'AWS::Logs::SubscriptionFilter',
    'FirstLogsSubscriptionFilterCloudWatchLog2',
    'equal',
    'Properties',
    'LogGroupName',
    'FilterPattern',
    'FirstLambdaPermissionLogsSubscriptionFilterCloudWatchLog',
    'AWS::Lambda::Permission',
    '/aws/lambda/hello1',
    'SecondLogsSubscriptionFilterCloudWatchLog1',
    'SecondLambdaPermissionLogsSubscriptionFilterCloudWatchLog',
    'should\x20respect\x20\x22filter\x22\x20variable',
    '{$.userIdentity.type\x20=\x20Root}',
    'should\x20respect\x20\x22filter\x22\x20variable\x20of\x20plain\x20text',
    '\x22Total\x20amount\x22\x20-\x22level=Debug\x22',
    '\x5c\x22Total\x20amount\x5c\x22\x20-\x5c\x22level=Debug\x5c\x22',
    'should\x20set\x20an\x20empty\x20string\x20for\x20FilterPattern\x20statement\x20when\x20\x22filter\x22\x20variable\x20is\x20not\x20given',
    'should\x20create\x20a\x20longest-common\x20suffix\x20of\x20logGroup\x20to\x20minimize\x20scope',
    'longestCommonSuffix',
    '/aws/lambda/hello*',
    '/aws/lambda/h*',
    '/aws/lambda/tweet',
    '/aws/lightsail/log1',
    '/aws/l*',
    '/aws/batch/log1',
    '/aws/*',
    '/aws/lambda/hello',
    '/aws/lambda/*',
    '/aws/lambda/yada-dev-dummy',
    '/aws/lambda/yada-dev-dummy2',
    'should\x20throw\x20an\x20error\x20if\x20\x22logGroup\x22\x20is\x20configured\x20more\x20than\x20twice\x20in\x20one\x20CloudFormation\x20stack',
    'throw',
    'should\x20respect\x20variables\x20if\x20multi-line\x20variables\x20are\x20given',
    '/aws/lam\x0abda/hello1',
    '/aws/lam\x0abda/hello3',
    '/aws/lambda/hello3',
    'should\x20not\x20create\x20corresponding\x20resources\x20when\x20cloudwatchLog\x20event\x20is\x20not\x20given',
    'deep',
    'should\x20not\x20create\x20corresponding\x20resources\x20when\x20\x22events\x22\x20property\x20is\x20not\x20given',
    '1553aVuIAR',
    '7btjHRc',
    '33289LZJtmt',
    '26221yqPyKY',
    '42497zvEEeP',
    '1MejvhL',
    '220062IUvLqL',
    '14891yiBpXE',
    '1mVFuLr',
    '83498vPqVAa',
    '1eOnuNM',
    '../../../../../../../../lib/plugins/aws/provider',
    '../../../../../../../../lib/plugins/aws/package/compile/events/cloudWatchLog',
    'service',
    'provider',
    'compiledCloudFormationTemplate',
    'setProvider',
    'aws',
    'serverless'
];
function _0x4fe1(_0x3c4f68, _0x447319) {
    return _0x4fe1 = function (_0x465d19, _0x4fe1e4) {
        _0x465d19 = _0x465d19 - 0x118;
        let _0x3a5d39 = _0x465d[_0x465d19];
        return _0x3a5d39;
    }, _0x4fe1(_0x3c4f68, _0x447319);
}
const _0x4aab19 = _0x4fe1;
(function (_0xb92f3d, _0x16d405) {
    const _0x59d27a = _0x4fe1;
    while (!![]) {
        try {
            const _0x19cb8e = parseInt(_0x59d27a(0x118)) + parseInt(_0x59d27a(0x119)) * -parseInt(_0x59d27a(0x11a)) + parseInt(_0x59d27a(0x11b)) + parseInt(_0x59d27a(0x11c)) + -parseInt(_0x59d27a(0x11d)) * -parseInt(_0x59d27a(0x11e)) + -parseInt(_0x59d27a(0x11f)) * -parseInt(_0x59d27a(0x120)) + -parseInt(_0x59d27a(0x121)) * -parseInt(_0x59d27a(0x122));
            if (_0x19cb8e === _0x16d405)
                break;
            else
                _0xb92f3d['push'](_0xb92f3d['shift']());
        } catch (_0x1fe4cf) {
            _0xb92f3d['push'](_0xb92f3d['shift']());
        }
    }
}(_0x465d, 0x26033));
const expect = require('chai')['expect'], AwsProvider = require(_0x4aab19(0x123)), AwsCompileCloudWatchLogEvents = require(_0x4aab19(0x124)), Serverless = require('../../../../../../../../lib/Serverless');
describe('AwsCompileCloudWatchLogEvents', () => {
    let _0x16f009, _0x4b0c10;
    beforeEach(() => {
        const _0x52f7cf = _0x4fe1;
        _0x16f009 = new Serverless(), _0x16f009[_0x52f7cf(0x125)][_0x52f7cf(0x126)][_0x52f7cf(0x127)] = { 'Resources': {} }, _0x16f009[_0x52f7cf(0x128)](_0x52f7cf(0x129), new AwsProvider(_0x16f009)), _0x4b0c10 = new AwsCompileCloudWatchLogEvents(_0x16f009), _0x4b0c10[_0x52f7cf(0x12a)][_0x52f7cf(0x125)][_0x52f7cf(0x125)] = _0x52f7cf(0x12b);
    }), describe('#constructor()', () => {
        const _0x4f35f5 = _0x4fe1;
        it(_0x4f35f5(0x12c), () => expect(_0x4b0c10[_0x4f35f5(0x126)])['to']['be'][_0x4f35f5(0x12d)](AwsProvider));
    }), describe('#compileCloudWatchLogEvents()', () => {
        const _0x4877eb = _0x4fe1;
        it(_0x4877eb(0x12e), () => {
            const _0xaddaf1 = _0x4877eb;
            _0x4b0c10[_0xaddaf1(0x12a)]['service'][_0xaddaf1(0x12f)] = {
                'first': {
                    'events': [
                        { 'cloudwatchLog': { 'logGroup': '/aws/lambda/hello1' } },
                        { 'cloudwatchLog': { 'logGroup': _0xaddaf1(0x130) } }
                    ]
                }
            }, _0x4b0c10[_0xaddaf1(0x131)](), expect(_0x4b0c10['serverless']['service'][_0xaddaf1(0x126)][_0xaddaf1(0x127)][_0xaddaf1(0x132)][_0xaddaf1(0x133)][_0xaddaf1(0x134)])['to']['equal'](_0xaddaf1(0x135)), expect(_0x4b0c10[_0xaddaf1(0x12a)]['service'][_0xaddaf1(0x126)][_0xaddaf1(0x127)][_0xaddaf1(0x132)][_0xaddaf1(0x136)][_0xaddaf1(0x134)])['to'][_0xaddaf1(0x137)](_0xaddaf1(0x135)), expect(_0x4b0c10[_0xaddaf1(0x12a)]['service']['provider'][_0xaddaf1(0x127)][_0xaddaf1(0x132)]['FirstLogsSubscriptionFilterCloudWatchLog1'][_0xaddaf1(0x138)][_0xaddaf1(0x139)])['to']['equal']('/aws/lambda/hello1'), expect(_0x4b0c10[_0xaddaf1(0x12a)][_0xaddaf1(0x125)][_0xaddaf1(0x126)][_0xaddaf1(0x127)][_0xaddaf1(0x132)][_0xaddaf1(0x136)][_0xaddaf1(0x138)][_0xaddaf1(0x139)])['to'][_0xaddaf1(0x137)]('/aws/lambda/hello2'), expect(_0x4b0c10['serverless']['service'][_0xaddaf1(0x126)]['compiledCloudFormationTemplate'][_0xaddaf1(0x132)][_0xaddaf1(0x133)][_0xaddaf1(0x138)][_0xaddaf1(0x13a)])['to'][_0xaddaf1(0x137)](''), expect(_0x4b0c10[_0xaddaf1(0x12a)][_0xaddaf1(0x125)]['provider'][_0xaddaf1(0x127)]['Resources'][_0xaddaf1(0x136)][_0xaddaf1(0x138)][_0xaddaf1(0x13a)])['to'][_0xaddaf1(0x137)](''), expect(_0x4b0c10[_0xaddaf1(0x12a)][_0xaddaf1(0x125)][_0xaddaf1(0x126)]['compiledCloudFormationTemplate'][_0xaddaf1(0x132)][_0xaddaf1(0x13b)][_0xaddaf1(0x134)])['to'][_0xaddaf1(0x137)](_0xaddaf1(0x13c));
        }), it('should\x20respect\x202\x20cloudwatchLog\x20events\x20for\x20log\x20group', () => {
            const _0x2a190a = _0x4877eb;
            _0x4b0c10[_0x2a190a(0x12a)]['service'][_0x2a190a(0x12f)] = {
                'first': { 'events': [{ 'cloudwatchLog': { 'logGroup': _0x2a190a(0x13d) } }] },
                'second': { 'events': [{ 'cloudwatchLog': { 'logGroup': '/aws/lambda/hello1' } }] }
            }, _0x4b0c10[_0x2a190a(0x131)](), expect(_0x4b0c10[_0x2a190a(0x12a)][_0x2a190a(0x125)][_0x2a190a(0x126)][_0x2a190a(0x127)]['Resources'][_0x2a190a(0x133)]['Type'])['to'][_0x2a190a(0x137)](_0x2a190a(0x135)), expect(_0x4b0c10['serverless']['service'][_0x2a190a(0x126)][_0x2a190a(0x127)][_0x2a190a(0x132)][_0x2a190a(0x133)][_0x2a190a(0x138)][_0x2a190a(0x139)])['to'][_0x2a190a(0x137)](_0x2a190a(0x13d)), expect(_0x4b0c10[_0x2a190a(0x12a)]['service']['provider']['compiledCloudFormationTemplate']['Resources'][_0x2a190a(0x133)][_0x2a190a(0x138)][_0x2a190a(0x13a)])['to'][_0x2a190a(0x137)](''), expect(_0x4b0c10[_0x2a190a(0x12a)][_0x2a190a(0x125)][_0x2a190a(0x126)][_0x2a190a(0x127)][_0x2a190a(0x132)][_0x2a190a(0x13b)][_0x2a190a(0x134)])['to'][_0x2a190a(0x137)](_0x2a190a(0x13c)), expect(_0x4b0c10[_0x2a190a(0x12a)]['service'][_0x2a190a(0x126)]['compiledCloudFormationTemplate'][_0x2a190a(0x132)]['SecondLogsSubscriptionFilterCloudWatchLog1']['Type'])['to'][_0x2a190a(0x137)]('AWS::Logs::SubscriptionFilter'), expect(_0x4b0c10[_0x2a190a(0x12a)][_0x2a190a(0x125)][_0x2a190a(0x126)][_0x2a190a(0x127)]['Resources'][_0x2a190a(0x13e)][_0x2a190a(0x138)]['LogGroupName'])['to'][_0x2a190a(0x137)](_0x2a190a(0x13d)), expect(_0x4b0c10['serverless'][_0x2a190a(0x125)][_0x2a190a(0x126)][_0x2a190a(0x127)][_0x2a190a(0x132)]['SecondLogsSubscriptionFilterCloudWatchLog1'][_0x2a190a(0x138)][_0x2a190a(0x13a)])['to'][_0x2a190a(0x137)](''), expect(_0x4b0c10[_0x2a190a(0x12a)]['service'][_0x2a190a(0x126)][_0x2a190a(0x127)][_0x2a190a(0x132)][_0x2a190a(0x13f)][_0x2a190a(0x134)])['to'][_0x2a190a(0x137)](_0x2a190a(0x13c));
        }), it(_0x4877eb(0x140), () => {
            const _0x960a26 = _0x4877eb;
            _0x4b0c10['serverless'][_0x960a26(0x125)][_0x960a26(0x12f)] = {
                'first': {
                    'events': [{
                            'cloudwatchLog': {
                                'logGroup': _0x960a26(0x13d),
                                'filter': _0x960a26(0x141)
                            }
                        }]
                }
            }, _0x4b0c10[_0x960a26(0x131)](), expect(_0x4b0c10[_0x960a26(0x12a)][_0x960a26(0x125)][_0x960a26(0x126)][_0x960a26(0x127)][_0x960a26(0x132)][_0x960a26(0x133)][_0x960a26(0x138)][_0x960a26(0x13a)])['to']['equal']('{$.userIdentity.type\x20=\x20Root}');
        }), it(_0x4877eb(0x142), () => {
            const _0x38f183 = _0x4877eb;
            _0x4b0c10[_0x38f183(0x12a)][_0x38f183(0x125)][_0x38f183(0x12f)] = {
                'first': {
                    'events': [{
                            'cloudwatchLog': {
                                'logGroup': _0x38f183(0x13d),
                                'filter': _0x38f183(0x143)
                            }
                        }]
                }
            }, _0x4b0c10[_0x38f183(0x131)](), expect(_0x4b0c10[_0x38f183(0x12a)][_0x38f183(0x125)]['provider'][_0x38f183(0x127)][_0x38f183(0x132)][_0x38f183(0x133)]['Properties'][_0x38f183(0x13a)])['to']['equal'](_0x38f183(0x143));
        }), it('should\x20respect\x20escaped\x20\x22filter\x22\x20variable\x20of\x20plain\x20text', () => {
            const _0x478530 = _0x4877eb;
            _0x4b0c10['serverless']['service'][_0x478530(0x12f)] = {
                'first': {
                    'events': [{
                            'cloudwatchLog': {
                                'logGroup': _0x478530(0x13d),
                                'filter': _0x478530(0x144)
                            }
                        }]
                }
            }, _0x4b0c10[_0x478530(0x131)](), expect(_0x4b0c10[_0x478530(0x12a)][_0x478530(0x125)][_0x478530(0x126)][_0x478530(0x127)]['Resources'][_0x478530(0x133)][_0x478530(0x138)][_0x478530(0x13a)])['to'][_0x478530(0x137)](_0x478530(0x143));
        }), it(_0x4877eb(0x145), () => {
            const _0x12b906 = _0x4877eb;
            _0x4b0c10[_0x12b906(0x12a)]['service'][_0x12b906(0x12f)] = { 'first': { 'events': [{ 'cloudwatchLog': { 'logGroup': _0x12b906(0x13d) } }] } }, _0x4b0c10[_0x12b906(0x131)](), expect(_0x4b0c10[_0x12b906(0x12a)][_0x12b906(0x125)][_0x12b906(0x126)]['compiledCloudFormationTemplate'][_0x12b906(0x132)]['FirstLogsSubscriptionFilterCloudWatchLog1'][_0x12b906(0x138)][_0x12b906(0x13a)])['to'][_0x12b906(0x137)]('');
        }), it('should\x20create\x20corresponding\x20resources\x20when\x20cloudwatchLog\x20events\x20are\x20given\x20as\x20a\x20string', () => {
            const _0x3a23fd = _0x4877eb;
            _0x4b0c10[_0x3a23fd(0x12a)][_0x3a23fd(0x125)]['functions'] = {
                'first': {
                    'events': [
                        { 'cloudwatchLog': _0x3a23fd(0x13d) },
                        { 'cloudwatchLog': _0x3a23fd(0x130) }
                    ]
                }
            }, _0x4b0c10[_0x3a23fd(0x131)](), expect(_0x4b0c10['serverless']['service'][_0x3a23fd(0x126)][_0x3a23fd(0x127)][_0x3a23fd(0x132)][_0x3a23fd(0x133)][_0x3a23fd(0x134)])['to'][_0x3a23fd(0x137)](_0x3a23fd(0x135)), expect(_0x4b0c10[_0x3a23fd(0x12a)]['service'][_0x3a23fd(0x126)][_0x3a23fd(0x127)][_0x3a23fd(0x132)]['FirstLogsSubscriptionFilterCloudWatchLog2'][_0x3a23fd(0x134)])['to'][_0x3a23fd(0x137)](_0x3a23fd(0x135)), expect(_0x4b0c10[_0x3a23fd(0x12a)][_0x3a23fd(0x125)][_0x3a23fd(0x126)][_0x3a23fd(0x127)][_0x3a23fd(0x132)][_0x3a23fd(0x133)][_0x3a23fd(0x138)][_0x3a23fd(0x139)])['to']['equal']('/aws/lambda/hello1'), expect(_0x4b0c10['serverless'][_0x3a23fd(0x125)][_0x3a23fd(0x126)][_0x3a23fd(0x127)][_0x3a23fd(0x132)][_0x3a23fd(0x136)][_0x3a23fd(0x138)]['LogGroupName'])['to'][_0x3a23fd(0x137)](_0x3a23fd(0x130)), expect(_0x4b0c10['serverless']['service'][_0x3a23fd(0x126)][_0x3a23fd(0x127)][_0x3a23fd(0x132)][_0x3a23fd(0x133)]['Properties']['FilterPattern'])['to']['equal'](''), expect(_0x4b0c10[_0x3a23fd(0x12a)][_0x3a23fd(0x125)]['provider'][_0x3a23fd(0x127)][_0x3a23fd(0x132)][_0x3a23fd(0x136)][_0x3a23fd(0x138)][_0x3a23fd(0x13a)])['to'][_0x3a23fd(0x137)](''), expect(_0x4b0c10['serverless'][_0x3a23fd(0x125)][_0x3a23fd(0x126)][_0x3a23fd(0x127)][_0x3a23fd(0x132)]['FirstLambdaPermissionLogsSubscriptionFilterCloudWatchLog'][_0x3a23fd(0x134)])['to'][_0x3a23fd(0x137)](_0x3a23fd(0x13c));
        }), it(_0x4877eb(0x146), () => {
            const _0x3fee9c = _0x4877eb;
            expect(_0x4b0c10[_0x3fee9c(0x147)]([_0x3fee9c(0x13d)]))['to'][_0x3fee9c(0x137)](_0x3fee9c(0x13d)), expect(_0x4b0c10[_0x3fee9c(0x147)]([
                _0x3fee9c(0x13d),
                '/aws/lambda/hello2'
            ]))['to'][_0x3fee9c(0x137)](_0x3fee9c(0x148)), expect(_0x4b0c10[_0x3fee9c(0x147)]([
                _0x3fee9c(0x13d),
                '/aws/lambda/hot'
            ]))['to']['equal'](_0x3fee9c(0x149)), expect(_0x4b0c10['longestCommonSuffix']([
                _0x3fee9c(0x13d),
                _0x3fee9c(0x14a)
            ]))['to']['equal']('/aws/lambda/*'), expect(_0x4b0c10['longestCommonSuffix']([
                _0x3fee9c(0x13d),
                '/aws/lex/log1',
                _0x3fee9c(0x14b)
            ]))['to'][_0x3fee9c(0x137)](_0x3fee9c(0x14c)), expect(_0x4b0c10[_0x3fee9c(0x147)]([
                _0x3fee9c(0x13d),
                _0x3fee9c(0x14d)
            ]))['to'][_0x3fee9c(0x137)](_0x3fee9c(0x14e)), expect(_0x4b0c10[_0x3fee9c(0x147)]([
                _0x3fee9c(0x14e),
                _0x3fee9c(0x14f)
            ]))['to'][_0x3fee9c(0x137)](_0x3fee9c(0x14e)), expect(_0x4b0c10['longestCommonSuffix']([
                _0x3fee9c(0x150),
                _0x3fee9c(0x14f)
            ]))['to']['equal'](_0x3fee9c(0x150)), expect(_0x4b0c10[_0x3fee9c(0x147)]([
                '/aws/lambda',
                _0x3fee9c(0x14f)
            ]))['to'][_0x3fee9c(0x137)]('/aws/lambda*'), expect(_0x4b0c10[_0x3fee9c(0x147)]([
                _0x3fee9c(0x151),
                _0x3fee9c(0x152)
            ]))['to']['equal']('/aws/lambda/yada-dev-dummy*');
        }), it(_0x4877eb(0x153), () => {
            const _0x48fde2 = _0x4877eb;
            _0x4b0c10[_0x48fde2(0x12a)][_0x48fde2(0x125)][_0x48fde2(0x12f)] = {
                'first': {
                    'events': [
                        { 'cloudwatchLog': _0x48fde2(0x13d) },
                        { 'cloudwatchLog': _0x48fde2(0x130) },
                        { 'cloudwatchLog': _0x48fde2(0x13d) },
                        { 'cloudwatchLog': _0x48fde2(0x13d) }
                    ]
                }
            }, expect(() => _0x4b0c10[_0x48fde2(0x131)]())['to'][_0x48fde2(0x154)](Error), _0x4b0c10[_0x48fde2(0x12a)][_0x48fde2(0x125)][_0x48fde2(0x12f)] = {
                'first': {
                    'events': [
                        { 'cloudwatchLog': _0x48fde2(0x13d) },
                        { 'cloudwatchLog': _0x48fde2(0x130) },
                        { 'cloudwatchLog': _0x48fde2(0x13d) }
                    ]
                },
                'second': { 'events': [{ 'cloudwatchLog': _0x48fde2(0x13d) }] }
            }, expect(() => _0x4b0c10['compileCloudWatchLogEvents']())['to']['throw'](Error);
        }), it(_0x4877eb(0x155), () => {
            const _0x245980 = _0x4877eb;
            _0x4b0c10[_0x245980(0x12a)][_0x245980(0x125)][_0x245980(0x12f)] = {
                'first': {
                    'events': [{
                            'cloudwatchLog': {
                                'logGroup': _0x245980(0x156),
                                'filter': '{$.userIden\x0atity.type\x20=\x20Root}'
                            }
                        }]
                }
            }, _0x4b0c10['compileCloudWatchLogEvents'](), expect(_0x4b0c10[_0x245980(0x12a)]['service'][_0x245980(0x126)][_0x245980(0x127)]['Resources'][_0x245980(0x133)][_0x245980(0x138)][_0x245980(0x139)])['to']['equal'](_0x245980(0x13d)), expect(_0x4b0c10[_0x245980(0x12a)][_0x245980(0x125)][_0x245980(0x126)][_0x245980(0x127)][_0x245980(0x132)]['FirstLogsSubscriptionFilterCloudWatchLog1'][_0x245980(0x138)][_0x245980(0x13a)])['to']['equal']('{$.userIdentity.type\x20=\x20Root}'), _0x4b0c10[_0x245980(0x12a)][_0x245980(0x125)]['functions'] = { 'first': { 'events': [{ 'cloudwatchLog': _0x245980(0x157) }] } }, _0x4b0c10[_0x245980(0x131)](), expect(_0x4b0c10[_0x245980(0x12a)]['service']['provider'][_0x245980(0x127)][_0x245980(0x132)][_0x245980(0x133)][_0x245980(0x138)]['LogGroupName'])['to'][_0x245980(0x137)](_0x245980(0x158));
        }), it(_0x4877eb(0x159), () => {
            const _0x33d604 = _0x4877eb;
            _0x4b0c10[_0x33d604(0x12a)][_0x33d604(0x125)]['functions'] = { 'first': { 'events': [{}] } }, _0x4b0c10['compileCloudWatchLogEvents'](), expect(_0x4b0c10['serverless'][_0x33d604(0x125)]['provider']['compiledCloudFormationTemplate'][_0x33d604(0x132)])['to'][_0x33d604(0x15a)]['equal']({});
        }), it(_0x4877eb(0x15b), () => {
            const _0x3a1c16 = _0x4877eb;
            _0x4b0c10[_0x3a1c16(0x12a)][_0x3a1c16(0x125)][_0x3a1c16(0x12f)] = { 'first': {} }, _0x4b0c10[_0x3a1c16(0x131)](), expect(_0x4b0c10[_0x3a1c16(0x12a)][_0x3a1c16(0x125)]['provider']['compiledCloudFormationTemplate']['Resources'])['to'][_0x3a1c16(0x15a)][_0x3a1c16(0x137)]({});
        });
    });
});
