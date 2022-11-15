/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */
const _0x2813 = ['./SafeRange', '4|2|0|3|1', 'xoRei', 'split', 'YKwWF', 'length', 'NyxNM', 'xKcML', 'exports', '133BGFThf', '6241xjlbub', '140606EQdXgb', '4IeDvpk', '1pIbHnJ', '695352CKLayD', '446368ftscuh', '1JsnFzQ', '121486YYMfOd', '19507FqHbXu', '47HlCjpK', '1165424WJaXeS'];
const _0x3fe498 = _0x9d66;

function _0x9d66(_0xa84639, _0x391907) {
    return _0x9d66 = function (_0x21698f, _0x2db287) {
        _0x21698f = _0x21698f - 205;
        const _0x546cb1 = _0x2813[_0x21698f];

        return _0x546cb1;
    }, _0x9d66(_0xa84639, _0x391907);
}
(function (_0x5d7b0c, _0x2d2037) {
    const _0xcfa461 = _0x9d66;

    while (true) {
        try {
            const _0xdd130d = parseInt(_0xcfa461(0xcd)) * -parseInt(_0xcfa461(0xce)) + -parseInt(_0xcfa461(0xcf)) * parseInt(_0xcfa461(0xd0)) + -parseInt(_0xcfa461(0xd1)) * parseInt(_0xcfa461(0xd2)) + parseInt(_0xcfa461(0xd3)) + parseInt(_0xcfa461(0xd4)) * parseInt(_0xcfa461(0xd5)) + -parseInt(_0xcfa461(0xd6)) * -parseInt(_0xcfa461(0xd7)) + parseInt(_0xcfa461(0xd8));

            if (_0xdd130d === _0x2d2037) break;else _0x5d7b0c.push(_0x5d7b0c.shift());
        } catch (_0x432ce9) {
            _0x5d7b0c.push(_0x5d7b0c.shift());
        }
    }
})(_0x2813, 562278);

const SafeRange = require(_0x3fe498(0xd9));

const CountAllMatching = function (_0xc47546, _0x229d3b, _0x5e0c49, _0x2856ba, _0x258a29) {
    const _0x49fcdc = _0x3fe498;
    const _0xa05b8d = {
        'xoRei': _0x49fcdc(0xda),
        'YKwWF': function (_0x464e4c, _0x32bb95) {
            return _0x464e4c === _0x32bb95;
        },
        'NyxNM': function (_0x28be7d, _0x4c53d5, _0x23b1e0, _0xbe2c1b) {
            return _0x28be7d(_0x4c53d5, _0x23b1e0, _0xbe2c1b);
        },
        'dBnzT': function (_0x426257, _0x64b59d) {
            return _0x426257 < _0x64b59d;
        },
        'xKcML': function (_0x51e04b, _0x1ffc07) {
            return _0x51e04b === _0x1ffc07;
        }
    };

    const _0x40f07b = _0xa05b8d[_0x49fcdc(0xdb)][_0x49fcdc(0xdc)]('|');

    var _0x305dfb = 0;

    while (true) {
        switch (_0x40f07b[_0x305dfb++]) {
            case '0':
                var _0x460d71 = 0;

                continue;
            case '1':
                return _0x460d71;
            case '2':
                _0xa05b8d[_0x49fcdc(0xdd)](_0x258a29, undefined) && (_0x258a29 = _0xc47546[_0x49fcdc(0xde)]);
                continue;
            case '3':
                if (_0xa05b8d[_0x49fcdc(0xdf)](SafeRange, _0xc47546, _0x2856ba, _0x258a29)) for (var _0x377299 = _0x2856ba; _0xa05b8d.dBnzT(_0x377299, _0x258a29); _0x377299++) {
                    const _0x43f9a5 = _0xc47546[_0x377299];

                    _0xa05b8d[_0x49fcdc(0xe0)](_0x43f9a5[_0x229d3b], _0x5e0c49) && _0x460d71++;
                }
                continue;
            case '4':
                _0x2856ba === undefined && (_0x2856ba = 0);
                continue;
        }
        break;
    }
};

module[_0x3fe498(0xe1)] = CountAllMatching;
