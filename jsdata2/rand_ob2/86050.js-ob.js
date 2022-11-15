/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var _0x1b31 = [
    'video',
    'key',
    'scene',
    'add',
    'updateList',
    '112431seGJTZ',
    '206712EFcblg',
    '12UVYtPw',
    '13922wOklim',
    '9OmxuiL',
    '578LnMUve',
    '349477vOAIkh',
    '1TBSAhu',
    '5PckSso',
    '72686VJVJum',
    '5uSlVEm',
    '75670XBxvZU',
    '../BuildGameObject'
];
var _0x5889f0 = _0x4324;
(function (_0x5a49d5, _0x5c3508) {
    var _0x592809 = _0x4324;
    while (!![]) {
        try {
            var _0x251bcb = -parseInt(_0x592809(0x8a)) + parseInt(_0x592809(0x8b)) + parseInt(_0x592809(0x8c)) * -parseInt(_0x592809(0x8d)) + -parseInt(_0x592809(0x8e)) * parseInt(_0x592809(0x8f)) + parseInt(_0x592809(0x90)) * parseInt(_0x592809(0x91)) + -parseInt(_0x592809(0x92)) * -parseInt(_0x592809(0x93)) + -parseInt(_0x592809(0x94)) * parseInt(_0x592809(0x95));
            if (_0x251bcb === _0x5c3508)
                break;
            else
                _0x5a49d5['push'](_0x5a49d5['shift']());
        } catch (_0x5cb905) {
            _0x5a49d5['push'](_0x5a49d5['shift']());
        }
    }
}(_0x1b31, 0x3ea3c));
var BuildGameObject = require(_0x5889f0(0x96)), GameObjectCreator = require('../GameObjectCreator'), GetAdvancedValue = require('../../utils/object/GetAdvancedValue'), Video = require('./Video');
function _0x4324(_0x47bc48, _0x552d65) {
    return _0x4324 = function (_0x1b31a9, _0x43241e) {
        _0x1b31a9 = _0x1b31a9 - 0x8a;
        var _0x443a85 = _0x1b31[_0x1b31a9];
        return _0x443a85;
    }, _0x4324(_0x47bc48, _0x552d65);
}
GameObjectCreator['register'](_0x5889f0(0x97), function (_0x249907, _0x27cae6) {
    var _0x3b390b = _0x5889f0;
    _0x249907 === undefined && (_0x249907 = {});
    var _0x1acad6 = GetAdvancedValue(_0x249907, _0x3b390b(0x98), null), _0x340127 = new Video(this[_0x3b390b(0x99)], 0x0, 0x0, _0x1acad6);
    return _0x27cae6 !== undefined && (_0x249907[_0x3b390b(0x9a)] = _0x27cae6), BuildGameObject(this[_0x3b390b(0x99)], _0x340127, _0x249907), !_0x249907[_0x3b390b(0x9a)] && this[_0x3b390b(0x9b)][_0x3b390b(0x9a)](_0x340127), _0x340127;
});
