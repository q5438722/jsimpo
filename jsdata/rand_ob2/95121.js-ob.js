var _0x5297 = [
    '82MxsIUC',
    '6403hlUJZK',
    'spec/SpecRunnerUtils',
    'SpecRunnerUtils',
    'simulateKeyEvent',
    'createMockElement',
    'remove',
    'should\x20create\x20and\x20dispatch\x20a\x20key\x20event\x20to\x20an\x20element',
    'keydown',
    'keyCode',
    'charCode',
    'toEqual',
    'should\x20create\x20and\x20dispatch\x20a\x20key\x20event\x20with\x20modifiers\x20to\x20an\x20element',
    'which',
    'ctrlKey',
    '1uIgwWC',
    '644143iSwlHJ',
    '448251NOFogd',
    '1aYdDDg',
    '211tHFBaA',
    '1394nEvHzO',
    '647001adawFM',
    '1iwmhxI',
    '31695SMQeWV',
    '7GuWcfR',
    '110221zFtQWn'
];
function _0x2e74(_0x30011c, _0x20b5f3) {
    return _0x2e74 = function (_0x52972e, _0x2e7478) {
        _0x52972e = _0x52972e - 0x86;
        var _0x4662f6 = _0x5297[_0x52972e];
        return _0x4662f6;
    }, _0x2e74(_0x30011c, _0x20b5f3);
}
(function (_0x4bd9ca, _0x25d8e8) {
    var _0x43e4d5 = _0x2e74;
    while (!![]) {
        try {
            var _0x154d1d = parseInt(_0x43e4d5(0x86)) * parseInt(_0x43e4d5(0x87)) + -parseInt(_0x43e4d5(0x88)) * -parseInt(_0x43e4d5(0x89)) + parseInt(_0x43e4d5(0x8a)) * -parseInt(_0x43e4d5(0x8b)) + parseInt(_0x43e4d5(0x8c)) * -parseInt(_0x43e4d5(0x8d)) + parseInt(_0x43e4d5(0x8e)) * -parseInt(_0x43e4d5(0x8f)) + -parseInt(_0x43e4d5(0x90)) + -parseInt(_0x43e4d5(0x91)) * -parseInt(_0x43e4d5(0x92));
            if (_0x154d1d === _0x25d8e8)
                break;
            else
                _0x4bd9ca['push'](_0x4bd9ca['shift']());
        } catch (_0x2ffda0) {
            _0x4bd9ca['push'](_0x4bd9ca['shift']());
        }
    }
}(_0x5297, 0x5409b), define(function (_0x418a36, _0x413676, _0x90b2ce) {
    'use strict';
    var _0x3da153 = _0x2e74;
    var _0x18300a = _0x418a36(_0x3da153(0x93));
    describe(_0x3da153(0x94), function () {
        var _0x12c317 = _0x3da153;
        describe(_0x12c317(0x95), function () {
            var _0x6b3f6c = _0x12c317, _0x27f63d, _0x437033;
            beforeEach(function () {
                var _0x13a9af = _0x2e74;
                _0x27f63d = _0x18300a[_0x13a9af(0x96)](), _0x27f63d['on']('keydown', function (_0x3248b7) {
                    _0x437033 = _0x3248b7;
                });
            }), afterEach(function () {
                var _0x47ef5a = _0x2e74;
                _0x27f63d[_0x47ef5a(0x97)](), _0x437033 = null;
            }), it(_0x6b3f6c(0x98), function () {
                var _0x445985 = _0x6b3f6c;
                _0x18300a['simulateKeyEvent'](0x52, _0x445985(0x99), _0x27f63d[0x0]), expect(_0x437033[_0x445985(0x9a)])['toEqual'](0x52), expect(_0x437033['which'])['toEqual'](0x52), expect(_0x437033[_0x445985(0x9b)])[_0x445985(0x9c)](0x52);
            }), it(_0x6b3f6c(0x9d), function () {
                var _0x4ed9be = _0x6b3f6c, _0x74d040 = {
                        'ctrlKey': !![],
                        'altKey': !![]
                    };
                _0x18300a[_0x4ed9be(0x95)](0x52, 'keydown', _0x27f63d[0x0], _0x74d040), expect(_0x437033[_0x4ed9be(0x9a)])[_0x4ed9be(0x9c)](0x52), expect(_0x437033[_0x4ed9be(0x9e)])[_0x4ed9be(0x9c)](0x52), expect(_0x437033[_0x4ed9be(0x9b)])['toEqual'](0x52), expect(_0x437033[_0x4ed9be(0x9f)])[_0x4ed9be(0x9c)](!![]), expect(_0x437033['altKey'])[_0x4ed9be(0x9c)](!![]);
            });
        });
    });
}));
