var _0x2301 = [
    '128636swQZxv',
    '338526DjzrFN',
    '131803PJxHhf',
    '355677fepLJP',
    '52894sBDekh',
    '8804KppPMW',
    '449637LWXgBL',
    'test',
    'Testing\x20loopTop:true',
    '#fullpage',
    'find',
    'equal',
    'We\x20expect\x20section\x204\x20to\x20be\x20active',
    'Testing\x20loopTop:false',
    'index',
    'We\x20expect\x20section\x201\x20to\x20be\x20active',
    'moveSectionUp'
];
function _0x5e21(_0x311a58, _0x28bf1b) {
    return _0x5e21 = function (_0x23017f, _0x5e217c) {
        _0x23017f = _0x23017f - 0x169;
        var _0x39446e = _0x2301[_0x23017f];
        return _0x39446e;
    }, _0x5e21(_0x311a58, _0x28bf1b);
}
var _0x1f9afc = _0x5e21;
(function (_0x40cb1c, _0x4cea42) {
    var _0xba2dba = _0x5e21;
    while (!![]) {
        try {
            var _0x3e8ff1 = parseInt(_0xba2dba(0x169)) + parseInt(_0xba2dba(0x16a)) + -parseInt(_0xba2dba(0x16b)) + parseInt(_0xba2dba(0x16c)) + parseInt(_0xba2dba(0x16d)) + -parseInt(_0xba2dba(0x16e)) + -parseInt(_0xba2dba(0x16f));
            if (_0x3e8ff1 === _0x4cea42)
                break;
            else
                _0x40cb1c['push'](_0x40cb1c['shift']());
        } catch (_0x24b32d) {
            _0x40cb1c['push'](_0x40cb1c['shift']());
        }
    }
}(_0x2301, 0x45b31), QUnit[_0x1f9afc(0x170)](_0x1f9afc(0x171), function (_0x49ff20) {
    var _0x35bb75 = _0x1f9afc, _0x438868 = _0x35bb75(0x172), _0x5651e6 = initFullpageNew(_0x438868, { 'loopTop': !![] });
    _0x49ff20['equal']($(_0x438868)[_0x35bb75(0x173)](SECTION_ACTIVE_SEL)['index'](), 0x0, 'We\x20expect\x20section\x201\x20to\x20be\x20active'), _0x5651e6['moveSectionUp'](), _0x49ff20[_0x35bb75(0x174)]($(_0x438868)[_0x35bb75(0x173)](SECTION_ACTIVE_SEL)['index'](), 0x3, _0x35bb75(0x175));
}), QUnit[_0x1f9afc(0x170)](_0x1f9afc(0x176), function (_0xbac70c) {
    var _0x3e62b9 = _0x1f9afc, _0x25bfa1 = _0x3e62b9(0x172), _0xe0b92a = initFullpageNew(_0x25bfa1, { 'loopTop': ![] });
    _0xbac70c[_0x3e62b9(0x174)]($(_0x25bfa1)[_0x3e62b9(0x173)](SECTION_ACTIVE_SEL)[_0x3e62b9(0x177)](), 0x0, _0x3e62b9(0x178)), _0xe0b92a[_0x3e62b9(0x179)](), _0xbac70c[_0x3e62b9(0x174)]($(_0x25bfa1)[_0x3e62b9(0x173)](SECTION_ACTIVE_SEL)[_0x3e62b9(0x177)](), 0x0, 'We\x20expect\x20section\x200\x20to\x20be\x20active');
}));
