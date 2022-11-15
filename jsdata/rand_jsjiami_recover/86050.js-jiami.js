var BuildGameObject = require('../BuildGameObject');
var GameObjectCreator = require('../GameObjectCreator');
var GetAdvancedValue = require('../../utils/object/GetAdvancedValue');
var Video = require('./Video');
GameObjectCreator['register']('video', function (_0xd0a2cc, _0x54cce1) {
    var _0x25720e = '0|1|2|4|6|3|5'['split']('|'), _0x5b32df = 0;
    while (!![]) {
        switch (_0x25720e[_0x5b32df++]) {
        case '0':
            if (_0xd0a2cc === undefined) {
                _0xd0a2cc = {};
            }
            continue;
        case '1':
            var _0x370047 = GetAdvancedValue(_0xd0a2cc, 'key', null);
            continue;
        case '2':
            var _0x3b135a = new Video(this['scene'], 0, 0, _0x370047);
            continue;
        case '3':
            if (!_0xd0a2cc['add']) {
                this['updateList']['add'](_0x3b135a);
            }
            continue;
        case '4':
            if (_0x54cce1 !== undefined) {
                _0xd0a2cc['add'] = _0x54cce1;
            }
            continue;
        case '5':
            return _0x3b135a;
        case '6':
            BuildGameObject(this['scene'], _0x3b135a, _0xd0a2cc);
            continue;
        }
        break;
    }
});