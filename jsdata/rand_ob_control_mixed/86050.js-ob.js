/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
var BuildGameObject = require('../BuildGameObject'), GameObjectCreator = require('../GameObjectCreator'), GetAdvancedValue = require('../../utils/object/GetAdvancedValue'), Video = require('./Video');
GameObjectCreator['register']('video', function (_0x366506, _0x411189) {
    var _0x5db6bc = {
            'TJWJg': '5|2|1|3|6|4|0',
            'UBLWR': function (_0xb9fcb4, _0x316115, _0x3f3a30, _0x3c42a3) {
                return _0xb9fcb4(_0x316115, _0x3f3a30, _0x3c42a3);
            },
            'yYxBH': 'key',
            'ZvcYV': function (_0x238fc8, _0x48bd73) {
                return _0x238fc8 !== _0x48bd73;
            },
            'pohpp': function (_0x5a1eb3, _0x580e83) {
                return _0x5a1eb3 === _0x580e83;
            }
        }, _0x10c9c7 = _0x5db6bc['TJWJg']['split']('|'), _0x2dce34 = 0x0;
    while (!![]) {
        switch (_0x10c9c7[_0x2dce34++]) {
        case '0':
            return _0xda6787;
        case '1':
            var _0xda6787 = new Video(this['scene'], 0x0, 0x0, _0x5cf4d4);
            continue;
        case '2':
            var _0x5cf4d4 = _0x5db6bc['UBLWR'](GetAdvancedValue, _0x366506, _0x5db6bc['yYxBH'], null);
            continue;
        case '3':
            _0x5db6bc['ZvcYV'](_0x411189, undefined) && (_0x366506['add'] = _0x411189);
            continue;
        case '4':
            !_0x366506['add'] && this['updateList']['add'](_0xda6787);
            continue;
        case '5':
            _0x5db6bc['pohpp'](_0x366506, undefined) && (_0x366506 = {});
            continue;
        case '6':
            _0x5db6bc['UBLWR'](BuildGameObject, this['scene'], _0xda6787, _0x366506);
            continue;
        }
        break;
    }
});
