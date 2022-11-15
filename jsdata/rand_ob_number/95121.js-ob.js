define(function (_0x5ed834, _0x3fbf98, _0x4ee661) {
    'use strict';
    var _0x2106c9 = _0x5ed834('spec/SpecRunnerUtils');
    describe('SpecRunnerUtils', function () {
        describe('simulateKeyEvent', function () {
            var _0x5c4245, _0x5d344b;
            beforeEach(function () {
                _0x5c4245 = _0x2106c9['createMockElement'](), _0x5c4245['on']('keydown', function (_0x5f323f) {
                    _0x5d344b = _0x5f323f;
                });
            }), afterEach(function () {
                _0x5c4245['remove'](), _0x5d344b = null;
            }), it('should\x20create\x20and\x20dispatch\x20a\x20key\x20event\x20to\x20an\x20element', function () {
                _0x2106c9['simulateKeyEvent'](0x1385 + -0x1 * -0x1454 + 0x2787 * -0x1, 'keydown', _0x5c4245[-0x18a1 + -0x21d * 0x12 + 0x3d * 0x107]), expect(_0x5d344b['keyCode'])['toEqual'](0x1ffd + -0x1f98 + -0x13), expect(_0x5d344b['which'])['toEqual'](0x1 * -0x12bf + 0xbcf + -0x3a1 * -0x2), expect(_0x5d344b['charCode'])['toEqual'](-0x41b * -0x5 + 0x6e2 + 0x1 * -0x1b17);
            }), it('should\x20create\x20and\x20dispatch\x20a\x20key\x20event\x20with\x20modifiers\x20to\x20an\x20element', function () {
                var _0x321451 = {
                    'ctrlKey': !![],
                    'altKey': !![]
                };
                _0x2106c9['simulateKeyEvent'](0x662 + 0x2500 + 0xd0 * -0x35, 'keydown', _0x5c4245[0x4e * -0x61 + -0x1e6 + -0x42 * -0x7a], _0x321451), expect(_0x5d344b['keyCode'])['toEqual'](0x7fd + 0x22a6 * -0x1 + -0x1afb * -0x1), expect(_0x5d344b['which'])['toEqual'](0x1869 * 0x1 + -0x1226 + 0x1fb * -0x3), expect(_0x5d344b['charCode'])['toEqual'](0x3 * 0x692 + -0x18dd + 0x579), expect(_0x5d344b['ctrlKey'])['toEqual'](!![]), expect(_0x5d344b['altKey'])['toEqual'](!![]);
            });
        });
    });
});
