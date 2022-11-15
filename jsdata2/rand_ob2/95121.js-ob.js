var _0x1409 = [
    'simulateKeyEvent',
    'keydown',
    'keyCode',
    'toEqual',
    'which',
    'charCode',
    'should\x20create\x20and\x20dispatch\x20a\x20key\x20event\x20with\x20modifiers\x20to\x20an\x20element',
    '1PogSEk',
    '119589CcCRIM',
    '1ScWGtJ',
    '159063fgUpLG',
    '147605OHPdZa',
    '133286uKiFjt',
    '1iFrjZC',
    '47492kYQOEE',
    '174541TzOWuC',
    '557632BdRVui',
    'SpecRunnerUtils'
];
function _0x51ec(_0xc8114a, _0xed0cae) {
    return _0x51ec = function (_0x14095d, _0x51ec4d) {
        _0x14095d = _0x14095d - 0xf6;
        var _0x448be0 = _0x1409[_0x14095d];
        return _0x448be0;
    }, _0x51ec(_0xc8114a, _0xed0cae);
}
(function (_0x4fdc64, _0x41866f) {
    var _0x57b129 = _0x51ec;
    while (!![]) {
        try {
            var _0x12fa91 = parseInt(_0x57b129(0xf6)) * parseInt(_0x57b129(0xf7)) + -parseInt(_0x57b129(0xf8)) * parseInt(_0x57b129(0xf9)) + -parseInt(_0x57b129(0xfa)) + -parseInt(_0x57b129(0xfb)) + -parseInt(_0x57b129(0xfc)) * -parseInt(_0x57b129(0xfd)) + -parseInt(_0x57b129(0xfe)) + parseInt(_0x57b129(0xff));
            if (_0x12fa91 === _0x41866f)
                break;
            else
                _0x4fdc64['push'](_0x4fdc64['shift']());
        } catch (_0x45cacf) {
            _0x4fdc64['push'](_0x4fdc64['shift']());
        }
    }
}(_0x1409, 0x1ae8a), define(function (_0x2bd783, _0x1887c6, _0x3d48d8) {
    'use strict';
    var _0x20edd7 = _0x51ec;
    var _0x4e2160 = _0x2bd783('spec/SpecRunnerUtils');
    describe(_0x20edd7(0x100), function () {
        var _0x4e947d = _0x20edd7;
        describe(_0x4e947d(0x101), function () {
            var _0x1c4adf = _0x4e947d, _0x9827fe, _0x52d39e;
            beforeEach(function () {
                var _0x2ac0d9 = _0x51ec;
                _0x9827fe = _0x4e2160['createMockElement'](), _0x9827fe['on'](_0x2ac0d9(0x102), function (_0x492181) {
                    _0x52d39e = _0x492181;
                });
            }), afterEach(function () {
                _0x9827fe['remove'](), _0x52d39e = null;
            }), it('should\x20create\x20and\x20dispatch\x20a\x20key\x20event\x20to\x20an\x20element', function () {
                var _0x527148 = _0x51ec;
                _0x4e2160[_0x527148(0x101)](0x52, 'keydown', _0x9827fe[0x0]), expect(_0x52d39e[_0x527148(0x103)])[_0x527148(0x104)](0x52), expect(_0x52d39e[_0x527148(0x105)])[_0x527148(0x104)](0x52), expect(_0x52d39e[_0x527148(0x106)])[_0x527148(0x104)](0x52);
            }), it(_0x1c4adf(0x107), function () {
                var _0x31b16c = _0x1c4adf, _0x363ff2 = {
                        'ctrlKey': !![],
                        'altKey': !![]
                    };
                _0x4e2160[_0x31b16c(0x101)](0x52, 'keydown', _0x9827fe[0x0], _0x363ff2), expect(_0x52d39e[_0x31b16c(0x103)])[_0x31b16c(0x104)](0x52), expect(_0x52d39e[_0x31b16c(0x105)])[_0x31b16c(0x104)](0x52), expect(_0x52d39e[_0x31b16c(0x106)])[_0x31b16c(0x104)](0x52), expect(_0x52d39e['ctrlKey'])[_0x31b16c(0x104)](!![]), expect(_0x52d39e['altKey'])['toEqual'](!![]);
            });
        });
    });
}));
