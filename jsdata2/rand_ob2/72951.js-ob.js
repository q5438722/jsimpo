var _0xaa27 = [
    '6QruQWG',
    '1288210AhefkY',
    'Dropdown\x20Plugin',
    '.dropdown-trigger',
    'dropdown',
    'Dropdown',
    'should\x20open\x20and\x20close\x20programmatically',
    'toBeHidden',
    'toBeVisible',
    'Should\x20be\x20shown\x20after\x20dropdown\x20is\x20opened.',
    'Should\x20be\x20hidden\x20after\x20dropdown\x20is\x20closed.',
    'should\x20close\x20dropdown\x20on\x20document\x20click\x20if\x20programmatically\x20opened',
    '#dropdownActivator',
    'Should\x20be\x20hidden\x20before\x20dropdown\x20is\x20opened.',
    'body',
    'should\x20bubble\x20events\x20correctly',
    '#dropdown2',
    '#dropdownBubble',
    'click',
    'hovered\x20should\x20destroy\x20itself',
    '#dropdownDestroyTrigger',
    'destroy',
    'not',
    'toThrow',
    '513549rSlJZS',
    '1MaBPZC',
    '1187531LrCOgy',
    '1361980BOZLcI',
    '861685ssxlXJ',
    '8053NyWOpJ',
    '113EjijZP',
    '279733puuTUo'
];
var _0x13463f = _0x4081;
function _0x4081(_0x212434, _0x1d6945) {
    return _0x4081 = function (_0xaa270a, _0x408197) {
        _0xaa270a = _0xaa270a - 0xa4;
        var _0x4863f5 = _0xaa27[_0xaa270a];
        return _0x4863f5;
    }, _0x4081(_0x212434, _0x1d6945);
}
(function (_0x37e979, _0x27649d) {
    var _0x419def = _0x4081;
    while (!![]) {
        try {
            var _0x19de28 = parseInt(_0x419def(0xa4)) * parseInt(_0x419def(0xa5)) + -parseInt(_0x419def(0xa6)) + -parseInt(_0x419def(0xa7)) + parseInt(_0x419def(0xa8)) + -parseInt(_0x419def(0xa9)) * parseInt(_0x419def(0xaa)) + -parseInt(_0x419def(0xab)) * -parseInt(_0x419def(0xac)) + parseInt(_0x419def(0xad));
            if (_0x19de28 === _0x27649d)
                break;
            else
                _0x37e979['push'](_0x37e979['shift']());
        } catch (_0x4505df) {
            _0x37e979['push'](_0x37e979['shift']());
        }
    }
}(_0xaa27, 0xd76a6), describe(_0x13463f(0xae), function () {
    var _0x269e34 = _0x13463f;
    beforeEach(function () {
        var _0x29ea52 = _0x4081;
        loadFixtures('dropdown/dropdownFixture.html'), $(_0x29ea52(0xaf))[_0x29ea52(0xb0)]();
    }), describe(_0x269e34(0xb1), function () {
        var _0x4ebee8 = _0x269e34, _0x5dbef2;
        beforeEach(function () {
        }), it(_0x4ebee8(0xb2), function (_0x348e3d) {
            var _0x7c401e = _0x4ebee8, _0x3fa42d = $('#dropdown1');
            _0x5dbef2 = $('#dropdownActivator'), expect(_0x3fa42d)[_0x7c401e(0xb3)]('Should\x20be\x20hidden\x20before\x20dropdown\x20is\x20opened.'), _0x5dbef2['dropdown']('open'), setTimeout(function () {
                var _0xc51e69 = _0x7c401e;
                expect(_0x3fa42d)[_0xc51e69(0xb4)](_0xc51e69(0xb5)), _0x5dbef2[_0xc51e69(0xb0)]('close'), setTimeout(function () {
                    var _0x4df939 = _0xc51e69;
                    expect(_0x3fa42d)['toBeHidden'](_0x4df939(0xb6)), _0x348e3d();
                }, 0x190);
            }, 0x190);
        }), it(_0x4ebee8(0xb7), function (_0x2fc55f) {
            var _0x3abf9c = _0x4ebee8;
            _0x5dbef2 = $(_0x3abf9c(0xb8)), expect(dropdown1)[_0x3abf9c(0xb3)](_0x3abf9c(0xb9)), _0x5dbef2[_0x3abf9c(0xb0)]('open'), setTimeout(function () {
                var _0x34e200 = _0x3abf9c;
                expect(dropdown1)[_0x34e200(0xb4)]('Should\x20be\x20shown\x20after\x20dropdown\x20is\x20opened.'), click(document[_0x34e200(0xba)]), setTimeout(function () {
                    var _0x49586f = _0x34e200;
                    expect(dropdown1)['toBeHidden'](_0x49586f(0xb6)), _0x2fc55f();
                }, 0x190);
            }, 0x190);
        }), it(_0x4ebee8(0xbb), function (_0x3f9d09) {
            var _0x19e06f = _0x4ebee8, _0x548592 = $(_0x19e06f(0xbc));
            _0x5dbef2 = $(_0x19e06f(0xbd)), expect(_0x548592)[_0x19e06f(0xb3)]('Should\x20be\x20hidden\x20before\x20dropdown\x20is\x20opened.'), _0x5dbef2['find']('i')[_0x19e06f(0xbe)](), setTimeout(function () {
                var _0x3b44a7 = _0x19e06f;
                expect(_0x548592)[_0x3b44a7(0xb4)]('Should\x20be\x20shown\x20after\x20dropdown\x20is\x20opened.'), click(document['body']), setTimeout(function () {
                    var _0xcbf96d = _0x3b44a7;
                    expect(_0x548592)['toBeHidden'](_0xcbf96d(0xb6)), _0x3f9d09();
                }, 0x190);
            }, 0x190);
        }), it(_0x4ebee8(0xbf), function (_0x523ebd) {
            var _0x1ba0da = _0x4ebee8, _0x638aee = $(_0x1ba0da(0xc0));
            $(_0x638aee)[_0x1ba0da(0xb0)]('destroy'), $(_0x638aee)[_0x1ba0da(0xb0)]({ 'hover': !![] }), expect(function () {
                var _0x1695bc = _0x1ba0da;
                $(_0x638aee)[_0x1695bc(0xb0)](_0x1695bc(0xc1));
            })[_0x1ba0da(0xc2)][_0x1ba0da(0xc3)](), setTimeout(function () {
                _0x523ebd();
            }, 0x190);
        });
    });
}));
