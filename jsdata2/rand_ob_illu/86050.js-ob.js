/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
const _0x2695 = ['register', '0|5|1|2|3|4|6', 'key', 'split', 'UNSax', 'scene', 'add', 'updateList', 'lrhTn', '53jXOBVW', '2703iUooWF', '575666dztOXz', '643630xLkYTs', '61227QMaTYE', '8URsmcr', '305934IDkjBX', '2083hmDerI', '211XsCdnl', '1785fXozgt', '../BuildGameObject', '../../utils/object/GetAdvancedValue'];

function _0x5761(_0x292de5, _0x4a30cc) {
    return _0x5761 = function (_0x3fc029, _0x952959) {
        _0x3fc029 = _0x3fc029 - 343;
        const _0x52455b = _0x2695[_0x3fc029];

        return _0x52455b;
    }, _0x5761(_0x292de5, _0x4a30cc);
}
const _0x403656 = _0x5761;

(function (_0x16ad0c, _0x1b57c3) {
    const _0x11770c = _0x5761;

    while (true) {
        try {
            const _0x1c5e44 = -parseInt(_0x11770c(0x157)) * -parseInt(_0x11770c(0x158)) + -parseInt(_0x11770c(0x159)) + parseInt(_0x11770c(0x15a)) + -parseInt(_0x11770c(0x15b)) * -parseInt(_0x11770c(0x15c)) + parseInt(_0x11770c(0x15d)) + parseInt(_0x11770c(0x15e)) * -parseInt(_0x11770c(0x15f)) + -parseInt(_0x11770c(0x160));

            if (_0x1c5e44 === _0x1b57c3) break;else _0x16ad0c.push(_0x16ad0c.shift());
        } catch (_0x44d411) {
            _0x16ad0c.push(_0x16ad0c.shift());
        }
    }
})(_0x2695, 565675);

const BuildGameObject = require(_0x403656(0x161));

const GameObjectCreator = require('../GameObjectCreator');

const GetAdvancedValue = require(_0x403656(0x162));

const Video = require('./Video');

GameObjectCreator[_0x403656(0x163)]('video', function (_0xffd212, _0x1bbf43) {
    const _0x569bb1 = _0x403656;
    const _0x206bb9 = {
        'qvWRc': _0x569bb1(0x164),
        'UNSax': function (_0x2d13f4, _0x4bba99) {
            return _0x2d13f4 === _0x4bba99;
        },
        'LIFLl': function (_0x519bdb, _0x1536dc, _0x4fc3a1, _0x4b1ace) {
            return _0x519bdb(_0x1536dc, _0x4fc3a1, _0x4b1ace);
        },
        'lrhTn': function (_0x497faa, _0x1125e3, _0x5300eb, _0x4ad780) {
            return _0x497faa(_0x1125e3, _0x5300eb, _0x4ad780);
        },
        'HYsFs': _0x569bb1(0x165)
    };

    const _0x579848 = _0x206bb9.qvWRc[_0x569bb1(0x166)]('|');

    var _0x2675b6 = 0;

    while (true) {
        switch (_0x579848[_0x2675b6++]) {
            case '0':
                _0x206bb9[_0x569bb1(0x167)](_0xffd212, undefined) && (_0xffd212 = {});
                continue;
            case '1':
                const _0x30778b = new Video(this[_0x569bb1(0x168)], 0, 0, _0x8e39fb);

                continue;
            case '2':
                _0x1bbf43 !== undefined && (_0xffd212[_0x569bb1(0x169)] = _0x1bbf43);
                continue;
            case '3':
                _0x206bb9.LIFLl(BuildGameObject, this[_0x569bb1(0x168)], _0x30778b, _0xffd212);
                continue;
            case '4':
                !_0xffd212[_0x569bb1(0x169)] && this[_0x569bb1(0x16a)][_0x569bb1(0x169)](_0x30778b);
                continue;
            case '5':
                const _0x8e39fb = _0x206bb9[_0x569bb1(0x16b)](GetAdvancedValue, _0xffd212, _0x206bb9.HYsFs, null);

                continue;
            case '6':
                return _0x30778b;
        }
        break;
    }
});