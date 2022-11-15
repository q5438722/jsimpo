/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
const _0xd397 = ['FkEYe', 'push', 'apply', '1370850JgnuPj', '1337541cxqFmX', '1gYXJQi', '1611443EflGyA', '141nbfCee', '4197fQIgOj', '249bxtEFz', '3153rAGLkn', '1zyZnWH', '174409JNMrVe', '2391087NGMqXR', './SafeRange', 'length'];
const _0x23ba62 = _0x43d4;

function _0x43d4(_0xe430b8, _0x250c5c) {
    return _0x43d4 = function (_0x293c9e, _0x18bce8) {
        _0x293c9e = _0x293c9e - 259;
        const _0x3191d7 = _0xd397[_0x293c9e];

        return _0x3191d7;
    }, _0x43d4(_0xe430b8, _0x250c5c);
}
(function (_0x47ee50, _0x43b0f7) {
    const _0x87df9b = _0x43d4;

    while (true) {
        try {
            const _0x4d3aeb = parseInt(_0x87df9b(0x103)) + -parseInt(_0x87df9b(0x104)) * parseInt(_0x87df9b(0x105)) + -parseInt(_0x87df9b(0x106)) + -parseInt(_0x87df9b(0x107)) * parseInt(_0x87df9b(0x108)) + -parseInt(_0x87df9b(0x109)) * -parseInt(_0x87df9b(0x10a)) + -parseInt(_0x87df9b(0x10b)) * parseInt(_0x87df9b(0x10c)) + parseInt(_0x87df9b(0x10d));

            if (_0x4d3aeb === _0x43b0f7) break;else _0x47ee50.push(_0x47ee50.shift());
        } catch (_0x5b1d8f) {
            _0x47ee50.push(_0x47ee50.shift());
        }
    }
})(_0xd397, 831864);

const SafeRange = require(_0x23ba62(0x10e));

const EachInRange = function (_0x3442ca, _0x34d7ef, _0x1dc5ad, _0x205ead, _0x2dda3b) {
    const _0x430838 = _0x23ba62;
    const _0x2e46cb = {
        'beNXZ': function (_0x4fa1e1, _0x1ee8f4) {
            return _0x4fa1e1 === _0x1ee8f4;
        },
        'FkEYe': function (_0x3595bd, _0x5c4103, _0x10d5b4, _0x489a18) {
            return _0x3595bd(_0x5c4103, _0x10d5b4, _0x489a18);
        },
        'NmcLE': function (_0x22680f, _0x232e81) {
            return _0x22680f < _0x232e81;
        }
    };

    _0x2e46cb.beNXZ(_0x205ead, undefined) && (_0x205ead = 0);
    _0x2dda3b === undefined && (_0x2dda3b = _0x3442ca[_0x430838(0x10f)]);
    if (_0x2e46cb[_0x430838(0x110)](SafeRange, _0x3442ca, _0x205ead, _0x2dda3b)) {
        var _0x453212;

        const _0x27df48 = [null];

        for (_0x453212 = 5; _0x453212 < arguments[_0x430838(0x10f)]; _0x453212++) {
            _0x27df48[_0x430838(0x111)](arguments[_0x453212]);
        }
        for (_0x453212 = _0x205ead; _0x2e46cb.NmcLE(_0x453212, _0x2dda3b); _0x453212++) {
            _0x27df48[0] = _0x3442ca[_0x453212], _0x34d7ef[_0x430838(0x112)](_0x1dc5ad, _0x27df48);
        }
    }
    return _0x3442ca;
};

module['exports'] = EachInRange;
