define(function (_0x418a36, _0x413676, _0x90b2ce) {
    'use strict';
    var _0x3da153 = _0x2e74;
    var _0x18300a = _0x418a36(_0x3da153(147));
    describe(_0x3da153(148), function () {
        var _0x12c317 = _0x3da153;
        describe(_0x12c317(149), function () {
            var _0x6b3f6c = _0x12c317, _0x27f63d, _0x437033;
            beforeEach(function () {
                var _0x13a9af = _0x2e74;
                _0x27f63d = _0x18300a[_0x13a9af(150)](), _0x27f63d['on']('keydown', function (_0x3248b7) {
                    _0x437033 = _0x3248b7;
                });
            }), afterEach(function () {
                var _0x47ef5a = _0x2e74;
                _0x27f63d[_0x47ef5a(151)](), _0x437033 = null;
            }), it(_0x6b3f6c(152), function () {
                var _0x445985 = _0x6b3f6c;
                _0x18300a['simulateKeyEvent'](82, _0x445985(153), _0x27f63d[0]), expect(_0x437033[_0x445985(154)])['toEqual'](82), expect(_0x437033['which'])['toEqual'](82), expect(_0x437033[_0x445985(155)])[_0x445985(156)](82);
            }), it(_0x6b3f6c(157), function () {
                var _0x4ed9be = _0x6b3f6c, _0x74d040 = {
                        'ctrlKey': !![],
                        'altKey': !![]
                    };
                _0x18300a[_0x4ed9be(149)](82, 'keydown', _0x27f63d[0], _0x74d040), expect(_0x437033[_0x4ed9be(154)])[_0x4ed9be(156)](82), expect(_0x437033[_0x4ed9be(158)])[_0x4ed9be(156)](82), expect(_0x437033[_0x4ed9be(155)])['toEqual'](82), expect(_0x437033[_0x4ed9be(159)])[_0x4ed9be(156)](!![]), expect(_0x437033['altKey'])[_0x4ed9be(156)](!![]);
            });
        });
    });
});