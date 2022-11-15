/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
const _0x183d = ['38VxCpTX', '83603PoeBEN', '903327XhyVXh', '1kfBQtX', '423957uUocMm', '303542DSejmL', '1ZKbXdG', './SafeRange', 'wbQcu', 'length', 'FYpbb', 'Gpcxw', 'push', 'apply', 'exports', '135211kbcZCz', '5yLVUoh', '15388XpmVxK', '22DgdmRH', '17551fgMjet'];
const _0x5c9319 = _0x1f31;

(function (_0x3b9d36, _0x3dc4fe) {
    const _0x54916f = _0x1f31;

    while (true) {
        try {
            const _0x1cc7ae = parseInt(_0x54916f(0x9a)) * -parseInt(_0x54916f(0x9b)) + -parseInt(_0x54916f(0x9c)) * parseInt(_0x54916f(0x9d)) + -parseInt(_0x54916f(0x9e)) * -parseInt(_0x54916f(0x9f)) + parseInt(_0x54916f(0xa0)) + parseInt(_0x54916f(0xa1)) * parseInt(_0x54916f(0xa2)) + -parseInt(_0x54916f(0xa3)) + parseInt(_0x54916f(0xa4)) * parseInt(_0x54916f(0xa5));

            if (_0x1cc7ae === _0x3dc4fe) break;else _0x3b9d36.push(_0x3b9d36.shift());
        } catch (_0x21c3e6) {
            _0x3b9d36.push(_0x3b9d36.shift());
        }
    }
})(_0x183d, 518862);
function _0x1f31(_0x33d120, _0x39cb46) {
    return _0x1f31 = function (_0x5bce8b, _0x380319) {
        _0x5bce8b = _0x5bce8b - 154;
        const _0x4431c3 = _0x183d[_0x5bce8b];

        return _0x4431c3;
    }, _0x1f31(_0x33d120, _0x39cb46);
}

const SafeRange = require(_0x5c9319(0xa6));

const EachInRange = function (_0x1c9598, _0x3002ae, _0x1c13fe, _0x4a9512, _0x2c94e8) {
    const _0x106276 = _0x5c9319;
    const _0x285297 = {
        'wbQcu': function (_0x321aab, _0x2df95c) {
            return _0x321aab === _0x2df95c;
        },
        'FYpbb': function (_0x57986e, _0x38f18f, _0x4e6e68, _0x4161dd) {
            return _0x57986e(_0x38f18f, _0x4e6e68, _0x4161dd);
        },
        'Gpcxw': function (_0x3aed7c, _0x1cfd69) {
            return _0x3aed7c < _0x1cfd69;
        }
    };

    _0x285297[_0x106276(0xa7)](_0x4a9512, undefined) && (_0x4a9512 = 0);
    _0x285297[_0x106276(0xa7)](_0x2c94e8, undefined) && (_0x2c94e8 = _0x1c9598[_0x106276(0xa8)]);
    if (_0x285297[_0x106276(0xa9)](SafeRange, _0x1c9598, _0x4a9512, _0x2c94e8)) {
        var _0x183c6c;

        const _0x51691f = [null];

        for (_0x183c6c = 5; _0x285297[_0x106276(0xaa)](_0x183c6c, arguments.length); _0x183c6c++) {
            _0x51691f[_0x106276(0xab)](arguments[_0x183c6c]);
        }
        for (_0x183c6c = _0x4a9512; _0x285297[_0x106276(0xaa)](_0x183c6c, _0x2c94e8); _0x183c6c++) {
            _0x51691f[0] = _0x1c9598[_0x183c6c], _0x3002ae[_0x106276(0xac)](_0x1c13fe, _0x51691f);
        }
    }
    return _0x1c9598;
};

module[_0x5c9319(0xad)] = EachInRange;
