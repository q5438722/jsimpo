'use strict';
var _0x2d86 = [
    '3631sjENdo',
    '143ZILXOf',
    '4ZZQuLH',
    '220943tklzKJ',
    'Test\x20whether\x20Promise\x20treats\x20thenable\x20correctly.',
    'value.then\x20is\x20called.',
    'thisValue',
    'value',
    'then',
    'fulfilled',
    'rejected',
    'result',
    'hello',
    'The\x20promise\x20is\x20not\x20rejected\x20now.',
    '78871NUwHIv',
    '25BlyUqv',
    '42937uwphrU',
    '390360WzLhZG',
    '1104420ZuytXR',
    '843831ViiolM'
];
var _0x47bcdb = _0x3d5f;
(function (_0x47c60c, _0x163dd4) {
    var _0xd88d87 = _0x3d5f;
    while (!![]) {
        try {
            var _0x36e38b = -parseInt(_0xd88d87(0x9d)) + -parseInt(_0xd88d87(0x9e)) * -parseInt(_0xd88d87(0x9f)) + -parseInt(_0xd88d87(0xa0)) + -parseInt(_0xd88d87(0xa1)) + parseInt(_0xd88d87(0xa2)) + parseInt(_0xd88d87(0xa3)) * -parseInt(_0xd88d87(0xa4)) + parseInt(_0xd88d87(0xa5)) * parseInt(_0xd88d87(0xa6));
            if (_0x36e38b === _0x163dd4)
                break;
            else
                _0x47c60c['push'](_0x47c60c['shift']());
        } catch (_0x52b12f) {
            _0x47c60c['push'](_0x47c60c['shift']());
        }
    }
}(_0x2d86, 0xace30));
function _0x3d5f(_0x1875c7, _0x47a8a7) {
    return _0x3d5f = function (_0x2d8610, _0x3d5f66) {
        _0x2d8610 = _0x2d8610 - 0x9d;
        var _0x482a98 = _0x2d86[_0x2d8610];
        return _0x482a98;
    }, _0x3d5f(_0x1875c7, _0x47a8a7);
}
description(_0x47bcdb(0xa7));
var thisValue, result, value = {
        'then': function (_0x74706, _0x5f5070) {
            var _0x468442 = _0x47bcdb;
            testPassed(_0x468442(0xa8)), thisValue = this, shouldBe(_0x468442(0xa9), _0x468442(0xaa)), _0x5f5070('hello');
        }
    };
new Promise(function (_0x2f77ca) {
    _0x2f77ca(value);
})[_0x47bcdb(0xab)](function () {
    var _0x555d6f = _0x47bcdb;
    testFailed(_0x555d6f(0xac)), finishJSTest();
}, function (_0x55f2b4) {
    var _0x10b746 = _0x47bcdb;
    testPassed(_0x10b746(0xad)), result = _0x55f2b4, shouldBeEqualToString(_0x10b746(0xae), _0x10b746(0xaf)), finishJSTest();
}), debug(_0x47bcdb(0xb0));
