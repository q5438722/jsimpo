define(function (_0x139fdf, _0x5c53e0, _0x295cfb) {
    'use strict';
    var _0x3a5d25 = _0x4a1e;
    var _0x50d4ef = brackets[_0x3a5d25(439)](_0x3a5d25(440)), _0x32102d, _0x9520d2;
    describe(_0x3a5d25(441), function () {
        var _0x1ffc0a = _0x3a5d25;
        beforeEach(function () {
            var _0x453410 = _0x4a1e;
            _0x50d4ef[_0x453410(442)](this, function (_0x52099c) {
                _0x32102d = _0x52099c;
            });
        }), afterEach(function () {
            _0x50d4ef['closeTestWindow'](), _0x32102d = null;
        }), describe(_0x1ffc0a(443), function () {
            var _0x36f577 = _0x1ffc0a, _0x21e892 = 24 * 60 * 60 * 1000, _0x1c7afd = 30 * 60 * 1000, _0x10ac0e, _0x300439;
            beforeEach(function () {
                var _0x3f2b27 = _0x4a1e;
                _0x9520d2 = _0x32102d[_0x3f2b27(444)][_0x3f2b27(445)]['PreferencesManager'], _0x10ac0e = _0x9520d2[_0x3f2b27(446)](_0x3f2b27(447)), _0x300439 = _0x32102d[_0x3f2b27(444)][_0x3f2b27(445)]['HealthDataManager'], this[_0x3f2b27(448)]({
                    'toBeGreaterOrEqualTo': function (_0x218d05) {
                        var _0x5a96de = _0x3f2b27;
                        return this['message'] = function () {
                            var _0x435e3e = _0x4a1e;
                            return _0x435e3e(449) + this[_0x435e3e(450)] + _0x435e3e(451) + _0x218d05;
                        }, this[_0x5a96de(450)] >= _0x218d05;
                    }
                });
            }), afterEach(function () {
                _0x300439 = null, _0x10ac0e = null, _0x9520d2 = null;
            }), it(_0x36f577(452), function () {
                var _0x42e57f = _0x36f577, _0xcdb666 = Date[_0x42e57f(453)]();
                _0x9520d2[_0x42e57f(454)](_0x42e57f(455), _0xcdb666), _0x9520d2[_0x42e57f(454)](_0x42e57f(456), !![]);
                var _0x314720 = _0x300439[_0x42e57f(457)]();
                waitsForDone(_0x314720, _0x42e57f(458), 4000), expect(_0x9520d2[_0x42e57f(459)](_0x42e57f(455)))[_0x42e57f(460)](_0xcdb666 + _0x21e892);
            }), it(_0x36f577(461), function () {
                var _0x58530f = _0x36f577, _0x441b07 = Date['now']();
                _0x9520d2[_0x58530f(454)](_0x58530f(455), null), _0x9520d2[_0x58530f(454)](_0x58530f(456), !![]);
                var _0x4e37ab = _0x300439[_0x58530f(457)]();
                waitsForFail(_0x4e37ab, _0x58530f(458), 4000), expect(_0x9520d2[_0x58530f(459)]('nextHealthDataSendTime'))[_0x58530f(460)](_0x441b07 + _0x1c7afd);
            }), it(_0x36f577(462), function () {
                var _0x178f7c = _0x36f577;
                _0x9520d2['setViewState'](_0x178f7c(455), Date[_0x178f7c(453)]()), _0x10ac0e[_0x178f7c(463)](_0x178f7c(464), ![]);
                var _0x2a6a83 = _0x300439['checkHealthDataSend']();
                waitsForFail(_0x2a6a83, _0x178f7c(458), 4000);
            });
        }), describe(_0x1ffc0a(465), function () {
            var _0xa533bc = _0x1ffc0a, _0x4e5b7a;
            beforeEach(function () {
                var _0x292611 = _0x4a1e;
                _0x4e5b7a = _0x32102d['brackets'][_0x292611(445)][_0x292611(466)];
            }), afterEach(function () {
                _0x4e5b7a = null;
            }), it(_0xa533bc(467), function () {
                var _0x930006 = _0xa533bc;
                _0x4e5b7a[_0x930006(468)](), expect($(_0x32102d[_0x930006(469)])[_0x930006(470)](_0x930006(471))[_0x930006(472)])[_0x930006(473)](1);
            });
        }), describe('Health Data Statistics is displayed', function () {
            var _0x21ef99 = _0x1ffc0a, _0x8445f4;
            beforeEach(function () {
                var _0x49b132 = _0x4a1e;
                _0x8445f4 = _0x32102d[_0x49b132(444)][_0x49b132(445)][_0x49b132(474)];
            }), afterEach(function () {
                _0x8445f4 = null;
            }), it(_0x21ef99(475), function () {
                runs(function () {
                    var _0x3a2917 = _0x4a1e, _0x242574 = _0x8445f4[_0x3a2917(476)]();
                    waitsForDone(_0x242574, _0x3a2917(477), 4000);
                }), runs(function () {
                    var _0x275987 = _0x4a1e;
                    expect($(_0x32102d[_0x275987(469)])[_0x275987(470)](_0x275987(478))[_0x275987(472)])[_0x275987(473)](1);
                });
            });
        });
    });
});