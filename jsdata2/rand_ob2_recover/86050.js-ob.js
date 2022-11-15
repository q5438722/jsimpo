var BuildGameObject = require(_0x5889f0(150)), GameObjectCreator = require('../GameObjectCreator'), GetAdvancedValue = require('../../utils/object/GetAdvancedValue'), Video = require('./Video');
function _0x4324(_0x47bc48, _0x552d65) {
    return _0x4324 = function (_0x1b31a9, _0x43241e) {
        _0x1b31a9 = _0x1b31a9 - 138;
        var _0x443a85 = _0x1b31[_0x1b31a9];
        return _0x443a85;
    }, _0x4324(_0x47bc48, _0x552d65);
}
GameObjectCreator['register'](_0x5889f0(151), function (_0x249907, _0x27cae6) {
    var _0x3b390b = _0x5889f0;
    _0x249907 === undefined && (_0x249907 = {});
    var _0x1acad6 = GetAdvancedValue(_0x249907, _0x3b390b(152), null), _0x340127 = new Video(this[_0x3b390b(153)], 0, 0, _0x1acad6);
    return _0x27cae6 !== undefined && (_0x249907[_0x3b390b(154)] = _0x27cae6), BuildGameObject(this[_0x3b390b(153)], _0x340127, _0x249907), !_0x249907[_0x3b390b(154)] && this[_0x3b390b(155)][_0x3b390b(154)](_0x340127), _0x340127;
});