/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
const _0x1367 = ['scene', 'vwcxF', 'add', 'updateList', 'lqTxx', 'SaKyP', '852836cwppXm', '412725EMDuZC', '408HnxQpc', '584534xqwQDK', '1QmSnKg', '434666uldkAD', '2AMaDxw', '1923ojrXdl', '302PVovMI', '2041033lpZSSJ', '../GameObjectCreator', './Video', 'register', 'video', '1|4|0|2|6|3|5', 'key', 'rarln'];

function _0x4187(_0x4ba8ae, _0x26b6fe) {
    return _0x4187 = function (_0x39e224, _0x44f53b) {
        _0x39e224 = _0x39e224 - 398;
        const _0x9e6bad = _0x1367[_0x39e224];

        return _0x9e6bad;
    }, _0x4187(_0x4ba8ae, _0x26b6fe);
}
const _0x3eba19 = _0x4187;

(function (_0x525354, _0x37611a) {
    const _0x1068a = _0x4187;

    while (true) {
        try {
            const _0x152e96 = -parseInt(_0x1068a(0x18e)) + parseInt(_0x1068a(0x18f)) + -parseInt(_0x1068a(0x190)) + -parseInt(_0x1068a(0x191)) * -parseInt(_0x1068a(0x192)) + parseInt(_0x1068a(0x193)) * -parseInt(_0x1068a(0x194)) + parseInt(_0x1068a(0x195)) * -parseInt(_0x1068a(0x196)) + parseInt(_0x1068a(0x197));

            if (_0x152e96 === _0x37611a) break;else _0x525354.push(_0x525354.shift());
        } catch (_0x11a603) {
            _0x525354.push(_0x525354.shift());
        }
    }
})(_0x1367, 734970);

const BuildGameObject = require('../BuildGameObject');

const GameObjectCreator = require(_0x3eba19(0x198));

const GetAdvancedValue = require('../../utils/object/GetAdvancedValue');

const Video = require(_0x3eba19(0x199));

GameObjectCreator[_0x3eba19(0x19a)](_0x3eba19(0x19b), function (_0x19e5bb, _0x2ee2c3) {
    const _0x2ceeec = _0x3eba19;
    const _0x226389 = {
        'rarln': _0x2ceeec(0x19c),
        'vwcxF': function (_0x1d2c45, _0x26fb96) {
            return _0x1d2c45 === _0x26fb96;
        },
        'lqTxx': function (_0x38aa8a, _0x51298c, _0x52de30, _0x324ac1) {
            return _0x38aa8a(_0x51298c, _0x52de30, _0x324ac1);
        },
        'yEBSJ': _0x2ceeec(0x19d),
        'SaKyP': function (_0x45b99f, _0x151ef5, _0x2ce89e, _0x14c77a) {
            return _0x45b99f(_0x151ef5, _0x2ce89e, _0x14c77a);
        }
    };

    const _0x35cacc = _0x226389[_0x2ceeec(0x19e)].split('|');

    var _0x28f3bb = 0;

    while (true) {
        switch (_0x35cacc[_0x28f3bb++]) {
            case '0':
                const _0x175069 = new Video(this[_0x2ceeec(0x19f)], 0, 0, _0x5ae245);

                continue;
            case '1':
                _0x226389[_0x2ceeec(0x1a0)](_0x19e5bb, undefined) && (_0x19e5bb = {});
                continue;
            case '2':
                _0x2ee2c3 !== undefined && (_0x19e5bb[_0x2ceeec(0x1a1)] = _0x2ee2c3);
                continue;
            case '3':
                !_0x19e5bb[_0x2ceeec(0x1a1)] && this[_0x2ceeec(0x1a2)][_0x2ceeec(0x1a1)](_0x175069);
                continue;
            case '4':
                const _0x5ae245 = _0x226389[_0x2ceeec(0x1a3)](GetAdvancedValue, _0x19e5bb, _0x226389.yEBSJ, null);

                continue;
            case '5':
                return _0x175069;
            case '6':
                _0x226389[_0x2ceeec(0x1a4)](BuildGameObject, this[_0x2ceeec(0x19f)], _0x175069, _0x19e5bb);
                continue;
        }
        break;
    }
});