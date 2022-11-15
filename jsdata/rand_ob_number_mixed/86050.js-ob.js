/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var BuildGameObject = require('../BuildGameObject'), GameObjectCreator = require('../GameObjectCreator'), GetAdvancedValue = require('../../utils/object/GetAdvancedValue'), Video = require('./Video');
GameObjectCreator['register']('video', function (_0x18173d, _0x4279e2) {
    _0x18173d === undefined && (_0x18173d = {});
    var _0x1efd6c = GetAdvancedValue(_0x18173d, 'key', null), _0x3e7e93 = new Video(this['scene'], -0x6 * 0x12 + 0x1 * 0xf3d + -0xed1, 0x121d + 0x2a1 * 0x3 + -0x1a00, _0x1efd6c);
    return _0x4279e2 !== undefined && (_0x18173d['add'] = _0x4279e2), BuildGameObject(this['scene'], _0x3e7e93, _0x18173d), !_0x18173d['add'] && this['updateList']['add'](_0x3e7e93), _0x3e7e93;
});
