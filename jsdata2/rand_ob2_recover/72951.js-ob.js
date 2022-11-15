describe(_0x13463f(174), function () {
    var _0x269e34 = _0x13463f;
    beforeEach(function () {
        var _0x29ea52 = _0x4081;
        loadFixtures('dropdown/dropdownFixture.html'), $(_0x29ea52(175))[_0x29ea52(176)]();
    }), describe(_0x269e34(177), function () {
        var _0x4ebee8 = _0x269e34, _0x5dbef2;
        beforeEach(function () {
        }), it(_0x4ebee8(178), function (_0x348e3d) {
            var _0x7c401e = _0x4ebee8, _0x3fa42d = $('#dropdown1');
            _0x5dbef2 = $('#dropdownActivator'), expect(_0x3fa42d)[_0x7c401e(179)]('Should be hidden before dropdown is opened.'), _0x5dbef2['dropdown']('open'), setTimeout(function () {
                var _0xc51e69 = _0x7c401e;
                expect(_0x3fa42d)[_0xc51e69(180)](_0xc51e69(181)), _0x5dbef2[_0xc51e69(176)]('close'), setTimeout(function () {
                    var _0x4df939 = _0xc51e69;
                    expect(_0x3fa42d)['toBeHidden'](_0x4df939(182)), _0x348e3d();
                }, 400);
            }, 400);
        }), it(_0x4ebee8(183), function (_0x2fc55f) {
            var _0x3abf9c = _0x4ebee8;
            _0x5dbef2 = $(_0x3abf9c(184)), expect(dropdown1)[_0x3abf9c(179)](_0x3abf9c(185)), _0x5dbef2[_0x3abf9c(176)]('open'), setTimeout(function () {
                var _0x34e200 = _0x3abf9c;
                expect(dropdown1)[_0x34e200(180)]('Should be shown after dropdown is opened.'), click(document[_0x34e200(186)]), setTimeout(function () {
                    var _0x49586f = _0x34e200;
                    expect(dropdown1)['toBeHidden'](_0x49586f(182)), _0x2fc55f();
                }, 400);
            }, 400);
        }), it(_0x4ebee8(187), function (_0x3f9d09) {
            var _0x19e06f = _0x4ebee8, _0x548592 = $(_0x19e06f(188));
            _0x5dbef2 = $(_0x19e06f(189)), expect(_0x548592)[_0x19e06f(179)]('Should be hidden before dropdown is opened.'), _0x5dbef2['find']('i')[_0x19e06f(190)](), setTimeout(function () {
                var _0x3b44a7 = _0x19e06f;
                expect(_0x548592)[_0x3b44a7(180)]('Should be shown after dropdown is opened.'), click(document['body']), setTimeout(function () {
                    var _0xcbf96d = _0x3b44a7;
                    expect(_0x548592)['toBeHidden'](_0xcbf96d(182)), _0x3f9d09();
                }, 400);
            }, 400);
        }), it(_0x4ebee8(191), function (_0x523ebd) {
            var _0x1ba0da = _0x4ebee8, _0x638aee = $(_0x1ba0da(192));
            $(_0x638aee)[_0x1ba0da(176)]('destroy'), $(_0x638aee)[_0x1ba0da(176)]({ 'hover': !![] }), expect(function () {
                var _0x1695bc = _0x1ba0da;
                $(_0x638aee)[_0x1695bc(176)](_0x1695bc(193));
            })[_0x1ba0da(194)][_0x1ba0da(195)](), setTimeout(function () {
                _0x523ebd();
            }, 400);
        });
    });
});