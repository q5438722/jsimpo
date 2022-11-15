var test = require(_0x2d20dd(489))[_0x2d20dd(490)], generator = require('inline-source-map'), convert = require('..'), gen = generator()[_0x2d20dd(491)]('foo.js', [{
            'original': {
                'line': 2,
                'column': 3
            },
            'generated': {
                'line': 5,
                'column': 10
            }
        }], { 'line': 5 })[_0x2d20dd(492)](_0x2d20dd(493), 'var a = 2;\nconsole.log(a)', {
        'line': 23,
        'column': 22
    }), base64 = gen['base64Encode'](), comment = gen[_0x2d20dd(494)](), json = gen[_0x2d20dd(495)](), obj = JSON[_0x2d20dd(496)](json);
test(_0x2d20dd(497), function (_0x5612a6) {
    var _0x581b15 = _0x2d20dd;
    _0x5612a6[_0x581b15(498)](convert[_0x581b15(499)](comment)['toComment'](), comment, _0x581b15(500)), _0x5612a6[_0x581b15(498)](convert['fromComment'](comment)[_0x581b15(501)](), base64, 'comment -> base64'), _0x5612a6[_0x581b15(498)](convert[_0x581b15(499)](comment)[_0x581b15(502)](), json, _0x581b15(503)), _0x5612a6[_0x581b15(504)](convert['fromComment'](comment)['toObject'](), obj, 'comment -> object'), _0x5612a6['equal'](convert[_0x581b15(505)](base64)[_0x581b15(501)](), base64, _0x581b15(506)), _0x5612a6['equal'](convert[_0x581b15(505)](base64)['toComment'](), comment, _0x581b15(507)), _0x5612a6['equal'](convert[_0x581b15(505)](base64)[_0x581b15(502)](), json, 'base64 -> json'), _0x5612a6[_0x581b15(504)](convert[_0x581b15(505)](base64)[_0x581b15(508)](), obj, 'base64 -> object'), _0x5612a6['equal'](convert[_0x581b15(509)](json)[_0x581b15(502)](), json, _0x581b15(510)), _0x5612a6['equal'](convert[_0x581b15(509)](json)[_0x581b15(501)](), base64, 'json -> base64'), _0x5612a6[_0x581b15(498)](convert['fromJSON'](json)[_0x581b15(511)](), comment, _0x581b15(512)), _0x5612a6[_0x581b15(504)](convert[_0x581b15(509)](json)['toObject'](), obj, 'json -> object'), _0x5612a6[_0x581b15(513)]();
}), test('to object returns a copy', function (_0x1e9c02) {
    var _0x4606ec = _0x2d20dd, _0x30e6e2 = convert[_0x4606ec(509)](json), _0x4eef0d = _0x30e6e2[_0x4606ec(508)]();
    _0x4eef0d[_0x4606ec(514)] = '99', _0x1e9c02[_0x4606ec(498)](_0x30e6e2['toObject']()[_0x4606ec(514)], 3, _0x4606ec(515)), _0x1e9c02[_0x4606ec(513)]();
}), test(_0x2d20dd(516), function (_0x574b82) {
    var _0x283f43 = _0x2d20dd, _0x3eb049 = convert[_0x283f43(517)](obj), _0x5f3abd = _0x3eb049[_0x283f43(511)]({ 'multiline': !![] });
    _0x574b82['similar'](_0x5f3abd, /^\/\*# sourceMappingURL=.+ \*\/$/), _0x574b82[_0x283f43(513)]();
}), test(_0x2d20dd(518), function (_0x3dc676) {
    var _0x47773c = _0x2d20dd, _0x49713e = [
            _0x47773c(519),
            _0x47773c(520),
            _0x47773c(521),
            '}',
            '',
            _0x47773c(522),
            ''
        ][_0x47773c(523)]('\n'), _0x428297 = _0x47773c(524), _0x49aacb = _0x47773c(525);
    function _0x5283b7(_0x3ff297) {
        var _0x3e67d9 = _0x47773c, _0x3e74e0 = convert[_0x3e67d9(526)](_0x3ff297);
        return _0x3e74e0 ? _0x3e74e0[_0x3e67d9(511)]() : null;
    }
    _0x3dc676[_0x47773c(498)](_0x5283b7(_0x49713e), null, _0x47773c(527)), _0x3dc676[_0x47773c(498)](_0x5283b7(_0x49713e + _0x428297), _0x428297, _0x47773c(528)), _0x3dc676[_0x47773c(498)](_0x5283b7(_0x49713e + _0x47773c(529) + _0x428297), _0x428297, _0x47773c(530)), _0x3dc676[_0x47773c(498)](_0x5283b7(_0x49713e + _0x47773c(531) + _0x428297 + '\n\n'), _0x428297, _0x47773c(532)), _0x3dc676['equal'](_0x5283b7(_0x49713e + _0x428297 + '\nconsole.log("more code");\nfoo()\n'), _0x428297, _0x47773c(533)), _0x3dc676[_0x47773c(498)](_0x5283b7(_0x49713e + _0x49aacb + '\n' + _0x428297), _0x428297, _0x47773c(534)), _0x3dc676[_0x47773c(513)]();
}), test(_0x2d20dd(535), function (_0x493339) {
    var _0xae0b69 = _0x2d20dd, _0x2d34fb = [
            _0xae0b69(519),
            _0xae0b69(520),
            _0xae0b69(521),
            '}',
            '',
            _0xae0b69(522),
            ''
        ][_0xae0b69(523)]('\n'), _0x587b5f = _0xae0b69(524), _0x4ca282 = '//# sourceMappingURL=data:application/json;base64,otherZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlcyI6WyJmdW5jdGlvbiBmb28oKSB7XG4gY29uc29sZS5sb2coXCJoZWxsbyBJIGFtIGZvb1wiKTtcbiBjb25zb2xlLmxvZyhcIndobyBhcmUgeW91XCIpO1xufVxuXG5mb28oKTtcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSJ9';
    function _0x2dbdc8(_0x944afe) {
        var _0x38cd52 = _0xae0b69, _0x39e8f6 = convert[_0x38cd52(526)](_0x944afe, !![]);
        return _0x39e8f6 ? _0x39e8f6['toComment']() : null;
    }
    _0x493339[_0xae0b69(498)](_0x2dbdc8(_0x2d34fb), null, 'no comment returns null'), _0x493339['equal'](_0x2dbdc8(_0x2d34fb + _0x587b5f), _0x587b5f, _0xae0b69(528)), _0x493339[_0xae0b69(498)](_0x2dbdc8(_0x2d34fb + _0xae0b69(529) + _0x587b5f), _0x587b5f, _0xae0b69(530)), _0x493339['equal'](_0x2dbdc8(_0x2d34fb + '   ' + _0x587b5f + '\n\n'), _0x587b5f, _0xae0b69(532)), _0x493339[_0xae0b69(498)](_0x2dbdc8(_0x2d34fb + _0x587b5f + _0xae0b69(536)), _0x587b5f, 'in the middle of code'), _0x493339['equal'](_0x2dbdc8(_0x2d34fb + _0x4ca282 + '\n' + _0x587b5f), _0x587b5f, _0xae0b69(534)), _0x493339[_0xae0b69(513)]();
}), test(_0x2d20dd(537), function (_0x4e2f51) {
    var _0x285b68 = _0x2d20dd, _0x20b265 = [
            _0x285b68(519),
            _0x285b68(520),
            _0x285b68(521),
            '}',
            '',
            _0x285b68(522),
            ''
        ]['join']('\n'), _0x1c2102 = _0x285b68(538), _0x2e498d = _0x285b68(539), _0x4e41a4 = _0x285b68(536);
    _0x4e2f51['equal'](convert[_0x285b68(540)](_0x20b265 + _0x1c2102), _0x20b265, _0x285b68(541)), _0x4e2f51[_0x285b68(498)](convert['removeComments'](_0x20b265 + _0x1c2102 + _0x4e41a4), _0x20b265 + _0x4e41a4, _0x285b68(542)), _0x4e2f51[_0x285b68(498)](convert[_0x285b68(540)](_0x20b265 + _0x2e498d + _0x4e41a4 + _0x1c2102), _0x20b265 + _0x4e41a4, 'multiple comments from the middle of code'), _0x4e2f51[_0x285b68(513)]();
}), test('remove map file comments', function (_0x3b328e) {
    var _0x45ab83 = _0x2d20dd, _0x58bd69 = [
            'function foo() {',
            _0x45ab83(520),
            _0x45ab83(521),
            '}',
            '',
            'foo();',
            ''
        ][_0x45ab83(523)]('\n'), _0x11c5ad = _0x45ab83(543), _0x245a46 = '/*# sourceMappingURL=foo.js.map */';
    _0x3b328e[_0x45ab83(498)](convert['removeMapFileComments'](_0x58bd69 + _0x11c5ad), _0x58bd69, _0x45ab83(544)), _0x3b328e[_0x45ab83(498)](convert[_0x45ab83(545)](_0x58bd69 + _0x245a46), _0x58bd69, '/* */ style filemap comment'), _0x3b328e[_0x45ab83(513)]();
}), test('pretty json', function (_0x6cf932) {
    var _0x2cf90c = _0x2d20dd, _0x471862 = convert[_0x2cf90c(509)](json)[_0x2cf90c(502)](2), _0x343ce6 = JSON[_0x2cf90c(546)](obj, null, 2);
    _0x6cf932[_0x2cf90c(498)](_0x471862, _0x343ce6, _0x2cf90c(547)), _0x6cf932[_0x2cf90c(513)]();
}), test(_0x2d20dd(548), function (_0x114139) {
    var _0x1d2514 = _0x2d20dd, _0x23d337 = convert[_0x1d2514(509)](json)[_0x1d2514(549)](_0x1d2514(550), _0x1d2514(551))[_0x1d2514(502)](), _0x4daf0e = JSON[_0x1d2514(496)](json);
    _0x4daf0e['foo'] = _0x1d2514(551), _0x114139['equal'](_0x23d337, JSON[_0x1d2514(546)](_0x4daf0e), 'includes added property'), _0x114139[_0x1d2514(513)]();
}), test(_0x2d20dd(552), function (_0x14f26d) {
    var _0x405e8a = _0x2d20dd, _0x3739f6 = convert[_0x405e8a(509)](json)['setProperty'](_0x405e8a(514), '2')[_0x405e8a(553)](_0x405e8a(554), _0x405e8a(555))['setProperty']('should add', _0x405e8a(556))['toJSON'](), _0x4b6517 = JSON[_0x405e8a(496)](json);
    _0x4b6517[_0x405e8a(514)] = '2', _0x4b6517['mappings'] = _0x405e8a(555), _0x4b6517[_0x405e8a(557)] = _0x405e8a(556), _0x14f26d[_0x405e8a(498)](_0x3739f6, JSON['stringify'](_0x4b6517), _0x405e8a(558)), _0x14f26d[_0x405e8a(513)]();
}), test(_0x2d20dd(559), function (_0x167508) {
    var _0x5c5313 = _0x2d20dd, _0x256f89 = convert[_0x5c5313(509)](json);
    _0x167508[_0x5c5313(498)](_0x256f89[_0x5c5313(560)](_0x5c5313(514)), 3, 'gets version'), _0x167508['deepEqual'](_0x256f89['getProperty'](_0x5c5313(561)), [
        _0x5c5313(562),
        _0x5c5313(493)
    ], _0x5c5313(563)), _0x167508[_0x5c5313(513)]();
}), test(_0x2d20dd(564), function (_0x37b4da) {
    var _0x4717bc = _0x2d20dd, _0xf3e95a = convert[_0x4717bc(526)]('', !![]), _0x66c026 = null;
    _0x37b4da[_0x4717bc(498)](_0xf3e95a, _0x66c026, _0x4717bc(565)), _0x37b4da[_0x4717bc(513)]();
});