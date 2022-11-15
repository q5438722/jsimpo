const expect = require('chai')['expect'], AwsProvider = require(_0x4aab19(291)), AwsCompileCloudWatchLogEvents = require(_0x4aab19(292)), Serverless = require('../../../../../../../../lib/Serverless');
describe('AwsCompileCloudWatchLogEvents', () => {
    let _0x16f009, _0x4b0c10;
    beforeEach(() => {
        const _0x52f7cf = _0x4fe1;
        _0x16f009 = new Serverless(), _0x16f009[_0x52f7cf(293)][_0x52f7cf(294)][_0x52f7cf(295)] = { 'Resources': {} }, _0x16f009[_0x52f7cf(296)](_0x52f7cf(297), new AwsProvider(_0x16f009)), _0x4b0c10 = new AwsCompileCloudWatchLogEvents(_0x16f009), _0x4b0c10[_0x52f7cf(298)][_0x52f7cf(293)][_0x52f7cf(293)] = _0x52f7cf(299);
    }), describe('#constructor()', () => {
        const _0x4f35f5 = _0x4fe1;
        it(_0x4f35f5(300), () => expect(_0x4b0c10[_0x4f35f5(294)])['to']['be'][_0x4f35f5(301)](AwsProvider));
    }), describe('#compileCloudWatchLogEvents()', () => {
        const _0x4877eb = _0x4fe1;
        it(_0x4877eb(302), () => {
            const _0xaddaf1 = _0x4877eb;
            _0x4b0c10[_0xaddaf1(298)]['service'][_0xaddaf1(303)] = {
                'first': {
                    'events': [
                        { 'cloudwatchLog': { 'logGroup': '/aws/lambda/hello1' } },
                        { 'cloudwatchLog': { 'logGroup': _0xaddaf1(304) } }
                    ]
                }
            }, _0x4b0c10[_0xaddaf1(305)](), expect(_0x4b0c10['serverless']['service'][_0xaddaf1(294)][_0xaddaf1(295)][_0xaddaf1(306)][_0xaddaf1(307)][_0xaddaf1(308)])['to']['equal'](_0xaddaf1(309)), expect(_0x4b0c10[_0xaddaf1(298)]['service'][_0xaddaf1(294)][_0xaddaf1(295)][_0xaddaf1(306)][_0xaddaf1(310)][_0xaddaf1(308)])['to'][_0xaddaf1(311)](_0xaddaf1(309)), expect(_0x4b0c10[_0xaddaf1(298)]['service']['provider'][_0xaddaf1(295)][_0xaddaf1(306)]['FirstLogsSubscriptionFilterCloudWatchLog1'][_0xaddaf1(312)][_0xaddaf1(313)])['to']['equal']('/aws/lambda/hello1'), expect(_0x4b0c10[_0xaddaf1(298)][_0xaddaf1(293)][_0xaddaf1(294)][_0xaddaf1(295)][_0xaddaf1(306)][_0xaddaf1(310)][_0xaddaf1(312)][_0xaddaf1(313)])['to'][_0xaddaf1(311)]('/aws/lambda/hello2'), expect(_0x4b0c10['serverless']['service'][_0xaddaf1(294)]['compiledCloudFormationTemplate'][_0xaddaf1(306)][_0xaddaf1(307)][_0xaddaf1(312)][_0xaddaf1(314)])['to'][_0xaddaf1(311)](''), expect(_0x4b0c10[_0xaddaf1(298)][_0xaddaf1(293)]['provider'][_0xaddaf1(295)]['Resources'][_0xaddaf1(310)][_0xaddaf1(312)][_0xaddaf1(314)])['to'][_0xaddaf1(311)](''), expect(_0x4b0c10[_0xaddaf1(298)][_0xaddaf1(293)][_0xaddaf1(294)]['compiledCloudFormationTemplate'][_0xaddaf1(306)][_0xaddaf1(315)][_0xaddaf1(308)])['to'][_0xaddaf1(311)](_0xaddaf1(316));
        }), it('should respect 2 cloudwatchLog events for log group', () => {
            const _0x2a190a = _0x4877eb;
            _0x4b0c10[_0x2a190a(298)]['service'][_0x2a190a(303)] = {
                'first': { 'events': [{ 'cloudwatchLog': { 'logGroup': _0x2a190a(317) } }] },
                'second': { 'events': [{ 'cloudwatchLog': { 'logGroup': '/aws/lambda/hello1' } }] }
            }, _0x4b0c10[_0x2a190a(305)](), expect(_0x4b0c10[_0x2a190a(298)][_0x2a190a(293)][_0x2a190a(294)][_0x2a190a(295)]['Resources'][_0x2a190a(307)]['Type'])['to'][_0x2a190a(311)](_0x2a190a(309)), expect(_0x4b0c10['serverless']['service'][_0x2a190a(294)][_0x2a190a(295)][_0x2a190a(306)][_0x2a190a(307)][_0x2a190a(312)][_0x2a190a(313)])['to'][_0x2a190a(311)](_0x2a190a(317)), expect(_0x4b0c10[_0x2a190a(298)]['service']['provider']['compiledCloudFormationTemplate']['Resources'][_0x2a190a(307)][_0x2a190a(312)][_0x2a190a(314)])['to'][_0x2a190a(311)](''), expect(_0x4b0c10[_0x2a190a(298)][_0x2a190a(293)][_0x2a190a(294)][_0x2a190a(295)][_0x2a190a(306)][_0x2a190a(315)][_0x2a190a(308)])['to'][_0x2a190a(311)](_0x2a190a(316)), expect(_0x4b0c10[_0x2a190a(298)]['service'][_0x2a190a(294)]['compiledCloudFormationTemplate'][_0x2a190a(306)]['SecondLogsSubscriptionFilterCloudWatchLog1']['Type'])['to'][_0x2a190a(311)]('AWS::Logs::SubscriptionFilter'), expect(_0x4b0c10[_0x2a190a(298)][_0x2a190a(293)][_0x2a190a(294)][_0x2a190a(295)]['Resources'][_0x2a190a(318)][_0x2a190a(312)]['LogGroupName'])['to'][_0x2a190a(311)](_0x2a190a(317)), expect(_0x4b0c10['serverless'][_0x2a190a(293)][_0x2a190a(294)][_0x2a190a(295)][_0x2a190a(306)]['SecondLogsSubscriptionFilterCloudWatchLog1'][_0x2a190a(312)][_0x2a190a(314)])['to'][_0x2a190a(311)](''), expect(_0x4b0c10[_0x2a190a(298)]['service'][_0x2a190a(294)][_0x2a190a(295)][_0x2a190a(306)][_0x2a190a(319)][_0x2a190a(308)])['to'][_0x2a190a(311)](_0x2a190a(316));
        }), it(_0x4877eb(320), () => {
            const _0x960a26 = _0x4877eb;
            _0x4b0c10['serverless'][_0x960a26(293)][_0x960a26(303)] = {
                'first': {
                    'events': [{
                            'cloudwatchLog': {
                                'logGroup': _0x960a26(317),
                                'filter': _0x960a26(321)
                            }
                        }]
                }
            }, _0x4b0c10[_0x960a26(305)](), expect(_0x4b0c10[_0x960a26(298)][_0x960a26(293)][_0x960a26(294)][_0x960a26(295)][_0x960a26(306)][_0x960a26(307)][_0x960a26(312)][_0x960a26(314)])['to']['equal']('{$.userIdentity.type = Root}');
        }), it(_0x4877eb(322), () => {
            const _0x38f183 = _0x4877eb;
            _0x4b0c10[_0x38f183(298)][_0x38f183(293)][_0x38f183(303)] = {
                'first': {
                    'events': [{
                            'cloudwatchLog': {
                                'logGroup': _0x38f183(317),
                                'filter': _0x38f183(323)
                            }
                        }]
                }
            }, _0x4b0c10[_0x38f183(305)](), expect(_0x4b0c10[_0x38f183(298)][_0x38f183(293)]['provider'][_0x38f183(295)][_0x38f183(306)][_0x38f183(307)]['Properties'][_0x38f183(314)])['to']['equal'](_0x38f183(323));
        }), it('should respect escaped "filter" variable of plain text', () => {
            const _0x478530 = _0x4877eb;
            _0x4b0c10['serverless']['service'][_0x478530(303)] = {
                'first': {
                    'events': [{
                            'cloudwatchLog': {
                                'logGroup': _0x478530(317),
                                'filter': _0x478530(324)
                            }
                        }]
                }
            }, _0x4b0c10[_0x478530(305)](), expect(_0x4b0c10[_0x478530(298)][_0x478530(293)][_0x478530(294)][_0x478530(295)]['Resources'][_0x478530(307)][_0x478530(312)][_0x478530(314)])['to'][_0x478530(311)](_0x478530(323));
        }), it(_0x4877eb(325), () => {
            const _0x12b906 = _0x4877eb;
            _0x4b0c10[_0x12b906(298)]['service'][_0x12b906(303)] = { 'first': { 'events': [{ 'cloudwatchLog': { 'logGroup': _0x12b906(317) } }] } }, _0x4b0c10[_0x12b906(305)](), expect(_0x4b0c10[_0x12b906(298)][_0x12b906(293)][_0x12b906(294)]['compiledCloudFormationTemplate'][_0x12b906(306)]['FirstLogsSubscriptionFilterCloudWatchLog1'][_0x12b906(312)][_0x12b906(314)])['to'][_0x12b906(311)]('');
        }), it('should create corresponding resources when cloudwatchLog events are given as a string', () => {
            const _0x3a23fd = _0x4877eb;
            _0x4b0c10[_0x3a23fd(298)][_0x3a23fd(293)]['functions'] = {
                'first': {
                    'events': [
                        { 'cloudwatchLog': _0x3a23fd(317) },
                        { 'cloudwatchLog': _0x3a23fd(304) }
                    ]
                }
            }, _0x4b0c10[_0x3a23fd(305)](), expect(_0x4b0c10['serverless']['service'][_0x3a23fd(294)][_0x3a23fd(295)][_0x3a23fd(306)][_0x3a23fd(307)][_0x3a23fd(308)])['to'][_0x3a23fd(311)](_0x3a23fd(309)), expect(_0x4b0c10[_0x3a23fd(298)]['service'][_0x3a23fd(294)][_0x3a23fd(295)][_0x3a23fd(306)]['FirstLogsSubscriptionFilterCloudWatchLog2'][_0x3a23fd(308)])['to'][_0x3a23fd(311)](_0x3a23fd(309)), expect(_0x4b0c10[_0x3a23fd(298)][_0x3a23fd(293)][_0x3a23fd(294)][_0x3a23fd(295)][_0x3a23fd(306)][_0x3a23fd(307)][_0x3a23fd(312)][_0x3a23fd(313)])['to']['equal']('/aws/lambda/hello1'), expect(_0x4b0c10['serverless'][_0x3a23fd(293)][_0x3a23fd(294)][_0x3a23fd(295)][_0x3a23fd(306)][_0x3a23fd(310)][_0x3a23fd(312)]['LogGroupName'])['to'][_0x3a23fd(311)](_0x3a23fd(304)), expect(_0x4b0c10['serverless']['service'][_0x3a23fd(294)][_0x3a23fd(295)][_0x3a23fd(306)][_0x3a23fd(307)]['Properties']['FilterPattern'])['to']['equal'](''), expect(_0x4b0c10[_0x3a23fd(298)][_0x3a23fd(293)]['provider'][_0x3a23fd(295)][_0x3a23fd(306)][_0x3a23fd(310)][_0x3a23fd(312)][_0x3a23fd(314)])['to'][_0x3a23fd(311)](''), expect(_0x4b0c10['serverless'][_0x3a23fd(293)][_0x3a23fd(294)][_0x3a23fd(295)][_0x3a23fd(306)]['FirstLambdaPermissionLogsSubscriptionFilterCloudWatchLog'][_0x3a23fd(308)])['to'][_0x3a23fd(311)](_0x3a23fd(316));
        }), it(_0x4877eb(326), () => {
            const _0x3fee9c = _0x4877eb;
            expect(_0x4b0c10[_0x3fee9c(327)]([_0x3fee9c(317)]))['to'][_0x3fee9c(311)](_0x3fee9c(317)), expect(_0x4b0c10[_0x3fee9c(327)]([
                _0x3fee9c(317),
                '/aws/lambda/hello2'
            ]))['to'][_0x3fee9c(311)](_0x3fee9c(328)), expect(_0x4b0c10[_0x3fee9c(327)]([
                _0x3fee9c(317),
                '/aws/lambda/hot'
            ]))['to']['equal'](_0x3fee9c(329)), expect(_0x4b0c10['longestCommonSuffix']([
                _0x3fee9c(317),
                _0x3fee9c(330)
            ]))['to']['equal']('/aws/lambda/*'), expect(_0x4b0c10['longestCommonSuffix']([
                _0x3fee9c(317),
                '/aws/lex/log1',
                _0x3fee9c(331)
            ]))['to'][_0x3fee9c(311)](_0x3fee9c(332)), expect(_0x4b0c10[_0x3fee9c(327)]([
                _0x3fee9c(317),
                _0x3fee9c(333)
            ]))['to'][_0x3fee9c(311)](_0x3fee9c(334)), expect(_0x4b0c10[_0x3fee9c(327)]([
                _0x3fee9c(334),
                _0x3fee9c(335)
            ]))['to'][_0x3fee9c(311)](_0x3fee9c(334)), expect(_0x4b0c10['longestCommonSuffix']([
                _0x3fee9c(336),
                _0x3fee9c(335)
            ]))['to']['equal'](_0x3fee9c(336)), expect(_0x4b0c10[_0x3fee9c(327)]([
                '/aws/lambda',
                _0x3fee9c(335)
            ]))['to'][_0x3fee9c(311)]('/aws/lambda*'), expect(_0x4b0c10[_0x3fee9c(327)]([
                _0x3fee9c(337),
                _0x3fee9c(338)
            ]))['to']['equal']('/aws/lambda/yada-dev-dummy*');
        }), it(_0x4877eb(339), () => {
            const _0x48fde2 = _0x4877eb;
            _0x4b0c10[_0x48fde2(298)][_0x48fde2(293)][_0x48fde2(303)] = {
                'first': {
                    'events': [
                        { 'cloudwatchLog': _0x48fde2(317) },
                        { 'cloudwatchLog': _0x48fde2(304) },
                        { 'cloudwatchLog': _0x48fde2(317) },
                        { 'cloudwatchLog': _0x48fde2(317) }
                    ]
                }
            }, expect(() => _0x4b0c10[_0x48fde2(305)]())['to'][_0x48fde2(340)](Error), _0x4b0c10[_0x48fde2(298)][_0x48fde2(293)][_0x48fde2(303)] = {
                'first': {
                    'events': [
                        { 'cloudwatchLog': _0x48fde2(317) },
                        { 'cloudwatchLog': _0x48fde2(304) },
                        { 'cloudwatchLog': _0x48fde2(317) }
                    ]
                },
                'second': { 'events': [{ 'cloudwatchLog': _0x48fde2(317) }] }
            }, expect(() => _0x4b0c10['compileCloudWatchLogEvents']())['to']['throw'](Error);
        }), it(_0x4877eb(341), () => {
            const _0x245980 = _0x4877eb;
            _0x4b0c10[_0x245980(298)][_0x245980(293)][_0x245980(303)] = {
                'first': {
                    'events': [{
                            'cloudwatchLog': {
                                'logGroup': _0x245980(342),
                                'filter': '{$.userIden\ntity.type = Root}'
                            }
                        }]
                }
            }, _0x4b0c10['compileCloudWatchLogEvents'](), expect(_0x4b0c10[_0x245980(298)]['service'][_0x245980(294)][_0x245980(295)]['Resources'][_0x245980(307)][_0x245980(312)][_0x245980(313)])['to']['equal'](_0x245980(317)), expect(_0x4b0c10[_0x245980(298)][_0x245980(293)][_0x245980(294)][_0x245980(295)][_0x245980(306)]['FirstLogsSubscriptionFilterCloudWatchLog1'][_0x245980(312)][_0x245980(314)])['to']['equal']('{$.userIdentity.type = Root}'), _0x4b0c10[_0x245980(298)][_0x245980(293)]['functions'] = { 'first': { 'events': [{ 'cloudwatchLog': _0x245980(343) }] } }, _0x4b0c10[_0x245980(305)](), expect(_0x4b0c10[_0x245980(298)]['service']['provider'][_0x245980(295)][_0x245980(306)][_0x245980(307)][_0x245980(312)]['LogGroupName'])['to'][_0x245980(311)](_0x245980(344));
        }), it(_0x4877eb(345), () => {
            const _0x33d604 = _0x4877eb;
            _0x4b0c10[_0x33d604(298)][_0x33d604(293)]['functions'] = { 'first': { 'events': [{}] } }, _0x4b0c10['compileCloudWatchLogEvents'](), expect(_0x4b0c10['serverless'][_0x33d604(293)]['provider']['compiledCloudFormationTemplate'][_0x33d604(306)])['to'][_0x33d604(346)]['equal']({});
        }), it(_0x4877eb(347), () => {
            const _0x3a1c16 = _0x4877eb;
            _0x4b0c10[_0x3a1c16(298)][_0x3a1c16(293)][_0x3a1c16(303)] = { 'first': {} }, _0x4b0c10[_0x3a1c16(305)](), expect(_0x4b0c10[_0x3a1c16(298)][_0x3a1c16(293)]['provider']['compiledCloudFormationTemplate']['Resources'])['to'][_0x3a1c16(346)][_0x3a1c16(311)]({});
        });
    });
});