define(function (_0x2bd783, _0x1887c6, _0x3d48d8) {
    'use strict';
    var _0x20edd7 = _0x51ec;
    var _0x4e2160 = _0x2bd783('spec/SpecRunnerUtils');
    describe(_0x20edd7(256), function () {
        var _0x4e947d = _0x20edd7;
        describe(_0x4e947d(257), function () {
            var _0x1c4adf = _0x4e947d, _0x9827fe, _0x52d39e;
            beforeEach(function () {
                var _0x2ac0d9 = _0x51ec;
                _0x9827fe = _0x4e2160['createMockElement'](), _0x9827fe['on'](_0x2ac0d9(258), function (_0x492181) {
                    _0x52d39e = _0x492181;
                });
            }), afterEach(function () {
                _0x9827fe['remove'](), _0x52d39e = null;
            }), it('should create and dispatch a key event to an element', function () {
                var _0x527148 = _0x51ec;
                _0x4e2160[_0x527148(257)](82, 'keydown', _0x9827fe[0]), expect(_0x52d39e[_0x527148(259)])[_0x527148(260)](82), expect(_0x52d39e[_0x527148(261)])[_0x527148(260)](82), expect(_0x52d39e[_0x527148(262)])[_0x527148(260)](82);
            }), it(_0x1c4adf(263), function () {
                var _0x31b16c = _0x1c4adf, _0x363ff2 = {
                        'ctrlKey': !![],
                        'altKey': !![]
                    };
                _0x4e2160[_0x31b16c(257)](82, 'keydown', _0x9827fe[0], _0x363ff2), expect(_0x52d39e[_0x31b16c(259)])[_0x31b16c(260)](82), expect(_0x52d39e[_0x31b16c(261)])[_0x31b16c(260)](82), expect(_0x52d39e[_0x31b16c(262)])[_0x31b16c(260)](82), expect(_0x52d39e['ctrlKey'])[_0x31b16c(260)](!![]), expect(_0x52d39e['altKey'])['toEqual'](!![]);
            });
        });
    });
});