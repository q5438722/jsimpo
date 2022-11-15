var _0x5599 = [
    'showFirstLaunchTooltip',
    'document',
    'find',
    '#healthdata-firstlaunch-popup',
    'length',
    'toBe',
    'HealthDataPreview',
    'should\x20show\x20file\x20preview\x20dialog',
    'previewHealthData',
    'Health\x20Data\x20File\x20Preview',
    '.health-data-preview.instance',
    '84059tzxeGB',
    '1IXUWQe',
    '620600hDPXcN',
    '7NpHmLL',
    '9836uYEqSo',
    '170735CNrmOU',
    '4xjKgot',
    '1049768dXxlbK',
    '967238SPlfgH',
    '1941351JHaOab',
    'getModule',
    'spec/SpecRunnerUtils',
    'HealthData',
    'createTestWindowAndRun',
    'Data\x20Send\x20to\x20Server',
    'brackets',
    'test',
    'getExtensionPrefs',
    'healthData',
    'addMatchers',
    'Expected\x20',
    'actual',
    '\x20to\x20be\x20>=\x20',
    'should\x20send\x20data\x20to\x20server\x20when\x20opted\x20in',
    'now',
    'setViewState',
    'nextHealthDataSendTime',
    'healthDataNotificationShown',
    'checkHealthDataSend',
    'Send\x20Data\x20to\x20Server',
    'getViewState',
    'toBeGreaterOrEqualTo',
    'should\x20not\x20send\x20data\x20right\x20away\x20on\x20first\x20launch',
    'should\x20not\x20send\x20data\x20to\x20server\x20when\x20opted\x20out',
    'set',
    'healthDataTracking',
    'Notification\x20popup',
    'HealthDataPopup',
    'should\x20show\x20notification\x20popup'
];
function _0x4a1e(_0x3ac814, _0x16ba51) {
    return _0x4a1e = function (_0x559956, _0x4a1eb8) {
        _0x559956 = _0x559956 - 0x1ad;
        var _0x324340 = _0x5599[_0x559956];
        return _0x324340;
    }, _0x4a1e(_0x3ac814, _0x16ba51);
}
(function (_0x29541b, _0x5f52d1) {
    var _0x230042 = _0x4a1e;
    while (!![]) {
        try {
            var _0x548546 = -parseInt(_0x230042(0x1ad)) * -parseInt(_0x230042(0x1ae)) + -parseInt(_0x230042(0x1af)) + parseInt(_0x230042(0x1b0)) * -parseInt(_0x230042(0x1b1)) + parseInt(_0x230042(0x1b2)) * -parseInt(_0x230042(0x1b3)) + -parseInt(_0x230042(0x1b4)) + parseInt(_0x230042(0x1b5)) + parseInt(_0x230042(0x1b6));
            if (_0x548546 === _0x5f52d1)
                break;
            else
                _0x29541b['push'](_0x29541b['shift']());
        } catch (_0x33588f) {
            _0x29541b['push'](_0x29541b['shift']());
        }
    }
}(_0x5599, 0x8b478), define(function (_0x139fdf, _0x5c53e0, _0x295cfb) {
    'use strict';
    var _0x3a5d25 = _0x4a1e;
    var _0x50d4ef = brackets[_0x3a5d25(0x1b7)](_0x3a5d25(0x1b8)), _0x32102d, _0x9520d2;
    describe(_0x3a5d25(0x1b9), function () {
        var _0x1ffc0a = _0x3a5d25;
        beforeEach(function () {
            var _0x453410 = _0x4a1e;
            _0x50d4ef[_0x453410(0x1ba)](this, function (_0x52099c) {
                _0x32102d = _0x52099c;
            });
        }), afterEach(function () {
            _0x50d4ef['closeTestWindow'](), _0x32102d = null;
        }), describe(_0x1ffc0a(0x1bb), function () {
            var _0x36f577 = _0x1ffc0a, _0x21e892 = 0x18 * 0x3c * 0x3c * 0x3e8, _0x1c7afd = 0x1e * 0x3c * 0x3e8, _0x10ac0e, _0x300439;
            beforeEach(function () {
                var _0x3f2b27 = _0x4a1e;
                _0x9520d2 = _0x32102d[_0x3f2b27(0x1bc)][_0x3f2b27(0x1bd)]['PreferencesManager'], _0x10ac0e = _0x9520d2[_0x3f2b27(0x1be)](_0x3f2b27(0x1bf)), _0x300439 = _0x32102d[_0x3f2b27(0x1bc)][_0x3f2b27(0x1bd)]['HealthDataManager'], this[_0x3f2b27(0x1c0)]({
                    'toBeGreaterOrEqualTo': function (_0x218d05) {
                        var _0x5a96de = _0x3f2b27;
                        return this['message'] = function () {
                            var _0x435e3e = _0x4a1e;
                            return _0x435e3e(0x1c1) + this[_0x435e3e(0x1c2)] + _0x435e3e(0x1c3) + _0x218d05;
                        }, this[_0x5a96de(0x1c2)] >= _0x218d05;
                    }
                });
            }), afterEach(function () {
                _0x300439 = null, _0x10ac0e = null, _0x9520d2 = null;
            }), it(_0x36f577(0x1c4), function () {
                var _0x42e57f = _0x36f577, _0xcdb666 = Date[_0x42e57f(0x1c5)]();
                _0x9520d2[_0x42e57f(0x1c6)](_0x42e57f(0x1c7), _0xcdb666), _0x9520d2[_0x42e57f(0x1c6)](_0x42e57f(0x1c8), !![]);
                var _0x314720 = _0x300439[_0x42e57f(0x1c9)]();
                waitsForDone(_0x314720, _0x42e57f(0x1ca), 0xfa0), expect(_0x9520d2[_0x42e57f(0x1cb)](_0x42e57f(0x1c7)))[_0x42e57f(0x1cc)](_0xcdb666 + _0x21e892);
            }), it(_0x36f577(0x1cd), function () {
                var _0x58530f = _0x36f577, _0x441b07 = Date['now']();
                _0x9520d2[_0x58530f(0x1c6)](_0x58530f(0x1c7), null), _0x9520d2[_0x58530f(0x1c6)](_0x58530f(0x1c8), !![]);
                var _0x4e37ab = _0x300439[_0x58530f(0x1c9)]();
                waitsForFail(_0x4e37ab, _0x58530f(0x1ca), 0xfa0), expect(_0x9520d2[_0x58530f(0x1cb)]('nextHealthDataSendTime'))[_0x58530f(0x1cc)](_0x441b07 + _0x1c7afd);
            }), it(_0x36f577(0x1ce), function () {
                var _0x178f7c = _0x36f577;
                _0x9520d2['setViewState'](_0x178f7c(0x1c7), Date[_0x178f7c(0x1c5)]()), _0x10ac0e[_0x178f7c(0x1cf)](_0x178f7c(0x1d0), ![]);
                var _0x2a6a83 = _0x300439['checkHealthDataSend']();
                waitsForFail(_0x2a6a83, _0x178f7c(0x1ca), 0xfa0);
            });
        }), describe(_0x1ffc0a(0x1d1), function () {
            var _0xa533bc = _0x1ffc0a, _0x4e5b7a;
            beforeEach(function () {
                var _0x292611 = _0x4a1e;
                _0x4e5b7a = _0x32102d['brackets'][_0x292611(0x1bd)][_0x292611(0x1d2)];
            }), afterEach(function () {
                _0x4e5b7a = null;
            }), it(_0xa533bc(0x1d3), function () {
                var _0x930006 = _0xa533bc;
                _0x4e5b7a[_0x930006(0x1d4)](), expect($(_0x32102d[_0x930006(0x1d5)])[_0x930006(0x1d6)](_0x930006(0x1d7))[_0x930006(0x1d8)])[_0x930006(0x1d9)](0x1);
            });
        }), describe('Health\x20Data\x20Statistics\x20is\x20displayed', function () {
            var _0x21ef99 = _0x1ffc0a, _0x8445f4;
            beforeEach(function () {
                var _0x49b132 = _0x4a1e;
                _0x8445f4 = _0x32102d[_0x49b132(0x1bc)][_0x49b132(0x1bd)][_0x49b132(0x1da)];
            }), afterEach(function () {
                _0x8445f4 = null;
            }), it(_0x21ef99(0x1db), function () {
                runs(function () {
                    var _0x3a2917 = _0x4a1e, _0x242574 = _0x8445f4[_0x3a2917(0x1dc)]();
                    waitsForDone(_0x242574, _0x3a2917(0x1dd), 0xfa0);
                }), runs(function () {
                    var _0x275987 = _0x4a1e;
                    expect($(_0x32102d[_0x275987(0x1d5)])[_0x275987(0x1d6)](_0x275987(0x1de))[_0x275987(0x1d8)])[_0x275987(0x1d9)](0x1);
                });
            });
        });
    });
}));
